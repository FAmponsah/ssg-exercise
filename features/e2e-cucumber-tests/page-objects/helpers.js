module.exports = {
    async getTodaysFormatedDate() {
        const now = new Date();
        const formattedDate = now.getDate() + " " + 
                    now.toLocaleDateString("default", { month: "long" }).substring(0, 3) + " " + 
                    now.getFullYear().toString().substring(2);

        return formattedDate;
    }
}