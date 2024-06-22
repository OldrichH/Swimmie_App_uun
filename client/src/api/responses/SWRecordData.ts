

export interface SWRecordData  {
    userId: string,
    swumMeters: number,
    calories: number,
    swimmingTime: string,
    styleId: string,
    date: string,
}

export interface UpdateSWRecordData{
    id: string,
    swumMeters: number,
    calories: number,
    swimmingTime: string,
    styleId: string,
    date: string,
}