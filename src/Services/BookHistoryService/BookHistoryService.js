import appConfig from '../../Helpers/appConfig'

const BookHistoryService = () => {
    const body =
    {
        "search": [{
            "searchfield": "status",
            "searchvalue": "active",
            "criteria": "eq"
        }, { "searchfield": "addedby", "searchvalue": "5fec158fd8353d4d7ecec742", "criteria": "eq" }]
    }

    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'facilitybookings/filter', requestOptions)
        .then(response => response.json()).catch(error => {
            console.error('There was an error!', error);
        });
}

export { BookHistoryService };
