"use strict";

(function(exports) {

  var noteID = 0;

  function Note(text) {
    this._noteText = text;
    this._noteID = noteID;
    this.incrementID();
  }

  Note.prototype.displayNote = function () {
    return this._noteText;
  };

  Note.prototype.incrementID = function(){
    noteID++;
  };

exports.Note = Note;

})(this);
