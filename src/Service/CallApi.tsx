import axios from "axios";
import { IUserMainData, IUserActivity, IUserAverageSessions, IUserPerformance } from "../interfaces";
import { mockUserActivity, mockUserInfos, mockUserPerformance, mockUserAverageSessions } from "../mockData/mockData";

const api = axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
        "Content-type": "application/json"
    }
});

const ignoreNotFoundError = (error: any) => {
    // If the error is a 404, we don't want to log it to the console
    if (error.response?.status === 404) {
        console.log("Resource not found");
    } else {
        console.error(error);
        throw error;
    }
};

export const getUserActivity = async (id: number) => {
    try {
        const res = await api.get<IUserActivity>(`/user/${id}/activity`);
        return res.data;
    } catch (e) {
        ignoreNotFoundError(e);
        return mockUserActivity(id);
    }
};

export const getUserInfos = async (id: number) => {
    try {
        const res = await api.get<IUserMainData>(`/user/${id}`);
        return res.data;
    } catch (e) {
        ignoreNotFoundError(e);
        return mockUserInfos(id);
    }
};

export const getUserPerformance = async (id: number) => {
    try {
        const res = await api.get<IUserPerformance>(`/user/${id}/performance`);
        return res.data;
    } catch (e) {
        ignoreNotFoundError(e);
        return mockUserPerformance(id);
    }
};

export const getUserAverageSessions = async (id: number) => {
    try {
        const res = await api.get<IUserAverageSessions>(`user/${id}/average-sessions`);
        return res.data;
    } catch (e) {
        ignoreNotFoundError(e);
        return mockUserAverageSessions(id);
    }
};