let inputbox = document.querySelector("#in-box")
let listContainer = document.querySelector(".list-container")
let u
let delImage

function addtask() {
    if (inputbox.value === '') {
        alert("You didn't add anything yet!");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value
        listContainer.appendChild(li);



        let span = document.createElement('span')
        span.innerHTML =
            `<img src='img/edit.svg' class='up'>
          <img src='img/delete.svg' class='del'>`;
        li.appendChild(span)

        // i = inputbox.value;

    }
    inputbox.value = '';
    savedata()
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        savedata()
    }
    else if (e.target.classList.contains('del')) {
        document.querySelector("span").parentElement.remove();
        savedata()
    }
    else if (e.target.classList.contains('up')) {
        document.querySelector
        let li = e.target.parentElement.parentElement;
        let currentText = li.firstChild.textContent.trim();

        li.classList.add('hide-before');

        let inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('id', 'newvalue');
        inputField.value = currentText;

        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        // Clear the list item and append the input field and save button
        li.innerHTML = '';
        li.appendChild(inputField);
        li.appendChild(saveButton);

        saveButton.addEventListener('click', function () {
            let newValue = inputField.value;
            li.innerHTML = newValue;

            let span = document.createElement('span');
            span.innerHTML = `<img src='img/edit.svg' class='up'>
            <img src='img/delete.svg' class='del'>`;
            li.appendChild(span);

            li.classList.remove('hide-before');

            savedata();
        });
    }
});


function savedata() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()