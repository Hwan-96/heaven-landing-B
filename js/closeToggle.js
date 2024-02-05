// 탑 배너 토글
$(document).ready(function(){
  $(".close-btn").click(function(){
    var dropDown = $(".drop-down");
    var currentMarginTop = parseInt(dropDown.css("marginTop"));

    var responsiveMargin = window.innerWidth <= 580 ? -40 : -80;

    dropDown.stop(true, true).animate({ marginTop: currentMarginTop === 0 ? responsiveMargin + "px" : "0" }, 500);
  });
});

//top popup 화살표 rotate
let togglebtn = document.querySelector('.close-btn');
let toggleArrow = document.querySelector('.btn-arrow')
togglebtn.onclick = function(){
  toggleArrow.classList.toggle('active')
}