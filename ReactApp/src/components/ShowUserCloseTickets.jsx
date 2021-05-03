import React, { useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import instance from "../Service/AxiosService";

export default function ShowUserCloseTickets() {

  useEffect(() => {
    instance.get("http://localhost8080/db/user/alluserName").then((res) => {
      console.log(res.data);

      let select = document.getElementById("Selectusernames")

      res.data.forEach((element) => {
        let opt = document.createElement("option");
        opt.value = element;
        opt.innerHTML = element;
        select.appendChild(opt);
      });
    });
  }, []);

  const handleNameChange = (e) => {};

  return (
    <div>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple" fullWidth>
          Level
        </InputLabel>
        <Select
        id="Selectusernames"
          variant="outlined"
          native
          onChange={(e) => handleNameChange(e)}
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        ></Select>
      </FormControl>
    </div>
  );
}
