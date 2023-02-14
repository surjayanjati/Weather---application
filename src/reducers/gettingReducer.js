import { Action } from "@remix-run/router";




// Creating The Array To Store The Data---------------------->
let storeArray=[];


// Function For Reducer--------------------------------------->
export const gettingReducer=(state=storeArray,Action)=>{
    switch (Action.type) {
        case "GETVALUE":
            
            // Object Destructuring ------------------------->
            const {name,weather,temparature,temparature_min,temparature_max}=Action.payLoad;
            return [
                {
                    name:name,
                    weather:weather,
                    temparature:temparature,
                    temparature_min:temparature_min,
                    temparature_max:temparature_max
                }
            ]
            break;
    
        default:
            return state;
            break;
    }
}