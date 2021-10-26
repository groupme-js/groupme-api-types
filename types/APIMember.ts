export interface APIMember {
    autokicked: boolean;
    id:         string;
    image_url:  null | string;
    muted:      boolean;
    name:       string;
    nickname:   string;
    roles:      MemberRole[];
    user_id:    string;
}

export enum MemberRole {
    Admin = "admin",
    Owner = "owner",
    User = "user",
}