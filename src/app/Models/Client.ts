export interface Client {
    id?:string;
    memberName?:string;
    guardianName?:string;
    email?:string;
    phone?:number;
    membership?:string;
}

export const MEMBERSHIPS: string[] = ["None", "Daily", "Punch Card", "Monthly", "Yearly"];