import React, { Component } from 'react'
import Navbar from '../navbarDashboard'
import ColorSelector from './colorSelector'
import SidebarCards from './SidebarCards'
import QuestionContainerBuilder from '../QuestionContainer/QuestionContainerBuilder'
import questionTypes from '../../helpers/questionTypes'
import api from '../../helpers/api'
import alert from '../../helpers/alert'
import {FaCog} from 'react-icons/fa'

export default class extends Component {

    constructor(props) {
        super(props);

        this.titleInput = React.createRef()

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
                    type: questionTypes.singleLineText,
                    color: "gray"
                }
            ],
            activeCardIndex: 0,
            activeColor: "gray",
            isFetching: false,
            modalActive: true
        },

        this.handleQuestionChange = (question) => {
            this.setState((prevState) => {
                const newCards = prevState.cards.map((card, index) => {
                    if(index === this.state.activeCardIndex){
                        card.question = question.text,
                        card.type = question.type

                        if(question.options){
                            card.options = question.options
                            if(card.range)
                                delete card.range
                        }

                        if(question.range){
                            card.range = question.range
                            if(card.options)
                                delete card.options
                        }

                        return card
                    }

                    return card
                })

                return {
                    ...prevState,
                    cards: newCards
                }
            })
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
            this.setState(state => {

                return{
                    ...state,
                    cards: [...state.cards, {
                        question: "",
                        type: questionTypes.singleLineText,
                        color: "gray"
                    }],
                    activeCardIndex: state.activeCardIndex + 1
                }
            });
        }

        this.removeCard = (cardIndex) => {
            if (cardIndex == (this.state.cards.length - 1)) {

                if (cardIndex == this.state.activeCardIndex ) {
                    this.changeActive(this.state.cards.length-2)
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

        this.handleSubmitForm = async() => {

            if(this.titleInput.current.value.trim() === ''){
                alert.warning('Form name is a required field')
                return
            }

            for(let cardIdx in this.state.cards){
                
                if(this.state.cards[cardIdx].question.trim() === ''){
                    alert.warning(`Card number ${+cardIdx + 1} doesn't have question`)
                    return
                }
            }

            this.setState({
                ...this.state,
                isFetching: true
            })

            const body = {
                uid: this.props.user.uid,
                formName: this.titleInput.current.value.trim(),
                isPublic: false, //config modal
                year: 2021, //config modal
                month: 0, //config modal
                day: 21, //config modal
                hour: 16, //config modal
                minute: 30, //config modal
                second: 0, //config modal
                allowedUsers: ['QqOao7atZ2PnA72eXTVOQ0M4Ykz1'], //config modal
                questions: this.state.cards.map(card => {
                    card.text = card.question
                    card.cardColor = card.color

                    if(card.options)
                        card.options = card.options.map(option => option.text)

                    return card
                })
            }

            let response

            try{
                response = await api.post('/api/form/create', body)
            }
            catch(err) {response = err.response}
            console.log(response)
            if(!response.data.ok){
                alert.error(response.data.result.message)
            }
            else{
                alert.success('Form was created successfully!')
            }

            this.setState({
                ...this.state,
                isFetching: false
            })
        }

        this.openModal = () => {
            this.setState({
                modalActive: true
            })
        }

        this.closeModal = () => {
            this.setState({
                modalActive: false
            })
        }

        this.removeCard = this.removeCard.bind(this)
        this.changeActive = this.changeActive.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }


    render() {
        return(
            <div className="min-h-screen">
                <Navbar></Navbar>
                <div className="grid grid-cols-5 h-screen">
                    <div className="border border-r shadow-lg overflow-y-scroll z-10">
                        <div className='flex items-center justify-between px-4'>
                            <input ref={this.titleInput}
                                className='my-5 h-10 w-10/12 bg-transparent font-semibold focus:outline-none focus:border-b focus:border-red'
                                placeholder='Enter the form name...' />
                            <div>
                                <div className='flex hover: cursor-pointer' onClick={this.openModal}>
                                    <FaCog className='self-center'/>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 mb-4 mt-2 flex items-center justify-between">
                            <div className="font-semibold text-lg">
                                Questions
                            </div>
                            <a className="rounded bg-gray-200 flex items-center justify-center font-semibold hover:bg-gray-300 h-8 w-8" href="#/" onClick={this.addCard}>
                                +
                            </a>
                        </div>
                        <div className='overflow-y-auto'>
                                <SidebarCards
                                    onSubmitForm={this.handleSubmitForm}
                                    isFetching={this.state.isFetching}
                                    cards={ this.state.cards }
                                    removeCard={ this.removeCard }
                                    changeActive={ this.changeActive }
                                    activeCard={ this.state.activeCardIndex }>
                                </SidebarCards>
                        </div>
                    </div>
                    <div className="bg-gray-200 col-span-4 p-12 relative">
                        <div className={`rounded-lg bg-${ this.activeCard() && this.activeCard().color }-100 shadow-lg h-full w-full mb-24`}>
                            <div className="flex items-center justify-center h-full">
                                <div className="w-3/5">
                                    { this.activeCard() && 
                                        <QuestionContainerBuilder key={this.state.activeCardIndex} 
                                        type={this.activeCard().type} 
                                        text={this.activeCard().question}
                                        options={this.activeCard().options}
                                        range={this.activeCard().range}
                                        onQuestionChange={this.handleQuestionChange}/>
                                    }
                                </div>
                            </div>
                        </div>

                        <ColorSelector colors={ this.state.colors } changeColor={ this.changeColor.bind(this) }></ColorSelector>

                    </div>
                </div>
                <div className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 opacity-100 z-20 ${ this.state.modalActive ? '' : 'hidden' }`}>
                    <div className="bg-white border border-gray-200 rounded w-1/2 h-1/2 opacity-100">
                        <div className="overflow-y-scroll h-full">
                        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
                            <div className="text-lg font-semibold">
                                Form settings
                            </div>
                            <div className="text-blue-400 text-sm cursor-pointer" onClick={ this.closeModal }>
                                Close
                            </div>
                        </div>
                        <div className="w-full p-5">
                            <div classname="font-semibold">
                                Base Settings
                            </div>
                            <div className="my-6 space-y-2 text-gray-500">
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="appearance-none bg-white border-2 rounded h-5 w-5 border-gray-300 checked:bg-blue-500 checked:border-transparent " />
                                    <span>
                                        Is public
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="appearance-none bg-white border-2 rounded h-5 w-5 border-gray-300 checked:bg-blue-500 checked:border-transparent" />
                                    <span>
                                        Date limit?
                                    </span>
                                </label>
                            </div>

                            <div className="mt-8">
                            <div classname="font-semibold">
                                User Settings
                            </div>
                            <div className="my-6">
                                <label className="flex items-center space-x-2 text-xs text-gray-500">
                                    <input type="checkbox" className="appearance-none bg-white border-2 rounded h-5 w-5 border-gray-300 checked:bg-blue-500 checked:border-transparent" />
                                    <span>
                                        Limited to allowed users?
                                    </span>
                                </label>
                            </div>
                            <div className="my-4 grid grid-cols-10 gap-2">
                                <input type="text" className="px-3 border border-gray-300 text-sm rounded col-span-9 p-1 focus:outline-none" placeholder="Enter the user email..."/>
                                <div className="bg-blue-400 rounded text-white p-2 text-center text-sm">
                                    Add
                                </div>
                            </div>
                            <div className="border rounded bg-white text-xs">
                                <div className="grid grid-cols-10 border-b">
                                    <div className="text-gray-500 py-2 px-3 border-r col-span-7">
                                        Email
                                    </div>
                                    <div className="col-span-2 border-r text-gray-500 px-3 py-2 text-center">
                                        Send invite?
                                    </div>
                                    <div className="text-gray-500 px-3 py-2 text-center">
                                        Active?
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 border-b">
                                    <div className="text-gray-800 py-2 px-3 border-r col-span-7 border-r flex items-center">
                                        example@gmail.com
                                    </div>
                                    <div className="col-span-2 px-3 py-2 border-r text-blue-500 font-semibold flex items-center justify-center cursor-pointer">
                                        Invite
                                    </div>
                                    <div className="flex items-center justify-center p-2">
                                        <div className="h-5 w-5 bg-green-500 rounded"> </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10">
                                    <div className="text-gray-800 py-2 px-3 border-r col-span-7 border-r flex items-center">
                                        user@example.com
                                    </div>
                                    <div className="col-span-2 px-3 py-2 border-r text-blue-500 font-semibold flex items-center justify-center cursor-pointer">
                                        Invite
                                    </div>
                                    <div className="flex items-center justify-center p-2">
                                        <div className="h-5 w-5 bg-gray-300 rounded"> </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
