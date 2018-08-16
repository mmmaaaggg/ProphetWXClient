<template>
    <div class="container">
        <div class="input-box">
            <input
                placeholder="输入股票"
                placeholder-style='font-size:0.8em'
                v-model="query"
                :value="gpname"
                @input="bindInput($event)"
            >
            <div class="submit" @click="submit">完成</div>
        </div>
        <div class="search-content">
            <scroll-view scroll-y="true" class="scroll">
                <ul>
                    <li
                        class="first-item"
                        v-for="(item,index) in namelist"
                        :key="index"
                    >
                        <div class="first-title">{{item.text}}</div>
                        <ul>
                            <li
                              class="second-item"
                              v-for="(second,cindex) in item.children"
                              :class="{ odd : cindex % 2 == 0 }"
                              :key="cindex"
                            >
                              <div class="stock-item">{{second.text}}</div>
                              <div
                                class="add-txt"
                                v-if="showlist[second.text] == 0 || !showlist[second.text]"
                                @click="addItem(item.text,second)"
                              >
                                添加
                              </div>
                              <div
                                class="add-txt-plus"
                                v-else
                                @click="deleteItem(second)"
                              >
                                已关注
                              </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </scroll-view>
        </div>
    </div>
</template>

<script>
import * as login from '../../components/login'
import * as env from '../../utils/index'

    export default {
        data () {
            return {
                query: '',
                page: '',
                gpname: '',
                showlist: {},
                namelist: '',
                index: '',
                nameBuffer: []
            }
        },
        mounted() {
            this.nameBuffer = []
            this.showlist = {}
            let info  = this.$root.$mp.query.info
            info = JSON.parse(info)
            this.page = info.pages
            this.index = info.index
            if (this.index == 3) {
                wx.showToast({
                    title: '请按顺序选股,' + `最多选${info['index']}只`,
                    duration: 2500,
                    icon: 'none'
                })
            }
            else
                wx.showToast({
                    title: `最多选${info['index']}只`,
                    duration: 2000,
                    icon: 'none'
                })
        },
        methods: {
            bindInput (e) {
                this.gpname = e.target.value;
                if (this.gpname) {
                    let url = env.host + `/asset/asset/${this.gpname}`
                    wx.request({
                        url: url,
                        success: (res) => {
                            this.namelist = res.data.results;
                            for (let i = 0; i < this.namelist.length; i++)
                                for (let j = 0; j <this.namelist[i].children.length; j++) {
                                    let item = this.namelist[i].children[j].text
                                    this.showlist[item] = 0
                                }
                        }
                    })
                }
            },
            addItem (text,item) {
                this.$set(this.showlist,item.text,1)
                let category = text
                let type = item.asset_type
                let name = item.asset_name
                let code = item.text.split(':')[0]
                this.nameBuffer.push({
                    category: category,
                    asset_type: type,
                    asset_code: code,
                    asset_name: name,
                    index: this.index
                })
            },
            deleteItem (item) {
                this.$set(this.showlist,item.text,0)
                let index = this.nameBuffer.indexOf(item)
                this.nameBuffer.splice(index,1)
            },
            submit () {
                let detail = this.nameBuffer
                if (this.page == 'createCombine') {
                    this.gpname = ''
                    wx.redirectTo({
                        url: "/pages/createCombine/main?detail="+JSON.stringify(detail)
                    })
                }
                else if (this.page == 'manual') {
                    this.gpname = ''
                    wx.redirectTo({
                        url: "/pages/manual/main?detail="+JSON.stringify(detail)
                    })
                }
                else if (this.page == 'createPredict') {
                    this.gpname = ''
                    wx.redirectTo({
                        url: "/pages/createPredict/main?detail="+JSON.stringify(detail)
                    })
                }

            },
        }

    }
</script>

<style>
    .container {
        width: 100%;
        height: 100%;
        background: #D4D4D4;
    }
    .input-box {
        height: 6vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input-box > input {
        margin-left: 2vw;
        padding-left: 10rpx;
        padding-top: 5rpx;
        padding-bottom: 5rpx;
        border-radius: 6px;
        width: 75vw;
        background: #fff;
    }
    .submit {
        border: 1px solid #7F7F50;
        font-size: 0.8em;
        background: #fff;
    }
    .first-title {
        text-align: center;
        background: #fff;
    }
    .second-item {
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.6em;
    }
    .stock-item {
        margin-left: 2vw;
    }
    .add-txt, .submit{
        margin-right: 2vw;
        padding: 5rpx;
        border: 1px solid #6384C0;
        border-radius: 6px;
    }
    .add-txt-plus {
        margin-right: 2vw;
    }
    .odd {
        background: #90BCD8;
    }
    .scroll {
        width: 100%;
        height: 100%;
    }
</style>