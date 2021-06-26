import React, { Component } from 'react'

export default class Diagnosis extends Component{
    render(){
        return(
            <div className="diagnosis">
                <p className="title"><b>Diagnosis</b></p>

                    <dl>
                        <dt>&#8226; Diagnosis List Item 1</dt>
                        <dd>Description of list item 1</dd>

                        <dt>&#8226; Diagnosis List Item 2</dt>
                        <dd>Description of list item 2</dd>

                        <dt>&#8226; Diagnosis List Item 3</dt>
                        <dd>Description of list item 3</dd>
                    </dl>
            </div>
        )
    }


}