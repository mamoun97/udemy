import React from 'react'

export default function Custom404() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex items-center gap-2 flex-col'>
                <span className='text-5xl font-extrabold text-primary'>404</span>
                <div className="border-b-1 border-content3 w-full"></div>
                This page could not be found.
            </div>
        </div>
    )
}
