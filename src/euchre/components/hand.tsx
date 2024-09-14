import {Card} from "./card.tsx";
import styles from "./hand.module.scss";
import type {DECK} from "../constants.ts";

type TCard = keyof typeof DECK
export type THand = [TCard?, TCard?, TCard?, TCard?, TCard?]

interface Props {
    cards: THand
}

export const Hand = ({cards}: Props) => {
    if (cards.length === 0) {
        return "No cards in hand"
    }

    return (
        <div className={styles.hand}>
            {
                cards.map(c => (
                    // @ts-ignore
                    <Card key={c} id={c}/>
                ))
            }
        </div>
    )
}