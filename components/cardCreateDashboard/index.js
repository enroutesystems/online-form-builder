  
import React, { Component } from 'react';

export default class extends Component {

    render() {
        return(
            <div className="group card bg-indigo-400 p-4 rounded shadow-lg group-hover:shadow-2xl cursor-pointer text-center flex items-center justify-center flex-col">
                <p className="text-2xl text-white mb-4">
                    Create Form
                </p>
                <a href="#/">
                    <div className="rounded-full text-white bg-indigo-600 h-8 w-8 flex items-center justify-center shadow-md group-hover:bg-indigo-800">
                        +
                    </div>
                </a>
            </div>
        );
    }
}