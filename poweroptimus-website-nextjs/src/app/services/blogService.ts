import { db } from "@/firebase";
// import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getReadableDate } from "./UtilityService";
import { QueryConstraint, Timestamp, addDoc, collection, deleteDoc, doc, documentId, getDoc, getDocs, limit, orderBy, query, updateDoc, where } from 'firebase/firestore';


export async function getBlogs(params: { limit?: number, skipId?: string }) {
  try {
    // // Step 1: Add a test document
    // const docRef = await addDoc(collection(db, "testCollection"), {
    //   message: "Hello Firebase!",
    //   createdAt: new Date(),
    // });
    // console.log("✅ Test document added with ID:", docRef.id);

    // Step 2: Fetch all documents from testCollection


    const queryConstraints: QueryConstraint[] = [];

    if (params.skipId)
        queryConstraints.push(where(documentId(), "!=", params.skipId));
    else
        queryConstraints.push(orderBy('createdOn', 'desc'));

    if (params.limit)
        queryConstraints.push(limit(params.limit));

    const querySnapshot = await getDocs(query(collection(db, "blogs"), ...queryConstraints));
    console.log('querySnapshot',querySnapshot)
    const blogLists = querySnapshot.docs.map((doc,i) => {

        console.log('docdoc',doc)
        const data = doc.data();
        const updatedOn = data.updatedOn ? data.updatedOn : data.createdOn;
        return {
            ...data,
            id: doc.id, index: i + 1,
            urlId: data.urlId,
            ref: doc.ref,
            createdOn: data.createdOn.toDate().toDateString(),
            createdOnStr: getReadableDate(data.createdOn.toDate()),
            updatedOn: data.createdOn.toDate().toDateString(),
            updatedOnStr: getReadableDate(updatedOn.toDate())
        };


    })
    console.log('blogList::ChinmayJi',blogLists)
    return blogLists
    

    console.log("✅ Firestore connection works perfectly!");
  } catch (error) {
    console.error("❌ Firestore connection failed:", error);
  }
}

export async function getBlogByUrlId(urlId:string) {
    // debugger;
    const snapshot = await getDocs(query(collection(db, "blogs"), where("urlId", "==", urlId)));
    const blogList = snapshot.docs.map((doc) => {
        const data = doc.data();
        console.log('dfkanf',data)
        const updatedOn = data.updatedOn ? data.updatedOn : data.createdOn;
        return {
            ...data,
            id: doc.id,
            ref: doc.ref,
            createdOn: data.createdOn.toDate().toDateString(),
            createdOnStr: getReadableDate(data.createdOn.toDate()),
            updatedOn: data.createdOn.toDate().toDateString(),
            updatedOnStr: getReadableDate(updatedOn.toDate()),
            metaTitle: data.metaTitle,          // ✅ Ensure these are included
            metaDescription: data.metaDescription,
            metaKeyword: data.metaKeyword,
            urlId: data.urlId,

        };
    });
    return blogList[0];
}

// webinar functions
export async function getWebinars(params: { limit?: number, skipId?: string }) {
  try {
    // // Step 1: Add a test document
    // const docRef = await addDoc(collection(db, "testCollection"), {
    //   message: "Hello Firebase!",
    //   createdAt: new Date(),
    // });
    // console.log("✅ Test document added with ID:", docRef.id);

    // Step 2: Fetch all documents from testCollection


    const queryConstraints: QueryConstraint[] = [];

    if (params.skipId)
        queryConstraints.push(where(documentId(), "!=", params.skipId));
    else
        queryConstraints.push(orderBy('createdOn', 'desc'));

    if (params.limit)
        queryConstraints.push(limit(params.limit));

    const querySnapshot = await getDocs(query(collection(db, "webinar"), ...queryConstraints));
    console.log('querySnapshot',querySnapshot)
    const blogLists = querySnapshot.docs.map((doc,i) => {

        console.log('docdoc',doc)
        const data = doc.data();
        const updatedOn = data.updatedOn ? data.updatedOn : data.createdOn;
        return {
            ...data,
            id: doc.id, index: i + 1,
            urlId: data.urlId,
            ref: doc.ref,
            createdOn: data.createdOn.toDate().toDateString(),
            createdOnStr: getReadableDate(data.createdOn.toDate()),
            updatedOn: data.createdOn.toDate().toDateString(),
            updatedOnStr: getReadableDate(updatedOn.toDate())
        };


    })
    console.log('webinarList::ChinmayJi',blogLists)
    return blogLists
    

    console.log("✅ Firestore connection works perfectly!");
  } catch (error) {
    console.error("❌ Firestore connection failed:", error);
  }
}

export async function getWebinarByUrlId(urlId:string) {
    console.log('mnmh',urlId)
    // debugger;
    
    const snapshot = await getDocs(query(collection(db, "webinar"), where("urlId", "==", urlId)));
    const blogList = snapshot.docs.map((doc) => {
        const data = doc.data();
        console.log('dfkanf',data)
        const updatedOn = data.updatedOn ? data.updatedOn : data.createdOn;
        return {
            ...data,
            id: doc.id,
            ref: doc.ref,
            createdOn: data.createdOn.toDate().toDateString(),
            createdOnStr: getReadableDate(data.createdOn.toDate()),
            updatedOn: data.createdOn.toDate().toDateString(),
            updatedOnStr: getReadableDate(updatedOn.toDate()),
            metaTitle: data.metaTitle,          // ✅ Ensure these are included
            metaDescription: data.metaDescription,
            metaKeyword: data.metaKeyword,
            urlId: data.urlId,

        };
    });
    return blogList[0];
}
