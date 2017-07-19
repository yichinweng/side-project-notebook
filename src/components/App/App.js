import React from 'react';
import List from '../List/List';
import Content from '../Content/Content';
import { getNowTime } from '../../helper';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.updateNote = this.updateNote.bind(this);
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
