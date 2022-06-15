import {
    SELL_MODAL_OPEN,
    SELL_MODAL_CLOSE
} from '../../constants/redux/modalConstants';

export const sellModalReducer = (state = {open: false}, action) => {
    switch(action.type){
        case SELL_MODAL_OPEN:
            return {open: true}
        case SELL_MODAL_CLOSE:
            return {open: false}
        default:
            return state
    }
}