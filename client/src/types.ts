

export interface User {
 username: string;
 email?: string;
 password?: string;
 profilePicture?: string;
 coverPicture?: string;
 followers?: string[];
 followings?: string[];
 isAdmin?: boolean;
 bio?: string;
 _id?: string;
}

export interface Post {
    _id?: string;
    userId?: string;
    title?: string;
    image?: string;
    likes?: string[];
    createdAt?: string;
}

export interface LoginData {
    email: string;
    password: string;
};
