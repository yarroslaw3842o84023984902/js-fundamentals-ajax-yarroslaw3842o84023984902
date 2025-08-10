// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server



// Перевірити правильність програми - команда node tests/task2.test.jsconst nameInput = document.getElementById('userNameInput');
const getUserBtn = document.getElementById('getUserButton');
const userCityEl = document.getElementById('userCity');
const userNameInput = document.getElementById('userNameInput');

getUserBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.name === name);
            if (user) {
                userCityEl.textContent = user.address.city;
            } else {
                userCityEl.textContent = '';
            }
        })
        .catch(err => {
            console.error(err);
            userCityEl.textContent = '';
        });
});