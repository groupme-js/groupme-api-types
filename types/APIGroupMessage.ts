import type { APIAttachment, APIGroupEvent } from "..";
import type { MessageDeletionActor, MessageSenderType } from "./Constants";

export interface APIGroupMessage {
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

enum Platform {
    Gm = "gm",
}