export interface Client {
    id?:string;
    memberName?:string;
    guardianName?:string;
    guardianPhone?:string;
    email?:string;
    phone?:string;
    membership?:string;
}

export const MEMBERSHIPS: string[] = ["None", "Daily", "Punch Card", "Monthly", "Yearly"];