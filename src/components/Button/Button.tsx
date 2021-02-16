import react from 'react'
import './Button.css'

declare interface ButtonProps{
    content?: string
    onClick?: () => void
    appendIcon?: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
        className="AppButton"
        onClick={props.onClick}
    >
        { props.children || "Botão sem nome" }
        { props.appendIcon }
    </button>
}

export default Button