import React, { Component } from 'react';
import logo from '../demiton.png';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (         
                    <header className="App-header" >
                        <div className='App-banner'>
                            <Link to='/' ><img src={logo} alt='logo' /></Link>
                        </div>
                        <div className='App-menu container'>
                            <Link to='/playlist' ><button className='App-button btn btn-primary btn-lg' >Playlist</button></Link>
                            <Link to='/dico' ><button className='App-button btn btn-primary btn-lg'>Dico</button></Link>
                        </div>
                    </header>

        )
    }
}
