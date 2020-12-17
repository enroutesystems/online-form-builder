import React, { Component } from 'react'
import Navbar from '../navbarDashboard'
import ColorSelector from './colorSelector'
import SidebarCards from './SidebarCards'
import QuestionContainerBuilder from '../QuestionContainer/QuestionContainerBuilder'

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colors: [
                "gray",
                "red",
                "green",
                "yellow",
                "purple",
                "indigo",
                "pink",
                "gray",
            ],
            cards: [
                {
                    question: "",
                    type: "open",
                    color: "gray"
                },
                {
                    question: "",
                    type: "open",
                    color: "gray"
                }
            ],
            activeCardIndex: 0,
            activeColor: "gray",
        }

        this.activeCard = () => {
            return this.state.cards[this.state.activeCardIndex]
        }

        this.changeColor = (color) => {
            this.state.cards[this.state.activeCardIndex]["color"] = color
            this.setState(state => ({
                cards: [...this.state.cards]
            }));
        }

        this.addCard = () => {
            this.setState(state => ({
                cards: [...state.cards, {
                    question: "",
                    type: "open",
                    color: "gray"
                }]
            }));
        }

        this.removeCard = (cardIndex) => {
            if (cardIndex == (this.state.cards.length - 1)) {
                this.changeActive(0)
            }

            if (cardIndex == this.state.activeCardIndex ) {
                if (cardIndex != 0) {
                    this.changeActive(0)
                } else {
                    this.changeActive(1)
                }
            }

            if ( this.state.cards.length > 1 ) {
                this.setState(state => ({
                    cards: state.cards.filter((card, index) => index != cardIndex )
                }));
            }

        }

        this.changeActive = (cardIndex) => {
            this.setState({
                activeCardIndex: cardIndex
            });
        }

        this.removeCard = this.removeCard.bind(this)
        this.changeActive = this.changeActive.bind(this)

    }


    render() {
        return(
            <div className="min-h-screen">
                <Navbar></Navbar>
                <div className="grid grid-cols-5 min-h-screen">
                    <div className="border border-r shadow-lg overflow-y-scroll">
                        <div className="mx-4 my-8 flex items-center justify-between">
                            <div className="font-semibold text-lg">
                                Questions
                            </div>
                            <a className="rounded bg-gray-200 flex items-center justify-center font-semibold hover:bg-gray-300 h-8 w-8" href="#/" onClick={this.addCard}>
                                +
                            </a>
                        </div>
                        <SidebarCards
                            cards={ this.state.cards }
                            removeCard={ this.removeCard }
                            changeActive={ this.changeActive }
                            activeCard={ this.state.activeCardIndex }>
                        </SidebarCards>
                    </div>
                    <div className="bg-gray-200 col-span-4 p-12 relative">
                        <div className={`rounded-lg bg-${ this.activeCard() && this.activeCard().color }-100 shadow-lg h-full w-full mb-24`}>
                            <div className="flex items-center justify-center h-full">
                                <div className="w-3/5">
                                    <QuestionContainerBuilder onQuestionChange={question => console.log(question)}/>
                                </div>
                            </div>
                        </div>

                        <ColorSelector colors={ this.state.colors } changeColor={ this.changeColor.bind(this) }></ColorSelector>

                    </div>
                </div>
            </div>
        );
    }
}
