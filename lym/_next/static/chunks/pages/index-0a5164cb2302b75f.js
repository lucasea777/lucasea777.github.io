(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4182:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4669)}])},4669:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var s=i(1527),a=i(5377),n=i.n(a),l=i(959),o=i(312),r=i(3855),c=i.n(r);class d extends l.Component{componentDidMount(){console.log("mounted");var e={YEAR_PLURAL:"A\xf1os",YEAR_SINGULAR:"A\xf1o",MONTH_PLURAL:"Minutos",MONTH_SINGULAR:"Minuto",WEEK_PLURAL:"Semanas",WEEK_SINGULAR:"Semana",DAY_PLURAL:"Dias",DAY_SINGULAR:"Dia",HOUR_PLURAL:"Horas",HOUR_SINGULAR:"Hora",MINUTE_PLURAL:"Minutos",MINUTE_SINGULAR:"Minuto",SECOND_PLURAL:"Segundos",SECOND_SINGULAR:"Segundo",MILLISECOND_PLURAL:"Milisegundos",MILLISECOND_SINGULAR:"Milisegundo"};for(var t in e)e.hasOwnProperty(t)&&o.Z.options.setConstant(t,e[t]);this.tickInstance=o.Z.DOM.create(this._tickRef.current,{value:this.props.value})}componentDidUpdate(){this.tickInstance&&(this.tickInstance.value=this.props.value)}componentWillUnmount(){console.log("unmount"),this.tickInstance&&o.Z.DOM.destroy(this._tickRef.current)}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{ref:this._tickRef,className:c().tick,"data-did-init":"handleTickInit",children:(0,s.jsx)("div",{id:"juancito","data-repeat":"true","data-layout":"horizontal fit","data-transform":"preset(d, h, m, s) -> delay",children:(0,s.jsxs)("div",{className:c()["tick-group"],children:[(0,s.jsx)("div",{"data-key":"value","data-repeat":"true","data-transform":"pad(00) -> split -> delay",children:(0,s.jsx)("span",{"data-view":"flip"})}),(0,s.jsx)("span",{"data-key":"label","data-view":"text",className:c()["tick-label"]})]})})})})}constructor(e){super(e),this._tickRef=l.createRef(),console.log("constructor")}}let p=()=>{let[e,t]=(0,l.useState)();return(0,l.useEffect)(()=>{console.log("once");let e=o.Z.count.down("2023-04-16T12:00:00-03:00");e.onupdate=function(e){t(e)}},[]),(0,s.jsx)("div",{className:"flex items-center flex-col w-full",children:(0,s.jsx)("div",{style:{width:"25rem"},children:(0,s.jsx)(d,{value:e})})})},m=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"invitacion",children:(0,s.jsx)("span",{className:"w-5/6 sm:w-2/3 lg:w-1/3 text-center",children:"Queremos celebrar junto a vos este momento tan especial para nosotros..."})})}),x=()=>{let e=["027","055","094","057","090","081"].map(e=>"/lym/img/gallery/".concat(e," Marilyn y Lucas - Previa.jpg"));return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridColumnGap:"5px",gridRowGap:"5px"},children:e.map(e=>(0,s.jsx)("img",{src:e},e))})})},h=e=>(0,s.jsx)("a",{href:"https://api.whatsapp.com/send?".concat(new URLSearchParams(e)),style:{fontFamily:"fangsong",paddingTop:"30px"},children:(0,s.jsxs)("button",{style:{padding:"15px",borderStyle:"solid",borderWidth:"1px",borderRadius:"8px",color:"black",backgroundColor:"#6cc751",borderColor:"#6cc751"},children:[(0,s.jsx)("img",{src:"/lym/whatsapp.svg",style:{width:"2rem",display:"inline-block",marginRight:"6px"}}),(0,s.jsx)("span",{children:"351 7041003"})]})}),g=e=>{let{cbu:t}=e,[i,a]=(0,l.useState)(!1),n=()=>{navigator.clipboard.writeText(t),a(!0),setTimeout(()=>{a(!1)},5e3)};return(0,s.jsx)("div",{style:{fontFamily:"fangsong",paddingTop:"30px"},children:(0,s.jsx)("button",{onClick:n,style:{padding:"15px",borderStyle:"solid",borderWidth:"1px",borderRadius:"8px",color:"black",borderColor:"black"},children:(0,s.jsx)("span",{children:i?"Copiado, graciass :D":"Copiar CBU"})})})},y=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:"\n  @keyframes arrow\n    {\n      0% {opacity:0}\n      40% {opacity:1}\n      80% {opacity:0}\n      100% {opacity:0}\n    }\n  "}),(0,s.jsx)("svg",{className:"arrow",style:{width:"60px",height:"72px",position:"absolute",left:"50%",marginLeft:"-30px",bottom:"20px",scale:"0.4",translate:"0 1.5rem",transitionProperty:"opacity",transitionDuration:"1s"},children:[void 0,void 0,void 0].map((e,t)=>(0,s.jsx)("path",{style:{stroke:"black",fill:"transparent",animation:"arrow 2s infinite",strokeWidth:"1px",animationDelay:(t-2)*.5+"s"},className:"a1",d:"M0 ".concat(20*t," L30 ").concat(20*t+32," L60 ").concat(20*t)},t))})]}),u=()=>{let e="L & M: <3 \xa1Nos Casamos! <3";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"L & M"}),(0,s.jsx)("meta",{name:"description",content:e}),(0,s.jsx)("meta",{property:"og:description",content:e}),(0,s.jsx)("meta",{property:"og:url",content:"marilynproducciones.com/lym"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:e}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,s.jsx)("meta",{property:"og:image",content:"https://marilynproducciones.com/lym/og.png"}),(0,s.jsx)("link",{rel:"icon",href:"/lym/iconito.png"}),(0,s.jsx)("script",{children:"\n        document.documentElement.dataset.scroll = 0;\n        document.addEventListener('scroll', () => {\n          document.documentElement.dataset.scroll = window.scrollY;\n        });\n        "})]}),(0,s.jsxs)("main",{className:"",style:{height:"100%"},children:[(0,s.jsx)("section",{className:"text-black bg-[url('/lym/img/portada2.jpg')] bg-top",style:{position:"relative",backgroundSize:"cover",height:"100%"},children:(0,s.jsxs)("div",{className:"pt-20 pb-16",style:{width:"100%",bottom:"0px",position:"absolute",overflow:"hidden"},children:[(0,s.jsx)("img",{src:"/lym/brush.svg",style:{position:"absolute",width:"9rem",zIndex:"1",translate:"-3.7rem 9rem",rotate:"18deg",opacity:"0.7"}}),(0,s.jsx)("img",{src:"/lym/brush.svg",style:{right:"0",position:"absolute",width:"9rem",zIndex:"1",translate:"3.7rem 9rem",rotate:"-18deg",opacity:"0.7",transform:"scaleX(-1)"}}),(0,s.jsx)("div",{className:"hot"}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",style:{position:"relative",gap:"1.4rem"},children:[(0,s.jsxs)("h1",{className:"fonty tracking-tight text-[4rem] sm:text-[5rem]",style:{letterSpacing:"0rem"},children:[(0,s.jsx)("span",{style:{rotate:"-6deg",translate:"-19% 41%",display:"block"},children:"Lucas &"}),(0,s.jsx)("span",{style:{translate:"15%",display:"block"},children:"Marilyn"})]}),(0,s.jsx)("img",{src:"/lym/arrow.svg",style:{filter:"invert(0)",width:"11rem"}}),(0,s.jsx)("span",{className:"catchy",children:"2023"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"catchy day-month",style:{},children:"DOMINGO"}),(0,s.jsx)("span",{className:"alex",children:"16"}),(0,s.jsx)("span",{className:"catchy day-month",style:{},children:"ABRIL"})]}),(0,s.jsx)("span",{className:"catchy",children:"12 HS"}),(0,s.jsx)("span",{className:"catchy",children:"ESTANCIA EL ROSAL"})]})]})}),(0,s.jsx)(y,{}),(0,s.jsx)(p,{}),(0,s.jsx)("div",{className:"w-full flex items-center flex-col",children:(0,s.jsx)("img",{className:"w-1/6 animate-pulse",src:"/lym/corazon.svg",style:{width:"5rem",marginTop:"3rem"}})}),(0,s.jsx)("div",{className:"flex flex-col items-center",style:{marginTop:"1.5rem"},children:(0,s.jsx)("span",{className:"catchy",children:"LLEG\xd3 EL GRAN D\xcdA"})}),(0,s.jsx)(m,{}),(0,s.jsx)("div",{className:"w-full flex items-center flex-col",children:(0,s.jsx)("img",{className:"w-1/6 animate-pulse",src:"/lym/anillos.svg",style:{width:"5rem",marginTop:"1rem",marginBottom:"2rem"}})}),(0,s.jsxs)("div",{className:"w-full flex items-center flex-col",style:{marginBottom:"3rem"},children:[(0,s.jsxs)("div",{className:"catchy flex items-center flex-col",style:{maxWidth:"80%",letterSpacing:"0",textAlign:"center"},children:[(0,s.jsxs)("div",{style:{position:"relative",display:"inlineBlock",padding:"0 12px",color:"#979797",fontSize:"16px",fontStyle:"italic",marginBottom:"0.5rem",fontFamily:"initial"},children:[(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",left:"-73px"}}),"ceremonia civil",(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",right:"-73px"}})]}),"La ceremonia civil se realizara en Estancia El Rosal a las 12hs.",(0,s.jsxs)("div",{style:{position:"relative",display:"inlineBlock",padding:"0 12px",color:"#979797",fontSize:"16px",fontStyle:"italic",marginTop:"1rem",marginBottom:"0.5rem",fontFamily:"initial"},children:[(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",left:"-73px"}}),"valor de la tarjeta",(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",right:"-73px"}})]}),(0,s.jsx)("div",{children:"Adultos: $7500."}),(0,s.jsx)("div",{children:"Menores: $3500."}),(0,s.jsxs)("div",{style:{position:"relative",display:"inlineBlock",padding:"0 12px",color:"#979797",fontSize:"16px",fontStyle:"italic",marginTop:"1rem",marginBottom:"0.5rem",fontFamily:"initial"},children:[(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",left:"-73px"}}),"RSVP",(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",right:"-73px"}})]}),(0,s.jsx)("div",{children:"Confirmar asistencia antes del 20 de marzo por whatsapp."}),(0,s.jsx)(h,{phone:"+5493517041003",text:"Hola Marilyn, quiero confirmar mi asistencia al casorio! :D"}),(0,s.jsxs)("div",{style:{position:"relative",display:"inlineBlock",padding:"0 12px",color:"#979797",fontSize:"16px",fontStyle:"italic",marginTop:"1rem",marginBottom:"0.5rem",fontFamily:"initial"},children:[(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",left:"-73px"}}),"dress code",(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",right:"-73px"}})]}),(0,s.jsx)("div",{children:"Formal elegante."}),(0,s.jsx)("div",{children:"Nuestro casamiento sera al aire libre."}),(0,s.jsxs)("div",{style:{position:"relative",display:"inlineBlock",padding:"0 12px",color:"#979797",fontSize:"16px",fontStyle:"italic",marginTop:"1rem",marginBottom:"0.5rem",fontFamily:"initial"},children:[(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",left:"-73px"}}),"c\xf3mo llegar",(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",right:"-73px"}})]}),(0,s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.761150649987!2d-64.28768850545227!3d-31.069189808159468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94327e493e62d587%3A0x74fb360063580bd1!2sEstancia%20el%20Rosal!5e0!3m2!1sen!2sar!4v1672523319232!5m2!1sen!2sar",style:{border:"0",width:"50rem",height:"30rem",marginBottom:"3rem",maxWidth:"120%"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),(0,s.jsx)("img",{src:"/lym/mapa.png",style:{border:"0",width:"50rem",maxWidth:"80%"}}),(0,s.jsx)("img",{className:"w-1/6",src:"/lym/corazon-volador.svg",style:{width:"6rem",marginTop:"2rem",marginBottom:"2rem"}}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"\xa1 El mejor regalo es tu presencia !"}),"Si deseas realizarnos un regalo te invitamos a colaborar con nuestra Luna de Miel..."]}),(0,s.jsxs)("div",{style:{position:"relative",display:"inlineBlock",padding:"0 12px",color:"#979797",fontSize:"16px",fontStyle:"italic",marginTop:"1rem",marginBottom:"0.5rem",fontFamily:"initial"},children:[(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",left:"-73px"}}),"informaci\xf3n bancaria",(0,s.jsx)("span",{style:{content:"",position:"absolute",top:"50%",width:"73px",height:"1px",backgroundColor:"#ccc",right:"-73px"}})]}),(0,s.jsxs)("div",{children:[" ",(0,s.jsx)("span",{style:{marginRight:"0.3rem"},children:"Titular: "})," Romina Marilyn Olacireghi Como"]}),(0,s.jsxs)("div",{children:[" ",(0,s.jsx)("span",{style:{marginRight:"0.3rem"},children:"Alias: "})," MARILYN.BBVA.FRANCES"]}),(0,s.jsxs)("div",{children:[" ",(0,s.jsx)("span",{style:{marginRight:"0.3rem"},children:"CBU: "})," 0170291240000031707020"]}),(0,s.jsx)(g,{cbu:"0170291240000031707020"})]}),(0,s.jsxs)("div",{className:"w-full flex items-center flex-col",style:{maxWidth:"85%"},children:[(0,s.jsx)("img",{src:"/lym/camara.svg",style:{width:"6rem",marginTop:"2rem",marginBottom:"2rem"}}),(0,s.jsx)(x,{})]})]}),(0,s.jsx)("footer",{className:"text-black",style:{textAlign:"center",fontFamily:"catchy"},children:(0,s.jsxs)("div",{className:"pt-20 pb-16",style:{position:"relative",overflow:"hidden"},children:[(0,s.jsx)("div",{className:"bg-top",style:{position:"absolute",inset:"0px",background:"url(/lym/img/rosal.jpg)",zIndex:"-100",filter:"blur(4px) opacity(0.5)"}}),(0,s.jsx)("div",{style:{position:"absolute",inset:"0px",translate:"0rem -19rem",rotate:"180deg",background:"url(/lym/screen2.webp)"}}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("h1",{className:"fonty tracking-tight text-[4rem] sm:text-[4rem]",style:{letterSpacing:"0rem"},children:"Lucas & Marilyn"}),(0,s.jsx)("span",{children:"Gracias por acompa\xf1arnos y compartir nuestra felicidad..."}),(0,s.jsx)("div",{children:"\xa1 Los Esperamos !"})]})]})})]})]})};var j=u},3855:function(e){e.exports={tick:"Flip_tick__p5Q4W","tick-flip":"Flip_tick-flip__ywZxN","tick-text-inline":"Flip_tick-text-inline__fSfDd","tick-label":"Flip_tick-label__TOW8c","tick-char":"Flip_tick-char__9CLHR","tick-group":"Flip_tick-group__gEvSG","tick-flip-panel":"Flip_tick-flip-panel__uMYh3","tick-flip-panel-text-wrapper":"Flip_tick-flip-panel-text-wrapper__66kOo"}}},function(e){e.O(0,[82,774,888,179],function(){return e(e.s=4182)}),_N_E=e.O()}]);