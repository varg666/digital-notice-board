import React, { Component } from 'react';
// import Option from '../option/Option';
import getIcons from '../../constants/icons.js';

class ModulesSideBar extends Component {
//      constructor(props){
//       super(props);
//       this.state = {
//          moduleData: {
//             "id": '',
//             "type": '',
//             "title": '',
//             "description": '',
//             "expiryDate": '',
//             "displayDate": '',
//             "content": []

//        } 

//    this.handleToggleClick= this.handleToggleClick.bind(this);

// }
//   handleToggleClick(e){
//     console.log(e)
//   }
  render(props) {
    let icon;
    if(this.props.data.type === 'video'){
      icon =(<p>video picture</p>)
    } else if (this.props.data.type === 'image'){
      icon =(<p>image picture</p>)
    }
   
    return (
      <div className="ModulesSideBar slide-selected" onClick={this.props.onclick}>
        <h4 onClick={this.props.onclick}>{this.props.data.title}</h4>
        <p onClick={this.props.onclick}>{this.props.data.description}</p>
        <img onClick={this.props.onclick} src={getIcons(this.props.data.type)} />
        <h4  className='slide-text' onClick={this.props.onclick}>{this.props.data.title}</h4>
        </div>
        <p className='slide-desc' onClick={this.props.onclick}>{this.props.data.description}</p>
        <div className="date-container slide-text small">
        <p className='slide-text small'>start at: {this.props.data.displayDate} </p>
         <p className='slide-text small'>start at: {this.props.data.expiryDate} </p>
        </div>
      </div>
     
    );
  }
}

export default ModulesSideBar;
