import axios from 'axios';
import authHeader from '../Auth/auth-header';

const API_URL = "http://imukaneza.herokuapp.com/api/v1/";

class RideService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    // createRide(data) {
    //     return axios.post(API_URL + 'riders/create', data, { headers: authHeader() });
    // }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    createRide(ride, packaging, departure, destination) {
        const data = {
            ride: ride,
            packaging: packaging,
            departure: departure,
            destination: destination

        }
        return axios.post(API_URL + "riders/create", data, { headers: authHeader() });
    }
    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new RideService();