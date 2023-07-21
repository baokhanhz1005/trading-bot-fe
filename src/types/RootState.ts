
import { RootStateGeneral, TGeneral } from "app/modules/Dashboard/containers/General/type";
import { LoginProps, RootStateLogin } from "app/modules/Login/type";
export interface RootState {
  account?: RootStateLogin;
  'state-module-general'?: RootStateGeneral,
}
