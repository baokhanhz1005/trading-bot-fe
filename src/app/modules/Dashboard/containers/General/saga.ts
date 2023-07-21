import { PayloadAction } from "@reduxjs/toolkit";
import { Types } from "./actions";
import { MODULE_CONFIG } from "./config";
import { call, select, takeLatest } from 'redux-saga/effects'
import { IinitAction } from "./type";
import { selectMainGeneral } from "./selectors";

const PREFIX = MODULE_CONFIG.key;

export default function* workerDashboardGeneral (args: PayloadAction<IinitAction>) {
    yield takeLatest(Types.INIT, handleInit)
};

function* handleInit(args: PayloadAction<IinitAction>) : any {
    console.log('hahahahahaha');
    const general = yield select(selectMainGeneral)
    
    yield call(handleGetDataGeneral)
}

function* handleGetDataGeneral () {
    console.log('hahahaha')
}