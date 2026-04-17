document.addEventListener("DOMContentLoaded",()=>{
    
    /* =========================
       2. 스크롤 애니메이션 (위로 이동)
    ========================= */
    const btnTop = document.querySelector(".btn-top")
    if(btnTop){
        btnTop.addEventListener("click",()=>{
            window.scrollTo({top:0,behavior:"smooth"})
        })
    }


     /* =========================
       3. 스크롤 애니메이션 (타이틀 투명도 추가)
    ========================= */
    const detailTitle = document.querySelector(".detail-title")
    if(detailTitle){
        window.addEventListener("scroll",()=>{
            let windowHeight = window.innerHeight
            let scrollValue = window.scrollY
            console.log(scrollValue)
            let opacity = 1.1 - (scrollValue / windowHeight*3)
            opacity = Math.max(0.1, Math.min(1, opacity))
            detailTitle.style.opacity = opacity
        })
    }



    /* =========================
       4. 전체 메뉴 버튼
    ========================= */
    const btnMenu = document.querySelector(".btn-menu")
    const allMenu = document.querySelector(".all-menu")
    let statusMenu = false
    const btnImg = document.querySelector(".btn-img")
    btnMenu.addEventListener("click",()=>{
        if(statusMenu){
            // 메뉴 닫기
            allMenu.classList.remove("on")
            btnImg.setAttribute('src','./img/btn-menu.svg')
            statusMenu =false
        }else{
            // 메뉴 열기
            allMenu.classList.add("on")
            btnImg.setAttribute('src','./img/btn-close.svg')
            statusMenu =true 
        }
    })
    

     /* =========================
       4-1. 각 메뉴 이동 시 사라짐
    ========================= */
    // const profile = document.querySelector(".profile")
    // let profileTop = profile.offsetTop
    // window.addEventListener("resize",()=>{
    //     profileTop = profile.offsetTop
    // })
    window.addEventListener('scroll',()=>{
        // if(window.scrollY<profileTop){
            allMenu.classList.remove("on")
            btnImg.setAttribute('src','./img/btn-menu.svg')
            statusMenu =false
        // }
    })

})

