import "./index.css";

function CloseModal() {
    const productModal = document.getElementById("product_modal");
    const closeModal = document.getElementById("close_modal");
    closeModal.addEventListener("click", () => {
        productModal.classList.remove("is-active");
    })
}

export function OpenModal(productName, rowData) {
    console.log("Row Data: ", rowData);
    const productModal = document.getElementById("product_modal");
    const modalTitle = document.getElementById("modal_title");

    productModal.classList.add("is-active");
    modalTitle.textContent = `Product: ${productName}`;

    const modalBody = document.getElementById("modal_body");
    modalBody.innerHTML = "";

    Object.entries(rowData).forEach(([key, value]) => {
        if (key == "id") {
            return;
        }
        const label = document.createElement("label");
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        if (label.textContent == "ProductName") label.textContent = "Product Name";
        label.className = "label";

        const input = document.createElement("input");
        if (value == true) value = "Yes";
        if (value == false) value = "No";
        input.value = value;
        input.className = "input is-rounded";

        const br = document.createElement("br");
        modalBody.appendChild(label);
        modalBody.appendChild(input);
        modalBody.appendChild(br);
    });
}

export default function ProductModal({ data }) {
    return (
        <div className="modal" id="product_modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title" id="modal_title"></p>
                </header>
                <section className="modal-card-body" id="modal_body">
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success is-rounded is-outlined">Save changes</button>
                    <button className="button is-danger is-rounded is-outlined">Delete product</button>
                    <button onClick={CloseModal} className="button is-dark is-rounded" id="close_modal">Close</button>
                </footer>
            </div>
        </div>
    );
}