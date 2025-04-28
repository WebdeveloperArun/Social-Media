

export interface User {
 username: string;
 email: string;
 password?: string;
 profilePicture?: string;
 coverPicture?: string;
 followers?: string[];
 followings?: string[];
 isAdmin?: boolean;
 bio?: string;
}

export interface Post {
    userId: string;
    title: string;
    image: string;
    likes: string[];
}