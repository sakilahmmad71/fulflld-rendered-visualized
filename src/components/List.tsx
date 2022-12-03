import styled from "@emotion/styled";
import React, { FC, useEffect, useRef, useState } from "react";
import Item from "./Item";
import { SafelyRenderChildren } from "./SafelyRenderChildren";
import useIntersectionObserver from "../hooks/useIntersactionObserver";

const ScrollWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  width: 100%;
  height: 500px;
  overflow: auto;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

export interface ListProps {
  items: string[];
}

export const List: FC<ListProps> = ({ items }) => {
  const [listOfItems, setListOfItems] = useState([]);

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 1 });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (items) {
      setListOfItems(items?.slice(0, 500));
    }
  }, [items]);

  useEffect(() => {
    if (isVisible) {
      setListOfItems((prevItems) =>
        prevItems.concat(items.slice(prevItems.length, prevItems.length + 500))
      );
    }
  }, [isVisible]);

  return (
    <ScrollWrapper>
      <ListWrapper>
        {/**
         * Note: `SafelyRenderChildren` should NOT be removed while solving
         * this interview. This prevents rendering too many list items and
         * potentially crashing the web page. This also enforces an artificial
         * limit (5,000) to the amount of children that can be rendered at one
         * time during virtualization.
         */}
        <SafelyRenderChildren>
          {listOfItems.map((word, index) => (
            <Item
              ref={
                listOfItems?.length && index === listOfItems.length - 1
                  ? ref
                  : null
              }
              key={word}
            >
              {word}
            </Item>
          ))}
        </SafelyRenderChildren>
      </ListWrapper>
    </ScrollWrapper>
  );
};
