import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { setUser } from '../redux/slices/user';
import SigninModal from './SigninModal';

function ProfileAvatar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { user } = useSelector((state) => state.user);

    // useEffect(() => {

    //   }, [user]);

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setUser(null))
            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    return (
        <>
            {
                user
                    ?
                    user.photoURL
                        ?
                        <>
                            <div className="dropdown">
                                <div className='dropbtn'>
                                    <img src={user?.photoURL} alt="Profile Pic" className="profileAvatar" />
                                </div>
                                <div className="dropdown-content">
                                    <Link to="/account">Account</Link>
                                    {user ? <a href='/' onClick={signOut}>Sign out</a> : <a href="/">Sign in</a>}
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="dropdown">
                                <div className='dropbtn'>
                                    <p className='profileAvatar-noImage text-white fs-6'>{user?.email?.slice(0, 1).toUpperCase()}</p>
                                </div>
                                <div className="dropdown-content">
                                    <Link to="/account">Account</Link>
                                    {user ? <a href='/' onClick={signOut}>Sign out</a> : <a href="/">Sign in</a>}
                                </div>
                            </div>
                        </>
                    :
                    <>
                        {/* <JoinModal /> */}
                        <SigninModal />
                    </>
            }
        </>
    )
}

export default ProfileAvatar