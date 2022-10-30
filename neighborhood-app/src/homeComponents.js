import React from "react";
import "./styles.css";
import logo from "./images/profilePic1.jpeg";
import wood from "./images/wood.jpg";
import profile from "./images/profile.jpg";
import tableSaw from "./images/tableSaw.JPG";
import hammer from "./images/hammer.png";
import drill from "./images/drill.jpg";
import lathe from "./images/lathe.jpg";
import saw from "./images/saw.png";
import glasses from "./images/glasses.png";


export function MainFeed(){
    return (
        <>
        <div className="search">
            <h5>Find Any Tool, For Any Project</h5>
            <input className="search-bar" type="text" placeholder="What Would You Like, <NAME>?"/>
        </div>
        <div className="add-neighbors">
            <div className="usr-profile">
                <img className="format" src={profile}/>
                <div className="brief-desc">
                    <h6>Name</h6>
                    <button className="add-btn">+ Neighbor</button>
                </div>
            </div>
            <div className="usr-profile">
                <img className="format" src={profile}/>
                <div className="brief-desc">
                    <h6>Name</h6>
                    <button className="add-btn">+ Neighbor</button>
                </div>
            </div>
            <div className="usr-profile">
                <img className="format" src={profile}/>
                <div className="brief-desc">
                    <h6>Name</h6>
                    <button className="add-btn">+ Neighbor</button>
                </div>
            </div>
        </div>
        
        <div className="activity">   
            <div className="post">
                <div className="post-header">
                    <div className="post-info">
                        <img src={logo} className="post-image"/>
                        <p>Jeremy Stur</p>
                    </div>
                    <p className="time-stamp">Posted at 7:00am</p>
                </div>
                <div className="post-body">
                    <p className="post-p">
                        Hey everyone! Just started repoulstering 
                        my old couch! Let me know if y'all have any 
                        suggestions! 
                    </p>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                    <div className="post-info">
                        <img src={profile} className="post-image"/>
                        <p>Michael Riffle</p>
                    </div>
                    <p className="time-stamp">Posted at 12:30pm</p>
                </div>
                <div className="post-body">
                    <p className="post-p">
                         2013 table saw. Great condition, let me know if 
                         y'all need to use it.
                    </p>
                    <img src={tableSaw} className="post-img"/>
                </div>
            </div>
                
            <div className="post">
                <div className="post-header">
                    <div className="post-info">
                        <img src={profile} className="post-image"/>
                        <p>Ryan Johnson</p>
                    </div>
                    <p className="time-stamp">Posted at 9:30pm</p>
                </div>
                <div className="post-body">
                    <p className="post-p">
                        Brand new wood clamps I just bought to build a new table,
                        probably won't need them for a while, let me know if y'all
                        need to use them.
                    </p>
                    <img src={wood} className="post-img"/>
                </div>
            </div>
        </div> 
        </>
    )
}

export function ProfilePage(){
    return (
        <div className="main-content">
            <div className="usr-info">
                <div className="prfle-lft">
                    <div className="projects-hdr">
                        <h4>Your Listings</h4>
                        <div className="add-prjct">+ Listing</div>
                    </div>
                    <div className="prjct">
                        <div className="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div className="prjct-bdy">
                            <div className="details">
                                <p className="prjct-info">Dewalt hand-held drill.
                                I will include a battery pack as well</p>
                                <div className="quality">Quality: Good As New</div>
                            </div>
                            
                            <div className="my-listing">
                                <p className="price">$23</p>
                                <img src={drill}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="prjct">
                        <div className="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div className="prjct-bdy">
                            <div className="details">
                                <p className="prjct-info"></p>
                                <div className="quality">Quality: Good</div>
                            </div>
                            
                            <div className="my-listing">
                                <p className="price">$55</p>
                                <img src={tableSaw}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="prjct">
                        <div className="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div className="prjct-bdy">
                            <div className="details">
                                <p className="prjct-info">Dewalt hand-held drill.
                                I will include a battery pack as well</p>
                                <div className="quality">Quality: Good As New</div>
                            </div>
                            
                            <div className="my-listing">
                                <p className="price">$23</p>
                                <img src={lathe}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="prjct">
                        <div className="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div className="prjct-bdy">
                            <div className="details">
                                <p className="prjct-info">Dewalt hand-held drill.
                                I will include a battery pack as well</p>
                                <div className="quality">Quality: Good As New</div>
                            </div>
                            
                            <div className="my-listing">
                                <p className="price">$23</p>
                                <img src={hammer}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="projects">
                    <div className="projects-hdr">
                        <h4>Your Projects</h4>
                        <div className="add-prjct">+ Project</div>
                    </div>
                    <div className="prjct">
                        <div className="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div className="prjct-bdy">
                            <p className="prjct-info">This is my DIY project to 
                            build a new wooden chair. I've bought all the wood 
                            and parts but now I need to begin assembling.</p>
                            <div className="myImg">
                                <img src={saw}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="prjct">
                        <div className="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div className="prjct-bdy">
                            <p className="prjct-info">This is my DIY project to 
                            build a new wooden chair. I've bought all the wood 
                            and parts but now I need to begin assembling.</p>
                            <div className="myImg">
                                <img src={glasses}/>
                            </div>
                        </div>
                    </div>
                    <div className="prjct">
                        <div className="prjct-hdr">
                            <h4>Project Title</h4>
                        </div>
                        <div className="prjct-bdy">
                            <p className="prjct-info">This is my DIY project to 
                            build a new wooden chair. I've bought all the wood 
                            and parts but now I need to begin assembling.</p>
                            <div className="myImg">
                                <img src={saw}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}