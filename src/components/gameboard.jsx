import React from 'react';
import './gameboard.css';

export default class GameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameBoard: [
                ['','',''],
                ['','',''],
                ['','',''],
            ],
            player1turn: true,
            player2turn: false
        }
        this.handleSquarePieceChange = this.handleSquarePieceChange.bind(this);
    }
    handleSquarePieceChange(event){

        let element = document.getElementById(event.target.id);
        let squarePieceClass = this.handleClassSwitch(element);

        if (!squarePieceClass){
            console.log("you cant pick this anymore");
            return ;
        }
        switch(event.target.id){
            case 'top-left':
                element.classList.add(squarePieceClass);
                this.state.gameBoard[0][0] = 'x';
                break;
            case 'top-middle':
                element.classList.add(squarePieceClass);
                this.state.gameBoard[0][1] = 'o';
                console.log(this.state.gameBoard[0])
                break;
            case 'top-right':
                console.log(this.state.gameBoard);
                break;
            case 'middle-left':
            case 'middle-middle':
            case 'middle-right':
            case 'bottom-left':
            case 'bottom-middle':
            case 'bottom-right':
                console.log("so much to do");
                break;
        }
    }
    handleClassSwitch(param){

        let classCheck = param.classList.value.split(' ');
        if (classCheck.includes('lol') || classCheck.includes('lol2')) return false;

        if (this.state.player1turn){
            this.setState({player1turn: false, player2turn: true})
            return "lol";
        } 
        if (this.state.player2turn){
            this.setState({player1turn: false, player2turn: true})
            return "lol2";
        }
    }
    render(){
        return (
            <div className="container-fluid bg-light p-0">
                <div className="gameBoard-container m-auto">
                    <div className="square row">
                        <div id="top-left" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                        <div id="top-middle" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                        <div id="top-right" className="squarePiece" onClick={this.handleSquarePieceChange}></div>

                        <div id="middle-left" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                        <div id="middle-middle" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                        <div id="middle-right" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                        
                        <div id="bottom-left" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                        <div id="bottom-middle" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                        <div id="bottom-right" className="squarePiece" onClick={this.handleSquarePieceChange}></div>
                    </div>
                </div>
            </div>
        )
    }
}