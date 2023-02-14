export const gettingValue=(data)=>{
    
    return{
        type:"GETVALUE",
        payLoad:{
            name:data.name,
            weather:data.weather[0].main,
            temparature:Math.floor(Math.round(data.main.temp -273.15)),
            temparature_min:Math.floor(Math.round(data.main.temp_min - 273.15)),
            temparature_max:Math.floor(Math.round(data.main.temp_max - 273.15))
        }
    }
}