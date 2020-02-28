import React from "react";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard({character}) {
  return (
    <Card className="mt-2 mb-2">
      <CardImg top width="100%" src={character.image} alt="Card image cap" />
      <CardBody>
        <CardTitle><strong>Name: </strong>{character.name}</CardTitle>
        <CardSubtitle><strong>Species: </strong>{character.species}</CardSubtitle>
        <CardSubtitle><strong>Status: </strong>{character.status}</CardSubtitle>
        <CardSubtitle><strong>Location: </strong>{character.location.name}</CardSubtitle>
        <Button>Button</Button>
      </CardBody>
    </Card>
  )
}
