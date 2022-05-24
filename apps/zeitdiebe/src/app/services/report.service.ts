import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getFirestore, doc, DocumentData, getDoc, addDoc, collection, updateDoc } from 'firebase/firestore';
import { Observable, of } from 'rxjs';
import { Report } from 'src/models/report.model';
import { ref, getDownloadURL  } from "firebase/storage";


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private db = getFirestore();

  private myReports$: Observable<Report[]>;

  private myReport$: Observable<Report>;

  get _myReports$(): Observable<Report[]> {
    return this.myReports$;
  }

  get _myReport$(): Observable<Report> {
    return this.myReport$;
  }

  constructor(private storage: AngularFireStorage) { }

  getReportById(obj: string, id: string): void {
    const docRef = doc(this.db, obj, id);
    getDoc(docRef).then(docSnap => {
        this.myReport$ = of(docSnap.data() as Report);
        console.log(docSnap.data());
      }
    );
  }

  getReportsOfUser(uid: string): void {
    let myReports = [];
    const docRef = doc(this.db, 'user', uid);
    getDoc(docRef).then(docSnap => {
        console.log(docSnap.data());
        docSnap.data()?.reports.forEach(element => {
          getDoc(element).then(reportSnap => {
            myReports = myReports.concat(reportSnap.data());
            this.myReports$ = of(myReports as Report[]);
            console.log(myReports);
          });
        });
      }
    );
  }

  createReportForUser(reportObj: Report, uid: string, image: any): void {
    addDoc(collection(this.db, 'reports'), reportObj).then( (docRef) => {
      getDoc(doc(this.db, 'user', uid)).then((user) => {
        const newUserData = user.data();
        const updatedReports = user.data()?.reports.concat(docRef);
        newUserData.reports = updatedReports;
        updateDoc(doc(this.db, 'user', uid), newUserData).then(() => console.log('success'));
        this.uploadImageAndLinkToUserReport(reportObj, docRef.id, uid, image);
      });
    });
  }

  uploadImageAndLinkToUserReport(reportObj: Report, reportObjId: string, uid: string, image: any){
    if(!image){
      console.log(image);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(reader.result);
      this.storage.ref(uid+"/"+image.name).putString(reader.result.toString(), 'data_url').then((result) => {
        reportObj.proof = image.name;
        updateDoc(doc(this.db, 'reports', reportObjId), reportObj as DocumentData).then(() => console.log('success upload image'))
      });
    }
    reader.readAsDataURL(image);
  }

  getImageUrl(uid: string, fileName: string): Promise<string>{
    const pathReference = ref(this.storage.storage, uid+'/'+fileName);
    return getDownloadURL(pathReference);
  }
}
