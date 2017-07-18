import React from 'react';

class Content extends React.Component {
  constructor() {
    super();
    this.saveNote = this.saveNote.bind(this);
  }
  saveNote(e, key) {
    const notes = this.props.notes[key];
    const updatedNotes = {
      ...notes,
      [e.target.name]: e.target.value,
      timestamp: Date.now(),
    };
    this.props.updateNote(key, updatedNotes);
  }
  render() {
    return (
      <div>
        <textarea
          key="noteDefault"
          name="content"
          placeholder="Enter your note..."
          onChange={e => this.saveNote(e, 'noteDefault')}
        />
      </div>
    );
  }
}

export default Content;
