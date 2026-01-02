
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
            <main >
                <section >
                    <Hero />
                </section>
                <section className="py-10">
                    <Services/>
                </section>
                <section className="py-15">
                    <Destinations/>
                </section>
                <section className="py-15">
                    <BookaTrip/>
                </section>
                <section className="py-15">
                    <Testimonial/>
                </section>
                <section className="pb-10">
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