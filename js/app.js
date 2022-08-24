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
    $('#main-header nav #menu > li, #mobile-toggle-menu .gnb > li, #Work .work-list > li, #Work .work-contents .con, #close, #readme, #gotogit').mouseenter(function () {
        $('.mousepointer').css(
            'transform', 'scale(5)'
        );
    });
    $('#main-header nav #menu > li, #mobile-toggle-menu .gnb > li, #Work .work-list > li, #Work .work-contents .con, #close, #readme, #gotogit').mouseleave(function () {
        $('.mousepointer').css(
            'transform', 'scale(1)'
        );
    });

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
        };
        // 2900(contact섹션)이 되면 헤더가 다시 투명해져요
        if (2900 <= scrollposition) {
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
            if (Worksection <= scrollposition + 10) {
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




// work 섹션 탭버튼
$(function () {
    // pc site
    $('#Work .work-list li').eq(0).click(function () {
        $('#Work .work-list li').removeClass('on');
        $(this).addClass('on');
        $('#Work .work-contents').addClass('hide');
        $('#Work .work-contents').removeClass('on');
        $('#Work .pc-site').addClass('on');
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
        $('#Work .responsive').addClass('on');
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

// work 섹션 modal
$(function () {
    $('#Work .work-contents .con').click(function () {
        $('.modal-shadow').addClass('on');
    });
    $('#work-modal #close').click(function () {
        $('.modal-shadow').removeClass('on');
    });
    // 바깥클릭시 모달창 꺼짐
    $('.modal-shadow').click(function (e) {
        if (!$('#work-modal').has(e.target).length) $('.modal-shadow').removeClass('on');
    });
});


// 그림판
$(function () {

    var canvas = document.getElementById("canvas");

    var context = canvas.getContext("2d");

    var startX = 0;

    var startY = 0;

    var endX = 0;

    var endY = 0;

    var flag = false; // mousedown여부.



    $(canvas).on({

        mousedown: function (event) {

            var position = $(this).offset();

            var x = event.pageX - position.left;

            var y = event.pageY - position.top;



            console.log(event.pageX);

            console.log(position.left);



            startX = x;

            startY = y;

            flag = true;

        },

        mousemove: function (event) {

            if (flag) {



                var position = $(this).offset();

                endX = event.pageX - position.left;

                endY = event.pageY - position.top;



                context.beginPath();

                context.moveTo(startX, startY); //시작점

                context.lineTo(endX, endY); //끝점

                context.stroke(); //선그리기



                //끝점을 시작점으로 저장.

                startX = endX;

                startY = endY;

            }

        },

        mouseup: function () {

            flag = false;

        }

    });

});











$(function () {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 303,
                "density": {
                    "enable": true,
                    "value_area": 641.3648243462092
                }
            },
            "color": {
                "value": "#000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    var count_particles, update;
    
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    count_particles = document.querySelector('.js-count-particles');
    
    requestAnimationFrame(update);;
});