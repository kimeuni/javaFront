// test8.js
// 배열처리에 대한 사용예
'use strict';

let arr1 =[
    '문자자료',
    5,
    [2,4,6,8],
    {tel : '010-1234-5678'},
    function() {console.log("안녕하세요.");}
];  // {} 이렇게 적어주는 자료는 <<객체>>  // 객체 데이터가 요소로 들어갔다.
// 배열안에 문자,숫자,배열,객체,함수가 들어갔다.

console.log("arr1 : ",arr1);
console.log("1. : ", arr1[2]);
console.log("2. : ", arr1[4]);
console.log("--------------");

let arr2 = new Array();
arr2[0] = '감자',
arr2[1] = 15,
arr2[2] = [1,3,5,7],
arr2[3] = {name : '홍길동'},
arr2[4] = function(){console.log("방가~~");};
console.log("arr2 : ", arr2);

arr2.push(25);
console.log("arr2.push : ", arr2);
console.clear();

let str1 = arr2.join('-') // 분리해서 결합
console.log("str1 : ", str1); //객체는 값을 가져오지 않고 object로 표시된다. 

console.log('------------');

arr2.forEach(function(data,idx) {
    console.log(data, " : ",idx);
});

arr2.forEach((data,idx) => {
    console.log(data, " : ",idx);
});

arr2.forEach((data,idx) => console.log(data, " : ",idx));

console.log('------------');

arr2.map((data,idx) => console.log(data, " : ",idx));

// 수식으로 걸러내기 : filter 
arr2.filter(function(data, idx) {console.log(data," : ",idx);});
arr2.filter((data, idx) => console.log(data," : ",idx));

let res1 = arr2.filter((data, idx) => idx % 2 == 0);   //idx % 2 == 0 조건을 준다.. idx번호가 짝수일 경우..
console.log("res : ",res1);

// 체이닝 기법 (연결해서 사용.. / filter를 먼저 사용할 것)
let res2_2 = arr2.filter((data,idx) =>  idx % 2 == 0)
            .map((data, idx) => console.log("체이닝 연습",data," : ",idx));   //줄은 안맞춰줘도 상관 x
            console.log("res2_2 : " , res2_2); // 밑에처럼 let res2 = new Array(); 변수 타입을 안주면 값이 나오지 않음...

// 체이닝 기법 변수에 담기
let res2 = new Array();
res2 = arr2.filter((data,idx) => idx ==2)
            .map((data) => data);
console.log("res2 : " , res2);
console.log("res2 리버스 : " , res2.reverse());


const arr3 = [10,8,20,15,11,17];
console.log("arr3 : ",arr3);


// 오름차순 정렬 : sort() : 무조건 문자형식으로 정렬...
// 원본데이터 순서가 정렬된 걸로 바뀐다.
let res3 = arr3.sort();
console.log("res3 : ",res3);

// 내림차순 정렬 : reverse() : 무조건 문자형식으로 거꾸로 정렬...
let res4 = arr3.reverse();
console.log("res4 : ", res4);

console.log("arr3 : ",arr3);
arr3.forEach((data,idx) => console.log(data," : ",idx));
// console.clear();

// 최대/최소값
let max = Math.max(10,8,20,15,11,17); // Math클래스에 들어있는 max()함수 // 숫자로 비교한다...
console.log("max : ", max);

let min = Math.min(10,8,20,15,11,17); // Math클래스에 들어있는 min()함수 // 숫자로 비교한다...
console.log("min : ", min);

let max2 = Math.max(...arr3);   // ... : 배열안에 있는 리스트를 꺼내준다는 의미
console.log("max2 : ", max2);

let min2 = Math.min(...arr3);   // ... : 배열안에 있는 리스트를 꺼내준다는 의미
console.log("min2 : ", min2);

