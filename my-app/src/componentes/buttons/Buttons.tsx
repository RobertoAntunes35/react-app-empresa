import './Buttons.scss'
import { FaBeer } from 'react-icons/fa'

interface Props {
    name: string,
    icone?:JSX.Element,
}


function Buttons (props:Props) {
    return (
        <div className="buttons">
            <button>
                {props.icone}
                {props.name}
            </button>
        </div>
    )
}
export default Buttons
