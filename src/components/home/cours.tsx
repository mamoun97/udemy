"use client"

import coursData from "@/data/coursData"
import { Card, Image, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react"
import Rating from "../ui/rating"

const data = [
    {
        name: "Science des données",
    },
    {
        name: "Certifications informatiques",
    },
    {
        name: "Leadership",
    },
    {
        name: "Développement Web",
    },
    {
        name: "Communication",
    },
    {
        name: "Analyses et informations économiques",
    },
]
export default function Cours() {


    return <div className="my-8 ">

        <div className="flex flex-col justify-center items-center text-center gap-4 my-6">
            <h1 className="text-3xl font-semibold ">
                Toutes les compétences dont vous avez besoin au même endroit
            </h1>
            <p className="text-sm">
                Des compétences essentielles aux sujets techniques, Udemy contribue à votre développement professionnel.
            </p>
        </div>
        <Tabs className="mt-6 w-full">
            {
                data.map((el, k) => {
                    return <Tab key={"c-" + k} title={el.name} >

                    </Tab>
                })
            }



        </Tabs>
        <div className="grid grid-cols-4 gap-2 w-full mt-4 max-[810px]:grid-cols-3 max-sm:grid-cols-2 max-[540px]:grid-cols-1">
            {
                coursData.map((el, k) => {
                    if(k>7)return ""
                    return <CardItem
                        data={el}
                    />
                })
            }
        </div>
    </div>
}

type CardProps = {
    data: typeof coursData[0]
}
function CardItem({ data }: CardProps) {
    return <Card isPressable className=" col-span-1 w-auto rounded-md">
        <CardHeader className="overflow-visible bg-black relative z-0 p-0 rounded-b-none">
            <Image
                alt="Card background"
                // removeWrapper
                className="object-cover rounded-none h-[180px] !w-full"
                src={data.image_240x135}
                width={"100%"}

            />
        </CardHeader>
        <CardBody className="pb-0 py-2 px-4 flex-col items-start gap-1 pb-6">

            <h4 className="font-semibold min-h-10 text-base line-clamp-2 leading-5">{data.title}</h4>
            <p className="text-sm text-zinc-600 line-clamp-1">{data.visible_instructors[0].title}</p>
            <div className="flex items-center gap-1">
                <span className="font-bold text-sm">{data.avg_rating.toFixed(1)}</span>
                <Rating size="sm" initialRating={Math.floor(data.rating)} />
                <span className="text-xs">
                    ({data.num_reviews})
                </span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-base font-bold">11,99 $US</span>
                <span className="text-[15px] font-normal line-through text-zinc-600">49,99 $US</span>
            </div>
            {/* <small className="text-default-500">12 Tracks</small> */}
        </CardBody>
    </Card>
}
