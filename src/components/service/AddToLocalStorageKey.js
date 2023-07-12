export default async function AddToLocalStorageKey(key, value) {
    // Recieve a key and a value and 
    // find the key in the localStorage
    // if the key exists, add the value to the key
    // if the key doesn't exist, create the key and add the value
    // return the new value of the key

    let savedLocalStorage = localStorage.getItem(key)

    if (savedLocalStorage === null) {
        localStorage.setItem(key, JSON.stringify([value]))
    } else {
        const currentLocalStorage = JSON.parse(savedLocalStorage)
        currentLocalStorage.push(value)
        localStorage.setItem(key, JSON.stringify(currentLocalStorage))
    }
}