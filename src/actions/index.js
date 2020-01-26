import { CHECK_TODOITEM } from "../constants";

export function checkTodoItem(payload) {
    return {
        type: CHECK_TODOITEM,
        payload
    }
}