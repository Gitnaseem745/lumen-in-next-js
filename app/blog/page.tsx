import MainMenu from '@/components/AnimatedMenu/MainMenu'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen w-full'>
        <MainMenu />
        <div>
            <h1></h1>
            <p></p>
            <div>
                <input type="text" />
                <button></button>
            </div>
        </div>
        <div className='flex flex-row overflow-x-auto'>
            {/* category.map(cards) */}
        </div>
        <div>
            <h1>see our</h1>
            <div>
                <h1>Featured</h1>
                <button></button>
            </div>
            <div>
                {/* cards */}
            </div>
        </div>
    </div>
  )
}

export default page
