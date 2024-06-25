import Image from "./myImage";

export default function Feature({ description, title, image, color }) {
    return (
        <div className="bg-white-900 flex-1 flex flex-col justify-between p-[20px] rounded-[12px]">
            <div>
                <p className={`${color} font-sans font-bold`}>{title}</p>
                <p className="text-white-100 text-sans">{description}</p>
            </div>
            <Image src={image} className="w-[80%] overflow-hidden object-cover object-top h-auto mx-auto" />
        </div>
    )
}