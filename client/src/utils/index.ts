import * as _ from "lodash";
import { BaseSWRecordsResponse } from "../api/responses/BaseSWRecordResponse";


/**
 * Gets percentage from value and limit
 * @param value 
 * @param limit 
 */
export const calculatePercentage = (value: string, limit: string) => {
    const valueInt = _.parseInt(value);
    const limitInt = _.parseInt(limit);

    if (_.isNaN(valueInt) || _.isNaN(limitInt)) 
        throw new Error("Both value and limit must be valid numbers.");

    if (limitInt <= 0)
        throw new Error("Limit must be greater than 0.");

    const percentage = (valueInt / limitInt) * 100;
    return _.round(percentage, 0);
}


export const getRecordStatistics = (swimmingRecords: BaseSWRecordsResponse) => {
let totalCalories = 0;
  let totalSwumMeters = 0;

  for (const record of swimmingRecords.records) {
    totalCalories += record.calories;
    totalSwumMeters += record.swumMeters;
  }

  return {
    totalCalories, totalSwumMeters
  }
}