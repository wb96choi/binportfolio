// AOS 시작
$(function () {
    AOS.init();
});


// 마우스 포인터
$(function () {


    const $cursor = document.querySelector('.mousepointer');
    document.addEventListener('mousemove', function (e) {
        $cursor.style.left = e.clientX + 'px';
        $cursor.style.top = e.clientY + 'px';
    });

    // 클릭 가능한 곳에 호버링을 하면
    $('#main-header nav #menu > li, #mobile-toggle-menu .gnb > li, #Work .work-list > li, #Work .work-contents .con, #close, #readme, #gotogit, #Contact .contact-way > a').mouseenter(function () {
        $('.mousepointer').css(
            'transform', 'scale(7)'
        );
    });
    $('#main-header nav #menu > li, #mobile-toggle-menu .gnb > li, #Work .work-list > li, #Work .work-contents .con, #close, #readme, #gotogit, #Contact .contact-way > a').mouseleave(function () {
        $('.mousepointer').css(
            'transform', 'scale(1)'
        );
    });

});


// eyesonme 애니메이션
$(function () {
    $('#About').on("mousemove", function (event) {
        var window_height = $('#About').height();
        var window_width = $('#About').width();
        var mouseXpos = event.clientX;
        var mouseYpos = event.clientY;
        var YrotateDeg = (window_width / 2 - mouseXpos) * -0.015;
        var XrotateDeg = (window_height / 2 - mouseYpos) * 0.015;
        $(".me").css({
            'transform': `translateX(${YrotateDeg}px) translateY(${-XrotateDeg}px)`,
            'transform-origin': 'center'
        });
    });
});


// 스크롤좌표값 구하기
$(function () {
    $(window).scroll(function () {
        // scrollposition이 현재 스크롤 좌표임
        let scrollposition = $(window).scrollTop();
        let Aboutsection = document.querySelector("#About").offsetTop;
        let Worksection = document.querySelector("#Work").offsetTop;

        let scrollposition_bottom = $(window).scrollTop() + $(window).height();

        // 530 이 넘으면 헤더가
        if (scrollposition >= 530) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        };
        // 2900(contact섹션)이 되면 헤더가 다시 투명해져요
        if (2900 <= scrollposition) {
            $('header').removeClass('on');
        }


        // 섹션위치에따라 네비게이터색이 변해요
        // home
        $(window).on('scroll', function () {
            if (scrollposition < Aboutsection) {
                $('.idc-home').addClass('on');
                $('.idc-contact').removeClass('on');
            } else {
                $('.idc-home').removeClass('on');
            };
        });
        // about
        $(window).on('scroll', function () {
            if (Aboutsection <= scrollposition + 10) {
                $('.idc-about').addClass('on');
                $('.idc-home').removeClass('on');
                $('.idc-contact').removeClass('on');
            } else {
                $('.idc-about').removeClass('on');
            };
        });

        // work
        $(window).on('scroll', function () {
            if (Worksection <= scrollposition + 10) {
                $('.idc-work').addClass('on');
                $('.idc-about').removeClass('on');
                $('.idc-contact').removeClass('on');
            } else {
                $('.idc-work').removeClass('on');
            };
        });
        // contact
        $(window).on('scroll', function () {

            if ($(document).height() <= scrollposition_bottom + 200) {
                $('.idc-contact').addClass('on');
                $('.idc-work').removeClass('on');
            } else {
                $('.idc-contact').removeClass('on');
            };
        });

    });
});


