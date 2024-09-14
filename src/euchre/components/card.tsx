import { DECK } from "../constants.ts";
import styles from './card.module.scss';
import {clsx} from "clsx";

interface Props {
    id: keyof typeof DECK;
}

export const Card = ({ id }: Props) => {
    const {suit, char} = DECK[id];
    return <div className={clsx(styles.card, styles[suit])}>{char}</div>
}