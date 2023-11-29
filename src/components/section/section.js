import Image from "next/image";
import ImageEx from "@/../../public/SON.jpg";

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
                        <div className="mx-[100px] flex justify-around">
                            <div className=" text-center cursor-pointer">
                                <Image src={ImageEx} width={400} height={400} />
                                <p className="text-[#734908] text-2xl">BST Son</p>
                                <p>Thời gian: ....</p>
                            </div>
                            <div className=" text-center cursor-pointer">
                                <Image src={ImageEx} width={400} height={400} />
                                <p className="text-[#734908] text-2xl">BST Son</p>
                                <p>Thời gian: ....</p>
                            </div>
                            <div className=" text-center cursor-pointer">
                                <Image src={ImageEx} width={400} height={400} />
                                <p className="text-[#734908] text-2xl">BST Son</p>
                                <p>Thời gian: ....</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Section;
