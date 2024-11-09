"use client";

import { AuthApi } from "@/api/auth";
import { AppDispatch, RootState } from "@/store";
import { changeUser } from "@/store/authSlice";
import alertError from "@/utils/alert-error";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface AuthContextValue {
    user: UserAuth | null;
    logOut: () => Promise<void>;
    isLoading: boolean;
    signWithEmailAndPassword: (dt: UserParam) => Promise<void>;
}
type UserParam = {
    email: string,
    password: string
}

const AuthContext = createContext<AuthContextValue>({
    user: null,
    isLoading: false,
    logOut: async () => { },
    signWithEmailAndPassword: async () => { },
});

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    const setUser = (e: UserAuth | null) => dispatch(changeUser(e));

    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter()
    const signWithEmailAndPassword = async (dt: UserParam) => {
        setIsLoading(true);
        try {
            const data = await AuthApi.sginIn(dt);
            setIsLoading(false)
            setUser(data);
            push("/")
        } catch (err) {
            alertError(err);
            setIsLoading(false);
        }
    };

    const logOut = async () => {
        try {
            setUser(null);
            push("/")
        } catch (err) {
            alertError(err);
        }
    };

    useEffect(() => {
        // Add any side effects or initialization here if needed
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, isLoading, logOut, signWithEmailAndPassword }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);
