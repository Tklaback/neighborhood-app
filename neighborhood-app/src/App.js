import React from 'react';
import Nav from "./Nav.js";
import { MainFeed, ProfilePage } from './homeComponents.js';
import "./styles.css";
import welcome from './images/largeWelcome.png'

export function About(){
    return (
        <>
            <Nav />
            <div class="main-content">
                <img src={welcome} className="large-welcome"/>
                <p className="mission">At Neighborhood we have one mission:<br/><span className="b-txt">Bring
                community to your neighborhood.</span><br/>With Neighborhood, you can 
                see what necessary equipment those in your vicinity have to offer for 
                your projects. You can then list any tools that you would be willing
                to lease to your neighbors. We want to close the gap in communication
                between neighbors so that you rarely have to buy new equipment.</p>
            </div>
        </>
    )
}

export function Profile(){
    return (
        <div>
            <Nav />
            <ProfilePage />
        </div>
    )
}

function Home(){
    return (
        <div>
            <Nav />
            <div className="main-content">
                <MainFeed />
            </div>
        </div>
    )
}


export function App(){
    return (
        <div>
            <Home />
        </div>
    )
}
