import React from 'react'
import About from '../Main/About'
import Topbar from '../Topbar'
import Setting from './Setting'
 
 


const Setting_Main = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <Setting/>
                    </div>
                    <div className="col-md-3">
                        <About />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting_Main
