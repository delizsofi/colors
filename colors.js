export function feladat01(szinek) {
    let pow = 1;
    for (i = 0; i < szinek.length; i++) {
        pow *= 2
    }
    return pow - (szinek.length + 1)
}
