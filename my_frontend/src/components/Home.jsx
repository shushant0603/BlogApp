import React, { useState } from 'react';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Handle adding a new note
  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Notes</h1>
          <p className="text-xl mb-6">A simple place to store your thoughts and ideas.</p>
        </div>
      </header>

      {/* Notes Section */}
      <section className="py-16 bg-white flex-1">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Your Notes</h2>

          {/* Notes List */}
          <div className="space-y-4">
            {notes.length === 0 ? (
              <p className="text-gray-500">No notes yet. Start writing!</p>
            ) : (
              notes.map((note, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p>{note}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Add Note Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">Add a New Note</h3>
          <div className="flex justify-center items-center space-x-4">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows="4"
              className="w-full max-w-xl border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your note here..."
            />
            <button
              onClick={addNote}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add Note
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NotesPage;
