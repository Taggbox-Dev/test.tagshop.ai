"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[8558],{68829:(e,s,l)=>{l.d(s,{A:()=>o});var t=l(9950),r=l(86781),a=l(68459),i=l(97937),n=l(44414);class c extends t.Component{render(){const{title:e,desc:s,method:l,methodTitle:t,subTitle:c,subMethod:o}=this.props;return(0,n.jsxs)("div",{className:"f-center py-4 h-100 w-100 flex-column",style:{minHeight:200},children:[(0,n.jsx)("div",{className:"d-flex flex-column align-items-center w-100",children:(0,n.jsx)(r.A,{className:"mb-2 text-center justify-content-center gx-0 w-100",children:(0,n.jsxs)(a.A,{xxl:8,xl:10,children:[(0,n.jsx)("h4",{className:"text-gray-dark fw-semibold text-center",children:e}),s?(0,n.jsx)("p",{children:s}):null]})})}),l?(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)(i.A,{variant:"primary",className:"m-2 btn-min-w",onClick:()=>l(),children:t}),c?(0,n.jsx)(i.A,{variant:"secondary",className:"m-2 btn-min-w",onClick:()=>o(),children:c}):null]}):null]})}}const o=c},28558:(e,s,l)=>{l.r(s),l.d(s,{default:()=>v});var t=l(59051),r=l.n(t),a=l(5216),i=l(21432),n=l(95942),c=l(51960),o=l(4342),d=l(42074),m=l(73878),x=l(9950),h=l(54810),p=l(68829),b=l(52867),j=l(44414);const g=()=>(0,b.OZ)(5).map(((e,s)=>(0,j.jsxs)("div",{className:"d-flex align-items-center px-3 py-2 btn-active-light cursor-pointer",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center me-0 me-sm-2 mb-3 mb-sm-0 flex-grow-1 justify-content-between w-100 cursor-pointer",children:[(0,j.jsx)("div",{className:"sk_img symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden"}),(0,j.jsxs)("div",{className:"overflow-hidden w-100 pe-2",children:[(0,j.jsx)("p",{className:"sk_line sk_line_100 sk_line_height_10 mb-2",style:{maxWidth:130}}),(0,j.jsx)("span",{className:"sk_line sk_line_50 sk_line_height_8 mb-0 d-block",style:{maxWidth:100}})]})]}),(0,j.jsxs)("div",{className:"f-between flex-grow-1 w-100",children:[(0,j.jsx)("div",{className:"d-flex align-items-center flex-shrink-0",children:(0,j.jsx)("p",{className:"sk_rect h-20px w-20px my-2"})}),(0,j.jsx)("p",{className:" border fs-8 rounded-4 min-w-30px badge bg-secondary",children:"0"})]})]},s)));var f=l(1391);class w extends x.Component{constructor(){super(...arguments),this.onErrorImageUpdate=e=>{e.target.src=h.xb}}render(){const{topPost:e,loader:s}=this.props;return(0,j.jsxs)(a.A,{className:"card-stretch gutter-b",children:[(0,j.jsxs)("div",{className:"f-between p-3 py-2 py-sm-3 p-sm-5 border-bottom",children:[(0,j.jsxs)("div",{className:"h5  mb-0",children:["Top Performing Posts",(0,j.jsx)("span",{className:"ms-2",children:(0,j.jsx)(i.A,{placement:"top",overlay:(0,j.jsx)(n.A,{children:"Your most engaging posts."}),children:(0,j.jsx)("span",{children:(0,j.jsx)(h.gc,{type:"solid",icon:"circle-info",iconClass:"text-muted"})})})})]}),(0,j.jsx)("span",{className:"fs-8 fw-semibold",children:(null===e||void 0===e?void 0:e.length)>0?"CTA Clicks":""})]}),(0,j.jsx)(a.A.Body,{children:(0,j.jsx)("div",{className:"pe-2",style:{height:300,overflowX:"auto"},children:s?(0,j.jsx)(g,{}):(null===e||void 0===e?void 0:e.length)>0?e.map(((e,s)=>(0,j.jsxs)(d.N_,{to:"/analytics#website",onClick:()=>localStorage.setItem("left-tabs-example-tabpane-4",1),className:"d-flex align-items-center px-3 py-2 btn-active-light cursor-pointer text-body active-primary",children:[(0,j.jsx)("div",{className:"d-flex align-items-center me-0 me-sm-2 mb-3 mb-sm-0 flex-grow-1 justify-content-between w-100 cursor-pointer",children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)("div",{className:"symbol symbol-50 d-flex align-items-center justify-content-center flex-shrink-0 me-2",children:(0,j.jsx)("img",{className:"object-center-cover",src:e.postFileNew,height:44,width:44,alt:"",onError:this.onErrorImageUpdate})}),(0,j.jsxs)("div",{className:"pe-2 w-100 overflow-hidden",children:[(0,j.jsx)("p",{className:" mb-0",children:(0,j.jsx)("strong",{className:"text-break text-ellipsis d-block",children:e.name})}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsxs)("small",{className:"mb-0 text-gray-600 fw-semibold text-break",children:["@",e.username]}),(0,j.jsx)("span",{className:"h-4px w-4px rounded-circle mx-1 d-flex flex-shrink-0",style:{backgroundColor:"var(--bs-gray-600)"}}),(0,j.jsx)("small",{className:"mb-0 text-gray-600 fw-semibold text-break",children:r()(new Date(1e3*e.createdAt)).fromNow()})]})]})]})}),(0,j.jsxs)("div",{className:"f-between flex-grow-1 w-100",children:[(0,j.jsx)("span",{className:"d-flex align-items-center h-20px w-20px flex-shrink-0",children:(0,j.jsx)(i.A,{placement:"top",overlay:(0,j.jsx)(n.A,{children:(0,b.Oi)(1)}),children:(0,j.jsx)(c.A,{src:(0,h.pc)("media/icons/social-icons/".concat((0,b.EC)(1),".svg")),height:20,width:20,alt:(0,b.Oi)(1),"data-invert":(0,b.Oi)(1),fluid:!0})})}),(0,j.jsx)(o.A,{bg:"secondary",className:" border fs-8 rounded-4 min-w-30px",children:null===e||void 0===e?void 0:e.ctaClick})]})]},s))):(0,j.jsx)(p.A,{title:"Find your Creators",desc:"Nothing to see? Partner with top UGC creators with our Creator Collaborator program.",methodTitle:"Collab with Creators",method:()=>this.props.navigate("/creators")})})})]})}}const v=(0,m.Ng)((e=>({topPost:e.dashboardData.top_performing_post,loader:e.dashboardData.top_performing_post_loader})),null)((0,f.A)(w))}}]);