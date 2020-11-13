import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import Axios from "axios";

Axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  render(
    <InertiaApp
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={(name) => require(`../components/${name}`).default}
    />,
    app
  );
});
