<script lang="ts">
    import {mbtiString,mbtiCharacters} from '../../../../store.js';
    import { goto } from '$app/navigation';
    import SnsShare from '$lib/components/snsShare.svelte';
    import { onMount } from 'svelte';
    import { characterArr } from '../../../../store.js';
    export let data;
    const curIdentifyCode = data.code;
    let characterName:string='loading...';
    onMount(
        async function getResultFromCode() {
            const response = await fetch("/api/getMbtiString",{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify({
                    code: curIdentifyCode
                }),
                credentials: 'include'
            });
            const fetchdata= await response.json();
            mbtiString.set(fetchdata.mbti);
            characterName = mbtiCharacters[fetchdata.mbti].name;
        }
    );
    const copyShareLink = ()=>{
        navigator.clipboard.writeText(`localhost:5173/testPage/specialTest/${curIdentifyCode}`);
        alert("공유 링크가 클립보드에 복사되었습니다!");
    }
</script>
{#if characterName != 'loading...'}
<h1 id="title">내가 이세계에 간다면?</h1>
<div class="container">
    <h1>{characterName}</h1>
    <h3>{mbtiCharacters[$mbtiString].mbtiFeature[0]}</h3>
    <img src="{mbtiCharacters[$mbtiString].imageRoute}" alt="">
    <div class="container">
        <ul>
            {#each mbtiCharacters[$mbtiString].mbtiFeature as feature}
            {#if feature[0] !== '\"'}
            <li>{feature}</li>
            {/if}
            {/each}
        </ul>
    </div>
    <div id="relationship">
        <p>잘 맞는 캐릭터:{characterArr[mbtiCharacters[$mbtiString].relationship[0]]}</p>
        <p>안 맞는 캐릭터:{characterArr[mbtiCharacters[$mbtiString].relationship[1]]}</p>
    </div>
</div>
<div id="button-container">
    <button on:click={()=>{goto('/')}}>다시하기</button>
    <button on:click={()=>{copyShareLink();}}>링크복사</button>
    <SnsShare identifyCode = {curIdentifyCode}/>
</div>
{:else}
<p>데이터 불러오는중..</p>
{/if}


<style>
    :global(.main-container){
        overflow: auto;
    }

    h1#title{
        margin-top: 10vh;
    }

    div#button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: white;
    }
    div.container{
        width: 80vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }
    img{
        width: 30vw;
    }
    button{
        width: 4vw;
        height: 4vw;
        border-radius: 1rem;
        background-color: black;
        color: white;
        margin: 1rem;
    }
</style>