import { ROUTES } from "constants/routes";
import { generatePath } from "react-router-dom";

export const getLinkFromKey = (key: string, params: any) => {
  try {
    let url = "";

    if (key && params) {
      Object.values(ROUTES).forEach((route: any) => {
        if (route.key && route.key === key) {
          let path = route.path;

          path = path && generatePath(path, params);

          url = path;
        }
      });
    }

    return url;
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};
