import React from 'react';
import ReactDOM from 'react-dom';
import hero from './hero.js'

/*
To set margin for grid, you set the with of each individual image and
set the div of the outer element to the amount of elements time 4

example if each image is 75 px and I want four elements on each row
multiply it times 4 to get 300 px as the width

https://www.google.com/search?source=hp&ei=byhaWqboMcPE_QaO25eACw&q=how+to+make+a+photo+grid+in+html&oq=how+to+make+a+grid+in+html&gs_l=psy-ab.3.2.0j0i22i30k1l6j0i22i10i30k1j0i22i30k1l2.54.10003.0.12276.39.30.8.0.0.0.149.1982.28j2.30.0....0...1.1.64.psy-ab..1.38.2016.0..0i131k1.0.RcSVQc6I0TE#kpvalbx=1
css3please.com
*/

/*
youtube embedded instructions
https://www.labnol.org/internet/youtube-video-background/27933/
*/


const background = {
  'backgroundImage':'url(https://i.ytimg.com/vi/BWxMuQre3R8/maxresdefault.jpg',
  'backgroundSize':'no-repeat fixed center',
  'width':'100%',
  'height':'100%'
}

const imageList={
  'fontSize': '0',
  'margin': '0 auto',
  'width': '487px',
  'paddingTop':"50px"
}

let size = '50px'

const imageSize ={
   'width': size,
   'heigth':size
}

const imageAnchor = {
  'margin': '2px',
  'border': '4px solid #FFD700',
  'display': 'inline-block'
}


const styles = {
 'listStyle':'none'
};
 console.log(hero.length);

const videoStyle = {
  "position":"fixed",
  "z-index":"-99",
  "width":"100%",
  "height":"100%"
}


const youtube = {
  "video": "https://youtube.com/embed/JyhvTaGadTY?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=JyhvTaGadTY"
}

const audio = {
  "src": "https://www.youtube.com/watch?v=KY-CeeQLCE4"
}

const audioStyle = {
  "width": "100%",
  "height": "20px"
}
class App extends React.Component {
/*

Static image code
  componentWillMount(){
   document.body.style.backgroundImage = background.backgroundImage;

}
componentWillUnmount(){
    document.body.style.backgroundColor = null;
}

Youtube videos
rotating earth
https://www.youtube.com/watch?v=QI9ta7qkazU
galaxy
https://www.youtube.com/watch?v=JyhvTaGadTY


*/

  render(){
    
    const nameMapper = hero.map((name, i) =>
          <a href="#" style={imageAnchor}><img key={i} src={name} style={imageSize}/></a>
        );
    
    
    
    return(
  <div> 
        <div style={videoStyle}>
          <iframe frameBorder="0" height="100%" width="100%"
            src={youtube.video}>
          </iframe>
        </div>
    <div id="imageList" style={imageList}>
    {nameMapper}
    </div>
  
   
  </div>);
    
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
