import { Facebook, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer id="Contact" className="bg-[#F9DAE0] text-[#734908] py-10">
            <div className="mx-[100px] ">
                <div className="flex  space-x-12">
                    <div className="flex flex-col">
                        <h1 className="text-[#734908] text-[40px]">Contact</h1>
                        <p className="text-[15px] text-xl">0962672735</p>
                        <p className="text-[15px] text-xl">Choiarin186@gmail.com</p>
                        <p className="address-designer text-xl">HA NOI, VIET NAM</p>
                    </div>

                    <div className="address ">
                        <h2 className="text-[#734908] text-[40px]">Social</h2>
                        <div className="flex space-x-4">
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
                </div>
            </div>
        </footer>
    );
}

export default Footer;
