var list = new NoteList();
var element = document.getElementById('app');
list.addNote('Hello, I love Javascript!');
var controller = new NoteController(list, element);
controller.htmlInserter();
