import { createRequire as __ogCreateRequire } from "node:module";
const require = __ogCreateRequire(import.meta.url);
var Nw=Object.create;var hf=Object.defineProperty;var Pw=Object.getOwnPropertyDescriptor;var Dw=Object.getOwnPropertyNames;var Mw=Object.getPrototypeOf,jw=Object.prototype.hasOwnProperty;var We=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Lw=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Dw(t))!jw.call(e,a)&&a!==r&&hf(e,a,{get:()=>t[a],
enumerable:!(n=Pw(t,a))||n.enumerable});return e};var oe=(e,t,r)=>(r=e!=null?Nw(Mw(e)):{},Lw(t||!e||!e.__esModule?hf(r,"default",{value:e,enumerable:!0}):r,e));var Ln=We(X=>{"use strict";var Fw=X&&X.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(X,"__esModule",{value:!0});X.dual=X.getEndomorphismMonoid=X.SK=X.hole=X.constVoid=X.constUndefined=
X.constNull=X.constFalse=X.constTrue=X.unsafeCoerce=X.apply=X.getRing=X.getSemiring=X.getMonoid=X.getSemigroup=X.getBooleanAlgebra=
void 0;X.identity=Ec;X.constant=Ni;X.flip=Yw;X.flow=mf;X.tuple=zw;X.increment=Kw;X.decrement=Gw;X.absurd=gf;X.tupled=Jw;
X.untupled=Zw;X.pipe=Xw;X.not=eT;var Uw=function(e){return function(){return{meet:function(t,r){return function(n){return e.
meet(t(n),r(n))}},join:function(t,r){return function(n){return e.join(t(n),r(n))}},zero:function(){return e.zero},one:function(){
return e.one},implies:function(t,r){return function(n){return e.implies(t(n),r(n))}},not:function(t){return function(r){
return e.not(t(r))}}}}};X.getBooleanAlgebra=Uw;var Bw=function(e){return function(){return{concat:function(t,r){return function(n){
return e.concat(t(n),r(n))}}}}};X.getSemigroup=Bw;var Hw=function(e){var t=(0,X.getSemigroup)(e);return function(){return{
concat:t().concat,empty:function(){return e.empty}}}};X.getMonoid=Hw;var Ww=function(e){return{add:function(t,r){return function(n){
return e.add(t(n),r(n))}},zero:function(){return e.zero},mul:function(t,r){return function(n){return e.mul(t(n),r(n))}},
one:function(){return e.one}}};X.getSemiring=Ww;var qw=function(e){var t=(0,X.getSemiring)(e);return{add:t.add,mul:t.mul,
one:t.one,zero:t.zero,sub:function(r,n){return function(a){return e.sub(r(a),n(a))}}}};X.getRing=qw;var Vw=function(e){return function(t){
return t(e)}};X.apply=Vw;function Ec(e){return e}X.unsafeCoerce=Ec;function Ni(e){return function(){return e}}X.constTrue=
Ni(!0);X.constFalse=Ni(!1);X.constNull=Ni(null);X.constUndefined=Ni(void 0);X.constVoid=X.constUndefined;function Yw(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.length>1?e(t[1],t[0]):function(n){return e(
n)(t[0])}}}function mf(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:return function(){return t(e.apply(
this,arguments))};case 3:return function(){return r(t(e.apply(this,arguments)))};case 4:return function(){return n(r(t(e.
apply(this,arguments))))};case 5:return function(){return a(n(r(t(e.apply(this,arguments)))))};case 6:return function(){
return i(a(n(r(t(e.apply(this,arguments))))))};case 7:return function(){return o(i(a(n(r(t(e.apply(this,arguments)))))))};case 8:
return function(){return s(o(i(a(n(r(t(e.apply(this,arguments))))))))};case 9:return function(){return l(s(o(i(a(n(r(t(e.
apply(this,arguments)))))))))}}}function zw(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e}function Kw(e){
return e+1}function Gw(e){return e-1}function gf(e){throw new Error("Called `absurd` function which should be uncallable")}
function Jw(e){return function(t){return e.apply(void 0,t)}}function Zw(e){return function(){for(var t=[],r=0;r<arguments.
length;r++)t[r]=arguments[r];return e(t)}}function Xw(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:
return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:
return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],
u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}X.hole=gf;var Qw=function(e,t){return t};X.SK=Qw;function eT(e){
return function(t){return!e(t)}}var tT=function(){return{concat:function(e,t){return mf(e,t)},empty:Ec}};X.getEndomorphismMonoid=
tT;var rT=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,Fw([a],n,!1))}}};X.dual=rT});var Pi=We(z=>{"use strict";var nT=z&&z.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(z,"__esModule",{value:!0});z.flatMapReader=z.flatMapTask=z.flatMapIO=z.flatMapEither=z.flatMapOption=
z.flatMapNullable=z.liftOption=z.liftNullable=z.fromReadonlyNonEmptyArray=z.has=z.emptyRecord=z.emptyReadonlyArray=z.tail=
z.head=z.isNonEmpty=z.singleton=z.right=z.left=z.isRight=z.isLeft=z.some=z.none=z.isSome=z.isNone=void 0;var Ua=Ln(),aT=function(e){
return e._tag==="None"};z.isNone=aT;var iT=function(e){return e._tag==="Some"};z.isSome=iT;z.none={_tag:"None"};var oT=function(e){
return{_tag:"Some",value:e}};z.some=oT;var sT=function(e){return e._tag==="Left"};z.isLeft=sT;var lT=function(e){return e.
_tag==="Right"};z.isRight=lT;var cT=function(e){return{_tag:"Left",left:e}};z.left=cT;var uT=function(e){return{_tag:"Ri\
ght",right:e}};z.right=uT;var dT=function(e){return[e]};z.singleton=dT;var pT=function(e){return e.length>0};z.isNonEmpty=
pT;var fT=function(e){return e[0]};z.head=fT;var hT=function(e){return e.slice(1)};z.tail=hT;z.emptyReadonlyArray=[];z.emptyRecord=
{};z.has=Object.prototype.hasOwnProperty;var mT=function(e){return nT([e[0]],e.slice(1),!0)};z.fromReadonlyNonEmptyArray=
mT;var gT=function(e){return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.
apply(void 0,n);return e.fromEither(i==null?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i))}}};z.liftNullable=gT;var yT=function(e){
return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.apply(void 0,n);
return e.fromEither((0,z.isNone)(i)?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i.value))}}};z.liftOption=yT;var vT=function(e,t){
return(0,Ua.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftNullable)(e)(n,a))})};z.flatMapNullable=vT;var bT=function(e,t){
return(0,Ua.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftOption)(e)(n,a))})};z.flatMapOption=bT;var wT=function(e,t){
return(0,Ua.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromEither(n(a))})})};z.flatMapEither=wT;var TT=function(e,t){
return(0,Ua.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromIO(n(a))})})};z.flatMapIO=TT;var kT=function(e,t){
return(0,Ua.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromTask(n(a))})})};z.flatMapTask=kT;var ST=function(e,t){
return(0,Ua.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromReader(n(a))})})};z.flatMapReader=ST});var Ac=We(jt=>{"use strict";var ET=jt&&jt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),xT=jt&&jt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),_T=jt&&
jt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&ET(t,e,r);return xT(t,e),t};Object.defineProperty(jt,"__esModule",{value:!0});jt.ap=RT;jt.apFirst=
IT;jt.apSecond=OT;jt.apS=CT;jt.getApplySemigroup=NT;jt.sequenceT=DT;jt.sequenceS=jT;var AT=Ln(),$T=_T(Pi());function RT(e,t){
return function(r){return function(n){return e.ap(e.map(n,function(a){return function(i){return t.ap(a,i)}}),r)}}}function IT(e){
return function(t){return function(r){return e.ap(e.map(r,function(n){return function(){return n}}),t)}}}function OT(e){
return function(t){return function(r){return e.ap(e.map(r,function(){return function(n){return n}}),t)}}}function CT(e){
return function(t,r){return function(n){return e.ap(e.map(n,function(a){return function(i){var o;return Object.assign({},
a,(o={},o[t]=i,o))}}),r)}}}function NT(e){return function(t){return{concat:function(r,n){return e.ap(e.map(r,function(a){
return function(i){return t.concat(a,i)}}),n)}}}}function _c(e,t,r){return function(n){for(var a=Array(r.length+1),i=0;i<
r.length;i++)a[i]=r[i];return a[r.length]=n,t===0?e.apply(null,a):_c(e,t-1,a)}}var xc={1:function(e){return[e]},2:function(e){
return function(t){return[e,t]}},3:function(e){return function(t){return function(r){return[e,t,r]}}},4:function(e){return function(t){
return function(r){return function(n){return[e,t,r,n]}}}},5:function(e){return function(t){return function(r){return function(n){
return function(a){return[e,t,r,n,a]}}}}}};function PT(e){return $T.has.call(xc,e)||(xc[e]=_c(AT.tuple,e-1,[])),xc[e]}function DT(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=t.length,a=PT(n),i=e.map(t[0],a),o=1;o<
n;o++)i=e.ap(i,t[o]);return i}}function MT(e){var t=e.length;switch(t){case 1:return function(r){var n;return n={},n[e[0]]=
r,n};case 2:return function(r){return function(n){var a;return a={},a[e[0]]=r,a[e[1]]=n,a}};case 3:return function(r){return function(n){
return function(a){var i;return i={},i[e[0]]=r,i[e[1]]=n,i[e[2]]=a,i}}};case 4:return function(r){return function(n){return function(a){
return function(i){var o;return o={},o[e[0]]=r,o[e[1]]=n,o[e[2]]=a,o[e[3]]=i,o}}}};case 5:return function(r){return function(n){
return function(a){return function(i){return function(o){var s;return s={},s[e[0]]=r,s[e[1]]=n,s[e[2]]=a,s[e[3]]=i,s[e[4]]=
o,s}}}}};default:return _c(function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var a={},i=0;i<t;i++)
a[e[i]]=r[i];return a},t-1,[])}}function jT(e){return function(t){for(var r=Object.keys(t),n=r.length,a=MT(r),i=e.map(t[r[0]],
a),o=1;o<n;o++)i=e.ap(i,t[r[o]]);return i}}});var Ds=We(gn=>{"use strict";Object.defineProperty(gn,"__esModule",{value:!0});gn.map=yf;gn.flap=FT;gn.bindTo=UT;gn.let=BT;
gn.getFunctorComposition=HT;gn.as=vf;gn.asUnit=WT;var LT=Ln();function yf(e,t){return function(r){return function(n){return e.
map(n,function(a){return t.map(a,r)})}}}function FT(e){return function(t){return function(r){return e.map(r,function(n){
return n(t)})}}}function UT(e){return function(t){return function(r){return e.map(r,function(n){var a;return a={},a[t]=n,
a})}}}function BT(e){return function(t,r){return function(n){return e.map(n,function(a){var i;return Object.assign({},a,
(i={},i[t]=r(a),i))})}}}function HT(e,t){var r=yf(e,t);return{map:function(n,a){return(0,LT.pipe)(n,r(a))}}}function vf(e){
return function(t,r){return e.map(t,function(){return r})}}function WT(e){var t=vf(e);return function(r){return t(r,void 0)}}});var wf=We(Ms=>{"use strict";Object.defineProperty(Ms,"__esModule",{value:!0});Ms.getApplicativeMonoid=YT;Ms.getApplicativeComposition=
zT;var bf=Ac(),qT=Ln(),VT=Ds();function YT(e){var t=(0,bf.getApplySemigroup)(e);return function(r){return{concat:t(r).concat,
empty:e.of(r.empty)}}}function zT(e,t){var r=(0,VT.getFunctorComposition)(e,t).map,n=(0,bf.ap)(e,t);return{map:r,of:function(a){
return e.of(t.of(a))},ap:function(a,i){return(0,qT.pipe)(a,n(i))}}}});var $c=We(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.chainFirst=KT;Di.tap=Tf;Di.bind=GT;function KT(e){
var t=Tf(e);return function(r){return function(n){return t(n,r)}}}function Tf(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}function GT(e){return function(t,r){return function(n){return e.chain(n,function(a){
return e.map(r(a),function(i){var o;return Object.assign({},a,(o={},o[t]=i,o))})})}}}});var kf=We(js=>{"use strict";Object.defineProperty(js,"__esModule",{value:!0});js.tailRec=void 0;var JT=function(e,t){for(var r=t(
e);r._tag==="Left";)r=t(r.left);return r.right};js.tailRec=JT});var Af=We(St=>{"use strict";var ZT=St&&St.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),XT=St&&St.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),QT=St&&
St.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&ZT(t,e,r);return XT(t,e),t};Object.defineProperty(St,"__esModule",{value:!0});St.fromOption=Ef;
St.fromPredicate=tk;St.fromOptionK=xf;St.chainOptionK=rk;St.fromEitherK=Rc;St.chainEitherK=nk;St.chainFirstEitherK=ak;St.
filterOrElse=ik;St.tapEither=_f;var ek=$c(),Sf=Ln(),la=QT(Pi());function Ef(e){return function(t){return function(r){return e.
fromEither(la.isNone(r)?la.left(t()):la.right(r.value))}}}function tk(e){return function(t,r){return function(n){return e.
fromEither(t(n)?la.right(n):la.left(r(n)))}}}function xf(e){var t=Ef(e);return function(r){var n=t(r);return function(a){
return(0,Sf.flow)(a,n)}}}function rk(e,t){var r=xf(e);return function(n){var a=r(n);return function(i){return function(o){
return t.chain(o,a(i))}}}}function Rc(e){return function(t){return(0,Sf.flow)(t,e.fromEither)}}function nk(e,t){var r=Rc(
e);return function(n){return function(a){return t.chain(a,r(n))}}}function ak(e,t){var r=_f(e,t);return function(n){return function(a){
return r(a,n)}}}function ik(e,t){return function(r,n){return function(a){return t.chain(a,function(i){return e.fromEither(
r(i)?la.right(i):la.left(n(i)))})}}}function _f(e,t){var r=Rc(e),n=(0,ek.tap)(t);return function(a,i){return n(a,r(i))}}});var $f=We(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.right=ke.left=ke.flap=ke.Functor=ke.Bifunctor=
ke.URI=ke.bimap=ke.mapLeft=ke.map=ke.separated=void 0;var Ic=Ln(),ok=Ds(),sk=function(e,t){return{left:e,right:t}};ke.separated=
sk;var lk=function(e,t){return(0,Ic.pipe)(e,(0,ke.map)(t))},ck=function(e,t){return(0,Ic.pipe)(e,(0,ke.mapLeft)(t))},uk=function(e,t,r){
return(0,Ic.pipe)(e,(0,ke.bimap)(t,r))},dk=function(e){return function(t){return(0,ke.separated)((0,ke.left)(t),e((0,ke.
right)(t)))}};ke.map=dk;var pk=function(e){return function(t){return(0,ke.separated)(e((0,ke.left)(t)),(0,ke.right)(t))}};
ke.mapLeft=pk;var fk=function(e,t){return function(r){return(0,ke.separated)(e((0,ke.left)(r)),t((0,ke.right)(r)))}};ke.
bimap=fk;ke.URI="Separated";ke.Bifunctor={URI:ke.URI,mapLeft:ck,bimap:uk};ke.Functor={URI:ke.URI,map:lk};ke.flap=(0,ok.flap)(
ke.Functor);var hk=function(e){return e.left};ke.left=hk;var mk=function(e){return e.right};ke.right=mk});var If=We(Wr=>{"use strict";var gk=Wr&&Wr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),yk=Wr&&Wr.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),vk=Wr&&
Wr.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&gk(t,e,r);return yk(t,e),t};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.wiltDefault=bk;
Wr.witherDefault=wk;Wr.filterE=Tk;var Rf=vk(Pi());function bk(e,t){return function(r){var n=e.traverse(r);return function(a,i){
return r.map(n(a,i),t.separate)}}}function wk(e,t){return function(r){var n=e.traverse(r);return function(a,i){return r.
map(n(a,i),t.compact)}}}function Tk(e){return function(t){var r=e.wither(t);return function(n){return function(a){return r(
a,function(i){return t.map(n(i),function(o){return o?Rf.some(i):Rf.none})})}}}}});var Lf=We(m=>{"use strict";var kk=m&&m.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Sk=m&&m.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Cf=m&&
m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&kk(t,e,r);return Sk(t,e),t};Object.defineProperty(m,"__esModule",{value:!0});m.match=m.foldW=m.
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
void 0;m.toError=Qk;m.elem=jf;m.parseJSON=i1;m.getValidation=c1;var Nf=wf(),Mi=Ac(),Pf=Cf($c()),Ek=kf(),ji=Af(),ct=Ln(),
Li=Ds(),Nr=Cf(Pi()),yn=$f(),Of=If();m.left=Nr.left;m.right=Nr.right;m.flatMap=(0,ct.dual)(2,function(e,t){return(0,m.isLeft)(
e)?e:t(e.right)});var Ot=function(e,t){return(0,ct.pipe)(e,(0,m.map)(t))},ca=function(e,t){return(0,ct.pipe)(e,(0,m.ap)(
t))},Fi=function(e,t,r){return(0,ct.pipe)(e,(0,m.reduce)(t,r))},Ui=function(e){return function(t,r){var n=(0,m.foldMap)(
e);return(0,ct.pipe)(t,n(r))}},Bi=function(e,t,r){return(0,ct.pipe)(e,(0,m.reduceRight)(t,r))},Ls=function(e){var t=(0,m.
traverse)(e);return function(r,n){return(0,ct.pipe)(r,t(n))}},Oc=function(e,t,r){return(0,ct.pipe)(e,(0,m.bimap)(t,r))},
Cc=function(e,t){return(0,ct.pipe)(e,(0,m.mapLeft)(t))},Df=function(e,t){return(0,ct.pipe)(e,(0,m.alt)(t))},Nc=function(e,t){
return(0,ct.pipe)(e,(0,m.extend)(t))},Pc=function(e,t){return(0,Ek.tailRec)(t(e),function(r){return(0,m.isLeft)(r)?(0,m.
right)((0,m.left)(r.left)):(0,m.isLeft)(r.right)?(0,m.left)(t(r.right.left)):(0,m.right)((0,m.right)(r.right.right))})};
m.URI="Either";var xk=function(e,t){return{show:function(r){return(0,m.isLeft)(r)?"left(".concat(e.show(r.left),")"):"ri\
ght(".concat(t.show(r.right),")")}}};m.getShow=xk;var _k=function(e,t){return{equals:function(r,n){return r===n||((0,m.isLeft)(
r)?(0,m.isLeft)(n)&&e.equals(r.left,n.left):(0,m.isRight)(n)&&t.equals(r.right,n.right))}}};m.getEq=_k;var Ak=function(e){
return{concat:function(t,r){return(0,m.isLeft)(r)?t:(0,m.isLeft)(t)?r:(0,m.right)(e.concat(t.right,r.right))}}};m.getSemigroup=
Ak;var $k=function(e){var t=(0,m.left)(e.empty);return{URI:m.URI,_E:void 0,compact:function(r){return(0,m.isLeft)(r)?r:r.
right._tag==="None"?t:(0,m.right)(r.right.value)},separate:function(r){return(0,m.isLeft)(r)?(0,yn.separated)(r,r):(0,m.
isLeft)(r.right)?(0,yn.separated)((0,m.right)(r.right.left),t):(0,yn.separated)(t,(0,m.right)(r.right.right))}}};m.getCompactable=
$k;var Rk=function(e){var t=(0,m.left)(e.empty),r=(0,m.getCompactable)(e),n=r.compact,a=r.separate,i=function(s,l){return(0,m.
isLeft)(s)||l(s.right)?s:t},o=function(s,l){return(0,m.isLeft)(s)?(0,yn.separated)(s,s):l(s.right)?(0,yn.separated)(t,(0,m.
right)(s.right)):(0,yn.separated)((0,m.right)(s.right),t)};return{URI:m.URI,_E:void 0,map:Ot,compact:n,separate:a,filter:i,
filterMap:function(s,l){if((0,m.isLeft)(s))return s;var c=l(s.right);return c._tag==="None"?t:(0,m.right)(c.value)},partition:o,
partitionMap:function(s,l){if((0,m.isLeft)(s))return(0,yn.separated)(s,s);var c=l(s.right);return(0,m.isLeft)(c)?(0,yn.separated)(
(0,m.right)(c.left),t):(0,yn.separated)(t,(0,m.right)(c.right))}}};m.getFilterable=Rk;var Ik=function(e){var t=(0,m.getFilterable)(
e),r=(0,m.getCompactable)(e);return{URI:m.URI,_E:void 0,map:Ot,compact:t.compact,separate:t.separate,filter:t.filter,filterMap:t.
filterMap,partition:t.partition,partitionMap:t.partitionMap,traverse:Ls,sequence:m.sequence,reduce:Fi,foldMap:Ui,reduceRight:Bi,
wither:(0,Of.witherDefault)(m.Traversable,r),wilt:(0,Of.wiltDefault)(m.Traversable,r)}};m.getWitherable=Ik;var Ok=function(e){
return{URI:m.URI,_E:void 0,map:Ot,ap:function(t,r){return(0,m.isLeft)(t)?(0,m.isLeft)(r)?(0,m.left)(e.concat(t.left,r.left)):
t:(0,m.isLeft)(r)?r:(0,m.right)(t.right(r.right))},of:m.of}};m.getApplicativeValidation=Ok;var Ck=function(e){return{URI:m.
URI,_E:void 0,map:Ot,alt:function(t,r){if((0,m.isRight)(t))return t;var n=r();return(0,m.isLeft)(n)?(0,m.left)(e.concat(
t.left,n.left)):n}}};m.getAltValidation=Ck;var Nk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.right)(e(t.
right))}};m.map=Nk;m.Functor={URI:m.URI,map:Ot};m.as=(0,ct.dual)(2,(0,Li.as)(m.Functor));m.asUnit=(0,Li.asUnit)(m.Functor);
m.of=m.right;m.Pointed={URI:m.URI,of:m.of};var Pk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.isLeft)(e)?
e:(0,m.right)(t.right(e.right))}};m.apW=Pk;m.ap=m.apW;m.Apply={URI:m.URI,map:Ot,ap:ca};m.Applicative={URI:m.URI,map:Ot,ap:ca,
of:m.of};m.Chain={URI:m.URI,map:Ot,ap:ca,chain:m.flatMap};m.Monad={URI:m.URI,map:Ot,ap:ca,of:m.of,chain:m.flatMap};var Dk=function(e,t){
return function(r){return(0,m.isLeft)(r)?e:t(e,r.right)}};m.reduce=Dk;var Mk=function(e){return function(t){return function(r){
return(0,m.isLeft)(r)?e.empty:t(r.right)}}};m.foldMap=Mk;var jk=function(e,t){return function(r){return(0,m.isLeft)(r)?e:
t(r.right,e)}};m.reduceRight=jk;m.Foldable={URI:m.URI,reduce:Fi,foldMap:Ui,reduceRight:Bi};var Lk=function(e){return function(t){
return function(r){return(0,m.isLeft)(r)?e.of((0,m.left)(r.left)):e.map(t(r.right),m.right)}}};m.traverse=Lk;var Fk=function(e){
return function(t){return(0,m.isLeft)(t)?e.of((0,m.left)(t.left)):e.map(t.right,m.right)}};m.sequence=Fk;m.Traversable={
URI:m.URI,map:Ot,reduce:Fi,foldMap:Ui,reduceRight:Bi,traverse:Ls,sequence:m.sequence};var Uk=function(e,t){return function(r){
return(0,m.isLeft)(r)?(0,m.left)(e(r.left)):(0,m.right)(t(r.right))}};m.bimap=Uk;var Bk=function(e){return function(t){return(0,m.
isLeft)(t)?(0,m.left)(e(t.left)):t}};m.mapLeft=Bk;m.Bifunctor={URI:m.URI,bimap:Oc,mapLeft:Cc};var Hk=function(e){return function(t){
return(0,m.isLeft)(t)?e():t}};m.altW=Hk;m.alt=m.altW;m.Alt={URI:m.URI,map:Ot,alt:Df};var Wk=function(e){return function(t){
return(0,m.isLeft)(t)?t:(0,m.right)(e(t))}};m.extend=Wk;m.Extend={URI:m.URI,map:Ot,extend:Nc};m.ChainRec={URI:m.URI,map:Ot,
ap:ca,chain:m.flatMap,chainRec:Pc};m.throwError=m.left;m.MonadThrow={URI:m.URI,map:Ot,ap:ca,of:m.of,chain:m.flatMap,throwError:m.
throwError};m.FromEither={URI:m.URI,fromEither:ct.identity};m.fromPredicate=(0,ji.fromPredicate)(m.FromEither);m.fromOption=
(0,ji.fromOption)(m.FromEither);m.isLeft=Nr.isLeft;m.isRight=Nr.isRight;var qk=function(e,t){return function(r){return(0,m.
isLeft)(r)?e(r.left):t(r.right)}};m.matchW=qk;m.foldW=m.matchW;m.match=m.matchW;m.fold=m.match;var Vk=function(e){return function(t){
return(0,m.isLeft)(t)?e(t.left):t.right}};m.getOrElseW=Vk;m.getOrElse=m.getOrElseW;m.flap=(0,Li.flap)(m.Functor);m.apFirst=
(0,Mi.apFirst)(m.Apply);m.apFirstW=m.apFirst;m.apSecond=(0,Mi.apSecond)(m.Apply);m.apSecondW=m.apSecond;m.tap=(0,ct.dual)(
2,Pf.tap(m.Chain));m.flattenW=(0,m.flatMap)(ct.identity);m.flatten=m.flattenW;m.duplicate=(0,m.extend)(ct.identity);m.fromOptionK=
(0,ji.fromOptionK)(m.FromEither);m.chainOptionK=(0,ji.chainOptionK)(m.FromEither,m.Chain);m.chainOptionKW=m.chainOptionK;
var Fs={fromEither:m.FromEither.fromEither};m.liftNullable=Nr.liftNullable(Fs);m.liftOption=Nr.liftOption(Fs);var Mf={flatMap:m.
flatMap};m.flatMapNullable=Nr.flatMapNullable(Fs,Mf);m.flatMapOption=Nr.flatMapOption(Fs,Mf);m.filterOrElse=(0,ji.filterOrElse)(
m.FromEither,m.Chain);m.filterOrElseW=m.filterOrElse;var Yk=function(e){return(0,m.isLeft)(e)?(0,m.right)(e.left):(0,m.left)(
e.right)};m.swap=Yk;var zk=function(e){return function(t){return(0,m.isLeft)(t)?e(t.left):t}};m.orElseW=zk;m.orElse=m.orElseW;
var Kk=function(e){return function(t){return t==null?(0,m.left)(e):(0,m.right)(t)}};m.fromNullable=Kk;var Gk=function(e,t){
try{return(0,m.right)(e())}catch(r){return(0,m.left)(t(r))}};m.tryCatch=Gk;var Jk=function(e,t){return function(){for(var r=[],
n=0;n<arguments.length;n++)r[n]=arguments[n];return(0,m.tryCatch)(function(){return e.apply(void 0,r)},t)}};m.tryCatchK=
Jk;var Zk=function(e){var t=(0,m.fromNullable)(e);return function(r){return(0,ct.flow)(r,t)}};m.fromNullableK=Zk;var Xk=function(e){
var t=(0,m.fromNullableK)(e);return function(r){return(0,m.flatMap)(t(r))}};m.chainNullableK=Xk;m.toUnion=(0,m.foldW)(ct.
identity,ct.identity);function Qk(e){try{return e instanceof Error?e:new Error(String(e))}catch{return new Error}}function jf(e){
return function(t,r){if(r===void 0){var n=jf(e);return function(a){return n(t,a)}}return(0,m.isLeft)(r)?!1:e.equals(t,r.
right)}}var e1=function(e){return function(t){return(0,m.isLeft)(t)?!1:e(t.right)}};m.exists=e1;m.Do=(0,m.of)(Nr.emptyRecord);
m.bindTo=(0,Li.bindTo)(m.Functor);var t1=(0,Li.let)(m.Functor);m.let=t1;m.bind=Pf.bind(m.Chain);m.bindW=m.bind;m.apS=(0,Mi.
apS)(m.Apply);m.apSW=m.apS;m.ApT=(0,m.of)(Nr.emptyReadonlyArray);var r1=function(e){return function(t){var r=e(0,Nr.head(
t));if((0,m.isLeft)(r))return r;for(var n=[r.right],a=1;a<t.length;a++){var i=e(a,t[a]);if((0,m.isLeft)(i))return i;n.push(
i.right)}return(0,m.right)(n)}};m.traverseReadonlyNonEmptyArrayWithIndex=r1;var n1=function(e){var t=(0,m.traverseReadonlyNonEmptyArrayWithIndex)(
e);return function(r){return Nr.isNonEmpty(r)?t(r):m.ApT}};m.traverseReadonlyArrayWithIndex=n1;m.traverseArrayWithIndex=
m.traverseReadonlyArrayWithIndex;var a1=function(e){return(0,m.traverseReadonlyArrayWithIndex)(function(t,r){return e(r)})};
m.traverseArray=a1;m.sequenceArray=(0,m.traverseArray)(ct.identity);m.chainW=m.flatMap;m.chain=m.flatMap;m.chainFirst=m.
tap;m.chainFirstW=m.tap;function i1(e,t){return(0,m.tryCatch)(function(){return JSON.parse(e)},t)}var o1=function(e,t){return(0,m.
tryCatch)(function(){var r=JSON.stringify(e);if(typeof r!="string")throw new Error("Converting unsupported structure to \
JSON");return r},t)};m.stringifyJSON=o1;m.either={URI:m.URI,map:Ot,of:m.of,ap:ca,chain:m.flatMap,reduce:Fi,foldMap:Ui,reduceRight:Bi,
traverse:Ls,sequence:m.sequence,bimap:Oc,mapLeft:Cc,alt:Df,extend:Nc,chainRec:Pc,throwError:m.throwError};m.getApplySemigroup=
(0,Mi.getApplySemigroup)(m.Apply);m.getApplyMonoid=(0,Nf.getApplicativeMonoid)(m.Applicative);var s1=function(e,t){return(0,Mi.
getApplySemigroup)((0,m.getApplicativeValidation)(e))(t)};m.getValidationSemigroup=s1;var l1=function(e,t){return(0,Nf.getApplicativeMonoid)(
(0,m.getApplicativeValidation)(e))(t)};m.getValidationMonoid=l1;function c1(e){var t=(0,m.getApplicativeValidation)(e).ap,
r=(0,m.getAltValidation)(e).alt;return{URI:m.URI,_E:void 0,map:Ot,of:m.of,chain:m.flatMap,bimap:Oc,mapLeft:Cc,reduce:Fi,
foldMap:Ui,reduceRight:Bi,extend:Nc,traverse:Ls,sequence:m.sequence,chainRec:Pc,throwError:m.throwError,ap:t,alt:r}}});var Le=We(w=>{"use strict";var Ne=w&&w.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},
e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is\
 not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.
prototype,new n)}}(),Ba=w&&w.__assign||function(){return Ba=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<
n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ba.apply(this,arguments)},
u1=w&&w.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=
Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(w,
"__esModule",{value:!0});w.partial=w.PartialType=w.type=w.InterfaceType=w.array=w.ArrayType=w.recursion=w.RecursiveType=
w.Int=w.brand=w.RefinementType=w.keyof=w.KeyofType=w.literal=w.LiteralType=w.void=w.undefined=w.null=w.UnknownRecord=w.AnyDictionaryType=
w.UnknownArray=w.AnyArrayType=w.boolean=w.BooleanType=w.bigint=w.BigIntType=w.number=w.NumberType=w.string=w.StringType=
w.unknown=w.UnknownType=w.voidType=w.VoidType=w.UndefinedType=w.nullType=w.NullType=w.getIndex=w.getTags=w.emptyTags=w.mergeAll=
w.getDomainKeys=w.appendContext=w.getContextEntry=w.getFunctionName=w.identity=w.Type=w.success=w.failure=w.failures=void 0;
w.alias=w.clean=w.StrictType=w.dictionary=w.object=w.ObjectType=w.Dictionary=w.getDefaultContext=w.getValidationError=w.
interface=w.Array=w.taggedUnion=w.TaggedUnionType=w.Integer=w.refinement=w.any=w.AnyType=w.never=w.NeverType=w.Function=
w.FunctionType=w.exact=w.ExactType=w.strict=w.readonlyArray=w.ReadonlyArrayType=w.readonly=w.ReadonlyType=w.tuple=w.TupleType=
w.intersection=w.IntersectionType=w.union=w.UnionType=w.record=w.DictionaryType=void 0;var ut=Lf();w.failures=ut.left;var d1=function(e,t,r){
return(0,w.failures)([{value:e,context:t,message:r}])};w.failure=d1;w.success=ut.right;var Pe=function(){function e(t,r,n,a){
this.name=t,this.is=r,this.validate=n,this.encode=a,this.decode=this.decode.bind(this)}return e.prototype.pipe=function(t,r){
var n=this;return r===void 0&&(r="pipe(".concat(this.name,", ").concat(t.name,")")),new e(r,t.is,function(a,i){var o=n.validate(
a,i);return(0,ut.isLeft)(o)?o:t.validate(o.right,i)},this.encode===w.identity&&t.encode===w.identity?w.identity:function(a){
return n.encode(t.encode(a))})},e.prototype.asDecoder=function(){return this},e.prototype.asEncoder=function(){return this},
e.prototype.decode=function(t){return this.validate(t,[{key:"",type:this,actual:t}])},e}();w.Type=Pe;var p1=function(e){
return e};w.identity=p1;function Hf(e){return e.displayName||e.name||"<function".concat(e.length,">")}w.getFunctionName=
Hf;function f1(e,t){return{key:e,type:t}}w.getContextEntry=f1;function Zr(e,t,r,n){for(var a=e.length,i=Array(a+1),o=0;o<
a;o++)i[o]=e[o];return i[a]={key:t,type:r,actual:n},i}w.appendContext=Zr;function da(e,t){for(var r=t.length,n=0;n<r;n++)
e.push(t[n])}var ua=Object.prototype.hasOwnProperty;function Mc(e){return Object.keys(e).map(function(t){return"".concat(
t,": ").concat(e[t].name)}).join(", ")}function Hi(e){for(var t=0;t<e.length;t++)if(e[t].encode!==w.identity)return!1;return!0}
function Wf(e){return"{ ".concat(Mc(e)," }")}function qf(e){return"Partial<".concat(e,">")}function h1(e,t,r,n){n===void 0&&
(n="{ [K in ".concat(t.name,"]: ").concat(r.name," }"));for(var a=e.length,i={},o=0;o<a;o++)i[e[o]]=r;var s=(0,w.strict)(
i,n);return new Hc(n,function(l){return s.is(l)},s.validate,s.encode,t,r)}function Fc(e){var t;if(zf(e)){var r=e.value;if(w.
string.is(r))return t={},t[r]=null,t}else{if(w1(e))return e.keys;if(Gf(e)){var n=e.types.map(function(a){return Fc(a)});
return n.some(Us.is)?void 0:Object.assign.apply(Object,u1([{}],n,!1))}}}w.getDomainKeys=Fc;function Ff(e,t){for(var r=Object.
keys(e),n=r.length,a=!1,i={},o=0;o<n;o++){var s=r[o];t.is(s)?i[s]=e[s]:a=!0}return a?i:e}function m1(e,t,r){return r===void 0&&
(r="{ [K in ".concat(e.name,"]: ").concat(t.name," }")),new Hc(r,function(n){return w.UnknownRecord.is(n)?Object.keys(n).
every(function(a){return!e.is(a)||t.is(n[a])}):Bf(t)&&Array.isArray(n)},function(n,a){if(w.UnknownRecord.is(n)){for(var i={},
o=[],s=Object.keys(n),l=s.length,c=!1,u=0;u<l;u++){var d=s[u],f=n[d],h=e.validate(d,Zr(a,d,e,d));if((0,ut.isLeft)(h))c=!0;else{
var y=h.right;c=c||y!==d,d=y;var b=t.validate(f,Zr(a,d,t,f));if((0,ut.isLeft)(b))da(o,b.left);else{var T=b.right;c=c||T!==
f,i[d]=T}}}return o.length>0?(0,w.failures)(o):(0,w.success)(c?i:n)}return Bf(t)&&Array.isArray(n)?(0,w.success)(n):(0,w.
failure)(n,a)},e.encode===w.identity&&t.encode===w.identity?function(n){return Ff(n,e)}:function(n){for(var a={},i=Object.
keys(Ff(n,e)),o=i.length,s=0;s<o;s++){var l=i[s];a[String(e.encode(l))]=t.encode(n[l])}return a},e,t)}function Vf(e){return"\
("+e.map(function(t){return t.name}).join(" | ")+")"}function jc(e,t){for(var r=!0,n=!0,a=!w.UnknownRecord.is(e),i=0,o=t;i<
o.length;i++){var s=o[i];s!==e&&(r=!1),w.UnknownRecord.is(s)&&(n=!1)}if(r)return e;if(n)return t[t.length-1];for(var l={},
c=0,u=t;c<u.length;c++){var s=u[c];for(var d in s)(!ua.call(l,d)||a||s[d]!==e[d])&&(l[d]=s[d])}return l}w.mergeAll=jc;function Lc(e){
switch(e._tag){case"RefinementType":case"ReadonlyType":return Lc(e.type);case"InterfaceType":case"StrictType":case"Parti\
alType":return e.props;case"IntersectionType":return e.types.reduce(function(t,r){return Object.assign(t,Lc(r))},{})}}function Uf(e,t){
for(var r=Object.getOwnPropertyNames(e),n=!1,a={},i=0;i<r.length;i++){var o=r[i];ua.call(t,o)?a[o]=e[o]:n=!0}return n?a:
e}function g1(e){return Kf(e)?"{| ".concat(Mc(e.props)," |}"):T1(e)?qf("{| ".concat(Mc(e.props)," |}")):"Exact<".concat(
e.name,">")}function y1(e){return e.length>0}w.emptyTags={};function Yf(e,t){for(var r=[],n=0,a=e;n<a.length;n++){var i=a[n];
t.indexOf(i)!==-1&&r.push(i)}return r}function v1(e,t){if(e===w.emptyTags)return t;if(t===w.emptyTags)return e;var r=Object.
assign({},e);for(var n in t)if(ua.call(e,n)){var a=Yf(e[n],t[n]);if(y1(a))r[n]=a;else{r=w.emptyTags;break}}else r[n]=t[n];
return r}function b1(e,t){if(e===w.emptyTags||t===w.emptyTags)return w.emptyTags;var r=w.emptyTags;for(var n in e)if(ua.
call(t,n)){var a=Yf(e[n],t[n]);a.length===0&&(r===w.emptyTags&&(r={}),r[n]=e[n].concat(t[n]))}return r}function Bf(e){return e.
_tag==="AnyType"}function zf(e){return e._tag==="LiteralType"}function w1(e){return e._tag==="KeyofType"}function Kf(e){
return e._tag==="InterfaceType"}function T1(e){return e._tag==="PartialType"}function k1(e){return e._tag==="StrictType"}
function S1(e){return e._tag==="ExactType"}function E1(e){return e._tag==="RefinementType"}function x1(e){return e._tag===
"IntersectionType"}function Gf(e){return e._tag==="UnionType"}function _1(e){return e._tag==="RecursiveType"}function A1(e){
return e._tag==="ReadonlyType"}var Dc=[];function Fn(e){if(Dc.indexOf(e)!==-1)return w.emptyTags;if(Kf(e)||k1(e)){var t=w.
emptyTags;for(var r in e.props){var n=e.props[r];zf(n)&&(t===w.emptyTags&&(t={}),t[r]=[n.value])}return t}else{if(S1(e)||
E1(e)||A1(e))return Fn(e.type);if(x1(e))return e.types.reduce(function(i,o){return v1(i,Fn(o))},w.emptyTags);if(Gf(e))return e.
types.slice(1).reduce(function(i,o){return b1(i,Fn(o))},Fn(e.types[0]));if(_1(e)){Dc.push(e);var a=Fn(e.type);return Dc.
pop(),a}}return w.emptyTags}w.getTags=Fn;function Jf(e){var t=Fn(e[0]),r=Object.keys(t),n=e.length,a=function(c){for(var u=t[c].
slice(),d=[t[c]],f=1;f<n;f++){var h=e[f],y=Fn(h),b=y[c];if(b===void 0)return"continue-keys";if(b.some(function(T){return u.
indexOf(T)!==-1}))return"continue-keys";u.push.apply(u,b),d.push(b)}return{value:[c,d]}};e:for(var i=0,o=r;i<o.length;i++){
var s=o[i],l=a(s);if(typeof l=="object")return l.value;switch(l){case"continue-keys":continue e}}}w.getIndex=Jf;var Zf=function(e){
Ne(t,e);function t(){var r=e.call(this,"null",function(n){return n===null},function(n,a){return r.is(n)?(0,w.success)(n):
(0,w.failure)(n,a)},w.identity)||this;return r._tag="NullType",r}return t}(Pe);w.NullType=Zf;w.nullType=new Zf;w.null=w.
nullType;var Xf=function(e){Ne(t,e);function t(){var r=e.call(this,"undefined",function(n){return n===void 0},function(n,a){
return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="UndefinedType",r}return t}(Pe);w.UndefinedType=
Xf;var Us=new Xf;w.undefined=Us;var Qf=function(e){Ne(t,e);function t(){var r=e.call(this,"void",Us.is,Us.validate,w.identity)||
this;return r._tag="VoidType",r}return t}(Pe);w.VoidType=Qf;w.voidType=new Qf;w.void=w.voidType;var eh=function(e){Ne(t,
e);function t(){var r=e.call(this,"unknown",function(n){return!0},w.success,w.identity)||this;return r._tag="UnknownType",
r}return t}(Pe);w.UnknownType=eh;w.unknown=new eh;var th=function(e){Ne(t,e);function t(){var r=e.call(this,"string",function(n){
return typeof n=="string"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="StringType",r}return t}(Pe);w.StringType=th;w.string=new th;var rh=function(e){Ne(t,e);function t(){var r=e.call(this,
"number",function(n){return typeof n=="number"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||
this;return r._tag="NumberType",r}return t}(Pe);w.NumberType=rh;w.number=new rh;var nh=function(e){Ne(t,e);function t(){
var r=e.call(this,"bigint",function(n){return typeof n=="bigint"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(
n,a)},w.identity)||this;return r._tag="BigIntType",r}return t}(Pe);w.BigIntType=nh;w.bigint=new nh;var ah=function(e){Ne(
t,e);function t(){var r=e.call(this,"boolean",function(n){return typeof n=="boolean"},function(n,a){return r.is(n)?(0,w.
success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="BooleanType",r}return t}(Pe);w.BooleanType=ah;w.boolean=
new ah;var ih=function(e){Ne(t,e);function t(){var r=e.call(this,"UnknownArray",Array.isArray,function(n,a){return r.is(
n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="AnyArrayType",r}return t}(Pe);w.AnyArrayType=ih;
w.UnknownArray=new ih;w.Array=w.UnknownArray;var oh=function(e){Ne(t,e);function t(){var r=e.call(this,"UnknownRecord",function(n){
return n!==null&&typeof n=="object"&&!Array.isArray(n)},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},
w.identity)||this;return r._tag="AnyDictionaryType",r}return t}(Pe);w.AnyDictionaryType=oh;w.UnknownRecord=new oh;var sh=function(e){
Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.value=o,s._tag="LiteralType",s}return t}(Pe);w.LiteralType=
sh;function $1(e,t){t===void 0&&(t=JSON.stringify(e));var r=function(n){return n===e};return new sh(t,r,function(n,a){return r(
n)?(0,w.success)(e):(0,w.failure)(n,a)},w.identity,e)}w.literal=$1;var lh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.keys=o,s._tag="KeyofType",s}return t}(Pe);w.KeyofType=lh;function R1(e,t){t===void 0&&
(t=Object.keys(e).map(function(n){return JSON.stringify(n)}).join(" | "));var r=function(n){return w.string.is(n)&&ua.call(
e,n)};return new lh(t,r,function(n,a){return r(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity,e)}w.keyof=R1;var ch=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i)||this;return l.type=o,l.predicate=s,l._tag="RefinementType",l}
return t}(Pe);w.RefinementType=ch;function uh(e,t,r){return qc(e,t,r)}w.brand=uh;w.Int=uh(w.number,function(e){return Number.
isInteger(e)},"Int");var Uc=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.runDefinition=
o,s._tag="RecursiveType",s}return t}(Pe);w.RecursiveType=Uc;Object.defineProperty(Uc.prototype,"type",{get:function(){return this.
runDefinition()},enumerable:!0,configurable:!0});function I1(e,t){var r,n=function(){return r||(r=t(a),r.name=e),r},a=new Uc(
e,function(i){return n().is(i)},function(i,o){return n().validate(i,o)},function(i){return n().encode(i)},n);return a}w.
recursion=I1;var dh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="A\
rrayType",s}return t}(Pe);w.ArrayType=dh;function ph(e,t){return t===void 0&&(t="Array<".concat(e.name,">")),new dh(t,function(r){
return w.UnknownArray.is(r)&&r.every(e.is)},function(r,n){var a=w.UnknownArray.validate(r,n);if((0,ut.isLeft)(a))return a;
for(var i=a.right,o=i.length,s=i,l=[],c=0;c<o;c++){var u=i[c],d=e.validate(u,Zr(n,String(c),e,u));if((0,ut.isLeft)(d))da(
l,d.left);else{var f=d.right;f!==u&&(s===i&&(s=i.slice()),s[c]=f)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},
e.encode===w.identity?w.identity:function(r){return r.map(e.encode)},e)}w.array=ph;var fh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.props=o,s._tag="InterfaceType",s}return t}(Pe);w.InterfaceType=fh;function Bc(e,t){
t===void 0&&(t=Wf(e));var r=Object.keys(e),n=r.map(function(i){return e[i]}),a=r.length;return new fh(t,function(i){if(w.
UnknownRecord.is(i)){for(var o=0;o<a;o++){var s=r[o],l=i[s];if(l===void 0&&!ua.call(i,s)||!n[o].is(l))return!1}return!0}
return!1},function(i,o){var s=w.UnknownRecord.validate(i,o);if((0,ut.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<
a;d++){var f=r[d],h=c[f],y=n[d],b=y.validate(h,Zr(o,f,y,h));if((0,ut.isLeft)(b))da(u,b.left);else{var T=b.right;(T!==h||
T===void 0&&!ua.call(c,f))&&(c===l&&(c=Ba({},l)),c[f]=T)}}return u.length>0?(0,w.failures)(u):(0,w.success)(c)},Hi(n)?w.
identity:function(i){for(var o=Ba({},i),s=0;s<a;s++){var l=r[s],c=n[s].encode;c!==w.identity&&(o[l]=c(i[l]))}return o},e)}
w.type=Bc;w.interface=Bc;var hh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.props=
o,s._tag="PartialType",s}return t}(Pe);w.PartialType=hh;function O1(e,t){t===void 0&&(t=qf(Wf(e)));var r=Object.keys(e),
n=r.map(function(i){return e[i]}),a=r.length;return new hh(t,function(i){if(w.UnknownRecord.is(i)){for(var o=0;o<a;o++){
var s=r[o],l=i[s];if(l!==void 0&&!e[s].is(l))return!1}return!0}return!1},function(i,o){var s=w.UnknownRecord.validate(i,
o);if((0,ut.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<a;d++){var f=r[d],h=c[f],y=e[f],b=y.validate(h,Zr(o,f,y,
h));if((0,ut.isLeft)(b))h!==void 0&&da(u,b.left);else{var T=b.right;T!==h&&(c===l&&(c=Ba({},l)),c[f]=T)}}return u.length>
0?(0,w.failures)(u):(0,w.success)(c)},Hi(n)?w.identity:function(i){for(var o=Ba({},i),s=0;s<a;s++){var l=r[s],c=i[l];c!==
void 0&&(o[l]=n[s].encode(c))}return o},e)}w.partial=O1;var Hc=function(e){Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(
this,r,n,a,i)||this;return l.domain=o,l.codomain=s,l._tag="DictionaryType",l}return t}(Pe);w.DictionaryType=Hc;function mh(e,t,r){
var n=Fc(e);return n?h1(Object.keys(n),e,t,r):m1(e,t,r)}w.record=mh;var Wc=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.types=o,s._tag="UnionType",s}return t}(Pe);w.UnionType=Wc;function gh(e,t){t===void 0&&
(t=Vf(e));var r=Jf(e);if(r!==void 0&&e.length>0){var n=r[0],a=r[1],i=a.length,o=function(s){for(var l=0;l<i;l++)if(a[l].
indexOf(s)!==-1)return l};return new Bs(t,function(s){if(w.UnknownRecord.is(s)){var l=o(s[n]);return l!==void 0?e[l].is(
s):!1}return!1},function(s,l){var c=w.UnknownRecord.validate(s,l);if((0,ut.isLeft)(c))return c;var u=c.right,d=o(u[n]);if(d===
void 0)return(0,w.failure)(s,l);var f=e[d];return f.validate(u,Zr(l,String(d),f,u))},Hi(e)?w.identity:function(s){var l=o(
s[n]);if(l===void 0)throw new Error("no codec found to encode value in union codec ".concat(t));return e[l].encode(s)},e,
n)}else return new Wc(t,function(s){return e.some(function(l){return l.is(s)})},function(s,l){for(var c=[],u=0;u<e.length;u++){
var d=e[u],f=d.validate(s,Zr(l,String(u),d,s));if((0,ut.isLeft)(f))da(c,f.left);else return(0,w.success)(f.right)}return(0,w.
failures)(c)},Hi(e)?w.identity:function(s){for(var l=0,c=e;l<c.length;l++){var u=c[l];if(u.is(s))return u.encode(s)}throw new Error(
"no codec found to encode value in union type ".concat(t))},e)}w.union=gh;var yh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="IntersectionType",s}return t}(Pe);w.IntersectionType=yh;function C1(e,t){
t===void 0&&(t="(".concat(e.map(function(n){return n.name}).join(" & "),")"));var r=e.length;return new yh(t,function(n){
return e.every(function(a){return a.is(n)})},e.length===0?w.success:function(n,a){for(var i=[],o=[],s=0;s<r;s++){var l=e[s],
c=l.validate(n,Zr(a,String(s),l,n));(0,ut.isLeft)(c)?da(o,c.left):i.push(c.right)}return o.length>0?(0,w.failures)(o):(0,w.
success)(jc(n,i))},e.length===0?w.identity:function(n){return jc(n,e.map(function(a){return a.encode(n)}))},e)}w.intersection=
C1;var vh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="TupleType",
s}return t}(Pe);w.TupleType=vh;function N1(e,t){t===void 0&&(t="[".concat(e.map(function(n){return n.name}).join(", "),"\
]"));var r=e.length;return new vh(t,function(n){return w.UnknownArray.is(n)&&n.length===r&&e.every(function(a,i){return a.
is(n[i])})},function(n,a){var i=w.UnknownArray.validate(n,a);if((0,ut.isLeft)(i))return i;for(var o=i.right,s=o.length>r?
o.slice(0,r):o,l=[],c=0;c<r;c++){var u=o[c],d=e[c],f=d.validate(u,Zr(a,String(c),d,u));if((0,ut.isLeft)(f))da(l,f.left);else{
var h=f.right;h!==u&&(s===o&&(s=o.slice()),s[c]=h)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},Hi(e)?w.identity:
function(n){return e.map(function(a,i){return a.encode(n[i])})},e)}w.tuple=N1;var bh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyType",s}return t}(Pe);w.ReadonlyType=bh;function P1(e,t){
return t===void 0&&(t="Readonly<".concat(e.name,">")),new bh(t,e.is,e.validate,e.encode,e)}w.readonly=P1;var wh=function(e){
Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyArrayType",s}return t}(Pe);
w.ReadonlyArrayType=wh;function D1(e,t){t===void 0&&(t="ReadonlyArray<".concat(e.name,">"));var r=ph(e);return new wh(t,
r.is,r.validate,r.encode,e)}w.readonlyArray=D1;var M1=function(e,t){return kh(Bc(e),t)};w.strict=M1;var Th=function(e){Ne(
t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ExactType",s}return t}(Pe);w.ExactType=
Th;function kh(e,t){t===void 0&&(t=g1(e));var r=Lc(e);return new Th(t,e.is,function(n,a){var i=w.UnknownRecord.validate(
n,a);if((0,ut.isLeft)(i))return i;var o=e.validate(n,a);return(0,ut.isLeft)(o)?o:(0,ut.right)(Uf(o.right,r))},function(n){
return e.encode(Uf(n,r))},e)}w.exact=kh;var Sh=function(e){Ne(t,e);function t(){var r=e.call(this,"Function",function(n){
return typeof n=="function"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="FunctionType",r}return t}(Pe);w.FunctionType=Sh;w.Function=new Sh;var Eh=function(e){Ne(t,e);function t(){var r=e.
call(this,"never",function(n){return!1},function(n,a){return(0,w.failure)(n,a)},function(){throw new Error("cannot encod\
e never")})||this;return r._tag="NeverType",r}return t}(Pe);w.NeverType=Eh;w.never=new Eh;var xh=function(e){Ne(t,e);function t(){
var r=e.call(this,"any",function(n){return!0},w.success,w.identity)||this;return r._tag="AnyType",r}return t}(Pe);w.AnyType=
xh;w.any=new xh;function qc(e,t,r){return r===void 0&&(r="(".concat(e.name," | ").concat(Hf(t),")")),new ch(r,function(n){
return e.is(n)&&t(n)},function(n,a){var i=e.validate(n,a);if((0,ut.isLeft)(i))return i;var o=i.right;return t(o)?(0,w.success)(
o):(0,w.failure)(o,a)},e.encode,e,t)}w.refinement=qc;w.Integer=qc(w.number,Number.isInteger,"Integer");var Bs=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i,o)||this;return l.tag=s,l}return t}(Wc);w.TaggedUnionType=Bs;var j1=function(e,t,r){
r===void 0&&(r=Vf(t));var n=gh(t,r);return n instanceof Bs?n:(console.warn("[io-ts] Cannot build a tagged union for ".concat(
r,", returning a de-optimized union")),new Bs(r,n.is,n.validate,n.encode,t,e))};w.taggedUnion=j1;var L1=function(e,t){return{
value:e,context:t}};w.getValidationError=L1;var F1=function(e){return[{key:"",type:e}]};w.getDefaultContext=F1;w.Dictionary=
w.UnknownRecord;var _h=function(e){Ne(t,e);function t(){var r=e.call(this,"object",function(n){return n!==null&&typeof n==
"object"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="ObjectType",
r}return t}(Pe);w.ObjectType=_h;w.object=new _h;w.dictionary=mh;var U1=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.props=o,s._tag="StrictType",s}return t}(Pe);w.StrictType=U1;function B1(e){return e}w.
clean=B1;function H1(e){return function(){return e}}w.alias=H1});var Oh=We((EM,Ih)=>{"use strict";var nt=class e extends Array{constructor(t,r){if(super(t),this.sign=r,Object.setPrototypeOf(
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
l),u|=s>>>30-d,f=s<<d+2,h=d+2);0<h&&0<l;)l--,s=t.__digit(l),f|=30<=h?s<<h-30:s>>>30-h,h-=30;let y=e.__decideRounding(t,h,
l,s);if((y===1||y===0&&(1&f)==1)&&(f=f+1>>>0,f===0&&(u++,u>>>20!=0&&(u=0,o++,1023<o))))return t.sign?-1/0:1/0;let b=t.sign?
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
let y=[],b=[],T=!1;do{let S=0,E=0;for(;;){let _;if(o-48>>>0<f)_=o-48;else if((32|o)-97>>>0<h)_=(32|o)-87;else{T=!0;break}
if(E+=l,S=S<<l|_,++i===a){T=!0;break}if(o=t.charCodeAt(i),30<E+l)break}y.push(S),b.push(E)}while(!T);e.__fillFromParts(d,
y,b)}else{d.__initializeDigits();let y=!1,b=0;do{let T=0,S=1;for(;;){let _;if(o-48>>>0<f)_=o-48;else if((32|o)-97>>>0<h)
_=(32|o)-87;else{y=!0;break}let O=S*r;if(1073741823<O)break;if(S=O,T=T*r+_,b++,++i===a){y=!0;break}o=t.charCodeAt(i)}c=30*
e.__kBitsPerCharTableMultiplier-1;let E=0|(l*b+c>>>e.__kBitsPerCharTableShift)/30;d.__inplaceMultiplyAdd(S,T,E)}while(!y)}
if(i!==a){if(!e.__isWhitespace(o))return null;for(i++;i<a;i++)if(o=t.charCodeAt(i),!e.__isWhitespace(o))return null}return d.
sign=n==-1,d.__trim()}static __fillFromParts(t,r,n){let a=0,i=0,o=0;for(let s=r.length-1;0<=s;s--){let l=r[s],c=n[s];i|=
l<<o,o+=c,o===30?(t.__setDigit(a++,i),o=0,i=0):30<o&&(t.__setDigit(a++,1073741823&i),o-=30,i=l>>>c-o)}if(i!==0){if(a>=t.
length)throw new Error("implementation bug");t.__setDigit(a++,i)}for(;a<t.length;a++)t.__setDigit(a,0)}static __toStringBasePowerOfTwo(t,r){
let n=t.length,a=r-1;a=(85&a>>>1)+(85&a),a=(51&a>>>2)+(51&a),a=(15&a>>>4)+(15&a);let i=a,o=r-1,s=t.__digit(n-1),l=e.__clz30(
s),c=0|(30*n-l+i-1)/i;if(t.sign&&c++,268435456<c)throw new Error("string too long");let u=Array(c),d=c-1,f=0,h=0;for(let b=0;b<
n-1;b++){let T=t.__digit(b),S=(f|T<<h)&o;u[d--]=e.__kConversionChars[S];let E=i-h;for(f=T>>>E,h=30-E;h>=i;)u[d--]=e.__kConversionChars[f&
o],f>>>=i,h-=i}let y=(f|s<<h)&o;for(u[d--]=e.__kConversionChars[y],f=s>>>i-h;f!==0;)u[d--]=e.__kConversionChars[f&o],f>>>=
i;if(t.sign&&(u[d--]="-"),d!=-1)throw new Error("implementation bug");return u.join("")}static __toStringGeneric(t,r,n){
let a=t.length;if(a===0)return"";if(a===1){let b=t.__unsignedDigit(0).toString(r);return n===!1&&t.sign&&(b="-"+b),b}let i=30*
a-e.__clz30(t.__digit(a-1)),o=e.__kMaxBitsPerChar[r],s=o-1,l=i*e.__kBitsPerCharTableMultiplier;l+=s-1,l=0|l/s;let c=l+1>>
1,u=e.exponentiate(e.__oneDigit(r,!1),e.__oneDigit(c,!1)),d,f,h=u.__unsignedDigit(0);if(u.length===1&&32767>=h){d=new e(
t.length,!1),d.__initializeDigits();let b=0;for(let T=2*t.length-1;0<=T;T--){let S=b<<15|t.__halfDigit(T);d.__setHalfDigit(
T,0|S/h),b=0|S%h}f=b.toString(r)}else{let b=e.__absoluteDivLarge(t,u,!0,!0);d=b.quotient;let T=b.remainder.__trim();f=e.
__toStringGeneric(T,r,!0)}d.__trim();let y=e.__toStringGeneric(d,r,!0);for(;f.length<c;)f="0"+f;return n===!1&&t.sign&&(y=
"-"+y),y+f}static __unequalSign(t){return t?-1:1}static __absoluteGreater(t){return t?-1:1}static __absoluteLess(t){return t?
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
h=20,y=29-l;if(y!==(0|(c-1)%30))throw new Error("implementation bug");let b,T=0;if(20>y){let S=h-y;T=S+32,b=d>>>S,d=d<<32-
S|f>>>S,f<<=32-S}else if(y===20)T=32,b=d,d=f,f=0;else{let S=y-h;T=32-S,b=d<<S|f>>>32-S,d=f<<S,f=0}if(s>>>=0,b>>>=0,s>b)return e.
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
d,h=d>>>15,y=e.__imul(f,i),b=e.__imul(f,o),T=e.__imul(h,i),S=e.__imul(h,o);c+=l+y+s,s=c>>>30,c&=1073741823,c+=((32767&b)<<
15)+((32767&T)<<15),s+=c>>>30,l=S+(b>>>15)+(T>>>15),n.__setDigit(a,1073741823&c)}for(;s!=0||l!==0;a++){let c=n.__digit(a);
c+=s+l,l=0,s=c>>>30,n.__setDigit(a,1073741823&c)}}static __internalMultiplyAdd(t,r,n,a,i){let o=n,s=0;for(let l=0;l<a;l++){
let c=t.__digit(l),u=e.__imul(32767&c,r),d=e.__imul(c>>>15,r),f=u+((32767&d)<<15)+s+o;o=f>>>30,s=d>>>15,i.__setDigit(l,1073741823&
f)}if(i.length>a)for(i.__setDigit(a++,o+s);a<i.length;)i.__setDigit(a++,0);else if(o+s!==0)throw new Error("implementati\
on bug")}__inplaceMultiplyAdd(t,r,n){n>this.length&&(n=this.length);let a=32767&t,i=t>>>15,o=0,s=r;for(let l=0;l<n;l++){
let c=this.__digit(l),u=32767&c,d=c>>>15,f=e.__imul(u,a),h=e.__imul(u,i),y=e.__imul(d,a),b=e.__imul(d,i),T=s+f+o;o=T>>>30,
T&=1073741823,T+=((32767&h)<<15)+((32767&y)<<15),o+=T>>>30,s=b+(h>>>15)+(y>>>15),this.__setDigit(l,1073741823&T)}if(o!=0||
s!==0)throw new Error("implementation bug")}static __absoluteDivSmall(t,r,n=null){n===null&&(n=new e(t.length,!1));let a=0;
for(let i,o=2*t.length-1;0<=o;o-=2){i=(a<<15|t.__halfDigit(o))>>>0;let s=0|i/r;a=0|i%r,i=(a<<15|t.__halfDigit(o-1))>>>0;
let l=0|i/r;a=0|i%r,n.__setDigit(o>>>1,s<<15|l)}return n}static __absoluteModSmall(t,r){let n=0;for(let a=2*t.length-1;0<=
a;a--)n=0|((n<<15|t.__halfDigit(a))>>>0)%r;return n}static __absoluteDivLarge(t,r,n,a){let i=r.__halfDigitLength(),o=r.length,
s=t.__halfDigitLength()-i,l=null;n&&(l=new e(s+2>>>1,!1),l.__initializeDigits());let c=new e(i+2>>>1,!1);c.__initializeDigits();
let u=e.__clz15(r.__halfDigit(i-1));0<u&&(r=e.__specialLeftShift(r,u,0));let d=e.__specialLeftShift(t,u,1),f=r.__halfDigit(
i-1),h=0;for(let y,b=s;0<=b;b--){y=32767;let T=d.__halfDigit(b+i);if(T!==f){let E=(T<<15|d.__halfDigit(b+i-1))>>>0;y=0|E/
f;let _=0|E%f,O=r.__halfDigit(i-2),M=d.__halfDigit(b+i-2);for(;e.__imul(y,O)>>>0>(_<<16|M)>>>0&&(y--,_+=f,!(32767<_)););}
e.__internalMultiplyAdd(r,y,0,o,c);let S=d.__inplaceSub(c,b,i+1);S!==0&&(S=d.__inplaceAdd(r,b,i),d.__setHalfDigit(b+i,32767&
d.__halfDigit(b+i)+S),y--),n&&(1&b?h=y<<15:l.__setDigit(b>>>1,h|y))}if(a)return d.__inplaceRightShift(u),n?{quotient:l,remainder:d}:
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
o)>>>s,f=n-o-1;for(let h=0;h<f;h++){let y=t.__digit(h+o+1);u.__setDigit(h,1073741823&y<<30-s|d),d=y>>>s}u.__setDigit(f,d)}
return c&&(u=e.__absoluteAddOne(u,!0,u)),u.__trim()}static __rightShiftByMaximum(t){return t?e.__oneDigit(1,!0):e.__zero()}static __toShiftAmount(t){
if(1<t.length)return-1;let r=t.__unsignedDigit(0);return r>e.__kMaxLengthBits?-1:r}static __toPrimitive(t,r="default"){if(typeof t!=
"object"||t.constructor===e)return t;if(typeof Symbol<"u"&&typeof Symbol.toPrimitive=="symbol"&&t[Symbol.toPrimitive]){let i=t[Symbol.
toPrimitive](r);if(typeof i!="object")return i;throw new TypeError("Cannot convert object to primitive value")}let n=t.valueOf;
if(n){let i=n.call(t);if(typeof i!="object")return i}let a=t.toString;if(a){let i=a.call(t);if(typeof i!="object")return i}
throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(t){return e.__isBigInt(t)?t:+t}static __isBigInt(t){
return typeof t=="object"&&t!==null&&t.constructor===e}static __truncateToNBits(t,r){let n=0|(t+29)/30,a=new e(n,r.sign),
i=n-1;for(let s=0;s<i;s++)a.__setDigit(s,r.__digit(s));let o=r.__digit(i);if(t%30!=0){let s=32-t%30;o=o<<s>>>s}return a.
__setDigit(i,o),a.__trim()}static __truncateAndSubFromPowerOfTwo(t,r,n){var a=Math.min;let i=0|(t+29)/30,o=new e(i,n),s=0,
l=i-1,c=0;for(let h=a(l,r.length);s<h;s++){let y=0-r.__digit(s)-c;c=1&y>>>30,o.__setDigit(s,1073741823&y)}for(;s<l;s++)o.
__setDigit(s,0|1073741823&-c);let u=l<r.length?r.__digit(l):0,d=t%30,f;if(d==0)f=0-u-c,f&=1073741823;else{let h=32-d;u=u<<
h>>>h;let y=1<<32-h;f=y-u-c,f&=y-1}return o.__setDigit(l,f),o.__trim()}__digit(t){return this[t]}__unsignedDigit(t){return this[t]>>>
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
return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},nt.__imul=Math.imul||function(e,t){return 0|e*t},Ih.exports=nt});var hg=We((RM,fg)=>{"use strict";var pg="ArrowFunctionExpression",US={name:"arrow",init(e){e.addBinaryOp("=>",.1,!0),e.hooks.
add("gobble-expression",function(n){if(this.gobbleSpaces(),this.code===e.OPAREN_CODE){let a=this.index;if(this.index++,this.
gobbleSpaces(),this.code===e.CPAREN_CODE){this.index++;let i=this.gobbleBinaryOp();if(i==="=>"){let o=this.gobbleBinaryExpression();
o||this.throwError("Expected expression after "+i),n.node={type:pg,params:null,body:o};return}}this.index=a}}),e.hooks.add(
"after-expression",function(n){t(n.node)});function t(r){r&&(Object.values(r).forEach(n=>{n&&typeof n=="object"&&t(n)}),
r.operator==="=>"&&(r.type=pg,r.params=r.left?[r.left]:null,r.body=r.right,r.params&&r.params[0].type===e.SEQUENCE_EXP&&
(r.params=r.params[0].expressions),delete r.left,delete r.right,delete r.operator))}}};fg.exports=US});var yg=We((IM,gg)=>{"use strict";var BS="ObjectExpression",mg="Property",HS={name:"object",init(e){function t(r){if(this.
code===123){this.index++;let n=[];for(;!isNaN(this.code);){if(this.gobbleSpaces(),this.code===125){this.index++,r.node=this.
gobbleTokenProperty({type:BS,properties:n});return}let a=this.gobbleExpression();if(!a)break;if(this.gobbleSpaces(),a.type===
e.IDENTIFIER&&(this.code===e.COMMA_CODE||this.code===125))n.push({type:mg,computed:!1,key:a,value:a,shorthand:!0});else if(this.
code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();i||this.throwError("unexpected object property");let o=a.
type===e.ARRAY_EXP;n.push({type:mg,computed:o,key:o?a.elements[0]:a,value:i,shorthand:!1}),this.gobbleSpaces()}else a&&n.
push(a);this.code===e.COMMA_CODE&&this.index++}this.throwError("missing }")}}e.hooks.add("gobble-token",t)}};gg.exports=
HS});var bg=We((OM,vg)=>{"use strict";var WS={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===47){
let n=++this.index,a=!1;for(;this.index<this.expr.length;){if(this.code===47&&!a){let i=this.expr.slice(n,this.index),o="";
for(;++this.index<this.expr.length;){let l=this.code;if(l>=97&&l<=122||l>=65&&l<=90||l>=48&&l<=57)o+=this.char;else break}
let s;try{s=new RegExp(i,o)}catch(l){this.throwError(l.message)}return r.node={type:e.LITERAL,value:s,raw:this.expr.slice(
n-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&
(a=!1),this.index+=this.code===92?2:1}this.throwError("Unclosed Regex")}})}};vg.exports=WS});var Tg=We((CM,wg)=>{"use strict";var qS={name:"jsepSpread",init(e){e.hooks.add("gobble-token",function(r){[0,1,2].every(
n=>this.expr.charCodeAt(this.index+n)===e.PERIOD_CODE)&&(this.index+=3,r.node={type:"SpreadElement",argument:this.gobbleExpression()})})}};
wg.exports=qS});var Sg=We((NM,kg)=>{"use strict";var VS="TaggedTemplateExpression",YS="TemplateLiteral",zS="TemplateElement",KS={name:"j\
sepTemplateLiteral",init(e){function t(r,n=!0){if(this.code===96){let a={type:YS,quasis:[],expressions:[]},i="",o="",s=!1,
l=this.expr.length,c=()=>a.quasis.push({type:zS,value:{raw:o,cooked:i},tail:s});for(;this.index<l;){let u=this.expr.charAt(
++this.index);if(u==="`")return this.index+=1,s=!0,c(),r.node=a,n&&(r.node=this.gobbleTokenProperty(r.node)),r.node;if(u===
"$"&&this.expr.charAt(this.index+1)==="{")this.index+=2,c(),o="",i="",a.expressions.push(...this.gobbleExpressions(125)),
this.code!==125&&this.throwError("unclosed ${");else if(u==="\\")switch(o+=u,u=this.expr.charAt(++this.index),o+=u,u){case"\
n":i+=`
`;break;case"r":i+="\r";break;case"t":i+="	";break;case"b":i+="\b";break;case"f":i+="\f";break;case"v":i+="\v";break;default:
i+=u}else i+=u,o+=u}this.throwError("Unclosed `")}}e.hooks.add("gobble-token",t),e.hooks.add("after-token",function(n){if((n.
node.type===e.IDENTIFIER||n.node.type===e.MEMBER_EXP)&&this.code===96)return n.node={type:VS,tag:n.node,quasi:t.bind(this)(
n,!1)},n.node=this.gobbleTokenProperty(n.node),n.node})}};kg.exports=KS});var Fg=We(me=>{"use strict";var od=Symbol.for("react.transitional.element"),pE=Symbol.for("react.portal"),fE=Symbol.for(
"react.fragment"),hE=Symbol.for("react.strict_mode"),mE=Symbol.for("react.profiler"),gE=Symbol.for("react.consumer"),yE=Symbol.
for("react.context"),vE=Symbol.for("react.forward_ref"),bE=Symbol.for("react.suspense"),wE=Symbol.for("react.memo"),Ng=Symbol.
for("react.lazy"),$g=Symbol.iterator;function TE(e){return e===null||typeof e!="object"?null:(e=$g&&e[$g]||e["@@iterator"],
typeof e=="function"?e:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},
enqueueSetState:function(){}},Dg=Object.assign,Mg={};function ui(e,t,r){this.props=e,this.context=t,this.refs=Mg,this.updater=
r||Pg}ui.prototype.isReactComponent={};ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&
e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variabl\
es.");this.updater.enqueueSetState(this,e,t,"setState")};ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(
this,e,"forceUpdate")};function jg(){}jg.prototype=ui.prototype;function sd(e,t,r){this.props=e,this.context=t,this.refs=
Mg,this.updater=r||Pg}var ld=sd.prototype=new jg;ld.constructor=sd;Dg(ld,ui.prototype);ld.isPureReactComponent=!0;var Rg=Array.
isArray,Ge={H:null,A:null,T:null,S:null,V:null},Lg=Object.prototype.hasOwnProperty;function cd(e,t,r,n,a,i){return r=i.ref,
{$$typeof:od,type:e,key:t,ref:r!==void 0?r:null,props:i}}function kE(e,t){return cd(e.type,t,void 0,void 0,void 0,e.props)}
function ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===od}function SE(e){var t={"=":"=0",":":"=2"};return"$"+e.
replace(/[=:]/g,function(r){return t[r]})}var Ig=/\/+/g;function id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?
SE(""+e.key):t.toString(36)}function Og(){}function EE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":
throw e.reason;default:switch(typeof e.status=="string"?e.then(Og,Og):(e.status="pending",e.then(function(t){e.status===
"pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"\
fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ci(e,t,r,n,a){var i=typeof e;(i==="undefined"||
i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"\
object":switch(e.$$typeof){case od:case pE:o=!0;break;case Ng:return o=e._init,ci(o(e._payload),t,r,n,a)}}if(o)return a=
a(e),o=n===""?"."+id(e,0):n,Rg(a)?(r="",o!=null&&(r=o.replace(Ig,"$&/")+"/"),ci(a,t,r,"",function(c){return c})):a!=null&&
(ud(a)&&(a=kE(a,r+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Ig,"$&/")+"/")+o)),t.push(a)),1;o=0;var s=n===""?
".":n+":";if(Rg(e))for(var l=0;l<e.length;l++)n=e[l],i=s+id(n,l),o+=ci(n,t,r,i,a);else if(l=TE(e),typeof l=="function")for(e=
l.call(e),l=0;!(n=e.next()).done;)n=n.value,i=s+id(n,l++),o+=ci(n,t,r,i,a);else if(i==="object"){if(typeof e.then=="func\
tion")return ci(EE(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object O\
bject]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use a\
n array instead.")}return o}function Sl(e,t,r){if(e==null)return e;var n=[],a=0;return ci(e,n,"","",function(i){return t.
call(r,i,a++)}),n}function xE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===
-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&
(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Cg=typeof reportError=="function"?
reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("e\
rror",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(
e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.
emit("uncaughtException",e);return}console.error(e)};function _E(){}me.Children={map:Sl,forEach:function(e,t,r){Sl(e,function(){
t.apply(this,arguments)},r)},count:function(e){var t=0;return Sl(e,function(){t++}),t},toArray:function(e){return Sl(e,function(t){
return t})||[]},only:function(e){if(!ud(e))throw Error("React.Children.only expected to receive a single React element c\
hild.");return e}};me.Component=ui;me.Fragment=fE;me.Profiler=mE;me.PureComponent=sd;me.StrictMode=hE;me.Suspense=bE;me.
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ge;me.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ge.
H.useMemoCache(e)}};me.cache=function(e){return function(){return e.apply(null,arguments)}};me.cloneElement=function(e,t,r){
if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=Dg({},e.props),a=e.key,i=void 0;
if(t!=null)for(o in t.ref!==void 0&&(i=void 0),t.key!==void 0&&(a=""+t.key),t)!Lg.call(t,o)||o==="key"||o==="__self"||o===
"__source"||o==="ref"&&t.ref===void 0||(n[o]=t[o]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var s=Array(
o),l=0;l<o;l++)s[l]=arguments[l+2];n.children=s}return cd(e.type,a,void 0,void 0,i,n)};me.createContext=function(e){return e=
{$$typeof:yE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:gE,
_context:e},e};me.createElement=function(e,t,r){var n,a={},i=null;if(t!=null)for(n in t.key!==void 0&&(i=""+t.key),t)Lg.
call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<
o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===
void 0&&(a[n]=o[n]);return cd(e,i,void 0,void 0,null,a)};me.createRef=function(){return{current:null}};me.forwardRef=function(e){
return{$$typeof:vE,render:e}};me.isValidElement=ud;me.lazy=function(e){return{$$typeof:Ng,_payload:{_status:-1,_result:e},
_init:xE}};me.memo=function(e,t){return{$$typeof:wE,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Ge.
T,r={};Ge.T=r;try{var n=e(),a=Ge.S;a!==null&&a(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(_E,Cg)}catch(i){
Cg(i)}finally{Ge.T=t}};me.unstable_useCacheRefresh=function(){return Ge.H.useCacheRefresh()};me.use=function(e){return Ge.
H.use(e)};me.useActionState=function(e,t,r){return Ge.H.useActionState(e,t,r)};me.useCallback=function(e,t){return Ge.H.
useCallback(e,t)};me.useContext=function(e){return Ge.H.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=
function(e,t){return Ge.H.useDeferredValue(e,t)};me.useEffect=function(e,t,r){var n=Ge.H;if(typeof r=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)};me.useId=function(){return Ge.
H.useId()};me.useImperativeHandle=function(e,t,r){return Ge.H.useImperativeHandle(e,t,r)};me.useInsertionEffect=function(e,t){
return Ge.H.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return Ge.H.useLayoutEffect(e,t)};me.useMemo=function(e,t){
return Ge.H.useMemo(e,t)};me.useOptimistic=function(e,t){return Ge.H.useOptimistic(e,t)};me.useReducer=function(e,t,r){return Ge.
H.useReducer(e,t,r)};me.useRef=function(e){return Ge.H.useRef(e)};me.useState=function(e){return Ge.H.useState(e)};me.useSyncExternalStore=
function(e,t,r){return Ge.H.useSyncExternalStore(e,t,r)};me.useTransition=function(){return Ge.H.useTransition()};me.version=
"19.1.0"});var Ug=We((fe,El)=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(v,A){Object.defineProperty(n.
prototype,v,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",A[0],A[1])}})}function t(v){
return v===null||typeof v!="object"?null:(v=mn&&v[mn]||v["@@iterator"],typeof v=="function"?v:null)}function r(v,A){v=(v=
v.constructor)&&(v.displayName||v.name)||"ReactClass";var j=v+"."+A;La[j]||(console.error("Can't call %s on a component \
that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.stat\
e` directly or define a `state = {};` class property with the desired state in the %s component.",A,v),La[j]=!0)}function n(v,A,j){
this.props=v,this.context=A,this.refs=kc,this.updater=j||Rs}function a(){}function i(v,A,j){this.props=v,this.context=A,
this.refs=kc,this.updater=j||Rs}function o(v){return""+v}function s(v){try{o(v);var A=!1}catch{A=!0}if(A){A=console;var j=A.
error,L=typeof Symbol=="function"&&Symbol.toStringTag&&v[Symbol.toStringTag]||v.constructor.name||"Object";return j.call(
A,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",L),o(v)}}function l(v){
if(v==null)return null;if(typeof v=="function")return v.$$typeof===$w?null:v.displayName||v.name||null;if(typeof v=="str\
ing")return v;switch(v){case Ir:return"Fragment";case C:return"Profiler";case or:return"StrictMode";case Hr:return"Suspe\
nse";case Or:return"SuspenseList";case bt:return"Activity"}if(typeof v=="object")switch(typeof v.tag=="number"&&console.
error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
v.$$typeof){case lt:return"Portal";case He:return(v.displayName||"Context")+".Provider";case ae:return(v._context.displayName||
"Context")+".Consumer";case ht:var A=v.render;return v=v.displayName,v||(v=A.displayName||A.name||"",v=v!==""?"ForwardRe\
f("+v+")":"ForwardRef"),v;case sa:return A=v.displayName||null,A!==null?A:l(v.type)||"Memo";case Mn:A=v._payload,v=v._init;
try{return l(v(A))}catch{}}return null}function c(v){if(v===Ir)return"<>";if(typeof v=="object"&&v!==null&&v.$$typeof===
Mn)return"<...>";try{var A=l(v);return A?"<"+A+">":"<...>"}catch{return"<...>"}}function u(){var v=Se.A;return v===null?
null:v.getOwner()}function d(){return Error("react-stack-top-frame")}function f(v){if(Os.call(v,"key")){var A=Object.getOwnPropertyDescriptor(
v,"key").get;if(A&&A.isReactWarning)return!1}return v.key!==void 0}function h(v,A){function j(){of||(of=!0,console.error(
"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same \
value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",A))}j.
isReactWarning=!0,Object.defineProperty(v,"key",{get:j,configurable:!0})}function y(){var v=l(this.type);return lf[v]||(lf[v]=
!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the \
JSX Element type in a future release.")),v=this.props.ref,v!==void 0?v:null}function b(v,A,j,L,J,Ee,ye,je){return j=Ee.ref,
v={$$typeof:ot,type:v,key:A,props:Ee,_owner:J},(j!==void 0?j:null)!==null?Object.defineProperty(v,"ref",{enumerable:!1,get:y}):
Object.defineProperty(v,"ref",{enumerable:!1,value:null}),v._store={},Object.defineProperty(v._store,"validated",{configurable:!1,
enumerable:!1,writable:!0,value:0}),Object.defineProperty(v,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),
Object.defineProperty(v,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ye}),Object.defineProperty(v,"_de\
bugTask",{configurable:!1,enumerable:!1,writable:!0,value:je}),Object.freeze&&(Object.freeze(v.props),Object.freeze(v)),
v}function T(v,A){return A=b(v.type,A,void 0,void 0,v._owner,v.props,v._debugStack,v._debugTask),v._store&&(A._store.validated=
v._store.validated),A}function S(v){return typeof v=="object"&&v!==null&&v.$$typeof===ot}function E(v){var A={"=":"=0","\
:":"=2"};return"$"+v.replace(/[=:]/g,function(j){return A[j]})}function _(v,A){return typeof v=="object"&&v!==null&&v.key!=
null?(s(v.key),E(""+v.key)):A.toString(36)}function O(){}function M(v){switch(v.status){case"fulfilled":return v.value;case"\
rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(O,O):(v.status="pending",v.then(function(A){v.status===
"pending"&&(v.status="fulfilled",v.value=A)},function(A){v.status==="pending"&&(v.status="rejected",v.reason=A)})),v.status){case"\
fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function W(v,A,j,L,J){var Ee=typeof v;(Ee==="undefined"||
Ee==="boolean")&&(v=null);var ye=!1;if(v===null)ye=!0;else switch(Ee){case"bigint":case"string":case"number":ye=!0;break;case"\
object":switch(v.$$typeof){case ot:case lt:ye=!0;break;case Mn:return ye=v._init,W(ye(v._payload),A,j,L,J)}}if(ye){ye=v,
J=J(ye);var je=L===""?"."+_(ye,0):L;return nf(J)?(j="",je!=null&&(j=je.replace(uf,"$&/")+"/"),W(J,A,j,"",function(jn){return jn})):
J!=null&&(S(J)&&(J.key!=null&&(ye&&ye.key===J.key||s(J.key)),j=T(J,j+(J.key==null||ye&&ye.key===J.key?"":(""+J.key).replace(
uf,"$&/")+"/")+je),L!==""&&ye!=null&&S(ye)&&ye.key==null&&ye._store&&!ye._store.validated&&(j._store.validated=2),J=j),A.
push(J)),1}if(ye=0,je=L===""?".":L+":",nf(v))for(var Te=0;Te<v.length;Te++)L=v[Te],Ee=je+_(L,Te),ye+=W(L,A,j,Ee,J);else if(Te=
t(v),typeof Te=="function")for(Te===v.entries&&(cf||console.warn("Using Maps as children is not supported. Use an array \
of keyed ReactElements instead."),cf=!0),v=Te.call(v),Te=0;!(L=v.next()).done;)L=L.value,Ee=je+_(L,Te++),ye+=W(L,A,j,Ee,
J);else if(Ee==="object"){if(typeof v.then=="function")return W(M(v),A,j,L,J);throw A=String(v),Error("Objects are not v\
alid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":A)+"). If you \
meant to render a collection of children, use an array instead.")}return ye}function G(v,A,j){if(v==null)return v;var L=[],
J=0;return W(v,L,"","",function(Ee){return A.call(j,Ee,J++)}),L}function Z(v){if(v._status===-1){var A=v._result;A=A(),A.
then(function(j){(v._status===0||v._status===-1)&&(v._status=1,v._result=j)},function(j){(v._status===0||v._status===-1)&&
(v._status=2,v._result=j)}),v._status===-1&&(v._status=0,v._result=A)}if(v._status===1)return A=v._result,A===void 0&&console.
error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,A),"default"in A||console.error(`lazy: Expected the result of \
a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,A),A.default;throw v._result}function H(){var v=Se.H;return v===
null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could \
happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),v}function we(){}function Y(v){
if(Cs===null)try{var A=("require"+Math.random()).slice(0,7);Cs=(El&&El[A]).call(El,"timers").setImmediate}catch{Cs=function(L){
pf===!1&&(pf=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so\
 enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/iss\
ues if you encounter this warning."));var J=new MessageChannel;J.port1.onmessage=L,J.port2.postMessage(void 0)}}return Cs(
v)}function te(v){return 1<v.length&&typeof AggregateError=="function"?new AggregateError(v):v[0]}function _e(v,A){A!==Ns-
1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls\
 before making a new one. "),Ns=A}function pe(v,A,j){var L=Se.actQueue;if(L!==null)if(L.length!==0)try{ie(L),Y(function(){
return pe(v,A,j)});return}catch(J){Se.thrownErrors.push(J)}else Se.actQueue=null;0<Se.thrownErrors.length?(L=te(Se.thrownErrors),
Se.thrownErrors.length=0,j(L)):A(v)}function ie(v){if(!Sc){Sc=!0;var A=0;try{for(;A<v.length;A++){var j=v[A];do{Se.didUsePromise=
!1;var L=j(!1);if(L!==null){if(Se.didUsePromise){v[A]=j,v.splice(0,A);return}j=L}else break}while(!0)}v.length=0}catch(J){
v.splice(0,A+1),Se.thrownErrors.push(J)}finally{Sc=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var ot=Symbol.
for("react.transitional.element"),lt=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),or=Symbol.for("react.str\
ict_mode"),C=Symbol.for("react.profiler");Symbol.for("react.provider");var ae=Symbol.for("react.consumer"),He=Symbol.for(
"react.context"),ht=Symbol.for("react.forward_ref"),Hr=Symbol.for("react.suspense"),Or=Symbol.for("react.suspense_list"),
sa=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),bt=Symbol.for("react.activity"),mn=Symbol.iterator,La={},Rs={isMounted:function(){
return!1},enqueueForceUpdate:function(v){r(v,"forceUpdate")},enqueueReplaceState:function(v){r(v,"replaceState")},enqueueSetState:function(v){
r(v,"setState")}},rf=Object.assign,kc={};Object.freeze(kc),n.prototype.isReactComponent={},n.prototype.setState=function(v,A){
if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a func\
tion which returns an object of state variables.");this.updater.enqueueSetState(this,v,A,"setState")},n.prototype.forceUpdate=
function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};var Cr={isMounted:["isMounted","Instead, make sure to\
 clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceSt\
ate","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Is;for(Is in Cr)
Cr.hasOwnProperty(Is)&&e(Is,Cr[Is]);a.prototype=n.prototype,Cr=i.prototype=new a,Cr.constructor=i,rf(Cr,n.prototype),Cr.
isPureReactComponent=!0;var nf=Array.isArray,$w=Symbol.for("react.client.reference"),Se={H:null,A:null,T:null,S:null,V:null,
actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},
Os=Object.prototype.hasOwnProperty,af=console.createTask?console.createTask:function(){return null};Cr={"react-stack-bot\
tom-frame":function(v){return v()}};var of,sf,lf={},Rw=Cr["react-stack-bottom-frame"].bind(Cr,d)(),Iw=af(c(d)),cf=!1,uf=/\/+/g,
df=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="functio\
n"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message==
"string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.
emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},pf=!1,Cs=null,Ns=0,Ps=!1,Sc=!1,ff=typeof queueMicrotask==
"function"?function(v){queueMicrotask(function(){return queueMicrotask(v)})}:Y;Cr=Object.freeze({__proto__:null,c:function(v){
return H().useMemoCache(v)}}),fe.Children={map:G,forEach:function(v,A,j){G(v,function(){A.apply(this,arguments)},j)},count:function(v){
var A=0;return G(v,function(){A++}),A},toArray:function(v){return G(v,function(A){return A})||[]},only:function(v){if(!S(
v))throw Error("React.Children.only expected to receive a single React element child.");return v}},fe.Component=n,fe.Fragment=
Ir,fe.Profiler=C,fe.PureComponent=i,fe.StrictMode=or,fe.Suspense=Hr,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=
Se,fe.__COMPILER_RUNTIME=Cr,fe.act=function(v){var A=Se.actQueue,j=Ns;Ns++;var L=Se.actQueue=A!==null?A:[],J=!1;try{var Ee=v()}catch(Te){
Se.thrownErrors.push(Te)}if(0<Se.thrownErrors.length)throw _e(A,j),v=te(Se.thrownErrors),Se.thrownErrors.length=0,v;if(Ee!==
null&&typeof Ee=="object"&&typeof Ee.then=="function"){var ye=Ee;return ff(function(){J||Ps||(Ps=!0,console.error("You c\
alled act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act cal\
ls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Te,jn){J=!0,ye.then(function(Fa){
if(_e(A,j),j===0){try{ie(L),Y(function(){return pe(Fa,Te,jn)})}catch(Cw){Se.thrownErrors.push(Cw)}if(0<Se.thrownErrors.length){
var Ow=te(Se.thrownErrors);Se.thrownErrors.length=0,jn(Ow)}}else Te(Fa)},function(Fa){_e(A,j),0<Se.thrownErrors.length&&
(Fa=te(Se.thrownErrors),Se.thrownErrors.length=0),jn(Fa)})}}}var je=Ee;if(_e(A,j),j===0&&(ie(L),L.length!==0&&ff(function(){
J||Ps||(Ps=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testi\
ng React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Se.actQueue=
null),0<Se.thrownErrors.length)throw v=te(Se.thrownErrors),Se.thrownErrors.length=0,v;return{then:function(Te,jn){J=!0,j===
0?(Se.actQueue=L,Y(function(){return pe(je,Te,jn)})):Te(je)}}},fe.cache=function(v){return function(){return v.apply(null,
arguments)}},fe.captureOwnerStack=function(){var v=Se.getCurrentStack;return v===null?null:v()},fe.cloneElement=function(v,A,j){
if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var L=rf({},v.props),J=v.key,Ee=v.
_owner;if(A!=null){var ye;e:{if(Os.call(A,"ref")&&(ye=Object.getOwnPropertyDescriptor(A,"ref").get)&&ye.isReactWarning){
ye=!1;break e}ye=A.ref!==void 0}ye&&(Ee=u()),f(A)&&(s(A.key),J=""+A.key);for(je in A)!Os.call(A,je)||je==="key"||je==="_\
_self"||je==="__source"||je==="ref"&&A.ref===void 0||(L[je]=A[je])}var je=arguments.length-2;if(je===1)L.children=j;else if(1<
je){ye=Array(je);for(var Te=0;Te<je;Te++)ye[Te]=arguments[Te+2];L.children=ye}for(L=b(v.type,J,void 0,void 0,Ee,L,v._debugStack,
v._debugTask),J=2;J<arguments.length;J++)Ee=arguments[J],S(Ee)&&Ee._store&&(Ee._store.validated=1);return L},fe.createContext=
function(v){return v={$$typeof:He,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=
v,v.Consumer={$$typeof:ae,_context:v},v._currentRenderer=null,v._currentRenderer2=null,v},fe.createElement=function(v,A,j){
for(var L=2;L<arguments.length;L++){var J=arguments[L];S(J)&&J._store&&(J._store.validated=1)}if(L={},J=null,A!=null)for(Te in sf||
!("__self"in A)||"key"in A||(sf=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transfor\
m. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),f(A)&&(s(A.key),
J=""+A.key),A)Os.call(A,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(L[Te]=A[Te]);var Ee=arguments.length-2;if(Ee===
1)L.children=j;else if(1<Ee){for(var ye=Array(Ee),je=0;je<Ee;je++)ye[je]=arguments[je+2];Object.freeze&&Object.freeze(ye),
L.children=ye}if(v&&v.defaultProps)for(Te in Ee=v.defaultProps,Ee)L[Te]===void 0&&(L[Te]=Ee[Te]);J&&h(L,typeof v=="funct\
ion"?v.displayName||v.name||"Unknown":v);var Te=1e4>Se.recentlyCreatedOwnerStacks++;return b(v,J,void 0,void 0,u(),L,Te?
Error("react-stack-top-frame"):Rw,Te?af(c(v)):Iw)},fe.createRef=function(){var v={current:null};return Object.seal(v),v},
fe.forwardRef=function(v){v!=null&&v.$$typeof===sa?console.error("forwardRef requires a render function but received a `\
memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof v!="function"?console.error("forw\
ardRef requires a render function but was given %s.",v===null?"null":typeof v):v.length!==0&&v.length!==2&&console.error(
"forwardRef render functions accept exactly two parameters: props and ref. %s",v.length===1?"Did you forget to use the r\
ef parameter?":"Any additional parameter will be undefined."),v!=null&&v.defaultProps!=null&&console.error("forwardRef r\
ender functions do not support defaultProps. Did you accidentally pass a React component?");var A={$$typeof:ht,render:v},
j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(L){j=
L,v.name||v.displayName||(Object.defineProperty(v,"name",{value:L}),v.displayName=L)}}),A},fe.isValidElement=S,fe.lazy=function(v){
return{$$typeof:Mn,_payload:{_status:-1,_result:v},_init:Z}},fe.memo=function(v,A){v==null&&console.error("memo: The fir\
st argument must be a component. Instead received: %s",v===null?"null":typeof v),A={$$typeof:sa,type:v,compare:A===void 0?
null:A};var j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(L){
j=L,v.name||v.displayName||(Object.defineProperty(v,"name",{value:L}),v.displayName=L)}}),A},fe.startTransition=function(v){
var A=Se.T,j={};Se.T=j,j._updatedFibers=new Set;try{var L=v(),J=Se.S;J!==null&&J(j,L),typeof L=="object"&&L!==null&&typeof L.
then=="function"&&L.then(we,df)}catch(Ee){df(Ee)}finally{A===null&&j._updatedFibers&&(v=j._updatedFibers.size,j._updatedFibers.
clear(),10<v&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription \
please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),Se.T=A}},fe.unstable_useCacheRefresh=
function(){return H().useCacheRefresh()},fe.use=function(v){return H().use(v)},fe.useActionState=function(v,A,j){return H().
useActionState(v,A,j)},fe.useCallback=function(v,A){return H().useCallback(v,A)},fe.useContext=function(v){var A=H();return v.
$$typeof===ae&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to\
 call useContext(Context) instead?"),A.useContext(v)},fe.useDebugValue=function(v,A){return H().useDebugValue(v,A)},fe.useDeferredValue=
function(v,A){return H().useDeferredValue(v,A)},fe.useEffect=function(v,A,j){v==null&&console.warn("React Hook useEffect\
 requires an effect callback. Did you forget to pass a callback to the hook?");var L=H();if(typeof j=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(v,A)},fe.useId=function(){return H().
useId()},fe.useImperativeHandle=function(v,A,j){return H().useImperativeHandle(v,A,j)},fe.useInsertionEffect=function(v,A){
return v==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callba\
ck to the hook?"),H().useInsertionEffect(v,A)},fe.useLayoutEffect=function(v,A){return v==null&&console.warn("React Hook\
 useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),H().useLayoutEffect(v,A)},
fe.useMemo=function(v,A){return H().useMemo(v,A)},fe.useOptimistic=function(v,A){return H().useOptimistic(v,A)},fe.useReducer=
function(v,A,j){return H().useReducer(v,A,j)},fe.useRef=function(v){return H().useRef(v)},fe.useState=function(v){return H().
useState(v)},fe.useSyncExternalStore=function(v,A,j){return H().useSyncExternalStore(v,A,j)},fe.useTransition=function(){
return H().useTransition()},fe.version="19.1.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()});var Qn=We((BM,dd)=>{"use strict";process.env.NODE_ENV==="production"?dd.exports=Fg():dd.exports=Ug()});var Hg=We(xl=>{"use strict";var AE=Symbol.for("react.transitional.element"),$E=Symbol.for("react.fragment");function Bg(e,t,r){
var n=null;if(r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),"key"in t){r={};for(var a in t)a!=="key"&&(r[a]=t[a])}else
r=t;return t=r.ref,{$$typeof:AE,type:e,key:n,ref:t!==void 0?t:null,props:r}}xl.Fragment=$E;xl.jsx=Bg;xl.jsxs=Bg});var Wg=We(_l=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(C){if(C==null)return null;if(typeof C==
"function")return C.$$typeof===we?null:C.displayName||C.name||null;if(typeof C=="string")return C;switch(C){case b:return"\
Fragment";case S:return"Profiler";case T:return"StrictMode";case M:return"Suspense";case W:return"SuspenseList";case H:return"\
Activity"}if(typeof C=="object")switch(typeof C.tag=="number"&&console.error("Received an unexpected object in getCompon\
entNameFromType(). This is likely a bug in React. Please file an issue."),C.$$typeof){case y:return"Portal";case _:return(C.
displayName||"Context")+".Provider";case E:return(C._context.displayName||"Context")+".Consumer";case O:var ae=C.render;
return C=C.displayName,C||(C=ae.displayName||ae.name||"",C=C!==""?"ForwardRef("+C+")":"ForwardRef"),C;case G:return ae=C.
displayName||null,ae!==null?ae:e(C.type)||"Memo";case Z:ae=C._payload,C=C._init;try{return e(C(ae))}catch{}}return null}
function t(C){return""+C}function r(C){try{t(C);var ae=!1}catch{ae=!0}if(ae){ae=console;var He=ae.error,ht=typeof Symbol==
"function"&&Symbol.toStringTag&&C[Symbol.toStringTag]||C.constructor.name||"Object";return He.call(ae,"The provided key \
is an unsupported type %s. This value must be coerced to a string before using it here.",ht),t(C)}}function n(C){if(C===
b)return"<>";if(typeof C=="object"&&C!==null&&C.$$typeof===Z)return"<...>";try{var ae=e(C);return ae?"<"+ae+">":"<...>"}catch{
return"<...>"}}function a(){var C=Y.A;return C===null?null:C.getOwner()}function i(){return Error("react-stack-top-frame")}
function o(C){if(te.call(C,"key")){var ae=Object.getOwnPropertyDescriptor(C,"key").get;if(ae&&ae.isReactWarning)return!1}
return C.key!==void 0}function s(C,ae){function He(){ie||(ie=!0,console.error("%s: `key` is not a prop. Trying to access\
 it will result in `undefined` being returned. If you need to access the same value within the child component, you shou\
ld pass it as a different prop. (https://react.dev/link/special-props)",ae))}He.isReactWarning=!0,Object.defineProperty(
C,"key",{get:He,configurable:!0})}function l(){var C=e(this.type);return ot[C]||(ot[C]=!0,console.error("Accessing eleme\
nt.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future rele\
ase.")),C=this.props.ref,C!==void 0?C:null}function c(C,ae,He,ht,Hr,Or,sa,Mn){return He=Or.ref,C={$$typeof:h,type:C,key:ae,
props:Or,_owner:Hr},(He!==void 0?He:null)!==null?Object.defineProperty(C,"ref",{enumerable:!1,get:l}):Object.defineProperty(
C,"ref",{enumerable:!1,value:null}),C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,
writable:!0,value:0}),Object.defineProperty(C,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.
defineProperty(C,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:sa}),Object.defineProperty(C,"_debugTask",
{configurable:!1,enumerable:!1,writable:!0,value:Mn}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C}function u(C,ae,He,ht,Hr,Or,sa,Mn){
var bt=ae.children;if(bt!==void 0)if(ht)if(_e(bt)){for(ht=0;ht<bt.length;ht++)d(bt[ht]);Object.freeze&&Object.freeze(bt)}else
console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or Rea\
ct.jsxDEV. Use the Babel transform instead.");else d(bt);if(te.call(ae,"key")){bt=e(C);var mn=Object.keys(ae).filter(function(Rs){
return Rs!=="key"});ht=0<mn.length?"{key: someKey, "+mn.join(": ..., ")+": ...}":"{key: someKey}",or[bt+ht]||(mn=0<mn.length?
"{"+mn.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ht,bt,mn,bt),or[bt+ht]=!0)}if(bt=null,He!==void 0&&(r(He),bt=""+He),o(ae)&&(r(ae.key),
bt=""+ae.key),"key"in ae){He={};for(var La in ae)La!=="key"&&(He[La]=ae[La])}else He=ae;return bt&&s(He,typeof C=="funct\
ion"?C.displayName||C.name||"Unknown":C),c(C,bt,Or,Hr,a(),He,sa,Mn)}function d(C){typeof C=="object"&&C!==null&&C.$$typeof===
h&&C._store&&(C._store.validated=1)}var f=Qn(),h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.
for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler");Symbol.for("react.provider");var E=Symbol.
for("react.consumer"),_=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),W=Symbol.
for("react.suspense_list"),G=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),we=Symbol.
for("react.client.reference"),Y=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=Object.prototype.hasOwnProperty,
_e=Array.isArray,pe=console.createTask?console.createTask:function(){return null};f={"react-stack-bottom-frame":function(C){
return C()}};var ie,ot={},lt=f["react-stack-bottom-frame"].bind(f,i)(),Ir=pe(n(i)),or={};_l.Fragment=b,_l.jsx=function(C,ae,He,ht,Hr){
var Or=1e4>Y.recentlyCreatedOwnerStacks++;return u(C,ae,He,!1,ht,Hr,Or?Error("react-stack-top-frame"):lt,Or?pe(n(C)):Ir)},
_l.jsxs=function(C,ae,He,ht,Hr){var Or=1e4>Y.recentlyCreatedOwnerStacks++;return u(C,ae,He,!0,ht,Hr,Or?Error("react-stac\
k-top-frame"):lt,Or?pe(n(C)):Ir)}}()});var Al=We((qM,pd)=>{"use strict";process.env.NODE_ENV==="production"?pd.exports=Hg():pd.exports=Wg()});var fd=We(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.Allow=q.ALL=q.COLLECTION=q.ATOM=q.SPECIAL=
q.INF=q._INFINITY=q.INFINITY=q.NAN=q.BOOL=q.NULL=q.OBJ=q.ARR=q.NUM=q.STR=void 0;q.STR=1;q.NUM=2;q.ARR=4;q.OBJ=8;q.NULL=16;
q.BOOL=32;q.NAN=64;q.INFINITY=128;q._INFINITY=256;q.INF=q.INFINITY|q._INFINITY;q.SPECIAL=q.NULL|q.BOOL|q.INF|q.NAN;q.ATOM=
q.STR|q.NUM|q.SPECIAL;q.COLLECTION=q.ARR|q.OBJ;q.ALL=q.ATOM|q.COLLECTION;q.Allow={STR:q.STR,NUM:q.NUM,ARR:q.ARR,OBJ:q.OBJ,
NULL:q.NULL,BOOL:q.BOOL,NAN:q.NAN,INFINITY:q.INFINITY,_INFINITY:q._INFINITY,INF:q.INF,SPECIAL:q.SPECIAL,ATOM:q.ATOM,COLLECTION:q.
COLLECTION,ALL:q.ALL};q.default=q.Allow});var hd=We($t=>{"use strict";var RE=$t&&$t.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),IE=$t&&$t.__exportStar||function(e,t){
for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&RE(t,e,r)};Object.defineProperty($t,"__esModul\
e",{value:!0});$t.Allow=$t.MalformedJSON=$t.PartialJSON=$t.parseJSON=$t.parse=void 0;var rr=fd();Object.defineProperty($t,
"Allow",{enumerable:!0,get:function(){return rr.Allow}});IE(fd(),$t);var $l=class extends Error{};$t.PartialJSON=$l;var Rl=class extends Error{};
$t.MalformedJSON=Rl;function qg(e,t=rr.Allow.ALL){if(typeof e!="string")throw new TypeError(`expecting str, got ${typeof e}`);
if(!e.trim())throw new Error(`${e} is empty`);return OE(e.trim(),t)}$t.parseJSON=qg;var OE=(e,t)=>{let r=e.length,n=0,a=f=>{
throw new $l(`${f} at position ${n}`)},i=f=>{throw new Rl(`${f} at position ${n}`)},o=()=>(d(),n>=r&&a("Unexpected end o\
f input"),e[n]==='"'?s():e[n]==="{"?l():e[n]==="["?c():e.substring(n,n+4)==="null"||rr.Allow.NULL&t&&r-n<4&&"null".startsWith(
e.substring(n))?(n+=4,null):e.substring(n,n+4)==="true"||rr.Allow.BOOL&t&&r-n<4&&"true".startsWith(e.substring(n))?(n+=4,
!0):e.substring(n,n+5)==="false"||rr.Allow.BOOL&t&&r-n<5&&"false".startsWith(e.substring(n))?(n+=5,!1):e.substring(n,n+8)===
"Infinity"||rr.Allow.INFINITY&t&&r-n<8&&"Infinity".startsWith(e.substring(n))?(n+=8,1/0):e.substring(n,n+9)==="-Infinity"||
rr.Allow._INFINITY&t&&1<r-n&&r-n<9&&"-Infinity".startsWith(e.substring(n))?(n+=9,-1/0):e.substring(n,n+3)==="NaN"||rr.Allow.
NAN&t&&r-n<3&&"NaN".startsWith(e.substring(n))?(n+=3,NaN):u()),s=()=>{let f=n,h=!1;for(n++;n<r&&(e[n]!=='"'||h&&e[n-1]===
"\\");)h=e[n]==="\\"?!h:!1,n++;if(e.charAt(n)=='"')try{return JSON.parse(e.substring(f,++n-Number(h)))}catch(y){i(String(
y))}else if(rr.Allow.STR&t)try{return JSON.parse(e.substring(f,n-Number(h))+'"')}catch{return JSON.parse(e.substring(f,e.
lastIndexOf("\\"))+'"')}a("Unterminated string literal")},l=()=>{n++,d();let f={};try{for(;e[n]!=="}";){if(d(),n>=r&&rr.
Allow.OBJ&t)return f;let h=s();d(),n++;try{let y=o();f[h]=y}catch(y){if(rr.Allow.OBJ&t)return f;throw y}d(),e[n]===","&&
n++}}catch{if(rr.Allow.OBJ&t)return f;a("Expected '}' at end of object")}return n++,f},c=()=>{n++;let f=[];try{for(;e[n]!==
"]";)f.push(o()),d(),e[n]===","&&n++}catch{if(rr.Allow.ARR&t)return f;a("Expected ']' at end of array")}return n++,f},u=()=>{
if(n===0){e==="-"&&i("Not sure what '-' is");try{return JSON.parse(e)}catch(h){if(rr.Allow.NUM&t)try{return JSON.parse(e.
substring(0,e.lastIndexOf("e")))}catch{}i(String(h))}}let f=n;for(e[n]==="-"&&n++;e[n]&&",]}".indexOf(e[n])===-1;)n++;n==
r&&!(rr.Allow.NUM&t)&&a("Unterminated number literal");try{return JSON.parse(e.substring(f,n))}catch{e.substring(f,n)===
"-"&&a("Not sure what '-' is");try{return JSON.parse(e.substring(f,e.lastIndexOf("e")))}catch(y){i(String(y))}}},d=()=>{
for(;n<r&&` 
\r	`.includes(e[n]);)n++};return o()},CE=qg;$t.parse=CE});import{fileURLToPath as dD}from"node:url";var Me=oe(Le(),1),tt=oe(Le(),1);var Hs={done:!1,hasNext:!1};function Vc(e,...t){let r=e,n=t.map(i=>"lazy"in i?W1(i):void 0),a=0;for(;a<t.length;){if(n[a]===void 0||!q1(r)){let l=t[a];
r=l(r),a+=1;continue}let i=[];for(let l=a;l<t.length;l++){let c=n[l];if(c===void 0||(i.push(c),c.isSingle))break}let o=[];
for(let l of r)if(Ah(l,o,i))break;let{isSingle:s}=i.at(-1);r=s?o[0]:o,a+=i.length}return r}function Ah(e,t,r){if(r.length===
0)return t.push(e),!1;let n=e,a=Hs,i=!1;for(let[o,s]of r.entries()){let{index:l,items:c}=s;if(c.push(n),a=s(n,l,c),s.index+=
1,a.hasNext){if(a.hasMany??!1){for(let u of a.next)if(Ah(u,t,r.slice(o+1)))return!0;return i}n=a.next}if(!a.hasNext)break;
a.done&&(i=!0)}return a.hasNext&&t.push(n),i}function W1(e){let{lazy:t,lazyArgs:r}=e,n=t(...r);return Object.assign(n,{isSingle:t.
single??!1,index:0,items:[]})}function q1(e){return typeof e=="string"||typeof e=="object"&&e!==null&&Symbol.iterator in
e}function $h(e,t){let r=t.length-e.length;if(r===1){let[n,...a]=t;return Vc(n,{lazy:e,lazyArgs:a})}if(r===0){let n={lazy:e,
lazyArgs:t};return Object.assign(a=>Vc(a,n),n)}throw new Error("Wrong number of arguments")}function Rh(e,t,r){let n=a=>e(a,...t);return r===void 0?n:Object.assign(n,{lazy:r,lazyArgs:t})}function sr(e,t,r){let n=e.length-t.length;if(n===0)return e(...t);if(n===1)return Rh(e,t,r);throw new Error("Wrong numb\
er of arguments")}function Yc(...e){return sr(V1,e)}function V1(e,t){if(e<1)return[];let r=Number.isInteger(e)?e:Math.floor(e),n=new Array(
r);for(let a=0;a<r;a++)n[a]=t(a);return n}function pa(...e){return $h(Y1,e)}function Y1(){let e=new Set;return t=>e.has(t)?Hs:(e.add(t),{done:!1,hasNext:!0,next:t})}function zc(e,t,r){return typeof t=="number"||t===void 0?n=>n.split(e,t):e.split(t,r)}function yr(...e){return sr(z1,e)}var z1=(e,t)=>e[t];function Kc(...e){return sr(K1,e)}function K1(e,t){let r={};for(let[n,a]of Object.entries(e)){let i=t(a,n,e);r[n]=i}return r}function rt(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Ws(...e){return sr(G1,e)}var G1=e=>e.at(-1);function Un(e){return typeof e=="number"&&!Number.isNaN(e)}function Gc(e){return typeof e=="object"&&e!==null}function Lt(e){return typeof e=="string"}function Jc(e){return e===void 0?!0:typeof e=="string"||Array.isArray(e)?e.length===0:Object.keys(e).length===0}function Wi(e){return typeof e=="function"}function Fe(e){return Array.isArray(e)}function qi(e){return e!==void 0}function Bn(...e){return sr(J1,e)}var J1=(e,t)=>{let r=new Map;for(let[n,a]of e.entries()){let i=t(a,n,e);if(i!==void 0){
let o=r.get(i);o===void 0&&(o=[],r.set(i,o)),o.push(a)}}return Object.fromEntries(r)};function Zc(){return Z1}var Z1=e=>e;function wt(...e){return sr(X1,e)}function X1(e,t){let r={};for(let[n,a]of e.entries()){let i=t(a,n,e);r[i]=a}return r}function Xc(...e){return sr(Q1,e)}var Q1=e=>`${e[0]?.toUpperCase()??""}${e.slice(1)}`;var $=oe(Oh(),1),wr=$.default.BigInt(0),lo=$.default.BigInt(1),qu=$.default.BigInt(2),eS=$.default.BigInt(10),tS=$.default.
BigInt(24),rS=$.default.BigInt(60),nS=$.default.BigInt(1e3),Ao=$.default.BigInt(1e6),ro=$.default.BigInt(1e9),pm=$.default.
multiply($.default.BigInt(3600),ro),aS=$.default.multiply(rS,ro),zn=$.default.multiply(pm,tS);function bn(e){return typeof e==
"bigint"?$.default.BigInt(e.toString(10)):e}function fm(e){return $.default.equal($.default.remainder(e,qu),wr)}function fa(e){
return $.default.lessThan(e,wr)?$.default.unaryMinus(e):e}function Ys(e,t){return $.default.lessThan(e,t)?-1:$.default.greaterThan(
e,t)?1:0}function Ki(e,t){return{quotient:$.default.divide(e,t),remainder:$.default.remainder(e,t)}}var Ch,Nh,re="slot-e\
pochNanoSeconds",ne="slot-iso-date",Ye="slot-iso-date-time",Qe="slot-time",D="slot-calendar",hm="slot-date-brand",mm="sl\
ot-year-month-brand",gm="slot-month-day-brand",Oe="slot-time-zone",Ht="slot-years",Wt="slot-months",lr="slot-weeks",qt="\
slot-days",Vt="slot-hours",Yt="slot-minutes",zt="slot-seconds",Kt="slot-milliseconds",Gt="slot-microseconds",cr="slot-na\
noseconds",ym="date",vm="ym",bm="md",wm="time",Tm="datetime",km="instant",Ea="original",Va="timezone-canonical",au="time\
zone-original",Gi="calendar-id",Sm="locale",iu="options",Em=new WeakMap,ou=Symbol.for("@@Temporal__GetSlots");(Ch=globalThis)[ou]||
(Ch[ou]=function(e){return Em.get(e)});var ll=globalThis[ou],su=Symbol.for("@@Temporal__CreateSlots");(Nh=globalThis)[su]||
(Nh[su]=function(e){Em.set(e,Object.create(null))});var In=globalThis[su];function er(e,...t){if(!e||typeof e!="object")
return!1;let r=ll(e);return!!r&&t.every(n=>n in r)}function g(e,t){let r=ll(e)?.[t];if(r===void 0)throw new TypeError(`M\
issing internal slot ${t}`);return r}function he(e,t,r){let n=ll(e);if(n===void 0)throw new TypeError("Missing slots for\
 the given container");if(n[t])throw new TypeError(`${t} already has set`);n[t]=r}var lu={};function On(e,t){Object.defineProperty(
e.prototype,Symbol.toStringTag,{value:t,writable:!1,enumerable:!1,configurable:!0});let r=Object.getOwnPropertyNames(e);
for(let a=0;a<r.length;a++){let i=r[a],o=Object.getOwnPropertyDescriptor(e,i);o.configurable&&o.enumerable&&(o.enumerable=
!1,Object.defineProperty(e,i,o))}let n=Object.getOwnPropertyNames(e.prototype);for(let a=0;a<n.length;a++){let i=n[a],o=Object.
getOwnPropertyDescriptor(e.prototype,i);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e.prototype,
i,o))}cu(t,e),cu(`${t}.prototype`,e.prototype)}function cu(e,t){let r=`%${e}%`;if(lu[r]!==void 0)throw new Error(`intrin\
sic ${e} already exists`);lu[r]=t}function At(e){return lu[e]}function za(e,t){let r=e;if(r===0)return{div:r,mod:r};let n=Math.
sign(r);r=Math.abs(r);let a=Math.trunc(1+Math.log10(r));if(t>=a)return{div:0*n,mod:n*r};if(t===0)return{div:n*r,mod:0*n};
let i=r.toPrecision(a);return{div:n*Number.parseInt(i.slice(0,a-t),10),mod:n*Number.parseInt(i.slice(a-t),10)}}function Qc(e,t,r){
let n=e,a=r;if(n===0)return a;let i=Math.sign(n)||Math.sign(a);n=Math.abs(n),a=Math.abs(a);let o=n.toPrecision(Math.trunc(
1+Math.log10(n)));if(a===0)return i*Number.parseInt(o+"0".repeat(t),10);let s=o+a.toPrecision(Math.trunc(1+Math.log10(a))).
padStart(t,"0");return i*Number.parseInt(s,10)}function cl(e,t){let r=t==="negative";switch(e){case"ceil":return r?"zero":
"infinity";case"floor":return r?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":
return r?"half-zero":"half-infinity";case"halfFloor":return r?"half-infinity":"half-zero";case"halfExpand":return"half-i\
nfinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function ul(e,t,r,n,a){return a==="zero"?e:
a==="infinity"?t:r<0?e:r>0?t:a==="half-zero"?e:a==="half-infinity"?t:n?e:t}var Ue=class e{constructor(t){this.totalNs=bn(
t),this.sec=$.default.toNumber($.default.divide(this.totalNs,ro)),this.subsec=$.default.toNumber($.default.remainder(this.
totalNs,ro))}static validateNew(t,r){if($.default.greaterThan(fa(t),e.MAX))throw new RangeError(`${r} of duration time u\
nits cannot exceed ${e.MAX} s`);return new e(t)}static fromEpochNsDiff(t,r){let n=$.default.subtract(bn(t),bn(r));return new e(
n)}static fromComponents(t,r,n,a,i,o){let s=$.default.add($.default.add($.default.add($.default.add($.default.add($.default.
BigInt(o),$.default.multiply($.default.BigInt(i),nS)),$.default.multiply($.default.BigInt(a),Ao)),$.default.multiply($.default.
BigInt(n),ro)),$.default.multiply($.default.BigInt(r),aS)),$.default.multiply($.default.BigInt(t),pm));return e.validateNew(
s,"total")}abs(){return new e(fa(this.totalNs))}add(t){return e.validateNew($.default.add(this.totalNs,t.totalNs),"sum")}add24HourDays(t){
return e.validateNew($.default.add(this.totalNs,$.default.multiply($.default.BigInt(t),zn)),"sum")}addToEpochNs(t){return $.default.
add(bn(t),this.totalNs)}cmp(t){return Ys(this.totalNs,t.totalNs)}divmod(t){let{quotient:r,remainder:n}=Ki(this.totalNs,$.default.
BigInt(t));return{quotient:$.default.toNumber(r),remainder:new e(n)}}fdiv(t){let r=bn(t),n=$.default.BigInt(r),{quotient:a,
remainder:i}=Ki(this.totalNs,n),o=[],s,l=($.default.lessThan(this.totalNs,wr)?-1:1)*Math.sign($.default.toNumber(r));for(;!$.default.
equal(i,wr)&&o.length<50;)i=$.default.multiply(i,eS),{quotient:s,remainder:i}=Ki(i,n),o.push(Math.abs($.default.toNumber(
s)));return l*+(fa(a).toString()+"."+o.join(""))}isZero(){return $.default.equal(this.totalNs,wr)}round(t,r){let n=bn(t);
if($.default.equal(n,lo))return this;let{quotient:a,remainder:i}=Ki(this.totalNs,n),o=$.default.lessThan(this.totalNs,wr)?
"negative":"positive",s=$.default.multiply(fa(a),n),l=$.default.add(s,n),c=Ys(fa($.default.multiply(i,qu)),n),u=cl(r,o),
d=$.default.equal(fa(this.totalNs),s)?s:ul(s,l,c,fm(a),u),f=o==="positive"?d:$.default.unaryMinus(d);return e.validateNew(
f,"rounding")}sign(){return this.cmp(new e(wr))}subtract(t){return e.validateNew($.default.subtract(this.totalNs,t.totalNs),
"difference")}};Ue.MAX=$.default.BigInt("9007199254740991999999999"),Ue.ZERO=new Ue(wr);var Ph=/[A-Za-z._][A-Za-z._0-9+-]*/,
$o=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${Ph.source})(?:\\/(?:${Ph.source}))*)`),
xm=/(?:[+-]\d{6}|\d{4})/,zs=/(?:0[1-9]|1[0-2])/,uu=/(?:0[1-9]|[12]\d|3[01])/,iS=new RegExp(`(${xm.source})(?:-(${zs.source}\
)-(${uu.source})|(${zs.source})(${uu.source}))`),_m=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,
Am=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,$m=new RegExp(`([zZ])|${Am.
source}?`),Za=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,oS=new RegExp([`^${iS.source}`,`(?:(?:[tT]\
|\\s+)${_m.source}(?:${$m.source})?)?`,`(?:\\[!?(${$o.source})\\])?`,`((?:${Za.source})*)$`].join("")),sS=new RegExp([`^\
[tT]?${_m.source}`,`(?:${$m.source})?`,`(?:\\[!?${$o.source}\\])?`,`((?:${Za.source})*)$`].join("")),lS=new RegExp(`^(${xm.
source})-?(${zs.source})(?:\\[!?${$o.source}\\])?((?:${Za.source})*)$`),cS=new RegExp(`^(?:--)?(${zs.source})-?(${uu.source}\
)(?:\\[!?${$o.source}\\])?((?:${Za.source})*)$`),eu=/(\d+)(?:[.,](\d{1,9}))?/,uS=new RegExp(`(?:${eu.source}H)?(?:${eu.source}\
M)?(?:${eu.source}S)?`),dS=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${uS.source}\
)?$`,"i"),Kn=864e5,Ks=1e6*Kn,pS=6e10,Rm=1e8*Kn,Xa=Yr(Rm),co=$.default.unaryMinus(Xa),fS=$.default.add($.default.subtract(
co,zn),lo),hS=$.default.subtract($.default.add(Xa,zn),lo),mS=146097*Kn,Dh=-271821,Mh=275760,no=Date.UTC(1847,0,1),gS=["i\
so8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiop\
ic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],yS=new Set(
["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT",
"PNT","PRT","PST","SST","VST"]);function et(e){return typeof e=="object"&&e!==null||typeof e=="function"}function dl(e){
if(typeof e=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(e)}function pl(e){if(typeof e==
"symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(e)}function se(e){let t=dl(e);if(t===
0)return 0;if(Number.isNaN(t)||t===1/0||t===-1/0)throw new RangeError("invalid number value");let r=Math.trunc(t);return r===
0?0:r}function jh(e,t){let r=se(e);if(r<=0)throw t!==void 0?new RangeError(`property '${t}' cannot be a a number less th\
an one`):new RangeError("Cannot convert a number less than one to a positive integer");return r}function qr(e){let t=dl(
e);if(Number.isNaN(t))throw new RangeError("not a number");if(t===1/0||t===-1/0)throw new RangeError("infinity is out of\
 range");if(!function(r){if(typeof r!="number"||Number.isNaN(r)||r===1/0||r===-1/0)return!1;let n=Math.abs(r);return Math.
floor(n)===n}(t))throw new RangeError(`unsupported fractional value ${e}`);return t===0?0:t}function uo(e,t){return String(
e).padStart(t,"0")}function mt(e){if(typeof e!="string")throw new TypeError(`expected a string, not ${String(e)}`);return e}
function du(e,t){if(et(e)){let r=e?.toString();if(typeof r=="string"||typeof r=="number")return r;throw new TypeError("C\
annot convert object to primitive value")}return e}var pu=["era","eraYear","year","month","monthCode","day","hour","minu\
te","second","millisecond","microsecond","nanosecond","offset","timeZone"],vS={era:pl,eraYear:se,year:se,month:jh,monthCode:function(e){
let t=mt(du(e));if(t.length<3||t.length>4||t[0]!=="M"||"0123456789".indexOf(t[1])===-1||"0123456789".indexOf(t[2])===-1||
t[1]+t[2]==="00"&&t[3]!=="L"||t[3]!=="L"&&t[3]!==void 0)throw new RangeError(`bad month code ${t}; must match M01-M99 or\
 M00L-M99L`);return t},day:jh,hour:se,minute:se,second:se,millisecond:se,microsecond:se,nanosecond:se,offset:function(e){
let t=mt(du(e));return si(t),t},timeZone:Xt},bS={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},Qa=[
["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],
["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microseco\
nd","time"],["nanoseconds","nanosecond","time"]],Lh=Object.fromEntries(Qa.map(e=>[e[0],e[1]])),wS=Object.fromEntries(Qa.
map(([e,t])=>[t,e])),ao=Qa.map(([,e])=>e),ei={day:Ks,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},
Gs=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],TS=Intl.DateTimeFormat,
Fh=new Map;function Im(e){let t=go(e),r=Fh.get(t);return r===void 0&&(r=new TS("en-us",{timeZone:t,hour12:!1,era:"short",
year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Fh.set(t,r)),r}function Et(e){
return er(e,re)&&!er(e,Oe,D)}function Ze(e){return er(e,Ht,Wt,qt,Vt,Yt,zt,Kt,Gt,cr)}function Xe(e){return er(e,hm)}function at(e){
return er(e,Qe)}function qe(e){return er(e,Ye)}function xt(e){return er(e,mm)}function br(e){return er(e,gm)}function ve(e){
return er(e,re,Oe,D)}function I(e,t){if(!t(e))throw new TypeError("invalid receiver: method called with the wrong type o\
f this-object")}function ai(e){if(er(e,D)||er(e,Oe))throw new TypeError("with() does not support a calendar or timeZone \
property");if(at(e))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(e.calendar!==
void 0)throw new TypeError("with() does not support a calendar property");if(e.timeZone!==void 0)throw new TypeError("wi\
th() does not support a timeZone property")}function Ro(e,t){return t==="never"||t==="auto"&&e==="iso8601"?"":`[${t==="c\
ritical"?"!":""}u-ca=${e}]`}function fl(e){let t,r,n=!1;for(Za.lastIndex=0;r=Za.exec(e);){let{1:a,2:i,3:o}=r;if(i==="u-c\
a"){if(t===void 0)t=o,n=a==="!";else if(a==="!"||n)throw new RangeError(`Invalid annotations in ${e}: more than one u-ca\
 present with critical flag`)}else if(a==="!")throw new RangeError(`Unrecognized annotation: !${i}=${o}`)}return t}function sn(e){
let t=oS.exec(e);if(!t)throw new RangeError(`invalid RFC 9557 string: ${e}`);let r=fl(t[16]),n=t[1];if(n==="-000000")throw new RangeError(
`invalid RFC 9557 string: ${e}`);let a=+n,i=+(t[2]??t[4]??1),o=+(t[3]??t[5]??1),s=t[6]!==void 0,l=+(t[6]??0),c=+(t[7]??t[10]??
0),u=+(t[8]??t[11]??0);u===60&&(u=59);let d=(t[9]??t[12]??"")+"000000000",f=+d.slice(0,3),h=+d.slice(3,6),y=+d.slice(6,9),
b,T=!1;t[13]?(b=void 0,T=!0):t[14]&&(b=t[14]);let S=t[15];return Ju(a,i,o,l,c,u,f,h,y),{year:a,month:i,day:o,time:s?{hour:l,
minute:c,second:u,millisecond:f,microsecond:h,nanosecond:y}:"start-of-day",tzAnnotation:S,offset:b,z:T,calendar:r}}function Om(e){
let t=sS.exec(e),r,n,a,i,o,s,l;if(t){l=fl(t[10]),r=+(t[1]??0),n=+(t[2]??t[5]??0),a=+(t[3]??t[6]??0),a===60&&(a=59);let c=(t[4]??
t[7]??"")+"000000000";if(i=+c.slice(0,3),o=+c.slice(3,6),s=+c.slice(6,9),t[8])throw new RangeError("Z designator not sup\
ported for PlainTime")}else{let c,u;if({time:c,z:u,calendar:l}=sn(e),c==="start-of-day")throw new RangeError(`time is mi\
ssing in string: ${e}`);if(u)throw new RangeError("Z designator not supported for PlainTime");({hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s}=c)}if(yl(r,n,a,i,o,s),/[tT ][0-9][0-9]/.test(e))return{hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s,calendar:l};try{let{month:c,day:u}=Yu(e);va(1972,c,u)}catch{try{let{year:c,month:u}=Vu(
e);va(c,u,1)}catch{return{hour:r,minute:n,second:a,millisecond:i,microsecond:o,nanosecond:s,calendar:l}}}throw new RangeError(
`invalid RFC 9557 time-only string ${e}; may need a T prefix`)}function Vu(e){let t=lS.exec(e),r,n,a,i;if(t){a=fl(t[3]);
let o=t[1];if(o==="-000000")throw new RangeError(`invalid RFC 9557 string: ${e}`);if(r=+o,n=+t[2],i=1,a!==void 0&&a!=="i\
so8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let o;if({year:r,month:n,calendar:a,
day:i,z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:r,month:n,calendar:a,
referenceISODay:i}}function Yu(e){let t=cS.exec(e),r,n,a,i;if(t){if(a=fl(t[3]),r=+t[1],n=+t[2],a!==void 0&&a!=="iso8601")
throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let o;if({month:r,day:n,calendar:a,year:i,
z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:r,day:n,calendar:a,referenceISOYear:i}}
var Cm=new RegExp(`^${$o.source}$`,"i"),Nm=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function Pm(e){
let t=SS.test(e)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${t}: ${e}`)}function Yn(e){
return Cm.test(e)||Pm(e),Nm.test(e)?{offsetMinutes:si(e)/6e10}:{tzName:e}}function io(e,t,r,n){let a=e,i=t,o=r;switch(n){case"\
reject":va(a,i,o);break;case"constrain":({year:a,month:i,day:o}=Zm(a,i,o))}return{year:a,month:i,day:o}}function hl(e,t,r,n,a,i,o){
let s=e,l=t,c=r,u=n,d=a,f=i;switch(o){case"reject":yl(s,l,c,u,d,f);break;case"constrain":s=Jt(s,0,23),l=Jt(l,0,59),c=Jt(
c,0,59),u=Jt(u,0,999),d=Jt(d,0,999),f=Jt(f,0,999)}return{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}
function Dm(e){if(!et(e))throw new TypeError("invalid duration-like");let t={years:void 0,months:void 0,weeks:void 0,days:void 0,
hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0},r=!1;for(let n=0;n<
Gs.length;n++){let a=Gs[n],i=e[a];i!==void 0&&(r=!0,t[a]=qr(i))}if(!r)throw new TypeError("invalid duration-like");return t}
function Nt({years:e,months:t,weeks:r,days:n},a,i,o){return{years:e,months:o??t,weeks:i??r,days:a??n}}function Re(e,t){return{
isoDate:e,time:t}}function Ae(e){return _n(e,"overflow",["constrain","reject"],"constrain")}function oo(e){return _n(e,"\
disambiguation",["compatible","earlier","later","reject"],"compatible")}function zr(e,t){return _n(e,"roundingMode",["ce\
il","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],t)}function Vs(e,t){return _n(e,
"offset",["prefer","use","ignore","reject"],t)}function Io(e){return _n(e,"calendarName",["auto","always","never","criti\
cal"],"auto")}function ii(e){let t=e.roundingIncrement;if(t===void 0)return 1;let r=se(t);if(r<1||r>1e9)throw new RangeError(
`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);return r}function oi(e,t,r){let n=r?t:t-1;if(e>n)throw new RangeError(
`roundingIncrement must be at least 1 and less than ${n}, not ${e}`);if(t%e!=0)throw new RangeError(`Rounding increment \
must divide evenly into ${t}`)}function Oo(e){let t=e.fractionalSecondDigits;if(t===void 0)return"auto";if(typeof t!="nu\
mber"){if(pl(t)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return"a\
uto"}let r=Math.floor(t);if(!Number.isFinite(r)||r<0||r>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or\
 0 through 9, not ${t}`);return r}function Co(e,t){switch(e){case"minute":return{precision:"minute",unit:"minute",increment:1};case"\
second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"\
microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}
switch(t){case"auto":return{precision:t,unit:"nanosecond",increment:1};case 0:return{precision:t,unit:"second",increment:1};case 1:case 2:case 3:
return{precision:t,unit:"millisecond",increment:10**(3-t)};case 4:case 5:case 6:return{precision:t,unit:"microsecond",increment:10**
(6-t)};case 7:case 8:case 9:return{precision:t,unit:"nanosecond",increment:10**(9-t)};default:throw new RangeError(`frac\
tionalSecondDigits must be 'auto' or 0 through 9, not ${t}`)}}var $n=Symbol("~required~");function dr(e,t,r,n,a=[]){let i=[];
for(let c=0;c<Qa.length;c++){let u=Qa[c],d=u[1],f=u[2];r!=="datetime"&&r!==f||i.push(d)}i=i.concat(a);let o=n;o===$n?o=void 0:
o!==void 0&&i.push(o);let s=[];s=s.concat(i);for(let c=0;c<i.length;c++){let u=i[c],d=wS[u];d!==void 0&&s.push(d)}let l=_n(
e,t,s,o);if(l===void 0&&n===$n)throw new RangeError(`${t} is required`);return l&&l in Lh?Lh[l]:l}function tu(e){let t=e.
relativeTo;if(t===void 0)return{};let r,n,a,i,o,s="option",l=!1;if(et(t)){if(ve(t))return{zonedRelativeTo:t};if(Xe(t))return{
plainRelativeTo:t};if(qe(t))return{plainRelativeTo:Zt(g(t,Ye).isoDate,g(t,D))};a=jo(t);let c=Er(a,t,["year","month","mon\
thCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:r,time:n}=
Po(a,c,"constrain")),{offset:o,timeZone:i}=c,o===void 0&&(s="wall")}else{let c,u,d,f,h;if({year:d,month:f,day:h,time:n,calendar:a,
tzAnnotation:c,offset:o,z:u}=sn(mt(t)),c)i=Xt(c),u?s="exact":o||(s="wall"),l=!0;else if(u)throw new RangeError("Z design\
ator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");a||(a="iso8601"),a=tr(a),
r={year:d,month:f,day:h}}return i===void 0?{plainRelativeTo:Zt(r,a)}:{zonedRelativeTo:Ct(Js(r,n,s,s==="option"?si(o):0,i,
"compatible","reject",l),i,a)}}function wn(e){return g(e,Ht)!==0?"year":g(e,Wt)!==0?"month":g(e,lr)!==0?"week":g(e,qt)!==
0?"day":g(e,Vt)!==0?"hour":g(e,Yt)!==0?"minute":g(e,zt)!==0?"second":g(e,Kt)!==0?"millisecond":g(e,Gt)!==0?"microsecond":
"nanosecond"}function En(e,t){return ao.indexOf(e)>ao.indexOf(t)?t:e}function Qr(e){return e==="year"||e==="month"||e===
"week"}function Tn(e){return Qr(e)||e==="day"?"date":"time"}function Zn(e){return At("%calendarImpl%")(e)}function No(e){
return At("%calendarImpl%")(g(e,D))}function Qt(e,t,r="date"){let n=Object.create(null),a=Zn(e).isoToDate(t,{year:!0,monthCode:!0,
day:!0});return n.monthCode=a.monthCode,r!=="month-day"&&r!=="date"||(n.day=a.day),r!=="year-month"&&r!=="date"||(n.year=
a.year),n}function Er(e,t,r,n,a){let i=Zn(e).extraFields(r),o=r.concat(n,i),s=Object.create(null),l=!1;o.sort();for(let c=0;c<
o.length;c++){let u=o[c],d=t[u];if(d!==void 0)l=!0,s[u]=(0,vS[u])(d);else if(a!=="partial"){if(a.includes(u))throw new TypeError(
`required property '${u}' missing or undefined`);s[u]=bS[u]}}if(a==="partial"&&!l)throw new TypeError("no supported prop\
erties found");return s}function fu(e,t="complete"){let r=["hour","microsecond","millisecond","minute","nanosecond","sec\
ond"],n=!1,a=Object.create(null);for(let i=0;i<r.length;i++){let o=r[i],s=e[o];s!==void 0?(a[o]=se(s),n=!0):t==="complet\
e"&&(a[o]=0)}if(!n)throw new TypeError("invalid time-like");return a}function Ji(e,t){if(et(e)){if(Xe(e))return Ae(K(t)),
Zt(g(e,ne),g(e,D));if(ve(e)){let l=jr(g(e,Oe),g(e,re));return Ae(K(t)),Zt(l.isoDate,g(e,D))}if(qe(e))return Ae(K(t)),Zt(
g(e,Ye).isoDate,g(e,D));let s=jo(e);return Zt(Gn(s,Er(s,e,["year","month","monthCode","day"],[],[]),Ae(K(t))),s)}let{year:r,
month:n,day:a,calendar:i,z:o}=sn(mt(e));if(o)throw new RangeError("Z designator not supported for PlainDate");return i||
(i="iso8601"),i=tr(i),Ae(K(t)),Zt({year:r,month:n,day:a},i)}function Po(e,t,r){return Re(Gn(e,t,r),hl(t.hour,t.minute,t.
second,t.millisecond,t.microsecond,t.nanosecond,r))}function Zi(e,t){let r,n,a;if(et(e)){if(qe(e))return Ae(K(t)),Pr(g(e,
Ye),g(e,D));if(ve(e)){let s=jr(g(e,Oe),g(e,re));return Ae(K(t)),Pr(s,g(e,D))}if(Xe(e))return Ae(K(t)),Pr(Re(g(e,ne),{deltaDays:0,
hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),g(e,D));a=jo(e);let i=Er(a,e,["year","month","monthC\
ode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),o=Ae(K(t));({isoDate:r,time:n}=Po(a,
i,o))}else{let i,o,s,l;if({year:o,month:s,day:l,time:n,calendar:a,z:i}=sn(mt(e)),i)throw new RangeError("Z designator no\
t supported for PlainDateTime");n==="start-of-day"&&(n={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0}),Ju(o,s,l,n.hour,n.minute,n.second,n.millisecond,n.microsecond,n.nanosecond),a||(a="iso8601"),a=tr(a),Ae(K(
t)),r={year:o,month:s,day:l}}return Pr(Re(r,n),a)}function Mr(e){let t=At("%Temporal.Duration%");if(Ze(e))return new t(g(
e,Ht),g(e,Wt),g(e,lr),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr));if(!et(e))return function(a){let{years:i,
months:o,weeks:s,days:l,hours:c,minutes:u,seconds:d,milliseconds:f,microseconds:h,nanoseconds:y}=function(b){let T=dS.exec(
b);if(!T)throw new RangeError(`invalid duration: ${b}`);if(T.every((Ir,or)=>or<2||Ir===void 0))throw new RangeError(`inv\
alid duration: ${b}`);let S=T[1]==="-"?-1:1,E=T[2]===void 0?0:se(T[2])*S,_=T[3]===void 0?0:se(T[3])*S,O=T[4]===void 0?0:
se(T[4])*S,M=T[5]===void 0?0:se(T[5])*S,W=T[6]===void 0?0:se(T[6])*S,G=T[7],Z=T[8],H=T[9],we=T[10],Y=T[11],te=0,_e=0,pe=0;
if(G!==void 0){if(Z??H??we??Y)throw new RangeError("only the smallest unit can be fractional");pe=3600*se((G+"000000000").
slice(0,9))*S}else if(te=Z===void 0?0:se(Z)*S,H!==void 0){if(we??Y)throw new RangeError("only the smallest unit can be f\
ractional");pe=60*se((H+"000000000").slice(0,9))*S}else _e=we===void 0?0:se(we)*S,Y!==void 0&&(pe=se((Y+"000000000").slice(
0,9))*S);let ie=pe%1e3,ot=Math.trunc(pe/1e3)%1e3,lt=Math.trunc(pe/1e6)%1e3;return _e+=Math.trunc(pe/1e9)%60,te+=Math.trunc(
pe/6e10),vl(E,_,O,M,W,te,_e,lt,ot,ie),{years:E,months:_,weeks:O,days:M,hours:W,minutes:te,seconds:_e,milliseconds:lt,microseconds:ot,
nanoseconds:ie}}(a);return new(At("%Temporal.Duration%"))(i,o,s,l,c,u,d,f,h,y)}(mt(e));let r={years:0,months:0,weeks:0,days:0,
hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0},n=Dm(e);for(let a=0;a<Gs.length;a++){let i=Gs[a],
o=n[i];o!==void 0&&(r[i]=o)}return new t(r.years,r.months,r.weeks,r.days,r.hours,r.minutes,r.seconds,r.milliseconds,r.microseconds,
r.nanoseconds)}function Xi(e){let t;if(et(e)){if(Et(e)||ve(e))return Vr(g(e,re));t=du(e)}else t=e;let{year:r,month:n,day:a,
time:i,offset:o,z:s}=function(b){let T=sn(b);if(!T.z&&!T.offset)throw new RangeError("Temporal.Instant requires a time z\
one offset");return T}(mt(t)),{hour:l=0,minute:c=0,second:u=0,millisecond:d=0,microsecond:f=0,nanosecond:h=0}=i==="start\
-of-day"?{}:i,y=mo(r,n,a,l,c,u,d,f,h-(s?0:si(o)));return Ja(y.isoDate),Vr(_t(y))}function Uh(e,t){if(et(e)){if(br(e))return Ae(
K(t)),Ka(g(e,ne),g(e,D));let s;return er(e,D)?s=g(e,D):(s=e.calendar,s===void 0&&(s="iso8601"),s=Mo(s)),Ka(Zs(s,Er(s,e,[
"year","month","monthCode","day"],[],[]),Ae(K(t))),s)}let{month:r,day:n,referenceISOYear:a,calendar:i}=Yu(mt(e));if(i===
void 0&&(i="iso8601"),i=tr(i),Ae(K(t)),i==="iso8601")return Ka({year:1972,month:r,day:n},i);let o={year:a,month:r,day:n};
return xa(o),o=Zs(i,Qt(i,o,"month-day"),"constrain"),Ka(o,i)}function qn(e,t){let r;if(et(e)){if(at(e))return Ae(K(t)),kn(
g(e,Qe));if(qe(e))return Ae(K(t)),kn(g(e,Ye).time);if(ve(e)){let c=jr(g(e,Oe),g(e,re));return Ae(K(t)),kn(c.time)}let{hour:n,
minute:a,second:i,millisecond:o,microsecond:s,nanosecond:l}=fu(e);r=hl(n,a,i,o,s,l,Ae(K(t)))}else r=Om(mt(e)),Ae(K(t));return kn(
r)}function Mm(e){return e===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:g(qn(
e),Qe)}function Qi(e,t){if(et(e)){if(xt(e))return Ae(K(t)),Ga(g(e,ne),g(e,D));let s=jo(e);return Ga(po(s,Er(s,e,["year",
"month","monthCode"],[],[]),Ae(K(t))),s)}let{year:r,month:n,referenceISODay:a,calendar:i}=Vu(mt(e));i===void 0&&(i="iso8\
601"),i=tr(i),Ae(K(t));let o={year:r,month:n,day:a};return Zu(o),o=po(i,Qt(i,o,"year-month"),"constrain"),Ga(o,i)}function Js(e,t,r,n,a,i,o,s){
if(t==="start-of-day")return Hn(a,e);let l=Re(e,t);if(r==="wall"||o==="ignore")return Pt(a,l,i);if(r==="exact"||o==="use"){
let d=mo(e.year,e.month,e.day,t.hour,t.minute,t.second,t.millisecond,t.microsecond,t.nanosecond-n);Ja(d.isoDate);let f=_t(
d);return an(f),f}Ja(e);let c=_t(l),u=fo(a,l);for(let d=0;d<u.length;d++){let f=u[d],h=$.default.toNumber($.default.subtract(
c,f)),y=Vn(h,6e10,"halfExpand");if(h===n||s&&y===n)return f}if(o==="reject"){let d=hu(n),f=ho(l,"iso8601","auto");throw new RangeError(
`Offset ${d} is invalid for ${f} in ${a}`)}return Vm(u,a,l,i)}function eo(e,t){let r,n,a,i,o,s,l,c=!1,u="option";if(et(e)){
if(ve(e)){let b=K(t);return oo(b),Vs(b,"reject"),Ae(b),Ct(g(e,re),g(e,Oe),g(e,D))}o=jo(e);let f=Er(o,e,["year","month","\
monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);
({offset:i,timeZone:a}=f),i===void 0&&(u="wall");let h=K(t);s=oo(h),l=Vs(h,"reject");let y=Ae(h);({isoDate:r,time:n}=Po(
o,f,y))}else{let f,h,y,b,T;({year:y,month:b,day:T,time:n,tzAnnotation:f,offset:i,z:h,calendar:o}=function(E){let _=sn(E);
if(!_.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return _}(mt(e))),
a=Xt(f),h?u="exact":i||(u="wall"),o||(o="iso8601"),o=tr(o),c=!0;let S=K(t);s=oo(S),l=Vs(S,"reject"),Ae(S),r={year:y,month:b,
day:T}}let d=0;return u==="option"&&(d=si(i)),Ct(Js(r,n,u,d,a,s,l,c),a,o)}function jm(e,t,r){xa(t),In(e),he(e,ne,t),he(e,
D,r),he(e,hm,!0)}function Zt(e,t){let r=At("%Temporal.PlainDate%"),n=Object.create(r.prototype);return jm(n,e,t),n}function Lm(e,t,r){
ba(t),In(e),he(e,Ye,t),he(e,D,r)}function Pr(e,t){let r=At("%Temporal.PlainDateTime%"),n=Object.create(r.prototype);return Lm(
n,e,t),n}function Fm(e,t,r){xa(t),In(e),he(e,ne,t),he(e,D,r),he(e,gm,!0)}function Ka(e,t){let r=At("%Temporal.PlainMonth\
Day%"),n=Object.create(r.prototype);return Fm(n,e,t),n}function Um(e,t){In(e),he(e,Qe,t)}function kn(e){let t=At("%Tempo\
ral.PlainTime%"),r=Object.create(t.prototype);return Um(r,e),r}function Bm(e,t,r){Zu(t),In(e),he(e,ne,t),he(e,D,r),he(e,
mm,!0)}function Ga(e,t){let r=At("%Temporal.PlainYearMonth%"),n=Object.create(r.prototype);return Bm(n,e,t),n}function Hm(e,t){
an(t),In(e),he(e,re,t)}function Vr(e){let t=At("%Temporal.Instant%"),r=Object.create(t.prototype);return Hm(r,e),r}function Wm(e,t,r,n){
an(t),In(e),he(e,re,t),he(e,Oe,r),he(e,D,n)}function Ct(e,t,r="iso8601"){let n=At("%Temporal.ZonedDateTime%"),a=Object.create(
n.prototype);return Wm(a,e,t,r),a}function Bh(e){return pu.filter(t=>e[t]!==void 0)}function ya(e,t,r){let n=Bh(r),a=Zn(
e).fieldKeysToIgnore(n),i=Object.create(null),o=Bh(t);for(let s=0;s<pu.length;s++){let l,c=pu[s];o.includes(c)&&!a.includes(
c)&&(l=t[c]),n.includes(c)&&(l=r[c]),l!==void 0&&(i[c]=l)}return i}function kr(e,t,r,n){let a=Zn(e).dateAdd(t,r,n);return xa(
a),a}function Do(e,t,r,n){return Zn(e).dateUntil(t,r,n)}function Mo(e){if(et(e)&&er(e,D))return g(e,D);let t=mt(e);try{return tr(
t)}catch{}let r;try{({calendar:r}=sn(t))}catch{try{({calendar:r}=Om(t))}catch{try{({calendar:r}=Vu(t))}catch{({calendar:r}=
Yu(t))}}}return r||(r="iso8601"),tr(r)}function jo(e){if(er(e,D))return g(e,D);let{calendar:t}=e;return t===void 0?"iso8\
601":Mo(t)}function nn(e,t){return tr(e)===tr(t)}function Gn(e,t,r){let n=Zn(e);n.resolveFields(t,"date");let a=n.dateToISO(
t,r);return xa(a),a}function po(e,t,r){let n=Zn(e);n.resolveFields(t,"year-month"),t.day=1;let a=n.dateToISO(t,r);return Zu(
a),a}function Zs(e,t,r){let n=Zn(e);n.resolveFields(t,"month-day");let a=n.monthDayToISOReferenceDate(t,r);return xa(a),
a}function Xt(e){if(et(e)&&ve(e))return g(e,Oe);let t=mt(e);if(t==="UTC")return"UTC";let{tzName:r,offsetMinutes:n}=function(i){
let{tzAnnotation:o,offset:s,z:l}=function(c){if(Cm.test(c))return{tzAnnotation:c,offset:void 0,z:!1};try{let{tzAnnotation:u,
offset:d,z:f}=sn(c);if(f||u||d)return{tzAnnotation:u,offset:d,z:f}}catch{}Pm(c)}(i);return o?Yn(o):l?Yn("UTC"):s?Yn(s):void 0}(
t);if(n!==void 0)return zu(n);let a=Xs(r);if(!a)throw new RangeError(`Unrecognized time zone ${r}`);return a.identifier}
function qm(e,t){if(e===t)return!0;let r=Yn(e).offsetMinutes,n=Yn(t).offsetMinutes;if(r===void 0&&n===void 0){let a=Xs(t);
if(!a)return!1;let i=Xs(e);return!!i&&i.primaryIdentifier===a.primaryIdentifier}return r===n}function Sn(e,t){let r=Yn(e).
offsetMinutes;return r!==void 0?6e10*r:mu(e,t)}function hu(e){let t=e<0?"-":"+",r=Math.abs(e),n=Math.floor(r/36e11),a=Math.
floor(r/6e10)%60,i=Math.floor(r/1e9)%60,o=r%1e9;return`${t}${ml(n,a,i,o,i===0&&o===0?"minute":"auto")}`}function jr(e,t){
let r=Sn(e,t),{isoDate:{year:n,month:a,day:i},time:{hour:o,minute:s,second:l,millisecond:c,microsecond:u,nanosecond:d}}=Km(
t);return mo(n,a,i,o,s,l,c,u,d+r)}function Pt(e,t,r){return Vm(fo(e,t),e,t,r)}function Vm(e,t,r,n){let a=e.length;if(a===
1)return e[0];if(a)switch(n){case"compatible":case"earlier":return e[0];case"later":return e[a-1];case"reject":throw new RangeError(
"multiple instants found")}if(n==="reject")throw new RangeError("multiple instants found");let i=_t(r),o=$.default.subtract(
i,zn);an(o);let s=Sn(t,o),l=$.default.add(i,zn);an(l);let c=Sn(t,l)-s;switch(n){case"earlier":{let u=Ue.fromComponents(0,
0,0,0,0,-c),d=ti(r.time,u);return fo(t,Re(pr(r.isoDate.year,r.isoDate.month,r.isoDate.day+d.deltaDays),d))[0]}case"compa\
tible":case"later":{let u=Ue.fromComponents(0,0,0,0,0,c),d=ti(r.time,u),f=fo(t,Re(pr(r.isoDate.year,r.isoDate.month,r.isoDate.
day+d.deltaDays),d));return f[f.length-1]}}}function fo(e,t){if(e==="UTC")return Ja(t.isoDate),[_t(t)];let r=Yn(e).offsetMinutes;
if(r!==void 0){let n=mo(t.isoDate.year,t.isoDate.month,t.isoDate.day,t.time.hour,t.time.minute-r,t.time.second,t.time.millisecond,
t.time.microsecond,t.time.nanosecond);Ja(n.isoDate);let a=_t(n);return an(a),[a]}return Ja(t.isoDate),function(n,a){let i=_t(
a),o=$.default.subtract(i,zn);$.default.lessThan(o,co)&&(o=i);let s=$.default.add(i,zn);$.default.greaterThan(s,Xa)&&(s=
i);let l=mu(n,o),c=mu(n,s);return(l===c?[l]:[l,c]).map(d=>{let f=$.default.subtract(i,$.default.BigInt(d)),h=function(y,b){
let{epochMilliseconds:T,time:{millisecond:S,microsecond:E,nanosecond:_}}=Km(b),{year:O,month:M,day:W,hour:G,minute:Z,second:H}=Gm(
y,T);return mo(O,M,W,G,Z,H,S,E,_)}(n,f);if(ri(a,h)===0)return an(f),f}).filter(d=>d!==void 0)}(e,t)}function Hn(e,t){let r=Re(
t,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),n=fo(e,r);if(n.length)return n[0];let a=_t(
r),i=$.default.subtract(a,zn);return an(i),Gu(e,i)}function Lo(e){let t;return t=e<0||e>9999?(e<0?"-":"+")+uo(Math.abs(e),
6):uo(e,4),t}function Sr(e){return uo(e,2)}function Ym(e,t){let r;if(t==="auto"){if(e===0)return"";r=uo(e,9).replace(/0+$/,
"")}else{if(t===0)return"";r=uo(e,9).slice(0,t)}return`.${r}`}function ml(e,t,r,n,a){let i=`${Sr(e)}:${Sr(t)}`;return a===
"minute"||(i+=`:${Sr(r)}`,i+=Ym(n,a)),i}function Hh(e,t,r){let n=t;n===void 0&&(n="UTC");let a=g(e,re),i=ho(jr(n,a),"iso\
8601",r,"never"),o="Z";return t!==void 0&&(o=zm(Sn(n,a))),`${i}${o}`}function qs(e,t){let r=g(e,Ht),n=g(e,Wt),a=g(e,lr),
i=g(e,qt),o=g(e,Vt),s=g(e,Yt),l=el(e),c="";r!==0&&(c+=`${Math.abs(r)}Y`),n!==0&&(c+=`${Math.abs(n)}M`),a!==0&&(c+=`${Math.
abs(a)}W`),i!==0&&(c+=`${Math.abs(i)}D`);let u="";o!==0&&(u+=`${Math.abs(o)}H`),s!==0&&(u+=`${Math.abs(s)}M`);let d=Ue.fromComponents(
0,0,g(e,zt),g(e,Kt),g(e,Gt),g(e,cr));d.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(wn(e))&&t===
"auto"||(u+=`${Math.abs(d.sec)}${Ym(Math.abs(d.subsec),t)}S`);let f=`${l<0?"-":""}P${c}`;return u&&(f=`${f}T${u}`),f}function Wh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne);return`${Lo(r)}-${Sr(n)}-${Sr(a)}${Ro(g(e,D),t)}`}function qh({hour:e,minute:t,
second:r,millisecond:n,microsecond:a,nanosecond:i},o){return ml(e,t,r,1e6*n+1e3*a+i,o)}function ho(e,t,r,n="auto"){let{isoDate:{
year:a,month:i,day:o},time:{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}=e;return`${Lo(a)}-${Sr(i)}\
-${Sr(o)}T${ml(s,l,c,1e6*u+1e3*d+f,r)}${Ro(t,n)}`}function Vh(e,t="auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${Sr(n)}-${Sr(
a)}`,o=g(e,D);t!=="always"&&t!=="critical"&&o==="iso8601"||(i=`${Lo(r)}-${i}`);let s=Ro(o,t);return s&&(i+=s),i}function Yh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${Lo(r)}-${Sr(n)}`,o=g(e,D);t!=="always"&&t!=="critical"&&o==="iso8601"||(i+=
`-${Sr(a)}`);let s=Ro(o,t);return s&&(i+=s),i}function zh(e,t,r="auto",n="auto",a="auto",i=void 0){let o=g(e,re);if(i){let{
unit:u,increment:d,roundingMode:f}=i;o=bu(o,d,u,f)}let s=g(e,Oe),l=Sn(s,o),c=ho(jr(s,o),"iso8601",t,"never");return a!==
"never"&&(c+=zm(l)),n!=="never"&&(c+=`[${n==="critical"?"!":""}${s}]`),c+=Ro(g(e,D),r),c}function Kh(e){return Nm.test(e)}
function si(e){let t=ES.exec(e);if(!t)throw new RangeError(`invalid time zone offset: ${e}; must match \xB1HH:MM[:SS.SSSSSS\
SSS]`);return(t[1]==="-"?-1:1)*(1e9*(60*(60*+t[2]+ +(t[3]||0))+ +(t[4]||0))+ +((t[5]||0)+"000000000").slice(0,9))}var Vi,
kS=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function Xs(e){if(Vi===void 0){let i=Intl.supportedValuesOf?.(
"timeZone");if(i){Vi=new Map;for(let o=0;o<i.length;o++){let s=i[o];Vi.set(go(s),s)}}else Vi=null}let t=go(e),r=Vi?.get(
t);if(r)return{identifier:r,primaryIdentifier:r};try{r=Im(e).resolvedOptions().timeZone}catch{return}if(t==="antarctica/\
south_pole"&&(r="Antarctica/McMurdo"),yS.has(e))throw new RangeError(`${e} is a legacy time zone identifier from ICU. Us\
e ${r} instead`);let n=[...t].map((i,o)=>o===0||kS[t[o-1]]?i.toUpperCase():i).join("").split("/");if(n.length===1)return t===
"gb-eire"?{identifier:"GB-Eire",primaryIdentifier:r}:{identifier:t.length<=3||/[-0-9]/.test(t)?t.toUpperCase():n[0],primaryIdentifier:r};
if(n[0]==="Etc")return{identifier:`Etc/${["Zulu","Greenwich","Universal"].includes(n[1])?n[1]:n[1].toUpperCase()}`,primaryIdentifier:r};
if(n[0]==="Us")return{identifier:`US/${n[1]}`,primaryIdentifier:r};let a=new Map([["Act","ACT"],["Lhi","LHI"],["Nsw","NS\
W"],["Dar_Es_Salaam","Dar_es_Salaam"],["Port_Of_Spain","Port_of_Spain"],["Port-Au-Prince","Port-au-Prince"],["Isle_Of_Ma\
n","Isle_of_Man"],["Comodrivadavia","ComodRivadavia"],["Knox_In","Knox_IN"],["Dumontdurville","DumontDUrville"],["Mcmurd\
o","McMurdo"],["Denoronha","DeNoronha"],["Easterisland","EasterIsland"],["Bajanorte","BajaNorte"],["Bajasur","BajaSur"]]);
return n[1]=a.get(n[1])??n[1],n.length>2&&(n[2]=a.get(n[2])??n[2]),{identifier:n.join("/"),primaryIdentifier:r}}function ma(e,t){
let{year:r,month:n,day:a,hour:i,minute:o,second:s}=Gm(e,t),l=t%1e3;return l<0&&(l+=1e3),1e6*(Ku({isoDate:{year:r,month:n,
day:a},time:{hour:i,minute:o,second:s,millisecond:l}})-t)}function mu(e,t){return ma(e,Lr(t,"floor"))}function zu(e){let t=e<
0?"-":"+",r=Math.abs(e);return`${t}${ml(Math.floor(r/60),r%60,0,0,"minute")}`}function zm(e){return zu(Vn(e,pS,"halfExpa\
nd")/6e10)}function Ku({isoDate:{year:e,month:t,day:r},time:{hour:n,minute:a,second:i,millisecond:o}}){let s=e%400,l=(e-
s)/400,c=new Date;return c.setUTCHours(n,a,i,o),c.setUTCFullYear(s,t-1,r),c.getTime()+mS*l}function _t(e){let t=Ku(e),r=1e3*
e.time.microsecond+e.time.nanosecond;return $.default.add(Yr(t),$.default.BigInt(r))}function Km(e){let t=Lr(e,"trunc"),
r=$.default.toNumber($.default.remainder(e,Ao));r<0&&(r+=1e6,t-=1);let n=Math.floor(r/1e3)%1e3,a=r%1e3,i=new Date(t);return{
epochMilliseconds:t,isoDate:{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate()},time:{hour:i.getUTCHours(),
minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds(),microsecond:n,nanosecond:a}}}function Gu(e,t){
if(e==="UTC")return null;let r=Lr(t,"floor");if(r<no)return Gu(e,Yr(no));let n=Date.now(),a=Math.max(r,n)+366*Kn*3,i=r,o=ma(
e,i),s=i,l=o;for(;o===l&&i<a;){if(s=i+2*Kn*7,s>Rm)return null;l=ma(e,s),o===l&&(i=s)}return o===l?null:Yr(ig(c=>ma(e,c),
i,s,o,l))}function gu(e,t){if(e==="UTC")return null;let r=Lr(t,"ceil"),n=Date.now(),a=n+366*Kn*3;if(r>a){let c=gu(e,Yr(a));
if(c===null||$.default.lessThan(c,Yr(n)))return c}if(e==="Africa/Casablanca"||e==="Africa/El_Aaiun"){let c=Date.UTC(2088,
0,1);if(c<r)return gu(e,Yr(c))}let i=r-1;if(i<no)return null;let o=ma(e,i),s=i,l=o;for(;o===l&&i>no;){if(s=i-2*Kn*7,s<no)
return null;l=ma(e,s),o===l&&(i=s)}return o===l?null:Yr(ig(c=>ma(e,c),s,i,l,o))}function Gm(e,t){return function(r){let n=r.
split(/[^\w]+/);if(n.length!==7)throw new RangeError(`expected 7 parts in "${r}`);let a=+n[0],i=+n[1],o=+n[2],s=n[3];if(s[0]===
"b"||s[0]==="B")o=1-o;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${r}`);let l=n[4]==="24"?
0:+n[4],c=+n[5],u=+n[6];if(!(Number.isFinite(o)&&Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(l)&&Number.isFinite(
c)&&Number.isFinite(u)))throw new RangeError(`Invalid number in "${r}`);return{year:o,month:a,day:i,hour:l,minute:c,second:u}}(
Im(e).format(t))}function Qs(e){return e!==void 0&&!(e%4!=0||e%100==0&&e%400!=0)}function ga(e,t){return{standard:[31,28,
31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[Qs(e)?"leapyear":"standard"][t-1]}function el(e){
let t=[g(e,Ht),g(e,Wt),g(e,lr),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr)];for(let r=0;r<t.length;r++){let n=t[r];
if(n!==0)return n<0?-1:1}return 0}function gl(e){let t=["years","months","weeks","days"];for(let r=0;r<t.length;r++){let n=e[t[r]];
if(n!==0)return n<0?-1:1}return 0}function Jm(e){let t=gl(e.date);return t!==0?t:e.time.sign()}function ha(e,t){let r=e,
n=t;if(!Number.isFinite(r)||!Number.isFinite(n))throw new RangeError("infinity is out of range");return n-=1,r+=Math.floor(
n/12),n%=12,n<0&&(n+=12),n+=1,{year:r,month:n}}function pr(e,t,r){let n=e,a=t,i=r;if(!Number.isFinite(i))throw new RangeError(
"infinity is out of range");({year:n,month:a}=ha(n,a));let o=146097;if(Math.abs(i)>o){let c=Math.trunc(i/o);n+=400*c,i-=
c*o}let s=0,l=a>2?n:n-1;for(;s=Qs(l)?366:365,i<-s;)n-=1,l-=1,i+=s;for(l+=1;s=Qs(l)?366:365,i>s;)n+=1,l+=1,i-=s;for(;i<1;)
({year:n,month:a}=ha(n,a-1)),i+=ga(n,a);for(;i>ga(n,a);)i-=ga(n,a),{year:n,month:a}=ha(n,a+1);return{year:n,month:a,day:i}}
function mo(e,t,r,n,a,i,o,s,l){let c=Wn(n,a,i,o,s,l);return Re(pr(e,t,r+c.deltaDays),c)}function Wn(e,t,r,n,a,i){let o,s=e,
l=t,c=r,u=n,d=a,f=i;({div:o,mod:f}=za(f,3)),d+=o,f<0&&(d-=1,f+=1e3),{div:o,mod:d}=za(d,3),u+=o,d<0&&(u-=1,d+=1e3),c+=Math.
trunc(u/1e3),u%=1e3,u<0&&(c-=1,u+=1e3),l+=Math.trunc(c/60),c%=60,c<0&&(l-=1,c+=60),s+=Math.trunc(l/60),l%=60,l<0&&(s-=1,
l+=60);let h=Math.trunc(s/24);return s%=24,s<0&&(h-=1,s+=24),h+=0,s+=0,l+=0,c+=0,u+=0,d+=0,f+=0,{deltaDays:h,hour:s,minute:l,
second:c,millisecond:u,microsecond:d,nanosecond:f}}function Gh(e,t){let r=Nt(e,0);if(gl(r)===0)return e.days;let n=g(t,ne),
a=kr(g(t,D),n,r,"constrain"),i=wa(n.year,n.month-1,n.day),o=wa(a.year,a.month-1,a.day)-i;return e.days+o}function fr(e){
return new(At("%Temporal.Duration%"))(-g(e,Ht),-g(e,Wt),-g(e,lr),-g(e,qt),-g(e,Vt),-g(e,Yt),-g(e,zt),-g(e,Kt),-g(e,Gt),-g(
e,cr))}function Jt(e,t,r){return Math.min(r,Math.max(t,e))}function Zm(e,t,r){let n=Jt(t,1,12);return{year:e,month:n,day:Jt(
r,1,ga(e,n))}}function Tt(e,t,r){if(e<t||e>r)throw new RangeError(`value out of range: ${t} <= ${e} <= ${r}`)}function va(e,t,r){
Tt(t,1,12),Tt(r,1,ga(e,t))}function xa(e){ba(Re(e,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}
function yl(e,t,r,n,a,i){Tt(e,0,23),Tt(t,0,59),Tt(r,0,59),Tt(n,0,999),Tt(a,0,999),Tt(i,0,999)}function Ju(e,t,r,n,a,i,o,s,l){
va(e,t,r),yl(n,a,i,o,s,l)}function ba(e){let t=_t(e);($.default.lessThan(t,fS)||$.default.greaterThan(t,hS))&&an(t)}function yu(e){
_t(e)}function an(e){if($.default.lessThan(e,co)||$.default.greaterThan(e,Xa))throw new RangeError("date/time value is o\
utside of supported range")}function Zu({year:e,month:t}){Tt(e,Dh,Mh),e===Dh?Tt(t,4,12):e===Mh&&Tt(t,1,9)}function vl(e,t,r,n,a,i,o,s,l,c){
let u=0,d=[e,t,r,n,a,i,o,s,l,c];for(let S=0;S<d.length;S++){let E=d[S];if(E===1/0||E===-1/0)throw new RangeError("infini\
te values not allowed as duration fields");if(E!==0){let _=E<0?-1:1;if(u!==0&&_!==u)throw new RangeError("mixed-sign val\
ues not allowed as duration fields");u=_}}if(Math.abs(e)>=2**32||Math.abs(t)>=2**32||Math.abs(r)>=2**32)throw new RangeError(
"years, months, and weeks must be < 2\xB3\xB2");let f=za(s,3),h=za(l,6),y=za(c,9),b=za(1e6*f.mod+1e3*h.mod+y.mod,9).div,
T=86400*n+3600*a+60*i+o+f.div+h.div+y.div+b;if(!Number.isSafeInteger(T))throw new RangeError("total of duration time uni\
ts cannot exceed 9007199254740991.999999999 s")}function Ya(e){return{date:{years:g(e,Ht),months:g(e,Wt),weeks:g(e,lr),days:g(
e,qt)},time:Ue.fromComponents(g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr))}}function tn(e){let t=Ue.fromComponents(g(
e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr)).add24HourDays(g(e,qt));return{date:{years:g(e,Ht),months:g(e,Wt),weeks:g(
e,lr),days:0},time:t}}function Xm(e){let t=tn(e),r=Math.trunc(t.time.sec/86400);return vl(t.date.years,t.date.months,t.date.
weeks,r,0,0,0,0,0,0),{...t.date,days:r}}function Dr(e,t){let r=e.time.sign(),n=e.time.abs().subsec,a=0,i=0,o=e.time.abs().
sec,s=0,l=0,c=0;switch(t){case"year":case"month":case"week":case"day":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=
1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(s/60),s%=60,c=Math.trunc(l/24),l%=24;break;case"ho\
ur":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(
s/60),s%=60;break;case"minute":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.
trunc(o/60),o%=60;break;case"second":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3;break;case"\
millisecond":a=Math.trunc(n/1e3),n%=1e3,i=Qc(o,3,Math.trunc(a/1e3)),a%=1e3,o=0;break;case"microsecond":a=Qc(o,6,Math.trunc(
n/1e3)),n%=1e3,o=0;break;case"nanosecond":n=Qc(o,9,n),o=0}return new(At("%Temporal.Duration%"))(e.date.years,e.date.months,
e.date.weeks,e.date.days+r*c,r*l,r*s,r*o,r*i,r*a,r*n)}function xn(e,t){return gl(e),t.sign(),{date:e,time:t}}function wa(e,t,r){
return Ku({isoDate:{year:e,month:t+1,day:r},time:{hour:0,minute:0,second:0,millisecond:0}})/Kn}function Ja({year:e,month:t,
day:r}){if(Math.abs(wa(e,t-1,r))>1e8)throw new RangeError("date/time value is outside the supported range")}function Xu(e,t){
let r=t.hour-e.hour,n=t.minute-e.minute,a=t.second-e.second,i=t.millisecond-e.millisecond,o=t.microsecond-e.microsecond,
s=t.nanosecond-e.nanosecond;return Ue.fromComponents(r,n,a,i,o,s)}function Qu(e,t,r,n,a){let i=Ue.fromEpochNsDiff(t,e);return i=
tl(i,r,n,a),xn({years:0,months:0,weeks:0,days:0},i)}function Qm(e,t,r,n){yu(e),yu(t);let a=Xu(e.time,t.time),i=a.sign(),
o=on(e.isoDate,t.isoDate),s=t.isoDate;o===i&&(s=pr(s.year,s.month,s.day+i),a=a.add24HourDays(-i));let l=En("day",n),c=Do(
r,e.isoDate,s,l);return n!==l&&(a=a.add24HourDays(c.days),c.days=0),xn(c,a)}function eg(e,t,r,n,a){let i=$.default.subtract(
t,e);if($.default.equal(i,wr))return{date:{years:0,months:0,weeks:0,days:0},time:Ue.ZERO};let o=$.default.lessThan(i,wr)?
-1:1,s=jr(r,e),l=jr(r,t),c,u=0,d=o===1?2:1,f=Xu(s.time,l.time);for(f.sign()===-o&&u++;u<=d;u++){c=Re(pr(l.isoDate.year,l.
isoDate.month,l.isoDate.day-u*o),s.time);let y=Pt(r,c,"compatible");if(f=Ue.fromEpochNsDiff(t,y),f.sign()!==-o)break}let h=En(
"day",a);return xn(Do(n,s.isoDate,c.isoDate,h),f)}function tg(e,t,r,n,a,i,o,s,l){let c,u,d,f,h=t;switch(s){case"year":{let te=Vn(
h.date.years,o,"trunc");c=te,u=te+o*e,d={years:c,months:0,weeks:0,days:0},f={...d,years:u};break}case"month":{let te=Vn(
h.date.months,o,"trunc");c=te,u=te+o*e,d=Nt(h.date,0,0,c),f=Nt(h.date,0,0,u);break}case"week":{let te=Nt(h.date,0,0),_e=kr(
i,n.isoDate,te,"constrain"),pe=Do(i,_e,pr(_e.year,_e.month,_e.day+h.date.days),"week"),ie=Vn(h.date.weeks+pe.weeks,o,"tr\
unc");c=ie,u=ie+o*e,d=Nt(h.date,0,c),f=Nt(h.date,0,u);break}case"day":{let te=Vn(h.date.days,o,"trunc");c=te,u=te+o*e,d=
Nt(h.date,c),f=Nt(h.date,u);break}}let y=kr(i,n.isoDate,d,"constrain"),b=kr(i,n.isoDate,f,"constrain"),T,S,E=Re(y,n.time),
_=Re(b,n.time);a?(T=Pt(a,E,"compatible"),S=Pt(a,_,"compatible")):(T=_t(E),S=_t(_));let O=Ue.fromEpochNsDiff(r,T),M=Ue.fromEpochNsDiff(
S,T),W=cl(l,e<0?"negative":"positive"),G=O.add(O).abs().subtract(M.abs()).sign(),Z=Math.abs(c)/o%2==0,H=O.isZero()?Math.
abs(c):O.cmp(M)?ul(Math.abs(c),Math.abs(u),G,Z,W):Math.abs(u),we=new Ue($.default.add($.default.multiply(M.totalNs,$.default.
BigInt(c)),$.default.multiply(O.totalNs,$.default.BigInt(o*e)))).fdiv(M.totalNs),Y=H===Math.abs(u);return h={date:Y?f:d,
time:Ue.ZERO},{nudgeResult:{duration:h,nudgedEpochNs:Y?S:T,didExpandCalendarUnit:Y},total:we}}function bl(e,t,r,n,a,i,o,s,l){
let c=e,u=Qr(s)||n&&s==="day",d=Jm(c)<0?-1:1,f;return u?{nudgeResult:f}=tg(d,c,t,r,n,a,o,s,l):f=n?function(h,y,b,T,S,E,_,O){
let M=y,W=kr(S,b.isoDate,M.date,"constrain"),G=Re(W,b.time),Z=Re(pr(W.year,W.month,W.day+h),b.time),H=Pt(T,G,"compatible"),
we=Pt(T,Z,"compatible"),Y=Ue.fromEpochNsDiff(we,H);if(Y.sign()!==h)throw new RangeError("time zone returned inconsistent\
 Instants");let te=$.default.BigInt(ei[_]*E),_e=M.time.round(te,O),pe=_e.subtract(Y),ie=pe.sign()!==-h,ot,lt;return ie?(ot=
h,_e=pe.round(te,O),lt=_e.addToEpochNs(we)):(ot=0,lt=_e.addToEpochNs(H)),{duration:xn(Nt(M.date,M.date.days+ot),_e),nudgedEpochNs:lt,
didExpandCalendarUnit:ie}}(d,c,r,n,a,o,s,l):function(h,y,b,T,S,E){let _=h,O=_.time.add24HourDays(_.date.days),M=O.round(
$.default.BigInt(T*ei[S]),E),W=M.subtract(O),{quotient:G}=O.divmod(Ks),{quotient:Z}=M.divmod(Ks),H=Math.sign(Z-G)===O.sign(),
we=W.addToEpochNs(y),Y=0,te=M;return Tn(b)==="date"&&(Y=Z,te=M.add(Ue.fromComponents(24*-Z,0,0,0,0,0))),{duration:{date:Nt(
_.date,Y),time:te},nudgedEpochNs:we,didExpandCalendarUnit:H}}(c,t,i,o,s,l),c=f.duration,f.didExpandCalendarUnit&&s!=="we\
ek"&&(c=function(h,y,b,T,S,E,_,O){let M=y;if(O===_)return M;let W=ao.indexOf(_);for(let G=ao.indexOf(O)-1;G>=W;G--){let Z=ao[G];
if(Z==="week"&&_!=="week")continue;let H;switch(Z){case"year":H={years:M.date.years+h,months:0,weeks:0,days:0};break;case"\
month":{let te=M.date.months+h;H=Nt(M.date,0,0,te);break}case"week":{let te=M.date.weeks+h;H=Nt(M.date,0,te);break}}let we=Re(
kr(E,T.isoDate,H,"constrain"),T.time),Y;if(Y=S?Pt(S,we,"compatible"):_t(we),Ys(b,Y)===-h)break;M={date:H,time:Ue.ZERO}}return M}(
d,c,f.nudgedEpochNs,r,n,a,i,En(s,"day"))),c}function Jh(e,t,r,n,a,i){return Qr(i)||n&&i==="day"?tg(Jm(e)<0?-1:1,e,t,r,n,
a,1,i,"trunc").total:so(e.time.add24HourDays(e.date.days),i)}function rg(e,t,r,n,a,i,o){if(ri(e,t)==0)return{date:{years:0,
months:0,weeks:0,days:0},time:Ue.ZERO};ba(e),ba(t);let s=Qm(e,t,r,n);return i==="nanosecond"&&a===1?s:bl(s,_t(t),e,null,
r,n,a,i,o)}function ng(e,t,r,n,a,i,o,s){if(Tn(a)==="time")return Qu(e,t,i,o,s);let l=eg(e,t,r,n,a);return o==="nanosecon\
d"&&i===1?l:bl(l,t,jr(r,e),r,n,a,i,o,s)}function li(e,t,r,n,a,i){let o=Qa.reduce((h,y)=>{let b=y[0],T=y[1],S=y[2];return r!==
"datetime"&&S!==r||n.includes(T)||h.push(T,b),h},[]),s=dr(t,"largestUnit",r,"auto");if(n.includes(s))throw new RangeError(
`largestUnit must be one of ${o.join(", ")}, not ${s}`);let l=ii(t),c=zr(t,"trunc");e==="since"&&(c=function(h){switch(h){case"\
ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return h}}(
c));let u=dr(t,"smallestUnit",r,a);if(n.includes(u))throw new RangeError(`smallestUnit must be one of ${o.join(", ")}, n\
ot ${u}`);let d=En(i,u);if(s==="auto"&&(s=d),En(s,u)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than s\
mallestUnit ${u}`);let f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];return f!==void 0&&
oi(l,f,!1),{largestUnit:s,roundingIncrement:l,roundingMode:c,smallestUnit:u}}function Zh(e,t,r,n){let a=Xi(r),i=li(e,K(n),
"time",[],"nanosecond","second"),o=Dr(Qu(g(t,re),g(a,re),i.roundingIncrement,i.smallestUnit,i.roundingMode),i.largestUnit);
return e==="since"&&(o=fr(o)),o}function Xh(e,t,r,n){let a=Ji(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`can\
not compute difference between dates of ${i} and ${o} calendars`);let s=li(e,K(n),"date",[],"day","day"),l=At("%Temporal\
.Duration%"),c=g(t,ne),u=g(a,ne);if(on(c,u)===0)return new l;let d={date:Do(i,c,u,s.largestUnit),time:Ue.ZERO};if(s.smallestUnit!==
"day"||s.roundingIncrement!==1){let h=Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});
d=bl(d,_t(Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),h,null,i,s.largestUnit,
s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=Dr(d,"day");return e==="since"&&(f=fr(f)),f}function Qh(e,t,r,n){
let a=Zi(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`cannot compute difference between dates of ${i} and ${o}\
 calendars`);let s=li(e,K(n),"datetime",[],"nanosecond","day"),l=At("%Temporal.Duration%"),c=g(t,Ye),u=g(a,Ye);if(ri(c,u)===
0)return new l;let d=Dr(rg(c,u,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return e===
"since"&&(d=fr(d)),d}function em(e,t,r,n){let a=qn(r),i=li(e,K(n),"time",[],"nanosecond","hour"),o=Xu(g(t,Qe),g(a,Qe));o=
tl(o,i.roundingIncrement,i.smallestUnit,i.roundingMode);let s=Dr(xn({years:0,months:0,weeks:0,days:0},o),i.largestUnit);
return e==="since"&&(s=fr(s)),s}function tm(e,t,r,n){let a=Qi(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`can\
not compute difference between months of ${i} and ${o} calendars`);let s=li(e,K(n),"date",["week","day"],"month","year"),
l=At("%Temporal.Duration%");if(on(g(t,ne),g(a,ne))==0)return new l;let c=Qt(i,g(t,ne),"year-month");c.day=1;let u=Gn(i,c,
"constrain"),d=Qt(i,g(a,ne),"year-month");d.day=1;let f=Gn(i,d,"constrain"),h={date:Nt(Do(i,u,f,s.largestUnit),0,0),time:Ue.
ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){let b=Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,
microsecond:0,nanosecond:0});h=bl(h,_t(Re(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),
b,null,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let y=Dr(h,"day");return e==="since"&&(y=fr(y)),
y}function rm(e,t,r,n){let a=eo(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`cannot compute difference between\
 dates of ${i} and ${o} calendars`);let s=li(e,K(n),"datetime",[],"nanosecond","hour"),l=g(t,re),c=g(a,re),u=At("%Tempor\
al.Duration%"),d;if(Tn(s.largestUnit)!=="date")d=Dr(Qu(l,c,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{
let f=g(t,Oe);if(!qm(f,g(a,Oe)))throw new RangeError("When calculating difference between time zones, largestUnit must b\
e 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if($.default.
equal(l,c))return new u;d=Dr(ng(l,c,f,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return e===
"since"&&(d=fr(d)),d}function ti({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o){let s=r,l=i;return s+=
o.sec,l+=o.subsec,Wn(e,t,s,n,a,l)}function vu(e,t){let r=t.addToEpochNs(e);return an(r),r}function to(e,t,r,n,a="constra\
in"){if(gl(n.date)===0)return vu(e,n.time);let i=jr(t,e);return vu(Pt(t,Re(kr(r,i.isoDate,n.date,a),i.time),"compatible"),
n.time)}function nm(e,t,r){let n=Mr(r);e==="subtract"&&(n=fr(n));let a=En(wn(t),wn(n));if(Qr(a))throw new RangeError("Fo\
r years, months, or weeks arithmetic, use date arithmetic relative to a starting point");let i=tn(t),o=tn(n);return Dr(xn(
{years:0,months:0,weeks:0,days:0},i.time.add(o.time)),a)}function am(e,t,r){let n=Mr(r);e==="subtract"&&(n=fr(n));let a=wn(
n);if(Tn(a)==="date")throw new RangeError(`Duration field ${a} not supported by Temporal.Instant. Try Temporal.ZonedDate\
Time instead.`);let i=tn(n);return Vr(vu(g(t,re),i.time))}function im(e,t,r,n){let a=g(t,D),i=Mr(r);e==="subtract"&&(i=fr(
i));let o=Xm(i),s=Ae(K(n));return Zt(kr(a,g(t,ne),o,s),a)}function om(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=fr(a));let i=Ae(
K(n)),o=g(t,D),s=tn(a),l=g(t,Ye),c=ti(l.time,s.time),u=Nt(s.date,c.deltaDays);return vl(u.years,u.months,u.weeks,u.days,
0,0,0,0,0,0),Pr(Re(kr(o,l.isoDate,u,i),c),o)}function sm(e,t,r){let n=Mr(r);e==="subtract"&&(n=fr(n));let a=tn(n),{hour:i,
minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=ti(g(t,Qe),a.time);return kn(hl(i,o,s,l,c,u,"reject"))}function lm(e,t,r,n){
let a=Mr(r);e==="subtract"&&(a=fr(a));let i=Ae(K(n)),o=el(a),s=g(t,D),l=Qt(s,g(t,ne),"year-month");l.day=1;let c=Gn(s,l,
"constrain");if(o<0){let d=kr(s,c,{months:1},"constrain");c=pr(d.year,d.month,d.day-1)}let u=Xm(a);return xa(c),Ga(po(s,
Qt(s,kr(s,c,u,i),"year-month"),i),s)}function cm(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=fr(a));let i=Ae(K(n)),o=g(t,Oe),
s=g(t,D),l=Ya(a);return Ct(to(g(t,re),o,s,l,i),o,s)}function Vn(e,t,r){let n=Math.trunc(e/t),a=e%t,i=e<0?"negative":"pos\
itive",o=Math.abs(n),s=o+1,l=ur(Math.abs(2*a)-t),c=o%2==0,u=cl(r,i),d=a===0?o:ul(o,s,l,c,u);return t*(i==="positive"?d:-d)}
function bu(e,t,r,n){let a=ei[r]*t;return function(i,o,s){let l=bn(i),c=bn(o),u=$.default.divide(l,c),d=$.default.remainder(
l,c),f=cl(s,"positive"),h,y;$.default.lessThan(l,wr)?(h=$.default.subtract(u,lo),y=u):(h=u,y=$.default.add(u,lo));let b=Ys(
fa($.default.multiply(d,qu)),c)*($.default.lessThan(l,wr)?-1:1)+0,T=$.default.equal(d,wr)?u:ul(h,y,b,fm(h),f);return $.default.
multiply(T,c)}(e,$.default.BigInt(a),n)}function wu(e,t,r,n){yu(e);let{year:a,month:i,day:o}=e.isoDate,s=Tu(e.time,t,r,n);
return Re(pr(a,i,o+s.deltaDays),s)}function Tu({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o,s,l){
let c;switch(s){case"day":case"hour":c=1e3*(1e3*(1e3*(60*(60*e+t)+r)+n)+a)+i;break;case"minute":c=1e3*(1e3*(1e3*(60*t+r)+
n)+a)+i;break;case"second":c=1e3*(1e3*(1e3*r+n)+a)+i;break;case"millisecond":c=1e3*(1e3*n+a)+i;break;case"microsecond":c=
1e3*a+i;break;case"nanosecond":c=i}let u=ei[s],d=Vn(c,u*o,l)/u;switch(s){case"day":return{deltaDays:d,hour:0,minute:0,second:0,
millisecond:0,microsecond:0,nanosecond:0};case"hour":return Wn(d,0,0,0,0,0);case"minute":return Wn(e,d,0,0,0,0);case"sec\
ond":return Wn(e,t,d,0,0,0);case"millisecond":return Wn(e,t,r,d,0,0);case"microsecond":return Wn(e,t,r,n,d,0);case"nanos\
econd":return Wn(e,t,r,n,a,d);default:throw new Error(`Invalid unit ${s}`)}}function tl(e,t,r,n){let a=ei[r];return e.round(
$.default.BigInt(a*t),n)}function so(e,t){let r=ei[t];return e.fdiv($.default.BigInt(r))}function on(e,t){return e.year!==
t.year?ur(e.year-t.year):e.month!==t.month?ur(e.month-t.month):e.day!==t.day?ur(e.day-t.day):0}function ku(e,t){return e.
hour!==t.hour?ur(e.hour-t.hour):e.minute!==t.minute?ur(e.minute-t.minute):e.second!==t.second?ur(e.second-t.second):e.millisecond!==
t.millisecond?ur(e.millisecond-t.millisecond):e.microsecond!==t.microsecond?ur(e.microsecond-t.microsecond):e.nanosecond!==
t.nanosecond?ur(e.nanosecond-t.nanosecond):0}function ri(e,t){let r=on(e.isoDate,t.isoDate);return r!==0?r:ku(e.time,t.time)}
function ag(e){let t=rl(e);return globalThis.BigInt!==void 0?globalThis.BigInt(t.toString(10)):t}function Lr(e,t){let r=bn(
e),{quotient:n,remainder:a}=Ki(r,Ao),i=$.default.toNumber(n);return t==="floor"&&$.default.toNumber(a)<0&&(i-=1),t==="ce\
il"&&$.default.toNumber(a)>0&&(i+=1),i}function Yr(e){if(!Number.isInteger(e))throw new RangeError("epoch milliseconds m\
ust be an integer");return $.default.multiply($.default.BigInt(e),Ao)}function rl(e){let t=e;if(typeof e=="object"){let r=e[Symbol.
toPrimitive];r&&typeof r=="function"&&(t=r.call(e,"number"))}if(typeof t=="number")throw new TypeError("cannot convert n\
umber to bigint");return typeof t=="bigint"?$.default.BigInt(t.toString(10)):$.default.BigInt(t)}var Su=(()=>{let e=$.default.
BigInt(Date.now()%1e6);return()=>{let t=Date.now(),r=$.default.BigInt(t),n=$.default.add(Yr(t),e);return e=$.default.remainder(
r,Ao),$.default.greaterThan(n,Xa)?Xa:$.default.lessThan(n,co)?co:n}})();function Yi(){return new Intl.DateTimeFormat().resolvedOptions().
timeZone}function ur(e){return e<0?-1:e>0?1:e}function K(e){if(e===void 0)return Object.create(null);if(et(e)&&e!==null)
return e;throw new TypeError("Options parameter must be an object, not "+(e===null?"null":typeof e))}function Ta(e,t){let r=Object.
create(null);return r[e]=t,r}function _n(e,t,r,n){let a=e[t];if(a!==void 0){if(a=pl(a),!r.includes(a))throw new RangeError(
`${t} must be one of ${r.join(", ")}, not ${a}`);return a}if(n===$n)throw new RangeError(`${t} option is required`);return n}
function tr(e){let t=go(e);if(!gS.includes(go(t)))throw new RangeError(`invalid calendar identifier ${t}`);switch(t){case"\
ethiopic-amete-alem":return"ethioaa";case"islamicc":return"islamic-civil"}return t}function go(e){let t="";for(let r=0;r<
e.length;r++){let n=e.charCodeAt(r);t+=n>=65&&n<=90?String.fromCharCode(n+32):String.fromCharCode(n)}return t}function Xn(e){
throw new TypeError(`Do not use built-in arithmetic operators with Temporal objects. When comparing, use ${e==="PlainMon\
thDay"?"Temporal.PlainDate.compare(obj1.toPlainDate(year), obj2.toPlainDate(year))":`Temporal.${e}.compare(obj1, obj2)`}\
, not obj1 > obj2. When coercing to strings, use \`\${obj}\` or String(obj), not '' + obj. When coercing to numbers, use pr\
operties or methods of the object, not \`+obj\`. When concatenating with strings, use \`\${str}\${obj}\` or str.concat(obj), n\
ot str + obj. In React, coerce to a string before rendering a Temporal object.`)}var SS=new RegExp(`^${Am.source}$`),ES=new RegExp(
`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/.source}$`);function ig(e,t,r,n=e(
t),a=e(r)){let i=t,o=r,s=n,l=a;for(;o-i>1;){let c=Math.trunc((i+o)/2),u=e(c);u===s?(i=c,s=u):u===l&&(o=c,l=u)}return o}function og(e){
return[...e]}function sg(e,t){if(e!=="gregory"&&e!=="iso8601")return;let r=Fo[e],n=t.year,{dayOfWeek:a,dayOfYear:i,daysInYear:o}=r.
isoToDate(t,{dayOfWeek:!0,dayOfYear:!0,daysInYear:!0}),s=r.getFirstDayOfWeek(),l=r.getMinimalDaysInFirstWeek(),c=(a+7-s)%
7,u=(a-i+7001-s)%7,d=Math.floor((i-1+u)/7);if(7-u>=l&&++d,d==0)d=function(f,h,y,b){let T=(b-f-y+1)%7;T<0&&(T+=7);let S=Math.
floor((y+T-1)/7);return 7-T>=h&&++S,S}(s,l,i+r.isoToDate(r.dateAdd(t,{years:-1},"constrain"),{daysInYear:!0}).daysInYear,
a),n--;else if(i>=o-5){let f=(c+o-i)%7;f<0&&(f+=7),6-f>=l&&i+7-c>o&&(d=1,n++)}return{week:d,year:n}}function um(e,t,r,n,a){
if(t!==a.year){if(e*(t-a.year)>0)return!0}else if(r!==a.month){if(e*(r-a.month)>0)return!0}else if(n!==a.day&&e*(n-a.day)>
0)return!0;return!1}var Fo={};function ka(e){if(!e.startsWith("M"))throw new RangeError(`Invalid month code: ${e}.  Mont\
h codes must start with M.`);let t=+e.slice(1);if(Number.isNaN(t))throw new RangeError(`Invalid month code: ${e}`);return t}
function rn(e,t=!1){return`M${`${e}`.padStart(2,"0")}${t?"L":""}`}function ed(e,t=void 0,r=12){let{month:n,monthCode:a}=e;
if(a===void 0){if(n===void 0)throw new TypeError("Either month or monthCode are required");t==="reject"&&Tt(n,1,r),t==="\
constrain"&&(n=Jt(n,1,r)),a=rn(n)}else{let i=ka(a);if(a!==rn(i))throw new RangeError(`Invalid month code: ${a}`);if(n!==
void 0&&n!==i)throw new RangeError(`monthCode ${a} and month ${n} must match if both are present`);if(n=i,n<1||n>r)throw new RangeError(
`Invalid monthCode: ${a}`)}return{...e,month:n,monthCode:a}}Fo.iso8601={resolveFields(e,t){if((t==="date"||t==="year-mon\
th")&&e.year===void 0)throw new TypeError("year is required");if((t==="date"||t==="month-day")&&e.day===void 0)throw new TypeError(
"day is required");Object.assign(e,ed(e))},dateToISO:(e,t)=>io(e.year,e.month,e.day,t),monthDayToISOReferenceDate(e,t){let{
month:r,day:n}=io(e.year??1972,e.month,e.day,t);return{month:r,day:n,year:1972}},extraFields:()=>[],fieldKeysToIgnore(e){
let t=new Set;for(let r=0;r<e.length;r++){let n=e[r];t.add(n),n==="month"?t.add("monthCode"):n==="monthCode"&&t.add("mon\
th")}return og(t)},dateAdd(e,{years:t=0,months:r=0,weeks:n=0,days:a=0},i){let{year:o,month:s,day:l}=e;return o+=t,s+=r,{
year:o,month:s}=ha(o,s),{year:o,month:s,day:l}=io(o,s,l,i),l+=a+7*n,pr(o,s,l)},dateUntil(e,t,r){let n=-on(e,t);if(n===0)
return{years:0,months:0,weeks:0,days:0};let a,i=0,o=0;if(r==="year"||r==="month"){let u=t.year-e.year;for(u!==0&&(u-=n);!um(
n,e.year+u,e.month,e.day,t);)i=u,u+=n;let d=n;for(a=ha(e.year+i,e.month+d);!um(n,a.year,a.month,e.day,t);)o=d,d+=n,a=ha(
a.year,a.month+n);r==="month"&&(o+=12*i,i=0)}a=ha(e.year+i,e.month+o);let s=Zm(a.year,a.month,e.day),l=0,c=wa(t.year,t.month-
1,t.day)-wa(s.year,s.month-1,s.day);return r==="week"&&(l=Math.trunc(c/7),c%=7),{years:i,months:o,weeks:l,days:c}},isoToDate({
year:e,month:t,day:r},n){let a={era:void 0,eraYear:void 0,year:e,month:t,day:r,daysInWeek:7,monthsInYear:12};if(n.monthCode&&
(a.monthCode=rn(t)),n.dayOfWeek){let i=t+(t<3?10:-2),o=e-(t<3?1:0),s=Math.floor(o/100),l=o-100*s,c=(r+Math.floor(2.6*i-.2)+
(l+Math.floor(l/4))+(Math.floor(s/4)-2*s))%7;a.dayOfWeek=c+(c<=0?7:0)}if(n.dayOfYear){let i=r;for(let o=t-1;o>0;o--)i+=ga(
e,o);a.dayOfYear=i}return n.weekOfYear&&(a.weekOfYear=sg("iso8601",{year:e,month:t,day:r})),n.daysInMonth&&(a.daysInMonth=
ga(e,t)),(n.daysInYear||n.inLeapYear)&&(a.inLeapYear=Qs(e),a.daysInYear=a.inLeapYear?366:365),a},getFirstDayOfWeek:()=>1,
getMinimalDaysInFirstWeek:()=>4};var vr=class e{constructor(t){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=
0,t!==void 0){let r=0;for(let n of t.map.entries()){if(++r>e.MAX_CACHE_ENTRIES)break;this.map.set(...n)}}}get(t){let r=this.
map.get(t);return r&&(this.hits++,this.report()),this.calls++,r}set(t,r){this.map.set(t,r),this.misses++,this.report()}report(){}setObject(t){
if(e.objectMap.get(t))throw new RangeError("object already cached");e.objectMap.set(t,this),this.report()}static getCacheForObject(t){
let r=e.objectMap.get(t);return r||(r=new e,e.objectMap.set(t,r)),r}};function lg({isoYear:e,isoMonth:t,isoDay:r}){return`${Lo(
e)}-${Sr(t)}-${Sr(r)}T00:00Z`}function ru(e,t){return{years:e.year-t.year,months:e.month-t.month,days:e.day-t.day}}vr.objectMap=
new WeakMap,vr.MAX_CACHE_ENTRIES=1e3;var Rn=class{constructor(){this.eras=[],this.hasEra=!1,this.erasBeginMidYear=!1}getFormatter(){
return this.formatter===void 0&&(this.formatter=new Intl.DateTimeFormat(`en-US-u-ca-${this.id}`,{day:"numeric",month:"nu\
meric",year:"numeric",era:"short",timeZone:"UTC"})),this.formatter}getCalendarParts(t){let r=this.getFormatter(),n=new Date(
t);if(t==="-271821-04-19T00:00Z"){let a=r.resolvedOptions();r=new Intl.DateTimeFormat(a.locale,{...a,timeZone:"Etc/GMT+1"}),
n=new Date("-271821-04-20T00:00Z")}try{return r.formatToParts(n)}catch{throw new RangeError(`Invalid ISO date: ${t}`)}}isoToCalendarDate(t,r){
let{year:n,month:a,day:i}=t,o=JSON.stringify({func:"isoToCalendarDate",isoYear:n,isoMonth:a,isoDay:i,id:this.id}),s=r.get(
o);if(s)return s;let l=lg({isoYear:n,isoMonth:a,isoDay:i}),c=this.getCalendarParts(l),u={};for(let f=0;f<c.length;f++){let{
type:h,value:y}=c[f];if(h!=="year"&&h!=="relatedYear"||(this.hasEra?u.eraYear=+y:u.year=+y),h==="month"){let b=/^([0-9]*)(.*?)$/.
exec(y);if(!b||b.length!=3||!b[1]&&!b[2])throw new RangeError(`Unexpected month: ${y}`);if(u.month=b[1]?+b[1]:1,u.month<
1)throw new RangeError(`Invalid month ${y} from ${l}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/is\
sues/detail?id=10527)`);if(u.month>13)throw new RangeError(`Invalid month ${y} from ${l}[u-ca-${this.id}] (probably due \
to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);b[2]&&(u.monthExtra=b[2])}h==="day"&&(u.day=+y),this.hasEra&&
h==="era"&&y!=null&&y!==""&&(u.era=y.split(" (")[0].normalize("NFD").replace(/[^-0-9 \p{L}]/gu,"").replace(/ /g,"-").toLowerCase())}
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
monthsInYear(i,r),{month:s,monthCode:l}=i;return{month:s,monthCode:l}=ed(i,n,o),{...i,month:s,monthCode:l}}regulateMonthDayNaive(t,r,n){
let a=this.monthsInYear(t,n),{month:i,day:o}=t;return r==="reject"?(Tt(i,1,a),Tt(o,1,this.maximumMonthLength(t))):(i=Jt(
i,1,a),o=Jt(o,1,this.maximumMonthLength({...t,month:i}))),{...t,month:i,day:o}}calendarToIsoDate(t,r="constrain",n){let a=t,
i=this.adjustCalendarDate(t,n,r,!1);i=this.regulateMonthDayNaive(i,r,n);let{year:o,month:s,day:l}=i,c=JSON.stringify({func:"\
calendarToIsoDate",year:o,month:s,day:l,overflow:r,id:this.id}),u,d=n.get(c);if(d||a.year!==void 0&&a.month!==void 0&&a.
day!==void 0&&(a.year!==i.year||a.month!==i.month||a.day!==i.day)&&(u=JSON.stringify({func:"calendarToIsoDate",year:a.year,
month:a.month,day:a.day,overflow:r,id:this.id}),d=n.get(u),d))return d;let f=this.estimateIsoDate({year:o,month:s,day:l}),
h=E=>{let _=this.addDaysIso(f,E);if(i.day>this.minimumMonthLength(i)){let O=this.isoToCalendarDate(_,n);for(;O.month!==s||
O.year!==o;){if(r==="reject")throw new RangeError(`day ${l} does not exist in month ${s} of year ${o}`);_=this.addDaysIso(
_,-1),O=this.isoToCalendarDate(_,n)}}return _},y=0,b=this.isoToCalendarDate(f,n),T=ru(i,b);if(T.years!==0||T.months!==0||
T.days!==0){let E=365*T.years+30*T.months+T.days;f=this.addDaysIso(f,E),b=this.isoToCalendarDate(f,n),T=ru(i,b),T.years===
0&&T.months===0?f=h(T.days):y=this.compareCalendarDates(i,b)}let S=8;for(;y;){f=this.addDaysIso(f,y*S);let E=b;b=this.isoToCalendarDate(
f,n);let _=y;if(y=this.compareCalendarDates(i,b),y){if(T=ru(i,b),T.years===0&&T.months===0)f=h(T.days),y=0;else if(_&&y!==
_)if(S>1)S/=2;else{if(r==="reject")throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({...a})}`);
this.compareCalendarDates(b,E)>0&&(f=this.addDaysIso(f,-1)),y=0}}}if(n.set(c,f),u&&n.set(u,f),i.year===void 0||i.month===
void 0||i.day===void 0||i.monthCode===void 0||this.hasEra&&(i.era===void 0||i.eraYear===void 0))throw new RangeError("Un\
expected missing property");return f}compareCalendarDates(t,r){return t.year!==r.year?ur(t.year-r.year):t.month!==r.month?
ur(t.month-r.month):t.day!==r.day?ur(t.day-r.day):0}regulateDate(t,r="constrain",n){let a=this.calendarToIsoDate(t,r,n);
return this.isoToCalendarDate(a,n)}addDaysIso(t,r){return pr(t.year,t.month,t.day+r)}addDaysCalendar(t,r,n){let a=this.calendarToIsoDate(
t,"constrain",n),i=this.addDaysIso(a,r);return this.isoToCalendarDate(i,n)}addMonthsCalendar(t,r,n,a){let i=t,{day:o}=i;
for(let s=0,l=Math.abs(r);s<l;s++){let{month:c}=i,u=i,d=r<0?-Math.max(o,this.daysInPreviousMonth(i,a)):this.daysInMonth(
i,a),f=this.calendarToIsoDate(i,"constrain",a),h=this.addDaysIso(f,d);if(i=this.isoToCalendarDate(h,a),r>0){let y=this.monthsInYear(
u,a);for(;i.month-1!=c%y;)h=this.addDaysIso(h,-1),i=this.isoToCalendarDate(h,a)}i.day!==o&&(i=this.regulateDate({...i,day:o},
"constrain",a))}if(n==="reject"&&i.day!==o)throw new RangeError(`Day ${o} does not exist in resulting calendar month`);return i}addCalendar(t,{
years:r=0,months:n=0,weeks:a=0,days:i=0},o,s){let{year:l,day:c,monthCode:u}=t,d=this.adjustCalendarDate({year:l+r,monthCode:u,
day:c},s),f=this.addMonthsCalendar(d,n,o,s),h=i+7*a;return this.addDaysCalendar(f,h,s)}untilCalendar(t,r,n,a){let i=0,o=0,
s=0,l=0;switch(n){case"day":i=this.calendarDaysUntil(t,r,a);break;case"week":{let c=this.calendarDaysUntil(t,r,a);i=c%7,
o=(c-i)/7;break}case"month":case"year":{let c=this.compareCalendarDates(r,t);if(!c)return{years:0,months:0,weeks:0,days:0};
let u=r.year-t.year,d=r.day-t.day;if(n==="year"&&u){let y=0;r.monthCode>t.monthCode&&(y=1),r.monthCode<t.monthCode&&(y=-1),
y||(y=Math.sign(d)),l=y*c<0?u-c:u}let f,h=l?this.addCalendar(t,{years:l},"constrain",a):t;do s+=c,f=h,h=this.addMonthsCalendar(
f,c,"constrain",a),h.day!==t.day&&(h=this.regulateDate({...h,day:t.day},"constrain",a));while(this.compareCalendarDates(
r,h)*c>=0);s-=c,i=this.calendarDaysUntil(f,r,a);break}}return{years:l,months:s,weeks:o,days:i}}daysInMonth(t,r){let{day:n}=t,
a=this.maximumMonthLength(t),i=this.minimumMonthLength(t);if(i===a)return i;let o=n<=a-i?a:i,s=this.calendarToIsoDate(t,
"constrain",r),l=this.addDaysIso(s,o),c=this.isoToCalendarDate(l,r),u=this.addDaysIso(l,-c.day);return this.isoToCalendarDate(
u,r).day}daysInPreviousMonth(t,r){let{day:n,month:a,year:i}=t,o={year:a>1?i:i-1,month:a,day:1},s=a>1?a-1:this.monthsInYear(
o,r);o={...o,month:s};let l=this.minimumMonthLength(o),c=this.maximumMonthLength(o);if(l===c)return c;let u=this.calendarToIsoDate(
t,"constrain",r),d=this.addDaysIso(u,-n);return this.isoToCalendarDate(d,r).day}startOfCalendarYear(t){return{year:t.year,
month:1,monthCode:"M01",day:1}}startOfCalendarMonth(t){return{year:t.year,month:t.month,day:1}}calendarDaysUntil(t,r,n){
let a=this.calendarToIsoDate(t,"constrain",n),i=this.calendarToIsoDate(r,"constrain",n);return wa(i.year,i.month-1,i.day)-
wa(a.year,a.month-1,a.day)}monthDaySearchStartYear(t,r){return 1972}monthDayFromFields(t,r,n){let a,i,o,s,l,{era:c,eraYear:u,
year:d,month:f,monthCode:h,day:y}=t;if(f!==void 0&&d===void 0&&(!this.hasEra||c===void 0||u===void 0))throw new TypeError(
"when month is present, year (or era and eraYear) are required");(h===void 0||d!==void 0||this.hasEra&&u!==void 0)&&({monthCode:h,
day:y}=this.isoToCalendarDate(this.calendarToIsoDate(t,r,n),n));let b={year:this.monthDaySearchStartYear(h,y),month:12,day:31},
T=this.isoToCalendarDate(b,n),S=T.monthCode>h||T.monthCode===h&&T.day>=y?T.year:T.year-1;for(let E=0;E<20;E++){let _=this.
adjustCalendarDate({day:y,monthCode:h,year:S-E},n),O=this.calendarToIsoDate(_,"constrain",n),M=this.isoToCalendarDate(O,
n);if({year:a,month:i,day:o}=O,M.monthCode===h&&M.day===y)return{month:i,day:o,year:a};if(r==="constrain"){let W=this.maxLengthOfMonthCodeInAnyYear(
M.monthCode);if(M.monthCode===h&&M.day===W&&y>W)return{month:i,day:o,year:a};(s===void 0||M.monthCode===s.monthCode&&M.day>
s.day)&&(s=M,l=O)}}if(r==="constrain"&&l!==void 0)return l;throw new RangeError(`No recent ${this.id} year with monthCod\
e ${h} and day ${y}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}},Eu=class extends Rn{constructor(){super(...arguments),
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
`Hebrew monthCode M05L is invalid in year ${i} which is not a leap year`);o=6,s="M06"}}else{o=ka(s),this.inLeapYear({year:i})&&
o>=6&&o++;let u=this.monthsInYear({year:i});if(o<1||o>u)throw new RangeError(`Invalid monthCode: ${s}`)}else if(n==="rej\
ect"?(Tt(o,1,this.monthsInYear({year:i})),Tt(l,1,this.maximumMonthLength({year:i,month:o}))):(o=Jt(o,1,this.monthsInYear(
{year:i})),l=Jt(l,1,this.maximumMonthLength({year:i,month:o}))),s===void 0)s=this.getMonthCode(i,o);else if(this.getMonthCode(
i,o)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${o} in Hebrew year ${i}`);return{...t,day:l,month:o,
monthCode:s,year:i}}},Jn=class extends Rn{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=
354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(t,r){let n={year:t.year,month:1,monthCode:"M01",day:1},a={year:t.year+
1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(n,a,r)===355}monthsInYear(){return 12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(
t);return{year:Math.floor(r*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}},xu=class extends Jn{constructor(){
super(...arguments),this.id="islamic"}},_u=class extends Jn{constructor(){super(...arguments),this.id="islamic-umalqura"}},
Au=class extends Jn{constructor(){super(...arguments),this.id="islamic-tbla"}},$u=class extends Jn{constructor(){super(...arguments),
this.id="islamic-civil"}},Ru=class extends Jn{constructor(){super(...arguments),this.id="islamic-rgsa"}},Iu=class extends Jn{constructor(){
super(...arguments),this.id="islamicc"}},Ou=class extends Rn{constructor(){super(...arguments),this.id="persian",this.calendarType=
"solar"}inLeapYear(t,r){return this.daysInMonth({year:t.year,month:12,day:1},r)===30}monthsInYear(){return 12}minimumMonthLength(t){
let{month:r}=t;return r===12?29:r<=6?31:30}maximumMonthLength(t){let{month:r}=t;return r===12?30:r<=6?31:30}maxLengthOfMonthCodeInAnyYear(t){
return ka(t)<=6?31:30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(t);return{year:r+621,month:1,day:1}}},Cu=class extends Rn{constructor(){
super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,
month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,
day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},
10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.
vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 S\
aka"}inLeapYear(t){return td(t.year+78)}monthsInYear(){return 12}minimumMonthLength(t){return this.getMonthInfo(t).length}maximumMonthLength(t){
return this.getMonthInfo(t).length}maxLengthOfMonthCodeInAnyYear(t){let r=ka(t),n=this.months[r];return n=n.leap??n,n.length}getMonthInfo(t){
let{month:r}=t,n=this.months[r];if(n===void 0)throw new RangeError(`Invalid month: ${r}`);return this.inLeapYear(t)&&n.leap&&
(n=n.leap),n}estimateIsoDate(t){let r=this.adjustCalendarDate(t),n=this.getMonthInfo(r);return pr(r.year+78+(n.nextYear?
1:0),n.month,n.day+r.day-1)}checkIcuBugs(t){if(this.vulnerableToBceBug&&t.year<1)throw new RangeError(`calendar '${this.
id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}};function td(e){
return e%4==0&&(e%100!=0||e%400==0)}var nl=class extends Rn{constructor(t,r){super(),this.calendarType="solar",this.id=t,
this.isoEpoch=r}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return td(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][ka(t)-1]}estimateIsoDate(t){
let r=this.adjustCalendarDate(t);return io(r.year+this.isoEpoch.year,r.month+this.isoEpoch.month,r.day+this.isoEpoch.day,
"constrain")}},al=class extends Rn{constructor(t,r){super(),this.hasEra=!0,this.calendarType="solar",this.id=t;let{eras:n,
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
r);this.anchorEra=a,this.eras=n}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return td(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][ka(t)-1]}completeEraYear(t){
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
constrain"){let a=t,{month:i,monthCode:o}=a;return i===void 0&&(a={...a,month:ka(o)}),this.validateCalendarDate(a),a=this.
completeEraYear(a),super.adjustCalendarDate(a,r,n)}estimateIsoDate(t){let r=this.adjustCalendarDate(t),{year:n,month:a,day:i}=r,
{anchorEra:o}=this;return io(n+o.isoEpoch.year-(o.hasYearZero?0:1),a,i,"constrain")}},yo=class extends al{constructor(t,r){
super(t,r)}isoToCalendarDate(t){let{year:r,month:n,day:a}=t,i=rn(n),o=r-this.anchorEra.isoEpoch.year+1;return this.completeEraYear(
{year:o,month:n,monthCode:i,day:a})}},en={inLeapYear(e){let{year:t}=e;return(t+1)%4==0},monthsInYear:()=>13,minimumMonthLength(e){
let{month:t}=e;return t===13?this.inLeapYear(e)?6:5:30},maximumMonthLength(e){return this.minimumMonthLength(e)},maxLengthOfMonthCodeInAnyYear:e=>e===
"M13"?6:30},Nu=class extends nl{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=en.monthsInYear,
this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},il=class extends al{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=
en.monthsInYear,this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},Pu=class extends Nu{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}},Du=class extends il{constructor(){
super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}},Mu=class extends il{constructor(){
super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"eth\
iopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}},ju=class extends yo{constructor(){super(
"roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"\
roc"}])}},Lu=class extends nl{constructor(){super("buddhist",{year:-543,month:1,day:1})}},Fu=class extends yo{constructor(){
super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be",
"bce"],reverseOf:"gregory"}])}reviseIntlEra(t){let{era:r,eraYear:n}=t;return r==="b"&&(r="gregory-inverse"),r==="a"&&(r=
"gregory"),{era:r,eraYear:n}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}},Uu=class extends yo{constructor(){
super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",
isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},
anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,
day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:[
"japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gre\
gory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(t,r){let{era:n,eraYear:a}=t,{year:i}=r;
return this.eras.find(o=>o.code===n)?{era:n,eraYear:a}:i<1?{era:"japanese-inverse",eraYear:1-i}:{era:"japanese",eraYear:i}}},
ol=class extends Rn{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(t,r){let n=this.getMonthList(
t.year,r);return Object.entries(n).length===13}monthsInYear(t,r){return this.inLeapYear(t,r)?13:12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(t){return["M01L","M09L","M10L","M11L","M12L"].includes(
t)?29:30}monthDaySearchStartYear(t,r){let n={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,
1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[t]??
[1972,1972];return r<30?n[0]:n[1]}getMonthList(t,r){if(t===void 0)throw new TypeError("Missing year");let n=JSON.stringify(
{func:"getMonthList",calendarYear:t,id:this.id}),a=r.get(n);if(a)return a;let i=this.getFormatter(),o=(T,S)=>{let E=lg({
isoYear:T,isoMonth:2,isoDay:1}),_=new Date(E);_.setUTCDate(S+1);let O=i.formatToParts(_),M=O.find(H=>H.type==="month").value,
W=+O.find(H=>H.type==="day").value,G=O.find(H=>H.type==="relatedYear"),Z;if(G===void 0)throw new RangeError(`Intl.DateTi\
meFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return Z=+G.value,{calendarMonthString:M,
calendarDay:W,calendarYearToVerify:Z}},s=17,{calendarMonthString:l,calendarDay:c,calendarYearToVerify:u}=o(t,s);l!=="1"&&
(s+=29,{calendarMonthString:l,calendarDay:c}=o(t,s)),s-=c-5;let d={},f,h,y=1,b=!1;do({calendarMonthString:l,calendarDay:c,
calendarYearToVerify:u}=o(t,s)),f&&(d[h].daysInMonth=f+30-c),u!==t?b=!0:(d[l]={monthIndex:y++},s+=30),f=c,h=l;while(!b);
return d[h].daysInMonth=f+30-c,r.set(n,d),d}estimateIsoDate(t){let{year:r,month:n}=t;return{year:r,month:n>=12?12:n+1,day:1}}adjustCalendarDate(t,r,n="\
constrain",a=!1){let{year:i,month:o,monthExtra:s,day:l,monthCode:c}=t;if(i===void 0)throw new TypeError("Missing propert\
y: year");if(a){if(s&&s!=="bis")throw new RangeError(`Unexpected leap month suffix: ${s}`);let u=rn(o,s!==void 0),d=`${o}${s||
""}`,f=this.getMonthList(i,r)[d];if(f===void 0)throw new RangeError(`Unmatched month ${d} in Chinese year ${i}`);return o=
f.monthIndex,{year:i,month:o,day:l,monthCode:u}}if(this.validateCalendarDate(t),o===void 0){let u=this.getMonthList(i,r),
d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="0"&&(d=d.slice(1));let f=u[d];if(o=f&&f.monthIndex,o===void 0&&c.endsWith(
"L")&&c!="M13L"&&n==="constrain"){let h=+c.replace(/^M0?|L$/g,"");f=u[h],f&&(o=f.monthIndex,c=rn(h))}if(o===void 0)throw new RangeError(
`Unmatched month ${c} in Chinese year ${i}`)}else if(c===void 0){let u=this.getMonthList(i,r),d=Object.entries(u),f=d.length;
n==="reject"?(Tt(o,1,f),Tt(l,1,this.maximumMonthLength())):(o=Jt(o,1,f),l=Jt(l,1,this.maximumMonthLength()));let h=d.find(
y=>y[1].monthIndex===o);if(h===void 0)throw new RangeError(`Invalid month ${o} in Chinese year ${i}`);c=rn(+h[0].replace(
"bis",""),h[0].indexOf("bis")!==-1)}else{let u=this.getMonthList(i,r),d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="\
0"&&(d=d.slice(1));let f=u[d];if(!f)throw new RangeError(`Unmatched monthCode ${c} in Chinese year ${i}`);if(o!==f.monthIndex)
throw new RangeError(`monthCode ${c} doesn't correspond to month ${o} in Chinese year ${i}`)}return{...t,year:i,month:o,
monthCode:c,day:l}}},Bu=class extends ol{constructor(){super(...arguments),this.id="chinese"}},Hu=class extends ol{constructor(){
super(...arguments),this.id="dangi"}},Wu=class{constructor(t){this.helper=t}extraFields(t){return this.helper.hasEra&&t.
includes("year")?["era","eraYear"]:[]}resolveFields(t){if(this.helper.calendarType!=="lunisolar"){let r=new vr;ed(t,void 0,
this.helper.monthsInYear({year:t.year??1972},r))}}dateToISO(t,r){let n=new vr,a=this.helper.calendarToIsoDate(t,r,n);return n.
setObject(a),a}monthDayToISOReferenceDate(t,r){let n=new vr,a=this.helper.monthDayFromFields(t,r,n);return n.setObject(a),
a}fieldKeysToIgnore(t){let r=new Set;for(let n=0;n<t.length;n++){let a=t[n];switch(r.add(a),a){case"era":r.add("eraYear"),
r.add("year");break;case"eraYear":r.add("era"),r.add("year");break;case"year":r.add("era"),r.add("eraYear");break;case"m\
onth":r.add("monthCode"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"monthCode":r.add("mont\
h"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"day":this.helper.erasBeginMidYear&&(r.add("\
era"),r.add("eraYear"))}}return og(r)}dateAdd(t,{years:r,months:n,weeks:a,days:i},o){let s=vr.getCacheForObject(t),l=this.
helper.isoToCalendarDate(t,s),c=this.helper.addCalendar(l,{years:r,months:n,weeks:a,days:i},o,s),u=this.helper.calendarToIsoDate(
c,"constrain",s);return vr.getCacheForObject(u)||new vr(s).setObject(u),u}dateUntil(t,r,n){let a=vr.getCacheForObject(t),
i=vr.getCacheForObject(r),o=this.helper.isoToCalendarDate(t,a),s=this.helper.isoToCalendarDate(r,i);return this.helper.untilCalendar(
o,s,n,a)}isoToDate(t,r){let n=vr.getCacheForObject(t),a=this.helper.isoToCalendarDate(t,n);if(r.dayOfWeek&&(a.dayOfWeek=
Fo.iso8601.isoToDate(t,{dayOfWeek:!0}).dayOfWeek),r.dayOfYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.calendarDaysUntil(
i,a,n);a.dayOfYear=o+1}if(r.weekOfYear&&(a.weekOfYear=sg(this.helper.id,t)),a.daysInWeek=7,r.daysInMonth&&(a.daysInMonth=
this.helper.daysInMonth(a,n)),r.daysInYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.addCalendar(i,{years:1},
"constrain",n);a.daysInYear=this.helper.calendarDaysUntil(i,o,n)}return r.monthsInYear&&(a.monthsInYear=this.helper.monthsInYear(
a,n)),r.inLeapYear&&(a.inLeapYear=this.helper.inLeapYear(a,n)),a}getFirstDayOfWeek(){return this.helper.getFirstDayOfWeek()}getMinimalDaysInFirstWeek(){
return this.helper.getMinimalDaysInFirstWeek()}};for(let e of[Eu,Ou,Mu,Pu,Du,Bu,Hu,ju,Cu,Lu,Fu,Uu,xu,_u,Au,$u,Ru,Iu]){let t=new e;
Fo[t.id]=new Wu(t)}cu("calendarImpl",function(e){return Fo[e]});var vo=Intl.DateTimeFormat;function Ha(e,t){let r=g(e,t);
return typeof r=="function"&&(r=new vo(g(e,Sm),r(g(e,iu))),function(n,a,i){let o=ll(n);if(o===void 0)throw new TypeError(
"Missing slots for the given container");if(o[a]===void 0)throw new TypeError(`tried to reset ${a} which was not set`);o[a]=
i}(e,t,r)),r}function zi(e){return er(e,Ea)}var Sa=class{constructor(t=void 0,r=void 0){(function(n,a,i){let o=i!==void 0,
s;if(o){let d=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","mont\
h","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeS\
tyle"];s=function(h){if(h==null)throw new TypeError(`Expected object not ${h}`);return Object(h)}(i);let f=Object.create(
null);for(let h=0;h<d.length;h++){let y=d[h];Object.prototype.hasOwnProperty.call(s,y)&&(f[y]=s[y])}s=f}else s=Object.create(
null);let l=new vo(a,s),c=l.resolvedOptions();if(In(n),o){let d=Object.assign(Object.create(null),c);for(let f in d)Object.
prototype.hasOwnProperty.call(s,f)||delete d[f];d.hour12=s.hour12,d.hourCycle=s.hourCycle,he(n,iu,d)}else he(n,iu,s);he(
n,Sm,c.locale),he(n,Ea,l),he(n,Va,c.timeZone),he(n,Gi,c.calendar),he(n,ym,NS),he(n,vm,OS),he(n,bm,CS),he(n,wm,IS),he(n,Tm,
PS),he(n,km,DS);let u=o?s.timeZone:void 0;if(u===void 0)he(n,au,c.timeZone);else{let d=pl(u);if(d.startsWith("\u2212"))throw new RangeError(
"Unicode minus (U+2212) is not supported in time zone offsets");he(n,au,Xt(d))}})(this,t,r)}get format(){I(this,zi);let t=_S.
bind(this);return Object.defineProperties(t,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,
writable:!1,configurable:!0}}),t}formatRange(t,r){return I(this,zi),$S.call(this,t,r)}formatToParts(t,...r){return I(this,
zi),AS.call(this,t,...r)}formatRangeToParts(t,r){return I(this,zi),RS.call(this,t,r)}resolvedOptions(){return I(this,zi),
xS.call(this)}};"formatToParts"in vo.prototype||delete Sa.prototype.formatToParts,"formatRangeToParts"in vo.prototype||delete Sa.
prototype.formatRangeToParts;var Tr=function(e=void 0,t=void 0){return new Sa(e,t)};function xS(){let e=g(this,Ea).resolvedOptions();
return e.timeZone=g(this,au),e}function _S(e,...t){let r,n,a=ni(e,this);return a.formatter?(r=a.formatter,n=[Lr(a.epochNs,
"floor")]):(r=g(this,Ea),n=[e,...t]),r.format(...n)}function AS(e,...t){let r,n,a=ni(e,this);return a.formatter?(r=a.formatter,
n=[Lr(a.epochNs,"floor")]):(r=g(this,Ea),n=[e,...t]),r.formatToParts(...n)}function $S(e,t){if(e===void 0||t===void 0)throw new TypeError(
"Intl.DateTimeFormat.formatRange requires two values");let r=sl(e),n=sl(t),a,i=[r,n];if(An(r)!==An(n))throw new TypeError(
"Intl.DateTimeFormat.formatRange accepts two values of the same type");if(An(r)){if(!cg(r,n))throw new TypeError("Intl.D\
ateTimeFormat.formatRange accepts two values of the same type");let{epochNs:o,formatter:s}=ni(r,this),{epochNs:l,formatter:c}=ni(
n,this);s&&(a=s,i=[Lr(o,"floor"),Lr(l,"floor")])}return a||(a=g(this,Ea)),a.formatRange(...i)}function RS(e,t){if(e===void 0||
t===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");let r=sl(e),n=sl(t),a,i=[r,n];if(An(
r)!==An(n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if(An(r)){if(!cg(
r,n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");let{epochNs:o,formatter:s}=ni(
r,this),{epochNs:l,formatter:c}=ni(n,this);s&&(a=s,i=[Lr(o,"floor"),Lr(l,"floor")])}return a||(a=g(this,Ea)),a.formatRangeToParts(
...i)}function Uo(e={},t={}){let r=Object.assign({},e),n=["year","month","day","hour","minute","second","weekday","dayPe\
riod","timeZoneName","dateStyle","timeStyle"];for(let a=0;a<n.length;a++){let i=n[a];r[i]=i in t?t[i]:r[i],r[i]!==!1&&r[i]!==
void 0||delete r[i]}return r}function IS(e){let t=Uo(e,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});
if(t.timeStyle!=="long"&&t.timeStyle!=="full"||(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"\
2-digit"})),!Tl(t)){if(Bo(e))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(e)}]`);Object.
assign(t,{hour:"numeric",minute:"numeric",second:"numeric"})}return t}function OS(e){let t={short:{year:"2-digit",month:"\
numeric"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},full:{year:"numeric",month:"long"}},r=Uo(
e,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in r&&r.dateStyle){
let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("year"in r||"month"in r||"era"in r)){if(Bo(e))throw new TypeError(
`cannot format PlainYearMonth with options [${Object.keys(e)}]`);Object.assign(r,{year:"numeric",month:"numeric"})}return r}
function CS(e){let t={short:{month:"numeric",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"\
numeric"},full:{month:"long",day:"numeric"}},r=Uo(e,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if("dateStyle"in r&&r.dateStyle){let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("month"in
r)&&!("day"in r)){if(Bo(e))throw new TypeError(`cannot format PlainMonthDay with options [${Object.keys(e)}]`);Object.assign(
r,{month:"numeric",day:"numeric"})}return r}function NS(e){let t=Uo(e,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if(!wl(t)){if(Bo(e))throw new TypeError(`cannot format PlainDate with options [${Object.keys(e)}]`);Object.
assign(t,{year:"numeric",month:"numeric",day:"numeric"})}return t}function PS(e){let t=Uo(e,{timeZoneName:!1});if((t.timeStyle===
"long"||t.timeStyle==="full")&&(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"2-digit"}),t.
dateStyle)&&(Object.assign(t,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",
day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"\
long"}}[t.dateStyle]),delete t.dateStyle),!Tl(t)&&!wl(t)){if(Bo(e))throw new TypeError(`cannot format PlainDateTime with\
 options [${Object.keys(e)}]`);Object.assign(t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"nume\
ric",second:"numeric"})}return t}function DS(e){let t=e;return Tl(t)||wl(t)||(t=Object.assign({},t,{year:"numeric",month:"\
numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function wl(e){return"year"in e||"month"in e||
"day"in e||"weekday"in e||"dateStyle"in e||"era"in e}function Tl(e){return"hour"in e||"minute"in e||"second"in e||"timeS\
tyle"in e||"dayPeriod"in e||"fractionalSecondDigits"in e}function Bo(e){return wl(e)||Tl(e)||"dateStyle"in e||"timeStyle"in
e||"timeZoneName"in e}function An(e){return Xe(e)||at(e)||qe(e)||ve(e)||xt(e)||br(e)||Et(e)}function sl(e){return An(e)?
e:dl(e)}function cg(e,t){return!(!An(e)||!An(t)||at(e)&&!at(t)||Xe(e)&&!Xe(t)||qe(e)&&!qe(t)||ve(e)&&!ve(t)||xt(e)&&!xt(
t)||br(e)&&!br(t)||Et(e)&&!Et(t))}function ni(e,t){if(at(e)){let r={isoDate:{year:1970,month:1,day:1},time:g(e,Qe)};return{
epochNs:Pt(g(t,Va),r,"compatible"),formatter:Ha(t,wm)}}if(xt(e)){let r=g(e,D),n=g(t,Gi);if(r!==n)throw new RangeError(`c\
annot format PlainYearMonth with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Pt(g(t,Va),a,"compatible"),formatter:Ha(t,vm)}}if(br(
e)){let r=g(e,D),n=g(t,Gi);if(r!==n)throw new RangeError(`cannot format PlainMonthDay with calendar ${r} in locale with \
calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{
epochNs:Pt(g(t,Va),a,"compatible"),formatter:Ha(t,bm)}}if(Xe(e)){let r=g(e,D),n=g(t,Gi);if(r!=="iso8601"&&r!==n)throw new RangeError(
`cannot format PlainDate with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Pt(g(t,Va),a,"compatible"),formatter:Ha(t,ym)}}if(qe(
e)){let r=g(e,D),n=g(t,Gi);if(r!=="iso8601"&&r!==n)throw new RangeError(`cannot format PlainDateTime with calendar ${r} \
in locale with calendar ${n}`);let a=g(e,Ye);return{epochNs:Pt(g(t,Va),a,"compatible"),formatter:Ha(t,Tm)}}if(ve(e))throw new TypeError(
"Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return Et(e)?{epochNs:g(
e,re),formatter:Ha(t,km)}:{}}function ug(e){let t=Object.create(null);return t.years=g(e,Ht),t.months=g(e,Wt),t.weeks=g(
e,lr),t.days=g(e,qt),t.hours=g(e,Vt),t.minutes=g(e,Yt),t.seconds=g(e,zt),t.milliseconds=g(e,Kt),t.microseconds=g(e,Gt),t.
nanoseconds=g(e,cr),t}Sa.prototype.constructor=Tr,Object.defineProperty(Tr,"prototype",{value:Sa.prototype,writable:!1,enumerable:!1,
configurable:!1}),Tr.supportedLocalesOf=vo.supportedLocalesOf,On(Tr,"Intl.DateTimeFormat");var{format:MS,formatToParts:jS}=Intl.
DurationFormat?.prototype??Object.create(null);function rd(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=ug(
Mr(e));return MS.call(this,t)}Intl.DurationFormat?.prototype&&(Intl.DurationFormat.prototype.format=rd,Intl.DurationFormat.
prototype.formatToParts=function(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=ug(Mr(e));return jS.call(
this,t)});var xM=Object.freeze({__proto__:null,DateTimeFormat:Tr,ModifiedIntlDurationFormatPrototypeFormat:rd}),bo=class{constructor(t){
if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");Hm(this,rl(t))}get epochMilliseconds(){
return I(this,Et),Lr(g(this,re),"floor")}get epochNanoseconds(){return I(this,Et),ag($.default.BigInt(g(this,re)))}add(t){
return I(this,Et),am("add",this,t)}subtract(t){return I(this,Et),am("subtract",this,t)}until(t,r=void 0){return I(this,Et),
Zh("until",this,t,r)}since(t,r=void 0){return I(this,Et),Zh("since",this,t,r)}round(t){if(I(this,Et),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?Ta("smallestUnit",t):K(t),n=ii(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",$n);return oi(n,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[i],
!0),Vr(bu(g(this,re),n,i,a))}equals(t){I(this,Et);let r=Xi(t),n=g(this,re),a=g(r,re);return $.default.equal($.default.BigInt(
n),$.default.BigInt(a))}toString(t=void 0){I(this,Et);let r=K(t),n=Oo(r),a=zr(r,"trunc"),i=dr(r,"smallestUnit","time",void 0);
if(i==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let o=r.timeZone;o!==void 0&&(o=
Xt(o));let{precision:s,unit:l,increment:c}=Co(i,n);return Hh(Vr(bu(g(this,re),c,l,a)),o,s)}toJSON(){return I(this,Et),Hh(
this,void 0,"auto")}toLocaleString(t=void 0,r=void 0){return I(this,Et),new Tr(t,r).format(this)}valueOf(){Xn("Instant")}toZonedDateTimeISO(t){
I(this,Et);let r=Xt(t);return Ct(g(this,re),r,"iso8601")}static fromEpochMilliseconds(t){return Vr(Yr(dl(t)))}static fromEpochNanoseconds(t){
return Vr(rl(t))}static from(t){return Xi(t)}static compare(t,r){let n=Xi(t),a=Xi(r),i=g(n,re),o=g(a,re);return $.default.
lessThan(i,o)?-1:$.default.greaterThan(i,o)?1:0}};On(bo,"Temporal.Instant");var wo=class{constructor(t,r,n,a="iso8601"){
let i=se(t),o=se(r),s=se(n),l=tr(a===void 0?"iso8601":mt(a));va(i,o,s),jm(this,{year:i,month:o,day:s},l)}get calendarId(){
return I(this,Xe),g(this,D)}get era(){return Ft(this,"era")}get eraYear(){return Ft(this,"eraYear")}get year(){return Ft(
this,"year")}get month(){return Ft(this,"month")}get monthCode(){return Ft(this,"monthCode")}get day(){return Ft(this,"d\
ay")}get dayOfWeek(){return Ft(this,"dayOfWeek")}get dayOfYear(){return Ft(this,"dayOfYear")}get weekOfYear(){return Ft(
this,"weekOfYear")?.week}get yearOfWeek(){return Ft(this,"weekOfYear")?.year}get daysInWeek(){return Ft(this,"daysInWeek")}get daysInMonth(){
return Ft(this,"daysInMonth")}get daysInYear(){return Ft(this,"daysInYear")}get monthsInYear(){return Ft(this,"monthsInY\
ear")}get inLeapYear(){return Ft(this,"inLeapYear")}with(t,r=void 0){if(I(this,Xe),!et(t))throw new TypeError("invalid a\
rgument");ai(t);let n=g(this,D),a=Qt(n,g(this,ne));return a=ya(n,a,Er(n,t,["year","month","monthCode","day"],[],"partial")),
Zt(Gn(n,a,Ae(K(r))),n)}withCalendar(t){I(this,Xe);let r=Mo(t);return Zt(g(this,ne),r)}add(t,r=void 0){return I(this,Xe),
im("add",this,t,r)}subtract(t,r=void 0){return I(this,Xe),im("subtract",this,t,r)}until(t,r=void 0){return I(this,Xe),Xh(
"until",this,t,r)}since(t,r=void 0){return I(this,Xe),Xh("since",this,t,r)}equals(t){I(this,Xe);let r=Ji(t);return on(g(
this,ne),g(r,ne))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){return I(this,Xe),Wh(this,Io(K(t)))}toJSON(){return I(this,
Xe),Wh(this)}toLocaleString(t=void 0,r=void 0){return I(this,Xe),new Tr(t,r).format(this)}valueOf(){Xn("PlainDate")}toPlainDateTime(t=void 0){
I(this,Xe);let r=Mm(t);return Pr(Re(g(this,ne),r),g(this,D))}toZonedDateTime(t){let r,n;if(I(this,Xe),et(t)){let o=t.timeZone;
o===void 0?r=Xt(t):(r=Xt(o),n=t.plainTime)}else r=Xt(t);let a=g(this,ne),i;return n===void 0?i=Hn(r,a):(n=qn(n),i=Pt(r,Re(
a,g(n,Qe)),"compatible")),Ct(i,r,g(this,D))}toPlainYearMonth(){I(this,Xe);let t=g(this,D);return Ga(po(t,Qt(t,g(this,ne)),
"constrain"),t)}toPlainMonthDay(){I(this,Xe);let t=g(this,D);return Ka(Zs(t,Qt(t,g(this,ne)),"constrain"),t)}static from(t,r=void 0){
return Ji(t,r)}static compare(t,r){let n=Ji(t),a=Ji(r);return on(g(n,ne),g(a,ne))}};function Ft(e,t){I(e,Xe);let r=g(e,ne);
return No(e).isoToDate(r,{[t]:!0})[t]}On(wo,"Temporal.PlainDate");var To=class{constructor(t,r,n,a=0,i=0,o=0,s=0,l=0,c=0,u="\
iso8601"){let d=se(t),f=se(r),h=se(n),y=a===void 0?0:se(a),b=i===void 0?0:se(i),T=o===void 0?0:se(o),S=s===void 0?0:se(s),
E=l===void 0?0:se(l),_=c===void 0?0:se(c),O=tr(u===void 0?"iso8601":mt(u));Ju(d,f,h,y,b,T,S,E,_),Lm(this,{isoDate:{year:d,
month:f,day:h},time:{hour:y,minute:b,second:T,millisecond:S,microsecond:E,nanosecond:_}},O)}get calendarId(){return I(this,
qe),g(this,D)}get year(){return Ut(this,"year")}get month(){return Ut(this,"month")}get monthCode(){return Ut(this,"mont\
hCode")}get day(){return Ut(this,"day")}get hour(){return Wa(this,"hour")}get minute(){return Wa(this,"minute")}get second(){
return Wa(this,"second")}get millisecond(){return Wa(this,"millisecond")}get microsecond(){return Wa(this,"microsecond")}get nanosecond(){
return Wa(this,"nanosecond")}get era(){return Ut(this,"era")}get eraYear(){return Ut(this,"eraYear")}get dayOfWeek(){return Ut(
this,"dayOfWeek")}get dayOfYear(){return Ut(this,"dayOfYear")}get weekOfYear(){return Ut(this,"weekOfYear")?.week}get yearOfWeek(){
return Ut(this,"weekOfYear")?.year}get daysInWeek(){return Ut(this,"daysInWeek")}get daysInYear(){return Ut(this,"daysIn\
Year")}get daysInMonth(){return Ut(this,"daysInMonth")}get monthsInYear(){return Ut(this,"monthsInYear")}get inLeapYear(){
return Ut(this,"inLeapYear")}with(t,r=void 0){if(I(this,qe),!et(t))throw new TypeError("invalid argument");ai(t);let n=g(
this,D),a=g(this,Ye),i={...Qt(n,a.isoDate),...a.time};return i=ya(n,i,Er(n,t,["year","month","monthCode","day"],["hour",
"minute","second","millisecond","microsecond","nanosecond"],"partial")),Pr(Po(n,i,Ae(K(r))),n)}withPlainTime(t=void 0){I(
this,qe);let r=Mm(t);return Pr(Re(g(this,Ye).isoDate,r),g(this,D))}withCalendar(t){I(this,qe);let r=Mo(t);return Pr(g(this,
Ye),r)}add(t,r=void 0){return I(this,qe),om("add",this,t,r)}subtract(t,r=void 0){return I(this,qe),om("subtract",this,t,
r)}until(t,r=void 0){return I(this,qe),Qh("until",this,t,r)}since(t,r=void 0){return I(this,qe),Qh("since",this,t,r)}round(t){
if(I(this,qe),t===void 0)throw new TypeError("options parameter is required");let r=typeof t=="string"?Ta("smallestUnit",
t):K(t),n=ii(r),a=zr(r,"halfExpand"),i=dr(r,"smallestUnit","time",$n,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,
microsecond:1e3,nanosecond:1e3}[i];oi(n,o,o===1);let s=g(this,Ye);return Pr(n===1&&i==="nanosecond"?s:wu(s,n,i,a),g(this,
D))}equals(t){I(this,qe);let r=Zi(t);return ri(g(this,Ye),g(r,Ye))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){I(this,qe);
let r=K(t),n=Io(r),a=Oo(r),i=zr(r,"trunc"),o=dr(r,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smal\
lestUnit must be a time unit other than "hour"');let{precision:s,unit:l,increment:c}=Co(o,a),u=wu(g(this,Ye),c,l,i);return ba(
u),ho(u,g(this,D),s,n)}toJSON(){return I(this,qe),ho(g(this,Ye),g(this,D),"auto")}toLocaleString(t=void 0,r=void 0){return I(
this,qe),new Tr(t,r).format(this)}valueOf(){Xn("PlainDateTime")}toZonedDateTime(t,r=void 0){I(this,qe);let n=Xt(t),a=oo(
K(r));return Ct(Pt(n,g(this,Ye),a),n,g(this,D))}toPlainDate(){return I(this,qe),Zt(g(this,Ye).isoDate,g(this,D))}toPlainTime(){
return I(this,qe),kn(g(this,Ye).time)}static from(t,r=void 0){return Zi(t,r)}static compare(t,r){let n=Zi(t),a=Zi(r);return ri(
g(n,Ye),g(a,Ye))}};function Ut(e,t){I(e,qe);let r=g(e,Ye).isoDate;return No(e).isoToDate(r,{[t]:!0})[t]}function Wa(e,t){
return I(e,qe),g(e,Ye).time[t]}On(To,"Temporal.PlainDateTime");var ko=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0,s=0,l=0,c=0,u=0){
let d=t===void 0?0:qr(t),f=r===void 0?0:qr(r),h=n===void 0?0:qr(n),y=a===void 0?0:qr(a),b=i===void 0?0:qr(i),T=o===void 0?
0:qr(o),S=s===void 0?0:qr(s),E=l===void 0?0:qr(l),_=c===void 0?0:qr(c),O=u===void 0?0:qr(u);vl(d,f,h,y,b,T,S,E,_,O),In(this),
he(this,Ht,d),he(this,Wt,f),he(this,lr,h),he(this,qt,y),he(this,Vt,b),he(this,Yt,T),he(this,zt,S),he(this,Kt,E),he(this,
Gt,_),he(this,cr,O)}get years(){return I(this,Ze),g(this,Ht)}get months(){return I(this,Ze),g(this,Wt)}get weeks(){return I(
this,Ze),g(this,lr)}get days(){return I(this,Ze),g(this,qt)}get hours(){return I(this,Ze),g(this,Vt)}get minutes(){return I(
this,Ze),g(this,Yt)}get seconds(){return I(this,Ze),g(this,zt)}get milliseconds(){return I(this,Ze),g(this,Kt)}get microseconds(){
return I(this,Ze),g(this,Gt)}get nanoseconds(){return I(this,Ze),g(this,cr)}get sign(){return I(this,Ze),el(this)}get blank(){
return I(this,Ze),el(this)===0}with(t){I(this,Ze);let r=Dm(t),{years:n=g(this,Ht),months:a=g(this,Wt),weeks:i=g(this,lr),
days:o=g(this,qt),hours:s=g(this,Vt),minutes:l=g(this,Yt),seconds:c=g(this,zt),milliseconds:u=g(this,Kt),microseconds:d=g(
this,Gt),nanoseconds:f=g(this,cr)}=r;return new e(n,a,i,o,s,l,c,u,d,f)}negated(){return I(this,Ze),fr(this)}abs(){return I(
this,Ze),new e(Math.abs(g(this,Ht)),Math.abs(g(this,Wt)),Math.abs(g(this,lr)),Math.abs(g(this,qt)),Math.abs(g(this,Vt)),
Math.abs(g(this,Yt)),Math.abs(g(this,zt)),Math.abs(g(this,Kt)),Math.abs(g(this,Gt)),Math.abs(g(this,cr)))}add(t){return I(
this,Ze),nm("add",this,t)}subtract(t){return I(this,Ze),nm("subtract",this,t)}round(t){if(I(this,Ze),t===void 0)throw new TypeError(
"options parameter is required");let r=wn(this),n=typeof t=="string"?Ta("smallestUnit",t):K(t),a=dr(n,"largestUnit","dat\
etime",void 0,["auto"]),{plainRelativeTo:i,zonedRelativeTo:o}=tu(n),s=ii(n),l=zr(n,"halfExpand"),c=dr(n,"smallestUnit","\
datetime",void 0),u=!0;c||(u=!1,c="nanosecond");let d=En(r,c),f=!0;if(a||(f=!1,a=d),a==="auto"&&(a=d),!u&&!f)throw new RangeError(
"at least one of smallestUnit or largestUnit is required");if(En(a,c)!==a)throw new RangeError(`largestUnit ${a} cannot \
be smaller than smallestUnit ${c}`);let h={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[c];
if(h!==void 0&&oi(s,h,!1),s>1&&Tn(c)==="date"&&a!==c)throw new RangeError("For calendar units with roundingIncrement > 1\
, use largestUnit = smallestUnit");if(o){let b=Ya(this),T=g(o,Oe),S=g(o,D),E=g(o,re);return b=ng(E,to(E,T,S,b),T,S,a,s,c,
l),Tn(a)==="date"&&(a="hour"),Dr(b,a)}if(i){let b=tn(this),T=ti({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},b.time),S=g(i,ne),E=g(i,D),_=kr(E,S,Nt(b.date,T.deltaDays),"constrain");return b=rg(Re(S,{deltaDays:0,hour:0,
minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(_,T),E,a,s,c,l),Dr(b,a)}if(Qr(r))throw new RangeError(`a\
 starting point is required for ${r}s balancing`);if(Qr(a))throw new RangeError(`a starting point is required for ${a}s \
balancing`);let y=tn(this);if(c==="day"){let{quotient:b,remainder:T}=y.time.divmod(Ks),S=y.date.days+b+so(T,"day");S=Vn(
S,s,l),y=xn({years:0,months:0,weeks:0,days:S},Ue.ZERO)}else y=xn({years:0,months:0,weeks:0,days:0},tl(y.time,s,c,l));return Dr(
y,a)}total(t){if(I(this,Ze),t===void 0)throw new TypeError("options argument is required");let r=typeof t=="string"?Ta("\
unit",t):K(t),{plainRelativeTo:n,zonedRelativeTo:a}=tu(r),i=dr(r,"unit","datetime",$n);if(a){let s=Ya(this),l=g(a,Oe),c=g(
a,D),u=g(a,re);return function(d,f,h,y,b){return Tn(b)==="time"?so(Ue.fromEpochNsDiff(f,d),b):Jh(eg(d,f,h,y,b),f,jr(h,d),
h,y,b)}(u,to(u,l,c,s),l,c,i)}if(n){let s=tn(this),l=ti({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},s.time),c=g(n,ne),u=g(n,D),d=kr(u,c,Nt(s.date,l.deltaDays),"constrain");return function(f,h,y,b){if(ri(f,h)==
0)return 0;ba(f),ba(h);let T=Qm(f,h,y,b);return b==="nanosecond"?$.default.toNumber(T.time.totalNs):Jh(T,_t(h),f,null,y,
b)}(Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(d,l),u,i)}let o=wn(this);if(Qr(
o))throw new RangeError(`a starting point is required for ${o}s total`);if(Qr(i))throw new RangeError(`a starting point \
is required for ${i}s total`);return so(tn(this).time,i)}toString(t=void 0){I(this,Ze);let r=K(t),n=Oo(r),a=zr(r,"trunc"),
i=dr(r,"smallestUnit","time",void 0);if(i==="hour"||i==="minute")throw new RangeError('smallestUnit must be a time unit \
other than "hours" or "minutes"');let{precision:o,unit:s,increment:l}=Co(i,n);if(s==="nanosecond"&&l===1)return qs(this,
o);let c=wn(this),u=Ya(this),d=tl(u.time,l,s,a);return u=xn(u.date,d),qs(Dr(u,En(c,"second")),o)}toJSON(){return I(this,
Ze),qs(this,"auto")}toLocaleString(t=void 0,r=void 0){if(I(this,Ze),typeof Intl.DurationFormat=="function"){let n=new Intl.
DurationFormat(t,r);return rd.call(n,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires In\
tl.DurationFormat."),qs(this,"auto")}valueOf(){Xn("Duration")}static from(t){return Mr(t)}static compare(t,r,n=void 0){let a=Mr(
t),i=Mr(r),o=K(n),{plainRelativeTo:s,zonedRelativeTo:l}=tu(o);if(g(a,Ht)===g(i,Ht)&&g(a,Wt)===g(i,Wt)&&g(a,lr)===g(i,lr)&&
g(a,qt)===g(i,qt)&&g(a,Vt)===g(i,Vt)&&g(a,Yt)===g(i,Yt)&&g(a,zt)===g(i,zt)&&g(a,Kt)===g(i,Kt)&&g(a,Gt)===g(i,Gt)&&g(a,cr)===
g(i,cr))return 0;let c=wn(a),u=wn(i),d=Ya(a),f=Ya(i);if(l&&(Tn(c)==="date"||Tn(u)==="date")){let S=g(l,Oe),E=g(l,D),_=g(
l,re),O=to(_,S,E,d),M=to(_,S,E,f);return ur($.default.toNumber($.default.subtract(O,M)))}let h=d.date.days,y=f.date.days;
if(Qr(c)||Qr(u)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");h=Gh(
d.date,s),y=Gh(f.date,s)}let b=d.time.add24HourDays(h),T=f.time.add24HourDays(y);return b.cmp(T)}};On(ko,"Temporal.Durat\
ion");var So=class{constructor(t,r,n="iso8601",a=1972){let i=se(t),o=se(r),s=tr(n===void 0?"iso8601":mt(n)),l=se(a);va(l,
i,o),Fm(this,{year:l,month:i,day:o},s)}get monthCode(){return dm(this,"monthCode")}get day(){return dm(this,"day")}get calendarId(){
return I(this,br),g(this,D)}with(t,r=void 0){if(I(this,br),!et(t))throw new TypeError("invalid argument");ai(t);let n=g(
this,D),a=Qt(n,g(this,ne),"month-day");return a=ya(n,a,Er(n,t,["year","month","monthCode","day"],[],"partial")),Ka(Zs(n,
a,Ae(K(r))),n)}equals(t){I(this,br);let r=Uh(t);return on(g(this,ne),g(r,ne))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){
return I(this,br),Vh(this,Io(K(t)))}toJSON(){return I(this,br),Vh(this)}toLocaleString(t=void 0,r=void 0){return I(this,
br),new Tr(t,r).format(this)}valueOf(){Xn("PlainMonthDay")}toPlainDate(t){if(I(this,br),!et(t))throw new TypeError("argu\
ment should be an object");let r=g(this,D);return Zt(Gn(r,ya(r,Qt(r,g(this,ne),"month-day"),Er(r,t,["year"],[],[])),"con\
strain"),r)}static from(t,r=void 0){return Uh(t,r)}};function dm(e,t){I(e,br);let r=g(e,ne);return No(e).isoToDate(r,{[t]:!0})[t]}
function nu(e){return jr(e,Su())}On(So,"Temporal.PlainMonthDay");var dg={instant:()=>Vr(Su()),plainDateTimeISO:(e=Yi())=>Pr(
nu(Xt(e)),"iso8601"),plainDateISO:(e=Yi())=>Zt(nu(Xt(e)).isoDate,"iso8601"),plainTimeISO:(e=Yi())=>kn(nu(Xt(e)).time),timeZoneId:()=>Yi(),
zonedDateTimeISO:(e=Yi())=>{let t=Xt(e);return Ct(Su(),t,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(
dg,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});var Eo=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0){
let s=t===void 0?0:se(t),l=r===void 0?0:se(r),c=n===void 0?0:se(n),u=a===void 0?0:se(a),d=i===void 0?0:se(i),f=o===void 0?
0:se(o);yl(s,l,c,u,d,f),Um(this,{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f})}get hour(){return I(
this,at),g(this,Qe).hour}get minute(){return I(this,at),g(this,Qe).minute}get second(){return I(this,at),g(this,Qe).second}get millisecond(){
return I(this,at),g(this,Qe).millisecond}get microsecond(){return I(this,at),g(this,Qe).microsecond}get nanosecond(){return I(
this,at),g(this,Qe).nanosecond}with(t,r=void 0){if(I(this,at),!et(t))throw new TypeError("invalid argument");ai(t);let n=fu(
t,"partial"),a=fu(this),{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Object.assign(a,n),d=Ae(K(r));
return{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=hl(i,o,s,l,c,u,d),new e(i,o,s,l,c,u)}add(t){return I(
this,at),sm("add",this,t)}subtract(t){return I(this,at),sm("subtract",this,t)}until(t,r=void 0){return I(this,at),em("un\
til",this,t,r)}since(t,r=void 0){return I(this,at),em("since",this,t,r)}round(t){if(I(this,at),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?Ta("smallestUnit",t):K(t),n=ii(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",$n);return oi(n,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i],!1),
kn(Tu(g(this,Qe),n,i,a))}equals(t){I(this,at);let r=qn(t);return ku(g(this,Qe),g(r,Qe))===0}toString(t=void 0){I(this,at);
let r=K(t),n=Oo(r),a=zr(r,"trunc"),i=dr(r,"smallestUnit","time",void 0);if(i==="hour")throw new RangeError('smallestUnit\
 must be a time unit other than "hour"');let{precision:o,unit:s,increment:l}=Co(i,n);return qh(Tu(g(this,Qe),l,s,a),o)}toJSON(){
return I(this,at),qh(g(this,Qe),"auto")}toLocaleString(t=void 0,r=void 0){return I(this,at),new Tr(t,r).format(this)}valueOf(){
Xn("PlainTime")}static from(t,r=void 0){return qn(t,r)}static compare(t,r){let n=qn(t),a=qn(r);return ku(g(n,Qe),g(a,Qe))}};
On(Eo,"Temporal.PlainTime");var xo=class{constructor(t,r,n="iso8601",a=1){let i=se(t),o=se(r),s=tr(n===void 0?"iso8601":
mt(n)),l=se(a);va(i,o,l),Bm(this,{year:i,month:o,day:l},s)}get year(){return vn(this,"year")}get month(){return vn(this,
"month")}get monthCode(){return vn(this,"monthCode")}get calendarId(){return I(this,xt),g(this,D)}get era(){return vn(this,
"era")}get eraYear(){return vn(this,"eraYear")}get daysInMonth(){return vn(this,"daysInMonth")}get daysInYear(){return vn(
this,"daysInYear")}get monthsInYear(){return vn(this,"monthsInYear")}get inLeapYear(){return vn(this,"inLeapYear")}with(t,r=void 0){
if(I(this,xt),!et(t))throw new TypeError("invalid argument");ai(t);let n=g(this,D),a=Qt(n,g(this,ne),"year-month");return a=
ya(n,a,Er(n,t,["year","month","monthCode"],[],"partial")),Ga(po(n,a,Ae(K(r))),n)}add(t,r=void 0){return I(this,xt),lm("a\
dd",this,t,r)}subtract(t,r=void 0){return I(this,xt),lm("subtract",this,t,r)}until(t,r=void 0){return I(this,xt),tm("unt\
il",this,t,r)}since(t,r=void 0){return I(this,xt),tm("since",this,t,r)}equals(t){I(this,xt);let r=Qi(t);return on(g(this,
ne),g(r,ne))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){return I(this,xt),Yh(this,Io(K(t)))}toJSON(){return I(this,xt),
Yh(this)}toLocaleString(t=void 0,r=void 0){return I(this,xt),new Tr(t,r).format(this)}valueOf(){Xn("PlainYearMonth")}toPlainDate(t){
if(I(this,xt),!et(t))throw new TypeError("argument should be an object");let r=g(this,D);return Zt(Gn(r,ya(r,Qt(r,g(this,
ne),"year-month"),Er(r,t,["day"],[],[])),"constrain"),r)}static from(t,r=void 0){return Qi(t,r)}static compare(t,r){let n=Qi(
t),a=Qi(r);return on(g(n,ne),g(a,ne))}};function vn(e,t){I(e,xt);let r=g(e,ne);return No(e).isoToDate(r,{[t]:!0})[t]}On(
xo,"Temporal.PlainYearMonth");var LS=Tr.prototype.resolvedOptions,_o=class{constructor(t,r,n="iso8601"){if(arguments.length<
1)throw new TypeError("missing argument: epochNanoseconds is required");let a=rl(t),i=mt(r),{tzName:o,offsetMinutes:s}=Yn(
i);if(s===void 0){let l=Xs(o);if(!l)throw new RangeError(`unknown time zone ${o}`);i=l.identifier}else i=zu(s);Wm(this,a,
i,tr(n===void 0?"iso8601":mt(n)))}get calendarId(){return I(this,ve),g(this,D)}get timeZoneId(){return I(this,ve),g(this,
Oe)}get year(){return Bt(this,"year")}get month(){return Bt(this,"month")}get monthCode(){return Bt(this,"monthCode")}get day(){
return Bt(this,"day")}get hour(){return qa(this,"hour")}get minute(){return qa(this,"minute")}get second(){return qa(this,
"second")}get millisecond(){return qa(this,"millisecond")}get microsecond(){return qa(this,"microsecond")}get nanosecond(){
return qa(this,"nanosecond")}get era(){return Bt(this,"era")}get eraYear(){return Bt(this,"eraYear")}get epochMilliseconds(){
return I(this,ve),Lr(g(this,re),"floor")}get epochNanoseconds(){return I(this,ve),ag(g(this,re))}get dayOfWeek(){return Bt(
this,"dayOfWeek")}get dayOfYear(){return Bt(this,"dayOfYear")}get weekOfYear(){return Bt(this,"weekOfYear")?.week}get yearOfWeek(){
return Bt(this,"weekOfYear")?.year}get hoursInDay(){I(this,ve);let t=g(this,Oe),r=Xr(this).isoDate,n=pr(r.year,r.month,r.
day+1),a=Hn(t,r),i=Hn(t,n);return so(Ue.fromEpochNsDiff(i,a),"hour")}get daysInWeek(){return Bt(this,"daysInWeek")}get daysInMonth(){
return Bt(this,"daysInMonth")}get daysInYear(){return Bt(this,"daysInYear")}get monthsInYear(){return Bt(this,"monthsInY\
ear")}get inLeapYear(){return Bt(this,"inLeapYear")}get offset(){return I(this,ve),hu(Sn(g(this,Oe),g(this,re)))}get offsetNanoseconds(){
return I(this,ve),Sn(g(this,Oe),g(this,re))}with(t,r=void 0){if(I(this,ve),!et(t))throw new TypeError("invalid zoned-dat\
e-time-like");ai(t);let n=g(this,D),a=g(this,Oe),i=Sn(a,g(this,re)),o=Xr(this),s={...Qt(n,o.isoDate),...o.time,offset:hu(
i)};s=ya(n,s,Er(n,t,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond",
"offset"],"partial"));let l=K(r),c=oo(l),u=Vs(l,"prefer"),d=Po(n,s,Ae(l)),f=si(s.offset);return Ct(Js(d.isoDate,d.time,"\
option",f,a,c,u,!1),a,n)}withPlainTime(t=void 0){I(this,ve);let r=g(this,Oe),n=g(this,D),a=Xr(this).isoDate,i;return i=t===
void 0?Hn(r,a):Pt(r,Re(a,g(qn(t),Qe)),"compatible"),Ct(i,r,n)}withTimeZone(t){I(this,ve);let r=Xt(t);return Ct(g(this,re),
r,g(this,D))}withCalendar(t){I(this,ve);let r=Mo(t);return Ct(g(this,re),g(this,Oe),r)}add(t,r=void 0){return I(this,ve),
cm("add",this,t,r)}subtract(t,r=void 0){return I(this,ve),cm("subtract",this,t,r)}until(t,r=void 0){return I(this,ve),rm(
"until",this,t,r)}since(t,r=void 0){return I(this,ve),rm("since",this,t,r)}round(t){if(I(this,ve),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?Ta("smallestUnit",t):K(t),n=ii(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",$n,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i];
if(oi(n,o,o===1),i==="nanosecond"&&n===1)return Ct(g(this,re),g(this,Oe),g(this,D));let s=g(this,Oe),l=g(this,re),c=Xr(this),
u;if(i==="day"){let d=c.isoDate,f=pr(d.year,d.month,d.day+1),h=Hn(s,d),y=Hn(s,f),b=$.default.subtract(y,h);u=Ue.fromEpochNsDiff(
l,h).round(b,a).addToEpochNs(h)}else{let d=wu(c,n,i,a),f=Sn(s,l);u=Js(d.isoDate,d.time,"option",f,s,"compatible","prefer",
!1)}return Ct(u,s,g(this,D))}equals(t){I(this,ve);let r=eo(t),n=g(this,re),a=g(r,re);return!!$.default.equal($.default.BigInt(
n),$.default.BigInt(a))&&!!qm(g(this,Oe),g(r,Oe))&&nn(g(this,D),g(r,D))}toString(t=void 0){I(this,ve);let r=K(t),n=Io(r),
a=Oo(r),i=function(f){return _n(f,"offset",["auto","never"],"auto")}(r),o=zr(r,"trunc"),s=dr(r,"smallestUnit","time",void 0);
if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let l=function(f){return _n(f,"\
timeZoneName",["auto","never","critical"],"auto")}(r),{precision:c,unit:u,increment:d}=Co(s,a);return zh(this,c,n,l,i,{unit:u,
increment:d,roundingMode:o})}toLocaleString(t=void 0,r=void 0){I(this,ve);let n=K(r),a=Object.create(null);if(function(l,c,u,d){
if(c==null)return;let f=Reflect.ownKeys(c);for(let h=0;h<f.length;h++){let y=f[h];if(!u.some(b=>Object.is(b,y))&&Object.
prototype.propertyIsEnumerable.call(c,y)){let b=c[y];l[y]=b}}}(a,n,["timeZone"]),n.timeZone!==void 0)throw new TypeError(
"ZonedDateTime toLocaleString does not accept a timeZone option");if(a.year===void 0&&a.month===void 0&&a.day===void 0&&
a.era===void 0&&a.weekday===void 0&&a.dateStyle===void 0&&a.hour===void 0&&a.minute===void 0&&a.second===void 0&&a.fractionalSecondDigits===
void 0&&a.timeStyle===void 0&&a.dayPeriod===void 0&&a.timeZoneName===void 0&&(a.timeZoneName="short"),a.timeZone=g(this,
Oe),Kh(a.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");let i=new Tr(t,a),
o=LS.call(i).calendar,s=g(this,D);if(s!=="iso8601"&&o!=="iso8601"&&!nn(o,s))throw new RangeError(`cannot format ZonedDat\
eTime with calendar ${s} in locale with calendar ${o}`);return i.format(Vr(g(this,re)))}toJSON(){return I(this,ve),zh(this,
"auto")}valueOf(){Xn("ZonedDateTime")}startOfDay(){I(this,ve);let t=g(this,Oe);return Ct(Hn(t,Xr(this).isoDate),t,g(this,
D))}getTimeZoneTransition(t){I(this,ve);let r=g(this,Oe);if(t===void 0)throw new TypeError("options parameter is require\
d");let n=_n(typeof t=="string"?Ta("direction",t):K(t),"direction",["next","previous"],$n);if(n===void 0)throw new TypeError(
"direction option is required");if(Kh(r)||r==="UTC")return null;let a=g(this,re),i=n==="next"?Gu(r,a):gu(r,a);return i===
null?null:Ct(i,r,g(this,D))}toInstant(){return I(this,ve),Vr(g(this,re))}toPlainDate(){return I(this,ve),Zt(Xr(this).isoDate,
g(this,D))}toPlainTime(){return I(this,ve),kn(Xr(this).time)}toPlainDateTime(){return I(this,ve),Pr(Xr(this),g(this,D))}static from(t,r=void 0){
return eo(t,r)}static compare(t,r){let n=eo(t),a=eo(r),i=g(n,re),o=g(a,re);return $.default.lessThan($.default.BigInt(i),
$.default.BigInt(o))?-1:$.default.greaterThan($.default.BigInt(i),$.default.BigInt(o))?1:0}};function Xr(e){return jr(g(
e,Oe),g(e,re))}function Bt(e,t){I(e,ve);let r=Xr(e).isoDate;return No(e).isoToDate(r,{[t]:!0})[t]}function qa(e,t){return I(
e,ve),Xr(e).time[t]}On(_o,"Temporal.ZonedDateTime");var Ve=Object.freeze({__proto__:null,Duration:ko,Instant:bo,Now:dg,PlainDate:wo,
PlainDateTime:To,PlainMonthDay:So,PlainTime:Eo,PlainYearMonth:xo,ZonedDateTime:_o}),_M=class{toTemporalInstant(){return Vr(
Yr(Date.prototype.valueOf.call(this)))}}.prototype.toTemporalInstant,FS=[bo,wo,To,ko,So,Eo,xo,_o];for(let e of FS){let t=Object.
getOwnPropertyDescriptor(e,"prototype");(t.configurable||t.enumerable||t.writable)&&(t.configurable=!1,t.enumerable=!1,t.
writable=!1,Object.defineProperty(e,"prototype",t))}var Fr=oe(Le(),1);var De=oe(Le(),1),p=oe(Le(),1),Mt=oe(Le(),1),pt=oe(Le(),1);var pv=oe(hg(),1),fv=oe(yg(),1),hv=oe(bg(),1),mv=oe(Tg(),1),gv=oe(Sg(),1);var nd=class{add(t,r,n){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else
(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],r&&this[a][n?"unshift":"push"](r)},this)}run(t,r){this[t]=
this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}},ad=class{constructor(t){this.jsep=t,this.
registered={}}register(...t){t.forEach(r=>{if(typeof r!="object"||!r.name||!r.init)throw new Error("Invalid JSEP plugin \
format");this.registered[r.name]||(r.init(this.jsep),this.registered[r.name]=r)})}},hr=class e{static get version(){return"\
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
GS=new nd;Object.assign(hr,{hooks:GS,plugins:new ad(hr),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"\
Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"\
UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,
PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,
SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,
"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(
["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});hr.max_unop_len=
hr.getMaxKeyLen(hr.unary_ops);hr.max_binop_len=hr.getMaxKeyLen(hr.binary_ops);var de=e=>new hr(e).parse(),JS=Object.getOwnPropertyNames(
class{});Object.getOwnPropertyNames(hr).filter(e=>!JS.includes(e)&&de[e]===void 0).forEach(e=>{de[e]=hr[e]});de.Jsep=hr;
var ZS="ConditionalExpression",XS={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===
e.QUMARK_CODE){this.index++;let n=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),
this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError("Expected expression"),r.node=
{type:ZS,test:n,consequent:a,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let o=n;for(;o.right.operator&&e.binary_ops[o.
right.operator]<=.9;)o=o.right;r.node.test=o.right,o.right=r.node,r.node=n}}else this.throwError("Expected :")}})}};de.plugins.
register(XS);var xv=oe(Le(),1),ge=oe(Le(),1),vt=oe(Le(),1),Be=oe(Le(),1),Ia=oe(Le(),1),Cv=oe(Le(),1);var QS=(e,t,r)=>{if(t.length===1&&t[0]===r){let n=!1;try{let a={};e(a)===a&&(n=!0)}catch{}if(n){let a;try{throw new Error}catch(i){
({stack:a}=i)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:a})}}},eE=(e,t,r)=>{
let{memoize:n,memoizeOptions:a}=t,{inputSelectorResults:i,inputSelectorResultsCopy:o}=e,s=n(()=>({}),...a);if(!(s.apply(
null,i)===s.apply(null,o))){let c;try{throw new Error}catch(u){({stack:c}=u)}console.warn(`An input selector returned a \
different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:r,firstInputs:i,secondInputs:o,
stack:c})}},tE={inputStabilityCheck:"once",identityFunctionCheck:"once"};function rE(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function nE(e,t=`\
expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function aE(e,t="expecte\
d all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){let r=e.map(
n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var Eg=e=>Array.
isArray(e)?e:[e];function iE(e){let t=Array.isArray(e[0])?e[0]:e;return aE(t,"createSelector expects all input-selectors\
 to be functions, but received the following types: "),t}function xg(e,t){let r=[],{length:n}=e;for(let a=0;a<n;a++)r.push(
e[a].apply(null,t));return r}var oE=(e,t)=>{let{identityFunctionCheck:r,inputStabilityCheck:n}={...tE,...t};return{identityFunctionCheck:{
shouldRun:r==="always"||r==="once"&&e,run:QS},inputStabilityCheck:{shouldRun:n==="always"||n==="once"&&e,run:eE}}};var MM=Symbol();var jM=Object.getPrototypeOf({});var sE=class{constructor(e){this.value=e}deref(){return this.value}},lE=typeof WeakRef<"u"?WeakRef:sE,cE=0,_g=1;function kl(){
return{s:cE,v:void 0,o:null,p:null}}function Ag(e,t={}){let r=kl(),{resultEqualityCheck:n}=t,a,i=0;function o(){let s=r,
{length:l}=arguments;for(let d=0,f=l;d<f;d++){let h=arguments[d];if(typeof h=="function"||typeof h=="object"&&h!==null){
let y=s.o;y===null&&(s.o=y=new WeakMap);let b=y.get(h);b===void 0?(s=kl(),y.set(h,s)):s=b}else{let y=s.p;y===null&&(s.p=
y=new Map);let b=y.get(h);b===void 0?(s=kl(),y.set(h,s)):s=b}}let c=s,u;if(s.s===_g)u=s.v;else if(u=e.apply(null,arguments),
i++,n){let d=a?.deref?.()??a;d!=null&&n(d,u)&&(u=d,i!==0&&i--),a=typeof u=="object"&&u!==null||typeof u=="function"?new lE(
u):u}return c.s=_g,c.v=u,u}return o.clearCache=()=>{r=kl(),o.resetResultsCount()},o.resultsCount=()=>i,o.resetResultsCount=
()=>{i=0},o}function uE(e,...t){let r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...a)=>{let i=0,o=0,s,l={},
c=a.pop();typeof c=="object"&&(l=c,c=a.pop()),rE(c,`createSelector expects an output function after the inputs, but rece\
ived: [${typeof c}]`);let u={...r,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:h=Ag,argsMemoizeOptions:y=[],devModeChecks:b={}}=u,
T=Eg(f),S=Eg(y),E=iE(a),_=d(function(){return i++,c.apply(null,arguments)},...T),O=!0,M=h(function(){o++;let G=xg(E,arguments);
if(s=_.apply(null,G),process.env.NODE_ENV!=="production"){let{identityFunctionCheck:Z,inputStabilityCheck:H}=oE(O,b);if(Z.
shouldRun&&Z.run(c,G,s),H.shouldRun){let we=xg(E,arguments);H.run({inputSelectorResults:G,inputSelectorResultsCopy:we},{
memoize:d,memoizeOptions:T},arguments)}O&&(O=!1)}return s},...S);return Object.assign(M,{resultFunc:c,memoizedResultFunc:_,
dependencies:E,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>s,recomputations:()=>i,
resetRecomputations:()=>{i=0},memoize:d,argsMemoize:h})};return Object.assign(n,{withTypes:()=>n}),n}var k=uE(Ag),dE=Object.
assign((e,t=k)=>{nE(e,`createStructuredSelector expects first argument to be an object where each property is a selector\
, instead received a ${typeof e}`);let r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((o,s,l)=>(o[r[l]]=s,
o),{}))},{withTypes:()=>dE});var Jr=oe(Le(),1);var zv=oe(Qn(),1),Kv=oe(Qn(),1);var Jv=oe(Le(),1),Xv=oe(Le(),1),eb=oe(Qn(),1);var ft=oe(Le(),1);var Ss=oe(Le(),1);var Ib=oe(Le(),1);var ce=oe(Le(),1);var Ri=oe(Le(),1);var ja=oe(Qn(),1);var rw=oe(Qn(),1),EN=oe(Al(),1),Kp=oe(Al(),1),nw=oe(Qn(),1),xN=oe(Al(),1);var bc=oe(Le(),1),It=oe(Le(),1),Q=oe(Le(),1);var N=oe(Le(),1),Tw=oe(Le(),1);var ql=oe(hd(),1),Sw=oe(hd(),1),Ke=oe(Le(),1),U=oe(Le(),1),Ce=e=>({left:e}),Dl=Ce,R=e=>({right:e}),P=e=>"left"in e,xe=e=>"\
right"in e;var ze=e=>{if(xe(e))return e.right;throw typeof e.left=="string"?new Error(e.left):e.left},$d=(e,t)=>xe(e)?e.right:t;var NE=()=>Ve.Now.plainDateISO(),ar=e=>e instanceof Ve.PlainDate,PE=e=>Ve.PlainDate.from(e),Dy=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/,
Ko=e=>typeof e=="string"&&Dy.test(e),Ml=(e,t)=>typeof e=="string"?/^\d{4}-\d{2}-\d{2}$/.test(e)?Ve.PlainDate.from(e).toZonedDateTime(
{timeZone:t,plainTime:{hour:0}}):Dy.test(e)?Ve.PlainDateTime.from(e).toZonedDateTime(t):e.includes("[")?Ve.ZonedDateTime.
from(e).withTimeZone(t):Ve.Instant.from(e).toZonedDateTimeISO(t):e instanceof Ve.Instant?e.toZonedDateTimeISO(t):e instanceof
Ve.ZonedDateTime?e.withTimeZone(t):e.toZonedDateTime({timeZone:t,plainTime:{hour:0}});var DE=(e,t)=>Ve.PlainDate.compare(e,t);var My=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ME=["Sun","Mon","Tue","Wed","Thu","Fri",
"Sat"],Wd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],md=["January","February","March","Ap\
ril","May","June","July","August","September","October","November","December"],Rd=(e,t)=>{let r=e.toPlainDate(),n=t.toPlainDate();
return r.since(n,{largestUnit:"days"}).days},jy=e=>{let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||
t[0]}`},Vg=e=>My[e.dayOfWeek%7],yi=e=>`${jy(e.day)} ${Wd[e.month-1]}`,rs=e=>`${jy(e.day)} ${Wd[e.month-1]} ${e.year}`,jE=Fr.union(
[Fr.literal("weekdayShort"),Fr.literal("dayOfMonth"),Fr.literal("weekdayLong"),Fr.literal("fullDate"),Fr.literal("monthL\
ong"),Fr.literal("monthShort"),Fr.literal("monthNumber"),Fr.literal("year"),Fr.literal("monthYear")]),LE=(e,t,r={})=>{try{
return FE(e,t,r)}catch{return String(e)}},FE=(e,t,r={})=>{var n;let a=(n=r.timeZone)!=null?n:"Europe/London",i=Ml(e,a);switch(t){case"\
weekdayShort":return ME[i.dayOfWeek%7];case"dayOfMonth":return String(i.day);case"weekdayLong":return My[i.dayOfWeek%7];case"\
fullDate":return`${md[i.month-1]} ${i.day}, ${i.year}`;case"monthLong":return md[i.month-1];case"monthShort":return Wd[i.
month-1];case"monthNumber":return String(i.month);case"year":return String(i.year);case"monthYear":return`${md[i.month-1]}\
 ${i.year}`}},Cl=e=>e.slice(11,16),Yg=(e,t,r)=>{if(t===0)return"today";if(t>0)return t===1?"tomorrow":t<7?`on ${Vg(e)}`:
t<=14?`${Vg(e)} ${yi(e)}`:e.year===r.year?yi(e):rs(e);let n=-t;return n===1?"yesterday":n<7?`${n} days ago`:n<14?"1 week\
 ago":n<22?`${Math.floor(n/7)} weeks ago`:e.year===r.year?yi(e):rs(e)},Id=(e,t={})=>{try{return UE(e,t)}catch{return String(
e)}},UE=(e,t={})=>{var r,n;let a=(r=t.timeZone)!=null?r:"Europe/London",i=(n=t.now)!=null?n:Ve.Now.zonedDateTimeISO(a),o=Ml(
e,a),s=Rd(o,i);if(Ko(e))return`${Yg(o,s,i)}, ${Cl(e)}`;if(s>0)return Yg(o,s,i);let l=Math.abs(o.epochMilliseconds-i.epochMilliseconds),
c=Math.floor(l/1e3),u=Math.floor(c/60),d=Math.floor(u/60),f=Math.floor(d/24),h=Math.floor(f/7);return c<45?"just now":c<
90?"1 minute ago":u<45?`${u} minutes ago`:u<90?"1 hour ago":d<6?`${Math.round(u/60)} hours ago`:s===0?"today":f<2?"yeste\
rday":f<7?`${f} days ago`:f<14?"1 week ago":f<22?`${h} weeks ago`:o.year===i.year?`${yi(o)}`:`${rs(o)}`},BE=(e,t,r={})=>{
try{return HE(e,t,r)}catch{return t?`${String(e)} \u2013 ${String(t)}`:String(e)}},HE=(e,t,r={})=>{var n,a;let i=(n=r.timeZone)!=
null?n:"Europe/London",o=(a=r.now)!=null?a:Ve.Now.zonedDateTimeISO(i),s=Ml(e,i);if(!t)return Id(e,r);let l=Ml(t,i);if(Rd(
l,s)===0){let O=Id(e,r);return Ko(e)&&Ko(t)?`${O}\u2013${Cl(t)}`:O}let c=Math.abs(Rd(l,s))+1,u=c===1?"1 day":`${c} days`,
d=s.year,f=l.year,h=o.year,y=d!==h||d!==f,b=f!==h||d!==f,T=Ko(e)?`, ${Cl(e)}`:"",S=Ko(t)?`, ${Cl(t)}`:"",E=y?rs(s):yi(s),
_=b?rs(l):yi(l);return`${u}, from ${E}${T} to ${_}${S}`},WE=(e,t,r,n)=>{let a=qE(e),i=YE(t),o=GE(n);if(!a||!i||!o||typeof r!=
"string")return;let s;try{s=a.toZonedDateTimeISO(r).toPlainDate()}catch{return}for(let l=0;l<=7;l++){let c=s.add({days:l});
if(!o.has(c.dayOfWeek))continue;let u=c.toZonedDateTime({timeZone:r,plainTime:i}).toInstant().epochMilliseconds;if(u>a.epochMilliseconds)
return u}},qE=e=>{try{if(typeof e=="number")return Number.isFinite(e)?Ve.Instant.fromEpochMilliseconds(e):void 0;if(typeof e==
"string")return Ve.Instant.from(e)}catch{}},VE=/^([01]\d|2[0-3]):([0-5]\d)$/,YE=e=>{let t=typeof e=="string"?VE.exec(e):
null;return t?new Ve.PlainTime(Number(t[1]),Number(t[2])):void 0},zE={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7},KE=new Set(
[1,2,3,4,5,6,7]),GE=e=>{if(e==null)return KE;if(typeof e!="string")return;let t=e.split(",").map(n=>n.trim().toLowerCase()).
filter(n=>n.length>0);if(t.length===0)return;let r=new Set;for(let n of t){let a=zE[n];if(a===void 0)return;r.add(a)}return r};var JE=(e,t)=>Wi(e)?e(t):e,Qo=()=>!0,ZE=e=>e instanceof Error,XE=e=>ZE(e)?e.message:String(e),QE=e=>e===void 0?[]:Array.
isArray(e)?e:[e];var ea=(e,t)=>e===t?0:e===void 0?1:t===void 0?-1:ar(e)&&ar(t)?Ve.PlainDate.compare(e,t):typeof e=="number"&&typeof t=="n\
umber"?e-t:typeof e=="string"&&typeof t=="string"?e.localeCompare(t):String(e).localeCompare(String(t));var Ly={};var ue=e=>tt.union([e,tt.undefined]),Ie=ue(tt.boolean),F=ue(tt.string),gr=ue(tt.number),Cn=tt.record(tt.string,tt.unknown),
ex=tt.array(Cn),tx=tt.record(tt.string,tt.string),XM=tt.record(tt.string,tt.boolean);var rx=Me.intersection([Me.type({version:Me.number,verticalId:Me.string,answers:Cn,derived:Me.type({entities:Me.array(Me.string),
features:Me.array(Me.string)})}),Me.partial({notes:Me.string})]),nx=Me.keyof({clone:null,orgGen:null,orgGenHighRisk:null}),
ax=Me.type({id:Me.string,label:Me.string,weight:Me.number,triggered:Me.boolean}),ix=Me.type({score:Me.number,factors:Me.array(
ax),strategy:nx}),QM=Me.intersection([rx,Me.type({risk:ix})]);var ox=function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.
slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};function sx(e){return e}function Fy(e,t,r,n,a,i,o,s,l){
switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(
n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:
return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}
var qd=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,ox([a],n,!1))}}},lx=function(e){return e._tag==="L\
eft"},cx=function(e){return e._tag==="Right"};var ux=function(e){return{_tag:"Right",right:e}};function Uy(e){return function(t,r){return e.map(t,function(){return r})}}
function dx(e){var t=Uy(e);return function(r){return t(r,void 0)}}function px(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}var By=ux,fx=qd(2,function(e,t){return jl(e)?e:t(e.right)}),Hy=function(e,t){return Fy(e,mx(t))},hx=function(e,t){return Fy(
e,yx(t))},Vd="Either",mx=function(e){return function(t){return jl(t)?t:By(e(t.right))}},Wy={URI:Vd,map:Hy},ej=qd(2,Uy(Wy)),
tj=dx(Wy),gx=function(e){return function(t){return jl(t)?t:jl(e)?e:By(t.right(e.right))}},yx=gx,vx={URI:Vd,map:Hy,ap:hx,
chain:fx},bx={URI:Vd,fromEither:sx},jl=lx,wx=cx;var rj=qd(2,px(vx)),nj={fromEither:bx.fromEither},cn=e=>Mt.union([e,Mt.array(e)]),$e=e=>{let t=r=>typeof r=="string";return new Mt.Type(
`lax(${e.name})`,t,(r,n)=>t(r)?Mt.success(r):Mt.failure(r,n),Mt.identity)};function Od(e){return e.length===0?"":e[0].context.map(r=>r.key).filter(Boolean).join(".")}function Tx(e){if(e.length===
0)return"No errors";if(e.length===1){let a=e[0],i=Od(e);return`Invalid value${i?` at ${i}`:""}: ${a.message||a.value}`}let t={};
e.forEach(a=>{let i=Od([a]);t[i]||(t[i]=[]),t[i].push(a)});let r=Object.keys(t).length,n=e.length;return`${n} validation\
 error${n>1?"s":""} in ${r} location${r>1?"s":""}`}var kx=pt.type({type:pt.literal("static"),name:pt.string,value:pt.unknown}),Sx=pt.type({type:pt.literal("dynamic"),name:pt.string,
formula:pt.string}),Vl=pt.recursion("pluginParam",()=>pt.union([kx,Sx,pt.type({type:pt.literal("complex"),params:pt.array(
Vl)})])),Ll=e=>e?.dataType!==void 0,Ex=$e(p.union([p.literal("embedded"),p.literal("storage"),p.literal("realtime"),p.literal(
"callable")])),xx=$e(p.union([p.literal("list"),p.literal("value")])),qy=$e(p.union([p.literal("public"),p.literal("priv\
ate")])),_x=$e(p.union([p.literal("columns"),p.literal("grid"),p.literal("spatial"),p.literal("flow")])),Ax=$e(p.union([
p.literal("x"),p.literal("y")])),$x=$e(p.union([p.literal("jpeg"),p.literal("png"),p.literal("webp")])),Yl=$e(p.union([p.literal(
"small"),p.literal("medium")])),Vy=$e(p.union([p.literal("inline"),p.literal("masterDetail")])),Yy=$e(p.union([p.literal(
"basic"),p.literal("multiline"),p.literal("stringArray")])),Yd=$e(p.union([p.literal("none"),p.literal("uppercase"),p.literal(
"lowercase")])),Rx=$e(p.union([p.literal("image"),p.literal("file"),p.literal("video"),p.literal("audio")])),zy=$e(p.union(
[p.literal("integer"),p.literal("slider"),p.literal("decimal"),p.literal("money"),p.literal("intArray")])),zd=$e(p.union(
[p.literal("date"),p.literal("datetime"),p.literal("time")])),Ix=$e(p.union([p.literal("single"),p.literal("multiple")])),
Kd=$e(p.union([p.literal("select"),p.literal("radio"),p.literal("combobox")])),Ky=$e(p.union([p.literal("global"),p.literal(
"user"),p.literal("variant"),p.literal("group"),p.literal("all"),p.literal("inbox")])),Gy=$e(p.union([p.literal("light"),
p.literal("dark")])),Gd=$e(p.union([p.literal("setUserProfile"),p.literal("triggerWorldcupSync"),p.literal("socialFollow"),
p.literal("socialUnfollow"),p.literal("socialLike"),p.literal("socialUnlike"),p.literal("kickFromHome")])),Ox=$e(p.union(
[p.literal("contained"),p.literal("outlined"),p.literal("text"),p.literal("menu"),p.literal("pill")])),Cx=$e(p.union([p.literal(
"musicgen"),p.literal("minimax-music-2.5")])),Nx=$e(p.literal("gpt-4o-transcribe")),Px=$e(p.union([p.literal("flux-schne\
ll"),p.literal("nano-banana-2")])),zl=$e(p.union([p.literal("claude-haiku-5-5"),p.literal("claude-haiku-4-5"),p.literal(
"claude-sonnet-5")])),Dx=$e(p.union([p.literal("none"),p.literal("menu"),p.literal("tabs")])),Mx=$e(p.union([p.literal("\
onWrite"),p.literal("onTimer")])),jx=$e(p.union([p.literal("repeat"),p.literal("once"),p.literal("grid")])),Jy=$e(p.union(
[p.literal("tiles"),p.literal("bar"),p.literal("audioOnly"),p.literal("minimal")])),Jd=$e(p.union([p.literal("video"),p.literal(
"audio")])),Lx=$e(p.union([p.literal("anyone"),p.literal("admins")])),Fx=$e(p.literal("Person")),aj=$e(p.union([p.literal(
"variable"),p.literal("text"),p.literal("number"),p.literal("boolean"),p.literal("temporal"),p.literal("parentRef"),p.literal(
"image"),p.literal("imageUpload")])),ij=$e(p.union([p.literal("id"),p.literal("type"),p.literal("_scope"),p.literal("cre\
atedAt"),p.literal("updatedAt"),p.literal("createdBy"),p.literal("updatedBy"),p.literal("createdByUid"),p.literal("updat\
edByUid"),p.literal("isDeleted"),p.literal("_parent")])),Ux=$e(p.union([p.literal("tabGroup"),p.literal("tab"),p.literal(
"folder")])),Bx=$e(p.union([p.literal("aiQuery"),p.literal("aiChat"),p.literal("fetchData"),p.literal("imageGeneration"),
p.literal("audioGeneration"),p.literal("transcribe"),p.literal("publishData"),p.literal("script")])),Hx=p.partial({field:p.string,
direction:p.union([p.literal("asc"),p.literal("desc")])}),Wx=p.partial({startField:p.string,endField:p.string,axis:p.string,
mode:jx,slots:p.string}),Zy=p.partial({label:p.string,onPublishType:p.string,enabled:p.boolean,titleTemplate:p.string,bodyTemplate:p.string,
clickPath:p.string,onCreate:p.boolean,onUpdate:p.boolean,onDelete:p.boolean,condition:p.string}),Xy=p.partial({label:p.string,
enabled:p.boolean,trigger:Mx,watchType:p.string,onDelete:p.boolean,targetType:p.string,targetId:p.string,condition:p.string,
next:p.string,rejectionReason:p.string,notifyTurnUidField:p.string,notifyTitleTemplate:p.string,notifyBodyTemplate:p.string,
notifyClickPath:p.string,notifyTo:p.string,notifyTitle:p.string,notifyBody:p.string,notifyKey:p.string,notifyClickVariant:p.string,
smsTo:p.string,smsBody:p.string,smsPrivateType:p.string,smsReadUids:p.string,dueAt:p.string,nextPrivate:p.string,privateType:p.string,
privateReadUids:p.string,endOfLife:p.boolean,archive:p.boolean,archiveType:p.string,archiveData:p.string,archiveId:p.string,
perpetual:p.boolean,seed:p.string}),Qy=p.partial({label:p.string,enabled:p.boolean,watchType:p.string,moveType:p.string,
isBotTurn:p.string,privateType:p.string,privateKey:p.string,privateReady:p.string,state:p.string,questions:p.string,moveId:p.string,
move:p.string,fallbackMove:p.string,delayMs:p.union([p.number,p.string]),maxDecisions:p.number,maxDailyDecisions:p.number,
journal:p.boolean}),qx=p.partial({functionName:p.string,args:p.string}),ev=p.partial({dataType:p.string,scope:Ky,groupKey:p.string}),
Zd=p.partial({maxColumns:p.number,columnBreaks:p.array(p.number),axis:Ax,mode:_x,minColumnWidth:p.number,columnWeights:p.array(
p.number),cols:p.union([p.number,p.string]),rows:p.union([p.number,p.string]),rowHeight:p.number}),Xd=p.partial({x:p.union(
[p.number,p.string]),y:p.union([p.number,p.string]),w:p.union([p.number,p.string]),h:p.union([p.number,p.string])}),Qd=p.partial(
{marginBottom:p.number,justifySelf:p.union([p.literal("left"),p.literal("center"),p.literal("right")]),overlay:p.union([
p.literal("topLeft"),p.literal("topRight"),p.literal("bottomLeft"),p.literal("bottomRight")]),overlayInset:p.number,overlayWidth:p.number,
maxWidth:p.number}),Vx=p.partial({width:p.number,height:p.number}),ep=p.partial({bg:p.string,surface:p.string,accent:p.string,
text:p.string,mutedText:p.string,border:p.string}),tv=p.type({style:Dx}),tp=p.intersection([Vx,p.partial({format:$x})]),
rp=p.type({expression:p.string,errorMessage:p.string}),Yx=p.intersection([p.type({id:p.string,label:p.string}),p.partial(
{group:p.string})]),rv=p.union([p.string,Yx]),nv=p.intersection([p.type({allowedChildTypes:p.array(p.string)}),p.partial(
{icon:p.string,color:p.string,category:p.string,label:p.string,labelField:p.string,detail:p.string,badge:p.string,badgeColor:p.string,
lockedFields:p.union([p.string,p.array(p.string)]),canEdit:p.union([p.boolean,p.string])})]),Kl=p.intersection([p.type({
type:p.string}),p.partial({id:p.string})]),zx=p.union([zy,p.undefined]),Kx=p.type({x:p.number,y:p.number}),Gx=p.type({rotation:p.number,
zoom:p.number,pan:Kx}),av=p.intersection([p.type({name:p.string}),p.partial({url:p.string,ext:p.string,aiPrompt:p.string,
previewUrl:p.string,editState:Gx,takenAt:p.string})]),Jx=p.intersection([p.type({name:p.string}),p.partial({url:p.string,
ext:p.string,previewUrl:p.string,takenAt:p.string})]),Zx=p.union([av,p.array(Jx)]),Xx=p.intersection([p.type({title:p.string}),
p.partial({body:p.string,ok:p.string,cancel:p.string,destructive:p.boolean,info:p.boolean})]),iv=p.partial({params:p.array(
p.string),script:p.string,confirm:Xx}),Qx=p.partial({type:p.string,idField:p.string}),ov=p.partial({name:p.string,type:p.string,
isList:p.boolean,multiline:p.boolean,variant:p.string,compute:p.string,isTransient:p.boolean,description:p.string,fileNameFormula:p.string,
aiEnabled:p.boolean,aiSystemPromptFormula:p.string,searchFormula:p.string}),e_=p.intersection([p.type({name:p.string,fields:p.array(
ov)}),p.partial({icon:p.string,parent:Qx,writeAccess:Lx,wellKnown:Fx})]),sv=p.intersection([p.type({id:p.string,version:p.number,
hash:p.string}),p.partial({omitted:p.array(p.string)})]),t_=p.intersection([p.type({name:p.string,node:p.string,kind:xx}),
p.partial({default:p.string})]),r_=p.type({name:p.string,slot:p.string,fn:p.string,hostType:p.string}),lv=p.intersection(
[p.type({id:p.string,version:p.number}),p.partial({hash:p.string,slots:p.array(t_),seams:p.array(r_)})]),Si=p.partial({dataType:p.string,
sort:cn(Hx),whereClause:p.string,source:Ex,scope:Ky,groupKey:p.string,callable:qx,span:Wx}),n_=p.intersection([p.type({name:p.string,
type:p.string}),p.partial({actionLabel:p.string,actionMenu:p.union([p.boolean,p.string]),actions:p.record(p.string,iv),aiEnabled:p.boolean,
aiSystemPromptFormula:p.string,appLogo:p.string,args:p.string,audioSourceUrl:p.string,authDescription:p.string,authMode:qy,
authTitle:p.string,autoAdvance:p.boolean,botActors:cn(Qy),canAdd:p.union([p.boolean,p.string]),canEdit:p.union([p.boolean,
p.string]),collapsedByDefault:p.union([p.boolean,p.string]),collapsible:p.union([p.boolean,p.string]),color:p.string,compute:p.unknown,
containerStyle:Qd,contentMaxWidth:p.number,customCss:p.string,data:Si,deepHelp:p.string,displayMode:Jy,displayName:p.string,
durationSec:p.union([p.number,p.string]),examples:p.array(p.string),feature:lv,fetchUrl:p.string,focusIdentity:p.string,
format:p.union([zd,p.string]),formConfig:ev,functionName:Gd,headerLogo:p.string,help:p.string,hidden:p.union([p.boolean,
p.string]),hideHeader:p.union([p.boolean,p.string]),hideNav:p.union([p.boolean,p.string]),hideTopBar:p.union([p.boolean,
p.string]),htmlTemplate:p.string,icon:p.string,identity:p.string,idiom:p.union([Kd,p.string]),idleDescription:p.string,idleTitle:p.string,
imageOutputOptions:tp,imageSource:p.string,inputPlaceholder:p.string,isDerived:p.boolean,isOwnScope:p.boolean,isRecord:p.boolean,
isRepeating:p.boolean,isTransient:p.boolean,itemLabel:p.string,iterationLabel:p.string,label:p.string,language:p.string,
layout:Zd,library:sv,lyrics:p.string,max:p.union([p.number,p.string]),maxLength:p.union([p.number,p.string]),maxSizeMb:p.union(
[p.number,p.string]),maxTiles:p.union([p.number,p.string]),maxUserTurns:p.number,mediaMode:Jd,min:p.union([p.number,p.string]),
mockAudioUrl:p.string,mockEnabled:p.boolean,mockImageUrl:p.string,mockReplies:p.string,mockResultCount:p.number,mockResults:p.string,
mockTranscript:p.string,model:p.union([zl,p.string]),multiple:p.boolean,navigation:tv,noCreditsDescription:p.string,noCreditsTitle:p.string,
nodeTypes:p.record(p.string,nv),notifications:cn(Zy),nounLabel:p.string,onSuccessNavigate:p.string,orderField:p.string,orgLogin:p.boolean,
pageSize:p.union([p.number,p.string]),parameters:p.string,pickerValues:p.union([p.string,p.array(rv)]),place:Xd,placeholder:p.string,
placeholderIcon:p.string,pluginName:p.string,pluginParams:p.array(Vl),prompt:p.string,promptTemplate:p.string,publishDataType:p.string,
publishScope:p.string,publishVariant:p.string,purpose:p.string,recordKey:p.string,recordValue:p.string,refreshCallables:p.array(
p.string),reorderable:p.union([p.boolean,p.string]),required:p.union([p.boolean,p.string]),resultObjectType:p.string,returns:p.string,
returnTypeHint:p.string,roomKey:p.string,rootType:p.string,runningDescription:p.string,runningTitle:p.string,script:p.string,
showCamera:p.boolean,showCommit:p.boolean,showEdit:p.boolean,showFilePicker:p.boolean,showHeader:p.union([p.boolean,p.string]),
showSearch:p.boolean,size:Yl,sourceExpression:p.string,speakReplies:p.boolean,speechLang:p.string,steeringChips:p.string,
step:p.union([p.number,p.string]),submitObjectType:p.string,successMessage:p.string,summary:p.string,textTransform:Yd,theme:Gy,
themeColors:ep,transitions:cn(Xy),typeDescription:p.string,userAvatarUid:p.string,validation:cn(rp),value:p.unknown,variant:p.string,
voiceInput:p.boolean})]),oj=De.type({verticalId:De.string,title:De.string,entities:De.array(De.string),seedSlots:De.array(
De.string),labels:De.array(De.string)}),a_=De.keyof({light:null,dark:null}),i_=De.partial({labels:De.record(De.string,De.string),
theme:De.partial({preset:a_,colors:ep}),entityRenames:De.record(De.string,De.string),seedSlots:De.array(De.string)}),sj=De.intersection(
[De.type({appName:De.string}),i_]),np={dataSourceType:["embedded","storage","realtime","callable"],featureSlotKind:["lis\
t","value"],authMode:["public","private"],mode:["columns","grid","spatial","flow"],axis:["x","y"],imageFormat:["jpeg","p\
ng","webp"],inputSize:["small","medium"],subsectionVariant:["inline","masterDetail"],textVariant:["basic","multiline","s\
tringArray"],textTransform:["none","uppercase","lowercase"],fileVariant:["image","file","video","audio"],numberVariant:[
"integer","slider","decimal","money","intArray"],temporalVariant:["date","datetime","time"],pickerVariant:["single","mul\
tiple"],pickerIdiom:["select","radio","combobox"],dataScope:["global","user","variant","group","all","inbox"],themePreset:[
"light","dark"],callableButtonFunction:["setUserProfile","triggerWorldcupSync","socialFollow","socialUnfollow","socialLi\
ke","socialUnlike","kickFromHome"],callableButtonVariant:["contained","outlined","text","menu","pill"],audioGenerationModel:[
"musicgen","minimax-music-2.5"],transcribeModel:["gpt-4o-transcribe"],imageGenerationModel:["flux-schnell","nano-banana-\
2"],textGenerationModel:["claude-haiku-5-5","claude-haiku-4-5","claude-sonnet-5"],navigationStyle:["none","menu","tabs"],
transitionTrigger:["onWrite","onTimer"],spanMode:["repeat","once","grid"],videoDisplayMode:["tiles","bar","audioOnly","m\
inimal"],mediaMode:["video","audio"],objectTypeWriteAccess:["anyone","admins"],wellKnownType:["Person"],fieldTypeBuiltin:[
"variable","text","number","boolean","temporal","parentRef","image","imageUpload"],recordMetaField:["id","type","_scope",
"createdAt","updatedAt","createdBy","updatedBy","createdByUid","updatedByUid","isDeleted","_parent"]};var cv=new Set(np.fieldTypeBuiltin),o_=e=>cv.has(e),lj=np.fieldTypeBuiltin.filter(o_);var s_=e=>{if(typeof e!="string")return[];let t=[];for(let r of e.split(",")){let n=r.trim();if(!n)continue;let a=n.indexOf(
":");if(a===-1){t.push({name:n});continue}let i=n.slice(0,a).trim(),o=n.slice(a+1).trim();i&&t.push(o?{name:i,type:o}:{name:i})}
return t},l_=e=>s_(e).map(t=>t.name),c_="__interp";var Gl="app",Ei="appNode",mr="tree",ns="screen",Jl="form",ps="flow",Ur="flowStep",Zl="repeat",Xl="callableButton";var $a="content",fs="textInput",hs="numberInput",xi="variable",na="function",aa="const",ms="booleanInput",gs="temporalIn\
put",ys="selectInput",_i="fileInput",ap="pluginLeaf",ip="mediaRoom",u_="videoRoom",vs="subsection",d_=["app","appNode","\
booleanInput","callableButton","const","content","fileInput","flow","flowStep","form","function","mediaRoom","numberInpu\
t","pluginLeaf","repeat","screen","selectInput","subsection","temporalInput","textInput","tree","variable"],p_=["appNode\
:folder","appNode:tab","appNode:tabGroup","flowStep:aiChat","flowStep:aiQuery","flowStep:audioGeneration","flowStep:fetc\
hData","flowStep:imageGeneration","flowStep:publishData","flowStep:script","flowStep:transcribe"],op={aiChat:{type:"flow\
Step",variant:"aiChat"},aiQuery:{type:"flowStep",variant:"aiQuery"},audioGeneration:{type:"flowStep",variant:"audioGener\
ation"},fetchData:{type:"flowStep",variant:"fetchData"},folder:{type:"appNode",variant:"folder"},imageGeneration:{type:"\
flowStep",variant:"imageGeneration"},publishData:{type:"flowStep",variant:"publishData"},script:{type:"flowStep",variant:"\
script"},tab:{type:"appNode",variant:"tab"},tabGroup:{type:"appNode",variant:"tabGroup"},transcribe:{type:"flowStep",variant:"\
transcribe"}},f_={form:["formConfig"],callableButton:["functionName","name"],tree:["nodeTypes","rootType"],variable:["na\
me"],function:["name"],const:["name","value"],mediaRoom:["roomKey"]},h_={form:{since:"2026-10",use:"inputs on a screen o\
r flow screen, saved by `publishData` / `updateData` in a script"}},m_={appNode:{submitObjectType:{since:"2026-10",use:"\
a declared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},
"appNode:folder":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishDa\
ta({type, data: {...}})` with the inputs named explicitly"}},"appNode:tab":{submitObjectType:{since:"2026-10",use:"a dec\
lared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},"\
appNode:tabGroup":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishD\
ata({type, data: {...}})` with the inputs named explicitly"}},screen:{submitObjectType:{since:"2026-10",use:"a declared \
action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},subsection:{
submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishData({type, data: {.\
..}})` with the inputs named explicitly"}}},g_={objectTypeField:{isList:{since:"2026-10",use:'`type: "list<T>"`'},multiline:{
since:"2026-10",use:'`variant: "multiline"` on a text field'}}},uv={list:"subsection",videoRoom:"mediaRoom"},y_=e=>{var t;
return(t=uv[e])!=null?t:e};var dv=e=>{var t;return(t=op[e])!=null?t:{type:e}};var cj=Object.fromEntries(Object.entries(op).map(([e,t])=>[`${t.type}:${t.variant}`,e]));var zg="MatchExpression",Kg="MatchArm",Cd="->",Gg=123,Jg=125,v_=44,b_=e=>e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||e===
36||e===95||e>=128,di=e=>e.code,gd=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",w_=(e,t)=>{if(gd(t)&&t.type===
"ConditionalExpression"){let r=t.test;if(gd(r)&&r.type==="BinaryExpression"&&r.operator===Cd)return{type:Kg,test:r.left,
consequent:{type:"ConditionalExpression",test:r.right,consequent:t.consequent,alternate:t.alternate}}}return gd(t)&&t.type===
"BinaryExpression"&&t.operator===Cd?{type:Kg,test:t.left,consequent:t.right}:e.throwError("Expected `condition -> expres\
sion` in match block")},T_={name:"orgigglyMatch",init(e){e.addBinaryOp(Cd,.5),e.hooks.add("gobble-token",function(r){if(this.
gobbleSpaces(),!this.expr.startsWith("match",this.index))return;let n=this.index+5;if(n<this.expr.length&&b_(this.expr.charCodeAt(
n)))return;let a=this.index;this.index=n,this.gobbleSpaces();let i;if(di(this)!==Gg){let s=!1;try{s=this.gobbleExpression()}catch{
s=!1}if(this.gobbleSpaces(),!s||di(this)!==Gg){this.index=a;return}i=s}this.index++;let o=[];for(;;){if(this.gobbleSpaces(),
di(this)===Jg){this.index++;break}Number.isNaN(di(this))&&this.throwError("Unclosed match block \u2014 expected `}`");let s=this.
gobbleExpression();if(s||this.throwError("Expected `condition -> expression` in match block"),o.push(w_(this,s)),this.gobbleSpaces(),
di(this)===v_){this.index++;continue}if(di(this)===Jg){this.index++;break}this.throwError("Expected `,` or `}` after mat\
ch arm")}o.length===0&&this.throwError("A match block needs at least one arm"),r.node=i?{type:zg,scrutinee:i,arms:o}:{type:zg,
arms:o}})}},Zg="LetExpression",Xg=61,k_=62,yv=e=>e>=65&&e<=90||e>=97&&e<=122||e===36||e===95||e>=128,Qg=e=>yv(e)||e>=48&&
e<=57,yd=e=>e.code,S_=e=>e,Ho=e=>e,E_=new Set(["??","||"]),pi=e=>{let t=S_(e);if(t.type==="BinaryExpression"&&t.operator===
";"){let[r,n]=pi(t.left),a=n?Ho({type:"BinaryExpression",operator:";",left:n,right:t.right}):t.right;return[r,a]}if(t.type===
"BinaryExpression"&&E_.has(String(t.operator))){let[r,n]=pi(t.left);return n?[r,Ho({...t,left:n})]:[e,void 0]}if(t.type===
"ConditionalExpression"){let[r,n]=pi(t.test);if(n)return[r,Ho({...t,test:n})];let[a,i]=pi(t.alternate);return i?[Ho({...t,
alternate:a}),i]:[e,void 0]}if(t.type==="ArrowFunctionExpression"){let[r,n]=pi(t.body);return n?[Ho({...t,body:r}),n]:[e,
void 0]}return[e,void 0]},x_={name:"orgigglyLet",init(e){e.hooks.add("gobble-token",function(r){if(this.gobbleSpaces(),!this.
expr.startsWith("let",this.index))return;let n=this.index+3;if(n<this.expr.length&&Qg(this.expr.charCodeAt(n)))return;let a=this.
index;this.index=n,this.gobbleSpaces();let i=this.index;if(!yv(yd(this))){/^[^\s=]+\s*=(?![=>])/.test(this.expr.slice(this.
index))&&this.throwError("Expected a name after let"),this.index=a;return}for(;Qg(yd(this));)this.index++;let o=this.expr.
slice(i,this.index);if(this.gobbleSpaces(),yd(this)!==Xg){this.index=a;return}let s=this.expr.charCodeAt(this.index+1);if(s===
Xg||s===k_){this.index=a;return}this.index++;let l=this.gobbleExpression();l||this.throwError(`Expected an initialiser a\
fter let ${o} =`);let[c,u]=pi(l);r.node=u?{type:Zg,id:o,init:c,body:u}:{type:Zg,id:o,init:c}})}},es=e=>e,as=e=>typeof e==
"object"&&e!==null&&typeof e.type=="string",sp=(e,t)=>e.type==="BinaryExpression"&&e.operator===t,__=new Set(["||","&&",
"??"]),hi=(e,t,r)=>({type:"BinaryExpression",operator:e,left:t,right:r}),Nd=e=>{if(sp(e,";")){let[t,r]=Nd(es(e.left));return[
t,r?hi(";",r,e.right):es(e.right)]}if(e.type==="ConditionalExpression"){let[t,r]=Nd(es(e.alternate));return r?[{...e,alternate:t},
r]:[e]}return[e]},Pd=(e,t)=>{if(!sp(e,";"))return t(e);let r=Pd(es(e.right),t);return r?hi(";",e.left,r):void 0},ey=e=>sp(
e,"=")?e:void 0,Dd=e=>{if(e.type==="BinaryExpression"&&__.has(String(e.operator))&&as(e.left)){let t=String(e.operator),
r=Pd(e.left,n=>{let a=ey(n);return a?hi("=",a.left,Dd(hi(t,a.right,e.right))):void 0});if(r)return r}if(e.type==="Condit\
ionalExpression"&&as(e.test)){let[t,r]=Nd(es(e.alternate)),n=Pd(e.test,a=>{let i=ey(a);return i?hi("=",i.left,Dd({...e,test:i.
right,alternate:t})):void 0});if(n)return r?hi(";",n,r):n}return e},Md=e=>{let t={...e};for(let r of Object.keys(e)){if(r===
"parent")continue;let n=e[r];as(n)?t[r]=Md(n):Array.isArray(n)&&(t[r]=n.map(a=>as(a)?Md(a):a))}return Dd(t)},A_={name:"o\
rgigglyAssign",init(e){e.hooks.add("after-all",function(r){as(r.node)&&(r.node=Md(r.node))})}},$_=()=>{de._orgigglyTemplatePluginRegistered||
(de.plugins.register(gv.default),de._orgigglyTemplatePluginRegistered=!0),de._orgigglyObjectPluginRegistered||(de.plugins.
register(fv.default),de._orgigglyObjectPluginRegistered=!0),de._orgigglyRegexPluginRegistered||(de.plugins.register(hv.default),
de._orgigglyRegexPluginRegistered=!0),de._orgigglySpreadPluginRegistered||(de.plugins.register(mv.default),de._orgigglySpreadPluginRegistered=
!0),de._orgigglyArrowPluginRegistered||(de.plugins.register(pv.default),de._orgigglyArrowPluginRegistered=!0),de._orgigglyAtUnaryRegistered||
(de.addUnaryOp("@"),de._orgigglyAtUnaryRegistered=!0),de._orgigglysemicolonRegistered||(de.addBinaryOp(";",1),de._orgigglysemicolonRegistered=
!0),de._orgigglyAssignmentRegistered||(de.addBinaryOp("=",2,!0),de._orgigglyAssignmentRegistered=!0),de._orgigglyNullishCoalescingRegistered||
(de.addBinaryOp("??",1),de._orgigglyNullishCoalescingRegistered=!0),de._orgigglyMatchPluginRegistered||(de.plugins.register(
T_),de._orgigglyMatchPluginRegistered=!0),de._orgigglyLetPluginRegistered||(de.plugins.register(x_),de._orgigglyLetPluginRegistered=
!0),de._orgigglyAssignPluginRegistered||(de.plugins.register(A_),de._orgigglyAssignPluginRegistered=!0)};$_();var Fl=e=>e.
type==="Literal",vi=e=>e.type==="BinaryExpression",Ql=e=>e.type==="CallExpression",Ar=e=>e.type==="Identifier",is=e=>e.type===
"MemberExpression",vv=e=>e.type==="ThisExpression",bv=e=>e.type==="UnaryExpression",lp=e=>e.type==="ConditionalExpressio\
n";var R_=e=>e.type==="Compound",wv=e=>e.type==="ArrayExpression",Tv=e=>e.type==="TemplateLiteral",I_=e=>e.type==="TaggedTe\
mplateExpression",kv=e=>e.type==="ObjectExpression",ty=e=>e&&e.type==="SpreadElement",Sv=e=>e.type==="ArrowFunctionExpre\
ssion",O_=e=>e.type==="MatchExpression",Ev=e=>e.type==="LetExpression",ry=e=>typeof e=="object"&&e!==null&&"type"in e,C_=e=>{
let t=e;for(;t.parent;)t=t.parent;let r=t._source;return r||""},N_=e=>C_(e).slice(e.start,e.end),gt=(e,t,r,n)=>{let a=e;
if(a.parent=n,Ar(e)){let i=t.indexOf(e.name,r),o=i+e.name.length;return a.start=i,a.end=o,{start:i,end:o}}if(Fl(e)){let i=e.
raw;if(i){let c=t.indexOf(i,r),u=c+i.length;return a.start=c,a.end=u,{start:c,end:u}}let o=String(e.value),s=t.indexOf(o,
r),l=s+o.length;return a.start=s,a.end=l,{start:s,end:l}}if(vi(e)){let i=gt(e.left,t,r,a),o=gt(e.right,t,i.end,a);return a.
start=i.start,a.end=o.end,{start:i.start,end:o.end}}if(bv(e)){let i=t.indexOf(e.operator,r),o=gt(e.argument,t,i+e.operator.
length,a);return a.start=i,a.end=o.end,{start:i,end:o.end}}if(Ql(e)){let i=gt(e.callee,t,r,a),o=i.end;for(let c of e.arguments)
o=gt(c,t,o,a).end;let l=t.indexOf(")",o)+1;return a.start=i.start,a.end=l,{start:i.start,end:l}}if(is(e)){let i=gt(e.object,
t,r,a);if(e.computed){let o=gt(e.property,t,i.end,a),l=t.indexOf("]",o.end)+1;return a.start=i.start,a.end=l,{start:i.start,
end:l}}else{let o=gt(e.property,t,i.end,a);return a.start=i.start,a.end=o.end,{start:i.start,end:o.end}}}if(lp(e)){let i=gt(
e.test,t,r,a),o=gt(e.consequent,t,i.end,a),s=gt(e.alternate,t,o.end,a);return a.start=i.start,a.end=s.end,{start:i.start,
end:s.end}}if(wv(e)){let i=t.indexOf("[",r),o=i+1;for(let c of e.elements)c&&(o=gt(c,t,o,a).end);let l=t.indexOf("]",o)+
1;return a.start=i,a.end=l,{start:i,end:l}}if(kv(e)){let i=t.indexOf("{",r),o=i+1;for(let c of e.properties){let u=c;u.key&&
(o=gt(u.key,t,o,a).end),u.value&&!u.shorthand&&(o=gt(u.value,t,o,a).end)}let l=t.indexOf("}",o)+1;return a.start=i,a.end=
l,{start:i,end:l}}if(Tv(e)){let i=t.indexOf("`",r),o=i+1;for(let c of e.expressions)o=gt(c,t,o,a).end;let l=t.indexOf("`",
o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(vv(e)){let i=t.indexOf("this",r),o=i+4;return a.start=i,a.end=o,{start:i,
end:o}}if(R_(e)){let i=e.body||[];if(i.length===0)return a.start=r,a.end=r,{start:r,end:r};let o=r,s=r,l=r;for(let c=0;c<
i.length;c++){let u=gt(i[c],t,o,a);c===0&&(s=u.start),l=u.end,o=u.end}return a.start=s,a.end=l,{start:s,end:l}}{let i=-1,
o=r,s=r;for(let[l,c]of Object.entries(e))if(!(l==="type"||l==="parent")){if(Array.isArray(c)){for(let u of c)if(ry(u)){let d=gt(
u,t,s,a);i===-1&&(i=d.start),o=d.end,s=d.end}}else if(ry(c)){let u=gt(c,t,s,a);i===-1&&(i=u.start),o=u.end,s=u.end}}return i===
-1?(a.start=r,a.end=r,{start:r,end:r}):(a.start=i,a.end=o,{start:i,end:o})}},P_=e=>{let t=de(e);return gt(t,e,0),t._source=
e,t},Ra="@",D_=(e,t,r)=>{if(xv.string.is(e)){let a=e.startsWith(Ra);if(a){let i=_v(e);return{isFormula:a,value:i,targetCodec:t,
name:r}}}return{isFormula:!1,value:e,targetCodec:t,name:r}},_v=e=>e.slice(Ra.length).trim(),cp=e=>e.startsWith(Ra)?_v(e):
e;var Av=e=>!e.startsWith(Ra)&&e.includes("${"),up=e=>{if(!Av(e))return e;let t=e.trim();return t.length>1&&t.startsWith("\
`")&&t.endsWith("`")?Ra+e:`${Ra}\`${M_(e)}\``},M_=e=>{let t="",r=0,n=o=>{for(t+=e[r++];r<e.length&&e[r]!==o;)e[r]==="\\"&&
(t+=e[r++]),r<e.length&&(t+=e[r++]);r<e.length&&(t+=e[r++])},a=()=>{let o=1;for(;r<e.length;){let s=e[r];if(s==="'"||s===
'"')n(s);else if(s==="`")t+=e[r++],i(!0);else if(s==="{"&&o++,s==="}"&&o--,t+=e[r++],o===0)return}},i=o=>{for(;r<e.length;){
let s=e[r];if(s==="\\")t+=e[r++],r<e.length&&(t+=e[r++]);else if(s==="`"){if(o){t+=e[r++];return}t+="\\`",r++}else s==="\
$"&&e[r+1]==="{"?(t+="${",r+=2,a()):t+=e[r++]}};return i(!1),t};var j_=ge.union([ge.literal(fs),ge.literal(ms),ge.literal(hs),ge.literal(gs),ge.literal(ys),ge.literal(_i),ge.literal(ap),
ge.literal(Jl),ge.literal(ps),ge.literal(Ur),ge.literal(Zl),ge.literal(Xl),ge.literal(Gl),ge.literal(Ei),ge.literal(ns),
ge.literal(mr),ge.literal(xi),ge.literal(na),ge.literal(aa),ge.literal($a),ge.literal(vs),ge.literal(ip),ge.literal(u_)]),
L_=ge.recursion("node",()=>ge.intersection([ge.record(ge.string,ge.unknown),ge.partial({children:ge.array(L_)})])),F_={type:"\
app",name:""},U_={};var B_={include:Qo,traverseChildren:Qo,traverseParent:Qo},ec={...B_,direction:"forward"},Dn=e=>({...ec,...e});var H_=vt.union([vt.literal("before"),vt.literal("after"),vt.literal("into")]),W_=vt.union([vt.literal("top"),vt.literal(
"bottom"),vt.literal("center")]),q_=vt.type({target:vt.string,action:H_,position:W_}),dj=vt.type({currentDropZone:vt.union(
[vt.undefined,q_]),src:vt.string}),V_=Be.keyof({html:null,sandboxed:null}),$v=Be.keyof({spotify:null}),Y_=Be.partial({name:Be.string,
type:Be.string,description:Be.string,exampleValue:Be.string,default:Be.string}),z_=Be.intersection([Be.type({name:Be.string,
parameters:Be.array(Y_),htmlTemplate:Be.string}),Be.partial({icon:Be.string,color:Be.string,description:Be.string,image:av,
runtime:V_,embedsThirdPartyMedia:Be.boolean,connections:Be.array($v),widgetOwner:Be.string})]);var K_=Ia.intersection([Ia.type({name:Ia.string,type:Ia.string}),ov]);var G_=new Set(np.recordMetaField),bs=(...e)=>new Set(e),J_=bs("id"),Z_=bs("createdAt","updatedAt","createdBy","updatedB\
y"),X_=bs("createdByUid","updatedByUid"),pj=bs("type","_scope","isDeleted"),fj=bs("_parent");var hj=new Set([...J_,...Z_,...X_]),Q_=([e,t])=>({...t,name:e}),eA=e=>!!e[1],dp=e=>Object.entries(e).filter(eA).map(Q_),
Je=(e,t,r)=>(n={})=>({name:"",type:e,...n,...t,children:r?dp(r):void 0}),Br=(e,t)=>(r={},n={})=>{let a=dp(r),i=n.submitObjectType?
Rv():[],o=[...a,...i];return{name:"",type:e,...t,...n,children:o.length>0?o:void 0}},vd=Je(xi),Rv=()=>dp({id:vd(),createdAt:vd(),
createdBy:vd()}),Iv=Br(Gl),mj=Br(Ei),gj=Br(Ei,{variant:"tabGroup"}),yj=Br(Ei,{variant:"tab"}),vj=Br(Ei,{variant:"folder"}),
bj=Br(ns),wj=Br(vs),Tj=Br(Jl),kj=Br(ps),Sj=Br(Zl,{isRepeating:!0}),Ej=Je(Ur),xj=Je(Ur,{variant:"aiQuery"}),_j=Je(Ur,{variant:"\
aiChat"}),Aj=Je(Ur,{variant:"fetchData"}),$j=Je(Ur,{variant:"imageGeneration"}),Rj=Je(Ur,{variant:"audioGeneration"}),Ij=Je(
Ur,{variant:"transcribe"}),Oj=Je(Ur,{variant:"publishData"}),Cj=Je(Ur,{variant:"script"}),Nj=Je(Xl),Pj=Je(fs),Dj=Je(hs),
Mj=Je(ms),jj=Je(gs),Lj=Je(ys),Fj=Je(_i),Uj=Je($a),Wo=Je(xi),Bj=Je(na),Hj=Je(aa),Wj=Je(ap),qj=Je(ip),Vj=Br(vs,{isRepeating:!0,
variant:"masterDetail"}),Yj=Br(vs,{isRepeating:!0,isRecord:!0,variant:"masterDetail"}),Ov=Je(mr,{isRepeating:!0},{value:Wo(),
expanded:Wo(),dragAndDropState:Wo(),isDrawerClosed:Wo(),leftPanelWidth:Wo()});var pp=(e,t=".")=>{let r=e.lastIndexOf(t),n=r===-1?"":e.slice(0,r),a=r===-1?e:e.slice(r+1);return[n,a]},tA=(e,t=".")=>{let r=e.
indexOf(t),n=r===-1?e:e.slice(0,r),a=r===-1?"":e.slice(r+1);return[n,a]},_r=(e,t=".")=>e.filter(Boolean).join(t),rA=e=>zc(
e,/(?=[A-Z])/).map(t=>Xc(t)),Nv=e=>rA(e).join(" ");var nA=e=>{switch(e){case fs:case hs:case ms:case gs:case ys:case _i:case ap:return!0;default:return!1}},aA=e=>{switch(e){case Gl:case Ei:case ns:case mr:case Jl:case ps:case Zl:case vs:
return!0;default:return!1}},Pv=e=>{let t=[];return t.push(e),t.push(...ws(e).flatMap(Pv)),t},ws=e=>e.children||[],iA=(e,t)=>Dv(
e).filter(r=>r.name===t),oA=e=>{let t=new Map,r=(n,a)=>{t.set(n,a);for(let i of ws(n))r(i,n)};return r(e,null),t},Dv=e=>Mv(
e)?[e]:e.isOwnScope||e.isRepeating?[e]:[e,...ws(e).flatMap(Dv)],fp=(e,t,r)=>{let n=e[r.name];if(!n||n.length===1)return r.
name;let a=t.get(r);if(!a)throw new Error(`Node with name ${r.name} has no parent`);return`${fp(e,t,a)}$${r.name}`},hp=e=>aA(
e.type),sA=e=>e.type==="form"||!!e.submitObjectType,Mv=e=>!hp(e),mp=e=>!!(e.isRepeating||e.isOwnScope),lA=e=>e,it=(e,t)=>t,
tc=(e,t,r)=>r,cA=(e,t,r)=>r,uA=(e,t,r,n)=>n,dA=(e,t,r)=>r,jv=(e,t)=>t,pA=(e,t,r)=>r,Lv=(e,t,r)=>r,fA=(e,t)=>t,Na=e=>e,Ts=k(
Na,Pv),Kj=k(Na,yr("compute")),hA=k(Na,yr("name")),rc=k(Ts,e=>Bn(e,yr("name"))),gp=k(Na,oA),Fv=k(Ts,rc,gp,(e,t,r)=>wt(e,n=>fp(
t,r,n))),Uv=k(gp,jv,(e,t)=>{var r;return(r=e.get(t))!=null?r:void 0}),Nn=k(rc,gp,jv,(e,t,r)=>fp(e,t,r)),Ul=k(rc,Fv,it,(e,t,r)=>{
let n=t[r];return n?[n]:e[r]||[]}),os=k(Na,rc,Fv,it,(e,t,r)=>r,(e,t,r,n,a)=>{let i=r[n];if(i)return R(i);let o=t[n];if(!o){
let[,s]=tA(n,"$");return s?os(e,s,a):Dl(`Node with id ${n} not found`)}if(o.length===1)return R(o[0]);if(!a){let s=ws(e).
find(c=>c.name===n);if(s)return R(s);let l=iA(e,n);return l.length===1?R(l[0]):Dl({matches:o.map(c=>Nn(e,c))})}return os(
a,n)}),Gj=k(os,ze),Jj=k(hA,Nv),Ai=(e,t,r)=>k(Na,n=>{let a=n[t];return a===void 0&&r!==void 0&&(a=JE(r,n)),D_(a,e,t)}),mA=Ai(
Cv.string,"nounLabel","Item"),gA=e=>{let{value:t,isFormula:r}=mA(e);return`${r?t:`'${t}'`} + ' ' + ($index + 1)`},yA=k(Na,
gA),Zj=Ai(Ie,"multiline"),Xj=k(Ts,(e,t)=>t,(e,t)=>{let r=e.flatMap(n=>{var a;return Si.is(n.data)&&n.data.source===t?(a=
n.data.dataType)!=null?a:[]:[]});return pa(r)}),Qj=k(Ts,e=>{var t;let r=[],n=new Set;for(let a of e){if(!Si.is(a.data)||
a.data.source!=="callable")continue;let i=a.data.dataType,o=a.data.callable;if(!i||!o?.functionName)continue;let s=`${i}\
::${o.functionName}::${(t=o.args)!=null?t:""}`;n.has(s)||(n.add(s),r.push({typeName:i,functionName:o.functionName,...o.args?
{args:o.args}:{}}))}return r}),vA=e=>{if(e.type===mr){let r=e.nodeTypes;return r&&typeof r=="object"?Object.keys(r):[]}let t=Si.
is(e.data)?e.data.dataType:void 0;return t?[t]:[]},bA=k(Ts,(e,t)=>t,(e,t)=>{var r,n;let a=new Map;for(let o of e)if(Si.is(
o.data)&&o.data.source===t){let s=(r=o.data.scope)!=null?r:"global";for(let l of vA(o)){let c=(n=a.get(l))!=null?n:new Set;
s==="all"?(c.add("global"),c.add("user")):c.add(s),a.set(l,c)}}let i=[];for(let[o,s]of a)for(let l of s)i.push({typeName:o,
scope:l});return i}),nc=[],V=e=>e;var ia=e=>{var t;return(t=e.instance)!=null?t:U_},xr=e=>e.context,yp=k(V,yr("def")),dn=k(ia,e=>{var t;return(t=e?.data)!=
null?t:nc}),vp=k(ia,e=>{var t;return(t=e?.navStack)!=null?t:nc}),pn=k(ia,e=>{var t;return(t=e?.lengths)!=null?t:nc}),bi=k(
dn,e=>wt(e,yr("pointer"))),ac=k(pn,e=>wt(e,yr("pointer"))),bp=k(ia,e=>e.cursor||""),wp=k(ia,e=>e.cursorArgs),Bv=k(ia,e=>{
var t;return(t=e.navStackArgs)!=null?t:nc}),wA={objects:[]},TA=k(V,e=>{var t;return(t=e.repo)!=null?t:wA}),Hv=e=>{let{parent:t}=e;
return[...t?Hv(t):[],e]},kA=e=>{let t=e.match(/^([\w\s()$]+)(?:\[(\d+)\])?$/);if(!t)throw new Error(`part "${e}" invalid\
 syntax`);let[,r,n]=t;return{nodeId:r,index:n!==void 0?Number(n):0}},Tp=e=>_r(qv(e).map(Wv)),SA=e=>{let{scope:t,node:r,isIteration:n}=e,
a=Tp(t);return n?a:_r([a,Nn(t.node,r)])},ks=e=>{let{parent:t,node:r}=e;if(!t)return"";let n=Nn(t.node,r);return _r([Tp(t),
n])},Wv=e=>{let{parent:t,node:r,index:n}=e,a=t?Nn(t.node,r):"";return mp(r)?`${a}[${n}]`:a},EA=e=>({node:e,index:0,key:""}),
ny=e=>e.parent===void 0,qv=e=>{let{parent:t}=e;return[...t?qv(t):[],e]},Vv=(e,t)=>e.parent===t.parent&&e.node===t.node,xA=(e,t)=>{
let r=t.find(n=>Vv(e,n));return r?r.index:-1},_A=(e,t,r)=>{let n=t.map(a=>Vv(e,a)?{...a,index:r}:a);return _r(n.map(Wv))},
rL=yr("key"),AA=(e,t)=>{let{parent:r,node:n,key:a}=e,i=Ul(n,t);if(i.length)return n===i[0]?{key:_r([r?.key,t]),isDeclared:!0}:
{key:_r([a,t]),isDeclared:!0};if(t.includes("$")){let o=t.slice(t.lastIndexOf("$")+1);if(Ul(n,o).length)return{key:_r([a,
t]),isDeclared:!0}}return{key:_r([a,t]),isDeclared:!1}},bd=(e,t,r)=>{let n=$A(e,t,r);return n?Nn(e,n):r},$A=(e,t,r)=>{let n=Ul(
e,r);if(n.length!==0)return n.length===1?n[0]:Yv(e,t,r)},Yv=(e,t,r)=>{let n=Ul(t,r);if(n.length)return n[0];let a=Uv(e,t);
if(a)return Yv(e,a,r)},RA=(e,t)=>{if(t==="")return R(EA(e));let[r,n]=pp(t),{nodeId:a,index:i}=kA(n),o=Bl({def:e},r);if(P(
o))return o;let s=o.right,l=os(e,a,s.node);if(P(l))return l;let c=l.right,u={parent:s,node:c,index:i,key:t},d=Tp(u);if(d!==
t){let f=Bl({def:e},d);return P(f)?R(u):f}return R(u)},IA=(e,t)=>{let[r,n]=pp(t),a=n.endsWith("]"),o=Bl({def:e},a?t:r);if(P(
o))return o;let s=o.right,l=a?R(s.node):os(e,n,s.node);if(P(l))return l;let c=l.right,u={scope:s,node:c,isIteration:a,key:t},
d=SA(u);if(d!==t){let f=Kr({def:e},d);return P(f)?R(u):f}return R(u)},Bl=k(yp,it,RA),Pn=k(Bl,e=>{if(P(e))throw new Error(
`Invalid scope key: ${e.left}`);return e.right}),Kr=k(yp,it,IA),B=k(Kr,e=>{if(P(e))throw new Error(`Invalid pointer key:\
 ${e.left}`);return e.right}),kp=k(yp,tc,(e,t)=>B({def:e},t)),OA=k(B,yr("node")),Sp=k(V,()=>"",B),Ep=k(Pn,Hv),ra=k(V,Pn,
tc,(e,t,r)=>xA(t,Ep(e,r))),CA=k(V,Pn,tc,uA,(e,t,r,n)=>{let a=Ep(e,r);return _A(t,a,n)}),Nl=k(Pn,tc,AA),qo=(e,t,r)=>{let n=Kr(
e,t);if(P(n))return;let a=n.right.scope;for(;a;){let{key:i,isDeclared:o}=Nl(e,a.key,r);if(o)return P(Kr(e,i))?void 0:i;a=
a.parent}};var $i=(e,t)=>{let r=(0,Kv.createContext)(t);return[r.Provider,()=>{let i=(0,zv.useContext)(r);if(i===void 0){if(t)return t;
throw new Error(`${e}Context not found`)}return i},r]},Gv=(e,t)=>{let r=e.length,n=t.length;if(r===0)return n;if(n===0)return r;
let a=[];for(let i=0;i<=r;i++)a[i]=[i];for(let i=0;i<=n;i++)a[0][i]=i;for(let i=1;i<=r;i++)for(let o=1;o<=n;o++){let s=e[i-
1]===t[o-1]?0:1;a[i][o]=Math.min(a[i-1][o]+1,a[i][o-1]+1,a[i-1][o-1]+s)}return a[r][n]},ay=e=>e.toLowerCase().trim().replace(
/^the\s+/i,"").replace(/\s+/g," "),NA=(e,t,r={})=>{if(e.length===0)return"none";let{correctThreshold:n=1,closeThreshold:a=3}=r,
i=ay(e),o=ay(t);if(i===o)return"correct";if(i.length===0)return"wrong";let s=Gv(i,o),l=Math.max(1,Math.floor(o.length/10)),
c=n*l,u=a*l;return s<=c?"correct":s<=u?"close":"wrong"};var Go=class{constructor(e){this.html=e}toString(){return this.html}toJSON(){return this.html}},Zv=e=>e instanceof Go,xp=e=>e.
replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),PA=e=>e instanceof
Ve.PlainDate,DA=e=>e instanceof Ve.ZonedDateTime,MA=e=>e instanceof Ve.Instant,dt=e=>Jv.string.is(e)?e:Zv(e)?e.html:PA(e)?
e.toString():DA(e)?e.toPlainDate().toString():MA(e)?e.toZonedDateTimeISO("UTC").toPlainDate().toString():Array.isArray(e)?
e.join(""):e===void 0?"":String(e),ic=(e,t,r="no context")=>xe(e)?Qv(e.right,t,r):e,Qv=(e,t,r="no context")=>t.is(e)?R(e):
Dl(`Type mismatch: ${JSON.stringify(e)} is not a ${t.name} (${r})`),jA=(e,t,r="no context")=>{if(!xe(e))return e;let n=e.
right;if(t.is(n))return R(n);let a=t;return a===Xv.string||a===F&&n!==void 0?R(dt(n)):Dl(`Type mismatch: ${JSON.stringify(
n)} is not a ${t.name} (${r})`)},LA=e=>{let t={},r=[];for(let n in e){let a=e[n];P(a)?r.push(a.left):t[n]=a.right}return r.
length?{left:r}:{right:t}};var be=e=>{let t=LA(e);if(P(t))throw new Error(t.left.join(`
`));return t.right};var[iL,oL]=$i("persistence"),[sL,lL]=$i("PersistenceKey","");var FA=e=>{let t=e;return()=>(t=t*1103515245+12345&2147483647,t/2147483647)},Hl="0123456789abcdefghijklmnopqrstuvwxyzABC\
DEFGHIJKLMNOPQRSTUVWXYZ",UA=248,BA=()=>{let e=globalThis.crypto;if(!e?.getRandomValues)return Math.floor(Math.random()*Hl.
length);let t=new Uint8Array(1);for(;;){e.getRandomValues(t);let r=t[0];if(r<UA)return r%Hl.length}},HA=(e={})=>{let{length:t=8,
seed:r}=e;if(t<=0)throw new Error("Length must be greater than 0");let n=r!==void 0?(()=>{let i=FA(r);return()=>Math.floor(
i()*Hl.length)})():BA,a="";for(let i=0;i<t;i++)a+=Hl[n()];return a},WA="23456789TJQKA",qA="shdc",VA=/^card_[shdc][2-9TJQKA]$/,
YA=["high card","pair","two pair","three of a kind","straight","flush","full house","four of a kind","straight flush"],zA=e=>{
if(typeof e!="string"||!VA.test(e))throw new Error(`handRank: bad card id ${JSON.stringify(e)} \u2014 expected card_{s|h|d|c}\
{2-9|T|J|Q|K|A}`);return{id:e,suit:qA.indexOf(e[5]),rank:WA.indexOf(e[6])+2}},Jo={2:"two",3:"three",4:"four",5:"five",6:"\
six",7:"seven",8:"eight",9:"nine",10:"ten",11:"jack",12:"queen",13:"king",14:"ace"},_a=e=>e===6?"sixes":`${Jo[e]}s`,iy=(e,t)=>{
var r;let n=e;for(let a=0;a<5;a++)n=n*15+((r=t[a])!=null?r:0);return n},oy=e=>{var t;let r=[...e].sort((f,h)=>h.rank-f.rank),
n=new Map;for(let f of r)n.set(f.rank,((t=n.get(f.rank))!=null?t:0)+1);let a=[...n.entries()].sort((f,h)=>h[1]-f[1]||h[0]-
f[0]),i=e.every(f=>f.suit===e[0].suit),o=a.map(([f])=>f),s=0;o.length===5&&(o[0]-o[4]===4?s=o[0]:o.join(",")==="14,5,4,3\
,2"&&(s=5));let l=()=>a.flatMap(([f])=>r.filter(h=>h.rank===f));if(s>0){let f=s===5?[...r.slice(1),r[0]]:r,h=i?8:4;return{
category:h,rank:iy(h,[s]),tiebreak:[s],ordered:f}}let c=a.map(([,f])=>f).join(""),u;c==="41"?u=7:c==="32"?u=6:i?u=5:c===
"311"?u=3:c==="221"?u=2:c==="2111"?u=1:u=0;let d=o;return{category:u,rank:iy(u,d),tiebreak:d,ordered:l()}},KA=e=>{let t=e.
tiebreak;switch(e.category){case 8:return t[0]===14?"royal flush":`straight flush, ${Jo[t[0]]} high`;case 7:return`four \
of a kind, ${_a(t[0])}`;case 6:return`full house, ${_a(t[0])} over ${_a(t[1])}`;case 5:return`flush, ${Jo[t[0]]} high`;case 4:
return`straight, ${Jo[t[0]]} high`;case 3:return`three of a kind, ${_a(t[0])}`;case 2:return`two pair, ${_a(t[0])} and ${_a(
t[1])}`;case 1:return`pair of ${_a(t[0])}`;default:return`${Jo[t[0]]}-high`}},GA=e=>{let t=e.length;if(t===5)return[e];if(t===
6)return e.map((n,a)=>e.filter((i,o)=>o!==a));let r=[];for(let n=0;n<t;n++)for(let a=n+1;a<t;a++)r.push(e.filter((i,o)=>o!==
n&&o!==a));return r},JA=e=>{if(!Array.isArray(e)||e.length<5||e.length>7){let i=Array.isArray(e)?`${e.length} cards`:typeof e;
throw new Error(`handRank: expected an array of 5\u20137 card ids, got ${i}`)}let t=e.map(zA),r=new Set;for(let i of t){
if(r.has(i.id))throw new Error(`handRank: duplicate card id ${i.id}`);r.add(i.id)}let n;for(let i of GA(t)){let o=oy(i);
(!n||o.rank>n.rank)&&(n=o)}let a=n??oy(t.slice(0,5));return{category:a.category,categoryName:YA[a.category],rank:a.rank,
best:a.ordered.map(i=>i.id),label:KA(a)}},_p={map:["it","i"],filter:["it","i"],forEach:["it","i","arr"],reduce:["acc","i\
t","i"],times:["i"],every:["it","i"],some:["it","i"],find:["it","i"],findIndex:["it","i"],count:["it","i"],groupBy:["it",
"i"],sumBy:["it","i"]},ZA=e=>e.params?e.params.filter(Ar).map(t=>t.name):null,Ap="var(--og-accent, currentColor)",tb="va\
r(--og-border, rgba(127,127,127,.25))",XA="var(--og-text, currentColor)",QA=e=>e!=null&&typeof e=="object"&&!Array.isArray(
e),$p=e=>QA(e)?e:{},ss=e=>{if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(typeof e=="string"&&e.trim()!==""){
let t=Number(e);return Number.isFinite(t)?t:void 0}},Aa=(e,t)=>{let r=ss(e);return r!=null&&r>0?r:t},rb=(e,t)=>{let r=ss(
e),n=t===void 0?1:ss(t);return r==null||n==null||n<=0?0:Math.min(1,Math.max(0,r/n))},e$=/[;{}<>"'\\]|url\(|expression\(/i,
jd=e=>{if(typeof e!="string")return;let t=e.trim();return t!==""&&t.length<=100&&!e$.test(t)?t:void 0},ls=(e,t)=>{var r;
return(r=jd(e))!=null?r:t},t$=(e,t)=>{var r,n;return(n=(r=jd(e))!=null?r:jd(t))!=null?n:""},mi=e=>Math.round(e*100)/100,
nb=e=>`role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${e}"`,r$=(e,t)=>{let r=$p(t),n=Math.round(
rb(e,r.max)*100),a=Aa(r.height,8),i=Aa(r.radius,a/2),o=ls(r.color,Ap),s=ls(r.track,tb);return`<div ${nb(n)} style="heigh\
t:${a}px;border-radius:${i}px;background:${s};overflow:hidden;"><div style="width:${n}%;height:100%;background:${o};"></\
div></div>`},n$=(e,t)=>{let r=$p(t),n=rb(e,r.max),a=Math.round(n*100),i=Aa(r.size,64),o=Math.min(Aa(r.stroke,8),i/2),s=ls(
r.color,Ap),l=ls(r.track,tb),c=r.caption==null?`${a}%`:xp(String(r.caption)),u=i/2,d=mi((i-o)/2),f=mi(2*Math.PI*d),h=(b,T="")=>`\
<circle cx="${u}" cy="${u}" r="${d}"${T} style="fill:none;stroke-width:${o};${b}"/>`,y=n>0?h(`stroke:${s};stroke-linecap\
:round;stroke-dasharray:${mi(n*f)} ${f};`,` transform="rotate(-90 ${u} ${u})"`):"";return`<svg ${nb(a)} width="${i}" hei\
ght="${i}" viewBox="0 0 ${i} ${i}" style="display:block;">`+h(`stroke:${l};`)+y+`<text x="${u}" y="${u}" text-anchor="mi\
ddle" dominant-baseline="central" style="fill:${XA};font-size:${mi(i*.24)}px;font-weight:600;">${c}</text></svg>`},a$=(e,t)=>{
if(!Array.isArray(e))return"";let r=e.flatMap(y=>{let b=ss(y);return b==null?[]:[b]});if(r.length<2)return"";let n=$p(t),
a=ss(n.width),i=Aa(n.width,120),o=Aa(n.height,32),s=Aa(n.strokeWidth,2),l=ls(n.color,Ap),c=Math.min(...r),u=Math.max(...r)-
c,d=s/2,f=r.map((y,b)=>{let T=mi(b*i/(r.length-1)),S=u===0?o/2:mi(d+(1-(y-c)/u)*(o-2*d));return`${T},${S}`}).join(" ");return`\
<svg role="img" aria-label="${`trend: ${r[0]} to ${r[r.length-1]}`}" width="${a!=null&&a>0?i:"100%"}" height="${o}" view\
Box="0 0 ${i} ${o}" preserveAspectRatio="none" style="display:block;overflow:visible;"><polyline points="${f}" vector-ef\
fect="non-scaling-stroke" style="fill:none;stroke:${l};stroke-width:${s};stroke-linejoin:round;stroke-linecap:round;"/><\
/svg>`},i$=e=>{var t,r,n;try{return R(P_(e))}catch(a){let i=a,o=(t=i.message)!=null?t:"Parse error",s=(r=i.description)!=
null?r:o,l=(n=i.index)!=null?n:-1;return Ce({message:o,description:s,source:e,index:l})}},Rp=k(lA,i$),Ip=e=>rt(e)&&"__or\
gFunction"in e&&e.__orgFunction===!0,Pl=new Set,o$=()=>({map:new Map,ids:new WeakMap,next:{n:0}}),sy=(e,t)=>{if(t===null)
return"null";let r=typeof t;if(r==="object"||r==="function"){let n=e.ids.get(t);return n===void 0&&(n=e.next.n++,e.ids.set(
t,n)),"#"+n}return r+":"+String(t)},ab=e=>{e?.map.clear()},cs=e=>rt(e)&&"__closure"in e&&e.__closure===!0,ib=(e,t)=>{var r;
return{__closure:!0,params:(r=ZA(e))!=null?r:[],body:e.body,ctx:t}},wd=new Set,us=(e,t)=>{if(wd.has(e))return R(void 0);
let r={};for(let n=0;n<e.params.length;n++)r[e.params[n]]=t[n];wd.add(e);try{return le(e.body,oc(e.ctx,r),un)}finally{wd.
delete(e)}},ob=(e,t,r,n)=>{let a=e.compute,i=typeof a=="string"&&a.startsWith("@")?a.slice(1).trim():String(a??"");if(Pl.
has(e.key))return R(void 0);let o=l_(e.parameters),s={};for(let d=0;d<o.length;d++)s[o[d]]=t[d];let l=Rp(i);if(P(l))return Ce(
yt(`Error in function body: ${i}`,n));let c=e.memoSafe===!0?r.memo:void 0,u;if(c){let d=r.dc("$data",un);u=e.key+"|"+sy(
c,d)+"|"+t.map(h=>sy(c,h)).join(",");let f=c.map.get(u);if(f!==void 0)return f}Pl.add(e.key);try{let d=oc(r,s);d.letBound=
void 0;let f=le(l.right,d,un);return c&&u!==void 0&&c.map.set(u,f),f}finally{Pl.delete(e.key)}},Td=(e,t,r)=>{let n=[];for(let a of e){
let i=le(a,t,r);if(P(i))return i;n.push(i.right)}return R(n)},yt=(e,t)=>({message:e,failingExpression:t}),s$=e=>{if(Ar(e))
return e.name;if(is(e)){let t=e.property;if(Ar(t))return t.name}return"function"},sb=(e,t,r,n)=>{var a;let i=e;if(ab(r.memo),
Ar(e))return(a=r.letBound)!=null&&a.has(e.name)?Ce(yt(`Cannot reassign let binding '${e.name}'`,i)):r.setter?(r.setter(e.
name,t),R(void 0)):Ce(yt("Cannot assign: no mutable context available",i));if(is(e)){let o=le(e.object,r,n);if(P(o))return o;
let s=o.right;if(s==null||typeof s!="object"&&typeof s!="function")if(Ar(e.object)){if(!r.setter)return Ce(yt("Cannot au\
to-create object: no mutable context available",i));s={},r.setter(e.object.name,s)}else return Ce(yt("Cannot assign prop\
erty of non-object",i));let l=Ld(e,r.dc);if(P(l))return l;let c=l.right.property;return s[c]=t,R(void 0)}return Ce(yt("I\
nvalid assignment target: must be identifier or property access",i))},le=(e,t,r=un)=>{var n,a,i;let o=e;if(Fl(e))return R(
e.value);if(vi(e)){if(e.operator==="->")return Ce(yt("`->` is only valid inside a `match { }` block (as `condition -> ex\
pression`)",e));if(e.operator===";"){let c=le(e.left,t,r);return P(c)?c:le(e.right,t,r)}if(e.operator==="="){let c=le(e.
right,t,r);if(P(c))return c;let u=c.right,d=sb(e.left,u,t,r);return P(d)?d:R(u)}if(e.operator==="&&"||e.operator==="||"||
e.operator==="??"){let c=le(e.left,t,r);if(P(c))return c;let u=c.right;return(e.operator==="&&"?!u:e.operator==="||"?!!u:
u!=null)?c:le(e.right,t,r)}let s=le(e.left,t,r);if(P(s))return s;let l=le(e.right,t,r);if(P(l))return l;try{return R(S$(
e.operator)(s.right,l.right))}catch(c){return Ce(yt(String(c),e))}}if(bv(e)){let s=le(e.argument,t,r);if(P(s))return s;try{
return R(E$(e.operator)(s.right))}catch(l){return Ce(yt(String(l),e))}}if(lp(e)){let s=le(e.test,t,r);return P(s)?s:s.right?
le(e.consequent,t,r):le(e.alternate,t,r)}if(Ev(e)){if((n=t.letBound)!=null&&n.has(e.id))return Ce(yt(`Cannot redeclare l\
et binding '${e.id}'`,e));let s=le(e.init,t,r);return P(s)?s:e.body?le(e.body,cb(t,e.id,s.right),r):R(s.right)}if(O_(e)){
let s,l=e.scrutinee!==void 0;if(e.scrutinee!==void 0){let c=le(e.scrutinee,t,r);if(P(c))return c;s=c.right}for(let c of e.
arms){if(Ar(c.test)&&c.test.name==="_")return le(c.consequent,t,r);let u=le(c.test,t,r);if(P(u))return u;if(l?Cp(s,u.right):
!!u.right)return le(c.consequent,t,r)}return R(void 0)}if(Ql(e)){let s={...r,memberLookupContexts:[]};if(is(e.callee)){let u=le(
e.callee.object,t,fi(s,!1));if(P(u))return u;let d=u.right,f=Ld(e.callee,t.dc);if(P(f))return f;let h=f.right.property,y=kd(
h,t.dc,fi(s,!0));if(ly(y))return e.arguments.length>0?y(d,e.arguments[0],t):R(void 0);if(y===Zo){if(e.arguments.length>0){
let T=e.arguments.length>1?le(e.arguments[1],t,s):R(void 0);return P(T)?T:Zo(d,e.arguments[0],t,T.right)}return R(void 0)}
let b;if(d!=null){if(b=d[h],cs(b)){let T=Td(e.arguments,t,s);return P(T)?T:us(b,T.right)}if(typeof b=="function"){let T=b.
bind(d),S=[];for(let E of e.arguments){let _=le(E,t,s);if(P(_))return _;S.push(_.right)}try{return R(T(...S))}catch(E){let _=E instanceof
Error?E.message:String(E);return Ce(yt(`Error invoking ${h}(): ${_}`,o))}}}if(typeof y=="function"){let T=[d];for(let S of e.
arguments){let E=le(S,t,s);if(P(E))return E;T.push(E.right)}try{return R(y(...T))}catch(S){let E=S instanceof Error?S.message:
String(S);return Ce(yt(`Error invoking ${h}(): ${E}`,o))}}return R(void 0)}let l=le(e.callee,t,fi(s,!0));if(P(l))return l;
let c=l.right;if(cs(c)){let u=Td(e.arguments,t,s);return P(u)?u:us(c,u.right)}if(Ip(c)){if(Pl.has(c.key))return R(void 0);
let u=Td(e.arguments,t,s);return P(u)?u:ob(c,u.right,t,e)}if(typeof c=="function"){if(ly(c)){let d=le(e.arguments[0],t,s);
return P(d)?d:c(d.right,e.arguments[1],t)}if(c===Zo){let d=le(e.arguments[0],t,s);if(P(d))return d;let f=e.arguments.length>
2?le(e.arguments[2],t,s):R(void 0);return P(f)?f:Zo(d.right,e.arguments[1],t,f.right)}let u=[];for(let d of e.arguments){
let f=le(d,t,s);if(P(f))return f;u.push(f.right)}try{return R(c(...u))}catch(d){let f=s$(e.callee),h=d instanceof Error?
d.message:String(d);return Ce(yt(`Error invoking ${f}(): ${h}`,o))}}return R(void 0)}if(vv(e))return R(t.thisContext);if(Ar(
e))return R(kd(e.name,t.dc,r));if(is(e)){let{object:s}=e,l=Ld(e,t.dc);if(P(l))return l;let c=l.right,u=le(s,t,k$(fi(r,!1),
c));if(P(u))return u;let d=u.right;if(Fe(d)){if(c.type==="computed"){let f=Number(c.property);return isNaN(f)?R(void 0):
R(d[f])}return R(d.map(f=>rt(f)?f[c.property]:void 0))}if(rt(d))return R(d[c.property]);if(Lt(d)&&c.type!=="computed"&&c.
property==="length")return R(d.length);if(d!=null&&typeof d=="object"){let f=d[c.property];return R(typeof f=="function"?
f.bind(d):f)}return R(void 0)}if(Tv(e)){let s=[],{quasis:l,expressions:c}=e;for(let u=0;u<l.length;u++){let d=l[u],f=(i=
typeof d.value=="string"?d.value:(a=d.value)==null?void 0:a.cooked)!=null?i:"";if(s.push(f),u<c.length){let h=le(c[u],t,
r);if(P(h))return h;s.push(dt(h.right))}}return R(s.join(""))}if(I_(e)){let s=le(e.tag,t,fi(r,!0));if(P(s))return s;let l=s.
right;if(typeof l!="function")return R(void 0);let{quasis:c,expressions:u}=e.quasi,d=c.map(y=>{var b,T;return(T=typeof y.
value=="string"?y.value:(b=y.value)==null?void 0:b.cooked)!=null?T:""}),h=[Object.assign([...d],{raw:d.slice()})];for(let y of u){
let b=le(y,t,r);if(P(b))return b;h.push(b.right)}return R(l(...h))}if(wv(e)){let s=[];for(let l of e.elements)if(l===null)
s.push(void 0);else if(ty(l)){let c=le(l.argument,t,r);if(P(c))return c;let u=c.right;Fe(u)&&s.push(...u)}else{let c=le(
l,t,r);if(P(c))return c;s.push(c.right)}return R(s)}if(kv(e)){let s={},{properties:l}=e;for(let c of l){if(ty(c)){let h=le(
c.argument,t,r);if(P(h))return h;let y=h.right;rt(y)?Object.assign(s,y):Fe(y)&&y.forEach((b,T)=>{s[String(T)]=b});continue}
let u=c.key,d=!!c.computed,f;if(!d&&Ar(u))f=u.name;else if(!d&&Fl(u))f=String(u.value);else{let h=le(u,t,r);if(P(h))return h;
f=String(h.right)}if(c.shorthand)s[f]=kd(f,t.dc,r);else{let h=le(c.value,t,r);if(P(h))return h;s[f]=h.right}}return R(s)}
return Sv(e)?R(ib(e,t)):Ce(yt(`Unsupported expression: ${e.type}`,o))},Ld=(e,t)=>{let{computed:r}=e,n=l$(e,t);return P(n)?
n:R({type:r?"computed":"static",property:n.right})},l$=(e,t)=>{let{property:r,computed:n}=e;if(!n&&Ar(r))return R(r.name);
let a=le(r,{dc:t,setter:void 0});return P(a)?a:R(String(a.right))},kd=(e,t,r)=>{let n=t(e,r);if(n!==void 0&&(!r.isCall||
Wi(n)||Ip(n)||cs(n)))return n;if(r.isCall){let a=db.get(e);if(a)return a;if(e==="reduce")return Zo}if(e in Wl&&!(!r.isCall&&
lb.has(e)))return Wl[e]},lb=new Set(["html","keys","values","entries","first","last","progressBar","progressRing","spark\
line"]),cb=(e,t,r)=>{var n;let a=oc(e,{[t]:r});return a.letBound=new Set([...(n=e.letBound)!=null?n:[],t]),a},oc=(e,t)=>{
let r=e.letBound;if(r){let n=Object.keys(t).filter(a=>r.has(a));if(n.length>0){let a=new Set(r);for(let i of n)a.delete(
i);r=a}}return{dc:lc(e.dc,t),setter:e.setter,thisContext:e.thisContext,memo:e.memo,asyncHosts:e.asyncHosts,syncHosts:e.syncHosts,
letBound:r}},oa=(e,t,r)=>{var n;let a=(n=_p[r])!=null?n:[];if(Sv(e)){let i=ib(e,t);return o=>us(i,o)}if(Ar(e)&&!a.includes(
e.name)){let i=le(e,t,fi(un,!0));if(!P(i)&&cs(i.right)){let o=i.right;return s=>us(o,s)}if(!P(i)&&Ip(i.right)){let o=i.right;
return s=>ob(o,s,t,e)}}return(i,o)=>{let s={};for(let l=0;l<a.length;l++)s[a[l]]=i[l];return o&&Object.assign(s,o),le(e,
oc(t,s),un)}},c$=(e,t,r)=>{if(!Lt(e))return R("");let n=oa(t,r,"forEach"),a=[],i=e.split(`
`);for(let o=0;o<i.length;o++){let s=n([i[o],o,i]);if(P(s))return s;a.push(String(s.right))}return R(a.join(""))},u$=(e,t,r)=>{
if(!Fe(e))return R([]);let n=oa(t,r,"filter"),a=[];for(let i=0;i<e.length;i++){let o=e[i],s=n([o,i]);if(P(s))return s;s.
right&&a.push(o)}return R(a)},d$=(e,t,r)=>{if(!Fe(e))return R([]);let n=oa(t,r,"map"),a=[];for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(P(o))return o;a.push(o.right)}return R(a)},Zo=(e,t,r,n)=>{if(!Fe(e))return R(n);let a=oa(t,r,"reduce"),i=n;
for(let o=0;o<e.length;o++){let s=a([i,e[o],o]);if(P(s))return s;i=s.right}return R(i)},sc=(e,t,r,n,a,i)=>{if(!Fe(e))return R(
i);let o=oa(t,r,n);for(let s=0;s<e.length;s++){let l=e[s],c=o([l,s]);if(P(c))return c;let u=a(!!c.right,l,s);if(u)return R(
u.value)}return R(i)},p$=(e,t,r)=>sc(e,t,r,"every",n=>n?void 0:{value:!1},!0),f$=(e,t,r)=>sc(e,t,r,"some",n=>n?{value:!0}:
void 0,!1),h$=(e,t,r)=>sc(e,t,r,"find",(n,a)=>n?{value:a}:void 0,void 0),m$=(e,t,r)=>sc(e,t,r,"findIndex",(n,a,i)=>n?{value:i}:
void 0,-1),ub=(e,t,r)=>{if(e){if(Fl(e)&&Lt(e.value)){let n=e.value;return([a])=>R(rt(a)?a[n]:void 0)}return oa(e,t,r)}},
g$=(e,t,r)=>{if(!Fe(e))return R(0);if(!t)return R(e.length);let n=oa(t,r,"count"),a=0;for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(P(o))return o;o.right&&a++}return R(a)},y$=(e,t,r)=>{var n;let a=ub(t,r,"groupBy");if(!Fe(e)||!a)return R({});
let i={};for(let o=0;o<e.length;o++){let s=a([e[o],o]);if(P(s))return s;if(s.right==null)continue;let l=dt(s.right);((n=
i[l])!=null?n:i[l]=[]).push(e[o])}return R(i)},v$=(e,t,r)=>{if(!Fe(e))return R(0);let n=ub(t,r,"sumBy"),a=0;for(let i=0;i<
e.length;i++){let o=n?n([e[i],i]):R(e[i]);if(P(o))return o;o.right!=null&&(a+=Number(o.right))}return R(a)},b$=(e,t,r)=>{
let n=Number(e);if(!Un(n)||isNaN(n)||n<0)return R([]);let a=oa(t,r,"times"),i=[];for(let o=0;o<n;o++){let s=a([o],{it:o});
if(P(s))return s;i.push(s.right)}return R(i)},db=new Map([["forEach",c$],["filter",u$],["map",d$],["times",b$],["every",
p$],["some",f$],["find",h$],["findIndex",m$],["count",g$],["groupBy",y$],["sumBy",v$]]),w$=new Set(db.values()),ly=e=>typeof e==
"function"&&w$.has(e);var pb=(e,t={},r)=>{let n=Rp(e);if(P(n))return n;let a=hb(t);return r!==void 0&&(a.thisContext=r),le(n.right,a,un)},T$=(e,t={},r)=>ze(
pb(e,t,r)),un={memberLookupContexts:[],isCall:!1},k$=(e,t)=>({...e,memberLookupContexts:[t,...e.memberLookupContexts]}),
fi=(e,t)=>({...e,isCall:t}),S$=e=>{let t=A$[e];return t||(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},E$=e=>{let t=$$[e];return t||
(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},Op=(e,t)=>ar(e)&&ar(t)?e.equals(t):e===t,x$=(e,t)=>!Op(e,t),Cp=(e,t)=>e==null&&t==
null?!0:Op(e,t),_$=(e,t)=>!Cp(e,t),Il=(e,t)=>e!=null&&t!=null,A$={"+":(e,t)=>ar(e)&&Un(t)?e.add({days:t}):Un(e)&&ar(t)?t.
add({days:e}):Lt(e)||Lt(t)?(e==null?"":String(e))+(t==null?"":String(t)):ar(e)||ar(t)?String(e)+String(t):Number(e)+Number(
t),"-":(e,t)=>ar(e)&&Un(t)?e.subtract({days:t}):ar(e)&&ar(t)?e.since(t).total("days"):Number(e)-Number(t),"*":(e,t)=>Number(
e)*Number(t),"/":(e,t)=>Number(e)/Number(t),"%":(e,t)=>Number(e)%Number(t),"==":Cp,"===":Op,"!=":_$,"!==":x$,">":(e,t)=>Il(
e,t)&&ea(e,t)>0,">=":(e,t)=>Il(e,t)&&ea(e,t)>=0,"<":(e,t)=>Il(e,t)&&ea(e,t)<0,"<=":(e,t)=>Il(e,t)&&ea(e,t)<=0},$$={"-":e=>-Number(
e),"!":e=>!e,"@":e=>e},cy=e=>{let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.
imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}},R$=e=>{var t;if(typeof e=="number"&&Number.isFinite(e))return e;let r=2166136261;
for(let n of String(e))r^=(t=n.codePointAt(0))!=null?t:0,r=Math.imul(r,16777619);return r>>>0},uy=e=>Fe(e)?e.map(dt):e==
null?[]:[dt(e)],fb=e=>e==null?"":Zv(e)?e.html:Fe(e)?e.map(fb).join(""):xp(dt(e)),dy=e=>(e.length===1&&Fe(e[0])?e[0]:e).filter(
r=>r!=null).map(Number),Sd=(e,t)=>{if(cs(e))return(...r)=>{let n=us(e,r);if(P(n))throw new Error(n.left.message);return n.
right};if(t&&typeof e=="string"&&e.length>0)return r=>rt(r)?r[e]:void 0},Ol=e=>rt(e)?Object.entries(e):Fe(e)?e.flatMap((t,r)=>t==
null?[]:[[String(r),t]]):[],Wl={if:(e,t,r)=>e?t:r,and:(...e)=>e.every(t=>t),or:(...e)=>e.some(t=>t),length:e=>Lt(e)||Fe(
e)?e.length:0,sum:e=>Fe(e)?e.reduce((t,r)=>t+Number(r),0):0,avg:e=>!Fe(e)||e.length===0?0:e.reduce((r,n)=>r+Number(n),0)/
e.length,min:(...e)=>{let t=dy(e);return t.length===0?void 0:Math.min(...t)},max:(...e)=>{let t=dy(e);return t.length===
0?void 0:Math.max(...t)},first:e=>Fe(e)?e[0]:void 0,last:e=>Fe(e)&&e.length>0?e[e.length-1]:void 0,flatten:e=>Fe(e)?e.flat(
1):[],clamp:(e,t,r)=>{if(e==null)return;let n=Number(e);return t!=null&&(n=Math.max(n,Number(t))),r!=null&&(n=Math.min(n,
Number(r))),n},split:(e,t)=>Lt(e)?t===void 0?[e]:e.split(String(t)):[],join:(e,t)=>{if(!Fe(e))return"";let r=t!==void 0?
String(t):",";return e.map(String).join(r)},upper:e=>dt(e).toUpperCase(),lower:e=>dt(e).toLowerCase(),concat:(...e)=>e.reduce(
(t,r)=>Fe(r)?t.concat(r):t,[]),today:NE,dateFrom:e=>{try{return PE(dt(e))}catch{return`<<INVALID_DATE: ${e}>>`}},dateCompare:(e,t)=>DE(
e,t),formatDate:(e,t)=>{try{return jE.is(t)?LE(e,t):Id(e)}catch{return`<<INVALID_DATE: ${e}>>`}},formatPeriod:(e,t)=>BE(
e,t),generateId:(e,t)=>HA({length:Number(e),seed:Un(t)?Number(t):void 0}),regex:(e,t)=>new RegExp(String(e),t?String(t):
void 0),fuzzyMatch:(e,t)=>NA(dt(e),dt(t)),toJson:(e,t)=>{let r=t!==void 0?Number(t):void 0;return JSON.stringify(e,null,
r)},dodgy:e=>{throw new Error("dodgy function failed!!")},rand:(e,t)=>{let r=Number(e);if(!Un(r)||isNaN(r)||r<=0)return 0;
let n=t==null?Math.random():cy(R$(t))();return Math.floor(n*r)},floor:e=>Math.floor(Number(e)),ceil:e=>Math.ceil(Number(
e)),round:e=>Math.round(Number(e)),abs:e=>Math.abs(Number(e)),uniq:(e,t)=>{if(!Fe(e))return[];let r=t!==void 0?e.map(n=>rt(
n)?n[String(t)]:void 0):e;return[...new Set(r)].filter(n=>n!==void 0)},sort:(e,t,r)=>{if(!Fe(e))return[];let n=typeof t==
"string"&&t.length>0,a=s=>n&&rt(s)?s[t]:s,i=e.every(s=>typeof a(s)=="number"),o=r?-1:1;return[...e].sort((s,l)=>{let c=a(
s),u=a(l),d=i?c-u:String(c).localeCompare(String(u));return o*d})},shuffle:(e,t)=>{if(!Fe(e))return[];let r=cy(Number(t)),
n=[...e];for(let a=n.length-1;a>0;a--){let i=Math.floor(r()*(a+1));[n[a],n[i]]=[n[i],n[a]]}return n},handRank:e=>JA(e),replace:(e,t,r)=>{
let n=e==null?"":dt(e);if(t==null)return n;let a=r==null?"":dt(r);return n.split(dt(t)).join(a)},omit:(e,t)=>{if(!rt(e))
return{};let r=new Set(uy(t));return Object.fromEntries(Object.entries(e).filter(([n])=>!r.has(n)))},pick:(e,t)=>{if(!rt(
e))return{};let r=new Set(uy(t));return Object.fromEntries(Object.entries(e).filter(([n])=>r.has(n)))},toMap:(e,t,r)=>{var n;
if(!Fe(e))return{};let a=Sd(t,!0);if(!a)return{};let i=(n=Sd(r,!0))!=null?n:s=>s,o={};return e.forEach((s,l)=>{let c=a(s,
l);c!=null&&(o[dt(c)]=i(s,l))}),o},keys:e=>Ol(e).map(([t])=>t),values:e=>Ol(e).map(([,t])=>t),entries:e=>Ol(e),mapValues:(e,t)=>{
let r=Sd(t,!1);return r?Object.fromEntries(Ol(e).map(([n,a])=>[n,r(a,n)])):{}},escapeHtml:e=>xp(e==null?"":dt(e)),html:(e,...t)=>{
let r=Fe(e)?e.map(dt):[dt(e)],n="";for(let a=0;a<r.length;a++)n+=r[a],a<t.length&&(n+=fb(t[a]));return new Go(n)},progressBar:(e,t)=>new Go(
r$(e,t)),progressRing:(e,t)=>new Go(n$(e,t)),sparkline:(e,t)=>new Go(a$(e,t)),safeCssColor:(e,t)=>t$(e,t),urlEncode:e=>encodeURIComponent(
e==null?"":dt(e)),now:()=>new Date().toISOString().slice(0,19)+"Z",nextOccurrence:WE,byId:()=>{}},I$={forEach:!0,filter:!0,
map:!0,reduce:!0,times:!0,every:!0,some:!0,find:!0,findIndex:!0,count:!0,groupBy:!0,sumBy:!0},O$=new Set([...Object.keys(
Wl),...Object.keys(I$)]),uL=new Set(Object.keys(Wl).filter(e=>!lb.has(e))),Np=e=>typeof e=="function"?e:t=>e[t],lc=(e,t)=>(r,n)=>Object.
prototype.hasOwnProperty.call(t,r)?t[r]:e(r,n),hb=e=>{let t={},r=lc(Np(e),t),n=o$();return{dc:r,setter:(i,o)=>{t[i]=o,ab(
n)},memo:n}},C$=async(e,t,r)=>{let n=Rp(e);if(P(n))return n;let a=hb(t);return a.asyncHosts=r.asyncHosts,a.syncHosts=r.syncHosts,
ln(n.right,a)},ln=async(e,t)=>{var r;if(vi(e)&&e.operator===";"){let a=await ln(e.left,t);return P(a)?a:ln(e.right,t)}if(vi(
e)&&e.operator==="="){let a=await ln(e.right,t);if(P(a))return a;let i=ze(a),o=sb(e.left,i,t,un);return P(o)?o:R(i)}if(Ev(
e)){if((r=t.letBound)!=null&&r.has(e.id))return Ce(yt(`Cannot redeclare let binding '${e.id}'`,e));let a=await ln(e.init,
t);if(P(a))return a;let i=ze(a);return e.body?ln(e.body,cb(t,e.id,i)):R(i)}let n=N$(e);if(n&&t.asyncHosts&&ts(e,t.asyncHosts)){
if(n.kind==="?"&&vi(n.otherwise)&&n.otherwise.operator===";")return Ce(yt("This `cond ? a : b` statement's else-branch i\
s a `;` sequence \u2014 `;` binds looser than `? :`, so it may have swallowed the rest of the script. Wrap the whole conditio\
nal in parentheses \u2014 `(cond ? a : b); next` \u2014 or write it as `cond && a; !cond && (b; c)`.",e));let a=await ln(
n.test,t);if(P(a))return a;let i=ze(a);switch(n.kind){case"?":return ln(i?n.then:n.otherwise,t);case"&&":return i?ln(n.then,
t):R(i);case"||":return i?R(i):ln(n.then,t)}}if(Ql(e)&&Ar(e.callee)&&t.asyncHosts&&e.callee.name in t.asyncHosts){let a=e.
callee.name;for(let o of e.arguments)if(ts(o,t.asyncHosts))return Ce(yt(`Async host call '${a}' has an argument that its\
elf contains an async host call. Async host calls must appear at statement top-level or as the RHS of an assignment, not\
 nested inside other expressions. Bind the inner result to a variable first.`,e));let i=[];for(let o of e.arguments){let s=le(
o,t,un);if(P(s))return s;i.push(ze(s))}try{let o=await t.asyncHosts[a](...i);return R(o)}catch(o){let s=o instanceof Error?
o.message:String(o);return Ce(yt(`Error invoking async host '${a}': ${s}`,e))}}return t.asyncHosts&&ts(e,t.asyncHosts)?Ce(
yt("Async host call appears nested inside another expression. Async host calls must appear at statement top-level, as th\
e RHS of an assignment, or as a branch of a conditional statement (`ok && host()`). Bind the inner result to a variable \
first.",e)):le(e,t,un)},N$=e=>lp(e)?{kind:"?",test:e.test,then:e.consequent,otherwise:e.alternate}:vi(e)&&(e.operator===
"&&"||e.operator==="||")?{kind:e.operator,test:e.left,then:e.right}:null,P$=new Set(["parent"]),ts=(e,t)=>{if(Ql(e)&&Ar(
e.callee)&&e.callee.name in t)return!0;for(let r of Object.keys(e)){if(P$.has(r))continue;let n=e[r];if(py(n)){if(ts(n,t))
return!0}else if(Array.isArray(n)){for(let a of n)if(py(a)&&ts(a,t))return!0}}return!1},py=e=>typeof e=="object"&&e!==null&&
typeof e.type=="string";var D$=(e,t)=>{var r;let n=new Map;for(let i of e){let o=t.get(i);if(!o)continue;let s=n.get(o.y);s?s.add(o.x):n.set(o.y,
new Set([o.x]))}let a=[];for(let i of[...n.keys()].sort((o,s)=>o-s)){let o=[...(r=n.get(i))!=null?r:[]].sort((c,u)=>c-u),
s=o[0],l=o[0];for(let c of o.slice(1)){if(c===l+1){l=c;continue}a.push({y:i,startCol:s,span:l-s+1}),s=c,l=c}o.length>0&&
a.push({y:i,startCol:s,span:l-s+1})}return a},M$=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)if(e.has(r))return!1;
return!0},fy=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)e.add(r)},j$=(e,t)=>{let r=e.get(t.y);r||(r=[],e.set(
t.y,r));for(let a=0;a<r.length;a+=1)if(M$(r[a],t))return fy(r[a],t),a;let n=new Set;return fy(n,t),r.push(n),r.length-1},
L$=(e,t)=>{let r=new Map;for(let i of t)r.set(i.index,{x:i.x,y:i.y});let n=new Map,a=[];for(let i of e)for(let o of D$(i.
slots,r))a.push({recordKey:i.recordKey,...o,lane:j$(n,o)});return a};var F$=e=>e,mb=k(F$,e=>e.objects),gb=k(mb,e=>Bn(e,t=>t.type)),U$=k(mb,e=>Kc(Bn(e,t=>t.type),t=>wt(t,r=>r.id)));var Fd="__span",Ud=e=>{if(typeof e!="object"||e===null)return;let t=e[Fd];if(!(typeof t!="object"||t===null))return t},B$=/^\d{4}-\d{2}-\d{2}([T ]|$)/,
cc=e=>{if(!(!e?.startField||!e?.axis))return{startField:e.startField,axis:e.axis,endField:e.endField,mode:e.mode==="once"?
"once":e.mode==="grid"?"grid":"repeat",slots:e.slots}},wi=(e,t)=>ar(e)&&!ar(t)?ea(e,hy(t)):ar(t)&&!ar(e)?ea(hy(e),t):ea(
e,t),hy=e=>{if(typeof e!="string"||!B$.test(e))return e;try{return Ve.PlainDate.from(e)}catch{return e}},my=(e,t)=>{let r=e[t.
startField];if(r==null||r==="")return;let n=t.endField?e[t.endField]:void 0;return n!=null&&n!==""?wi(n,r)<0?{start:r,end:r}:
{start:r,end:n}:{start:r,end:r}},Pp=(e,t)=>wi(e.start,t)<=0&&wi(e.end,t)>=0,H$=(e,t)=>wi(e.start,t)===0,W$=(e,t,r)=>r===
"once"?H$(e,t):Pp(e,t),q$=(e,t)=>{let r=wi(e.start,t)===0,n=wi(e.end,t)===0;return r&&n?"single":r?"start":n?"end":"midd\
le"},V$=(e,t,r)=>{let{dataType:n,sort:a,whereClause:i,scope:o,source:s,span:l}=t,c=gb(e)[n]||[];(o==="user"||o==="global")&&
s==="storage"&&(c=c.filter(y=>y._scope===o));let u=Y$(c,cc(l),r),d=z$(u,i,r);if(!a)return d;let f=(Array.isArray(a)?a:[a]).
filter(y=>typeof y.field=="string"&&y.field.length>0);return f.length===0?d:[...d].sort((y,b)=>{for(let T of f){let S=y[T.
field],E=b[T.field],_=S==null,O=E==null;if(_&&O)continue;if(_)return 1;if(O)return-1;let M=T.direction==="desc"?-1:1,W=ea(
S,E);if(W!==0)return M*W}return 0})},Y$=(e,t,r)=>{if(!t)return e;if(t.mode==="grid"){let o=[];for(let s of e){let l=my(s,
t);l&&o.push({...s,[Fd]:{start:l.start,end:l.end}})}return o}let n=r(t.axis,{});if(!xe(n)||n.right===void 0)return[];let a=n.
right,i=[];for(let o of e){let s=my(o,t);s&&W$(s,a,t.mode)&&i.push({...o,[Fd]:{start:s.start,end:s.end,position:q$(s,a)}})}
return i},z$=(e,t,r)=>t?e.filter(n=>{let a=r(t,n);return xe(a)&&!!a.right}):e,Gr=k(V,B,(e,t)=>{let{scope:r,isIteration:n,
node:a}=t,{parent:i}=r,o=Uv(e.def,a);if(o)return n&&i?B(e,_r([i.key,Nn(i.node,a)])):o.isRepeating?B(e,`${r.key}`):B(e,_r(
[r.key,Nn(r.node,o)]))}),K$=Ai(Jr.unknown,"compute"),G$=Ai(Jr.union([Jr.number,Jr.undefined]),"maxLength"),gy=Ai(Jr.union(
[Jr.number,Jr.undefined]),"pageSize"),Xo=(e,t,r,n)=>{let a=r.isFormula?n(e,r.value,t.key):R(r.value);return ic(a,r.targetCodec,
r.name)},J$=e=>{let t=k(V,TA,B,(a,i,o)=>{let{node:s,scope:l}=o,c=s.data;if(Ll(c))if(o.isIteration){let d=Gr(a,o.key);if(d){
let f=r(a,d.key);if(xe(f)&&Array.isArray(f.right))return R(f.right[l.index])}}else return R(V$(i,c,(f,h)=>e(a,f,l.key,h)));
let u=K$(s);return Xo(a,o,u,e)}),r=k(V,B,(a,i)=>{let{key:o}=i;if(i.node.type===aa)return R(i.node.value);let l=bi(a)[o];
return l?R(l?.value):t(a,i.key)}),n=k(V,B,ac,(a,i,o)=>{var s;let{key:l,node:c}=i,u=(s=o[l])==null?void 0:s.length,d=G$(c),
f=ze(Xo(a,i,d,e)),h=c.data;if(Ll(h)){let T=r(a,i.key);if(xe(T)&&Array.isArray(T.right)){let S=T.right.length,E=f!==void 0?
Math.min(S,f):S,_=gy(c),O=ze(Xo(a,i,_,e));return R(u!==void 0?Math.min(E,u):O!==void 0?Math.min(E,O):E)}}let y=gy(c),b=ze(
Xo(a,i,y,e));if(b!==void 0){if(u!==void 0){let T=f!==void 0?Math.min(u,f):u;return R(T)}return R(b)}return R(u!==void 0?
u:f??0)});return{selectValue:r,selectLength:n,selectComputedValue:t}},Z$=new Set(["rand","generateId","today","dodgy","b\
yId","now"]),X$=(e,t)=>e==="rand"&&t.length>=2,yy=new Set(Object.keys(_p)),Q$=new Set(["includes","indexOf","lastIndexOf",
"slice","join","concat","split","toLowerCase","toUpperCase","trim","startsWith","endsWith","replace","replaceAll","subst\
ring","charAt","padStart","padEnd","repeat","toFixed","localeCompare"]),nr=e=>typeof e=="object"&&e!==null&&"type"in e&&
typeof e.type=="string",eR=e=>{if(typeof e=="string")return e.startsWith("@")?e.slice(1).trim():e},tR=e=>(typeof e=="str\
ing"?e:"").split(",").map(r=>r.trim()).filter(Boolean),yb=e=>{let t=e.params;return Array.isArray(t)?t.filter(nr).filter(
r=>r.type==="Identifier"&&typeof r.name=="string").map(r=>r.name):[]},vy=(e,t)=>{var r;return nr(t)&&t.type==="ArrowFunc\
tionExpression"?yb(t):(r=_p[e])!=null?r:[]},rR=(e,t,r,n=new Set)=>{let a=new Set,i;try{i=de(e)}catch{return{selfSafe:!1,
deps:a}}let o=!0,s=()=>{o=!1},l=(u,d)=>{d.has(u)||u!=="$data"&&(n.has(u)||s())},c=(u,d)=>{if(o){if(Array.isArray(u)){for(let f of u)
c(f,d);return}if(nr(u))switch(u.type){case"Literal":return;case"Identifier":{typeof u.name=="string"&&l(u.name,d);return}case"\
ThisExpression":s();return;case"TaggedTemplateExpression":{let f=u.tag;if(!(nr(f)&&f.type==="Identifier"&&f.name==="html"&&
!d.has("html")&&!r.has("html"))){s();return}let y=u.quasi,b=nr(y)?y.expressions:void 0;if(Array.isArray(b))for(let T of b)
c(T,d);return}case"BinaryExpression":{let f=u.operator;if(f===";"||f==="="){s();return}c(u.left,d),c(u.right,d);return}case"\
UnaryExpression":c(u.argument,d);return;case"ConditionalExpression":c(u.test,d),c(u.consequent,d),c(u.alternate,d);return;case"\
MatchExpression":{let f=u.scrutinee;f!==void 0&&c(f,d);let h=u.arms;if(!Array.isArray(h))return;for(let y of h){if(!nr(y))
continue;let b=y.test;nr(b)&&b.type==="Identifier"&&b.name==="_"||c(b,d),c(y.consequent,d)}return}case"MemberExpression":{
c(u.object,d),u.computed&&c(u.property,d);return}case"ArrayExpression":{let f=u.elements;if(Array.isArray(f))for(let h of f)
h!==null&&(nr(h)&&h.type==="SpreadElement"?c(h.argument,d):c(h,d));return}case"ObjectExpression":{let f=u.properties;if(!Array.
isArray(f))return;for(let h of f){if(!nr(h))continue;if(h.type==="SpreadElement"){c(h.argument,d);continue}let y=!!h.computed,
b=h.key;if(y&&c(b,d),h.shorthand){nr(b)&&b.type==="Identifier"&&typeof b.name=="string"&&l(b.name,d);continue}c(h.value,
d)}return}case"TemplateLiteral":{let{expressions:f}=u;if(Array.isArray(f))for(let h of f)c(h,d);return}case"LetExpressio\
n":{let f=u.id;c(u.init,d);let h=u.body;h!==void 0&&c(h,typeof f=="string"?new Set([...d,f]):d);return}case"ArrowFunctio\
nExpression":c(u.body,new Set([...d,...yb(u)]));return;case"CallExpression":{let f=u.callee,h=u.arguments,y=Array.isArray(
h)?h:[];if(nr(f)&&f.type==="Identifier"){let b=typeof f.name=="string"?f.name:"";if(d.has(b)){s();return}if(yy.has(b)){y.
forEach((T,S)=>{if(S===1){let E=new Set([...d,...vy(b,T)]),_=nr(T)&&T.type==="ArrowFunctionExpression"?T.body:T;c(_,E)}else
c(T,d)});return}if(r.has(b))a.add(b);else if(!O$.has(b)||Z$.has(b)&&!X$(b,y)){s();return}for(let T of y)c(T,d);return}if(nr(
f)&&f.type==="MemberExpression"){if(f.computed){s();return}let b=f.property,T=nr(b)&&typeof b.name=="string"?b.name:"";if(c(
f.object,d),yy.has(T)){y.forEach((S,E)=>{if(E===0){let _=new Set([...d,...vy(T,S)]),O=nr(S)&&S.type==="ArrowFunctionExpr\
ession"?S.body:S;c(O,_)}else c(S,d)});return}if(!Q$.has(T)){s();return}for(let S of y)c(S,d);return}s();return}default:s();
return}}};return c(i,new Set(t)),{selfSafe:o,deps:a}},nR=(e,t=new Set)=>{let r=new Map,n=new Set;for(let l of e)r.has(l.
name)&&n.add(l.name),r.set(l.name,l);let a=new Set([...r.keys()].filter(l=>!n.has(l))),i=new Map;for(let l of a){let c=r.
get(l),u=eR(c.compute);if(u===void 0){i.set(l,{selfSafe:!1,deps:new Set});continue}i.set(l,rR(u,tR(c.parameters),a,t))}let o=new Set,
s=!0;for(;s;){s=!1;for(let[l,c]of i)o.has(l)||!c.selfSafe||[...c.deps].every(u=>o.has(u))&&(o.add(l),s=!0)}return o},by=new WeakMap,
vb=(e,t)=>{if(e.type===na&&t.push({name:e.name,compute:e.compute,parameters:e.parameters}),Array.isArray(e.children))for(let r of e.
children)vb(r,t)},bb=(e,t)=>{if(e.type===aa&&typeof e.name=="string"&&t.add(e.name),Array.isArray(e.children))for(let r of e.
children)bb(r,t)},aR=e=>{let t=by.get(e);if(t)return t;let r=[];vb(e,r);let n=new Set;bb(e,n);let a=nR(r,n);return by.set(
e,a),a},wy={objects:[]},Ed=new Set,iR=(e,t,r,n,a)=>{let i=t.scope,o=S=>{let E=r(e,S);if(xe(E))return E.right},s=S=>{var E;
if(ny(i))return;let _=_r([i.key,S]),O=(E=bi(e)[_])==null?void 0:E.value;if(O!==void 0)return O;let M=o(i.key);if(rt(M)){
let W=M;if(S in W)return W[S]}},l=()=>{let S=i;for(;S;){let E=Ud(o(S.key));if(E)return E;S=S.parent}},c=()=>{let S=i;for(;S;){
let E=Ud(o(S.key));if(E)return u(S,E);S=S.parent}},u=(S,E)=>{var _;let O=Kr(e,S.key);if(!xe(O))return;let M=O.right,W=cc(
(_=M.node.data)==null?void 0:_.span);if(!W||W.mode!=="grid"||!W.slots)return;let G;try{let Y=bd(e.def,M.node,W.slots);G=
Nl(e,S.key,Y).key}catch{return}let Z=n(e,G);if(!Array.isArray(Z))return;let H={start:E.start,end:E.end},we=0;for(let Y=0;Y<
Z.length;Y+=1){let te=a(e,W.axis,`${G}[${Y}]`);!xe(te)||te.right===void 0||Pp(H,te.right)&&(we+=1)}return we},d=S=>{var E,
_,O,M,W,G,Z,H,we,Y,te,_e,pe;if(S==="$index"){let ie=ny(i)?void 0:i.index;return R(ie)}if(S==="$parentIndex")return R((E=
i.parent)==null?void 0:E.index);if(S==="$scopeKey")return R(i.key);if(S==="$state")return R(e);if(S==="$data")return R(gb(
(_=e.repo)!=null?_:wy));if(S==="$spanStart"||S==="$spanEnd"||S==="$spanPosition"){let ie=l();return R(S==="$spanStart"?ie?.
start:S==="$spanEnd"?ie?.end:ie?.position)}if(S==="$spanLength")return R(c());if(S==="$rows")return R(ot=>{if(!Lt(ot))return;
let lt,Ir;try{let or=bd(e.def,t.node,ot),C=Nl(e,i.key,or).key;lt=n(e,C),Ir=o(C)}catch{return}if(Array.isArray(lt))return lt.
map((or,C)=>{let ae=Array.isArray(Ir)?Ir[C]:void 0;return rt(ae)&&rt(or)?{...ae,...or}:or??ae})});if(S==="$args")return R(
(O=wp(e))!=null?O:{});if(S==="$speech"){let ie=xr(e),ot=ie?.speech;return R(ot??{text:null,lang:null})}if(S==="$variant"){
let ie=xr(e);return R(ie?.variant)}return S==="$now"?R((M=xr(e))==null?void 0:M.now):S==="$email"?R((W=xr(e))==null?void 0:
W.$email):S==="$username"?R((G=xr(e))==null?void 0:G.$username):S==="$userKey"?R((Z=xr(e))==null?void 0:Z.$userKey):S===
"$authKind"?R((H=xr(e))==null?void 0:H.$authKind):S==="$authUid"?R((we=xr(e))==null?void 0:we.$authUid):S==="$connection\
s"?R((Y=xr(e))==null?void 0:Y.$connections):S==="$social"?R((te=xr(e))==null?void 0:te.$social):S==="$isOrgAdmin"?R((_e=
xr(e))==null?void 0:_e.$isOrgAdmin):S==="$orgUser"?R((pe=xr(e))==null?void 0:pe.$orgUser):Ce("not_resolved")},f=S=>{let E=xr(
e),_=E?.[S];return _!==void 0?R(_):Ce("not_resolved")},h=(S,E,_)=>{var O,M,W;if(Ed.has(_)){let Z=(O=bi(e)[_])==null?void 0:
O.value;return Z!==void 0?Z:s(S)}Ed.add(_);try{let G=Kr(e,_);if(P(G))return s(S);let{key:Z,node:H}=G.right;if(H.type===na&&
E.isCall)return{__orgFunction:!0,compute:H.compute,parameters:H.parameters,key:Z,memoSafe:aR(e.def).has(H.name)};let we=o(
Z);if(hp(H)){let{memberLookupContexts:Y}=E,_e=(H.isRepeating?((M=Y[0])==null?void 0:M.type)==="computed":((W=Y[0])==null?
void 0:W.type)!=="computed")?Y.map(ie=>ie.property):void 0,pe=n(e,Z,_e);return we===void 0?pe:Array.isArray(we)&&Array.isArray(
pe)?we.map((ie,ot)=>{let lt=pe[ot];return rt(lt)&&rt(ie)?{...lt,...ie}:ie??lt}):rt(we)&&rt(pe)?{...pe,...we}:we}else if(we===
void 0){let Y=s(S);if(Y!==void 0)return Y}return we}finally{Ed.delete(_)}},y=(S,E,_=i)=>{var O;return(O=b(S,E,_))==null?
void 0:O.value},b=(S,E,_)=>{let{key:O,isDeclared:M}=Nl(e,_.key,S),W=G=>{var Z;return(Z=bi(e)[G])==null?void 0:Z.value};if(M){
let G=h(S,E,O);if(G!==void 0)return{value:G,isStored:W(O)!==void 0}}else if(_.parent){let G=W(O);if(G!==void 0)return{value:G,
isStored:!0};let Z=b(S,E,_.parent);if(Z?.isStored)return Z;let H=h(S,E,O);if(H!==void 0)return{value:H,isStored:!1};if(Z!==
void 0)return Z}else{let G=h(S,E,O);if(G!==void 0)return{value:G,isStored:W(O)!==void 0}}},T=(S,E)=>{var _,O;return!Lt(S)||
!Lt(E)||(O=U$((_=e.repo)!=null?_:wy)[S])==null?void 0:O[E]};return(S,E)=>{let _=d(S);if(xe(_))return _.right;let O=f(S);
if(xe(O))return O.right;let M=bd(e.def,t.node,S),W=y(M,E);if(W!==void 0)return W;if(S==="byId")return T}},oR=e=>{let t=o=>o.
type===mr&&o.isRepeating?[o]:[],r=o=>ws(o).concat(t(o)),n=k(B,o=>r(o.node)),a=k(V,B,(o,s)=>{if(s.node.isOwnScope)return[
B(o,`${s.key}[0]`)];let l=ze(e(o,s.key));return Yc(l,c=>B(o,`${s.key}[${c}]`))}),i=k(V,B,(o,s)=>n(o,s.key).map(l=>{let c=Nn(
o.def,l);return B(o,`${s.scope.key}.${c}`)}));return{selectChildIterationPointers:a,selectChildNodePointers:i}},uc=e=>!!(e.
node.isRepeating&&!e.isIteration),Dp=e=>e.node.type===mr?e.node:{nodeTypes:{},rootType:""},wb=e=>mp(e.node)&&!e.isIteration,
sR=e=>!!e.node.isOwnScope&&!e.isIteration,Tb=e=>{let{isIteration:t,node:r}=e;return t&&r.type===mr},fn=e=>e.node.type===
mr&&e.scope.node!==e.node,Oa=e=>fn(e)||Tb(e),lR=e=>nA(e.node.type),cR=e=>{let{key:t,node:r}=e;return fn(e)?t:`${t}.${r.name}`},
Ty=e=>sA(e.node)&&!e.isIteration,uR=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),ky=e=>!(!hp(e.node)||e.node.isRepeating||
e.node.isOwnScope),dR=(e,t,r)=>{let n=(l,c,u,d=[])=>{var f;let{key:h,node:y}=c,b=d.length?d.slice(1):[];if(!y.isTransient){
if(Mv(y)){let T=e(l,h);return xe(T)?T.right:void 0}if(wb(c)&&!u){if(c.node.isOwnScope){let T=a(l,B(l,`${h}[0]`),d);return d.
length===0&&Object.keys(T).length===0?void 0:T}if(d.length&&/^\d+$/.test(d[0])){let T=d[0],S=B(l,`${h}[${T}]`),E=a(l,S,b);
return{[T]:E}}else if(c.node.isRecord){let T=(f=c.node.recordKey)!=null?f:"key",S=typeof c.node.recordValue=="string"?c.
node.recordValue:void 0,E=t(l,h);return S!==void 0&&E.length===0?void 0:E.reduce((_,O)=>{let{[T]:M,...W}=a(l,O,b);if(typeof M!=
"string")return _;if(S===void 0)return _[M]=W,_;let G=W[S];return G!==void 0&&(_[M]=G),_},{})}else return t(l,h).map(S=>a(
l,S,b))}return a(l,c,d)}},a=(l,c,u)=>{let d={},f=u.length?u.slice(1):[],h=(b,T)=>{let{node:S}=b,{name:E}=S,_=fn(b)&&c.node!==
b.node,O=n(l,b,_,T);O!==void 0&&(ky(b)?Object.assign(d,O):d[E]=O)},y=r(l,c.key);return u.length?(y.forEach(b=>{b.node.name===
u[0]?h(b,f):ky(b)&&h(b,u)}),d):(y.forEach(b=>h(b,f)),d)},i=(l,c,u)=>n(l,c,fn(c),u),o=k(V,B,dA,i),s=k(V,B,(l,c)=>{let u=i(
l,c);return uR(u)?u:{}});return{selectOutput:o,selectOutputObject:s}};var pR=(e,t,r,n)=>n,$r=k(V,it,cA,pR,(e,t,r="",n)=>{let a=kb(e,r),i=n?lc(Np(a),n):a;return pb(t,i,n)}),kb=k(V,B,(e,t)=>iR(
e,t,ir,mR,(r,n,a)=>$r(r,n,a))),fR=(e,t,r,n,a)=>{let i=kb(e,t),o=a?lc(Np(i),a):i;return C$(r,o,n)},{selectValue:ir,selectComputedValue:hR,
selectLength:Pa}=J$($r),{selectChildIterationPointers:Sb,selectChildNodePointers:Eb}=oR(Pa),{selectOutput:mR,selectOutputObject:Mp}=dR(
ir,Sb,Eb),Da=e=>k(ir,t=>ic(t,e,"value")),xb=e=>k(ir,t=>jA(t,e,"value")),gR=e=>k(hR,t=>ic(t,e,"value")),jp=xb(F),_b=Da(ft.union(
[ft.undefined,ft.array(ft.string)])),yR=Da(ft.union([ft.undefined,ft.array(ft.number)])),yL=xb(ft.string),vR=Da(gr),Ab=Da(
Ie),bR=Da(ft.union([ft.undefined,Cn])),wR=gR(ft.union([ft.undefined,Cn])),TR=Da(ft.union([ft.undefined,Kl])),Lp=Da(Zx),kR=(e,t,r,n)=>ic(
$r(e,r,t.scope.key),n,r),kt=k(V,B,(e,t)=>wb(t)?Sb(e,t.key):Eb(e,t.key)),$b=k(V,B,(e,t)=>{let r=sR(t)?`${t.key}[0]`:t.key;
return kt(e,r)}),Ca=k(V,Gr,pA,(e,t,r=Qo)=>{if(t)return r?.(t)?t:Ca(e,t.key,r)}),bL=k(V,B,Gr,(e,t,r)=>r?kt(e,r.key):[t]),
Rb=k(V,B,kp,(e,t,r)=>{if(t.key===r.key)return!0;let n=Gr(e,r.key);return n?Rb(e,t.key,n.key):!1}),x=(e,t,r)=>{let n=Ai(e,
t,r),a=k(OA,SR.has(t)?i=>ER(n(i)):n);return k(V,B,a,(i,o,s)=>Xo(i,o,s,$r))},SR=new Set(["htmlTemplate"]),ER=e=>!e.isFormula&&
Ib.string.is(e.value)&&Av(e.value)?{name:e.name,isFormula:!0,value:cp(up(e.value)),targetCodec:e.targetCodec}:e,xR=x(Ss.string,
"label",e=>Nv(e.name)),_R=x(Ss.unknown,"iterationLabel"),AR=k(V,B,_R,(e,t,r)=>{let{node:n}=t;if(P(r))return r;let a=r.right;
if(a!=null&&a!=="")return R(String(a));let i=yA(n);return kR(e,t,i,Ss.string)}),Fp=k(V,B,(e,t)=>{let{key:r,isIteration:n}=t;
return n?AR(e,r):xR(e,r)}),$R=(...e)=>t=>e.every(r=>r(t)),xd=(e,t)=>e===t?e:$R(e,t),Ob=(e,t)=>({direction:e.direction,include:xd(
e.include,t.include),traverseChildren:xd(e.traverseChildren,t.traverseChildren),traverseParent:xd(e.traverseParent,t.traverseParent)}),
Cb=e=>(t,r)=>{let n=Gr(t,r.key);if(!n)return;let a=kt(t,n.key),i=a.indexOf(r);if(i===-1)return;let s=a[i+(e==="back"?-1:
1)];if(s)return s},RR=Cb("forward"),IR=Cb("back"),Nb=(e,t,r)=>{if(!r.traverseChildren(t))return t;let n=kt(e,t.key),a=Ws(
n);return a?Nb(e,a,r):t},OR=(e,t,r)=>{let n=IR(e,t);return n?Nb(e,n,r):Gr(e,t.key)},Pb=(e,t,r)=>{let n=RR(e,t);if(n)return n;
let a=Gr(e,t.key);if(a&&r.traverseParent(a))return Pb(e,a,r)},Db=k(V,B,Lv,(e,t,r=ec)=>OR(e,t,r)),Up=k(V,B,Lv,(e,t,r=ec)=>{
if(r.traverseChildren(t)){let n=kt(e,t.key);if(n.length>0)return n[0]}return Pb(e,t,r)}),Ti=e=>{let{node:t}=e;switch(t.type){case"\
screen":return!0;default:return!1}},CR=k(V,e=>kt(e,"").filter(Ti)),Es=(e,t,r)=>{let n=r.direction==="back"?Db(e,t,r):Up(
e,t,r);if(n)return r.include(n)?n:Es(e,n.key,r)},Mb=(e,t,r)=>{let n=[],a=t;for(;a!==void 0;){let i=r.direction==="back"?
Db(e,a,r):Up(e,a,r);if(!i)break;r.include(i)&&n.push(i),a=i.key}return n},dc=e=>k(V,it,(t,r)=>Es(t,r,e)),SL=dc(Dn({include:Ti,
direction:"back"})),NR=dc(Dn({include:Ti,direction:"forward"})),PR=k(V,it,(e,t)=>{let r=Ca(e,t,Ti);if(!r){let n=Up(e,"",
ec);return n||Sp(e)}return r}),jb=k(V,bp,(e,t)=>{let r=Kr(e,t);return P(r)?(console.warn(`[orgicore] cursor "${t}" does \
not resolve in the current app def \u2014 falling back to the home screen (${r.left}).`),Sp(e)):r.right}),_d=e=>e.node.type===
ps,DR=(e,t)=>{let r=_d(t)?t:void 0,n=Ca(e,t.key,_d);for(;n;)r=n,n=Ca(e,n.key,_d);return r},Bp=k(V,jb,(e,t)=>{if(Ti(t))return t;
let r=Ca(e,t.key,Ti);if(r)return r;let n=DR(e,t);return n||NR(e,t.key)||Sp(e)}),EL=k(vp,e=>Ws(e)),MR=k(V,Bp,(e,t)=>PR(e,
t.key).key),jR=e=>Dn({traverseParent:t=>e!==t}),LR=k(B,jR),FR=k(LR,e=>Ob(e,Dn({include:lR}))),UR=x(Yy,"variant","basic"),
BR=x(zx,"variant"),HR=x(gr,"pageSize"),WR=x(gr,"maxLength"),Lb=x(Ie,"required"),qR=x(Ie,"hidden"),VR=x(ue(Yl),"size"),YR=x(
ue(cn(rp)),"validation"),zR=x(ue(tp),"imageOutputOptions"),KR=x(F,"pluginName"),Fb={maxColumns:1},GR=x(Zd,"layout",Fb),Ma=k(
B,qR,(e,t)=>{let{node:{type:r}}=e;return(r===xi||r===na||r===aa)&&xe(t)&&t.right===void 0?R(!0):t}),JR=k(B,GR,(e,t)=>e.isIteration?
R(Fb):t),ZR=x(ev,"formConfig"),$L=x(Qd,"containerStyle",Ly),RL=x(Si,"data",Ly),XR=x(ue(Ri.array(Vl)),"pluginParams"),Ii=k(
Fp,Ma,(e,t)=>({label:e,hidden:t})),Hp=k(ir,Lb,(e,t)=>P(t)?t:P(e)?R(!1):R(!!t.right&&Ub(e.right))),Wp=k(V,B,YR,ir,(e,t,r,n)=>{
if(P(r))return r;if(P(n)||Ub(n.right))return R(void 0);let a=QE(r.right);for(let i of a){let o=$r(e,i.expression,t.scope.
key);if(P(o))return Ce(`error evaluating validation rule "${i.expression}": ${o.left}`);if(!o.right)return R(QR(e,i.errorMessage,
t.scope.key))}return R(void 0)}),QR=(e,t,r)=>{if(!t.startsWith(Ra))return t;let n=cp(t),a=$r(e,n,r);return P(a)||a.right==
null||a.right===""?n:String(a.right)},eI=x(F,"help"),tI=x(F,"placeholder"),rI=x(F,"deepHelp"),nI=x(ue(Ri.array(Ri.string)),
"examples"),aI=x(Ie,"aiEnabled"),Ub=e=>typeof e=="string"?e.trim()==="":Array.isArray(e)?e.length===0:e==null,pc=k(Ii,Hp,
Lb,Wp,eI,tI,rI,nI,VR,aI,(e,t,r,n,a,i,o,s,l,c)=>({...e,missingRequired:t,required:r,errorMessage:n,help:a,placeholder:i,deepHelp:o,
examples:s,size:l,aiEnabled:c})),Bb=k(pc,yR,(e,t)=>({...e,value:t})),Hb=k(pc,_b,(e,t)=>({...e,value:t})),Wb=k(Ii,bR,wR,ZR,
(e,t,r,n)=>({...e,currentValue:t,computedValue:r,config:n})),iI=x(Ix,"variant","single"),oI=x(Kd,"idiom","select"),sI=x(
Ri.array(rv),"pickerValues"),lI=e=>typeof e=="string"?{id:e,label:e}:e,cI=k(sI,e=>P(e)?e:R(e.right.map(lI))),fc=k(pc,iI,
cI,(e,t,r)=>({...e,variant:t,pickerValues:r})),uI=k(fc,jp,oI,(e,t,r)=>({...e,value:t,idiom:r})),dI=k(fc,_b,(e,t)=>({...e,
value:t})),pI=e=>fn(e)?"":`${e.key}.`,qb=e=>t=>`${pI(t)}${e}`,fI=qb("value"),hI=qb("expanded"),mI=k(B,fI),gI=k(B,hI),qp=k(
V,mI,TR),Vb=k(V,gI,Ab),Yb=k(B,Ii,qp,Vb,(e,t,r,n)=>{let a=fn(e);return{...t,value:r,expanded:n,isRoot:R(a)}}),IL=k(Ii,be),
OL=k(pc,be),yI=k(Wb,be),CL=k(Bb,be),NL=k(Hb,be),PL=k(fc,be),DL=k(uI,be),ML=k(dI,be),vI=k(Yb,be),bI=k(KR,XR,(e,t)=>({name:e,
params:t})),wI=k(bI,be),jL=k(V,B,wI,(e,t,{name:r,params:n=[]})=>{let a={};for(let i of n)if(i.type==="static"&&(a[i.name]=
i.value),i.type==="dynamic"){let o=$r(e,i.formula,t.scope.key);if(P(o))return Ce(`Error evaluating plugin "${r}" param "${i.
name}": ${o.left}`);a[i.name]=o.right}return R(a)});var LL=k(V,B,HR,WR,(e,t,r,n)=>{let{node:a,key:i,isIteration:o}=t;if(o)return;let s=ze(r),l=ze(n);if(s===void 0)return;let c=l??
1/0,u=a.data;if(Ll(u)){let f=ir(e,i);if(xe(f)&&Array.isArray(f.right)){let h=f.right.length;c=l!==void 0?Math.min(h,l):h}}
let d=ze(Pa(e,i));return{currentLength:d,totalLength:c,hasMore:d<c,pageSize:s}}),ki={selectAppNodeVariant:x(Ux,"variant",
"folder"),selectFlowStepVariant:x(Bx,"variant","aiQuery"),selectHidden:Ma,selectLabel:Fp,selectMissingRequired:Hp,selectValidationError:Wp},
FL=x(F,"name"),UL=x(F,"label"),BL=x(Ie,"isRepeating"),HL=x(Ie,"isOwnScope"),WL=x(Ie,"isRecord"),qL=x(F,"recordKey"),VL=x(
F,"recordValue"),YL=x(ce.unknown,"compute"),zL=x(Ie,"isDerived"),KL=x(Ie,"isTransient"),GL=x(gr,"maxLength"),JL=x(gr,"pa\
geSize"),TI=x(ue(Xd),"place"),kI=x(ue(Zd),"layout"),SI=x(ue(Qd),"containerStyle"),EI=x(F,"submitObjectType"),xI=x(ue(cn(
rp)),"validation"),_I=x(Ie,"required"),AI=x(F,"help"),$I=x(F,"placeholder"),ZL=x(F,"deepHelp"),XL=x(ue(ce.array(ce.string)),
"examples"),RI=x(ue(Yl),"size"),II=x(Ie,"aiEnabled"),OI=x(F,"iterationLabel"),CI=x(F,"nounLabel"),hc=x(F,"icon"),zb=x(F,
"color"),QL=x(ue(qy),"authMode"),e6=x(Ie,"orgLogin"),t6=x(F,"appLogo"),r6=x(ue(cn(Zy)),"notifications"),n6=x(ue(cn(Xy)),
"transitions"),a6=x(ue(cn(Qy)),"botActors"),i6=x(ue(Gy),"theme"),o6=x(ue(ep),"themeColors"),s6=x(F,"customCss"),l6=x(gr,
"contentMaxWidth"),c6=x(F,"headerLogo"),u6=x(ue(tv),"navigation"),d6=x(ue(sv),"library"),p6=x(ue(lv),"feature"),Kb=x(Ie,
"hideHeader"),f6=x(ue(Vy),"variant"),NI=x(Ie,"showHeader"),PI=x(Ie,"collapsible"),DI=x(Ie,"collapsedByDefault"),MI=x(Ie,
"actionMenu"),jI=x(Ie,"reorderable"),LI=x(F,"orderField"),FI=x(Ie,"hideTopBar"),UI=x(Ie,"hideNav"),BI=x(F,"itemLabel"),HI=x(
F,"summary"),Gb=x(gr,"min"),Jb=x(gr,"max"),WI=x(Ie,"autoAdvance"),Zb=x(F,"actionLabel"),qI=x(F,"idleTitle"),VI=x(F,"idle\
Description"),YI=x(F,"runningTitle"),zI=x(F,"runningDescription"),KI=x(F,"authTitle"),GI=x(F,"authDescription"),JI=x(F,"\
noCreditsTitle"),ZI=x(F,"noCreditsDescription"),Xb=x(F,"promptTemplate"),h6=x(F,"imageSource"),Qb=x(F,"resultObjectType"),
e0=x(F,"typeDescription"),m6=x(ue(ce.union([zl,ce.string])),"model"),xs=x(Ie,"mockEnabled"),XI=x(gr,"mockResultCount"),QI=x(
F,"mockResults"),eO=x(gr,"maxUserTurns"),tO=x(F,"steeringChips"),rO=x(Ie,"voiceInput"),nO=x(Ie,"speakReplies"),aO=x(F,"s\
peechLang"),iO=x(F,"inputPlaceholder"),oO=x(F,"mockReplies"),sO=x(F,"fetchUrl"),t0=x(F,"prompt"),lO=x(F,"mockImageUrl"),
cO=x(F,"lyrics"),uO=x(gr,"durationSec"),dO=x(F,"mockAudioUrl"),pO=x(F,"audioSourceUrl"),fO=x(F,"language"),hO=x(F,"mockT\
ranscript"),g6=x(F,"sourceExpression"),mO=x(F,"publishDataType"),gO=x(F,"publishScope"),yO=x(F,"publishVariant"),vO=x(F,
"script"),y6=x(ue(Gd),"functionName"),v6=x(F,"args"),bO=x(ue(ce.array(ce.string)),"refreshCallables"),wO=x(F,"onSuccessN\
avigate"),TO=x(F,"successMessage"),kO=x(ue(ce.record(ce.string,nv)),"nodeTypes"),SO=x(F,"rootType"),EO=x(Ie,"canAdd"),xO=x(
Ie,"canEdit"),b6=x(ue(Yd),"textTransform"),_O=x(gr,"step"),w6=x(ue(ce.union([zd,ce.string])),"format"),T6=x(ue(ce.union(
[Kd,ce.string])),"idiom"),k6=x(F,"placeholderIcon"),AO=x(ue(tp),"imageOutputOptions"),$O=x(F,"aiSystemPromptFormula"),RO=x(
F,"userAvatarUid"),IO=x(Ie,"showCamera"),OO=x(Ie,"showFilePicker"),CO=x(Ie,"showSearch"),NO=x(Ie,"showEdit"),PO=x(Ie,"sh\
owCommit"),DO=x(Ie,"multiple"),MO=x(gr,"maxSizeMb"),jO=x(F,"htmlTemplate"),LO=x(F,"purpose"),FO=x(ue(ce.record(ce.string,
iv)),"actions"),UO=x(F,"parameters"),BO=x(F,"returns"),HO=x(F,"returnTypeHint"),S6=x(F,"pluginName"),E6=x(ue(ce.array(Vl)),
"pluginParams"),x6=x(F,"roomKey"),WO=x(F,"displayName"),qO=x(F,"identity"),_6=x(ue(Jd),"mediaMode"),VO=x(ue(Jy),"display\
Mode"),YO=x(gr,"maxTiles"),zO=x(F,"focusIdentity"),KO=x(Vy,"variant","inline"),GO=x(ce.unknown,"imageSource"),JO=x(ue(ce.union(
[zl,ce.string])),"model"),ZO=x(ue(ce.union([zl,ce.string])),"model"),XO=x(ue(ce.union([Px,ce.string])),"model"),QO=x(ue(
ce.union([Cx,ce.string])),"model"),eC=x(ue(ce.union([Nx,ce.string])),"model"),tC=x(ce.unknown,"sourceExpression"),rC=x(Ox,
"variant","contained"),nC=x(Gd,"functionName"),aC=x(ce.unknown,"args"),iC=x(Yl,"size","medium"),oC=x(Yy,"variant","basic"),
sC=x(Yd,"textTransform","none"),lC=x(ue(ce.union([zy,ce.string])),"variant"),cC=x(ue(ce.union([ce.literal("checkbox"),ce.literal(
"toggle")])),"variant"),uC=x(zd,"format","date"),dC=x(ue(ce.union([Rx,ce.string])),"variant"),pC=x(ce.string,"placeholde\
rIcon","person"),fC=x(ce.string,"roomKey"),hC=x(Jd,"mediaMode","video"),Rr=k(ki.selectLabel,ki.selectHidden,TI,(e,t,r)=>({
label:e,hidden:t,place:r})),Vp=k(kI,SI,EI,(e,t,r)=>({layout:e,containerStyle:t,submitObjectType:r})),_s=k(Rr,xI,_I,AI,$I,
RI,II,ki.selectMissingRequired,ki.selectValidationError,(e,t,r,n,a,i,o,s,l)=>({...e,validation:t,required:r,help:n,placeholder:a,
size:i,aiEnabled:o,missingRequired:s,errorMessage:l})),mC=k(OI,CI,hc,zb,(e,t,r,n)=>({iterationLabel:e,nounLabel:t,icon:r,
color:n})),mc=k(Rr,Vp,ki.selectAppNodeVariant,(e,t,r)=>({...e,...t,variant:r})),gC=k(mc,e=>({...e,variant:R("tabGroup")})),
yC=k(mc,e=>({...e,variant:R("tab")})),vC=k(mc,e=>({...e,variant:R("folder")})),A6=k(Rr,Vp,hc,Kb,(e,t,r,n)=>({...e,...t,icon:r,
hideHeader:n})),bC=k(Rr,Vp,mC,KO,NI,PI,DI,MI,jI,LI,(e,t,r,n,a,i,o,s,l,c)=>({...e,...t,...r,variant:n,showHeader:a,collapsible:i,
collapsedByDefault:o,actionMenu:s,reorderable:l,orderField:c})),wC=k(Rr,FI,UI,(e,t,r)=>({...e,hideTopBar:t,hideNav:r})),
TC=k(Rr,BI,HI,Gb,Jb,(e,t,r,n,a)=>({...e,itemLabel:t,summary:r,min:n,max:a})),hn=k(Rr,ki.selectFlowStepVariant,WI,Zb,qI,VI,
YI,zI,KI,GI,JI,ZI,(e,t,r,n,a,i,o,s,l,c,u,d)=>({...e,variant:t,autoAdvance:r,actionLabel:n,idleTitle:a,idleDescription:i,
runningTitle:o,runningDescription:s,authTitle:l,authDescription:c,noCreditsTitle:u,noCreditsDescription:d})),kC=k(hn,Xb,
GO,Qb,e0,JO,xs,XI,QI,(e,t,r,n,a,i,o,s,l)=>({...e,variant:R("aiQuery"),promptTemplate:t,imageSource:r,resultObjectType:n,
typeDescription:a,model:i,mockEnabled:o,mockResultCount:s,mockResults:l})),SC=k(hn,Xb,Qb,e0,ZO,eO,tO,rO,nO,aO,iO,xs,oO,(e,t,r,n,a,i,o,s,l,c,u,d,f)=>({
...e,variant:R("aiChat"),promptTemplate:t,resultObjectType:r,typeDescription:n,model:a,maxUserTurns:i,steeringChips:o,voiceInput:s,
speakReplies:l,speechLang:c,inputPlaceholder:u,mockEnabled:d,mockReplies:f})),EC=k(hn,sO,(e,t)=>({...e,variant:R("fetchD\
ata"),fetchUrl:t})),xC=k(hn,t0,XO,xs,lO,(e,t,r,n,a)=>({...e,variant:R("imageGeneration"),prompt:t,model:r,mockEnabled:n,
mockImageUrl:a})),_C=k(hn,t0,cO,QO,uO,xs,dO,(e,t,r,n,a,i,o)=>({...e,variant:R("audioGeneration"),prompt:t,lyrics:r,model:n,
durationSec:a,mockEnabled:i,mockAudioUrl:o})),AC=k(hn,pO,eC,fO,xs,hO,(e,t,r,n,a,i)=>({...e,variant:R("transcribe"),audioSourceUrl:t,
model:r,language:n,mockEnabled:a,mockTranscript:i})),$C=k(hn,tC,mO,gO,yO,(e,t,r,n,a)=>({...e,variant:R("publishData"),sourceExpression:t,
publishDataType:r,publishScope:n,publishVariant:a})),RC=k(hn,vO,(e,t)=>({...e,variant:R("script"),script:t})),r0=k(Rr,rC,
nC,aC,Zb,bO,wO,TO,iC,hc,(e,t,r,n,a,i,o,s,l,c)=>({...e,variant:t,functionName:r,args:n,actionLabel:a,refreshCallables:i,onSuccessNavigate:o,
successMessage:s,size:l,icon:c})),n0=k(_s,oC,sC,jp,(e,t,r,n)=>({...e,variant:t,textTransform:r,value:n})),a0=k(_s,lC,Gb,
Jb,_O,vR,(e,t,r,n,a,i)=>({...e,variant:t,min:r,max:n,step:a,value:i})),i0=k(_s,cC,Ab,(e,t,r)=>({...e,variant:t,value:r})),
o0=k(_s,uC,jp,(e,t,r)=>({...e,format:t,value:r})),s0=k(_s,dC,pC,AO,$O,RO,IO,OO,CO,NO,PO,DO,MO,Lp,(e,t,r,n,a,i,o,s,l,c,u,d,f,h)=>({
...e,variant:t,placeholderIcon:r,imageOutputOptions:n,aiSystemPromptFormula:a,userAvatarUid:i,showCamera:o,showFilePicker:s,
showSearch:l,showEdit:c,showCommit:u,multiple:d,maxSizeMb:f,value:h})),l0=k(Rr,jO,LO,FO,ir,(e,t,r,n,a)=>({...e,htmlTemplate:t,
purpose:r,actions:n,value:a})),c0=k(Rr,ir,(e,t)=>({...e,value:t})),u0=k(Rr,UO,BO,HO,ir,(e,t,r,n,a)=>({...e,parameters:t,
returns:r,returnTypeHint:n,value:a})),d0=k(Rr,ir,(e,t)=>({...e,value:t})),p0=k(Rr,fC,WO,qO,hC,VO,YO,zO,(e,t,r,n,a,i,o,s)=>({
...e,roomKey:t,displayName:r,identity:n,mediaMode:a,displayMode:i,maxTiles:o,focusIdentity:s})),IC=(e,t)=>{if(e.type.includes(
":")||e.type in t)return e.type;let r=dv(e.type);if(r.variant!==void 0)return`${r.type}:${r.variant}`;if(e.variant){let n=e.
variant.includes(":")?e.variant.split(":")[0]:e.variant;return`${e.type}:${n}`}return e.type};var gc=k(V,B,(e,t)=>{let{rootType:r,nodeTypes:n}=Dp(t);if(fn(t))return r;let a=qp(e,t.key);if(xe(a)&&a.right)return IC(a.
right,n)}),OC=e=>e,f0=k(OC,it,(e,t)=>{let{nodeTypes:r}=e,n=r[t];if(n){let{allowedChildTypes:a,category:i="",icon:o,color:s,
label:l}=n;return{allowedChildTypes:a,name:t,category:i,icon:o,color:s,label:l}}return{allowedChildTypes:[],name:t,category:""}}),
ds=k(B,gc,(e,t="")=>f0(Dp(e),t)),CC=k(ds,e=>e.allowedChildTypes),NC=k(B,CC,(e,t)=>t.map(r=>f0(Dp(e),r))),PC=k(gc,ds,hc,(e,t,r)=>xe(
r)&&r.right?r.right:t.icon||e||"objects"),DC=k(ds,zb,(e,t)=>xe(t)&&t.right?t.right:e.color||"#616161"),yc=k(V,B,(e,t)=>fn(
t)?kt(e,t.key):Tb(t)?kt(e,`${t.key}.${t.node.name}`):[]),h0=k(yc,e=>e.length>0),MC=k(B,h0,(e,t)=>!t&&!fn(e)),jC=k(kt,e=>e.
find(t=>t.node.type===mr)),m0=k(V,B,(e,t)=>{let{scope:r}=t;return r.node.type!==mr?0:1+m0(e,ks(r))}),LC=k(V,it,(e,t)=>Ca(
e,t,Oa)),FC=k(V,B,kp,(e,t,r)=>{let n=gc(e,t.key);if(!n)return[];let a=ds(e,r.key),i=[];a.allowedChildTypes.includes(n)&&
i.push("into");let o=LC(e,r.key);return o&&ds(e,o.key).allowedChildTypes.includes(n)&&(i.push("before"),i.push("after")),
i}),R6=k(V,B,kp,(e,t,r,n)=>n,(e,t,r,n)=>{let a=FC(e,t.key,r.key),{mouseY:i,elementTop:o,elementBottom:s}=n,l=r.key;if(a.
length===0)return;let c=s-o,u=i-o<=10,d=s-i<=10,f=!u&&!d,h=i-o<=c/2,y=s-i<=c/2,b=a.includes("before"),T=a.includes("afte\
r");if(a.includes("into")&&f)return{target:l,action:"into",position:"center"};if(h&&b)return{target:l,action:"before",position:"\
top"};if(y&&T)return{target:l,action:"after",position:"bottom"}}),I6=dc(Dn({include:Oa,direction:"forward"})),O6=dc(Dn({
include:Oa,direction:"back"})),g0=k(V,fA,(e,t)=>Dn({include:Oa,direction:t,traverseChildren:r=>{if(!Oa(r))return!0;let n=Vb(
e,r.key);return xe(n)&&!!n.right}})),C6=k(V,it,(e,t)=>Es(e,t,g0(e,"forward"))),N6=k(V,it,(e,t)=>Es(e,t,g0(e,"back"))),D6=k(
V,e=>Mp(e,"")),UC=e=>k(Mp,t=>Qv(t,e,"output")),BC=k(V,B,(e,t)=>Ty(t)?t:Ca(e,t.key,Ty)),M6=k(V,BC,(e,t)=>{if(!t||!t.node.
submitObjectType)return;let{scope:r,node:n,key:a}=t,i=Mp(e,a),o=Nn(e.def,n),s=d=>_r([r.key,`${o}$${d}`]),l=s("id"),c=s("\
createdAt"),u=s("createdBy");return{pointer:t,type:t.node.submitObjectType,idKey:l,createdAtKey:c,createdByKey:u,obj:i}}),
y0=k(V,FR,(e,t)=>Ob(t,Dn({include:r=>{let n=$d(Hp(e,r.key),!1),a=!!$d(Wp(e,r.key),void 0);return n||a}}))),HC=k(V,it,y0,
Es),WC=(e,t)=>P(Kr(e,t))?void 0:HC(e,t),L6=k(V,it,y0,Mb),qC=k(V,it,(e,t)=>Mb(e,t,Dn({traverseParent:Qo,include:r=>{if(r.
node.type!==_i)return!1;let n=Lp(e,r.key);if(P(n)||Array.isArray(n.right))return!1;let{url:a,previewUrl:i}=n.right;return!a&&
!!i}}))),F6=k(V,qC,(e,t)=>t.flatMap(r=>{let n=ze(Lp(e,r.key));return Array.isArray(n)?[]:[{pointerKey:r.key,value:n,imageOutputOptions:$d(
zR(e,r.key),void 0)}]})),VC=k(mc,be),YC=k(gC,be),zC=k(yC,be),KC=k(vC,be),GC=k(bC,be),JC=k(wC,be),ZC=k(TC,be),XC=k(hn,be),
QC=k(kC,be),e2=k(SC,be),t2=k(EC,be),r2=k(xC,be),n2=k(_C,be),a2=k(AC,be),i2=k($C,be),o2=k(RC,be),s2=k(r0,be),l2=k(n0,be),
c2=k(a0,be),u2=k(i0,be),d2=k(o0,be),p2=k(s0,be),f2=k(l0,be),h2=k(c0,be),m2=k(u0,be),g2=k(d0,be),y2=k(p0,be),v0=k(Ii,kO,SO,
EO,xO,(e,t,r,n,a)=>({...e,nodeTypes:t,rootType:r,canAdd:n,canEdit:a})),v2=k(v0,be),b2=k(V,B,(e,t)=>{let{node:r,key:n}=t;
switch(y_(r.type)){case fs:let a=UR(e,n);return xe(a)&&a.right==="stringArray"?Hb(e,n):n0(e,n);case ms:return i0(e,n);case hs:
let i=BR(e,n);return xe(i)&&i.right==="intArray"?Bb(e,n):a0(e,n);case gs:return o0(e,n);case _i:return s0(e,n);case ys:return fc(
e,n);case mr:return r.isRepeating?Yb(e,n):v0(e,n);case $a:return l0(e,n);case Jl:return Wb(e,n);case xi:return c0(e,n);case na:
return u0(e,n);case aa:return d0(e,n);case Ur:return hn(e,n);case Xl:return r0(e,n);case ip:return p0(e,n);default:return Ii(
e,n)}}),w2=k(V,Bp,(e,t)=>{let r=Kb(e,t.key);return xe(r)&&r.right===!0}),Oi=k(V,$b,(e,t)=>t.filter(r=>{let n=Ma(e,r.key);
return!(xe(n)&&n.right)})),Sy={kind:"auto"},T2=40,k2=e=>e?.mode==="spatial",gi=(e,t,r)=>{if(typeof r=="number")return Number.
isFinite(r)?r:void 0;if(typeof r!="string")return;if(!r.startsWith("@")){if(r.trim()==="")return;let i=Number(r);return Number.
isFinite(i)?i:void 0}let n=$r(e,cp(r),t);if(!xe(n))return;let a=n.right;return typeof a=="number"&&Number.isFinite(a)?a:
void 0},S2=k(V,B,JR,(e,t,r)=>{if(!xe(r))return;let n=r.right;if(!k2(n))return;let a=gi(e,t.key,n.cols);if(a===void 0)return;
let i=Math.floor(a);if(i<1)return;let o=gi(e,t.key,n.rows),s=o!==void 0&&Math.floor(o)>=1?Math.floor(o):void 0,l=typeof n.
rowHeight=="number"&&Number.isFinite(n.rowHeight)&&n.rowHeight>0?n.rowHeight:void 0,c=typeof n.minColumnWidth=="number"&&
n.minColumnWidth>0?n.minColumnWidth:T2;return{cols:i,rows:s,rowHeight:l,minColumnWidth:c}}),Ey=e=>e===void 0?1:Math.max(
1,Math.floor(e)),E2=(e,t)=>{let r=Math.min(Math.max(0,Math.floor(e.x)),t.cols-1),n=Math.max(0,Math.floor(e.y)),a=Math.min(
Ey(e.w),t.cols-r),i=Ey(e.h);return t.rows!==void 0&&(n=Math.min(n,t.rows-1),i=Math.min(i,t.rows-n)),a=Math.max(1,a),i=Math.
max(1,i),{kind:"placed",x:r,y:n,w:a,h:i}},x2=k(V,B,(e,t,r)=>r,(e,t,r)=>{let n=t.node.place,a=Xd.is(n)?n:void 0;if(!a)return Sy;
let i=gi(e,t.key,a.x),o=gi(e,t.key,a.y);if(i===void 0||o===void 0)return Sy;let s=gi(e,t.key,a.w),l=gi(e,t.key,a.h);return E2(
{x:i,y:o,w:s,h:l},r)}),_2=k(V,Oi,(e,t)=>t.flatMap(r=>uc(r)?b0(r)?[]:kt(e,r.key).filter(n=>{let a=Ma(e,n.key);return!(xe(
a)&&a.right)}):[r])),b0=e=>{var t,r;return((r=cc((t=e.node.data)==null?void 0:t.span))==null?void 0:r.mode)==="grid"},A2=k(
Oi,e=>e.filter(t=>uc(t)&&b0(t))),$2=k(V,Oi,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{let a=t.find(o=>uc(o)&&o.node.name===r);if(!a)
return[];let i=[];return kt(e,a.key).forEach((o,s)=>{let l=Ma(e,o.key);if(xe(l)&&l.right)return;let c=x2(e,o.key,n);c.kind===
"placed"&&i.push({index:s,x:c.x,y:c.y})}),i}),q6=k(V,(e,t)=>t,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{var a;let i=B(e,r),o=cc(
(a=i.node.data)==null?void 0:a.span);if(!o||o.mode!=="grid")return[];let s=$2(e,t,o.slots,n);if(s.length===0)return[];let l=R2(
e,t,o.slots),c=s.map(d=>{let f=l[d.index];if(f===void 0)return;let h=$r(e,o.axis,f);return xe(h)?h.right:void 0}),u=[];for(let d of kt(
e,r)){let f=Ma(e,d.key);if(xe(f)&&f.right)continue;let h=ir(e,d.key),y=xe(h)?Ud(h.right):void 0;if(!y)continue;let b={start:y.
start,end:y.end},T=[];s.forEach((S,E)=>{let _=c[E];_!==void 0&&Pp(b,_)&&T.push(S.index)}),T.length>0&&u.push({recordKey:d.
key,slots:T})}return L$(u,s)}),R2=(e,t,r)=>{let n=Oi(e,t).find(a=>uc(a)&&a.node.name===r);return n?kt(e,n.key).map(a=>a.
key):[]};var I2=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="running",O2=(e,t)=>I2(ze(ir(e,t)))?kt(e,t).map(r=>r.key):
[],C2=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),xy=new WeakMap,N2=(e,t)=>{var r;let n=xy.get(e);n||(n=new Map,xy.set(e,
n));let a=n.get(t);if(a!==void 0)return a;let i;try{i=new RegExp(`(^|[^\\w$.])${C2(t)}\\s*\\??\\.\\s*(partial|ready)\\b`).
test((r=JSON.stringify(e))!=null?r:"")}catch{i=!0}return n.set(t,i),i},P2=(e,t)=>{if(kt(e,t).length>0)return!0;let{name:r}=B(
e,t).node;return r?N2(e.def,r):!1},w0="@@orgicore/INIT_APP",T0="@@orgicore/INIT_APP_INSTANCE",k0="@@orgicore/UPDATE_DEF",
S0="@@orgicore/UPDATE_CONTEXT_DATA",E0="@@orgicore/UPDATE_REPO",x0="@@orgicore/UPDATE_VALUE",_0="@@orgicore/CLEAR_VALUE",
A0="@@orgicore/INSERT_SLOT",$0="@@orgicore/SWAP_SLOT",R0="@@orgicore/MOVE_SLOT",I0="@@orgicore/SET_CURSOR",O0="@@orgicor\
e/PUSH_CURSOR",C0="@@orgicore/POP_CURSOR",N0="@@orgicore/MOVE_NODE",P0="@@orgicore/REMOVE_NODE",D0="@@orgicore/CLEAR_SUB\
TREE",M0="@@orgicore/BULK_ACTION",j0="@@orgicore/LOAD_MORE",Yp="@@orgicore/SET_PAGE",D2=(e,t)=>({type:w0,payload:{appDef:e,
appInstance:t}}),M2=e=>({type:T0,payload:{appInstance:e}}),j2=e=>({type:k0,payload:{appDef:e}}),L2=e=>({type:S0,payload:{
data:e}}),F2=e=>({type:E0,payload:{repo:e}}),L0=(e,t)=>({type:x0,payload:{pointerKey:e,value:t}}),F0=e=>({type:_0,payload:{
pointerKey:e}}),U0=(e,t)=>({type:A0,payload:{pointerKey:e,index:t}}),U2=(e,t,r)=>({type:$0,payload:{pointerKey:e,fromIndex:t,
toIndex:r}}),B2=(e,t)=>({type:R0,payload:{pointerKey:e,toIndex:t}}),B0=(e,t)=>({type:I0,payload:{pointerKey:e,args:t}}),
H2=(e,t)=>({type:O0,payload:{pointerKey:e,args:t}}),W2=()=>({type:C0}),q2=(e,t,r)=>({type:N0,payload:{pointerKey:e,toPointerKey:t,
target:r}}),H0=e=>({type:P0,payload:{pointerKey:e}}),W0=e=>({type:D0,payload:{pointerKey:e}}),V2=e=>({type:M0,payload:{actions:e}}),
Y2=e=>({type:j0,payload:{pointerKey:e}}),z2=(e,t)=>({type:Yp,payload:{pointerKey:e,page:t}}),_y={insertSlot:U0,removeNode:H0,
updateValue:L0,clearValue:F0,clearSubtree:W0,setCursor:B0},Ay={initApp:D2,initAppInstance:M2,updateDef:j2,updateContextData:L2,
updateRepo:F2,updateValue:L0,clearValue:F0,clearSubtree:W0,insertSlot:U0,removeNode:H0,swapSlot:U2,moveSlot:B2,setCursor:B0,
pushCursor:H2,popCursor:W2,moveNode:q2,bulkAction:V2,loadMore:Y2,setPage:z2},K2=e=>{let t={};for(let r in Ay){let n=Ay[r];
t[r]=(...a)=>e(n(...a))}return t},Rt=(e,t)=>{let r=ia(e);return{...e,instance:{...r,...t}}},q0=(e,t)=>{switch(t.type){case w0:
return Z2(e,t);case T0:return X2(e,t);case k0:return Q2(e,t);case S0:return eN(e,t);case E0:return tN(e,t);case x0:return rN(
e,t.payload);case _0:return nN(e,t);case D0:return z0(e,t.payload);case A0:return iN(e,t);case P0:return G0(e,t.payload);case $0:
return oN(e,t.payload);case N0:return sN(e,t);case R0:return Bd(e,t.payload);case I0:return lN(e,t);case O0:return dN(e,
t);case C0:return fN(e);case j0:return hN(e,t);case Yp:return Z0(e,t);case M0:return t.payload.actions.reduce((r,n)=>q0(
r,n),e)}},G2=(e,t)=>{let r=t.payload.pointerKey;return B(e,r)},V0=(e,t)=>{let r=Kr(e,t);if(P(r)){console.warn(`[orgicore\
] ignoring write to unresolvable pointer "${t}" \u2014 the node is not declared on the current app def (${r.left}).`);return}
return r.right},J2=e=>t=>t.pointer===e.pointer?e:t,Z2=(e,t)=>{let{appDef:r,appInstance:n}=t.payload;return{...e,def:r,instance:n}},
X2=(e,t)=>{let{appInstance:r}=t.payload;return{...e,instance:r}},Q2=(e,t)=>{let{appDef:r}=t.payload;return{...e,def:r}},
eN=(e,t)=>{let{data:r}=t.payload;return{...e,context:{...e.context,...r}}},tN=(e,t)=>{let{repo:r}=t.payload;return{...e,
repo:r}},Y0=(e,t,r)=>{let n=pn(e),a=ac(e),i={pointer:t,length:r};if(!a[t])return Rt(e,{lengths:[...n,i]});let s=n.map(l=>l.
pointer===t?i:l);return Rt(e,{lengths:s})},rN=(e,t)=>{let{value:r,pointerKey:n}=t,a=V0(e,n);if(!a)return e;let{key:i,scope:o,
node:s}=a;if(s.isDerived)return e;let l=dn(e),c={pointer:i,value:r},d=bi(e)[i];if(!d){let y=Ep(e,o.key).reduce((b,T)=>{if(mp(
T.node)){let S=T.index+1,E=ks(T),_=ze(Pa(e,E));if(S>_)return Y0(b,E,S)}return b},e);return Rt(y,{data:[...l,c]})}if(d.value===
r)return e;let f=l.map(J2(c));return Rt(e,{data:f})},vc=e=>(t,r,n)=>CA(e,t,r,n),nN=(e,t)=>{let r=V0(e,t.payload.pointerKey);
if(!r)return e;let a=dn(e).filter(i=>i.pointer!==r.key);return Rt(e,{data:a})},z0=(e,{pointerKey:t})=>{let r=aN(e,t),n=dn(
e),a=pn(e),i=n.filter(s=>!r.has(s.pointer)),o=a.filter(s=>!r.has(s.pointer));return i.length===n.length&&o.length===a.length?
e:Rt(e,{data:i,lengths:o})},aN=(e,t)=>{let r=new Set,n=a=>{if(!r.has(a)){r.add(a);for(let i of kt(e,a))n(i.key)}};return n(
t),r},K0=(e,t,r)=>{let n=[],a=new Set,i=s=>{if(!a.has(s.key)){a.add(s.key),r(s)&&n.push(s.key);for(let l of kt(e,s.key))
i(l)}},o=Kr(e,t);return xe(o)&&i(o.right),n},iN=(e,t)=>{let{node:r,isIteration:n,key:a}=G2(e,t),{index:i}=t.payload,o=dn(
e),s=pn(e),l=ac(e);if(!r.isRepeating||n)return e;let c=vc(e),u=o.map(h=>{let{pointer:y}=h,b=ra(e,a,y);if(b>=i){let T=c(a,
y,b+1);return{...h,pointer:T}}return h}),d=s.map(h=>{let{pointer:y,length:b}=h;if(a===y)return{pointer:y,length:b+1};let T=ra(
e,a,y);if(T>=i){let S=c(a,y,T+1),E=Pn(e,S);return{length:b,pointer:ks(E)}}return h}),f=Rt(e,{data:u,lengths:d});if(!l[a]){
let h=pn(f);return Rt(f,{lengths:[...h,{pointer:a,length:1}]})}return f},Bd=(e,{pointerKey:t,toIndex:r})=>{let n=Pn(e,t),
a=n.key;if(!n.node.isRepeating)return e;let i=dn(e),o=pn(e),s=vc(e),l=n.index,c=Math.min(l,r),u=Math.max(l,r),d=i.map(h=>{
let{pointer:y}=h,b=ra(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,S=s(a,y,T);return{...h,pointer:S}}return h}),f=o.map(
h=>{let{pointer:y}=h,b=ra(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,S=s(a,y,T),E=Pn(e,S);return{...h,pointer:ks(E)}}
return h});return Rt(e,{data:d,lengths:f})},oN=(e,{fromIndex:t,toIndex:r,pointerKey:n})=>{let a=Pn(e,n),i=a.key,o=dn(e);
if(!a.node.isRepeating)return e;let s=vc(e),l=o.map(c=>{let{pointer:u}=c,d=ra(e,i,u);if(d===t||d===r){let h=s(i,u,d===t?
r:t);return{...c,pointer:h}}return c});return Rt(e,{data:l})},G0=(e,{pointerKey:t})=>{var r;let{scope:n,isIteration:a,key:i}=B(
e,t);if(!a){let h=`${t}[`,y=dn(e).filter(T=>!T.pointer.startsWith(h)),b=pn(e).filter(T=>T.pointer!==t&&!T.pointer.startsWith(
h));return Rt(e,{data:y,lengths:b})}let o=((r=Gr(e,i))==null?void 0:r.key)||"",s=dn(e),l=pn(e),c=n.index,u=vc(e),d=s.flatMap(
h=>{let{pointer:y}=h,b=ra(e,o,y);if(b===c)return[];if(b>c){let T=u(o,y,b-1);return{...h,pointer:T}}return h}),f=l.flatMap(
h=>{let{pointer:y,length:b}=h;if(o===y){let S=h.length-1;return S===0?[]:{pointer:y,length:S}}let T=ra(e,o,y);if(T===c)return[];
if(T>c){let S=u(o,y,T-1),E=Pn(e,S);return{length:b,pointer:ks(E)}}return h});return Rt(e,{data:d,lengths:f})},sN=(e,t)=>{
let{pointerKey:r,toPointerKey:n,target:a}=t.payload,i=B(e,r),o=Gr(e,i.key);if(!o)return e;let s=B(e,n);if(!Oa(i)||!Oa(s)||
i.key===s.key)return e;if(a==="into"){let l=cR(s),c=B(e,l);if(o.key===c.key)return e;let[u]=$y(e,i,o,c);return u}if(a===
"before"||a==="after"){if(fn(s))return e;let l=Gr(e,s.key);if(!l)return e;let c=i.scope.index,u=s.scope.index,d=a==="bef\
ore"?-1:0,f=a==="after"?1:0;if(o.key===l.key){if(c===u)return e;let b=c<u?d:f,T=u+b;return T===c?e:Bd(e,{pointerKey:i.key,
toIndex:T})}let[h,y]=$y(e,i,o,l);if(e!==h){let b=u+f;return Bd(h,{pointerKey:y,toIndex:b})}}return e},$y=(e,t,r,n)=>{let{
key:a,scope:i}=t;if(Rb(e,a,n.key))return[e,a];let o=i.index,s=ze(Pa(e,n.key)),l=ac(e),c=dn(e),u=pn(e),d=`${n.key}[${s}]`,
f=c.flatMap(T=>{if(ra(e,r.key,T.pointer)===o){let E=T.pointer.replace(a,d);return[T,{...T,pointer:E}]}return T}),h=u.flatMap(
T=>{if(n.key===T.pointer){let S=T.length+1;return{pointer:T.pointer,length:S}}if(T.pointer.startsWith(a)){let S=T.pointer.
replace(a,`${n.key}[${s}]`);return[T,{pointer:S,length:T.length}]}return T}),y=Rt(e,{data:f,lengths:h});if(!l[n.key]){let T=pn(
y);y=Rt(y,{lengths:[...T,{pointer:n.key,length:1}]})}return[G0(y,{pointerKey:a}),d]},lN=(e,t)=>{let{pointerKey:r,args:n}=t.
payload;return Rt(e,n===void 0?{cursor:r}:{cursor:r,cursorArgs:n})},cN=new Set(["script","publishData"]),uN=(e,t)=>{let r=bi(
e);return K0(e,t,n=>n.node.type===Ur&&typeof n.node.variant=="string"&&cN.has(n.node.variant)).some(n=>{var a;let i=(a=r[n])==
null?void 0:a.value;return typeof i=="object"&&i!==null&&i.status==="running"})},dN=(e,t)=>{let{pointerKey:r,args:n}=t.payload;
if(!r)return e;let a=bp(e),i=wp(e),o=u=>K0(u,r,d=>d.node.type===ps).filter(d=>!uN(u,d)).reduce((d,f)=>z0(d,{pointerKey:f}),
u);if(r===a&&pN(i,n))return o(e);let s=vp(e),l=Bv(e),c=Rt(e,{navStack:a?[...s,a]:s,navStackArgs:a?[...l,i]:l,cursor:r,cursorArgs:n});
return o(c)},pN=(e,t)=>{let r=e??{},n=t??{},a=Object.keys(r),i=Object.keys(n);return a.length!==i.length?!1:a.every(o=>r[o]===
n[o])},fN=e=>{let t=vp(e),r=Bv(e),n=t.slice(0,-1),a=r.slice(0,-1),i=t[n.length]||MR(e),o=r[n.length];return Rt(e,{navStack:n,
navStackArgs:a,cursor:i,cursorArgs:o})},J0=(e,t)=>{let r=B(e,t),{node:n,key:a,scope:i}=r,o=n.pageSize;if(o===void 0)return;
let s=typeof o=="number"?o:ze($r(e,o,i.key))||0;if(s<=0)return;let l=n.maxLength,c=l===void 0?void 0:typeof l=="number"?
l:ze($r(e,l,i.key)),u=c??1/0,d=n.data;if(Ll(d)){let h=ir(e,a);if(xe(h)&&Array.isArray(h.right)){let y=h.right.length;u=c!==
void 0?Math.min(y,c):y}}let f=ze(Pa(e,a));return{key:a,pageSizeValue:s,currentLength:f,totalLength:u}},Z0=(e,t)=>{let{pointerKey:r,
page:n}=t.payload,a=J0(e,r);if(!a)return e;let i=(n+1)*a.pageSizeValue;return Y0(e,a.key,i)},hN=(e,t)=>{let{pointerKey:r}=t.
payload,n=J0(e,r);if(!n)return e;let{currentLength:a,totalLength:i,pageSizeValue:o}=n;if(a>=i)return e;let s=Math.ceil(a/
o)-1;return Z0(e,{type:Yp,payload:{pointerKey:r,page:s+1}})},mN=(e=F_,t={},r)=>{let n={def:e,context:t,repo:r},i=K2(l=>{
n=q0(n,l)}),o=()=>n;return i.getState=o,{api:i,getState:o,sel:l=>(...c)=>l(n,...c)}},gN=(e,t={})=>{let{api:r,sel:n}=e,a=n(
Kr);r.initAppInstance();let i=(o,s="")=>{Object.entries(o).forEach(([l,c])=>{var u;if(c!==void 0){let d=_r([s,l]),f=a(d);
if(P(f)){if(String(f.left).endsWith("not found"))return;throw new Error(String(f.left))}let h=f.right;if(h.node.isRecord&&
Cn.is(c)){let y=(u=h.node.recordKey)!=null?u:"key",b=h.node.recordValue;Object.entries(c).forEach(([T,S],E)=>{i(typeof b==
"string"?{[y]:T,[b]:S}:{[y]:T,...Cn.is(S)?S:{}},`${d}[${E}]`)})}else h.node.isRepeating&&ex.is(c)?c.forEach((y,b)=>{Jc(y)?
r.insertSlot(h.key,b):i(y,`${d}[${b}]`)}):h.node.isOwnScope?Cn.is(c)&&i(c,`${d}[0]`):r.updateValue(h.key,c)}})};i(t)};var[V6,yN,Y6]=$i("App"),[z6,vN,K6]=$i("Pointer"),X0=(e={})=>Lt(e)?{pointerKey:e}:e;var Hd=(e,t)=>{let r=qp(e,t.key);if(!xe(r)||r.right===void 0)return;let n=r.right,a=yc(e,t.key);if(a.length===0)return{...n};
let i=[];for(let o of a){let s=Hd(e,o);s&&i.push(s)}return{...n,_children:i}},[J6,Z6]=$i("AppData",{ctx:{}}),X6={createAppInstance:Zc(),
toOutputData:ia};var bN=(e,t)=>{switch(t){case"@root":return tw(e);case"@parent":return e.parentAppContext;case"@self":return e}return Q0(
e,t)},Q0=(e,t)=>e.name===t?e:e.parentAppContext?Q0(e.parentAppContext,t):null,ew=(e,t)=>t===void 0||e.namespace===t?e:e.
parent?ew(e.parent,t):null,zp=(e="@self")=>{let t=yN(),r=bN(t,e);if(!r)throw new Error(`App context not found for search\
 param ${e}`);return r},wN=e=>{let{namespace:t,pointerKey:r}=X0(e),{name:n}=zp(t),a=vN();if(r)return{namespace:n,pointerKey:r};
let i=ew(a,n);if(!i)throw new Error(`Pointer context not found for namespace ${n}`);return i},TN=(e,t)=>{let{state:r}=zp(
t);return e(r)},Ci=e=>t=>TN(e,t),kN=e=>wN(e).pointerKey,SN=(e,t)=>{let r=kN(t),{state:n}=zp(X0(t).namespace);return e(n,
r)},ee=e=>t=>SN(e,t),Q6=ee(B),eF=ee($b),tF=ee(Oi),rF=ee(S2),nF=ee(_2);var aF=ee(A2);var iF=ee(k(Pa,ze));var oF=Ci(bp),sF=Ci(wp),lF=Ci(jb),cF=Ci(Bp),uF=Ci(w2),dF=Ci(CR);var pF=ee(Fp);var fF=ee(b2),hF=ee(v2);var mF=ee(yI);var gF=ee(jC),yF=ee(m0),vF=ee(yc),bF=ee(h0),wF=ee(NC),TF=ee(MC),kF=ee(PC),SF=ee(DC),EF=ee(gc),xF=ee(vI),_F=ee(WC);var tw=e=>{let{parentAppContext:t}=e;return t?tw(t):e};var AF=ee(VC),$F=ee(YC),RF=ee(zC),IF=ee(KC),OF=ee(GC),CF=ee(JC),NF=ee(ZC),PF=ee(XC),DF=ee(QC),MF=ee(e2),jF=ee(t2),LF=ee(
r2),FF=ee(n2),UF=ee(a2),BF=ee(i2),HF=ee(o2),WF=ee(s2),qF=ee(l2),VF=ee(c2),YF=ee(u2),zF=ee(d2),KF=ee(p2),GF=ee(f2),JF=ee(
h2),ZF=ee(m2),XF=ee(g2),QF=ee(y2);var[eU,tU]=$i("form");var Gp=e=>e,_N=k(Gp,e=>wt(e,t=>t.name)),AN=k(Gp,e=>e.reduce((t,r)=>(t[r.name]={allowedChildTypes:[],icon:r.icon||"extens\
ion",color:r.color||"#9E9E9E",category:"plugins"},t),{})),$N=k(Gp,e=>e.map(t=>t.name)),RN=k(_N,it,(e,t)=>e[t]),IN=[fs,hs,
ms,_i,gs,ys,xi,na,aa],ON=e=>{let t=[...IN,$a,"textContent","subsection",Xl,...$N(e)],r=AN(e),n=["appNode:folder",ns,na,aa];
return{app:{allowedChildTypes:n,icon:"dashboard",color:"#3468b2"},screen:{allowedChildTypes:["appNode:tabGroup","form","\
flow",mr,...t],icon:"laptop_mac",color:"#6c46b9",category:"layout"},form:{allowedChildTypes:[...t],icon:"edit_square",color:"\
#ba6d36",category:"layout"},"appNode:folder":{allowedChildTypes:n,icon:"folder",color:"#b8853d",label:"Folder"},"appNode\
:tabGroup":{allowedChildTypes:["appNode:tab"],icon:"tab_group",color:"#4650b9",category:"layout",label:"Tab Group"},"app\
Node:tab":{allowedChildTypes:[...t,mr],icon:"tab",color:"#5e66ba",label:"Tab"},content:{allowedChildTypes:[],icon:"html",
color:"#a6593f",category:"content",label:"Html Content"},textContent:{allowedChildTypes:[],icon:"newsmode",color:"#a1456\
3",category:"content"},subsection:{allowedChildTypes:["appNode:tabGroup","form","flow",mr,...t],icon:"mobile_layout",color:"\
#3686a1",category:"layout",label:"Container"},tree:{allowedChildTypes:[...t],icon:"account_tree",color:"#00695c",category:"\
layout"},flow:{allowedChildTypes:["flowStep:aiQuery","flowStep:aiChat","flowStep:fetchData","flowStep:imageGeneration","\
flowStep:audioGeneration","flowStep:transcribe","flowStep:publishData","flowStep:script","repeat","appNode:tabGroup","fo\
rm",...t],icon:"route",color:"#2e7d32",category:"layout",label:"Flow"},repeat:{allowedChildTypes:[ns],icon:"repeat",color:"\
#558b2f",category:"layout",label:"Repeat"},"flowStep:aiQuery":{allowedChildTypes:[...t],icon:"smart_toy",color:"#1565c0",
label:"AI Query Step"},"flowStep:aiChat":{allowedChildTypes:[],icon:"forum",color:"#0277bd",label:"AI Chat Step"},"flowS\
tep:fetchData":{allowedChildTypes:[],icon:"cloud_download",color:"#00838f",label:"Fetch Data Step"},"flowStep:imageGener\
ation":{allowedChildTypes:[],icon:"image",color:"#7b1fa2",label:"Image Generation Step"},"flowStep:audioGeneration":{allowedChildTypes:[],
icon:"music_note",color:"#b6488d",label:"Audio Generation Step"},"flowStep:transcribe":{allowedChildTypes:[],icon:"mic",
color:"#00695c",label:"Transcribe Step"},"flowStep:publishData":{allowedChildTypes:[],icon:"cloud_upload",color:"#4a148c",
label:"Publish Data Step"},"flowStep:script":{allowedChildTypes:[],icon:"code",color:"#5d4037",label:"Script Step"},callableButton:{
allowedChildTypes:[],icon:"smart_button",color:"#0277bd",category:"input",label:"Callable Button"},textInput:{allowedChildTypes:[],
icon:"text_fields",color:"#339199",category:"input"},numberInput:{allowedChildTypes:[],icon:"numbers",color:"#389475",category:"\
input"},booleanInput:{allowedChildTypes:[],icon:"check_box",color:"#ac3973",category:"input"},fileInput:{allowedChildTypes:[],
icon:"attach_file",color:"#a18636",category:"input"},temporalInput:{allowedChildTypes:[],icon:"schedule",color:"#8c47ae",
category:"input"},selectInput:{allowedChildTypes:[],icon:"arrow_drop_down_circle",color:"#ac4d39",category:"input"},variable:{
allowedChildTypes:[],icon:"data_object",color:"#5c8599",category:"special"},function:{allowedChildTypes:[],icon:"functio\
n",color:"#7b1fa2",category:"special"},const:{allowedChildTypes:[],icon:"pin",color:"#455a64",category:"special"},...r}},
CN=e=>Iv({t:Ov({rootType:"app",nodeTypes:e,iterationLabel:"@(value.label || value.name || 'New ' + (value.variant || val\
ue.type)) + (value.isRepeating ? '[...]' : '')",nounLabel:"@value.variant || value.type",label:"App Config"})}),Ry={anonOnly:"\
public",hybrid:"public",userOnly:"private"},NN="data-degraded-node",PN=`<div ${NN}="true" role="alert" style="margin:8px\
 0;padding:8px 12px;border:1px solid #e6b800;border-radius:6px;background:#fff8e1;color:#8a6d00;font-size:0.875rem;">\u26A0\uFE0F \
This part of the page couldn't be displayed.</div>`,DN=e=>({type:$a,name:e,htmlTemplate:PN}),MN=bc.intersection([bc.partial(
{value:Kl}),Cn]),jN=UC(MN),LN=(e,t,r={})=>{let n=h=>{var y;let{t:b=[],value:T}=h,S=b.length>0?b.map(n):void 0,E;try{E=a(
T)}catch(O){if(!r.lenient)throw O;return DN((y=T.name)!=null?y:"unnamed")}let _={...E,children:S};return _.submitObjectType&&
(_.children||(_.children=[]),_.children=[..._.children,...Rv()]),_},a=h=>{let y=i(h),b=n_.decode(y);if(wx(b))return b.right;
let T=Tx(b.left),S=Od(b.left),E=b.left.some(O=>O.context.some(M=>M.key==="columnBreaks")),_='Check that your node has a \
valid "type" property.';throw E&&(_="columnBreaks format mismatch. System expects number[] (e.g., [2, 5, 7]) but you pro\
vided responsive objects. Convert to legacy format or update types."),new Error(`\u{1F6A8} Design Node Error - ${T}
\u{1F4CD} Location: ${S||"root"}
\u{1F4A1} Fix: ${_}
\u{1F4CB} Node: ${JSON.stringify(y,null,2).substring(0,500)}`)},i=h=>{let y=o(h),{name:b="unnamed",id:T,...S}=y;return{name:b,
...S}},o=h=>{let{type:y,...b}=h,T=RN(t,y);if(T){let{parameters:E={},description:_,icon:O,image:M,...W}=b;if(tx.is(E))return{
type:$a,htmlTemplate:`@${y}(${T.parameters.map(G=>E[G.name||""]||"undefined").join(",")})`,pluginName:y,...W}}let S=dv(y);
if(S.variant!==void 0)return{type:S.type,variant:S.variant,...b};if(y==="image"||y==="textContent")return{type:$a,...b};
if(!j_.is(y))throw new Error(`Invalid node type: ${y}`);if(y===Zl)return{...h,isRepeating:!0};if(y===Gl){let{appLogo:E,..._}=h,
O={type:y,..._},M=O.authMode;return M&&Ry[M]&&(O={...O,authMode:Ry[M]}),O}return h},s={def:CN(ON(t)),instance:e},l=jN(s,
"t");if(P(l))return Ce(`Invalid design node: ${l.left}`);let c=l.right,{value:u={type:"app",name:""},...d}=c,f={value:{...u,
name:""},...d};try{return R(n(f))}catch(h){return Ce(XE(h))}},FN=e=>e!==void 0&&!(typeof e=="object"&&e!==null&&!Array.isArray(
e)&&Object.keys(e).length===0),Vo=e=>{var t;if(!e||!e.data||e.data.length===0)return;let r=(t=e.data.find(o=>o.pointer===
"value"))==null?void 0:t.value,n=FN(r),i={def:Iv({t:Ov({rootType:"app",nodeTypes:{}})}),instance:e};if(n){let o=B(i,"t");
return Hd(i,o)}else{let o=B(i,"t"),s=yc(i,o.key);if(s.length===0)return{type:"folder",name:""};let l=[];for(let c of s){
let u=Hd(i,c);u&&l.push(u)}return{type:"folder",_children:l}}},aw=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.
minClientVersion,appConfig:Vo(e.appConfig),users:Vo(e.users),objectTypes:Vo(e.objectTypes),objectInstances:Vo(e.objectInstances),
plugins:Vo(e.plugins)}),iw=(e,t,r,n)=>{let{_children:a,...i}=e;if(r.push({pointer:`${t}.value`,value:i}),a&&a.length>0){
r.push({pointer:`${t}.expanded`,value:!0});let o=`${t}.t`;n.push({pointer:o,length:a.length}),a.forEach((s,l)=>{let c=`${o}\
[${l}]`;iw(s,c,r,n)})}},Yo=(e,t,r)=>{if(!e)return{};let n=[],a=[],{_children:i,...o}=e;o.type==="folder"&&Object.keys(o).
length===1||n.push({pointer:"value",value:o}),i&&i.length>0&&(n.push({pointer:"expanded",value:!0}),a.push({pointer:"t",
length:i.length}),i.forEach((c,u)=>{iw(c,`t[${u}]`,n,a)}));let l={data:n,lengths:a};return t&&(l.cursor=t),r&&(l.navStack=
r),l},UN=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.minClientVersion,appConfig:Yo(e.appConfig,
e.appConfig?"t[0]":void 0),users:Yo(e.users,e.users?"t[0]":void 0),objectTypes:Yo(e.objectTypes,e.objectTypes?"t[0]":void 0),
objectInstances:Yo(e.objectInstances,e.objectInstances?"t[0].t[0]":void 0),plugins:Yo(e.plugins,e.plugins?"t[0]":void 0)}),
BN="\0ORGIGGLY_SANDBOXED_WIDGET\0",nU=It.intersection([It.type({kind:It.literal("sandboxed-widget"),pluginName:It.string,
params:It.UnknownRecord}),It.partial({embedsThirdPartyMedia:It.boolean,connections:It.array($v),widgetOwner:It.string})]),
HN=(e,t,{embedsThirdPartyMedia:r,connections:n,widgetOwner:a}={})=>{let i={kind:"sandboxed-widget",pluginName:e,params:t,
...r?{embedsThirdPartyMedia:!0}:{},...n?.length?{connections:n}:{},...a!==void 0?{widgetOwner:a}:{}};return BN+JSON.stringify(
i)};var WN=({name:e,htmlTemplate:t,parameters:r,runtime:n,embedsThirdPartyMedia:a,connections:i,widgetOwner:o})=>(...s)=>{let l=r.
reduce((c,u,d)=>(c[u.name||`param${d}`]=s[d],c),{});return n==="sandboxed"?HN(e,l,{embedsThirdPartyMedia:a,connections:i,
widgetOwner:o}):String(T$(up(t),l))},qN=e=>e.reduce((t,r)=>(t[r.name]=WN(r),t),{});var VN=Q.intersection([Q.type({name:Q.string}),Kl]),YN=Q.intersection([Kl,Cn]),zN=Q.union([Q.literal("text"),Q.literal("\
number"),Q.literal("boolean"),Q.literal("temporal")]),aU=zN.types.map(e=>e.value);var KN=Q.type({pointer:Q.string,value:Q.unknown}),GN=Q.type({pointer:Q.string,length:Q.number}),zo=Q.partial({cursor:Q.string,
navStack:Q.array(Q.string),data:Q.array(KN),lengths:Q.array(GN)}),iU=Q.intersection([Q.type({versionId:Q.string,appConfig:zo,
users:zo,objectTypes:zo,objectInstances:zo,plugins:zo}),Q.partial({apiVersion:Q.string,minClientVersion:Q.number})]),JN=Q.intersection(
[Q.type({id:Q.string,pointer:Q.string,type:Q.union([Q.literal("user"),Q.literal("group")])}),Q.partial({name:Q.string,email:Q.string,
isAdmin:Q.boolean,usernames:Q.string})]);var ZN=e=>e,ow=k(ZN,e=>e.fields.filter(t=>K_.is(t))),sw=k(ow,e=>wt(e,t=>t.name)),lU=k(sw,it,(e,t)=>e[t]),XN=e=>{let t=e.
map(lw).filter(qi);return pa(["name",...t]).map(n=>`value.${n}`).join(" || ")},lw=e=>{let t=sw(e),r=t.name||t.Name;if(r)
return r.name;let n=ow(e)[0];return n&&(n.type==="text"||n.type==="number")?n.name:"id"};var cw=["type","_scope","_groupKey"],cU=new Set(cw);var QN=e=>qi(e.type)&&qi(e.id),eP=e=>e,uw=k(eP,e=>e.types),uU=k(uw,XN),tP=k(uw,e=>wt(e,t=>t.name)),rP=k(tP,it,(e,t)=>e[t]),
dU=k(rP,e=>e&&lw(e));var dw=e=>e,nP=k(dw,e=>e.nodes),aP=k(dw,e=>e.plugins),fU=k(nP,aP,(e,t)=>pa([...e.map(r=>r.name),...t.map(r=>r.name)]));var iP=(e,t)=>({metaModel:e,repo:{objects:t}}),oP=e=>e,As=e=>k(oP,t=>{let{data:r=[]}=t??{};return r.map(n=>Gc(n.value)?{
...n.value,pointer:n.pointer}:n.value).filter(e.is)}),sP=As(e_),lP=As(YN),cP=As(z_),gU=As(VN),Jp=As(JN),pw=e=>e,fw=(e,{lenient:t}={})=>{
let r=e.versionId,n=e.apiVersion,a=cP(e.plugins),i=lP(e.objectInstances).filter(QN),o=LN(e.appConfig,a,{lenient:t});return P(
o)?o:R({appConfig:o.right,users:e.users,objectTypes:sP(e.objectTypes),objectInstances:i,plugins:a,versionId:r,apiVersion:n})},
uP=k(pw,e=>fw(e)),yU=k(pw,e=>fw(e,{lenient:!0})),hw=e=>e,dP=k(hw,e=>({types:e.objectTypes})),vU=k(hw,dP,(e,t)=>iP(t,e.objectInstances)),
wc=e=>e,mw=e=>{let[t]=pp(e);return t},Zp=e=>e.replace(/\.?value$/,""),gw=k(Jp,e=>wt(e,t=>Zp(t.pointer)));var Xp=k(wc,gw,it,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,type:o,isAdmin:s}=n;if(o!=="group")return;let l=r?
Xp(e,mw(r)):void 0;return{id:a,name:i,parent:l,isAdmin:s}}),pP=k(wc,gw,it,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,
email:o,type:s,isAdmin:l}=n;if(s!=="user"||!o)return;let c=Xp(e,mw(r));return{id:a,name:i,email:o,parent:c,isAdmin:l}}),
yw=k(Jp,e=>Bn(e,t=>t.type)),vw=k(wc,yw,(e,t)=>(t.user||[]).flatMap(({pointer:a})=>{let i=pP(e,Zp(a));return i?[i]:[]})),
bU=k(wc,yw,(e,t)=>t.group.flatMap(({pointer:n})=>{let a=Xp(e,Zp(n));return a?[a]:[]})),fP=k(vw,e=>wt(e,t=>t.email)),hP=k(
vw,e=>wt(e,t=>t.name)),wU=k(hP,it,(e,t)=>e[t]),TU=k(fP,it,(e,t)=>e[t]),Iy=e=>(e??"").split(/[\s,]+/).map(t=>t.trim().toLowerCase()).
filter(t=>t&&t!=="anon"),kU=k(Jp,it,(e,t)=>{var r;let n=t.trim().toLowerCase();if(!n||n==="anon")return;let a=e.find(i=>i.
type==="user"&&Iy(i.usernames).includes(n));if(a)return{id:a.id,name:(r=a.name)!=null?r:a.id,usernames:Iy(a.usernames)}});var SU=29*24*60*60*1e3;var bw=["flowStep:script","content:data-script","content:action"],$s=[{name:"publishData",async:!0,signature:'publishDat\
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
lue("whoAmI", AuthorId)']},{name:"setPresenceContext",async:!0,signature:"setPresenceContext(value: string | null): void",
description:"Tells the signed-in user's friends what they are doing in this app, beside the platform's own record of whi\
ch app they have open \u2014 e.g. the room code of the game they're in, so a friend can join it. `value` is a string of at mo\
st 256 characters; `null` clears it. Only friends can read it, and it lasts for this page: opening another app starts wi\
thout it. It does nothing for a visitor who isn't signed in, signed in with a name and PIN, or has no friends yet, so ca\
ll it unconditionally. There is no invite or notification: a friend's app reads it and decides what to show.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:["setPresenceContext(roomCode)","setPresenceContext(n\
ull)"]},{name:"clearValues",async:!0,signature:"clearValues(...names: string[]): void",description:"Wipes everything the\
 user has entered under each NAMED node \u2014 its own value, every descendant field, and every slot of a repeating section \u2014\
 in one atomic update. Names resolve like a formula read: this node's scope outward, then any name unique across the app\
 (an ambiguous name throws and nothing is cleared). Use it to reset a section for a fresh round \u2014 e.g. a game's per-roun\
d inputs when a new game starts, which otherwise keep last game's typing because the slots reuse the same index.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['clearValues("lineSlots")','clearValues("answers", "\
notes"); setAppValue("roomCode", newCode)']},{name:"sendToWidget",async:!0,signature:"sendToWidget(widgetName: string, c\
ommand: string, args?: object): void",description:"Tells a sandboxed widget on the screen to DO something \u2014 e.g. `spotif\
yplayer`'s `play` / `stop` \u2014 so a button outside the widget can drive it. `widgetName` is the widget node's name, resolv\
ed like a formula read (an unknown or ambiguous name throws); which commands exist, and their args, is up to each widget\
. The command is delivered at once, BEFORE any value this same script just set reaches the widget as a parameter \u2014 so pa\
ss everything the command needs in `args` rather than relying on a `setValues` a line earlier. A widget that isn't showi\
ng (hidden, or on another screen) ignores it. No reply comes back. Runs in preview too.",availableIn:["flowStep:script",
"content:data-script","content:action"],examples:['sendToWidget("player", "play", {trackUri: q.uri, startMs: q.startMs, \
lengthMs: 3000})','sendToWidget("player", "stop"); navigate("results")']},{name:"navigate",async:!0,signature:"navigate(\
pointerKey: string, args?: object): void",description:"Moves the app cursor to the given screen/section pointer key. Bot\
h forms push \u2014 a nav-stack entry (Back returns to the caller) plus a reset of any flow state under the target, exactly l\
ike an `<a>` link. The optional `args` object additionally exposes its values as `$args.<key>` on the destination screen\
 \u2014 pair with `byId('Type', $args.id)` on the destination to land on a record you just created. From a content action's s\
cript, call it as the last statement \u2014 a preceding setAppValue(...) is the preselect-then-navigate idiom.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['navigate("home")','navigate("matchDetail", {founder\
Id: newFounder.id})']},{name:"replaceScreen",async:!0,signature:"replaceScreen(pointerKey: string, args?: object): void",
description:"Swaps the current screen for the given screen/section pointer key WITHOUT adding a back-stack entry and WIT\
HOUT resetting flow state under the target \u2014 Back returns to wherever the caller came from. Use for redirect-style moves\
 (a landing screen that forwards to the right tab). Prefer `navigate` for ordinary drill-down: replacing into a screen t\
hat contains a flow re-shows the flow's last completed step instead of a fresh run.",availableIn:["flowStep:script","con\
tent:data-script","content:action"],examples:['replaceScreen("home")','replaceScreen("tabDetail", {id: $params.id})']},{
name:"back",async:!0,signature:"back(): void",description:'Goes back one nav-stack entry \u2014 exactly what the Back button \
(or a legacy `href="@pop"`) does. Takes no arguments. A Back/Cancel control in a content template is an action whose scr\
ipt is just `back()`.',availableIn:["flowStep:script","content:data-script","content:action"],examples:["back()"]},{name:"\
updateData",async:!0,signature:"updateData({type: string, id: string, patch: object}): {id: string, ...}",description:"P\
artial-updates an existing record by id. Reads the current record from $data, shallow-merges `patch` over it, and writes\
 back via the same path the Form node's publish button uses \u2014 so create/update/edit-by-form/edit-by-script all converge \
on one backend op. Returns the merged record. Throws if no record of that type+id is currently loaded in $data. Object p\
roperty shorthand is supported: `{Name, Role}` means `{Name: Name, Role: Role}` (and `id` means `id: id`), so a patch bu\
ilt from same-named scope variables stays concise.",availableIn:["flowStep:script","content:data-script","content:action"],
examples:['updateData({type: "Post", id: post.id, patch: {Content: newContent}})','updateData({type: "Traveller", id, pa\
tch: {Name, Role, Bio}})']},{name:"deleteData",async:!0,signature:"deleteData({type: string, id: string | string[]}): vo\
id",description:"Soft-deletes one record (when `id` is a string) or N records (when `id` is an array of strings) by sett\
ing `isDeleted: true`. Records remain in storage with their fields preserved; org-level filters (a `whereClause` on the \
subsection, or `filter(..., !it.isDeleted)` in a template) hide them from the UI. Cascades through declared parent relat\
ions: every loaded record of an object type whose `parent: {type, idField}` points at a deleted record is soft-deleted t\
oo, recursively, children before parents \u2014 so do NOT filter and delete children by hand when the child type declares `pa\
rent`. Only children currently loaded in $data are found, so the child type must be declared as a data source by some no\
de. Restoring a parent does not restore its children. To remove records permanently, use `hardDelete`. Throws if any ref\
erenced record is not currently loaded in $data.",availableIn:["flowStep:script","content:data-script","content:action"],
examples:['deleteData({type: "Post", id: post.id})','deleteData({type: "Photo", id: photos.map((p) => p.id)})','deleteDa\
ta({type: "Post", id: id}) // Photo declares parent: {type: "Post", idField: "postId"}, so its photos go too']},{name:"d\
eleteFile",async:!0,signature:"deleteFile(url: string | string[]): void",description:"Permanently deletes an uploaded fi\
le (an image a `fileInput` stored, by its URL) from this org's Storage \u2014 the blob a record field points at, not the reco\
rd. Opt in for records that are genuinely gone: `deleteData` is a soft delete that keeps the record restorable, so calli\
ng `deleteFile` beside it sacrifices restore of the photo. Only files under THIS org's own upload prefix are touched; an\
y other URL (a web-search pick, another org's file, an empty field) is silently skipped, never an error, so it is safe t\
o call unconditionally. A file that is already gone is tolerated. Accepts an array for multi-file fields.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['deleteData({type: "Event", id: id}); deleteFile(Pic\
); navigate("calendar")',"deleteFile(photos.map((p) => p.url))"]},{name:"hardDelete",async:!0,signature:"hardDelete({typ\
e: string, id: string | string[]}): {deleted: {type, id}[], notFound: string[], blobsDeleted: string[], blobsSkippedShar\
ed: string[]}",description:"PERMANENTLY removes records \u2014 irreversible, unlike `deleteData`'s restorable soft delete. Ru\
ns on the server: removes every stored copy (a record and its soft-delete tombstone alike), cascades through declared pa\
rent relations across ALL stored records (not just those loaded in $data, so the child type needs no data source), and d\
eletes this org's own uploaded files that no surviving record, realtime record or config still references (a file shared\
 with something that survives is kept and reported in `blobsSkippedShared`). Only an org admin, or the user who created \
every named record, may call it; cascaded children go with their parent whoever made them. Refuses realtime-rail types, \
and throws for an embedded type (nothing on the server to delete \u2014 use `deleteData`). Unknown ids are reported in `notFo\
und`, not thrown. Prefer `deleteData` unless the records must really be gone (personal data, a mistaken import).",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['hardDelete({type: "Post", id: post.id})','r = hardD\
elete({type: "Game", id: gameIds}); navigate("home")']},{name:"setRealtime",async:!0,signature:"setRealtime(path: string\
, value: object): {ownerUid: string, ...}",description:"Creates or replaces ONE realtime record at `path` (shaped `{Type\
}/{recordId}`, relative to the org's realtime root), reflecting live to every subscriber of that type. `value` must be a\
n object; it is stamped with your `ownerUid`, and security rules let you write only records you own. The record's id IS \
the final path segment, so any `id` (and `type`) field in `value` is ignored \u2014 spreading a record read from `$data` is s\
afe. It REPLACES the whole record: a field you leave out is deleted, so to change some fields of an existing record use \
`updateRealtime` instead. Use it to create fixed-id records (a game room keyed by its code, a player keyed by identity);\
 it stamps the `createdAt` that cleanup timers key on.",availableIn:["flowStep:script","content:data-script","content:ac\
tion"],examples:['setRealtime("Game/" + roomCode, {phase: "lobby", hostId: whoAmI})','setRealtime("Player/" + whoAmI, {n\
ame, gameId: roomCode})']},{name:"updateRealtime",async:!0,signature:"updateRealtime(path: string, patch: object): {owne\
rUid: string, ...patch}",description:"MERGES `patch` into ONE realtime record at `path` (shaped `{Type}/{recordId}`, rel\
ative to the org's realtime root), reflecting live to every subscriber of that type. Fields `patch` doesn't mention are \
KEPT \u2014 the safe way to change some fields of an existing record (a game's `phase`, a player's score) without re-listing \
the rest. Shallow: each top-level key replaces that field whole (a nested object is not merged into), and a `null` value\
 deletes the field. Keys may not contain `/`, and `patch` must have at least one field; `id`/`type` are ignored. Securit\
y rules let you update only records you own. Create the record with `setRealtime` first: a merge onto a missing path doe\
s create it, but without the `createdAt` stamp cleanup timers key on. Returns the patch as written (with your `ownerUid`\
), not the whole merged record.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['updat\
eRealtime("Game/" + roomCode, {phase: "playing", round: 1})','updateRealtime("Player/" + whoAmI, {score: me.score + 1})']},
{name:"pushRealtime",async:!0,signature:"pushRealtime(path: string, value: object): {id: string, ownerUid: string, ...}",
description:"Appends a NEW realtime record under the collection `path` (shaped `{Type}`) with a server-generated id, ref\
lecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`. Returns th\
e record with its new `id` \u2014 use it to link related records. Use for append-only collections (chat messages, submissions\
) where you don't choose the id.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['msg \
= pushRealtime("ChatMessage", {text: comment, gameId: roomCode})','entry = pushRealtime("Drawing", {url: image.url, game\
Id: roomCode})']},{name:"removeRealtimeOnDisconnect",async:!0,signature:"removeRealtimeOnDisconnect(path: string): void",
description:"Registers a server-side rule that DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relati\
ve to the org's realtime root) when this client's connection drops \u2014 e.g. the tab closes or the network is lost. Call it\
 right after `setRealtime` creates the record you want auto-cleaned (a player keyed by identity), so a player who leaves\
 vanishes from the live roster instead of stranding it. You may only auto-remove records you own. The deletion is queued\
 by the realtime server and fires on disconnect, not immediately \u2014 it is the wrong tool for removing a record right now.",
availableIn:["flowStep:script","content:data-script","content:action"],examples:['setRealtime("Player/" + pid, {name, ga\
meId: roomCode}); removeRealtimeOnDisconnect("Player/" + pid)']},{name:"removeRealtime",async:!0,signature:"removeRealti\
me(path: string): void",description:"Immediately DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, rela\
tive to the org's realtime root), reflecting live to every subscriber of that type. Unlike `removeRealtimeOnDisconnect` \
(which fires only when the connection drops), this removes the record right now. Security rules let you delete a record \
you own, or \u2014 for the org's creator \u2014 any realtime record in your own org (so an owner can clean up old game rooms). Use\
 for an admin/owner 'delete this room' control.",availableIn:["flowStep:script","content:data-script","content:action"],
examples:['removeRealtime("Game/" + roomCode)','removeRealtime("ChatMessage/" + msgId)']},{name:"advanceFlow",async:!0,signature:"\
advanceFlow(): void",description:"Advances the enclosing flow to its next step \u2014 and finishes (closes) the flow when cal\
led on the last step. Only valid from a Content script (a declared action or a legacy `data-script`) rendered INSIDE a f\
low; it lets you replace the built-in Next/Finish button with your own control (pair with the flow's `hideNav`/`hideTopB\
ar` options for a chrome-less, custom-driven flow). Advancing into an auto-running step (e.g. a `flowStep:script`) trigg\
ers that step, so this is also how a custom 'Submit' button kicks off the flow's final script. Throws if called outside \
a flow.",availableIn:["content:data-script","content:action"],examples:["advanceFlow()"]},{name:"leaveVideoRoom",async:!0,
signature:"leaveVideoRoom(): void",description:"Leaves the app's active video call, if one is active. A `videoRoom` node\
's call outlives screen navigation (multiple nodes can share one call across screens), so leaving is never automatic \u2014 c\
all this explicitly wherever a script means for video to actually end, e.g. a 'leave game' or 'back to the start' action\
. Safe to call even when no call is active (no-op, does not throw).",availableIn:["flowStep:script","content:data-script",
"content:action"],examples:['setAppValue("roomCode", ""); leaveVideoRoom(); navigate("home")']},{name:"endVideoRoom",async:!0,
signature:"endVideoRoom(): void",description:"End the video call for EVERYONE in the room, not just this device. Only wh\
oever started the room may do this \u2014 the platform refuses anyone else \u2014 so gate the control on your own host check too. \
Unlike leaveVideoRoom, this is final: nobody can rejoin the same room afterwards. Use it for a deliberate 'we're done' a\
t the end of a session; use leaveVideoRoom when one person is stepping out.",availableIn:["flowStep:script","content:dat\
a-script","content:action"],examples:['endVideoRoom(); navigate("home")']},{name:"spotifyIsConnected",async:!0,signature:"\
spotifyIsConnected(): boolean",description:'True when the person running the script has connected their own Spotify acco\
unt (at orgiggly.com/connect/spotify). Read-only, so it also works in preview. Scripts have no `if`, so store the result\
 and let a formula decide what to show \u2014 e.g. a "Connect Spotify" prompt.',availableIn:["flowStep:script","content:\
data-script","content:action"],examples:['ok = spotifyIsConnected(); setAppValue("spotifyReady", ok)']},{name:"spotifySe\
archTracks",async:!0,signature:"spotifySearchTracks(songs: {title: string, artist?: string}[], options?: {limit?: number\
}): {uri: string, id: string, title: string, artist: string, artists: string[], album: string, albumType: string, year: \
number | null, artUrl: string | null, durationMs: number, explicit: boolean}[][]",description:"Looks every song up on th\
e viewer's connected Spotify account and returns ONE candidate list per song, in the same order \u2014 an empty list when not\
hing matched (a miss never throws). Batch by design: a script has no loops and cannot call an async host inside `map`, s\
o pass the whole list in one call, then pick the best candidate per song with ordinary formulas or a `function` node (pr\
efer the matching artist; avoid live, remix, karaoke and cover versions). `limit` is candidates per song: default 5, at \
most 10. Throws \"Connect Spotify first (orgiggly.com/connect/spotify)\" when the viewer hasn't connected. Read-only, so i\
t also runs in preview.",availableIn:["flowStep:script","content:data-script","content:action"],examples:["results = spo\
tifySearchTracks(songs.map((s) => ({title: s.title, artist: s.artist})))",'results = spotifySearchTracks([{title: "Mr. B\
rightside", artist: "The Killers"}], {limit: 3}); setAppValue("firstUri", results[0][0].uri)']},{name:"spotifyListPlayli\
sts",async:!0,signature:"spotifyListPlaylists(): {id: string, name: string, trackCount: number, imageUrl: string | null}\
[]",description:"The viewer's Spotify playlists that a quiz can be built from: the ones they own or collaborate on (Spot\
ify won't let an app read the tracks of any other playlist, followed ones included). Feed it to a `selectInput`'s `picke\
rValues` (ids are strings) and pass the chosen id to `spotifyPlaylistTracks`. Throws \"Connect Spotify first (orgiggly.co\
m/connect/spotify)\" when the viewer hasn't connected, and \"Reconnect Spotify to use your playlists\" when they connected \
before playlists were supported. Read-only, so it also runs in preview.",availableIn:["flowStep:script","content:data-sc\
ript","content:action"],examples:["spotifyListPlaylists()",'lists = spotifyListPlaylists(); setAppValue("playlistCount",\
 length(lists))']},{name:"spotifyPlaylistTracks",async:!0,signature:"spotifyPlaylistTracks(playlistId: string): {uri: st\
ring, id: string, title: string, artist: string, artists: string[], album: string, albumType: string, year: number | nul\
l, artUrl: string | null, durationMs: number, explicit: boolean}[]",description:"The tracks of one of the viewer's playl\
ists, in playlist order and in the same shape as a `spotifySearchTracks` candidate (podcast episodes and local files are\
 left out; up to 500 tracks). `playlistId` is an id from `spotifyListPlaylists`, a `spotify:playlist:\u2026` URI or an open.s\
potify.com link. Shuffle with `shuffle(tracks, now())` to pick at random. Throws the same Connect / Reconnect errors as \
`spotifyListPlaylists`, and a clear error for a playlist the viewer neither owns nor collaborates on. Read-only, so it a\
lso runs in preview.",availableIn:["flowStep:script","content:data-script","content:action"],examples:["tracks = spotify\
PlaylistTracks(playlistId); picks = shuffle(tracks, now()).slice(0, 10)"]},{name:"speak",async:!0,signature:"speak(text:\
 string, lang?: string, rate?: number): void",description:'Speaks `text` aloud via the device\'s speech synthesis (the sa\
me Web Speech path as the legacy `data-speak` attribute, plus error handling). `lang` accepts a BCP-47 code ("fr-FR") or\
 a common English language name ("French"); `rate` is playback speed 0.1\u201310. Toggle-aware: calling it with the SAME text\
 while it is still speaking stops playback instead.',availableIn:["content:action"],examples:['speak($params.text, "fr-F\
R")',"speak(story.Original, story.Language, 0.9)"]},{name:"stopSpeech",async:!0,signature:"stopSpeech(): void",description:'\
Stops any in-progress speech synthesis immediately (the legacy `data-speak-action="stop"` behaviour). Safe to call when \
nothing is speaking \u2014 no-op, does not throw.',availableIn:["content:action"],examples:["stopSpeech()"]},{name:"copy\
Text",async:!0,signature:"copyText(text: string): void",description:"Copies `text` to the device's clipboard and shows a\
 brief \"Copied\" note. Content actions only, because a browser lets a page write the clipboard only in response to a tap \
or click. Throws (so the action's error snackbar reports it) where the clipboard isn't available, e.g. a page not served\
 over HTTPS.",availableIn:["content:action"],examples:["copyText(rosterText)","copyText($params.link)"]},{name:"enablePu\
sh",async:!0,signature:'enablePush(): "subscribed" | "denied" | "unavailable" | "ios-not-installed" | "preview"',description:"\
Asks for notification permission (only if it hasn't been asked) and registers this device for the org's pushes \u2014 the hea\
der bell's subscribe, as a button the org can place where it matters (\u{1F514} Remind me). The device is registered against th\
e visitor's auth uid, which is what a transition rule's `notifyTo` names. Content actions only, because the permission p\
rompt needs a tap. Returns what happened, so store it and word the button from it: `subscribed`; `denied` (blocked \u2014 the\
y must re-enable it in browser or phone settings); `unavailable` (this browser has no web push); `ios-not-installed` (iP\
hone/iPad in a browser tab \u2014 web push works only once the site is added to the home screen); `preview` (a design preview\
, nothing registered).",availableIn:["content:action"],examples:['r = enablePush(); setAppValue("pushState", r)']},{name:"\
setValue",async:!0,signature:"setValue(value: any): void",description:"Writes the content node's OWN value \u2014 the node wh\
ose action is running \u2014 so formulas elsewhere can read it back via the node's name (the legacy `setValue=` attribute's b\
ehaviour). Use it for local UI state a content node carries itself (selected tab, filter toggle); for app-level state us\
e `setAppValue` instead.",availableIn:["content:action"],examples:["setValue($params.id)",'setValue("")']},{name:"setVal\
ues",async:!0,signature:"setValues(values: {[fieldName: string]: any}): void",description:"Writes SEVERAL fields at once\
, by name, as ONE atomic state update (#407). Each key is a node name resolved from this content node's scope outward \u2014 \
exactly the names a formula here could read \u2014 and every value is evaluated against the same state snapshot before any wr\
ite lands, so `setValues({a: b, b: a})` is a genuine swap with no half-applied render in between. A name nothing in scop\
e declares throws (nothing is written). Use it for any control that must move two or more fields together \u2014 swap, reset-\
to-defaults, apply-a-preset; for one field use `setValue` (own value) or `setAppValue` (app variable).",availableIn:["co\
ntent:action"],examples:["setValues({myLanguage: otherLanguage, otherLanguage: myLanguage})",'setValues({minPrice: 0, ma\
xPrice: 1000, sortBy: "newest"})']},{name:"submit",async:!0,signature:"submit(): {id: string, ...}",description:"Publish\
es the content node's enclosing submit context object (the legacy `@submit` href behaviour): resolves the surrounding fo\
rm-like object, publishes it as a record, then writes the server-stamped `id`/`createdAt`/`createdBy` back into the sour\
ce fields and shows a success snackbar. Returns the published record. Throws when there is no submit context or the publ\
ish fails \u2014 so a failing `submit()` aborts the action's `navigate` step.",availableIn:["content:action"],examples:[
"submit()"],status:"legacy",use:"a declared action or a flow `script` step that calls `publishData({type, data: {...}})`\
 with the inputs named explicitly"}],mP=$s.filter(e=>e.async).map(e=>e.name),EU=$s.filter(e=>!e.async).map(e=>e.name),gP=e=>bw.
some(t=>t===e),yP=e=>gP(e)?$s.filter(t=>t.availableIn.includes(e)).map(t=>t.name):[],vP=Object.fromEntries($s.map(e=>[e.
name,async()=>{throw new Error(`${e.name} isn't available in a test pack: stub it in hosts.asyncHosts`)}])),bP=e=>{if(!P(
e))return e;let t=e.left;return{left:"failingExpression"in t?{message:t.message,expression:N_(t.failingExpression)}:{message:t.
message,expression:t.source}}},wP=e=>{if(!("$now"in e))return e;let{$now:t,...r}=e;if("now"in r&&r.now!==t)throw new Error(
`orgPack: context sets both $now (${String(t)}) and now (${String(r.now)}) \u2014 pass one.`);return{...r,now:t}},TP=(e,t={})=>{
var r,n,a,i;let o=uP(UN(e));if(P(o))throw new Error(`org config failed to decode: ${String(o.left)}`);let s=o.right.appConfig,
l=new Set(["storage","realtime","callable"].flatMap(E=>bA(s,E).map(_=>_.typeName))),c=[...new Set(((r=t.records)!=null?r:
[]).map(E=>E.type).filter(E=>!l.has(E)))];if(c.length)throw new Error(`orgPack: record type(s) ${c.join(", ")} are not d\
eclared as a datasource by any node in this config \u2014 the live app would never load them. Declare a data node (e.g. a sub\
section with data: {dataType, source: "storage"}) or remove the fixture records.`);let u=((n=t.records)!=null?n:[]).filter(
E=>E.isDeleted!==!0),d={objects:[...o.right.objectInstances,...u]},f=wP(t.plugins?{...qN(o.right.plugins),...t.context}:
(a=t.context)!=null?a:{}),h=mN(s,f,d);gN(h,(i=t.init)!=null?i:{});let y=()=>h.getState(),b=[],T=E=>{let _=Ma(y(),E);return xe(
_)&&_.right===!0},S=E=>{let _=B(y(),E);for(;_;){if(T(_.key))return!1;_=Gr(y(),_.key)}return!0};return{...h,evalAt:(E,_="")=>ze(
$r(y(),E.startsWith("@")?E:`@${E}`,_)),value:E=>ze(ir(y(),E)),lengthOf:E=>ze(Pa(y(),E)),setValue:(E,_)=>{h.api.updateValue(
E,_)},clearValue:E=>{h.api.clearSubtree(E)},setCursor:(E,_)=>{h.api.setCursor(E,_)},isVisible:S,visibleChildren:E=>S(E)?
Oi(y(),E).map(_=>_.key):[],runningSlot:E=>{let _=qo(y(),"",E);if(_===void 0)throw new Error(`runningSlot: no node named \
"${E}" in this org`);return O2(y(),_)},showsAnswerProgress:E=>{let _=qo(y(),"",E);if(_===void 0)throw new Error(`showsAn\
swerProgress: no node named "${E}"`);return P2(y(),_)},childKeys:E=>kt(y(),E).map(_=>_.key),renderHtml:E=>{let _=B(y(),E).
node.htmlTemplate;if(typeof _!="string")throw new Error(`no htmlTemplate at pointer "${E}"`);let O=up(_);if(!O.startsWith(
"@"))return O;let M=ze($r(y(),O,E));if(M!==void 0&&typeof M!="string")throw new Error(`htmlTemplate at "${E}" evaluated \
to a non-string (${JSON.stringify(M)}); the renderer rejects it. Wrap a html\`\u2026\` result in a template: @\`\${html\`\u2026\`}\``);
return String(M)},widgetCommands:b,nodeAt:E=>B(y(),E).node,runScriptAt:(E,_,O,M)=>{let W=O??B(y(),E).node.script;if(typeof W!=
"string"||W.length===0)throw new Error(`no script found at pointer "${E}"`);let G=async(...Y)=>{(Y.length===1&&Array.isArray(
Y[0])?Y[0]:Y).map(pe=>{let ie=qo(y(),E,String(pe));if(ie===void 0)throw new Error(`clearValues: no node named "${String(
pe)}" is in scope here`);return ie}).forEach(pe=>h.api.clearSubtree(pe))},Z=async(Y,te,_e)=>{let pe=qo(y(),E,String(Y));
if(pe===void 0)throw new Error(`sendToWidget: no node named "${String(Y)}" is in scope here`);if(!B(y(),pe).node.pluginName)
throw new Error(`sendToWidget: "${String(Y)}" is not a widget node`);b.push({widget:String(Y),key:pe,command:String(te),
..._e===void 0?{}:{args:_e}})},H=async Y=>{h.api.updateValue(B(y(),E).key,Y)},we=async Y=>{if(typeof Y!="object"||Y===null||
Array.isArray(Y))throw new Error("setValues: expected an object of {fieldName: value}, e.g. setValues({a: b, b: a})");let te=Object.
entries(Y).map(([_e,pe])=>{let ie=qo(y(),E,_e);if(ie===void 0)throw new Error(`setValues: no field named "${_e}" is in s\
cope here`);return pe===void 0?_y.clearValue(ie):_y.updateValue(ie,pe)});h.api.bulkAction(te)};return fR(y(),E,W,{..._,asyncHosts:{
...vP,clearValues:G,sendToWidget:Z,setValue:H,setValues:we,..._.asyncHosts}},M).then(bP)}}},kP=["id",...cw],Oy=e=>Object.
fromEntries(Object.entries(e).filter(([t])=>!kP.includes(t))),Cy=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),SP=(e=[])=>{
let t=new Map(e.map(({id:o,type:s,...l})=>[`${s}/${o}`,l])),r=[],n=(o,s)=>{let l=String(s);if(typeof s!="string"||l.split(
"/").some(c=>c.length===0))throw new Error(`${o}: path "${l}" has an empty segment`);return l};return{writes:r,record:o=>t.
get(o),asyncHosts:{setRealtime:async(o,s)=>{if(n("setRealtime",o),!Cy(s))throw new Error("setRealtime: `value` must be a\
n object");let l=Oy(s);return r.push({kind:"set",path:String(o),value:l}),t.set(String(o),l),l},updateRealtime:async(o,s)=>{
var l;if(n("updateRealtime",o),!Cy(s))throw new Error("updateRealtime: `patch` must be an object");let c=Object.keys(s);
if(c.length===0)throw new Error("updateRealtime: `patch` must have at least one field");if(c.some(f=>f.includes("/")))throw new Error(
"updateRealtime: patch top-level fields only");let u=Oy(s);r.push({kind:"update",path:String(o),value:u});let d={...(l=t.
get(String(o)))!=null?l:{}};return Object.entries(u).forEach(([f,h])=>{h===null?delete d[f]:d[f]=h}),t.set(String(o),d),
u}}}};var EP=(e,t,r)=>{if(t.size===0)return`No ${r}s declared. Add a declaration to satisfy the reference.`;let n=[...t].map(o=>({
p:o,d:Gv(e,o)})).sort((o,s)=>o.d-s.d),a=n[0];if(a&&a.d<=3)return`Closest ${r}: \`${a.p}\`. Either rename the reference or\
 add \`${e}\` to the org config.`;let i=n.slice(0,5).map(o=>o.p).join(", ");return`Available ${r}s: ${i}. Either rename \
the reference or add \`${e}\`.`};var xP=["objectType","objectInstance","field","plugin","record","user"],xU=new Set([...d_,...p_,...Object.keys(op),...xP,
...Object.keys(uv)]);var _P=e=>e.includes(c_)||e.includes("$")||e.includes("@")||e.includes("{"),AP=e=>{var t;let n=(e.startsWith("/")?e.slice(
1):e).split(".");return((t=n[n.length-1])!=null?t:"").replace(/\[\d+\]$/g,"")};var ta=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",ww=new Set(["navigate","replaceScreen","pushCursor","set\
Cursor"]),$P=new Set(["replaceScreen","setCursor"]);var Qp=e=>Array.isArray(e.arguments)?e.arguments:[],RP=e=>{if(!ta(e))return;let t=e.value;if(typeof t=="string")return t;
if(typeof t=="object"&&t!==null){let r=t.cooked;if(typeof r=="string")return r}},ef=e=>{if(ta(e)){if(e.type==="Literal"&&
typeof e.value=="string")return e.value;if(e.type==="TemplateLiteral"&&Array.isArray(e.expressions)&&e.expressions.length===
0&&Array.isArray(e.quasis))return RP(e.quasis[0])}},IP=e=>(t,r)=>{var n;let a=[],[i,o]=Qp(t);if(i===void 0)return a.push(
{path:r.path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;ta(o)&&o.type==="Literal"&&a.push({path:r.
path,kind:"host-arg-type",message:`\`${e}\`'s second argument must be an object of nav args, not a literal.`,fixHint:`e.\
g. \`${e}('detail', {id: $params.id})\`.`,severity:"error"});let s=ef(i);if(s!==void 0&&s.length===0)return a.push({path:r.
path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;if(s===void 0||r.navTargets===void 0||_P(
s))return a;let l=AP(s);return l.length===0?a:r.navTargets.has(l)?($P.has(e)&&((n=r.flowBearing)==null?void 0:n.has(l))===
!0&&a.push({path:r.path,kind:"action-replace-into-flow",message:`\`${e}("${s}")\` replaces into a screen that contains a \
flow \u2014 replace skips the flow-state reset, so re-entering shows the previous run's completed step instead of a fresh flo\
w.`,fixHint:`Use \`navigate("${s}")\` (push resets flow state under the target and gives Back a nav-stack entry).`,severity:"\
warning"}),a):(a.push({path:r.path,kind:"missing-screen",message:`\`${e}("${s}")\` does not match any named node in appCo\
nfig \u2014 the call will fail at runtime.`,fixHint:EP(l,r.navTargets,"navigation target"),severity:"error"}),a)},OP=(e,t)=>Qp(
e).length===0?[]:[{path:t.path,kind:"host-arg-type",message:"`back()` takes no arguments \u2014 it always goes back one nav-s\
tack entry.",fixHint:"Use `back()`; to go to a specific screen use `navigate('screen')`.",severity:"warning"}],Ad=(e,t)=>{
if(!ta(e)||e.type!=="ObjectExpression")return;let r=Array.isArray(e.properties)?e.properties:[];for(let n of r){if(!ta(n)||
n.type!=="Property"||n.computed===!0)continue;let a=n.key;if((ta(a)?a.type==="Identifier"&&typeof a.name=="string"?a.name:
ef(a):void 0)===t)return n.value}},CP=e=>ta(e)?e.type==="ObjectExpression"?[e]:e.type==="ArrayExpression"&&Array.isArray(
e.elements)?e.elements.filter(t=>ta(t)&&t.type==="ObjectExpression"):[]:[],Ny=(e,t)=>(r,n)=>{var a;let i=n.objectTypeFieldTypes,
[o]=Qp(r),s=ef(Ad(o,"type"));if(i===void 0||s===void 0)return[];let l=i.get(s);if(l===void 0)return[];let c=(a=[...l].find(
([,u])=>u.kind==="builtin"&&u.name==="parentRef"))==null?void 0:a[0];return c===void 0?[]:CP(Ad(o,t)).filter(u=>Ad(u,"_p\
arent")!==void 0).map(()=>({path:n.path,kind:"tree-mixed-parent-spellings",message:`${e} writes \`_parent\` on a \`${s}\`\
, but \`${s}\` declares the \`parentRef\` field \`${c}\`, so the tree reads only \`${c}\` and ignores \`_parent\`.`,fixHint:`\
Write the parent's id to \`${c}\` instead (\`${c}: <parent id>\`), or remove the \`parentRef\` field from \`${s}\` to use\
 the implicit \`_parent\` link everywhere.`,severity:"error"}))},_U=new Map([...[...ww].map(e=>[e,IP(e)]),["back",OP],["\
publishData",Ny("publishData","data")],["updateData",Ny("updateData","patch")]]),AU=new RegExp(`\\b(?:${[...ww].join("|")}\
)\\(`);var NP=Tw.keyof({Person:null});var PP=N.intersection([N.type({name:N.string}),N.partial({type:N.string})]),kw=N.intersection([N.type({name:N.string,fields:N.array(
PP)}),N.partial({description:N.string,wellKnown:NP})]),DP=N.keyof({appFeature:null,none:null}),MP=N.keyof({host:null,global:null,
user:null,group:null}),jP=N.partial({types:N.array(kw),scope:MP,nav:DP,plugins:N.array(N.string)}),LP=N.intersection([N.type(
{screen:N.string,title:N.string}),N.partial({pic:N.string})]),FP=N.intersection([N.type({name:N.string,shape:N.union([N.string,
N.record(N.string,N.string)])}),N.partial({description:N.string})]),UP=N.intersection([N.type({types:N.array(N.string),screens:N.array(
N.string)}),N.partial({functions:N.array(N.string),plugins:N.array(N.string),nav:N.array(LP),notifications:N.array(N.string),
slots:N.array(FP)})]),BP=N.partial({entities:N.array(N.string),seedSlots:N.array(N.string),labels:N.array(N.string)});var HP=N.intersection([N.type({name:N.string,hostType:kw,slot:N.string,fn:N.string}),N.partial({description:N.string})]),
WP=N.intersection([N.type({id:N.string,version:N.number,description:N.string,requires:jP,provides:UP}),N.partial({params:BP,
seams:N.array(HP)})]),qP=N.partial({nav:N.array(N.unknown),navFolder:N.string,notifications:N.array(N.unknown)}),VP=N.partial(
{appConfig:N.array(N.unknown),objectTypes:N.array(N.unknown),objectInstances:N.array(N.unknown),plugins:N.array(N.unknown),
shell:qP}),$U=N.type({manifest:WP,body:VP});var RU=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,
310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,
1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,
773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,
3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,
1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var IU=[...G_];var YP={if:{min:3,max:3},and:{min:0,max:null},or:{min:0,max:null},length:{min:1,max:1},sum:{min:1,max:1},avg:{min:1,max:1},
min:{min:0,max:null},max:{min:0,max:null},first:{min:1,max:1},last:{min:1,max:1},flatten:{min:1,max:1},clamp:{min:3,max:3},
split:{min:1,max:2},join:{min:1,max:2},concat:{min:0,max:null},upper:{min:1,max:1},lower:{min:1,max:1},floor:{min:1,max:1},
ceil:{min:1,max:1},round:{min:1,max:1},abs:{min:1,max:1},today:{min:0,max:0},dateFrom:{min:1,max:1},dateCompare:{min:2,max:2},
formatDate:{min:1,max:2},formatPeriod:{min:1,max:2},generateId:{min:1,max:2},regex:{min:1,max:2},fuzzyMatch:{min:2,max:2},
toJson:{min:1,max:2},rand:{min:1,max:2},uniq:{min:1,max:2},sort:{min:1,max:3},shuffle:{min:2,max:2},handRank:{min:1,max:1},
replace:{min:2,max:3},omit:{min:2,max:2},pick:{min:2,max:2},toMap:{min:2,max:3},keys:{min:1,max:1},values:{min:1,max:1},
entries:{min:1,max:1},mapValues:{min:2,max:2},escapeHtml:{min:1,max:1},safeCssColor:{min:1,max:2},urlEncode:{min:1,max:1},
html:{min:1,max:null},progressBar:{min:1,max:2},progressRing:{min:1,max:2},sparkline:{min:1,max:2},now:{min:0,max:0},nextOccurrence:{
min:3,max:4},byId:{min:2,max:2},forEach:{min:2,max:2},filter:{min:2,max:2},map:{min:2,max:2},reduce:{min:2,max:3},times:{
min:2,max:2},every:{min:2,max:2},some:{min:2,max:2},find:{min:2,max:2},findIndex:{min:2,max:2},count:{min:1,max:2},groupBy:{
min:2,max:2},sumBy:{min:2,max:2}};var OU=new Set($s.map(e=>e.name));var CU=new Map(bw.map(e=>[e,new Set(yP(e))])),NU=new Set(mP);var PU=new Map(Object.entries(YP));var zP=[{attribute:"data-action",label:"Declared action",html:'<button data-action="openTab" data-param-id="${id}">Open<\
/button>',purpose:"Invoke a named action declared in the node's `actions` field \u2014 a `script`; to move screens it calls `\
navigate('screen')`, usually as the last line. `data-param-*` values are render-time interpolated literals, read into `$\
params` with no click-time evaluation. If the action declares `confirm`, the click asks first and the script runs only o\
n confirm; `data-confirm-title` and `data-confirm-body` override that confirm's wording per element (render-time literal\
s, like `data-param-*` \u2014 they cannot create a confirm the action does not declare). See below",status:"current"},{attribute:"\
data-share-url",label:"Share a link",html:'<button data-share-url="https://\u2026" data-share-title="${title}" data-share-tex\
t="${text}">Share</button>',purpose:"Open the device's share sheet with the url (plus the optional title and text); wher\
e there is no share sheet, copy the url and say \"Link copied\". All three are render-time interpolated literals, like `da\
ta-param-*`. An attribute rather than an action host because the share sheet needs the tap itself, which an action's asy\
nc script does not keep on iOS",status:"current"},{attribute:"data-speak-action",label:"Stop speech",html:'<a data-speak\
-action="stop">Stop</a>',purpose:"Stop Web Speech API playback started by `data-speak`. Only `stop` is supported",status:"\
legacy"},{attribute:"data-speak",label:"Speak",html:'<a data-speak="expr" data-speak-lang="expr" data-speak-rate="expr">\
Play</a>',purpose:"Speak text via the Web Speech API; the optional `data-speak-lang` and `data-speak-rate` attributes ar\
e evaluated as formulas alongside the text",status:"legacy"},{attribute:"data-script",label:"One-tap action",html:`<a da\
ta-script='setAppValue("k", "\${id}"); navigate("screen")'>Open</a>`,purpose:"Run a script \u2014 app-state, realtime and pub\
lish writes \u2014 and optionally navigate, in a single tap with **no flow**. See below",status:"legacy"},{attribute:"se\
tValue",label:"Set value",html:'<a setValue="expression">Text</a>',purpose:"Evaluate expression and set as the current n\
ode's value",status:"legacy"},{attribute:"href",label:"External link",html:'<a href="https://example.com" target="_blank\
">Visit</a>',purpose:"A genuine hyperlink \u2014 `http(s):`, `mailto:`, `tel:` and `/`-absolute URLs are left to the browser",
status:"current"},{attribute:"href",label:"Navigate to screen",html:'<a href="screenName">Go</a>',purpose:"Static link t\
o another screen",status:"current"},{attribute:"href",label:"Go back",html:'<a href="@pop">Back</a>',purpose:"Pop the na\
vigation stack",status:"legacy"},{attribute:"href",label:"Submit form",html:'<a href="@submit">Save</a>',purpose:"Submit\
 the current form",status:"legacy"},{attribute:"href",label:"Navigate with args",html:'<a href="screenName" data-args="@\
{ key: value }">Go</a>',purpose:"Navigate and attach named arguments, readable on the destination as `$args.key`. Pair w\
ith `byId('Type', id)` for cross-record links (e.g. linking from one record's detail page to a different record's). Work\
s on `rel=` too",status:"legacy"},{attribute:"rel",label:"Navigate from list item",html:'<a rel="screenName">View</a>',purpose:"\
From a repeating section \u2014 the destination inherits the current item's scope. Resolves *relative to the clicked row*, so\
 it can only reach a screen nested inside that same subsection",status:"legacy"},{attribute:"rel",label:"Seed a form tar\
get",html:'<a rel="formScreen" param="expression">Edit</a>',purpose:"Writes the evaluated value at the destination point\
er before navigating. **Forms only** \u2014 a flow reads `data-args`/`$args`, never `param`",status:"legacy"}],DU=zP.map(
e=>e.attribute).filter((e,t,r)=>r.indexOf(e)===t),Tc=[{id:"rel",tokens:["rel="],attributes:["rel"],fixHint:'Declare an a\
ction whose script ends with navigate("screen") and reference it via data-action instead.',prompt:{order:1,line:'`rel="s\
creen"` / `href="screen" data-args=\u2026` \u2192 an action whose script calls `navigate(\'screen\', {id: $params.id})`'}},
{id:"setValue",tokens:["setValue="],attributes:["setValue"],fixHint:"Declare an action whose `script` calls `setValue(..\
.)` and reference it via `data-action` instead.",prompt:{order:2,line:'`setValue="expr"` \u2192 an action whose `script` call\
s `setValue(expr)`'}},{id:"param",tokens:["param="],attributes:["param"],fixHint:"Declare the action's `params` and bind\
 them via `data-param-*` attributes (or pass computed values as the args object of navigate(...)) instead.",prompt:{order:7,
line:'`param="expr"` \u2192 pass the value as a `data-param-*` binding and read it as `$params.<name>`'}},{id:"data-scri\
pt",tokens:["data-script"],attributes:["data-script"],fixHint:"Declare an action with a `script` and reference it via `d\
ata-action` instead.",prompt:{order:3,line:"`data-script='\u2026'` \u2192 an action's `script` (same script language, same host fu\
nctions)"}},{id:"data-args",tokens:["data-args"],attributes:["data-args"],fixHint:"Pass the values as the second argumen\
t of navigate('screen', {\u2026}) in the action's script instead."},{id:"data-speak",tokens:["data-speak","data-speak-la\
ng","data-speak-rate","data-speak-action"],attributes:["data-speak","data-speak-lang","data-speak-rate","data-speak-acti\
on"],fixHint:"Declare an action whose `script` calls `speak(...)`/`stopSpeech()` and reference it via `data-action` inst\
ead.",prompt:{order:4,line:'`data-speak=\u2026` \u2192 an action whose `script` calls `speak(text, lang?, rate?)`; `data-speak-act\
ion="stop"` \u2192 `stopSpeech()`'}},{id:"href-pop",tokens:['href="@pop"'],attributes:[],prompt:{order:6,line:'`href="@p\
op"` \u2192 an action whose script is `back()`'}},{id:"href-submit",tokens:['href="@submit"'],attributes:[],prompt:{order:5,
line:'`href="@submit"` \u2192 an action whose `script` calls `publishData({type, data: {\u2026}})`, naming each input'}}],
KP=Object.fromEntries(Tc.map(e=>[e.id,e]));var MU=Tc.flatMap(e=>[...e.tokens]),jU=Tc.filter(e=>e.prompt!==void 0).sort((e,t)=>e.prompt.order-t.prompt.order).map(e=>e.
prompt.line);var LU=KP.rel,FU=Tc.filter(e=>e.id!=="rel"&&e.attributes.length>0);var GP=["versionId","apiVersion","appConfig","objectTypes","objectInstances","plugins","users"],JP=["orgSummary","minCli\
entVersion"],UU=[...GP,...JP];var BU=new Map(Object.entries(f_));var HU=new Map(Object.entries(h_)),WU=new Map(Object.entries(m_).map(([e,t])=>[e,Object.entries(t)])),Py,qU=Object.entries(
(Py=g_.objectTypeField)!=null?Py:{});var ZP=["archiveData","archiveId"],VU=["archiveType",...ZP];var YU=ql.Allow.OBJ|ql.Allow.ARR;var zU=[...cv].filter(e=>e!=="variable");var XP="| `customize` | `feature`, `reason` | declares that you are changing an installed feature's own nodes. Without i\
t, the closing gate refuses any change inside a `feature-\u2026` folder |",KU=`

## Installed features

Folders named \`feature-<slug>\` hold installed features: tested functionality this org shares with others. Change a node \
inside one only when the request needs it, and declare the change first:

| op | fields | what it does |
|---|---|---|
${XP}`;var GU=new Set("a an the and or for of to in on with my our your me i we it its this that app apps application something\
 some thing things help keep can like want make build create need would should could be is are was let lets using use si\
mple new tool tools just also all any".split(" ")),QP=e=>e.length>4&&e.endsWith("ies")?`${e.slice(0,-3)}y`:e.length>3&&e.
endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e;var eD=[[["chat","tutor","talk","conversation","speak","spoken","voice"],["ai-chat"]],[["ai","generate","generated","gen\
erator","smart"],["ai-query","image-generation"]],[["image","picture","photo","camera","illustrated"],["image-generation",
"ai-query"]],[["game","party","multiplayer","player","live","realtime","round"],["realtime","transitions"]],[["quiz","re\
vise","revision","flashcard","exam","study","learn","lesson"],["flows","tabs"]],[["booking","book","schedule","calendar",
"rota","signup","form","track","tracker","log"],["forms","storage-data"]],[["notify","notification","reminder","alert"],
["push"]],[["video","call","youtube"],["video"]],[["music","song","audio","jingle","playlist","podcast"],["audio"]],[["m\
ap","trip","travel","holiday","itinerary","route"],["maps"]],[["login","member","private","pin"],["org-login","auth-priv\
ate"]],[["team","group","share","shared","friend"],["group-scoped","realtime"]],[["personal","journal","diary"],["user-s\
coped"]]],JU=new Map(eD.flatMap(([e,t])=>e.map(r=>[QP(r),t])));var tD=Ke.intersection([Ke.type({name:Ke.string}),Ke.partial({parent:Ke.union([Ke.string,Ke.null])})]),rD=Ke.type({orgIds:Ke.array(
Ke.string)}),ZU=Ke.partial({folders:Ke.record(Ke.string,tD),containers:Ke.record(Ke.string,rD),folderOrder:Ke.array(Ke.string)});var Ew=U.keyof({new:null,claimed:null,"fixed-draft":null,published:null,closed:null}),Dt=e=>U.union([e,U.null]),nD=U.intersection(
[U.type({qualifiedOrgId:U.string}),U.partial({configSource:Dt(U.string),versionId:Dt(U.string),previewDraft:Dt(U.boolean),
variant:Dt(U.string)})]),aD=U.intersection([U.type({pathname:U.string}),U.partial({search:Dt(U.string),pointerKey:Dt(U.string),
screenLabel:Dt(U.string)})]),iD=U.partial({buildCommit:U.string,buildTimestamp:U.string,capabilityVersion:U.number,userAgent:U.string,
platform:U.string,language:U.string,timezone:U.string,viewport:U.type({w:U.number,h:U.number}),dpr:U.number,standalone:U.boolean,
online:U.boolean,touch:U.boolean}),oD=U.partial({screenshot:U.type({path:U.string,bytes:U.number,w:U.number,h:U.number}),
state:U.type({path:U.string,bytes:U.number})}),xw={statusNote:Dt(U.string),branch:Dt(U.string),prUrl:Dt(U.string)},XU=U.intersection(
[U.type({id:U.string,createdAt:U.string,reporterUid:U.string,description:U.string,target:nD,location:aD,status:Ew}),U.partial(
{reporterUsername:Dt(U.string),reporterIsOwner:Dt(U.boolean),client:Dt(iD),attachments:Dt(oD),...xw,statusUpdatedAt:Dt(U.string),
statusUpdatedBy:Dt(U.string)})]),QU=U.intersection([U.type({status:Ew,statusUpdatedAt:U.string,statusUpdatedBy:U.string}),
U.partial(xw)]);var e4=24*60*60*1e3;import sD from"node:fs";var lD=e=>{if(e===null||typeof e!="object")return!1;let t=e.appConfig;if(!t||typeof t!="object")return!1;let r=t;return Array.
isArray(r.data)&&Array.isArray(r.lengths)?!1:!!(Array.isArray(r._children)||r.type==="app")},_w=e=>e instanceof Error?e.
message:String(e),tf=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),cD=e=>tf(e)&&lD(e),uD=e=>tf(e)&&tf(e.appConfig)&&
Array.isArray(e.appConfig.data)&&Array.isArray(e.appConfig.lengths),Aw=e=>{let t;try{t=sD.readFileSync(e,"utf8")}catch(n){
return Ce(`cannot read ${e}: ${_w(n)}`)}let r;try{r=JSON.parse(t)}catch(n){return Ce(`${e} is not valid JSON: ${_w(n)}`)}
return cD(r)?R(r):uD(r)?R(aw(r)):Ce(`${e} is not an org config (no appConfig in tree or pointer format)`)};var p4=e=>{let t=typeof e=="string"&&!e.startsWith("file:")?e:dD(e),r=Aw(t);if(P(r))throw new Error(r.left);return r.right};export{TP as createOrgPackApi,SP as createRealtimeStore,p4 as loadOrgTree};
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
