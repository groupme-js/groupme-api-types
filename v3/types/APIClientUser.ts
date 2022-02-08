export type APIClientUser = {
    created_at:         number;
    email:              string;
    facebook_connected: boolean;
    id:                 string;
    image_url:          string;
    locale:             string;
    name:               string;
    phone_number:       string;
    sms:                boolean;
    twitter_connected:  boolean;
    updated_at:         number;
    user_id:            string;
    zip_code:           null;
    share_url:          string;
    share_qr_code_url:  string;
    mfa:                {
        enabled:  boolean;
        channels: {
            type:       string;
            created_at: number;
        }[];
    };
    tags:               string[];
    prompt_for_survey:  boolean;
    show_age_gate:      boolean;
    birth_date_set:     boolean;
}