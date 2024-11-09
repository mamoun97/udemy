import { http } from "./config";

type AuthParam = {
    email: string,
    password: string
}



const sginIn = async (dt: AuthParam): Promise<UserAuth> => {
    const { data } = await http().post("/teacher/signin", dt);
    return data
}
const sginUp = async (dt: User): Promise<any> => {
    const { data } = await http().post("/teacher/", dt);
    return data
}

export const AuthApi = {
    sginIn,
    sginUp
}