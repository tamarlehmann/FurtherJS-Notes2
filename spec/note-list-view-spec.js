function testViewDisplaysListOfNotes() {
  var noteList = new NoteList();
  noteList.addNote("This is a note");
  var listView = new ListView(noteList);
  var htmlString = "<ul><li><div>This is a note</div></li></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("4. Has a method that will return a string of HTML that represents the note list model.");
testViewDisplaysListOfNotes();

function testViewDisplaysListOfTwoNotes() {
  var noteList = new NoteList();
  noteList.addNote("This is a note");
  noteList.addNote("This is another note");
  var listView = new ListView(noteList);
  var htmlString = "<ul><li><div>This is a note</div></li><li><div>This is another note</div></li></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("5. Returns a string of HTML with 2 notes that represents the note list model.");
testViewDisplaysListOfTwoNotes();


function testViewDisplaysListOfNoNotes() {
  var noteList = new NoteList();
  var listView = new ListView(noteList);
  var htmlString = "<ul></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("6. Returns a string of HTML with no notes that represents the note list model.");
testViewDisplaysListOfNoNotes();
