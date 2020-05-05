$('.commodityNav >a').removeClass('active').eq(2).addClass('active');
{
    let str = '';
    async function getData(params) {
        let { categorylist } = await $.ajax({ "url": "../json/playDate.json" ,dataType:"json"})
        return categorylist
    }
    console.log(getData())
    getData().then(res => {
        console.log(res)
        $.each(res, (i,e) => {
            let { phead, tulist, zilist } = e
            let topstr = "";
            let bottomstr = "";
            $.each(tulist, (i,e) => {
                topstr +=
                    `
              <a href="#">
                <img src="../imgs/img/${e.limg}" alt="">
                <p>${e.discr}${e.count}</p>
              </a>
              `
            })
            $.each(zilist, (i, e) => {
                bottomstr +=
                    `
              <a href="#">
                <p>${e.discr}${e.count}</p>
              </a>
              `
            })
            str +=
                `
                <div class="classifyBox">
                <p class="title">${phead}</p>
                <div class="top">${topstr}</div>
                <div class="bottom">${bottomstr}</div>    
            </div>
          `
            $('.classify').html(str)
        })
    })
}