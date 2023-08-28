import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
    return <>
        <div className="modal show-modal" id="characterModal">
            <div className="modal-content">
                <span className="close-btn" id="closeModal">&times;</span>
                {children}
            </div>
        </div>
    </>
}