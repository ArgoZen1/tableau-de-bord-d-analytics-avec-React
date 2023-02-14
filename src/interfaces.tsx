export interface IUserMainData {
    id?: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    },
    todayScore: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    }
}

export interface IUserActivity {
    userId: number | null;
    sessionsActivity: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
}

export interface IUserAverageSessions {
    userId: number | null;
    sessionsAverage: {
        day: string;
        sessionLength: number;
    }[];
}

export interface IUserPerformance {
    userId: number | null;
    kind: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    data: {
        value: number;
        kind: number;
    }[];
}

