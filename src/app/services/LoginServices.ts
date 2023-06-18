import { ServicesLoginMOCK } from "MOCK/login/response";


const api = {   
    login: async (params: any) => {
        const res = await ServicesLoginMOCK(params);
        return res;
    }
};

export default api;