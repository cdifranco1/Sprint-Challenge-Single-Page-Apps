import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";

export default function CharacterList() {
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => setData(res.data.results))
    .catch(err => console.log("Error: ", err))
  }, []);

  return (
    <section className="container">
        <Row>
          {data.map((character) => 
            <Col sm="4">
              <CharacterCard character={character} />
            </Col>
          )}
        </Row>
    </section>
  );
}
