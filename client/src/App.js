import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/index";
import Main from "./components/Main/index";
import Signup from "./components/Signup/index";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;