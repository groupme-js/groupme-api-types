import type { APIGroupMessage } from "../types/APIGroupMessage";

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/likes.md#like
 */
export type PostLikeResponse = never;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/likes.md#unlike
 */
export type PostUnlikeResponse = never;

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/likes.md#leaderboard
 */
export type GetLeaderboardQuery = {
    period: 'day' | 'week' | 'month'
};

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/likes.md#leaderboard
 */
export type GetLeaderboardResponse = APIGroupMessage[];

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/likes.md#my-likes
 */
export type GetMyLikesResponse = APIGroupMessage[];

/**
 * https://github.com/groupme-js/GroupMeCommunityDocs/blob/master/likes.md#my-hits
 */
export type GetMyHitsResponse = APIGroupMessage[];