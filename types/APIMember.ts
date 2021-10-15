export interface APIMember {
    autokicked: boolean;
    id:         string;
    image_url:  null | string;
    muted:      boolean;
    name:       string;
    nickname:   string;
    roles:      Role[];
    user_id:    string;
}

enum Role {
    Admin = "admin",
    Owner = "owner",
    User = "user",
}