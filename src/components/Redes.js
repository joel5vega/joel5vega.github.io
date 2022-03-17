import React from "react";
import { Link } from "react-router-dom";
 const Redes = () => {
    return (
        <div className="container">
            Redes
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Redes</h5>
                            <p className="card-text">
                                {/* <Link to="/redes/facebook">Facebook</Link> */}
                            </p>
                            <p className="card-text">
                                {/* <Link to="/redes/instagram">Instagram</Link> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Redes;