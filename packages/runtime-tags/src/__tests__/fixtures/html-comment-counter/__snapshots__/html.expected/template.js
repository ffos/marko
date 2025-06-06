import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<div><button>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}<!--${_$.escapeXML(count)} + ${_$.escapeXML(count)} = ${_$.escapeXML(count + count)}-->${_$.markResumeNode($scope0_id, "#comment/2")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "2:8"
  });
  _$.resumeClosestBranch($scope0_id);
});