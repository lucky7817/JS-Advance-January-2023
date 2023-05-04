function attachEvents() {
    let input = document.getElementById('location');
    let button = document.getElementById('submit');

    button.addEventListener('click', getWeather);

    async function getWeather(event) {

        let url = 'http://localhost:3030/jsonstore/forecaster/locations';
        let response = await fetch(url);
        let dataLocantions = await response.json();

        let divForecasts = document.createElement('div');
        divForecasts.setAttribute('class', 'forecasts');

        let divForecastInfo = document.createElement('div');
        divForecastInfo.setAttribute('class', 'forecast-info');
        let divFirst = document.getElementById('forecast');

        dataLocantions.forEach(async l => {

            try {
                if (l.name === input.value) {
 
                    divFirst.style.display = 'block';

                    let divCurrent = document.getElementById('current')
                    //let divForecasts = document.createElement('div');
                    //divForecasts.setAttribute('class', 'forecasts');
                    let span = document.createElement('span');
                    span.setAttribute('class', 'condition symbol');
                    let spanCondition = document.createElement('span');
                    spanCondition.setAttribute('class', 'condition');

                    let spanForecastCity = document.createElement('span');
                    spanForecastCity.setAttribute('class', 'forecast-data');

                    let spanForecastDegree = document.createElement('span');
                    spanForecastDegree.setAttribute('class', 'forecast-data');

                    let spanForecastCondition = document.createElement('span');
                    spanForecastCondition.setAttribute('class', 'forecast-data');

                    let code = l.code;
                    let urlCurrent = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
                    let resCurrent = await fetch(urlCurrent);
                    let dataCurrent = await resCurrent.json();
                    let currentCondition = dataCurrent.forecast.condition;
                    let currentUTF = '';

                    switch (currentCondition) {
                        case 'Sunny': currentUTF = '&#x2600'; break;
                        case 'Partly sunny': currentUTF = '&#x26C5'; break;
                        case 'Overcast': currentUTF = '&#x2601'; break;
                        case 'Rain': currentUTF = '&#x2614'; break;
                    }

                    span.innerHTML = currentUTF;
                    divCurrent.appendChild(divForecasts);
                    divForecasts.appendChild(span);
                    divForecasts.appendChild(spanCondition);

                    spanForecastCity.textContent = dataCurrent.name;
                    spanForecastDegree.textContent = `${dataCurrent.forecast.low}°/${dataCurrent.forecast.high}°`;
                    spanForecastCondition.textContent = dataCurrent.forecast.condition;

                    spanCondition.appendChild(spanForecastCity);
                    spanCondition.appendChild(spanForecastDegree);
                    spanCondition.appendChild(spanForecastCondition);

                    let urlThreeDays = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
                    let resThreeDays = await fetch(urlThreeDays);
                    let dataThreeDays = await resThreeDays.json();

                    let divUpcoming = document.getElementById('upcoming');

                    // let divForecastInfo = document.createElement('div');
                    // divForecastInfo.setAttribute('class', 'forecast-info');
                    divUpcoming.appendChild(divForecastInfo);

                    for (let i = 0; i < dataThreeDays.forecast.length; i++) {
                        let currentCondition = '';
                        switch (dataThreeDays.forecast[i].condition) {
                            case 'Sunny': currentCondition = '&#x2600'; break;
                            case 'Partly sunny': currentCondition = '&#x26C5'; break;
                            case 'Overcast': currentCondition = '&#x2601'; break;
                            case 'Rain': currentCondition = '&#x2614'; break;
                            //case 'Degrees': currentCondition = '&#176'; break;
                        }

                        if (i === 0) {

                            let spanUpcoming = document.createElement('span');
                            spanUpcoming.setAttribute('class', 'upcoming');
                            divForecastInfo.appendChild(spanUpcoming);

                            let spanSymbol = document.createElement('span');
                            spanSymbol.setAttribute('class', 'symbol');
                            spanSymbol.innerHTML = currentCondition;
                            spanUpcoming.appendChild(spanSymbol);

                            let spanLowHighDegrees = document.createElement('span');
                            spanLowHighDegrees.setAttribute('class', 'forecast-data');
                            spanLowHighDegrees.textContent = `${dataThreeDays.forecast[i].low}°/${dataThreeDays.forecast[i].high}°`;
                            spanUpcoming.appendChild(spanLowHighDegrees);

                            let spanUpcomingCondition = document.createElement('span');
                            spanUpcomingCondition.setAttribute('class', 'forecast-data');
                            spanUpcomingCondition.textContent = dataThreeDays.forecast[i].condition;
                            spanUpcoming.appendChild(spanUpcomingCondition);

                        }

                        if (i === 1) {

                            let spanUpcoming = document.createElement('span');
                            spanUpcoming.setAttribute('class', 'upcoming');
                            divForecastInfo.appendChild(spanUpcoming);

                            let spanSymbol = document.createElement('span');
                            spanSymbol.setAttribute('class', 'symbol');
                            spanSymbol.innerHTML = currentCondition;
                            spanUpcoming.appendChild(spanSymbol);

                            let spanLowHighDegrees = document.createElement('span');
                            spanLowHighDegrees.setAttribute('class', 'forecast-data');
                            spanLowHighDegrees.textContent = `${dataThreeDays.forecast[i].low}°/${dataThreeDays.forecast[i].high}°`;
                            spanUpcoming.appendChild(spanLowHighDegrees);

                            let spanUpcomingCondition = document.createElement('span');
                            spanUpcomingCondition.setAttribute('class', 'forecast-data');
                            spanUpcomingCondition.textContent = dataThreeDays.forecast[i].condition;
                            spanUpcoming.appendChild(spanUpcomingCondition);

                        }

                        if (i === 2) {

                            let spanUpcoming = document.createElement('span');
                            spanUpcoming.setAttribute('class', 'upcoming');
                            divForecastInfo.appendChild(spanUpcoming);

                            let spanSymbol = document.createElement('span');
                            spanSymbol.setAttribute('class', 'symbol');
                            spanSymbol.innerHTML = currentCondition;
                            spanUpcoming.appendChild(spanSymbol);

                            let spanLowHighDegrees = document.createElement('span');
                            spanLowHighDegrees.setAttribute('class', 'forecast-data');
                            spanLowHighDegrees.textContent = `${dataThreeDays.forecast[i].low}°/${dataThreeDays.forecast[i].high}°`;
                            spanUpcoming.appendChild(spanLowHighDegrees);

                            let spanUpcomingCondition = document.createElement('span');
                            spanUpcomingCondition.setAttribute('class', 'forecast-data');
                            spanUpcomingCondition.textContent = dataThreeDays.forecast[i].condition;
                            spanUpcoming.appendChild(spanUpcomingCondition);

                        }
                    }
                }

            } catch (error) {
                throw new Error();
            }
        });
    }
}

attachEvents();