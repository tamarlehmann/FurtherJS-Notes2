"use strict";

(function(exports) {

  function Note(text) {
    this._noteText = text;
  }

  Note.prototype.displayNote = function () {
    return this._noteText;
  };

exports.Note = Note;

})(this);
