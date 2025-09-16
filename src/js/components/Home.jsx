import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		    <>
      <NavBar
        brandName="Start Bootstrap"
        homeTxt="Home"
        aboutTxt="About"
        servicesTxt="Services"
        contactTxt="Contact"
      />
      <main className="container d-flex flex-column justify-content-center align-items-center">
        <Hero
		title="A Warm Welcome!"
		content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores
        expedita maxime eaque natus deserunt placeat libero quam. Earum, nemo
        obcaecati dignissimos repudiandae aperiam harum voluptas nulla quae
        expedita delectus."
		buttonUrl="#"
		buttonTxt="Call to Action!"
		/>
        {/* <div className="flex-grow-1"></div> */}
        <div className="d-flex gap-2">
          <Card
            imgSrc="https://placehold.co/500x325"
            imgAlt="image alt text"
            title="Card Title"
            content="Some quick example text to build on the Card Title and make up the bulk of the card’s content."
            buttonUrl="#"
            buttonTxt="Find Out More!"
          />
          <Card
            imgSrc="https://placehold.co/500x325"
            imgAlt="image alt text"
            title="Card Title"
            content="Some quick example text to build on the Card Title and make up the bulk of the card’s content."
            buttonUrl="#"
            buttonTxt="Find Out More!"
          />
          <Card
            imgSrc="https://placehold.co/500x325"
            imgAlt="image alt text"
            title="Card Title"
            content="Some quick example text to build on the Card Title and make up the bulk of the card’s content."
            buttonUrl="#"
            buttonTxt="Find Out More!"
          />
          <Card
            imgSrc="https://placehold.co/500x325"
            imgAlt="image alt text"
            title="Card Title"
            content="Some quick example text to build on the Card Title and make up the bulk of the card’s content."
            buttonUrl="#"
            buttonTxt="Find Out More!"
          />
        </div>
      </main>
      <Footer
		text="Copyright &copy; Landing Page with React + BootStrap. "
		url="https://github.com/hereisphil"
		urlTxt="Phillip Cantu" 
	  />
    </>
	);
};

export default Home;