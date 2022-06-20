import React, { useState } from "react";
import "./styles/index.scss";

import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
	DashboardSVG,
	DiscountSVG,
	HomeSVG,
	LogoSVG,
	MessageSVG,
	NotificationSVG,
	SettingSVG,
	SignOutSVG,
} from "./assets/svg";
import Home from "./pages/Home";

function App() {
	const pathname = window.location.pathname;
	const colorSVG = "#EA7C68";
	const activeColorSVG = "white";

	const [activeLink, setActiveLink] = useState(
		pathname.replace(/\//, "") || "home"
	);

	return (
		<div className="App">
			<Router>
				<Helmet>
					<title>Jaedar Food</title>
					<script src="https://scripts.sirv.com/sirv.js"></script>
				</Helmet>
				<div className="wrapper">
					{/* <nav className="sidebar-router">
						<ul className="sidebar-router-logo">
							<li>
								<Link to="/">
									<LogoSVG fill={colorSVG} width={30} height={30} />
								</Link>
							</li>
						</ul>

						<ul className="sidebar-router-nav">
							<li
								data-active={activeLink === "home"}
								onClick={() => setActiveLink("home")}
							>
								<Link to="/">
									<HomeSVG
										fill={activeLink === "home" ? activeColorSVG : colorSVG}
									/>
								</Link>
							</li>
							<li
								data-active={activeLink === "discount"}
								onClick={() => setActiveLink("discount")}
							>
								<Link to="/discount">
									<DiscountSVG
										fill={activeLink === "discount" ? activeColorSVG : colorSVG}
									/>
								</Link>
							</li>
							<li
								data-active={activeLink === "dashboard"}
								onClick={() => setActiveLink("dashboard")}
							>
								<Link to="/dashboard">
									<DashboardSVG
										fill={
											activeLink === "dashboard" ? activeColorSVG : colorSVG
										}
									/>
								</Link>
							</li>
							<li
								data-active={activeLink === "message"}
								onClick={() => setActiveLink("message")}
							>
								<Link to="/message">
									<MessageSVG
										fill={activeLink === "message" ? activeColorSVG : colorSVG}
									/>
								</Link>
							</li>
							<li
								data-active={activeLink === "notification"}
								onClick={() => setActiveLink("notification")}
							>
								<Link to="/notification">
									<NotificationSVG
										fill={
											activeLink === "notification" ? activeColorSVG : colorSVG
										}
									/>
								</Link>
							</li>
							<li
								data-active={activeLink === "setting"}
								onClick={() => setActiveLink("setting")}
							>
								<Link to="/setting">
									<SettingSVG
										fill={activeLink === "setting" ? activeColorSVG : colorSVG}
									/>
								</Link>
							</li>
						</ul>

						<ul className="sidebar-router-sign-out">
							<li>
								<SignOutSVG fill={colorSVG} />
							</li>
						</ul>
					</nav> */}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/discount">{/* <Discount /> */}</Route>
						<Route path="/dashboard">{/* <Dashboard /> */}</Route>
						<Route path="/message">{/* <Message /> */}</Route>
						<Route path="/notification">{/* <Notification /> */}</Route>
						<Route path="/setting">{/* <Setting /> */}</Route>

						<Route path="*">{/* <NotFound /> */}</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
