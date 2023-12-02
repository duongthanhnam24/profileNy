import Image from "next/image";
import slider from "../../public/slider.jpg";
import { Facebook, Instagram } from "lucide-react";
import Section from "@/components/section/section";

export default function Home() {
    return (
        <>
            {/* <div className="bg-[#FBCBD5] h-[500px]"> hêllooo</div>
            <section className="mt-[50px] bg-[#F9DAE0] h-[500px]">Home page</section> */}
            <section className="mt-[50px]">
                {/* slider */}
                <div id="Slider" className="bg-[#FBCBD5] flex justify-around ">
                    <div className="my-auto ">
                        <h1 className="text-[80px] text-[#734908] font-medium italic">Linhrin</h1>
                        <h2 className="text-[#734908] text-[20px] ml-[3px]">Fashion Designer</h2>
                        <div className="flex space-x-2 mt-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100012738408136"
                                className="text-[#734908]"
                            >
                                <Facebook />
                            </a>
                            <a
                                href="https://www.instagram.com/k._.liring/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                className="text-[#734908]"
                            >
                                <Instagram />
                            </a>
                        </div>
                    </div>
                    <Image
                        src={slider}
                        className=" object-cover"
                        width={660}
                        height={660}
                        alt="..."
                    />
                </div>

                {/* introduce */}
                <Section page={"01"} text={"About"} background={"bg-[#F9DAE0]"}>
                    <div className="flex flex-col justify-center min-h-[660px] w-3/4">
                        <h2 className="text-[50px]">Đặng Khánh linh</h2>
                        <p className="text-[20px]">A short story</p>
                        <p className="text-[30px] text-justify">
                            Xin chào, mình là linh năm nay mình 23 tuổi hiện tại đang là sinh viên
                            năm cuối của Đại học Mỹ Thuật Công Nghiệp, chuyên ngành thiết kế thời
                            trang, mong muốn phát triển bản thân, trở thành nhà thiết kế thời trang
                            giỏi
                        </p>
                    </div>
                </Section>

                {/* collection */}
                <Section page={"02"} text={"My collection"} background={"bg-[#FBCBD5] "} collection>
                    <div
                        id="collection"
                        className="flex flex-col justify-center min-h-[660px] w-3/4"
                    >
                        <h2 className="text-[50px]">My collection</h2>
                        <p className="text-[20px]">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It
                            has roots in a piece of classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin professor at
                            Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered the
                            undoubtable source.
                        </p>
                    </div>
                </Section>
            </section>
        </>
    );
}
