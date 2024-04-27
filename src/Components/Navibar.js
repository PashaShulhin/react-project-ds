import React from "react";
import { Navbar, Nav, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse, Button } from "react-bootstrap";

export default function Navibar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavbarBrand>WevDev Blog</NavbarBrand>
                <NavbarToggle aria-controls="responsive-navbar-nav"/>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink>Home</NavLink>
                        <NavLink>Users</NavLink>
                        <NavLink>About</NavLink>
                    </Nav>
                    <Nav>
                        <Button variant="primary">Log in</Button>
                        <Button variant="primary">Sign out</Button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}
