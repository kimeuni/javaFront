import React from 'react';

const Student = (props) => {
    //구조 분할
    //props : 'properties' : 부모(상위) 컴포넌트에서 자식(하위) 컴포넌트로 파라메터(매개변수)를 전달할 때 사용한다.
    const {name,age,address} = props.stu;  // {name,age,address} : name,age,address 각각 쪼갠다 (구조분할 할때 변수명 반드시 맞아야한다.(student객체에 적혀있는 변수와..)) // ES6문법 : 구조분할

    // getter처러 값을 읽어오는 역할
    return (
        <div className='student'>
            <h3>Sutudent</h3>
            <p>
                성명 : {name} / 나이 : {age} / 주소 : {address}
            </p>
        </div>
    );
};

export default Student;