export interface INote {
    id: number,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: string,
    isArchive: boolean
}

export interface ISummary {
    category: string,
    active: number,
    archived: number,
}