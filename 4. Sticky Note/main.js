import { saveNotes, loadNotes } from './localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#mainContainer');
    const addButton = document.querySelector('#addButton');
    const titleInput = document.querySelector('#titleInput');
    const descriptionInput = document.querySelector('#descriptionInput');
    const cancel = document.querySelector('#cancelButton');
    const textInput = document.querySelector('.textInput');

    cancel.style.display = 'none';

    let allNotes = loadNotes();

    function renderNote(noteData) {
        const stickyNote = document.createElement('div');
        stickyNote.className = 'stickyNote';
        main.appendChild(stickyNote);

        const stickyNoteContainer = document.createElement('div');
        stickyNoteContainer.className = 'stickyNoteContainer';
        stickyNote.appendChild(stickyNoteContainer);

        const stickyNoteHeader = document.createElement('div');
        stickyNoteHeader.className = 'stickyNoteHeaderContainer';
        stickyNoteContainer.appendChild(stickyNoteHeader);

        const title = document.createElement('h2');
        title.textContent = noteData.title;
        stickyNoteHeader.appendChild(title);

        const removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.type = 'button';
        removeButton.textContent = 'X';
        stickyNoteHeader.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            stickyNote.remove();
            allNotes = allNotes.filter(note => note !== noteData);
            saveNotes(allNotes);
        });

        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'stickyNoteDescriptionContainer';
        stickyNoteContainer.appendChild(descriptionContainer);

        const description = document.createElement('p');
        description.textContent = noteData.description;
        descriptionContainer.appendChild(description);

        if (noteData.crossed) {
            title.classList.add('crossed');
            description.classList.add('crossed');
        }

        stickyNote.addEventListener('click', () => {
            const isCrossed = title.classList.toggle('crossed');
            description.classList.toggle('crossed');

            noteData.crossed = isCrossed;
            saveNotes(allNotes);
        });
    }

    allNotes.forEach(renderNote);

    addButton.addEventListener('click', () => {
        const newNote = {
            title: titleInput.value,
            description: descriptionInput.value,
            crossed: false
        };
        allNotes.push(newNote);
        saveNotes(allNotes);
        renderNote(newNote);

        titleInput.value = '';
        descriptionInput.value = '';
        cancel.style.display = 'none';
    });

    textInput.addEventListener('keydown', () => {
        cancel.style.display = '';
    });

    cancel.addEventListener('click', () => {
        titleInput.value = '';
        descriptionInput.value = '';
        cancel.style.display = 'none';
    });
});
