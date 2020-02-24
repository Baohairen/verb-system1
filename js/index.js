//JavaScript代码区域
layui.use('element', function(){
  var element = layui.element;
});
layui.use('form', function(){
  var form = layui.form;
  
  //监听提交
  form.on('submit(nextStep)', function(data){
    
    return false;
  });
  form.on('radio(product)', function(data){
    console.log(data.elem.title); //得到radio原始DOM对象
    $('.product').text(data.elem.title.substr(data.elem.title.indexOf('）')+1));
    console.log(data.value); //被点击的radio的value值
  });  
});
layui.use('upload', function(){
  var upload = layui.upload;
   
  //执行实例
  var uploadInst = upload.render({
    elem: '#else' //绑定元素
    ,accept:'images'
    ,url: '/upload/' //上传接口
    ,done: function(res){
      //上传完毕回调
    }
    ,error: function(){
      //请求异常回调
    }
  });
  var uploadInst1 = upload.render({
    elem: '#pz' //绑定元素
    ,accept:'images'
    ,url: '/upload/' //上传接口
    ,done: function(res){
      //上传完毕回调
    }
    ,error: function(){
      //请求异常回调
    }
  });
})
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
      ,{fixed: 'right', title:'操作', toolbar: '#barDemo',align:'center',width:150}
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
  table.render({
    elem: '#table1',
    url:'',
    cols: [[
      {field:'info', title: '附件信息',align:'center',width:'38%'}
      ,{field:'file', title: '文件名',align:'center',width:'28%'}
      ,{field:'time', title: '上传时间',align:'center'}
      ,{field:'size',  title: '文件大小',align:'center',width:100}
      ,{fixed: 'right', title:'操作', toolbar: '#barDemo1',align:'center',width:180}
    ]],
    limit:12,
    data:[
      {info:'申请方、制造方、生产厂法律地位证明（法人营业执照复印件，三者不同需分别提供， 若委托人为代理，须提交授权委托书及授权双方身',file:'申请方证明.pdf,制造方证明.pdf,生产厂证明.pdf',time:'2019-03-15 17:27',size:'180kb'},
      {info:'申请方与制造商的关系说明（当申请方与制造商不一致时需提供）',file:'/',time:'/',size:'/'},
      {info:'制造商与生产厂的ODM/OEM协议（当制造商与生产厂不一致时提供）',file:'/',time:'/',size:'/'},
      {info:'申请方与制造商的关系说明（当申请方与制造商不一致时需提供）',file:'/',time:'/',size:'/'},
      {info:'申请方与制造商的关系说明（当申请方与制造商不一致时需提供）',file:'/',time:'/',size:'/'},
      {info:'申请方与制造商的关系说明（当申请方与制造商不一致时需提供）',file:'/',time:'/',size:'/'},
      {info:'申请方与制造商的关系说明（当申请方与制造商不一致时需提供）',file:'/',time:'/',size:'/'},
      {info:'申请方与制造商的关系说明（当申请方与制造商不一致时需提供）',file:'/',time:'/',size:'/'},
      {info:'申请方与制造商的关系说明（当申请方与制造商不一致时需提供）',file:'/',time:'/',size:'/'},
    ]
  });
  table.render({
    elem: '#table2',
    url:'',
    cols: [[
      {field:'id', title: '序号',align:'center',width:110}
      ,{field:'project', title: '收费项目',align:'center',width:150}
      ,{field:'fee', title: '费用（人民币/元）',align:'center',width:120}
      ,{field:'bz',  title: '备注',align:'center',width:'40%',templet:'#bz'}
      ,{field:'fee1',  title: '实际支付费用',align:'center',width:120}
    ]],
    limit:12,
    data:[
      {id:'1',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'2',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'3',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'4',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'5',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'6',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {project:'费用合计',fee:'6000',fee1:'6000'},
      {project:'优惠后总费用',fee:'6000',fee1:'6000'}
    ]
  });
  table.render({
    elem: '#table3',
    url:'',
    cols: [[
      {field:'id', title: '序号',align:'center',width:110}
      ,{field:'project', title: '收费项目',align:'center',width:150}
      ,{field:'fee', title: '费用（人民币/元）',align:'center',width:150}
      ,{field:'bz',  title: '备注',align:'center',width:'40%',templet:'#bz'}
      ,{field:'fee1',  title: '实际支付费用',align:'center',width:120}
    ]],
    limit:12,
    data:[
      {id:'1',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'2',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'3',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'4',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'5',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {id:'6',project:'申请费',fee:'1000',bz:'实际人/日数依受审工厂规模和认证产品数量而定（一般为4-6个人/日，包括文审人/日数）',fee1:'1000'},
      {project:'费用合计',fee:'6000',fee1:'6000'},
      {project:'优惠后总费用',fee:'6000',fee1:'6000'}
    ]
  });
  $('#payDetail .layui-table-body tr').eq(-2).addClass('bgcolor');
  $('#payDetail .layui-table-body tr').eq(-1).addClass('bgcolor');
  $('#payDetail .layui-table-body tr').eq(-2).children().eq(-2).remove();
  $('#payDetail .layui-table-body tr').eq(-2).children().eq(0).remove();
  $('#payDetail .layui-table-body tr').eq(-1).children().eq(-2).remove();
  $('#payDetail .layui-table-body tr').eq(-1).children().eq(0).remove();
  $('#payDetail .layui-table-body tr').eq(-2).children().eq(0).attr('colspan',2);
  $('#payDetail .layui-table-body tr').eq(-2).children().eq(2).attr('colspan',2);
  $('#payDetail .layui-table-body tr').eq(-1).children().eq(0).attr('colspan',2);
  $('#payDetail .layui-table-body tr').eq(-1).children().eq(2).attr('colspan',2);
  $('#ensureDetail .layui-table-body tr').eq(-2).addClass('bgcolor');
  $('#ensureDetail .layui-table-body tr').eq(-1).addClass('bgcolor');
  $('#ensureDetail .layui-table-body tr').eq(-2).children().eq(-2).remove();
  $('#ensureDetail .layui-table-body tr').eq(-2).children().eq(0).remove();
  $('#ensureDetail .layui-table-body tr').eq(-1).children().eq(-2).remove();
  $('#ensureDetail .layui-table-body tr').eq(-1).children().eq(0).remove();
  $('#ensureDetail .layui-table-body tr').eq(-2).children().eq(0).attr('colspan',2);
  $('#ensureDetail .layui-table-body tr').eq(-2).children().eq(2).attr('colspan',2);
  $('#ensureDetail .layui-table-body tr').eq(-1).children().eq(0).attr('colspan',2);
  $('#ensureDetail .layui-table-body tr').eq(-1).children().eq(2).attr('colspan',2);
  table.render({
    elem: '#table4',
    url:'',
    cols: [[
      {field: 'bzgg', title: '标志规格',align: 'center',width:150},
      {field: 'sgdw', title: '申购单位',align: 'center', templet:'#selectSgdw',width:200},
      {field: 'gg', title: '规格',align: 'center', templet:'#selectGg',width:200},
      {field: 'dj', title: '单价（元/枚）',align: 'center',width:200},
      {field: 'sl', title: '数量',align: 'center', templet:'#count',width:200},
      {field: 'xj', title: '小计',align: 'center',width:150}
    ]],
    limit:12,
    data:[
      {bzgg:'□ 8MM',sgdw:'1',gg:'1',dj:'',sl:'',xj:''},
      {bzgg:'□ 15MM',sgdw:'1',gg:'1',dj:'',sl:'',xj:''},
      {bzgg:'□ 30MM',sgdw:'1',gg:'1',dj:'',sl:'',xj:''},
      {bzgg:'□ 45MM',sgdw:'1',gg:'1',dj:'',sl:'',xj:''},
      {bzgg:'□ 60MM',sgdw:'1',gg:'1',dj:'',sl:'',xj:''},
    ]
  });
});
var firstMenu = 'apply';
var headerInfo = '';
$('.leftNav li a').click(function(){
  var id = $(this)[0].dataset.id;
  $('.leftNav li a').removeClass('a_active');
  $(this).addClass('a_active');
  if($(this).find('.layui-icon-down').length>0){
    $(this).find('.layui-icon-down').addClass('layui-icon-up').removeClass('layui-icon-down');
  }else{
    $(this).find('.layui-icon-up').addClass('layui-icon-down').removeClass('layui-icon-up');
  }
  if(!id){
    return
  }
  var header = $(this)[0].dataset.header;
  headerInfo = header;
  header?$('.menus').show():$('.menus').hide();
  $('.page').hide();
  $('.menu_title1').text(header.substring(0,header.indexOf('_')));
  $('.menu_title2').text(header.substring(header.indexOf('_')+1));
  $('.layui-body').scrollTop(0);
  $('#'+id).show();
})
let currentStep = 1;
$('.prev').click(function(){
  $('.step_menu'+currentStep).removeClass('active');
  currentStep--;
  $('.step').hide();
  $('.step'+currentStep).show();
})
$('.next').click(function(){
  currentStep++;
  $('.step').hide();
  $('.step_menu'+currentStep).addClass('active');
  $('.step'+currentStep).show();
})
var clickNum = '';
$('.firstMenu>a').click(function(){
  $('.firstMenu>a').removeClass('active');
  var imgList = $('.firstMenu>a img');
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
$('.firstMenu>a').mouseover(function(){
  var src = $(this).find('img').attr('src');
  if(src.indexOf('active')>0){
    return
  }
  $(this).addClass('active');
  src = src.replace('.png','_active.png');
  $(this).find('img').attr('src',src);
})
$('.firstMenu>a').mouseout(function(){
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