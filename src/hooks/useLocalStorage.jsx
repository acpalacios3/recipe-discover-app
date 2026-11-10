import { useEffect, useState } from "react"

export default function useLocalStorage(key, initialValue) {

    // read initial value from localStorage
    const [value, setValue] = useState(() => {

        // retrieve a value from local storage (using key)
        const item = localStorage.getItem(key);

        if (item !== null) {
            // turn the item from a string into an object/array
            return JSON.parse(item);
        }
        return initialValue;
    });

    // Every time value changes, we save the new information
    useEffect(() => {

        // turning the object/array into a string o text
        const stringifiedItem = JSON.stringify(value);
        // save the item in local storage
        localStorage.setItem(key, stringifiedItem);

    }, [key, value]);

    // indicates when the effect should run
    return [value, setValue];
}