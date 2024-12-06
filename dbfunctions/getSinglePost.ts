import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

async function getPostById(postId: string) {
  try {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Post data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (e) {
    console.error("Error fetching document: ", e);
  }
}
