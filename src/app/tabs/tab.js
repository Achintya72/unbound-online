import Image from "../myImage";

export default function Tab({ name, currentIndex, index, inactiveImg, activeImg, changeTab }) {
    const isActive = currentIndex == index;
    return (
        <div className="flex gap-[12px] px-[20px] py-[10px] relative z-10 items-center justify-center flex-1 cursor-pointer" onClick={() => changeTab(index)}>
            <Image src={isActive ? activeImg: inactiveImg} className="w-[18px] h-[18px]"/>
            <p className={`font-sans ${isActive ? "text-white-1000" : "text-white-200"}`}>{name}</p>
        </div>
    )
}