//JavaScript代码区域
layui.use('element', function(){
  var element = layui.element;
});
layui.use('form', function(){
  var form = layui.form;
  
  //监听提交
  form.on('submit(nextStep)', function(data){
    console.log(data.field)
    $('.step').hide();
    $('.second').addClass('active');
    $('.step2').show();
    return false;
  });
  form.on('radio(product)', function(data){
    console.log(data.elem.title); //得到radio原始DOM对象
    $('.product').text(data.elem.title.substr(data.elem.title.indexOf('）')+1));
    console.log(data.value); //被点击的radio的value值
  });  
});
layui.use('table', function(){
  var table = layui.table;
  
  table.render({
    elem: '#test',
    url:'',
    cols: [[
      {type:'checkbox'}
      ,{field:'id', title: '序号',align:'center',width:85}
      ,{field:'lsh', title: '流水号',align:'center'}
      ,{field:'sqbt', title: '申请标题',align:'center'}
      ,{field:'wtr',  title: '委托人',align:'center',width:'15%'}
      ,{field:'cpmc', title: '产品名称', align:'center'}
      ,{field:'rzlb', title: '认证类别',align:'center'}
      ,{field:'sqlb', title: '申请类别',align:'center'}
      ,{field:'sqsj', title: '申请时间',align:'center'}
      ,{field:'dqzt', title: '当前状态',align:'center'}
      ,{field:'dqjd', title: '当前阶段',align:'center'}
      ,{fixed: 'right', title:'操作', toolbar: '#barDemo',align:'center'}
    ]],
    page: true,
    limit:12,
    data:[
      {id:'1',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'2',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'3',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'4',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'5',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'6',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'7',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'8',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'9',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'10',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'11',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'12',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'13',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'14',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'15',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'16',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'17',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'18',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
      {id:'19',lsh:'00000001',sqbt:'河北蓝瑞筒灯',wtr:'河北蓝瑞照明科技有限公司',cpmc:'电线电缆',rzlb:'CCC',sqlb:'新申请',sqsj:'2019-03-15 17:27',dqzt:'待审核',dqjd:'等待受理'},
    ]
  });
});
var firstMenu = 'apply';
var headerInfo = '首页_填写WSCT认证申请书';
$('.leftNav li a').click(function(){
  var id = $(this)[0].dataset.id;
  var url = $(this)[0].dataset.url;
  if(!id){
    return
  }
  var header = $(this)[0].dataset.header;
  headerInfo = header;
  $('.page').hide();
  console.log(header)
  $('.firstMenu').text(header.substring(0,header.indexOf('_')));
  $('.secondMenu').text(header.substring(header.indexOf('_')+1));
  $('.layui-body').scrollTop(0);
  $('#'+id).show();
  firstMenu = url;
})
$('#prev').click(function(){
  $('.step').hide();
  $('.second').removeClass('active');
  $('.step1').show();
})
var clickNum = '';
$('.mynavbar .yiji>a').click(function(){
  $('.mynavbar .yiji>a').removeClass('active');
  var imgList = $('.mynavbar .yiji>a img');
  for(var i=0;i<imgList.length;i++){
    var oldSrc = $(imgList[i]).attr('src');
    oldSrc = oldSrc.replace('_active.png','.png');
    $(imgList[i]).attr('src',oldSrc);
  }
  $(this).addClass('active');
  var src = $(this).find('img').attr('src');
  clickNum = src.substr(src.indexOf('.')-1,1);
  console.log(clickNum)
  src = src.replace('.png','_active.png');
  $(this).find('img').attr('src',src);
})
$('.mynavbar .yiji>a').mouseover(function(){
  var src = $(this).find('img').attr('src');
  if(src.indexOf('active')>0){
    return
  }
  $(this).addClass('active');
  src = src.replace('.png','_active.png');
  $(this).find('img').attr('src',src);
})
$('.mynavbar .yiji>a').mouseout(function(){
  var src = $(this).find('img').attr('src');
  src = src.replace('_active.png','.png');
  // console.log(src.substr(src.indexOf('.')-1,1),clickNum)
  if(src.substr(src.indexOf('.')-1,1)==clickNum){
    return;
  }
  $(this).removeClass('active');
  $(this).find('img').attr('src',src);
})
// $('.firstMenu').click(function(){
//   console.log(headerInfo)
//   $('.page').hide();
//   $('.firstMenu').text(headerInfo.substring(0,headerInfo.indexOf('_')));
//   $('.secondMenu').text(headerInfo.substring(headerInfo.indexOf('_')+1));
//   $('.layui-body').scrollTop(0);
//   headerInfo = $('#'+firstMenu)[0].dataset.header;
//   console.log($('#'+firstMenu)[0]);
//   var url = $('#'+firstMenu)[0].dataset.url;
//   firstMenu = url;
//   $('#'+firstMenu).show();
// })