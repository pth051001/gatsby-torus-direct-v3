import React from 'react'
import Particles from "react-particles-js"
import Login from './login'
import { Link } from 'gatsby'

const MUBCHeader = () => {
    return (
        <div id="mubc-header">
            <div>
            </div>
            <div>
                <a href="https://mubc.io/">
                    <img src={require('../images/MUBC Logo Big Letters (vector) copy 2.png')} alt="Logo"/>
                    <br/>
                    <img src={require('../images/MUBC Logo Big Letters (vector) copy.png')} alt="Logo"/>
                </a>
            </div>
            <Login />
            <Particles height="125px" params={{
                particles: {
                    "number": {
                        "value": 40
                    },
                    "size": {
                        "value": 3
                    }
                }
            }}/>
        </div>
    )
}
export default MUBCHeader