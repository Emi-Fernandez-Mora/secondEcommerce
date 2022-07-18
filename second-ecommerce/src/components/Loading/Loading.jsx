import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css';

const Loading = () => {
    return (
        <>
            <div className="loading">
                
            <div className="spinner-border m-5 " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        </>
    )
}

export default Loading