import Image from "../myImage";

export default function Tab({ name, children, currentIndex, index, inactiveImg, activeImg, changeTab }) {
    const isActive = currentIndex == index;
    return (
        <div className="flex relative gap-[12px] px-[20px] py-[10px] items-center justify-center flex-1 cursor-pointer" onClick={() => changeTab(index)}>
            {children}
            <Image src={isActive ? activeImg: inactiveImg} className="relative z-10 w-[18px] h-[18px]"/>
            <p className={`font-sans relative z-10 ${isActive ? "text-white-1000" : "text-white-200"}`}>{name}</p>
        </div>
    )
}