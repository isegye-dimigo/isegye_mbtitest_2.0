<script lang="ts">
    export let explainData:{text?:string, isButtonAppear:boolean, button1?: string, button2?:string, button3?:string, button4?: string};

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const sendClickEventToParent = (buttonNum:number)=>{
        dispatch("buttonClick", buttonNum);
    }
</script>

<div class="explain-box">
    {#if explainData.isButtonAppear}
    <div class="button-container">
        <button class="selectBtn" on:click={()=>{sendClickEventToParent(1)}}>{explainData.button1}</button>
        <button class="selectBtn" on:click={()=>{sendClickEventToParent(2)}}>{explainData.button2}</button>
        <button class="selectBtn" on:click={()=>{sendClickEventToParent(3)}}>{explainData.button3}</button>
        <button class="selectBtn" on:click={()=>{sendClickEventToParent(4)}}>{explainData.button4}</button>
    </div>
    {:else}
    <p id="explain-txt">{explainData.text}</p>
    <div id="next" on:click={()=>{sendClickEventToParent(0)}}></div>
    {/if}
</div>

<style>
    @import '$lib/style/explainbox.css';
</style>