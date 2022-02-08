export type APIRelationship = {
    id:                 string;
    created_at:         number;
    created_at_iso8601: string;
    updated_at:         number;
    updated_at_iso8601: string;
    user_id:            string;
    name:               string;
    avatar_url:         null | string;
    reason:             number;
    hidden:             boolean;
    app_installed:      boolean;
    mri:                string;
}
