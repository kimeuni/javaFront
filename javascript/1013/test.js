/* test.js */

// 작업의 계속 유무 체크
// 메세지창을 통해서 진행여부 결정하기(confirm())
function ynCheck() {
    yn = confirm("작업을 계속 하시겠습니까?");  // true와 false로 구분한다.. (확인(true)/취소(false))
    if(yn) {
        alert("작업을 계속합니다.")
    }
    else {
        alert("작업을 중단합니다.")
    }
}