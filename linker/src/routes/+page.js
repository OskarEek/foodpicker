export const load = ({headers}) => {
    let cookieValue = headers
    console.log(cookieValue)
    let tempList = cookieValue == null ? [] : cookieValue
    return { temporaryList: tempList }
}