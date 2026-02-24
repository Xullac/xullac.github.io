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
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
            <Header/>

            <div className="max-w-5xl mx-auto px-6 py-16">

                {/* Header Section */}
                <div
                    ref={addToRefs}
                    data-section="header"
                    className={`text-center mb-20 transition-all duration-1000 ${
                        isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-6xl font-bold text-white mb-4 pt-10">Silas Miller</h2>
                    <p className="text-xl text-sky-400 mb-6 tracking-wide">Software Engineer</p>
                    <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                        <span>📍 Portland, OR 97202</span>
                        <span>📞 360-480-6881</span>
                        <span>✉️ silasmiller1998@gmail.com</span>
                        <a
                            href="https://www.linkedin.com/in/silas-miller-323464194/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            🔗 LinkedIn
                        </a>
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
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60">
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase text-sm text-sky-400">Summary</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Experienced Software Engineer with a strong foundation in building secure, high-uptime SaaS
                            applications using React, Python, and PostgreSQL. Proven ability in API development, cloud
                            services (AWS, Azure), and designing scalable architectures. Recent graduate with a B.S. in
                            Cybersecurity, eager to leverage analytical skills and a commitment to product development
                            in a collaborative environment. Highly motivated to learn new technologies and frameworks,
                            with strong communication and teamwork skills.
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
                    <h3 className="text-sm font-bold text-sky-400 mb-6 uppercase tracking-widest">Core Skills</h3>

                    <div className="space-y-5">
                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/60">
                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-4 font-semibold">Technical</p>
                            <div className="flex flex-wrap gap-2">
                                {['JavaScript', 'TypeScript', 'Python', 'PHP', 'React', 'Vue.js', 'Node.js', 'Django', 'Laravel', 'REST APIs', 'GraphQL', 'MySQL', 'PostgreSQL', 'Redis', 'AWS', 'Azure', 'Docker', 'CI/CD', 'Git', 'Linux', 'Playwright', 'Jest', 'OAuth', 'Figma', 'Postman', 'LLMs/AI', 'Tailwind', 'HTML', 'CSS'].map((skill, i) => (
                                    <span
                                        key={skill}
                                        style={{transitionDelay: `${i * 30}ms`}}
                                        className={`px-3 py-1.5 bg-sky-900/30 text-sky-300 rounded-md border border-sky-800/50 text-sm hover:bg-sky-800/40 transition-all ${
                                            isVisible('skills') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                        }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/60">
                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-4 font-semibold">Tools &
                                Processes</p>
                            <div className="flex flex-wrap gap-2">
                                {['Agile', 'Scrum', 'JIRA', 'Confluence', 'QA/UAT', 'Regression Testing', 'SaaS', 'Product Development', 'Data Privacy', 'S3', 'HubSpot', 'Documentation'].map((skill, i) => (
                                    <span
                                        key={skill}
                                        style={{transitionDelay: `${i * 30}ms`}}
                                        className={`px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/50 text-sm hover:bg-slate-600/50 transition-all ${
                                            isVisible('skills') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                        }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
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
                    <h3 className="text-sm font-bold text-sky-400 mb-8 uppercase tracking-widest">Experience</h3>

                    <div className="space-y-6">
                        {/* Job 1 */}
                        <div
                            className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60 hover:border-slate-600 transition-all">
                            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                <div>
                                    <h4 className="text-xl font-bold text-white">Software Engineer – Contract</h4>
                                    <p className="text-sky-400">Human Intelligence, Inc</p>
                                </div>
                                <span
                                    className="text-slate-500 text-sm whitespace-nowrap bg-slate-700/50 px-3 py-1 rounded-full">Aug 2025 – Present</span>
                            </div>
                            <ul className="space-y-2.5 text-slate-300">
                                {[
                                    'Provided guidance throughout all phases of the SDLC, ensuring adherence to security policies and industry standards.',
                                    'Leveraged strong problem-solving skills to troubleshoot issues and ensure system reliability and stability.',
                                    'Developed robust web applications, enhancing user satisfaction and functionality through data analytics and business intelligence.',
                                    'Enhanced website responsiveness and UI consistency using front-end development techniques and responsive design principles.',
                                    'Contributed to intuitive user interfaces and dashboards for complex applications, improving overall UX.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-sky-500 mr-3 mt-1 text-xs">▹</span>
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div
                            className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60 hover:border-slate-600 transition-all">
                            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                <div>
                                    <h4 className="text-xl font-bold text-white">Software Engineer</h4>
                                    <p className="text-sky-400">Loyalti, Portland, OR</p>
                                </div>
                                <span
                                    className="text-slate-500 text-sm whitespace-nowrap bg-slate-700/50 px-3 py-1 rounded-full">Jan 2022 – Jul 2025</span>
                            </div>
                            <ul className="space-y-2.5 text-slate-300">
                                {[
                                    'Provided guidance throughout all phases of the SDLC, ensuring adherence to security policies and industry standards.',
                                    'Leveraged strong analytical and problem-solving skills to troubleshoot issues and maintain system reliability.',
                                    'Developed robust web applications contributing to business intelligence through data analytics.',
                                    'Enhanced website responsiveness and UI consistency through responsive web design principles.',
                                    'Contributed to intuitive user interfaces and dashboards, ensuring a seamless experience for complex applications.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-sky-500 mr-3 mt-1 text-xs">▹</span>
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Job 3 */}
                        <div
                            className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60 hover:border-slate-600 transition-all">
                            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                <div>
                                    <h4 className="text-xl font-bold text-white">QA / IT Support Specialist</h4>
                                    <p className="text-sky-400">SnowShoe, Portland, OR</p>
                                </div>
                                <span
                                    className="text-slate-500 text-sm whitespace-nowrap bg-slate-700/50 px-3 py-1 rounded-full">Jan 2021 – Jan 2022</span>
                            </div>
                            <ul className="space-y-2.5 text-slate-300">
                                {[
                                    'Acted as liaison between engineering and support teams to ensure seamless deployments and effective communication.',
                                    'Resolved issues by troubleshooting and delivering technical solutions with high client satisfaction.',
                                    'Maintained high client satisfaction through effective troubleshooting and clear communication.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-sky-500 mr-3 mt-1 text-xs">▹</span>
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
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
                    <h3 className="text-sm font-bold text-sky-400 mb-6 uppercase tracking-widest">Education</h3>
                    <div className="space-y-4">
                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/60">
                            <h4 className="text-lg font-bold text-white">B.S. Cybersecurity & Information Assurance</h4>
                            <p className="text-sky-400 text-sm">Western Governors University</p>
                            <p className="text-slate-500 text-sm mt-1">October 2025</p>
                        </div>
                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/60">
                            <h4 className="text-lg font-bold text-white">Computer Science Program</h4>
                            <p className="text-sky-400 text-sm">New Market Skills Center — DigiPen</p>
                            <p className="text-slate-500 text-sm mt-1">June 2016</p>
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
                    <h3 className="text-sm font-bold text-sky-400 mb-6 uppercase tracking-widest">Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {[
                            'CompTIA A+',
                            'CompTIA Security+',
                            'CompTIA CySA+',
                            'CompTIA Network+',
                            'CompTIA Project+',
                            'CompTIA PenTest+',
                            'ITIL 4 Foundation',
                            'SSCP',
                        ].map((cert, i) => (
                            <div
                                key={cert}
                                style={{transitionDelay: `${i * 100}ms`}}
                                className={`bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 border border-slate-700/60 hover:border-slate-600 transition-all flex items-center gap-3 ${
                                    isVisible('certifications') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                }`}
                            >
                                <span className="text-emerald-400 text-lg">✓</span>
                                <span className="text-slate-200 font-medium text-sm">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}