import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

// Pages
import Login from "./pages/login";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
