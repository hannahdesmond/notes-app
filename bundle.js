(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView = class {
        constructor(model2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.model = model2;
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.map((note) => {
            const newNote = document.createElement("div");
            newNote.className = "note";
            newNote.innerText = note;
            this.mainContainerEl.append(newNote);
          });
        }
      };
      module.exports = NotesView;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var View = require_notesView();
  var model = new NotesModel();
  var view = new View();
})();
