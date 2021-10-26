import type { APIAttachment } from "./APIAttachment";
import type { APIGroupEvent } from "./APIGroupEvent";

export interface APIMessage {
    attachments:     APIAttachment[];
    avatar_url:      null | string;
    created_at:      number;
    favorited_by:    string[];
    group_id:        string;
    id:              string;
    name:            string;
    sender_id:       string;
    sender_type:     MessageSenderType;
    source_guid:     string;
    system:          boolean;
    text:            null | string;
    user_id:         string;
    platform:        Platform;
    event?:          APIGroupEvent;
    deleted_at?:     number;
    deletion_actor?: MessageDeletionActor;
}

export enum MessageDeletionActor {
    Sender = "sender",
}

enum Platform {
    Gm = "gm",
}

export enum MessageSenderType {
    Service = "service",
    System =  "system",
    User =    "user",
}
