function testDisplayNoteListReturnsListOfNotes() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.displayList()));
}

console.log("3. Has a method that will return the list of notes.");
testDisplayNoteListReturnsListOfNotes();


function listCanCreateAndStoreNotes() {
  var noteList = new NoteList();
  noteList.addNote("This is my note");
  noteList.addNote("This is my other note");

  assert.isTrue(noteList.displayList().length === 2);
}
console.log("4. Checks that you can create and store notes in the notelist.");
listCanCreateAndStoreNotes();
