import React, { Component } from 'react';
import './css/ListContainer.css';
import Cell from './Cell.js';

export default class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.data,
            type: props.type
        };
    }

    addTodos() {
        this.state.list.push({ num: 7, message: 'new' })
        this.setState({ list: this.state.list })
    }

    getListContainer(props) {

        //No data
        if (props.list == null) {
            return (
                <div className='alert alert-warning' role='alert'>
                    Aucune donnée
                </div>
            )
        }

        //Dico
        else if (props.type === 'dico') {

            return (
                <div className='ListContainer' >
                    <ul className='Dico list-group'>
                        {
                            props.list.map((line) =>
                                <Cell title={line.num.toString()} key={line.num.toString()} message={line.message} />
                            )
                        }
                    </ul>
                </div>
            )
        }

          //Playlist 
          if (props.type === undefined) {
            return (
                <div className='ListContainer'>
                    <button onClick={() => { this.addTodos() }}>+</button>
                    <ul className='Playlist list-group'>
                        {
                            props.list.map((line) =>
                                <Cell title={line.num.toString()} key={line.num.toString()} message={line.message} />
                            )
                        }
                    </ul>
                </div>
            )
        }
    }


    render() {
        return (
            this.getListContainer(this.state)
        )
    }
}
