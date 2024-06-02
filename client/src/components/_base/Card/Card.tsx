import { PropsWithChildren } from "react";
import { CardContainer } from "./Card.styled";

const Card = ({ children }: PropsWithChildren) => {
    return <CardContainer>{children}</CardContainer>;
};

export default Card;
