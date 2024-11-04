import React, { useState, useImperativeHandle, forwardRef, useEffect, useRef } from "react";
import { TextField, PrimaryButton, Stack, ITextField } from "@fluentui/react";
import "./Calculator.css";

interface CalculatorProps {
    onCalculate: (value: string) => void;
}

function Calculator({ onCalculate }: CalculatorProps, ref: any) {
    const [input, setInput] = useState("0");
    const textFieldRef = useRef<ITextField>(null);

    const handleButtonClick = (value: string) => {
        setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
    };

    const handleClear = () => {
        setInput("0");
    };

    const handleCalculate = () => {
        try {
            const result = eval(input).toString();
            setInput(result);
            onCalculate(result);
        } catch {
            setInput("Error");
            onCalculate("Error");
        }
    };

    useImperativeHandle(ref, () => ({
        calculate: handleCalculate
    }));

    const handleKeyDown = (event: KeyboardEvent) => {
        const { key } = event;
        if (key >= "0" && key <= "9") {
            handleButtonClick(key);
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
            handleButtonClick(key);
        } else if (key === "Enter") {
            handleCalculate();
        } else if (key === "Escape") {
            handleClear();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (textFieldRef.current) {
            textFieldRef.current.focus();
        }
    }, []);

    return (
        <div className="Calculator">
            <Stack tokens={{ childrenGap: 10 }}>
                <TextField 
                    value={input} 
                    onChange={(e, newValue) => {
                        if (newValue && newValue.length > 1 && newValue[0] === "0") {
                            newValue = newValue.slice(1);
                        }
                        setInput(newValue || "0");
                    }}
                    componentRef={textFieldRef}
                />
                <Stack horizontal tokens={{ childrenGap: 10 }}>
                    <PrimaryButton text="1" onClick={() => handleButtonClick("1")} />
                    <PrimaryButton text="2" onClick={() => handleButtonClick("2")} />
                    <PrimaryButton text="3" onClick={() => handleButtonClick("3")} />
                    <PrimaryButton text="+" onClick={() => handleButtonClick("+")} />
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 10 }}>
                    <PrimaryButton text="4" onClick={() => handleButtonClick("4")} />
                    <PrimaryButton text="5" onClick={() => handleButtonClick("5")} />
                    <PrimaryButton text="6" onClick={() => handleButtonClick("6")} />
                    <PrimaryButton text="-" onClick={() => handleButtonClick("-")} />
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 10 }}>
                    <PrimaryButton text="7" onClick={() => handleButtonClick("7")} />
                    <PrimaryButton text="8" onClick={() => handleButtonClick("8")} />
                    <PrimaryButton text="9" onClick={() => handleButtonClick("9")} />
                    <PrimaryButton text="*" onClick={() => handleButtonClick("*")} />
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 10 }}>
                    <PrimaryButton text="0" onClick={() => handleButtonClick("0")} />
                    <PrimaryButton text="C" onClick={handleClear} />
                    <PrimaryButton text="=" onClick={handleCalculate} />
                    <PrimaryButton text="/" onClick={() => handleButtonClick("/")} />
                </Stack>
            </Stack>
        </div>
    );
}

export default forwardRef(Calculator);