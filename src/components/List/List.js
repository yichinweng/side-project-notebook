import React from 'react';
import PropTypes from 'prop-types';
import { getDefaultNote } from '../../helper';
import './List.scss';

class List extends React.Component {
  static getNoteTitle(note) {
    return note.title.length > 0 ? note.title : getDefaultNote().title;
  }
  constructor() {
    super();
    this.delete = this.delete.bind(this);
  }

  isActive(key) {
    return `note-list-item ${(key === this.props.focus) ? 'active' : ''}`;
  }
  delete(e, key) {
    this.props.onDeleteNote(key);
    e.stopPropagation();
  }
  renderNotebook(key) {
    const note = this.props.notes[key];
    return (
      <div
        role="button"
        className={this.isActive(key)}
        key={key}
        onClick={() => this.props.onUpdateFocus(key)}
      >
        <span
          role="button"
          className="close"
          onClick={e => this.delete(e, key)}
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
        <button onClick={() => this.props.onAddNote(getDefaultNote())}>＋ Page</button>
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
  focus: PropTypes.number.isRequired,
  onAddNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onUpdateFocus: PropTypes.func.isRequired,
};

export default List;
