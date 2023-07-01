# Тестовые задания:

1. Filter Courses / Отфильтровать курсы (JavaScript)
    * [Условие задания](#filter-courses-task)
    * [Требования](#filter-courses-requirements)
    * [Входные данные и вывод](#filter-courses-io)
    * [Результат](#filter-courses-result)

2. [Simple Page / Простая страничка (React Router/Redux)](bit.ly/simple-page-m4xprd)
    * [Условие задания](#simple-page-task)
    * [Требования](#simple-page-requirements)
    * [Результат](#simple-page-result)

3. [Currency Converter / Конвертер валют (React, Redux Toolkit, Axios, i18n)](https://bit.ly/currency-converter-m4xprd)
    * [Описание задания](#currency-converter-task)
    * [Требования](#currency-converter-requirements)
    * [Дополнительные задания](#currency-converter-additional-tasks)
    * [Результат](#currency-converter-result)

<!-- The description of each task is located in the folder of the same name. 👁‍🗨 -->

## Описания:

### 1. Filter Courses / Фильтр курсов
#### Условие задачи:
<a name="filter-courses-task"></a>

На сайте UniPage есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.

Например:

- от 100 до 200 рублей;
- от 500 рублей;
- до 400 рублей.

Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.

#### Требования:
<a name="filter-courses-requirements"></a>

Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене? Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.

#### Входные данные и вывод:
<a name="filter-courses-io"></a>

```js
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
```

### Вывод:

   ```
   // [подходящие курсы для каждого варианта фильтра]
   ```
   
Дополнительно, вы также можете реализовать алгоритм сортировки курсов по цене.

## ✅ Результат:
<a name="filter-courses-result"></a>
Выполненная задача находится в файле `filterCources.js`

---

### 2. [Simple Page / Простая страничка](https://test-tasks-nti3.vercel.app/) (React Router/Redux)
### Условие задачи:
<a name="simple-page-task"></a>
Есть две страницы:

• / - главная страница

• /profile – страница профиля

На главной странице нужно ввести логин и пароль login – developer21, password – 123456, если введены логин/пароль верно, то можно нажать на кнопку «войти» (если нет то она disabled)

После нажатия на кнопку «войти», должно пользователя перенаправить на страницу профиля, где в теге h1 должен быть отображен логин.

## Требования:
<a name="simple-page-requirements"></a>
Для хранения / отображения логина, нужно использовать redux Для маршрутизации - react-router

Проект тестового задания, необходимо выложить в публичный репозиторий github сервиса

## ✅ Результат:
<a name="simple-page-result"></a>
Актуальный деплой прямо [здесь](https://test-tasks-nti3.vercel.app/) :)

---

### 3. [Currency Converter / Конвертер валют](https://bit.ly/currency-converter-m4xprd) (React, Redux Toolkit, Axios, i18n)
### Тестовое задание Appbooster: frontend
<a name="currency-converter-task"></a>

Напишите SPA для конвертирования валют. Для получения текущих курсов найдите и используйте любое отрытое API.

### Приложение должно состоять из двух страниц:
<a name="currency-converter-requirements"></a>

Конвертер из одной валюты в другую. На этой странице должно быть текстовое поле, в которое можно ввести текст в виде 15 usd in rub и получить результат.

Страница с текущими курсами валют. На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20
По-умолчанию у пользователя должна определяться «базовая» валюта, которую он может настроить.

### Плюсом будет:
<a name="currency-converter-additional-tasks"></a>

Хорошо продуманный интерфейс и внешний вид
Тесты
Максимальная скорость работы приложения (как при загрузке приложения, так и при конвертировании валют)
Для реализации используйте любые библиотеки, которые считаете уместными

## ✅ Результат:
<a name="currency-converter-result"></a>

[Свежий деплой](https://bit.ly/currency-converter-m4xprd)
