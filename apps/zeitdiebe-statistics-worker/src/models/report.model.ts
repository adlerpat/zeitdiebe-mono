export interface Report {
    vku: string,
    type: string,
    minutes: string,
    repercussions: string[],
    line: string,
    city: string,
    uid: string,
    proof?: string,
    number?: number
}