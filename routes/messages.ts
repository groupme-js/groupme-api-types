import type { APIGroupMessage } from "../types/APIGroupMessage";

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#index
 */
export type GetGroupMessagesQuery = {
    before_id?: string;
    since_id?: string;
    after_id?: string;
    limit?: number;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#index
 */
export type GetGroupMessagesResponse = {
    count: number;
    messages: APIGroupMessage[];
}

/**
 * TODO: add docs; currently undocumented
 */
export type GetGroupMessageResponse = {
    message: APIGroupMessage;
}

/**
 * TODO: figure out which APIMessage fields actually work here
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#send-message
 */
export type PostGroupMessageBody = {
    message: Pick<APIGroupMessage, "text" | "attachments" | "source_guid">;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#send-message
 */
export type PostGroupMessageResponse = {
    message: APIGroupMessage;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/messages.md#delete-a-message
 */
export type DeleteGroupMessageResponse = never;