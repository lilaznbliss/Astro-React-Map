import React, { Component } from 'react';
import './ZoomControl.css';

class ZoomControl extends Component {
  flatMapControl() {
    let flatMapDiv;
    if (this.props.mapType == 'roadmap') {
      flatMapDiv = <div id="control-flatmap" className="control-flatmap-select" title="flat map" onClick={this.props.flatMap} />
    } else {
      flatMapDiv = <div id="control-flatmap" className="control-flatmap" title="flat map" onClick={this.props.flatMap} />
    }
    return flatMapDiv;
  }

  satMapControl() {
    let satMapDiv;
    if (this.props.mapType == 'hybrid') {
      satMapDiv = <div id="control-satmap" className="control-satmap-select" title="sat map" onClick={this.props.satMap} />
    } else {
      satMapDiv = <div id="control-satmap" className="control-satmap" title="sat map" onClick={this.props.satMap} />
    }
    return satMapDiv;
  }

  render() {
    return(

      <div id="control-div" className="control-div">
        <div id="control-zoomin" className="control-zoomin" title="zoom in"
        onClick={this.props.zoomIn} >
        </div>
        <div id="control-zoomout" className="control-zoomout" title="zoom out"
        onClick={this.props.zoomOut} >
        </div>
        <div className="divider" title="divider">
        </div>
        {this.flatMapControl()}
        {this.satMapControl()}
      </div>

    )
  }
}

export default ZoomControl;
