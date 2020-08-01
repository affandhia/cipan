<script>
  import { onMount, onDestroy } from "svelte";
  import { config } from "./store.js";

  const handleKeypress = e => {
    if (!$config.shortcuts) throw new Error("No Shortcuts List");
    $config.shortcuts.map(shortcut => {
      shortcut.keys.map(keyCode => {
        if (e.code === keyCode) {
          shortcut.action($config);
        }
      });
    });
  };

  onMount(() => {
    window.addEventListener("keypress", handleKeypress);
  });

  onDestroy(() => {
    window.removeEventListener("keypress", handleKeypress);
  });
</script>