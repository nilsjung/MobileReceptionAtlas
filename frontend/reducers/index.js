import {
    FETCH_RESULT,
    SHOW_MAP,
} from './../components/ButtonField/ButtonField.Action';
import { UPDATE_GPS } from '../components/GPSInfo/GPSInfo.Action';

const initialState = {
    data: [],
    currentInformation: {
        locationX: 10.11,
        locationY: 12.13,
        signal: 100,
        provider: 'Undefinied',
    },
    showingMap: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULT:
            return { ...state, array: action.payload.result };
        case UPDATE_GPS:
            return {
                ...state,
                currentInformation: {
                    ...state.currentInformation,
                    locationX: action.payload.x,
                    locationY: action.payload.y,
                },
            };
        case SHOW_MAP:
            return {
                ...state,
                showingMap: action.payload,
            };
        default:
            return state;
    }
}
