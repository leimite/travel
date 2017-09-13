$(function() {
	/** 头部右侧时间的js */
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hours = date.getHours();
	var Minutes = date.getMinutes();
	var seconds = date.getSeconds();
	//判断时间的js
	month = month >= 1 && month <= 9 ? "0" + month : month;
	hours = hours >= 0 && hours <= 9 ? "0" + hours : hours;
	Minutes = Minutes >= 0 && Minutes <= 9 ? "0" + Minutes : Minutes;
	seconds = seconds >= 0 && seconds <= 9 ? "0" + seconds : seconds;
	var dater = date.getFullYear() + seperator1 + month + seperator1 + strDate;
	var timer = hours + seperator2 + Minutes + seperator2 + seconds;
	$('.timer').text(timer);
	$('.dater').text(dater);
	//判断当前复选框状态，并让label背景图与复选框同步勾选或取消
	$(document).on("click", ".checkboxF", function() {
		//判断复选框勾选状态
		if($(this).is(':checked')) {
			$(this).closest("label.checklableF").removeClass("uncheckedF"); //删除未勾选选背景图
			$(this).closest("label.checklableF").addClass("checkedF"); //添加勾选态背景图
		} else {
			$(this).closest("label.checklableF").removeClass("checkedF"); //删除勾选选背景图
			$(this).closest("label.checklableF").addClass("uncheckedF"); //添加未勾选选背景图
		}
	});
	/** 全选的js */
	$('.check-all').on("click", ".checkboxF", function() {
		if($(this).is(':checked')) {
			$(this).parents('.checkAll').siblings(".tableList").find(".checklableF").removeClass("uncheckedF").addClass("checkedF")			
		} else {
			$(this).parents('.checkAll').siblings(".tableList").find(".checklableF").removeClass("checkedF").addClass("uncheckedF")
		}
	})
	/** 工单配置管理页面内的全选  */
	$('.check-all').on("click", ".checkboxF", function() {
		if($(this).is(':checked')) {
			$(this).parents('.Thead').siblings(".Tbody").find(".checklableF").removeClass("checkedF").addClass("checkedF")			
		} else {
			$(this).parents('.Thead').siblings(".Tbody").find(".checklableF").removeClass("checkedF").addClass("uncheckedF")
		}
	})	
	
	
	/** 删除的js */
	$('.delBtn').on('click', function() {
		$(this).closest('tr').remove()
	})
	$('.delChecked').on('click', function() {
		$(this).parents('.checkAll').siblings(".tableList").find('.checkedF').not(this).closest('tr').remove();
		/** 角色管理页面的删除js */
		$(this).parents('.titleSelect').siblings(".tableList").find('.checkedF').not('.check-all').closest('tr').remove();
	})
	/** 单选按钮的js */
	$('.checklable').on('click', function() {
		$(this).parents('.chankbox').find('.checklable').removeClass('checked').addClass('unchecked');
		$(this).removeClass('unchecked').addClass('checked');
	})
	/*模拟下拉类表*/
	$(".mnSel").hover(
		function() {
			$(this).find("ul").show();
		},
		function() {
			$(this).find("ul").hide();
		}
	)
	$(".mnSel ul li").click(function() {
		var SelTxt = $(this).text();
		$(this).parents(".mnSel").find("p").text(SelTxt);
		$(this).parent("ul").hide();
	})

	/** 分页的js */
	$('.paging li').slice(2, 7).on('click', function() {
		$(this).addClass("active").siblings('li').removeClass("active");
	})
	/** 角色管理切换的js */
	var localUrl = window.location + '';
	var num;
	if(localUrl.indexOf('jobCardSetUser') >= 0) {
		num = 0;
	} else if(localUrl.indexOf('/jobCardSetDepartment') >= 0) {
		num = 1;
	} else if(localUrl.indexOf('/jobCardSetRole') >= 0) {
		num = 2;
	} else {
		num = 0;
	}
	$('.jobSetTop div').eq(num).addClass('active').siblings().removeClass('active');
})
/** 头部的标题的js **/
    $(document).ready(function(){
        //根据URL切换头部选中导航
        var localUrl = window.location + '';
        var spIndex;
        if (localUrl.indexOf('feelAlarm') >= 0||
        	localUrl.indexOf('feelAlarmMore') >= 0){
            spIndex=0;
            $('.headListleft p').text('舆情实时预警');
        } else if (localUrl.indexOf('/index') >= 0) { 
           spIndex=0;
           $('.headListleft p').text('舆情分析朔源');
        } else if (localUrl.indexOf('/specificMonitor') >= 0) { 
            spIndex=0;
            $('.headListleft p').text('特定对象监测');
        } else if (localUrl.indexOf('/setProperty') >= 0) {
             spIndex=0;
             $('.headListleft p').text('舆情属性配置');
        } else if (localUrl.indexOf('/sendJobCard') >= 0) { 
             spIndex=1;
             $('.headListright p').text('舆情预警派单');
        }else if (localUrl.indexOf('/jobCardDeal') >= 0) { 
            spIndex=1; 
            $('.headListright p').text('预警工单处理');
        }else if (localUrl.indexOf('/jobCardSetRole') >= 0||
        		  localUrl.indexOf('/jobCardSetDepartment') >= 0 ||
        		  localUrl.indexOf('/jobCardSetUser') >= 0){
                  spIndex=1;
                  $('.headListright p').text('工单配置管理');
        }else{
             $('.headListleft p').text('全网实时监测');
             $('.headListright p').text('联动应急处理');
        }
        $('.head p').eq(spIndex).addClass('active').siblings().removeClass('active');
    });
