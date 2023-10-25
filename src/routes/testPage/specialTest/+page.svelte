<script lang="ts">
    import { goto } from "$app/navigation";
    import { mbtiData,mbtiString } from "../../../store.js";
    import Explainbox2 from "$lib/components/explainbox2.svelte";
    import { scenario } from "$lib/scenario/special";
    let boxIdx = 0;
    let questionNum = 1;

    const culMbtiString = (mbtiData:Array<number>) => {
        let tempMbtiString = '';
        if(mbtiData[0]>0){
            tempMbtiString +='e';
        }else{
            tempMbtiString +='i';
        }
        if(mbtiData[1]>0){
            tempMbtiString +='n';
        }else{
            tempMbtiString +='s';
        }
        if(mbtiData[2]>0){
            tempMbtiString +='t';
        }else{
            tempMbtiString +='f';
        }
        if(mbtiData[3]>0){
            tempMbtiString += 'j';
        }else{
            tempMbtiString += 'p';
        }
        console.log(tempMbtiString);
        mbtiString.set(tempMbtiString);
    }

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

    const handleButtonEvent = (event:CustomEvent) =>{
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
        if(boxIdx<23){
            boxIdx++;
        }else{
            console.log(mbtiData);
            culMbtiString(mbtiData);
            goto('/testPage/specialTest/result');
        }
        if(event.detail != 0 && questionNum < 12){
            questionNum++;
        }
    }
</script>

<div class:fadeIn={boxIdx == 0 ? 'fadeIn' : ''}>
    <h1 class:fadeIn={boxIdx == 0 ? 'fadeIn' : ''}>component zone</h1>
    <p class:fadeIn={boxIdx == 0 ? 'fadeIn' : ''}>{questionNum}</p>
</div>
{#if boxIdx%2 == 1}
<Explainbox2 explainData = {scenario[boxIdx]} on:buttonClick = {(event)=>{handleButtonEvent(event)}}/>
{:else if boxIdx%2 == 0 && boxIdx<25}
<Explainbox2 explainData = {scenario[boxIdx]} on:buttonClick = {(event)=>{handleButtonEvent(event)}}/>
{/if}

<style>
    @keyframes convertEffect{
        from{
            filter: blur(1rem);
        }
        to{
            filter: blur(0);
        }
    }
    .fadeIn{
        animation: convertEffect 2s;
        background-color: aqua;
    }
</style>