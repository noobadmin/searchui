import React from 'react';

import { NavLink as RouterLink, useRouteMatch } from 'react-router-dom';

import { Flex } from '.';

const NavLink = (props) => {
  const match = useRouteMatch({ path: props.to, exact: props.exact });

  return (
    <Flex
      as={RouterLink}
      sx={{
        alignItems: 'center',
        bg: !!match && 'background',
        color: !!match ? 'text' : 'inherit',
        fontSize: [0, 1],
        fontWeight: 600,
        textDecoration: 'none',
        textTransform: 'uppercase',
        px: [2, 3],
        ':hover': { color: 'text', bg: 'background' },
      }}
      {...props}
    />
  );
};

export default NavLink;