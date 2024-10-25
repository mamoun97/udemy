import review from '@/data/reviews'
import { Avatar, Button, Card } from '@nextui-org/react'

import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

export default function ReviewsSection() {
    return (
        <div className='my-14'>
            <div className="flex flex-col justify-center items-center text-center gap-4 my-6">
                <h1 className="text-3xl font-semibold ">
                Voir ce que d'autres réalisent grâce à l'apprentissage

                </h1>
                
            </div>
            <div className='grid grid-cols-4 gap-2 max-sm:grid-cols-2 max-[540px]:grid-cols-1'>
                {
                    review.map((el, k) => {
                        return <Card className='p-4 flex flex-col gap-4'>
                            <RiDoubleQuotesL className='text-2xl' />
                            <div className="text-sm grow">
                                {el.desc}

                            </div>
                            <div className='flex gap-2'>
                                <Avatar src={el.image} className='min-w-10' />
                                <div className="text-xs opacity-70">
                                    {el.info}
                                </div>
                            </div>
                            <Button variant='light'>
                                More
                            </Button>
                        </Card>
                    })
                }
            </div>
        </div>

    )
}
