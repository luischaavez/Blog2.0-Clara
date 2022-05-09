// import Main from "./component/auth/Main";
import Head from "./component/Head";
import Setting_Main from "./component/Setting/Setting_Main";
import Topbar from "./component/Topbar";
import Write_Main from "./component/Write/Write_Main";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Main from "./component/Main/Main";
import Home from "./component/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Setting from "./component/Setting/Setting";
import SinglePostMain from "./component/SinglePostMain";
import { Context } from "./component/context/Context";
import { useContext } from "react";
import Edit from "./component/Edit";
import Admin from "./component/Admin";
import Edit_Main from "./component/Edit_Main";
import About from "./component/Main/About";


 

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar/>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/post/:id' element={<SinglePostMain/>}/>
   <Route path='/write' element={user? <Write_Main/> : <Home/>} />
   <Route path='/login' element={user ? <Home/> : <Login/>}/>
   <Route path = '/edit/:id' element = {<Edit_Main/>} />
   <Route path = '/admin' element = {<Admin/>} />
   <Route path = '/about' element = {<About/>} />
    <Route path ='/register' element={user ? <Home/> : <Register/>}/>
    <Route path ='/setting/:id' element={<Setting_Main/>}/>
   </Routes>
    </Router>
  );
}

export default App;
