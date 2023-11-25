import "./index.css";
import imagem from "../../Public/images/Home/supply_control_logo.png"
import billing from "../../Public/images/Home/billing.png";

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
                            <h4>Inventory</h4>
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
                            <h4>Billing</h4>
                        </p>
                        <p>
                            <button type="button" className="button is-primary is-rounded is-normal is-outlined">
                                Access
                            </button>
                            { /* Esse card apenas é usado para exemplificar como ficaria a aplicação com outros módulos */ }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}