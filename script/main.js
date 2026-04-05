let elHeader = document.querySelector('.js-header');
let arrBurgers = elHeader.querySelectorAll('.js-burger');
let arrDropDowns = elHeader.querySelectorAll('.js-dropdown');
let elMainTitle = document.querySelector('.js-main-title');
let elFixBlock = document.querySelector('.js-scrolled');
let elFixBlockMobile = document.querySelector('.js-mobile-scrolled');
let arrQuestion = document.querySelectorAll('.js-question');
let arrGoCyberSprint = document.querySelectorAll('.js-go-cyber-sprint');
let arrGoMotion = document.querySelectorAll('.js-go-motion');
let arrGoNews = document.querySelectorAll('.js-go-news');
let arrGoFaq = document.querySelectorAll('.js-go-faq');
let arrGoPartners = document.querySelectorAll('.js-go-partners');
let arrGoFinal = document.querySelectorAll('.js-go-final');
let elCyberSprint = document.querySelector('.js-cyber-sprint');
let elForStages = document.querySelector('.js-for-stages');

let elFinal = document.querySelector('.js-final');
let elMotion = document.querySelector('.js-motion');
let elNews = document.querySelector('.js-news');
let elFaq = document.querySelector('.js-faq');
let elPartners = document.querySelector('.js-partners');
let arrInfo = document.querySelectorAll('.js-info');
let arrExpands = document.querySelectorAll('.js-data-expand');
let arrBlockAdaptive = document.querySelectorAll('.js-result-adaptive');

function madeShadow(classNameAllBlock, classNameElTarget, classNameElShadow) {
    let arrBlocks = document.querySelectorAll(classNameAllBlock);
    let arrButtons = Array.from(document.querySelectorAll('.js-show-more'));
    arrBlocks.forEach((item, index) => {
        let elTarget = item.querySelector(classNameElTarget);
        let elShadow = item.querySelector(classNameElShadow);
        let arrItems = Array.from(item.querySelectorAll('.js-result>div'));
        let halfArrItems = Array.from(item.querySelectorAll('.js-result>div')).slice(0, 11);

        let halfGeneralHeight = 0;
        let generalHeight = 0;

        for(let i=0; i<arrItems.length; i++) {
            generalHeight += arrItems[i].offsetHeight;
        }

        for(let i=0; i<halfArrItems.length; i++) {
            halfGeneralHeight += halfArrItems[i].offsetHeight;
        }

        item.style = "height: " + halfGeneralHeight + "px";

        let setHeight = halfGeneralHeight - 2; //2 это рамки сверху и снизу
        let setWidth = elTarget.offsetWidth;

        elShadow.style = "width: "+setHeight + "px; height: "+ setWidth + "px";

        let flag = false;
        arrButtons[index].addEventListener('click', function() {
            if(flag) {
                this.textContent = 'Показать все';
                item.style = "height: " + halfGeneralHeight + "px";
                elShadow.style = "width: "+(halfGeneralHeight - 2)+ "px; height: "+ elTarget.offsetWidth + "px";
                flag = false;
            }
            else {
                item.style = "height: " + generalHeight + "px";
                elShadow.style = "width: "+(generalHeight - 2)+ "px; height: "+ elTarget.offsetWidth + "px";
                this.textContent = 'Свернуть таблицу';
                flag = true;
            }

        })
    });
}
function showHideAdaptive(classNameBlock, classNameButtons) {
    let arrBlock = document.querySelectorAll(classNameBlock);
    let arrButtons = document.querySelectorAll(classNameButtons);

    arrBlock.forEach((item, index) => {
        let arrItem = item.querySelectorAll('.js-result-adaptive > div');
        let halfArrItem = Array.from(item.querySelectorAll('.js-result-adaptive > div')).slice(0, 10);


        let generalHeight = 0;
        let halfGeneralHeight = 0;

        for(let j of halfArrItem) {
            halfGeneralHeight += j.offsetHeight;
        }

        item.style = "height: " + halfGeneralHeight + 'px';


        let flag = false;
        arrButtons[index].addEventListener('click', function (){
            if(flag) {
                this.textContent = "Показать еще";
                this.removeAttribute('data-yet');
                halfGeneralHeight = 0;
                for(let j of halfArrItem) {
                    halfGeneralHeight += j.offsetHeight;
                }
                item.style = "height: " + halfGeneralHeight + 'px';
                flag = false;
            }
            else {
                this.textContent = "Свернуть таблицу";
                this.setAttribute('data-yet', 'no');

                generalHeight = 0;
                for(let j of arrItem) {
                    generalHeight += j.offsetHeight;
                }
                item.style = "height: " + generalHeight + 'px';

                flag = true;
            }

        })
    })
}
function showHideStages() {
    let elShowButton = document.querySelector('.js-show-stages');
    let elHideButton = document.querySelector('.js-hide-stages');
    let elStages = document.querySelector('.js-stages');
    let elStagesWrapper = document.querySelector('.js-stages-wrapper');
    let arrDiv = Array.from(elStages.querySelectorAll('.js-stages>div'));
    let elTitle = elForStages.querySelector('.js-stage-title');
    let elSubTitle = elForStages.querySelector('.js-stage-subtitle');
    let heightStages = 0;
    if(elStages.getAttribute('style')) {
        elSubTitle.classList.add('is-hidden');
        if(screen.width > 1023) {
            elTitle.classList.add('is-hidden');
            elStages.style = "height: " + elStagesWrapper.offsetHeight + "px";
        }
        if(screen.width <= 1023) {
            for(let i of arrDiv) {
                heightStages += i.offsetHeight;
            }
            elStages.style = "height: " + heightStages + "px";
        }
        elStages.classList.add('active');
        elShowButton.classList.add('active');
    }
    else {
        elStages.removeAttribute('style');
        heightStages = 0;
        elStages.classList.remove('active');
        elShowButton.classList.remove('active');
        elTitle.classList.remove('is-hidden');
        elSubTitle.classList.remove('is-hidden');
    }
    elShowButton.addEventListener('click', () => {
        elSubTitle.classList.add('is-hidden');
        if(screen.width > 1023) {
            elTitle.classList.add('is-hidden');
            elStages.style = "height: " + elStagesWrapper.offsetHeight + "px";
        }
        if(screen.width <= 1023)  {
            for(let i of arrDiv) {
                heightStages += i.offsetHeight;
            }
            elStages.style = "height: " + heightStages + "px";

        }
        elStages.classList.add('active');
        elShowButton.classList.add('active');
    })

    elHideButton.addEventListener('click', () => {
        elStages.removeAttribute('style');
        heightStages = 0;
        elStages.classList.remove('active');
        elShowButton.classList.remove('active');
        elTitle.classList.remove('is-hidden');
        elSubTitle.classList.remove('is-hidden');
    })
}

