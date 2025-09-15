'use client';

import { useState } from 'react';

interface EventCardProps {
    title: string;
    icon: string;
    description: string;
}

function EventCard({ title, icon, description }: EventCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="w-full h-64 cursor-pointer flex items-center justify-center"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* constrain card width so it centers in grid cell */}
            <div
                className="relative w-80 h-full transition-transform duration-700"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front of card */}
                <div
                    className="absolute inset-0 w-full h-full bg-[#5E376D] rounded-lg shadow-lg flex flex-col items-center justify-center p-6 text-white"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="text-4xl mb-4">{icon}</div>
                    <h3
                        className="text-xl font-bold text-center"
                        style={{ fontFamily: 'Aileron, Arial, sans-serif' }}
                    >
                        {title}
                    </h3>
                    <div className="mt-3 text-sm italic opacity-90">
                        Click to learn more
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className="absolute inset-0 w-full h-full bg-[#5E376D] rounded-lg shadow-lg flex items-center justify-center p-6 text-white"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <p
                        className="text-center text-lg leading-relaxed"
                        style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.6' }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function EventsPage() {
    const events = [
        {
            title: "Beginner Autodesk Inventor Workshops",
            icon: "⚙️",
            description: "Learn the basics of 3D design and modeling. 1P13 instructional assistants will help lead these workshops with our facilitators so beginners get support every step of the way."
        },
        {
            title: "Geometric Shapes in Architecture 3D Modeling",
            icon: "🔷",
            description: "Learn how to use different shapes to build miniature architectural models. This workshop teaches basic 3D modeling while letting students be creative."
        },
        {
            title: "Tiny Landmarks Challenge",
            icon: "🏛️",
            description: "Recreate a famous landmark in miniature. Students will use creativity and some engineering ideas to complete their models."
        }
    ];

    return (
        <main className="bg-[#F4ECF5] px-8 lg:px-16 py-16">
            <div className="w-full">
                <h1
                    className="text-7xl font-bold mb-12 text-[#5E376D] text-left"
                    style={{
                        fontFamily: 'Alatsi, sans-serif',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    Events
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            icon={event.icon}
                            description={event.description}
                        />
                    ))}
                </div>

                <p
                    className="text-xl text-[#6D6471] text-center italic"
                    style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}
                >
                    More events will be added later.
                </p>
            </div>
        </main>
    );
}