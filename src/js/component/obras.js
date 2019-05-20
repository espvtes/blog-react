import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export class Obras extends React.Component {
	render() {
		return (
			<div
				className="row obras"
				id="obras"
				style={{
					backgroundImage:
						"url('https://chainimage.com/images/download-texture-paint-texture-paints-background-download-photo.jpg')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat"
				}}>
				<div className="col-12 py-4">
					<div className="container  py-4">
						<div className="row">
							<div className="col-12">
								<h2 className="text-dark">Obras...</h2>
							</div>
						</div>
						<div className="row pt-4">
							<div className="col-12 col-md-4">
								<img
									src="https://devilartstudios.files.wordpress.com/2016/01/dirk-dzimirsky-04.jpg"
									className="img-fluid w-100 rounded"
								/>
							</div>
							<div className="col-12 col-md-4">
								<img
									src="https://devilartstudios.files.wordpress.com/2016/01/dirk-dzimirsky-04.jpg"
									className="img-fluid w-100 rounded"
								/>
							</div>
							<div className="col-12 col-md-4">
								<img
									src="https://devilartstudios.files.wordpress.com/2016/01/dirk-dzimirsky-04.jpg"
									className="img-fluid w-100 rounded"
								/>
							</div>
						</div>
						<div className="row pt-2">
							<div className="col-12 col-md-4">
								<img
									src="https://devilartstudios.files.wordpress.com/2016/01/dirk-dzimirsky-04.jpg"
									className="img-fluid w-100 rounded"
								/>
							</div>
							<div className="col-12 col-md-4">
								<img
									src="https://devilartstudios.files.wordpress.com/2016/01/dirk-dzimirsky-04.jpg"
									className="img-fluid w-100 rounded"
								/>
							</div>
							<div className="col-12 col-md-4">
								<img
									src="https://devilartstudios.files.wordpress.com/2016/01/dirk-dzimirsky-04.jpg"
									className="img-fluid w-100 rounded"
								/>
							</div>
						</div>
						<div className="row py-4">
							<div className="col-12 text-center">
								<Link to="/gallery">
									<button type="button" className="logo-comp">
										<h4>Galeria</h4>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
