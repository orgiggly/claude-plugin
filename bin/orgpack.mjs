import { createRequire as __ogCreateRequire } from "node:module";
const require = __ogCreateRequire(import.meta.url);
var Iw=Object.create;var pf=Object.defineProperty;var Ow=Object.getOwnPropertyDescriptor;var Cw=Object.getOwnPropertyNames;var Nw=Object.getPrototypeOf,Pw=Object.prototype.hasOwnProperty;var We=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Dw=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Cw(t))!Pw.call(e,a)&&a!==r&&pf(e,a,{get:()=>t[a],
enumerable:!(n=Ow(t,a))||n.enumerable});return e};var oe=(e,t,r)=>(r=e!=null?Iw(Nw(e)):{},Dw(t||!e||!e.__esModule?pf(r,"default",{value:e,enumerable:!0}):r,e));var jn=We(X=>{"use strict";var Mw=X&&X.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(X,"__esModule",{value:!0});X.dual=X.getEndomorphismMonoid=X.SK=X.hole=X.constVoid=X.constUndefined=
X.constNull=X.constFalse=X.constTrue=X.unsafeCoerce=X.apply=X.getRing=X.getSemiring=X.getMonoid=X.getSemigroup=X.getBooleanAlgebra=
void 0;X.identity=Ec;X.constant=Oi;X.flip=Ww;X.flow=ff;X.tuple=qw;X.increment=Vw;X.decrement=Yw;X.absurd=hf;X.tupled=zw;
X.untupled=Kw;X.pipe=Gw;X.not=Zw;var jw=function(e){return function(){return{meet:function(t,r){return function(n){return e.
meet(t(n),r(n))}},join:function(t,r){return function(n){return e.join(t(n),r(n))}},zero:function(){return e.zero},one:function(){
return e.one},implies:function(t,r){return function(n){return e.implies(t(n),r(n))}},not:function(t){return function(r){
return e.not(t(r))}}}}};X.getBooleanAlgebra=jw;var Lw=function(e){return function(){return{concat:function(t,r){return function(n){
return e.concat(t(n),r(n))}}}}};X.getSemigroup=Lw;var Uw=function(e){var t=(0,X.getSemigroup)(e);return function(){return{
concat:t().concat,empty:function(){return e.empty}}}};X.getMonoid=Uw;var Fw=function(e){return{add:function(t,r){return function(n){
return e.add(t(n),r(n))}},zero:function(){return e.zero},mul:function(t,r){return function(n){return e.mul(t(n),r(n))}},
one:function(){return e.one}}};X.getSemiring=Fw;var Bw=function(e){var t=(0,X.getSemiring)(e);return{add:t.add,mul:t.mul,
one:t.one,zero:t.zero,sub:function(r,n){return function(a){return e.sub(r(a),n(a))}}}};X.getRing=Bw;var Hw=function(e){return function(t){
return t(e)}};X.apply=Hw;function Ec(e){return e}X.unsafeCoerce=Ec;function Oi(e){return function(){return e}}X.constTrue=
Oi(!0);X.constFalse=Oi(!1);X.constNull=Oi(null);X.constUndefined=Oi(void 0);X.constVoid=X.constUndefined;function Ww(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.length>1?e(t[1],t[0]):function(n){return e(
n)(t[0])}}}function ff(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:return function(){return t(e.apply(
this,arguments))};case 3:return function(){return r(t(e.apply(this,arguments)))};case 4:return function(){return n(r(t(e.
apply(this,arguments))))};case 5:return function(){return a(n(r(t(e.apply(this,arguments)))))};case 6:return function(){
return i(a(n(r(t(e.apply(this,arguments))))))};case 7:return function(){return o(i(a(n(r(t(e.apply(this,arguments)))))))};case 8:
return function(){return s(o(i(a(n(r(t(e.apply(this,arguments))))))))};case 9:return function(){return l(s(o(i(a(n(r(t(e.
apply(this,arguments)))))))))}}}function qw(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e}function Vw(e){
return e+1}function Yw(e){return e-1}function hf(e){throw new Error("Called `absurd` function which should be uncallable")}
function zw(e){return function(t){return e.apply(void 0,t)}}function Kw(e){return function(){for(var t=[],r=0;r<arguments.
length;r++)t[r]=arguments[r];return e(t)}}function Gw(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:
return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:
return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],
u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}X.hole=hf;var Jw=function(e,t){return t};X.SK=Jw;function Zw(e){
return function(t){return!e(t)}}var Xw=function(){return{concat:function(e,t){return ff(e,t)},empty:Ec}};X.getEndomorphismMonoid=
Xw;var Qw=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,Mw([a],n,!1))}}};X.dual=Qw});var Ci=We(z=>{"use strict";var eT=z&&z.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(z,"__esModule",{value:!0});z.flatMapReader=z.flatMapTask=z.flatMapIO=z.flatMapEither=z.flatMapOption=
z.flatMapNullable=z.liftOption=z.liftNullable=z.fromReadonlyNonEmptyArray=z.has=z.emptyRecord=z.emptyReadonlyArray=z.tail=
z.head=z.isNonEmpty=z.singleton=z.right=z.left=z.isRight=z.isLeft=z.some=z.none=z.isSome=z.isNone=void 0;var La=jn(),tT=function(e){
return e._tag==="None"};z.isNone=tT;var rT=function(e){return e._tag==="Some"};z.isSome=rT;z.none={_tag:"None"};var nT=function(e){
return{_tag:"Some",value:e}};z.some=nT;var aT=function(e){return e._tag==="Left"};z.isLeft=aT;var iT=function(e){return e.
_tag==="Right"};z.isRight=iT;var oT=function(e){return{_tag:"Left",left:e}};z.left=oT;var sT=function(e){return{_tag:"Ri\
ght",right:e}};z.right=sT;var lT=function(e){return[e]};z.singleton=lT;var cT=function(e){return e.length>0};z.isNonEmpty=
cT;var uT=function(e){return e[0]};z.head=uT;var dT=function(e){return e.slice(1)};z.tail=dT;z.emptyReadonlyArray=[];z.emptyRecord=
{};z.has=Object.prototype.hasOwnProperty;var pT=function(e){return eT([e[0]],e.slice(1),!0)};z.fromReadonlyNonEmptyArray=
pT;var fT=function(e){return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.
apply(void 0,n);return e.fromEither(i==null?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i))}}};z.liftNullable=fT;var hT=function(e){
return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.apply(void 0,n);
return e.fromEither((0,z.isNone)(i)?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i.value))}}};z.liftOption=hT;var mT=function(e,t){
return(0,La.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftNullable)(e)(n,a))})};z.flatMapNullable=mT;var gT=function(e,t){
return(0,La.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftOption)(e)(n,a))})};z.flatMapOption=gT;var yT=function(e,t){
return(0,La.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromEither(n(a))})})};z.flatMapEither=yT;var vT=function(e,t){
return(0,La.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromIO(n(a))})})};z.flatMapIO=vT;var bT=function(e,t){
return(0,La.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromTask(n(a))})})};z.flatMapTask=bT;var wT=function(e,t){
return(0,La.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromReader(n(a))})})};z.flatMapReader=wT});var Ac=We(jt=>{"use strict";var TT=jt&&jt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),kT=jt&&jt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ST=jt&&
jt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&TT(t,e,r);return kT(t,e),t};Object.defineProperty(jt,"__esModule",{value:!0});jt.ap=_T;jt.apFirst=
AT;jt.apSecond=$T;jt.apS=RT;jt.getApplySemigroup=IT;jt.sequenceT=CT;jt.sequenceS=PT;var ET=jn(),xT=ST(Ci());function _T(e,t){
return function(r){return function(n){return e.ap(e.map(n,function(a){return function(i){return t.ap(a,i)}}),r)}}}function AT(e){
return function(t){return function(r){return e.ap(e.map(r,function(n){return function(){return n}}),t)}}}function $T(e){
return function(t){return function(r){return e.ap(e.map(r,function(){return function(n){return n}}),t)}}}function RT(e){
return function(t,r){return function(n){return e.ap(e.map(n,function(a){return function(i){var o;return Object.assign({},
a,(o={},o[t]=i,o))}}),r)}}}function IT(e){return function(t){return{concat:function(r,n){return e.ap(e.map(r,function(a){
return function(i){return t.concat(a,i)}}),n)}}}}function _c(e,t,r){return function(n){for(var a=Array(r.length+1),i=0;i<
r.length;i++)a[i]=r[i];return a[r.length]=n,t===0?e.apply(null,a):_c(e,t-1,a)}}var xc={1:function(e){return[e]},2:function(e){
return function(t){return[e,t]}},3:function(e){return function(t){return function(r){return[e,t,r]}}},4:function(e){return function(t){
return function(r){return function(n){return[e,t,r,n]}}}},5:function(e){return function(t){return function(r){return function(n){
return function(a){return[e,t,r,n,a]}}}}}};function OT(e){return xT.has.call(xc,e)||(xc[e]=_c(ET.tuple,e-1,[])),xc[e]}function CT(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=t.length,a=OT(n),i=e.map(t[0],a),o=1;o<
n;o++)i=e.ap(i,t[o]);return i}}function NT(e){var t=e.length;switch(t){case 1:return function(r){var n;return n={},n[e[0]]=
r,n};case 2:return function(r){return function(n){var a;return a={},a[e[0]]=r,a[e[1]]=n,a}};case 3:return function(r){return function(n){
return function(a){var i;return i={},i[e[0]]=r,i[e[1]]=n,i[e[2]]=a,i}}};case 4:return function(r){return function(n){return function(a){
return function(i){var o;return o={},o[e[0]]=r,o[e[1]]=n,o[e[2]]=a,o[e[3]]=i,o}}}};case 5:return function(r){return function(n){
return function(a){return function(i){return function(o){var s;return s={},s[e[0]]=r,s[e[1]]=n,s[e[2]]=a,s[e[3]]=i,s[e[4]]=
o,s}}}}};default:return _c(function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var a={},i=0;i<t;i++)
a[e[i]]=r[i];return a},t-1,[])}}function PT(e){return function(t){for(var r=Object.keys(t),n=r.length,a=NT(r),i=e.map(t[r[0]],
a),o=1;o<n;o++)i=e.ap(i,t[r[o]]);return i}}});var Os=We(mn=>{"use strict";Object.defineProperty(mn,"__esModule",{value:!0});mn.map=mf;mn.flap=MT;mn.bindTo=jT;mn.let=LT;
mn.getFunctorComposition=UT;mn.as=gf;mn.asUnit=FT;var DT=jn();function mf(e,t){return function(r){return function(n){return e.
map(n,function(a){return t.map(a,r)})}}}function MT(e){return function(t){return function(r){return e.map(r,function(n){
return n(t)})}}}function jT(e){return function(t){return function(r){return e.map(r,function(n){var a;return a={},a[t]=n,
a})}}}function LT(e){return function(t,r){return function(n){return e.map(n,function(a){var i;return Object.assign({},a,
(i={},i[t]=r(a),i))})}}}function UT(e,t){var r=mf(e,t);return{map:function(n,a){return(0,DT.pipe)(n,r(a))}}}function gf(e){
return function(t,r){return e.map(t,function(){return r})}}function FT(e){var t=gf(e);return function(r){return t(r,void 0)}}});var vf=We(Cs=>{"use strict";Object.defineProperty(Cs,"__esModule",{value:!0});Cs.getApplicativeMonoid=WT;Cs.getApplicativeComposition=
qT;var yf=Ac(),BT=jn(),HT=Os();function WT(e){var t=(0,yf.getApplySemigroup)(e);return function(r){return{concat:t(r).concat,
empty:e.of(r.empty)}}}function qT(e,t){var r=(0,HT.getFunctorComposition)(e,t).map,n=(0,yf.ap)(e,t);return{map:r,of:function(a){
return e.of(t.of(a))},ap:function(a,i){return(0,BT.pipe)(a,n(i))}}}});var $c=We(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.chainFirst=VT;Ni.tap=bf;Ni.bind=YT;function VT(e){
var t=bf(e);return function(r){return function(n){return t(n,r)}}}function bf(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}function YT(e){return function(t,r){return function(n){return e.chain(n,function(a){
return e.map(r(a),function(i){var o;return Object.assign({},a,(o={},o[t]=i,o))})})}}}});var wf=We(Ns=>{"use strict";Object.defineProperty(Ns,"__esModule",{value:!0});Ns.tailRec=void 0;var zT=function(e,t){for(var r=t(
e);r._tag==="Left";)r=t(r.left);return r.right};Ns.tailRec=zT});var xf=We(kt=>{"use strict";var KT=kt&&kt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),GT=kt&&kt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),JT=kt&&
kt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&KT(t,e,r);return GT(t,e),t};Object.defineProperty(kt,"__esModule",{value:!0});kt.fromOption=kf;
kt.fromPredicate=XT;kt.fromOptionK=Sf;kt.chainOptionK=QT;kt.fromEitherK=Rc;kt.chainEitherK=ek;kt.chainFirstEitherK=tk;kt.
filterOrElse=rk;kt.tapEither=Ef;var ZT=$c(),Tf=jn(),sa=JT(Ci());function kf(e){return function(t){return function(r){return e.
fromEither(sa.isNone(r)?sa.left(t()):sa.right(r.value))}}}function XT(e){return function(t,r){return function(n){return e.
fromEither(t(n)?sa.right(n):sa.left(r(n)))}}}function Sf(e){var t=kf(e);return function(r){var n=t(r);return function(a){
return(0,Tf.flow)(a,n)}}}function QT(e,t){var r=Sf(e);return function(n){var a=r(n);return function(i){return function(o){
return t.chain(o,a(i))}}}}function Rc(e){return function(t){return(0,Tf.flow)(t,e.fromEither)}}function ek(e,t){var r=Rc(
e);return function(n){return function(a){return t.chain(a,r(n))}}}function tk(e,t){var r=Ef(e,t);return function(n){return function(a){
return r(a,n)}}}function rk(e,t){return function(r,n){return function(a){return t.chain(a,function(i){return e.fromEither(
r(i)?sa.right(i):sa.left(n(i)))})}}}function Ef(e,t){var r=Rc(e),n=(0,ZT.tap)(t);return function(a,i){return n(a,r(i))}}});var _f=We(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.right=ke.left=ke.flap=ke.Functor=ke.Bifunctor=
ke.URI=ke.bimap=ke.mapLeft=ke.map=ke.separated=void 0;var Ic=jn(),nk=Os(),ak=function(e,t){return{left:e,right:t}};ke.separated=
ak;var ik=function(e,t){return(0,Ic.pipe)(e,(0,ke.map)(t))},ok=function(e,t){return(0,Ic.pipe)(e,(0,ke.mapLeft)(t))},sk=function(e,t,r){
return(0,Ic.pipe)(e,(0,ke.bimap)(t,r))},lk=function(e){return function(t){return(0,ke.separated)((0,ke.left)(t),e((0,ke.
right)(t)))}};ke.map=lk;var ck=function(e){return function(t){return(0,ke.separated)(e((0,ke.left)(t)),(0,ke.right)(t))}};
ke.mapLeft=ck;var uk=function(e,t){return function(r){return(0,ke.separated)(e((0,ke.left)(r)),t((0,ke.right)(r)))}};ke.
bimap=uk;ke.URI="Separated";ke.Bifunctor={URI:ke.URI,mapLeft:ok,bimap:sk};ke.Functor={URI:ke.URI,map:ik};ke.flap=(0,nk.flap)(
ke.Functor);var dk=function(e){return e.left};ke.left=dk;var pk=function(e){return e.right};ke.right=pk});var $f=We(Wr=>{"use strict";var fk=Wr&&Wr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),hk=Wr&&Wr.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),mk=Wr&&
Wr.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&fk(t,e,r);return hk(t,e),t};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.wiltDefault=gk;
Wr.witherDefault=yk;Wr.filterE=vk;var Af=mk(Ci());function gk(e,t){return function(r){var n=e.traverse(r);return function(a,i){
return r.map(n(a,i),t.separate)}}}function yk(e,t){return function(r){var n=e.traverse(r);return function(a,i){return r.
map(n(a,i),t.compact)}}}function vk(e){return function(t){var r=e.wither(t);return function(n){return function(a){return r(
a,function(i){return t.map(n(i),function(o){return o?Af.some(i):Af.none})})}}}}});var Mf=We(m=>{"use strict";var bk=m&&m.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),wk=m&&m.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),If=m&&
m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&bk(t,e,r);return wk(t,e),t};Object.defineProperty(m,"__esModule",{value:!0});m.match=m.foldW=m.
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
void 0;m.toError=Jk;m.elem=Df;m.parseJSON=r1;m.getValidation=o1;var Of=vf(),Pi=Ac(),Cf=If($c()),Tk=wf(),Di=xf(),ct=jn(),
Mi=Os(),Nr=If(Ci()),gn=_f(),Rf=$f();m.left=Nr.left;m.right=Nr.right;m.flatMap=(0,ct.dual)(2,function(e,t){return(0,m.isLeft)(
e)?e:t(e.right)});var Ot=function(e,t){return(0,ct.pipe)(e,(0,m.map)(t))},la=function(e,t){return(0,ct.pipe)(e,(0,m.ap)(
t))},ji=function(e,t,r){return(0,ct.pipe)(e,(0,m.reduce)(t,r))},Li=function(e){return function(t,r){var n=(0,m.foldMap)(
e);return(0,ct.pipe)(t,n(r))}},Ui=function(e,t,r){return(0,ct.pipe)(e,(0,m.reduceRight)(t,r))},Ps=function(e){var t=(0,m.
traverse)(e);return function(r,n){return(0,ct.pipe)(r,t(n))}},Oc=function(e,t,r){return(0,ct.pipe)(e,(0,m.bimap)(t,r))},
Cc=function(e,t){return(0,ct.pipe)(e,(0,m.mapLeft)(t))},Nf=function(e,t){return(0,ct.pipe)(e,(0,m.alt)(t))},Nc=function(e,t){
return(0,ct.pipe)(e,(0,m.extend)(t))},Pc=function(e,t){return(0,Tk.tailRec)(t(e),function(r){return(0,m.isLeft)(r)?(0,m.
right)((0,m.left)(r.left)):(0,m.isLeft)(r.right)?(0,m.left)(t(r.right.left)):(0,m.right)((0,m.right)(r.right.right))})};
m.URI="Either";var kk=function(e,t){return{show:function(r){return(0,m.isLeft)(r)?"left(".concat(e.show(r.left),")"):"ri\
ght(".concat(t.show(r.right),")")}}};m.getShow=kk;var Sk=function(e,t){return{equals:function(r,n){return r===n||((0,m.isLeft)(
r)?(0,m.isLeft)(n)&&e.equals(r.left,n.left):(0,m.isRight)(n)&&t.equals(r.right,n.right))}}};m.getEq=Sk;var Ek=function(e){
return{concat:function(t,r){return(0,m.isLeft)(r)?t:(0,m.isLeft)(t)?r:(0,m.right)(e.concat(t.right,r.right))}}};m.getSemigroup=
Ek;var xk=function(e){var t=(0,m.left)(e.empty);return{URI:m.URI,_E:void 0,compact:function(r){return(0,m.isLeft)(r)?r:r.
right._tag==="None"?t:(0,m.right)(r.right.value)},separate:function(r){return(0,m.isLeft)(r)?(0,gn.separated)(r,r):(0,m.
isLeft)(r.right)?(0,gn.separated)((0,m.right)(r.right.left),t):(0,gn.separated)(t,(0,m.right)(r.right.right))}}};m.getCompactable=
xk;var _k=function(e){var t=(0,m.left)(e.empty),r=(0,m.getCompactable)(e),n=r.compact,a=r.separate,i=function(s,l){return(0,m.
isLeft)(s)||l(s.right)?s:t},o=function(s,l){return(0,m.isLeft)(s)?(0,gn.separated)(s,s):l(s.right)?(0,gn.separated)(t,(0,m.
right)(s.right)):(0,gn.separated)((0,m.right)(s.right),t)};return{URI:m.URI,_E:void 0,map:Ot,compact:n,separate:a,filter:i,
filterMap:function(s,l){if((0,m.isLeft)(s))return s;var c=l(s.right);return c._tag==="None"?t:(0,m.right)(c.value)},partition:o,
partitionMap:function(s,l){if((0,m.isLeft)(s))return(0,gn.separated)(s,s);var c=l(s.right);return(0,m.isLeft)(c)?(0,gn.separated)(
(0,m.right)(c.left),t):(0,gn.separated)(t,(0,m.right)(c.right))}}};m.getFilterable=_k;var Ak=function(e){var t=(0,m.getFilterable)(
e),r=(0,m.getCompactable)(e);return{URI:m.URI,_E:void 0,map:Ot,compact:t.compact,separate:t.separate,filter:t.filter,filterMap:t.
filterMap,partition:t.partition,partitionMap:t.partitionMap,traverse:Ps,sequence:m.sequence,reduce:ji,foldMap:Li,reduceRight:Ui,
wither:(0,Rf.witherDefault)(m.Traversable,r),wilt:(0,Rf.wiltDefault)(m.Traversable,r)}};m.getWitherable=Ak;var $k=function(e){
return{URI:m.URI,_E:void 0,map:Ot,ap:function(t,r){return(0,m.isLeft)(t)?(0,m.isLeft)(r)?(0,m.left)(e.concat(t.left,r.left)):
t:(0,m.isLeft)(r)?r:(0,m.right)(t.right(r.right))},of:m.of}};m.getApplicativeValidation=$k;var Rk=function(e){return{URI:m.
URI,_E:void 0,map:Ot,alt:function(t,r){if((0,m.isRight)(t))return t;var n=r();return(0,m.isLeft)(n)?(0,m.left)(e.concat(
t.left,n.left)):n}}};m.getAltValidation=Rk;var Ik=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.right)(e(t.
right))}};m.map=Ik;m.Functor={URI:m.URI,map:Ot};m.as=(0,ct.dual)(2,(0,Mi.as)(m.Functor));m.asUnit=(0,Mi.asUnit)(m.Functor);
m.of=m.right;m.Pointed={URI:m.URI,of:m.of};var Ok=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.isLeft)(e)?
e:(0,m.right)(t.right(e.right))}};m.apW=Ok;m.ap=m.apW;m.Apply={URI:m.URI,map:Ot,ap:la};m.Applicative={URI:m.URI,map:Ot,ap:la,
of:m.of};m.Chain={URI:m.URI,map:Ot,ap:la,chain:m.flatMap};m.Monad={URI:m.URI,map:Ot,ap:la,of:m.of,chain:m.flatMap};var Ck=function(e,t){
return function(r){return(0,m.isLeft)(r)?e:t(e,r.right)}};m.reduce=Ck;var Nk=function(e){return function(t){return function(r){
return(0,m.isLeft)(r)?e.empty:t(r.right)}}};m.foldMap=Nk;var Pk=function(e,t){return function(r){return(0,m.isLeft)(r)?e:
t(r.right,e)}};m.reduceRight=Pk;m.Foldable={URI:m.URI,reduce:ji,foldMap:Li,reduceRight:Ui};var Dk=function(e){return function(t){
return function(r){return(0,m.isLeft)(r)?e.of((0,m.left)(r.left)):e.map(t(r.right),m.right)}}};m.traverse=Dk;var Mk=function(e){
return function(t){return(0,m.isLeft)(t)?e.of((0,m.left)(t.left)):e.map(t.right,m.right)}};m.sequence=Mk;m.Traversable={
URI:m.URI,map:Ot,reduce:ji,foldMap:Li,reduceRight:Ui,traverse:Ps,sequence:m.sequence};var jk=function(e,t){return function(r){
return(0,m.isLeft)(r)?(0,m.left)(e(r.left)):(0,m.right)(t(r.right))}};m.bimap=jk;var Lk=function(e){return function(t){return(0,m.
isLeft)(t)?(0,m.left)(e(t.left)):t}};m.mapLeft=Lk;m.Bifunctor={URI:m.URI,bimap:Oc,mapLeft:Cc};var Uk=function(e){return function(t){
return(0,m.isLeft)(t)?e():t}};m.altW=Uk;m.alt=m.altW;m.Alt={URI:m.URI,map:Ot,alt:Nf};var Fk=function(e){return function(t){
return(0,m.isLeft)(t)?t:(0,m.right)(e(t))}};m.extend=Fk;m.Extend={URI:m.URI,map:Ot,extend:Nc};m.ChainRec={URI:m.URI,map:Ot,
ap:la,chain:m.flatMap,chainRec:Pc};m.throwError=m.left;m.MonadThrow={URI:m.URI,map:Ot,ap:la,of:m.of,chain:m.flatMap,throwError:m.
throwError};m.FromEither={URI:m.URI,fromEither:ct.identity};m.fromPredicate=(0,Di.fromPredicate)(m.FromEither);m.fromOption=
(0,Di.fromOption)(m.FromEither);m.isLeft=Nr.isLeft;m.isRight=Nr.isRight;var Bk=function(e,t){return function(r){return(0,m.
isLeft)(r)?e(r.left):t(r.right)}};m.matchW=Bk;m.foldW=m.matchW;m.match=m.matchW;m.fold=m.match;var Hk=function(e){return function(t){
return(0,m.isLeft)(t)?e(t.left):t.right}};m.getOrElseW=Hk;m.getOrElse=m.getOrElseW;m.flap=(0,Mi.flap)(m.Functor);m.apFirst=
(0,Pi.apFirst)(m.Apply);m.apFirstW=m.apFirst;m.apSecond=(0,Pi.apSecond)(m.Apply);m.apSecondW=m.apSecond;m.tap=(0,ct.dual)(
2,Cf.tap(m.Chain));m.flattenW=(0,m.flatMap)(ct.identity);m.flatten=m.flattenW;m.duplicate=(0,m.extend)(ct.identity);m.fromOptionK=
(0,Di.fromOptionK)(m.FromEither);m.chainOptionK=(0,Di.chainOptionK)(m.FromEither,m.Chain);m.chainOptionKW=m.chainOptionK;
var Ds={fromEither:m.FromEither.fromEither};m.liftNullable=Nr.liftNullable(Ds);m.liftOption=Nr.liftOption(Ds);var Pf={flatMap:m.
flatMap};m.flatMapNullable=Nr.flatMapNullable(Ds,Pf);m.flatMapOption=Nr.flatMapOption(Ds,Pf);m.filterOrElse=(0,Di.filterOrElse)(
m.FromEither,m.Chain);m.filterOrElseW=m.filterOrElse;var Wk=function(e){return(0,m.isLeft)(e)?(0,m.right)(e.left):(0,m.left)(
e.right)};m.swap=Wk;var qk=function(e){return function(t){return(0,m.isLeft)(t)?e(t.left):t}};m.orElseW=qk;m.orElse=m.orElseW;
var Vk=function(e){return function(t){return t==null?(0,m.left)(e):(0,m.right)(t)}};m.fromNullable=Vk;var Yk=function(e,t){
try{return(0,m.right)(e())}catch(r){return(0,m.left)(t(r))}};m.tryCatch=Yk;var zk=function(e,t){return function(){for(var r=[],
n=0;n<arguments.length;n++)r[n]=arguments[n];return(0,m.tryCatch)(function(){return e.apply(void 0,r)},t)}};m.tryCatchK=
zk;var Kk=function(e){var t=(0,m.fromNullable)(e);return function(r){return(0,ct.flow)(r,t)}};m.fromNullableK=Kk;var Gk=function(e){
var t=(0,m.fromNullableK)(e);return function(r){return(0,m.flatMap)(t(r))}};m.chainNullableK=Gk;m.toUnion=(0,m.foldW)(ct.
identity,ct.identity);function Jk(e){try{return e instanceof Error?e:new Error(String(e))}catch{return new Error}}function Df(e){
return function(t,r){if(r===void 0){var n=Df(e);return function(a){return n(t,a)}}return(0,m.isLeft)(r)?!1:e.equals(t,r.
right)}}var Zk=function(e){return function(t){return(0,m.isLeft)(t)?!1:e(t.right)}};m.exists=Zk;m.Do=(0,m.of)(Nr.emptyRecord);
m.bindTo=(0,Mi.bindTo)(m.Functor);var Xk=(0,Mi.let)(m.Functor);m.let=Xk;m.bind=Cf.bind(m.Chain);m.bindW=m.bind;m.apS=(0,Pi.
apS)(m.Apply);m.apSW=m.apS;m.ApT=(0,m.of)(Nr.emptyReadonlyArray);var Qk=function(e){return function(t){var r=e(0,Nr.head(
t));if((0,m.isLeft)(r))return r;for(var n=[r.right],a=1;a<t.length;a++){var i=e(a,t[a]);if((0,m.isLeft)(i))return i;n.push(
i.right)}return(0,m.right)(n)}};m.traverseReadonlyNonEmptyArrayWithIndex=Qk;var e1=function(e){var t=(0,m.traverseReadonlyNonEmptyArrayWithIndex)(
e);return function(r){return Nr.isNonEmpty(r)?t(r):m.ApT}};m.traverseReadonlyArrayWithIndex=e1;m.traverseArrayWithIndex=
m.traverseReadonlyArrayWithIndex;var t1=function(e){return(0,m.traverseReadonlyArrayWithIndex)(function(t,r){return e(r)})};
m.traverseArray=t1;m.sequenceArray=(0,m.traverseArray)(ct.identity);m.chainW=m.flatMap;m.chain=m.flatMap;m.chainFirst=m.
tap;m.chainFirstW=m.tap;function r1(e,t){return(0,m.tryCatch)(function(){return JSON.parse(e)},t)}var n1=function(e,t){return(0,m.
tryCatch)(function(){var r=JSON.stringify(e);if(typeof r!="string")throw new Error("Converting unsupported structure to \
JSON");return r},t)};m.stringifyJSON=n1;m.either={URI:m.URI,map:Ot,of:m.of,ap:la,chain:m.flatMap,reduce:ji,foldMap:Li,reduceRight:Ui,
traverse:Ps,sequence:m.sequence,bimap:Oc,mapLeft:Cc,alt:Nf,extend:Nc,chainRec:Pc,throwError:m.throwError};m.getApplySemigroup=
(0,Pi.getApplySemigroup)(m.Apply);m.getApplyMonoid=(0,Of.getApplicativeMonoid)(m.Applicative);var a1=function(e,t){return(0,Pi.
getApplySemigroup)((0,m.getApplicativeValidation)(e))(t)};m.getValidationSemigroup=a1;var i1=function(e,t){return(0,Of.getApplicativeMonoid)(
(0,m.getApplicativeValidation)(e))(t)};m.getValidationMonoid=i1;function o1(e){var t=(0,m.getApplicativeValidation)(e).ap,
r=(0,m.getAltValidation)(e).alt;return{URI:m.URI,_E:void 0,map:Ot,of:m.of,chain:m.flatMap,bimap:Oc,mapLeft:Cc,reduce:ji,
foldMap:Li,reduceRight:Ui,extend:Nc,traverse:Ps,sequence:m.sequence,chainRec:Pc,throwError:m.throwError,ap:t,alt:r}}});var Le=We(w=>{"use strict";var Ce=w&&w.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},
e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is\
 not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.
prototype,new n)}}(),Ua=w&&w.__assign||function(){return Ua=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<
n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ua.apply(this,arguments)},
s1=w&&w.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=
Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(w,
"__esModule",{value:!0});w.partial=w.PartialType=w.type=w.InterfaceType=w.array=w.ArrayType=w.recursion=w.RecursiveType=
w.Int=w.brand=w.RefinementType=w.keyof=w.KeyofType=w.literal=w.LiteralType=w.void=w.undefined=w.null=w.UnknownRecord=w.AnyDictionaryType=
w.UnknownArray=w.AnyArrayType=w.boolean=w.BooleanType=w.bigint=w.BigIntType=w.number=w.NumberType=w.string=w.StringType=
w.unknown=w.UnknownType=w.voidType=w.VoidType=w.UndefinedType=w.nullType=w.NullType=w.getIndex=w.getTags=w.emptyTags=w.mergeAll=
w.getDomainKeys=w.appendContext=w.getContextEntry=w.getFunctionName=w.identity=w.Type=w.success=w.failure=w.failures=void 0;
w.alias=w.clean=w.StrictType=w.dictionary=w.object=w.ObjectType=w.Dictionary=w.getDefaultContext=w.getValidationError=w.
interface=w.Array=w.taggedUnion=w.TaggedUnionType=w.Integer=w.refinement=w.any=w.AnyType=w.never=w.NeverType=w.Function=
w.FunctionType=w.exact=w.ExactType=w.strict=w.readonlyArray=w.ReadonlyArrayType=w.readonly=w.ReadonlyType=w.tuple=w.TupleType=
w.intersection=w.IntersectionType=w.union=w.UnionType=w.record=w.DictionaryType=void 0;var ut=Mf();w.failures=ut.left;var l1=function(e,t,r){
return(0,w.failures)([{value:e,context:t,message:r}])};w.failure=l1;w.success=ut.right;var Ne=function(){function e(t,r,n,a){
this.name=t,this.is=r,this.validate=n,this.encode=a,this.decode=this.decode.bind(this)}return e.prototype.pipe=function(t,r){
var n=this;return r===void 0&&(r="pipe(".concat(this.name,", ").concat(t.name,")")),new e(r,t.is,function(a,i){var o=n.validate(
a,i);return(0,ut.isLeft)(o)?o:t.validate(o.right,i)},this.encode===w.identity&&t.encode===w.identity?w.identity:function(a){
return n.encode(t.encode(a))})},e.prototype.asDecoder=function(){return this},e.prototype.asEncoder=function(){return this},
e.prototype.decode=function(t){return this.validate(t,[{key:"",type:this,actual:t}])},e}();w.Type=Ne;var c1=function(e){
return e};w.identity=c1;function Ff(e){return e.displayName||e.name||"<function".concat(e.length,">")}w.getFunctionName=
Ff;function u1(e,t){return{key:e,type:t}}w.getContextEntry=u1;function Zr(e,t,r,n){for(var a=e.length,i=Array(a+1),o=0;o<
a;o++)i[o]=e[o];return i[a]={key:t,type:r,actual:n},i}w.appendContext=Zr;function ua(e,t){for(var r=t.length,n=0;n<r;n++)
e.push(t[n])}var ca=Object.prototype.hasOwnProperty;function Mc(e){return Object.keys(e).map(function(t){return"".concat(
t,": ").concat(e[t].name)}).join(", ")}function Fi(e){for(var t=0;t<e.length;t++)if(e[t].encode!==w.identity)return!1;return!0}
function Bf(e){return"{ ".concat(Mc(e)," }")}function Hf(e){return"Partial<".concat(e,">")}function d1(e,t,r,n){n===void 0&&
(n="{ [K in ".concat(t.name,"]: ").concat(r.name," }"));for(var a=e.length,i={},o=0;o<a;o++)i[e[o]]=r;var s=(0,w.strict)(
i,n);return new Hc(n,function(l){return s.is(l)},s.validate,s.encode,t,r)}function Uc(e){var t;if(Vf(e)){var r=e.value;if(w.
string.is(r))return t={},t[r]=null,t}else{if(y1(e))return e.keys;if(zf(e)){var n=e.types.map(function(a){return Uc(a)});
return n.some(Ms.is)?void 0:Object.assign.apply(Object,s1([{}],n,!1))}}}w.getDomainKeys=Uc;function jf(e,t){for(var r=Object.
keys(e),n=r.length,a=!1,i={},o=0;o<n;o++){var s=r[o];t.is(s)?i[s]=e[s]:a=!0}return a?i:e}function p1(e,t,r){return r===void 0&&
(r="{ [K in ".concat(e.name,"]: ").concat(t.name," }")),new Hc(r,function(n){return w.UnknownRecord.is(n)?Object.keys(n).
every(function(a){return!e.is(a)||t.is(n[a])}):Uf(t)&&Array.isArray(n)},function(n,a){if(w.UnknownRecord.is(n)){for(var i={},
o=[],s=Object.keys(n),l=s.length,c=!1,u=0;u<l;u++){var d=s[u],f=n[d],h=e.validate(d,Zr(a,d,e,d));if((0,ut.isLeft)(h))c=!0;else{
var y=h.right;c=c||y!==d,d=y;var b=t.validate(f,Zr(a,d,t,f));if((0,ut.isLeft)(b))ua(o,b.left);else{var T=b.right;c=c||T!==
f,i[d]=T}}}return o.length>0?(0,w.failures)(o):(0,w.success)(c?i:n)}return Uf(t)&&Array.isArray(n)?(0,w.success)(n):(0,w.
failure)(n,a)},e.encode===w.identity&&t.encode===w.identity?function(n){return jf(n,e)}:function(n){for(var a={},i=Object.
keys(jf(n,e)),o=i.length,s=0;s<o;s++){var l=i[s];a[String(e.encode(l))]=t.encode(n[l])}return a},e,t)}function Wf(e){return"\
("+e.map(function(t){return t.name}).join(" | ")+")"}function jc(e,t){for(var r=!0,n=!0,a=!w.UnknownRecord.is(e),i=0,o=t;i<
o.length;i++){var s=o[i];s!==e&&(r=!1),w.UnknownRecord.is(s)&&(n=!1)}if(r)return e;if(n)return t[t.length-1];for(var l={},
c=0,u=t;c<u.length;c++){var s=u[c];for(var d in s)(!ca.call(l,d)||a||s[d]!==e[d])&&(l[d]=s[d])}return l}w.mergeAll=jc;function Lc(e){
switch(e._tag){case"RefinementType":case"ReadonlyType":return Lc(e.type);case"InterfaceType":case"StrictType":case"Parti\
alType":return e.props;case"IntersectionType":return e.types.reduce(function(t,r){return Object.assign(t,Lc(r))},{})}}function Lf(e,t){
for(var r=Object.getOwnPropertyNames(e),n=!1,a={},i=0;i<r.length;i++){var o=r[i];ca.call(t,o)?a[o]=e[o]:n=!0}return n?a:
e}function f1(e){return Yf(e)?"{| ".concat(Mc(e.props)," |}"):v1(e)?Hf("{| ".concat(Mc(e.props)," |}")):"Exact<".concat(
e.name,">")}function h1(e){return e.length>0}w.emptyTags={};function qf(e,t){for(var r=[],n=0,a=e;n<a.length;n++){var i=a[n];
t.indexOf(i)!==-1&&r.push(i)}return r}function m1(e,t){if(e===w.emptyTags)return t;if(t===w.emptyTags)return e;var r=Object.
assign({},e);for(var n in t)if(ca.call(e,n)){var a=qf(e[n],t[n]);if(h1(a))r[n]=a;else{r=w.emptyTags;break}}else r[n]=t[n];
return r}function g1(e,t){if(e===w.emptyTags||t===w.emptyTags)return w.emptyTags;var r=w.emptyTags;for(var n in e)if(ca.
call(t,n)){var a=qf(e[n],t[n]);a.length===0&&(r===w.emptyTags&&(r={}),r[n]=e[n].concat(t[n]))}return r}function Uf(e){return e.
_tag==="AnyType"}function Vf(e){return e._tag==="LiteralType"}function y1(e){return e._tag==="KeyofType"}function Yf(e){
return e._tag==="InterfaceType"}function v1(e){return e._tag==="PartialType"}function b1(e){return e._tag==="StrictType"}
function w1(e){return e._tag==="ExactType"}function T1(e){return e._tag==="RefinementType"}function k1(e){return e._tag===
"IntersectionType"}function zf(e){return e._tag==="UnionType"}function S1(e){return e._tag==="RecursiveType"}function E1(e){
return e._tag==="ReadonlyType"}var Dc=[];function Ln(e){if(Dc.indexOf(e)!==-1)return w.emptyTags;if(Yf(e)||b1(e)){var t=w.
emptyTags;for(var r in e.props){var n=e.props[r];Vf(n)&&(t===w.emptyTags&&(t={}),t[r]=[n.value])}return t}else{if(w1(e)||
T1(e)||E1(e))return Ln(e.type);if(k1(e))return e.types.reduce(function(i,o){return m1(i,Ln(o))},w.emptyTags);if(zf(e))return e.
types.slice(1).reduce(function(i,o){return g1(i,Ln(o))},Ln(e.types[0]));if(S1(e)){Dc.push(e);var a=Ln(e.type);return Dc.
pop(),a}}return w.emptyTags}w.getTags=Ln;function Kf(e){var t=Ln(e[0]),r=Object.keys(t),n=e.length,a=function(c){for(var u=t[c].
slice(),d=[t[c]],f=1;f<n;f++){var h=e[f],y=Ln(h),b=y[c];if(b===void 0)return"continue-keys";if(b.some(function(T){return u.
indexOf(T)!==-1}))return"continue-keys";u.push.apply(u,b),d.push(b)}return{value:[c,d]}};e:for(var i=0,o=r;i<o.length;i++){
var s=o[i],l=a(s);if(typeof l=="object")return l.value;switch(l){case"continue-keys":continue e}}}w.getIndex=Kf;var Gf=function(e){
Ce(t,e);function t(){var r=e.call(this,"null",function(n){return n===null},function(n,a){return r.is(n)?(0,w.success)(n):
(0,w.failure)(n,a)},w.identity)||this;return r._tag="NullType",r}return t}(Ne);w.NullType=Gf;w.nullType=new Gf;w.null=w.
nullType;var Jf=function(e){Ce(t,e);function t(){var r=e.call(this,"undefined",function(n){return n===void 0},function(n,a){
return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="UndefinedType",r}return t}(Ne);w.UndefinedType=
Jf;var Ms=new Jf;w.undefined=Ms;var Zf=function(e){Ce(t,e);function t(){var r=e.call(this,"void",Ms.is,Ms.validate,w.identity)||
this;return r._tag="VoidType",r}return t}(Ne);w.VoidType=Zf;w.voidType=new Zf;w.void=w.voidType;var Xf=function(e){Ce(t,
e);function t(){var r=e.call(this,"unknown",function(n){return!0},w.success,w.identity)||this;return r._tag="UnknownType",
r}return t}(Ne);w.UnknownType=Xf;w.unknown=new Xf;var Qf=function(e){Ce(t,e);function t(){var r=e.call(this,"string",function(n){
return typeof n=="string"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="StringType",r}return t}(Ne);w.StringType=Qf;w.string=new Qf;var eh=function(e){Ce(t,e);function t(){var r=e.call(this,
"number",function(n){return typeof n=="number"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||
this;return r._tag="NumberType",r}return t}(Ne);w.NumberType=eh;w.number=new eh;var th=function(e){Ce(t,e);function t(){
var r=e.call(this,"bigint",function(n){return typeof n=="bigint"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(
n,a)},w.identity)||this;return r._tag="BigIntType",r}return t}(Ne);w.BigIntType=th;w.bigint=new th;var rh=function(e){Ce(
t,e);function t(){var r=e.call(this,"boolean",function(n){return typeof n=="boolean"},function(n,a){return r.is(n)?(0,w.
success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="BooleanType",r}return t}(Ne);w.BooleanType=rh;w.boolean=
new rh;var nh=function(e){Ce(t,e);function t(){var r=e.call(this,"UnknownArray",Array.isArray,function(n,a){return r.is(
n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="AnyArrayType",r}return t}(Ne);w.AnyArrayType=nh;
w.UnknownArray=new nh;w.Array=w.UnknownArray;var ah=function(e){Ce(t,e);function t(){var r=e.call(this,"UnknownRecord",function(n){
return n!==null&&typeof n=="object"&&!Array.isArray(n)},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},
w.identity)||this;return r._tag="AnyDictionaryType",r}return t}(Ne);w.AnyDictionaryType=ah;w.UnknownRecord=new ah;var ih=function(e){
Ce(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.value=o,s._tag="LiteralType",s}return t}(Ne);w.LiteralType=
ih;function x1(e,t){t===void 0&&(t=JSON.stringify(e));var r=function(n){return n===e};return new ih(t,r,function(n,a){return r(
n)?(0,w.success)(e):(0,w.failure)(n,a)},w.identity,e)}w.literal=x1;var oh=function(e){Ce(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.keys=o,s._tag="KeyofType",s}return t}(Ne);w.KeyofType=oh;function _1(e,t){t===void 0&&
(t=Object.keys(e).map(function(n){return JSON.stringify(n)}).join(" | "));var r=function(n){return w.string.is(n)&&ca.call(
e,n)};return new oh(t,r,function(n,a){return r(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity,e)}w.keyof=_1;var sh=function(e){
Ce(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i)||this;return l.type=o,l.predicate=s,l._tag="RefinementType",l}
return t}(Ne);w.RefinementType=sh;function lh(e,t,r){return qc(e,t,r)}w.brand=lh;w.Int=lh(w.number,function(e){return Number.
isInteger(e)},"Int");var Fc=function(e){Ce(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.runDefinition=
o,s._tag="RecursiveType",s}return t}(Ne);w.RecursiveType=Fc;Object.defineProperty(Fc.prototype,"type",{get:function(){return this.
runDefinition()},enumerable:!0,configurable:!0});function A1(e,t){var r,n=function(){return r||(r=t(a),r.name=e),r},a=new Fc(
e,function(i){return n().is(i)},function(i,o){return n().validate(i,o)},function(i){return n().encode(i)},n);return a}w.
recursion=A1;var ch=function(e){Ce(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="A\
rrayType",s}return t}(Ne);w.ArrayType=ch;function uh(e,t){return t===void 0&&(t="Array<".concat(e.name,">")),new ch(t,function(r){
return w.UnknownArray.is(r)&&r.every(e.is)},function(r,n){var a=w.UnknownArray.validate(r,n);if((0,ut.isLeft)(a))return a;
for(var i=a.right,o=i.length,s=i,l=[],c=0;c<o;c++){var u=i[c],d=e.validate(u,Zr(n,String(c),e,u));if((0,ut.isLeft)(d))ua(
l,d.left);else{var f=d.right;f!==u&&(s===i&&(s=i.slice()),s[c]=f)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},
e.encode===w.identity?w.identity:function(r){return r.map(e.encode)},e)}w.array=uh;var dh=function(e){Ce(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.props=o,s._tag="InterfaceType",s}return t}(Ne);w.InterfaceType=dh;function Bc(e,t){
t===void 0&&(t=Bf(e));var r=Object.keys(e),n=r.map(function(i){return e[i]}),a=r.length;return new dh(t,function(i){if(w.
UnknownRecord.is(i)){for(var o=0;o<a;o++){var s=r[o],l=i[s];if(l===void 0&&!ca.call(i,s)||!n[o].is(l))return!1}return!0}
return!1},function(i,o){var s=w.UnknownRecord.validate(i,o);if((0,ut.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<
a;d++){var f=r[d],h=c[f],y=n[d],b=y.validate(h,Zr(o,f,y,h));if((0,ut.isLeft)(b))ua(u,b.left);else{var T=b.right;(T!==h||
T===void 0&&!ca.call(c,f))&&(c===l&&(c=Ua({},l)),c[f]=T)}}return u.length>0?(0,w.failures)(u):(0,w.success)(c)},Fi(n)?w.
identity:function(i){for(var o=Ua({},i),s=0;s<a;s++){var l=r[s],c=n[s].encode;c!==w.identity&&(o[l]=c(i[l]))}return o},e)}
w.type=Bc;w.interface=Bc;var ph=function(e){Ce(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.props=
o,s._tag="PartialType",s}return t}(Ne);w.PartialType=ph;function $1(e,t){t===void 0&&(t=Hf(Bf(e)));var r=Object.keys(e),
n=r.map(function(i){return e[i]}),a=r.length;return new ph(t,function(i){if(w.UnknownRecord.is(i)){for(var o=0;o<a;o++){
var s=r[o],l=i[s];if(l!==void 0&&!e[s].is(l))return!1}return!0}return!1},function(i,o){var s=w.UnknownRecord.validate(i,
o);if((0,ut.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<a;d++){var f=r[d],h=c[f],y=e[f],b=y.validate(h,Zr(o,f,y,
h));if((0,ut.isLeft)(b))h!==void 0&&ua(u,b.left);else{var T=b.right;T!==h&&(c===l&&(c=Ua({},l)),c[f]=T)}}return u.length>
0?(0,w.failures)(u):(0,w.success)(c)},Fi(n)?w.identity:function(i){for(var o=Ua({},i),s=0;s<a;s++){var l=r[s],c=i[l];c!==
void 0&&(o[l]=n[s].encode(c))}return o},e)}w.partial=$1;var Hc=function(e){Ce(t,e);function t(r,n,a,i,o,s){var l=e.call(
this,r,n,a,i)||this;return l.domain=o,l.codomain=s,l._tag="DictionaryType",l}return t}(Ne);w.DictionaryType=Hc;function fh(e,t,r){
var n=Uc(e);return n?d1(Object.keys(n),e,t,r):p1(e,t,r)}w.record=fh;var Wc=function(e){Ce(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.types=o,s._tag="UnionType",s}return t}(Ne);w.UnionType=Wc;function hh(e,t){t===void 0&&
(t=Wf(e));var r=Kf(e);if(r!==void 0&&e.length>0){var n=r[0],a=r[1],i=a.length,o=function(s){for(var l=0;l<i;l++)if(a[l].
indexOf(s)!==-1)return l};return new js(t,function(s){if(w.UnknownRecord.is(s)){var l=o(s[n]);return l!==void 0?e[l].is(
s):!1}return!1},function(s,l){var c=w.UnknownRecord.validate(s,l);if((0,ut.isLeft)(c))return c;var u=c.right,d=o(u[n]);if(d===
void 0)return(0,w.failure)(s,l);var f=e[d];return f.validate(u,Zr(l,String(d),f,u))},Fi(e)?w.identity:function(s){var l=o(
s[n]);if(l===void 0)throw new Error("no codec found to encode value in union codec ".concat(t));return e[l].encode(s)},e,
n)}else return new Wc(t,function(s){return e.some(function(l){return l.is(s)})},function(s,l){for(var c=[],u=0;u<e.length;u++){
var d=e[u],f=d.validate(s,Zr(l,String(u),d,s));if((0,ut.isLeft)(f))ua(c,f.left);else return(0,w.success)(f.right)}return(0,w.
failures)(c)},Fi(e)?w.identity:function(s){for(var l=0,c=e;l<c.length;l++){var u=c[l];if(u.is(s))return u.encode(s)}throw new Error(
"no codec found to encode value in union type ".concat(t))},e)}w.union=hh;var mh=function(e){Ce(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="IntersectionType",s}return t}(Ne);w.IntersectionType=mh;function R1(e,t){
t===void 0&&(t="(".concat(e.map(function(n){return n.name}).join(" & "),")"));var r=e.length;return new mh(t,function(n){
return e.every(function(a){return a.is(n)})},e.length===0?w.success:function(n,a){for(var i=[],o=[],s=0;s<r;s++){var l=e[s],
c=l.validate(n,Zr(a,String(s),l,n));(0,ut.isLeft)(c)?ua(o,c.left):i.push(c.right)}return o.length>0?(0,w.failures)(o):(0,w.
success)(jc(n,i))},e.length===0?w.identity:function(n){return jc(n,e.map(function(a){return a.encode(n)}))},e)}w.intersection=
R1;var gh=function(e){Ce(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="TupleType",
s}return t}(Ne);w.TupleType=gh;function I1(e,t){t===void 0&&(t="[".concat(e.map(function(n){return n.name}).join(", "),"\
]"));var r=e.length;return new gh(t,function(n){return w.UnknownArray.is(n)&&n.length===r&&e.every(function(a,i){return a.
is(n[i])})},function(n,a){var i=w.UnknownArray.validate(n,a);if((0,ut.isLeft)(i))return i;for(var o=i.right,s=o.length>r?
o.slice(0,r):o,l=[],c=0;c<r;c++){var u=o[c],d=e[c],f=d.validate(u,Zr(a,String(c),d,u));if((0,ut.isLeft)(f))ua(l,f.left);else{
var h=f.right;h!==u&&(s===o&&(s=o.slice()),s[c]=h)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},Fi(e)?w.identity:
function(n){return e.map(function(a,i){return a.encode(n[i])})},e)}w.tuple=I1;var yh=function(e){Ce(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyType",s}return t}(Ne);w.ReadonlyType=yh;function O1(e,t){
return t===void 0&&(t="Readonly<".concat(e.name,">")),new yh(t,e.is,e.validate,e.encode,e)}w.readonly=O1;var vh=function(e){
Ce(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyArrayType",s}return t}(Ne);
w.ReadonlyArrayType=vh;function C1(e,t){t===void 0&&(t="ReadonlyArray<".concat(e.name,">"));var r=uh(e);return new vh(t,
r.is,r.validate,r.encode,e)}w.readonlyArray=C1;var N1=function(e,t){return wh(Bc(e),t)};w.strict=N1;var bh=function(e){Ce(
t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ExactType",s}return t}(Ne);w.ExactType=
bh;function wh(e,t){t===void 0&&(t=f1(e));var r=Lc(e);return new bh(t,e.is,function(n,a){var i=w.UnknownRecord.validate(
n,a);if((0,ut.isLeft)(i))return i;var o=e.validate(n,a);return(0,ut.isLeft)(o)?o:(0,ut.right)(Lf(o.right,r))},function(n){
return e.encode(Lf(n,r))},e)}w.exact=wh;var Th=function(e){Ce(t,e);function t(){var r=e.call(this,"Function",function(n){
return typeof n=="function"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="FunctionType",r}return t}(Ne);w.FunctionType=Th;w.Function=new Th;var kh=function(e){Ce(t,e);function t(){var r=e.
call(this,"never",function(n){return!1},function(n,a){return(0,w.failure)(n,a)},function(){throw new Error("cannot encod\
e never")})||this;return r._tag="NeverType",r}return t}(Ne);w.NeverType=kh;w.never=new kh;var Sh=function(e){Ce(t,e);function t(){
var r=e.call(this,"any",function(n){return!0},w.success,w.identity)||this;return r._tag="AnyType",r}return t}(Ne);w.AnyType=
Sh;w.any=new Sh;function qc(e,t,r){return r===void 0&&(r="(".concat(e.name," | ").concat(Ff(t),")")),new sh(r,function(n){
return e.is(n)&&t(n)},function(n,a){var i=e.validate(n,a);if((0,ut.isLeft)(i))return i;var o=i.right;return t(o)?(0,w.success)(
o):(0,w.failure)(o,a)},e.encode,e,t)}w.refinement=qc;w.Integer=qc(w.number,Number.isInteger,"Integer");var js=function(e){
Ce(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i,o)||this;return l.tag=s,l}return t}(Wc);w.TaggedUnionType=js;var P1=function(e,t,r){
r===void 0&&(r=Wf(t));var n=hh(t,r);return n instanceof js?n:(console.warn("[io-ts] Cannot build a tagged union for ".concat(
r,", returning a de-optimized union")),new js(r,n.is,n.validate,n.encode,t,e))};w.taggedUnion=P1;var D1=function(e,t){return{
value:e,context:t}};w.getValidationError=D1;var M1=function(e){return[{key:"",type:e}]};w.getDefaultContext=M1;w.Dictionary=
w.UnknownRecord;var Eh=function(e){Ce(t,e);function t(){var r=e.call(this,"object",function(n){return n!==null&&typeof n==
"object"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="ObjectType",
r}return t}(Ne);w.ObjectType=Eh;w.object=new Eh;w.dictionary=fh;var j1=function(e){Ce(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.props=o,s._tag="StrictType",s}return t}(Ne);w.StrictType=j1;function L1(e){return e}w.
clean=L1;function U1(e){return function(){return e}}w.alias=U1});var Rh=We((mM,$h)=>{"use strict";var nt=class e extends Array{constructor(t,r){if(super(t),this.sign=r,Object.setPrototypeOf(
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
return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},nt.__imul=Math.imul||function(e,t){return 0|e*t},$h.exports=nt});var pg=We((wM,dg)=>{"use strict";var ug="ArrowFunctionExpression",jS={name:"arrow",init(e){e.addBinaryOp("=>",.1,!0),e.hooks.
add("gobble-expression",function(n){if(this.gobbleSpaces(),this.code===e.OPAREN_CODE){let a=this.index;if(this.index++,this.
gobbleSpaces(),this.code===e.CPAREN_CODE){this.index++;let i=this.gobbleBinaryOp();if(i==="=>"){let o=this.gobbleBinaryExpression();
o||this.throwError("Expected expression after "+i),n.node={type:ug,params:null,body:o};return}}this.index=a}}),e.hooks.add(
"after-expression",function(n){t(n.node)});function t(r){r&&(Object.values(r).forEach(n=>{n&&typeof n=="object"&&t(n)}),
r.operator==="=>"&&(r.type=ug,r.params=r.left?[r.left]:null,r.body=r.right,r.params&&r.params[0].type===e.SEQUENCE_EXP&&
(r.params=r.params[0].expressions),delete r.left,delete r.right,delete r.operator))}}};dg.exports=jS});var mg=We((TM,hg)=>{"use strict";var LS="ObjectExpression",fg="Property",US={name:"object",init(e){function t(r){if(this.
code===123){this.index++;let n=[];for(;!isNaN(this.code);){if(this.gobbleSpaces(),this.code===125){this.index++,r.node=this.
gobbleTokenProperty({type:LS,properties:n});return}let a=this.gobbleExpression();if(!a)break;if(this.gobbleSpaces(),a.type===
e.IDENTIFIER&&(this.code===e.COMMA_CODE||this.code===125))n.push({type:fg,computed:!1,key:a,value:a,shorthand:!0});else if(this.
code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();i||this.throwError("unexpected object property");let o=a.
type===e.ARRAY_EXP;n.push({type:fg,computed:o,key:o?a.elements[0]:a,value:i,shorthand:!1}),this.gobbleSpaces()}else a&&n.
push(a);this.code===e.COMMA_CODE&&this.index++}this.throwError("missing }")}}e.hooks.add("gobble-token",t)}};hg.exports=
US});var yg=We((kM,gg)=>{"use strict";var FS={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===47){
let n=++this.index,a=!1;for(;this.index<this.expr.length;){if(this.code===47&&!a){let i=this.expr.slice(n,this.index),o="";
for(;++this.index<this.expr.length;){let l=this.code;if(l>=97&&l<=122||l>=65&&l<=90||l>=48&&l<=57)o+=this.char;else break}
let s;try{s=new RegExp(i,o)}catch(l){this.throwError(l.message)}return r.node={type:e.LITERAL,value:s,raw:this.expr.slice(
n-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&
(a=!1),this.index+=this.code===92?2:1}this.throwError("Unclosed Regex")}})}};gg.exports=FS});var bg=We((SM,vg)=>{"use strict";var BS={name:"jsepSpread",init(e){e.hooks.add("gobble-token",function(r){[0,1,2].every(
n=>this.expr.charCodeAt(this.index+n)===e.PERIOD_CODE)&&(this.index+=3,r.node={type:"SpreadElement",argument:this.gobbleExpression()})})}};
vg.exports=BS});var Tg=We((EM,wg)=>{"use strict";var HS="TaggedTemplateExpression",WS="TemplateLiteral",qS="TemplateElement",VS={name:"j\
sepTemplateLiteral",init(e){function t(r,n=!0){if(this.code===96){let a={type:WS,quasis:[],expressions:[]},i="",o="",s=!1,
l=this.expr.length,c=()=>a.quasis.push({type:qS,value:{raw:o,cooked:i},tail:s});for(;this.index<l;){let u=this.expr.charAt(
++this.index);if(u==="`")return this.index+=1,s=!0,c(),r.node=a,n&&(r.node=this.gobbleTokenProperty(r.node)),r.node;if(u===
"$"&&this.expr.charAt(this.index+1)==="{")this.index+=2,c(),o="",i="",a.expressions.push(...this.gobbleExpressions(125)),
this.code!==125&&this.throwError("unclosed ${");else if(u==="\\")switch(o+=u,u=this.expr.charAt(++this.index),o+=u,u){case"\
n":i+=`
`;break;case"r":i+="\r";break;case"t":i+="	";break;case"b":i+="\b";break;case"f":i+="\f";break;case"v":i+="\v";break;default:
i+=u}else i+=u,o+=u}this.throwError("Unclosed `")}}e.hooks.add("gobble-token",t),e.hooks.add("after-token",function(n){if((n.
node.type===e.IDENTIFIER||n.node.type===e.MEMBER_EXP)&&this.code===96)return n.node={type:HS,tag:n.node,quasi:t.bind(this)(
n,!1)},n.node=this.gobbleTokenProperty(n.node),n.node})}};wg.exports=VS});var jg=We(me=>{"use strict";var od=Symbol.for("react.transitional.element"),cE=Symbol.for("react.portal"),uE=Symbol.for(
"react.fragment"),dE=Symbol.for("react.strict_mode"),pE=Symbol.for("react.profiler"),fE=Symbol.for("react.consumer"),hE=Symbol.
for("react.context"),mE=Symbol.for("react.forward_ref"),gE=Symbol.for("react.suspense"),yE=Symbol.for("react.memo"),Og=Symbol.
for("react.lazy"),_g=Symbol.iterator;function vE(e){return e===null||typeof e!="object"?null:(e=_g&&e[_g]||e["@@iterator"],
typeof e=="function"?e:null)}var Cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},
enqueueSetState:function(){}},Ng=Object.assign,Pg={};function li(e,t,r){this.props=e,this.context=t,this.refs=Pg,this.updater=
r||Cg}li.prototype.isReactComponent={};li.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&
e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variabl\
es.");this.updater.enqueueSetState(this,e,t,"setState")};li.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(
this,e,"forceUpdate")};function Dg(){}Dg.prototype=li.prototype;function sd(e,t,r){this.props=e,this.context=t,this.refs=
Pg,this.updater=r||Cg}var ld=sd.prototype=new Dg;ld.constructor=sd;Ng(ld,li.prototype);ld.isPureReactComponent=!0;var Ag=Array.
isArray,Ke={H:null,A:null,T:null,S:null,V:null},Mg=Object.prototype.hasOwnProperty;function cd(e,t,r,n,a,i){return r=i.ref,
{$$typeof:od,type:e,key:t,ref:r!==void 0?r:null,props:i}}function bE(e,t){return cd(e.type,t,void 0,void 0,void 0,e.props)}
function ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===od}function wE(e){var t={"=":"=0",":":"=2"};return"$"+e.
replace(/[=:]/g,function(r){return t[r]})}var $g=/\/+/g;function id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?
wE(""+e.key):t.toString(36)}function Rg(){}function TE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":
throw e.reason;default:switch(typeof e.status=="string"?e.then(Rg,Rg):(e.status="pending",e.then(function(t){e.status===
"pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"\
fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function si(e,t,r,n,a){var i=typeof e;(i==="undefined"||
i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"\
object":switch(e.$$typeof){case od:case cE:o=!0;break;case Og:return o=e._init,si(o(e._payload),t,r,n,a)}}if(o)return a=
a(e),o=n===""?"."+id(e,0):n,Ag(a)?(r="",o!=null&&(r=o.replace($g,"$&/")+"/"),si(a,t,r,"",function(c){return c})):a!=null&&
(ud(a)&&(a=bE(a,r+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace($g,"$&/")+"/")+o)),t.push(a)),1;o=0;var s=n===""?
".":n+":";if(Ag(e))for(var l=0;l<e.length;l++)n=e[l],i=s+id(n,l),o+=si(n,t,r,i,a);else if(l=vE(e),typeof l=="function")for(e=
l.call(e),l=0;!(n=e.next()).done;)n=n.value,i=s+id(n,l++),o+=si(n,t,r,i,a);else if(i==="object"){if(typeof e.then=="func\
tion")return si(TE(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object O\
bject]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use a\
n array instead.")}return o}function bl(e,t,r){if(e==null)return e;var n=[],a=0;return si(e,n,"","",function(i){return t.
call(r,i,a++)}),n}function kE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===
-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&
(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ig=typeof reportError=="function"?
reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("e\
rror",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(
e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.
emit("uncaughtException",e);return}console.error(e)};function SE(){}me.Children={map:bl,forEach:function(e,t,r){bl(e,function(){
t.apply(this,arguments)},r)},count:function(e){var t=0;return bl(e,function(){t++}),t},toArray:function(e){return bl(e,function(t){
return t})||[]},only:function(e){if(!ud(e))throw Error("React.Children.only expected to receive a single React element c\
hild.");return e}};me.Component=li;me.Fragment=uE;me.Profiler=pE;me.PureComponent=sd;me.StrictMode=dE;me.Suspense=gE;me.
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ke;me.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ke.
H.useMemoCache(e)}};me.cache=function(e){return function(){return e.apply(null,arguments)}};me.cloneElement=function(e,t,r){
if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=Ng({},e.props),a=e.key,i=void 0;
if(t!=null)for(o in t.ref!==void 0&&(i=void 0),t.key!==void 0&&(a=""+t.key),t)!Mg.call(t,o)||o==="key"||o==="__self"||o===
"__source"||o==="ref"&&t.ref===void 0||(n[o]=t[o]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var s=Array(
o),l=0;l<o;l++)s[l]=arguments[l+2];n.children=s}return cd(e.type,a,void 0,void 0,i,n)};me.createContext=function(e){return e=
{$$typeof:hE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:fE,
_context:e},e};me.createElement=function(e,t,r){var n,a={},i=null;if(t!=null)for(n in t.key!==void 0&&(i=""+t.key),t)Mg.
call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<
o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===
void 0&&(a[n]=o[n]);return cd(e,i,void 0,void 0,null,a)};me.createRef=function(){return{current:null}};me.forwardRef=function(e){
return{$$typeof:mE,render:e}};me.isValidElement=ud;me.lazy=function(e){return{$$typeof:Og,_payload:{_status:-1,_result:e},
_init:kE}};me.memo=function(e,t){return{$$typeof:yE,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Ke.
T,r={};Ke.T=r;try{var n=e(),a=Ke.S;a!==null&&a(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(SE,Ig)}catch(i){
Ig(i)}finally{Ke.T=t}};me.unstable_useCacheRefresh=function(){return Ke.H.useCacheRefresh()};me.use=function(e){return Ke.
H.use(e)};me.useActionState=function(e,t,r){return Ke.H.useActionState(e,t,r)};me.useCallback=function(e,t){return Ke.H.
useCallback(e,t)};me.useContext=function(e){return Ke.H.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=
function(e,t){return Ke.H.useDeferredValue(e,t)};me.useEffect=function(e,t,r){var n=Ke.H;if(typeof r=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)};me.useId=function(){return Ke.
H.useId()};me.useImperativeHandle=function(e,t,r){return Ke.H.useImperativeHandle(e,t,r)};me.useInsertionEffect=function(e,t){
return Ke.H.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return Ke.H.useLayoutEffect(e,t)};me.useMemo=function(e,t){
return Ke.H.useMemo(e,t)};me.useOptimistic=function(e,t){return Ke.H.useOptimistic(e,t)};me.useReducer=function(e,t,r){return Ke.
H.useReducer(e,t,r)};me.useRef=function(e){return Ke.H.useRef(e)};me.useState=function(e){return Ke.H.useState(e)};me.useSyncExternalStore=
function(e,t,r){return Ke.H.useSyncExternalStore(e,t,r)};me.useTransition=function(){return Ke.H.useTransition()};me.version=
"19.1.0"});var Lg=We((fe,wl)=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(v,A){Object.defineProperty(n.
prototype,v,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",A[0],A[1])}})}function t(v){
return v===null||typeof v!="object"?null:(v=hn&&v[hn]||v["@@iterator"],typeof v=="function"?v:null)}function r(v,A){v=(v=
v.constructor)&&(v.displayName||v.name)||"ReactClass";var j=v+"."+A;Ma[j]||(console.error("Can't call %s on a component \
that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.stat\
e` directly or define a `state = {};` class property with the desired state in the %s component.",A,v),Ma[j]=!0)}function n(v,A,j){
this.props=v,this.context=A,this.refs=kc,this.updater=j||xs}function a(){}function i(v,A,j){this.props=v,this.context=A,
this.refs=kc,this.updater=j||xs}function o(v){return""+v}function s(v){try{o(v);var A=!1}catch{A=!0}if(A){A=console;var j=A.
error,L=typeof Symbol=="function"&&Symbol.toStringTag&&v[Symbol.toStringTag]||v.constructor.name||"Object";return j.call(
A,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",L),o(v)}}function l(v){
if(v==null)return null;if(typeof v=="function")return v.$$typeof===xw?null:v.displayName||v.name||null;if(typeof v=="str\
ing")return v;switch(v){case Ir:return"Fragment";case C:return"Profiler";case or:return"StrictMode";case Hr:return"Suspe\
nse";case Or:return"SuspenseList";case vt:return"Activity"}if(typeof v=="object")switch(typeof v.tag=="number"&&console.
error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
v.$$typeof){case lt:return"Portal";case He:return(v.displayName||"Context")+".Provider";case ae:return(v._context.displayName||
"Context")+".Consumer";case ht:var A=v.render;return v=v.displayName,v||(v=A.displayName||A.name||"",v=v!==""?"ForwardRe\
f("+v+")":"ForwardRef"),v;case oa:return A=v.displayName||null,A!==null?A:l(v.type)||"Memo";case Dn:A=v._payload,v=v._init;
try{return l(v(A))}catch{}}return null}function c(v){if(v===Ir)return"<>";if(typeof v=="object"&&v!==null&&v.$$typeof===
Dn)return"<...>";try{var A=l(v);return A?"<"+A+">":"<...>"}catch{return"<...>"}}function u(){var v=Se.A;return v===null?
null:v.getOwner()}function d(){return Error("react-stack-top-frame")}function f(v){if(As.call(v,"key")){var A=Object.getOwnPropertyDescriptor(
v,"key").get;if(A&&A.isReactWarning)return!1}return v.key!==void 0}function h(v,A){function j(){nf||(nf=!0,console.error(
"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same \
value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",A))}j.
isReactWarning=!0,Object.defineProperty(v,"key",{get:j,configurable:!0})}function y(){var v=l(this.type);return of[v]||(of[v]=
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
object":switch(v.$$typeof){case ot:case lt:ye=!0;break;case Dn:return ye=v._init,W(ye(v._payload),A,j,L,J)}}if(ye){ye=v,
J=J(ye);var je=L===""?"."+_(ye,0):L;return tf(J)?(j="",je!=null&&(j=je.replace(lf,"$&/")+"/"),W(J,A,j,"",function(Mn){return Mn})):
J!=null&&(S(J)&&(J.key!=null&&(ye&&ye.key===J.key||s(J.key)),j=T(J,j+(J.key==null||ye&&ye.key===J.key?"":(""+J.key).replace(
lf,"$&/")+"/")+je),L!==""&&ye!=null&&S(ye)&&ye.key==null&&ye._store&&!ye._store.validated&&(j._store.validated=2),J=j),A.
push(J)),1}if(ye=0,je=L===""?".":L+":",tf(v))for(var Te=0;Te<v.length;Te++)L=v[Te],Ee=je+_(L,Te),ye+=W(L,A,j,Ee,J);else if(Te=
t(v),typeof Te=="function")for(Te===v.entries&&(sf||console.warn("Using Maps as children is not supported. Use an array \
of keyed ReactElements instead."),sf=!0),v=Te.call(v),Te=0;!(L=v.next()).done;)L=L.value,Ee=je+_(L,Te++),ye+=W(L,A,j,Ee,
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
  const MyComponent = lazy(() => import('./MyComponent'))`,A),A.default;throw v._result}function B(){var v=Se.H;return v===
null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could \
happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),v}function we(){}function Y(v){
if($s===null)try{var A=("require"+Math.random()).slice(0,7);$s=(wl&&wl[A]).call(wl,"timers").setImmediate}catch{$s=function(L){
uf===!1&&(uf=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so\
 enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/iss\
ues if you encounter this warning."));var J=new MessageChannel;J.port1.onmessage=L,J.port2.postMessage(void 0)}}return $s(
v)}function te(v){return 1<v.length&&typeof AggregateError=="function"?new AggregateError(v):v[0]}function _e(v,A){A!==Rs-
1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls\
 before making a new one. "),Rs=A}function pe(v,A,j){var L=Se.actQueue;if(L!==null)if(L.length!==0)try{ie(L),Y(function(){
return pe(v,A,j)});return}catch(J){Se.thrownErrors.push(J)}else Se.actQueue=null;0<Se.thrownErrors.length?(L=te(Se.thrownErrors),
Se.thrownErrors.length=0,j(L)):A(v)}function ie(v){if(!Sc){Sc=!0;var A=0;try{for(;A<v.length;A++){var j=v[A];do{Se.didUsePromise=
!1;var L=j(!1);if(L!==null){if(Se.didUsePromise){v[A]=j,v.splice(0,A);return}j=L}else break}while(!0)}v.length=0}catch(J){
v.splice(0,A+1),Se.thrownErrors.push(J)}finally{Sc=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var ot=Symbol.
for("react.transitional.element"),lt=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),or=Symbol.for("react.str\
ict_mode"),C=Symbol.for("react.profiler");Symbol.for("react.provider");var ae=Symbol.for("react.consumer"),He=Symbol.for(
"react.context"),ht=Symbol.for("react.forward_ref"),Hr=Symbol.for("react.suspense"),Or=Symbol.for("react.suspense_list"),
oa=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),hn=Symbol.iterator,Ma={},xs={isMounted:function(){
return!1},enqueueForceUpdate:function(v){r(v,"forceUpdate")},enqueueReplaceState:function(v){r(v,"replaceState")},enqueueSetState:function(v){
r(v,"setState")}},ef=Object.assign,kc={};Object.freeze(kc),n.prototype.isReactComponent={},n.prototype.setState=function(v,A){
if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a func\
tion which returns an object of state variables.");this.updater.enqueueSetState(this,v,A,"setState")},n.prototype.forceUpdate=
function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};var Cr={isMounted:["isMounted","Instead, make sure to\
 clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceSt\
ate","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},_s;for(_s in Cr)
Cr.hasOwnProperty(_s)&&e(_s,Cr[_s]);a.prototype=n.prototype,Cr=i.prototype=new a,Cr.constructor=i,ef(Cr,n.prototype),Cr.
isPureReactComponent=!0;var tf=Array.isArray,xw=Symbol.for("react.client.reference"),Se={H:null,A:null,T:null,S:null,V:null,
actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},
As=Object.prototype.hasOwnProperty,rf=console.createTask?console.createTask:function(){return null};Cr={"react-stack-bot\
tom-frame":function(v){return v()}};var nf,af,of={},_w=Cr["react-stack-bottom-frame"].bind(Cr,d)(),Aw=rf(c(d)),sf=!1,lf=/\/+/g,
cf=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="functio\
n"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message==
"string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.
emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},uf=!1,$s=null,Rs=0,Is=!1,Sc=!1,df=typeof queueMicrotask==
"function"?function(v){queueMicrotask(function(){return queueMicrotask(v)})}:Y;Cr=Object.freeze({__proto__:null,c:function(v){
return B().useMemoCache(v)}}),fe.Children={map:G,forEach:function(v,A,j){G(v,function(){A.apply(this,arguments)},j)},count:function(v){
var A=0;return G(v,function(){A++}),A},toArray:function(v){return G(v,function(A){return A})||[]},only:function(v){if(!S(
v))throw Error("React.Children.only expected to receive a single React element child.");return v}},fe.Component=n,fe.Fragment=
Ir,fe.Profiler=C,fe.PureComponent=i,fe.StrictMode=or,fe.Suspense=Hr,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=
Se,fe.__COMPILER_RUNTIME=Cr,fe.act=function(v){var A=Se.actQueue,j=Rs;Rs++;var L=Se.actQueue=A!==null?A:[],J=!1;try{var Ee=v()}catch(Te){
Se.thrownErrors.push(Te)}if(0<Se.thrownErrors.length)throw _e(A,j),v=te(Se.thrownErrors),Se.thrownErrors.length=0,v;if(Ee!==
null&&typeof Ee=="object"&&typeof Ee.then=="function"){var ye=Ee;return df(function(){J||Is||(Is=!0,console.error("You c\
alled act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act cal\
ls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Te,Mn){J=!0,ye.then(function(ja){
if(_e(A,j),j===0){try{ie(L),Y(function(){return pe(ja,Te,Mn)})}catch(Rw){Se.thrownErrors.push(Rw)}if(0<Se.thrownErrors.length){
var $w=te(Se.thrownErrors);Se.thrownErrors.length=0,Mn($w)}}else Te(ja)},function(ja){_e(A,j),0<Se.thrownErrors.length&&
(ja=te(Se.thrownErrors),Se.thrownErrors.length=0),Mn(ja)})}}}var je=Ee;if(_e(A,j),j===0&&(ie(L),L.length!==0&&df(function(){
J||Is||(Is=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testi\
ng React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Se.actQueue=
null),0<Se.thrownErrors.length)throw v=te(Se.thrownErrors),Se.thrownErrors.length=0,v;return{then:function(Te,Mn){J=!0,j===
0?(Se.actQueue=L,Y(function(){return pe(je,Te,Mn)})):Te(je)}}},fe.cache=function(v){return function(){return v.apply(null,
arguments)}},fe.captureOwnerStack=function(){var v=Se.getCurrentStack;return v===null?null:v()},fe.cloneElement=function(v,A,j){
if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var L=ef({},v.props),J=v.key,Ee=v.
_owner;if(A!=null){var ye;e:{if(As.call(A,"ref")&&(ye=Object.getOwnPropertyDescriptor(A,"ref").get)&&ye.isReactWarning){
ye=!1;break e}ye=A.ref!==void 0}ye&&(Ee=u()),f(A)&&(s(A.key),J=""+A.key);for(je in A)!As.call(A,je)||je==="key"||je==="_\
_self"||je==="__source"||je==="ref"&&A.ref===void 0||(L[je]=A[je])}var je=arguments.length-2;if(je===1)L.children=j;else if(1<
je){ye=Array(je);for(var Te=0;Te<je;Te++)ye[Te]=arguments[Te+2];L.children=ye}for(L=b(v.type,J,void 0,void 0,Ee,L,v._debugStack,
v._debugTask),J=2;J<arguments.length;J++)Ee=arguments[J],S(Ee)&&Ee._store&&(Ee._store.validated=1);return L},fe.createContext=
function(v){return v={$$typeof:He,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=
v,v.Consumer={$$typeof:ae,_context:v},v._currentRenderer=null,v._currentRenderer2=null,v},fe.createElement=function(v,A,j){
for(var L=2;L<arguments.length;L++){var J=arguments[L];S(J)&&J._store&&(J._store.validated=1)}if(L={},J=null,A!=null)for(Te in af||
!("__self"in A)||"key"in A||(af=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transfor\
m. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),f(A)&&(s(A.key),
J=""+A.key),A)As.call(A,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(L[Te]=A[Te]);var Ee=arguments.length-2;if(Ee===
1)L.children=j;else if(1<Ee){for(var ye=Array(Ee),je=0;je<Ee;je++)ye[je]=arguments[je+2];Object.freeze&&Object.freeze(ye),
L.children=ye}if(v&&v.defaultProps)for(Te in Ee=v.defaultProps,Ee)L[Te]===void 0&&(L[Te]=Ee[Te]);J&&h(L,typeof v=="funct\
ion"?v.displayName||v.name||"Unknown":v);var Te=1e4>Se.recentlyCreatedOwnerStacks++;return b(v,J,void 0,void 0,u(),L,Te?
Error("react-stack-top-frame"):_w,Te?rf(c(v)):Aw)},fe.createRef=function(){var v={current:null};return Object.seal(v),v},
fe.forwardRef=function(v){v!=null&&v.$$typeof===oa?console.error("forwardRef requires a render function but received a `\
memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof v!="function"?console.error("forw\
ardRef requires a render function but was given %s.",v===null?"null":typeof v):v.length!==0&&v.length!==2&&console.error(
"forwardRef render functions accept exactly two parameters: props and ref. %s",v.length===1?"Did you forget to use the r\
ef parameter?":"Any additional parameter will be undefined."),v!=null&&v.defaultProps!=null&&console.error("forwardRef r\
ender functions do not support defaultProps. Did you accidentally pass a React component?");var A={$$typeof:ht,render:v},
j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(L){j=
L,v.name||v.displayName||(Object.defineProperty(v,"name",{value:L}),v.displayName=L)}}),A},fe.isValidElement=S,fe.lazy=function(v){
return{$$typeof:Dn,_payload:{_status:-1,_result:v},_init:Z}},fe.memo=function(v,A){v==null&&console.error("memo: The fir\
st argument must be a component. Instead received: %s",v===null?"null":typeof v),A={$$typeof:oa,type:v,compare:A===void 0?
null:A};var j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(L){
j=L,v.name||v.displayName||(Object.defineProperty(v,"name",{value:L}),v.displayName=L)}}),A},fe.startTransition=function(v){
var A=Se.T,j={};Se.T=j,j._updatedFibers=new Set;try{var L=v(),J=Se.S;J!==null&&J(j,L),typeof L=="object"&&L!==null&&typeof L.
then=="function"&&L.then(we,cf)}catch(Ee){cf(Ee)}finally{A===null&&j._updatedFibers&&(v=j._updatedFibers.size,j._updatedFibers.
clear(),10<v&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription \
please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),Se.T=A}},fe.unstable_useCacheRefresh=
function(){return B().useCacheRefresh()},fe.use=function(v){return B().use(v)},fe.useActionState=function(v,A,j){return B().
useActionState(v,A,j)},fe.useCallback=function(v,A){return B().useCallback(v,A)},fe.useContext=function(v){var A=B();return v.
$$typeof===ae&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to\
 call useContext(Context) instead?"),A.useContext(v)},fe.useDebugValue=function(v,A){return B().useDebugValue(v,A)},fe.useDeferredValue=
function(v,A){return B().useDeferredValue(v,A)},fe.useEffect=function(v,A,j){v==null&&console.warn("React Hook useEffect\
 requires an effect callback. Did you forget to pass a callback to the hook?");var L=B();if(typeof j=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(v,A)},fe.useId=function(){return B().
useId()},fe.useImperativeHandle=function(v,A,j){return B().useImperativeHandle(v,A,j)},fe.useInsertionEffect=function(v,A){
return v==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callba\
ck to the hook?"),B().useInsertionEffect(v,A)},fe.useLayoutEffect=function(v,A){return v==null&&console.warn("React Hook\
 useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),B().useLayoutEffect(v,A)},
fe.useMemo=function(v,A){return B().useMemo(v,A)},fe.useOptimistic=function(v,A){return B().useOptimistic(v,A)},fe.useReducer=
function(v,A,j){return B().useReducer(v,A,j)},fe.useRef=function(v){return B().useRef(v)},fe.useState=function(v){return B().
useState(v)},fe.useSyncExternalStore=function(v,A,j){return B().useSyncExternalStore(v,A,j)},fe.useTransition=function(){
return B().useTransition()},fe.version="19.1.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()});var Xn=We((CM,dd)=>{"use strict";process.env.NODE_ENV==="production"?dd.exports=jg():dd.exports=Lg()});var Fg=We(Tl=>{"use strict";var EE=Symbol.for("react.transitional.element"),xE=Symbol.for("react.fragment");function Ug(e,t,r){
var n=null;if(r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),"key"in t){r={};for(var a in t)a!=="key"&&(r[a]=t[a])}else
r=t;return t=r.ref,{$$typeof:EE,type:e,key:n,ref:t!==void 0?t:null,props:r}}Tl.Fragment=xE;Tl.jsx=Ug;Tl.jsxs=Ug});var Bg=We(kl=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(C){if(C==null)return null;if(typeof C==
"function")return C.$$typeof===we?null:C.displayName||C.name||null;if(typeof C=="string")return C;switch(C){case b:return"\
Fragment";case S:return"Profiler";case T:return"StrictMode";case M:return"Suspense";case W:return"SuspenseList";case B:return"\
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
ase.")),C=this.props.ref,C!==void 0?C:null}function c(C,ae,He,ht,Hr,Or,oa,Dn){return He=Or.ref,C={$$typeof:h,type:C,key:ae,
props:Or,_owner:Hr},(He!==void 0?He:null)!==null?Object.defineProperty(C,"ref",{enumerable:!1,get:l}):Object.defineProperty(
C,"ref",{enumerable:!1,value:null}),C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,
writable:!0,value:0}),Object.defineProperty(C,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.
defineProperty(C,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:oa}),Object.defineProperty(C,"_debugTask",
{configurable:!1,enumerable:!1,writable:!0,value:Dn}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C}function u(C,ae,He,ht,Hr,Or,oa,Dn){
var vt=ae.children;if(vt!==void 0)if(ht)if(_e(vt)){for(ht=0;ht<vt.length;ht++)d(vt[ht]);Object.freeze&&Object.freeze(vt)}else
console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or Rea\
ct.jsxDEV. Use the Babel transform instead.");else d(vt);if(te.call(ae,"key")){vt=e(C);var hn=Object.keys(ae).filter(function(xs){
return xs!=="key"});ht=0<hn.length?"{key: someKey, "+hn.join(": ..., ")+": ...}":"{key: someKey}",or[vt+ht]||(hn=0<hn.length?
"{"+hn.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ht,vt,hn,vt),or[vt+ht]=!0)}if(vt=null,He!==void 0&&(r(He),vt=""+He),o(ae)&&(r(ae.key),
vt=""+ae.key),"key"in ae){He={};for(var Ma in ae)Ma!=="key"&&(He[Ma]=ae[Ma])}else He=ae;return vt&&s(He,typeof C=="funct\
ion"?C.displayName||C.name||"Unknown":C),c(C,vt,Or,Hr,a(),He,oa,Dn)}function d(C){typeof C=="object"&&C!==null&&C.$$typeof===
h&&C._store&&(C._store.validated=1)}var f=Xn(),h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.
for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler");Symbol.for("react.provider");var E=Symbol.
for("react.consumer"),_=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),W=Symbol.
for("react.suspense_list"),G=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),we=Symbol.
for("react.client.reference"),Y=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=Object.prototype.hasOwnProperty,
_e=Array.isArray,pe=console.createTask?console.createTask:function(){return null};f={"react-stack-bottom-frame":function(C){
return C()}};var ie,ot={},lt=f["react-stack-bottom-frame"].bind(f,i)(),Ir=pe(n(i)),or={};kl.Fragment=b,kl.jsx=function(C,ae,He,ht,Hr){
var Or=1e4>Y.recentlyCreatedOwnerStacks++;return u(C,ae,He,!1,ht,Hr,Or?Error("react-stack-top-frame"):lt,Or?pe(n(C)):Ir)},
kl.jsxs=function(C,ae,He,ht,Hr){var Or=1e4>Y.recentlyCreatedOwnerStacks++;return u(C,ae,He,!0,ht,Hr,Or?Error("react-stac\
k-top-frame"):lt,Or?pe(n(C)):Ir)}}()});var Sl=We((DM,pd)=>{"use strict";process.env.NODE_ENV==="production"?pd.exports=Fg():pd.exports=Bg()});var fd=We(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.Allow=q.ALL=q.COLLECTION=q.ATOM=q.SPECIAL=
q.INF=q._INFINITY=q.INFINITY=q.NAN=q.BOOL=q.NULL=q.OBJ=q.ARR=q.NUM=q.STR=void 0;q.STR=1;q.NUM=2;q.ARR=4;q.OBJ=8;q.NULL=16;
q.BOOL=32;q.NAN=64;q.INFINITY=128;q._INFINITY=256;q.INF=q.INFINITY|q._INFINITY;q.SPECIAL=q.NULL|q.BOOL|q.INF|q.NAN;q.ATOM=
q.STR|q.NUM|q.SPECIAL;q.COLLECTION=q.ARR|q.OBJ;q.ALL=q.ATOM|q.COLLECTION;q.Allow={STR:q.STR,NUM:q.NUM,ARR:q.ARR,OBJ:q.OBJ,
NULL:q.NULL,BOOL:q.BOOL,NAN:q.NAN,INFINITY:q.INFINITY,_INFINITY:q._INFINITY,INF:q.INF,SPECIAL:q.SPECIAL,ATOM:q.ATOM,COLLECTION:q.
COLLECTION,ALL:q.ALL};q.default=q.Allow});var hd=We(At=>{"use strict";var _E=At&&At.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),AE=At&&At.__exportStar||function(e,t){
for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&_E(t,e,r)};Object.defineProperty(At,"__esModul\
e",{value:!0});At.Allow=At.MalformedJSON=At.PartialJSON=At.parseJSON=At.parse=void 0;var rr=fd();Object.defineProperty(At,
"Allow",{enumerable:!0,get:function(){return rr.Allow}});AE(fd(),At);var El=class extends Error{};At.PartialJSON=El;var xl=class extends Error{};
At.MalformedJSON=xl;function Hg(e,t=rr.Allow.ALL){if(typeof e!="string")throw new TypeError(`expecting str, got ${typeof e}`);
if(!e.trim())throw new Error(`${e} is empty`);return $E(e.trim(),t)}At.parseJSON=Hg;var $E=(e,t)=>{let r=e.length,n=0,a=f=>{
throw new El(`${f} at position ${n}`)},i=f=>{throw new xl(`${f} at position ${n}`)},o=()=>(d(),n>=r&&a("Unexpected end o\
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
\r	`.includes(e[n]);)n++};return o()},RE=Hg;At.parse=RE});import{fileURLToPath as rD}from"node:url";var Me=oe(Le(),1),tt=oe(Le(),1);var Ls={done:!1,hasNext:!1};function Vc(e,...t){let r=e,n=t.map(i=>"lazy"in i?F1(i):void 0),a=0;for(;a<t.length;){if(n[a]===void 0||!B1(r)){let l=t[a];
r=l(r),a+=1;continue}let i=[];for(let l=a;l<t.length;l++){let c=n[l];if(c===void 0||(i.push(c),c.isSingle))break}let o=[];
for(let l of r)if(xh(l,o,i))break;let{isSingle:s}=i.at(-1);r=s?o[0]:o,a+=i.length}return r}function xh(e,t,r){if(r.length===
0)return t.push(e),!1;let n=e,a=Ls,i=!1;for(let[o,s]of r.entries()){let{index:l,items:c}=s;if(c.push(n),a=s(n,l,c),s.index+=
1,a.hasNext){if(a.hasMany??!1){for(let u of a.next)if(xh(u,t,r.slice(o+1)))return!0;return i}n=a.next}if(!a.hasNext)break;
a.done&&(i=!0)}return a.hasNext&&t.push(n),i}function F1(e){let{lazy:t,lazyArgs:r}=e,n=t(...r);return Object.assign(n,{isSingle:t.
single??!1,index:0,items:[]})}function B1(e){return typeof e=="string"||typeof e=="object"&&e!==null&&Symbol.iterator in
e}function _h(e,t){let r=t.length-e.length;if(r===1){let[n,...a]=t;return Vc(n,{lazy:e,lazyArgs:a})}if(r===0){let n={lazy:e,
lazyArgs:t};return Object.assign(a=>Vc(a,n),n)}throw new Error("Wrong number of arguments")}function Ah(e,t,r){let n=a=>e(a,...t);return r===void 0?n:Object.assign(n,{lazy:r,lazyArgs:t})}function sr(e,t,r){let n=e.length-t.length;if(n===0)return e(...t);if(n===1)return Ah(e,t,r);throw new Error("Wrong numb\
er of arguments")}function Yc(...e){return sr(H1,e)}function H1(e,t){if(e<1)return[];let r=Number.isInteger(e)?e:Math.floor(e),n=new Array(
r);for(let a=0;a<r;a++)n[a]=t(a);return n}function da(...e){return _h(W1,e)}function W1(){let e=new Set;return t=>e.has(t)?Ls:(e.add(t),{done:!1,hasNext:!0,next:t})}function zc(e,t,r){return typeof t=="number"||t===void 0?n=>n.split(e,t):e.split(t,r)}function yr(...e){return sr(q1,e)}var q1=(e,t)=>e[t];function Kc(...e){return sr(V1,e)}function V1(e,t){let r={};for(let[n,a]of Object.entries(e)){let i=t(a,n,e);r[n]=i}return r}function rt(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Us(...e){return sr(Y1,e)}var Y1=e=>e.at(-1);function Un(e){return typeof e=="number"&&!Number.isNaN(e)}function Gc(e){return typeof e=="object"&&e!==null}function Lt(e){return typeof e=="string"}function Jc(e){return e===void 0?!0:typeof e=="string"||Array.isArray(e)?e.length===0:Object.keys(e).length===0}function Bi(e){return typeof e=="function"}function Ue(e){return Array.isArray(e)}function Hi(e){return e!==void 0}function Fn(...e){return sr(z1,e)}var z1=(e,t)=>{let r=new Map;for(let[n,a]of e.entries()){let i=t(a,n,e);if(i!==void 0){
let o=r.get(i);o===void 0&&(o=[],r.set(i,o)),o.push(a)}}return Object.fromEntries(r)};function Zc(){return K1}var K1=e=>e;function bt(...e){return sr(G1,e)}function G1(e,t){let r={};for(let[n,a]of e.entries()){let i=t(a,n,e);r[i]=a}return r}function Xc(...e){return sr(J1,e)}var J1=e=>`${e[0]?.toUpperCase()??""}${e.slice(1)}`;var $=oe(Rh(),1),wr=$.default.BigInt(0),oo=$.default.BigInt(1),qu=$.default.BigInt(2),Z1=$.default.BigInt(10),X1=$.default.
BigInt(24),Q1=$.default.BigInt(60),eS=$.default.BigInt(1e3),xo=$.default.BigInt(1e6),eo=$.default.BigInt(1e9),um=$.default.
multiply($.default.BigInt(3600),eo),tS=$.default.multiply(Q1,eo),Yn=$.default.multiply(um,X1);function vn(e){return typeof e==
"bigint"?$.default.BigInt(e.toString(10)):e}function dm(e){return $.default.equal($.default.remainder(e,qu),wr)}function pa(e){
return $.default.lessThan(e,wr)?$.default.unaryMinus(e):e}function Hs(e,t){return $.default.lessThan(e,t)?-1:$.default.greaterThan(
e,t)?1:0}function Yi(e,t){return{quotient:$.default.divide(e,t),remainder:$.default.remainder(e,t)}}var Ih,Oh,re="slot-e\
pochNanoSeconds",ne="slot-iso-date",Ye="slot-iso-date-time",Qe="slot-time",P="slot-calendar",pm="slot-date-brand",fm="sl\
ot-year-month-brand",hm="slot-month-day-brand",Oe="slot-time-zone",Ht="slot-years",Wt="slot-months",lr="slot-weeks",qt="\
slot-days",Vt="slot-hours",Yt="slot-minutes",zt="slot-seconds",Kt="slot-milliseconds",Gt="slot-microseconds",cr="slot-na\
noseconds",mm="date",gm="ym",ym="md",vm="time",bm="datetime",wm="instant",Sa="original",Wa="timezone-canonical",au="time\
zone-original",zi="calendar-id",Tm="locale",iu="options",km=new WeakMap,ou=Symbol.for("@@Temporal__GetSlots");(Ih=globalThis)[ou]||
(Ih[ou]=function(e){return km.get(e)});var al=globalThis[ou],su=Symbol.for("@@Temporal__CreateSlots");(Oh=globalThis)[su]||
(Oh[su]=function(e){km.set(e,Object.create(null))});var Rn=globalThis[su];function er(e,...t){if(!e||typeof e!="object")
return!1;let r=al(e);return!!r&&t.every(n=>n in r)}function g(e,t){let r=al(e)?.[t];if(r===void 0)throw new TypeError(`M\
issing internal slot ${t}`);return r}function he(e,t,r){let n=al(e);if(n===void 0)throw new TypeError("Missing slots for\
 the given container");if(n[t])throw new TypeError(`${t} already has set`);n[t]=r}var lu={};function In(e,t){Object.defineProperty(
e.prototype,Symbol.toStringTag,{value:t,writable:!1,enumerable:!1,configurable:!0});let r=Object.getOwnPropertyNames(e);
for(let a=0;a<r.length;a++){let i=r[a],o=Object.getOwnPropertyDescriptor(e,i);o.configurable&&o.enumerable&&(o.enumerable=
!1,Object.defineProperty(e,i,o))}let n=Object.getOwnPropertyNames(e.prototype);for(let a=0;a<n.length;a++){let i=n[a],o=Object.
getOwnPropertyDescriptor(e.prototype,i);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e.prototype,
i,o))}cu(t,e),cu(`${t}.prototype`,e.prototype)}function cu(e,t){let r=`%${e}%`;if(lu[r]!==void 0)throw new Error(`intrin\
sic ${e} already exists`);lu[r]=t}function _t(e){return lu[e]}function Va(e,t){let r=e;if(r===0)return{div:r,mod:r};let n=Math.
sign(r);r=Math.abs(r);let a=Math.trunc(1+Math.log10(r));if(t>=a)return{div:0*n,mod:n*r};if(t===0)return{div:n*r,mod:0*n};
let i=r.toPrecision(a);return{div:n*Number.parseInt(i.slice(0,a-t),10),mod:n*Number.parseInt(i.slice(a-t),10)}}function Qc(e,t,r){
let n=e,a=r;if(n===0)return a;let i=Math.sign(n)||Math.sign(a);n=Math.abs(n),a=Math.abs(a);let o=n.toPrecision(Math.trunc(
1+Math.log10(n)));if(a===0)return i*Number.parseInt(o+"0".repeat(t),10);let s=o+a.toPrecision(Math.trunc(1+Math.log10(a))).
padStart(t,"0");return i*Number.parseInt(s,10)}function il(e,t){let r=t==="negative";switch(e){case"ceil":return r?"zero":
"infinity";case"floor":return r?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":
return r?"half-zero":"half-infinity";case"halfFloor":return r?"half-infinity":"half-zero";case"halfExpand":return"half-i\
nfinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function ol(e,t,r,n,a){return a==="zero"?e:
a==="infinity"?t:r<0?e:r>0?t:a==="half-zero"?e:a==="half-infinity"?t:n?e:t}var Fe=class e{constructor(t){this.totalNs=vn(
t),this.sec=$.default.toNumber($.default.divide(this.totalNs,eo)),this.subsec=$.default.toNumber($.default.remainder(this.
totalNs,eo))}static validateNew(t,r){if($.default.greaterThan(pa(t),e.MAX))throw new RangeError(`${r} of duration time u\
nits cannot exceed ${e.MAX} s`);return new e(t)}static fromEpochNsDiff(t,r){let n=$.default.subtract(vn(t),vn(r));return new e(
n)}static fromComponents(t,r,n,a,i,o){let s=$.default.add($.default.add($.default.add($.default.add($.default.add($.default.
BigInt(o),$.default.multiply($.default.BigInt(i),eS)),$.default.multiply($.default.BigInt(a),xo)),$.default.multiply($.default.
BigInt(n),eo)),$.default.multiply($.default.BigInt(r),tS)),$.default.multiply($.default.BigInt(t),um));return e.validateNew(
s,"total")}abs(){return new e(pa(this.totalNs))}add(t){return e.validateNew($.default.add(this.totalNs,t.totalNs),"sum")}add24HourDays(t){
return e.validateNew($.default.add(this.totalNs,$.default.multiply($.default.BigInt(t),Yn)),"sum")}addToEpochNs(t){return $.default.
add(vn(t),this.totalNs)}cmp(t){return Hs(this.totalNs,t.totalNs)}divmod(t){let{quotient:r,remainder:n}=Yi(this.totalNs,$.default.
BigInt(t));return{quotient:$.default.toNumber(r),remainder:new e(n)}}fdiv(t){let r=vn(t),n=$.default.BigInt(r),{quotient:a,
remainder:i}=Yi(this.totalNs,n),o=[],s,l=($.default.lessThan(this.totalNs,wr)?-1:1)*Math.sign($.default.toNumber(r));for(;!$.default.
equal(i,wr)&&o.length<50;)i=$.default.multiply(i,Z1),{quotient:s,remainder:i}=Yi(i,n),o.push(Math.abs($.default.toNumber(
s)));return l*+(pa(a).toString()+"."+o.join(""))}isZero(){return $.default.equal(this.totalNs,wr)}round(t,r){let n=vn(t);
if($.default.equal(n,oo))return this;let{quotient:a,remainder:i}=Yi(this.totalNs,n),o=$.default.lessThan(this.totalNs,wr)?
"negative":"positive",s=$.default.multiply(pa(a),n),l=$.default.add(s,n),c=Hs(pa($.default.multiply(i,qu)),n),u=il(r,o),
d=$.default.equal(pa(this.totalNs),s)?s:ol(s,l,c,dm(a),u),f=o==="positive"?d:$.default.unaryMinus(d);return e.validateNew(
f,"rounding")}sign(){return this.cmp(new e(wr))}subtract(t){return e.validateNew($.default.subtract(this.totalNs,t.totalNs),
"difference")}};Fe.MAX=$.default.BigInt("9007199254740991999999999"),Fe.ZERO=new Fe(wr);var Ch=/[A-Za-z._][A-Za-z._0-9+-]*/,
_o=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${Ch.source})(?:\\/(?:${Ch.source}))*)`),
Sm=/(?:[+-]\d{6}|\d{4})/,Ws=/(?:0[1-9]|1[0-2])/,uu=/(?:0[1-9]|[12]\d|3[01])/,rS=new RegExp(`(${Sm.source})(?:-(${Ws.source}\
)-(${uu.source})|(${Ws.source})(${uu.source}))`),Em=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,
xm=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,_m=new RegExp(`([zZ])|${xm.
source}?`),Ga=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,nS=new RegExp([`^${rS.source}`,`(?:(?:[tT]\
|\\s+)${Em.source}(?:${_m.source})?)?`,`(?:\\[!?(${_o.source})\\])?`,`((?:${Ga.source})*)$`].join("")),aS=new RegExp([`^\
[tT]?${Em.source}`,`(?:${_m.source})?`,`(?:\\[!?${_o.source}\\])?`,`((?:${Ga.source})*)$`].join("")),iS=new RegExp(`^(${Sm.
source})-?(${Ws.source})(?:\\[!?${_o.source}\\])?((?:${Ga.source})*)$`),oS=new RegExp(`^(?:--)?(${Ws.source})-?(${uu.source}\
)(?:\\[!?${_o.source}\\])?((?:${Ga.source})*)$`),eu=/(\d+)(?:[.,](\d{1,9}))?/,sS=new RegExp(`(?:${eu.source}H)?(?:${eu.source}\
M)?(?:${eu.source}S)?`),lS=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${sS.source}\
)?$`,"i"),zn=864e5,qs=1e6*zn,cS=6e10,Am=1e8*zn,Ja=Yr(Am),so=$.default.unaryMinus(Ja),uS=$.default.add($.default.subtract(
so,Yn),oo),dS=$.default.subtract($.default.add(Ja,Yn),oo),pS=146097*zn,Nh=-271821,Ph=275760,to=Date.UTC(1847,0,1),fS=["i\
so8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiop\
ic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],hS=new Set(
["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT",
"PNT","PRT","PST","SST","VST"]);function et(e){return typeof e=="object"&&e!==null||typeof e=="function"}function sl(e){
if(typeof e=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(e)}function ll(e){if(typeof e==
"symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(e)}function se(e){let t=sl(e);if(t===
0)return 0;if(Number.isNaN(t)||t===1/0||t===-1/0)throw new RangeError("invalid number value");let r=Math.trunc(t);return r===
0?0:r}function Dh(e,t){let r=se(e);if(r<=0)throw t!==void 0?new RangeError(`property '${t}' cannot be a a number less th\
an one`):new RangeError("Cannot convert a number less than one to a positive integer");return r}function qr(e){let t=sl(
e);if(Number.isNaN(t))throw new RangeError("not a number");if(t===1/0||t===-1/0)throw new RangeError("infinity is out of\
 range");if(!function(r){if(typeof r!="number"||Number.isNaN(r)||r===1/0||r===-1/0)return!1;let n=Math.abs(r);return Math.
floor(n)===n}(t))throw new RangeError(`unsupported fractional value ${e}`);return t===0?0:t}function lo(e,t){return String(
e).padStart(t,"0")}function mt(e){if(typeof e!="string")throw new TypeError(`expected a string, not ${String(e)}`);return e}
function du(e,t){if(et(e)){let r=e?.toString();if(typeof r=="string"||typeof r=="number")return r;throw new TypeError("C\
annot convert object to primitive value")}return e}var pu=["era","eraYear","year","month","monthCode","day","hour","minu\
te","second","millisecond","microsecond","nanosecond","offset","timeZone"],mS={era:ll,eraYear:se,year:se,month:Dh,monthCode:function(e){
let t=mt(du(e));if(t.length<3||t.length>4||t[0]!=="M"||"0123456789".indexOf(t[1])===-1||"0123456789".indexOf(t[2])===-1||
t[1]+t[2]==="00"&&t[3]!=="L"||t[3]!=="L"&&t[3]!==void 0)throw new RangeError(`bad month code ${t}; must match M01-M99 or\
 M00L-M99L`);return t},day:Dh,hour:se,minute:se,second:se,millisecond:se,microsecond:se,nanosecond:se,offset:function(e){
let t=mt(du(e));return ii(t),t},timeZone:Xt},gS={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},Za=[
["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],
["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microseco\
nd","time"],["nanoseconds","nanosecond","time"]],Mh=Object.fromEntries(Za.map(e=>[e[0],e[1]])),yS=Object.fromEntries(Za.
map(([e,t])=>[t,e])),ro=Za.map(([,e])=>e),Xa={day:qs,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},
Vs=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],vS=Intl.DateTimeFormat,
jh=new Map;function $m(e){let t=ho(e),r=jh.get(t);return r===void 0&&(r=new vS("en-us",{timeZone:t,hour12:!1,era:"short",
year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),jh.set(t,r)),r}function St(e){
return er(e,re)&&!er(e,Oe,P)}function Ze(e){return er(e,Ht,Wt,qt,Vt,Yt,zt,Kt,Gt,cr)}function Xe(e){return er(e,pm)}function at(e){
return er(e,Qe)}function qe(e){return er(e,Ye)}function Et(e){return er(e,fm)}function br(e){return er(e,hm)}function ve(e){
return er(e,re,Oe,P)}function I(e,t){if(!t(e))throw new TypeError("invalid receiver: method called with the wrong type o\
f this-object")}function ri(e){if(er(e,P)||er(e,Oe))throw new TypeError("with() does not support a calendar or timeZone \
property");if(at(e))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(e.calendar!==
void 0)throw new TypeError("with() does not support a calendar property");if(e.timeZone!==void 0)throw new TypeError("wi\
th() does not support a timeZone property")}function Ao(e,t){return t==="never"||t==="auto"&&e==="iso8601"?"":`[${t==="c\
ritical"?"!":""}u-ca=${e}]`}function cl(e){let t,r,n=!1;for(Ga.lastIndex=0;r=Ga.exec(e);){let{1:a,2:i,3:o}=r;if(i==="u-c\
a"){if(t===void 0)t=o,n=a==="!";else if(a==="!"||n)throw new RangeError(`Invalid annotations in ${e}: more than one u-ca\
 present with critical flag`)}else if(a==="!")throw new RangeError(`Unrecognized annotation: !${i}=${o}`)}return t}function sn(e){
let t=nS.exec(e);if(!t)throw new RangeError(`invalid RFC 9557 string: ${e}`);let r=cl(t[16]),n=t[1];if(n==="-000000")throw new RangeError(
`invalid RFC 9557 string: ${e}`);let a=+n,i=+(t[2]??t[4]??1),o=+(t[3]??t[5]??1),s=t[6]!==void 0,l=+(t[6]??0),c=+(t[7]??t[10]??
0),u=+(t[8]??t[11]??0);u===60&&(u=59);let d=(t[9]??t[12]??"")+"000000000",f=+d.slice(0,3),h=+d.slice(3,6),y=+d.slice(6,9),
b,T=!1;t[13]?(b=void 0,T=!0):t[14]&&(b=t[14]);let S=t[15];return Ju(a,i,o,l,c,u,f,h,y),{year:a,month:i,day:o,time:s?{hour:l,
minute:c,second:u,millisecond:f,microsecond:h,nanosecond:y}:"start-of-day",tzAnnotation:S,offset:b,z:T,calendar:r}}function Rm(e){
let t=aS.exec(e),r,n,a,i,o,s,l;if(t){l=cl(t[10]),r=+(t[1]??0),n=+(t[2]??t[5]??0),a=+(t[3]??t[6]??0),a===60&&(a=59);let c=(t[4]??
t[7]??"")+"000000000";if(i=+c.slice(0,3),o=+c.slice(3,6),s=+c.slice(6,9),t[8])throw new RangeError("Z designator not sup\
ported for PlainTime")}else{let c,u;if({time:c,z:u,calendar:l}=sn(e),c==="start-of-day")throw new RangeError(`time is mi\
ssing in string: ${e}`);if(u)throw new RangeError("Z designator not supported for PlainTime");({hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s}=c)}if(fl(r,n,a,i,o,s),/[tT ][0-9][0-9]/.test(e))return{hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s,calendar:l};try{let{month:c,day:u}=Yu(e);ya(1972,c,u)}catch{try{let{year:c,month:u}=Vu(
e);ya(c,u,1)}catch{return{hour:r,minute:n,second:a,millisecond:i,microsecond:o,nanosecond:s,calendar:l}}}throw new RangeError(
`invalid RFC 9557 time-only string ${e}; may need a T prefix`)}function Vu(e){let t=iS.exec(e),r,n,a,i;if(t){a=cl(t[3]);
let o=t[1];if(o==="-000000")throw new RangeError(`invalid RFC 9557 string: ${e}`);if(r=+o,n=+t[2],i=1,a!==void 0&&a!=="i\
so8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let o;if({year:r,month:n,calendar:a,
day:i,z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:r,month:n,calendar:a,
referenceISODay:i}}function Yu(e){let t=oS.exec(e),r,n,a,i;if(t){if(a=cl(t[3]),r=+t[1],n=+t[2],a!==void 0&&a!=="iso8601")
throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let o;if({month:r,day:n,calendar:a,year:i,
z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:r,day:n,calendar:a,referenceISOYear:i}}
var Im=new RegExp(`^${_o.source}$`,"i"),Om=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function Cm(e){
let t=wS.test(e)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${t}: ${e}`)}function Vn(e){
return Im.test(e)||Cm(e),Om.test(e)?{offsetMinutes:ii(e)/6e10}:{tzName:e}}function no(e,t,r,n){let a=e,i=t,o=r;switch(n){case"\
reject":ya(a,i,o);break;case"constrain":({year:a,month:i,day:o}=Gm(a,i,o))}return{year:a,month:i,day:o}}function ul(e,t,r,n,a,i,o){
let s=e,l=t,c=r,u=n,d=a,f=i;switch(o){case"reject":fl(s,l,c,u,d,f);break;case"constrain":s=Jt(s,0,23),l=Jt(l,0,59),c=Jt(
c,0,59),u=Jt(u,0,999),d=Jt(d,0,999),f=Jt(f,0,999)}return{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}
function Nm(e){if(!et(e))throw new TypeError("invalid duration-like");let t={years:void 0,months:void 0,weeks:void 0,days:void 0,
hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0},r=!1;for(let n=0;n<
Vs.length;n++){let a=Vs[n],i=e[a];i!==void 0&&(r=!0,t[a]=qr(i))}if(!r)throw new TypeError("invalid duration-like");return t}
function Nt({years:e,months:t,weeks:r,days:n},a,i,o){return{years:e,months:o??t,weeks:i??r,days:a??n}}function Re(e,t){return{
isoDate:e,time:t}}function Ae(e){return xn(e,"overflow",["constrain","reject"],"constrain")}function ao(e){return xn(e,"\
disambiguation",["compatible","earlier","later","reject"],"compatible")}function zr(e,t){return xn(e,"roundingMode",["ce\
il","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],t)}function Bs(e,t){return xn(e,
"offset",["prefer","use","ignore","reject"],t)}function $o(e){return xn(e,"calendarName",["auto","always","never","criti\
cal"],"auto")}function ni(e){let t=e.roundingIncrement;if(t===void 0)return 1;let r=se(t);if(r<1||r>1e9)throw new RangeError(
`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);return r}function ai(e,t,r){let n=r?t:t-1;if(e>n)throw new RangeError(
`roundingIncrement must be at least 1 and less than ${n}, not ${e}`);if(t%e!=0)throw new RangeError(`Rounding increment \
must divide evenly into ${t}`)}function Ro(e){let t=e.fractionalSecondDigits;if(t===void 0)return"auto";if(typeof t!="nu\
mber"){if(ll(t)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return"a\
uto"}let r=Math.floor(t);if(!Number.isFinite(r)||r<0||r>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or\
 0 through 9, not ${t}`);return r}function Io(e,t){switch(e){case"minute":return{precision:"minute",unit:"minute",increment:1};case"\
second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"\
microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}
switch(t){case"auto":return{precision:t,unit:"nanosecond",increment:1};case 0:return{precision:t,unit:"second",increment:1};case 1:case 2:case 3:
return{precision:t,unit:"millisecond",increment:10**(3-t)};case 4:case 5:case 6:return{precision:t,unit:"microsecond",increment:10**
(6-t)};case 7:case 8:case 9:return{precision:t,unit:"nanosecond",increment:10**(9-t)};default:throw new RangeError(`frac\
tionalSecondDigits must be 'auto' or 0 through 9, not ${t}`)}}var An=Symbol("~required~");function dr(e,t,r,n,a=[]){let i=[];
for(let c=0;c<Za.length;c++){let u=Za[c],d=u[1],f=u[2];r!=="datetime"&&r!==f||i.push(d)}i=i.concat(a);let o=n;o===An?o=void 0:
o!==void 0&&i.push(o);let s=[];s=s.concat(i);for(let c=0;c<i.length;c++){let u=i[c],d=yS[u];d!==void 0&&s.push(d)}let l=xn(
e,t,s,o);if(l===void 0&&n===An)throw new RangeError(`${t} is required`);return l&&l in Mh?Mh[l]:l}function tu(e){let t=e.
relativeTo;if(t===void 0)return{};let r,n,a,i,o,s="option",l=!1;if(et(t)){if(ve(t))return{zonedRelativeTo:t};if(Xe(t))return{
plainRelativeTo:t};if(qe(t))return{plainRelativeTo:Zt(g(t,Ye).isoDate,g(t,P))};a=Do(t);let c=Er(a,t,["year","month","mon\
thCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:r,time:n}=
Co(a,c,"constrain")),{offset:o,timeZone:i}=c,o===void 0&&(s="wall")}else{let c,u,d,f,h;if({year:d,month:f,day:h,time:n,calendar:a,
tzAnnotation:c,offset:o,z:u}=sn(mt(t)),c)i=Xt(c),u?s="exact":o||(s="wall"),l=!0;else if(u)throw new RangeError("Z design\
ator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");a||(a="iso8601"),a=tr(a),
r={year:d,month:f,day:h}}return i===void 0?{plainRelativeTo:Zt(r,a)}:{zonedRelativeTo:Ct(Ys(r,n,s,s==="option"?ii(o):0,i,
"compatible","reject",l),i,a)}}function bn(e){return g(e,Ht)!==0?"year":g(e,Wt)!==0?"month":g(e,lr)!==0?"week":g(e,qt)!==
0?"day":g(e,Vt)!==0?"hour":g(e,Yt)!==0?"minute":g(e,zt)!==0?"second":g(e,Kt)!==0?"millisecond":g(e,Gt)!==0?"microsecond":
"nanosecond"}function Sn(e,t){return ro.indexOf(e)>ro.indexOf(t)?t:e}function Qr(e){return e==="year"||e==="month"||e===
"week"}function wn(e){return Qr(e)||e==="day"?"date":"time"}function Jn(e){return _t("%calendarImpl%")(e)}function Oo(e){
return _t("%calendarImpl%")(g(e,P))}function Qt(e,t,r="date"){let n=Object.create(null),a=Jn(e).isoToDate(t,{year:!0,monthCode:!0,
day:!0});return n.monthCode=a.monthCode,r!=="month-day"&&r!=="date"||(n.day=a.day),r!=="year-month"&&r!=="date"||(n.year=
a.year),n}function Er(e,t,r,n,a){let i=Jn(e).extraFields(r),o=r.concat(n,i),s=Object.create(null),l=!1;o.sort();for(let c=0;c<
o.length;c++){let u=o[c],d=t[u];if(d!==void 0)l=!0,s[u]=(0,mS[u])(d);else if(a!=="partial"){if(a.includes(u))throw new TypeError(
`required property '${u}' missing or undefined`);s[u]=gS[u]}}if(a==="partial"&&!l)throw new TypeError("no supported prop\
erties found");return s}function fu(e,t="complete"){let r=["hour","microsecond","millisecond","minute","nanosecond","sec\
ond"],n=!1,a=Object.create(null);for(let i=0;i<r.length;i++){let o=r[i],s=e[o];s!==void 0?(a[o]=se(s),n=!0):t==="complet\
e"&&(a[o]=0)}if(!n)throw new TypeError("invalid time-like");return a}function Ki(e,t){if(et(e)){if(Xe(e))return Ae(K(t)),
Zt(g(e,ne),g(e,P));if(ve(e)){let l=jr(g(e,Oe),g(e,re));return Ae(K(t)),Zt(l.isoDate,g(e,P))}if(qe(e))return Ae(K(t)),Zt(
g(e,Ye).isoDate,g(e,P));let s=Do(e);return Zt(Kn(s,Er(s,e,["year","month","monthCode","day"],[],[]),Ae(K(t))),s)}let{year:r,
month:n,day:a,calendar:i,z:o}=sn(mt(e));if(o)throw new RangeError("Z designator not supported for PlainDate");return i||
(i="iso8601"),i=tr(i),Ae(K(t)),Zt({year:r,month:n,day:a},i)}function Co(e,t,r){return Re(Kn(e,t,r),ul(t.hour,t.minute,t.
second,t.millisecond,t.microsecond,t.nanosecond,r))}function Gi(e,t){let r,n,a;if(et(e)){if(qe(e))return Ae(K(t)),Pr(g(e,
Ye),g(e,P));if(ve(e)){let s=jr(g(e,Oe),g(e,re));return Ae(K(t)),Pr(s,g(e,P))}if(Xe(e))return Ae(K(t)),Pr(Re(g(e,ne),{deltaDays:0,
hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),g(e,P));a=Do(e);let i=Er(a,e,["year","month","monthC\
ode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),o=Ae(K(t));({isoDate:r,time:n}=Co(a,
i,o))}else{let i,o,s,l;if({year:o,month:s,day:l,time:n,calendar:a,z:i}=sn(mt(e)),i)throw new RangeError("Z designator no\
t supported for PlainDateTime");n==="start-of-day"&&(n={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0}),Ju(o,s,l,n.hour,n.minute,n.second,n.millisecond,n.microsecond,n.nanosecond),a||(a="iso8601"),a=tr(a),Ae(K(
t)),r={year:o,month:s,day:l}}return Pr(Re(r,n),a)}function Mr(e){let t=_t("%Temporal.Duration%");if(Ze(e))return new t(g(
e,Ht),g(e,Wt),g(e,lr),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr));if(!et(e))return function(a){let{years:i,
months:o,weeks:s,days:l,hours:c,minutes:u,seconds:d,milliseconds:f,microseconds:h,nanoseconds:y}=function(b){let T=lS.exec(
b);if(!T)throw new RangeError(`invalid duration: ${b}`);if(T.every((Ir,or)=>or<2||Ir===void 0))throw new RangeError(`inv\
alid duration: ${b}`);let S=T[1]==="-"?-1:1,E=T[2]===void 0?0:se(T[2])*S,_=T[3]===void 0?0:se(T[3])*S,O=T[4]===void 0?0:
se(T[4])*S,M=T[5]===void 0?0:se(T[5])*S,W=T[6]===void 0?0:se(T[6])*S,G=T[7],Z=T[8],B=T[9],we=T[10],Y=T[11],te=0,_e=0,pe=0;
if(G!==void 0){if(Z??B??we??Y)throw new RangeError("only the smallest unit can be fractional");pe=3600*se((G+"000000000").
slice(0,9))*S}else if(te=Z===void 0?0:se(Z)*S,B!==void 0){if(we??Y)throw new RangeError("only the smallest unit can be f\
ractional");pe=60*se((B+"000000000").slice(0,9))*S}else _e=we===void 0?0:se(we)*S,Y!==void 0&&(pe=se((Y+"000000000").slice(
0,9))*S);let ie=pe%1e3,ot=Math.trunc(pe/1e3)%1e3,lt=Math.trunc(pe/1e6)%1e3;return _e+=Math.trunc(pe/1e9)%60,te+=Math.trunc(
pe/6e10),hl(E,_,O,M,W,te,_e,lt,ot,ie),{years:E,months:_,weeks:O,days:M,hours:W,minutes:te,seconds:_e,milliseconds:lt,microseconds:ot,
nanoseconds:ie}}(a);return new(_t("%Temporal.Duration%"))(i,o,s,l,c,u,d,f,h,y)}(mt(e));let r={years:0,months:0,weeks:0,days:0,
hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0},n=Nm(e);for(let a=0;a<Vs.length;a++){let i=Vs[a],
o=n[i];o!==void 0&&(r[i]=o)}return new t(r.years,r.months,r.weeks,r.days,r.hours,r.minutes,r.seconds,r.milliseconds,r.microseconds,
r.nanoseconds)}function Ji(e){let t;if(et(e)){if(St(e)||ve(e))return Vr(g(e,re));t=du(e)}else t=e;let{year:r,month:n,day:a,
time:i,offset:o,z:s}=function(b){let T=sn(b);if(!T.z&&!T.offset)throw new RangeError("Temporal.Instant requires a time z\
one offset");return T}(mt(t)),{hour:l=0,minute:c=0,second:u=0,millisecond:d=0,microsecond:f=0,nanosecond:h=0}=i==="start\
-of-day"?{}:i,y=fo(r,n,a,l,c,u,d,f,h-(s?0:ii(o)));return Ka(y.isoDate),Vr(xt(y))}function Lh(e,t){if(et(e)){if(br(e))return Ae(
K(t)),Ya(g(e,ne),g(e,P));let s;return er(e,P)?s=g(e,P):(s=e.calendar,s===void 0&&(s="iso8601"),s=Po(s)),Ya(zs(s,Er(s,e,[
"year","month","monthCode","day"],[],[]),Ae(K(t))),s)}let{month:r,day:n,referenceISOYear:a,calendar:i}=Yu(mt(e));if(i===
void 0&&(i="iso8601"),i=tr(i),Ae(K(t)),i==="iso8601")return Ya({year:1972,month:r,day:n},i);let o={year:a,month:r,day:n};
return Ea(o),o=zs(i,Qt(i,o,"month-day"),"constrain"),Ya(o,i)}function Wn(e,t){let r;if(et(e)){if(at(e))return Ae(K(t)),Tn(
g(e,Qe));if(qe(e))return Ae(K(t)),Tn(g(e,Ye).time);if(ve(e)){let c=jr(g(e,Oe),g(e,re));return Ae(K(t)),Tn(c.time)}let{hour:n,
minute:a,second:i,millisecond:o,microsecond:s,nanosecond:l}=fu(e);r=ul(n,a,i,o,s,l,Ae(K(t)))}else r=Rm(mt(e)),Ae(K(t));return Tn(
r)}function Pm(e){return e===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:g(Wn(
e),Qe)}function Zi(e,t){if(et(e)){if(Et(e))return Ae(K(t)),za(g(e,ne),g(e,P));let s=Do(e);return za(co(s,Er(s,e,["year",
"month","monthCode"],[],[]),Ae(K(t))),s)}let{year:r,month:n,referenceISODay:a,calendar:i}=Vu(mt(e));i===void 0&&(i="iso8\
601"),i=tr(i),Ae(K(t));let o={year:r,month:n,day:a};return Zu(o),o=co(i,Qt(i,o,"year-month"),"constrain"),za(o,i)}function Ys(e,t,r,n,a,i,o,s){
if(t==="start-of-day")return Bn(a,e);let l=Re(e,t);if(r==="wall"||o==="ignore")return Pt(a,l,i);if(r==="exact"||o==="use"){
let d=fo(e.year,e.month,e.day,t.hour,t.minute,t.second,t.millisecond,t.microsecond,t.nanosecond-n);Ka(d.isoDate);let f=xt(
d);return an(f),f}Ka(e);let c=xt(l),u=uo(a,l);for(let d=0;d<u.length;d++){let f=u[d],h=$.default.toNumber($.default.subtract(
c,f)),y=qn(h,6e10,"halfExpand");if(h===n||s&&y===n)return f}if(o==="reject"){let d=hu(n),f=po(l,"iso8601","auto");throw new RangeError(
`Offset ${d} is invalid for ${f} in ${a}`)}return Wm(u,a,l,i)}function Xi(e,t){let r,n,a,i,o,s,l,c=!1,u="option";if(et(e)){
if(ve(e)){let b=K(t);return ao(b),Bs(b,"reject"),Ae(b),Ct(g(e,re),g(e,Oe),g(e,P))}o=Do(e);let f=Er(o,e,["year","month","\
monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);
({offset:i,timeZone:a}=f),i===void 0&&(u="wall");let h=K(t);s=ao(h),l=Bs(h,"reject");let y=Ae(h);({isoDate:r,time:n}=Co(
o,f,y))}else{let f,h,y,b,T;({year:y,month:b,day:T,time:n,tzAnnotation:f,offset:i,z:h,calendar:o}=function(E){let _=sn(E);
if(!_.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return _}(mt(e))),
a=Xt(f),h?u="exact":i||(u="wall"),o||(o="iso8601"),o=tr(o),c=!0;let S=K(t);s=ao(S),l=Bs(S,"reject"),Ae(S),r={year:y,month:b,
day:T}}let d=0;return u==="option"&&(d=ii(i)),Ct(Ys(r,n,u,d,a,s,l,c),a,o)}function Dm(e,t,r){Ea(t),Rn(e),he(e,ne,t),he(e,
P,r),he(e,pm,!0)}function Zt(e,t){let r=_t("%Temporal.PlainDate%"),n=Object.create(r.prototype);return Dm(n,e,t),n}function Mm(e,t,r){
va(t),Rn(e),he(e,Ye,t),he(e,P,r)}function Pr(e,t){let r=_t("%Temporal.PlainDateTime%"),n=Object.create(r.prototype);return Mm(
n,e,t),n}function jm(e,t,r){Ea(t),Rn(e),he(e,ne,t),he(e,P,r),he(e,hm,!0)}function Ya(e,t){let r=_t("%Temporal.PlainMonth\
Day%"),n=Object.create(r.prototype);return jm(n,e,t),n}function Lm(e,t){Rn(e),he(e,Qe,t)}function Tn(e){let t=_t("%Tempo\
ral.PlainTime%"),r=Object.create(t.prototype);return Lm(r,e),r}function Um(e,t,r){Zu(t),Rn(e),he(e,ne,t),he(e,P,r),he(e,
fm,!0)}function za(e,t){let r=_t("%Temporal.PlainYearMonth%"),n=Object.create(r.prototype);return Um(n,e,t),n}function Fm(e,t){
an(t),Rn(e),he(e,re,t)}function Vr(e){let t=_t("%Temporal.Instant%"),r=Object.create(t.prototype);return Fm(r,e),r}function Bm(e,t,r,n){
an(t),Rn(e),he(e,re,t),he(e,Oe,r),he(e,P,n)}function Ct(e,t,r="iso8601"){let n=_t("%Temporal.ZonedDateTime%"),a=Object.create(
n.prototype);return Bm(a,e,t,r),a}function Uh(e){return pu.filter(t=>e[t]!==void 0)}function ga(e,t,r){let n=Uh(r),a=Jn(
e).fieldKeysToIgnore(n),i=Object.create(null),o=Uh(t);for(let s=0;s<pu.length;s++){let l,c=pu[s];o.includes(c)&&!a.includes(
c)&&(l=t[c]),n.includes(c)&&(l=r[c]),l!==void 0&&(i[c]=l)}return i}function kr(e,t,r,n){let a=Jn(e).dateAdd(t,r,n);return Ea(
a),a}function No(e,t,r,n){return Jn(e).dateUntil(t,r,n)}function Po(e){if(et(e)&&er(e,P))return g(e,P);let t=mt(e);try{return tr(
t)}catch{}let r;try{({calendar:r}=sn(t))}catch{try{({calendar:r}=Rm(t))}catch{try{({calendar:r}=Vu(t))}catch{({calendar:r}=
Yu(t))}}}return r||(r="iso8601"),tr(r)}function Do(e){if(er(e,P))return g(e,P);let{calendar:t}=e;return t===void 0?"iso8\
601":Po(t)}function nn(e,t){return tr(e)===tr(t)}function Kn(e,t,r){let n=Jn(e);n.resolveFields(t,"date");let a=n.dateToISO(
t,r);return Ea(a),a}function co(e,t,r){let n=Jn(e);n.resolveFields(t,"year-month"),t.day=1;let a=n.dateToISO(t,r);return Zu(
a),a}function zs(e,t,r){let n=Jn(e);n.resolveFields(t,"month-day");let a=n.monthDayToISOReferenceDate(t,r);return Ea(a),
a}function Xt(e){if(et(e)&&ve(e))return g(e,Oe);let t=mt(e);if(t==="UTC")return"UTC";let{tzName:r,offsetMinutes:n}=function(i){
let{tzAnnotation:o,offset:s,z:l}=function(c){if(Im.test(c))return{tzAnnotation:c,offset:void 0,z:!1};try{let{tzAnnotation:u,
offset:d,z:f}=sn(c);if(f||u||d)return{tzAnnotation:u,offset:d,z:f}}catch{}Cm(c)}(i);return o?Vn(o):l?Vn("UTC"):s?Vn(s):void 0}(
t);if(n!==void 0)return zu(n);let a=Ks(r);if(!a)throw new RangeError(`Unrecognized time zone ${r}`);return a.identifier}
function Hm(e,t){if(e===t)return!0;let r=Vn(e).offsetMinutes,n=Vn(t).offsetMinutes;if(r===void 0&&n===void 0){let a=Ks(t);
if(!a)return!1;let i=Ks(e);return!!i&&i.primaryIdentifier===a.primaryIdentifier}return r===n}function kn(e,t){let r=Vn(e).
offsetMinutes;return r!==void 0?6e10*r:mu(e,t)}function hu(e){let t=e<0?"-":"+",r=Math.abs(e),n=Math.floor(r/36e11),a=Math.
floor(r/6e10)%60,i=Math.floor(r/1e9)%60,o=r%1e9;return`${t}${dl(n,a,i,o,i===0&&o===0?"minute":"auto")}`}function jr(e,t){
let r=kn(e,t),{isoDate:{year:n,month:a,day:i},time:{hour:o,minute:s,second:l,millisecond:c,microsecond:u,nanosecond:d}}=Ym(
t);return fo(n,a,i,o,s,l,c,u,d+r)}function Pt(e,t,r){return Wm(uo(e,t),e,t,r)}function Wm(e,t,r,n){let a=e.length;if(a===
1)return e[0];if(a)switch(n){case"compatible":case"earlier":return e[0];case"later":return e[a-1];case"reject":throw new RangeError(
"multiple instants found")}if(n==="reject")throw new RangeError("multiple instants found");let i=xt(r),o=$.default.subtract(
i,Yn);an(o);let s=kn(t,o),l=$.default.add(i,Yn);an(l);let c=kn(t,l)-s;switch(n){case"earlier":{let u=Fe.fromComponents(0,
0,0,0,0,-c),d=Qa(r.time,u);return uo(t,Re(pr(r.isoDate.year,r.isoDate.month,r.isoDate.day+d.deltaDays),d))[0]}case"compa\
tible":case"later":{let u=Fe.fromComponents(0,0,0,0,0,c),d=Qa(r.time,u),f=uo(t,Re(pr(r.isoDate.year,r.isoDate.month,r.isoDate.
day+d.deltaDays),d));return f[f.length-1]}}}function uo(e,t){if(e==="UTC")return Ka(t.isoDate),[xt(t)];let r=Vn(e).offsetMinutes;
if(r!==void 0){let n=fo(t.isoDate.year,t.isoDate.month,t.isoDate.day,t.time.hour,t.time.minute-r,t.time.second,t.time.millisecond,
t.time.microsecond,t.time.nanosecond);Ka(n.isoDate);let a=xt(n);return an(a),[a]}return Ka(t.isoDate),function(n,a){let i=xt(
a),o=$.default.subtract(i,Yn);$.default.lessThan(o,so)&&(o=i);let s=$.default.add(i,Yn);$.default.greaterThan(s,Ja)&&(s=
i);let l=mu(n,o),c=mu(n,s);return(l===c?[l]:[l,c]).map(d=>{let f=$.default.subtract(i,$.default.BigInt(d)),h=function(y,b){
let{epochMilliseconds:T,time:{millisecond:S,microsecond:E,nanosecond:_}}=Ym(b),{year:O,month:M,day:W,hour:G,minute:Z,second:B}=zm(
y,T);return fo(O,M,W,G,Z,B,S,E,_)}(n,f);if(ei(a,h)===0)return an(f),f}).filter(d=>d!==void 0)}(e,t)}function Bn(e,t){let r=Re(
t,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),n=uo(e,r);if(n.length)return n[0];let a=xt(
r),i=$.default.subtract(a,Yn);return an(i),Gu(e,i)}function Mo(e){let t;return t=e<0||e>9999?(e<0?"-":"+")+lo(Math.abs(e),
6):lo(e,4),t}function Sr(e){return lo(e,2)}function qm(e,t){let r;if(t==="auto"){if(e===0)return"";r=lo(e,9).replace(/0+$/,
"")}else{if(t===0)return"";r=lo(e,9).slice(0,t)}return`.${r}`}function dl(e,t,r,n,a){let i=`${Sr(e)}:${Sr(t)}`;return a===
"minute"||(i+=`:${Sr(r)}`,i+=qm(n,a)),i}function Fh(e,t,r){let n=t;n===void 0&&(n="UTC");let a=g(e,re),i=po(jr(n,a),"iso\
8601",r,"never"),o="Z";return t!==void 0&&(o=Vm(kn(n,a))),`${i}${o}`}function Fs(e,t){let r=g(e,Ht),n=g(e,Wt),a=g(e,lr),
i=g(e,qt),o=g(e,Vt),s=g(e,Yt),l=Js(e),c="";r!==0&&(c+=`${Math.abs(r)}Y`),n!==0&&(c+=`${Math.abs(n)}M`),a!==0&&(c+=`${Math.
abs(a)}W`),i!==0&&(c+=`${Math.abs(i)}D`);let u="";o!==0&&(u+=`${Math.abs(o)}H`),s!==0&&(u+=`${Math.abs(s)}M`);let d=Fe.fromComponents(
0,0,g(e,zt),g(e,Kt),g(e,Gt),g(e,cr));d.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(bn(e))&&t===
"auto"||(u+=`${Math.abs(d.sec)}${qm(Math.abs(d.subsec),t)}S`);let f=`${l<0?"-":""}P${c}`;return u&&(f=`${f}T${u}`),f}function Bh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne);return`${Mo(r)}-${Sr(n)}-${Sr(a)}${Ao(g(e,P),t)}`}function Hh({hour:e,minute:t,
second:r,millisecond:n,microsecond:a,nanosecond:i},o){return dl(e,t,r,1e6*n+1e3*a+i,o)}function po(e,t,r,n="auto"){let{isoDate:{
year:a,month:i,day:o},time:{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}=e;return`${Mo(a)}-${Sr(i)}\
-${Sr(o)}T${dl(s,l,c,1e6*u+1e3*d+f,r)}${Ao(t,n)}`}function Wh(e,t="auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${Sr(n)}-${Sr(
a)}`,o=g(e,P);t!=="always"&&t!=="critical"&&o==="iso8601"||(i=`${Mo(r)}-${i}`);let s=Ao(o,t);return s&&(i+=s),i}function qh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${Mo(r)}-${Sr(n)}`,o=g(e,P);t!=="always"&&t!=="critical"&&o==="iso8601"||(i+=
`-${Sr(a)}`);let s=Ao(o,t);return s&&(i+=s),i}function Vh(e,t,r="auto",n="auto",a="auto",i=void 0){let o=g(e,re);if(i){let{
unit:u,increment:d,roundingMode:f}=i;o=bu(o,d,u,f)}let s=g(e,Oe),l=kn(s,o),c=po(jr(s,o),"iso8601",t,"never");return a!==
"never"&&(c+=Vm(l)),n!=="never"&&(c+=`[${n==="critical"?"!":""}${s}]`),c+=Ao(g(e,P),r),c}function Yh(e){return Om.test(e)}
function ii(e){let t=TS.exec(e);if(!t)throw new RangeError(`invalid time zone offset: ${e}; must match \xB1HH:MM[:SS.SSSSSS\
SSS]`);return(t[1]==="-"?-1:1)*(1e9*(60*(60*+t[2]+ +(t[3]||0))+ +(t[4]||0))+ +((t[5]||0)+"000000000").slice(0,9))}var Wi,
bS=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function Ks(e){if(Wi===void 0){let i=Intl.supportedValuesOf?.(
"timeZone");if(i){Wi=new Map;for(let o=0;o<i.length;o++){let s=i[o];Wi.set(ho(s),s)}}else Wi=null}let t=ho(e),r=Wi?.get(
t);if(r)return{identifier:r,primaryIdentifier:r};try{r=$m(e).resolvedOptions().timeZone}catch{return}if(t==="antarctica/\
south_pole"&&(r="Antarctica/McMurdo"),hS.has(e))throw new RangeError(`${e} is a legacy time zone identifier from ICU. Us\
e ${r} instead`);let n=[...t].map((i,o)=>o===0||bS[t[o-1]]?i.toUpperCase():i).join("").split("/");if(n.length===1)return t===
"gb-eire"?{identifier:"GB-Eire",primaryIdentifier:r}:{identifier:t.length<=3||/[-0-9]/.test(t)?t.toUpperCase():n[0],primaryIdentifier:r};
if(n[0]==="Etc")return{identifier:`Etc/${["Zulu","Greenwich","Universal"].includes(n[1])?n[1]:n[1].toUpperCase()}`,primaryIdentifier:r};
if(n[0]==="Us")return{identifier:`US/${n[1]}`,primaryIdentifier:r};let a=new Map([["Act","ACT"],["Lhi","LHI"],["Nsw","NS\
W"],["Dar_Es_Salaam","Dar_es_Salaam"],["Port_Of_Spain","Port_of_Spain"],["Port-Au-Prince","Port-au-Prince"],["Isle_Of_Ma\
n","Isle_of_Man"],["Comodrivadavia","ComodRivadavia"],["Knox_In","Knox_IN"],["Dumontdurville","DumontDUrville"],["Mcmurd\
o","McMurdo"],["Denoronha","DeNoronha"],["Easterisland","EasterIsland"],["Bajanorte","BajaNorte"],["Bajasur","BajaSur"]]);
return n[1]=a.get(n[1])??n[1],n.length>2&&(n[2]=a.get(n[2])??n[2]),{identifier:n.join("/"),primaryIdentifier:r}}function ha(e,t){
let{year:r,month:n,day:a,hour:i,minute:o,second:s}=zm(e,t),l=t%1e3;return l<0&&(l+=1e3),1e6*(Ku({isoDate:{year:r,month:n,
day:a},time:{hour:i,minute:o,second:s,millisecond:l}})-t)}function mu(e,t){return ha(e,Lr(t,"floor"))}function zu(e){let t=e<
0?"-":"+",r=Math.abs(e);return`${t}${dl(Math.floor(r/60),r%60,0,0,"minute")}`}function Vm(e){return zu(qn(e,cS,"halfExpa\
nd")/6e10)}function Ku({isoDate:{year:e,month:t,day:r},time:{hour:n,minute:a,second:i,millisecond:o}}){let s=e%400,l=(e-
s)/400,c=new Date;return c.setUTCHours(n,a,i,o),c.setUTCFullYear(s,t-1,r),c.getTime()+pS*l}function xt(e){let t=Ku(e),r=1e3*
e.time.microsecond+e.time.nanosecond;return $.default.add(Yr(t),$.default.BigInt(r))}function Ym(e){let t=Lr(e,"trunc"),
r=$.default.toNumber($.default.remainder(e,xo));r<0&&(r+=1e6,t-=1);let n=Math.floor(r/1e3)%1e3,a=r%1e3,i=new Date(t);return{
epochMilliseconds:t,isoDate:{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate()},time:{hour:i.getUTCHours(),
minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds(),microsecond:n,nanosecond:a}}}function Gu(e,t){
if(e==="UTC")return null;let r=Lr(t,"floor");if(r<to)return Gu(e,Yr(to));let n=Date.now(),a=Math.max(r,n)+366*zn*3,i=r,o=ha(
e,i),s=i,l=o;for(;o===l&&i<a;){if(s=i+2*zn*7,s>Am)return null;l=ha(e,s),o===l&&(i=s)}return o===l?null:Yr(ng(c=>ha(e,c),
i,s,o,l))}function gu(e,t){if(e==="UTC")return null;let r=Lr(t,"ceil"),n=Date.now(),a=n+366*zn*3;if(r>a){let c=gu(e,Yr(a));
if(c===null||$.default.lessThan(c,Yr(n)))return c}if(e==="Africa/Casablanca"||e==="Africa/El_Aaiun"){let c=Date.UTC(2088,
0,1);if(c<r)return gu(e,Yr(c))}let i=r-1;if(i<to)return null;let o=ha(e,i),s=i,l=o;for(;o===l&&i>to;){if(s=i-2*zn*7,s<to)
return null;l=ha(e,s),o===l&&(i=s)}return o===l?null:Yr(ng(c=>ha(e,c),s,i,l,o))}function zm(e,t){return function(r){let n=r.
split(/[^\w]+/);if(n.length!==7)throw new RangeError(`expected 7 parts in "${r}`);let a=+n[0],i=+n[1],o=+n[2],s=n[3];if(s[0]===
"b"||s[0]==="B")o=1-o;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${r}`);let l=n[4]==="24"?
0:+n[4],c=+n[5],u=+n[6];if(!(Number.isFinite(o)&&Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(l)&&Number.isFinite(
c)&&Number.isFinite(u)))throw new RangeError(`Invalid number in "${r}`);return{year:o,month:a,day:i,hour:l,minute:c,second:u}}(
$m(e).format(t))}function Gs(e){return e!==void 0&&!(e%4!=0||e%100==0&&e%400!=0)}function ma(e,t){return{standard:[31,28,
31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[Gs(e)?"leapyear":"standard"][t-1]}function Js(e){
let t=[g(e,Ht),g(e,Wt),g(e,lr),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr)];for(let r=0;r<t.length;r++){let n=t[r];
if(n!==0)return n<0?-1:1}return 0}function pl(e){let t=["years","months","weeks","days"];for(let r=0;r<t.length;r++){let n=e[t[r]];
if(n!==0)return n<0?-1:1}return 0}function Km(e){let t=pl(e.date);return t!==0?t:e.time.sign()}function fa(e,t){let r=e,
n=t;if(!Number.isFinite(r)||!Number.isFinite(n))throw new RangeError("infinity is out of range");return n-=1,r+=Math.floor(
n/12),n%=12,n<0&&(n+=12),n+=1,{year:r,month:n}}function pr(e,t,r){let n=e,a=t,i=r;if(!Number.isFinite(i))throw new RangeError(
"infinity is out of range");({year:n,month:a}=fa(n,a));let o=146097;if(Math.abs(i)>o){let c=Math.trunc(i/o);n+=400*c,i-=
c*o}let s=0,l=a>2?n:n-1;for(;s=Gs(l)?366:365,i<-s;)n-=1,l-=1,i+=s;for(l+=1;s=Gs(l)?366:365,i>s;)n+=1,l+=1,i-=s;for(;i<1;)
({year:n,month:a}=fa(n,a-1)),i+=ma(n,a);for(;i>ma(n,a);)i-=ma(n,a),{year:n,month:a}=fa(n,a+1);return{year:n,month:a,day:i}}
function fo(e,t,r,n,a,i,o,s,l){let c=Hn(n,a,i,o,s,l);return Re(pr(e,t,r+c.deltaDays),c)}function Hn(e,t,r,n,a,i){let o,s=e,
l=t,c=r,u=n,d=a,f=i;({div:o,mod:f}=Va(f,3)),d+=o,f<0&&(d-=1,f+=1e3),{div:o,mod:d}=Va(d,3),u+=o,d<0&&(u-=1,d+=1e3),c+=Math.
trunc(u/1e3),u%=1e3,u<0&&(c-=1,u+=1e3),l+=Math.trunc(c/60),c%=60,c<0&&(l-=1,c+=60),s+=Math.trunc(l/60),l%=60,l<0&&(s-=1,
l+=60);let h=Math.trunc(s/24);return s%=24,s<0&&(h-=1,s+=24),h+=0,s+=0,l+=0,c+=0,u+=0,d+=0,f+=0,{deltaDays:h,hour:s,minute:l,
second:c,millisecond:u,microsecond:d,nanosecond:f}}function zh(e,t){let r=Nt(e,0);if(pl(r)===0)return e.days;let n=g(t,ne),
a=kr(g(t,P),n,r,"constrain"),i=ba(n.year,n.month-1,n.day),o=ba(a.year,a.month-1,a.day)-i;return e.days+o}function fr(e){
return new(_t("%Temporal.Duration%"))(-g(e,Ht),-g(e,Wt),-g(e,lr),-g(e,qt),-g(e,Vt),-g(e,Yt),-g(e,zt),-g(e,Kt),-g(e,Gt),-g(
e,cr))}function Jt(e,t,r){return Math.min(r,Math.max(t,e))}function Gm(e,t,r){let n=Jt(t,1,12);return{year:e,month:n,day:Jt(
r,1,ma(e,n))}}function wt(e,t,r){if(e<t||e>r)throw new RangeError(`value out of range: ${t} <= ${e} <= ${r}`)}function ya(e,t,r){
wt(t,1,12),wt(r,1,ma(e,t))}function Ea(e){va(Re(e,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}
function fl(e,t,r,n,a,i){wt(e,0,23),wt(t,0,59),wt(r,0,59),wt(n,0,999),wt(a,0,999),wt(i,0,999)}function Ju(e,t,r,n,a,i,o,s,l){
ya(e,t,r),fl(n,a,i,o,s,l)}function va(e){let t=xt(e);($.default.lessThan(t,uS)||$.default.greaterThan(t,dS))&&an(t)}function yu(e){
xt(e)}function an(e){if($.default.lessThan(e,so)||$.default.greaterThan(e,Ja))throw new RangeError("date/time value is o\
utside of supported range")}function Zu({year:e,month:t}){wt(e,Nh,Ph),e===Nh?wt(t,4,12):e===Ph&&wt(t,1,9)}function hl(e,t,r,n,a,i,o,s,l,c){
let u=0,d=[e,t,r,n,a,i,o,s,l,c];for(let S=0;S<d.length;S++){let E=d[S];if(E===1/0||E===-1/0)throw new RangeError("infini\
te values not allowed as duration fields");if(E!==0){let _=E<0?-1:1;if(u!==0&&_!==u)throw new RangeError("mixed-sign val\
ues not allowed as duration fields");u=_}}if(Math.abs(e)>=2**32||Math.abs(t)>=2**32||Math.abs(r)>=2**32)throw new RangeError(
"years, months, and weeks must be < 2\xB3\xB2");let f=Va(s,3),h=Va(l,6),y=Va(c,9),b=Va(1e6*f.mod+1e3*h.mod+y.mod,9).div,
T=86400*n+3600*a+60*i+o+f.div+h.div+y.div+b;if(!Number.isSafeInteger(T))throw new RangeError("total of duration time uni\
ts cannot exceed 9007199254740991.999999999 s")}function qa(e){return{date:{years:g(e,Ht),months:g(e,Wt),weeks:g(e,lr),days:g(
e,qt)},time:Fe.fromComponents(g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr))}}function tn(e){let t=Fe.fromComponents(g(
e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,cr)).add24HourDays(g(e,qt));return{date:{years:g(e,Ht),months:g(e,Wt),weeks:g(
e,lr),days:0},time:t}}function Jm(e){let t=tn(e),r=Math.trunc(t.time.sec/86400);return hl(t.date.years,t.date.months,t.date.
weeks,r,0,0,0,0,0,0),{...t.date,days:r}}function Dr(e,t){let r=e.time.sign(),n=e.time.abs().subsec,a=0,i=0,o=e.time.abs().
sec,s=0,l=0,c=0;switch(t){case"year":case"month":case"week":case"day":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=
1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(s/60),s%=60,c=Math.trunc(l/24),l%=24;break;case"ho\
ur":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(
s/60),s%=60;break;case"minute":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.
trunc(o/60),o%=60;break;case"second":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3;break;case"\
millisecond":a=Math.trunc(n/1e3),n%=1e3,i=Qc(o,3,Math.trunc(a/1e3)),a%=1e3,o=0;break;case"microsecond":a=Qc(o,6,Math.trunc(
n/1e3)),n%=1e3,o=0;break;case"nanosecond":n=Qc(o,9,n),o=0}return new(_t("%Temporal.Duration%"))(e.date.years,e.date.months,
e.date.weeks,e.date.days+r*c,r*l,r*s,r*o,r*i,r*a,r*n)}function En(e,t){return pl(e),t.sign(),{date:e,time:t}}function ba(e,t,r){
return Ku({isoDate:{year:e,month:t+1,day:r},time:{hour:0,minute:0,second:0,millisecond:0}})/zn}function Ka({year:e,month:t,
day:r}){if(Math.abs(ba(e,t-1,r))>1e8)throw new RangeError("date/time value is outside the supported range")}function Xu(e,t){
let r=t.hour-e.hour,n=t.minute-e.minute,a=t.second-e.second,i=t.millisecond-e.millisecond,o=t.microsecond-e.microsecond,
s=t.nanosecond-e.nanosecond;return Fe.fromComponents(r,n,a,i,o,s)}function Qu(e,t,r,n,a){let i=Fe.fromEpochNsDiff(t,e);return i=
Zs(i,r,n,a),En({years:0,months:0,weeks:0,days:0},i)}function Zm(e,t,r,n){yu(e),yu(t);let a=Xu(e.time,t.time),i=a.sign(),
o=on(e.isoDate,t.isoDate),s=t.isoDate;o===i&&(s=pr(s.year,s.month,s.day+i),a=a.add24HourDays(-i));let l=Sn("day",n),c=No(
r,e.isoDate,s,l);return n!==l&&(a=a.add24HourDays(c.days),c.days=0),En(c,a)}function Xm(e,t,r,n,a){let i=$.default.subtract(
t,e);if($.default.equal(i,wr))return{date:{years:0,months:0,weeks:0,days:0},time:Fe.ZERO};let o=$.default.lessThan(i,wr)?
-1:1,s=jr(r,e),l=jr(r,t),c,u=0,d=o===1?2:1,f=Xu(s.time,l.time);for(f.sign()===-o&&u++;u<=d;u++){c=Re(pr(l.isoDate.year,l.
isoDate.month,l.isoDate.day-u*o),s.time);let y=Pt(r,c,"compatible");if(f=Fe.fromEpochNsDiff(t,y),f.sign()!==-o)break}let h=Sn(
"day",a);return En(No(n,s.isoDate,c.isoDate,h),f)}function Qm(e,t,r,n,a,i,o,s,l){let c,u,d,f,h=t;switch(s){case"year":{let te=qn(
h.date.years,o,"trunc");c=te,u=te+o*e,d={years:c,months:0,weeks:0,days:0},f={...d,years:u};break}case"month":{let te=qn(
h.date.months,o,"trunc");c=te,u=te+o*e,d=Nt(h.date,0,0,c),f=Nt(h.date,0,0,u);break}case"week":{let te=Nt(h.date,0,0),_e=kr(
i,n.isoDate,te,"constrain"),pe=No(i,_e,pr(_e.year,_e.month,_e.day+h.date.days),"week"),ie=qn(h.date.weeks+pe.weeks,o,"tr\
unc");c=ie,u=ie+o*e,d=Nt(h.date,0,c),f=Nt(h.date,0,u);break}case"day":{let te=qn(h.date.days,o,"trunc");c=te,u=te+o*e,d=
Nt(h.date,c),f=Nt(h.date,u);break}}let y=kr(i,n.isoDate,d,"constrain"),b=kr(i,n.isoDate,f,"constrain"),T,S,E=Re(y,n.time),
_=Re(b,n.time);a?(T=Pt(a,E,"compatible"),S=Pt(a,_,"compatible")):(T=xt(E),S=xt(_));let O=Fe.fromEpochNsDiff(r,T),M=Fe.fromEpochNsDiff(
S,T),W=il(l,e<0?"negative":"positive"),G=O.add(O).abs().subtract(M.abs()).sign(),Z=Math.abs(c)/o%2==0,B=O.isZero()?Math.
abs(c):O.cmp(M)?ol(Math.abs(c),Math.abs(u),G,Z,W):Math.abs(u),we=new Fe($.default.add($.default.multiply(M.totalNs,$.default.
BigInt(c)),$.default.multiply(O.totalNs,$.default.BigInt(o*e)))).fdiv(M.totalNs),Y=B===Math.abs(u);return h={date:Y?f:d,
time:Fe.ZERO},{nudgeResult:{duration:h,nudgedEpochNs:Y?S:T,didExpandCalendarUnit:Y},total:we}}function ml(e,t,r,n,a,i,o,s,l){
let c=e,u=Qr(s)||n&&s==="day",d=Km(c)<0?-1:1,f;return u?{nudgeResult:f}=Qm(d,c,t,r,n,a,o,s,l):f=n?function(h,y,b,T,S,E,_,O){
let M=y,W=kr(S,b.isoDate,M.date,"constrain"),G=Re(W,b.time),Z=Re(pr(W.year,W.month,W.day+h),b.time),B=Pt(T,G,"compatible"),
we=Pt(T,Z,"compatible"),Y=Fe.fromEpochNsDiff(we,B);if(Y.sign()!==h)throw new RangeError("time zone returned inconsistent\
 Instants");let te=$.default.BigInt(Xa[_]*E),_e=M.time.round(te,O),pe=_e.subtract(Y),ie=pe.sign()!==-h,ot,lt;return ie?(ot=
h,_e=pe.round(te,O),lt=_e.addToEpochNs(we)):(ot=0,lt=_e.addToEpochNs(B)),{duration:En(Nt(M.date,M.date.days+ot),_e),nudgedEpochNs:lt,
didExpandCalendarUnit:ie}}(d,c,r,n,a,o,s,l):function(h,y,b,T,S,E){let _=h,O=_.time.add24HourDays(_.date.days),M=O.round(
$.default.BigInt(T*Xa[S]),E),W=M.subtract(O),{quotient:G}=O.divmod(qs),{quotient:Z}=M.divmod(qs),B=Math.sign(Z-G)===O.sign(),
we=W.addToEpochNs(y),Y=0,te=M;return wn(b)==="date"&&(Y=Z,te=M.add(Fe.fromComponents(24*-Z,0,0,0,0,0))),{duration:{date:Nt(
_.date,Y),time:te},nudgedEpochNs:we,didExpandCalendarUnit:B}}(c,t,i,o,s,l),c=f.duration,f.didExpandCalendarUnit&&s!=="we\
ek"&&(c=function(h,y,b,T,S,E,_,O){let M=y;if(O===_)return M;let W=ro.indexOf(_);for(let G=ro.indexOf(O)-1;G>=W;G--){let Z=ro[G];
if(Z==="week"&&_!=="week")continue;let B;switch(Z){case"year":B={years:M.date.years+h,months:0,weeks:0,days:0};break;case"\
month":{let te=M.date.months+h;B=Nt(M.date,0,0,te);break}case"week":{let te=M.date.weeks+h;B=Nt(M.date,0,te);break}}let we=Re(
kr(E,T.isoDate,B,"constrain"),T.time),Y;if(Y=S?Pt(S,we,"compatible"):xt(we),Hs(b,Y)===-h)break;M={date:B,time:Fe.ZERO}}return M}(
d,c,f.nudgedEpochNs,r,n,a,i,Sn(s,"day"))),c}function Kh(e,t,r,n,a,i){return Qr(i)||n&&i==="day"?Qm(Km(e)<0?-1:1,e,t,r,n,
a,1,i,"trunc").total:io(e.time.add24HourDays(e.date.days),i)}function eg(e,t,r,n,a,i,o){if(ei(e,t)==0)return{date:{years:0,
months:0,weeks:0,days:0},time:Fe.ZERO};va(e),va(t);let s=Zm(e,t,r,n);return i==="nanosecond"&&a===1?s:ml(s,xt(t),e,null,
r,n,a,i,o)}function tg(e,t,r,n,a,i,o,s){if(wn(a)==="time")return Qu(e,t,i,o,s);let l=Xm(e,t,r,n,a);return o==="nanosecon\
d"&&i===1?l:ml(l,t,jr(r,e),r,n,a,i,o,s)}function oi(e,t,r,n,a,i){let o=Za.reduce((h,y)=>{let b=y[0],T=y[1],S=y[2];return r!==
"datetime"&&S!==r||n.includes(T)||h.push(T,b),h},[]),s=dr(t,"largestUnit",r,"auto");if(n.includes(s))throw new RangeError(
`largestUnit must be one of ${o.join(", ")}, not ${s}`);let l=ni(t),c=zr(t,"trunc");e==="since"&&(c=function(h){switch(h){case"\
ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return h}}(
c));let u=dr(t,"smallestUnit",r,a);if(n.includes(u))throw new RangeError(`smallestUnit must be one of ${o.join(", ")}, n\
ot ${u}`);let d=Sn(i,u);if(s==="auto"&&(s=d),Sn(s,u)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than s\
mallestUnit ${u}`);let f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];return f!==void 0&&
ai(l,f,!1),{largestUnit:s,roundingIncrement:l,roundingMode:c,smallestUnit:u}}function Gh(e,t,r,n){let a=Ji(r),i=oi(e,K(n),
"time",[],"nanosecond","second"),o=Dr(Qu(g(t,re),g(a,re),i.roundingIncrement,i.smallestUnit,i.roundingMode),i.largestUnit);
return e==="since"&&(o=fr(o)),o}function Jh(e,t,r,n){let a=Ki(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`can\
not compute difference between dates of ${i} and ${o} calendars`);let s=oi(e,K(n),"date",[],"day","day"),l=_t("%Temporal\
.Duration%"),c=g(t,ne),u=g(a,ne);if(on(c,u)===0)return new l;let d={date:No(i,c,u,s.largestUnit),time:Fe.ZERO};if(s.smallestUnit!==
"day"||s.roundingIncrement!==1){let h=Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});
d=ml(d,xt(Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),h,null,i,s.largestUnit,
s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=Dr(d,"day");return e==="since"&&(f=fr(f)),f}function Zh(e,t,r,n){
let a=Gi(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`cannot compute difference between dates of ${i} and ${o}\
 calendars`);let s=oi(e,K(n),"datetime",[],"nanosecond","day"),l=_t("%Temporal.Duration%"),c=g(t,Ye),u=g(a,Ye);if(ei(c,u)===
0)return new l;let d=Dr(eg(c,u,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return e===
"since"&&(d=fr(d)),d}function Xh(e,t,r,n){let a=Wn(r),i=oi(e,K(n),"time",[],"nanosecond","hour"),o=Xu(g(t,Qe),g(a,Qe));o=
Zs(o,i.roundingIncrement,i.smallestUnit,i.roundingMode);let s=Dr(En({years:0,months:0,weeks:0,days:0},o),i.largestUnit);
return e==="since"&&(s=fr(s)),s}function Qh(e,t,r,n){let a=Zi(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`can\
not compute difference between months of ${i} and ${o} calendars`);let s=oi(e,K(n),"date",["week","day"],"month","year"),
l=_t("%Temporal.Duration%");if(on(g(t,ne),g(a,ne))==0)return new l;let c=Qt(i,g(t,ne),"year-month");c.day=1;let u=Kn(i,c,
"constrain"),d=Qt(i,g(a,ne),"year-month");d.day=1;let f=Kn(i,d,"constrain"),h={date:Nt(No(i,u,f,s.largestUnit),0,0),time:Fe.
ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){let b=Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,
microsecond:0,nanosecond:0});h=ml(h,xt(Re(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),
b,null,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let y=Dr(h,"day");return e==="since"&&(y=fr(y)),
y}function em(e,t,r,n){let a=Xi(r),i=g(t,P),o=g(a,P);if(!nn(i,o))throw new RangeError(`cannot compute difference between\
 dates of ${i} and ${o} calendars`);let s=oi(e,K(n),"datetime",[],"nanosecond","hour"),l=g(t,re),c=g(a,re),u=_t("%Tempor\
al.Duration%"),d;if(wn(s.largestUnit)!=="date")d=Dr(Qu(l,c,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{
let f=g(t,Oe);if(!Hm(f,g(a,Oe)))throw new RangeError("When calculating difference between time zones, largestUnit must b\
e 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if($.default.
equal(l,c))return new u;d=Dr(tg(l,c,f,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return e===
"since"&&(d=fr(d)),d}function Qa({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o){let s=r,l=i;return s+=
o.sec,l+=o.subsec,Hn(e,t,s,n,a,l)}function vu(e,t){let r=t.addToEpochNs(e);return an(r),r}function Qi(e,t,r,n,a="constra\
in"){if(pl(n.date)===0)return vu(e,n.time);let i=jr(t,e);return vu(Pt(t,Re(kr(r,i.isoDate,n.date,a),i.time),"compatible"),
n.time)}function tm(e,t,r){let n=Mr(r);e==="subtract"&&(n=fr(n));let a=Sn(bn(t),bn(n));if(Qr(a))throw new RangeError("Fo\
r years, months, or weeks arithmetic, use date arithmetic relative to a starting point");let i=tn(t),o=tn(n);return Dr(En(
{years:0,months:0,weeks:0,days:0},i.time.add(o.time)),a)}function rm(e,t,r){let n=Mr(r);e==="subtract"&&(n=fr(n));let a=bn(
n);if(wn(a)==="date")throw new RangeError(`Duration field ${a} not supported by Temporal.Instant. Try Temporal.ZonedDate\
Time instead.`);let i=tn(n);return Vr(vu(g(t,re),i.time))}function nm(e,t,r,n){let a=g(t,P),i=Mr(r);e==="subtract"&&(i=fr(
i));let o=Jm(i),s=Ae(K(n));return Zt(kr(a,g(t,ne),o,s),a)}function am(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=fr(a));let i=Ae(
K(n)),o=g(t,P),s=tn(a),l=g(t,Ye),c=Qa(l.time,s.time),u=Nt(s.date,c.deltaDays);return hl(u.years,u.months,u.weeks,u.days,
0,0,0,0,0,0),Pr(Re(kr(o,l.isoDate,u,i),c),o)}function im(e,t,r){let n=Mr(r);e==="subtract"&&(n=fr(n));let a=tn(n),{hour:i,
minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Qa(g(t,Qe),a.time);return Tn(ul(i,o,s,l,c,u,"reject"))}function om(e,t,r,n){
let a=Mr(r);e==="subtract"&&(a=fr(a));let i=Ae(K(n)),o=Js(a),s=g(t,P),l=Qt(s,g(t,ne),"year-month");l.day=1;let c=Kn(s,l,
"constrain");if(o<0){let d=kr(s,c,{months:1},"constrain");c=pr(d.year,d.month,d.day-1)}let u=Jm(a);return Ea(c),za(co(s,
Qt(s,kr(s,c,u,i),"year-month"),i),s)}function sm(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=fr(a));let i=Ae(K(n)),o=g(t,Oe),
s=g(t,P),l=qa(a);return Ct(Qi(g(t,re),o,s,l,i),o,s)}function qn(e,t,r){let n=Math.trunc(e/t),a=e%t,i=e<0?"negative":"pos\
itive",o=Math.abs(n),s=o+1,l=ur(Math.abs(2*a)-t),c=o%2==0,u=il(r,i),d=a===0?o:ol(o,s,l,c,u);return t*(i==="positive"?d:-d)}
function bu(e,t,r,n){let a=Xa[r]*t;return function(i,o,s){let l=vn(i),c=vn(o),u=$.default.divide(l,c),d=$.default.remainder(
l,c),f=il(s,"positive"),h,y;$.default.lessThan(l,wr)?(h=$.default.subtract(u,oo),y=u):(h=u,y=$.default.add(u,oo));let b=Hs(
pa($.default.multiply(d,qu)),c)*($.default.lessThan(l,wr)?-1:1)+0,T=$.default.equal(d,wr)?u:ol(h,y,b,dm(h),f);return $.default.
multiply(T,c)}(e,$.default.BigInt(a),n)}function wu(e,t,r,n){yu(e);let{year:a,month:i,day:o}=e.isoDate,s=Tu(e.time,t,r,n);
return Re(pr(a,i,o+s.deltaDays),s)}function Tu({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o,s,l){
let c;switch(s){case"day":case"hour":c=1e3*(1e3*(1e3*(60*(60*e+t)+r)+n)+a)+i;break;case"minute":c=1e3*(1e3*(1e3*(60*t+r)+
n)+a)+i;break;case"second":c=1e3*(1e3*(1e3*r+n)+a)+i;break;case"millisecond":c=1e3*(1e3*n+a)+i;break;case"microsecond":c=
1e3*a+i;break;case"nanosecond":c=i}let u=Xa[s],d=qn(c,u*o,l)/u;switch(s){case"day":return{deltaDays:d,hour:0,minute:0,second:0,
millisecond:0,microsecond:0,nanosecond:0};case"hour":return Hn(d,0,0,0,0,0);case"minute":return Hn(e,d,0,0,0,0);case"sec\
ond":return Hn(e,t,d,0,0,0);case"millisecond":return Hn(e,t,r,d,0,0);case"microsecond":return Hn(e,t,r,n,d,0);case"nanos\
econd":return Hn(e,t,r,n,a,d);default:throw new Error(`Invalid unit ${s}`)}}function Zs(e,t,r,n){let a=Xa[r];return e.round(
$.default.BigInt(a*t),n)}function io(e,t){let r=Xa[t];return e.fdiv($.default.BigInt(r))}function on(e,t){return e.year!==
t.year?ur(e.year-t.year):e.month!==t.month?ur(e.month-t.month):e.day!==t.day?ur(e.day-t.day):0}function ku(e,t){return e.
hour!==t.hour?ur(e.hour-t.hour):e.minute!==t.minute?ur(e.minute-t.minute):e.second!==t.second?ur(e.second-t.second):e.millisecond!==
t.millisecond?ur(e.millisecond-t.millisecond):e.microsecond!==t.microsecond?ur(e.microsecond-t.microsecond):e.nanosecond!==
t.nanosecond?ur(e.nanosecond-t.nanosecond):0}function ei(e,t){let r=on(e.isoDate,t.isoDate);return r!==0?r:ku(e.time,t.time)}
function rg(e){let t=Xs(e);return globalThis.BigInt!==void 0?globalThis.BigInt(t.toString(10)):t}function Lr(e,t){let r=vn(
e),{quotient:n,remainder:a}=Yi(r,xo),i=$.default.toNumber(n);return t==="floor"&&$.default.toNumber(a)<0&&(i-=1),t==="ce\
il"&&$.default.toNumber(a)>0&&(i+=1),i}function Yr(e){if(!Number.isInteger(e))throw new RangeError("epoch milliseconds m\
ust be an integer");return $.default.multiply($.default.BigInt(e),xo)}function Xs(e){let t=e;if(typeof e=="object"){let r=e[Symbol.
toPrimitive];r&&typeof r=="function"&&(t=r.call(e,"number"))}if(typeof t=="number")throw new TypeError("cannot convert n\
umber to bigint");return typeof t=="bigint"?$.default.BigInt(t.toString(10)):$.default.BigInt(t)}var Su=(()=>{let e=$.default.
BigInt(Date.now()%1e6);return()=>{let t=Date.now(),r=$.default.BigInt(t),n=$.default.add(Yr(t),e);return e=$.default.remainder(
r,xo),$.default.greaterThan(n,Ja)?Ja:$.default.lessThan(n,so)?so:n}})();function qi(){return new Intl.DateTimeFormat().resolvedOptions().
timeZone}function ur(e){return e<0?-1:e>0?1:e}function K(e){if(e===void 0)return Object.create(null);if(et(e)&&e!==null)
return e;throw new TypeError("Options parameter must be an object, not "+(e===null?"null":typeof e))}function wa(e,t){let r=Object.
create(null);return r[e]=t,r}function xn(e,t,r,n){let a=e[t];if(a!==void 0){if(a=ll(a),!r.includes(a))throw new RangeError(
`${t} must be one of ${r.join(", ")}, not ${a}`);return a}if(n===An)throw new RangeError(`${t} option is required`);return n}
function tr(e){let t=ho(e);if(!fS.includes(ho(t)))throw new RangeError(`invalid calendar identifier ${t}`);switch(t){case"\
ethiopic-amete-alem":return"ethioaa";case"islamicc":return"islamic-civil"}return t}function ho(e){let t="";for(let r=0;r<
e.length;r++){let n=e.charCodeAt(r);t+=n>=65&&n<=90?String.fromCharCode(n+32):String.fromCharCode(n)}return t}function Zn(e){
throw new TypeError(`Do not use built-in arithmetic operators with Temporal objects. When comparing, use ${e==="PlainMon\
thDay"?"Temporal.PlainDate.compare(obj1.toPlainDate(year), obj2.toPlainDate(year))":`Temporal.${e}.compare(obj1, obj2)`}\
, not obj1 > obj2. When coercing to strings, use \`\${obj}\` or String(obj), not '' + obj. When coercing to numbers, use pr\
operties or methods of the object, not \`+obj\`. When concatenating with strings, use \`\${str}\${obj}\` or str.concat(obj), n\
ot str + obj. In React, coerce to a string before rendering a Temporal object.`)}var wS=new RegExp(`^${xm.source}$`),TS=new RegExp(
`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/.source}$`);function ng(e,t,r,n=e(
t),a=e(r)){let i=t,o=r,s=n,l=a;for(;o-i>1;){let c=Math.trunc((i+o)/2),u=e(c);u===s?(i=c,s=u):u===l&&(o=c,l=u)}return o}function ag(e){
return[...e]}function ig(e,t){if(e!=="gregory"&&e!=="iso8601")return;let r=jo[e],n=t.year,{dayOfWeek:a,dayOfYear:i,daysInYear:o}=r.
isoToDate(t,{dayOfWeek:!0,dayOfYear:!0,daysInYear:!0}),s=r.getFirstDayOfWeek(),l=r.getMinimalDaysInFirstWeek(),c=(a+7-s)%
7,u=(a-i+7001-s)%7,d=Math.floor((i-1+u)/7);if(7-u>=l&&++d,d==0)d=function(f,h,y,b){let T=(b-f-y+1)%7;T<0&&(T+=7);let S=Math.
floor((y+T-1)/7);return 7-T>=h&&++S,S}(s,l,i+r.isoToDate(r.dateAdd(t,{years:-1},"constrain"),{daysInYear:!0}).daysInYear,
a),n--;else if(i>=o-5){let f=(c+o-i)%7;f<0&&(f+=7),6-f>=l&&i+7-c>o&&(d=1,n++)}return{week:d,year:n}}function lm(e,t,r,n,a){
if(t!==a.year){if(e*(t-a.year)>0)return!0}else if(r!==a.month){if(e*(r-a.month)>0)return!0}else if(n!==a.day&&e*(n-a.day)>
0)return!0;return!1}var jo={};function Ta(e){if(!e.startsWith("M"))throw new RangeError(`Invalid month code: ${e}.  Mont\
h codes must start with M.`);let t=+e.slice(1);if(Number.isNaN(t))throw new RangeError(`Invalid month code: ${e}`);return t}
function rn(e,t=!1){return`M${`${e}`.padStart(2,"0")}${t?"L":""}`}function ed(e,t=void 0,r=12){let{month:n,monthCode:a}=e;
if(a===void 0){if(n===void 0)throw new TypeError("Either month or monthCode are required");t==="reject"&&wt(n,1,r),t==="\
constrain"&&(n=Jt(n,1,r)),a=rn(n)}else{let i=Ta(a);if(a!==rn(i))throw new RangeError(`Invalid month code: ${a}`);if(n!==
void 0&&n!==i)throw new RangeError(`monthCode ${a} and month ${n} must match if both are present`);if(n=i,n<1||n>r)throw new RangeError(
`Invalid monthCode: ${a}`)}return{...e,month:n,monthCode:a}}jo.iso8601={resolveFields(e,t){if((t==="date"||t==="year-mon\
th")&&e.year===void 0)throw new TypeError("year is required");if((t==="date"||t==="month-day")&&e.day===void 0)throw new TypeError(
"day is required");Object.assign(e,ed(e))},dateToISO:(e,t)=>no(e.year,e.month,e.day,t),monthDayToISOReferenceDate(e,t){let{
month:r,day:n}=no(e.year??1972,e.month,e.day,t);return{month:r,day:n,year:1972}},extraFields:()=>[],fieldKeysToIgnore(e){
let t=new Set;for(let r=0;r<e.length;r++){let n=e[r];t.add(n),n==="month"?t.add("monthCode"):n==="monthCode"&&t.add("mon\
th")}return ag(t)},dateAdd(e,{years:t=0,months:r=0,weeks:n=0,days:a=0},i){let{year:o,month:s,day:l}=e;return o+=t,s+=r,{
year:o,month:s}=fa(o,s),{year:o,month:s,day:l}=no(o,s,l,i),l+=a+7*n,pr(o,s,l)},dateUntil(e,t,r){let n=-on(e,t);if(n===0)
return{years:0,months:0,weeks:0,days:0};let a,i=0,o=0;if(r==="year"||r==="month"){let u=t.year-e.year;for(u!==0&&(u-=n);!lm(
n,e.year+u,e.month,e.day,t);)i=u,u+=n;let d=n;for(a=fa(e.year+i,e.month+d);!lm(n,a.year,a.month,e.day,t);)o=d,d+=n,a=fa(
a.year,a.month+n);r==="month"&&(o+=12*i,i=0)}a=fa(e.year+i,e.month+o);let s=Gm(a.year,a.month,e.day),l=0,c=ba(t.year,t.month-
1,t.day)-ba(s.year,s.month-1,s.day);return r==="week"&&(l=Math.trunc(c/7),c%=7),{years:i,months:o,weeks:l,days:c}},isoToDate({
year:e,month:t,day:r},n){let a={era:void 0,eraYear:void 0,year:e,month:t,day:r,daysInWeek:7,monthsInYear:12};if(n.monthCode&&
(a.monthCode=rn(t)),n.dayOfWeek){let i=t+(t<3?10:-2),o=e-(t<3?1:0),s=Math.floor(o/100),l=o-100*s,c=(r+Math.floor(2.6*i-.2)+
(l+Math.floor(l/4))+(Math.floor(s/4)-2*s))%7;a.dayOfWeek=c+(c<=0?7:0)}if(n.dayOfYear){let i=r;for(let o=t-1;o>0;o--)i+=ma(
e,o);a.dayOfYear=i}return n.weekOfYear&&(a.weekOfYear=ig("iso8601",{year:e,month:t,day:r})),n.daysInMonth&&(a.daysInMonth=
ma(e,t)),(n.daysInYear||n.inLeapYear)&&(a.inLeapYear=Gs(e),a.daysInYear=a.inLeapYear?366:365),a},getFirstDayOfWeek:()=>1,
getMinimalDaysInFirstWeek:()=>4};var vr=class e{constructor(t){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=
0,t!==void 0){let r=0;for(let n of t.map.entries()){if(++r>e.MAX_CACHE_ENTRIES)break;this.map.set(...n)}}}get(t){let r=this.
map.get(t);return r&&(this.hits++,this.report()),this.calls++,r}set(t,r){this.map.set(t,r),this.misses++,this.report()}report(){}setObject(t){
if(e.objectMap.get(t))throw new RangeError("object already cached");e.objectMap.set(t,this),this.report()}static getCacheForObject(t){
let r=e.objectMap.get(t);return r||(r=new e,e.objectMap.set(t,r)),r}};function og({isoYear:e,isoMonth:t,isoDay:r}){return`${Mo(
e)}-${Sr(t)}-${Sr(r)}T00:00Z`}function ru(e,t){return{years:e.year-t.year,months:e.month-t.month,days:e.day-t.day}}vr.objectMap=
new WeakMap,vr.MAX_CACHE_ENTRIES=1e3;var $n=class{constructor(){this.eras=[],this.hasEra=!1,this.erasBeginMidYear=!1}getFormatter(){
return this.formatter===void 0&&(this.formatter=new Intl.DateTimeFormat(`en-US-u-ca-${this.id}`,{day:"numeric",month:"nu\
meric",year:"numeric",era:"short",timeZone:"UTC"})),this.formatter}getCalendarParts(t){let r=this.getFormatter(),n=new Date(
t);if(t==="-271821-04-19T00:00Z"){let a=r.resolvedOptions();r=new Intl.DateTimeFormat(a.locale,{...a,timeZone:"Etc/GMT+1"}),
n=new Date("-271821-04-20T00:00Z")}try{return r.formatToParts(n)}catch{throw new RangeError(`Invalid ISO date: ${t}`)}}isoToCalendarDate(t,r){
let{year:n,month:a,day:i}=t,o=JSON.stringify({func:"isoToCalendarDate",isoYear:n,isoMonth:a,isoDay:i,id:this.id}),s=r.get(
o);if(s)return s;let l=og({isoYear:n,isoMonth:a,isoDay:i}),c=this.getCalendarParts(l),u={};for(let f=0;f<c.length;f++){let{
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
let a=this.monthsInYear(t,n),{month:i,day:o}=t;return r==="reject"?(wt(i,1,a),wt(o,1,this.maximumMonthLength(t))):(i=Jt(
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
let a=this.calendarToIsoDate(t,"constrain",n),i=this.calendarToIsoDate(r,"constrain",n);return ba(i.year,i.month-1,i.day)-
ba(a.year,a.month-1,a.day)}monthDaySearchStartYear(t,r){return 1972}monthDayFromFields(t,r,n){let a,i,o,s,l,{era:c,eraYear:u,
year:d,month:f,monthCode:h,day:y}=t;if(f!==void 0&&d===void 0&&(!this.hasEra||c===void 0||u===void 0))throw new TypeError(
"when month is present, year (or era and eraYear) are required");(h===void 0||d!==void 0||this.hasEra&&u!==void 0)&&({monthCode:h,
day:y}=this.isoToCalendarDate(this.calendarToIsoDate(t,r,n),n));let b={year:this.monthDaySearchStartYear(h,y),month:12,day:31},
T=this.isoToCalendarDate(b,n),S=T.monthCode>h||T.monthCode===h&&T.day>=y?T.year:T.year-1;for(let E=0;E<20;E++){let _=this.
adjustCalendarDate({day:y,monthCode:h,year:S-E},n),O=this.calendarToIsoDate(_,"constrain",n),M=this.isoToCalendarDate(O,
n);if({year:a,month:i,day:o}=O,M.monthCode===h&&M.day===y)return{month:i,day:o,year:a};if(r==="constrain"){let W=this.maxLengthOfMonthCodeInAnyYear(
M.monthCode);if(M.monthCode===h&&M.day===W&&y>W)return{month:i,day:o,year:a};(s===void 0||M.monthCode===s.monthCode&&M.day>
s.day)&&(s=M,l=O)}}if(r==="constrain"&&l!==void 0)return l;throw new RangeError(`No recent ${this.id} year with monthCod\
e ${h} and day ${y}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}},Eu=class extends $n{constructor(){super(...arguments),
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
ect"?(wt(o,1,this.monthsInYear({year:i})),wt(l,1,this.maximumMonthLength({year:i,month:o}))):(o=Jt(o,1,this.monthsInYear(
{year:i})),l=Jt(l,1,this.maximumMonthLength({year:i,month:o}))),s===void 0)s=this.getMonthCode(i,o);else if(this.getMonthCode(
i,o)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${o} in Hebrew year ${i}`);return{...t,day:l,month:o,
monthCode:s,year:i}}},Gn=class extends $n{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=
354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(t,r){let n={year:t.year,month:1,monthCode:"M01",day:1},a={year:t.year+
1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(n,a,r)===355}monthsInYear(){return 12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(
t);return{year:Math.floor(r*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}},xu=class extends Gn{constructor(){
super(...arguments),this.id="islamic"}},_u=class extends Gn{constructor(){super(...arguments),this.id="islamic-umalqura"}},
Au=class extends Gn{constructor(){super(...arguments),this.id="islamic-tbla"}},$u=class extends Gn{constructor(){super(...arguments),
this.id="islamic-civil"}},Ru=class extends Gn{constructor(){super(...arguments),this.id="islamic-rgsa"}},Iu=class extends Gn{constructor(){
super(...arguments),this.id="islamicc"}},Ou=class extends $n{constructor(){super(...arguments),this.id="persian",this.calendarType=
"solar"}inLeapYear(t,r){return this.daysInMonth({year:t.year,month:12,day:1},r)===30}monthsInYear(){return 12}minimumMonthLength(t){
let{month:r}=t;return r===12?29:r<=6?31:30}maximumMonthLength(t){let{month:r}=t;return r===12?30:r<=6?31:30}maxLengthOfMonthCodeInAnyYear(t){
return Ta(t)<=6?31:30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(t);return{year:r+621,month:1,day:1}}},Cu=class extends $n{constructor(){
super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,
month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,
day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},
10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.
vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 S\
aka"}inLeapYear(t){return td(t.year+78)}monthsInYear(){return 12}minimumMonthLength(t){return this.getMonthInfo(t).length}maximumMonthLength(t){
return this.getMonthInfo(t).length}maxLengthOfMonthCodeInAnyYear(t){let r=Ta(t),n=this.months[r];return n=n.leap??n,n.length}getMonthInfo(t){
let{month:r}=t,n=this.months[r];if(n===void 0)throw new RangeError(`Invalid month: ${r}`);return this.inLeapYear(t)&&n.leap&&
(n=n.leap),n}estimateIsoDate(t){let r=this.adjustCalendarDate(t),n=this.getMonthInfo(r);return pr(r.year+78+(n.nextYear?
1:0),n.month,n.day+r.day-1)}checkIcuBugs(t){if(this.vulnerableToBceBug&&t.year<1)throw new RangeError(`calendar '${this.
id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}};function td(e){
return e%4==0&&(e%100!=0||e%400==0)}var Qs=class extends $n{constructor(t,r){super(),this.calendarType="solar",this.id=t,
this.isoEpoch=r}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return td(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Ta(t)-1]}estimateIsoDate(t){
let r=this.adjustCalendarDate(t);return no(r.year+this.isoEpoch.year,r.month+this.isoEpoch.month,r.day+this.isoEpoch.day,
"constrain")}},el=class extends $n{constructor(t,r){super(),this.hasEra=!0,this.calendarType="solar",this.id=t;let{eras:n,
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
{anchorEra:o}=this;return no(n+o.isoEpoch.year-(o.hasYearZero?0:1),a,i,"constrain")}},mo=class extends el{constructor(t,r){
super(t,r)}isoToCalendarDate(t){let{year:r,month:n,day:a}=t,i=rn(n),o=r-this.anchorEra.isoEpoch.year+1;return this.completeEraYear(
{year:o,month:n,monthCode:i,day:a})}},en={inLeapYear(e){let{year:t}=e;return(t+1)%4==0},monthsInYear:()=>13,minimumMonthLength(e){
let{month:t}=e;return t===13?this.inLeapYear(e)?6:5:30},maximumMonthLength(e){return this.minimumMonthLength(e)},maxLengthOfMonthCodeInAnyYear:e=>e===
"M13"?6:30},Nu=class extends Qs{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=en.monthsInYear,
this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},tl=class extends el{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=
en.monthsInYear,this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},Pu=class extends Nu{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}},Du=class extends tl{constructor(){
super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}},Mu=class extends tl{constructor(){
super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"eth\
iopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}},ju=class extends mo{constructor(){super(
"roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"\
roc"}])}},Lu=class extends Qs{constructor(){super("buddhist",{year:-543,month:1,day:1})}},Uu=class extends mo{constructor(){
super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be",
"bce"],reverseOf:"gregory"}])}reviseIntlEra(t){let{era:r,eraYear:n}=t;return r==="b"&&(r="gregory-inverse"),r==="a"&&(r=
"gregory"),{era:r,eraYear:n}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}},Fu=class extends mo{constructor(){
super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",
isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},
anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,
day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:[
"japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gre\
gory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(t,r){let{era:n,eraYear:a}=t,{year:i}=r;
return this.eras.find(o=>o.code===n)?{era:n,eraYear:a}:i<1?{era:"japanese-inverse",eraYear:1-i}:{era:"japanese",eraYear:i}}},
rl=class extends $n{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(t,r){let n=this.getMonthList(
t.year,r);return Object.entries(n).length===13}monthsInYear(t,r){return this.inLeapYear(t,r)?13:12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(t){return["M01L","M09L","M10L","M11L","M12L"].includes(
t)?29:30}monthDaySearchStartYear(t,r){let n={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,
1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[t]??
[1972,1972];return r<30?n[0]:n[1]}getMonthList(t,r){if(t===void 0)throw new TypeError("Missing year");let n=JSON.stringify(
{func:"getMonthList",calendarYear:t,id:this.id}),a=r.get(n);if(a)return a;let i=this.getFormatter(),o=(T,S)=>{let E=og({
isoYear:T,isoMonth:2,isoDay:1}),_=new Date(E);_.setUTCDate(S+1);let O=i.formatToParts(_),M=O.find(B=>B.type==="month").value,
W=+O.find(B=>B.type==="day").value,G=O.find(B=>B.type==="relatedYear"),Z;if(G===void 0)throw new RangeError(`Intl.DateTi\
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
n==="reject"?(wt(o,1,f),wt(l,1,this.maximumMonthLength())):(o=Jt(o,1,f),l=Jt(l,1,this.maximumMonthLength()));let h=d.find(
y=>y[1].monthIndex===o);if(h===void 0)throw new RangeError(`Invalid month ${o} in Chinese year ${i}`);c=rn(+h[0].replace(
"bis",""),h[0].indexOf("bis")!==-1)}else{let u=this.getMonthList(i,r),d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="\
0"&&(d=d.slice(1));let f=u[d];if(!f)throw new RangeError(`Unmatched monthCode ${c} in Chinese year ${i}`);if(o!==f.monthIndex)
throw new RangeError(`monthCode ${c} doesn't correspond to month ${o} in Chinese year ${i}`)}return{...t,year:i,month:o,
monthCode:c,day:l}}},Bu=class extends rl{constructor(){super(...arguments),this.id="chinese"}},Hu=class extends rl{constructor(){
super(...arguments),this.id="dangi"}},Wu=class{constructor(t){this.helper=t}extraFields(t){return this.helper.hasEra&&t.
includes("year")?["era","eraYear"]:[]}resolveFields(t){if(this.helper.calendarType!=="lunisolar"){let r=new vr;ed(t,void 0,
this.helper.monthsInYear({year:t.year??1972},r))}}dateToISO(t,r){let n=new vr,a=this.helper.calendarToIsoDate(t,r,n);return n.
setObject(a),a}monthDayToISOReferenceDate(t,r){let n=new vr,a=this.helper.monthDayFromFields(t,r,n);return n.setObject(a),
a}fieldKeysToIgnore(t){let r=new Set;for(let n=0;n<t.length;n++){let a=t[n];switch(r.add(a),a){case"era":r.add("eraYear"),
r.add("year");break;case"eraYear":r.add("era"),r.add("year");break;case"year":r.add("era"),r.add("eraYear");break;case"m\
onth":r.add("monthCode"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"monthCode":r.add("mont\
h"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"day":this.helper.erasBeginMidYear&&(r.add("\
era"),r.add("eraYear"))}}return ag(r)}dateAdd(t,{years:r,months:n,weeks:a,days:i},o){let s=vr.getCacheForObject(t),l=this.
helper.isoToCalendarDate(t,s),c=this.helper.addCalendar(l,{years:r,months:n,weeks:a,days:i},o,s),u=this.helper.calendarToIsoDate(
c,"constrain",s);return vr.getCacheForObject(u)||new vr(s).setObject(u),u}dateUntil(t,r,n){let a=vr.getCacheForObject(t),
i=vr.getCacheForObject(r),o=this.helper.isoToCalendarDate(t,a),s=this.helper.isoToCalendarDate(r,i);return this.helper.untilCalendar(
o,s,n,a)}isoToDate(t,r){let n=vr.getCacheForObject(t),a=this.helper.isoToCalendarDate(t,n);if(r.dayOfWeek&&(a.dayOfWeek=
jo.iso8601.isoToDate(t,{dayOfWeek:!0}).dayOfWeek),r.dayOfYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.calendarDaysUntil(
i,a,n);a.dayOfYear=o+1}if(r.weekOfYear&&(a.weekOfYear=ig(this.helper.id,t)),a.daysInWeek=7,r.daysInMonth&&(a.daysInMonth=
this.helper.daysInMonth(a,n)),r.daysInYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.addCalendar(i,{years:1},
"constrain",n);a.daysInYear=this.helper.calendarDaysUntil(i,o,n)}return r.monthsInYear&&(a.monthsInYear=this.helper.monthsInYear(
a,n)),r.inLeapYear&&(a.inLeapYear=this.helper.inLeapYear(a,n)),a}getFirstDayOfWeek(){return this.helper.getFirstDayOfWeek()}getMinimalDaysInFirstWeek(){
return this.helper.getMinimalDaysInFirstWeek()}};for(let e of[Eu,Ou,Mu,Pu,Du,Bu,Hu,ju,Cu,Lu,Uu,Fu,xu,_u,Au,$u,Ru,Iu]){let t=new e;
jo[t.id]=new Wu(t)}cu("calendarImpl",function(e){return jo[e]});var go=Intl.DateTimeFormat;function Fa(e,t){let r=g(e,t);
return typeof r=="function"&&(r=new go(g(e,Tm),r(g(e,iu))),function(n,a,i){let o=al(n);if(o===void 0)throw new TypeError(
"Missing slots for the given container");if(o[a]===void 0)throw new TypeError(`tried to reset ${a} which was not set`);o[a]=
i}(e,t,r)),r}function Vi(e){return er(e,Sa)}var ka=class{constructor(t=void 0,r=void 0){(function(n,a,i){let o=i!==void 0,
s;if(o){let d=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","mont\
h","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeS\
tyle"];s=function(h){if(h==null)throw new TypeError(`Expected object not ${h}`);return Object(h)}(i);let f=Object.create(
null);for(let h=0;h<d.length;h++){let y=d[h];Object.prototype.hasOwnProperty.call(s,y)&&(f[y]=s[y])}s=f}else s=Object.create(
null);let l=new go(a,s),c=l.resolvedOptions();if(Rn(n),o){let d=Object.assign(Object.create(null),c);for(let f in d)Object.
prototype.hasOwnProperty.call(s,f)||delete d[f];d.hour12=s.hour12,d.hourCycle=s.hourCycle,he(n,iu,d)}else he(n,iu,s);he(
n,Tm,c.locale),he(n,Sa,l),he(n,Wa,c.timeZone),he(n,zi,c.calendar),he(n,mm,IS),he(n,gm,$S),he(n,ym,RS),he(n,vm,AS),he(n,bm,
OS),he(n,wm,CS);let u=o?s.timeZone:void 0;if(u===void 0)he(n,au,c.timeZone);else{let d=ll(u);if(d.startsWith("\u2212"))throw new RangeError(
"Unicode minus (U+2212) is not supported in time zone offsets");he(n,au,Xt(d))}})(this,t,r)}get format(){I(this,Vi);let t=SS.
bind(this);return Object.defineProperties(t,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,
writable:!1,configurable:!0}}),t}formatRange(t,r){return I(this,Vi),xS.call(this,t,r)}formatToParts(t,...r){return I(this,
Vi),ES.call(this,t,...r)}formatRangeToParts(t,r){return I(this,Vi),_S.call(this,t,r)}resolvedOptions(){return I(this,Vi),
kS.call(this)}};"formatToParts"in go.prototype||delete ka.prototype.formatToParts,"formatRangeToParts"in go.prototype||delete ka.
prototype.formatRangeToParts;var Tr=function(e=void 0,t=void 0){return new ka(e,t)};function kS(){let e=g(this,Sa).resolvedOptions();
return e.timeZone=g(this,au),e}function SS(e,...t){let r,n,a=ti(e,this);return a.formatter?(r=a.formatter,n=[Lr(a.epochNs,
"floor")]):(r=g(this,Sa),n=[e,...t]),r.format(...n)}function ES(e,...t){let r,n,a=ti(e,this);return a.formatter?(r=a.formatter,
n=[Lr(a.epochNs,"floor")]):(r=g(this,Sa),n=[e,...t]),r.formatToParts(...n)}function xS(e,t){if(e===void 0||t===void 0)throw new TypeError(
"Intl.DateTimeFormat.formatRange requires two values");let r=nl(e),n=nl(t),a,i=[r,n];if(_n(r)!==_n(n))throw new TypeError(
"Intl.DateTimeFormat.formatRange accepts two values of the same type");if(_n(r)){if(!sg(r,n))throw new TypeError("Intl.D\
ateTimeFormat.formatRange accepts two values of the same type");let{epochNs:o,formatter:s}=ti(r,this),{epochNs:l,formatter:c}=ti(
n,this);s&&(a=s,i=[Lr(o,"floor"),Lr(l,"floor")])}return a||(a=g(this,Sa)),a.formatRange(...i)}function _S(e,t){if(e===void 0||
t===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");let r=nl(e),n=nl(t),a,i=[r,n];if(_n(
r)!==_n(n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if(_n(r)){if(!sg(
r,n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");let{epochNs:o,formatter:s}=ti(
r,this),{epochNs:l,formatter:c}=ti(n,this);s&&(a=s,i=[Lr(o,"floor"),Lr(l,"floor")])}return a||(a=g(this,Sa)),a.formatRangeToParts(
...i)}function Lo(e={},t={}){let r=Object.assign({},e),n=["year","month","day","hour","minute","second","weekday","dayPe\
riod","timeZoneName","dateStyle","timeStyle"];for(let a=0;a<n.length;a++){let i=n[a];r[i]=i in t?t[i]:r[i],r[i]!==!1&&r[i]!==
void 0||delete r[i]}return r}function AS(e){let t=Lo(e,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});
if(t.timeStyle!=="long"&&t.timeStyle!=="full"||(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"\
2-digit"})),!yl(t)){if(Uo(e))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(e)}]`);Object.
assign(t,{hour:"numeric",minute:"numeric",second:"numeric"})}return t}function $S(e){let t={short:{year:"2-digit",month:"\
numeric"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},full:{year:"numeric",month:"long"}},r=Lo(
e,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in r&&r.dateStyle){
let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("year"in r||"month"in r||"era"in r)){if(Uo(e))throw new TypeError(
`cannot format PlainYearMonth with options [${Object.keys(e)}]`);Object.assign(r,{year:"numeric",month:"numeric"})}return r}
function RS(e){let t={short:{month:"numeric",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"\
numeric"},full:{month:"long",day:"numeric"}},r=Lo(e,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if("dateStyle"in r&&r.dateStyle){let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("month"in
r)&&!("day"in r)){if(Uo(e))throw new TypeError(`cannot format PlainMonthDay with options [${Object.keys(e)}]`);Object.assign(
r,{month:"numeric",day:"numeric"})}return r}function IS(e){let t=Lo(e,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if(!gl(t)){if(Uo(e))throw new TypeError(`cannot format PlainDate with options [${Object.keys(e)}]`);Object.
assign(t,{year:"numeric",month:"numeric",day:"numeric"})}return t}function OS(e){let t=Lo(e,{timeZoneName:!1});if((t.timeStyle===
"long"||t.timeStyle==="full")&&(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"2-digit"}),t.
dateStyle)&&(Object.assign(t,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",
day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"\
long"}}[t.dateStyle]),delete t.dateStyle),!yl(t)&&!gl(t)){if(Uo(e))throw new TypeError(`cannot format PlainDateTime with\
 options [${Object.keys(e)}]`);Object.assign(t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"nume\
ric",second:"numeric"})}return t}function CS(e){let t=e;return yl(t)||gl(t)||(t=Object.assign({},t,{year:"numeric",month:"\
numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function gl(e){return"year"in e||"month"in e||
"day"in e||"weekday"in e||"dateStyle"in e||"era"in e}function yl(e){return"hour"in e||"minute"in e||"second"in e||"timeS\
tyle"in e||"dayPeriod"in e||"fractionalSecondDigits"in e}function Uo(e){return gl(e)||yl(e)||"dateStyle"in e||"timeStyle"in
e||"timeZoneName"in e}function _n(e){return Xe(e)||at(e)||qe(e)||ve(e)||Et(e)||br(e)||St(e)}function nl(e){return _n(e)?
e:sl(e)}function sg(e,t){return!(!_n(e)||!_n(t)||at(e)&&!at(t)||Xe(e)&&!Xe(t)||qe(e)&&!qe(t)||ve(e)&&!ve(t)||Et(e)&&!Et(
t)||br(e)&&!br(t)||St(e)&&!St(t))}function ti(e,t){if(at(e)){let r={isoDate:{year:1970,month:1,day:1},time:g(e,Qe)};return{
epochNs:Pt(g(t,Wa),r,"compatible"),formatter:Fa(t,vm)}}if(Et(e)){let r=g(e,P),n=g(t,zi);if(r!==n)throw new RangeError(`c\
annot format PlainYearMonth with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Pt(g(t,Wa),a,"compatible"),formatter:Fa(t,gm)}}if(br(
e)){let r=g(e,P),n=g(t,zi);if(r!==n)throw new RangeError(`cannot format PlainMonthDay with calendar ${r} in locale with \
calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{
epochNs:Pt(g(t,Wa),a,"compatible"),formatter:Fa(t,ym)}}if(Xe(e)){let r=g(e,P),n=g(t,zi);if(r!=="iso8601"&&r!==n)throw new RangeError(
`cannot format PlainDate with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Pt(g(t,Wa),a,"compatible"),formatter:Fa(t,mm)}}if(qe(
e)){let r=g(e,P),n=g(t,zi);if(r!=="iso8601"&&r!==n)throw new RangeError(`cannot format PlainDateTime with calendar ${r} \
in locale with calendar ${n}`);let a=g(e,Ye);return{epochNs:Pt(g(t,Wa),a,"compatible"),formatter:Fa(t,bm)}}if(ve(e))throw new TypeError(
"Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return St(e)?{epochNs:g(
e,re),formatter:Fa(t,wm)}:{}}function lg(e){let t=Object.create(null);return t.years=g(e,Ht),t.months=g(e,Wt),t.weeks=g(
e,lr),t.days=g(e,qt),t.hours=g(e,Vt),t.minutes=g(e,Yt),t.seconds=g(e,zt),t.milliseconds=g(e,Kt),t.microseconds=g(e,Gt),t.
nanoseconds=g(e,cr),t}ka.prototype.constructor=Tr,Object.defineProperty(Tr,"prototype",{value:ka.prototype,writable:!1,enumerable:!1,
configurable:!1}),Tr.supportedLocalesOf=go.supportedLocalesOf,In(Tr,"Intl.DateTimeFormat");var{format:NS,formatToParts:PS}=Intl.
DurationFormat?.prototype??Object.create(null);function rd(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=lg(
Mr(e));return NS.call(this,t)}Intl.DurationFormat?.prototype&&(Intl.DurationFormat.prototype.format=rd,Intl.DurationFormat.
prototype.formatToParts=function(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=lg(Mr(e));return PS.call(
this,t)});var gM=Object.freeze({__proto__:null,DateTimeFormat:Tr,ModifiedIntlDurationFormatPrototypeFormat:rd}),yo=class{constructor(t){
if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");Fm(this,Xs(t))}get epochMilliseconds(){
return I(this,St),Lr(g(this,re),"floor")}get epochNanoseconds(){return I(this,St),rg($.default.BigInt(g(this,re)))}add(t){
return I(this,St),rm("add",this,t)}subtract(t){return I(this,St),rm("subtract",this,t)}until(t,r=void 0){return I(this,St),
Gh("until",this,t,r)}since(t,r=void 0){return I(this,St),Gh("since",this,t,r)}round(t){if(I(this,St),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?wa("smallestUnit",t):K(t),n=ni(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",An);return ai(n,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[i],
!0),Vr(bu(g(this,re),n,i,a))}equals(t){I(this,St);let r=Ji(t),n=g(this,re),a=g(r,re);return $.default.equal($.default.BigInt(
n),$.default.BigInt(a))}toString(t=void 0){I(this,St);let r=K(t),n=Ro(r),a=zr(r,"trunc"),i=dr(r,"smallestUnit","time",void 0);
if(i==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let o=r.timeZone;o!==void 0&&(o=
Xt(o));let{precision:s,unit:l,increment:c}=Io(i,n);return Fh(Vr(bu(g(this,re),c,l,a)),o,s)}toJSON(){return I(this,St),Fh(
this,void 0,"auto")}toLocaleString(t=void 0,r=void 0){return I(this,St),new Tr(t,r).format(this)}valueOf(){Zn("Instant")}toZonedDateTimeISO(t){
I(this,St);let r=Xt(t);return Ct(g(this,re),r,"iso8601")}static fromEpochMilliseconds(t){return Vr(Yr(sl(t)))}static fromEpochNanoseconds(t){
return Vr(Xs(t))}static from(t){return Ji(t)}static compare(t,r){let n=Ji(t),a=Ji(r),i=g(n,re),o=g(a,re);return $.default.
lessThan(i,o)?-1:$.default.greaterThan(i,o)?1:0}};In(yo,"Temporal.Instant");var vo=class{constructor(t,r,n,a="iso8601"){
let i=se(t),o=se(r),s=se(n),l=tr(a===void 0?"iso8601":mt(a));ya(i,o,s),Dm(this,{year:i,month:o,day:s},l)}get calendarId(){
return I(this,Xe),g(this,P)}get era(){return Ut(this,"era")}get eraYear(){return Ut(this,"eraYear")}get year(){return Ut(
this,"year")}get month(){return Ut(this,"month")}get monthCode(){return Ut(this,"monthCode")}get day(){return Ut(this,"d\
ay")}get dayOfWeek(){return Ut(this,"dayOfWeek")}get dayOfYear(){return Ut(this,"dayOfYear")}get weekOfYear(){return Ut(
this,"weekOfYear")?.week}get yearOfWeek(){return Ut(this,"weekOfYear")?.year}get daysInWeek(){return Ut(this,"daysInWeek")}get daysInMonth(){
return Ut(this,"daysInMonth")}get daysInYear(){return Ut(this,"daysInYear")}get monthsInYear(){return Ut(this,"monthsInY\
ear")}get inLeapYear(){return Ut(this,"inLeapYear")}with(t,r=void 0){if(I(this,Xe),!et(t))throw new TypeError("invalid a\
rgument");ri(t);let n=g(this,P),a=Qt(n,g(this,ne));return a=ga(n,a,Er(n,t,["year","month","monthCode","day"],[],"partial")),
Zt(Kn(n,a,Ae(K(r))),n)}withCalendar(t){I(this,Xe);let r=Po(t);return Zt(g(this,ne),r)}add(t,r=void 0){return I(this,Xe),
nm("add",this,t,r)}subtract(t,r=void 0){return I(this,Xe),nm("subtract",this,t,r)}until(t,r=void 0){return I(this,Xe),Jh(
"until",this,t,r)}since(t,r=void 0){return I(this,Xe),Jh("since",this,t,r)}equals(t){I(this,Xe);let r=Ki(t);return on(g(
this,ne),g(r,ne))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){return I(this,Xe),Bh(this,$o(K(t)))}toJSON(){return I(this,
Xe),Bh(this)}toLocaleString(t=void 0,r=void 0){return I(this,Xe),new Tr(t,r).format(this)}valueOf(){Zn("PlainDate")}toPlainDateTime(t=void 0){
I(this,Xe);let r=Pm(t);return Pr(Re(g(this,ne),r),g(this,P))}toZonedDateTime(t){let r,n;if(I(this,Xe),et(t)){let o=t.timeZone;
o===void 0?r=Xt(t):(r=Xt(o),n=t.plainTime)}else r=Xt(t);let a=g(this,ne),i;return n===void 0?i=Bn(r,a):(n=Wn(n),i=Pt(r,Re(
a,g(n,Qe)),"compatible")),Ct(i,r,g(this,P))}toPlainYearMonth(){I(this,Xe);let t=g(this,P);return za(co(t,Qt(t,g(this,ne)),
"constrain"),t)}toPlainMonthDay(){I(this,Xe);let t=g(this,P);return Ya(zs(t,Qt(t,g(this,ne)),"constrain"),t)}static from(t,r=void 0){
return Ki(t,r)}static compare(t,r){let n=Ki(t),a=Ki(r);return on(g(n,ne),g(a,ne))}};function Ut(e,t){I(e,Xe);let r=g(e,ne);
return Oo(e).isoToDate(r,{[t]:!0})[t]}In(vo,"Temporal.PlainDate");var bo=class{constructor(t,r,n,a=0,i=0,o=0,s=0,l=0,c=0,u="\
iso8601"){let d=se(t),f=se(r),h=se(n),y=a===void 0?0:se(a),b=i===void 0?0:se(i),T=o===void 0?0:se(o),S=s===void 0?0:se(s),
E=l===void 0?0:se(l),_=c===void 0?0:se(c),O=tr(u===void 0?"iso8601":mt(u));Ju(d,f,h,y,b,T,S,E,_),Mm(this,{isoDate:{year:d,
month:f,day:h},time:{hour:y,minute:b,second:T,millisecond:S,microsecond:E,nanosecond:_}},O)}get calendarId(){return I(this,
qe),g(this,P)}get year(){return Ft(this,"year")}get month(){return Ft(this,"month")}get monthCode(){return Ft(this,"mont\
hCode")}get day(){return Ft(this,"day")}get hour(){return Ba(this,"hour")}get minute(){return Ba(this,"minute")}get second(){
return Ba(this,"second")}get millisecond(){return Ba(this,"millisecond")}get microsecond(){return Ba(this,"microsecond")}get nanosecond(){
return Ba(this,"nanosecond")}get era(){return Ft(this,"era")}get eraYear(){return Ft(this,"eraYear")}get dayOfWeek(){return Ft(
this,"dayOfWeek")}get dayOfYear(){return Ft(this,"dayOfYear")}get weekOfYear(){return Ft(this,"weekOfYear")?.week}get yearOfWeek(){
return Ft(this,"weekOfYear")?.year}get daysInWeek(){return Ft(this,"daysInWeek")}get daysInYear(){return Ft(this,"daysIn\
Year")}get daysInMonth(){return Ft(this,"daysInMonth")}get monthsInYear(){return Ft(this,"monthsInYear")}get inLeapYear(){
return Ft(this,"inLeapYear")}with(t,r=void 0){if(I(this,qe),!et(t))throw new TypeError("invalid argument");ri(t);let n=g(
this,P),a=g(this,Ye),i={...Qt(n,a.isoDate),...a.time};return i=ga(n,i,Er(n,t,["year","month","monthCode","day"],["hour",
"minute","second","millisecond","microsecond","nanosecond"],"partial")),Pr(Co(n,i,Ae(K(r))),n)}withPlainTime(t=void 0){I(
this,qe);let r=Pm(t);return Pr(Re(g(this,Ye).isoDate,r),g(this,P))}withCalendar(t){I(this,qe);let r=Po(t);return Pr(g(this,
Ye),r)}add(t,r=void 0){return I(this,qe),am("add",this,t,r)}subtract(t,r=void 0){return I(this,qe),am("subtract",this,t,
r)}until(t,r=void 0){return I(this,qe),Zh("until",this,t,r)}since(t,r=void 0){return I(this,qe),Zh("since",this,t,r)}round(t){
if(I(this,qe),t===void 0)throw new TypeError("options parameter is required");let r=typeof t=="string"?wa("smallestUnit",
t):K(t),n=ni(r),a=zr(r,"halfExpand"),i=dr(r,"smallestUnit","time",An,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,
microsecond:1e3,nanosecond:1e3}[i];ai(n,o,o===1);let s=g(this,Ye);return Pr(n===1&&i==="nanosecond"?s:wu(s,n,i,a),g(this,
P))}equals(t){I(this,qe);let r=Gi(t);return ei(g(this,Ye),g(r,Ye))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){I(this,qe);
let r=K(t),n=$o(r),a=Ro(r),i=zr(r,"trunc"),o=dr(r,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smal\
lestUnit must be a time unit other than "hour"');let{precision:s,unit:l,increment:c}=Io(o,a),u=wu(g(this,Ye),c,l,i);return va(
u),po(u,g(this,P),s,n)}toJSON(){return I(this,qe),po(g(this,Ye),g(this,P),"auto")}toLocaleString(t=void 0,r=void 0){return I(
this,qe),new Tr(t,r).format(this)}valueOf(){Zn("PlainDateTime")}toZonedDateTime(t,r=void 0){I(this,qe);let n=Xt(t),a=ao(
K(r));return Ct(Pt(n,g(this,Ye),a),n,g(this,P))}toPlainDate(){return I(this,qe),Zt(g(this,Ye).isoDate,g(this,P))}toPlainTime(){
return I(this,qe),Tn(g(this,Ye).time)}static from(t,r=void 0){return Gi(t,r)}static compare(t,r){let n=Gi(t),a=Gi(r);return ei(
g(n,Ye),g(a,Ye))}};function Ft(e,t){I(e,qe);let r=g(e,Ye).isoDate;return Oo(e).isoToDate(r,{[t]:!0})[t]}function Ba(e,t){
return I(e,qe),g(e,Ye).time[t]}In(bo,"Temporal.PlainDateTime");var wo=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0,s=0,l=0,c=0,u=0){
let d=t===void 0?0:qr(t),f=r===void 0?0:qr(r),h=n===void 0?0:qr(n),y=a===void 0?0:qr(a),b=i===void 0?0:qr(i),T=o===void 0?
0:qr(o),S=s===void 0?0:qr(s),E=l===void 0?0:qr(l),_=c===void 0?0:qr(c),O=u===void 0?0:qr(u);hl(d,f,h,y,b,T,S,E,_,O),Rn(this),
he(this,Ht,d),he(this,Wt,f),he(this,lr,h),he(this,qt,y),he(this,Vt,b),he(this,Yt,T),he(this,zt,S),he(this,Kt,E),he(this,
Gt,_),he(this,cr,O)}get years(){return I(this,Ze),g(this,Ht)}get months(){return I(this,Ze),g(this,Wt)}get weeks(){return I(
this,Ze),g(this,lr)}get days(){return I(this,Ze),g(this,qt)}get hours(){return I(this,Ze),g(this,Vt)}get minutes(){return I(
this,Ze),g(this,Yt)}get seconds(){return I(this,Ze),g(this,zt)}get milliseconds(){return I(this,Ze),g(this,Kt)}get microseconds(){
return I(this,Ze),g(this,Gt)}get nanoseconds(){return I(this,Ze),g(this,cr)}get sign(){return I(this,Ze),Js(this)}get blank(){
return I(this,Ze),Js(this)===0}with(t){I(this,Ze);let r=Nm(t),{years:n=g(this,Ht),months:a=g(this,Wt),weeks:i=g(this,lr),
days:o=g(this,qt),hours:s=g(this,Vt),minutes:l=g(this,Yt),seconds:c=g(this,zt),milliseconds:u=g(this,Kt),microseconds:d=g(
this,Gt),nanoseconds:f=g(this,cr)}=r;return new e(n,a,i,o,s,l,c,u,d,f)}negated(){return I(this,Ze),fr(this)}abs(){return I(
this,Ze),new e(Math.abs(g(this,Ht)),Math.abs(g(this,Wt)),Math.abs(g(this,lr)),Math.abs(g(this,qt)),Math.abs(g(this,Vt)),
Math.abs(g(this,Yt)),Math.abs(g(this,zt)),Math.abs(g(this,Kt)),Math.abs(g(this,Gt)),Math.abs(g(this,cr)))}add(t){return I(
this,Ze),tm("add",this,t)}subtract(t){return I(this,Ze),tm("subtract",this,t)}round(t){if(I(this,Ze),t===void 0)throw new TypeError(
"options parameter is required");let r=bn(this),n=typeof t=="string"?wa("smallestUnit",t):K(t),a=dr(n,"largestUnit","dat\
etime",void 0,["auto"]),{plainRelativeTo:i,zonedRelativeTo:o}=tu(n),s=ni(n),l=zr(n,"halfExpand"),c=dr(n,"smallestUnit","\
datetime",void 0),u=!0;c||(u=!1,c="nanosecond");let d=Sn(r,c),f=!0;if(a||(f=!1,a=d),a==="auto"&&(a=d),!u&&!f)throw new RangeError(
"at least one of smallestUnit or largestUnit is required");if(Sn(a,c)!==a)throw new RangeError(`largestUnit ${a} cannot \
be smaller than smallestUnit ${c}`);let h={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[c];
if(h!==void 0&&ai(s,h,!1),s>1&&wn(c)==="date"&&a!==c)throw new RangeError("For calendar units with roundingIncrement > 1\
, use largestUnit = smallestUnit");if(o){let b=qa(this),T=g(o,Oe),S=g(o,P),E=g(o,re);return b=tg(E,Qi(E,T,S,b),T,S,a,s,c,
l),wn(a)==="date"&&(a="hour"),Dr(b,a)}if(i){let b=tn(this),T=Qa({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},b.time),S=g(i,ne),E=g(i,P),_=kr(E,S,Nt(b.date,T.deltaDays),"constrain");return b=eg(Re(S,{deltaDays:0,hour:0,
minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(_,T),E,a,s,c,l),Dr(b,a)}if(Qr(r))throw new RangeError(`a\
 starting point is required for ${r}s balancing`);if(Qr(a))throw new RangeError(`a starting point is required for ${a}s \
balancing`);let y=tn(this);if(c==="day"){let{quotient:b,remainder:T}=y.time.divmod(qs),S=y.date.days+b+io(T,"day");S=qn(
S,s,l),y=En({years:0,months:0,weeks:0,days:S},Fe.ZERO)}else y=En({years:0,months:0,weeks:0,days:0},Zs(y.time,s,c,l));return Dr(
y,a)}total(t){if(I(this,Ze),t===void 0)throw new TypeError("options argument is required");let r=typeof t=="string"?wa("\
unit",t):K(t),{plainRelativeTo:n,zonedRelativeTo:a}=tu(r),i=dr(r,"unit","datetime",An);if(a){let s=qa(this),l=g(a,Oe),c=g(
a,P),u=g(a,re);return function(d,f,h,y,b){return wn(b)==="time"?io(Fe.fromEpochNsDiff(f,d),b):Kh(Xm(d,f,h,y,b),f,jr(h,d),
h,y,b)}(u,Qi(u,l,c,s),l,c,i)}if(n){let s=tn(this),l=Qa({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},s.time),c=g(n,ne),u=g(n,P),d=kr(u,c,Nt(s.date,l.deltaDays),"constrain");return function(f,h,y,b){if(ei(f,h)==
0)return 0;va(f),va(h);let T=Zm(f,h,y,b);return b==="nanosecond"?$.default.toNumber(T.time.totalNs):Kh(T,xt(h),f,null,y,
b)}(Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(d,l),u,i)}let o=bn(this);if(Qr(
o))throw new RangeError(`a starting point is required for ${o}s total`);if(Qr(i))throw new RangeError(`a starting point \
is required for ${i}s total`);return io(tn(this).time,i)}toString(t=void 0){I(this,Ze);let r=K(t),n=Ro(r),a=zr(r,"trunc"),
i=dr(r,"smallestUnit","time",void 0);if(i==="hour"||i==="minute")throw new RangeError('smallestUnit must be a time unit \
other than "hours" or "minutes"');let{precision:o,unit:s,increment:l}=Io(i,n);if(s==="nanosecond"&&l===1)return Fs(this,
o);let c=bn(this),u=qa(this),d=Zs(u.time,l,s,a);return u=En(u.date,d),Fs(Dr(u,Sn(c,"second")),o)}toJSON(){return I(this,
Ze),Fs(this,"auto")}toLocaleString(t=void 0,r=void 0){if(I(this,Ze),typeof Intl.DurationFormat=="function"){let n=new Intl.
DurationFormat(t,r);return rd.call(n,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires In\
tl.DurationFormat."),Fs(this,"auto")}valueOf(){Zn("Duration")}static from(t){return Mr(t)}static compare(t,r,n=void 0){let a=Mr(
t),i=Mr(r),o=K(n),{plainRelativeTo:s,zonedRelativeTo:l}=tu(o);if(g(a,Ht)===g(i,Ht)&&g(a,Wt)===g(i,Wt)&&g(a,lr)===g(i,lr)&&
g(a,qt)===g(i,qt)&&g(a,Vt)===g(i,Vt)&&g(a,Yt)===g(i,Yt)&&g(a,zt)===g(i,zt)&&g(a,Kt)===g(i,Kt)&&g(a,Gt)===g(i,Gt)&&g(a,cr)===
g(i,cr))return 0;let c=bn(a),u=bn(i),d=qa(a),f=qa(i);if(l&&(wn(c)==="date"||wn(u)==="date")){let S=g(l,Oe),E=g(l,P),_=g(
l,re),O=Qi(_,S,E,d),M=Qi(_,S,E,f);return ur($.default.toNumber($.default.subtract(O,M)))}let h=d.date.days,y=f.date.days;
if(Qr(c)||Qr(u)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");h=zh(
d.date,s),y=zh(f.date,s)}let b=d.time.add24HourDays(h),T=f.time.add24HourDays(y);return b.cmp(T)}};In(wo,"Temporal.Durat\
ion");var To=class{constructor(t,r,n="iso8601",a=1972){let i=se(t),o=se(r),s=tr(n===void 0?"iso8601":mt(n)),l=se(a);ya(l,
i,o),jm(this,{year:l,month:i,day:o},s)}get monthCode(){return cm(this,"monthCode")}get day(){return cm(this,"day")}get calendarId(){
return I(this,br),g(this,P)}with(t,r=void 0){if(I(this,br),!et(t))throw new TypeError("invalid argument");ri(t);let n=g(
this,P),a=Qt(n,g(this,ne),"month-day");return a=ga(n,a,Er(n,t,["year","month","monthCode","day"],[],"partial")),Ya(zs(n,
a,Ae(K(r))),n)}equals(t){I(this,br);let r=Lh(t);return on(g(this,ne),g(r,ne))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){
return I(this,br),Wh(this,$o(K(t)))}toJSON(){return I(this,br),Wh(this)}toLocaleString(t=void 0,r=void 0){return I(this,
br),new Tr(t,r).format(this)}valueOf(){Zn("PlainMonthDay")}toPlainDate(t){if(I(this,br),!et(t))throw new TypeError("argu\
ment should be an object");let r=g(this,P);return Zt(Kn(r,ga(r,Qt(r,g(this,ne),"month-day"),Er(r,t,["year"],[],[])),"con\
strain"),r)}static from(t,r=void 0){return Lh(t,r)}};function cm(e,t){I(e,br);let r=g(e,ne);return Oo(e).isoToDate(r,{[t]:!0})[t]}
function nu(e){return jr(e,Su())}In(To,"Temporal.PlainMonthDay");var cg={instant:()=>Vr(Su()),plainDateTimeISO:(e=qi())=>Pr(
nu(Xt(e)),"iso8601"),plainDateISO:(e=qi())=>Zt(nu(Xt(e)).isoDate,"iso8601"),plainTimeISO:(e=qi())=>Tn(nu(Xt(e)).time),timeZoneId:()=>qi(),
zonedDateTimeISO:(e=qi())=>{let t=Xt(e);return Ct(Su(),t,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(
cg,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});var ko=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0){
let s=t===void 0?0:se(t),l=r===void 0?0:se(r),c=n===void 0?0:se(n),u=a===void 0?0:se(a),d=i===void 0?0:se(i),f=o===void 0?
0:se(o);fl(s,l,c,u,d,f),Lm(this,{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f})}get hour(){return I(
this,at),g(this,Qe).hour}get minute(){return I(this,at),g(this,Qe).minute}get second(){return I(this,at),g(this,Qe).second}get millisecond(){
return I(this,at),g(this,Qe).millisecond}get microsecond(){return I(this,at),g(this,Qe).microsecond}get nanosecond(){return I(
this,at),g(this,Qe).nanosecond}with(t,r=void 0){if(I(this,at),!et(t))throw new TypeError("invalid argument");ri(t);let n=fu(
t,"partial"),a=fu(this),{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Object.assign(a,n),d=Ae(K(r));
return{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=ul(i,o,s,l,c,u,d),new e(i,o,s,l,c,u)}add(t){return I(
this,at),im("add",this,t)}subtract(t){return I(this,at),im("subtract",this,t)}until(t,r=void 0){return I(this,at),Xh("un\
til",this,t,r)}since(t,r=void 0){return I(this,at),Xh("since",this,t,r)}round(t){if(I(this,at),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?wa("smallestUnit",t):K(t),n=ni(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",An);return ai(n,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i],!1),
Tn(Tu(g(this,Qe),n,i,a))}equals(t){I(this,at);let r=Wn(t);return ku(g(this,Qe),g(r,Qe))===0}toString(t=void 0){I(this,at);
let r=K(t),n=Ro(r),a=zr(r,"trunc"),i=dr(r,"smallestUnit","time",void 0);if(i==="hour")throw new RangeError('smallestUnit\
 must be a time unit other than "hour"');let{precision:o,unit:s,increment:l}=Io(i,n);return Hh(Tu(g(this,Qe),l,s,a),o)}toJSON(){
return I(this,at),Hh(g(this,Qe),"auto")}toLocaleString(t=void 0,r=void 0){return I(this,at),new Tr(t,r).format(this)}valueOf(){
Zn("PlainTime")}static from(t,r=void 0){return Wn(t,r)}static compare(t,r){let n=Wn(t),a=Wn(r);return ku(g(n,Qe),g(a,Qe))}};
In(ko,"Temporal.PlainTime");var So=class{constructor(t,r,n="iso8601",a=1){let i=se(t),o=se(r),s=tr(n===void 0?"iso8601":
mt(n)),l=se(a);ya(i,o,l),Um(this,{year:i,month:o,day:l},s)}get year(){return yn(this,"year")}get month(){return yn(this,
"month")}get monthCode(){return yn(this,"monthCode")}get calendarId(){return I(this,Et),g(this,P)}get era(){return yn(this,
"era")}get eraYear(){return yn(this,"eraYear")}get daysInMonth(){return yn(this,"daysInMonth")}get daysInYear(){return yn(
this,"daysInYear")}get monthsInYear(){return yn(this,"monthsInYear")}get inLeapYear(){return yn(this,"inLeapYear")}with(t,r=void 0){
if(I(this,Et),!et(t))throw new TypeError("invalid argument");ri(t);let n=g(this,P),a=Qt(n,g(this,ne),"year-month");return a=
ga(n,a,Er(n,t,["year","month","monthCode"],[],"partial")),za(co(n,a,Ae(K(r))),n)}add(t,r=void 0){return I(this,Et),om("a\
dd",this,t,r)}subtract(t,r=void 0){return I(this,Et),om("subtract",this,t,r)}until(t,r=void 0){return I(this,Et),Qh("unt\
il",this,t,r)}since(t,r=void 0){return I(this,Et),Qh("since",this,t,r)}equals(t){I(this,Et);let r=Zi(t);return on(g(this,
ne),g(r,ne))===0&&nn(g(this,P),g(r,P))}toString(t=void 0){return I(this,Et),qh(this,$o(K(t)))}toJSON(){return I(this,Et),
qh(this)}toLocaleString(t=void 0,r=void 0){return I(this,Et),new Tr(t,r).format(this)}valueOf(){Zn("PlainYearMonth")}toPlainDate(t){
if(I(this,Et),!et(t))throw new TypeError("argument should be an object");let r=g(this,P);return Zt(Kn(r,ga(r,Qt(r,g(this,
ne),"year-month"),Er(r,t,["day"],[],[])),"constrain"),r)}static from(t,r=void 0){return Zi(t,r)}static compare(t,r){let n=Zi(
t),a=Zi(r);return on(g(n,ne),g(a,ne))}};function yn(e,t){I(e,Et);let r=g(e,ne);return Oo(e).isoToDate(r,{[t]:!0})[t]}In(
So,"Temporal.PlainYearMonth");var DS=Tr.prototype.resolvedOptions,Eo=class{constructor(t,r,n="iso8601"){if(arguments.length<
1)throw new TypeError("missing argument: epochNanoseconds is required");let a=Xs(t),i=mt(r),{tzName:o,offsetMinutes:s}=Vn(
i);if(s===void 0){let l=Ks(o);if(!l)throw new RangeError(`unknown time zone ${o}`);i=l.identifier}else i=zu(s);Bm(this,a,
i,tr(n===void 0?"iso8601":mt(n)))}get calendarId(){return I(this,ve),g(this,P)}get timeZoneId(){return I(this,ve),g(this,
Oe)}get year(){return Bt(this,"year")}get month(){return Bt(this,"month")}get monthCode(){return Bt(this,"monthCode")}get day(){
return Bt(this,"day")}get hour(){return Ha(this,"hour")}get minute(){return Ha(this,"minute")}get second(){return Ha(this,
"second")}get millisecond(){return Ha(this,"millisecond")}get microsecond(){return Ha(this,"microsecond")}get nanosecond(){
return Ha(this,"nanosecond")}get era(){return Bt(this,"era")}get eraYear(){return Bt(this,"eraYear")}get epochMilliseconds(){
return I(this,ve),Lr(g(this,re),"floor")}get epochNanoseconds(){return I(this,ve),rg(g(this,re))}get dayOfWeek(){return Bt(
this,"dayOfWeek")}get dayOfYear(){return Bt(this,"dayOfYear")}get weekOfYear(){return Bt(this,"weekOfYear")?.week}get yearOfWeek(){
return Bt(this,"weekOfYear")?.year}get hoursInDay(){I(this,ve);let t=g(this,Oe),r=Xr(this).isoDate,n=pr(r.year,r.month,r.
day+1),a=Bn(t,r),i=Bn(t,n);return io(Fe.fromEpochNsDiff(i,a),"hour")}get daysInWeek(){return Bt(this,"daysInWeek")}get daysInMonth(){
return Bt(this,"daysInMonth")}get daysInYear(){return Bt(this,"daysInYear")}get monthsInYear(){return Bt(this,"monthsInY\
ear")}get inLeapYear(){return Bt(this,"inLeapYear")}get offset(){return I(this,ve),hu(kn(g(this,Oe),g(this,re)))}get offsetNanoseconds(){
return I(this,ve),kn(g(this,Oe),g(this,re))}with(t,r=void 0){if(I(this,ve),!et(t))throw new TypeError("invalid zoned-dat\
e-time-like");ri(t);let n=g(this,P),a=g(this,Oe),i=kn(a,g(this,re)),o=Xr(this),s={...Qt(n,o.isoDate),...o.time,offset:hu(
i)};s=ga(n,s,Er(n,t,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond",
"offset"],"partial"));let l=K(r),c=ao(l),u=Bs(l,"prefer"),d=Co(n,s,Ae(l)),f=ii(s.offset);return Ct(Ys(d.isoDate,d.time,"\
option",f,a,c,u,!1),a,n)}withPlainTime(t=void 0){I(this,ve);let r=g(this,Oe),n=g(this,P),a=Xr(this).isoDate,i;return i=t===
void 0?Bn(r,a):Pt(r,Re(a,g(Wn(t),Qe)),"compatible"),Ct(i,r,n)}withTimeZone(t){I(this,ve);let r=Xt(t);return Ct(g(this,re),
r,g(this,P))}withCalendar(t){I(this,ve);let r=Po(t);return Ct(g(this,re),g(this,Oe),r)}add(t,r=void 0){return I(this,ve),
sm("add",this,t,r)}subtract(t,r=void 0){return I(this,ve),sm("subtract",this,t,r)}until(t,r=void 0){return I(this,ve),em(
"until",this,t,r)}since(t,r=void 0){return I(this,ve),em("since",this,t,r)}round(t){if(I(this,ve),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?wa("smallestUnit",t):K(t),n=ni(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",An,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i];
if(ai(n,o,o===1),i==="nanosecond"&&n===1)return Ct(g(this,re),g(this,Oe),g(this,P));let s=g(this,Oe),l=g(this,re),c=Xr(this),
u;if(i==="day"){let d=c.isoDate,f=pr(d.year,d.month,d.day+1),h=Bn(s,d),y=Bn(s,f),b=$.default.subtract(y,h);u=Fe.fromEpochNsDiff(
l,h).round(b,a).addToEpochNs(h)}else{let d=wu(c,n,i,a),f=kn(s,l);u=Ys(d.isoDate,d.time,"option",f,s,"compatible","prefer",
!1)}return Ct(u,s,g(this,P))}equals(t){I(this,ve);let r=Xi(t),n=g(this,re),a=g(r,re);return!!$.default.equal($.default.BigInt(
n),$.default.BigInt(a))&&!!Hm(g(this,Oe),g(r,Oe))&&nn(g(this,P),g(r,P))}toString(t=void 0){I(this,ve);let r=K(t),n=$o(r),
a=Ro(r),i=function(f){return xn(f,"offset",["auto","never"],"auto")}(r),o=zr(r,"trunc"),s=dr(r,"smallestUnit","time",void 0);
if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let l=function(f){return xn(f,"\
timeZoneName",["auto","never","critical"],"auto")}(r),{precision:c,unit:u,increment:d}=Io(s,a);return Vh(this,c,n,l,i,{unit:u,
increment:d,roundingMode:o})}toLocaleString(t=void 0,r=void 0){I(this,ve);let n=K(r),a=Object.create(null);if(function(l,c,u,d){
if(c==null)return;let f=Reflect.ownKeys(c);for(let h=0;h<f.length;h++){let y=f[h];if(!u.some(b=>Object.is(b,y))&&Object.
prototype.propertyIsEnumerable.call(c,y)){let b=c[y];l[y]=b}}}(a,n,["timeZone"]),n.timeZone!==void 0)throw new TypeError(
"ZonedDateTime toLocaleString does not accept a timeZone option");if(a.year===void 0&&a.month===void 0&&a.day===void 0&&
a.era===void 0&&a.weekday===void 0&&a.dateStyle===void 0&&a.hour===void 0&&a.minute===void 0&&a.second===void 0&&a.fractionalSecondDigits===
void 0&&a.timeStyle===void 0&&a.dayPeriod===void 0&&a.timeZoneName===void 0&&(a.timeZoneName="short"),a.timeZone=g(this,
Oe),Yh(a.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");let i=new Tr(t,a),
o=DS.call(i).calendar,s=g(this,P);if(s!=="iso8601"&&o!=="iso8601"&&!nn(o,s))throw new RangeError(`cannot format ZonedDat\
eTime with calendar ${s} in locale with calendar ${o}`);return i.format(Vr(g(this,re)))}toJSON(){return I(this,ve),Vh(this,
"auto")}valueOf(){Zn("ZonedDateTime")}startOfDay(){I(this,ve);let t=g(this,Oe);return Ct(Bn(t,Xr(this).isoDate),t,g(this,
P))}getTimeZoneTransition(t){I(this,ve);let r=g(this,Oe);if(t===void 0)throw new TypeError("options parameter is require\
d");let n=xn(typeof t=="string"?wa("direction",t):K(t),"direction",["next","previous"],An);if(n===void 0)throw new TypeError(
"direction option is required");if(Yh(r)||r==="UTC")return null;let a=g(this,re),i=n==="next"?Gu(r,a):gu(r,a);return i===
null?null:Ct(i,r,g(this,P))}toInstant(){return I(this,ve),Vr(g(this,re))}toPlainDate(){return I(this,ve),Zt(Xr(this).isoDate,
g(this,P))}toPlainTime(){return I(this,ve),Tn(Xr(this).time)}toPlainDateTime(){return I(this,ve),Pr(Xr(this),g(this,P))}static from(t,r=void 0){
return Xi(t,r)}static compare(t,r){let n=Xi(t),a=Xi(r),i=g(n,re),o=g(a,re);return $.default.lessThan($.default.BigInt(i),
$.default.BigInt(o))?-1:$.default.greaterThan($.default.BigInt(i),$.default.BigInt(o))?1:0}};function Xr(e){return jr(g(
e,Oe),g(e,re))}function Bt(e,t){I(e,ve);let r=Xr(e).isoDate;return Oo(e).isoToDate(r,{[t]:!0})[t]}function Ha(e,t){return I(
e,ve),Xr(e).time[t]}In(Eo,"Temporal.ZonedDateTime");var Ve=Object.freeze({__proto__:null,Duration:wo,Instant:yo,Now:cg,PlainDate:vo,
PlainDateTime:bo,PlainMonthDay:To,PlainTime:ko,PlainYearMonth:So,ZonedDateTime:Eo}),yM=class{toTemporalInstant(){return Vr(
Yr(Date.prototype.valueOf.call(this)))}}.prototype.toTemporalInstant,MS=[yo,vo,bo,wo,To,ko,So,Eo];for(let e of MS){let t=Object.
getOwnPropertyDescriptor(e,"prototype");(t.configurable||t.enumerable||t.writable)&&(t.configurable=!1,t.enumerable=!1,t.
writable=!1,Object.defineProperty(e,"prototype",t))}var Ur=oe(Le(),1);var De=oe(Le(),1),p=oe(Le(),1),Mt=oe(Le(),1),pt=oe(Le(),1);var lv=oe(pg(),1),cv=oe(mg(),1),uv=oe(yg(),1),dv=oe(bg(),1),pv=oe(Tg(),1);var nd=class{add(t,r,n){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else
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
YS=new nd;Object.assign(hr,{hooks:YS,plugins:new ad(hr),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"\
Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"\
UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,
PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,
SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,
"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(
["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});hr.max_unop_len=
hr.getMaxKeyLen(hr.unary_ops);hr.max_binop_len=hr.getMaxKeyLen(hr.binary_ops);var de=e=>new hr(e).parse(),zS=Object.getOwnPropertyNames(
class{});Object.getOwnPropertyNames(hr).filter(e=>!zS.includes(e)&&de[e]===void 0).forEach(e=>{de[e]=hr[e]});de.Jsep=hr;
var KS="ConditionalExpression",GS={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===
e.QUMARK_CODE){this.index++;let n=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),
this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError("Expected expression"),r.node=
{type:KS,test:n,consequent:a,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let o=n;for(;o.right.operator&&e.binary_ops[o.
right.operator]<=.9;)o=o.right;r.node.test=o.right,o.right=r.node,r.node=n}}else this.throwError("Expected :")}})}};de.plugins.
register(GS);var kv=oe(Le(),1),ge=oe(Le(),1),yt=oe(Le(),1),Be=oe(Le(),1),Ra=oe(Le(),1),Rv=oe(Le(),1);var JS=(e,t,r)=>{if(t.length===1&&t[0]===r){let n=!1;try{let a={};e(a)===a&&(n=!0)}catch{}if(n){let a;try{throw new Error}catch(i){
({stack:a}=i)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:a})}}},ZS=(e,t,r)=>{
let{memoize:n,memoizeOptions:a}=t,{inputSelectorResults:i,inputSelectorResultsCopy:o}=e,s=n(()=>({}),...a);if(!(s.apply(
null,i)===s.apply(null,o))){let c;try{throw new Error}catch(u){({stack:c}=u)}console.warn(`An input selector returned a \
different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:r,firstInputs:i,secondInputs:o,
stack:c})}},XS={inputStabilityCheck:"once",identityFunctionCheck:"once"};function QS(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function eE(e,t=`\
expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function tE(e,t="expecte\
d all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){let r=e.map(
n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var kg=e=>Array.
isArray(e)?e:[e];function rE(e){let t=Array.isArray(e[0])?e[0]:e;return tE(t,"createSelector expects all input-selectors\
 to be functions, but received the following types: "),t}function Sg(e,t){let r=[],{length:n}=e;for(let a=0;a<n;a++)r.push(
e[a].apply(null,t));return r}var nE=(e,t)=>{let{identityFunctionCheck:r,inputStabilityCheck:n}={...XS,...t};return{identityFunctionCheck:{
shouldRun:r==="always"||r==="once"&&e,run:JS},inputStabilityCheck:{shouldRun:n==="always"||n==="once"&&e,run:ZS}}};var AM=Symbol();var $M=Object.getPrototypeOf({});var aE=class{constructor(e){this.value=e}deref(){return this.value}},iE=typeof WeakRef<"u"?WeakRef:aE,oE=0,Eg=1;function vl(){
return{s:oE,v:void 0,o:null,p:null}}function xg(e,t={}){let r=vl(),{resultEqualityCheck:n}=t,a,i=0;function o(){let s=r,
{length:l}=arguments;for(let d=0,f=l;d<f;d++){let h=arguments[d];if(typeof h=="function"||typeof h=="object"&&h!==null){
let y=s.o;y===null&&(s.o=y=new WeakMap);let b=y.get(h);b===void 0?(s=vl(),y.set(h,s)):s=b}else{let y=s.p;y===null&&(s.p=
y=new Map);let b=y.get(h);b===void 0?(s=vl(),y.set(h,s)):s=b}}let c=s,u;if(s.s===Eg)u=s.v;else if(u=e.apply(null,arguments),
i++,n){let d=a?.deref?.()??a;d!=null&&n(d,u)&&(u=d,i!==0&&i--),a=typeof u=="object"&&u!==null||typeof u=="function"?new iE(
u):u}return c.s=Eg,c.v=u,u}return o.clearCache=()=>{r=vl(),o.resetResultsCount()},o.resultsCount=()=>i,o.resetResultsCount=
()=>{i=0},o}function sE(e,...t){let r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...a)=>{let i=0,o=0,s,l={},
c=a.pop();typeof c=="object"&&(l=c,c=a.pop()),QS(c,`createSelector expects an output function after the inputs, but rece\
ived: [${typeof c}]`);let u={...r,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:h=xg,argsMemoizeOptions:y=[],devModeChecks:b={}}=u,
T=kg(f),S=kg(y),E=rE(a),_=d(function(){return i++,c.apply(null,arguments)},...T),O=!0,M=h(function(){o++;let G=Sg(E,arguments);
if(s=_.apply(null,G),process.env.NODE_ENV!=="production"){let{identityFunctionCheck:Z,inputStabilityCheck:B}=nE(O,b);if(Z.
shouldRun&&Z.run(c,G,s),B.shouldRun){let we=Sg(E,arguments);B.run({inputSelectorResults:G,inputSelectorResultsCopy:we},{
memoize:d,memoizeOptions:T},arguments)}O&&(O=!1)}return s},...S);return Object.assign(M,{resultFunc:c,memoizedResultFunc:_,
dependencies:E,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>s,recomputations:()=>i,
resetRecomputations:()=>{i=0},memoize:d,argsMemoize:h})};return Object.assign(n,{withTypes:()=>n}),n}var k=sE(xg),lE=Object.
assign((e,t=k)=>{eE(e,`createStructuredSelector expects first argument to be an object where each property is a selector\
, instead received a ${typeof e}`);let r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((o,s,l)=>(o[r[l]]=s,
o),{}))},{withTypes:()=>lE});var Jr=oe(Le(),1);var qv=oe(Xn(),1),Vv=oe(Xn(),1);var zv=oe(Le(),1),Gv=oe(Le(),1),Zv=oe(Xn(),1);var ft=oe(Le(),1);var bs=oe(Le(),1);var Ab=oe(Le(),1);var ce=oe(Le(),1);var Ai=oe(Le(),1);var Da=oe(Xn(),1);var Q0=oe(Xn(),1),fN=oe(Sl(),1),Yp=oe(Sl(),1),ew=oe(Xn(),1),hN=oe(Sl(),1);var bc=oe(Le(),1),It=oe(Le(),1),Q=oe(Le(),1);var N=oe(Le(),1),vw=oe(Le(),1);var Wl=oe(hd(),1),ww=oe(hd(),1),ze=oe(Le(),1),F=oe(Le(),1),Pe=e=>({left:e}),Cl=Pe,R=e=>({right:e}),D=e=>"left"in e,xe=e=>"\
right"in e;var Ge=e=>{if(xe(e))return e.right;throw typeof e.left=="string"?new Error(e.left):e.left},Ad=(e,t)=>xe(e)?e.right:t;var IE=()=>Ve.Now.plainDateISO(),ar=e=>e instanceof Ve.PlainDate,OE=e=>Ve.PlainDate.from(e),Oy=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/,
Vo=e=>typeof e=="string"&&Oy.test(e),Nl=(e,t)=>typeof e=="string"?/^\d{4}-\d{2}-\d{2}$/.test(e)?Ve.PlainDate.from(e).toZonedDateTime(
{timeZone:t,plainTime:{hour:0}}):Oy.test(e)?Ve.PlainDateTime.from(e).toZonedDateTime(t):e.includes("[")?Ve.ZonedDateTime.
from(e).withTimeZone(t):Ve.Instant.from(e).toZonedDateTimeISO(t):e instanceof Ve.Instant?e.toZonedDateTimeISO(t):e instanceof
Ve.ZonedDateTime?e.withTimeZone(t):e.toZonedDateTime({timeZone:t,plainTime:{hour:0}});var CE=(e,t)=>Ve.PlainDate.compare(e,t);var Cy=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],NE=["Sun","Mon","Tue","Wed","Thu","Fri",
"Sat"],Hd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],md=["January","February","March","Ap\
ril","May","June","July","August","September","October","November","December"],$d=(e,t)=>{let r=e.toPlainDate(),n=t.toPlainDate();
return r.since(n,{largestUnit:"days"}).days},Ny=e=>{let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||
t[0]}`},Wg=e=>Cy[e.dayOfWeek%7],gi=e=>`${Ny(e.day)} ${Hd[e.month-1]}`,Xo=e=>`${Ny(e.day)} ${Hd[e.month-1]} ${e.year}`,PE=Ur.union(
[Ur.literal("weekdayShort"),Ur.literal("dayOfMonth"),Ur.literal("weekdayLong"),Ur.literal("fullDate"),Ur.literal("monthL\
ong"),Ur.literal("monthShort"),Ur.literal("monthNumber"),Ur.literal("year"),Ur.literal("monthYear")]),DE=(e,t,r={})=>{try{
return ME(e,t,r)}catch{return String(e)}},ME=(e,t,r={})=>{var n;let a=(n=r.timeZone)!=null?n:"Europe/London",i=Nl(e,a);switch(t){case"\
weekdayShort":return NE[i.dayOfWeek%7];case"dayOfMonth":return String(i.day);case"weekdayLong":return Cy[i.dayOfWeek%7];case"\
fullDate":return`${md[i.month-1]} ${i.day}, ${i.year}`;case"monthLong":return md[i.month-1];case"monthShort":return Hd[i.
month-1];case"monthNumber":return String(i.month);case"year":return String(i.year);case"monthYear":return`${md[i.month-1]}\
 ${i.year}`}},Rl=e=>e.slice(11,16),qg=(e,t,r)=>{if(t===0)return"today";if(t>0)return t===1?"tomorrow":t<7?`on ${Wg(e)}`:
t<=14?`${Wg(e)} ${gi(e)}`:e.year===r.year?gi(e):Xo(e);let n=-t;return n===1?"yesterday":n<7?`${n} days ago`:n<14?"1 week\
 ago":n<22?`${Math.floor(n/7)} weeks ago`:e.year===r.year?gi(e):Xo(e)},Rd=(e,t={})=>{try{return jE(e,t)}catch{return String(
e)}},jE=(e,t={})=>{var r,n;let a=(r=t.timeZone)!=null?r:"Europe/London",i=(n=t.now)!=null?n:Ve.Now.zonedDateTimeISO(a),o=Nl(
e,a),s=$d(o,i);if(Vo(e))return`${qg(o,s,i)}, ${Rl(e)}`;if(s>0)return qg(o,s,i);let l=Math.abs(o.epochMilliseconds-i.epochMilliseconds),
c=Math.floor(l/1e3),u=Math.floor(c/60),d=Math.floor(u/60),f=Math.floor(d/24),h=Math.floor(f/7);return c<45?"just now":c<
90?"1 minute ago":u<45?`${u} minutes ago`:u<90?"1 hour ago":d<6?`${Math.round(u/60)} hours ago`:s===0?"today":f<2?"yeste\
rday":f<7?`${f} days ago`:f<14?"1 week ago":f<22?`${h} weeks ago`:o.year===i.year?`${gi(o)}`:`${Xo(o)}`},LE=(e,t,r={})=>{
try{return UE(e,t,r)}catch{return t?`${String(e)} \u2013 ${String(t)}`:String(e)}},UE=(e,t,r={})=>{var n,a;let i=(n=r.timeZone)!=
null?n:"Europe/London",o=(a=r.now)!=null?a:Ve.Now.zonedDateTimeISO(i),s=Nl(e,i);if(!t)return Rd(e,r);let l=Nl(t,i);if($d(
l,s)===0){let O=Rd(e,r);return Vo(e)&&Vo(t)?`${O}\u2013${Rl(t)}`:O}let c=Math.abs($d(l,s))+1,u=c===1?"1 day":`${c} days`,
d=s.year,f=l.year,h=o.year,y=d!==h||d!==f,b=f!==h||d!==f,T=Vo(e)?`, ${Rl(e)}`:"",S=Vo(t)?`, ${Rl(t)}`:"",E=y?Xo(s):gi(s),
_=b?Xo(l):gi(l);return`${u}, from ${E}${T} to ${_}${S}`},FE=(e,t,r,n)=>{let a=BE(e),i=WE(t),o=YE(n);if(!a||!i||!o||typeof r!=
"string")return;let s;try{s=a.toZonedDateTimeISO(r).toPlainDate()}catch{return}for(let l=0;l<=7;l++){let c=s.add({days:l});
if(!o.has(c.dayOfWeek))continue;let u=c.toZonedDateTime({timeZone:r,plainTime:i}).toInstant().epochMilliseconds;if(u>a.epochMilliseconds)
return u}},BE=e=>{try{if(typeof e=="number")return Number.isFinite(e)?Ve.Instant.fromEpochMilliseconds(e):void 0;if(typeof e==
"string")return Ve.Instant.from(e)}catch{}},HE=/^([01]\d|2[0-3]):([0-5]\d)$/,WE=e=>{let t=typeof e=="string"?HE.exec(e):
null;return t?new Ve.PlainTime(Number(t[1]),Number(t[2])):void 0},qE={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7},VE=new Set(
[1,2,3,4,5,6,7]),YE=e=>{if(e==null)return VE;if(typeof e!="string")return;let t=e.split(",").map(n=>n.trim().toLowerCase()).
filter(n=>n.length>0);if(t.length===0)return;let r=new Set;for(let n of t){let a=qE[n];if(a===void 0)return;r.add(a)}return r};var zE=(e,t)=>Bi(e)?e(t):e,Jo=()=>!0,KE=e=>e instanceof Error,GE=e=>KE(e)?e.message:String(e),JE=e=>e===void 0?[]:Array.
isArray(e)?e:[e];var Qn=(e,t)=>e===t?0:e===void 0?1:t===void 0?-1:ar(e)&&ar(t)?Ve.PlainDate.compare(e,t):typeof e=="number"&&typeof t=="n\
umber"?e-t:typeof e=="string"&&typeof t=="string"?e.localeCompare(t):String(e).localeCompare(String(t));var Py={};var ue=e=>tt.union([e,tt.undefined]),Ie=ue(tt.boolean),U=ue(tt.string),gr=ue(tt.number),On=tt.record(tt.string,tt.unknown),
ZE=tt.array(On),XE=tt.record(tt.string,tt.string),WM=tt.record(tt.string,tt.boolean);var QE=Me.intersection([Me.type({version:Me.number,verticalId:Me.string,answers:On,derived:Me.type({entities:Me.array(Me.string),
features:Me.array(Me.string)})}),Me.partial({notes:Me.string})]),ex=Me.keyof({clone:null,orgGen:null,orgGenHighRisk:null}),
tx=Me.type({id:Me.string,label:Me.string,weight:Me.number,triggered:Me.boolean}),rx=Me.type({score:Me.number,factors:Me.array(
tx),strategy:ex}),qM=Me.intersection([QE,Me.type({risk:rx})]);var nx=function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.
slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};function ax(e){return e}function Dy(e,t,r,n,a,i,o,s,l){
switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(
n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:
return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}
var Wd=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,nx([a],n,!1))}}},ix=function(e){return e._tag==="L\
eft"},ox=function(e){return e._tag==="Right"};var sx=function(e){return{_tag:"Right",right:e}};function My(e){return function(t,r){return e.map(t,function(){return r})}}
function lx(e){var t=My(e);return function(r){return t(r,void 0)}}function cx(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}var jy=sx,ux=Wd(2,function(e,t){return Pl(e)?e:t(e.right)}),Ly=function(e,t){return Dy(e,px(t))},dx=function(e,t){return Dy(
e,hx(t))},qd="Either",px=function(e){return function(t){return Pl(t)?t:jy(e(t.right))}},Uy={URI:qd,map:Ly},VM=Wd(2,My(Uy)),
YM=lx(Uy),fx=function(e){return function(t){return Pl(t)?t:Pl(e)?e:jy(t.right(e.right))}},hx=fx,mx={URI:qd,map:Ly,ap:dx,
chain:ux},gx={URI:qd,fromEither:ax},Pl=ix,yx=ox;var zM=Wd(2,cx(mx)),KM={fromEither:gx.fromEither},ln=e=>Mt.union([e,Mt.array(e)]),$e=e=>{let t=r=>typeof r=="string";return new Mt.Type(
`lax(${e.name})`,t,(r,n)=>t(r)?Mt.success(r):Mt.failure(r,n),Mt.identity)};function Id(e){return e.length===0?"":e[0].context.map(r=>r.key).filter(Boolean).join(".")}function vx(e){if(e.length===
0)return"No errors";if(e.length===1){let a=e[0],i=Id(e);return`Invalid value${i?` at ${i}`:""}: ${a.message||a.value}`}let t={};
e.forEach(a=>{let i=Id([a]);t[i]||(t[i]=[]),t[i].push(a)});let r=Object.keys(t).length,n=e.length;return`${n} validation\
 error${n>1?"s":""} in ${r} location${r>1?"s":""}`}var bx=pt.type({type:pt.literal("static"),name:pt.string,value:pt.unknown}),wx=pt.type({type:pt.literal("dynamic"),name:pt.string,
formula:pt.string}),ql=pt.recursion("pluginParam",()=>pt.union([bx,wx,pt.type({type:pt.literal("complex"),params:pt.array(
ql)})])),Dl=e=>e?.dataType!==void 0,Tx=$e(p.union([p.literal("embedded"),p.literal("storage"),p.literal("realtime"),p.literal(
"callable")])),kx=$e(p.union([p.literal("list"),p.literal("value")])),Fy=$e(p.union([p.literal("public"),p.literal("priv\
ate")])),Sx=$e(p.union([p.literal("columns"),p.literal("grid"),p.literal("spatial"),p.literal("flow")])),Ex=$e(p.union([
p.literal("x"),p.literal("y")])),xx=$e(p.union([p.literal("jpeg"),p.literal("png"),p.literal("webp")])),Vl=$e(p.union([p.literal(
"small"),p.literal("medium")])),By=$e(p.union([p.literal("inline"),p.literal("masterDetail")])),Hy=$e(p.union([p.literal(
"basic"),p.literal("multiline"),p.literal("stringArray")])),Vd=$e(p.union([p.literal("none"),p.literal("uppercase"),p.literal(
"lowercase")])),_x=$e(p.union([p.literal("image"),p.literal("file"),p.literal("video"),p.literal("audio")])),Wy=$e(p.union(
[p.literal("integer"),p.literal("slider"),p.literal("decimal"),p.literal("money"),p.literal("intArray")])),Yd=$e(p.union(
[p.literal("date"),p.literal("datetime"),p.literal("time")])),Ax=$e(p.union([p.literal("single"),p.literal("multiple")])),
zd=$e(p.union([p.literal("select"),p.literal("radio"),p.literal("combobox")])),qy=$e(p.union([p.literal("global"),p.literal(
"user"),p.literal("variant"),p.literal("group"),p.literal("all"),p.literal("inbox")])),Vy=$e(p.union([p.literal("light"),
p.literal("dark")])),Kd=$e(p.union([p.literal("setUserProfile"),p.literal("triggerWorldcupSync"),p.literal("socialFollow"),
p.literal("socialUnfollow"),p.literal("socialLike"),p.literal("socialUnlike"),p.literal("kickFromHome")])),$x=$e(p.union(
[p.literal("contained"),p.literal("outlined"),p.literal("text"),p.literal("menu"),p.literal("pill")])),Rx=$e(p.union([p.literal(
"musicgen"),p.literal("minimax-music-2.5")])),Ix=$e(p.literal("gpt-4o-transcribe")),Ox=$e(p.union([p.literal("flux-schne\
ll"),p.literal("nano-banana-2")])),Yl=$e(p.union([p.literal("claude-haiku-5-5"),p.literal("claude-haiku-4-5"),p.literal(
"claude-sonnet-5")])),Cx=$e(p.union([p.literal("none"),p.literal("menu"),p.literal("tabs")])),Nx=$e(p.union([p.literal("\
onWrite"),p.literal("onTimer")])),Px=$e(p.union([p.literal("repeat"),p.literal("once"),p.literal("grid")])),Yy=$e(p.union(
[p.literal("tiles"),p.literal("bar"),p.literal("audioOnly"),p.literal("minimal")])),Gd=$e(p.union([p.literal("video"),p.literal(
"audio")])),Dx=$e(p.union([p.literal("anyone"),p.literal("admins")])),Mx=$e(p.literal("Person")),GM=$e(p.union([p.literal(
"variable"),p.literal("text"),p.literal("number"),p.literal("boolean"),p.literal("temporal"),p.literal("parentRef"),p.literal(
"image"),p.literal("imageUpload")])),JM=$e(p.union([p.literal("id"),p.literal("type"),p.literal("_scope"),p.literal("cre\
atedAt"),p.literal("updatedAt"),p.literal("createdBy"),p.literal("updatedBy"),p.literal("createdByUid"),p.literal("updat\
edByUid"),p.literal("isDeleted"),p.literal("_parent")])),jx=$e(p.union([p.literal("tabGroup"),p.literal("tab"),p.literal(
"folder")])),Lx=$e(p.union([p.literal("aiQuery"),p.literal("aiChat"),p.literal("fetchData"),p.literal("imageGeneration"),
p.literal("audioGeneration"),p.literal("transcribe"),p.literal("publishData"),p.literal("script")])),Ux=p.partial({field:p.string,
direction:p.union([p.literal("asc"),p.literal("desc")])}),Fx=p.partial({startField:p.string,endField:p.string,axis:p.string,
mode:Px,slots:p.string}),zy=p.partial({label:p.string,onPublishType:p.string,enabled:p.boolean,titleTemplate:p.string,bodyTemplate:p.string,
clickPath:p.string,onCreate:p.boolean,onUpdate:p.boolean,onDelete:p.boolean,condition:p.string}),Ky=p.partial({label:p.string,
enabled:p.boolean,trigger:Nx,watchType:p.string,onDelete:p.boolean,targetType:p.string,targetId:p.string,condition:p.string,
next:p.string,rejectionReason:p.string,notifyTurnUidField:p.string,notifyTitleTemplate:p.string,notifyBodyTemplate:p.string,
notifyClickPath:p.string,notifyTo:p.string,notifyTitle:p.string,notifyBody:p.string,notifyKey:p.string,notifyClickVariant:p.string,
smsTo:p.string,smsBody:p.string,smsPrivateType:p.string,smsReadUids:p.string,dueAt:p.string,nextPrivate:p.string,privateType:p.string,
privateReadUids:p.string,endOfLife:p.boolean,archive:p.boolean,archiveType:p.string,archiveData:p.string,archiveId:p.string,
perpetual:p.boolean,seed:p.string}),Gy=p.partial({label:p.string,enabled:p.boolean,watchType:p.string,moveType:p.string,
isBotTurn:p.string,privateType:p.string,privateKey:p.string,privateReady:p.string,state:p.string,questions:p.string,moveId:p.string,
move:p.string,fallbackMove:p.string,delayMs:p.union([p.number,p.string]),maxDecisions:p.number,maxDailyDecisions:p.number,
journal:p.boolean}),Bx=p.partial({functionName:p.string,args:p.string}),Jy=p.partial({dataType:p.string,scope:qy,groupKey:p.string}),
Jd=p.partial({maxColumns:p.number,columnBreaks:p.array(p.number),axis:Ex,mode:Sx,minColumnWidth:p.number,columnWeights:p.array(
p.number),cols:p.union([p.number,p.string]),rows:p.union([p.number,p.string]),rowHeight:p.number}),Zd=p.partial({x:p.union(
[p.number,p.string]),y:p.union([p.number,p.string]),w:p.union([p.number,p.string]),h:p.union([p.number,p.string])}),Xd=p.partial(
{marginBottom:p.number,justifySelf:p.union([p.literal("left"),p.literal("center"),p.literal("right")]),overlay:p.union([
p.literal("topLeft"),p.literal("topRight"),p.literal("bottomLeft"),p.literal("bottomRight")]),overlayInset:p.number,overlayWidth:p.number,
maxWidth:p.number}),Hx=p.partial({width:p.number,height:p.number}),Qd=p.partial({bg:p.string,surface:p.string,accent:p.string,
text:p.string,mutedText:p.string,border:p.string}),Zy=p.type({style:Cx}),ep=p.intersection([Hx,p.partial({format:xx})]),
tp=p.type({expression:p.string,errorMessage:p.string}),Wx=p.intersection([p.type({id:p.string,label:p.string}),p.partial(
{group:p.string})]),Xy=p.union([p.string,Wx]),Qy=p.intersection([p.type({allowedChildTypes:p.array(p.string)}),p.partial(
{icon:p.string,color:p.string,category:p.string,label:p.string,labelField:p.string,detail:p.string,badge:p.string,badgeColor:p.string,
lockedFields:p.union([p.string,p.array(p.string)]),canEdit:p.union([p.boolean,p.string])})]),zl=p.intersection([p.type({
type:p.string}),p.partial({id:p.string})]),qx=p.union([Wy,p.undefined]),Vx=p.type({x:p.number,y:p.number}),Yx=p.type({rotation:p.number,
zoom:p.number,pan:Vx}),ev=p.intersection([p.type({name:p.string}),p.partial({url:p.string,ext:p.string,aiPrompt:p.string,
previewUrl:p.string,editState:Yx,takenAt:p.string})]),zx=p.intersection([p.type({name:p.string}),p.partial({url:p.string,
ext:p.string,previewUrl:p.string,takenAt:p.string})]),Kx=p.union([ev,p.array(zx)]),Gx=p.intersection([p.type({title:p.string}),
p.partial({body:p.string,ok:p.string,cancel:p.string,destructive:p.boolean,info:p.boolean})]),tv=p.partial({params:p.array(
p.string),script:p.string,confirm:Gx}),Jx=p.partial({type:p.string,idField:p.string}),rv=p.partial({name:p.string,type:p.string,
isList:p.boolean,multiline:p.boolean,variant:p.string,compute:p.string,isTransient:p.boolean,description:p.string,fileNameFormula:p.string,
aiEnabled:p.boolean,aiSystemPromptFormula:p.string,searchFormula:p.string}),Zx=p.intersection([p.type({name:p.string,fields:p.array(
rv)}),p.partial({icon:p.string,parent:Jx,writeAccess:Dx,wellKnown:Mx})]),nv=p.intersection([p.type({id:p.string,version:p.number,
hash:p.string}),p.partial({omitted:p.array(p.string)})]),Xx=p.intersection([p.type({name:p.string,node:p.string,kind:kx}),
p.partial({default:p.string})]),Qx=p.type({name:p.string,slot:p.string,fn:p.string,hostType:p.string}),av=p.intersection(
[p.type({id:p.string,version:p.number}),p.partial({hash:p.string,slots:p.array(Xx),seams:p.array(Qx)})]),Ti=p.partial({dataType:p.string,
sort:ln(Ux),whereClause:p.string,source:Tx,scope:qy,groupKey:p.string,callable:Bx,span:Fx}),e_=p.intersection([p.type({name:p.string,
type:p.string}),p.partial({actionLabel:p.string,actionMenu:p.union([p.boolean,p.string]),actions:p.record(p.string,tv),aiEnabled:p.boolean,
aiSystemPromptFormula:p.string,appLogo:p.string,args:p.string,audioSourceUrl:p.string,authDescription:p.string,authMode:Fy,
authTitle:p.string,autoAdvance:p.boolean,botActors:ln(Gy),canAdd:p.union([p.boolean,p.string]),canEdit:p.union([p.boolean,
p.string]),collapsedByDefault:p.union([p.boolean,p.string]),collapsible:p.union([p.boolean,p.string]),color:p.string,compute:p.unknown,
containerStyle:Xd,contentMaxWidth:p.number,customCss:p.string,data:Ti,deepHelp:p.string,displayMode:Yy,displayName:p.string,
durationSec:p.union([p.number,p.string]),examples:p.array(p.string),feature:av,fetchUrl:p.string,focusIdentity:p.string,
format:p.union([Yd,p.string]),formConfig:Jy,functionName:Kd,headerLogo:p.string,help:p.string,hidden:p.union([p.boolean,
p.string]),hideHeader:p.union([p.boolean,p.string]),hideNav:p.union([p.boolean,p.string]),hideTopBar:p.union([p.boolean,
p.string]),htmlTemplate:p.string,icon:p.string,identity:p.string,idiom:p.union([zd,p.string]),idleDescription:p.string,idleTitle:p.string,
imageOutputOptions:ep,imageSource:p.string,inputPlaceholder:p.string,isDerived:p.boolean,isOwnScope:p.boolean,isRecord:p.boolean,
isRepeating:p.boolean,isTransient:p.boolean,itemLabel:p.string,iterationLabel:p.string,label:p.string,language:p.string,
layout:Jd,library:nv,lyrics:p.string,max:p.union([p.number,p.string]),maxLength:p.union([p.number,p.string]),maxSizeMb:p.union(
[p.number,p.string]),maxTiles:p.union([p.number,p.string]),maxUserTurns:p.number,mediaMode:Gd,min:p.union([p.number,p.string]),
mockAudioUrl:p.string,mockEnabled:p.boolean,mockImageUrl:p.string,mockReplies:p.string,mockResultCount:p.number,mockResults:p.string,
mockTranscript:p.string,model:p.union([Yl,p.string]),multiple:p.boolean,navigation:Zy,noCreditsDescription:p.string,noCreditsTitle:p.string,
nodeTypes:p.record(p.string,Qy),notifications:ln(zy),nounLabel:p.string,onSuccessNavigate:p.string,orderField:p.string,orgLogin:p.boolean,
pageSize:p.union([p.number,p.string]),parameters:p.string,pickerValues:p.union([p.string,p.array(Xy)]),place:Zd,placeholder:p.string,
placeholderIcon:p.string,pluginName:p.string,pluginParams:p.array(ql),prompt:p.string,promptTemplate:p.string,publishDataType:p.string,
publishScope:p.string,publishVariant:p.string,purpose:p.string,recordKey:p.string,recordValue:p.string,refreshCallables:p.array(
p.string),reorderable:p.union([p.boolean,p.string]),required:p.union([p.boolean,p.string]),resultObjectType:p.string,returns:p.string,
returnTypeHint:p.string,roomKey:p.string,rootType:p.string,runningDescription:p.string,runningTitle:p.string,script:p.string,
showCamera:p.boolean,showCommit:p.boolean,showEdit:p.boolean,showFilePicker:p.boolean,showHeader:p.union([p.boolean,p.string]),
showSearch:p.boolean,size:Vl,sourceExpression:p.string,speakReplies:p.boolean,speechLang:p.string,steeringChips:p.string,
step:p.union([p.number,p.string]),submitObjectType:p.string,successMessage:p.string,summary:p.string,textTransform:Vd,theme:Vy,
themeColors:Qd,transitions:ln(Ky),typeDescription:p.string,userAvatarUid:p.string,validation:ln(tp),value:p.unknown,variant:p.string,
voiceInput:p.boolean})]),ZM=De.type({verticalId:De.string,title:De.string,entities:De.array(De.string),seedSlots:De.array(
De.string),labels:De.array(De.string)}),t_=De.keyof({light:null,dark:null}),r_=De.partial({labels:De.record(De.string,De.string),
theme:De.partial({preset:t_,colors:Qd}),entityRenames:De.record(De.string,De.string),seedSlots:De.array(De.string)}),XM=De.intersection(
[De.type({appName:De.string}),r_]),rp={dataSourceType:["embedded","storage","realtime","callable"],featureSlotKind:["lis\
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
"createdAt","updatedAt","createdBy","updatedBy","createdByUid","updatedByUid","isDeleted","_parent"]};var iv=new Set(rp.fieldTypeBuiltin),n_=e=>iv.has(e),QM=rp.fieldTypeBuiltin.filter(n_);var a_=e=>{if(typeof e!="string")return[];let t=[];for(let r of e.split(",")){let n=r.trim();if(!n)continue;let a=n.indexOf(
":");if(a===-1){t.push({name:n});continue}let i=n.slice(0,a).trim(),o=n.slice(a+1).trim();i&&t.push(o?{name:i,type:o}:{name:i})}
return t},i_=e=>a_(e).map(t=>t.name),o_="__interp";var Kl="app",ki="appNode",mr="tree",Qo="screen",Gl="form",Jl="flow",Fr="flowStep",Zl="repeat",Xl="callableButton";var Aa="content",ls="textInput",cs="numberInput",Si="variable",ra="function",na="const",us="booleanInput",ds="temporalIn\
put",ps="selectInput",Ei="fileInput",np="pluginLeaf",ap="mediaRoom",s_="videoRoom",fs="subsection",l_=["app","appNode","\
booleanInput","callableButton","const","content","fileInput","flow","flowStep","form","function","mediaRoom","numberInpu\
t","pluginLeaf","repeat","screen","selectInput","subsection","temporalInput","textInput","tree","variable"],c_=["appNode\
:folder","appNode:tab","appNode:tabGroup","flowStep:aiChat","flowStep:aiQuery","flowStep:audioGeneration","flowStep:fetc\
hData","flowStep:imageGeneration","flowStep:publishData","flowStep:script","flowStep:transcribe"],ip={aiChat:{type:"flow\
Step",variant:"aiChat"},aiQuery:{type:"flowStep",variant:"aiQuery"},audioGeneration:{type:"flowStep",variant:"audioGener\
ation"},fetchData:{type:"flowStep",variant:"fetchData"},folder:{type:"appNode",variant:"folder"},imageGeneration:{type:"\
flowStep",variant:"imageGeneration"},publishData:{type:"flowStep",variant:"publishData"},script:{type:"flowStep",variant:"\
script"},tab:{type:"appNode",variant:"tab"},tabGroup:{type:"appNode",variant:"tabGroup"},transcribe:{type:"flowStep",variant:"\
transcribe"}},u_={form:["formConfig"],callableButton:["functionName","name"],tree:["nodeTypes","rootType"],variable:["na\
me"],function:["name"],const:["name","value"],mediaRoom:["roomKey"]},d_={form:{since:"2026-10",use:"inputs on a screen o\
r flow screen, saved by `publishData` / `updateData` in a script"}},p_={appNode:{submitObjectType:{since:"2026-10",use:"\
a declared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},
"appNode:folder":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishDa\
ta({type, data: {...}})` with the inputs named explicitly"}},"appNode:tab":{submitObjectType:{since:"2026-10",use:"a dec\
lared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},"\
appNode:tabGroup":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishD\
ata({type, data: {...}})` with the inputs named explicitly"}},screen:{submitObjectType:{since:"2026-10",use:"a declared \
action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},subsection:{
submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishData({type, data: {.\
..}})` with the inputs named explicitly"}}},f_={objectTypeField:{isList:{since:"2026-10",use:'`type: "list<T>"`'},multiline:{
since:"2026-10",use:'`variant: "multiline"` on a text field'}}},ov={list:"subsection",videoRoom:"mediaRoom"},h_=e=>{var t;
return(t=ov[e])!=null?t:e};var sv=e=>{var t;return(t=ip[e])!=null?t:{type:e}};var ej=Object.fromEntries(Object.entries(ip).map(([e,t])=>[`${t.type}:${t.variant}`,e]));var Vg="MatchExpression",Yg="MatchArm",Od="->",zg=123,Kg=125,m_=44,g_=e=>e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||e===
36||e===95||e>=128,ci=e=>e.code,gd=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",y_=(e,t)=>{if(gd(t)&&t.type===
"ConditionalExpression"){let r=t.test;if(gd(r)&&r.type==="BinaryExpression"&&r.operator===Od)return{type:Yg,test:r.left,
consequent:{type:"ConditionalExpression",test:r.right,consequent:t.consequent,alternate:t.alternate}}}return gd(t)&&t.type===
"BinaryExpression"&&t.operator===Od?{type:Yg,test:t.left,consequent:t.right}:e.throwError("Expected `condition -> expres\
sion` in match block")},v_={name:"orgigglyMatch",init(e){e.addBinaryOp(Od,.5),e.hooks.add("gobble-token",function(r){if(this.
gobbleSpaces(),!this.expr.startsWith("match",this.index))return;let n=this.index+5;if(n<this.expr.length&&g_(this.expr.charCodeAt(
n)))return;let a=this.index;this.index=n,this.gobbleSpaces();let i;if(ci(this)!==zg){let s=!1;try{s=this.gobbleExpression()}catch{
s=!1}if(this.gobbleSpaces(),!s||ci(this)!==zg){this.index=a;return}i=s}this.index++;let o=[];for(;;){if(this.gobbleSpaces(),
ci(this)===Kg){this.index++;break}Number.isNaN(ci(this))&&this.throwError("Unclosed match block \u2014 expected `}`");let s=this.
gobbleExpression();if(s||this.throwError("Expected `condition -> expression` in match block"),o.push(y_(this,s)),this.gobbleSpaces(),
ci(this)===m_){this.index++;continue}if(ci(this)===Kg){this.index++;break}this.throwError("Expected `,` or `}` after mat\
ch arm")}o.length===0&&this.throwError("A match block needs at least one arm"),r.node=i?{type:Vg,scrutinee:i,arms:o}:{type:Vg,
arms:o}})}},Gg="LetExpression",Jg=61,b_=62,fv=e=>e>=65&&e<=90||e>=97&&e<=122||e===36||e===95||e>=128,Zg=e=>fv(e)||e>=48&&
e<=57,yd=e=>e.code,w_=e=>e,Fo=e=>e,T_=new Set(["??","||"]),ui=e=>{let t=w_(e);if(t.type==="BinaryExpression"&&t.operator===
";"){let[r,n]=ui(t.left),a=n?Fo({type:"BinaryExpression",operator:";",left:n,right:t.right}):t.right;return[r,a]}if(t.type===
"BinaryExpression"&&T_.has(String(t.operator))){let[r,n]=ui(t.left);return n?[r,Fo({...t,left:n})]:[e,void 0]}if(t.type===
"ConditionalExpression"){let[r,n]=ui(t.test);if(n)return[r,Fo({...t,test:n})];let[a,i]=ui(t.alternate);return i?[Fo({...t,
alternate:a}),i]:[e,void 0]}if(t.type==="ArrowFunctionExpression"){let[r,n]=ui(t.body);return n?[Fo({...t,body:r}),n]:[e,
void 0]}return[e,void 0]},k_={name:"orgigglyLet",init(e){e.hooks.add("gobble-token",function(r){if(this.gobbleSpaces(),!this.
expr.startsWith("let",this.index))return;let n=this.index+3;if(n<this.expr.length&&Zg(this.expr.charCodeAt(n)))return;let a=this.
index;this.index=n,this.gobbleSpaces();let i=this.index;if(!fv(yd(this))){/^[^\s=]+\s*=(?![=>])/.test(this.expr.slice(this.
index))&&this.throwError("Expected a name after let"),this.index=a;return}for(;Zg(yd(this));)this.index++;let o=this.expr.
slice(i,this.index);if(this.gobbleSpaces(),yd(this)!==Jg){this.index=a;return}let s=this.expr.charCodeAt(this.index+1);if(s===
Jg||s===b_){this.index=a;return}this.index++;let l=this.gobbleExpression();l||this.throwError(`Expected an initialiser a\
fter let ${o} =`);let[c,u]=ui(l);r.node=u?{type:Gg,id:o,init:c,body:u}:{type:Gg,id:o,init:c}})}},Zo=e=>e,es=e=>typeof e==
"object"&&e!==null&&typeof e.type=="string",op=(e,t)=>e.type==="BinaryExpression"&&e.operator===t,S_=new Set(["||","&&",
"??"]),fi=(e,t,r)=>({type:"BinaryExpression",operator:e,left:t,right:r}),Cd=e=>{if(op(e,";")){let[t,r]=Cd(Zo(e.left));return[
t,r?fi(";",r,e.right):Zo(e.right)]}if(e.type==="ConditionalExpression"){let[t,r]=Cd(Zo(e.alternate));return r?[{...e,alternate:t},
r]:[e]}return[e]},Nd=(e,t)=>{if(!op(e,";"))return t(e);let r=Nd(Zo(e.right),t);return r?fi(";",e.left,r):void 0},Xg=e=>op(
e,"=")?e:void 0,Pd=e=>{if(e.type==="BinaryExpression"&&S_.has(String(e.operator))&&es(e.left)){let t=String(e.operator),
r=Nd(e.left,n=>{let a=Xg(n);return a?fi("=",a.left,Pd(fi(t,a.right,e.right))):void 0});if(r)return r}if(e.type==="Condit\
ionalExpression"&&es(e.test)){let[t,r]=Cd(Zo(e.alternate)),n=Nd(e.test,a=>{let i=Xg(a);return i?fi("=",i.left,Pd({...e,test:i.
right,alternate:t})):void 0});if(n)return r?fi(";",n,r):n}return e},Dd=e=>{let t={...e};for(let r of Object.keys(e)){if(r===
"parent")continue;let n=e[r];es(n)?t[r]=Dd(n):Array.isArray(n)&&(t[r]=n.map(a=>es(a)?Dd(a):a))}return Pd(t)},E_={name:"o\
rgigglyAssign",init(e){e.hooks.add("after-all",function(r){es(r.node)&&(r.node=Dd(r.node))})}},x_=()=>{de._orgigglyTemplatePluginRegistered||
(de.plugins.register(pv.default),de._orgigglyTemplatePluginRegistered=!0),de._orgigglyObjectPluginRegistered||(de.plugins.
register(cv.default),de._orgigglyObjectPluginRegistered=!0),de._orgigglyRegexPluginRegistered||(de.plugins.register(uv.default),
de._orgigglyRegexPluginRegistered=!0),de._orgigglySpreadPluginRegistered||(de.plugins.register(dv.default),de._orgigglySpreadPluginRegistered=
!0),de._orgigglyArrowPluginRegistered||(de.plugins.register(lv.default),de._orgigglyArrowPluginRegistered=!0),de._orgigglyAtUnaryRegistered||
(de.addUnaryOp("@"),de._orgigglyAtUnaryRegistered=!0),de._orgigglysemicolonRegistered||(de.addBinaryOp(";",1),de._orgigglysemicolonRegistered=
!0),de._orgigglyAssignmentRegistered||(de.addBinaryOp("=",2,!0),de._orgigglyAssignmentRegistered=!0),de._orgigglyNullishCoalescingRegistered||
(de.addBinaryOp("??",1),de._orgigglyNullishCoalescingRegistered=!0),de._orgigglyMatchPluginRegistered||(de.plugins.register(
v_),de._orgigglyMatchPluginRegistered=!0),de._orgigglyLetPluginRegistered||(de.plugins.register(k_),de._orgigglyLetPluginRegistered=
!0),de._orgigglyAssignPluginRegistered||(de.plugins.register(E_),de._orgigglyAssignPluginRegistered=!0)};x_();var Ml=e=>e.
type==="Literal",jl=e=>e.type==="BinaryExpression",Ql=e=>e.type==="CallExpression",Ar=e=>e.type==="Identifier",ts=e=>e.type===
"MemberExpression",hv=e=>e.type==="ThisExpression",mv=e=>e.type==="UnaryExpression",gv=e=>e.type==="ConditionalExpressio\
n";var __=e=>e.type==="Compound",yv=e=>e.type==="ArrayExpression",vv=e=>e.type==="TemplateLiteral",A_=e=>e.type==="TaggedTe\
mplateExpression",bv=e=>e.type==="ObjectExpression",Qg=e=>e&&e.type==="SpreadElement",wv=e=>e.type==="ArrowFunctionExpre\
ssion",$_=e=>e.type==="MatchExpression",Tv=e=>e.type==="LetExpression",ey=e=>typeof e=="object"&&e!==null&&"type"in e,R_=e=>{
let t=e;for(;t.parent;)t=t.parent;let r=t._source;return r||""},I_=e=>R_(e).slice(e.start,e.end),gt=(e,t,r,n)=>{let a=e;
if(a.parent=n,Ar(e)){let i=t.indexOf(e.name,r),o=i+e.name.length;return a.start=i,a.end=o,{start:i,end:o}}if(Ml(e)){let i=e.
raw;if(i){let c=t.indexOf(i,r),u=c+i.length;return a.start=c,a.end=u,{start:c,end:u}}let o=String(e.value),s=t.indexOf(o,
r),l=s+o.length;return a.start=s,a.end=l,{start:s,end:l}}if(jl(e)){let i=gt(e.left,t,r,a),o=gt(e.right,t,i.end,a);return a.
start=i.start,a.end=o.end,{start:i.start,end:o.end}}if(mv(e)){let i=t.indexOf(e.operator,r),o=gt(e.argument,t,i+e.operator.
length,a);return a.start=i,a.end=o.end,{start:i,end:o.end}}if(Ql(e)){let i=gt(e.callee,t,r,a),o=i.end;for(let c of e.arguments)
o=gt(c,t,o,a).end;let l=t.indexOf(")",o)+1;return a.start=i.start,a.end=l,{start:i.start,end:l}}if(ts(e)){let i=gt(e.object,
t,r,a);if(e.computed){let o=gt(e.property,t,i.end,a),l=t.indexOf("]",o.end)+1;return a.start=i.start,a.end=l,{start:i.start,
end:l}}else{let o=gt(e.property,t,i.end,a);return a.start=i.start,a.end=o.end,{start:i.start,end:o.end}}}if(gv(e)){let i=gt(
e.test,t,r,a),o=gt(e.consequent,t,i.end,a),s=gt(e.alternate,t,o.end,a);return a.start=i.start,a.end=s.end,{start:i.start,
end:s.end}}if(yv(e)){let i=t.indexOf("[",r),o=i+1;for(let c of e.elements)c&&(o=gt(c,t,o,a).end);let l=t.indexOf("]",o)+
1;return a.start=i,a.end=l,{start:i,end:l}}if(bv(e)){let i=t.indexOf("{",r),o=i+1;for(let c of e.properties){let u=c;u.key&&
(o=gt(u.key,t,o,a).end),u.value&&!u.shorthand&&(o=gt(u.value,t,o,a).end)}let l=t.indexOf("}",o)+1;return a.start=i,a.end=
l,{start:i,end:l}}if(vv(e)){let i=t.indexOf("`",r),o=i+1;for(let c of e.expressions)o=gt(c,t,o,a).end;let l=t.indexOf("`",
o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(hv(e)){let i=t.indexOf("this",r),o=i+4;return a.start=i,a.end=o,{start:i,
end:o}}if(__(e)){let i=e.body||[];if(i.length===0)return a.start=r,a.end=r,{start:r,end:r};let o=r,s=r,l=r;for(let c=0;c<
i.length;c++){let u=gt(i[c],t,o,a);c===0&&(s=u.start),l=u.end,o=u.end}return a.start=s,a.end=l,{start:s,end:l}}{let i=-1,
o=r,s=r;for(let[l,c]of Object.entries(e))if(!(l==="type"||l==="parent")){if(Array.isArray(c)){for(let u of c)if(ey(u)){let d=gt(
u,t,s,a);i===-1&&(i=d.start),o=d.end,s=d.end}}else if(ey(c)){let u=gt(c,t,s,a);i===-1&&(i=u.start),o=u.end,s=u.end}}return i===
-1?(a.start=r,a.end=r,{start:r,end:r}):(a.start=i,a.end=o,{start:i,end:o})}},O_=e=>{let t=de(e);return gt(t,e,0),t._source=
e,t},$a="@",C_=(e,t,r)=>{if(kv.string.is(e)){let a=e.startsWith($a);if(a){let i=Sv(e);return{isFormula:a,value:i,targetCodec:t,
name:r}}}return{isFormula:!1,value:e,targetCodec:t,name:r}},Sv=e=>e.slice($a.length).trim(),sp=e=>e.startsWith($a)?Sv(e):
e;var Ev=e=>!e.startsWith($a)&&e.includes("${"),lp=e=>{if(!Ev(e))return e;let t=e.trim();return t.length>1&&t.startsWith("\
`")&&t.endsWith("`")?$a+e:`${$a}\`${N_(e)}\``},N_=e=>{let t="",r=0,n=o=>{for(t+=e[r++];r<e.length&&e[r]!==o;)e[r]==="\\"&&
(t+=e[r++]),r<e.length&&(t+=e[r++]);r<e.length&&(t+=e[r++])},a=()=>{let o=1;for(;r<e.length;){let s=e[r];if(s==="'"||s===
'"')n(s);else if(s==="`")t+=e[r++],i(!0);else if(s==="{"&&o++,s==="}"&&o--,t+=e[r++],o===0)return}},i=o=>{for(;r<e.length;){
let s=e[r];if(s==="\\")t+=e[r++],r<e.length&&(t+=e[r++]);else if(s==="`"){if(o){t+=e[r++];return}t+="\\`",r++}else s==="\
$"&&e[r+1]==="{"?(t+="${",r+=2,a()):t+=e[r++]}};return i(!1),t};var P_=ge.union([ge.literal(ls),ge.literal(us),ge.literal(cs),ge.literal(ds),ge.literal(ps),ge.literal(Ei),ge.literal(np),
ge.literal(Gl),ge.literal(Jl),ge.literal(Fr),ge.literal(Zl),ge.literal(Xl),ge.literal(Kl),ge.literal(ki),ge.literal(Qo),
ge.literal(mr),ge.literal(Si),ge.literal(ra),ge.literal(na),ge.literal(Aa),ge.literal(fs),ge.literal(ap),ge.literal(s_)]),
D_=ge.recursion("node",()=>ge.intersection([ge.record(ge.string,ge.unknown),ge.partial({children:ge.array(D_)})])),M_={type:"\
app",name:""},j_={};var L_={include:Jo,traverseChildren:Jo,traverseParent:Jo},ec={...L_,direction:"forward"},Pn=e=>({...ec,...e});var U_=yt.union([yt.literal("before"),yt.literal("after"),yt.literal("into")]),F_=yt.union([yt.literal("top"),yt.literal(
"bottom"),yt.literal("center")]),B_=yt.type({target:yt.string,action:U_,position:F_}),rj=yt.type({currentDropZone:yt.union(
[yt.undefined,B_]),src:yt.string}),H_=Be.keyof({html:null,sandboxed:null}),xv=Be.keyof({spotify:null}),W_=Be.partial({name:Be.string,
type:Be.string,description:Be.string,exampleValue:Be.string,default:Be.string}),q_=Be.intersection([Be.type({name:Be.string,
parameters:Be.array(W_),htmlTemplate:Be.string}),Be.partial({icon:Be.string,color:Be.string,description:Be.string,image:ev,
runtime:H_,embedsThirdPartyMedia:Be.boolean,connections:Be.array(xv),widgetOwner:Be.string})]);var V_=Ra.intersection([Ra.type({name:Ra.string,type:Ra.string}),rv]);var Y_=new Set(rp.recordMetaField),hs=(...e)=>new Set(e),z_=hs("id"),K_=hs("createdAt","updatedAt","createdBy","updatedB\
y"),G_=hs("createdByUid","updatedByUid"),nj=hs("type","_scope","isDeleted"),aj=hs("_parent");var ij=new Set([...z_,...K_,...G_]),J_=([e,t])=>({...t,name:e}),Z_=e=>!!e[1],cp=e=>Object.entries(e).filter(Z_).map(J_),
Je=(e,t,r)=>(n={})=>({name:"",type:e,...n,...t,children:r?cp(r):void 0}),Br=(e,t)=>(r={},n={})=>{let a=cp(r),i=n.submitObjectType?
_v():[],o=[...a,...i];return{name:"",type:e,...t,...n,children:o.length>0?o:void 0}},vd=Je(Si),_v=()=>cp({id:vd(),createdAt:vd(),
createdBy:vd()}),Av=Br(Kl),oj=Br(ki),sj=Br(ki,{variant:"tabGroup"}),lj=Br(ki,{variant:"tab"}),cj=Br(ki,{variant:"folder"}),
uj=Br(Qo),dj=Br(fs),pj=Br(Gl),fj=Br(Jl),hj=Br(Zl,{isRepeating:!0}),mj=Je(Fr),gj=Je(Fr,{variant:"aiQuery"}),yj=Je(Fr,{variant:"\
aiChat"}),vj=Je(Fr,{variant:"fetchData"}),bj=Je(Fr,{variant:"imageGeneration"}),wj=Je(Fr,{variant:"audioGeneration"}),Tj=Je(
Fr,{variant:"transcribe"}),kj=Je(Fr,{variant:"publishData"}),Sj=Je(Fr,{variant:"script"}),Ej=Je(Xl),xj=Je(ls),_j=Je(cs),
Aj=Je(us),$j=Je(ds),Rj=Je(ps),Ij=Je(Ei),Oj=Je(Aa),Bo=Je(Si),Cj=Je(ra),Nj=Je(na),Pj=Je(np),Dj=Je(ap),Mj=Br(fs,{isRepeating:!0,
variant:"masterDetail"}),jj=Br(fs,{isRepeating:!0,isRecord:!0,variant:"masterDetail"}),$v=Je(mr,{isRepeating:!0},{value:Bo(),
expanded:Bo(),dragAndDropState:Bo(),isDrawerClosed:Bo(),leftPanelWidth:Bo()});var up=(e,t=".")=>{let r=e.lastIndexOf(t),n=r===-1?"":e.slice(0,r),a=r===-1?e:e.slice(r+1);return[n,a]},X_=(e,t=".")=>{let r=e.
indexOf(t),n=r===-1?e:e.slice(0,r),a=r===-1?"":e.slice(r+1);return[n,a]},_r=(e,t=".")=>e.filter(Boolean).join(t),Q_=e=>zc(
e,/(?=[A-Z])/).map(t=>Xc(t)),Iv=e=>Q_(e).join(" ");var eA=e=>{switch(e){case ls:case cs:case us:case ds:case ps:case Ei:case np:return!0;default:return!1}},tA=e=>{switch(e){case Kl:case ki:case Qo:case mr:case Gl:case Jl:case Zl:case fs:
return!0;default:return!1}},Ov=e=>{let t=[];return t.push(e),t.push(...ms(e).flatMap(Ov)),t},ms=e=>e.children||[],rA=(e,t)=>Cv(
e).filter(r=>r.name===t),nA=e=>{let t=new Map,r=(n,a)=>{t.set(n,a);for(let i of ms(n))r(i,n)};return r(e,null),t},Cv=e=>Nv(
e)?[e]:e.isOwnScope||e.isRepeating?[e]:[e,...ms(e).flatMap(Cv)],dp=(e,t,r)=>{let n=e[r.name];if(!n||n.length===1)return r.
name;let a=t.get(r);if(!a)throw new Error(`Node with name ${r.name} has no parent`);return`${dp(e,t,a)}$${r.name}`},pp=e=>tA(
e.type),aA=e=>e.type==="form"||!!e.submitObjectType,Nv=e=>!pp(e),fp=e=>!!(e.isRepeating||e.isOwnScope),iA=e=>e,it=(e,t)=>t,
tc=(e,t,r)=>r,oA=(e,t,r)=>r,sA=(e,t,r,n)=>n,lA=(e,t,r)=>r,Pv=(e,t)=>t,cA=(e,t,r)=>r,Dv=(e,t,r)=>r,uA=(e,t)=>t,Oa=e=>e,gs=k(
Oa,Ov),Uj=k(Oa,yr("compute")),dA=k(Oa,yr("name")),rc=k(gs,e=>Fn(e,yr("name"))),hp=k(Oa,nA),Mv=k(gs,rc,hp,(e,t,r)=>bt(e,n=>dp(
t,r,n))),jv=k(hp,Pv,(e,t)=>{var r;return(r=e.get(t))!=null?r:void 0}),Cn=k(rc,hp,Pv,(e,t,r)=>dp(e,t,r)),Ll=k(rc,Mv,it,(e,t,r)=>{
let n=t[r];return n?[n]:e[r]||[]}),rs=k(Oa,rc,Mv,it,(e,t,r)=>r,(e,t,r,n,a)=>{let i=r[n];if(i)return R(i);let o=t[n];if(!o){
let[,s]=X_(n,"$");return s?rs(e,s,a):Cl(`Node with id ${n} not found`)}if(o.length===1)return R(o[0]);if(!a){let s=ms(e).
find(c=>c.name===n);if(s)return R(s);let l=rA(e,n);return l.length===1?R(l[0]):Cl({matches:o.map(c=>Cn(e,c))})}return rs(
a,n)}),Fj=k(rs,Ge),Bj=k(dA,Iv),xi=(e,t,r)=>k(Oa,n=>{let a=n[t];return a===void 0&&r!==void 0&&(a=zE(r,n)),C_(a,e,t)}),pA=xi(
Rv.string,"nounLabel","Item"),fA=e=>{let{value:t,isFormula:r}=pA(e);return`${r?t:`'${t}'`} + ' ' + ($index + 1)`},hA=k(Oa,
fA),Hj=xi(Ie,"multiline"),Wj=k(gs,(e,t)=>t,(e,t)=>{let r=e.flatMap(n=>{var a;return Ti.is(n.data)&&n.data.source===t?(a=
n.data.dataType)!=null?a:[]:[]});return da(r)}),qj=k(gs,e=>{var t;let r=[],n=new Set;for(let a of e){if(!Ti.is(a.data)||
a.data.source!=="callable")continue;let i=a.data.dataType,o=a.data.callable;if(!i||!o?.functionName)continue;let s=`${i}\
::${o.functionName}::${(t=o.args)!=null?t:""}`;n.has(s)||(n.add(s),r.push({typeName:i,functionName:o.functionName,...o.args?
{args:o.args}:{}}))}return r}),mA=e=>{if(e.type===mr){let r=e.nodeTypes;return r&&typeof r=="object"?Object.keys(r):[]}let t=Ti.
is(e.data)?e.data.dataType:void 0;return t?[t]:[]},gA=k(gs,(e,t)=>t,(e,t)=>{var r,n;let a=new Map;for(let o of e)if(Ti.is(
o.data)&&o.data.source===t){let s=(r=o.data.scope)!=null?r:"global";for(let l of mA(o)){let c=(n=a.get(l))!=null?n:new Set;
s==="all"?(c.add("global"),c.add("user")):c.add(s),a.set(l,c)}}let i=[];for(let[o,s]of a)for(let l of s)i.push({typeName:o,
scope:l});return i}),nc=[],V=e=>e;var aa=e=>{var t;return(t=e.instance)!=null?t:j_},xr=e=>e.context,mp=k(V,yr("def")),un=k(aa,e=>{var t;return(t=e?.data)!=
null?t:nc}),gp=k(aa,e=>{var t;return(t=e?.navStack)!=null?t:nc}),dn=k(aa,e=>{var t;return(t=e?.lengths)!=null?t:nc}),yi=k(
un,e=>bt(e,yr("pointer"))),ac=k(dn,e=>bt(e,yr("pointer"))),yp=k(aa,e=>e.cursor||""),vp=k(aa,e=>e.cursorArgs),Lv=k(aa,e=>{
var t;return(t=e.navStackArgs)!=null?t:nc}),yA={objects:[]},vA=k(V,e=>{var t;return(t=e.repo)!=null?t:yA}),Uv=e=>{let{parent:t}=e;
return[...t?Uv(t):[],e]},bA=e=>{let t=e.match(/^([\w\s()$]+)(?:\[(\d+)\])?$/);if(!t)throw new Error(`part "${e}" invalid\
 syntax`);let[,r,n]=t;return{nodeId:r,index:n!==void 0?Number(n):0}},bp=e=>_r(Bv(e).map(Fv)),wA=e=>{let{scope:t,node:r,isIteration:n}=e,
a=bp(t);return n?a:_r([a,Cn(t.node,r)])},ys=e=>{let{parent:t,node:r}=e;if(!t)return"";let n=Cn(t.node,r);return _r([bp(t),
n])},Fv=e=>{let{parent:t,node:r,index:n}=e,a=t?Cn(t.node,r):"";return fp(r)?`${a}[${n}]`:a},TA=e=>({node:e,index:0,key:""}),
ty=e=>e.parent===void 0,Bv=e=>{let{parent:t}=e;return[...t?Bv(t):[],e]},Hv=(e,t)=>e.parent===t.parent&&e.node===t.node,kA=(e,t)=>{
let r=t.find(n=>Hv(e,n));return r?r.index:-1},SA=(e,t,r)=>{let n=t.map(a=>Hv(e,a)?{...a,index:r}:a);return _r(n.map(Fv))},
zj=yr("key"),EA=(e,t)=>{let{parent:r,node:n,key:a}=e,i=Ll(n,t);if(i.length)return n===i[0]?{key:_r([r?.key,t]),isDeclared:!0}:
{key:_r([a,t]),isDeclared:!0};if(t.includes("$")){let o=t.slice(t.lastIndexOf("$")+1);if(Ll(n,o).length)return{key:_r([a,
t]),isDeclared:!0}}return{key:_r([a,t]),isDeclared:!1}},bd=(e,t,r)=>{let n=xA(e,t,r);return n?Cn(e,n):r},xA=(e,t,r)=>{let n=Ll(
e,r);if(n.length!==0)return n.length===1?n[0]:Wv(e,t,r)},Wv=(e,t,r)=>{let n=Ll(t,r);if(n.length)return n[0];let a=jv(e,t);
if(a)return Wv(e,a,r)},_A=(e,t)=>{if(t==="")return R(TA(e));let[r,n]=up(t),{nodeId:a,index:i}=bA(n),o=Ul({def:e},r);if(D(
o))return o;let s=o.right,l=rs(e,a,s.node);if(D(l))return l;let c=l.right,u={parent:s,node:c,index:i,key:t},d=bp(u);if(d!==
t){let f=Ul({def:e},d);return D(f)?R(u):f}return R(u)},AA=(e,t)=>{let[r,n]=up(t),a=n.endsWith("]"),o=Ul({def:e},a?t:r);if(D(
o))return o;let s=o.right,l=a?R(s.node):rs(e,n,s.node);if(D(l))return l;let c=l.right,u={scope:s,node:c,isIteration:a,key:t},
d=wA(u);if(d!==t){let f=Kr({def:e},d);return D(f)?R(u):f}return R(u)},Ul=k(mp,it,_A),Nn=k(Ul,e=>{if(D(e))throw new Error(
`Invalid scope key: ${e.left}`);return e.right}),Kr=k(mp,it,AA),H=k(Kr,e=>{if(D(e))throw new Error(`Invalid pointer key:\
 ${e.left}`);return e.right}),wp=k(mp,tc,(e,t)=>H({def:e},t)),$A=k(H,yr("node")),Tp=k(V,()=>"",H),kp=k(Nn,Uv),ta=k(V,Nn,
tc,(e,t,r)=>kA(t,kp(e,r))),RA=k(V,Nn,tc,sA,(e,t,r,n)=>{let a=kp(e,r);return SA(t,a,n)}),Il=k(Nn,tc,EA),_l=(e,t,r)=>{let n=Kr(
e,t);if(D(n))return;let a=n.right.scope;for(;a;){let{key:i,isDeclared:o}=Il(e,a.key,r);if(o)return D(Kr(e,i))?void 0:i;a=
a.parent}};var _i=(e,t)=>{let r=(0,Vv.createContext)(t);return[r.Provider,()=>{let i=(0,qv.useContext)(r);if(i===void 0){if(t)return t;
throw new Error(`${e}Context not found`)}return i},r]},Yv=(e,t)=>{let r=e.length,n=t.length;if(r===0)return n;if(n===0)return r;
let a=[];for(let i=0;i<=r;i++)a[i]=[i];for(let i=0;i<=n;i++)a[0][i]=i;for(let i=1;i<=r;i++)for(let o=1;o<=n;o++){let s=e[i-
1]===t[o-1]?0:1;a[i][o]=Math.min(a[i-1][o]+1,a[i][o-1]+1,a[i-1][o-1]+s)}return a[r][n]},ry=e=>e.toLowerCase().trim().replace(
/^the\s+/i,"").replace(/\s+/g," "),IA=(e,t,r={})=>{if(e.length===0)return"none";let{correctThreshold:n=1,closeThreshold:a=3}=r,
i=ry(e),o=ry(t);if(i===o)return"correct";if(i.length===0)return"wrong";let s=Yv(i,o),l=Math.max(1,Math.floor(o.length/10)),
c=n*l,u=a*l;return s<=c?"correct":s<=u?"close":"wrong"};var Yo=class{constructor(e){this.html=e}toString(){return this.html}toJSON(){return this.html}},Kv=e=>e instanceof Yo,Sp=e=>e.
replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),OA=e=>e instanceof
Ve.PlainDate,CA=e=>e instanceof Ve.ZonedDateTime,NA=e=>e instanceof Ve.Instant,dt=e=>zv.string.is(e)?e:Kv(e)?e.html:OA(e)?
e.toString():CA(e)?e.toPlainDate().toString():NA(e)?e.toZonedDateTimeISO("UTC").toPlainDate().toString():Array.isArray(e)?
e.join(""):e===void 0?"":String(e),ic=(e,t,r="no context")=>xe(e)?Jv(e.right,t,r):e,Jv=(e,t,r="no context")=>t.is(e)?R(e):
Cl(`Type mismatch: ${JSON.stringify(e)} is not a ${t.name} (${r})`),PA=(e,t,r="no context")=>{if(!xe(e))return e;let n=e.
right;if(t.is(n))return R(n);let a=t;return a===Gv.string||a===U&&n!==void 0?R(dt(n)):Cl(`Type mismatch: ${JSON.stringify(
n)} is not a ${t.name} (${r})`)},DA=e=>{let t={},r=[];for(let n in e){let a=e[n];D(a)?r.push(a.left):t[n]=a.right}return r.
length?{left:r}:{right:t}};var be=e=>{let t=DA(e);if(D(t))throw new Error(t.left.join(`
`));return t.right};var[Jj,Zj]=_i("persistence"),[Xj,Qj]=_i("PersistenceKey","");var MA=e=>{let t=e;return()=>(t=t*1103515245+12345&2147483647,t/2147483647)},Fl="0123456789abcdefghijklmnopqrstuvwxyzABC\
DEFGHIJKLMNOPQRSTUVWXYZ",jA=248,LA=()=>{let e=globalThis.crypto;if(!e?.getRandomValues)return Math.floor(Math.random()*Fl.
length);let t=new Uint8Array(1);for(;;){e.getRandomValues(t);let r=t[0];if(r<jA)return r%Fl.length}},UA=(e={})=>{let{length:t=8,
seed:r}=e;if(t<=0)throw new Error("Length must be greater than 0");let n=r!==void 0?(()=>{let i=MA(r);return()=>Math.floor(
i()*Fl.length)})():LA,a="";for(let i=0;i<t;i++)a+=Fl[n()];return a},FA="23456789TJQKA",BA="shdc",HA=/^card_[shdc][2-9TJQKA]$/,
WA=["high card","pair","two pair","three of a kind","straight","flush","full house","four of a kind","straight flush"],qA=e=>{
if(typeof e!="string"||!HA.test(e))throw new Error(`handRank: bad card id ${JSON.stringify(e)} \u2014 expected card_{s|h|d|c}\
{2-9|T|J|Q|K|A}`);return{id:e,suit:BA.indexOf(e[5]),rank:FA.indexOf(e[6])+2}},zo={2:"two",3:"three",4:"four",5:"five",6:"\
six",7:"seven",8:"eight",9:"nine",10:"ten",11:"jack",12:"queen",13:"king",14:"ace"},xa=e=>e===6?"sixes":`${zo[e]}s`,ny=(e,t)=>{
var r;let n=e;for(let a=0;a<5;a++)n=n*15+((r=t[a])!=null?r:0);return n},ay=e=>{var t;let r=[...e].sort((f,h)=>h.rank-f.rank),
n=new Map;for(let f of r)n.set(f.rank,((t=n.get(f.rank))!=null?t:0)+1);let a=[...n.entries()].sort((f,h)=>h[1]-f[1]||h[0]-
f[0]),i=e.every(f=>f.suit===e[0].suit),o=a.map(([f])=>f),s=0;o.length===5&&(o[0]-o[4]===4?s=o[0]:o.join(",")==="14,5,4,3\
,2"&&(s=5));let l=()=>a.flatMap(([f])=>r.filter(h=>h.rank===f));if(s>0){let f=s===5?[...r.slice(1),r[0]]:r,h=i?8:4;return{
category:h,rank:ny(h,[s]),tiebreak:[s],ordered:f}}let c=a.map(([,f])=>f).join(""),u;c==="41"?u=7:c==="32"?u=6:i?u=5:c===
"311"?u=3:c==="221"?u=2:c==="2111"?u=1:u=0;let d=o;return{category:u,rank:ny(u,d),tiebreak:d,ordered:l()}},VA=e=>{let t=e.
tiebreak;switch(e.category){case 8:return t[0]===14?"royal flush":`straight flush, ${zo[t[0]]} high`;case 7:return`four \
of a kind, ${xa(t[0])}`;case 6:return`full house, ${xa(t[0])} over ${xa(t[1])}`;case 5:return`flush, ${zo[t[0]]} high`;case 4:
return`straight, ${zo[t[0]]} high`;case 3:return`three of a kind, ${xa(t[0])}`;case 2:return`two pair, ${xa(t[0])} and ${xa(
t[1])}`;case 1:return`pair of ${xa(t[0])}`;default:return`${zo[t[0]]}-high`}},YA=e=>{let t=e.length;if(t===5)return[e];if(t===
6)return e.map((n,a)=>e.filter((i,o)=>o!==a));let r=[];for(let n=0;n<t;n++)for(let a=n+1;a<t;a++)r.push(e.filter((i,o)=>o!==
n&&o!==a));return r},zA=e=>{if(!Array.isArray(e)||e.length<5||e.length>7){let i=Array.isArray(e)?`${e.length} cards`:typeof e;
throw new Error(`handRank: expected an array of 5\u20137 card ids, got ${i}`)}let t=e.map(qA),r=new Set;for(let i of t){
if(r.has(i.id))throw new Error(`handRank: duplicate card id ${i.id}`);r.add(i.id)}let n;for(let i of YA(t)){let o=ay(i);
(!n||o.rank>n.rank)&&(n=o)}let a=n??ay(t.slice(0,5));return{category:a.category,categoryName:WA[a.category],rank:a.rank,
best:a.ordered.map(i=>i.id),label:VA(a)}},Ep={map:["it","i"],filter:["it","i"],forEach:["it","i","arr"],reduce:["acc","i\
t","i"],times:["i"],every:["it","i"],some:["it","i"],find:["it","i"],findIndex:["it","i"],count:["it","i"],groupBy:["it",
"i"],sumBy:["it","i"]},KA=e=>e.params?e.params.filter(Ar).map(t=>t.name):null,xp="var(--og-accent, currentColor)",Xv="va\
r(--og-border, rgba(127,127,127,.25))",GA="var(--og-text, currentColor)",JA=e=>e!=null&&typeof e=="object"&&!Array.isArray(
e),_p=e=>JA(e)?e:{},ns=e=>{if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(typeof e=="string"&&e.trim()!==""){
let t=Number(e);return Number.isFinite(t)?t:void 0}},_a=(e,t)=>{let r=ns(e);return r!=null&&r>0?r:t},Qv=(e,t)=>{let r=ns(
e),n=t===void 0?1:ns(t);return r==null||n==null||n<=0?0:Math.min(1,Math.max(0,r/n))},ZA=/[;{}<>"'\\]|url\(|expression\(/i,
Md=e=>{if(typeof e!="string")return;let t=e.trim();return t!==""&&t.length<=100&&!ZA.test(t)?t:void 0},as=(e,t)=>{var r;
return(r=Md(e))!=null?r:t},XA=(e,t)=>{var r,n;return(n=(r=Md(e))!=null?r:Md(t))!=null?n:""},hi=e=>Math.round(e*100)/100,
eb=e=>`role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${e}"`,QA=(e,t)=>{let r=_p(t),n=Math.round(
Qv(e,r.max)*100),a=_a(r.height,8),i=_a(r.radius,a/2),o=as(r.color,xp),s=as(r.track,Xv);return`<div ${eb(n)} style="heigh\
t:${a}px;border-radius:${i}px;background:${s};overflow:hidden;"><div style="width:${n}%;height:100%;background:${o};"></\
div></div>`},e$=(e,t)=>{let r=_p(t),n=Qv(e,r.max),a=Math.round(n*100),i=_a(r.size,64),o=Math.min(_a(r.stroke,8),i/2),s=as(
r.color,xp),l=as(r.track,Xv),c=r.caption==null?`${a}%`:Sp(String(r.caption)),u=i/2,d=hi((i-o)/2),f=hi(2*Math.PI*d),h=(b,T="")=>`\
<circle cx="${u}" cy="${u}" r="${d}"${T} style="fill:none;stroke-width:${o};${b}"/>`,y=n>0?h(`stroke:${s};stroke-linecap\
:round;stroke-dasharray:${hi(n*f)} ${f};`,` transform="rotate(-90 ${u} ${u})"`):"";return`<svg ${eb(a)} width="${i}" hei\
ght="${i}" viewBox="0 0 ${i} ${i}" style="display:block;">`+h(`stroke:${l};`)+y+`<text x="${u}" y="${u}" text-anchor="mi\
ddle" dominant-baseline="central" style="fill:${GA};font-size:${hi(i*.24)}px;font-weight:600;">${c}</text></svg>`},t$=(e,t)=>{
if(!Array.isArray(e))return"";let r=e.flatMap(y=>{let b=ns(y);return b==null?[]:[b]});if(r.length<2)return"";let n=_p(t),
a=ns(n.width),i=_a(n.width,120),o=_a(n.height,32),s=_a(n.strokeWidth,2),l=as(n.color,xp),c=Math.min(...r),u=Math.max(...r)-
c,d=s/2,f=r.map((y,b)=>{let T=hi(b*i/(r.length-1)),S=u===0?o/2:hi(d+(1-(y-c)/u)*(o-2*d));return`${T},${S}`}).join(" ");return`\
<svg role="img" aria-label="${`trend: ${r[0]} to ${r[r.length-1]}`}" width="${a!=null&&a>0?i:"100%"}" height="${o}" view\
Box="0 0 ${i} ${o}" preserveAspectRatio="none" style="display:block;overflow:visible;"><polyline points="${f}" vector-ef\
fect="non-scaling-stroke" style="fill:none;stroke:${l};stroke-width:${s};stroke-linejoin:round;stroke-linecap:round;"/><\
/svg>`},r$=e=>{var t,r,n;try{return R(O_(e))}catch(a){let i=a,o=(t=i.message)!=null?t:"Parse error",s=(r=i.description)!=
null?r:o,l=(n=i.index)!=null?n:-1;return Pe({message:o,description:s,source:e,index:l})}},Ap=k(iA,r$),$p=e=>rt(e)&&"__or\
gFunction"in e&&e.__orgFunction===!0,Ol=new Set,n$=()=>({map:new Map,ids:new WeakMap,next:{n:0}}),iy=(e,t)=>{if(t===null)
return"null";let r=typeof t;if(r==="object"||r==="function"){let n=e.ids.get(t);return n===void 0&&(n=e.next.n++,e.ids.set(
t,n)),"#"+n}return r+":"+String(t)},tb=e=>{e?.map.clear()},is=e=>rt(e)&&"__closure"in e&&e.__closure===!0,rb=(e,t)=>{var r;
return{__closure:!0,params:(r=KA(e))!=null?r:[],body:e.body,ctx:t}},wd=new Set,os=(e,t)=>{if(wd.has(e))return R(void 0);
let r={};for(let n=0;n<e.params.length;n++)r[e.params[n]]=t[n];wd.add(e);try{return le(e.body,oc(e.ctx,r),cn)}finally{wd.
delete(e)}},nb=(e,t,r,n)=>{let a=e.compute,i=typeof a=="string"&&a.startsWith("@")?a.slice(1).trim():String(a??"");if(Ol.
has(e.key))return R(void 0);let o=i_(e.parameters),s={};for(let d=0;d<o.length;d++)s[o[d]]=t[d];let l=Ap(i);if(D(l))return Pe(
Tt(`Error in function body: ${i}`,n));let c=e.memoSafe===!0?r.memo:void 0,u;if(c){let d=r.dc("$data",cn);u=e.key+"|"+iy(
c,d)+"|"+t.map(h=>iy(c,h)).join(",");let f=c.map.get(u);if(f!==void 0)return f}Ol.add(e.key);try{let d=oc(r,s);d.letBound=
void 0;let f=le(l.right,d,cn);return c&&u!==void 0&&c.map.set(u,f),f}finally{Ol.delete(e.key)}},Td=(e,t,r)=>{let n=[];for(let a of e){
let i=le(a,t,r);if(D(i))return i;n.push(i.right)}return R(n)},Tt=(e,t)=>({message:e,failingExpression:t}),a$=e=>{if(Ar(e))
return e.name;if(ts(e)){let t=e.property;if(Ar(t))return t.name}return"function"},ab=(e,t,r,n)=>{var a;let i=e;if(tb(r.memo),
Ar(e))return(a=r.letBound)!=null&&a.has(e.name)?Pe(Tt(`Cannot reassign let binding '${e.name}'`,i)):r.setter?(r.setter(e.
name,t),R(void 0)):Pe(Tt("Cannot assign: no mutable context available",i));if(ts(e)){let o=le(e.object,r,n);if(D(o))return o;
let s=o.right;if(s==null||typeof s!="object"&&typeof s!="function")if(Ar(e.object)){if(!r.setter)return Pe(Tt("Cannot au\
to-create object: no mutable context available",i));s={},r.setter(e.object.name,s)}else return Pe(Tt("Cannot assign prop\
erty of non-object",i));let l=jd(e,r.dc);if(D(l))return l;let c=l.right.property;return s[c]=t,R(void 0)}return Pe(Tt("I\
nvalid assignment target: must be identifier or property access",i))},le=(e,t,r=cn)=>{var n,a,i;let o=e;if(Ml(e))return R(
e.value);if(jl(e)){if(e.operator==="->")return Pe(Tt("`->` is only valid inside a `match { }` block (as `condition -> ex\
pression`)",e));if(e.operator===";"){let c=le(e.left,t,r);return D(c)?c:le(e.right,t,r)}if(e.operator==="="){let c=le(e.
right,t,r);if(D(c))return c;let u=c.right,d=ab(e.left,u,t,r);return D(d)?d:R(u)}if(e.operator==="&&"||e.operator==="||"||
e.operator==="??"){let c=le(e.left,t,r);if(D(c))return c;let u=c.right;return(e.operator==="&&"?!u:e.operator==="||"?!!u:
u!=null)?c:le(e.right,t,r)}let s=le(e.left,t,r);if(D(s))return s;let l=le(e.right,t,r);if(D(l))return l;try{return R(w$(
e.operator)(s.right,l.right))}catch(c){return Pe(Tt(String(c),e))}}if(mv(e)){let s=le(e.argument,t,r);if(D(s))return s;try{
return R(T$(e.operator)(s.right))}catch(l){return Pe(Tt(String(l),e))}}if(gv(e)){let s=le(e.test,t,r);return D(s)?s:s.right?
le(e.consequent,t,r):le(e.alternate,t,r)}if(Tv(e)){if((n=t.letBound)!=null&&n.has(e.id))return Pe(Tt(`Cannot redeclare l\
et binding '${e.id}'`,e));let s=le(e.init,t,r);return D(s)?s:e.body?le(e.body,ob(t,e.id,s.right),r):R(s.right)}if($_(e)){
let s,l=e.scrutinee!==void 0;if(e.scrutinee!==void 0){let c=le(e.scrutinee,t,r);if(D(c))return c;s=c.right}for(let c of e.
arms){if(Ar(c.test)&&c.test.name==="_")return le(c.consequent,t,r);let u=le(c.test,t,r);if(D(u))return u;if(l?Ip(s,u.right):
!!u.right)return le(c.consequent,t,r)}return R(void 0)}if(Ql(e)){let s={...r,memberLookupContexts:[]};if(ts(e.callee)){let u=le(
e.callee.object,t,di(s,!1));if(D(u))return u;let d=u.right,f=jd(e.callee,t.dc);if(D(f))return f;let h=f.right.property,y=kd(
h,t.dc,di(s,!0));if(oy(y))return e.arguments.length>0?y(d,e.arguments[0],t):R(void 0);if(y===Ko){if(e.arguments.length>0){
let T=e.arguments.length>1?le(e.arguments[1],t,s):R(void 0);return D(T)?T:Ko(d,e.arguments[0],t,T.right)}return R(void 0)}
let b;if(d!=null){if(b=d[h],is(b)){let T=Td(e.arguments,t,s);return D(T)?T:os(b,T.right)}if(typeof b=="function"){let T=b.
bind(d),S=[];for(let E of e.arguments){let _=le(E,t,s);if(D(_))return _;S.push(_.right)}try{return R(T(...S))}catch(E){let _=E instanceof
Error?E.message:String(E);return Pe(Tt(`Error invoking ${h}(): ${_}`,o))}}}if(typeof y=="function"){let T=[d];for(let S of e.
arguments){let E=le(S,t,s);if(D(E))return E;T.push(E.right)}try{return R(y(...T))}catch(S){let E=S instanceof Error?S.message:
String(S);return Pe(Tt(`Error invoking ${h}(): ${E}`,o))}}return R(void 0)}let l=le(e.callee,t,di(s,!0));if(D(l))return l;
let c=l.right;if(is(c)){let u=Td(e.arguments,t,s);return D(u)?u:os(c,u.right)}if($p(c)){if(Ol.has(c.key))return R(void 0);
let u=Td(e.arguments,t,s);return D(u)?u:nb(c,u.right,t,e)}if(typeof c=="function"){if(oy(c)){let d=le(e.arguments[0],t,s);
return D(d)?d:c(d.right,e.arguments[1],t)}if(c===Ko){let d=le(e.arguments[0],t,s);if(D(d))return d;let f=e.arguments.length>
2?le(e.arguments[2],t,s):R(void 0);return D(f)?f:Ko(d.right,e.arguments[1],t,f.right)}let u=[];for(let d of e.arguments){
let f=le(d,t,s);if(D(f))return f;u.push(f.right)}try{return R(c(...u))}catch(d){let f=a$(e.callee),h=d instanceof Error?
d.message:String(d);return Pe(Tt(`Error invoking ${f}(): ${h}`,o))}}return R(void 0)}if(hv(e))return R(t.thisContext);if(Ar(
e))return R(kd(e.name,t.dc,r));if(ts(e)){let{object:s}=e,l=jd(e,t.dc);if(D(l))return l;let c=l.right,u=le(s,t,b$(di(r,!1),
c));if(D(u))return u;let d=u.right;if(Ue(d)){if(c.type==="computed"){let f=Number(c.property);return isNaN(f)?R(void 0):
R(d[f])}return R(d.map(f=>rt(f)?f[c.property]:void 0))}if(rt(d))return R(d[c.property]);if(Lt(d)&&c.type!=="computed"&&c.
property==="length")return R(d.length);if(d!=null&&typeof d=="object"){let f=d[c.property];return R(typeof f=="function"?
f.bind(d):f)}return R(void 0)}if(vv(e)){let s=[],{quasis:l,expressions:c}=e;for(let u=0;u<l.length;u++){let d=l[u],f=(i=
typeof d.value=="string"?d.value:(a=d.value)==null?void 0:a.cooked)!=null?i:"";if(s.push(f),u<c.length){let h=le(c[u],t,
r);if(D(h))return h;s.push(dt(h.right))}}return R(s.join(""))}if(A_(e)){let s=le(e.tag,t,di(r,!0));if(D(s))return s;let l=s.
right;if(typeof l!="function")return R(void 0);let{quasis:c,expressions:u}=e.quasi,d=c.map(y=>{var b,T;return(T=typeof y.
value=="string"?y.value:(b=y.value)==null?void 0:b.cooked)!=null?T:""}),h=[Object.assign([...d],{raw:d.slice()})];for(let y of u){
let b=le(y,t,r);if(D(b))return b;h.push(b.right)}return R(l(...h))}if(yv(e)){let s=[];for(let l of e.elements)if(l===null)
s.push(void 0);else if(Qg(l)){let c=le(l.argument,t,r);if(D(c))return c;let u=c.right;Ue(u)&&s.push(...u)}else{let c=le(
l,t,r);if(D(c))return c;s.push(c.right)}return R(s)}if(bv(e)){let s={},{properties:l}=e;for(let c of l){if(Qg(c)){let h=le(
c.argument,t,r);if(D(h))return h;let y=h.right;rt(y)?Object.assign(s,y):Ue(y)&&y.forEach((b,T)=>{s[String(T)]=b});continue}
let u=c.key,d=!!c.computed,f;if(!d&&Ar(u))f=u.name;else if(!d&&Ml(u))f=String(u.value);else{let h=le(u,t,r);if(D(h))return h;
f=String(h.right)}if(c.shorthand)s[f]=kd(f,t.dc,r);else{let h=le(c.value,t,r);if(D(h))return h;s[f]=h.right}}return R(s)}
return wv(e)?R(rb(e,t)):Pe(Tt(`Unsupported expression: ${e.type}`,o))},jd=(e,t)=>{let{computed:r}=e,n=i$(e,t);return D(n)?
n:R({type:r?"computed":"static",property:n.right})},i$=(e,t)=>{let{property:r,computed:n}=e;if(!n&&Ar(r))return R(r.name);
let a=le(r,{dc:t,setter:void 0});return D(a)?a:R(String(a.right))},kd=(e,t,r)=>{let n=t(e,r);if(n!==void 0&&(!r.isCall||
Bi(n)||$p(n)||is(n)))return n;if(r.isCall){let a=lb.get(e);if(a)return a;if(e==="reduce")return Ko}if(e in Bl&&!(!r.isCall&&
ib.has(e)))return Bl[e]},ib=new Set(["html","keys","values","entries","first","last","progressBar","progressRing","spark\
line"]),ob=(e,t,r)=>{var n;let a=oc(e,{[t]:r});return a.letBound=new Set([...(n=e.letBound)!=null?n:[],t]),a},oc=(e,t)=>{
let r=e.letBound;if(r){let n=Object.keys(t).filter(a=>r.has(a));if(n.length>0){let a=new Set(r);for(let i of n)a.delete(
i);r=a}}return{dc:lc(e.dc,t),setter:e.setter,thisContext:e.thisContext,memo:e.memo,asyncHosts:e.asyncHosts,syncHosts:e.syncHosts,
letBound:r}},ia=(e,t,r)=>{var n;let a=(n=Ep[r])!=null?n:[];if(wv(e)){let i=rb(e,t);return o=>os(i,o)}if(Ar(e)&&!a.includes(
e.name)){let i=le(e,t,di(cn,!0));if(!D(i)&&is(i.right)){let o=i.right;return s=>os(o,s)}if(!D(i)&&$p(i.right)){let o=i.right;
return s=>nb(o,s,t,e)}}return(i,o)=>{let s={};for(let l=0;l<a.length;l++)s[a[l]]=i[l];return o&&Object.assign(s,o),le(e,
oc(t,s),cn)}},o$=(e,t,r)=>{if(!Lt(e))return R("");let n=ia(t,r,"forEach"),a=[],i=e.split(`
`);for(let o=0;o<i.length;o++){let s=n([i[o],o,i]);if(D(s))return s;a.push(String(s.right))}return R(a.join(""))},s$=(e,t,r)=>{
if(!Ue(e))return R([]);let n=ia(t,r,"filter"),a=[];for(let i=0;i<e.length;i++){let o=e[i],s=n([o,i]);if(D(s))return s;s.
right&&a.push(o)}return R(a)},l$=(e,t,r)=>{if(!Ue(e))return R([]);let n=ia(t,r,"map"),a=[];for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(D(o))return o;a.push(o.right)}return R(a)},Ko=(e,t,r,n)=>{if(!Ue(e))return R(n);let a=ia(t,r,"reduce"),i=n;
for(let o=0;o<e.length;o++){let s=a([i,e[o],o]);if(D(s))return s;i=s.right}return R(i)},sc=(e,t,r,n,a,i)=>{if(!Ue(e))return R(
i);let o=ia(t,r,n);for(let s=0;s<e.length;s++){let l=e[s],c=o([l,s]);if(D(c))return c;let u=a(!!c.right,l,s);if(u)return R(
u.value)}return R(i)},c$=(e,t,r)=>sc(e,t,r,"every",n=>n?void 0:{value:!1},!0),u$=(e,t,r)=>sc(e,t,r,"some",n=>n?{value:!0}:
void 0,!1),d$=(e,t,r)=>sc(e,t,r,"find",(n,a)=>n?{value:a}:void 0,void 0),p$=(e,t,r)=>sc(e,t,r,"findIndex",(n,a,i)=>n?{value:i}:
void 0,-1),sb=(e,t,r)=>{if(e){if(Ml(e)&&Lt(e.value)){let n=e.value;return([a])=>R(rt(a)?a[n]:void 0)}return ia(e,t,r)}},
f$=(e,t,r)=>{if(!Ue(e))return R(0);if(!t)return R(e.length);let n=ia(t,r,"count"),a=0;for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(D(o))return o;o.right&&a++}return R(a)},h$=(e,t,r)=>{var n;let a=sb(t,r,"groupBy");if(!Ue(e)||!a)return R({});
let i={};for(let o=0;o<e.length;o++){let s=a([e[o],o]);if(D(s))return s;if(s.right==null)continue;let l=dt(s.right);((n=
i[l])!=null?n:i[l]=[]).push(e[o])}return R(i)},m$=(e,t,r)=>{if(!Ue(e))return R(0);let n=sb(t,r,"sumBy"),a=0;for(let i=0;i<
e.length;i++){let o=n?n([e[i],i]):R(e[i]);if(D(o))return o;o.right!=null&&(a+=Number(o.right))}return R(a)},g$=(e,t,r)=>{
let n=Number(e);if(!Un(n)||isNaN(n)||n<0)return R([]);let a=ia(t,r,"times"),i=[];for(let o=0;o<n;o++){let s=a([o],{it:o});
if(D(s))return s;i.push(s.right)}return R(i)},lb=new Map([["forEach",o$],["filter",s$],["map",l$],["times",g$],["every",
c$],["some",u$],["find",d$],["findIndex",p$],["count",f$],["groupBy",h$],["sumBy",m$]]),y$=new Set(lb.values()),oy=e=>typeof e==
"function"&&y$.has(e);var cb=(e,t={},r)=>{let n=Ap(e);if(D(n))return n;let a=db(t);return r!==void 0&&(a.thisContext=r),le(n.right,a,cn)},v$=(e,t={},r)=>Ge(
cb(e,t,r)),cn={memberLookupContexts:[],isCall:!1},b$=(e,t)=>({...e,memberLookupContexts:[t,...e.memberLookupContexts]}),
di=(e,t)=>({...e,isCall:t}),w$=e=>{let t=E$[e];return t||(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},T$=e=>{let t=x$[e];return t||
(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},Rp=(e,t)=>ar(e)&&ar(t)?e.equals(t):e===t,k$=(e,t)=>!Rp(e,t),Ip=(e,t)=>e==null&&t==
null?!0:Rp(e,t),S$=(e,t)=>!Ip(e,t),Al=(e,t)=>e!=null&&t!=null,E$={"+":(e,t)=>ar(e)&&Un(t)?e.add({days:t}):Un(e)&&ar(t)?t.
add({days:e}):Lt(e)||Lt(t)?(e==null?"":String(e))+(t==null?"":String(t)):ar(e)||ar(t)?String(e)+String(t):Number(e)+Number(
t),"-":(e,t)=>ar(e)&&Un(t)?e.subtract({days:t}):ar(e)&&ar(t)?e.since(t).total("days"):Number(e)-Number(t),"*":(e,t)=>Number(
e)*Number(t),"/":(e,t)=>Number(e)/Number(t),"%":(e,t)=>Number(e)%Number(t),"==":Ip,"===":Rp,"!=":S$,"!==":k$,">":(e,t)=>Al(
e,t)&&Qn(e,t)>0,">=":(e,t)=>Al(e,t)&&Qn(e,t)>=0,"<":(e,t)=>Al(e,t)&&Qn(e,t)<0,"<=":(e,t)=>Al(e,t)&&Qn(e,t)<=0},x$={"-":e=>-Number(
e),"!":e=>!e,"@":e=>e},_$=e=>{let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.
imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}},sy=e=>Ue(e)?e.map(dt):e==null?[]:[dt(e)],ub=e=>e==null?"":Kv(e)?e.html:
Ue(e)?e.map(ub).join(""):Sp(dt(e)),ly=e=>(e.length===1&&Ue(e[0])?e[0]:e).filter(r=>r!=null).map(Number),Sd=(e,t)=>{if(is(
e))return(...r)=>{let n=os(e,r);if(D(n))throw new Error(n.left.message);return n.right};if(t&&typeof e=="string"&&e.length>
0)return r=>rt(r)?r[e]:void 0},$l=e=>rt(e)?Object.entries(e):Ue(e)?e.flatMap((t,r)=>t==null?[]:[[String(r),t]]):[],Bl={if:(e,t,r)=>e?
t:r,and:(...e)=>e.every(t=>t),or:(...e)=>e.some(t=>t),length:e=>Lt(e)||Ue(e)?e.length:0,sum:e=>Ue(e)?e.reduce((t,r)=>t+Number(
r),0):0,avg:e=>!Ue(e)||e.length===0?0:e.reduce((r,n)=>r+Number(n),0)/e.length,min:(...e)=>{let t=ly(e);return t.length===
0?void 0:Math.min(...t)},max:(...e)=>{let t=ly(e);return t.length===0?void 0:Math.max(...t)},first:e=>Ue(e)?e[0]:void 0,
last:e=>Ue(e)&&e.length>0?e[e.length-1]:void 0,flatten:e=>Ue(e)?e.flat(1):[],clamp:(e,t,r)=>{if(e==null)return;let n=Number(
e);return t!=null&&(n=Math.max(n,Number(t))),r!=null&&(n=Math.min(n,Number(r))),n},split:(e,t)=>Lt(e)?t===void 0?[e]:e.split(
String(t)):[],join:(e,t)=>{if(!Ue(e))return"";let r=t!==void 0?String(t):",";return e.map(String).join(r)},upper:e=>dt(e).
toUpperCase(),lower:e=>dt(e).toLowerCase(),concat:(...e)=>e.reduce((t,r)=>Ue(r)?t.concat(r):t,[]),today:IE,dateFrom:e=>{
try{return OE(dt(e))}catch{return`<<INVALID_DATE: ${e}>>`}},dateCompare:(e,t)=>CE(e,t),formatDate:(e,t)=>{try{return PE.
is(t)?DE(e,t):Rd(e)}catch{return`<<INVALID_DATE: ${e}>>`}},formatPeriod:(e,t)=>LE(e,t),generateId:(e,t)=>UA({length:Number(
e),seed:Un(t)?Number(t):void 0}),regex:(e,t)=>new RegExp(String(e),t?String(t):void 0),fuzzyMatch:(e,t)=>IA(dt(e),dt(t)),
toJson:(e,t)=>{let r=t!==void 0?Number(t):void 0;return JSON.stringify(e,null,r)},dodgy:e=>{throw new Error("dodgy funct\
ion failed!!")},rand:e=>{let t=Number(e);return!Un(t)||isNaN(t)||t<=0?0:Math.floor(Math.random()*t)},floor:e=>Math.floor(
Number(e)),ceil:e=>Math.ceil(Number(e)),round:e=>Math.round(Number(e)),abs:e=>Math.abs(Number(e)),uniq:(e,t)=>{if(!Ue(e))
return[];let r=t!==void 0?e.map(n=>rt(n)?n[String(t)]:void 0):e;return[...new Set(r)].filter(n=>n!==void 0)},sort:(e,t,r)=>{
if(!Ue(e))return[];let n=typeof t=="string"&&t.length>0,a=s=>n&&rt(s)?s[t]:s,i=e.every(s=>typeof a(s)=="number"),o=r?-1:
1;return[...e].sort((s,l)=>{let c=a(s),u=a(l),d=i?c-u:String(c).localeCompare(String(u));return o*d})},shuffle:(e,t)=>{if(!Ue(
e))return[];let r=_$(Number(t)),n=[...e];for(let a=n.length-1;a>0;a--){let i=Math.floor(r()*(a+1));[n[a],n[i]]=[n[i],n[a]]}
return n},handRank:e=>zA(e),replace:(e,t,r)=>{let n=e==null?"":dt(e);if(t==null)return n;let a=r==null?"":dt(r);return n.
split(dt(t)).join(a)},omit:(e,t)=>{if(!rt(e))return{};let r=new Set(sy(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>!r.has(n)))},pick:(e,t)=>{if(!rt(e))return{};let r=new Set(sy(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>r.has(n)))},toMap:(e,t,r)=>{var n;if(!Ue(e))return{};let a=Sd(t,!0);if(!a)return{};let i=(n=Sd(r,!0))!=null?n:s=>s,
o={};return e.forEach((s,l)=>{let c=a(s,l);c!=null&&(o[dt(c)]=i(s,l))}),o},keys:e=>$l(e).map(([t])=>t),values:e=>$l(e).map(
([,t])=>t),entries:e=>$l(e),mapValues:(e,t)=>{let r=Sd(t,!1);return r?Object.fromEntries($l(e).map(([n,a])=>[n,r(a,n)])):
{}},escapeHtml:e=>Sp(e==null?"":dt(e)),html:(e,...t)=>{let r=Ue(e)?e.map(dt):[dt(e)],n="";for(let a=0;a<r.length;a++)n+=
r[a],a<t.length&&(n+=ub(t[a]));return new Yo(n)},progressBar:(e,t)=>new Yo(QA(e,t)),progressRing:(e,t)=>new Yo(e$(e,t)),
sparkline:(e,t)=>new Yo(t$(e,t)),safeCssColor:(e,t)=>XA(e,t),urlEncode:e=>encodeURIComponent(e==null?"":dt(e)),now:()=>new Date().
toISOString().slice(0,19)+"Z",nextOccurrence:FE,byId:()=>{}},A$={forEach:!0,filter:!0,map:!0,reduce:!0,times:!0,every:!0,
some:!0,find:!0,findIndex:!0,count:!0,groupBy:!0,sumBy:!0},$$=new Set([...Object.keys(Bl),...Object.keys(A$)]),tL=new Set(
Object.keys(Bl).filter(e=>!ib.has(e))),Op=e=>typeof e=="function"?e:t=>e[t],lc=(e,t)=>(r,n)=>Object.prototype.hasOwnProperty.
call(t,r)?t[r]:e(r,n),db=e=>{let t={},r=lc(Op(e),t),n=n$();return{dc:r,setter:(i,o)=>{t[i]=o,tb(n)},memo:n}},R$=async(e,t,r)=>{
let n=Ap(e);if(D(n))return n;let a=db(t);return a.asyncHosts=r.asyncHosts,a.syncHosts=r.syncHosts,pi(n.right,a)},pi=async(e,t)=>{
var r;if(jl(e)&&e.operator===";"){let n=await pi(e.left,t);return D(n)?n:pi(e.right,t)}if(jl(e)&&e.operator==="="){let n=await pi(
e.right,t);if(D(n))return n;let a=Ge(n),i=ab(e.left,a,t,cn);return D(i)?i:R(a)}if(Tv(e)){if((r=t.letBound)!=null&&r.has(
e.id))return Pe(Tt(`Cannot redeclare let binding '${e.id}'`,e));let n=await pi(e.init,t);if(D(n))return n;let a=Ge(n);return e.
body?pi(e.body,ob(t,e.id,a)):R(a)}if(Ql(e)&&Ar(e.callee)&&t.asyncHosts&&e.callee.name in t.asyncHosts){let n=e.callee.name;
for(let i of e.arguments)if(Hl(i,t.asyncHosts))return Pe(Tt(`Async host call '${n}' has an argument that itself contains\
 an async host call. Async host calls must appear at statement top-level or as the RHS of an assignment, not nested insi\
de other expressions. Bind the inner result to a variable first.`,e));let a=[];for(let i of e.arguments){let o=le(i,t,cn);
if(D(o))return o;a.push(Ge(o))}try{let i=await t.asyncHosts[n](...a);return R(i)}catch(i){let o=i instanceof Error?i.message:
String(i);return Pe(Tt(`Error invoking async host '${n}': ${o}`,e))}}return t.asyncHosts&&Hl(e,t.asyncHosts)?Pe(Tt("Asyn\
c host call appears nested inside another expression. Async host calls must appear at statement top-level or as the RHS \
of an assignment. Bind the inner result to a variable first.",e)):le(e,t,cn)},I$=new Set(["parent"]),Hl=(e,t)=>{if(Ql(e)&&
Ar(e.callee)&&e.callee.name in t)return!0;for(let r of Object.keys(e)){if(I$.has(r))continue;let n=e[r];if(cy(n)){if(Hl(
n,t))return!0}else if(Array.isArray(n)){for(let a of n)if(cy(a)&&Hl(a,t))return!0}}return!1},cy=e=>typeof e=="object"&&e!==
null&&typeof e.type=="string";var O$=(e,t)=>{var r;let n=new Map;for(let i of e){let o=t.get(i);if(!o)continue;let s=n.get(o.y);s?s.add(o.x):n.set(o.y,
new Set([o.x]))}let a=[];for(let i of[...n.keys()].sort((o,s)=>o-s)){let o=[...(r=n.get(i))!=null?r:[]].sort((c,u)=>c-u),
s=o[0],l=o[0];for(let c of o.slice(1)){if(c===l+1){l=c;continue}a.push({y:i,startCol:s,span:l-s+1}),s=c,l=c}o.length>0&&
a.push({y:i,startCol:s,span:l-s+1})}return a},C$=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)if(e.has(r))return!1;
return!0},uy=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)e.add(r)},N$=(e,t)=>{let r=e.get(t.y);r||(r=[],e.set(
t.y,r));for(let a=0;a<r.length;a+=1)if(C$(r[a],t))return uy(r[a],t),a;let n=new Set;return uy(n,t),r.push(n),r.length-1},
P$=(e,t)=>{let r=new Map;for(let i of t)r.set(i.index,{x:i.x,y:i.y});let n=new Map,a=[];for(let i of e)for(let o of O$(i.
slots,r))a.push({recordKey:i.recordKey,...o,lane:N$(n,o)});return a};var D$=e=>e,pb=k(D$,e=>e.objects),fb=k(pb,e=>Fn(e,t=>t.type)),M$=k(pb,e=>Kc(Fn(e,t=>t.type),t=>bt(t,r=>r.id)));var Ld="__span",Ud=e=>{if(typeof e!="object"||e===null)return;let t=e[Ld];if(!(typeof t!="object"||t===null))return t},j$=/^\d{4}-\d{2}-\d{2}([T ]|$)/,
cc=e=>{if(!(!e?.startField||!e?.axis))return{startField:e.startField,axis:e.axis,endField:e.endField,mode:e.mode==="once"?
"once":e.mode==="grid"?"grid":"repeat",slots:e.slots}},vi=(e,t)=>ar(e)&&!ar(t)?Qn(e,dy(t)):ar(t)&&!ar(e)?Qn(dy(e),t):Qn(
e,t),dy=e=>{if(typeof e!="string"||!j$.test(e))return e;try{return Ve.PlainDate.from(e)}catch{return e}},py=(e,t)=>{let r=e[t.
startField];if(r==null||r==="")return;let n=t.endField?e[t.endField]:void 0;return n!=null&&n!==""?vi(n,r)<0?{start:r,end:r}:
{start:r,end:n}:{start:r,end:r}},Cp=(e,t)=>vi(e.start,t)<=0&&vi(e.end,t)>=0,L$=(e,t)=>vi(e.start,t)===0,U$=(e,t,r)=>r===
"once"?L$(e,t):Cp(e,t),F$=(e,t)=>{let r=vi(e.start,t)===0,n=vi(e.end,t)===0;return r&&n?"single":r?"start":n?"end":"midd\
le"},B$=(e,t,r)=>{let{dataType:n,sort:a,whereClause:i,scope:o,source:s,span:l}=t,c=fb(e)[n]||[];(o==="user"||o==="global")&&
s==="storage"&&(c=c.filter(y=>y._scope===o));let u=H$(c,cc(l),r),d=W$(u,i,r);if(!a)return d;let f=(Array.isArray(a)?a:[a]).
filter(y=>typeof y.field=="string"&&y.field.length>0);return f.length===0?d:[...d].sort((y,b)=>{for(let T of f){let S=y[T.
field],E=b[T.field],_=S==null,O=E==null;if(_&&O)continue;if(_)return 1;if(O)return-1;let M=T.direction==="desc"?-1:1,W=Qn(
S,E);if(W!==0)return M*W}return 0})},H$=(e,t,r)=>{if(!t)return e;if(t.mode==="grid"){let o=[];for(let s of e){let l=py(s,
t);l&&o.push({...s,[Ld]:{start:l.start,end:l.end}})}return o}let n=r(t.axis,{});if(!xe(n)||n.right===void 0)return[];let a=n.
right,i=[];for(let o of e){let s=py(o,t);s&&U$(s,a,t.mode)&&i.push({...o,[Ld]:{start:s.start,end:s.end,position:F$(s,a)}})}
return i},W$=(e,t,r)=>t?e.filter(n=>{let a=r(t,n);return xe(a)&&!!a.right}):e,Gr=k(V,H,(e,t)=>{let{scope:r,isIteration:n,
node:a}=t,{parent:i}=r,o=jv(e.def,a);if(o)return n&&i?H(e,_r([i.key,Cn(i.node,a)])):o.isRepeating?H(e,`${r.key}`):H(e,_r(
[r.key,Cn(r.node,o)]))}),q$=xi(Jr.unknown,"compute"),V$=xi(Jr.union([Jr.number,Jr.undefined]),"maxLength"),fy=xi(Jr.union(
[Jr.number,Jr.undefined]),"pageSize"),Go=(e,t,r,n)=>{let a=r.isFormula?n(e,r.value,t.key):R(r.value);return ic(a,r.targetCodec,
r.name)},Y$=e=>{let t=k(V,vA,H,(a,i,o)=>{let{node:s,scope:l}=o,c=s.data;if(Dl(c))if(o.isIteration){let d=Gr(a,o.key);if(d){
let f=r(a,d.key);if(xe(f)&&Array.isArray(f.right))return R(f.right[l.index])}}else return R(B$(i,c,(f,h)=>e(a,f,l.key,h)));
let u=q$(s);return Go(a,o,u,e)}),r=k(V,H,(a,i)=>{let{key:o}=i;if(i.node.type===na)return R(i.node.value);let l=yi(a)[o];
return l?R(l?.value):t(a,i.key)}),n=k(V,H,ac,(a,i,o)=>{var s;let{key:l,node:c}=i,u=(s=o[l])==null?void 0:s.length,d=V$(c),
f=Ge(Go(a,i,d,e)),h=c.data;if(Dl(h)){let T=r(a,i.key);if(xe(T)&&Array.isArray(T.right)){let S=T.right.length,E=f!==void 0?
Math.min(S,f):S,_=fy(c),O=Ge(Go(a,i,_,e));return R(u!==void 0?Math.min(E,u):O!==void 0?Math.min(E,O):E)}}let y=fy(c),b=Ge(
Go(a,i,y,e));if(b!==void 0){if(u!==void 0){let T=f!==void 0?Math.min(u,f):u;return R(T)}return R(b)}return R(u!==void 0?
u:f??0)});return{selectValue:r,selectLength:n,selectComputedValue:t}},z$=new Set(["rand","generateId","today","dodgy","b\
yId","now"]),hy=new Set(Object.keys(Ep)),K$=new Set(["includes","indexOf","lastIndexOf","slice","join","concat","split",
"toLowerCase","toUpperCase","trim","startsWith","endsWith","replace","replaceAll","substring","charAt","padStart","padEn\
d","repeat","toFixed","localeCompare"]),nr=e=>typeof e=="object"&&e!==null&&"type"in e&&typeof e.type=="string",G$=e=>{if(typeof e==
"string")return e.startsWith("@")?e.slice(1).trim():e},J$=e=>(typeof e=="string"?e:"").split(",").map(r=>r.trim()).filter(
Boolean),hb=e=>{let t=e.params;return Array.isArray(t)?t.filter(nr).filter(r=>r.type==="Identifier"&&typeof r.name=="str\
ing").map(r=>r.name):[]},my=(e,t)=>{var r;return nr(t)&&t.type==="ArrowFunctionExpression"?hb(t):(r=Ep[e])!=null?r:[]},Z$=(e,t,r,n=new Set)=>{
let a=new Set,i;try{i=de(e)}catch{return{selfSafe:!1,deps:a}}let o=!0,s=()=>{o=!1},l=(u,d)=>{d.has(u)||u!=="$data"&&(n.has(
u)||s())},c=(u,d)=>{if(o){if(Array.isArray(u)){for(let f of u)c(f,d);return}if(nr(u))switch(u.type){case"Literal":return;case"\
Identifier":{typeof u.name=="string"&&l(u.name,d);return}case"ThisExpression":s();return;case"TaggedTemplateExpression":{
let f=u.tag;if(!(nr(f)&&f.type==="Identifier"&&f.name==="html"&&!d.has("html")&&!r.has("html"))){s();return}let y=u.quasi,
b=nr(y)?y.expressions:void 0;if(Array.isArray(b))for(let T of b)c(T,d);return}case"BinaryExpression":{let f=u.operator;if(f===
";"||f==="="){s();return}c(u.left,d),c(u.right,d);return}case"UnaryExpression":c(u.argument,d);return;case"ConditionalEx\
pression":c(u.test,d),c(u.consequent,d),c(u.alternate,d);return;case"MatchExpression":{let f=u.scrutinee;f!==void 0&&c(f,
d);let h=u.arms;if(!Array.isArray(h))return;for(let y of h){if(!nr(y))continue;let b=y.test;nr(b)&&b.type==="Identifier"&&
b.name==="_"||c(b,d),c(y.consequent,d)}return}case"MemberExpression":{c(u.object,d),u.computed&&c(u.property,d);return}case"\
ArrayExpression":{let f=u.elements;if(Array.isArray(f))for(let h of f)h!==null&&(nr(h)&&h.type==="SpreadElement"?c(h.argument,
d):c(h,d));return}case"ObjectExpression":{let f=u.properties;if(!Array.isArray(f))return;for(let h of f){if(!nr(h))continue;
if(h.type==="SpreadElement"){c(h.argument,d);continue}let y=!!h.computed,b=h.key;if(y&&c(b,d),h.shorthand){nr(b)&&b.type===
"Identifier"&&typeof b.name=="string"&&l(b.name,d);continue}c(h.value,d)}return}case"TemplateLiteral":{let{expressions:f}=u;
if(Array.isArray(f))for(let h of f)c(h,d);return}case"LetExpression":{let f=u.id;c(u.init,d);let h=u.body;h!==void 0&&c(
h,typeof f=="string"?new Set([...d,f]):d);return}case"ArrowFunctionExpression":c(u.body,new Set([...d,...hb(u)]));return;case"\
CallExpression":{let f=u.callee,h=u.arguments,y=Array.isArray(h)?h:[];if(nr(f)&&f.type==="Identifier"){let b=typeof f.name==
"string"?f.name:"";if(d.has(b)){s();return}if(hy.has(b)){y.forEach((T,S)=>{if(S===1){let E=new Set([...d,...my(b,T)]),_=nr(
T)&&T.type==="ArrowFunctionExpression"?T.body:T;c(_,E)}else c(T,d)});return}if(r.has(b))a.add(b);else if(!$$.has(b)||z$.
has(b)){s();return}for(let T of y)c(T,d);return}if(nr(f)&&f.type==="MemberExpression"){if(f.computed){s();return}let b=f.
property,T=nr(b)&&typeof b.name=="string"?b.name:"";if(c(f.object,d),hy.has(T)){y.forEach((S,E)=>{if(E===0){let _=new Set(
[...d,...my(T,S)]),O=nr(S)&&S.type==="ArrowFunctionExpression"?S.body:S;c(O,_)}else c(S,d)});return}if(!K$.has(T)){s();return}
for(let S of y)c(S,d);return}s();return}default:s();return}}};return c(i,new Set(t)),{selfSafe:o,deps:a}},X$=(e,t=new Set)=>{
let r=new Map,n=new Set;for(let l of e)r.has(l.name)&&n.add(l.name),r.set(l.name,l);let a=new Set([...r.keys()].filter(l=>!n.
has(l))),i=new Map;for(let l of a){let c=r.get(l),u=G$(c.compute);if(u===void 0){i.set(l,{selfSafe:!1,deps:new Set});continue}
i.set(l,Z$(u,J$(c.parameters),a,t))}let o=new Set,s=!0;for(;s;){s=!1;for(let[l,c]of i)o.has(l)||!c.selfSafe||[...c.deps].
every(u=>o.has(u))&&(o.add(l),s=!0)}return o},gy=new WeakMap,mb=(e,t)=>{if(e.type===ra&&t.push({name:e.name,compute:e.compute,
parameters:e.parameters}),Array.isArray(e.children))for(let r of e.children)mb(r,t)},gb=(e,t)=>{if(e.type===na&&typeof e.
name=="string"&&t.add(e.name),Array.isArray(e.children))for(let r of e.children)gb(r,t)},Q$=e=>{let t=gy.get(e);if(t)return t;
let r=[];mb(e,r);let n=new Set;gb(e,n);let a=X$(r,n);return gy.set(e,a),a},yy={objects:[]},Ed=new Set,eR=(e,t,r,n,a)=>{let i=t.
scope,o=S=>{let E=r(e,S);if(xe(E))return E.right},s=S=>{var E;if(ty(i))return;let _=_r([i.key,S]),O=(E=yi(e)[_])==null?void 0:
E.value;if(O!==void 0)return O;let M=o(i.key);if(rt(M)){let W=M;if(S in W)return W[S]}},l=()=>{let S=i;for(;S;){let E=Ud(
o(S.key));if(E)return E;S=S.parent}},c=()=>{let S=i;for(;S;){let E=Ud(o(S.key));if(E)return u(S,E);S=S.parent}},u=(S,E)=>{
var _;let O=Kr(e,S.key);if(!xe(O))return;let M=O.right,W=cc((_=M.node.data)==null?void 0:_.span);if(!W||W.mode!=="grid"||
!W.slots)return;let G;try{let Y=bd(e.def,M.node,W.slots);G=Il(e,S.key,Y).key}catch{return}let Z=n(e,G);if(!Array.isArray(
Z))return;let B={start:E.start,end:E.end},we=0;for(let Y=0;Y<Z.length;Y+=1){let te=a(e,W.axis,`${G}[${Y}]`);!xe(te)||te.
right===void 0||Cp(B,te.right)&&(we+=1)}return we},d=S=>{var E,_,O,M,W,G,Z,B,we,Y,te,_e,pe;if(S==="$index"){let ie=ty(i)?
void 0:i.index;return R(ie)}if(S==="$parentIndex")return R((E=i.parent)==null?void 0:E.index);if(S==="$scopeKey")return R(
i.key);if(S==="$state")return R(e);if(S==="$data")return R(fb((_=e.repo)!=null?_:yy));if(S==="$spanStart"||S==="$spanEnd"||
S==="$spanPosition"){let ie=l();return R(S==="$spanStart"?ie?.start:S==="$spanEnd"?ie?.end:ie?.position)}if(S==="$spanLe\
ngth")return R(c());if(S==="$rows")return R(ot=>{if(!Lt(ot))return;let lt,Ir;try{let or=bd(e.def,t.node,ot),C=Il(e,i.key,
or).key;lt=n(e,C),Ir=o(C)}catch{return}if(Array.isArray(lt))return lt.map((or,C)=>{let ae=Array.isArray(Ir)?Ir[C]:void 0;
return rt(ae)&&rt(or)?{...ae,...or}:or??ae})});if(S==="$args")return R((O=vp(e))!=null?O:{});if(S==="$speech"){let ie=xr(
e),ot=ie?.speech;return R(ot??{text:null,lang:null})}if(S==="$variant"){let ie=xr(e);return R(ie?.variant)}return S==="$\
now"?R((M=xr(e))==null?void 0:M.now):S==="$email"?R((W=xr(e))==null?void 0:W.$email):S==="$username"?R((G=xr(e))==null?void 0:
G.$username):S==="$userKey"?R((Z=xr(e))==null?void 0:Z.$userKey):S==="$authKind"?R((B=xr(e))==null?void 0:B.$authKind):S===
"$authUid"?R((we=xr(e))==null?void 0:we.$authUid):S==="$connections"?R((Y=xr(e))==null?void 0:Y.$connections):S==="$soci\
al"?R((te=xr(e))==null?void 0:te.$social):S==="$isOrgAdmin"?R((_e=xr(e))==null?void 0:_e.$isOrgAdmin):S==="$orgUser"?R((pe=
xr(e))==null?void 0:pe.$orgUser):Pe("not_resolved")},f=S=>{let E=xr(e),_=E?.[S];return _!==void 0?R(_):Pe("not_resolved")},
h=(S,E,_)=>{var O,M,W;if(Ed.has(_)){let Z=(O=yi(e)[_])==null?void 0:O.value;return Z!==void 0?Z:s(S)}Ed.add(_);try{let G=Kr(
e,_);if(D(G))return s(S);let{key:Z,node:B}=G.right;if(B.type===ra&&E.isCall)return{__orgFunction:!0,compute:B.compute,parameters:B.
parameters,key:Z,memoSafe:Q$(e.def).has(B.name)};let we=o(Z);if(pp(B)){let{memberLookupContexts:Y}=E,_e=(B.isRepeating?((M=
Y[0])==null?void 0:M.type)==="computed":((W=Y[0])==null?void 0:W.type)!=="computed")?Y.map(ie=>ie.property):void 0,pe=n(
e,Z,_e);return we===void 0?pe:Array.isArray(we)&&Array.isArray(pe)?we.map((ie,ot)=>{let lt=pe[ot];return rt(lt)&&rt(ie)?
{...lt,...ie}:ie??lt}):rt(we)&&rt(pe)?{...pe,...we}:we}else if(we===void 0){let Y=s(S);if(Y!==void 0)return Y}return we}finally{
Ed.delete(_)}},y=(S,E,_=i)=>{var O;return(O=b(S,E,_))==null?void 0:O.value},b=(S,E,_)=>{let{key:O,isDeclared:M}=Il(e,_.key,
S),W=G=>{var Z;return(Z=yi(e)[G])==null?void 0:Z.value};if(M){let G=h(S,E,O);if(G!==void 0)return{value:G,isStored:W(O)!==
void 0}}else if(_.parent){let G=W(O);if(G!==void 0)return{value:G,isStored:!0};let Z=b(S,E,_.parent);if(Z?.isStored)return Z;
let B=h(S,E,O);if(B!==void 0)return{value:B,isStored:!1};if(Z!==void 0)return Z}else{let G=h(S,E,O);if(G!==void 0)return{
value:G,isStored:W(O)!==void 0}}},T=(S,E)=>{var _,O;return!Lt(S)||!Lt(E)||(O=M$((_=e.repo)!=null?_:yy)[S])==null?void 0:
O[E]};return(S,E)=>{let _=d(S);if(xe(_))return _.right;let O=f(S);if(xe(O))return O.right;let M=bd(e.def,t.node,S),W=y(M,
E);if(W!==void 0)return W;if(S==="byId")return T}},tR=e=>{let t=o=>o.type===mr&&o.isRepeating?[o]:[],r=o=>ms(o).concat(t(
o)),n=k(H,o=>r(o.node)),a=k(V,H,(o,s)=>{if(s.node.isOwnScope)return[H(o,`${s.key}[0]`)];let l=Ge(e(o,s.key));return Yc(l,
c=>H(o,`${s.key}[${c}]`))}),i=k(V,H,(o,s)=>n(o,s.key).map(l=>{let c=Cn(o.def,l);return H(o,`${s.scope.key}.${c}`)}));return{
selectChildIterationPointers:a,selectChildNodePointers:i}},uc=e=>!!(e.node.isRepeating&&!e.isIteration),Np=e=>e.node.type===
mr?e.node:{nodeTypes:{},rootType:""},yb=e=>fp(e.node)&&!e.isIteration,rR=e=>!!e.node.isOwnScope&&!e.isIteration,vb=e=>{let{
isIteration:t,node:r}=e;return t&&r.type===mr},pn=e=>e.node.type===mr&&e.scope.node!==e.node,Ia=e=>pn(e)||vb(e),nR=e=>eA(
e.node.type),aR=e=>{let{key:t,node:r}=e;return pn(e)?t:`${t}.${r.name}`},vy=e=>aA(e.node)&&!e.isIteration,iR=e=>typeof e==
"object"&&e!==null&&!Array.isArray(e),by=e=>!(!pp(e.node)||e.node.isRepeating||e.node.isOwnScope),oR=(e,t,r)=>{let n=(l,c,u,d=[])=>{
var f;let{key:h,node:y}=c,b=d.length?d.slice(1):[];if(!y.isTransient){if(Nv(y)){let T=e(l,h);return xe(T)?T.right:void 0}
if(yb(c)&&!u){if(c.node.isOwnScope){let T=a(l,H(l,`${h}[0]`),d);return d.length===0&&Object.keys(T).length===0?void 0:T}
if(d.length&&/^\d+$/.test(d[0])){let T=d[0],S=H(l,`${h}[${T}]`),E=a(l,S,b);return{[T]:E}}else if(c.node.isRecord){let T=(f=
c.node.recordKey)!=null?f:"key",S=typeof c.node.recordValue=="string"?c.node.recordValue:void 0,E=t(l,h);return S!==void 0&&
E.length===0?void 0:E.reduce((_,O)=>{let{[T]:M,...W}=a(l,O,b);if(typeof M!="string")return _;if(S===void 0)return _[M]=W,
_;let G=W[S];return G!==void 0&&(_[M]=G),_},{})}else return t(l,h).map(S=>a(l,S,b))}return a(l,c,d)}},a=(l,c,u)=>{let d={},
f=u.length?u.slice(1):[],h=(b,T)=>{let{node:S}=b,{name:E}=S,_=pn(b)&&c.node!==b.node,O=n(l,b,_,T);O!==void 0&&(by(b)?Object.
assign(d,O):d[E]=O)},y=r(l,c.key);return u.length?(y.forEach(b=>{b.node.name===u[0]?h(b,f):by(b)&&h(b,u)}),d):(y.forEach(
b=>h(b,f)),d)},i=(l,c,u)=>n(l,c,pn(c),u),o=k(V,H,lA,i),s=k(V,H,(l,c)=>{let u=i(l,c);return iR(u)?u:{}});return{selectOutput:o,
selectOutputObject:s}};var sR=(e,t,r,n)=>n,$r=k(V,it,oA,sR,(e,t,r="",n)=>{let a=bb(e,r),i=n?lc(Op(a),n):a;return cb(t,i,n)}),bb=k(V,H,(e,t)=>eR(
e,t,ir,uR,(r,n,a)=>$r(r,n,a))),lR=(e,t,r,n,a)=>{let i=bb(e,t),o=a?lc(Op(i),a):i;return R$(r,o,n)},{selectValue:ir,selectComputedValue:cR,
selectLength:Ca}=Y$($r),{selectChildIterationPointers:wb,selectChildNodePointers:Tb}=tR(Ca),{selectOutput:uR,selectOutputObject:Pp}=oR(
ir,wb,Tb),Na=e=>k(ir,t=>ic(t,e,"value")),kb=e=>k(ir,t=>PA(t,e,"value")),dR=e=>k(cR,t=>ic(t,e,"value")),Dp=kb(U),Sb=Na(ft.union(
[ft.undefined,ft.array(ft.string)])),pR=Na(ft.union([ft.undefined,ft.array(ft.number)])),lL=kb(ft.string),fR=Na(gr),Eb=Na(
Ie),hR=Na(ft.union([ft.undefined,On])),mR=dR(ft.union([ft.undefined,On])),gR=Na(ft.union([ft.undefined,zl])),Mp=Na(Kx),yR=(e,t,r,n)=>ic(
$r(e,r,t.scope.key),n,r),$t=k(V,H,(e,t)=>yb(t)?wb(e,t.key):Tb(e,t.key)),xb=k(V,H,(e,t)=>{let r=rR(t)?`${t.key}[0]`:t.key;
return $t(e,r)}),vs=k(V,Gr,cA,(e,t,r=Jo)=>{if(t)return r?.(t)?t:vs(e,t.key,r)}),uL=k(V,H,Gr,(e,t,r)=>r?$t(e,r.key):[t]),
_b=k(V,H,wp,(e,t,r)=>{if(t.key===r.key)return!0;let n=Gr(e,r.key);return n?_b(e,t.key,n.key):!1}),x=(e,t,r)=>{let n=xi(e,
t,r),a=k($A,vR.has(t)?i=>bR(n(i)):n);return k(V,H,a,(i,o,s)=>Go(i,o,s,$r))},vR=new Set(["htmlTemplate"]),bR=e=>!e.isFormula&&
Ab.string.is(e.value)&&Ev(e.value)?{name:e.name,isFormula:!0,value:sp(lp(e.value)),targetCodec:e.targetCodec}:e,wR=x(bs.string,
"label",e=>Iv(e.name)),TR=x(bs.unknown,"iterationLabel"),kR=k(V,H,TR,(e,t,r)=>{let{node:n}=t;if(D(r))return r;let a=r.right;
if(a!=null&&a!=="")return R(String(a));let i=hA(n);return yR(e,t,i,bs.string)}),jp=k(V,H,(e,t)=>{let{key:r,isIteration:n}=t;
return n?kR(e,r):wR(e,r)}),SR=(...e)=>t=>e.every(r=>r(t)),xd=(e,t)=>e===t?e:SR(e,t),$b=(e,t)=>({direction:e.direction,include:xd(
e.include,t.include),traverseChildren:xd(e.traverseChildren,t.traverseChildren),traverseParent:xd(e.traverseParent,t.traverseParent)}),
Rb=e=>(t,r)=>{let n=Gr(t,r.key);if(!n)return;let a=$t(t,n.key),i=a.indexOf(r);if(i===-1)return;let s=a[i+(e==="back"?-1:
1)];if(s)return s},ER=Rb("forward"),xR=Rb("back"),Ib=(e,t,r)=>{if(!r.traverseChildren(t))return t;let n=$t(e,t.key),a=Us(
n);return a?Ib(e,a,r):t},_R=(e,t,r)=>{let n=xR(e,t);return n?Ib(e,n,r):Gr(e,t.key)},Ob=(e,t,r)=>{let n=ER(e,t);if(n)return n;
let a=Gr(e,t.key);if(a&&r.traverseParent(a))return Ob(e,a,r)},Cb=k(V,H,Dv,(e,t,r=ec)=>_R(e,t,r)),Lp=k(V,H,Dv,(e,t,r=ec)=>{
if(r.traverseChildren(t)){let n=$t(e,t.key);if(n.length>0)return n[0]}return Ob(e,t,r)}),bi=e=>{let{node:t}=e;switch(t.type){case"\
screen":return!0;default:return!1}},AR=k(V,e=>$t(e,"").filter(bi)),ws=(e,t,r)=>{let n=r.direction==="back"?Cb(e,t,r):Lp(
e,t,r);if(n)return r.include(n)?n:ws(e,n.key,r)},Nb=(e,t,r)=>{let n=[],a=t;for(;a!==void 0;){let i=r.direction==="back"?
Cb(e,a,r):Lp(e,a,r);if(!i)break;r.include(i)&&n.push(i),a=i.key}return n},dc=e=>k(V,it,(t,r)=>ws(t,r,e)),hL=dc(Pn({include:bi,
direction:"back"})),$R=dc(Pn({include:bi,direction:"forward"})),RR=k(V,it,(e,t)=>{let r=vs(e,t,bi);if(!r){let n=Lp(e,"",
ec);return n||Tp(e)}return r}),Pb=k(V,yp,(e,t)=>{let r=Kr(e,t);return D(r)?(console.warn(`[orgicore] cursor "${t}" does \
not resolve in the current app def \u2014 falling back to the home screen (${r.left}).`),Tp(e)):r.right}),Up=k(V,Pb,(e,t)=>{
if(bi(t))return t;let r=vs(e,t.key,bi);return r||$R(e,t.key)||Tp(e)}),mL=k(gp,e=>Us(e)),IR=k(V,Up,(e,t)=>RR(e,t.key).key),
OR=e=>Pn({traverseParent:t=>e!==t}),CR=k(H,OR),NR=k(CR,e=>$b(e,Pn({include:nR}))),PR=x(Hy,"variant","basic"),DR=x(qx,"va\
riant"),MR=x(gr,"pageSize"),jR=x(gr,"maxLength"),Db=x(Ie,"required"),LR=x(Ie,"hidden"),UR=x(ue(Vl),"size"),FR=x(ue(ln(tp)),
"validation"),BR=x(ue(ep),"imageOutputOptions"),HR=x(U,"pluginName"),Mb={maxColumns:1},WR=x(Jd,"layout",Mb),Pa=k(H,LR,(e,t)=>{
let{node:{type:r}}=e;return(r===Si||r===ra||r===na)&&xe(t)&&t.right===void 0?R(!0):t}),qR=k(H,WR,(e,t)=>e.isIteration?R(
Mb):t),VR=x(Jy,"formConfig"),bL=x(Xd,"containerStyle",Py),wL=x(Ti,"data",Py),YR=x(ue(Ai.array(ql)),"pluginParams"),$i=k(
jp,Pa,(e,t)=>({label:e,hidden:t})),Fp=k(ir,Db,(e,t)=>D(t)?t:D(e)?R(!1):R(!!t.right&&jb(e.right))),Bp=k(V,H,FR,ir,(e,t,r,n)=>{
if(D(r))return r;if(D(n)||jb(n.right))return R(void 0);let a=JE(r.right);for(let i of a){let o=$r(e,i.expression,t.scope.
key);if(D(o))return Pe(`error evaluating validation rule "${i.expression}": ${o.left}`);if(!o.right)return R(zR(e,i.errorMessage,
t.scope.key))}return R(void 0)}),zR=(e,t,r)=>{if(!t.startsWith($a))return t;let n=sp(t),a=$r(e,n,r);return D(a)||a.right==
null||a.right===""?n:String(a.right)},KR=x(U,"help"),GR=x(U,"placeholder"),JR=x(U,"deepHelp"),ZR=x(ue(Ai.array(Ai.string)),
"examples"),XR=x(Ie,"aiEnabled"),jb=e=>typeof e=="string"?e.trim()==="":Array.isArray(e)?e.length===0:e==null,pc=k($i,Fp,
Db,Bp,KR,GR,JR,ZR,UR,XR,(e,t,r,n,a,i,o,s,l,c)=>({...e,missingRequired:t,required:r,errorMessage:n,help:a,placeholder:i,deepHelp:o,
examples:s,size:l,aiEnabled:c})),Lb=k(pc,pR,(e,t)=>({...e,value:t})),Ub=k(pc,Sb,(e,t)=>({...e,value:t})),Fb=k($i,hR,mR,VR,
(e,t,r,n)=>({...e,currentValue:t,computedValue:r,config:n})),QR=x(Ax,"variant","single"),eI=x(zd,"idiom","select"),tI=x(
Ai.array(Xy),"pickerValues"),rI=e=>typeof e=="string"?{id:e,label:e}:e,nI=k(tI,e=>D(e)?e:R(e.right.map(rI))),fc=k(pc,QR,
nI,(e,t,r)=>({...e,variant:t,pickerValues:r})),aI=k(fc,Dp,eI,(e,t,r)=>({...e,value:t,idiom:r})),iI=k(fc,Sb,(e,t)=>({...e,
value:t})),oI=e=>pn(e)?"":`${e.key}.`,Bb=e=>t=>`${oI(t)}${e}`,sI=Bb("value"),lI=Bb("expanded"),cI=k(H,sI),uI=k(H,lI),Hp=k(
V,cI,gR),Hb=k(V,uI,Eb),Wb=k(H,$i,Hp,Hb,(e,t,r,n)=>{let a=pn(e);return{...t,value:r,expanded:n,isRoot:R(a)}}),TL=k($i,be),
kL=k(pc,be),dI=k(Fb,be),SL=k(Lb,be),EL=k(Ub,be),xL=k(fc,be),_L=k(aI,be),AL=k(iI,be),pI=k(Wb,be),fI=k(HR,YR,(e,t)=>({name:e,
params:t})),hI=k(fI,be),$L=k(V,H,hI,(e,t,{name:r,params:n=[]})=>{let a={};for(let i of n)if(i.type==="static"&&(a[i.name]=
i.value),i.type==="dynamic"){let o=$r(e,i.formula,t.scope.key);if(D(o))return Pe(`Error evaluating plugin "${r}" param "${i.
name}": ${o.left}`);a[i.name]=o.right}return R(a)});var RL=k(V,H,MR,jR,(e,t,r,n)=>{let{node:a,key:i,isIteration:o}=t;if(o)return;let s=Ge(r),l=Ge(n);if(s===void 0)return;let c=l??
1/0,u=a.data;if(Dl(u)){let f=ir(e,i);if(xe(f)&&Array.isArray(f.right)){let h=f.right.length;c=l!==void 0?Math.min(h,l):h}}
let d=Ge(Ca(e,i));return{currentLength:d,totalLength:c,hasMore:d<c,pageSize:s}}),wi={selectAppNodeVariant:x(jx,"variant",
"folder"),selectFlowStepVariant:x(Lx,"variant","aiQuery"),selectHidden:Pa,selectLabel:jp,selectMissingRequired:Fp,selectValidationError:Bp},
IL=x(U,"name"),OL=x(U,"label"),CL=x(Ie,"isRepeating"),NL=x(Ie,"isOwnScope"),PL=x(Ie,"isRecord"),DL=x(U,"recordKey"),ML=x(
U,"recordValue"),jL=x(ce.unknown,"compute"),LL=x(Ie,"isDerived"),UL=x(Ie,"isTransient"),FL=x(gr,"maxLength"),BL=x(gr,"pa\
geSize"),mI=x(ue(Zd),"place"),gI=x(ue(Jd),"layout"),yI=x(ue(Xd),"containerStyle"),vI=x(U,"submitObjectType"),bI=x(ue(ln(
tp)),"validation"),wI=x(Ie,"required"),TI=x(U,"help"),kI=x(U,"placeholder"),HL=x(U,"deepHelp"),WL=x(ue(ce.array(ce.string)),
"examples"),SI=x(ue(Vl),"size"),EI=x(Ie,"aiEnabled"),xI=x(U,"iterationLabel"),_I=x(U,"nounLabel"),hc=x(U,"icon"),qb=x(U,
"color"),qL=x(ue(Fy),"authMode"),VL=x(Ie,"orgLogin"),YL=x(U,"appLogo"),zL=x(ue(ln(zy)),"notifications"),KL=x(ue(ln(Ky)),
"transitions"),GL=x(ue(ln(Gy)),"botActors"),JL=x(ue(Vy),"theme"),ZL=x(ue(Qd),"themeColors"),XL=x(U,"customCss"),QL=x(gr,
"contentMaxWidth"),e6=x(U,"headerLogo"),t6=x(ue(Zy),"navigation"),r6=x(ue(nv),"library"),n6=x(ue(av),"feature"),Vb=x(Ie,
"hideHeader"),a6=x(ue(By),"variant"),AI=x(Ie,"showHeader"),$I=x(Ie,"collapsible"),RI=x(Ie,"collapsedByDefault"),II=x(Ie,
"actionMenu"),OI=x(Ie,"reorderable"),CI=x(U,"orderField"),NI=x(Ie,"hideTopBar"),PI=x(Ie,"hideNav"),DI=x(U,"itemLabel"),MI=x(
U,"summary"),Yb=x(gr,"min"),zb=x(gr,"max"),jI=x(Ie,"autoAdvance"),Kb=x(U,"actionLabel"),LI=x(U,"idleTitle"),UI=x(U,"idle\
Description"),FI=x(U,"runningTitle"),BI=x(U,"runningDescription"),HI=x(U,"authTitle"),WI=x(U,"authDescription"),qI=x(U,"\
noCreditsTitle"),VI=x(U,"noCreditsDescription"),Gb=x(U,"promptTemplate"),i6=x(U,"imageSource"),Jb=x(U,"resultObjectType"),
Zb=x(U,"typeDescription"),o6=x(ue(ce.union([Yl,ce.string])),"model"),Ts=x(Ie,"mockEnabled"),YI=x(gr,"mockResultCount"),zI=x(
U,"mockResults"),KI=x(gr,"maxUserTurns"),GI=x(U,"steeringChips"),JI=x(Ie,"voiceInput"),ZI=x(Ie,"speakReplies"),XI=x(U,"s\
peechLang"),QI=x(U,"inputPlaceholder"),eO=x(U,"mockReplies"),tO=x(U,"fetchUrl"),Xb=x(U,"prompt"),rO=x(U,"mockImageUrl"),
nO=x(U,"lyrics"),aO=x(gr,"durationSec"),iO=x(U,"mockAudioUrl"),oO=x(U,"audioSourceUrl"),sO=x(U,"language"),lO=x(U,"mockT\
ranscript"),s6=x(U,"sourceExpression"),cO=x(U,"publishDataType"),uO=x(U,"publishScope"),dO=x(U,"publishVariant"),pO=x(U,
"script"),l6=x(ue(Kd),"functionName"),c6=x(U,"args"),fO=x(ue(ce.array(ce.string)),"refreshCallables"),hO=x(U,"onSuccessN\
avigate"),mO=x(U,"successMessage"),gO=x(ue(ce.record(ce.string,Qy)),"nodeTypes"),yO=x(U,"rootType"),vO=x(Ie,"canAdd"),bO=x(
Ie,"canEdit"),u6=x(ue(Vd),"textTransform"),wO=x(gr,"step"),d6=x(ue(ce.union([Yd,ce.string])),"format"),p6=x(ue(ce.union(
[zd,ce.string])),"idiom"),f6=x(U,"placeholderIcon"),TO=x(ue(ep),"imageOutputOptions"),kO=x(U,"aiSystemPromptFormula"),SO=x(
U,"userAvatarUid"),EO=x(Ie,"showCamera"),xO=x(Ie,"showFilePicker"),_O=x(Ie,"showSearch"),AO=x(Ie,"showEdit"),$O=x(Ie,"sh\
owCommit"),RO=x(Ie,"multiple"),IO=x(gr,"maxSizeMb"),OO=x(U,"htmlTemplate"),CO=x(U,"purpose"),NO=x(ue(ce.record(ce.string,
tv)),"actions"),PO=x(U,"parameters"),DO=x(U,"returns"),MO=x(U,"returnTypeHint"),h6=x(U,"pluginName"),m6=x(ue(ce.array(ql)),
"pluginParams"),g6=x(U,"roomKey"),jO=x(U,"displayName"),LO=x(U,"identity"),y6=x(ue(Gd),"mediaMode"),UO=x(ue(Yy),"display\
Mode"),FO=x(gr,"maxTiles"),BO=x(U,"focusIdentity"),HO=x(By,"variant","inline"),WO=x(ce.unknown,"imageSource"),qO=x(ue(ce.union(
[Yl,ce.string])),"model"),VO=x(ue(ce.union([Yl,ce.string])),"model"),YO=x(ue(ce.union([Ox,ce.string])),"model"),zO=x(ue(
ce.union([Rx,ce.string])),"model"),KO=x(ue(ce.union([Ix,ce.string])),"model"),GO=x(ce.unknown,"sourceExpression"),JO=x($x,
"variant","contained"),ZO=x(Kd,"functionName"),XO=x(ce.unknown,"args"),QO=x(Vl,"size","medium"),eC=x(Hy,"variant","basic"),
tC=x(Vd,"textTransform","none"),rC=x(ue(ce.union([Wy,ce.string])),"variant"),nC=x(ue(ce.union([ce.literal("checkbox"),ce.literal(
"toggle")])),"variant"),aC=x(Yd,"format","date"),iC=x(ue(ce.union([_x,ce.string])),"variant"),oC=x(ce.string,"placeholde\
rIcon","person"),sC=x(ce.string,"roomKey"),lC=x(Gd,"mediaMode","video"),Rr=k(wi.selectLabel,wi.selectHidden,mI,(e,t,r)=>({
label:e,hidden:t,place:r})),Wp=k(gI,yI,vI,(e,t,r)=>({layout:e,containerStyle:t,submitObjectType:r})),ks=k(Rr,bI,wI,TI,kI,
SI,EI,wi.selectMissingRequired,wi.selectValidationError,(e,t,r,n,a,i,o,s,l)=>({...e,validation:t,required:r,help:n,placeholder:a,
size:i,aiEnabled:o,missingRequired:s,errorMessage:l})),cC=k(xI,_I,hc,qb,(e,t,r,n)=>({iterationLabel:e,nounLabel:t,icon:r,
color:n})),mc=k(Rr,Wp,wi.selectAppNodeVariant,(e,t,r)=>({...e,...t,variant:r})),uC=k(mc,e=>({...e,variant:R("tabGroup")})),
dC=k(mc,e=>({...e,variant:R("tab")})),pC=k(mc,e=>({...e,variant:R("folder")})),v6=k(Rr,Wp,hc,Vb,(e,t,r,n)=>({...e,...t,icon:r,
hideHeader:n})),fC=k(Rr,Wp,cC,HO,AI,$I,RI,II,OI,CI,(e,t,r,n,a,i,o,s,l,c)=>({...e,...t,...r,variant:n,showHeader:a,collapsible:i,
collapsedByDefault:o,actionMenu:s,reorderable:l,orderField:c})),hC=k(Rr,NI,PI,(e,t,r)=>({...e,hideTopBar:t,hideNav:r})),
mC=k(Rr,DI,MI,Yb,zb,(e,t,r,n,a)=>({...e,itemLabel:t,summary:r,min:n,max:a})),fn=k(Rr,wi.selectFlowStepVariant,jI,Kb,LI,UI,
FI,BI,HI,WI,qI,VI,(e,t,r,n,a,i,o,s,l,c,u,d)=>({...e,variant:t,autoAdvance:r,actionLabel:n,idleTitle:a,idleDescription:i,
runningTitle:o,runningDescription:s,authTitle:l,authDescription:c,noCreditsTitle:u,noCreditsDescription:d})),gC=k(fn,Gb,
WO,Jb,Zb,qO,Ts,YI,zI,(e,t,r,n,a,i,o,s,l)=>({...e,variant:R("aiQuery"),promptTemplate:t,imageSource:r,resultObjectType:n,
typeDescription:a,model:i,mockEnabled:o,mockResultCount:s,mockResults:l})),yC=k(fn,Gb,Jb,Zb,VO,KI,GI,JI,ZI,XI,QI,Ts,eO,(e,t,r,n,a,i,o,s,l,c,u,d,f)=>({
...e,variant:R("aiChat"),promptTemplate:t,resultObjectType:r,typeDescription:n,model:a,maxUserTurns:i,steeringChips:o,voiceInput:s,
speakReplies:l,speechLang:c,inputPlaceholder:u,mockEnabled:d,mockReplies:f})),vC=k(fn,tO,(e,t)=>({...e,variant:R("fetchD\
ata"),fetchUrl:t})),bC=k(fn,Xb,YO,Ts,rO,(e,t,r,n,a)=>({...e,variant:R("imageGeneration"),prompt:t,model:r,mockEnabled:n,
mockImageUrl:a})),wC=k(fn,Xb,nO,zO,aO,Ts,iO,(e,t,r,n,a,i,o)=>({...e,variant:R("audioGeneration"),prompt:t,lyrics:r,model:n,
durationSec:a,mockEnabled:i,mockAudioUrl:o})),TC=k(fn,oO,KO,sO,Ts,lO,(e,t,r,n,a,i)=>({...e,variant:R("transcribe"),audioSourceUrl:t,
model:r,language:n,mockEnabled:a,mockTranscript:i})),kC=k(fn,GO,cO,uO,dO,(e,t,r,n,a)=>({...e,variant:R("publishData"),sourceExpression:t,
publishDataType:r,publishScope:n,publishVariant:a})),SC=k(fn,pO,(e,t)=>({...e,variant:R("script"),script:t})),Qb=k(Rr,JO,
ZO,XO,Kb,fO,hO,mO,QO,hc,(e,t,r,n,a,i,o,s,l,c)=>({...e,variant:t,functionName:r,args:n,actionLabel:a,refreshCallables:i,onSuccessNavigate:o,
successMessage:s,size:l,icon:c})),e0=k(ks,eC,tC,Dp,(e,t,r,n)=>({...e,variant:t,textTransform:r,value:n})),t0=k(ks,rC,Yb,
zb,wO,fR,(e,t,r,n,a,i)=>({...e,variant:t,min:r,max:n,step:a,value:i})),r0=k(ks,nC,Eb,(e,t,r)=>({...e,variant:t,value:r})),
n0=k(ks,aC,Dp,(e,t,r)=>({...e,format:t,value:r})),a0=k(ks,iC,oC,TO,kO,SO,EO,xO,_O,AO,$O,RO,IO,Mp,(e,t,r,n,a,i,o,s,l,c,u,d,f,h)=>({
...e,variant:t,placeholderIcon:r,imageOutputOptions:n,aiSystemPromptFormula:a,userAvatarUid:i,showCamera:o,showFilePicker:s,
showSearch:l,showEdit:c,showCommit:u,multiple:d,maxSizeMb:f,value:h})),i0=k(Rr,OO,CO,NO,ir,(e,t,r,n,a)=>({...e,htmlTemplate:t,
purpose:r,actions:n,value:a})),o0=k(Rr,ir,(e,t)=>({...e,value:t})),s0=k(Rr,PO,DO,MO,ir,(e,t,r,n,a)=>({...e,parameters:t,
returns:r,returnTypeHint:n,value:a})),l0=k(Rr,ir,(e,t)=>({...e,value:t})),c0=k(Rr,sC,jO,LO,lC,UO,FO,BO,(e,t,r,n,a,i,o,s)=>({
...e,roomKey:t,displayName:r,identity:n,mediaMode:a,displayMode:i,maxTiles:o,focusIdentity:s})),EC=(e,t)=>{if(e.type.includes(
":")||e.type in t)return e.type;let r=sv(e.type);if(r.variant!==void 0)return`${r.type}:${r.variant}`;if(e.variant){let n=e.
variant.includes(":")?e.variant.split(":")[0]:e.variant;return`${e.type}:${n}`}return e.type};var gc=k(V,H,(e,t)=>{let{rootType:r,nodeTypes:n}=Np(t);if(pn(t))return r;let a=Hp(e,t.key);if(xe(a)&&a.right)return EC(a.
right,n)}),xC=e=>e,u0=k(xC,it,(e,t)=>{let{nodeTypes:r}=e,n=r[t];if(n){let{allowedChildTypes:a,category:i="",icon:o,color:s,
label:l}=n;return{allowedChildTypes:a,name:t,category:i,icon:o,color:s,label:l}}return{allowedChildTypes:[],name:t,category:""}}),
ss=k(H,gc,(e,t="")=>u0(Np(e),t)),_C=k(ss,e=>e.allowedChildTypes),AC=k(H,_C,(e,t)=>t.map(r=>u0(Np(e),r))),$C=k(gc,ss,hc,(e,t,r)=>xe(
r)&&r.right?r.right:t.icon||e||"objects"),RC=k(ss,qb,(e,t)=>xe(t)&&t.right?t.right:e.color||"#616161"),yc=k(V,H,(e,t)=>pn(
t)?$t(e,t.key):vb(t)?$t(e,`${t.key}.${t.node.name}`):[]),d0=k(yc,e=>e.length>0),IC=k(H,d0,(e,t)=>!t&&!pn(e)),OC=k($t,e=>e.
find(t=>t.node.type===mr)),p0=k(V,H,(e,t)=>{let{scope:r}=t;return r.node.type!==mr?0:1+p0(e,ys(r))}),CC=k(V,it,(e,t)=>vs(
e,t,Ia)),NC=k(V,H,wp,(e,t,r)=>{let n=gc(e,t.key);if(!n)return[];let a=ss(e,r.key),i=[];a.allowedChildTypes.includes(n)&&
i.push("into");let o=CC(e,r.key);return o&&ss(e,o.key).allowedChildTypes.includes(n)&&(i.push("before"),i.push("after")),
i}),w6=k(V,H,wp,(e,t,r,n)=>n,(e,t,r,n)=>{let a=NC(e,t.key,r.key),{mouseY:i,elementTop:o,elementBottom:s}=n,l=r.key;if(a.
length===0)return;let c=s-o,u=i-o<=10,d=s-i<=10,f=!u&&!d,h=i-o<=c/2,y=s-i<=c/2,b=a.includes("before"),T=a.includes("afte\
r");if(a.includes("into")&&f)return{target:l,action:"into",position:"center"};if(h&&b)return{target:l,action:"before",position:"\
top"};if(y&&T)return{target:l,action:"after",position:"bottom"}}),T6=dc(Pn({include:Ia,direction:"forward"})),k6=dc(Pn({
include:Ia,direction:"back"})),f0=k(V,uA,(e,t)=>Pn({include:Ia,direction:t,traverseChildren:r=>{if(!Ia(r))return!0;let n=Hb(
e,r.key);return xe(n)&&!!n.right}})),S6=k(V,it,(e,t)=>ws(e,t,f0(e,"forward"))),E6=k(V,it,(e,t)=>ws(e,t,f0(e,"back"))),_6=k(
V,e=>Pp(e,"")),PC=e=>k(Pp,t=>Jv(t,e,"output")),DC=k(V,H,(e,t)=>vy(t)?t:vs(e,t.key,vy)),A6=k(V,DC,(e,t)=>{if(!t||!t.node.
submitObjectType)return;let{scope:r,node:n,key:a}=t,i=Pp(e,a),o=Cn(e.def,n),s=d=>_r([r.key,`${o}$${d}`]),l=s("id"),c=s("\
createdAt"),u=s("createdBy");return{pointer:t,type:t.node.submitObjectType,idKey:l,createdAtKey:c,createdByKey:u,obj:i}}),
h0=k(V,NR,(e,t)=>$b(t,Pn({include:r=>{let n=Ad(Fp(e,r.key),!1),a=!!Ad(Bp(e,r.key),void 0);return n||a}}))),MC=k(V,it,h0,
ws),jC=(e,t)=>D(Kr(e,t))?void 0:MC(e,t),R6=k(V,it,h0,Nb),LC=k(V,it,(e,t)=>Nb(e,t,Pn({traverseParent:Jo,include:r=>{if(r.
node.type!==Ei)return!1;let n=Mp(e,r.key);if(D(n)||Array.isArray(n.right))return!1;let{url:a,previewUrl:i}=n.right;return!a&&
!!i}}))),I6=k(V,LC,(e,t)=>t.flatMap(r=>{let n=Ge(Mp(e,r.key));return Array.isArray(n)?[]:[{pointerKey:r.key,value:n,imageOutputOptions:Ad(
BR(e,r.key),void 0)}]})),UC=k(mc,be),FC=k(uC,be),BC=k(dC,be),HC=k(pC,be),WC=k(fC,be),qC=k(hC,be),VC=k(mC,be),YC=k(fn,be),
zC=k(gC,be),KC=k(yC,be),GC=k(vC,be),JC=k(bC,be),ZC=k(wC,be),XC=k(TC,be),QC=k(kC,be),e2=k(SC,be),t2=k(Qb,be),r2=k(e0,be),
n2=k(t0,be),a2=k(r0,be),i2=k(n0,be),o2=k(a0,be),s2=k(i0,be),l2=k(o0,be),c2=k(s0,be),u2=k(l0,be),d2=k(c0,be),m0=k($i,gO,yO,
vO,bO,(e,t,r,n,a)=>({...e,nodeTypes:t,rootType:r,canAdd:n,canEdit:a})),p2=k(m0,be),f2=k(V,H,(e,t)=>{let{node:r,key:n}=t;
switch(h_(r.type)){case ls:let a=PR(e,n);return xe(a)&&a.right==="stringArray"?Ub(e,n):e0(e,n);case us:return r0(e,n);case cs:
let i=DR(e,n);return xe(i)&&i.right==="intArray"?Lb(e,n):t0(e,n);case ds:return n0(e,n);case Ei:return a0(e,n);case ps:return fc(
e,n);case mr:return r.isRepeating?Wb(e,n):m0(e,n);case Aa:return i0(e,n);case Gl:return Fb(e,n);case Si:return o0(e,n);case ra:
return s0(e,n);case na:return l0(e,n);case Fr:return fn(e,n);case Xl:return Qb(e,n);case ap:return c0(e,n);default:return $i(
e,n)}}),h2=k(V,Up,(e,t)=>{let r=Vb(e,t.key);return xe(r)&&r.right===!0}),Ri=k(V,xb,(e,t)=>t.filter(r=>{let n=Pa(e,r.key);
return!(xe(n)&&n.right)})),wy={kind:"auto"},m2=40,g2=e=>e?.mode==="spatial",mi=(e,t,r)=>{if(typeof r=="number")return Number.
isFinite(r)?r:void 0;if(typeof r!="string")return;if(!r.startsWith("@")){if(r.trim()==="")return;let i=Number(r);return Number.
isFinite(i)?i:void 0}let n=$r(e,sp(r),t);if(!xe(n))return;let a=n.right;return typeof a=="number"&&Number.isFinite(a)?a:
void 0},y2=k(V,H,qR,(e,t,r)=>{if(!xe(r))return;let n=r.right;if(!g2(n))return;let a=mi(e,t.key,n.cols);if(a===void 0)return;
let i=Math.floor(a);if(i<1)return;let o=mi(e,t.key,n.rows),s=o!==void 0&&Math.floor(o)>=1?Math.floor(o):void 0,l=typeof n.
rowHeight=="number"&&Number.isFinite(n.rowHeight)&&n.rowHeight>0?n.rowHeight:void 0,c=typeof n.minColumnWidth=="number"&&
n.minColumnWidth>0?n.minColumnWidth:m2;return{cols:i,rows:s,rowHeight:l,minColumnWidth:c}}),Ty=e=>e===void 0?1:Math.max(
1,Math.floor(e)),v2=(e,t)=>{let r=Math.min(Math.max(0,Math.floor(e.x)),t.cols-1),n=Math.max(0,Math.floor(e.y)),a=Math.min(
Ty(e.w),t.cols-r),i=Ty(e.h);return t.rows!==void 0&&(n=Math.min(n,t.rows-1),i=Math.min(i,t.rows-n)),a=Math.max(1,a),i=Math.
max(1,i),{kind:"placed",x:r,y:n,w:a,h:i}},b2=k(V,H,(e,t,r)=>r,(e,t,r)=>{let n=t.node.place,a=Zd.is(n)?n:void 0;if(!a)return wy;
let i=mi(e,t.key,a.x),o=mi(e,t.key,a.y);if(i===void 0||o===void 0)return wy;let s=mi(e,t.key,a.w),l=mi(e,t.key,a.h);return v2(
{x:i,y:o,w:s,h:l},r)}),w2=k(V,Ri,(e,t)=>t.flatMap(r=>uc(r)?g0(r)?[]:$t(e,r.key).filter(n=>{let a=Pa(e,n.key);return!(xe(
a)&&a.right)}):[r])),g0=e=>{var t,r;return((r=cc((t=e.node.data)==null?void 0:t.span))==null?void 0:r.mode)==="grid"},T2=k(
Ri,e=>e.filter(t=>uc(t)&&g0(t))),k2=k(V,Ri,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{let a=t.find(o=>uc(o)&&o.node.name===r);if(!a)
return[];let i=[];return $t(e,a.key).forEach((o,s)=>{let l=Pa(e,o.key);if(xe(l)&&l.right)return;let c=b2(e,o.key,n);c.kind===
"placed"&&i.push({index:s,x:c.x,y:c.y})}),i}),D6=k(V,(e,t)=>t,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{var a;let i=H(e,r),o=cc(
(a=i.node.data)==null?void 0:a.span);if(!o||o.mode!=="grid")return[];let s=k2(e,t,o.slots,n);if(s.length===0)return[];let l=S2(
e,t,o.slots),c=s.map(d=>{let f=l[d.index];if(f===void 0)return;let h=$r(e,o.axis,f);return xe(h)?h.right:void 0}),u=[];for(let d of $t(
e,r)){let f=Pa(e,d.key);if(xe(f)&&f.right)continue;let h=ir(e,d.key),y=xe(h)?Ud(h.right):void 0;if(!y)continue;let b={start:y.
start,end:y.end},T=[];s.forEach((S,E)=>{let _=c[E];_!==void 0&&Cp(b,_)&&T.push(S.index)}),T.length>0&&u.push({recordKey:d.
key,slots:T})}return P$(u,s)}),S2=(e,t,r)=>{let n=Ri(e,t).find(a=>uc(a)&&a.node.name===r);return n?$t(e,n.key).map(a=>a.
key):[]};var y0="@@orgicore/INIT_APP",v0="@@orgicore/INIT_APP_INSTANCE",b0="@@orgicore/UPDATE_DEF",w0="@@orgicore/UPDATE_CONTEXT_\
DATA",T0="@@orgicore/UPDATE_REPO",k0="@@orgicore/UPDATE_VALUE",S0="@@orgicore/CLEAR_VALUE",E0="@@orgicore/INSERT_SLOT",x0="\
@@orgicore/SWAP_SLOT",_0="@@orgicore/MOVE_SLOT",A0="@@orgicore/SET_CURSOR",$0="@@orgicore/PUSH_CURSOR",R0="@@orgicore/PO\
P_CURSOR",I0="@@orgicore/MOVE_NODE",O0="@@orgicore/REMOVE_NODE",C0="@@orgicore/CLEAR_SUBTREE",N0="@@orgicore/BULK_ACTION",
P0="@@orgicore/LOAD_MORE",qp="@@orgicore/SET_PAGE",E2=(e,t)=>({type:y0,payload:{appDef:e,appInstance:t}}),x2=e=>({type:v0,
payload:{appInstance:e}}),_2=e=>({type:b0,payload:{appDef:e}}),A2=e=>({type:w0,payload:{data:e}}),$2=e=>({type:T0,payload:{
repo:e}}),D0=(e,t)=>({type:k0,payload:{pointerKey:e,value:t}}),M0=e=>({type:S0,payload:{pointerKey:e}}),j0=(e,t)=>({type:E0,
payload:{pointerKey:e,index:t}}),R2=(e,t,r)=>({type:x0,payload:{pointerKey:e,fromIndex:t,toIndex:r}}),I2=(e,t)=>({type:_0,
payload:{pointerKey:e,toIndex:t}}),L0=(e,t)=>({type:A0,payload:{pointerKey:e,args:t}}),O2=(e,t)=>({type:$0,payload:{pointerKey:e,
args:t}}),C2=()=>({type:R0}),N2=(e,t,r)=>({type:I0,payload:{pointerKey:e,toPointerKey:t,target:r}}),U0=e=>({type:O0,payload:{
pointerKey:e}}),F0=e=>({type:C0,payload:{pointerKey:e}}),P2=e=>({type:N0,payload:{actions:e}}),D2=e=>({type:P0,payload:{
pointerKey:e}}),M2=(e,t)=>({type:qp,payload:{pointerKey:e,page:t}}),ky={insertSlot:j0,removeNode:U0,updateValue:D0,clearValue:M0,
clearSubtree:F0,setCursor:L0},Sy={initApp:E2,initAppInstance:x2,updateDef:_2,updateContextData:A2,updateRepo:$2,updateValue:D0,
clearValue:M0,clearSubtree:F0,insertSlot:j0,removeNode:U0,swapSlot:R2,moveSlot:I2,setCursor:L0,pushCursor:O2,popCursor:C2,
moveNode:N2,bulkAction:P2,loadMore:D2,setPage:M2},j2=e=>{let t={};for(let r in Sy){let n=Sy[r];t[r]=(...a)=>e(n(...a))}return t},
Rt=(e,t)=>{let r=aa(e);return{...e,instance:{...r,...t}}},B0=(e,t)=>{switch(t.type){case y0:return F2(e,t);case v0:return B2(
e,t);case b0:return H2(e,t);case w0:return W2(e,t);case T0:return q2(e,t);case k0:return V2(e,t.payload);case S0:return Y2(
e,t);case C0:return q0(e,t.payload);case E0:return K2(e,t);case O0:return Y0(e,t.payload);case x0:return G2(e,t.payload);case I0:
return J2(e,t);case _0:return Fd(e,t.payload);case A0:return Z2(e,t);case $0:return eN(e,t);case R0:return rN(e);case P0:
return nN(e,t);case qp:return K0(e,t);case N0:return t.payload.actions.reduce((r,n)=>B0(r,n),e)}},L2=(e,t)=>{let r=t.payload.
pointerKey;return H(e,r)},H0=(e,t)=>{let r=Kr(e,t);if(D(r)){console.warn(`[orgicore] ignoring write to unresolvable poin\
ter "${t}" \u2014 the node is not declared on the current app def (${r.left}).`);return}return r.right},U2=e=>t=>t.pointer===
e.pointer?e:t,F2=(e,t)=>{let{appDef:r,appInstance:n}=t.payload;return{...e,def:r,instance:n}},B2=(e,t)=>{let{appInstance:r}=t.
payload;return{...e,instance:r}},H2=(e,t)=>{let{appDef:r}=t.payload;return{...e,def:r}},W2=(e,t)=>{let{data:r}=t.payload;
return{...e,context:{...e.context,...r}}},q2=(e,t)=>{let{repo:r}=t.payload;return{...e,repo:r}},W0=(e,t,r)=>{let n=dn(e),
a=ac(e),i={pointer:t,length:r};if(!a[t])return Rt(e,{lengths:[...n,i]});let s=n.map(l=>l.pointer===t?i:l);return Rt(e,{lengths:s})},
V2=(e,t)=>{let{value:r,pointerKey:n}=t,a=H0(e,n);if(!a)return e;let{key:i,scope:o,node:s}=a;if(s.isDerived)return e;let l=un(
e),c={pointer:i,value:r},d=yi(e)[i];if(!d){let y=kp(e,o.key).reduce((b,T)=>{if(fp(T.node)){let S=T.index+1,E=ys(T),_=Ge(
Ca(e,E));if(S>_)return W0(b,E,S)}return b},e);return Rt(y,{data:[...l,c]})}if(d.value===r)return e;let f=l.map(U2(c));return Rt(
e,{data:f})},vc=e=>(t,r,n)=>RA(e,t,r,n),Y2=(e,t)=>{let r=H0(e,t.payload.pointerKey);if(!r)return e;let a=un(e).filter(i=>i.
pointer!==r.key);return Rt(e,{data:a})},q0=(e,{pointerKey:t})=>{let r=z2(e,t),n=un(e),a=dn(e),i=n.filter(s=>!r.has(s.pointer)),
o=a.filter(s=>!r.has(s.pointer));return i.length===n.length&&o.length===a.length?e:Rt(e,{data:i,lengths:o})},z2=(e,t)=>{
let r=new Set,n=a=>{if(!r.has(a)){r.add(a);for(let i of $t(e,a))n(i.key)}};return n(t),r},V0=(e,t,r)=>{let n=[],a=new Set,
i=s=>{if(!a.has(s.key)){a.add(s.key),r(s)&&n.push(s.key);for(let l of $t(e,s.key))i(l)}},o=Kr(e,t);return xe(o)&&i(o.right),
n},K2=(e,t)=>{let{node:r,isIteration:n,key:a}=L2(e,t),{index:i}=t.payload,o=un(e),s=dn(e),l=ac(e);if(!r.isRepeating||n)return e;
let c=vc(e),u=o.map(h=>{let{pointer:y}=h,b=ta(e,a,y);if(b>=i){let T=c(a,y,b+1);return{...h,pointer:T}}return h}),d=s.map(
h=>{let{pointer:y,length:b}=h;if(a===y)return{pointer:y,length:b+1};let T=ta(e,a,y);if(T>=i){let S=c(a,y,T+1),E=Nn(e,S);
return{length:b,pointer:ys(E)}}return h}),f=Rt(e,{data:u,lengths:d});if(!l[a]){let h=dn(f);return Rt(f,{lengths:[...h,{pointer:a,
length:1}]})}return f},Fd=(e,{pointerKey:t,toIndex:r})=>{let n=Nn(e,t),a=n.key;if(!n.node.isRepeating)return e;let i=un(
e),o=dn(e),s=vc(e),l=n.index,c=Math.min(l,r),u=Math.max(l,r),d=i.map(h=>{let{pointer:y}=h,b=ta(e,a,y);if(b>=c&&b<=u){let T=b===
l?r:b>l?b-1:b+1,S=s(a,y,T);return{...h,pointer:S}}return h}),f=o.map(h=>{let{pointer:y}=h,b=ta(e,a,y);if(b>=c&&b<=u){let T=b===
l?r:b>l?b-1:b+1,S=s(a,y,T),E=Nn(e,S);return{...h,pointer:ys(E)}}return h});return Rt(e,{data:d,lengths:f})},G2=(e,{fromIndex:t,
toIndex:r,pointerKey:n})=>{let a=Nn(e,n),i=a.key,o=un(e);if(!a.node.isRepeating)return e;let s=vc(e),l=o.map(c=>{let{pointer:u}=c,
d=ta(e,i,u);if(d===t||d===r){let h=s(i,u,d===t?r:t);return{...c,pointer:h}}return c});return Rt(e,{data:l})},Y0=(e,{pointerKey:t})=>{
var r;let{scope:n,isIteration:a,key:i}=H(e,t);if(!a){let h=`${t}[`,y=un(e).filter(T=>!T.pointer.startsWith(h)),b=dn(e).filter(
T=>T.pointer!==t&&!T.pointer.startsWith(h));return Rt(e,{data:y,lengths:b})}let o=((r=Gr(e,i))==null?void 0:r.key)||"",s=un(
e),l=dn(e),c=n.index,u=vc(e),d=s.flatMap(h=>{let{pointer:y}=h,b=ta(e,o,y);if(b===c)return[];if(b>c){let T=u(o,y,b-1);return{
...h,pointer:T}}return h}),f=l.flatMap(h=>{let{pointer:y,length:b}=h;if(o===y){let S=h.length-1;return S===0?[]:{pointer:y,
length:S}}let T=ta(e,o,y);if(T===c)return[];if(T>c){let S=u(o,y,T-1),E=Nn(e,S);return{length:b,pointer:ys(E)}}return h});
return Rt(e,{data:d,lengths:f})},J2=(e,t)=>{let{pointerKey:r,toPointerKey:n,target:a}=t.payload,i=H(e,r),o=Gr(e,i.key);if(!o)
return e;let s=H(e,n);if(!Ia(i)||!Ia(s)||i.key===s.key)return e;if(a==="into"){let l=aR(s),c=H(e,l);if(o.key===c.key)return e;
let[u]=Ey(e,i,o,c);return u}if(a==="before"||a==="after"){if(pn(s))return e;let l=Gr(e,s.key);if(!l)return e;let c=i.scope.
index,u=s.scope.index,d=a==="before"?-1:0,f=a==="after"?1:0;if(o.key===l.key){if(c===u)return e;let b=c<u?d:f,T=u+b;return T===
c?e:Fd(e,{pointerKey:i.key,toIndex:T})}let[h,y]=Ey(e,i,o,l);if(e!==h){let b=u+f;return Fd(h,{pointerKey:y,toIndex:b})}}return e},
Ey=(e,t,r,n)=>{let{key:a,scope:i}=t;if(_b(e,a,n.key))return[e,a];let o=i.index,s=Ge(Ca(e,n.key)),l=ac(e),c=un(e),u=dn(e),
d=`${n.key}[${s}]`,f=c.flatMap(T=>{if(ta(e,r.key,T.pointer)===o){let E=T.pointer.replace(a,d);return[T,{...T,pointer:E}]}
return T}),h=u.flatMap(T=>{if(n.key===T.pointer){let S=T.length+1;return{pointer:T.pointer,length:S}}if(T.pointer.startsWith(
a)){let S=T.pointer.replace(a,`${n.key}[${s}]`);return[T,{pointer:S,length:T.length}]}return T}),y=Rt(e,{data:f,lengths:h});
if(!l[n.key]){let T=dn(y);y=Rt(y,{lengths:[...T,{pointer:n.key,length:1}]})}return[Y0(y,{pointerKey:a}),d]},Z2=(e,t)=>{let{
pointerKey:r,args:n}=t.payload;return Rt(e,n===void 0?{cursor:r}:{cursor:r,cursorArgs:n})},X2=new Set(["script","publish\
Data"]),Q2=(e,t)=>{let r=yi(e);return V0(e,t,n=>n.node.type===Fr&&typeof n.node.variant=="string"&&X2.has(n.node.variant)).
some(n=>{var a;let i=(a=r[n])==null?void 0:a.value;return typeof i=="object"&&i!==null&&i.status==="running"})},eN=(e,t)=>{
let{pointerKey:r,args:n}=t.payload;if(!r)return e;let a=yp(e),i=vp(e),o=u=>V0(u,r,d=>d.node.type===Jl).filter(d=>!Q2(u,d)).
reduce((d,f)=>q0(d,{pointerKey:f}),u);if(r===a&&tN(i,n))return o(e);let s=gp(e),l=Lv(e),c=Rt(e,{navStack:a?[...s,a]:s,navStackArgs:a?
[...l,i]:l,cursor:r,cursorArgs:n});return o(c)},tN=(e,t)=>{let r=e??{},n=t??{},a=Object.keys(r),i=Object.keys(n);return a.
length!==i.length?!1:a.every(o=>r[o]===n[o])},rN=e=>{let t=gp(e),r=Lv(e),n=t.slice(0,-1),a=r.slice(0,-1),i=t[n.length]||
IR(e),o=r[n.length];return Rt(e,{navStack:n,navStackArgs:a,cursor:i,cursorArgs:o})},z0=(e,t)=>{let r=H(e,t),{node:n,key:a,
scope:i}=r,o=n.pageSize;if(o===void 0)return;let s=typeof o=="number"?o:Ge($r(e,o,i.key))||0;if(s<=0)return;let l=n.maxLength,
c=l===void 0?void 0:typeof l=="number"?l:Ge($r(e,l,i.key)),u=c??1/0,d=n.data;if(Dl(d)){let h=ir(e,a);if(xe(h)&&Array.isArray(
h.right)){let y=h.right.length;u=c!==void 0?Math.min(y,c):y}}let f=Ge(Ca(e,a));return{key:a,pageSizeValue:s,currentLength:f,
totalLength:u}},K0=(e,t)=>{let{pointerKey:r,page:n}=t.payload,a=z0(e,r);if(!a)return e;let i=(n+1)*a.pageSizeValue;return W0(
e,a.key,i)},nN=(e,t)=>{let{pointerKey:r}=t.payload,n=z0(e,r);if(!n)return e;let{currentLength:a,totalLength:i,pageSizeValue:o}=n;
if(a>=i)return e;let s=Math.ceil(a/o)-1;return K0(e,{type:qp,payload:{pointerKey:r,page:s+1}})},aN=(e=M_,t={},r)=>{let n={
def:e,context:t,repo:r},i=j2(l=>{n=B0(n,l)}),o=()=>n;return i.getState=o,{api:i,getState:o,sel:l=>(...c)=>l(n,...c)}},iN=(e,t={})=>{
let{api:r,sel:n}=e,a=n(Kr);r.initAppInstance();let i=(o,s="")=>{Object.entries(o).forEach(([l,c])=>{var u;if(c!==void 0){
let d=_r([s,l]),f=a(d);if(D(f)){if(String(f.left).endsWith("not found"))return;throw new Error(String(f.left))}let h=f.right;
if(h.node.isRecord&&On.is(c)){let y=(u=h.node.recordKey)!=null?u:"key",b=h.node.recordValue;Object.entries(c).forEach(([
T,S],E)=>{i(typeof b=="string"?{[y]:T,[b]:S}:{[y]:T,...On.is(S)?S:{}},`${d}[${E}]`)})}else h.node.isRepeating&&ZE.is(c)?
c.forEach((y,b)=>{Jc(y)?r.insertSlot(h.key,b):i(y,`${d}[${b}]`)}):h.node.isOwnScope?On.is(c)&&i(c,`${d}[0]`):r.updateValue(
h.key,c)}})};i(t)};var[M6,oN,j6]=_i("App"),[L6,sN,U6]=_i("Pointer"),G0=(e={})=>Lt(e)?{pointerKey:e}:e;var Bd=(e,t)=>{let r=Hp(e,t.key);if(!xe(r)||r.right===void 0)return;let n=r.right,a=yc(e,t.key);if(a.length===0)return{...n};
let i=[];for(let o of a){let s=Bd(e,o);s&&i.push(s)}return{...n,_children:i}},[B6,H6]=_i("AppData",{ctx:{}}),W6={createAppInstance:Zc(),
toOutputData:aa};var lN=(e,t)=>{switch(t){case"@root":return X0(e);case"@parent":return e.parentAppContext;case"@self":return e}return J0(
e,t)},J0=(e,t)=>e.name===t?e:e.parentAppContext?J0(e.parentAppContext,t):null,Z0=(e,t)=>t===void 0||e.namespace===t?e:e.
parent?Z0(e.parent,t):null,Vp=(e="@self")=>{let t=oN(),r=lN(t,e);if(!r)throw new Error(`App context not found for search\
 param ${e}`);return r},cN=e=>{let{namespace:t,pointerKey:r}=G0(e),{name:n}=Vp(t),a=sN();if(r)return{namespace:n,pointerKey:r};
let i=Z0(a,n);if(!i)throw new Error(`Pointer context not found for namespace ${n}`);return i},uN=(e,t)=>{let{state:r}=Vp(
t);return e(r)},Ii=e=>t=>uN(e,t),dN=e=>cN(e).pointerKey,pN=(e,t)=>{let r=dN(t),{state:n}=Vp(G0(t).namespace);return e(n,
r)},ee=e=>t=>pN(e,t),q6=ee(H),V6=ee(xb),Y6=ee(Ri),z6=ee(y2),K6=ee(w2);var G6=ee(T2);var J6=ee(k(Ca,Ge));var Z6=Ii(yp),X6=Ii(vp),Q6=Ii(Pb),eU=Ii(Up),tU=Ii(h2),rU=Ii(AR);var nU=ee(jp);var aU=ee(f2),iU=ee(p2);var oU=ee(dI);var sU=ee(OC),lU=ee(p0),cU=ee(yc),uU=ee(d0),dU=ee(AC),pU=ee(IC),fU=ee($C),hU=ee(RC),mU=ee(gc),gU=ee(pI),yU=ee(jC);var X0=e=>{let{parentAppContext:t}=e;return t?X0(t):e};var vU=ee(UC),bU=ee(FC),wU=ee(BC),TU=ee(HC),kU=ee(WC),SU=ee(qC),EU=ee(VC),xU=ee(YC),_U=ee(zC),AU=ee(KC),$U=ee(GC),RU=ee(
JC),IU=ee(ZC),OU=ee(XC),CU=ee(QC),NU=ee(e2),PU=ee(t2),DU=ee(r2),MU=ee(n2),jU=ee(a2),LU=ee(i2),UU=ee(o2),FU=ee(s2),BU=ee(
l2),HU=ee(c2),WU=ee(u2),qU=ee(d2);var[VU,YU]=_i("form");var zp=e=>e,mN=k(zp,e=>bt(e,t=>t.name)),gN=k(zp,e=>e.reduce((t,r)=>(t[r.name]={allowedChildTypes:[],icon:r.icon||"extens\
ion",color:r.color||"#9E9E9E",category:"plugins"},t),{})),yN=k(zp,e=>e.map(t=>t.name)),vN=k(mN,it,(e,t)=>e[t]),bN=[ls,cs,
us,Ei,ds,ps,Si,ra,na],wN=e=>{let t=[...bN,Aa,"textContent","subsection",Xl,...yN(e)],r=gN(e),n=["appNode:folder",Qo,ra,na];
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
rm",...t],icon:"route",color:"#2e7d32",category:"layout",label:"Flow"},repeat:{allowedChildTypes:[Qo],icon:"repeat",color:"\
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
allowedChildTypes:[],icon:"data_object",color:"#5c8599",category:"input"},function:{allowedChildTypes:[],icon:"function",
color:"#7b1fa2",category:"input"},const:{allowedChildTypes:[],icon:"pin",color:"#455a64",category:"input"},...r}},TN=e=>Av(
{t:$v({rootType:"app",nodeTypes:e,iterationLabel:"@(value.label || value.name || 'New ' + (value.variant || value.type))\
 + (value.isRepeating ? '[...]' : '')",nounLabel:"@value.variant || value.type",label:"App Config"})}),xy={anonOnly:"pub\
lic",hybrid:"public",userOnly:"private"},kN="data-degraded-node",SN=`<div ${kN}="true" role="alert" style="margin:8px 0;\
padding:8px 12px;border:1px solid #e6b800;border-radius:6px;background:#fff8e1;color:#8a6d00;font-size:0.875rem;">\u26A0\uFE0F Thi\
s part of the page couldn't be displayed.</div>`,EN=e=>({type:Aa,name:e,htmlTemplate:SN}),xN=bc.intersection([bc.partial(
{value:zl}),On]),_N=PC(xN),AN=(e,t,r={})=>{let n=h=>{var y;let{t:b=[],value:T}=h,S=b.length>0?b.map(n):void 0,E;try{E=a(
T)}catch(O){if(!r.lenient)throw O;return EN((y=T.name)!=null?y:"unnamed")}let _={...E,children:S};return _.submitObjectType&&
(_.children||(_.children=[]),_.children=[..._.children,..._v()]),_},a=h=>{let y=i(h),b=e_.decode(y);if(yx(b))return b.right;
let T=vx(b.left),S=Id(b.left),E=b.left.some(O=>O.context.some(M=>M.key==="columnBreaks")),_='Check that your node has a \
valid "type" property.';throw E&&(_="columnBreaks format mismatch. System expects number[] (e.g., [2, 5, 7]) but you pro\
vided responsive objects. Convert to legacy format or update types."),new Error(`\u{1F6A8} Design Node Error - ${T}
\u{1F4CD} Location: ${S||"root"}
\u{1F4A1} Fix: ${_}
\u{1F4CB} Node: ${JSON.stringify(y,null,2).substring(0,500)}`)},i=h=>{let y=o(h),{name:b="unnamed",id:T,...S}=y;return{name:b,
...S}},o=h=>{let{type:y,...b}=h,T=vN(t,y);if(T){let{parameters:E={},description:_,icon:O,image:M,...W}=b;if(XE.is(E))return{
type:Aa,htmlTemplate:`@${y}(${T.parameters.map(G=>E[G.name||""]||"undefined").join(",")})`,pluginName:y,...W}}let S=sv(y);
if(S.variant!==void 0)return{type:S.type,variant:S.variant,...b};if(y==="image"||y==="textContent")return{type:Aa,...b};
if(!P_.is(y))throw new Error(`Invalid node type: ${y}`);if(y===Zl)return{...h,isRepeating:!0};if(y===Kl){let{appLogo:E,..._}=h,
O={type:y,..._},M=O.authMode;return M&&xy[M]&&(O={...O,authMode:xy[M]}),O}return h},s={def:TN(wN(t)),instance:e},l=_N(s,
"t");if(D(l))return Pe(`Invalid design node: ${l.left}`);let c=l.right,{value:u={type:"app",name:""},...d}=c,f={value:{...u,
name:""},...d};try{return R(n(f))}catch(h){return Pe(GE(h))}},$N=e=>e!==void 0&&!(typeof e=="object"&&e!==null&&!Array.isArray(
e)&&Object.keys(e).length===0),Ho=e=>{var t;if(!e||!e.data||e.data.length===0)return;let r=(t=e.data.find(o=>o.pointer===
"value"))==null?void 0:t.value,n=$N(r),i={def:Av({t:$v({rootType:"app",nodeTypes:{}})}),instance:e};if(n){let o=H(i,"t");
return Bd(i,o)}else{let o=H(i,"t"),s=yc(i,o.key);if(s.length===0)return{type:"folder",name:""};let l=[];for(let c of s){
let u=Bd(i,c);u&&l.push(u)}return{type:"folder",_children:l}}},tw=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.
minClientVersion,appConfig:Ho(e.appConfig),users:Ho(e.users),objectTypes:Ho(e.objectTypes),objectInstances:Ho(e.objectInstances),
plugins:Ho(e.plugins)}),rw=(e,t,r,n)=>{let{_children:a,...i}=e;if(r.push({pointer:`${t}.value`,value:i}),a&&a.length>0){
r.push({pointer:`${t}.expanded`,value:!0});let o=`${t}.t`;n.push({pointer:o,length:a.length}),a.forEach((s,l)=>{let c=`${o}\
[${l}]`;rw(s,c,r,n)})}},Wo=(e,t,r)=>{if(!e)return{};let n=[],a=[],{_children:i,...o}=e;o.type==="folder"&&Object.keys(o).
length===1||n.push({pointer:"value",value:o}),i&&i.length>0&&(n.push({pointer:"expanded",value:!0}),a.push({pointer:"t",
length:i.length}),i.forEach((c,u)=>{rw(c,`t[${u}]`,n,a)}));let l={data:n,lengths:a};return t&&(l.cursor=t),r&&(l.navStack=
r),l},RN=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.minClientVersion,appConfig:Wo(e.appConfig,
e.appConfig?"t[0]":void 0),users:Wo(e.users,e.users?"t[0]":void 0),objectTypes:Wo(e.objectTypes,e.objectTypes?"t[0]":void 0),
objectInstances:Wo(e.objectInstances,e.objectInstances?"t[0].t[0]":void 0),plugins:Wo(e.plugins,e.plugins?"t[0]":void 0)}),
IN="\0ORGIGGLY_SANDBOXED_WIDGET\0",KU=It.intersection([It.type({kind:It.literal("sandboxed-widget"),pluginName:It.string,
params:It.UnknownRecord}),It.partial({embedsThirdPartyMedia:It.boolean,connections:It.array(xv),widgetOwner:It.string})]),
ON=(e,t,{embedsThirdPartyMedia:r,connections:n,widgetOwner:a}={})=>{let i={kind:"sandboxed-widget",pluginName:e,params:t,
...r?{embedsThirdPartyMedia:!0}:{},...n?.length?{connections:n}:{},...a!==void 0?{widgetOwner:a}:{}};return IN+JSON.stringify(
i)};var CN=({name:e,htmlTemplate:t,parameters:r,runtime:n,embedsThirdPartyMedia:a,connections:i,widgetOwner:o})=>(...s)=>{let l=r.
reduce((c,u,d)=>(c[u.name||`param${d}`]=s[d],c),{});return n==="sandboxed"?ON(e,l,{embedsThirdPartyMedia:a,connections:i,
widgetOwner:o}):String(v$(lp(t),l))},NN=e=>e.reduce((t,r)=>(t[r.name]=CN(r),t),{});var PN=Q.intersection([Q.type({name:Q.string}),zl]),DN=Q.intersection([zl,On]),MN=Q.union([Q.literal("text"),Q.literal("\
number"),Q.literal("boolean"),Q.literal("temporal")]),GU=MN.types.map(e=>e.value);var jN=Q.type({pointer:Q.string,value:Q.unknown}),LN=Q.type({pointer:Q.string,length:Q.number}),qo=Q.partial({cursor:Q.string,
navStack:Q.array(Q.string),data:Q.array(jN),lengths:Q.array(LN)}),JU=Q.intersection([Q.type({versionId:Q.string,appConfig:qo,
users:qo,objectTypes:qo,objectInstances:qo,plugins:qo}),Q.partial({apiVersion:Q.string,minClientVersion:Q.number})]),UN=Q.intersection(
[Q.type({id:Q.string,pointer:Q.string,type:Q.union([Q.literal("user"),Q.literal("group")])}),Q.partial({name:Q.string,email:Q.string,
isAdmin:Q.boolean,usernames:Q.string})]);var FN=e=>e,nw=k(FN,e=>e.fields.filter(t=>V_.is(t))),aw=k(nw,e=>bt(e,t=>t.name)),QU=k(aw,it,(e,t)=>e[t]),BN=e=>{let t=e.
map(iw).filter(Hi);return da(["name",...t]).map(n=>`value.${n}`).join(" || ")},iw=e=>{let t=aw(e),r=t.name||t.Name;if(r)
return r.name;let n=nw(e)[0];return n&&(n.type==="text"||n.type==="number")?n.name:"id"};var ow=["type","_scope","_groupKey"],eF=new Set(ow);var HN=e=>Hi(e.type)&&Hi(e.id),WN=e=>e,sw=k(WN,e=>e.types),tF=k(sw,BN),qN=k(sw,e=>bt(e,t=>t.name)),VN=k(qN,it,(e,t)=>e[t]),
rF=k(VN,e=>e&&iw(e));var lw=e=>e,YN=k(lw,e=>e.nodes),zN=k(lw,e=>e.plugins),aF=k(YN,zN,(e,t)=>da([...e.map(r=>r.name),...t.map(r=>r.name)]));var KN=(e,t)=>({metaModel:e,repo:{objects:t}}),GN=e=>e,Ss=e=>k(GN,t=>{let{data:r=[]}=t??{};return r.map(n=>Gc(n.value)?{
...n.value,pointer:n.pointer}:n.value).filter(e.is)}),JN=Ss(Zx),ZN=Ss(DN),XN=Ss(q_),sF=Ss(PN),Kp=Ss(UN),cw=e=>e,uw=(e,{lenient:t}={})=>{
let r=e.versionId,n=e.apiVersion,a=XN(e.plugins),i=ZN(e.objectInstances).filter(HN),o=AN(e.appConfig,a,{lenient:t});return D(
o)?o:R({appConfig:o.right,users:e.users,objectTypes:JN(e.objectTypes),objectInstances:i,plugins:a,versionId:r,apiVersion:n})},
QN=k(cw,e=>uw(e)),lF=k(cw,e=>uw(e,{lenient:!0})),dw=e=>e,eP=k(dw,e=>({types:e.objectTypes})),cF=k(dw,eP,(e,t)=>KN(t,e.objectInstances)),
wc=e=>e,pw=e=>{let[t]=up(e);return t},Gp=e=>e.replace(/\.?value$/,""),fw=k(Kp,e=>bt(e,t=>Gp(t.pointer)));var Jp=k(wc,fw,it,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,type:o,isAdmin:s}=n;if(o!=="group")return;let l=r?
Jp(e,pw(r)):void 0;return{id:a,name:i,parent:l,isAdmin:s}}),tP=k(wc,fw,it,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,
email:o,type:s,isAdmin:l}=n;if(s!=="user"||!o)return;let c=Jp(e,pw(r));return{id:a,name:i,email:o,parent:c,isAdmin:l}}),
hw=k(Kp,e=>Fn(e,t=>t.type)),mw=k(wc,hw,(e,t)=>(t.user||[]).flatMap(({pointer:a})=>{let i=tP(e,Gp(a));return i?[i]:[]})),
uF=k(wc,hw,(e,t)=>t.group.flatMap(({pointer:n})=>{let a=Jp(e,Gp(n));return a?[a]:[]})),rP=k(mw,e=>bt(e,t=>t.email)),nP=k(
mw,e=>bt(e,t=>t.name)),dF=k(nP,it,(e,t)=>e[t]),pF=k(rP,it,(e,t)=>e[t]),_y=e=>(e??"").split(/[\s,]+/).map(t=>t.trim().toLowerCase()).
filter(t=>t&&t!=="anon"),fF=k(Kp,it,(e,t)=>{var r;let n=t.trim().toLowerCase();if(!n||n==="anon")return;let a=e.find(i=>i.
type==="user"&&_y(i.usernames).includes(n));if(a)return{id:a.id,name:(r=a.name)!=null?r:a.id,usernames:_y(a.usernames)}});var hF=29*24*60*60*1e3;var aP=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="running",iP=(e,t)=>aP(Ge(ir(e,t)))?$t(e,t).map(r=>r.key):
[],gw=["flowStep:script","content:data-script","content:action"],Es=[{name:"publishData",async:!0,signature:'publishData\
({type: string, data: object | object[], scope?: "global" | "user" | "variant" | "group", variant?: string, groupKey?: s\
tring}): {id: string, ...} | [{id: string, ...}, ...]',description:'Publishes one record (when `data` is an object) or N\
 records (when `data` is an array of objects) of the given object type. Returns the created record(s) with server-stampe\
d `id`, `createdAt`, `createdBy` fields populated. Use the returned `id` to link related records \u2014 e.g. stamp a parent\'s\
 id into each child by including it in the child\'s object literal. `scope` must match the partition the type is bound at\
, and defaults to `"global"`: `"user"` writes the signed-in user\'s own partition, `"variant"` needs a `variant` key, and\
 `"group"` needs a `groupKey` naming which group to write into (a member can be in several at once, so it is never infer\
red \u2014 a group publish with no key is refused rather than falling back to the shared collection).',availableIn:["flo\
wStep:script","content:data-script","content:action"],examples:['post = publishData({type: "TravelPost", data: {AuthorId\
: whoAmI, Details: comment}})','publishData({type: "Photo", data: photos.map((p) => ({Image: p.url, postId: post.id}))})',
`publishData({type: "Prediction", data: $rows('matchRows').map((r) => ({id: r.id, score: r.score}))})`,'publishData({typ\
e: "CardState", data: {cardId: card.id, box: 2}, scope: "user"})','publishData({type: "Expense", data: {amount: total, p\
aidBy: whoAmI}, scope: "group", groupKey: currentTab})']},{name:"createGroup",async:!0,signature:"createGroup({groupKey:\
 string, inviteCode?: string}): {groupKey: string, changed: boolean, role: string, addedAt: string}",description:'Create\
s a membership group in this org and enrols the caller as its first `owner`, so they can immediately read and write the \
group\'s `scope: "group"` data. Pass an `inviteCode` to mint a shareable join credential at the same time. Idempotent for\
 the owner \u2014 calling it again returns the existing membership with `changed: false`, so a flow step the user can re-ente\
r is safe. Another user hitting an existing key is refused. Use this for a "start a new shared thing" step: a trip tab, \
a household, a team.',availableIn:["flowStep:script","content:data-script","content:action"],examples:['tab = createGrou\
p({groupKey: "tab-" + generateId(6), inviteCode: code})',"createGroup({groupKey: slug(tripName)})"]},{name:"joinGroup",async:!0,
signature:"joinGroup({inviteCode?: string, groupKey?: string, claimEmail?: string}): {groupKey: string, changed: boolean\
, role: string, addedAt: string, matchedBy?: string}",description:'Admits the caller to an existing group so its `scope:\
 "group"` data becomes readable and writable for them. Either an `inviteCode` (the code itself is the credential \u2014 enoug\
h on its own) or a `groupKey` plus the `claimEmail` the caller was invited under, which is matched against their signed-\
in identity. Returns `matchedBy` naming which invitation matched, and `changed: false` when they were already a member, \
so re-running is safe. The caller\'s account is what gets recorded, so they must be signed in \u2014 an invitation can be addr\
essed to an email or handle, but access is keyed on the account that claims it.',availableIn:["flowStep:script","content\
:data-script","content:action"],examples:["joined = joinGroup({inviteCode: enteredCode})","joinGroup({groupKey: $args.ta\
b, claimEmail: myEmail})"]},{name:"leaveGroup",async:!0,signature:"leaveGroup({groupKey: string}): {groupKey: string, ch\
anged: boolean}",description:'Removes the caller from a group, which revokes their access to its `scope: "group"` data \u2014\
 the group\'s records drop out of `$data` for them. It deletes nothing: the other members keep the group and everything i\
n it, so tombstone or un-claim your own records first if the flow calls for it. Leaving a group you are not in succeeds \
with `changed: false`, so a re-entered step is safe. Use this for a "leave this tab / household / team" step.',availableIn:[
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
 with the inputs named explicitly"}],oP=Es.filter(e=>e.async).map(e=>e.name),mF=Es.filter(e=>!e.async).map(e=>e.name),sP=e=>gw.
some(t=>t===e),lP=e=>sP(e)?Es.filter(t=>t.availableIn.includes(e)).map(t=>t.name):[],cP=Object.fromEntries(Es.map(e=>[e.
name,async()=>{throw new Error(`${e.name} isn't available in a test pack: stub it in hosts.asyncHosts`)}])),uP=e=>{if(!D(
e))return e;let t=e.left;return{left:"failingExpression"in t?{message:t.message,expression:I_(t.failingExpression)}:{message:t.
message,expression:t.source}}},dP=e=>{if(!("$now"in e))return e;let{$now:t,...r}=e;if("now"in r&&r.now!==t)throw new Error(
`orgPack: context sets both $now (${String(t)}) and now (${String(r.now)}) \u2014 pass one.`);return{...r,now:t}},pP=(e,t={})=>{
var r,n,a,i;let o=QN(RN(e));if(D(o))throw new Error(`org config failed to decode: ${String(o.left)}`);let s=o.right.appConfig,
l=new Set(["storage","realtime","callable"].flatMap(E=>gA(s,E).map(_=>_.typeName))),c=[...new Set(((r=t.records)!=null?r:
[]).map(E=>E.type).filter(E=>!l.has(E)))];if(c.length)throw new Error(`orgPack: record type(s) ${c.join(", ")} are not d\
eclared as a datasource by any node in this config \u2014 the live app would never load them. Declare a data node (e.g. a sub\
section with data: {dataType, source: "storage"}) or remove the fixture records.`);let u=((n=t.records)!=null?n:[]).filter(
E=>E.isDeleted!==!0),d={objects:[...o.right.objectInstances,...u]},f=dP(t.plugins?{...NN(o.right.plugins),...t.context}:
(a=t.context)!=null?a:{}),h=aN(s,f,d);iN(h,(i=t.init)!=null?i:{});let y=()=>h.getState(),b=[],T=E=>{let _=Pa(y(),E);return xe(
_)&&_.right===!0},S=E=>{let _=H(y(),E);for(;_;){if(T(_.key))return!1;_=Gr(y(),_.key)}return!0};return{...h,evalAt:(E,_="")=>Ge(
$r(y(),E.startsWith("@")?E:`@${E}`,_)),value:E=>Ge(ir(y(),E)),lengthOf:E=>Ge(Ca(y(),E)),setValue:(E,_)=>{h.api.updateValue(
E,_)},clearValue:E=>{h.api.clearSubtree(E)},setCursor:(E,_)=>{h.api.setCursor(E,_)},isVisible:S,visibleChildren:E=>S(E)?
Ri(y(),E).map(_=>_.key):[],runningSlot:E=>{let _=_l(y(),"",E);if(_===void 0)throw new Error(`runningSlot: no node named \
"${E}" in this org`);return iP(y(),_)},childKeys:E=>$t(y(),E).map(_=>_.key),renderHtml:E=>{let _=H(y(),E).node.htmlTemplate;
if(typeof _!="string")throw new Error(`no htmlTemplate at pointer "${E}"`);let O=lp(_);if(!O.startsWith("@"))return O;let M=Ge(
$r(y(),O,E));if(M!==void 0&&typeof M!="string")throw new Error(`htmlTemplate at "${E}" evaluated to a non-string (${JSON.
stringify(M)}); the renderer rejects it. Wrap a html\`\u2026\` result in a template: @\`\${html\`\u2026\`}\``);return String(
M)},widgetCommands:b,nodeAt:E=>H(y(),E).node,runScriptAt:(E,_,O,M)=>{let W=O??H(y(),E).node.script;if(typeof W!="string"||
W.length===0)throw new Error(`no script found at pointer "${E}"`);let G=async(...Y)=>{(Y.length===1&&Array.isArray(Y[0])?
Y[0]:Y).map(pe=>{let ie=_l(y(),E,String(pe));if(ie===void 0)throw new Error(`clearValues: no node named "${String(pe)}" \
is in scope here`);return ie}).forEach(pe=>h.api.clearSubtree(pe))},Z=async(Y,te,_e)=>{let pe=_l(y(),E,String(Y));if(pe===
void 0)throw new Error(`sendToWidget: no node named "${String(Y)}" is in scope here`);if(!H(y(),pe).node.pluginName)throw new Error(
`sendToWidget: "${String(Y)}" is not a widget node`);b.push({widget:String(Y),key:pe,command:String(te),..._e===void 0?{}:
{args:_e}})},B=async Y=>{h.api.updateValue(H(y(),E).key,Y)},we=async Y=>{if(typeof Y!="object"||Y===null||Array.isArray(
Y))throw new Error("setValues: expected an object of {fieldName: value}, e.g. setValues({a: b, b: a})");let te=Object.entries(
Y).map(([_e,pe])=>{let ie=_l(y(),E,_e);if(ie===void 0)throw new Error(`setValues: no field named "${_e}" is in scope her\
e`);return pe===void 0?ky.clearValue(ie):ky.updateValue(ie,pe)});h.api.bulkAction(te)};return lR(y(),E,W,{..._,asyncHosts:{
...cP,clearValues:G,sendToWidget:Z,setValue:B,setValues:we,..._.asyncHosts}},M).then(uP)}}},fP=["id",...ow],Ay=e=>Object.
fromEntries(Object.entries(e).filter(([t])=>!fP.includes(t))),$y=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),hP=(e=[])=>{
let t=new Map(e.map(({id:o,type:s,...l})=>[`${s}/${o}`,l])),r=[],n=(o,s)=>{let l=String(s);if(typeof s!="string"||l.split(
"/").some(c=>c.length===0))throw new Error(`${o}: path "${l}" has an empty segment`);return l};return{writes:r,record:o=>t.
get(o),asyncHosts:{setRealtime:async(o,s)=>{if(n("setRealtime",o),!$y(s))throw new Error("setRealtime: `value` must be a\
n object");let l=Ay(s);return r.push({kind:"set",path:String(o),value:l}),t.set(String(o),l),l},updateRealtime:async(o,s)=>{
var l;if(n("updateRealtime",o),!$y(s))throw new Error("updateRealtime: `patch` must be an object");let c=Object.keys(s);
if(c.length===0)throw new Error("updateRealtime: `patch` must have at least one field");if(c.some(f=>f.includes("/")))throw new Error(
"updateRealtime: patch top-level fields only");let u=Ay(s);r.push({kind:"update",path:String(o),value:u});let d={...(l=t.
get(String(o)))!=null?l:{}};return Object.entries(u).forEach(([f,h])=>{h===null?delete d[f]:d[f]=h}),t.set(String(o),d),
u}}}};var mP=(e,t,r)=>{if(t.size===0)return`No ${r}s declared. Add a declaration to satisfy the reference.`;let n=[...t].map(o=>({
p:o,d:Yv(e,o)})).sort((o,s)=>o.d-s.d),a=n[0];if(a&&a.d<=3)return`Closest ${r}: \`${a.p}\`. Either rename the reference or\
 add \`${e}\` to the org config.`;let i=n.slice(0,5).map(o=>o.p).join(", ");return`Available ${r}s: ${i}. Either rename \
the reference or add \`${e}\`.`};var gP=["objectType","objectInstance","field","plugin","record","user"],gF=new Set([...l_,...c_,...Object.keys(ip),...gP,
...Object.keys(ov)]);var yP=e=>e.includes(o_)||e.includes("$")||e.includes("@")||e.includes("{"),vP=e=>{var t;let n=(e.startsWith("/")?e.slice(
1):e).split(".");return((t=n[n.length-1])!=null?t:"").replace(/\[\d+\]$/g,"")};var ea=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",yw=new Set(["navigate","replaceScreen","pushCursor","set\
Cursor"]),bP=new Set(["replaceScreen","setCursor"]);var Zp=e=>Array.isArray(e.arguments)?e.arguments:[],wP=e=>{if(!ea(e))return;let t=e.value;if(typeof t=="string")return t;
if(typeof t=="object"&&t!==null){let r=t.cooked;if(typeof r=="string")return r}},Xp=e=>{if(ea(e)){if(e.type==="Literal"&&
typeof e.value=="string")return e.value;if(e.type==="TemplateLiteral"&&Array.isArray(e.expressions)&&e.expressions.length===
0&&Array.isArray(e.quasis))return wP(e.quasis[0])}},TP=e=>(t,r)=>{var n;let a=[],[i,o]=Zp(t);if(i===void 0)return a.push(
{path:r.path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;ea(o)&&o.type==="Literal"&&a.push({path:r.
path,kind:"host-arg-type",message:`\`${e}\`'s second argument must be an object of nav args, not a literal.`,fixHint:`e.\
g. \`${e}('detail', {id: $params.id})\`.`,severity:"error"});let s=Xp(i);if(s!==void 0&&s.length===0)return a.push({path:r.
path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;if(s===void 0||r.navTargets===void 0||yP(
s))return a;let l=vP(s);return l.length===0?a:r.navTargets.has(l)?(bP.has(e)&&((n=r.flowBearing)==null?void 0:n.has(l))===
!0&&a.push({path:r.path,kind:"action-replace-into-flow",message:`\`${e}("${s}")\` replaces into a screen that contains a \
flow \u2014 replace skips the flow-state reset, so re-entering shows the previous run's completed step instead of a fresh flo\
w.`,fixHint:`Use \`navigate("${s}")\` (push resets flow state under the target and gives Back a nav-stack entry).`,severity:"\
warning"}),a):(a.push({path:r.path,kind:"missing-screen",message:`\`${e}("${s}")\` does not match any named node in appCo\
nfig \u2014 the call will fail at runtime.`,fixHint:mP(l,r.navTargets,"navigation target"),severity:"error"}),a)},kP=(e,t)=>Zp(
e).length===0?[]:[{path:t.path,kind:"host-arg-type",message:"`back()` takes no arguments \u2014 it always goes back one nav-s\
tack entry.",fixHint:"Use `back()`; to go to a specific screen use `navigate('screen')`.",severity:"warning"}],_d=(e,t)=>{
if(!ea(e)||e.type!=="ObjectExpression")return;let r=Array.isArray(e.properties)?e.properties:[];for(let n of r){if(!ea(n)||
n.type!=="Property"||n.computed===!0)continue;let a=n.key;if((ea(a)?a.type==="Identifier"&&typeof a.name=="string"?a.name:
Xp(a):void 0)===t)return n.value}},SP=e=>ea(e)?e.type==="ObjectExpression"?[e]:e.type==="ArrayExpression"&&Array.isArray(
e.elements)?e.elements.filter(t=>ea(t)&&t.type==="ObjectExpression"):[]:[],Ry=(e,t)=>(r,n)=>{var a;let i=n.objectTypeFieldTypes,
[o]=Zp(r),s=Xp(_d(o,"type"));if(i===void 0||s===void 0)return[];let l=i.get(s);if(l===void 0)return[];let c=(a=[...l].find(
([,u])=>u.kind==="builtin"&&u.name==="parentRef"))==null?void 0:a[0];return c===void 0?[]:SP(_d(o,t)).filter(u=>_d(u,"_p\
arent")!==void 0).map(()=>({path:n.path,kind:"tree-mixed-parent-spellings",message:`${e} writes \`_parent\` on a \`${s}\`\
, but \`${s}\` declares the \`parentRef\` field \`${c}\`, so the tree reads only \`${c}\` and ignores \`_parent\`.`,fixHint:`\
Write the parent's id to \`${c}\` instead (\`${c}: <parent id>\`), or remove the \`parentRef\` field from \`${s}\` to use\
 the implicit \`_parent\` link everywhere.`,severity:"error"}))},yF=new Map([...[...yw].map(e=>[e,TP(e)]),["back",kP],["\
publishData",Ry("publishData","data")],["updateData",Ry("updateData","patch")]]),vF=new RegExp(`\\b(?:${[...yw].join("|")}\
)\\(`);var EP=vw.keyof({Person:null});var xP=N.intersection([N.type({name:N.string}),N.partial({type:N.string})]),bw=N.intersection([N.type({name:N.string,fields:N.array(
xP)}),N.partial({description:N.string,wellKnown:EP})]),_P=N.keyof({appFeature:null,none:null}),AP=N.keyof({host:null,global:null,
user:null,group:null}),$P=N.partial({types:N.array(bw),scope:AP,nav:_P,plugins:N.array(N.string)}),RP=N.intersection([N.type(
{screen:N.string,title:N.string}),N.partial({pic:N.string})]),IP=N.intersection([N.type({name:N.string,shape:N.union([N.string,
N.record(N.string,N.string)])}),N.partial({description:N.string})]),OP=N.intersection([N.type({types:N.array(N.string),screens:N.array(
N.string)}),N.partial({functions:N.array(N.string),plugins:N.array(N.string),nav:N.array(RP),notifications:N.array(N.string),
slots:N.array(IP)})]),CP=N.partial({entities:N.array(N.string),seedSlots:N.array(N.string),labels:N.array(N.string)});var NP=N.intersection([N.type({name:N.string,hostType:bw,slot:N.string,fn:N.string}),N.partial({description:N.string})]),
PP=N.intersection([N.type({id:N.string,version:N.number,description:N.string,requires:$P,provides:OP}),N.partial({params:CP,
seams:N.array(NP)})]),DP=N.partial({nav:N.array(N.unknown),navFolder:N.string,notifications:N.array(N.unknown)}),MP=N.partial(
{appConfig:N.array(N.unknown),objectTypes:N.array(N.unknown),objectInstances:N.array(N.unknown),plugins:N.array(N.unknown),
shell:DP}),bF=N.type({manifest:PP,body:MP});var wF=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,
310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,
1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,
773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,
3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,
1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var TF=[...Y_];var jP={if:{min:3,max:3},and:{min:0,max:null},or:{min:0,max:null},length:{min:1,max:1},sum:{min:1,max:1},avg:{min:1,max:1},
min:{min:0,max:null},max:{min:0,max:null},first:{min:1,max:1},last:{min:1,max:1},flatten:{min:1,max:1},clamp:{min:3,max:3},
split:{min:1,max:2},join:{min:1,max:2},concat:{min:0,max:null},upper:{min:1,max:1},lower:{min:1,max:1},floor:{min:1,max:1},
ceil:{min:1,max:1},round:{min:1,max:1},abs:{min:1,max:1},today:{min:0,max:0},dateFrom:{min:1,max:1},dateCompare:{min:2,max:2},
formatDate:{min:1,max:2},formatPeriod:{min:1,max:2},generateId:{min:1,max:2},regex:{min:1,max:2},fuzzyMatch:{min:2,max:2},
toJson:{min:1,max:2},rand:{min:1,max:1},uniq:{min:1,max:2},sort:{min:1,max:3},shuffle:{min:2,max:2},handRank:{min:1,max:1},
replace:{min:2,max:3},omit:{min:2,max:2},pick:{min:2,max:2},toMap:{min:2,max:3},keys:{min:1,max:1},values:{min:1,max:1},
entries:{min:1,max:1},mapValues:{min:2,max:2},escapeHtml:{min:1,max:1},safeCssColor:{min:1,max:2},urlEncode:{min:1,max:1},
html:{min:1,max:null},progressBar:{min:1,max:2},progressRing:{min:1,max:2},sparkline:{min:1,max:2},now:{min:0,max:0},nextOccurrence:{
min:3,max:4},byId:{min:2,max:2},forEach:{min:2,max:2},filter:{min:2,max:2},map:{min:2,max:2},reduce:{min:2,max:3},times:{
min:2,max:2},every:{min:2,max:2},some:{min:2,max:2},find:{min:2,max:2},findIndex:{min:2,max:2},count:{min:1,max:2},groupBy:{
min:2,max:2},sumBy:{min:2,max:2}};var kF=new Set(Es.map(e=>e.name));var SF=new Map(gw.map(e=>[e,new Set(lP(e))])),EF=new Set(oP);var xF=new Map(Object.entries(jP));var LP=[{attribute:"data-action",label:"Declared action",html:'<button data-action="openTab" data-param-id="${id}">Open<\
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
s`, never `param`",status:"legacy"}],_F=LP.map(e=>e.attribute).filter((e,t,r)=>r.indexOf(e)===t),Tc=[{id:"rel",tokens:["\
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
t"'],attributes:[],prompt:{order:5,line:'`href="@submit"` \u2192 an action whose `script` calls `publishData({type, data: {\u2026}\
})`, naming each input'}}],UP=Object.fromEntries(Tc.map(e=>[e.id,e]));var AF=Tc.flatMap(e=>[...e.tokens]),$F=Tc.filter(e=>e.prompt!==void 0).sort((e,t)=>e.prompt.order-t.prompt.order).map(e=>e.
prompt.line);var RF=UP.rel,IF=Tc.filter(e=>e.id!=="rel"&&e.attributes.length>0);var FP=["versionId","apiVersion","appConfig","objectTypes","objectInstances","plugins","users"],BP=["orgSummary","minCli\
entVersion"],OF=[...FP,...BP];var CF=new Map(Object.entries(u_));var NF=new Map(Object.entries(d_)),PF=new Map(Object.entries(p_).map(([e,t])=>[e,Object.entries(t)])),Iy,DF=Object.entries(
(Iy=f_.objectTypeField)!=null?Iy:{});var HP=["archiveData","archiveId"],MF=["archiveType",...HP];var jF=Wl.Allow.OBJ|Wl.Allow.ARR;var LF=[...iv].filter(e=>e!=="variable");var WP="| `customize` | `feature`, `reason` | declares that you are changing an installed feature's own nodes. Without i\
t, the closing gate refuses any change inside a `feature-\u2026` folder |",UF=`

## Installed features

Folders named \`feature-<slug>\` hold installed features: tested functionality this org shares with others. Change a node \
inside one only when the request needs it, and declare the change first:

| op | fields | what it does |
|---|---|---|
${WP}`;var FF=new Set("a an the and or for of to in on with my our your me i we it its this that app apps application something\
 some thing things help keep can like want make build create need would should could be is are was let lets using use si\
mple new tool tools just also all any".split(" ")),qP=e=>e.length>4&&e.endsWith("ies")?`${e.slice(0,-3)}y`:e.length>3&&e.
endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e;var VP=[[["chat","tutor","talk","conversation","speak","spoken","voice"],["ai-chat"]],[["ai","generate","generated","gen\
erator","smart"],["ai-query","image-generation"]],[["image","picture","photo","camera","illustrated"],["image-generation",
"ai-query"]],[["game","party","multiplayer","player","live","realtime","round"],["realtime","transitions"]],[["quiz","re\
vise","revision","flashcard","exam","study","learn","lesson"],["flows","tabs"]],[["booking","book","schedule","calendar",
"rota","signup","form","track","tracker","log"],["forms","storage-data"]],[["notify","notification","reminder","alert"],
["push"]],[["video","call","youtube"],["video"]],[["music","song","audio","jingle","playlist","podcast"],["audio"]],[["m\
ap","trip","travel","holiday","itinerary","route"],["maps"]],[["login","member","private","pin"],["org-login","auth-priv\
ate"]],[["team","group","share","shared","friend"],["group-scoped","realtime"]],[["personal","journal","diary"],["user-s\
coped"]]],BF=new Map(VP.flatMap(([e,t])=>e.map(r=>[qP(r),t])));var YP=ze.intersection([ze.type({name:ze.string}),ze.partial({parent:ze.union([ze.string,ze.null])})]),zP=ze.type({orgIds:ze.array(
ze.string)}),HF=ze.partial({folders:ze.record(ze.string,YP),containers:ze.record(ze.string,zP),folderOrder:ze.array(ze.string)});var Tw=F.keyof({new:null,claimed:null,"fixed-draft":null,published:null,closed:null}),Dt=e=>F.union([e,F.null]),KP=F.intersection(
[F.type({qualifiedOrgId:F.string}),F.partial({configSource:Dt(F.string),versionId:Dt(F.string),previewDraft:Dt(F.boolean),
variant:Dt(F.string)})]),GP=F.intersection([F.type({pathname:F.string}),F.partial({search:Dt(F.string),pointerKey:Dt(F.string),
screenLabel:Dt(F.string)})]),JP=F.partial({buildCommit:F.string,buildTimestamp:F.string,capabilityVersion:F.number,userAgent:F.string,
platform:F.string,language:F.string,timezone:F.string,viewport:F.type({w:F.number,h:F.number}),dpr:F.number,standalone:F.boolean,
online:F.boolean,touch:F.boolean}),ZP=F.partial({screenshot:F.type({path:F.string,bytes:F.number,w:F.number,h:F.number}),
state:F.type({path:F.string,bytes:F.number})}),kw={statusNote:Dt(F.string),branch:Dt(F.string),prUrl:Dt(F.string)},WF=F.intersection(
[F.type({id:F.string,createdAt:F.string,reporterUid:F.string,description:F.string,target:KP,location:GP,status:Tw}),F.partial(
{reporterUsername:Dt(F.string),reporterIsOwner:Dt(F.boolean),client:Dt(JP),attachments:Dt(ZP),...kw,statusUpdatedAt:Dt(F.string),
statusUpdatedBy:Dt(F.string)})]),qF=F.intersection([F.type({status:Tw,statusUpdatedAt:F.string,statusUpdatedBy:F.string}),
F.partial(kw)]);var VF=24*60*60*1e3;import XP from"node:fs";var QP=e=>{if(e===null||typeof e!="object")return!1;let t=e.appConfig;if(!t||typeof t!="object")return!1;let r=t;return Array.
isArray(r.data)&&Array.isArray(r.lengths)?!1:!!(Array.isArray(r._children)||r.type==="app")},Sw=e=>e instanceof Error?e.
message:String(e),Qp=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),eD=e=>Qp(e)&&QP(e),tD=e=>Qp(e)&&Qp(e.appConfig)&&
Array.isArray(e.appConfig.data)&&Array.isArray(e.appConfig.lengths),Ew=e=>{let t;try{t=XP.readFileSync(e,"utf8")}catch(n){
return Pe(`cannot read ${e}: ${Sw(n)}`)}let r;try{r=JSON.parse(t)}catch(n){return Pe(`${e} is not valid JSON: ${Sw(n)}`)}
return eD(r)?R(r):tD(r)?R(tw(r)):Pe(`${e} is not an org config (no appConfig in tree or pointer format)`)};var n4=e=>{let t=typeof e=="string"&&!e.startsWith("file:")?e:rD(e),r=Ew(t);if(D(r))throw new Error(r.left);return r.right};export{pP as createOrgPackApi,hP as createRealtimeStore,n4 as loadOrgTree};
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
