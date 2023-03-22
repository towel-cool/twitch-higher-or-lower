import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() { 
        return (
            <div className="">
                <h1 className="text-center text-6xl text-purple-500"><Link to="/">Streamer Higher or Lower</Link></h1>
                <div className="flex justify-center text-white text-xl">
                    Guess whether a streamer has more or less average viewers</div>
            </div>
        );
    }
}
 
export default Navbar;