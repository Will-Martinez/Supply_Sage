import DeleteProduct from "../../API/Services/Products/DeleteProduct";
import toast from "react-hot-toast";

async function HandleDeleteProduct(id) {
    try {
        const productModal = document.getElementById("product_modal");
        await DeleteProduct(id);
        toast.success("Product deleted.");
        setTimeout(() => {
            CloseConfirmModal();
        }, 1000);
        setTimeout(() => {
            productModal.classList.remove("is-active");
        }, 1500);
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    } catch (error) {
        const productModal = document.getElementById("product_modal");
        toast.error(`Error: ${error.response.data.message}`);
        setTimeout(() => {
            CloseConfirmModal();
        }, 1000);
        setTimeout(() => {
            productModal.classList.remove("is-active");
        }, 1500);
        setTimeout(() => {
            window.location.reload()
        }, 2000);
        return;
    }
}

export function OpenConfirmModal(productId) {
    const confirmModal = document.getElementById("confirm_modal");
    confirmModal.classList.add("is-active");
    
    const confirmDelete = document.getElementById("confirm_delete");
    confirmDelete.addEventListener("click", () => {
        HandleDeleteProduct(productId);
    });
}

export function CloseConfirmModal() {
    const confirmModal = document.getElementById("confirm_modal");
    confirmModal.classList.remove("is-active");
}

export default function ConfirmModal() {
    return (
        <div className="modal" id="confirm_modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <h1>Are you sure ?</h1>
                </section>
                <footer className="modal-card-foot">
                    <button id="confirm_delete" className="button is-success is-rounded is-outlined">Yes</button>
                    <button onClick={CloseConfirmModal} className="button is-dark is-rounded">No</button>
                </footer>
            </div>
        </div>
    )
}