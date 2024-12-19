function increment(number) {
    console.log('increment function called', number);
    return number.value++;
}

function reset(number) {
    return number.value = 0;
}

export { increment, reset };