
import Hero from '../components/Hero'
import Plans from '../components/Plans'
import Showcase from '../components/Showcase'

export default function Home() {

  return (
    <>

      <Hero />

      <Showcase />

      <h2 className=" container mx-auto px-4 text-xl text-gray-700 font-extrabold tracking-tight  sm:text-4xl mb-8 lg:px-6">
        Top plans
      </h2>
      <Plans />

    </>
  )
}
