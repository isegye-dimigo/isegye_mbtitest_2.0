<script lang="ts">
    import { goto } from "$app/navigation";
    import SnsShare from "$lib/components/snsShare.svelte";
    import { mbtiString } from "../../../../store";
    import { onMount } from "svelte";
    let resultShareCode:string;
    onMount(
        async function getVisitorNum() {
            if($mbtiString.length === 4){
                const response = await fetch("/api/saveInfo", {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body:JSON.stringify({
                                mbti: $mbtiString
                            }),
                            credentials: 'include'
                        });
                        const data= await response.json();
                        resultShareCode = data.code;
                }
            }
            );
    const copyShareLink = ()=>{
        navigator.clipboard.writeText(`localhost:5173/testPage/specialTest/${resultShareCode}`);
        alert("공유 링크가 클립보드에 복사되었습니다!");
    }
</script>

<h1>result page</h1>
<h1>{$mbtiString}</h1>
<button on:click={()=>{goto('/')}}>다시하기</button>
<button on:click={()=>{copyShareLink();}}>링크복사</button>
<SnsShare/>


<style>
    @import '../../../../lib/style/global.css';
</style>