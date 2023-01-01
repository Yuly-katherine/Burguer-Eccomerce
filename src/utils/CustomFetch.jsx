let validation = true;

const CustomFetch = (time, getData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (validation) {
                resolve (getData);
            } else {
                reject("Error in the CustomFetch");
            }
        }, time);
    });
}

export default CustomFetch;