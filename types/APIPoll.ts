export interface APIPoll {
    data:        PollData;
    user_vote?:  string;
    user_votes?: string[];
}

export interface PollData {
    conversation_id: string;
    created_at:      number;
    expiration:      number;
    id:              string;
    last_modified:   number;
    options:         PollOptionData[];
    owner_id:        string;
    status:          PollStatus;
    subject:         string;
    type:            PollType;
    visibility:      PollVisibility;
}

export interface PollOptionData {
    id:         string;
    title:      string;
    voter_ids?: string[];
    votes?:     number;
}

export enum PollStatus {
    Active = "active",
    Past = "past",
}

export enum PollType {
    Multi = "multi",
    Single = "single",
}

export enum PollVisibility {
    Anonymous = "anonymous",
    Public = "public",
}