import Image from "next/image";
import son1 from "@/../../public/son/anh1.png";
import son2 from "@/../../public/son/anh2.png";
import son3 from "@/../../public/son/anh3.png";
import son4 from "@/../../public/son/anh4.png";

import but1 from "@/../../public/Butterfly/anh1.jpg";
import but2 from "@/../../public/Butterfly/anh2.jpg";

import dahoi1 from "@/../../public/dahoi/anh1.jpg";
import dahoi2 from "@/../../public/dahoi/anh2.jpg";
import dahoi3 from "@/../../public/dahoi/anh3.jpg";
import dahoi4 from "@/../../public/dahoi/anh4.jpg";
import dahoi5 from "@/../../public/dahoi/anh5.jpg";
import dahoi6 from "@/../../public/dahoi/anh6.jpg";

import khachsan1 from "@/../../public/khacsan/anh1.jpg";
import khachsan2 from "@/../../public/khacsan/anh2.jpg";
import khachsan3 from "@/../../public/khacsan/anh3.jpg";
import khachsan4 from "@/../../public/khacsan/anh4.jpg";
import khachsan5 from "@/../../public/khacsan/anh5.jpg";

import muaha1 from "@/../../public/muaha/anh1.jpg";
import muaha2 from "@/../../public/muaha/anh2.jpg";
import muaha3 from "@/../../public/muaha/anh3.jpg";
import muaha4 from "@/../../public/muaha/anh4.jpg";
const son = {
    name: "BST son",
    author: "CLB",
    pic: {
        pic1: son1,
        pic2: son2,
        pic3: son3,
        pic4: son4,
    },
};

const butterfly = {
    name: "Butterfly",
    author: "CLB",
    pic: {
        pic1: but1,
        pic2: but2,
    },
};

const dahoi = {
    name: "Dạ Hội",
    author: "Personal",
    pic: {
        pic1: dahoi1,
        pic2: dahoi2,
        pic3: dahoi3,
        pic4: dahoi4,
        pic5: dahoi5,
        pic6: dahoi6,
    },
};

const khachsan = {
    name: "Khác sạn",
    author: "Personal",
    pic: {
        pic1: khachsan1,
        pic2: khachsan2,
        pic3: khachsan3,
        pic4: khachsan4,
        pic5: khachsan5,
    },
};

const muaha = {
    name: "Mùa Hạ",
    author: "Personal",
    pic: {
        pic1: muaha1,
        pic2: muaha2,
        pic3: muaha3,
        pic4: muaha4,
    },
};

function collection({ params }) {
    switch (params.collection) {
        case "son":
            return (
                <section className="bg-[#FBCBD5] mt-[50px] py-10">
                    <h1 className="text-center text-5xl font-bold py-4">{son.name}</h1>
                    <p className="text-center my-4 text-xl">Author : {son.author}</p>
                    <div className="flex justify-around">
                        <div className="flex flex-col justify-around space-y-12">
                            <Image
                                src={son.pic.pic1}
                                className=" rounded-md object-cover"
                                alt="..."
                            />
                            <Image
                                src={son.pic.pic2}
                                className=" rounded-md object-cover"
                                alt="..."
                            />
                            <Image
                                src={son.pic.pic3}
                                className=" rounded-md object-cover"
                                alt="..."
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <Image
                                src={son.pic.pic4}
                                className="w-[760px] h-[1200px] rounded-md object-cover"
                                alt="..."
                            />
                        </div>
                    </div>
                </section>
            );
        case "butterfly":
            return (
                <section className="bg-[#FBCBD5] mt-[50px] py-10">
                    <h1 className="text-center text-5xl font-bold py-4">{butterfly.name}</h1>
                    <p className="text-center my-4 text-xl">Author : {butterfly.author}</p>
                    <div className="flex justify-around">
                        <div className="flex flex-col justify-around space-y-12">
                            <Image
                                src={butterfly.pic.pic1}
                                className=" rounded-md w-[760px] h-[1200px] object-cover"
                                alt="..."
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <Image
                                src={butterfly.pic.pic2}
                                className="w-[760px] h-[1200px] rounded-md object-cover"
                                alt="..."
                            />
                        </div>
                    </div>
                </section>
            );
        case "dahoi":
            return (
                <section className="bg-[#FBCBD5] mt-[50px] py-10">
                    <h1 className="text-center text-5xl font-bold py-4">{dahoi.name}</h1>
                    <p className="text-center my-4 text-xl">Author : {dahoi.author}</p>
                    <div className="flex justify-around">
                        <div className="flex flex-col justify-around space-y-12">
                            <Image
                                src={dahoi.pic.pic1}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                            <Image
                                src={dahoi.pic.pic2}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                            <Image
                                src={dahoi.pic.pic3}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                        </div>
                        <div className="flex flex-col justify-around space-y-12">
                            <Image
                                src={dahoi.pic.pic4}
                                className="w-[400px] h-[600px] rounded-md object-cover"
                                alt="..."
                            />
                            <Image
                                src={dahoi.pic.pic5}
                                className="w-[400px] h-[600px] rounded-md object-cover"
                                alt="..."
                            />{" "}
                            <Image
                                src={dahoi.pic.pic6}
                                className="w-[400px] h-[600px] rounded-md object-cover"
                                alt="..."
                            />
                        </div>
                    </div>
                </section>
            );
        case "khachsan":
            return (
                <section className="bg-[#FBCBD5] mt-[50px] py-10">
                    <h1 className="text-center text-5xl font-bold py-4">{khachsan.name}</h1>
                    <p className="text-center my-4 text-xl">Author : {khachsan.author}</p>
                    <div className="flex justify-around">
                        <div className="flex flex-col justify-around space-y-12">
                            <Image
                                src={khachsan.pic.pic1}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                            <Image
                                src={khachsan.pic.pic2}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                            <Image
                                src={khachsan.pic.pic3}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <Image
                                src={khachsan.pic.pic5}
                                className="w-[760px] h-[1200px] rounded-md object-cover"
                                alt="..."
                            />
                        </div>
                    </div>
                </section>
            );
        case "muaha":
            return (
                <section className="bg-[#FBCBD5] mt-[50px] py-10">
                    <h1 className="text-center text-5xl font-bold py-4">{muaha.name}</h1>
                    <p className="text-center my-4 text-xl">Author : {muaha.author}</p>
                    <div className="flex justify-around">
                        <div className="flex flex-col justify-around space-y-12">
                            <Image
                                src={muaha.pic.pic1}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="....."
                            />
                            <Image
                                src={muaha.pic.pic2}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                            <Image
                                src={muaha.pic.pic3}
                                className=" rounded-md object-cover w-[400px] h-[600px]"
                                alt="..."
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <Image
                                src={muaha.pic.pic4}
                                className="w-[760px] h-[1200px] rounded-md object-cover"
                                alt="..."
                            />
                        </div>
                    </div>
                </section>
            );
        default:
            break;
    }
}

export default collection;
