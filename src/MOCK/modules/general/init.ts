export const GeneralServices = (data: any) => {
    return new Promise((res, rej) => {
        const data = {
            code: 200,
            data: {},
            message: 'success'
        }
        res(data);
    })
}