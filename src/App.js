import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Sidebar from './component/Sidebar';
import Signin from './component/Signin';
import Home from './component/Home';
//import MasterContex from './context/MasterContex';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from './Webapi/api';
import ReqRestaurant from './component/ReqRestaurant';
import Dashbord from './component/Dashbord';
import Restaurantlist from './component/Restaurantlist';
import Addplan from './component/Addplan';
import PageReqRes from './component/PageReqRes';
import PageActiveRes from './component/PageActiveRes';
import UpdatePlan from './component/UpdatePlanPage';
import UpdateEmailPage from './component/UpdateEmailPage';
import MyProvider, { MyContext } from './context/MasterContex';
import { useContext } from 'react';
import ActiveResList from './component/ActiveResList';
import { useSelector } from 'react-redux';
import PasswordCheckPage from './component/PasswordCheckPage';
import UpdatePassword from './component/UpdatePassword';
import ForgotPassword from './component/ForgotPasaword';
import UpdateForgotPassword from './component/UpdatePasswordForgot';

function App() {

  // const [requestRes, setRequestRes] = useState([]);
  // const [restaurantList,setRestaurantList] = useState([]);
  // const [plans,setPlans] = useState([]);
  // const loadReq = async () => {
  //   try {
  //     let response = await axios.get(api.REQRESTORENT_LIST);
  //     if(response.data.status)
  //      setRequestRes(response.data.res);
  //   }
  //   catch (err) {
  //     console.log("Netwrok Error");
  //   }
  // }


  // const loadRes = async () => {
  //   try {
    
  //     let response = await axios.get(api.RESTAURANT_LIST);
  //     if(response.data.status)
  //       setRestaurantList(response.data.res);  

  //   }
  //   catch (err) {
  //     console.log("Netwrok Error");
  //   }
  // }

  // const loadPlans = async () => {
  //   try{
  //     let response = await axios.get(api.Plans_Lists);
  //     if(response.data.status)
  //       setPlans(response.data.result);  
  //   }
  //   catch(err){
  //     console.log("Network Error");
  //   }
  // }
  // useEffect(()=>{
  //   loadReq();
  //   loadRes();
  //   loadPlans();
   
  // },[])

  const { updateReqRes ,updateResList ,updatePlan,restaurantList} = useContext(MyContext);
  let currentAdmin = useSelector(state => state.admin);
console.log("inside App .......... ")
  const loadReq = async () => {
      try {
        let response = await axios.get(api.REQRESTORENT_LIST);
        console.log(response.data.res[0],"response of restaurant list");
        if(response.data.status)
         updateReqRes(response.data.res);
         console.log("req res list in context....",restaurantList);
      }
      catch (err) {
        console.log("Netwrok Error");
      }
    }

    const loadRes = async () => {
      try {
        let response = await axios.get(api.RESTAURANT_LIST);
        console.log("res......",response.data)
        if(response.data.status)
         updateResList(response.data.result);
         console.log("resIIIII....",restaurantList);
      }
      catch (err) {
        console.log("Netwrok Error");
      }
    }

  useEffect(()=>{
    loadReq();
    loadRes();
    // loadPlans();
  },[]);

  return <div id='container' className='container-fluid'>
    {/* <MyProvider> */}
     {/* <MasterContex.Provider value={{requestRes:requestRes,restaurantList:restaurantList,plans:plans,updateReqRes}}> */}
    <Routes>
      if(!currentAdmin)
      <Route path='/' element={<Signin/>}/>
      <Route path='/dashboard' element={<Home/>} >
        <Route path='/dashboard/requested-res' element={<ReqRestaurant/>}/>
        <Route path='/dashboard' element={<Dashbord/>}></Route>
        <Route path='/dashboard/restaurant-list' element={<Restaurantlist/>}/>
        <Route path='/dashboard/plan-add' element={<Addplan/>}/>
        <Route path='/dashboard/requested-res-details' element={<PageReqRes/>}/>
        <Route path='/dashboard/active-res-details' element={<PageActiveRes/>}/>
        <Route path='/dashboard/update-plan' element={<UpdatePlan/>}/>
        <Route path='/dashboard/change-email' element={<UpdateEmailPage/>} />
        <Route path='/dashboard/active-restaurant' element={<ActiveResList/>}/>
        <Route path='/dashboard/update-password' element={<UpdatePassword/>}/>
      </Route>
     
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/update-password' element={<UpdateForgotPassword/>}/>
      
     {/**/}
    </Routes>
    {/* </MasterContex.Provider> */}
    {/* </MyProvider> */}
   
  </div>
}



export default App;
