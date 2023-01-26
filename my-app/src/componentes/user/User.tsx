import './User.scss'

import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiUser} from 'react-icons/bi'


interface Props {
    name:string
}

function User(props:Props) {
    return (
        <div className="user">
            <div className="user-name">
                <span>{props.name}</span>
                <a href="#">
                    <BiUser />
                </a>
                <a href="#">
                <IoIosNotificationsOutline />    
                </a>  
                
            </div>

            <div className="notification">
            </div>
        </div>
    )
}

export default User