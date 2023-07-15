import React from "react";
import Navdata from '../../container/navs.json';

const Mnavbutton = () => {

    return (
        <div className="mobile_menu_list">
            <ul>
                {
                    Navdata.map((nav, n) => {
                        return (
                            <li key={n}>
                                <span>
                                    {nav.value}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Mnavbutton;