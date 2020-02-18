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
                            <span className="id">{ `#${props.character.id}` }</span>
                            { `${props.character.species} ${props.character.gender}` }
                            { (props.character.type) ? `, ${props.character.type}` : null }
                        </div>
                        <section className="origin">
                            <div className="title">Origin</div>
                            <div className="text green">{ props.character.origin.name }</div>
                        </section>
                        <section className="lastLocation">
                            <div className="title">Last location</div>
                            <div className="text">{ props.character.location.name }</div>
                        </section>
                        <section className="episodes">
                            <div className="title">Episodes</div>

                            <Fade top cascade spy={props.character} duration={600}>
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
                            </Fade>
                        </section>
                    </Fade>
                    <div className="giantName">{ props.character.name }</div>
                </>
            }
            </div>
        </section>
    );
}