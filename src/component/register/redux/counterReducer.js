import { STORE_INFO, MENU_INFO, ORIGIN_INFO } from './actionTypes';

const initialStoreInfo = {
    companyName: '',
    businessType: '',
    ownerPhoneNumber: '',
    ownerEmail: '',
    businessRegistrationCertificate: '',
    salespersonRegistrationCertificate: '',
    bankStatementCopy: '',
    operatingHours: '',
    closingDays: '',
    storePhoneNumber: '',
    storeAddress: {
        postalCode: '',
        buildingAddress: '',
        detailAddress: '',
    },
    storeLogo: '',
    storeSignboardPhoto: ''
}

const initialMenuInfo = {
    menus: [
        {
            name: '',
            price: 0,
            ingredients: '',
            description: '',
            photo: ''
        }
    ],
    sideMenus: [
    {
        name: '',
        price: 0,
        ingredients: '',
        description: '',
        photo: ''
    }
    ]
}

const initialOriginInfo = {
    products: [
        {
            name: '',
            origin: '',
            foodName: ''
        }
    ]
};


const initialState = {
    STORE_INFO: initialStoreInfo,
    MENU_INFO: initialMenuInfo,
    ORIGIN_INFO: initialOriginInfo
};

export default function counterReducer(state = initialState, action) {
    const { type, ...data } = action;
    switch (type) {
        case STORE_INFO:
            return {
                ...state, STORE_INFO: { ...state.STORE_INFO, ...data } };
        case MENU_INFO:
            return { ...state, MENU_INFO: { ...state.MENU_INFO, ...data } };
        case ORIGIN_INFO:
            return { ...state, ORIGIN_INFO: { ...state.ORIGIN_INFO, ...data } };
        default:
            return state;
    }
}

