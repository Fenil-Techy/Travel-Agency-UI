
import { BookaTrip } from "../sections/BookaTrip"
import { Companies } from "../sections/companylogo"
import { Destinations } from "../sections/Destinations"
import { Hero } from "../sections/Hero"
import { Services } from "../sections/Services"
import { Subscribe } from "../sections/Subscribe"
import { Testimonial } from "../sections/Testimonials"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

export const MainLayout = () => {
    return (
        <div className="">
            <NavBar />
            <main className="min-h-screen">
                <section>
                    <Hero />
                </section>
                <section id="services" className="py-10 xl:py-20">
                    <Services/>
                </section>
                <section id="destinations" className="py-15">
                    <Destinations/>
                </section>
                <section id="bookatrip" className="py-15">
                    <BookaTrip/>
                </section>
                <section className="py-15 xl:py-0">
                    <Testimonial/>
                </section>
                <section className="pb-10 xl:pb-0">
                    <Companies/>
                </section>
                <section className="py-15">
                    <Subscribe/>
                </section>
            </main>
            <Footer />
        </div>
    )
}