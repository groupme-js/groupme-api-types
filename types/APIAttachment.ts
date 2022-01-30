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

export type AutokickedMemberAttachment = {
    type:    "autokicked_member",
    user_id: string,
}

export type EmojiAttachment = {
    type:        "emoji",
    placeholder: "�",
    charmap:     Array<number[]>,
}

export type CalendarEventAttachment = {
    type:     "event",
    view:     View,
    event_id: string,
}

enum View {
    Brief = "brief",
    Full =  "full",
}

export type FileAttachment = {
    type:    "file",
    file_id: string,
}

export type ImageAttachment = {
    type:        "image",
    url:         string,
    source_url?: string,
}

export type LinkedImageAttachment = {
    type: "linked_image",
    url:  string,
}

export type MentionAttachment = {
    type:     "mentions",
    loci:     Array<number[]>,
    user_ids: string[],
}

export type PollAttachment = {
    type:    "poll",
    poll_id: string,
}

export type ReplyAttachment = {
    type:          "reply",
    user_id:       string,
    reply_id:      string,
    base_reply_id: string,
}

export type VideoAttachment = {
    type:        "video",
    preview_url: string,
    url:         string,
}
