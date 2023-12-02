"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import Image from "next/image";
import ImageEx from "@/../../public/son/SON.jpg";

import Butterfly from "@/../../public/Butterfly/anh3.jpg";
import Dahoi from "@/../../public/dahoi/1.jpg";
import Khacsan from "@/../../public/khacsan/1.jpg";
import Muaha from "@/../../public/muaha/1.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
const collections = [
    {
        name: "BST Son",
        author: "CLB",
        Link: ImageEx,
        Link2: "son",
    },
    {
        name: "Butterfly",
        author: "CLB",
        Link: Butterfly,
        Link2: "butterfly",
    },
    {
        name: "Dạ Hội",
        author: "Personal",
        Link: Dahoi,
        Link2: "dahoi",
    },
    {
        name: "Khác sạn",
        author: "Personal",
        Link: Khacsan,
        Link2: "khachsan",
    },
    {
        name: "Mùa hạ",
        author: "Personal",
        Link: Muaha,
        Link2: "muaha",
    },
];

function Section({ children, page, text, background, collection }) {
    return (
        <>
            <div className={`${background} text-[#734908] `}>
                <div className=" mx-[100px] flex justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[80px]">{page}</h1>
                        <h3 className="text-[30px]">{text}</h3>
                    </div>
                    {children}
                </div>
                {collection && (
                    <>
                        <div className="mx-[100px] flex justify-center pb-16 items-center">
                            <button
                                className={`back bg-[#6d3f0a] text-white sm:ml-2 w-[30px] h-[30px]`}
                            >
                                <ChevronLeft />
                            </button>
                            <Swiper
                                className="mt-10 "
                                modules={[Navigation, Pagination, A11y]}
                                slidesPerView={4}
                                spaceBetween={20}
                                breakpoints={{
                                    375: { slidesPerView: 1, spaceBetween: 0 },
                                    740: { slidesPerView: 3, spaceBetween: 20 },
                                    1275: { slidesPerView: 4 },
                                }}
                                navigation={{
                                    prevEl: `.back`,
                                    nextEl: `.next`,
                                }}
                                rewind={true}
                                loop={true}
                            >
                                {collections.map((item) => {
                                    return (
                                        <SwiperSlide key={item.name}>
                                            <Link href={`/${item.Link2}`}>
                                                <div className=" text-center cursor-pointer hover:opacity-[0.7]">
                                                    <Image
                                                        src={item.Link}
                                                        width={400}
                                                        height={400}
                                                        className="object-cover"
                                                        alt="..."
                                                    />
                                                    <p className="text-[#734908] text-2xl">
                                                        {item.name}
                                                    </p>
                                                    <p>{item.author}</p>
                                                    <p className=" underline italic">
                                                        Xem chi tiết
                                                    </p>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            <button
                                className={`next bg-[#6d3f0a] text-white sm:mr-2 w-[30px] h-[30px]`}
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Section;
