function testViewDisplaysListOfNotes() {
  var noteList = new NoteList();
  noteList.addNote("Hello my name is Dylan");
  var listView = new ListView(noteList);
  var htmlString = "<ul><li><div><a href=\"#notes/" + 0 + "\">" + "Hello my name is Dyl</a></div></li></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("5. Has a method that will return a string of HTML that represents the note list model.");
testViewDisplaysListOfNotes();

function testViewDisplaysListOfTwoNotes() {
  var noteList = new NoteList();
  noteList.addNote("Hello my name is Dylan");
  noteList.addNote("Hello my name is Tamar");
  var listView = new ListView(noteList);
  var htmlString = "<ul><li><div><a href=\"#notes/" + 0 + "\">" + "Hello my name is Dyl</a></div></li><li><div><a href=\"#notes/" + 1 + "\">" + "Hello my name is Tam</a></div></li></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("6. Returns a string of HTML with 2 notes that represents the note list model.");
testViewDisplaysListOfTwoNotes();


function testViewDisplaysListOfNoNotes() {
  var noteList = new NoteList();
  var listView = new ListView(noteList);
  var htmlString = "<ul></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("7. Returns a string of HTML with no notes that represents the note list model.");
testViewDisplaysListOfNoNotes();
