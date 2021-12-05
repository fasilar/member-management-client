import { Menu } from "../models/menu";

export enum AppRouteConstants {
    DEFAULT = '',
    MEMBER="Member"
}

export class REGEX {
    public static get TEN_INTEGER_DIGIT(): RegExp { return new RegExp( "^[0-9]{10,10}$") }
}

export const Menus: Menu[] = [
    {
        DisplayName: 'Members',
        LinkName: 'Member',
        IconName : 'people_outline'
    }
];