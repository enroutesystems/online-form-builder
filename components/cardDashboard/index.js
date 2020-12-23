import { Component, createRef} from 'react';
import Redirect from 'next/router'
import {AiOutlineLink} from 'react-icons/ai'
import style from './cardDashboard.module.scss'

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            copiedMessage: false
        }
    }

    hidden = createRef()

    handleRedirect = () => {
        Redirect.push('/answers?formId=' + this.props.formId)
    }

    handleCopyLink = (e) => {
        e.stopPropagation()
        const dummy = document.createElement('input')
        document.body.appendChild(dummy)
        dummy.setAttribute('value', process.env.NEXT_PUBLIC_HOST + '/form/view?formId=' + this.props.formId)
        dummy.select()
        dummy.select()
        document.execCommand('copy')
        document.body.removeChild(dummy)
        this.setState({copiedMessage: true})
    }

    componentDidUpdate(){
        if(this.state.copiedMessage)
            setTimeout(() => this.setState({copiedMessage: false}), 4000)
    }

    render() {
        return(
            <div onClick={this.handleRedirect} className="card bg-gray-100 rounded shadow-lg border border-gray-300 grid grid-rows-3 cursor-pointer">
                <p className="text-2xl row-span-2 p-5">
                    {this.props.name}
                </p>
                <div>
                    <div onClick={this.handleCopyLink} className='border border-gray-300 position-absolute inline-block float-right mx-3 hover:bg-gray-200'>
                        <AiOutlineLink />
                    </div>
                    <div className={`text-xs text-gray-600 float-right ${this.state.copiedMessage && style.opacityAnimation}`}>
                        {this.state.copiedMessage ? 'Copied to clipboard!' : ''}
                    </div>
                </div>
            </div>
        );
    }
}
