"use client"
import objectifsData from '@/data/objectifs-data'
import { Button, Card } from '@nextui-org/react'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { IoMdArrowForward } from 'react-icons/io'

export default function Objectifs() {
  const [index, setIndex] = useState(0)

  const img = useMemo(() => {
    return <img src={objectifsData[index].image} alt="" />
  }, [index])
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-4 my-6">
        <h1 className="text-3xl font-semibold ">
          Un apprentissage axé sur vos objectifs
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">

        <div className="flex flex-col gap-4 p-6">
          {
            objectifsData.map((el, k) => {
              return <div key={k} className={`
                  p-6 flex flex-row items-center overflow-hidden gap-4 rounded-md cursor-pointer
                  border  border-content4 hover:bg-content2
                  ${index == k ? "!border-secondary border-s-8" : ""}
                `}
                onClick={() => {
                  setIndex(k)
                }}>
                <img src={el.icon} alt="" className='h-11' />
                <div className='h-full text-lg w-full flex flex-col gap-2'>
                  <h1 className='text-xl font-bold flex items-center gap-2'>
                    {el.title}
                    {
                      el.abnm && <Button className='p-1 font-semibold' variant='bordered' color='secondary' size='sm'>
                        {el.abnm}
                      </Button>
                    }
                  </h1>
                  <p className='text-base text-start '>
                    {el.desc}
                  </p>
                  {
                    el.abnm && <div >
                      <Link href={"#"} className='text-sm flex items-center gap-2 font-bold text-secondary'>
                        En Savoir plus
                        <IoMdArrowForward />
                      </Link>
                    </div>
                  }
                </div>
              </div>
            })
          }
        </div>
        <div className='overflow-hidden ps-12 pt-12'>
          {img}
        </div>

      </div>
    </div>
  )
}
