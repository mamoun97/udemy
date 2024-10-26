"use client"
import React from 'react'
import { Button, Input, Navbar as NavbarUI, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import Swiper from './ui/swiper';
import ButtonTheme from './button-theme';
import ButtonLang from './button-lang';
export default function Navbar({ withSlider = false }: { withSlider?: boolean }) {
    return (
        <>
            <NavbarUI position="sticky">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <Link href={"/"}>
                        <p className="font-bold text-inherit">UDEMY</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#" className='tracking-wider'>
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link href="#" aria-current="page" className='tracking-wider'>
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#" className='tracking-wider'>
                            Categories
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <div className='flex gap-1'>
                    <ButtonTheme />
                    <ButtonLang />
                </div>
                <NavbarContent justify="end">
                    <NavbarItem className="flex gap-1 ">
                        <Input
                            type="email"
                            label=""
                            className='min-w-40 hidden lg:flex'
                            placeholder="Search "
                            labelPlacement="outside"
                            endContent={
                                <IoSearch className='w-4 h-4' />
                            }

                        />
                        <Link href="/auth/login" className='hidden lg:flex'>
                            <Button as={"div"} variant="solid">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/auth/register"  >
                            <Button color="primary" as={"div"} variant="solid">
                                Sign Up
                            </Button>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarUI>
            <div className={withSlider ? 'flex flex-col h-[calc(100vh-64px)]' : ""}>


                {withSlider && <Swiper
                    className="grow"
                    items={[
                        <div className="grow text-black flex items-start flex-col justify-center bg-center h-full w-full bg-cover bg-no-repeat " style={{
                            backgroundImage: "url('https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg')"
                        }}>
                            <div className="ps-6 max-w-6xl mx-auto w-full">
                                <h1 className="text-4xl font-bold max-w-xl mb-6">
                                    Des compétences qui vous font évoluer
                                </h1>
                                <p className="text-lg max-w-2xl">
                                    La technologie et le monde du travail évoluent rapidement. Avec nous, vous êtes plus rapide. Obtenez les compétences pour atteindre vos objectifs et rester compétitif.
                                </p>
                            </div>
                        </div>,
                        <div className="grow text-black flex items-start flex-col justify-center bg-center h-full w-full bg-cover bg-no-repeat " style={{
                            backgroundImage: "url('https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg')"
                        }}>

                            <div className="ps-6 max-w-6xl mx-auto w-full">
                                <h1 className="text-4xl font-bold  max-w-xl mb-6">
                                    Un apprentissage qui vous ressemble
                                </h1>
                                <p className="text-lg max-w-2xl">
                                    Des compétences pour aujourd'hui (et demain). Nous vous accompagnons dans vos premiers pas.
                                </p>
                            </div>
                        </div>
                    ]}
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

                />}
            </div>

        </>

    )
}
