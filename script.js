// Имитация входа
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userName = document.getElementById('user-name');
const userClass = document.getElementById('user-class');

// Имитация получения данных (используйте реальные данные в будущем)
function getSchedule() {
    // Здесь будет код для получения расписания
    const scheduleData = [
        // ... (примерные данные о расписании)
    ];
    return scheduleData;
}

function getGrades() {
    // Здесь будет код для получения оценок
    const gradesData = [
        // ... (примерные данные об оценках)
    ];
    return gradesData;
}

// Обработка вкладок
const tabList = document.querySelector('.tab-list');
const tabItems = tabList.querySelectorAll('.tab');
const tabContent = document.querySelector('.tab-content');
const tabPanes = tabContent.querySelectorAll('.tab-pane');

tabList.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab')) {
        const clickedTab = event.target;
        const activeTab = tabList.querySelector('.tab.active');
        const activePane = tabContent.querySelector('.tab-pane.active');

        activeTab.classList.remove('active');
        activePane.classList.remove('active');

        clickedTab.classList.add('active');
        const paneId = clickedTab.getAttribute('id');
        const targetPane = document.getElementById(paneId);
        targetPane.classList.add('active');

        if (paneId === 'schedule-tab') {
            // Загружаем расписание
            loadSchedule();
        } else if (paneId === 'grades-tab') {
            // Загружаем оценки
            loadGrades();
        }
    }
});

// Функции для загрузки расписания и оценок
function loadSchedule() {
    const scheduleData = getSchedule();
    // Отображаем расписание на странице
    // ... (используйте `scheduleData` для заполнения таблицы)
}

function loadGrades() {
    const gradesData = getGrades();
    // Отображаем оценки на странице
    // ... (используйте `gradesData` для заполнения списка оценок)
}

// Функции для входа и выхода
function login() {
    // Здесь будет код для проверки логина и пароля
    // ... (используйте данные с сервера)

    // Если вход успешный, отображаем данные пользователя
    userName.textContent = 'Иван Иванов';
    userClass.textContent = '10А';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';

    // Загружаем расписание по умолчанию
    loadSchedule(); 
}

function logout() {
    // Очищаем данные пользователя
    userName.textContent = '';
    userClass.textContent = '';
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';

    // Скрываем вкладки
    tabList.querySelector('.tab.active').classList.remove('active');
    tabContent.querySelector('.tab-pane.active').classList.remove('active');

    // Очищаем контент вкладок
    // ... 
}

loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);
