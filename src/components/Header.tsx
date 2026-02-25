import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Button, DialogBackdrop, DialogBody, DialogContent, DialogRoot} from "@chakra-ui/react";

export const Header = () => {
    const location = useLocation();
    const [isContactOpen, setIsContactOpen] = React.useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
                <div className="max-w-auto px-6 py-4">
                    <div className="flex items-center justify-center">
                        <div className="flex gap-8">
                            <Link
                                to="/"
                                className={`font-medium transition-colors ${
                                    location.pathname === '/'
                                        ? 'text-indigo-600'
                                        : 'text-gray-700 hover:text-indigo-600'
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/resume"
                                className={`font-medium transition-colors ${
                                    location.pathname === '/resume'
                                        ? 'text-indigo-600'
                                        : 'text-gray-700 hover:text-indigo-600'
                                }`}
                            >
                                Resume
                            </Link>
                            <a
                                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                                onClick={() => setIsContactOpen(true)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
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
        </>
    );
};