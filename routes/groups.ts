import type { APIGroup } from "../types/APIGroup";

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
 * TODO: pick<> valid fields from APIGroup for this
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#create
 */
export type PostGroupBody = { };

/**
 * TODO: should probably set the previews to null since they won't exist yet
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#create
 */
export type PostGroupResponse = APIGroup;

/**
 * TODO: implement
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/groups.md#update
 */
export type PatchGroupBody = { };

/**
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