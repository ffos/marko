"use strict";

var attrAssignment = require("./helpers/attr").a;

function StringWriter() {
  this._content = "";
  this._scripts = "";
  this._data = null;
}

StringWriter.prototype = {
  write: function (str) {
    this._content += str;
  },

  script: function (str) {
    if (str) {
      this._scripts += (this._scripts ? ";" : "") + str;
    }
  },

  get: function (key) {
    const extra = (this._data = this._data || {});
    return (extra[key] = extra[key] || []);
  },

  merge: function (otherWriter) {
    this._content += otherWriter._content;

    if (otherWriter._scripts) {
      this._scripts = this._scripts
        ? this._scripts + ";" + otherWriter._scripts
        : otherWriter._scripts;
    }

    if (otherWriter._data) {
      if (this._data) {
        for (const key in otherWriter._data) {
          if (this._data[key]) {
            this._data[key].push.apply(this._data[key], otherWriter._data[key]);
          } else {
            this._data[key] = this._writer[key];
          }
        }
      } else {
        this._data = otherWriter._data;
      }
    }
  },

  clear: function () {
    this._content = "";
    this._scripts = "";
    this._data = null;
  },

  toString: function () {
    this.state.events.emit("___toString", this);
    let str = this._content;
    if (this._scripts) {
      const cspNonce = this.state.root.global.cspNonce;
      const nonceAttr = cspNonce ? " nonce" + attrAssignment(cspNonce) : "";
      str += `<script${nonceAttr}>${this._scripts}</script>`;
    }
    return str;
  },
};

module.exports = StringWriter;
