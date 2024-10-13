import Form from "react-bootstrap/Form";

const registerForm = () => {
	return (
		<div>
			<Form>
				<Form.Group className="mb-4" controlId="username-input">
					<Form.Label>Username</Form.Label>
					<Form.Control
						className="rounded-4"
						type="text"
						placeholder="Masukan username"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="password-input">
					<Form.Label>Kata Sandi</Form.Label>
					<Form.Control
						className="rounded-4"
						type="password"
						placeholder="Masukan kata sandi"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="password-confirmation-input">
					<Form.Label>Konfirmasi Kata Sandi</Form.Label>
					<Form.Control
						className="rounded-4"
						type="password"
						placeholder="Masukan kata sandi"
					/>
				</Form.Group>
				<div className="d-flex justify-content-between mb-4">
					<span>
						Sudah Punya Akun?{" "}
						<a className="text-decoration-none" href="/login">
							Masuk
						</a>
					</span>
				</div>
				<div className="d-flex flex-column justify-content-center">
					<button type="submit" className="btn btn-secondary rounded-4">
						Daftar
					</button>
					<p className="text-center my-1">Atau</p>
					<button className="btn btn-outline-secondary rounded-4">
						Daftar dengan Google
					</button>
				</div>
			</Form>
		</div>
	);
};

export default registerForm;
