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
        data:
        [
    {
        "type": "VIDEO",
        "iconUrl": "https://png.icons8.com/ios/50/000000/play-button-circled-filled.png",
        "title": "The Rabbit and the turle",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "description": "",
        "content":
        {
            "src": "https://pixabay.com/en/background-image-colorful-art-967820/"
        }
    },
    {
        "type": "PHOTOS",
        "iconUrl": "https://png.icons8.com/ios-glyphs/50/000000/picture.png",
        "title": "Startup Trip",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content":
        {
            "src": ["https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/"]
        }
    },
    {
        "type": "CODE",
        "iconUrl": "https://png.icons8.com/ios/50/000000/code-file-filled.png",
        "title": "The Rabbit and the turle",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content":
        {
            "codeImage": "https://pixabay.com/en/background-image-colorful-art-967820/",
            "authorImage": "https://pixabay.com/en/background-image-colorful-art-967820/",
            "authorName": "Aemal Surname"
        }

    },
    {
        "type": "ANNOUNCEMENT",
        "iconUrl": "https://png.icons8.com/ios-glyphs/50/000000/megaphone.png",
        "title": "19th of March to 22nd march",
        "subtitle": "Devugees Project Week",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content": {
                "street": "Vulkanstr. 1",
                "postal": "11000",
                "city": "Berlin"
            }
        }],
           youtubeCode: ['HCnGKF_Ro2A']
      
        }   
}    

handleClick = (item)=>{

  console.log(item)
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
    console.log(this.state)

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
