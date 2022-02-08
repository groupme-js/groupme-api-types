import type { APIRelationship } from "../types";

export type GetRelationshipsQuery = {
    include_blocked?: boolean;
    since?: string;
}

export type GetRelationshipsResponse = APIRelationship[];