import { writable } from 'svelte/store';

export const POSITION = {
  TOP_RIGHT: 'top-right',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_LEFT: 'bottom-left',
};

export const CONTROL_TYPE = {
  CHECKBOX: 'CHECKBOX',
  DROPDOWN: 'DROPDOWN',
};

const defaultConfig = {
  position: POSITION.BOTTOM_RIGHT,
  isShowing: true,
  controls: [
    {
      type: CONTROL_TYPE.CHECKBOX,
      label: 'Demo',
      onChange: (value, { index, state, dispatcher }) => {
        dispatcher.update((n) => ({
          ...n,
          controls: state.controls.map((control, i) =>
            i === index ? { ...control, value } : control
          ),
        }));
      },
      value: true,
    },
    {
      type: CONTROL_TYPE.DROPDOWN,
      label: 'Position',
      onChange: (value, { index, dispatcher }) => {
        dispatcher.update((n) => ({
          ...n,
          position: value,
        }));
      },
      options: [
        {
          label: 'top-right',
          value: POSITION.TOP_RIGHT,
        },
        {
          label: 'top-left',
          value: POSITION.TOP_LEFT,
        },
        {
          label: 'bottom-right',
          value: POSITION.BOTTOM_RIGHT,
        },
        {
          label: 'bottom-left',
          value: POSITION.BOTTOM_LEFT,
        },
      ],
      value: POSITION.BOTTOM_RIGHT,
    },
  ],
};

export const config = writable(null);

export const setDefault = () =>
  config.update((n) => {
    return {
      ...defaultConfig,
      shortcuts: [
        {
          name: 'togglePane',
          action: () => {
            config.update((m) => ({ ...m, isShowing: !m.isShowing }));
          },
          keys: ['KeyP'],
        },
      ],
    };
  });

setDefault();
