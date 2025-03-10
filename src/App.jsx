import './App.css'
import {
  CustomerReviews, Hero, Service, PopularProducts, SpecialOffers,Subscribe,SuperQuality,Footer
} from "./sections"
import Nav from './components/Nav'

function App() {


  return (
    <>
        <main className="relative">
                <Nav/>
           <section className='xl:padding-l wide:padding-r padding-b'>
                <Hero></Hero>
           </section>
           <section className='padding'>
                <PopularProducts/>
           </section>
           <section className='padding'>
                <SuperQuality/>
           </section>
           <section className='padding-x py-10'>
                <Service/>
           </section>
           <section className='padding'>
                <SpecialOffers/>
           </section>
           <section className='padding bg-pale-blue w-full'>
                <CustomerReviews/>
           </section>
           <section className='padding-x sm:py-32 py-16  w-full'>
                <Subscribe/>
           </section>
           <section className='bg-black w-full padding-x padding-t pb-8'>
                <Footer/>
           </section>
        </main>

    </>
  )
}

export default App
