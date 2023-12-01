import type { GroupLikeIcon, GroupMessagesResponse } from "./APIGroup";

export interface APISubgroup {
    avatar_url:      string;
    created_at:      number;
    creator_user_id: number;
    description:     string;
    id:              number;
    like_icon:       null | GroupLikeIcon;
    messages:        GroupMessagesResponse;
    muted_until:     number;
    parent_id:       number;
    topic:           string;
    unread_count:    null;
    updated_at:      number;
}