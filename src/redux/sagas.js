import { takeEvery, put, call } from 'redux-saga/effects'
import {FETCHED_POST, REQUEST_POSTS} from "./types";
import {hideAlert, hideLoader, showAlert, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);

}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchedPosts)
        yield put({type: FETCHED_POST, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert("Something went wrong!"))
        yield put(hideLoader())
    }
}

async function fetchedPosts() {
    const response = await fetch('ttps://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}