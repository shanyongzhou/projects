const App = getApp()

Page({
    data: {
        activeIndex: 0,
        navList: [],
        indicatorDots: !0,
        vertical: !1,
        autoplay: !1,
        interval: 3000,
        duration: 1000,
        hidden: !0,
        goods: {
            items: [],
            params: {
                page : 1,
                limit: 10,
            },
            paginate: {}
        }
    },
    swiperchange(e) {
        // console.log(e.detail.current)
    },
    onLoad() {
        this.getBanners()
        this.getClassify()
    },
    navigateTo(e) {
        console.log(e)
        App.WxService.navigateTo('/pages/goods-detail/index', {
            id: e.currentTarget.dataset.id
        })
    },
    getBanners() {
    	App.HttpService.getBanners()
        .then(data => {
        	console.log(data)
        	if (data.meta.code == 0) {
                data.data.items.forEach(n => n.path = App.renderImage(n.images[0].path))
        		this.setData({
                    images: data.data.items
                })
        	}
        })
    },
    getClassify() {
        App.HttpService.getClassify({
            page: 1, 
            limit: 4, 
        })
        .then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                this.setData({
                    navList: data.data.items,
                    'goods.params.type': data.data.items[0]._id
                })
                this.getGoods()
            }
        })
    },
    getGoods() {
        const goods = this.data.goods
        const params = goods.params

        this.setData({ 
            hidden: !1
        })

        App.HttpService.getGoods(params)
        .then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                data.data.items.forEach(n => n.thumb_url = App.renderImage(n.images[0] && n.images[0].path))
                goods.items = goods.items.concat(data.data.items)
                goods.paginate = data.data.paginate
                goods.params.page = data.data.paginate.next
                goods.params.limit = data.data.paginate.perPage
                this.setData({
                    goods: goods
                })
            }

            this.setData({ 
                hidden: !0
            })
        })
    },
    onPullDownRefresh() {
        const type = this.data.goods.params.type    
        const goods = {
            items: [],
            params: {
                page : 1,
                limit: 10,
                type : type,
            },
            paginate: {}
        }

        this.setData({
            goods: goods
        })

        this.getGoods()
    },
    onReachBottom() {
        this.lower()
    },
    lower() {
        if (!this.data.goods.paginate.hasNext) return
        this.getGoods()
    },
    onTapTag(e) {
        const type = e.currentTarget.dataset.type
        const index = e.currentTarget.dataset.index
        const goods = {
            items: [],
            params: {
                page : 1,
                limit: 10,
                type : type,
            },
            paginate: {}
        }
        this.setData({
            activeIndex: index,
            goods: goods,
        })
        this.getGoods()
    },
})
