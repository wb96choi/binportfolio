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
        // console.log(Contactsection);

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
                $('#menu .idc-home').addClass('on');
            } else {
                $('#menu .idc-home').removeClass('on');
            };
        });
        // about
        $(window).on('scroll', function () {
            if (Aboutsection <= scrollposition + 1) {
                $('#menu .idc-about').addClass('on');
                $('#menu .idc-home').removeClass('on');
            } else {
                $('#menu .idc-about').removeClass('on');
            };
        });
        // work
        $(window).on('scroll', function () {
            if (Worksection <= scrollposition + 1) {
                $('#menu .idc-work').addClass('on');
                $('#menu .idc-about').removeClass('on');
            } else {
                $('#menu .idc-work').removeClass('on');
            };
        });
        // contact
        $(window).on('scroll', function () {
            // 2188 = Contactsection
            if (2188 <= scrollposition) {
                $('#menu .idc-contact').addClass('on');
                $('#menu .idc-work').removeClass('on');
            } else {
                $('#menu .idc-contact').removeClass('on');
            };
        });


    });
});

$(function(){
    new TypeIt("#Home article header h1", {
        strings: "뜨거운 웹퍼블리셔",
        speed: 300,
        // waitUntilVisible: true,
      }).go();
      new TypeIt("#Home article p", {
        strings: "최원빈",
        speed: 300,
        startDelay: 1500,
        // waitUntilVisible: true,
      }).go();
});