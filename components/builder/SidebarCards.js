import React, { Component } from 'react'

export default class extends Component {

    removeCard = (cardIndex) => {
        this.props.removeCard(cardIndex)
    }

    changeActive = (cardIndex) => {
        this.props.changeActive(cardIndex)
    }

    render() {
        return(
            <div className="mt-4">
                {this.props.cards.map((card, index) => {
                    return (
                        <div key={ index }
                            className={`py-4 px-6 flex items-center hover:bg-gray-200 cursor-pointer justify-between ${ this.props.activeCard == index ? "bg-gray-100" : "" }`}
                            onClick={ () => this.changeActive(index) }>
                            <div className="flex items-center mr-3">
                                <div className={`border border-black rounded h-12 w-16 flex items-center justify-center flex-col bg-${ card.color }-100`}>
                                    <div className="text-center -mt-3">
                                        _____
                                    </div>
                                    <div className="text-center -mt-3">
                                        ____
                                    </div>
                                </div>
                                <div className="ml-3 text-sm font-semibold capitalize">
                                    <span className="font-italic">{ index + 1}.</span> { card.type }
                                </div>
                            </div>
                            <div className="text-xs bg-red-500 h-5 w-5 text-white hover:bg-red-600 rounded flex items-center justify-center" onClick={ () => this.removeCard(index) }>
                                x
                            </div>
                        </div>)
                })}
            </div>
        );
    }
}


