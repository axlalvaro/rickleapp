import React, { Component } from 'react'
import classnames from 'classnames'
import './loader-dots.scss'
import PropTypes from 'prop-types'

export default class Loader extends Component
{
    constructor(props)
    {
        super(props);

        const { isLoading } = props;

        this.state =
        {
            isLoading: isLoading
        }
    }
    
    static getDerivedStateFromProps(props, state)
    {
        if (props.isLoading != null && props.isLoading !== state.isLoading)
        {
            return { isLoading: props.isLoading }
        }
        
        return null;
    }

    render()
    {
        const classOptions =
        {
            hidden: !this.state.isLoading,
            fullWidth: this.props.fullWidth,
            large: this.props.large
        }

        return(
            <div className={ classnames(['spinnerloaderContainer', classOptions, this.props.className]) }>
                <div className="spinnerloader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

Loader.propTypes =
{
    isLoading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string
}

Loader.defaultProps =
{
    isLoading: false,
    fullWidth: false,
    large: false
}
