import React from 'react';
import './List.scss';

class List extends React.Component {
  renderNotebook(key) {
    const note = this.props.notes[key];
    return (
      <div className="note-list" key={key}>
        <h2>{note.title}</h2>
        <span>{note.timestamp}</span>
      </div>
    );
  }

  render() {
    return (
      <div className="note-list-container">
        <h1>筆記本</h1>
        {
          Object
            .keys(this.props.notes)
            .map(key => this.renderNotebook(key))
        }
      </div>
    );
  }
}

export default List;
