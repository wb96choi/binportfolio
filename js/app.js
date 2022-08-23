// AOS 시작
$(function () {
    AOS.init();
});

// 마우스 포인터
$(function(){
    const $cursor = document.querySelector('.mousepointer');
    document.addEventListener('mousemove', function(e) {
      $cursor.style.left = e.clientX + 'px';
      $cursor.style.top = e.clientY + 'px';
    });
    
    // 클릭 가능한 곳에 호버링을 하면
    $('#main-header nav #menu > li, #mobile-toggle-menu .gnb > li, #Work .work-list > li, #Work .work-contents .con, #close').mouseenter(function(){
        $('.mousepointer').css(
            'transform', 'scale(5)'
        );
    });
    $('#main-header nav #menu > li, #mobile-toggle-menu .gnb > li, #Work .work-list > li, #Work .work-contents .con, #close').mouseleave(function(){
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
            if (Worksection <= scrollposition +10) {
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
$(function(){
    $('#Work .work-contents .con').click(function(){
        $('.modal-shadow').addClass('on');
    });
    $('#work-modal #close').click(function(){
        $('.modal-shadow').removeClass('on');
    });
    // 바깥클릭시 모달창 꺼짐
    $('.modal-shadow').click(function(e){
        if( !$('#work-modal').has(e.target).length ) $('.modal-shadow').removeClass('on');
    });
});





