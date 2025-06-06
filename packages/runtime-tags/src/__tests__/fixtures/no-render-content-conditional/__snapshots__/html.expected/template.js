import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const output = _$.nodeRef($scope0_id, "__tests__/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  const $childScope = _$.peekNextScopeId();
  _child({
    foo: input.foo,
    output: output
  }, _$.serializeGuard($serialize, /* input.foo */0));
  _$.writeScope($scope0_id, {
    "#childScope/1": _$.serializeIf($serialize, /* input.foo */0) && _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
});