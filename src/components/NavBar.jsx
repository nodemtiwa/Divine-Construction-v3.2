/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
"use client";

import { Navbar, Button, Modal } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

export default function NavBar() {

    const [openModal, setOpenModal] = useState(false)


    return (
        <div className="bg-indigo-700 shadow-md fixed top-0 right-0 left-0 w-full z-50 ">
            <header className="container mx-auto  h-10 flex gap-4 items-center text-xs font-medium text-gray-50 px-4 ">
                <p className="hidden lg:block text-sm">ARCHITECTURAL HOUSE PLANS, we design and build for the present.</p>

                {/* Change the phone number here  */}
                <Link href="tel:+237651327377" className="ml-auto">
                    {" "}
                    <span className="underline flex gap-2 font-semibold lg:text-md items-center uppercase">
                        {" "}
                        <FaPhone /> call us
                    </span>
                </Link>

                {/* Change the whatsapp number here  */}
                <Link href="https://wa.me/+237651327377 ">
                    {" "}
                    <span className="underline flex gap-1 font-semibold lg:text-md items-center uppercase">
                        <FaWhatsapp /> Whatsapp{" "}
                    </span>
                </Link>

                {/* Change the email here  */}
                <Link href="mailto:divineconstruction@gmail.com">
                    <span className="underline flex gap-1 font-semibold lg:text-md items-center uppercase">
                        <FaEnvelope /> Email
                    </span>
                </Link>
            </header>

            <div className="relative bg-white">

                <Navbar fluid rounded className=" container mx-auto ">
                    <Navbar.Brand >
                        <Image onClick={() => setOpenModal(true)}
                            alt=" Logo"
                            className="w-9 h-9 cursor-pointer "
                            src="/images/logo.png"
                            width={200}
                            height={200}
                        />
                        <Modal show={openModal} dismissible onClose={() => setOpenModal(false)}>
                            <Modal.Header></Modal.Header>
                            <Modal.Body>
                                <Image
                                    alt=" Logo"
                                    className="w-full h-auto block cursor-pointer z-50"
                                    src="/images/logo.png"
                                    width={1200}
                                    height={1200}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button color='gray' onClick={() => setOpenModal(false)}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        <Link href="/" className="self-center ml-2 text-md text-indigo-600 font-bold dark:text-white mr-4">
                            Divine Buildings
                        </Link>
                    </Navbar.Brand>





                    {/* <Navbar.Brand href="/" className="ml-auto flex md:order-3">
                        {/* Cart */}
                    {/* <Link
                            href="/cart"
                            className="group -m-2 p-2 text-orange-700 flex items-center"
                        >
                            <ShoppingCartIcon
                                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-600"
                                aria-hidden="true"
                            />
                            <span className="ml-2 text-lg font-bold text-gray-500 group-hover:text-gray-600">
                                {loading ? "" : cartItems.reduce((a, c) => a + c.qty, 0)}
                            </span>
                        </Link> */}
                    {/* </Navbar.Brand> */}

                    <div className="ml-auto ">
                        <Navbar.Toggle className="text-indigo-600 " />
                    </div>
                    <Navbar.Collapse className="ml-auto">
                        <Navbar.Link className="text-indigo-600 " href="/apartments">Apartments</Navbar.Link>
                        <Navbar.Link className="text-indigo-600 " href="/bungalow">Bungalow</Navbar.Link>
                        <Navbar.Link className="text-indigo-600 " href="/duplex">Duplex</Navbar.Link>
                        <Navbar.Link className="text-indigo-600 " href="/ebooks">E-Books</Navbar.Link>
                        <Navbar.Link className="text-indigo-600 " href="/about">About</Navbar.Link>
                        <Navbar.Link className="text-indigo-600 " href="/contact">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}
