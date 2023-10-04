# Тестовые задания:

1. [Filter Courses / Отфильтровать курсы (JavaScript)](#filter-courses)
    * [Условие задания](#filter-courses-task)
    * [Требования](#filter-courses-requirements)
    * [Входные данные и вывод](#filter-courses-io)
    * [✅Результат](#filter-courses-result)

2. [Simple Page / Простая страничка (React Router/Redux)](#simple-page)
    * [Условие задания](#simple-page-task)
    * [Требования](#simple-page-requirements)
    * [✅Результат](#simple-page-result)

3. [Currency Converter / Конвертер валют (React, Redux Toolkit, Axios, i18n)](#currency-converter)
    * [Описание задания](#currency-converter-task)
    * [Требования](#currency-converter-requirements)
    * [Дополнительные задания](#currency-converter-additional-tasks)
    * [✅Результат](#currency-converter-result)
4. [Todo List / Список дел (React, TypeScript, Jest, SCSS, BEM)](#todo-list)
    * [Описание задания](#todo-list-task)
    * [Требования](#todo-list-requirements)
    * [Дополнительные задания](#todo-list-additional-tasks)
    * [✅Результат](#todo-list-result)
5. [Hotel Booking / Бронирование отеля (React, Formik + Yup, SCSS)](#booking)
    * [Цель задания](#booking-task)
    * [Условия](#booking-conditions)
    * [Примечания](#booking-notes)
    * [✅Результат](#booking-result)

## Установка 

```sh
Все команды запускаются из корня проекта:

# Шаг 1 — Клонируем репозиторий
$ https://github.com/M4XPRD/Test-Tasks

# Шаг 2 — Устанавливаем зависимости 2 или 3 проекта
$ make install-02
$ make install-03

# Шаг 3 — Запускаем 2 или 3 проект
$ make start-02
$ make start-03

# Если у вас yarn, то перед командой пишем "y"

$ make y-install-03
$ make y-start-03
```

## Возможные проблемы
Если у вас VSCode и в конвертере валют TypeScript выдаёт ошибку `Parsing error: Cannot read file '.../tsconfig.json'.eslint`, то нужно сделать следующее:

1. Создать в общем корне всех проектов папку `.vscode`
2. Добавить в папку `.vscode` файл `settings.json`
3. В файл добавить следующий код:
```
{
  "eslint.workingDirectories": [
    "03-CurrencyConverter/converter"
  ]
}
```


<!-- The description of each task is located in the folder of the same name. 👁‍🗨 -->

## 1. Filter Courses / Отфильтровать курсы
<a name="filter-courses"></a>
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
Выполненная задача находится в файле [`filterCources.js`](/01-FilterCources/filterCources.js).

Фильтр можно сделать:
* По цене в радиусе, например ```[200, 350]``` или ```[null, 200]```
* По минимальной и максимальной цене (дополнительное задание)

## 2. [Simple Page / Простая страничка](https://test-tasks-nti3.vercel.app/) (React Router/Redux)
<a name="simple-page"></a>
### Условие задачи:
<a name="simple-page-task"></a>
Есть две страницы:

• ```/``` - главная страница

• ```/profile``` – страница профиля

На главной странице нужно ввести логин и пароль: **login – developer21**, **password – 123456**.
Если введены логин/пароль верно, то можно нажать на кнопку «Войти» (если нет, то она должна быть отключена, то есть *disabled*)

После нажатия на кнопку «Войти», должно пользователя перенаправить на страницу профиля, где в теге **h1** должен быть отображен логин.

## Требования:
<a name="simple-page-requirements"></a>
Для хранения / отображения логина, нужно использовать *Redux*, для маршрутизации - *React-Router*.

Проект тестового задания необходимо выложить в публичный репозиторий GitHub.

## Установка
<a name="simple-page-install"></a>

## ✅ Результат:
<a name="simple-page-result"></a>
Актуальный деплой прямо [здесь](https://test-tasks-nti3.vercel.app/).

![02-1](https://github.com/M4XPRD/Test-Tasks/assets/86636158/cbc75b30-1c63-41ca-ae6e-c67b5d818809)
![02-2](https://github.com/M4XPRD/Test-Tasks/assets/86636158/3c4ddd89-e02a-4bb5-9ca6-6b648a775e31)
![02-3](https://github.com/M4XPRD/Test-Tasks/assets/86636158/dd222ff0-f671-4053-adf0-1b6c839da472)


### Что получилось:
   * Решил модифицировать и чуть усложнить задачу, поэтому есть 3 страницы: ```/``` - главная, ```/login``` и страница с ошибкой ```404```
   * На странице `/login` при нажатии на *Get your login here!* можно увидеть секретный логин для входа. Сделано для большей интерактивности
   * Добавлена полноценная realtime-валидация формы с помощью `Formik`
   * Все страницы переключаются без перезагрузки и работают через `React-Router`
   * Всё состояние работает через `Redux-Toolkit`
   * Настроен `ESLint` по стандарту *Airbnb*
   * Добавлены `focus` для каждого `input`
   * Уделил внимание CSS-оформлению и адаптивности на разных устройствах

## 3. [Currency Converter / Конвертер валют](https://bit.ly/currency-converter-maxprd) (React, Redux Toolkit, Axios, i18n)
<a name="currency-converter"></a>
### Описание. Тестовое задание Appbooster: frontend
<a name="currency-converter-task"></a>

Напишите SPA для конвертирования валют. Для получения текущих курсов найдите и используйте любое отрытое API.

### Требования
<a name="currency-converter-requirements"></a>

Приложение должно состоять из двух страниц: 

1. Конвертер из одной валюты в другую. На этой странице должно быть текстовое поле, в которое можно ввести текст в виде ```15 USD in RUB``` и получить результат.

2. Страница с текущими курсами валют. На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20. По-умолчанию у пользователя должна определяться базовая валюта, которую он может настроить.

### Плюсом будет:
<a name="currency-converter-additional-tasks"></a>

* Хорошо продуманный интерфейс и внешний вид
* Тесты
* Максимальная скорость работы приложения (как при загрузке приложения, так и при конвертировании валют)
* Для реализации используйте любые библиотеки, которые считаете уместными

## ✅ Результат:
<a name="currency-converter-result"></a>
Вот здесь есть [свежий деплой](https://bit.ly/currency-converter-maxprd).

![03-1](https://github.com/M4XPRD/Test-Tasks/assets/86636158/b24beabb-7f0a-49e8-a0ba-dad91d7550eb)
![03-2](https://github.com/M4XPRD/Test-Tasks/assets/86636158/b63f6738-852e-4074-be5a-b237b6ae6485)

### Производительность:
![04-1](https://github.com/M4XPRD/Test-Tasks/assets/86636158/68cd83cb-7dbf-4c7f-b84a-d8c2030c9224)
![04-2](https://github.com/M4XPRD/Test-Tasks/assets/86636158/22561837-f968-4d6e-97b1-139dadf7ccaf)



### Что получилось в итоге:
   * Всё написано на `TypeScript`
   * Есть 3 страницы: `/` - главная страница с конвертером, `/currencies` - страница со всеми доступными курсами валют и страница с `404`
   * На главной странице конвертер успешно переводит любую доступную валюту из списка
   * На странице `/currencies` можно выбрать базовую валюту и посмотреть список курсов по этой валюте
   * Особое внимание уделил дизайну, интерфейсу и адаптивности для всех доступных в `Chrome DevTools` устройствах
   * Настроен `ESLint` по стандарту *Airbnb*
   * Доступ к API по валютам сделан через `Axios`
   * В качестве CSS-фреймворка выбран `MUI`
   * Дополнительно настроил анимации загрузки и ошибки
   * Всё состояние организовано через `Redux-Toolkit`, а переключения языков через `React-Context`
   * Страницы переключаются через `React-Router`
   * Добавлена библиотека `i18next` для организации текстов
   * Добавлен английский язык и кнопка переключения с `EN` на `RU`
   * Добавлено несколько простых тестов
## 5. [Hotel Booking / Бронирование отеля](https://nimax-test-task-eight.vercel.app/) (React, Formik + Yup, SCSS)
<a name="booking"></a>

### [Макет в Figma](https://www.figma.com/file/yNEjrKeswMfbUcBI1CXkrY/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-frontend-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0?node-id=0%3A1&t=1P13RFJob1D937ZH-1)

### **Цель задания: создать адаптивную форму точного расчета стоимости отдыха**
<a name="booking-task"></a>

Форма состоит из двух шагов. На первом шаге рассчитывается стоимость проживания, на втором заполняются ĸонтаĸты для связи. 

Переход ĸо следующему шагу возможен тольĸо при ĸорреĸтном заполнении теĸущего.

### **Шаг 1. Поля:**

–  Количество взрослых (числовое, мин. значение: 1)

–  Количество детей от 5 до 12 лет (числовое)

–  Количество детей до 5 лет (числовое). На одного взрослого допустимо не более 3 детей из этой ĸатегории

–  Тип номера (Эĸоном/Стандарт/Люĸс)

–  Количество ночей (числовое, мин. значение: 1)

–  Страховĸа (вĸл/выĸл)

### **Шаг 2. Поля:**

–  Фамилия (теĸстовое, обязательное)

–  Имя (теĸстовое, обязательное)

–  Отчество (теĸстовое)

–  Номер телефона (теĸстовое, обязательное, форма телефона +7XXXXXXXX-XX)

–  Дата рождения (дата, обязательное)

На третьем шаге выводится информация о подтверждении заĸаза и ĸнопĸа оплаты. 

По нажатию ĸнопĸи оплаты нужно сымитировать отправĸу данных на сервер (формат JSON, в ответ достаточно любого сообщения по таймауту) и вывести эĸран об успешной оплате заĸаза с ĸнопĸой перехода ĸ новому заĸазу (ведет ĸ шагу 1 с пустой формой).

### **Условия**
<a name="booking-conditions"></a>

Стоимость заĸаза зависит от ĸоличества гостей разных возрастов, типа номера и ĸоличества ночей:

–  Стоимость ночи в номере «Эĸоном»: 1800 рублей

–  Стоимость ночи в номере «Стандарт»: 2800 рублей

–  Стоимость ночи в номере «Люĸс»: 4000 рублей

–  Детям 5-12 лет предоставляется сĸидĸа в размере 50% от взрослой стоимости

–  Детям до 5 лет проживание предоставляется бесплатно

–  Страховĸа добавляет 10% ĸ общей стоимости заĸаза

Стоимость заĸаза должна пересчитываться сразу при изменении связанных с ней значений.

При наличии в форме ошибоĸ, переход ĸ следующему шагу должен быть заблоĸирован, поĸа ошибĸи не будут исправлены.

Пользователю должен быть предоставлен вывод ошибоĸ в понятном виде.

### **Примечания**
<a name="booking-notes"></a>

Будет учитываться аĸĸуратность верстĸи и адаптив, умение работать с состоянием и реаĸтивностью, а таĸ же базовый подход ĸ архитеĸтуре. Пиĸтограммы элементов ввода можно выбрать на усмотрение ĸандидата или оставить нативные.

Селеĸты и дейтпиĸер можно оставить нативные.

Можно использовать сторонние библиотеĸи UI-ĸомпонентов, CSS- фреймворĸи и препроцессоры.

При размерах эĸрана >640px форма остается в ĸонтейнере шириной 640px по центру эĸрана.

### **Как передать результат**

Одним из способов:

– Проект, который можно скачать и запустить

– Либо развёрнутый в гитхабе/гитлабе проект

## ✅ Результат:
<a name="booking-result"></a>
Актуальный деплой Vercel прямо [здесь](https://nimax-test-task-eight.vercel.app/).

![Screenshot_1](https://github.com/M4XPRD/nimax-test-task/assets/86636158/f84b6f24-b857-4d7a-a570-19966317e4d9)
![Screenshot_2](https://github.com/M4XPRD/nimax-test-task/assets/86636158/42569489-0e80-4659-ac9a-5ef739501402)
![Screenshot_3](https://github.com/M4XPRD/nimax-test-task/assets/86636158/cd137519-c45c-4955-9674-fb9eac2bbe87)
![Screenshot_4](https://github.com/M4XPRD/nimax-test-task/assets/86636158/0deafa5e-fac7-4246-997d-e25b3924035b)


### Что получилось в итоге:
   * Всё написано на React с использованием Formik + Yup
   * Весь HTML/CSS написан без сторонних UI-библиотек
   * В проекте сделан упор на масштабируемость и расширяемость, всё разделено на маленькие модули
   * При событии `onSubmit` срабатывает имитация отправки данных на сервер с помощью `fetch`
   * Добавлена анимация искуственного ожидания отправки данных, чтобы всё выглядело реалистичнее
   * Проект полностью адаптирован под мобильные телефоны и любые разрешения экранов

