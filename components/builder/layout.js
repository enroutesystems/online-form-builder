import React, { Component } from 'react'
import Navbar from '../navbarDashboard'
import ColorSelector from './colorSelector'
import SidebarCards from './SidebarCards'
import QuestionContainerBuilder from '../QuestionContainer/QuestionContainerBuilder'
import questionTypes from '../../helpers/questionTypes'
import api from '../../helpers/api'
import alert from '../../helpers/alert'
import {FaCog} from 'react-icons/fa'

const getInitialState = () => ({
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
    modalActive: false,
    formIsPublic: true,
    allowedUsers: [],
    formHasDateLimit: false,
    dateLimit: undefined,
    formHasLimitResponses: false,
    limitResponses: 1
})

export default class extends Component {

    constructor(props) {
        super(props);

        this.titleInput = React.createRef()

        this.state = getInitialState()

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

                if(this.state.cards[cardIdx].type === questionTypes.multiOptions 
                    && this.state.cards[cardIdx].options.some(option => option.text.trim() === '')){

                    alert.warning(`Multi-option card with number ${+cardIdx + 1} has an option without text. Please do not leave an option empty.`)
                    return
                }

                if(this.state.cards[cardIdx].question.trim() === ''){
                    alert.warning(`Card number ${+cardIdx + 1} doesn't have question`)
                    return
                }
            }

            if(!this.state.formIsPublic && this.state.allowedUsers.length < 1){
                alert.warning('This forms is setted as private and you have not selected allowed users')
                return
            }

            if(this.state.formHasLimitResponses && this.state.limitResponses < 1){
                alert.warning('Limit responses must be at least 1')
                return
            }

            this.setState({
                ...this.state,
                isFetching: true
            })

            const body = {
                uid: this.props.user.uid,
                formName: this.titleInput.current.value.trim(),
                isPublic: this.state.formIsPublic,
                year: this.state.formHasDateLimit ? parseInt(this.state.dateLimit.split('-')[0]) : undefined,
                month: this.state.formHasDateLimit ? parseInt(this.state.dateLimit.split('.')[1]) - 1 : undefined ,
                day: this.state.formHasDateLimit ? parseInt(this.state.dateLimit.split('.')[2]) : undefined,
                allowedUsers: !this.state.formIsPublic ? this.state.allowedUsers : undefined,
                limitResponses: this.state.formHasLimitResponses ? this.state.limitResponses : undefined,
                questions: this.state.cards.map(card => {
                    card.text = card.question
                    card.cardColor = card.color

                    if(card.options)
                        card.options = card.options.map(option => option.text)

                    return card
                })
            }

            let response
            console.log(body)
            try{
                response = await api.post('/api/form/create', body)
            }
            catch(err) {response = err.response}
            if(!response.data.ok){
                alert.error(response.data.result.message)
            }
            else{
                alert.success('Form was created successfully!')
                this.titleInput.current.value = ''
                this.setState(getInitialState())
            }
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

        this.handleIsPublicChange = (e) => {
            this.setState(prevState => ({...prevState, formIsPublic: e.target.checked}))
        }

        this.userInput = React.createRef()

        this.addUser = () => {
            const newUser = this.userInput.current.value.trim()
            this.setState(prevState => ({...prevState, allowedUsers: [...prevState.allowedUsers, newUser]}))
            this.userInput.current.value = ''
            this.userInput.current.focus()
        }

        this.deleteUser = (deleteIndex) => {
            this.setState(prevState => ({
                ...prevState,
                allowedUsers: prevState.allowedUsers.filter((user, index) => index !== deleteIndex)
            }))
        }

        this.handleHasDateLimitChange = (e) => {
            this.setState(prevState => ({...prevState, formHasDateLimit: e.target.checked}))
        }

        this.handleDateLimitChange = (e) => {
            this.setState(prevState => ({...prevState, dateLimit: e.target.value}))
        }

        this.handleformHasLimitResponses = (e) => {

            this.setState(prevState => ({...prevState, formHasLimitResponses: e.target.checked}))
        }

        this.handleLimitResponsesChange = (e) => {

            const newLimitResponses = parseInt(e.target.value) || 0
            this.setState(prevState => ({...prevState, limitResponses: newLimitResponses}))
        }

        this.removeCard = this.removeCard.bind(this)
        this.changeActive = this.changeActive.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }

    componentDidMount(){
        this.userInput.current.addEventListener('keypress', (e) => {
            if(e.keyCode === 13)
                this.addUser()
        })
    }


    render() {
        return(
            <div className="min-h-screen">
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
                <div className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-40 z-20 ${ this.state.modalActive ? '' : 'hidden' }`}>
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
                            <div className="font-semibold">
                                Base Settings
                            </div>
                            <div className="my-6 space-y-2 text-gray-500">
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="appearance-none bg-white border-2 rounded h-5 w-5 border-gray-300 checked:bg-blue-500 checked:border-transparent " defaultChecked={this.state.formIsPublic} onChange={this.handleIsPublicChange}/>
                                    <span>
                                        Is public
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="appearance-none bg-white border-2 rounded h-5 w-5 border-gray-300 checked:bg-blue-500 checked:border-transparent" defaultChecked={this.state.dateLimit} onChange={this.handleHasDateLimitChange}/>
                                    <span>
                                        Date limit?
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="appearance-none bg-white border-2 rounded h-5 w-5 border-gray-300 checked:bg-blue-500 checked:border-transparent" defaultChecked={this.state.formHasLimitResponses} onChange={this.handleformHasLimitResponses}/>
                                    <span>
                                        Responses limit?
                                    </span>
                                </label>
                            </div>

                            <div className="mt-8" hidden={!this.state.formHasDateLimit}>
                                <div>
                                    <div className="font-semibold">
                                        Date limit
                                    </div>
                                    <input type='date' onChange={this.handleDateLimitChange}/>
                                </div>
                            </div>

                            <div className="mt-8" hidden={!this.state.formHasLimitResponses}>
                                <div>
                                    <div className="font-semibold">Responses limit</div>
                                </div>
                                <input type='number' min='1' onChange={this.handleLimitResponsesChange} defaultValue={this.state.limitResponses}/>
                            </div>

                            <div className="mt-8" hidden={this.state.formIsPublic}>
                                <div className="font-semibold">
                                    User Settings
                                </div>
                                <div className="my-4 grid grid-cols-10 gap-2">
                                    <input ref={this.userInput} type="email" className="px-3 border border-gray-300 text-sm rounded col-span-9 p-1 focus:outline-none" placeholder="Enter the user email..."/>
                                    <div className="bg-blue-400 rounded text-white p-2 text-center text-sm" onClick={this.addUser}>
                                        Add
                                    </div>
                                </div>
                                <div className="border rounded bg-white text-xs">
                                    <div className="grid grid-cols-10 border-b">
                                        <div className="text-gray-500 py-2 px-3 border-r col-span-7">
                                            Email
                                        </div>
                                        <div className="text-gray-500 px-3 py-2 text-center">
                                            Delete
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-10 border-b">
                                        {this.state.allowedUsers.map((user, index) => (
                                            <React.Fragment key={'allowedUser' + index}>
                                                <div className="text-gray-800 py-2 px-3 border-r col-span-7 border-r flex items-center">
                                                    {user}
                                                </div>
                                                <div className="flex items-center justify-center p-2 hover: cursor-pointer" onClick={() => this.deleteUser(index)}>
                                                    <div className="h-5 w-5 bg-red-500 rounded text-center"> X </div>
                                                </div>
                                            </React.Fragment>
                                        ))}
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
