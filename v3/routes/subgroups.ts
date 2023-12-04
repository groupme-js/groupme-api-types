import type { APISubgroup, GroupLikeIcon } from "../types";

/** 
 * The nonstandard subgroup object used as the response from POST and PUT endpoints
 */
type SubgroupWeird = {
    id: number;
    topic: string;
    type: string;
    description: string | null;
    avatar_url: string | null;
    created_at: number;
    updated_at: number;
    parent_id: number;
    like_icon: GroupLikeIcon | null;
}

/**
 * 
 */
export type GetSubgroupsResponse = APISubgroup[];

/**
 * 
 */
export type GetSubgroupResponse = APISubgroup;

/**
 * 
 */
export type PostSubgroupBody = {
    topic: string;
    description?: string;
    avatar_url?: string;
}

/**
 * 
 */
export type PostSubgroupResponse = SubgroupWeird;

/**
 * 
 */
export type PutSubgroupBody = {
    topic?: string;
    description?: string;
    avatar_url?: string;
    like_icon?: GroupLikeIcon;
}

/**
 * 
 */
export type PutSubgroupResponse = SubgroupWeird;

/**
 * 
 */
export type DeleteSubgroupResponse = null;