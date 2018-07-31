import React, { Component } from 'react';
import ListContainer from './ListConstainer/ListContainer';
var Test = require("../server/Test");


const dataList = Test.getAll();

export default class Dico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dataList
        };
    }

    handleChange = (event) => {
        let newData = this.state.data.sort((a, b) => {
            if(a[1].toLowerCase().includes(event.target.value))
            {
                    return -1;
            }
            else
            {
                if(b[1].toLowerCase().includes(event.target.value)) return 1;
                if(!b[1].toLowerCase().includes(event.target.value)) return 0;
            }    
            return 0;
        });
        this.setState({ data: newData });
    }
    render() {
        return (
            <div className='Dico container'>
                <h2>Dictionnaire</h2>
                <div className='container'>
                    <div className='input-group mb-3'>
                        <input type='text' className='form-control' placeholder='titre' onChange={this.handleChange} aria-label="Recipient's username" aria-describedby='basic-addon2' />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">Filtre</span>
                        </div>
                    </div>
                    <ListContainer className='ListContainer' type='dico' data={ this.state.data} />                   
                </div>
            </div>
        )
    }
}
