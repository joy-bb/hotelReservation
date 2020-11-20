import React from "react";
import {Link} from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="our room">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </div>

    );
}

export default Rooms;






