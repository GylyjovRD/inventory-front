import {
    SELL_MODAL_OPEN,
    SELL_MODAL_CLOSE
} from '../../constants/redux/modalConstants';

export const sellModalOpen = () => async (dispatch) => {
    dispatch({type: SELL_MODAL_OPEN})
}

export const sellModalClose = () => async (dispatch) => {
    dispatch({type: SELL_MODAL_CLOSE})
}