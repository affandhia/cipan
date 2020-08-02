<script>
  import { quintOut } from 'svelte/easing';
  import { slide, fade } from 'svelte/transition';
  import { CONTROL_TYPE, config } from './store.js';
  import Controls from './Controls.svelte';

  const handleCheckbox = (
    event,
    { label, type, onChange, value, index, options }
  ) => {
    onChange &&
      onChange(value, {
        index,
        state: $config,
        dispatcher: config,
        prevValue: value,
        options,
      });
  };
  //on:click|preventDefault={handleCheckbox({ label, type, onChange, value, index })} on:keydown|preventDefault={handleCheckbox({ label, type, onChange, value, index })} on:change|preventDefault={handleCheckbox({ label, type, onChange, value, index })}
</script>

{#each $config.controls as { label, type, onChange, value, options },  index}
  {#if type === CONTROL_TYPE.CHECKBOX}
  <label class="label clearfix">
    {label}
    <input 
    class="right checkbox" 
    type="checkbox"  
    bind:checked={$config.controls[index].value} 
    on:change={(e) => handleCheckbox(e, { label, type, onChange, prevValue: value, value: e.target.checked, index })}
     />
  </label>
  {/if}

  {#if type === CONTROL_TYPE.DROPDOWN}
  <label class="label clearfix">
    {label}
    <!-- <input on:click={(e) => handleCheckbox(e, { label, type, onChange, prevValue: value, value: e.target.checked, index })} class="checkbox" type="checkbox"  bind:checked={$config.controls[index].value} /> -->
    <select 
    class="right"
    bind:value={$config.position} 
    >
    {#each options as option}
      <option key={option.value} value={option.value}>{option.label}</option>
      {/each}
    </select>
  </label>
  {/if}
{/each}

<style>
  .label {
    cursor: pointer;
  }

  .right {
    float: right;
  }

  .checkbox {
    cursor: pointer;
  }
</style>