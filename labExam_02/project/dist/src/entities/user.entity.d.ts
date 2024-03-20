export declare enum Role {
    ADMIN = 0,
    CUSTOMER = 1
}
export declare class UserEntity {
    email: string;
    fullname: string;
    city: string;
    country: string;
    company: string;
    phone: string;
    password: string;
    salt: string;
    role: Role;
    checkPassword(password: any): Promise<boolean>;
}
