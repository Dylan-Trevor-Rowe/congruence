
import React from 'react'
import { useState } from 'react'
import './App.css';
import Body from './illust57-4505.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export function MainPage(props) {

    const [value, setvalue] = useState('')
    const [isHidden, setIsHidden] = useState(false)
    console.log(isHidden)
    const handleOnchange = val => {
        setvalue(val)
    }

    const options = [
        { label: 'Electrolysis', value: 'Electrolysis'},
        { label: 'Forhead Reduction', value: 'Forhead Reduction'},
        { label: 'Hair Line Lowering', value: 'Hair Line Lowering'},
        { label: 'Cheek Augmentation', value: 'Cheek Augmentation'},
        { label: 'Lip Lift', value: 'Lip-Lift'},
        { label: 'Chin Contour', value: 'Chin Contour'},
        { label: '', value: ''},
        { label: '', value: ''},
        { label: ' ', value: ''},
    ]
    const handleControlledInputChange = (e) => {
        var x = e.clientX;
        var y = e.clientY;
        var coor = "X coords: " + x + ", Y coords: " + y;
        if (x >= 401 && x <= 482 && y >= 62 && y <= 181) {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }
    }
    return <> {isHidden ?
        <div className="app">
            <div className="preview-values">
                <h4>Values</h4>
                {value}
            
            </div>

            <MultiSelect
                onChange={handleOnchange}
                options={options}
            />
             <Button className="btn-primary" size="small" variant="primary">submit</Button>
        </div>
        
        : ''}   
        <div onClick={handleControlledInputChange} className="fullScreen">
            <img onClick={handleControlledInputChange} className="bodyImage" src={Body}></img>
        </div>
    </>
}



