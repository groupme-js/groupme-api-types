import type { APIAttachment } from "./APIAttachment";
import type { APIMember } from "./APIMember";
import type { MessageDeletionMode } from "./Constants";

export type APIGroup = {
    children_count:           number;
    created_at:               number;
    creator_user_id:          string;
    description:              string;
    group_id:                 string;
    id:                       string;
    image_url:                null | string;
    join_question:            null | GroupJoinQuestion;
    like_icon:                null | GroupLikeIcon;
    max_members:              number;
    members:                  null | (APIMember & { autokicked: boolean })[];
    members_count:            number;
    message_deletion_mode:    MessageDeletionMode[];
    message_deletion_period:  number;
    messages:                 GroupMessagesResponse;
    muted_until?:             number | null;
    name:                     string;
    phone_number:             null | string;
    requires_approval:        boolean;
    share_qr_code_url:        null | string;
    share_url:                null | string;
    show_join_question:       boolean;
    theme_name:               null | string;
    type:                     GroupType;
    updated_at:               number;
}

export type GroupJoinQuestion = {
    type: GroupJoinReason;
    text: string;
}

export enum GroupJoinReason {
    JoinReasonQuestionsText = "join_reason/questions/text",
}

export type GroupLikeIcon = {
    pack_id:    number;
    pack_index: number;
    type:       string;
}

export type GroupMessagesResponse = {
    count:                   number;
    last_message_created_at: number | null;
    last_message_id:         null | string;
    preview:                 GroupMessagePreview;
}

export type GroupMessagePreview = {
    attachments:     APIAttachment[];
    deleted_at?:     number;
    deletion_actor?: MessageDeletionMode;
    image_url:       null | string;
    nickname:        null | string;
    text:            null | string;
}

export enum GroupType {
    Announcement = "announcement",
    Closed = "closed",
    Private = "private",
}