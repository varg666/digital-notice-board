import React, { Component } from 'react';
// import Option from '../option/Option';



class ModulesSideBar extends Component {
    constructor(props){
      super(props);
      this.state = {
        data:
        [
    {
        "type": "video",
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
        "type": "Image Gallery",
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
        "type": "Code Snippet",
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
        "type": "Event",
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
        }]

     }   
}


  render() {
    return (
      <div className="ModulesSideBar">
       {/* <Option />
        <Option />
        <Option />
        <Option />*/}

        <p>hallo</p>
      </div>
     
    );
  }
}

export default ModulesSideBar;
