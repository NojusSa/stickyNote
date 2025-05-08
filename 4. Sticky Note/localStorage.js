export function saveNotes(notes) {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
}

export function loadNotes() {
    const notes = localStorage.getItem('stickyNotes');
    return notes ? JSON.parse(notes) : [];
}