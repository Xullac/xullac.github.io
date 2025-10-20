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
        </>
    );
};