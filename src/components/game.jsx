import React, { Component, Fragment } from "react";
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
        //Check for existing cookie
        if (document.cookie.length === 0) {
            document.cookie = "0";
        }
        //Lose state
        if (this.state.lose) {
            if (this.state.score > Number(document.cookie)) {
                document.cookie = this.state.score.toString();
            }
            return <Lose finalScore={this.state.score} handlePlayAgainClick={this.handlePlayAgainClick} />
        }
        //Playing state
        return (
            <Fragment>
                <div className="flex flex-row justify-center gap-8
                text-center text-white text-4xl">
                    <div>
                        <h3>Current: {this.state.current.userName}</h3>
                        <h3>Avg Viewers: {this.state.current.averageViewers}</h3>
                        <img src={this.state.current.imageURL} alt={this.state.current.userName} />
                    </div>
                    <div>
                        <h3>"{this.state.other.userName}"</h3>
                        <h4 className="text-2xl">has</h4>
                        <div className="flex flex-col space-y-2">
                            <button 
                            className="rounded-md border-4 border-purple-500 duration-150
                                        hover:scale-110 hover:bg-purple-500 hover:text-stone-900" 
                            onClick={() => this.handleHigherClick()}
                            >Higher</button>
                            <h2>or</h2>
                            <button 
                            className="rounded-md border-4 border-purple-500 duration-150
                                        hover:scale-110 hover:bg-purple-500 hover:text-stone-900" 
                            onClick={() => this.handleLowerClick()}
                            >Lower</button>
                        </div>
                        <h4 className="text-2xl">average viewers than {this.state.current.userName}</h4>
                        <img src={this.state.other.imageURL} alt={this.state.other.userName} />
                    </div>
                </div>
                <div className="flex flex-col 
                text-white text-2xl">
                    <h3>Score: {this.state.score}</h3>
                    <h3>High Score: {document.cookie}</h3>
                </div>
            </Fragment>
        );

    }

    getNewRandomStreamer() {
        //The number being multiplied by Math.random() corresponds the the number of streamers in the json file
        let randomIndex = Math.random() * 100;
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