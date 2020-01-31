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
            player2turn: false,
            tileTotal: 0
        }
        this.handleSquarePieceChange = this.handleSquarePieceChange.bind(this);
        this.handleGameCondition = this.handleGameCondition.bind(this);
    }
    handleGameReset(){
        alert("reseting game");
        let resetGameBoard = [
            ['','',''],
            ['','',''],
            ['','',''],
        ];
        let classArray = [
            'top-left',
            'top-middle',
            'top-right',
            'middle-left',
            'middle-middle',
            'middle-right',
            'bottom-left',
            'bottom-middle',
            'bottom-right'
        ]
        this.setState({gameBoard: resetGameBoard, player1turn: true, player2turn: false, tileTotal: 0});

        for(var i = 0; i < 9; i++){
            let element = document.getElementById(classArray[i]);
            element.classList.remove('lol');
            element.classList.remove('lol2');
        }
    }
    handleGameCondition(){
        /*
            Case 1: x wins
                x must have length of 3 next to each other
            Case 2: o wins
            Caes 3: all tiles filled and case 1 or two 
                default case = draw;
        */

        // check horizontal && vertical case;

        // HORIZONTAL AND VERTICAL CHECK FOR X AND O COMBINED
        let row1x = 0;
        let row1o = 0;
        let row2x = 0;
        let row2o = 0;
        let row3x = 0;
        let row3o = 0;
        let col1x = 0;
        let col1o = 0;
        let col2x = 0;
        let col2o = 0;
        let col3x = 0;
        let col3o = 0;
        let tileTotal = this.state.tileTotal;
        tileTotal++;
        this.setState({tileTotal: tileTotal});
        for (var i = 0; i < 3; i++){
            if (this.state.gameBoard[0][i] === 'x') row1x++;
            if (this.state.gameBoard[i][0] === 'x') col1x++;
            if (this.state.gameBoard[0][i] === 'o') row1o++;
            if (this.state.gameBoard[i][0] === 'o') col1o++;

            if (this.state.gameBoard[1][i] === 'x') row2x++;
            if (this.state.gameBoard[i][1] === 'x') col2x++;
            if (this.state.gameBoard[1][i] === 'o') row2o++;
            if (this.state.gameBoard[i][1] === 'o') col2o++;

            if (this.state.gameBoard[2][i] === 'x') row3x++;
            if (this.state.gameBoard[i][2] === 'x') col3x++;
            if (this.state.gameBoard[2][i] === 'o') row3o++;
            if (this.state.gameBoard[i][2] === 'o') col3o++;
        }
        if (this.state.gameBoard[0][0] === 'x' && this.state.gameBoard[1][1] === 'x' && this.state.gameBoard[2][2] === 'x'){
            alert ("Player 1 is the winner");
            row1x = 0;
            row2x = row1x = row3x;
            col1x = 0;
            col2x = col1x = col2x;
            this.handleGameReset();
            return;
        }
        if (this.state.gameBoard[0][0] === 'o' && this.state.gameBoard[1][1] === 'o' && this.state.gameBoard[2][2] === 'o'){
            alert ("Player 2 is the winner");
            row1x = 0;
            row2x = row1x = row3x;
            col1x = 0;
            col2x = col1x = col2x;
            this.handleGameReset();
            return;
        }
        if (this.state.gameBoard[0][2] === 'x' && this.state.gameBoard[1][1] === 'x' && this.state.gameBoard[2][0] === 'x'){
            alert ("Player 1 is the winner");
            row1x = 0;
            row2x = row1x = row3x;
            col1x = 0;
            col2x = col1x = col2x;
            this.handleGameReset();
            return;
        }
        if (this.state.gameBoard[0][2] === 'o' && this.state.gameBoard[1][1] === 'o' && this.state.gameBoard[2][0] === 'o'){
            alert ("Player 2 is the winner");
            row1x = 0;
            row2x = row1x = row3x;
            col1x = 0;
            col2x = col1x = col2x;
            this.handleGameReset();
            return;
        }
        if (row1x === 3 || row2x === 3 || row3x === 3 || col1x === 3 || col2x === 3 || col3x === 3) {
            alert ("Player 1 is the winner")
            row1x = 0;
            col1x = 0;
            tileTotal = 0;
            this.handleGameReset();
            return;
        };
        if (row1o === 3 || row2o === 3 || row3o === 3 || col1o === 3 || col2o === 3 || col3o === 3) {
            alert ("Player 2 is the winner")
            row1x = 0;
            col1x = 0;
            tileTotal = 0;
            this.handleGameReset();
            return;
        };
        if (this.state.tileTotal === 8) this.handleGameReset();
        console.log(this.state.tileTotal);
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
        this.handleGameCondition();
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