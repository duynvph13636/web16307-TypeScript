import { Navigate } from "react-router-dom";
export const authenticate = (user: {}, next: () => void) => {
    try {
        localStorage.setItem('users', JSON.stringify(user) as string);
        next();    
    } catch (error) {
        console.log(error);
    }
    
}
export const isAuthenticate = () => {
    if(!localStorage.getItem('users')) {
        return <Navigate to={"/signin"} />;
    }
    return JSON.parse(localStorage.getItem('users') as string);
}