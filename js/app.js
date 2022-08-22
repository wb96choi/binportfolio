// AOS 시작
$(function () {
    AOS.init();
});

// 마우스 포인터
$(function () {
    document.onmousemove = animateCircles; // circle follow mouse

    var colors = ['pink', '#CEFFAF', '#FCFFE7']

    function animateCircles(event) {
        var circle = document.createElement("div");
        circle.setAttribute("class", "mousepointer");
        document.body.appendChild(circle); // adds function to body

        // adds motion
        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';

        // randomize color
        var color = colors[Math.floor(Math.random() * colors.length)];
        circle.style.borderColor = color;

        // adds animation
        circle.style.transition = "all 0.5s linear 0s";

        circle.style.left = circle.offsetLeft - 20 + 'px';
        circle.style.top = circle.offsetTop - 20 + 'px';

        circle.style.width = "50px";
        circle.style.height = "50px";
        circle.style.borderWidth = "5px";
        circle.style.opacity = 0;
    }
});

// 스크롤좌표값 구하기
$(function () {
    $(window).scroll(function () {
        // scrollposition이 현재 스크롤 좌표임
        var scrollposition = $(window).scrollTop();
        var scrollposition_bottom = $(document).height() - $(window).height() - $(window).scrollTop();

        console.log(scrollposition);
        console.log(scrollposition_bottom);

        let Homesection = document.querySelector("#Home").offsetTop;
        let Aboutsection = document.querySelector("#About").offsetTop;
        let Worksection = document.querySelector("#Work").offsetTop;
        let Contactsection = document.querySelector("#Contact").offsetTop;
        console.log(Worksection);
        console.log(Aboutsection);

        // 530 이 넘으면 헤더가
        if (scrollposition >= 530) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }


        // 섹션위치에따라 색이 변해요
        // home
        $(window).on('scroll', function () {
            if (scrollposition < Aboutsection) {
                $('.idc-home').addClass('on');
            } else {
                $('.idc-home').removeClass('on');
            };
        });
        // about
        $(window).on('scroll', function () {
            if (Aboutsection <= scrollposition + 1) {
                $('.idc-about').addClass('on');
                $('.idc-home').removeClass('on');
            } else {
                $('.idc-about').removeClass('on');
            };
        });
        // work
        $(window).on('scroll', function () {
            if (Worksection <= scrollposition) {
                $('.idc-work').addClass('on');
                $('.idc-about').removeClass('on');
            } else {
                $('.idc-work').removeClass('on');
            };
        });
        // contact
        $(window).on('scroll', function () {
            // 2900 = Contactsection
            if (2900 <= scrollposition) {
                $('.idc-contact').addClass('on');
                $('.idc-work').removeClass('on');
            } else {
                $('.idc-contact').removeClass('on');
            };
        });


    });
});

// 모바일 토글메뉴
$(function () {
    
    $('#toggle-menu-btn').click(function () {
        $('#toggle-menu-btn').toggleClass('active');
        $('#mobile-toggle-menu').toggleClass('on');
    })
});

$(function () {
    new TypeIt("#Home article header h1", {
        strings: "뜨거운 웹퍼블리셔는",
        speed: 300,
        // waitUntilVisible: true,
    }).go();
    new TypeIt("#Home article p", {
        strings: "잠을 자지 않는다.",
        speed: 300,
        startDelay: 1500,
        // waitUntilVisible: true,
    }).go();
});





$(function () {
    const swiper = new Swiper('.workslider', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            slideShadows: true,
        },
        pagination: {
            el: ".pagination_bullet",
            type: 'bullets'
        }

    });
});