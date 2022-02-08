import type { APIAttachment, APIGroupEvent } from "..";
import type { MessageDeletionActor, MessageSenderType } from "./Constants";

export type APIChatMessage = {
    attachments:     APIAttachment[];
    avatar_url:      null | string;
    conversation_id: string;
    created_at:      number;
    favorited_by:    [];
    id:              string;
    name:            string;
    recipient_id:    string;
    sender_id:       string;
    sender_type:     MessageSenderType;
    source_guid:     string;
    text:            null | string;
    user_id:         string;
    event?:          APIGroupEvent;
    deleted_at?:     number;
    deletion_actor?: MessageDeletionActor;
}