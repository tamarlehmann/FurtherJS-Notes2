function Note(text){
  this._text = text;
}

Note.prototype.displayNote = function() {
  return this._text;
};
