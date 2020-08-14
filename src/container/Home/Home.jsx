import React, { Component } from "react";
import YouTubeComp from "../../components/YouTubeComp/YouTubeComp";

export class Home extends Component {
  render() {
    return (
      <div>
        <YouTubeComp
          time="7.21"
          title="Video Dokumentasi 1"
          desc="1000x ditonton, 12 hari yang lalu"
        />
        <YouTubeComp
          time="4.54"
          title="Video Dokumentasi 2"
          desc="200x ditonton, 2 hari yang lalu"
        />
        <YouTubeComp
          time="8.20"
          title="Video Dokumentasi 3"
          desc="2000x ditonton, 13 hari yang lalu"
        />
        <YouTubeComp
          time="5.12"
          title="Video Dokumentasi 4"
          desc="50x ditonton, 1 jam yang lalu"
        />
        <YouTubeComp />
      </div>
    );
  }
}

export default Home;
