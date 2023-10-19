import axios from "~/axios/api/apiApp";

const getAllUser = () => {
  return axios.get(`/user`);
};

export { getAllUser };
