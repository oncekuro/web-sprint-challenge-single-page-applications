import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

//form valadation
const schema = yup.object().shape({
  name: yup
    .string()
    .required("NAME is required")
    .min(3, "NAME must be 3 characters or more"),
  size: yup.string().oneOf(["1", "2", "3"], "you MUST select a pizza SIZE"),
  peperoni: yup.boolean(),
  bacon: yup.boolean(),
  cheese: yup.boolean().oneOf([true], "you MUST choose cheese "),
  si: yup.string(),
});

export default function Pizza() {
  // setting state and check state
  const [form, setForm] = useState({
    name: "",
    size: "",
    peperoni: false,
    bacon: false,
    cheese: true,
    si: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    peperoni: "",
    bacon: "",
    cheese: "",
    si: "",
  });

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  //drives state
  const change = (event) => {
    const { checked, name, value, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };
  const submit = (event) => {
    event.preventDefault();
    const newOrder = {
      name: form.name.trim(),
      size: form.size,
      peperoni: form.peperoni,
      bacon: form.bacon,
      cheese: form.cheese,
      si: form.si,
    };
    axios
      .post("https://reqres.in/api/users", newOrder)

      .then((respone) => {
        setForm({
          name: "",
          size: "",
          peperoni: false,
          bacon: false,
          cheese: true,
          si: "",
        });
      })
      .catch((error) => {});
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <StyledDiv>
      <div
        style={{
          color: "red",
        }}
      >
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.cheese}</div>
        <div>{errors.si}</div>
      </div>
      <h2>Build Your Own Pizza</h2>
      <img
        src="https://github.com/LambdaSchool/web-sprint-challenge-single-page-applications/blob/main/Assets/Pizza.jpg?raw=true"
        alt="pizza"
        width="500"
        height="333"
      ></img>
      <form onSubmit={submit}>
        <label>
          <h5>Name :</h5>
          <input
            data-cy="name"
            onChange={change}
            value={form.name}
            name="name"
            type="text"
          />
        </label>

        <label>
          <h5>Pizza Size :</h5>
          <select
            data-cy="size"
            onChange={change}
            value={form.size}
            name="size"
          >
            <option>--select--</option>
            <option value="1">small</option>
            <option value="2">medium</option>
            <option value="3">large</option>
          </select>
        </label>

        <h5>Toppings :</h5>
        <label>
          Peperoni
          <input
            data-cy="pepperoni"
            onChange={change}
            checked={form.peperoni}
            name="peperoni"
            type="checkbox"
          />
        </label>

        <label>
          Bacon
          <input
            data-cy="bacon"
            onChange={change}
            checked={form.bacon}
            name="bacon"
            type="checkbox"
          />
        </label>

        <label>
          Cheese
          <input
            data-cy="cheese"
            onChange={change}
            checked={form.cheese}
            name="cheese"
            type="checkbox"
          />
        </label>

        <label>
          <h5>Special Instructions :</h5>
          <textarea
            data-cy="si"
            onChange={change}
            value={form.si}
            name="si"
            type="textarea"
          />
        </label>

        <button data-cy="order" disabled={disabled}>
          Order
        </button>
      </form>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-around;
  color: Red;
`;
