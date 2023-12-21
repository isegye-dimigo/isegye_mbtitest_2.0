<div id="img-container">
    <img id="background-img" src="/img/scenarioImg/0.png" alt="" srcset="">
    <img id="truck" src="/img/scenarioImg/truck.png" alt="">
    <img id="child" src="/img/scenarioImg/child.png" alt="">
</div>  

<style>
    img#child{
        position: relative;
        left: 10vw;
        animation: goChild 3s linear forwards;
        width: 15vw;
    }
    img#background-img{
        margin-top: 10%;
        width: 100vw;
    }
    img#truck{
        position: relative;
        top: -35%;
        left:100vw ;
        width: 30vw;
        animation: goTruck 1s 2s linear forwards;
    }
    @keyframes goTruck{
        from{
            transform: translateX(0);
        }
        to{
            transform: translateX(-50vw);
        }
    }
    @keyframes goChild{
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(-50vh);
        }
    }
</style>