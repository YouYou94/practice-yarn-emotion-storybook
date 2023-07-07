import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonProps = {
  children: string | ReactElement | ReactElement[];
};

export const Button = ({ children }: ButtonProps) => {
  const base = css`
    width: 8rem;
    height: 2rem;

    border: none;
    border-radius: 1rem;

    background-color: rgb(204, 204, 204);
  `;

  return <BaseButton>{children}</BaseButton>;
};

const BaseButton = styled.button`
  width: 8rem;
  height: 2rem;

  border: none;
  border-radius: 1rem;

  background-color: rgb(204, 204, 204);
`;
