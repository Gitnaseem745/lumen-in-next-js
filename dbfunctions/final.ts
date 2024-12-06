import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/data/firebase";
import { useState } from "react";

 const [posts, setPosts] = useState<any>(null);
 const post = null;
    // add post to db
    const addPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
          const docRef = collection(db, "posts");
          await addDoc(docRef, post);
        } catch (e) {
          console.error("Error adding post: ", e);
        }
    }

    //get all posts from db
    const getPosts = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const dbPosts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(dbPosts);
            return posts;
        } catch (e) {
            console.error("Error fetching posts: ", e);
        }
    }
