import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Detail(props)
{
    return (
        <section className="detail">
            <div className="card">
            {
                props.character &&
                <>
                    <Fade top spy={props.character} duration={200}>
                        <div className="image" style={{ backgroundImage: `url(${props.character.image})` }}></div>
                        <h1>{ props.character.name }</h1>
                        <div className="description">
                            <span className="green">
                                { `${props.character.origin.name}, ` }
                            </span>
                            { `${props.character.species} ${props.character.gender}` }
                        </div>
                        <section className="lastLocation">
                            <div className="title">Last location</div>
                            <div className="lastLocationText">{ props.character.location.name }</div>
                        </section>
                        <section className="episodes">
                            <div className="title">Episodes</div>

                            <div className="episodesContainer">
                            {
                                props.character.episode.map((episode, i) =>
                                {
                                    let episodeSplit = episode.split('/');
                                    let episodeNum = episodeSplit[episodeSplit.length-1]
                                    
                                    return (
                                        <div className="episode" key={i}>{ episodeNum }</div>
                                    )
                                })
                            }
                            </div>
                        </section>
                    </Fade>
                    <div className="giantName">{ props.character.name }</div>
                </>
            }
            </div>
        </section>
    );
}