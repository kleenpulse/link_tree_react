import "./App.scss";
import { github, slack, zuri, I4G } from "./assets";
function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="link__img">
					<img
						height={100}
						width={100}
						src="/hero.jpg"
						alt="profile photo"
						id="profile__img"
					/>
					<p id='twitter'>kleen_pulse</p>
					<p id="slack">Isaac Gideon</p>
				</div>
				<div className="links">
					<a
						href="https://twitter.com/kleen_pulse"
						target="_blank"
					>
						Twitter Link
					</a>
					<a href="https://training.zuri.team/" id="btn__zuri" target="_blank">
						Zuri Team
					</a>
					<a href="https://books.zuri.team/" id="books" target="_blank">
						Zuri Books
					</a>
					<a
						href="https://books.zuri.team/python-for-beginners?ref_id=isaacgideon"
						id="book__python"
						target="_blank"
					>
						Python Books
					</a>
					<a href="https://background.zuri.team/" id="pitch" target="_blank">
						background checks on coders
					</a>
					<a
						href="https://books.zuri.team/design-rules"
						id="book__design"
						target="_blank"
					>
						Design Books
					</a>
					<div className="logos">
						<img src={slack} alt="slack" />
						<img src={github} alt="github" />
					</div>
				</div>
			</div>

			<div className="foo">
				<img src={zuri} alt="" className="zuri" />
				<p className="p-text">HNG Internship 9 Frontend Task</p>
				<img src={I4G} alt="" className="zuri" />
			</div>
		</div>
	);
}

export default App;
