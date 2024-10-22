import React from 'react'

const UserInfo = () => {
  return (
    <div className='p-10 flex items-center justify-between'>
        <div className='flex items-center gap-8'>
            <img className='w-10 h-10 rounded-full object-cover' src="./avatar.png" alt="" />
            <h2>John Doe</h2>
        </div>
        <div className='flex gap-4'>
            <img className='w-4 h-4' src="./moreIcon.svg" alt="" />
            <img className='w-4 h-4' src="./videoIcon.svg" alt="" />
            <img className='w-4 h-4' src="./editIcon.svg" alt="" />
        </div>
    </div>
  )
}

export default UserInfo;