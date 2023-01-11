import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lose extends Component { 
    render() { 
        return (
            <div className="flex flex-col items-center justify-center text-white text-4xl">
                <div className="flex flex-col items-center">
                    <h1>You Lost! OMG IMAGINE</h1>
                    <h1>Final Score: {this.props.finalScore}</h1>
                    <h1>High Score: {document.cookie}</h1>
                </div>
                <div className="flex flex-col space-y-2">
                    <button 
                    className="rounded-md border-4 border-orange-500 duration-150
                                hover:scale-110 hover:bg-orange-500 hover:text-stone-900" 
                    onClick={() => this.props.handlePlayAgainClick()}
                    >Play Again</button>
                    <Link 
                    to="/"
                    className="rounded-md border-4 border-orange-500 duration-150
                                hover:scale-110 hover:bg-orange-500 hover:text-stone-900" 
                    >Main Page</Link>
                </div>
            </div>
        );
    }
}
 
export default Lose;