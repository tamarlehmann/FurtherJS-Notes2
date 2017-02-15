(function(exports){

  function NoteController(noteList){
    noteList.addNote("This is a note");
    this._listView = new ListView(noteList);
  }


  NoteController.prototype.htmlInserter = function() {
    var elem = document.getElementById('app');
    elem.innerHTML = this._listView.displayNotes();
  };

  exports.NoteController = NoteController;

})(this)
