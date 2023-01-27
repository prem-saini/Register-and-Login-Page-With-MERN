import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,

    MDBNavbarNav,
    MDBIcon,

} from 'mdb-react-ui-kit';

export default function Header() {
    const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo03'
                        aria-controls='navbarTogglerDemo03'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBNavbarBrand href='/' style={{ color: "white" }}>Row </MDBNavbarBrand>
                    <MDBCollapse navbar show={showNavNoTogglerThird}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='d-flex'>
                                <MDBNavbarLink active aria-current='page' href='/' style={{ color: "white" }}>
                                    Home
                                </MDBNavbarLink>

                            </MDBNavbarItem>

                        </MDBNavbarNav>

                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}