window.addEventListener('resize', () => {
    if(screen.width > 1023){
        madeShadow('.js-result', '.js-result-score', '.js-shadow');
    }
    if(screen.width <= 1023) {
        showHideAdaptive('.js-result-adaptive', '.js-show-more-adaptive');
    }
    if(screen.width > 767) {
        let arrTabs = document.querySelectorAll('.js-tabs>div');
        let arrForTabs = document.querySelectorAll('.js-for-tabs>div');
        arrTabs.forEach((item, index) => {
            item.addEventListener('click', () => {
                for(let i of arrTabs) {
                    i.classList.remove('active')
                }
                for(let j of arrForTabs) {
                    j.classList.remove('active')
                }
                item.classList.add('active');
                arrForTabs[index].classList.add('active');

            })
        })
    }

    showHideStages();
});
showHideStages();
if(screen.width > 1023) {
    madeShadow('.js-result', '.js-result-score', '.js-shadow');
}
else {
    showHideAdaptive('.js-result-adaptive', '.js-show-more-adaptive')
}



window.addEventListener('scroll', () => {
    if(document.querySelector('.js-main-title')) {
        if(window.screen.width < 768){
            arrDropDowns.forEach((item) => {
                item.classList.add('is-hidden');
            })
            elHeader.classList.remove('dropped');

            if(window.scrollY >= (elMainTitle.getBoundingClientRect().top + elMainTitle.getBoundingClientRect().height + 100)) {
                elFixBlockMobile.classList.remove('is-hidden');
            }
            else {
                elFixBlockMobile.classList.add('is-hidden');
            }
        }
        else {
            if(window.scrollY >= (elMainTitle.getBoundingClientRect().top + elMainTitle.getBoundingClientRect().height + 300)) {
                elFixBlock.classList.remove('is-hidden');
            }
            else {
                elFixBlock.classList.add('is-hidden')
            }
        }
    }


})

arrBurgers.forEach((item, index) => {
    item.addEventListener('click', () => {
        arrDropDowns[index].classList.toggle('is-hidden');
        elHeader.classList.toggle('dropped');
    })
})



function clickOnElementsOfArray (arrELements, elElement) {
    arrELements.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            elElement.scrollIntoView(
                {
                    behavior: 'smooth'
                }
            )
        })
    })
}

clickOnElementsOfArray(arrGoCyberSprint, elCyberSprint);
clickOnElementsOfArray(arrGoMotion, elMotion);
clickOnElementsOfArray(arrGoNews, elNews);
clickOnElementsOfArray(arrGoFaq, elFaq);
clickOnElementsOfArray(arrGoPartners, elPartners);
clickOnElementsOfArray(arrGoFinal, elFinal);


