import React, { Component } from 'react';
import './ZoomControl.css';

class ZoomControl extends Component {

  render() {
    return(

      <div id="control-div" className="control-div">
        <div id="control-zoomin" className="control-zoomin" title="zoom in"
        onClick={this.props.zoomIn} >
        </div>
        <div id="control-zoomout" className="control-zoomout" title="zoom out"
        onClick={this.props.zoomOut} >
        </div>
        <div id="control-flatmap" className="control-flatmap" title="flat map"
        onClick={this.props.flatMap}>
        </div>
        <div id="control-satmap" className="control-satmap" title="satellite map"
        onClick={this.props.satMap}>
        </div>
      </div>

    )
  }
}

export default ZoomControl;
