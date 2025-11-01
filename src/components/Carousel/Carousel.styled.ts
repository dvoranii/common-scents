import styled from "styled-components";

export const CarouselWrapper = styled.div`
  padding: 0 60px;
  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* draggable */
  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  /* Arrows */
  .flickity-button {
    position: absolute;
    background: ${(props) => props.theme.colors.textLight};
    border: none;
    color: white;
    padding: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: ${(props) => props.theme.colors.primaryLight};

      .flickity-button-icon {
        fill: black;
      }
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
    }

    &:active {
      opacity: 0.6;
    }

    &:disabled {
      opacity: 0.3;
      cursor: auto;
      pointer-events: none;
    }
  }

  .flickity-button-icon {
    fill: currentColor;
  }

  .flickity-prev-next-button {
    top: 50%;
    transform: translateY(-100%);
  }

  .flickity-prev-next-button.previous {
    left: -52px;
  }

  .flickity-prev-next-button.next {
    right: -52px;
  }

  /* Tablet: Move buttons below carousel, flanking the dots */
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    .flickity-prev-next-button {
      top: 70%;
      bottom: 0;
      transform: translateY(100%);
      margin-top: ${(props) => props.theme.spacing.xl};
    }

    .flickity-prev-next-button.previous {
      left: 48%;
      transform: translateX(-100%) translateX(-80px);
    }

    .flickity-prev-next-button.next {
      right: 48%;
      left: auto;
      transform: translateX(100%) translateX(80px);
    }
  }

  /* Hide buttons on mobile */
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    .flickity-prev-next-button {
      display: none;
    }
  }

  /* Page dots */
  .flickity-page-dots {
    position: static;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: ${(props) => props.theme.spacing.xl};
    padding: 0;
    list-style: none;
  }

  .flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0;
    background: #aaaaaa;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: ${(props) => props.theme.colors.primaryLight};
    }

    &.is-selected {
      background: ${(props) => props.theme.colors.black};
      transform: scale(1.2);
    }
  }
`;

export const CarouselSlide = styled.div`
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing.xs};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 50%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 33.333%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 20%;
  }
`;
