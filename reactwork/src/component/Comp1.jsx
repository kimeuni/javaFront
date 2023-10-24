import { student,students } from "../data/data";  // import할 파일 경로 가져오기 (마지막 data는 data.js파일인데 .js(확장명)은 생략 가능)
import Student from "./Student";

const Comp1 = () => {
    // js 영역
    // 객체생성
    // const student = {
    //     name : '홍길동',
    //     age : 25,
    //     address : '청주'
    // }
    //배열
    // const students = [
    //     {
    //         name : '홍길동',
    //         age : 25,
    //         address : '청주'
    //     },
    //     {
    //         name : '김말숙',
    //         age : 30,
    //         address : '서울'
    //     },
    //     {
    //         name : '이기자',
    //         age : 19,
    //         address : '제주'
    //     }
    // ];

    // jsx문법에는 each(foreach)는 없지만, map은 있다.
    return(
        <div className="comp1">
            <h3>이곳은 Comp1입니다.</h3>
            {/* 1개 값만 가져오기 */}
            <p>
                {student.name} / {student.age} / {student.address}
            </p>
            {/* 여러개의 값(배열)을 가져오기 */}
            {/* 
            <p>
                {
                    students.map( s => (  
                        <span>{s.name} / {s.age} / {s.address}<br/></span>
                    ))   
                }
            </p>
             */} {/* students 변수명을 받을 "s" 만 적으면 된다. */}
            <hr/>
            {/* 1개 자료 출력 */}
            <Student stu={student}/>   {/* 컴포넌트   // Student.jsx 파일에 있는 props.stu 와  stu={student}는 같은 변수명(stu)을 적어야 const Student = (props) => { 를 했을 때 props가 stu변수로 알아 듣기 때문에 값을 읽을 수 있다.*/}
            {/* stu에 student 객체를 넘긴다... (student는 위에 import되어있다. (data.js)) */}
            
            {/* 여러개 자료 출력 */}
            
            {/* jsx문법으로 보게 하기 위해서 {} 안에 적는다.  */}
            {
            students.map( s => (
                <div>{s.name} / {s.age} / {s.address}</div>
            ))
            }
        </div>
    );
};

export default Comp1;