// Time: 02:35
export function convertTime(duration) {
    let totalSec = Math.floor(duration / 1000);
    let minutes = Math.floor(totalSec / 60);
    let seconds = totalSec % 60;
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

// Date: oct 09,2023
export function convertDate(value) {
    const date = new Date(value);
    return date.toLocaleString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}
