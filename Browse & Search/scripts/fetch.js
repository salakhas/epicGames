async function apiCall(url) {

    try {
        let res = await fetch(url);
        let data = await res.json();
        //console.log(data)
        return data;
    }
    catch (err) {
        console.log('err:', err);
    }


}

export default apiCall;