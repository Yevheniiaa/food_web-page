// "use strict";


document.addEventListener('DOMContentLoaded', () => {
    // tabs
    const tabs = document.querySelectorAll(".tabheader__item");
    const tabContent = document.querySelectorAll(".tabcontent");
    const tabParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }


    function showTabContent(i = 0) {
        tabContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // timer

    const deadline = "2021-09-02";
    //Функция, кот. определяет разницу между дедлайном и текущим временем. Ее задача - получить разницу между датами

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
    }


    // классы

    class MenuBlock {
        constructor(img, alt, title, text, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.convertation = 27;
            this.exchangeMoney();
        }

        exchangeMoney() {
            this.price = +this.price * this.convertation;
        }

        render() {
            const newCard = document.createElement("div");
            if(this.classes.length === 0) {
               // this.classes = newCard.classList.add("default__class");
               this.classes = "default__class";
               newCard.classList.add(this.classes);
            } else {
                this.classes.forEach(className => newCard.classList.add(className));
            }
            newCard.innerHTML = `<img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
        
        this.parent.append(newCard);
        }
    }

   /* const div = new MenuBlock();
    div.render(); */

    // Если создать объект без присвоения в переменную, то объект удаляется после использования, так как на него нет ссылок. Применимо, если нужно вызвать объект на месте, т. е. один раз.

    new MenuBlock(
        // Передаем аргументы
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container",
        "menu__item",
        "new-one"
    ).render();

});

















