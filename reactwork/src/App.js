// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';  // 여기에 App.css를 import걸었기 때문에 <Header/> 컴포넌트 안에 classNmae="..." 적은 것들이 CSS 적용이 가능한 것이다.
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';
import Param1 from './component/Param1';
import Param2 from './component/Param2';

function App() {  // 컴포넌트는 첫글자 무조건 대문자!!!!
  return (
    // javascript 주석
    <div className="App">
      {/* jsc 주석 */}
      {/* <Header></Header> 안에 내용을 넣을거면 이렇게 적고 <>여기에<> 내용을 넣을 게 없으면 <Header/>하고 바로 끊어버린다.*/}
      <BrowserRouter>  {/* 링크건 애들을 보여주는 애 */}
        <Header/> {/* 컴포넌트 명  <>태그 형식을 사용하여 컴포넌트명을 적는다.. jsx문법... */}
        <Routes> {/* Route : a태그 대용... */}
          <Route path="/" element={<Home />}/>   {/*path="/" : /이렇게 들어오면  element={<Home />}: Home.jsx에 있는 내용을 출력해라...(import되어있어야 됨.) */} 
          <Route path="/mbc" element={<Comp1 />}/>   
          <Route path="/comp2" element={<Comp2 />}/>   
          <Route path="/comp3" element={<Comp3 />}/>  
          <Route path="/param/:mid" element={<Param1 />}/>     {/* /param/뒤에 변수(값)이 넘어올때 처리 됨. */}{/* :mid : mid변수에 넘겨서 받아주세용... */}
          <Route path="/param" element={<Param2 />}/>          {/* /param 뒤에 QueryString(?변수=값&변수=값)으로 값이 전송될 때 처리됨 (search: `?mid=${mid}&page=${page}`) 이런식으로 search를 적으면... */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;  
