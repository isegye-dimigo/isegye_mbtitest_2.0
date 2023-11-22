<script lang="ts">
    import {mbtiString,mbtiCharacters} from '../../../../store.js';
    import { goto } from '$app/navigation';
    import SnsShare from '$lib/components/snsShare.svelte';
    import { onMount } from 'svelte';
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
            const data= await response.json();
            mbtiString.set(data.mbti);
            characterName = mbtiCharacters[data.mbti].name;
        }
    );
    const copyShareLink = ()=>{
        navigator.clipboard.writeText(`localhost:5173/testPage/specialTest/${curIdentifyCode}`);
        alert("공유 링크가 클립보드에 복사되었습니다!");
    }
</script>

{#if characterName != 'loading...'}
<h1>당신이 이세계에 간다면?</h1>
<h1>{characterName}</h1>
<div id="button-container">
    <button on:click={()=>{goto('/')}}>다시하기</button>
    <button on:click={()=>{copyShareLink();}}>링크복사</button>
    <SnsShare identifyCode = {curIdentifyCode}/>
</div>
{:else}
<p>데이터 불러오는중..</p>
{/if}

<style>
    div#button-container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>