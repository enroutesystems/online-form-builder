import React, { Component } from 'react';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="min-h-screen">
                <div className="min-h-screen bg-blue-100 flex items-center justify-center">
                    <div className="w-3/5">
                        <div className="my-64">
                            <div className="text-4xl mb-12">
                                Example of a open question
                            </div>
                            <input className="bg-transparent border-b border-black w-full py-3 placeholder:text-black" placeholder="Write your answer" type="text" />
                        </div>
                        <div>
                            <a href="#/" className="text-2xl text-black focus:outline-none focus:border-none">
                                Go to next question 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-purple-100 flex items-center justify-center">
                    <div className="w-3/5">
                        <div className="my-64">
                            <div className="text-4xl mb-12">
                                Example of a link question
                            </div>
                            <div className="flex items-center">
                                <div className="mr-3 font-semibold text-xl">
                                    http://
                                </div>
                                <input className="bg-transparent border-b border-black w-full py-3 placeholder:text-black" placeholder="Write the URL" type="text" />
                            </div>
                        </div>
                        <div>
                            <a href="#/" className="text-2xl text-black focus:outline-none focus:border-none">
                                Go to next question 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-red-100 flex items-center justify-center">
                    <div className="w-3/5">
                        <div className="my-64">
                            <div className="text-4xl mb-12">
                                Example of a multiple choice question
                            </div>
                            <div>
                                <div className="w-64 bg-red-200 border border-red-400 p-2 hover:bg-red-300 hover:border-red-500 cursor-pointer text-sm my-4 flex items-center text-red-900">
                                    <div className="w-6 h-6 bg-gray-800 mr-3 text-white flex items-center justify-center bg-red-500">
                                        A
                                    </div>
                                    Lorem
                                </div>
                                <div className="w-64 bg-red-200 border border-red-400 p-2 hover:bg-red-300 hover:border-red-500 cursor-pointer text-sm my-4 flex items-center text-red-900">
                                    <div className="w-6 h-6 bg-gray-800 mr-3 text-white flex items-center justify-center bg-red-500">
                                        B
                                    </div>
                                    Ipsum
                                </div>
                                <div className="w-64 bg-red-200 border border-red-400 p-2 hover:bg-red-300 hover:border-red-500 cursor-pointer text-sm my-4 flex items-center text-red-900">
                                    <div className="w-6 h-6 bg-gray-800 mr-3 text-white flex items-center justify-center bg-red-500">
                                        C
                                    </div>
                                    Dolor
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="#/" className="text-2xl text-black focus:outline-none focus:border-none">
                                Go to next question 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-green-100 flex items-center justify-center">
                    <div className="w-3/5">
                        <div className="my-64">
                            <div className="text-4xl mb-12">
                                Example of a range question
                            </div>
                            <div className="flex items-center space-x-4">
                                <a href="#/" className="h-6 w-6 bg-green-200 border border-green-400 flex items-center justify-center text-sm p-5 hover:bg-green-300 text-green-800">
                                    1
                                </a>
                                <a href="#/" className="h-6 w-6 bg-green-200 border border-green-400 flex items-center justify-center text-sm p-5 hover:bg-green-300 text-green-800">
                                    2
                                </a>
                                <a href="#/" className="h-6 w-6 bg-green-200 border border-green-400 flex items-center justify-center text-sm p-5 hover:bg-green-300 text-green-800">
                                    3
                                </a>
                                <a href="#/" className="h-6 w-6 bg-green-200 border border-green-400 flex items-center justify-center text-sm p-5 hover:bg-green-300 text-green-800">
                                    4
                                </a>
                                <a href="#/" className="h-6 w-6 bg-green-200 border border-green-400 flex items-center justify-center text-sm p-5 hover:bg-green-300 text-green-800">
                                    5
                                </a>
                            </div>
                        </div>
                        <div>
                            <a href="#/" className="text-2xl text-black focus:outline-none focus:border-none">
                                Go to next question 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
                    <div className="w-3/5">
                        <div className="my-64">
                            <div className="text-4xl mb-12">
                                Example of a file option
                            </div>
                            <label className="p-4 border border-yellow-500 bg-yellow-200 flex items-center justify-center flex-col w-64 rounded cursor-pointer text-yellow-700">
                                <div className="text 4xl font-semibold">
                                    +
                                </div>
                                <div className="text-xl">
                                    Select a file
                                </div>
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                        <div>
                            <a href="#/" className="text-2xl text-black focus:outline-none focus:border-none">
                                Go to next question 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-pink-100 flex items-center justify-center">
                    <div className="w-3/5">
                        <div className="my-32">
                            <div className="text-4xl mb-12">
                                Example of a map option
                            </div>
                            <div className="rounded-lg border-2 border-pink-400 w-2/3 h-96 bg-pink-200 flex items-center justify-center text-pink-900">
                                MAP
                            </div>
                        </div>
                        <div>
                            <a href="#/" className="text-2xl text-black focus:outline-none focus:border-none">
                                Go to next question 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

