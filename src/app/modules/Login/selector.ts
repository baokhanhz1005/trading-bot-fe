import { createSelector } from "reselect";
import { MODULE_CONFIG } from "./config";
import { initialState } from "./reducer";
import { RootState } from "types";

const selectMainAccountLogin = (state: RootState) =>
  state ? state.account : initialState();

const makeSelectUserAccount = () =>
  createSelector(selectMainAccountLogin, (substate: any) => substate.user);

export default selectMainAccountLogin;

export { makeSelectUserAccount };
