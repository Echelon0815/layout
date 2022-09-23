$('#owl-one').owlCarousel({
    // navSpeed:2/true, //未知
    autoplay:true,//會自動播放
    autoplayTimeout:3000,//每次執行自動播放需要多少時間，1000是一秒
    loop:true, //會從頭到尾循環
    margin:10, //每個item的margin-right，單位是px
    nav:true, //讓箭頭出現|消失
    dots:false,//讓點點出現|消失
    center:true, //讓被操縱的item置中
    mouseDrag:true, //可以用滑鼠操縱，預設是true
    // stagePadding:10, //用來讓stage(照片移動的軸)變寬，可以看到其他的圖，數字越大看越多
    item:3, //還沒搞懂
    autoWidth:true, //將item的寬設置給所有item
    })
    $('#owl-two').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    loop:true, 
    margin:0, 
    nav:false,
    dots:false,
    center:true,
    mouseDrag:true, 
    item:3, 
    })