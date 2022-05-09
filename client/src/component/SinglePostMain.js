import React from 'react'
import About from './Main/About'
import SinglePost from './SinglePost'


const SinglePostMain = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                      <SinglePost/>
                    </div>
                    <div className="col-md-3">
                      <About/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePostMain
