import React, { useState, useRef } from "react";
import { PrimaryButton, TextField, Modal, IconButton } from "@fluentui/react";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import Calculator from "../Calculator/Calculator";
import "./Main.css";

// Initialize Fluent UI icons
initializeIcons();

function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [calculatorValue, setCalculatorValue] = useState("");
    const calculatorRef = useRef<{ calculate: () => void }>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const openModal = () =>{
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setModalPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        }
        setIsModalOpen(true);
    }

    const closeModal = () => {
        if (calculatorRef.current) {
            calculatorRef.current.calculate();
        }
        setIsModalOpen(false);
    };

    const handleCalculate = (value: string) => {
        setCalculatorValue(value);
    };

    return (
        <div className="Main">
            <header className="Main-header">
                <div ref={buttonRef}>
                    <PrimaryButton text="Open Calculator" onClick={openModal} />
                </div>
                <TextField label="Calculator Result" value={calculatorValue} readOnly />
                <Modal
                    isOpen={isModalOpen}
                    onDismiss={closeModal}
                    isBlocking={false}
                    containerClassName="modal-container"
                    styles={{ main: { top: modalPosition.top, left: modalPosition.left } }}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Calculator</h2>
                            <IconButton
                                iconProps={{ iconName: 'Cancel' }}
                                ariaLabel="Close popup modal"
                                onClick={closeModal}
                                className="modal-close-button"
                            />
                        </div>
                        <Calculator ref={calculatorRef} onCalculate={handleCalculate} />
                    </div>
                </Modal>
            </header>
        </div>
    );
}

export default Main;