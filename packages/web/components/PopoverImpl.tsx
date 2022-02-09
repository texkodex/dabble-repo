import React from 'react';
import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverClose,
} from "./PopoverBase";

const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});
const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

const Label = styled('label', {
  fontSize: 13,
  color: violet.violet11,
  width: 75,
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 25,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: '19px',
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

export const PopoverImpl = ({cond=false}) => (
  <Popover>
    <PopoverTrigger asChild>
      <IconButton aria-label="Update dimensions"
			css={{ width: "$4", height: "$4", zIndex: 0 }} >
       { cond ?  <Cross2Icon />  : <MixerHorizontalIcon /> }
      </IconButton>
    </PopoverTrigger>
    <PopoverContent sideOffset={5} >
      <Flex css={{ flexDirection: 'column', gap: 10 }}>
        <Text bold css={{ marginBottom: 10 }}>
          Configuration 
        </Text>
        <Fieldset>
          <Label htmlFor="points">Points</Label>
          <Input id="points" defaultValue="1000" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="frequency">Frequency</Label>
          <Input id="frequency" defaultValue="60 fps" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="amplitude">Amplitude</Label>
          <Input id="amplitude" defaultValue="50 units" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="phase">Phase</Label>
          <Input id="phase" defaultValue="none" />
        </Fieldset>
      </Flex>
      <PopoverArrow />
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
    </PopoverContent>
  </Popover>
);
