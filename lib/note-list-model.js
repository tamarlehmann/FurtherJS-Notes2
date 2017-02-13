(function(exports){

  var noteList

  function NoteList(){
    noteList = [];
  }

  NoteList.prototype.displayList = function() {
    return noteList;
    // console.log("6");
  };

exports.NoteList = NoteList;
exports.displayList = Note.displayList;
})(this);
