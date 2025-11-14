// FragranceLinkList.styled.ts

import { Link } from "react-router-dom";
import styled from "styled-components";

export const AssetGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

export const AssetWrapper = styled.div<{ $color?: string }>`
  margin-bottom: 5px;
  color: ${({ $color }) => $color || "#333"};
  font-size: 2rem;
  line-height: 1;
`;

export const ImageAsset = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  padding: 5px;
  line-height: 1.2;
  color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 0.5px;
  z-index: 3;

  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const BoxLink = styled(Link)<{ $bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: clamp(100px, 20vw, 150px);
  height: auto;
  aspect-ratio: 1;
  margin: 0 10px 10px 0;
  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: ${({ $bgColor }) => $bgColor || "#f9f9f9"};
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${NameText} {
    opacity: 1;
  }
`;
