import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    children
  } = input;
  _$.write("<div>");
  _$.resumeForOf(children, child => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode($scope1_id, "#text/0", _$.serializeGuard($serialize, /* children */0))}`);
    _$.serializeGuard($serialize, /* children */0) && _$.writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
  }, function (c) {
    return c.id;
  }, $scope0_id, "#div/0", _$.serializeGuard($serialize, /* children */0), _$.serializeGuard($serialize, /* children */0), "</div>", 1);
  _$.serializeGuard($serialize, /* children */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});