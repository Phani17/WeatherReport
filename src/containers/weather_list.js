import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{

  renderWeather(cityData){
    const name=cityData.city.name
    const temps = cityData.list.map(weather=>weather.main.temp)
    const pressures = cityData.list.map(weather=>weather.main.pressure)
    const humids = cityData.list.map(weather=>weather.main.humidity)
    //const lon= cityData.city.coord.lon
    //const lat= cityData.city.coord.lat
    const {lon,lat}= cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} units="K" color="red"/></td>
        <td><Chart data={pressures} units="hPA" color="green"/></td>
        <td><Chart data={humids} units="%" color="orange"/></td>
      </tr>
    )
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// function mapStateToProps(state){
//   return {weather:state.weather}
// }
// this is same as below

function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)