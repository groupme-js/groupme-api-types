import type { APIChat, APIChatMessage } from "..";

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/dms.md#list-existing-dm-channels
 */
export type GetChatsResponse = APIChat[];

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/dms.md#index-messages
 */
export interface GetChatMessagesQuery {
    other_user_id: string;
    before_id?: string;
    since_id?: string;
    after_id?: string;
    limit?: number;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/dms.md#index-messages
 */
export interface GetChatMessagesResponse {
    count: number;
    direct_messages: APIChatMessage[];
    read_receipt?: ReadReceipt;
}

export type ReadReceipt = {
    id: string;
    chat_id: string;
    message_id: string;
    user_id: string;
    read_at: number;
}

/**
 * TODO: add documentation on GroupMeCommunityDocs
 */
export interface GetChatMessageResponse {
    message: APIChatMessage;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/dms.md#send-dm
 */
export interface PostChatMessageBody {
    direct_message: Pick<APIChatMessage, "text" | "attachments" | "source_guid" | "recipient_id">;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/dms.md#send-dm
 */
export interface PostChatMessageResponse {
    direct_message: APIChatMessage;
}