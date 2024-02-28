import React from 'react'
import Custom from '../../components/categories/Custom'


const page = () => {
    return (
        <div className='bg-white'>
            <div className="py-16 lg:py-24 p-4 bg-gray-50 ">
                <div className="container mx-auto">
                    <h1 className="text-xl leading-10 font-extrabold tracking-tight text-indigo-700 sm:text-2xl sm:leading-none lg:text-4xl">
                        Custom Designs
                    </h1>
                    <Custom />
                </div>
            </div>
        </div>
    )
}

export default page