let NAME_MODE = 1;
let URL_MODE = 2;

export const load = ({fetch, params}) => {
    let linkList = [];
    try {
        let reformedContent = JSON.parse(atob(params.content))

        let linkObject = {};

        let mode = NAME_MODE;
        for (let item in reformedContent) {
            if (mode == NAME_MODE) {
                linkObject["name"] = reformedContent[item];
            } 
            else if (mode == URL_MODE) {
                linkObject["url"] = reformedContent[item];
                linkList.push(linkObject);
                linkObject = {}
            }

            mode = mode == NAME_MODE ? URL_MODE : NAME_MODE;
        }
    }
    catch (e) {
        linkList = []
    }
    return { content: linkList }
}