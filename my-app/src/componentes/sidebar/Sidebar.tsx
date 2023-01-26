import Buttons from '../buttons/Buttons'
import './Sidebar.scss'

import { FiSettings, FiHome } from 'react-icons/fi'
import { SiGooglemaps } from 'react-icons/si'
import { BsFillPersonDashFill } from 'react-icons/bs'
import { TbLayoutDashboard } from 'react-icons/tb'
import { CiLogout } from 'react-icons/ci'
import logo from './mon.png'

function Sidebar () {
    return (
        <div className="side-bar">

            {/* Nome mais Logo */}
            <div className="logo">
                <img src={logo} alt="logo-mon" />
            </div>
            
            {/* Barra de naveção */}
            <nav className="navegacao">
                <Buttons name='Home' icone={<FiHome/>}/>
                <Buttons name='Dashboard' icone={<TbLayoutDashboard/>}/>
                <Buttons name='Maps' icone={<SiGooglemaps/>}/>
                <Buttons name='Sellers' icone={<BsFillPersonDashFill/>}/>
                <Buttons name='Settings' icone={<FiSettings/>}/>
                <div className="logout">
                    <Buttons name='Logout' icone={<CiLogout/>}/>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar