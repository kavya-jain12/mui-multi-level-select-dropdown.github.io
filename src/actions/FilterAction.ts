import { filterTypes } from "src/reducer/InitialStateType"

export const resetDepthAction = (obj: { depth: number, category: filterTypes[] }) => {
    return {
        type: 'RESET_DEPTH',
        payload: obj
    }
}
export const nextDepthAction = (obj: { depth: number, category: filterTypes[] }) => {
    return {
        type: 'NEXT_DEPTH',
        payload: obj
    }
}

export const prevDepthAction = (obj: { depth: number, category: filterTypes[] }) => {
    return {
        type: 'PREV_DEPTH',
        payload: obj
    };
}

export const updateValueAction = (obj: { category: filterTypes[] }) => {
    return {
        type: 'UPDATE_VALUE',
        payload: obj
    };
}