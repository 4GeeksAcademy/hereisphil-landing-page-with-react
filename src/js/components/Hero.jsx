function Hero(props) {
  return (
    <div className="container bg-light rounded p-5 my-2">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="btn btn-primary" href={props.buttonUrl}>{props.buttonTxt}</button>
    </div>
  );
}

export default Hero;
