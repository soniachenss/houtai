<template>
  <div>
    <div id="subOutputRank-print">
    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column
              prop="date"
              label="日期"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址">
      </el-table-column>
    </el-table>
      </div>
    <button @click="export2Excel">导出</button>
    <button @click="printContent">打印</button>
  </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            export2Excel: function() {
                require.ensure([], () => {
                    const { export_json_to_excel } = require('../../../vendor/Export2Excel');
                    const tHeader = ['日期', '姓名', '地址'];
                    const filterVal = ['date', 'name', 'address'];
                    const list = this.tableData;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '列表excel');
                })
            },
            formatJson: function(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            printContent:function(e){
                let subOutputRankPrint = document.getElementById('subOutputRank-print');
                console.log(subOutputRankPrint.innerHTML);
                let newContent =subOutputRankPrint.innerHTML;
                let oldContent = document.body.innerHTML;
                document.body.innerHTML = newContent;
                window.print();
                window.location.reload();
                document.body.innerHTML = oldContent;
                return false;
            }
        }
    }
</script>