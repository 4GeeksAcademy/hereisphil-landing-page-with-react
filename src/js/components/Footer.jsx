function Footer(props) {
  return (
    <footer className="container-fluid bg-dark text-center text-light py-5 mt-2">
      <p>{props.text}<a className="link-light" href={props.url} target="_blank">{props.urlTxt}</a>
      </p>
    </footer>
  );
}

export default Footer;
