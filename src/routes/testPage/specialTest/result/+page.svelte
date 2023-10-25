<script>
    import { goto } from "$app/navigation";
    import SnsShare from "$lib/components/snsShare.svelte";
    import { mbtiString } from "../../../../store";
</script>

<h1>result page</h1>
<h1>{$mbtiString}</h1>
<button on:click={()=>{goto('/')}}>다시하기</button>
<SnsShare/>


<style>
    @import '../../../../lib/style/global.css';
</style>