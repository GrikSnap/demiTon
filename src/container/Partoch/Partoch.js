import React, { Component } from 'react';
import './css/Partoch.css';
var Test = require("../../server/Test");

let url = '';
export default class Partoch extends Component {
    
    //#region Constructor
    constructor(props) {
        super(props);
        this.state = {
            ton: '0',
            part: '',
            title: '',
            isEdit: false,
            base: '',
            other: ''
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleOtherChange = this.handleOtherChange.bind(this);

        
    }
    //#endregion

    //#region Data Event
    handleSelectChange(event) {
        this.setState({ ton: event.target.value });
        let result = '';
        let partition = this.state.part.toLowerCase();
        let splitData = partition.split(' ');
        if (event.target.value !== '0') {
            splitData.map((split) => {
                let newNote = this.getTranslatNote(split, event.target.value)
                result += (newNote === undefined ? '' : newNote + ' ');
                return null;
            })
        }
        else {
            result = this.state.base
        }
        this.setState({ part: result });
    }

    handleTextareaChange(event) {
        this.setState({ part: event.target.value });
    }

    handleOtherChange(event) {
        this.setState({ other: event.target.value});
    }

    handleSave(event) {
        this.setState({ isEdit: false });
        this.setState({ base: this.state.part });
    }

    handleEdit(event) {
        this.setState({ isEdit: true });
        this.setState({ ton: 0 });
        this.setState({ part: this.state.base });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }
    //#endregion

    //#region Function

    componentDidMount(){
        url = (document.location.href.split('/'))[4];
        this.setData(url);
    }

    getTranslatNote(note, demiTon) {
        if (note) {
            let notes = ["c", "c#", "d", "d#", "e", "f", "g", "g#", "a", "a#", "b"];
            let endNote = note.substring(1);
            let baseNote = note.substring(0, 1);
            if (endNote === '#') {
                endNote = '';
                baseNote = note;
            }
            if (note.length > 2) {
                if (note[1] === '#') {
                    endNote = note.substring(2);
                    baseNote = note.substring(0, 2);
                }
            }

            let index = parseInt(notes.indexOf(baseNote), 10) + parseInt(demiTon, 10);
            if (index >= notes.length) {
                index = parseInt(index, 10) - parseInt(notes.length, 10);
            }
            if (index < 0) {
                index = parseInt(notes.length, 10) + parseInt(index, 10);
            }
            return notes[index].toUpperCase() + endNote;
        }
        return this.state.baseNotes
    }

    setData(url){
        var res = Test.getById(url);
        this.setState({ title: res[1] });
        this.setState({ part: res[2] });
        this.setState({ base: res[2] });
        this.setState({ other: res[3] });
    }
    //#endregion

    //#region Function View

    render() {
        return (
            <div className='Partoch'>
                <nav className="nav nav-pills">
                    <a className="nav-item nav-link active" href="#p1" data-toggle="tab">Les notes</a>
                    <a className="nav-item nav-link" href="#p2" data-toggle="tab">Other</a>
                </nav>
                <div className="tab-content">
                    <div className="tab-pane active" id="p1">
                        <div className='PartochEdit' hidden={!this.state.isEdit}>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'><b>Titre:</b></label><input type='text' className='form-control col-sm-10' value={this.state.title} onChange={this.handleTitleChange} />
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'><b>Notes:</b></label><textarea className='Partoch-textarea form-control col-sm-10' value={this.state.part} onChange={this.handleTextareaChange} ></textarea>
                            </div>
                        </div>
                        <div className='PartochRead' hidden={this.state.isEdit}>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'><b>Titre:</b></label><input className='form-control col-sm-9' value={this.state.title} disabled></input>
                                <select value={this.state.ton} className="col-sm-1 form-control" onChange={this.handleSelectChange}>
                                    <option value="-4">-2</option>
                                    <option value="-3">-1.5</option>
                                    <option value="-2">-1</option>
                                    <option value="-1">-0.5</option>
                                    <option value="0">Base</option>
                                    <option value="1">0.5</option>
                                    <option value="2">1</option>
                                    <option value="3">1.5</option>
                                    <option value="4">2</option>
                                </select>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'><b>Notes:</b></label><textarea type='text' className='Partoch-textarea form-control col-sm-10' value={this.state.part} disabled ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane' id='p2' >
                        <div className='PartochRead' hidden={!this.state.isEdit}>
                            <textarea className='Partoch-textarea form-control' value={this.state.other} onChange={this.handleOtherChange} ></textarea> 
                        </div>
                        <div className='PartochEdit' hidden={this.state.isEdit}>
                            <textarea className='Partoch-textarea form-control' value={this.state.other} disabled ></textarea> 
                        </div>
                    </div>

                    <input type='submit' className='Partoch-button btn' value='modifier' onClick={this.handleSave} hidden={!this.state.isEdit} />
                    <input type='submit' className='Partoch-button btn' value='Editer' onClick={this.handleEdit} hidden={this.state.isEdit} />
                </div>
            </div>
        )
    }
    //#endregion
}
