import tarif from '@/data/tarif'
import { Button, Card } from '@nextui-org/react'
import React from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoMdArrowForward } from 'react-icons/io';
import { MdPerson } from 'react-icons/md';
export default function Tarifs() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center gap-4 my-6">
                <h1 className="text-3xl font-semibold ">
                    Accélérez votre évolution ou celle de votre entreprise
                </h1>
                <p className="text-sm max-w-xl">
                    Atteignez plus rapidement vos objectifs grâce à l'un de nos abonnements ou programmes. Essayez-en un gratuitement aujourd'hui, ou contactez le service commercial pour en savoir plus.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-4 max-sm:grid-cols-2 max-[560px]:grid-cols-1'>
                {
                    tarif.map((el, k) => {
                        return <Card className={'rounded-lg border-2 border-'+el.color}>
                            <div className="p-4 bg-content2">
                                <h1 className='font-bold text-lg'>{el.title}</h1>
                                <p className='text-xs'>{el.subtitle}</p>
                                <div className="flex items-center gap-2">
                                    <MdPerson />
                                    {el.numberUser}
                                </div>
                            </div>
                            <div className="p-4">
                                <h1 className='font-bold'>{el.t1}</h1>
                                <p className='text-xs'>{el.t2}</p>
                                <div className="my-4">
                                    <Button fullWidth color={el.color as "primary"|"secondary"} radius='sm'>
                                        {el.btnText}
                                        <IoMdArrowForward />
                                    </Button>
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    {
                                        el.items.map((item, i) => {
                                            return <p className='flex gap-2'>
                                                <AiOutlineCheckCircle className='w-[18px] h-[18px] min-w-[18px] text-green-600' />
                                                <p className='text-sm'>
                                                    {item}

                                                </p>
                                            </p>
                                        })
                                    }
                                </div>
                            </div>
                        </Card>
                    })
                }
            </div>
        </div>

    )
}
