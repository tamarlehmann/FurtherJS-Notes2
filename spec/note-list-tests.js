function testDisplayNoteListReturnsListOfNotes() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.displayList()));
}

testDisplayNoteListReturnsListOfNotes();

function listCanCreateAndStoreNotes() {
  var noteList = new NoteList();
  noteList.addNote("This is my note");
  noteList.addNote("This is my other note");

  assert.isTrue(noteList.displayList().length === 2);
}

listCanCreateAndStoreNotes();
