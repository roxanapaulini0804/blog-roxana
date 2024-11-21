window.addEventListener("load", () => {

    var slider2 = new Swiper(".mySwiper2", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet2 ' + className + '"></span>';
            }
        },
    });

    var slider3 = new Swiper(".mySwiper3", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet3 ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    });

    var slider4 = new Swiper(".mySwiper4", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet4 ' + className + '"></span>';
            }
        },
        breakpoints: { }
    });

    var slider5 = new Swiper(".mySwiper5", {
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next5",
            prevEl: ".swiper-button-prev5"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination5",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet5 ' + className + '"></span>';
            }
        },
        breakpoints: { 
            768: {
                slidesPerView: 3
            }
        }
    });

    var slider6 = new Swiper(".mySwiper6", {
        navigation: {
            nextEl: ".swiper-button-next6",
            prevEl: ".swiper-button-prev6"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination6",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet6 ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                spaceBetween: 50
            }
        }
    });
     

    let iconOpen = document.querySelector('.top-icon-mobile');
    let menuOpen = document.querySelector('.manuInner');
    let menuClose = document.querySelector('.manuInnerClose');
    let bodyContent = document.querySelector('body');

    iconOpen.addEventListener("click", () => {
        menuOpen.classList.toggle('menuInnerOpen');
        bodyContent.classList.toggle('bodyOverflow');
    })

    menuClose.addEventListener('click', () => {
        menuOpen.classList.toggle('menuInnerOpen');
        bodyContent.classList.toggle('bodyOverflow')
    })

    let categories = document.querySelector('.bloque1SelectProgram');
    let aparition = document.querySelector('.bloque1SelectProgramContent');
    
    categories.addEventListener("click", () => {
        aparition.classList.toggle('activeSelect');
    })

    let cienciasCategorie = document.querySelector('.bloque1SelectProgramContentItemTopCiencias');
    let aparitionCiencias = document.querySelector('.bloque1SelectProgramContentItemBottomCiencias')

    cienciasCategorie.addEventListener('click', () => {
        aparitionCiencias.classList.toggle('bloque1SelectProgramContentItemCiencias');
        cienciasCategorie.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let educacionCategorie = document.querySelector('.bloque1SelectProgramContentItemTopEducacion');
    let aparitionEducacion = document.querySelector('.bloque1SelectProgramContentItemBottomEducacion')

    educacionCategorie.addEventListener('click', () => {
        aparitionEducacion.classList.toggle('bloque1SelectProgramContentItemCiencias');
        educacionCategorie.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let gestionCategorie = document.querySelector('.bloque1SelectProgramContentItemTopGestion');
    let aparitionGestion = document.querySelector('.bloque1SelectProgramContentItemBottomGestion')

    gestionCategorie.addEventListener('click', () => {
        aparitionGestion.classList.toggle('bloque1SelectProgramContentItemCiencias');
        gestionCategorie.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let ingenieriaCategorie = document.querySelector('.bloque1SelectProgramContentItemTopIngenieria');
    let aparitionIngenieria = document.querySelector('.bloque1SelectProgramContentItemBottomIngenieria')

    ingenieriaCategorie.addEventListener('click', () => {
        aparitionIngenieria.classList.toggle('bloque1SelectProgramContentItemCiencias');
        ingenieriaCategorie.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let saludCategorie = document.querySelector('.bloque1SelectProgramContentItemTopSalud');
    let aparitionSalud = document.querySelector('.bloque1SelectProgramContentItemBottomSalud')

    saludCategorie.addEventListener('click', () => {
        aparitionSalud.classList.toggle('bloque1SelectProgramContentItemCiencias');
        saludCategorie.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    //=================================================================================================================
    //=================================================================================================================

    let cienciasCategorieDesktop = document.querySelector('.bloque1SelectProgramContentItemTopCienciasDesktop');
    let aparitionCienciasDesktop = document.querySelector('.bloque1SelectProgramContentItemBottomCienciasDesktop')

    cienciasCategorieDesktop.addEventListener('click', () => {
        aparitionCienciasDesktop.classList.toggle('bloque1SelectProgramContentItemCienciasDesktop');
        cienciasCategorieDesktop.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let educacionCategorieDesktop = document.querySelector('.bloque1SelectProgramContentItemTopEducacionDesktop');
    let aparitionEducacionDesktop = document.querySelector('.bloque1SelectProgramContentItemBottomEducacionDesktop')

    educacionCategorieDesktop.addEventListener('click', () => {
        aparitionEducacionDesktop.classList.toggle('bloque1SelectProgramContentItemCienciasDesktop');
        educacionCategorieDesktop.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let gestionCategorieDesktop = document.querySelector('.bloque1SelectProgramContentItemTopGestionDesktop');
    let aparitionGestionDesktop = document.querySelector('.bloque1SelectProgramContentItemBottomGestionDesktop')

    gestionCategorieDesktop.addEventListener('click', () => {
        aparitionGestionDesktop.classList.toggle('bloque1SelectProgramContentItemCienciasDesktop');
        gestionCategorieDesktop.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let ingenieriaCategorieDesktop = document.querySelector('.bloque1SelectProgramContentItemTopIngenieriaDesktop');
    let aparitionIngenieriaDesktop = document.querySelector('.bloque1SelectProgramContentItemBottomIngenieriaDesktop')

    ingenieriaCategorieDesktop.addEventListener('click', () => {
        aparitionIngenieriaDesktop.classList.toggle('bloque1SelectProgramContentItemCienciasDesktop');
        ingenieriaCategorieDesktop.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

    let saludCategorieDesktop = document.querySelector('.bloque1SelectProgramContentItemTopSaludDesktop');
    let aparitionSaludDesktop = document.querySelector('.bloque1SelectProgramContentItemBottomSaludDesktop')

    saludCategorieDesktop.addEventListener('click', () => {
        aparitionSaludDesktop.classList.toggle('bloque1SelectProgramContentItemCienciasDesktop');
        saludCategorieDesktop.classList.toggle('bloque1SelectProgramContentItemTopActive');
    })

})



