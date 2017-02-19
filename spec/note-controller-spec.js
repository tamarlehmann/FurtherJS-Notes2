function testNoteControllerCanBeInstantiated() {
  var list = new NoteList();
  var controller = new NoteController(list);
  assert.isTrue(controller instanceof NoteController);
}

console.log("8. A NoteController can be instantiated.");
testNoteControllerCanBeInstantiated();


function testAppElementContainsNotesAsHTML() {
  var doubleElement = document.createElement('div');

  var note = {
    displayNote: function() {
      return "This is a note";
    },
  };
  var list = {
    displayList: function() {
      return [note];
    },
  };
  var controller = new NoteController(list, doubleElement);
  controller.htmlInserter();
  assert.isTrue(controller.element.innerHTML === "<ul><li><div><a href=\"#notes/0\">This is a note</a></div></li></ul>");
}

console.log("9. The app element contains notes as HTML string.");
testAppElementContainsNotesAsHTML();

function testClickedNoteDisplaysSingleNote() {
  // when trying to use double this test is failing- the show note method in NoteController.js uses
  // 'list', not this.noteList because it is a private method. How can I get around this with doubles?

  // var note = {
  //   displayNote: function() {
  //     return "Hello, I love Javascript!";
  //   },
  // };
  // var list = {
  //   displayList: function() {
  //     return [note];
  //   },
  // };

  this.list = new NoteList();
  list.addNote("Hello, I love Javascript!");

  var appElement = document.createElement('div');
  appElement.setAttribute('id', 'app');
  document.body.appendChild(appElement);

  var singleNoteElement = document.createElement('div');
  singleNoteElement.setAttribute('id', 'singlenote');
  document.body.appendChild(singleNoteElement);

  var controller = new NoteController(list, appElement);
  controller.htmlInserter();
  controller.urlChangeShowsNote();

  document.querySelector('a').click();

  setTimeout(function(){
    console.log('And back from test #10:');
    assert.isTrue(document.getElementById('singlenote').innerHTML === "Hello, I love Javascript!");
  }, 0);
}

console.log("10. The singlenote element contains the full text of the note.");
testClickedNoteDisplaysSingleNote();

function testEmptyNoteListOnStart() {
  var list = {
    displayList: function() {

    },
  };
  var doubleElement = document.createElement('div')
  controller = new NoteController(list, doubleElement);
  assert.isTrue(controller.element.innerHTML === "")
}

console.log("11. The note list is empty when the app is started")
testEmptyNoteListOnStart();

function testHTMLForNewNoteWrittenToListOnSubmit() {

  // test doesn't actually test the .handleSubmit() method because can't test it
  // without injecting in the form element (not sure if we'd want to do this) and/or changing the double elements
  // mid way through tests (don't know how I'd do this?!)

  var formElement = document.createElement('textarea');
  formElement.value = "Hello, I love Javascript!";
  var doubleElement = document.createElement('div');

  var note = {
    displayNote: function() {
      return formElement.value;
    },
  };
  var list = {
    displayList: function() {
      return [note]
    },
  };

  controller = new NoteController(list, doubleElement)
  controller.htmlInserter()
  assert.isTrue(controller.element.innerHTML === "<ul><li><div><a href=\"#notes/0\">Hello, I love Javasc</a></div></li></ul>")
}

console.log("12. The HTML for a new note is written to the list on submit")
testHTMLForNewNoteWrittenToListOnSubmit()
