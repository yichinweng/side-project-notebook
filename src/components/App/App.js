import React from 'react';
import List from '../List/List';
import Content from '../Content/Content';
import { getDefaultNote } from '../../helper';
import base from '../../base';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.handleContentUpdate = this.handleContentUpdate.bind(this);
    this.handleListAddNote = this.handleListAddNote.bind(this);
    this.handleListDeleteNote = this.handleListDeleteNote.bind(this);
    this.handleUpdateFocus = this.handleUpdateFocus.bind(this);
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
  handleContentUpdate(updatedNote) {
    const notes = [...this.state.notes];
    notes[this.state.focus] = updatedNote;
    this.setState({ notes });
  }
  handleListAddNote(note) {
    const notes = [...this.state.notes, note];
    this.setState({ notes });
  }
  handleListDeleteNote(key) {
    let notes = [...this.state.notes];
    notes.splice(key, 1);
    if (notes.length === 0) {
      notes = [getDefaultNote()];
    }
    this.setState({ notes }, () => {
      this.refreshFocus(key);
    });
  }
  refreshFocus(key) {
    if (this.state.focus > key) {
      this.handleUpdateFocus(this.state.focus - 1);
    } else if (this.state.focus === key) {
      this.handleUpdateFocus(0);
    }
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
          onDeleteNote={this.handleListDeleteNote}
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