// 프로그레스바 크기 반응형
$(function () {
    $(window).scroll(function () {
        let scrollposition = $(window).scrollTop();
        // about second floor 프로그레스바 

        let Skillsection = document.querySelector(".second-floor").offsetTop;
        let Worksection = document.querySelector("#Work").offsetTop;

        function showProgress() {
            // html
            $('.prog-html').circleProgress({
                value: 0.9,
                startAngle: -Math.PI / 2,
                size: 50,
                thickness: 5,
                fill: {
                    color: '#ffc0cb'
                }
            });
            // css
            $('.prog-css').circleProgress({
                value: 0.85,
                startAngle: -Math.PI / 2,
                size: 50,
                thickness: 5,
                fill: {
                    color: '#ffc0cb'
                }
            });
            // javascript
            $('.prog-js').circleProgress({
                value: 0.85,
                startAngle: -Math.PI / 2,
                size: 50,
                thickness: 5,
                fill: {
                    color: '#ffc0cb'
                }
            });
            // jquery
            $('.prog-jq').circleProgress({
                value: 0.85,
                startAngle: -Math.PI / 2,
                size: 50,
                thickness: 5,
                fill: {
                    color: '#ffc0cb'
                }
            });
            // Figma
            $('.prog-figma').circleProgress({
                value: 0.7,
                startAngle: -Math.PI / 2,
                size: 50,
                thickness: 5,
                fill: {
                    color: '#ffc0cb'
                }
            });
            // photoshop
            $('.prog-ps').circleProgress({
                value: 0.9,
                startAngle: -Math.PI / 2,
                size: 50,
                thickness: 5,
                fill: {
                    color: '#ffc0cb'
                }
            });
            // Figma
            $('.prog-illust').circleProgress({
                value: 0.75,
                startAngle: -Math.PI / 2,
                size: 50,
                thickness: 5,
                fill: {
                    color: '#ffc0cb'
                }
            });

        };

        if (scrollposition >= Skillsection - 10 && scrollposition <= Skillsection + 10) {
            showProgress();
        }
    });
    if (window.matchMedia("(max-width: 375px)").matches) {
        $(window).scroll(function () {
            let scrollposition = $(window).scrollTop();
            // about second floor 프로그레스바 
            let Skillsection = document.querySelector(".second-floor").offsetTop;

            function showProgress() {
                // html
                $('.prog-html').circleProgress({
                    value: 0.9,
                    startAngle: -Math.PI / 2,
                    size: 30,
                    thickness: 5,
                    fill: {
                        color: '#ffc0cb'
                    }
                });
                // css
                $('.prog-css').circleProgress({
                    value: 0.85,
                    startAngle: -Math.PI / 2,
                    size: 30,
                    thickness: 5,
                    fill: {
                        color: '#ffc0cb'
                    }
                });
                // javascript
                $('.prog-js').circleProgress({
                    value: 0.85,
                    startAngle: -Math.PI / 2,
                    size: 30,
                    thickness: 5,
                    fill: {
                        color: '#ffc0cb'
                    }
                });
                // jquery
                $('.prog-jq').circleProgress({
                    value: 0.85,
                    startAngle: -Math.PI / 2,
                    size: 30,
                    thickness: 5,
                    fill: {
                        color: '#ffc0cb'
                    }
                });
                // Figma
                $('.prog-figma').circleProgress({
                    value: 0.7,
                    startAngle: -Math.PI / 2,
                    size: 30,
                    thickness: 5,
                    fill: {
                        color: '#ffc0cb'
                    }
                });
                // photoshop
                $('.prog-ps').circleProgress({
                    value: 0.9,
                    startAngle: -Math.PI / 2,
                    size: 30,
                    thickness: 5,
                    fill: {
                        color: '#ffc0cb'
                    }
                });
                // Figma
                $('.prog-illust').circleProgress({
                    value: 0.75,
                    startAngle: -Math.PI / 2,
                    size: 30,
                    thickness: 5,
                    fill: {
                        color: '#ffc0cb'
                    }
                });

            };

            if (scrollposition >= Skillsection - 10 && scrollposition <= Skillsection + 10) {
                showProgress();
            }
        });
    };

});

// 모바일 토글메뉴
$(function () {
    $('#toggle-menu-btn').click(function () {
        $('#toggle-menu-btn').toggleClass('active');
        $('#mobile-toggle-menu').toggleClass('on');
    });
});

// typeit
// $(function () {
//     new TypeIt("#Home article header h1", {
//         strings: "뜨거운 웹퍼블리셔는",
//         speed: 300,
//         // waitUntilVisible: true,
//         cursor: false
//     }).go();
//     new TypeIt("#Home article p", {
//         strings: "잠을 자지 않는다.",
//         speed: 300,
//         startDelay: 3000,
//         // waitUntilVisible: true,
//     }).go();
// });






