import React, { Component } from 'react';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Jonh Doe',
            activeNavbar: false,
            navbarOptions: [
                { name: "My Profile" },
                { name: "Stats" },
                { name: "Settings" },
                { name: "Logout" },
            ]
        }

        this.toggleNavbar = () => {
            this.setState(state => ({
                activeNavbar: !state.activeNavbar
            }));
        }
    }

    render() {
        return(
            <nav className="col-auto flex items-center justify-between px-8 py-3 border-b border-gray-200">
                <h1 className="text-lg semibold rounded-full border-4 border-gray-800 flex itesm-center justify-center h-8 w-8 text-gray-500"></h1>
                <div className="relative">
                    <div className="flex items-center border border-gray-300 rounded py-2 px-3 hover:bg-gray-200 cursor-pointer" onClick={this.toggleNavbar}>
                        <div className="rounded-full h-8 w-8 bg-gray-900"></div>
                        <div className="mx-3 text-sm text-gray-500">
                            {this.state.name}
                        </div>
                    </div>
                    <div className={`absolute top-12 right-0 border mt-2 bg-white py-3 px-6 text-sm text-gray-500 rounded w-36 z-10 ${this.state.activeNavbar ? '' : 'hidden'}`}>
                        {this.state.navbarOptions.map((option) => {
                            return <div className="my-3">
                                <a href="#/" className="hover:text-gray-700">
                                    {option.name}
                                </a>
                            </div>
                        })}
                    </div>
                </div>
            </nav>
        );
    }
}

