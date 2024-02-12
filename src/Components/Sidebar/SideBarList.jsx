/* eslint-disable react/prop-types */
import React from 'react';
import './SideBarList.css';
import { useNavigate } from 'react-router-dom';
import { useDataLayerValue } from '../../Context/DataLayer';

export default function SideBarList({ name, id, type, images, owner }) {
    const [{ id: ids }, dispatch] = useDataLayerValue();
    const Navigate = useNavigate();

    const setId = (item) => {
        dispatch({ type: 'SET_PLAYLIST_ID', id: item });
        Navigate(`/playlist/${id}`);
    };

    return (
        <div
            className={`SideBarList ${id === ids ? 'activeSideBarList' : ''}`}
            onClick={() => setId(id)}>
            <div className='SideBarList__title'>
                {images && (
                    <img className='SideBarList__icon' src={images[0]?.url} alt={id} width={50} />
                )}
                <div>
                    <h5 className='line-clamp'>{name}</h5>
                    <p className='span line-clamp'>
                        {type} ● {owner?.display_name}
                    </p>
                </div>
            </div>
        </div>
    );
}
