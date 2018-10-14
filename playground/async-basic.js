console.log('Starting app');

setTimeout(() => {
    console.log('I\'m lateee, 2 seconds...');
}, 2000);

setTimeout(() => {
    console.log('I should be on time...');
}, 0);

console.log('Finishing up');