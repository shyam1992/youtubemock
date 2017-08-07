import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTsearch from 'youtube-api-search';
import Lodash from 'lodash';
import Particles from 'react-particles-js';

const Youtube_API_Key = 'AIzaSyDxWWjGsUd-EOSwoNUUzZkeis7QGxRSDQc'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo:null
    };
    this.SearhVideo("closer");
  }

  SearhVideo(term){
    YTsearch({key:Youtube_API_Key,term:term}, (videos) =>{
    this.setState(
      {
        videos,
        selectedVideo:videos[0]
      }
      );
   });
  }

  render() {
    const VideoSearch = Lodash.debounce((term) => {this.SearhVideo(term)},300);
    return (
      <div className="mainDiv">
      <Particles params={{
                particles: {
    "number": {
      "value": 99,
      "density": {
        "enable": true,
        "value_area": 552.4033491425909
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 70,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5782952832645452,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },interactivity: {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
                particle: {
                  speed : "100"
                }
              }}/>
       <SearchBar onSearchChanged={VideoSearch}/>
       <div className="row">
       <VideoDetail 
       video={this.state.selectedVideo}
       />
       <VideoList  
       onVideoSelected = {(selectedVideo) => this.setState({selectedVideo})}
       videos = {this.state.videos} 
       />
       </div>
      </div>
    );
  }

}

export default App;
