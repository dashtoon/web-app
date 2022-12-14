import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

interface IProps {
    color: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    title: string;
    type: 'mail' | 'linkedIn' | 'none';
    onClick: React.MouseEventHandler<HTMLButtonElement> 
}


const CustomizedButton = (props: IProps) => {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: props.color,
        backgroundColor: props.backgroundColor,
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        '&:hover': {
          backgroundColor: props.hoverBackgroundColor,
        },
      }));
  return (
    <>
      <ColorButton onClick={e  => props.onClick(e)}  startIcon={props.type=== 'mail' ? <EmailIcon/> : props.type === 'linkedIn' ? <LinkedInIcon/> : ''} variant="contained">{props.title}</ColorButton>
      </>
  );
}

export default CustomizedButton;