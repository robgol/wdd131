const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let count = 0;

button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Please enter a valid chapter.');
        return;
    }

    //this wil never be reached because I've added an option to disable the add chapter button as ong as the use inserted 10 scriptures
    if (count >= 10) {
        alert('You have reached the maximum of 10 chapters.');
        return;
    }

    const listItem = document.createElement('li');
    const textNode = document.createTextNode(input.value);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = '';
    count++;

    if (count >= 10) {
        button.setAttribute('disabled', true);
    }

    deleteButton.addEventListener('click', () => {
        listItem.remove();
        count--;

        // Re-enable the button if less than 10
        if (count < 10) {
            button.removeAttribute('disabled');
        }
    
    });
    input.focus();
});
