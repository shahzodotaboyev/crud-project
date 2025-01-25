import FormView from "./FormView";

class AddFormView extends FormView {
  #addForm;
  constructor() {
    super();
    this.#addForm = this._forms[1];
  }

  //event bus
  createUserHandler(handler) {
    this.#addForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let firstname = this.firstname.value;
      let dating = this.date.value;
      let phone = this.phone.value;
      let status = this.status.value;
      let mail = this.email.value;
      let address = this.address.value;

      // Formating date

      const date = new Date(dating);
      const options = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      const formattedDate = Intl.DateTimeFormat("en-GB", options).format(date);

      // Format date

      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("date", formattedDate);
      formData.append("status", status);

      formData.append("phone", phone);

      formData.append("email", mail);
      formData.append("address", address);

      this.submit.setAttribute("data-bs-dismiss", "modal");
      this.submit.click();

      handler(formData);
      this.firstname.value = "";
      this.date.value = "";
      this.phone.value = "";
      this.status.value = "";
      this.email.value = "";
      this.address.value = "";
    });
  }
}
export const addFormView = new AddFormView();
