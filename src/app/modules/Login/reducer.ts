import { produce } from "immer";
import { MODULE_CONFIG } from "./config";
import { actions } from "./actions";

type TInitialState = {
    user: any,
    isLoggingIn: boolean
}
export const initialState: () => TInitialState = () => ({
  user: {},
  isLoggingIn: false,
});

const PREFIX = MODULE_CONFIG.key;

const loginReducer = (state = initialState(), action: any) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case `${PREFIX}${actions.LOGIN_SUCCESS}`:
        const { data } = action.payload;
        draft.user = data;
        draft.isLoggingIn = true;

        return;

      default:
        return state;
    }
  });
};

export default loginReducer;
