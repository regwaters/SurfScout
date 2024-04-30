// Import necessary modules from Firebase and React
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase app
const firebaseConfig = {
  // Your Firebase config here
};
firebase.initializeApp(firebaseConfig);

// Component for bookmarking feature
function BookmarkButton({ pageId }) {
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  // Function to add bookmark
  const addBookmark = () => {
    if (!user) return; // User not logged in
    const db = firebase.firestore();
    db.collection('bookmarks').doc(user.uid).update({
      [pageId]: true // Set pageId as bookmarked for current user
    });
  };

  return (
    <button onClick={addBookmark}>Bookmark</button>
  );
}

// Component to display user's bookmarks
function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  // Retrieve user's bookmarks
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection('bookmarks').doc(user.uid).get()
          .then(doc => {
            if (doc.exists) {
              const userBookmarks = doc.data();
              setBookmarks(Object.keys(userBookmarks));
            }
          })
          .catch(error => console.error('Error getting bookmarks:', error));
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <h5>Bookmarks</h5>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark}>{bookmark}</li>
        ))}
      </ul>
    </div>
  );
}
