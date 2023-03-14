import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./views/Homepage";
import { db } from "./firebaseConfig";
function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
		</div>
	);
}

export default App;
