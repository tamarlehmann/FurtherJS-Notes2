function testDisplayNoteReturnsText() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.displayNote() === "My favourite language is Javascript");
}
console.log("1. Has a method that will return the note text.");
testDisplayNoteReturnsText();
