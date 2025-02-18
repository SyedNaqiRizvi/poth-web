import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px;
    color: #0b4e59;
    width: 100vw;
    overflow-x: hidden;
    height: 100%;

    i {
        font-size: 12px;
        line-height: 12px;
    }
`;

export const LeftColumn = styled.div`
  flex: 1;
  background-color: #0b4e59; /* Left & Right Column Background Color */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CenterColumn = styled.div`
  flex: 4; 
  background-color: #ffffff; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
  flex-direction: column;
  padding-top: 2.5rem;

  @media (max-width: 480px) {
    padding: 2.4rem;
  }
  
  button {
    width: 150px;
    height: 48px;
    background: #0b4e59;
    color: #fff;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    outline: none;
    margin-top: 1.2rem;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  background-color: #0b4e59;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 14px;

    label {
        font-size: 14px;
        margin-bottom: 2px;
    }

    input {
        width: 100%;
        height: 24px;
        border-radius: 5px;
        border-width: 1px;
        padding: 6px;
    }

    input::-webkit-input-placeholder {
     color: black;
     opacity: 0.1; 
    }

    textarea {
        width: 100%;
        height: 450px;
        border-radius: 5px;
        border-width: 1px;
        padding: 6px;
    }

    textarea::-webkit-input-placeholder {
     color: black;
     opacity: 0.1; 
    }
`;