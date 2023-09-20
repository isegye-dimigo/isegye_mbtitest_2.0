<script lang="ts">
import { goto } from "$app/navigation";
    import Explainbox from "$lib/components/explainbox.svelte";
    let buttonValue = -1;
    const scenario = [
        {
            id:1,
            text:'test1',
            isButtonAppear:false,
        },
        {
            id:2,
            text:'test2',
            isButtonAppear: true,
            button1: '11',
            button2: '22',
        },
    ]

    const handleButtonEvent = (event)=>{
        console.log(event.detail);
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