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
  list.addNote("Hello, I love Javascript!");
  var controller = new NoteController(list, doubleElement);
  controller.htmlInserter();
  assert.isTrue(controller.element.innerHTML === "<ul><li><div><a href=\"#notes/" + 0 + "\">" + "Hello, I love Javasc</a></div></li></ul>");
}

console.log("9. The app element contains notes as HTML string.");
testAppElementContainsNotesAsHTML();

// function testClickedNoteDisplaysSingleNote(){
//   var list = new NoteList();
//   list.addNote('Hello, I love Javascript!');
//   var linkDouble = document.createElement('app');
//   var noteDouble = document.createElement('singlenote');
//   var controller = new NoteController(list, linkDouble);
//   controller.htmlInserter();
//   controller.urlChangeShowsNote();
//   linkDouble.querySelector('a').click();
//   assert.isTrue(noteDouble.innerHTML === "Hello, I love Javascript!");
// };
//
// console.log("11. The singlenote element contains the full text of the note.");
// testClickedNoteDisplaysSingleNote()
