import { useState } from "react";
import { FiMoreHorizontal, FiHeart, FiMessageCircle } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function PostItem() {
    const [liked, setLiked] = useState(Array(3).fill(false));
    const [likeCounts, setLikeCounts] = useState(Array(3).fill(741368));

    const handleLike = (index) => {
        setLiked(prevLiked => {
            const newLiked = [...prevLiked];
            newLiked[index] = !newLiked[index];
            return newLiked;
        });
        
        setLikeCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = liked[index] ? newCounts[index] - 1 : newCounts[index] + 1;
            return newCounts;
        });
    };

    return (
        <main className={'flex flex-col items-center justify-center'}>
            {[...Array(3)].map((_, index) => (
                <section key={index} className="text-black mx-auto mt-10 ">
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
                        <button onClick={() => handleLike(index)} className="focus:outline-none">
                            {liked[index] ? <FaHeart className="text-red-500" /> : <FiHeart />}
                        </button>
                        <FiMessageCircle />
                    </div>
                    <span>{likeCounts[index].toLocaleString()} likes</span>
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
            ))}
        </main>
    );
}
