import React, { Component } from "react";
import Introsmall from '../../resources/Intropicmb.png'
import Introbig from '../../resources/Intropic.png'

class Introduction extends Component {
    constructor() {
        super();
        this.state = {
            intropic: '',
            initialWidth: window.innerWidth
        }
    }

    screenChange = () => {
        if (window.innerWidth <= 400) {
            return Introsmall;
        } else {
            return Introbig;
        }
    }






    render() {
        return (
            <div>
                <div className="container for_phone" id="for_phone">
                    <div className="contents box">
                        <div className="row">
                            <div className="intro col-lg-6">
                                <p className="hi">Hey there, &#x1F44B;</p>
                                <p className="name">I'm Noble</p>
                                <p className="class">A full Stack Web Developer </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="contents box mw9 center ph3-ns">
                        <div className="row lap cf ph2-ns">
                            <div className="image col-lg-6 col-sm-12 fl w-100 w-50-ns pa2">
                                <div className="frame">
                                    <img className="my_pic" src={this.screenChange()} alt="" />
                                </div>
                            </div>
                            <div className="intro col-lg-6 fl w-100 w-50-ns pa2">

                                <p className="hi">Hey there, &#x1F44B;</p>
                                <p className="name">I'm Noble</p>
                                <p className="class">A full Stack Web Developer specialized in LAMP and MERN stacks </p>

                                <p className="passion">
                                    <p className="for_phone class">
                                        Specialized in LAMP and MERN stacks
                                    </p>
                                    Being <span> passionate</span> of living a life where every
                                    service I need can be accessed right at my door step through the
                                    internet has grown my <span>interest</span> in building solutions
                                    that are capable of serving such purposes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="box div row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-dark">
                                {"Read More >>"}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Introduction;