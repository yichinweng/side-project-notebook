import React from 'react';
import PropTypes from 'prop-types';
import { getDefaultNote } from '../../helper';
import './List.scss';

class List extends React.Component {
  renderNotebook(key) {
    const note = this.props.notes[key];
    return (
      <div className="note-list-item" key={key}>
        <h2>{note.title}</h2>
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
            Object
              .keys(this.props.notes)
              .map(key => this.renderNotebook(key))
          }
        </div>
        <button onClick={() => this.props.addNote(getDefaultNote())}>＋ Page</button>
      </div>
    );
  }
}

List.propTypes = {
  notes: PropTypes.shape({
    noteDefault: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      timestamp: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addNote: PropTypes.func.isRequired,
};

export default List;
