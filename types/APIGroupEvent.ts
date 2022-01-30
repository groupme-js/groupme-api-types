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




type User = {
    id:       number,
    nickname: string,
}

type UserWeird = { // the API is very inconsistent lol
    id:       string, // some event types use string UIDs
    nickname: string,
}



/* TOP-LEVEL */
export type BotAddEvent = {
    type: "bot.add",
    data: {
        user: User,
        bot:  string,
    },
}

/* TOP-LEVEL */
export type BotDelEvent = {
    type: "bot.del",
    data: {
        user: User,
        bot:  string,
    },
}



/* TOP-LEVEL */
export type CalendarEventCreatedEvent = {
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
export type CalendarEventStartingEvent = {
    type: "calendar.event.starting",
    data: {
        event_name: string,
        minutes:    string,
    },
}

/* TOP-LEVEL */
export type CalendarEventUserGoingEvent = {
    type: "calendar.event.user.going",
    data: CalendarEventUserData,
}

/* TOP-LEVEL */
export type CalendarEventUserNotGoingEvent = {
    type: "calendar.event.user.not_going",
    data: CalendarEventUserData,
}

/* TOP-LEVEL */
export type CalendarEventUserUndecidedEvent = {
    type: "calendar.event.user.undecided",
    data: CalendarEventUserData,
}

type CalendarEventUserData = {
    event: {
        id:   string,
        name: string,
    },
    user:  UserWeird,
}



/* TOP-LEVEL */
export type GroupAddedToDirectoryEvent = {
    type: "group.added_to_directory",
    data: {
        user:           User,
        directory_name: string,
    },
}

/* TOP-LEVEL */
export type GroupAvatarChangeEvent = {
    type: "group.avatar_change",
    data: {
        user:       User,
        avatar_url: string,
    },
}

/* TOP-LEVEL */
export type GroupLikeIconSetEvent = {
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
export type GroupNameChangeEvent = {
    type: "group.name_change",
    data: {
        user: User,
        name: string,
    },
}

/* TOP-LEVEL */
export type GroupOfficeModeDisabledEvent = {
    type: "group.office_mode_disabled",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export type GroupOfficeModeEnabledEvent = {
    type: "group.office_mode_enabled",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export type GroupRoleChangeAdminEvent = {
    type: "group.role_change_admin",
    data: {
        user:   User,
        role:   "admin",
        member: User,
    },
}

/* TOP-LEVEL */
export type GroupThemeChangeEvent = {
    type: "group.theme_change",
    data: {
        user:       User,
        theme_name: string,
    },
}

/* TOP-LEVEL */
export type GroupTopicChangeEvent = {
    type: "group.topic_change",
    data: {
        user:  User,
        topic: string,
    },
}

/* TOP-LEVEL */
export type GroupTypeChangeEvent = {
    type: "group.type_change",
    data: {
        user: User,
        type: string,
    },
}



/* TOP-LEVEL */
export type MembershipAnnounceAddedEvent = {
    type: "membership.announce.added",
    data: {
        added_users: User[],
        adder_user:  User,
    },
}

/* TOP-LEVEL */
export type MembershipAnnounceJoinedEvent = {
    type: "membership.announce.joined",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export type MembershipAnnounceRejoinedEvent = {
    type: "membership.announce.rejoined",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export type MembershipAvatarChangedEvent = {
    type: "membership.avatar_changed",
    data: {
        user:       User,
        avatar_url: string,
    },
}

/* TOP-LEVEL */
export type MembershipNicknameChangedEvent = {
    type: "membership.nickname_changed",
    data: {
        user: User,
        name: string,
    },
}

/* TOP-LEVEL */
export type MembershipNotificationsAutokickedEvent = {
    type: "membership.notifications.autokicked",
    data: {
        user: User,
    },
}

/* TOP-LEVEL */
export type MembershipNotificationsExitedEvent = {
    type: "membership.notifications.exited",
    data: {
        removed_user: User,
    },
}

/* TOP-LEVEL */
export type MembershipNotificationsRemovedEvent = {
    type: "membership.notifications.removed",
    data: {
        remover_user: User,
        removed_user: User,
    },
}



/* TOP-LEVEL */
export type MessageDeletedEvent = {
    type: "message.deleted",
    data: {
        message_id:     string,
        deleted_at:     number,
        deletion_actor: "sender",
        deleter_id:     string,
    },
}



/* TOP-LEVEL */
export type PollCreatedEvent = {
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
export type PollReminderEvent = {
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
export type PollFinishedEvent = {
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

type Option = {
    id:         string,
    title:      string,
    votes?:     number,
    voter_ids?: string[],
}