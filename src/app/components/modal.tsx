'use client'
import { useRouter } from "next/navigation";
import { ReactNode, SyntheticEvent } from "react";

export default function Modal({ children }: { children: ReactNode }) {
    const router = useRouter();

    const onClickHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        router.back();
    }
    return <>
        <div className="modal show-modal" id="characterModal">
            <div className="modal-content">
                <span className="close-btn" id="closeModal" onClick={onClickHandler}>&times;</span>
                {children}
            </div>
        </div>
    </>
}