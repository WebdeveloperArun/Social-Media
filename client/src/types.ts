

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
    userId: string;
    title: string;
    image: string;
    likes: string[];
}

export interface LoginData {
    email: string;
    password: string;
};
