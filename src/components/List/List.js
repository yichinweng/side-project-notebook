import React from 'react';

class List extends React.Component {
  renderNotebook(key) {
    const note = this.props.notes[key];
    return (
      <div className="notebook-inside-list" key={key}>
        <h2>{note.title}</h2>
        <h2>{note.timestamp}</h2>
      </div>
    );
  }

  render() {
    return (
      <div>
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
