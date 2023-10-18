// test4.js
'use strict'
class Member {
    // name;   // 생략가능 (매개변수명과 필드명이 같을 경우에만 해당)
    // age // 필드 생성 생략하고 생성자에서 사용 가능?

    //생성자
    constructor(name, age,color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    // getter 생성
    get name() {
        return this._name;
    } //return으로 값을 넘김 this._name // getter일 경우 _ 을 사용
    get age() {
        // return this._age - 1;
        return this._age;
    }
    get color() {
        return this._color;
    }
    // setter 생성
    set name(name) {
        this._name = name;
    }
    set age(age) {
        if(age < 1) age = 1;  // 나이가(age) 1살보다 적으면 age를 1로 저장해라...
        this._age = age;
    }
    set color(color) {
        if(color == '깜정' || color == '흑색' || color == '검정') color='검정';
        
        this._color =color;
    }
}