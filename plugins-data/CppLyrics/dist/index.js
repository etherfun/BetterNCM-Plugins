(()=>{var he=(e,t)=>{for(let r=e.length-1;r>=0;r--)if(t(e[r]))return e[r];return null},me=[{time:0,duration:594e4,originalLyric:"\u7EAF\u97F3\u4E50\uFF0C\u8BF7\u6B23\u8D4F"}];var Jt={};function fe(e,t){typeof e>"u"&&(e=""),typeof t>"u"&&(t="");let r=`${e}::${t}`;if(Jt[r]!==void 0)return Jt[r];let n=e.length,o=t.length,a=[];for(let s=0;s<=n;s++)a[s]=[],a[s][0]=s;for(let s=0;s<=o;s++)a[0][s]=s;for(let s=1;s<=n;s++)for(let i=1;i<=o;i++)e[s-1]===t[i-1]?a[s][i]=a[s-1][i-1]:a[s][i]=Math.min(a[s-1][i-1]+1,a[s][i-1]+1,a[s-1][i]+1);return a[n][o]}var pe=e=>!!e.replace(/[\p{P}\p{S}]/gu,"").match(/^[\s\w\u00C0-\u024F]+$/u),Xt=e=>e.replace(/[‘’′]/g,"'").replace(/[“”″]/g,'"').replace(/（/g,"(").replace(/）/g,")").replace(/，/g,",").replace(/！/g,"!").replace(/？/g,"?").replace(/：/g,":").replace(/；/g,";");function vt(e,t="",r="",n=""){if(n.trim().length===0){let o=et(e).map(s=>({time:s.time,originalLyric:s.lyric,duration:0,...s.unsynced?{unsynced:!0}:{}}));et(t).forEach(s=>{let i=o.find(l=>l.time===s.time);i&&(i.translatedLyric=s.lyric)}),et(r).forEach(s=>{let i=o.find(l=>l.time===s.time);i&&(i.romanLyric=s.lyric)}),o.sort((s,i)=>s.time-i.time);let a=Ht(o);for(let s=0;s<a.length;s++)s<a.length-1&&(a[s].duration=a[s+1].time-a[s].time);return Ht(o)}else{let o=be(n),a=et(e),s=d=>{let h="equal",f=new Set(d.map(b=>b.time)),m=new Set(a.map(b=>b.time));return new Set([...f].filter(b=>m.has(b))).size/f.size<.1&&(h="closest"),a.forEach(b=>{let g=null;h==="equal"?g=he(d,p=>Math.abs(p.time-b.time)<20):d.forEach(p=>{g?Math.abs(g.time-b.time)>Math.abs(p.time-b.time)&&(g=p):g=p}),g&&(g.originalLyric=g.originalLyric||"",g.originalLyric.length>0&&(g.originalLyric+=" "),g.originalLyric+=b.lyric)}),d},i=(d,h)=>{d.forEach((f,m)=>{let P=0;o.forEach((A,w)=>{Math.abs(o[P].time-f.time)>Math.abs(A.time-f.time)&&(P=w)});let b=[P];for(let A=1;A<=5;A++)P-A>=0&&b.push(P-A),P+A<o.length&&b.push(P+A);b=b.reverse();let g=1e9;for(let A of b){let w=o[A],C=fe(f.originalLyric,w.originalLyric)*1e3+(w[h]?1:0);C<g&&(g=C,P=A)}let p=o[P];p[h]=p[h]||"",p[h].length>0&&(p[h]+=" "),p[h]+=f.lyric})},l=s(et(t)),y=s(et(r)),u=s(et(e));i(l,"translatedLyric"),i(y,"romanLyric"),i(u,"rawLyric");for(let d=0;d<o.length;d++){let h=o[d],f=o[d+1];if(h&&f&&h.originalLyric.trim().length>0&&f.originalLyric.trim().length>0&&h.duration>0){let m=(h?.dynamicLyricTime||h.time)+h.duration,P=f.time;f.dynamicLyricTime&&P>f.dynamicLyricTime&&(P=f.dynamicLyricTime),P-m>=5e3&&o.splice(d+1,0,{time:m,originalLyric:"",duration:P-m})}}for(let d=0;d<o.length;d++){let h=o[d],f=h.rawLyric?.trim()??"",m=h.dynamicLyric||[];for(let P=0;P<m.length;P++){let b=m[P].word.trimEnd();if(f.startsWith(b))f=f.substring(b.length);else break;let g=f.match(/^\s+/);g&&(f=f.substring(g[0].length),m[P].word.match(/\s$/)||(m[P].word+=" "))}}let x=/([\p{Unified_Ideograph}|\u3040-\u309F|\u30A0-\u30FF])/gu;for(let d=0;d<o.length;d++){let f=o[d].dynamicLyric||[];for(let m=0;m<f.length;m++)f[m]?.word?.match(x)&&(f[m].isCJK=!0),f[m]?.word?.match(/\s$/)&&(f[m].endsWithSpace=!0)}for(let d=0;d<o.length;d++){let f=o[d].dynamicLyric||[],m=[-1];for(let P=0;P<f.length-1;P++)(f[P]?.endsWithSpace||f[P]?.word?.match(/[\,\.\，\。\!\?\？\、\；\：\…\—\~\～\·\‘\’\“\”\ﾞ]/))&&(f[P]?.word?.match(/[a-zA-Z]+(\'\‘\’)*[a-zA-Z]*/)||m.push(P));m.push(f.length-1);for(let P=m.length-1;P>=1;P--){let b=null;for(let p=m[P];p>m[P-1];p--){let A=f[p].word.trim();if(!A.match(/[\p{P}\p{S}]/gu)&&!A.match(/^\s*$/)){b=p;break}}if(b===null)continue;let g=f[b];g.duration>=1e3&&(g.trailing=!0)}}return Ht(o)}}var de=/^\[(?<time>[0-9]+),(?<duration>[0-9]+)\](?<line>.*)/,ge=/^\((?<time>[0-9]+),(?<duration>[0-9]+),(?<flag>[0-9]+)\)(?<word>[^\(]*)/,ye=/^\[((?<min>[0-9]+):)?(?<sec>[0-9]+([\.:]([0-9]+))?)\]/,Pe=/^\[((?<min>[0-9]+):)?(?<sec>[0-9]+([\.:]([0-9]+))?)\-(?<discriminator>[0-9]+)\]/;function et(e){let t=[];for(let r of e.split(`
`)){let n=r.trim(),o=[];for(;;){let a=n.match(ye);if(a){let s=Number(a.groups?.min||"0"),i=Number(a.groups?.sec.replace(/:/,".")||"0");o.push(Math.floor((s*60+i)*1e3)),n=n.slice(0,a.index)+n.slice((a.index||0)+a[0].length),n=n.trim()}else break}n=n.trim();for(let a of o)t.push({time:a,lyric:n})}return t.length===0&&e.trim().length>0?xe(e):t.sort((r,n)=>r.time-n.time)}function xe(e){let t=[];for(let r of e.split(`
`)){let n=r.trim();n.length&&(n.match(Pe)||t.push({time:999999999,lyric:n,unsynced:!0}))}return t.length&&t.unshift({time:0,lyric:"\u6B4C\u8BCD\u4E0D\u652F\u6301\u6EDA\u52A8",unsynced:!0}),t}function be(e){let t=[];for(let r of e.trim().split(`
`)){let n=r.trim(),o=n.match(de);if(o){let a=parseInt(o.groups?.time||"0"),s=parseInt(o.groups?.duration||"0");n=o.groups?.line||"";let i=[];for(;n.length>0;){let y=n.match(ge);if(y){let u=parseInt(y.groups?.time||"0"),x=parseInt(y.groups?.duration||"0"),d=parseInt(y.groups?.flag||"0"),h=y.groups?.word.trimStart(),f=h?.split(/\s+/).filter(m=>m.trim().length>0);if(f){let m=x/f.length;f.forEach((P,b)=>{b===f.length-1?/\s/.test((h??"")[(h??"").length-1])?i.push({time:u+b*m,duration:m,flag:d,word:`${P.trimStart()} `}):i.push({time:u+b*m,duration:m,flag:d,word:P.trimStart()}):b===0?/\s/.test((h??"")[0])?i.push({time:u+b*m,duration:m,flag:d,word:` ${P.trimStart()}`}):i.push({time:u+b*m,duration:m,flag:d,word:P.trimStart()}):i.push({time:u+b*m,duration:m,flag:d,word:`${P.trimStart()} `})})}n=n.slice(y.index||0+y[0].length)}else break}let l={time:a,duration:s,originalLyric:i.map(y=>y.word).join(""),dynamicLyric:i,dynamicLyricTime:a};t.push(l)}}return t.sort((r,n)=>r.time-n.time)}function Ht(e){if(e.length>0&&e[e.length-1].time===594e4&&e[e.length-1].duration===0)return me;let t=[],r=!1;for(e.forEach((n,o,a)=>{if(n.originalLyric.trim().length===0){let s=a[o+1];s&&s.time-n.time>5e3&&!r&&(t.push(n),r=!0)}else r=!1,t.push(n)});t[0]?.originalLyric.length===0;)t.shift();t[0]?.time>5e3&&t.unshift({time:500,duration:t[0]?.time-500,originalLyric:""});for(let n=0;n<t.length;n++){let o=t[n];if(pe(o?.originalLyric)){if(o?.dynamicLyric)for(let a=0;a<o.dynamicLyric.length;a++)o.dynamicLyric[a].word=Xt(o.dynamicLyric[a].word);o?.originalLyric&&(o.originalLyric=Xt(o.originalLyric))}}return t}var Ce=(e,t=0)=>{let r=3735928559^t,n=1103547991^t;for(let o=0,a;o<e.length;o++)a=e.charCodeAt(o),r=Math.imul(r^a,2654435761),n=Math.imul(n^a,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&n)+(r>>>0)},Kt=window.onProcessLyrics||(()=>{}),Me=e=>{for(let t of e)t.originalLyric==""&&(t.isInterlude=!0);return e},Ae=e=>{if(!e)return null;e.lrc||(e.lrc={});let t=(e?.lrc?.lyric??"").replace(/\u3000/g," "),r=e?.ytlrc?.lyric??e?.ttlrc?.lyric??e?.tlyric?.lyric??"",n=e?.yromalrc?.lyric??e?.romalrc?.lyric??"",o=e?.yrc?.lyric??"",a=t.match(/\[(.*?)\]/g)?.length??0,s=vt(t,r,n,o);return a-s.length>a*.7?vt(t,r,n):s},Zt=null;window.onProcessLyrics=(e,t)=>{if(!e||e?.data===-400)return Kt(e,t);let r=e;if(typeof e=="string"&&(r={lrc:{lyric:e},source:{name:"\u672C\u5730"}}),(r?.lrc?.lyric??"")!=Zt){console.log("Update Raw Lyrics",r),Zt=r?.lrc?.lyric??"";let n=Ae(r);setTimeout(async()=>{let o=await Me(n),a={lyrics:o,contributors:{}};o[0]?.unsynced&&(a.unsynced=!0),r?.lyricUser&&(a.contributors.original={name:r.lyricUser.nickname,userid:r.lyricUser.userid}),r?.transUser&&(a.contributors.translation={name:r.transUser.nickname,userid:r.transUser.userid}),a.contributors.roles=r?.roles??[],a.contributors.roles=a.contributors.roles.filter(s=>!(s.artistMetaList.length==1&&s.artistMetaList[0].artistName=="\u65E0"&&s.artistMetaList[0].artistId==0));for(let s=0;s<a.contributors.roles.length;s++){let i=JSON.stringify(a.contributors.roles[s].artistMetaList);for(let l=s+1;l<a.contributors.roles.length;l++)JSON.stringify(a.contributors.roles[l].artistMetaList)===i&&(a.contributors.roles[s].roleName+=`\u3001${a.contributors.roles[l].roleName}`,a.contributors.roles.splice(l,1),l--)}r?.source&&(a.contributors.lyricSource=r.source),a.hash=`${betterncm.ncm.getPlaying().id}-${Ce(o.map(s=>s.originalLyric).join("\\"))}`,window.currentLyrics=a,console.group("Update Processed Lyrics"),console.log("lyrics",window.currentLyrics.lyrics),console.log("contributors",window.currentLyrics.contributors),console.log("hash",window.currentLyrics.hash),console.groupEnd(),document.dispatchEvent(new CustomEvent("lyrics-updated",{detail:window.currentLyrics}))},0)}return Kt(e,t)};function H(e){return e<0?-1:e===0?0:1}function rt(e,t,r){return(1-r)*e+r*t}function Qt(e,t,r){return r<e?e:r>t?t:r}function lt(e,t,r){return r<e?e:r>t?t:r}function Mt(e){return e=e%360,e<0&&(e=e+360),e}function j(e){return e=e%360,e<0&&(e=e+360),e}function te(e,t){return j(t-e)<=180?1:-1}function At(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function mt(e,t){let r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],o=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,o]}var ee=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],we=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Ot=[95.047,100,108.883];function It(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function zt(e){let t=nt(e[0]),r=nt(e[1]),n=nt(e[2]);return It(t,r,n)}function re(e){return e>>24&255}function ot(e){return e>>16&255}function at(e){return e>>8&255}function st(e){return e&255}function Ut(e,t,r){let n=we,o=n[0][0]*e+n[0][1]*t+n[0][2]*r,a=n[1][0]*e+n[1][1]*t+n[1][2]*r,s=n[2][0]*e+n[2][1]*t+n[2][2]*r,i=nt(o),l=nt(a),y=nt(s);return It(i,l,y)}function Ie(e){let t=Z(ot(e)),r=Z(at(e)),n=Z(st(e));return mt([t,r,n],ee)}function ne(e,t,r){let n=Ot,o=(e+16)/116,a=t/500+o,s=o-r/200,i=wt(a),l=wt(o),y=wt(s),u=i*n[0],x=l*n[1],d=y*n[2];return Ut(u,x,d)}function Nt(e){let t=Z(ot(e)),r=Z(at(e)),n=Z(st(e)),o=ee,a=o[0][0]*t+o[0][1]*r+o[0][2]*n,s=o[1][0]*t+o[1][1]*r+o[1][2]*n,i=o[2][0]*t+o[2][1]*r+o[2][2]*n,l=Ot,y=a/l[0],u=s/l[1],x=i/l[2],d=ft(y),h=ft(u),f=ft(x),m=116*h-16,P=500*(d-h),b=200*(h-f);return[m,P,b]}function oe(e){let t=W(e),r=nt(t);return It(r,r,r)}function pt(e){let t=Ie(e)[1];return 116*ft(t/100)-16}function W(e){return 100*wt((e+16)/116)}function dt(e){return ft(e/100)*116-16}function Z(e){let t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function nt(e){let t=e/100,r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,Qt(0,255,Math.round(r*255))}function ae(){return Ot}function ft(e){let t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function wt(e){let t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}var O=class e{static make(t=ae(),r=200/Math.PI*W(50)/100,n=50,o=2,a=!1){let s=t,i=s[0]*.401288+s[1]*.650173+s[2]*-.051461,l=s[0]*-.250268+s[1]*1.204414+s[2]*.045854,y=s[0]*-.002079+s[1]*.048952+s[2]*.953127,u=.8+o/10,x=u>=.9?rt(.59,.69,(u-.9)*10):rt(.525,.59,(u-.8)*10),d=a?1:u*(1-1/3.6*Math.exp((-r-42)/92));d=d>1?1:d<0?0:d;let h=u,f=[d*(100/i)+1-d,d*(100/l)+1-d,d*(100/y)+1-d],m=1/(5*r+1),P=m*m*m*m,b=1-P,g=P*r+.1*b*b*Math.cbrt(5*r),p=W(n)/t[1],A=1.48+Math.sqrt(p),w=.725/Math.pow(p,.2),L=w,C=[Math.pow(g*f[0]*i/100,.42),Math.pow(g*f[1]*l/100,.42),Math.pow(g*f[2]*y/100,.42)],I=[400*C[0]/(C[0]+27.13),400*C[1]/(C[1]+27.13),400*C[2]/(C[2]+27.13)],T=(2*I[0]+I[1]+.05*I[2])*w;return new e(p,T,w,L,x,h,f,g,Math.pow(g,.25),A)}constructor(t,r,n,o,a,s,i,l,y,u){this.n=t,this.aw=r,this.nbb=n,this.ncb=o,this.c=a,this.nc=s,this.rgbD=i,this.fl=l,this.fLRoot=y,this.z=u}};O.DEFAULT=O.make();var z=class e{constructor(t,r,n,o,a,s,i,l,y){this.hue=t,this.chroma=r,this.j=n,this.q=o,this.m=a,this.s=s,this.jstar=i,this.astar=l,this.bstar=y}distance(t){let r=this.jstar-t.jstar,n=this.astar-t.astar,o=this.bstar-t.bstar,a=Math.sqrt(r*r+n*n+o*o);return 1.41*Math.pow(a,.63)}static fromInt(t){return e.fromIntInViewingConditions(t,O.DEFAULT)}static fromIntInViewingConditions(t,r){let n=(t&16711680)>>16,o=(t&65280)>>8,a=t&255,s=Z(n),i=Z(o),l=Z(a),y=.41233895*s+.35762064*i+.18051042*l,u=.2126*s+.7152*i+.0722*l,x=.01932141*s+.11916382*i+.95034478*l,d=.401288*y+.650173*u-.051461*x,h=-.250268*y+1.204414*u+.045854*x,f=-.002079*y+.048952*u+.953127*x,m=r.rgbD[0]*d,P=r.rgbD[1]*h,b=r.rgbD[2]*f,g=Math.pow(r.fl*Math.abs(m)/100,.42),p=Math.pow(r.fl*Math.abs(P)/100,.42),A=Math.pow(r.fl*Math.abs(b)/100,.42),w=H(m)*400*g/(g+27.13),L=H(P)*400*p/(p+27.13),C=H(b)*400*A/(A+27.13),I=(11*w+-12*L+C)/11,T=(w+L-2*C)/9,D=(20*w+20*L+21*C)/20,v=(40*w+20*L+C)/20,G=Math.atan2(T,I)*180/Math.PI,R=G<0?G+360:G>=360?G-360:G,tt=R*Math.PI/180,xt=v*r.nbb,Q=100*Math.pow(xt/r.aw,r.c*r.z),bt=4/r.c*Math.sqrt(Q/100)*(r.aw+4)*r.fLRoot,Bt=R<20.14?R+360:R,Ft=.25*(Math.cos(Bt*Math.PI/180+2)+3.8),Et=5e4/13*Ft*r.nc*r.ncb*Math.sqrt(I*I+T*T)/(D+.305),Ct=Math.pow(Et,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),jt=Ct*Math.sqrt(Q/100),Wt=jt*r.fLRoot,ie=50*Math.sqrt(Ct*r.c/(r.aw+4)),ce=(1+100*.007)*Q/(1+.007*Q),Yt=1/.0228*Math.log(1+.0228*Wt),le=Yt*Math.cos(tt),ue=Yt*Math.sin(tt);return new e(R,jt,Q,bt,Wt,ie,ce,le,ue)}static fromJch(t,r,n){return e.fromJchInViewingConditions(t,r,n,O.DEFAULT)}static fromJchInViewingConditions(t,r,n,o){let a=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,s=r*o.fLRoot,i=r/Math.sqrt(t/100),l=50*Math.sqrt(i*o.c/(o.aw+4)),y=n*Math.PI/180,u=(1+100*.007)*t/(1+.007*t),x=1/.0228*Math.log(1+.0228*s),d=x*Math.cos(y),h=x*Math.sin(y);return new e(n,r,t,a,s,l,u,d,h)}static fromUcs(t,r,n){return e.fromUcsInViewingConditions(t,r,n,O.DEFAULT)}static fromUcsInViewingConditions(t,r,n,o){let a=r,s=n,i=Math.sqrt(a*a+s*s),y=(Math.exp(i*.0228)-1)/.0228/o.fLRoot,u=Math.atan2(s,a)*(180/Math.PI);u<0&&(u+=360);let x=t/(1-(t-100)*.007);return e.fromJchInViewingConditions(x,y,u,o)}toInt(){return this.viewed(O.DEFAULT)}viewed(t){let r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,a=.25*(Math.cos(o+2)+3.8),s=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=a*(5e4/13)*t.nc*t.ncb,l=s/t.nbb,y=Math.sin(o),u=Math.cos(o),x=23*(l+.305)*n/(23*i+11*n*u+108*n*y),d=x*u,h=x*y,f=(460*l+451*d+288*h)/1403,m=(460*l-891*d-261*h)/1403,P=(460*l-220*d-6300*h)/1403,b=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),g=H(f)*(100/t.fl)*Math.pow(b,1/.42),p=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),A=H(m)*(100/t.fl)*Math.pow(p,1/.42),w=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),L=H(P)*(100/t.fl)*Math.pow(w,1/.42),C=g/t.rgbD[0],I=A/t.rgbD[1],T=L/t.rgbD[2],D=1.86206786*C-1.01125463*I+.14918677*T,v=.38752654*C+.62144744*I-.00897398*T,$=-.0158415*C-.03412294*I+1.04996444*T;return Ut(D,v,$)}static fromXyzInViewingConditions(t,r,n,o){let a=.401288*t+.650173*r-.051461*n,s=-.250268*t+1.204414*r+.045854*n,i=-.002079*t+.048952*r+.953127*n,l=o.rgbD[0]*a,y=o.rgbD[1]*s,u=o.rgbD[2]*i,x=Math.pow(o.fl*Math.abs(l)/100,.42),d=Math.pow(o.fl*Math.abs(y)/100,.42),h=Math.pow(o.fl*Math.abs(u)/100,.42),f=H(l)*400*x/(x+27.13),m=H(y)*400*d/(d+27.13),P=H(u)*400*h/(h+27.13),b=(11*f+-12*m+P)/11,g=(f+m-2*P)/9,p=(20*f+20*m+21*P)/20,A=(40*f+20*m+P)/20,L=Math.atan2(g,b)*180/Math.PI,C=L<0?L+360:L>=360?L-360:L,I=C*Math.PI/180,T=A*o.nbb,D=100*Math.pow(T/o.aw,o.c*o.z),v=4/o.c*Math.sqrt(D/100)*(o.aw+4)*o.fLRoot,$=C<20.14?C+360:C,G=1/4*(Math.cos($*Math.PI/180+2)+3.8),tt=5e4/13*G*o.nc*o.ncb*Math.sqrt(b*b+g*g)/(p+.305),xt=Math.pow(tt,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),Q=xt*Math.sqrt(D/100),bt=Q*o.fLRoot,Bt=50*Math.sqrt(xt*o.c/(o.aw+4)),Ft=(1+100*.007)*D/(1+.007*D),Rt=Math.log(1+.0228*bt)/.0228,Et=Rt*Math.cos(I),Ct=Rt*Math.sin(I);return new e(C,Q,D,v,bt,Bt,Ft,Et,Ct)}xyzInViewingConditions(t){let r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,a=.25*(Math.cos(o+2)+3.8),s=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=a*(5e4/13)*t.nc*t.ncb,l=s/t.nbb,y=Math.sin(o),u=Math.cos(o),x=23*(l+.305)*n/(23*i+11*n*u+108*n*y),d=x*u,h=x*y,f=(460*l+451*d+288*h)/1403,m=(460*l-891*d-261*h)/1403,P=(460*l-220*d-6300*h)/1403,b=Math.max(0,27.13*Math.abs(f)/(400-Math.abs(f))),g=H(f)*(100/t.fl)*Math.pow(b,1/.42),p=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),A=H(m)*(100/t.fl)*Math.pow(p,1/.42),w=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),L=H(P)*(100/t.fl)*Math.pow(w,1/.42),C=g/t.rgbD[0],I=A/t.rgbD[1],T=L/t.rgbD[2],D=1.86206786*C-1.01125463*I+.14918677*T,v=.38752654*C+.62144744*I-.00897398*T,$=-.0158415*C-.03412294*I+1.04996444*T;return[D,v,$]}};var J=class e{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){let r=t/100,n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){let r=Math.pow(Math.abs(t),.42);return H(t)*400*r/(r+27.13)}static hueOf(t){let r=mt(t,e.SCALED_DISCOUNT_FROM_LINRGB),n=e.chromaticAdaptation(r[0]),o=e.chromaticAdaptation(r[1]),a=e.chromaticAdaptation(r[2]),s=(11*n+-12*o+a)/11,i=(n+o-2*a)/9;return Math.atan2(i,s)}static areInCyclicOrder(t,r,n){let o=e.sanitizeRadians(r-t),a=e.sanitizeRadians(n-t);return o<a}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,o){let a=e.intercept(t[o],r,n[o]);return e.lerpPoint(t,a,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){let n=e.Y_FROM_LINRGB[0],o=e.Y_FROM_LINRGB[1],a=e.Y_FROM_LINRGB[2],s=r%4<=1?0:100,i=r%2===0?0:100;if(r<4){let l=s,y=i,u=(t-l*o-y*a)/n;return e.isBounded(u)?[u,l,y]:[-1,-1,-1]}else if(r<8){let l=s,y=i,u=(t-y*n-l*a)/o;return e.isBounded(u)?[y,u,l]:[-1,-1,-1]}else{let l=s,y=i,u=(t-l*n-y*o)/a;return e.isBounded(u)?[l,y,u]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],o=n,a=0,s=0,i=!1,l=!0;for(let y=0;y<12;y++){let u=e.nthVertex(t,y);if(u[0]<0)continue;let x=e.hueOf(u);if(!i){n=u,o=u,a=x,s=x,i=!0;continue}(l||e.areInCyclicOrder(a,x,s))&&(l=!1,e.areInCyclicOrder(a,r,x)?(o=u,s=x):(n=u,a=x))}return[n,o]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){let n=e.bisectToSegment(t,r),o=n[0],a=e.hueOf(o),s=n[1];for(let i=0;i<3;i++)if(o[i]!==s[i]){let l=-1,y=255;o[i]<s[i]?(l=e.criticalPlaneBelow(e.trueDelinearized(o[i])),y=e.criticalPlaneAbove(e.trueDelinearized(s[i]))):(l=e.criticalPlaneAbove(e.trueDelinearized(o[i])),y=e.criticalPlaneBelow(e.trueDelinearized(s[i])));for(let u=0;u<8&&!(Math.abs(y-l)<=1);u++){let x=Math.floor((l+y)/2),d=e.CRITICAL_PLANES[x],h=e.setCoordinate(o,d,s,i),f=e.hueOf(h);e.areInCyclicOrder(a,r,f)?(s=h,y=x):(o=h,a=f,l=x)}}return e.midpoint(o,s)}static inverseChromaticAdaptation(t){let r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return H(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let o=Math.sqrt(n)*11,a=O.DEFAULT,s=1/Math.pow(1.64-Math.pow(.29,a.n),.73),l=.25*(Math.cos(t+2)+3.8)*(5e4/13)*a.nc*a.ncb,y=Math.sin(t),u=Math.cos(t);for(let x=0;x<5;x++){let d=o/100,h=r===0||o===0?0:r/Math.sqrt(d),f=Math.pow(h*s,1/.9),P=a.aw*Math.pow(d,1/a.c/a.z)/a.nbb,b=23*(P+.305)*f/(23*l+11*f*u+108*f*y),g=b*u,p=b*y,A=(460*P+451*g+288*p)/1403,w=(460*P-891*g-261*p)/1403,L=(460*P-220*g-6300*p)/1403,C=e.inverseChromaticAdaptation(A),I=e.inverseChromaticAdaptation(w),T=e.inverseChromaticAdaptation(L),D=mt([C,I,T],e.LINRGB_FROM_SCALED_DISCOUNT);if(D[0]<0||D[1]<0||D[2]<0)return 0;let v=e.Y_FROM_LINRGB[0],$=e.Y_FROM_LINRGB[1],G=e.Y_FROM_LINRGB[2],R=v*D[0]+$*D[1]+G*D[2];if(R<=0)return 0;if(x===4||Math.abs(R-n)<.002)return D[0]>100.01||D[1]>100.01||D[2]>100.01?0:zt(D);o=o-(R-n)*o/(2*R)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return oe(n);t=j(t);let o=t/180*Math.PI,a=W(n),s=e.findResultByJ(o,r,a);if(s!==0)return s;let i=e.bisectToLimit(a,o);return zt(i)}static solveToCam(t,r,n){return z.fromInt(e.solveToInt(t,r,n))}};J.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];J.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];J.Y_FROM_LINRGB=[.2126,.7152,.0722];J.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];var S=class e{static from(t,r,n){return new e(J.solveToInt(t,r,n))}static fromInt(t){return new e(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(J.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(J.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(J.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;let r=z.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=pt(t),this.argb=t}setInternalState(t){let r=z.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=pt(t),this.argb=t}inViewingConditions(t){let n=z.fromInt(this.toInt()).xyzInViewingConditions(t),o=z.fromXyzInViewingConditions(n[0],n[1],n[2],O.make());return e.from(o.hue,o.chroma,dt(n[1]))}};var gt=class e{static harmonize(t,r){let n=S.fromInt(t),o=S.fromInt(r),a=At(n.hue,o.hue),s=Math.min(a*.5,15),i=j(n.hue+s*te(n.hue,o.hue));return S.from(i,n.chroma,n.tone).toInt()}static hctHue(t,r,n){let o=e.cam16Ucs(t,r,n),a=z.fromInt(o),s=z.fromInt(t);return S.from(a.hue,s.chroma,pt(t)).toInt()}static cam16Ucs(t,r,n){let o=z.fromInt(t),a=z.fromInt(r),s=o.jstar,i=o.astar,l=o.bstar,y=a.jstar,u=a.astar,x=a.bstar,d=s+(y-s)*n,h=i+(u-i)*n,f=l+(x-l)*n;return z.fromUcs(d,h,f).toInt()}};var U=class e{static ratioOfTones(t,r){return t=lt(0,100,t),r=lt(0,100,r),e.ratioOfYs(W(t),W(r))}static ratioOfYs(t,r){let n=t>r?t:r,o=n===r?t:r;return(n+5)/(o+5)}static lighter(t,r){if(t<0||t>100)return-1;let n=W(t),o=r*(n+5)-5,a=e.ratioOfYs(o,n),s=Math.abs(a-r);if(a<r&&s>.04)return-1;let i=dt(o)+.4;return i<0||i>100?-1:i}static darker(t,r){if(t<0||t>100)return-1;let n=W(t),o=(n+5)/r-5,a=e.ratioOfYs(n,o),s=Math.abs(a-r);if(a<r&&s>.04)return-1;let i=dt(o)-.4;return i<0||i>100?-1:i}static lighterUnsafe(t,r){let n=e.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){let n=e.darker(t,r);return n<0?0:n}};var ut=class e{static isDisliked(t){let r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,o=Math.round(t.tone)<65;return r&&n&&o}static fixIfDisliked(t){return e.isDisliked(t)?S.from(t.hue,t.chroma,70):t}};var M=class e{static fromPalette(t){return new e(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,o,a,s,i,l){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=o,this.background=a,this.secondBackground=s,this.contrastCurve=i,this.toneDeltaPair=l,this.hctCache=new Map,!a&&s)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!a&&i)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(a&&!i)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){let r=this.hctCache.get(t);if(r!=null)return r;let n=this.getTone(t),o=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,o),o}getTone(t){let r=t.contrastLevel<0;if(this.toneDeltaPair){let n=this.toneDeltaPair(t),o=n.roleA,a=n.roleB,s=n.delta,i=n.polarity,l=n.stayTogether,u=this.background(t).getTone(t),x=i==="nearer"||i==="lighter"&&!t.isDark||i==="darker"&&t.isDark,d=x?o:a,h=x?a:o,f=this.name===d.name,m=t.isDark?1:-1,P=d.contrastCurve.getContrast(t.contrastLevel),b=h.contrastCurve.getContrast(t.contrastLevel),g=d.tone(t),p=U.ratioOfTones(u,g)>=P?g:e.foregroundTone(u,P),A=h.tone(t),w=U.ratioOfTones(u,A)>=b?A:e.foregroundTone(u,b);return r&&(p=e.foregroundTone(u,P),w=e.foregroundTone(u,b)),(w-p)*m>=s||(w=lt(0,100,p+s*m),(w-p)*m>=s||(p=lt(0,100,w-s*m))),50<=p&&p<60?m>0?(p=60,w=Math.max(w,p+s*m)):(p=49,w=Math.min(w,p+s*m)):50<=w&&w<60&&(l?m>0?(p=60,w=Math.max(w,p+s*m)):(p=49,w=Math.min(w,p+s*m)):m>0?w=60:w=49),f?p:w}else{let n=this.tone(t);if(this.background==null)return n;let o=this.background(t).getTone(t),a=this.contrastCurve.getContrast(t.contrastLevel);if(U.ratioOfTones(o,n)>=a||(n=e.foregroundTone(o,a)),r&&(n=e.foregroundTone(o,a)),this.isBackground&&50<=n&&n<60&&(U.ratioOfTones(49,o)>=a?n=49:n=60),this.secondBackground){let[s,i]=[this.background,this.secondBackground],[l,y]=[s(t).getTone(t),i(t).getTone(t)],[u,x]=[Math.max(l,y),Math.min(l,y)];if(U.ratioOfTones(u,n)>=a&&U.ratioOfTones(x,n)>=a)return n;let d=U.lighter(u,a),h=U.darker(x,a),f=[];return d!==-1&&f.push(d),h!==-1&&f.push(h),e.tonePrefersLightForeground(l)||e.tonePrefersLightForeground(y)?d<0?100:d:f.length===1?f[0]:h<0?0:h}return n}}static foregroundTone(t,r){let n=U.lighterUnsafe(t,r),o=U.darkerUnsafe(t,r),a=U.ratioOfTones(n,t),s=U.ratioOfTones(o,t);if(e.tonePrefersLightForeground(t)){let l=Math.abs(a-s)<.1&&a<r&&s<r;return a>=r||a>=s||l?n:o}else return s>=r||s>=a?o:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return e.tonePrefersLightForeground(t)&&!e.toneAllowsLightForeground(t)?49:t}};var N;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(N||(N={}));var k=class{constructor(t,r,n,o){this.low=t,this.normal=r,this.medium=n,this.high=o}getContrast(t){return t<=-1?this.low:t<0?rt(this.low,this.normal,(t- -1)/1):t<.5?rt(this.normal,this.medium,(t-0)/.5):t<1?rt(this.medium,this.high,(t-.5)/.5):this.high}};var E=class{constructor(t,r,n,o,a){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=o,this.stayTogether=a}};function ht(e){return e.variant===N.FIDELITY||e.variant===N.CONTENT}function F(e){return e.variant===N.MONOCHROME}function ke(e,t,r,n){let o=r,a=S.from(e,t,r);if(a.chroma<t){let s=a.chroma;for(;a.chroma<t;){o+=n?-1:1;let i=S.from(e,t,o);if(s>i.chroma||Math.abs(i.chroma-t)<.4)break;let l=Math.abs(i.chroma-t),y=Math.abs(a.chroma-t);l<y&&(a=i),s=Math.max(s,i.chroma)}}return o}function De(e){return O.make(void 0,void 0,e.isDark?30:80,void 0,void 0)}function Vt(e,t){let r=e.inViewingConditions(De(t));return M.tonePrefersLightForeground(e.tone)&&!M.toneAllowsLightForeground(r.tone)?M.enableLightForeground(e.tone):M.enableLightForeground(r.tone)}var c=class e{static highestSurface(t){return t.isDark?e.surfaceBright:e.surfaceDim}};c.contentAccentToneDelta=15;c.primaryPaletteKeyColor=M.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});c.secondaryPaletteKeyColor=M.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});c.tertiaryPaletteKeyColor=M.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});c.neutralPaletteKeyColor=M.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});c.neutralVariantPaletteKeyColor=M.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});c.background=M.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});c.onBackground=M.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>c.background,contrastCurve:new k(3,3,4.5,7)});c.surface=M.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});c.surfaceDim=M.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:87,isBackground:!0});c.surfaceBright=M.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?24:98,isBackground:!0});c.surfaceContainerLowest=M.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:100,isBackground:!0});c.surfaceContainerLow=M.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?10:96,isBackground:!0});c.surfaceContainer=M.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?12:94,isBackground:!0});c.surfaceContainerHigh=M.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?17:92,isBackground:!0});c.surfaceContainerHighest=M.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?22:90,isBackground:!0});c.onSurface=M.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>c.highestSurface(e),contrastCurve:new k(4.5,7,11,21)});c.surfaceVariant=M.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});c.onSurfaceVariant=M.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>c.highestSurface(e),contrastCurve:new k(3,4.5,7,11)});c.inverseSurface=M.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});c.inverseOnSurface=M.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>c.inverseSurface,contrastCurve:new k(4.5,7,11,21)});c.outline=M.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>c.highestSurface(e),contrastCurve:new k(1.5,3,4.5,7)});c.outlineVariant=M.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7)});c.shadow=M.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});c.scrim=M.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});c.surfaceTint=M.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});c.primary=M.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>F(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(c.primaryContainer,c.primary,15,"nearer",!1)});c.onPrimary=M.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>F(e)?e.isDark?10:90:e.isDark?20:100,background:e=>c.primary,contrastCurve:new k(4.5,7,11,21)});c.primaryContainer=M.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>ht(e)?Vt(e.sourceColorHct,e):F(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.primaryContainer,c.primary,15,"nearer",!1)});c.onPrimaryContainer=M.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>ht(e)?M.foregroundTone(c.primaryContainer.tone(e),4.5):F(e)?e.isDark?0:100:e.isDark?90:10,background:e=>c.primaryContainer,contrastCurve:new k(4.5,7,11,21)});c.inversePrimary=M.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>c.inverseSurface,contrastCurve:new k(3,4.5,7,11)});c.secondary=M.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(c.secondaryContainer,c.secondary,15,"nearer",!1)});c.onSecondary=M.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>F(e)?e.isDark?10:100:e.isDark?20:100,background:e=>c.secondary,contrastCurve:new k(4.5,7,11,21)});c.secondaryContainer=M.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{let t=e.isDark?30:90;if(F(e))return e.isDark?30:85;if(!ht(e))return t;let r=ke(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark);return r=Vt(e.secondaryPalette.getHct(r),e),r},isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.secondaryContainer,c.secondary,15,"nearer",!1)});c.onSecondaryContainer=M.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>ht(e)?M.foregroundTone(c.secondaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>c.secondaryContainer,contrastCurve:new k(4.5,7,11,21)});c.tertiary=M.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(c.tertiaryContainer,c.tertiary,15,"nearer",!1)});c.onTertiary=M.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?10:90:e.isDark?20:100,background:e=>c.tertiary,contrastCurve:new k(4.5,7,11,21)});c.tertiaryContainer=M.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(F(e))return e.isDark?60:49;if(!ht(e))return e.isDark?30:90;let t=Vt(e.tertiaryPalette.getHct(e.sourceColorHct.tone),e),r=e.tertiaryPalette.getHct(t);return ut.fixIfDisliked(r).tone},isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.tertiaryContainer,c.tertiary,15,"nearer",!1)});c.onTertiaryContainer=M.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?0:100:ht(e)?M.foregroundTone(c.tertiaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>c.tertiaryContainer,contrastCurve:new k(4.5,7,11,21)});c.error=M.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(3,4.5,7,11),toneDeltaPair:e=>new E(c.errorContainer,c.error,15,"nearer",!1)});c.onError=M.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>c.error,contrastCurve:new k(4.5,7,11,21)});c.errorContainer=M.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.errorContainer,c.error,15,"nearer",!1)});c.onErrorContainer=M.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?90:10,background:e=>c.errorContainer,contrastCurve:new k(4.5,7,11,21)});c.primaryFixed=M.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>F(e)?40:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.primaryFixed,c.primaryFixedDim,10,"lighter",!0)});c.primaryFixedDim=M.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>F(e)?30:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.primaryFixed,c.primaryFixedDim,10,"lighter",!0)});c.onPrimaryFixed=M.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>F(e)?100:10,background:e=>c.primaryFixedDim,secondBackground:e=>c.primaryFixed,contrastCurve:new k(4.5,7,11,21)});c.onPrimaryFixedVariant=M.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>F(e)?90:30,background:e=>c.primaryFixedDim,secondBackground:e=>c.primaryFixed,contrastCurve:new k(3,4.5,7,11)});c.secondaryFixed=M.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>F(e)?80:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.secondaryFixed,c.secondaryFixedDim,10,"lighter",!0)});c.secondaryFixedDim=M.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>F(e)?70:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.secondaryFixed,c.secondaryFixedDim,10,"lighter",!0)});c.onSecondaryFixed=M.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>c.secondaryFixedDim,secondBackground:e=>c.secondaryFixed,contrastCurve:new k(4.5,7,11,21)});c.onSecondaryFixedVariant=M.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>F(e)?25:30,background:e=>c.secondaryFixedDim,secondBackground:e=>c.secondaryFixed,contrastCurve:new k(3,4.5,7,11)});c.tertiaryFixed=M.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>F(e)?40:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.tertiaryFixed,c.tertiaryFixedDim,10,"lighter",!0)});c.tertiaryFixedDim=M.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>F(e)?30:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new k(1,1,3,7),toneDeltaPair:e=>new E(c.tertiaryFixed,c.tertiaryFixedDim,10,"lighter",!0)});c.onTertiaryFixed=M.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>F(e)?100:10,background:e=>c.tertiaryFixedDim,secondBackground:e=>c.tertiaryFixed,contrastCurve:new k(4.5,7,11,21)});c.onTertiaryFixedVariant=M.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>F(e)?90:30,background:e=>c.tertiaryFixedDim,secondBackground:e=>c.tertiaryFixed,contrastCurve:new k(3,4.5,7,11)});var B=class e{static fromInt(t){let r=S.fromInt(t);return e.fromHct(r)}static fromHct(t){return new e(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){return new e(t,r,e.createKeyColor(t,r))}constructor(t,r,n){this.hue=t,this.chroma=r,this.keyColor=n,this.cache=new Map}static createKeyColor(t,r){let o=S.from(t,r,50),a=Math.abs(o.chroma-r);for(let s=1;s<50;s+=1){if(Math.round(r)===Math.round(o.chroma))return o;let i=S.from(t,r,50+s),l=Math.abs(i.chroma-r);l<a&&(a=l,o=i);let y=S.from(t,r,50-s),u=Math.abs(y.chroma-r);u<a&&(a=u,o=y)}return o}tone(t){let r=this.cache.get(t);return r===void 0&&(r=S.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return S.fromInt(this.tone(t))}};var kt=class{fromInt(t){return Nt(t)}toInt(t){return ne(t[0],t[1],t[2])}distance(t,r){let n=t[0]-r[0],o=t[1]-r[1],a=t[2]-r[2];return n*n+o*o+a*a}};var Le=10,Te=3,Dt=class{static quantize(t,r,n){let o=new Map,a=new Array,s=new Array,i=new kt,l=0;for(let g=0;g<t.length;g++){let p=t[g],A=o.get(p);A===void 0?(l++,a.push(i.fromInt(p)),s.push(p),o.set(p,1)):o.set(p,A+1)}let y=new Array;for(let g=0;g<l;g++){let p=s[g],A=o.get(p);A!==void 0&&(y[g]=A)}let u=Math.min(n,l);r.length>0&&(u=Math.min(u,r.length));let x=new Array;for(let g=0;g<r.length;g++)x.push(i.fromInt(r[g]));let d=u-x.length;if(r.length===0&&d>0)for(let g=0;g<d;g++){let p=Math.random()*100,A=Math.random()*(100- -100+1)+-100,w=Math.random()*(100- -100+1)+-100;x.push(new Array(p,A,w))}let h=new Array;for(let g=0;g<l;g++)h.push(Math.floor(Math.random()*u));let f=new Array;for(let g=0;g<u;g++){f.push(new Array);for(let p=0;p<u;p++)f[g].push(0)}let m=new Array;for(let g=0;g<u;g++){m.push(new Array);for(let p=0;p<u;p++)m[g].push(new _t)}let P=new Array;for(let g=0;g<u;g++)P.push(0);for(let g=0;g<Le;g++){for(let C=0;C<u;C++){for(let I=C+1;I<u;I++){let T=i.distance(x[C],x[I]);m[I][C].distance=T,m[I][C].index=C,m[C][I].distance=T,m[C][I].index=I}m[C].sort();for(let I=0;I<u;I++)f[C][I]=m[C][I].index}let p=0;for(let C=0;C<l;C++){let I=a[C],T=h[C],D=x[T],v=i.distance(I,D),$=v,G=-1;for(let R=0;R<u;R++){if(m[T][R].distance>=4*v)continue;let tt=i.distance(I,x[R]);tt<$&&($=tt,G=R)}G!==-1&&Math.abs(Math.sqrt($)-Math.sqrt(v))>Te&&(p++,h[C]=G)}if(p===0&&g!==0)break;let A=new Array(u).fill(0),w=new Array(u).fill(0),L=new Array(u).fill(0);for(let C=0;C<u;C++)P[C]=0;for(let C=0;C<l;C++){let I=h[C],T=a[C],D=y[C];P[I]+=D,A[I]+=T[0]*D,w[I]+=T[1]*D,L[I]+=T[2]*D}for(let C=0;C<u;C++){let I=P[C];if(I===0){x[C]=[0,0,0];continue}let T=A[C]/I,D=w[C]/I,v=L[C]/I;x[C]=[T,D,v]}}let b=new Map;for(let g=0;g<u;g++){let p=P[g];if(p===0)continue;let A=i.toInt(x[g]);b.has(A)||b.set(A,p)}return b}},_t=class{constructor(){this.distance=-1,this.index=-1}};var Lt=class{static quantize(t){let r=new Map;for(let n=0;n<t.length;n++){let o=t[n];re(o)<255||r.set(o,(r.get(o)??0)+1)}return r}};var Tt=5,X=33,yt=35937,V={RED:"red",GREEN:"green",BLUE:"blue"},St=class{constructor(t=[],r=[],n=[],o=[],a=[],s=[]){this.weights=t,this.momentsR=r,this.momentsG=n,this.momentsB=o,this.moments=a,this.cubes=s}quantize(t,r){this.constructHistogram(t),this.computeMoments();let n=this.createBoxes(r);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:yt}).fill(0),this.momentsR=Array.from({length:yt}).fill(0),this.momentsG=Array.from({length:yt}).fill(0),this.momentsB=Array.from({length:yt}).fill(0),this.moments=Array.from({length:yt}).fill(0);let r=Lt.quantize(t);for(let[n,o]of r.entries()){let a=ot(n),s=at(n),i=st(n),l=8-Tt,y=(a>>l)+1,u=(s>>l)+1,x=(i>>l)+1,d=this.getIndex(y,u,x);this.weights[d]=(this.weights[d]??0)+o,this.momentsR[d]+=o*a,this.momentsG[d]+=o*s,this.momentsB[d]+=o*i,this.moments[d]+=o*(a*a+s*s+i*i)}}computeMoments(){for(let t=1;t<X;t++){let r=Array.from({length:X}).fill(0),n=Array.from({length:X}).fill(0),o=Array.from({length:X}).fill(0),a=Array.from({length:X}).fill(0),s=Array.from({length:X}).fill(0);for(let i=1;i<X;i++){let l=0,y=0,u=0,x=0,d=0;for(let h=1;h<X;h++){let f=this.getIndex(t,i,h);l+=this.weights[f],y+=this.momentsR[f],u+=this.momentsG[f],x+=this.momentsB[f],d+=this.moments[f],r[h]+=l,n[h]+=y,o[h]+=u,a[h]+=x,s[h]+=d;let m=this.getIndex(t-1,i,h);this.weights[f]=this.weights[m]+r[h],this.momentsR[f]=this.momentsR[m]+n[h],this.momentsG[f]=this.momentsG[m]+o[h],this.momentsB[f]=this.momentsB[m]+a[h],this.moments[f]=this.moments[m]+s[h]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new Gt);let r=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=X-1,this.cubes[0].g1=X-1,this.cubes[0].b1=X-1;let n=t,o=0;for(let a=1;a<t;a++){this.cut(this.cubes[o],this.cubes[a])?(r[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0,r[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0):(r[o]=0,a--),o=0;let s=r[0];for(let i=1;i<=a;i++)r[i]>s&&(s=r[i],o=i);if(s<=0){n=a+1;break}}return new qt(t,n)}createResult(t){let r=[];for(let n=0;n<t;++n){let o=this.cubes[n],a=this.volume(o,this.weights);if(a>0){let s=Math.round(this.volume(o,this.momentsR)/a),i=Math.round(this.volume(o,this.momentsG)/a),l=Math.round(this.volume(o,this.momentsB)/a),y=255<<24|(s&255)<<16|(i&255)<<8|l&255;r.push(y)}}return r}variance(t){let r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),o=this.volume(t,this.momentsB),a=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],s=r*r+n*n+o*o,i=this.volume(t,this.weights);return a-s/i}cut(t,r){let n=this.volume(t,this.momentsR),o=this.volume(t,this.momentsG),a=this.volume(t,this.momentsB),s=this.volume(t,this.weights),i=this.maximize(t,V.RED,t.r0+1,t.r1,n,o,a,s),l=this.maximize(t,V.GREEN,t.g0+1,t.g1,n,o,a,s),y=this.maximize(t,V.BLUE,t.b0+1,t.b1,n,o,a,s),u,x=i.maximum,d=l.maximum,h=y.maximum;if(x>=d&&x>=h){if(i.cutLocation<0)return!1;u=V.RED}else d>=x&&d>=h?u=V.GREEN:u=V.BLUE;switch(r.r1=t.r1,r.g1=t.g1,r.b1=t.b1,u){case V.RED:t.r1=i.cutLocation,r.r0=t.r1,r.g0=t.g0,r.b0=t.b0;break;case V.GREEN:t.g1=l.cutLocation,r.r0=t.r0,r.g0=t.g1,r.b0=t.b0;break;case V.BLUE:t.b1=y.cutLocation,r.r0=t.r0,r.g0=t.g0,r.b0=t.b1;break;default:throw new Error("unexpected direction "+u)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),r.vol=(r.r1-r.r0)*(r.g1-r.g0)*(r.b1-r.b0),!0}maximize(t,r,n,o,a,s,i,l){let y=this.bottom(t,r,this.momentsR),u=this.bottom(t,r,this.momentsG),x=this.bottom(t,r,this.momentsB),d=this.bottom(t,r,this.weights),h=0,f=-1,m=0,P=0,b=0,g=0;for(let p=n;p<o;p++){if(m=y+this.top(t,r,p,this.momentsR),P=u+this.top(t,r,p,this.momentsG),b=x+this.top(t,r,p,this.momentsB),g=d+this.top(t,r,p,this.weights),g===0)continue;let A=(m*m+P*P+b*b)*1,w=g*1,L=A/w;m=a-m,P=s-P,b=i-b,g=l-g,g!==0&&(A=(m*m+P*P+b*b)*1,w=g*1,L+=A/w,L>h&&(h=L,f=p))}return new $t(f,h)}volume(t,r){return r[this.getIndex(t.r1,t.g1,t.b1)]-r[this.getIndex(t.r1,t.g1,t.b0)]-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,r,n){switch(r){case V.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case V.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case V.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,r,n,o){switch(r){case V.RED:return o[this.getIndex(n,t.g1,t.b1)]-o[this.getIndex(n,t.g1,t.b0)]-o[this.getIndex(n,t.g0,t.b1)]+o[this.getIndex(n,t.g0,t.b0)];case V.GREEN:return o[this.getIndex(t.r1,n,t.b1)]-o[this.getIndex(t.r1,n,t.b0)]-o[this.getIndex(t.r0,n,t.b1)]+o[this.getIndex(t.r0,n,t.b0)];case V.BLUE:return o[this.getIndex(t.r1,t.g1,n)]-o[this.getIndex(t.r1,t.g0,n)]-o[this.getIndex(t.r0,t.g1,n)]+o[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,r,n){return(t<<Tt*2)+(t<<Tt+1)+t+(r<<Tt)+r+n}},Gt=class{constructor(t=0,r=0,n=0,o=0,a=0,s=0,i=0){this.r0=t,this.r1=r,this.g0=n,this.g1=o,this.b0=a,this.b1=s,this.vol=i}},qt=class{constructor(t,r){this.requestedCount=t,this.resultCount=r}},$t=class{constructor(t,r){this.cutLocation=t,this.maximum=r}};var Pt=class{static quantize(t,r){let o=new St().quantize(t,r);return Dt.quantize(t,o,r)}};var _=class{constructor(t){this.sourceColorArgb=t.sourceColorArgb,this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.sourceColorHct=S.fromInt(t.sourceColorArgb),this.primaryPalette=t.primaryPalette,this.secondaryPalette=t.secondaryPalette,this.tertiaryPalette=t.tertiaryPalette,this.neutralPalette=t.neutralPalette,this.neutralVariantPalette=t.neutralVariantPalette,this.errorPalette=B.fromHueAndChroma(25,84)}static getRotatedHue(t,r,n){let o=t.hue;if(r.length!==n.length)throw new Error(`mismatch between hue length ${r.length} & rotations ${n.length}`);if(n.length===1)return j(t.hue+n[0]);let a=r.length;for(let s=0;s<=a-2;s++){let i=r[s],l=r[s+1];if(i<o&&o<l)return j(o+n[s])}return o}};var it=class e extends _{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:N.EXPRESSIVE,contrastLevel:n,isDark:r,primaryPalette:B.fromHueAndChroma(j(t.hue+240),40),secondaryPalette:B.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.secondaryRotations),24),tertiaryPalette:B.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.tertiaryRotations),32),neutralPalette:B.fromHueAndChroma(t.hue+15,8),neutralVariantPalette:B.fromHueAndChroma(t.hue+15,12)})}};it.hues=[0,21,51,121,151,191,271,321,360];it.secondaryRotations=[45,95,45,20,45,90,45,45,45];it.tertiaryRotations=[120,120,20,45,20,15,20,120,120];var ct=class e extends _{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:N.VIBRANT,contrastLevel:n,isDark:r,primaryPalette:B.fromHueAndChroma(t.hue,200),secondaryPalette:B.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.secondaryRotations),24),tertiaryPalette:B.fromHueAndChroma(_.getRotatedHue(t,e.hues,e.tertiaryRotations),32),neutralPalette:B.fromHueAndChroma(t.hue,10),neutralVariantPalette:B.fromHueAndChroma(t.hue,12)})}};ct.hues=[0,41,61,101,131,181,251,301,360];ct.secondaryRotations=[18,15,10,12,15,18,15,12,12];ct.tertiaryRotations=[35,30,20,25,30,35,30,25,25];var Be={desired:4,fallbackColorARGB:4282549748,filter:!0};function Fe(e,t){return e.score>t.score?-1:e.score<t.score?1:0}var K=class e{constructor(){}static score(t,r){let{desired:n,fallbackColorARGB:o,filter:a}={...Be,...r},s=[],i=new Array(360).fill(0),l=0;for(let[h,f]of t.entries()){let m=S.fromInt(h);s.push(m);let P=Math.floor(m.hue);i[P]+=f,l+=f}let y=new Array(360).fill(0);for(let h=0;h<360;h++){let f=i[h]/l;for(let m=h-14;m<h+16;m++){let P=Mt(m);y[P]+=f}}let u=new Array;for(let h of s){let f=Mt(Math.round(h.hue)),m=y[f];if(a&&(h.chroma<e.CUTOFF_CHROMA||m<=e.CUTOFF_EXCITED_PROPORTION))continue;let P=m*100*e.WEIGHT_PROPORTION,b=h.chroma<e.TARGET_CHROMA?e.WEIGHT_CHROMA_BELOW:e.WEIGHT_CHROMA_ABOVE,g=(h.chroma-e.TARGET_CHROMA)*b,p=P+g;u.push({hct:h,score:p})}u.sort(Fe);let x=[];for(let h=90;h>=15;h--){x.length=0;for(let{hct:f}of u)if(x.find(P=>At(f.hue,P.hue)<h)||x.push(f),x.length>=n)break;if(x.length>=n)break}let d=[];x.length===0&&d.push(o);for(let h of x)d.push(h.toInt());return d}};K.TARGET_CHROMA=48;K.WEIGHT_PROPORTION=.7;K.WEIGHT_CHROMA_ABOVE=.3;K.WEIGHT_CHROMA_BELOW=.1;K.CUTOFF_CHROMA=5;K.CUTOFF_EXCITED_PROPORTION=.01;plugin.onLoad(e=>{let t="";betterncm.utils.waitForElement("#main-player").then(a=>{let i=a.querySelector(".word").cloneNode(!0);i.style="transform: rotate(120deg) translate(-16px); right: 350px;",i.title="\u6253\u5F00 CppLyrics",a.appendChild(i),i.onclick=()=>{i.remove(),betterncm_native.native_plugin.call("cpplyrics.init",[])}}),setInterval(()=>{if(currentLyrics.hash===t)return;t=currentLyrics.hash;let a=currentLyrics.lyrics.filter(s=>s.dynamicLyric).map(s=>s.dynamicLyric.map(i=>`(${i.time}:${i.time+i.duration})${i.word.replaceAll("`","'")}`).join("`")+(s.translatedLyric?`|${s.translatedLyric}`:"")).join(`
`);a?betterncm_native.native_plugin.call("cpplyrics.set_lyrics",[a]):betterncm_native.native_plugin.call("cpplyrics.set_lyrics",["(0:100000)\u6682\u65E0\u9010\u8BCD\u6B4C\u8BCD"])},1e3);let r=0;legacyNativeCmder.appendRegisterCall("PlayProgress","audioplayer",(a,s)=>{r=s*1e3,betterncm_native.native_plugin.call("cpplyrics.set_time",[r,0])}),legacyNativeCmder.appendRegisterCall("PlayState","audioplayer",(a,s,i)=>{betterncm_native.native_plugin.call("cpplyrics.set_time",[r,i===2])});let n=()=>{let a=betterncm.ncm.getPlayingSong(),s=document.createElement("img");s.src=`orpheus://cache/?${a.data.album.picUrl}?imageView&enlarge=1&thumbnail=48y48`,s.onload=async()=>{let i=document.createElement("canvas"),l=i.getContext("2d");i.width=s.width,i.height=s.height,l.drawImage(s,0,0,s.width,s.height);let y=l.getImageData(0,0,s.width,s.height),x=((p,A)=>p.reduce((w,L,C)=>C%A===0?[...w,[L]]:[...w.slice(0,-1),[...w.slice(-1)[0],L]],[]))(l.getImageData(0,0,s.width,s.height).data,4).map(p=>(p[3]<<24>>>0|p[0]<<16>>>0|p[1]<<8>>>0|p[2])>>>0),d=Pt.quantize(x,64),h=K.score(d),f=(p,A)=>c.onPrimary.getArgb(new A(S.fromInt(p),!0,0)),m=p=>[ot(p),at(p),st(p)],P=`${await betterncm.app.getDataPath()}/cover.jpg`;await betterncm.fs.remove(P),await betterncm.fs.writeFile(P,await fetch(s.src.replace("&thumbnail=48y48","")).then(p=>p.blob())),betterncm_native.native_plugin.call("cpplyrics.set_song_cover",[P]);let b=[f(h[0],ct),f(h[1],it)];b[1]=gt.cam16Ucs(b[0],b[1],.8);let g=p=>console.log(`%c${p[0]}, ${p[1]}, ${p[2]}`,`background-color: rgb(${p[0]}, ${p[1]}, ${p[2]}`);console.log("Primary color:"),g(m(b[0])),console.log("Secondary color:"),g(m(b[1])),betterncm_native.native_plugin.call("cpplyrics.set_song_color",b.map(p=>m(p)).flat()),betterncm_native.native_plugin.call("cpplyrics.set_song_info",[a.data.name,a.data.artists.map(p=>p.name).join(" / ")])}},o=null;setInterval(()=>{let a=document.querySelector("img.j-cover");a&&a!==o&&(a?.complete?n():a?.addEventListener("load",n),o=a)},100)});})();
/*! Bundled license information:

@material/material-color-utilities/utils/math_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/color_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/viewing_conditions.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/cam16.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct_solver.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/blend/blend.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_color.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/variant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/contrast_curve.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/tonal_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/core_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/lab_point_provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wsmeans.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wu.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_celebi.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/dynamic_scheme.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_android.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/temperature/temperature_cache.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_expressive.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_monochrome.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_neutral.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_tonal_spot.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/score/score.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/string_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/image_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/theme_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/