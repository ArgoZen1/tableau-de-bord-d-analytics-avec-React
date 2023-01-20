import axios from "axios";
import { IUserMainData, IUserActivity, IUserAverageSessions, IUserPerformance } from "../interfaces";



const api = axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
        "Content-type": "application/json"
    }
});


export const getUserActivity = async (id: number) => {
    try {
        const res = await api.get<IUserActivity>(`/user/${id}/activity`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getUserInfos = async (id: number) => {
    try {
        const res = await api.get<IUserMainData>(`/user/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getUserPerformance = async (id: number) => {
    try {
        const res = await api.get<IUserPerformance>(`/user/${id}/performance`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const getUserAverageSessions = async (id: number) => {
    try {
        const res = await api.get<IUserAverageSessions>(`user/${id}/average-sessions`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}; 