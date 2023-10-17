// test11.js
// 날짜 함수
'use strict';

// 오늘날짜... Date()   [함수는 무조건 (괄호)가 있다.]
const today = new Date(); // 엄청 많이 나올거니 꼭 기억해야 함 ★★★★★★★★★
const year = today.getFullYear(); //연도 4자리
const month = today.getMonth(); // 월(기존 월보다 -1)
const date = today.getDate();   // 일
const hour = today.getHours(); // 시
const minute = today.getMinutes(); //분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second 


console.log("today : " , today);
console.log("year : " , year);
console.log("month : " , month);
console.log("date : " , date);
console.log("hour : " , hour);
console.log("minute : " , minute);
console.log("second : " , second);
console.log("yymmdd : " , yymmdd);

let weekStr = today.getDay(); //요일
let week = ['일','월','화','수','목','금','토'];

console.log("요일 : " , weekStr); // 일:0, 월:1, 화:2, 수:3, 목:4, 금:5, 토:6
console.log("요일 : " , week[weekStr] + "요일"); // 배열에 번호 순서대로 요일을 담는아서 출력하면 몇요일인지 출력할 수 있다.

// 해당월의 마지막 일짜
let lastDate = new Date(2023, 10 ,0);
console.log("lastDate : ", lastDate.getDate()); //getDate() : 날짜 함수

// 
function lastDates() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;

    let lastDate = new Date(year, month, 0);
    demo.innerHTML = lastDate.getDate();
}