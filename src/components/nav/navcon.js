import React, { Component } from "react";
import linkedin from '../../resources/linkedin-brands.svg';
import twitter from '../../resources/twitter-brands.svg';
import instagram from '../../resources/instagram-brands.svg';
import email from '../../resources/envelope-open-regular..svg';

class Navcon extends Component{

    render(){
        return(
            <div className="social_media">
                    <span><img src={linkedin} alt="" /></span>
                    <span><img src={twitter} alt="" /></span>
                    <span><img src={instagram} alt="" /></span>
                    <span><img src={email} alt=""/></span>
                </div>
        )
    }
}

export default Navcon;