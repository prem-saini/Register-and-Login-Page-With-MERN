

import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='bg-light text-center text-white'>


            <div className='text-center p-3 text-dark' style={{ backgroundColor: '#e3e3' }}>
                © 2020 Copyright:
                <a className='text-dark' href='https://shreeshyam.com/' style={{ textDecoration: 'none' }}>
                    shreeshyam.com
                </a>
            </div>
        </MDBFooter>
    );
}