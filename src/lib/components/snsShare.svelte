

<button on:click={()=>{snsShareBtn()}}>SNS공유</button>

<script lang="ts">

    const snsShareBtn = async () =>{
        try{
            const shareData = {
                title: "이세계 성격 테스트",
                text: "내가 이세계에 간다면?",
                url: "https://en.wikipedia.org/wiki/A",
            };
            navigator.share(shareData);
        }catch(err){
            console.log('asd');
        }
    }
</script>