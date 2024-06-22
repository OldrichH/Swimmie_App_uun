
export interface BaseSWRecordsResponse {
    records: BaseSWRecordResponse[],
}

export interface BaseSWRecordResponse  {
    _id: string,
    userId: string,
    swumMeters: number,
    calories: number,
    swimmingTime: string,
    styleId: string,
    date: string,
}