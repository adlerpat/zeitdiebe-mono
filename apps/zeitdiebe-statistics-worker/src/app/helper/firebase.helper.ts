import { getFirestore, doc, collection, getDocs, QuerySnapshot, DocumentData, setDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { GlobalStatistic } from '../../models/global-statistics.model';
import { initializeApp } from "firebase/app";
import { environment } from "../../environments/environment";

export class FirebaseHelper {
  private firebaseConfig = environment.firebaseConfig;
  private app = initializeApp(this.firebaseConfig);
  private db = getFirestore(this.app);
  private auth = getAuth();

  async getAllReports(): Promise<QuerySnapshot<DocumentData>> {
    return await getDocs(collection(this.db, "reports"));
  }

  async writeGlobalStatisticEntry(globalStatistic: GlobalStatistic): Promise<unknown> {
    return await setDoc(doc(this.db, 'globalStatistic', new Date().toISOString()), globalStatistic).then( (docRef) => {
      console.log("Succesfully uploaded GlobalStatistics with docRef " + docRef);
    });
  }

  async login(email: string, password: string){
    return await signInWithEmailAndPassword(this.auth, email, password).then(
      (user) => {
        console.log("Succesfully logged in worker user " + user.user?.displayName);
      }
    );
  }
}
