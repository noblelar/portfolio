import React, { Component } from "react";
import Navbutton from "./navbutton";
import Mobilenav from "./mobilenav";

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            nav: 'not-active'
        }
    }


    changeNavState = () => {
        if (this.state.nav === 'active') {
            this.setState({ nav: 'not-active' })
        } else {
            this.setState({ nav: 'active' })
        }
    }


    render() {
        return (
            <div>
                <div className="top_space"></div>

                <div className="header">
                    <svg
                        className="left_arrow"
                        width="40"
                        height="131"
                        viewBox="0 0 40 131"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 131H20V33H40L0 0V131Z" fill="#DBDBDB" />
                    </svg>

                    <div className="nav_content">
                        <svg
                            className="logo"
                            width="82"
                            height="121"
                            viewBox="0 0 82 121"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.7844 74.1747H2.42857V86.753H44.7143M67.4286 42.5301V102.627L12.5292 1.61162L12.6429 107.717H2.42857V118.5H33.1429V107.717H21.0714V43.9277L62 118H79.5714V42.5301L73.5 46.5L67.4286 42.5301Z"
                                stroke="white"
                                strokeWidth="4"
                            />
                        </svg>

                        <div className="welc_emoji">
                            <span className="emoji"> &#x1F600; </span>
                            <span className="welc"> Welcome </span>
                        </div>

                        <div className={"btnm " + this.state.nav} onClick={this.changeNavState}>
                            <span className="dee"></span>
                            <span className="dee"></span>
                            <span className="dee"></span>
                        </div>

                        <Navbutton />

                    </div>
                    <svg
                        className="right_arrow"
                        width="40"
                        height="131"
                        viewBox="0 0 40 131"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M40 0L0 33H20V131H40V0Z" fill="#DBDBDB" />
                    </svg>
                </div>

                <Mobilenav navChange={this.state.nav} onChangeNav ={this.changeNavState}/>

            </div>
        )

    }
}

export default Navigation;