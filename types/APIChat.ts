import type { APIAttachment } from "./APIAttachment";
import type { APIUser } from "./APIUser";
import type { MessageDeletionMode } from "./Constants";

export interface APIChat {
    created_at:              number;
    last_message:            ChatMessagePreview;
    message_deletion_mode:   MessageDeletionMode[];
    message_deletion_period: number;
    messages_count:          number;
    other_user:              APIUser;
    updated_at:              number;
}

export interface ChatMessagePreview {
    attachments:     APIAttachment[];
    avatar_url:      null | string;
    conversation_id: string;
    created_at:      number;
    favorited_by:    [];
    id:              string;
    name:            string;
    recipient_id:    string;
    sender_id:       string;
    sender_type:     SenderType;
    source_guid:     string;
    text:            null | string;
    user_id:         string;
}

enum SenderType {
    User = "user",
}