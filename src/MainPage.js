
import React from 'react'
import { useState } from 'react'
import './App.css';
import Body from './illust57-4505.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export function MainPage(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleControlledInputChange = (e) => {
        var x = e.clientX;
        var y = e.clientY;
        var coor = "X coords: " + x + ", Y coords: " + y;
        if (x >= 401 && x <= 482 && y >= 62 && y <= 181){
            handleShow();
        }
        console.log(coor)
    }

    return <>
    <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Body>   <div className="headMenu">
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal></div>
        <div onClick={handleControlledInputChange} className="fullScreen">
            <img onClick={handleControlledInputChange} className="bodyImage" src={Body}></img>
        </div>
    </>
}


