import React, { Component } from "react";
import Mnavbutton from "./mnavbutton";
import Navcon from "./navcon";

class Mobilenav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: 'not-active'
        }
    }


    changeNavState = () => {
        this.props.onChangeNav();
    }


    render() {
        return (
            <div className={"mobile_menu " + this.props.navChange}>
                <svg
                    className="logo logo1 center "
                    width="82"
                    height="121"
                    viewBox="0 0 82 121"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.changeNavState}
                >
                    <path
                        d="M37.7844 74.1747H2.42857V86.753H44.7143M67.4286 42.5301V102.627L12.5292 1.61162L12.6429 107.717H2.42857V118.5H33.1429V107.717H21.0714V43.9277L62 118H79.5714V42.5301L73.5 46.5L67.4286 42.5301Z"
                        stroke="white"
                        stroke-width="4"
                    />
                </svg>

                <div className={"btnm1 " + this.props.navChange} onClick={this.changeNavState}>
                    <span className="dee"></span>
                    <span className="dee"></span>
                    <span className="dee"></span>
                </div>

                <Mnavbutton />

                <svg
                    className="arrow_left_phone"
                    width="50"
                    height="477"
                    viewBox="0 0 50 477"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.changeNavState}
                >
                    <path d="M0 476.081L49.282 427H20V0H0V476.081Z" fill="white" />
                </svg>
                <svg
                    className="arrow_right_phone"
                    width="49"
                    height="476"
                    viewBox="0 0 49 476"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.changeNavState}

                >
                    <path d="M49 0.199463L0 49H29.282V476H49V0.199463Z" fill="white" />
                </svg>

                <Navcon />

            </div>

        )
    }



}

export default Mobilenav;
