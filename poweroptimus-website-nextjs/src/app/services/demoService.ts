import { db } from "@/firebase";
// import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getReadableDate } from "./UtilityService";
import { QueryConstraint, Timestamp, addDoc, collection, deleteDoc, doc, documentId, getDoc, getDocs, limit, orderBy, query, updateDoc, where } from 'firebase/firestore';

export const saveDemoRequest = (payload: any) =>
    addDoc(collection(db, 'demo-requests'), {
        ...payload,
        completed: false,
        createdOn: Timestamp.now()
    });

export const savewatchRecRequest = (payload: any) => {
    // console.log('adsnfadsf', ...payload)
    addDoc(collection(db, 'recording-requests'), {
        ...payload,
        completed: false,
        createdOn: Timestamp.now()
    });
}
    
export const saveCaseStudyRequest = (payload: any) => {
    console.log('caseStudyData::', payload)
    addDoc(collection(db, 'case-study-requests'), {
        ...payload,
        completed: false,
        createdOn: Timestamp.now()
    });
}

// eventRegistration list
export const saveEventsRegRequest = (payload: any) => {
    // console.log('adsnfadsf', ...payload)
    addDoc(collection(db, 'events-registration'), {
        ...payload,
        completed: false,
        createdOn: Timestamp.now()
    });
}