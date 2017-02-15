(function(exports){

  function ListView(noteList){
    this._noteList = noteList.displayList();
  }

  ListView.prototype.displayNotes = function() {
    var string = "";
    for (i = 0; i < this._noteList.length; i++) {
      string += "<li><div>" + this._noteList[i].displayNote() + "</div></li>";
    }
    return "<ul>" + string + "</ul>";
  };

exports.ListView = ListView;

})(this);
