function fixRoute(route) {
    let newData,
        newVariable = route.split("\\");
    for (let i = 0; i < newVariable.length; i++) {
        newData += `/${newVariable[i]}`
    };
    return newData.split('undefined/')[1];
};

export {
    fixRoute
}