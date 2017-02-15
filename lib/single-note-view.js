"use strict";

(function(exports){
  function SingleNoteView(note) {
    this._note = note;
  }

  SingleNoteView.prototype.display = function(){
    return "<div>" + this._note.displayNote() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
