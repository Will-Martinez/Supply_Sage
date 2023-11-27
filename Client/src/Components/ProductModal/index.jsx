import "./index.css";
import GetCategories from "../../API/Services/Categories/GetCategories";
import UpdateProduct from "../../API/Services/Products/UpdateProduct";
import ConfirmModal, { OpenConfirmModal } from "../ConfirmModal";
import toast from "react-hot-toast";

var productId;

function HandleOpenConfirmModal() {
    OpenConfirmModal(productId)
}

async function HandleCategories() {
    try {
        return await GetCategories();
    } catch (error) {
        toast.error(`Failed trying to handle categories: ${error.message}`);
    }
}

function AutoCloseModal() {
    const productModal = document.getElementById("product_modal");
    productModal.classList.remove("is-active");
}

function ManualCloseModal() {
    const productModal = document.getElementById("product_modal");
    const closeModal = document.getElementById("close_modal");
    closeModal.addEventListener("click", () => {
        productModal.classList.remove("is-active");
    })
}

async function SaveModalChanges() {
    try {
        const selectCategory = document.getElementById("category_input");
        const productNameInput = document.getElementById("productName_input");
        const amountInput = document.getElementById("amount_input");
        const priceInput = document.getElementById("price_input");
        const availableInput = document.getElementById("available_input");

        const objData = {
            category: selectCategory.options[selectCategory.selectedIndex].value,
            productName: productNameInput.value,
            amount: Number(amountInput.value),
            price: Number(priceInput.value),
            available: availableInput.value
        }

        if (objData.available.toLowerCase() == "yes") {
            objData.available = true
        } else {
            objData.available = false;
        }
        await UpdateProduct(productId, objData);
        toast.success("Changes saved successfully!");
        setTimeout(() => {
            AutoCloseModal();
        }, 1000)
        setTimeout(() => {
            window.location.reload();
        },2000)
    } catch (error) {
        toast.error(`Error: ${error.response.data.message}`);
        return;
    }

}

async function SetCategories() {
    const categories = await HandleCategories();
    const categoryNames = categories.data.objectResult;
    const selectCategory = document.getElementById("modal_body");
    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Category";
    selectCategory.appendChild(selectLabel);

    const selectElement = document.createElement("div");
    selectElement.className = "select is-rounded";

    const selectControl = document.createElement("select");
    selectControl.id = "category_input";

    categoryNames.forEach(category => {
        const optionElement = document.createElement("option");
        optionElement.value = category.name;
        optionElement.textContent = category.name;
        selectControl.appendChild(optionElement);
    });
    selectElement.appendChild(selectControl);
    selectCategory.appendChild(selectElement);
}

export function OpenModal(productName, rowData) {
    productId = rowData.id;
    const productModal = document.getElementById("product_modal");
    const modalTitle = document.getElementById("modal_title");

    productModal.classList.add("is-active");
    modalTitle.textContent = `Product: ${productName}`;

    const modalBody = document.getElementById("modal_body");
    modalBody.innerHTML = "";

    SetCategories();

    Object.entries(rowData).forEach(([key, value]) => {
        if (key == "id" || key == "category") return;

        const label = document.createElement("label");
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        if (label.textContent == "ProductName") label.textContent = "Product Name";
        label.className = "label";

        const input = document.createElement("input");
        input.id = `${key}_input`
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

export default function ProductModal() {
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
                    <button onClick={SaveModalChanges} className="button is-success is-rounded is-outlined">Save changes</button>
                    <button onClick={HandleOpenConfirmModal} className="button is-danger is-rounded is-outlined">Delete product</button>
                    <button onClick={ManualCloseModal} className="button is-dark is-rounded" id="close_modal">Close</button>
                </footer>
            </div>
            <ConfirmModal />
        </div>
    );
}