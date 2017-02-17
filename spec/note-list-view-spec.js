function testViewDisplaysListOfNotes() {
  var note = {
    displayNote: function() {
      return "Hello my name is Dylan";
    },
  };
  var noteList = {
    displayList: function() {
      return [note];
    },
  };
  var listView = new ListView(noteList);
  var htmlString = "<ul><li><div>Hello my name is Dyl</div></li></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("5. Has a method that will return a string of HTML that represents the note list model.");
testViewDisplaysListOfNotes();

function testViewDisplaysListOfTwoNotes() {
  var note = {
    displayNote: function() {
      return "Hello my name is Dylan"
    },
  };
  var note2 = {
    displayNote: function() {
      return "Hello my name is Tamar"
    },
  };
  var noteList = {
    displayList: function() {
      return [note, note2];
    },
  };
  var listView = new ListView(noteList);
  var htmlString = "<ul><li><div>Hello my name is Dyl</div></li><li><div>Hello my name is Tam</div></li></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("6. Returns a string of HTML with 2 notes that represents the note list model.");
testViewDisplaysListOfTwoNotes();


function testViewDisplaysListOfNoNotes() {
  var noteList = {
    displayList: function() {
      return [];
    },
  };
  var listView = new ListView(noteList);
  var htmlString = "<ul></ul>";
  assert.isTrue(listView.displayNotes() === htmlString);
}

console.log("7. Returns a string of HTML with no notes that represents the note list model.");
testViewDisplaysListOfNoNotes();
