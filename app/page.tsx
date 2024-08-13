import Image from "next/image";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/home/Footer";
import Guest from "@/components/layouts/Guest";

export default function Home() {
    return (
        <Guest>
            <Hero/>
            <Features/>
            <CallToAction/>
            <Footer/>
        </Guest>
    );
}
