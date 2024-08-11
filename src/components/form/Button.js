

const Button = (props) => {

    return (<>
        <button className={`khmer ${props.class}`}>{props.text}</button>
    </>)
}

export default Button;