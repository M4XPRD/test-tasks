# Тестовые задания:
1. Filter Cources (JavaScript)
2. [Simple Page](https://test-tasks-nti3.vercel.app/) (React Router/Redux)
3. [Currency Converter](https://bit.ly/currency-converter-m4xprd) (React, Redux Toolkit, Axios, i18n)

The description of each task is located in the folder of the same name. 👁‍🗨

# Описания:

### 1. Filter Cources / Фильтр курсов
### Условие задачи:

На сайте UniPage есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.

Например:

- от 100 до 200 рублей;
- от 500 рублей;
- до 400 рублей.

Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.

### Требования:

Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене? Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.

### Входные данные:

    // Список курсов
    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];
 
    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];
### Вывод:

   ```
   // [подходящие курсы для каждого варианта фильтра]
   ```
   
Дополнительно, вы также можете реализовать алгоритм сортировки курсов по цене.

## ✅ Результат:

Выполненная задача находится в файле `filterCources.js`

---
### 2. [Simple Page](https://test-tasks-nti3.vercel.app/) (React Router/Redux)
### Условие задачи:
Есть две страницы:

• / - главная страница

• /profile – страница профиля

На главной странице нужно ввести логин и пароль login – developer21, password – 123456, если введены логин/пароль верно, то можно нажать на кнопку «войти» (если нет то она disabled)

После нажатия на кнопку «войти», должно пользователя перенаправить на страницу профиля, где в теге h1 должен быть отображен логин.

## Требования:
Для хранения / отображения логина, нужно использовать redux Для маршрутизации - react-router

Проект тестового задания, необходимо выложить в публичный репозиторий github сервиса

## ✅ Результат:
Актуальный деплой прямо здесь :)
