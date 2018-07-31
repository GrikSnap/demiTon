import React, { Component } from 'react';
import './css/Playlist.css';
import ListContainer from '../ListConstainer/ListContainer';

export default class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.data,
            data : [{num : 1, message : "lol"},
                        {num : 5, message : "toto"},
                        {num : 4, message : "lourd"},
                        {num : 8, message : "daim"},
                        {num : 6 },
                    ]
        };
    }
    
    render() {
        return (

            <div className='Playlist container'>
                <h2>Playlist</h2>
                <ListContainer data={ this.state.data }/>
            </div>
        )
    }
}
