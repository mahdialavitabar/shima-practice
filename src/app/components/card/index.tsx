import Image from 'next/image'
type Props = {
  src: string
  alt: string
  title: string
  info: string
}

const CardComponent = ({ src, alt, title, info }: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-6 items-center bg-slate-200 rounded-lg shadow-lg shadow-slate-500">
      <Image
        src={require(`/public/${src}`)}
        alt={alt}
        width={100}
        height={100}
        className="object-cover w-[250px] h-[250px]"
      />
      <p>{title}</p>
      <p>{info}</p>
    </div>
  )
}

export default CardComponent
