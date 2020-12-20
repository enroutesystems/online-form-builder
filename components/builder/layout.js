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
            isFetching: false
        }

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
                <div className="grid grid-cols-5 min-h-screen">
                    <div className="border border-r shadow-lg overflow-y-scroll">
                        <div className='flex'>
                            <input ref={this.titleInput} className=' my-5 h-10 w-10/12' placeholder='Your form name...' />
                            <div className='flex hover: cursor-pointer' onClick={this.openModal}>
                                <FaCog className='self-center'/>
                            </div>
                        </div>
                        <div className="mx-4 my-8 flex items-center justify-between">
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
            </div>
        );
    }
}
