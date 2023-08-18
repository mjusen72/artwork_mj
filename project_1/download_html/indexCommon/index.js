

var course_name ="고객사_프로젝트명";

//콘텐츠 사이즈(내용 table크기)
var w=1012;
var h=630;

var list = [
	{
		bunyaTitle:'1. 과정'
		,bunya:[
			{
				chasi:[
					//차시
					{	chasiNum: '01'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					},
					{	chasiNum: '02'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					},
					{	chasiNum: '03'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					},
					{	chasiNum: '04'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					}
				]
			}
		]	
	},
	{
		bunyaTitle:'2. 과정'
		,bunya:[
			{
				chasi:[
					//차시
					{	chasiNum: '01'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					},
					{	chasiNum: '02'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					},
					{	chasiNum: '03'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					},
					{	chasiNum: '04'
						,chasiTitle:'차시명'//차시명
						,script: ''
						,sb: ''
						,graphic: ''
						,videoJpg: ''
						,link: ''
					}
				]
			}
		]	
	}
];





$(document).ready(function(e) 
{
	var element = '';
	var countArr = [];
	var count = 0;
	
	for(var i=0; i<list.length; i++)
	{
		for(var j=0; j<list[i].bunya.length; j++)
		{
			for(var k=0; k<list[i].bunya[j].chasi.length; k++)
			{
				count ++;
			}
		}

		countArr.push(count);//firstTd의 rowSpan을 지정해주기 위해
		count = 0;
	}

	for(var i=0; i<list.length; i++)
	{
		
		for(var j=0; j<list[i].bunya.length; j++)
		{

			for(var k=0; k<list[i].bunya[j].chasi.length; k++)
			{
				//분야별 첫번째 td
				var firstTd = (k == 0 && j == 0) ? '<td  align="center" bgcolor="white" class="css3 title" rowSpan="'
				+countArr[i]+'"><b>'+list[i].bunyaTitle+'' : '';
				
				//분야별 과정별 첫번째 td
				var secondTd = ( k == 0) ? '' : '';

				var thirdTd = ( k == 0) ? '' : '';
				var scriptJpg = (list[i].bunya[j].chasi[k].script == '') ? 'down_btn_off.jpg' : 'down_btn_on.jpg';
				var sbJpg = (list[i].bunya[j].chasi[k].sb == '') ? 'down_btn_off.jpg' : 'down_btn_on.jpg';
				var graphicJpg = (list[i].bunya[j].chasi[k].graphic == '') ? 'down_btn_off.jpg' : 'down_btn_on.jpg';
				var videoJpg = (list[i].bunya[j].chasi[k].video == '') ? 'play_btn_off.jpg' : 'play_btn_on.jpg';
				var linkJpg = (list[i].bunya[j].chasi[k].link == '') ? 'link_btn_off.jpg' : 'link_btn_on.jpg';
				
				//차시 td
				element += '\
				<tr align="center" bgcolor="#F2F2F2" class="css3">'
				+ firstTd 
				+ secondTd 
				+ thirdTd +
					'<td  align="center" bgcolor="white" class="css3"><b>'+list[i].bunya[j].chasi[k].chasiNum+'</b></td>\
					<td  align="left" bgcolor="white" class="css3">&nbsp;&nbsp;&nbsp;&nbsp;<b>'+list[i].bunya[j].chasi[k].chasiTitle+'</b></td>\
					<td  align="center" bgcolor="white" class="css3">\
						<a class="listBtn" id="'+(i+1)+'-'+(j+1)+'-'+(k+1)+'">\
						<img src="./indexCommon/img/'+scriptJpg+'">\
					</td>\
					<td  align="center" bgcolor="white" class="css3">\
						<a class="listBtn" id="'+(i+1)+'-'+(j+1)+'-'+(k+1)+'">\
						<img src="./indexCommon/img/'+sbJpg+'">\
					</td>\
					<td  align="center" bgcolor="white" class="css3">\
						<a class="listBtn" id="'+(i+1)+'-'+(j+1)+'-'+(k+1)+'">\
						<img src="./indexCommon/img/'+graphicJpg+'">\
					</td>\
					<td  align="center" bgcolor="white" class="css3">\
						<a class="listBtn" id="'+(i+1)+'-'+(j+1)+'-'+(k+1)+'">\
						<img src="./indexCommon/img/'+videoJpg+'">\
					</td>\
					<td  align="center" bgcolor="white" class="css3">\
						<a class="listBtn" id="'+(i+1)+'-'+(j+1)+'-'+(k+1)+'">\
						<img src="./indexCommon/img/'+linkJpg+'">\
					</td>\
				</tr>'

			}
		}
	}
	
	$('.listTable tbody').append(element);

	$('.listBtn').each(function(){
		$(this).on('click',function(){
			var id = $(this).attr('id');

			winpop_mov(id);
		})
	})

});

function winpop_mov(n)
{
	console.log('n ', n)
	var _rootURL = "./"
	var chasiNum = Number(n.split("-")[0]);
	var movNum = Number(n.split("-")[1]);
	var movNum2 = Number(n.split("-")[2]);
	var curUrl = list[chasiNum-1].bunya[movNum-1].gwajungTitle +'/' + digit(chasiNum)+'-'+digit(movNum)+'-'+digit(movNum2);
	console.log('curUrl ', curUrl)
	var thisMovURL = "mov.html?"+curUrl;
	var URL = _rootURL+thisMovURL;

	if(list[chasiNum-1].bunya[movNum-1].chasi[movNum2-1].link =="")
	{
		alert("준비중입니다.");
	}else
	{
		winpop(list[chasiNum-1].bunya[movNum-1].chasi[movNum2-1].link);
	}
}

function winpop(url,title)
{
	window.open(url, title ,"width=1012,height=630,resizable=yes,scrollbars=no,toolbars=yes,menubars=0,scrollbars=no,resizable=no");
}

function digit(c)
{
	var n;
	if(c < 10) n = '0'+c;
	else n= c;

	return n;
}