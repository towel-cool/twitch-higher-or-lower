import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() { 
        return (
            <div className="">
                <h1 className="text-center text-6xl text-purple-800">Twitch Higher or Lower</h1>
                <ul className="text-purple-800 text-center text-3xl">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/twitchGame"}>Twitch Game</Link>
                    </li>
                </ul>
                <hr />
            </div>
        );
    }
}
 
export default Navbar;