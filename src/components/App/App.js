import React from 'react';
import List from '../List/List';
import Content from '../Content/Content';
import { getDefaultNote } from '../../helper';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateFocus = this.updateFocus.bind(this);
    // state.notes should be empty finally.
    this.state = {
      notes: [
        getDefaultNote(),
      ],
      focus: 0,
    };
  }
  update(updatedNote) {
    const notes = [...this.state.notes];
    notes[this.state.focus] = updatedNote;
    this.setState({ notes });
  }
  addNote(note) {
    const notes = [...this.state.notes, note];
    this.setState({ notes });
  }
  deleteNote(key) {
    const notes = [...this.state.notes];
    notes[key] = null;
    this.setState({ notes });
  }
  updateFocus(focus) {
    this.setState({ focus });
  }
  render() {
    return (
      <div className="note-app">
        <List
          notes={this.state.notes}
          addNote={this.addNote}
          deleteNote={this.deleteNote}
          focus={this.state.focus}
          updateFocus={this.updateFocus}
        />
        <Content
          note={this.state.notes[this.state.focus]}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
