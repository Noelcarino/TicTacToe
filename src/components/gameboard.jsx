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
        let preGame = this.state.gameBoard;
        let xOro;

        if (!squarePieceClass){
            console.log("you cant pick this anymore");
            return ;
        }
        if (squarePieceClass === 'lol') xOro = 'x';
        else xOro = 'o';
        switch(event.target.id){
            case 'top-left':
                element.classList.add(squarePieceClass);
                preGame[0][0] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'top-middle':
                element.classList.add(squarePieceClass);
                preGame[0][1] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'top-right':
                element.classList.add(squarePieceClass);
                preGame[0][2] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'middle-left':
                element.classList.add(squarePieceClass);
                preGame[1][0] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'middle-middle':
                element.classList.add(squarePieceClass);
                preGame[1][1] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'middle-right':
                element.classList.add(squarePieceClass);
                preGame[1][2] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'bottom-left':
                element.classList.add(squarePieceClass);
                preGame[2][0] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'bottom-middle':
                element.classList.add(squarePieceClass);
                preGame[2][1] = xOro;
                this.setState({gameBoard: preGame});
                break;
            case 'bottom-right':
                element.classList.add(squarePieceClass);
                preGame[2][2] = xOro;
                this.setState({gameBoard: preGame});
                break;
            default:
                console.log("hello");
                break;
        }
        console.log(this.state.gameBoard);
    }
    handleClassSwitch(param){

        let classCheck = param.classList.value.split(' ');
        if (classCheck.includes('lol') || classCheck.includes('lol2')) return false;

        if (this.state.player1turn){
            this.setState({player1turn: false, player2turn: true})
            return "lol";
        } 
        if (this.state.player2turn){
            this.setState({player1turn: true, player2turn: false})
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