import React, { Component } from 'react'
import {Oval} from "react-loader-spinner";

export default class NoPage extends Component {
  render() {
    const text = {
            fontSize: "150px",
            textAlign: "center",
    }
    const text2 = {
        fontSize: "20px",
        textAlign: "center",
    }

    return (
        <>
            <div className={"row","loader hidden"}>
                <Oval
                    heigth="100"
                    width="100"
                    color='white'
                    ariaLabel='loading'
                />
            </div>
        <div id="text" style={text}>
          404
        </div>
        <div id="text2" style={text2}>
            Not Found
        </div>
        </>
    )
  }
}
