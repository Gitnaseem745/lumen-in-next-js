import CommentForm from "@/components/CommentForm/CommentForm";
import BackgroundLight from "@/components/Effect/BackgroundLight";
import { insImgOne, insImgTwo } from "@/public";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface PageProps {
    params: { name: string };
}
export default async function Page({ params } : PageProps) {
    const { name } = await params;
    return (
        <>
        <BackgroundLight />
        <div className="single-post py-16 px-4 flex flex-col items-center">
            <div className="relative max-w-3xl text-center">
                <p className="text-neutral-400 font-bold mb-16">BLOGLIST/</p>

                <div className="flex flex-col items-center gap-6">
                    <Link href={'/'} className="absolute left-[-3rem] top-[5rem] text-4xl text-[#7D7BEC]"><FiArrowLeft /></Link>
                    <h1 className="text-5xl font-semibold leading-[70px] mt-[-30px] tracking-wide capitalize">
                        {name.replaceAll(/[-^%$]/g, ' ')}
                    </h1>

                    <div className="flex items-center gap-4 mt-4">
                        <img
                            src={insImgOne}
                            alt="Author"
                            className="w-12 h-12 rounded-full"
                            />
                        <div className="flex flex-col text-left font-semibold">
                            <h3 className="text-neutral-100">
                                Naseem Ansari
                            </h3>
                            <p className="text-sm text-neutral-400 mt-2">
                                DEC 2, 2024 • 5 MIN READ
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full mt-10">
                    <img src={insImgTwo} alt="" className="w-full h-[400px] object-cover rounded-xl blur-[2px]" />
                    <img src={insImgTwo} alt="" className="absolute top-[25%] left-[25%] w-6/12 h-[200px] object-cover rounded-xl outline shadow-xl hover:scale-[200%] transition-all ease-in-out delay-[0.2s]" />
                    </div>
                    <p className="text-left text-neutral-300 leading-[1.8] tracking-wide text-xl mt-6">
                        Something has always existed. According to physics,
                        there can never be true physical nothingness—though
                        there can be times when existence resembles nothing,
                        such as a vacuum (the state of minimum possible energy)
                        (Phys.org). Creating a space where there are no quantum
                        fluctuations requires an enormous amount of energy, and
                        there would be a remnant of that energy in that space
                        afterwards if the fluctuations were flushed out, plus
                        an unstable environment. Even on computers, deleted data
                        is not actually tossed away, but rather written over.
                        <br />
                        <br />
                        The fact that there can never be nothingness means the
                        universe, and anything possibly beyond it, is eternal,
                        as something has always been around. Whatever we
                        consider to be before the Big Bang—God.
                    </p>
                </div>
                <CommentForm />
            </div>
        </div>
        </>
    );
};