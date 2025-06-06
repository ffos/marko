import { types as t } from "@marko/compiler";
import {
  getFile,
  getTemplateId,
  isNativeTag,
} from "@marko/compiler/babel-utils";

import { generateUid } from "../util/generate-uid";
import { getFnRoot, getMarkoRoot } from "../util/get-root";
import { isCoreTagName } from "../util/is-core-tag";
import { getSection } from "../util/sections";
import type { TemplateVisitor } from "../util/visitors";
declare module "@marko/compiler/dist/types" {
  export interface FunctionDeclarationExtra {
    registerId?: string;
    name?: string;
  }

  export interface FunctionExpressionExtra {
    registerId?: string;
    name?: string;
  }

  export interface ArrowFunctionExpressionExtra {
    registerId?: string;
    name?: string;
  }
}

export default {
  analyze(fn) {
    if (fn !== getFnRoot(fn)) {
      return;
    }

    const markoRoot = getMarkoRoot(fn);
    if (
      markoRoot &&
      (markoRoot.isMarkoPlaceholder() ||
        (markoRoot.isMarkoScriptlet() && markoRoot.node.target === "server"))
    ) {
      // Server only or render only functions never need to be registered.
      return;
    }

    if (
      isMarkoAttribute(markoRoot) &&
      ((isNativeTag(markoRoot.parentPath) &&
        /^on[A-Z-]/.test(markoRoot.node.name)) ||
        isCoreTagName(markoRoot.parentPath, "script") ||
        isCoreTagName(markoRoot.parentPath, "lifecycle") ||
        isCoreTagName(markoRoot.parentPath, "for"))
    ) {
      // Native tags, effects, lifecycles, and for loops aren't registered here since handle pulling in the function themselves.
      return;
    }

    const { node } = fn;
    const section = getSection(fn);
    const extra = (node.extra ??= {});
    const {
      markoOpts,
      opts: { filename },
    } = getFile();
    const name = (extra.name = generateUid(
      (fn.node as t.FunctionExpression).id?.name ||
        (isMarkoAttribute(markoRoot)
          ? markoRoot.node.default
            ? t.toIdentifier(
                markoRoot.parentPath.has("var")
                  ? markoRoot.parentPath.get("var")
                  : markoRoot.parentPath.get("name"),
              )
            : markoRoot.node.name
          : t.isVariableDeclarator(fn.parent) && t.isIdentifier(fn.parent.id)
            ? fn.parent.id.name
            : t.isObjectMethod(node) && t.isIdentifier(node.key)
              ? node.key.name
              : "anonymous"),
    ));

    extra.section = section;
    extra.registerId = getTemplateId(
      markoOpts,
      filename as string,
      `${section.id}/${name.slice(1)}`,
    );
  },
} satisfies TemplateVisitor<t.Function>;

function isMarkoAttribute(
  path: t.NodePath | undefined | null,
): path is t.NodePath<t.MarkoAttribute> & {
  parent: t.MarkoTag;
  parentPath: t.NodePath<t.MarkoTag>;
} {
  return path ? path.isMarkoAttribute() : false;
}
