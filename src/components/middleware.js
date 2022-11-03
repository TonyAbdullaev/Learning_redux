import {CREATE_POST} from "../redux/types";
import {showAlert} from "../redux/actions";

const forbidden = ['fuck', 'spam', 'black', 'php'];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert("You're spammer. We haven't invite you so go home!"))
                }
            }
            return next(action)
        }
    }
}