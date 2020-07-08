import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const MuiTextField = styled(TextField)`
  & > .MuiFormLabel-root {
    color: #fff;

    &.Mui-focused {
      color: ${(props) => props.theme.colors.yellow};
    }
  }

  & > .MuiInputBase-root {
    color: #fff;

    .MuiOutlinedInput-notchedOutline {
      border-color: #fff;
    }

    &.MuiOutlinedInput-root:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
      }
    }

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) => props.theme.colors.yellow} !important;
      }
    }
  }
`;

export const ErrorContainer = styled.div`
  min-height: 20px;
  margin-top: 4px;
`;

export const Error = styled.div`
  color: ${(props) => props.theme.colors.yellow};
  font-size: 14px;
`;
