let xhr = new XMLHttpRequest();
let list_of_users = document.getElementById('list-of-users');
let list_of_posts = document.getElementById('list-of-posts');
let loader = document.getElementById('loader');
let disabledBg = document.getElementById('disabled-bg');

window.onload = function () {
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        let users = JSON.parse(xhr.responseText);
        showUsers(users);
    }
}

window.addEventListener('mouseup', function (event) {
    if (event.target != list_of_posts && event.target.parentNode != list_of_posts) {
        list_of_posts.style.display = 'none';
    }
    while (list_of_posts.firstChild) {
        list_of_posts.removeChild(list_of_posts.firstChild);
    }
});

function showUsers(data) {
    data.forEach(function (data) {
        let user = list_of_users.appendChild(document.createElement('div'));
        user.classList.add('user');
        user.setAttribute('id', `${data.id}`);

        let user_img = user.appendChild(document.createElement('img'));
        let user_add_avatar = document.querySelectorAll('img');
        user_add_avatar.forEach((elem) => {
            getImg(elem);
        });

        let user_info = user.appendChild(document.createElement('div'));
        user_info.setAttribute('class', 'user-info');
        let user_buttons = user.appendChild(document.createElement('div'));
        user_buttons.setAttribute('class', 'user-buttons');

        let edit_button = user_buttons.appendChild(document.createElement('button'));
        edit_button.innerText = 'EDIT/SAVE';
        edit_button.addEventListener('click', editUser);
        edit_button.setAttribute('class', 'user-edit-button');

        let delete_button = user_buttons.appendChild(document.createElement('button'));
        delete_button.innerText = 'DELETE';
        delete_button.addEventListener('click', deleteUser);
        delete_button.setAttribute('class', 'user-delete-button');

        let user_name_label = user_info.appendChild(document.createElement('label'));
        user_name_label.innerText = 'Name: ';
        let user_name_p = user_info.appendChild(document.createElement('p'));
        user_name_p.innerText = `${data.name}`;
        user_name_p.setAttribute('class', 'user-name');
        user_name_p.addEventListener('click', getPosts);
        let user_name_input = user_info.appendChild(document.createElement('input'));
        user_name_input.setAttribute('class', 'user-name-input edit-input');

        let company_name_label = user_info.appendChild(document.createElement('label'));
        company_name_label.innerText = 'Company name: ';
        let company_name_p = user_info.appendChild(document.createElement('p'));
        company_name_p.innerText = `"${data.company.name}"`;
        let company_name_input = user_info.appendChild(document.createElement('input'));
        company_name_input.setAttribute('class', 'company-name-input edit-input');

        let city_name_label = user_info.appendChild(document.createElement('label'));
        city_name_label.innerText = 'City: ';
        let city_name_p = user_info.appendChild(document.createElement('p'));
        city_name_p.innerText = `${data.address.city}`;
        let city_name_input = user_info.appendChild(document.createElement('input'));
        city_name_input.setAttribute('class', 'city-name-input edit-input');

        let street_name_label = user_info.appendChild(document.createElement('label'));
        street_name_label.innerText = 'Street: ';
        let street_name_p = user_info.appendChild(document.createElement('p'));
        street_name_p.innerText = `${data.address.street}`;
        let street_name_input = user_info.appendChild(document.createElement('input'));
        street_name_input.setAttribute('class', 'street-name-input edit-input');

        let suite_label = user_info.appendChild(document.createElement('label'));
        suite_label.innerText = 'Suite: ';
        let suite_p = user_info.appendChild(document.createElement('p'));
        suite_p.innerText = `${data.address.suite}`;
        let suite_input = user_info.appendChild(document.createElement('input'));
        suite_input.setAttribute('class', 'suite-input edit-input');
    });
}

let edit = true;
function editUser() {
    let list = this.parentNode.parentNode;
    let edit_input = list.querySelectorAll('input');
    let edit_text = list.querySelectorAll('p');

    if (edit === false) {
        showLoader();
        let data = {
            name: list.querySelector(".user-name-input").value,
            company: {
                name: list.querySelector(".company-name-input").value
            },
            address: {
                city: list.querySelector(".city-name-input").value,
                street: list.querySelector(".street-name-input").value,
                suite: list.querySelector(".suite-input").value
            }
        };

        let json = JSON.stringify(data);

        xhr.open('PUT', `https://jsonplaceholder.typicode.com/users/${event.currentTarget.parentElement.parentElement.id}`, false);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
            hideLoader();
        } else {
            let users = JSON.parse(xhr.responseText);
            console.log('Updated!');
            hideLoader();
        }

        for (let i = 0; i < edit_input.length; i++) {
            edit_text[i].innerText = edit_input[i].value;
            edit_input[i].value = '';
            edit_input[i].style.display = 'none';
            edit_text[i].style.display = 'block';
        }
        edit = true;
    } else {
        for (let i = 0; i < edit_input.length; i++) {
            edit_input[i].style.display = 'block';
            edit_text[i].style.display = 'none';
            edit_input[i].value = edit_text[i].innerText;
        }
        edit = false;
    }
}

function deleteUser(event) {
    showLoader();
    xhr.open('DELETE', `https://jsonplaceholder.typicode.com/users/${event.currentTarget.parentElement.parentElement.id}`, false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
        hideLoader();
    } else {
        let users = JSON.parse(xhr.responseText);

        let list = this.parentNode.parentNode;
        let div = list.parentNode;
        div.removeChild(list);
        console.log('Deleted!');
        hideLoader();
    }
}

function getPosts(event) {
    showLoader();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${event.currentTarget.parentElement.parentElement.id}`, false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        let posts = JSON.parse(xhr.responseText);
        posts.forEach(function (post) {
            xhr.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`, false);
            xhr.send();
            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
                hideLoader()
            } else {
                let comments = JSON.parse(xhr.responseText);;
                showPost(post, comments);
                hideLoader();
            }
        });
    }
}

function showPost(post, comments) {
    list_of_posts.style.display = 'block';

    let post_box = list_of_posts.appendChild(document.createElement('div'));
    post_box.setAttribute('class', 'post_box');
    let post_body = post_box.appendChild(document.createElement('div'));
    post_body.setAttribute('class', 'post-body');
    post_body.innerHTML += `Title: ${post.title}. </br>
                            &nbsp; Body (post): ${post.body}. </br>
                            &nbsp; COMMNETS: </br>`;

    comments.forEach(function (comment) {
        post_body.innerHTML += `&nbsp; <i>${comment.email}</i>: ${comment.body} </br>`;
    });

    let line = post_body.appendChild(document.createElement('hr'));
}

function getImg(avatar) {
    showLoader();
    function fetchJson(url) {
        return fetch(url)
            .then(request => request.text())
            .then(text => {
                hideLoader();
                let catUrl = JSON.parse(text)[0].url;
                if (catUrl.endsWith('jpg')) {
                    avatar.src = catUrl;
                } else {
                    getImg(avatar);
                }
            })
            .catch(error => {
                console.log(`ERROR: ${error.stack}`)
                hideLoader();
            });
    }
    fetchJson('https://api.thecatapi.com/v1/images/search');
}

function showLoader() {
    loader.style.display = 'block';
    disabledBg.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
    disabledBg.style.display = 'none';
}
