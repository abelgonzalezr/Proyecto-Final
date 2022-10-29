import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/cards";
import { Context } from "../store/appContext";

export const Biblioteca = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="ml-auto mt-4 text-center">
        <button className="btn btn-info bg-opacity-25 text-white mb-4 ">
          <h3>Biblioteca de Razas</h3>
        </button>
      </div>
      <div className="container-flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
