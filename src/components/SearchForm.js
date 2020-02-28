import React from "react";
import { Button } from 'reactstrap';

export default function SearchForm({onSubmit, searchTerm, onChange}) {
  return (
    <section className="search-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Search: </label>
        <input type="text" value={searchTerm} onChange={onChange} name="search" placeholder="Rick Sanchez"></input>
        <Button type="submit" style={{marginLeft: "2%"}}>Search</Button>
      </form>
    </section>
  );
}
