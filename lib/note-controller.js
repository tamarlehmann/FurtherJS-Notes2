"use strict";

(function(exports){

  function NoteController(noteList, element){
    this.noteList = noteList;
    this._listView = new ListView(noteList);
    this.element = element;
  }


  NoteController.prototype.htmlInserter = function() {
    this.element.innerHTML = this._listView.displayNotes();
  };

  exports.NoteController = NoteController;

})(this)
