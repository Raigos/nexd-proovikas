import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

import './../style/frame.scss';

class frame extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullScreen: true,
      screenVar: "desktop",
      sizeWidth: "",
      sizeHeight: "",
      value: ""
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.widthChange = this.widthChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  widthChange(event) {
    this.setState({ sizeWidth: event.target.value });
  }

  heightChange(event) {
    this.setState({ sizeHeight: event.target.value });
  }


  handleSubmit(event) {
    document.getElementById('frame').classList.add("hidden");
    document.getElementById('values').classList.remove("hidden");
    document.getElementById('values').classList.add("values");
    event.preventDefault();
    if (this.state.fullScreen === true) {
      document.getElementById('value__screens').innerHTML = 'fullscreen';
    } else {
      document.getElementById('value__screens').innerHTML = 'mobile';
      document.getElementById('X').classList.remove("hidden");
    }
  }


  deviceClick = (event) => {
    this.setState({ screenVar: event.target.value });
  }

  radioClick = (event) => {
    this.setState(state => ({
      fullScreen: !state.fullScreen
    }));
    if (this.state.fullScreen === false) {
      document.getElementById("widthInput").classList.add('form-disabled');
      document.getElementById("heightInput").classList.add('form-disabled');
      document.getElementById("widthInput").classList.remove('form-enabled');
      document.getElementById("heightInput").classList.remove('form-enabled');
      document.getElementById("heightInput").readOnly = true;
      document.getElementById("widthInput").readOnly = true;
    } else if (this.state.fullScreen === true) {
      document.getElementById("widthInput").classList.add('form-enabled');
      document.getElementById("heightInput").classList.add('form-enabled');
      document.getElementById("widthInput").classList.remove('form-disabled');
      document.getElementById("heightInput").classList.remove('form-disabled');
      document.getElementById("heightInput").readOnly = false;
      document.getElementById("widthInput").readOnly = false;
    }
  }


  render() {
    return (

      <>
        <div className="frame" id="frame">

          <h2>New Creative</h2>
          <h3>General info</h3>

          <form onSubmit={this.handleSubmit}>

            <label className="form__name" htmlFor="name">
              Creative Name:
          </label>

            <input type="text" placeholder="Write name here" className="form__nameInput  form__input" id="name"
              value={this.state.value} onChange={this.handleChange} />

            <label className="form__device">
              Device:
          </label>


            <div className="deviceInput">
              <button type="button" className={this.state.screenVar === "mobile" ? 'btn btn-active' : 'btn btn-disabled'} value="mobile" onClick={this.deviceClick} >
                Mobile
            </button>

              <button type="button" className={this.state.screenVar === "desktop" ? 'btn btn-active' : 'btn btn-disabled'} value="desktop" onClick={this.deviceClick}>
                Desktop
            </button>
            </div>


            <label className="form__size">
              Placement Size:
          </label>
            <div className="sizeInput">

              <span>
                <input type="radio" name="screen" value="screen" onChange={this.radioClick.bind(this)} checked={this.state.fullScreen}>
                </input>Fullscreen
              </span>

              <span>
                <input type="radio" name="screen" value="size" onChange={this.radioClick.bind(this)} ></input>Size:
              </span>

              <input type="tel" placeholder="Width        W" className="form__input  form-disabled" readOnly
                size="10" id="widthInput" value={this.state.sizeWidth} onChange={this.widthChange}></input>

              <input type="tel" placeholder="Heigth        H" className="form__input  form-disabled" readOnly size="10" id="heightInput" value={this.state.sizeHeight} onChange={this.heightChange}></input>
            </div>


            <hr />


            <div className="btnContainer  btn__noform ">
              <NavLink to="/">
                Cancel
              </NavLink>

              <input className="btn  btn-active  btn__submit" as="input" type="submit" value="Create" onClick={this.handleSubmit}>
              </input>
            </div>


          </form>
        </div>


        <div className="hidden" id="values">
          {this.state.value} | {this.state.screenVar} |  <span id="value__screens" className="value__screens"> </span>
          {this.state.sizeWidth} <span id="X" className="hidden  x"> X </span>
          {this.state.sizeHeight}


        </div>
      </>
    );
  }
}


export default frame;