
import Calendario from '../calendario/Calendario'
import User from '../user/User'
import './Rightbar.scss'

function Rightbar() {
    return (
        <div className='right-bar'>
            <User name='Lorem Ips'/>
            <Calendario/>
        </div>        
    )
}
export default Rightbar