// Importing The Component------------------------>
import Weather from "./Weather";
// Importing The Css------------------------------>
import "../style/home.css"
// Importing The HOOKS --------------------------->
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
// Importing The Action From Action Folder
import { gettingValue } from "../actions/gettingAction";
// Function For Home ----------------------------->
function Home(){
    // UseState Hook For Storing The Form Data---->
    const[initialValue,setValue]=useState("Kolkata")
    const dispatch=useDispatch();
    // Storing The Value in a variable From UseSelector->
    const dataArray=useSelector((event)=>event.gettingReducer);
    
    // Function For Catching The Input Event ------>
    function inputEvent(e){
     setValue(e.target.value);
    }
    // Form Function For Submitting The Form------->
    function formEvent(e){
      e.preventDefault();
    }
    // Function For Button Click ------------------>
   async function onSubmit(){
      let cityName=initialValue;

      // Axios Method For Getting The Data From The Api-->
  
      const weatherData=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb58c7c82292c7781fc3394e0eb650ee`);
      //Swtich Statement For Handeling The The Response Status
      switch (weatherData.status) {
        case 200:
          
            dispatch(gettingValue(weatherData.data));
            break;
      
        default:
            alert("Unable To Fetch Data")
            break;
      }
    }
   
    // Use Effect Function For Calling The On Submit Function When every time the Page Reloads
    useEffect(()=>{
     onSubmit();
    },[])
    // Function For Calling The Weather Component--------------------------------------->
    function callingComponent(){
        if(dataArray.length!==0){
          if(dataArray[0].name!==undefined){
            return <Weather data={dataArray[0]}/>
          }else{
            return <h1>No Data to Show</h1>
          }
           
        }else{
            return <h1>No Data to Show</h1>
        }
    }
    return(
    
        <>
        <div className="main-container">
          <div id="box-1">
            <div className="form-box">
              
                <input type="text" placeholder="Enter City" name="city" onChange={inputEvent} />
                <button onClick={onSubmit} >Submit</button>


             
            </div>
          </div>

          <div id="box-2">
            {callingComponent()}
          </div>
        </div>
        </>

    )
};


// Exporting The Function ------------------------->
export default Home;