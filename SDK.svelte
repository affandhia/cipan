<script>
  import { onMount, onDestroy } from 'svelte';
  import { config, setDefault } from './store.js';

  const validateShortcuts = (value) => {
    const shortcutsMapping = {};
    const isValid = value.every((item, index) => {
      if (typeof item === 'object' && item instanceof Array) return false;

      item.keys.forEach((i) => {
        shortcutsMapping[i] = shortcutsMapping[i]
          ? [...shortcutsMapping[i], index]
          : [index];
      });

      const name = item.name && typeof item.name === 'string';
      const action = item.action && typeof item.action === 'function';
      const keys =
        item.keys && typeof item.keys === 'object' && item.keys instanceof Array;

      if (!name)
        throw new Error(
          `"name" at index ${index} is invalid. The invalid value is ${item.name}`
        );
      if (!action)
        throw new Error(
          `"action" at index ${index} is invalid. The invalid value is ${
            item.action
          }`
        );
      if (!keys)
        throw new Error(
          `"keys" at index ${index} is invalid. The invalid value is ${item.keys}`
        );

      return (
        item.name &&
        typeof item.name === 'string' &&
        item.action &&
        typeof item.action === 'function' &&
        item.keys &&
        typeof item.keys === 'object' &&
        item.keys instanceof Array
      );
    });
    // TODO: shortcutsMapping warning

    if (!isValid) throw new Error('Invalid data');
    return value;
  };

  const validateControls = (value) => {
    return value;
  };

  onMount(() => {
    window.cipan_SetShortcuts = (value) => {
      const handleAssign = (value) => {
        try {
          $config.controls = validateShortcuts(value);
        } catch (e) {
          console.error(`[ERROR 0001] Failed to set controls: ${e}`);
        }
      };

      if (!value) {
        console.error('[ERROR 0002] Shortcuts value cannot be empty or null');
      } else if (typeof value === 'object' && value instanceof Array) {
        handleAssign(value);
      } else if (typeof value === 'function') {
        handleAssign(value($config, config));
      } else if (typeof value === 'string' && value === 'reset') {
        setDefault();
      } else {
        console.error(
          '[ERROR 0003] Invalid value. Please pass array or function with at most two arguments. Pass "reset" to do factory reset.'
        );
      }
    };

    window.cipan_SetControls = (value) => {
      const handleAssign = (value) => {
        try {
          $config.controls = validateControls(value);
        } catch (e) {
          console.error(`[ERROR 0001] Failed to set shortcuts: ${e}`);
        }
      };

      if (!value) {
        console.error('[ERROR 0002] Controls value cannot be empty or null');
      } else if (typeof value === 'object' && value instanceof Array) {
        handleAssign(value);
      } else if (typeof value === 'function') {
        handleAssign(value($config, config));
      } else {
        console.error(
          '[ERROR 0003] Invalid value. Please pass array or function with at most two arguments.'
        );
      }
    };
  });
</script>