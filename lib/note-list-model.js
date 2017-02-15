"use strict";

(function(exports){

  function NoteList(){
    this._noteList = [];
  }

  NoteList.prototype.displayList = function() {
    return this._noteList;
  };

  NoteList.prototype.addNote = function(text) {
    this._noteList.push(new Note(text));
  };

exports.NoteList = NoteList;

})(this);
