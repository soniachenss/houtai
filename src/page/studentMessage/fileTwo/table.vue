<template>
    <div style="padding:20px;">
        <div class="panel panel-primary">
            <div class="panel-heading">用户管理</div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>用户名</th>
                    <th>年龄</th>
                    <th>毕业学校</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for ="(user,index) in users">
                    <td>{{index+1}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.age}}</td>
                    <td>{{user.school}}</td>
                    <td><button v-on:click="remove(index)">remove</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="text"  id="name" v-model="user.name"/></td>
                    <td><input type="text" id="age"v-model="user.age"/></td>
                    <td><input type="text" id="school"v-model="user.school"/></td>
                    <td><button @click="insert">insert</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                user: {'name': '', 'age': '', 'school': ''},
                users: [
                    {'name': '李磊', 'age': '25', 'school': '洛阳理工'},
                    {'name': '张成', 'age': '23', 'school': '桂林电子科技'},
                    {'name': '炼心', 'age': '22', 'school': '江西电子科技'}
                ]
            }
        },
        methods: {
            insert: function () {
                this.users.push(this.user)
            },
            remove: function (index) {
                this.users.splice(index, 1)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    tr,th{
        text-align:center;
    }
</style>