let sliderFlag = false;
let sliderFlag2 = false;

function toggleSlider(){
    if(window.screen.width < 1024 && !sliderFlag) {
        sliderFlag = true;
        $('.js-map-wrapper').slick({
            arrows: false,
            slidesToShow: 1.1,
            slidesToScroll: 1,
            infinite: false,
            centerMode: true,
        });
    }
    else if(window.screen.width >= 1024 && sliderFlag){
        sliderFlag = false;
        $('.js-map-wrapper').slick('unslick');
    }
}

function toggleSlider2(){
    if(window.screen.width < 768 && !sliderFlag2) {
        sliderFlag2 = true;
        $('.js-stages-wrapper').slick({
            arrows: false,
            slidesToShow: 1.2,
            slidesToScroll: 1,
            infinite: false,
            centerMode: true,
        });
    }
    else if(window.screen.width >= 768 && sliderFlag2){
        sliderFlag2 = false;
        $('.js-stages-wrapper').slick('unslick');
    }
}
toggleSlider();
toggleSlider2();
window.addEventListener('resize', (e) => {
    toggleSlider();
    toggleSlider2();
});


$('.js-news-wrapper').slick({
    arrows: true,
    slidesToShow: 2.6,
    slidesToScroll: 1,
    infinite: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 1.7,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.3,
            }
        },
    ]
});

arrQuestion.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})



arrInfo.forEach((item,index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        let elBlock = item.parentNode.parentNode;
        let elButton = elBlock.nextSibling.nextSibling;

        let arrLi = arrExpands[index].querySelectorAll('li');
        let heihtExpand = 0;
        for(let i of arrLi) {
            heihtExpand += i.offsetHeight;
        }
        if(arrExpands[index].getAttribute('style')){
            arrExpands[index].removeAttribute('style');
        }
        else {
            arrExpands[index].style = "height:" + heihtExpand + "px"
        }

        let arrDiv = Array.from(elBlock.querySelectorAll('.js-result-adaptive > div'));
        setTimeout(() => {
            if(elButton.getAttribute('data-yet')) {
                let blockHeight = 0;
                for(let j of arrDiv) {
                    blockHeight += j.offsetHeight;
                }
                elBlock.style = "height: " + blockHeight + "px";
            }
            else {
                let halfArrItem = arrDiv.slice(0, 10);
                let halfBlockHeight = 0;
                for(let j of halfArrItem) {
                    halfBlockHeight += j.offsetHeight;

                }
                elBlock.style = "height: " + halfBlockHeight + "px";
            }
        }, 300)

    })
})

let arrButPlay = document.querySelectorAll('.js-button-play');
let arrVideo = document.querySelectorAll('.js-poster-video');
arrButPlay.forEach((item, index) => {
    item.addEventListener('click', () => {
        arrVideo[index].classList.add('is-hidden');
    })
})


if(screen.width >767) {
    let arrTabs = document.querySelectorAll('.js-tabs>div');
    let arrForTabs = document.querySelectorAll('.js-for-tabs>div');
    arrTabs.forEach((item, index) => {
        item.addEventListener('click', () => {
            for(let i of arrTabs) {
                i.classList.remove('active')
            }
            for(let j of arrForTabs) {
                j.classList.remove('active')
            }
            item.classList.add('active');
            arrForTabs[index].classList.add('active');

        })
    })
}

let wrapper = document.querySelector('.js-move-wrapper');
let marquee = document.querySelector('.js-move');
let wrapperWidth = wrapper.offsetWidth;
let marqueeWidth = marquee.scrollWidth;

function move() {
    let currentTX = getComputedStyle(marquee).transform.split(',');
    if( currentTX[4] === undefined ) {
        currentTX = -1;
    } else {
        currentTX = parseFloat(currentTX[4]) - 1;
    }

    if(-currentTX >= marqueeWidth) {
        marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';

    } else {
        marquee.style.transform = 'translateX(' + currentTX + 'px)';
    }
}

let interval = setInterval(move, 40);


let arrEvents = document.querySelectorAll('.js-events');
let arrEventsButton = document.querySelectorAll('.js-map-button');

function autoHeight() {
    arrEvents.forEach((item) => {
        let arrItem = item.querySelectorAll('li');
        let heightOfViewPart = 0;
        for(let i=0; i< 2; i++) {//Берем высоту первых двух новостей...
            heightOfViewPart += arrItem[i].offsetHeight;
        }

        item.style = 'height: ' + heightOfViewPart + 'px';//... и ставим ее всему блоку новостей
    })
}
autoHeight();
window.onresize = autoHeight();









