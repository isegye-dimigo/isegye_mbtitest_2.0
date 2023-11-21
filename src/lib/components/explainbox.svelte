<script lang="ts">
    export let explainData:{text:string,isButtonAppear:boolean, button1?: string, button2?:string};

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const sendClickEventToParent = (buttonNum:number)=>{
        dispatch("buttonClick", buttonNum);
    }
</script>

<div class="explain-box">
    <p id="explain-txt">{explainData.text}</p>
    {#if explainData.isButtonAppear}
    <div class="button-container">
        <button class="selectBtn" on:click={()=>{sendClickEventToParent(1)}}>{explainData.button1}</button>
        <button class="selectBtn" on:click={()=>{sendClickEventToParent(2)}}>{explainData.button2}</button>
    </div>
    {:else}
    <div on:click={()=>{sendClickEventToParent(0)}} id="next"></div>
    {/if}
</div>

<style>
    @import '$lib/style/explainbox.css';
</style>