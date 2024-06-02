
export interface BaseSWRecordsResponse {
    records: BaseSWRecordResponse[],
}

interface BaseSWRecordResponse  {
    _id: string,
    userId: string,
    swumMeters: number,
    calories: number,
    swimmingTime: string,
    styleId: string,
    date: string,
}