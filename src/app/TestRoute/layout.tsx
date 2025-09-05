import React from 'react'
//TODO: Important de continuer
export default function TestLayout( {children}: {children: React.ReactNode}) {
    return (
        <div className='flex flex-col justify-center items-center m-10'>
            {children}
        </div>
    )
}
