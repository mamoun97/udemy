"use client"

import { Swiper as SwiperF, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';



const cl = `
[&_.swiper-button-prev]:w-[38px]
[&_.swiper-button-prev]:h-[38px]
[&_.swiper-button-prev]:bg-[#0002]
[&_.swiper-button-prev]:rounded-[50%]
[&_.swiper-button-prev]:text-white  

[&_.swiper-button-next]:w-[38px]
[&_.swiper-button-next]:h-[38px]
[&_.swiper-button-next]:bg-[#0002]
[&_.swiper-button-next]:rounded-[50%]
[&_.swiper-button-next]:text-white  

[&_.swiper-button-prev:after]:text-[16px]
[&_.swiper-button-next:after]:text-[16px]

[&_.swiper-button-prev:hover]:bg[#0004]
[&_.swiper-button-next:hover]:bg[#0004]

[&_.swiper-button-prev.swiper-button-disabled]:opacity-[0]
[&_.swiper-button-next.swiper-button-disabled]:opacity-[0]

[&_.swiper-pagination]:hidden

`

function Swiper({
    className="",
    breakpoints = {},
    autoPlay = false,
    items = [],
    swiperProps = {},
    withPagination = false
}: {
    className?:string,
    swiperProps?: React.RefAttributes<SwiperRef> & React.PropsWithChildren<SwiperProps>,
    breakpoints?: any,
    autoPlay?: boolean,
    withPagination?: boolean,
    items?: Array<any>
}) {
    return (
        <div className={cl +" "+className}>
            <SwiperF
                style={{ width: '100%', height: '100%' }}
                spaceBetween={30}
                modules={[
                    Navigation, 
                    ...withPagination ? [Pagination] : [], 
                    ...autoPlay ? [Autoplay] : []
                ]}
                navigation
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        if (index) { }
                        return '<span class="' + className + '"></span>';
                    },
                }}
                onClickCapture={(e) => {
                    // console.log(e)
                }}
                onSwiper={(e) => {
                    // console.log(e)
                }}
                breakpoints={breakpoints}
                {...swiperProps}
            >
                {
                    items.map((el: any, index: number) => {


                        return <SwiperSlide key={index}>
                            {el}
                        </SwiperSlide>

                    })
                }
            </SwiperF>
        </div>
    )
}






export default Swiper
