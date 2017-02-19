var list = new NoteList();
// list.addNote("Hello my name is Tamar")
var element = document.getElementById('app');
var controller = new NoteController(list, element);
// controller.htmlInserter();
// controller.urlChangeShowsNote();

document.addEventListener('submit', function(evt){
  evt.preventDefault();
  controller.handleSubmit();
});
