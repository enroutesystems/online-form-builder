import React, { Component } from 'react'
import {MoonLoader} from 'react-spinners'

export default class extends Component {

    constructor(props){
        super(props)
    }

    handleRemoveCard = (e, index) => {
        e.stopPropagation()
        this.removeCard(index)
    }

    removeCard = (cardIndex) => {
        this.props.removeCard(cardIndex)
    }

    changeActive = (cardIndex) => {
        this.props.changeActive(cardIndex)
    }

    submitForm = () => this.props.onSubmitForm()

    render() {
        return(
            <div className="mt-4">
                {this.props.cards.map((card, index) => {
                    return (
                        <div key={ `sidebarCard${index}` }
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
                                <div className="ml-3 text-sm font-semibold">
                                    <span className="font-italic">{ index + 1}.</span> { card.question }
                                </div>
                            </div>
                            <div className={`text-xs bg-red-${index > 0 ? '500' : '300'} h-5 w-5 text-white ${index > 0 ? 'hover:bg-red-600' : ''} rounded flex items-center justify-center` }
                            onClick={index > 0 ? (e) => this.handleRemoveCard(e, index) : () => {}}>
                                x
                            </div>
                        </div>)
                })}
                <div className="px-4 pt-4 pb-6">
                    <button 
                        className='bg-blue-500 rounded p-3 text-white mt-5 w-full text-sm hover:bg-blue-600'
                        onClick={this.submitForm}
                    >
                        {this.props.isFetching ? <MoonLoader size={20}/> : 'Publish'}
                    </button>
                </div>
            </div>
        );
    }
}


