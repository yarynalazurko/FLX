let ul = document.getElementById('toDoList');
let addActionInput = document.getElementById('addActionInput');
let addActionBtn = document.getElementById('addActionBtn');
let notification = document.getElementById('notification');

let max = 9;
let dragItem = null;

function checkInput() {
    if (!addActionInput.value.trim()) {
        addActionBtn.setAttribute('disabled', 'disabled');        
    } else {
        addActionBtn.removeAttribute('disabled', 'disabled');
    }
}

addActionInput.addEventListener('keyup', checkInput);
addActionInput.addEventListener('mouseleave', checkInput);
addActionInput.addEventListener('mouseover', checkInput);

function addNewAction() {
    let amountOfLi = document.getElementsByTagName('li').length;

    let li = document.createElement('li');
    li.className = 'to-do-list-item';
    li.setAttribute('draggable', 'true');

    let checkBox = document.createElement('button');
    checkBox.setAttribute('class', 'material-icons');
    checkBox.textContent = 'check_box_outline_blank';

    let textAction = document.createElement('p');
    textAction.textContent = addActionInput.value;

    let deleteBox = document.createElement('button');
    deleteBox.setAttribute('class', 'material-icons');
    deleteBox.textContent = 'delete';

    ul.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(textAction);
    li.appendChild(deleteBox);

    addActionInput.value = '';

    function checkAction() {
        this.textContent === 'check_box_outline_blank' ? this.textContent = 'check_box' :
            this.textContent = 'check_box_outline_blank';
    }

    function deleteAction() {
        ul.removeChild(li);
        if (amountOfLi <= max) {
            addActionInput.removeAttribute('disabled', 'disabled');
            addActionBtn.removeAttribute('disabled', 'disabled');
            notification.style.display = 'none';
        }
    }

    if (amountOfLi >= max) {
        addActionInput.setAttribute('disabled', 'disabled');
        addActionBtn.setAttribute('disabled', 'disabled');
        notification.style.display = 'block';
    }

    checkBox.addEventListener('click', checkAction);
    deleteBox.addEventListener('click', deleteAction);

    addEventsDragAndDrop(li);
}

addActionBtn.addEventListener('click', addNewAction);

function handleDragStar(e) {
    this.style.opacity = '0.4';
    dragItem = e.currentTarget;
}

function handleDragOver(e) {
    e.preventDefault()
}

function handleDragLeave(e) {
    e.stopPropagation();
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}

function handleDragDrop(e) {
    if (e.currentTarget.className === 'to-do-list-item') {
        e.preventDefault()
        let parent = e.currentTarget.parentNode;
        parent.insertBefore(dragItem, e.currentTarget);
    }
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', handleDragStar, false);
    el.addEventListener('dragover', handleDragOver, false);
    el.addEventListener('dragleave', handleDragLeave, false);
    el.addEventListener('drop', handleDragDrop, false);
    el.addEventListener('dragend', handleDragEnd, false);
}