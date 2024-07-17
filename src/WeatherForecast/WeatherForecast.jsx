import './WeatherForecast.css';


const WeatherForecastList = ({day, img, imgAlt, conditions, time}) => {
    return (
        <div className="weather">
            <h2>{day}</h2>
            <img src={img} alt= {imgAlt}/>
            <p><span>conditions:</span> {conditions}</p>
            <p><span>Time:</span> {time}</p> 
        </div>
    );
};

export default WeatherForecastList;