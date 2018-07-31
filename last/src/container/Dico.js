import React, { Component } from 'react';
import ListContainer from './ListConstainer/ListContainer';

const dataList = [{ num: 0, message: "lol" },
    { num: 1, message: "toto" },
    { num: 2, message: "lourd" },
    { num: 3, message: "daim" },
    { num: 4, message: "bouerrd" },
    { num: 5, message: "caim" },
    { num: 6, message: "eourd" },
    { num: 7, message: "haim" },
    { num: 8, message: "loourd" },
    { num: 9, message: "zaim" },
    ];

export default class Dico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.data,
            data: dataList
        };
    }

    handleChange = (event) => {

        let newData = this.state.data.sort((a, b) => {
            if (a.message < b.message) return -1;
            if (a.message > b.message && ((b.message.includes(event.target.value) && a.message.includes(event.target.value)) || (!b.message.includes(event.target.value) && a.message.includes(event.target.value)))) return 1;
            return 0;

        }).reverse();

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
                    <ListContainer className='ListContainer' type='dico' data={this.state.data} />                   
                </div>
            </div>
        )
    }
}
