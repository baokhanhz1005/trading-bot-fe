export type TGeneral = {

} 

export interface IinitAction {
    type: string,
    payload: {
        isLoading: boolean,
    }
}
export interface RootStateGeneral {
    isLoading: boolean,
}