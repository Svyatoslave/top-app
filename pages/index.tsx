import { Htag, Button, P, Tag, Rating } from "../components";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Нажми
      </Button>
      <Button appearance="ghost" arrow="down">
        Нажми
      </Button>
      <P size="s">Маленький</P>
      <P size="m">Средний</P>
      <P size="l">Большой</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
