const Card = ({children, close, className, disabled, ...props})=> {
    return(
        <div className={`card ${className} ${disabled ? 'card__disabled' : ''}`} {...props}>
            <div className="card__header">
                <button className="card__close-button" onClick={close}> x </button>
            </div>
            {children}
        </div>
    )
}

export default Card;