import React, { useContext } from 'react'
import './style.css'
import { MenuContext } from '../MenuManager';
import cn from 'classnames'

export default function MenuButton() {

    const { open, setOpen } = useContext(MenuContext);
    return (
        <div className={cn('menu-button-wrap', { open })}>
            <button className='menu-button' onClick={() => setOpen(!open)}>
                <span />
            </button>
        </div>
    )
}
