import React from 'react';
import PropTypes from 'prop-types';
import { getDefaultNote } from '../../helper';
import './List.scss';

class List extends React.Component {
  static getNoteTitle(note) {
    return note.title.length > 0 ? note.title : getDefaultNote().title;
  }
  isActive(key) {
    return `note-list-item ${(key === this.props.focus) ? 'active' : ''}`;
  }
  renderNotebook(key) {
    const note = this.props.notes[key];
    return (
      <div
        role="button"
        className={this.isActive(key)}
        key={key}
        onClick={() => this.props.updateFocus(key)}
      >
        <span
          role="button"
          className="close"
          onClick={() => this.props.deleteNote(key)}
        >&times;</span>
        <h2>{List.getNoteTitle(note)}</h2>
        <span>{note.timestamp}</span>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="note-list-container">
          <h1>筆記本</h1>
          {
            this.props.notes.map((note, index) => this.renderNotebook(index))
          }
        </div>
        <button onClick={() => this.props.addNote(getDefaultNote())}>＋ Page</button>
      </div>
    );
  }
}

List.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      timestamp: PropTypes.string,
    }).isRequired,
  ).isRequired,
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  updateFocus: PropTypes.func.isRequired,
  focus: PropTypes.number.isRequired,
};

export default List;
