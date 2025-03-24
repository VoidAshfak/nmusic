"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
        description:
            "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
        description:
            "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="https://images.ctfassets.net/crb83veve8xb/2VaNf5PhpBlvKAUKYfmefe/5fdaf99f05704485b02e14e8d4addefb/vercel.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
        description:
            "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Live Feedback & Engagement",
        description:
            "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Cutting-Edge Curriculum",
        description:
            "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    
];


export default function WhyChooseUs() {
    return (
        <div className="">
            <StickyScroll content={content} />
        </div>
    );
}
