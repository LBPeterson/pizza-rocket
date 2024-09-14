import React from 'react'
import {Hand, type THand} from "./components/hand.tsx";

const InitialCards: THand = ['S9', 'CJ', 'DA', 'H10', 'CK'];

export default () => {
    return (
        <Hand cards={InitialCards} />
    )
}