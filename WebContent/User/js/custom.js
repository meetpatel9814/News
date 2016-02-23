jQuery(document).ready(function($){'use strict';if($(".featured-slider").length){$(".featured-slider").owlCarousel({autoPlay:3000,items:2,pagination:false,itemsMobile:[768,1],itemsDesktop:[1199,2],itemsDesktopSmall:[979,1]});}
if($(".side-featured-slider").length){$(".side-featured-slider").owlCarousel({navigation:true,pagination:false,slideSpeed:300,paginationSpeed:400,singleItem:true});}
if($(".gallery").length){$("area[data-rel^='prettyPhoto']").prettyPhoto();$(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'facebook',slideshow:3000,autoplay_slideshow:false});$(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000,hideflash:true});}
if($("#cp-list-news-slider").length){$("#cp-list-news-slider").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,pagination:false,});}
if($("#cp-cat-slider").length){$("#cp-cat-slider").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,pagination:false,});}
var sync1=$("#sync1");var sync2=$("#sync2");sync1.owlCarousel({singleItem:true,slideSpeed:1000,navigation:true,pagination:false,afterAction:syncPosition,responsiveRefreshRate:200,});sync2.owlCarousel({items:3,itemsDesktop:[1199,10],itemsDesktopSmall:[979,10],itemsTablet:[768,8],itemsMobile:[479,4],pagination:false,responsiveRefreshRate:100,afterInit:function(el){el.find(".owl-item").eq(0).addClass("synced");}});function syncPosition(el){var current=this.currentItem;$("#sync2").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
if($("#sync2").data("owlCarousel")!==undefined){center(current)}}
$("#sync2").on("click",".owl-item",function(e){e.preventDefault();var number=$(this).data("owlItem");sync1.trigger("owl.goTo",number);});function center(number){var sync2visible=sync2.data("owlCarousel").owl.visibleItems;var num=number;var found=false;for(var i in sync2visible){if(num===sync2visible[i]){var found=true;}}
if(found===false){if(num>sync2visible[sync2visible.length-1]){sync2.trigger("owl.goTo",num- sync2visible.length+2)}else{if(num- 1===-1){num=0;}
sync2.trigger("owl.goTo",num);}}else if(num===sync2visible[sync2visible.length-1]){sync2.trigger("owl.goTo",sync2visible[1])}else if(num===sync2visible[0]){sync2.trigger("owl.goTo",num-1)}}
var num_post=$('#blog_grid div#loadMore').attr('data-number');var num_of_post=$('#blog_grid div.numpost').attr('data-number');$('.myList li.col-md-6').hide();if(num_post!=undefined){$("#myList li.col-md-6").slice(0,num_post).show();$("#loadMore").click(function(e){e.preventDefault();num_post=$('#loadMore').attr('data-number');$("#myList li.col-md-6:hidden").slice(0,num_post).show();if($("#myList li.col-md-6:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#myList li.col-md-6").slice(0,num_of_post).show();}else{$('#myList li.col-md-6').css('display','block');}
num_post=$('#blog_gallery div#loadMore2').attr('data-number');var num_of_post=$('#blog_gallery div.numpost').attr('data-number');$('.myList li.col-md-4').hide();if(num_post!=undefined){$("#myList2 li.col-md-4").slice(0,num_post).show();$("#loadMore2").click(function(e){e.preventDefault();num_post=$('#loadMore2').attr('data-number');$("#myList2 li.col-md-4:hidden").slice(0,num_post).show();if($("#myList2 li.col-md-4:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#myList2 li.col-md-4").slice(0,num_of_post).show();}else{$('#myList2 li.col-md-4').css('display','block');}
num_post=$('#blog_modern div#loadMore3').attr('data-number');var num_of_post=$('#blog_modern div.numpost').attr('data-number');if(num_post!=undefined){$("#myList3 li.col-md-6").slice(0,num_post).show();$("#loadMore3").click(function(e){e.preventDefault();num_post=$('#loadMore3').attr('data-number');$("#myList3 li.col-md-6:hidden").slice(0,num_post).show();if($("#myList3 li.col-md-6:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#myList3 li.col-md-6").slice(0,num_of_post).show();}else{$('#myList3 li.col-md-6').css('display','block');}
num_post=$('#blog_medium div#loadMore4').attr('data-number');var num_of_post=$('#blog_medium div.numpost').attr('data-number');$('.myList div.cp-news-list').hide();if(num_post!=undefined){$("#myList4 div.cp-news-list").slice(0,num_post).show();$('#myList4 div.cp-news-list li').css('display','block');$("#loadMore4").click(function(e){e.preventDefault();num_post=$('#loadMore4').attr('data-number');$("#myList4 div.cp-news-list:hidden").slice(0,num_post).show();if($("#myList4 div.cp-news-list:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#myList4 div.cp-news-list").slice(0,num_of_post).show();$('#myList4 div.cp-news-list li').css('display','block');}else{$('#myList4 div.cp-news-list').css('display','block');$('#myList4 div.cp-news-list li.col-md-6').css('display','block');}
num_post=$('#blog_full div#loadMore5').attr('data-number');var num_of_post=$('#blog_full div.numpost').attr('data-number');$('.myList li.cp-fullwidth-news-post-excerpt').hide();if(num_post!=undefined){$("#cp-category-list li.cp-fullwidth-news-post-excerpt").slice(0,num_post).show();$("#loadMore5").click(function(e){e.preventDefault();num_post=$('#loadMore5').attr('data-number');$("#cp-category-list li.cp-fullwidth-news-post-excerpt:hidden").slice(0,num_post).show();if($("#cp-category-list li.cp-fullwidth-news-post-excerpt:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#cp-category-list li.cp-fullwidth-news-post-excerpt").slice(0,num_of_post).show();}else{$('#cp-category-list li.cp-fullwidth-news-post-excerpt').css('display','block');}
num_post=$('#blog_column div#loadMore6').attr('data-number');var num_of_post=$('#blog_column div.numpost').attr('data-number');if(num_post!=undefined){$("#myListcolumn li.col-md-6").slice(0,num_post).show();$("#loadMore6").click(function(e){e.preventDefault();num_post=$('#loadMore6').attr('data-number');$("#myListcolumn li.col-md-6:hidden").slice(0,num_post).show();if($("#myListcolumn li.col-md-6:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#myListcolumn li.col-md-6").slice(0,num_of_post).show();}else{$('#myListcolumn li.col-md-6').css('display','block');}
num_post=$('#blog_masonry div#loadMore7').attr('data-number');var num_of_post=$('#blog_masonry div.numpost').attr('data-number');$('.myList div.item').hide();if(num_post!=undefined){$("#myListmasonry div.item").slice(0,num_post).show();$("#loadMore7").click(function(e){e.preventDefault();num_post=$('#loadMore7').attr('data-number');$("#myListmasonry div.item:hidden").slice(0,num_post).show();if($("#myListmasonry div.item:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#myListmasonry div.item").slice(0,num_of_post).show();}else{$('#myListmasonry div.item').css('display','block');}
num_post=$('#blog_featured div#loadMorefeature').attr('data-number');var num_of_post=$('#blog_featured div.numpost').attr('data-number');if(num_post!=undefined){$("#myListfeature li.col-md-6").slice(0,num_post).show();$("#loadMorefeature").click(function(e){e.preventDefault();num_post=$('#loadMorefeature').attr('data-number');$("#myListfeature li.col-md-6:hidden").slice(0,num_post).show();if($("#myListfeature li.col-md-6:hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#myListfeature li.col-md-6").slice(0,num_of_post).show();}else{$('#myListfeature li.col-md-6').css('display','block');}
num_post=$('#gallery div#loadMore8').attr('data-number');var num_of_post=$('#gallery div.numpost').attr('data-number');var conclass=$('#gallery_list li').attr('class');$('.myList li.'+conclass).hide();if(num_post!=undefined){$("#gallery_list li."+conclass).slice(0,num_post).show();$("#loadMore8").click(function(e){e.preventDefault();num_post=$('#loadMore8').attr('data-number');$("#gallery_list li."+conclass+":hidden").slice(0,num_post).show();if($("#gallery_list li."+conclass+":hidden").length==0){$('a.loadmore').text("No more posts");}});}else if(num_of_post!=undefined){$("#gallery_list li."+conclass).slice(0,num_of_post).show();}else{$('#gallery_list li.'+conclass).css('display','block');}
var w=new Waves();w.displayEffect();});jQuery('.pagination_blog').click(function(e){var cnt=jQuery(this).children().attr('data-rel');var style_id=jQuery(this).children().attr('data-lang');var sty=jQuery(this).children().attr('data-type');var num=jQuery(this).parent().parent().parent().parent().attr('data-number');var cat=jQuery(this).parent().parent().parent().parent().attr('data-cat');var num_char=jQuery(this).parent().parent().parent().parent().attr('data-char');var con_id=jQuery(this).parent().parent().parent().parent().parent().attr('id');jQuery('#'+con_id+' ul.pagination li').removeClass('active');jQuery(this).parent().addClass("active");var templateUrl=object_name.templateUrl;jQuery("#"+style_id).html("<img class = 'cp_page_content_loader' src="+templateUrl+"/aj-loader.gif alt='' width='35'>");jQuery.ajax({url:ajaxurl,data:{'action':'example_ajax_request','type':'display_events','paged':cnt,'num_posts':num,'category_id':cat,'num_characters':num_char,'display_styles':sty,},success:function(data){jQuery('html, body').animate({scrollTop:jQuery("#"+style_id).offset().top},2000);jQuery("#"+style_id).html(data);jQuery("#"+style_id+" li").show();jQuery("#"+style_id+" div").show();},});});jQuery("#contact_submit").submit(function(event){event.preventDefault();jQuery("#loader").show();var templateUrl=object_name.templateUrl;jQuery("#loader").html("<img src="+templateUrl+"/aj-loader.gif alt='' width='35'>");var name=jQuery('#name').val();var email=jQuery('#email').val();var subject=jQuery('#subject').val();var message=jQuery('#message').val();var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;var errormsg="";if(name==""){errormsg="<p><font color='red'><h5 class = 'form_name_field'>Please Enter Name</h5></font></p>";}
if(email==""){errormsg+="<p><font color='red'><h5 class = 'form_name_field'>Please Enter Email</h5></font></p>";}else if(!filter.test(email)){errormsg+="<p><font color='red'><h5 class = 'form_name_field'>Please Provide A Valid Email Address</h5></font></p>";}
if(subject==""){errormsg+="<p><font color='red'><h5 class = 'form_name_field'>Please Enter Subject</h5></font></p>";}
if(message==""){errormsg+="<p><font color='red'><h5 class = 'form_name_field'>Please Enter Message</h5></font></p>";}
if(errormsg!=""){jQuery("#loader").html(errormsg);return false;}
jQuery.ajax({url:ajaxurl,data:{'action':'courses_ajax_request','type':'display_contact','name':jQuery('#name').val(),'email':jQuery('#email').val(),'subject':jQuery('#subject').val(),'message':jQuery('#message').val(),'email_to':jQuery('#email_to').val()},success:function(data){jQuery("#loader").html(data).delay(3000).hide('slow');jQuery('#name').val(""),jQuery('#email').val(""),jQuery('#subject').val(""),jQuery('#message').val("")},error:function(errorThrown){console.log(errorThrown);}});});