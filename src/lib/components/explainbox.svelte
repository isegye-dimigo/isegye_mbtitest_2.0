<script lang="ts">
    export let explainData:{id:number, text:string,isButtonAppear:boolean, button1?: string, button2?:string};

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const sendClickEventToParent = (buttonNum:number)=>{
        dispatch("buttonClick", buttonNum);
    }
</script>

<div class="explain-box">
    <p id="explain-txt">{explainData.text}</p>
    {#if explainData.isButtonAppear}
    <div id="button-container"> 
        <button on:click={()=>{sendClickEventToParent(1)}}>{explainData.button1}</button>
        <button on:click={()=>{sendClickEventToParent(2)}}>{explainData.button2}</button>
    </div>
    {:else}
    <button on:click={()=>{sendClickEventToParent(0)}} id="next">다음</button>
    {/if}
</div>

<style>
    @import '$lib/style/testpage.css';
</style>