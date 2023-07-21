import { createSelector } from "reselect";
import { MODULE_CONFIG } from "./config"
import { initialState } from "./reducer"
import { RootState } from "types";

const selectGeneral = (state: RootState) => {
    return state["state-module-general"] || initialState();
}

export const selectMainGeneral  = createSelector(selectGeneral, substate => substate);