$(document).ready(function(){
  var originalImage = "images/button.png";
  var hoverImage = "images/button-hover.png";

  $(".press-btn a").hover(
    function() {
      // 호버 상태 이미지로 변경
      $(this).find("img").attr("src", hoverImage);
    },
    function() {
      // 원래 이미지로 변경
      $(this).find("img").attr("src", originalImage);
    }
  );
});