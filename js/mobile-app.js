$(function () {
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

        if (scrollposition <= Skillsection) {
            showProgress();
        }
    });
});