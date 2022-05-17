import type { APIGroup } from "../types/APIGroup";

type GroupOptions = {
    type?: "private" | "closed";
    group_type?: "private" | "closed";
    requires_approval?: boolean;
    show_join_question?: boolean;
    join_question?: {
        text: string;
        type: "join_reason/questions/text";
    };
    like_icon?: {
        type: "emoji";
        pack_id: number;
        pack_index: number;
    };
    theme_name?: string;
    name?: string;
    description?: string;
    image_url?: string;
    office_mode?: boolean;
    share?: boolean;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#index
 */
export type GetGroupsQuery = {
    page?: number;
    per_page?: number;
    omit?: 'memberships';
}

/**
 * TODO: make memberships property optional
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#index
 */
export type GetGroupsResponse = APIGroup[];

/**
 * TODO: investigate possible discrepancies between current/former groups responses
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#former
 */
export type GetGroupsFormerResponse = APIGroup[];

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#show
 */
export type GetGroupResponse = APIGroup;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#create
 */
export type PostGroupBody = GroupOptions;

/**
 * TODO: should probably set the previews to null since they won't exist yet
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#create
 */
export type PostGroupResponse = APIGroup;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#update
 */
export type PatchGroupBody = GroupOptions;

/**
 * Note: there are some [minor discrepancies](https://www.diffchecker.com/PhYuEYdS) in the group object here.
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#update
 */
export type PatchGroupResponse = APIGroup;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#destroy
 */
export type DeleteGroupResponse = never;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#join
 */
export type PostJoinGroupResponse = {
    group: APIGroup;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#rejoin
 */
export type PostRejoinGroupBody = {
    group_id: string;
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#rejoin
 */
export type PostRejoinGroupResponse = APIGroup;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#change-owners
 */
export type PostChangeOwnersBody = {
    requests: {
        group_id: string;
        owner_id: string;
    }[];
}

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#change-owners
 */
export type PostChangeOwnersResponse = {
    results: {
        group_id: string;
        owner_id: string;
        status: '200' | '400' | '403' | '404' | '405'
    }[];
}