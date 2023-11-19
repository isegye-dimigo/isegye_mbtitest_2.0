<script lang="ts">
    import { goto } from "$app/navigation";
    import { mbtiString} from "../../../../store";
    import { onMount } from "svelte";
    let resultShareCode:string;
    onMount(
        async function storeMbtiAndLink() {
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
                setTimeout(()=>{goto(`/testPage/specialTest/${resultShareCode}`);},3000);
            }
            );
</script>

<h1>이세계에서 빠져나오는 중...</h1>
<div class="loading"><div></div><div></div></div>


<style>
    @import '../../../../lib/style/global.css';
    .loading {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .loading div {
        position: absolute;
        border: 4px solid #fff;
        opacity: 1;
        border-radius: 50%;
        animation: loading 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .loading div:nth-child(2) {
        animation-delay: -0.5s;
    }
    @keyframes loading {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
        }
        4.9% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
        }
        5% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
</style>