import { createSelector } from "reselect";
import { MODULE_CONFIG } from "./config";
import { initialState } from "./reducer";

const selectMainAccountLogin = (state: any) =>
  state ? state[MODULE_CONFIG.key] : initialState();

const makeSelectUserAccount = () =>
  createSelector(selectMainAccountLogin, (substate) => substate.user);

export default selectMainAccountLogin;

export { makeSelectUserAccount };
