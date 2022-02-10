const compareDates = (createdDate) => {
    let now = Date.now();
    // Filling lacking numbers with 0
    createdDate = createdDate.toString();
    if (createdDate.length < 13) {
        let difference = 13 - createdDate.length;
        for (difference; difference > 0; difference--) {
            createdDate = createdDate + '0';
        }
    }
    createdDate = parseInt(createdDate);

    let seconds = Math.abs(now - createdDate) / 1000;
    let minutes = Math.abs(now - createdDate) / 60000;
    let hours = Math.abs(now - createdDate) / 3600000;
    let days = Math.abs(now - createdDate) / 86400000;
    let weeks = Math.abs(now - createdDate) / 604800000;
    let months = Math.abs(now - createdDate) / 2629746000;
    let years = Math.abs(now - createdDate) / 31556952000;

    createdDate = new Date(createdDate).toString();
    
    if (years >= 1) {
        return [Math.floor(years), 'years'];
    } else if (months >= 1) {
        return [Math.floor(months), 'months'];
    } else if (weeks >= 1) {
        return [Math.floor(weeks), 'weeks'];
    } else if (days >= 1) {
        return [Math.floor(days), 'days'];
    } else if (hours >= 1) {
        return [Math.floor(hours), 'hours'];
    } else if (minutes >= 1) {
        return [Math.floor(minutes), 'minutes'];
    } else if (seconds >= 1) {
        return [Math.floor(seconds), 'seconds'];
    }
    
}

console.log(compareDates(1643699057));