import { Timestamp, addDoc, collection, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore';
// import { db } from '../firebase';
import { db } from "@/firebase";
import { getReadableDate } from './UtilityService';
// import { unsubscribeReasons } from '../constant/subscriptions';

const mapSubscribers = (doc: any, i: number) => {
    const data = doc.data();
    return {
        ...data,
        index: i + 1,
        id: doc.id,
        subscribeOn: data?.subscribeOn?.toDate()?.toDateString(),
        subscribeOnStr: getReadableDate(data?.subscribeOn?.toDate()),
        unSubscribeOn: data?.unSubscribeOn ? data?.unSubscribeOn?.toDate()?.toDateString() : "-",
        unSubscribeOnStr: data?.unSubscribeOn ? getReadableDate(data?.unSubscribeOn?.toDate()) : "-",
        // unSubscribeReason: data?.unSubscribeReason ? unsubscribeReasons[data?.unSubscribeReason] : "-",
    };
}

export async function getSubscribers() {
    const snapshot = await getDocs(query(collection(db, "subscribers"), orderBy('subscribeOn', 'desc')));
    return snapshot.docs.map((doc, i) => mapSubscribers(doc, i));
}

export async function getSubscribersByDays(days: number) {
    const targetDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    targetDate.setHours(0, 0, 0, 0);

    const snapshot1 = await getDocs(query(collection(db, "subscribers"), where("lastUpdateOn", ">=", Timestamp.fromDate(targetDate)), orderBy('lastUpdateOn', 'desc')));

    return snapshot1.docs.map((doc, i) => mapSubscribers(doc, i));
}

export function addSubcriber(email: string) {
    return addDoc(collection(db, 'subscribers'),
        { email, isActive: true, subscribeOn: Timestamp.now(), lastUpdateOn: Timestamp.now() });
}

export async function getActiveSubscribersByEmail(email: string) {
    const q = query(collection(db, "subscribers"), where("email", "==", email), where("isActive", "==", true));
    return await getDocs(q);
}

export async function updateSubcriber(id: string, unSubscribeReason: string) {
    const docRef = doc(db, "subscribers", id);
    return await updateDoc(docRef, { isActive: false, unSubscribeOn: Timestamp.now(), unSubscribeReason, lastUpdateOn: Timestamp.now() });
}

export async function getSubdcribersById(id: string) {
    const docRef = doc(db, "subscribers", id);

    const docSnapshot = await getDoc(docRef)
    const data = docSnapshot.data();

    if (!data) return null;

    return {
        ...data,
        id: data.id,
        subscribeOn: data?.subscribeOn?.toDate()?.toDateString(),
        subscribeOnStr: getReadableDate(data?.subscribeOn?.toDate()),
        unSubscribeOn: data?.unSubscribeOn,
        unSubscribeReason: data?.unSubscribeReason
    };
}
