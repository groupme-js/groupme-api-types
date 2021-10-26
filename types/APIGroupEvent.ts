export type APIGroupEvent =
    | BotAddEvent
    | BotDelEvent

    | CalendarEventCreatedEvent
    | CalendarEventStartingEvent
    | CalendarEventUserGoingEvent
    | CalendarEventUserNotGoingEvent
    | CalendarEventUserUndecidedEvent

    | GroupAddedToDirectoryEvent
    | GroupAvatarChangeEvent
    | GroupLikeIconSetEvent
    | GroupNameChangeEvent
    | GroupOfficeModeDisabledEvent
    | GroupOfficeModeEnabledEvent
    | GroupRoleChangeAdminEvent
    | GroupThemeChangeEvent
    | GroupTopicChangeEvent
    | GroupTypeChangeEvent

    | MembershipAnnounceAddedEvent
    | MembershipAnnounceJoinedEvent
    | MembershipAnnounceRejoinedEvent
    | MembershipAvatarChangedEvent
    | MembershipNicknameChangedEvent
    | MembershipNotificationsAutokickedEvent
    | MembershipNotificationsExitedEvent
    | MembershipNotificationsRemovedEvent

    | MessageDeletedEvent

    | PollCreatedEvent
    | PollFinishedEvent
    | PollReminderEvent




interface User {
    id:       number,
    nickname: string,
}

interface UserWeird { // the API is very inconsistent lol
    id:       string, // some event types use string UIDs
    nickname: string,
}



/* TOP-LEVEL */
export interface BotAddEvent {
    type: "bot.add",
    data: {
        user: User,
        bot:  string,
    },
}

/* TOP-LEVEL */
export interface BotDelEvent {
    type: "bot.del",
    data: {
        user: User,
        bot:  string,
    },
}



/* TOP-LEVEL */
export interface CalendarEventCreatedEvent {
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
export interface CalendarEventStartingEvent {
    type: "calendar.event.starting",
    data: {
        event_name: string,
        minutes:    string,
    },
}

/* TOP-LEVEL */
export interface CalendarEventUserGoingEvent {
    type: "calendar.event.user.going",
    data: CalendarEventUserData,
}

/* TOP-LEVEL */
export interface CalendarEventUserNotGoingEvent {
    type: "calendar.event.user.not_going",
    data: CalendarEventUserData,
}

/* TOP-LEVEL */
export interface CalendarEventUserUndecidedEvent {
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
export interface GroupAddedToDirectoryEvent {
    type: "group.added_to_directory",
    data: {
        user:           User,
        directory_name: string,
    },
}

/* TOP-LEVEL */
export interface GroupAvatarChangeEvent {
    type: "group.avatar_change",
    data: {
        user:       User,
        avatar_url: string,
    },
}

/* TOP-LEVEL */
export interface GroupLikeIconSetEvent {
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
export interface GroupNameChangeEvent {
    type: "group.name_change",
    data: {
        user: User,
        name: string,
    },
}

/* TOP-LEVEL */
export interface GroupOfficeModeDisabledEvent {
    type: "group.office_mode_disabled",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface GroupOfficeModeEnabledEvent {
    type: "group.office_mode_enabled",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface GroupRoleChangeAdminEvent {
    type: "group.role_change_admin",
    data: {
        user:   User,
        role:   "admin",
        member: User,
    },
}

/* TOP-LEVEL */
export interface GroupThemeChangeEvent {
    type: "group.theme_change",
    data: {
        user:       User,
        theme_name: string,
    },
}

/* TOP-LEVEL */
export interface GroupTopicChangeEvent {
    type: "group.topic_change",
    data: {
        user:  User,
        topic: string,
    },
}

/* TOP-LEVEL */
export interface GroupTypeChangeEvent {
    type: "group.type_change",
    data: {
        user: User,
        type: string,
    },
}



/* TOP-LEVEL */
export interface MembershipAnnounceAddedEvent {
    type: "membership.announce.added",
    data: {
        added_users: User[],
        adder_user:  User,
    },
}

/* TOP-LEVEL */
export interface MembershipAnnounceJoinedEvent {
    type: "membership.announce.joined",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipAnnounceRejoinedEvent {
    type: "membership.announce.rejoined",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipAvatarChangedEvent {
    type: "membership.avatar_changed",
    data: {
        user:       User,
        avatar_url: string,
    },
}

/* TOP-LEVEL */
export interface MembershipNicknameChangedEvent {
    type: "membership.nickname_changed",
    data: {
        user: User,
        name: string,
    },
}

/* TOP-LEVEL */
export interface MembershipNotificationsAutokickedEvent {
    type: "membership.notifications.autokicked",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipNotificationsExitedEvent {
    type: "membership.notifications.exited",
    data: {
        removed_user: User,
    },
}

/* TOP-LEVEL */
export interface MembershipNotificationsRemovedEvent {
    type: "membership.notifications.removed",
    data: {
        remover_user: User,
        removed_user: User,
    },
}



/* TOP-LEVEL */
export interface MessageDeletedEvent {
    type: "message.deleted",
    data: {
        message_id:     string,
        deleted_at:     number,
        deletion_actor: "sender",
        deleter_id:     string,
    },
}



/* TOP-LEVEL */
export interface PollCreatedEvent {
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
export interface PollReminderEvent {
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
export interface PollFinishedEvent {
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