import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminNav() {
    return (
        <div className='d-flex admin'>
            <div className='adminNav'>
                <Link to="/admin-$*2334/admin-dashboard" className='text-black'>Dashboard</Link>
                <Link to="/admin-$*2334/admin-transactions" className='text-black'>Transactions</Link>
                <Link to="/admin-$*2334/admin-members" className='text-black'>Members</Link>
                <Link to="/admin-$*2334/admin-events" className='text-black'>Events</Link>
                <Link to="/admin-$*2334/admin-news" className='text-black'>News</Link>
                <Link to="/admin-$*2334/admin-donations" className='text-black'>Donations</Link>
                <Link to="/admin-$*2334/admin-recognition-awards" className='text-black'>Rec/Awards</Link>
                <Link to="/admin-$*2334/admin-new-members" className='text-black'>New Members</Link>
                <Link to="/admin-$*2334/admin-website" className='text-black'>Website</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default AdminNav