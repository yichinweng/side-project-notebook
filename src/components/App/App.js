import React from 'react';
import List from '../List/List';
import Content from '../Content/Content';
import { getDefaultNote } from '../../helper';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.handleContentUpdate = this.handleContentUpdate.bind(this);
    this.handleListAddNote = this.handleListAddNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.handleUpdateFocus = this.handleUpdateFocus.bind(this);
    // state.notes should be empty finally.
    this.state = {
      notes: [
        getDefaultNote(),
      ],
      focus: 0,
    };
  }
  handleContentUpdate(updatedNote) {
    const notes = [...this.state.notes];
    notes[this.state.focus] = updatedNote;
    this.setState({ notes });
  }
  handleListAddNote(note) {
    const notes = [...this.state.notes, note];
    this.setState({ notes });
  }
  deleteNote(key) {
    const notes = [...this.state.notes];
    notes[key] = null;
    this.setState({ notes });
  }
  handleUpdateFocus(focus) {
    this.setState({ focus });
  }
  render() {
    return (
      <div className="note-app">
        <List
          notes={this.state.notes}
          focus={this.state.focus}
          onAddNote={this.handleListAddNote}
          deleteNote={this.deleteNote}
          onUpdateFocus={this.handleUpdateFocus}
        />
        <Content
          note={this.state.notes[this.state.focus]}
          onUpdate={this.handleContentUpdate}
        />
      </div>
    );
  }
}

export default App;
