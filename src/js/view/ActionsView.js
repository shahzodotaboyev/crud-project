class ActionsView {
  #tableBody;
  #createForm;
  #addBtn;
  #editBtn;
  #editForm;
  constructor() {
    this.#tableBody = document.querySelector("#table-body");
    this.#createForm = document.getElementById("form-create");
    this.#addBtn = document.querySelector("#add-btn");
  }
  createUser(handler) {
    const addForm = this.#createForm;
    this.#addBtn.addEventListener("click", function () {
      addForm.innerHTML = "";
      const formElements = handler();
      addForm.insertAdjacentHTML('beforeend', formElements)
    });
  }
  editUSer() {}
  deleteUser(handler) {
    this.#tableBody.addEventListener("click", function (event) {
      const btnDelete = event.target.closest("#btn-delete");
      if (!btnDelete) return;
      if (window.confirm(`Siz bu foydalanuvchini o'chirmoqchmisiz`)) {
        const btnId = btnDelete.dataset.btnId;
        if (btnId) handler(btnId);
      }
    });
  }
}
export const actionsView = new ActionsView();
