import { userTypes } from "./types";
import { auth, db, createUserProfileDocument, googleProviderAuth } from "../firebase/firebase";

export const signUp = (email, password) => async (dispatch) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { displayName });
    dispatch({ type: userTypes.SIGN_UP });
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: userTypes.SIGN_IN });
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export const signInWithGoogle = () => async (dispatch) => {
  try {
    const result = await auth.signInWithPopup(googleProviderAuth);
    const user = result.user;
    dispatch({ type: userTypes.SIGN_IN, payload: user });
  } catch (error) {
    console.error("Error signing in:", error);
  }
};


export const signOut = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({ type: userTypes.SIGN_OUT });
  } catch (error) {
    console.error("Error signing out:", error);
  }
};


export const fetchUser = () => async (dispatch, getState) => {
    try {
      dispatch({ type: userTypes.FETCH_USER });
  
      const userId = getState().user.currentUser.uid;
  
      const userRef = db.collection('users').doc(userId);
      const userSnapshot = await userRef.get();
  
      if (userSnapshot.exists) {
        dispatch({
          type: userTypes.SET_USER,
          payload: userSnapshot.data(),
        });
      } else {
        console.error("User document not found");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

export const setUser = (user) => ({
  type: userTypes.SET_USER,
  payload: user,
});

export const updateUser = (userData) => async (dispatch) => {
    try {
      const { userId, ...updatedUserData } = userData;
  
      await db.collection('users').doc(userId).update(updatedUserData);
  
      dispatch({ type: userTypes.UPDATE_USER });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };