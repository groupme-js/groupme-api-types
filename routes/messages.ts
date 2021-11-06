import type { APIMessage } from "../types/APIMessage";

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#index
 */
export interface GetGroupMessagesQuery {
    before_id?: string;
    since_id?: string;
    after_id?: string;
    limit?: number;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#index
 */
export interface GetGroupMessagesResponse {
    count: number;
    messages: APIMessage[];
}

/**
 * TODO: add docs; currently undocumented
 */
export interface GetGroupMessageResponse {
    message: APIMessage;
}

/**
 * TODO: figure out which APIMessage fields actually work here
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#send-message
 */
export interface PostGroupMessageBody {
    message: Pick<APIMessage, "text" | "attachments" | "source_guid">;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#send-message
 */
export interface PostGroupMessageResponse {
    message: APIMessage;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#delete-a-message
 */
export type DeleteGroupMessageResponse = never;