import * as React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import styled from "styled-components";

type Props = {
  refine: (value: string) => void;
  currentRefinement: string;
  onFocus: () => void;
};

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: unset;
  font-family: var(--font-sans);
  padding-left: 0.75rem;
  height: 40px;
`;

const Icon = styled.svg`
  color: var(--gray-400);
`;

function SearchForm({ refine, currentRefinement, onFocus }: Props) {
  return (
    <Form>
      <Input
        aria-label="Seite durchsuchen"
        type="text"
        enterKeyHint="search"
        placeholder="Seite durchsuchen..."
        value={currentRefinement}
        onFocus={onFocus}
        onChange={(evt) => refine(evt.target.value)}
      />
      <Icon width={22} height={22} aria-hidden={true}>
        <use xlinkHref="/symbol-defs.svg#search" />
      </Icon>
    </Form>
  );
}

export default connectSearchBox(SearchForm);
