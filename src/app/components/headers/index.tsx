'use client'
type Props = {}
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  DeleteOutlined,
  ProfileOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import { Pagination } from 'swiper/modules'

const Header = (props: Props) => {
  return (
    <div>
      <div className="bg-transparent fixed w-full flex justify-between items-center h-20">
        <div>
          <Image
            className="mx-auto items-center justify-between"
            src={require('/public/logo.png')}
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex gap-8 items-center justify-center font-extrabold">
          <Link href="/" className="shadow-md shadow-black drop-shadow-md">
            <span className="text-black bg-white px-2 rounded opacity-80">
              Home
            </span>
          </Link>
          <Link href="/about" className="shadow-md shadow-black drop-shadow-md">
            <span className="text-black bg-white px-2 rounded opacity-80">
              About
            </span>
          </Link>
          <Link
            href="/contact"
            className="shadow-md shadow-black drop-shadow-md"
          >
            <span className="text-black bg-white px-2 rounded opacity-80">
              Contact
            </span>
          </Link>
        </div>
        <div className="flex justify-center items-center ">
          <button className="text-black px-4 py-2 ml-4 rounded bg-white">
            ورود/‍‍‍ثبت نام
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <Image
          src="/apple2.jpg"
          alt="Apple 2"
          layout="responsive"
          width={1000}
          height={800}
        />
        <Image
          src="/apple1.jpg"
          alt="Apple 1"
          layout="responsive"
          width={1000}
          height={800}
        />

        <Image
          src="/apple3.jpg"
          alt="Apple 3"
          layout="responsive"
          width={1000}
          height={800}
        />
      </div>
      <div className="w-full h-32">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="h-32"
        >
          <SwiperSlide className="flex justify-center items-center">
            <UserAddOutlined className="text-5xl text-black" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <ProfileOutlined className="text-5xl text-black" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <DeleteOutlined className="text-5xl text-black" />
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default Header
