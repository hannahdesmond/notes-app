/**
 * @jest-environment jsdom
 */
// this signals to jest to mock document and window

const NotesModel = require('./notesModel');
const NotesView = require('./notesView')
const fs = require('fs');
// file system module
//fs or path are core modules of Node. They are not mocked by default.

describe(NotesView, () => {
  it('adds new notes to NotesModel', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel;
    const notesView = new NotesView(notesModel)
    notesModel.addNote("This is my note");
    notesModel.addNote("This is another note");
    notesView.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })
});