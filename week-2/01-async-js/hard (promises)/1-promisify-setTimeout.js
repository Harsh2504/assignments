
    function delay(n) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, n * 1000);
        });
    }

function wait(n) {
    delay(n);
}

module.exports = wait;
