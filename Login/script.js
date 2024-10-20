const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка введенных данных (например, на пустоту)
    if (email === "" || password === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // Здесь нужно добавить логику проверки введенных данных 
    // на сервере (с помощью AJAX) или с помощью локального хранилища,
    // чтобы имитировать проверку

    // Имитация проверки на сервере (в реальном проекте используйте AJAX):
    const validUsers = {
        "user1@example.com": "password1",
        "user2@example.com": "password2"
    };

    if (validUsers[email] === password) {
        // Успешный вход
        window.location.href = "index.html"; // Перенаправление на страницу дневника
    } else {
        // Неверный логин или пароль
        alert("Неверный логин или пароль.");
    }
});
