import React, { Component } from 'react'
import API from './API'
import Loader from './Loader'
import classnames from 'classnames'
import BottomScrollListener from 'react-bottom-scroll-listener';

export default class Main extends Component
{
    page = 1;
    
    constructor(props)
    {
        super(props);
        
        this.state =
        {
            loading: false,
            characters: [],
            selectedCharacterId: null
        }
    }
    componentDidMount()
    {
        this.getCharacters()
    }
    
    render()
    {
        return (
            <section className="main">
                <div className="header">
                    <h1>Characters</h1>
                </div>
                
                {
                    this.state.loading && this.state.characters.length === 0 &&
                    <div className="spinnerContainer">
                        <Loader large isLoading />
                    </div>
                }
                
                <BottomScrollListener onBottom={this.onBottom.bind(this)} offset={800}>
                { scrollRef => (
                    <div className="characters" ref={scrollRef}>
                    {
                        this.state.characters.map((character, i) => this.renderCharacterRow(character, i))
                    }
                    </div>
                )}
                </BottomScrollListener>
            </section>
        );
    }
    renderCharacterRow(character, i)
    {
        return (
            <div
                className={ classnames('character', { 'selected': character.id === this.state.selectedCharacterId })}
                key={i}
                onClick={() => this.onClickCharacter(character)}
            >
                <div className="left">
                    <div className="image" style={{ backgroundImage: `url(${character.image})` }}></div>
                    <div className="info">
                        <div className="name">{ character.name }</div>
                        <div className="subtitle">
                            <span className="green">
                                { `${character.origin.name}, ` }
                            </span>
                            { `${character.species} ${character.gender}` }
                        </div>
                    </div>
                </div>
                <div className={`tag ${character.status.toLowerCase()}`}>{ character.status }</div>
            </div>
        );
    }
    
    onClickCharacter(character)
    {
        this.setState({ selectedCharacterId: character.id });
        
        if (this.props.onCharacterSelected)
            this.props.onCharacterSelected(character);
    }
    onBottom()
    {
        this.page++;
        this.getCharacters();
    }
    
    async getCharacters()
    {
        this.setState({ loading: true });
        
        try
        {
            let res = await API.getCharacters(this.page);
            
            console.log(res);
            
            this.setState({ loading: false, characters: [...this.state.characters, ...res.data.results] });
            
            if (this.page === 1)
                this.onClickCharacter(res.data.results[0]);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}