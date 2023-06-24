import {AiOutlineHome} from 'react-icons/ai'
import {BsRocket} from 'react-icons/bs'
import {BiBookmark} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'

import './leftSideBar.css'

export const LeftSideBar = () => {
    return (
        <div className='left-bar'>
            <div className="upper-section above-margin">
                <button className="nav-btn"><AiOutlineHome /> Home</button>
                <button className="nav-btn"><BsRocket /> Explore</button>
                <button className="nav-btn"><BiBookmark /> BookMark</button>
                <button className="nav-btn"><CgProfile /> Profile</button>
            </div>
        </div>
    )
}