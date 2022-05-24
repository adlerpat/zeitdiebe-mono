import { GlobalStatistic, MinutesStatistic } from "../../models/global-statistics.model";
import { Report } from "../../models/report.model";

export class StatisticsHelper {
    private globalStatistic_: GlobalStatistic = {};

    constructor(private reports: Report[]){
        this.chainCalculations();
    }

    get globalStatistic(): GlobalStatistic{
        return this.globalStatistic_;
    }

    chainCalculations(){
        // global level shit
        this.globalStatistic_.minutesStatistic = this.calculateMinutsStatistic(this.reports);
    }

    calculateMinutsStatistic(reports: Report[]): MinutesStatistic {
        const minutesStatistic: MinutesStatistic = {
            totalMinutes: 0,
            medianMinutes: 0,
            meanMinutes: 0
        };

        reports.sort((a, b) => (a.minutes > b.minutes) ? 1 : -1);

        reports.forEach((report: Report) => {
            minutesStatistic.totalMinutes += +(report.minutes);
        });

        const numberOfReports = reports.length -1;

        if(reports.length % 2 === 0){
            const slot = Math.round(Math.round(((numberOfReports / 2) + ((numberOfReports/2) + 1)) / 2));
            console.log("Even " + slot);
            minutesStatistic.medianMinutes = +(reports[slot].minutes);
        }else{ 
            const slot = Math.round((numberOfReports+1) / 2);
            console.log("Uneven " + slot);
            minutesStatistic.medianMinutes = +(reports[slot].minutes);
        }

        minutesStatistic.meanMinutes = +( +(minutesStatistic.totalMinutes)/ (numberOfReports+1));

        return minutesStatistic;
    }
}
