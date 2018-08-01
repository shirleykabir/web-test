import React from 'react';

class Home extends React.Component {

    // componentDidMount() {
    //   if (window.location.search) {
    //     let company = decodeURI(window.location.search.split("=")[1])
    //     setTimeout(function(){ alert("Hi " + company + "!\n\nWelcome to Ben's website!\n\nI'm so glad you're here. Feel free to take a look at his projects and his recent blog posts. I look forward to hearing what you think, but since I'm just a piece of Javascript code I don't really have lots of opinions. I know however that Ben would love to hear from you.\n\nEnjoy your visit!"); }, 1500);
    //   }
    //   this.props.loadTechBlog();
    //   this.props.loadPortfolio();
    // }
  
    render() {
  
      return (
      <div>
          <div class="name">Cornell University<br><b>Unmanned Air Systems</b></div>
        <div class="description">An student-run team that designs, builds and tests a custom search and rescue unmanned aerial system.</div>
  
      </div>
      <div id="video">
  <video width="400" id="promo-video">
    <source src="static/promo.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
  <button onclick="playVideo()"><img src="static/play-button.svg" class="play-button"></button>
  </div>
  <div id="statistics">

  </div>
      );
    }
  }