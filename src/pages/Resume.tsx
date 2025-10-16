import React, {useState, useEffect, useRef} from 'react';
import {Header} from '../components/Header';

export function Resume() {
    const [visibleSections, setVisibleSections] = useState(new Set());
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // @ts-ignore
                        setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
                    }
                });
            },
            {threshold: 0.2}
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: any) => {
        // @ts-ignore
        if (el && !sectionRefs.current.includes(el)) {
            // @ts-ignore
            sectionRefs.current.push(el);
        }
    };

    const isVisible = (section: unknown) => visibleSections.has(section);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Header */}
            {/*<div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">*/}
            {/*    <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">*/}
            {/*        <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">*/}
            {/*            ← Back*/}
            {/*        </a>*/}
            {/*        <h1 className="text-2xl font-bold text-white">Resume</h1>*/}
            {/*        <div className="w-16"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Header/>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div
                    ref={addToRefs}
                    data-section="header"
                    className={`text-center mb-20 transition-all duration-1000 ${
                        isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-6xl font-bold text-white mb-4 pt-10">
                        Silas Miller
                    </h2>
                    <p className="text-xl text-purple-300 mb-6">Full Stack Engineer</p>
                    <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                        <span>📍 Portland, OR 97202</span>
                        <span>📞 360-480-6881</span>
                        <span>✉️ silasmiller1998@gmail.com</span>
                    </div>
                </div>

                {/* Summary */}
                <div
                    ref={addToRefs}
                    data-section="summary"
                    className={`mb-20 transition-all duration-1000 delay-200 ${
                        isVisible('summary') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div
                        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                        <h3 className="text-3xl font-bold text-white mb-4">Summary</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Dynamic Full Stack Engineer with expertise in developing and maintaining high-uptime web
                            applications using React, Node.js, and Python. Proven ability in security compliance, Agile
                            methodologies, and API integration to deliver innovative features that enhance user
                            experience and align with industry standards.
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div
                    ref={addToRefs}
                    data-section="skills"
                    className={`mb-20 transition-all duration-1000 delay-300 ${
                        isVisible('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h3 className="text-3xl font-bold text-white mb-6">Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {['React', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'AWS', 'Azure', 'Docker', 'CI/CD', 'Git', 'Agile', 'HIPAA', 'GDPR', 'OAuth', 'HTML5', 'DevOps'].map((skill, i) => (
                            <span
                                key={skill}
                                style={{transitionDelay: `${i * 50}ms`}}
                                className={`px-4 py-2 bg-purple-500/20 text-purple-200 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-all ${
                                    isVisible('skills') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                }`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div
                    ref={addToRefs}
                    data-section="experience"
                    className={`mb-20 transition-all duration-1000 delay-400 ${
                        isVisible('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h3 className="text-3xl font-bold text-white mb-8">Experience</h3>

                    <div className="space-y-8">
                        {/* Job 1 */}
                        <div
                            className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Full Stack Developer - Contract</h4>
                                    <p className="text-purple-300 text-lg">Human Intelligence, Inc</p>
                                </div>
                                <span className="text-gray-400 whitespace-nowrap">Aug 2025 - Present</span>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Developed robust Web Applications for increased user satisfaction and better functionality, adhering to security policies and industry standards</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Enhanced website responsiveness with front-end development techniques, resulting in improved user experience and UI consistency</span>
                                </li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div
                            className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Full Stack Developer</h4>
                                    <p className="text-purple-300 text-lg">Loyalti, Portland, OR</p>
                                </div>
                                <span className="text-gray-400 whitespace-nowrap">Jan 2023 - Jan 2025</span>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Built and updated retail software with 99.8% uptime, deployed nationally and internationally</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Delivered innovative features under accelerated sprint timelines using Python, React, SQL, and TypeScript</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Developed and tested security/privacy features for GDPR and U.S. federal compliance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Led Scrum ceremonies, sprint estimation, and capacity planning for international distributed teams</span>
                                </li>
                            </ul>
                        </div>

                        {/* Job 3 */}
                        <div
                            className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">QA Technical Engineer</h4>
                                    <p className="text-purple-300 text-lg">Loyalti, Portland, OR</p>
                                </div>
                                <span className="text-gray-400 whitespace-nowrap">Jan 2022 - Jan 2023</span>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Conducted final QA testing and authored comprehensive bug reports, ensuring consistent product quality</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Partnered with development teams to enhance product quality and troubleshoot issues</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Supported onboarding of a company acquisition, integrating data from hundreds of retailers</span>
                                </li>
                            </ul>
                        </div>

                        {/* Job 4 */}
                        <div
                            className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">QA / Technical Support Specialist</h4>
                                    <p className="text-purple-300 text-lg">SnowShoe, Portland, OR</p>
                                </div>
                                <span className="text-gray-400 whitespace-nowrap">Jan 2021 - Jan 2022</span>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Delivered technical solutions and maintained high client satisfaction for end-users</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">▹</span>
                                    <span>Managed IT tasks including hardware configuration and internal technical support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div
                    ref={addToRefs}
                    data-section="education"
                    className={`mb-20 transition-all duration-1000 delay-500 ${
                        isVisible('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
                    <div className="space-y-6">
                        <div
                            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                            <h4 className="text-xl font-bold text-white">B.S. Cybersecurity & Information Assurance</h4>
                            <p className="text-purple-300">Western Governors University</p>
                            <p className="text-gray-400">October 2025</p>
                        </div>
                        <div
                            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                            <h4 className="text-xl font-bold text-white">DigiPen Computer Science Program</h4>
                            <p className="text-purple-300">New Market Skills Center</p>
                            <p className="text-gray-400">June 2016</p>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div
                    ref={addToRefs}
                    data-section="certifications"
                    className={`mb-20 transition-all duration-1000 delay-600 ${
                        isVisible('certifications') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h3 className="text-3xl font-bold text-white mb-6">Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {['CompTIA A+', 'CompTIA Security+', 'CompTIA CySA+', 'ITIL 4 Foundation', 'CompTIA Network+', 'CompTIA Project+', 'SSCP', 'CompTIA PenTest+'].map((cert, i) => (
                            <div
                                key={cert}
                                style={{transitionDelay: `${i * 100}ms`}}
                                className={`bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg p-4 border border-green-500/20 transition-all ${
                                    isVisible('certifications') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                }`}
                            >
                                <span className="text-green-400 mr-2">✓</span>
                                <span className="text-white font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}