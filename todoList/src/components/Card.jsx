const Card = ({ children, close }) => {
  return (
    <div
      className="card"
    >
      <div className="card__header">
        <button className="card__close-button" onClick={close}>
          {" "}
          x{" "}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Card;
