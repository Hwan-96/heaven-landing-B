$(document).ready(function(){
  var isAnimating = false; // 애니메이션이 진행 중인지 여부를 나타내는 변수

  // a 태그 클릭 시 이벤트 처리
  $(".press-btn a").on('click', function(event) {
    // 부드럽게 스크롤 이동
    if (!isAnimating && this.hash !== "") {
      event.preventDefault();
      isAnimating = true; // 애니메이션이 시작됨을 표시

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
        isAnimating = false; // 애니메이션이 끝남을 표시
      });
    }
  });
});