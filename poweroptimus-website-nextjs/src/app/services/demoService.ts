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

