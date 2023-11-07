ymaps.ready(init);
function init() {    var myMap = new ymaps.Map("map", {
            center: [53.48895328886025, 49.434730826200095],            zoom: 12
        }, {            searchControlProvider: 'yandex#search'
        }),
        yellowCollection = new ymaps.GeoObjectCollection(null, {            preset: 'islands#redIcon'
        }),        blueCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#blueIcon'        }),
        yellowCoords = [[53.47524653321624, 49.47700605463471], [53.50478268770152, 49.40227949685244]];
    for (var i = 0, l = yellowCoords.length; i < l; i++) {        yellowCollection.add(new ymaps.Placemark(yellowCoords[i]));
    }
    myMap.geoObjects.add(yellowCollection).add(blueCollection);
    // Через коллекции можно подписываться на события дочерних элементов.    yellowCollection.events.add('click', function () { alert('Кликнули по желтой метке') });
    blueCollection.events.add('click', function () { alert('Кликнули по синей метке') });
    // Через коллекции можно задавать опции дочерним элементам.    blueCollection.options.set('preset', 'islands#blueDotIcon');
}


document.addEventListener('DOMContentLoaded', function() {

    
    const blockAcard = document.querySelectorAll(".info-block-acard");
    const btnOpenAcard = document.querySelectorAll(".btnArrow");
    const contentBlock = document.querySelectorAll(".content-block");
    btnOpenAcard.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const dataAddOpenAcard = e.target.dataset;
        blockAcard.forEach((el) => {
        contentBlock.forEach((item) => {
            if (
            dataAddOpenAcard.addOpenAcard === el.dataset.openAcard &&
            el.dataset.openAcard === item.dataset.style
            ) {
            el.classList.toggle("noactive");
            btn.classList.toggle("animbtn");
            btn.classList.toggle("rotate-arrow");
            item.classList.toggle("active-content-block");
            console.log("item >>??", item);
            }
        });
        });
    });
    });
    // Slider

    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });
});



