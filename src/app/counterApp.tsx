'use client'

import { useState } from "react";

type CounterType = {
    message: string;
    count: number;
};

type ErrorType = {
    type: string;
    msg: string;
}


export default function Count(
    {
        count,
        message
    }: CounterType) {

    const [initCount, setInitCount] = useState(count);
    const [userName, setUserName] = useState('');
    const [userInput, setUserInput] = useState<number>()
    const [error, setError] = useState<ErrorType | null>(null)

    const userNUmHandler = (e: any) => {
        const value = e.target.value;
        const parsedValue = parseInt(value, 10);


        if (value === '') {
            setUserInput(undefined);
            setError(null);
        } else if (isNaN(parsedValue)) {
            setUserInput(undefined);
            setError({ type: 'Error', msg: "Enter a valid number" });
        } else if (parsedValue <= 0) {
            setUserInput(parsedValue);
            setError({ type: 'Error', msg: "Enter a number greater than 0" });
        } else {
            setUserInput(parsedValue);
            setError(null);
        }
    }


    return (
        <>
            <h2>{message}</h2>
            <label>
                Enter Name:
                <br />
                <input
                    type="text"
                    value={userName}
                    onChange=
                    {(e) => {
                        setUserName(e.target.value)
                    }}
                />
            </label>
            <h3>Welcome {userName}</h3>
            <br />


            <label>
                Enter Value:
                <br />
                <input
                    type="text"
                    value={userInput}
                    onChange={userNUmHandler}
                />
            </label>

            <br />
            {error && (
                <span style={{ color: '#fff', backgroundColor: 'red' }}>{error.msg}</span>
            )}

            <p>{initCount}</p>
            <button onClick={() => {
                if (userInput !== undefined) {
                    setInitCount(initCount + userInput);
                }
            }}>
                Add
            </button>
            <button onClick={() => {
                if (userInput !== undefined && initCount > 0) {
                    if (initCount === 0) return initCount
                    setInitCount(initCount - userInput);
                }
            }}>
                Minus
            </button>
        </>

    )

}