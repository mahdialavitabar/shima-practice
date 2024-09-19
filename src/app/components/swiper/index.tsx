'use client'
import {
  DeleteOutlined,
  ProfileOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
type Props = {}

const SwiperComponent = (props: Props) => {
  return (
    <div className="w-[80%] h-32">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="h-32"
      >
        <SwiperSlide className="flex justify-center items-center">
          <Link href="/">
            <UserAddOutlined className="text-5xl text-black" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Link href="/">
            <ProfileOutlined className="text-5xl text-black" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Link href="/">
            <DeleteOutlined className="text-5xl text-black" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Link href="/">
            <UserAddOutlined className="text-5xl text-black" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Link href="/">
            <ProfileOutlined className="text-5xl text-black" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperComponent
