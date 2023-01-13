import { useState } from 'react';
import './App.css'
import Videos from './components/Videos';
import Nav from './components/Nav';

export default function App() {
  const [listeVideosTrouvés, setListeVideosTrouvés] = useState();

  var videos = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the first video",
      channel: "channel1",
      vues: "1M",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the second video first time",
      channel: "channel2",
      vues: "2M",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the 3rd video",
      channel: "channel3",
      vues: "900k",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the 4th video",
      channel: "channel4",
      vues: "650k",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the 5th video",
      channel: "channel5",
      vues: "700k",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the 6th video",
      channel: "channel6",
      vues: "1.5M",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the 7th video",
      channel: "channel7",
      vues: "890k",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vwz1IIlwcJC3TYft8dzUH5GQxvlScg-LDQ&usqp=CAU",
      title: "This is the 8th video",
      channel: "channel8",
      vues: "980k",
    },
  ];

  function findVideo() {
    var userInput = document.getElementById('search').value

    var videosTrouvés = videos.filter(video => video.title.includes(userInput))


    setListeVideosTrouvés(videosTrouvés)
  }

  return (
    <div>
      <Nav findVideo={findVideo} />
      <Videos listeVideosTrouvés={listeVideosTrouvés} videos={videos} />
    </div>
  )
}

