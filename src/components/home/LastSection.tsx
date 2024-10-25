"use client"
import React from 'react'
import Swiper from '../ui/swiper'
import lastData from '@/data/lastData'
import { Button, Divider } from '@nextui-org/react'
import { IoMdArrowForward } from 'react-icons/io'



export default function LastSection() {
    return (
        <div>
            <Swiper
                className="grow"
                items={
                    lastData.map((el, k) => {
                        return <div className='grid grid-cols-2 h-screen max-sm:h-auto max-sm:grid-cols-1'>
                            <div className='flex flex-col items-start  p-10 max-sm:p-4  gap-4'>
                                <img src={el.icon} className='h-12 max-sm:h-9' alt="" />
                                <h1 className='text-3xl font-bold max-sm:text-xl '>
                                    {el.desc}
                                </h1>
                                <div className="grid grid-cols-2 max-sm:grid-cols-1  gap-6 mt-6">
                                    <div>
                                        <h1 className='text-4xl max-sm:text-2xl font-bold'>
                                            {el.pers1}
                                        </h1>
                                        <p>
                                            {el.pers1Desc}
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className='text-4xl max-sm:text-2xl font-bold'>
                                            {el.pers2}
                                        </h1>
                                        <p>
                                            {el.pers2Desc}
                                        </p>
                                    </div>
                                </div>
                                <Divider className="my-4" />
                                <Button className='rounded-sm' color='primary' size='lg'>
                                    Lire l'article complet
                                    <IoMdArrowForward />
                                </Button>
                            </div>
                            <div className='bg-cover bg-no-repeat bg-center max-sm:h-[50vh]' style={{
                                backgroundImage: "url('" + el.image + "')"
                            }}>

                            </div>

                        </div>
                    })
                }
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    8000: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }}

            />
        </div>
    )
}
