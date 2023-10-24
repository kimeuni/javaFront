import { Link } from "react-router-dom";  //router에 있는 Link를 사용하기 위해 improt를 걸었다. 

const Header = () => { // 거의 100%이런식으로 적음 return으로 돌려보내려면 변수에 담아야하기 때문에 const로 받을 변수를 적음 + 화살표함수를 적음
    
    return (
        //return안에 적는 태그가 꼭 1개 있어야 한다 (이 태그가 있어야 jsx로 인식한다.).
        <div className="header">  {/* className은 컴포넌트 이름과 동일하기 한다.. (but class이름이기 때문에 앞글자는 소문자로 바꾼다.) */}
            {/* <h2>이곳은 Header입니다.</h2> */}

            {/* <a href="https://www.naver.com">Home</a>
            <a href="#">Comp1</a>
            <a href="#">Comp2</a>
            <a href="#">Comp3</a>   이런식으로 적지 않는다....(에러는 안 남..) 이거 대신 <<라우터>>라는 것을 사용 */}
            {/* react에서는 a태그 대신 router를 사용한다.  router에는 href대신에 Link태그를 사용한다.*/}
            <Link to= "/">Home</Link>  {/* href 대신 나온 거..  */}
            <Link to= "/mbc">Comp1</Link>
            <Link to= "/Comp2">Comp2</Link>
            <Link to= "/Comp3">Comp3</Link>
        </div>
    );
};

export default Header;