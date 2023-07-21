import { MODULE_CONFIG } from "./config"
import { IinitAction } from "./type";

const PREFIX = MODULE_CONFIG.key;

export const Types = {
    INIT: `${PREFIX}@@INIT`,
    
}

export const init = (payload: IinitAction['payload']): IinitAction => ({
    type: Types.INIT,
    payload,
})