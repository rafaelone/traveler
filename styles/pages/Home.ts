import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import Image from 'next/image';

const animateBefore = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
    pointer-events: none;
  },

  to {
    transform: translateY(-40px);
    opacity: 0;
    pointer-events: none;
  }
`;

export const Header = styled.header`
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  padding: 0px 10px;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
  button {
    width: 174px;
    height: 48px;
    border: none;
    background: var(--background-button-header);
    border-radius: 10px;
    color: var(--color-button-header);
    font-family: 'Heeboo';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    transition: all 0.2s;
    &:hover {
      background: ${shade(0.1, 'var(--background-button-header)')};
      color: ${shade(0.3, 'var(--color-button-header)')};
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  justify-content: space-between;
  display: flex;
  padding: 0px 10px;
  transition: all 0.2s;
  @media screen and (max-width: 1024px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Barlow';
    font-weight: 600;
    font-size: 80px;
    line-height: 74px;
    color: var(--color-headings);
    max-width: 317px;
    line-height: 74px;

    @media screen and (max-width: 1024px) {
      font-size: 40px;
      line-height: 37px;
      margin-top: 30px;
    }
  }

  p {
    font-family: 'Heeboo';
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: var(--color-text);
    max-width: 330px;
    display: block;
    margin-top: 40px;

    @media screen and (max-width: 1024px) {
      margin-top: 20px;
    }
  }

  button {
    width: 329px;
    height: 72px;
    background: var(--orange);
    border-radius: 10px;
    font-family: 'Heebo';
    font-weight: 400px;
    font-size: 18px;
    line-height: 26px;
    border: none;
    color: var(--white);
    margin-top: 70px;
    &:hover {
      background: ${shade(0.1, 'var(--orange)')};
    }

    @media screen and (max-width: 1024px) {
      margin-top: 35px;
    }
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 774px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

export const GridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 335px);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 335px);
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s;

  &:nth-child(1) {
    margin-top: 0px;
    transition-delay: 0.2s * 0;
  }
  &:nth-child(2) {
    margin-top: 90px;
    transition-delay: 0.2s * 1;

    @media screen and (max-width: 1024px) {
      margin-top: 10px;
    }
  }
`;

export const ColumnItem = styled.div`
  width: 304px;
  height: 316px;
  background: var(--white);
  border-radius: 20px;
  animation: ${animateBefore} 1s;
  border-radius: 10px 10px 10px 10px;

  &:not(:first-child) {
    margin-top: 24px;
  }
`;

export const ColumnItemImage = styled(Image)`
  border-radius: 10px 10px 0px 0px;
`;

export const ColumnItemInfo = styled.div`
  margin: 25px 27px;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 10px 10px 0px 0px;
  }
  strong {
    color: var(--color-strong);
    font-family: 'Barlow';
    font-weight: 600;
    line-height: 22px;
    font-size: 22px;
  }
  span {
    display: block;
    margin-top: 7.6px;
    color: var(--color-text);
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
  }
`;
