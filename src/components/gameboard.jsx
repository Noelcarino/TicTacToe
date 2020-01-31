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
    }
    handleGameReset(param){

        // test will pass if param is defined as draw
        if (param === 'draw') alert('The game is a draw!');
        alert("reseting game");

        // defined to reset state.gameboard
        let resetGameBoard = [
            ['','',''],
            ['','',''],
            ['','',''],
        ];

        // defined array so that for loop can iterate and check if class exist 
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
        
        // reset everything
        this.setState({gameBoard: resetGameBoard, player1turn: true, player2turn: false, tileTotal: 0});

        // iterate over array to check if class exist, remove it if true
        // if it DNE, nothing will happen.
        for(var i = 0; i < 9; i++){
            let element = document.getElementById(classArray[i]);
            element.classList.remove('xPieceClass');
            element.classList.remove('oPieceClass');
        }
    }
    handleGameCondition(){

        // Initate Variables;
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

        /***********************************************
            THIS SECTION HANDLES DIAGNOL WIN CONDITION
        ************************************************/

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
            row1x = row2x = row3x = 0;
            col1x = col2x = col3x = 0;
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

        /**************************************************************
            THIS SECTION HANDLES HORIZONTAL AND VERTICAL WIN CONDITION
        ***************************************************************/

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

        /***********************************************
            THIS SECTION HANDLES DRAW CONDITION 
        ************************************************/

       tileTotal++;
       this.setState({tileTotal: tileTotal});
        if (this.state.tileTotal === 8) this.handleGameReset('draw');
    }
    handleSquarePieceChange(event){

        // grab selected element and check id 
        let element = document.getElementById(event.target.id);

        // send id information to handle class switch method to check if class exist return false if true
        let squarePieceClass = this.handleClassSwitch(element);

        // initialize array to avoid array mutation
        let preGame = this.state.gameBoard;

        // initialize variable
        let xOro;

        // if handleSwitchClass returns false, that means the piece is already assigned a piece
        if (!squarePieceClass) return;
        if (squarePieceClass === 'xPieceClass') xOro = 'x';
        else xOro = 'o';

        // check which piece was clicked and assign class 
        // also send game information to pregame so that handle game condition can return winner or draw;
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
                break;
        }
        this.handleGameCondition();
    }
    handleClassSwitch(param){

        // Get all the classes of the pieces and store it in an array
        let classCheck = param.classList.value.split(' ');

        // if either of these classes are included, it means the piece has been assigned a class already;
        if (classCheck.includes('xPieceClass') || classCheck.includes('oPieceClass')) return false;

        // this test will pass if a class is not assigned to the tile yet;
        if (this.state.player1turn){
            this.setState({player1turn: false, player2turn: true})
            return "xPieceClass";
        } 
        if (this.state.player2turn){
            this.setState({player1turn: true, player2turn: false})
            return "oPieceClass";
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