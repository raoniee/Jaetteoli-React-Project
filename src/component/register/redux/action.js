import { STORE_INFO, MENU_INFO, ORIGIN_INFO } from './actionTypes';

export function setStoreInfo(props) {
    return {
        type: STORE_INFO,
        ...props
    };
}

export function setMenuInfo(props) {
    return {
        type: MENU_INFO,
        ...props
    };
}

export function setOriginInfo(props) {
    return {
        type: ORIGIN_INFO,
        ...props
    };
}

