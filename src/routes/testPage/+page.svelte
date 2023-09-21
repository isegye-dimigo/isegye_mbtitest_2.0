<script lang="ts">
    import { goto } from "$app/navigation";
    import Explainbox from "$lib/components/explainbox.svelte";
    import { scenario } from "$lib/scenario/identify";
    let buttonValue = -1;
    const handleButtonEvent = (event)=>{
        console.log(event);
        buttonValue = event.detail;
        if(buttonValue === 1){
            goto('/testPage/specialTest');
        }
        else if(buttonValue === 2){
            goto('/testPage/normalTest');
        }
    }
</script>

<p>시나리오 화면1</p>
{#if buttonValue === -1}
<Explainbox explainData = {scenario[0]} on:buttonClick = {(event)=>{handleButtonEvent(event)}}/>
{:else if buttonValue === 0}
<Explainbox explainData = {scenario[1]} on:buttonClick = {(event)=>{handleButtonEvent(event)}}/>
{/if}