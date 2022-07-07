import { Field, Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import useHome from "../../containers/Home/useHome";
import useWeather from "../../containers/Home/useWeather";

type CityType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

const Search = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: () => {},
  });

  const { values } = formik;

  const [selectedCity, setSelectedCity] = useState<CityType | null>();

  const { cityData } = useHome({
    search: values.search,
  });

  const { weatherData } = useWeather({
    lat: selectedCity?.lat,
    lon: selectedCity?.lon,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Field
          className="border"
          type="text"
          name="search"
          placeholder="search"
          autoComplete="off"
        />
        <ul>
          {cityData?.map((singleCity: any) => {
            return (
              <li
                onClick={() => setSelectedCity(singleCity)}
                key={singleCity.lat + singleCity.lon}
              >
                {singleCity.name}, {singleCity.state}
              </li>
            );
          })}
        </ul>
      </Form>
    </FormikProvider>
  );
};

export default Search;
