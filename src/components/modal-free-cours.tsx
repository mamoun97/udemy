"use client"
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import coursData from '@/data/coursData';

export default function ModalFreeCours() {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    useEffect(() => {
        setTimeout(onOpen,2000)
    }, [])
    return (
        <div>
            <Modal
                size={"3xl"}
                scrollBehavior="outside"
                isOpen={isOpen} onOpenChange={onOpenChange}
                onClose={onClose}
            >
                <ModalContent className='overflow-hidden'>

                    <div className='min-h-[80vh] grid grid-cols-2 grid-rows-1 max-sm:grid-cols-1 overflow-auto  p-4'>
                        <div className='flex flex-col justify-center max-sm:justify-start p-6'>
                            <div>
                                <h1 className='text-3xl font-bold'>
                                    Discover <span className='text-rose-500 mx-1'>more then 100 free courses</span>
                                    for creatives
                                </h1>
                                <p className='flex mt-4 items-center gap-2 text-xl font-semibold'>
                                    <span className='line-through text-foreground-600'>1200 DZD</span>
                                    <span>0 DZD</span>
                                </p>
                                <div className='w-fit mt-2'>
                                    <Button className='w-52' color='danger'>
                                        Join for free
                                    </Button>
                                    <div className="text-center text-sm mt-2 text-warning">
                                        Limited time offer
                                    </div>
                                </div>
                                <p className='text-xs font-normal mt-6'>
                                After your 30-day trial period you will be subscribed to the annual plan, $10.00/month (One payment of $119.99 USD). Cancel any time.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-4 gap-1'>
                            {
                                coursData.map((el, k) => {
                                    if (k > 7) return ""
                                    return <div className='bg-cover min-h-20 rounded-md bg-center bg-no-repeat' style={{
                                        backgroundImage: "url('" + el.image_240x135 + "')"
                                    }}>

                                    </div>
                                })
                            }
                        </div>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    )
}




