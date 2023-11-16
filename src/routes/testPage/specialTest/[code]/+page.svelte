<script lang="ts">
    import { onMount } from 'svelte';
    import {mbtiString} from '../../../../store.js';
    export let data;
    const curIdentifyCode = data.code;
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
        }
    );
</script>
<h1>{$mbtiString}</h1>