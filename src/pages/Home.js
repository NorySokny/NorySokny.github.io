import logo from "../logo.svg";
import Button from '../components/form/Button'

const Home = () => {
	const credentails = {
		name: "John",
		username: "soknynary@gmail.com",
		password: "1234",
	};

	return (
		<>
			<header className="App-header">
				<h1>{credentails.name}</h1>
				<img src={logo} className="App-logo" alt="logo" />
				{/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
            <Button text="Subscript Me"/>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</>
	);
};

export default Home;
