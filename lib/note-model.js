(function(exports) {

  var noteText

  function Note(text) {
    noteText = text;
  }

  Note.prototype.displayNote = function () {
    return noteText;
  }

exports.Note = Note;
exports.displayNote = Note.displayNote;
})(this);
