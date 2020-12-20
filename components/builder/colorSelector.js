import React, { Component } from 'react'

export default class extends Component {

    changeColor = (color) => {
        this.props.changeColor(color)
    }

    render() {
        return(
            <div className="fixed bottom-0 left-0 right-0 grid grid-cols-5">
                <div></div>
                <div className="m-5 p-4 bg-white rounded border border-gray-300 box-shadow col-span-4">
                    <div className="grid grid-cols-8 gap-6">
                        <div className="font-semibold text-sm flex items-center">
                            Choose a color:
                        </div>
                        <div className="grid grid-cols-8 gap-5 w-full h-full col-span-7">
                            {this.props.colors.map((color, index) => {
                                return <div key={`colorSelector${index}`} className={`bg-${ color }-300 hover:bg-${ color }-400 h-8 w-full rounded cursor-pointer`} onClick={() => this.changeColor(color)}></div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
