import React from 'react';

import styled from 'styled-components';

import { Box, Card, Heading, Link, Text } from '../Primitives';

function Detail(props) {
  return (
    <S.Detail as="li">
      <S.Text fontWeight="bold">{props.caption}</S.Text>
      <S.Text>{props.children}</S.Text>
    </S.Detail>
  );
}

function DocumentMetadata({ data }) {
  return (
    <Box>
      <Card p={2}>
        <Heading>Description</Heading>
        <Text as="p">{data.summary}</Text>
      </Card>
      <Box
        as="ul"
        color="inherit"
        pl={0}
        sx={{ 'li:last-child > div': { pb: [2, 2, 3, 4] } }}
      >
        <Detail caption="Citation">
          <Link display="block" href={'http://doi.org/' + data.doi} blank>
            {data.citation}
          </Link>
        </Detail>
        <Detail caption="Keywords">{data.keywords.join(', ')}</Detail>
        <Detail caption="Type">{data.type}</Detail>
        <Detail caption="Author">{data.members[0]?.person.fullName}</Detail>
        <Detail caption="Other">Stuff</Detail>
      </Box>
    </Box>
  );
}

export default DocumentMetadata;

const S = {};
S.Box = styled(Box).attrs({
  sx: {
    display: 'grid',
    columnGap: [4],
    gridTemplateColumns: '1fr 256px ',
    gridTemplateRows: 'min-content 1fr',
  },
})``;
S.Card = styled(Card).attrs({
  marginBottom: 0,
})``;
S.Detail = styled(Box).attrs({
  sx: {
    display: 'grid',
    gridTemplateColumns: '25% 1fr',
    gridGap: '1px',
    bg: 'background',
    p: 0,
    m: 0,
    my: '1px',
  },
})``;
S.Text = styled(Text).attrs({
  bg: 'middleground',
  px: [1, 2, 3, 4],
  py: [2],
})``;