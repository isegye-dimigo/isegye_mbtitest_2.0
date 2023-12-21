<script lang="ts">
    import { goto } from "$app/navigation";
    import Explainbox from "$lib/components/explainbox.svelte";
    import GoIsegye from "$lib/components/goIsegye.svelte";
    import { scenario } from "$lib/scenario/identify";
    let tutorial = -2;
    let buttonValue = -1;
    let isGoisegyeAppeared = false;
    const handleButtonEvent = (event:CustomEvent)=>{
        buttonValue = event.detail;
        if(buttonValue === 1){
            goto('/testPage/specialTest');
        }
        else if(buttonValue === 2){
            goto('/testPage/normalTest');
        }
        tutorial++
        if(tutorial === 0){
            setTimeout(()=>{isGoisegyeAppeared = true;},3500);
        }
    }
</script>

{#if tutorial === -2}
    <Explainbox explainData={scenario[0]} on:buttonClick={(event) => { handleButtonEvent(event) }} />
{:else if tutorial === -1}
    <Explainbox explainData={scenario[1]} on:buttonClick={(event) => { handleButtonEvent(event) }} />
{:else if tutorial === 0 || isGoisegyeAppeared === true}
    <GoIsegye/>
{/if}
{#if isGoisegyeAppeared}
    <Explainbox explainData={scenario[2]} on:buttonClick={(event) => { handleButtonEvent(event) }} />
{/if}