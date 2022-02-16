import React from "react";
import { Welcome } from "./sample/Welcome";

var showFunction = Boolean(process.env.REACT_APP_FUNC_NAME);
var includeAuth = Boolean(process.env.REACT_APP_CLIENT_ID);

export default function Tab() {
  return (
    <div>
      <Welcome showFunction={showFunction} includeAuth={includeAuth} />
    </div>
  );
}
