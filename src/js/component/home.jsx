import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>

			<div className="d-flex justify-content-center">
				<Card title={"React"} img={"https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg"} btn={"Submit"} paragraph={"Why was the React functional component feeling left out? It didn't have any class."}/>
				<Card title={"React"} img={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"} btn={"Submit"} paragraph={"Why was the React functional component feeling left out? It didn't have any class."}/>
				
				<Card title={"React"} img={"https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg"} btn={"Submit"} paragraph={"Why was the React functional component feeling left out? It didn't have any class."}/>
				<Card title={"React"} img={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"} btn={"Submit"} paragraph={"Why was the React functional component feeling left out? It didn't have any class."}/></div>
			<Footer/>
		</div>
	);
};

export default Home;
