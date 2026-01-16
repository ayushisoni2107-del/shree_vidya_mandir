import React from "react";
import Card from "./Card";

function Board() {
  return (
    <>
      <br /><br />
      <section className="py-10 px-10">
        <h1 className="text-5xl font-bold md:font-serif text-center mb-3">
          Boards of Governance
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc placerat, ante eu cursus pretium Lorem ipsum dolor sit amet.
        </p>

        {/* 4 cards in one row */}
        <div className="grid grid-cols-4 gap-6">
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
