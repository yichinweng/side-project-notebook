import React from 'react';
import PropTypes from 'prop-types';
import { getNowTime } from '../../helper';

import './Content.scss';

class Content extends React.Component {
  constructor() {
    super();
    this.save = this.save.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  save(e) {
    const updatedNote = {
      ...this.props.note,
      [e.target.name]: e.target.value,
      timestamp: getNowTime(),
    };
    this.props.update(updatedNote);
  }
  renderContent() {
    const note = this.props.note;
    return (
      <div className="note-content">
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={e => this.save(e)}
        />
        <span>{note.timestamp}</span>
        <textarea
          name="content"
          value={note.content}
          placeholder="Enter your note..."
          onChange={e => this.save(e)}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="note-content-container">
        {this.renderContent()}
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
  update: PropTypes.func.isRequired,
};

export default Content;

