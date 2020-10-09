import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from './components/Chat';
import  { selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './components/firebase';
import {login, logout} from "./features/userSlice";

function App() {
  const dispatch =useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      // console.log("user is : ", authUser);
      if(authUser){
        //user loged in
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      }else{
        //user logout
        dispatch(logout());
      }
    });
  },[dispatch]);


  return (
    <div className="app">
      {user ? (
        <>
        {/* sidebar */}
          <Sidebar />
  
          {/* Chat */}
          <Chat />
        </>
      ):(
        <>
        <Login />
        </>
      )}
    </div>
  );
}

export default App;
