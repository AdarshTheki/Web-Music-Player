import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Components() {
    return (
        <div>
            {/* Header Section */}
            <div
                style={{
                    display: 'flex',
                    gap: '5%',
                    width: '100%',
                    margin: 'auto',
                    padding: '20px 40px',
                }}>
                <div style={{ width: '30%', minWidth: '100' }}>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'100%'} height={180} />
                </div>
                <div>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={20} />
                    <br />
                    <Skeleton baseColor='#222' highlightColor='#333' width={'90%'} height={80} />
                    <br />
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        <Skeleton baseColor='#222' highlightColor='#333' width={80} height={10} />
                        <Skeleton baseColor='#222' highlightColor='#333' width={40} height={10} />
                        <Skeleton baseColor='#222' highlightColor='#333' width={60} height={10} />
                        <Skeleton baseColor='#222' highlightColor='#333' width={50} height={10} />
                        <Skeleton baseColor='#222' highlightColor='#333' width={30} height={10} />
                        <Skeleton baseColor='#222' highlightColor='#333' width={60} height={10} />
                        <Skeleton baseColor='#222' highlightColor='#333' width={50} height={10} />
                    </div>
                </div>
            </div>
            {/* Player Sections */}

            <div className='bodyFooter' style={{ padding: '10px 40px' }}>
                <div className='col1'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'30%'} height={15} />
                    <Skeleton baseColor='#222' highlightColor='#333' width={'70%'} height={10} />
                </div>
                <div className='col2'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'70%'} height={10} />
                </div>
                <div className='col3'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'70%'} height={10} />
                </div>
                <div className='col4'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'70%'} height={10} />
                </div>
            </div>
            <div className='bodyFooter' style={{ padding: '10px 40px' }}>
                <div className='col1'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={15} />
                    <Skeleton baseColor='#222' highlightColor='#333' width={'60%'} height={10} />
                </div>
                <div className='col2'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'60%'} height={10} />
                </div>
                <div className='col3'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'60%'} height={10} />
                </div>
                <div className='col4'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'60%'} height={10} />
                </div>
            </div>
            <div className='bodyFooter' style={{ padding: '10px 40px' }}>
                <div className='col1'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'50%'} height={15} />
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
                <div className='col2'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'70%'} height={10} />
                </div>
                <div className='col3'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'70%'} height={10} />
                </div>
                <div className='col4'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'70%'} height={10} />
                </div>
            </div>
            <div className='bodyFooter' style={{ padding: '10px 40px' }}>
                <div className='col1'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'20%'} height={15} />
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
                <div className='col2'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
                <div className='col3'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
                <div className='col4'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
            </div>
            <div className='bodyFooter' style={{ padding: '10px 40px' }}>
                <div className='col1'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={15} />
                    <Skeleton baseColor='#222' highlightColor='#333' width={'30%'} height={10} />
                </div>
                <div className='col2'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'30%'} height={10} />
                </div>
                <div className='col3'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'30%'} height={10} />
                </div>
                <div className='col4'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'30%'} height={10} />
                </div>
            </div>
            <div className='bodyFooter' style={{ padding: '10px 40px' }}>
                <div className='col1'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'20%'} height={15} />
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
                <div className='col2'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
                <div className='col3'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
                <div className='col4'>
                    <Skeleton baseColor='#222' highlightColor='#333' width={'40%'} height={10} />
                </div>
            </div>
        </div>
    );
}
