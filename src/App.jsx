import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random()* 360),
    maxHue: 360,
    saturation: Math.floor(Math.random() * 100),
    maxSaturation: 100,
    lightness: Math.floor(Math.random() * 100),
    maxLightness: 100

  }

  generateRandomNumber = () => {
    var random360 = Math.floor(Math.random()* 360)
    var random100 = Math.floor(Math.random() * 100)

    this.setState({
      hue: random360,
      saturation: random100,
      lightness: random100
    })

  }
  
  updateHue = event => {
    console.log(event)
    this.setState({
      hue: event.target.value
    })
  }
  updateMaxHue = event => {
    console.log(event)
    this.setState({
      maxHue: event.target.value
    })
  }

  updateSaturation = event => {
    console.log(event)
    this.setState({
      saturation: event.target.value
    })
  }

  updateMaxSaturation = event => {
    console.log(event)
    this.setState({
      maxSaturation: event.target.value
    })
  }

  updateLightness = event => {
    console.log(event)
    this.setState({
      lightness: event.target.value
    })
  }
  
  updateMaxLightness = event => {
    console.log(event)
    this.setState({
      maxLightness: event.target.value
    })
  }

  

  render() {
    const newBackgroundColor = 'hsl(60,0%,0%)'
    const newStyle = { backgroundColor: newBackgroundColor}
    return (
      <body>
        <header>
          <h1>Color Picker</h1>
        </header>
        <div className="colorpicker">
          <div className="frame">
            <div className="color-circle" style={newStyle}>
            </div>
            <div className="sliders">
              <input className="hueslider" type="range" max={this.state.maxHue}
              onInput={this.updateHue} value={this.state.hue} style={newStyle}
              ></input>
              <input className="huevalue" type="text" onInput={this.updateHue}></input>
              <input className="rgbslider" type="range" max={this.state.maxSaturation}
              onInput={this.updateSaturation} value={this.state.saturation}></input>
              <input className="rgbvalue" type="text" onInput={this.updateSaturation} ></input>
              <input className="hsl" type="range" max={this.state.maxLightness}
              onInput={this.updateLightness} value={this.state.lightness}></input>
              <input className="hslvalue" type="text" onInput={this.updateLightness} ></input>
            </div>
          </div>
          <div className="color-inputs">
            <input className="hsl" type="text"></input>
          </div>
          
          <button className="random-button" onClick={this.generateRandomNumber}>Random Color</button>
        </div>
        
      </body>
    )
  }
}
