import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from '@/components/WhyChooseUs'
import MovingCards from "@/components/MovingCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";



export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <MovingCards />
            <UpcomingWebinars/>
            <Instructors />
            <Footer />
        </main>
    );
}
