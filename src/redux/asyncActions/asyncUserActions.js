import { ConstantLink } from "../../constantLink"
import { clearError, setError } from "../actions/errorActions"
import { setLoading } from "../actions/loadingActions"
import { loginUser } from "../actions/userActions"

export const asyncLoginUser = (data) => {
    return function (dispatch) {
        console.log(data)
        dispatch(setLoading(true))
        fetch(ConstantLink + '/api/auth/login/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                if (json.access) {
                    dispatch(loginUser(json))
                    dispatch(clearError())
                    localStorage.setItem('user', JSON.stringify(json))
                } else {
                    dispatch(setError('Sizin logininiz yada porolynyz yalnysh. Tazeden synanyshyn!'))
                }
            })
            .catch(() => dispatch(setError('Sizin internet baglanyshygynyzda mesele yuze chykdy. Tazeden')))
            .finally(() => dispatch(setLoading(false)))
    }
}