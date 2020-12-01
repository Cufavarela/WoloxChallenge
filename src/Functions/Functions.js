import axios from "axios";

export const getList = async () => {
  return await axios.get(
    "https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs"
  );
};
