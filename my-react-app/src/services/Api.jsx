import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; 


export const getComponents = () => axios.get('${API_BASE_URL}/components/');
export const createComponent = (data) => axios.post('${API_BASE_URL}/components/, data');

export const getVehicles = () => axios.get('${API_BASE_URL}/vehicles/');
export const createVehicle = (data) => axios.post('${API_BASE_URL}/vehicles/, data');

export const getRepairs = () => axios.get('${API_BASE_URL}/repairs/');
export const createRepair = (data) => axios.post('${API_BASE_URL}/repairs/, data');

// export const getVehicles = () => axios.get(`${API_BASE_URL}/vehicles/`);
