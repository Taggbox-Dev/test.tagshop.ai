"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[6139],{96139:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var n=s(9950),i=s(73878),a=s(70804),r=s(80409),o=s(98361),l=s(1093),d=s(51960),c=s(4342),h=s(52867),p=s(54810),u=s(36431),m=s(17595),x=s(34483),g=s(75623),v=s(97937),j=s(82094),w=s(1480),f=s(58423),b=s(54480),N=s(28981),y=s(80322),T=s(18633),E=s(44414);class A extends n.Component{constructor(e){super(e),this.setLastSearchTag=()=>{const{modalData:e}=this.props;this.setState({loading:!0}),this.props.fetchProductList(1,10,this.state.selectedTag,"",this.responceApi,null===e||void 0===e?void 0:e.referenceId,null===e||void 0===e?void 0:e.newMedia)},this.handleClickOutsideTagProduct=e=>{var t,s;!this.tagProductRef||null!==(t=this.tagProductRef)&&void 0!==t&&null!==(s=t.current)&&void 0!==s&&s.contains(e.target)||this.setState({showtags:!1})},this.handleClickOutside=e=>{var t;!this.outsideNewRef.current||null!==(t=this.outsideNewRef.current)&&void 0!==t&&t.contains(e.target)||this.setState({showProd:!1})},this.filterProduct=e=>{const t=e.target.value;this.setState({searchText:t})},this.triggerAction=()=>{const{searchText:e,selectedTag:t}=this.state,{SEARCH_PRODUCTS_TEXT:s,fetchProductList:n,modalData:i}=this.props;(null===e||void 0===e?void 0:e.length)>=1?(this.setState({showProd:!0,loading:!0,productList:[]}),s(e),n(1,10,t,e,this.responceApi,null===i||void 0===i?void 0:i.referenceId,null===i||void 0===i?void 0:i.newMedia)):e||(this.setState({showProd:!0,loading:!0,productList:[]}),s(""),n(1,10,t,"",this.responceApi,null===i||void 0===i?void 0:i.referenceId,null===i||void 0===i?void 0:i.newMedia))},this.responceApi=e=>{this.setState((t=>({loading:!1,productList:[...t.productList,...e]})))},this.removeTag=e=>{const t=this.state.selectedTag.filter((t=>t!==e));this.setState({selectedTag:t,searchTag:"",showtags:!1,productTags:[]},(()=>{var e,t;return this.props.fetchProductList(1,10,this.state.selectedTag,"",this.responceApi,null===(e=this.props.modalData)||void 0===e?void 0:e.referenceId,null===(t=this.props.modalData)||void 0===t?void 0:t.newMedia)}))},this.product_tags_search=e=>{const t=e.target.value;this.setState({loadingTag:!0,showtags:(null===t||void 0===t?void 0:t.length)>0}),(0,w.Wb)(t).then((e=>{const{responseCode:t,responseData:s,responseMessage:n}=e.data;200===t&&this.setState({productTags:s,showtags:!(!s||!s.length),loadingTag:!1})})),this.setState({searchTag:t})},this.getData_bySelected_Tag=e=>{var t=[...this.state.selectedTag,e];this.setState({selectedTag:[...new Set(t)],showtags:!1,searchTag:""},(()=>{var e,t;this.props.fetchProductList(1,10,this.state.selectedTag,"",this.responceApi,null===(e=this.props.modalData)||void 0===e?void 0:e.referenceId,null===(t=this.props.modalData)||void 0===t?void 0:t.newMedia)}))},this.handleScroll=()=>{const e=this.listRef.current;if(e){e.getBoundingClientRect().bottom<=window.innerHeight&&this.setState({scrolledToBottom:!0},(()=>{this.filterProductOnScrolle()}))}},this.addProduct=(e,t)=>{const{modalData:s}=this.props;let n=null!==s&&void 0!==s&&s.postproduct&&(null===s||void 0===s?void 0:s.postproduct.length)>0?(0,h._u)(s):"45%";const i={left:"45%",top:"".concat(n)},a="left:45%;top:".concat(n,";");this.props.TAG_PRODUCT_ACTION(e,t,i,a,null===s||void 0===s?void 0:s.feedId,this.callbackMsg),this.setState({firstTime:!0}),this.setState({showProd:!1})},this.changePrdId=e=>{this.setState({productId:e})},this.callbackMsg=e=>{this.setState({errorMsg:e},(()=>{setTimeout((()=>{this.setState({errorMsg:""})}),5e3)})),(0,h.r$)(e)},this.filterProductOnScrolle=()=>{const{total_pages:e}=this.props;this.state.currentPage<e&&!this.state.sentReq&&this.setState({currentPage:this.state.currentPage+1,sentReq:!0},(()=>{var e,t;return this.props.ACTION_PRODUCT_LIST_FORTAG(this.state.currentPage,10,this.state.selectedTag,this.state.searchText,this.completedPageCall,null===(e=this.props.modalData)||void 0===e?void 0:e.referenceId,null===(t=this.props.modalData)||void 0===t?void 0:t.newMedia)}))},this.completedPageCall=e=>this.setState((t=>({sentReq:!1,productList:[...t.productList,...e]}))),this.removeTaggProduct=(e,t,s)=>{(0,y.Yj)("contentGallery","editGallery",!0)&&this.props.REMOVE_TAGGED_PRODUCT_ACTION(e,t,s)},this.state={tagedprod:[],showProd:!1,showtags:!1,searchTag:"",loadingTag:!1,productTags:[],selectedTag:[],productId:0,errorMsg:"",searchText:"",currentPage:1,loading:!1,scrolledToBottom:!1,sentReq:!1,visenzeId:null,visenzeProduct:null,firstTime:!1,productList:[]},this.outsideNewRef=n.createRef(),this.outsideNewRef2=n.createRef(),this.listRef=n.createRef(),this.tagProductRef=n.createRef()}componentDidMount(){window.addEventListener("click",this.handleClickOutside),window.addEventListener("click",this.handleClickOutsideTagProduct),window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("click",this.handleClickOutside),this.searchTimeout&&clearTimeout(this.searchTimeout),window.removeEventListener("scroll",this.handleScroll),window.addEventListener("click",this.handleClickOutsideTagProduct)}componentDidUpdate(e,t){this.state.searchText!==t.searchText&&(this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((()=>{this.triggerAction()}),800))}render(){const{showProd:e,selectedTag:t,productTags:s,showtags:n,searchTag:i,loadingTag:a,errorMsg:r,searchText:o,sentReq:l,loading:h,productList:u}=this.state,{modalData:w,changeHotspotStatus:f,enableHotspot:b}=this.props;return(0,E.jsx)("div",{className:"",children:(0,E.jsxs)("div",{className:"p-4 mb-3 mb-10",children:[5!=w.type&&3!=w.type&&1!=w.type?(0,E.jsx)(m.A.Group,{className:"mb-3",children:(0,E.jsx)(m.A.Check,{type:"switch",id:"enable_hotspot",className:"f-between",label:"Enable Hotspot",defaultValue:b,onChange:()=>(0,y.Yj)("contentGallery","editGallery",!0)?f(w.hotspot,w.referenceId):{},checked:b,reverse:!0})}):"",(0,E.jsxs)(x.A,{show:!0,className:"position-relative w-100 mb-3",align:"end",children:[(0,E.jsx)(x.A.Toggle,{variant:"outline-secondary",className:"arrow_disabled p-0 border-0 mb-0 flex-grow-1 w-100 bg-transparent",children:(0,E.jsxs)(g.A,{children:[(0,E.jsx)(m.A.Control,{id:"search_pro_",className:r?"is-invalid":"",placeholder:"Search Products By name, category, SKU, tags",ref:this.outsideNewRef,onFocus:()=>this.setState({showProd:!e,productList:[],currentPage:1}),onChange:this.filterProduct,value:o,autoComplete:"off",onClick:()=>this.setLastSearchTag()}),(0,E.jsx)(g.A.Text,{children:(0,E.jsx)(p.gc,{type:"solid",icon:"magnifying-glass"})})]})}),r?(0,E.jsx)("span",{className:"invalid-feedback",children:r}):null,h?(0,E.jsx)(x.A.Menu,{show:!!e,className:"w-100",children:(0,E.jsx)("div",{className:"w-100",style:{overflowX:"auto",minHeight:"320px"},children:(0,E.jsx)(T.a,{bg:"white"})})}):e&&u&&u.length>0?(0,E.jsxs)(x.A.Menu,{show:!(!e||!u),className:"w-100",children:[(0,E.jsx)("div",{className:"w-100",style:{overflowX:"auto",maxHeight:320},ref:this.listRef,onScroll:this.handleScroll,children:u.map(((e,t)=>{var s;const n=null!==e&&void 0!==e&&null!==(s=e.product_image)&&void 0!==s&&s.includes("?")?"https://cdn.taggbox.com/v7/".concat(null===e||void 0===e?void 0:e.product_image,"&w=100"):"https://cdn.taggbox.com/v7/".concat(null===e||void 0===e?void 0:e.product_image,"?w=100");return(0,E.jsxs)(x.A.Item,{"data-item":"product",onClick:()=>(0,y.Yj)("contentGallery","editGallery",!0)?this.addProduct(e,w.referenceId):{},className:"d-flex",children:[(0,E.jsx)("div",{className:"w-64px d-flex flex-shrink-0 me-2",children:(0,E.jsx)(j.A,{mediaClass:"position-relative overflow-hidden w-100 border rounded-1",size:100,height:64,width:64,url:n,alt:"",isCover:!0})}),(0,E.jsxs)("div",{className:"d-flex align-items-start flex-column overflow-hidden w-100",children:[(0,E.jsx)("p",{className:"fs-9 fw-medium mb-1 text-wrap ",children:e.product_title}),(0,E.jsxs)("span",{className:"d-flex align-items-center tb_pro_price mb-1",children:[e.product_price&&e.product_price>0?(0,E.jsxs)("span",{className:"fs-8 fw-bold",children:[e.price_currency_symbol,e.product_discount>0?e.product_discount:e.product_price]}):"",e.product_price&&e.product_discount>0&&e.product_discount<e.product_price?(0,E.jsxs)("span",{className:"fs-8 ms-2 text-muted",style:{textDecoration:"line-through"},children:[e.price_currency_symbol,e.product_price]}):null]}),e.recomended?(0,E.jsxs)("div",{className:"f-between mt-2 w-100",children:[(0,E.jsxs)(c.A,{bg:"primary",className:"rounded-pill bg-transparent text-primary border border-primary",children:[(0,E.jsx)(p.gc,{icon:"sparkles",iconClass:"me-1"})," Ai-Recommended"]}),(0,E.jsx)("div",{className:"position-relative",style:{marginRight:-5},children:(0,E.jsx)(d.A,{src:(0,p.pc)("media/svg/trusense.svg"),height:20,width:100,alt:"trueSense",fluid:!0})})]}):(0,E.jsx)("p",{className:"fs-10 text-muted mb-0",children:e.shopify_product_type?(0,E.jsxs)("div",{children:[" Category:  ",e.shopify_product_type]}):""})]})]},t)}))}),(0,E.jsx)("hr",{}),(0,E.jsxs)(x.A.Item,{className:"f-center",id:"add_product",href:"/content/products",children:[(0,E.jsx)(p.gc,{type:"solid",icon:"plus",iconClass:"me-1"}),"Upload New Products"]})]}):(0,E.jsx)(E.Fragment,{})]}),(0,E.jsxs)("div",{className:"position-relative",children:[(0,E.jsx)(m.A.Group,{className:"mb-3",children:(0,E.jsx)(m.A.Control,{id:"search_pro_",className:r?"is-invalid":"",placeholder:"Search with multiple tags",onChange:this.product_tags_search,value:i,autoComplete:"off"})}),n&&s?(0,E.jsx)(x.A.Menu,{show:!0,className:"w-100",children:s.map(((e,t)=>(0,E.jsx)(x.A.Item,{className:"f-center overflow-hidden",onClick:()=>this.getData_bySelected_Tag(e),children:(0,E.jsx)("p",{className:"fs-10 text-muted text-ellipsis mb-0",children:e})},"prd_tags_".concat(t))))}):""]}),(0,E.jsx)("div",{className:"mb-3 mb-xl-4",children:(0,E.jsx)("div",{className:"tags-group d-flex align-items-center flex-wrap overflow-hidden w-100",children:t&&t.length>0?t.map(((e,t)=>(0,E.jsxs)(c.A,{className:"me-1 mb-1 px-3 py-2 f-center bg-secondary overflow-hidden",children:[(0,E.jsx)("span",{className:" text-break text-wrap text-start",children:e}),(0,E.jsx)(v.A,{variant:"link",size:"sm",className:"p-0 ms-1 text-gray-800",onClick:()=>this.removeTag(e),children:(0,E.jsx)(p.gc,{type:"solid",icon:"xmark"})})]},e.toString()))):""})}),w.postproduct&&w.postproduct.length>0?w.postproduct.map(((e,t)=>{var s;return(0,E.jsxs)("div",{className:"p-2 box-shadow mb-2 rounded-2 d-flex align-items-center position-relative border",children:[(0,E.jsx)("span",{className:"position-absolute start-0 translate-middle h-18px w-18px rounded-circle f-center bg-dark text-gray-100 top-50 fs-10 fw-medium",style:{zIndex:1},children:t+1}),(0,E.jsxs)("div",{className:"d-flex flex-grow-1 align-items-center overflow-hidden",style:{maxWidth:"calc(100% - 32px)"},children:[(0,E.jsx)("div",{className:"w-44px d-flex flex-shrink-0 me-2",children:(0,E.jsx)(j.A,{mediaClass:"position-relative overflow-hidden w-100 border rounded-1",size:100,height:44,width:44,url:null===e||void 0===e||null===(s=e.product)||void 0===s?void 0:s.product_image,alt:"",isCover:!0})}),(0,E.jsxs)("div",{className:"d-flex align-items-start flex-column overflow-hidden w-100",children:[(0,E.jsx)("p",{className:"fs-9 fw-medium mb-1 text-wrap text-break",children:null===e||void 0===e?void 0:e.product.product_title}),(0,E.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[0!=e.product.product_discount&&e.product.product_discount!=e.product.product_price?(0,E.jsxs)("span",{className:"fs-8 fw-bold me-2",children:[e.product.discount_currency_symbol,Math.trunc(100*e.product.product_discount)/100]}):(0,E.jsxs)("span",{className:"fs-8 fw-bold me-2",children:[e.product.discount_currency_symbol,Math.trunc(100*e.product.product_price)/100]}),e.product.product_discount&&e.product.product_discount>0?(0,E.jsxs)("span",{className:"fs-8 text-muted",style:{textDecoration:"line-through"},children:[e.product.discount_currency_symbol,e.product.product_discount>0?e.product.product_price:""]}):""]})]})]}),(0,E.jsx)(v.A,{variant:"icon",size:"sm",className:"btn-active-danger",onClick:()=>this.removeTaggProduct(e.product.product_sku,e.product.id,e.post_id),children:(0,E.jsx)(p.gc,{type:"solid",icon:"trash-can"})})]},t)})):(0,E.jsxs)("div",{className:"f-center py-3 text-gray-300 mb-10",children:[(0,E.jsx)("span",{className:"h-40px w-40px rounded-circle me-2 border f-center fs-4",children:(0,E.jsx)(p.gc,{type:"light",icon:"bag-shopping"})}),"No Products Tagged Yet"]}),(0,E.jsx)("div",{})]})})}}const S=(0,i.Ng)((e=>{var t,s,n,i;return{total_pages:null===(t=e.products)||void 0===t?void 0:t.total_pages,searchProducts:null===(s=e.products)||void 0===s?void 0:s.searchProducts,loadingTagProduct:null===(n=e.products)||void 0===n?void 0:n.loadingTagProduct,moderation:e.moderation,ctaData:null===(i=e.ctaData)||void 0===i?void 0:i.data,authorized:e.authorized}}),(e=>({SEARCH_PRODUCTS_TEXT:t=>e({type:b.kbX,payload:t}),ACTION_PRODUCT_LIST_FORTAG:(t,s,n,i,a,r,o)=>e((0,w.O0)(t,s,n,i,a,r,o)),TAG_PRODUCT_ACTION:(t,s,n,i,a,r)=>e((0,f.gw)(t,s,n,i,a,r)),REMOVE_TAGGED_PRODUCT_ACTION:(t,s,n)=>e((0,f.PB)(t,s,n)),getUserInfo_afterChanges:()=>e((0,N.AW)()),fetchProductList:(t,s,n,i,a,r,o)=>e((0,w.EU)(t,s,n,i,a,r,o))})))(A);var _=s(43523);class C extends n.Component{constructor(e){super(e),this.onClickToRemoveTag=e=>t=>{let{tagString:s}=this.state;s.splice(e,1),this.setState({tagString:s,changesStatus:!0})},this.addTagButtonValue=()=>{this.setState({addTagButton:!1})},this.setInitialState=()=>{const{modalData:e}=this.props;e&&Object.keys(e).length>0&&(e.tags&&String(e.tags).length>0?this.setState({tagString:String(e.tags).split(","),content:e.postcontent}):this.setState({tagString:[],content:e.postcontent})),this.setState({textAreaHeight:20*(this.state.content.length/35).toFixed()})},this.handleOutsideClick=e=>{this.editorEnable&&this.editorEnable.current&&!this.editorEnable.current.contains(e.target)&&this.editorEnableButton&&!this.editorEnableButton.current.contains(e.target)&&this.editorEnableButton&&null!==!this.editorEnableButton.current.contains(e.target)?this.setState({descriptionEditable:!1}):this.editorEnable&&this.editorEnable.current&&!this.editorEnable.current.contains(e.target)&&null!==this.editorEnable.current.contains(e.target)&&this.setState({descriptionEditable:!0})},this.onClickNewAddTag=e=>{const{newTag:t,tagString:s}=this.state,{modalData:n}=this.props;"Enter"!==e.key&&13!==e.keyCode||t&&String(t).length>=3&&(s.push(t),this.setState({tagString:s,newTag:"",selectedOption:null,changesStatus:!0,addTagButton:!0}))},this.addNewTag=e=>this.setState({newTag:e.target.value,changesStatus:!0}),this.onClickToSave=e=>{const{tagString:t}=this.state,{modalData:s}=this.props;t&&t.length},this.setNewTags=e=>{e&&e.value?this.setState({newTag:e.value,selectedOption:e}):this.setState({newTag:"",selectedOption:null})},this.onChangeContent=e=>{this.setState({content:e.target.value,changesStatus:!0})},this.onChangeTag=e=>{this.setState({newTag:e.target.value})},this.onSaveChanges=e=>{const{modalData:t}=this.props,{tagString:s,content:n}=this.state;String(t.collection),String(t.collection),String(t.id),t.postFile,s.join(",")},this.onFilterWithTag=e=>t=>{const{modalCallback:s,tagsFilter:n}=this.props;n(e),setTimeout((()=>s(!1)),200)},this.contentHeight=e=>{var t=e.length/35,s=Math.round(t);return t>=s?20*(s+1)+20:20*s+20},this.state={descriptionEditable:!1,addTagButton:!0,tagString:[],newTag:"",listTags:[],selectedOption:null,content:"",changesStatus:!1},this.editorEnable=n.createRef(),this.editorEnableButton=n.createRef()}componentWillMount(){const{tagList:e}=this.props;if(e&&e.length>0){var t=[];e.map((e=>{t.push({value:e,label:e})})),this.setState({listTags:t})}}descriptionToggle(){this.setState({descriptionEditable:!0})}componentDidMount(){document.addEventListener("click",this.handleOutsideClick),this.setInitialState()}componentDidUpdate(e){e.modalData!==this.props.modalData&&this.setInitialState()}render(){const{descriptionEditable:e,addTagButton:t,tagString:s,content:n,changesStatus:i,newTag:m}=this.state,{modalData:x,networkData:g,collections:v,isTrash:j,changeHotspotStatus:w,enableHotspot:f}=this.props,b=18==x.networkId?2:x.networkId;g&&g.length>0&&g.filter((e=>e.id==b));return(0,E.jsxs)(r.A.Container,{id:"modal_aside_",defaultActiveKey:"tag_product",children:[(0,E.jsxs)(o.A,{variant:"underline",className:"border-bottom",children:[(0,E.jsx)(o.A.Item,{children:(0,E.jsxs)(o.A.Link,{className:"ms-3 py-3",eventKey:"tag_product",children:[(0,E.jsx)(p.gc,{type:"solid",icon:"bag-shopping",iconClass:"me-1 fs-6"}),"Tag Products"]})}),(0,E.jsx)(o.A.Item,{children:(0,E.jsxs)(o.A.Link,{className:"ms-3 py-3",eventKey:"details",children:[(0,E.jsx)(p.gc,{type:"solid",icon:"image",iconClass:"me-1 fs-6"}),"Details"]})})]}),(0,E.jsxs)(r.A.Content,{className:"m_sideCont_scroll_",children:[(0,E.jsx)(r.A.Pane,{eventKey:"tag_product",children:(0,E.jsx)(S,{modalData:x,changeHotspotStatus:w,enableHotspot:f})}),(0,E.jsx)(r.A.Pane,{eventKey:"details",children:(0,E.jsxs)("div",{className:"position-relative",children:[(0,E.jsx)("div",{className:"px-4 mt-3",children:(0,E.jsx)(l.A,{className:"table-borderless mb-0",children:(0,E.jsxs)("tbody",{children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Author"})}),(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,E.jsxs)("div",{className:"d-flex align-items-center mr-2 cursor-pointer",onClick:x.link?e=>window.open(x.link,"_blank"):null,children:[(0,E.jsx)(u.A,{className:"symbol symbol-34 rounded-circle flex-shrink-0 me-2 overflow-hidden",imageSize:38,symbolClass:"symbol-label fs-8",name:x.name,profileUrl:(0,h.G9)(x.picture),networkId:x.networkId?x.networkId:0}),(0,E.jsxs)("div",{children:[(0,E.jsx)("p",{className:" mb-0 text-break fw-bold",children:x.name}),(0,E.jsxs)("small",{className:"mb-0 text-muted text-break",children:["@",x.username]})]})]})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Network"})}),(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,E.jsxs)("div",{className:"d-flex align-items-center",children:[(0,E.jsx)("span",{className:"me-2 d-flex",children:0!=x.networkId?(0,E.jsx)("img",{className:"img-fluid",src:(0,p.pc)("media/icons/social-icons/".concat((0,h.EC)(x.networkId),".svg")),height:18,width:18,alt:x.networkId?x.networkId:0}):""}),(0,E.jsx)("span",{className:"",children:0==x.networkId?"":(0,h.Oi)(x.networkId)})]})})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Feed name"})}),(0,E.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[x.feedname&&32==x.networkId?(0,E.jsx)("img",{className:"img-fluid me-2",src:(0,p.pc)("media/icons/social-icons/".concat((0,h.EC)(32),".svg")),height:18,width:18,alt:"Chrome"}):null,(0,E.jsx)("span",{className:" text-break",children:x.feedname?(0,a.Ay)(x.feedname):0==x.networkId?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("img",{className:"img-fluid",src:(0,p.pc)("media/icons/social-icons/".concat((0,h.EC)(0),".svg")),height:18,width:18,alt:0})," Manual Upload "]}):"--"})]})]}),x.ugcstatus?(0,E.jsx)(E.Fragment,{children:2==x.ugcstatus?(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,E.jsxs)("div",{className:"d-flex align-items-center flex-wrap text-success",children:[(0,E.jsx)("span",{className:"fs-6 me-1",children:(0,E.jsx)(p.gc,{type:"solid",icon:"user-check"})}),(0,E.jsx)("span",{className:"fw-medium",children:"Request Approved"})]})})]}):1==x.ugcstatus?(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,E.jsxs)("div",{className:"d-flex align-items-center flex-wrap text-warning",children:[(0,E.jsx)("span",{className:"fs-6 me-1",children:(0,E.jsx)(p.gc,{type:"solid",icon:"user-clock"})}),(0,E.jsx)("span",{className:"fw-medium",children:"Request Pending"})]})})]}):3==x.ugcstatus?(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Rights"})}),(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,E.jsxs)("div",{className:"d-flex align-items-center flex-wrap text-danger",children:[(0,E.jsx)("span",{className:"fs-6 me-1",children:(0,E.jsx)(p.gc,{type:"solid",icon:"user-xmark"})}),(0,E.jsx)("span",{className:"fw-medium",children:"Request Rejected"})]})})]}):null}):null,parseInt(x.sentiment)>0?(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Post Sentiment"})}),(0,E.jsxs)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:[" ",(0,E.jsx)("span",{className:" text-break",children:(0,E.jsxs)("span",{className:"d-flex fs-8  text-break",children:[(0,E.jsx)("div",{className:"h-16px w-16px me-1 d-flex",children:(0,E.jsx)("img",{className:"img-fluid",src:(0,p.pc)("media/icons/emoji/emoji".concat((0,h.Hp)(x.sentiment).item,".svg")),height:16,width:16,alt:""})}),(0,h.Hp)(x.sentiment).label]})})]})]}):null,!x.recommendation||2!=x.type&&4!=x.type?null:(0,E.jsxs)("tr",{children:[(0,E.jsxs)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:[(0,E.jsx)("p",{className:"text-muted mb-1 text-nowrap me-2",children:"Ai Recommendation "}),(0,E.jsx)(d.A,{className:"invert",src:(0,p.pc)("media/svg/trusense.svg"),height:26,width:110,fluid:!0})]}),(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,E.jsxs)("div",{className:"d-flex align-items-start",children:[(0,E.jsx)("div",{className:"h-12px w-12px rounded-circle d-flex flex-shrink-0 mt-1 ".concat(1==x.recommendation.type?"bg-success":2==x.recommendation.type?"bg-warning":3==x.recommendation.type?"bg-danger":null)}),(0,E.jsxs)("span",{className:" text-break ps-1",children:[x.recommendation.label," (",x.recommendation.score,"%)"]})]})})]}),x.rating>0&&1!=x.type?(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 min-w-100 w-25",children:(0,E.jsx)("span",{className:"text-muted",children:"Rating"})}),(0,E.jsx)("td",{className:"py-xxl-2 py-1 px-0 w-75",children:(0,E.jsx)("div",{className:"d-flex justify-content-start",children:(0,E.jsx)(_.A,{className:"fs-6",iconClass:"me-1",rating:x.rating})})})]}):null]})})}),s&&s.length>0?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("h3",{className:"border-bottom p-4 fs-8",children:(0,E.jsx)("span",{className:"fw-medium",children:"Tag"})}),(0,E.jsx)("div",{className:"tags-group d-flex align-items-center flex-wrap mb-2",children:(0,E.jsx)("div",{className:"px-4 mt-3",children:s.map(((e,t)=>e&&String(e).length>0?(0,E.jsx)(c.A,{bg:"",className:"".concat(99999==t?"border-gradient":"border"),children:(0,E.jsx)("span",{className:"",children:e})},t):null))})})]}):null,(0,E.jsx)("h3",{className:"border-bottom p-4 fs-8",children:(0,E.jsx)("span",{className:"fw-medium",children:"Description"})}),(0,E.jsx)("div",{className:"px-4 mb-3",children:(0,E.jsx)("div",{className:"d-flex flex-grow-1 pe-2",children:(0,E.jsx)("p",{style:{whiteSpace:"pre-line",wordBreak:"break-word"},children:(0,a.Ay)(n)})})})]})})]})]})}}const k=(0,i.Ng)((e=>{var t,s;return{networkData:null===e||void 0===e||null===(t=e.networks)||void 0===t?void 0:t.networkData,tagList:null===e||void 0===e||null===(s=e.tags)||void 0===s?void 0:s.tagList}}),(e=>({})))(C)},78696:(e,t,s)=>{s.d(t,{A:()=>m,J:()=>p});var n=s(9950),i=s(5669),a=s(1932),r=s(5596),o=s(44414);const l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],d=["activeKey","getControlledId","getControllerId"],c=["as"];function h(e,t){if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}function p(e){let{active:t,eventKey:s,mountOnEnter:r,transition:o,unmountOnExit:c,role:p="tabpanel",onEnter:u,onEntering:m,onEntered:x,onExit:g,onExiting:v,onExited:j}=e,w=h(e,l);const f=(0,n.useContext)(i.A);if(!f)return[Object.assign({},w,{role:p}),{eventKey:s,isActive:t,mountOnEnter:r,transition:o,unmountOnExit:c,onEnter:u,onEntering:m,onEntered:x,onExit:g,onExiting:v,onExited:j}];const{activeKey:b,getControlledId:N,getControllerId:y}=f,T=h(f,d),E=(0,a.u)(s);return[Object.assign({},w,{role:p,id:N(s),"aria-labelledby":y(s)}),{eventKey:s,isActive:null==t&&null!=E?(0,a.u)(b)===E:t,transition:o||T.transition,mountOnEnter:null!=r?r:T.mountOnEnter,unmountOnExit:null!=c?c:T.unmountOnExit,onEnter:u,onEntering:m,onEntered:x,onExit:g,onExiting:v,onExited:j}]}const u=n.forwardRef(((e,t)=>{let{as:s="div"}=e,n=h(e,c);const[l,{isActive:d,onEnter:u,onEntering:m,onEntered:x,onExit:g,onExiting:v,onExited:j,mountOnEnter:w,unmountOnExit:f,transition:b=r.A}]=p(n);return(0,o.jsx)(i.A.Provider,{value:null,children:(0,o.jsx)(a.A.Provider,{value:null,children:(0,o.jsx)(b,{in:d,onEnter:u,onEntering:m,onEntered:x,onExit:g,onExiting:v,onExited:j,mountOnEnter:w,unmountOnExit:f,children:(0,o.jsx)(s,Object.assign({},l,{ref:t,hidden:!d,"aria-hidden":!d}))})})})}));u.displayName="TabPanel";const m=u},41615:(e,t,s)=>{s.d(t,{A:()=>h});var n=s(9950),i=s(56643),a=s(17743),r=s(5669),o=s(1932),l=s(78696),d=s(44414);const c=e=>{const{id:t,generateChildId:s,onSelect:l,activeKey:c,defaultActiveKey:h,transition:p,mountOnEnter:u,unmountOnExit:m,children:x}=e,[g,v]=(0,i.iC)(c,h,l),j=(0,a.Cc)(t),w=(0,n.useMemo)((()=>s||((e,t)=>j?"".concat(j,"-").concat(t,"-").concat(e):null)),[j,s]),f=(0,n.useMemo)((()=>({onSelect:v,activeKey:g,transition:p,mountOnEnter:u||!1,unmountOnExit:m||!1,getControlledId:e=>w(e,"tabpane"),getControllerId:e=>w(e,"tab")})),[v,g,p,u,m,w]);return(0,d.jsx)(r.A.Provider,{value:f,children:(0,d.jsx)(o.A.Provider,{value:v||null,children:x})})};c.Panel=l.A;const h=c},80409:(e,t,s)=>{s.d(t,{A:()=>m});var n=s(11942),i=s.n(n),a=(s(9950),s(41615)),r=s(20262),o=s(44414);const l=e=>{let{transition:t,...s}=e;return(0,o.jsx)(a.A,{...s,transition:(0,r.A)(t)})};l.displayName="TabContainer";const d=l;var c=s(5221),h=s(53960);const p={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},u=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};u.propTypes=p;const m=Object.assign(u,{Container:d,Content:c.A,Pane:h.A})},5221:(e,t,s)=>{s.d(t,{A:()=>d});var n=s(9950),i=s(48738),a=s.n(i),r=s(44089),o=s(44414);const l=n.forwardRef(((e,t)=>{let{className:s,bsPrefix:n,as:i="div",...l}=e;return n=(0,r.oU)(n,"tab-content"),(0,o.jsx)(i,{ref:t,className:a()(s,n),...l})}));l.displayName="TabContent";const d=l},53960:(e,t,s)=>{s.d(t,{A:()=>m});var n=s(48738),i=s.n(n),a=s(9950),r=s(1932),o=s(5669),l=s(78696),d=s(44089),c=s(30095),h=s(20262),p=s(44414);const u=a.forwardRef(((e,t)=>{let{bsPrefix:s,transition:n,...a}=e;const[{className:u,as:m="div",...x},{isActive:g,onEnter:v,onEntering:j,onEntered:w,onExit:f,onExiting:b,onExited:N,mountOnEnter:y,unmountOnExit:T,transition:E=c.A}]=(0,l.J)({...a,transition:(0,h.A)(n)}),A=(0,d.oU)(s,"tab-pane");return(0,p.jsx)(o.A.Provider,{value:null,children:(0,p.jsx)(r.A.Provider,{value:null,children:(0,p.jsx)(E,{in:g,onEnter:v,onEntering:j,onEntered:w,onExit:f,onExiting:b,onExited:N,mountOnEnter:y,unmountOnExit:T,children:(0,p.jsx)(m,{...x,ref:t,className:i()(u,A,g&&"active")})})})})}));u.displayName="TabPane";const m=u},20262:(e,t,s)=>{s.d(t,{A:()=>a});var n=s(5596),i=s(30095);function a(e){return"boolean"===typeof e?e?i.A:n.A:e}}}]);