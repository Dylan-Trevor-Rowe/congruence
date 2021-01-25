
import React from 'react'
import { useState } from 'react'
import './App.css';
import Body from './illust57-4505.jpg'
import { HeadMenu } from './HeadMenu'

export function MainPage(props) {

    const handleControlledInputChange = (e) => {
        var x = e.clientX;
        var y = e.clientY;
        var coor = "X coords: " + x + ", Y coords: " + y;
    }


    return <>

        <div onClick={handleControlledInputChange} className="fullScreen">
            <img className="bodyImage" src={Body}></img>
        </div>
    </>
}


