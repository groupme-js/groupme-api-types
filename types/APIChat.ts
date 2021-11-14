import type { APIChatMessage, APIUser } from "..";
import type { MessageDeletionMode } from "./Constants";

export interface APIChat {
    created_at:              number;
    last_message:            APIChatMessage;
    message_deletion_mode:   MessageDeletionMode[];
    message_deletion_period: number;
    messages_count:          number;
    other_user:              APIUser;
    updated_at:              number;
}