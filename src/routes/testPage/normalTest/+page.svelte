<script lang="ts">
    import { goto } from "$app/navigation";
    import Explainbox from "$lib/components/explainbox.svelte";
    import { scenario } from "$lib/scenario/normal";
    let buttonValue = -1;
    let questionIdx = 0;
    const handleButtonEvent = (event:CustomEvent) => {
        buttonValue = event.detail;
        switch(buttonValue){
            case 0:
            case 2:
                goto('/testPage/specialTest');
                break;
            case 1:
                questionIdx++;
        }
    }
</script>

<div>일반인</div>

<Explainbox explainData = {scenario[questionIdx]} on:buttonClick = {(event)=>{handleButtonEvent(event)}}/>