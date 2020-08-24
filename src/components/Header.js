import React from 'react';
import Logo from '../assets/images/llrelectric-logo.png'

const Header = () => {
    return (
        <div style={{ padding: "16px", display: "flex"}}>
            <div>
                <img src={Logo} style={{width: "85%"}} />

            </div>
            <div style={{flex: 1}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: "100%"}}>
                    <div>
                        Test
                    </div>
                    <div>
                        Some Longer Text
                    </div>
                    <div>
                        More Text
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;