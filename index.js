fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
        var content = `
        <div class="card">
        <img src="flag" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">countryname</h5>
          <p class="card-text">
          Capital: capital <br>
          Region: region
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Population: population</small>
        </div>
      </div>
        `

        for (let i = 0; i < json.length; i++) {
            var x = document.createElement('div')
            var z = content.replace('flag',json[i].flag)
            z = z.replace('countryname',json[i].name)
            z = z.replace('population', formatNumber(json[i].population));
            z=z.replace('capital', json[i].capital);
            z=z.replace('region',json[i].region);
            x.innerHTML = z;
            document.getElementById('card-deck').appendChild(x)
        }
    });

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }