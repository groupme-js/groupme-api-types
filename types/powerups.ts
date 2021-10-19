/**
 * Powerups are GroupMe emojis. This is the format the API uses to describe
 * them when fetched from https://powerup.groupme.com/powerups.
 */
export interface Powerups {
    powerups:   Powerup[]
    categories: Category[]
}

interface Category {
    id:          string
    name:        string
    description: string
    updated_at:  number
    powerups:    string[]
}

interface Powerup {
    id:          string
    name:        string
    description: string
    type:        "emoji"
    created_at:  number
    updated_at:  number
    store_icon:  StoreIcon[] | null
    screenshots: Screenshot[] | null
    meta:        Meta
}

interface Meta {
    pack_id:          number
    transliterations: string[]
    background:       []
    icon:             Icon[]
    inline:           Icon[]
    outline:          Outline[]
    keyboard:         Icon[]
    sticker:          Sticker[]
}

interface Icon {
    image_url: string
    zip_url:   string
    density:   number
    x:         number
    y:         number
}

interface Outline {
    folder_url: string
    density:    number
    x:          number
    y:          number
}

interface Sticker {
    folder_url: string
    zip_url:    string
    density:    number
    x:          number
    y:          number
}

interface Screenshot {
    folder_url: string
    image_url:  string
    zip_url:    string
    count:      number
    density:    number
    x:          number
    y:          number
}

interface StoreIcon {
    image_url: string
    density:   number
    x:         number
    y:         number
}