import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer } from './redux/reducers/userReducers';
// import { 
//     productsListReducer, 
//     categoryListReducer 
// } from './redux/reducers/productReducers';
import { notificationsReducer } from './redux/reducers/settingsReducers';
import { cashboxGetReducer } from './redux/reducers/cashboxReducers';
import { getStoreReducer } from './redux/reducers/storeReducers';
import { sellModalReducer } from './redux/reducers/modalReducers';
import { invoiceReducer } from './redux/reducers/InvoiceReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    productList: productsListReducer,
    notificationList: notificationsReducer,
    cashboxGet: cashboxGetReducer,
    storeInfo: getStoreReducer,
    sellOpen: sellModalReducer,
    categoryList: categoryListReducer,
    invoice: invoiceReducer,
})

const userInfoStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store