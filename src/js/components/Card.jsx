function Card(props) {
  return (
    <div className="card my-2" style={{ width: "18rem" }}>
      <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a href={props.buttonUrl} className="btn btn-primary">
          {props.buttonTxt}
        </a>
      </div>
    </div>
  );
}
export default Card;
