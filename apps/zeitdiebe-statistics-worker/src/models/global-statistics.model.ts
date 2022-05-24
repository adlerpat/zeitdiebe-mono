export interface GlobalStatistic {
    vkuStatistic?: VkuStatistic[],
    typeStatistic?: TypeStatistic[],
    minutesStatistic?: MinutesStatistic,
    repercussionsStatistic?: RepercussionsStatistic[],
    lineStatistic?: LineStatistic,
    cityStatistic?: CityStatistic
}

export interface VkuStatistic {
    vku: string,
    incidents: number,
    typeStatistic?: TypeStatistic[],
    minutesStatistic?: MinutesStatistic,
    repercussionsStatistic?: RepercussionsStatistic[],
    lineStatistic?: LineStatistic,
    cityStatistic?: CityStatistic
}

export interface TypeStatistic {
    type: string,
    occurrences: number
}

export interface MinutesStatistic {
    totalMinutes: number,
    medianMinutes: number,
    meanMinutes: number
}

export interface RepercussionsStatistic {
    repercussion: string,
    occurences: number
}

export interface LineStatistic {
    line: string,
    occurences: number
    minutesStatistic?: MinutesStatistic,
    repercussionsStatistic?: RepercussionsStatistic,
    cityStatistic?: CityStatistic
}

export interface CityStatistic {
    city: string,
    occurences: number,
    minutesStatistic?: MinutesStatistic,
    repercussionsStatistic?: RepercussionsStatistic
    lineStatistic?: LineStatistic
}