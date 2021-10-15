export type APIGroupEvent =
    BotAdd |
    BotDel |

    CalendarEventCreated |
    CalendarEventStarting |
    CalendarEventUserGoing |
    CalendarEventUserNotGoing |
    CalendarEventUserUndecided |

    GroupAddedToDirectory |
    GroupAvatarChange |
    GroupLikeIconSet |
    GroupNameChange |
    GroupOfficeModeDisabled |
    GroupOfficeModeEnabled |
    GroupRoleChangeAdmin |
    GroupThemeChange |
    GroupTopicChange |
    GroupTypeChange |

    MembershipAnnounceAdded |
    MembershipAnnounceJoined |
    MembershipAnnounceRejoined |
    MembershipAvatarChanged |
    MembershipNicknameChanged |
    MembershipNotificationsAutokicked |
    MembershipNotificationsExited |
    MembershipNotificationsRemoved |

    MessageDeleted |

    PollCreated |
    PollFinished |
    PollReminder;




interface User {
    id:       number,
    nickname: string,
}

interface UserWeird { // the API is very inconsistent lol
    id:       string, // some event types use string UIDs
    nickname: string,
}



/* TOP-LEVEL */
export interface BotAdd {
    type: "bot.add",
    data: {
        user: User,
        bot:  string,
    },
}

/* TOP-LEVEL */
export interface BotDel {
    type: "bot.del",
    data: {
        user: User,
        bot:  string,
    },
}



/* TOP-LEVEL */
export interface CalendarEventCreated {
    type: "calendar.event.created",
    data: {
        event: {
            id:   string,
            name: string,
        },
        url:   string,
        user:  UserWeird,
    },
}

/* TOP-LEVEL */
export interface CalendarEventStarting {
    type: "calendar.event.starting",
    data: {
        event_name: string,
        minutes:    string,
    },
}

/* TOP-LEVEL */
export interface CalendarEventUserGoing {
    type: "calendar.event.user.going",
    data: CalendarEventUserData,
}

/* TOP-LEVEL */
export interface CalendarEventUserNotGoing {
    type: "calendar.event.user.not_going",
    data: CalendarEventUserData,
}

/* TOP-LEVEL */
export interface CalendarEventUserUndecided {
    type: "calendar.event.user.undecided",
    data: CalendarEventUserData,
}

interface CalendarEventUserData {
    event: {
        id:   string,
        name: string,
    },
    user:  UserWeird,
}



/* TOP-LEVEL */
export interface GroupAddedToDirectory {
    type: "group.added_to_directory",
    data: {
        user:           User,
        directory_name: string,
    },
}

/* TOP-LEVEL */
export interface GroupAvatarChange {
    type: "group.avatar_change",
    data: {
        user:       User,
        avatar_url: string,
    },
}

/* TOP-LEVEL */
export interface GroupLikeIconSet {
    type: "group.like_icon_set",
    data: {
        user:      User,
        like_icon: {
            pack_id:    number,
            pack_index: number,
            type:       string,
        },
    },
}

/* TOP-LEVEL */
export interface GroupNameChange {
    type: "group.name_change",
    data: {
        user: User,
        name: string,
    },
}

/* TOP-LEVEL */
export interface GroupOfficeModeDisabled {
    type: "group.office_mode_disabled",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface GroupOfficeModeEnabled {
    type: "group.office_mode_enabled",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface GroupRoleChangeAdmin {
    type: "group.role_change_admin",
    data: {
        user:   User,
        role:   "admin",
        member: User,
    },
}

/* TOP-LEVEL */
export interface GroupThemeChange {
    type: "group.theme_change",
    data: {
        user:       User,
        theme_name: string,
    },
}

/* TOP-LEVEL */
export interface GroupTopicChange {
    type: "group.topic_change",
    data: {
        user:  User,
        topic: string,
    },
}

/* TOP-LEVEL */
export interface GroupTypeChange {
    type: "group.type_change",
    data: {
        user: User,
        type: string,
    },
}



/* TOP-LEVEL */
export interface MembershipAnnounceAdded {
    type: "membership.announce.added",
    data: {
        added_users: User[],
        adder_user:  User,
    },
}

/* TOP-LEVEL */
export interface MembershipAnnounceJoined {
    type: "membership.announce.joined",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipAnnounceRejoined {
    type: "membership.announce.rejoined",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipAvatarChanged {
    type: "membership.avatar_changed",
    data: {
        user:       User,
        avatar_url: string,
    },
}

/* TOP-LEVEL */
export interface MembershipNicknameChanged {
    type: "membership.nickname_changed",
    data: {
        user: User,
        name: string,
    },
}

/* TOP-LEVEL */
export interface MembershipNotificationsAutokicked {
    type: "membership.notifications.autokicked",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipNotificationsExited {
    type: "membership.notifications.exited",
    data: {
        removed_user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipNotificationsRemoved {
    type: "membership.notifications.removed",
    data: {
        remover_user: User,
        removed_user: User,
    },
}



/* TOP-LEVEL */
export interface MessageDeleted {
    type: "message.deleted",
    data: {
        message_id:     string,
        deleted_at:     number,
        deletion_actor: "sender",
        deleter_id:     string,
    },
}



/* TOP-LEVEL */
export interface PollCreated {
    type: "poll.created",
    data: {
        conversation: {
            id: string,
        },
        poll:         {
            id:       string,
            subject:  string,
        },
        user:         UserWeird,
    },
}

/* TOP-LEVEL */
export interface PollReminder {
    type: "poll.reminder",
    data: {
        conversation: {
            id: string,
        },
        poll:         {
            expiration: number,
            id:         string,
            subject:    string,
        },
    },
}

/* TOP-LEVEL */
export interface PollFinished {
    type: "poll.finished",
    data: {
        conversation: {
            id: string,
        },
        options:      Option[],
        poll:         {
            id:       string,
            subject:  string,
        },
    },
}

interface Option {
    id:         string,
    title:      string,
    votes?:     number,
    voter_ids?: string[],
}