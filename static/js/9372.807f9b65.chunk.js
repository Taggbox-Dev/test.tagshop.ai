"use strict";(self.webpackChunkreact1=self.webpackChunkreact1||[]).push([[9372],{39812:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(44268),c=a(44414);const r=e=>(0,c.jsxs)(t.A,{size:"xl",className:"video_modal rounded-0",show:e.show,onHide:e.onClose,centered:!0,children:[(0,c.jsx)(t.A.Header,{className:"btn-close-light",closeButton:!0}),(0,c.jsx)(t.A.Body,{className:"p-0",children:(0,c.jsx)("div",{className:"position-relative",style:{paddingBottom:"55%"},children:(0,c.jsx)("div",{className:"position-absolute start-1 top-0 video_play w-100 h-100",children:(0,c.jsx)("iframe",{className:"w-100 h-100",src:e.link,width:"640",height:"355",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0})})})})]})},79372:(e,s,a)=>{a.r(s),a.d(s,{default:()=>D});var t=a(9950),c=a(45358),r=a(80409),l=a(5216),n=a(98361),o=a(97937),i=a(42074),d=a(8966),m=a(65513),p=a(54810),x=a(44414);function h(e){const{stepsLeft:s,markComplete:a,stepData:t}=e;return(0,x.jsx)(d.A,{defaultActiveKey:"0",children:(0,x.jsxs)(d.A.Item,{eventKey:"0",children:[(0,x.jsxs)(d.A.Header,{children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{icon:"rectangle-vertical-history",iconClass:"me-2 display-5"})}),"Create Your Gallery"]}),s("gallery")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("gallery")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("gallery")),label:"".concat(33.3*(3-s("gallery")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"Connect your social account to source content from multiple platforms, curate your feed and make it shoppable."}),s("gallery")?(0,x.jsxs)(o.A,{variant:"secondary",size:"sm",className:"text-nowrap f-center",onClick:()=>a("gallery"),children:[(0,x.jsx)(p.gc,{icon:"circle-check",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.FEED_CREATED?"border-primary":""),to:"/content/moderation/".concat(localStorage.getItem("wallId")?localStorage.getItem("wallId"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.FEED_CREATED?"border-success":""),children:(0,x.jsx)("span",{className:t.FEED_CREATED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-hashtag fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Connect any social media platform and connection type (#, @, etc) to source content in your gallery created by default."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.PRODUCT_ADDED?"border-primary":""),to:"/content/products",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.PRODUCT_ADDED?"border-success":""),children:(0,x.jsx)("span",{className:t.PRODUCT_ADDED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-arrows-rotate fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Tag Products either manually or by syncing the Product catalogue to make them shoppable."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.APPS_MORE_USED?"border-primary":""),to:"/more-apps",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.APPS_MORE_USED?"border-success":""),children:(0,x.jsx)("span",{className:t.APPS_MORE_USED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-square-user fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"To update your gallery with features like Auto-Moderation, Profanity Filter, etc., go to \u2018Apps & More\u2019 from the dropdown."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]})})}class u extends t.Component{constructor(){super(...arguments),this.state={activeTab:"0"},this.checkActiveTab=e=>{let s=e.WEBSITE_VISITED&&e.FEED_CUSTOMIZED&&e.CUSTOMIZATION_SAVED?e.EMAIL_VISITED&&e.EMAIL_PUBLISHED&&e.EMAIL_PLATFORM_SELECTED?e.SHOPON_VISITED&&e.SHOPON_BIO_ADDED?"-1":"2":"1":"0";"-1"==s&&this.props.markComplete("shopon"),this.setState({activeTab:s})}}componentWillReceiveProps(e){JSON.stringify(this.props.stepData)!=JSON.stringify(e.stepData)&&this.checkActiveTab(e.stepData)}componentWillMount(){this.checkActiveTab(this.props.stepData)}render(){const{activeTab:e}=this.state,{stepsLeft:s,markComplete:a,stepData:t,checkPublishStep:c}=this.props;return(0,x.jsxs)(d.A,{activeKey:e,onSelect:e=>this.setState({activeTab:e}),children:[(0,x.jsxs)(d.A.Item,{eventKey:"0",children:[(0,x.jsxs)(d.A.Header,{className:"overflow-hidden",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{type:"light",icon:"browser",iconClass:"me-2 display-5"})}),"Website"]}),s("website")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("website")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("website")),label:"".concat(33.3*(3-s("website")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"Customize, preview and publish your shoppable gallery across your eCommerce store: Home page, product and category pages or review page."}),s("website")?(0,x.jsxs)(o.A,{variant:"secondary",size:"sm",className:"text-nowrap",onClick:()=>a("website"),children:[(0,x.jsx)(p.gc,{icon:"check-circle",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.WEBSITE_VISITED?"border-primary":""),to:"/website/publish/".concat(localStorage.getItem("website_id")),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.WEBSITE_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:t.WEBSITE_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-image fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Choose the gallery to display on your eCommerce website"})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.FEED_CUSTOMIZED?"border-primary":""),to:"/website/publish/".concat(localStorage.getItem("website_id")),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.FEED_CUSTOMIZED?"border-success":""),children:(0,x.jsx)("span",{className:t.FEED_CUSTOMIZED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-browser fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Next, customize your gallery by applying themes, and CTA buttons."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.CUSTOMIZATION_SAVED?"border-primary":""),to:"".concat(t.WEBSITE_VISITED&&t.FEED_CUSTOMIZED?"/website/publish/".concat(localStorage.getItem("website_id")):""),onClick:()=>{c("website")},children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.CUSTOMIZATION_SAVED?"border-success":""),children:(0,x.jsx)("span",{className:t.CUSTOMIZATION_SAVED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-rocket-launch fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Save changes and click on \u2018Generate Code.\u2019 Choose where you want to display the gallery."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]}),(0,x.jsxs)(d.A.Item,{eventKey:"1",children:[(0,x.jsxs)(d.A.Header,{className:"overflow-hidden",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{type:"light",icon:"bullhorn",iconClass:"me-2 display-5"})}),"Email Campaigns"]}),s("email")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("email")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("email")),label:"".concat(33.3*(3-s("email")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"From customization to publishing, host email campaigns in a few simple steps."}),s("email")?(0,x.jsxs)(o.A,{variant:"secondary",size:"sm",disabled:!!s("website"),className:"text-nowrap",onClick:()=>a("email"),children:[(0,x.jsx)(p.gc,{icon:"circle-check",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.EMAIL_VISITED?"border-primary":""),to:"/email-campaign/publish/".concat(localStorage.getItem("emailCamp_id")?localStorage.getItem("emailCamp_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.EMAIL_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:t.EMAIL_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-image fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Select the content gallery you want to showcase in your emails."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.EMAIL_PUBLISHED?"border-primary":""),to:"/email-campaign/publish/".concat(localStorage.getItem("emailCamp_id")?localStorage.getItem("emailCamp_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.EMAIL_PUBLISHED?"border-success":""),children:(0,x.jsx)("span",{className:t.EMAIL_PUBLISHED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-rocket-launch fs-2"})})}),(0,x.jsxs)("p",{className:"mb-0 text-dark fw-medium",children:["Choose a layout for your emails campaign ",">",' select the content you want to display and "Publish."']})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.EMAIL_PLATFORM_SELECTED?"border-primary":""),to:"".concat(t.EMAIL_VISITED&&t.EMAIL_PUBLISHED?"/email-campaign/publish/".concat(localStorage.getItem("emailCamp_id")?localStorage.getItem("emailCamp_id"):""):""),onClick:()=>c("email"),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.EMAIL_PLATFORM_SELECTED?"border-success":""),children:(0,x.jsx)("span",{className:t.EMAIL_PLATFORM_SELECTED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-envelope fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Now, select your preferred email marketing platform and follow the steps provided."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]}),(0,x.jsxs)(d.A.Item,{eventKey:"2",children:[(0,x.jsxs)(d.A.Header,{className:"overflow-hidden",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between w-100 flex-wrap",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center text-nowrap me-10",children:[(0,x.jsx)("span",{className:"text-primary",children:(0,x.jsx)(p.gc,{type:"light",icon:"link",iconClass:"me-2 display-5"})}),"Shopon.Bio"]}),s("shopon")?(0,x.jsxs)("p",{className:"text-gray-600 mb-0 f-center text-nowrap",children:[(0,x.jsx)("span",{className:"fw-bold me-1",children:"".concat(s("shopon")," Step Left")}),".",(0,x.jsx)("span",{className:"ms-1",children:"About 4 min."})]}):null]}),(0,x.jsx)(m.A,{className:"position-absolute bottom-0 start-0 w-100 rounded-0 h-2px",variant:"success",now:33.3*(3-s("shopon")),label:"".concat(33.3*(3-s("shopon")),"%"),visuallyHidden:!0})]}),(0,x.jsxs)(d.A.Body,{children:[(0,x.jsxs)("div",{className:"f-between mb-5 flex-wrap flex-sm-nowrap",children:[(0,x.jsx)("p",{className:"my-2 text-muted text-medium",children:"Customize, preview and publish your shoppable gallery across your eCommerce store: Home page, product and category pages or review page."}),s("shopon")?(0,x.jsxs)(o.A,{variant:"secondary",size:"sm",className:"text-nowrap",onClick:()=>a("shopon"),disabled:!(!s("website")&&!s("email")),children:[(0,x.jsx)(p.gc,{icon:"circle-check",iconClass:"me-1"}),"Mark as Complete"]}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)("div",{className:"d-flex flex-column",children:[(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.SHOPON_VISITED?"border-primary":""),to:"/shopon-bio/preview/".concat(localStorage.getItem("shopOn_id")?localStorage.getItem("shopOn_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.SHOPON_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:t.SHOPON_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-image fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Select the content gallery you want to collect content from."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.SHOPON_BIO_ADDED?"border-primary":""),to:"/shopon-bio/preview/".concat(localStorage.getItem("shopOn_id")?localStorage.getItem("shopOn_id"):""),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.SHOPON_BIO_ADDED?"border-success":""),children:(0,x.jsx)("span",{className:t.SHOPON_BIO_ADDED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-memo-circle-info fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Name your shop, add a small business description, and choose a unique username for your\xa0 Shopon Bio."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]}),(0,x.jsxs)(i.N_,{className:"p-2 f-between border rounded-1 w-100 mb-3 ".concat(t.SHOPON_BIO_ADDED&&t.SHOPON_VISITED?"border-primary":""),to:"".concat(t.SHOPON_BIO_ADDED&&t.SHOPON_VISITED?"/shopon-bio/preview/".concat(localStorage.getItem("shopOn_id")?localStorage.getItem("shopOn_id"):""):""),onClick:()=>c("shopon"),children:[(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("span",{className:"icon-primary h-32px w-32px rounded-1 border f-center me-2 ".concat(t.SHOPON_BIO_ADDED&&t.SHOPON_VISITED?"border-success":""),children:(0,x.jsx)("span",{className:t.SHOPON_BIO_ADDED&&t.SHOPON_VISITED?"text-success":"text-muted",children:(0,x.jsx)("i",{class:"fa-duotone fa-solid fa-copy fs-2"})})}),(0,x.jsx)("p",{className:"mb-0 text-dark fw-medium",children:"Copy the link, and voila! You can now add this shoppable link to your Instagram or TikTok bio."})]}),(0,x.jsx)("div",{className:"d-none d-sm-flex ms-3",children:(0,x.jsx)(p.gc,{icon:"arrow-right",iconClass:"fs-6 text-muted"})})]})]})]})]})]})}}var f=a(73878),b=a(47208),j=a(88749),N=a(52867),w=a(39812),E=a(1391);class g extends t.Component{constructor(){super(...arguments),this.state={showVideo:!1,activeTab:"",accordionTab:"0"},this.stepsLeft=e=>{const{stepData:s}=this.state;switch(e){case"gallery":var a=3;return s.FEED_CREATED&&(a-=1),s.PRODUCT_ADDED&&(a-=1),s.APPS_MORE_USED&&(a-=1),a;case"website":a=3;return s.WEBSITE_VISITED&&(a-=1),s.FEED_CUSTOMIZED&&(a-=1),s.CUSTOMIZATION_SAVED&&(a-=1),a;case"email":a=3;return s.EMAIL_VISITED&&(a-=1),s.EMAIL_PUBLISHED&&(a-=1),s.EMAIL_PLATFORM_SELECTED&&(a-=1),a;case"shopon":a=3;return s.SHOPON_VISITED&&(a-=1),s.SHOPON_BIO_ADDED&&(a-=1),s.SHOPON_LINK_COPIED&&(a-=1),a}},this.markComplete=e=>{switch(e){case"gallery":this.updateExtraData({FEED_CREATED:!0,CHOOSE_NETWORK:!0,PRODUCT_ADDED:!0,APPS_MORE_USED:!0},"gallery");break;case"website":this.updateExtraData({WEBSITE_VISITED:!0,FEED_CUSTOMIZED:!0,CUSTOMIZATION_SAVED:!0});break;case"email":this.updateExtraData({EMAIL_VISITED:!0,EMAIL_PUBLISHED:!0,EMAIL_PLATFORM_SELECTED:!0});break;case"shopon":this.updateExtraData({SHOPON_VISITED:!0,SHOPON_BIO_ADDED:!0,SHOPON_LINK_COPIED:!0},"shopon")}},this.checkPublishStep=e=>{const{stepData:s}=this.state;"website"==e&&(null!==s&&void 0!==s&&s.WEBSITE_VISITED&&null!==s&&void 0!==s&&s.FEED_CUSTOMIZED||(0,N.PZ)("To proceed, complete the second step")),"email"==e&&(null!==s&&void 0!==s&&s.EMAIL_VISITED&&null!==s&&void 0!==s&&s.EMAIL_PUBLISHED||(0,N.PZ)("To proceed, complete the second step")),"shopon"==e&&(null!==s&&void 0!==s&&s.SHOPON_VISITED&&null!==s&&void 0!==s&&s.SHOPON_BIO_ADDED||(0,N.PZ)("To proceed, complete the second step"))},this.updateExtraData=(e,s)=>{const{userData:a,updateUserInfo:t}=this.props;(null!==a&&void 0!==a&&a.user.extra_data?JSON.parse(null===a||void 0===a?void 0:a.user.extra_data):{})&&(0,b.oU)(e).then((e=>{t((()=>{s&&("gallery"==s?this.setState({activeTab:"publish"}):this.props.navigate("/home"))}))}))},this.onClose=e=>this.setState({showVideo:!this.state.showVideo}),this.handleAccordion=e=>this.setState({accordionTab:e})}componentDidMount(){var e;const{userData:s}=this.props;s&&this.setState({stepData:JSON.parse(null===s||void 0===s||null===(e=s.user)||void 0===e?void 0:e.extra_data)},(()=>this.setState({activeTab:0==this.stepsLeft("gallery")?"publish":"connect"})))}componentWillReceiveProps(e){const{userData:s}=e;var a;this.props.userData!=s&&this.setState({stepData:JSON.parse(null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.extra_data)},(()=>this.setState({activeTab:0==this.stepsLeft("gallery")?"publish":"connect"})))}render(){const{showVideo:e,stepData:s,activeTab:a,accordionTab:t}=this.state;return(0,x.jsx)("div",{className:"d-flex flex-column flex-column-fluid align-items-center justify-content-center w-100 flex-position-center full-content",children:s?(0,x.jsxs)(c.A,{className:"onboard_step",children:[(0,x.jsxs)("div",{className:"mb-4 text-center",children:[(0,x.jsx)("h3",{children:"Gettings Started with first Shoppable Gallery"}),(0,x.jsx)("p",{children:"Complete these simple steps to get  your account up and running."})]}),(0,x.jsx)(r.A.Container,{defaultActiveKey:0!=this.stepsLeft("gallery")?"connect":"publish",activeKey:a,onSelect:e=>this.setState({activeTab:e}),children:(0,x.jsxs)(l.A,{className:"border-0 overflow-hidden",children:[(0,x.jsxs)(n.A,{variant:"tabs",className:"mb-4 d-flex",children:[(0,x.jsx)(n.A.Item,{className:"w-50",children:(0,x.jsxs)(n.A.Link,{className:"f-center fw-bold border-0 border-end",style:{borderTopRightRadius:0},eventKey:"connect",children:[(0,x.jsx)("div",{className:"f-center rounded-circle w-22px h-22px border me-2 fs-9",children:"1"}),"Connect"]})}),(0,x.jsx)(n.A.Item,{className:"w-50",children:(0,x.jsxs)(n.A.Link,{className:"f-center fw-bold border-0",style:{borderTopLeftRadius:0},eventKey:"publish",children:[(0,x.jsx)("div",{className:"f-center rounded-circle w-22px h-22px border me-2 fs-9",children:"2"}),"Publish"]})})]}),(0,x.jsx)(l.A.Body,{children:(0,x.jsxs)(r.A.Content,{children:[(0,x.jsx)(r.A.Pane,{eventKey:"connect",children:(0,x.jsx)(h,{stepsLeft:this.stepsLeft,markComplete:this.markComplete,stepData:s})}),(0,x.jsx)(r.A.Pane,{eventKey:"publish",children:(0,x.jsx)(u,{stepsLeft:this.stepsLeft,markComplete:this.markComplete,stepData:s,checkPublishStep:this.checkPublishStep,handleAccordion:this.handleAccordion,accordionTab:t})})]})}),(0,x.jsx)(l.A.Footer,{className:"bg-light border-0",children:(0,x.jsxs)("div",{className:"f-center justify-content-between flex-column flex-lg-row",children:[(0,x.jsx)("p",{className:"my-3 text-muted text-center text-lg-start",children:"If you have any questions then you can schedule a demo with our experts or explore the support center to get the step by step guide for Tagshop"}),(0,x.jsxs)("div",{className:"flex-nowrap d-flex flex-shrink-0 ms-lg-3",children:[(0,x.jsx)(o.A,{variant:"primary",onClick:()=>this.setState({showVideo:!0}),children:"Example Gallery"}),(0,x.jsx)(i.N_,{className:"btn btn-outline-primary ms-3",to:"https://meetings.hubspot.com/pushpendra?uuid=b7ca8c9e-cdae-494d-b49b-a0fb477dddd6",target:"_blank",children:"Book A Demo"})]})]})})]})}),(0,x.jsx)(w.A,{show:e,link:"https://player.vimeo.com/video/977782960",onClose:this.onClose})]}):null})}}const D=(0,f.Ng)((e=>{var s,a;return{userData:null===(s=e.authorized)||void 0===s||null===(a=s.userData)||void 0===a?void 0:a.user_data}}),(e=>({updateUserInfo:s=>e((0,j.AW)(s))})))((0,E.A)(g))}}]);