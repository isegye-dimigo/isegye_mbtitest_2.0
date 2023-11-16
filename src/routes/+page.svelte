<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    let visitorNum = 0;
    onMount(
        async function getVisitorNum(){
            const response = await fetch("/api/visitorCnt",{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await response.json();
            visitorNum = data.count
        }
    )
</script>

<h1 id="main-text">이세계 성격테스트</h1>
<p>내가 이세계에 간다면?</p>
<img id="main-img" src="/img/main-picture.png">
<button on:click={()=>{goto('/testPage')}}>
    <h1 id="main-text">테스트 시작하기</h1> 
    <p>{visitorNum}명이 이세계에 다녀왔어요</p>
</button>
<p id="footer">@isegae</p>

<style>
    @font-face {
        font-family: 'PyeongChangPeace-Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    h1#main-text{
        font-family: 'PyeongChangPeace-Bold';
        font-size: 2rem;
    }
    button{
        width: 80vw;
        font-size: 1.2rem;
        padding: 0.3rem;
    }
    button>h1,button>p{
        color: black;
        background-color: white;
    }
    p#footer{
        position: absolute;
        bottom: 10px;
        font-size: 1.3rem;
    }

    img#main-img{
        width: 20%;
    }

    @media (max-width:900px){
        img#main-img{
            width: 50%;
        }
    }
</style>