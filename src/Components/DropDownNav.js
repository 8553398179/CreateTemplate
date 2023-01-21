import React from 'react';
import "./DropDownNav.css";
// import Avatar from '@mui/material/Avatar';
// import { Avatar } from '@mui/material';

// import { Avatar } from '@material-ui/core';


function DropDownNav()
{
    return(
        
      
        <div className="nav">
            <div className="title">
                <span id= "name1" >Intuceo</span> <span id="name2">Dx</span>
            </div>

            <div className="options">

                <div className="features">
                    <span>Features</span>

                    <div className="subMenu">
                        <div>
                            <div>
                                <div>
                                        {/* <Avatar  src={'image1.png'}/> */}
                                        <p>Model Based</p>

                                </div>
                                <div>
                                    <p>Create Template </p>
                                    <p>Existing Template</p>
                                </div>
                            </div>
                            
                        </div>

                        <div>
                            <div>
                                <p>Template Based</p>
                                <div>
                                    <p>Create Model</p>
                                    <p>Existing Model</p>
                                </div>

                            </div>
                        
                        </div>
                    
                    </div>

                </div>

                <div className="process">
                    <span>Process</span>

                    <div className="subMenu">
                        <div>
                            <p>Model Based</p>
                        </div>

                        <div>
                            <p>Template Based</p>
                        </div>
                    

                    </div>

                </div>

                <div className="archive">
                    <span>Archive</span>

                    <div className="subMenu">
                        <div>
                            <p>Existing Template</p>
                        </div>
                
                    </div>
                </div>

            </div>
            

            <div className="demo">
                <span>Request Demo</span>
            </div>
        
        </div>

    
    );

}

export default DropDownNav;