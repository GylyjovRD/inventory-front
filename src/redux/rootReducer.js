import { combineReducers } from "redux";

import { userReducer } from './reducers/userReducer'
import { errorReducer } from './reducers/errorReducer'
import { loadingReducer } from './reducers/loadingReducer'
import { productsReducer } from "./reducers/productsReducer";
import { notificationsReducer } from "./reducers/notificationsReducer";
import { satyshReducer } from "./reducers/satyshReducer";
import { invoiceListReducer } from "./reducers/invoiceListReducer";
import { soldReducer } from "./reducers/soldReducer";
import { sidebarReducer } from "./reducers/sidebarReducer";
import { transferReducer } from "./reducers/transferReducer";
import { stockProductsReducer } from "./reducers/stockProductsReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    loading: loadingReducer,
    products: productsReducer,
    notifications: notificationsReducer,
    satysh: satyshReducer,
    invoiseList: invoiceListReducer,
    sold: soldReducer,
    sidebar: sidebarReducer,
    transfer: transferReducer,
    stockProducts: stockProductsReducer
    ,
})