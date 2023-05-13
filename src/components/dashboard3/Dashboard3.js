import React, { Component } from 'react'
import Chart from '../chart/Chart'
import './Dashboard3.css'
import './Dashboard3.css'


const dropdownData = [
  "fabrication",
  "sub-assembly",
  "assembly",
  "Component Integration",
  "Electrical Testing",
  "Compliance",
  "Certification standards",
  "pivot dome",
  "broke assembly",
  "module",
  "powder coating process",
  "testing and inspection",
  "Mechanical assembly",
  "Spot weld assembly",
  "Transmission assembly",
  "Tub assemeblies",
  "weld assembly",
  "Electrical assembly"
]

class Dashboard3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue : '' 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({
      selectedValue : event.target.value
    })
  }

  handleSubmit = () => {
    const getData = this.state.selectedValue;
    console.log(getData);
  }

  render () {
    return (
      <div className="layout">
        <div className="navigate"></div>
        <div>
          <select onChange={this.handleChange}>
            <option value="__">Select any process</option>
            {dropdownData.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <button className="button" onClick={this.handleSubmit}>submit</button>  
        </div>
        <div className="navigate"></div>
        <div className='layout'>
            <div className='graph'>
                <Chart />
            </div>
        </div>
      </div> 
    );
  }
}


export default Dashboard3