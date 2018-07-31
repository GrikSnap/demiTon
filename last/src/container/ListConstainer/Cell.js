import React, { Component } from 'react';
import './css/Cell.css'

let id = 0;
const newid = () => { return id++ }

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: newid(),
            title: props.title,
            comment: props.message != null ? props.message : "remplir",
            flag: false
        }
    }


    checkedBox() {
        this.setState({ flag: !this.state.flag })
    }

    render() {
        return (
            <a href='#1' className='Cell list-group-item list-group-item-action'  onClick={() => this.checkedBox()}>
                <div className='row'>
                    <label className='col-sm' > {this.state.id}  </label>
                    <label className='col-sm' > {this.state.comment} </label>
                    <input className='col-sm form-control' type='submit' value='Modifier' id='btn' />
                    <input className='col-sm form-control' type='checkbox' checked={this.state.flag} />
                </div>
            </a>
        )
    }
}
