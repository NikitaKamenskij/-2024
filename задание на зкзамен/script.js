class Спецодежда {
    constructor(код, вид, срокНоски, стоимость) {
        this.код = код;
        this.вид = вид;
        this.срокНоски = срокНоски;
        this.стоимость = стоимость;
    }
}

class Цех {
    constructor(код, наименование, начальник) {
        this.код = код;
        this.наименование = наименование;
        this.начальник = начальник;
    }
}

class Работник {
    constructor(код, ФИО, должность, скидка) {
        this.код = код;
        this.ФИО = ФИО;
        this.должность = должность;
        this.скидка = скидка;
    }
}

class Получение {
    constructor(кодРаботника, кодСпецодежды, датаПолучения, роспись) {
        this.кодРаботника = кодРаботника;
        this.кодСпецодежды = кодСпецодежды;
        this.датаПолучения = датаПолучения;
        this.роспись = роспись;
    }
}

const спецодеждаList = JSON.parse(localStorage.getItem('спецодеждаList')) || [];
const цехаList = JSON.parse(localStorage.getItem('цехаList')) || [];
const работникиList = JSON.parse(localStorage.getItem('работникиList')) || [];
const полученияList = JSON.parse(localStorage.getItem('полученияList')) || [];

function saveData() {
    localStorage.setItem('спецодеждаList', JSON.stringify(спецодеждаList));
    localStorage.setItem('цехаList', JSON.stringify(цехаList));
    localStorage.setItem('работникиList', JSON.stringify(работникиList));
    localStorage.setItem('полученияList', JSON.stringify(полученияList));
}

function addСпецодежда() {
    const вид = document.getElementById('вид-спецодежды').value;
    const срокНоски = document.getElementById('срок-носки').value;
    const стоимость = document.getElementById('стоимость').value;
    const код = спецодеждаList.length + 1;
    const спецодежда = new Спецодежда(код, вид, срокНоски, стоимость);
    спецодеждаList.push(спецодежда);
    saveData();
    displayСпецодежда(спецодежда);
}

function addЦех() {
    const наименование = document.getElementById('наименование-цеха').value;
    const начальник = document.getElementById('начальник-цеха').value;
    const код = цехаList.length + 1;
    const цех = new Цех(код, наименование, начальник);
    цехаList.push(цех);
    saveData();
    displayЦеха(цех);
}

function addРаботник() {
    const ФИО = document.getElementById('фио-работника').value;
    const должность = document.getElementById('должность-работника').value;
    const скидка = document.getElementById('скидка-работника').value;
    const код = работникиList.length + 1;
    const работник = new Работник(код, ФИО, должность, скидка);
    работникиList.push(работник);
    saveData();
    displayРаботники(работник);
}

function addПолучение() {
    const кодРаботника = document.getElementById('код-работника').value;
    const кодСпецодежды = document.getElementById('код-спецодежды').value;
    const датаПолучения = document.getElementById('дата-получения').value;
    const роспись = document.getElementById('роспись').value;
    const получение = new Получение(кодРаботника, кодСпецодежды, датаПолучения, роспись);
    полученияList.push(получение);
    saveData();
    displayПолучения(получение);
}

function displayСпецодежда(спецодежда) {
    console.log(`Код: ${спецодежда.код}, Вид: ${спецодежда.вид}, Срок носки: ${спецодежда.срокНоски}, Стоимость: ${спецодежда.стоимость}`);
}

function displayЦеха(цех) {
    console.log(`Код: ${цех.код}, Наименование: ${цех.наименование}, Начальник: ${цех.начальник}`);
}

function displayРаботники(работник) {
    console.log(`Код: ${работник.код}, ФИО: ${работник.ФИО}, Должность: ${работник.должность}, Скидка: ${работник.скидка}%`);
}

function displayПолучения(получение) {
    console.log(`Код работника: ${получение.кодРаботника}, Код спецодежды: ${получение.кодСпецодежды}, Дата получения: ${получение.датаПолучения}, Роспись: ${получение.роспись}`);
}

function loadData() {
    спецодеждаList.forEach(displayСпецодежда);
    цехаList.forEach(displayЦеха);
    работникиList.forEach(displayРаботники);
    полученияList.forEach(displayПолучения);
}

loadData();