<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
      <el-row>
        <el-col :span="24">
          <div class="grid-content nav-bg-color">
            <!--浙江金融职业学院学生管理系统-->
          </div>
        </el-col>
      </el-row>
    </header>
    <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>

    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <el-row>

          <el-col :span="24">
            <el-menu router ref="navbar" default-active="/activePublic" class="el-menu-vertical-demo"  menu-trigger="click" @select="selectMenu" @open="openMenu" @close="closeMenu" :unique-opened="uniqueOpened" background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
              <el-menu-item index="/activePublic" :class="{'isActive': active}">学生信息</el-menu-item>
              <el-submenu index="/activeManage1" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>助学补助</span>
                </template>

                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="/activeManage2" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>学生素质</span>
                </template>
                <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/activeManage3" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>宿舍服务</span>
                </template>

                <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/activeManage4" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>学工队伍</span>
                </template>
                <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/activeManage5" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>学生活动</span>
                </template>
                <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/activeManage6" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>后勤服务</span>
                </template>
                <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/activeManage7" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>学生党建</span>
                </template>
                <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="/activeManage" :class="{'isActive': !active}">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>学生档案</span>
                </template>
                <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">选项1</template>
                  <el-menu-item index="1-1-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">选项2</template>
                  <el-menu-item index="1-2-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">选项3</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>

      <!-- 右侧主内容区 -->
      <div  class="main-right" >
        <transition name="fade">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>

    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'
    import $ from 'jquery'

    Vue.use(Element)

    export default {
        name: 'app',
        data: function (){
            return {
                active:true,
                uniqueOpened:true,
                headerFixed : true,
            }
        },
        created: function(){
            this.$router.push('/activePublic');
        },
        methods: {
            selectMenu(index, indexPath) {
                /**
                 * 在选择父级菜单时自动关闭其下所有子菜单
                 * 选择时获取点击菜单的父级index，并计算得到该index在已打开菜单中的索引值，
                 * 关闭位于当前打开菜单中该索引值之后的全部菜单
                 */
                    // 获取当前打开的所有菜单
                let openMenu = this.$refs.navbar.openedMenus.concat([])
                console.log(index);
                // 获取点击菜单的父级index，如果当前点击的是根节点，则直接关闭所有打开菜单
                let nowMenuPath = indexPath.length > 1 ? indexPath[indexPath.length-2] : ""
                if(nowMenuPath){
                    // 获取父级index在数组中索引，关闭其后所有的菜单
                    let menuIndex = openMenu.indexOf(nowMenuPath)
                    openMenu = openMenu.slice(menuIndex+1)
                }
                console.log(JSON.stringify(openMenu));
                // 关闭菜单
                openMenu = openMenu.reverse();
                openMenu.forEach((ele) => {
                    console.log("hahaha");
                    this.$refs.navbar.closeMenu(ele)
                })
//                if(this.navMode == 'horizontal'){
//                    this.navBgShow = false
//                }
            },
            openMenu(){
//                if(this.navMode == 'horizontal'){
//                    this.navBgShow = true
//                }
            },
            closeMenu(){
//                if(this.navMode == 'horizontal'){
//                    this.navBgShow = false
//                }
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }

        },
        watch: {
            '$route': function (to,from) {
                if(to.path == '/activePublic'){
                    this.active = true ;
                }else if(to.path == '/activeManage'){
                    this.active = false ;
                }
            }
        }
    }
</script>

<style>

  body{margin: 0;}
  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  /* 头部导航 */
  header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  header .el-menu-demo{padding-left: 300px!important;}
  /*.nav-bg-color{*/
    /*background-color: #20a0ff;*/
    /*color: #fff;*/
  /*}*/

  /* 主内容区 */
  main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;padding-top: 10px;  background-color: #FCFCFC;  }
  main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
  main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
  main .el-menu{background-color: transparent!important;}
  /*main .el-menu li{background-color: #20a0ff;*/
    /*color: #fff;}*/
  /*  */
  .router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
  /*.is-active .router-link{color:#20a0ff; }*/

  /* 单选框 */
  .el-form-item .el-radio+.el-radio {
    margin-left: 30px!important;
  }
  /* 路由切换动效 */
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }

  /* 导航栏菜单选中效果 */
  .isActive{color: #fff!important;background-color: #66bdfd!important;}
  #app main .aside .is-active{color: #475669;}

  /* 卡片 */
  .el-card{overflow: visible!important;}
</style>
