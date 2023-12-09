

class Head extends HTMLElement {
    constructor() {
        super()
        let h1=` `

        let headLabelActiveIndex=0
        let headLabelList=[
            {
                label:'Banquet Price List',
                child:[
                    {c_label:'child',icon:'./Elements/user-icon.png'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                ]
            },
            {
                label:'Wedding Events & Contests',
                child:[
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                ]
            },
            {
                label:'Promotion',
                child:[
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                ]
            },
            {
                label:'Trending Wedding Ideas',
                child:[
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                ]
            },
            {
                label:'Vendors',
                child:[
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                    {c_label:'child'},
                ]
            },

        ]
        let labelHtml=''
        for(var i=0;i<headLabelList.length;i++){
            labelHtml+=`<div class= "label_item dropdown ${i===0?'active':''}" data-index=${i}>
                    <div data-bs-toggle="dropdown"> ${headLabelList[i].label}</div>
                    <div class="dropdown-menu">
                        <div class="menu_list f_row">
                    `
            headLabelList[i].child.forEach((e)=>{
                labelHtml+=`<div class="menu_item f_row ">
                                <img src="${e.icon || ''}">
                                ${e.c_label}
                            </div>`
            })
            labelHtml+=` </div>  </div> </div>`
        }
        $('.label_list').append(labelHtml)
        $('#head').append(h1)



        $('.label_item').click(function (e){
            $(this).addClass('active')
            $(this).siblings().removeClass('active')

        })
        $('.menu_item').click(function (e){
            $(this).addClass('active')
            $(this).siblings().removeClass('active')

        })
    }

  
}

window.customElements.define("page-head", Head)