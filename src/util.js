export function defaultEquals(a, b) {
    return a === b;
}

export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
}

export function defaultCompare(a, b) {
    if (a === b) return 0

    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;

}

// Converte um ítem para string
export function defaultToString(item) {
    if (item === null) return 'NULL'
    if (item === undefined) return 'UNDEFINED'
    if (typeof item === 'string' || item instanceof String) return `${item}`
    return item.toString()
}