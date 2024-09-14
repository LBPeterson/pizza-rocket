const SUITS = {
    club: '♣',
    spade: '♠',
    diamond: '♦',
    heart: '♥',
}

enum Value {
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
}

interface Card {
    suit: keyof typeof SUITS,
    val: Value,
    char: string,
}

export const DECK: Record<string, Card> = {
    C10: {suit: 'club', val: Value.Ten, char: '🃚'},
    C9: {suit: 'club', val: Value.Nine, char: '🃙'},
    CA: {suit: 'club', val: Value.Ace, char: '🃑'},
    CJ: {suit: 'club', val: Value.Jack, char: '🃛'},
    CK: {suit: 'club', val: Value.King, char: '🃞'},
    CQ: {suit: 'club', val: Value.Queen, char: '🃝'},
    D10: {suit: 'diamond', val: Value.Ten, char: '🃊'},
    D9: {suit: 'diamond', val: Value.Nine, char: '🃉'},
    DA: {suit: 'diamond', val: Value.Ace, char: '🃁'},
    DJ: {suit: 'diamond', val: Value.Jack, char: '🃋'},
    DK: {suit: 'diamond', val: Value.King, char: '🃎'},
    DQ: {suit: 'diamond', val: Value.Queen, char: '🃍'},
    H10: {suit: 'heart', val: Value.Ten, char: '🂺'},
    H9: {suit: 'heart', val: Value.Nine, char: '🂹'},
    HA: {suit: 'heart', val: Value.Ace, char: '🂱'},
    HJ: {suit: 'heart', val: Value.Jack, char: '🂻'},
    HK: {suit: 'heart', val: Value.King, char: '🂾'},
    HQ: {suit: 'heart', val: Value.Queen, char: '🂽'},
    S10: {suit: 'spade', val: Value.Ten, char: '🂪'},
    S9: {suit: 'spade', val: Value.Nine, char: '🂩'},
    SA: {suit: 'spade', val: Value.Ace, char: '🂡'},
    SJ: {suit: 'spade', val: Value.Jack, char: '🂫'},
    SK: {suit: 'spade', val: Value.King, char: '🂮'},
    SQ: {suit: 'spade', val: Value.Queen, char: '🂭'},
}
