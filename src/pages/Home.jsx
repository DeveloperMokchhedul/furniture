import BestSelling from "../components/bestSelling/BestSelling"
import Experience from "../components/Experience/Experience"
import Hero from "../components/Hero"
import Metarial from "../components/metarial/Metarial"
import Testimonial from "../components/testimonial/Testimonial"
import WhyChoseUs from "../components/whyChoose/WhyChoseUs"


function Home() {
  return (
    <>
    <div>
      <Hero />
      <WhyChoseUs />
      <BestSelling />
      <Experience />
      <Metarial />
      <Testimonial />
    </div>
    </>
  )
}

export default Home
