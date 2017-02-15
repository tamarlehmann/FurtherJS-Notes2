function testNoteControllerCanBeInstantiated() {
  var list = new NoteList();
  var controller = new NoteController(list);
  assert.isTrue(controller._listView._noteList.length === 1);
}

console.log("7. A NoteController can be instantiated.");
testNoteControllerCanBeInstantiated();
