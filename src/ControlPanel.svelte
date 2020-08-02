<script>
	import { onMount, onDestroy } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { slide, fade } from 'svelte/transition';
	import { POSITION, config } from './store.js';
	import Controls from './Controls.svelte';

	const handleToggle = () => {
	  $config.isShowing = !$config.isShowing;
	};

	const getAutoHide = () =>
	  setTimeout(() => {
	    if (isMounted) {
	      $config.isShowing = false;
	    }
	  }, 2000);

	let autoHide;
	let isMounted;

	onMount(() => {
	  isMounted = true;
	  autoHide = getAutoHide();
	});

	onDestroy(() => {
	  autoHide && clearTimeout(autoHide);
	  isMounted = false;
	});

	const handleMouseOver = () => {
	  autoHide && clearTimeout(autoHide);
	  $config.isShowing = true;
	};

	const handleMouseOut = () => {
	  autoHide = getAutoHide();
	};
</script>

<div 
class="control-panel" 
class:fixed-top-right={$config.position === POSITION.TOP_RIGHT}
class:fixed-top-left={$config.position === POSITION.TOP_LEFT}
class:fixed-bottom-right={$config.position === POSITION.BOTTOM_RIGHT}
class:fixed-bottom-left={$config.position === POSITION.BOTTOM_LEFT}
on:mouseover={handleMouseOver}
on:mouseout={handleMouseOut}
>
	<div on:click={handleToggle} class="header text-base clearfix">
		<div class="left">{'Panel'}</div>
		{#if $config.isShowing}
		<div transition:fade={{duration: 200}} class="right">
			<button class="button" on:click|stopPropagation={handleToggle}>{'X'}</button>
		</div>
		{/if}
	</div>
	
		{#if $config.isShowing}
		<div transition:slide={{duration: 300, ease: quintOut}} class="container text-sm">
			{#if $config.controls && $config.controls.length > 0}
			<div class="controls"><Controls /></div>
			{:else}
			<div class="empty-config">{'Please setup the config using window.cipan_SetControls( ... )'}</div>

			{/if}
		</div>
	{/if}
</div>

<style>
	.control-panel {
	  background: var(--uiLightPrimary);
	  color: var(--uiGrayPrimary);
	  border: 1px solid var(--uiLightSecondary);
	  border-radius: 0.5em;
	  font-family: 'Poppins', sans-serif;
	}

	.fixed-top-right {
	  width: 250px;
	  position: fixed;
	  top: 0;
	  right: 5em;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}

	.fixed-top-left {
	  width: 250px;
	  position: fixed;
	  top: 0;
	  left: 5em;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}

	.fixed-bottom-right {
	  width: 250px;
	  position: fixed;
	  bottom: 0;
	  right: 5em;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}
	.fixed-bottom-left {
	  width: 250px;
	  position: fixed;
	  bottom: 0;
	  left: 5em;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	.header {
	  color: var(--uiGraySecondary);
	  padding: 0.5rem 1rem;
	  border-bottom: 1px solid var(--uiLightSecondary);
	  font-weight: 700;
	  position: relative;
	  cursor: pointer;
	  letter-spacing: 0.125em;
	}
	.left {
	  float: left;
	  left: 0;
	}

	.right {
	  float: right;
	  right: 0;
	}

	.button {
	  background-color: var(--uiLightPrimary);
	  color: var(--uiGraySecondary);
	  border: none;
	  font-family: 'Poppins', sans-serif;
	  font-weight: 700;
	  cursor: pointer;
	  transform: scaleX(1.25);
	}

	.container {
	  width: 100%;
	  background-color: var(--uiLightStain);
	}

	.controls {
	  padding: 0.5rem 1rem;
	}

	.empty-config {
	  padding: 1rem;
	  text-align: center;
	}
</style>