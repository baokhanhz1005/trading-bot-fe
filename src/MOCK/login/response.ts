export const ServicesLoginMOCK = async (params: any) => {
  return new Promise((resolve, reject) => {
    const { email, password } = params;

    if (email === "baokhanhz1005@gmail.com" && password === "AuldLangSYnE08P") {
        
        const res = {
          code: 200,
          data: {
            userId: 1200002,
            token: "q3uoi3oiu3jkjh3gahjgiu2ou3",
            isSuccess: true,
            userName: "Nguyễn Bảo Khánh",
            email: "baokhanhz1005@gmail.com",
            phone: "0918130023",
          },
          message: "Success.",
        };
    
        resolve(res);
    } else {
        const res = {
            code: 400,
            data: {},
            message: "Login failed."
        }
        resolve(res);
    }
  });
};
