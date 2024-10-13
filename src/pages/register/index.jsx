import RegisterForm from "../../components/register-form/index.jsx";
import "../../style.css";

function Register() {
	return (
		<div
			id="register-page"
			className="main-container vh-100 d-flex justify-content-center align-items-center"
		>
			<div
				className="form-container rounded-3 p-4 text-white"
				style={{ width: "400px", backgroundColor: "rgba(24, 26, 28, 0.84)" }}
			>
				<div className="form-header text-center">
					<img
						style={{ width: "150px" }}
						className="mb-3"
						src="src\assets\chill-icon.svg"
						alt=""
					/>
					<h3>Daftar</h3>
					<p>Selamat datang!</p>
				</div>

				<RegisterForm />
			</div>
		</div>
	);
}

export default Register;
