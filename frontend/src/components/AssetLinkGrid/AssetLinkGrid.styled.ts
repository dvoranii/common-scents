import { Link } from "react-router-dom";
import styled from "styled-components";

export const AssetGridContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const AssetItem = styled.li`
  display: block;
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
  pointer-events: none;
`;

export const AssetWrapper = styled.div<{ $color?: string }>`
  margin-bottom: 5px;
  color: ${({ $color }) => $color || "#333"};
  font-size: 2rem;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: clamp(36px, 6vw, 48px);
    height: auto;
  }
`;

export const ImageAsset = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const NameText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 0.9rem;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 600;
  padding: 5px;
  line-height: 1.2;
  color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 0.5px;
  z-index: 3;
  pointer-events: none;

  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const BoxLink = styled(Link)<{ $bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: clamp(100px, 20vw, 120px);
  height: auto;
  aspect-ratio: 1;

  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;
  color: #333;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: ${({ $bgColor }) => $bgColor || "#f9f9f9"};
  position: relative;
  isolation: isolate;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${NameText} {
    opacity: 1;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible ${Overlay}, &:focus-visible ${NameText} {
    opacity: 1;
  }
`;
