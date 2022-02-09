import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAll, getStart } from '../actions/actions';
import names from '../img/names.jpeg';
import './LandingPage.css'


function LandingPage() {
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getStart())
        dispatch(getAll())
    },[dispatch])
    return (
        <div>
            <Link to='/'>
                <img src={names}  alt='names' width="100%" />
            </Link>
        </div>
    )
};

export default LandingPage;