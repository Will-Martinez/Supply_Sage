import "./index.css";
import imagem from "../../Public/images/Home/supply_control_logo.png"
import billing from "../../Public/images/Home/billing.png";
import users from "../../Public/images/Home/user_management.png"

function RedirectProducts() {
    window.location.href = "/products";
}

export default function Home() {
    return (
        <div className="card-deck">
            <div className="card" id="card_products">
                <div className="card-content">
                    <img src={imagem}></img>
                    <div className="content">
                        <hr></hr>
                        <p>
                            <h4>Inventory Module</h4>
                        </p>
                        <p>
                            <button onClick={RedirectProducts} type="button" className="button is-primary is-rounded is-normal is-outlined">
                                Access
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <div className="card" id="card_products">
                <div className="card-content">
                    <img src={billing}></img>
                    <div className="content">
                        <hr></hr>
                        <p>
                            <h4>Invoice Module</h4>
                        </p>
                        <p>
                            <button type="button" className="button is-primary is-rounded is-normal is-outlined">
                                Access
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <div className="card" id="card_products">
                <div className="card-content">
                    <img src={users}></img>
                    <div className="content">
                        <hr></hr>
                        <p>
                            <h4>Users Module</h4>
                        </p>
                        <p>
                            <button type="button" className="button is-primary is-rounded is-normal is-outlined">
                                Access
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}