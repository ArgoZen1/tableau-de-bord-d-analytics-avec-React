import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance } from "../mockData/mockData";
import { IUserMainData, IUserActivity, IUserAverageSessions, IUserPerformance } from "../interfaces";
// import { getUserActivity, getUserAverageSessions, getUserInfos, getUserPerformance, } from "./CallApi"

interface UserData {
    USER_MAIN_DATA: IUserMainData;
    USER_ACTIVITY: IUserActivity;
    USER_PERFORMANCE: IUserPerformance;
    USER_AVERAGE_SESSIONS: IUserAverageSessions;
}

export const getData = async (type: keyof UserData, id: number, data: any = []): Promise<any> => {
    data = {
        "USER_MAIN_DATA": await getUserInfos(id),
        "USER_ACTIVITY": await getUserActivity(id),
        "USER_PERFORMANCE": await getUserPerformance(id),
        "USER_AVERAGE_SESSIONS": await getUserAverageSessions(id)
    }[type]

    return data;
};