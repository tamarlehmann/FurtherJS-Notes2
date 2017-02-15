function testViewDisplaysListOfNotes() {
  var noteList = new NoteList();
  noteList.addNote("This is a note");
  var listView = new ListView(noteList);
  var htmlString = "<ul><li><div>This is a note</div></li></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("4. Has a method that will return a string of HTML that represents the note list model.");
testViewDisplaysListOfNotes();
