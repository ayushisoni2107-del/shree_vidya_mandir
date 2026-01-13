import React from "react";
import Card from "./Card";

function Board() {
  return (
    <>
    <br/><br/>
    <section className="py-10 px-5">
      <h1 className="text-5xl font-bold md:font-serif text-center mb-3">
        Boards of Governance
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc placerat, ante eu cursus pretium Lorem ipsum dolor sit amet,
        consectetur placerat, ante eu cursus pretium
      </p>
      <br/><br/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    </>
  );
}

export default Board;
