import { createPortal } from 'react-dom'
import style from './Modal.module.css'

export default function Modal({
    title = 'title',
    content = 'contenuto',
    show = false,
    onClose = () => { },
    onConfirm = () => { },
    confirmText = 'Conferma' }) {

    if (!show) return null;

    return createPortal(
        <div className={style.modalOverlay}>
            <div className={style.modalContent}>
                <h2>{title}</h2>
                <div>{content}</div>
                <button onClick={onClose}>Chiudi</button>
                <button onClick={onConfirm}>{confirmText}</button>
            </div>
        </div>,
        document.body
    )
}