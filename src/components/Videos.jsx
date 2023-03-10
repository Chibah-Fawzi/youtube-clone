import React from 'react'
import '../App.css'

export default function Videos(props) {

    return (
        <div>
            <h1>Videos</h1>
            <div className='videosContainer'>
                {props.listeVideosTrouv√©s !== undefined ? props.listeVideosTrouv√©s.map((video) => {
                    return (
                        <div>
                            <img src={video.img} width='200px' />
                            <h2>{video.title}</h2>
                            <span>{video.channel}</span>
                            <span>{video.vues}</span>
                        </div>
                    )
                }) : props.videos.map((video) => {
                    return (
                        <div>
                            <img src={video.img} width='200px' />
                            <h2>{video.title}</h2>
                            <span>{video.channel}</span>
                            <span>{video.vues}</span>
                        </div>
                    )
                })
                }


            </div>
        </div>
    )
}
