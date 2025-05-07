import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default Layout;
