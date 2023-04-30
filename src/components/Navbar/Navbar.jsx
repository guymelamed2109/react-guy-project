import { Link } from "react-router-dom";
import '../Navbar/navbar.css'
import { useState } from "react";

export const Navbar = (props) => {

	const [home, sethome] = useState(true)

	const clickHome = () => {
		if (!home) {

			sethome(prevHome => !prevHome)
		}
	}
	const clickMemories = () => {
		if (home) {

			sethome(prevHome => !prevHome)
		}
	}

	const stylesHome ={
		borderBottom: home && '1px solid black',
		color: home && 'black'
	}
	const stylesMemories={
		borderBottom: !home && '1px solid black',
		color: !home && 'black'
	}
	
	return (
        	<div className="nav-wrapper">
            <div className="left-side">
				
				<div>

                <Link onClick={clickHome} style={stylesHome} to={'/react-guy-project/'} className="nav-link-wrapper active-nav-link">
					Home
                </Link>
				</div>
				<div>

                <Link onClick={clickMemories} style={stylesMemories} to={'/react-guy-project/memories'} className="nav-link-wrapper ">
					Memories
                </Link>
				</div>
            </div>

            <div className="right-side">
                <div className="brand">
                    <div>Guy & Omri</div>
                </div>
            </div>
        </div>
	);
};