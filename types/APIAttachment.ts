export type APIAttachment =
    | Reply 
    | Image 
    | Mention 
    | Emoji 
    | Video 
    | Poll 
    | LinkedImage 
    | File 
    | CalendarEvent 
    | AutokickedMember

interface AutokickedMember {
    type:    "autokicked_member",
    user_id: string,
}

interface Emoji {
    type:        "emoji",
    placeholder: "�",
    charmap:     Array<number[]>,
}

interface CalendarEvent {
    type:     "event",
    view:     View,
    event_id: string,
}

enum View {
    Brief = "brief",
    Full =  "full",
}

interface File {
    type:    "file",
    file_id: string,
}

interface Image {
    type:        "image",
    url:         string,
    source_url?: string,
}

interface LinkedImage {
    type: "linked_image",
    url:  string,
}

interface Mention {
    type:     "mentions",
    loci:     Array<number[]>,
    user_ids: string[],
}

interface Poll {
    type:    "poll",
    poll_id: string,
}

interface Reply {
    type:          "reply",
    user_id:       string,
    reply_id:      string,
    base_reply_id: string,
}

interface Video {
    type:        "video",
    preview_url: string,
    url:         string,
}
