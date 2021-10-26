export type APIAttachment =
    | ReplyAttachment 
    | ImageAttachment 
    | MentionAttachment 
    | EmojiAttachment 
    | VideoAttachment 
    | PollAttachment 
    | LinkedImageAttachment 
    | FileAttachment 
    | CalendarEventAttachment 
    | AutokickedMemberAttachment

export interface AutokickedMemberAttachment {
    type:    "autokicked_member",
    user_id: string,
}

export interface EmojiAttachment {
    type:        "emoji",
    placeholder: "�",
    charmap:     Array<number[]>,
}

export interface CalendarEventAttachment {
    type:     "event",
    view:     View,
    event_id: string,
}

enum View {
    Brief = "brief",
    Full =  "full",
}

export interface FileAttachment {
    type:    "file",
    file_id: string,
}

export interface ImageAttachment {
    type:        "image",
    url:         string,
    source_url?: string,
}

export interface LinkedImageAttachment {
    type: "linked_image",
    url:  string,
}

export interface MentionAttachment {
    type:     "mentions",
    loci:     Array<number[]>,
    user_ids: string[],
}

export interface PollAttachment {
    type:    "poll",
    poll_id: string,
}

export interface ReplyAttachment {
    type:          "reply",
    user_id:       string,
    reply_id:      string,
    base_reply_id: string,
}

export interface VideoAttachment {
    type:        "video",
    preview_url: string,
    url:         string,
}
