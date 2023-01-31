//SANITY CONNECTION 
    let PROJECT_ID = "7ay5nj8r";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "quotes"]');

    // Compose the URL for your project's endpoint and add the query
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    fetch(URL)
        .then((response) => { 
            return response.json()
        })
        .then((data) => {
            
            numberOfQuotes = data.result.length;
            quoteNumber = Math.floor(Math.random() * numberOfQuotes);

            const setQuote = document.getElementById('quote');
            setQuote.innerHTML = data.result[quoteNumber].quote;

            const setPerson = document.getElementById('person');
            setPerson.innerHTML = data.result[quoteNumber].person;    

        })