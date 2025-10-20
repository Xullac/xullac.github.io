import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../components/Header';
import {
    DialogRoot,
    DialogContent,
    DialogBody,
    DialogBackdrop,
    Button,
    Box
} from "@chakra-ui/react";

export function Frontpage() {
    const [isContactOpen, setIsContactOpen] = React.useState(false);

    return (
        <>
            <div className="relative min-h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center blur-sm"
                    style={{
                        backgroundImage: "url('/my-react-app/public/images/backgroundFour.JPEG')",
                        filter: "blur(14px)",
                        transform: "scale(1)",
                    }}
                ></div>

                {/* Foreground Content */}
                <div
                    className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 bg-none">
                    {/* Shared Navigation */}
                    <Header/>

                    {/* Hero Section */}
                    <div className="pt-44 pb-20 px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center space-y-6">

                                {/* Desktop version */}
                                <Box display={{base: "none", md: "flex"}} justifyContent="center">
                                    <div
                                        className="bg-black rounded-2xl p-8 shadow-lg transition-all transform bg-opacity-40 text-center">
                                        <h1 className="text-6xl font-bold text-white leading-tight">
                                            Hi, I'm Silas Miller
                                        </h1>
                                    </div>
                                </Box>


                                {/* Mobile version */}
                                <Box display={{base: "flex", md: "none"}} justifyContent="center">
                                    <div
                                        className="bg-black rounded-2xl p-8 shadow-lg transition-all transform bg-opacity-40">
                                        <h1 className="text-6xl font-bold text-white leading-tight">
                                            Hi, I'm
                                        </h1>
                                        <h1 className="text-6xl font-bold text-white leading-tight whitespace-nowrap">
                                            Silas Miller
                                        </h1>
                                    </div>
                                </Box>

                                <div className="flex gap-4 justify-center pt-6">
                                    <Link
                                        to="/resume"
                                        className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
                                    >
                                        View My Resume
                                    </Link>
                                    <button
                                        onClick={() => setIsContactOpen(true)}
                                        className="px-8 py-3 bg-white text-indigo-600 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all font-medium"
                                    >
                                        Get In Touch
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Feature Cards */}
                    <div className="py-15 px-6 pb-24">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                    <div
                                        className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
                                    <p className="text-gray-600">
                                        Building modern, scalable applications with React, Node.js, TypeScript, and
                                        Python.
                                    </p>
                                </div>

                                <div
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                    <div
                                        className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
                                    <p className="text-gray-600">
                                        Ensuring compliance with GDPR, HIPAA, and implementing secure, robust systems.
                                    </p>
                                </div>

                                <div
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                    <div
                                        className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teamwork</h3>
                                    <p className="text-gray-600">
                                        Taking part of Agile teams and coordinating with international distributed
                                        engineers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*/!* Footer *!/*/}
                    {/*<footer className="py-12 px-6 bg-gray-50">*/}
                    {/*    <div className="max-w-6xl mx-auto text-center">*/}
                    {/*        <p className="text-gray-600">*/}
                    {/*            © 2025 Silas Miller. All rights reserved.*/}
                    {/*        </p>*/}
                    {/*        <div className="flex gap-6 justify-center mt-4">*/}
                    {/*            <a href="https://www.linkedin.com/in/silas-miller-323464194/" target="_blank"*/}
                    {/*               rel="noopener noreferrer"*/}
                    {/*               className="text-gray-600 hover:text-indigo-600 transition-colors">*/}
                    {/*                LinkedIn*/}
                    {/*            </a>*/}
                    {/*            <a href="mailto:silasmiller1998@gmail.com"*/}
                    {/*               className="text-gray-600 hover:text-indigo-600 transition-colors">*/}
                    {/*                Email*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</footer>*/}
                </div>

                {/* Contact Modal */}
                <DialogRoot
                    open={isContactOpen}
                    onOpenChange={(e) => setIsContactOpen(e.open)}
                >
                    <DialogBackdrop/>
                    <DialogContent
                        borderRadius={'8px'}
                        borderBottomRadius={'8px'}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1400,
                            maxWidth: '500px',
                            width: '90%'
                        }}
                    >
                        <DialogBody bg={'gray.100'} borderRadius={'8px'}>
                            <div className="space-y-4 ">
                                <div className="space-y-3">
                                    <a
                                        href="mailto:silasmiller1998@gmail.com"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-2xl">✉️</span>
                                        <div>
                                            <div className="font-semibold text-gray-900">Email</div>
                                            <div className="text-sm text-gray-600">silasmiller1998@gmail.com</div>
                                        </div>
                                    </a>
                                    <a
                                        href="tel:360-480-6881"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <div className="font-semibold text-gray-900">Phone</div>
                                            <div className="text-sm text-gray-600">360-480-6881</div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/silas-miller-323464194/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-2xl">💼</span>
                                        <div>
                                            <div className="font-semibold text-gray-900">LinkedIn</div>
                                            <div className="text-sm text-gray-600">Connect with me</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <Button mt={4} w={'50px'} h='30px' onClick={() => setIsContactOpen(false)} color={'black'}
                                    background={'blue.200'} fontWeight={600} border={'1px'} borderColor={'black'}
                                    boxShadow={'0px 0px 4px 0px'} _hover={{transform: 'scale(1.1)'}}
                                    alignItems={'center'} justifyContent={'center'}>Close</Button>
                        </DialogBody>
                    </DialogContent>
                </DialogRoot>
            </div>
        </>
    );
}