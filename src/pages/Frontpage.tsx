import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../components/Header';
import {
    DialogRoot,
    DialogContent,
    DialogBody,
    DialogBackdrop,
} from "@chakra-ui/react";
import pokeball from '../images/pokeball-png-45330.png';
import hiilogo from '../images/Logo-Black-WhiteBG.jpg';

export function Frontpage() {
    const [isContactOpen, setIsContactOpen] = React.useState(false);
    const [isWorkOpen, setIsWorkOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">

            {/* Background glow accents */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"/>
                <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl"/>
            </div>

            {/* Header */}
            <div className="relative z-1000">
                <Header/>
            </div>

            {/* ── Hero ── */}
            <div
                className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-10 pb-10 min-h-[calc(100vh-80px)] flex items-center">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full place-items-center">

                    {/* Left: Text */}
                    <div
                        className="flex flex-col gap-7 order-2 md:order-1 items-center md:items-start text-center md:text-left mx-auto md:mx-0 max-w-lg w-full">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="w-8 h-px bg-indigo-400"/>
                            <span className="text-xs tracking-widest uppercase text-indigo-400 font-medium">
                                Software Engineer · Cybersecurity
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-50">
                            Hi, I'm<br/>
                            <span className="text-indigo-400">Silas Miller</span>
                        </h1>

                        {/* Bio */}
                        <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto md:mx-0">
                            I'm a software engineer who takes security seriously. With a B.S. in Cybersecurity
                            and certs like CompTIA Sec+ and CySA+, I build SaaS applications where compliance
                            and resilience are part of the foundation, not something bolted on at the end.
                        </p>

                        {/* Skill chips */}
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {['React', 'TypeScript', 'Python', 'AWS / Azure', 'CompTIA Sec+', 'HIPAA / GDPR'].map(skill => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-xs rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 pt-1 justify-center md:justify-start">
                            <Link
                                to="/resume"
                                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-900/40"
                            >
                                View Resume
                            </Link>
                            <button
                                onClick={() => setIsWorkOpen(true)}
                                className="px-6 py-2.5 bg-slate-800/60 hover:bg-slate-700/60 backdrop-blur-sm text-slate-200 text-sm font-medium rounded-lg border border-slate-700/60 transition-all hover:-translate-y-0.5"
                            >
                                My Work
                            </button>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="px-6 py-2.5 bg-slate-800/60 hover:bg-slate-700/60 backdrop-blur-sm text-slate-200 text-sm font-medium rounded-lg border border-slate-700/60 transition-all hover:-translate-y-0.5"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    {/* Right: Photo bubble */}
                    <div className="flex justify-center items-center order-1 md:order-2">
                        <div className="relative">
                            {/* Outer rings */}
                            <div className="absolute -inset-4 rounded-full border border-indigo-500/20"/>
                            <div className="absolute -inset-8 rounded-full border border-indigo-500/10"/>
                            {/* Photo */}
                            <div
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-slate-700/60 shadow-2xl shadow-slate-950/60">
                                <img
                                    src="https://i.postimg.cc/CxfgJPQr/background-Four.jpg"
                                    alt="Silas Miller"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Divider ── */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
                <div className="border-t border-slate-700/50"/>
            </div>

            {/* ── Feature Cards ── */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-16">
                <div className="grid md:grid-cols-3 gap-5">

                    <div
                        className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                            </svg>
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-2">Development</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Building modern, scalable applications with React, Node.js, TypeScript, and Python.
                        </p>
                    </div>

                    <div
                        className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-2">Cybersecurity</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            CompTIA Sec+, CySA+, SSCP certified. Ensuring GDPR/HIPAA compliance and secure system
                            design.
                        </p>
                    </div>

                    <div
                        className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-base font-semibold text-slate-100 mb-2">Teamwork</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Agile teams, international distributed engineers, and cross-functional collaboration.
                        </p>
                    </div>

                </div>
            </div>

            {/* ── Contact Modal ── */}
            <DialogRoot open={isContactOpen} onOpenChange={(e) => setIsContactOpen(e.open)}>
                <DialogBackdrop className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40"/>
                <DialogContent
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 50,
                        maxWidth: '420px',
                        width: '90%',
                        background: 'transparent',
                        boxShadow: 'none'
                    }}
                >
                    <DialogBody p={0}>
                        <div
                            className="bg-slate-900 rounded-2xl border border-slate-700/60 shadow-2xl shadow-slate-950/80 overflow-hidden">

                            {/* Header band */}
                            <div
                                className="bg-gradient-to-r from-indigo-600/30 to-slate-800/60 px-8 pt-8 pb-6 border-b border-slate-700/40">
                                <p className="text-xs tracking-widest uppercase text-indigo-400 font-medium mb-2">Get In
                                    Touch</p>
                                <h2 className="text-xl font-bold text-slate-50">Let's connect</h2>
                                <p className="text-sm text-slate-400 mt-1">Open to new opportunities and
                                    collaborations.</p>
                            </div>

                            {/* Links */}
                            <div className="px-6 py-5 flex flex-col gap-3">

                                <a href="mailto:silasmiller1998@gmail.com"
                                   className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-indigo-500/40 hover:bg-slate-800 transition-all">
                                    <div
                                        className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm font-semibold text-slate-100">Email</div>
                                        <div className="text-xs text-slate-400 truncate">silasmiller1998@gmail.com</div>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 ml-auto transition-colors"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </a>

                                <a href="tel:360-480-6881"
                                   className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-indigo-500/40 hover:bg-slate-800 transition-all">
                                    <div
                                        className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-100">Phone</div>
                                        <div className="text-xs text-slate-400">360-480-6881</div>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 ml-auto transition-colors"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </a>

                                <a href="https://www.linkedin.com/in/silas-miller-323464194/" target="_blank"
                                   rel="noopener noreferrer"
                                   className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-indigo-500/40 hover:bg-slate-800 transition-all">
                                    <div
                                        className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                                        <svg className="w-5 h-5 text-indigo-400" fill="currentColor"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-100">LinkedIn</div>
                                        <div className="text-xs text-slate-400">silas-miller-323464194</div>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 ml-auto transition-colors"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </a>

                            </div>

                            {/* Footer */}
                            <div className="px-6 pb-6">
                                <button
                                    onClick={() => setIsContactOpen(false)}
                                    className="w-full py-2.5 text-sm text-slate-400 rounded-xl border border-slate-700/40 hover:bg-slate-800/50 hover:text-slate-200 transition-all"
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </DialogBody>
                </DialogContent>
            </DialogRoot>

            {/* ── Work Modal ── */}
            <DialogRoot open={isWorkOpen} onOpenChange={(e) => setIsWorkOpen(e.open)}>
                <DialogBackdrop className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40"/>
                <DialogContent
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 50,
                        width: '90%',
                        background: 'transparent',
                        boxShadow: 'none'
                    }}
                >
                    <DialogBody p={0}>
                        <div
                            className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/60 shadow-2xl shadow-slate-950/60">
                            <p className="text-xs tracking-widest uppercase text-indigo-400 mb-6 font-medium">My
                                Work</p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a href="https://www.humancreator.org/start" target="_blank" rel="noopener noreferrer"
                                   className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-indigo-500/40 hover:-translate-y-1 transition-all min-w-[140px]">
                                    <img src={hiilogo} alt="Human Intelligence"
                                         className="w-16 h-16 object-contain rounded-lg"/>
                                    <span className="text-sm font-semibold text-slate-100 text-center">Human Intelligence</span>
                                    <span className="text-xs text-slate-500">humancreator.org</span>
                                </a>
                                <a href="https://xullac.github.io/pokemon" target="_blank" rel="noopener noreferrer"
                                   className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-indigo-500/40 hover:-translate-y-1 transition-all min-w-[140px]">
                                    <img src={pokeball} alt="Pokémon Quiz" className="w-16 h-16 object-contain"/>
                                    <span className="text-sm font-semibold text-slate-100 text-center">Which Pokémon Are You?</span>
                                    <span className="text-xs text-slate-500">xullac.github.io</span>
                                </a>
                            </div>
                            <button
                                onClick={() => setIsWorkOpen(false)}
                                className="mt-6 px-5 py-2 text-sm text-slate-300 rounded-lg border border-slate-700/60 hover:bg-slate-700/50 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </DialogBody>
                </DialogContent>
            </DialogRoot>

        </div>
    );
}