import axios from 'axios'

const API_URL = "http://imukaneza.herokuapp.com/api/v1/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "users/signin", {
                email,
                password
            })
            .then(response => {
                // console.log(response.data);
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(firstName, lastName, email, password, homeAddress, phoneNumber) {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            homeAddress: homeAddress,
            phoneNumber: phoneNumber

        }
        return axios.post(API_URL + "users/signup", data);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

}

export default new AuthService();