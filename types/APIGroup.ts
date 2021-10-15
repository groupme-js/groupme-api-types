import type { APIAttachment } from "./APIAttachment";
import type { APIMember } from "./APIMember";

export interface APIGroup {
    created_at:               number;
    creator_user_id:          string;
    description:              string;
    group_id:                 string;
    id:                       string;
    image_url:                null | string;
    join_question:            null | JoinQuestion;
    like_icon:                null | LikeIcon;
    max_members:              number;
    max_memberships?:         number;
    members:                  null | APIMember[];
    message_deletion_mode?:   MessageDeletionMode[];
    message_deletion_period?: number;
    messages:                 MessagesResponse;
    muted_until?:             number | null;
    name:                     string;
    office_mode:              boolean;
    phone_number:             null | string;
    requires_approval:        boolean;
    share_qr_code_url:        null | string;
    share_url:                null | string;
    show_join_question:       boolean;
    theme_name:               null | string;
    thread_id?:               null;
    type:                     GroupType;
    updated_at:               number;
}

interface JoinQuestion {
    type: JoinReason;
    text: string;
}

enum JoinReason {
    JoinReasonQuestionsText = "join_reason/questions/text",
}

interface LikeIcon {
    pack_id:    number;
    pack_index: number;
    type:       string;
}

enum MessageDeletionMode {
    Creator = "creator",
    Sender = "sender",
}

interface MessagesResponse {
    count:                   number;
    last_message_created_at: number | null;
    last_message_id:         null | string;
    preview:                 Preview;
}

interface Preview {
    attachments:     APIAttachment[];
    deleted_at?:     number;
    deletion_actor?: MessageDeletionMode;
    image_url:       null | string;
    nickname:        null | string;
    text:            null | string;
}

enum GroupType {
    Closed = "closed",
    Private = "private",
}