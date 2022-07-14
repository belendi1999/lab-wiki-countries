
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      <h1>Countries</h1>

      {props.countries.map((country) => {
        console.log(country);
        return (
          <div key={country.alpha3Code} className="countryid">
            <h3>
              {' '}
              <Link to={`/countries/${country.alpha3Code}`}>
                {country.name.common}
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
