import type { APIMember } from "../types/APIMember";

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/members.md#add-members
 */
export interface PostMembersBody {
    members: ({
        nickname: string;
        guid: string;
    } & ( // one of the following must exist in each entry
            | { user_id: string; }
            | { phone_number: string; }
            | { email: string; }
        )
    )[];
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/members.md#add-members
 */
export interface PostMembersResponse {
    results_id: string;
}

/**
 * TODO: investigate other discrepancies between this response and normal APIMembers
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/members.md#fetch-add-results
 */
export interface GetMembersAddResultsResponse {
    members: (APIMember & { guid: string })[];
}

/**
 * TODO: does this work with a DELETE request? that would make more sense here
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/members.md#remove-member
 */
export type PostMemberRemoveBody = never;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/members.md#remove-member
 */
export type PostMemberRemoveResponse = never;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/members.md#change-nickname
 */
export interface PostMemberUpdateBody {
    membership: {
        nickname: string;
    }
}

/**
 * TODO: investigate possible discrepancies
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/members.md#change-nickname
 */
export type PostMemberUpdateResponse = APIMember;