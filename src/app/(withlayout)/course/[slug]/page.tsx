"use client"
import React from 'react'
import coursData from "@/data/coursData"
import Rating from '@/components/ui/rating'
import Link from 'next/link'
import { IoMdInformationCircle, IoMdPlay } from 'react-icons/io'
import { MdOutlineLanguage } from 'react-icons/md'
import { Button, Card, Tab, Tabs } from '@nextui-org/react'
import { GiPlayButton } from 'react-icons/gi'
export default function Page({ params }: { params: { slug: string } }) {

    const cour = coursData.find(el => el.id + "" == params.slug)
    if (!cour)
        return "no cours"

    return (
        <div className='min-h-screen'>
            <div className='min-h-[50vh] bg-[#333] '>
                <div className='max-w-6xl mx-auto grid grid-cols-3 max-sm:grid-cols-1 '>
                    <div className='col-span-2 p-8  text-white flex flex-col gap-3'>
                        <h1 className='font-bold text-2xl '>{cour.title}</h1>
                        <p className="text-lg text-white/90  md:max-w-[80%]">{cour.headline}</p>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-sm">{cour.avg_rating.toFixed(1)}</span>
                            <Rating size="sm" initialRating={Math.floor(cour.rating)} />
                            <span className="text-xs">
                                ({cour.num_reviews})
                            </span>
                        </div>
                        <p>
                            Créé par <Link href={"#"} className='text-blue-400'>{cour.visible_instructors[0].title}</Link>
                        </p>
                        <p className='flex items-center gap-1'>
                            <IoMdInformationCircle /> Dernière mise à jour :
                            {cour.last_update_date}
                            <MdOutlineLanguage />
                            {cour.caption_locales[0].title}

                        </p>
                    </div>
                    <div className=' p-6'>
                        <div className="relative">
                            <div className="absolute top-0 left-0 right-0">
                                <Card className='rounded-sm '>
                                    <div className='bg-center group cursor-pointer  h-48 flex items-center justify-center relative bg-cover bg-no-repeat' style={{
                                        backgroundImage: "url('" + cour.image_240x135 + "')"
                                    }}>
                                        <div className='w-16 h-16 shadow-md bg-white group-hover:text-primary  rounded-full flex items-center justify-center text-4xl'>
                                            <GiPlayButton />
                                        </div>

                                    </div>
                                    <Tabs fullWidth size='lg' >
                                        <Tab key="photos" className='font-bold' title="Personnel">

                                        </Tab>
                                        <Tab key="music" className='font-bold' title="Teams">

                                        </Tab>
                                    </Tabs>
                                    <div className='p-4'>
                                        <h1 className='text-lg font-semibold'>Inscrivez-vous aux meilleurs cours d'Udemy</h1>
                                        <p>
                                            Obtenez ce cours ainsi que plus de 900 de nos cours les mieux notés avec l'Abonnement individuel.
                                            <Link href={"#"}>En savoir plus</Link>
                                        </p>
                                        <h1 className='text-lg font-semibold mt-6 mb-2'>74,99 $US</h1>
                                        <Button fullWidth color='primary' variant='bordered' className='font-bold'>
                                            Add to cart
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
