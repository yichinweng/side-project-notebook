import React from 'react';
import { getNowTime } from '../../helper';

import './Content.scss';

class Content extends React.Component {
  constructor() {
    super();
    this.saveNote = this.saveNote.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  saveNote(e, key) {
    const note = this.props.notes[key];
    const updatedNote = {
      ...note,
      [e.target.name]: e.target.value,
      timestamp: getNowTime(),
    };
    this.props.updateNote(key, updatedNote);
  }
  renderContent(key) {
    const note = this.props.notes[key];
    return (
      <div className="note-content">
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={e => this.saveNote(e, key)}
        />
        <span>{note.timestamp}</span>
        <textarea
          name="content"
          value={note.content}
          placeholder="Enter your note..."
          onChange={e => this.saveNote(e, key)}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="note-content-container">
        {this.renderContent('noteDefault')}
      </div>
    );
  }
}

export default Content;
