import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import firebase from "firebase";

// set user on login but check if user exist in users
// if user not in usersDB, create user and setUser state
// create user profile from authenticated user signup
export const setUserOrCreateAndSet = createAsyncThunk(
    "user/setUserOrCreateAndSet",
    async ({ user }) => {
        try {
            // check if user exist in db users
            db
                .collection("users")
                .doc(user.uid)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        setUser(user)
                    }
                })
        } catch (err) {
            alert("You do not have access to this site: ", err)
        }
    }
)

// change the state based on the called function
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userContacts: null,
        status: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },

})

//action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;