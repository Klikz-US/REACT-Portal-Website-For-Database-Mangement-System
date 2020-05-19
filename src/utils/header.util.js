import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Container, Button } from "react-bootstrap";

import { userLogoutAsync } from "../actions/auth-async.action";

import logo from "./../assets/logo.png";

export default function Navigation() {
    const auth_obj = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { isAdmin } = auth_obj.user;

    const handleLogout = () => {
        dispatch(userLogoutAsync());
    };

    return (
        <header>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="info"
                variant="dark"
                className="shadow p-0 text-white"
            >
                <Container>
                    <Navbar.Brand>
                        <Nav.Link href="/">
                            <img
                                src={logo}
                                width="auto"
                                height="80"
                                alt="STL Portal"
                            />
                        </Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {isAdmin && (
                                <DropdownButton
                                    variant="danger"
                                    title="Administration "
                                    className="mr-4"
                                >
                                    <Nav.Link
                                        href="/users"
                                        className="d-block px-3 py-2 text-dark"
                                    >
                                        Rep Accounts
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/users/add"
                                        className="d-block px-3 py-2 text-dark"
                                    >
                                        Add New Rep
                                    </Nav.Link>
                                </DropdownButton>
                            )}

                            <DropdownButton
                                variant="danger"
                                title="Manage Pets "
                                className="mr-4"
                            >
                                <Nav.Link
                                    href="/pets"
                                    className="d-block px-3 py-2 text-dark"
                                >
                                    All Pets
                                </Nav.Link>
                                <Nav.Link
                                    href="/pets/register"
                                    className="d-block px-3 py-2 text-dark"
                                >
                                    Add New Pet
                                </Nav.Link>
                            </DropdownButton>

                            <DropdownButton
                                variant="danger"
                                title="Manage Owners "
                                className="mr-4"
                            >
                                <Nav.Link
                                    href="/owners"
                                    className="d-block px-3 py-2 text-dark"
                                >
                                    All Owners
                                </Nav.Link>
                                <Nav.Link
                                    href="/owners/register"
                                    className="d-block px-3 py-2 text-dark"
                                >
                                    Add New Owner
                                </Nav.Link>
                            </DropdownButton>
                        </Nav>

                        <Nav className="ml-auto">
                            <Nav.Link
                                href="/account/logout"
                                className="d-block px-2"
                            >
                                <Button
                                    variant="warning"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
