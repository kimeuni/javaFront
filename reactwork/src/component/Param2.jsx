import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Param2 = () => {

    const [params] = useSearchParams();   // 여러개 값을 가져오기 위해서..
    const mid = params.get("mid");
    const page = params.get("page");

    // 파라메터가 몇개인지 모를때의 처리?
    console.log("넘어온 변수 개수 : ", params.size);

    const searchVar = [...params]
    console.log(searchVar);

    return (
        <div className='param2'>
            <h2>이곳은 Param2 입니다.</h2>
            <p>아이디 : {mid}</p>
            <p>페이지 : {page}</p>

            <hr/>

            {searchVar.map( s => (
                <p>{s[0]} / {s[1]}</p>
            ))}
        </div>
    );
};

export default Param2;