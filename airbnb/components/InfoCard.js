import Image from "next/image"

const InfoCard = ({img, location,title,description,star,price,total}) => {
    return (
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image src={img} layout="fill" objectFit="cover"/>
        </div>
    )
}

export default InfoCard