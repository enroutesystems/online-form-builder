import React, { Component } from 'react';
import Navbar from '../navbarDashboard'
import Card from '../cardDashboard'
import CardCreate from '../cardCreateDashboard'

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                { name: "Lorem", responsesNumber: 1 },
                { name: "Ipsum", responsesNumber: 2 },
                { name: "Dolor", responsesNumber: 3 },
                { name: "Sid", responsesNumber: 4 },
                { name: "Amed", responsesNumber: 5 }
            ]
        }
    }

    render() {
        return(
            <div className="min-h-screen auto-rows-auto">
                <Navbar></Navbar>
                <div className="p-8 bg-gray-100 min-h-screen">
                    <div className="mb-6">
                        <h2 className="text-2xl">Workspace</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <CardCreate></CardCreate>
                        {this.state.posts.map((post) => {
                            return <Card name={post.name} responsesNumber={post.responsesNumber}></Card>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
