function parserObj(obj, key) {
    return Object.entries(obj).reduce((a, [k, v]) => {
        a[k] = v[key];
        return a;
    }, {})
}

export default parserObj;