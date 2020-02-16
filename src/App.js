import React, { Component } from 'react'
import './css/app.scss'
import Main from './Main'
import Detail from './Detail'

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state =
        {
            selectedCharacter: null
        }
    }
    
    render()
    {
        return (
            <div className="App">
            
                <section className="left">
                    <div className="top">
                        <div className="rick"></div>
                        <div className="title">RICKLEAPP</div>
                    </div>
                    <div className="morty"></div>
                </section>
                
                <Main onCharacterSelected={this.onCharacterSelected.bind(this)} />
                <Detail character={this.state.selectedCharacter} />
                
            </div>
        );
    }
    
    onCharacterSelected(character)
    {
        this.setState({ selectedCharacter: character });
    }
}
