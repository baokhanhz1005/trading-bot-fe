import React from 'react'
import { iconMap } from './constant';
import styled from 'styled-components';
import { SvgIcon } from '@material-ui/core';
// ...

type TIcon = {
  type: string,
  size?: string,
  color?: string,
  style?: React.CSSProperties,
};

const StyledSvgIcon = styled(SvgIcon)<TIcon>`
  && {
    color: ${props => props.color};
    font-size: ${props => props.size};
    transform: scale(2);
  }
`;

export const Icon: React.FC<TIcon> = (props) => {
  const { type } = props;
  if (!iconMap[type]) {
    return null; // hoặc có thể hiển thị một biểu tượng mặc định
  };

  const IconComponent = iconMap[type];

  return <StyledSvgIcon as={IconComponent} {...props} />;
};

Icon.defaultProps = {
  color: 'inherit',
  size: 'inherit',
}