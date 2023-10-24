import React, { useState } from 'react';

// Hooks : 값(변경되는 값들...)을 넣어주시위한 문법 : const [변수명, 함수명] = useState(초기값);
// 함수명은 변수명의 setter함수명이다.  ex) setParam1()...

let sw = 0;

const Comp2 = () => {
    const [param1,setParam1] = useState("초기값");
    
    //토글형식
    const myFunc = () => {
        if(sw === 0){
            setParam1("안녕하세요.");   // setter (아래 적는 <p>{param1}</p>의 param1을 setter로 만들어줬다. )
            sw=1;
        }
        else {
            setParam1("초기값");   
            sw=0;
        }
    };

    const [count, setCount] = useState(100);

    // count값을 1씩 증가하는 함수
    const onincrease = () => {
        setCount(count+1);
    };
    const onDecrease = () => {
        setCount(count-1);
    };

    // text상자의 내용을 변경하면 값을 바꿔주기위한 state
    const [paramV,setParamV] = useState("");
    const [param2,setParam2] = useState("");
    
    // 텍스트박스의 값을 변경하면 param2변수의 값을 변경시켜서 화면에 출력하는 함수
    const textInput = (e) => {
        console.log(e.target); // e.target;  //이것을 통해서 값 변화 감지..? (입력된 데이터와 속성을 읽는다.)
        console.log(e.target.name, e.target.value);
        
        const{name, value} = e.target  // 구조분해(구조분할) // 구조분해 연습... 값만 가져올 것이기 때문에 안해도 됨..
        // const {value} = e.target

        setParamV(name);
        setParam2(value);
    };

    // 버튼을 누르면 색을 변경시켜주는 state
    const [textColor,setTextColor] = useState('red');
    return (
        <div className="comp2">
            <h3>Comp2</h3>
            <hr/>
            <div>{param1} &nbsp;&nbsp;  {/* 변수명은 반드시 {}안에 적는다. */}
            <button onClick={myFunc}>버튼</button>  {/* 자바스크립트에서는 onclick="myFunc()"이지만, 여기서는 onClick={myFunc}로 적는다. */}{/* 얘는 무조건!! <<카멜표기범>>이라고 한다. ex)onClick */}
            </div>
            <hr/>
            <div>count : {count}</div>
            <div>
                <button onClick={onincrease}>증가</button> &nbsp;&nbsp;
                <button onClick={onDecrease}>감소</button>
            </div>
            <hr/>
            <div>입력변수 : {paramV}</div>
            <div>입력값 : {param2}</div>
            <input type="text" name="param2" onChange={textInput}/>
            <hr/>
            
            {/* CSS 적용하기 */}
            <p style={{backgroundColor:textColor,fontSize:"15pt",color:'#fff'}}>안녕하세요</p>   {/* style{{}} : 밖에쪽 {}는 jsx 문법  , 안쪽은 {} css문법 */}
            <div>
                <button onClick={() => {setTextColor('blue')}}>파랑</button>
                <button onClick={() => {setTextColor('green')}}>초록</button>
                <button onClick={() => {setTextColor('red')}}>빨강</button>
            </div>
        </div>
    );
};

export default Comp2;

// rsc + enter   하면 밑에 내용이 자동으로 완성된다. ==> 확장팩을 다운받아서 이용 가능....
// import React from 'react';

// const Comp2 = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Comp2;