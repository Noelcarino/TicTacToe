import React from 'react';
import './gameboard.css';

export default class GameBoard extends React.Component {
    render(){
        return (
            <div className="container-fluid bg-light p-0">
                <div className="gameBoard-container m-auto">
                    <div className="square row">
                        <div className="squarePiece"></div>
                        <div className="squarePiece"></div>
                        <div className="squarePiece"></div>

                        <div className="squarePiece"></div>
                        <div className="squarePiece"></div>
                        <div className="squarePiece"></div>
                        
                        <div className="squarePiece"></div>
                        <div className="squarePiece"></div>
                        <div className="squarePiece"></div>
                    </div>
                </div>
            </div>
        )
    }
}