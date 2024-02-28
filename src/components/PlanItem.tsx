// @ts-nocheck
"use client"

import { Tab } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import PlanRating from './PlanRating'

export default function PlanItem({ plan }) {

    return (
        <Link href={`/plans/${plan.id}`} className='border rounded-lg overflow-hidden'>
            <div className="">

                <div className="w-full h-72 rounded-lg overflow-hidden cursor-pointer relative">
                    {/* <Link href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" className='absolute z-40 w-12 h-6 top-4 left-2'>
                    <Image src={plan.images[0].src} alt="" priority className="w-full h-full object-center object-cover " width={1200}
                        height={1200} />
                    </Link> */}
                    <Image src={plan.images[0].src} alt="" priority className="w-full h-full object-center object-cover " width={1200}
                        height={1200} />
                </div>
                <div className=" m-4">
                    <Link
                        href={`/plans/${plan.id}`} className="block text-md font-medium text-gray-900 text-left uppercase">{plan.name}</Link>
                    <PlanRating rate={plan.rating} count={plan.numReviews} />
                </div>
            </div>
            <div className="m-4">
                <Link
                    href={`/plans/${plan.id}`} className="block text-md text-center font-medium text-gray-900 uppercase border p-2 rounded-sm">View plan</Link>
            </div>
        </Link>
    )
}
