window.onload = function(){
  const checkAll = document.getElementById('chkAll');
  const chks = document.querySelectorAll('.chk');
  const chkBoxLength = chks.length;

  checkAll.addEventListener('click', function(event){
    if(event.target.checked){
      chks.forEach(function(value){
      value.checked=true;
        })
    }else{
      chks.forEach(function(value){
      value.checked=false;
    })
  }
});

for(chk of chks){
  chk.addEventListener('click',function(){
    let count = 0;
    chks.forEach(function(value){
  if(value.checked == true){
    count++;
  }
  })
  if(count !== chkBoxLength){
    checkAll.checked = false;
  }else{
    checkAll.checked = true;
  }
  })
  }
}


/* 약관 동의 */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btn-guide').addEventListener('click', function (event) {
      let chkAll = document.getElementById('chkAll');
      if (!chkAll.checked) {
          alert("아래 전체약관에 동의해야 합니다.");
          event.preventDefault(); // 링크 클릭 이벤트 중지
          return false;
      }

      let chkBoxes = document.querySelectorAll('.chk');
      for (let i = 0; i < chkBoxes.length; i++) {
          if (!chkBoxes[i].checked) {
              alert(chkBoxes[i].closest('label').textContent.trim() + "에 동의해야 합니다.");
              event.preventDefault();
              return false;
          }
      }

      let nameInput = document.querySelector('input[name="name"]');
      let nameValue = nameInput.value.trim();
      if (nameValue === "") {
          alert("이름을 입력해주세요.");
          event.preventDefault();
          return false;
      }

      let telInput = document.querySelector('input[name="tel2"]');
      let telValue = telInput.value.trim();
      if (telValue === "") {
          alert("전화번호를 입력해주세요.");
          event.preventDefault();
          return false;
      }

      let option1Checked = false;
      let option2Checked = false;

      let option1RadioButtons = document.querySelectorAll("input[name='option1']");
      let option2RadioButtons = document.querySelectorAll("input[name='option2']");

      option1RadioButtons.forEach(function (radioButton) {
          if (radioButton.checked) {
              option1Checked = true;
          }
      });

      option2RadioButtons.forEach(function (radioButton) {
          if (radioButton.checked) {
              option2Checked = true;
          }
      });

      if (!option1Checked || !option2Checked) {
          event.preventDefault();
          alert("투자유형 및 투자금액을 선택해주세요.");
          return false;
      }

      document.querySelector('.modal-form').submit();
  });
});