
/**
 * Potang ina mo Sean
 */
export const dateRefresherHelper = () => {
    setInterval(() => {
        return new Date().toLocaleString('en-US', {hour:'numeric', minute:'numeric', hour12: true});
    }, 1000);
}
