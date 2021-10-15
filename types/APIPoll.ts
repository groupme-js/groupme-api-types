export interface APIPoll {
    data:        PollData;
    user_vote?:  string;
    user_votes?: string[];
}

interface PollData {
    conversation_id: string;
    created_at:      number;
    expiration:      number;
    id:              string;
    last_modified:   number;
    options:         Option[];
    owner_id:        string;
    status:          PollStatus;
    subject:         string;
    type:            PollType;
    visibility:      PollVisibility;
}

interface Option {
    id:         string;
    title:      string;
    voter_ids?: string[];
    votes?:     number;
}

enum PollStatus {
    Active = "active",
    Past = "past",
}

enum PollType {
    Multi = "multi",
    Single = "single",
}

enum PollVisibility {
    Anonymous = "anonymous",
    Public = "public",
}