import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class HomeContent extends Component {
    render() { 
        return (
            <Fragment>
                <div className="flex flex-row justify-center">
                    <Link 
                    to='/hlGame'
                    className="rounded-md border-4 text-white border-purple-500 duration-150 text-8xl
                    hover:scale-110 hover:bg-purple-500 hover:text-stone-900"
                    >Play</Link>
                </div>
            </Fragment>
        );
    }
}
 
export default HomeContent;