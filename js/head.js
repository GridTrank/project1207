

class Head extends HTMLElement {
    constructor() {
        super()
        let h1 = ` 
        <div class="head_top f_row j_c_b">
        <div class="head_left f_row">
            <img src="./Elements/top-icon1.png" class="h_l_icon" />
            <span class="h_l_txt">Become Our Vendor / Vendor Login</span>
        </div>
        <div class="head_right f_row">
            <img src="./Elements/top-icon2.png" class="h_r_icon" />
            <span class="head_s1">Become Our Member</span>
            <span class="head_s2">/</span>
            <span class="head_s1">Member Login</span>
            <img src="./Elements/user-icon.png" class="user_icon" />
        </div>
    </div>
    <div class="head_logo_wrap f_row">
        <img src="./Elements/logo.png" class="logo" />
        <div class="label_list f_row"></div>
    </div>
    <div class="nav_wrap f_row">
            <div class="carousel-control-prev arrow_wrap"  data-bs-target="#carouselExample" data-bs-slide="prev">
                <img src="./Elements/nav-left.png" class="arrow">
            </div>
            
            <div class="nav_list_scroll">
                <div class="nav_list f_row carousel slide" id="carouselExample" >
                   
                </div>
            </div>
            <div class="carousel-control-next arrow_wrap"  data-bs-target="#carouselExample" data-bs-slide="next">
                <img src="./Elements/nav-right.png" class="arrow">
            </div>
        </div>
        `
        $('#head').append(h1)
        // 头部label
        let headLabelList = [
            {
                label: 'Banquet Price List',
                child: [
                    { c_label: 'child', icon: './Elements/user-icon.png', url: '1212' },
                    { c_label: 'child', icon: '', url: '1212', },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                ]
            },
            {
                label: 'Wedding Events & Contests',
                child: [
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                ]
            },
            {
                label: 'Promotion',
                child: [
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                ]
            },
            {
                label: 'Trending Wedding Ideas',
                child: [
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                ]
            },
            {
                label: 'Vendors',
                child: [
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                    { c_label: 'child' },
                ]
            },

        ]
        let labelHtml = ''
        for (var i = 0; i < headLabelList.length; i++) {
            labelHtml += `<div class= "dropdown_wrap" data-index=${i}>
                            <div data-bs-toggle="dropdown" class="label_item"> ${headLabelList[i].label}</div>
                            <div class="dropdown-menu" >
                                <div class="menu_list f_row">
                    `
            headLabelList[i].child.forEach((e) => {
                labelHtml += `<div class="menu_item f_row" data-url=${e.url} >
                                <img class="menu_icon" src="${e.icon || ''}" >
                                ${e.c_label}
                            </div>`
            })
            labelHtml += ` </div>
            </div>
            </div>`
        }
        labelHtml += `<img src="./Elements/search.png" class="search"/>`
        $('.label_list').append(labelHtml)
        $('.label_item').click(function (e) {
            $(this).addClass('active')
            $(this).siblings().removeClass('active')

        })
        $('.menu_item').click(function (e) {
            console.log(121212, $(this).attr('data-url'))
            
        })
       
        let navHtml='<div class="carousel-inner">'
        let newNavList=group(navList,6)
        for (var i = 0; i < newNavList.length; i++) {
            navHtml+= `
                <div class="carousel-item ${i===0?'active':''}" >
            `
            let cNavList=newNavList[i]
            
            for(var j=0;j<cNavList.length;j++){

                navHtml += `<div class= "dropdown_wrap " data-index=${j}>
                    <div data-bs-toggle="dropdown" class="nav_item " data-value=${cNavList[j].value} >
                        <img src="${cNavList[j].img}" class="nav_icon show_black">
                        <img src="${cNavList[j].whiteImg}" class="nav_icon show_white">
                    </div>
                    <div class="dropdown-menu">
                        <div class="menu_list f_row">
                    `
                    cNavList[j].child.forEach((e) => {
                        navHtml += `<div class="menu_item f_row" data-url=${e.url}>
                                        <img class="menu_icon" src="${e.icon || ''}">
                                        ${e.c_label}
                                    </div>`
                })
                navHtml += ` </div>  </div> </div>`
            }
            navHtml += ` </div>`
           
        }
        navHtml+='</div>'
        $('.nav_list').append(navHtml)
        
    }


}
function group(array, subNum) {
    let index = 0;
    let newArray = [];
    while(index < array.length) {
        newArray.push(array.slice(index, index += subNum));
    }
    return newArray;
}




window.customElements.define("page-head", Head)