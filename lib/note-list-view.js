"use strict";

(function(exports){

  function ListView(noteList){
    this._noteList = noteList.displayList();
  }

  ListView.prototype.displayNotes = function() {
    var string = "";
    for (var i = 0; i < this._noteList.length; i++) {
      string += "<li><div><a href=\"#notes/" + i + "\">" + this._noteList[i].displayNote().slice(0, 20) + "</a></div></li>";
    }
    return "<ul>" + string + "</ul>";
  };

exports.ListView = ListView;

})(this);
