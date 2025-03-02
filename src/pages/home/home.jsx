import { FiMoreHorizontal } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";

export default function PostItem() {
    return (
        <main className={'flex items-center justify-center'}>
            <section className="text-black mx-auto mt-10 ">
                <div>
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2.5">
                            <img src="../../../public/img/ssss.png" alt="profileimg" />
                            <span>lewishamilton</span>
                            <img
                                className="w-[12px] h-[12px]"
                                src="../../../public/img/Frame.png"
                                alt="frameimg"
                            />
                            <span>• 5h</span>
                        </div>
                        <FiMoreHorizontal />
                    </div>
                </div>
                <div>
                    <img src="../../../public/img/Auto%20Layout%20Horizontal.png" alt="homeimg" />
                </div>
                <div className="flex gap-4 text-2xl my-2">
                    <FiHeart />
                    <FiMessageCircle />
                </div>
                <span>741,368 likes</span>
                <div>
                    <span>lewishamilton</span>
                    <span>
          Parabéns Ayrton, minha inspiração sempre 🇧🇷💫
        </span>
                </div>
                <p>See translation</p>
                <p className="text-gray-400">View all 13,384 comments</p>
                <div className="flex items-center justify-between border-b border-gray-500 pb-5 mb-5">
                    <p>Add a comment…</p>
                    <CiFaceSmile />
                </div>
            </section>
        </main>
    );
}