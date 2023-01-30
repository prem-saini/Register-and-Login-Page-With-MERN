

export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const DLT = (id) => {
    return {
        type: "REV_CART",
        payload: id
    }
}

export const REMOVE = (item) => {
    return {
        type: "REV_ONE",
        payload: item
    }
}