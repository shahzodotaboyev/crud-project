import View from "./View";
class PaginationView extends View {
  constructor() {
    super();
    this._parentElement = document.getElementById("pagination");
  }

  nextPage(handler) {
    this._parentElement.addEventListener("click", (event) => {
      const paginationPrev = event.target.closest("#page-prev");
      if (!paginationPrev) return;
      handler(+paginationPrev.dataset.page - 1);
    });
  }

  prevPage(handler) {
    this._parentElement.addEventListener("click", (event) => {
      const paginationNext = event.target.closest("#page-next");
      if (!paginationNext) return;
      handler(+paginationNext.dataset.page + 1);
    });
  }

  getCurrentPage(handler) {
    this._parentElement.addEventListener("click", (event) => {
      const paginationItem = event.target.closest("#page-number");
      if (!paginationItem) return;
      handler(paginationItem.innerText);
    });
  }

  renderPagination(metaData) {
    if (Object.keys(metaData).length >= 1) {
      this._clear();
      this._parentElement.innerHTML = "";
      const { total_items, per_page, current_page, total_pages } = metaData;
      const maxAmountUsersPerPage = per_page * current_page;
      const lastUserPerPage =
        total_items > maxAmountUsersPerPage
          ? maxAmountUsersPerPage
          : total_items;
      const firstUserPerPage = maxAmountUsersPerPage - per_page + 1;

      const paginationNumbers = [];
      // for(let i = 0; i <= Math.ceil(total_items / per_page); i++) {
      //     paginationNumbers.push(i)
      // }
      for (let i = 1; i <= total_pages; i++) {
        paginationNumbers.push(i);
      }
      const paginationItems = paginationNumbers
        .map((pagination) => {
          return `<li class="page-item">
          <button id="page-number" class="page-link text-secondary ${
            current_page === pagination &&
            "text-black text-decoration-underline"
          } ">
            ${pagination}
          </button>
        </li>`;
        })
        .join("");
      const paginationHtml = `
          <div id="pagination-showing">
           <p class="fs-6 fw-lighter">
            Showing <span class="fw-bolder"> ${firstUserPerPage} to ${lastUserPerPage} of ${total_items} </span> Users
          </p>
         </div>
        <div id="pagination-amount">
        ${total_items > 8 ?
          `
               <ul class="pagination pagination-sm">
            <li class="page-item">
              <button id="page-prev" data-page=${current_page} ${
        current_page === 1 && "disabled"
      } class="page-link ${
        current_page > 1 ? "text-black" : "text-secondary"
      }" >&lt;</button>
            </li>
            ${paginationItems}
            <li class="page-item">
              <button id="page-next" data-page=${current_page} ${
        current_page >= total_pages && "disabled"
      } class="page-link ${
        current_page < total_pages ? "text-black" : "text-secondary"
      }  " >&gt;</button>
            </li>
          </ul>`
          : ``
        }
     
        </div>
    `;
      this._parentElement.insertAdjacentHTML("beforeend", paginationHtml);
    } else {
      this._clear();
    }
  }
}

export const paginationView = new PaginationView();
