/*!CK:3672837355!*//*1450011168,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["f8a07"]); }

__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});},null);
__d('EntstreamAttachmentRelatedShare',['Arbiter','AsyncRequest','AttachmentRelatedShareConstants','CSS','DOM','Event','XPubcontentInlinePhotoPivotsEventsController','csx','cx','ge','getOrCreateDOMID','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=2,u=3,v={loadRelatedAttachment:function(w,x,y){var z=null;if(typeof w==="string"){z=q(w);}else z=w;if(!z)return;var aa=m.listen(z,'click',function(){aa.remove();h.inform(j.ARTICLE_CLICK,{attachment:z,global_share_id:x,is_right_click:false,share_id:y});}),ba=m.listen(z,'mousedown',function(event){if(event.which===u||event.button===t){ba.remove();h.inform(j.ARTICLE_CLICK,{attachment:z,global_share_id:x,is_right_click:true});}});},loadInlineStoryPivotAttachment:function(w,x){var y=q(w);if(!y)return;var z=m.listen(y,'click',function(){z.remove();h.inform(j.PHOTO_CLICK,{attachment:y,storyid:x});});},loadRelatedGameAttachment:function(w,x){var y=null;if(typeof w==="string"){y=q(w);}else y=w;if(!y)return;s(m.listen(y,'click',function(){h.inform(j.GAME_CLICK,{attachment:y,global_share_id:x});}));s(m.listen(y,'mousedown',function(event){if(event.which===u||event.button===t)h.inform(j.GAME_CLICK,{attachment:y,global_share_id:x});}));},loadRelatedLSCVideoAttachment:function(w,x){var y=null;if(typeof w==='string'){y=q(w);}else y=w;if(!y)return;var z="^div._4-u2",aa=l.scry(y,z),ba=m.listen(y,'click',function(){ba.remove();h.inform(j.VIDEO_CLICK,{attachment:y,global_share_id:x});});},loadRelatedLSCInlineVideoAttachment:function(w,x){var y=null;if(typeof w==='string'){y=q(w);}else y=w;if(!y)return;m.listen(y,'click',function(){var z="^div._4-u2",aa="_1d8v",ba=l.scry(y,z),ca=ba.length===1?ba[0]:null,da=ca.parentNode,ea=da.previousSibling;while(!ea){da=da.parentNode;ea=da.previousSibling;}if(!k.hasClass(ea,aa)){var fa=l.create('div',{className:aa}),ga=l.insertBefore(ca.parentNode,fa),ha=ga.length>=1?ga[0]:null;}else ha=ea;var ia=r(ha);new i().setURI('/ajax/flash/expand_inline.php').setData({share_id:x,target_div:ia,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(y.parentNode).send();});},loadRelatedEventsPivotAttachment:function(w,x){var y=null;if(typeof w==="string"){y=q(w);}else y=w;if(!y)return;s(m.listen(y,'click',function(){h.inform(j.EVENT_JOIN,{attachment:y,event_id:x});}));},closeButton:function(w,x){m.listen(w,'click',function(){l.remove(x);});},closeButtonPhotoPivots:function(w,x,y,z){m.listen(w,'click',function(){var aa=n.getURIBuilder(),ba={story_id:y,search_query_type:z,event:'hide'};new i().setMethod('POST').setURI(aa.getURI()).setData(ba).send();l.remove(x);});},seeAllLinkPhotoPivots:function(w,x,y){m.listen(w,'click',function(){var z=n.getURIBuilder(),aa={story_id:x,search_query_type:y,event:'see_all'};new i().setMethod('POST').setURI(z.getURI()).setData(aa).send();});},removeOldSuggestions:function(w){var x=q(w);if(!x)return;var y=l.scry(x.parentNode,"._5d73");for(var z=1;z<y.length;z++)l.remove(y[z]);setTimeout(function(){k.show(y[0]);},1000);},showHiddenSuggestions:function(w){var x=m.listen(w,'click',function(){x.remove();var y="^._1ui8",z=l.scry(w,y);if(!z)return;k.hide(z[0]);var aa=z[0].previousSibling;while(aa){k.show(aa);aa=aa.previousSibling;}});}};f.exports=v;},null);