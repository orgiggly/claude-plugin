import { createRequire as __ogCreateRequire } from "node:module";
const require = __ogCreateRequire(import.meta.url);
var uw=Object.create;var tf=Object.defineProperty;var dw=Object.getOwnPropertyDescriptor;var pw=Object.getOwnPropertyNames;var fw=Object.getPrototypeOf,hw=Object.prototype.hasOwnProperty;var We=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var mw=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of pw(t))!hw.call(e,a)&&a!==r&&tf(e,a,{get:()=>t[a],
enumerable:!(n=dw(t,a))||n.enumerable});return e};var ae=(e,t,r)=>(r=e!=null?uw(fw(e)):{},mw(t||!e||!e.__esModule?tf(r,"default",{value:e,enumerable:!0}):r,e));var jn=We(X=>{"use strict";var gw=X&&X.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(X,"__esModule",{value:!0});X.dual=X.getEndomorphismMonoid=X.SK=X.hole=X.constVoid=X.constUndefined=
X.constNull=X.constFalse=X.constTrue=X.unsafeCoerce=X.apply=X.getRing=X.getSemiring=X.getMonoid=X.getSemigroup=X.getBooleanAlgebra=
void 0;X.identity=gc;X.constant=Ri;X.flip=Sw;X.flow=rf;X.tuple=Ew;X.increment=_w;X.decrement=xw;X.absurd=nf;X.tupled=Aw;
X.untupled=$w;X.pipe=Rw;X.not=Iw;var yw=function(e){return function(){return{meet:function(t,r){return function(n){return e.
meet(t(n),r(n))}},join:function(t,r){return function(n){return e.join(t(n),r(n))}},zero:function(){return e.zero},one:function(){
return e.one},implies:function(t,r){return function(n){return e.implies(t(n),r(n))}},not:function(t){return function(r){
return e.not(t(r))}}}}};X.getBooleanAlgebra=yw;var vw=function(e){return function(){return{concat:function(t,r){return function(n){
return e.concat(t(n),r(n))}}}}};X.getSemigroup=vw;var bw=function(e){var t=(0,X.getSemigroup)(e);return function(){return{
concat:t().concat,empty:function(){return e.empty}}}};X.getMonoid=bw;var ww=function(e){return{add:function(t,r){return function(n){
return e.add(t(n),r(n))}},zero:function(){return e.zero},mul:function(t,r){return function(n){return e.mul(t(n),r(n))}},
one:function(){return e.one}}};X.getSemiring=ww;var Tw=function(e){var t=(0,X.getSemiring)(e);return{add:t.add,mul:t.mul,
one:t.one,zero:t.zero,sub:function(r,n){return function(a){return e.sub(r(a),n(a))}}}};X.getRing=Tw;var kw=function(e){return function(t){
return t(e)}};X.apply=kw;function gc(e){return e}X.unsafeCoerce=gc;function Ri(e){return function(){return e}}X.constTrue=
Ri(!0);X.constFalse=Ri(!1);X.constNull=Ri(null);X.constUndefined=Ri(void 0);X.constVoid=X.constUndefined;function Sw(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.length>1?e(t[1],t[0]):function(n){return e(
n)(t[0])}}}function rf(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:return function(){return t(e.apply(
this,arguments))};case 3:return function(){return r(t(e.apply(this,arguments)))};case 4:return function(){return n(r(t(e.
apply(this,arguments))))};case 5:return function(){return a(n(r(t(e.apply(this,arguments)))))};case 6:return function(){
return i(a(n(r(t(e.apply(this,arguments))))))};case 7:return function(){return o(i(a(n(r(t(e.apply(this,arguments)))))))};case 8:
return function(){return s(o(i(a(n(r(t(e.apply(this,arguments))))))))};case 9:return function(){return l(s(o(i(a(n(r(t(e.
apply(this,arguments)))))))))}}}function Ew(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e}function _w(e){
return e+1}function xw(e){return e-1}function nf(e){throw new Error("Called `absurd` function which should be uncallable")}
function Aw(e){return function(t){return e.apply(void 0,t)}}function $w(e){return function(){for(var t=[],r=0;r<arguments.
length;r++)t[r]=arguments[r];return e(t)}}function Rw(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:
return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:
return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],
u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}X.hole=nf;var Ow=function(e,t){return t};X.SK=Ow;function Iw(e){
return function(t){return!e(t)}}var Cw=function(){return{concat:function(e,t){return rf(e,t)},empty:gc}};X.getEndomorphismMonoid=
Cw;var Nw=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,gw([a],n,!1))}}};X.dual=Nw});var Oi=We(Y=>{"use strict";var Pw=Y&&Y.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(Y,"__esModule",{value:!0});Y.flatMapReader=Y.flatMapTask=Y.flatMapIO=Y.flatMapEither=Y.flatMapOption=
Y.flatMapNullable=Y.liftOption=Y.liftNullable=Y.fromReadonlyNonEmptyArray=Y.has=Y.emptyRecord=Y.emptyReadonlyArray=Y.tail=
Y.head=Y.isNonEmpty=Y.singleton=Y.right=Y.left=Y.isRight=Y.isLeft=Y.some=Y.none=Y.isSome=Y.isNone=void 0;var ja=jn(),Mw=function(e){
return e._tag==="None"};Y.isNone=Mw;var Dw=function(e){return e._tag==="Some"};Y.isSome=Dw;Y.none={_tag:"None"};var jw=function(e){
return{_tag:"Some",value:e}};Y.some=jw;var Lw=function(e){return e._tag==="Left"};Y.isLeft=Lw;var Uw=function(e){return e.
_tag==="Right"};Y.isRight=Uw;var Fw=function(e){return{_tag:"Left",left:e}};Y.left=Fw;var Bw=function(e){return{_tag:"Ri\
ght",right:e}};Y.right=Bw;var Hw=function(e){return[e]};Y.singleton=Hw;var Ww=function(e){return e.length>0};Y.isNonEmpty=
Ww;var qw=function(e){return e[0]};Y.head=qw;var Vw=function(e){return e.slice(1)};Y.tail=Vw;Y.emptyReadonlyArray=[];Y.emptyRecord=
{};Y.has=Object.prototype.hasOwnProperty;var Yw=function(e){return Pw([e[0]],e.slice(1),!0)};Y.fromReadonlyNonEmptyArray=
Yw;var zw=function(e){return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.
apply(void 0,n);return e.fromEither(i==null?(0,Y.left)(r.apply(void 0,n)):(0,Y.right)(i))}}};Y.liftNullable=zw;var Kw=function(e){
return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.apply(void 0,n);
return e.fromEither((0,Y.isNone)(i)?(0,Y.left)(r.apply(void 0,n)):(0,Y.right)(i.value))}}};Y.liftOption=Kw;var Gw=function(e,t){
return(0,ja.dual)(3,function(r,n,a){return t.flatMap(r,(0,Y.liftNullable)(e)(n,a))})};Y.flatMapNullable=Gw;var Jw=function(e,t){
return(0,ja.dual)(3,function(r,n,a){return t.flatMap(r,(0,Y.liftOption)(e)(n,a))})};Y.flatMapOption=Jw;var Zw=function(e,t){
return(0,ja.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromEither(n(a))})})};Y.flatMapEither=Zw;var Xw=function(e,t){
return(0,ja.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromIO(n(a))})})};Y.flatMapIO=Xw;var Qw=function(e,t){
return(0,ja.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromTask(n(a))})})};Y.flatMapTask=Qw;var eT=function(e,t){
return(0,ja.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromReader(n(a))})})};Y.flatMapReader=eT});var bc=We(Lt=>{"use strict";var tT=Lt&&Lt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),rT=Lt&&Lt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),nT=Lt&&
Lt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&tT(t,e,r);return rT(t,e),t};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.ap=oT;Lt.apFirst=
sT;Lt.apSecond=lT;Lt.apS=cT;Lt.getApplySemigroup=uT;Lt.sequenceT=pT;Lt.sequenceS=hT;var aT=jn(),iT=nT(Oi());function oT(e,t){
return function(r){return function(n){return e.ap(e.map(n,function(a){return function(i){return t.ap(a,i)}}),r)}}}function sT(e){
return function(t){return function(r){return e.ap(e.map(r,function(n){return function(){return n}}),t)}}}function lT(e){
return function(t){return function(r){return e.ap(e.map(r,function(){return function(n){return n}}),t)}}}function cT(e){
return function(t,r){return function(n){return e.ap(e.map(n,function(a){return function(i){var o;return Object.assign({},
a,(o={},o[t]=i,o))}}),r)}}}function uT(e){return function(t){return{concat:function(r,n){return e.ap(e.map(r,function(a){
return function(i){return t.concat(a,i)}}),n)}}}}function vc(e,t,r){return function(n){for(var a=Array(r.length+1),i=0;i<
r.length;i++)a[i]=r[i];return a[r.length]=n,t===0?e.apply(null,a):vc(e,t-1,a)}}var yc={1:function(e){return[e]},2:function(e){
return function(t){return[e,t]}},3:function(e){return function(t){return function(r){return[e,t,r]}}},4:function(e){return function(t){
return function(r){return function(n){return[e,t,r,n]}}}},5:function(e){return function(t){return function(r){return function(n){
return function(a){return[e,t,r,n,a]}}}}}};function dT(e){return iT.has.call(yc,e)||(yc[e]=vc(aT.tuple,e-1,[])),yc[e]}function pT(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=t.length,a=dT(n),i=e.map(t[0],a),o=1;o<
n;o++)i=e.ap(i,t[o]);return i}}function fT(e){var t=e.length;switch(t){case 1:return function(r){var n;return n={},n[e[0]]=
r,n};case 2:return function(r){return function(n){var a;return a={},a[e[0]]=r,a[e[1]]=n,a}};case 3:return function(r){return function(n){
return function(a){var i;return i={},i[e[0]]=r,i[e[1]]=n,i[e[2]]=a,i}}};case 4:return function(r){return function(n){return function(a){
return function(i){var o;return o={},o[e[0]]=r,o[e[1]]=n,o[e[2]]=a,o[e[3]]=i,o}}}};case 5:return function(r){return function(n){
return function(a){return function(i){return function(o){var s;return s={},s[e[0]]=r,s[e[1]]=n,s[e[2]]=a,s[e[3]]=i,s[e[4]]=
o,s}}}}};default:return vc(function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var a={},i=0;i<t;i++)
a[e[i]]=r[i];return a},t-1,[])}}function hT(e){return function(t){for(var r=Object.keys(t),n=r.length,a=fT(r),i=e.map(t[r[0]],
a),o=1;o<n;o++)i=e.ap(i,t[r[o]]);return i}}});var _s=We(mn=>{"use strict";Object.defineProperty(mn,"__esModule",{value:!0});mn.map=af;mn.flap=gT;mn.bindTo=yT;mn.let=vT;
mn.getFunctorComposition=bT;mn.as=of;mn.asUnit=wT;var mT=jn();function af(e,t){return function(r){return function(n){return e.
map(n,function(a){return t.map(a,r)})}}}function gT(e){return function(t){return function(r){return e.map(r,function(n){
return n(t)})}}}function yT(e){return function(t){return function(r){return e.map(r,function(n){var a;return a={},a[t]=n,
a})}}}function vT(e){return function(t,r){return function(n){return e.map(n,function(a){var i;return Object.assign({},a,
(i={},i[t]=r(a),i))})}}}function bT(e,t){var r=af(e,t);return{map:function(n,a){return(0,mT.pipe)(n,r(a))}}}function of(e){
return function(t,r){return e.map(t,function(){return r})}}function wT(e){var t=of(e);return function(r){return t(r,void 0)}}});var lf=We(xs=>{"use strict";Object.defineProperty(xs,"__esModule",{value:!0});xs.getApplicativeMonoid=ST;xs.getApplicativeComposition=
ET;var sf=bc(),TT=jn(),kT=_s();function ST(e){var t=(0,sf.getApplySemigroup)(e);return function(r){return{concat:t(r).concat,
empty:e.of(r.empty)}}}function ET(e,t){var r=(0,kT.getFunctorComposition)(e,t).map,n=(0,sf.ap)(e,t);return{map:r,of:function(a){
return e.of(t.of(a))},ap:function(a,i){return(0,TT.pipe)(a,n(i))}}}});var wc=We(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.chainFirst=_T;Ii.tap=cf;Ii.bind=xT;function _T(e){
var t=cf(e);return function(r){return function(n){return t(n,r)}}}function cf(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}function xT(e){return function(t,r){return function(n){return e.chain(n,function(a){
return e.map(r(a),function(i){var o;return Object.assign({},a,(o={},o[t]=i,o))})})}}}});var uf=We(As=>{"use strict";Object.defineProperty(As,"__esModule",{value:!0});As.tailRec=void 0;var AT=function(e,t){for(var r=t(
e);r._tag==="Left";)r=t(r.left);return r.right};As.tailRec=AT});var mf=We(kt=>{"use strict";var $T=kt&&kt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),RT=kt&&kt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),OT=kt&&
kt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&$T(t,e,r);return RT(t,e),t};Object.defineProperty(kt,"__esModule",{value:!0});kt.fromOption=pf;
kt.fromPredicate=CT;kt.fromOptionK=ff;kt.chainOptionK=NT;kt.fromEitherK=Tc;kt.chainEitherK=PT;kt.chainFirstEitherK=MT;kt.
filterOrElse=DT;kt.tapEither=hf;var IT=wc(),df=jn(),sa=OT(Oi());function pf(e){return function(t){return function(r){return e.
fromEither(sa.isNone(r)?sa.left(t()):sa.right(r.value))}}}function CT(e){return function(t,r){return function(n){return e.
fromEither(t(n)?sa.right(n):sa.left(r(n)))}}}function ff(e){var t=pf(e);return function(r){var n=t(r);return function(a){
return(0,df.flow)(a,n)}}}function NT(e,t){var r=ff(e);return function(n){var a=r(n);return function(i){return function(o){
return t.chain(o,a(i))}}}}function Tc(e){return function(t){return(0,df.flow)(t,e.fromEither)}}function PT(e,t){var r=Tc(
e);return function(n){return function(a){return t.chain(a,r(n))}}}function MT(e,t){var r=hf(e,t);return function(n){return function(a){
return r(a,n)}}}function DT(e,t){return function(r,n){return function(a){return t.chain(a,function(i){return e.fromEither(
r(i)?sa.right(i):sa.left(n(i)))})}}}function hf(e,t){var r=Tc(e),n=(0,IT.tap)(t);return function(a,i){return n(a,r(i))}}});var gf=We(Te=>{"use strict";Object.defineProperty(Te,"__esModule",{value:!0});Te.right=Te.left=Te.flap=Te.Functor=Te.Bifunctor=
Te.URI=Te.bimap=Te.mapLeft=Te.map=Te.separated=void 0;var kc=jn(),jT=_s(),LT=function(e,t){return{left:e,right:t}};Te.separated=
LT;var UT=function(e,t){return(0,kc.pipe)(e,(0,Te.map)(t))},FT=function(e,t){return(0,kc.pipe)(e,(0,Te.mapLeft)(t))},BT=function(e,t,r){
return(0,kc.pipe)(e,(0,Te.bimap)(t,r))},HT=function(e){return function(t){return(0,Te.separated)((0,Te.left)(t),e((0,Te.
right)(t)))}};Te.map=HT;var WT=function(e){return function(t){return(0,Te.separated)(e((0,Te.left)(t)),(0,Te.right)(t))}};
Te.mapLeft=WT;var qT=function(e,t){return function(r){return(0,Te.separated)(e((0,Te.left)(r)),t((0,Te.right)(r)))}};Te.
bimap=qT;Te.URI="Separated";Te.Bifunctor={URI:Te.URI,mapLeft:FT,bimap:BT};Te.Functor={URI:Te.URI,map:UT};Te.flap=(0,jT.flap)(
Te.Functor);var VT=function(e){return e.left};Te.left=VT;var YT=function(e){return e.right};Te.right=YT});var vf=We(qr=>{"use strict";var zT=qr&&qr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),KT=qr&&qr.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),GT=qr&&
qr.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&zT(t,e,r);return KT(t,e),t};Object.defineProperty(qr,"__esModule",{value:!0});qr.wiltDefault=JT;
qr.witherDefault=ZT;qr.filterE=XT;var yf=GT(Oi());function JT(e,t){return function(r){var n=e.traverse(r);return function(a,i){
return r.map(n(a,i),t.separate)}}}function ZT(e,t){return function(r){var n=e.traverse(r);return function(a,i){return r.
map(n(a,i),t.compact)}}}function XT(e){return function(t){var r=e.wither(t);return function(n){return function(a){return r(
a,function(i){return t.map(n(i),function(o){return o?yf.some(i):yf.none})})}}}}});var xf=We(m=>{"use strict";var QT=m&&m.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),ek=m&&m.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),wf=m&&
m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&QT(t,e,r);return ek(t,e),t};Object.defineProperty(m,"__esModule",{value:!0});m.match=m.foldW=m.
matchW=m.isRight=m.isLeft=m.fromOption=m.fromPredicate=m.FromEither=m.MonadThrow=m.throwError=m.ChainRec=m.Extend=m.extend=
m.Alt=m.alt=m.altW=m.Bifunctor=m.mapLeft=m.bimap=m.Traversable=m.sequence=m.traverse=m.Foldable=m.reduceRight=m.foldMap=
m.reduce=m.Monad=m.Chain=m.Applicative=m.Apply=m.ap=m.apW=m.Pointed=m.of=m.asUnit=m.as=m.Functor=m.map=m.getAltValidation=
m.getApplicativeValidation=m.getWitherable=m.getFilterable=m.getCompactable=m.getSemigroup=m.getEq=m.getShow=m.URI=m.flatMap=
m.right=m.left=void 0;m.either=m.stringifyJSON=m.chainFirstW=m.chainFirst=m.chain=m.chainW=m.sequenceArray=m.traverseArray=
m.traverseArrayWithIndex=m.traverseReadonlyArrayWithIndex=m.traverseReadonlyNonEmptyArrayWithIndex=m.ApT=m.apSW=m.apS=m.
bindW=m.bind=m.let=m.bindTo=m.Do=m.exists=m.toUnion=m.chainNullableK=m.fromNullableK=m.tryCatchK=m.tryCatch=m.fromNullable=
m.orElse=m.orElseW=m.swap=m.filterOrElseW=m.filterOrElse=m.flatMapOption=m.flatMapNullable=m.liftOption=m.liftNullable=m.
chainOptionKW=m.chainOptionK=m.fromOptionK=m.duplicate=m.flatten=m.flattenW=m.tap=m.apSecondW=m.apSecond=m.apFirstW=m.apFirst=
m.flap=m.getOrElse=m.getOrElseW=m.fold=void 0;m.getValidationMonoid=m.getValidationSemigroup=m.getApplyMonoid=m.getApplySemigroup=
void 0;m.toError=Ok;m.elem=_f;m.parseJSON=Dk;m.getValidation=Fk;var Tf=lf(),Ci=bc(),kf=wf(wc()),tk=uf(),Ni=mf(),lt=jn(),
Pi=_s(),Cr=wf(Oi()),gn=gf(),bf=vf();m.left=Cr.left;m.right=Cr.right;m.flatMap=(0,lt.dual)(2,function(e,t){return(0,m.isLeft)(
e)?e:t(e.right)});var Ot=function(e,t){return(0,lt.pipe)(e,(0,m.map)(t))},la=function(e,t){return(0,lt.pipe)(e,(0,m.ap)(
t))},Mi=function(e,t,r){return(0,lt.pipe)(e,(0,m.reduce)(t,r))},Di=function(e){return function(t,r){var n=(0,m.foldMap)(
e);return(0,lt.pipe)(t,n(r))}},ji=function(e,t,r){return(0,lt.pipe)(e,(0,m.reduceRight)(t,r))},$s=function(e){var t=(0,m.
traverse)(e);return function(r,n){return(0,lt.pipe)(r,t(n))}},Sc=function(e,t,r){return(0,lt.pipe)(e,(0,m.bimap)(t,r))},
Ec=function(e,t){return(0,lt.pipe)(e,(0,m.mapLeft)(t))},Sf=function(e,t){return(0,lt.pipe)(e,(0,m.alt)(t))},_c=function(e,t){
return(0,lt.pipe)(e,(0,m.extend)(t))},xc=function(e,t){return(0,tk.tailRec)(t(e),function(r){return(0,m.isLeft)(r)?(0,m.
right)((0,m.left)(r.left)):(0,m.isLeft)(r.right)?(0,m.left)(t(r.right.left)):(0,m.right)((0,m.right)(r.right.right))})};
m.URI="Either";var rk=function(e,t){return{show:function(r){return(0,m.isLeft)(r)?"left(".concat(e.show(r.left),")"):"ri\
ght(".concat(t.show(r.right),")")}}};m.getShow=rk;var nk=function(e,t){return{equals:function(r,n){return r===n||((0,m.isLeft)(
r)?(0,m.isLeft)(n)&&e.equals(r.left,n.left):(0,m.isRight)(n)&&t.equals(r.right,n.right))}}};m.getEq=nk;var ak=function(e){
return{concat:function(t,r){return(0,m.isLeft)(r)?t:(0,m.isLeft)(t)?r:(0,m.right)(e.concat(t.right,r.right))}}};m.getSemigroup=
ak;var ik=function(e){var t=(0,m.left)(e.empty);return{URI:m.URI,_E:void 0,compact:function(r){return(0,m.isLeft)(r)?r:r.
right._tag==="None"?t:(0,m.right)(r.right.value)},separate:function(r){return(0,m.isLeft)(r)?(0,gn.separated)(r,r):(0,m.
isLeft)(r.right)?(0,gn.separated)((0,m.right)(r.right.left),t):(0,gn.separated)(t,(0,m.right)(r.right.right))}}};m.getCompactable=
ik;var ok=function(e){var t=(0,m.left)(e.empty),r=(0,m.getCompactable)(e),n=r.compact,a=r.separate,i=function(s,l){return(0,m.
isLeft)(s)||l(s.right)?s:t},o=function(s,l){return(0,m.isLeft)(s)?(0,gn.separated)(s,s):l(s.right)?(0,gn.separated)(t,(0,m.
right)(s.right)):(0,gn.separated)((0,m.right)(s.right),t)};return{URI:m.URI,_E:void 0,map:Ot,compact:n,separate:a,filter:i,
filterMap:function(s,l){if((0,m.isLeft)(s))return s;var c=l(s.right);return c._tag==="None"?t:(0,m.right)(c.value)},partition:o,
partitionMap:function(s,l){if((0,m.isLeft)(s))return(0,gn.separated)(s,s);var c=l(s.right);return(0,m.isLeft)(c)?(0,gn.separated)(
(0,m.right)(c.left),t):(0,gn.separated)(t,(0,m.right)(c.right))}}};m.getFilterable=ok;var sk=function(e){var t=(0,m.getFilterable)(
e),r=(0,m.getCompactable)(e);return{URI:m.URI,_E:void 0,map:Ot,compact:t.compact,separate:t.separate,filter:t.filter,filterMap:t.
filterMap,partition:t.partition,partitionMap:t.partitionMap,traverse:$s,sequence:m.sequence,reduce:Mi,foldMap:Di,reduceRight:ji,
wither:(0,bf.witherDefault)(m.Traversable,r),wilt:(0,bf.wiltDefault)(m.Traversable,r)}};m.getWitherable=sk;var lk=function(e){
return{URI:m.URI,_E:void 0,map:Ot,ap:function(t,r){return(0,m.isLeft)(t)?(0,m.isLeft)(r)?(0,m.left)(e.concat(t.left,r.left)):
t:(0,m.isLeft)(r)?r:(0,m.right)(t.right(r.right))},of:m.of}};m.getApplicativeValidation=lk;var ck=function(e){return{URI:m.
URI,_E:void 0,map:Ot,alt:function(t,r){if((0,m.isRight)(t))return t;var n=r();return(0,m.isLeft)(n)?(0,m.left)(e.concat(
t.left,n.left)):n}}};m.getAltValidation=ck;var uk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.right)(e(t.
right))}};m.map=uk;m.Functor={URI:m.URI,map:Ot};m.as=(0,lt.dual)(2,(0,Pi.as)(m.Functor));m.asUnit=(0,Pi.asUnit)(m.Functor);
m.of=m.right;m.Pointed={URI:m.URI,of:m.of};var dk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.isLeft)(e)?
e:(0,m.right)(t.right(e.right))}};m.apW=dk;m.ap=m.apW;m.Apply={URI:m.URI,map:Ot,ap:la};m.Applicative={URI:m.URI,map:Ot,ap:la,
of:m.of};m.Chain={URI:m.URI,map:Ot,ap:la,chain:m.flatMap};m.Monad={URI:m.URI,map:Ot,ap:la,of:m.of,chain:m.flatMap};var pk=function(e,t){
return function(r){return(0,m.isLeft)(r)?e:t(e,r.right)}};m.reduce=pk;var fk=function(e){return function(t){return function(r){
return(0,m.isLeft)(r)?e.empty:t(r.right)}}};m.foldMap=fk;var hk=function(e,t){return function(r){return(0,m.isLeft)(r)?e:
t(r.right,e)}};m.reduceRight=hk;m.Foldable={URI:m.URI,reduce:Mi,foldMap:Di,reduceRight:ji};var mk=function(e){return function(t){
return function(r){return(0,m.isLeft)(r)?e.of((0,m.left)(r.left)):e.map(t(r.right),m.right)}}};m.traverse=mk;var gk=function(e){
return function(t){return(0,m.isLeft)(t)?e.of((0,m.left)(t.left)):e.map(t.right,m.right)}};m.sequence=gk;m.Traversable={
URI:m.URI,map:Ot,reduce:Mi,foldMap:Di,reduceRight:ji,traverse:$s,sequence:m.sequence};var yk=function(e,t){return function(r){
return(0,m.isLeft)(r)?(0,m.left)(e(r.left)):(0,m.right)(t(r.right))}};m.bimap=yk;var vk=function(e){return function(t){return(0,m.
isLeft)(t)?(0,m.left)(e(t.left)):t}};m.mapLeft=vk;m.Bifunctor={URI:m.URI,bimap:Sc,mapLeft:Ec};var bk=function(e){return function(t){
return(0,m.isLeft)(t)?e():t}};m.altW=bk;m.alt=m.altW;m.Alt={URI:m.URI,map:Ot,alt:Sf};var wk=function(e){return function(t){
return(0,m.isLeft)(t)?t:(0,m.right)(e(t))}};m.extend=wk;m.Extend={URI:m.URI,map:Ot,extend:_c};m.ChainRec={URI:m.URI,map:Ot,
ap:la,chain:m.flatMap,chainRec:xc};m.throwError=m.left;m.MonadThrow={URI:m.URI,map:Ot,ap:la,of:m.of,chain:m.flatMap,throwError:m.
throwError};m.FromEither={URI:m.URI,fromEither:lt.identity};m.fromPredicate=(0,Ni.fromPredicate)(m.FromEither);m.fromOption=
(0,Ni.fromOption)(m.FromEither);m.isLeft=Cr.isLeft;m.isRight=Cr.isRight;var Tk=function(e,t){return function(r){return(0,m.
isLeft)(r)?e(r.left):t(r.right)}};m.matchW=Tk;m.foldW=m.matchW;m.match=m.matchW;m.fold=m.match;var kk=function(e){return function(t){
return(0,m.isLeft)(t)?e(t.left):t.right}};m.getOrElseW=kk;m.getOrElse=m.getOrElseW;m.flap=(0,Pi.flap)(m.Functor);m.apFirst=
(0,Ci.apFirst)(m.Apply);m.apFirstW=m.apFirst;m.apSecond=(0,Ci.apSecond)(m.Apply);m.apSecondW=m.apSecond;m.tap=(0,lt.dual)(
2,kf.tap(m.Chain));m.flattenW=(0,m.flatMap)(lt.identity);m.flatten=m.flattenW;m.duplicate=(0,m.extend)(lt.identity);m.fromOptionK=
(0,Ni.fromOptionK)(m.FromEither);m.chainOptionK=(0,Ni.chainOptionK)(m.FromEither,m.Chain);m.chainOptionKW=m.chainOptionK;
var Rs={fromEither:m.FromEither.fromEither};m.liftNullable=Cr.liftNullable(Rs);m.liftOption=Cr.liftOption(Rs);var Ef={flatMap:m.
flatMap};m.flatMapNullable=Cr.flatMapNullable(Rs,Ef);m.flatMapOption=Cr.flatMapOption(Rs,Ef);m.filterOrElse=(0,Ni.filterOrElse)(
m.FromEither,m.Chain);m.filterOrElseW=m.filterOrElse;var Sk=function(e){return(0,m.isLeft)(e)?(0,m.right)(e.left):(0,m.left)(
e.right)};m.swap=Sk;var Ek=function(e){return function(t){return(0,m.isLeft)(t)?e(t.left):t}};m.orElseW=Ek;m.orElse=m.orElseW;
var _k=function(e){return function(t){return t==null?(0,m.left)(e):(0,m.right)(t)}};m.fromNullable=_k;var xk=function(e,t){
try{return(0,m.right)(e())}catch(r){return(0,m.left)(t(r))}};m.tryCatch=xk;var Ak=function(e,t){return function(){for(var r=[],
n=0;n<arguments.length;n++)r[n]=arguments[n];return(0,m.tryCatch)(function(){return e.apply(void 0,r)},t)}};m.tryCatchK=
Ak;var $k=function(e){var t=(0,m.fromNullable)(e);return function(r){return(0,lt.flow)(r,t)}};m.fromNullableK=$k;var Rk=function(e){
var t=(0,m.fromNullableK)(e);return function(r){return(0,m.flatMap)(t(r))}};m.chainNullableK=Rk;m.toUnion=(0,m.foldW)(lt.
identity,lt.identity);function Ok(e){try{return e instanceof Error?e:new Error(String(e))}catch{return new Error}}function _f(e){
return function(t,r){if(r===void 0){var n=_f(e);return function(a){return n(t,a)}}return(0,m.isLeft)(r)?!1:e.equals(t,r.
right)}}var Ik=function(e){return function(t){return(0,m.isLeft)(t)?!1:e(t.right)}};m.exists=Ik;m.Do=(0,m.of)(Cr.emptyRecord);
m.bindTo=(0,Pi.bindTo)(m.Functor);var Ck=(0,Pi.let)(m.Functor);m.let=Ck;m.bind=kf.bind(m.Chain);m.bindW=m.bind;m.apS=(0,Ci.
apS)(m.Apply);m.apSW=m.apS;m.ApT=(0,m.of)(Cr.emptyReadonlyArray);var Nk=function(e){return function(t){var r=e(0,Cr.head(
t));if((0,m.isLeft)(r))return r;for(var n=[r.right],a=1;a<t.length;a++){var i=e(a,t[a]);if((0,m.isLeft)(i))return i;n.push(
i.right)}return(0,m.right)(n)}};m.traverseReadonlyNonEmptyArrayWithIndex=Nk;var Pk=function(e){var t=(0,m.traverseReadonlyNonEmptyArrayWithIndex)(
e);return function(r){return Cr.isNonEmpty(r)?t(r):m.ApT}};m.traverseReadonlyArrayWithIndex=Pk;m.traverseArrayWithIndex=
m.traverseReadonlyArrayWithIndex;var Mk=function(e){return(0,m.traverseReadonlyArrayWithIndex)(function(t,r){return e(r)})};
m.traverseArray=Mk;m.sequenceArray=(0,m.traverseArray)(lt.identity);m.chainW=m.flatMap;m.chain=m.flatMap;m.chainFirst=m.
tap;m.chainFirstW=m.tap;function Dk(e,t){return(0,m.tryCatch)(function(){return JSON.parse(e)},t)}var jk=function(e,t){return(0,m.
tryCatch)(function(){var r=JSON.stringify(e);if(typeof r!="string")throw new Error("Converting unsupported structure to \
JSON");return r},t)};m.stringifyJSON=jk;m.either={URI:m.URI,map:Ot,of:m.of,ap:la,chain:m.flatMap,reduce:Mi,foldMap:Di,reduceRight:ji,
traverse:$s,sequence:m.sequence,bimap:Sc,mapLeft:Ec,alt:Sf,extend:_c,chainRec:xc,throwError:m.throwError};m.getApplySemigroup=
(0,Ci.getApplySemigroup)(m.Apply);m.getApplyMonoid=(0,Tf.getApplicativeMonoid)(m.Applicative);var Lk=function(e,t){return(0,Ci.
getApplySemigroup)((0,m.getApplicativeValidation)(e))(t)};m.getValidationSemigroup=Lk;var Uk=function(e,t){return(0,Tf.getApplicativeMonoid)(
(0,m.getApplicativeValidation)(e))(t)};m.getValidationMonoid=Uk;function Fk(e){var t=(0,m.getApplicativeValidation)(e).ap,
r=(0,m.getAltValidation)(e).alt;return{URI:m.URI,_E:void 0,map:Ot,of:m.of,chain:m.flatMap,bimap:Sc,mapLeft:Ec,reduce:Mi,
foldMap:Di,reduceRight:ji,extend:_c,traverse:$s,sequence:m.sequence,chainRec:xc,throwError:m.throwError,ap:t,alt:r}}});var je=We(w=>{"use strict";var Ie=w&&w.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},
e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is\
 not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.
prototype,new n)}}(),La=w&&w.__assign||function(){return La=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<
n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},La.apply(this,arguments)},
Bk=w&&w.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=
Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(w,
"__esModule",{value:!0});w.partial=w.PartialType=w.type=w.InterfaceType=w.array=w.ArrayType=w.recursion=w.RecursiveType=
w.Int=w.brand=w.RefinementType=w.keyof=w.KeyofType=w.literal=w.LiteralType=w.void=w.undefined=w.null=w.UnknownRecord=w.AnyDictionaryType=
w.UnknownArray=w.AnyArrayType=w.boolean=w.BooleanType=w.bigint=w.BigIntType=w.number=w.NumberType=w.string=w.StringType=
w.unknown=w.UnknownType=w.voidType=w.VoidType=w.UndefinedType=w.nullType=w.NullType=w.getIndex=w.getTags=w.emptyTags=w.mergeAll=
w.getDomainKeys=w.appendContext=w.getContextEntry=w.getFunctionName=w.identity=w.Type=w.success=w.failure=w.failures=void 0;
w.alias=w.clean=w.StrictType=w.dictionary=w.object=w.ObjectType=w.Dictionary=w.getDefaultContext=w.getValidationError=w.
interface=w.Array=w.taggedUnion=w.TaggedUnionType=w.Integer=w.refinement=w.any=w.AnyType=w.never=w.NeverType=w.Function=
w.FunctionType=w.exact=w.ExactType=w.strict=w.readonlyArray=w.ReadonlyArrayType=w.readonly=w.ReadonlyType=w.tuple=w.TupleType=
w.intersection=w.IntersectionType=w.union=w.UnionType=w.record=w.DictionaryType=void 0;var ct=xf();w.failures=ct.left;var Hk=function(e,t,r){
return(0,w.failures)([{value:e,context:t,message:r}])};w.failure=Hk;w.success=ct.right;var Ce=function(){function e(t,r,n,a){
this.name=t,this.is=r,this.validate=n,this.encode=a,this.decode=this.decode.bind(this)}return e.prototype.pipe=function(t,r){
var n=this;return r===void 0&&(r="pipe(".concat(this.name,", ").concat(t.name,")")),new e(r,t.is,function(a,i){var o=n.validate(
a,i);return(0,ct.isLeft)(o)?o:t.validate(o.right,i)},this.encode===w.identity&&t.encode===w.identity?w.identity:function(a){
return n.encode(t.encode(a))})},e.prototype.asDecoder=function(){return this},e.prototype.asEncoder=function(){return this},
e.prototype.decode=function(t){return this.validate(t,[{key:"",type:this,actual:t}])},e}();w.Type=Ce;var Wk=function(e){
return e};w.identity=Wk;function Of(e){return e.displayName||e.name||"<function".concat(e.length,">")}w.getFunctionName=
Of;function qk(e,t){return{key:e,type:t}}w.getContextEntry=qk;function Zr(e,t,r,n){for(var a=e.length,i=Array(a+1),o=0;o<
a;o++)i[o]=e[o];return i[a]={key:t,type:r,actual:n},i}w.appendContext=Zr;function ua(e,t){for(var r=t.length,n=0;n<r;n++)
e.push(t[n])}var ca=Object.prototype.hasOwnProperty;function $c(e){return Object.keys(e).map(function(t){return"".concat(
t,": ").concat(e[t].name)}).join(", ")}function Li(e){for(var t=0;t<e.length;t++)if(e[t].encode!==w.identity)return!1;return!0}
function If(e){return"{ ".concat($c(e)," }")}function Cf(e){return"Partial<".concat(e,">")}function Vk(e,t,r,n){n===void 0&&
(n="{ [K in ".concat(t.name,"]: ").concat(r.name," }"));for(var a=e.length,i={},o=0;o<a;o++)i[e[o]]=r;var s=(0,w.strict)(
i,n);return new Pc(n,function(l){return s.is(l)},s.validate,s.encode,t,r)}function Ic(e){var t;if(Mf(e)){var r=e.value;if(w.
string.is(r))return t={},t[r]=null,t}else{if(Zk(e))return e.keys;if(jf(e)){var n=e.types.map(function(a){return Ic(a)});
return n.some(Os.is)?void 0:Object.assign.apply(Object,Bk([{}],n,!1))}}}w.getDomainKeys=Ic;function Af(e,t){for(var r=Object.
keys(e),n=r.length,a=!1,i={},o=0;o<n;o++){var s=r[o];t.is(s)?i[s]=e[s]:a=!0}return a?i:e}function Yk(e,t,r){return r===void 0&&
(r="{ [K in ".concat(e.name,"]: ").concat(t.name," }")),new Pc(r,function(n){return w.UnknownRecord.is(n)?Object.keys(n).
every(function(a){return!e.is(a)||t.is(n[a])}):Rf(t)&&Array.isArray(n)},function(n,a){if(w.UnknownRecord.is(n)){for(var i={},
o=[],s=Object.keys(n),l=s.length,c=!1,u=0;u<l;u++){var d=s[u],f=n[d],h=e.validate(d,Zr(a,d,e,d));if((0,ct.isLeft)(h))c=!0;else{
var v=h.right;c=c||v!==d,d=v;var b=t.validate(f,Zr(a,d,t,f));if((0,ct.isLeft)(b))ua(o,b.left);else{var T=b.right;c=c||T!==
f,i[d]=T}}}return o.length>0?(0,w.failures)(o):(0,w.success)(c?i:n)}return Rf(t)&&Array.isArray(n)?(0,w.success)(n):(0,w.
failure)(n,a)},e.encode===w.identity&&t.encode===w.identity?function(n){return Af(n,e)}:function(n){for(var a={},i=Object.
keys(Af(n,e)),o=i.length,s=0;s<o;s++){var l=i[s];a[String(e.encode(l))]=t.encode(n[l])}return a},e,t)}function Nf(e){return"\
("+e.map(function(t){return t.name}).join(" | ")+")"}function Rc(e,t){for(var r=!0,n=!0,a=!w.UnknownRecord.is(e),i=0,o=t;i<
o.length;i++){var s=o[i];s!==e&&(r=!1),w.UnknownRecord.is(s)&&(n=!1)}if(r)return e;if(n)return t[t.length-1];for(var l={},
c=0,u=t;c<u.length;c++){var s=u[c];for(var d in s)(!ca.call(l,d)||a||s[d]!==e[d])&&(l[d]=s[d])}return l}w.mergeAll=Rc;function Oc(e){
switch(e._tag){case"RefinementType":case"ReadonlyType":return Oc(e.type);case"InterfaceType":case"StrictType":case"Parti\
alType":return e.props;case"IntersectionType":return e.types.reduce(function(t,r){return Object.assign(t,Oc(r))},{})}}function $f(e,t){
for(var r=Object.getOwnPropertyNames(e),n=!1,a={},i=0;i<r.length;i++){var o=r[i];ca.call(t,o)?a[o]=e[o]:n=!0}return n?a:
e}function zk(e){return Df(e)?"{| ".concat($c(e.props)," |}"):Xk(e)?Cf("{| ".concat($c(e.props)," |}")):"Exact<".concat(
e.name,">")}function Kk(e){return e.length>0}w.emptyTags={};function Pf(e,t){for(var r=[],n=0,a=e;n<a.length;n++){var i=a[n];
t.indexOf(i)!==-1&&r.push(i)}return r}function Gk(e,t){if(e===w.emptyTags)return t;if(t===w.emptyTags)return e;var r=Object.
assign({},e);for(var n in t)if(ca.call(e,n)){var a=Pf(e[n],t[n]);if(Kk(a))r[n]=a;else{r=w.emptyTags;break}}else r[n]=t[n];
return r}function Jk(e,t){if(e===w.emptyTags||t===w.emptyTags)return w.emptyTags;var r=w.emptyTags;for(var n in e)if(ca.
call(t,n)){var a=Pf(e[n],t[n]);a.length===0&&(r===w.emptyTags&&(r={}),r[n]=e[n].concat(t[n]))}return r}function Rf(e){return e.
_tag==="AnyType"}function Mf(e){return e._tag==="LiteralType"}function Zk(e){return e._tag==="KeyofType"}function Df(e){
return e._tag==="InterfaceType"}function Xk(e){return e._tag==="PartialType"}function Qk(e){return e._tag==="StrictType"}
function e1(e){return e._tag==="ExactType"}function t1(e){return e._tag==="RefinementType"}function r1(e){return e._tag===
"IntersectionType"}function jf(e){return e._tag==="UnionType"}function n1(e){return e._tag==="RecursiveType"}function a1(e){
return e._tag==="ReadonlyType"}var Ac=[];function Ln(e){if(Ac.indexOf(e)!==-1)return w.emptyTags;if(Df(e)||Qk(e)){var t=w.
emptyTags;for(var r in e.props){var n=e.props[r];Mf(n)&&(t===w.emptyTags&&(t={}),t[r]=[n.value])}return t}else{if(e1(e)||
t1(e)||a1(e))return Ln(e.type);if(r1(e))return e.types.reduce(function(i,o){return Gk(i,Ln(o))},w.emptyTags);if(jf(e))return e.
types.slice(1).reduce(function(i,o){return Jk(i,Ln(o))},Ln(e.types[0]));if(n1(e)){Ac.push(e);var a=Ln(e.type);return Ac.
pop(),a}}return w.emptyTags}w.getTags=Ln;function Lf(e){var t=Ln(e[0]),r=Object.keys(t),n=e.length,a=function(c){for(var u=t[c].
slice(),d=[t[c]],f=1;f<n;f++){var h=e[f],v=Ln(h),b=v[c];if(b===void 0)return"continue-keys";if(b.some(function(T){return u.
indexOf(T)!==-1}))return"continue-keys";u.push.apply(u,b),d.push(b)}return{value:[c,d]}};e:for(var i=0,o=r;i<o.length;i++){
var s=o[i],l=a(s);if(typeof l=="object")return l.value;switch(l){case"continue-keys":continue e}}}w.getIndex=Lf;var Uf=function(e){
Ie(t,e);function t(){var r=e.call(this,"null",function(n){return n===null},function(n,a){return r.is(n)?(0,w.success)(n):
(0,w.failure)(n,a)},w.identity)||this;return r._tag="NullType",r}return t}(Ce);w.NullType=Uf;w.nullType=new Uf;w.null=w.
nullType;var Ff=function(e){Ie(t,e);function t(){var r=e.call(this,"undefined",function(n){return n===void 0},function(n,a){
return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="UndefinedType",r}return t}(Ce);w.UndefinedType=
Ff;var Os=new Ff;w.undefined=Os;var Bf=function(e){Ie(t,e);function t(){var r=e.call(this,"void",Os.is,Os.validate,w.identity)||
this;return r._tag="VoidType",r}return t}(Ce);w.VoidType=Bf;w.voidType=new Bf;w.void=w.voidType;var Hf=function(e){Ie(t,
e);function t(){var r=e.call(this,"unknown",function(n){return!0},w.success,w.identity)||this;return r._tag="UnknownType",
r}return t}(Ce);w.UnknownType=Hf;w.unknown=new Hf;var Wf=function(e){Ie(t,e);function t(){var r=e.call(this,"string",function(n){
return typeof n=="string"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="StringType",r}return t}(Ce);w.StringType=Wf;w.string=new Wf;var qf=function(e){Ie(t,e);function t(){var r=e.call(this,
"number",function(n){return typeof n=="number"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||
this;return r._tag="NumberType",r}return t}(Ce);w.NumberType=qf;w.number=new qf;var Vf=function(e){Ie(t,e);function t(){
var r=e.call(this,"bigint",function(n){return typeof n=="bigint"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(
n,a)},w.identity)||this;return r._tag="BigIntType",r}return t}(Ce);w.BigIntType=Vf;w.bigint=new Vf;var Yf=function(e){Ie(
t,e);function t(){var r=e.call(this,"boolean",function(n){return typeof n=="boolean"},function(n,a){return r.is(n)?(0,w.
success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="BooleanType",r}return t}(Ce);w.BooleanType=Yf;w.boolean=
new Yf;var zf=function(e){Ie(t,e);function t(){var r=e.call(this,"UnknownArray",Array.isArray,function(n,a){return r.is(
n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="AnyArrayType",r}return t}(Ce);w.AnyArrayType=zf;
w.UnknownArray=new zf;w.Array=w.UnknownArray;var Kf=function(e){Ie(t,e);function t(){var r=e.call(this,"UnknownRecord",function(n){
return n!==null&&typeof n=="object"&&!Array.isArray(n)},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},
w.identity)||this;return r._tag="AnyDictionaryType",r}return t}(Ce);w.AnyDictionaryType=Kf;w.UnknownRecord=new Kf;var Gf=function(e){
Ie(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.value=o,s._tag="LiteralType",s}return t}(Ce);w.LiteralType=
Gf;function i1(e,t){t===void 0&&(t=JSON.stringify(e));var r=function(n){return n===e};return new Gf(t,r,function(n,a){return r(
n)?(0,w.success)(e):(0,w.failure)(n,a)},w.identity,e)}w.literal=i1;var Jf=function(e){Ie(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.keys=o,s._tag="KeyofType",s}return t}(Ce);w.KeyofType=Jf;function o1(e,t){t===void 0&&
(t=Object.keys(e).map(function(n){return JSON.stringify(n)}).join(" | "));var r=function(n){return w.string.is(n)&&ca.call(
e,n)};return new Jf(t,r,function(n,a){return r(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity,e)}w.keyof=o1;var Zf=function(e){
Ie(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i)||this;return l.type=o,l.predicate=s,l._tag="RefinementType",l}
return t}(Ce);w.RefinementType=Zf;function Xf(e,t,r){return Dc(e,t,r)}w.brand=Xf;w.Int=Xf(w.number,function(e){return Number.
isInteger(e)},"Int");var Cc=function(e){Ie(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.runDefinition=
o,s._tag="RecursiveType",s}return t}(Ce);w.RecursiveType=Cc;Object.defineProperty(Cc.prototype,"type",{get:function(){return this.
runDefinition()},enumerable:!0,configurable:!0});function s1(e,t){var r,n=function(){return r||(r=t(a),r.name=e),r},a=new Cc(
e,function(i){return n().is(i)},function(i,o){return n().validate(i,o)},function(i){return n().encode(i)},n);return a}w.
recursion=s1;var Qf=function(e){Ie(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="A\
rrayType",s}return t}(Ce);w.ArrayType=Qf;function eh(e,t){return t===void 0&&(t="Array<".concat(e.name,">")),new Qf(t,function(r){
return w.UnknownArray.is(r)&&r.every(e.is)},function(r,n){var a=w.UnknownArray.validate(r,n);if((0,ct.isLeft)(a))return a;
for(var i=a.right,o=i.length,s=i,l=[],c=0;c<o;c++){var u=i[c],d=e.validate(u,Zr(n,String(c),e,u));if((0,ct.isLeft)(d))ua(
l,d.left);else{var f=d.right;f!==u&&(s===i&&(s=i.slice()),s[c]=f)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},
e.encode===w.identity?w.identity:function(r){return r.map(e.encode)},e)}w.array=eh;var th=function(e){Ie(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.props=o,s._tag="InterfaceType",s}return t}(Ce);w.InterfaceType=th;function Nc(e,t){
t===void 0&&(t=If(e));var r=Object.keys(e),n=r.map(function(i){return e[i]}),a=r.length;return new th(t,function(i){if(w.
UnknownRecord.is(i)){for(var o=0;o<a;o++){var s=r[o],l=i[s];if(l===void 0&&!ca.call(i,s)||!n[o].is(l))return!1}return!0}
return!1},function(i,o){var s=w.UnknownRecord.validate(i,o);if((0,ct.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<
a;d++){var f=r[d],h=c[f],v=n[d],b=v.validate(h,Zr(o,f,v,h));if((0,ct.isLeft)(b))ua(u,b.left);else{var T=b.right;(T!==h||
T===void 0&&!ca.call(c,f))&&(c===l&&(c=La({},l)),c[f]=T)}}return u.length>0?(0,w.failures)(u):(0,w.success)(c)},Li(n)?w.
identity:function(i){for(var o=La({},i),s=0;s<a;s++){var l=r[s],c=n[s].encode;c!==w.identity&&(o[l]=c(i[l]))}return o},e)}
w.type=Nc;w.interface=Nc;var rh=function(e){Ie(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.props=
o,s._tag="PartialType",s}return t}(Ce);w.PartialType=rh;function l1(e,t){t===void 0&&(t=Cf(If(e)));var r=Object.keys(e),
n=r.map(function(i){return e[i]}),a=r.length;return new rh(t,function(i){if(w.UnknownRecord.is(i)){for(var o=0;o<a;o++){
var s=r[o],l=i[s];if(l!==void 0&&!e[s].is(l))return!1}return!0}return!1},function(i,o){var s=w.UnknownRecord.validate(i,
o);if((0,ct.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<a;d++){var f=r[d],h=c[f],v=e[f],b=v.validate(h,Zr(o,f,v,
h));if((0,ct.isLeft)(b))h!==void 0&&ua(u,b.left);else{var T=b.right;T!==h&&(c===l&&(c=La({},l)),c[f]=T)}}return u.length>
0?(0,w.failures)(u):(0,w.success)(c)},Li(n)?w.identity:function(i){for(var o=La({},i),s=0;s<a;s++){var l=r[s],c=i[l];c!==
void 0&&(o[l]=n[s].encode(c))}return o},e)}w.partial=l1;var Pc=function(e){Ie(t,e);function t(r,n,a,i,o,s){var l=e.call(
this,r,n,a,i)||this;return l.domain=o,l.codomain=s,l._tag="DictionaryType",l}return t}(Ce);w.DictionaryType=Pc;function nh(e,t,r){
var n=Ic(e);return n?Vk(Object.keys(n),e,t,r):Yk(e,t,r)}w.record=nh;var Mc=function(e){Ie(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.types=o,s._tag="UnionType",s}return t}(Ce);w.UnionType=Mc;function ah(e,t){t===void 0&&
(t=Nf(e));var r=Lf(e);if(r!==void 0&&e.length>0){var n=r[0],a=r[1],i=a.length,o=function(s){for(var l=0;l<i;l++)if(a[l].
indexOf(s)!==-1)return l};return new Is(t,function(s){if(w.UnknownRecord.is(s)){var l=o(s[n]);return l!==void 0?e[l].is(
s):!1}return!1},function(s,l){var c=w.UnknownRecord.validate(s,l);if((0,ct.isLeft)(c))return c;var u=c.right,d=o(u[n]);if(d===
void 0)return(0,w.failure)(s,l);var f=e[d];return f.validate(u,Zr(l,String(d),f,u))},Li(e)?w.identity:function(s){var l=o(
s[n]);if(l===void 0)throw new Error("no codec found to encode value in union codec ".concat(t));return e[l].encode(s)},e,
n)}else return new Mc(t,function(s){return e.some(function(l){return l.is(s)})},function(s,l){for(var c=[],u=0;u<e.length;u++){
var d=e[u],f=d.validate(s,Zr(l,String(u),d,s));if((0,ct.isLeft)(f))ua(c,f.left);else return(0,w.success)(f.right)}return(0,w.
failures)(c)},Li(e)?w.identity:function(s){for(var l=0,c=e;l<c.length;l++){var u=c[l];if(u.is(s))return u.encode(s)}throw new Error(
"no codec found to encode value in union type ".concat(t))},e)}w.union=ah;var ih=function(e){Ie(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="IntersectionType",s}return t}(Ce);w.IntersectionType=ih;function c1(e,t){
t===void 0&&(t="(".concat(e.map(function(n){return n.name}).join(" & "),")"));var r=e.length;return new ih(t,function(n){
return e.every(function(a){return a.is(n)})},e.length===0?w.success:function(n,a){for(var i=[],o=[],s=0;s<r;s++){var l=e[s],
c=l.validate(n,Zr(a,String(s),l,n));(0,ct.isLeft)(c)?ua(o,c.left):i.push(c.right)}return o.length>0?(0,w.failures)(o):(0,w.
success)(Rc(n,i))},e.length===0?w.identity:function(n){return Rc(n,e.map(function(a){return a.encode(n)}))},e)}w.intersection=
c1;var oh=function(e){Ie(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="TupleType",
s}return t}(Ce);w.TupleType=oh;function u1(e,t){t===void 0&&(t="[".concat(e.map(function(n){return n.name}).join(", "),"\
]"));var r=e.length;return new oh(t,function(n){return w.UnknownArray.is(n)&&n.length===r&&e.every(function(a,i){return a.
is(n[i])})},function(n,a){var i=w.UnknownArray.validate(n,a);if((0,ct.isLeft)(i))return i;for(var o=i.right,s=o.length>r?
o.slice(0,r):o,l=[],c=0;c<r;c++){var u=o[c],d=e[c],f=d.validate(u,Zr(a,String(c),d,u));if((0,ct.isLeft)(f))ua(l,f.left);else{
var h=f.right;h!==u&&(s===o&&(s=o.slice()),s[c]=h)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},Li(e)?w.identity:
function(n){return e.map(function(a,i){return a.encode(n[i])})},e)}w.tuple=u1;var sh=function(e){Ie(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyType",s}return t}(Ce);w.ReadonlyType=sh;function d1(e,t){
return t===void 0&&(t="Readonly<".concat(e.name,">")),new sh(t,e.is,e.validate,e.encode,e)}w.readonly=d1;var lh=function(e){
Ie(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyArrayType",s}return t}(Ce);
w.ReadonlyArrayType=lh;function p1(e,t){t===void 0&&(t="ReadonlyArray<".concat(e.name,">"));var r=eh(e);return new lh(t,
r.is,r.validate,r.encode,e)}w.readonlyArray=p1;var f1=function(e,t){return uh(Nc(e),t)};w.strict=f1;var ch=function(e){Ie(
t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ExactType",s}return t}(Ce);w.ExactType=
ch;function uh(e,t){t===void 0&&(t=zk(e));var r=Oc(e);return new ch(t,e.is,function(n,a){var i=w.UnknownRecord.validate(
n,a);if((0,ct.isLeft)(i))return i;var o=e.validate(n,a);return(0,ct.isLeft)(o)?o:(0,ct.right)($f(o.right,r))},function(n){
return e.encode($f(n,r))},e)}w.exact=uh;var dh=function(e){Ie(t,e);function t(){var r=e.call(this,"Function",function(n){
return typeof n=="function"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="FunctionType",r}return t}(Ce);w.FunctionType=dh;w.Function=new dh;var ph=function(e){Ie(t,e);function t(){var r=e.
call(this,"never",function(n){return!1},function(n,a){return(0,w.failure)(n,a)},function(){throw new Error("cannot encod\
e never")})||this;return r._tag="NeverType",r}return t}(Ce);w.NeverType=ph;w.never=new ph;var fh=function(e){Ie(t,e);function t(){
var r=e.call(this,"any",function(n){return!0},w.success,w.identity)||this;return r._tag="AnyType",r}return t}(Ce);w.AnyType=
fh;w.any=new fh;function Dc(e,t,r){return r===void 0&&(r="(".concat(e.name," | ").concat(Of(t),")")),new Zf(r,function(n){
return e.is(n)&&t(n)},function(n,a){var i=e.validate(n,a);if((0,ct.isLeft)(i))return i;var o=i.right;return t(o)?(0,w.success)(
o):(0,w.failure)(o,a)},e.encode,e,t)}w.refinement=Dc;w.Integer=Dc(w.number,Number.isInteger,"Integer");var Is=function(e){
Ie(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i,o)||this;return l.tag=s,l}return t}(Mc);w.TaggedUnionType=Is;var h1=function(e,t,r){
r===void 0&&(r=Nf(t));var n=ah(t,r);return n instanceof Is?n:(console.warn("[io-ts] Cannot build a tagged union for ".concat(
r,", returning a de-optimized union")),new Is(r,n.is,n.validate,n.encode,t,e))};w.taggedUnion=h1;var m1=function(e,t){return{
value:e,context:t}};w.getValidationError=m1;var g1=function(e){return[{key:"",type:e}]};w.getDefaultContext=g1;w.Dictionary=
w.UnknownRecord;var hh=function(e){Ie(t,e);function t(){var r=e.call(this,"object",function(n){return n!==null&&typeof n==
"object"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="ObjectType",
r}return t}(Ce);w.ObjectType=hh;w.object=new hh;w.dictionary=nh;var y1=function(e){Ie(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.props=o,s._tag="StrictType",s}return t}(Ce);w.StrictType=y1;function v1(e){return e}w.
clean=v1;function b1(e){return function(){return e}}w.alias=b1});var bh=We((DM,vh)=>{"use strict";var nt=class e extends Array{constructor(t,r){if(super(t),this.sign=r,Object.setPrototypeOf(
this,e.prototype),t>e.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded")}static BigInt(t){var r=Math.floor,
n=Number.isFinite;if(typeof t=="number"){if(t===0)return e.__zero();if(e.__isOneDigitInt(t))return 0>t?e.__oneDigit(-t,!0):
e.__oneDigit(t,!1);if(!n(t)||r(t)!==t)throw new RangeError("The number "+t+" cannot be converted to BigInt because it is\
 not an integer");return e.__fromDouble(t)}if(typeof t=="string"){let a=e.__fromString(t);if(a===null)throw new SyntaxError(
"Cannot convert "+t+" to a BigInt");return a}if(typeof t=="boolean")return t===!0?e.__oneDigit(1,!1):e.__zero();if(typeof t==
"object"){if(t.constructor===e)return t;let a=e.__toPrimitive(t);return e.BigInt(a)}throw new TypeError("Cannot convert "+
t+" to a BigInt")}toDebugString(){let t=["BigInt["];for(let r of this)t.push((r&&(r>>>0).toString(16))+", ");return t.push(
"]"),t.join("")}toString(t=10){if(2>t||36<t)throw new RangeError("toString() radix argument must be between 2 and 36");return this.
length===0?"0":(t&t-1)==0?e.__toStringBasePowerOfTwo(this,t):e.__toStringGeneric(this,t,!1)}valueOf(){throw new Error("C\
onvert JSBI instances to native numbers using `toNumber`.")}static toNumber(t){let r=t.length;if(r===0)return 0;if(r===1){
let T=t.__unsignedDigit(0);return t.sign?-T:T}let n=t.__digit(r-1),a=e.__clz30(n),i=30*r-a;if(1024<i)return t.sign?-1/0:
1/0;let o=i-1,s=n,l=r-1,c=a+3,u=c===32?0:s<<c;u>>>=12;let d=c-12,f=12<=c?0:s<<20+c,h=20+c;for(0<d&&0<l&&(l--,s=t.__digit(
l),u|=s>>>30-d,f=s<<d+2,h=d+2);0<h&&0<l;)l--,s=t.__digit(l),f|=30<=h?s<<h-30:s>>>30-h,h-=30;let v=e.__decideRounding(t,h,
l,s);if((v===1||v===0&&(1&f)==1)&&(f=f+1>>>0,f===0&&(u++,u>>>20!=0&&(u=0,o++,1023<o))))return t.sign?-1/0:1/0;let b=t.sign?
-2147483648:0;return o=o+1023<<20,e.__kBitConversionInts[e.__kBitConversionIntHigh]=b|o|u,e.__kBitConversionInts[e.__kBitConversionIntLow]=
f,e.__kBitConversionDouble[0]}static unaryMinus(t){if(t.length===0)return t;let r=t.__copy();return r.sign=!t.sign,r}static bitwiseNot(t){
return t.sign?e.__absoluteSubOne(t).__trim():e.__absoluteAddOne(t,!0)}static exponentiate(t,r){if(r.sign)throw new RangeError(
"Exponent must be positive");if(r.length===0)return e.__oneDigit(1,!1);if(t.length===0)return t;if(t.length===1&&t.__digit(
0)===1)return t.sign&&(1&r.__digit(0))==0?e.unaryMinus(t):t;if(1<r.length)throw new RangeError("BigInt too big");let n=r.
__unsignedDigit(0);if(n===1)return t;if(n>=e.__kMaxLengthBits)throw new RangeError("BigInt too big");if(t.length===1&&t.
__digit(0)===2){let o=1+(0|n/30),s=t.sign&&(1&n)!=0,l=new e(o,s);l.__initializeDigits();let c=1<<n%30;return l.__setDigit(
o-1,c),l}let a=null,i=t;for((1&n)!=0&&(a=t),n>>=1;n!==0;n>>=1)i=e.multiply(i,i),(1&n)!=0&&(a===null?a=i:a=e.multiply(a,i));
return a}static multiply(t,r){if(t.length===0)return t;if(r.length===0)return r;let n=t.length+r.length;30<=t.__clzmsd()+
r.__clzmsd()&&n--;let a=new e(n,t.sign!==r.sign);a.__initializeDigits();for(let i=0;i<t.length;i++)e.__multiplyAccumulate(
r,t.__digit(i),a,i);return a.__trim()}static divide(t,r){if(r.length===0)throw new RangeError("Division by zero");if(0>e.
__absoluteCompare(t,r))return e.__zero();let n=t.sign!==r.sign,a=r.__unsignedDigit(0),i;if(r.length===1&&32767>=a){if(a===
1)return n===t.sign?t:e.unaryMinus(t);i=e.__absoluteDivSmall(t,a,null)}else i=e.__absoluteDivLarge(t,r,!0,!1);return i.sign=
n,i.__trim()}static remainder(t,r){if(r.length===0)throw new RangeError("Division by zero");if(0>e.__absoluteCompare(t,r))
return t;let n=r.__unsignedDigit(0);if(r.length===1&&32767>=n){if(n===1)return e.__zero();let i=e.__absoluteModSmall(t,n);
return i===0?e.__zero():e.__oneDigit(i,t.sign)}let a=e.__absoluteDivLarge(t,r,!1,!0);return a.sign=t.sign,a.__trim()}static add(t,r){
let n=t.sign;return n===r.sign?e.__absoluteAdd(t,r,n):0<=e.__absoluteCompare(t,r)?e.__absoluteSub(t,r,n):e.__absoluteSub(
r,t,!n)}static subtract(t,r){let n=t.sign;return n===r.sign?0<=e.__absoluteCompare(t,r)?e.__absoluteSub(t,r,n):e.__absoluteSub(
r,t,!n):e.__absoluteAdd(t,r,n)}static leftShift(t,r){return r.length===0||t.length===0?t:r.sign?e.__rightShiftByAbsolute(
t,r):e.__leftShiftByAbsolute(t,r)}static signedRightShift(t,r){return r.length===0||t.length===0?t:r.sign?e.__leftShiftByAbsolute(
t,r):e.__rightShiftByAbsolute(t,r)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift\
; use >> instead")}static lessThan(t,r){return 0>e.__compareToBigInt(t,r)}static lessThanOrEqual(t,r){return 0>=e.__compareToBigInt(
t,r)}static greaterThan(t,r){return 0<e.__compareToBigInt(t,r)}static greaterThanOrEqual(t,r){return 0<=e.__compareToBigInt(
t,r)}static equal(t,r){if(t.sign!==r.sign||t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t.__digit(n)!==r.__digit(
n))return!1;return!0}static notEqual(t,r){return!e.equal(t,r)}static bitwiseAnd(t,r){var n=Math.max;if(!t.sign&&!r.sign)
return e.__absoluteAnd(t,r).__trim();if(t.sign&&r.sign){let a=n(t.length,r.length)+1,i=e.__absoluteSubOne(t,a),o=e.__absoluteSubOne(
r);return i=e.__absoluteOr(i,o,i),e.__absoluteAddOne(i,!0,i).__trim()}return t.sign&&([t,r]=[r,t]),e.__absoluteAndNot(t,
e.__absoluteSubOne(r)).__trim()}static bitwiseXor(t,r){var n=Math.max;if(!t.sign&&!r.sign)return e.__absoluteXor(t,r).__trim();
if(t.sign&&r.sign){let o=n(t.length,r.length),s=e.__absoluteSubOne(t,o),l=e.__absoluteSubOne(r);return e.__absoluteXor(s,
l,s).__trim()}let a=n(t.length,r.length)+1;t.sign&&([t,r]=[r,t]);let i=e.__absoluteSubOne(r,a);return i=e.__absoluteXor(
i,t,i),e.__absoluteAddOne(i,!0,i).__trim()}static bitwiseOr(t,r){var n=Math.max;let a=n(t.length,r.length);if(!t.sign&&!r.
sign)return e.__absoluteOr(t,r).__trim();if(t.sign&&r.sign){let o=e.__absoluteSubOne(t,a),s=e.__absoluteSubOne(r);return o=
e.__absoluteAnd(o,s,o),e.__absoluteAddOne(o,!0,o).__trim()}t.sign&&([t,r]=[r,t]);let i=e.__absoluteSubOne(r,a);return i=
e.__absoluteAndNot(i,t,i),e.__absoluteAddOne(i,!0,i).__trim()}static asIntN(t,r){var n=Math.floor;if(r.length===0)return r;
if(t=n(t),0>t)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(t===0)return e.__zero();if(t>=
e.__kMaxLengthBits)return r;let a=0|(t+29)/30;if(r.length<a)return r;let i=r.__unsignedDigit(a-1),o=1<<(t-1)%30;if(r.length===
a&&i<o)return r;if((i&o)!==o)return e.__truncateToNBits(t,r);if(!r.sign)return e.__truncateAndSubFromPowerOfTwo(t,r,!0);
if((i&o-1)==0){for(let s=a-2;0<=s;s--)if(r.__digit(s)!==0)return e.__truncateAndSubFromPowerOfTwo(t,r,!1);return r.length===
a&&i===o?r:e.__truncateToNBits(t,r)}return e.__truncateAndSubFromPowerOfTwo(t,r,!1)}static asUintN(t,r){var n=Math.floor;
if(r.length===0)return r;if(t=n(t),0>t)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(t===
0)return e.__zero();if(r.sign){if(t>e.__kMaxLengthBits)throw new RangeError("BigInt too big");return e.__truncateAndSubFromPowerOfTwo(
t,r,!1)}if(t>=e.__kMaxLengthBits)return r;let a=0|(t+29)/30;if(r.length<a)return r;let i=t%30;return r.length==a&&(i===0||
!(r.__digit(a-1)>>>i))?r:e.__truncateToNBits(t,r)}static ADD(t,r){if(t=e.__toPrimitive(t),r=e.__toPrimitive(r),typeof t==
"string")return typeof r!="string"&&(r=r.toString()),t+r;if(typeof r=="string")return t.toString()+r;if(t=e.__toNumeric(
t),r=e.__toNumeric(r),e.__isBigInt(t)&&e.__isBigInt(r))return e.add(t,r);if(typeof t=="number"&&typeof r=="number")return t+
r;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(t,r){return e.__compare(t,
r,0)}static LE(t,r){return e.__compare(t,r,1)}static GT(t,r){return e.__compare(t,r,2)}static GE(t,r){return e.__compare(
t,r,3)}static EQ(t,r){for(;;){if(e.__isBigInt(t))return e.__isBigInt(r)?e.equal(t,r):e.EQ(r,t);if(typeof t=="number"){if(e.
__isBigInt(r))return e.__equalToNumber(r,t);if(typeof r!="object")return t==r;r=e.__toPrimitive(r)}else if(typeof t=="st\
ring"){if(e.__isBigInt(r))return t=e.__fromString(t),t!==null&&e.equal(t,r);if(typeof r!="object")return t==r;r=e.__toPrimitive(
r)}else if(typeof t=="boolean"){if(e.__isBigInt(r))return e.__equalToNumber(r,+t);if(typeof r!="object")return t==r;r=e.
__toPrimitive(r)}else if(typeof t=="symbol"){if(e.__isBigInt(r))return!1;if(typeof r!="object")return t==r;r=e.__toPrimitive(
r)}else if(typeof t=="object"){if(typeof r=="object"&&r.constructor!==e)return t==r;t=e.__toPrimitive(t)}else return t==
r}}static NE(t,r){return!e.EQ(t,r)}static DataViewGetBigInt64(t,r,n=!1){return e.asIntN(64,e.DataViewGetBigUint64(t,r,n))}static DataViewGetBigUint64(t,r,n=!1){
let[a,i]=n?[4,0]:[0,4],o=t.getUint32(r+a,n),s=t.getUint32(r+i,n),l=new e(3,!1);return l.__setDigit(0,1073741823&s),l.__setDigit(
1,(268435455&o)<<2|s>>>30),l.__setDigit(2,o>>>28),l.__trim()}static DataViewSetBigInt64(t,r,n,a=!1){e.DataViewSetBigUint64(
t,r,n,a)}static DataViewSetBigUint64(t,r,n,a=!1){n=e.asUintN(64,n);let i=0,o=0;if(0<n.length&&(o=n.__digit(0),1<n.length)){
let c=n.__digit(1);o|=c<<30,i=c>>>2,2<n.length&&(i|=n.__digit(2)<<28)}let[s,l]=a?[4,0]:[0,4];t.setUint32(r+s,i,a),t.setUint32(
r+l,o,a)}static __zero(){return new e(0,!1)}static __oneDigit(t,r){let n=new e(1,r);return n.__setDigit(0,t),n}__copy(){
let t=new e(this.length,this.sign);for(let r=0;r<this.length;r++)t[r]=this[r];return t}__trim(){let t=this.length,r=this[t-
1];for(;r===0;)t--,r=this[t-1],this.pop();return t===0&&(this.sign=!1),this}__initializeDigits(){for(let t=0;t<this.length;t++)
this[t]=0}static __decideRounding(t,r,n,a){if(0<r)return-1;let i;if(0>r)i=-r-1;else{if(n===0)return-1;n--,a=t.__digit(n),
i=29}let o=1<<i;if((a&o)==0)return-1;if(o-=1,(a&o)!=0)return 1;for(;0<n;)if(n--,t.__digit(n)!==0)return 1;return 0}static __fromDouble(t){
e.__kBitConversionDouble[0]=t;let r=2047&e.__kBitConversionInts[e.__kBitConversionIntHigh]>>>20,n=r-1023,a=(0|n/30)+1,i=new e(
a,0>t),o=1048575&e.__kBitConversionInts[e.__kBitConversionIntHigh]|1048576,s=e.__kBitConversionInts[e.__kBitConversionIntLow],
l=20,c=n%30,u,d=0;if(c<20){let f=l-c;d=f+32,u=o>>>f,o=o<<32-f|s>>>f,s<<=32-f}else if(c===20)d=32,u=o,o=s,s=0;else{let f=c-
l;d=32-f,u=o<<f|s>>>32-f,o=s<<f,s=0}i.__setDigit(a-1,u);for(let f=a-2;0<=f;f--)0<d?(d-=30,u=o>>>2,o=o<<30|s>>>2,s<<=30):
u=0,i.__setDigit(f,u);return i.__trim()}static __isWhitespace(t){return 13>=t&&9<=t||(159>=t?t==32:131071>=t?t==160||t==
5760:196607>=t?(t&=131071,10>=t||t==40||t==41||t==47||t==95||t==4096):t==65279)}static __fromString(t,r=0){let n=0,a=t.length,
i=0;if(i===a)return e.__zero();let o=t.charCodeAt(i);for(;e.__isWhitespace(o);){if(++i===a)return e.__zero();o=t.charCodeAt(
i)}if(o===43){if(++i===a)return null;o=t.charCodeAt(i),n=1}else if(o===45){if(++i===a)return null;o=t.charCodeAt(i),n=-1}
if(r===0){if(r=10,o===48){if(++i===a)return e.__zero();if(o=t.charCodeAt(i),o===88||o===120){if(r=16,++i===a)return null;
o=t.charCodeAt(i)}else if(o===79||o===111){if(r=8,++i===a)return null;o=t.charCodeAt(i)}else if(o===66||o===98){if(r=2,++i===
a)return null;o=t.charCodeAt(i)}}}else if(r===16&&o===48){if(++i===a)return e.__zero();if(o=t.charCodeAt(i),o===88||o===
120){if(++i===a)return null;o=t.charCodeAt(i)}}if(n!=0&&r!==10)return null;for(;o===48;){if(++i===a)return e.__zero();o=
t.charCodeAt(i)}let s=a-i,l=e.__kMaxBitsPerChar[r],c=e.__kBitsPerCharTableMultiplier-1;if(s>1073741824/l)return null;let u=l*
s+c>>>e.__kBitsPerCharTableShift,d=new e(0|(u+29)/30,!1),f=10>r?r:10,h=10<r?r-10:0;if((r&r-1)==0){l>>=e.__kBitsPerCharTableShift;
let v=[],b=[],T=!1;do{let S=0,E=0;for(;;){let x;if(o-48>>>0<f)x=o-48;else if((32|o)-97>>>0<h)x=(32|o)-87;else{T=!0;break}
if(E+=l,S=S<<l|x,++i===a){T=!0;break}if(o=t.charCodeAt(i),30<E+l)break}v.push(S),b.push(E)}while(!T);e.__fillFromParts(d,
v,b)}else{d.__initializeDigits();let v=!1,b=0;do{let T=0,S=1;for(;;){let x;if(o-48>>>0<f)x=o-48;else if((32|o)-97>>>0<h)
x=(32|o)-87;else{v=!0;break}let I=S*r;if(1073741823<I)break;if(S=I,T=T*r+x,b++,++i===a){v=!0;break}o=t.charCodeAt(i)}c=30*
e.__kBitsPerCharTableMultiplier-1;let E=0|(l*b+c>>>e.__kBitsPerCharTableShift)/30;d.__inplaceMultiplyAdd(S,T,E)}while(!v)}
if(i!==a){if(!e.__isWhitespace(o))return null;for(i++;i<a;i++)if(o=t.charCodeAt(i),!e.__isWhitespace(o))return null}return d.
sign=n==-1,d.__trim()}static __fillFromParts(t,r,n){let a=0,i=0,o=0;for(let s=r.length-1;0<=s;s--){let l=r[s],c=n[s];i|=
l<<o,o+=c,o===30?(t.__setDigit(a++,i),o=0,i=0):30<o&&(t.__setDigit(a++,1073741823&i),o-=30,i=l>>>c-o)}if(i!==0){if(a>=t.
length)throw new Error("implementation bug");t.__setDigit(a++,i)}for(;a<t.length;a++)t.__setDigit(a,0)}static __toStringBasePowerOfTwo(t,r){
let n=t.length,a=r-1;a=(85&a>>>1)+(85&a),a=(51&a>>>2)+(51&a),a=(15&a>>>4)+(15&a);let i=a,o=r-1,s=t.__digit(n-1),l=e.__clz30(
s),c=0|(30*n-l+i-1)/i;if(t.sign&&c++,268435456<c)throw new Error("string too long");let u=Array(c),d=c-1,f=0,h=0;for(let b=0;b<
n-1;b++){let T=t.__digit(b),S=(f|T<<h)&o;u[d--]=e.__kConversionChars[S];let E=i-h;for(f=T>>>E,h=30-E;h>=i;)u[d--]=e.__kConversionChars[f&
o],f>>>=i,h-=i}let v=(f|s<<h)&o;for(u[d--]=e.__kConversionChars[v],f=s>>>i-h;f!==0;)u[d--]=e.__kConversionChars[f&o],f>>>=
i;if(t.sign&&(u[d--]="-"),d!=-1)throw new Error("implementation bug");return u.join("")}static __toStringGeneric(t,r,n){
let a=t.length;if(a===0)return"";if(a===1){let b=t.__unsignedDigit(0).toString(r);return n===!1&&t.sign&&(b="-"+b),b}let i=30*
a-e.__clz30(t.__digit(a-1)),o=e.__kMaxBitsPerChar[r],s=o-1,l=i*e.__kBitsPerCharTableMultiplier;l+=s-1,l=0|l/s;let c=l+1>>
1,u=e.exponentiate(e.__oneDigit(r,!1),e.__oneDigit(c,!1)),d,f,h=u.__unsignedDigit(0);if(u.length===1&&32767>=h){d=new e(
t.length,!1),d.__initializeDigits();let b=0;for(let T=2*t.length-1;0<=T;T--){let S=b<<15|t.__halfDigit(T);d.__setHalfDigit(
T,0|S/h),b=0|S%h}f=b.toString(r)}else{let b=e.__absoluteDivLarge(t,u,!0,!0);d=b.quotient;let T=b.remainder.__trim();f=e.
__toStringGeneric(T,r,!0)}d.__trim();let v=e.__toStringGeneric(d,r,!0);for(;f.length<c;)f="0"+f;return n===!1&&t.sign&&(v=
"-"+v),v+f}static __unequalSign(t){return t?-1:1}static __absoluteGreater(t){return t?-1:1}static __absoluteLess(t){return t?
1:-1}static __compareToBigInt(t,r){let n=t.sign;if(n!==r.sign)return e.__unequalSign(n);let a=e.__absoluteCompare(t,r);return 0<
a?e.__absoluteGreater(n):0>a?e.__absoluteLess(n):0}static __compareToNumber(t,r){if(e.__isOneDigitInt(r)){let n=t.sign,a=0>
r;if(n!==a)return e.__unequalSign(n);if(t.length===0){if(a)throw new Error("implementation bug");return r===0?0:-1}if(1<
t.length)return e.__absoluteGreater(n);let i=Math.abs(r),o=t.__unsignedDigit(0);return o>i?e.__absoluteGreater(n):o<i?e.
__absoluteLess(n):0}return e.__compareToDouble(t,r)}static __compareToDouble(t,r){if(r!==r)return r;if(r===1/0)return-1;
if(r===-1/0)return 1;let n=t.sign;if(n!==0>r)return e.__unequalSign(n);if(r===0)throw new Error("implementation bug: sho\
uld be handled elsewhere");if(t.length===0)return-1;e.__kBitConversionDouble[0]=r;let a=2047&e.__kBitConversionInts[e.__kBitConversionIntHigh]>>>
20;if(a==2047)throw new Error("implementation bug: handled elsewhere");let i=a-1023;if(0>i)return e.__absoluteGreater(n);
let o=t.length,s=t.__digit(o-1),l=e.__clz30(s),c=30*o-l,u=i+1;if(c<u)return e.__absoluteLess(n);if(c>u)return e.__absoluteGreater(
n);let d=1048576|1048575&e.__kBitConversionInts[e.__kBitConversionIntHigh],f=e.__kBitConversionInts[e.__kBitConversionIntLow],
h=20,v=29-l;if(v!==(0|(c-1)%30))throw new Error("implementation bug");let b,T=0;if(20>v){let S=h-v;T=S+32,b=d>>>S,d=d<<32-
S|f>>>S,f<<=32-S}else if(v===20)T=32,b=d,d=f,f=0;else{let S=v-h;T=32-S,b=d<<S|f>>>32-S,d=f<<S,f=0}if(s>>>=0,b>>>=0,s>b)return e.
__absoluteGreater(n);if(s<b)return e.__absoluteLess(n);for(let S=o-2;0<=S;S--){0<T?(T-=30,b=d>>>2,d=d<<30|f>>>2,f<<=30):
b=0;let E=t.__unsignedDigit(S);if(E>b)return e.__absoluteGreater(n);if(E<b)return e.__absoluteLess(n)}if(d!==0||f!==0){if(T===
0)throw new Error("implementation bug");return e.__absoluteLess(n)}return 0}static __equalToNumber(t,r){var n=Math.abs;return e.
__isOneDigitInt(r)?r===0?t.length===0:t.length===1&&t.sign===0>r&&t.__unsignedDigit(0)===n(r):e.__compareToDouble(t,r)===
0}static __comparisonResultToBool(t,r){return r===0?0>t:r===1?0>=t:r===2?0<t:r===3?0<=t:void 0}static __compare(t,r,n){if(t=
e.__toPrimitive(t),r=e.__toPrimitive(r),typeof t=="string"&&typeof r=="string")switch(n){case 0:return t<r;case 1:return t<=
r;case 2:return t>r;case 3:return t>=r}if(e.__isBigInt(t)&&typeof r=="string")return r=e.__fromString(r),r!==null&&e.__comparisonResultToBool(
e.__compareToBigInt(t,r),n);if(typeof t=="string"&&e.__isBigInt(r))return t=e.__fromString(t),t!==null&&e.__comparisonResultToBool(
e.__compareToBigInt(t,r),n);if(t=e.__toNumeric(t),r=e.__toNumeric(r),e.__isBigInt(t)){if(e.__isBigInt(r))return e.__comparisonResultToBool(
e.__compareToBigInt(t,r),n);if(typeof r!="number")throw new Error("implementation bug");return e.__comparisonResultToBool(
e.__compareToNumber(t,r),n)}if(typeof t!="number")throw new Error("implementation bug");if(e.__isBigInt(r))return e.__comparisonResultToBool(
e.__compareToNumber(r,t),2^n);if(typeof r!="number")throw new Error("implementation bug");return n===0?t<r:n===1?t<=r:n===
2?t>r:n===3?t>=r:void 0}__clzmsd(){return e.__clz30(this.__digit(this.length-1))}static __absoluteAdd(t,r,n){if(t.length<
r.length)return e.__absoluteAdd(r,t,n);if(t.length===0)return t;if(r.length===0)return t.sign===n?t:e.unaryMinus(t);let a=t.
length;(t.__clzmsd()===0||r.length===t.length&&r.__clzmsd()===0)&&a++;let i=new e(a,n),o=0,s=0;for(;s<r.length;s++){let l=t.
__digit(s)+r.__digit(s)+o;o=l>>>30,i.__setDigit(s,1073741823&l)}for(;s<t.length;s++){let l=t.__digit(s)+o;o=l>>>30,i.__setDigit(
s,1073741823&l)}return s<i.length&&i.__setDigit(s,o),i.__trim()}static __absoluteSub(t,r,n){if(t.length===0)return t;if(r.
length===0)return t.sign===n?t:e.unaryMinus(t);let a=new e(t.length,n),i=0,o=0;for(;o<r.length;o++){let s=t.__digit(o)-r.
__digit(o)-i;i=1&s>>>30,a.__setDigit(o,1073741823&s)}for(;o<t.length;o++){let s=t.__digit(o)-i;i=1&s>>>30,a.__setDigit(o,
1073741823&s)}return a.__trim()}static __absoluteAddOne(t,r,n=null){let a=t.length;n===null?n=new e(a,r):n.sign=r;let i=1;
for(let o=0;o<a;o++){let s=t.__digit(o)+i;i=s>>>30,n.__setDigit(o,1073741823&s)}return i!=0&&n.__setDigitGrow(a,1),n}static __absoluteSubOne(t,r){
let n=t.length;r=r||n;let a=new e(r,!1),i=1;for(let o=0;o<n;o++){let s=t.__digit(o)-i;i=1&s>>>30,a.__setDigit(o,1073741823&
s)}if(i!=0)throw new Error("implementation bug");for(let o=n;o<r;o++)a.__setDigit(o,0);return a}static __absoluteAnd(t,r,n=null){
let a=t.length,i=r.length,o=i;if(a<i){o=a;let c=t,u=a;t=r,a=i,r=c,i=u}let s=o;n===null?n=new e(s,!1):s=n.length;let l=0;
for(;l<o;l++)n.__setDigit(l,t.__digit(l)&r.__digit(l));for(;l<s;l++)n.__setDigit(l,0);return n}static __absoluteAndNot(t,r,n=null){
let a=t.length,i=r.length,o=i;a<i&&(o=a);let s=a;n===null?n=new e(s,!1):s=n.length;let l=0;for(;l<o;l++)n.__setDigit(l,t.
__digit(l)&~r.__digit(l));for(;l<a;l++)n.__setDigit(l,t.__digit(l));for(;l<s;l++)n.__setDigit(l,0);return n}static __absoluteOr(t,r,n=null){
let a=t.length,i=r.length,o=i;if(a<i){o=a;let c=t,u=a;t=r,a=i,r=c,i=u}let s=a;n===null?n=new e(s,!1):s=n.length;let l=0;
for(;l<o;l++)n.__setDigit(l,t.__digit(l)|r.__digit(l));for(;l<a;l++)n.__setDigit(l,t.__digit(l));for(;l<s;l++)n.__setDigit(
l,0);return n}static __absoluteXor(t,r,n=null){let a=t.length,i=r.length,o=i;if(a<i){o=a;let c=t,u=a;t=r,a=i,r=c,i=u}let s=a;
n===null?n=new e(s,!1):s=n.length;let l=0;for(;l<o;l++)n.__setDigit(l,t.__digit(l)^r.__digit(l));for(;l<a;l++)n.__setDigit(
l,t.__digit(l));for(;l<s;l++)n.__setDigit(l,0);return n}static __absoluteCompare(t,r){let n=t.length-r.length;if(n!=0)return n;
let a=t.length-1;for(;0<=a&&t.__digit(a)===r.__digit(a);)a--;return 0>a?0:t.__unsignedDigit(a)>r.__unsignedDigit(a)?1:-1}static __multiplyAccumulate(t,r,n,a){
if(r===0)return;let i=32767&r,o=r>>>15,s=0,l=0;for(let c,u=0;u<t.length;u++,a++){c=n.__digit(a);let d=t.__digit(u),f=32767&
d,h=d>>>15,v=e.__imul(f,i),b=e.__imul(f,o),T=e.__imul(h,i),S=e.__imul(h,o);c+=l+v+s,s=c>>>30,c&=1073741823,c+=((32767&b)<<
15)+((32767&T)<<15),s+=c>>>30,l=S+(b>>>15)+(T>>>15),n.__setDigit(a,1073741823&c)}for(;s!=0||l!==0;a++){let c=n.__digit(a);
c+=s+l,l=0,s=c>>>30,n.__setDigit(a,1073741823&c)}}static __internalMultiplyAdd(t,r,n,a,i){let o=n,s=0;for(let l=0;l<a;l++){
let c=t.__digit(l),u=e.__imul(32767&c,r),d=e.__imul(c>>>15,r),f=u+((32767&d)<<15)+s+o;o=f>>>30,s=d>>>15,i.__setDigit(l,1073741823&
f)}if(i.length>a)for(i.__setDigit(a++,o+s);a<i.length;)i.__setDigit(a++,0);else if(o+s!==0)throw new Error("implementati\
on bug")}__inplaceMultiplyAdd(t,r,n){n>this.length&&(n=this.length);let a=32767&t,i=t>>>15,o=0,s=r;for(let l=0;l<n;l++){
let c=this.__digit(l),u=32767&c,d=c>>>15,f=e.__imul(u,a),h=e.__imul(u,i),v=e.__imul(d,a),b=e.__imul(d,i),T=s+f+o;o=T>>>30,
T&=1073741823,T+=((32767&h)<<15)+((32767&v)<<15),o+=T>>>30,s=b+(h>>>15)+(v>>>15),this.__setDigit(l,1073741823&T)}if(o!=0||
s!==0)throw new Error("implementation bug")}static __absoluteDivSmall(t,r,n=null){n===null&&(n=new e(t.length,!1));let a=0;
for(let i,o=2*t.length-1;0<=o;o-=2){i=(a<<15|t.__halfDigit(o))>>>0;let s=0|i/r;a=0|i%r,i=(a<<15|t.__halfDigit(o-1))>>>0;
let l=0|i/r;a=0|i%r,n.__setDigit(o>>>1,s<<15|l)}return n}static __absoluteModSmall(t,r){let n=0;for(let a=2*t.length-1;0<=
a;a--)n=0|((n<<15|t.__halfDigit(a))>>>0)%r;return n}static __absoluteDivLarge(t,r,n,a){let i=r.__halfDigitLength(),o=r.length,
s=t.__halfDigitLength()-i,l=null;n&&(l=new e(s+2>>>1,!1),l.__initializeDigits());let c=new e(i+2>>>1,!1);c.__initializeDigits();
let u=e.__clz15(r.__halfDigit(i-1));0<u&&(r=e.__specialLeftShift(r,u,0));let d=e.__specialLeftShift(t,u,1),f=r.__halfDigit(
i-1),h=0;for(let v,b=s;0<=b;b--){v=32767;let T=d.__halfDigit(b+i);if(T!==f){let E=(T<<15|d.__halfDigit(b+i-1))>>>0;v=0|E/
f;let x=0|E%f,I=r.__halfDigit(i-2),D=d.__halfDigit(b+i-2);for(;e.__imul(v,I)>>>0>(x<<16|D)>>>0&&(v--,x+=f,!(32767<x)););}
e.__internalMultiplyAdd(r,v,0,o,c);let S=d.__inplaceSub(c,b,i+1);S!==0&&(S=d.__inplaceAdd(r,b,i),d.__setHalfDigit(b+i,32767&
d.__halfDigit(b+i)+S),v--),n&&(1&b?h=v<<15:l.__setDigit(b>>>1,h|v))}if(a)return d.__inplaceRightShift(u),n?{quotient:l,remainder:d}:
d;if(n)return l;throw new Error("unreachable")}static __clz15(t){return e.__clz30(t)-15}__inplaceAdd(t,r,n){let a=0;for(let i=0;i<
n;i++){let o=this.__halfDigit(r+i)+t.__halfDigit(i)+a;a=o>>>15,this.__setHalfDigit(r+i,32767&o)}return a}__inplaceSub(t,r,n){
let a=0;if(1&r){r>>=1;let i=this.__digit(r),o=32767&i,s=0;for(;s<n-1>>>1;s++){let u=t.__digit(s),d=(i>>>15)-(32767&u)-a;
a=1&d>>>15,this.__setDigit(r+s,(32767&d)<<15|32767&o),i=this.__digit(r+s+1),o=(32767&i)-(u>>>15)-a,a=1&o>>>15}let l=t.__digit(
s),c=(i>>>15)-(32767&l)-a;if(a=1&c>>>15,this.__setDigit(r+s,(32767&c)<<15|32767&o),r+s+1>=this.length)throw new RangeError(
"out of bounds");(1&n)==0&&(i=this.__digit(r+s+1),o=(32767&i)-(l>>>15)-a,a=1&o>>>15,this.__setDigit(r+t.length,1073709056&
i|32767&o))}else{r>>=1;let i=0;for(;i<t.length-1;i++){let u=this.__digit(r+i),d=t.__digit(i),f=(32767&u)-(32767&d)-a;a=1&
f>>>15;let h=(u>>>15)-(d>>>15)-a;a=1&h>>>15,this.__setDigit(r+i,(32767&h)<<15|32767&f)}let o=this.__digit(r+i),s=t.__digit(
i),l=(32767&o)-(32767&s)-a;a=1&l>>>15;let c=0;(1&n)==0&&(c=(o>>>15)-(s>>>15)-a,a=1&c>>>15),this.__setDigit(r+i,(32767&c)<<
15|32767&l)}return a}__inplaceRightShift(t){if(t===0)return;let r=this.__digit(0)>>>t,n=this.length-1;for(let a=0;a<n;a++){
let i=this.__digit(a+1);this.__setDigit(a,1073741823&i<<30-t|r),r=i>>>t}this.__setDigit(n,r)}static __specialLeftShift(t,r,n){
let a=t.length,i=new e(a+n,!1);if(r===0){for(let s=0;s<a;s++)i.__setDigit(s,t.__digit(s));return 0<n&&i.__setDigit(a,0),
i}let o=0;for(let s=0;s<a;s++){let l=t.__digit(s);i.__setDigit(s,1073741823&l<<r|o),o=l>>>30-r}return 0<n&&i.__setDigit(
a,o),i}static __leftShiftByAbsolute(t,r){let n=e.__toShiftAmount(r);if(0>n)throw new RangeError("BigInt too big");let a=0|
n/30,i=n%30,o=t.length,s=i!==0&&t.__digit(o-1)>>>30-i!=0,l=o+a+(s?1:0),c=new e(l,t.sign);if(i===0){let u=0;for(;u<a;u++)
c.__setDigit(u,0);for(;u<l;u++)c.__setDigit(u,t.__digit(u-a))}else{let u=0;for(let d=0;d<a;d++)c.__setDigit(d,0);for(let d=0;d<
o;d++){let f=t.__digit(d);c.__setDigit(d+a,1073741823&f<<i|u),u=f>>>30-i}if(s)c.__setDigit(o+a,u);else if(u!==0)throw new Error(
"implementation bug")}return c.__trim()}static __rightShiftByAbsolute(t,r){let n=t.length,a=t.sign,i=e.__toShiftAmount(r);
if(0>i)return e.__rightShiftByMaximum(a);let o=0|i/30,s=i%30,l=n-o;if(0>=l)return e.__rightShiftByMaximum(a);let c=!1;if(a){
if((t.__digit(o)&(1<<s)-1)!=0)c=!0;else for(let d=0;d<o;d++)if(t.__digit(d)!==0){c=!0;break}}c&&s===0&&~t.__digit(n-1)==
0&&l++;let u=new e(l,a);if(s===0){u.__setDigit(l-1,0);for(let d=o;d<n;d++)u.__setDigit(d-o,t.__digit(d))}else{let d=t.__digit(
o)>>>s,f=n-o-1;for(let h=0;h<f;h++){let v=t.__digit(h+o+1);u.__setDigit(h,1073741823&v<<30-s|d),d=v>>>s}u.__setDigit(f,d)}
return c&&(u=e.__absoluteAddOne(u,!0,u)),u.__trim()}static __rightShiftByMaximum(t){return t?e.__oneDigit(1,!0):e.__zero()}static __toShiftAmount(t){
if(1<t.length)return-1;let r=t.__unsignedDigit(0);return r>e.__kMaxLengthBits?-1:r}static __toPrimitive(t,r="default"){if(typeof t!=
"object"||t.constructor===e)return t;if(typeof Symbol<"u"&&typeof Symbol.toPrimitive=="symbol"&&t[Symbol.toPrimitive]){let i=t[Symbol.
toPrimitive](r);if(typeof i!="object")return i;throw new TypeError("Cannot convert object to primitive value")}let n=t.valueOf;
if(n){let i=n.call(t);if(typeof i!="object")return i}let a=t.toString;if(a){let i=a.call(t);if(typeof i!="object")return i}
throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(t){return e.__isBigInt(t)?t:+t}static __isBigInt(t){
return typeof t=="object"&&t!==null&&t.constructor===e}static __truncateToNBits(t,r){let n=0|(t+29)/30,a=new e(n,r.sign),
i=n-1;for(let s=0;s<i;s++)a.__setDigit(s,r.__digit(s));let o=r.__digit(i);if(t%30!=0){let s=32-t%30;o=o<<s>>>s}return a.
__setDigit(i,o),a.__trim()}static __truncateAndSubFromPowerOfTwo(t,r,n){var a=Math.min;let i=0|(t+29)/30,o=new e(i,n),s=0,
l=i-1,c=0;for(let h=a(l,r.length);s<h;s++){let v=0-r.__digit(s)-c;c=1&v>>>30,o.__setDigit(s,1073741823&v)}for(;s<l;s++)o.
__setDigit(s,0|1073741823&-c);let u=l<r.length?r.__digit(l):0,d=t%30,f;if(d==0)f=0-u-c,f&=1073741823;else{let h=32-d;u=u<<
h>>>h;let v=1<<32-h;f=v-u-c,f&=v-1}return o.__setDigit(l,f),o.__trim()}__digit(t){return this[t]}__unsignedDigit(t){return this[t]>>>
0}__setDigit(t,r){this[t]=0|r}__setDigitGrow(t,r){this[t]=0|r}__halfDigitLength(){let t=this.length;return 32767>=this.__unsignedDigit(
t-1)?2*t-1:2*t}__halfDigit(t){return 32767&this[t>>>1]>>>15*(1&t)}__setHalfDigit(t,r){let n=t>>>1,a=this.__digit(n),i=1&
t?32767&a|r<<15:1073709056&a|32767&r;this.__setDigit(n,i)}static __digitPow(t,r){let n=1;for(;0<r;)1&r&&(n*=t),r>>>=1,t*=
t;return n}static __detectBigEndian(){return e.__kBitConversionDouble[0]=-0,e.__kBitConversionInts[0]!==0}static __isOneDigitInt(t){
return(1073741823&t)===t}};nt.__kMaxLength=33554432,nt.__kMaxLengthBits=nt.__kMaxLength<<5,nt.__kMaxBitsPerChar=[0,0,32,
51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,
165,166],nt.__kBitsPerCharTableShift=5,nt.__kBitsPerCharTableMultiplier=1<<nt.__kBitsPerCharTableShift,nt.__kConversionChars=
["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"],nt.__kBitConversionBuffer=new ArrayBuffer(8),nt.__kBitConversionDouble=new Float64Array(nt.__kBitConversionBuffer),
nt.__kBitConversionInts=new Int32Array(nt.__kBitConversionBuffer),nt.__kBitConversionIntHigh=nt.__detectBigEndian()?0:1,
nt.__kBitConversionIntLow=nt.__detectBigEndian()?1:0,nt.__clz30=Math.clz32?function(e){return Math.clz32(e)-2}:function(e){
return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},nt.__imul=Math.imul||function(e,t){return 0|e*t},vh.exports=nt});var rg=We((BM,tg)=>{"use strict";var eg="ArrowFunctionExpression",yS={name:"arrow",init(e){e.addBinaryOp("=>",.1,!0),e.hooks.
add("gobble-expression",function(n){if(this.gobbleSpaces(),this.code===e.OPAREN_CODE){let a=this.index;if(this.index++,this.
gobbleSpaces(),this.code===e.CPAREN_CODE){this.index++;let i=this.gobbleBinaryOp();if(i==="=>"){let o=this.gobbleBinaryExpression();
o||this.throwError("Expected expression after "+i),n.node={type:eg,params:null,body:o};return}}this.index=a}}),e.hooks.add(
"after-expression",function(n){t(n.node)});function t(r){r&&(Object.values(r).forEach(n=>{n&&typeof n=="object"&&t(n)}),
r.operator==="=>"&&(r.type=eg,r.params=r.left?[r.left]:null,r.body=r.right,r.params&&r.params[0].type===e.SEQUENCE_EXP&&
(r.params=r.params[0].expressions),delete r.left,delete r.right,delete r.operator))}}};tg.exports=yS});var ig=We((HM,ag)=>{"use strict";var vS="ObjectExpression",ng="Property",bS={name:"object",init(e){function t(r){if(this.
code===123){this.index++;let n=[];for(;!isNaN(this.code);){if(this.gobbleSpaces(),this.code===125){this.index++,r.node=this.
gobbleTokenProperty({type:vS,properties:n});return}let a=this.gobbleExpression();if(!a)break;if(this.gobbleSpaces(),a.type===
e.IDENTIFIER&&(this.code===e.COMMA_CODE||this.code===125))n.push({type:ng,computed:!1,key:a,value:a,shorthand:!0});else if(this.
code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();i||this.throwError("unexpected object property");let o=a.
type===e.ARRAY_EXP;n.push({type:ng,computed:o,key:o?a.elements[0]:a,value:i,shorthand:!1}),this.gobbleSpaces()}else a&&n.
push(a);this.code===e.COMMA_CODE&&this.index++}this.throwError("missing }")}}e.hooks.add("gobble-token",t)}};ag.exports=
bS});var sg=We((WM,og)=>{"use strict";var wS={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===47){
let n=++this.index,a=!1;for(;this.index<this.expr.length;){if(this.code===47&&!a){let i=this.expr.slice(n,this.index),o="";
for(;++this.index<this.expr.length;){let l=this.code;if(l>=97&&l<=122||l>=65&&l<=90||l>=48&&l<=57)o+=this.char;else break}
let s;try{s=new RegExp(i,o)}catch(l){this.throwError(l.message)}return r.node={type:e.LITERAL,value:s,raw:this.expr.slice(
n-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&
(a=!1),this.index+=this.code===92?2:1}this.throwError("Unclosed Regex")}})}};og.exports=wS});var cg=We((qM,lg)=>{"use strict";var TS={name:"jsepSpread",init(e){e.hooks.add("gobble-token",function(r){[0,1,2].every(
n=>this.expr.charCodeAt(this.index+n)===e.PERIOD_CODE)&&(this.index+=3,r.node={type:"SpreadElement",argument:this.gobbleExpression()})})}};
lg.exports=TS});var dg=We((VM,ug)=>{"use strict";var kS="TaggedTemplateExpression",SS="TemplateLiteral",ES="TemplateElement",_S={name:"j\
sepTemplateLiteral",init(e){function t(r,n=!0){if(this.code===96){let a={type:SS,quasis:[],expressions:[]},i="",o="",s=!1,
l=this.expr.length,c=()=>a.quasis.push({type:ES,value:{raw:o,cooked:i},tail:s});for(;this.index<l;){let u=this.expr.charAt(
++this.index);if(u==="`")return this.index+=1,s=!0,c(),r.node=a,n&&(r.node=this.gobbleTokenProperty(r.node)),r.node;if(u===
"$"&&this.expr.charAt(this.index+1)==="{")this.index+=2,c(),o="",i="",a.expressions.push(...this.gobbleExpressions(125)),
this.code!==125&&this.throwError("unclosed ${");else if(u==="\\")switch(o+=u,u=this.expr.charAt(++this.index),o+=u,u){case"\
n":i+=`
`;break;case"r":i+="\r";break;case"t":i+="	";break;case"b":i+="\b";break;case"f":i+="\f";break;case"v":i+="\v";break;default:
i+=u}else i+=u,o+=u}this.throwError("Unclosed `")}}e.hooks.add("gobble-token",t),e.hooks.add("after-token",function(n){if((n.
node.type===e.IDENTIFIER||n.node.type===e.MEMBER_EXP)&&this.code===96)return n.node={type:kS,tag:n.node,quasi:t.bind(this)(
n,!1)},n.node=this.gobbleTokenProperty(n.node),n.node})}};ug.exports=_S});var Ag=We(he=>{"use strict";var Xu=Symbol.for("react.transitional.element"),WS=Symbol.for("react.portal"),qS=Symbol.for(
"react.fragment"),VS=Symbol.for("react.strict_mode"),YS=Symbol.for("react.profiler"),zS=Symbol.for("react.consumer"),KS=Symbol.
for("react.context"),GS=Symbol.for("react.forward_ref"),JS=Symbol.for("react.suspense"),ZS=Symbol.for("react.memo"),Tg=Symbol.
for("react.lazy"),gg=Symbol.iterator;function XS(e){return e===null||typeof e!="object"?null:(e=gg&&e[gg]||e["@@iterator"],
typeof e=="function"?e:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},
enqueueSetState:function(){}},Sg=Object.assign,Eg={};function si(e,t,r){this.props=e,this.context=t,this.refs=Eg,this.updater=
r||kg}si.prototype.isReactComponent={};si.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&
e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variabl\
es.");this.updater.enqueueSetState(this,e,t,"setState")};si.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(
this,e,"forceUpdate")};function _g(){}_g.prototype=si.prototype;function Qu(e,t,r){this.props=e,this.context=t,this.refs=
Eg,this.updater=r||kg}var ed=Qu.prototype=new _g;ed.constructor=Qu;Sg(ed,si.prototype);ed.isPureReactComponent=!0;var yg=Array.
isArray,Ke={H:null,A:null,T:null,S:null,V:null},xg=Object.prototype.hasOwnProperty;function td(e,t,r,n,a,i){return r=i.ref,
{$$typeof:Xu,type:e,key:t,ref:r!==void 0?r:null,props:i}}function QS(e,t){return td(e.type,t,void 0,void 0,void 0,e.props)}
function rd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu}function eE(e){var t={"=":"=0",":":"=2"};return"$"+e.
replace(/[=:]/g,function(r){return t[r]})}var vg=/\/+/g;function Zu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?
eE(""+e.key):t.toString(36)}function bg(){}function tE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":
throw e.reason;default:switch(typeof e.status=="string"?e.then(bg,bg):(e.status="pending",e.then(function(t){e.status===
"pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"\
fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function oi(e,t,r,n,a){var i=typeof e;(i==="undefined"||
i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"\
object":switch(e.$$typeof){case Xu:case WS:o=!0;break;case Tg:return o=e._init,oi(o(e._payload),t,r,n,a)}}if(o)return a=
a(e),o=n===""?"."+Zu(e,0):n,yg(a)?(r="",o!=null&&(r=o.replace(vg,"$&/")+"/"),oi(a,t,r,"",function(c){return c})):a!=null&&
(rd(a)&&(a=QS(a,r+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(vg,"$&/")+"/")+o)),t.push(a)),1;o=0;var s=n===""?
".":n+":";if(yg(e))for(var l=0;l<e.length;l++)n=e[l],i=s+Zu(n,l),o+=oi(n,t,r,i,a);else if(l=XS(e),typeof l=="function")for(e=
l.call(e),l=0;!(n=e.next()).done;)n=n.value,i=s+Zu(n,l++),o+=oi(n,t,r,i,a);else if(i==="object"){if(typeof e.then=="func\
tion")return oi(tE(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object O\
bject]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use a\
n array instead.")}return o}function fl(e,t,r){if(e==null)return e;var n=[],a=0;return oi(e,n,"","",function(i){return t.
call(r,i,a++)}),n}function rE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===
-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&
(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var wg=typeof reportError=="function"?
reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("e\
rror",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(
e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.
emit("uncaughtException",e);return}console.error(e)};function nE(){}he.Children={map:fl,forEach:function(e,t,r){fl(e,function(){
t.apply(this,arguments)},r)},count:function(e){var t=0;return fl(e,function(){t++}),t},toArray:function(e){return fl(e,function(t){
return t})||[]},only:function(e){if(!rd(e))throw Error("React.Children.only expected to receive a single React element c\
hild.");return e}};he.Component=si;he.Fragment=qS;he.Profiler=YS;he.PureComponent=Qu;he.StrictMode=VS;he.Suspense=JS;he.
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ke;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ke.
H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cloneElement=function(e,t,r){
if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=Sg({},e.props),a=e.key,i=void 0;
if(t!=null)for(o in t.ref!==void 0&&(i=void 0),t.key!==void 0&&(a=""+t.key),t)!xg.call(t,o)||o==="key"||o==="__self"||o===
"__source"||o==="ref"&&t.ref===void 0||(n[o]=t[o]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var s=Array(
o),l=0;l<o;l++)s[l]=arguments[l+2];n.children=s}return td(e.type,a,void 0,void 0,i,n)};he.createContext=function(e){return e=
{$$typeof:KS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:zS,
_context:e},e};he.createElement=function(e,t,r){var n,a={},i=null;if(t!=null)for(n in t.key!==void 0&&(i=""+t.key),t)xg.
call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<
o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===
void 0&&(a[n]=o[n]);return td(e,i,void 0,void 0,null,a)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){
return{$$typeof:GS,render:e}};he.isValidElement=rd;he.lazy=function(e){return{$$typeof:Tg,_payload:{_status:-1,_result:e},
_init:rE}};he.memo=function(e,t){return{$$typeof:ZS,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Ke.
T,r={};Ke.T=r;try{var n=e(),a=Ke.S;a!==null&&a(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(nE,wg)}catch(i){
wg(i)}finally{Ke.T=t}};he.unstable_useCacheRefresh=function(){return Ke.H.useCacheRefresh()};he.use=function(e){return Ke.
H.use(e)};he.useActionState=function(e,t,r){return Ke.H.useActionState(e,t,r)};he.useCallback=function(e,t){return Ke.H.
useCallback(e,t)};he.useContext=function(e){return Ke.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=
function(e,t){return Ke.H.useDeferredValue(e,t)};he.useEffect=function(e,t,r){var n=Ke.H;if(typeof r=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)};he.useId=function(){return Ke.
H.useId()};he.useImperativeHandle=function(e,t,r){return Ke.H.useImperativeHandle(e,t,r)};he.useInsertionEffect=function(e,t){
return Ke.H.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return Ke.H.useLayoutEffect(e,t)};he.useMemo=function(e,t){
return Ke.H.useMemo(e,t)};he.useOptimistic=function(e,t){return Ke.H.useOptimistic(e,t)};he.useReducer=function(e,t,r){return Ke.
H.useReducer(e,t,r)};he.useRef=function(e){return Ke.H.useRef(e)};he.useState=function(e){return Ke.H.useState(e)};he.useSyncExternalStore=
function(e,t,r){return Ke.H.useSyncExternalStore(e,t,r)};he.useTransition=function(){return Ke.H.useTransition()};he.version=
"19.1.0"});var $g=We((pe,hl)=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(y,A){Object.defineProperty(n.
prototype,y,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",A[0],A[1])}})}function t(y){
return y===null||typeof y!="object"?null:(y=hn&&y[hn]||y["@@iterator"],typeof y=="function"?y:null)}function r(y,A){y=(y=
y.constructor)&&(y.displayName||y.name)||"ReactClass";var j=y+"."+A;Ma[j]||(console.error("Can't call %s on a component \
that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.stat\
e` directly or define a `state = {};` class property with the desired state in the %s component.",A,y),Ma[j]=!0)}function n(y,A,j){
this.props=y,this.context=A,this.refs=hc,this.updater=j||bs}function a(){}function i(y,A,j){this.props=y,this.context=A,
this.refs=hc,this.updater=j||bs}function o(y){return""+y}function s(y){try{o(y);var A=!1}catch{A=!0}if(A){A=console;var j=A.
error,U=typeof Symbol=="function"&&Symbol.toStringTag&&y[Symbol.toStringTag]||y.constructor.name||"Object";return j.call(
A,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",U),o(y)}}function l(y){
if(y==null)return null;if(typeof y=="function")return y.$$typeof===iw?null:y.displayName||y.name||null;if(typeof y=="str\
ing")return y;switch(y){case jt:return"Fragment";case C:return"Profiler";case Rr:return"StrictMode";case Wr:return"Suspe\
nse";case Or:return"SuspenseList";case vt:return"Activity"}if(typeof y=="object")switch(typeof y.tag=="number"&&console.
error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
y.$$typeof){case st:return"Portal";case He:return(y.displayName||"Context")+".Provider";case de:return(y._context.displayName||
"Context")+".Consumer";case ht:var A=y.render;return y=y.displayName,y||(y=A.displayName||A.name||"",y=y!==""?"ForwardRe\
f("+y+")":"ForwardRef"),y;case oa:return A=y.displayName||null,A!==null?A:l(y.type)||"Memo";case Mn:A=y._payload,y=y._init;
try{return l(y(A))}catch{}}return null}function c(y){if(y===jt)return"<>";if(typeof y=="object"&&y!==null&&y.$$typeof===
Mn)return"<...>";try{var A=l(y);return A?"<"+A+">":"<...>"}catch{return"<...>"}}function u(){var y=ke.A;return y===null?
null:y.getOwner()}function d(){return Error("react-stack-top-frame")}function f(y){if(Ts.call(y,"key")){var A=Object.getOwnPropertyDescriptor(
y,"key").get;if(A&&A.isReactWarning)return!1}return y.key!==void 0}function h(y,A){function j(){zp||(zp=!0,console.error(
"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same \
value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",A))}j.
isReactWarning=!0,Object.defineProperty(y,"key",{get:j,configurable:!0})}function v(){var y=l(this.type);return Gp[y]||(Gp[y]=
!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the \
JSX Element type in a future release.")),y=this.props.ref,y!==void 0?y:null}function b(y,A,j,U,G,Se,ge,De){return j=Se.ref,
y={$$typeof:ft,type:y,key:A,props:Se,_owner:G},(j!==void 0?j:null)!==null?Object.defineProperty(y,"ref",{enumerable:!1,get:v}):
Object.defineProperty(y,"ref",{enumerable:!1,value:null}),y._store={},Object.defineProperty(y._store,"validated",{configurable:!1,
enumerable:!1,writable:!0,value:0}),Object.defineProperty(y,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),
Object.defineProperty(y,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ge}),Object.defineProperty(y,"_de\
bugTask",{configurable:!1,enumerable:!1,writable:!0,value:De}),Object.freeze&&(Object.freeze(y.props),Object.freeze(y)),
y}function T(y,A){return A=b(y.type,A,void 0,void 0,y._owner,y.props,y._debugStack,y._debugTask),y._store&&(A._store.validated=
y._store.validated),A}function S(y){return typeof y=="object"&&y!==null&&y.$$typeof===ft}function E(y){var A={"=":"=0","\
:":"=2"};return"$"+y.replace(/[=:]/g,function(j){return A[j]})}function x(y,A){return typeof y=="object"&&y!==null&&y.key!=
null?(s(y.key),E(""+y.key)):A.toString(36)}function I(){}function D(y){switch(y.status){case"fulfilled":return y.value;case"\
rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(I,I):(y.status="pending",y.then(function(A){y.status===
"pending"&&(y.status="fulfilled",y.value=A)},function(A){y.status==="pending"&&(y.status="rejected",y.reason=A)})),y.status){case"\
fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function H(y,A,j,U,G){var Se=typeof y;(Se==="undefined"||
Se==="boolean")&&(y=null);var ge=!1;if(y===null)ge=!0;else switch(Se){case"bigint":case"string":case"number":ge=!0;break;case"\
object":switch(y.$$typeof){case ft:case st:ge=!0;break;case Mn:return ge=y._init,H(ge(y._payload),A,j,U,G)}}if(ge){ge=y,
G=G(ge);var De=U===""?"."+x(ge,0):U;return Vp(G)?(j="",De!=null&&(j=De.replace(Zp,"$&/")+"/"),H(G,A,j,"",function(Dn){return Dn})):
G!=null&&(S(G)&&(G.key!=null&&(ge&&ge.key===G.key||s(G.key)),j=T(G,j+(G.key==null||ge&&ge.key===G.key?"":(""+G.key).replace(
Zp,"$&/")+"/")+De),U!==""&&ge!=null&&S(ge)&&ge.key==null&&ge._store&&!ge._store.validated&&(j._store.validated=2),G=j),A.
push(G)),1}if(ge=0,De=U===""?".":U+":",Vp(y))for(var we=0;we<y.length;we++)U=y[we],Se=De+x(U,we),ge+=H(U,A,j,Se,G);else if(we=
t(y),typeof we=="function")for(we===y.entries&&(Jp||console.warn("Using Maps as children is not supported. Use an array \
of keyed ReactElements instead."),Jp=!0),y=we.call(y),we=0;!(U=y.next()).done;)U=U.value,Se=De+x(U,we++),ge+=H(U,A,j,Se,
G);else if(Se==="object"){if(typeof y.then=="function")return H(D(y),A,j,U,G);throw A=String(y),Error("Objects are not v\
alid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":A)+"). If you \
meant to render a collection of children, use an array instead.")}return ge}function K(y,A,j){if(y==null)return y;var U=[],
G=0;return H(y,U,"","",function(Se){return A.call(j,Se,G++)}),U}function J(y){if(y._status===-1){var A=y._result;A=A(),A.
then(function(j){(y._status===0||y._status===-1)&&(y._status=1,y._result=j)},function(j){(y._status===0||y._status===-1)&&
(y._status=2,y._result=j)}),y._status===-1&&(y._status=0,y._result=A)}if(y._status===1)return A=y._result,A===void 0&&console.
error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,A),"default"in A||console.error(`lazy: Expected the result of \
a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,A),A.default;throw y._result}function L(){var y=ke.H;return y===
null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could \
happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),y}function ve(){}function te(y){
if(ks===null)try{var A=("require"+Math.random()).slice(0,7);ks=(hl&&hl[A]).call(hl,"timers").setImmediate}catch{ks=function(U){
Qp===!1&&(Qp=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so\
 enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/iss\
ues if you encounter this warning."));var G=new MessageChannel;G.port1.onmessage=U,G.port2.postMessage(void 0)}}return ks(
y)}function Z(y){return 1<y.length&&typeof AggregateError=="function"?new AggregateError(y):y[0]}function Oe(y,A){A!==Ss-
1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls\
 before making a new one. "),Ss=A}function ce(y,A,j){var U=ke.actQueue;if(U!==null)if(U.length!==0)try{Ue(U),te(function(){
return ce(y,A,j)});return}catch(G){ke.thrownErrors.push(G)}else ke.actQueue=null;0<ke.thrownErrors.length?(U=Z(ke.thrownErrors),
ke.thrownErrors.length=0,j(U)):A(y)}function Ue(y){if(!mc){mc=!0;var A=0;try{for(;A<y.length;A++){var j=y[A];do{ke.didUsePromise=
!1;var U=j(!1);if(U!==null){if(ke.didUsePromise){y[A]=j,y.splice(0,A);return}j=U}else break}while(!0)}y.length=0}catch(G){
y.splice(0,A+1),ke.thrownErrors.push(G)}finally{mc=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var ft=Symbol.
for("react.transitional.element"),st=Symbol.for("react.portal"),jt=Symbol.for("react.fragment"),Rr=Symbol.for("react.str\
ict_mode"),C=Symbol.for("react.profiler");Symbol.for("react.provider");var de=Symbol.for("react.consumer"),He=Symbol.for(
"react.context"),ht=Symbol.for("react.forward_ref"),Wr=Symbol.for("react.suspense"),Or=Symbol.for("react.suspense_list"),
oa=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),hn=Symbol.iterator,Ma={},bs={isMounted:function(){
return!1},enqueueForceUpdate:function(y){r(y,"forceUpdate")},enqueueReplaceState:function(y){r(y,"replaceState")},enqueueSetState:function(y){
r(y,"setState")}},qp=Object.assign,hc={};Object.freeze(hc),n.prototype.isReactComponent={},n.prototype.setState=function(y,A){
if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a func\
tion which returns an object of state variables.");this.updater.enqueueSetState(this,y,A,"setState")},n.prototype.forceUpdate=
function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};var Ir={isMounted:["isMounted","Instead, make sure to\
 clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceSt\
ate","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},ws;for(ws in Ir)
Ir.hasOwnProperty(ws)&&e(ws,Ir[ws]);a.prototype=n.prototype,Ir=i.prototype=new a,Ir.constructor=i,qp(Ir,n.prototype),Ir.
isPureReactComponent=!0;var Vp=Array.isArray,iw=Symbol.for("react.client.reference"),ke={H:null,A:null,T:null,S:null,V:null,
actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},
Ts=Object.prototype.hasOwnProperty,Yp=console.createTask?console.createTask:function(){return null};Ir={"react-stack-bot\
tom-frame":function(y){return y()}};var zp,Kp,Gp={},ow=Ir["react-stack-bottom-frame"].bind(Ir,d)(),sw=Yp(c(d)),Jp=!1,Zp=/\/+/g,
Xp=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="functio\
n"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message==
"string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.
emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},Qp=!1,ks=null,Ss=0,Es=!1,mc=!1,ef=typeof queueMicrotask==
"function"?function(y){queueMicrotask(function(){return queueMicrotask(y)})}:te;Ir=Object.freeze({__proto__:null,c:function(y){
return L().useMemoCache(y)}}),pe.Children={map:K,forEach:function(y,A,j){K(y,function(){A.apply(this,arguments)},j)},count:function(y){
var A=0;return K(y,function(){A++}),A},toArray:function(y){return K(y,function(A){return A})||[]},only:function(y){if(!S(
y))throw Error("React.Children.only expected to receive a single React element child.");return y}},pe.Component=n,pe.Fragment=
jt,pe.Profiler=C,pe.PureComponent=i,pe.StrictMode=Rr,pe.Suspense=Wr,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=
ke,pe.__COMPILER_RUNTIME=Ir,pe.act=function(y){var A=ke.actQueue,j=Ss;Ss++;var U=ke.actQueue=A!==null?A:[],G=!1;try{var Se=y()}catch(we){
ke.thrownErrors.push(we)}if(0<ke.thrownErrors.length)throw Oe(A,j),y=Z(ke.thrownErrors),ke.thrownErrors.length=0,y;if(Se!==
null&&typeof Se=="object"&&typeof Se.then=="function"){var ge=Se;return ef(function(){G||Es||(Es=!0,console.error("You c\
alled act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act cal\
ls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(we,Dn){G=!0,ge.then(function(Da){
if(Oe(A,j),j===0){try{Ue(U),te(function(){return ce(Da,we,Dn)})}catch(cw){ke.thrownErrors.push(cw)}if(0<ke.thrownErrors.
length){var lw=Z(ke.thrownErrors);ke.thrownErrors.length=0,Dn(lw)}}else we(Da)},function(Da){Oe(A,j),0<ke.thrownErrors.length&&
(Da=Z(ke.thrownErrors),ke.thrownErrors.length=0),Dn(Da)})}}}var De=Se;if(Oe(A,j),j===0&&(Ue(U),U.length!==0&&ef(function(){
G||Es||(Es=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testi\
ng React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),ke.actQueue=
null),0<ke.thrownErrors.length)throw y=Z(ke.thrownErrors),ke.thrownErrors.length=0,y;return{then:function(we,Dn){G=!0,j===
0?(ke.actQueue=U,te(function(){return ce(De,we,Dn)})):we(De)}}},pe.cache=function(y){return function(){return y.apply(null,
arguments)}},pe.captureOwnerStack=function(){var y=ke.getCurrentStack;return y===null?null:y()},pe.cloneElement=function(y,A,j){
if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var U=qp({},y.props),G=y.key,Se=y.
_owner;if(A!=null){var ge;e:{if(Ts.call(A,"ref")&&(ge=Object.getOwnPropertyDescriptor(A,"ref").get)&&ge.isReactWarning){
ge=!1;break e}ge=A.ref!==void 0}ge&&(Se=u()),f(A)&&(s(A.key),G=""+A.key);for(De in A)!Ts.call(A,De)||De==="key"||De==="_\
_self"||De==="__source"||De==="ref"&&A.ref===void 0||(U[De]=A[De])}var De=arguments.length-2;if(De===1)U.children=j;else if(1<
De){ge=Array(De);for(var we=0;we<De;we++)ge[we]=arguments[we+2];U.children=ge}for(U=b(y.type,G,void 0,void 0,Se,U,y._debugStack,
y._debugTask),G=2;G<arguments.length;G++)Se=arguments[G],S(Se)&&Se._store&&(Se._store.validated=1);return U},pe.createContext=
function(y){return y={$$typeof:He,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=
y,y.Consumer={$$typeof:de,_context:y},y._currentRenderer=null,y._currentRenderer2=null,y},pe.createElement=function(y,A,j){
for(var U=2;U<arguments.length;U++){var G=arguments[U];S(G)&&G._store&&(G._store.validated=1)}if(U={},G=null,A!=null)for(we in Kp||
!("__self"in A)||"key"in A||(Kp=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transfor\
m. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),f(A)&&(s(A.key),
G=""+A.key),A)Ts.call(A,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(U[we]=A[we]);var Se=arguments.length-2;if(Se===
1)U.children=j;else if(1<Se){for(var ge=Array(Se),De=0;De<Se;De++)ge[De]=arguments[De+2];Object.freeze&&Object.freeze(ge),
U.children=ge}if(y&&y.defaultProps)for(we in Se=y.defaultProps,Se)U[we]===void 0&&(U[we]=Se[we]);G&&h(U,typeof y=="funct\
ion"?y.displayName||y.name||"Unknown":y);var we=1e4>ke.recentlyCreatedOwnerStacks++;return b(y,G,void 0,void 0,u(),U,we?
Error("react-stack-top-frame"):ow,we?Yp(c(y)):sw)},pe.createRef=function(){var y={current:null};return Object.seal(y),y},
pe.forwardRef=function(y){y!=null&&y.$$typeof===oa?console.error("forwardRef requires a render function but received a `\
memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof y!="function"?console.error("forw\
ardRef requires a render function but was given %s.",y===null?"null":typeof y):y.length!==0&&y.length!==2&&console.error(
"forwardRef render functions accept exactly two parameters: props and ref. %s",y.length===1?"Did you forget to use the r\
ef parameter?":"Any additional parameter will be undefined."),y!=null&&y.defaultProps!=null&&console.error("forwardRef r\
ender functions do not support defaultProps. Did you accidentally pass a React component?");var A={$$typeof:ht,render:y},
j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(U){j=
U,y.name||y.displayName||(Object.defineProperty(y,"name",{value:U}),y.displayName=U)}}),A},pe.isValidElement=S,pe.lazy=function(y){
return{$$typeof:Mn,_payload:{_status:-1,_result:y},_init:J}},pe.memo=function(y,A){y==null&&console.error("memo: The fir\
st argument must be a component. Instead received: %s",y===null?"null":typeof y),A={$$typeof:oa,type:y,compare:A===void 0?
null:A};var j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(U){
j=U,y.name||y.displayName||(Object.defineProperty(y,"name",{value:U}),y.displayName=U)}}),A},pe.startTransition=function(y){
var A=ke.T,j={};ke.T=j,j._updatedFibers=new Set;try{var U=y(),G=ke.S;G!==null&&G(j,U),typeof U=="object"&&U!==null&&typeof U.
then=="function"&&U.then(ve,Xp)}catch(Se){Xp(Se)}finally{A===null&&j._updatedFibers&&(y=j._updatedFibers.size,j._updatedFibers.
clear(),10<y&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription \
please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),ke.T=A}},pe.unstable_useCacheRefresh=
function(){return L().useCacheRefresh()},pe.use=function(y){return L().use(y)},pe.useActionState=function(y,A,j){return L().
useActionState(y,A,j)},pe.useCallback=function(y,A){return L().useCallback(y,A)},pe.useContext=function(y){var A=L();return y.
$$typeof===de&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to\
 call useContext(Context) instead?"),A.useContext(y)},pe.useDebugValue=function(y,A){return L().useDebugValue(y,A)},pe.useDeferredValue=
function(y,A){return L().useDeferredValue(y,A)},pe.useEffect=function(y,A,j){y==null&&console.warn("React Hook useEffect\
 requires an effect callback. Did you forget to pass a callback to the hook?");var U=L();if(typeof j=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(y,A)},pe.useId=function(){return L().
useId()},pe.useImperativeHandle=function(y,A,j){return L().useImperativeHandle(y,A,j)},pe.useInsertionEffect=function(y,A){
return y==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callba\
ck to the hook?"),L().useInsertionEffect(y,A)},pe.useLayoutEffect=function(y,A){return y==null&&console.warn("React Hook\
 useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),L().useLayoutEffect(y,A)},
pe.useMemo=function(y,A){return L().useMemo(y,A)},pe.useOptimistic=function(y,A){return L().useOptimistic(y,A)},pe.useReducer=
function(y,A,j){return L().useReducer(y,A,j)},pe.useRef=function(y){return L().useRef(y)},pe.useState=function(y){return L().
useState(y)},pe.useSyncExternalStore=function(y,A,j){return L().useSyncExternalStore(y,A,j)},pe.useTransition=function(){
return L().useTransition()},pe.version="19.1.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()});var Xn=We((QM,nd)=>{"use strict";process.env.NODE_ENV==="production"?nd.exports=Ag():nd.exports=$g()});var Og=We(ml=>{"use strict";var aE=Symbol.for("react.transitional.element"),iE=Symbol.for("react.fragment");function Rg(e,t,r){
var n=null;if(r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),"key"in t){r={};for(var a in t)a!=="key"&&(r[a]=t[a])}else
r=t;return t=r.ref,{$$typeof:aE,type:e,key:n,ref:t!==void 0?t:null,props:r}}ml.Fragment=iE;ml.jsx=Rg;ml.jsxs=Rg});var Ig=We(gl=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(C){if(C==null)return null;if(typeof C==
"function")return C.$$typeof===ve?null:C.displayName||C.name||null;if(typeof C=="string")return C;switch(C){case b:return"\
Fragment";case S:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case H:return"SuspenseList";case L:return"\
Activity"}if(typeof C=="object")switch(typeof C.tag=="number"&&console.error("Received an unexpected object in getCompon\
entNameFromType(). This is likely a bug in React. Please file an issue."),C.$$typeof){case v:return"Portal";case x:return(C.
displayName||"Context")+".Provider";case E:return(C._context.displayName||"Context")+".Consumer";case I:var de=C.render;
return C=C.displayName,C||(C=de.displayName||de.name||"",C=C!==""?"ForwardRef("+C+")":"ForwardRef"),C;case K:return de=C.
displayName||null,de!==null?de:e(C.type)||"Memo";case J:de=C._payload,C=C._init;try{return e(C(de))}catch{}}return null}
function t(C){return""+C}function r(C){try{t(C);var de=!1}catch{de=!0}if(de){de=console;var He=de.error,ht=typeof Symbol==
"function"&&Symbol.toStringTag&&C[Symbol.toStringTag]||C.constructor.name||"Object";return He.call(de,"The provided key \
is an unsupported type %s. This value must be coerced to a string before using it here.",ht),t(C)}}function n(C){if(C===
b)return"<>";if(typeof C=="object"&&C!==null&&C.$$typeof===J)return"<...>";try{var de=e(C);return de?"<"+de+">":"<...>"}catch{
return"<...>"}}function a(){var C=te.A;return C===null?null:C.getOwner()}function i(){return Error("react-stack-top-fram\
e")}function o(C){if(Z.call(C,"key")){var de=Object.getOwnPropertyDescriptor(C,"key").get;if(de&&de.isReactWarning)return!1}
return C.key!==void 0}function s(C,de){function He(){Ue||(Ue=!0,console.error("%s: `key` is not a prop. Trying to access\
 it will result in `undefined` being returned. If you need to access the same value within the child component, you shou\
ld pass it as a different prop. (https://react.dev/link/special-props)",de))}He.isReactWarning=!0,Object.defineProperty(
C,"key",{get:He,configurable:!0})}function l(){var C=e(this.type);return ft[C]||(ft[C]=!0,console.error("Accessing eleme\
nt.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future rele\
ase.")),C=this.props.ref,C!==void 0?C:null}function c(C,de,He,ht,Wr,Or,oa,Mn){return He=Or.ref,C={$$typeof:h,type:C,key:de,
props:Or,_owner:Wr},(He!==void 0?He:null)!==null?Object.defineProperty(C,"ref",{enumerable:!1,get:l}):Object.defineProperty(
C,"ref",{enumerable:!1,value:null}),C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,
writable:!0,value:0}),Object.defineProperty(C,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.
defineProperty(C,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:oa}),Object.defineProperty(C,"_debugTask",
{configurable:!1,enumerable:!1,writable:!0,value:Mn}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C}function u(C,de,He,ht,Wr,Or,oa,Mn){
var vt=de.children;if(vt!==void 0)if(ht)if(Oe(vt)){for(ht=0;ht<vt.length;ht++)d(vt[ht]);Object.freeze&&Object.freeze(vt)}else
console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or Rea\
ct.jsxDEV. Use the Babel transform instead.");else d(vt);if(Z.call(de,"key")){vt=e(C);var hn=Object.keys(de).filter(function(bs){
return bs!=="key"});ht=0<hn.length?"{key: someKey, "+hn.join(": ..., ")+": ...}":"{key: someKey}",Rr[vt+ht]||(hn=0<hn.length?
"{"+hn.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ht,vt,hn,vt),Rr[vt+ht]=!0)}if(vt=null,He!==void 0&&(r(He),vt=""+He),o(de)&&(r(de.key),
vt=""+de.key),"key"in de){He={};for(var Ma in de)Ma!=="key"&&(He[Ma]=de[Ma])}else He=de;return vt&&s(He,typeof C=="funct\
ion"?C.displayName||C.name||"Unknown":C),c(C,vt,Or,Wr,a(),He,oa,Mn)}function d(C){typeof C=="object"&&C!==null&&C.$$typeof===
h&&C._store&&(C._store.validated=1)}var f=Xn(),h=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),b=Symbol.
for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler");Symbol.for("react.provider");var E=Symbol.
for("react.consumer"),x=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),H=Symbol.
for("react.suspense_list"),K=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ve=Symbol.
for("react.client.reference"),te=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Object.prototype.hasOwnProperty,
Oe=Array.isArray,ce=console.createTask?console.createTask:function(){return null};f={"react-stack-bottom-frame":function(C){
return C()}};var Ue,ft={},st=f["react-stack-bottom-frame"].bind(f,i)(),jt=ce(n(i)),Rr={};gl.Fragment=b,gl.jsx=function(C,de,He,ht,Wr){
var Or=1e4>te.recentlyCreatedOwnerStacks++;return u(C,de,He,!1,ht,Wr,Or?Error("react-stack-top-frame"):st,Or?ce(n(C)):jt)},
gl.jsxs=function(C,de,He,ht,Wr){var Or=1e4>te.recentlyCreatedOwnerStacks++;return u(C,de,He,!0,ht,Wr,Or?Error("react-sta\
ck-top-frame"):st,Or?ce(n(C)):jt)}}()});var yl=We((rD,ad)=>{"use strict";process.env.NODE_ENV==="production"?ad.exports=Og():ad.exports=Ig()});var id=We(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.Allow=q.ALL=q.COLLECTION=q.ATOM=q.SPECIAL=
q.INF=q._INFINITY=q.INFINITY=q.NAN=q.BOOL=q.NULL=q.OBJ=q.ARR=q.NUM=q.STR=void 0;q.STR=1;q.NUM=2;q.ARR=4;q.OBJ=8;q.NULL=16;
q.BOOL=32;q.NAN=64;q.INFINITY=128;q._INFINITY=256;q.INF=q.INFINITY|q._INFINITY;q.SPECIAL=q.NULL|q.BOOL|q.INF|q.NAN;q.ATOM=
q.STR|q.NUM|q.SPECIAL;q.COLLECTION=q.ARR|q.OBJ;q.ALL=q.ATOM|q.COLLECTION;q.Allow={STR:q.STR,NUM:q.NUM,ARR:q.ARR,OBJ:q.OBJ,
NULL:q.NULL,BOOL:q.BOOL,NAN:q.NAN,INFINITY:q.INFINITY,_INFINITY:q._INFINITY,INF:q.INF,SPECIAL:q.SPECIAL,ATOM:q.ATOM,COLLECTION:q.
COLLECTION,ALL:q.ALL};q.default=q.Allow});var od=We(At=>{"use strict";var oE=At&&At.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),sE=At&&At.__exportStar||function(e,t){
for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&oE(t,e,r)};Object.defineProperty(At,"__esModul\
e",{value:!0});At.Allow=At.MalformedJSON=At.PartialJSON=At.parseJSON=At.parse=void 0;var nr=id();Object.defineProperty(At,
"Allow",{enumerable:!0,get:function(){return nr.Allow}});sE(id(),At);var vl=class extends Error{};At.PartialJSON=vl;var bl=class extends Error{};
At.MalformedJSON=bl;function Cg(e,t=nr.Allow.ALL){if(typeof e!="string")throw new TypeError(`expecting str, got ${typeof e}`);
if(!e.trim())throw new Error(`${e} is empty`);return lE(e.trim(),t)}At.parseJSON=Cg;var lE=(e,t)=>{let r=e.length,n=0,a=f=>{
throw new vl(`${f} at position ${n}`)},i=f=>{throw new bl(`${f} at position ${n}`)},o=()=>(d(),n>=r&&a("Unexpected end o\
f input"),e[n]==='"'?s():e[n]==="{"?l():e[n]==="["?c():e.substring(n,n+4)==="null"||nr.Allow.NULL&t&&r-n<4&&"null".startsWith(
e.substring(n))?(n+=4,null):e.substring(n,n+4)==="true"||nr.Allow.BOOL&t&&r-n<4&&"true".startsWith(e.substring(n))?(n+=4,
!0):e.substring(n,n+5)==="false"||nr.Allow.BOOL&t&&r-n<5&&"false".startsWith(e.substring(n))?(n+=5,!1):e.substring(n,n+8)===
"Infinity"||nr.Allow.INFINITY&t&&r-n<8&&"Infinity".startsWith(e.substring(n))?(n+=8,1/0):e.substring(n,n+9)==="-Infinity"||
nr.Allow._INFINITY&t&&1<r-n&&r-n<9&&"-Infinity".startsWith(e.substring(n))?(n+=9,-1/0):e.substring(n,n+3)==="NaN"||nr.Allow.
NAN&t&&r-n<3&&"NaN".startsWith(e.substring(n))?(n+=3,NaN):u()),s=()=>{let f=n,h=!1;for(n++;n<r&&(e[n]!=='"'||h&&e[n-1]===
"\\");)h=e[n]==="\\"?!h:!1,n++;if(e.charAt(n)=='"')try{return JSON.parse(e.substring(f,++n-Number(h)))}catch(v){i(String(
v))}else if(nr.Allow.STR&t)try{return JSON.parse(e.substring(f,n-Number(h))+'"')}catch{return JSON.parse(e.substring(f,e.
lastIndexOf("\\"))+'"')}a("Unterminated string literal")},l=()=>{n++,d();let f={};try{for(;e[n]!=="}";){if(d(),n>=r&&nr.
Allow.OBJ&t)return f;let h=s();d(),n++;try{let v=o();f[h]=v}catch(v){if(nr.Allow.OBJ&t)return f;throw v}d(),e[n]===","&&
n++}}catch{if(nr.Allow.OBJ&t)return f;a("Expected '}' at end of object")}return n++,f},c=()=>{n++;let f=[];try{for(;e[n]!==
"]";)f.push(o()),d(),e[n]===","&&n++}catch{if(nr.Allow.ARR&t)return f;a("Expected ']' at end of array")}return n++,f},u=()=>{
if(n===0){e==="-"&&i("Not sure what '-' is");try{return JSON.parse(e)}catch(h){if(nr.Allow.NUM&t)try{return JSON.parse(e.
substring(0,e.lastIndexOf("e")))}catch{}i(String(h))}}let f=n;for(e[n]==="-"&&n++;e[n]&&",]}".indexOf(e[n])===-1;)n++;n==
r&&!(nr.Allow.NUM&t)&&a("Unterminated number literal");try{return JSON.parse(e.substring(f,n))}catch{e.substring(f,n)===
"-"&&a("Not sure what '-' is");try{return JSON.parse(e.substring(f,e.lastIndexOf("e")))}catch(v){i(String(v))}}},d=()=>{
for(;n<r&&` 
\r	`.includes(e[n]);)n++};return o()},cE=Cg;At.parse=cE});import{fileURLToPath as SP}from"node:url";var Me=ae(je(),1),tt=ae(je(),1);var Cs={done:!1,hasNext:!1};function jc(e,...t){let r=e,n=t.map(i=>"lazy"in i?w1(i):void 0),a=0;for(;a<t.length;){if(n[a]===void 0||!T1(r)){let l=t[a];
r=l(r),a+=1;continue}let i=[];for(let l=a;l<t.length;l++){let c=n[l];if(c===void 0||(i.push(c),c.isSingle))break}let o=[];
for(let l of r)if(mh(l,o,i))break;let{isSingle:s}=i.at(-1);r=s?o[0]:o,a+=i.length}return r}function mh(e,t,r){if(r.length===
0)return t.push(e),!1;let n=e,a=Cs,i=!1;for(let[o,s]of r.entries()){let{index:l,items:c}=s;if(c.push(n),a=s(n,l,c),s.index+=
1,a.hasNext){if(a.hasMany??!1){for(let u of a.next)if(mh(u,t,r.slice(o+1)))return!0;return i}n=a.next}if(!a.hasNext)break;
a.done&&(i=!0)}return a.hasNext&&t.push(n),i}function w1(e){let{lazy:t,lazyArgs:r}=e,n=t(...r);return Object.assign(n,{isSingle:t.
single??!1,index:0,items:[]})}function T1(e){return typeof e=="string"||typeof e=="object"&&e!==null&&Symbol.iterator in
e}function gh(e,t){let r=t.length-e.length;if(r===1){let[n,...a]=t;return jc(n,{lazy:e,lazyArgs:a})}if(r===0){let n={lazy:e,
lazyArgs:t};return Object.assign(a=>jc(a,n),n)}throw new Error("Wrong number of arguments")}function yh(e,t,r){let n=a=>e(a,...t);return r===void 0?n:Object.assign(n,{lazy:r,lazyArgs:t})}function or(e,t,r){let n=e.length-t.length;if(n===0)return e(...t);if(n===1)return yh(e,t,r);throw new Error("Wrong numb\
er of arguments")}function Lc(...e){return or(k1,e)}function k1(e,t){if(e<1)return[];let r=Number.isInteger(e)?e:Math.floor(e),n=new Array(
r);for(let a=0;a<r;a++)n[a]=t(a);return n}function da(...e){return gh(S1,e)}function S1(){let e=new Set;return t=>e.has(t)?Cs:(e.add(t),{done:!1,hasNext:!0,next:t})}function Uc(e,t,r){return typeof t=="number"||t===void 0?n=>n.split(e,t):e.split(t,r)}function yr(...e){return or(E1,e)}var E1=(e,t)=>e[t];function Fc(...e){return or(_1,e)}function _1(e,t){let r={};for(let[n,a]of Object.entries(e)){let i=t(a,n,e);r[n]=i}return r}function rt(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Ns(...e){return or(x1,e)}var x1=e=>e.at(-1);function Un(e){return typeof e=="number"&&!Number.isNaN(e)}function Bc(e){return typeof e=="object"&&e!==null}function Ut(e){return typeof e=="string"}function Hc(e){return e===void 0?!0:typeof e=="string"||Array.isArray(e)?e.length===0:Object.keys(e).length===0}function Ui(e){return typeof e=="function"}function Le(e){return Array.isArray(e)}function Fi(e){return e!==void 0}function Fn(...e){return or(A1,e)}var A1=(e,t)=>{let r=new Map;for(let[n,a]of e.entries()){let i=t(a,n,e);if(i!==void 0){
let o=r.get(i);o===void 0&&(o=[],r.set(i,o)),o.push(a)}}return Object.fromEntries(r)};function Wc(){return $1}var $1=e=>e;function bt(...e){return or(R1,e)}function R1(e,t){let r={};for(let[n,a]of e.entries()){let i=t(a,n,e);r[i]=a}return r}function qc(...e){return or(O1,e)}var O1=e=>`${e[0]?.toUpperCase()??""}${e.slice(1)}`;var $=ae(bh(),1),wr=$.default.BigInt(0),ao=$.default.BigInt(1),Du=$.default.BigInt(2),I1=$.default.BigInt(10),C1=$.default.
BigInt(24),N1=$.default.BigInt(60),P1=$.default.BigInt(1e3),So=$.default.BigInt(1e6),Xi=$.default.BigInt(1e9),em=$.default.
multiply($.default.BigInt(3600),Xi),M1=$.default.multiply(N1,Xi),Yn=$.default.multiply(em,C1);function vn(e){return typeof e==
"bigint"?$.default.BigInt(e.toString(10)):e}function tm(e){return $.default.equal($.default.remainder(e,Du),wr)}function pa(e){
return $.default.lessThan(e,wr)?$.default.unaryMinus(e):e}function Ds(e,t){return $.default.lessThan(e,t)?-1:$.default.greaterThan(
e,t)?1:0}function qi(e,t){return{quotient:$.default.divide(e,t),remainder:$.default.remainder(e,t)}}var wh,Th,re="slot-e\
pochNanoSeconds",ne="slot-iso-date",Ye="slot-iso-date-time",Xe="slot-time",P="slot-calendar",rm="slot-date-brand",nm="sl\
ot-year-month-brand",am="slot-month-day-brand",Re="slot-time-zone",Wt="slot-years",qt="slot-months",sr="slot-weeks",Vt="\
slot-days",Yt="slot-hours",zt="slot-minutes",Kt="slot-seconds",Gt="slot-milliseconds",Jt="slot-microseconds",lr="slot-na\
noseconds",im="date",om="ym",sm="md",lm="time",cm="datetime",um="instant",Sa="original",Ha="timezone-canonical",Jc="time\
zone-original",Vi="calendar-id",dm="locale",Zc="options",pm=new WeakMap,Xc=Symbol.for("@@Temporal__GetSlots");(wh=globalThis)[Xc]||
(wh[Xc]=function(e){return pm.get(e)});var Xs=globalThis[Xc],Qc=Symbol.for("@@Temporal__CreateSlots");(Th=globalThis)[Qc]||
(Th[Qc]=function(e){pm.set(e,Object.create(null))});var Rn=globalThis[Qc];function tr(e,...t){if(!e||typeof e!="object")
return!1;let r=Xs(e);return!!r&&t.every(n=>n in r)}function g(e,t){let r=Xs(e)?.[t];if(r===void 0)throw new TypeError(`M\
issing internal slot ${t}`);return r}function fe(e,t,r){let n=Xs(e);if(n===void 0)throw new TypeError("Missing slots for\
 the given container");if(n[t])throw new TypeError(`${t} already has set`);n[t]=r}var eu={};function On(e,t){Object.defineProperty(
e.prototype,Symbol.toStringTag,{value:t,writable:!1,enumerable:!1,configurable:!0});let r=Object.getOwnPropertyNames(e);
for(let a=0;a<r.length;a++){let i=r[a],o=Object.getOwnPropertyDescriptor(e,i);o.configurable&&o.enumerable&&(o.enumerable=
!1,Object.defineProperty(e,i,o))}let n=Object.getOwnPropertyNames(e.prototype);for(let a=0;a<n.length;a++){let i=n[a],o=Object.
getOwnPropertyDescriptor(e.prototype,i);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e.prototype,
i,o))}tu(t,e),tu(`${t}.prototype`,e.prototype)}function tu(e,t){let r=`%${e}%`;if(eu[r]!==void 0)throw new Error(`intrin\
sic ${e} already exists`);eu[r]=t}function xt(e){return eu[e]}function qa(e,t){let r=e;if(r===0)return{div:r,mod:r};let n=Math.
sign(r);r=Math.abs(r);let a=Math.trunc(1+Math.log10(r));if(t>=a)return{div:0*n,mod:n*r};if(t===0)return{div:n*r,mod:0*n};
let i=r.toPrecision(a);return{div:n*Number.parseInt(i.slice(0,a-t),10),mod:n*Number.parseInt(i.slice(a-t),10)}}function Vc(e,t,r){
let n=e,a=r;if(n===0)return a;let i=Math.sign(n)||Math.sign(a);n=Math.abs(n),a=Math.abs(a);let o=n.toPrecision(Math.trunc(
1+Math.log10(n)));if(a===0)return i*Number.parseInt(o+"0".repeat(t),10);let s=o+a.toPrecision(Math.trunc(1+Math.log10(a))).
padStart(t,"0");return i*Number.parseInt(s,10)}function Qs(e,t){let r=t==="negative";switch(e){case"ceil":return r?"zero":
"infinity";case"floor":return r?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":
return r?"half-zero":"half-infinity";case"halfFloor":return r?"half-infinity":"half-zero";case"halfExpand":return"half-i\
nfinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function el(e,t,r,n,a){return a==="zero"?e:
a==="infinity"?t:r<0?e:r>0?t:a==="half-zero"?e:a==="half-infinity"?t:n?e:t}var Fe=class e{constructor(t){this.totalNs=vn(
t),this.sec=$.default.toNumber($.default.divide(this.totalNs,Xi)),this.subsec=$.default.toNumber($.default.remainder(this.
totalNs,Xi))}static validateNew(t,r){if($.default.greaterThan(pa(t),e.MAX))throw new RangeError(`${r} of duration time u\
nits cannot exceed ${e.MAX} s`);return new e(t)}static fromEpochNsDiff(t,r){let n=$.default.subtract(vn(t),vn(r));return new e(
n)}static fromComponents(t,r,n,a,i,o){let s=$.default.add($.default.add($.default.add($.default.add($.default.add($.default.
BigInt(o),$.default.multiply($.default.BigInt(i),P1)),$.default.multiply($.default.BigInt(a),So)),$.default.multiply($.default.
BigInt(n),Xi)),$.default.multiply($.default.BigInt(r),M1)),$.default.multiply($.default.BigInt(t),em));return e.validateNew(
s,"total")}abs(){return new e(pa(this.totalNs))}add(t){return e.validateNew($.default.add(this.totalNs,t.totalNs),"sum")}add24HourDays(t){
return e.validateNew($.default.add(this.totalNs,$.default.multiply($.default.BigInt(t),Yn)),"sum")}addToEpochNs(t){return $.default.
add(vn(t),this.totalNs)}cmp(t){return Ds(this.totalNs,t.totalNs)}divmod(t){let{quotient:r,remainder:n}=qi(this.totalNs,$.default.
BigInt(t));return{quotient:$.default.toNumber(r),remainder:new e(n)}}fdiv(t){let r=vn(t),n=$.default.BigInt(r),{quotient:a,
remainder:i}=qi(this.totalNs,n),o=[],s,l=($.default.lessThan(this.totalNs,wr)?-1:1)*Math.sign($.default.toNumber(r));for(;!$.default.
equal(i,wr)&&o.length<50;)i=$.default.multiply(i,I1),{quotient:s,remainder:i}=qi(i,n),o.push(Math.abs($.default.toNumber(
s)));return l*+(pa(a).toString()+"."+o.join(""))}isZero(){return $.default.equal(this.totalNs,wr)}round(t,r){let n=vn(t);
if($.default.equal(n,ao))return this;let{quotient:a,remainder:i}=qi(this.totalNs,n),o=$.default.lessThan(this.totalNs,wr)?
"negative":"positive",s=$.default.multiply(pa(a),n),l=$.default.add(s,n),c=Ds(pa($.default.multiply(i,Du)),n),u=Qs(r,o),
d=$.default.equal(pa(this.totalNs),s)?s:el(s,l,c,tm(a),u),f=o==="positive"?d:$.default.unaryMinus(d);return e.validateNew(
f,"rounding")}sign(){return this.cmp(new e(wr))}subtract(t){return e.validateNew($.default.subtract(this.totalNs,t.totalNs),
"difference")}};Fe.MAX=$.default.BigInt("9007199254740991999999999"),Fe.ZERO=new Fe(wr);var kh=/[A-Za-z._][A-Za-z._0-9+-]*/,
Eo=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${kh.source})(?:\\/(?:${kh.source}))*)`),
fm=/(?:[+-]\d{6}|\d{4})/,js=/(?:0[1-9]|1[0-2])/,ru=/(?:0[1-9]|[12]\d|3[01])/,D1=new RegExp(`(${fm.source})(?:-(${js.source}\
)-(${ru.source})|(${js.source})(${ru.source}))`),hm=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,
mm=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,gm=new RegExp(`([zZ])|${mm.
source}?`),Ka=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,j1=new RegExp([`^${D1.source}`,`(?:(?:[tT]\
|\\s+)${hm.source}(?:${gm.source})?)?`,`(?:\\[!?(${Eo.source})\\])?`,`((?:${Ka.source})*)$`].join("")),L1=new RegExp([`^\
[tT]?${hm.source}`,`(?:${gm.source})?`,`(?:\\[!?${Eo.source}\\])?`,`((?:${Ka.source})*)$`].join("")),U1=new RegExp(`^(${fm.
source})-?(${js.source})(?:\\[!?${Eo.source}\\])?((?:${Ka.source})*)$`),F1=new RegExp(`^(?:--)?(${js.source})-?(${ru.source}\
)(?:\\[!?${Eo.source}\\])?((?:${Ka.source})*)$`),Yc=/(\d+)(?:[.,](\d{1,9}))?/,B1=new RegExp(`(?:${Yc.source}H)?(?:${Yc.source}\
M)?(?:${Yc.source}S)?`),H1=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${B1.source}\
)?$`,"i"),zn=864e5,Ls=1e6*zn,W1=6e10,ym=1e8*zn,Ga=zr(ym),io=$.default.unaryMinus(Ga),q1=$.default.add($.default.subtract(
io,Yn),ao),V1=$.default.subtract($.default.add(Ga,Yn),ao),Y1=146097*zn,Sh=-271821,Eh=275760,Qi=Date.UTC(1847,0,1),z1=["i\
so8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiop\
ic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],K1=new Set(
["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT",
"PNT","PRT","PST","SST","VST"]);function Qe(e){return typeof e=="object"&&e!==null||typeof e=="function"}function tl(e){
if(typeof e=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(e)}function rl(e){if(typeof e==
"symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(e)}function ie(e){let t=tl(e);if(t===
0)return 0;if(Number.isNaN(t)||t===1/0||t===-1/0)throw new RangeError("invalid number value");let r=Math.trunc(t);return r===
0?0:r}function _h(e,t){let r=ie(e);if(r<=0)throw t!==void 0?new RangeError(`property '${t}' cannot be a a number less th\
an one`):new RangeError("Cannot convert a number less than one to a positive integer");return r}function Vr(e){let t=tl(
e);if(Number.isNaN(t))throw new RangeError("not a number");if(t===1/0||t===-1/0)throw new RangeError("infinity is out of\
 range");if(!function(r){if(typeof r!="number"||Number.isNaN(r)||r===1/0||r===-1/0)return!1;let n=Math.abs(r);return Math.
floor(n)===n}(t))throw new RangeError(`unsupported fractional value ${e}`);return t===0?0:t}function oo(e,t){return String(
e).padStart(t,"0")}function mt(e){if(typeof e!="string")throw new TypeError(`expected a string, not ${String(e)}`);return e}
function nu(e,t){if(Qe(e)){let r=e?.toString();if(typeof r=="string"||typeof r=="number")return r;throw new TypeError("C\
annot convert object to primitive value")}return e}var au=["era","eraYear","year","month","monthCode","day","hour","minu\
te","second","millisecond","microsecond","nanosecond","offset","timeZone"],G1={era:rl,eraYear:ie,year:ie,month:_h,monthCode:function(e){
let t=mt(nu(e));if(t.length<3||t.length>4||t[0]!=="M"||"0123456789".indexOf(t[1])===-1||"0123456789".indexOf(t[2])===-1||
t[1]+t[2]==="00"&&t[3]!=="L"||t[3]!=="L"&&t[3]!==void 0)throw new RangeError(`bad month code ${t}; must match M01-M99 or\
 M00L-M99L`);return t},day:_h,hour:ie,minute:ie,second:ie,millisecond:ie,microsecond:ie,nanosecond:ie,offset:function(e){
let t=mt(nu(e));return ai(t),t},timeZone:Qt},J1={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},Ja=[
["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],
["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microseco\
nd","time"],["nanoseconds","nanosecond","time"]],xh=Object.fromEntries(Ja.map(e=>[e[0],e[1]])),Z1=Object.fromEntries(Ja.
map(([e,t])=>[t,e])),eo=Ja.map(([,e])=>e),Za={day:Ls,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},
Us=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],X1=Intl.DateTimeFormat,
Ah=new Map;function vm(e){let t=po(e),r=Ah.get(t);return r===void 0&&(r=new X1("en-us",{timeZone:t,hour12:!1,era:"short",
year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Ah.set(t,r)),r}function St(e){
return tr(e,re)&&!tr(e,Re,P)}function Je(e){return tr(e,Wt,qt,Vt,Yt,zt,Kt,Gt,Jt,lr)}function Ze(e){return tr(e,rm)}function at(e){
return tr(e,Xe)}function qe(e){return tr(e,Ye)}function Et(e){return tr(e,nm)}function br(e){return tr(e,am)}function ye(e){
return tr(e,re,Re,P)}function O(e,t){if(!t(e))throw new TypeError("invalid receiver: method called with the wrong type o\
f this-object")}function ti(e){if(tr(e,P)||tr(e,Re))throw new TypeError("with() does not support a calendar or timeZone \
property");if(at(e))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(e.calendar!==
void 0)throw new TypeError("with() does not support a calendar property");if(e.timeZone!==void 0)throw new TypeError("wi\
th() does not support a timeZone property")}function _o(e,t){return t==="never"||t==="auto"&&e==="iso8601"?"":`[${t==="c\
ritical"?"!":""}u-ca=${e}]`}function nl(e){let t,r,n=!1;for(Ka.lastIndex=0;r=Ka.exec(e);){let{1:a,2:i,3:o}=r;if(i==="u-c\
a"){if(t===void 0)t=o,n=a==="!";else if(a==="!"||n)throw new RangeError(`Invalid annotations in ${e}: more than one u-ca\
 present with critical flag`)}else if(a==="!")throw new RangeError(`Unrecognized annotation: !${i}=${o}`)}return t}function sn(e){
let t=j1.exec(e);if(!t)throw new RangeError(`invalid RFC 9557 string: ${e}`);let r=nl(t[16]),n=t[1];if(n==="-000000")throw new RangeError(
`invalid RFC 9557 string: ${e}`);let a=+n,i=+(t[2]??t[4]??1),o=+(t[3]??t[5]??1),s=t[6]!==void 0,l=+(t[6]??0),c=+(t[7]??t[10]??
0),u=+(t[8]??t[11]??0);u===60&&(u=59);let d=(t[9]??t[12]??"")+"000000000",f=+d.slice(0,3),h=+d.slice(3,6),v=+d.slice(6,9),
b,T=!1;t[13]?(b=void 0,T=!0):t[14]&&(b=t[14]);let S=t[15];return Hu(a,i,o,l,c,u,f,h,v),{year:a,month:i,day:o,time:s?{hour:l,
minute:c,second:u,millisecond:f,microsecond:h,nanosecond:v}:"start-of-day",tzAnnotation:S,offset:b,z:T,calendar:r}}function bm(e){
let t=L1.exec(e),r,n,a,i,o,s,l;if(t){l=nl(t[10]),r=+(t[1]??0),n=+(t[2]??t[5]??0),a=+(t[3]??t[6]??0),a===60&&(a=59);let c=(t[4]??
t[7]??"")+"000000000";if(i=+c.slice(0,3),o=+c.slice(3,6),s=+c.slice(6,9),t[8])throw new RangeError("Z designator not sup\
ported for PlainTime")}else{let c,u;if({time:c,z:u,calendar:l}=sn(e),c==="start-of-day")throw new RangeError(`time is mi\
ssing in string: ${e}`);if(u)throw new RangeError("Z designator not supported for PlainTime");({hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s}=c)}if(sl(r,n,a,i,o,s),/[tT ][0-9][0-9]/.test(e))return{hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s,calendar:l};try{let{month:c,day:u}=Lu(e);ya(1972,c,u)}catch{try{let{year:c,month:u}=ju(
e);ya(c,u,1)}catch{return{hour:r,minute:n,second:a,millisecond:i,microsecond:o,nanosecond:s,calendar:l}}}throw new RangeError(
`invalid RFC 9557 time-only string ${e}; may need a T prefix`)}function ju(e){let t=U1.exec(e),r,n,a,i;if(t){a=nl(t[3]);
let o=t[1];if(o==="-000000")throw new RangeError(`invalid RFC 9557 string: ${e}`);if(r=+o,n=+t[2],i=1,a!==void 0&&a!=="i\
so8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let o;if({year:r,month:n,calendar:a,
day:i,z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:r,month:n,calendar:a,
referenceISODay:i}}function Lu(e){let t=F1.exec(e),r,n,a,i;if(t){if(a=nl(t[3]),r=+t[1],n=+t[2],a!==void 0&&a!=="iso8601")
throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let o;if({month:r,day:n,calendar:a,year:i,
z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:r,day:n,calendar:a,referenceISOYear:i}}
var wm=new RegExp(`^${Eo.source}$`,"i"),Tm=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function km(e){
let t=eS.test(e)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${t}: ${e}`)}function Vn(e){
return wm.test(e)||km(e),Tm.test(e)?{offsetMinutes:ai(e)/6e10}:{tzName:e}}function to(e,t,r,n){let a=e,i=t,o=r;switch(n){case"\
reject":ya(a,i,o);break;case"constrain":({year:a,month:i,day:o}=Um(a,i,o))}return{year:a,month:i,day:o}}function al(e,t,r,n,a,i,o){
let s=e,l=t,c=r,u=n,d=a,f=i;switch(o){case"reject":sl(s,l,c,u,d,f);break;case"constrain":s=Zt(s,0,23),l=Zt(l,0,59),c=Zt(
c,0,59),u=Zt(u,0,999),d=Zt(d,0,999),f=Zt(f,0,999)}return{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}
function Sm(e){if(!Qe(e))throw new TypeError("invalid duration-like");let t={years:void 0,months:void 0,weeks:void 0,days:void 0,
hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0},r=!1;for(let n=0;n<
Us.length;n++){let a=Us[n],i=e[a];i!==void 0&&(r=!0,t[a]=Vr(i))}if(!r)throw new TypeError("invalid duration-like");return t}
function Ct({years:e,months:t,weeks:r,days:n},a,i,o){return{years:e,months:o??t,weeks:i??r,days:a??n}}function xe(e,t){return{
isoDate:e,time:t}}function _e(e){return _n(e,"overflow",["constrain","reject"],"constrain")}function ro(e){return _n(e,"\
disambiguation",["compatible","earlier","later","reject"],"compatible")}function Kr(e,t){return _n(e,"roundingMode",["ce\
il","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],t)}function Ms(e,t){return _n(e,
"offset",["prefer","use","ignore","reject"],t)}function xo(e){return _n(e,"calendarName",["auto","always","never","criti\
cal"],"auto")}function ri(e){let t=e.roundingIncrement;if(t===void 0)return 1;let r=ie(t);if(r<1||r>1e9)throw new RangeError(
`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);return r}function ni(e,t,r){let n=r?t:t-1;if(e>n)throw new RangeError(
`roundingIncrement must be at least 1 and less than ${n}, not ${e}`);if(t%e!=0)throw new RangeError(`Rounding increment \
must divide evenly into ${t}`)}function Ao(e){let t=e.fractionalSecondDigits;if(t===void 0)return"auto";if(typeof t!="nu\
mber"){if(rl(t)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return"a\
uto"}let r=Math.floor(t);if(!Number.isFinite(r)||r<0||r>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or\
 0 through 9, not ${t}`);return r}function $o(e,t){switch(e){case"minute":return{precision:"minute",unit:"minute",increment:1};case"\
second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"\
microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}
switch(t){case"auto":return{precision:t,unit:"nanosecond",increment:1};case 0:return{precision:t,unit:"second",increment:1};case 1:case 2:case 3:
return{precision:t,unit:"millisecond",increment:10**(3-t)};case 4:case 5:case 6:return{precision:t,unit:"microsecond",increment:10**
(6-t)};case 7:case 8:case 9:return{precision:t,unit:"nanosecond",increment:10**(9-t)};default:throw new RangeError(`frac\
tionalSecondDigits must be 'auto' or 0 through 9, not ${t}`)}}var An=Symbol("~required~");function ur(e,t,r,n,a=[]){let i=[];
for(let c=0;c<Ja.length;c++){let u=Ja[c],d=u[1],f=u[2];r!=="datetime"&&r!==f||i.push(d)}i=i.concat(a);let o=n;o===An?o=void 0:
o!==void 0&&i.push(o);let s=[];s=s.concat(i);for(let c=0;c<i.length;c++){let u=i[c],d=Z1[u];d!==void 0&&s.push(d)}let l=_n(
e,t,s,o);if(l===void 0&&n===An)throw new RangeError(`${t} is required`);return l&&l in xh?xh[l]:l}function zc(e){let t=e.
relativeTo;if(t===void 0)return{};let r,n,a,i,o,s="option",l=!1;if(Qe(t)){if(ye(t))return{zonedRelativeTo:t};if(Ze(t))return{
plainRelativeTo:t};if(qe(t))return{plainRelativeTo:Xt(g(t,Ye).isoDate,g(t,P))};a=No(t);let c=Er(a,t,["year","month","mon\
thCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:r,time:n}=
Oo(a,c,"constrain")),{offset:o,timeZone:i}=c,o===void 0&&(s="wall")}else{let c,u,d,f,h;if({year:d,month:f,day:h,time:n,calendar:a,
tzAnnotation:c,offset:o,z:u}=sn(mt(t)),c)i=Qt(c),u?s="exact":o||(s="wall"),l=!0;else if(u)throw new RangeError("Z design\
ator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");a||(a="iso8601"),a=rr(a),
r={year:d,month:f,day:h}}return i===void 0?{plainRelativeTo:Xt(r,a)}:{zonedRelativeTo:It(Fs(r,n,s,s==="option"?ai(o):0,i,
"compatible","reject",l),i,a)}}function bn(e){return g(e,Wt)!==0?"year":g(e,qt)!==0?"month":g(e,sr)!==0?"week":g(e,Vt)!==
0?"day":g(e,Yt)!==0?"hour":g(e,zt)!==0?"minute":g(e,Kt)!==0?"second":g(e,Gt)!==0?"millisecond":g(e,Jt)!==0?"microsecond":
"nanosecond"}function Sn(e,t){return eo.indexOf(e)>eo.indexOf(t)?t:e}function Qr(e){return e==="year"||e==="month"||e===
"week"}function wn(e){return Qr(e)||e==="day"?"date":"time"}function Jn(e){return xt("%calendarImpl%")(e)}function Ro(e){
return xt("%calendarImpl%")(g(e,P))}function er(e,t,r="date"){let n=Object.create(null),a=Jn(e).isoToDate(t,{year:!0,monthCode:!0,
day:!0});return n.monthCode=a.monthCode,r!=="month-day"&&r!=="date"||(n.day=a.day),r!=="year-month"&&r!=="date"||(n.year=
a.year),n}function Er(e,t,r,n,a){let i=Jn(e).extraFields(r),o=r.concat(n,i),s=Object.create(null),l=!1;o.sort();for(let c=0;c<
o.length;c++){let u=o[c],d=t[u];if(d!==void 0)l=!0,s[u]=(0,G1[u])(d);else if(a!=="partial"){if(a.includes(u))throw new TypeError(
`required property '${u}' missing or undefined`);s[u]=J1[u]}}if(a==="partial"&&!l)throw new TypeError("no supported prop\
erties found");return s}function iu(e,t="complete"){let r=["hour","microsecond","millisecond","minute","nanosecond","sec\
ond"],n=!1,a=Object.create(null);for(let i=0;i<r.length;i++){let o=r[i],s=e[o];s!==void 0?(a[o]=ie(s),n=!0):t==="complet\
e"&&(a[o]=0)}if(!n)throw new TypeError("invalid time-like");return a}function Yi(e,t){if(Qe(e)){if(Ze(e))return _e(z(t)),
Xt(g(e,ne),g(e,P));if(ye(e)){let l=Dr(g(e,Re),g(e,re));return _e(z(t)),Xt(l.isoDate,g(e,P))}if(qe(e))return _e(z(t)),Xt(
g(e,Ye).isoDate,g(e,P));let s=No(e);return Xt(Kn(s,Er(s,e,["year","month","monthCode","day"],[],[]),_e(z(t))),s)}let{year:r,
month:n,day:a,calendar:i,z:o}=sn(mt(e));if(o)throw new RangeError("Z designator not supported for PlainDate");return i||
(i="iso8601"),i=rr(i),_e(z(t)),Xt({year:r,month:n,day:a},i)}function Oo(e,t,r){return xe(Kn(e,t,r),al(t.hour,t.minute,t.
second,t.millisecond,t.microsecond,t.nanosecond,r))}function zi(e,t){let r,n,a;if(Qe(e)){if(qe(e))return _e(z(t)),Nr(g(e,
Ye),g(e,P));if(ye(e)){let s=Dr(g(e,Re),g(e,re));return _e(z(t)),Nr(s,g(e,P))}if(Ze(e))return _e(z(t)),Nr(xe(g(e,ne),{deltaDays:0,
hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),g(e,P));a=No(e);let i=Er(a,e,["year","month","monthC\
ode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),o=_e(z(t));({isoDate:r,time:n}=Oo(a,
i,o))}else{let i,o,s,l;if({year:o,month:s,day:l,time:n,calendar:a,z:i}=sn(mt(e)),i)throw new RangeError("Z designator no\
t supported for PlainDateTime");n==="start-of-day"&&(n={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0}),Hu(o,s,l,n.hour,n.minute,n.second,n.millisecond,n.microsecond,n.nanosecond),a||(a="iso8601"),a=rr(a),_e(z(
t)),r={year:o,month:s,day:l}}return Nr(xe(r,n),a)}function Mr(e){let t=xt("%Temporal.Duration%");if(Je(e))return new t(g(
e,Wt),g(e,qt),g(e,sr),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,lr));if(!Qe(e))return function(a){let{years:i,
months:o,weeks:s,days:l,hours:c,minutes:u,seconds:d,milliseconds:f,microseconds:h,nanoseconds:v}=function(b){let T=H1.exec(
b);if(!T)throw new RangeError(`invalid duration: ${b}`);if(T.every((jt,Rr)=>Rr<2||jt===void 0))throw new RangeError(`inv\
alid duration: ${b}`);let S=T[1]==="-"?-1:1,E=T[2]===void 0?0:ie(T[2])*S,x=T[3]===void 0?0:ie(T[3])*S,I=T[4]===void 0?0:
ie(T[4])*S,D=T[5]===void 0?0:ie(T[5])*S,H=T[6]===void 0?0:ie(T[6])*S,K=T[7],J=T[8],L=T[9],ve=T[10],te=T[11],Z=0,Oe=0,ce=0;
if(K!==void 0){if(J??L??ve??te)throw new RangeError("only the smallest unit can be fractional");ce=3600*ie((K+"000000000").
slice(0,9))*S}else if(Z=J===void 0?0:ie(J)*S,L!==void 0){if(ve??te)throw new RangeError("only the smallest unit can be f\
ractional");ce=60*ie((L+"000000000").slice(0,9))*S}else Oe=ve===void 0?0:ie(ve)*S,te!==void 0&&(ce=ie((te+"000000000").slice(
0,9))*S);let Ue=ce%1e3,ft=Math.trunc(ce/1e3)%1e3,st=Math.trunc(ce/1e6)%1e3;return Oe+=Math.trunc(ce/1e9)%60,Z+=Math.trunc(
ce/6e10),ll(E,x,I,D,H,Z,Oe,st,ft,Ue),{years:E,months:x,weeks:I,days:D,hours:H,minutes:Z,seconds:Oe,milliseconds:st,microseconds:ft,
nanoseconds:Ue}}(a);return new(xt("%Temporal.Duration%"))(i,o,s,l,c,u,d,f,h,v)}(mt(e));let r={years:0,months:0,weeks:0,days:0,
hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0},n=Sm(e);for(let a=0;a<Us.length;a++){let i=Us[a],
o=n[i];o!==void 0&&(r[i]=o)}return new t(r.years,r.months,r.weeks,r.days,r.hours,r.minutes,r.seconds,r.milliseconds,r.microseconds,
r.nanoseconds)}function Ki(e){let t;if(Qe(e)){if(St(e)||ye(e))return Yr(g(e,re));t=nu(e)}else t=e;let{year:r,month:n,day:a,
time:i,offset:o,z:s}=function(b){let T=sn(b);if(!T.z&&!T.offset)throw new RangeError("Temporal.Instant requires a time z\
one offset");return T}(mt(t)),{hour:l=0,minute:c=0,second:u=0,millisecond:d=0,microsecond:f=0,nanosecond:h=0}=i==="start\
-of-day"?{}:i,v=uo(r,n,a,l,c,u,d,f,h-(s?0:ai(o)));return za(v.isoDate),Yr(_t(v))}function $h(e,t){if(Qe(e)){if(br(e))return _e(
z(t)),Va(g(e,ne),g(e,P));let s;return tr(e,P)?s=g(e,P):(s=e.calendar,s===void 0&&(s="iso8601"),s=Co(s)),Va(Bs(s,Er(s,e,[
"year","month","monthCode","day"],[],[]),_e(z(t))),s)}let{month:r,day:n,referenceISOYear:a,calendar:i}=Lu(mt(e));if(i===
void 0&&(i="iso8601"),i=rr(i),_e(z(t)),i==="iso8601")return Va({year:1972,month:r,day:n},i);let o={year:a,month:r,day:n};
return Ea(o),o=Bs(i,er(i,o,"month-day"),"constrain"),Va(o,i)}function Wn(e,t){let r;if(Qe(e)){if(at(e))return _e(z(t)),Tn(
g(e,Xe));if(qe(e))return _e(z(t)),Tn(g(e,Ye).time);if(ye(e)){let c=Dr(g(e,Re),g(e,re));return _e(z(t)),Tn(c.time)}let{hour:n,
minute:a,second:i,millisecond:o,microsecond:s,nanosecond:l}=iu(e);r=al(n,a,i,o,s,l,_e(z(t)))}else r=bm(mt(e)),_e(z(t));return Tn(
r)}function Em(e){return e===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:g(Wn(
e),Xe)}function Gi(e,t){if(Qe(e)){if(Et(e))return _e(z(t)),Ya(g(e,ne),g(e,P));let s=No(e);return Ya(so(s,Er(s,e,["year",
"month","monthCode"],[],[]),_e(z(t))),s)}let{year:r,month:n,referenceISODay:a,calendar:i}=ju(mt(e));i===void 0&&(i="iso8\
601"),i=rr(i),_e(z(t));let o={year:r,month:n,day:a};return Wu(o),o=so(i,er(i,o,"year-month"),"constrain"),Ya(o,i)}function Fs(e,t,r,n,a,i,o,s){
if(t==="start-of-day")return Bn(a,e);let l=xe(e,t);if(r==="wall"||o==="ignore")return Nt(a,l,i);if(r==="exact"||o==="use"){
let d=uo(e.year,e.month,e.day,t.hour,t.minute,t.second,t.millisecond,t.microsecond,t.nanosecond-n);za(d.isoDate);let f=_t(
d);return an(f),f}za(e);let c=_t(l),u=lo(a,l);for(let d=0;d<u.length;d++){let f=u[d],h=$.default.toNumber($.default.subtract(
c,f)),v=qn(h,6e10,"halfExpand");if(h===n||s&&v===n)return f}if(o==="reject"){let d=ou(n),f=co(l,"iso8601","auto");throw new RangeError(
`Offset ${d} is invalid for ${f} in ${a}`)}return Nm(u,a,l,i)}function Ji(e,t){let r,n,a,i,o,s,l,c=!1,u="option";if(Qe(e)){
if(ye(e)){let b=z(t);return ro(b),Ms(b,"reject"),_e(b),It(g(e,re),g(e,Re),g(e,P))}o=No(e);let f=Er(o,e,["year","month","\
monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);
({offset:i,timeZone:a}=f),i===void 0&&(u="wall");let h=z(t);s=ro(h),l=Ms(h,"reject");let v=_e(h);({isoDate:r,time:n}=Oo(
o,f,v))}else{let f,h,v,b,T;({year:v,month:b,day:T,time:n,tzAnnotation:f,offset:i,z:h,calendar:o}=function(E){let x=sn(E);
if(!x.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return x}(mt(e))),
a=Qt(f),h?u="exact":i||(u="wall"),o||(o="iso8601"),o=rr(o),c=!0;let S=z(t);s=ro(S),l=Ms(S,"reject"),_e(S),r={year:v,month:b,
day:T}}let d=0;return u==="option"&&(d=ai(i)),It(Fs(r,n,u,d,a,s,l,c),a,o)}function _m(e,t,r){Ea(t),Rn(e),fe(e,ne,t),fe(e,
P,r),fe(e,rm,!0)}function Xt(e,t){let r=xt("%Temporal.PlainDate%"),n=Object.create(r.prototype);return _m(n,e,t),n}function xm(e,t,r){
va(t),Rn(e),fe(e,Ye,t),fe(e,P,r)}function Nr(e,t){let r=xt("%Temporal.PlainDateTime%"),n=Object.create(r.prototype);return xm(
n,e,t),n}function Am(e,t,r){Ea(t),Rn(e),fe(e,ne,t),fe(e,P,r),fe(e,am,!0)}function Va(e,t){let r=xt("%Temporal.PlainMonth\
Day%"),n=Object.create(r.prototype);return Am(n,e,t),n}function $m(e,t){Rn(e),fe(e,Xe,t)}function Tn(e){let t=xt("%Tempo\
ral.PlainTime%"),r=Object.create(t.prototype);return $m(r,e),r}function Rm(e,t,r){Wu(t),Rn(e),fe(e,ne,t),fe(e,P,r),fe(e,
nm,!0)}function Ya(e,t){let r=xt("%Temporal.PlainYearMonth%"),n=Object.create(r.prototype);return Rm(n,e,t),n}function Om(e,t){
an(t),Rn(e),fe(e,re,t)}function Yr(e){let t=xt("%Temporal.Instant%"),r=Object.create(t.prototype);return Om(r,e),r}function Im(e,t,r,n){
an(t),Rn(e),fe(e,re,t),fe(e,Re,r),fe(e,P,n)}function It(e,t,r="iso8601"){let n=xt("%Temporal.ZonedDateTime%"),a=Object.create(
n.prototype);return Im(a,e,t,r),a}function Rh(e){return au.filter(t=>e[t]!==void 0)}function ga(e,t,r){let n=Rh(r),a=Jn(
e).fieldKeysToIgnore(n),i=Object.create(null),o=Rh(t);for(let s=0;s<au.length;s++){let l,c=au[s];o.includes(c)&&!a.includes(
c)&&(l=t[c]),n.includes(c)&&(l=r[c]),l!==void 0&&(i[c]=l)}return i}function kr(e,t,r,n){let a=Jn(e).dateAdd(t,r,n);return Ea(
a),a}function Io(e,t,r,n){return Jn(e).dateUntil(t,r,n)}function Co(e){if(Qe(e)&&tr(e,P))return g(e,P);let t=mt(e);try{return rr(
t)}catch{}let r;try{({calendar:r}=sn(t))}catch{try{({calendar:r}=bm(t))}catch{try{({calendar:r}=ju(t))}catch{({calendar:r}=
Lu(t))}}}return r||(r="iso8601"),rr(r)}function No(e){if(tr(e,P))return g(e,P);let{calendar:t}=e;return t===void 0?"iso8\
601":Co(t)}function nn(e,t){return rr(e)===rr(t)}function Kn(e,t,r){let n=Jn(e);n.resolveFields(t,"date");let a=n.dateToISO(
t,r);return Ea(a),a}function so(e,t,r){let n=Jn(e);n.resolveFields(t,"year-month"),t.day=1;let a=n.dateToISO(t,r);return Wu(
a),a}function Bs(e,t,r){let n=Jn(e);n.resolveFields(t,"month-day");let a=n.monthDayToISOReferenceDate(t,r);return Ea(a),
a}function Qt(e){if(Qe(e)&&ye(e))return g(e,Re);let t=mt(e);if(t==="UTC")return"UTC";let{tzName:r,offsetMinutes:n}=function(i){
let{tzAnnotation:o,offset:s,z:l}=function(c){if(wm.test(c))return{tzAnnotation:c,offset:void 0,z:!1};try{let{tzAnnotation:u,
offset:d,z:f}=sn(c);if(f||u||d)return{tzAnnotation:u,offset:d,z:f}}catch{}km(c)}(i);return o?Vn(o):l?Vn("UTC"):s?Vn(s):void 0}(
t);if(n!==void 0)return Uu(n);let a=Hs(r);if(!a)throw new RangeError(`Unrecognized time zone ${r}`);return a.identifier}
function Cm(e,t){if(e===t)return!0;let r=Vn(e).offsetMinutes,n=Vn(t).offsetMinutes;if(r===void 0&&n===void 0){let a=Hs(t);
if(!a)return!1;let i=Hs(e);return!!i&&i.primaryIdentifier===a.primaryIdentifier}return r===n}function kn(e,t){let r=Vn(e).
offsetMinutes;return r!==void 0?6e10*r:su(e,t)}function ou(e){let t=e<0?"-":"+",r=Math.abs(e),n=Math.floor(r/36e11),a=Math.
floor(r/6e10)%60,i=Math.floor(r/1e9)%60,o=r%1e9;return`${t}${il(n,a,i,o,i===0&&o===0?"minute":"auto")}`}function Dr(e,t){
let r=kn(e,t),{isoDate:{year:n,month:a,day:i},time:{hour:o,minute:s,second:l,millisecond:c,microsecond:u,nanosecond:d}}=Dm(
t);return uo(n,a,i,o,s,l,c,u,d+r)}function Nt(e,t,r){return Nm(lo(e,t),e,t,r)}function Nm(e,t,r,n){let a=e.length;if(a===
1)return e[0];if(a)switch(n){case"compatible":case"earlier":return e[0];case"later":return e[a-1];case"reject":throw new RangeError(
"multiple instants found")}if(n==="reject")throw new RangeError("multiple instants found");let i=_t(r),o=$.default.subtract(
i,Yn);an(o);let s=kn(t,o),l=$.default.add(i,Yn);an(l);let c=kn(t,l)-s;switch(n){case"earlier":{let u=Fe.fromComponents(0,
0,0,0,0,-c),d=Xa(r.time,u);return lo(t,xe(dr(r.isoDate.year,r.isoDate.month,r.isoDate.day+d.deltaDays),d))[0]}case"compa\
tible":case"later":{let u=Fe.fromComponents(0,0,0,0,0,c),d=Xa(r.time,u),f=lo(t,xe(dr(r.isoDate.year,r.isoDate.month,r.isoDate.
day+d.deltaDays),d));return f[f.length-1]}}}function lo(e,t){if(e==="UTC")return za(t.isoDate),[_t(t)];let r=Vn(e).offsetMinutes;
if(r!==void 0){let n=uo(t.isoDate.year,t.isoDate.month,t.isoDate.day,t.time.hour,t.time.minute-r,t.time.second,t.time.millisecond,
t.time.microsecond,t.time.nanosecond);za(n.isoDate);let a=_t(n);return an(a),[a]}return za(t.isoDate),function(n,a){let i=_t(
a),o=$.default.subtract(i,Yn);$.default.lessThan(o,io)&&(o=i);let s=$.default.add(i,Yn);$.default.greaterThan(s,Ga)&&(s=
i);let l=su(n,o),c=su(n,s);return(l===c?[l]:[l,c]).map(d=>{let f=$.default.subtract(i,$.default.BigInt(d)),h=function(v,b){
let{epochMilliseconds:T,time:{millisecond:S,microsecond:E,nanosecond:x}}=Dm(b),{year:I,month:D,day:H,hour:K,minute:J,second:L}=jm(
v,T);return uo(I,D,H,K,J,L,S,E,x)}(n,f);if(Qa(a,h)===0)return an(f),f}).filter(d=>d!==void 0)}(e,t)}function Bn(e,t){let r=xe(
t,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),n=lo(e,r);if(n.length)return n[0];let a=_t(
r),i=$.default.subtract(a,Yn);return an(i),Bu(e,i)}function Po(e){let t;return t=e<0||e>9999?(e<0?"-":"+")+oo(Math.abs(e),
6):oo(e,4),t}function Sr(e){return oo(e,2)}function Pm(e,t){let r;if(t==="auto"){if(e===0)return"";r=oo(e,9).replace(/0+$/,
"")}else{if(t===0)return"";r=oo(e,9).slice(0,t)}return`.${r}`}function il(e,t,r,n,a){let i=`${Sr(e)}:${Sr(t)}`;return a===
"minute"||(i+=`:${Sr(r)}`,i+=Pm(n,a)),i}function Oh(e,t,r){let n=t;n===void 0&&(n="UTC");let a=g(e,re),i=co(Dr(n,a),"iso\
8601",r,"never"),o="Z";return t!==void 0&&(o=Mm(kn(n,a))),`${i}${o}`}function Ps(e,t){let r=g(e,Wt),n=g(e,qt),a=g(e,sr),
i=g(e,Vt),o=g(e,Yt),s=g(e,zt),l=qs(e),c="";r!==0&&(c+=`${Math.abs(r)}Y`),n!==0&&(c+=`${Math.abs(n)}M`),a!==0&&(c+=`${Math.
abs(a)}W`),i!==0&&(c+=`${Math.abs(i)}D`);let u="";o!==0&&(u+=`${Math.abs(o)}H`),s!==0&&(u+=`${Math.abs(s)}M`);let d=Fe.fromComponents(
0,0,g(e,Kt),g(e,Gt),g(e,Jt),g(e,lr));d.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(bn(e))&&t===
"auto"||(u+=`${Math.abs(d.sec)}${Pm(Math.abs(d.subsec),t)}S`);let f=`${l<0?"-":""}P${c}`;return u&&(f=`${f}T${u}`),f}function Ih(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne);return`${Po(r)}-${Sr(n)}-${Sr(a)}${_o(g(e,P),t)}`}function Ch({hour:e,minute:t,
second:r,millisecond:n,microsecond:a,nanosecond:i},o){return il(e,t,r,1e6*n+1e3*a+i,o)}function co(e,t,r,n="auto"){let{isoDate:{
year:a,month:i,day:o},time:{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}=e;return`${Po(a)}-${Sr(i)}\
-${Sr(o)}T${il(s,l,c,1e6*u+1e3*d+f,r)}${_o(t,n)}`}function Nh(e,t="auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${Sr(n)}-${Sr(
a)}`,o=g(e,P);t!=="always"&&t!=="critical"&&o==="iso8601"||(i=`${Po(r)}-${i}`);let s=_o(o,t);return s&&(i+=s),i}function Ph(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${Po(r)}-${Sr(n)}`,o=g(e,P);t!=="always"&&t!=="critical"&&o==="iso8601"||(i+=
`-${Sr(a)}`);let s=_o(o,t);return s&&(i+=s),i}function Mh(e,t,r="auto",n="auto",a="auto",i=void 0){let o=g(e,re);if(i){let{
unit:u,increment:d,roundingMode:f}=i;o=du(o,d,u,f)}let s=g(e,Re),l=kn(s,o),c=co(Dr(s,o),"iso8601",t,"never");return a!==
"never"&&(c+=Mm(l)),n!=="never"&&(c+=`[${n==="critical"?"!":""}${s}]`),c+=_o(g(e,P),r),c}function Dh(e){return Tm.test(e)}
function ai(e){let t=tS.exec(e);if(!t)throw new RangeError(`invalid time zone offset: ${e}; must match \xB1HH:MM[:SS.SSSSSS\
SSS]`);return(t[1]==="-"?-1:1)*(1e9*(60*(60*+t[2]+ +(t[3]||0))+ +(t[4]||0))+ +((t[5]||0)+"000000000").slice(0,9))}var Bi,
Q1=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function Hs(e){if(Bi===void 0){let i=Intl.supportedValuesOf?.(
"timeZone");if(i){Bi=new Map;for(let o=0;o<i.length;o++){let s=i[o];Bi.set(po(s),s)}}else Bi=null}let t=po(e),r=Bi?.get(
t);if(r)return{identifier:r,primaryIdentifier:r};try{r=vm(e).resolvedOptions().timeZone}catch{return}if(t==="antarctica/\
south_pole"&&(r="Antarctica/McMurdo"),K1.has(e))throw new RangeError(`${e} is a legacy time zone identifier from ICU. Us\
e ${r} instead`);let n=[...t].map((i,o)=>o===0||Q1[t[o-1]]?i.toUpperCase():i).join("").split("/");if(n.length===1)return t===
"gb-eire"?{identifier:"GB-Eire",primaryIdentifier:r}:{identifier:t.length<=3||/[-0-9]/.test(t)?t.toUpperCase():n[0],primaryIdentifier:r};
if(n[0]==="Etc")return{identifier:`Etc/${["Zulu","Greenwich","Universal"].includes(n[1])?n[1]:n[1].toUpperCase()}`,primaryIdentifier:r};
if(n[0]==="Us")return{identifier:`US/${n[1]}`,primaryIdentifier:r};let a=new Map([["Act","ACT"],["Lhi","LHI"],["Nsw","NS\
W"],["Dar_Es_Salaam","Dar_es_Salaam"],["Port_Of_Spain","Port_of_Spain"],["Port-Au-Prince","Port-au-Prince"],["Isle_Of_Ma\
n","Isle_of_Man"],["Comodrivadavia","ComodRivadavia"],["Knox_In","Knox_IN"],["Dumontdurville","DumontDUrville"],["Mcmurd\
o","McMurdo"],["Denoronha","DeNoronha"],["Easterisland","EasterIsland"],["Bajanorte","BajaNorte"],["Bajasur","BajaSur"]]);
return n[1]=a.get(n[1])??n[1],n.length>2&&(n[2]=a.get(n[2])??n[2]),{identifier:n.join("/"),primaryIdentifier:r}}function ha(e,t){
let{year:r,month:n,day:a,hour:i,minute:o,second:s}=jm(e,t),l=t%1e3;return l<0&&(l+=1e3),1e6*(Fu({isoDate:{year:r,month:n,
day:a},time:{hour:i,minute:o,second:s,millisecond:l}})-t)}function su(e,t){return ha(e,jr(t,"floor"))}function Uu(e){let t=e<
0?"-":"+",r=Math.abs(e);return`${t}${il(Math.floor(r/60),r%60,0,0,"minute")}`}function Mm(e){return Uu(qn(e,W1,"halfExpa\
nd")/6e10)}function Fu({isoDate:{year:e,month:t,day:r},time:{hour:n,minute:a,second:i,millisecond:o}}){let s=e%400,l=(e-
s)/400,c=new Date;return c.setUTCHours(n,a,i,o),c.setUTCFullYear(s,t-1,r),c.getTime()+Y1*l}function _t(e){let t=Fu(e),r=1e3*
e.time.microsecond+e.time.nanosecond;return $.default.add(zr(t),$.default.BigInt(r))}function Dm(e){let t=jr(e,"trunc"),
r=$.default.toNumber($.default.remainder(e,So));r<0&&(r+=1e6,t-=1);let n=Math.floor(r/1e3)%1e3,a=r%1e3,i=new Date(t);return{
epochMilliseconds:t,isoDate:{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate()},time:{hour:i.getUTCHours(),
minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds(),microsecond:n,nanosecond:a}}}function Bu(e,t){
if(e==="UTC")return null;let r=jr(t,"floor");if(r<Qi)return Bu(e,zr(Qi));let n=Date.now(),a=Math.max(r,n)+366*zn*3,i=r,o=ha(
e,i),s=i,l=o;for(;o===l&&i<a;){if(s=i+2*zn*7,s>ym)return null;l=ha(e,s),o===l&&(i=s)}return o===l?null:zr(zm(c=>ha(e,c),
i,s,o,l))}function lu(e,t){if(e==="UTC")return null;let r=jr(t,"ceil"),n=Date.now(),a=n+366*zn*3;if(r>a){let c=lu(e,zr(a));
if(c===null||$.default.lessThan(c,zr(n)))return c}if(e==="Africa/Casablanca"||e==="Africa/El_Aaiun"){let c=Date.UTC(2088,
0,1);if(c<r)return lu(e,zr(c))}let i=r-1;if(i<Qi)return null;let o=ha(e,i),s=i,l=o;for(;o===l&&i>Qi;){if(s=i-2*zn*7,s<Qi)
return null;l=ha(e,s),o===l&&(i=s)}return o===l?null:zr(zm(c=>ha(e,c),s,i,l,o))}function jm(e,t){return function(r){let n=r.
split(/[^\w]+/);if(n.length!==7)throw new RangeError(`expected 7 parts in "${r}`);let a=+n[0],i=+n[1],o=+n[2],s=n[3];if(s[0]===
"b"||s[0]==="B")o=1-o;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${r}`);let l=n[4]==="24"?
0:+n[4],c=+n[5],u=+n[6];if(!(Number.isFinite(o)&&Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(l)&&Number.isFinite(
c)&&Number.isFinite(u)))throw new RangeError(`Invalid number in "${r}`);return{year:o,month:a,day:i,hour:l,minute:c,second:u}}(
vm(e).format(t))}function Ws(e){return e!==void 0&&!(e%4!=0||e%100==0&&e%400!=0)}function ma(e,t){return{standard:[31,28,
31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[Ws(e)?"leapyear":"standard"][t-1]}function qs(e){
let t=[g(e,Wt),g(e,qt),g(e,sr),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,lr)];for(let r=0;r<t.length;r++){let n=t[r];
if(n!==0)return n<0?-1:1}return 0}function ol(e){let t=["years","months","weeks","days"];for(let r=0;r<t.length;r++){let n=e[t[r]];
if(n!==0)return n<0?-1:1}return 0}function Lm(e){let t=ol(e.date);return t!==0?t:e.time.sign()}function fa(e,t){let r=e,
n=t;if(!Number.isFinite(r)||!Number.isFinite(n))throw new RangeError("infinity is out of range");return n-=1,r+=Math.floor(
n/12),n%=12,n<0&&(n+=12),n+=1,{year:r,month:n}}function dr(e,t,r){let n=e,a=t,i=r;if(!Number.isFinite(i))throw new RangeError(
"infinity is out of range");({year:n,month:a}=fa(n,a));let o=146097;if(Math.abs(i)>o){let c=Math.trunc(i/o);n+=400*c,i-=
c*o}let s=0,l=a>2?n:n-1;for(;s=Ws(l)?366:365,i<-s;)n-=1,l-=1,i+=s;for(l+=1;s=Ws(l)?366:365,i>s;)n+=1,l+=1,i-=s;for(;i<1;)
({year:n,month:a}=fa(n,a-1)),i+=ma(n,a);for(;i>ma(n,a);)i-=ma(n,a),{year:n,month:a}=fa(n,a+1);return{year:n,month:a,day:i}}
function uo(e,t,r,n,a,i,o,s,l){let c=Hn(n,a,i,o,s,l);return xe(dr(e,t,r+c.deltaDays),c)}function Hn(e,t,r,n,a,i){let o,s=e,
l=t,c=r,u=n,d=a,f=i;({div:o,mod:f}=qa(f,3)),d+=o,f<0&&(d-=1,f+=1e3),{div:o,mod:d}=qa(d,3),u+=o,d<0&&(u-=1,d+=1e3),c+=Math.
trunc(u/1e3),u%=1e3,u<0&&(c-=1,u+=1e3),l+=Math.trunc(c/60),c%=60,c<0&&(l-=1,c+=60),s+=Math.trunc(l/60),l%=60,l<0&&(s-=1,
l+=60);let h=Math.trunc(s/24);return s%=24,s<0&&(h-=1,s+=24),h+=0,s+=0,l+=0,c+=0,u+=0,d+=0,f+=0,{deltaDays:h,hour:s,minute:l,
second:c,millisecond:u,microsecond:d,nanosecond:f}}function jh(e,t){let r=Ct(e,0);if(ol(r)===0)return e.days;let n=g(t,ne),
a=kr(g(t,P),n,r,"constrain"),i=ba(n.year,n.month-1,n.day),o=ba(a.year,a.month-1,a.day)-i;return e.days+o}function pr(e){
return new(xt("%Temporal.Duration%"))(-g(e,Wt),-g(e,qt),-g(e,sr),-g(e,Vt),-g(e,Yt),-g(e,zt),-g(e,Kt),-g(e,Gt),-g(e,Jt),-g(
e,lr))}function Zt(e,t,r){return Math.min(r,Math.max(t,e))}function Um(e,t,r){let n=Zt(t,1,12);return{year:e,month:n,day:Zt(
r,1,ma(e,n))}}function wt(e,t,r){if(e<t||e>r)throw new RangeError(`value out of range: ${t} <= ${e} <= ${r}`)}function ya(e,t,r){
wt(t,1,12),wt(r,1,ma(e,t))}function Ea(e){va(xe(e,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}
function sl(e,t,r,n,a,i){wt(e,0,23),wt(t,0,59),wt(r,0,59),wt(n,0,999),wt(a,0,999),wt(i,0,999)}function Hu(e,t,r,n,a,i,o,s,l){
ya(e,t,r),sl(n,a,i,o,s,l)}function va(e){let t=_t(e);($.default.lessThan(t,q1)||$.default.greaterThan(t,V1))&&an(t)}function cu(e){
_t(e)}function an(e){if($.default.lessThan(e,io)||$.default.greaterThan(e,Ga))throw new RangeError("date/time value is o\
utside of supported range")}function Wu({year:e,month:t}){wt(e,Sh,Eh),e===Sh?wt(t,4,12):e===Eh&&wt(t,1,9)}function ll(e,t,r,n,a,i,o,s,l,c){
let u=0,d=[e,t,r,n,a,i,o,s,l,c];for(let S=0;S<d.length;S++){let E=d[S];if(E===1/0||E===-1/0)throw new RangeError("infini\
te values not allowed as duration fields");if(E!==0){let x=E<0?-1:1;if(u!==0&&x!==u)throw new RangeError("mixed-sign val\
ues not allowed as duration fields");u=x}}if(Math.abs(e)>=2**32||Math.abs(t)>=2**32||Math.abs(r)>=2**32)throw new RangeError(
"years, months, and weeks must be < 2\xB3\xB2");let f=qa(s,3),h=qa(l,6),v=qa(c,9),b=qa(1e6*f.mod+1e3*h.mod+v.mod,9).div,
T=86400*n+3600*a+60*i+o+f.div+h.div+v.div+b;if(!Number.isSafeInteger(T))throw new RangeError("total of duration time uni\
ts cannot exceed 9007199254740991.999999999 s")}function Wa(e){return{date:{years:g(e,Wt),months:g(e,qt),weeks:g(e,sr),days:g(
e,Vt)},time:Fe.fromComponents(g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,lr))}}function tn(e){let t=Fe.fromComponents(g(
e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,lr)).add24HourDays(g(e,Vt));return{date:{years:g(e,Wt),months:g(e,qt),weeks:g(
e,sr),days:0},time:t}}function Fm(e){let t=tn(e),r=Math.trunc(t.time.sec/86400);return ll(t.date.years,t.date.months,t.date.
weeks,r,0,0,0,0,0,0),{...t.date,days:r}}function Pr(e,t){let r=e.time.sign(),n=e.time.abs().subsec,a=0,i=0,o=e.time.abs().
sec,s=0,l=0,c=0;switch(t){case"year":case"month":case"week":case"day":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=
1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(s/60),s%=60,c=Math.trunc(l/24),l%=24;break;case"ho\
ur":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(
s/60),s%=60;break;case"minute":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.
trunc(o/60),o%=60;break;case"second":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3;break;case"\
millisecond":a=Math.trunc(n/1e3),n%=1e3,i=Vc(o,3,Math.trunc(a/1e3)),a%=1e3,o=0;break;case"microsecond":a=Vc(o,6,Math.trunc(
n/1e3)),n%=1e3,o=0;break;case"nanosecond":n=Vc(o,9,n),o=0}return new(xt("%Temporal.Duration%"))(e.date.years,e.date.months,
e.date.weeks,e.date.days+r*c,r*l,r*s,r*o,r*i,r*a,r*n)}function En(e,t){return ol(e),t.sign(),{date:e,time:t}}function ba(e,t,r){
return Fu({isoDate:{year:e,month:t+1,day:r},time:{hour:0,minute:0,second:0,millisecond:0}})/zn}function za({year:e,month:t,
day:r}){if(Math.abs(ba(e,t-1,r))>1e8)throw new RangeError("date/time value is outside the supported range")}function qu(e,t){
let r=t.hour-e.hour,n=t.minute-e.minute,a=t.second-e.second,i=t.millisecond-e.millisecond,o=t.microsecond-e.microsecond,
s=t.nanosecond-e.nanosecond;return Fe.fromComponents(r,n,a,i,o,s)}function Vu(e,t,r,n,a){let i=Fe.fromEpochNsDiff(t,e);return i=
Vs(i,r,n,a),En({years:0,months:0,weeks:0,days:0},i)}function Bm(e,t,r,n){cu(e),cu(t);let a=qu(e.time,t.time),i=a.sign(),
o=on(e.isoDate,t.isoDate),s=t.isoDate;o===i&&(s=dr(s.year,s.month,s.day+i),a=a.add24HourDays(-i));let l=Sn("day",n),c=Io(
r,e.isoDate,s,l);return n!==l&&(a=a.add24HourDays(c.days),c.days=0),En(c,a)}function Hm(e,t,r,n,a){let i=$.default.subtract(
t,e);if($.default.equal(i,wr))return{date:{years:0,months:0,weeks:0,days:0},time:Fe.ZERO};let o=$.default.lessThan(i,wr)?
-1:1,s=Dr(r,e),l=Dr(r,t),c,u=0,d=o===1?2:1,f=qu(s.time,l.time);for(f.sign()===-o&&u++;u<=d;u++){c=xe(dr(l.isoDate.year,l.
isoDate.month,l.isoDate.day-u*o),s.time);let v=Nt(r,c,"compatible");if(f=Fe.fromEpochNsDiff(t,v),f.sign()!==-o)break}let h=Sn(
"day",a);return En(Io(n,s.isoDate,c.isoDate,h),f)}function Wm(e,t,r,n,a,i,o,s,l){let c,u,d,f,h=t;switch(s){case"year":{let Z=qn(
h.date.years,o,"trunc");c=Z,u=Z+o*e,d={years:c,months:0,weeks:0,days:0},f={...d,years:u};break}case"month":{let Z=qn(h.date.
months,o,"trunc");c=Z,u=Z+o*e,d=Ct(h.date,0,0,c),f=Ct(h.date,0,0,u);break}case"week":{let Z=Ct(h.date,0,0),Oe=kr(i,n.isoDate,
Z,"constrain"),ce=Io(i,Oe,dr(Oe.year,Oe.month,Oe.day+h.date.days),"week"),Ue=qn(h.date.weeks+ce.weeks,o,"trunc");c=Ue,u=
Ue+o*e,d=Ct(h.date,0,c),f=Ct(h.date,0,u);break}case"day":{let Z=qn(h.date.days,o,"trunc");c=Z,u=Z+o*e,d=Ct(h.date,c),f=Ct(
h.date,u);break}}let v=kr(i,n.isoDate,d,"constrain"),b=kr(i,n.isoDate,f,"constrain"),T,S,E=xe(v,n.time),x=xe(b,n.time);a?
(T=Nt(a,E,"compatible"),S=Nt(a,x,"compatible")):(T=_t(E),S=_t(x));let I=Fe.fromEpochNsDiff(r,T),D=Fe.fromEpochNsDiff(S,T),
H=Qs(l,e<0?"negative":"positive"),K=I.add(I).abs().subtract(D.abs()).sign(),J=Math.abs(c)/o%2==0,L=I.isZero()?Math.abs(c):
I.cmp(D)?el(Math.abs(c),Math.abs(u),K,J,H):Math.abs(u),ve=new Fe($.default.add($.default.multiply(D.totalNs,$.default.BigInt(
c)),$.default.multiply(I.totalNs,$.default.BigInt(o*e)))).fdiv(D.totalNs),te=L===Math.abs(u);return h={date:te?f:d,time:Fe.
ZERO},{nudgeResult:{duration:h,nudgedEpochNs:te?S:T,didExpandCalendarUnit:te},total:ve}}function cl(e,t,r,n,a,i,o,s,l){let c=e,
u=Qr(s)||n&&s==="day",d=Lm(c)<0?-1:1,f;return u?{nudgeResult:f}=Wm(d,c,t,r,n,a,o,s,l):f=n?function(h,v,b,T,S,E,x,I){let D=v,
H=kr(S,b.isoDate,D.date,"constrain"),K=xe(H,b.time),J=xe(dr(H.year,H.month,H.day+h),b.time),L=Nt(T,K,"compatible"),ve=Nt(
T,J,"compatible"),te=Fe.fromEpochNsDiff(ve,L);if(te.sign()!==h)throw new RangeError("time zone returned inconsistent Ins\
tants");let Z=$.default.BigInt(Za[x]*E),Oe=D.time.round(Z,I),ce=Oe.subtract(te),Ue=ce.sign()!==-h,ft,st;return Ue?(ft=h,
Oe=ce.round(Z,I),st=Oe.addToEpochNs(ve)):(ft=0,st=Oe.addToEpochNs(L)),{duration:En(Ct(D.date,D.date.days+ft),Oe),nudgedEpochNs:st,
didExpandCalendarUnit:Ue}}(d,c,r,n,a,o,s,l):function(h,v,b,T,S,E){let x=h,I=x.time.add24HourDays(x.date.days),D=I.round(
$.default.BigInt(T*Za[S]),E),H=D.subtract(I),{quotient:K}=I.divmod(Ls),{quotient:J}=D.divmod(Ls),L=Math.sign(J-K)===I.sign(),
ve=H.addToEpochNs(v),te=0,Z=D;return wn(b)==="date"&&(te=J,Z=D.add(Fe.fromComponents(24*-J,0,0,0,0,0))),{duration:{date:Ct(
x.date,te),time:Z},nudgedEpochNs:ve,didExpandCalendarUnit:L}}(c,t,i,o,s,l),c=f.duration,f.didExpandCalendarUnit&&s!=="we\
ek"&&(c=function(h,v,b,T,S,E,x,I){let D=v;if(I===x)return D;let H=eo.indexOf(x);for(let K=eo.indexOf(I)-1;K>=H;K--){let J=eo[K];
if(J==="week"&&x!=="week")continue;let L;switch(J){case"year":L={years:D.date.years+h,months:0,weeks:0,days:0};break;case"\
month":{let Z=D.date.months+h;L=Ct(D.date,0,0,Z);break}case"week":{let Z=D.date.weeks+h;L=Ct(D.date,0,Z);break}}let ve=xe(
kr(E,T.isoDate,L,"constrain"),T.time),te;if(te=S?Nt(S,ve,"compatible"):_t(ve),Ds(b,te)===-h)break;D={date:L,time:Fe.ZERO}}
return D}(d,c,f.nudgedEpochNs,r,n,a,i,Sn(s,"day"))),c}function Lh(e,t,r,n,a,i){return Qr(i)||n&&i==="day"?Wm(Lm(e)<0?-1:
1,e,t,r,n,a,1,i,"trunc").total:no(e.time.add24HourDays(e.date.days),i)}function qm(e,t,r,n,a,i,o){if(Qa(e,t)==0)return{date:{
years:0,months:0,weeks:0,days:0},time:Fe.ZERO};va(e),va(t);let s=Bm(e,t,r,n);return i==="nanosecond"&&a===1?s:cl(s,_t(t),
e,null,r,n,a,i,o)}function Vm(e,t,r,n,a,i,o,s){if(wn(a)==="time")return Vu(e,t,i,o,s);let l=Hm(e,t,r,n,a);return o==="na\
nosecond"&&i===1?l:cl(l,t,Dr(r,e),r,n,a,i,o,s)}function ii(e,t,r,n,a,i){let o=Ja.reduce((h,v)=>{let b=v[0],T=v[1],S=v[2];
return r!=="datetime"&&S!==r||n.includes(T)||h.push(T,b),h},[]),s=ur(t,"largestUnit",r,"auto");if(n.includes(s))throw new RangeError(
`largestUnit must be one of ${o.join(", ")}, not ${s}`);let l=ri(t),c=Kr(t,"trunc");e==="since"&&(c=function(h){switch(h){case"\
ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return h}}(
c));let u=ur(t,"smallestUnit",r,a);if(n.includes(u))throw new RangeError(`smallestUnit must be one of ${o.join(", ")}, n\
ot ${u}`);let d=Sn(i,u);if(s==="auto"&&(s=d),Sn(s,u)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than s\
mallestUnit ${u}`);let f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];return f!==void 0&&
ni(l,f,!1),{largestUnit:s,roundingIncrement:l,roundingMode:c,smallestUnit:u}}function Uh(e,t,r,n){let a=Ki(r),i=ii(e,z(n),
"time",[],"nanosecond","second"),o=Pr(Vu(g(t,re),g(a,re),i.roundingIncrement,i.smallestUnit,i.roundingMode),i.largestUnit);
return e==="since"&&(o=pr(o)),o}function Fh(e,t,r,n){let a=Yi(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`can\
not compute difference between dates of ${i} and ${o} calendars`);let s=ii(e,z(n),"date",[],"day","day"),l=xt("%Temporal\
.Duration%"),c=g(t,ne),u=g(a,ne);if(on(c,u)===0)return new l;let d={date:Io(i,c,u,s.largestUnit),time:Fe.ZERO};if(s.smallestUnit!==
"day"||s.roundingIncrement!==1){let h=xe(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});
d=cl(d,_t(xe(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),h,null,i,s.largestUnit,
s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=Pr(d,"day");return e==="since"&&(f=pr(f)),f}function Bh(e,t,r,n){
let a=zi(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`cannot compute difference between dates of ${i} and ${o}\
 calendars`);let s=ii(e,z(n),"datetime",[],"nanosecond","day"),l=xt("%Temporal.Duration%"),c=g(t,Ye),u=g(a,Ye);if(Qa(c,u)===
0)return new l;let d=Pr(qm(c,u,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return e===
"since"&&(d=pr(d)),d}function Hh(e,t,r,n){let a=Wn(r),i=ii(e,z(n),"time",[],"nanosecond","hour"),o=qu(g(t,Xe),g(a,Xe));o=
Vs(o,i.roundingIncrement,i.smallestUnit,i.roundingMode);let s=Pr(En({years:0,months:0,weeks:0,days:0},o),i.largestUnit);
return e==="since"&&(s=pr(s)),s}function Wh(e,t,r,n){let a=Gi(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`can\
not compute difference between months of ${i} and ${o} calendars`);let s=ii(e,z(n),"date",["week","day"],"month","year"),
l=xt("%Temporal.Duration%");if(on(g(t,ne),g(a,ne))==0)return new l;let c=er(i,g(t,ne),"year-month");c.day=1;let u=Kn(i,c,
"constrain"),d=er(i,g(a,ne),"year-month");d.day=1;let f=Kn(i,d,"constrain"),h={date:Ct(Io(i,u,f,s.largestUnit),0,0),time:Fe.
ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){let b=xe(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,
microsecond:0,nanosecond:0});h=cl(h,_t(xe(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),
b,null,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let v=Pr(h,"day");return e==="since"&&(v=pr(v)),
v}function qh(e,t,r,n){let a=Ji(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`cannot compute difference between\
 dates of ${i} and ${o} calendars`);let s=ii(e,z(n),"datetime",[],"nanosecond","hour"),l=g(t,re),c=g(a,re),u=xt("%Tempor\
al.Duration%"),d;if(wn(s.largestUnit)!=="date")d=Pr(Vu(l,c,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{
let f=g(t,Re);if(!Cm(f,g(a,Re)))throw new RangeError("When calculating difference between time zones, largestUnit must b\
e 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if($.default.
equal(l,c))return new u;d=Pr(Vm(l,c,f,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return e===
"since"&&(d=pr(d)),d}function Xa({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o){let s=r,l=i;return s+=
o.sec,l+=o.subsec,Hn(e,t,s,n,a,l)}function uu(e,t){let r=t.addToEpochNs(e);return an(r),r}function Zi(e,t,r,n,a="constra\
in"){if(ol(n.date)===0)return uu(e,n.time);let i=Dr(t,e);return uu(Nt(t,xe(kr(r,i.isoDate,n.date,a),i.time),"compatible"),
n.time)}function Vh(e,t,r){let n=Mr(r);e==="subtract"&&(n=pr(n));let a=Sn(bn(t),bn(n));if(Qr(a))throw new RangeError("Fo\
r years, months, or weeks arithmetic, use date arithmetic relative to a starting point");let i=tn(t),o=tn(n);return Pr(En(
{years:0,months:0,weeks:0,days:0},i.time.add(o.time)),a)}function Yh(e,t,r){let n=Mr(r);e==="subtract"&&(n=pr(n));let a=bn(
n);if(wn(a)==="date")throw new RangeError(`Duration field ${a} not supported by Temporal.Instant. Try Temporal.ZonedDate\
Time instead.`);let i=tn(n);return Yr(uu(g(t,re),i.time))}function zh(e,t,r,n){let a=g(t,P),i=Mr(r);e==="subtract"&&(i=pr(
i));let o=Fm(i),s=_e(z(n));return Xt(kr(a,g(t,ne),o,s),a)}function Kh(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=pr(a));let i=_e(
z(n)),o=g(t,P),s=tn(a),l=g(t,Ye),c=Xa(l.time,s.time),u=Ct(s.date,c.deltaDays);return ll(u.years,u.months,u.weeks,u.days,
0,0,0,0,0,0),Nr(xe(kr(o,l.isoDate,u,i),c),o)}function Gh(e,t,r){let n=Mr(r);e==="subtract"&&(n=pr(n));let a=tn(n),{hour:i,
minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Xa(g(t,Xe),a.time);return Tn(al(i,o,s,l,c,u,"reject"))}function Jh(e,t,r,n){
let a=Mr(r);e==="subtract"&&(a=pr(a));let i=_e(z(n)),o=qs(a),s=g(t,P),l=er(s,g(t,ne),"year-month");l.day=1;let c=Kn(s,l,
"constrain");if(o<0){let d=kr(s,c,{months:1},"constrain");c=dr(d.year,d.month,d.day-1)}let u=Fm(a);return Ea(c),Ya(so(s,
er(s,kr(s,c,u,i),"year-month"),i),s)}function Zh(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=pr(a));let i=_e(z(n)),o=g(t,Re),
s=g(t,P),l=Wa(a);return It(Zi(g(t,re),o,s,l,i),o,s)}function qn(e,t,r){let n=Math.trunc(e/t),a=e%t,i=e<0?"negative":"pos\
itive",o=Math.abs(n),s=o+1,l=cr(Math.abs(2*a)-t),c=o%2==0,u=Qs(r,i),d=a===0?o:el(o,s,l,c,u);return t*(i==="positive"?d:-d)}
function du(e,t,r,n){let a=Za[r]*t;return function(i,o,s){let l=vn(i),c=vn(o),u=$.default.divide(l,c),d=$.default.remainder(
l,c),f=Qs(s,"positive"),h,v;$.default.lessThan(l,wr)?(h=$.default.subtract(u,ao),v=u):(h=u,v=$.default.add(u,ao));let b=Ds(
pa($.default.multiply(d,Du)),c)*($.default.lessThan(l,wr)?-1:1)+0,T=$.default.equal(d,wr)?u:el(h,v,b,tm(h),f);return $.default.
multiply(T,c)}(e,$.default.BigInt(a),n)}function pu(e,t,r,n){cu(e);let{year:a,month:i,day:o}=e.isoDate,s=fu(e.time,t,r,n);
return xe(dr(a,i,o+s.deltaDays),s)}function fu({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o,s,l){
let c;switch(s){case"day":case"hour":c=1e3*(1e3*(1e3*(60*(60*e+t)+r)+n)+a)+i;break;case"minute":c=1e3*(1e3*(1e3*(60*t+r)+
n)+a)+i;break;case"second":c=1e3*(1e3*(1e3*r+n)+a)+i;break;case"millisecond":c=1e3*(1e3*n+a)+i;break;case"microsecond":c=
1e3*a+i;break;case"nanosecond":c=i}let u=Za[s],d=qn(c,u*o,l)/u;switch(s){case"day":return{deltaDays:d,hour:0,minute:0,second:0,
millisecond:0,microsecond:0,nanosecond:0};case"hour":return Hn(d,0,0,0,0,0);case"minute":return Hn(e,d,0,0,0,0);case"sec\
ond":return Hn(e,t,d,0,0,0);case"millisecond":return Hn(e,t,r,d,0,0);case"microsecond":return Hn(e,t,r,n,d,0);case"nanos\
econd":return Hn(e,t,r,n,a,d);default:throw new Error(`Invalid unit ${s}`)}}function Vs(e,t,r,n){let a=Za[r];return e.round(
$.default.BigInt(a*t),n)}function no(e,t){let r=Za[t];return e.fdiv($.default.BigInt(r))}function on(e,t){return e.year!==
t.year?cr(e.year-t.year):e.month!==t.month?cr(e.month-t.month):e.day!==t.day?cr(e.day-t.day):0}function hu(e,t){return e.
hour!==t.hour?cr(e.hour-t.hour):e.minute!==t.minute?cr(e.minute-t.minute):e.second!==t.second?cr(e.second-t.second):e.millisecond!==
t.millisecond?cr(e.millisecond-t.millisecond):e.microsecond!==t.microsecond?cr(e.microsecond-t.microsecond):e.nanosecond!==
t.nanosecond?cr(e.nanosecond-t.nanosecond):0}function Qa(e,t){let r=on(e.isoDate,t.isoDate);return r!==0?r:hu(e.time,t.time)}
function Ym(e){let t=Ys(e);return globalThis.BigInt!==void 0?globalThis.BigInt(t.toString(10)):t}function jr(e,t){let r=vn(
e),{quotient:n,remainder:a}=qi(r,So),i=$.default.toNumber(n);return t==="floor"&&$.default.toNumber(a)<0&&(i-=1),t==="ce\
il"&&$.default.toNumber(a)>0&&(i+=1),i}function zr(e){if(!Number.isInteger(e))throw new RangeError("epoch milliseconds m\
ust be an integer");return $.default.multiply($.default.BigInt(e),So)}function Ys(e){let t=e;if(typeof e=="object"){let r=e[Symbol.
toPrimitive];r&&typeof r=="function"&&(t=r.call(e,"number"))}if(typeof t=="number")throw new TypeError("cannot convert n\
umber to bigint");return typeof t=="bigint"?$.default.BigInt(t.toString(10)):$.default.BigInt(t)}var mu=(()=>{let e=$.default.
BigInt(Date.now()%1e6);return()=>{let t=Date.now(),r=$.default.BigInt(t),n=$.default.add(zr(t),e);return e=$.default.remainder(
r,So),$.default.greaterThan(n,Ga)?Ga:$.default.lessThan(n,io)?io:n}})();function Hi(){return new Intl.DateTimeFormat().resolvedOptions().
timeZone}function cr(e){return e<0?-1:e>0?1:e}function z(e){if(e===void 0)return Object.create(null);if(Qe(e)&&e!==null)
return e;throw new TypeError("Options parameter must be an object, not "+(e===null?"null":typeof e))}function wa(e,t){let r=Object.
create(null);return r[e]=t,r}function _n(e,t,r,n){let a=e[t];if(a!==void 0){if(a=rl(a),!r.includes(a))throw new RangeError(
`${t} must be one of ${r.join(", ")}, not ${a}`);return a}if(n===An)throw new RangeError(`${t} option is required`);return n}
function rr(e){let t=po(e);if(!z1.includes(po(t)))throw new RangeError(`invalid calendar identifier ${t}`);switch(t){case"\
ethiopic-amete-alem":return"ethioaa";case"islamicc":return"islamic-civil"}return t}function po(e){let t="";for(let r=0;r<
e.length;r++){let n=e.charCodeAt(r);t+=n>=65&&n<=90?String.fromCharCode(n+32):String.fromCharCode(n)}return t}function Zn(e){
throw new TypeError(`Do not use built-in arithmetic operators with Temporal objects. When comparing, use ${e==="PlainMon\
thDay"?"Temporal.PlainDate.compare(obj1.toPlainDate(year), obj2.toPlainDate(year))":`Temporal.${e}.compare(obj1, obj2)`}\
, not obj1 > obj2. When coercing to strings, use \`\${obj}\` or String(obj), not '' + obj. When coercing to numbers, use pr\
operties or methods of the object, not \`+obj\`. When concatenating with strings, use \`\${str}\${obj}\` or str.concat(obj), n\
ot str + obj. In React, coerce to a string before rendering a Temporal object.`)}var eS=new RegExp(`^${mm.source}$`),tS=new RegExp(
`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/.source}$`);function zm(e,t,r,n=e(
t),a=e(r)){let i=t,o=r,s=n,l=a;for(;o-i>1;){let c=Math.trunc((i+o)/2),u=e(c);u===s?(i=c,s=u):u===l&&(o=c,l=u)}return o}function Km(e){
return[...e]}function Gm(e,t){if(e!=="gregory"&&e!=="iso8601")return;let r=Mo[e],n=t.year,{dayOfWeek:a,dayOfYear:i,daysInYear:o}=r.
isoToDate(t,{dayOfWeek:!0,dayOfYear:!0,daysInYear:!0}),s=r.getFirstDayOfWeek(),l=r.getMinimalDaysInFirstWeek(),c=(a+7-s)%
7,u=(a-i+7001-s)%7,d=Math.floor((i-1+u)/7);if(7-u>=l&&++d,d==0)d=function(f,h,v,b){let T=(b-f-v+1)%7;T<0&&(T+=7);let S=Math.
floor((v+T-1)/7);return 7-T>=h&&++S,S}(s,l,i+r.isoToDate(r.dateAdd(t,{years:-1},"constrain"),{daysInYear:!0}).daysInYear,
a),n--;else if(i>=o-5){let f=(c+o-i)%7;f<0&&(f+=7),6-f>=l&&i+7-c>o&&(d=1,n++)}return{week:d,year:n}}function Xh(e,t,r,n,a){
if(t!==a.year){if(e*(t-a.year)>0)return!0}else if(r!==a.month){if(e*(r-a.month)>0)return!0}else if(n!==a.day&&e*(n-a.day)>
0)return!0;return!1}var Mo={};function Ta(e){if(!e.startsWith("M"))throw new RangeError(`Invalid month code: ${e}.  Mont\
h codes must start with M.`);let t=+e.slice(1);if(Number.isNaN(t))throw new RangeError(`Invalid month code: ${e}`);return t}
function rn(e,t=!1){return`M${`${e}`.padStart(2,"0")}${t?"L":""}`}function Yu(e,t=void 0,r=12){let{month:n,monthCode:a}=e;
if(a===void 0){if(n===void 0)throw new TypeError("Either month or monthCode are required");t==="reject"&&wt(n,1,r),t==="\
constrain"&&(n=Zt(n,1,r)),a=rn(n)}else{let i=Ta(a);if(a!==rn(i))throw new RangeError(`Invalid month code: ${a}`);if(n!==
void 0&&n!==i)throw new RangeError(`monthCode ${a} and month ${n} must match if both are present`);if(n=i,n<1||n>r)throw new RangeError(
`Invalid monthCode: ${a}`)}return{...e,month:n,monthCode:a}}Mo.iso8601={resolveFields(e,t){if((t==="date"||t==="year-mon\
th")&&e.year===void 0)throw new TypeError("year is required");if((t==="date"||t==="month-day")&&e.day===void 0)throw new TypeError(
"day is required");Object.assign(e,Yu(e))},dateToISO:(e,t)=>to(e.year,e.month,e.day,t),monthDayToISOReferenceDate(e,t){let{
month:r,day:n}=to(e.year??1972,e.month,e.day,t);return{month:r,day:n,year:1972}},extraFields:()=>[],fieldKeysToIgnore(e){
let t=new Set;for(let r=0;r<e.length;r++){let n=e[r];t.add(n),n==="month"?t.add("monthCode"):n==="monthCode"&&t.add("mon\
th")}return Km(t)},dateAdd(e,{years:t=0,months:r=0,weeks:n=0,days:a=0},i){let{year:o,month:s,day:l}=e;return o+=t,s+=r,{
year:o,month:s}=fa(o,s),{year:o,month:s,day:l}=to(o,s,l,i),l+=a+7*n,dr(o,s,l)},dateUntil(e,t,r){let n=-on(e,t);if(n===0)
return{years:0,months:0,weeks:0,days:0};let a,i=0,o=0;if(r==="year"||r==="month"){let u=t.year-e.year;for(u!==0&&(u-=n);!Xh(
n,e.year+u,e.month,e.day,t);)i=u,u+=n;let d=n;for(a=fa(e.year+i,e.month+d);!Xh(n,a.year,a.month,e.day,t);)o=d,d+=n,a=fa(
a.year,a.month+n);r==="month"&&(o+=12*i,i=0)}a=fa(e.year+i,e.month+o);let s=Um(a.year,a.month,e.day),l=0,c=ba(t.year,t.month-
1,t.day)-ba(s.year,s.month-1,s.day);return r==="week"&&(l=Math.trunc(c/7),c%=7),{years:i,months:o,weeks:l,days:c}},isoToDate({
year:e,month:t,day:r},n){let a={era:void 0,eraYear:void 0,year:e,month:t,day:r,daysInWeek:7,monthsInYear:12};if(n.monthCode&&
(a.monthCode=rn(t)),n.dayOfWeek){let i=t+(t<3?10:-2),o=e-(t<3?1:0),s=Math.floor(o/100),l=o-100*s,c=(r+Math.floor(2.6*i-.2)+
(l+Math.floor(l/4))+(Math.floor(s/4)-2*s))%7;a.dayOfWeek=c+(c<=0?7:0)}if(n.dayOfYear){let i=r;for(let o=t-1;o>0;o--)i+=ma(
e,o);a.dayOfYear=i}return n.weekOfYear&&(a.weekOfYear=Gm("iso8601",{year:e,month:t,day:r})),n.daysInMonth&&(a.daysInMonth=
ma(e,t)),(n.daysInYear||n.inLeapYear)&&(a.inLeapYear=Ws(e),a.daysInYear=a.inLeapYear?366:365),a},getFirstDayOfWeek:()=>1,
getMinimalDaysInFirstWeek:()=>4};var vr=class e{constructor(t){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=
0,t!==void 0){let r=0;for(let n of t.map.entries()){if(++r>e.MAX_CACHE_ENTRIES)break;this.map.set(...n)}}}get(t){let r=this.
map.get(t);return r&&(this.hits++,this.report()),this.calls++,r}set(t,r){this.map.set(t,r),this.misses++,this.report()}report(){}setObject(t){
if(e.objectMap.get(t))throw new RangeError("object already cached");e.objectMap.set(t,this),this.report()}static getCacheForObject(t){
let r=e.objectMap.get(t);return r||(r=new e,e.objectMap.set(t,r)),r}};function Jm({isoYear:e,isoMonth:t,isoDay:r}){return`${Po(
e)}-${Sr(t)}-${Sr(r)}T00:00Z`}function Kc(e,t){return{years:e.year-t.year,months:e.month-t.month,days:e.day-t.day}}vr.objectMap=
new WeakMap,vr.MAX_CACHE_ENTRIES=1e3;var $n=class{constructor(){this.eras=[],this.hasEra=!1,this.erasBeginMidYear=!1}getFormatter(){
return this.formatter===void 0&&(this.formatter=new Intl.DateTimeFormat(`en-US-u-ca-${this.id}`,{day:"numeric",month:"nu\
meric",year:"numeric",era:"short",timeZone:"UTC"})),this.formatter}getCalendarParts(t){let r=this.getFormatter(),n=new Date(
t);if(t==="-271821-04-19T00:00Z"){let a=r.resolvedOptions();r=new Intl.DateTimeFormat(a.locale,{...a,timeZone:"Etc/GMT+1"}),
n=new Date("-271821-04-20T00:00Z")}try{return r.formatToParts(n)}catch{throw new RangeError(`Invalid ISO date: ${t}`)}}isoToCalendarDate(t,r){
let{year:n,month:a,day:i}=t,o=JSON.stringify({func:"isoToCalendarDate",isoYear:n,isoMonth:a,isoDay:i,id:this.id}),s=r.get(
o);if(s)return s;let l=Jm({isoYear:n,isoMonth:a,isoDay:i}),c=this.getCalendarParts(l),u={};for(let f=0;f<c.length;f++){let{
type:h,value:v}=c[f];if(h!=="year"&&h!=="relatedYear"||(this.hasEra?u.eraYear=+v:u.year=+v),h==="month"){let b=/^([0-9]*)(.*?)$/.
exec(v);if(!b||b.length!=3||!b[1]&&!b[2])throw new RangeError(`Unexpected month: ${v}`);if(u.month=b[1]?+b[1]:1,u.month<
1)throw new RangeError(`Invalid month ${v} from ${l}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/is\
sues/detail?id=10527)`);if(u.month>13)throw new RangeError(`Invalid month ${v} from ${l}[u-ca-${this.id}] (probably due \
to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);b[2]&&(u.monthExtra=b[2])}h==="day"&&(u.day=+v),this.hasEra&&
h==="era"&&v!=null&&v!==""&&(u.era=v.split(" (")[0].normalize("NFD").replace(/[^-0-9 \p{L}]/gu,"").replace(/ /g,"-").toLowerCase())}
if(this.hasEra&&u.eraYear===void 0)throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id}\
 calendar. Try Node 14+ or modern browsers.`);if(this.hasEra){let f=this.eras.find(h=>u.era===h.genericName);f&&(u.era=f.
code)}if(this.reviseIntlEra){let{era:f,eraYear:h}=this.reviseIntlEra(u,t);u.era=f,u.eraYear=h}this.checkIcuBugs&&this.checkIcuBugs(
t);let d=this.adjustCalendarDate(u,r,"constrain",!0);if(d.year===void 0)throw new RangeError(`Missing year converting ${JSON.
stringify(t)}`);if(d.month===void 0)throw new RangeError(`Missing month converting ${JSON.stringify(t)}`);if(d.day===void 0)
throw new RangeError(`Missing day converting ${JSON.stringify(t)}`);return r.set(o,d),["constrain","reject"].forEach(f=>{
let h=JSON.stringify({func:"calendarToIsoDate",year:d.year,month:d.month,day:d.day,overflow:f,id:this.id});r.set(h,t)}),
d}validateCalendarDate(t){let{month:r,year:n,day:a,eraYear:i,monthCode:o,monthExtra:s}=t;if(s!==void 0)throw new RangeError(
"Unexpected `monthExtra` value");if(n===void 0&&i===void 0)throw new TypeError("year or eraYear is required");if(r===void 0&&
o===void 0)throw new TypeError("month or monthCode is required");if(a===void 0)throw new RangeError("Missing day");if(o!==
void 0){if(typeof o!="string")throw new RangeError("monthCode must be a string, not "+typeof o);if(!/^M([01]?\d)(L?)$/.test(
o))throw new RangeError(`Invalid monthCode: ${o}`)}if(this.hasEra&&t.era===void 0!=(t.eraYear===void 0))throw new TypeError(
"properties era and eraYear must be provided together")}adjustCalendarDate(t,r=void 0,n="constrain",a=!1){if(this.calendarType===
"lunisolar")throw new RangeError("Override required for lunisolar calendars");let i=t;this.validateCalendarDate(i);let o=this.
monthsInYear(i,r),{month:s,monthCode:l}=i;return{month:s,monthCode:l}=Yu(i,n,o),{...i,month:s,monthCode:l}}regulateMonthDayNaive(t,r,n){
let a=this.monthsInYear(t,n),{month:i,day:o}=t;return r==="reject"?(wt(i,1,a),wt(o,1,this.maximumMonthLength(t))):(i=Zt(
i,1,a),o=Zt(o,1,this.maximumMonthLength({...t,month:i}))),{...t,month:i,day:o}}calendarToIsoDate(t,r="constrain",n){let a=t,
i=this.adjustCalendarDate(t,n,r,!1);i=this.regulateMonthDayNaive(i,r,n);let{year:o,month:s,day:l}=i,c=JSON.stringify({func:"\
calendarToIsoDate",year:o,month:s,day:l,overflow:r,id:this.id}),u,d=n.get(c);if(d||a.year!==void 0&&a.month!==void 0&&a.
day!==void 0&&(a.year!==i.year||a.month!==i.month||a.day!==i.day)&&(u=JSON.stringify({func:"calendarToIsoDate",year:a.year,
month:a.month,day:a.day,overflow:r,id:this.id}),d=n.get(u),d))return d;let f=this.estimateIsoDate({year:o,month:s,day:l}),
h=E=>{let x=this.addDaysIso(f,E);if(i.day>this.minimumMonthLength(i)){let I=this.isoToCalendarDate(x,n);for(;I.month!==s||
I.year!==o;){if(r==="reject")throw new RangeError(`day ${l} does not exist in month ${s} of year ${o}`);x=this.addDaysIso(
x,-1),I=this.isoToCalendarDate(x,n)}}return x},v=0,b=this.isoToCalendarDate(f,n),T=Kc(i,b);if(T.years!==0||T.months!==0||
T.days!==0){let E=365*T.years+30*T.months+T.days;f=this.addDaysIso(f,E),b=this.isoToCalendarDate(f,n),T=Kc(i,b),T.years===
0&&T.months===0?f=h(T.days):v=this.compareCalendarDates(i,b)}let S=8;for(;v;){f=this.addDaysIso(f,v*S);let E=b;b=this.isoToCalendarDate(
f,n);let x=v;if(v=this.compareCalendarDates(i,b),v){if(T=Kc(i,b),T.years===0&&T.months===0)f=h(T.days),v=0;else if(x&&v!==
x)if(S>1)S/=2;else{if(r==="reject")throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({...a})}`);
this.compareCalendarDates(b,E)>0&&(f=this.addDaysIso(f,-1)),v=0}}}if(n.set(c,f),u&&n.set(u,f),i.year===void 0||i.month===
void 0||i.day===void 0||i.monthCode===void 0||this.hasEra&&(i.era===void 0||i.eraYear===void 0))throw new RangeError("Un\
expected missing property");return f}compareCalendarDates(t,r){return t.year!==r.year?cr(t.year-r.year):t.month!==r.month?
cr(t.month-r.month):t.day!==r.day?cr(t.day-r.day):0}regulateDate(t,r="constrain",n){let a=this.calendarToIsoDate(t,r,n);
return this.isoToCalendarDate(a,n)}addDaysIso(t,r){return dr(t.year,t.month,t.day+r)}addDaysCalendar(t,r,n){let a=this.calendarToIsoDate(
t,"constrain",n),i=this.addDaysIso(a,r);return this.isoToCalendarDate(i,n)}addMonthsCalendar(t,r,n,a){let i=t,{day:o}=i;
for(let s=0,l=Math.abs(r);s<l;s++){let{month:c}=i,u=i,d=r<0?-Math.max(o,this.daysInPreviousMonth(i,a)):this.daysInMonth(
i,a),f=this.calendarToIsoDate(i,"constrain",a),h=this.addDaysIso(f,d);if(i=this.isoToCalendarDate(h,a),r>0){let v=this.monthsInYear(
u,a);for(;i.month-1!=c%v;)h=this.addDaysIso(h,-1),i=this.isoToCalendarDate(h,a)}i.day!==o&&(i=this.regulateDate({...i,day:o},
"constrain",a))}if(n==="reject"&&i.day!==o)throw new RangeError(`Day ${o} does not exist in resulting calendar month`);return i}addCalendar(t,{
years:r=0,months:n=0,weeks:a=0,days:i=0},o,s){let{year:l,day:c,monthCode:u}=t,d=this.adjustCalendarDate({year:l+r,monthCode:u,
day:c},s),f=this.addMonthsCalendar(d,n,o,s),h=i+7*a;return this.addDaysCalendar(f,h,s)}untilCalendar(t,r,n,a){let i=0,o=0,
s=0,l=0;switch(n){case"day":i=this.calendarDaysUntil(t,r,a);break;case"week":{let c=this.calendarDaysUntil(t,r,a);i=c%7,
o=(c-i)/7;break}case"month":case"year":{let c=this.compareCalendarDates(r,t);if(!c)return{years:0,months:0,weeks:0,days:0};
let u=r.year-t.year,d=r.day-t.day;if(n==="year"&&u){let v=0;r.monthCode>t.monthCode&&(v=1),r.monthCode<t.monthCode&&(v=-1),
v||(v=Math.sign(d)),l=v*c<0?u-c:u}let f,h=l?this.addCalendar(t,{years:l},"constrain",a):t;do s+=c,f=h,h=this.addMonthsCalendar(
f,c,"constrain",a),h.day!==t.day&&(h=this.regulateDate({...h,day:t.day},"constrain",a));while(this.compareCalendarDates(
r,h)*c>=0);s-=c,i=this.calendarDaysUntil(f,r,a);break}}return{years:l,months:s,weeks:o,days:i}}daysInMonth(t,r){let{day:n}=t,
a=this.maximumMonthLength(t),i=this.minimumMonthLength(t);if(i===a)return i;let o=n<=a-i?a:i,s=this.calendarToIsoDate(t,
"constrain",r),l=this.addDaysIso(s,o),c=this.isoToCalendarDate(l,r),u=this.addDaysIso(l,-c.day);return this.isoToCalendarDate(
u,r).day}daysInPreviousMonth(t,r){let{day:n,month:a,year:i}=t,o={year:a>1?i:i-1,month:a,day:1},s=a>1?a-1:this.monthsInYear(
o,r);o={...o,month:s};let l=this.minimumMonthLength(o),c=this.maximumMonthLength(o);if(l===c)return c;let u=this.calendarToIsoDate(
t,"constrain",r),d=this.addDaysIso(u,-n);return this.isoToCalendarDate(d,r).day}startOfCalendarYear(t){return{year:t.year,
month:1,monthCode:"M01",day:1}}startOfCalendarMonth(t){return{year:t.year,month:t.month,day:1}}calendarDaysUntil(t,r,n){
let a=this.calendarToIsoDate(t,"constrain",n),i=this.calendarToIsoDate(r,"constrain",n);return ba(i.year,i.month-1,i.day)-
ba(a.year,a.month-1,a.day)}monthDaySearchStartYear(t,r){return 1972}monthDayFromFields(t,r,n){let a,i,o,s,l,{era:c,eraYear:u,
year:d,month:f,monthCode:h,day:v}=t;if(f!==void 0&&d===void 0&&(!this.hasEra||c===void 0||u===void 0))throw new TypeError(
"when month is present, year (or era and eraYear) are required");(h===void 0||d!==void 0||this.hasEra&&u!==void 0)&&({monthCode:h,
day:v}=this.isoToCalendarDate(this.calendarToIsoDate(t,r,n),n));let b={year:this.monthDaySearchStartYear(h,v),month:12,day:31},
T=this.isoToCalendarDate(b,n),S=T.monthCode>h||T.monthCode===h&&T.day>=v?T.year:T.year-1;for(let E=0;E<20;E++){let x=this.
adjustCalendarDate({day:v,monthCode:h,year:S-E},n),I=this.calendarToIsoDate(x,"constrain",n),D=this.isoToCalendarDate(I,
n);if({year:a,month:i,day:o}=I,D.monthCode===h&&D.day===v)return{month:i,day:o,year:a};if(r==="constrain"){let H=this.maxLengthOfMonthCodeInAnyYear(
D.monthCode);if(D.monthCode===h&&D.day===H&&v>H)return{month:i,day:o,year:a};(s===void 0||D.monthCode===s.monthCode&&D.day>
s.day)&&(s=D,l=I)}}if(r==="constrain"&&l!==void 0)return l;throw new RangeError(`No recent ${this.id} year with monthCod\
e ${h} and day ${v}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}},gu=class extends $n{constructor(){super(...arguments),
this.id="hebrew",this.calendarType="lunisolar",this.months={Tishri:{leap:1,regular:1,monthCode:"M01",days:30},Heshvan:{leap:2,
regular:2,monthCode:"M02",days:{min:29,max:30}},Kislev:{leap:3,regular:3,monthCode:"M03",days:{min:29,max:30}},Tevet:{leap:4,
regular:4,monthCode:"M04",days:29},Shevat:{leap:5,regular:5,monthCode:"M05",days:30},Adar:{leap:void 0,regular:6,monthCode:"\
M06",days:29},"Adar I":{leap:6,regular:void 0,monthCode:"M05L",days:30},"Adar II":{leap:7,regular:void 0,monthCode:"M06",
days:29},Nisan:{leap:8,regular:7,monthCode:"M07",days:30},Iyar:{leap:9,regular:8,monthCode:"M08",days:29},Sivan:{leap:10,
regular:9,monthCode:"M09",days:30},Tamuz:{leap:11,regular:10,monthCode:"M10",days:29},Av:{leap:12,regular:11,monthCode:"\
M11",days:30},Elul:{leap:13,regular:12,monthCode:"M12",days:29}}}inLeapYear(t){let{year:r}=t;return(7*r+1)%19<7}monthsInYear(t){
return this.inLeapYear(t)?13:12}minimumMonthLength(t){return this.minMaxMonthLength(t,"min")}maximumMonthLength(t){return this.
minMaxMonthLength(t,"max")}minMaxMonthLength(t,r){let{month:n,year:a}=t,i=this.getMonthCode(a,n),o=Object.entries(this.months).
find(l=>l[1].monthCode===i);if(o===void 0)throw new RangeError(`unmatched Hebrew month: ${n}`);let s=o[1].days;return typeof s==
"number"?s:s[r]}maxLengthOfMonthCodeInAnyYear(t){return["M04","M06","M08","M10","M12"].includes(t)?29:30}estimateIsoDate(t){
let{year:r}=t;return{year:r-3760,month:1,day:1}}getMonthCode(t,r){return this.inLeapYear({year:t})?r===6?rn(5,!0):rn(r<6?
r:r-1):rn(r)}adjustCalendarDate(t,r,n="constrain",a=!1){let{year:i,month:o,monthCode:s,day:l,monthExtra:c}=t;if(i===void 0)
throw new TypeError("Missing property: year");if(a){if(c){let u=this.months[c];if(!u)throw new RangeError(`Unrecognized \
month from formatToParts: ${c}`);o=this.inLeapYear({year:i})?u.leap:u.regular}return s=this.getMonthCode(i,o),{year:i,month:o,
day:l,monthCode:s}}if(this.validateCalendarDate(t),o===void 0)if(s.endsWith("L")){if(s!=="M05L")throw new RangeError(`He\
brew leap month must have monthCode M05L, not ${s}`);if(o=6,!this.inLeapYear({year:i})){if(n==="reject")throw new RangeError(
`Hebrew monthCode M05L is invalid in year ${i} which is not a leap year`);o=6,s="M06"}}else{o=Ta(s),this.inLeapYear({year:i})&&
o>=6&&o++;let u=this.monthsInYear({year:i});if(o<1||o>u)throw new RangeError(`Invalid monthCode: ${s}`)}else if(n==="rej\
ect"?(wt(o,1,this.monthsInYear({year:i})),wt(l,1,this.maximumMonthLength({year:i,month:o}))):(o=Zt(o,1,this.monthsInYear(
{year:i})),l=Zt(l,1,this.maximumMonthLength({year:i,month:o}))),s===void 0)s=this.getMonthCode(i,o);else if(this.getMonthCode(
i,o)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${o} in Hebrew year ${i}`);return{...t,day:l,month:o,
monthCode:s,year:i}}},Gn=class extends $n{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=
354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(t,r){let n={year:t.year,month:1,monthCode:"M01",day:1},a={year:t.year+
1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(n,a,r)===355}monthsInYear(){return 12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(
t);return{year:Math.floor(r*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}},yu=class extends Gn{constructor(){
super(...arguments),this.id="islamic"}},vu=class extends Gn{constructor(){super(...arguments),this.id="islamic-umalqura"}},
bu=class extends Gn{constructor(){super(...arguments),this.id="islamic-tbla"}},wu=class extends Gn{constructor(){super(...arguments),
this.id="islamic-civil"}},Tu=class extends Gn{constructor(){super(...arguments),this.id="islamic-rgsa"}},ku=class extends Gn{constructor(){
super(...arguments),this.id="islamicc"}},Su=class extends $n{constructor(){super(...arguments),this.id="persian",this.calendarType=
"solar"}inLeapYear(t,r){return this.daysInMonth({year:t.year,month:12,day:1},r)===30}monthsInYear(){return 12}minimumMonthLength(t){
let{month:r}=t;return r===12?29:r<=6?31:30}maximumMonthLength(t){let{month:r}=t;return r===12?30:r<=6?31:30}maxLengthOfMonthCodeInAnyYear(t){
return Ta(t)<=6?31:30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(t);return{year:r+621,month:1,day:1}}},Eu=class extends $n{constructor(){
super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,
month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,
day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},
10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.
vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 S\
aka"}inLeapYear(t){return zu(t.year+78)}monthsInYear(){return 12}minimumMonthLength(t){return this.getMonthInfo(t).length}maximumMonthLength(t){
return this.getMonthInfo(t).length}maxLengthOfMonthCodeInAnyYear(t){let r=Ta(t),n=this.months[r];return n=n.leap??n,n.length}getMonthInfo(t){
let{month:r}=t,n=this.months[r];if(n===void 0)throw new RangeError(`Invalid month: ${r}`);return this.inLeapYear(t)&&n.leap&&
(n=n.leap),n}estimateIsoDate(t){let r=this.adjustCalendarDate(t),n=this.getMonthInfo(r);return dr(r.year+78+(n.nextYear?
1:0),n.month,n.day+r.day-1)}checkIcuBugs(t){if(this.vulnerableToBceBug&&t.year<1)throw new RangeError(`calendar '${this.
id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}};function zu(e){
return e%4==0&&(e%100!=0||e%400==0)}var zs=class extends $n{constructor(t,r){super(),this.calendarType="solar",this.id=t,
this.isoEpoch=r}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return zu(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Ta(t)-1]}estimateIsoDate(t){
let r=this.adjustCalendarDate(t);return to(r.year+this.isoEpoch.year,r.month+this.isoEpoch.month,r.day+this.isoEpoch.day,
"constrain")}},Ks=class extends $n{constructor(t,r){super(),this.hasEra=!0,this.calendarType="solar",this.id=t;let{eras:n,
anchorEra:a}=function(i){let o,s=i;if(s.length===0)throw new RangeError("Invalid era data: eras are required");if(s.length===
1&&s[0].reverseOf)throw new RangeError("Invalid era data: anchor era cannot count years backwards");if(s.length===1&&!s[0].
code)throw new RangeError("Invalid era data: at least one named era is required");if(s.filter(c=>c.reverseOf!=null).length>
1)throw new RangeError("Invalid era data: only one era can count years backwards");s.forEach(c=>{if(c.isAnchor||!c.anchorEpoch&&
!c.reverseOf){if(o)throw new RangeError("Invalid era data: cannot have multiple anchor eras");o=c,c.anchorEpoch={year:c.
hasYearZero?0:1}}else if(!c.code)throw new RangeError("If era name is blank, it must be the anchor era")}),s=s.filter(c=>c.
code),s.forEach(c=>{let{reverseOf:u}=c;if(u){let d=s.find(f=>f.code===u);if(d===void 0)throw new RangeError(`Invalid era\
 data: unmatched reverseOf era: ${u}`);c.reverseOf=d,c.anchorEpoch=d.anchorEpoch,c.isoEpoch=d.isoEpoch}c.anchorEpoch.month===
void 0&&(c.anchorEpoch.month=1),c.anchorEpoch.day===void 0&&(c.anchorEpoch.day=1)}),s.sort((c,u)=>{if(c.reverseOf)return 1;
if(u.reverseOf)return-1;if(!c.isoEpoch||!u.isoEpoch)throw new RangeError("Invalid era data: missing ISO epoch");return u.
isoEpoch.year-c.isoEpoch.year});let l=s[s.length-1].reverseOf;if(l&&l!==s[s.length-2])throw new RangeError("Invalid era \
data: invalid reverse-sign era");return s.forEach((c,u)=>{c.genericName="era"+(s.length-1-u)}),{eras:s,anchorEra:o||s[0]}}(
r);this.anchorEra=a,this.eras=n}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return zu(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Ta(t)-1]}completeEraYear(t){
let r=(s,l,c)=>{let u=t[s];if(u!=null&&u!=l&&!(c||[]).includes(u)){let d=c?.[0];throw new RangeError(`Input ${s} ${u} do\
esn't match calculated value ${d?`${l} (also called ${d})`:l}`)}},n=s=>{let l,c={...t,year:s},u=this.eras.find((d,f)=>{if(f===
this.eras.length-1){if(d.reverseOf){if(s>0)throw new RangeError(`Signed year ${s} is invalid for era ${d.code}`);return l=
d.anchorEpoch.year-s,!0}return l=s-d.anchorEpoch.year+(d.hasYearZero?0:1),!0}return this.compareCalendarDates(c,d.anchorEpoch)>=
0&&(l=s-d.anchorEpoch.year+(d.hasYearZero?0:1),!0)});if(!u)throw new RangeError(`Year ${s} was not matched by any era`);
return{eraYear:l,era:u.code,eraNames:u.names}},{year:a,eraYear:i,era:o}=t;if(a!=null){let s=n(a);({eraYear:i,era:o}=s),r(
"era",o,s?.eraNames),r("eraYear",i)}else{if(i==null)throw new RangeError("Either year or eraYear and era are required");
{if(o===void 0)throw new RangeError("era and eraYear must be provided together");let s=this.eras.find(({code:l,names:c=[]})=>l===
o||c.includes(o));if(!s)throw new RangeError(`Era ${o} (ISO year ${i}) was not matched by any era`);a=s.reverseOf?s.anchorEpoch.
year-i:i+s.anchorEpoch.year-(s.hasYearZero?0:1),r("year",a),{eraYear:i,era:o}=n(a)}}return{...t,year:a,eraYear:i,era:o}}adjustCalendarDate(t,r,n="\
constrain"){let a=t,{month:i,monthCode:o}=a;return i===void 0&&(a={...a,month:Ta(o)}),this.validateCalendarDate(a),a=this.
completeEraYear(a),super.adjustCalendarDate(a,r,n)}estimateIsoDate(t){let r=this.adjustCalendarDate(t),{year:n,month:a,day:i}=r,
{anchorEra:o}=this;return to(n+o.isoEpoch.year-(o.hasYearZero?0:1),a,i,"constrain")}},fo=class extends Ks{constructor(t,r){
super(t,r)}isoToCalendarDate(t){let{year:r,month:n,day:a}=t,i=rn(n),o=r-this.anchorEra.isoEpoch.year+1;return this.completeEraYear(
{year:o,month:n,monthCode:i,day:a})}},en={inLeapYear(e){let{year:t}=e;return(t+1)%4==0},monthsInYear:()=>13,minimumMonthLength(e){
let{month:t}=e;return t===13?this.inLeapYear(e)?6:5:30},maximumMonthLength(e){return this.minimumMonthLength(e)},maxLengthOfMonthCodeInAnyYear:e=>e===
"M13"?6:30},_u=class extends zs{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=en.monthsInYear,
this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},Gs=class extends Ks{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=
en.monthsInYear,this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},xu=class extends _u{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}},Au=class extends Gs{constructor(){
super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}},$u=class extends Gs{constructor(){
super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"eth\
iopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}},Ru=class extends fo{constructor(){super(
"roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"\
roc"}])}},Ou=class extends zs{constructor(){super("buddhist",{year:-543,month:1,day:1})}},Iu=class extends fo{constructor(){
super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be",
"bce"],reverseOf:"gregory"}])}reviseIntlEra(t){let{era:r,eraYear:n}=t;return r==="b"&&(r="gregory-inverse"),r==="a"&&(r=
"gregory"),{era:r,eraYear:n}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}},Cu=class extends fo{constructor(){
super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",
isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},
anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,
day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:[
"japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gre\
gory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(t,r){let{era:n,eraYear:a}=t,{year:i}=r;
return this.eras.find(o=>o.code===n)?{era:n,eraYear:a}:i<1?{era:"japanese-inverse",eraYear:1-i}:{era:"japanese",eraYear:i}}},
Js=class extends $n{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(t,r){let n=this.getMonthList(
t.year,r);return Object.entries(n).length===13}monthsInYear(t,r){return this.inLeapYear(t,r)?13:12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(t){return["M01L","M09L","M10L","M11L","M12L"].includes(
t)?29:30}monthDaySearchStartYear(t,r){let n={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,
1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[t]??
[1972,1972];return r<30?n[0]:n[1]}getMonthList(t,r){if(t===void 0)throw new TypeError("Missing year");let n=JSON.stringify(
{func:"getMonthList",calendarYear:t,id:this.id}),a=r.get(n);if(a)return a;let i=this.getFormatter(),o=(T,S)=>{let E=Jm({
isoYear:T,isoMonth:2,isoDay:1}),x=new Date(E);x.setUTCDate(S+1);let I=i.formatToParts(x),D=I.find(L=>L.type==="month").value,
H=+I.find(L=>L.type==="day").value,K=I.find(L=>L.type==="relatedYear"),J;if(K===void 0)throw new RangeError(`Intl.DateTi\
meFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return J=+K.value,{calendarMonthString:D,
calendarDay:H,calendarYearToVerify:J}},s=17,{calendarMonthString:l,calendarDay:c,calendarYearToVerify:u}=o(t,s);l!=="1"&&
(s+=29,{calendarMonthString:l,calendarDay:c}=o(t,s)),s-=c-5;let d={},f,h,v=1,b=!1;do({calendarMonthString:l,calendarDay:c,
calendarYearToVerify:u}=o(t,s)),f&&(d[h].daysInMonth=f+30-c),u!==t?b=!0:(d[l]={monthIndex:v++},s+=30),f=c,h=l;while(!b);
return d[h].daysInMonth=f+30-c,r.set(n,d),d}estimateIsoDate(t){let{year:r,month:n}=t;return{year:r,month:n>=12?12:n+1,day:1}}adjustCalendarDate(t,r,n="\
constrain",a=!1){let{year:i,month:o,monthExtra:s,day:l,monthCode:c}=t;if(i===void 0)throw new TypeError("Missing propert\
y: year");if(a){if(s&&s!=="bis")throw new RangeError(`Unexpected leap month suffix: ${s}`);let u=rn(o,s!==void 0),d=`${o}${s||
""}`,f=this.getMonthList(i,r)[d];if(f===void 0)throw new RangeError(`Unmatched month ${d} in Chinese year ${i}`);return o=
f.monthIndex,{year:i,month:o,day:l,monthCode:u}}if(this.validateCalendarDate(t),o===void 0){let u=this.getMonthList(i,r),
d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="0"&&(d=d.slice(1));let f=u[d];if(o=f&&f.monthIndex,o===void 0&&c.endsWith(
"L")&&c!="M13L"&&n==="constrain"){let h=+c.replace(/^M0?|L$/g,"");f=u[h],f&&(o=f.monthIndex,c=rn(h))}if(o===void 0)throw new RangeError(
`Unmatched month ${c} in Chinese year ${i}`)}else if(c===void 0){let u=this.getMonthList(i,r),d=Object.entries(u),f=d.length;
n==="reject"?(wt(o,1,f),wt(l,1,this.maximumMonthLength())):(o=Zt(o,1,f),l=Zt(l,1,this.maximumMonthLength()));let h=d.find(
v=>v[1].monthIndex===o);if(h===void 0)throw new RangeError(`Invalid month ${o} in Chinese year ${i}`);c=rn(+h[0].replace(
"bis",""),h[0].indexOf("bis")!==-1)}else{let u=this.getMonthList(i,r),d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="\
0"&&(d=d.slice(1));let f=u[d];if(!f)throw new RangeError(`Unmatched monthCode ${c} in Chinese year ${i}`);if(o!==f.monthIndex)
throw new RangeError(`monthCode ${c} doesn't correspond to month ${o} in Chinese year ${i}`)}return{...t,year:i,month:o,
monthCode:c,day:l}}},Nu=class extends Js{constructor(){super(...arguments),this.id="chinese"}},Pu=class extends Js{constructor(){
super(...arguments),this.id="dangi"}},Mu=class{constructor(t){this.helper=t}extraFields(t){return this.helper.hasEra&&t.
includes("year")?["era","eraYear"]:[]}resolveFields(t){if(this.helper.calendarType!=="lunisolar"){let r=new vr;Yu(t,void 0,
this.helper.monthsInYear({year:t.year??1972},r))}}dateToISO(t,r){let n=new vr,a=this.helper.calendarToIsoDate(t,r,n);return n.
setObject(a),a}monthDayToISOReferenceDate(t,r){let n=new vr,a=this.helper.monthDayFromFields(t,r,n);return n.setObject(a),
a}fieldKeysToIgnore(t){let r=new Set;for(let n=0;n<t.length;n++){let a=t[n];switch(r.add(a),a){case"era":r.add("eraYear"),
r.add("year");break;case"eraYear":r.add("era"),r.add("year");break;case"year":r.add("era"),r.add("eraYear");break;case"m\
onth":r.add("monthCode"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"monthCode":r.add("mont\
h"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"day":this.helper.erasBeginMidYear&&(r.add("\
era"),r.add("eraYear"))}}return Km(r)}dateAdd(t,{years:r,months:n,weeks:a,days:i},o){let s=vr.getCacheForObject(t),l=this.
helper.isoToCalendarDate(t,s),c=this.helper.addCalendar(l,{years:r,months:n,weeks:a,days:i},o,s),u=this.helper.calendarToIsoDate(
c,"constrain",s);return vr.getCacheForObject(u)||new vr(s).setObject(u),u}dateUntil(t,r,n){let a=vr.getCacheForObject(t),
i=vr.getCacheForObject(r),o=this.helper.isoToCalendarDate(t,a),s=this.helper.isoToCalendarDate(r,i);return this.helper.untilCalendar(
o,s,n,a)}isoToDate(t,r){let n=vr.getCacheForObject(t),a=this.helper.isoToCalendarDate(t,n);if(r.dayOfWeek&&(a.dayOfWeek=
Mo.iso8601.isoToDate(t,{dayOfWeek:!0}).dayOfWeek),r.dayOfYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.calendarDaysUntil(
i,a,n);a.dayOfYear=o+1}if(r.weekOfYear&&(a.weekOfYear=Gm(this.helper.id,t)),a.daysInWeek=7,r.daysInMonth&&(a.daysInMonth=
this.helper.daysInMonth(a,n)),r.daysInYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.addCalendar(i,{years:1},
"constrain",n);a.daysInYear=this.helper.calendarDaysUntil(i,o,n)}return r.monthsInYear&&(a.monthsInYear=this.helper.monthsInYear(
a,n)),r.inLeapYear&&(a.inLeapYear=this.helper.inLeapYear(a,n)),a}getFirstDayOfWeek(){return this.helper.getFirstDayOfWeek()}getMinimalDaysInFirstWeek(){
return this.helper.getMinimalDaysInFirstWeek()}};for(let e of[gu,Su,$u,xu,Au,Nu,Pu,Ru,Eu,Ou,Iu,Cu,yu,vu,bu,wu,Tu,ku]){let t=new e;
Mo[t.id]=new Mu(t)}tu("calendarImpl",function(e){return Mo[e]});var ho=Intl.DateTimeFormat;function Ua(e,t){let r=g(e,t);
return typeof r=="function"&&(r=new ho(g(e,dm),r(g(e,Zc))),function(n,a,i){let o=Xs(n);if(o===void 0)throw new TypeError(
"Missing slots for the given container");if(o[a]===void 0)throw new TypeError(`tried to reset ${a} which was not set`);o[a]=
i}(e,t,r)),r}function Wi(e){return tr(e,Sa)}var ka=class{constructor(t=void 0,r=void 0){(function(n,a,i){let o=i!==void 0,
s;if(o){let d=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","mont\
h","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeS\
tyle"];s=function(h){if(h==null)throw new TypeError(`Expected object not ${h}`);return Object(h)}(i);let f=Object.create(
null);for(let h=0;h<d.length;h++){let v=d[h];Object.prototype.hasOwnProperty.call(s,v)&&(f[v]=s[v])}s=f}else s=Object.create(
null);let l=new ho(a,s),c=l.resolvedOptions();if(Rn(n),o){let d=Object.assign(Object.create(null),c);for(let f in d)Object.
prototype.hasOwnProperty.call(s,f)||delete d[f];d.hour12=s.hour12,d.hourCycle=s.hourCycle,fe(n,Zc,d)}else fe(n,Zc,s);fe(
n,dm,c.locale),fe(n,Sa,l),fe(n,Ha,c.timeZone),fe(n,Vi,c.calendar),fe(n,im,uS),fe(n,om,lS),fe(n,sm,cS),fe(n,lm,sS),fe(n,cm,
dS),fe(n,um,pS);let u=o?s.timeZone:void 0;if(u===void 0)fe(n,Jc,c.timeZone);else{let d=rl(u);if(d.startsWith("\u2212"))throw new RangeError(
"Unicode minus (U+2212) is not supported in time zone offsets");fe(n,Jc,Qt(d))}})(this,t,r)}get format(){O(this,Wi);let t=nS.
bind(this);return Object.defineProperties(t,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,
writable:!1,configurable:!0}}),t}formatRange(t,r){return O(this,Wi),iS.call(this,t,r)}formatToParts(t,...r){return O(this,
Wi),aS.call(this,t,...r)}formatRangeToParts(t,r){return O(this,Wi),oS.call(this,t,r)}resolvedOptions(){return O(this,Wi),
rS.call(this)}};"formatToParts"in ho.prototype||delete ka.prototype.formatToParts,"formatRangeToParts"in ho.prototype||delete ka.
prototype.formatRangeToParts;var Tr=function(e=void 0,t=void 0){return new ka(e,t)};function rS(){let e=g(this,Sa).resolvedOptions();
return e.timeZone=g(this,Jc),e}function nS(e,...t){let r,n,a=ei(e,this);return a.formatter?(r=a.formatter,n=[jr(a.epochNs,
"floor")]):(r=g(this,Sa),n=[e,...t]),r.format(...n)}function aS(e,...t){let r,n,a=ei(e,this);return a.formatter?(r=a.formatter,
n=[jr(a.epochNs,"floor")]):(r=g(this,Sa),n=[e,...t]),r.formatToParts(...n)}function iS(e,t){if(e===void 0||t===void 0)throw new TypeError(
"Intl.DateTimeFormat.formatRange requires two values");let r=Zs(e),n=Zs(t),a,i=[r,n];if(xn(r)!==xn(n))throw new TypeError(
"Intl.DateTimeFormat.formatRange accepts two values of the same type");if(xn(r)){if(!Zm(r,n))throw new TypeError("Intl.D\
ateTimeFormat.formatRange accepts two values of the same type");let{epochNs:o,formatter:s}=ei(r,this),{epochNs:l,formatter:c}=ei(
n,this);s&&(a=s,i=[jr(o,"floor"),jr(l,"floor")])}return a||(a=g(this,Sa)),a.formatRange(...i)}function oS(e,t){if(e===void 0||
t===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");let r=Zs(e),n=Zs(t),a,i=[r,n];if(xn(
r)!==xn(n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if(xn(r)){if(!Zm(
r,n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");let{epochNs:o,formatter:s}=ei(
r,this),{epochNs:l,formatter:c}=ei(n,this);s&&(a=s,i=[jr(o,"floor"),jr(l,"floor")])}return a||(a=g(this,Sa)),a.formatRangeToParts(
...i)}function Do(e={},t={}){let r=Object.assign({},e),n=["year","month","day","hour","minute","second","weekday","dayPe\
riod","timeZoneName","dateStyle","timeStyle"];for(let a=0;a<n.length;a++){let i=n[a];r[i]=i in t?t[i]:r[i],r[i]!==!1&&r[i]!==
void 0||delete r[i]}return r}function sS(e){let t=Do(e,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});
if(t.timeStyle!=="long"&&t.timeStyle!=="full"||(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"\
2-digit"})),!dl(t)){if(jo(e))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(e)}]`);Object.
assign(t,{hour:"numeric",minute:"numeric",second:"numeric"})}return t}function lS(e){let t={short:{year:"2-digit",month:"\
numeric"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},full:{year:"numeric",month:"long"}},r=Do(
e,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in r&&r.dateStyle){
let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("year"in r||"month"in r||"era"in r)){if(jo(e))throw new TypeError(
`cannot format PlainYearMonth with options [${Object.keys(e)}]`);Object.assign(r,{year:"numeric",month:"numeric"})}return r}
function cS(e){let t={short:{month:"numeric",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"\
numeric"},full:{month:"long",day:"numeric"}},r=Do(e,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if("dateStyle"in r&&r.dateStyle){let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("month"in
r)&&!("day"in r)){if(jo(e))throw new TypeError(`cannot format PlainMonthDay with options [${Object.keys(e)}]`);Object.assign(
r,{month:"numeric",day:"numeric"})}return r}function uS(e){let t=Do(e,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if(!ul(t)){if(jo(e))throw new TypeError(`cannot format PlainDate with options [${Object.keys(e)}]`);Object.
assign(t,{year:"numeric",month:"numeric",day:"numeric"})}return t}function dS(e){let t=Do(e,{timeZoneName:!1});if((t.timeStyle===
"long"||t.timeStyle==="full")&&(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"2-digit"}),t.
dateStyle)&&(Object.assign(t,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",
day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"\
long"}}[t.dateStyle]),delete t.dateStyle),!dl(t)&&!ul(t)){if(jo(e))throw new TypeError(`cannot format PlainDateTime with\
 options [${Object.keys(e)}]`);Object.assign(t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"nume\
ric",second:"numeric"})}return t}function pS(e){let t=e;return dl(t)||ul(t)||(t=Object.assign({},t,{year:"numeric",month:"\
numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function ul(e){return"year"in e||"month"in e||
"day"in e||"weekday"in e||"dateStyle"in e||"era"in e}function dl(e){return"hour"in e||"minute"in e||"second"in e||"timeS\
tyle"in e||"dayPeriod"in e||"fractionalSecondDigits"in e}function jo(e){return ul(e)||dl(e)||"dateStyle"in e||"timeStyle"in
e||"timeZoneName"in e}function xn(e){return Ze(e)||at(e)||qe(e)||ye(e)||Et(e)||br(e)||St(e)}function Zs(e){return xn(e)?
e:tl(e)}function Zm(e,t){return!(!xn(e)||!xn(t)||at(e)&&!at(t)||Ze(e)&&!Ze(t)||qe(e)&&!qe(t)||ye(e)&&!ye(t)||Et(e)&&!Et(
t)||br(e)&&!br(t)||St(e)&&!St(t))}function ei(e,t){if(at(e)){let r={isoDate:{year:1970,month:1,day:1},time:g(e,Xe)};return{
epochNs:Nt(g(t,Ha),r,"compatible"),formatter:Ua(t,lm)}}if(Et(e)){let r=g(e,P),n=g(t,Vi);if(r!==n)throw new RangeError(`c\
annot format PlainYearMonth with calendar ${r} in locale with calendar ${n}`);let a=xe(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Nt(g(t,Ha),a,"compatible"),formatter:Ua(t,om)}}if(br(
e)){let r=g(e,P),n=g(t,Vi);if(r!==n)throw new RangeError(`cannot format PlainMonthDay with calendar ${r} in locale with \
calendar ${n}`);let a=xe(g(e,ne),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{
epochNs:Nt(g(t,Ha),a,"compatible"),formatter:Ua(t,sm)}}if(Ze(e)){let r=g(e,P),n=g(t,Vi);if(r!=="iso8601"&&r!==n)throw new RangeError(
`cannot format PlainDate with calendar ${r} in locale with calendar ${n}`);let a=xe(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Nt(g(t,Ha),a,"compatible"),formatter:Ua(t,im)}}if(qe(
e)){let r=g(e,P),n=g(t,Vi);if(r!=="iso8601"&&r!==n)throw new RangeError(`cannot format PlainDateTime with calendar ${r} \
in locale with calendar ${n}`);let a=g(e,Ye);return{epochNs:Nt(g(t,Ha),a,"compatible"),formatter:Ua(t,cm)}}if(ye(e))throw new TypeError(
"Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return St(e)?{epochNs:g(
e,re),formatter:Ua(t,um)}:{}}function Xm(e){let t=Object.create(null);return t.years=g(e,Wt),t.months=g(e,qt),t.weeks=g(
e,sr),t.days=g(e,Vt),t.hours=g(e,Yt),t.minutes=g(e,zt),t.seconds=g(e,Kt),t.milliseconds=g(e,Gt),t.microseconds=g(e,Jt),t.
nanoseconds=g(e,lr),t}ka.prototype.constructor=Tr,Object.defineProperty(Tr,"prototype",{value:ka.prototype,writable:!1,enumerable:!1,
configurable:!1}),Tr.supportedLocalesOf=ho.supportedLocalesOf,On(Tr,"Intl.DateTimeFormat");var{format:fS,formatToParts:hS}=Intl.
DurationFormat?.prototype??Object.create(null);function Ku(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=Xm(
Mr(e));return fS.call(this,t)}Intl.DurationFormat?.prototype&&(Intl.DurationFormat.prototype.format=Ku,Intl.DurationFormat.
prototype.formatToParts=function(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=Xm(Mr(e));return hS.call(
this,t)});var jM=Object.freeze({__proto__:null,DateTimeFormat:Tr,ModifiedIntlDurationFormatPrototypeFormat:Ku}),mo=class{constructor(t){
if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");Om(this,Ys(t))}get epochMilliseconds(){
return O(this,St),jr(g(this,re),"floor")}get epochNanoseconds(){return O(this,St),Ym($.default.BigInt(g(this,re)))}add(t){
return O(this,St),Yh("add",this,t)}subtract(t){return O(this,St),Yh("subtract",this,t)}until(t,r=void 0){return O(this,St),
Uh("until",this,t,r)}since(t,r=void 0){return O(this,St),Uh("since",this,t,r)}round(t){if(O(this,St),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?wa("smallestUnit",t):z(t),n=ri(r),a=Kr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",An);return ni(n,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[i],
!0),Yr(du(g(this,re),n,i,a))}equals(t){O(this,St);let r=Ki(t),n=g(this,re),a=g(r,re);return $.default.equal($.default.BigInt(
n),$.default.BigInt(a))}toString(t=void 0){O(this,St);let r=z(t),n=Ao(r),a=Kr(r,"trunc"),i=ur(r,"smallestUnit","time",void 0);
if(i==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let o=r.timeZone;o!==void 0&&(o=
Qt(o));let{precision:s,unit:l,increment:c}=$o(i,n);return Oh(Yr(du(g(this,re),c,l,a)),o,s)}toJSON(){return O(this,St),Oh(
this,void 0,"auto")}toLocaleString(t=void 0,r=void 0){return O(this,St),new Tr(t,r).format(this)}valueOf(){Zn("Instant")}toZonedDateTimeISO(t){
O(this,St);let r=Qt(t);return It(g(this,re),r,"iso8601")}static fromEpochMilliseconds(t){return Yr(zr(tl(t)))}static fromEpochNanoseconds(t){
return Yr(Ys(t))}static from(t){return Ki(t)}static compare(t,r){let n=Ki(t),a=Ki(r),i=g(n,re),o=g(a,re);return $.default.
lessThan(i,o)?-1:$.default.greaterThan(i,o)?1:0}};On(mo,"Temporal.Instant");var go=class{constructor(t,r,n,a="iso8601"){
let i=ie(t),o=ie(r),s=ie(n),l=rr(a===void 0?"iso8601":mt(a));ya(i,o,s),_m(this,{year:i,month:o,day:s},l)}get calendarId(){
return O(this,Ze),g(this,P)}get era(){return Ft(this,"era")}get eraYear(){return Ft(this,"eraYear")}get year(){return Ft(
this,"year")}get month(){return Ft(this,"month")}get monthCode(){return Ft(this,"monthCode")}get day(){return Ft(this,"d\
ay")}get dayOfWeek(){return Ft(this,"dayOfWeek")}get dayOfYear(){return Ft(this,"dayOfYear")}get weekOfYear(){return Ft(
this,"weekOfYear")?.week}get yearOfWeek(){return Ft(this,"weekOfYear")?.year}get daysInWeek(){return Ft(this,"daysInWeek")}get daysInMonth(){
return Ft(this,"daysInMonth")}get daysInYear(){return Ft(this,"daysInYear")}get monthsInYear(){return Ft(this,"monthsInY\
ear")}get inLeapYear(){return Ft(this,"inLeapYear")}with(t,r=void 0){if(O(this,Ze),!Qe(t))throw new TypeError("invalid a\
rgument");ti(t);let n=g(this,P),a=er(n,g(this,ne));return a=ga(n,a,Er(n,t,["year","month","monthCode","day"],[],"partial")),
Xt(Kn(n,a,_e(z(r))),n)}withCalendar(t){O(this,Ze);let r=Co(t);return Xt(g(this,ne),r)}add(t,r=void 0){return O(this,Ze),
zh("add",this,t,r)}subtract(t,r=void 0){return O(this,Ze),zh("subtract",this,t,r)}until(t,r=void 0){return O(this,Ze),Fh(
"until",this,t,r)}since(t,r=void 0){return O(this,Ze),Fh("since",this,t,r)}equals(t){O(this,Ze);let r=Yi(t);return on(g(
this,ne),g(r,ne))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){return O(this,Ze),Ih(this,xo(z(t)))}toJSON(){return O(this,
Ze),Ih(this)}toLocaleString(t=void 0,r=void 0){return O(this,Ze),new Tr(t,r).format(this)}valueOf(){Zn("PlainDate")}toPlainDateTime(t=void 0){
O(this,Ze);let r=Em(t);return Nr(xe(g(this,ne),r),g(this,P))}toZonedDateTime(t){let r,n;if(O(this,Ze),Qe(t)){let o=t.timeZone;
o===void 0?r=Qt(t):(r=Qt(o),n=t.plainTime)}else r=Qt(t);let a=g(this,ne),i;return n===void 0?i=Bn(r,a):(n=Wn(n),i=Nt(r,xe(
a,g(n,Xe)),"compatible")),It(i,r,g(this,P))}toPlainYearMonth(){O(this,Ze);let t=g(this,P);return Ya(so(t,er(t,g(this,ne)),
"constrain"),t)}toPlainMonthDay(){O(this,Ze);let t=g(this,P);return Va(Bs(t,er(t,g(this,ne)),"constrain"),t)}static from(t,r=void 0){
return Yi(t,r)}static compare(t,r){let n=Yi(t),a=Yi(r);return on(g(n,ne),g(a,ne))}};function Ft(e,t){O(e,Ze);let r=g(e,ne);
return Ro(e).isoToDate(r,{[t]:!0})[t]}On(go,"Temporal.PlainDate");var yo=class{constructor(t,r,n,a=0,i=0,o=0,s=0,l=0,c=0,u="\
iso8601"){let d=ie(t),f=ie(r),h=ie(n),v=a===void 0?0:ie(a),b=i===void 0?0:ie(i),T=o===void 0?0:ie(o),S=s===void 0?0:ie(s),
E=l===void 0?0:ie(l),x=c===void 0?0:ie(c),I=rr(u===void 0?"iso8601":mt(u));Hu(d,f,h,v,b,T,S,E,x),xm(this,{isoDate:{year:d,
month:f,day:h},time:{hour:v,minute:b,second:T,millisecond:S,microsecond:E,nanosecond:x}},I)}get calendarId(){return O(this,
qe),g(this,P)}get year(){return Bt(this,"year")}get month(){return Bt(this,"month")}get monthCode(){return Bt(this,"mont\
hCode")}get day(){return Bt(this,"day")}get hour(){return Fa(this,"hour")}get minute(){return Fa(this,"minute")}get second(){
return Fa(this,"second")}get millisecond(){return Fa(this,"millisecond")}get microsecond(){return Fa(this,"microsecond")}get nanosecond(){
return Fa(this,"nanosecond")}get era(){return Bt(this,"era")}get eraYear(){return Bt(this,"eraYear")}get dayOfWeek(){return Bt(
this,"dayOfWeek")}get dayOfYear(){return Bt(this,"dayOfYear")}get weekOfYear(){return Bt(this,"weekOfYear")?.week}get yearOfWeek(){
return Bt(this,"weekOfYear")?.year}get daysInWeek(){return Bt(this,"daysInWeek")}get daysInYear(){return Bt(this,"daysIn\
Year")}get daysInMonth(){return Bt(this,"daysInMonth")}get monthsInYear(){return Bt(this,"monthsInYear")}get inLeapYear(){
return Bt(this,"inLeapYear")}with(t,r=void 0){if(O(this,qe),!Qe(t))throw new TypeError("invalid argument");ti(t);let n=g(
this,P),a=g(this,Ye),i={...er(n,a.isoDate),...a.time};return i=ga(n,i,Er(n,t,["year","month","monthCode","day"],["hour",
"minute","second","millisecond","microsecond","nanosecond"],"partial")),Nr(Oo(n,i,_e(z(r))),n)}withPlainTime(t=void 0){O(
this,qe);let r=Em(t);return Nr(xe(g(this,Ye).isoDate,r),g(this,P))}withCalendar(t){O(this,qe);let r=Co(t);return Nr(g(this,
Ye),r)}add(t,r=void 0){return O(this,qe),Kh("add",this,t,r)}subtract(t,r=void 0){return O(this,qe),Kh("subtract",this,t,
r)}until(t,r=void 0){return O(this,qe),Bh("until",this,t,r)}since(t,r=void 0){return O(this,qe),Bh("since",this,t,r)}round(t){
if(O(this,qe),t===void 0)throw new TypeError("options parameter is required");let r=typeof t=="string"?wa("smallestUnit",
t):z(t),n=ri(r),a=Kr(r,"halfExpand"),i=ur(r,"smallestUnit","time",An,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,
microsecond:1e3,nanosecond:1e3}[i];ni(n,o,o===1);let s=g(this,Ye);return Nr(n===1&&i==="nanosecond"?s:pu(s,n,i,a),g(this,
P))}equals(t){O(this,qe);let r=zi(t);return Qa(g(this,Ye),g(r,Ye))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){O(this,qe);
let r=z(t),n=xo(r),a=Ao(r),i=Kr(r,"trunc"),o=ur(r,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smal\
lestUnit must be a time unit other than "hour"');let{precision:s,unit:l,increment:c}=$o(o,a),u=pu(g(this,Ye),c,l,i);return va(
u),co(u,g(this,P),s,n)}toJSON(){return O(this,qe),co(g(this,Ye),g(this,P),"auto")}toLocaleString(t=void 0,r=void 0){return O(
this,qe),new Tr(t,r).format(this)}valueOf(){Zn("PlainDateTime")}toZonedDateTime(t,r=void 0){O(this,qe);let n=Qt(t),a=ro(
z(r));return It(Nt(n,g(this,Ye),a),n,g(this,P))}toPlainDate(){return O(this,qe),Xt(g(this,Ye).isoDate,g(this,P))}toPlainTime(){
return O(this,qe),Tn(g(this,Ye).time)}static from(t,r=void 0){return zi(t,r)}static compare(t,r){let n=zi(t),a=zi(r);return Qa(
g(n,Ye),g(a,Ye))}};function Bt(e,t){O(e,qe);let r=g(e,Ye).isoDate;return Ro(e).isoToDate(r,{[t]:!0})[t]}function Fa(e,t){
return O(e,qe),g(e,Ye).time[t]}On(yo,"Temporal.PlainDateTime");var vo=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0,s=0,l=0,c=0,u=0){
let d=t===void 0?0:Vr(t),f=r===void 0?0:Vr(r),h=n===void 0?0:Vr(n),v=a===void 0?0:Vr(a),b=i===void 0?0:Vr(i),T=o===void 0?
0:Vr(o),S=s===void 0?0:Vr(s),E=l===void 0?0:Vr(l),x=c===void 0?0:Vr(c),I=u===void 0?0:Vr(u);ll(d,f,h,v,b,T,S,E,x,I),Rn(this),
fe(this,Wt,d),fe(this,qt,f),fe(this,sr,h),fe(this,Vt,v),fe(this,Yt,b),fe(this,zt,T),fe(this,Kt,S),fe(this,Gt,E),fe(this,
Jt,x),fe(this,lr,I)}get years(){return O(this,Je),g(this,Wt)}get months(){return O(this,Je),g(this,qt)}get weeks(){return O(
this,Je),g(this,sr)}get days(){return O(this,Je),g(this,Vt)}get hours(){return O(this,Je),g(this,Yt)}get minutes(){return O(
this,Je),g(this,zt)}get seconds(){return O(this,Je),g(this,Kt)}get milliseconds(){return O(this,Je),g(this,Gt)}get microseconds(){
return O(this,Je),g(this,Jt)}get nanoseconds(){return O(this,Je),g(this,lr)}get sign(){return O(this,Je),qs(this)}get blank(){
return O(this,Je),qs(this)===0}with(t){O(this,Je);let r=Sm(t),{years:n=g(this,Wt),months:a=g(this,qt),weeks:i=g(this,sr),
days:o=g(this,Vt),hours:s=g(this,Yt),minutes:l=g(this,zt),seconds:c=g(this,Kt),milliseconds:u=g(this,Gt),microseconds:d=g(
this,Jt),nanoseconds:f=g(this,lr)}=r;return new e(n,a,i,o,s,l,c,u,d,f)}negated(){return O(this,Je),pr(this)}abs(){return O(
this,Je),new e(Math.abs(g(this,Wt)),Math.abs(g(this,qt)),Math.abs(g(this,sr)),Math.abs(g(this,Vt)),Math.abs(g(this,Yt)),
Math.abs(g(this,zt)),Math.abs(g(this,Kt)),Math.abs(g(this,Gt)),Math.abs(g(this,Jt)),Math.abs(g(this,lr)))}add(t){return O(
this,Je),Vh("add",this,t)}subtract(t){return O(this,Je),Vh("subtract",this,t)}round(t){if(O(this,Je),t===void 0)throw new TypeError(
"options parameter is required");let r=bn(this),n=typeof t=="string"?wa("smallestUnit",t):z(t),a=ur(n,"largestUnit","dat\
etime",void 0,["auto"]),{plainRelativeTo:i,zonedRelativeTo:o}=zc(n),s=ri(n),l=Kr(n,"halfExpand"),c=ur(n,"smallestUnit","\
datetime",void 0),u=!0;c||(u=!1,c="nanosecond");let d=Sn(r,c),f=!0;if(a||(f=!1,a=d),a==="auto"&&(a=d),!u&&!f)throw new RangeError(
"at least one of smallestUnit or largestUnit is required");if(Sn(a,c)!==a)throw new RangeError(`largestUnit ${a} cannot \
be smaller than smallestUnit ${c}`);let h={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[c];
if(h!==void 0&&ni(s,h,!1),s>1&&wn(c)==="date"&&a!==c)throw new RangeError("For calendar units with roundingIncrement > 1\
, use largestUnit = smallestUnit");if(o){let b=Wa(this),T=g(o,Re),S=g(o,P),E=g(o,re);return b=Vm(E,Zi(E,T,S,b),T,S,a,s,c,
l),wn(a)==="date"&&(a="hour"),Pr(b,a)}if(i){let b=tn(this),T=Xa({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},b.time),S=g(i,ne),E=g(i,P),x=kr(E,S,Ct(b.date,T.deltaDays),"constrain");return b=qm(xe(S,{deltaDays:0,hour:0,
minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),xe(x,T),E,a,s,c,l),Pr(b,a)}if(Qr(r))throw new RangeError(`a\
 starting point is required for ${r}s balancing`);if(Qr(a))throw new RangeError(`a starting point is required for ${a}s \
balancing`);let v=tn(this);if(c==="day"){let{quotient:b,remainder:T}=v.time.divmod(Ls),S=v.date.days+b+no(T,"day");S=qn(
S,s,l),v=En({years:0,months:0,weeks:0,days:S},Fe.ZERO)}else v=En({years:0,months:0,weeks:0,days:0},Vs(v.time,s,c,l));return Pr(
v,a)}total(t){if(O(this,Je),t===void 0)throw new TypeError("options argument is required");let r=typeof t=="string"?wa("\
unit",t):z(t),{plainRelativeTo:n,zonedRelativeTo:a}=zc(r),i=ur(r,"unit","datetime",An);if(a){let s=Wa(this),l=g(a,Re),c=g(
a,P),u=g(a,re);return function(d,f,h,v,b){return wn(b)==="time"?no(Fe.fromEpochNsDiff(f,d),b):Lh(Hm(d,f,h,v,b),f,Dr(h,d),
h,v,b)}(u,Zi(u,l,c,s),l,c,i)}if(n){let s=tn(this),l=Xa({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},s.time),c=g(n,ne),u=g(n,P),d=kr(u,c,Ct(s.date,l.deltaDays),"constrain");return function(f,h,v,b){if(Qa(f,h)==
0)return 0;va(f),va(h);let T=Bm(f,h,v,b);return b==="nanosecond"?$.default.toNumber(T.time.totalNs):Lh(T,_t(h),f,null,v,
b)}(xe(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),xe(d,l),u,i)}let o=bn(this);if(Qr(
o))throw new RangeError(`a starting point is required for ${o}s total`);if(Qr(i))throw new RangeError(`a starting point \
is required for ${i}s total`);return no(tn(this).time,i)}toString(t=void 0){O(this,Je);let r=z(t),n=Ao(r),a=Kr(r,"trunc"),
i=ur(r,"smallestUnit","time",void 0);if(i==="hour"||i==="minute")throw new RangeError('smallestUnit must be a time unit \
other than "hours" or "minutes"');let{precision:o,unit:s,increment:l}=$o(i,n);if(s==="nanosecond"&&l===1)return Ps(this,
o);let c=bn(this),u=Wa(this),d=Vs(u.time,l,s,a);return u=En(u.date,d),Ps(Pr(u,Sn(c,"second")),o)}toJSON(){return O(this,
Je),Ps(this,"auto")}toLocaleString(t=void 0,r=void 0){if(O(this,Je),typeof Intl.DurationFormat=="function"){let n=new Intl.
DurationFormat(t,r);return Ku.call(n,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires In\
tl.DurationFormat."),Ps(this,"auto")}valueOf(){Zn("Duration")}static from(t){return Mr(t)}static compare(t,r,n=void 0){let a=Mr(
t),i=Mr(r),o=z(n),{plainRelativeTo:s,zonedRelativeTo:l}=zc(o);if(g(a,Wt)===g(i,Wt)&&g(a,qt)===g(i,qt)&&g(a,sr)===g(i,sr)&&
g(a,Vt)===g(i,Vt)&&g(a,Yt)===g(i,Yt)&&g(a,zt)===g(i,zt)&&g(a,Kt)===g(i,Kt)&&g(a,Gt)===g(i,Gt)&&g(a,Jt)===g(i,Jt)&&g(a,lr)===
g(i,lr))return 0;let c=bn(a),u=bn(i),d=Wa(a),f=Wa(i);if(l&&(wn(c)==="date"||wn(u)==="date")){let S=g(l,Re),E=g(l,P),x=g(
l,re),I=Zi(x,S,E,d),D=Zi(x,S,E,f);return cr($.default.toNumber($.default.subtract(I,D)))}let h=d.date.days,v=f.date.days;
if(Qr(c)||Qr(u)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");h=jh(
d.date,s),v=jh(f.date,s)}let b=d.time.add24HourDays(h),T=f.time.add24HourDays(v);return b.cmp(T)}};On(vo,"Temporal.Durat\
ion");var bo=class{constructor(t,r,n="iso8601",a=1972){let i=ie(t),o=ie(r),s=rr(n===void 0?"iso8601":mt(n)),l=ie(a);ya(l,
i,o),Am(this,{year:l,month:i,day:o},s)}get monthCode(){return Qh(this,"monthCode")}get day(){return Qh(this,"day")}get calendarId(){
return O(this,br),g(this,P)}with(t,r=void 0){if(O(this,br),!Qe(t))throw new TypeError("invalid argument");ti(t);let n=g(
this,P),a=er(n,g(this,ne),"month-day");return a=ga(n,a,Er(n,t,["year","month","monthCode","day"],[],"partial")),Va(Bs(n,
a,_e(z(r))),n)}equals(t){O(this,br);let r=$h(t);return on(g(this,ne),g(r,ne))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){
return O(this,br),Nh(this,xo(z(t)))}toJSON(){return O(this,br),Nh(this)}toLocaleString(t=void 0,r=void 0){return O(this,
br),new Tr(t,r).format(this)}valueOf(){Zn("PlainMonthDay")}toPlainDate(t){if(O(this,br),!Qe(t))throw new TypeError("argu\
ment should be an object");let r=g(this,P);return Xt(Kn(r,ga(r,er(r,g(this,ne),"month-day"),Er(r,t,["year"],[],[])),"con\
strain"),r)}static from(t,r=void 0){return $h(t,r)}};function Qh(e,t){O(e,br);let r=g(e,ne);return Ro(e).isoToDate(r,{[t]:!0})[t]}
function Gc(e){return Dr(e,mu())}On(bo,"Temporal.PlainMonthDay");var Qm={instant:()=>Yr(mu()),plainDateTimeISO:(e=Hi())=>Nr(
Gc(Qt(e)),"iso8601"),plainDateISO:(e=Hi())=>Xt(Gc(Qt(e)).isoDate,"iso8601"),plainTimeISO:(e=Hi())=>Tn(Gc(Qt(e)).time),timeZoneId:()=>Hi(),
zonedDateTimeISO:(e=Hi())=>{let t=Qt(e);return It(mu(),t,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(
Qm,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});var wo=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0){
let s=t===void 0?0:ie(t),l=r===void 0?0:ie(r),c=n===void 0?0:ie(n),u=a===void 0?0:ie(a),d=i===void 0?0:ie(i),f=o===void 0?
0:ie(o);sl(s,l,c,u,d,f),$m(this,{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f})}get hour(){return O(
this,at),g(this,Xe).hour}get minute(){return O(this,at),g(this,Xe).minute}get second(){return O(this,at),g(this,Xe).second}get millisecond(){
return O(this,at),g(this,Xe).millisecond}get microsecond(){return O(this,at),g(this,Xe).microsecond}get nanosecond(){return O(
this,at),g(this,Xe).nanosecond}with(t,r=void 0){if(O(this,at),!Qe(t))throw new TypeError("invalid argument");ti(t);let n=iu(
t,"partial"),a=iu(this),{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Object.assign(a,n),d=_e(z(r));
return{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=al(i,o,s,l,c,u,d),new e(i,o,s,l,c,u)}add(t){return O(
this,at),Gh("add",this,t)}subtract(t){return O(this,at),Gh("subtract",this,t)}until(t,r=void 0){return O(this,at),Hh("un\
til",this,t,r)}since(t,r=void 0){return O(this,at),Hh("since",this,t,r)}round(t){if(O(this,at),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?wa("smallestUnit",t):z(t),n=ri(r),a=Kr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",An);return ni(n,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i],!1),
Tn(fu(g(this,Xe),n,i,a))}equals(t){O(this,at);let r=Wn(t);return hu(g(this,Xe),g(r,Xe))===0}toString(t=void 0){O(this,at);
let r=z(t),n=Ao(r),a=Kr(r,"trunc"),i=ur(r,"smallestUnit","time",void 0);if(i==="hour")throw new RangeError('smallestUnit\
 must be a time unit other than "hour"');let{precision:o,unit:s,increment:l}=$o(i,n);return Ch(fu(g(this,Xe),l,s,a),o)}toJSON(){
return O(this,at),Ch(g(this,Xe),"auto")}toLocaleString(t=void 0,r=void 0){return O(this,at),new Tr(t,r).format(this)}valueOf(){
Zn("PlainTime")}static from(t,r=void 0){return Wn(t,r)}static compare(t,r){let n=Wn(t),a=Wn(r);return hu(g(n,Xe),g(a,Xe))}};
On(wo,"Temporal.PlainTime");var To=class{constructor(t,r,n="iso8601",a=1){let i=ie(t),o=ie(r),s=rr(n===void 0?"iso8601":
mt(n)),l=ie(a);ya(i,o,l),Rm(this,{year:i,month:o,day:l},s)}get year(){return yn(this,"year")}get month(){return yn(this,
"month")}get monthCode(){return yn(this,"monthCode")}get calendarId(){return O(this,Et),g(this,P)}get era(){return yn(this,
"era")}get eraYear(){return yn(this,"eraYear")}get daysInMonth(){return yn(this,"daysInMonth")}get daysInYear(){return yn(
this,"daysInYear")}get monthsInYear(){return yn(this,"monthsInYear")}get inLeapYear(){return yn(this,"inLeapYear")}with(t,r=void 0){
if(O(this,Et),!Qe(t))throw new TypeError("invalid argument");ti(t);let n=g(this,P),a=er(n,g(this,ne),"year-month");return a=
ga(n,a,Er(n,t,["year","month","monthCode"],[],"partial")),Ya(so(n,a,_e(z(r))),n)}add(t,r=void 0){return O(this,Et),Jh("a\
dd",this,t,r)}subtract(t,r=void 0){return O(this,Et),Jh("subtract",this,t,r)}until(t,r=void 0){return O(this,Et),Wh("unt\
il",this,t,r)}since(t,r=void 0){return O(this,Et),Wh("since",this,t,r)}equals(t){O(this,Et);let r=Gi(t);return on(g(this,
ne),g(r,ne))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){return O(this,Et),Ph(this,xo(z(t)))}toJSON(){return O(this,Et),
Ph(this)}toLocaleString(t=void 0,r=void 0){return O(this,Et),new Tr(t,r).format(this)}valueOf(){Zn("PlainYearMonth")}toPlainDate(t){
if(O(this,Et),!Qe(t))throw new TypeError("argument should be an object");let r=g(this,P);return Xt(Kn(r,ga(r,er(r,g(this,
ne),"year-month"),Er(r,t,["day"],[],[])),"constrain"),r)}static from(t,r=void 0){return Gi(t,r)}static compare(t,r){let n=Gi(
t),a=Gi(r);return on(g(n,ne),g(a,ne))}};function yn(e,t){O(e,Et);let r=g(e,ne);return Ro(e).isoToDate(r,{[t]:!0})[t]}On(
To,"Temporal.PlainYearMonth");var mS=Tr.prototype.resolvedOptions,ko=class{constructor(t,r,n="iso8601"){if(arguments.length<
1)throw new TypeError("missing argument: epochNanoseconds is required");let a=Ys(t),i=mt(r),{tzName:o,offsetMinutes:s}=Vn(
i);if(s===void 0){let l=Hs(o);if(!l)throw new RangeError(`unknown time zone ${o}`);i=l.identifier}else i=Uu(s);Im(this,a,
i,rr(n===void 0?"iso8601":mt(n)))}get calendarId(){return O(this,ye),g(this,P)}get timeZoneId(){return O(this,ye),g(this,
Re)}get year(){return Ht(this,"year")}get month(){return Ht(this,"month")}get monthCode(){return Ht(this,"monthCode")}get day(){
return Ht(this,"day")}get hour(){return Ba(this,"hour")}get minute(){return Ba(this,"minute")}get second(){return Ba(this,
"second")}get millisecond(){return Ba(this,"millisecond")}get microsecond(){return Ba(this,"microsecond")}get nanosecond(){
return Ba(this,"nanosecond")}get era(){return Ht(this,"era")}get eraYear(){return Ht(this,"eraYear")}get epochMilliseconds(){
return O(this,ye),jr(g(this,re),"floor")}get epochNanoseconds(){return O(this,ye),Ym(g(this,re))}get dayOfWeek(){return Ht(
this,"dayOfWeek")}get dayOfYear(){return Ht(this,"dayOfYear")}get weekOfYear(){return Ht(this,"weekOfYear")?.week}get yearOfWeek(){
return Ht(this,"weekOfYear")?.year}get hoursInDay(){O(this,ye);let t=g(this,Re),r=Xr(this).isoDate,n=dr(r.year,r.month,r.
day+1),a=Bn(t,r),i=Bn(t,n);return no(Fe.fromEpochNsDiff(i,a),"hour")}get daysInWeek(){return Ht(this,"daysInWeek")}get daysInMonth(){
return Ht(this,"daysInMonth")}get daysInYear(){return Ht(this,"daysInYear")}get monthsInYear(){return Ht(this,"monthsInY\
ear")}get inLeapYear(){return Ht(this,"inLeapYear")}get offset(){return O(this,ye),ou(kn(g(this,Re),g(this,re)))}get offsetNanoseconds(){
return O(this,ye),kn(g(this,Re),g(this,re))}with(t,r=void 0){if(O(this,ye),!Qe(t))throw new TypeError("invalid zoned-dat\
e-time-like");ti(t);let n=g(this,P),a=g(this,Re),i=kn(a,g(this,re)),o=Xr(this),s={...er(n,o.isoDate),...o.time,offset:ou(
i)};s=ga(n,s,Er(n,t,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond",
"offset"],"partial"));let l=z(r),c=ro(l),u=Ms(l,"prefer"),d=Oo(n,s,_e(l)),f=ai(s.offset);return It(Fs(d.isoDate,d.time,"\
option",f,a,c,u,!1),a,n)}withPlainTime(t=void 0){O(this,ye);let r=g(this,Re),n=g(this,P),a=Xr(this).isoDate,i;return i=t===
void 0?Bn(r,a):Nt(r,xe(a,g(Wn(t),Xe)),"compatible"),It(i,r,n)}withTimeZone(t){O(this,ye);let r=Qt(t);return It(g(this,re),
r,g(this,P))}withCalendar(t){O(this,ye);let r=Co(t);return It(g(this,re),g(this,Re),r)}add(t,r=void 0){return O(this,ye),
Zh("add",this,t,r)}subtract(t,r=void 0){return O(this,ye),Zh("subtract",this,t,r)}until(t,r=void 0){return O(this,ye),qh(
"until",this,t,r)}since(t,r=void 0){return O(this,ye),qh("since",this,t,r)}round(t){if(O(this,ye),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?wa("smallestUnit",t):z(t),n=ri(r),a=Kr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",An,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i];
if(ni(n,o,o===1),i==="nanosecond"&&n===1)return It(g(this,re),g(this,Re),g(this,P));let s=g(this,Re),l=g(this,re),c=Xr(this),
u;if(i==="day"){let d=c.isoDate,f=dr(d.year,d.month,d.day+1),h=Bn(s,d),v=Bn(s,f),b=$.default.subtract(v,h);u=Fe.fromEpochNsDiff(
l,h).round(b,a).addToEpochNs(h)}else{let d=pu(c,n,i,a),f=kn(s,l);u=Fs(d.isoDate,d.time,"option",f,s,"compatible","prefer",
!1)}return It(u,s,g(this,P))}equals(t){O(this,ye);let r=Ji(t),n=g(this,re),a=g(r,re);return!!$.default.equal($.default.BigInt(
n),$.default.BigInt(a))&&!!Cm(g(this,Re),g(r,Re))&&nn(g(this,P),g(r,P))}toString(t=void 0){O(this,ye);let r=z(t),n=xo(r),
a=Ao(r),i=function(f){return _n(f,"offset",["auto","never"],"auto")}(r),o=Kr(r,"trunc"),s=ur(r,"smallestUnit","time",void 0);
if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let l=function(f){return _n(f,"\
timeZoneName",["auto","never","critical"],"auto")}(r),{precision:c,unit:u,increment:d}=$o(s,a);return Mh(this,c,n,l,i,{unit:u,
increment:d,roundingMode:o})}toLocaleString(t=void 0,r=void 0){O(this,ye);let n=z(r),a=Object.create(null);if(function(l,c,u,d){
if(c==null)return;let f=Reflect.ownKeys(c);for(let h=0;h<f.length;h++){let v=f[h];if(!u.some(b=>Object.is(b,v))&&Object.
prototype.propertyIsEnumerable.call(c,v)){let b=c[v];l[v]=b}}}(a,n,["timeZone"]),n.timeZone!==void 0)throw new TypeError(
"ZonedDateTime toLocaleString does not accept a timeZone option");if(a.year===void 0&&a.month===void 0&&a.day===void 0&&
a.era===void 0&&a.weekday===void 0&&a.dateStyle===void 0&&a.hour===void 0&&a.minute===void 0&&a.second===void 0&&a.fractionalSecondDigits===
void 0&&a.timeStyle===void 0&&a.dayPeriod===void 0&&a.timeZoneName===void 0&&(a.timeZoneName="short"),a.timeZone=g(this,
Re),Dh(a.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");let i=new Tr(t,a),
o=mS.call(i).calendar,s=g(this,P);if(s!=="iso8601"&&o!=="iso8601"&&!nn(o,s))throw new RangeError(`cannot format ZonedDat\
eTime with calendar ${s} in locale with calendar ${o}`);return i.format(Yr(g(this,re)))}toJSON(){return O(this,ye),Mh(this,
"auto")}valueOf(){Zn("ZonedDateTime")}startOfDay(){O(this,ye);let t=g(this,Re);return It(Bn(t,Xr(this).isoDate),t,g(this,
P))}getTimeZoneTransition(t){O(this,ye);let r=g(this,Re);if(t===void 0)throw new TypeError("options parameter is require\
d");let n=_n(typeof t=="string"?wa("direction",t):z(t),"direction",["next","previous"],An);if(n===void 0)throw new TypeError(
"direction option is required");if(Dh(r)||r==="UTC")return null;let a=g(this,re),i=n==="next"?Bu(r,a):lu(r,a);return i===
null?null:It(i,r,g(this,P))}toInstant(){return O(this,ye),Yr(g(this,re))}toPlainDate(){return O(this,ye),Xt(Xr(this).isoDate,
g(this,P))}toPlainTime(){return O(this,ye),Tn(Xr(this).time)}toPlainDateTime(){return O(this,ye),Nr(Xr(this),g(this,P))}static from(t,r=void 0){
return Ji(t,r)}static compare(t,r){let n=Ji(t),a=Ji(r),i=g(n,re),o=g(a,re);return $.default.lessThan($.default.BigInt(i),
$.default.BigInt(o))?-1:$.default.greaterThan($.default.BigInt(i),$.default.BigInt(o))?1:0}};function Xr(e){return Dr(g(
e,Re),g(e,re))}function Ht(e,t){O(e,ye);let r=Xr(e).isoDate;return Ro(e).isoToDate(r,{[t]:!0})[t]}function Ba(e,t){return O(
e,ye),Xr(e).time[t]}On(ko,"Temporal.ZonedDateTime");var Ve=Object.freeze({__proto__:null,Duration:vo,Instant:mo,Now:Qm,PlainDate:go,
PlainDateTime:yo,PlainMonthDay:bo,PlainTime:wo,PlainYearMonth:To,ZonedDateTime:ko}),LM=class{toTemporalInstant(){return Yr(
zr(Date.prototype.valueOf.call(this)))}}.prototype.toTemporalInstant,gS=[mo,go,yo,vo,bo,wo,To,ko];for(let e of gS){let t=Object.
getOwnPropertyDescriptor(e,"prototype");(t.configurable||t.enumerable||t.writable)&&(t.configurable=!1,t.enumerable=!1,t.
writable=!1,Object.defineProperty(e,"prototype",t))}var Ur=ae(je(),1);var Pe=ae(je(),1),p=ae(je(),1),Dt=ae(je(),1),dt=ae(je(),1);var Jy=ae(rg(),1),Zy=ae(ig(),1),Xy=ae(sg(),1),Qy=ae(cg(),1),ev=ae(dg(),1);var Gu=class{add(t,r,n){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else
(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],r&&this[a][n?"unshift":"push"](r)},this)}run(t,r){this[t]=
this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}},Ju=class{constructor(t){this.jsep=t,this.
registered={}}register(...t){t.forEach(r=>{if(typeof r!="object"||!r.name||!r.init)throw new Error("Invalid JSEP plugin \
format");this.registered[r.name]||(r.init(this.jsep),this.registered[r.name]=r)})}},fr=class e{static get version(){return"\
1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+e.version}static addUnaryOp(t){return e.max_unop_len=
Math.max(t.length,e.max_unop_len),e.unary_ops[t]=1,e}static addBinaryOp(t,r,n){return e.max_binop_len=Math.max(t.length,
e.max_binop_len),e.binary_ops[t]=r,n?e.right_associative.add(t):e.right_associative.delete(t),e}static addIdentifierChar(t){
return e.additional_identifier_chars.add(t),e}static addLiteral(t,r){return e.literals[t]=r,e}static removeUnaryOp(t){return delete e.
unary_ops[t],t.length===e.max_unop_len&&(e.max_unop_len=e.getMaxKeyLen(e.unary_ops)),e}static removeAllUnaryOps(){return e.
unary_ops={},e.max_unop_len=0,e}static removeIdentifierChar(t){return e.additional_identifier_chars.delete(t),e}static removeBinaryOp(t){
return delete e.binary_ops[t],t.length===e.max_binop_len&&(e.max_binop_len=e.getMaxKeyLen(e.binary_ops)),e.right_associative.
delete(t),e}static removeAllBinaryOps(){return e.binary_ops={},e.max_binop_len=0,e}static removeLiteral(t){return delete e.
literals[t],e}static removeAllLiterals(){return e.literals={},e}get char(){return this.expr.charAt(this.index)}get code(){
return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new e(t).parse()}static getMaxKeyLen(t){
return Math.max(0,...Object.keys(t).map(r=>r.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){
return e.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!e.binary_ops[String.fromCharCode(
t)]||e.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return e.isIdentifierStart(t)||
e.isDecimalDigit(t)}throwError(t){let r=new Error(t+" at character "+this.index);throw r.index=this.index,r.description=
t,r}runHook(t,r){if(e.hooks[t]){let n={context:this,node:r};return e.hooks.run(t,n),n.node}return r}searchHook(t){if(e.hooks[t]){
let r={context:this};return e.hooks[t].find(function(n){return n.call(r.context,r),r.node}),r.node}}gobbleSpaces(){let t=this.
code;for(;t===e.SPACE_CODE||t===e.TAB_CODE||t===e.LF_CODE||t===e.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook(
"gobble-spaces")}parse(){this.runHook("before-all");let t=this.gobbleExpressions(),r=t.length===1?t[0]:{type:e.COMPOUND,
body:t};return this.runHook("after-all",r)}gobbleExpressions(t){let r=[],n,a;for(;this.index<this.expr.length;)if(n=this.
code,n===e.SEMCOL_CODE||n===e.COMMA_CODE)this.index++;else if(a=this.gobbleExpression())r.push(a);else if(this.index<this.
expr.length){if(n===t)break;this.throwError('Unexpected "'+this.char+'"')}return r}gobbleExpression(){let t=this.searchHook(
"gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){
this.gobbleSpaces();let t=this.expr.substr(this.index,e.max_binop_len),r=t.length;for(;r>0;){if(e.binary_ops.hasOwnProperty(
t)&&(!e.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!e.isIdentifierPart(this.expr.charCodeAt(this.
index+t.length))))return this.index+=r,t;t=t.substr(0,--r)}return!1}gobbleBinaryExpression(){let t,r,n,a,i,o,s,l,c;if(o=
this.gobbleToken(),!o||(r=this.gobbleBinaryOp(),!r))return o;for(i={value:r,prec:e.binaryPrecedence(r),right_a:e.right_associative.
has(r)},s=this.gobbleToken(),s||this.throwError("Expected expression after "+r),a=[o,i,s];r=this.gobbleBinaryOp();){if(n=
e.binaryPrecedence(r),n===0){this.index-=r.length;break}i={value:r,prec:n,right_a:e.right_associative.has(r)},c=r;let u=d=>i.
right_a&&d.right_a?n>d.prec:n<=d.prec;for(;a.length>2&&u(a[a.length-2]);)s=a.pop(),r=a.pop().value,o=a.pop(),t={type:e.BINARY_EXP,
operator:r,left:o,right:s},a.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+c),a.push(i,t)}
for(l=a.length-1,t=a[l];l>1;)t={type:e.BINARY_EXP,operator:a[l-1].value,left:a[l-2],right:t},l-=2;return t}gobbleToken(){
let t,r,n,a;if(this.gobbleSpaces(),a=this.searchHook("gobble-token"),a)return this.runHook("after-token",a);if(t=this.code,
e.isDecimalDigit(t)||t===e.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===e.SQUOTE_CODE||t===e.DQUOTE_CODE)a=this.
gobbleStringLiteral();else if(t===e.OBRACK_CODE)a=this.gobbleArray();else{for(r=this.expr.substr(this.index,e.max_unop_len),
n=r.length;n>0;){if(e.unary_ops.hasOwnProperty(r)&&(!e.isIdentifierStart(this.code)||this.index+r.length<this.expr.length&&
!e.isIdentifierPart(this.expr.charCodeAt(this.index+r.length)))){this.index+=n;let i=this.gobbleToken();return i||this.throwError(
"missing unaryOp argument"),this.runHook("after-token",{type:e.UNARY_EXP,operator:r,argument:i,prefix:!0})}r=r.substr(0,
--n)}e.isIdentifierStart(t)?(a=this.gobbleIdentifier(),e.literals.hasOwnProperty(a.name)?a={type:e.LITERAL,value:e.literals[a.
name],raw:a.name}:a.name===e.this_str&&(a={type:e.THIS_EXP})):t===e.OPAREN_CODE&&(a=this.gobbleGroup())}return a?(a=this.
gobbleTokenProperty(a),this.runHook("after-token",a)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();
let r=this.code;for(;r===e.PERIOD_CODE||r===e.OBRACK_CODE||r===e.OPAREN_CODE||r===e.QUMARK_CODE;){let n;if(r===e.QUMARK_CODE){
if(this.expr.charCodeAt(this.index+1)!==e.PERIOD_CODE)break;n=!0,this.index+=2,this.gobbleSpaces(),r=this.code}this.index++,
r===e.OBRACK_CODE?(t={type:e.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError(
'Unexpected "'+this.char+'"'),this.gobbleSpaces(),r=this.code,r!==e.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):
r===e.OPAREN_CODE?t={type:e.CALL_EXP,arguments:this.gobbleArguments(e.CPAREN_CODE),callee:t}:(r===e.PERIOD_CODE||n)&&(n&&
this.index--,this.gobbleSpaces(),t={type:e.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),n&&(t.optional=
!0),this.gobbleSpaces(),r=this.code}return t}gobbleNumericLiteral(){let t="",r,n;for(;e.isDecimalDigit(this.code);)t+=this.
expr.charAt(this.index++);if(this.code===e.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);e.isDecimalDigit(this.code);)
t+=this.expr.charAt(this.index++);if(r=this.char,r==="e"||r==="E"){for(t+=this.expr.charAt(this.index++),r=this.char,(r===
"+"||r==="-")&&(t+=this.expr.charAt(this.index++));e.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);e.isDecimalDigit(
this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return n=this.code,e.isIdentifierStart(
n)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(n===e.PERIOD_CODE||t.length===1&&t.charCodeAt(
0)===e.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:e.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){
let t="",r=this.index,n=this.expr.charAt(this.index++),a=!1;for(;this.index<this.expr.length;){let i=this.expr.charAt(this.
index++);if(i===n){a=!0;break}else if(i==="\\")switch(i=this.expr.charAt(this.index++),i){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:
t+=i}else t+=i}return a||this.throwError('Unclosed quote after "'+t+'"'),{type:e.LITERAL,value:t,raw:this.expr.substring(
r,this.index)}}gobbleIdentifier(){let t=this.code,r=this.index;for(e.isIdentifierStart(t)?this.index++:this.throwError("\
Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,e.isIdentifierPart(t));)this.index++;return{type:e.IDENTIFIER,
name:this.expr.slice(r,this.index)}}gobbleArguments(t){let r=[],n=!1,a=0;for(;this.index<this.expr.length;){this.gobbleSpaces();
let i=this.code;if(i===t){n=!0,this.index++,t===e.CPAREN_CODE&&a&&a>=r.length&&this.throwError("Unexpected token "+String.
fromCharCode(t));break}else if(i===e.COMMA_CODE){if(this.index++,a++,a!==r.length){if(t===e.CPAREN_CODE)this.throwError(
"Unexpected token ,");else if(t===e.CBRACK_CODE)for(let o=r.length;o<a;o++)r.push(null)}}else if(r.length!==a&&a!==0)this.
throwError("Expected comma");else{let o=this.gobbleExpression();(!o||o.type===e.COMPOUND)&&this.throwError("Expected com\
ma"),r.push(o)}}return n||this.throwError("Expected "+String.fromCharCode(t)),r}gobbleGroup(){this.index++;let t=this.gobbleExpressions(
e.CPAREN_CODE);if(this.code===e.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:e.SEQUENCE_EXP,expressions:t}:
!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:e.ARRAY_EXP,elements:this.gobbleArguments(e.CBRACK_CODE)}}},
xS=new Gu;Object.assign(fr,{hooks:xS,plugins:new Ju(fr),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"\
Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"\
UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,
PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,
SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,
"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(
["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});fr.max_unop_len=
fr.getMaxKeyLen(fr.unary_ops);fr.max_binop_len=fr.getMaxKeyLen(fr.binary_ops);var ue=e=>new fr(e).parse(),AS=Object.getOwnPropertyNames(
class{});Object.getOwnPropertyNames(fr).filter(e=>!AS.includes(e)&&ue[e]===void 0).forEach(e=>{ue[e]=fr[e]});ue.Jsep=fr;
var $S="ConditionalExpression",RS={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===
e.QUMARK_CODE){this.index++;let n=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),
this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError("Expected expression"),r.node=
{type:$S,test:n,consequent:a,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let o=n;for(;o.right.operator&&e.binary_ops[o.
right.operator]<=.9;)o=o.right;r.node.test=o.right,o.right=r.node,r.node=n}}else this.throwError("Expected :")}})}};ue.plugins.
register(RS);var uv=ae(je(),1),me=ae(je(),1),yt=ae(je(),1),Be=ae(je(),1),$a=ae(je(),1),yv=ae(je(),1);var OS=(e,t,r)=>{if(t.length===1&&t[0]===r){let n=!1;try{let a={};e(a)===a&&(n=!0)}catch{}if(n){let a;try{throw new Error}catch(i){
({stack:a}=i)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:a})}}},IS=(e,t,r)=>{
let{memoize:n,memoizeOptions:a}=t,{inputSelectorResults:i,inputSelectorResultsCopy:o}=e,s=n(()=>({}),...a);if(!(s.apply(
null,i)===s.apply(null,o))){let c;try{throw new Error}catch(u){({stack:c}=u)}console.warn(`An input selector returned a \
different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:r,firstInputs:i,secondInputs:o,
stack:c})}},CS={inputStabilityCheck:"once",identityFunctionCheck:"once"};function NS(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function PS(e,t=`\
expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function MS(e,t="expecte\
d all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){let r=e.map(
n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var pg=e=>Array.
isArray(e)?e:[e];function DS(e){let t=Array.isArray(e[0])?e[0]:e;return MS(t,"createSelector expects all input-selectors\
 to be functions, but received the following types: "),t}function fg(e,t){let r=[],{length:n}=e;for(let a=0;a<n;a++)r.push(
e[a].apply(null,t));return r}var jS=(e,t)=>{let{identityFunctionCheck:r,inputStabilityCheck:n}={...CS,...t};return{identityFunctionCheck:{
shouldRun:r==="always"||r==="once"&&e,run:OS},inputStabilityCheck:{shouldRun:n==="always"||n==="once"&&e,run:IS}}};var KM=Symbol();var GM=Object.getPrototypeOf({});var LS=class{constructor(e){this.value=e}deref(){return this.value}},US=typeof WeakRef<"u"?WeakRef:LS,FS=0,hg=1;function pl(){
return{s:FS,v:void 0,o:null,p:null}}function mg(e,t={}){let r=pl(),{resultEqualityCheck:n}=t,a,i=0;function o(){let s=r,
{length:l}=arguments;for(let d=0,f=l;d<f;d++){let h=arguments[d];if(typeof h=="function"||typeof h=="object"&&h!==null){
let v=s.o;v===null&&(s.o=v=new WeakMap);let b=v.get(h);b===void 0?(s=pl(),v.set(h,s)):s=b}else{let v=s.p;v===null&&(s.p=
v=new Map);let b=v.get(h);b===void 0?(s=pl(),v.set(h,s)):s=b}}let c=s,u;if(s.s===hg)u=s.v;else if(u=e.apply(null,arguments),
i++,n){let d=a?.deref?.()??a;d!=null&&n(d,u)&&(u=d,i!==0&&i--),a=typeof u=="object"&&u!==null||typeof u=="function"?new US(
u):u}return c.s=hg,c.v=u,u}return o.clearCache=()=>{r=pl(),o.resetResultsCount()},o.resultsCount=()=>i,o.resetResultsCount=
()=>{i=0},o}function BS(e,...t){let r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...a)=>{let i=0,o=0,s,l={},
c=a.pop();typeof c=="object"&&(l=c,c=a.pop()),NS(c,`createSelector expects an output function after the inputs, but rece\
ived: [${typeof c}]`);let u={...r,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:h=mg,argsMemoizeOptions:v=[],devModeChecks:b={}}=u,
T=pg(f),S=pg(v),E=DS(a),x=d(function(){return i++,c.apply(null,arguments)},...T),I=!0,D=h(function(){o++;let K=fg(E,arguments);
if(s=x.apply(null,K),process.env.NODE_ENV!=="production"){let{identityFunctionCheck:J,inputStabilityCheck:L}=jS(I,b);if(J.
shouldRun&&J.run(c,K,s),L.shouldRun){let ve=fg(E,arguments);L.run({inputSelectorResults:K,inputSelectorResultsCopy:ve},{
memoize:d,memoizeOptions:T},arguments)}I&&(I=!1)}return s},...S);return Object.assign(D,{resultFunc:c,memoizedResultFunc:x,
dependencies:E,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>s,recomputations:()=>i,
resetRecomputations:()=>{i=0},memoize:d,argsMemoize:h})};return Object.assign(n,{withTypes:()=>n}),n}var k=BS(mg),HS=Object.
assign((e,t=k)=>{PS(e,`createStructuredSelector expects first argument to be an object where each property is a selector\
, instead received a ${typeof e}`);let r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((o,s,l)=>(o[r[l]]=s,
o),{}))},{withTypes:()=>HS});var Jr=ae(je(),1);var Cv=ae(Xn(),1),Nv=ae(Xn(),1);var Mv=ae(je(),1),Lv=ae(je(),1),Fv=ae(Xn(),1);var pt=ae(je(),1);var hs=ae(je(),1);var hb=ae(je(),1);var se=ae(je(),1);var _i=ae(je(),1);var Pa=ae(Xn(),1);var P0=ae(Xn(),1),L2=ae(yl(),1),Dp=ae(yl(),1),M0=ae(Xn(),1),U2=ae(yl(),1);var uc=ae(je(),1),Rt=ae(je(),1),Q=ae(je(),1);var N=ae(je(),1),X0=ae(je(),1);var Dl=ae(od(),1),tw=ae(od(),1),ze=ae(je(),1),W=ae(je(),1),Ne=e=>({left:e}),_l=Ne,R=e=>({right:e}),M=e=>"left"in e,Ee=e=>"\
right"in e;var et=e=>{if(Ee(e))return e.right;throw typeof e.left=="string"?new Error(e.left):e.left},bd=(e,t)=>Ee(e)?e.right:t;var uE=()=>Ve.Now.plainDateISO(),ir=e=>e instanceof Ve.PlainDate,dE=e=>Ve.PlainDate.from(e),by=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/,
Wo=e=>typeof e=="string"&&by.test(e),xl=(e,t)=>typeof e=="string"?/^\d{4}-\d{2}-\d{2}$/.test(e)?Ve.PlainDate.from(e).toZonedDateTime(
{timeZone:t,plainTime:{hour:0}}):by.test(e)?Ve.PlainDateTime.from(e).toZonedDateTime(t):e.includes("[")?Ve.ZonedDateTime.
from(e).withTimeZone(t):Ve.Instant.from(e).toZonedDateTimeISO(t):e instanceof Ve.Instant?e.toZonedDateTimeISO(t):e instanceof
Ve.ZonedDateTime?e.withTimeZone(t):e.toZonedDateTime({timeZone:t,plainTime:{hour:0}});var pE=(e,t)=>Ve.PlainDate.compare(e,t);var wy=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],fE=["Sun","Mon","Tue","Wed","Thu","Fri",
"Sat"],Nd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sd=["January","February","March","Ap\
ril","May","June","July","August","September","October","November","December"],wd=(e,t)=>{let r=e.toPlainDate(),n=t.toPlainDate();
return r.since(n,{largestUnit:"days"}).days},Ty=e=>{let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||
t[0]}`},Ng=e=>wy[e.dayOfWeek%7],hi=e=>`${Ty(e.day)} ${Nd[e.month-1]}`,Go=e=>`${Ty(e.day)} ${Nd[e.month-1]} ${e.year}`,hE=Ur.union(
[Ur.literal("weekdayShort"),Ur.literal("dayOfMonth"),Ur.literal("weekdayLong"),Ur.literal("fullDate"),Ur.literal("monthL\
ong"),Ur.literal("monthShort"),Ur.literal("monthNumber"),Ur.literal("year"),Ur.literal("monthYear")]),mE=(e,t,r={})=>{try{
return gE(e,t,r)}catch{return String(e)}},gE=(e,t,r={})=>{var n;let a=(n=r.timeZone)!=null?n:"Europe/London",i=xl(e,a);switch(t){case"\
weekdayShort":return fE[i.dayOfWeek%7];case"dayOfMonth":return String(i.day);case"weekdayLong":return wy[i.dayOfWeek%7];case"\
fullDate":return`${sd[i.month-1]} ${i.day}, ${i.year}`;case"monthLong":return sd[i.month-1];case"monthShort":return Nd[i.
month-1];case"monthNumber":return String(i.month);case"year":return String(i.year);case"monthYear":return`${sd[i.month-1]}\
 ${i.year}`}},kl=e=>e.slice(11,16),Pg=(e,t,r)=>{if(t===0)return"today";if(t>0)return t===1?"tomorrow":t<7?`on ${Ng(e)}`:
t<=14?`${Ng(e)} ${hi(e)}`:e.year===r.year?hi(e):Go(e);let n=-t;return n===1?"yesterday":n<7?`${n} days ago`:n<14?"1 week\
 ago":n<22?`${Math.floor(n/7)} weeks ago`:e.year===r.year?hi(e):Go(e)},Td=(e,t={})=>{try{return yE(e,t)}catch{return String(
e)}},yE=(e,t={})=>{var r,n;let a=(r=t.timeZone)!=null?r:"Europe/London",i=(n=t.now)!=null?n:Ve.Now.zonedDateTimeISO(a),o=xl(
e,a),s=wd(o,i);if(Wo(e))return`${Pg(o,s,i)}, ${kl(e)}`;if(s>0)return Pg(o,s,i);let l=Math.abs(o.epochMilliseconds-i.epochMilliseconds),
c=Math.floor(l/1e3),u=Math.floor(c/60),d=Math.floor(u/60),f=Math.floor(d/24),h=Math.floor(f/7);return c<45?"just now":c<
90?"1 minute ago":u<45?`${u} minutes ago`:u<90?"1 hour ago":d<6?`${Math.round(u/60)} hours ago`:s===0?"today":f<2?"yeste\
rday":f<7?`${f} days ago`:f<14?"1 week ago":f<22?`${h} weeks ago`:o.year===i.year?`${hi(o)}`:`${Go(o)}`},vE=(e,t,r={})=>{
try{return bE(e,t,r)}catch{return t?`${String(e)} \u2013 ${String(t)}`:String(e)}},bE=(e,t,r={})=>{var n,a;let i=(n=r.timeZone)!=
null?n:"Europe/London",o=(a=r.now)!=null?a:Ve.Now.zonedDateTimeISO(i),s=xl(e,i);if(!t)return Td(e,r);let l=xl(t,i);if(wd(
l,s)===0){let I=Td(e,r);return Wo(e)&&Wo(t)?`${I}\u2013${kl(t)}`:I}let c=Math.abs(wd(l,s))+1,u=c===1?"1 day":`${c} days`,
d=s.year,f=l.year,h=o.year,v=d!==h||d!==f,b=f!==h||d!==f,T=Wo(e)?`, ${kl(e)}`:"",S=Wo(t)?`, ${kl(t)}`:"",E=v?Go(s):hi(s),
x=b?Go(l):hi(l);return`${u}, from ${E}${T} to ${x}${S}`},wE=(e,t,r,n)=>{let a=TE(e),i=SE(t),o=xE(n);if(!a||!i||!o||typeof r!=
"string")return;let s;try{s=a.toZonedDateTimeISO(r).toPlainDate()}catch{return}for(let l=0;l<=7;l++){let c=s.add({days:l});
if(!o.has(c.dayOfWeek))continue;let u=c.toZonedDateTime({timeZone:r,plainTime:i}).toInstant().epochMilliseconds;if(u>a.epochMilliseconds)
return u}},TE=e=>{try{if(typeof e=="number")return Number.isFinite(e)?Ve.Instant.fromEpochMilliseconds(e):void 0;if(typeof e==
"string")return Ve.Instant.from(e)}catch{}},kE=/^([01]\d|2[0-3]):([0-5]\d)$/,SE=e=>{let t=typeof e=="string"?kE.exec(e):
null;return t?new Ve.PlainTime(Number(t[1]),Number(t[2])):void 0},EE={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7},_E=new Set(
[1,2,3,4,5,6,7]),xE=e=>{if(e==null)return _E;if(typeof e!="string")return;let t=e.split(",").map(n=>n.trim().toLowerCase()).
filter(n=>n.length>0);if(t.length===0)return;let r=new Set;for(let n of t){let a=EE[n];if(a===void 0)return;r.add(a)}return r};var AE=(e,t)=>Ui(e)?e(t):e,zo=()=>!0,$E=e=>e instanceof Error,RE=e=>$E(e)?e.message:String(e),OE=e=>e===void 0?[]:Array.
isArray(e)?e:[e];var Qn=(e,t)=>e===t?0:e===void 0?1:t===void 0?-1:ir(e)&&ir(t)?Ve.PlainDate.compare(e,t):typeof e=="number"&&typeof t=="n\
umber"?e-t:typeof e=="string"&&typeof t=="string"?e.localeCompare(t):String(e).localeCompare(String(t));var ky={};var le=e=>tt.union([e,tt.undefined]),$e=le(tt.boolean),F=le(tt.string),mr=le(tt.number),In=tt.record(tt.string,tt.unknown),
IE=tt.array(In),CE=tt.record(tt.string,tt.string),uD=tt.record(tt.string,tt.boolean);var NE=Me.intersection([Me.type({version:Me.number,verticalId:Me.string,answers:In,derived:Me.type({entities:Me.array(Me.string),
features:Me.array(Me.string)})}),Me.partial({notes:Me.string})]),PE=Me.keyof({clone:null,orgGen:null,orgGenHighRisk:null}),
ME=Me.type({id:Me.string,label:Me.string,weight:Me.number,triggered:Me.boolean}),DE=Me.type({score:Me.number,factors:Me.array(
ME),strategy:PE}),dD=Me.intersection([NE,Me.type({risk:DE})]);var jE=function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.
slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};function LE(e){return e}function Sy(e,t,r,n,a,i,o,s,l){
switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(
n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:
return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}
var Pd=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,jE([a],n,!1))}}},UE=function(e){return e._tag==="L\
eft"},FE=function(e){return e._tag==="Right"};var BE=function(e){return{_tag:"Right",right:e}};function Ey(e){return function(t,r){return e.map(t,function(){return r})}}
function HE(e){var t=Ey(e);return function(r){return t(r,void 0)}}function WE(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}var _y=BE,qE=Pd(2,function(e,t){return Al(e)?e:t(e.right)}),xy=function(e,t){return Sy(e,YE(t))},VE=function(e,t){return Sy(
e,KE(t))},Md="Either",YE=function(e){return function(t){return Al(t)?t:_y(e(t.right))}},Ay={URI:Md,map:xy},pD=Pd(2,Ey(Ay)),
fD=HE(Ay),zE=function(e){return function(t){return Al(t)?t:Al(e)?e:_y(t.right(e.right))}},KE=zE,GE={URI:Md,map:xy,ap:VE,
chain:qE},JE={URI:Md,fromEither:LE},Al=UE,ZE=FE;var hD=Pd(2,WE(GE)),mD={fromEither:JE.fromEither},ln=e=>Dt.union([e,Dt.array(e)]),Ae=e=>{let t=r=>typeof r=="string";return new Dt.Type(
`lax(${e.name})`,t,(r,n)=>t(r)?Dt.success(r):Dt.failure(r,n),Dt.identity)};function kd(e){return e.length===0?"":e[0].context.map(r=>r.key).filter(Boolean).join(".")}function XE(e){if(e.length===
0)return"No errors";if(e.length===1){let a=e[0],i=kd(e);return`Invalid value${i?` at ${i}`:""}: ${a.message||a.value}`}let t={};
e.forEach(a=>{let i=kd([a]);t[i]||(t[i]=[]),t[i].push(a)});let r=Object.keys(t).length,n=e.length;return`${n} validation\
 error${n>1?"s":""} in ${r} location${r>1?"s":""}`}var QE=dt.type({type:dt.literal("static"),name:dt.string,value:dt.unknown}),e_=dt.type({type:dt.literal("dynamic"),name:dt.string,
formula:dt.string}),jl=dt.recursion("pluginParam",()=>dt.union([QE,e_,dt.type({type:dt.literal("complex"),params:dt.array(
jl)})])),$l=e=>e?.dataType!==void 0,t_=Ae(p.union([p.literal("embedded"),p.literal("storage"),p.literal("realtime"),p.literal(
"callable")])),r_=Ae(p.union([p.literal("list"),p.literal("value")])),$y=Ae(p.union([p.literal("public"),p.literal("priv\
ate")])),n_=Ae(p.union([p.literal("columns"),p.literal("grid"),p.literal("spatial"),p.literal("flow")])),a_=Ae(p.union([
p.literal("x"),p.literal("y")])),i_=Ae(p.union([p.literal("jpeg"),p.literal("png"),p.literal("webp")])),Dd=Ae(p.union([p.literal(
"small"),p.literal("medium")])),Ry=Ae(p.union([p.literal("inline"),p.literal("masterDetail")])),Oy=Ae(p.union([p.literal(
"basic"),p.literal("multiline"),p.literal("stringArray")])),jd=Ae(p.union([p.literal("none"),p.literal("uppercase"),p.literal(
"lowercase")])),o_=Ae(p.union([p.literal("image"),p.literal("file"),p.literal("video"),p.literal("audio")])),Iy=Ae(p.union(
[p.literal("integer"),p.literal("slider"),p.literal("decimal"),p.literal("money"),p.literal("intArray")])),Ld=Ae(p.union(
[p.literal("date"),p.literal("datetime"),p.literal("time")])),s_=Ae(p.union([p.literal("single"),p.literal("multiple")])),
Ud=Ae(p.union([p.literal("select"),p.literal("radio"),p.literal("combobox")])),Cy=Ae(p.union([p.literal("global"),p.literal(
"user"),p.literal("variant"),p.literal("group"),p.literal("all"),p.literal("inbox")])),Ny=Ae(p.union([p.literal("light"),
p.literal("dark")])),Fd=Ae(p.union([p.literal("setUserProfile"),p.literal("triggerWorldcupSync")])),l_=Ae(p.union([p.literal(
"musicgen"),p.literal("minimax-music-2.5")])),c_=Ae(p.literal("gpt-4o-transcribe")),u_=Ae(p.union([p.literal("flux-schne\
ll"),p.literal("nano-banana-2")])),Ll=Ae(p.union([p.literal("claude-haiku-5-5"),p.literal("claude-haiku-4-5"),p.literal(
"claude-sonnet-5")])),d_=Ae(p.union([p.literal("none"),p.literal("menu"),p.literal("tabs")])),p_=Ae(p.union([p.literal("\
onWrite"),p.literal("onTimer")])),f_=Ae(p.union([p.literal("repeat"),p.literal("once"),p.literal("grid")])),Py=Ae(p.union(
[p.literal("tiles"),p.literal("bar"),p.literal("audioOnly"),p.literal("minimal")])),Bd=Ae(p.union([p.literal("video"),p.literal(
"audio")])),h_=Ae(p.union([p.literal("anyone"),p.literal("admins")])),m_=Ae(p.literal("Person")),gD=Ae(p.union([p.literal(
"variable"),p.literal("text"),p.literal("number"),p.literal("boolean"),p.literal("temporal"),p.literal("parentRef"),p.literal(
"image"),p.literal("imageUpload")])),yD=Ae(p.union([p.literal("id"),p.literal("type"),p.literal("_scope"),p.literal("cre\
atedAt"),p.literal("updatedAt"),p.literal("createdBy"),p.literal("updatedBy"),p.literal("createdByUid"),p.literal("updat\
edByUid"),p.literal("isDeleted"),p.literal("_parent")])),g_=Ae(p.union([p.literal("tabGroup"),p.literal("tab"),p.literal(
"folder")])),y_=Ae(p.union([p.literal("aiQuery"),p.literal("aiChat"),p.literal("fetchData"),p.literal("imageGeneration"),
p.literal("audioGeneration"),p.literal("transcribe"),p.literal("publishData"),p.literal("script")])),v_=p.partial({field:p.string,
direction:p.union([p.literal("asc"),p.literal("desc")])}),b_=p.partial({startField:p.string,endField:p.string,axis:p.string,
mode:f_,slots:p.string}),My=p.partial({label:p.string,onPublishType:p.string,enabled:p.boolean,titleTemplate:p.string,bodyTemplate:p.string,
clickPath:p.string,onCreate:p.boolean,onUpdate:p.boolean,onDelete:p.boolean,condition:p.string}),Dy=p.partial({label:p.string,
enabled:p.boolean,trigger:p_,watchType:p.string,onDelete:p.boolean,targetType:p.string,targetId:p.string,condition:p.string,
next:p.string,rejectionReason:p.string,notifyTurnUidField:p.string,notifyTitleTemplate:p.string,notifyBodyTemplate:p.string,
notifyClickPath:p.string,notifyTo:p.string,notifyTitle:p.string,notifyBody:p.string,notifyKey:p.string,notifyClickVariant:p.string,
smsTo:p.string,smsBody:p.string,smsPrivateType:p.string,smsReadUids:p.string,dueAt:p.string,nextPrivate:p.string,privateType:p.string,
privateReadUids:p.string,endOfLife:p.boolean,archive:p.boolean,archiveType:p.string,archiveData:p.string,archiveId:p.string,
perpetual:p.boolean,seed:p.string}),jy=p.partial({label:p.string,enabled:p.boolean,watchType:p.string,moveType:p.string,
isBotTurn:p.string,privateType:p.string,privateKey:p.string,privateReady:p.string,state:p.string,questions:p.string,moveId:p.string,
move:p.string,fallbackMove:p.string,delayMs:p.union([p.number,p.string]),maxDecisions:p.number,maxDailyDecisions:p.number,
journal:p.boolean}),w_=p.partial({functionName:p.string,args:p.string}),Ly=p.partial({dataType:p.string,scope:Cy,groupKey:p.string}),
Hd=p.partial({maxColumns:p.number,columnBreaks:p.array(p.number),axis:a_,mode:n_,minColumnWidth:p.number,columnWeights:p.array(
p.number),cols:p.union([p.number,p.string]),rows:p.union([p.number,p.string]),rowHeight:p.number}),Wd=p.partial({x:p.union(
[p.number,p.string]),y:p.union([p.number,p.string]),w:p.union([p.number,p.string]),h:p.union([p.number,p.string])}),qd=p.partial(
{marginBottom:p.number,justifySelf:p.union([p.literal("left"),p.literal("center"),p.literal("right")]),overlay:p.union([
p.literal("topLeft"),p.literal("topRight"),p.literal("bottomLeft"),p.literal("bottomRight")]),overlayInset:p.number,overlayWidth:p.number,
maxWidth:p.number}),T_=p.partial({width:p.number,height:p.number}),Vd=p.partial({bg:p.string,surface:p.string,accent:p.string,
text:p.string,mutedText:p.string,border:p.string}),Uy=p.type({style:d_}),Yd=p.intersection([T_,p.partial({format:i_})]),
zd=p.type({expression:p.string,errorMessage:p.string}),k_=p.intersection([p.type({id:p.string,label:p.string}),p.partial(
{group:p.string})]),Fy=p.union([p.string,k_]),By=p.intersection([p.type({allowedChildTypes:p.array(p.string)}),p.partial(
{icon:p.string,color:p.string,category:p.string,label:p.string,labelField:p.string,detail:p.string,badge:p.string,badgeColor:p.string,
lockedFields:p.union([p.string,p.array(p.string)]),canEdit:p.union([p.boolean,p.string])})]),Ul=p.intersection([p.type({
type:p.string}),p.partial({id:p.string})]),S_=p.union([Iy,p.undefined]),E_=p.type({x:p.number,y:p.number}),__=p.type({rotation:p.number,
zoom:p.number,pan:E_}),Hy=p.intersection([p.type({name:p.string}),p.partial({url:p.string,ext:p.string,aiPrompt:p.string,
previewUrl:p.string,editState:__,takenAt:p.string})]),x_=p.intersection([p.type({name:p.string}),p.partial({url:p.string,
ext:p.string,previewUrl:p.string,takenAt:p.string})]),A_=p.union([Hy,p.array(x_)]),$_=p.intersection([p.type({title:p.string}),
p.partial({body:p.string,ok:p.string,cancel:p.string,destructive:p.boolean,info:p.boolean})]),Wy=p.partial({params:p.array(
p.string),script:p.string,confirm:$_}),R_=p.partial({type:p.string,idField:p.string}),qy=p.partial({name:p.string,type:p.string,
isList:p.boolean,multiline:p.boolean,variant:p.string,compute:p.string,isTransient:p.boolean,description:p.string,fileNameFormula:p.string,
aiEnabled:p.boolean,aiSystemPromptFormula:p.string,searchFormula:p.string}),O_=p.intersection([p.type({name:p.string,fields:p.array(
qy)}),p.partial({icon:p.string,parent:R_,writeAccess:h_,wellKnown:m_})]),Vy=p.intersection([p.type({id:p.string,version:p.number,
hash:p.string}),p.partial({omitted:p.array(p.string)})]),I_=p.intersection([p.type({name:p.string,node:p.string,kind:r_}),
p.partial({default:p.string})]),C_=p.type({name:p.string,slot:p.string,fn:p.string,hostType:p.string}),Yy=p.intersection(
[p.type({id:p.string,version:p.number}),p.partial({hash:p.string,slots:p.array(I_),seams:p.array(C_)})]),bi=p.partial({dataType:p.string,
sort:ln(v_),whereClause:p.string,source:t_,scope:Cy,groupKey:p.string,callable:w_,span:b_}),N_=p.intersection([p.type({name:p.string,
type:p.string}),p.partial({actionLabel:p.string,actions:p.record(p.string,Wy),aiEnabled:p.boolean,aiSystemPromptFormula:p.string,
appLogo:p.string,args:p.string,audioSourceUrl:p.string,authDescription:p.string,authMode:$y,authTitle:p.string,autoAdvance:p.boolean,
botActors:ln(jy),canAdd:p.union([p.boolean,p.string]),canEdit:p.union([p.boolean,p.string]),collapsedByDefault:p.union([
p.boolean,p.string]),collapsible:p.union([p.boolean,p.string]),color:p.string,compute:p.unknown,containerStyle:qd,contentMaxWidth:p.number,
customCss:p.string,data:bi,deepHelp:p.string,displayMode:Py,displayName:p.string,durationSec:p.union([p.number,p.string]),
examples:p.array(p.string),feature:Yy,fetchUrl:p.string,focusIdentity:p.string,format:p.union([Ld,p.string]),formConfig:Ly,
functionName:Fd,help:p.string,hidden:p.union([p.boolean,p.string]),hideHeader:p.union([p.boolean,p.string]),hideNav:p.union(
[p.boolean,p.string]),hideTopBar:p.union([p.boolean,p.string]),htmlTemplate:p.string,icon:p.string,identity:p.string,idiom:p.union(
[Ud,p.string]),idleDescription:p.string,idleTitle:p.string,imageOutputOptions:Yd,imageSource:p.string,inputPlaceholder:p.string,
isDerived:p.boolean,isOwnScope:p.boolean,isRecord:p.boolean,isRepeating:p.boolean,isTransient:p.boolean,itemLabel:p.string,
iterationLabel:p.string,label:p.string,language:p.string,layout:Hd,library:Vy,lyrics:p.string,max:p.union([p.number,p.string]),
maxLength:p.union([p.number,p.string]),maxSizeMb:p.union([p.number,p.string]),maxTiles:p.union([p.number,p.string]),maxUserTurns:p.number,
mediaMode:Bd,min:p.union([p.number,p.string]),mockAudioUrl:p.string,mockEnabled:p.boolean,mockImageUrl:p.string,mockReplies:p.string,
mockResultCount:p.number,mockResults:p.string,mockTranscript:p.string,model:p.union([Ll,p.string]),multiple:p.boolean,navigation:Uy,
noCreditsDescription:p.string,noCreditsTitle:p.string,nodeTypes:p.record(p.string,By),notifications:ln(My),nounLabel:p.string,
onSuccessNavigate:p.string,orderField:p.string,orgLogin:p.boolean,pageSize:p.union([p.number,p.string]),parameters:p.string,
pickerValues:p.union([p.string,p.array(Fy)]),place:Wd,placeholder:p.string,placeholderIcon:p.string,pluginName:p.string,
pluginParams:p.array(jl),prompt:p.string,promptTemplate:p.string,publishDataType:p.string,publishScope:p.string,publishVariant:p.string,
purpose:p.string,recordKey:p.string,recordValue:p.string,refreshCallables:p.array(p.string),reorderable:p.union([p.boolean,
p.string]),required:p.union([p.boolean,p.string]),resultObjectType:p.string,returns:p.string,returnTypeHint:p.string,roomKey:p.string,
rootType:p.string,runningDescription:p.string,runningTitle:p.string,script:p.string,showCamera:p.boolean,showCommit:p.boolean,
showEdit:p.boolean,showFilePicker:p.boolean,showHeader:p.union([p.boolean,p.string]),showSearch:p.boolean,size:Dd,sourceExpression:p.string,
speakReplies:p.boolean,speechLang:p.string,steeringChips:p.string,step:p.union([p.number,p.string]),submitObjectType:p.string,
successMessage:p.string,summary:p.string,textTransform:jd,theme:Ny,themeColors:Vd,transitions:ln(Dy),typeDescription:p.string,
userAvatarUid:p.string,validation:ln(zd),value:p.unknown,variant:p.string,voiceInput:p.boolean})]),vD=Pe.type({verticalId:Pe.string,
title:Pe.string,entities:Pe.array(Pe.string),seedSlots:Pe.array(Pe.string),labels:Pe.array(Pe.string)}),P_=Pe.keyof({light:null,
dark:null}),M_=Pe.partial({labels:Pe.record(Pe.string,Pe.string),theme:Pe.partial({preset:P_,colors:Vd}),entityRenames:Pe.record(
Pe.string,Pe.string),seedSlots:Pe.array(Pe.string)}),bD=Pe.intersection([Pe.type({appName:Pe.string}),M_]),Kd={dataSourceType:[
"embedded","storage","realtime","callable"],featureSlotKind:["list","value"],authMode:["public","private"],mode:["column\
s","grid","spatial","flow"],axis:["x","y"],imageFormat:["jpeg","png","webp"],inputSize:["small","medium"],subsectionVariant:[
"inline","masterDetail"],textVariant:["basic","multiline","stringArray"],textTransform:["none","uppercase","lowercase"],
fileVariant:["image","file","video","audio"],numberVariant:["integer","slider","decimal","money","intArray"],temporalVariant:[
"date","datetime","time"],pickerVariant:["single","multiple"],pickerIdiom:["select","radio","combobox"],dataScope:["glob\
al","user","variant","group","all","inbox"],themePreset:["light","dark"],callableButtonFunction:["setUserProfile","trigg\
erWorldcupSync"],audioGenerationModel:["musicgen","minimax-music-2.5"],transcribeModel:["gpt-4o-transcribe"],imageGenerationModel:[
"flux-schnell","nano-banana-2"],textGenerationModel:["claude-haiku-5-5","claude-haiku-4-5","claude-sonnet-5"],navigationStyle:[
"none","menu","tabs"],transitionTrigger:["onWrite","onTimer"],spanMode:["repeat","once","grid"],videoDisplayMode:["tiles",
"bar","audioOnly","minimal"],mediaMode:["video","audio"],objectTypeWriteAccess:["anyone","admins"],wellKnownType:["Perso\
n"],fieldTypeBuiltin:["variable","text","number","boolean","temporal","parentRef","image","imageUpload"],recordMetaField:[
"id","type","_scope","createdAt","updatedAt","createdBy","updatedBy","createdByUid","updatedByUid","isDeleted","_parent"]};var zy=new Set(Kd.fieldTypeBuiltin),D_=e=>zy.has(e),wD=Kd.fieldTypeBuiltin.filter(D_);var j_=e=>{if(typeof e!="string")return[];let t=[];for(let r of e.split(",")){let n=r.trim();if(!n)continue;let a=n.indexOf(
":");if(a===-1){t.push({name:n});continue}let i=n.slice(0,a).trim(),o=n.slice(a+1).trim();i&&t.push(o?{name:i,type:o}:{name:i})}
return t},L_=e=>j_(e).map(t=>t.name),U_="__interp";var Fl="app",wi="appNode",hr="tree",Jo="screen",Bl="form",Hl="flow",Br="flowStep",Wl="repeat",ql="callableButton";var xa="content",ns="textInput",as="numberInput",Ti="variable",ra="function",na="const",is="booleanInput",os="temporalIn\
put",ss="selectInput",ki="fileInput",Gd="pluginLeaf",Jd="mediaRoom",F_="videoRoom",ls="subsection",B_=["app","appNode","\
booleanInput","callableButton","const","content","fileInput","flow","flowStep","form","function","mediaRoom","numberInpu\
t","pluginLeaf","repeat","screen","selectInput","subsection","temporalInput","textInput","tree","variable"],H_=["appNode\
:folder","appNode:tab","appNode:tabGroup","flowStep:aiChat","flowStep:aiQuery","flowStep:audioGeneration","flowStep:fetc\
hData","flowStep:imageGeneration","flowStep:publishData","flowStep:script","flowStep:transcribe"],Zd={aiChat:{type:"flow\
Step",variant:"aiChat"},aiQuery:{type:"flowStep",variant:"aiQuery"},audioGeneration:{type:"flowStep",variant:"audioGener\
ation"},fetchData:{type:"flowStep",variant:"fetchData"},folder:{type:"appNode",variant:"folder"},imageGeneration:{type:"\
flowStep",variant:"imageGeneration"},publishData:{type:"flowStep",variant:"publishData"},script:{type:"flowStep",variant:"\
script"},tab:{type:"appNode",variant:"tab"},tabGroup:{type:"appNode",variant:"tabGroup"},transcribe:{type:"flowStep",variant:"\
transcribe"}},W_={form:["formConfig"],callableButton:["functionName","name"],tree:["nodeTypes","rootType"],variable:["na\
me"],function:["name"],const:["name","value"],mediaRoom:["roomKey"]},Ky={list:"subsection",videoRoom:"mediaRoom"},q_=e=>{
var t;return(t=Ky[e])!=null?t:e};var Gy=e=>{var t;return(t=Zd[e])!=null?t:{type:e}};var TD=Object.fromEntries(Object.entries(Zd).map(([e,t])=>[`${t.type}:${t.variant}`,e]));var Mg="MatchExpression",Dg="MatchArm",Sd="->",jg=123,Lg=125,V_=44,Y_=e=>e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||e===
36||e===95||e>=128,li=e=>e.code,ld=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",z_=(e,t)=>{if(ld(t)&&t.type===
"ConditionalExpression"){let r=t.test;if(ld(r)&&r.type==="BinaryExpression"&&r.operator===Sd)return{type:Dg,test:r.left,
consequent:{type:"ConditionalExpression",test:r.right,consequent:t.consequent,alternate:t.alternate}}}return ld(t)&&t.type===
"BinaryExpression"&&t.operator===Sd?{type:Dg,test:t.left,consequent:t.right}:e.throwError("Expected `condition -> expres\
sion` in match block")},K_={name:"orgigglyMatch",init(e){e.addBinaryOp(Sd,.5),e.hooks.add("gobble-token",function(r){if(this.
gobbleSpaces(),!this.expr.startsWith("match",this.index))return;let n=this.index+5;if(n<this.expr.length&&Y_(this.expr.charCodeAt(
n)))return;let a=this.index;this.index=n,this.gobbleSpaces();let i;if(li(this)!==jg){let s=!1;try{s=this.gobbleExpression()}catch{
s=!1}if(this.gobbleSpaces(),!s||li(this)!==jg){this.index=a;return}i=s}this.index++;let o=[];for(;;){if(this.gobbleSpaces(),
li(this)===Lg){this.index++;break}Number.isNaN(li(this))&&this.throwError("Unclosed match block \u2014 expected `}`");let s=this.
gobbleExpression();if(s||this.throwError("Expected `condition -> expression` in match block"),o.push(z_(this,s)),this.gobbleSpaces(),
li(this)===V_){this.index++;continue}if(li(this)===Lg){this.index++;break}this.throwError("Expected `,` or `}` after mat\
ch arm")}o.length===0&&this.throwError("A match block needs at least one arm"),r.node=i?{type:Mg,scrutinee:i,arms:o}:{type:Mg,
arms:o}})}},Ug="LetExpression",Fg=61,G_=62,tv=e=>e>=65&&e<=90||e>=97&&e<=122||e===36||e===95||e>=128,Bg=e=>tv(e)||e>=48&&
e<=57,cd=e=>e.code,J_=e=>e,Lo=e=>e,Z_=new Set(["??","||"]),ci=e=>{let t=J_(e);if(t.type==="BinaryExpression"&&t.operator===
";"){let[r,n]=ci(t.left),a=n?Lo({type:"BinaryExpression",operator:";",left:n,right:t.right}):t.right;return[r,a]}if(t.type===
"BinaryExpression"&&Z_.has(String(t.operator))){let[r,n]=ci(t.left);return n?[r,Lo({...t,left:n})]:[e,void 0]}if(t.type===
"ConditionalExpression"){let[r,n]=ci(t.test);if(n)return[r,Lo({...t,test:n})];let[a,i]=ci(t.alternate);return i?[Lo({...t,
alternate:a}),i]:[e,void 0]}if(t.type==="ArrowFunctionExpression"){let[r,n]=ci(t.body);return n?[Lo({...t,body:r}),n]:[e,
void 0]}return[e,void 0]},X_={name:"orgigglyLet",init(e){e.hooks.add("gobble-token",function(r){if(this.gobbleSpaces(),!this.
expr.startsWith("let",this.index))return;let n=this.index+3;if(n<this.expr.length&&Bg(this.expr.charCodeAt(n)))return;let a=this.
index;this.index=n,this.gobbleSpaces();let i=this.index;if(!tv(cd(this))){/^[^\s=]+\s*=(?![=>])/.test(this.expr.slice(this.
index))&&this.throwError("Expected a name after let"),this.index=a;return}for(;Bg(cd(this));)this.index++;let o=this.expr.
slice(i,this.index);if(this.gobbleSpaces(),cd(this)!==Fg){this.index=a;return}let s=this.expr.charCodeAt(this.index+1);if(s===
Fg||s===G_){this.index=a;return}this.index++;let l=this.gobbleExpression();l||this.throwError(`Expected an initialiser a\
fter let ${o} =`);let[c,u]=ci(l);r.node=u?{type:Ug,id:o,init:c,body:u}:{type:Ug,id:o,init:c}})}},Ko=e=>e,Zo=e=>typeof e==
"object"&&e!==null&&typeof e.type=="string",Xd=(e,t)=>e.type==="BinaryExpression"&&e.operator===t,Q_=new Set(["||","&&",
"??"]),pi=(e,t,r)=>({type:"BinaryExpression",operator:e,left:t,right:r}),Ed=e=>{if(Xd(e,";")){let[t,r]=Ed(Ko(e.left));return[
t,r?pi(";",r,e.right):Ko(e.right)]}if(e.type==="ConditionalExpression"){let[t,r]=Ed(Ko(e.alternate));return r?[{...e,alternate:t},
r]:[e]}return[e]},_d=(e,t)=>{if(!Xd(e,";"))return t(e);let r=_d(Ko(e.right),t);return r?pi(";",e.left,r):void 0},Hg=e=>Xd(
e,"=")?e:void 0,xd=e=>{if(e.type==="BinaryExpression"&&Q_.has(String(e.operator))&&Zo(e.left)){let t=String(e.operator),
r=_d(e.left,n=>{let a=Hg(n);return a?pi("=",a.left,xd(pi(t,a.right,e.right))):void 0});if(r)return r}if(e.type==="Condit\
ionalExpression"&&Zo(e.test)){let[t,r]=Ed(Ko(e.alternate)),n=_d(e.test,a=>{let i=Hg(a);return i?pi("=",i.left,xd({...e,test:i.
right,alternate:t})):void 0});if(n)return r?pi(";",n,r):n}return e},Ad=e=>{let t={...e};for(let r of Object.keys(e)){if(r===
"parent")continue;let n=e[r];Zo(n)?t[r]=Ad(n):Array.isArray(n)&&(t[r]=n.map(a=>Zo(a)?Ad(a):a))}return xd(t)},ex={name:"o\
rgigglyAssign",init(e){e.hooks.add("after-all",function(r){Zo(r.node)&&(r.node=Ad(r.node))})}},tx=()=>{ue._orgigglyTemplatePluginRegistered||
(ue.plugins.register(ev.default),ue._orgigglyTemplatePluginRegistered=!0),ue._orgigglyObjectPluginRegistered||(ue.plugins.
register(Zy.default),ue._orgigglyObjectPluginRegistered=!0),ue._orgigglyRegexPluginRegistered||(ue.plugins.register(Xy.default),
ue._orgigglyRegexPluginRegistered=!0),ue._orgigglySpreadPluginRegistered||(ue.plugins.register(Qy.default),ue._orgigglySpreadPluginRegistered=
!0),ue._orgigglyArrowPluginRegistered||(ue.plugins.register(Jy.default),ue._orgigglyArrowPluginRegistered=!0),ue._orgigglyAtUnaryRegistered||
(ue.addUnaryOp("@"),ue._orgigglyAtUnaryRegistered=!0),ue._orgigglysemicolonRegistered||(ue.addBinaryOp(";",1),ue._orgigglysemicolonRegistered=
!0),ue._orgigglyAssignmentRegistered||(ue.addBinaryOp("=",2,!0),ue._orgigglyAssignmentRegistered=!0),ue._orgigglyNullishCoalescingRegistered||
(ue.addBinaryOp("??",1),ue._orgigglyNullishCoalescingRegistered=!0),ue._orgigglyMatchPluginRegistered||(ue.plugins.register(
K_),ue._orgigglyMatchPluginRegistered=!0),ue._orgigglyLetPluginRegistered||(ue.plugins.register(X_),ue._orgigglyLetPluginRegistered=
!0),ue._orgigglyAssignPluginRegistered||(ue.plugins.register(ex),ue._orgigglyAssignPluginRegistered=!0)};tx();var Rl=e=>e.
type==="Literal",Ol=e=>e.type==="BinaryExpression",Vl=e=>e.type==="CallExpression",xr=e=>e.type==="Identifier",Xo=e=>e.type===
"MemberExpression",rv=e=>e.type==="ThisExpression",nv=e=>e.type==="UnaryExpression",av=e=>e.type==="ConditionalExpressio\
n";var rx=e=>e.type==="Compound",iv=e=>e.type==="ArrayExpression",ov=e=>e.type==="TemplateLiteral",nx=e=>e.type==="TaggedTe\
mplateExpression",sv=e=>e.type==="ObjectExpression",Wg=e=>e&&e.type==="SpreadElement",lv=e=>e.type==="ArrowFunctionExpre\
ssion",ax=e=>e.type==="MatchExpression",cv=e=>e.type==="LetExpression",qg=e=>typeof e=="object"&&e!==null&&"type"in e;var gt=(e,t,r,n)=>{let a=e;if(a.parent=n,xr(e)){let i=t.indexOf(e.name,r),o=i+e.name.length;return a.start=i,a.end=o,{start:i,
end:o}}if(Rl(e)){let i=e.raw;if(i){let c=t.indexOf(i,r),u=c+i.length;return a.start=c,a.end=u,{start:c,end:u}}let o=String(
e.value),s=t.indexOf(o,r),l=s+o.length;return a.start=s,a.end=l,{start:s,end:l}}if(Ol(e)){let i=gt(e.left,t,r,a),o=gt(e.
right,t,i.end,a);return a.start=i.start,a.end=o.end,{start:i.start,end:o.end}}if(nv(e)){let i=t.indexOf(e.operator,r),o=gt(
e.argument,t,i+e.operator.length,a);return a.start=i,a.end=o.end,{start:i,end:o.end}}if(Vl(e)){let i=gt(e.callee,t,r,a),
o=i.end;for(let c of e.arguments)o=gt(c,t,o,a).end;let l=t.indexOf(")",o)+1;return a.start=i.start,a.end=l,{start:i.start,
end:l}}if(Xo(e)){let i=gt(e.object,t,r,a);if(e.computed){let o=gt(e.property,t,i.end,a),l=t.indexOf("]",o.end)+1;return a.
start=i.start,a.end=l,{start:i.start,end:l}}else{let o=gt(e.property,t,i.end,a);return a.start=i.start,a.end=o.end,{start:i.
start,end:o.end}}}if(av(e)){let i=gt(e.test,t,r,a),o=gt(e.consequent,t,i.end,a),s=gt(e.alternate,t,o.end,a);return a.start=
i.start,a.end=s.end,{start:i.start,end:s.end}}if(iv(e)){let i=t.indexOf("[",r),o=i+1;for(let c of e.elements)c&&(o=gt(c,
t,o,a).end);let l=t.indexOf("]",o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(sv(e)){let i=t.indexOf("{",r),o=i+1;for(let c of e.
properties){let u=c;u.key&&(o=gt(u.key,t,o,a).end),u.value&&!u.shorthand&&(o=gt(u.value,t,o,a).end)}let l=t.indexOf("}",
o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(ov(e)){let i=t.indexOf("`",r),o=i+1;for(let c of e.expressions)o=gt(c,t,
o,a).end;let l=t.indexOf("`",o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(rv(e)){let i=t.indexOf("this",r),o=i+4;return a.
start=i,a.end=o,{start:i,end:o}}if(rx(e)){let i=e.body||[];if(i.length===0)return a.start=r,a.end=r,{start:r,end:r};let o=r,
s=r,l=r;for(let c=0;c<i.length;c++){let u=gt(i[c],t,o,a);c===0&&(s=u.start),l=u.end,o=u.end}return a.start=s,a.end=l,{start:s,
end:l}}{let i=-1,o=r,s=r;for(let[l,c]of Object.entries(e))if(!(l==="type"||l==="parent")){if(Array.isArray(c)){for(let u of c)
if(qg(u)){let d=gt(u,t,s,a);i===-1&&(i=d.start),o=d.end,s=d.end}}else if(qg(c)){let u=gt(c,t,s,a);i===-1&&(i=u.start),o=
u.end,s=u.end}}return i===-1?(a.start=r,a.end=r,{start:r,end:r}):(a.start=i,a.end=o,{start:i,end:o})}},ix=e=>{let t=ue(e);
return gt(t,e,0),t._source=e,t},Aa="@",ox=(e,t,r)=>{if(uv.string.is(e)){let a=e.startsWith(Aa);if(a){let i=dv(e);return{
isFormula:a,value:i,targetCodec:t,name:r}}}return{isFormula:!1,value:e,targetCodec:t,name:r}},dv=e=>e.slice(Aa.length).trim(),
Qd=e=>e.startsWith(Aa)?dv(e):e;var pv=e=>!e.startsWith(Aa)&&e.includes("${"),ep=e=>{if(!pv(e))return e;let t=e.trim();return t.length>1&&t.startsWith("\
`")&&t.endsWith("`")?Aa+e:`${Aa}\`${sx(e)}\``},sx=e=>{let t="",r=0,n=o=>{for(t+=e[r++];r<e.length&&e[r]!==o;)e[r]==="\\"&&
(t+=e[r++]),r<e.length&&(t+=e[r++]);r<e.length&&(t+=e[r++])},a=()=>{let o=1;for(;r<e.length;){let s=e[r];if(s==="'"||s===
'"')n(s);else if(s==="`")t+=e[r++],i(!0);else if(s==="{"&&o++,s==="}"&&o--,t+=e[r++],o===0)return}},i=o=>{for(;r<e.length;){
let s=e[r];if(s==="\\")t+=e[r++],r<e.length&&(t+=e[r++]);else if(s==="`"){if(o){t+=e[r++];return}t+="\\`",r++}else s==="\
$"&&e[r+1]==="{"?(t+="${",r+=2,a()):t+=e[r++]}};return i(!1),t};var lx=me.union([me.literal(ns),me.literal(is),me.literal(as),me.literal(os),me.literal(ss),me.literal(ki),me.literal(Gd),
me.literal(Bl),me.literal(Hl),me.literal(Br),me.literal(Wl),me.literal(ql),me.literal(Fl),me.literal(wi),me.literal(Jo),
me.literal(hr),me.literal(Ti),me.literal(ra),me.literal(na),me.literal(xa),me.literal(ls),me.literal(Jd),me.literal(F_)]),
cx=me.recursion("node",()=>me.intersection([me.record(me.string,me.unknown),me.partial({children:me.array(cx)})])),ux={type:"\
app",name:""},dx={};var px={include:zo,traverseChildren:zo,traverseParent:zo},Yl={...px,direction:"forward"},Pn=e=>({...Yl,...e});var fx=yt.union([yt.literal("before"),yt.literal("after"),yt.literal("into")]),hx=yt.union([yt.literal("top"),yt.literal(
"bottom"),yt.literal("center")]),mx=yt.type({target:yt.string,action:fx,position:hx}),SD=yt.type({currentDropZone:yt.union(
[yt.undefined,mx]),src:yt.string}),gx=Be.keyof({html:null,sandboxed:null}),fv=Be.keyof({spotify:null}),yx=Be.partial({name:Be.string,
type:Be.string,description:Be.string,exampleValue:Be.string,default:Be.string}),vx=Be.intersection([Be.type({name:Be.string,
parameters:Be.array(yx),htmlTemplate:Be.string}),Be.partial({icon:Be.string,color:Be.string,description:Be.string,image:Hy,
runtime:gx,embedsThirdPartyMedia:Be.boolean,connections:Be.array(fv),widgetOwner:Be.string})]);var bx=$a.intersection([$a.type({name:$a.string,type:$a.string}),qy]);var wx=new Set(Kd.recordMetaField),cs=(...e)=>new Set(e),Tx=cs("id"),kx=cs("createdAt","updatedAt","createdBy","updatedB\
y"),Sx=cs("createdByUid","updatedByUid"),ED=cs("type","_scope","isDeleted"),_D=cs("_parent");var xD=new Set([...Tx,...kx,...Sx]),Ex=([e,t])=>({...t,name:e}),_x=e=>!!e[1],tp=e=>Object.entries(e).filter(_x).map(Ex),
Ge=(e,t,r)=>(n={})=>({name:"",type:e,...n,...t,children:r?tp(r):void 0}),Hr=(e,t)=>(r={},n={})=>{let a=tp(r),i=n.submitObjectType?
hv():[],o=[...a,...i];return{name:"",type:e,...t,...n,children:o.length>0?o:void 0}},ud=Ge(Ti),hv=()=>tp({id:ud(),createdAt:ud(),
createdBy:ud()}),mv=Hr(Fl),AD=Hr(wi),$D=Hr(wi,{variant:"tabGroup"}),RD=Hr(wi,{variant:"tab"}),OD=Hr(wi,{variant:"folder"}),
ID=Hr(Jo),CD=Hr(ls),ND=Hr(Bl),PD=Hr(Hl),MD=Hr(Wl,{isRepeating:!0}),DD=Ge(Br),jD=Ge(Br,{variant:"aiQuery"}),LD=Ge(Br,{variant:"\
aiChat"}),UD=Ge(Br,{variant:"fetchData"}),FD=Ge(Br,{variant:"imageGeneration"}),BD=Ge(Br,{variant:"audioGeneration"}),HD=Ge(
Br,{variant:"transcribe"}),WD=Ge(Br,{variant:"publishData"}),qD=Ge(Br,{variant:"script"}),VD=Ge(ql),YD=Ge(ns),zD=Ge(as),
KD=Ge(is),GD=Ge(os),JD=Ge(ss),ZD=Ge(ki),XD=Ge(xa),Uo=Ge(Ti),QD=Ge(ra),ej=Ge(na),tj=Ge(Gd),rj=Ge(Jd),nj=Hr(ls,{isRepeating:!0,
variant:"masterDetail"}),aj=Hr(ls,{isRepeating:!0,isRecord:!0,variant:"masterDetail"}),gv=Ge(hr,{isRepeating:!0},{value:Uo(),
expanded:Uo(),dragAndDropState:Uo(),isDrawerClosed:Uo(),leftPanelWidth:Uo()});var rp=(e,t=".")=>{let r=e.lastIndexOf(t),n=r===-1?"":e.slice(0,r),a=r===-1?e:e.slice(r+1);return[n,a]},xx=(e,t=".")=>{let r=e.
indexOf(t),n=r===-1?e:e.slice(0,r),a=r===-1?"":e.slice(r+1);return[n,a]},_r=(e,t=".")=>e.filter(Boolean).join(t),Ax=e=>Uc(
e,/(?=[A-Z])/).map(t=>qc(t)),vv=e=>Ax(e).join(" ");var $x=e=>{switch(e){case ns:case as:case is:case os:case ss:case ki:case Gd:return!0;default:return!1}},Rx=e=>{switch(e){case Fl:case wi:case Jo:case hr:case Bl:case Hl:case Wl:case ls:
return!0;default:return!1}},bv=e=>{let t=[];return t.push(e),t.push(...us(e).flatMap(bv)),t},us=e=>e.children||[],Ox=(e,t)=>wv(
e).filter(r=>r.name===t),Ix=e=>{let t=new Map,r=(n,a)=>{t.set(n,a);for(let i of us(n))r(i,n)};return r(e,null),t},wv=e=>Tv(
e)?[e]:e.isOwnScope||e.isRepeating?[e]:[e,...us(e).flatMap(wv)],np=(e,t,r)=>{let n=e[r.name];if(!n||n.length===1)return r.
name;let a=t.get(r);if(!a)throw new Error(`Node with name ${r.name} has no parent`);return`${np(e,t,a)}$${r.name}`},ap=e=>Rx(
e.type),Cx=e=>e.type==="form"||!!e.submitObjectType,Tv=e=>!ap(e),ip=e=>!!(e.isRepeating||e.isOwnScope),Nx=e=>e,it=(e,t)=>t,
zl=(e,t,r)=>r,Px=(e,t,r)=>r,Mx=(e,t,r,n)=>n,Dx=(e,t,r)=>r,kv=(e,t)=>t,jx=(e,t,r)=>r,Sv=(e,t,r)=>r,Lx=(e,t)=>t,Oa=e=>e,ds=k(
Oa,bv),oj=k(Oa,yr("compute")),Ux=k(Oa,yr("name")),Kl=k(ds,e=>Fn(e,yr("name"))),op=k(Oa,Ix),Ev=k(ds,Kl,op,(e,t,r)=>bt(e,n=>np(
t,r,n))),_v=k(op,kv,(e,t)=>{var r;return(r=e.get(t))!=null?r:void 0}),Cn=k(Kl,op,kv,(e,t,r)=>np(e,t,r)),Il=k(Kl,Ev,it,(e,t,r)=>{
let n=t[r];return n?[n]:e[r]||[]}),Qo=k(Oa,Kl,Ev,it,(e,t,r)=>r,(e,t,r,n,a)=>{let i=r[n];if(i)return R(i);let o=t[n];if(!o){
let[,s]=xx(n,"$");return s?Qo(e,s,a):_l(`Node with id ${n} not found`)}if(o.length===1)return R(o[0]);if(!a){let s=us(e).
find(c=>c.name===n);if(s)return R(s);let l=Ox(e,n);return l.length===1?R(l[0]):_l({matches:o.map(c=>Cn(e,c))})}return Qo(
a,n)}),sj=k(Qo,et),lj=k(Ux,vv),Si=(e,t,r)=>k(Oa,n=>{let a=n[t];return a===void 0&&r!==void 0&&(a=AE(r,n)),ox(a,e,t)}),Fx=Si(
yv.string,"nounLabel","Item"),Bx=e=>{let{value:t,isFormula:r}=Fx(e);return`${r?t:`'${t}'`} + ' ' + ($index + 1)`},Hx=k(Oa,
Bx),cj=Si($e,"multiline"),uj=k(ds,(e,t)=>t,(e,t)=>{let r=e.flatMap(n=>{var a;return bi.is(n.data)&&n.data.source===t?(a=
n.data.dataType)!=null?a:[]:[]});return da(r)}),dj=k(ds,e=>{var t;let r=[],n=new Set;for(let a of e){if(!bi.is(a.data)||
a.data.source!=="callable")continue;let i=a.data.dataType,o=a.data.callable;if(!i||!o?.functionName)continue;let s=`${i}\
::${o.functionName}::${(t=o.args)!=null?t:""}`;n.has(s)||(n.add(s),r.push({typeName:i,functionName:o.functionName,...o.args?
{args:o.args}:{}}))}return r}),Wx=e=>{if(e.type===hr){let r=e.nodeTypes;return r&&typeof r=="object"?Object.keys(r):[]}let t=bi.
is(e.data)?e.data.dataType:void 0;return t?[t]:[]},qx=k(ds,(e,t)=>t,(e,t)=>{var r,n;let a=new Map;for(let o of e)if(bi.is(
o.data)&&o.data.source===t){let s=(r=o.data.scope)!=null?r:"global";for(let l of Wx(o)){let c=(n=a.get(l))!=null?n:new Set;
s==="all"?(c.add("global"),c.add("user")):c.add(s),a.set(l,c)}}let i=[];for(let[o,s]of a)for(let l of s)i.push({typeName:o,
scope:l});return i}),Gl=[],V=e=>e;var aa=e=>{var t;return(t=e.instance)!=null?t:dx},Lr=e=>e.context,sp=k(V,yr("def")),un=k(aa,e=>{var t;return(t=e?.data)!=
null?t:Gl}),lp=k(aa,e=>{var t;return(t=e?.navStack)!=null?t:Gl}),dn=k(aa,e=>{var t;return(t=e?.lengths)!=null?t:Gl}),mi=k(
un,e=>bt(e,yr("pointer"))),Jl=k(dn,e=>bt(e,yr("pointer"))),cp=k(aa,e=>e.cursor||""),up=k(aa,e=>e.cursorArgs),xv=k(aa,e=>{
var t;return(t=e.navStackArgs)!=null?t:Gl}),Vx={objects:[]},Yx=k(V,e=>{var t;return(t=e.repo)!=null?t:Vx}),Av=e=>{let{parent:t}=e;
return[...t?Av(t):[],e]},zx=e=>{let t=e.match(/^([\w\s()$]+)(?:\[(\d+)\])?$/);if(!t)throw new Error(`part "${e}" invalid\
 syntax`);let[,r,n]=t;return{nodeId:r,index:n!==void 0?Number(n):0}},dp=e=>_r(Rv(e).map($v)),Kx=e=>{let{scope:t,node:r,isIteration:n}=e,
a=dp(t);return n?a:_r([a,Cn(t.node,r)])},ps=e=>{let{parent:t,node:r}=e;if(!t)return"";let n=Cn(t.node,r);return _r([dp(t),
n])},$v=e=>{let{parent:t,node:r,index:n}=e,a=t?Cn(t.node,r):"";return ip(r)?`${a}[${n}]`:a},Gx=e=>({node:e,index:0,key:""}),
Vg=e=>e.parent===void 0,Rv=e=>{let{parent:t}=e;return[...t?Rv(t):[],e]},Ov=(e,t)=>e.parent===t.parent&&e.node===t.node,Jx=(e,t)=>{
let r=t.find(n=>Ov(e,n));return r?r.index:-1},Zx=(e,t,r)=>{let n=t.map(a=>Ov(e,a)?{...a,index:r}:a);return _r(n.map($v))},
hj=yr("key"),Xx=(e,t)=>{let{parent:r,node:n,key:a}=e,i=Il(n,t);if(i.length)return n===i[0]?{key:_r([r?.key,t]),isDeclared:!0}:
{key:_r([a,t]),isDeclared:!0};if(t.includes("$")){let o=t.slice(t.lastIndexOf("$")+1);if(Il(n,o).length)return{key:_r([a,
t]),isDeclared:!0}}return{key:_r([a,t]),isDeclared:!1}},dd=(e,t,r)=>{let n=Qx(e,t,r);return n?Cn(e,n):r},Qx=(e,t,r)=>{let n=Il(
e,r);if(n.length!==0)return n.length===1?n[0]:Iv(e,t,r)},Iv=(e,t,r)=>{let n=Il(t,r);if(n.length)return n[0];let a=_v(e,t);
if(a)return Iv(e,a,r)},eA=(e,t)=>{if(t==="")return R(Gx(e));let[r,n]=rp(t),{nodeId:a,index:i}=zx(n),o=Cl({def:e},r);if(M(
o))return o;let s=o.right,l=Qo(e,a,s.node);if(M(l))return l;let c=l.right,u={parent:s,node:c,index:i,key:t},d=dp(u);if(d!==
t){let f=Cl({def:e},d);return M(f)?R(u):f}return R(u)},tA=(e,t)=>{let[r,n]=rp(t),a=n.endsWith("]"),o=Cl({def:e},a?t:r);if(M(
o))return o;let s=o.right,l=a?R(s.node):Qo(e,n,s.node);if(M(l))return l;let c=l.right,u={scope:s,node:c,isIteration:a,key:t},
d=Kx(u);if(d!==t){let f=Fr({def:e},d);return M(f)?R(u):f}return R(u)},Cl=k(sp,it,eA),Nn=k(Cl,e=>{if(M(e))throw new Error(
`Invalid scope key: ${e.left}`);return e.right}),Fr=k(sp,it,tA),B=k(Fr,e=>{if(M(e))throw new Error(`Invalid pointer key:\
 ${e.left}`);return e.right}),pp=k(sp,zl,(e,t)=>B({def:e},t)),rA=k(B,yr("node")),fp=k(V,()=>"",B),hp=k(Nn,Av),ta=k(V,Nn,
zl,(e,t,r)=>Jx(t,hp(e,r))),nA=k(V,Nn,zl,Mx,(e,t,r,n)=>{let a=hp(e,r);return Zx(t,a,n)}),Sl=k(Nn,zl,Xx),Yg=(e,t,r)=>{let n=Fr(
e,t);if(M(n))return;let a=n.right.scope;for(;a;){let{key:i,isDeclared:o}=Sl(e,a.key,r);if(o)return M(Fr(e,i))?void 0:i;a=
a.parent}};var Ei=(e,t)=>{let r=(0,Nv.createContext)(t);return[r.Provider,()=>{let i=(0,Cv.useContext)(r);if(i===void 0){if(t)return t;
throw new Error(`${e}Context not found`)}return i},r]},Pv=(e,t)=>{let r=e.length,n=t.length;if(r===0)return n;if(n===0)return r;
let a=[];for(let i=0;i<=r;i++)a[i]=[i];for(let i=0;i<=n;i++)a[0][i]=i;for(let i=1;i<=r;i++)for(let o=1;o<=n;o++){let s=e[i-
1]===t[o-1]?0:1;a[i][o]=Math.min(a[i-1][o]+1,a[i][o-1]+1,a[i-1][o-1]+s)}return a[r][n]},zg=e=>e.toLowerCase().trim().replace(
/^the\s+/i,"").replace(/\s+/g," "),aA=(e,t,r={})=>{if(e.length===0)return"none";let{correctThreshold:n=1,closeThreshold:a=3}=r,
i=zg(e),o=zg(t);if(i===o)return"correct";if(i.length===0)return"wrong";let s=Pv(i,o),l=Math.max(1,Math.floor(o.length/10)),
c=n*l,u=a*l;return s<=c?"correct":s<=u?"close":"wrong"};var Dv=class{constructor(e){this.html=e}toString(){return this.html}toJSON(){return this.html}},jv=e=>e instanceof Dv,iA=e=>e instanceof
Ve.PlainDate,oA=e=>e instanceof Ve.ZonedDateTime,sA=e=>e instanceof Ve.Instant,ut=e=>Mv.string.is(e)?e:jv(e)?e.html:iA(e)?
e.toString():oA(e)?e.toPlainDate().toString():sA(e)?e.toZonedDateTimeISO("UTC").toPlainDate().toString():Array.isArray(e)?
e.join(""):e===void 0?"":String(e),Zl=(e,t,r="no context")=>Ee(e)?Uv(e.right,t,r):e,Uv=(e,t,r="no context")=>t.is(e)?R(e):
_l(`Type mismatch: ${JSON.stringify(e)} is not a ${t.name} (${r})`),lA=(e,t,r="no context")=>{if(!Ee(e))return e;let n=e.
right;if(t.is(n))return R(n);let a=t;return a===Lv.string||a===F&&n!==void 0?R(ut(n)):_l(`Type mismatch: ${JSON.stringify(
n)} is not a ${t.name} (${r})`)},cA=e=>{let t={},r=[];for(let n in e){let a=e[n];M(a)?r.push(a.left):t[n]=a.right}return r.
length?{left:r}:{right:t}};var be=e=>{let t=cA(e);if(M(t))throw new Error(t.left.join(`
`));return t.right};var[yj,vj]=Ei("persistence"),[bj,wj]=Ei("PersistenceKey","");var uA=e=>{let t=e;return()=>(t=t*1103515245+12345&2147483647,t/2147483647)},Nl="0123456789abcdefghijklmnopqrstuvwxyzABC\
DEFGHIJKLMNOPQRSTUVWXYZ",dA=248,pA=()=>{let e=globalThis.crypto;if(!e?.getRandomValues)return Math.floor(Math.random()*Nl.
length);let t=new Uint8Array(1);for(;;){e.getRandomValues(t);let r=t[0];if(r<dA)return r%Nl.length}},fA=(e={})=>{let{length:t=8,
seed:r}=e;if(t<=0)throw new Error("Length must be greater than 0");let n=r!==void 0?(()=>{let i=uA(r);return()=>Math.floor(
i()*Nl.length)})():pA,a="";for(let i=0;i<t;i++)a+=Nl[n()];return a},hA="23456789TJQKA",mA="shdc",gA=/^card_[shdc][2-9TJQKA]$/,
yA=["high card","pair","two pair","three of a kind","straight","flush","full house","four of a kind","straight flush"],vA=e=>{
if(typeof e!="string"||!gA.test(e))throw new Error(`handRank: bad card id ${JSON.stringify(e)} \u2014 expected card_{s|h|d|c}\
{2-9|T|J|Q|K|A}`);return{id:e,suit:mA.indexOf(e[5]),rank:hA.indexOf(e[6])+2}},qo={2:"two",3:"three",4:"four",5:"five",6:"\
six",7:"seven",8:"eight",9:"nine",10:"ten",11:"jack",12:"queen",13:"king",14:"ace"},_a=e=>e===6?"sixes":`${qo[e]}s`,Kg=(e,t)=>{
var r;let n=e;for(let a=0;a<5;a++)n=n*15+((r=t[a])!=null?r:0);return n},Gg=e=>{var t;let r=[...e].sort((f,h)=>h.rank-f.rank),
n=new Map;for(let f of r)n.set(f.rank,((t=n.get(f.rank))!=null?t:0)+1);let a=[...n.entries()].sort((f,h)=>h[1]-f[1]||h[0]-
f[0]),i=e.every(f=>f.suit===e[0].suit),o=a.map(([f])=>f),s=0;o.length===5&&(o[0]-o[4]===4?s=o[0]:o.join(",")==="14,5,4,3\
,2"&&(s=5));let l=()=>a.flatMap(([f])=>r.filter(h=>h.rank===f));if(s>0){let f=s===5?[...r.slice(1),r[0]]:r,h=i?8:4;return{
category:h,rank:Kg(h,[s]),tiebreak:[s],ordered:f}}let c=a.map(([,f])=>f).join(""),u;c==="41"?u=7:c==="32"?u=6:i?u=5:c===
"311"?u=3:c==="221"?u=2:c==="2111"?u=1:u=0;let d=o;return{category:u,rank:Kg(u,d),tiebreak:d,ordered:l()}},bA=e=>{let t=e.
tiebreak;switch(e.category){case 8:return t[0]===14?"royal flush":`straight flush, ${qo[t[0]]} high`;case 7:return`four \
of a kind, ${_a(t[0])}`;case 6:return`full house, ${_a(t[0])} over ${_a(t[1])}`;case 5:return`flush, ${qo[t[0]]} high`;case 4:
return`straight, ${qo[t[0]]} high`;case 3:return`three of a kind, ${_a(t[0])}`;case 2:return`two pair, ${_a(t[0])} and ${_a(
t[1])}`;case 1:return`pair of ${_a(t[0])}`;default:return`${qo[t[0]]}-high`}},wA=e=>{let t=e.length;if(t===5)return[e];if(t===
6)return e.map((n,a)=>e.filter((i,o)=>o!==a));let r=[];for(let n=0;n<t;n++)for(let a=n+1;a<t;a++)r.push(e.filter((i,o)=>o!==
n&&o!==a));return r},TA=e=>{if(!Array.isArray(e)||e.length<5||e.length>7){let i=Array.isArray(e)?`${e.length} cards`:typeof e;
throw new Error(`handRank: expected an array of 5\u20137 card ids, got ${i}`)}let t=e.map(vA),r=new Set;for(let i of t){
if(r.has(i.id))throw new Error(`handRank: duplicate card id ${i.id}`);r.add(i.id)}let n;for(let i of wA(t)){let o=Gg(i);
(!n||o.rank>n.rank)&&(n=o)}let a=n??Gg(t.slice(0,5));return{category:a.category,categoryName:yA[a.category],rank:a.rank,
best:a.ordered.map(i=>i.id),label:bA(a)}},mp={map:["it","i"],filter:["it","i"],forEach:["it","i","arr"],reduce:["acc","i\
t","i"],times:["i"],every:["it","i"],some:["it","i"],find:["it","i"],findIndex:["it","i"],count:["it","i"],groupBy:["it",
"i"],sumBy:["it","i"]},kA=e=>e.params?e.params.filter(xr).map(t=>t.name):null,SA=e=>{var t,r,n;try{return R(ix(e))}catch(a){
let i=a,o=(t=i.message)!=null?t:"Parse error",s=(r=i.description)!=null?r:o,l=(n=i.index)!=null?n:-1;return Ne({message:o,
description:s,source:e,index:l})}},gp=k(Nx,SA),yp=e=>rt(e)&&"__orgFunction"in e&&e.__orgFunction===!0,El=new Set,EA=()=>({
map:new Map,ids:new WeakMap,next:{n:0}}),Jg=(e,t)=>{if(t===null)return"null";let r=typeof t;if(r==="object"||r==="functi\
on"){let n=e.ids.get(t);return n===void 0&&(n=e.next.n++,e.ids.set(t,n)),"#"+n}return r+":"+String(t)},Bv=e=>{e?.map.clear()},
es=e=>rt(e)&&"__closure"in e&&e.__closure===!0,Hv=(e,t)=>{var r;return{__closure:!0,params:(r=kA(e))!=null?r:[],body:e.body,
ctx:t}},pd=new Set,ts=(e,t)=>{if(pd.has(e))return R(void 0);let r={};for(let n=0;n<e.params.length;n++)r[e.params[n]]=t[n];
pd.add(e);try{return oe(e.body,Xl(e.ctx,r),cn)}finally{pd.delete(e)}},Wv=(e,t,r,n)=>{let a=e.compute,i=typeof a=="string"&&
a.startsWith("@")?a.slice(1).trim():String(a??"");if(El.has(e.key))return R(void 0);let o=L_(e.parameters),s={};for(let d=0;d<
o.length;d++)s[o[d]]=t[d];let l=gp(i);if(M(l))return Ne(Tt(`Error in function body: ${i}`,n));let c=e.memoSafe===!0?r.memo:
void 0,u;if(c){let d=r.dc("$data",cn);u=e.key+"|"+Jg(c,d)+"|"+t.map(h=>Jg(c,h)).join(",");let f=c.map.get(u);if(f!==void 0)
return f}El.add(e.key);try{let d=Xl(r,s);d.letBound=void 0;let f=oe(l.right,d,cn);return c&&u!==void 0&&c.map.set(u,f),f}finally{
El.delete(e.key)}},fd=(e,t,r)=>{let n=[];for(let a of e){let i=oe(a,t,r);if(M(i))return i;n.push(i.right)}return R(n)},Tt=(e,t)=>({
message:e,failingExpression:t}),_A=e=>{if(xr(e))return e.name;if(Xo(e)){let t=e.property;if(xr(t))return t.name}return"f\
unction"},qv=(e,t,r,n)=>{var a;let i=e;if(Bv(r.memo),xr(e))return(a=r.letBound)!=null&&a.has(e.name)?Ne(Tt(`Cannot reass\
ign let binding '${e.name}'`,i)):r.setter?(r.setter(e.name,t),R(void 0)):Ne(Tt("Cannot assign: no mutable context availa\
ble",i));if(Xo(e)){let o=oe(e.object,r,n);if(M(o))return o;let s=o.right;if(s==null||typeof s!="object"&&typeof s!="func\
tion")if(xr(e.object)){if(!r.setter)return Ne(Tt("Cannot auto-create object: no mutable context available",i));s={},r.setter(
e.object.name,s)}else return Ne(Tt("Cannot assign property of non-object",i));let l=$d(e,r.dc);if(M(l))return l;let c=l.
right.property;return s[c]=t,R(void 0)}return Ne(Tt("Invalid assignment target: must be identifier or property access",i))},
oe=(e,t,r=cn)=>{var n,a,i;let o=e;if(Rl(e))return R(e.value);if(Ol(e)){if(e.operator==="->")return Ne(Tt("`->` is only v\
alid inside a `match { }` block (as `condition -> expression`)",e));if(e.operator===";"){let c=oe(e.left,t,r);return M(c)?
c:oe(e.right,t,r)}if(e.operator==="="){let c=oe(e.right,t,r);if(M(c))return c;let u=c.right,d=qv(e.left,u,t,r);return M(
d)?d:R(u)}if(e.operator==="&&"||e.operator==="||"||e.operator==="??"){let c=oe(e.left,t,r);if(M(c))return c;let u=c.right;
return(e.operator==="&&"?!u:e.operator==="||"?!!u:u!=null)?c:oe(e.right,t,r)}let s=oe(e.left,t,r);if(M(s))return s;let l=oe(
e.right,t,r);if(M(l))return l;try{return R(BA(e.operator)(s.right,l.right))}catch(c){return Ne(Tt(String(c),e))}}if(nv(e)){
let s=oe(e.argument,t,r);if(M(s))return s;try{return R(HA(e.operator)(s.right))}catch(l){return Ne(Tt(String(l),e))}}if(av(
e)){let s=oe(e.test,t,r);return M(s)?s:s.right?oe(e.consequent,t,r):oe(e.alternate,t,r)}if(cv(e)){if((n=t.letBound)!=null&&
n.has(e.id))return Ne(Tt(`Cannot redeclare let binding '${e.id}'`,e));let s=oe(e.init,t,r);return M(s)?s:e.body?oe(e.body,
Yv(t,e.id,s.right),r):R(s.right)}if(ax(e)){let s,l=e.scrutinee!==void 0;if(e.scrutinee!==void 0){let c=oe(e.scrutinee,t,
r);if(M(c))return c;s=c.right}for(let c of e.arms){if(xr(c.test)&&c.test.name==="_")return oe(c.consequent,t,r);let u=oe(
c.test,t,r);if(M(u))return u;if(l?bp(s,u.right):!!u.right)return oe(c.consequent,t,r)}return R(void 0)}if(Vl(e)){let s={
...r,memberLookupContexts:[]};if(Xo(e.callee)){let u=oe(e.callee.object,t,ui(s,!1));if(M(u))return u;let d=u.right,f=$d(
e.callee,t.dc);if(M(f))return f;let h=f.right.property,v=hd(h,t.dc,ui(s,!0));if(Zg(v))return e.arguments.length>0?v(d,e.
arguments[0],t):R(void 0);if(v===Vo){if(e.arguments.length>0){let T=e.arguments.length>1?oe(e.arguments[1],t,s):R(void 0);
return M(T)?T:Vo(d,e.arguments[0],t,T.right)}return R(void 0)}let b;if(d!=null){if(b=d[h],es(b)){let T=fd(e.arguments,t,
s);return M(T)?T:ts(b,T.right)}if(typeof b=="function"){let T=b.bind(d),S=[];for(let E of e.arguments){let x=oe(E,t,s);if(M(
x))return x;S.push(x.right)}try{return R(T(...S))}catch(E){let x=E instanceof Error?E.message:String(E);return Ne(Tt(`Er\
ror invoking ${h}(): ${x}`,o))}}}if(typeof v=="function"){let T=[d];for(let S of e.arguments){let E=oe(S,t,s);if(M(E))return E;
T.push(E.right)}try{return R(v(...T))}catch(S){let E=S instanceof Error?S.message:String(S);return Ne(Tt(`Error invoking\
 ${h}(): ${E}`,o))}}return R(void 0)}let l=oe(e.callee,t,ui(s,!0));if(M(l))return l;let c=l.right;if(es(c)){let u=fd(e.arguments,
t,s);return M(u)?u:ts(c,u.right)}if(yp(c)){if(El.has(c.key))return R(void 0);let u=fd(e.arguments,t,s);return M(u)?u:Wv(
c,u.right,t,e)}if(typeof c=="function"){if(Zg(c)){let d=oe(e.arguments[0],t,s);return M(d)?d:c(d.right,e.arguments[1],t)}
if(c===Vo){let d=oe(e.arguments[0],t,s);if(M(d))return d;let f=e.arguments.length>2?oe(e.arguments[2],t,s):R(void 0);return M(
f)?f:Vo(d.right,e.arguments[1],t,f.right)}let u=[];for(let d of e.arguments){let f=oe(d,t,s);if(M(f))return f;u.push(f.right)}
try{return R(c(...u))}catch(d){let f=_A(e.callee),h=d instanceof Error?d.message:String(d);return Ne(Tt(`Error invoking ${f}\
(): ${h}`,o))}}return R(void 0)}if(rv(e))return R(t.thisContext);if(xr(e))return R(hd(e.name,t.dc,r));if(Xo(e)){let{object:s}=e,
l=$d(e,t.dc);if(M(l))return l;let c=l.right,u=oe(s,t,FA(ui(r,!1),c));if(M(u))return u;let d=u.right;if(Le(d)){if(c.type===
"computed"){let f=Number(c.property);return isNaN(f)?R(void 0):R(d[f])}return R(d.map(f=>rt(f)?f[c.property]:void 0))}if(rt(
d))return R(d[c.property]);if(Ut(d)&&c.type!=="computed"&&c.property==="length")return R(d.length);if(d!=null&&typeof d==
"object"){let f=d[c.property];return R(typeof f=="function"?f.bind(d):f)}return R(void 0)}if(ov(e)){let s=[],{quasis:l,expressions:c}=e;
for(let u=0;u<l.length;u++){let d=l[u],f=(i=typeof d.value=="string"?d.value:(a=d.value)==null?void 0:a.cooked)!=null?i:
"";if(s.push(f),u<c.length){let h=oe(c[u],t,r);if(M(h))return h;s.push(ut(h.right))}}return R(s.join(""))}if(nx(e)){let s=oe(
e.tag,t,ui(r,!0));if(M(s))return s;let l=s.right;if(typeof l!="function")return R(void 0);let{quasis:c,expressions:u}=e.
quasi,d=c.map(v=>{var b,T;return(T=typeof v.value=="string"?v.value:(b=v.value)==null?void 0:b.cooked)!=null?T:""}),h=[Object.
assign([...d],{raw:d.slice()})];for(let v of u){let b=oe(v,t,r);if(M(b))return b;h.push(b.right)}return R(l(...h))}if(iv(
e)){let s=[];for(let l of e.elements)if(l===null)s.push(void 0);else if(Wg(l)){let c=oe(l.argument,t,r);if(M(c))return c;
let u=c.right;Le(u)&&s.push(...u)}else{let c=oe(l,t,r);if(M(c))return c;s.push(c.right)}return R(s)}if(sv(e)){let s={},{
properties:l}=e;for(let c of l){if(Wg(c)){let h=oe(c.argument,t,r);if(M(h))return h;let v=h.right;rt(v)?Object.assign(s,
v):Le(v)&&v.forEach((b,T)=>{s[String(T)]=b});continue}let u=c.key,d=!!c.computed,f;if(!d&&xr(u))f=u.name;else if(!d&&Rl(
u))f=String(u.value);else{let h=oe(u,t,r);if(M(h))return h;f=String(h.right)}if(c.shorthand)s[f]=hd(f,t.dc,r);else{let h=oe(
c.value,t,r);if(M(h))return h;s[f]=h.right}}return R(s)}return lv(e)?R(Hv(e,t)):Ne(Tt(`Unsupported expression: ${e.type}`,
o))},$d=(e,t)=>{let{computed:r}=e,n=xA(e,t);return M(n)?n:R({type:r?"computed":"static",property:n.right})},xA=(e,t)=>{let{
property:r,computed:n}=e;if(!n&&xr(r))return R(r.name);let a=oe(r,{dc:t,setter:void 0});return M(a)?a:R(String(a.right))},
hd=(e,t,r)=>{let n=t(e,r);if(n!==void 0&&(!r.isCall||Ui(n)||yp(n)||es(n)))return n;if(r.isCall){let a=Kv.get(e);if(a)return a;
if(e==="reduce")return Vo}if(e in Pl&&!(!r.isCall&&Vv.has(e)))return Pl[e]},Vv=new Set(["html","keys","values","entries",
"first","last"]),Yv=(e,t,r)=>{var n;let a=Xl(e,{[t]:r});return a.letBound=new Set([...(n=e.letBound)!=null?n:[],t]),a},Xl=(e,t)=>{
let r=e.letBound;if(r){let n=Object.keys(t).filter(a=>r.has(a));if(n.length>0){let a=new Set(r);for(let i of n)a.delete(
i);r=a}}return{dc:ec(e.dc,t),setter:e.setter,thisContext:e.thisContext,memo:e.memo,asyncHosts:e.asyncHosts,syncHosts:e.syncHosts,
letBound:r}},ia=(e,t,r)=>{var n;let a=(n=mp[r])!=null?n:[];if(lv(e)){let i=Hv(e,t);return o=>ts(i,o)}if(xr(e)&&!a.includes(
e.name)){let i=oe(e,t,ui(cn,!0));if(!M(i)&&es(i.right)){let o=i.right;return s=>ts(o,s)}if(!M(i)&&yp(i.right)){let o=i.right;
return s=>Wv(o,s,t,e)}}return(i,o)=>{let s={};for(let l=0;l<a.length;l++)s[a[l]]=i[l];return o&&Object.assign(s,o),oe(e,
Xl(t,s),cn)}},AA=(e,t,r)=>{if(!Ut(e))return R("");let n=ia(t,r,"forEach"),a=[],i=e.split(`
`);for(let o=0;o<i.length;o++){let s=n([i[o],o,i]);if(M(s))return s;a.push(String(s.right))}return R(a.join(""))},$A=(e,t,r)=>{
if(!Le(e))return R([]);let n=ia(t,r,"filter"),a=[];for(let i=0;i<e.length;i++){let o=e[i],s=n([o,i]);if(M(s))return s;s.
right&&a.push(o)}return R(a)},RA=(e,t,r)=>{if(!Le(e))return R([]);let n=ia(t,r,"map"),a=[];for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(M(o))return o;a.push(o.right)}return R(a)},Vo=(e,t,r,n)=>{if(!Le(e))return R(n);let a=ia(t,r,"reduce"),i=n;
for(let o=0;o<e.length;o++){let s=a([i,e[o],o]);if(M(s))return s;i=s.right}return R(i)},Ql=(e,t,r,n,a,i)=>{if(!Le(e))return R(
i);let o=ia(t,r,n);for(let s=0;s<e.length;s++){let l=e[s],c=o([l,s]);if(M(c))return c;let u=a(!!c.right,l,s);if(u)return R(
u.value)}return R(i)},OA=(e,t,r)=>Ql(e,t,r,"every",n=>n?void 0:{value:!1},!0),IA=(e,t,r)=>Ql(e,t,r,"some",n=>n?{value:!0}:
void 0,!1),CA=(e,t,r)=>Ql(e,t,r,"find",(n,a)=>n?{value:a}:void 0,void 0),NA=(e,t,r)=>Ql(e,t,r,"findIndex",(n,a,i)=>n?{value:i}:
void 0,-1),zv=(e,t,r)=>{if(e){if(Rl(e)&&Ut(e.value)){let n=e.value;return([a])=>R(rt(a)?a[n]:void 0)}return ia(e,t,r)}},
PA=(e,t,r)=>{if(!Le(e))return R(0);if(!t)return R(e.length);let n=ia(t,r,"count"),a=0;for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(M(o))return o;o.right&&a++}return R(a)},MA=(e,t,r)=>{var n;let a=zv(t,r,"groupBy");if(!Le(e)||!a)return R({});
let i={};for(let o=0;o<e.length;o++){let s=a([e[o],o]);if(M(s))return s;if(s.right==null)continue;let l=ut(s.right);((n=
i[l])!=null?n:i[l]=[]).push(e[o])}return R(i)},DA=(e,t,r)=>{if(!Le(e))return R(0);let n=zv(t,r,"sumBy"),a=0;for(let i=0;i<
e.length;i++){let o=n?n([e[i],i]):R(e[i]);if(M(o))return o;o.right!=null&&(a+=Number(o.right))}return R(a)},jA=(e,t,r)=>{
let n=Number(e);if(!Un(n)||isNaN(n)||n<0)return R([]);let a=ia(t,r,"times"),i=[];for(let o=0;o<n;o++){let s=a([o],{it:o});
if(M(s))return s;i.push(s.right)}return R(i)},Kv=new Map([["forEach",AA],["filter",$A],["map",RA],["times",jA],["every",
OA],["some",IA],["find",CA],["findIndex",NA],["count",PA],["groupBy",MA],["sumBy",DA]]),LA=new Set(Kv.values()),Zg=e=>typeof e==
"function"&&LA.has(e);var Gv=(e,t={},r)=>{let n=gp(e);if(M(n))return n;let a=Xv(t);return r!==void 0&&(a.thisContext=r),oe(n.right,a,cn)},UA=(e,t={},r)=>et(
Gv(e,t,r)),cn={memberLookupContexts:[],isCall:!1},FA=(e,t)=>({...e,memberLookupContexts:[t,...e.memberLookupContexts]}),
ui=(e,t)=>({...e,isCall:t}),BA=e=>{let t=VA[e];return t||(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},HA=e=>{let t=YA[e];return t||
(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},vp=(e,t)=>ir(e)&&ir(t)?e.equals(t):e===t,WA=(e,t)=>!vp(e,t),bp=(e,t)=>e==null&&t==
null?!0:vp(e,t),qA=(e,t)=>!bp(e,t),wl=(e,t)=>e!=null&&t!=null,VA={"+":(e,t)=>ir(e)&&Un(t)?e.add({days:t}):Un(e)&&ir(t)?t.
add({days:e}):Ut(e)||Ut(t)?(e==null?"":String(e))+(t==null?"":String(t)):ir(e)||ir(t)?String(e)+String(t):Number(e)+Number(
t),"-":(e,t)=>ir(e)&&Un(t)?e.subtract({days:t}):ir(e)&&ir(t)?e.since(t).total("days"):Number(e)-Number(t),"*":(e,t)=>Number(
e)*Number(t),"/":(e,t)=>Number(e)/Number(t),"%":(e,t)=>Number(e)%Number(t),"==":bp,"===":vp,"!=":qA,"!==":WA,">":(e,t)=>wl(
e,t)&&Qn(e,t)>0,">=":(e,t)=>wl(e,t)&&Qn(e,t)>=0,"<":(e,t)=>wl(e,t)&&Qn(e,t)<0,"<=":(e,t)=>wl(e,t)&&Qn(e,t)<=0},YA={"-":e=>-Number(
e),"!":e=>!e,"@":e=>e},zA=e=>{let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.
imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}},Xg=e=>Le(e)?e.map(ut):e==null?[]:[ut(e)],Jv=e=>e.replace(/&/g,"&amp;").
replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Zv=e=>e==null?"":jv(e)?e.html:Le(
e)?e.map(Zv).join(""):Jv(ut(e)),Qg=e=>(e.length===1&&Le(e[0])?e[0]:e).filter(r=>r!=null).map(Number),md=(e,t)=>{if(es(e))
return(...r)=>{let n=ts(e,r);if(M(n))throw new Error(n.left.message);return n.right};if(t&&typeof e=="string"&&e.length>
0)return r=>rt(r)?r[e]:void 0},Tl=e=>rt(e)?Object.entries(e):Le(e)?e.flatMap((t,r)=>t==null?[]:[[String(r),t]]):[],Pl={if:(e,t,r)=>e?
t:r,and:(...e)=>e.every(t=>t),or:(...e)=>e.some(t=>t),length:e=>Ut(e)||Le(e)?e.length:0,sum:e=>Le(e)?e.reduce((t,r)=>t+Number(
r),0):0,avg:e=>!Le(e)||e.length===0?0:e.reduce((r,n)=>r+Number(n),0)/e.length,min:(...e)=>{let t=Qg(e);return t.length===
0?void 0:Math.min(...t)},max:(...e)=>{let t=Qg(e);return t.length===0?void 0:Math.max(...t)},first:e=>Le(e)?e[0]:void 0,
last:e=>Le(e)&&e.length>0?e[e.length-1]:void 0,flatten:e=>Le(e)?e.flat(1):[],clamp:(e,t,r)=>{if(e==null)return;let n=Number(
e);return t!=null&&(n=Math.max(n,Number(t))),r!=null&&(n=Math.min(n,Number(r))),n},split:(e,t)=>Ut(e)?t===void 0?[e]:e.split(
String(t)):[],join:(e,t)=>{if(!Le(e))return"";let r=t!==void 0?String(t):",";return e.map(String).join(r)},upper:e=>ut(e).
toUpperCase(),lower:e=>ut(e).toLowerCase(),concat:(...e)=>e.reduce((t,r)=>Le(r)?t.concat(r):t,[]),today:uE,dateFrom:e=>{
try{return dE(ut(e))}catch{return`<<INVALID_DATE: ${e}>>`}},dateCompare:(e,t)=>pE(e,t),formatDate:(e,t)=>{try{return hE.
is(t)?mE(e,t):Td(e)}catch{return`<<INVALID_DATE: ${e}>>`}},formatPeriod:(e,t)=>vE(e,t),generateId:(e,t)=>fA({length:Number(
e),seed:Un(t)?Number(t):void 0}),regex:(e,t)=>new RegExp(String(e),t?String(t):void 0),fuzzyMatch:(e,t)=>aA(ut(e),ut(t)),
toJson:(e,t)=>{let r=t!==void 0?Number(t):void 0;return JSON.stringify(e,null,r)},dodgy:e=>{throw new Error("dodgy funct\
ion failed!!")},rand:e=>{let t=Number(e);return!Un(t)||isNaN(t)||t<=0?0:Math.floor(Math.random()*t)},floor:e=>Math.floor(
Number(e)),ceil:e=>Math.ceil(Number(e)),round:e=>Math.round(Number(e)),abs:e=>Math.abs(Number(e)),uniq:(e,t)=>{if(!Le(e))
return[];let r=t!==void 0?e.map(n=>rt(n)?n[String(t)]:void 0):e;return[...new Set(r)].filter(n=>n!==void 0)},sort:(e,t,r)=>{
if(!Le(e))return[];let n=typeof t=="string"&&t.length>0,a=s=>n&&rt(s)?s[t]:s,i=e.every(s=>typeof a(s)=="number"),o=r?-1:
1;return[...e].sort((s,l)=>{let c=a(s),u=a(l),d=i?c-u:String(c).localeCompare(String(u));return o*d})},shuffle:(e,t)=>{if(!Le(
e))return[];let r=zA(Number(t)),n=[...e];for(let a=n.length-1;a>0;a--){let i=Math.floor(r()*(a+1));[n[a],n[i]]=[n[i],n[a]]}
return n},handRank:e=>TA(e),replace:(e,t,r)=>{let n=e==null?"":ut(e);if(t==null)return n;let a=r==null?"":ut(r);return n.
split(ut(t)).join(a)},omit:(e,t)=>{if(!rt(e))return{};let r=new Set(Xg(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>!r.has(n)))},pick:(e,t)=>{if(!rt(e))return{};let r=new Set(Xg(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>r.has(n)))},toMap:(e,t,r)=>{var n;if(!Le(e))return{};let a=md(t,!0);if(!a)return{};let i=(n=md(r,!0))!=null?n:s=>s,
o={};return e.forEach((s,l)=>{let c=a(s,l);c!=null&&(o[ut(c)]=i(s,l))}),o},keys:e=>Tl(e).map(([t])=>t),values:e=>Tl(e).map(
([,t])=>t),entries:e=>Tl(e),mapValues:(e,t)=>{let r=md(t,!1);return r?Object.fromEntries(Tl(e).map(([n,a])=>[n,r(a,n)])):
{}},escapeHtml:e=>Jv(e==null?"":ut(e)),html:(e,...t)=>{let r=Le(e)?e.map(ut):[ut(e)],n="";for(let a=0;a<r.length;a++)n+=
r[a],a<t.length&&(n+=Zv(t[a]));return new Dv(n)},urlEncode:e=>encodeURIComponent(e==null?"":ut(e)),now:()=>new Date().toISOString().
slice(0,19)+"Z",nextOccurrence:wE,byId:()=>{}},KA={forEach:!0,filter:!0,map:!0,reduce:!0,times:!0,every:!0,some:!0,find:!0,
findIndex:!0,count:!0,groupBy:!0,sumBy:!0},GA=new Set([...Object.keys(Pl),...Object.keys(KA)]),kj=new Set(Object.keys(Pl).
filter(e=>!Vv.has(e))),wp=e=>typeof e=="function"?e:t=>e[t],ec=(e,t)=>(r,n)=>Object.prototype.hasOwnProperty.call(t,r)?t[r]:
e(r,n),Xv=e=>{let t={},r=ec(wp(e),t),n=EA();return{dc:r,setter:(i,o)=>{t[i]=o,Bv(n)},memo:n}},JA=async(e,t,r)=>{let n=gp(
e);if(M(n))return n;let a=Xv(t);return a.asyncHosts=r.asyncHosts,a.syncHosts=r.syncHosts,di(n.right,a)},di=async(e,t)=>{
var r;if(Ol(e)&&e.operator===";"){let n=await di(e.left,t);return M(n)?n:di(e.right,t)}if(Ol(e)&&e.operator==="="){let n=await di(
e.right,t);if(M(n))return n;let a=et(n),i=qv(e.left,a,t,cn);return M(i)?i:R(a)}if(cv(e)){if((r=t.letBound)!=null&&r.has(
e.id))return Ne(Tt(`Cannot redeclare let binding '${e.id}'`,e));let n=await di(e.init,t);if(M(n))return n;let a=et(n);return e.
body?di(e.body,Yv(t,e.id,a)):R(a)}if(Vl(e)&&xr(e.callee)&&t.asyncHosts&&e.callee.name in t.asyncHosts){let n=e.callee.name;
for(let i of e.arguments)if(Ml(i,t.asyncHosts))return Ne(Tt(`Async host call '${n}' has an argument that itself contains\
 an async host call. Async host calls must appear at statement top-level or as the RHS of an assignment, not nested insi\
de other expressions. Bind the inner result to a variable first.`,e));let a=[];for(let i of e.arguments){let o=oe(i,t,cn);
if(M(o))return o;a.push(et(o))}try{let i=await t.asyncHosts[n](...a);return R(i)}catch(i){let o=i instanceof Error?i.message:
String(i);return Ne(Tt(`Error invoking async host '${n}': ${o}`,e))}}return t.asyncHosts&&Ml(e,t.asyncHosts)?Ne(Tt("Asyn\
c host call appears nested inside another expression. Async host calls must appear at statement top-level or as the RHS \
of an assignment. Bind the inner result to a variable first.",e)):oe(e,t,cn)},ZA=new Set(["parent"]),Ml=(e,t)=>{if(Vl(e)&&
xr(e.callee)&&e.callee.name in t)return!0;for(let r of Object.keys(e)){if(ZA.has(r))continue;let n=e[r];if(ey(n)){if(Ml(
n,t))return!0}else if(Array.isArray(n)){for(let a of n)if(ey(a)&&Ml(a,t))return!0}}return!1},ey=e=>typeof e=="object"&&e!==
null&&typeof e.type=="string";var XA=(e,t)=>{var r;let n=new Map;for(let i of e){let o=t.get(i);if(!o)continue;let s=n.get(o.y);s?s.add(o.x):n.set(o.y,
new Set([o.x]))}let a=[];for(let i of[...n.keys()].sort((o,s)=>o-s)){let o=[...(r=n.get(i))!=null?r:[]].sort((c,u)=>c-u),
s=o[0],l=o[0];for(let c of o.slice(1)){if(c===l+1){l=c;continue}a.push({y:i,startCol:s,span:l-s+1}),s=c,l=c}o.length>0&&
a.push({y:i,startCol:s,span:l-s+1})}return a},QA=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)if(e.has(r))return!1;
return!0},ty=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)e.add(r)},e$=(e,t)=>{let r=e.get(t.y);r||(r=[],e.set(
t.y,r));for(let a=0;a<r.length;a+=1)if(QA(r[a],t))return ty(r[a],t),a;let n=new Set;return ty(n,t),r.push(n),r.length-1},
t$=(e,t)=>{let r=new Map;for(let i of t)r.set(i.index,{x:i.x,y:i.y});let n=new Map,a=[];for(let i of e)for(let o of XA(i.
slots,r))a.push({recordKey:i.recordKey,...o,lane:e$(n,o)});return a};var r$=e=>e,Qv=k(r$,e=>e.objects),eb=k(Qv,e=>Fn(e,t=>t.type)),n$=k(Qv,e=>Fc(Fn(e,t=>t.type),t=>bt(t,r=>r.id)));var Rd="__span",Od=e=>{if(typeof e!="object"||e===null)return;let t=e[Rd];if(!(typeof t!="object"||t===null))return t},a$=/^\d{4}-\d{2}-\d{2}([T ]|$)/,
tc=e=>{if(!(!e?.startField||!e?.axis))return{startField:e.startField,axis:e.axis,endField:e.endField,mode:e.mode==="once"?
"once":e.mode==="grid"?"grid":"repeat",slots:e.slots}},gi=(e,t)=>ir(e)&&!ir(t)?Qn(e,ry(t)):ir(t)&&!ir(e)?Qn(ry(e),t):Qn(
e,t),ry=e=>{if(typeof e!="string"||!a$.test(e))return e;try{return Ve.PlainDate.from(e)}catch{return e}},ny=(e,t)=>{let r=e[t.
startField];if(r==null||r==="")return;let n=t.endField?e[t.endField]:void 0;return n!=null&&n!==""?gi(n,r)<0?{start:r,end:r}:
{start:r,end:n}:{start:r,end:r}},Tp=(e,t)=>gi(e.start,t)<=0&&gi(e.end,t)>=0,i$=(e,t)=>gi(e.start,t)===0,o$=(e,t,r)=>r===
"once"?i$(e,t):Tp(e,t),s$=(e,t)=>{let r=gi(e.start,t)===0,n=gi(e.end,t)===0;return r&&n?"single":r?"start":n?"end":"midd\
le"},l$=(e,t,r)=>{let{dataType:n,sort:a,whereClause:i,scope:o,source:s,span:l}=t,c=eb(e)[n]||[];(o==="user"||o==="global")&&
s==="storage"&&(c=c.filter(v=>v._scope===o));let u=c$(c,tc(l),r),d=u$(u,i,r);if(!a)return d;let f=(Array.isArray(a)?a:[a]).
filter(v=>typeof v.field=="string"&&v.field.length>0);return f.length===0?d:[...d].sort((v,b)=>{for(let T of f){let S=v[T.
field],E=b[T.field],x=S==null,I=E==null;if(x&&I)continue;if(x)return 1;if(I)return-1;let D=T.direction==="desc"?-1:1,H=Qn(
S,E);if(H!==0)return D*H}return 0})},c$=(e,t,r)=>{if(!t)return e;if(t.mode==="grid"){let o=[];for(let s of e){let l=ny(s,
t);l&&o.push({...s,[Rd]:{start:l.start,end:l.end}})}return o}let n=r(t.axis,{});if(!Ee(n)||n.right===void 0)return[];let a=n.
right,i=[];for(let o of e){let s=ny(o,t);s&&o$(s,a,t.mode)&&i.push({...o,[Rd]:{start:s.start,end:s.end,position:s$(s,a)}})}
return i},u$=(e,t,r)=>t?e.filter(n=>{let a=r(t,n);return Ee(a)&&!!a.right}):e,Gr=k(V,B,(e,t)=>{let{scope:r,isIteration:n,
node:a}=t,{parent:i}=r,o=_v(e.def,a);if(o)return n&&i?B(e,_r([i.key,Cn(i.node,a)])):o.isRepeating?B(e,`${r.key}`):B(e,_r(
[r.key,Cn(r.node,o)]))}),d$=Si(Jr.unknown,"compute"),p$=Si(Jr.union([Jr.number,Jr.undefined]),"maxLength"),ay=Si(Jr.union(
[Jr.number,Jr.undefined]),"pageSize"),Yo=(e,t,r,n)=>{let a=r.isFormula?n(e,r.value,t.key):R(r.value);return Zl(a,r.targetCodec,
r.name)},f$=e=>{let t=k(V,Yx,B,(a,i,o)=>{let{node:s,scope:l}=o,c=s.data;if($l(c))if(o.isIteration){let d=Gr(a,o.key);if(d){
let f=r(a,d.key);if(Ee(f)&&Array.isArray(f.right))return R(f.right[l.index])}}else return R(l$(i,c,(f,h)=>e(a,f,l.key,h)));
let u=d$(s);return Yo(a,o,u,e)}),r=k(V,B,(a,i)=>{let{key:o}=i;if(i.node.type===na)return R(i.node.value);let l=mi(a)[o];
return l?R(l?.value):t(a,i.key)}),n=k(V,B,Jl,(a,i,o)=>{var s;let{key:l,node:c}=i,u=(s=o[l])==null?void 0:s.length,d=p$(c),
f=et(Yo(a,i,d,e)),h=c.data;if($l(h)){let T=r(a,i.key);if(Ee(T)&&Array.isArray(T.right)){let S=T.right.length,E=f!==void 0?
Math.min(S,f):S,x=ay(c),I=et(Yo(a,i,x,e));return R(u!==void 0?Math.min(E,u):I!==void 0?Math.min(E,I):E)}}let v=ay(c),b=et(
Yo(a,i,v,e));if(b!==void 0){if(u!==void 0){let T=f!==void 0?Math.min(u,f):u;return R(T)}return R(b)}return R(u!==void 0?
u:f??0)});return{selectValue:r,selectLength:n,selectComputedValue:t}},h$=new Set(["rand","generateId","today","dodgy","b\
yId","now"]),iy=new Set(Object.keys(mp)),m$=new Set(["includes","indexOf","lastIndexOf","slice","join","concat","split",
"toLowerCase","toUpperCase","trim","startsWith","endsWith","replace","replaceAll","substring","charAt","padStart","padEn\
d","repeat","toFixed","localeCompare"]),ar=e=>typeof e=="object"&&e!==null&&"type"in e&&typeof e.type=="string",g$=e=>{if(typeof e==
"string")return e.startsWith("@")?e.slice(1).trim():e},y$=e=>(typeof e=="string"?e:"").split(",").map(r=>r.trim()).filter(
Boolean),tb=e=>{let t=e.params;return Array.isArray(t)?t.filter(ar).filter(r=>r.type==="Identifier"&&typeof r.name=="str\
ing").map(r=>r.name):[]},oy=(e,t)=>{var r;return ar(t)&&t.type==="ArrowFunctionExpression"?tb(t):(r=mp[e])!=null?r:[]},v$=(e,t,r,n=new Set)=>{
let a=new Set,i;try{i=ue(e)}catch{return{selfSafe:!1,deps:a}}let o=!0,s=()=>{o=!1},l=(u,d)=>{d.has(u)||u!=="$data"&&(n.has(
u)||s())},c=(u,d)=>{if(o){if(Array.isArray(u)){for(let f of u)c(f,d);return}if(ar(u))switch(u.type){case"Literal":return;case"\
Identifier":{typeof u.name=="string"&&l(u.name,d);return}case"ThisExpression":s();return;case"TaggedTemplateExpression":{
let f=u.tag;if(!(ar(f)&&f.type==="Identifier"&&f.name==="html"&&!d.has("html")&&!r.has("html"))){s();return}let v=u.quasi,
b=ar(v)?v.expressions:void 0;if(Array.isArray(b))for(let T of b)c(T,d);return}case"BinaryExpression":{let f=u.operator;if(f===
";"||f==="="){s();return}c(u.left,d),c(u.right,d);return}case"UnaryExpression":c(u.argument,d);return;case"ConditionalEx\
pression":c(u.test,d),c(u.consequent,d),c(u.alternate,d);return;case"MatchExpression":{let f=u.scrutinee;f!==void 0&&c(f,
d);let h=u.arms;if(!Array.isArray(h))return;for(let v of h){if(!ar(v))continue;let b=v.test;ar(b)&&b.type==="Identifier"&&
b.name==="_"||c(b,d),c(v.consequent,d)}return}case"MemberExpression":{c(u.object,d),u.computed&&c(u.property,d);return}case"\
ArrayExpression":{let f=u.elements;if(Array.isArray(f))for(let h of f)h!==null&&(ar(h)&&h.type==="SpreadElement"?c(h.argument,
d):c(h,d));return}case"ObjectExpression":{let f=u.properties;if(!Array.isArray(f))return;for(let h of f){if(!ar(h))continue;
if(h.type==="SpreadElement"){c(h.argument,d);continue}let v=!!h.computed,b=h.key;if(v&&c(b,d),h.shorthand){ar(b)&&b.type===
"Identifier"&&typeof b.name=="string"&&l(b.name,d);continue}c(h.value,d)}return}case"TemplateLiteral":{let{expressions:f}=u;
if(Array.isArray(f))for(let h of f)c(h,d);return}case"LetExpression":{let f=u.id;c(u.init,d);let h=u.body;h!==void 0&&c(
h,typeof f=="string"?new Set([...d,f]):d);return}case"ArrowFunctionExpression":c(u.body,new Set([...d,...tb(u)]));return;case"\
CallExpression":{let f=u.callee,h=u.arguments,v=Array.isArray(h)?h:[];if(ar(f)&&f.type==="Identifier"){let b=typeof f.name==
"string"?f.name:"";if(d.has(b)){s();return}if(iy.has(b)){v.forEach((T,S)=>{if(S===1){let E=new Set([...d,...oy(b,T)]),x=ar(
T)&&T.type==="ArrowFunctionExpression"?T.body:T;c(x,E)}else c(T,d)});return}if(r.has(b))a.add(b);else if(!GA.has(b)||h$.
has(b)){s();return}for(let T of v)c(T,d);return}if(ar(f)&&f.type==="MemberExpression"){if(f.computed){s();return}let b=f.
property,T=ar(b)&&typeof b.name=="string"?b.name:"";if(c(f.object,d),iy.has(T)){v.forEach((S,E)=>{if(E===0){let x=new Set(
[...d,...oy(T,S)]),I=ar(S)&&S.type==="ArrowFunctionExpression"?S.body:S;c(I,x)}else c(S,d)});return}if(!m$.has(T)){s();return}
for(let S of v)c(S,d);return}s();return}default:s();return}}};return c(i,new Set(t)),{selfSafe:o,deps:a}},b$=(e,t=new Set)=>{
let r=new Map,n=new Set;for(let l of e)r.has(l.name)&&n.add(l.name),r.set(l.name,l);let a=new Set([...r.keys()].filter(l=>!n.
has(l))),i=new Map;for(let l of a){let c=r.get(l),u=g$(c.compute);if(u===void 0){i.set(l,{selfSafe:!1,deps:new Set});continue}
i.set(l,v$(u,y$(c.parameters),a,t))}let o=new Set,s=!0;for(;s;){s=!1;for(let[l,c]of i)o.has(l)||!c.selfSafe||[...c.deps].
every(u=>o.has(u))&&(o.add(l),s=!0)}return o},sy=new WeakMap,rb=(e,t)=>{if(e.type===ra&&t.push({name:e.name,compute:e.compute,
parameters:e.parameters}),Array.isArray(e.children))for(let r of e.children)rb(r,t)},nb=(e,t)=>{if(e.type===na&&typeof e.
name=="string"&&t.add(e.name),Array.isArray(e.children))for(let r of e.children)nb(r,t)},w$=e=>{let t=sy.get(e);if(t)return t;
let r=[];rb(e,r);let n=new Set;nb(e,n);let a=b$(r,n);return sy.set(e,a),a},ly={objects:[]},gd=new Set,T$=(e,t,r,n,a)=>{let i=t.
scope,o=S=>{let E=r(e,S);if(Ee(E))return E.right},s=S=>{var E;if(Vg(i))return;let x=_r([i.key,S]),I=(E=mi(e)[x])==null?void 0:
E.value;if(I!==void 0)return I;let D=o(i.key);if(rt(D)){let H=D;if(S in H)return H[S]}},l=()=>{let S=i;for(;S;){let E=Od(
o(S.key));if(E)return E;S=S.parent}},c=()=>{let S=i;for(;S;){let E=Od(o(S.key));if(E)return u(S,E);S=S.parent}},u=(S,E)=>{
var x;let I=Fr(e,S.key);if(!Ee(I))return;let D=I.right,H=tc((x=D.node.data)==null?void 0:x.span);if(!H||H.mode!=="grid"||
!H.slots)return;let K;try{let te=dd(e.def,D.node,H.slots);K=Sl(e,S.key,te).key}catch{return}let J=n(e,K);if(!Array.isArray(
J))return;let L={start:E.start,end:E.end},ve=0;for(let te=0;te<J.length;te+=1){let Z=a(e,H.axis,`${K}[${te}]`);!Ee(Z)||Z.
right===void 0||Tp(L,Z.right)&&(ve+=1)}return ve},d=S=>{var E,x,I,D,H,K,J,L,ve,te,Z,Oe;if(S==="$index"){let ce=Vg(i)?void 0:
i.index;return R(ce)}if(S==="$parentIndex")return R((E=i.parent)==null?void 0:E.index);if(S==="$scopeKey")return R(i.key);
if(S==="$state")return R(e);if(S==="$data")return R(eb((x=e.repo)!=null?x:ly));if(S==="$spanStart"||S==="$spanEnd"||S===
"$spanPosition"){let ce=l();return R(S==="$spanStart"?ce?.start:S==="$spanEnd"?ce?.end:ce?.position)}if(S==="$spanLength")
return R(c());if(S==="$rows")return R(Ue=>{if(!Ut(Ue))return;let ft,st;try{let jt=dd(e.def,t.node,Ue),Rr=Sl(e,i.key,jt).
key;ft=n(e,Rr),st=o(Rr)}catch{return}if(Array.isArray(ft))return ft.map((jt,Rr)=>{let C=Array.isArray(st)?st[Rr]:void 0;
return rt(C)&&rt(jt)?{...C,...jt}:jt??C})});if(S==="$args")return R((I=up(e))!=null?I:{});if(S==="$speech"){let ce=Lr(e),
Ue=ce?.speech;return R(Ue??{text:null,lang:null})}if(S==="$variant"){let ce=Lr(e);return R(ce?.variant)}return S==="$now"?
R((D=Lr(e))==null?void 0:D.now):S==="$email"?R((H=Lr(e))==null?void 0:H.$email):S==="$username"?R((K=Lr(e))==null?void 0:
K.$username):S==="$userKey"?R((J=Lr(e))==null?void 0:J.$userKey):S==="$authKind"?R((L=Lr(e))==null?void 0:L.$authKind):S===
"$authUid"?R((ve=Lr(e))==null?void 0:ve.$authUid):S==="$connections"?R((te=Lr(e))==null?void 0:te.$connections):S==="$is\
OrgAdmin"?R((Z=Lr(e))==null?void 0:Z.$isOrgAdmin):S==="$orgUser"?R((Oe=Lr(e))==null?void 0:Oe.$orgUser):Ne("not_resolved")},
f=S=>{let E=Lr(e),x=E?.[S];return x!==void 0?R(x):Ne("not_resolved")},h=(S,E,x)=>{var I,D,H;if(gd.has(x)){let J=(I=mi(e)[x])==
null?void 0:I.value;return J!==void 0?J:s(S)}gd.add(x);try{let K=Fr(e,x);if(M(K))return s(S);let{key:J,node:L}=K.right;if(L.
type===ra&&E.isCall)return{__orgFunction:!0,compute:L.compute,parameters:L.parameters,key:J,memoSafe:w$(e.def).has(L.name)};
let ve=o(J);if(ap(L)){let{memberLookupContexts:te}=E,Oe=(L.isRepeating?((D=te[0])==null?void 0:D.type)==="computed":((H=
te[0])==null?void 0:H.type)!=="computed")?te.map(Ue=>Ue.property):void 0,ce=n(e,J,Oe);return ve===void 0?ce:Array.isArray(
ve)&&Array.isArray(ce)?ve.map((Ue,ft)=>{let st=ce[ft];return rt(st)&&rt(Ue)?{...st,...Ue}:Ue??st}):rt(ve)&&rt(ce)?{...ce,
...ve}:ve}else if(ve===void 0){let te=s(S);if(te!==void 0)return te}return ve}finally{gd.delete(x)}},v=(S,E,x=i)=>{var I;
return(I=b(S,E,x))==null?void 0:I.value},b=(S,E,x)=>{let{key:I,isDeclared:D}=Sl(e,x.key,S),H=K=>{var J;return(J=mi(e)[K])==
null?void 0:J.value};if(D){let K=h(S,E,I);if(K!==void 0)return{value:K,isStored:H(I)!==void 0}}else if(x.parent){let K=H(
I);if(K!==void 0)return{value:K,isStored:!0};let J=b(S,E,x.parent);if(J?.isStored)return J;let L=h(S,E,I);if(L!==void 0)
return{value:L,isStored:!1};if(J!==void 0)return J}else{let K=h(S,E,I);if(K!==void 0)return{value:K,isStored:H(I)!==void 0}}},
T=(S,E)=>{var x,I;return!Ut(S)||!Ut(E)||(I=n$((x=e.repo)!=null?x:ly)[S])==null?void 0:I[E]};return(S,E)=>{let x=d(S);if(Ee(
x))return x.right;let I=f(S);if(Ee(I))return I.right;let D=dd(e.def,t.node,S),H=v(D,E);if(H!==void 0)return H;if(S==="by\
Id")return T}},k$=e=>{let t=o=>o.type===hr&&o.isRepeating?[o]:[],r=o=>us(o).concat(t(o)),n=k(B,o=>r(o.node)),a=k(V,B,(o,s)=>{
if(s.node.isOwnScope)return[B(o,`${s.key}[0]`)];let l=et(e(o,s.key));return Lc(l,c=>B(o,`${s.key}[${c}]`))}),i=k(V,B,(o,s)=>n(
o,s.key).map(l=>{let c=Cn(o.def,l);return B(o,`${s.scope.key}.${c}`)}));return{selectChildIterationPointers:a,selectChildNodePointers:i}},
rc=e=>!!(e.node.isRepeating&&!e.isIteration),kp=e=>e.node.type===hr?e.node:{nodeTypes:{},rootType:""},ab=e=>ip(e.node)&&
!e.isIteration,S$=e=>!!e.node.isOwnScope&&!e.isIteration,ib=e=>{let{isIteration:t,node:r}=e;return t&&r.type===hr},pn=e=>e.
node.type===hr&&e.scope.node!==e.node,Ra=e=>pn(e)||ib(e),E$=e=>$x(e.node.type),_$=e=>{let{key:t,node:r}=e;return pn(e)?t:
`${t}.${r.name}`},cy=e=>Cx(e.node)&&!e.isIteration,x$=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),A$=e=>!(!ap(e.node)||
e.node.isRepeating||e.node.isOwnScope),$$=(e,t,r)=>{let n=(l,c,u,d=[])=>{var f;let{key:h,node:v}=c,b=d.length?d.slice(1):
[];if(!v.isTransient){if(Tv(v)){let T=e(l,h);return Ee(T)?T.right:void 0}if(ab(c)&&!u){if(c.node.isOwnScope){let T=a(l,B(
l,`${h}[0]`),d);return d.length===0&&Object.keys(T).length===0?void 0:T}if(d.length&&/^\d+$/.test(d[0])){let T=d[0],S=B(
l,`${h}[${T}]`),E=a(l,S,b);return{[T]:E}}else if(c.node.isRecord){let T=(f=c.node.recordKey)!=null?f:"key",S=typeof c.node.
recordValue=="string"?c.node.recordValue:void 0,E=t(l,h);return S!==void 0&&E.length===0?void 0:E.reduce((x,I)=>{let{[T]:D,
...H}=a(l,I,b);if(typeof D!="string")return x;if(S===void 0)return x[D]=H,x;let K=H[S];return K!==void 0&&(x[D]=K),x},{})}else
return t(l,h).map(S=>a(l,S,b))}return a(l,c,d)}},a=(l,c,u)=>{let d={},f=u.length?u.slice(1):[],h=b=>{let{node:T}=b,{name:S}=T,
E=pn(b)&&c.node!==b.node,x=n(l,b,E,f);x!==void 0&&(A$(b)?Object.assign(d,x):d[S]=x)};if(u.length){let b=Fr(l,`${c.key}.${u[0]}`);
if(Ee(b))return h(b.right),d;if(typeof b.left=="string")return d}return r(l,c.key).forEach(h),d},i=(l,c,u)=>n(l,c,pn(c),
u),o=k(V,B,Dx,i),s=k(V,B,(l,c)=>{let u=i(l,c);return x$(u)?u:{}});return{selectOutput:o,selectOutputObject:s}};var R$=(e,t,r,n)=>n,Ar=k(V,it,Px,R$,(e,t,r="",n)=>{let a=ob(e,r),i=n?ec(wp(a),n):a;return Gv(t,i,n)}),ob=k(V,B,(e,t)=>T$(
e,t,gr,C$,(r,n,a)=>Ar(r,n,a))),O$=(e,t,r,n,a)=>{let i=ob(e,t),o=a?ec(wp(i),a):i;return JA(r,o,n)},{selectValue:gr,selectComputedValue:I$,
selectLength:Ia}=f$(Ar),{selectChildIterationPointers:sb,selectChildNodePointers:lb}=k$(Ia),{selectOutput:C$,selectOutputObject:Sp}=$$(
gr,sb,lb),Ca=e=>k(gr,t=>Zl(t,e,"value")),cb=e=>k(gr,t=>lA(t,e,"value")),N$=e=>k(I$,t=>Zl(t,e,"value")),Ep=cb(F),ub=Ca(pt.union(
[pt.undefined,pt.array(pt.string)])),P$=Ca(pt.union([pt.undefined,pt.array(pt.number)])),Rj=cb(pt.string),M$=Ca(mr),db=Ca(
$e),D$=Ca(pt.union([pt.undefined,In])),j$=N$(pt.union([pt.undefined,In])),L$=Ca(pt.union([pt.undefined,Ul])),_p=Ca(A_),U$=(e,t,r,n)=>Zl(
Ar(e,r,t.scope.key),n,r),Mt=k(V,B,(e,t)=>ab(t)?sb(e,t.key):lb(e,t.key)),pb=k(V,B,(e,t)=>{let r=S$(t)?`${t.key}[0]`:t.key;
return Mt(e,r)}),fs=k(V,Gr,jx,(e,t,r=zo)=>{if(t)return r?.(t)?t:fs(e,t.key,r)}),Ij=k(V,B,Gr,(e,t,r)=>r?Mt(e,r.key):[t]),
fb=k(V,B,pp,(e,t,r)=>{if(t.key===r.key)return!0;let n=Gr(e,r.key);return n?fb(e,t.key,n.key):!1}),_=(e,t,r)=>{let n=Si(e,
t,r),a=k(rA,F$.has(t)?i=>B$(n(i)):n);return k(V,B,a,(i,o,s)=>Yo(i,o,s,Ar))},F$=new Set(["htmlTemplate"]),B$=e=>!e.isFormula&&
hb.string.is(e.value)&&pv(e.value)?{name:e.name,isFormula:!0,value:Qd(ep(e.value)),targetCodec:e.targetCodec}:e,H$=_(hs.string,
"label",e=>vv(e.name)),W$=_(hs.unknown,"iterationLabel"),q$=k(V,B,W$,(e,t,r)=>{let{node:n}=t;if(M(r))return r;let a=r.right;
if(a!=null&&a!=="")return R(String(a));let i=Hx(n);return U$(e,t,i,hs.string)}),xp=k(V,B,(e,t)=>{let{key:r,isIteration:n}=t;
return n?q$(e,r):H$(e,r)}),V$=(...e)=>t=>e.every(r=>r(t)),yd=(e,t)=>e===t?e:V$(e,t),mb=(e,t)=>({direction:e.direction,include:yd(
e.include,t.include),traverseChildren:yd(e.traverseChildren,t.traverseChildren),traverseParent:yd(e.traverseParent,t.traverseParent)}),
gb=e=>(t,r)=>{let n=Gr(t,r.key);if(!n)return;let a=Mt(t,n.key),i=a.indexOf(r);if(i===-1)return;let s=a[i+(e==="back"?-1:
1)];if(s)return s},Y$=gb("forward"),z$=gb("back"),yb=(e,t,r)=>{if(!r.traverseChildren(t))return t;let n=Mt(e,t.key),a=Ns(
n);return a?yb(e,a,r):t},K$=(e,t,r)=>{let n=z$(e,t);return n?yb(e,n,r):Gr(e,t.key)},vb=(e,t,r)=>{let n=Y$(e,t);if(n)return n;
let a=Gr(e,t.key);if(a&&r.traverseParent(a))return vb(e,a,r)},bb=k(V,B,Sv,(e,t,r=Yl)=>K$(e,t,r)),Ap=k(V,B,Sv,(e,t,r=Yl)=>{
if(r.traverseChildren(t)){let n=Mt(e,t.key);if(n.length>0)return n[0]}return vb(e,t,r)}),yi=e=>{let{node:t}=e;switch(t.type){case"\
screen":return!0;default:return!1}},G$=k(V,e=>Mt(e,"").filter(yi)),ms=(e,t,r)=>{let n=r.direction==="back"?bb(e,t,r):Ap(
e,t,r);if(n)return r.include(n)?n:ms(e,n.key,r)},wb=(e,t,r)=>{let n=[],a=t;for(;a!==void 0;){let i=r.direction==="back"?
bb(e,a,r):Ap(e,a,r);if(!i)break;r.include(i)&&n.push(i),a=i.key}return n},nc=e=>k(V,it,(t,r)=>ms(t,r,e)),Mj=nc(Pn({include:yi,
direction:"back"})),J$=nc(Pn({include:yi,direction:"forward"})),Z$=k(V,it,(e,t)=>{let r=fs(e,t,yi);if(!r){let n=Ap(e,"",
Yl);return n||fp(e)}return r}),Tb=k(V,cp,(e,t)=>{let r=Fr(e,t);return M(r)?(console.warn(`[orgicore] cursor "${t}" does \
not resolve in the current app def \u2014 falling back to the home screen (${r.left}).`),fp(e)):r.right}),$p=k(V,Tb,(e,t)=>{
if(yi(t))return t;let r=fs(e,t.key,yi);return r||J$(e,t.key)||fp(e)}),Dj=k(lp,e=>Ns(e)),X$=k(V,$p,(e,t)=>Z$(e,t.key).key),
Q$=e=>Pn({traverseParent:t=>e!==t}),eR=k(B,Q$),tR=k(eR,e=>mb(e,Pn({include:E$}))),rR=_(Oy,"variant","basic"),nR=_(S_,"va\
riant"),aR=_(mr,"pageSize"),iR=_(mr,"maxLength"),kb=_($e,"required"),oR=_($e,"hidden"),sR=_(le(Dd),"size"),lR=_(le(ln(zd)),
"validation"),cR=_(le(Yd),"imageOutputOptions"),uR=_(F,"pluginName"),Sb={maxColumns:1},dR=_(Hd,"layout",Sb),Na=k(B,oR,(e,t)=>{
let{node:{type:r}}=e;return(r===Ti||r===ra||r===na)&&Ee(t)&&t.right===void 0?R(!0):t}),pR=k(B,dR,(e,t)=>e.isIteration?R(
Sb):t),fR=_(Ly,"formConfig"),Fj=_(qd,"containerStyle",ky),Bj=_(bi,"data",ky),hR=_(le(_i.array(jl)),"pluginParams"),xi=k(
xp,Na,(e,t)=>({label:e,hidden:t})),Rp=k(gr,kb,(e,t)=>M(t)?t:M(e)?R(!1):R(!!t.right&&Eb(e.right))),Op=k(V,B,lR,gr,(e,t,r,n)=>{
if(M(r))return r;if(M(n)||Eb(n.right))return R(void 0);let a=OE(r.right);for(let i of a){let o=Ar(e,i.expression,t.scope.
key);if(M(o))return Ne(`error evaluating validation rule "${i.expression}": ${o.left}`);if(!o.right)return R(mR(e,i.errorMessage,
t.scope.key))}return R(void 0)}),mR=(e,t,r)=>{if(!t.startsWith(Aa))return t;let n=Qd(t),a=Ar(e,n,r);return M(a)||a.right==
null||a.right===""?n:String(a.right)},gR=_(F,"help"),yR=_(F,"placeholder"),vR=_(F,"deepHelp"),bR=_(le(_i.array(_i.string)),
"examples"),wR=_($e,"aiEnabled"),Eb=e=>typeof e=="string"?e.trim()==="":Array.isArray(e)?e.length===0:e==null,ac=k(xi,Rp,
kb,Op,gR,yR,vR,bR,sR,wR,(e,t,r,n,a,i,o,s,l,c)=>({...e,missingRequired:t,required:r,errorMessage:n,help:a,placeholder:i,deepHelp:o,
examples:s,size:l,aiEnabled:c})),_b=k(ac,P$,(e,t)=>({...e,value:t})),xb=k(ac,ub,(e,t)=>({...e,value:t})),Ab=k(xi,D$,j$,fR,
(e,t,r,n)=>({...e,currentValue:t,computedValue:r,config:n})),TR=_(s_,"variant","single"),kR=_(Ud,"idiom","select"),SR=_(
_i.array(Fy),"pickerValues"),ER=e=>typeof e=="string"?{id:e,label:e}:e,_R=k(SR,e=>M(e)?e:R(e.right.map(ER))),ic=k(ac,TR,
_R,(e,t,r)=>({...e,variant:t,pickerValues:r})),xR=k(ic,Ep,kR,(e,t,r)=>({...e,value:t,idiom:r})),AR=k(ic,ub,(e,t)=>({...e,
value:t})),$R=e=>pn(e)?"":`${e.key}.`,$b=e=>t=>`${$R(t)}${e}`,RR=$b("value"),OR=$b("expanded"),IR=k(B,RR),CR=k(B,OR),Ip=k(
V,IR,L$),Rb=k(V,CR,db),Ob=k(B,xi,Ip,Rb,(e,t,r,n)=>{let a=pn(e);return{...t,value:r,expanded:n,isRoot:R(a)}}),Hj=k(xi,be),
Wj=k(ac,be),NR=k(Ab,be),qj=k(_b,be),Vj=k(xb,be),Yj=k(ic,be),zj=k(xR,be),Kj=k(AR,be),PR=k(Ob,be),MR=k(uR,hR,(e,t)=>({name:e,
params:t})),DR=k(MR,be),Gj=k(V,B,DR,(e,t,{name:r,params:n=[]})=>{let a={};for(let i of n)if(i.type==="static"&&(a[i.name]=
i.value),i.type==="dynamic"){let o=Ar(e,i.formula,t.scope.key);if(M(o))return Ne(`Error evaluating plugin "${r}" param "${i.
name}": ${o.left}`);a[i.name]=o.right}return R(a)});var Jj=k(V,B,aR,iR,(e,t,r,n)=>{let{node:a,key:i,isIteration:o}=t;if(o)return;let s=et(r),l=et(n);if(s===void 0)return;let c=l??
1/0,u=a.data;if($l(u)){let f=gr(e,i);if(Ee(f)&&Array.isArray(f.right)){let h=f.right.length;c=l!==void 0?Math.min(h,l):h}}
let d=et(Ia(e,i));return{currentLength:d,totalLength:c,hasMore:d<c,pageSize:s}}),vi={selectAppNodeVariant:_(g_,"variant",
"folder"),selectFlowStepVariant:_(y_,"variant","aiQuery"),selectHidden:Na,selectLabel:xp,selectMissingRequired:Rp,selectValidationError:Op},
Zj=_(F,"name"),Xj=_(F,"label"),Qj=_($e,"isRepeating"),eL=_($e,"isOwnScope"),tL=_($e,"isRecord"),rL=_(F,"recordKey"),nL=_(
F,"recordValue"),aL=_(se.unknown,"compute"),iL=_($e,"isDerived"),oL=_($e,"isTransient"),sL=_(mr,"maxLength"),lL=_(mr,"pa\
geSize"),jR=_(le(Wd),"place"),LR=_(le(Hd),"layout"),UR=_(le(qd),"containerStyle"),FR=_(F,"submitObjectType"),BR=_(le(ln(
zd)),"validation"),HR=_($e,"required"),WR=_(F,"help"),qR=_(F,"placeholder"),cL=_(F,"deepHelp"),uL=_(le(se.array(se.string)),
"examples"),VR=_(le(Dd),"size"),YR=_($e,"aiEnabled"),zR=_(F,"iterationLabel"),KR=_(F,"nounLabel"),Cp=_(F,"icon"),Ib=_(F,
"color"),dL=_(le($y),"authMode"),pL=_($e,"orgLogin"),fL=_(F,"appLogo"),hL=_(le(ln(My)),"notifications"),mL=_(le(ln(Dy)),
"transitions"),gL=_(le(ln(jy)),"botActors"),yL=_(le(Ny),"theme"),vL=_(le(Vd),"themeColors"),bL=_(F,"customCss"),wL=_(mr,
"contentMaxWidth"),TL=_(le(Uy),"navigation"),kL=_(le(Vy),"library"),SL=_(le(Yy),"feature"),Cb=_($e,"hideHeader"),EL=_(le(
Ry),"variant"),GR=_($e,"showHeader"),JR=_($e,"collapsible"),ZR=_($e,"collapsedByDefault"),XR=_($e,"reorderable"),QR=_(F,
"orderField"),eO=_($e,"hideTopBar"),tO=_($e,"hideNav"),rO=_(F,"itemLabel"),nO=_(F,"summary"),Nb=_(mr,"min"),Pb=_(mr,"max"),
aO=_($e,"autoAdvance"),Mb=_(F,"actionLabel"),iO=_(F,"idleTitle"),oO=_(F,"idleDescription"),sO=_(F,"runningTitle"),lO=_(F,
"runningDescription"),cO=_(F,"authTitle"),uO=_(F,"authDescription"),dO=_(F,"noCreditsTitle"),pO=_(F,"noCreditsDescriptio\
n"),Db=_(F,"promptTemplate"),_L=_(F,"imageSource"),jb=_(F,"resultObjectType"),Lb=_(F,"typeDescription"),xL=_(le(se.union(
[Ll,se.string])),"model"),gs=_($e,"mockEnabled"),fO=_(mr,"mockResultCount"),hO=_(F,"mockResults"),mO=_(mr,"maxUserTurns"),
gO=_(F,"steeringChips"),yO=_($e,"voiceInput"),vO=_($e,"speakReplies"),bO=_(F,"speechLang"),wO=_(F,"inputPlaceholder"),TO=_(
F,"mockReplies"),kO=_(F,"fetchUrl"),Ub=_(F,"prompt"),SO=_(F,"mockImageUrl"),EO=_(F,"lyrics"),_O=_(mr,"durationSec"),xO=_(
F,"mockAudioUrl"),AO=_(F,"audioSourceUrl"),$O=_(F,"language"),RO=_(F,"mockTranscript"),AL=_(F,"sourceExpression"),OO=_(F,
"publishDataType"),IO=_(F,"publishScope"),CO=_(F,"publishVariant"),NO=_(F,"script"),$L=_(le(Fd),"functionName"),RL=_(F,"\
args"),PO=_(le(se.array(se.string)),"refreshCallables"),MO=_(F,"onSuccessNavigate"),DO=_(F,"successMessage"),jO=_(le(se.record(
se.string,By)),"nodeTypes"),LO=_(F,"rootType"),UO=_($e,"canAdd"),FO=_($e,"canEdit"),OL=_(le(jd),"textTransform"),BO=_(mr,
"step"),IL=_(le(se.union([Ld,se.string])),"format"),CL=_(le(se.union([Ud,se.string])),"idiom"),NL=_(F,"placeholderIcon"),
HO=_(le(Yd),"imageOutputOptions"),WO=_(F,"aiSystemPromptFormula"),qO=_(F,"userAvatarUid"),VO=_($e,"showCamera"),YO=_($e,
"showFilePicker"),zO=_($e,"showSearch"),KO=_($e,"showEdit"),GO=_($e,"showCommit"),JO=_($e,"multiple"),ZO=_(mr,"maxSizeMb"),
XO=_(F,"htmlTemplate"),QO=_(F,"purpose"),eI=_(le(se.record(se.string,Wy)),"actions"),tI=_(F,"parameters"),rI=_(F,"return\
s"),nI=_(F,"returnTypeHint"),PL=_(F,"pluginName"),ML=_(le(se.array(jl)),"pluginParams"),DL=_(F,"roomKey"),aI=_(F,"displa\
yName"),iI=_(F,"identity"),jL=_(le(Bd),"mediaMode"),oI=_(le(Py),"displayMode"),sI=_(mr,"maxTiles"),lI=_(F,"focusIdentity"),
cI=_(Ry,"variant","inline"),uI=_(se.unknown,"imageSource"),dI=_(le(se.union([Ll,se.string])),"model"),pI=_(le(se.union([
Ll,se.string])),"model"),fI=_(le(se.union([u_,se.string])),"model"),hI=_(le(se.union([l_,se.string])),"model"),mI=_(le(se.union(
[c_,se.string])),"model"),gI=_(se.unknown,"sourceExpression"),yI=_(Fd,"functionName"),vI=_(se.unknown,"args"),bI=_(Oy,"v\
ariant","basic"),wI=_(jd,"textTransform","none"),TI=_(le(se.union([Iy,se.string])),"variant"),kI=_(le(se.union([se.literal(
"checkbox"),se.literal("toggle")])),"variant"),SI=_(Ld,"format","date"),EI=_(le(se.union([o_,se.string])),"variant"),_I=_(
se.string,"placeholderIcon","person"),xI=_(se.string,"roomKey"),AI=_(Bd,"mediaMode","video"),$r=k(vi.selectLabel,vi.selectHidden,
jR,(e,t,r)=>({label:e,hidden:t,place:r})),Np=k(LR,UR,FR,(e,t,r)=>({layout:e,containerStyle:t,submitObjectType:r})),ys=k(
$r,BR,HR,WR,qR,VR,YR,vi.selectMissingRequired,vi.selectValidationError,(e,t,r,n,a,i,o,s,l)=>({...e,validation:t,required:r,
help:n,placeholder:a,size:i,aiEnabled:o,missingRequired:s,errorMessage:l})),$I=k(zR,KR,Cp,Ib,(e,t,r,n)=>({iterationLabel:e,
nounLabel:t,icon:r,color:n})),oc=k($r,Np,vi.selectAppNodeVariant,(e,t,r)=>({...e,...t,variant:r})),RI=k(oc,e=>({...e,variant:R(
"tabGroup")})),OI=k(oc,e=>({...e,variant:R("tab")})),II=k(oc,e=>({...e,variant:R("folder")})),LL=k($r,Np,Cp,Cb,(e,t,r,n)=>({
...e,...t,icon:r,hideHeader:n})),CI=k($r,Np,$I,cI,GR,JR,ZR,XR,QR,(e,t,r,n,a,i,o,s,l)=>({...e,...t,...r,variant:n,showHeader:a,
collapsible:i,collapsedByDefault:o,reorderable:s,orderField:l})),NI=k($r,eO,tO,(e,t,r)=>({...e,hideTopBar:t,hideNav:r})),
PI=k($r,rO,nO,Nb,Pb,(e,t,r,n,a)=>({...e,itemLabel:t,summary:r,min:n,max:a})),fn=k($r,vi.selectFlowStepVariant,aO,Mb,iO,oO,
sO,lO,cO,uO,dO,pO,(e,t,r,n,a,i,o,s,l,c,u,d)=>({...e,variant:t,autoAdvance:r,actionLabel:n,idleTitle:a,idleDescription:i,
runningTitle:o,runningDescription:s,authTitle:l,authDescription:c,noCreditsTitle:u,noCreditsDescription:d})),MI=k(fn,Db,
uI,jb,Lb,dI,gs,fO,hO,(e,t,r,n,a,i,o,s,l)=>({...e,variant:R("aiQuery"),promptTemplate:t,imageSource:r,resultObjectType:n,
typeDescription:a,model:i,mockEnabled:o,mockResultCount:s,mockResults:l})),DI=k(fn,Db,jb,Lb,pI,mO,gO,yO,vO,bO,wO,gs,TO,(e,t,r,n,a,i,o,s,l,c,u,d,f)=>({
...e,variant:R("aiChat"),promptTemplate:t,resultObjectType:r,typeDescription:n,model:a,maxUserTurns:i,steeringChips:o,voiceInput:s,
speakReplies:l,speechLang:c,inputPlaceholder:u,mockEnabled:d,mockReplies:f})),jI=k(fn,kO,(e,t)=>({...e,variant:R("fetchD\
ata"),fetchUrl:t})),LI=k(fn,Ub,fI,gs,SO,(e,t,r,n,a)=>({...e,variant:R("imageGeneration"),prompt:t,model:r,mockEnabled:n,
mockImageUrl:a})),UI=k(fn,Ub,EO,hI,_O,gs,xO,(e,t,r,n,a,i,o)=>({...e,variant:R("audioGeneration"),prompt:t,lyrics:r,model:n,
durationSec:a,mockEnabled:i,mockAudioUrl:o})),FI=k(fn,AO,mI,$O,gs,RO,(e,t,r,n,a,i)=>({...e,variant:R("transcribe"),audioSourceUrl:t,
model:r,language:n,mockEnabled:a,mockTranscript:i})),BI=k(fn,gI,OO,IO,CO,(e,t,r,n,a)=>({...e,variant:R("publishData"),sourceExpression:t,
publishDataType:r,publishScope:n,publishVariant:a})),HI=k(fn,NO,(e,t)=>({...e,variant:R("script"),script:t})),Fb=k($r,yI,
vI,Mb,PO,MO,DO,(e,t,r,n,a,i,o)=>({...e,functionName:t,args:r,actionLabel:n,refreshCallables:a,onSuccessNavigate:i,successMessage:o})),
Bb=k(ys,bI,wI,Ep,(e,t,r,n)=>({...e,variant:t,textTransform:r,value:n})),Hb=k(ys,TI,Nb,Pb,BO,M$,(e,t,r,n,a,i)=>({...e,variant:t,
min:r,max:n,step:a,value:i})),Wb=k(ys,kI,db,(e,t,r)=>({...e,variant:t,value:r})),qb=k(ys,SI,Ep,(e,t,r)=>({...e,format:t,
value:r})),Vb=k(ys,EI,_I,HO,WO,qO,VO,YO,zO,KO,GO,JO,ZO,_p,(e,t,r,n,a,i,o,s,l,c,u,d,f,h)=>({...e,variant:t,placeholderIcon:r,
imageOutputOptions:n,aiSystemPromptFormula:a,userAvatarUid:i,showCamera:o,showFilePicker:s,showSearch:l,showEdit:c,showCommit:u,
multiple:d,maxSizeMb:f,value:h})),Yb=k($r,XO,QO,eI,gr,(e,t,r,n,a)=>({...e,htmlTemplate:t,purpose:r,actions:n,value:a})),
zb=k($r,gr,(e,t)=>({...e,value:t})),Kb=k($r,tI,rI,nI,gr,(e,t,r,n,a)=>({...e,parameters:t,returns:r,returnTypeHint:n,value:a})),
Gb=k($r,gr,(e,t)=>({...e,value:t})),Jb=k($r,xI,aI,iI,AI,oI,sI,lI,(e,t,r,n,a,i,o,s)=>({...e,roomKey:t,displayName:r,identity:n,
mediaMode:a,displayMode:i,maxTiles:o,focusIdentity:s})),WI=(e,t)=>{if(e.type.includes(":")||e.type in t)return e.type;let r=Gy(
e.type);if(r.variant!==void 0)return`${r.type}:${r.variant}`;if(e.variant){let n=e.variant.includes(":")?e.variant.split(
":")[0]:e.variant;return`${e.type}:${n}`}return e.type};var sc=k(V,B,(e,t)=>{let{rootType:r,nodeTypes:n}=kp(t);if(pn(t))return r;let a=Ip(e,t.key);if(Ee(a)&&a.right)return WI(a.
right,n)}),qI=e=>e,Zb=k(qI,it,(e,t)=>{let{nodeTypes:r}=e,n=r[t];if(n){let{allowedChildTypes:a,category:i="",icon:o,color:s,
label:l}=n;return{allowedChildTypes:a,name:t,category:i,icon:o,color:s,label:l}}return{allowedChildTypes:[],name:t,category:""}}),
rs=k(B,sc,(e,t="")=>Zb(kp(e),t)),VI=k(rs,e=>e.allowedChildTypes),YI=k(B,VI,(e,t)=>t.map(r=>Zb(kp(e),r))),zI=k(sc,rs,Cp,(e,t,r)=>Ee(
r)&&r.right?r.right:t.icon||e||"objects"),KI=k(rs,Ib,(e,t)=>Ee(t)&&t.right?t.right:e.color||"#616161"),lc=k(V,B,(e,t)=>pn(
t)?Mt(e,t.key):ib(t)?Mt(e,`${t.key}.${t.node.name}`):[]),Xb=k(lc,e=>e.length>0),GI=k(B,Xb,(e,t)=>!t&&!pn(e)),JI=k(Mt,e=>e.
find(t=>t.node.type===hr)),Qb=k(V,B,(e,t)=>{let{scope:r}=t;return r.node.type!==hr?0:1+Qb(e,ps(r))}),ZI=k(V,it,(e,t)=>fs(
e,t,Ra)),XI=k(V,B,pp,(e,t,r)=>{let n=sc(e,t.key);if(!n)return[];let a=rs(e,r.key),i=[];a.allowedChildTypes.includes(n)&&
i.push("into");let o=ZI(e,r.key);return o&&rs(e,o.key).allowedChildTypes.includes(n)&&(i.push("before"),i.push("after")),
i}),FL=k(V,B,pp,(e,t,r,n)=>n,(e,t,r,n)=>{let a=XI(e,t.key,r.key),{mouseY:i,elementTop:o,elementBottom:s}=n,l=r.key;if(a.
length===0)return;let c=s-o,u=i-o<=10,d=s-i<=10,f=!u&&!d,h=i-o<=c/2,v=s-i<=c/2,b=a.includes("before"),T=a.includes("afte\
r");if(a.includes("into")&&f)return{target:l,action:"into",position:"center"};if(h&&b)return{target:l,action:"before",position:"\
top"};if(v&&T)return{target:l,action:"after",position:"bottom"}}),BL=nc(Pn({include:Ra,direction:"forward"})),HL=nc(Pn({
include:Ra,direction:"back"})),e0=k(V,Lx,(e,t)=>Pn({include:Ra,direction:t,traverseChildren:r=>{if(!Ra(r))return!0;let n=Rb(
e,r.key);return Ee(n)&&!!n.right}})),WL=k(V,it,(e,t)=>ms(e,t,e0(e,"forward"))),qL=k(V,it,(e,t)=>ms(e,t,e0(e,"back"))),YL=k(
V,e=>Sp(e,"")),QI=e=>k(Sp,t=>Uv(t,e,"output")),eC=k(V,B,(e,t)=>cy(t)?t:fs(e,t.key,cy)),zL=k(V,eC,(e,t)=>{if(!t||!t.node.
submitObjectType)return;let{scope:r,node:n,key:a}=t,i=Sp(e,a),o=Cn(e.def,n),s=d=>_r([r.key,`${o}$${d}`]),l=s("id"),c=s("\
createdAt"),u=s("createdBy");return{pointer:t,type:t.node.submitObjectType,idKey:l,createdAtKey:c,createdByKey:u,obj:i}}),
t0=k(V,tR,(e,t)=>mb(t,Pn({include:r=>{let n=bd(Rp(e,r.key),!1),a=!!bd(Op(e,r.key),void 0);return n||a}}))),tC=k(V,it,t0,
ms),rC=(e,t)=>M(Fr(e,t))?void 0:tC(e,t),GL=k(V,it,t0,wb),nC=k(V,it,(e,t)=>wb(e,t,Pn({traverseParent:zo,include:r=>{if(r.
node.type!==ki)return!1;let n=_p(e,r.key);if(M(n)||Array.isArray(n.right))return!1;let{url:a,previewUrl:i}=n.right;return!a&&
!!i}}))),JL=k(V,nC,(e,t)=>t.flatMap(r=>{let n=et(_p(e,r.key));return Array.isArray(n)?[]:[{pointerKey:r.key,value:n,imageOutputOptions:bd(
cR(e,r.key),void 0)}]})),aC=k(oc,be),iC=k(RI,be),oC=k(OI,be),sC=k(II,be),lC=k(CI,be),cC=k(NI,be),uC=k(PI,be),dC=k(fn,be),
pC=k(MI,be),fC=k(DI,be),hC=k(jI,be),mC=k(LI,be),gC=k(UI,be),yC=k(FI,be),vC=k(BI,be),bC=k(HI,be),wC=k(Fb,be),TC=k(Bb,be),
kC=k(Hb,be),SC=k(Wb,be),EC=k(qb,be),_C=k(Vb,be),xC=k(Yb,be),AC=k(zb,be),$C=k(Kb,be),RC=k(Gb,be),OC=k(Jb,be),r0=k(xi,jO,LO,
UO,FO,(e,t,r,n,a)=>({...e,nodeTypes:t,rootType:r,canAdd:n,canEdit:a})),IC=k(r0,be),CC=k(V,B,(e,t)=>{let{node:r,key:n}=t;
switch(q_(r.type)){case ns:let a=rR(e,n);return Ee(a)&&a.right==="stringArray"?xb(e,n):Bb(e,n);case is:return Wb(e,n);case as:
let i=nR(e,n);return Ee(i)&&i.right==="intArray"?_b(e,n):Hb(e,n);case os:return qb(e,n);case ki:return Vb(e,n);case ss:return ic(
e,n);case hr:return r.isRepeating?Ob(e,n):r0(e,n);case xa:return Yb(e,n);case Bl:return Ab(e,n);case Ti:return zb(e,n);case ra:
return Kb(e,n);case na:return Gb(e,n);case Br:return fn(e,n);case ql:return Fb(e,n);case Jd:return Jb(e,n);default:return xi(
e,n)}}),NC=k(V,$p,(e,t)=>{let r=Cb(e,t.key);return Ee(r)&&r.right===!0}),Ai=k(V,pb,(e,t)=>t.filter(r=>{let n=Na(e,r.key);
return!(Ee(n)&&n.right)})),uy={kind:"auto"},PC=40,MC=e=>e?.mode==="spatial",fi=(e,t,r)=>{if(typeof r=="number")return Number.
isFinite(r)?r:void 0;if(typeof r!="string")return;if(!r.startsWith("@")){if(r.trim()==="")return;let i=Number(r);return Number.
isFinite(i)?i:void 0}let n=Ar(e,Qd(r),t);if(!Ee(n))return;let a=n.right;return typeof a=="number"&&Number.isFinite(a)?a:
void 0},DC=k(V,B,pR,(e,t,r)=>{if(!Ee(r))return;let n=r.right;if(!MC(n))return;let a=fi(e,t.key,n.cols);if(a===void 0)return;
let i=Math.floor(a);if(i<1)return;let o=fi(e,t.key,n.rows),s=o!==void 0&&Math.floor(o)>=1?Math.floor(o):void 0,l=typeof n.
rowHeight=="number"&&Number.isFinite(n.rowHeight)&&n.rowHeight>0?n.rowHeight:void 0,c=typeof n.minColumnWidth=="number"&&
n.minColumnWidth>0?n.minColumnWidth:PC;return{cols:i,rows:s,rowHeight:l,minColumnWidth:c}}),dy=e=>e===void 0?1:Math.max(
1,Math.floor(e)),jC=(e,t)=>{let r=Math.min(Math.max(0,Math.floor(e.x)),t.cols-1),n=Math.max(0,Math.floor(e.y)),a=Math.min(
dy(e.w),t.cols-r),i=dy(e.h);return t.rows!==void 0&&(n=Math.min(n,t.rows-1),i=Math.min(i,t.rows-n)),a=Math.max(1,a),i=Math.
max(1,i),{kind:"placed",x:r,y:n,w:a,h:i}},LC=k(V,B,(e,t,r)=>r,(e,t,r)=>{let n=t.node.place,a=Wd.is(n)?n:void 0;if(!a)return uy;
let i=fi(e,t.key,a.x),o=fi(e,t.key,a.y);if(i===void 0||o===void 0)return uy;let s=fi(e,t.key,a.w),l=fi(e,t.key,a.h);return jC(
{x:i,y:o,w:s,h:l},r)}),UC=k(V,Ai,(e,t)=>t.flatMap(r=>rc(r)?n0(r)?[]:Mt(e,r.key).filter(n=>{let a=Na(e,n.key);return!(Ee(
a)&&a.right)}):[r])),n0=e=>{var t,r;return((r=tc((t=e.node.data)==null?void 0:t.span))==null?void 0:r.mode)==="grid"},FC=k(
Ai,e=>e.filter(t=>rc(t)&&n0(t))),BC=k(V,Ai,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{let a=t.find(o=>rc(o)&&o.node.name===r);if(!a)
return[];let i=[];return Mt(e,a.key).forEach((o,s)=>{let l=Na(e,o.key);if(Ee(l)&&l.right)return;let c=LC(e,o.key,n);c.kind===
"placed"&&i.push({index:s,x:c.x,y:c.y})}),i}),t6=k(V,(e,t)=>t,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{var a;let i=B(e,r),o=tc(
(a=i.node.data)==null?void 0:a.span);if(!o||o.mode!=="grid")return[];let s=BC(e,t,o.slots,n);if(s.length===0)return[];let l=HC(
e,t,o.slots),c=s.map(d=>{let f=l[d.index];if(f===void 0)return;let h=Ar(e,o.axis,f);return Ee(h)?h.right:void 0}),u=[];for(let d of Mt(
e,r)){let f=Na(e,d.key);if(Ee(f)&&f.right)continue;let h=gr(e,d.key),v=Ee(h)?Od(h.right):void 0;if(!v)continue;let b={start:v.
start,end:v.end},T=[];s.forEach((S,E)=>{let x=c[E];x!==void 0&&Tp(b,x)&&T.push(S.index)}),T.length>0&&u.push({recordKey:d.
key,slots:T})}return t$(u,s)}),HC=(e,t,r)=>{let n=Ai(e,t).find(a=>rc(a)&&a.node.name===r);return n?Mt(e,n.key).map(a=>a.
key):[]};var a0="@@orgicore/INIT_APP",i0="@@orgicore/INIT_APP_INSTANCE",o0="@@orgicore/UPDATE_DEF",s0="@@orgicore/UPDATE_CONTEXT_\
DATA",l0="@@orgicore/UPDATE_REPO",c0="@@orgicore/UPDATE_VALUE",u0="@@orgicore/CLEAR_VALUE",d0="@@orgicore/INSERT_SLOT",p0="\
@@orgicore/SWAP_SLOT",f0="@@orgicore/MOVE_SLOT",h0="@@orgicore/SET_CURSOR",m0="@@orgicore/PUSH_CURSOR",g0="@@orgicore/PO\
P_CURSOR",y0="@@orgicore/MOVE_NODE",v0="@@orgicore/REMOVE_NODE",b0="@@orgicore/CLEAR_SUBTREE",w0="@@orgicore/BULK_ACTION",
T0="@@orgicore/LOAD_MORE",Pp="@@orgicore/SET_PAGE",WC=(e,t)=>({type:a0,payload:{appDef:e,appInstance:t}}),qC=e=>({type:i0,
payload:{appInstance:e}}),VC=e=>({type:o0,payload:{appDef:e}}),YC=e=>({type:s0,payload:{data:e}}),zC=e=>({type:l0,payload:{
repo:e}}),KC=(e,t)=>({type:c0,payload:{pointerKey:e,value:t}}),GC=e=>({type:u0,payload:{pointerKey:e}}),JC=(e,t)=>({type:d0,
payload:{pointerKey:e,index:t}}),ZC=(e,t,r)=>({type:p0,payload:{pointerKey:e,fromIndex:t,toIndex:r}}),XC=(e,t)=>({type:f0,
payload:{pointerKey:e,toIndex:t}}),QC=(e,t)=>({type:h0,payload:{pointerKey:e,args:t}}),e2=(e,t)=>({type:m0,payload:{pointerKey:e,
args:t}}),t2=()=>({type:g0}),r2=(e,t,r)=>({type:y0,payload:{pointerKey:e,toPointerKey:t,target:r}}),n2=e=>({type:v0,payload:{
pointerKey:e}}),a2=e=>({type:b0,payload:{pointerKey:e}}),i2=e=>({type:w0,payload:{actions:e}}),o2=e=>({type:T0,payload:{
pointerKey:e}}),s2=(e,t)=>({type:Pp,payload:{pointerKey:e,page:t}});var py={initApp:WC,initAppInstance:qC,updateDef:VC,updateContextData:YC,updateRepo:zC,updateValue:KC,clearValue:GC,clearSubtree:a2,
insertSlot:JC,removeNode:n2,swapSlot:ZC,moveSlot:XC,setCursor:QC,pushCursor:e2,popCursor:t2,moveNode:r2,bulkAction:i2,loadMore:o2,
setPage:s2},l2=e=>{let t={};for(let r in py){let n=py[r];t[r]=(...a)=>e(n(...a))}return t},$t=(e,t)=>{let r=aa(e);return{
...e,instance:{...r,...t}}},k0=(e,t)=>{switch(t.type){case a0:return d2(e,t);case i0:return p2(e,t);case o0:return f2(e,
t);case s0:return h2(e,t);case l0:return m2(e,t);case c0:return g2(e,t.payload);case u0:return y2(e,t);case b0:return _0(
e,t.payload);case d0:return b2(e,t);case v0:return A0(e,t.payload);case p0:return w2(e,t.payload);case y0:return T2(e,t);case f0:
return Id(e,t.payload);case h0:return k2(e,t);case m0:return _2(e,t);case g0:return A2(e);case T0:return $2(e,t);case Pp:
return R0(e,t);case w0:return t.payload.actions.reduce((r,n)=>k0(r,n),e)}},c2=(e,t)=>{let r=t.payload.pointerKey;return B(
e,r)},S0=(e,t)=>{let r=Fr(e,t);if(M(r)){console.warn(`[orgicore] ignoring write to unresolvable pointer "${t}" \u2014 the nod\
e is not declared on the current app def (${r.left}).`);return}return r.right},u2=e=>t=>t.pointer===e.pointer?e:t,d2=(e,t)=>{
let{appDef:r,appInstance:n}=t.payload;return{...e,def:r,instance:n}},p2=(e,t)=>{let{appInstance:r}=t.payload;return{...e,
instance:r}},f2=(e,t)=>{let{appDef:r}=t.payload;return{...e,def:r}},h2=(e,t)=>{let{data:r}=t.payload;return{...e,context:{
...e.context,...r}}},m2=(e,t)=>{let{repo:r}=t.payload;return{...e,repo:r}},E0=(e,t,r)=>{let n=dn(e),a=Jl(e),i={pointer:t,
length:r};if(!a[t])return $t(e,{lengths:[...n,i]});let s=n.map(l=>l.pointer===t?i:l);return $t(e,{lengths:s})},g2=(e,t)=>{
let{value:r,pointerKey:n}=t,a=S0(e,n);if(!a)return e;let{key:i,scope:o,node:s}=a;if(s.isDerived)return e;let l=un(e),c={
pointer:i,value:r},d=mi(e)[i];if(!d){let v=hp(e,o.key).reduce((b,T)=>{if(ip(T.node)){let S=T.index+1,E=ps(T),x=et(Ia(e,E));
if(S>x)return E0(b,E,S)}return b},e);return $t(v,{data:[...l,c]})}if(d.value===r)return e;let f=l.map(u2(c));return $t(e,
{data:f})},cc=e=>(t,r,n)=>nA(e,t,r,n),y2=(e,t)=>{let r=S0(e,t.payload.pointerKey);if(!r)return e;let a=un(e).filter(i=>i.
pointer!==r.key);return $t(e,{data:a})},_0=(e,{pointerKey:t})=>{let r=v2(e,t),n=un(e),a=dn(e),i=n.filter(s=>!r.has(s.pointer)),
o=a.filter(s=>!r.has(s.pointer));return i.length===n.length&&o.length===a.length?e:$t(e,{data:i,lengths:o})},v2=(e,t)=>{
let r=new Set,n=a=>{if(!r.has(a)){r.add(a);for(let i of Mt(e,a))n(i.key)}};return n(t),r},x0=(e,t,r)=>{let n=[],a=new Set,
i=s=>{if(!a.has(s.key)){a.add(s.key),r(s)&&n.push(s.key);for(let l of Mt(e,s.key))i(l)}},o=Fr(e,t);return Ee(o)&&i(o.right),
n},b2=(e,t)=>{let{node:r,isIteration:n,key:a}=c2(e,t),{index:i}=t.payload,o=un(e),s=dn(e),l=Jl(e);if(!r.isRepeating||n)return e;
let c=cc(e),u=o.map(h=>{let{pointer:v}=h,b=ta(e,a,v);if(b>=i){let T=c(a,v,b+1);return{...h,pointer:T}}return h}),d=s.map(
h=>{let{pointer:v,length:b}=h;if(a===v)return{pointer:v,length:b+1};let T=ta(e,a,v);if(T>=i){let S=c(a,v,T+1),E=Nn(e,S);
return{length:b,pointer:ps(E)}}return h}),f=$t(e,{data:u,lengths:d});if(!l[a]){let h=dn(f);return $t(f,{lengths:[...h,{pointer:a,
length:1}]})}return f},Id=(e,{pointerKey:t,toIndex:r})=>{let n=Nn(e,t),a=n.key;if(!n.node.isRepeating)return e;let i=un(
e),o=dn(e),s=cc(e),l=n.index,c=Math.min(l,r),u=Math.max(l,r),d=i.map(h=>{let{pointer:v}=h,b=ta(e,a,v);if(b>=c&&b<=u){let T=b===
l?r:b>l?b-1:b+1,S=s(a,v,T);return{...h,pointer:S}}return h}),f=o.map(h=>{let{pointer:v}=h,b=ta(e,a,v);if(b>=c&&b<=u){let T=b===
l?r:b>l?b-1:b+1,S=s(a,v,T),E=Nn(e,S);return{...h,pointer:ps(E)}}return h});return $t(e,{data:d,lengths:f})},w2=(e,{fromIndex:t,
toIndex:r,pointerKey:n})=>{let a=Nn(e,n),i=a.key,o=un(e);if(!a.node.isRepeating)return e;let s=cc(e),l=o.map(c=>{let{pointer:u}=c,
d=ta(e,i,u);if(d===t||d===r){let h=s(i,u,d===t?r:t);return{...c,pointer:h}}return c});return $t(e,{data:l})},A0=(e,{pointerKey:t})=>{
var r;let{scope:n,isIteration:a,key:i}=B(e,t);if(!a){let h=`${t}[`,v=un(e).filter(T=>!T.pointer.startsWith(h)),b=dn(e).filter(
T=>T.pointer!==t&&!T.pointer.startsWith(h));return $t(e,{data:v,lengths:b})}let o=((r=Gr(e,i))==null?void 0:r.key)||"",s=un(
e),l=dn(e),c=n.index,u=cc(e),d=s.flatMap(h=>{let{pointer:v}=h,b=ta(e,o,v);if(b===c)return[];if(b>c){let T=u(o,v,b-1);return{
...h,pointer:T}}return h}),f=l.flatMap(h=>{let{pointer:v,length:b}=h;if(o===v){let S=h.length-1;return S===0?[]:{pointer:v,
length:S}}let T=ta(e,o,v);if(T===c)return[];if(T>c){let S=u(o,v,T-1),E=Nn(e,S);return{length:b,pointer:ps(E)}}return h});
return $t(e,{data:d,lengths:f})},T2=(e,t)=>{let{pointerKey:r,toPointerKey:n,target:a}=t.payload,i=B(e,r),o=Gr(e,i.key);if(!o)
return e;let s=B(e,n);if(!Ra(i)||!Ra(s)||i.key===s.key)return e;if(a==="into"){let l=_$(s),c=B(e,l);if(o.key===c.key)return e;
let[u]=fy(e,i,o,c);return u}if(a==="before"||a==="after"){if(pn(s))return e;let l=Gr(e,s.key);if(!l)return e;let c=i.scope.
index,u=s.scope.index,d=a==="before"?-1:0,f=a==="after"?1:0;if(o.key===l.key){if(c===u)return e;let b=c<u?d:f,T=u+b;return T===
c?e:Id(e,{pointerKey:i.key,toIndex:T})}let[h,v]=fy(e,i,o,l);if(e!==h){let b=u+f;return Id(h,{pointerKey:v,toIndex:b})}}return e},
fy=(e,t,r,n)=>{let{key:a,scope:i}=t;if(fb(e,a,n.key))return[e,a];let o=i.index,s=et(Ia(e,n.key)),l=Jl(e),c=un(e),u=dn(e),
d=`${n.key}[${s}]`,f=c.flatMap(T=>{if(ta(e,r.key,T.pointer)===o){let E=T.pointer.replace(a,d);return[T,{...T,pointer:E}]}
return T}),h=u.flatMap(T=>{if(n.key===T.pointer){let S=T.length+1;return{pointer:T.pointer,length:S}}if(T.pointer.startsWith(
a)){let S=T.pointer.replace(a,`${n.key}[${s}]`);return[T,{pointer:S,length:T.length}]}return T}),v=$t(e,{data:f,lengths:h});
if(!l[n.key]){let T=dn(v);v=$t(v,{lengths:[...T,{pointer:n.key,length:1}]})}return[A0(v,{pointerKey:a}),d]},k2=(e,t)=>{let{
pointerKey:r,args:n}=t.payload;return $t(e,n===void 0?{cursor:r}:{cursor:r,cursorArgs:n})},S2=new Set(["script","publish\
Data"]),E2=(e,t)=>{let r=mi(e);return x0(e,t,n=>n.node.type===Br&&typeof n.node.variant=="string"&&S2.has(n.node.variant)).
some(n=>{var a;let i=(a=r[n])==null?void 0:a.value;return typeof i=="object"&&i!==null&&i.status==="running"})},_2=(e,t)=>{
let{pointerKey:r,args:n}=t.payload;if(!r)return e;let a=cp(e),i=up(e),o=u=>x0(u,r,d=>d.node.type===Hl).filter(d=>!E2(u,d)).
reduce((d,f)=>_0(d,{pointerKey:f}),u);if(r===a&&x2(i,n))return o(e);let s=lp(e),l=xv(e),c=$t(e,{navStack:a?[...s,a]:s,navStackArgs:a?
[...l,i]:l,cursor:r,cursorArgs:n});return o(c)},x2=(e,t)=>{let r=e??{},n=t??{},a=Object.keys(r),i=Object.keys(n);return a.
length!==i.length?!1:a.every(o=>r[o]===n[o])},A2=e=>{let t=lp(e),r=xv(e),n=t.slice(0,-1),a=r.slice(0,-1),i=t[n.length]||
X$(e),o=r[n.length];return $t(e,{navStack:n,navStackArgs:a,cursor:i,cursorArgs:o})},$0=(e,t)=>{let r=B(e,t),{node:n,key:a,
scope:i}=r,o=n.pageSize;if(o===void 0)return;let s=typeof o=="number"?o:et(Ar(e,o,i.key))||0;if(s<=0)return;let l=n.maxLength,
c=l===void 0?void 0:typeof l=="number"?l:et(Ar(e,l,i.key)),u=c??1/0,d=n.data;if($l(d)){let h=gr(e,a);if(Ee(h)&&Array.isArray(
h.right)){let v=h.right.length;u=c!==void 0?Math.min(v,c):v}}let f=et(Ia(e,a));return{key:a,pageSizeValue:s,currentLength:f,
totalLength:u}},R0=(e,t)=>{let{pointerKey:r,page:n}=t.payload,a=$0(e,r);if(!a)return e;let i=(n+1)*a.pageSizeValue;return E0(
e,a.key,i)},$2=(e,t)=>{let{pointerKey:r}=t.payload,n=$0(e,r);if(!n)return e;let{currentLength:a,totalLength:i,pageSizeValue:o}=n;
if(a>=i)return e;let s=Math.ceil(a/o)-1;return R0(e,{type:Pp,payload:{pointerKey:r,page:s+1}})},R2=(e=ux,t={},r)=>{let n={
def:e,context:t,repo:r},i=l2(l=>{n=k0(n,l)}),o=()=>n;return i.getState=o,{api:i,getState:o,sel:l=>(...c)=>l(n,...c)}},O2=(e,t={})=>{
let{api:r,sel:n}=e,a=n(Fr);r.initAppInstance();let i=(o,s="")=>{Object.entries(o).forEach(([l,c])=>{var u;if(c!==void 0){
let d=_r([s,l]),f=a(d);if(M(f)){if(String(f.left).endsWith("not found"))return;throw new Error(String(f.left))}let h=f.right;
if(h.node.isRecord&&In.is(c)){let v=(u=h.node.recordKey)!=null?u:"key",b=h.node.recordValue;Object.entries(c).forEach(([
T,S],E)=>{i(typeof b=="string"?{[v]:T,[b]:S}:{[v]:T,...In.is(S)?S:{}},`${d}[${E}]`)})}else h.node.isRepeating&&IE.is(c)?
c.forEach((v,b)=>{Hc(v)?r.insertSlot(h.key,b):i(v,`${d}[${b}]`)}):h.node.isOwnScope?In.is(c)&&i(c,`${d}[0]`):r.updateValue(
h.key,c)}})};i(t)};var[r6,I2,n6]=Ei("App"),[a6,C2,i6]=Ei("Pointer"),O0=(e={})=>Ut(e)?{pointerKey:e}:e;var Cd=(e,t)=>{let r=Ip(e,t.key);if(!Ee(r)||r.right===void 0)return;let n=r.right,a=lc(e,t.key);if(a.length===0)return{...n};
let i=[];for(let o of a){let s=Cd(e,o);s&&i.push(s)}return{...n,_children:i}},[s6,l6]=Ei("AppData",{ctx:{}}),c6={createAppInstance:Wc(),
toOutputData:aa};var N2=(e,t)=>{switch(t){case"@root":return N0(e);case"@parent":return e.parentAppContext;case"@self":return e}return I0(
e,t)},I0=(e,t)=>e.name===t?e:e.parentAppContext?I0(e.parentAppContext,t):null,C0=(e,t)=>t===void 0||e.namespace===t?e:e.
parent?C0(e.parent,t):null,Mp=(e="@self")=>{let t=I2(),r=N2(t,e);if(!r)throw new Error(`App context not found for search\
 param ${e}`);return r},P2=e=>{let{namespace:t,pointerKey:r}=O0(e),{name:n}=Mp(t),a=C2();if(r)return{namespace:n,pointerKey:r};
let i=C0(a,n);if(!i)throw new Error(`Pointer context not found for namespace ${n}`);return i},M2=(e,t)=>{let{state:r}=Mp(
t);return e(r)},$i=e=>t=>M2(e,t),D2=e=>P2(e).pointerKey,j2=(e,t)=>{let r=D2(t),{state:n}=Mp(O0(t).namespace);return e(n,
r)},ee=e=>t=>j2(e,t),u6=ee(B),d6=ee(pb),p6=ee(Ai),f6=ee(DC),h6=ee(UC);var m6=ee(FC);var g6=ee(k(Ia,et));var y6=$i(cp),v6=$i(up),b6=$i(Tb),w6=$i($p),T6=$i(NC),k6=$i(G$);var S6=ee(xp);var E6=ee(CC),_6=ee(IC);var x6=ee(NR);var A6=ee(JI),$6=ee(Qb),R6=ee(lc),O6=ee(Xb),I6=ee(YI),C6=ee(GI),N6=ee(zI),P6=ee(KI),M6=ee(sc),D6=ee(PR),j6=ee(rC);var N0=e=>{let{parentAppContext:t}=e;return t?N0(t):e};var L6=ee(aC),U6=ee(iC),F6=ee(oC),B6=ee(sC),H6=ee(lC),W6=ee(cC),q6=ee(uC),V6=ee(dC),Y6=ee(pC),z6=ee(fC),K6=ee(hC),G6=ee(
mC),J6=ee(gC),Z6=ee(yC),X6=ee(vC),Q6=ee(bC),eU=ee(wC),tU=ee(TC),rU=ee(kC),nU=ee(SC),aU=ee(EC),iU=ee(_C),oU=ee(xC),sU=ee(
AC),lU=ee($C),cU=ee(RC),uU=ee(OC);var[dU,pU]=Ei("form");var jp=e=>e,F2=k(jp,e=>bt(e,t=>t.name)),B2=k(jp,e=>e.reduce((t,r)=>(t[r.name]={allowedChildTypes:[],icon:r.icon||"extens\
ion",color:r.color||"#9E9E9E",category:"plugins"},t),{})),H2=k(jp,e=>e.map(t=>t.name)),W2=k(F2,it,(e,t)=>e[t]),q2=[ns,as,
is,ki,os,ss,Ti,ra,na],V2=e=>{let t=[...q2,xa,"textContent","subsection",ql,...H2(e)],r=B2(e),n=["appNode:folder",Jo,ra,na];
return{app:{allowedChildTypes:n,icon:"dashboard",color:"#3468b2"},screen:{allowedChildTypes:["appNode:tabGroup","form","\
flow",hr,...t],icon:"laptop_mac",color:"#6c46b9",category:"layout"},form:{allowedChildTypes:[...t],icon:"edit_square",color:"\
#ba6d36",category:"layout"},"appNode:folder":{allowedChildTypes:n,icon:"folder",color:"#b8853d",label:"Folder"},"appNode\
:tabGroup":{allowedChildTypes:["appNode:tab"],icon:"tab_group",color:"#4650b9",category:"layout",label:"Tab Group"},"app\
Node:tab":{allowedChildTypes:[...t,hr],icon:"tab",color:"#5e66ba",label:"Tab"},content:{allowedChildTypes:[],icon:"html",
color:"#a6593f",category:"content",label:"Html Content"},textContent:{allowedChildTypes:[],icon:"newsmode",color:"#a1456\
3",category:"content"},subsection:{allowedChildTypes:["appNode:tabGroup","form","flow",hr,...t],icon:"mobile_layout",color:"\
#3686a1",category:"layout",label:"Container"},tree:{allowedChildTypes:[...t],icon:"account_tree",color:"#00695c",category:"\
layout"},flow:{allowedChildTypes:["flowStep:aiQuery","flowStep:aiChat","flowStep:fetchData","flowStep:imageGeneration","\
flowStep:audioGeneration","flowStep:transcribe","flowStep:publishData","flowStep:script","repeat","appNode:tabGroup","fo\
rm",...t],icon:"route",color:"#2e7d32",category:"layout",label:"Flow"},repeat:{allowedChildTypes:[Jo],icon:"repeat",color:"\
#558b2f",category:"layout",label:"Repeat"},"flowStep:aiQuery":{allowedChildTypes:[],icon:"smart_toy",color:"#1565c0",label:"\
AI Query Step"},"flowStep:aiChat":{allowedChildTypes:[],icon:"forum",color:"#0277bd",label:"AI Chat Step"},"flowStep:fet\
chData":{allowedChildTypes:[],icon:"cloud_download",color:"#00838f",label:"Fetch Data Step"},"flowStep:imageGeneration":{
allowedChildTypes:[],icon:"image",color:"#7b1fa2",label:"Image Generation Step"},"flowStep:audioGeneration":{allowedChildTypes:[],
icon:"music_note",color:"#b6488d",label:"Audio Generation Step"},"flowStep:transcribe":{allowedChildTypes:[],icon:"mic",
color:"#00695c",label:"Transcribe Step"},"flowStep:publishData":{allowedChildTypes:[],icon:"cloud_upload",color:"#4a148c",
label:"Publish Data Step"},"flowStep:script":{allowedChildTypes:[],icon:"code",color:"#5d4037",label:"Script Step"},callableButton:{
allowedChildTypes:[],icon:"smart_button",color:"#0277bd",category:"input",label:"Callable Button"},textInput:{allowedChildTypes:[],
icon:"text_fields",color:"#339199",category:"input"},numberInput:{allowedChildTypes:[],icon:"numbers",color:"#389475",category:"\
input"},booleanInput:{allowedChildTypes:[],icon:"check_box",color:"#ac3973",category:"input"},fileInput:{allowedChildTypes:[],
icon:"attach_file",color:"#a18636",category:"input"},temporalInput:{allowedChildTypes:[],icon:"schedule",color:"#8c47ae",
category:"input"},selectInput:{allowedChildTypes:[],icon:"arrow_drop_down_circle",color:"#ac4d39",category:"input"},variable:{
allowedChildTypes:[],icon:"data_object",color:"#5c8599",category:"input"},function:{allowedChildTypes:[],icon:"function",
color:"#7b1fa2",category:"input"},const:{allowedChildTypes:[],icon:"pin",color:"#455a64",category:"input"},...r}},Y2=e=>mv(
{t:gv({rootType:"app",nodeTypes:e,iterationLabel:"@(value.label || value.name || 'New ' + (value.variant || value.type))\
 + (value.isRepeating ? '[...]' : '')",nounLabel:"@value.variant || value.type",label:"App Config"})}),hy={anonOnly:"pub\
lic",hybrid:"public",userOnly:"private"},z2="data-degraded-node",K2=`<div ${z2}="true" role="alert" style="margin:8px 0;\
padding:8px 12px;border:1px solid #e6b800;border-radius:6px;background:#fff8e1;color:#8a6d00;font-size:0.875rem;">\u26A0\uFE0F Thi\
s part of the page couldn't be displayed.</div>`,G2=e=>({type:xa,name:e,htmlTemplate:K2}),J2=uc.intersection([uc.partial(
{value:Ul}),In]),Z2=QI(J2),X2=(e,t,r={})=>{let n=h=>{var v;let{t:b=[],value:T}=h,S=b.length>0?b.map(n):void 0,E;try{E=a(
T)}catch(I){if(!r.lenient)throw I;return G2((v=T.name)!=null?v:"unnamed")}let x={...E,children:S};return x.submitObjectType&&
(x.children||(x.children=[]),x.children=[...x.children,...hv()]),x},a=h=>{let v=i(h),b=N_.decode(v);if(ZE(b))return b.right;
let T=XE(b.left),S=kd(b.left),E=b.left.some(I=>I.context.some(D=>D.key==="columnBreaks")),x='Check that your node has a \
valid "type" property.';throw E&&(x="columnBreaks format mismatch. System expects number[] (e.g., [2, 5, 7]) but you pro\
vided responsive objects. Convert to legacy format or update types."),new Error(`\u{1F6A8} Design Node Error - ${T}
\u{1F4CD} Location: ${S||"root"}
\u{1F4A1} Fix: ${x}
\u{1F4CB} Node: ${JSON.stringify(v,null,2).substring(0,500)}`)},i=h=>{let v=o(h),{name:b="unnamed",id:T,...S}=v;return{name:b,
...S}},o=h=>{let{type:v,...b}=h,T=W2(t,v);if(T){let{parameters:E={},description:x,icon:I,image:D,...H}=b;if(CE.is(E))return{
type:xa,htmlTemplate:`@${v}(${T.parameters.map(K=>E[K.name||""]||"undefined").join(",")})`,pluginName:v,...H}}let S=Gy(v);
if(S.variant!==void 0)return{type:S.type,variant:S.variant,...b};if(v==="image"||v==="textContent")return{type:xa,...b};
if(!lx.is(v))throw new Error(`Invalid node type: ${v}`);if(v===Wl)return{...h,isRepeating:!0};if(v===Fl){let{appLogo:E,...x}=h,
I={type:v,...x},D=I.authMode;return D&&hy[D]&&(I={...I,authMode:hy[D]}),I}return h},s={def:Y2(V2(t)),instance:e},l=Z2(s,
"t");if(M(l))return Ne(`Invalid design node: ${l.left}`);let c=l.right,{value:u={type:"app",name:""},...d}=c,f={value:{...u,
name:""},...d};try{return R(n(f))}catch(h){return Ne(RE(h))}},Q2=e=>e!==void 0&&!(typeof e=="object"&&e!==null&&!Array.isArray(
e)&&Object.keys(e).length===0),Fo=e=>{var t;if(!e||!e.data||e.data.length===0)return;let r=(t=e.data.find(o=>o.pointer===
"value"))==null?void 0:t.value,n=Q2(r),i={def:mv({t:gv({rootType:"app",nodeTypes:{}})}),instance:e};if(n){let o=B(i,"t");
return Cd(i,o)}else{let o=B(i,"t"),s=lc(i,o.key);if(s.length===0)return;let l=[];for(let c of s){let u=Cd(i,c);u&&l.push(
u)}return{type:"folder",_children:l}}},D0=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.minClientVersion,
appConfig:Fo(e.appConfig),users:Fo(e.users),objectTypes:Fo(e.objectTypes),objectInstances:Fo(e.objectInstances),plugins:Fo(
e.plugins)}),j0=(e,t,r,n)=>{let{_children:a,...i}=e;if(r.push({pointer:`${t}.value`,value:i}),a&&a.length>0){r.push({pointer:`${t}\
.expanded`,value:!0});let o=`${t}.t`;n.push({pointer:o,length:a.length}),a.forEach((s,l)=>{let c=`${o}[${l}]`;j0(s,c,r,n)})}},
Bo=(e,t,r)=>{if(!e)return{};let n=[],a=[],{_children:i,...o}=e;o.type==="folder"&&Object.keys(o).length===1||n.push({pointer:"\
value",value:o}),i&&i.length>0&&(n.push({pointer:"expanded",value:!0}),a.push({pointer:"t",length:i.length}),i.forEach((c,u)=>{
j0(c,`t[${u}]`,n,a)}));let l={data:n,lengths:a};return t&&(l.cursor=t),r&&(l.navStack=r),l},eN=e=>({versionId:e.versionId,
apiVersion:e.apiVersion,minClientVersion:e.minClientVersion,appConfig:Bo(e.appConfig,e.appConfig?"t[0]":void 0),users:Bo(
e.users,e.users?"t[0]":void 0),objectTypes:Bo(e.objectTypes,e.objectTypes?"t[0]":void 0),objectInstances:Bo(e.objectInstances,
e.objectInstances?"t[0].t[0]":void 0),plugins:Bo(e.plugins,e.plugins?"t[0]":void 0)}),tN="\0ORGIGGLY_SANDBOXED_WIDGET\0",
hU=Rt.intersection([Rt.type({kind:Rt.literal("sandboxed-widget"),pluginName:Rt.string,params:Rt.UnknownRecord}),Rt.partial(
{embedsThirdPartyMedia:Rt.boolean,connections:Rt.array(fv),widgetOwner:Rt.string})]),rN=(e,t,{embedsThirdPartyMedia:r,connections:n,
widgetOwner:a}={})=>{let i={kind:"sandboxed-widget",pluginName:e,params:t,...r?{embedsThirdPartyMedia:!0}:{},...n?.length?
{connections:n}:{},...a!==void 0?{widgetOwner:a}:{}};return tN+JSON.stringify(i)};var nN=({name:e,htmlTemplate:t,parameters:r,runtime:n,embedsThirdPartyMedia:a,connections:i,widgetOwner:o})=>(...s)=>{let l=r.
reduce((c,u,d)=>(c[u.name||`param${d}`]=s[d],c),{});return n==="sandboxed"?rN(e,l,{embedsThirdPartyMedia:a,connections:i,
widgetOwner:o}):String(UA(ep(t),l))},aN=e=>e.reduce((t,r)=>(t[r.name]=nN(r),t),{});var iN=Q.intersection([Q.type({name:Q.string}),Ul]),oN=Q.intersection([Ul,In]),sN=Q.union([Q.literal("text"),Q.literal("\
number"),Q.literal("boolean"),Q.literal("temporal")]),mU=sN.types.map(e=>e.value);var lN=Q.type({pointer:Q.string,value:Q.unknown}),cN=Q.type({pointer:Q.string,length:Q.number}),Ho=Q.partial({cursor:Q.string,
navStack:Q.array(Q.string),data:Q.array(lN),lengths:Q.array(cN)}),gU=Q.intersection([Q.type({versionId:Q.string,appConfig:Ho,
users:Ho,objectTypes:Ho,objectInstances:Ho,plugins:Ho}),Q.partial({apiVersion:Q.string,minClientVersion:Q.number})]),uN=Q.intersection(
[Q.type({id:Q.string,pointer:Q.string,type:Q.union([Q.literal("user"),Q.literal("group")])}),Q.partial({name:Q.string,email:Q.string,
isAdmin:Q.boolean,usernames:Q.string})]);var dN=e=>e,L0=k(dN,e=>e.fields.filter(t=>bx.is(t))),U0=k(L0,e=>bt(e,t=>t.name)),bU=k(U0,it,(e,t)=>e[t]),pN=e=>{let t=e.
map(F0).filter(Fi);return da(["name",...t]).map(n=>`value.${n}`).join(" || ")},F0=e=>{let t=U0(e),r=t.name||t.Name;if(r)
return r.name;let n=L0(e)[0];return n&&(n.type==="text"||n.type==="number")?n.name:"id"};var B0=["type","_scope","_groupKey"],wU=new Set(B0);var fN=e=>Fi(e.type)&&Fi(e.id),hN=e=>e,H0=k(hN,e=>e.types),TU=k(H0,pN),mN=k(H0,e=>bt(e,t=>t.name)),gN=k(mN,it,(e,t)=>e[t]),
kU=k(gN,e=>e&&F0(e));var W0=e=>e,yN=k(W0,e=>e.nodes),vN=k(W0,e=>e.plugins),EU=k(yN,vN,(e,t)=>da([...e.map(r=>r.name),...t.map(r=>r.name)]));var bN=(e,t)=>({metaModel:e,repo:{objects:t}}),wN=e=>e,vs=e=>k(wN,t=>{let{data:r=[]}=t??{};return r.map(n=>Bc(n.value)?{
...n.value,pointer:n.pointer}:n.value).filter(e.is)}),TN=vs(O_),kN=vs(oN),SN=vs(vx),AU=vs(iN),Lp=vs(uN),q0=e=>e,V0=(e,{lenient:t}={})=>{
let r=e.versionId,n=e.apiVersion,a=SN(e.plugins),i=kN(e.objectInstances).filter(fN),o=X2(e.appConfig,a,{lenient:t});return M(
o)?o:R({appConfig:o.right,users:e.users,objectTypes:TN(e.objectTypes),objectInstances:i,plugins:a,versionId:r,apiVersion:n})},
EN=k(q0,e=>V0(e)),$U=k(q0,e=>V0(e,{lenient:!0})),Y0=e=>e,_N=k(Y0,e=>({types:e.objectTypes})),RU=k(Y0,_N,(e,t)=>bN(t,e.objectInstances)),
dc=e=>e,z0=e=>{let[t]=rp(e);return t},Up=e=>e.replace(/\.?value$/,""),K0=k(Lp,e=>bt(e,t=>Up(t.pointer)));var Fp=k(dc,K0,it,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,type:o,isAdmin:s}=n;if(o!=="group")return;let l=r?
Fp(e,z0(r)):void 0;return{id:a,name:i,parent:l,isAdmin:s}}),xN=k(dc,K0,it,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,
email:o,type:s,isAdmin:l}=n;if(s!=="user"||!o)return;let c=Fp(e,z0(r));return{id:a,name:i,email:o,parent:c,isAdmin:l}}),
G0=k(Lp,e=>Fn(e,t=>t.type)),J0=k(dc,G0,(e,t)=>(t.user||[]).flatMap(({pointer:a})=>{let i=xN(e,Up(a));return i?[i]:[]})),
OU=k(dc,G0,(e,t)=>t.group.flatMap(({pointer:n})=>{let a=Fp(e,Up(n));return a?[a]:[]})),AN=k(J0,e=>bt(e,t=>t.email)),$N=k(
J0,e=>bt(e,t=>t.name)),IU=k($N,it,(e,t)=>e[t]),CU=k(AN,it,(e,t)=>e[t]),my=e=>(e??"").split(/[\s,]+/).map(t=>t.trim().toLowerCase()).
filter(t=>t&&t!=="anon"),NU=k(Lp,it,(e,t)=>{var r;let n=t.trim().toLowerCase();if(!n||n==="anon")return;let a=e.find(i=>i.
type==="user"&&my(i.usernames).includes(n));if(a)return{id:a.id,name:(r=a.name)!=null?r:a.id,usernames:my(a.usernames)}});var PU=29*24*60*60*1e3;var RN=(e,t={})=>{var r,n,a,i;let o=EN(eN(e));if(M(o))throw new Error(`org config failed to decode: ${String(o.left)}`);
let s=o.right.appConfig,l=new Set(["storage","realtime","callable"].flatMap(E=>qx(s,E).map(x=>x.typeName))),c=[...new Set(
((r=t.records)!=null?r:[]).map(E=>E.type).filter(E=>!l.has(E)))];if(c.length)throw new Error(`orgPack: record type(s) ${c.
join(", ")} are not declared as a datasource by any node in this config \u2014 the live app would never load them. Declare a \
data node (e.g. a subsection with data: {dataType, source: "storage"}) or remove the fixture records.`);let u=((n=t.records)!=
null?n:[]).filter(E=>E.isDeleted!==!0),d={objects:[...o.right.objectInstances,...u]},f=t.plugins?{...aN(o.right.plugins),
...t.context}:(a=t.context)!=null?a:{},h=R2(s,f,d);O2(h,(i=t.init)!=null?i:{});let v=()=>h.getState(),b=[],T=E=>{let x=Na(
v(),E);return Ee(x)&&x.right===!0},S=E=>{let x=B(v(),E);for(;x;){if(T(x.key))return!1;x=Gr(v(),x.key)}return!0};return{...h,
evalAt:(E,x="")=>et(Ar(v(),E.startsWith("@")?E:`@${E}`,x)),value:E=>et(gr(v(),E)),lengthOf:E=>et(Ia(v(),E)),setValue:(E,x)=>{
h.api.updateValue(E,x)},clearValue:E=>{h.api.clearSubtree(E)},setCursor:(E,x)=>{h.api.setCursor(E,x)},isVisible:S,visibleChildren:E=>S(
E)?Ai(v(),E).map(x=>x.key):[],childKeys:E=>Mt(v(),E).map(x=>x.key),renderHtml:E=>{let x=B(v(),E).node.htmlTemplate;if(typeof x!=
"string")throw new Error(`no htmlTemplate at pointer "${E}"`);let I=ep(x);if(!I.startsWith("@"))return I;let D=et(Ar(v(),
I,E));if(D!==void 0&&typeof D!="string")throw new Error(`htmlTemplate at "${E}" evaluated to a non-string (${JSON.stringify(
D)}); the renderer rejects it. Wrap a html\`\u2026\` result in a template: @\`\${html\`\u2026\`}\``);return String(D)},widgetCommands:b,
nodeAt:E=>B(v(),E).node,runScriptAt:(E,x,I,D)=>{let H=I??B(v(),E).node.script;if(typeof H!="string"||H.length===0)throw new Error(
`no script found at pointer "${E}"`);let K=async(...L)=>{(L.length===1&&Array.isArray(L[0])?L[0]:L).map(Z=>{let Oe=Yg(v(),
E,String(Z));if(Oe===void 0)throw new Error(`clearValues: no node named "${String(Z)}" is in scope here`);return Oe}).forEach(
Z=>h.api.clearSubtree(Z))},J=async(L,ve,te)=>{let Z=Yg(v(),E,String(L));if(Z===void 0)throw new Error(`sendToWidget: no \
node named "${String(L)}" is in scope here`);if(!B(v(),Z).node.pluginName)throw new Error(`sendToWidget: "${String(L)}" \
is not a widget node`);b.push({widget:String(L),key:Z,command:String(ve),...te===void 0?{}:{args:te}})};return O$(v(),E,
H,{...x,asyncHosts:{clearValues:K,sendToWidget:J,...x.asyncHosts}},D)}}},ON=["id",...B0],gy=e=>Object.fromEntries(Object.
entries(e).filter(([t])=>!ON.includes(t))),yy=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),IN=(e=[])=>{let t=new Map(
e.map(({id:o,type:s,...l})=>[`${s}/${o}`,l])),r=[],n=(o,s)=>{let l=String(s);if(typeof s!="string"||l.split("/").some(c=>c.
length===0))throw new Error(`${o}: path "${l}" has an empty segment`);return l};return{writes:r,record:o=>t.get(o),asyncHosts:{
setRealtime:async(o,s)=>{if(n("setRealtime",o),!yy(s))throw new Error("setRealtime: `value` must be an object");let l=gy(
s);return r.push({kind:"set",path:String(o),value:l}),t.set(String(o),l),l},updateRealtime:async(o,s)=>{var l;if(n("upda\
teRealtime",o),!yy(s))throw new Error("updateRealtime: `patch` must be an object");let c=Object.keys(s);if(c.length===0)
throw new Error("updateRealtime: `patch` must have at least one field");if(c.some(f=>f.includes("/")))throw new Error("u\
pdateRealtime: patch top-level fields only");let u=gy(s);r.push({kind:"update",path:String(o),value:u});let d={...(l=t.get(
String(o)))!=null?l:{}};return Object.entries(u).forEach(([f,h])=>{h===null?delete d[f]:d[f]=h}),t.set(String(o),d),u}}}};var CN=(e,t,r)=>{if(t.size===0)return`No ${r}s declared. Add a declaration to satisfy the reference.`;let n=[...t].map(o=>({
p:o,d:Pv(e,o)})).sort((o,s)=>o.d-s.d),a=n[0];if(a&&a.d<=3)return`Closest ${r}: \`${a.p}\`. Either rename the reference or\
 add \`${e}\` to the org config.`;let i=n.slice(0,5).map(o=>o.p).join(", ");return`Available ${r}s: ${i}. Either rename \
the reference or add \`${e}\`.`};var NN=["objectType","objectInstance","field","plugin","record","user"],MU=new Set([...B_,...H_,...Object.keys(Zd),...NN,
...Object.keys(Ky)]);var PN=e=>e.includes(U_)||e.includes("$")||e.includes("@")||e.includes("{"),MN=e=>{var t;let n=(e.startsWith("/")?e.slice(
1):e).split(".");return((t=n[n.length-1])!=null?t:"").replace(/\[\d+\]$/g,"")};var ea=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",Z0=new Set(["navigate","replaceScreen","pushCursor","set\
Cursor"]),DN=new Set(["replaceScreen","setCursor"]);var Bp=e=>Array.isArray(e.arguments)?e.arguments:[],jN=e=>{if(!ea(e))return;let t=e.value;if(typeof t=="string")return t;
if(typeof t=="object"&&t!==null){let r=t.cooked;if(typeof r=="string")return r}},Hp=e=>{if(ea(e)){if(e.type==="Literal"&&
typeof e.value=="string")return e.value;if(e.type==="TemplateLiteral"&&Array.isArray(e.expressions)&&e.expressions.length===
0&&Array.isArray(e.quasis))return jN(e.quasis[0])}},LN=e=>(t,r)=>{var n;let a=[],[i,o]=Bp(t);if(i===void 0)return a.push(
{path:r.path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;ea(o)&&o.type==="Literal"&&a.push({path:r.
path,kind:"host-arg-type",message:`\`${e}\`'s second argument must be an object of nav args, not a literal.`,fixHint:`e.\
g. \`${e}('detail', {id: $params.id})\`.`,severity:"error"});let s=Hp(i);if(s!==void 0&&s.length===0)return a.push({path:r.
path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;if(s===void 0||r.navTargets===void 0||PN(
s))return a;let l=MN(s);return l.length===0?a:r.navTargets.has(l)?(DN.has(e)&&((n=r.flowBearing)==null?void 0:n.has(l))===
!0&&a.push({path:r.path,kind:"action-replace-into-flow",message:`\`${e}("${s}")\` replaces into a screen that contains a \
flow \u2014 replace skips the flow-state reset, so re-entering shows the previous run's completed step instead of a fresh flo\
w.`,fixHint:`Use \`navigate("${s}")\` (push resets flow state under the target and gives Back a nav-stack entry).`,severity:"\
warning"}),a):(a.push({path:r.path,kind:"missing-screen",message:`\`${e}("${s}")\` does not match any named node in appCo\
nfig \u2014 the call will fail at runtime.`,fixHint:CN(l,r.navTargets,"navigation target"),severity:"error"}),a)},UN=(e,t)=>Bp(
e).length===0?[]:[{path:t.path,kind:"host-arg-type",message:"`back()` takes no arguments \u2014 it always goes back one nav-s\
tack entry.",fixHint:"Use `back()`; to go to a specific screen use `navigate('screen')`.",severity:"warning"}],vd=(e,t)=>{
if(!ea(e)||e.type!=="ObjectExpression")return;let r=Array.isArray(e.properties)?e.properties:[];for(let n of r){if(!ea(n)||
n.type!=="Property"||n.computed===!0)continue;let a=n.key;if((ea(a)?a.type==="Identifier"&&typeof a.name=="string"?a.name:
Hp(a):void 0)===t)return n.value}},FN=e=>ea(e)?e.type==="ObjectExpression"?[e]:e.type==="ArrayExpression"&&Array.isArray(
e.elements)?e.elements.filter(t=>ea(t)&&t.type==="ObjectExpression"):[]:[],vy=(e,t)=>(r,n)=>{var a;let i=n.objectTypeFieldTypes,
[o]=Bp(r),s=Hp(vd(o,"type"));if(i===void 0||s===void 0)return[];let l=i.get(s);if(l===void 0)return[];let c=(a=[...l].find(
([,u])=>u.kind==="builtin"&&u.name==="parentRef"))==null?void 0:a[0];return c===void 0?[]:FN(vd(o,t)).filter(u=>vd(u,"_p\
arent")!==void 0).map(()=>({path:n.path,kind:"tree-mixed-parent-spellings",message:`${e} writes \`_parent\` on a \`${s}\`\
, but \`${s}\` declares the \`parentRef\` field \`${c}\`, so the tree reads only \`${c}\` and ignores \`_parent\`.`,fixHint:`\
Write the parent's id to \`${c}\` instead (\`${c}: <parent id>\`), or remove the \`parentRef\` field from \`${s}\` to use\
 the implicit \`_parent\` link everywhere.`,severity:"error"}))},DU=new Map([...[...Z0].map(e=>[e,LN(e)]),["back",UN],["\
publishData",vy("publishData","data")],["updateData",vy("updateData","patch")]]),jU=new RegExp(`\\b(?:${[...Z0].join("|")}\
)\\(`);var BN=X0.keyof({Person:null});var HN=N.intersection([N.type({name:N.string}),N.partial({type:N.string})]),Q0=N.intersection([N.type({name:N.string,fields:N.array(
HN)}),N.partial({description:N.string,wellKnown:BN})]),WN=N.keyof({appFeature:null,none:null}),qN=N.keyof({host:null,global:null,
user:null,group:null}),VN=N.partial({types:N.array(Q0),scope:qN,nav:WN,plugins:N.array(N.string)}),YN=N.intersection([N.type(
{screen:N.string,title:N.string}),N.partial({pic:N.string})]),zN=N.intersection([N.type({name:N.string,shape:N.union([N.string,
N.record(N.string,N.string)])}),N.partial({description:N.string})]),KN=N.intersection([N.type({types:N.array(N.string),screens:N.array(
N.string)}),N.partial({functions:N.array(N.string),plugins:N.array(N.string),nav:N.array(YN),notifications:N.array(N.string),
slots:N.array(zN)})]),GN=N.partial({entities:N.array(N.string),seedSlots:N.array(N.string),labels:N.array(N.string)});var JN=N.intersection([N.type({name:N.string,hostType:Q0,slot:N.string,fn:N.string}),N.partial({description:N.string})]),
ZN=N.intersection([N.type({id:N.string,version:N.number,description:N.string,requires:VN,provides:KN}),N.partial({params:GN,
seams:N.array(JN)})]),XN=N.partial({nav:N.array(N.unknown),navFolder:N.string,notifications:N.array(N.unknown)}),QN=N.partial(
{appConfig:N.array(N.unknown),objectTypes:N.array(N.unknown),objectInstances:N.array(N.unknown),plugins:N.array(N.unknown),
shell:XN}),LU=N.type({manifest:ZN,body:QN});var UU=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,
310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,
1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,
773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,
3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,
1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var ew=["flowStep:script","content:data-script","content:action"],pc=[{name:"publishData",async:!0,signature:'publishDat\
a({type: string, data: object | object[], scope?: "global" | "user" | "variant" | "group", variant?: string, groupKey?: \
string}): {id: string, ...} | [{id: string, ...}, ...]',description:'Publishes one record (when `data` is an object) or \
N records (when `data` is an array of objects) of the given object type. Returns the created record(s) with server-stamp\
ed `id`, `createdAt`, `createdBy` fields populated. Use the returned `id` to link related records \u2014 e.g. stamp a parent\'\
s id into each child by including it in the child\'s object literal. `scope` must match the partition the type is bound a\
t, and defaults to `"global"`: `"user"` writes the signed-in user\'s own partition, `"variant"` needs a `variant` key, an\
d `"group"` needs a `groupKey` naming which group to write into (a member can be in several at once, so it is never infe\
rred \u2014 a group publish with no key is refused rather than falling back to the shared collection).',availableIn:["fl\
owStep:script","content:data-script","content:action"],examples:['post = publishData({type: "TravelPost", data: {AuthorI\
d: whoAmI, Details: comment}})','publishData({type: "Photo", data: photos.map((p) => ({Image: p.url, postId: post.id}))}\
)',`publishData({type: "Prediction", data: $rows('matchRows').map((r) => ({id: r.id, score: r.score}))})`,'publishData({\
type: "CardState", data: {cardId: card.id, box: 2}, scope: "user"})','publishData({type: "Expense", data: {amount: total\
, paidBy: whoAmI}, scope: "group", groupKey: currentTab})']},{name:"createGroup",async:!0,signature:"createGroup({groupK\
ey: string, inviteCode?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string}",description:'Cre\
ates a membership group in this org and enrols the caller as its first `owner`, so they can immediately read and write t\
he group\'s `scope: "group"` data. Pass an `inviteCode` to mint a shareable join credential at the same time. Idempotent \
for the owner \u2014 calling it again returns the existing membership with `changed: false`, so a flow step the user can re-e\
nter is safe. Another user hitting an existing key is refused. Use this for a "start a new shared thing" step: a trip ta\
b, a household, a team.',availableIn:["flowStep:script","content:data-script","content:action"],examples:['tab = createG\
roup({groupKey: "tab-" + generateId(6), inviteCode: code})',"createGroup({groupKey: slug(tripName)})"]},{name:"joinGroup",
async:!0,signature:"joinGroup({inviteCode?: string, groupKey?: string, claimEmail?: string}): {groupKey: string, changed\
: boolean, role: string, addedAt: string, matchedBy?: string}",description:'Admits the caller to an existing group so it\
s `scope: "group"` data becomes readable and writable for them. Either an `inviteCode` (the code itself is the credentia\
l \u2014 enough on its own) or a `groupKey` plus the `claimEmail` the caller was invited under, which is matched against thei\
r signed-in identity. Returns `matchedBy` naming which invitation matched, and `changed: false` when they were already a\
 member, so re-running is safe. The caller\'s account is what gets recorded, so they must be signed in \u2014 an invitation ca\
n be addressed to an email or handle, but access is keyed on the account that claims it.',availableIn:["flowStep:script",
"content:data-script","content:action"],examples:["joined = joinGroup({inviteCode: enteredCode})","joinGroup({groupKey: \
$args.tab, claimEmail: myEmail})"]},{name:"leaveGroup",async:!0,signature:"leaveGroup({groupKey: string}): {groupKey: st\
ring, changed: boolean}",description:'Removes the caller from a group, which revokes their access to its `scope: "group"\
` data \u2014 the group\'s records drop out of `$data` for them. It deletes nothing: the other members keep the group and ever\
ything in it, so tombstone or un-claim your own records first if the flow calls for it. Leaving a group you are not in s\
ucceeds with `changed: false`, so a re-entered step is safe. Use this for a "leave this tab / household / team" step.',availableIn:[
"flowStep:script","content:data-script","content:action"],examples:["leaveGroup({groupKey: curTabId})"]},{name:"setAppVa\
lue",async:!0,signature:"setAppValue(key: string, value: any): void",description:"Writes an app-level value to the given\
 pointer key (relative to the app root). The value persists across reloads via the existing localStorage AppInstance rai\
l. Use this for 'remember who I am' / 'remember last choice' identity write-back \u2014 at the end of a flow, or straight fro\
m a Content action's script.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['setAppVa\
lue("whoAmI", AuthorId)']},{name:"clearValues",async:!0,signature:"clearValues(...names: string[]): void",description:"W\
ipes everything the user has entered under each NAMED node \u2014 its own value, every descendant field, and every slot of a \
repeating section \u2014 in one atomic update. Names resolve like a formula read: this node's scope outward, then any name un\
ique across the app (an ambiguous name throws and nothing is cleared). Use it to reset a section for a fresh round \u2014 e.g\
. a game's per-round inputs when a new game starts, which otherwise keep last game's typing because the slots reuse the \
same index.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['clearValues("lineSlots")',
'clearValues("answers", "notes"); setAppValue("roomCode", newCode)']},{name:"sendToWidget",async:!0,signature:"sendToWid\
get(widgetName: string, command: string, args?: object): void",description:"Tells a sandboxed widget on the screen to DO\
 something \u2014 e.g. `spotifyplayer`'s `play` / `stop` \u2014 so a button outside the widget can drive it. `widgetName` is the w\
idget node's name, resolved like a formula read (an unknown or ambiguous name throws); which commands exist, and their a\
rgs, is up to each widget. The command is delivered at once, BEFORE any value this same script just set reaches the widg\
et as a parameter \u2014 so pass everything the command needs in `args` rather than relying on a `setValues` a line earlier. \
A widget that isn't showing (hidden, or on another screen) ignores it. No reply comes back. Runs in preview too.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['sendToWidget("player", "play", {trackUri: q.uri, st\
artMs: q.startMs, lengthMs: 3000})','sendToWidget("player", "stop"); navigate("results")']},{name:"navigate",async:!0,signature:"\
navigate(pointerKey: string, args?: object): void",description:"Moves the app cursor to the given screen/section pointer\
 key. Both forms push \u2014 a nav-stack entry (Back returns to the caller) plus a reset of any flow state under the target, \
exactly like an `<a>` link. The optional `args` object additionally exposes its values as `$args.<key>` on the destinati\
on screen \u2014 pair with `byId('Type', $args.id)` on the destination to land on a record you just created. From a content a\
ction's script, call it as the last statement \u2014 a preceding setAppValue(...) is the preselect-then-navigate idiom.",
availableIn:["flowStep:script","content:data-script","content:action"],examples:['navigate("home")','navigate("matchDeta\
il", {founderId: newFounder.id})']},{name:"replaceScreen",async:!0,signature:"replaceScreen(pointerKey: string, args?: o\
bject): void",description:"Swaps the current screen for the given screen/section pointer key WITHOUT adding a back-stack\
 entry and WITHOUT resetting flow state under the target \u2014 Back returns to wherever the caller came from. Use for redire\
ct-style moves (a landing screen that forwards to the right tab). Prefer `navigate` for ordinary drill-down: replacing i\
nto a screen that contains a flow re-shows the flow's last completed step instead of a fresh run.",availableIn:["flowSte\
p:script","content:data-script","content:action"],examples:['replaceScreen("home")','replaceScreen("tabDetail", {id: $pa\
rams.id})']},{name:"back",async:!0,signature:"back(): void",description:'Goes back one nav-stack entry \u2014 exactly what th\
e Back button (or a legacy `href="@pop"`) does. Takes no arguments. A Back/Cancel control in a content template is an ac\
tion whose script is just `back()`.',availableIn:["flowStep:script","content:data-script","content:action"],examples:["b\
ack()"]},{name:"updateData",async:!0,signature:"updateData({type: string, id: string, patch: object}): {id: string, ...}",
description:"Partial-updates an existing record by id. Reads the current record from $data, shallow-merges `patch` over \
it, and writes back via the same path the Form node's publish button uses \u2014 so create/update/edit-by-form/edit-by-script\
 all converge on one backend op. Returns the merged record. Throws if no record of that type+id is currently loaded in $\
data. Object property shorthand is supported: `{Name, Role}` means `{Name: Name, Role: Role}` (and `id` means `id: id`),\
 so a patch built from same-named scope variables stays concise.",availableIn:["flowStep:script","content:data-script","\
content:action"],examples:['updateData({type: "Post", id: post.id, patch: {Content: newContent}})','updateData({type: "T\
raveller", id, patch: {Name, Role, Bio}})']},{name:"deleteData",async:!0,signature:"deleteData({type: string, id: string\
 | string[]}): void",description:"Soft-deletes one record (when `id` is a string) or N records (when `id` is an array of\
 strings) by setting `isDeleted: true`. Records remain in storage with their fields preserved; org-level filters (a `whe\
reClause` on the subsection, or `filter(..., !it.isDeleted)` in a template) hide them from the UI. Cascades through decl\
ared parent relations: every loaded record of an object type whose `parent: {type, idField}` points at a deleted record \
is soft-deleted too, recursively, children before parents \u2014 so do NOT filter and delete children by hand when the child \
type declares `parent`. Only children currently loaded in $data are found, so the child type must be declared as a data \
source by some node. Restoring a parent does not restore its children. To remove records permanently, use `hardDelete`. \
Throws if any referenced record is not currently loaded in $data.",availableIn:["flowStep:script","content:data-script",
"content:action"],examples:['deleteData({type: "Post", id: post.id})','deleteData({type: "Photo", id: photos.map((p) => \
p.id)})','deleteData({type: "Post", id: id}) // Photo declares parent: {type: "Post", idField: "postId"}, so its photos \
go too']},{name:"deleteFile",async:!0,signature:"deleteFile(url: string | string[]): void",description:"Permanently dele\
tes an uploaded file (an image a `fileInput` stored, by its URL) from this org's Storage \u2014 the blob a record field point\
s at, not the record. Opt in for records that are genuinely gone: `deleteData` is a soft delete that keeps the record re\
storable, so calling `deleteFile` beside it sacrifices restore of the photo. Only files under THIS org's own upload pref\
ix are touched; any other URL (a web-search pick, another org's file, an empty field) is silently skipped, never an erro\
r, so it is safe to call unconditionally. A file that is already gone is tolerated. Accepts an array for multi-file fiel\
ds.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['deleteData({type: "Event", id: id\
}); deleteFile(Pic); navigate("calendar")',"deleteFile(photos.map((p) => p.url))"]},{name:"hardDelete",async:!0,signature:"\
hardDelete({type: string, id: string | string[]}): {deleted: {type, id}[], notFound: string[], blobsDeleted: string[], b\
lobsSkippedShared: string[]}",description:"PERMANENTLY removes records \u2014 irreversible, unlike `deleteData`'s restorable \
soft delete. Runs on the server: removes every stored copy (a record and its soft-delete tombstone alike), cascades thro\
ugh declared parent relations across ALL stored records (not just those loaded in $data, so the child type needs no data\
 source), and deletes this org's own uploaded files that no surviving record, realtime record or config still references\
 (a file shared with something that survives is kept and reported in `blobsSkippedShared`). Only an org admin, or the us\
er who created every named record, may call it; cascaded children go with their parent whoever made them. Refuses realti\
me-rail types, and throws for an embedded type (nothing on the server to delete \u2014 use `deleteData`). Unknown ids are rep\
orted in `notFound`, not thrown. Prefer `deleteData` unless the records must really be gone (personal data, a mistaken i\
mport).",availableIn:["flowStep:script","content:data-script","content:action"],examples:['hardDelete({type: "Post", id:\
 post.id})','r = hardDelete({type: "Game", id: gameIds}); navigate("home")']},{name:"setRealtime",async:!0,signature:"se\
tRealtime(path: string, value: object): {ownerUid: string, ...}",description:"Creates or replaces ONE realtime record at\
 `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that t\
ype. `value` must be an object; it is stamped with your `ownerUid`, and security rules let you write only records you ow\
n. The record's id IS the final path segment, so any `id` (and `type`) field in `value` is ignored \u2014 spreading a record \
read from `$data` is safe. It REPLACES the whole record: a field you leave out is deleted, so to change some fields of a\
n existing record use `updateRealtime` instead. Use it to create fixed-id records (a game room keyed by its code, a play\
er keyed by identity); it stamps the `createdAt` that cleanup timers key on.",availableIn:["flowStep:script","content:da\
ta-script","content:action"],examples:['setRealtime("Game/" + roomCode, {phase: "lobby", hostId: whoAmI})','setRealtime(\
"Player/" + whoAmI, {name, gameId: roomCode})']},{name:"updateRealtime",async:!0,signature:"updateRealtime(path: string,\
 patch: object): {ownerUid: string, ...patch}",description:"MERGES `patch` into ONE realtime record at `path` (shaped `{\
Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. Fields `patch\
` doesn't mention are KEPT \u2014 the safe way to change some fields of an existing record (a game's `phase`, a player's scor\
e) without re-listing the rest. Shallow: each top-level key replaces that field whole (a nested object is not merged int\
o), and a `null` value deletes the field. Keys may not contain `/`, and `patch` must have at least one field; `id`/`type\
` are ignored. Security rules let you update only records you own. Create the record with `setRealtime` first: a merge o\
nto a missing path does create it, but without the `createdAt` stamp cleanup timers key on. Returns the patch as written\
 (with your `ownerUid`), not the whole merged record.",availableIn:["flowStep:script","content:data-script","content:act\
ion"],examples:['updateRealtime("Game/" + roomCode, {phase: "playing", round: 1})','updateRealtime("Player/" + whoAmI, {\
score: me.score + 1})']},{name:"pushRealtime",async:!0,signature:"pushRealtime(path: string, value: object): {id: string\
, ownerUid: string, ...}",description:"Appends a NEW realtime record under the collection `path` (shaped `{Type}`) with \
a server-generated id, reflecting live to every subscriber of that type. `value` must be an object; it is stamped with y\
our `ownerUid`. Returns the record with its new `id` \u2014 use it to link related records. Use for append-only collections (\
chat messages, submissions) where you don't choose the id.",availableIn:["flowStep:script","content:data-script","conten\
t:action"],examples:['msg = pushRealtime("ChatMessage", {text: comment, gameId: roomCode})','entry = pushRealtime("Drawi\
ng", {url: image.url, gameId: roomCode})']},{name:"removeRealtimeOnDisconnect",async:!0,signature:"removeRealtimeOnDisco\
nnect(path: string): void",description:"Registers a server-side rule that DELETES the realtime record at `path` (shaped \
`{Type}/{recordId}`, relative to the org's realtime root) when this client's connection drops \u2014 e.g. the tab closes or t\
he network is lost. Call it right after `setRealtime` creates the record you want auto-cleaned (a player keyed by identi\
ty), so a player who leaves vanishes from the live roster instead of stranding it. You may only auto-remove records you \
own. The deletion is queued by the realtime server and fires on disconnect, not immediately \u2014 it is the wrong tool for r\
emoving a record right now.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['setRealti\
me("Player/" + pid, {name, gameId: roomCode}); removeRealtimeOnDisconnect("Player/" + pid)']},{name:"removeRealtime",async:!0,
signature:"removeRealtime(path: string): void",description:"Immediately DELETES the realtime record at `path` (shaped `{\
Type}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. Unlike `remov\
eRealtimeOnDisconnect` (which fires only when the connection drops), this removes the record right now. Security rules l\
et you delete a record you own, or \u2014 for the org's creator \u2014 any realtime record in your own org (so an owner can clean \
up old game rooms). Use for an admin/owner 'delete this room' control.",availableIn:["flowStep:script","content:data-scr\
ipt","content:action"],examples:['removeRealtime("Game/" + roomCode)','removeRealtime("ChatMessage/" + msgId)']},{name:"\
advanceFlow",async:!0,signature:"advanceFlow(): void",description:"Advances the enclosing flow to its next step \u2014 and fi\
nishes (closes) the flow when called on the last step. Only valid from a Content script (a declared action or a legacy `\
data-script`) rendered INSIDE a flow; it lets you replace the built-in Next/Finish button with your own control (pair wi\
th the flow's `hideNav`/`hideTopBar` options for a chrome-less, custom-driven flow). Advancing into an auto-running step\
 (e.g. a `flowStep:script`) triggers that step, so this is also how a custom 'Submit' button kicks off the flow's final \
script. Throws if called outside a flow.",availableIn:["content:data-script","content:action"],examples:["advanceFlow()"]},
{name:"leaveVideoRoom",async:!0,signature:"leaveVideoRoom(): void",description:"Leaves the app's active video call, if o\
ne is active. A `videoRoom` node's call outlives screen navigation (multiple nodes can share one call across screens), s\
o leaving is never automatic \u2014 call this explicitly wherever a script means for video to actually end, e.g. a 'leave gam\
e' or 'back to the start' action. Safe to call even when no call is active (no-op, does not throw).",availableIn:["flowS\
tep:script","content:data-script","content:action"],examples:['setAppValue("roomCode", ""); leaveVideoRoom(); navigate("\
home")']},{name:"endVideoRoom",async:!0,signature:"endVideoRoom(): void",description:"End the video call for EVERYONE in\
 the room, not just this device. Only whoever started the room may do this \u2014 the platform refuses anyone else \u2014 so gate \
the control on your own host check too. Unlike leaveVideoRoom, this is final: nobody can rejoin the same room afterwards\
. Use it for a deliberate 'we're done' at the end of a session; use leaveVideoRoom when one person is stepping out.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['endVideoRoom(); navigate("home")']},{name:"spotifyI\
sConnected",async:!0,signature:"spotifyIsConnected(): boolean",description:'True when the person running the script has \
connected their own Spotify account (at orgiggly.com/connect/spotify). Read-only, so it also works in preview. Scripts h\
ave no `if`, so store the result and let a formula decide what to show \u2014 e.g. a "Connect Spotify" prompt.',availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['ok = spotifyIsConnected(); setAppValue("spotifyRead\
y", ok)']},{name:"spotifySearchTracks",async:!0,signature:"spotifySearchTracks(songs: {title: string, artist?: string}[]\
, options?: {limit?: number}): {uri: string, id: string, title: string, artist: string, artists: string[], album: string\
, albumType: string, year: number | null, artUrl: string | null, durationMs: number, explicit: boolean}[][]",description:"\
Looks every song up on the viewer's connected Spotify account and returns ONE candidate list per song, in the same order\
 \u2014 an empty list when nothing matched (a miss never throws). Batch by design: a script has no loops and cannot call an a\
sync host inside `map`, so pass the whole list in one call, then pick the best candidate per song with ordinary formulas\
 or a `function` node (prefer the matching artist; avoid live, remix, karaoke and cover versions). `limit` is candidates\
 per song: default 5, at most 10. Throws \"Connect Spotify first (orgiggly.com/connect/spotify)\" when the viewer hasn't c\
onnected. Read-only, so it also runs in preview.",availableIn:["flowStep:script","content:data-script","content:action"],
examples:["results = spotifySearchTracks(songs.map((s) => ({title: s.title, artist: s.artist})))",'results = spotifySear\
chTracks([{title: "Mr. Brightside", artist: "The Killers"}], {limit: 3}); setAppValue("firstUri", results[0][0].uri)']},
{name:"spotifyListPlaylists",async:!0,signature:"spotifyListPlaylists(): {id: string, name: string, trackCount: number, \
imageUrl: string | null}[]",description:"The viewer's Spotify playlists that a quiz can be built from: the ones they own\
 or collaborate on (Spotify won't let an app read the tracks of any other playlist, followed ones included). Feed it to \
a `selectInput`'s `pickerValues` (ids are strings) and pass the chosen id to `spotifyPlaylistTracks`. Throws \"Connect Sp\
otify first (orgiggly.com/connect/spotify)\" when the viewer hasn't connected, and \"Reconnect Spotify to use your playlis\
ts\" when they connected before playlists were supported. Read-only, so it also runs in preview.",availableIn:["flowStep\
:script","content:data-script","content:action"],examples:["spotifyListPlaylists()",'lists = spotifyListPlaylists(); set\
AppValue("playlistCount", length(lists))']},{name:"spotifyPlaylistTracks",async:!0,signature:"spotifyPlaylistTracks(play\
listId: string): {uri: string, id: string, title: string, artist: string, artists: string[], album: string, albumType: s\
tring, year: number | null, artUrl: string | null, durationMs: number, explicit: boolean}[]",description:"The tracks of \
one of the viewer's playlists, in playlist order and in the same shape as a `spotifySearchTracks` candidate (podcast epi\
sodes and local files are left out; up to 500 tracks). `playlistId` is an id from `spotifyListPlaylists`, a `spotify:pla\
ylist:\u2026` URI or an open.spotify.com link. Shuffle with `shuffle(tracks, now())` to pick at random. Throws the same Conne\
ct / Reconnect errors as `spotifyListPlaylists`, and a clear error for a playlist the viewer neither owns nor collaborat\
es on. Read-only, so it also runs in preview.",availableIn:["flowStep:script","content:data-script","content:action"],examples:[
"tracks = spotifyPlaylistTracks(playlistId); picks = shuffle(tracks, now()).slice(0, 10)"]},{name:"speak",async:!0,signature:"\
speak(text: string, lang?: string, rate?: number): void",description:'Speaks `text` aloud via the device\'s speech synthe\
sis (the same Web Speech path as the legacy `data-speak` attribute, plus error handling). `lang` accepts a BCP-47 code (\
"fr-FR") or a common English language name ("French"); `rate` is playback speed 0.1\u201310. Toggle-aware: calling it with th\
e SAME text while it is still speaking stops playback instead.',availableIn:["content:action"],examples:['speak($params.\
text, "fr-FR")',"speak(story.Original, story.Language, 0.9)"]},{name:"stopSpeech",async:!0,signature:"stopSpeech(): void",
description:'Stops any in-progress speech synthesis immediately (the legacy `data-speak-action="stop"` behaviour). Safe \
to call when nothing is speaking \u2014 no-op, does not throw.',availableIn:["content:action"],examples:["stopSpeech()"]},
{name:"copyText",async:!0,signature:"copyText(text: string): void",description:"Copies `text` to the device's clipboard \
and shows a brief \"Copied\" note. Content actions only, because a browser lets a page write the clipboard only in respons\
e to a tap or click. Throws (so the action's error snackbar reports it) where the clipboard isn't available, e.g. a page\
 not served over HTTPS.",availableIn:["content:action"],examples:["copyText(rosterText)","copyText($params.link)"]},{name:"\
enablePush",async:!0,signature:'enablePush(): "subscribed" | "denied" | "unavailable" | "ios-not-installed" | "preview"',
description:"Asks for notification permission (only if it hasn't been asked) and registers this device for the org's pus\
hes \u2014 the header bell's subscribe, as a button the org can place where it matters (\u{1F514} Remind me). The device is register\
ed against the visitor's auth uid, which is what a transition rule's `notifyTo` names. Content actions only, because the\
 permission prompt needs a tap. Returns what happened, so store it and word the button from it: `subscribed`; `denied` (\
blocked \u2014 they must re-enable it in browser or phone settings); `unavailable` (this browser has no web push); `ios-not-i\
nstalled` (iPhone/iPad in a browser tab \u2014 web push works only once the site is added to the home screen); `preview` (a d\
esign preview, nothing registered).",availableIn:["content:action"],examples:['r = enablePush(); setAppValue("pushState"\
, r)']},{name:"setValue",async:!0,signature:"setValue(value: any): void",description:"Writes the content node's OWN valu\
e \u2014 the node whose action is running \u2014 so formulas elsewhere can read it back via the node's name (the legacy `setValue=\
` attribute's behaviour). Use it for local UI state a content node carries itself (selected tab, filter toggle); for app\
-level state use `setAppValue` instead.",availableIn:["content:action"],examples:["setValue($params.id)",'setValue("")']},
{name:"setValues",async:!0,signature:"setValues(values: {[fieldName: string]: any}): void",description:"Writes SEVERAL f\
ields at once, by name, as ONE atomic state update (#407). Each key is a node name resolved from this content node's sco\
pe outward \u2014 exactly the names a formula here could read \u2014 and every value is evaluated against the same state snapshot \
before any write lands, so `setValues({a: b, b: a})` is a genuine swap with no half-applied render in between. A name no\
thing in scope declares throws (nothing is written). Use it for any control that must move two or more fields together \u2014\
 swap, reset-to-defaults, apply-a-preset; for one field use `setValue` (own value) or `setAppValue` (app variable).",availableIn:[
"content:action"],examples:["setValues({myLanguage: otherLanguage, otherLanguage: myLanguage})",'setValues({minPrice: 0,\
 maxPrice: 1000, sortBy: "newest"})']},{name:"submit",async:!0,signature:"submit(): {id: string, ...}",description:"Publ\
ishes the content node's enclosing submit context object (the legacy `@submit` href behaviour): resolves the surrounding\
 form-like object, publishes it as a record, then writes the server-stamped `id`/`createdAt`/`createdBy` back into the s\
ource fields and shows a success snackbar. Returns the published record. Throws when there is no submit context or the p\
ublish fails \u2014 so a failing `submit()` aborts the action's `navigate` step.",availableIn:["content:action"],examples:[
"submit()"]}],eP=pc.filter(e=>e.async).map(e=>e.name),FU=pc.filter(e=>!e.async).map(e=>e.name),tP=e=>ew.some(t=>t===e),rP=e=>tP(
e)?pc.filter(t=>t.availableIn.includes(e)).map(t=>t.name):[];var BU=[...wx];var nP={if:{min:3,max:3},and:{min:0,max:null},or:{min:0,max:null},length:{min:1,max:1},sum:{min:1,max:1},avg:{min:1,max:1},
min:{min:0,max:null},max:{min:0,max:null},first:{min:1,max:1},last:{min:1,max:1},flatten:{min:1,max:1},clamp:{min:3,max:3},
split:{min:1,max:2},join:{min:1,max:2},concat:{min:0,max:null},upper:{min:1,max:1},lower:{min:1,max:1},floor:{min:1,max:1},
ceil:{min:1,max:1},round:{min:1,max:1},abs:{min:1,max:1},today:{min:0,max:0},dateFrom:{min:1,max:1},dateCompare:{min:2,max:2},
formatDate:{min:1,max:2},formatPeriod:{min:1,max:2},generateId:{min:1,max:2},regex:{min:1,max:2},fuzzyMatch:{min:2,max:2},
toJson:{min:1,max:2},rand:{min:1,max:1},uniq:{min:1,max:2},sort:{min:1,max:3},shuffle:{min:2,max:2},handRank:{min:1,max:1},
replace:{min:2,max:3},omit:{min:2,max:2},pick:{min:2,max:2},toMap:{min:2,max:3},keys:{min:1,max:1},values:{min:1,max:1},
entries:{min:1,max:1},mapValues:{min:2,max:2},escapeHtml:{min:1,max:1},urlEncode:{min:1,max:1},html:{min:1,max:null},now:{
min:0,max:0},nextOccurrence:{min:3,max:4},byId:{min:2,max:2},forEach:{min:2,max:2},filter:{min:2,max:2},map:{min:2,max:2},
reduce:{min:2,max:3},times:{min:2,max:2},every:{min:2,max:2},some:{min:2,max:2},find:{min:2,max:2},findIndex:{min:2,max:2},
count:{min:1,max:2},groupBy:{min:2,max:2},sumBy:{min:2,max:2}};var HU=new Set(pc.map(e=>e.name));var WU=new Map(ew.map(e=>[e,new Set(rP(e))])),qU=new Set(eP);var VU=new Map(Object.entries(nP));var aP=[{attribute:"data-action",label:"Declared action",html:'<button data-action="openTab" data-param-id="${id}">Open<\
/button>',purpose:"Invoke a named action declared in the node's `actions` field \u2014 a `script`; to move screens it calls `\
navigate('screen')`, usually as the last line. `data-param-*` values are render-time interpolated literals, read into `$\
params` with no click-time evaluation. If the action declares `confirm`, the click asks first and the script runs only o\
n confirm; `data-confirm-title` and `data-confirm-body` override that confirm's wording per element (render-time literal\
s, like `data-param-*` \u2014 they cannot create a confirm the action does not declare). See below",status:"current"},{attribute:"\
data-speak-action",label:"Stop speech",html:'<a data-speak-action="stop">Stop</a>',purpose:"Stop Web Speech API playback\
 started by `data-speak`. Only `stop` is supported",status:"legacy"},{attribute:"data-speak",label:"Speak",html:'<a data\
-speak="expr" data-speak-lang="expr" data-speak-rate="expr">Play</a>',purpose:"Speak text via the Web Speech API; the op\
tional `data-speak-lang` and `data-speak-rate` attributes are evaluated as formulas alongside the text",status:"legacy"},
{attribute:"data-script",label:"One-tap action",html:`<a data-script='setAppValue("k", "\${id}"); navigate("screen")'>Ope\
n</a>`,purpose:"Run a script \u2014 app-state, realtime and publish writes \u2014 and optionally navigate, in a single tap with **\
no flow**. See below",status:"legacy"},{attribute:"setValue",label:"Set value",html:'<a setValue="expression">Text</a>',
purpose:"Evaluate expression and set as the current node's value",status:"legacy"},{attribute:"href",label:"External lin\
k",html:'<a href="https://example.com" target="_blank">Visit</a>',purpose:"A genuine hyperlink \u2014 `http(s):`, `mailto:`, \
`tel:` and `/`-absolute URLs are left to the browser",status:"current"},{attribute:"href",label:"Navigate to screen",html:'\
<a href="screenName">Go</a>',purpose:"Static link to another screen",status:"current"},{attribute:"href",label:"Go back",
html:'<a href="@pop">Back</a>',purpose:"Pop the navigation stack",status:"legacy"},{attribute:"href",label:"Submit form",
html:'<a href="@submit">Save</a>',purpose:"Submit the current form",status:"legacy"},{attribute:"href",label:"Navigate w\
ith args",html:'<a href="screenName" data-args="@{ key: value }">Go</a>',purpose:"Navigate and attach named arguments, r\
eadable on the destination as `$args.key`. Pair with `byId('Type', id)` for cross-record links (e.g. linking from one re\
cord's detail page to a different record's). Works on `rel=` too",status:"legacy"},{attribute:"rel",label:"Navigate from\
 list item",html:'<a rel="screenName">View</a>',purpose:"From a repeating section \u2014 the destination inherits the current\
 item's scope. Resolves *relative to the clicked row*, so it can only reach a screen nested inside that same subsection",
status:"legacy"},{attribute:"rel",label:"Seed a form target",html:'<a rel="formScreen" param="expression">Edit</a>',purpose:"\
Writes the evaluated value at the destination pointer before navigating. **Forms only** \u2014 a flow reads `data-args`/`$arg\
s`, never `param`",status:"legacy"}],YU=aP.map(e=>e.attribute).filter((e,t,r)=>r.indexOf(e)===t),fc=[{id:"rel",tokens:["\
rel="],attributes:["rel"],fixHint:'Declare an action whose script ends with navigate("screen") and reference it via data\
-action instead.',prompt:{order:1,line:'`rel="screen"` / `href="screen" data-args=\u2026` \u2192 an action whose script calls `nav\
igate(\'screen\', {id: $params.id})`'}},{id:"setValue",tokens:["setValue="],attributes:["setValue"],fixHint:"Declare an \
action whose `script` calls `setValue(...)` and reference it via `data-action` instead.",prompt:{order:2,line:'`setValue\
="expr"` \u2192 an action whose `script` calls `setValue(expr)`'}},{id:"param",tokens:["param="],attributes:["param"],fixHint:"\
Declare the action's `params` and bind them via `data-param-*` attributes (or pass computed values as the args object of\
 navigate(...)) instead.",prompt:{order:7,line:'`param="expr"` \u2192 pass the value as a `data-param-*` binding and read it \
as `$params.<name>`'}},{id:"data-script",tokens:["data-script"],attributes:["data-script"],fixHint:"Declare an action wi\
th a `script` and reference it via `data-action` instead.",prompt:{order:3,line:"`data-script='\u2026'` \u2192 an action's `script\
` (same script language, same host functions)"}},{id:"data-args",tokens:["data-args"],attributes:["data-args"],fixHint:"\
Pass the values as the second argument of navigate('screen', {\u2026}) in the action's script instead."},{id:"data-speak",
tokens:["data-speak","data-speak-lang","data-speak-rate","data-speak-action"],attributes:["data-speak","data-speak-lang",
"data-speak-rate","data-speak-action"],fixHint:"Declare an action whose `script` calls `speak(...)`/`stopSpeech()` and r\
eference it via `data-action` instead.",prompt:{order:4,line:'`data-speak=\u2026` \u2192 an action whose `script` calls `speak(tex\
t, lang?, rate?)`; `data-speak-action="stop"` \u2192 `stopSpeech()`'}},{id:"href-pop",tokens:['href="@pop"'],attributes:[],
prompt:{order:6,line:'`href="@pop"` \u2192 an action whose script is `back()`'}},{id:"href-submit",tokens:['href="@submi\
t"'],attributes:[],prompt:{order:5,line:'`href="@submit"` \u2192 an action whose `script` calls `submit()`'}}],iP=Object.
fromEntries(fc.map(e=>[e.id,e]));var zU=fc.flatMap(e=>[...e.tokens]),KU=fc.filter(e=>e.prompt!==void 0).sort((e,t)=>e.prompt.order-t.prompt.order).map(e=>e.
prompt.line);var GU=iP.rel,JU=fc.filter(e=>e.id!=="rel"&&e.attributes.length>0);var oP=["versionId","apiVersion","appConfig","objectTypes","objectInstances","plugins","users"],sP=["orgSummary","minCli\
entVersion"],ZU=[...oP,...sP];var XU=new Map(Object.entries(W_));var lP=["archiveData","archiveId"],QU=["archiveType",...lP];var eF=Dl.Allow.OBJ|Dl.Allow.ARR;var tF=[...zy].filter(e=>e!=="variable");var cP="| `customize` | `feature`, `reason` | declares that you are changing an installed feature's own nodes. Without i\
t, the closing gate refuses any change inside a `feature-\u2026` folder |",rF=`

## Installed features

Folders named \`feature-<slug>\` hold installed features: tested functionality this org shares with others. Change a node \
inside one only when the request needs it, and declare the change first:

| op | fields | what it does |
|---|---|---|
${cP}`;var nF=new Set("a an the and or for of to in on with my our your me i we it its this that app apps application something\
 some thing things help keep can like want make build create need would should could be is are was let lets using use si\
mple new tool tools just also all any".split(" ")),uP=e=>e.length>4&&e.endsWith("ies")?`${e.slice(0,-3)}y`:e.length>3&&e.
endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e;var dP=[[["chat","tutor","talk","conversation","speak","spoken","voice"],["ai-chat"]],[["ai","generate","generated","gen\
erator","smart"],["ai-query","image-generation"]],[["image","picture","photo","camera","illustrated"],["image-generation",
"ai-query"]],[["game","party","multiplayer","player","live","realtime","round"],["realtime","transitions"]],[["quiz","re\
vise","revision","flashcard","exam","study","learn","lesson"],["flows","tabs"]],[["booking","book","schedule","calendar",
"rota","signup","form","track","tracker","log"],["forms","storage-data"]],[["notify","notification","reminder","alert"],
["push"]],[["video","call","youtube"],["video"]],[["music","song","audio","jingle","playlist","podcast"],["audio"]],[["m\
ap","trip","travel","holiday","itinerary","route"],["maps"]],[["login","member","private","pin"],["org-login","auth-priv\
ate"]],[["team","group","share","shared","friend"],["group-scoped","realtime"]],[["personal","journal","diary"],["user-s\
coped"]]],aF=new Map(dP.flatMap(([e,t])=>e.map(r=>[uP(r),t])));var pP=ze.intersection([ze.type({name:ze.string}),ze.partial({parent:ze.union([ze.string,ze.null])})]),fP=ze.type({orgIds:ze.array(
ze.string)}),iF=ze.partial({folders:ze.record(ze.string,pP),containers:ze.record(ze.string,fP),folderOrder:ze.array(ze.string)});var hP=W.keyof({new:null,claimed:null,"fixed-draft":null,published:null,closed:null}),Pt=e=>W.union([e,W.null,W.undefined]),
mP=W.type({qualifiedOrgId:W.string,configSource:Pt(W.string),versionId:Pt(W.string),previewDraft:Pt(W.boolean),variant:Pt(
W.string)}),gP=W.type({pathname:W.string,search:Pt(W.string),pointerKey:Pt(W.string),screenLabel:Pt(W.string)}),yP=W.partial(
{buildCommit:W.string,buildTimestamp:W.string,capabilityVersion:W.number,userAgent:W.string,platform:W.string,language:W.string,
timezone:W.string,viewport:W.type({w:W.number,h:W.number}),dpr:W.number,standalone:W.boolean,online:W.boolean,touch:W.boolean}),
vP=W.partial({screenshot:W.type({path:W.string,bytes:W.number,w:W.number,h:W.number}),state:W.type({path:W.string,bytes:W.number})}),
rw={status:hP,statusNote:Pt(W.string),branch:Pt(W.string),prUrl:Pt(W.string)},oF=W.type({id:W.string,createdAt:W.string,
reporterUid:W.string,reporterUsername:Pt(W.string),reporterIsOwner:Pt(W.boolean),description:W.string,target:mP,location:gP,
client:Pt(yP),attachments:Pt(vP),...rw,statusUpdatedAt:Pt(W.string),statusUpdatedBy:Pt(W.string)}),sF=W.type({...rw,statusUpdatedAt:W.string,
statusUpdatedBy:W.string});import bP from"node:fs";var wP=e=>{if(e===null||typeof e!="object")return!1;let t=e.appConfig;if(!t||typeof t!="object")return!1;let r=t;return Array.
isArray(r.data)&&Array.isArray(r.lengths)?!1:!!(Array.isArray(r._children)||r.type==="app")},nw=e=>e instanceof Error?e.
message:String(e),Wp=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),TP=e=>Wp(e)&&wP(e),kP=e=>Wp(e)&&Wp(e.appConfig)&&
Array.isArray(e.appConfig.data)&&Array.isArray(e.appConfig.lengths),aw=e=>{let t;try{t=bP.readFileSync(e,"utf8")}catch(n){
return Ne(`cannot read ${e}: ${nw(n)}`)}let r;try{r=JSON.parse(t)}catch(n){return Ne(`${e} is not valid JSON: ${nw(n)}`)}
return TP(r)?R(r):kP(r)?R(D0(r)):Ne(`${e} is not an org config (no appConfig in tree or pointer format)`)};var bF=e=>{let t=typeof e=="string"&&!e.startsWith("file:")?e:SP(e),r=aw(t);if(M(r))throw new Error(r.left);return r.right};export{RN as createOrgPackApi,IN as createRealtimeStore,bF as loadOrgTree};
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
