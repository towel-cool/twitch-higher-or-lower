import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeContent extends Component {
    render() { 
        return (
            <div className="flex flex-row justify-center">
                <Link 
                to='/hlGame'
                className="rounded-md border-4 text-white border-orange-500 duration-150 text-6xl
                hover:scale-110 hover:bg-orange-500 hover:text-stone-900"
                >Play</Link>
            </div>
        );
    }
}
 
export default HomeContent;