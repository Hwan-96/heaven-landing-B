function checkVisible(element, check = 'above') {
  const viewportHeight = $(window).height();
  const scrolltop = $(window).scrollTop();
  const y = $(element).offset().top;
  const elementHeight = $(element).height();

  const halfwayPoint = (y + elementHeight / 2) < (viewportHeight + scrolltop);
  // 뷰포트 절반지점

  if (check == "visible")
      return (halfwayPoint && (y > (scrolltop - elementHeight)));
  if (check == "above")
      return (halfwayPoint);
}
let isVisible = false;
const func = function () {
  if (!isVisible && checkVisible('#sec3', 'above')) {
      $(function () {
          function step0() {
              setTimeout(step1, 500); // 로딩 > 넘어가는 속도
          }
          function step1() {
              $('.step-list').attr('class', 'step-list').addClass('step-1');
              setTimeout(chart1, 0);
          }
          var cur = 0;

          function chart1() {
            if ($('.chart .pr-list li').eq(cur).length == 0) {
              setTimeout(step2, 1000);
              return false;
            }
    
            var pr = $('.chart .pr-list li').eq(cur).find('.progress-change-color');
            var width = 0;
            var width_p = width + '%';
            var id = setInterval(frame, 300);
              function frame() {
                if (width >= 100) {
                  clearInterval(id);
                  cur++;
                  setTimeout(chart1, 500);
                } else {
                  width = width + 100;
                  width_p = width + '%';
                  pr.css('width', width_p);
                  pr.attr('aria-valuenow', width);
                  pr.text(width_p);
                  requestAnimationFrame(frame);
                }
              }
            }
            
            function step2() {
              $('.step-list').attr('class', 'step-list').addClass('step-2');
            }
            $(document).ready(function () {
              setTimeout(step0, 100);
            });
          });
          isVisible = true;
        }
        // 모든 동작 끝나고 스크립트 삭제
        isVisible && window.removeEventListener('scroll', func);
      }
    window.addEventListener('scroll', func);