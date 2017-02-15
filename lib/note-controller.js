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

var list = new NoteList();
var element = document.getElementById('app')
list.addNote("Hello my name is dylan");
list.addNote("Hello my name is tamar");
var controller = new NoteController(list, element);
controller.htmlInserter();
