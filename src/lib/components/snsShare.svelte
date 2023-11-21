<script lang="ts">
    export let identifyCode:string
    const snsShareBtn = async () =>{
        try{
            const shareData = {
                title: "이세계 성격 테스트",
                text: "내가 이세계에 간다면?",
                url: `localhost:5173/testPage/specialTest/${identifyCode}`,
            };
            navigator.share(shareData);
        }catch(err){
            console.log('asd');
        }
    }
</script>

<button on:click={()=>{snsShareBtn()}}>sns공유</button>