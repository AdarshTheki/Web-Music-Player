/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';
import { FaPlayCircle } from 'react-icons/fa';
import { MdOutlineFavorite, MdOutlineMoreHoriz } from 'react-icons/md';

export default function Button({ children, onClick }) {
    return (
        <button className='PlayButton' onClick={onClick}>
            {children}
        </button>
    );
}

export function ButtonComponent() {
    return (
        <div
            style={{
                display: 'flex',
                gap: 20,
                padding: '20px 0',
            }}>
            <Button>
                <FaPlayCircle fontSize={50} color='var(--green)' />
            </Button>
            <Button>
                <MdOutlineFavorite fontSize={30} color='var(--green)' />
            </Button>
            <Button>
                <MdOutlineMoreHoriz fontSize={30} color='var(--green)' />
            </Button>
        </div>
    );
}
