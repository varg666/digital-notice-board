import React, { Component } from 'react';
import Login from './Login.js';
import logo from './logo.svg';
import './App.css';
import AddVideo from './components/AddVideo/AddVideo';
import ModulesSideBar from './components/modules-side-bar/ModulesSideBar';
import ForgotPassword from "./components/forgot/ForgotPassword.js"

class App extends Component {

      constructor(props){
      super(props);
      this.state = {
        data:
        [
    {
        "type": "video",
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
        "type": "image",
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
        "type": "code",
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
        "type": "event",
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
        }]

     }   
}
  

  render() {
    return (<div className="App">

      <div className="column1">

        <div id="video">
          <iframe className="video" height="100%" src="https://www.youtube.com/embed/ZiuSRQHLv88?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowFullScreen"></iframe>
        </div>

        <div className="video-description">
          <h3>Prince - Uptown (Official Music Video)</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

      </div>

      <div className="column2">

        <div className="slide">

          <div className="slide-icon">
            <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK+SURBVGhD7dlJ6E1hHMbxax4jUiwUC/OYBSt2yFBiI1MWioUisrRiZ2UlFrKQLSKylLnExhClSMTCArEw833Srdvtuee873uGS52nPvWv/zm/c95733ve4bSaNGnS94zD0L9//h+ZiO04hbv4iN8dvuEpzuIAFuKfyQCsxmX8QOeNh3iI/RiFvmUp7sHdYKx32IvBqC0jcQK/4G6qiPuYhcozBQ/gbqIsn7ABlWU2XsNdvGz6ve1E6ZmMV3AXrYq67laUFv0mqu5OvXzFEpSS43AXqcsLjEGhLEMVT6dYR5EcDXZljRNFfccMJGUNXNEs6tOXoAu7/xehqU9SNO1wBbPcgjIHV+COSfUF4xGVSUj5VG+gM6vwDO7YFLsQFc1iXaE83Q1RNIXXbPc93DkxLiIq6o+uUB7XkHYm4CR+wp0bQh/GQARH6wlXKE9WQ9pZhKtw54fQfC843YuiUCENaWcTXsLVybICQdH44QqEiGmIMgIH8RmunrMZQRkLVyBEbEPaWQ5Xzwl+cg2DKxAipSEac67D1XO2ITjaKHBF8sQ0RIPbMcSOV+sQnCdwRfKENETr8t3QOt3VyDMfwTkPVyRPXkP0W3gMd24IfXvDERyNxK5Qnl4NmYZzcOfEuI2oLIArlKe7IaNxBJoVu+NjHUJ0HsEVy9JuiKYRO/AG7rhU2gCJzj64YlneQhNO7U+5/xdxE0lRt0h9slRhLZKjbUxXtG7XoKlTcgahim4SQw+KeSicmdA2prtIHfagtGhakPLaoKgzKNSlXDTrrHOPS5sflb3p2oKyBrcspzEElWYxnsPdQFHa8tGTsvTu1Cvai9U2ZpkbcXrEzkVfMh3acdEn6W4uhCaCGuxq+xayokWSXsxcwAe4G27Tt3gHh1HLa7bUaMI4FSuxEXraaXm6HloUaSndpEmTJilptf4AYr5FLHyP0PMAAAAASUVORK5CYII="/></div>

          <div className="slide-text">
            <h3>Prince - Uptown (Official Music Video)</h3>
            <small>06/03/2018</small>
          </div>
        </div>
        <div className="slide">

          <div className="slide">
<img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHCSURBVGhD7dm/K0VhHMfxW6QYSJFJymAyGBjIYkNkkT/BHyBGmUxMBmUhfwCTyYAySFmVSSzKYlEkP99fder09H2ec57r3HMe9bzrNdA5+Mg9596rFovFYrFYwXVhA2e4Csgl9jGKzDpxj++AfWAGztagnRyaazg7hHZiaD7RCmtH0E4MUQesVT3kBasYwzRcfyHBDvnCBMx2oB0f7JBjaHVDOz7YIduw9QTz+GCHnEOrF9rxQT/YF5CuCQfQji1kyCvkacNt6nNFkPuDPLjnsYgLaMeJPw2RK4vc/dM3owG4vmGj1D1ERshvSasNp9DOa5S6hrhGJJU9xntInhFJecY8YwWD6MEUTqAd6+I9ZBk+ucbI/WAYZnJ12oN2jo33kHH4ZhuzBFsyZhfmOTalDJG0MXLZnoQtnzGlDZFsY0ZgK++YUodI2phNuMozpvQhkoxJrkxyFcx8zU1ZYyoZIjVjFkO/H+XLNaayIfUmYx5g/lz/boikvUUVh1RZHJJ2A/N92LK9wfy5vIeEqh3WtqCdFJpHOJOn2O/QTg7JOjKbwx20L1A1eVEm/7tpQe7k1Vt/QPogd/lYLBaLxQquVvsBEIHV7TblKNcAAAAASUVORK5CYII="/></div>

          <div className="slide-text">
            <h3>Prince - Uptown (Official Music Video)</h3>
            <small>06/03/2018</small>
          </div>
        </div>
        <div className="slide">

          <div className="slide-icon">
<img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVGhD7dg9S1xBGMXxlRQihAiCpRJCihSCrZ/AMiCYxkZEYpc+HyAQbbQUQbEQweQTJKVYWChpTZcEIYKFImIhvsT/gVwYhufurpv7zN0Nc+AHOjPCnHHHe7GR00MZxB9HO3gC93gXkSRlPIv8wunfr93LeBbZwziKMp/gVsa7iJKkTIoiinuZVEUU1zIpiyhuZVIXUVzK1FFEqbxMXUWUSsvUWUSprIxnkQO8aMMUrqCfWUJH8SzSiW10lFzESS6SizjpiiKXOMT3YOyxuqLIJpS3sObb0RVFZqFswZpvR5IiR1jFXTAWeg7lGMXYbywG37eSpMgklA+I535AeYliTIX1CqJ8Rri+jHsRbUQZxhni+bL7sQFlFPpjEM5ZXItoA9qIsg5rTdn9uMcElPcI5yyuRbQBRRvSxqw11v0ofINez/uhexbPh9yK/IQ2oOzDWmPdj9gclNew5gtuRW4wBuUjrDWtnh/XeAVlGdaagutHaxd9eAr9GzSeb/X80AEoOhAdjLWm4FpEZqBMI55rdj9UXAegg9CBxPMx9yIneAblK4rxVvfjDRQdhDUfcy8iKxjBl2Cs2f24xTsMQQcRz1uSFNHnO36otfN+dW6MlUlSxNLsfnSiliIX0B1YCMb+VW2/karlIrmIk1wkF3GSi/w3RQaw1kXmkdMjaTQeADYqhKPFupyfAAAAAElFTkSuQmCC"/></div>

          <div className="slide-text">
            <h3>Prince - Uptown (Official Music Video)</h3>
            <small>06/03/2018</small>
          </div>
        </div>
        <div className="slide">

          <div className="slide-icon">
<img className="icon"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJbSURBVGhD7dk7aBRBHMfx8/0ivhCR4AtBIigigmgjSWeKNFaKooIWIhbaxMoigiCCD/CFaKNVJF2CRRpNEW0EwUo7wUJBUBBEUfH1/ekODOc/mztvZm9X5wcfkizHzPzY3N7uXC0lJeWfy9zsZ2UzA/fwA5d1oKrZApWQb5iNyqUbw3BFZAEqkUU4hqfwC1SmyDbcwkdYBZxSFpmPI3gCa9GWUhXZjBt4D2uxedpeZB4O4RGsBTaqbUU24ArewVpYswotomv9PjyAtZhWFFKkC+fxFtYiQohWZCZ24T6+w5o8pOBF1uAMXsOaMJYgRaZjJ0ah+x5rotgmLbIRa3//+kdW4BRewhq8SLlFDkMv+oodOpBFn7wj0PH6Adslt4h/h3lJB7KshD9IGeQWuQv3wms6kCUViSgV8Qcpg1TEH6QMcotchHvhUR3IsgyTPXoWLbeINr8G0I9pOuBlMY7jGayBi5ZbpJFMQQ8G8QnWJEVouYifpTiBF7AmiyloERf/IlGU4EU64d/K69nkJGKfpeBF9sAN/hkLoehi0QedrRjPLMGLHIQbXM/oU1GfVTiNV/AX04rgRbbCn+AqtG9r5Tb817YieBFdjh/Dn+QDbmITXPR06V+ur+Ms/vZZP3gRZT3ewJpwHBfw3Dv2BcuhzMJujKGZ3ZcoRZTVGEIjj8PnYGUddJvUyH5YtCIuKqR/mYnO0B1oDywvc7AfD2GNIdGLuGgxB6CzpO/+9EbvRbPRro4uIPV7xoUVCZ3t8It0oJLRB6177+griUpH27N7seTXXykpKf9barWf/pGYy3erAssAAAAASUVORK5CYII=" /></div>

          <div className="slide-text">
            <h3>Announcement</h3>
            <small>06/03/2018</small>
          </div>
        </div>


      </div>
    </div>);
  }
}

export default App;
