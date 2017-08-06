import React , { Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state={term:''}
    this.onInputChange=this.onInputChange.bind(this)
    this.onFormSubmit=this.onFormSubmit.bind(this)
  }

  onInputChange(event){
      this.setState({term:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term:''})
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          placeholder="Get a 5-day forecast in your favourite cities"
          className="form-control"
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

//to hook up action creator-fetchweather to our SearchBar-container
function mapDispatchToProps(dispatch){
  //action creator when called and returns an action
  //bindActionCreators with dispatch makes sure that actions flows via
  //middleware and reducers
  return bindActionCreators({fetchWeather},dispatch)
  //The action is linked to the reducer by the mapDispatchToProps  function
  // and the connect  wrapper from react-redux.
  //The functions that we supply in the first argument of
  // bindActionCreators  will let redux know that the
  //return value of the functions must be sent on to all the
  // reducers inside of the combineReducers  function in
  //reducers/index.js.
}

export default connect(null,mapDispatchToProps)(SearchBar)
