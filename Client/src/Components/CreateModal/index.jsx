import PostProduct from "../../API/Services/Products/PostProducts";
import GetCategories from "../../API/Services/Categories/GetCategories";
import toast from "react-hot-toast";

async function HandleCategories() {
    try {
        return await GetCategories();
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

async function CreateProduct() {
    try {
        const categoryInput = document.getElementById("category_input");
        const productNameInput = document.getElementById("productName_input");
        const amountInput = document.getElementById("amount_input");
        const priceInput = document.getElementById("price_input");
        const availableInput = document.getElementById("available_input");

        const productData = {
            category: categoryInput.value,
            productName: productNameInput.value,
            amount: Number(amountInput.value),
            price: Number(priceInput.value),
            available: availableInput.value
        }

        if (productData.available.toLowerCase() == "yes") {
            productData.available = true
        } else {
            productData.available = false;
        }

        const result = await PostProduct(productData);
        toast.success(`Product ${productNameInput.value} created.`);
        setTimeout(() => {
            CloseModal();
            ClearModal();
        }, 1000);

        setTimeout(() => {
            window.location.reload();
        }, 2000)
    } catch (error) {
        toast.error(`Failed trying to create product: ${error.message}`);
        return;
    }
}

function ClearModal() {
    const categoryInput = document.getElementById("category_input");
    const productNameInput = document.getElementById("productName_input");
    const amountInput = document.getElementById("amount_input");
    const priceInput = document.getElementById("price_input");
    const availableInput = document.getElementById("available_input");
    categoryInput.value = "";
    productNameInput.value = "";
    amountInput.value = "";
    priceInput.value = "";
    availableInput.value = "";
}

function CloseModal() {
    const createModal = document.getElementById("create_modal");
    createModal.classList.remove("is-active");
    ClearModal();
}

export async function OpenCreateModal() {
    const createModal = document.getElementById("create_modal");
    createModal.classList.add("is-active");

    const categories = await HandleCategories();
    const categoryNames = categories.data.objectResult;
    const selectCategory = document.getElementById("select_category");

    selectCategory.innerHTML = "";

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

export default function CreateModal() {
    return (
        <div className="modal" id="create_modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title" id="modal_title">Create Product</p>
                </header>
                <section className="modal-card-body" id="modal_body">
                    <label className="label">Category</label>
                    <div id="select_category">

                    </div>
                    <br></br>
                    <label className="label">Product Name</label>
                    <input className="input is-rounded" id="productName_input"></input>
                    <br></br>
                    <label className="label">Amount</label>
                    <input className="input is-rounded" id="amount_input"></input>
                    <br></br>
                    <label className="label">Price</label>
                    <input className="input is-rounded" id="price_input"></input>
                    <br></br>
                    <label className="label">Availabe</label>
                    <input className="input is-rounded" id="available_input"></input>
                    <br></br>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success is-rounded is-outlined" onClick={CreateProduct}>Create</button>
                    <button onClick={CloseModal} className="button is-dark is-rounded" id="close_modal">Close</button>
                </footer>
            </div>
        </div>
    );
}