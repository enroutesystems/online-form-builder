import { Component } from 'react';
import Redirect from 'next/router'

export default class extends Component {

    constructor(props) {
        super(props);
    }

    handleRedirect = () => {
        Redirect.push('/answers?formId=' + this.props.formId)
    }

    render() {
        return(
            <div onClick={this.handleRedirect} className="card bg-gray-100 rounded shadow-lg border border-gray-300 grid grid-rows-3 cursor-pointer">
                <p className="text-2xl row-span-2 p-5">
                    {this.props.name}
                </p>
                <div className="p-4 border-t flex items-center justify-between text-xs text-gray-500">
                </div>
            </div>
        );
    }
}
