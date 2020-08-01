<script>
	import ControlPanel from "./ControlPanel.svelte";
	import ShortcutsController from "./ShortcutsController.svelte";
	import SDK from "./SDK.svelte";
</script>

<style>
	:global(:root) {
	  --uiLightPrimary: #fff;
	  --uiLightSecondary: #eeeeee;
	  --uiLightStain: #f9f9f9;
	  --uiGrayPrimary: #5d5d5d;
	  --uiGraySecondary: #909090;

	  --font-size-xs: 0.75rem; /* 12px */
	  --font-size-sm: 0.875rem; /* 14px */
	  --font-size-base: 1rem; /* 16px */
	  --font-size-lg: 1.125rem; /* 18px */
	  --font-size-xl: 1.25rem; /* 20px */
	  --font-size-2xl: 1.5rem; /* 24px */
	  --font-size-3xl: 1.875rem; /* 30px */
	  --font-size-4xl: 2.25rem; /* 36px */
	  --font-size-5xl: 3rem; /* 48px */
	  --font-size-6xl: 4rem; /* 64px */
	}

	:global(.text-xs) {
	  font-size: var(--font-size-xs);
	}
	:global(.text-sm) {
	  font-size: var(--font-size-sm);
	}
	:global(.text-base) {
	  font-size: var(--font-size-base);
	}
	:global(.text-lg) {
	  font-size: var(--font-size-lg);
	}
	:global(.text-xl) {
	  font-size: var(--font-size-xl);
	}
	:global(.text-2xl) {
	  font-size: var(--font-size-2xl);
	}
	:global(.text-3xl) {
	  font-size: var(--font-size-3xl);
	}
	:global(.text-4xl) {
	  font-size: var(--font-size-4xl);
	}
	:global(.text-5xl) {
	  font-size: var(--font-size-5xl);
	}
	:global(.text-6xl) {
	  font-size: var(--font-size-6xl);
	}

	:global(.clearfix::after) {
	  content: "";
	  clear: both;
	  display: table;
	}
</style>

<ControlPanel />
<ShortcutsController />
<SDK />