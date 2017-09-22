import React from 'react';
import PropTypes from 'prop-types';
import { getNowTime } from '../../helper';

import './Content.scss';

class Content extends React.Component {
  constructor() {
    super();
    this.saveNote = this.saveNote.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  saveNote(e, note) {
    const updatedNote = {
      ...note,
      [e.target.name]: e.target.value,
      timestamp: getNowTime(),
    };
    this.props.updateNote(updatedNote);
  }
  renderContent(note) {
    return (
      <div className="note-content">
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={e => this.saveNote(e, note)}
        />
        <span>{note.timestamp}</span>
        <textarea
          name="content"
          value={note.content}
          placeholder="Enter your note..."
          onChange={e => this.saveNote(e, note)}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="note-content-container">
        {this.renderContent(this.props.note)}
      </div>
    );
  }
}
Content.propTypes = {
  note: PropTypes.shape({
    // these attribute should add `isRequired`, but it will be error.
    title: PropTypes.string,
    content: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default Content;

