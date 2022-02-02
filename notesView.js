const NotesModel = require("./notesModel");

class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
  }
  displayNotes() {
    const notes = this.model.getNotes();
    notes.map( note => {
      const newNote = document.createElement('div');
      newNote.className = 'note';
      newNote.innerText = note;
      this.mainContainerEl.append(newNote);
    });
  }
}

module.exports = NotesView;