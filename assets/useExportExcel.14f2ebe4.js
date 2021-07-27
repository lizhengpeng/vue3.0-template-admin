import{F as e}from"./FileSaver.min.0236612d.js";import{X as t}from"./xlsx.92822227.js";import"./vendor.2a513c56.js";function n(e,t){t&&(e=Number(e)+1462);return(Date.parse(String(e))-Date.parse(String(new Date(Date.UTC(1899,11,30)))))/864e5}function l(e,l){const o={},r={s:{c:1e7,r:1e7},e:{c:0,r:0}};for(let s=0;s!==e.length;++s)for(let l=0;l!==e[s].length;++l){r.s.r>s&&(r.s.r=s),r.s.c>l&&(r.s.c=l),r.e.r<s&&(r.e.r=s),r.e.c<l&&(r.e.c=l);const c={v:e[s][l]};if(null!==c.v){const e=t.utils.encode_cell({c:l,r:s});if("number"==typeof c.v)c.t="n";else if("boolean"==typeof c.v)c.t="b";else if(c.v instanceof Date){c.t="n";const e=t.SSF.parse_date_code(14);c.z=e,c.v=n(c.v)}else c.t="s";o[e]=c}}return r.s.c<1e7&&(o["!ref"]=t.utils.encode_range(r)),o}class o{constructor(e=[],t={}){this.SheetNames=e,this.Sheets=t}}function r(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let l=0;l!==e.length;++l)n[l]=255&e.charCodeAt(l);return t}function s(n){const s=function(e){console.log(e);const t=[],n=null==e?void 0:e.querySelectorAll("tr"),l=[];for(let o=0;o<n.length;++o){const e=[],r=n[o].querySelectorAll("td");for(let t=0;t<r.length;++t){const n=r[t];let s=n.getAttribute("colspan"),c=n.getAttribute("rowspan"),u=n.innerText;if("number"==typeof u&&u===Number(u)&&(u=Number(u)),l.forEach((t=>{if(o>=t.s.r&&o<=t.e.r&&e.length>=t.s.c&&e.length<=t.e.c)for(let n=0;n<=t.e.c-t.s.c;++n)e.push(null)})),(c||s)&&(c=c||1,s=s||1,l.push({s:{r:o,c:e.length},e:{r:o+c-1,c:e.length+s-1}})),e.push(""!==u?u:null),s)for(let t=0;t<s-1;++t)e.push(null)}t.push(e)}return[t,l]}(document.getElementById(n)),c=s[1],u=s[0],a="SheetJS",h=new o,i=l(u);i["!merges"]=c,h.SheetNames.push(a),h.Sheets.SheetJS=i;const f=t.write(h,{bookType:"xlsx",bookSST:!1,type:"binary"});e.exports.saveAs(new Blob([r(f)],{type:"application/octet-stream"}),"test.xlsx")}function c(n){var s,c,u,a,h;const i=null!=(s=null==n?void 0:n.filename)?s:"defaultExcel",f=null!=(c=null==n?void 0:n.bookType)?c:"xlsx",p=null!=(u=null==n?void 0:n.multiHeader)?u:[],g=null!=(a=null==n?void 0:n.merges)?a:[],S=null==(h=n.autoWidth)||h,m=[...n.data];m.unshift(n.header);for(let e=p.length-1;e>-1;e--)m.unshift(p[e]);const d="SheetJS",b=new o,v=l(m);if(g.length>0&&(v["!merges"]||(v["!merges"]=[]),g.forEach((e=>{v["!merges"].push(t.utils.decode_range(e))}))),S){const e=m.map((e=>e.map((e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length})))),t=e[0];for(let n=1;n<e.length;n++)for(let l=0;l<e[n].length;l++)t[l].wch<e[n][l].wch&&(t[l].wch=e[n][l].wch);v["!cols"]=t}b.SheetNames.push(d),b.Sheets.SheetJS=v;const x=t.write(b,{bookType:f,bookSST:!1,type:"binary"});e.exports.saveAs(new Blob([r(x)],{type:"application/octet-stream"}),`${i}.${f}`)}var u={exportTableToExcel:s,exportJsonToExcel:c};export default u;export{c as exportJsonToExcel,s as exportTableToExcel};