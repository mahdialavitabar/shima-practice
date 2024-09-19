import CardComponent from '../components/card'
import Header from '../components/headers'
import SlideComponent from '../components/slide component'
import SwiperComponent from '../components/swiper'
export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-6 w-full">
        <div className="flex w-full">
          <SlideComponent />

          <SwiperComponent />
        </div>

        <div className="flex gap-6 justify-center items-center w-full mx-auto">
          <CardComponent src="1.jpeg" alt="1" title="1" info="1" />
          <CardComponent src="2.jpeg" alt="2" title="2" info="2" />
          <CardComponent src="3.jpeg" alt="3" title="3" info="3" />
          <CardComponent src="4.jpeg" alt="4" title="4" info="4" />
        </div>
      </div>
    </div>
  )
}
