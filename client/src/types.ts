

export interface MobileMenuProps {
 mobileMenuOpen: boolean;
 setMobileMenuOpen: (isOpen: boolean) => void;
}
export interface rightSidebarProps {
 rightSidebarOpen: boolean;
 setRightSidebarOpen: (isOpen: boolean) => void;
}

export interface User {
 username: string;
 email: string;
 password: string;
 profilePicture: string;
 coverPicture: string;
 followers: string[];
 followings: string[];
 isAdmin: boolean;
 desc: string;
}