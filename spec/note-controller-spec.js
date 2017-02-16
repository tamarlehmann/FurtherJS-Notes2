function testNoteControllerCanBeInstantiated() {
  var list = new NoteList();
  var controller = new NoteController(list);
  assert.isTrue(controller instanceof NoteController);
}

console.log("8. A NoteController can be instantiated.");
testNoteControllerCanBeInstantiated();


function testAppElementContainsNotesAsHTML() {
  var doubleElement = document.createElement('div');
  var list = new NoteList();
  list.addNote("This is a note");
  var controller = new NoteController(list, doubleElement);
  controller.htmlInserter();
  assert.isTrue(controller.element.innerHTML === "<ul><li><div><a href=\"#notes/" + 0 + "\">" + "This is a note</a></div></li></ul>");
}

console.log("9. The app element contains notes as HTML string.");
testAppElementContainsNotesAsHTML();
