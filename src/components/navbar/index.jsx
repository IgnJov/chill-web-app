import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarComponent() {
	return (
		<div id="navbar">
			<Navbar expand="lg" className="bg-dark py-3">
				<Container>
					<Navbar.Brand href="#home">
						<img src="src\assets\chill-icon.svg" alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#series" className="text-white px-5">
								Series
							</Nav.Link>
							<Nav.Link href="#link" className="text-white px-5">
								Film
							</Nav.Link>
							<Nav.Link href="#datar-saya" className="text-white px-5">
								Daftar Saya
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<div className="position-relative" style={{ width: "180px" }}>
						<div className="d-flex justify-content-center align-items-center">
							<img
								className="rounded-circle"
								style={{ width: "40px" }}
								src="src\assets\profile-image.png"
								alt=""
							/>
							<button className="bg-transparent border-0">
								<img src="src\assets\arrow-down.svg" alt="" className="ms-2" />
							</button>
						</div>
						<div
							className="dropdown-container w-100 position-absolute d-flex flex-column bg-dark"
							style={{ top: "50px" }}
						>
							<a href="" className="p-3 text-decoration-none">
								<img
									src="src\assets\profile-icon.svg"
									alt=""
									className="me-3"
									style={{ width: "20px" }}
								/>
								Profil Saya
							</a>
							<a href="" className="p-3 text-decoration-none text-white">
								<img
									src="src\assets\star-icon.svg"
									alt=""
									className="me-3"
									style={{ width: "20px" }}
								/>
								Ubah Premium
							</a>
							<a href="" className="p-3 text-decoration-none text-white">
								<img
									src="src\assets\exit-icon.svg"
									alt=""
									className="me-3"
									style={{ width: "20px" }}
								/>
								Keluar
							</a>
						</div>
					</div>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavbarComponent;
