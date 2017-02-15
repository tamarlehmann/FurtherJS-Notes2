function testDisplayNoteReturnsText() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.displayNote() === "My favourite language is Javascript");
}
console.log("1. Has a method that will return the note text.");
testDisplayNoteReturnsText();

function testNoteHasItsOwnID() {
  var note = new Note("My name is Tamar");
  var note3 = new Note("and I love Javascript");
  assert.isTrue(note3._noteID === 2);
}
console.log("2. Each note model has its own ID.");
testNoteHasItsOwnID();
