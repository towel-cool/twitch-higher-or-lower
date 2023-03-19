import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return (
            <div 
            className="flex flex-col items-center justify-center text-white fixed bottom-0 right-0 left-0">
                <h4 className="">Made by Diego Diaz</h4>
                <h4>Data last updated Feb 20, 2023</h4>
            </div>
        );
    }
}
 
export default Footer;