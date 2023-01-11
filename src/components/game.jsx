import React, { Component } from "react";
import Lose from "./lose"
import data from './data.json'

class Game extends Component {
    state = {
        score: 0,
        lose: false,
        current: "",
        other: ""
    }

    constructor(props) {
        super(props);
        this.handleHigherClick = this.handleHigherClick.bind(this);
        this.handleLowerClick = this.handleLowerClick.bind(this);
        this.handlePlayAgainClick = this.handlePlayAgainClick.bind(this);
    }

    componentDidMount() {
        this.setState({current: this.getNewRandomStreamer()});
        this.setState({other: this.getNewRandomStreamer()});
    } 

    render() { 
        if (document.cookie.length === 0) {
            document.cookie = "0";
        }
        if (this.state.lose) {
            if (this.state.score > Number(document.cookie)) {
                document.cookie = this.state.score.toString();
            }
            return <Lose finalScore={this.state.score} handlePlayAgainClick={this.handlePlayAgainClick} />
        }
        return (
            <div className="flex flex-col justify-center items-center text-center text-white text-4xl">
                <div className="flex flex-row space-x-10">
                    <div>
                        <h3 className="">Current: {this.state.current.userName}</h3>
                        <h3>Avg Viewers: {this.state.current.averageViewers}</h3>
                    </div>
                    <div>
                        <h3 className="">Other: {this.state.other.userName}</h3>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <button 
                    className="rounded-md border-4 border-orange-500 duration-150
                                hover:scale-110 hover:bg-orange-500 hover:text-stone-900" 
                    onClick={() => this.handleHigherClick()}
                    >Higher</button>

                    <button 
                    className="rounded-md border-4 border-orange-500 duration-150
                                hover:scale-110 hover:bg-orange-500 hover:text-stone-900" 
                    onClick={() => this.handleLowerClick()}
                    >Lower</button>
                </div>
                <h3>Score: {this.state.score}</h3>
                <h3>High Score: {document.cookie}</h3>
            </div>
        );

    }

    getNewRandomStreamer() {
        //The number being multiplied by Math.random() corresponds the the number of streamers in the json file
        let randomIndex = Math.random() * 4;
        randomIndex = Math.floor(randomIndex);

        let newStreamer = data.at(randomIndex);
        return newStreamer;
    }

    handleHigherClick() {
        if (this.state.other.averageViewers >= this.state.current.averageViewers) {
            this.setState({score: this.state.score + 1});
            this.setState({current: this.state.other});
            this.setState({other: this.getNewRandomStreamer()});
        }
        else {
            this.setState({lose: true});
        }
    }

    handleLowerClick() {
        if (this.state.other.averageViewers <= this.state.current.averageViewers) {
            this.setState({score: this.state.score + 1});
            this.setState({current: this.state.other});
            this.setState({other: this.getNewRandomStreamer()});
        }
        else {
            this.setState({lose: true});
        }
    }

    handlePlayAgainClick() {
        this.setState({lose: false});
        this.setState({score: 0});
        this.setState({current: this.getNewRandomStreamer()});
        this.setState({other: this.getNewRandomStreamer()});
    }

}
 
export default Game;