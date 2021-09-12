module.exports = {
    async waitForTimeout(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}
