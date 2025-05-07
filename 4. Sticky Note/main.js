const main = document.querySelector('#mainContainer');
const addButton = document.querySelector('#addButton');
const titleInput = document.querySelector('#titleInput');
const deescriptionInput = document.querySelector('#descriptionInput');
const cancel = document.querySelector('#cancelButton');
const textInput = document.querySelector('.textInput');

cancel.style.display = 'none';

function functionThatPrettyMuchDoesEverything() {
    addButton.addEventListener('click', () => {
        console.log('Add was clicked');

        const stickyNote = document.createElement('div');
        stickyNote.className = 'stickyNote';
        main.appendChild(stickyNote);

        const stickyNoteContainer = document.createElement('div');
        stickyNoteContainer.className = 'stickyNoteContainer';
        stickyNote.appendChild(stickyNoteContainer);

        const stickyNoteHeader = document.createElement('div');
        stickyNoteHeader.className = 'stickyNoteHeaderContainer';
        stickyNoteContainer.appendChild(stickyNoteHeader);

        const titleText = titleInput.value;
        const title = document.createElement('h2');
        title.className = 'title';
        title.innerHTML = titleText;
        stickyNoteHeader.appendChild(title);

        const removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.type = 'button';
        stickyNoteHeader.appendChild(removeButton);
        
        removeButton.addEventListener('click', () => {
            console.log('Remove was clicked');
            stickyNote.remove();
        });

        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'stickyNoteDescriptionContainer';
        stickyNoteContainer.appendChild(descriptionContainer);

        const descriptionArea = document.createElement('p');
        descriptionContainer.appendChild(descriptionArea);
        const description = descriptionInput.value;
        descriptionArea.className = 'description';
        descriptionArea.innerHTML = description;
    });

    textInput.addEventListener('keydown', () => {
        cancel.style.display = '';
    });
    

    cancel.addEventListener('click', () => {
        titleInput.value = '';
        descriptionInput.value = '';
        cancel.style.display = 'none';
    })
}

functionThatPrettyMuchDoesEverything();