import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }

  const checkSearch = (characterName) => {
    return (characterName.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => setData(res.data.results))
    .catch(err => console.log("Error: ", err))
  }, []);

  return (
    <section className="container">
        <SearchForm handleSearch={handleSearch} searchTerm={searchTerm} />
        <Row>
          {data.filter(character => checkSearch(character.name)).map((character) => 
            <Col sm="4">
              <CharacterCard character={character} />
            </Col>
          )}
        </Row>
    </section>
  );
}
