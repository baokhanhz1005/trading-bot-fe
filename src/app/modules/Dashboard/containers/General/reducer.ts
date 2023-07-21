import { produce } from "immer";
import { Types } from "./actions";

export const initialState = () => ({
  isLoading: true,
});

const mainReducer = (state = initialState(), action: any) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case Types.INIT:
        const { isLoading } = payload;
        draft.isLoading = isLoading;
        break;
    }
  });
};

export default mainReducer;
