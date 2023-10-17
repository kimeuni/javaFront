// test10.js
// 숫자함수 연습
'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.15;
let su4 = -3.14;
let su5 = 31.4;
let su6 = 3.5;

let num = 0;

num = Math.max(su1, su2, su3, su4, su5);
num = Math.min(su1, su2, su3, su4, su5);
num = Math.ceil(su3); // 무조건 올림
num = Math.ceil(su4); // 무조건 올림

num = Math.floor(su3); // 무조건 내림
num = Math.floor(su4); // 무조건 내림

num = Math.trunc(su3); // 무조건 버림
num = Math.trunc(su4); // 무조건 버림

num = Math.pow(2,5); // 2의 5승

num = Math.abs(su1); //절대값 (양수)
num = Math.abs(su2); //절대값 (양수)

num = Math.sqrt(16); // 제곱근

num = su3.toFixed(1); // 매개변수로 지정된 소수이하 자리수 까지 출력시켜준다. (반올림 처리 한다.)

num = su5.toFixed(0); // 소수 이하는 안구함.. (반올림 가능)

num = Math.round(su3); // Math.round(함수)는 소수 이하는 반올림할 수 없기 때문에  toFixed()라는 메소드가 나왔다.

num = su3.toFixed(1); // 매개변수로 지정된 소수이하 자리수 까지 출력시켜준다. (반올림 처리 한다.) // 뭐언가 이상함... ★★★★★

num = Math.random(); // 0 <= 난수 < 1 실수형 난수
num = Math.random() * 10; // 0~9 까지의 실수 
num = parseInt(Math.random() * 10); //0~9까지의 정수 
num = parseInt(Math.random() * 10) +1; //1~10까지의 정수 
num = parseInt(Math.random() * (14-5+1)) +5; //5~14까지의 정수 


demo.innerHTML = num;