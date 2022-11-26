const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const crearteUser = (name) => {
    const userLine = document.createElement('li');
    const userName = document.createElement('a');
        userName.href = '#';
        userName.textContent = name;
        userLine.append(userName);
    return userLine;
};

const dataContainer = document.querySelector('#data-container');

const getAllUsers = () => {
    toggleLoader();
    fetch(USERS_URL)
        .then((response) => {
            // console.log(response);
            // console.log(response.json());
            if (!response.ok) {
                console.log('Ошибка запроса');
            }
            return response.json();
        })
        .then((users) => {
            users.forEach((user) => {
                const userHTML = crearteUser(user.name);
                dataContainer.append(userHTML);
            });
        })
        .catch(console.log)
        .finally(() => {
            toggleLoader();
        })
};

getAllUsers();

function toggleLoader() {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}