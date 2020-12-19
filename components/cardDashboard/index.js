import React, { Component } from 'react';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card bg-gray-100 rounded shadow-lg border border-gray-300 grid grid-rows-3 cursor-pointer">
                <p className="text-2xl row-span-2 p-5">
                    {this.props.name}
                </p>
                <div className="p-4 border-t flex items-center justify-between text-xs text-gray-500">
                    <div>
                        {this.props.responsesNumber} Responses
                    </div>
                    <div className="border rounded border border-gray-300 py-1 px-4 hover:border-gray-400 hover:text-gray-600">
                        Edit
                    </div>
                </div>
            </div>
        );
    }
}