export function getTotal( selection ) {
    return selection.reduce((acc, iter) => {
        return acc + Number(iter.price);
    }, 0);
}