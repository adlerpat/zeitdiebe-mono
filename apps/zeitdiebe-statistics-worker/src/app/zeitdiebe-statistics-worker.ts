import "reflect-metadata";
import { container } from "tsyringe";
import { environment } from "../environments/environment";
import { FirebaseHelper } from "./helper/firebase.helper";
import { Report } from '../models/report.model';
import { StatisticsHelper } from "./helper/statistics.helper";

export function zeitdiebeStatisticsWorker() {
  const firebaseHelper = container.resolve(FirebaseHelper);
  const allReports: Report[] = [];

  firebaseHelper.login(environment.workerUserEmail, environment.workerUserPassword).then( () => {
    firebaseHelper.getAllReports().then( (reports) => {
      reports.forEach((report) => {
        allReports.push(report.data() as unknown as Report);
      });

      const statisticsHelper = new StatisticsHelper(allReports);
      statisticsHelper.chainCalculations();

      firebaseHelper.writeGlobalStatisticEntry(statisticsHelper.globalStatistic).then( () => {
        console.log("Successfully wrote back todays statistics " + Date.now().toLocaleString('de-DE'));
      });
    });
  });
}
