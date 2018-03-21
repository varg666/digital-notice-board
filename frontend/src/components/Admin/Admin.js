import React, { Component } from 'react';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import Search from "./Search";
import SlideDetail from "./SlideDetail"



const style = {
  display: 'inline-block',
  padding: '3px',
  textAlign: 'center',
  margin: '3px',
  border: '1px solid black'
    };

class Admin extends Component {
  constructor(props){
      super(props);
      this.state = {
        current:
      {
        "type": 'bbb',
        "iconUrl": '',
        "title": '',
        "expiryDate": '',
        "displayDate": '',
        "description": '',
        "content":
        {
            "src": ''
        }
    
    },
    data: [],
           youtubeCode: ['HCnGKF_Ro2A']
      
        }   
}    

componentDidMount() {
  fetch(`http://localhost:4000`)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({data: data})
      })
  }
handleClick = (item)=>{

  //cnsole.log(item)
    this.setState({ current:
      {
        "type": item.type,
        "iconUrl": item.iconUrl,
        "title": item.title,
        "expiryDate": item.expiryDate,
        "displayDate": item.displayDate,
        "description": item.description,
        "content":
        {
            "src": item.content.src
        }
    }
})

}
componentDidUpdate() {
    //console.log(this.state)

}

  render() {
   
   
    return (
        <div>
          <div style={style}>
              {this.state.data.map((item,value) => <ModulesSideBar  onclick={()=>this.handleClick(item)} key={value} data={item} /> )}
              <Search />
          </div>

          <div>
             <SlideDetail type={this.state.current.type}  description={this.state.current.description} displayDate={this.state.current.displayDate} 
             expiryDate={this.state.current.expiryDate} youtubeCode={this.state.current.youtubeCode}  />
          </div>

        </div>
      )
      
}
}

export default Admin;
