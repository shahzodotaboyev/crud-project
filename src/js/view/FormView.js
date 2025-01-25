export default class FromView{
    _forms;
    constructor(){
        this._forms = document.forms;
    }
    renderFormElements(user){
        return `
          <div class="modal-body">
              <div class="mb-3">
                <label for="name" class="form-label">Username</label>
                <input
                  type="text"
                  id="firstname"
                  class="form-control"
                  name="name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  name="date"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select
                  name="status"
                  id="status"
                  aria-label="Default select example"
                  required
                >
                  <option value="Success">Success</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Failed">Failed</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  class="form-control"
                  name="phone"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  name="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  class="form-control"
                  name="address"
                  required
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary text-white"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                id="submit"
                type="submit"
                class="btn btn-success text-white"
              >
                Understood
              </button>
            </div>
        `
    }
}