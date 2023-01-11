import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() { 
        return (
            <div className="py-4">
                <h1 className="text-center text-6xl text-orange-500"><Link to="/">Twitch Higher or Lower</Link></h1>
            </div>
        );
    }
}
 
export default Navbar;