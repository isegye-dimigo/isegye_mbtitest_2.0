<script lang="ts">
    import { goto } from "$app/navigation";
    import { mbtiData } from "../../../store.js";
    import Explainbox2 from "$lib/components/explainbox2.svelte";
    import { scenario } from "$lib/scenario/special";
    let boxIdx = 0;
    let questionNum = 1;

    const getMbtiType = (questionNum:number):number => {
        switch(questionNum){
            case 1://e
            case 2:
            case 3:
                return 0;
            case 4://n
            case 5:
            case 6:
                return 1;
            case 7://t
            case 8:
            case 9:
                return 2;
            case 10://j
            case 11:
            case 12:
                return 3;
            default:
                return -1;
        }
    }
    const handleButtonEvent = (event) =>{
        switch(event.detail){
            case 0:
                break;
            case 1:
                mbtiData[getMbtiType(questionNum)]+=2;
                break;
            case 2:
                mbtiData[getMbtiType(questionNum)]+=1;
                break;
            case 3:
                mbtiData[getMbtiType(questionNum)]-=1;
                break;
            case 4:
                mbtiData[getMbtiType(questionNum)]-=2;
                break;
        }
        boxIdx++;
        if(event.detail != 0 && questionNum !=12){
            questionNum++;
        }
        if(questionNum == 12){
            console.log(mbtiData);
            goto('/testPage/specialTest/result');
        }
    }
</script>
<div>
    <h1>component zone</h1>
    <p style="text-align: center;">{questionNum}</p>
</div>
{#if boxIdx%2 == 1}
<Explainbox2 explainData = {scenario[boxIdx]} on:buttonClick = {(event)=>{handleButtonEvent(event)}}/>
{:else}
<Explainbox2 explainData = {scenario[boxIdx]} on:buttonClick = {(event)=>{handleButtonEvent(event)}}/>
{/if}