import { Field, Form, FormikProvider, useFormik } from "formik";
import { useContext } from "react";

//HOOKS:
import useHome from "../../containers/Home/useHome";
import { SearchContext } from "./SearchContext";

export type SingleCityTypes = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

const Search = () => {
  const { selectedCity, setSelectedCity } = useContext(SearchContext);

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: () => {},
  });

  const { values } = formik;

  const { cityData } = useHome({
    search: values.search,
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
          {`${selectedCity?.name}, ${selectedCity?.state}` !== values.search &&
            cityData?.map((singleCity: SingleCityTypes) => {
              // console.log(singleCity, "single city");
              return (
                <li
                  onClick={() => {
                    return (
                      setSelectedCity(singleCity),
                      formik.resetForm({
                        values: {
                          search: `${singleCity.name}, ${singleCity.state}`,
                        },
                      })
                    );
                  }}
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
