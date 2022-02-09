import axios from 'axios';

const GET_START = 'GET_START';
const GET_ALL = 'GET_ALL';
const GET_BY_NAME = 'GET_BY_NAME';


const getByName = (user) => {
    
    return async (dispatch) => {
        let resp = await axios.get(`http://localhost:3001/api/names?name=${user}`)

        if (user) {
            resp = await axios.get(`http://localhost:3001/api/names?name=${user}`);
        }

        dispatch({type: GET_BY_NAME, payload:resp.data})
    }
};

const getAll = () => {
    return async (dispatch) => {
        const resp = await axios.get('http://localhost:3001/api/names?page=all')
        dispatch({type: GET_ALL, payload:resp.data}) 
    }
};

const getStart = () => {
    return async () => {
        const resp = await axios.get('http://localhost:3001/api/names')
        return {type: GET_START, payload: resp.data}
    }
};

export {getByName, getAll, getStart };