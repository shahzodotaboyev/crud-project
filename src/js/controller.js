import "../sass/styles.scss";
import * as bootstrap from "bootstrap";
import { getAllUsers, createUser, deleteUser, usersData } from "./model";
import {
  addFormView,
  tableView,
  searchFormView,
  actionsView,
  paginationView,
} from "./view/";
// Loading users
const poginationQuries = function (number = 1) {
  return {
    page: number,
    limit: 8,
  };
};
async function controllerLoadUsers(query) {
  tableView.renderSpiner();
  await getAllUsers(query);
  tableView.renderTable(usersData.users);
  paginationView.renderPagination(usersData.meta);
}

const controllerSearchUser = function (name) {
  controllerLoadUsers({ fullname: name });
};

const controllerCancelSearchUser = function () {
  controllerLoadUsers(poginationQuries());
};

//subscriber function
const controllerCreatUser = async function (newUser) {
  const response = await createUser(newUser);
  if (response.status === 201) {
    controllerLoadUsers(poginationQuries());
  }
};
const controllerDeleteUser = async (id) => {
  const response = await deleteUser(id);
  if (response.status === 200) {
    controllerLoadUsers(poginationQuries());
  }
};

const controllerFindCurrentPage = (number) => {
  if (!isNaN(number)) controllerLoadUsers(poginationQuries(number));
};
const INIT = function () {
  controllerLoadUsers(poginationQuries());
  addFormView.createUserHandler(controllerCreatUser);
  searchFormView.searchUserHandler(controllerSearchUser);
  searchFormView.cancelSearchUserHandler(controllerCancelSearchUser);
  actionsView.deleteUser(controllerDeleteUser);
  paginationView.getCurrentPage(controllerFindCurrentPage);
  paginationView.prevPage(controllerFindCurrentPage);
  paginationView.nextPage(controllerFindCurrentPage);
  actionsView.createUser(addFormView.renderFormElements);
};

INIT();
