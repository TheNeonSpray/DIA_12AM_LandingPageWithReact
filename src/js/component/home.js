import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

//create your first component
export function Home() {
	return (
		<div className="principal-container">
			<Navbar />
			<div className="content-container">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