// work 섹션 탭버튼
$(function () {
    // pc site
    $('#Work .work-list li').eq(0).click(function () {
        $('#Work .work-list li').removeClass('on');
        $(this).addClass('on');
        $('#Work .work-contents').addClass('hide');
        $('#Work .work-contents').removeClass('on');
        $('#Work .responsive').addClass('on');
    });
    // mobile site
    $('#Work .work-list li').eq(1).click(function () {
        $('#Work .work-list li').removeClass('on');
        $(this).addClass('on');
        $('#Work .work-contents').addClass('hide');
        $('#Work .work-contents').removeClass('on');
        $('#Work .mobile-site').addClass('on');
    });
    // responsive
    $('#Work .work-list li').eq(2).click(function () {
        $('#Work .work-list li').removeClass('on');
        $(this).addClass('on');
        $('#Work .work-contents').removeClass('on');
        $('#Work .work-contents').addClass('hide');
        $('#Work .pc-site').addClass('on');
    });
    // etc
    $('#Work .work-list li').eq(3).click(function () {
        $('#Work .work-list li').removeClass('on');
        $(this).addClass('on');
        $('#Work .work-contents').removeClass('on');
        $('#Work .work-contents').addClass('hide');
        $('#Work .etc-site').addClass('on');
    });
});

// work 섹션 이미지 슬라이드
$(function () {
    var mySwiper = new Swiper('.swiper', {
        loop: false,
        speed: 1000,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 80,
            depth: 500,
            modifier: 1,
            slideShadows: false,
        },
        slideToClickedSlide: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

});

// work 섹션 modal
$(function () {
    // 반응형
    $('#Work .responsive #contents-wrapper:eq(0) #readme').click(function () {
        $('.modal-shadow').addClass('on');
        $('.modal-shadow img').hide();
        $('.modal-shadow .nisimura').show();
    });
    $('#Work .responsive #contents-wrapper:eq(1) #readme').click(function () {
        $('.modal-shadow').addClass('on');
        $('.modal-shadow img').hide();
        $('.modal-shadow .seongnam').show();
    });
    // 모바일
    $('#Work .mobile-site #contents-wrapper:eq(0) #readme').click(function () {
        $('.modal-shadow').addClass('on');
        $('.modal-shadow img').hide();
        $('.modal-shadow .audiotech').show();
    });
    // 바깥클릭시 모달창 꺼짐
    $('.modal-shadow').click(function (e) {
        if (!$('#work-modal').has(e.target).length) $('.modal-shadow').removeClass('on');
    });
});


// Contact-way 애니메이션
$(function () {
    $('#Contact .contact-way > a').mouseenter(function () {
        $(this).find('.text').stop().fadeOut(500);
        $(this).find('.text-hidden').stop().fadeIn(500);
    });
    $('#Contact .contact-way > a').mouseleave(function () {
        $(this).find('.text').stop().fadeIn(500);
        $(this).find('.text-hidden').stop().fadeOut(500);
    });
});


// Contact 애니메이션
$(function () {
    $('#Contact').on("mousemove", function (event) {
        var window_height = $('#Contact').height();
        var window_width = $('#Contact').width();
        var mouseXpos = event.clientX;
        var mouseYpos = event.clientY;
        var YrotateDeg = (window_width / 2 - mouseXpos) * -0.05;
        var XrotateDeg = (window_height / 2 - mouseYpos) * 0.05;
        $(".thx").css({
            'transform': `translateX(${YrotateDeg}px) translateY(${-XrotateDeg}px) translate(-50%, -50%)`,
            'transform-origin': 'center'
        });
    });

});



(function($){
    var pathes = $('#profile').find('path');
    pathes.each(function( i, path ) {
        var total_length = path.getTotalLength(); // 1번 부분
 
        path.style.strokeDasharray = total_length + " " + total_length; // 2번 부분
        path.style.strokeDashoffset = total_length; // 3번 부분
 
        // 4번 부분
        $('.line').animate({
            "strokeDashoffset" : 0
        }, 1500);
    });
    //}
})(jQuery);