// Importing The Css From The Style Folder--------->
import "../style/weather.css";



// Weather Function -------------------------------->
function Weather(props){

    // Function For Checking The Weather So We can Show Different Icons according to That
    function checkingWeather(weather){
        switch (weather) {
            case "Clouds":
                
            return <i className="fa-solid fa-cloud"></i>;
                
                case "Sunny":
                
                return <i className="fa-solid fa-sun"></i>;
                case "Haze":
                
                return <i className="fa-solid fa-sun-haze"></i>
                case "Rainy":
<i class="fa-solid fa-raindrops"></i>
                case "Storm":

                <i className="fa-solid fa-poo-storm"></i>
                break;
                case "Clear":
                    return <i className="fa-solid fa-sun"></i>;
        
            default:
                return <p></p>
                break;
        }
    }

    return(
        <>
        <div className="weatherbox">
        <i className="fa-solid fa-location-dot"></i>
          <h1>{props.data.name}</h1>
        </div>
        <div className="weatherbox">
        <div className="inside-box">
            {checkingWeather(props.data.weather)}
        <h2>{props.data.weather}</h2>
          </div>
          
          <div className="inside-box">
          <i className="fa-solid fa-temperature-three-quarters"></i>
          <h2>{props.data.temparature} °C</h2>
          </div>
          
        </div>
        <div className="weatherbox">
        <div className="inside-box">
        <i className="fa-solid fa-temperature-full"></i><p>Maximum</p>
          <h3>{props.data.temparature_max} °C</h3>
          </div>
          <div className="inside-box">
          <i className="fa-solid fa-temperature-quarter"></i><p>Minimum</p>
          <h3>{props.data.temparature_min} °C</h3>
          </div>
        </div>
        </>
    )
};

// Exporting The Function --------------------------->
export default Weather