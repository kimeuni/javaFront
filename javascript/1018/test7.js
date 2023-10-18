// test7.js
// 정규식 연습
'use strict';

function regexCheck() {
    //정규표현식을 먼저 만들어 놓고 수행한다.
    const regEx1 = /atom/g; // 'atom'이라는 문자열이 포함되어 있으면 'true', 없으면 false 반환  //보통 regex로 많이 사용한다
    const regEx2 = /kbs|mbc|sbs|cjb/g;   // kbc 또는 mbc 또는 sbs 또는 cjb 문자열을 포함하고 있느냐?(g: 전체 범위에서 확인) ( | 은 or 역할을 한다.)
    const regEx3 = /홍길(동|순)/g  // 홍길동 또는 홍길순을 포함하고 있느냐?
    const regEx4 = /[a-z]/g;  // 영문 소문자를 포함하고 있느냐?
    const regEx5 = /[^a-z]/g;  // 영문 소문자만 포함하고 있느냐?
    // const regEx6 = /[^a-z]/gm;  // 영문 소문자만 포함하고 있느냐?
    const regEx6 = /[A-Z]/g;     // 영문 대문자를 포함하고 있느냐?
    const regEx7 = /[^A-Z]/g;     // 영문 대문자만 포함하고 있느냐?
    const regEx8 = /[0-9]/g;     // 숫자를 포함하고 있느냐?
    const regEx9 = /[^0-9]/g;     // 숫자만 포함하고 있느냐?
    const regEx10 = /[가-힣]/g;     // 한글을 포함하고 있느냐?
    const regEx11 = /[^가-힣]/g;     // 한글만 포함하고 있느냐?
    const regEx12 = /[a-zA-Z0-9]/g;     // 영문자와 숫자를 포함하고 있느냐?
    const regEx13 = /[^a-zA-Z0-9]/g;     // 영문자와 숫자만 포함하고 있느냐?
    const regEx14 = /[^a-zA-Z0-9_]/g;     // 아이디는 영문자 숫자 밑줄(_)만 포함하고 있느냐?

    const regEx21 = /\./g // .은 제어코드이기 때문에 \(역슬레시)를 적어주어야 한다. //  '.'을 포함하고 있느냐?
    const regEx22 = /\d/g // d: 숫자를 포함하고 있느냐?
    const regEx23 = /\D/g // D: 숫자를 포함하고 있지 않느냐?? (대문자 D는 d(숫자)의 부정 // 숫자가 아닌것)
    const regEx24 = /\w/g // w: 영문자/숫자/_ 포함하고 있느냐?
    const regEx25 = /\W/g // W: 영문자/숫자/_ 포함하고 있지 않느냐?
    const regEx26 = /\s/g // s: 문장안에 공백(tab 포함)을 포함하고 있느냐?
    
    const regEx31 = /홍길자?/g // ?: 앞의 글자가 0개나 1개 포함 유무?
    const regEx32 = /홍길자+/g // +: 앞의 글자가 1개 이상 포함 유무?
    const regEx33 = /홍길자*/g // *: 앞의 글자가 0개 이상 포함 유무? (? 와 + 의 의미가 합쳐짐)

    let content = document.getElementById("content").value.trim();
    if(content == ""){
        alert("문자열을 입력하세요.")
    }
    // else if(!content.match(regEx1)) alert("본문에 atom문자열을 포함하고 있지 않습니다.")  // content라는 text필드 안에 atom이라는 글자가 없냐?
    // else if(!content.match(regEx2)) alert("kbc 또는 mbc 또는 sbs 또는 cjb 문자열을 포함하고 있지 않습니다.");
    // else if(!content.match(regEx3)) alert("홍길동 또는 홍길순을 포함하고 있지 않습니다.");
    // else if(regEx.test(content)) alert("");
    // else if(!regEx4.test(content)) alert("영문 소문자를 포함하고 있지 않습니다.");
    // else if(regEx5.test(content)) alert("영문 소문자만 포함하고 있지 않습니다.");
    // else if(regEx6.test(content)) alert("영문 소문자만 포함하고 있지 않습니다.");
    // else if(!regEx6.test(content)) alert("영문 대문자를 포함하고 있지 않습니다.");
    // else if(regEx7.test(content)) alert("영문 대문자만 포함하고 있지 않습니다.");
    // else if(!regEx8.test(content)) alert("숫자를 포함하고 있지 않습니다.");
    // else if(regEx9.test(content)) alert("숫자만 포함하고 있지 않습니다.");
    // else if(!regEx10.test(content)) alert("한글을 포함하고 있지 않습니다.");
    // else if(regEx11.test(content)) alert("한글만 포함하고 있지 않습니다.");
    // else if(!regEx12.test(content)) alert("영문자나 숫자를 포함하고 있지 않습니다.");
    // else if(regEx13.test(content)) alert("영문자나 숫자만 포함하고 있지 않습니다.");
    // else if(regEx14.test(content)) alert("영문자,숫자,밑줄(_)만 포함하고 있지 않습니다.");
    // else if(!regEx21.test(content)) alert(".을 포함하고 있지 않습니다.");
    // else if(!regEx22.test(content)) alert("숫자를 포함하고 있지 않습니다.");
    // else if(regEx23.test(content)) alert("숫자만 포함하고 있지 않습니다.");
    // else if(!regEx24.test(content)) alert("영문자, 숫자, _ 만 포함하고 있지 않습니다.");
    // else if(!regEx26.test(content)) alert("공백을 포함하면 안됩니다.");
    // else if(regEx31.test(content)) alert("'홍길'또는 '홍길?'가 포함되어 있습니다.");
    // else if(regEx32.test(content)) alert("'홍길자'또는 '홍길자자....' 가 포함되어 있습니다.");
    else if(regEx33.test(content)) alert("'홍길' 또는 '홍길자' 또는 '홍길자자~'가 포함되어 있습니다.");
    
    
    
    
    
    else alert("정상적으로 통과되셨습니다.")
}