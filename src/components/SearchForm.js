import React, { useState } from "react";
import { Button } from 'reactstrap';

export default function SearchForm({handleSearch, searchTerm}) {
  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search: </label>
        <input type="text" onChange={handleSearch} value={searchTerm} name="search" placeholder="Rick Sanchez"></input>
        <Button type="submit"/>
      </form>
    </section>
  );
}
