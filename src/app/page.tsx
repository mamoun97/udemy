
import Cours from "@/components/home/cours";
import LastSection from "@/components/home/LastSection";
import ReviewsSection from "@/components/home/reviews";
import Tarifs from "@/components/home/tarifs";
import Swiper from "@/components/ui/swiper";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">


      <div className="flex flex-col h-screen ">
        <Navbar>
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">UDEMY</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Categories
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <Swiper
          className="grow"
          items={[
            <div className="grow flex items-start flex-col justify-center bg-center h-full w-full bg-cover bg-no-repeat " style={{
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
            <div className="grow flex items-start flex-col justify-center bg-center h-full w-full bg-cover bg-no-repeat " style={{
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

        />
      </div>
      <div className="mt-3 max-w-6xl mx-auto p-4">
        <Cours />
      </div>
      <div className="mt-3 max-w-6xl mx-auto p-4">
        <Tarifs />
      </div>
      <div className="mt-3 max-w-6xl mx-auto p-4">
        <ReviewsSection />
      </div>
      <div className="mt-14  mx-auto">
        <LastSection />
      </div>
    </div>
  );
}
