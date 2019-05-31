import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0rem;
  transform: translate(-50%, -50%);

  & img {
    display: block;
    height: auto;
  }

  .bar-wrapper,
  .bar {
    position: relative;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }
  .bar {
    &:before,
    &:after {
      content: '';
      width: 50%;
      height: 15%;
      background: var(--primary);
      display: block;
      position: absolute;
      left: 0;
      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.2);
      border-radius: 20px;
    }
    &:before {
      left: 5%;
    }
    &:after {
      right: 5%;
      left: initial;
    }
  }
  .top-bar {
    &:before,
    &:after {
      top: 10%;
    }
  }
  .middle-bar {
    &:before,
    &:after {
      top: 50%;
      transform: translate(0, -50%);
      transition: 0.2s ease 0.1s;
    }
  }
  .bottom-bar {
    &:before,
    &:after {
      bottom: 10%;
    }
  }
  input {
    display: none;
    &:checked {
      & ~ .bar-wrapper {
        transform: rotate(90deg);
        transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        .middle-bar {
          &:before,
          &:after {
            width: 0%;
            border-radius: 20px !important;
          }
        }
        .top-bar {
          &:before {
            transform-origin: 0 100%;
            transform: rotate(45deg) translate(10%, -70%);
            left: 0;
          }
          &:after {
            transform-origin: 100% 100%;
            transform: rotate(-45deg) translate(-10%, -70%);
            right: 0;
          }
        }
        .bottom-bar {
          &:before {
            transform-origin: 0 0;
            transform: rotate(-45deg) translate(10%, 70%);
            left: 0;
          }
          &:after {
            transform-origin: 100% 0;
            transform: rotate(45deg) translate(-10%, 70%);
            right: 0;
          }
        }
      }
    }
  }
`;

const HamburgerToggler = ({ menuOpened, toggleChange }) => {
  return (
    <StyledLabel>
      <input type="checkbox" checked={menuOpened} onChange={toggleChange} />
      <div className="bar-wrapper">
        <div className="bar top-bar" />
        <div className="bar middle-bar" />
        <div className="bar bottom-bar" />
      </div>
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        width="20px"
        alt="Hamburguer Mobile Menu"
      />
    </StyledLabel>
  );
};

export default HamburgerToggler;
