document.addEventListener("DOMContentLoaded", function () {

    let mainBanerSwiper = new Swiper(".mainBanerSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 2000,
        loop: true,
        slidesPerView: 0,
        pagination: {
            el: ".mainBanerSwiper .swiper-pagination",
            clickable: true,
        },
    });
    let mainAboutSwiper = new Swiper(".mainAboutSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".mainAboutSwiper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mainAboutSwiper .def-sw-btn-next",
            prevEl: ".mainAboutSwiper .def-sw-btn-prev",
        },
    });
    let mainTecnologesSwiper = new Swiper(".mainTecnologesSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".mainTecnologesSwiper-sw-next",
            prevEl: ".mainTecnologesSwiper-sw-prev",
        },
        breakpoints: {
            470: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1044: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        }
    });
    let mainTeamSwiper = new Swiper(".mainTeamSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        watchSlidesProgress: true, // 👈 ВАЖНО!
        navigation: {
            nextEl: ".mainTeamSwiper-sw-next",
            prevEl: ".mainTeamSwiper-sw-prev",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1044: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        },
    });
    let mainSertificateSwiper = new Swiper(".mainSertificateSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        watchSlidesProgress: true, // 👈 ВАЖНО!
        navigation: {
            nextEl: ".mainSertificateSwiper-sw-next",
            prevEl: ".mainSertificateSwiper-sw-prev",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1044: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        },
    });
    let beforeAfterSwiper = new Swiper(".beforeAfterSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        watchSlidesProgress: true, // 👈 ВАЖНО!
        navigation: {
            nextEl: ".mainBeforeAfterSwiper-sw-next",
            prevEl: ".mainBeforeAfterSwiper-sw-prev",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        },
    });
    let rewsSwiper = new Swiper(".rewsSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        initialSlide: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: ".rewsSwiper-sw-next",
            prevEl: ".rewsSwiper-sw-prev",
        },
        breakpoints: {
            501: {
                slidesPerView: 1,
                spaceBetween: 20,
                initialSlide: 2,
            },
            721: {
                slidesPerView: 2,
                spaceBetween: 20,
                initialSlide: 2,
            },
        },
    });
    let aboutGallerySwiper = new Swiper(".aboutGallerySwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        loop: true,
        slidesPerView: "auto",
        initialSlide: 1,
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
            nextEl: ".aboutGallerySwiper-sw-next",
            prevEl: ".aboutGallerySwiper-sw-prev",
        },
        breakpoints: {
            501: {
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 2,
            },
            1280: {
                spaceBetween: 20,
                centeredSlides: true,
                slidesPerView: 3,
            },
        },
    });

    if (document.querySelector('.beforeAfterSwiper .image-compare')) {
        const beforeAfterContainers = document.querySelectorAll('.beforeAfterSwiper .image-compare');

        beforeAfterContainers.forEach(container => {
            // При наведении или начале взаимодействия — запрещаем свайп
            container.addEventListener('pointerdown', () => {
                beforeAfterSwiper.allowTouchMove = false;
            });

            // При уходе указателя (мышь или тач) — разрешаем обратно
            container.addEventListener('pointerup', () => {
                beforeAfterSwiper.allowTouchMove = true;
            });
            container.addEventListener('pointerleave', () => {
                beforeAfterSwiper.allowTouchMove = true;
            });
        });
    }


    if (document.getElementById('isAdmin')) {
        console.log('addSwiper.js finish work');
    }
});
