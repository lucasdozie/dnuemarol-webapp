import React from 'react'
import Filters from '../../job/Alljob/filters'
import Header from '../../landingPage/header'
import Ham from '../dashLanding/ham'
import ProfilePer from './profile_percentage'
import ProfileUpdate from './profile_update'

function Profile() {
  return (
    <div className='text-blackTint'>
        <Header/>
        <div className="px-10 flex py-10">
            <Ham/>
            <Filters/>
        </div>
        <div className='flex gap-40 px-10'>
            <ProfileUpdate/>
            <ProfilePer/>
        </div>
      
    </div>
  )
}

export default Profile
