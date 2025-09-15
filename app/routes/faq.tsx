export default function FAQPage() {
    return (
        <main className="bg-[#F4ECF5] pl-8 lg:pl-16 pr-4 lg:pr-8 py-16">
            <div className="w-full">
                <h1
                    className="text-7xl font-bold mb-12 text-[#5E376D] text-left"
                    style={{
                        fontFamily: 'Alatsi, sans-serif',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    Any Questions?
                </h1>

                <div className="space-y-8">
                    {/* Question 1 */}
                    <div>
                        <h2 className="text-xl font-bold text-[#6D6471] mb-2" style={{ fontFamily: 'Aileron, Arial, sans-serif' }}>
                            Do I need experience to join?
                        </h2>
                        <p className="text-lg text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            No. Workshops are beginner-friendly, and we will guide you through the basics.
                        </p>
                    </div>

                    {/* Question 2 */}
                    <div>
                        <h2 className="text-xl font-bold text-[#6D6471] mb-2" style={{ fontFamily: 'Aileron, Arial, sans-serif' }}>
                            What kind of projects will we do?
                        </h2>
                        <p className="text-lg text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            We do small-scale architectural models, challenges like recreating famous landmarks, and 3D modeling workshops. Some workshops also include engineering ideas.
                        </p>
                    </div>

                    {/* Question 3 */}
                    <div>
                        <h2 className="text-xl font-bold text-[#6D6471] mb-2" style={{ fontFamily: 'Aileron, Arial, sans-serif' }}>
                            Do I need to bring materials?
                        </h2>
                        <p className="text-lg text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            No. We will provide everything you need.
                        </p>
                    </div>

                    {/* Question 4 */}
                    <div>
                        <h2 className="text-xl font-bold text-[#6D6471] mb-2" style={{ fontFamily: 'Aileron, Arial, sans-serif' }}>
                            When are meetings and workshops?
                        </h2>
                        <p className="text-lg text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            Our first events will start this fall after ClubFest. Dates will be on the website and Instagram.
                        </p>
                    </div>

                    {/* Question 5 */}
                    <div>
                        <h2 className="text-xl font-bold text-[#6D6471] mb-2" style={{ fontFamily: 'Aileron, Arial, sans-serif' }}>
                            Is there a cost to join?
                        </h2>
                        <p className="text-lg text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            Membership is free. Some events may have small material costs, but we will tell you in advance.
                        </p>
                    </div>

                    {/* Question 6 */}
                    <div>
                        <h2 className="text-xl font-bold text-[#6D6471] mb-2" style={{ fontFamily: 'Aileron, Arial, sans-serif' }}>
                            Where can I find updates?
                        </h2>
                        <p className="text-lg text-[#6D6471]" style={{ fontFamily: 'Aileron, Arial, sans-serif', lineHeight: '1.8' }}>
                            Follow us on Instagram @microbuildmcmaster or check your email after signing up.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}