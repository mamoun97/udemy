import { Button, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { MdLanguage } from 'react-icons/md'
import ButtonTheme from './button-theme'
import ButtonLang from './button-lang'


const logos = [
    "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
]
const items = {
    sec1: [
        "Udemy Business",
        "Enseigner sur Udemy",
        "Téléchargez l'application",
        "À propos d'Udemy",
        "Contactez-nous"
    ],
    sec2: [
        "Carrières",
        "Blog",
        "Aide et support",
        "Affilié",
        "Investisseurs"
    ],
    sec3: [
        "Conditions",
        "Politique de confidentialité",
        "Paramètres des cookies",
        "Plan du site",
        "Déclaration d'accessibilité"
    ]
}



export default function Footer() {
    return (
        <div className='bg-content2 mt-11'>

            <div className="mt-3 max-w-6xl mx-auto p-4 ">
                <div className="flex gap-1 justify-end">
                    {
                        logos.map((el, k) => {
                            return <img src={el} className='h-12' key={k} alt="" />
                        })
                    }
                </div>
                <Divider className='my-4 opacity-50' />
                <div className="grid grid-cols-4 gap-2 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2">
                    <div className='flex flex-col'>
                        {
                            items.sec1.map((el, k) => {
                                return <Link key={k} href={"#"} className='hover:underline text-sm hover:text-secondary'>
                                    {el}
                                </Link>
                            })
                        }
                    </div>
                    <div className='flex flex-col'>
                        {
                            items.sec2.map((el, k) => {
                                return <Link key={k} href={"#"} className='hover:underline text-sm hover:text-secondary'>
                                    {el}
                                </Link>
                            })
                        }
                    </div>
                    <div className='flex flex-col'>
                        {
                            items.sec3.map((el, k) => {
                                return <Link key={k} href={"#"} className='hover:underline text-sm hover:text-secondary'>
                                    {el}
                                </Link>
                            })
                        }
                    </div>
                    <div className='flex justify-end gap-2 max-sm:justify-center '>
                        <ButtonTheme />

                        <ButtonLang>
                            <Button className='' >
                                Language
                                <MdLanguage />
                            </Button>
                        </ButtonLang>
                    </div>
                </div>
                <div className="flex justify-between mt-10 max-sm:flex-col max-sm:items-center max-sm:gap-2">
                    <span className='text-3xl font-bold'>
                        UDEMY
                    </span>
                    <span>
                        © 2024 devSolution.
                    </span>
                </div>
            </div>
        </div>
    )
}
