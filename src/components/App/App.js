import React from 'react';
import List from '../List/List';
import Content from '../Content/Content';
import { getDefaultNote } from '../../helper';
import base from '../../base';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.updateNote = this.updateNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.updateFocus = this.updateFocus.bind(this);
    // state.notes should be empty finally.
    this.state = {
      notes: [
        getDefaultNote(),
      ],
      focus: 0,
    };
  }
  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState('notes', {
      context: this,
      state: 'notes',
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  updateNote(key, updatedNote) {
    const notes = [...this.state.notes];
    notes[key] = updatedNote;
    this.setState({ notes });
  }
  addNote(note) {
    const notes = [...this.state.notes, note];
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
          focus={this.state.focus}
          updateFocus={this.updateFocus}
        />
        <Content
          notes={this.state.notes}
          updateNote={this.updateNote}
          focus={this.state.focus}
        />
      </div>
    );
  }
}

export default App;
