import "../../src/App.css";
import { Link } from "react-router";
import "./MakingOf-page.css";

function MakingOfPage() {
	return (
		<div className="making-of-page">
			<div className="banner-rapunzel">
				<h1>Making-of — Rapunzel</h1>
				<img
					src="./banner_makingof.jpg"
					alt="Rapunzel Banner"
					id="banner"
				/>
			</div>
			<div className="video">
				<h3>Explainer video</h3>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/So9o_CROe_Y?si=Bb2iNXYuuIUVnnwf"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
			<div className="description">
				<h3>description</h3>
				<p>
					Scroll through the enchanted forest where Snow White’s story unfolds
					in layers of depth and wonder. Watch the poison apple float gently
					towards you, while woodland creatures slide in from the sides. As you
					move through the page, the Evil Queen’s mirror whispers secrets, and
					dwarves pop up from behind trees with helpful tips about the world of
					front-end magic. With parallax scrolls and animated charm, this tale
					isn’t just told — it’s experienced.
				</p>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<Link to="/sprookje">Visite website</Link>
			</div>
		</div>
	);
}

export default MakingOfPage;
