import styled from "@emotion/styled";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren
} from "react";

const Wrapper = styled.li`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  padding-left: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: monospace;
`;

export interface ItemProps {}

const Item: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<ItemProps>
> = ({ children }, ref) => {
  return (
    <div ref={ref}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default forwardRef(Item);
