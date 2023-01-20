import axios from "axios";
import { IUserMainData, IUserActivity, IUserAverageSessions, IUserPerformance } from "../interfaces";



const api = axios.create({
    baseURL: `http://localhost:3000/`, // base URL for API calls
    headers: {
        "Content-type": "application/json" // set content-type header to json
    }
});

// function to fetch user activity data
export const getUserActivity = async (id: number) => {
    try {
        // make a GET request to the API
        const res = await api.get<IUserActivity>(`/user/${id}/activity`);
        // return the data
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

// function to fetch user infos data
export const getUserInfos = async (id: number) => {
    try {
        // make a GET request to the API
        const res = await api.get<IUserMainData>(`/user/${id}`);
        // return the data
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

// function to fetch user performance data
export const getUserPerformance = async (id: number) => {
    try {
        // make a GET request to the API
        const res = await api.get<IUserPerformance>(`/user/${id}/performance`);
        // return the data
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

// function to fetch user average sessions data
export const getUserAverageSessions = async (id: number) => {
    try {
        // make a GET request to the API
        const res = await api.get<IUserAverageSessions>(`user/${id}/average-sessions`);
        // return the data
        return res.data;
    } catch (e) {
        console.log(e);
    }
};