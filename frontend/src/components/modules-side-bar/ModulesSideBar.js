import React, { Component } from 'react';
// import Option from '../option/Option';
import getIcons from '../../constants/icons.js';

class ModulesSideBar extends Component {

  render(props) {
    let icon;
    //TODO the types are here defined, but they should come from slideTypes.js
    //like import { VIDEO, PHOTOS, CODE, ANNOUNCEMENT } from './slideTypes.js';

    if(this.props.data.type.toLowerCase() === 'video'){
      icon =( <i className="fa fa-youtube fa-4x"></i>)
    } else if (this.props.data.type.toLowerCase() === 'photos'){
      icon =( <i className="fa fa-camera-retro fa-4x"></i>)
    } else if (this.props.data.type.toLowerCase() === 'code'){
      icon =( <i className="fa fa-code fa-4x"></i>)
    } else if (this.props.data.type.toLowerCase() === 'announcement'){
      icon =( <i className="fa fa-calendar fa-4x"></i>)
    } else if (this.props.data.type.toLowerCase() === 'repo'){
      icon =( <i className="fa fa-github fa-4x"></i>)
    }
    // the active indicator for the current sidebar module slide
    var classes = (this.props.current && this.props.current._id === this.props.data._id ) ? " slide-selected" : ""
    return (
      <div className={ `type_${this.props.data.type.toLowerCase()} card p-3 mb-3 ${classes}`} onClick={(e)=>this.props.handleToggleClick(this)}>
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="mr-md-3">
            {icon}
          </div>
          <div className="text ">
            <h4 className="">{this.props.data.title}</h4>
            {
             }
             </div>
        </div>
      </div>

    );
  }
}

export default ModulesSideBar;
