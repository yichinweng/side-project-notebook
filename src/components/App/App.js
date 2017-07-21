import React from 'react';
import List from '../List/List';
import Content from '../Content/Content';
import { getNowTime } from '../../helper';
import base from '../../base';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.updateNote = this.updateNote.bind(this);
    // state.notes should be empty finally.
    this.state = {
      notes: {
        noteDefault: {
          title: 'Untitled',
          content: '',
          timestamp: getNowTime(),
        },
      },
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
    const notes = { ...this.state.notes };
    notes[key] = updatedNote;
    this.setState({ notes });
  }
  render() {
    return (
      <div className="note-app">
        <List notes={this.state.notes} />
        <Content notes={this.state.notes} updateNote={this.updateNote} />
      </div>
    );
  }
}

export default App;
