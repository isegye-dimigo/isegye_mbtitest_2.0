<script lang="ts">
    export let identifyCode:string
    const snsShareBtn = async () =>{
        try{
            const shareData = {
                title: "이세계 성격 테스트",
                text: "내가 이세계에 간다면?",
                url: 'https://example.com',//`localhost:5173/testPage/specialTest/${identifyCode}` ->https로 호스팅한 이후에 바꿔야됨 로컬호스트 x
            };
            navigator.share(shareData);
        }catch(err){
            alert('공유에 실패했습니다.')
        }
    }
</script>

<button on:click={()=>{snsShareBtn()}}>sns공유</button>

<style>
    button{
        width: 4vw;
        height: 4vw;
        border-radius: 1rem;
        background-color: black;
        color: white;
        margin: 1rem;
    }
</style>