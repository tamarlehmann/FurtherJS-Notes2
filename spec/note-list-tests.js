// function testListStoresArrayOfNotes() {
//   var noteList = new NoteList();
//   assert.isTrue(noteList._list === []);
// }

// testListStoresArrayOfNotes();

function testDisplayNoteListReturnsListOfNotes() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.displayList()));
}

testDisplayNoteListReturnsListOfNotes();
