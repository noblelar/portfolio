import React from "react";
import NavData from '../../container/navs.json';

const Navbutton = (props) => {

    return (
        <div className="lap_menu">
            {
                NavData.map((nav, n) => {
                    return (
                        <span key={n} className="lap_nav_menu pointer" >
                            {nav.value}
                        </span>
                    )
                })
            }
        </div>
    )

}

export default Navbutton;