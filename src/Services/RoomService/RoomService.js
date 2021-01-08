import appConfig from '../../Helpers/appConfig'

const RoomListService = (id) => {
    console.log('RoomListService id', id)
    const body =
    {
        "search": [{
            "searchfield": "resortid",
            "searchvalue": id,
            "criteria": "eq",
            "datatype": "ObjectID"
        }]
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'assets/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}


export { RoomListService };