import "./index.css";
import imagem from "../../Public/images/Home/supply_control_logo.png"

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
                            <h4>Controle de estoque</h4>
                        </p>
                        <p>
                            <button onClick={RedirectProducts} type="button" className="button is-primary is-rounded is-normal is-outlined">
                                Acessar
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}