import React from 'react';
import './gameboard.css';

export default class GameBoard extends React.Component {
    render(){
        return (
            <div className="container-fluid bg-light p-0">
                <div className="gameBoard-container m-auto">
                    <div className="square">
                        <div className="content">
                            PERFEC SQUARE
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}