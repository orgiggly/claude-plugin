import { createRequire as __ogCreateRequire } from "node:module";
const require = __ogCreateRequire(import.meta.url);
var Fw=Object.create;var vf=Object.defineProperty;var Uw=Object.getOwnPropertyDescriptor;var Bw=Object.getOwnPropertyNames;var Hw=Object.getPrototypeOf,Ww=Object.prototype.hasOwnProperty;var We=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var qw=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Bw(t))!Ww.call(e,a)&&a!==r&&vf(e,a,{get:()=>t[a],
enumerable:!(n=Uw(t,a))||n.enumerable});return e};var oe=(e,t,r)=>(r=e!=null?Fw(Hw(e)):{},qw(t||!e||!e.__esModule?vf(r,"default",{value:e,enumerable:!0}):r,e));var Fn=We(X=>{"use strict";var Vw=X&&X.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(X,"__esModule",{value:!0});X.dual=X.getEndomorphismMonoid=X.SK=X.hole=X.constVoid=X.constUndefined=
X.constNull=X.constFalse=X.constTrue=X.unsafeCoerce=X.apply=X.getRing=X.getSemiring=X.getMonoid=X.getSemigroup=X.getBooleanAlgebra=
void 0;X.identity=$c;X.constant=Di;X.flip=Xw;X.flow=bf;X.tuple=Qw;X.increment=eT;X.decrement=tT;X.absurd=wf;X.tupled=rT;
X.untupled=nT;X.pipe=aT;X.not=oT;var Yw=function(e){return function(){return{meet:function(t,r){return function(n){return e.
meet(t(n),r(n))}},join:function(t,r){return function(n){return e.join(t(n),r(n))}},zero:function(){return e.zero},one:function(){
return e.one},implies:function(t,r){return function(n){return e.implies(t(n),r(n))}},not:function(t){return function(r){
return e.not(t(r))}}}}};X.getBooleanAlgebra=Yw;var zw=function(e){return function(){return{concat:function(t,r){return function(n){
return e.concat(t(n),r(n))}}}}};X.getSemigroup=zw;var Kw=function(e){var t=(0,X.getSemigroup)(e);return function(){return{
concat:t().concat,empty:function(){return e.empty}}}};X.getMonoid=Kw;var Gw=function(e){return{add:function(t,r){return function(n){
return e.add(t(n),r(n))}},zero:function(){return e.zero},mul:function(t,r){return function(n){return e.mul(t(n),r(n))}},
one:function(){return e.one}}};X.getSemiring=Gw;var Jw=function(e){var t=(0,X.getSemiring)(e);return{add:t.add,mul:t.mul,
one:t.one,zero:t.zero,sub:function(r,n){return function(a){return e.sub(r(a),n(a))}}}};X.getRing=Jw;var Zw=function(e){return function(t){
return t(e)}};X.apply=Zw;function $c(e){return e}X.unsafeCoerce=$c;function Di(e){return function(){return e}}X.constTrue=
Di(!0);X.constFalse=Di(!1);X.constNull=Di(null);X.constUndefined=Di(void 0);X.constVoid=X.constUndefined;function Xw(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.length>1?e(t[1],t[0]):function(n){return e(
n)(t[0])}}}function bf(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:return function(){return t(e.apply(
this,arguments))};case 3:return function(){return r(t(e.apply(this,arguments)))};case 4:return function(){return n(r(t(e.
apply(this,arguments))))};case 5:return function(){return a(n(r(t(e.apply(this,arguments)))))};case 6:return function(){
return i(a(n(r(t(e.apply(this,arguments))))))};case 7:return function(){return o(i(a(n(r(t(e.apply(this,arguments)))))))};case 8:
return function(){return s(o(i(a(n(r(t(e.apply(this,arguments))))))))};case 9:return function(){return l(s(o(i(a(n(r(t(e.
apply(this,arguments)))))))))}}}function Qw(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e}function eT(e){
return e+1}function tT(e){return e-1}function wf(e){throw new Error("Called `absurd` function which should be uncallable")}
function rT(e){return function(t){return e.apply(void 0,t)}}function nT(e){return function(){for(var t=[],r=0;r<arguments.
length;r++)t[r]=arguments[r];return e(t)}}function aT(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:
return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:
return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],
u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}X.hole=wf;var iT=function(e,t){return t};X.SK=iT;function oT(e){
return function(t){return!e(t)}}var sT=function(){return{concat:function(e,t){return bf(e,t)},empty:$c}};X.getEndomorphismMonoid=
sT;var lT=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,Vw([a],n,!1))}}};X.dual=lT});var ji=We(z=>{"use strict";var cT=z&&z.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(z,"__esModule",{value:!0});z.flatMapReader=z.flatMapTask=z.flatMapIO=z.flatMapEither=z.flatMapOption=
z.flatMapNullable=z.liftOption=z.liftNullable=z.fromReadonlyNonEmptyArray=z.has=z.emptyRecord=z.emptyReadonlyArray=z.tail=
z.head=z.isNonEmpty=z.singleton=z.right=z.left=z.isRight=z.isLeft=z.some=z.none=z.isSome=z.isNone=void 0;var Ha=Fn(),uT=function(e){
return e._tag==="None"};z.isNone=uT;var dT=function(e){return e._tag==="Some"};z.isSome=dT;z.none={_tag:"None"};var pT=function(e){
return{_tag:"Some",value:e}};z.some=pT;var fT=function(e){return e._tag==="Left"};z.isLeft=fT;var hT=function(e){return e.
_tag==="Right"};z.isRight=hT;var mT=function(e){return{_tag:"Left",left:e}};z.left=mT;var gT=function(e){return{_tag:"Ri\
ght",right:e}};z.right=gT;var yT=function(e){return[e]};z.singleton=yT;var vT=function(e){return e.length>0};z.isNonEmpty=
vT;var bT=function(e){return e[0]};z.head=bT;var wT=function(e){return e.slice(1)};z.tail=wT;z.emptyReadonlyArray=[];z.emptyRecord=
{};z.has=Object.prototype.hasOwnProperty;var TT=function(e){return cT([e[0]],e.slice(1),!0)};z.fromReadonlyNonEmptyArray=
TT;var kT=function(e){return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.
apply(void 0,n);return e.fromEither(i==null?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i))}}};z.liftNullable=kT;var ST=function(e){
return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.apply(void 0,n);
return e.fromEither((0,z.isNone)(i)?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i.value))}}};z.liftOption=ST;var ET=function(e,t){
return(0,Ha.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftNullable)(e)(n,a))})};z.flatMapNullable=ET;var xT=function(e,t){
return(0,Ha.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftOption)(e)(n,a))})};z.flatMapOption=xT;var _T=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromEither(n(a))})})};z.flatMapEither=_T;var AT=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromIO(n(a))})})};z.flatMapIO=AT;var $T=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromTask(n(a))})})};z.flatMapTask=$T;var RT=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromReader(n(a))})})};z.flatMapReader=RT});var Oc=We(Dt=>{"use strict";var IT=Dt&&Dt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),OT=Dt&&Dt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),CT=Dt&&
Dt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&IT(t,e,r);return OT(t,e),t};Object.defineProperty(Dt,"__esModule",{value:!0});Dt.ap=MT;Dt.apFirst=
DT;Dt.apSecond=jT;Dt.apS=LT;Dt.getApplySemigroup=FT;Dt.sequenceT=BT;Dt.sequenceS=WT;var NT=Fn(),PT=CT(ji());function MT(e,t){
return function(r){return function(n){return e.ap(e.map(n,function(a){return function(i){return t.ap(a,i)}}),r)}}}function DT(e){
return function(t){return function(r){return e.ap(e.map(r,function(n){return function(){return n}}),t)}}}function jT(e){
return function(t){return function(r){return e.ap(e.map(r,function(){return function(n){return n}}),t)}}}function LT(e){
return function(t,r){return function(n){return e.ap(e.map(n,function(a){return function(i){var o;return Object.assign({},
a,(o={},o[t]=i,o))}}),r)}}}function FT(e){return function(t){return{concat:function(r,n){return e.ap(e.map(r,function(a){
return function(i){return t.concat(a,i)}}),n)}}}}function Ic(e,t,r){return function(n){for(var a=Array(r.length+1),i=0;i<
r.length;i++)a[i]=r[i];return a[r.length]=n,t===0?e.apply(null,a):Ic(e,t-1,a)}}var Rc={1:function(e){return[e]},2:function(e){
return function(t){return[e,t]}},3:function(e){return function(t){return function(r){return[e,t,r]}}},4:function(e){return function(t){
return function(r){return function(n){return[e,t,r,n]}}}},5:function(e){return function(t){return function(r){return function(n){
return function(a){return[e,t,r,n,a]}}}}}};function UT(e){return PT.has.call(Rc,e)||(Rc[e]=Ic(NT.tuple,e-1,[])),Rc[e]}function BT(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=t.length,a=UT(n),i=e.map(t[0],a),o=1;o<
n;o++)i=e.ap(i,t[o]);return i}}function HT(e){var t=e.length;switch(t){case 1:return function(r){var n;return n={},n[e[0]]=
r,n};case 2:return function(r){return function(n){var a;return a={},a[e[0]]=r,a[e[1]]=n,a}};case 3:return function(r){return function(n){
return function(a){var i;return i={},i[e[0]]=r,i[e[1]]=n,i[e[2]]=a,i}}};case 4:return function(r){return function(n){return function(a){
return function(i){var o;return o={},o[e[0]]=r,o[e[1]]=n,o[e[2]]=a,o[e[3]]=i,o}}}};case 5:return function(r){return function(n){
return function(a){return function(i){return function(o){var s;return s={},s[e[0]]=r,s[e[1]]=n,s[e[2]]=a,s[e[3]]=i,s[e[4]]=
o,s}}}}};default:return Ic(function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var a={},i=0;i<t;i++)
a[e[i]]=r[i];return a},t-1,[])}}function WT(e){return function(t){for(var r=Object.keys(t),n=r.length,a=HT(r),i=e.map(t[r[0]],
a),o=1;o<n;o++)i=e.ap(i,t[r[o]]);return i}}});var js=We(gn=>{"use strict";Object.defineProperty(gn,"__esModule",{value:!0});gn.map=Tf;gn.flap=VT;gn.bindTo=YT;gn.let=zT;
gn.getFunctorComposition=KT;gn.as=kf;gn.asUnit=GT;var qT=Fn();function Tf(e,t){return function(r){return function(n){return e.
map(n,function(a){return t.map(a,r)})}}}function VT(e){return function(t){return function(r){return e.map(r,function(n){
return n(t)})}}}function YT(e){return function(t){return function(r){return e.map(r,function(n){var a;return a={},a[t]=n,
a})}}}function zT(e){return function(t,r){return function(n){return e.map(n,function(a){var i;return Object.assign({},a,
(i={},i[t]=r(a),i))})}}}function KT(e,t){var r=Tf(e,t);return{map:function(n,a){return(0,qT.pipe)(n,r(a))}}}function kf(e){
return function(t,r){return e.map(t,function(){return r})}}function GT(e){var t=kf(e);return function(r){return t(r,void 0)}}});var Ef=We(Ls=>{"use strict";Object.defineProperty(Ls,"__esModule",{value:!0});Ls.getApplicativeMonoid=XT;Ls.getApplicativeComposition=
QT;var Sf=Oc(),JT=Fn(),ZT=js();function XT(e){var t=(0,Sf.getApplySemigroup)(e);return function(r){return{concat:t(r).concat,
empty:e.of(r.empty)}}}function QT(e,t){var r=(0,ZT.getFunctorComposition)(e,t).map,n=(0,Sf.ap)(e,t);return{map:r,of:function(a){
return e.of(t.of(a))},ap:function(a,i){return(0,JT.pipe)(a,n(i))}}}});var Cc=We(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.chainFirst=ek;Li.tap=xf;Li.bind=tk;function ek(e){
var t=xf(e);return function(r){return function(n){return t(n,r)}}}function xf(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}function tk(e){return function(t,r){return function(n){return e.chain(n,function(a){
return e.map(r(a),function(i){var o;return Object.assign({},a,(o={},o[t]=i,o))})})}}}});var _f=We(Fs=>{"use strict";Object.defineProperty(Fs,"__esModule",{value:!0});Fs.tailRec=void 0;var rk=function(e,t){for(var r=t(
e);r._tag==="Left";)r=t(r.left);return r.right};Fs.tailRec=rk});var Of=We(kt=>{"use strict";var nk=kt&&kt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),ak=kt&&kt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ik=kt&&
kt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&nk(t,e,r);return ak(t,e),t};Object.defineProperty(kt,"__esModule",{value:!0});kt.fromOption=$f;
kt.fromPredicate=sk;kt.fromOptionK=Rf;kt.chainOptionK=lk;kt.fromEitherK=Nc;kt.chainEitherK=ck;kt.chainFirstEitherK=uk;kt.
filterOrElse=dk;kt.tapEither=If;var ok=Cc(),Af=Fn(),ca=ik(ji());function $f(e){return function(t){return function(r){return e.
fromEither(ca.isNone(r)?ca.left(t()):ca.right(r.value))}}}function sk(e){return function(t,r){return function(n){return e.
fromEither(t(n)?ca.right(n):ca.left(r(n)))}}}function Rf(e){var t=$f(e);return function(r){var n=t(r);return function(a){
return(0,Af.flow)(a,n)}}}function lk(e,t){var r=Rf(e);return function(n){var a=r(n);return function(i){return function(o){
return t.chain(o,a(i))}}}}function Nc(e){return function(t){return(0,Af.flow)(t,e.fromEither)}}function ck(e,t){var r=Nc(
e);return function(n){return function(a){return t.chain(a,r(n))}}}function uk(e,t){var r=If(e,t);return function(n){return function(a){
return r(a,n)}}}function dk(e,t){return function(r,n){return function(a){return t.chain(a,function(i){return e.fromEither(
r(i)?ca.right(i):ca.left(n(i)))})}}}function If(e,t){var r=Nc(e),n=(0,ok.tap)(t);return function(a,i){return n(a,r(i))}}});var Cf=We(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.right=ke.left=ke.flap=ke.Functor=ke.Bifunctor=
ke.URI=ke.bimap=ke.mapLeft=ke.map=ke.separated=void 0;var Pc=Fn(),pk=js(),fk=function(e,t){return{left:e,right:t}};ke.separated=
fk;var hk=function(e,t){return(0,Pc.pipe)(e,(0,ke.map)(t))},mk=function(e,t){return(0,Pc.pipe)(e,(0,ke.mapLeft)(t))},gk=function(e,t,r){
return(0,Pc.pipe)(e,(0,ke.bimap)(t,r))},yk=function(e){return function(t){return(0,ke.separated)((0,ke.left)(t),e((0,ke.
right)(t)))}};ke.map=yk;var vk=function(e){return function(t){return(0,ke.separated)(e((0,ke.left)(t)),(0,ke.right)(t))}};
ke.mapLeft=vk;var bk=function(e,t){return function(r){return(0,ke.separated)(e((0,ke.left)(r)),t((0,ke.right)(r)))}};ke.
bimap=bk;ke.URI="Separated";ke.Bifunctor={URI:ke.URI,mapLeft:mk,bimap:gk};ke.Functor={URI:ke.URI,map:hk};ke.flap=(0,pk.flap)(
ke.Functor);var wk=function(e){return e.left};ke.left=wk;var Tk=function(e){return e.right};ke.right=Tk});var Pf=We(Wr=>{"use strict";var kk=Wr&&Wr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Sk=Wr&&Wr.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Ek=Wr&&
Wr.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&kk(t,e,r);return Sk(t,e),t};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.wiltDefault=xk;
Wr.witherDefault=_k;Wr.filterE=Ak;var Nf=Ek(ji());function xk(e,t){return function(r){var n=e.traverse(r);return function(a,i){
return r.map(n(a,i),t.separate)}}}function _k(e,t){return function(r){var n=e.traverse(r);return function(a,i){return r.
map(n(a,i),t.compact)}}}function Ak(e){return function(t){var r=e.wither(t);return function(n){return function(a){return r(
a,function(i){return t.map(n(i),function(o){return o?Nf.some(i):Nf.none})})}}}}});var Hf=We(m=>{"use strict";var $k=m&&m.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Rk=m&&m.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Df=m&&
m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&$k(t,e,r);return Rk(t,e),t};Object.defineProperty(m,"__esModule",{value:!0});m.match=m.foldW=m.
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
void 0;m.toError=i1;m.elem=Bf;m.parseJSON=d1;m.getValidation=m1;var jf=Ef(),Fi=Oc(),Lf=Df(Cc()),Ik=_f(),Ui=Of(),lt=Fn(),
Bi=js(),Cr=Df(ji()),yn=Cf(),Mf=Pf();m.left=Cr.left;m.right=Cr.right;m.flatMap=(0,lt.dual)(2,function(e,t){return(0,m.isLeft)(
e)?e:t(e.right)});var It=function(e,t){return(0,lt.pipe)(e,(0,m.map)(t))},ua=function(e,t){return(0,lt.pipe)(e,(0,m.ap)(
t))},Hi=function(e,t,r){return(0,lt.pipe)(e,(0,m.reduce)(t,r))},Wi=function(e){return function(t,r){var n=(0,m.foldMap)(
e);return(0,lt.pipe)(t,n(r))}},qi=function(e,t,r){return(0,lt.pipe)(e,(0,m.reduceRight)(t,r))},Us=function(e){var t=(0,m.
traverse)(e);return function(r,n){return(0,lt.pipe)(r,t(n))}},Mc=function(e,t,r){return(0,lt.pipe)(e,(0,m.bimap)(t,r))},
Dc=function(e,t){return(0,lt.pipe)(e,(0,m.mapLeft)(t))},Ff=function(e,t){return(0,lt.pipe)(e,(0,m.alt)(t))},jc=function(e,t){
return(0,lt.pipe)(e,(0,m.extend)(t))},Lc=function(e,t){return(0,Ik.tailRec)(t(e),function(r){return(0,m.isLeft)(r)?(0,m.
right)((0,m.left)(r.left)):(0,m.isLeft)(r.right)?(0,m.left)(t(r.right.left)):(0,m.right)((0,m.right)(r.right.right))})};
m.URI="Either";var Ok=function(e,t){return{show:function(r){return(0,m.isLeft)(r)?"left(".concat(e.show(r.left),")"):"ri\
ght(".concat(t.show(r.right),")")}}};m.getShow=Ok;var Ck=function(e,t){return{equals:function(r,n){return r===n||((0,m.isLeft)(
r)?(0,m.isLeft)(n)&&e.equals(r.left,n.left):(0,m.isRight)(n)&&t.equals(r.right,n.right))}}};m.getEq=Ck;var Nk=function(e){
return{concat:function(t,r){return(0,m.isLeft)(r)?t:(0,m.isLeft)(t)?r:(0,m.right)(e.concat(t.right,r.right))}}};m.getSemigroup=
Nk;var Pk=function(e){var t=(0,m.left)(e.empty);return{URI:m.URI,_E:void 0,compact:function(r){return(0,m.isLeft)(r)?r:r.
right._tag==="None"?t:(0,m.right)(r.right.value)},separate:function(r){return(0,m.isLeft)(r)?(0,yn.separated)(r,r):(0,m.
isLeft)(r.right)?(0,yn.separated)((0,m.right)(r.right.left),t):(0,yn.separated)(t,(0,m.right)(r.right.right))}}};m.getCompactable=
Pk;var Mk=function(e){var t=(0,m.left)(e.empty),r=(0,m.getCompactable)(e),n=r.compact,a=r.separate,i=function(s,l){return(0,m.
isLeft)(s)||l(s.right)?s:t},o=function(s,l){return(0,m.isLeft)(s)?(0,yn.separated)(s,s):l(s.right)?(0,yn.separated)(t,(0,m.
right)(s.right)):(0,yn.separated)((0,m.right)(s.right),t)};return{URI:m.URI,_E:void 0,map:It,compact:n,separate:a,filter:i,
filterMap:function(s,l){if((0,m.isLeft)(s))return s;var c=l(s.right);return c._tag==="None"?t:(0,m.right)(c.value)},partition:o,
partitionMap:function(s,l){if((0,m.isLeft)(s))return(0,yn.separated)(s,s);var c=l(s.right);return(0,m.isLeft)(c)?(0,yn.separated)(
(0,m.right)(c.left),t):(0,yn.separated)(t,(0,m.right)(c.right))}}};m.getFilterable=Mk;var Dk=function(e){var t=(0,m.getFilterable)(
e),r=(0,m.getCompactable)(e);return{URI:m.URI,_E:void 0,map:It,compact:t.compact,separate:t.separate,filter:t.filter,filterMap:t.
filterMap,partition:t.partition,partitionMap:t.partitionMap,traverse:Us,sequence:m.sequence,reduce:Hi,foldMap:Wi,reduceRight:qi,
wither:(0,Mf.witherDefault)(m.Traversable,r),wilt:(0,Mf.wiltDefault)(m.Traversable,r)}};m.getWitherable=Dk;var jk=function(e){
return{URI:m.URI,_E:void 0,map:It,ap:function(t,r){return(0,m.isLeft)(t)?(0,m.isLeft)(r)?(0,m.left)(e.concat(t.left,r.left)):
t:(0,m.isLeft)(r)?r:(0,m.right)(t.right(r.right))},of:m.of}};m.getApplicativeValidation=jk;var Lk=function(e){return{URI:m.
URI,_E:void 0,map:It,alt:function(t,r){if((0,m.isRight)(t))return t;var n=r();return(0,m.isLeft)(n)?(0,m.left)(e.concat(
t.left,n.left)):n}}};m.getAltValidation=Lk;var Fk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.right)(e(t.
right))}};m.map=Fk;m.Functor={URI:m.URI,map:It};m.as=(0,lt.dual)(2,(0,Bi.as)(m.Functor));m.asUnit=(0,Bi.asUnit)(m.Functor);
m.of=m.right;m.Pointed={URI:m.URI,of:m.of};var Uk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.isLeft)(e)?
e:(0,m.right)(t.right(e.right))}};m.apW=Uk;m.ap=m.apW;m.Apply={URI:m.URI,map:It,ap:ua};m.Applicative={URI:m.URI,map:It,ap:ua,
of:m.of};m.Chain={URI:m.URI,map:It,ap:ua,chain:m.flatMap};m.Monad={URI:m.URI,map:It,ap:ua,of:m.of,chain:m.flatMap};var Bk=function(e,t){
return function(r){return(0,m.isLeft)(r)?e:t(e,r.right)}};m.reduce=Bk;var Hk=function(e){return function(t){return function(r){
return(0,m.isLeft)(r)?e.empty:t(r.right)}}};m.foldMap=Hk;var Wk=function(e,t){return function(r){return(0,m.isLeft)(r)?e:
t(r.right,e)}};m.reduceRight=Wk;m.Foldable={URI:m.URI,reduce:Hi,foldMap:Wi,reduceRight:qi};var qk=function(e){return function(t){
return function(r){return(0,m.isLeft)(r)?e.of((0,m.left)(r.left)):e.map(t(r.right),m.right)}}};m.traverse=qk;var Vk=function(e){
return function(t){return(0,m.isLeft)(t)?e.of((0,m.left)(t.left)):e.map(t.right,m.right)}};m.sequence=Vk;m.Traversable={
URI:m.URI,map:It,reduce:Hi,foldMap:Wi,reduceRight:qi,traverse:Us,sequence:m.sequence};var Yk=function(e,t){return function(r){
return(0,m.isLeft)(r)?(0,m.left)(e(r.left)):(0,m.right)(t(r.right))}};m.bimap=Yk;var zk=function(e){return function(t){return(0,m.
isLeft)(t)?(0,m.left)(e(t.left)):t}};m.mapLeft=zk;m.Bifunctor={URI:m.URI,bimap:Mc,mapLeft:Dc};var Kk=function(e){return function(t){
return(0,m.isLeft)(t)?e():t}};m.altW=Kk;m.alt=m.altW;m.Alt={URI:m.URI,map:It,alt:Ff};var Gk=function(e){return function(t){
return(0,m.isLeft)(t)?t:(0,m.right)(e(t))}};m.extend=Gk;m.Extend={URI:m.URI,map:It,extend:jc};m.ChainRec={URI:m.URI,map:It,
ap:ua,chain:m.flatMap,chainRec:Lc};m.throwError=m.left;m.MonadThrow={URI:m.URI,map:It,ap:ua,of:m.of,chain:m.flatMap,throwError:m.
throwError};m.FromEither={URI:m.URI,fromEither:lt.identity};m.fromPredicate=(0,Ui.fromPredicate)(m.FromEither);m.fromOption=
(0,Ui.fromOption)(m.FromEither);m.isLeft=Cr.isLeft;m.isRight=Cr.isRight;var Jk=function(e,t){return function(r){return(0,m.
isLeft)(r)?e(r.left):t(r.right)}};m.matchW=Jk;m.foldW=m.matchW;m.match=m.matchW;m.fold=m.match;var Zk=function(e){return function(t){
return(0,m.isLeft)(t)?e(t.left):t.right}};m.getOrElseW=Zk;m.getOrElse=m.getOrElseW;m.flap=(0,Bi.flap)(m.Functor);m.apFirst=
(0,Fi.apFirst)(m.Apply);m.apFirstW=m.apFirst;m.apSecond=(0,Fi.apSecond)(m.Apply);m.apSecondW=m.apSecond;m.tap=(0,lt.dual)(
2,Lf.tap(m.Chain));m.flattenW=(0,m.flatMap)(lt.identity);m.flatten=m.flattenW;m.duplicate=(0,m.extend)(lt.identity);m.fromOptionK=
(0,Ui.fromOptionK)(m.FromEither);m.chainOptionK=(0,Ui.chainOptionK)(m.FromEither,m.Chain);m.chainOptionKW=m.chainOptionK;
var Bs={fromEither:m.FromEither.fromEither};m.liftNullable=Cr.liftNullable(Bs);m.liftOption=Cr.liftOption(Bs);var Uf={flatMap:m.
flatMap};m.flatMapNullable=Cr.flatMapNullable(Bs,Uf);m.flatMapOption=Cr.flatMapOption(Bs,Uf);m.filterOrElse=(0,Ui.filterOrElse)(
m.FromEither,m.Chain);m.filterOrElseW=m.filterOrElse;var Xk=function(e){return(0,m.isLeft)(e)?(0,m.right)(e.left):(0,m.left)(
e.right)};m.swap=Xk;var Qk=function(e){return function(t){return(0,m.isLeft)(t)?e(t.left):t}};m.orElseW=Qk;m.orElse=m.orElseW;
var e1=function(e){return function(t){return t==null?(0,m.left)(e):(0,m.right)(t)}};m.fromNullable=e1;var t1=function(e,t){
try{return(0,m.right)(e())}catch(r){return(0,m.left)(t(r))}};m.tryCatch=t1;var r1=function(e,t){return function(){for(var r=[],
n=0;n<arguments.length;n++)r[n]=arguments[n];return(0,m.tryCatch)(function(){return e.apply(void 0,r)},t)}};m.tryCatchK=
r1;var n1=function(e){var t=(0,m.fromNullable)(e);return function(r){return(0,lt.flow)(r,t)}};m.fromNullableK=n1;var a1=function(e){
var t=(0,m.fromNullableK)(e);return function(r){return(0,m.flatMap)(t(r))}};m.chainNullableK=a1;m.toUnion=(0,m.foldW)(lt.
identity,lt.identity);function i1(e){try{return e instanceof Error?e:new Error(String(e))}catch{return new Error}}function Bf(e){
return function(t,r){if(r===void 0){var n=Bf(e);return function(a){return n(t,a)}}return(0,m.isLeft)(r)?!1:e.equals(t,r.
right)}}var o1=function(e){return function(t){return(0,m.isLeft)(t)?!1:e(t.right)}};m.exists=o1;m.Do=(0,m.of)(Cr.emptyRecord);
m.bindTo=(0,Bi.bindTo)(m.Functor);var s1=(0,Bi.let)(m.Functor);m.let=s1;m.bind=Lf.bind(m.Chain);m.bindW=m.bind;m.apS=(0,Fi.
apS)(m.Apply);m.apSW=m.apS;m.ApT=(0,m.of)(Cr.emptyReadonlyArray);var l1=function(e){return function(t){var r=e(0,Cr.head(
t));if((0,m.isLeft)(r))return r;for(var n=[r.right],a=1;a<t.length;a++){var i=e(a,t[a]);if((0,m.isLeft)(i))return i;n.push(
i.right)}return(0,m.right)(n)}};m.traverseReadonlyNonEmptyArrayWithIndex=l1;var c1=function(e){var t=(0,m.traverseReadonlyNonEmptyArrayWithIndex)(
e);return function(r){return Cr.isNonEmpty(r)?t(r):m.ApT}};m.traverseReadonlyArrayWithIndex=c1;m.traverseArrayWithIndex=
m.traverseReadonlyArrayWithIndex;var u1=function(e){return(0,m.traverseReadonlyArrayWithIndex)(function(t,r){return e(r)})};
m.traverseArray=u1;m.sequenceArray=(0,m.traverseArray)(lt.identity);m.chainW=m.flatMap;m.chain=m.flatMap;m.chainFirst=m.
tap;m.chainFirstW=m.tap;function d1(e,t){return(0,m.tryCatch)(function(){return JSON.parse(e)},t)}var p1=function(e,t){return(0,m.
tryCatch)(function(){var r=JSON.stringify(e);if(typeof r!="string")throw new Error("Converting unsupported structure to \
JSON");return r},t)};m.stringifyJSON=p1;m.either={URI:m.URI,map:It,of:m.of,ap:ua,chain:m.flatMap,reduce:Hi,foldMap:Wi,reduceRight:qi,
traverse:Us,sequence:m.sequence,bimap:Mc,mapLeft:Dc,alt:Ff,extend:jc,chainRec:Lc,throwError:m.throwError};m.getApplySemigroup=
(0,Fi.getApplySemigroup)(m.Apply);m.getApplyMonoid=(0,jf.getApplicativeMonoid)(m.Applicative);var f1=function(e,t){return(0,Fi.
getApplySemigroup)((0,m.getApplicativeValidation)(e))(t)};m.getValidationSemigroup=f1;var h1=function(e,t){return(0,jf.getApplicativeMonoid)(
(0,m.getApplicativeValidation)(e))(t)};m.getValidationMonoid=h1;function m1(e){var t=(0,m.getApplicativeValidation)(e).ap,
r=(0,m.getAltValidation)(e).alt;return{URI:m.URI,_E:void 0,map:It,of:m.of,chain:m.flatMap,bimap:Mc,mapLeft:Dc,reduce:Hi,
foldMap:Wi,reduceRight:qi,extend:jc,traverse:Us,sequence:m.sequence,chainRec:Lc,throwError:m.throwError,ap:t,alt:r}}});var Le=We(w=>{"use strict";var Ne=w&&w.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},
e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is\
 not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.
prototype,new n)}}(),Wa=w&&w.__assign||function(){return Wa=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<
n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Wa.apply(this,arguments)},
g1=w&&w.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=
Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(w,
"__esModule",{value:!0});w.partial=w.PartialType=w.type=w.InterfaceType=w.array=w.ArrayType=w.recursion=w.RecursiveType=
w.Int=w.brand=w.RefinementType=w.keyof=w.KeyofType=w.literal=w.LiteralType=w.void=w.undefined=w.null=w.UnknownRecord=w.AnyDictionaryType=
w.UnknownArray=w.AnyArrayType=w.boolean=w.BooleanType=w.bigint=w.BigIntType=w.number=w.NumberType=w.string=w.StringType=
w.unknown=w.UnknownType=w.voidType=w.VoidType=w.UndefinedType=w.nullType=w.NullType=w.getIndex=w.getTags=w.emptyTags=w.mergeAll=
w.getDomainKeys=w.appendContext=w.getContextEntry=w.getFunctionName=w.identity=w.Type=w.success=w.failure=w.failures=void 0;
w.alias=w.clean=w.StrictType=w.dictionary=w.object=w.ObjectType=w.Dictionary=w.getDefaultContext=w.getValidationError=w.
interface=w.Array=w.taggedUnion=w.TaggedUnionType=w.Integer=w.refinement=w.any=w.AnyType=w.never=w.NeverType=w.Function=
w.FunctionType=w.exact=w.ExactType=w.strict=w.readonlyArray=w.ReadonlyArrayType=w.readonly=w.ReadonlyType=w.tuple=w.TupleType=
w.intersection=w.IntersectionType=w.union=w.UnionType=w.record=w.DictionaryType=void 0;var ct=Hf();w.failures=ct.left;var y1=function(e,t,r){
return(0,w.failures)([{value:e,context:t,message:r}])};w.failure=y1;w.success=ct.right;var Pe=function(){function e(t,r,n,a){
this.name=t,this.is=r,this.validate=n,this.encode=a,this.decode=this.decode.bind(this)}return e.prototype.pipe=function(t,r){
var n=this;return r===void 0&&(r="pipe(".concat(this.name,", ").concat(t.name,")")),new e(r,t.is,function(a,i){var o=n.validate(
a,i);return(0,ct.isLeft)(o)?o:t.validate(o.right,i)},this.encode===w.identity&&t.encode===w.identity?w.identity:function(a){
return n.encode(t.encode(a))})},e.prototype.asDecoder=function(){return this},e.prototype.asEncoder=function(){return this},
e.prototype.decode=function(t){return this.validate(t,[{key:"",type:this,actual:t}])},e}();w.Type=Pe;var v1=function(e){
return e};w.identity=v1;function Yf(e){return e.displayName||e.name||"<function".concat(e.length,">")}w.getFunctionName=
Yf;function b1(e,t){return{key:e,type:t}}w.getContextEntry=b1;function Zr(e,t,r,n){for(var a=e.length,i=Array(a+1),o=0;o<
a;o++)i[o]=e[o];return i[a]={key:t,type:r,actual:n},i}w.appendContext=Zr;function pa(e,t){for(var r=t.length,n=0;n<r;n++)
e.push(t[n])}var da=Object.prototype.hasOwnProperty;function Uc(e){return Object.keys(e).map(function(t){return"".concat(
t,": ").concat(e[t].name)}).join(", ")}function Vi(e){for(var t=0;t<e.length;t++)if(e[t].encode!==w.identity)return!1;return!0}
function zf(e){return"{ ".concat(Uc(e)," }")}function Kf(e){return"Partial<".concat(e,">")}function w1(e,t,r,n){n===void 0&&
(n="{ [K in ".concat(t.name,"]: ").concat(r.name," }"));for(var a=e.length,i={},o=0;o<a;o++)i[e[o]]=r;var s=(0,w.strict)(
i,n);return new Yc(n,function(l){return s.is(l)},s.validate,s.encode,t,r)}function Wc(e){var t;if(Zf(e)){var r=e.value;if(w.
string.is(r))return t={},t[r]=null,t}else{if(_1(e))return e.keys;if(Qf(e)){var n=e.types.map(function(a){return Wc(a)});
return n.some(Hs.is)?void 0:Object.assign.apply(Object,g1([{}],n,!1))}}}w.getDomainKeys=Wc;function Wf(e,t){for(var r=Object.
keys(e),n=r.length,a=!1,i={},o=0;o<n;o++){var s=r[o];t.is(s)?i[s]=e[s]:a=!0}return a?i:e}function T1(e,t,r){return r===void 0&&
(r="{ [K in ".concat(e.name,"]: ").concat(t.name," }")),new Yc(r,function(n){return w.UnknownRecord.is(n)?Object.keys(n).
every(function(a){return!e.is(a)||t.is(n[a])}):Vf(t)&&Array.isArray(n)},function(n,a){if(w.UnknownRecord.is(n)){for(var i={},
o=[],s=Object.keys(n),l=s.length,c=!1,u=0;u<l;u++){var d=s[u],f=n[d],h=e.validate(d,Zr(a,d,e,d));if((0,ct.isLeft)(h))c=!0;else{
var y=h.right;c=c||y!==d,d=y;var b=t.validate(f,Zr(a,d,t,f));if((0,ct.isLeft)(b))pa(o,b.left);else{var T=b.right;c=c||T!==
f,i[d]=T}}}return o.length>0?(0,w.failures)(o):(0,w.success)(c?i:n)}return Vf(t)&&Array.isArray(n)?(0,w.success)(n):(0,w.
failure)(n,a)},e.encode===w.identity&&t.encode===w.identity?function(n){return Wf(n,e)}:function(n){for(var a={},i=Object.
keys(Wf(n,e)),o=i.length,s=0;s<o;s++){var l=i[s];a[String(e.encode(l))]=t.encode(n[l])}return a},e,t)}function Gf(e){return"\
("+e.map(function(t){return t.name}).join(" | ")+")"}function Bc(e,t){for(var r=!0,n=!0,a=!w.UnknownRecord.is(e),i=0,o=t;i<
o.length;i++){var s=o[i];s!==e&&(r=!1),w.UnknownRecord.is(s)&&(n=!1)}if(r)return e;if(n)return t[t.length-1];for(var l={},
c=0,u=t;c<u.length;c++){var s=u[c];for(var d in s)(!da.call(l,d)||a||s[d]!==e[d])&&(l[d]=s[d])}return l}w.mergeAll=Bc;function Hc(e){
switch(e._tag){case"RefinementType":case"ReadonlyType":return Hc(e.type);case"InterfaceType":case"StrictType":case"Parti\
alType":return e.props;case"IntersectionType":return e.types.reduce(function(t,r){return Object.assign(t,Hc(r))},{})}}function qf(e,t){
for(var r=Object.getOwnPropertyNames(e),n=!1,a={},i=0;i<r.length;i++){var o=r[i];da.call(t,o)?a[o]=e[o]:n=!0}return n?a:
e}function k1(e){return Xf(e)?"{| ".concat(Uc(e.props)," |}"):A1(e)?Kf("{| ".concat(Uc(e.props)," |}")):"Exact<".concat(
e.name,">")}function S1(e){return e.length>0}w.emptyTags={};function Jf(e,t){for(var r=[],n=0,a=e;n<a.length;n++){var i=a[n];
t.indexOf(i)!==-1&&r.push(i)}return r}function E1(e,t){if(e===w.emptyTags)return t;if(t===w.emptyTags)return e;var r=Object.
assign({},e);for(var n in t)if(da.call(e,n)){var a=Jf(e[n],t[n]);if(S1(a))r[n]=a;else{r=w.emptyTags;break}}else r[n]=t[n];
return r}function x1(e,t){if(e===w.emptyTags||t===w.emptyTags)return w.emptyTags;var r=w.emptyTags;for(var n in e)if(da.
call(t,n)){var a=Jf(e[n],t[n]);a.length===0&&(r===w.emptyTags&&(r={}),r[n]=e[n].concat(t[n]))}return r}function Vf(e){return e.
_tag==="AnyType"}function Zf(e){return e._tag==="LiteralType"}function _1(e){return e._tag==="KeyofType"}function Xf(e){
return e._tag==="InterfaceType"}function A1(e){return e._tag==="PartialType"}function $1(e){return e._tag==="StrictType"}
function R1(e){return e._tag==="ExactType"}function I1(e){return e._tag==="RefinementType"}function O1(e){return e._tag===
"IntersectionType"}function Qf(e){return e._tag==="UnionType"}function C1(e){return e._tag==="RecursiveType"}function N1(e){
return e._tag==="ReadonlyType"}var Fc=[];function Un(e){if(Fc.indexOf(e)!==-1)return w.emptyTags;if(Xf(e)||$1(e)){var t=w.
emptyTags;for(var r in e.props){var n=e.props[r];Zf(n)&&(t===w.emptyTags&&(t={}),t[r]=[n.value])}return t}else{if(R1(e)||
I1(e)||N1(e))return Un(e.type);if(O1(e))return e.types.reduce(function(i,o){return E1(i,Un(o))},w.emptyTags);if(Qf(e))return e.
types.slice(1).reduce(function(i,o){return x1(i,Un(o))},Un(e.types[0]));if(C1(e)){Fc.push(e);var a=Un(e.type);return Fc.
pop(),a}}return w.emptyTags}w.getTags=Un;function eh(e){var t=Un(e[0]),r=Object.keys(t),n=e.length,a=function(c){for(var u=t[c].
slice(),d=[t[c]],f=1;f<n;f++){var h=e[f],y=Un(h),b=y[c];if(b===void 0)return"continue-keys";if(b.some(function(T){return u.
indexOf(T)!==-1}))return"continue-keys";u.push.apply(u,b),d.push(b)}return{value:[c,d]}};e:for(var i=0,o=r;i<o.length;i++){
var s=o[i],l=a(s);if(typeof l=="object")return l.value;switch(l){case"continue-keys":continue e}}}w.getIndex=eh;var th=function(e){
Ne(t,e);function t(){var r=e.call(this,"null",function(n){return n===null},function(n,a){return r.is(n)?(0,w.success)(n):
(0,w.failure)(n,a)},w.identity)||this;return r._tag="NullType",r}return t}(Pe);w.NullType=th;w.nullType=new th;w.null=w.
nullType;var rh=function(e){Ne(t,e);function t(){var r=e.call(this,"undefined",function(n){return n===void 0},function(n,a){
return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="UndefinedType",r}return t}(Pe);w.UndefinedType=
rh;var Hs=new rh;w.undefined=Hs;var nh=function(e){Ne(t,e);function t(){var r=e.call(this,"void",Hs.is,Hs.validate,w.identity)||
this;return r._tag="VoidType",r}return t}(Pe);w.VoidType=nh;w.voidType=new nh;w.void=w.voidType;var ah=function(e){Ne(t,
e);function t(){var r=e.call(this,"unknown",function(n){return!0},w.success,w.identity)||this;return r._tag="UnknownType",
r}return t}(Pe);w.UnknownType=ah;w.unknown=new ah;var ih=function(e){Ne(t,e);function t(){var r=e.call(this,"string",function(n){
return typeof n=="string"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="StringType",r}return t}(Pe);w.StringType=ih;w.string=new ih;var oh=function(e){Ne(t,e);function t(){var r=e.call(this,
"number",function(n){return typeof n=="number"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||
this;return r._tag="NumberType",r}return t}(Pe);w.NumberType=oh;w.number=new oh;var sh=function(e){Ne(t,e);function t(){
var r=e.call(this,"bigint",function(n){return typeof n=="bigint"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(
n,a)},w.identity)||this;return r._tag="BigIntType",r}return t}(Pe);w.BigIntType=sh;w.bigint=new sh;var lh=function(e){Ne(
t,e);function t(){var r=e.call(this,"boolean",function(n){return typeof n=="boolean"},function(n,a){return r.is(n)?(0,w.
success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="BooleanType",r}return t}(Pe);w.BooleanType=lh;w.boolean=
new lh;var ch=function(e){Ne(t,e);function t(){var r=e.call(this,"UnknownArray",Array.isArray,function(n,a){return r.is(
n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="AnyArrayType",r}return t}(Pe);w.AnyArrayType=ch;
w.UnknownArray=new ch;w.Array=w.UnknownArray;var uh=function(e){Ne(t,e);function t(){var r=e.call(this,"UnknownRecord",function(n){
return n!==null&&typeof n=="object"&&!Array.isArray(n)},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},
w.identity)||this;return r._tag="AnyDictionaryType",r}return t}(Pe);w.AnyDictionaryType=uh;w.UnknownRecord=new uh;var dh=function(e){
Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.value=o,s._tag="LiteralType",s}return t}(Pe);w.LiteralType=
dh;function P1(e,t){t===void 0&&(t=JSON.stringify(e));var r=function(n){return n===e};return new dh(t,r,function(n,a){return r(
n)?(0,w.success)(e):(0,w.failure)(n,a)},w.identity,e)}w.literal=P1;var ph=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.keys=o,s._tag="KeyofType",s}return t}(Pe);w.KeyofType=ph;function M1(e,t){t===void 0&&
(t=Object.keys(e).map(function(n){return JSON.stringify(n)}).join(" | "));var r=function(n){return w.string.is(n)&&da.call(
e,n)};return new ph(t,r,function(n,a){return r(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity,e)}w.keyof=M1;var fh=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i)||this;return l.type=o,l.predicate=s,l._tag="RefinementType",l}
return t}(Pe);w.RefinementType=fh;function hh(e,t,r){return Kc(e,t,r)}w.brand=hh;w.Int=hh(w.number,function(e){return Number.
isInteger(e)},"Int");var qc=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.runDefinition=
o,s._tag="RecursiveType",s}return t}(Pe);w.RecursiveType=qc;Object.defineProperty(qc.prototype,"type",{get:function(){return this.
runDefinition()},enumerable:!0,configurable:!0});function D1(e,t){var r,n=function(){return r||(r=t(a),r.name=e),r},a=new qc(
e,function(i){return n().is(i)},function(i,o){return n().validate(i,o)},function(i){return n().encode(i)},n);return a}w.
recursion=D1;var mh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="A\
rrayType",s}return t}(Pe);w.ArrayType=mh;function gh(e,t){return t===void 0&&(t="Array<".concat(e.name,">")),new mh(t,function(r){
return w.UnknownArray.is(r)&&r.every(e.is)},function(r,n){var a=w.UnknownArray.validate(r,n);if((0,ct.isLeft)(a))return a;
for(var i=a.right,o=i.length,s=i,l=[],c=0;c<o;c++){var u=i[c],d=e.validate(u,Zr(n,String(c),e,u));if((0,ct.isLeft)(d))pa(
l,d.left);else{var f=d.right;f!==u&&(s===i&&(s=i.slice()),s[c]=f)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},
e.encode===w.identity?w.identity:function(r){return r.map(e.encode)},e)}w.array=gh;var yh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.props=o,s._tag="InterfaceType",s}return t}(Pe);w.InterfaceType=yh;function Vc(e,t){
t===void 0&&(t=zf(e));var r=Object.keys(e),n=r.map(function(i){return e[i]}),a=r.length;return new yh(t,function(i){if(w.
UnknownRecord.is(i)){for(var o=0;o<a;o++){var s=r[o],l=i[s];if(l===void 0&&!da.call(i,s)||!n[o].is(l))return!1}return!0}
return!1},function(i,o){var s=w.UnknownRecord.validate(i,o);if((0,ct.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<
a;d++){var f=r[d],h=c[f],y=n[d],b=y.validate(h,Zr(o,f,y,h));if((0,ct.isLeft)(b))pa(u,b.left);else{var T=b.right;(T!==h||
T===void 0&&!da.call(c,f))&&(c===l&&(c=Wa({},l)),c[f]=T)}}return u.length>0?(0,w.failures)(u):(0,w.success)(c)},Vi(n)?w.
identity:function(i){for(var o=Wa({},i),s=0;s<a;s++){var l=r[s],c=n[s].encode;c!==w.identity&&(o[l]=c(i[l]))}return o},e)}
w.type=Vc;w.interface=Vc;var vh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.props=
o,s._tag="PartialType",s}return t}(Pe);w.PartialType=vh;function j1(e,t){t===void 0&&(t=Kf(zf(e)));var r=Object.keys(e),
n=r.map(function(i){return e[i]}),a=r.length;return new vh(t,function(i){if(w.UnknownRecord.is(i)){for(var o=0;o<a;o++){
var s=r[o],l=i[s];if(l!==void 0&&!e[s].is(l))return!1}return!0}return!1},function(i,o){var s=w.UnknownRecord.validate(i,
o);if((0,ct.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<a;d++){var f=r[d],h=c[f],y=e[f],b=y.validate(h,Zr(o,f,y,
h));if((0,ct.isLeft)(b))h!==void 0&&pa(u,b.left);else{var T=b.right;T!==h&&(c===l&&(c=Wa({},l)),c[f]=T)}}return u.length>
0?(0,w.failures)(u):(0,w.success)(c)},Vi(n)?w.identity:function(i){for(var o=Wa({},i),s=0;s<a;s++){var l=r[s],c=i[l];c!==
void 0&&(o[l]=n[s].encode(c))}return o},e)}w.partial=j1;var Yc=function(e){Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(
this,r,n,a,i)||this;return l.domain=o,l.codomain=s,l._tag="DictionaryType",l}return t}(Pe);w.DictionaryType=Yc;function bh(e,t,r){
var n=Wc(e);return n?w1(Object.keys(n),e,t,r):T1(e,t,r)}w.record=bh;var zc=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.types=o,s._tag="UnionType",s}return t}(Pe);w.UnionType=zc;function wh(e,t){t===void 0&&
(t=Gf(e));var r=eh(e);if(r!==void 0&&e.length>0){var n=r[0],a=r[1],i=a.length,o=function(s){for(var l=0;l<i;l++)if(a[l].
indexOf(s)!==-1)return l};return new Ws(t,function(s){if(w.UnknownRecord.is(s)){var l=o(s[n]);return l!==void 0?e[l].is(
s):!1}return!1},function(s,l){var c=w.UnknownRecord.validate(s,l);if((0,ct.isLeft)(c))return c;var u=c.right,d=o(u[n]);if(d===
void 0)return(0,w.failure)(s,l);var f=e[d];return f.validate(u,Zr(l,String(d),f,u))},Vi(e)?w.identity:function(s){var l=o(
s[n]);if(l===void 0)throw new Error("no codec found to encode value in union codec ".concat(t));return e[l].encode(s)},e,
n)}else return new zc(t,function(s){return e.some(function(l){return l.is(s)})},function(s,l){for(var c=[],u=0;u<e.length;u++){
var d=e[u],f=d.validate(s,Zr(l,String(u),d,s));if((0,ct.isLeft)(f))pa(c,f.left);else return(0,w.success)(f.right)}return(0,w.
failures)(c)},Vi(e)?w.identity:function(s){for(var l=0,c=e;l<c.length;l++){var u=c[l];if(u.is(s))return u.encode(s)}throw new Error(
"no codec found to encode value in union type ".concat(t))},e)}w.union=wh;var Th=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="IntersectionType",s}return t}(Pe);w.IntersectionType=Th;function L1(e,t){
t===void 0&&(t="(".concat(e.map(function(n){return n.name}).join(" & "),")"));var r=e.length;return new Th(t,function(n){
return e.every(function(a){return a.is(n)})},e.length===0?w.success:function(n,a){for(var i=[],o=[],s=0;s<r;s++){var l=e[s],
c=l.validate(n,Zr(a,String(s),l,n));(0,ct.isLeft)(c)?pa(o,c.left):i.push(c.right)}return o.length>0?(0,w.failures)(o):(0,w.
success)(Bc(n,i))},e.length===0?w.identity:function(n){return Bc(n,e.map(function(a){return a.encode(n)}))},e)}w.intersection=
L1;var kh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="TupleType",
s}return t}(Pe);w.TupleType=kh;function F1(e,t){t===void 0&&(t="[".concat(e.map(function(n){return n.name}).join(", "),"\
]"));var r=e.length;return new kh(t,function(n){return w.UnknownArray.is(n)&&n.length===r&&e.every(function(a,i){return a.
is(n[i])})},function(n,a){var i=w.UnknownArray.validate(n,a);if((0,ct.isLeft)(i))return i;for(var o=i.right,s=o.length>r?
o.slice(0,r):o,l=[],c=0;c<r;c++){var u=o[c],d=e[c],f=d.validate(u,Zr(a,String(c),d,u));if((0,ct.isLeft)(f))pa(l,f.left);else{
var h=f.right;h!==u&&(s===o&&(s=o.slice()),s[c]=h)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},Vi(e)?w.identity:
function(n){return e.map(function(a,i){return a.encode(n[i])})},e)}w.tuple=F1;var Sh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyType",s}return t}(Pe);w.ReadonlyType=Sh;function U1(e,t){
return t===void 0&&(t="Readonly<".concat(e.name,">")),new Sh(t,e.is,e.validate,e.encode,e)}w.readonly=U1;var Eh=function(e){
Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyArrayType",s}return t}(Pe);
w.ReadonlyArrayType=Eh;function B1(e,t){t===void 0&&(t="ReadonlyArray<".concat(e.name,">"));var r=gh(e);return new Eh(t,
r.is,r.validate,r.encode,e)}w.readonlyArray=B1;var H1=function(e,t){return _h(Vc(e),t)};w.strict=H1;var xh=function(e){Ne(
t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ExactType",s}return t}(Pe);w.ExactType=
xh;function _h(e,t){t===void 0&&(t=k1(e));var r=Hc(e);return new xh(t,e.is,function(n,a){var i=w.UnknownRecord.validate(
n,a);if((0,ct.isLeft)(i))return i;var o=e.validate(n,a);return(0,ct.isLeft)(o)?o:(0,ct.right)(qf(o.right,r))},function(n){
return e.encode(qf(n,r))},e)}w.exact=_h;var Ah=function(e){Ne(t,e);function t(){var r=e.call(this,"Function",function(n){
return typeof n=="function"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="FunctionType",r}return t}(Pe);w.FunctionType=Ah;w.Function=new Ah;var $h=function(e){Ne(t,e);function t(){var r=e.
call(this,"never",function(n){return!1},function(n,a){return(0,w.failure)(n,a)},function(){throw new Error("cannot encod\
e never")})||this;return r._tag="NeverType",r}return t}(Pe);w.NeverType=$h;w.never=new $h;var Rh=function(e){Ne(t,e);function t(){
var r=e.call(this,"any",function(n){return!0},w.success,w.identity)||this;return r._tag="AnyType",r}return t}(Pe);w.AnyType=
Rh;w.any=new Rh;function Kc(e,t,r){return r===void 0&&(r="(".concat(e.name," | ").concat(Yf(t),")")),new fh(r,function(n){
return e.is(n)&&t(n)},function(n,a){var i=e.validate(n,a);if((0,ct.isLeft)(i))return i;var o=i.right;return t(o)?(0,w.success)(
o):(0,w.failure)(o,a)},e.encode,e,t)}w.refinement=Kc;w.Integer=Kc(w.number,Number.isInteger,"Integer");var Ws=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i,o)||this;return l.tag=s,l}return t}(zc);w.TaggedUnionType=Ws;var W1=function(e,t,r){
r===void 0&&(r=Gf(t));var n=wh(t,r);return n instanceof Ws?n:(console.warn("[io-ts] Cannot build a tagged union for ".concat(
r,", returning a de-optimized union")),new Ws(r,n.is,n.validate,n.encode,t,e))};w.taggedUnion=W1;var q1=function(e,t){return{
value:e,context:t}};w.getValidationError=q1;var V1=function(e){return[{key:"",type:e}]};w.getDefaultContext=V1;w.Dictionary=
w.UnknownRecord;var Ih=function(e){Ne(t,e);function t(){var r=e.call(this,"object",function(n){return n!==null&&typeof n==
"object"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="ObjectType",
r}return t}(Pe);w.ObjectType=Ih;w.object=new Ih;w.dictionary=bh;var Y1=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.props=o,s._tag="StrictType",s}return t}(Pe);w.StrictType=Y1;function z1(e){return e}w.
clean=z1;function K1(e){return function(){return e}}w.alias=K1});var Mh=We((CD,Ph)=>{"use strict";var rt=class e extends Array{constructor(t,r){if(super(t),this.sign=r,Object.setPrototypeOf(
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
f;let _=0|E%f,O=r.__halfDigit(i-2),D=d.__halfDigit(b+i-2);for(;e.__imul(y,O)>>>0>(_<<16|D)>>>0&&(y--,_+=f,!(32767<_)););}
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
return(1073741823&t)===t}};rt.__kMaxLength=33554432,rt.__kMaxLengthBits=rt.__kMaxLength<<5,rt.__kMaxBitsPerChar=[0,0,32,
51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,
165,166],rt.__kBitsPerCharTableShift=5,rt.__kBitsPerCharTableMultiplier=1<<rt.__kBitsPerCharTableShift,rt.__kConversionChars=
["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"],rt.__kBitConversionBuffer=new ArrayBuffer(8),rt.__kBitConversionDouble=new Float64Array(rt.__kBitConversionBuffer),
rt.__kBitConversionInts=new Int32Array(rt.__kBitConversionBuffer),rt.__kBitConversionIntHigh=rt.__detectBigEndian()?0:1,
rt.__kBitConversionIntLow=rt.__detectBigEndian()?1:0,rt.__clz30=Math.clz32?function(e){return Math.clz32(e)-2}:function(e){
return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},rt.__imul=Math.imul||function(e,t){return 0|e*t},Ph.exports=rt});var vg=We((jD,yg)=>{"use strict";var gg="ArrowFunctionExpression",YS={name:"arrow",init(e){e.addBinaryOp("=>",.1,!0),e.hooks.
add("gobble-expression",function(n){if(this.gobbleSpaces(),this.code===e.OPAREN_CODE){let a=this.index;if(this.index++,this.
gobbleSpaces(),this.code===e.CPAREN_CODE){this.index++;let i=this.gobbleBinaryOp();if(i==="=>"){let o=this.gobbleBinaryExpression();
o||this.throwError("Expected expression after "+i),n.node={type:gg,params:null,body:o};return}}this.index=a}}),e.hooks.add(
"after-expression",function(n){t(n.node)});function t(r){r&&(Object.values(r).forEach(n=>{n&&typeof n=="object"&&t(n)}),
r.operator==="=>"&&(r.type=gg,r.params=r.left?[r.left]:null,r.body=r.right,r.params&&r.params[0].type===e.SEQUENCE_EXP&&
(r.params=r.params[0].expressions),delete r.left,delete r.right,delete r.operator))}}};yg.exports=YS});var Tg=We((LD,wg)=>{"use strict";var zS="ObjectExpression",bg="Property",KS={name:"object",init(e){function t(r){if(this.
code===123){this.index++;let n=[];for(;!isNaN(this.code);){if(this.gobbleSpaces(),this.code===125){this.index++,r.node=this.
gobbleTokenProperty({type:zS,properties:n});return}let a=this.gobbleExpression();if(!a)break;if(this.gobbleSpaces(),a.type===
e.IDENTIFIER&&(this.code===e.COMMA_CODE||this.code===125))n.push({type:bg,computed:!1,key:a,value:a,shorthand:!0});else if(this.
code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();i||this.throwError("unexpected object property");let o=a.
type===e.ARRAY_EXP;n.push({type:bg,computed:o,key:o?a.elements[0]:a,value:i,shorthand:!1}),this.gobbleSpaces()}else a&&n.
push(a);this.code===e.COMMA_CODE&&this.index++}this.throwError("missing }")}}e.hooks.add("gobble-token",t)}};wg.exports=
KS});var Sg=We((FD,kg)=>{"use strict";var GS={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===47){
let n=++this.index,a=!1;for(;this.index<this.expr.length;){if(this.code===47&&!a){let i=this.expr.slice(n,this.index),o="";
for(;++this.index<this.expr.length;){let l=this.code;if(l>=97&&l<=122||l>=65&&l<=90||l>=48&&l<=57)o+=this.char;else break}
let s;try{s=new RegExp(i,o)}catch(l){this.throwError(l.message)}return r.node={type:e.LITERAL,value:s,raw:this.expr.slice(
n-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&
(a=!1),this.index+=this.code===92?2:1}this.throwError("Unclosed Regex")}})}};kg.exports=GS});var xg=We((UD,Eg)=>{"use strict";var JS={name:"jsepSpread",init(e){e.hooks.add("gobble-token",function(r){[0,1,2].every(
n=>this.expr.charCodeAt(this.index+n)===e.PERIOD_CODE)&&(this.index+=3,r.node={type:"SpreadElement",argument:this.gobbleExpression()})})}};
Eg.exports=JS});var Ag=We((BD,_g)=>{"use strict";var ZS="TaggedTemplateExpression",XS="TemplateLiteral",QS="TemplateElement",eE={name:"j\
sepTemplateLiteral",init(e){function t(r,n=!0){if(this.code===96){let a={type:XS,quasis:[],expressions:[]},i="",o="",s=!1,
l=this.expr.length,c=()=>a.quasis.push({type:QS,value:{raw:o,cooked:i},tail:s});for(;this.index<l;){let u=this.expr.charAt(
++this.index);if(u==="`")return this.index+=1,s=!0,c(),r.node=a,n&&(r.node=this.gobbleTokenProperty(r.node)),r.node;if(u===
"$"&&this.expr.charAt(this.index+1)==="{")this.index+=2,c(),o="",i="",a.expressions.push(...this.gobbleExpressions(125)),
this.code!==125&&this.throwError("unclosed ${");else if(u==="\\")switch(o+=u,u=this.expr.charAt(++this.index),o+=u,u){case"\
n":i+=`
`;break;case"r":i+="\r";break;case"t":i+="	";break;case"b":i+="\b";break;case"f":i+="\f";break;case"v":i+="\v";break;default:
i+=u}else i+=u,o+=u}this.throwError("Unclosed `")}}e.hooks.add("gobble-token",t),e.hooks.add("after-token",function(n){if((n.
node.type===e.IDENTIFIER||n.node.type===e.MEMBER_EXP)&&this.code===96)return n.node={type:ZS,tag:n.node,quasi:t.bind(this)(
n,!1)},n.node=this.gobbleTokenProperty(n.node),n.node})}};_g.exports=eE});var Wg=We(me=>{"use strict";var ud=Symbol.for("react.transitional.element"),vE=Symbol.for("react.portal"),bE=Symbol.for(
"react.fragment"),wE=Symbol.for("react.strict_mode"),TE=Symbol.for("react.profiler"),kE=Symbol.for("react.consumer"),SE=Symbol.
for("react.context"),EE=Symbol.for("react.forward_ref"),xE=Symbol.for("react.suspense"),_E=Symbol.for("react.memo"),jg=Symbol.
for("react.lazy"),Cg=Symbol.iterator;function AE(e){return e===null||typeof e!="object"?null:(e=Cg&&e[Cg]||e["@@iterator"],
typeof e=="function"?e:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},
enqueueSetState:function(){}},Fg=Object.assign,Ug={};function pi(e,t,r){this.props=e,this.context=t,this.refs=Ug,this.updater=
r||Lg}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&
e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variabl\
es.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(
this,e,"forceUpdate")};function Bg(){}Bg.prototype=pi.prototype;function dd(e,t,r){this.props=e,this.context=t,this.refs=
Ug,this.updater=r||Lg}var pd=dd.prototype=new Bg;pd.constructor=dd;Fg(pd,pi.prototype);pd.isPureReactComponent=!0;var Ng=Array.
isArray,Ge={H:null,A:null,T:null,S:null,V:null},Hg=Object.prototype.hasOwnProperty;function fd(e,t,r,n,a,i){return r=i.ref,
{$$typeof:ud,type:e,key:t,ref:r!==void 0?r:null,props:i}}function $E(e,t){return fd(e.type,t,void 0,void 0,void 0,e.props)}
function hd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ud}function RE(e){var t={"=":"=0",":":"=2"};return"$"+e.
replace(/[=:]/g,function(r){return t[r]})}var Pg=/\/+/g;function cd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?
RE(""+e.key):t.toString(36)}function Mg(){}function IE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":
throw e.reason;default:switch(typeof e.status=="string"?e.then(Mg,Mg):(e.status="pending",e.then(function(t){e.status===
"pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"\
fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function di(e,t,r,n,a){var i=typeof e;(i==="undefined"||
i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"\
object":switch(e.$$typeof){case ud:case vE:o=!0;break;case jg:return o=e._init,di(o(e._payload),t,r,n,a)}}if(o)return a=
a(e),o=n===""?"."+cd(e,0):n,Ng(a)?(r="",o!=null&&(r=o.replace(Pg,"$&/")+"/"),di(a,t,r,"",function(c){return c})):a!=null&&
(hd(a)&&(a=$E(a,r+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Pg,"$&/")+"/")+o)),t.push(a)),1;o=0;var s=n===""?
".":n+":";if(Ng(e))for(var l=0;l<e.length;l++)n=e[l],i=s+cd(n,l),o+=di(n,t,r,i,a);else if(l=AE(e),typeof l=="function")for(e=
l.call(e),l=0;!(n=e.next()).done;)n=n.value,i=s+cd(n,l++),o+=di(n,t,r,i,a);else if(i==="object"){if(typeof e.then=="func\
tion")return di(IE(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object O\
bject]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use a\
n array instead.")}return o}function xl(e,t,r){if(e==null)return e;var n=[],a=0;return di(e,n,"","",function(i){return t.
call(r,i,a++)}),n}function OE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===
-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&
(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Dg=typeof reportError=="function"?
reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("e\
rror",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(
e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.
emit("uncaughtException",e);return}console.error(e)};function CE(){}me.Children={map:xl,forEach:function(e,t,r){xl(e,function(){
t.apply(this,arguments)},r)},count:function(e){var t=0;return xl(e,function(){t++}),t},toArray:function(e){return xl(e,function(t){
return t})||[]},only:function(e){if(!hd(e))throw Error("React.Children.only expected to receive a single React element c\
hild.");return e}};me.Component=pi;me.Fragment=bE;me.Profiler=TE;me.PureComponent=dd;me.StrictMode=wE;me.Suspense=xE;me.
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ge;me.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ge.
H.useMemoCache(e)}};me.cache=function(e){return function(){return e.apply(null,arguments)}};me.cloneElement=function(e,t,r){
if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=Fg({},e.props),a=e.key,i=void 0;
if(t!=null)for(o in t.ref!==void 0&&(i=void 0),t.key!==void 0&&(a=""+t.key),t)!Hg.call(t,o)||o==="key"||o==="__self"||o===
"__source"||o==="ref"&&t.ref===void 0||(n[o]=t[o]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var s=Array(
o),l=0;l<o;l++)s[l]=arguments[l+2];n.children=s}return fd(e.type,a,void 0,void 0,i,n)};me.createContext=function(e){return e=
{$$typeof:SE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:kE,
_context:e},e};me.createElement=function(e,t,r){var n,a={},i=null;if(t!=null)for(n in t.key!==void 0&&(i=""+t.key),t)Hg.
call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<
o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===
void 0&&(a[n]=o[n]);return fd(e,i,void 0,void 0,null,a)};me.createRef=function(){return{current:null}};me.forwardRef=function(e){
return{$$typeof:EE,render:e}};me.isValidElement=hd;me.lazy=function(e){return{$$typeof:jg,_payload:{_status:-1,_result:e},
_init:OE}};me.memo=function(e,t){return{$$typeof:_E,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Ge.
T,r={};Ge.T=r;try{var n=e(),a=Ge.S;a!==null&&a(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(CE,Dg)}catch(i){
Dg(i)}finally{Ge.T=t}};me.unstable_useCacheRefresh=function(){return Ge.H.useCacheRefresh()};me.use=function(e){return Ge.
H.use(e)};me.useActionState=function(e,t,r){return Ge.H.useActionState(e,t,r)};me.useCallback=function(e,t){return Ge.H.
useCallback(e,t)};me.useContext=function(e){return Ge.H.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=
function(e,t){return Ge.H.useDeferredValue(e,t)};me.useEffect=function(e,t,r){var n=Ge.H;if(typeof r=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)};me.useId=function(){return Ge.
H.useId()};me.useImperativeHandle=function(e,t,r){return Ge.H.useImperativeHandle(e,t,r)};me.useInsertionEffect=function(e,t){
return Ge.H.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return Ge.H.useLayoutEffect(e,t)};me.useMemo=function(e,t){
return Ge.H.useMemo(e,t)};me.useOptimistic=function(e,t){return Ge.H.useOptimistic(e,t)};me.useReducer=function(e,t,r){return Ge.
H.useReducer(e,t,r)};me.useRef=function(e){return Ge.H.useRef(e)};me.useState=function(e){return Ge.H.useState(e)};me.useSyncExternalStore=
function(e,t,r){return Ge.H.useSyncExternalStore(e,t,r)};me.useTransition=function(){return Ge.H.useTransition()};me.version=
"19.1.0"});var qg=We((fe,_l)=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(v,A){Object.defineProperty(n.
prototype,v,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",A[0],A[1])}})}function t(v){
return v===null||typeof v!="object"?null:(v=mn&&v[mn]||v["@@iterator"],typeof v=="function"?v:null)}function r(v,A){v=(v=
v.constructor)&&(v.displayName||v.name)||"ReactClass";var j=v+"."+A;Ua[j]||(console.error("Can't call %s on a component \
that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.stat\
e` directly or define a `state = {};` class property with the desired state in the %s component.",A,v),Ua[j]=!0)}function n(v,A,j){
this.props=v,this.context=A,this.refs=_c,this.updater=j||Os}function a(){}function i(v,A,j){this.props=v,this.context=A,
this.refs=_c,this.updater=j||Os}function o(v){return""+v}function s(v){try{o(v);var A=!1}catch{A=!0}if(A){A=console;var j=A.
error,L=typeof Symbol=="function"&&Symbol.toStringTag&&v[Symbol.toStringTag]||v.constructor.name||"Object";return j.call(
A,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",L),o(v)}}function l(v){
if(v==null)return null;if(typeof v=="function")return v.$$typeof===Pw?null:v.displayName||v.name||null;if(typeof v=="str\
ing")return v;switch(v){case Rr:return"Fragment";case C:return"Profiler";case ir:return"StrictMode";case Hr:return"Suspe\
nse";case Ir:return"SuspenseList";case vt:return"Activity"}if(typeof v=="object")switch(typeof v.tag=="number"&&console.
error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
v.$$typeof){case st:return"Portal";case He:return(v.displayName||"Context")+".Provider";case ae:return(v._context.displayName||
"Context")+".Consumer";case ft:var A=v.render;return v=v.displayName,v||(v=A.displayName||A.name||"",v=v!==""?"ForwardRe\
f("+v+")":"ForwardRef"),v;case la:return A=v.displayName||null,A!==null?A:l(v.type)||"Memo";case jn:A=v._payload,v=v._init;
try{return l(v(A))}catch{}}return null}function c(v){if(v===Rr)return"<>";if(typeof v=="object"&&v!==null&&v.$$typeof===
jn)return"<...>";try{var A=l(v);return A?"<"+A+">":"<...>"}catch{return"<...>"}}function u(){var v=Se.A;return v===null?
null:v.getOwner()}function d(){return Error("react-stack-top-frame")}function f(v){if(Ns.call(v,"key")){var A=Object.getOwnPropertyDescriptor(
v,"key").get;if(A&&A.isReactWarning)return!1}return v.key!==void 0}function h(v,A){function j(){uf||(uf=!0,console.error(
"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same \
value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",A))}j.
isReactWarning=!0,Object.defineProperty(v,"key",{get:j,configurable:!0})}function y(){var v=l(this.type);return pf[v]||(pf[v]=
!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the \
JSX Element type in a future release.")),v=this.props.ref,v!==void 0?v:null}function b(v,A,j,L,J,Ee,ye,je){return j=Ee.ref,
v={$$typeof:it,type:v,key:A,props:Ee,_owner:J},(j!==void 0?j:null)!==null?Object.defineProperty(v,"ref",{enumerable:!1,get:y}):
Object.defineProperty(v,"ref",{enumerable:!1,value:null}),v._store={},Object.defineProperty(v._store,"validated",{configurable:!1,
enumerable:!1,writable:!0,value:0}),Object.defineProperty(v,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),
Object.defineProperty(v,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ye}),Object.defineProperty(v,"_de\
bugTask",{configurable:!1,enumerable:!1,writable:!0,value:je}),Object.freeze&&(Object.freeze(v.props),Object.freeze(v)),
v}function T(v,A){return A=b(v.type,A,void 0,void 0,v._owner,v.props,v._debugStack,v._debugTask),v._store&&(A._store.validated=
v._store.validated),A}function S(v){return typeof v=="object"&&v!==null&&v.$$typeof===it}function E(v){var A={"=":"=0","\
:":"=2"};return"$"+v.replace(/[=:]/g,function(j){return A[j]})}function _(v,A){return typeof v=="object"&&v!==null&&v.key!=
null?(s(v.key),E(""+v.key)):A.toString(36)}function O(){}function D(v){switch(v.status){case"fulfilled":return v.value;case"\
rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(O,O):(v.status="pending",v.then(function(A){v.status===
"pending"&&(v.status="fulfilled",v.value=A)},function(A){v.status==="pending"&&(v.status="rejected",v.reason=A)})),v.status){case"\
fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function W(v,A,j,L,J){var Ee=typeof v;(Ee==="undefined"||
Ee==="boolean")&&(v=null);var ye=!1;if(v===null)ye=!0;else switch(Ee){case"bigint":case"string":case"number":ye=!0;break;case"\
object":switch(v.$$typeof){case it:case st:ye=!0;break;case jn:return ye=v._init,W(ye(v._payload),A,j,L,J)}}if(ye){ye=v,
J=J(ye);var je=L===""?"."+_(ye,0):L;return lf(J)?(j="",je!=null&&(j=je.replace(hf,"$&/")+"/"),W(J,A,j,"",function(Ln){return Ln})):
J!=null&&(S(J)&&(J.key!=null&&(ye&&ye.key===J.key||s(J.key)),j=T(J,j+(J.key==null||ye&&ye.key===J.key?"":(""+J.key).replace(
hf,"$&/")+"/")+je),L!==""&&ye!=null&&S(ye)&&ye.key==null&&ye._store&&!ye._store.validated&&(j._store.validated=2),J=j),A.
push(J)),1}if(ye=0,je=L===""?".":L+":",lf(v))for(var Te=0;Te<v.length;Te++)L=v[Te],Ee=je+_(L,Te),ye+=W(L,A,j,Ee,J);else if(Te=
t(v),typeof Te=="function")for(Te===v.entries&&(ff||console.warn("Using Maps as children is not supported. Use an array \
of keyed ReactElements instead."),ff=!0),v=Te.call(v),Te=0;!(L=v.next()).done;)L=L.value,Ee=je+_(L,Te++),ye+=W(L,A,j,Ee,
J);else if(Ee==="object"){if(typeof v.then=="function")return W(D(v),A,j,L,J);throw A=String(v),Error("Objects are not v\
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
if(Ps===null)try{var A=("require"+Math.random()).slice(0,7);Ps=(_l&&_l[A]).call(_l,"timers").setImmediate}catch{Ps=function(L){
gf===!1&&(gf=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so\
 enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/iss\
ues if you encounter this warning."));var J=new MessageChannel;J.port1.onmessage=L,J.port2.postMessage(void 0)}}return Ps(
v)}function te(v){return 1<v.length&&typeof AggregateError=="function"?new AggregateError(v):v[0]}function _e(v,A){A!==Ms-
1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls\
 before making a new one. "),Ms=A}function pe(v,A,j){var L=Se.actQueue;if(L!==null)if(L.length!==0)try{ie(L),Y(function(){
return pe(v,A,j)});return}catch(J){Se.thrownErrors.push(J)}else Se.actQueue=null;0<Se.thrownErrors.length?(L=te(Se.thrownErrors),
Se.thrownErrors.length=0,j(L)):A(v)}function ie(v){if(!Ac){Ac=!0;var A=0;try{for(;A<v.length;A++){var j=v[A];do{Se.didUsePromise=
!1;var L=j(!1);if(L!==null){if(Se.didUsePromise){v[A]=j,v.splice(0,A);return}j=L}else break}while(!0)}v.length=0}catch(J){
v.splice(0,A+1),Se.thrownErrors.push(J)}finally{Ac=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var it=Symbol.
for("react.transitional.element"),st=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),ir=Symbol.for("react.str\
ict_mode"),C=Symbol.for("react.profiler");Symbol.for("react.provider");var ae=Symbol.for("react.consumer"),He=Symbol.for(
"react.context"),ft=Symbol.for("react.forward_ref"),Hr=Symbol.for("react.suspense"),Ir=Symbol.for("react.suspense_list"),
la=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),mn=Symbol.iterator,Ua={},Os={isMounted:function(){
return!1},enqueueForceUpdate:function(v){r(v,"forceUpdate")},enqueueReplaceState:function(v){r(v,"replaceState")},enqueueSetState:function(v){
r(v,"setState")}},sf=Object.assign,_c={};Object.freeze(_c),n.prototype.isReactComponent={},n.prototype.setState=function(v,A){
if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a func\
tion which returns an object of state variables.");this.updater.enqueueSetState(this,v,A,"setState")},n.prototype.forceUpdate=
function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};var Or={isMounted:["isMounted","Instead, make sure to\
 clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceSt\
ate","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Cs;for(Cs in Or)
Or.hasOwnProperty(Cs)&&e(Cs,Or[Cs]);a.prototype=n.prototype,Or=i.prototype=new a,Or.constructor=i,sf(Or,n.prototype),Or.
isPureReactComponent=!0;var lf=Array.isArray,Pw=Symbol.for("react.client.reference"),Se={H:null,A:null,T:null,S:null,V:null,
actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},
Ns=Object.prototype.hasOwnProperty,cf=console.createTask?console.createTask:function(){return null};Or={"react-stack-bot\
tom-frame":function(v){return v()}};var uf,df,pf={},Mw=Or["react-stack-bottom-frame"].bind(Or,d)(),Dw=cf(c(d)),ff=!1,hf=/\/+/g,
mf=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="functio\
n"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message==
"string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.
emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},gf=!1,Ps=null,Ms=0,Ds=!1,Ac=!1,yf=typeof queueMicrotask==
"function"?function(v){queueMicrotask(function(){return queueMicrotask(v)})}:Y;Or=Object.freeze({__proto__:null,c:function(v){
return H().useMemoCache(v)}}),fe.Children={map:G,forEach:function(v,A,j){G(v,function(){A.apply(this,arguments)},j)},count:function(v){
var A=0;return G(v,function(){A++}),A},toArray:function(v){return G(v,function(A){return A})||[]},only:function(v){if(!S(
v))throw Error("React.Children.only expected to receive a single React element child.");return v}},fe.Component=n,fe.Fragment=
Rr,fe.Profiler=C,fe.PureComponent=i,fe.StrictMode=ir,fe.Suspense=Hr,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=
Se,fe.__COMPILER_RUNTIME=Or,fe.act=function(v){var A=Se.actQueue,j=Ms;Ms++;var L=Se.actQueue=A!==null?A:[],J=!1;try{var Ee=v()}catch(Te){
Se.thrownErrors.push(Te)}if(0<Se.thrownErrors.length)throw _e(A,j),v=te(Se.thrownErrors),Se.thrownErrors.length=0,v;if(Ee!==
null&&typeof Ee=="object"&&typeof Ee.then=="function"){var ye=Ee;return yf(function(){J||Ds||(Ds=!0,console.error("You c\
alled act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act cal\
ls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Te,Ln){J=!0,ye.then(function(Ba){
if(_e(A,j),j===0){try{ie(L),Y(function(){return pe(Ba,Te,Ln)})}catch(Lw){Se.thrownErrors.push(Lw)}if(0<Se.thrownErrors.length){
var jw=te(Se.thrownErrors);Se.thrownErrors.length=0,Ln(jw)}}else Te(Ba)},function(Ba){_e(A,j),0<Se.thrownErrors.length&&
(Ba=te(Se.thrownErrors),Se.thrownErrors.length=0),Ln(Ba)})}}}var je=Ee;if(_e(A,j),j===0&&(ie(L),L.length!==0&&yf(function(){
J||Ds||(Ds=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testi\
ng React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Se.actQueue=
null),0<Se.thrownErrors.length)throw v=te(Se.thrownErrors),Se.thrownErrors.length=0,v;return{then:function(Te,Ln){J=!0,j===
0?(Se.actQueue=L,Y(function(){return pe(je,Te,Ln)})):Te(je)}}},fe.cache=function(v){return function(){return v.apply(null,
arguments)}},fe.captureOwnerStack=function(){var v=Se.getCurrentStack;return v===null?null:v()},fe.cloneElement=function(v,A,j){
if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var L=sf({},v.props),J=v.key,Ee=v.
_owner;if(A!=null){var ye;e:{if(Ns.call(A,"ref")&&(ye=Object.getOwnPropertyDescriptor(A,"ref").get)&&ye.isReactWarning){
ye=!1;break e}ye=A.ref!==void 0}ye&&(Ee=u()),f(A)&&(s(A.key),J=""+A.key);for(je in A)!Ns.call(A,je)||je==="key"||je==="_\
_self"||je==="__source"||je==="ref"&&A.ref===void 0||(L[je]=A[je])}var je=arguments.length-2;if(je===1)L.children=j;else if(1<
je){ye=Array(je);for(var Te=0;Te<je;Te++)ye[Te]=arguments[Te+2];L.children=ye}for(L=b(v.type,J,void 0,void 0,Ee,L,v._debugStack,
v._debugTask),J=2;J<arguments.length;J++)Ee=arguments[J],S(Ee)&&Ee._store&&(Ee._store.validated=1);return L},fe.createContext=
function(v){return v={$$typeof:He,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=
v,v.Consumer={$$typeof:ae,_context:v},v._currentRenderer=null,v._currentRenderer2=null,v},fe.createElement=function(v,A,j){
for(var L=2;L<arguments.length;L++){var J=arguments[L];S(J)&&J._store&&(J._store.validated=1)}if(L={},J=null,A!=null)for(Te in df||
!("__self"in A)||"key"in A||(df=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transfor\
m. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),f(A)&&(s(A.key),
J=""+A.key),A)Ns.call(A,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(L[Te]=A[Te]);var Ee=arguments.length-2;if(Ee===
1)L.children=j;else if(1<Ee){for(var ye=Array(Ee),je=0;je<Ee;je++)ye[je]=arguments[je+2];Object.freeze&&Object.freeze(ye),
L.children=ye}if(v&&v.defaultProps)for(Te in Ee=v.defaultProps,Ee)L[Te]===void 0&&(L[Te]=Ee[Te]);J&&h(L,typeof v=="funct\
ion"?v.displayName||v.name||"Unknown":v);var Te=1e4>Se.recentlyCreatedOwnerStacks++;return b(v,J,void 0,void 0,u(),L,Te?
Error("react-stack-top-frame"):Mw,Te?cf(c(v)):Dw)},fe.createRef=function(){var v={current:null};return Object.seal(v),v},
fe.forwardRef=function(v){v!=null&&v.$$typeof===la?console.error("forwardRef requires a render function but received a `\
memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof v!="function"?console.error("forw\
ardRef requires a render function but was given %s.",v===null?"null":typeof v):v.length!==0&&v.length!==2&&console.error(
"forwardRef render functions accept exactly two parameters: props and ref. %s",v.length===1?"Did you forget to use the r\
ef parameter?":"Any additional parameter will be undefined."),v!=null&&v.defaultProps!=null&&console.error("forwardRef r\
ender functions do not support defaultProps. Did you accidentally pass a React component?");var A={$$typeof:ft,render:v},
j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(L){j=
L,v.name||v.displayName||(Object.defineProperty(v,"name",{value:L}),v.displayName=L)}}),A},fe.isValidElement=S,fe.lazy=function(v){
return{$$typeof:jn,_payload:{_status:-1,_result:v},_init:Z}},fe.memo=function(v,A){v==null&&console.error("memo: The fir\
st argument must be a component. Instead received: %s",v===null?"null":typeof v),A={$$typeof:la,type:v,compare:A===void 0?
null:A};var j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(L){
j=L,v.name||v.displayName||(Object.defineProperty(v,"name",{value:L}),v.displayName=L)}}),A},fe.startTransition=function(v){
var A=Se.T,j={};Se.T=j,j._updatedFibers=new Set;try{var L=v(),J=Se.S;J!==null&&J(j,L),typeof L=="object"&&L!==null&&typeof L.
then=="function"&&L.then(we,mf)}catch(Ee){mf(Ee)}finally{A===null&&j._updatedFibers&&(v=j._updatedFibers.size,j._updatedFibers.
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
registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()});var ea=We((GD,md)=>{"use strict";process.env.NODE_ENV==="production"?md.exports=Wg():md.exports=qg()});var Yg=We(Al=>{"use strict";var NE=Symbol.for("react.transitional.element"),PE=Symbol.for("react.fragment");function Vg(e,t,r){
var n=null;if(r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),"key"in t){r={};for(var a in t)a!=="key"&&(r[a]=t[a])}else
r=t;return t=r.ref,{$$typeof:NE,type:e,key:n,ref:t!==void 0?t:null,props:r}}Al.Fragment=PE;Al.jsx=Vg;Al.jsxs=Vg});var zg=We($l=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(C){if(C==null)return null;if(typeof C==
"function")return C.$$typeof===we?null:C.displayName||C.name||null;if(typeof C=="string")return C;switch(C){case b:return"\
Fragment";case S:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case W:return"SuspenseList";case H:return"\
Activity"}if(typeof C=="object")switch(typeof C.tag=="number"&&console.error("Received an unexpected object in getCompon\
entNameFromType(). This is likely a bug in React. Please file an issue."),C.$$typeof){case y:return"Portal";case _:return(C.
displayName||"Context")+".Provider";case E:return(C._context.displayName||"Context")+".Consumer";case O:var ae=C.render;
return C=C.displayName,C||(C=ae.displayName||ae.name||"",C=C!==""?"ForwardRef("+C+")":"ForwardRef"),C;case G:return ae=C.
displayName||null,ae!==null?ae:e(C.type)||"Memo";case Z:ae=C._payload,C=C._init;try{return e(C(ae))}catch{}}return null}
function t(C){return""+C}function r(C){try{t(C);var ae=!1}catch{ae=!0}if(ae){ae=console;var He=ae.error,ft=typeof Symbol==
"function"&&Symbol.toStringTag&&C[Symbol.toStringTag]||C.constructor.name||"Object";return He.call(ae,"The provided key \
is an unsupported type %s. This value must be coerced to a string before using it here.",ft),t(C)}}function n(C){if(C===
b)return"<>";if(typeof C=="object"&&C!==null&&C.$$typeof===Z)return"<...>";try{var ae=e(C);return ae?"<"+ae+">":"<...>"}catch{
return"<...>"}}function a(){var C=Y.A;return C===null?null:C.getOwner()}function i(){return Error("react-stack-top-frame")}
function o(C){if(te.call(C,"key")){var ae=Object.getOwnPropertyDescriptor(C,"key").get;if(ae&&ae.isReactWarning)return!1}
return C.key!==void 0}function s(C,ae){function He(){ie||(ie=!0,console.error("%s: `key` is not a prop. Trying to access\
 it will result in `undefined` being returned. If you need to access the same value within the child component, you shou\
ld pass it as a different prop. (https://react.dev/link/special-props)",ae))}He.isReactWarning=!0,Object.defineProperty(
C,"key",{get:He,configurable:!0})}function l(){var C=e(this.type);return it[C]||(it[C]=!0,console.error("Accessing eleme\
nt.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future rele\
ase.")),C=this.props.ref,C!==void 0?C:null}function c(C,ae,He,ft,Hr,Ir,la,jn){return He=Ir.ref,C={$$typeof:h,type:C,key:ae,
props:Ir,_owner:Hr},(He!==void 0?He:null)!==null?Object.defineProperty(C,"ref",{enumerable:!1,get:l}):Object.defineProperty(
C,"ref",{enumerable:!1,value:null}),C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,
writable:!0,value:0}),Object.defineProperty(C,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.
defineProperty(C,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:la}),Object.defineProperty(C,"_debugTask",
{configurable:!1,enumerable:!1,writable:!0,value:jn}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C}function u(C,ae,He,ft,Hr,Ir,la,jn){
var vt=ae.children;if(vt!==void 0)if(ft)if(_e(vt)){for(ft=0;ft<vt.length;ft++)d(vt[ft]);Object.freeze&&Object.freeze(vt)}else
console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or Rea\
ct.jsxDEV. Use the Babel transform instead.");else d(vt);if(te.call(ae,"key")){vt=e(C);var mn=Object.keys(ae).filter(function(Os){
return Os!=="key"});ft=0<mn.length?"{key: someKey, "+mn.join(": ..., ")+": ...}":"{key: someKey}",ir[vt+ft]||(mn=0<mn.length?
"{"+mn.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ft,vt,mn,vt),ir[vt+ft]=!0)}if(vt=null,He!==void 0&&(r(He),vt=""+He),o(ae)&&(r(ae.key),
vt=""+ae.key),"key"in ae){He={};for(var Ua in ae)Ua!=="key"&&(He[Ua]=ae[Ua])}else He=ae;return vt&&s(He,typeof C=="funct\
ion"?C.displayName||C.name||"Unknown":C),c(C,vt,Ir,Hr,a(),He,la,jn)}function d(C){typeof C=="object"&&C!==null&&C.$$typeof===
h&&C._store&&(C._store.validated=1)}var f=ea(),h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.
for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler");Symbol.for("react.provider");var E=Symbol.
for("react.consumer"),_=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),W=Symbol.
for("react.suspense_list"),G=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),we=Symbol.
for("react.client.reference"),Y=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=Object.prototype.hasOwnProperty,
_e=Array.isArray,pe=console.createTask?console.createTask:function(){return null};f={"react-stack-bottom-frame":function(C){
return C()}};var ie,it={},st=f["react-stack-bottom-frame"].bind(f,i)(),Rr=pe(n(i)),ir={};$l.Fragment=b,$l.jsx=function(C,ae,He,ft,Hr){
var Ir=1e4>Y.recentlyCreatedOwnerStacks++;return u(C,ae,He,!1,ft,Hr,Ir?Error("react-stack-top-frame"):st,Ir?pe(n(C)):Rr)},
$l.jsxs=function(C,ae,He,ft,Hr){var Ir=1e4>Y.recentlyCreatedOwnerStacks++;return u(C,ae,He,!0,ft,Hr,Ir?Error("react-stac\
k-top-frame"):st,Ir?pe(n(C)):Rr)}}()});var Rl=We((XD,gd)=>{"use strict";process.env.NODE_ENV==="production"?gd.exports=Yg():gd.exports=zg()});var yd=We(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.Allow=q.ALL=q.COLLECTION=q.ATOM=q.SPECIAL=
q.INF=q._INFINITY=q.INFINITY=q.NAN=q.BOOL=q.NULL=q.OBJ=q.ARR=q.NUM=q.STR=void 0;q.STR=1;q.NUM=2;q.ARR=4;q.OBJ=8;q.NULL=16;
q.BOOL=32;q.NAN=64;q.INFINITY=128;q._INFINITY=256;q.INF=q.INFINITY|q._INFINITY;q.SPECIAL=q.NULL|q.BOOL|q.INF|q.NAN;q.ATOM=
q.STR|q.NUM|q.SPECIAL;q.COLLECTION=q.ARR|q.OBJ;q.ALL=q.ATOM|q.COLLECTION;q.Allow={STR:q.STR,NUM:q.NUM,ARR:q.ARR,OBJ:q.OBJ,
NULL:q.NULL,BOOL:q.BOOL,NAN:q.NAN,INFINITY:q.INFINITY,_INFINITY:q._INFINITY,INF:q.INF,SPECIAL:q.SPECIAL,ATOM:q.ATOM,COLLECTION:q.
COLLECTION,ALL:q.ALL};q.default=q.Allow});var vd=We(At=>{"use strict";var ME=At&&At.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),DE=At&&At.__exportStar||function(e,t){
for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&ME(t,e,r)};Object.defineProperty(At,"__esModul\
e",{value:!0});At.Allow=At.MalformedJSON=At.PartialJSON=At.parseJSON=At.parse=void 0;var tr=yd();Object.defineProperty(At,
"Allow",{enumerable:!0,get:function(){return tr.Allow}});DE(yd(),At);var Il=class extends Error{};At.PartialJSON=Il;var Ol=class extends Error{};
At.MalformedJSON=Ol;function Kg(e,t=tr.Allow.ALL){if(typeof e!="string")throw new TypeError(`expecting str, got ${typeof e}`);
if(!e.trim())throw new Error(`${e} is empty`);return jE(e.trim(),t)}At.parseJSON=Kg;var jE=(e,t)=>{let r=e.length,n=0,a=f=>{
throw new Il(`${f} at position ${n}`)},i=f=>{throw new Ol(`${f} at position ${n}`)},o=()=>(d(),n>=r&&a("Unexpected end o\
f input"),e[n]==='"'?s():e[n]==="{"?l():e[n]==="["?c():e.substring(n,n+4)==="null"||tr.Allow.NULL&t&&r-n<4&&"null".startsWith(
e.substring(n))?(n+=4,null):e.substring(n,n+4)==="true"||tr.Allow.BOOL&t&&r-n<4&&"true".startsWith(e.substring(n))?(n+=4,
!0):e.substring(n,n+5)==="false"||tr.Allow.BOOL&t&&r-n<5&&"false".startsWith(e.substring(n))?(n+=5,!1):e.substring(n,n+8)===
"Infinity"||tr.Allow.INFINITY&t&&r-n<8&&"Infinity".startsWith(e.substring(n))?(n+=8,1/0):e.substring(n,n+9)==="-Infinity"||
tr.Allow._INFINITY&t&&1<r-n&&r-n<9&&"-Infinity".startsWith(e.substring(n))?(n+=9,-1/0):e.substring(n,n+3)==="NaN"||tr.Allow.
NAN&t&&r-n<3&&"NaN".startsWith(e.substring(n))?(n+=3,NaN):u()),s=()=>{let f=n,h=!1;for(n++;n<r&&(e[n]!=='"'||h&&e[n-1]===
"\\");)h=e[n]==="\\"?!h:!1,n++;if(e.charAt(n)=='"')try{return JSON.parse(e.substring(f,++n-Number(h)))}catch(y){i(String(
y))}else if(tr.Allow.STR&t)try{return JSON.parse(e.substring(f,n-Number(h))+'"')}catch{return JSON.parse(e.substring(f,e.
lastIndexOf("\\"))+'"')}a("Unterminated string literal")},l=()=>{n++,d();let f={};try{for(;e[n]!=="}";){if(d(),n>=r&&tr.
Allow.OBJ&t)return f;let h=s();d(),n++;try{let y=o();f[h]=y}catch(y){if(tr.Allow.OBJ&t)return f;throw y}d(),e[n]===","&&
n++}}catch{if(tr.Allow.OBJ&t)return f;a("Expected '}' at end of object")}return n++,f},c=()=>{n++;let f=[];try{for(;e[n]!==
"]";)f.push(o()),d(),e[n]===","&&n++}catch{if(tr.Allow.ARR&t)return f;a("Expected ']' at end of array")}return n++,f},u=()=>{
if(n===0){e==="-"&&i("Not sure what '-' is");try{return JSON.parse(e)}catch(h){if(tr.Allow.NUM&t)try{return JSON.parse(e.
substring(0,e.lastIndexOf("e")))}catch{}i(String(h))}}let f=n;for(e[n]==="-"&&n++;e[n]&&",]}".indexOf(e[n])===-1;)n++;n==
r&&!(tr.Allow.NUM&t)&&a("Unterminated number literal");try{return JSON.parse(e.substring(f,n))}catch{e.substring(f,n)===
"-"&&a("Not sure what '-' is");try{return JSON.parse(e.substring(f,e.lastIndexOf("e")))}catch(y){i(String(y))}}},d=()=>{
for(;n<r&&` 
\r	`.includes(e[n]);)n++};return o()},LE=Kg;At.parse=LE});import{fileURLToPath as TM}from"node:url";var De=oe(Le(),1),tt=oe(Le(),1);var qs={done:!1,hasNext:!1};function Gc(e,...t){let r=e,n=t.map(i=>"lazy"in i?G1(i):void 0),a=0;for(;a<t.length;){if(n[a]===void 0||!J1(r)){let l=t[a];
r=l(r),a+=1;continue}let i=[];for(let l=a;l<t.length;l++){let c=n[l];if(c===void 0||(i.push(c),c.isSingle))break}let o=[];
for(let l of r)if(Oh(l,o,i))break;let{isSingle:s}=i.at(-1);r=s?o[0]:o,a+=i.length}return r}function Oh(e,t,r){if(r.length===
0)return t.push(e),!1;let n=e,a=qs,i=!1;for(let[o,s]of r.entries()){let{index:l,items:c}=s;if(c.push(n),a=s(n,l,c),s.index+=
1,a.hasNext){if(a.hasMany??!1){for(let u of a.next)if(Oh(u,t,r.slice(o+1)))return!0;return i}n=a.next}if(!a.hasNext)break;
a.done&&(i=!0)}return a.hasNext&&t.push(n),i}function G1(e){let{lazy:t,lazyArgs:r}=e,n=t(...r);return Object.assign(n,{isSingle:t.
single??!1,index:0,items:[]})}function J1(e){return typeof e=="string"||typeof e=="object"&&e!==null&&Symbol.iterator in
e}function Ch(e,t){let r=t.length-e.length;if(r===1){let[n,...a]=t;return Gc(n,{lazy:e,lazyArgs:a})}if(r===0){let n={lazy:e,
lazyArgs:t};return Object.assign(a=>Gc(a,n),n)}throw new Error("Wrong number of arguments")}function Nh(e,t,r){let n=a=>e(a,...t);return r===void 0?n:Object.assign(n,{lazy:r,lazyArgs:t})}function or(e,t,r){let n=e.length-t.length;if(n===0)return e(...t);if(n===1)return Nh(e,t,r);throw new Error("Wrong numb\
er of arguments")}function Jc(...e){return or(Z1,e)}function Z1(e,t){if(e<1)return[];let r=Number.isInteger(e)?e:Math.floor(e),n=new Array(
r);for(let a=0;a<r;a++)n[a]=t(a);return n}function fa(...e){return Ch(X1,e)}function X1(){let e=new Set;return t=>e.has(t)?qs:(e.add(t),{done:!1,hasNext:!0,next:t})}function Zc(e,t,r){return typeof t=="number"||t===void 0?n=>n.split(e,t):e.split(t,r)}function gr(...e){return or(Q1,e)}var Q1=(e,t)=>e[t];function Xc(...e){return or(eS,e)}function eS(e,t){let r={};for(let[n,a]of Object.entries(e)){let i=t(a,n,e);r[n]=i}return r}function vn(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Vs(...e){return or(tS,e)}var tS=e=>e.at(-1);function Bn(e){return typeof e=="number"&&!Number.isNaN(e)}function Qc(e){return typeof e=="object"&&e!==null}function jt(e){return typeof e=="string"}function eu(e){return e===void 0?!0:typeof e=="string"||Array.isArray(e)?e.length===0:Object.keys(e).length===0}function Yi(e){return typeof e=="function"}function zi(e){return e!==void 0}function Hn(...e){return or(rS,e)}var rS=(e,t)=>{let r=new Map;for(let[n,a]of e.entries()){let i=t(a,n,e);if(i!==void 0){
let o=r.get(i);o===void 0&&(o=[],r.set(i,o)),o.push(a)}}return Object.fromEntries(r)};function tu(){return nS}var nS=e=>e;function bt(...e){return or(aS,e)}function aS(e,t){let r={};for(let[n,a]of e.entries()){let i=t(a,n,e);r[i]=a}return r}function ru(...e){return or(iS,e)}var iS=e=>`${e[0]?.toUpperCase()??""}${e.slice(1)}`;var $=oe(Mh(),1),br=$.default.BigInt(0),po=$.default.BigInt(1),Ku=$.default.BigInt(2),oS=$.default.BigInt(10),sS=$.default.
BigInt(24),lS=$.default.BigInt(60),cS=$.default.BigInt(1e3),Io=$.default.BigInt(1e6),io=$.default.BigInt(1e9),gm=$.default.
multiply($.default.BigInt(3600),io),uS=$.default.multiply(lS,io),Kn=$.default.multiply(gm,sS);function wn(e){return typeof e==
"bigint"?$.default.BigInt(e.toString(10)):e}function ym(e){return $.default.equal($.default.remainder(e,Ku),br)}function ha(e){
return $.default.lessThan(e,br)?$.default.unaryMinus(e):e}function Ks(e,t){return $.default.lessThan(e,t)?-1:$.default.greaterThan(
e,t)?1:0}function Zi(e,t){return{quotient:$.default.divide(e,t),remainder:$.default.remainder(e,t)}}var Dh,jh,re="slot-e\
pochNanoSeconds",ne="slot-iso-date",Ye="slot-iso-date-time",Qe="slot-time",M="slot-calendar",vm="slot-date-brand",bm="sl\
ot-year-month-brand",wm="slot-month-day-brand",Oe="slot-time-zone",Bt="slot-years",Ht="slot-months",sr="slot-weeks",Wt="\
slot-days",qt="slot-hours",Vt="slot-minutes",Yt="slot-seconds",zt="slot-milliseconds",Kt="slot-microseconds",lr="slot-na\
noseconds",Tm="date",km="ym",Sm="md",Em="time",xm="datetime",_m="instant",xa="original",za="timezone-canonical",lu="time\
zone-original",Xi="calendar-id",Am="locale",cu="options",$m=new WeakMap,uu=Symbol.for("@@Temporal__GetSlots");(Dh=globalThis)[uu]||
(Dh[uu]=function(e){return $m.get(e)});var ul=globalThis[uu],du=Symbol.for("@@Temporal__CreateSlots");(jh=globalThis)[du]||
(jh[du]=function(e){$m.set(e,Object.create(null))});var On=globalThis[du];function Qt(e,...t){if(!e||typeof e!="object")
return!1;let r=ul(e);return!!r&&t.every(n=>n in r)}function g(e,t){let r=ul(e)?.[t];if(r===void 0)throw new TypeError(`M\
issing internal slot ${t}`);return r}function he(e,t,r){let n=ul(e);if(n===void 0)throw new TypeError("Missing slots for\
 the given container");if(n[t])throw new TypeError(`${t} already has set`);n[t]=r}var pu={};function Cn(e,t){Object.defineProperty(
e.prototype,Symbol.toStringTag,{value:t,writable:!1,enumerable:!1,configurable:!0});let r=Object.getOwnPropertyNames(e);
for(let a=0;a<r.length;a++){let i=r[a],o=Object.getOwnPropertyDescriptor(e,i);o.configurable&&o.enumerable&&(o.enumerable=
!1,Object.defineProperty(e,i,o))}let n=Object.getOwnPropertyNames(e.prototype);for(let a=0;a<n.length;a++){let i=n[a],o=Object.
getOwnPropertyDescriptor(e.prototype,i);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e.prototype,
i,o))}fu(t,e),fu(`${t}.prototype`,e.prototype)}function fu(e,t){let r=`%${e}%`;if(pu[r]!==void 0)throw new Error(`intrin\
sic ${e} already exists`);pu[r]=t}function _t(e){return pu[e]}function Ga(e,t){let r=e;if(r===0)return{div:r,mod:r};let n=Math.
sign(r);r=Math.abs(r);let a=Math.trunc(1+Math.log10(r));if(t>=a)return{div:0*n,mod:n*r};if(t===0)return{div:n*r,mod:0*n};
let i=r.toPrecision(a);return{div:n*Number.parseInt(i.slice(0,a-t),10),mod:n*Number.parseInt(i.slice(a-t),10)}}function nu(e,t,r){
let n=e,a=r;if(n===0)return a;let i=Math.sign(n)||Math.sign(a);n=Math.abs(n),a=Math.abs(a);let o=n.toPrecision(Math.trunc(
1+Math.log10(n)));if(a===0)return i*Number.parseInt(o+"0".repeat(t),10);let s=o+a.toPrecision(Math.trunc(1+Math.log10(a))).
padStart(t,"0");return i*Number.parseInt(s,10)}function dl(e,t){let r=t==="negative";switch(e){case"ceil":return r?"zero":
"infinity";case"floor":return r?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":
return r?"half-zero":"half-infinity";case"halfFloor":return r?"half-infinity":"half-zero";case"halfExpand":return"half-i\
nfinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function pl(e,t,r,n,a){return a==="zero"?e:
a==="infinity"?t:r<0?e:r>0?t:a==="half-zero"?e:a==="half-infinity"?t:n?e:t}var Fe=class e{constructor(t){this.totalNs=wn(
t),this.sec=$.default.toNumber($.default.divide(this.totalNs,io)),this.subsec=$.default.toNumber($.default.remainder(this.
totalNs,io))}static validateNew(t,r){if($.default.greaterThan(ha(t),e.MAX))throw new RangeError(`${r} of duration time u\
nits cannot exceed ${e.MAX} s`);return new e(t)}static fromEpochNsDiff(t,r){let n=$.default.subtract(wn(t),wn(r));return new e(
n)}static fromComponents(t,r,n,a,i,o){let s=$.default.add($.default.add($.default.add($.default.add($.default.add($.default.
BigInt(o),$.default.multiply($.default.BigInt(i),cS)),$.default.multiply($.default.BigInt(a),Io)),$.default.multiply($.default.
BigInt(n),io)),$.default.multiply($.default.BigInt(r),uS)),$.default.multiply($.default.BigInt(t),gm));return e.validateNew(
s,"total")}abs(){return new e(ha(this.totalNs))}add(t){return e.validateNew($.default.add(this.totalNs,t.totalNs),"sum")}add24HourDays(t){
return e.validateNew($.default.add(this.totalNs,$.default.multiply($.default.BigInt(t),Kn)),"sum")}addToEpochNs(t){return $.default.
add(wn(t),this.totalNs)}cmp(t){return Ks(this.totalNs,t.totalNs)}divmod(t){let{quotient:r,remainder:n}=Zi(this.totalNs,$.default.
BigInt(t));return{quotient:$.default.toNumber(r),remainder:new e(n)}}fdiv(t){let r=wn(t),n=$.default.BigInt(r),{quotient:a,
remainder:i}=Zi(this.totalNs,n),o=[],s,l=($.default.lessThan(this.totalNs,br)?-1:1)*Math.sign($.default.toNumber(r));for(;!$.default.
equal(i,br)&&o.length<50;)i=$.default.multiply(i,oS),{quotient:s,remainder:i}=Zi(i,n),o.push(Math.abs($.default.toNumber(
s)));return l*+(ha(a).toString()+"."+o.join(""))}isZero(){return $.default.equal(this.totalNs,br)}round(t,r){let n=wn(t);
if($.default.equal(n,po))return this;let{quotient:a,remainder:i}=Zi(this.totalNs,n),o=$.default.lessThan(this.totalNs,br)?
"negative":"positive",s=$.default.multiply(ha(a),n),l=$.default.add(s,n),c=Ks(ha($.default.multiply(i,Ku)),n),u=dl(r,o),
d=$.default.equal(ha(this.totalNs),s)?s:pl(s,l,c,ym(a),u),f=o==="positive"?d:$.default.unaryMinus(d);return e.validateNew(
f,"rounding")}sign(){return this.cmp(new e(br))}subtract(t){return e.validateNew($.default.subtract(this.totalNs,t.totalNs),
"difference")}};Fe.MAX=$.default.BigInt("9007199254740991999999999"),Fe.ZERO=new Fe(br);var Lh=/[A-Za-z._][A-Za-z._0-9+-]*/,
Oo=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${Lh.source})(?:\\/(?:${Lh.source}))*)`),
Rm=/(?:[+-]\d{6}|\d{4})/,Gs=/(?:0[1-9]|1[0-2])/,hu=/(?:0[1-9]|[12]\d|3[01])/,dS=new RegExp(`(${Rm.source})(?:-(${Gs.source}\
)-(${hu.source})|(${Gs.source})(${hu.source}))`),Im=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,
Om=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,Cm=new RegExp(`([zZ])|${Om.
source}?`),Qa=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,pS=new RegExp([`^${dS.source}`,`(?:(?:[tT]\
|\\s+)${Im.source}(?:${Cm.source})?)?`,`(?:\\[!?(${Oo.source})\\])?`,`((?:${Qa.source})*)$`].join("")),fS=new RegExp([`^\
[tT]?${Im.source}`,`(?:${Cm.source})?`,`(?:\\[!?${Oo.source}\\])?`,`((?:${Qa.source})*)$`].join("")),hS=new RegExp(`^(${Rm.
source})-?(${Gs.source})(?:\\[!?${Oo.source}\\])?((?:${Qa.source})*)$`),mS=new RegExp(`^(?:--)?(${Gs.source})-?(${hu.source}\
)(?:\\[!?${Oo.source}\\])?((?:${Qa.source})*)$`),au=/(\d+)(?:[.,](\d{1,9}))?/,gS=new RegExp(`(?:${au.source}H)?(?:${au.source}\
M)?(?:${au.source}S)?`),yS=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${gS.source}\
)?$`,"i"),Gn=864e5,Js=1e6*Gn,vS=6e10,Nm=1e8*Gn,ei=Yr(Nm),fo=$.default.unaryMinus(ei),bS=$.default.add($.default.subtract(
fo,Kn),po),wS=$.default.subtract($.default.add(ei,Kn),po),TS=146097*Gn,Fh=-271821,Uh=275760,oo=Date.UTC(1847,0,1),kS=["i\
so8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiop\
ic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],SS=new Set(
["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT",
"PNT","PRT","PST","SST","VST"]);function et(e){return typeof e=="object"&&e!==null||typeof e=="function"}function fl(e){
if(typeof e=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(e)}function hl(e){if(typeof e==
"symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(e)}function se(e){let t=fl(e);if(t===
0)return 0;if(Number.isNaN(t)||t===1/0||t===-1/0)throw new RangeError("invalid number value");let r=Math.trunc(t);return r===
0?0:r}function Bh(e,t){let r=se(e);if(r<=0)throw t!==void 0?new RangeError(`property '${t}' cannot be a a number less th\
an one`):new RangeError("Cannot convert a number less than one to a positive integer");return r}function qr(e){let t=fl(
e);if(Number.isNaN(t))throw new RangeError("not a number");if(t===1/0||t===-1/0)throw new RangeError("infinity is out of\
 range");if(!function(r){if(typeof r!="number"||Number.isNaN(r)||r===1/0||r===-1/0)return!1;let n=Math.abs(r);return Math.
floor(n)===n}(t))throw new RangeError(`unsupported fractional value ${e}`);return t===0?0:t}function ho(e,t){return String(
e).padStart(t,"0")}function ht(e){if(typeof e!="string")throw new TypeError(`expected a string, not ${String(e)}`);return e}
function mu(e,t){if(et(e)){let r=e?.toString();if(typeof r=="string"||typeof r=="number")return r;throw new TypeError("C\
annot convert object to primitive value")}return e}var gu=["era","eraYear","year","month","monthCode","day","hour","minu\
te","second","millisecond","microsecond","nanosecond","offset","timeZone"],ES={era:hl,eraYear:se,year:se,month:Bh,monthCode:function(e){
let t=ht(mu(e));if(t.length<3||t.length>4||t[0]!=="M"||"0123456789".indexOf(t[1])===-1||"0123456789".indexOf(t[2])===-1||
t[1]+t[2]==="00"&&t[3]!=="L"||t[3]!=="L"&&t[3]!==void 0)throw new RangeError(`bad month code ${t}; must match M01-M99 or\
 M00L-M99L`);return t},day:Bh,hour:se,minute:se,second:se,millisecond:se,microsecond:se,nanosecond:se,offset:function(e){
let t=ht(mu(e));return ci(t),t},timeZone:Zt},xS={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},ti=[
["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],
["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microseco\
nd","time"],["nanoseconds","nanosecond","time"]],Hh=Object.fromEntries(ti.map(e=>[e[0],e[1]])),_S=Object.fromEntries(ti.
map(([e,t])=>[t,e])),so=ti.map(([,e])=>e),ri={day:Js,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},
Zs=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],AS=Intl.DateTimeFormat,
Wh=new Map;function Pm(e){let t=bo(e),r=Wh.get(t);return r===void 0&&(r=new AS("en-us",{timeZone:t,hour12:!1,era:"short",
year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Wh.set(t,r)),r}function St(e){
return Qt(e,re)&&!Qt(e,Oe,M)}function Ze(e){return Qt(e,Bt,Ht,Wt,qt,Vt,Yt,zt,Kt,lr)}function Xe(e){return Qt(e,vm)}function nt(e){
return Qt(e,Qe)}function qe(e){return Qt(e,Ye)}function Et(e){return Qt(e,bm)}function vr(e){return Qt(e,wm)}function ve(e){
return Qt(e,re,Oe,M)}function I(e,t){if(!t(e))throw new TypeError("invalid receiver: method called with the wrong type o\
f this-object")}function oi(e){if(Qt(e,M)||Qt(e,Oe))throw new TypeError("with() does not support a calendar or timeZone \
property");if(nt(e))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(e.calendar!==
void 0)throw new TypeError("with() does not support a calendar property");if(e.timeZone!==void 0)throw new TypeError("wi\
th() does not support a timeZone property")}function Co(e,t){return t==="never"||t==="auto"&&e==="iso8601"?"":`[${t==="c\
ritical"?"!":""}u-ca=${e}]`}function ml(e){let t,r,n=!1;for(Qa.lastIndex=0;r=Qa.exec(e);){let{1:a,2:i,3:o}=r;if(i==="u-c\
a"){if(t===void 0)t=o,n=a==="!";else if(a==="!"||n)throw new RangeError(`Invalid annotations in ${e}: more than one u-ca\
 present with critical flag`)}else if(a==="!")throw new RangeError(`Unrecognized annotation: !${i}=${o}`)}return t}function sn(e){
let t=pS.exec(e);if(!t)throw new RangeError(`invalid RFC 9557 string: ${e}`);let r=ml(t[16]),n=t[1];if(n==="-000000")throw new RangeError(
`invalid RFC 9557 string: ${e}`);let a=+n,i=+(t[2]??t[4]??1),o=+(t[3]??t[5]??1),s=t[6]!==void 0,l=+(t[6]??0),c=+(t[7]??t[10]??
0),u=+(t[8]??t[11]??0);u===60&&(u=59);let d=(t[9]??t[12]??"")+"000000000",f=+d.slice(0,3),h=+d.slice(3,6),y=+d.slice(6,9),
b,T=!1;t[13]?(b=void 0,T=!0):t[14]&&(b=t[14]);let S=t[15];return ed(a,i,o,l,c,u,f,h,y),{year:a,month:i,day:o,time:s?{hour:l,
minute:c,second:u,millisecond:f,microsecond:h,nanosecond:y}:"start-of-day",tzAnnotation:S,offset:b,z:T,calendar:r}}function Mm(e){
let t=fS.exec(e),r,n,a,i,o,s,l;if(t){l=ml(t[10]),r=+(t[1]??0),n=+(t[2]??t[5]??0),a=+(t[3]??t[6]??0),a===60&&(a=59);let c=(t[4]??
t[7]??"")+"000000000";if(i=+c.slice(0,3),o=+c.slice(3,6),s=+c.slice(6,9),t[8])throw new RangeError("Z designator not sup\
ported for PlainTime")}else{let c,u;if({time:c,z:u,calendar:l}=sn(e),c==="start-of-day")throw new RangeError(`time is mi\
ssing in string: ${e}`);if(u)throw new RangeError("Z designator not supported for PlainTime");({hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s}=c)}if(bl(r,n,a,i,o,s),/[tT ][0-9][0-9]/.test(e))return{hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s,calendar:l};try{let{month:c,day:u}=Ju(e);ba(1972,c,u)}catch{try{let{year:c,month:u}=Gu(
e);ba(c,u,1)}catch{return{hour:r,minute:n,second:a,millisecond:i,microsecond:o,nanosecond:s,calendar:l}}}throw new RangeError(
`invalid RFC 9557 time-only string ${e}; may need a T prefix`)}function Gu(e){let t=hS.exec(e),r,n,a,i;if(t){a=ml(t[3]);
let o=t[1];if(o==="-000000")throw new RangeError(`invalid RFC 9557 string: ${e}`);if(r=+o,n=+t[2],i=1,a!==void 0&&a!=="i\
so8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let o;if({year:r,month:n,calendar:a,
day:i,z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:r,month:n,calendar:a,
referenceISODay:i}}function Ju(e){let t=mS.exec(e),r,n,a,i;if(t){if(a=ml(t[3]),r=+t[1],n=+t[2],a!==void 0&&a!=="iso8601")
throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let o;if({month:r,day:n,calendar:a,year:i,
z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:r,day:n,calendar:a,referenceISOYear:i}}
var Dm=new RegExp(`^${Oo.source}$`,"i"),jm=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function Lm(e){
let t=RS.test(e)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${t}: ${e}`)}function zn(e){
return Dm.test(e)||Lm(e),jm.test(e)?{offsetMinutes:ci(e)/6e10}:{tzName:e}}function lo(e,t,r,n){let a=e,i=t,o=r;switch(n){case"\
reject":ba(a,i,o);break;case"constrain":({year:a,month:i,day:o}=tg(a,i,o))}return{year:a,month:i,day:o}}function gl(e,t,r,n,a,i,o){
let s=e,l=t,c=r,u=n,d=a,f=i;switch(o){case"reject":bl(s,l,c,u,d,f);break;case"constrain":s=Gt(s,0,23),l=Gt(l,0,59),c=Gt(
c,0,59),u=Gt(u,0,999),d=Gt(d,0,999),f=Gt(f,0,999)}return{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}
function Fm(e){if(!et(e))throw new TypeError("invalid duration-like");let t={years:void 0,months:void 0,weeks:void 0,days:void 0,
hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0},r=!1;for(let n=0;n<
Zs.length;n++){let a=Zs[n],i=e[a];i!==void 0&&(r=!0,t[a]=qr(i))}if(!r)throw new TypeError("invalid duration-like");return t}
function Ct({years:e,months:t,weeks:r,days:n},a,i,o){return{years:e,months:o??t,weeks:i??r,days:a??n}}function Re(e,t){return{
isoDate:e,time:t}}function Ae(e){return An(e,"overflow",["constrain","reject"],"constrain")}function co(e){return An(e,"\
disambiguation",["compatible","earlier","later","reject"],"compatible")}function zr(e,t){return An(e,"roundingMode",["ce\
il","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],t)}function zs(e,t){return An(e,
"offset",["prefer","use","ignore","reject"],t)}function No(e){return An(e,"calendarName",["auto","always","never","criti\
cal"],"auto")}function si(e){let t=e.roundingIncrement;if(t===void 0)return 1;let r=se(t);if(r<1||r>1e9)throw new RangeError(
`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);return r}function li(e,t,r){let n=r?t:t-1;if(e>n)throw new RangeError(
`roundingIncrement must be at least 1 and less than ${n}, not ${e}`);if(t%e!=0)throw new RangeError(`Rounding increment \
must divide evenly into ${t}`)}function Po(e){let t=e.fractionalSecondDigits;if(t===void 0)return"auto";if(typeof t!="nu\
mber"){if(hl(t)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return"a\
uto"}let r=Math.floor(t);if(!Number.isFinite(r)||r<0||r>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or\
 0 through 9, not ${t}`);return r}function Mo(e,t){switch(e){case"minute":return{precision:"minute",unit:"minute",increment:1};case"\
second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"\
microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}
switch(t){case"auto":return{precision:t,unit:"nanosecond",increment:1};case 0:return{precision:t,unit:"second",increment:1};case 1:case 2:case 3:
return{precision:t,unit:"millisecond",increment:10**(3-t)};case 4:case 5:case 6:return{precision:t,unit:"microsecond",increment:10**
(6-t)};case 7:case 8:case 9:return{precision:t,unit:"nanosecond",increment:10**(9-t)};default:throw new RangeError(`frac\
tionalSecondDigits must be 'auto' or 0 through 9, not ${t}`)}}var Rn=Symbol("~required~");function ur(e,t,r,n,a=[]){let i=[];
for(let c=0;c<ti.length;c++){let u=ti[c],d=u[1],f=u[2];r!=="datetime"&&r!==f||i.push(d)}i=i.concat(a);let o=n;o===Rn?o=void 0:
o!==void 0&&i.push(o);let s=[];s=s.concat(i);for(let c=0;c<i.length;c++){let u=i[c],d=_S[u];d!==void 0&&s.push(d)}let l=An(
e,t,s,o);if(l===void 0&&n===Rn)throw new RangeError(`${t} is required`);return l&&l in Hh?Hh[l]:l}function iu(e){let t=e.
relativeTo;if(t===void 0)return{};let r,n,a,i,o,s="option",l=!1;if(et(t)){if(ve(t))return{zonedRelativeTo:t};if(Xe(t))return{
plainRelativeTo:t};if(qe(t))return{plainRelativeTo:Jt(g(t,Ye).isoDate,g(t,M))};a=Uo(t);let c=Sr(a,t,["year","month","mon\
thCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:r,time:n}=
jo(a,c,"constrain")),{offset:o,timeZone:i}=c,o===void 0&&(s="wall")}else{let c,u,d,f,h;if({year:d,month:f,day:h,time:n,calendar:a,
tzAnnotation:c,offset:o,z:u}=sn(ht(t)),c)i=Zt(c),u?s="exact":o||(s="wall"),l=!0;else if(u)throw new RangeError("Z design\
ator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");a||(a="iso8601"),a=er(a),
r={year:d,month:f,day:h}}return i===void 0?{plainRelativeTo:Jt(r,a)}:{zonedRelativeTo:Ot(Xs(r,n,s,s==="option"?ci(o):0,i,
"compatible","reject",l),i,a)}}function Tn(e){return g(e,Bt)!==0?"year":g(e,Ht)!==0?"month":g(e,sr)!==0?"week":g(e,Wt)!==
0?"day":g(e,qt)!==0?"hour":g(e,Vt)!==0?"minute":g(e,Yt)!==0?"second":g(e,zt)!==0?"millisecond":g(e,Kt)!==0?"microsecond":
"nanosecond"}function xn(e,t){return so.indexOf(e)>so.indexOf(t)?t:e}function Qr(e){return e==="year"||e==="month"||e===
"week"}function kn(e){return Qr(e)||e==="day"?"date":"time"}function Xn(e){return _t("%calendarImpl%")(e)}function Do(e){
return _t("%calendarImpl%")(g(e,M))}function Xt(e,t,r="date"){let n=Object.create(null),a=Xn(e).isoToDate(t,{year:!0,monthCode:!0,
day:!0});return n.monthCode=a.monthCode,r!=="month-day"&&r!=="date"||(n.day=a.day),r!=="year-month"&&r!=="date"||(n.year=
a.year),n}function Sr(e,t,r,n,a){let i=Xn(e).extraFields(r),o=r.concat(n,i),s=Object.create(null),l=!1;o.sort();for(let c=0;c<
o.length;c++){let u=o[c],d=t[u];if(d!==void 0)l=!0,s[u]=(0,ES[u])(d);else if(a!=="partial"){if(a.includes(u))throw new TypeError(
`required property '${u}' missing or undefined`);s[u]=xS[u]}}if(a==="partial"&&!l)throw new TypeError("no supported prop\
erties found");return s}function yu(e,t="complete"){let r=["hour","microsecond","millisecond","minute","nanosecond","sec\
ond"],n=!1,a=Object.create(null);for(let i=0;i<r.length;i++){let o=r[i],s=e[o];s!==void 0?(a[o]=se(s),n=!0):t==="complet\
e"&&(a[o]=0)}if(!n)throw new TypeError("invalid time-like");return a}function Qi(e,t){if(et(e)){if(Xe(e))return Ae(K(t)),
Jt(g(e,ne),g(e,M));if(ve(e)){let l=Dr(g(e,Oe),g(e,re));return Ae(K(t)),Jt(l.isoDate,g(e,M))}if(qe(e))return Ae(K(t)),Jt(
g(e,Ye).isoDate,g(e,M));let s=Uo(e);return Jt(Jn(s,Sr(s,e,["year","month","monthCode","day"],[],[]),Ae(K(t))),s)}let{year:r,
month:n,day:a,calendar:i,z:o}=sn(ht(e));if(o)throw new RangeError("Z designator not supported for PlainDate");return i||
(i="iso8601"),i=er(i),Ae(K(t)),Jt({year:r,month:n,day:a},i)}function jo(e,t,r){return Re(Jn(e,t,r),gl(t.hour,t.minute,t.
second,t.millisecond,t.microsecond,t.nanosecond,r))}function eo(e,t){let r,n,a;if(et(e)){if(qe(e))return Ae(K(t)),Nr(g(e,
Ye),g(e,M));if(ve(e)){let s=Dr(g(e,Oe),g(e,re));return Ae(K(t)),Nr(s,g(e,M))}if(Xe(e))return Ae(K(t)),Nr(Re(g(e,ne),{deltaDays:0,
hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),g(e,M));a=Uo(e);let i=Sr(a,e,["year","month","monthC\
ode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),o=Ae(K(t));({isoDate:r,time:n}=jo(a,
i,o))}else{let i,o,s,l;if({year:o,month:s,day:l,time:n,calendar:a,z:i}=sn(ht(e)),i)throw new RangeError("Z designator no\
t supported for PlainDateTime");n==="start-of-day"&&(n={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0}),ed(o,s,l,n.hour,n.minute,n.second,n.millisecond,n.microsecond,n.nanosecond),a||(a="iso8601"),a=er(a),Ae(K(
t)),r={year:o,month:s,day:l}}return Nr(Re(r,n),a)}function Mr(e){let t=_t("%Temporal.Duration%");if(Ze(e))return new t(g(
e,Bt),g(e,Ht),g(e,sr),g(e,Wt),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr));if(!et(e))return function(a){let{years:i,
months:o,weeks:s,days:l,hours:c,minutes:u,seconds:d,milliseconds:f,microseconds:h,nanoseconds:y}=function(b){let T=yS.exec(
b);if(!T)throw new RangeError(`invalid duration: ${b}`);if(T.every((Rr,ir)=>ir<2||Rr===void 0))throw new RangeError(`inv\
alid duration: ${b}`);let S=T[1]==="-"?-1:1,E=T[2]===void 0?0:se(T[2])*S,_=T[3]===void 0?0:se(T[3])*S,O=T[4]===void 0?0:
se(T[4])*S,D=T[5]===void 0?0:se(T[5])*S,W=T[6]===void 0?0:se(T[6])*S,G=T[7],Z=T[8],H=T[9],we=T[10],Y=T[11],te=0,_e=0,pe=0;
if(G!==void 0){if(Z??H??we??Y)throw new RangeError("only the smallest unit can be fractional");pe=3600*se((G+"000000000").
slice(0,9))*S}else if(te=Z===void 0?0:se(Z)*S,H!==void 0){if(we??Y)throw new RangeError("only the smallest unit can be f\
ractional");pe=60*se((H+"000000000").slice(0,9))*S}else _e=we===void 0?0:se(we)*S,Y!==void 0&&(pe=se((Y+"000000000").slice(
0,9))*S);let ie=pe%1e3,it=Math.trunc(pe/1e3)%1e3,st=Math.trunc(pe/1e6)%1e3;return _e+=Math.trunc(pe/1e9)%60,te+=Math.trunc(
pe/6e10),wl(E,_,O,D,W,te,_e,st,it,ie),{years:E,months:_,weeks:O,days:D,hours:W,minutes:te,seconds:_e,milliseconds:st,microseconds:it,
nanoseconds:ie}}(a);return new(_t("%Temporal.Duration%"))(i,o,s,l,c,u,d,f,h,y)}(ht(e));let r={years:0,months:0,weeks:0,days:0,
hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0},n=Fm(e);for(let a=0;a<Zs.length;a++){let i=Zs[a],
o=n[i];o!==void 0&&(r[i]=o)}return new t(r.years,r.months,r.weeks,r.days,r.hours,r.minutes,r.seconds,r.milliseconds,r.microseconds,
r.nanoseconds)}function to(e){let t;if(et(e)){if(St(e)||ve(e))return Vr(g(e,re));t=mu(e)}else t=e;let{year:r,month:n,day:a,
time:i,offset:o,z:s}=function(b){let T=sn(b);if(!T.z&&!T.offset)throw new RangeError("Temporal.Instant requires a time z\
one offset");return T}(ht(t)),{hour:l=0,minute:c=0,second:u=0,millisecond:d=0,microsecond:f=0,nanosecond:h=0}=i==="start\
-of-day"?{}:i,y=vo(r,n,a,l,c,u,d,f,h-(s?0:ci(o)));return Xa(y.isoDate),Vr(xt(y))}function qh(e,t){if(et(e)){if(vr(e))return Ae(
K(t)),Ja(g(e,ne),g(e,M));let s;return Qt(e,M)?s=g(e,M):(s=e.calendar,s===void 0&&(s="iso8601"),s=Fo(s)),Ja(Qs(s,Sr(s,e,[
"year","month","monthCode","day"],[],[]),Ae(K(t))),s)}let{month:r,day:n,referenceISOYear:a,calendar:i}=Ju(ht(e));if(i===
void 0&&(i="iso8601"),i=er(i),Ae(K(t)),i==="iso8601")return Ja({year:1972,month:r,day:n},i);let o={year:a,month:r,day:n};
return _a(o),o=Qs(i,Xt(i,o,"month-day"),"constrain"),Ja(o,i)}function Vn(e,t){let r;if(et(e)){if(nt(e))return Ae(K(t)),Sn(
g(e,Qe));if(qe(e))return Ae(K(t)),Sn(g(e,Ye).time);if(ve(e)){let c=Dr(g(e,Oe),g(e,re));return Ae(K(t)),Sn(c.time)}let{hour:n,
minute:a,second:i,millisecond:o,microsecond:s,nanosecond:l}=yu(e);r=gl(n,a,i,o,s,l,Ae(K(t)))}else r=Mm(ht(e)),Ae(K(t));return Sn(
r)}function Um(e){return e===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:g(Vn(
e),Qe)}function ro(e,t){if(et(e)){if(Et(e))return Ae(K(t)),Za(g(e,ne),g(e,M));let s=Uo(e);return Za(mo(s,Sr(s,e,["year",
"month","monthCode"],[],[]),Ae(K(t))),s)}let{year:r,month:n,referenceISODay:a,calendar:i}=Gu(ht(e));i===void 0&&(i="iso8\
601"),i=er(i),Ae(K(t));let o={year:r,month:n,day:a};return td(o),o=mo(i,Xt(i,o,"year-month"),"constrain"),Za(o,i)}function Xs(e,t,r,n,a,i,o,s){
if(t==="start-of-day")return Wn(a,e);let l=Re(e,t);if(r==="wall"||o==="ignore")return Nt(a,l,i);if(r==="exact"||o==="use"){
let d=vo(e.year,e.month,e.day,t.hour,t.minute,t.second,t.millisecond,t.microsecond,t.nanosecond-n);Xa(d.isoDate);let f=xt(
d);return an(f),f}Xa(e);let c=xt(l),u=go(a,l);for(let d=0;d<u.length;d++){let f=u[d],h=$.default.toNumber($.default.subtract(
c,f)),y=Yn(h,6e10,"halfExpand");if(h===n||s&&y===n)return f}if(o==="reject"){let d=vu(n),f=yo(l,"iso8601","auto");throw new RangeError(
`Offset ${d} is invalid for ${f} in ${a}`)}return Gm(u,a,l,i)}function no(e,t){let r,n,a,i,o,s,l,c=!1,u="option";if(et(e)){
if(ve(e)){let b=K(t);return co(b),zs(b,"reject"),Ae(b),Ot(g(e,re),g(e,Oe),g(e,M))}o=Uo(e);let f=Sr(o,e,["year","month","\
monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);
({offset:i,timeZone:a}=f),i===void 0&&(u="wall");let h=K(t);s=co(h),l=zs(h,"reject");let y=Ae(h);({isoDate:r,time:n}=jo(
o,f,y))}else{let f,h,y,b,T;({year:y,month:b,day:T,time:n,tzAnnotation:f,offset:i,z:h,calendar:o}=function(E){let _=sn(E);
if(!_.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return _}(ht(e))),
a=Zt(f),h?u="exact":i||(u="wall"),o||(o="iso8601"),o=er(o),c=!0;let S=K(t);s=co(S),l=zs(S,"reject"),Ae(S),r={year:y,month:b,
day:T}}let d=0;return u==="option"&&(d=ci(i)),Ot(Xs(r,n,u,d,a,s,l,c),a,o)}function Bm(e,t,r){_a(t),On(e),he(e,ne,t),he(e,
M,r),he(e,vm,!0)}function Jt(e,t){let r=_t("%Temporal.PlainDate%"),n=Object.create(r.prototype);return Bm(n,e,t),n}function Hm(e,t,r){
wa(t),On(e),he(e,Ye,t),he(e,M,r)}function Nr(e,t){let r=_t("%Temporal.PlainDateTime%"),n=Object.create(r.prototype);return Hm(
n,e,t),n}function Wm(e,t,r){_a(t),On(e),he(e,ne,t),he(e,M,r),he(e,wm,!0)}function Ja(e,t){let r=_t("%Temporal.PlainMonth\
Day%"),n=Object.create(r.prototype);return Wm(n,e,t),n}function qm(e,t){On(e),he(e,Qe,t)}function Sn(e){let t=_t("%Tempo\
ral.PlainTime%"),r=Object.create(t.prototype);return qm(r,e),r}function Vm(e,t,r){td(t),On(e),he(e,ne,t),he(e,M,r),he(e,
bm,!0)}function Za(e,t){let r=_t("%Temporal.PlainYearMonth%"),n=Object.create(r.prototype);return Vm(n,e,t),n}function Ym(e,t){
an(t),On(e),he(e,re,t)}function Vr(e){let t=_t("%Temporal.Instant%"),r=Object.create(t.prototype);return Ym(r,e),r}function zm(e,t,r,n){
an(t),On(e),he(e,re,t),he(e,Oe,r),he(e,M,n)}function Ot(e,t,r="iso8601"){let n=_t("%Temporal.ZonedDateTime%"),a=Object.create(
n.prototype);return zm(a,e,t,r),a}function Vh(e){return gu.filter(t=>e[t]!==void 0)}function va(e,t,r){let n=Vh(r),a=Xn(
e).fieldKeysToIgnore(n),i=Object.create(null),o=Vh(t);for(let s=0;s<gu.length;s++){let l,c=gu[s];o.includes(c)&&!a.includes(
c)&&(l=t[c]),n.includes(c)&&(l=r[c]),l!==void 0&&(i[c]=l)}return i}function Tr(e,t,r,n){let a=Xn(e).dateAdd(t,r,n);return _a(
a),a}function Lo(e,t,r,n){return Xn(e).dateUntil(t,r,n)}function Fo(e){if(et(e)&&Qt(e,M))return g(e,M);let t=ht(e);try{return er(
t)}catch{}let r;try{({calendar:r}=sn(t))}catch{try{({calendar:r}=Mm(t))}catch{try{({calendar:r}=Gu(t))}catch{({calendar:r}=
Ju(t))}}}return r||(r="iso8601"),er(r)}function Uo(e){if(Qt(e,M))return g(e,M);let{calendar:t}=e;return t===void 0?"iso8\
601":Fo(t)}function nn(e,t){return er(e)===er(t)}function Jn(e,t,r){let n=Xn(e);n.resolveFields(t,"date");let a=n.dateToISO(
t,r);return _a(a),a}function mo(e,t,r){let n=Xn(e);n.resolveFields(t,"year-month"),t.day=1;let a=n.dateToISO(t,r);return td(
a),a}function Qs(e,t,r){let n=Xn(e);n.resolveFields(t,"month-day");let a=n.monthDayToISOReferenceDate(t,r);return _a(a),
a}function Zt(e){if(et(e)&&ve(e))return g(e,Oe);let t=ht(e);if(t==="UTC")return"UTC";let{tzName:r,offsetMinutes:n}=function(i){
let{tzAnnotation:o,offset:s,z:l}=function(c){if(Dm.test(c))return{tzAnnotation:c,offset:void 0,z:!1};try{let{tzAnnotation:u,
offset:d,z:f}=sn(c);if(f||u||d)return{tzAnnotation:u,offset:d,z:f}}catch{}Lm(c)}(i);return o?zn(o):l?zn("UTC"):s?zn(s):void 0}(
t);if(n!==void 0)return Zu(n);let a=el(r);if(!a)throw new RangeError(`Unrecognized time zone ${r}`);return a.identifier}
function Km(e,t){if(e===t)return!0;let r=zn(e).offsetMinutes,n=zn(t).offsetMinutes;if(r===void 0&&n===void 0){let a=el(t);
if(!a)return!1;let i=el(e);return!!i&&i.primaryIdentifier===a.primaryIdentifier}return r===n}function En(e,t){let r=zn(e).
offsetMinutes;return r!==void 0?6e10*r:bu(e,t)}function vu(e){let t=e<0?"-":"+",r=Math.abs(e),n=Math.floor(r/36e11),a=Math.
floor(r/6e10)%60,i=Math.floor(r/1e9)%60,o=r%1e9;return`${t}${yl(n,a,i,o,i===0&&o===0?"minute":"auto")}`}function Dr(e,t){
let r=En(e,t),{isoDate:{year:n,month:a,day:i},time:{hour:o,minute:s,second:l,millisecond:c,microsecond:u,nanosecond:d}}=Xm(
t);return vo(n,a,i,o,s,l,c,u,d+r)}function Nt(e,t,r){return Gm(go(e,t),e,t,r)}function Gm(e,t,r,n){let a=e.length;if(a===
1)return e[0];if(a)switch(n){case"compatible":case"earlier":return e[0];case"later":return e[a-1];case"reject":throw new RangeError(
"multiple instants found")}if(n==="reject")throw new RangeError("multiple instants found");let i=xt(r),o=$.default.subtract(
i,Kn);an(o);let s=En(t,o),l=$.default.add(i,Kn);an(l);let c=En(t,l)-s;switch(n){case"earlier":{let u=Fe.fromComponents(0,
0,0,0,0,-c),d=ni(r.time,u);return go(t,Re(dr(r.isoDate.year,r.isoDate.month,r.isoDate.day+d.deltaDays),d))[0]}case"compa\
tible":case"later":{let u=Fe.fromComponents(0,0,0,0,0,c),d=ni(r.time,u),f=go(t,Re(dr(r.isoDate.year,r.isoDate.month,r.isoDate.
day+d.deltaDays),d));return f[f.length-1]}}}function go(e,t){if(e==="UTC")return Xa(t.isoDate),[xt(t)];let r=zn(e).offsetMinutes;
if(r!==void 0){let n=vo(t.isoDate.year,t.isoDate.month,t.isoDate.day,t.time.hour,t.time.minute-r,t.time.second,t.time.millisecond,
t.time.microsecond,t.time.nanosecond);Xa(n.isoDate);let a=xt(n);return an(a),[a]}return Xa(t.isoDate),function(n,a){let i=xt(
a),o=$.default.subtract(i,Kn);$.default.lessThan(o,fo)&&(o=i);let s=$.default.add(i,Kn);$.default.greaterThan(s,ei)&&(s=
i);let l=bu(n,o),c=bu(n,s);return(l===c?[l]:[l,c]).map(d=>{let f=$.default.subtract(i,$.default.BigInt(d)),h=function(y,b){
let{epochMilliseconds:T,time:{millisecond:S,microsecond:E,nanosecond:_}}=Xm(b),{year:O,month:D,day:W,hour:G,minute:Z,second:H}=Qm(
y,T);return vo(O,D,W,G,Z,H,S,E,_)}(n,f);if(ai(a,h)===0)return an(f),f}).filter(d=>d!==void 0)}(e,t)}function Wn(e,t){let r=Re(
t,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),n=go(e,r);if(n.length)return n[0];let a=xt(
r),i=$.default.subtract(a,Kn);return an(i),Qu(e,i)}function Bo(e){let t;return t=e<0||e>9999?(e<0?"-":"+")+ho(Math.abs(e),
6):ho(e,4),t}function kr(e){return ho(e,2)}function Jm(e,t){let r;if(t==="auto"){if(e===0)return"";r=ho(e,9).replace(/0+$/,
"")}else{if(t===0)return"";r=ho(e,9).slice(0,t)}return`.${r}`}function yl(e,t,r,n,a){let i=`${kr(e)}:${kr(t)}`;return a===
"minute"||(i+=`:${kr(r)}`,i+=Jm(n,a)),i}function Yh(e,t,r){let n=t;n===void 0&&(n="UTC");let a=g(e,re),i=yo(Dr(n,a),"iso\
8601",r,"never"),o="Z";return t!==void 0&&(o=Zm(En(n,a))),`${i}${o}`}function Ys(e,t){let r=g(e,Bt),n=g(e,Ht),a=g(e,sr),
i=g(e,Wt),o=g(e,qt),s=g(e,Vt),l=rl(e),c="";r!==0&&(c+=`${Math.abs(r)}Y`),n!==0&&(c+=`${Math.abs(n)}M`),a!==0&&(c+=`${Math.
abs(a)}W`),i!==0&&(c+=`${Math.abs(i)}D`);let u="";o!==0&&(u+=`${Math.abs(o)}H`),s!==0&&(u+=`${Math.abs(s)}M`);let d=Fe.fromComponents(
0,0,g(e,Yt),g(e,zt),g(e,Kt),g(e,lr));d.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(Tn(e))&&t===
"auto"||(u+=`${Math.abs(d.sec)}${Jm(Math.abs(d.subsec),t)}S`);let f=`${l<0?"-":""}P${c}`;return u&&(f=`${f}T${u}`),f}function zh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne);return`${Bo(r)}-${kr(n)}-${kr(a)}${Co(g(e,M),t)}`}function Kh({hour:e,minute:t,
second:r,millisecond:n,microsecond:a,nanosecond:i},o){return yl(e,t,r,1e6*n+1e3*a+i,o)}function yo(e,t,r,n="auto"){let{isoDate:{
year:a,month:i,day:o},time:{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}=e;return`${Bo(a)}-${kr(i)}\
-${kr(o)}T${yl(s,l,c,1e6*u+1e3*d+f,r)}${Co(t,n)}`}function Gh(e,t="auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${kr(n)}-${kr(
a)}`,o=g(e,M);t!=="always"&&t!=="critical"&&o==="iso8601"||(i=`${Bo(r)}-${i}`);let s=Co(o,t);return s&&(i+=s),i}function Jh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${Bo(r)}-${kr(n)}`,o=g(e,M);t!=="always"&&t!=="critical"&&o==="iso8601"||(i+=
`-${kr(a)}`);let s=Co(o,t);return s&&(i+=s),i}function Zh(e,t,r="auto",n="auto",a="auto",i=void 0){let o=g(e,re);if(i){let{
unit:u,increment:d,roundingMode:f}=i;o=Su(o,d,u,f)}let s=g(e,Oe),l=En(s,o),c=yo(Dr(s,o),"iso8601",t,"never");return a!==
"never"&&(c+=Zm(l)),n!=="never"&&(c+=`[${n==="critical"?"!":""}${s}]`),c+=Co(g(e,M),r),c}function Xh(e){return jm.test(e)}
function ci(e){let t=IS.exec(e);if(!t)throw new RangeError(`invalid time zone offset: ${e}; must match \xB1HH:MM[:SS.SSSSSS\
SSS]`);return(t[1]==="-"?-1:1)*(1e9*(60*(60*+t[2]+ +(t[3]||0))+ +(t[4]||0))+ +((t[5]||0)+"000000000").slice(0,9))}var Ki,
$S=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function el(e){if(Ki===void 0){let i=Intl.supportedValuesOf?.(
"timeZone");if(i){Ki=new Map;for(let o=0;o<i.length;o++){let s=i[o];Ki.set(bo(s),s)}}else Ki=null}let t=bo(e),r=Ki?.get(
t);if(r)return{identifier:r,primaryIdentifier:r};try{r=Pm(e).resolvedOptions().timeZone}catch{return}if(t==="antarctica/\
south_pole"&&(r="Antarctica/McMurdo"),SS.has(e))throw new RangeError(`${e} is a legacy time zone identifier from ICU. Us\
e ${r} instead`);let n=[...t].map((i,o)=>o===0||$S[t[o-1]]?i.toUpperCase():i).join("").split("/");if(n.length===1)return t===
"gb-eire"?{identifier:"GB-Eire",primaryIdentifier:r}:{identifier:t.length<=3||/[-0-9]/.test(t)?t.toUpperCase():n[0],primaryIdentifier:r};
if(n[0]==="Etc")return{identifier:`Etc/${["Zulu","Greenwich","Universal"].includes(n[1])?n[1]:n[1].toUpperCase()}`,primaryIdentifier:r};
if(n[0]==="Us")return{identifier:`US/${n[1]}`,primaryIdentifier:r};let a=new Map([["Act","ACT"],["Lhi","LHI"],["Nsw","NS\
W"],["Dar_Es_Salaam","Dar_es_Salaam"],["Port_Of_Spain","Port_of_Spain"],["Port-Au-Prince","Port-au-Prince"],["Isle_Of_Ma\
n","Isle_of_Man"],["Comodrivadavia","ComodRivadavia"],["Knox_In","Knox_IN"],["Dumontdurville","DumontDUrville"],["Mcmurd\
o","McMurdo"],["Denoronha","DeNoronha"],["Easterisland","EasterIsland"],["Bajanorte","BajaNorte"],["Bajasur","BajaSur"]]);
return n[1]=a.get(n[1])??n[1],n.length>2&&(n[2]=a.get(n[2])??n[2]),{identifier:n.join("/"),primaryIdentifier:r}}function ga(e,t){
let{year:r,month:n,day:a,hour:i,minute:o,second:s}=Qm(e,t),l=t%1e3;return l<0&&(l+=1e3),1e6*(Xu({isoDate:{year:r,month:n,
day:a},time:{hour:i,minute:o,second:s,millisecond:l}})-t)}function bu(e,t){return ga(e,jr(t,"floor"))}function Zu(e){let t=e<
0?"-":"+",r=Math.abs(e);return`${t}${yl(Math.floor(r/60),r%60,0,0,"minute")}`}function Zm(e){return Zu(Yn(e,vS,"halfExpa\
nd")/6e10)}function Xu({isoDate:{year:e,month:t,day:r},time:{hour:n,minute:a,second:i,millisecond:o}}){let s=e%400,l=(e-
s)/400,c=new Date;return c.setUTCHours(n,a,i,o),c.setUTCFullYear(s,t-1,r),c.getTime()+TS*l}function xt(e){let t=Xu(e),r=1e3*
e.time.microsecond+e.time.nanosecond;return $.default.add(Yr(t),$.default.BigInt(r))}function Xm(e){let t=jr(e,"trunc"),
r=$.default.toNumber($.default.remainder(e,Io));r<0&&(r+=1e6,t-=1);let n=Math.floor(r/1e3)%1e3,a=r%1e3,i=new Date(t);return{
epochMilliseconds:t,isoDate:{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate()},time:{hour:i.getUTCHours(),
minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds(),microsecond:n,nanosecond:a}}}function Qu(e,t){
if(e==="UTC")return null;let r=jr(t,"floor");if(r<oo)return Qu(e,Yr(oo));let n=Date.now(),a=Math.max(r,n)+366*Gn*3,i=r,o=ga(
e,i),s=i,l=o;for(;o===l&&i<a;){if(s=i+2*Gn*7,s>Nm)return null;l=ga(e,s),o===l&&(i=s)}return o===l?null:Yr(cg(c=>ga(e,c),
i,s,o,l))}function wu(e,t){if(e==="UTC")return null;let r=jr(t,"ceil"),n=Date.now(),a=n+366*Gn*3;if(r>a){let c=wu(e,Yr(a));
if(c===null||$.default.lessThan(c,Yr(n)))return c}if(e==="Africa/Casablanca"||e==="Africa/El_Aaiun"){let c=Date.UTC(2088,
0,1);if(c<r)return wu(e,Yr(c))}let i=r-1;if(i<oo)return null;let o=ga(e,i),s=i,l=o;for(;o===l&&i>oo;){if(s=i-2*Gn*7,s<oo)
return null;l=ga(e,s),o===l&&(i=s)}return o===l?null:Yr(cg(c=>ga(e,c),s,i,l,o))}function Qm(e,t){return function(r){let n=r.
split(/[^\w]+/);if(n.length!==7)throw new RangeError(`expected 7 parts in "${r}`);let a=+n[0],i=+n[1],o=+n[2],s=n[3];if(s[0]===
"b"||s[0]==="B")o=1-o;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${r}`);let l=n[4]==="24"?
0:+n[4],c=+n[5],u=+n[6];if(!(Number.isFinite(o)&&Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(l)&&Number.isFinite(
c)&&Number.isFinite(u)))throw new RangeError(`Invalid number in "${r}`);return{year:o,month:a,day:i,hour:l,minute:c,second:u}}(
Pm(e).format(t))}function tl(e){return e!==void 0&&!(e%4!=0||e%100==0&&e%400!=0)}function ya(e,t){return{standard:[31,28,
31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[tl(e)?"leapyear":"standard"][t-1]}function rl(e){
let t=[g(e,Bt),g(e,Ht),g(e,sr),g(e,Wt),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr)];for(let r=0;r<t.length;r++){let n=t[r];
if(n!==0)return n<0?-1:1}return 0}function vl(e){let t=["years","months","weeks","days"];for(let r=0;r<t.length;r++){let n=e[t[r]];
if(n!==0)return n<0?-1:1}return 0}function eg(e){let t=vl(e.date);return t!==0?t:e.time.sign()}function ma(e,t){let r=e,
n=t;if(!Number.isFinite(r)||!Number.isFinite(n))throw new RangeError("infinity is out of range");return n-=1,r+=Math.floor(
n/12),n%=12,n<0&&(n+=12),n+=1,{year:r,month:n}}function dr(e,t,r){let n=e,a=t,i=r;if(!Number.isFinite(i))throw new RangeError(
"infinity is out of range");({year:n,month:a}=ma(n,a));let o=146097;if(Math.abs(i)>o){let c=Math.trunc(i/o);n+=400*c,i-=
c*o}let s=0,l=a>2?n:n-1;for(;s=tl(l)?366:365,i<-s;)n-=1,l-=1,i+=s;for(l+=1;s=tl(l)?366:365,i>s;)n+=1,l+=1,i-=s;for(;i<1;)
({year:n,month:a}=ma(n,a-1)),i+=ya(n,a);for(;i>ya(n,a);)i-=ya(n,a),{year:n,month:a}=ma(n,a+1);return{year:n,month:a,day:i}}
function vo(e,t,r,n,a,i,o,s,l){let c=qn(n,a,i,o,s,l);return Re(dr(e,t,r+c.deltaDays),c)}function qn(e,t,r,n,a,i){let o,s=e,
l=t,c=r,u=n,d=a,f=i;({div:o,mod:f}=Ga(f,3)),d+=o,f<0&&(d-=1,f+=1e3),{div:o,mod:d}=Ga(d,3),u+=o,d<0&&(u-=1,d+=1e3),c+=Math.
trunc(u/1e3),u%=1e3,u<0&&(c-=1,u+=1e3),l+=Math.trunc(c/60),c%=60,c<0&&(l-=1,c+=60),s+=Math.trunc(l/60),l%=60,l<0&&(s-=1,
l+=60);let h=Math.trunc(s/24);return s%=24,s<0&&(h-=1,s+=24),h+=0,s+=0,l+=0,c+=0,u+=0,d+=0,f+=0,{deltaDays:h,hour:s,minute:l,
second:c,millisecond:u,microsecond:d,nanosecond:f}}function Qh(e,t){let r=Ct(e,0);if(vl(r)===0)return e.days;let n=g(t,ne),
a=Tr(g(t,M),n,r,"constrain"),i=Ta(n.year,n.month-1,n.day),o=Ta(a.year,a.month-1,a.day)-i;return e.days+o}function pr(e){
return new(_t("%Temporal.Duration%"))(-g(e,Bt),-g(e,Ht),-g(e,sr),-g(e,Wt),-g(e,qt),-g(e,Vt),-g(e,Yt),-g(e,zt),-g(e,Kt),-g(
e,lr))}function Gt(e,t,r){return Math.min(r,Math.max(t,e))}function tg(e,t,r){let n=Gt(t,1,12);return{year:e,month:n,day:Gt(
r,1,ya(e,n))}}function wt(e,t,r){if(e<t||e>r)throw new RangeError(`value out of range: ${t} <= ${e} <= ${r}`)}function ba(e,t,r){
wt(t,1,12),wt(r,1,ya(e,t))}function _a(e){wa(Re(e,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}
function bl(e,t,r,n,a,i){wt(e,0,23),wt(t,0,59),wt(r,0,59),wt(n,0,999),wt(a,0,999),wt(i,0,999)}function ed(e,t,r,n,a,i,o,s,l){
ba(e,t,r),bl(n,a,i,o,s,l)}function wa(e){let t=xt(e);($.default.lessThan(t,bS)||$.default.greaterThan(t,wS))&&an(t)}function Tu(e){
xt(e)}function an(e){if($.default.lessThan(e,fo)||$.default.greaterThan(e,ei))throw new RangeError("date/time value is o\
utside of supported range")}function td({year:e,month:t}){wt(e,Fh,Uh),e===Fh?wt(t,4,12):e===Uh&&wt(t,1,9)}function wl(e,t,r,n,a,i,o,s,l,c){
let u=0,d=[e,t,r,n,a,i,o,s,l,c];for(let S=0;S<d.length;S++){let E=d[S];if(E===1/0||E===-1/0)throw new RangeError("infini\
te values not allowed as duration fields");if(E!==0){let _=E<0?-1:1;if(u!==0&&_!==u)throw new RangeError("mixed-sign val\
ues not allowed as duration fields");u=_}}if(Math.abs(e)>=2**32||Math.abs(t)>=2**32||Math.abs(r)>=2**32)throw new RangeError(
"years, months, and weeks must be < 2\xB3\xB2");let f=Ga(s,3),h=Ga(l,6),y=Ga(c,9),b=Ga(1e6*f.mod+1e3*h.mod+y.mod,9).div,
T=86400*n+3600*a+60*i+o+f.div+h.div+y.div+b;if(!Number.isSafeInteger(T))throw new RangeError("total of duration time uni\
ts cannot exceed 9007199254740991.999999999 s")}function Ka(e){return{date:{years:g(e,Bt),months:g(e,Ht),weeks:g(e,sr),days:g(
e,Wt)},time:Fe.fromComponents(g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr))}}function tn(e){let t=Fe.fromComponents(g(
e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr)).add24HourDays(g(e,Wt));return{date:{years:g(e,Bt),months:g(e,Ht),weeks:g(
e,sr),days:0},time:t}}function rg(e){let t=tn(e),r=Math.trunc(t.time.sec/86400);return wl(t.date.years,t.date.months,t.date.
weeks,r,0,0,0,0,0,0),{...t.date,days:r}}function Pr(e,t){let r=e.time.sign(),n=e.time.abs().subsec,a=0,i=0,o=e.time.abs().
sec,s=0,l=0,c=0;switch(t){case"year":case"month":case"week":case"day":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=
1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(s/60),s%=60,c=Math.trunc(l/24),l%=24;break;case"ho\
ur":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(
s/60),s%=60;break;case"minute":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.
trunc(o/60),o%=60;break;case"second":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3;break;case"\
millisecond":a=Math.trunc(n/1e3),n%=1e3,i=nu(o,3,Math.trunc(a/1e3)),a%=1e3,o=0;break;case"microsecond":a=nu(o,6,Math.trunc(
n/1e3)),n%=1e3,o=0;break;case"nanosecond":n=nu(o,9,n),o=0}return new(_t("%Temporal.Duration%"))(e.date.years,e.date.months,
e.date.weeks,e.date.days+r*c,r*l,r*s,r*o,r*i,r*a,r*n)}function _n(e,t){return vl(e),t.sign(),{date:e,time:t}}function Ta(e,t,r){
return Xu({isoDate:{year:e,month:t+1,day:r},time:{hour:0,minute:0,second:0,millisecond:0}})/Gn}function Xa({year:e,month:t,
day:r}){if(Math.abs(Ta(e,t-1,r))>1e8)throw new RangeError("date/time value is outside the supported range")}function rd(e,t){
let r=t.hour-e.hour,n=t.minute-e.minute,a=t.second-e.second,i=t.millisecond-e.millisecond,o=t.microsecond-e.microsecond,
s=t.nanosecond-e.nanosecond;return Fe.fromComponents(r,n,a,i,o,s)}function nd(e,t,r,n,a){let i=Fe.fromEpochNsDiff(t,e);return i=
nl(i,r,n,a),_n({years:0,months:0,weeks:0,days:0},i)}function ng(e,t,r,n){Tu(e),Tu(t);let a=rd(e.time,t.time),i=a.sign(),
o=on(e.isoDate,t.isoDate),s=t.isoDate;o===i&&(s=dr(s.year,s.month,s.day+i),a=a.add24HourDays(-i));let l=xn("day",n),c=Lo(
r,e.isoDate,s,l);return n!==l&&(a=a.add24HourDays(c.days),c.days=0),_n(c,a)}function ag(e,t,r,n,a){let i=$.default.subtract(
t,e);if($.default.equal(i,br))return{date:{years:0,months:0,weeks:0,days:0},time:Fe.ZERO};let o=$.default.lessThan(i,br)?
-1:1,s=Dr(r,e),l=Dr(r,t),c,u=0,d=o===1?2:1,f=rd(s.time,l.time);for(f.sign()===-o&&u++;u<=d;u++){c=Re(dr(l.isoDate.year,l.
isoDate.month,l.isoDate.day-u*o),s.time);let y=Nt(r,c,"compatible");if(f=Fe.fromEpochNsDiff(t,y),f.sign()!==-o)break}let h=xn(
"day",a);return _n(Lo(n,s.isoDate,c.isoDate,h),f)}function ig(e,t,r,n,a,i,o,s,l){let c,u,d,f,h=t;switch(s){case"year":{let te=Yn(
h.date.years,o,"trunc");c=te,u=te+o*e,d={years:c,months:0,weeks:0,days:0},f={...d,years:u};break}case"month":{let te=Yn(
h.date.months,o,"trunc");c=te,u=te+o*e,d=Ct(h.date,0,0,c),f=Ct(h.date,0,0,u);break}case"week":{let te=Ct(h.date,0,0),_e=Tr(
i,n.isoDate,te,"constrain"),pe=Lo(i,_e,dr(_e.year,_e.month,_e.day+h.date.days),"week"),ie=Yn(h.date.weeks+pe.weeks,o,"tr\
unc");c=ie,u=ie+o*e,d=Ct(h.date,0,c),f=Ct(h.date,0,u);break}case"day":{let te=Yn(h.date.days,o,"trunc");c=te,u=te+o*e,d=
Ct(h.date,c),f=Ct(h.date,u);break}}let y=Tr(i,n.isoDate,d,"constrain"),b=Tr(i,n.isoDate,f,"constrain"),T,S,E=Re(y,n.time),
_=Re(b,n.time);a?(T=Nt(a,E,"compatible"),S=Nt(a,_,"compatible")):(T=xt(E),S=xt(_));let O=Fe.fromEpochNsDiff(r,T),D=Fe.fromEpochNsDiff(
S,T),W=dl(l,e<0?"negative":"positive"),G=O.add(O).abs().subtract(D.abs()).sign(),Z=Math.abs(c)/o%2==0,H=O.isZero()?Math.
abs(c):O.cmp(D)?pl(Math.abs(c),Math.abs(u),G,Z,W):Math.abs(u),we=new Fe($.default.add($.default.multiply(D.totalNs,$.default.
BigInt(c)),$.default.multiply(O.totalNs,$.default.BigInt(o*e)))).fdiv(D.totalNs),Y=H===Math.abs(u);return h={date:Y?f:d,
time:Fe.ZERO},{nudgeResult:{duration:h,nudgedEpochNs:Y?S:T,didExpandCalendarUnit:Y},total:we}}function Tl(e,t,r,n,a,i,o,s,l){
let c=e,u=Qr(s)||n&&s==="day",d=eg(c)<0?-1:1,f;return u?{nudgeResult:f}=ig(d,c,t,r,n,a,o,s,l):f=n?function(h,y,b,T,S,E,_,O){
let D=y,W=Tr(S,b.isoDate,D.date,"constrain"),G=Re(W,b.time),Z=Re(dr(W.year,W.month,W.day+h),b.time),H=Nt(T,G,"compatible"),
we=Nt(T,Z,"compatible"),Y=Fe.fromEpochNsDiff(we,H);if(Y.sign()!==h)throw new RangeError("time zone returned inconsistent\
 Instants");let te=$.default.BigInt(ri[_]*E),_e=D.time.round(te,O),pe=_e.subtract(Y),ie=pe.sign()!==-h,it,st;return ie?(it=
h,_e=pe.round(te,O),st=_e.addToEpochNs(we)):(it=0,st=_e.addToEpochNs(H)),{duration:_n(Ct(D.date,D.date.days+it),_e),nudgedEpochNs:st,
didExpandCalendarUnit:ie}}(d,c,r,n,a,o,s,l):function(h,y,b,T,S,E){let _=h,O=_.time.add24HourDays(_.date.days),D=O.round(
$.default.BigInt(T*ri[S]),E),W=D.subtract(O),{quotient:G}=O.divmod(Js),{quotient:Z}=D.divmod(Js),H=Math.sign(Z-G)===O.sign(),
we=W.addToEpochNs(y),Y=0,te=D;return kn(b)==="date"&&(Y=Z,te=D.add(Fe.fromComponents(24*-Z,0,0,0,0,0))),{duration:{date:Ct(
_.date,Y),time:te},nudgedEpochNs:we,didExpandCalendarUnit:H}}(c,t,i,o,s,l),c=f.duration,f.didExpandCalendarUnit&&s!=="we\
ek"&&(c=function(h,y,b,T,S,E,_,O){let D=y;if(O===_)return D;let W=so.indexOf(_);for(let G=so.indexOf(O)-1;G>=W;G--){let Z=so[G];
if(Z==="week"&&_!=="week")continue;let H;switch(Z){case"year":H={years:D.date.years+h,months:0,weeks:0,days:0};break;case"\
month":{let te=D.date.months+h;H=Ct(D.date,0,0,te);break}case"week":{let te=D.date.weeks+h;H=Ct(D.date,0,te);break}}let we=Re(
Tr(E,T.isoDate,H,"constrain"),T.time),Y;if(Y=S?Nt(S,we,"compatible"):xt(we),Ks(b,Y)===-h)break;D={date:H,time:Fe.ZERO}}return D}(
d,c,f.nudgedEpochNs,r,n,a,i,xn(s,"day"))),c}function em(e,t,r,n,a,i){return Qr(i)||n&&i==="day"?ig(eg(e)<0?-1:1,e,t,r,n,
a,1,i,"trunc").total:uo(e.time.add24HourDays(e.date.days),i)}function og(e,t,r,n,a,i,o){if(ai(e,t)==0)return{date:{years:0,
months:0,weeks:0,days:0},time:Fe.ZERO};wa(e),wa(t);let s=ng(e,t,r,n);return i==="nanosecond"&&a===1?s:Tl(s,xt(t),e,null,
r,n,a,i,o)}function sg(e,t,r,n,a,i,o,s){if(kn(a)==="time")return nd(e,t,i,o,s);let l=ag(e,t,r,n,a);return o==="nanosecon\
d"&&i===1?l:Tl(l,t,Dr(r,e),r,n,a,i,o,s)}function ui(e,t,r,n,a,i){let o=ti.reduce((h,y)=>{let b=y[0],T=y[1],S=y[2];return r!==
"datetime"&&S!==r||n.includes(T)||h.push(T,b),h},[]),s=ur(t,"largestUnit",r,"auto");if(n.includes(s))throw new RangeError(
`largestUnit must be one of ${o.join(", ")}, not ${s}`);let l=si(t),c=zr(t,"trunc");e==="since"&&(c=function(h){switch(h){case"\
ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return h}}(
c));let u=ur(t,"smallestUnit",r,a);if(n.includes(u))throw new RangeError(`smallestUnit must be one of ${o.join(", ")}, n\
ot ${u}`);let d=xn(i,u);if(s==="auto"&&(s=d),xn(s,u)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than s\
mallestUnit ${u}`);let f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];return f!==void 0&&
li(l,f,!1),{largestUnit:s,roundingIncrement:l,roundingMode:c,smallestUnit:u}}function tm(e,t,r,n){let a=to(r),i=ui(e,K(n),
"time",[],"nanosecond","second"),o=Pr(nd(g(t,re),g(a,re),i.roundingIncrement,i.smallestUnit,i.roundingMode),i.largestUnit);
return e==="since"&&(o=pr(o)),o}function rm(e,t,r,n){let a=Qi(r),i=g(t,M),o=g(a,M);if(!nn(i,o))throw new RangeError(`can\
not compute difference between dates of ${i} and ${o} calendars`);let s=ui(e,K(n),"date",[],"day","day"),l=_t("%Temporal\
.Duration%"),c=g(t,ne),u=g(a,ne);if(on(c,u)===0)return new l;let d={date:Lo(i,c,u,s.largestUnit),time:Fe.ZERO};if(s.smallestUnit!==
"day"||s.roundingIncrement!==1){let h=Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});
d=Tl(d,xt(Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),h,null,i,s.largestUnit,
s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=Pr(d,"day");return e==="since"&&(f=pr(f)),f}function nm(e,t,r,n){
let a=eo(r),i=g(t,M),o=g(a,M);if(!nn(i,o))throw new RangeError(`cannot compute difference between dates of ${i} and ${o}\
 calendars`);let s=ui(e,K(n),"datetime",[],"nanosecond","day"),l=_t("%Temporal.Duration%"),c=g(t,Ye),u=g(a,Ye);if(ai(c,u)===
0)return new l;let d=Pr(og(c,u,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return e===
"since"&&(d=pr(d)),d}function am(e,t,r,n){let a=Vn(r),i=ui(e,K(n),"time",[],"nanosecond","hour"),o=rd(g(t,Qe),g(a,Qe));o=
nl(o,i.roundingIncrement,i.smallestUnit,i.roundingMode);let s=Pr(_n({years:0,months:0,weeks:0,days:0},o),i.largestUnit);
return e==="since"&&(s=pr(s)),s}function im(e,t,r,n){let a=ro(r),i=g(t,M),o=g(a,M);if(!nn(i,o))throw new RangeError(`can\
not compute difference between months of ${i} and ${o} calendars`);let s=ui(e,K(n),"date",["week","day"],"month","year"),
l=_t("%Temporal.Duration%");if(on(g(t,ne),g(a,ne))==0)return new l;let c=Xt(i,g(t,ne),"year-month");c.day=1;let u=Jn(i,c,
"constrain"),d=Xt(i,g(a,ne),"year-month");d.day=1;let f=Jn(i,d,"constrain"),h={date:Ct(Lo(i,u,f,s.largestUnit),0,0),time:Fe.
ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){let b=Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,
microsecond:0,nanosecond:0});h=Tl(h,xt(Re(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),
b,null,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let y=Pr(h,"day");return e==="since"&&(y=pr(y)),
y}function om(e,t,r,n){let a=no(r),i=g(t,M),o=g(a,M);if(!nn(i,o))throw new RangeError(`cannot compute difference between\
 dates of ${i} and ${o} calendars`);let s=ui(e,K(n),"datetime",[],"nanosecond","hour"),l=g(t,re),c=g(a,re),u=_t("%Tempor\
al.Duration%"),d;if(kn(s.largestUnit)!=="date")d=Pr(nd(l,c,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{
let f=g(t,Oe);if(!Km(f,g(a,Oe)))throw new RangeError("When calculating difference between time zones, largestUnit must b\
e 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if($.default.
equal(l,c))return new u;d=Pr(sg(l,c,f,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return e===
"since"&&(d=pr(d)),d}function ni({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o){let s=r,l=i;return s+=
o.sec,l+=o.subsec,qn(e,t,s,n,a,l)}function ku(e,t){let r=t.addToEpochNs(e);return an(r),r}function ao(e,t,r,n,a="constra\
in"){if(vl(n.date)===0)return ku(e,n.time);let i=Dr(t,e);return ku(Nt(t,Re(Tr(r,i.isoDate,n.date,a),i.time),"compatible"),
n.time)}function sm(e,t,r){let n=Mr(r);e==="subtract"&&(n=pr(n));let a=xn(Tn(t),Tn(n));if(Qr(a))throw new RangeError("Fo\
r years, months, or weeks arithmetic, use date arithmetic relative to a starting point");let i=tn(t),o=tn(n);return Pr(_n(
{years:0,months:0,weeks:0,days:0},i.time.add(o.time)),a)}function lm(e,t,r){let n=Mr(r);e==="subtract"&&(n=pr(n));let a=Tn(
n);if(kn(a)==="date")throw new RangeError(`Duration field ${a} not supported by Temporal.Instant. Try Temporal.ZonedDate\
Time instead.`);let i=tn(n);return Vr(ku(g(t,re),i.time))}function cm(e,t,r,n){let a=g(t,M),i=Mr(r);e==="subtract"&&(i=pr(
i));let o=rg(i),s=Ae(K(n));return Jt(Tr(a,g(t,ne),o,s),a)}function um(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=pr(a));let i=Ae(
K(n)),o=g(t,M),s=tn(a),l=g(t,Ye),c=ni(l.time,s.time),u=Ct(s.date,c.deltaDays);return wl(u.years,u.months,u.weeks,u.days,
0,0,0,0,0,0),Nr(Re(Tr(o,l.isoDate,u,i),c),o)}function dm(e,t,r){let n=Mr(r);e==="subtract"&&(n=pr(n));let a=tn(n),{hour:i,
minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=ni(g(t,Qe),a.time);return Sn(gl(i,o,s,l,c,u,"reject"))}function pm(e,t,r,n){
let a=Mr(r);e==="subtract"&&(a=pr(a));let i=Ae(K(n)),o=rl(a),s=g(t,M),l=Xt(s,g(t,ne),"year-month");l.day=1;let c=Jn(s,l,
"constrain");if(o<0){let d=Tr(s,c,{months:1},"constrain");c=dr(d.year,d.month,d.day-1)}let u=rg(a);return _a(c),Za(mo(s,
Xt(s,Tr(s,c,u,i),"year-month"),i),s)}function fm(e,t,r,n){let a=Mr(r);e==="subtract"&&(a=pr(a));let i=Ae(K(n)),o=g(t,Oe),
s=g(t,M),l=Ka(a);return Ot(ao(g(t,re),o,s,l,i),o,s)}function Yn(e,t,r){let n=Math.trunc(e/t),a=e%t,i=e<0?"negative":"pos\
itive",o=Math.abs(n),s=o+1,l=cr(Math.abs(2*a)-t),c=o%2==0,u=dl(r,i),d=a===0?o:pl(o,s,l,c,u);return t*(i==="positive"?d:-d)}
function Su(e,t,r,n){let a=ri[r]*t;return function(i,o,s){let l=wn(i),c=wn(o),u=$.default.divide(l,c),d=$.default.remainder(
l,c),f=dl(s,"positive"),h,y;$.default.lessThan(l,br)?(h=$.default.subtract(u,po),y=u):(h=u,y=$.default.add(u,po));let b=Ks(
ha($.default.multiply(d,Ku)),c)*($.default.lessThan(l,br)?-1:1)+0,T=$.default.equal(d,br)?u:pl(h,y,b,ym(h),f);return $.default.
multiply(T,c)}(e,$.default.BigInt(a),n)}function Eu(e,t,r,n){Tu(e);let{year:a,month:i,day:o}=e.isoDate,s=xu(e.time,t,r,n);
return Re(dr(a,i,o+s.deltaDays),s)}function xu({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o,s,l){
let c;switch(s){case"day":case"hour":c=1e3*(1e3*(1e3*(60*(60*e+t)+r)+n)+a)+i;break;case"minute":c=1e3*(1e3*(1e3*(60*t+r)+
n)+a)+i;break;case"second":c=1e3*(1e3*(1e3*r+n)+a)+i;break;case"millisecond":c=1e3*(1e3*n+a)+i;break;case"microsecond":c=
1e3*a+i;break;case"nanosecond":c=i}let u=ri[s],d=Yn(c,u*o,l)/u;switch(s){case"day":return{deltaDays:d,hour:0,minute:0,second:0,
millisecond:0,microsecond:0,nanosecond:0};case"hour":return qn(d,0,0,0,0,0);case"minute":return qn(e,d,0,0,0,0);case"sec\
ond":return qn(e,t,d,0,0,0);case"millisecond":return qn(e,t,r,d,0,0);case"microsecond":return qn(e,t,r,n,d,0);case"nanos\
econd":return qn(e,t,r,n,a,d);default:throw new Error(`Invalid unit ${s}`)}}function nl(e,t,r,n){let a=ri[r];return e.round(
$.default.BigInt(a*t),n)}function uo(e,t){let r=ri[t];return e.fdiv($.default.BigInt(r))}function on(e,t){return e.year!==
t.year?cr(e.year-t.year):e.month!==t.month?cr(e.month-t.month):e.day!==t.day?cr(e.day-t.day):0}function _u(e,t){return e.
hour!==t.hour?cr(e.hour-t.hour):e.minute!==t.minute?cr(e.minute-t.minute):e.second!==t.second?cr(e.second-t.second):e.millisecond!==
t.millisecond?cr(e.millisecond-t.millisecond):e.microsecond!==t.microsecond?cr(e.microsecond-t.microsecond):e.nanosecond!==
t.nanosecond?cr(e.nanosecond-t.nanosecond):0}function ai(e,t){let r=on(e.isoDate,t.isoDate);return r!==0?r:_u(e.time,t.time)}
function lg(e){let t=al(e);return globalThis.BigInt!==void 0?globalThis.BigInt(t.toString(10)):t}function jr(e,t){let r=wn(
e),{quotient:n,remainder:a}=Zi(r,Io),i=$.default.toNumber(n);return t==="floor"&&$.default.toNumber(a)<0&&(i-=1),t==="ce\
il"&&$.default.toNumber(a)>0&&(i+=1),i}function Yr(e){if(!Number.isInteger(e))throw new RangeError("epoch milliseconds m\
ust be an integer");return $.default.multiply($.default.BigInt(e),Io)}function al(e){let t=e;if(typeof e=="object"){let r=e[Symbol.
toPrimitive];r&&typeof r=="function"&&(t=r.call(e,"number"))}if(typeof t=="number")throw new TypeError("cannot convert n\
umber to bigint");return typeof t=="bigint"?$.default.BigInt(t.toString(10)):$.default.BigInt(t)}var Au=(()=>{let e=$.default.
BigInt(Date.now()%1e6);return()=>{let t=Date.now(),r=$.default.BigInt(t),n=$.default.add(Yr(t),e);return e=$.default.remainder(
r,Io),$.default.greaterThan(n,ei)?ei:$.default.lessThan(n,fo)?fo:n}})();function Gi(){return new Intl.DateTimeFormat().resolvedOptions().
timeZone}function cr(e){return e<0?-1:e>0?1:e}function K(e){if(e===void 0)return Object.create(null);if(et(e)&&e!==null)
return e;throw new TypeError("Options parameter must be an object, not "+(e===null?"null":typeof e))}function ka(e,t){let r=Object.
create(null);return r[e]=t,r}function An(e,t,r,n){let a=e[t];if(a!==void 0){if(a=hl(a),!r.includes(a))throw new RangeError(
`${t} must be one of ${r.join(", ")}, not ${a}`);return a}if(n===Rn)throw new RangeError(`${t} option is required`);return n}
function er(e){let t=bo(e);if(!kS.includes(bo(t)))throw new RangeError(`invalid calendar identifier ${t}`);switch(t){case"\
ethiopic-amete-alem":return"ethioaa";case"islamicc":return"islamic-civil"}return t}function bo(e){let t="";for(let r=0;r<
e.length;r++){let n=e.charCodeAt(r);t+=n>=65&&n<=90?String.fromCharCode(n+32):String.fromCharCode(n)}return t}function Qn(e){
throw new TypeError(`Do not use built-in arithmetic operators with Temporal objects. When comparing, use ${e==="PlainMon\
thDay"?"Temporal.PlainDate.compare(obj1.toPlainDate(year), obj2.toPlainDate(year))":`Temporal.${e}.compare(obj1, obj2)`}\
, not obj1 > obj2. When coercing to strings, use \`\${obj}\` or String(obj), not '' + obj. When coercing to numbers, use pr\
operties or methods of the object, not \`+obj\`. When concatenating with strings, use \`\${str}\${obj}\` or str.concat(obj), n\
ot str + obj. In React, coerce to a string before rendering a Temporal object.`)}var RS=new RegExp(`^${Om.source}$`),IS=new RegExp(
`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/.source}$`);function cg(e,t,r,n=e(
t),a=e(r)){let i=t,o=r,s=n,l=a;for(;o-i>1;){let c=Math.trunc((i+o)/2),u=e(c);u===s?(i=c,s=u):u===l&&(o=c,l=u)}return o}function ug(e){
return[...e]}function dg(e,t){if(e!=="gregory"&&e!=="iso8601")return;let r=Ho[e],n=t.year,{dayOfWeek:a,dayOfYear:i,daysInYear:o}=r.
isoToDate(t,{dayOfWeek:!0,dayOfYear:!0,daysInYear:!0}),s=r.getFirstDayOfWeek(),l=r.getMinimalDaysInFirstWeek(),c=(a+7-s)%
7,u=(a-i+7001-s)%7,d=Math.floor((i-1+u)/7);if(7-u>=l&&++d,d==0)d=function(f,h,y,b){let T=(b-f-y+1)%7;T<0&&(T+=7);let S=Math.
floor((y+T-1)/7);return 7-T>=h&&++S,S}(s,l,i+r.isoToDate(r.dateAdd(t,{years:-1},"constrain"),{daysInYear:!0}).daysInYear,
a),n--;else if(i>=o-5){let f=(c+o-i)%7;f<0&&(f+=7),6-f>=l&&i+7-c>o&&(d=1,n++)}return{week:d,year:n}}function hm(e,t,r,n,a){
if(t!==a.year){if(e*(t-a.year)>0)return!0}else if(r!==a.month){if(e*(r-a.month)>0)return!0}else if(n!==a.day&&e*(n-a.day)>
0)return!0;return!1}var Ho={};function Sa(e){if(!e.startsWith("M"))throw new RangeError(`Invalid month code: ${e}.  Mont\
h codes must start with M.`);let t=+e.slice(1);if(Number.isNaN(t))throw new RangeError(`Invalid month code: ${e}`);return t}
function rn(e,t=!1){return`M${`${e}`.padStart(2,"0")}${t?"L":""}`}function ad(e,t=void 0,r=12){let{month:n,monthCode:a}=e;
if(a===void 0){if(n===void 0)throw new TypeError("Either month or monthCode are required");t==="reject"&&wt(n,1,r),t==="\
constrain"&&(n=Gt(n,1,r)),a=rn(n)}else{let i=Sa(a);if(a!==rn(i))throw new RangeError(`Invalid month code: ${a}`);if(n!==
void 0&&n!==i)throw new RangeError(`monthCode ${a} and month ${n} must match if both are present`);if(n=i,n<1||n>r)throw new RangeError(
`Invalid monthCode: ${a}`)}return{...e,month:n,monthCode:a}}Ho.iso8601={resolveFields(e,t){if((t==="date"||t==="year-mon\
th")&&e.year===void 0)throw new TypeError("year is required");if((t==="date"||t==="month-day")&&e.day===void 0)throw new TypeError(
"day is required");Object.assign(e,ad(e))},dateToISO:(e,t)=>lo(e.year,e.month,e.day,t),monthDayToISOReferenceDate(e,t){let{
month:r,day:n}=lo(e.year??1972,e.month,e.day,t);return{month:r,day:n,year:1972}},extraFields:()=>[],fieldKeysToIgnore(e){
let t=new Set;for(let r=0;r<e.length;r++){let n=e[r];t.add(n),n==="month"?t.add("monthCode"):n==="monthCode"&&t.add("mon\
th")}return ug(t)},dateAdd(e,{years:t=0,months:r=0,weeks:n=0,days:a=0},i){let{year:o,month:s,day:l}=e;return o+=t,s+=r,{
year:o,month:s}=ma(o,s),{year:o,month:s,day:l}=lo(o,s,l,i),l+=a+7*n,dr(o,s,l)},dateUntil(e,t,r){let n=-on(e,t);if(n===0)
return{years:0,months:0,weeks:0,days:0};let a,i=0,o=0;if(r==="year"||r==="month"){let u=t.year-e.year;for(u!==0&&(u-=n);!hm(
n,e.year+u,e.month,e.day,t);)i=u,u+=n;let d=n;for(a=ma(e.year+i,e.month+d);!hm(n,a.year,a.month,e.day,t);)o=d,d+=n,a=ma(
a.year,a.month+n);r==="month"&&(o+=12*i,i=0)}a=ma(e.year+i,e.month+o);let s=tg(a.year,a.month,e.day),l=0,c=Ta(t.year,t.month-
1,t.day)-Ta(s.year,s.month-1,s.day);return r==="week"&&(l=Math.trunc(c/7),c%=7),{years:i,months:o,weeks:l,days:c}},isoToDate({
year:e,month:t,day:r},n){let a={era:void 0,eraYear:void 0,year:e,month:t,day:r,daysInWeek:7,monthsInYear:12};if(n.monthCode&&
(a.monthCode=rn(t)),n.dayOfWeek){let i=t+(t<3?10:-2),o=e-(t<3?1:0),s=Math.floor(o/100),l=o-100*s,c=(r+Math.floor(2.6*i-.2)+
(l+Math.floor(l/4))+(Math.floor(s/4)-2*s))%7;a.dayOfWeek=c+(c<=0?7:0)}if(n.dayOfYear){let i=r;for(let o=t-1;o>0;o--)i+=ya(
e,o);a.dayOfYear=i}return n.weekOfYear&&(a.weekOfYear=dg("iso8601",{year:e,month:t,day:r})),n.daysInMonth&&(a.daysInMonth=
ya(e,t)),(n.daysInYear||n.inLeapYear)&&(a.inLeapYear=tl(e),a.daysInYear=a.inLeapYear?366:365),a},getFirstDayOfWeek:()=>1,
getMinimalDaysInFirstWeek:()=>4};var yr=class e{constructor(t){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=
0,t!==void 0){let r=0;for(let n of t.map.entries()){if(++r>e.MAX_CACHE_ENTRIES)break;this.map.set(...n)}}}get(t){let r=this.
map.get(t);return r&&(this.hits++,this.report()),this.calls++,r}set(t,r){this.map.set(t,r),this.misses++,this.report()}report(){}setObject(t){
if(e.objectMap.get(t))throw new RangeError("object already cached");e.objectMap.set(t,this),this.report()}static getCacheForObject(t){
let r=e.objectMap.get(t);return r||(r=new e,e.objectMap.set(t,r)),r}};function pg({isoYear:e,isoMonth:t,isoDay:r}){return`${Bo(
e)}-${kr(t)}-${kr(r)}T00:00Z`}function ou(e,t){return{years:e.year-t.year,months:e.month-t.month,days:e.day-t.day}}yr.objectMap=
new WeakMap,yr.MAX_CACHE_ENTRIES=1e3;var In=class{constructor(){this.eras=[],this.hasEra=!1,this.erasBeginMidYear=!1}getFormatter(){
return this.formatter===void 0&&(this.formatter=new Intl.DateTimeFormat(`en-US-u-ca-${this.id}`,{day:"numeric",month:"nu\
meric",year:"numeric",era:"short",timeZone:"UTC"})),this.formatter}getCalendarParts(t){let r=this.getFormatter(),n=new Date(
t);if(t==="-271821-04-19T00:00Z"){let a=r.resolvedOptions();r=new Intl.DateTimeFormat(a.locale,{...a,timeZone:"Etc/GMT+1"}),
n=new Date("-271821-04-20T00:00Z")}try{return r.formatToParts(n)}catch{throw new RangeError(`Invalid ISO date: ${t}`)}}isoToCalendarDate(t,r){
let{year:n,month:a,day:i}=t,o=JSON.stringify({func:"isoToCalendarDate",isoYear:n,isoMonth:a,isoDay:i,id:this.id}),s=r.get(
o);if(s)return s;let l=pg({isoYear:n,isoMonth:a,isoDay:i}),c=this.getCalendarParts(l),u={};for(let f=0;f<c.length;f++){let{
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
monthsInYear(i,r),{month:s,monthCode:l}=i;return{month:s,monthCode:l}=ad(i,n,o),{...i,month:s,monthCode:l}}regulateMonthDayNaive(t,r,n){
let a=this.monthsInYear(t,n),{month:i,day:o}=t;return r==="reject"?(wt(i,1,a),wt(o,1,this.maximumMonthLength(t))):(i=Gt(
i,1,a),o=Gt(o,1,this.maximumMonthLength({...t,month:i}))),{...t,month:i,day:o}}calendarToIsoDate(t,r="constrain",n){let a=t,
i=this.adjustCalendarDate(t,n,r,!1);i=this.regulateMonthDayNaive(i,r,n);let{year:o,month:s,day:l}=i,c=JSON.stringify({func:"\
calendarToIsoDate",year:o,month:s,day:l,overflow:r,id:this.id}),u,d=n.get(c);if(d||a.year!==void 0&&a.month!==void 0&&a.
day!==void 0&&(a.year!==i.year||a.month!==i.month||a.day!==i.day)&&(u=JSON.stringify({func:"calendarToIsoDate",year:a.year,
month:a.month,day:a.day,overflow:r,id:this.id}),d=n.get(u),d))return d;let f=this.estimateIsoDate({year:o,month:s,day:l}),
h=E=>{let _=this.addDaysIso(f,E);if(i.day>this.minimumMonthLength(i)){let O=this.isoToCalendarDate(_,n);for(;O.month!==s||
O.year!==o;){if(r==="reject")throw new RangeError(`day ${l} does not exist in month ${s} of year ${o}`);_=this.addDaysIso(
_,-1),O=this.isoToCalendarDate(_,n)}}return _},y=0,b=this.isoToCalendarDate(f,n),T=ou(i,b);if(T.years!==0||T.months!==0||
T.days!==0){let E=365*T.years+30*T.months+T.days;f=this.addDaysIso(f,E),b=this.isoToCalendarDate(f,n),T=ou(i,b),T.years===
0&&T.months===0?f=h(T.days):y=this.compareCalendarDates(i,b)}let S=8;for(;y;){f=this.addDaysIso(f,y*S);let E=b;b=this.isoToCalendarDate(
f,n);let _=y;if(y=this.compareCalendarDates(i,b),y){if(T=ou(i,b),T.years===0&&T.months===0)f=h(T.days),y=0;else if(_&&y!==
_)if(S>1)S/=2;else{if(r==="reject")throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({...a})}`);
this.compareCalendarDates(b,E)>0&&(f=this.addDaysIso(f,-1)),y=0}}}if(n.set(c,f),u&&n.set(u,f),i.year===void 0||i.month===
void 0||i.day===void 0||i.monthCode===void 0||this.hasEra&&(i.era===void 0||i.eraYear===void 0))throw new RangeError("Un\
expected missing property");return f}compareCalendarDates(t,r){return t.year!==r.year?cr(t.year-r.year):t.month!==r.month?
cr(t.month-r.month):t.day!==r.day?cr(t.day-r.day):0}regulateDate(t,r="constrain",n){let a=this.calendarToIsoDate(t,r,n);
return this.isoToCalendarDate(a,n)}addDaysIso(t,r){return dr(t.year,t.month,t.day+r)}addDaysCalendar(t,r,n){let a=this.calendarToIsoDate(
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
let a=this.calendarToIsoDate(t,"constrain",n),i=this.calendarToIsoDate(r,"constrain",n);return Ta(i.year,i.month-1,i.day)-
Ta(a.year,a.month-1,a.day)}monthDaySearchStartYear(t,r){return 1972}monthDayFromFields(t,r,n){let a,i,o,s,l,{era:c,eraYear:u,
year:d,month:f,monthCode:h,day:y}=t;if(f!==void 0&&d===void 0&&(!this.hasEra||c===void 0||u===void 0))throw new TypeError(
"when month is present, year (or era and eraYear) are required");(h===void 0||d!==void 0||this.hasEra&&u!==void 0)&&({monthCode:h,
day:y}=this.isoToCalendarDate(this.calendarToIsoDate(t,r,n),n));let b={year:this.monthDaySearchStartYear(h,y),month:12,day:31},
T=this.isoToCalendarDate(b,n),S=T.monthCode>h||T.monthCode===h&&T.day>=y?T.year:T.year-1;for(let E=0;E<20;E++){let _=this.
adjustCalendarDate({day:y,monthCode:h,year:S-E},n),O=this.calendarToIsoDate(_,"constrain",n),D=this.isoToCalendarDate(O,
n);if({year:a,month:i,day:o}=O,D.monthCode===h&&D.day===y)return{month:i,day:o,year:a};if(r==="constrain"){let W=this.maxLengthOfMonthCodeInAnyYear(
D.monthCode);if(D.monthCode===h&&D.day===W&&y>W)return{month:i,day:o,year:a};(s===void 0||D.monthCode===s.monthCode&&D.day>
s.day)&&(s=D,l=O)}}if(r==="constrain"&&l!==void 0)return l;throw new RangeError(`No recent ${this.id} year with monthCod\
e ${h} and day ${y}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}},$u=class extends In{constructor(){super(...arguments),
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
`Hebrew monthCode M05L is invalid in year ${i} which is not a leap year`);o=6,s="M06"}}else{o=Sa(s),this.inLeapYear({year:i})&&
o>=6&&o++;let u=this.monthsInYear({year:i});if(o<1||o>u)throw new RangeError(`Invalid monthCode: ${s}`)}else if(n==="rej\
ect"?(wt(o,1,this.monthsInYear({year:i})),wt(l,1,this.maximumMonthLength({year:i,month:o}))):(o=Gt(o,1,this.monthsInYear(
{year:i})),l=Gt(l,1,this.maximumMonthLength({year:i,month:o}))),s===void 0)s=this.getMonthCode(i,o);else if(this.getMonthCode(
i,o)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${o} in Hebrew year ${i}`);return{...t,day:l,month:o,
monthCode:s,year:i}}},Zn=class extends In{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=
354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(t,r){let n={year:t.year,month:1,monthCode:"M01",day:1},a={year:t.year+
1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(n,a,r)===355}monthsInYear(){return 12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(
t);return{year:Math.floor(r*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}},Ru=class extends Zn{constructor(){
super(...arguments),this.id="islamic"}},Iu=class extends Zn{constructor(){super(...arguments),this.id="islamic-umalqura"}},
Ou=class extends Zn{constructor(){super(...arguments),this.id="islamic-tbla"}},Cu=class extends Zn{constructor(){super(...arguments),
this.id="islamic-civil"}},Nu=class extends Zn{constructor(){super(...arguments),this.id="islamic-rgsa"}},Pu=class extends Zn{constructor(){
super(...arguments),this.id="islamicc"}},Mu=class extends In{constructor(){super(...arguments),this.id="persian",this.calendarType=
"solar"}inLeapYear(t,r){return this.daysInMonth({year:t.year,month:12,day:1},r)===30}monthsInYear(){return 12}minimumMonthLength(t){
let{month:r}=t;return r===12?29:r<=6?31:30}maximumMonthLength(t){let{month:r}=t;return r===12?30:r<=6?31:30}maxLengthOfMonthCodeInAnyYear(t){
return Sa(t)<=6?31:30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(t);return{year:r+621,month:1,day:1}}},Du=class extends In{constructor(){
super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,
month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,
day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},
10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.
vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 S\
aka"}inLeapYear(t){return id(t.year+78)}monthsInYear(){return 12}minimumMonthLength(t){return this.getMonthInfo(t).length}maximumMonthLength(t){
return this.getMonthInfo(t).length}maxLengthOfMonthCodeInAnyYear(t){let r=Sa(t),n=this.months[r];return n=n.leap??n,n.length}getMonthInfo(t){
let{month:r}=t,n=this.months[r];if(n===void 0)throw new RangeError(`Invalid month: ${r}`);return this.inLeapYear(t)&&n.leap&&
(n=n.leap),n}estimateIsoDate(t){let r=this.adjustCalendarDate(t),n=this.getMonthInfo(r);return dr(r.year+78+(n.nextYear?
1:0),n.month,n.day+r.day-1)}checkIcuBugs(t){if(this.vulnerableToBceBug&&t.year<1)throw new RangeError(`calendar '${this.
id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}};function id(e){
return e%4==0&&(e%100!=0||e%400==0)}var il=class extends In{constructor(t,r){super(),this.calendarType="solar",this.id=t,
this.isoEpoch=r}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return id(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Sa(t)-1]}estimateIsoDate(t){
let r=this.adjustCalendarDate(t);return lo(r.year+this.isoEpoch.year,r.month+this.isoEpoch.month,r.day+this.isoEpoch.day,
"constrain")}},ol=class extends In{constructor(t,r){super(),this.hasEra=!0,this.calendarType="solar",this.id=t;let{eras:n,
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
r);this.anchorEra=a,this.eras=n}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return id(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Sa(t)-1]}completeEraYear(t){
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
constrain"){let a=t,{month:i,monthCode:o}=a;return i===void 0&&(a={...a,month:Sa(o)}),this.validateCalendarDate(a),a=this.
completeEraYear(a),super.adjustCalendarDate(a,r,n)}estimateIsoDate(t){let r=this.adjustCalendarDate(t),{year:n,month:a,day:i}=r,
{anchorEra:o}=this;return lo(n+o.isoEpoch.year-(o.hasYearZero?0:1),a,i,"constrain")}},wo=class extends ol{constructor(t,r){
super(t,r)}isoToCalendarDate(t){let{year:r,month:n,day:a}=t,i=rn(n),o=r-this.anchorEra.isoEpoch.year+1;return this.completeEraYear(
{year:o,month:n,monthCode:i,day:a})}},en={inLeapYear(e){let{year:t}=e;return(t+1)%4==0},monthsInYear:()=>13,minimumMonthLength(e){
let{month:t}=e;return t===13?this.inLeapYear(e)?6:5:30},maximumMonthLength(e){return this.minimumMonthLength(e)},maxLengthOfMonthCodeInAnyYear:e=>e===
"M13"?6:30},ju=class extends il{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=en.monthsInYear,
this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},sl=class extends ol{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=
en.monthsInYear,this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},Lu=class extends ju{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}},Fu=class extends sl{constructor(){
super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}},Uu=class extends sl{constructor(){
super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"eth\
iopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}},Bu=class extends wo{constructor(){super(
"roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"\
roc"}])}},Hu=class extends il{constructor(){super("buddhist",{year:-543,month:1,day:1})}},Wu=class extends wo{constructor(){
super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be",
"bce"],reverseOf:"gregory"}])}reviseIntlEra(t){let{era:r,eraYear:n}=t;return r==="b"&&(r="gregory-inverse"),r==="a"&&(r=
"gregory"),{era:r,eraYear:n}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}},qu=class extends wo{constructor(){
super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",
isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},
anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,
day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:[
"japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gre\
gory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(t,r){let{era:n,eraYear:a}=t,{year:i}=r;
return this.eras.find(o=>o.code===n)?{era:n,eraYear:a}:i<1?{era:"japanese-inverse",eraYear:1-i}:{era:"japanese",eraYear:i}}},
ll=class extends In{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(t,r){let n=this.getMonthList(
t.year,r);return Object.entries(n).length===13}monthsInYear(t,r){return this.inLeapYear(t,r)?13:12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(t){return["M01L","M09L","M10L","M11L","M12L"].includes(
t)?29:30}monthDaySearchStartYear(t,r){let n={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,
1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[t]??
[1972,1972];return r<30?n[0]:n[1]}getMonthList(t,r){if(t===void 0)throw new TypeError("Missing year");let n=JSON.stringify(
{func:"getMonthList",calendarYear:t,id:this.id}),a=r.get(n);if(a)return a;let i=this.getFormatter(),o=(T,S)=>{let E=pg({
isoYear:T,isoMonth:2,isoDay:1}),_=new Date(E);_.setUTCDate(S+1);let O=i.formatToParts(_),D=O.find(H=>H.type==="month").value,
W=+O.find(H=>H.type==="day").value,G=O.find(H=>H.type==="relatedYear"),Z;if(G===void 0)throw new RangeError(`Intl.DateTi\
meFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return Z=+G.value,{calendarMonthString:D,
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
n==="reject"?(wt(o,1,f),wt(l,1,this.maximumMonthLength())):(o=Gt(o,1,f),l=Gt(l,1,this.maximumMonthLength()));let h=d.find(
y=>y[1].monthIndex===o);if(h===void 0)throw new RangeError(`Invalid month ${o} in Chinese year ${i}`);c=rn(+h[0].replace(
"bis",""),h[0].indexOf("bis")!==-1)}else{let u=this.getMonthList(i,r),d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="\
0"&&(d=d.slice(1));let f=u[d];if(!f)throw new RangeError(`Unmatched monthCode ${c} in Chinese year ${i}`);if(o!==f.monthIndex)
throw new RangeError(`monthCode ${c} doesn't correspond to month ${o} in Chinese year ${i}`)}return{...t,year:i,month:o,
monthCode:c,day:l}}},Vu=class extends ll{constructor(){super(...arguments),this.id="chinese"}},Yu=class extends ll{constructor(){
super(...arguments),this.id="dangi"}},zu=class{constructor(t){this.helper=t}extraFields(t){return this.helper.hasEra&&t.
includes("year")?["era","eraYear"]:[]}resolveFields(t){if(this.helper.calendarType!=="lunisolar"){let r=new yr;ad(t,void 0,
this.helper.monthsInYear({year:t.year??1972},r))}}dateToISO(t,r){let n=new yr,a=this.helper.calendarToIsoDate(t,r,n);return n.
setObject(a),a}monthDayToISOReferenceDate(t,r){let n=new yr,a=this.helper.monthDayFromFields(t,r,n);return n.setObject(a),
a}fieldKeysToIgnore(t){let r=new Set;for(let n=0;n<t.length;n++){let a=t[n];switch(r.add(a),a){case"era":r.add("eraYear"),
r.add("year");break;case"eraYear":r.add("era"),r.add("year");break;case"year":r.add("era"),r.add("eraYear");break;case"m\
onth":r.add("monthCode"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"monthCode":r.add("mont\
h"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"day":this.helper.erasBeginMidYear&&(r.add("\
era"),r.add("eraYear"))}}return ug(r)}dateAdd(t,{years:r,months:n,weeks:a,days:i},o){let s=yr.getCacheForObject(t),l=this.
helper.isoToCalendarDate(t,s),c=this.helper.addCalendar(l,{years:r,months:n,weeks:a,days:i},o,s),u=this.helper.calendarToIsoDate(
c,"constrain",s);return yr.getCacheForObject(u)||new yr(s).setObject(u),u}dateUntil(t,r,n){let a=yr.getCacheForObject(t),
i=yr.getCacheForObject(r),o=this.helper.isoToCalendarDate(t,a),s=this.helper.isoToCalendarDate(r,i);return this.helper.untilCalendar(
o,s,n,a)}isoToDate(t,r){let n=yr.getCacheForObject(t),a=this.helper.isoToCalendarDate(t,n);if(r.dayOfWeek&&(a.dayOfWeek=
Ho.iso8601.isoToDate(t,{dayOfWeek:!0}).dayOfWeek),r.dayOfYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.calendarDaysUntil(
i,a,n);a.dayOfYear=o+1}if(r.weekOfYear&&(a.weekOfYear=dg(this.helper.id,t)),a.daysInWeek=7,r.daysInMonth&&(a.daysInMonth=
this.helper.daysInMonth(a,n)),r.daysInYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.addCalendar(i,{years:1},
"constrain",n);a.daysInYear=this.helper.calendarDaysUntil(i,o,n)}return r.monthsInYear&&(a.monthsInYear=this.helper.monthsInYear(
a,n)),r.inLeapYear&&(a.inLeapYear=this.helper.inLeapYear(a,n)),a}getFirstDayOfWeek(){return this.helper.getFirstDayOfWeek()}getMinimalDaysInFirstWeek(){
return this.helper.getMinimalDaysInFirstWeek()}};for(let e of[$u,Mu,Uu,Lu,Fu,Vu,Yu,Bu,Du,Hu,Wu,qu,Ru,Iu,Ou,Cu,Nu,Pu]){let t=new e;
Ho[t.id]=new zu(t)}fu("calendarImpl",function(e){return Ho[e]});var To=Intl.DateTimeFormat;function qa(e,t){let r=g(e,t);
return typeof r=="function"&&(r=new To(g(e,Am),r(g(e,cu))),function(n,a,i){let o=ul(n);if(o===void 0)throw new TypeError(
"Missing slots for the given container");if(o[a]===void 0)throw new TypeError(`tried to reset ${a} which was not set`);o[a]=
i}(e,t,r)),r}function Ji(e){return Qt(e,xa)}var Ea=class{constructor(t=void 0,r=void 0){(function(n,a,i){let o=i!==void 0,
s;if(o){let d=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","mont\
h","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeS\
tyle"];s=function(h){if(h==null)throw new TypeError(`Expected object not ${h}`);return Object(h)}(i);let f=Object.create(
null);for(let h=0;h<d.length;h++){let y=d[h];Object.prototype.hasOwnProperty.call(s,y)&&(f[y]=s[y])}s=f}else s=Object.create(
null);let l=new To(a,s),c=l.resolvedOptions();if(On(n),o){let d=Object.assign(Object.create(null),c);for(let f in d)Object.
prototype.hasOwnProperty.call(s,f)||delete d[f];d.hour12=s.hour12,d.hourCycle=s.hourCycle,he(n,cu,d)}else he(n,cu,s);he(
n,Am,c.locale),he(n,xa,l),he(n,za,c.timeZone),he(n,Xi,c.calendar),he(n,Tm,FS),he(n,km,jS),he(n,Sm,LS),he(n,Em,DS),he(n,xm,
US),he(n,_m,BS);let u=o?s.timeZone:void 0;if(u===void 0)he(n,lu,c.timeZone);else{let d=hl(u);if(d.startsWith("\u2212"))throw new RangeError(
"Unicode minus (U+2212) is not supported in time zone offsets");he(n,lu,Zt(d))}})(this,t,r)}get format(){I(this,Ji);let t=CS.
bind(this);return Object.defineProperties(t,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,
writable:!1,configurable:!0}}),t}formatRange(t,r){return I(this,Ji),PS.call(this,t,r)}formatToParts(t,...r){return I(this,
Ji),NS.call(this,t,...r)}formatRangeToParts(t,r){return I(this,Ji),MS.call(this,t,r)}resolvedOptions(){return I(this,Ji),
OS.call(this)}};"formatToParts"in To.prototype||delete Ea.prototype.formatToParts,"formatRangeToParts"in To.prototype||delete Ea.
prototype.formatRangeToParts;var wr=function(e=void 0,t=void 0){return new Ea(e,t)};function OS(){let e=g(this,xa).resolvedOptions();
return e.timeZone=g(this,lu),e}function CS(e,...t){let r,n,a=ii(e,this);return a.formatter?(r=a.formatter,n=[jr(a.epochNs,
"floor")]):(r=g(this,xa),n=[e,...t]),r.format(...n)}function NS(e,...t){let r,n,a=ii(e,this);return a.formatter?(r=a.formatter,
n=[jr(a.epochNs,"floor")]):(r=g(this,xa),n=[e,...t]),r.formatToParts(...n)}function PS(e,t){if(e===void 0||t===void 0)throw new TypeError(
"Intl.DateTimeFormat.formatRange requires two values");let r=cl(e),n=cl(t),a,i=[r,n];if($n(r)!==$n(n))throw new TypeError(
"Intl.DateTimeFormat.formatRange accepts two values of the same type");if($n(r)){if(!fg(r,n))throw new TypeError("Intl.D\
ateTimeFormat.formatRange accepts two values of the same type");let{epochNs:o,formatter:s}=ii(r,this),{epochNs:l,formatter:c}=ii(
n,this);s&&(a=s,i=[jr(o,"floor"),jr(l,"floor")])}return a||(a=g(this,xa)),a.formatRange(...i)}function MS(e,t){if(e===void 0||
t===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");let r=cl(e),n=cl(t),a,i=[r,n];if($n(
r)!==$n(n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if($n(r)){if(!fg(
r,n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");let{epochNs:o,formatter:s}=ii(
r,this),{epochNs:l,formatter:c}=ii(n,this);s&&(a=s,i=[jr(o,"floor"),jr(l,"floor")])}return a||(a=g(this,xa)),a.formatRangeToParts(
...i)}function Wo(e={},t={}){let r=Object.assign({},e),n=["year","month","day","hour","minute","second","weekday","dayPe\
riod","timeZoneName","dateStyle","timeStyle"];for(let a=0;a<n.length;a++){let i=n[a];r[i]=i in t?t[i]:r[i],r[i]!==!1&&r[i]!==
void 0||delete r[i]}return r}function DS(e){let t=Wo(e,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});
if(t.timeStyle!=="long"&&t.timeStyle!=="full"||(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"\
2-digit"})),!Sl(t)){if(qo(e))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(e)}]`);Object.
assign(t,{hour:"numeric",minute:"numeric",second:"numeric"})}return t}function jS(e){let t={short:{year:"2-digit",month:"\
numeric"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},full:{year:"numeric",month:"long"}},r=Wo(
e,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in r&&r.dateStyle){
let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("year"in r||"month"in r||"era"in r)){if(qo(e))throw new TypeError(
`cannot format PlainYearMonth with options [${Object.keys(e)}]`);Object.assign(r,{year:"numeric",month:"numeric"})}return r}
function LS(e){let t={short:{month:"numeric",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"\
numeric"},full:{month:"long",day:"numeric"}},r=Wo(e,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if("dateStyle"in r&&r.dateStyle){let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("month"in
r)&&!("day"in r)){if(qo(e))throw new TypeError(`cannot format PlainMonthDay with options [${Object.keys(e)}]`);Object.assign(
r,{month:"numeric",day:"numeric"})}return r}function FS(e){let t=Wo(e,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if(!kl(t)){if(qo(e))throw new TypeError(`cannot format PlainDate with options [${Object.keys(e)}]`);Object.
assign(t,{year:"numeric",month:"numeric",day:"numeric"})}return t}function US(e){let t=Wo(e,{timeZoneName:!1});if((t.timeStyle===
"long"||t.timeStyle==="full")&&(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"2-digit"}),t.
dateStyle)&&(Object.assign(t,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",
day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"\
long"}}[t.dateStyle]),delete t.dateStyle),!Sl(t)&&!kl(t)){if(qo(e))throw new TypeError(`cannot format PlainDateTime with\
 options [${Object.keys(e)}]`);Object.assign(t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"nume\
ric",second:"numeric"})}return t}function BS(e){let t=e;return Sl(t)||kl(t)||(t=Object.assign({},t,{year:"numeric",month:"\
numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function kl(e){return"year"in e||"month"in e||
"day"in e||"weekday"in e||"dateStyle"in e||"era"in e}function Sl(e){return"hour"in e||"minute"in e||"second"in e||"timeS\
tyle"in e||"dayPeriod"in e||"fractionalSecondDigits"in e}function qo(e){return kl(e)||Sl(e)||"dateStyle"in e||"timeStyle"in
e||"timeZoneName"in e}function $n(e){return Xe(e)||nt(e)||qe(e)||ve(e)||Et(e)||vr(e)||St(e)}function cl(e){return $n(e)?
e:fl(e)}function fg(e,t){return!(!$n(e)||!$n(t)||nt(e)&&!nt(t)||Xe(e)&&!Xe(t)||qe(e)&&!qe(t)||ve(e)&&!ve(t)||Et(e)&&!Et(
t)||vr(e)&&!vr(t)||St(e)&&!St(t))}function ii(e,t){if(nt(e)){let r={isoDate:{year:1970,month:1,day:1},time:g(e,Qe)};return{
epochNs:Nt(g(t,za),r,"compatible"),formatter:qa(t,Em)}}if(Et(e)){let r=g(e,M),n=g(t,Xi);if(r!==n)throw new RangeError(`c\
annot format PlainYearMonth with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Nt(g(t,za),a,"compatible"),formatter:qa(t,km)}}if(vr(
e)){let r=g(e,M),n=g(t,Xi);if(r!==n)throw new RangeError(`cannot format PlainMonthDay with calendar ${r} in locale with \
calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{
epochNs:Nt(g(t,za),a,"compatible"),formatter:qa(t,Sm)}}if(Xe(e)){let r=g(e,M),n=g(t,Xi);if(r!=="iso8601"&&r!==n)throw new RangeError(
`cannot format PlainDate with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Nt(g(t,za),a,"compatible"),formatter:qa(t,Tm)}}if(qe(
e)){let r=g(e,M),n=g(t,Xi);if(r!=="iso8601"&&r!==n)throw new RangeError(`cannot format PlainDateTime with calendar ${r} \
in locale with calendar ${n}`);let a=g(e,Ye);return{epochNs:Nt(g(t,za),a,"compatible"),formatter:qa(t,xm)}}if(ve(e))throw new TypeError(
"Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return St(e)?{epochNs:g(
e,re),formatter:qa(t,_m)}:{}}function hg(e){let t=Object.create(null);return t.years=g(e,Bt),t.months=g(e,Ht),t.weeks=g(
e,sr),t.days=g(e,Wt),t.hours=g(e,qt),t.minutes=g(e,Vt),t.seconds=g(e,Yt),t.milliseconds=g(e,zt),t.microseconds=g(e,Kt),t.
nanoseconds=g(e,lr),t}Ea.prototype.constructor=wr,Object.defineProperty(wr,"prototype",{value:Ea.prototype,writable:!1,enumerable:!1,
configurable:!1}),wr.supportedLocalesOf=To.supportedLocalesOf,Cn(wr,"Intl.DateTimeFormat");var{format:HS,formatToParts:WS}=Intl.
DurationFormat?.prototype??Object.create(null);function od(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=hg(
Mr(e));return HS.call(this,t)}Intl.DurationFormat?.prototype&&(Intl.DurationFormat.prototype.format=od,Intl.DurationFormat.
prototype.formatToParts=function(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=hg(Mr(e));return WS.call(
this,t)});var ND=Object.freeze({__proto__:null,DateTimeFormat:wr,ModifiedIntlDurationFormatPrototypeFormat:od}),ko=class{constructor(t){
if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");Ym(this,al(t))}get epochMilliseconds(){
return I(this,St),jr(g(this,re),"floor")}get epochNanoseconds(){return I(this,St),lg($.default.BigInt(g(this,re)))}add(t){
return I(this,St),lm("add",this,t)}subtract(t){return I(this,St),lm("subtract",this,t)}until(t,r=void 0){return I(this,St),
tm("until",this,t,r)}since(t,r=void 0){return I(this,St),tm("since",this,t,r)}round(t){if(I(this,St),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?ka("smallestUnit",t):K(t),n=si(r),a=zr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",Rn);return li(n,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[i],
!0),Vr(Su(g(this,re),n,i,a))}equals(t){I(this,St);let r=to(t),n=g(this,re),a=g(r,re);return $.default.equal($.default.BigInt(
n),$.default.BigInt(a))}toString(t=void 0){I(this,St);let r=K(t),n=Po(r),a=zr(r,"trunc"),i=ur(r,"smallestUnit","time",void 0);
if(i==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let o=r.timeZone;o!==void 0&&(o=
Zt(o));let{precision:s,unit:l,increment:c}=Mo(i,n);return Yh(Vr(Su(g(this,re),c,l,a)),o,s)}toJSON(){return I(this,St),Yh(
this,void 0,"auto")}toLocaleString(t=void 0,r=void 0){return I(this,St),new wr(t,r).format(this)}valueOf(){Qn("Instant")}toZonedDateTimeISO(t){
I(this,St);let r=Zt(t);return Ot(g(this,re),r,"iso8601")}static fromEpochMilliseconds(t){return Vr(Yr(fl(t)))}static fromEpochNanoseconds(t){
return Vr(al(t))}static from(t){return to(t)}static compare(t,r){let n=to(t),a=to(r),i=g(n,re),o=g(a,re);return $.default.
lessThan(i,o)?-1:$.default.greaterThan(i,o)?1:0}};Cn(ko,"Temporal.Instant");var So=class{constructor(t,r,n,a="iso8601"){
let i=se(t),o=se(r),s=se(n),l=er(a===void 0?"iso8601":ht(a));ba(i,o,s),Bm(this,{year:i,month:o,day:s},l)}get calendarId(){
return I(this,Xe),g(this,M)}get era(){return Lt(this,"era")}get eraYear(){return Lt(this,"eraYear")}get year(){return Lt(
this,"year")}get month(){return Lt(this,"month")}get monthCode(){return Lt(this,"monthCode")}get day(){return Lt(this,"d\
ay")}get dayOfWeek(){return Lt(this,"dayOfWeek")}get dayOfYear(){return Lt(this,"dayOfYear")}get weekOfYear(){return Lt(
this,"weekOfYear")?.week}get yearOfWeek(){return Lt(this,"weekOfYear")?.year}get daysInWeek(){return Lt(this,"daysInWeek")}get daysInMonth(){
return Lt(this,"daysInMonth")}get daysInYear(){return Lt(this,"daysInYear")}get monthsInYear(){return Lt(this,"monthsInY\
ear")}get inLeapYear(){return Lt(this,"inLeapYear")}with(t,r=void 0){if(I(this,Xe),!et(t))throw new TypeError("invalid a\
rgument");oi(t);let n=g(this,M),a=Xt(n,g(this,ne));return a=va(n,a,Sr(n,t,["year","month","monthCode","day"],[],"partial")),
Jt(Jn(n,a,Ae(K(r))),n)}withCalendar(t){I(this,Xe);let r=Fo(t);return Jt(g(this,ne),r)}add(t,r=void 0){return I(this,Xe),
cm("add",this,t,r)}subtract(t,r=void 0){return I(this,Xe),cm("subtract",this,t,r)}until(t,r=void 0){return I(this,Xe),rm(
"until",this,t,r)}since(t,r=void 0){return I(this,Xe),rm("since",this,t,r)}equals(t){I(this,Xe);let r=Qi(t);return on(g(
this,ne),g(r,ne))===0&&nn(g(this,M),g(r,M))}toString(t=void 0){return I(this,Xe),zh(this,No(K(t)))}toJSON(){return I(this,
Xe),zh(this)}toLocaleString(t=void 0,r=void 0){return I(this,Xe),new wr(t,r).format(this)}valueOf(){Qn("PlainDate")}toPlainDateTime(t=void 0){
I(this,Xe);let r=Um(t);return Nr(Re(g(this,ne),r),g(this,M))}toZonedDateTime(t){let r,n;if(I(this,Xe),et(t)){let o=t.timeZone;
o===void 0?r=Zt(t):(r=Zt(o),n=t.plainTime)}else r=Zt(t);let a=g(this,ne),i;return n===void 0?i=Wn(r,a):(n=Vn(n),i=Nt(r,Re(
a,g(n,Qe)),"compatible")),Ot(i,r,g(this,M))}toPlainYearMonth(){I(this,Xe);let t=g(this,M);return Za(mo(t,Xt(t,g(this,ne)),
"constrain"),t)}toPlainMonthDay(){I(this,Xe);let t=g(this,M);return Ja(Qs(t,Xt(t,g(this,ne)),"constrain"),t)}static from(t,r=void 0){
return Qi(t,r)}static compare(t,r){let n=Qi(t),a=Qi(r);return on(g(n,ne),g(a,ne))}};function Lt(e,t){I(e,Xe);let r=g(e,ne);
return Do(e).isoToDate(r,{[t]:!0})[t]}Cn(So,"Temporal.PlainDate");var Eo=class{constructor(t,r,n,a=0,i=0,o=0,s=0,l=0,c=0,u="\
iso8601"){let d=se(t),f=se(r),h=se(n),y=a===void 0?0:se(a),b=i===void 0?0:se(i),T=o===void 0?0:se(o),S=s===void 0?0:se(s),
E=l===void 0?0:se(l),_=c===void 0?0:se(c),O=er(u===void 0?"iso8601":ht(u));ed(d,f,h,y,b,T,S,E,_),Hm(this,{isoDate:{year:d,
month:f,day:h},time:{hour:y,minute:b,second:T,millisecond:S,microsecond:E,nanosecond:_}},O)}get calendarId(){return I(this,
qe),g(this,M)}get year(){return Ft(this,"year")}get month(){return Ft(this,"month")}get monthCode(){return Ft(this,"mont\
hCode")}get day(){return Ft(this,"day")}get hour(){return Va(this,"hour")}get minute(){return Va(this,"minute")}get second(){
return Va(this,"second")}get millisecond(){return Va(this,"millisecond")}get microsecond(){return Va(this,"microsecond")}get nanosecond(){
return Va(this,"nanosecond")}get era(){return Ft(this,"era")}get eraYear(){return Ft(this,"eraYear")}get dayOfWeek(){return Ft(
this,"dayOfWeek")}get dayOfYear(){return Ft(this,"dayOfYear")}get weekOfYear(){return Ft(this,"weekOfYear")?.week}get yearOfWeek(){
return Ft(this,"weekOfYear")?.year}get daysInWeek(){return Ft(this,"daysInWeek")}get daysInYear(){return Ft(this,"daysIn\
Year")}get daysInMonth(){return Ft(this,"daysInMonth")}get monthsInYear(){return Ft(this,"monthsInYear")}get inLeapYear(){
return Ft(this,"inLeapYear")}with(t,r=void 0){if(I(this,qe),!et(t))throw new TypeError("invalid argument");oi(t);let n=g(
this,M),a=g(this,Ye),i={...Xt(n,a.isoDate),...a.time};return i=va(n,i,Sr(n,t,["year","month","monthCode","day"],["hour",
"minute","second","millisecond","microsecond","nanosecond"],"partial")),Nr(jo(n,i,Ae(K(r))),n)}withPlainTime(t=void 0){I(
this,qe);let r=Um(t);return Nr(Re(g(this,Ye).isoDate,r),g(this,M))}withCalendar(t){I(this,qe);let r=Fo(t);return Nr(g(this,
Ye),r)}add(t,r=void 0){return I(this,qe),um("add",this,t,r)}subtract(t,r=void 0){return I(this,qe),um("subtract",this,t,
r)}until(t,r=void 0){return I(this,qe),nm("until",this,t,r)}since(t,r=void 0){return I(this,qe),nm("since",this,t,r)}round(t){
if(I(this,qe),t===void 0)throw new TypeError("options parameter is required");let r=typeof t=="string"?ka("smallestUnit",
t):K(t),n=si(r),a=zr(r,"halfExpand"),i=ur(r,"smallestUnit","time",Rn,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,
microsecond:1e3,nanosecond:1e3}[i];li(n,o,o===1);let s=g(this,Ye);return Nr(n===1&&i==="nanosecond"?s:Eu(s,n,i,a),g(this,
M))}equals(t){I(this,qe);let r=eo(t);return ai(g(this,Ye),g(r,Ye))===0&&nn(g(this,M),g(r,M))}toString(t=void 0){I(this,qe);
let r=K(t),n=No(r),a=Po(r),i=zr(r,"trunc"),o=ur(r,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smal\
lestUnit must be a time unit other than "hour"');let{precision:s,unit:l,increment:c}=Mo(o,a),u=Eu(g(this,Ye),c,l,i);return wa(
u),yo(u,g(this,M),s,n)}toJSON(){return I(this,qe),yo(g(this,Ye),g(this,M),"auto")}toLocaleString(t=void 0,r=void 0){return I(
this,qe),new wr(t,r).format(this)}valueOf(){Qn("PlainDateTime")}toZonedDateTime(t,r=void 0){I(this,qe);let n=Zt(t),a=co(
K(r));return Ot(Nt(n,g(this,Ye),a),n,g(this,M))}toPlainDate(){return I(this,qe),Jt(g(this,Ye).isoDate,g(this,M))}toPlainTime(){
return I(this,qe),Sn(g(this,Ye).time)}static from(t,r=void 0){return eo(t,r)}static compare(t,r){let n=eo(t),a=eo(r);return ai(
g(n,Ye),g(a,Ye))}};function Ft(e,t){I(e,qe);let r=g(e,Ye).isoDate;return Do(e).isoToDate(r,{[t]:!0})[t]}function Va(e,t){
return I(e,qe),g(e,Ye).time[t]}Cn(Eo,"Temporal.PlainDateTime");var xo=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0,s=0,l=0,c=0,u=0){
let d=t===void 0?0:qr(t),f=r===void 0?0:qr(r),h=n===void 0?0:qr(n),y=a===void 0?0:qr(a),b=i===void 0?0:qr(i),T=o===void 0?
0:qr(o),S=s===void 0?0:qr(s),E=l===void 0?0:qr(l),_=c===void 0?0:qr(c),O=u===void 0?0:qr(u);wl(d,f,h,y,b,T,S,E,_,O),On(this),
he(this,Bt,d),he(this,Ht,f),he(this,sr,h),he(this,Wt,y),he(this,qt,b),he(this,Vt,T),he(this,Yt,S),he(this,zt,E),he(this,
Kt,_),he(this,lr,O)}get years(){return I(this,Ze),g(this,Bt)}get months(){return I(this,Ze),g(this,Ht)}get weeks(){return I(
this,Ze),g(this,sr)}get days(){return I(this,Ze),g(this,Wt)}get hours(){return I(this,Ze),g(this,qt)}get minutes(){return I(
this,Ze),g(this,Vt)}get seconds(){return I(this,Ze),g(this,Yt)}get milliseconds(){return I(this,Ze),g(this,zt)}get microseconds(){
return I(this,Ze),g(this,Kt)}get nanoseconds(){return I(this,Ze),g(this,lr)}get sign(){return I(this,Ze),rl(this)}get blank(){
return I(this,Ze),rl(this)===0}with(t){I(this,Ze);let r=Fm(t),{years:n=g(this,Bt),months:a=g(this,Ht),weeks:i=g(this,sr),
days:o=g(this,Wt),hours:s=g(this,qt),minutes:l=g(this,Vt),seconds:c=g(this,Yt),milliseconds:u=g(this,zt),microseconds:d=g(
this,Kt),nanoseconds:f=g(this,lr)}=r;return new e(n,a,i,o,s,l,c,u,d,f)}negated(){return I(this,Ze),pr(this)}abs(){return I(
this,Ze),new e(Math.abs(g(this,Bt)),Math.abs(g(this,Ht)),Math.abs(g(this,sr)),Math.abs(g(this,Wt)),Math.abs(g(this,qt)),
Math.abs(g(this,Vt)),Math.abs(g(this,Yt)),Math.abs(g(this,zt)),Math.abs(g(this,Kt)),Math.abs(g(this,lr)))}add(t){return I(
this,Ze),sm("add",this,t)}subtract(t){return I(this,Ze),sm("subtract",this,t)}round(t){if(I(this,Ze),t===void 0)throw new TypeError(
"options parameter is required");let r=Tn(this),n=typeof t=="string"?ka("smallestUnit",t):K(t),a=ur(n,"largestUnit","dat\
etime",void 0,["auto"]),{plainRelativeTo:i,zonedRelativeTo:o}=iu(n),s=si(n),l=zr(n,"halfExpand"),c=ur(n,"smallestUnit","\
datetime",void 0),u=!0;c||(u=!1,c="nanosecond");let d=xn(r,c),f=!0;if(a||(f=!1,a=d),a==="auto"&&(a=d),!u&&!f)throw new RangeError(
"at least one of smallestUnit or largestUnit is required");if(xn(a,c)!==a)throw new RangeError(`largestUnit ${a} cannot \
be smaller than smallestUnit ${c}`);let h={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[c];
if(h!==void 0&&li(s,h,!1),s>1&&kn(c)==="date"&&a!==c)throw new RangeError("For calendar units with roundingIncrement > 1\
, use largestUnit = smallestUnit");if(o){let b=Ka(this),T=g(o,Oe),S=g(o,M),E=g(o,re);return b=sg(E,ao(E,T,S,b),T,S,a,s,c,
l),kn(a)==="date"&&(a="hour"),Pr(b,a)}if(i){let b=tn(this),T=ni({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},b.time),S=g(i,ne),E=g(i,M),_=Tr(E,S,Ct(b.date,T.deltaDays),"constrain");return b=og(Re(S,{deltaDays:0,hour:0,
minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(_,T),E,a,s,c,l),Pr(b,a)}if(Qr(r))throw new RangeError(`a\
 starting point is required for ${r}s balancing`);if(Qr(a))throw new RangeError(`a starting point is required for ${a}s \
balancing`);let y=tn(this);if(c==="day"){let{quotient:b,remainder:T}=y.time.divmod(Js),S=y.date.days+b+uo(T,"day");S=Yn(
S,s,l),y=_n({years:0,months:0,weeks:0,days:S},Fe.ZERO)}else y=_n({years:0,months:0,weeks:0,days:0},nl(y.time,s,c,l));return Pr(
y,a)}total(t){if(I(this,Ze),t===void 0)throw new TypeError("options argument is required");let r=typeof t=="string"?ka("\
unit",t):K(t),{plainRelativeTo:n,zonedRelativeTo:a}=iu(r),i=ur(r,"unit","datetime",Rn);if(a){let s=Ka(this),l=g(a,Oe),c=g(
a,M),u=g(a,re);return function(d,f,h,y,b){return kn(b)==="time"?uo(Fe.fromEpochNsDiff(f,d),b):em(ag(d,f,h,y,b),f,Dr(h,d),
h,y,b)}(u,ao(u,l,c,s),l,c,i)}if(n){let s=tn(this),l=ni({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},s.time),c=g(n,ne),u=g(n,M),d=Tr(u,c,Ct(s.date,l.deltaDays),"constrain");return function(f,h,y,b){if(ai(f,h)==
0)return 0;wa(f),wa(h);let T=ng(f,h,y,b);return b==="nanosecond"?$.default.toNumber(T.time.totalNs):em(T,xt(h),f,null,y,
b)}(Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(d,l),u,i)}let o=Tn(this);if(Qr(
o))throw new RangeError(`a starting point is required for ${o}s total`);if(Qr(i))throw new RangeError(`a starting point \
is required for ${i}s total`);return uo(tn(this).time,i)}toString(t=void 0){I(this,Ze);let r=K(t),n=Po(r),a=zr(r,"trunc"),
i=ur(r,"smallestUnit","time",void 0);if(i==="hour"||i==="minute")throw new RangeError('smallestUnit must be a time unit \
other than "hours" or "minutes"');let{precision:o,unit:s,increment:l}=Mo(i,n);if(s==="nanosecond"&&l===1)return Ys(this,
o);let c=Tn(this),u=Ka(this),d=nl(u.time,l,s,a);return u=_n(u.date,d),Ys(Pr(u,xn(c,"second")),o)}toJSON(){return I(this,
Ze),Ys(this,"auto")}toLocaleString(t=void 0,r=void 0){if(I(this,Ze),typeof Intl.DurationFormat=="function"){let n=new Intl.
DurationFormat(t,r);return od.call(n,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires In\
tl.DurationFormat."),Ys(this,"auto")}valueOf(){Qn("Duration")}static from(t){return Mr(t)}static compare(t,r,n=void 0){let a=Mr(
t),i=Mr(r),o=K(n),{plainRelativeTo:s,zonedRelativeTo:l}=iu(o);if(g(a,Bt)===g(i,Bt)&&g(a,Ht)===g(i,Ht)&&g(a,sr)===g(i,sr)&&
g(a,Wt)===g(i,Wt)&&g(a,qt)===g(i,qt)&&g(a,Vt)===g(i,Vt)&&g(a,Yt)===g(i,Yt)&&g(a,zt)===g(i,zt)&&g(a,Kt)===g(i,Kt)&&g(a,lr)===
g(i,lr))return 0;let c=Tn(a),u=Tn(i),d=Ka(a),f=Ka(i);if(l&&(kn(c)==="date"||kn(u)==="date")){let S=g(l,Oe),E=g(l,M),_=g(
l,re),O=ao(_,S,E,d),D=ao(_,S,E,f);return cr($.default.toNumber($.default.subtract(O,D)))}let h=d.date.days,y=f.date.days;
if(Qr(c)||Qr(u)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");h=Qh(
d.date,s),y=Qh(f.date,s)}let b=d.time.add24HourDays(h),T=f.time.add24HourDays(y);return b.cmp(T)}};Cn(xo,"Temporal.Durat\
ion");var _o=class{constructor(t,r,n="iso8601",a=1972){let i=se(t),o=se(r),s=er(n===void 0?"iso8601":ht(n)),l=se(a);ba(l,
i,o),Wm(this,{year:l,month:i,day:o},s)}get monthCode(){return mm(this,"monthCode")}get day(){return mm(this,"day")}get calendarId(){
return I(this,vr),g(this,M)}with(t,r=void 0){if(I(this,vr),!et(t))throw new TypeError("invalid argument");oi(t);let n=g(
this,M),a=Xt(n,g(this,ne),"month-day");return a=va(n,a,Sr(n,t,["year","month","monthCode","day"],[],"partial")),Ja(Qs(n,
a,Ae(K(r))),n)}equals(t){I(this,vr);let r=qh(t);return on(g(this,ne),g(r,ne))===0&&nn(g(this,M),g(r,M))}toString(t=void 0){
return I(this,vr),Gh(this,No(K(t)))}toJSON(){return I(this,vr),Gh(this)}toLocaleString(t=void 0,r=void 0){return I(this,
vr),new wr(t,r).format(this)}valueOf(){Qn("PlainMonthDay")}toPlainDate(t){if(I(this,vr),!et(t))throw new TypeError("argu\
ment should be an object");let r=g(this,M);return Jt(Jn(r,va(r,Xt(r,g(this,ne),"month-day"),Sr(r,t,["year"],[],[])),"con\
strain"),r)}static from(t,r=void 0){return qh(t,r)}};function mm(e,t){I(e,vr);let r=g(e,ne);return Do(e).isoToDate(r,{[t]:!0})[t]}
function su(e){return Dr(e,Au())}Cn(_o,"Temporal.PlainMonthDay");var mg={instant:()=>Vr(Au()),plainDateTimeISO:(e=Gi())=>Nr(
su(Zt(e)),"iso8601"),plainDateISO:(e=Gi())=>Jt(su(Zt(e)).isoDate,"iso8601"),plainTimeISO:(e=Gi())=>Sn(su(Zt(e)).time),timeZoneId:()=>Gi(),
zonedDateTimeISO:(e=Gi())=>{let t=Zt(e);return Ot(Au(),t,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(
mg,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});var Ao=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0){
let s=t===void 0?0:se(t),l=r===void 0?0:se(r),c=n===void 0?0:se(n),u=a===void 0?0:se(a),d=i===void 0?0:se(i),f=o===void 0?
0:se(o);bl(s,l,c,u,d,f),qm(this,{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f})}get hour(){return I(
this,nt),g(this,Qe).hour}get minute(){return I(this,nt),g(this,Qe).minute}get second(){return I(this,nt),g(this,Qe).second}get millisecond(){
return I(this,nt),g(this,Qe).millisecond}get microsecond(){return I(this,nt),g(this,Qe).microsecond}get nanosecond(){return I(
this,nt),g(this,Qe).nanosecond}with(t,r=void 0){if(I(this,nt),!et(t))throw new TypeError("invalid argument");oi(t);let n=yu(
t,"partial"),a=yu(this),{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Object.assign(a,n),d=Ae(K(r));
return{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=gl(i,o,s,l,c,u,d),new e(i,o,s,l,c,u)}add(t){return I(
this,nt),dm("add",this,t)}subtract(t){return I(this,nt),dm("subtract",this,t)}until(t,r=void 0){return I(this,nt),am("un\
til",this,t,r)}since(t,r=void 0){return I(this,nt),am("since",this,t,r)}round(t){if(I(this,nt),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?ka("smallestUnit",t):K(t),n=si(r),a=zr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",Rn);return li(n,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i],!1),
Sn(xu(g(this,Qe),n,i,a))}equals(t){I(this,nt);let r=Vn(t);return _u(g(this,Qe),g(r,Qe))===0}toString(t=void 0){I(this,nt);
let r=K(t),n=Po(r),a=zr(r,"trunc"),i=ur(r,"smallestUnit","time",void 0);if(i==="hour")throw new RangeError('smallestUnit\
 must be a time unit other than "hour"');let{precision:o,unit:s,increment:l}=Mo(i,n);return Kh(xu(g(this,Qe),l,s,a),o)}toJSON(){
return I(this,nt),Kh(g(this,Qe),"auto")}toLocaleString(t=void 0,r=void 0){return I(this,nt),new wr(t,r).format(this)}valueOf(){
Qn("PlainTime")}static from(t,r=void 0){return Vn(t,r)}static compare(t,r){let n=Vn(t),a=Vn(r);return _u(g(n,Qe),g(a,Qe))}};
Cn(Ao,"Temporal.PlainTime");var $o=class{constructor(t,r,n="iso8601",a=1){let i=se(t),o=se(r),s=er(n===void 0?"iso8601":
ht(n)),l=se(a);ba(i,o,l),Vm(this,{year:i,month:o,day:l},s)}get year(){return bn(this,"year")}get month(){return bn(this,
"month")}get monthCode(){return bn(this,"monthCode")}get calendarId(){return I(this,Et),g(this,M)}get era(){return bn(this,
"era")}get eraYear(){return bn(this,"eraYear")}get daysInMonth(){return bn(this,"daysInMonth")}get daysInYear(){return bn(
this,"daysInYear")}get monthsInYear(){return bn(this,"monthsInYear")}get inLeapYear(){return bn(this,"inLeapYear")}with(t,r=void 0){
if(I(this,Et),!et(t))throw new TypeError("invalid argument");oi(t);let n=g(this,M),a=Xt(n,g(this,ne),"year-month");return a=
va(n,a,Sr(n,t,["year","month","monthCode"],[],"partial")),Za(mo(n,a,Ae(K(r))),n)}add(t,r=void 0){return I(this,Et),pm("a\
dd",this,t,r)}subtract(t,r=void 0){return I(this,Et),pm("subtract",this,t,r)}until(t,r=void 0){return I(this,Et),im("unt\
il",this,t,r)}since(t,r=void 0){return I(this,Et),im("since",this,t,r)}equals(t){I(this,Et);let r=ro(t);return on(g(this,
ne),g(r,ne))===0&&nn(g(this,M),g(r,M))}toString(t=void 0){return I(this,Et),Jh(this,No(K(t)))}toJSON(){return I(this,Et),
Jh(this)}toLocaleString(t=void 0,r=void 0){return I(this,Et),new wr(t,r).format(this)}valueOf(){Qn("PlainYearMonth")}toPlainDate(t){
if(I(this,Et),!et(t))throw new TypeError("argument should be an object");let r=g(this,M);return Jt(Jn(r,va(r,Xt(r,g(this,
ne),"year-month"),Sr(r,t,["day"],[],[])),"constrain"),r)}static from(t,r=void 0){return ro(t,r)}static compare(t,r){let n=ro(
t),a=ro(r);return on(g(n,ne),g(a,ne))}};function bn(e,t){I(e,Et);let r=g(e,ne);return Do(e).isoToDate(r,{[t]:!0})[t]}Cn(
$o,"Temporal.PlainYearMonth");var qS=wr.prototype.resolvedOptions,Ro=class{constructor(t,r,n="iso8601"){if(arguments.length<
1)throw new TypeError("missing argument: epochNanoseconds is required");let a=al(t),i=ht(r),{tzName:o,offsetMinutes:s}=zn(
i);if(s===void 0){let l=el(o);if(!l)throw new RangeError(`unknown time zone ${o}`);i=l.identifier}else i=Zu(s);zm(this,a,
i,er(n===void 0?"iso8601":ht(n)))}get calendarId(){return I(this,ve),g(this,M)}get timeZoneId(){return I(this,ve),g(this,
Oe)}get year(){return Ut(this,"year")}get month(){return Ut(this,"month")}get monthCode(){return Ut(this,"monthCode")}get day(){
return Ut(this,"day")}get hour(){return Ya(this,"hour")}get minute(){return Ya(this,"minute")}get second(){return Ya(this,
"second")}get millisecond(){return Ya(this,"millisecond")}get microsecond(){return Ya(this,"microsecond")}get nanosecond(){
return Ya(this,"nanosecond")}get era(){return Ut(this,"era")}get eraYear(){return Ut(this,"eraYear")}get epochMilliseconds(){
return I(this,ve),jr(g(this,re),"floor")}get epochNanoseconds(){return I(this,ve),lg(g(this,re))}get dayOfWeek(){return Ut(
this,"dayOfWeek")}get dayOfYear(){return Ut(this,"dayOfYear")}get weekOfYear(){return Ut(this,"weekOfYear")?.week}get yearOfWeek(){
return Ut(this,"weekOfYear")?.year}get hoursInDay(){I(this,ve);let t=g(this,Oe),r=Xr(this).isoDate,n=dr(r.year,r.month,r.
day+1),a=Wn(t,r),i=Wn(t,n);return uo(Fe.fromEpochNsDiff(i,a),"hour")}get daysInWeek(){return Ut(this,"daysInWeek")}get daysInMonth(){
return Ut(this,"daysInMonth")}get daysInYear(){return Ut(this,"daysInYear")}get monthsInYear(){return Ut(this,"monthsInY\
ear")}get inLeapYear(){return Ut(this,"inLeapYear")}get offset(){return I(this,ve),vu(En(g(this,Oe),g(this,re)))}get offsetNanoseconds(){
return I(this,ve),En(g(this,Oe),g(this,re))}with(t,r=void 0){if(I(this,ve),!et(t))throw new TypeError("invalid zoned-dat\
e-time-like");oi(t);let n=g(this,M),a=g(this,Oe),i=En(a,g(this,re)),o=Xr(this),s={...Xt(n,o.isoDate),...o.time,offset:vu(
i)};s=va(n,s,Sr(n,t,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond",
"offset"],"partial"));let l=K(r),c=co(l),u=zs(l,"prefer"),d=jo(n,s,Ae(l)),f=ci(s.offset);return Ot(Xs(d.isoDate,d.time,"\
option",f,a,c,u,!1),a,n)}withPlainTime(t=void 0){I(this,ve);let r=g(this,Oe),n=g(this,M),a=Xr(this).isoDate,i;return i=t===
void 0?Wn(r,a):Nt(r,Re(a,g(Vn(t),Qe)),"compatible"),Ot(i,r,n)}withTimeZone(t){I(this,ve);let r=Zt(t);return Ot(g(this,re),
r,g(this,M))}withCalendar(t){I(this,ve);let r=Fo(t);return Ot(g(this,re),g(this,Oe),r)}add(t,r=void 0){return I(this,ve),
fm("add",this,t,r)}subtract(t,r=void 0){return I(this,ve),fm("subtract",this,t,r)}until(t,r=void 0){return I(this,ve),om(
"until",this,t,r)}since(t,r=void 0){return I(this,ve),om("since",this,t,r)}round(t){if(I(this,ve),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?ka("smallestUnit",t):K(t),n=si(r),a=zr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",Rn,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i];
if(li(n,o,o===1),i==="nanosecond"&&n===1)return Ot(g(this,re),g(this,Oe),g(this,M));let s=g(this,Oe),l=g(this,re),c=Xr(this),
u;if(i==="day"){let d=c.isoDate,f=dr(d.year,d.month,d.day+1),h=Wn(s,d),y=Wn(s,f),b=$.default.subtract(y,h);u=Fe.fromEpochNsDiff(
l,h).round(b,a).addToEpochNs(h)}else{let d=Eu(c,n,i,a),f=En(s,l);u=Xs(d.isoDate,d.time,"option",f,s,"compatible","prefer",
!1)}return Ot(u,s,g(this,M))}equals(t){I(this,ve);let r=no(t),n=g(this,re),a=g(r,re);return!!$.default.equal($.default.BigInt(
n),$.default.BigInt(a))&&!!Km(g(this,Oe),g(r,Oe))&&nn(g(this,M),g(r,M))}toString(t=void 0){I(this,ve);let r=K(t),n=No(r),
a=Po(r),i=function(f){return An(f,"offset",["auto","never"],"auto")}(r),o=zr(r,"trunc"),s=ur(r,"smallestUnit","time",void 0);
if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let l=function(f){return An(f,"\
timeZoneName",["auto","never","critical"],"auto")}(r),{precision:c,unit:u,increment:d}=Mo(s,a);return Zh(this,c,n,l,i,{unit:u,
increment:d,roundingMode:o})}toLocaleString(t=void 0,r=void 0){I(this,ve);let n=K(r),a=Object.create(null);if(function(l,c,u,d){
if(c==null)return;let f=Reflect.ownKeys(c);for(let h=0;h<f.length;h++){let y=f[h];if(!u.some(b=>Object.is(b,y))&&Object.
prototype.propertyIsEnumerable.call(c,y)){let b=c[y];l[y]=b}}}(a,n,["timeZone"]),n.timeZone!==void 0)throw new TypeError(
"ZonedDateTime toLocaleString does not accept a timeZone option");if(a.year===void 0&&a.month===void 0&&a.day===void 0&&
a.era===void 0&&a.weekday===void 0&&a.dateStyle===void 0&&a.hour===void 0&&a.minute===void 0&&a.second===void 0&&a.fractionalSecondDigits===
void 0&&a.timeStyle===void 0&&a.dayPeriod===void 0&&a.timeZoneName===void 0&&(a.timeZoneName="short"),a.timeZone=g(this,
Oe),Xh(a.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");let i=new wr(t,a),
o=qS.call(i).calendar,s=g(this,M);if(s!=="iso8601"&&o!=="iso8601"&&!nn(o,s))throw new RangeError(`cannot format ZonedDat\
eTime with calendar ${s} in locale with calendar ${o}`);return i.format(Vr(g(this,re)))}toJSON(){return I(this,ve),Zh(this,
"auto")}valueOf(){Qn("ZonedDateTime")}startOfDay(){I(this,ve);let t=g(this,Oe);return Ot(Wn(t,Xr(this).isoDate),t,g(this,
M))}getTimeZoneTransition(t){I(this,ve);let r=g(this,Oe);if(t===void 0)throw new TypeError("options parameter is require\
d");let n=An(typeof t=="string"?ka("direction",t):K(t),"direction",["next","previous"],Rn);if(n===void 0)throw new TypeError(
"direction option is required");if(Xh(r)||r==="UTC")return null;let a=g(this,re),i=n==="next"?Qu(r,a):wu(r,a);return i===
null?null:Ot(i,r,g(this,M))}toInstant(){return I(this,ve),Vr(g(this,re))}toPlainDate(){return I(this,ve),Jt(Xr(this).isoDate,
g(this,M))}toPlainTime(){return I(this,ve),Sn(Xr(this).time)}toPlainDateTime(){return I(this,ve),Nr(Xr(this),g(this,M))}static from(t,r=void 0){
return no(t,r)}static compare(t,r){let n=no(t),a=no(r),i=g(n,re),o=g(a,re);return $.default.lessThan($.default.BigInt(i),
$.default.BigInt(o))?-1:$.default.greaterThan($.default.BigInt(i),$.default.BigInt(o))?1:0}};function Xr(e){return Dr(g(
e,Oe),g(e,re))}function Ut(e,t){I(e,ve);let r=Xr(e).isoDate;return Do(e).isoToDate(r,{[t]:!0})[t]}function Ya(e,t){return I(
e,ve),Xr(e).time[t]}Cn(Ro,"Temporal.ZonedDateTime");var Ve=Object.freeze({__proto__:null,Duration:xo,Instant:ko,Now:mg,PlainDate:So,
PlainDateTime:Eo,PlainMonthDay:_o,PlainTime:Ao,PlainYearMonth:$o,ZonedDateTime:Ro}),PD=class{toTemporalInstant(){return Vr(
Yr(Date.prototype.valueOf.call(this)))}}.prototype.toTemporalInstant,VS=[ko,So,Eo,xo,_o,Ao,$o,Ro];for(let e of VS){let t=Object.
getOwnPropertyDescriptor(e,"prototype");(t.configurable||t.enumerable||t.writable)&&(t.configurable=!1,t.enumerable=!1,t.
writable=!1,Object.defineProperty(e,"prototype",t))}var Lr=oe(Le(),1);var Me=oe(Le(),1),p=oe(Le(),1),Mt=oe(Le(),1),dt=oe(Le(),1);var bv=oe(vg(),1),wv=oe(Tg(),1),Tv=oe(Sg(),1),kv=oe(xg(),1),Sv=oe(Ag(),1);var sd=class{add(t,r,n){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else
(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],r&&this[a][n?"unshift":"push"](r)},this)}run(t,r){this[t]=
this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}},ld=class{constructor(t){this.jsep=t,this.
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
tE=new sd;Object.assign(fr,{hooks:tE,plugins:new ld(fr),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"\
Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"\
UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,
PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,
SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,
"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(
["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});fr.max_unop_len=
fr.getMaxKeyLen(fr.unary_ops);fr.max_binop_len=fr.getMaxKeyLen(fr.binary_ops);var de=e=>new fr(e).parse(),rE=Object.getOwnPropertyNames(
class{});Object.getOwnPropertyNames(fr).filter(e=>!rE.includes(e)&&de[e]===void 0).forEach(e=>{de[e]=fr[e]});de.Jsep=fr;
var nE="ConditionalExpression",aE={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===
e.QUMARK_CODE){this.index++;let n=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),
this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError("Expected expression"),r.node=
{type:nE,test:n,consequent:a,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let o=n;for(;o.right.operator&&e.binary_ops[o.
right.operator]<=.9;)o=o.right;r.node.test=o.right,o.right=r.node,r.node=n}}else this.throwError("Expected :")}})}};de.plugins.
register(aE);var Cv=oe(Le(),1),ge=oe(Le(),1),yt=oe(Le(),1),Be=oe(Le(),1),Ca=oe(Le(),1),Fv=oe(Le(),1);var iE=(e,t,r)=>{if(t.length===1&&t[0]===r){let n=!1;try{let a={};e(a)===a&&(n=!0)}catch{}if(n){let a;try{throw new Error}catch(i){
({stack:a}=i)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:a})}}},oE=(e,t,r)=>{
let{memoize:n,memoizeOptions:a}=t,{inputSelectorResults:i,inputSelectorResultsCopy:o}=e,s=n(()=>({}),...a);if(!(s.apply(
null,i)===s.apply(null,o))){let c;try{throw new Error}catch(u){({stack:c}=u)}console.warn(`An input selector returned a \
different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:r,firstInputs:i,secondInputs:o,
stack:c})}},sE={inputStabilityCheck:"once",identityFunctionCheck:"once"};function lE(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function cE(e,t=`\
expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function uE(e,t="expecte\
d all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){let r=e.map(
n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var $g=e=>Array.
isArray(e)?e:[e];function dE(e){let t=Array.isArray(e[0])?e[0]:e;return uE(t,"createSelector expects all input-selectors\
 to be functions, but received the following types: "),t}function Rg(e,t){let r=[],{length:n}=e;for(let a=0;a<n;a++)r.push(
e[a].apply(null,t));return r}var pE=(e,t)=>{let{identityFunctionCheck:r,inputStabilityCheck:n}={...sE,...t};return{identityFunctionCheck:{
shouldRun:r==="always"||r==="once"&&e,run:iE},inputStabilityCheck:{shouldRun:n==="always"||n==="once"&&e,run:oE}}};var qD=Symbol();var VD=Object.getPrototypeOf({});var fE=class{constructor(e){this.value=e}deref(){return this.value}},hE=typeof WeakRef<"u"?WeakRef:fE,mE=0,Ig=1;function El(){
return{s:mE,v:void 0,o:null,p:null}}function Og(e,t={}){let r=El(),{resultEqualityCheck:n}=t,a,i=0;function o(){let s=r,
{length:l}=arguments;for(let d=0,f=l;d<f;d++){let h=arguments[d];if(typeof h=="function"||typeof h=="object"&&h!==null){
let y=s.o;y===null&&(s.o=y=new WeakMap);let b=y.get(h);b===void 0?(s=El(),y.set(h,s)):s=b}else{let y=s.p;y===null&&(s.p=
y=new Map);let b=y.get(h);b===void 0?(s=El(),y.set(h,s)):s=b}}let c=s,u;if(s.s===Ig)u=s.v;else if(u=e.apply(null,arguments),
i++,n){let d=a?.deref?.()??a;d!=null&&n(d,u)&&(u=d,i!==0&&i--),a=typeof u=="object"&&u!==null||typeof u=="function"?new hE(
u):u}return c.s=Ig,c.v=u,u}return o.clearCache=()=>{r=El(),o.resetResultsCount()},o.resultsCount=()=>i,o.resetResultsCount=
()=>{i=0},o}function gE(e,...t){let r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...a)=>{let i=0,o=0,s,l={},
c=a.pop();typeof c=="object"&&(l=c,c=a.pop()),lE(c,`createSelector expects an output function after the inputs, but rece\
ived: [${typeof c}]`);let u={...r,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:h=Og,argsMemoizeOptions:y=[],devModeChecks:b={}}=u,
T=$g(f),S=$g(y),E=dE(a),_=d(function(){return i++,c.apply(null,arguments)},...T),O=!0,D=h(function(){o++;let G=Rg(E,arguments);
if(s=_.apply(null,G),process.env.NODE_ENV!=="production"){let{identityFunctionCheck:Z,inputStabilityCheck:H}=pE(O,b);if(Z.
shouldRun&&Z.run(c,G,s),H.shouldRun){let we=Rg(E,arguments);H.run({inputSelectorResults:G,inputSelectorResultsCopy:we},{
memoize:d,memoizeOptions:T},arguments)}O&&(O=!1)}return s},...S);return Object.assign(D,{resultFunc:c,memoizedResultFunc:_,
dependencies:E,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>s,recomputations:()=>i,
resetRecomputations:()=>{i=0},memoize:d,argsMemoize:h})};return Object.assign(n,{withTypes:()=>n}),n}var k=gE(Og),yE=Object.
assign((e,t=k)=>{cE(e,`createStructuredSelector expects first argument to be an object where each property is a selector\
, instead received a ${typeof e}`);let r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((o,s,l)=>(o[r[l]]=s,
o),{}))},{withTypes:()=>yE});var Jr=oe(Le(),1);var eb=oe(ea(),1),tb=oe(ea(),1);var nb=oe(Le(),1),ab=oe(Le(),1),ob=oe(ea(),1);var pt=oe(Le(),1);var xs=oe(Le(),1);var Db=oe(Le(),1);var ce=oe(Le(),1);var Ci=oe(Le(),1);var Fa=oe(ea(),1);var lw=oe(ea(),1),PN=oe(Rl(),1),Xp=oe(Rl(),1),cw=oe(ea(),1),MN=oe(Rl(),1);var Sc=oe(Le(),1),Rt=oe(Le(),1),Q=oe(Le(),1);var N=oe(Le(),1),Aw=oe(Le(),1);var Kl=oe(vd(),1),Rw=oe(vd(),1),Ke=oe(Le(),1),U=oe(Le(),1),Ce=e=>({left:e}),Ll=Ce,R=e=>({right:e}),P=e=>"left"in e,xe=e=>"\
right"in e;var ze=e=>{if(xe(e))return e.right;throw typeof e.left=="string"?new Error(e.left):e.left},Cd=(e,t)=>xe(e)?e.right:t;var FE=()=>Ve.Now.plainDateISO(),nr=e=>e instanceof Ve.PlainDate,UE=e=>Ve.PlainDate.from(e),Hy=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/,
Zo=e=>typeof e=="string"&&Hy.test(e),Fl=(e,t)=>typeof e=="string"?/^\d{4}-\d{2}-\d{2}$/.test(e)?Ve.PlainDate.from(e).toZonedDateTime(
{timeZone:t,plainTime:{hour:0}}):Hy.test(e)?Ve.PlainDateTime.from(e).toZonedDateTime(t):e.includes("[")?Ve.ZonedDateTime.
from(e).withTimeZone(t):Ve.Instant.from(e).toZonedDateTimeISO(t):e instanceof Ve.Instant?e.toZonedDateTimeISO(t):e instanceof
Ve.ZonedDateTime?e.withTimeZone(t):e.toZonedDateTime({timeZone:t,plainTime:{hour:0}});var BE=(e,t)=>Ve.PlainDate.compare(e,t);var Wy=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],HE=["Sun","Mon","Tue","Wed","Thu","Fri",
"Sat"],zd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bd=["January","February","March","Ap\
ril","May","June","July","August","September","October","November","December"],Nd=(e,t)=>{let r=e.toPlainDate(),n=t.toPlainDate();
return r.since(n,{largestUnit:"days"}).days},qy=e=>{let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||
t[0]}`},Gg=e=>Wy[e.dayOfWeek%7],wi=e=>`${qy(e.day)} ${zd[e.month-1]}`,as=e=>`${qy(e.day)} ${zd[e.month-1]} ${e.year}`,WE=Lr.union(
[Lr.literal("weekdayShort"),Lr.literal("dayOfMonth"),Lr.literal("weekdayLong"),Lr.literal("fullDate"),Lr.literal("monthL\
ong"),Lr.literal("monthShort"),Lr.literal("monthNumber"),Lr.literal("year"),Lr.literal("monthYear")]),qE=(e,t,r={})=>{try{
return VE(e,t,r)}catch{return String(e)}},VE=(e,t,r={})=>{var n;let a=(n=r.timeZone)!=null?n:"Europe/London",i=Fl(e,a);switch(t){case"\
weekdayShort":return HE[i.dayOfWeek%7];case"dayOfMonth":return String(i.day);case"weekdayLong":return Wy[i.dayOfWeek%7];case"\
fullDate":return`${bd[i.month-1]} ${i.day}, ${i.year}`;case"monthLong":return bd[i.month-1];case"monthShort":return zd[i.
month-1];case"monthNumber":return String(i.month);case"year":return String(i.year);case"monthYear":return`${bd[i.month-1]}\
 ${i.year}`}},Ml=e=>e.slice(11,16),Jg=(e,t,r)=>{if(t===0)return"today";if(t>0)return t===1?"tomorrow":t<7?`on ${Gg(e)}`:
t<=14?`${Gg(e)} ${wi(e)}`:e.year===r.year?wi(e):as(e);let n=-t;return n===1?"yesterday":n<7?`${n} days ago`:n<14?"1 week\
 ago":n<22?`${Math.floor(n/7)} weeks ago`:e.year===r.year?wi(e):as(e)},Pd=(e,t={})=>{try{return YE(e,t)}catch{return String(
e)}},YE=(e,t={})=>{var r,n;let a=(r=t.timeZone)!=null?r:"Europe/London",i=(n=t.now)!=null?n:Ve.Now.zonedDateTimeISO(a),o=Fl(
e,a),s=Nd(o,i);if(Zo(e))return`${Jg(o,s,i)}, ${Ml(e)}`;if(s>0)return Jg(o,s,i);let l=Math.abs(o.epochMilliseconds-i.epochMilliseconds),
c=Math.floor(l/1e3),u=Math.floor(c/60),d=Math.floor(u/60),f=Math.floor(d/24),h=Math.floor(f/7);return c<45?"just now":c<
90?"1 minute ago":u<45?`${u} minutes ago`:u<90?"1 hour ago":d<6?`${Math.round(u/60)} hours ago`:s===0?"today":f<2?"yeste\
rday":f<7?`${f} days ago`:f<14?"1 week ago":f<22?`${h} weeks ago`:o.year===i.year?`${wi(o)}`:`${as(o)}`},zE=(e,t,r={})=>{
try{return KE(e,t,r)}catch{return t?`${String(e)} \u2013 ${String(t)}`:String(e)}},KE=(e,t,r={})=>{var n,a;let i=(n=r.timeZone)!=
null?n:"Europe/London",o=(a=r.now)!=null?a:Ve.Now.zonedDateTimeISO(i),s=Fl(e,i);if(!t)return Pd(e,r);let l=Fl(t,i);if(Nd(
l,s)===0){let O=Pd(e,r);return Zo(e)&&Zo(t)?`${O}\u2013${Ml(t)}`:O}let c=Math.abs(Nd(l,s))+1,u=c===1?"1 day":`${c} days`,
d=s.year,f=l.year,h=o.year,y=d!==h||d!==f,b=f!==h||d!==f,T=Zo(e)?`, ${Ml(e)}`:"",S=Zo(t)?`, ${Ml(t)}`:"",E=y?as(s):wi(s),
_=b?as(l):wi(l);return`${u}, from ${E}${T} to ${_}${S}`},GE=(e,t,r,n)=>{let a=JE(e),i=XE(t),o=tx(n);if(!a||!i||!o||typeof r!=
"string")return;let s;try{s=a.toZonedDateTimeISO(r).toPlainDate()}catch{return}for(let l=0;l<=7;l++){let c=s.add({days:l});
if(!o.has(c.dayOfWeek))continue;let u=c.toZonedDateTime({timeZone:r,plainTime:i}).toInstant().epochMilliseconds;if(u>a.epochMilliseconds)
return u}},JE=e=>{try{if(typeof e=="number")return Number.isFinite(e)?Ve.Instant.fromEpochMilliseconds(e):void 0;if(typeof e==
"string")return Ve.Instant.from(e)}catch{}},ZE=/^([01]\d|2[0-3]):([0-5]\d)$/,XE=e=>{let t=typeof e=="string"?ZE.exec(e):
null;return t?new Ve.PlainTime(Number(t[1]),Number(t[2])):void 0},QE={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7},ex=new Set(
[1,2,3,4,5,6,7]),tx=e=>{if(e==null)return ex;if(typeof e!="string")return;let t=e.split(",").map(n=>n.trim().toLowerCase()).
filter(n=>n.length>0);if(t.length===0)return;let r=new Set;for(let n of t){let a=QE[n];if(a===void 0)return;r.add(a)}return r};var rx=(e,t)=>Yi(e)?e(t):e,ts=()=>!0,nx=e=>e instanceof Error,ax=e=>nx(e)?e.message:String(e),ix=e=>e===void 0?[]:Array.
isArray(e)?e:[e];var ta=(e,t)=>e===t?0:e===void 0?1:t===void 0?-1:nr(e)&&nr(t)?Ve.PlainDate.compare(e,t):typeof e=="number"&&typeof t=="n\
umber"?e-t:typeof e=="string"&&typeof t=="string"?e.localeCompare(t):String(e).localeCompare(String(t));var Vy={};var ue=e=>tt.union([e,tt.undefined]),Ie=ue(tt.boolean),F=ue(tt.string),mr=ue(tt.number),Nn=tt.record(tt.string,tt.unknown),
ox=tt.array(Nn),sx=tt.record(tt.string,tt.string),oj=tt.record(tt.string,tt.boolean);var lx=De.intersection([De.type({version:De.number,verticalId:De.string,answers:Nn,derived:De.type({entities:De.array(De.string),
features:De.array(De.string)})}),De.partial({notes:De.string})]),cx=De.keyof({clone:null,orgGen:null,orgGenHighRisk:null}),
ux=De.type({id:De.string,label:De.string,weight:De.number,triggered:De.boolean}),dx=De.type({score:De.number,factors:De.array(
ux),strategy:cx}),sj=De.intersection([lx,De.type({risk:dx})]);var px=function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.
slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};function fx(e){return e}function Yy(e,t,r,n,a,i,o,s,l){
switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(
n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:
return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}
var Kd=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,px([a],n,!1))}}},hx=function(e){return e._tag==="L\
eft"},mx=function(e){return e._tag==="Right"};var gx=function(e){return{_tag:"Right",right:e}};function zy(e){return function(t,r){return e.map(t,function(){return r})}}
function yx(e){var t=zy(e);return function(r){return t(r,void 0)}}function vx(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}var Ky=gx,bx=Kd(2,function(e,t){return Ul(e)?e:t(e.right)}),Gy=function(e,t){return Yy(e,Tx(t))},wx=function(e,t){return Yy(
e,Sx(t))},Gd="Either",Tx=function(e){return function(t){return Ul(t)?t:Ky(e(t.right))}},Jy={URI:Gd,map:Gy},lj=Kd(2,zy(Jy)),
cj=yx(Jy),kx=function(e){return function(t){return Ul(t)?t:Ul(e)?e:Ky(t.right(e.right))}},Sx=kx,Ex={URI:Gd,map:Gy,ap:wx,
chain:bx},xx={URI:Gd,fromEither:fx},Ul=hx,_x=mx;var uj=Kd(2,vx(Ex)),dj={fromEither:xx.fromEither},cn=e=>Mt.union([e,Mt.array(e)]),$e=e=>{let t=r=>typeof r=="string";return new Mt.Type(
`lax(${e.name})`,t,(r,n)=>t(r)?Mt.success(r):Mt.failure(r,n),Mt.identity)};function Md(e){return e.length===0?"":e[0].context.map(r=>r.key).filter(Boolean).join(".")}function Ax(e){if(e.length===
0)return"No errors";if(e.length===1){let a=e[0],i=Md(e);return`Invalid value${i?` at ${i}`:""}: ${a.message||a.value}`}let t={};
e.forEach(a=>{let i=Md([a]);t[i]||(t[i]=[]),t[i].push(a)});let r=Object.keys(t).length,n=e.length;return`${n} validation\
 error${n>1?"s":""} in ${r} location${r>1?"s":""}`}var $x=dt.type({type:dt.literal("static"),name:dt.string,value:dt.unknown}),Rx=dt.type({type:dt.literal("dynamic"),name:dt.string,
formula:dt.string}),Gl=dt.recursion("pluginParam",()=>dt.union([$x,Rx,dt.type({type:dt.literal("complex"),params:dt.array(
Gl)})])),Bl=e=>e?.dataType!==void 0,Ix=$e(p.union([p.literal("embedded"),p.literal("storage"),p.literal("realtime"),p.literal(
"callable")])),Ox=$e(p.union([p.literal("list"),p.literal("value")])),Zy=$e(p.union([p.literal("public"),p.literal("priv\
ate")])),Cx=$e(p.union([p.literal("columns"),p.literal("grid"),p.literal("spatial"),p.literal("flow")])),Nx=$e(p.union([
p.literal("x"),p.literal("y")])),Px=$e(p.union([p.literal("jpeg"),p.literal("png"),p.literal("webp")])),Jl=$e(p.union([p.literal(
"small"),p.literal("medium")])),Xy=$e(p.union([p.literal("inline"),p.literal("masterDetail")])),Qy=$e(p.union([p.literal(
"basic"),p.literal("multiline"),p.literal("stringArray")])),Jd=$e(p.union([p.literal("none"),p.literal("uppercase"),p.literal(
"lowercase")])),Mx=$e(p.union([p.literal("image"),p.literal("file"),p.literal("video"),p.literal("audio")])),ev=$e(p.union(
[p.literal("integer"),p.literal("slider"),p.literal("decimal"),p.literal("money"),p.literal("intArray")])),Zd=$e(p.union(
[p.literal("date"),p.literal("datetime"),p.literal("time")])),Dx=$e(p.union([p.literal("single"),p.literal("multiple")])),
Xd=$e(p.union([p.literal("select"),p.literal("radio"),p.literal("combobox")])),tv=$e(p.union([p.literal("global"),p.literal(
"user"),p.literal("variant"),p.literal("group"),p.literal("all"),p.literal("inbox")])),rv=$e(p.union([p.literal("light"),
p.literal("dark")])),Qd=$e(p.union([p.literal("setUserProfile"),p.literal("triggerWorldcupSync"),p.literal("socialFollow"),
p.literal("socialUnfollow"),p.literal("socialLike"),p.literal("socialUnlike"),p.literal("kickFromHome")])),jx=$e(p.union(
[p.literal("contained"),p.literal("outlined"),p.literal("text"),p.literal("menu"),p.literal("pill")])),Lx=$e(p.union([p.literal(
"musicgen"),p.literal("minimax-music-2.5")])),Fx=$e(p.literal("gpt-4o-transcribe")),Ux=$e(p.union([p.literal("flux-schne\
ll"),p.literal("nano-banana-2")])),Zl=$e(p.union([p.literal("claude-haiku-5-5"),p.literal("claude-haiku-4-5"),p.literal(
"claude-sonnet-5")])),Bx=$e(p.union([p.literal("none"),p.literal("menu"),p.literal("tabs")])),Hx=$e(p.union([p.literal("\
onWrite"),p.literal("onTimer")])),Wx=$e(p.union([p.literal("repeat"),p.literal("once"),p.literal("grid")])),nv=$e(p.union(
[p.literal("tiles"),p.literal("bar"),p.literal("audioOnly"),p.literal("minimal")])),ep=$e(p.union([p.literal("video"),p.literal(
"audio")])),qx=$e(p.union([p.literal("anyone"),p.literal("admins")])),Vx=$e(p.literal("Person")),pj=$e(p.union([p.literal(
"variable"),p.literal("text"),p.literal("number"),p.literal("boolean"),p.literal("temporal"),p.literal("parentRef"),p.literal(
"image"),p.literal("imageUpload")])),fj=$e(p.union([p.literal("id"),p.literal("type"),p.literal("_scope"),p.literal("cre\
atedAt"),p.literal("updatedAt"),p.literal("createdBy"),p.literal("updatedBy"),p.literal("createdByUid"),p.literal("updat\
edByUid"),p.literal("isDeleted"),p.literal("_parent")])),Yx=$e(p.union([p.literal("tabGroup"),p.literal("tab"),p.literal(
"folder")])),zx=$e(p.union([p.literal("aiQuery"),p.literal("aiChat"),p.literal("fetchData"),p.literal("imageGeneration"),
p.literal("audioGeneration"),p.literal("transcribe"),p.literal("publishData"),p.literal("script")])),Kx=p.partial({field:p.string,
direction:p.union([p.literal("asc"),p.literal("desc")])}),Gx=p.partial({startField:p.string,endField:p.string,axis:p.string,
mode:Wx,slots:p.string}),av=p.partial({label:p.string,onPublishType:p.string,enabled:p.boolean,titleTemplate:p.string,bodyTemplate:p.string,
clickPath:p.string,onCreate:p.boolean,onUpdate:p.boolean,onDelete:p.boolean,condition:p.string}),iv=p.partial({label:p.string,
enabled:p.boolean,trigger:Hx,watchType:p.string,onDelete:p.boolean,targetType:p.string,targetId:p.string,condition:p.string,
next:p.string,rejectionReason:p.string,notifyTurnUidField:p.string,notifyTitleTemplate:p.string,notifyBodyTemplate:p.string,
notifyClickPath:p.string,notifyTo:p.string,notifyTitle:p.string,notifyBody:p.string,notifyKey:p.string,notifyClickVariant:p.string,
smsTo:p.string,smsBody:p.string,smsPrivateType:p.string,smsReadUids:p.string,dueAt:p.string,nextPrivate:p.string,privateType:p.string,
privateReadUids:p.string,endOfLife:p.boolean,archive:p.boolean,archiveType:p.string,archiveData:p.string,archiveId:p.string,
perpetual:p.boolean,seed:p.string}),ov=p.partial({label:p.string,enabled:p.boolean,watchType:p.string,moveType:p.string,
isBotTurn:p.string,privateType:p.string,privateKey:p.string,privateReady:p.string,state:p.string,questions:p.string,moveId:p.string,
move:p.string,fallbackMove:p.string,delayMs:p.union([p.number,p.string]),maxDecisions:p.number,maxDailyDecisions:p.number,
journal:p.boolean}),Jx=p.partial({functionName:p.string,args:p.string}),sv=p.partial({dataType:p.string,scope:tv,groupKey:p.string}),
tp=p.partial({maxColumns:p.number,columnBreaks:p.array(p.number),axis:Nx,mode:Cx,minColumnWidth:p.number,columnWeights:p.array(
p.number),cols:p.union([p.number,p.string]),rows:p.union([p.number,p.string]),rowHeight:p.number}),rp=p.partial({x:p.union(
[p.number,p.string]),y:p.union([p.number,p.string]),w:p.union([p.number,p.string]),h:p.union([p.number,p.string])}),np=p.partial(
{marginBottom:p.number,justifySelf:p.union([p.literal("left"),p.literal("center"),p.literal("right")]),overlay:p.union([
p.literal("topLeft"),p.literal("topRight"),p.literal("bottomLeft"),p.literal("bottomRight")]),overlayInset:p.number,overlayWidth:p.number,
maxWidth:p.number}),Zx=p.partial({width:p.number,height:p.number}),ap=p.partial({bg:p.string,surface:p.string,accent:p.string,
text:p.string,mutedText:p.string,border:p.string}),lv=p.type({style:Bx}),ip=p.intersection([Zx,p.partial({format:Px})]),
op=p.type({expression:p.string,errorMessage:p.string}),Xx=p.intersection([p.type({id:p.string,label:p.string}),p.partial(
{group:p.string})]),cv=p.union([p.string,Xx]),uv=p.intersection([p.type({allowedChildTypes:p.array(p.string)}),p.partial(
{icon:p.string,color:p.string,category:p.string,label:p.string,labelField:p.string,detail:p.string,badge:p.string,badgeColor:p.string,
lockedFields:p.union([p.string,p.array(p.string)]),canEdit:p.union([p.boolean,p.string])})]),Xl=p.intersection([p.type({
type:p.string}),p.partial({id:p.string})]),Qx=p.union([ev,p.undefined]),e_=p.type({x:p.number,y:p.number}),t_=p.type({rotation:p.number,
zoom:p.number,pan:e_}),dv=p.intersection([p.type({name:p.string}),p.partial({url:p.string,ext:p.string,aiPrompt:p.string,
previewUrl:p.string,editState:t_,takenAt:p.string})]),r_=p.intersection([p.type({name:p.string}),p.partial({url:p.string,
ext:p.string,previewUrl:p.string,takenAt:p.string})]),n_=p.union([dv,p.array(r_)]),a_=p.intersection([p.type({title:p.string}),
p.partial({body:p.string,ok:p.string,cancel:p.string,destructive:p.boolean,info:p.boolean})]),pv=p.partial({params:p.array(
p.string),script:p.string,confirm:a_}),i_=p.partial({type:p.string,idField:p.string}),fv=p.partial({name:p.string,type:p.string,
isList:p.boolean,multiline:p.boolean,variant:p.string,compute:p.string,isTransient:p.boolean,description:p.string,fileNameFormula:p.string,
aiEnabled:p.boolean,aiSystemPromptFormula:p.string,searchFormula:p.string}),o_=p.intersection([p.type({name:p.string,fields:p.array(
fv)}),p.partial({icon:p.string,parent:i_,writeAccess:qx,wellKnown:Vx})]),hv=p.intersection([p.type({id:p.string,version:p.number,
hash:p.string}),p.partial({omitted:p.array(p.string)})]),s_=p.intersection([p.type({name:p.string,node:p.string,kind:Ox}),
p.partial({default:p.string})]),l_=p.type({name:p.string,slot:p.string,fn:p.string,hostType:p.string}),mv=p.intersection(
[p.type({id:p.string,version:p.number}),p.partial({hash:p.string,slots:p.array(s_),seams:p.array(l_)})]),_i=p.partial({dataType:p.string,
sort:cn(Kx),whereClause:p.string,source:Ix,scope:tv,groupKey:p.string,callable:Jx,span:Gx}),c_=p.intersection([p.type({name:p.string,
type:p.string}),p.partial({actionLabel:p.string,actionMenu:p.union([p.boolean,p.string]),actions:p.record(p.string,pv),aiEnabled:p.boolean,
aiSystemPromptFormula:p.string,appLogo:p.string,args:p.string,audioSourceUrl:p.string,authDescription:p.string,authMode:Zy,
authTitle:p.string,autoAdvance:p.boolean,botActors:cn(ov),canAdd:p.union([p.boolean,p.string]),canEdit:p.union([p.boolean,
p.string]),collapsedByDefault:p.union([p.boolean,p.string]),collapsible:p.union([p.boolean,p.string]),color:p.string,compute:p.unknown,
containerStyle:np,contentMaxWidth:p.number,customCss:p.string,data:_i,deepHelp:p.string,displayMode:nv,displayName:p.string,
durationSec:p.union([p.number,p.string]),examples:p.array(p.string),feature:mv,fetchUrl:p.string,focusIdentity:p.string,
format:p.union([Zd,p.string]),formConfig:sv,functionName:Qd,headerLogo:p.string,help:p.string,hidden:p.union([p.boolean,
p.string]),hideHeader:p.union([p.boolean,p.string]),hideNav:p.union([p.boolean,p.string]),hideTopBar:p.union([p.boolean,
p.string]),htmlTemplate:p.string,icon:p.string,identity:p.string,idiom:p.union([Xd,p.string]),idleDescription:p.string,idleTitle:p.string,
imageOutputOptions:ip,imageSource:p.string,inputPlaceholder:p.string,isDerived:p.boolean,isOwnScope:p.boolean,isRecord:p.boolean,
isRepeating:p.boolean,isTransient:p.boolean,itemLabel:p.string,iterationLabel:p.string,label:p.string,language:p.string,
layout:tp,library:hv,lyrics:p.string,max:p.union([p.number,p.string]),maxLength:p.union([p.number,p.string]),maxSizeMb:p.union(
[p.number,p.string]),maxTiles:p.union([p.number,p.string]),maxUserTurns:p.number,mediaMode:ep,min:p.union([p.number,p.string]),
mockAudioUrl:p.string,mockEnabled:p.boolean,mockImageUrl:p.string,mockReplies:p.string,mockResultCount:p.number,mockResults:p.string,
mockTranscript:p.string,model:p.union([Zl,p.string]),multiple:p.boolean,navigation:lv,noCreditsDescription:p.string,noCreditsTitle:p.string,
nodeTypes:p.record(p.string,uv),notifications:cn(av),nounLabel:p.string,onSuccessNavigate:p.string,orderField:p.string,orgLogin:p.boolean,
pageSize:p.union([p.number,p.string]),parameters:p.string,pickerValues:p.union([p.string,p.array(cv)]),place:rp,placeholder:p.string,
placeholderIcon:p.string,pluginName:p.string,pluginParams:p.array(Gl),prompt:p.string,promptTemplate:p.string,publishDataType:p.string,
publishScope:p.string,publishVariant:p.string,purpose:p.string,recordKey:p.string,recordValue:p.string,refreshCallables:p.array(
p.string),reorderable:p.union([p.boolean,p.string]),required:p.union([p.boolean,p.string]),resultObjectType:p.string,returns:p.string,
returnTypeHint:p.string,roomKey:p.string,rootType:p.string,runningDescription:p.string,runningTitle:p.string,script:p.string,
showCamera:p.boolean,showCommit:p.boolean,showEdit:p.boolean,showFilePicker:p.boolean,showHeader:p.union([p.boolean,p.string]),
showSearch:p.boolean,size:Jl,sourceExpression:p.string,speakReplies:p.boolean,speechLang:p.string,steeringChips:p.string,
step:p.union([p.number,p.string]),submitObjectType:p.string,successMessage:p.string,summary:p.string,textTransform:Jd,theme:rv,
themeColors:ap,transitions:cn(iv),typeDescription:p.string,userAvatarUid:p.string,validation:cn(op),value:p.unknown,variant:p.string,
voiceInput:p.boolean})]),hj=Me.type({verticalId:Me.string,title:Me.string,entities:Me.array(Me.string),seedSlots:Me.array(
Me.string),labels:Me.array(Me.string)}),u_=Me.keyof({light:null,dark:null}),d_=Me.partial({labels:Me.record(Me.string,Me.string),
theme:Me.partial({preset:u_,colors:ap}),entityRenames:Me.record(Me.string,Me.string),seedSlots:Me.array(Me.string)}),mj=Me.intersection(
[Me.type({appName:Me.string}),d_]),sp={dataSourceType:["embedded","storage","realtime","callable"],featureSlotKind:["lis\
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
"createdAt","updatedAt","createdBy","updatedBy","createdByUid","updatedByUid","isDeleted","_parent"]};var gv=new Set(sp.fieldTypeBuiltin),p_=e=>gv.has(e),gj=sp.fieldTypeBuiltin.filter(p_);var f_=e=>{if(typeof e!="string")return[];let t=[];for(let r of e.split(",")){let n=r.trim();if(!n)continue;let a=n.indexOf(
":");if(a===-1){t.push({name:n});continue}let i=n.slice(0,a).trim(),o=n.slice(a+1).trim();i&&t.push(o?{name:i,type:o}:{name:i})}
return t},Zg=e=>f_(e).map(t=>t.name),h_="__interp";var Ql="app",Ai="appNode",hr="tree",is="screen",ec="form",hs="flow",Ur="flowStep",tc="repeat",rc="callableButton";var Ia="content",ms="textInput",gs="numberInput",$i="variable",aa="function",ia="const",ys="booleanInput",vs="temporalIn\
put",bs="selectInput",Ri="fileInput",lp="pluginLeaf",cp="mediaRoom",m_="videoRoom",ws="subsection",g_=["app","appNode","\
booleanInput","callableButton","const","content","fileInput","flow","flowStep","form","function","mediaRoom","numberInpu\
t","pluginLeaf","repeat","screen","selectInput","subsection","temporalInput","textInput","tree","variable"],y_=["appNode\
:folder","appNode:tab","appNode:tabGroup","flowStep:aiChat","flowStep:aiQuery","flowStep:audioGeneration","flowStep:fetc\
hData","flowStep:imageGeneration","flowStep:publishData","flowStep:script","flowStep:transcribe"],up={aiChat:{type:"flow\
Step",variant:"aiChat"},aiQuery:{type:"flowStep",variant:"aiQuery"},audioGeneration:{type:"flowStep",variant:"audioGener\
ation"},fetchData:{type:"flowStep",variant:"fetchData"},folder:{type:"appNode",variant:"folder"},imageGeneration:{type:"\
flowStep",variant:"imageGeneration"},publishData:{type:"flowStep",variant:"publishData"},script:{type:"flowStep",variant:"\
script"},tab:{type:"appNode",variant:"tab"},tabGroup:{type:"appNode",variant:"tabGroup"},transcribe:{type:"flowStep",variant:"\
transcribe"}},v_={form:["formConfig"],callableButton:["functionName","name"],tree:["nodeTypes","rootType"],variable:["na\
me"],function:["name"],const:["name","value"],mediaRoom:["roomKey"]},b_={form:{since:"2026-10",use:"inputs on a screen o\
r flow screen, saved by `publishData` / `updateData` in a script"}},w_={appNode:{submitObjectType:{since:"2026-10",use:"\
a declared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},
"appNode:folder":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishDa\
ta({type, data: {...}})` with the inputs named explicitly"}},"appNode:tab":{submitObjectType:{since:"2026-10",use:"a dec\
lared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},"\
appNode:tabGroup":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishD\
ata({type, data: {...}})` with the inputs named explicitly"}},screen:{submitObjectType:{since:"2026-10",use:"a declared \
action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},subsection:{
submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishData({type, data: {.\
..}})` with the inputs named explicitly"}}},T_={objectTypeField:{isList:{since:"2026-10",use:'`type: "list<T>"`'},multiline:{
since:"2026-10",use:'`variant: "multiline"` on a text field'}}},yv={list:"subsection",videoRoom:"mediaRoom"},k_=e=>{var t;
return(t=yv[e])!=null?t:e};var vv=e=>{var t;return(t=up[e])!=null?t:{type:e}};var yj=Object.fromEntries(Object.entries(up).map(([e,t])=>[`${t.type}:${t.variant}`,e]));var Xg="MatchExpression",Qg="MatchArm",Dd="->",ey=123,ty=125,S_=44,E_=e=>e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||e===
36||e===95||e>=128,fi=e=>e.code,wd=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",x_=(e,t)=>{if(wd(t)&&t.type===
"ConditionalExpression"){let r=t.test;if(wd(r)&&r.type==="BinaryExpression"&&r.operator===Dd)return{type:Qg,test:r.left,
consequent:{type:"ConditionalExpression",test:r.right,consequent:t.consequent,alternate:t.alternate}}}return wd(t)&&t.type===
"BinaryExpression"&&t.operator===Dd?{type:Qg,test:t.left,consequent:t.right}:e.throwError("Expected `condition -> expres\
sion` in match block")},__={name:"orgigglyMatch",init(e){e.addBinaryOp(Dd,.5),e.hooks.add("gobble-token",function(r){if(this.
gobbleSpaces(),!this.expr.startsWith("match",this.index))return;let n=this.index+5;if(n<this.expr.length&&E_(this.expr.charCodeAt(
n)))return;let a=this.index;this.index=n,this.gobbleSpaces();let i;if(fi(this)!==ey){let s=!1;try{s=this.gobbleExpression()}catch{
s=!1}if(this.gobbleSpaces(),!s||fi(this)!==ey){this.index=a;return}i=s}this.index++;let o=[];for(;;){if(this.gobbleSpaces(),
fi(this)===ty){this.index++;break}Number.isNaN(fi(this))&&this.throwError("Unclosed match block \u2014 expected `}`");let s=this.
gobbleExpression();if(s||this.throwError("Expected `condition -> expression` in match block"),o.push(x_(this,s)),this.gobbleSpaces(),
fi(this)===S_){this.index++;continue}if(fi(this)===ty){this.index++;break}this.throwError("Expected `,` or `}` after mat\
ch arm")}o.length===0&&this.throwError("A match block needs at least one arm"),r.node=i?{type:Xg,scrutinee:i,arms:o}:{type:Xg,
arms:o}})}},ry="LetExpression",ny=61,A_=62,Ev=e=>e>=65&&e<=90||e>=97&&e<=122||e===36||e===95||e>=128,ay=e=>Ev(e)||e>=48&&
e<=57,Td=e=>e.code,$_=e=>e,Vo=e=>e,R_=new Set(["??","||"]),hi=e=>{let t=$_(e);if(t.type==="BinaryExpression"&&t.operator===
";"){let[r,n]=hi(t.left),a=n?Vo({type:"BinaryExpression",operator:";",left:n,right:t.right}):t.right;return[r,a]}if(t.type===
"BinaryExpression"&&R_.has(String(t.operator))){let[r,n]=hi(t.left);return n?[r,Vo({...t,left:n})]:[e,void 0]}if(t.type===
"ConditionalExpression"){let[r,n]=hi(t.test);if(n)return[r,Vo({...t,test:n})];let[a,i]=hi(t.alternate);return i?[Vo({...t,
alternate:a}),i]:[e,void 0]}if(t.type==="ArrowFunctionExpression"){let[r,n]=hi(t.body);return n?[Vo({...t,body:r}),n]:[e,
void 0]}return[e,void 0]},I_={name:"orgigglyLet",init(e){e.hooks.add("gobble-token",function(r){if(this.gobbleSpaces(),!this.
expr.startsWith("let",this.index))return;let n=this.index+3;if(n<this.expr.length&&ay(this.expr.charCodeAt(n)))return;let a=this.
index;this.index=n,this.gobbleSpaces();let i=this.index;if(!Ev(Td(this))){/^[^\s=]+\s*=(?![=>])/.test(this.expr.slice(this.
index))&&this.throwError("Expected a name after let"),this.index=a;return}for(;ay(Td(this));)this.index++;let o=this.expr.
slice(i,this.index);if(this.gobbleSpaces(),Td(this)!==ny){this.index=a;return}let s=this.expr.charCodeAt(this.index+1);if(s===
ny||s===A_){this.index=a;return}this.index++;let l=this.gobbleExpression();l||this.throwError(`Expected an initialiser a\
fter let ${o} =`);let[c,u]=hi(l);r.node=u?{type:ry,id:o,init:c,body:u}:{type:ry,id:o,init:c}})}},rs=e=>e,os=e=>typeof e==
"object"&&e!==null&&typeof e.type=="string",dp=(e,t)=>e.type==="BinaryExpression"&&e.operator===t,O_=new Set(["||","&&",
"??"]),yi=(e,t,r)=>({type:"BinaryExpression",operator:e,left:t,right:r}),jd=e=>{if(dp(e,";")){let[t,r]=jd(rs(e.left));return[
t,r?yi(";",r,e.right):rs(e.right)]}if(e.type==="ConditionalExpression"){let[t,r]=jd(rs(e.alternate));return r?[{...e,alternate:t},
r]:[e]}return[e]},Ld=(e,t)=>{if(!dp(e,";"))return t(e);let r=Ld(rs(e.right),t);return r?yi(";",e.left,r):void 0},iy=e=>dp(
e,"=")?e:void 0,Fd=e=>{if(e.type==="BinaryExpression"&&O_.has(String(e.operator))&&os(e.left)){let t=String(e.operator),
r=Ld(e.left,n=>{let a=iy(n);return a?yi("=",a.left,Fd(yi(t,a.right,e.right))):void 0});if(r)return r}if(e.type==="Condit\
ionalExpression"&&os(e.test)){let[t,r]=jd(rs(e.alternate)),n=Ld(e.test,a=>{let i=iy(a);return i?yi("=",i.left,Fd({...e,test:i.
right,alternate:t})):void 0});if(n)return r?yi(";",n,r):n}return e},Ud=e=>{let t={...e};for(let r of Object.keys(e)){if(r===
"parent")continue;let n=e[r];os(n)?t[r]=Ud(n):Array.isArray(n)&&(t[r]=n.map(a=>os(a)?Ud(a):a))}return Fd(t)},C_={name:"o\
rgigglyAssign",init(e){e.hooks.add("after-all",function(r){os(r.node)&&(r.node=Ud(r.node))})}},N_=()=>{de._orgigglyTemplatePluginRegistered||
(de.plugins.register(Sv.default),de._orgigglyTemplatePluginRegistered=!0),de._orgigglyObjectPluginRegistered||(de.plugins.
register(wv.default),de._orgigglyObjectPluginRegistered=!0),de._orgigglyRegexPluginRegistered||(de.plugins.register(Tv.default),
de._orgigglyRegexPluginRegistered=!0),de._orgigglySpreadPluginRegistered||(de.plugins.register(kv.default),de._orgigglySpreadPluginRegistered=
!0),de._orgigglyArrowPluginRegistered||(de.plugins.register(bv.default),de._orgigglyArrowPluginRegistered=!0),de._orgigglyAtUnaryRegistered||
(de.addUnaryOp("@"),de._orgigglyAtUnaryRegistered=!0),de._orgigglysemicolonRegistered||(de.addBinaryOp(";",1),de._orgigglysemicolonRegistered=
!0),de._orgigglyAssignmentRegistered||(de.addBinaryOp("=",2,!0),de._orgigglyAssignmentRegistered=!0),de._orgigglyNullishCoalescingRegistered||
(de.addBinaryOp("??",1),de._orgigglyNullishCoalescingRegistered=!0),de._orgigglyMatchPluginRegistered||(de.plugins.register(
__),de._orgigglyMatchPluginRegistered=!0),de._orgigglyLetPluginRegistered||(de.plugins.register(I_),de._orgigglyLetPluginRegistered=
!0),de._orgigglyAssignPluginRegistered||(de.plugins.register(C_),de._orgigglyAssignPluginRegistered=!0)};N_();var Hl=e=>e.
type==="Literal",Ti=e=>e.type==="BinaryExpression",nc=e=>e.type==="CallExpression",_r=e=>e.type==="Identifier",ss=e=>e.type===
"MemberExpression",xv=e=>e.type==="ThisExpression",_v=e=>e.type==="UnaryExpression",pp=e=>e.type==="ConditionalExpressio\
n";var P_=e=>e.type==="Compound",Av=e=>e.type==="ArrayExpression",$v=e=>e.type==="TemplateLiteral",M_=e=>e.type==="TaggedTe\
mplateExpression",Rv=e=>e.type==="ObjectExpression",oy=e=>e&&e.type==="SpreadElement",Iv=e=>e.type==="ArrowFunctionExpre\
ssion",D_=e=>e.type==="MatchExpression",Ov=e=>e.type==="LetExpression",sy=e=>typeof e=="object"&&e!==null&&"type"in e,j_=e=>{
let t=e;for(;t.parent;)t=t.parent;let r=t._source;return r||""},L_=e=>j_(e).slice(e.start,e.end),mt=(e,t,r,n)=>{let a=e;
if(a.parent=n,_r(e)){let i=t.indexOf(e.name,r),o=i+e.name.length;return a.start=i,a.end=o,{start:i,end:o}}if(Hl(e)){let i=e.
raw;if(i){let c=t.indexOf(i,r),u=c+i.length;return a.start=c,a.end=u,{start:c,end:u}}let o=String(e.value),s=t.indexOf(o,
r),l=s+o.length;return a.start=s,a.end=l,{start:s,end:l}}if(Ti(e)){let i=mt(e.left,t,r,a),o=mt(e.right,t,i.end,a);return a.
start=i.start,a.end=o.end,{start:i.start,end:o.end}}if(_v(e)){let i=t.indexOf(e.operator,r),o=mt(e.argument,t,i+e.operator.
length,a);return a.start=i,a.end=o.end,{start:i,end:o.end}}if(nc(e)){let i=mt(e.callee,t,r,a),o=i.end;for(let c of e.arguments)
o=mt(c,t,o,a).end;let l=t.indexOf(")",o)+1;return a.start=i.start,a.end=l,{start:i.start,end:l}}if(ss(e)){let i=mt(e.object,
t,r,a);if(e.computed){let o=mt(e.property,t,i.end,a),l=t.indexOf("]",o.end)+1;return a.start=i.start,a.end=l,{start:i.start,
end:l}}else{let o=mt(e.property,t,i.end,a);return a.start=i.start,a.end=o.end,{start:i.start,end:o.end}}}if(pp(e)){let i=mt(
e.test,t,r,a),o=mt(e.consequent,t,i.end,a),s=mt(e.alternate,t,o.end,a);return a.start=i.start,a.end=s.end,{start:i.start,
end:s.end}}if(Av(e)){let i=t.indexOf("[",r),o=i+1;for(let c of e.elements)c&&(o=mt(c,t,o,a).end);let l=t.indexOf("]",o)+
1;return a.start=i,a.end=l,{start:i,end:l}}if(Rv(e)){let i=t.indexOf("{",r),o=i+1;for(let c of e.properties){let u=c;u.key&&
(o=mt(u.key,t,o,a).end),u.value&&!u.shorthand&&(o=mt(u.value,t,o,a).end)}let l=t.indexOf("}",o)+1;return a.start=i,a.end=
l,{start:i,end:l}}if($v(e)){let i=t.indexOf("`",r),o=i+1;for(let c of e.expressions)o=mt(c,t,o,a).end;let l=t.indexOf("`",
o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(xv(e)){let i=t.indexOf("this",r),o=i+4;return a.start=i,a.end=o,{start:i,
end:o}}if(P_(e)){let i=e.body||[];if(i.length===0)return a.start=r,a.end=r,{start:r,end:r};let o=r,s=r,l=r;for(let c=0;c<
i.length;c++){let u=mt(i[c],t,o,a);c===0&&(s=u.start),l=u.end,o=u.end}return a.start=s,a.end=l,{start:s,end:l}}{let i=-1,
o=r,s=r;for(let[l,c]of Object.entries(e))if(!(l==="type"||l==="parent")){if(Array.isArray(c)){for(let u of c)if(sy(u)){let d=mt(
u,t,s,a);i===-1&&(i=d.start),o=d.end,s=d.end}}else if(sy(c)){let u=mt(c,t,s,a);i===-1&&(i=u.start),o=u.end,s=u.end}}return i===
-1?(a.start=r,a.end=r,{start:r,end:r}):(a.start=i,a.end=o,{start:i,end:o})}},F_=e=>{let t=de(e);return mt(t,e,0),t._source=
e,t},Oa="@",U_=(e,t,r)=>{if(Cv.string.is(e)){let a=e.startsWith(Oa);if(a){let i=Nv(e);return{isFormula:a,value:i,targetCodec:t,
name:r}}}return{isFormula:!1,value:e,targetCodec:t,name:r}},Nv=e=>e.slice(Oa.length).trim(),fp=e=>e.startsWith(Oa)?Nv(e):
e;var Pv=e=>!e.startsWith(Oa)&&e.includes("${"),hp=e=>{if(!Pv(e))return e;let t=e.trim();return t.length>1&&t.startsWith("\
`")&&t.endsWith("`")?Oa+e:`${Oa}\`${B_(e)}\``},B_=e=>{let t="",r=0,n=o=>{for(t+=e[r++];r<e.length&&e[r]!==o;)e[r]==="\\"&&
(t+=e[r++]),r<e.length&&(t+=e[r++]);r<e.length&&(t+=e[r++])},a=()=>{let o=1;for(;r<e.length;){let s=e[r];if(s==="'"||s===
'"')n(s);else if(s==="`")t+=e[r++],i(!0);else if(s==="{"&&o++,s==="}"&&o--,t+=e[r++],o===0)return}},i=o=>{for(;r<e.length;){
let s=e[r];if(s==="\\")t+=e[r++],r<e.length&&(t+=e[r++]);else if(s==="`"){if(o){t+=e[r++];return}t+="\\`",r++}else s==="\
$"&&e[r+1]==="{"?(t+="${",r+=2,a()):t+=e[r++]}};return i(!1),t};var H_=ge.union([ge.literal(ms),ge.literal(ys),ge.literal(gs),ge.literal(vs),ge.literal(bs),ge.literal(Ri),ge.literal(lp),
ge.literal(ec),ge.literal(hs),ge.literal(Ur),ge.literal(tc),ge.literal(rc),ge.literal(Ql),ge.literal(Ai),ge.literal(is),
ge.literal(hr),ge.literal($i),ge.literal(aa),ge.literal(ia),ge.literal(Ia),ge.literal(ws),ge.literal(cp),ge.literal(m_)]),
W_=ge.recursion("node",()=>ge.intersection([ge.record(ge.string,ge.unknown),ge.partial({children:ge.array(W_)})])),q_={type:"\
app",name:""},V_={};var Y_={include:ts,traverseChildren:ts,traverseParent:ts},ac={...Y_,direction:"forward"},Dn=e=>({...ac,...e});var z_=yt.union([yt.literal("before"),yt.literal("after"),yt.literal("into")]),K_=yt.union([yt.literal("top"),yt.literal(
"bottom"),yt.literal("center")]),G_=yt.type({target:yt.string,action:z_,position:K_}),bj=yt.type({currentDropZone:yt.union(
[yt.undefined,G_]),src:yt.string}),J_=Be.keyof({html:null,sandboxed:null}),Mv=Be.keyof({spotify:null}),Z_=Be.partial({name:Be.string,
type:Be.string,description:Be.string,exampleValue:Be.string,default:Be.string}),X_=Be.intersection([Be.type({name:Be.string,
parameters:Be.array(Z_),htmlTemplate:Be.string}),Be.partial({icon:Be.string,color:Be.string,description:Be.string,image:dv,
runtime:J_,embedsThirdPartyMedia:Be.boolean,connections:Be.array(Mv),widgetOwner:Be.string})]);var Q_=Ca.intersection([Ca.type({name:Ca.string,type:Ca.string}),fv]);var eA=new Set(sp.recordMetaField),Ts=(...e)=>new Set(e),tA=Ts("id"),rA=Ts("createdAt","updatedAt","createdBy","updatedB\
y"),nA=Ts("createdByUid","updatedByUid"),wj=Ts("type","_scope","isDeleted"),Tj=Ts("_parent");var kj=new Set([...tA,...rA,...nA]),aA=([e,t])=>({...t,name:e}),iA=e=>!!e[1],mp=e=>Object.entries(e).filter(iA).map(aA),
Je=(e,t,r)=>(n={})=>({name:"",type:e,...n,...t,children:r?mp(r):void 0}),Br=(e,t)=>(r={},n={})=>{let a=mp(r),i=n.submitObjectType?
Dv():[],o=[...a,...i];return{name:"",type:e,...t,...n,children:o.length>0?o:void 0}},kd=Je($i),Dv=()=>mp({id:kd(),createdAt:kd(),
createdBy:kd()}),jv=Br(Ql),Sj=Br(Ai),Ej=Br(Ai,{variant:"tabGroup"}),xj=Br(Ai,{variant:"tab"}),_j=Br(Ai,{variant:"folder"}),
Aj=Br(is),$j=Br(ws),Rj=Br(ec),Ij=Br(hs),Oj=Br(tc,{isRepeating:!0}),Cj=Je(Ur),Nj=Je(Ur,{variant:"aiQuery"}),Pj=Je(Ur,{variant:"\
aiChat"}),Mj=Je(Ur,{variant:"fetchData"}),Dj=Je(Ur,{variant:"imageGeneration"}),jj=Je(Ur,{variant:"audioGeneration"}),Lj=Je(
Ur,{variant:"transcribe"}),Fj=Je(Ur,{variant:"publishData"}),Uj=Je(Ur,{variant:"script"}),Bj=Je(rc),Hj=Je(ms),Wj=Je(gs),
qj=Je(ys),Vj=Je(vs),Yj=Je(bs),zj=Je(Ri),Kj=Je(Ia),Yo=Je($i),Gj=Je(aa),Jj=Je(ia),Zj=Je(lp),Xj=Je(cp),Qj=Br(ws,{isRepeating:!0,
variant:"masterDetail"}),eL=Br(ws,{isRepeating:!0,isRecord:!0,variant:"masterDetail"}),Lv=Je(hr,{isRepeating:!0},{value:Yo(),
expanded:Yo(),dragAndDropState:Yo(),isDrawerClosed:Yo(),leftPanelWidth:Yo()});var gp=(e,t=".")=>{let r=e.lastIndexOf(t),n=r===-1?"":e.slice(0,r),a=r===-1?e:e.slice(r+1);return[n,a]},oA=(e,t=".")=>{let r=e.
indexOf(t),n=r===-1?e:e.slice(0,r),a=r===-1?"":e.slice(r+1);return[n,a]},xr=(e,t=".")=>e.filter(Boolean).join(t),sA=e=>Zc(
e,/(?=[A-Z])/).map(t=>ru(t)),Uv=e=>sA(e).join(" ");var lA=e=>{switch(e){case ms:case gs:case ys:case vs:case bs:case Ri:case lp:return!0;default:return!1}},cA=e=>{switch(e){case Ql:case Ai:case is:case hr:case ec:case hs:case tc:case ws:
return!0;default:return!1}},Bv=e=>{let t=[];return t.push(e),t.push(...ks(e).flatMap(Bv)),t},ks=e=>e.children||[],uA=(e,t)=>Hv(
e).filter(r=>r.name===t),dA=e=>{let t=new Map,r=(n,a)=>{t.set(n,a);for(let i of ks(n))r(i,n)};return r(e,null),t},Hv=e=>Wv(
e)?[e]:e.isOwnScope||e.isRepeating?[e]:[e,...ks(e).flatMap(Hv)],yp=(e,t,r)=>{let n=e[r.name];if(!n||n.length===1)return r.
name;let a=t.get(r);if(!a)throw new Error(`Node with name ${r.name} has no parent`);return`${yp(e,t,a)}$${r.name}`},vp=e=>cA(
e.type),pA=e=>e.type==="form"||!!e.submitObjectType,Wv=e=>!vp(e),bp=e=>!!(e.isRepeating||e.isOwnScope),fA=e=>e,at=(e,t)=>t,
ic=(e,t,r)=>r,hA=(e,t,r)=>r,mA=(e,t,r,n)=>n,gA=(e,t,r)=>r,qv=(e,t)=>t,yA=(e,t,r)=>r,Vv=(e,t,r)=>r,vA=(e,t)=>t,Ma=e=>e,Ss=k(
Ma,Bv),rL=k(Ma,gr("compute")),bA=k(Ma,gr("name")),oc=k(Ss,e=>Hn(e,gr("name"))),wp=k(Ma,dA),Yv=k(Ss,oc,wp,(e,t,r)=>bt(e,n=>yp(
t,r,n))),zv=k(wp,qv,(e,t)=>{var r;return(r=e.get(t))!=null?r:void 0}),Pn=k(oc,wp,qv,(e,t,r)=>yp(e,t,r)),Wl=k(oc,Yv,at,(e,t,r)=>{
let n=t[r];return n?[n]:e[r]||[]}),ls=k(Ma,oc,Yv,at,(e,t,r)=>r,(e,t,r,n,a)=>{let i=r[n];if(i)return R(i);let o=t[n];if(!o){
let[,s]=oA(n,"$");return s?ls(e,s,a):Ll(`Node with id ${n} not found`)}if(o.length===1)return R(o[0]);if(!a){let s=ks(e).
find(c=>c.name===n);if(s)return R(s);let l=uA(e,n);return l.length===1?R(l[0]):Ll({matches:o.map(c=>Pn(e,c))})}return ls(
a,n)}),nL=k(ls,ze),aL=k(bA,Uv),Ii=(e,t,r)=>k(Ma,n=>{let a=n[t];return a===void 0&&r!==void 0&&(a=rx(r,n)),U_(a,e,t)}),wA=Ii(
Fv.string,"nounLabel","Item"),TA=e=>{let{value:t,isFormula:r}=wA(e);return`${r?t:`'${t}'`} + ' ' + ($index + 1)`},kA=k(Ma,
TA),iL=Ii(Ie,"multiline"),oL=k(Ss,(e,t)=>t,(e,t)=>{let r=e.flatMap(n=>{var a;return _i.is(n.data)&&n.data.source===t?(a=
n.data.dataType)!=null?a:[]:[]});return fa(r)}),sL=k(Ss,e=>{var t;let r=[],n=new Set;for(let a of e){if(!_i.is(a.data)||
a.data.source!=="callable")continue;let i=a.data.dataType,o=a.data.callable;if(!i||!o?.functionName)continue;let s=`${i}\
::${o.functionName}::${(t=o.args)!=null?t:""}`;n.has(s)||(n.add(s),r.push({typeName:i,functionName:o.functionName,...o.args?
{args:o.args}:{}}))}return r}),SA=e=>{if(e.type===hr){let r=e.nodeTypes;return r&&typeof r=="object"?Object.keys(r):[]}let t=_i.
is(e.data)?e.data.dataType:void 0;return t?[t]:[]},EA=k(Ss,(e,t)=>t,(e,t)=>{var r,n;let a=new Map;for(let o of e)if(_i.is(
o.data)&&o.data.source===t){let s=(r=o.data.scope)!=null?r:"global";for(let l of SA(o)){let c=(n=a.get(l))!=null?n:new Set;
s==="all"?(c.add("global"),c.add("user")):c.add(s),a.set(l,c)}}let i=[];for(let[o,s]of a)for(let l of s)i.push({typeName:o,
scope:l});return i}),sc=[],V=e=>e;var oa=e=>{var t;return(t=e.instance)!=null?t:V_},Er=e=>e.context,Tp=k(V,gr("def")),dn=k(oa,e=>{var t;return(t=e?.data)!=
null?t:sc}),kp=k(oa,e=>{var t;return(t=e?.navStack)!=null?t:sc}),pn=k(oa,e=>{var t;return(t=e?.lengths)!=null?t:sc}),ki=k(
dn,e=>bt(e,gr("pointer"))),lc=k(pn,e=>bt(e,gr("pointer"))),Sp=k(oa,e=>e.cursor||""),Ep=k(oa,e=>e.cursorArgs),Kv=k(oa,e=>{
var t;return(t=e.navStackArgs)!=null?t:sc}),xA={objects:[]},_A=k(V,e=>{var t;return(t=e.repo)!=null?t:xA}),Gv=e=>{let{parent:t}=e;
return[...t?Gv(t):[],e]},AA=e=>{let t=e.match(/^([\w\s()$]+)(?:\[(\d+)\])?$/);if(!t)throw new Error(`part "${e}" invalid\
 syntax`);let[,r,n]=t;return{nodeId:r,index:n!==void 0?Number(n):0}},xp=e=>xr(Zv(e).map(Jv)),$A=e=>{let{scope:t,node:r,isIteration:n}=e,
a=xp(t);return n?a:xr([a,Pn(t.node,r)])},Es=e=>{let{parent:t,node:r}=e;if(!t)return"";let n=Pn(t.node,r);return xr([xp(t),
n])},Jv=e=>{let{parent:t,node:r,index:n}=e,a=t?Pn(t.node,r):"";return bp(r)?`${a}[${n}]`:a},RA=e=>({node:e,index:0,key:""}),
ly=e=>e.parent===void 0,Zv=e=>{let{parent:t}=e;return[...t?Zv(t):[],e]},Xv=(e,t)=>e.parent===t.parent&&e.node===t.node,IA=(e,t)=>{
let r=t.find(n=>Xv(e,n));return r?r.index:-1},OA=(e,t,r)=>{let n=t.map(a=>Xv(e,a)?{...a,index:r}:a);return xr(n.map(Jv))},
uL=gr("key"),CA=(e,t)=>{let{parent:r,node:n,key:a}=e,i=Wl(n,t);if(i.length)return n===i[0]?{key:xr([r?.key,t]),isDeclared:!0}:
{key:xr([a,t]),isDeclared:!0};if(t.includes("$")){let o=t.slice(t.lastIndexOf("$")+1);if(Wl(n,o).length)return{key:xr([a,
t]),isDeclared:!0}}return{key:xr([a,t]),isDeclared:!1}},Sd=(e,t,r)=>{let n=NA(e,t,r);return n?Pn(e,n):r},NA=(e,t,r)=>{let n=Wl(
e,r);if(n.length!==0)return n.length===1?n[0]:Qv(e,t,r)},Qv=(e,t,r)=>{let n=Wl(t,r);if(n.length)return n[0];let a=zv(e,t);
if(a)return Qv(e,a,r)},PA=(e,t)=>{if(t==="")return R(RA(e));let[r,n]=gp(t),{nodeId:a,index:i}=AA(n),o=ql({def:e},r);if(P(
o))return o;let s=o.right,l=ls(e,a,s.node);if(P(l))return l;let c=l.right,u={parent:s,node:c,index:i,key:t},d=xp(u);if(d!==
t){let f=ql({def:e},d);return P(f)?R(u):f}return R(u)},MA=(e,t)=>{let[r,n]=gp(t),a=n.endsWith("]"),o=ql({def:e},a?t:r);if(P(
o))return o;let s=o.right,l=a?R(s.node):ls(e,n,s.node);if(P(l))return l;let c=l.right,u={scope:s,node:c,isIteration:a,key:t},
d=$A(u);if(d!==t){let f=Kr({def:e},d);return P(f)?R(u):f}return R(u)},ql=k(Tp,at,PA),Mn=k(ql,e=>{if(P(e))throw new Error(
`Invalid scope key: ${e.left}`);return e.right}),Kr=k(Tp,at,MA),B=k(Kr,e=>{if(P(e))throw new Error(`Invalid pointer key:\
 ${e.left}`);return e.right}),_p=k(Tp,ic,(e,t)=>B({def:e},t)),DA=k(B,gr("node")),Ap=k(V,()=>"",B),$p=k(Mn,Gv),na=k(V,Mn,
ic,(e,t,r)=>IA(t,$p(e,r))),jA=k(V,Mn,ic,mA,(e,t,r,n)=>{let a=$p(e,r);return OA(t,a,n)}),Dl=k(Mn,ic,CA),zo=(e,t,r)=>{let n=Kr(
e,t);if(P(n))return;let a=n.right.scope;for(;a;){let{key:i,isDeclared:o}=Dl(e,a.key,r);if(o)return P(Kr(e,i))?void 0:i;a=
a.parent}};var Oi=(e,t)=>{let r=(0,tb.createContext)(t);return[r.Provider,()=>{let i=(0,eb.useContext)(r);if(i===void 0){if(t)return t;
throw new Error(`${e}Context not found`)}return i},r]},rb=(e,t)=>{let r=e.length,n=t.length;if(r===0)return n;if(n===0)return r;
let a=[];for(let i=0;i<=r;i++)a[i]=[i];for(let i=0;i<=n;i++)a[0][i]=i;for(let i=1;i<=r;i++)for(let o=1;o<=n;o++){let s=e[i-
1]===t[o-1]?0:1;a[i][o]=Math.min(a[i-1][o]+1,a[i][o-1]+1,a[i-1][o-1]+s)}return a[r][n]},cy=e=>e.toLowerCase().trim().replace(
/^the\s+/i,"").replace(/\s+/g," "),LA=(e,t,r={})=>{if(e.length===0)return"none";let{correctThreshold:n=1,closeThreshold:a=3}=r,
i=cy(e),o=cy(t);if(i===o)return"correct";if(i.length===0)return"wrong";let s=rb(i,o),l=Math.max(1,Math.floor(o.length/10)),
c=n*l,u=a*l;return s<=c?"correct":s<=u?"close":"wrong"};var mi=class{constructor(e){this.html=e}toString(){return this.html}toJSON(){return this.html}},Rp=e=>e instanceof mi,Vl=e=>e.
replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),FA=e=>e instanceof
Ve.PlainDate,UA=e=>e instanceof Ve.ZonedDateTime,BA=e=>e instanceof Ve.Instant,ut=e=>nb.string.is(e)?e:Rp(e)?e.html:FA(e)?
e.toString():UA(e)?e.toPlainDate().toString():BA(e)?e.toZonedDateTimeISO("UTC").toPlainDate().toString():Array.isArray(e)?
e.join(""):e===void 0?"":String(e),cc=(e,t,r="no context")=>xe(e)?ib(e.right,t,r):e,ib=(e,t,r="no context")=>t.is(e)?R(e):
Ll(`Type mismatch: ${JSON.stringify(e)} is not a ${t.name} (${r})`),HA=(e,t,r="no context")=>{if(!xe(e))return e;let n=e.
right;if(t.is(n))return R(n);let a=t;return a===ab.string||a===F&&n!==void 0?R(ut(n)):Ll(`Type mismatch: ${JSON.stringify(
n)} is not a ${t.name} (${r})`)},WA=e=>{let t={},r=[];for(let n in e){let a=e[n];P(a)?r.push(a.left):t[n]=a.right}return r.
length?{left:r}:{right:t}};var be=e=>{let t=WA(e);if(P(t))throw new Error(t.left.join(`
`));return t.right};var[fL,hL]=Oi("persistence"),[mL,gL]=Oi("PersistenceKey","");var qA=e=>{let t=e;return()=>(t=t*1103515245+12345&2147483647,t/2147483647)},Yl="0123456789abcdefghijklmnopqrstuvwxyzABC\
DEFGHIJKLMNOPQRSTUVWXYZ",VA=248,YA=()=>{let e=globalThis.crypto;if(!e?.getRandomValues)return Math.floor(Math.random()*Yl.
length);let t=new Uint8Array(1);for(;;){e.getRandomValues(t);let r=t[0];if(r<VA)return r%Yl.length}},zA=(e={})=>{let{length:t=8,
seed:r}=e;if(t<=0)throw new Error("Length must be greater than 0");let n=r!==void 0?(()=>{let i=qA(r);return()=>Math.floor(
i()*Yl.length)})():YA,a="";for(let i=0;i<t;i++)a+=Yl[n()];return a},KA="23456789TJQKA",GA="shdc",JA=/^card_[shdc][2-9TJQKA]$/,
ZA=["high card","pair","two pair","three of a kind","straight","flush","full house","four of a kind","straight flush"],XA=e=>{
if(typeof e!="string"||!JA.test(e))throw new Error(`handRank: bad card id ${JSON.stringify(e)} \u2014 expected card_{s|h|d|c}\
{2-9|T|J|Q|K|A}`);return{id:e,suit:GA.indexOf(e[5]),rank:KA.indexOf(e[6])+2}},Xo={2:"two",3:"three",4:"four",5:"five",6:"\
six",7:"seven",8:"eight",9:"nine",10:"ten",11:"jack",12:"queen",13:"king",14:"ace"},Aa=e=>e===6?"sixes":`${Xo[e]}s`,uy=(e,t)=>{
var r;let n=e;for(let a=0;a<5;a++)n=n*15+((r=t[a])!=null?r:0);return n},dy=e=>{var t;let r=[...e].sort((f,h)=>h.rank-f.rank),
n=new Map;for(let f of r)n.set(f.rank,((t=n.get(f.rank))!=null?t:0)+1);let a=[...n.entries()].sort((f,h)=>h[1]-f[1]||h[0]-
f[0]),i=e.every(f=>f.suit===e[0].suit),o=a.map(([f])=>f),s=0;o.length===5&&(o[0]-o[4]===4?s=o[0]:o.join(",")==="14,5,4,3\
,2"&&(s=5));let l=()=>a.flatMap(([f])=>r.filter(h=>h.rank===f));if(s>0){let f=s===5?[...r.slice(1),r[0]]:r,h=i?8:4;return{
category:h,rank:uy(h,[s]),tiebreak:[s],ordered:f}}let c=a.map(([,f])=>f).join(""),u;c==="41"?u=7:c==="32"?u=6:i?u=5:c===
"311"?u=3:c==="221"?u=2:c==="2111"?u=1:u=0;let d=o;return{category:u,rank:uy(u,d),tiebreak:d,ordered:l()}},QA=e=>{let t=e.
tiebreak;switch(e.category){case 8:return t[0]===14?"royal flush":`straight flush, ${Xo[t[0]]} high`;case 7:return`four \
of a kind, ${Aa(t[0])}`;case 6:return`full house, ${Aa(t[0])} over ${Aa(t[1])}`;case 5:return`flush, ${Xo[t[0]]} high`;case 4:
return`straight, ${Xo[t[0]]} high`;case 3:return`three of a kind, ${Aa(t[0])}`;case 2:return`two pair, ${Aa(t[0])} and ${Aa(
t[1])}`;case 1:return`pair of ${Aa(t[0])}`;default:return`${Xo[t[0]]}-high`}},e$=e=>{let t=e.length;if(t===5)return[e];if(t===
6)return e.map((n,a)=>e.filter((i,o)=>o!==a));let r=[];for(let n=0;n<t;n++)for(let a=n+1;a<t;a++)r.push(e.filter((i,o)=>o!==
n&&o!==a));return r},t$=e=>{if(!Array.isArray(e)||e.length<5||e.length>7){let i=Array.isArray(e)?`${e.length} cards`:typeof e;
throw new Error(`handRank: expected an array of 5\u20137 card ids, got ${i}`)}let t=e.map(XA),r=new Set;for(let i of t){
if(r.has(i.id))throw new Error(`handRank: duplicate card id ${i.id}`);r.add(i.id)}let n;for(let i of e$(t)){let o=dy(i);
(!n||o.rank>n.rank)&&(n=o)}let a=n??dy(t.slice(0,5));return{category:a.category,categoryName:ZA[a.category],rank:a.rank,
best:a.ordered.map(i=>i.id),label:QA(a)}},Ip={map:["it","i"],filter:["it","i"],forEach:["it","i","arr"],reduce:["acc","i\
t","i"],times:["i"],every:["it","i"],some:["it","i"],find:["it","i"],findIndex:["it","i"],count:["it","i"],groupBy:["it",
"i"],sumBy:["it","i"]},r$=e=>e.params?e.params.filter(_r).map(t=>t.name):null,Op="var(--og-accent, currentColor)",sb="va\
r(--og-border, rgba(127,127,127,.25))",n$="var(--og-text, currentColor)",a$=e=>e!=null&&typeof e=="object"&&!Array.isArray(
e),Cp=e=>a$(e)?e:{},cs=e=>{if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(typeof e=="string"&&e.trim()!==""){
let t=Number(e);return Number.isFinite(t)?t:void 0}},Ra=(e,t)=>{let r=cs(e);return r!=null&&r>0?r:t},lb=(e,t)=>{let r=cs(
e),n=t===void 0?1:cs(t);return r==null||n==null||n<=0?0:Math.min(1,Math.max(0,r/n))},i$=/[;{}<>"'\\]|url\(|expression\(/i,
Bd=e=>{if(typeof e!="string")return;let t=e.trim();return t!==""&&t.length<=100&&!i$.test(t)?t:void 0},us=(e,t)=>{var r;
return(r=Bd(e))!=null?r:t},o$=(e,t)=>{var r,n;return(n=(r=Bd(e))!=null?r:Bd(t))!=null?n:""},vi=e=>Math.round(e*100)/100,
cb=e=>`role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${e}"`,s$=(e,t)=>{let r=Cp(t),n=Math.round(
lb(e,r.max)*100),a=Ra(r.height,8),i=Ra(r.radius,a/2),o=us(r.color,Op),s=us(r.track,sb);return`<div ${cb(n)} style="heigh\
t:${a}px;border-radius:${i}px;background:${s};overflow:hidden;"><div style="width:${n}%;height:100%;background:${o};"></\
div></div>`},l$=(e,t)=>{let r=Cp(t),n=lb(e,r.max),a=Math.round(n*100),i=Ra(r.size,64),o=Math.min(Ra(r.stroke,8),i/2),s=us(
r.color,Op),l=us(r.track,sb),c=r.caption==null?`${a}%`:Vl(String(r.caption)),u=i/2,d=vi((i-o)/2),f=vi(2*Math.PI*d),h=(b,T="")=>`\
<circle cx="${u}" cy="${u}" r="${d}"${T} style="fill:none;stroke-width:${o};${b}"/>`,y=n>0?h(`stroke:${s};stroke-linecap\
:round;stroke-dasharray:${vi(n*f)} ${f};`,` transform="rotate(-90 ${u} ${u})"`):"";return`<svg ${cb(a)} width="${i}" hei\
ght="${i}" viewBox="0 0 ${i} ${i}" style="display:block;">`+h(`stroke:${l};`)+y+`<text x="${u}" y="${u}" text-anchor="mi\
ddle" dominant-baseline="central" style="fill:${n$};font-size:${vi(i*.24)}px;font-weight:600;">${c}</text></svg>`},c$=(e,t)=>{
if(!Array.isArray(e))return"";let r=e.flatMap(y=>{let b=cs(y);return b==null?[]:[b]});if(r.length<2)return"";let n=Cp(t),
a=cs(n.width),i=Ra(n.width,120),o=Ra(n.height,32),s=Ra(n.strokeWidth,2),l=us(n.color,Op),c=Math.min(...r),u=Math.max(...r)-
c,d=s/2,f=r.map((y,b)=>{let T=vi(b*i/(r.length-1)),S=u===0?o/2:vi(d+(1-(y-c)/u)*(o-2*d));return`${T},${S}`}).join(" ");return`\
<svg role="img" aria-label="${`trend: ${r[0]} to ${r[r.length-1]}`}" width="${a!=null&&a>0?i:"100%"}" height="${o}" view\
Box="0 0 ${i} ${o}" preserveAspectRatio="none" style="display:block;overflow:visible;"><polyline points="${f}" vector-ef\
fect="non-scaling-stroke" style="fill:none;stroke:${l};stroke-width:${s};stroke-linejoin:round;stroke-linecap:round;"/><\
/svg>`},u$=e=>{var t,r,n;try{return R(F_(e))}catch(a){let i=a,o=(t=i.message)!=null?t:"Parse error",s=(r=i.description)!=
null?r:o,l=(n=i.index)!=null?n:-1;return Ce({message:o,description:s,source:e,index:l})}},Np=k(fA,u$),Pp=e=>Fr(e)&&"__or\
gFunction"in e&&e.__orgFunction===!0,d$=Object.prototype.hasOwnProperty,p$=Object.prototype,f$=Object.getPrototypeOf,Ue=Array.
isArray,Fr=e=>{if(typeof e!="object"||e===null)return!1;let t=f$(e);return t===null||t===p$},jl=new Set,py=new Map,h$=e=>{
let t=py.get(e);if(t===void 0){let r=typeof e=="string"&&e.startsWith("@")?e.slice(1).trim():String(e??"");t={formula:r,
parsed:Np(r)},typeof e=="string"&&py.set(e,t)}return t},fy=new Map,m$=e=>{if(typeof e!="string")return Zg(e);let t=fy.get(
e);return t===void 0&&(t=Zg(e),fy.set(e,t)),t},g$=()=>({map:new Map,ids:new WeakMap,next:{n:0}}),hy=(e,t)=>{if(t===null)
return"null";let r=typeof t;if(r==="object"||r==="function"){let n=e.ids.get(t);return n===void 0&&(n=e.next.n++,e.ids.set(
t,n)),"#"+n}return r+":"+String(t)},ub=e=>{e?.map.clear()},ds=e=>Fr(e)&&"__closure"in e&&e.__closure===!0,db=(e,t)=>{var r;
return{__closure:!0,params:(r=r$(e))!=null?r:[],body:e.body,ctx:t}},Ed=new Set,ps=(e,t)=>{if(Ed.has(e))return R(void 0);
let r={};for(let n=0;n<e.params.length;n++)r[e.params[n]]=t[n];Ed.add(e);try{return le(e.body,uc(e.ctx,r),un)}finally{Ed.
delete(e)}},pb=(e,t,r,n)=>{if(jl.has(e.key))return R(void 0);let a=m$(e.parameters),i={};for(let u=0;u<a.length;u++)i[a[u]]=
t[u];let{formula:o,parsed:s}=h$(e.compute);if(P(s))return Ce(gt(`Error in function body: ${o}`,n));let l=e.memoSafe===!0?
r.memo:void 0,c;if(l){let u=r.dc("$data",un);c=e.key+"|"+hy(l,u)+"|"+t.map(f=>hy(l,f)).join(",");let d=l.map.get(c);if(d!==
void 0)return d}jl.add(e.key);try{let u=uc(r,i);u.letBound=void 0;let d=le(s.right,u,un);return l&&c!==void 0&&l.map.set(
c,d),d}finally{jl.delete(e.key)}},xd=(e,t,r)=>{let n=[];for(let a of e){let i=le(a,t,r);if(P(i))return i;n.push(i.right)}
return R(n)},gt=(e,t)=>({message:e,failingExpression:t}),y$=e=>{if(_r(e))return e.name;if(ss(e)){let t=e.property;if(_r(
t))return t.name}return"function"},fb=(e,t,r,n)=>{var a;let i=e;if(ub(r.memo),_r(e))return(a=r.letBound)!=null&&a.has(e.
name)?Ce(gt(`Cannot reassign let binding '${e.name}'`,i)):r.setter?(r.setter(e.name,t),R(void 0)):Ce(gt("Cannot assign: \
no mutable context available",i));if(ss(e)){let o=le(e.object,r,n);if(P(o))return o;let s=o.right;if(s==null||typeof s!=
"object"&&typeof s!="function")if(_r(e.object)){if(!r.setter)return Ce(gt("Cannot auto-create object: no mutable context\
 available",i));s={},r.setter(e.object.name,s)}else return Ce(gt("Cannot assign property of non-object",i));let l=Hd(e,r.
dc);if(P(l))return l;let c=l.right.property;return s[c]=t,R(void 0)}return Ce(gt("Invalid assignment target: must be ide\
ntifier or property access",i))},le=(e,t,r=un)=>{var n,a,i;let o=e;if(Hl(e))return R(e.value);if(Ti(e)){if(e.operator===
"->")return Ce(gt("`->` is only valid inside a `match { }` block (as `condition -> expression`)",e));if(e.operator===";"){
let c=le(e.left,t,r);return P(c)?c:le(e.right,t,r)}if(e.operator==="="){let c=le(e.right,t,r);if(P(c))return c;let u=c.right,
d=fb(e.left,u,t,r);return P(d)?d:R(u)}if(e.operator==="&&"||e.operator==="||"||e.operator==="??"){let c=le(e.left,t,r);if(P(
c))return c;let u=c.right;return(e.operator==="&&"?!u:e.operator==="||"?!!u:u!=null)?c:le(e.right,t,r)}let s=le(e.left,t,
r);if(P(s))return s;let l=le(e.right,t,r);if(P(l))return l;try{return R(N$(e.operator)(s.right,l.right))}catch(c){return Ce(
gt(String(c),e))}}if(_v(e)){let s=le(e.argument,t,r);if(P(s))return s;try{return R(P$(e.operator)(s.right))}catch(l){return Ce(
gt(String(l),e))}}if(pp(e)){let s=le(e.test,t,r);return P(s)?s:s.right?le(e.consequent,t,r):le(e.alternate,t,r)}if(Ov(e)){
if((n=t.letBound)!=null&&n.has(e.id))return Ce(gt(`Cannot redeclare let binding '${e.id}'`,e));let s=le(e.init,t,r);return P(
s)?s:e.body?le(e.body,mb(t,e.id,s.right),r):R(s.right)}if(D_(e)){let s,l=e.scrutinee!==void 0;if(e.scrutinee!==void 0){let c=le(
e.scrutinee,t,r);if(P(c))return c;s=c.right}for(let c of e.arms){if(_r(c.test)&&c.test.name==="_")return le(c.consequent,
t,r);let u=le(c.test,t,r);if(P(u))return u;if(l?Dp(s,u.right):!!u.right)return le(c.consequent,t,r)}return R(void 0)}if(nc(
e)){let s={...r,memberLookupContexts:[]};if(ss(e.callee)){let u=le(e.callee.object,t,gi(s,!1));if(P(u))return u;let d=u.
right,f=Hd(e.callee,t.dc);if(P(f))return f;let h=f.right.property,y=_d(h,t.dc,gi(s,!0));if(my(y))return e.arguments.length>
0?y(d,e.arguments[0],t):R(void 0);if(y===Qo){if(e.arguments.length>0){let T=e.arguments.length>1?le(e.arguments[1],t,s):
R(void 0);return P(T)?T:Qo(d,e.arguments[0],t,T.right)}return R(void 0)}let b;if(d!=null){if(b=d[h],ds(b)){let T=xd(e.arguments,
t,s);return P(T)?T:ps(b,T.right)}if(typeof b=="function"){let T=b.bind(d),S=[];for(let E of e.arguments){let _=le(E,t,s);
if(P(_))return _;S.push(_.right)}try{return R(T(...S))}catch(E){let _=E instanceof Error?E.message:String(E);return Ce(gt(
`Error invoking ${h}(): ${_}`,o))}}}if(typeof y=="function"){let T=[d];for(let S of e.arguments){let E=le(S,t,s);if(P(E))
return E;T.push(E.right)}try{return R(y(...T))}catch(S){let E=S instanceof Error?S.message:String(S);return Ce(gt(`Error\
 invoking ${h}(): ${E}`,o))}}return R(void 0)}let l=le(e.callee,t,gi(s,!0));if(P(l))return l;let c=l.right;if(ds(c)){let u=xd(
e.arguments,t,s);return P(u)?u:ps(c,u.right)}if(Pp(c)){if(jl.has(c.key))return R(void 0);let u=xd(e.arguments,t,s);return P(
u)?u:pb(c,u.right,t,e)}if(typeof c=="function"){if(my(c)){let d=le(e.arguments[0],t,s);return P(d)?d:c(d.right,e.arguments[1],
t)}if(c===Qo){let d=le(e.arguments[0],t,s);if(P(d))return d;let f=e.arguments.length>2?le(e.arguments[2],t,s):R(void 0);
return P(f)?f:Qo(d.right,e.arguments[1],t,f.right)}let u=[];for(let d of e.arguments){let f=le(d,t,s);if(P(f))return f;u.
push(f.right)}try{return R(c(...u))}catch(d){let f=y$(e.callee),h=d instanceof Error?d.message:String(d);return Ce(gt(`E\
rror invoking ${f}(): ${h}`,o))}}return R(void 0)}if(xv(e))return R(t.thisContext);if(_r(e))return R(_d(e.name,t.dc,r));
if(ss(e)){let{object:s}=e,l=Hd(e,t.dc);if(P(l))return l;let c=l.right,u=le(s,t,C$(gi(r,!1),c));if(P(u))return u;let d=u.
right;if(Ue(d)){if(c.type==="computed"){let f=Number(c.property);return isNaN(f)?R(void 0):R(d[f])}return R(d.map(f=>Fr(
f)?f[c.property]:void 0))}if(Fr(d))return R(d[c.property]);if(jt(d)&&c.type!=="computed"&&c.property==="length")return R(
d.length);if(d!=null&&typeof d=="object"){let f=d[c.property];return R(typeof f=="function"?f.bind(d):f)}return R(void 0)}
if($v(e)){let s=[],{quasis:l,expressions:c}=e;for(let u=0;u<l.length;u++){let d=l[u],f=(i=typeof d.value=="string"?d.value:
(a=d.value)==null?void 0:a.cooked)!=null?i:"";if(s.push(f),u<c.length){let h=le(c[u],t,r);if(P(h))return h;s.push(ut(h.right))}}
return R(s.join(""))}if(M_(e)){let s=le(e.tag,t,gi(r,!0));if(P(s))return s;let l=s.right;if(typeof l!="function")return R(
void 0);let{quasis:c,expressions:u}=e.quasi,d=c.map(y=>{var b,T;return(T=typeof y.value=="string"?y.value:(b=y.value)==null?
void 0:b.cooked)!=null?T:""}),h=[Object.assign([...d],{raw:d.slice()})];for(let y of u){let b=le(y,t,r);if(P(b))return b;
h.push(b.right)}return R(l(...h))}if(Av(e)){let s=[];for(let l of e.elements)if(l===null)s.push(void 0);else if(oy(l)){let c=le(
l.argument,t,r);if(P(c))return c;let u=c.right;Ue(u)&&s.push(...u)}else{let c=le(l,t,r);if(P(c))return c;s.push(c.right)}
return R(s)}if(Rv(e)){let s={},{properties:l}=e;for(let c of l){if(oy(c)){let h=le(c.argument,t,r);if(P(h))return h;let y=h.
right;Fr(y)?Object.assign(s,y):Ue(y)&&y.forEach((b,T)=>{s[String(T)]=b});continue}let u=c.key,d=!!c.computed,f;if(!d&&_r(
u))f=u.name;else if(!d&&Hl(u))f=String(u.value);else{let h=le(u,t,r);if(P(h))return h;f=String(h.right)}if(c.shorthand)s[f]=
_d(f,t.dc,r);else{let h=le(c.value,t,r);if(P(h))return h;s[f]=h.right}}return R(s)}return Iv(e)?R(db(e,t)):Ce(gt(`Unsupp\
orted expression: ${e.type}`,o))},Hd=(e,t)=>{let{computed:r}=e,n=v$(e,t);return P(n)?n:R({type:r?"computed":"static",property:n.
right})},v$=(e,t)=>{let{property:r,computed:n}=e;if(!n&&_r(r))return R(r.name);let a=le(r,{dc:t,setter:void 0});return P(
a)?a:R(String(a.right))},_d=(e,t,r)=>{let n=t(e,r);if(n!==void 0&&(!r.isCall||Yi(n)||Pp(n)||ds(n)))return n;if(r.isCall){
let a=yb.get(e);if(a)return a;if(e==="reduce")return Qo}if(e in zl&&!(!r.isCall&&hb.has(e)))return zl[e]},hb=new Set(["h\
tml","keys","values","entries","first","last","progressBar","progressRing","sparkline","pow","exp","log","sqrt"]),mb=(e,t,r)=>{
var n;let a=uc(e,{[t]:r});return a.letBound=new Set([...(n=e.letBound)!=null?n:[],t]),a},uc=(e,t)=>{let r=e.letBound;if(r){
let n=Object.keys(t).filter(a=>r.has(a));if(n.length>0){let a=new Set(r);for(let i of n)a.delete(i);r=a}}return{dc:pc(e.
dc,t),setter:e.setter,thisContext:e.thisContext,memo:e.memo,asyncHosts:e.asyncHosts,syncHosts:e.syncHosts,letBound:r}},sa=(e,t,r)=>{
var n;let a=(n=Ip[r])!=null?n:[];if(Iv(e)){let i=db(e,t);return o=>ps(i,o)}if(_r(e)&&!a.includes(e.name)){let i=le(e,t,gi(
un,!0));if(!P(i)&&ds(i.right)){let o=i.right;return s=>ps(o,s)}if(!P(i)&&Pp(i.right)){let o=i.right;return s=>pb(o,s,t,e)}}
return(i,o)=>{let s={};for(let l=0;l<a.length;l++)s[a[l]]=i[l];return o&&Object.assign(s,o),le(e,uc(t,s),un)}},b$=(e,t,r)=>{
if(!jt(e))return R("");let n=sa(t,r,"forEach"),a=[],i=e.split(`
`);for(let o=0;o<i.length;o++){let s=n([i[o],o,i]);if(P(s))return s;a.push(String(s.right))}return R(a.join(""))},w$=(e,t,r)=>{
if(!Ue(e))return R([]);let n=sa(t,r,"filter"),a=[];for(let i=0;i<e.length;i++){let o=e[i],s=n([o,i]);if(P(s))return s;s.
right&&a.push(o)}return R(a)},T$=(e,t,r)=>{if(!Ue(e))return R([]);let n=sa(t,r,"map"),a=[];for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(P(o))return o;a.push(o.right)}return R(a)},Qo=(e,t,r,n)=>{if(!Ue(e))return R(n);let a=sa(t,r,"reduce"),i=n;
for(let o=0;o<e.length;o++){let s=a([i,e[o],o]);if(P(s))return s;i=s.right}return R(i)},dc=(e,t,r,n,a,i)=>{if(!Ue(e))return R(
i);let o=sa(t,r,n);for(let s=0;s<e.length;s++){let l=e[s],c=o([l,s]);if(P(c))return c;let u=a(!!c.right,l,s);if(u)return R(
u.value)}return R(i)},k$=(e,t,r)=>dc(e,t,r,"every",n=>n?void 0:{value:!1},!0),S$=(e,t,r)=>dc(e,t,r,"some",n=>n?{value:!0}:
void 0,!1),E$=(e,t,r)=>dc(e,t,r,"find",(n,a)=>n?{value:a}:void 0,void 0),x$=(e,t,r)=>dc(e,t,r,"findIndex",(n,a,i)=>n?{value:i}:
void 0,-1),gb=(e,t,r)=>{if(e){if(Hl(e)&&jt(e.value)){let n=e.value;return([a])=>R(Fr(a)?a[n]:void 0)}return sa(e,t,r)}},
_$=(e,t,r)=>{if(!Ue(e))return R(0);if(!t)return R(e.length);let n=sa(t,r,"count"),a=0;for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(P(o))return o;o.right&&a++}return R(a)},A$=(e,t,r)=>{var n;let a=gb(t,r,"groupBy");if(!Ue(e)||!a)return R({});
let i={};for(let o=0;o<e.length;o++){let s=a([e[o],o]);if(P(s))return s;if(s.right==null)continue;let l=ut(s.right);((n=
i[l])!=null?n:i[l]=[]).push(e[o])}return R(i)},$$=(e,t,r)=>{if(!Ue(e))return R(0);let n=gb(t,r,"sumBy"),a=0;for(let i=0;i<
e.length;i++){let o=n?n([e[i],i]):R(e[i]);if(P(o))return o;o.right!=null&&(a+=Number(o.right))}return R(a)},R$=(e,t,r)=>{
let n=Number(e);if(!Bn(n)||isNaN(n)||n<0)return R([]);let a=sa(t,r,"times"),i=[];for(let o=0;o<n;o++){let s=a([o],{it:o});
if(P(s))return s;i.push(s.right)}return R(i)},yb=new Map([["forEach",b$],["filter",w$],["map",T$],["times",R$],["every",
k$],["some",S$],["find",E$],["findIndex",x$],["count",_$],["groupBy",A$],["sumBy",$$]]),I$=new Set(yb.values()),my=e=>typeof e==
"function"&&I$.has(e);var vb=(e,t={},r)=>{let n=Np(e);if(P(n))return n;let a=wb(t);return r!==void 0&&(a.thisContext=r),le(n.right,a,un)},O$=(e,t={},r)=>ze(
vb(e,t,r)),un={memberLookupContexts:[],isCall:!1},C$=(e,t)=>({...e,memberLookupContexts:[t,...e.memberLookupContexts]}),
gi=(e,t)=>({...e,isCall:t}),N$=e=>{let t=j$[e];return t||(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},P$=e=>{let t=L$[e];return t||
(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},Mp=(e,t)=>nr(e)&&nr(t)?e.equals(t):e===t,M$=(e,t)=>!Mp(e,t),Dp=(e,t)=>e==null&&t==
null?!0:Mp(e,t),D$=(e,t)=>!Dp(e,t),Cl=(e,t)=>e!=null&&t!=null,j$={"+":(e,t)=>nr(e)&&Bn(t)?e.add({days:t}):Bn(e)&&nr(t)?t.
add({days:e}):jt(e)||jt(t)?(e==null?"":String(e))+(t==null?"":String(t)):nr(e)||nr(t)?String(e)+String(t):Number(e)+Number(
t),"-":(e,t)=>nr(e)&&Bn(t)?e.subtract({days:t}):nr(e)&&nr(t)?e.since(t).total("days"):Number(e)-Number(t),"*":(e,t)=>Number(
e)*Number(t),"/":(e,t)=>Number(e)/Number(t),"%":(e,t)=>Number(e)%Number(t),"==":Dp,"===":Mp,"!=":D$,"!==":M$,">":(e,t)=>Cl(
e,t)&&ta(e,t)>0,">=":(e,t)=>Cl(e,t)&&ta(e,t)>=0,"<":(e,t)=>Cl(e,t)&&ta(e,t)<0,"<=":(e,t)=>Cl(e,t)&&ta(e,t)<=0},L$={"-":e=>-Number(
e),"!":e=>!e,"@":e=>e},gy=e=>{let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.
imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}},F$=e=>{var t;if(typeof e=="number"&&Number.isFinite(e))return e;let r=2166136261;
for(let n of String(e))r^=(t=n.codePointAt(0))!=null?t:0,r=Math.imul(r,16777619);return r>>>0},yy=e=>Ue(e)?e.map(ut):e==
null?[]:[ut(e)],bb=e=>e==null?"":Rp(e)?e.html:Ue(e)?e.map(bb).join(""):Vl(ut(e)),vy=e=>(e.length===1&&Ue(e[0])?e[0]:e).filter(
r=>r!=null).map(Number),$a=e=>e==null||typeof e!="number"&&typeof e!="string"?NaN:Number(e),Nl=e=>Number.isFinite(e)?e:void 0,
Ad=(e,t)=>{if(ds(e))return(...r)=>{let n=ps(e,r);if(P(n))throw new Error(n.left.message);return n.right};if(t&&typeof e==
"string"&&e.length>0)return r=>Fr(r)?r[e]:void 0},Pl=e=>Fr(e)?Object.entries(e):Ue(e)?e.flatMap((t,r)=>t==null?[]:[[String(
r),t]]):[],zl={if:(e,t,r)=>e?t:r,and:(...e)=>e.every(t=>t),or:(...e)=>e.some(t=>t),length:e=>jt(e)||Ue(e)?e.length:0,sum:e=>Ue(
e)?e.reduce((t,r)=>t+Number(r),0):0,avg:e=>!Ue(e)||e.length===0?0:e.reduce((r,n)=>r+Number(n),0)/e.length,min:(...e)=>{let t=vy(
e);return t.length===0?void 0:Math.min(...t)},max:(...e)=>{let t=vy(e);return t.length===0?void 0:Math.max(...t)},first:e=>Ue(
e)?e[0]:void 0,last:e=>Ue(e)&&e.length>0?e[e.length-1]:void 0,flatten:e=>Ue(e)?e.flat(1):[],clamp:(e,t,r)=>{if(e==null)return;
let n=Number(e);return t!=null&&(n=Math.max(n,Number(t))),r!=null&&(n=Math.min(n,Number(r))),n},split:(e,t)=>jt(e)?t===void 0?
[e]:e.split(String(t)):[],join:(e,t)=>{if(!Ue(e))return"";let r=t!==void 0?String(t):",";return e.length>0&&e.every(Rp)?
new mi(e.map(n=>n.html).join(Vl(r))):e.map(String).join(r)},upper:e=>ut(e).toUpperCase(),lower:e=>ut(e).toLowerCase(),concat:(...e)=>e.
reduce((t,r)=>Ue(r)?t.concat(r):t,[]),today:FE,dateFrom:e=>{try{return UE(ut(e))}catch{return`<<INVALID_DATE: ${e}>>`}},
dateCompare:(e,t)=>BE(e,t),formatDate:(e,t)=>{try{return WE.is(t)?qE(e,t):Pd(e)}catch{return`<<INVALID_DATE: ${e}>>`}},formatPeriod:(e,t)=>zE(
e,t),generateId:(e,t)=>zA({length:Number(e),seed:Bn(t)?Number(t):void 0}),regex:(e,t)=>new RegExp(String(e),t?String(t):
void 0),fuzzyMatch:(e,t)=>LA(ut(e),ut(t)),toJson:(e,t)=>{let r=t!==void 0?Number(t):void 0;return JSON.stringify(e,null,
r)},dodgy:e=>{throw new Error("dodgy function failed!!")},rand:(e,t)=>{let r=Number(e);if(!Bn(r)||isNaN(r)||r<=0)return 0;
let n=t==null?Math.random():gy(F$(t))();return Math.floor(n*r)},floor:e=>Math.floor(Number(e)),ceil:e=>Math.ceil(Number(
e)),round:e=>Math.round(Number(e)),abs:e=>Math.abs(Number(e)),pow:(e,t)=>Nl(Math.pow($a(e),$a(t))),exp:e=>Nl(Math.exp($a(
e))),log:(e,t)=>Nl(t===void 0?Math.log($a(e)):Math.log($a(e))/Math.log($a(t))),sqrt:e=>Nl(Math.sqrt($a(e))),uniq:(e,t)=>{
if(!Ue(e))return[];let r=t!==void 0?e.map(n=>Fr(n)?n[String(t)]:void 0):e;return[...new Set(r)].filter(n=>n!==void 0)},sort:(e,t,r)=>{
if(!Ue(e))return[];let n=typeof t=="string"&&t.length>0,a=s=>n&&Fr(s)?s[t]:s,i=e.every(s=>typeof a(s)=="number"),o=r?-1:
1;return[...e].sort((s,l)=>{let c=a(s),u=a(l),d=i?c-u:String(c).localeCompare(String(u));return o*d})},shuffle:(e,t)=>{if(!Ue(
e))return[];let r=gy(Number(t)),n=[...e];for(let a=n.length-1;a>0;a--){let i=Math.floor(r()*(a+1));[n[a],n[i]]=[n[i],n[a]]}
return n},handRank:e=>t$(e),replace:(e,t,r)=>{let n=e==null?"":ut(e);if(t==null)return n;let a=r==null?"":ut(r);return n.
split(ut(t)).join(a)},omit:(e,t)=>{if(!Fr(e))return{};let r=new Set(yy(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>!r.has(n)))},pick:(e,t)=>{if(!Fr(e))return{};let r=new Set(yy(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>r.has(n)))},toMap:(e,t,r)=>{var n;if(!Ue(e))return{};let a=Ad(t,!0);if(!a)return{};let i=(n=Ad(r,!0))!=null?n:s=>s,
o={};return e.forEach((s,l)=>{let c=a(s,l);c!=null&&(o[ut(c)]=i(s,l))}),o},keys:e=>Pl(e).map(([t])=>t),values:e=>Pl(e).map(
([,t])=>t),entries:e=>Pl(e),mapValues:(e,t)=>{let r=Ad(t,!1);return r?Object.fromEntries(Pl(e).map(([n,a])=>[n,r(a,n)])):
{}},escapeHtml:e=>Vl(e==null?"":ut(e)),html:(e,...t)=>{let r=Ue(e)?e.map(ut):[ut(e)],n="";for(let a=0;a<r.length;a++)n+=
r[a],a<t.length&&(n+=bb(t[a]));return new mi(n)},progressBar:(e,t)=>new mi(s$(e,t)),progressRing:(e,t)=>new mi(l$(e,t)),
sparkline:(e,t)=>new mi(c$(e,t)),safeCssColor:(e,t)=>o$(e,t),urlEncode:e=>encodeURIComponent(e==null?"":ut(e)),now:()=>new Date().
toISOString().slice(0,19)+"Z",nextOccurrence:GE,byId:()=>{}},U$={forEach:!0,filter:!0,map:!0,reduce:!0,times:!0,every:!0,
some:!0,find:!0,findIndex:!0,count:!0,groupBy:!0,sumBy:!0},B$=new Set([...Object.keys(zl),...Object.keys(U$)]),vL=new Set(
Object.keys(zl).filter(e=>!hb.has(e))),jp=e=>typeof e=="function"?e:t=>e[t],pc=(e,t)=>(r,n)=>d$.call(t,r)?t[r]:e(r,n),wb=e=>{
let t={},r=pc(jp(e),t),n=g$();return{dc:r,setter:(i,o)=>{t[i]=o,ub(n)},memo:n}},H$=async(e,t,r)=>{let n=Np(e);if(P(n))return n;
let a=wb(t);return a.asyncHosts=r.asyncHosts,a.syncHosts=r.syncHosts,ln(n.right,a)},ln=async(e,t)=>{var r;if(Ti(e)&&e.operator===
";"){let a=await ln(e.left,t);return P(a)?a:ln(e.right,t)}if(Ti(e)&&e.operator==="="){let a=await ln(e.right,t);if(P(a))
return a;let i=ze(a),o=fb(e.left,i,t,un);return P(o)?o:R(i)}if(Ov(e)){if((r=t.letBound)!=null&&r.has(e.id))return Ce(gt(
`Cannot redeclare let binding '${e.id}'`,e));let a=await ln(e.init,t);if(P(a))return a;let i=ze(a);return e.body?ln(e.body,
mb(t,e.id,i)):R(i)}let n=W$(e);if(n&&t.asyncHosts&&ns(e,t.asyncHosts)){if(n.kind==="?"&&Ti(n.otherwise)&&n.otherwise.operator===
";")return Ce(gt("This `cond ? a : b` statement's else-branch is a `;` sequence \u2014 `;` binds looser than `? :`, so it may\
 have swallowed the rest of the script. Wrap the whole conditional in parentheses \u2014 `(cond ? a : b); next` \u2014 or write it\
 as `cond && a; !cond && (b; c)`.",e));let a=await ln(n.test,t);if(P(a))return a;let i=ze(a);switch(n.kind){case"?":return ln(
i?n.then:n.otherwise,t);case"&&":return i?ln(n.then,t):R(i);case"||":return i?R(i):ln(n.then,t)}}if(nc(e)&&_r(e.callee)&&
t.asyncHosts&&e.callee.name in t.asyncHosts){let a=e.callee.name;for(let o of e.arguments)if(ns(o,t.asyncHosts))return Ce(
gt(`Async host call '${a}' has an argument that itself contains an async host call. Async host calls must appear at stat\
ement top-level or as the RHS of an assignment, not nested inside other expressions. Bind the inner result to a variable\
 first.`,e));let i=[];for(let o of e.arguments){let s=le(o,t,un);if(P(s))return s;i.push(ze(s))}try{let o=await t.asyncHosts[a](
...i);return R(o)}catch(o){let s=o instanceof Error?o.message:String(o);return Ce(gt(`Error invoking async host '${a}': ${s}`,
e))}}return t.asyncHosts&&ns(e,t.asyncHosts)?Ce(gt("Async host call appears nested inside another expression. Async host\
 calls must appear at statement top-level, as the RHS of an assignment, or as a branch of a conditional statement (`ok &\
& host()`). Bind the inner result to a variable first.",e)):le(e,t,un)},W$=e=>pp(e)?{kind:"?",test:e.test,then:e.consequent,
otherwise:e.alternate}:Ti(e)&&(e.operator==="&&"||e.operator==="||")?{kind:e.operator,test:e.left,then:e.right}:null,q$=new Set(
["parent"]),ns=(e,t)=>{if(nc(e)&&_r(e.callee)&&e.callee.name in t)return!0;for(let r of Object.keys(e)){if(q$.has(r))continue;
let n=e[r];if(by(n)){if(ns(n,t))return!0}else if(Array.isArray(n)){for(let a of n)if(by(a)&&ns(a,t))return!0}}return!1},
by=e=>typeof e=="object"&&e!==null&&typeof e.type=="string";var V$=(e,t)=>{var r;let n=new Map;for(let i of e){let o=t.get(i);if(!o)continue;let s=n.get(o.y);s?s.add(o.x):n.set(o.y,
new Set([o.x]))}let a=[];for(let i of[...n.keys()].sort((o,s)=>o-s)){let o=[...(r=n.get(i))!=null?r:[]].sort((c,u)=>c-u),
s=o[0],l=o[0];for(let c of o.slice(1)){if(c===l+1){l=c;continue}a.push({y:i,startCol:s,span:l-s+1}),s=c,l=c}o.length>0&&
a.push({y:i,startCol:s,span:l-s+1})}return a},Y$=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)if(e.has(r))return!1;
return!0},wy=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)e.add(r)},z$=(e,t)=>{let r=e.get(t.y);r||(r=[],e.set(
t.y,r));for(let a=0;a<r.length;a+=1)if(Y$(r[a],t))return wy(r[a],t),a;let n=new Set;return wy(n,t),r.push(n),r.length-1},
K$=(e,t)=>{let r=new Map;for(let i of t)r.set(i.index,{x:i.x,y:i.y});let n=new Map,a=[];for(let i of e)for(let o of V$(i.
slots,r))a.push({recordKey:i.recordKey,...o,lane:z$(n,o)});return a};var G$=e=>e,Tb=k(G$,e=>e.objects),kb=k(Tb,e=>Hn(e,t=>t.type)),J$=k(Tb,e=>Xc(Hn(e,t=>t.type),t=>bt(t,r=>r.id)));var Wd="__span",qd=e=>{if(typeof e!="object"||e===null)return;let t=e[Wd];if(!(typeof t!="object"||t===null))return t},Z$=/^\d{4}-\d{2}-\d{2}([T ]|$)/,
fc=e=>{if(!(!e?.startField||!e?.axis))return{startField:e.startField,axis:e.axis,endField:e.endField,mode:e.mode==="once"?
"once":e.mode==="grid"?"grid":"repeat",slots:e.slots}},Si=(e,t)=>nr(e)&&!nr(t)?ta(e,Ty(t)):nr(t)&&!nr(e)?ta(Ty(e),t):ta(
e,t),Ty=e=>{if(typeof e!="string"||!Z$.test(e))return e;try{return Ve.PlainDate.from(e)}catch{return e}},ky=(e,t)=>{let r=e[t.
startField];if(r==null||r==="")return;let n=t.endField?e[t.endField]:void 0;return n!=null&&n!==""?Si(n,r)<0?{start:r,end:r}:
{start:r,end:n}:{start:r,end:r}},Lp=(e,t)=>Si(e.start,t)<=0&&Si(e.end,t)>=0,X$=(e,t)=>Si(e.start,t)===0,Q$=(e,t,r)=>r===
"once"?X$(e,t):Lp(e,t),eR=(e,t)=>{let r=Si(e.start,t)===0,n=Si(e.end,t)===0;return r&&n?"single":r?"start":n?"end":"midd\
le"},tR=(e,t,r)=>{let{dataType:n,sort:a,whereClause:i,scope:o,source:s,span:l}=t,c=kb(e)[n]||[];(o==="user"||o==="global")&&
s==="storage"&&(c=c.filter(y=>y._scope===o));let u=rR(c,fc(l),r),d=nR(u,i,r);if(!a)return d;let f=(Array.isArray(a)?a:[a]).
filter(y=>typeof y.field=="string"&&y.field.length>0);return f.length===0?d:[...d].sort((y,b)=>{for(let T of f){let S=y[T.
field],E=b[T.field],_=S==null,O=E==null;if(_&&O)continue;if(_)return 1;if(O)return-1;let D=T.direction==="desc"?-1:1,W=ta(
S,E);if(W!==0)return D*W}return 0})},rR=(e,t,r)=>{if(!t)return e;if(t.mode==="grid"){let o=[];for(let s of e){let l=ky(s,
t);l&&o.push({...s,[Wd]:{start:l.start,end:l.end}})}return o}let n=r(t.axis,{});if(!xe(n)||n.right===void 0)return[];let a=n.
right,i=[];for(let o of e){let s=ky(o,t);s&&Q$(s,a,t.mode)&&i.push({...o,[Wd]:{start:s.start,end:s.end,position:eR(s,a)}})}
return i},nR=(e,t,r)=>t?e.filter(n=>{let a=r(t,n);return xe(a)&&!!a.right}):e,Gr=k(V,B,(e,t)=>{let{scope:r,isIteration:n,
node:a}=t,{parent:i}=r,o=zv(e.def,a);if(o)return n&&i?B(e,xr([i.key,Pn(i.node,a)])):o.isRepeating?B(e,`${r.key}`):B(e,xr(
[r.key,Pn(r.node,o)]))}),aR=Ii(Jr.unknown,"compute"),iR=Ii(Jr.union([Jr.number,Jr.undefined]),"maxLength"),Sy=Ii(Jr.union(
[Jr.number,Jr.undefined]),"pageSize"),es=(e,t,r,n)=>{let a=r.isFormula?n(e,r.value,t.key):R(r.value);return cc(a,r.targetCodec,
r.name)},oR=e=>{let t=k(V,_A,B,(a,i,o)=>{let{node:s,scope:l}=o,c=s.data;if(Bl(c))if(o.isIteration){let d=Gr(a,o.key);if(d){
let f=r(a,d.key);if(xe(f)&&Array.isArray(f.right))return R(f.right[l.index])}}else return R(tR(i,c,(f,h)=>e(a,f,l.key,h)));
let u=aR(s);return es(a,o,u,e)}),r=k(V,B,(a,i)=>{let{key:o}=i;if(i.node.type===ia)return R(i.node.value);let l=ki(a)[o];
return l?R(l?.value):t(a,i.key)}),n=k(V,B,lc,(a,i,o)=>{var s;let{key:l,node:c}=i,u=(s=o[l])==null?void 0:s.length,d=iR(c),
f=ze(es(a,i,d,e)),h=c.data;if(Bl(h)){let T=r(a,i.key);if(xe(T)&&Array.isArray(T.right)){let S=T.right.length,E=f!==void 0?
Math.min(S,f):S,_=Sy(c),O=ze(es(a,i,_,e));return R(u!==void 0?Math.min(E,u):O!==void 0?Math.min(E,O):E)}}let y=Sy(c),b=ze(
es(a,i,y,e));if(b!==void 0){if(u!==void 0){let T=f!==void 0?Math.min(u,f):u;return R(T)}return R(b)}return R(u!==void 0?
u:f??0)});return{selectValue:r,selectLength:n,selectComputedValue:t}},sR=new Set(["rand","generateId","today","dodgy","b\
yId","now"]),lR=(e,t)=>e==="rand"&&t.length>=2,Ey=new Set(Object.keys(Ip)),cR=new Set(["includes","indexOf","lastIndexOf",
"slice","join","concat","split","toLowerCase","toUpperCase","trim","startsWith","endsWith","replace","replaceAll","subst\
ring","charAt","padStart","padEnd","repeat","toFixed","localeCompare"]),rr=e=>typeof e=="object"&&e!==null&&"type"in e&&
typeof e.type=="string",uR=e=>{if(typeof e=="string")return e.startsWith("@")?e.slice(1).trim():e},dR=e=>(typeof e=="str\
ing"?e:"").split(",").map(r=>r.trim()).filter(Boolean),Sb=e=>{let t=e.params;return Array.isArray(t)?t.filter(rr).filter(
r=>r.type==="Identifier"&&typeof r.name=="string").map(r=>r.name):[]},xy=(e,t)=>{var r;return rr(t)&&t.type==="ArrowFunc\
tionExpression"?Sb(t):(r=Ip[e])!=null?r:[]},pR=(e,t,r,n=new Set)=>{let a=new Set,i;try{i=de(e)}catch{return{selfSafe:!1,
deps:a}}let o=!0,s=()=>{o=!1},l=(u,d)=>{d.has(u)||u!=="$data"&&(n.has(u)||s())},c=(u,d)=>{if(o){if(Array.isArray(u)){for(let f of u)
c(f,d);return}if(rr(u))switch(u.type){case"Literal":return;case"Identifier":{typeof u.name=="string"&&l(u.name,d);return}case"\
ThisExpression":s();return;case"TaggedTemplateExpression":{let f=u.tag;if(!(rr(f)&&f.type==="Identifier"&&f.name==="html"&&
!d.has("html")&&!r.has("html"))){s();return}let y=u.quasi,b=rr(y)?y.expressions:void 0;if(Array.isArray(b))for(let T of b)
c(T,d);return}case"BinaryExpression":{let f=u.operator;if(f===";"||f==="="){s();return}c(u.left,d),c(u.right,d);return}case"\
UnaryExpression":c(u.argument,d);return;case"ConditionalExpression":c(u.test,d),c(u.consequent,d),c(u.alternate,d);return;case"\
MatchExpression":{let f=u.scrutinee;f!==void 0&&c(f,d);let h=u.arms;if(!Array.isArray(h))return;for(let y of h){if(!rr(y))
continue;let b=y.test;rr(b)&&b.type==="Identifier"&&b.name==="_"||c(b,d),c(y.consequent,d)}return}case"MemberExpression":{
c(u.object,d),u.computed&&c(u.property,d);return}case"ArrayExpression":{let f=u.elements;if(Array.isArray(f))for(let h of f)
h!==null&&(rr(h)&&h.type==="SpreadElement"?c(h.argument,d):c(h,d));return}case"ObjectExpression":{let f=u.properties;if(!Array.
isArray(f))return;for(let h of f){if(!rr(h))continue;if(h.type==="SpreadElement"){c(h.argument,d);continue}let y=!!h.computed,
b=h.key;if(y&&c(b,d),h.shorthand){rr(b)&&b.type==="Identifier"&&typeof b.name=="string"&&l(b.name,d);continue}c(h.value,
d)}return}case"TemplateLiteral":{let{expressions:f}=u;if(Array.isArray(f))for(let h of f)c(h,d);return}case"LetExpressio\
n":{let f=u.id;c(u.init,d);let h=u.body;h!==void 0&&c(h,typeof f=="string"?new Set([...d,f]):d);return}case"ArrowFunctio\
nExpression":c(u.body,new Set([...d,...Sb(u)]));return;case"CallExpression":{let f=u.callee,h=u.arguments,y=Array.isArray(
h)?h:[];if(rr(f)&&f.type==="Identifier"){let b=typeof f.name=="string"?f.name:"";if(d.has(b)){s();return}if(Ey.has(b)){y.
forEach((T,S)=>{if(S===1){let E=new Set([...d,...xy(b,T)]),_=rr(T)&&T.type==="ArrowFunctionExpression"?T.body:T;c(_,E)}else
c(T,d)});return}if(r.has(b))a.add(b);else if(!B$.has(b)||sR.has(b)&&!lR(b,y)){s();return}for(let T of y)c(T,d);return}if(rr(
f)&&f.type==="MemberExpression"){if(f.computed){s();return}let b=f.property,T=rr(b)&&typeof b.name=="string"?b.name:"";if(c(
f.object,d),Ey.has(T)){y.forEach((S,E)=>{if(E===0){let _=new Set([...d,...xy(T,S)]),O=rr(S)&&S.type==="ArrowFunctionExpr\
ession"?S.body:S;c(O,_)}else c(S,d)});return}if(!cR.has(T)){s();return}for(let S of y)c(S,d);return}s();return}default:s();
return}}};return c(i,new Set(t)),{selfSafe:o,deps:a}},fR=(e,t=new Set)=>{let r=new Map,n=new Set;for(let l of e)r.has(l.
name)&&n.add(l.name),r.set(l.name,l);let a=new Set([...r.keys()].filter(l=>!n.has(l))),i=new Map;for(let l of a){let c=r.
get(l),u=uR(c.compute);if(u===void 0){i.set(l,{selfSafe:!1,deps:new Set});continue}i.set(l,pR(u,dR(c.parameters),a,t))}let o=new Set,
s=!0;for(;s;){s=!1;for(let[l,c]of i)o.has(l)||!c.selfSafe||[...c.deps].every(u=>o.has(u))&&(o.add(l),s=!0)}return o},_y=new WeakMap,
Eb=(e,t)=>{if(e.type===aa&&t.push({name:e.name,compute:e.compute,parameters:e.parameters}),Array.isArray(e.children))for(let r of e.
children)Eb(r,t)},xb=(e,t)=>{if(e.type===ia&&typeof e.name=="string"&&t.add(e.name),Array.isArray(e.children))for(let r of e.
children)xb(r,t)},hR=e=>{let t=_y.get(e);if(t)return t;let r=[];Eb(e,r);let n=new Set;xb(e,n);let a=fR(r,n);return _y.set(
e,a),a},Ay={objects:[]},$d=new Set,mR=(e,t,r,n,a)=>{let i=t.scope,o=S=>{let E=r(e,S);if(xe(E))return E.right},s=S=>{var E;
if(ly(i))return;let _=xr([i.key,S]),O=(E=ki(e)[_])==null?void 0:E.value;if(O!==void 0)return O;let D=o(i.key);if(vn(D)){
let W=D;if(S in W)return W[S]}},l=()=>{let S=i;for(;S;){let E=qd(o(S.key));if(E)return E;S=S.parent}},c=()=>{let S=i;for(;S;){
let E=qd(o(S.key));if(E)return u(S,E);S=S.parent}},u=(S,E)=>{var _;let O=Kr(e,S.key);if(!xe(O))return;let D=O.right,W=fc(
(_=D.node.data)==null?void 0:_.span);if(!W||W.mode!=="grid"||!W.slots)return;let G;try{let Y=Sd(e.def,D.node,W.slots);G=
Dl(e,S.key,Y).key}catch{return}let Z=n(e,G);if(!Array.isArray(Z))return;let H={start:E.start,end:E.end},we=0;for(let Y=0;Y<
Z.length;Y+=1){let te=a(e,W.axis,`${G}[${Y}]`);!xe(te)||te.right===void 0||Lp(H,te.right)&&(we+=1)}return we},d=S=>{var E,
_,O,D,W,G,Z,H,we,Y,te,_e,pe;if(S==="$index"){let ie=ly(i)?void 0:i.index;return R(ie)}if(S==="$parentIndex")return R((E=
i.parent)==null?void 0:E.index);if(S==="$scopeKey")return R(i.key);if(S==="$state")return R(e);if(S==="$data")return R(kb(
(_=e.repo)!=null?_:Ay));if(S==="$spanStart"||S==="$spanEnd"||S==="$spanPosition"){let ie=l();return R(S==="$spanStart"?ie?.
start:S==="$spanEnd"?ie?.end:ie?.position)}if(S==="$spanLength")return R(c());if(S==="$rows")return R(it=>{if(!jt(it))return;
let st,Rr;try{let ir=Sd(e.def,t.node,it),C=Dl(e,i.key,ir).key;st=n(e,C),Rr=o(C)}catch{return}if(Array.isArray(st))return st.
map((ir,C)=>{let ae=Array.isArray(Rr)?Rr[C]:void 0;return vn(ae)&&vn(ir)?{...ae,...ir}:ir??ae})});if(S==="$args")return R(
(O=Ep(e))!=null?O:{});if(S==="$speech"){let ie=Er(e),it=ie?.speech;return R(it??{text:null,lang:null})}if(S==="$variant"){
let ie=Er(e);return R(ie?.variant)}return S==="$now"?R((D=Er(e))==null?void 0:D.now):S==="$email"?R((W=Er(e))==null?void 0:
W.$email):S==="$username"?R((G=Er(e))==null?void 0:G.$username):S==="$userKey"?R((Z=Er(e))==null?void 0:Z.$userKey):S===
"$authKind"?R((H=Er(e))==null?void 0:H.$authKind):S==="$authUid"?R((we=Er(e))==null?void 0:we.$authUid):S==="$connection\
s"?R((Y=Er(e))==null?void 0:Y.$connections):S==="$social"?R((te=Er(e))==null?void 0:te.$social):S==="$isOrgAdmin"?R((_e=
Er(e))==null?void 0:_e.$isOrgAdmin):S==="$orgUser"?R((pe=Er(e))==null?void 0:pe.$orgUser):Ce("not_resolved")},f=S=>{let E=Er(
e),_=E?.[S];return _!==void 0?R(_):Ce("not_resolved")},h=(S,E,_)=>{var O,D,W;if($d.has(_)){let Z=(O=ki(e)[_])==null?void 0:
O.value;return Z!==void 0?Z:s(S)}$d.add(_);try{let G=Kr(e,_);if(P(G))return s(S);let{key:Z,node:H}=G.right;if(H.type===aa&&
E.isCall)return{__orgFunction:!0,compute:H.compute,parameters:H.parameters,key:Z,memoSafe:hR(e.def).has(H.name)};let we=o(
Z);if(vp(H)){let{memberLookupContexts:Y}=E,_e=(H.isRepeating?((D=Y[0])==null?void 0:D.type)==="computed":((W=Y[0])==null?
void 0:W.type)!=="computed")?Y.map(ie=>ie.property):void 0,pe=n(e,Z,_e);return we===void 0?pe:Array.isArray(we)&&Array.isArray(
pe)?we.map((ie,it)=>{let st=pe[it];return vn(st)&&vn(ie)?{...st,...ie}:ie??st}):vn(we)&&vn(pe)?{...pe,...we}:we}else if(we===
void 0){let Y=s(S);if(Y!==void 0)return Y}return we}finally{$d.delete(_)}},y=(S,E,_=i)=>{var O;return(O=b(S,E,_))==null?
void 0:O.value},b=(S,E,_)=>{let{key:O,isDeclared:D}=Dl(e,_.key,S),W=G=>{var Z;return(Z=ki(e)[G])==null?void 0:Z.value};if(D){
let G=h(S,E,O);if(G!==void 0)return{value:G,isStored:W(O)!==void 0}}else if(_.parent){let G=W(O);if(G!==void 0)return{value:G,
isStored:!0};let Z=b(S,E,_.parent);if(Z?.isStored)return Z;let H=h(S,E,O);if(H!==void 0)return{value:H,isStored:!1};if(Z!==
void 0)return Z}else{let G=h(S,E,O);if(G!==void 0)return{value:G,isStored:W(O)!==void 0}}},T=(S,E)=>{var _,O;return!jt(S)||
!jt(E)||(O=J$((_=e.repo)!=null?_:Ay)[S])==null?void 0:O[E]};return(S,E)=>{let _=d(S);if(xe(_))return _.right;let O=f(S);
if(xe(O))return O.right;let D=Sd(e.def,t.node,S),W=y(D,E);if(W!==void 0)return W;if(S==="byId")return T}},gR=e=>{let t=o=>o.
type===hr&&o.isRepeating?[o]:[],r=o=>ks(o).concat(t(o)),n=k(B,o=>r(o.node)),a=k(V,B,(o,s)=>{if(s.node.isOwnScope)return[
B(o,`${s.key}[0]`)];let l=ze(e(o,s.key));return Jc(l,c=>B(o,`${s.key}[${c}]`))}),i=k(V,B,(o,s)=>n(o,s.key).map(l=>{let c=Pn(
o.def,l);return B(o,`${s.scope.key}.${c}`)}));return{selectChildIterationPointers:a,selectChildNodePointers:i}},hc=e=>!!(e.
node.isRepeating&&!e.isIteration),Fp=e=>e.node.type===hr?e.node:{nodeTypes:{},rootType:""},_b=e=>bp(e.node)&&!e.isIteration,
yR=e=>!!e.node.isOwnScope&&!e.isIteration,Ab=e=>{let{isIteration:t,node:r}=e;return t&&r.type===hr},fn=e=>e.node.type===
hr&&e.scope.node!==e.node,Na=e=>fn(e)||Ab(e),vR=e=>lA(e.node.type),bR=e=>{let{key:t,node:r}=e;return fn(e)?t:`${t}.${r.name}`},
$y=e=>pA(e.node)&&!e.isIteration,wR=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),Ry=e=>!(!vp(e.node)||e.node.isRepeating||
e.node.isOwnScope),TR=(e,t,r)=>{let n=(l,c,u,d=[])=>{var f;let{key:h,node:y}=c,b=d.length?d.slice(1):[];if(!y.isTransient){
if(Wv(y)){let T=e(l,h);return xe(T)?T.right:void 0}if(_b(c)&&!u){if(c.node.isOwnScope){let T=a(l,B(l,`${h}[0]`),d);return d.
length===0&&Object.keys(T).length===0?void 0:T}if(d.length&&/^\d+$/.test(d[0])){let T=d[0],S=B(l,`${h}[${T}]`),E=a(l,S,b);
return{[T]:E}}else if(c.node.isRecord){let T=(f=c.node.recordKey)!=null?f:"key",S=typeof c.node.recordValue=="string"?c.
node.recordValue:void 0,E=t(l,h);return S!==void 0&&E.length===0?void 0:E.reduce((_,O)=>{let{[T]:D,...W}=a(l,O,b);if(typeof D!=
"string")return _;if(S===void 0)return _[D]=W,_;let G=W[S];return G!==void 0&&(_[D]=G),_},{})}else return t(l,h).map(S=>a(
l,S,b))}return a(l,c,d)}},a=(l,c,u)=>{let d={},f=u.length?u.slice(1):[],h=(b,T)=>{let{node:S}=b,{name:E}=S,_=fn(b)&&c.node!==
b.node,O=n(l,b,_,T);O!==void 0&&(Ry(b)?Object.assign(d,O):d[E]=O)},y=r(l,c.key);return u.length?(y.forEach(b=>{b.node.name===
u[0]?h(b,f):Ry(b)&&h(b,u)}),d):(y.forEach(b=>h(b,f)),d)},i=(l,c,u)=>n(l,c,fn(c),u),o=k(V,B,gA,i),s=k(V,B,(l,c)=>{let u=i(
l,c);return wR(u)?u:{}});return{selectOutput:o,selectOutputObject:s}};var kR=(e,t,r,n)=>n,Ar=k(V,at,hA,kR,(e,t,r="",n)=>{let a=$b(e,r),i=n?pc(jp(a),n):a;return vb(t,i,n)}),$b=k(V,B,(e,t)=>mR(
e,t,ar,xR,(r,n,a)=>Ar(r,n,a))),SR=(e,t,r,n,a)=>{let i=$b(e,t),o=a?pc(jp(i),a):i;return H$(r,o,n)},{selectValue:ar,selectComputedValue:ER,
selectLength:Da}=oR(Ar),{selectChildIterationPointers:Rb,selectChildNodePointers:Ib}=gR(Da),{selectOutput:xR,selectOutputObject:Up}=TR(
ar,Rb,Ib),ja=e=>k(ar,t=>cc(t,e,"value")),Ob=e=>k(ar,t=>HA(t,e,"value")),_R=e=>k(ER,t=>cc(t,e,"value")),Bp=Ob(F),Cb=ja(pt.union(
[pt.undefined,pt.array(pt.string)])),AR=ja(pt.union([pt.undefined,pt.array(pt.number)])),xL=Ob(pt.string),$R=ja(mr),Nb=ja(
Ie),RR=ja(pt.union([pt.undefined,Nn])),IR=_R(pt.union([pt.undefined,Nn])),OR=ja(pt.union([pt.undefined,Xl])),Hp=ja(n_),CR=(e,t,r,n)=>cc(
Ar(e,r,t.scope.key),n,r),Tt=k(V,B,(e,t)=>_b(t)?Rb(e,t.key):Ib(e,t.key)),Pb=k(V,B,(e,t)=>{let r=yR(t)?`${t.key}[0]`:t.key;
return Tt(e,r)}),Pa=k(V,Gr,yA,(e,t,r=ts)=>{if(t)return r?.(t)?t:Pa(e,t.key,r)}),AL=k(V,B,Gr,(e,t,r)=>r?Tt(e,r.key):[t]),
Mb=k(V,B,_p,(e,t,r)=>{if(t.key===r.key)return!0;let n=Gr(e,r.key);return n?Mb(e,t.key,n.key):!1}),x=(e,t,r)=>{let n=Ii(e,
t,r),a=k(DA,NR.has(t)?i=>PR(n(i)):n);return k(V,B,a,(i,o,s)=>es(i,o,s,Ar))},NR=new Set(["htmlTemplate"]),PR=e=>!e.isFormula&&
Db.string.is(e.value)&&Pv(e.value)?{name:e.name,isFormula:!0,value:fp(hp(e.value)),targetCodec:e.targetCodec}:e,MR=x(xs.string,
"label",e=>Uv(e.name)),DR=x(xs.unknown,"iterationLabel"),jR=k(V,B,DR,(e,t,r)=>{let{node:n}=t;if(P(r))return r;let a=r.right;
if(a!=null&&a!=="")return R(String(a));let i=kA(n);return CR(e,t,i,xs.string)}),Wp=k(V,B,(e,t)=>{let{key:r,isIteration:n}=t;
return n?jR(e,r):MR(e,r)}),LR=(...e)=>t=>e.every(r=>r(t)),Rd=(e,t)=>e===t?e:LR(e,t),jb=(e,t)=>({direction:e.direction,include:Rd(
e.include,t.include),traverseChildren:Rd(e.traverseChildren,t.traverseChildren),traverseParent:Rd(e.traverseParent,t.traverseParent)}),
Lb=e=>(t,r)=>{let n=Gr(t,r.key);if(!n)return;let a=Tt(t,n.key),i=a.indexOf(r);if(i===-1)return;let s=a[i+(e==="back"?-1:
1)];if(s)return s},FR=Lb("forward"),UR=Lb("back"),Fb=(e,t,r)=>{if(!r.traverseChildren(t))return t;let n=Tt(e,t.key),a=Vs(
n);return a?Fb(e,a,r):t},BR=(e,t,r)=>{let n=UR(e,t);return n?Fb(e,n,r):Gr(e,t.key)},Ub=(e,t,r)=>{let n=FR(e,t);if(n)return n;
let a=Gr(e,t.key);if(a&&r.traverseParent(a))return Ub(e,a,r)},Bb=k(V,B,Vv,(e,t,r=ac)=>BR(e,t,r)),qp=k(V,B,Vv,(e,t,r=ac)=>{
if(r.traverseChildren(t)){let n=Tt(e,t.key);if(n.length>0)return n[0]}return Ub(e,t,r)}),Ei=e=>{let{node:t}=e;switch(t.type){case"\
screen":return!0;default:return!1}},HR=k(V,e=>Tt(e,"").filter(Ei)),_s=(e,t,r)=>{let n=r.direction==="back"?Bb(e,t,r):qp(
e,t,r);if(n)return r.include(n)?n:_s(e,n.key,r)},Hb=(e,t,r)=>{let n=[],a=t;for(;a!==void 0;){let i=r.direction==="back"?
Bb(e,a,r):qp(e,a,r);if(!i)break;r.include(i)&&n.push(i),a=i.key}return n},mc=e=>k(V,at,(t,r)=>_s(t,r,e)),OL=mc(Dn({include:Ei,
direction:"back"})),WR=mc(Dn({include:Ei,direction:"forward"})),qR=k(V,at,(e,t)=>{let r=Pa(e,t,Ei);if(!r){let n=qp(e,"",
ac);return n||Ap(e)}return r}),Wb=k(V,Sp,(e,t)=>{let r=Kr(e,t);return P(r)?(console.warn(`[orgicore] cursor "${t}" does \
not resolve in the current app def \u2014 falling back to the home screen (${r.left}).`),Ap(e)):r.right}),Id=e=>e.node.type===
hs,VR=(e,t)=>{let r=Id(t)?t:void 0,n=Pa(e,t.key,Id);for(;n;)r=n,n=Pa(e,n.key,Id);return r},Vp=k(V,Wb,(e,t)=>{if(Ei(t))return t;
let r=Pa(e,t.key,Ei);if(r)return r;let n=VR(e,t);return n||WR(e,t.key)||Ap(e)}),CL=k(kp,e=>Vs(e)),YR=k(V,Vp,(e,t)=>qR(e,
t.key).key),zR=e=>Dn({traverseParent:t=>e!==t}),KR=k(B,zR),GR=k(KR,e=>jb(e,Dn({include:vR}))),JR=x(Qy,"variant","basic"),
ZR=x(Qx,"variant"),XR=x(mr,"pageSize"),QR=x(mr,"maxLength"),qb=x(Ie,"required"),eI=x(Ie,"hidden"),tI=x(ue(Jl),"size"),rI=x(
ue(cn(op)),"validation"),nI=x(ue(ip),"imageOutputOptions"),aI=x(F,"pluginName"),Vb={maxColumns:1},iI=x(tp,"layout",Vb),La=k(
B,eI,(e,t)=>{let{node:{type:r}}=e;return(r===$i||r===aa||r===ia)&&xe(t)&&t.right===void 0?R(!0):t}),oI=k(B,iI,(e,t)=>e.isIteration?
R(Vb):t),sI=x(sv,"formConfig"),DL=x(np,"containerStyle",Vy),jL=x(_i,"data",Vy),lI=x(ue(Ci.array(Gl)),"pluginParams"),Ni=k(
Wp,La,(e,t)=>({label:e,hidden:t})),Yp=k(ar,qb,(e,t)=>P(t)?t:P(e)?R(!1):R(!!t.right&&Yb(e.right))),zp=k(V,B,rI,ar,(e,t,r,n)=>{
if(P(r))return r;if(P(n)||Yb(n.right))return R(void 0);let a=ix(r.right);for(let i of a){let o=Ar(e,i.expression,t.scope.
key);if(P(o))return Ce(`error evaluating validation rule "${i.expression}": ${o.left}`);if(!o.right)return R(cI(e,i.errorMessage,
t.scope.key))}return R(void 0)}),cI=(e,t,r)=>{if(!t.startsWith(Oa))return t;let n=fp(t),a=Ar(e,n,r);return P(a)||a.right==
null||a.right===""?n:String(a.right)},uI=x(F,"help"),dI=x(F,"placeholder"),pI=x(F,"deepHelp"),fI=x(ue(Ci.array(Ci.string)),
"examples"),hI=x(Ie,"aiEnabled"),Yb=e=>typeof e=="string"?e.trim()==="":Array.isArray(e)?e.length===0:e==null,gc=k(Ni,Yp,
qb,zp,uI,dI,pI,fI,tI,hI,(e,t,r,n,a,i,o,s,l,c)=>({...e,missingRequired:t,required:r,errorMessage:n,help:a,placeholder:i,deepHelp:o,
examples:s,size:l,aiEnabled:c})),zb=k(gc,AR,(e,t)=>({...e,value:t})),Kb=k(gc,Cb,(e,t)=>({...e,value:t})),Gb=k(Ni,RR,IR,sI,
(e,t,r,n)=>({...e,currentValue:t,computedValue:r,config:n})),mI=x(Dx,"variant","single"),gI=x(Xd,"idiom","select"),yI=x(
Ci.array(cv),"pickerValues"),vI=e=>typeof e=="string"?{id:e,label:e}:e,bI=k(yI,e=>P(e)?e:R(e.right.map(vI))),yc=k(gc,mI,
bI,(e,t,r)=>({...e,variant:t,pickerValues:r})),wI=k(yc,Bp,gI,(e,t,r)=>({...e,value:t,idiom:r})),TI=k(yc,Cb,(e,t)=>({...e,
value:t})),kI=e=>fn(e)?"":`${e.key}.`,Jb=e=>t=>`${kI(t)}${e}`,SI=Jb("value"),EI=Jb("expanded"),xI=k(B,SI),_I=k(B,EI),Kp=k(
V,xI,OR),Zb=k(V,_I,Nb),Xb=k(B,Ni,Kp,Zb,(e,t,r,n)=>{let a=fn(e);return{...t,value:r,expanded:n,isRoot:R(a)}}),LL=k(Ni,be),
FL=k(gc,be),AI=k(Gb,be),UL=k(zb,be),BL=k(Kb,be),HL=k(yc,be),WL=k(wI,be),qL=k(TI,be),$I=k(Xb,be),RI=k(aI,lI,(e,t)=>({name:e,
params:t})),II=k(RI,be),VL=k(V,B,II,(e,t,{name:r,params:n=[]})=>{let a={};for(let i of n)if(i.type==="static"&&(a[i.name]=
i.value),i.type==="dynamic"){let o=Ar(e,i.formula,t.scope.key);if(P(o))return Ce(`Error evaluating plugin "${r}" param "${i.
name}": ${o.left}`);a[i.name]=o.right}return R(a)});var YL=k(V,B,XR,QR,(e,t,r,n)=>{let{node:a,key:i,isIteration:o}=t;if(o)return;let s=ze(r),l=ze(n);if(s===void 0)return;let c=l??
1/0,u=a.data;if(Bl(u)){let f=ar(e,i);if(xe(f)&&Array.isArray(f.right)){let h=f.right.length;c=l!==void 0?Math.min(h,l):h}}
let d=ze(Da(e,i));return{currentLength:d,totalLength:c,hasMore:d<c,pageSize:s}}),xi={selectAppNodeVariant:x(Yx,"variant",
"folder"),selectFlowStepVariant:x(zx,"variant","aiQuery"),selectHidden:La,selectLabel:Wp,selectMissingRequired:Yp,selectValidationError:zp},
zL=x(F,"name"),KL=x(F,"label"),GL=x(Ie,"isRepeating"),JL=x(Ie,"isOwnScope"),ZL=x(Ie,"isRecord"),XL=x(F,"recordKey"),QL=x(
F,"recordValue"),e6=x(ce.unknown,"compute"),t6=x(Ie,"isDerived"),r6=x(Ie,"isTransient"),n6=x(mr,"maxLength"),a6=x(mr,"pa\
geSize"),OI=x(ue(rp),"place"),CI=x(ue(tp),"layout"),NI=x(ue(np),"containerStyle"),PI=x(F,"submitObjectType"),MI=x(ue(cn(
op)),"validation"),DI=x(Ie,"required"),jI=x(F,"help"),LI=x(F,"placeholder"),i6=x(F,"deepHelp"),o6=x(ue(ce.array(ce.string)),
"examples"),FI=x(ue(Jl),"size"),UI=x(Ie,"aiEnabled"),BI=x(F,"iterationLabel"),HI=x(F,"nounLabel"),vc=x(F,"icon"),Qb=x(F,
"color"),s6=x(ue(Zy),"authMode"),l6=x(Ie,"orgLogin"),c6=x(F,"appLogo"),u6=x(ue(cn(av)),"notifications"),d6=x(ue(cn(iv)),
"transitions"),p6=x(ue(cn(ov)),"botActors"),f6=x(ue(rv),"theme"),h6=x(ue(ap),"themeColors"),m6=x(F,"customCss"),g6=x(mr,
"contentMaxWidth"),y6=x(F,"headerLogo"),v6=x(ue(lv),"navigation"),b6=x(ue(hv),"library"),w6=x(ue(mv),"feature"),e0=x(Ie,
"hideHeader"),T6=x(ue(Xy),"variant"),WI=x(Ie,"showHeader"),qI=x(Ie,"collapsible"),VI=x(Ie,"collapsedByDefault"),YI=x(Ie,
"actionMenu"),zI=x(Ie,"reorderable"),KI=x(F,"orderField"),GI=x(Ie,"hideTopBar"),JI=x(Ie,"hideNav"),ZI=x(F,"itemLabel"),XI=x(
F,"summary"),t0=x(mr,"min"),r0=x(mr,"max"),QI=x(Ie,"autoAdvance"),n0=x(F,"actionLabel"),eO=x(F,"idleTitle"),tO=x(F,"idle\
Description"),rO=x(F,"runningTitle"),nO=x(F,"runningDescription"),aO=x(F,"authTitle"),iO=x(F,"authDescription"),oO=x(F,"\
noCreditsTitle"),sO=x(F,"noCreditsDescription"),a0=x(F,"promptTemplate"),k6=x(F,"imageSource"),i0=x(F,"resultObjectType"),
o0=x(F,"typeDescription"),S6=x(ue(ce.union([Zl,ce.string])),"model"),As=x(Ie,"mockEnabled"),lO=x(mr,"mockResultCount"),cO=x(
F,"mockResults"),uO=x(mr,"maxUserTurns"),dO=x(F,"steeringChips"),pO=x(Ie,"voiceInput"),fO=x(Ie,"speakReplies"),hO=x(F,"s\
peechLang"),mO=x(F,"inputPlaceholder"),gO=x(F,"mockReplies"),yO=x(F,"fetchUrl"),s0=x(F,"prompt"),vO=x(F,"mockImageUrl"),
bO=x(F,"lyrics"),wO=x(mr,"durationSec"),TO=x(F,"mockAudioUrl"),kO=x(F,"audioSourceUrl"),SO=x(F,"language"),EO=x(F,"mockT\
ranscript"),E6=x(F,"sourceExpression"),xO=x(F,"publishDataType"),_O=x(F,"publishScope"),AO=x(F,"publishVariant"),$O=x(F,
"script"),x6=x(ue(Qd),"functionName"),_6=x(F,"args"),RO=x(ue(ce.array(ce.string)),"refreshCallables"),IO=x(F,"onSuccessN\
avigate"),OO=x(F,"successMessage"),CO=x(ue(ce.record(ce.string,uv)),"nodeTypes"),NO=x(F,"rootType"),PO=x(Ie,"canAdd"),MO=x(
Ie,"canEdit"),A6=x(ue(Jd),"textTransform"),DO=x(mr,"step"),$6=x(ue(ce.union([Zd,ce.string])),"format"),R6=x(ue(ce.union(
[Xd,ce.string])),"idiom"),I6=x(F,"placeholderIcon"),jO=x(ue(ip),"imageOutputOptions"),LO=x(F,"aiSystemPromptFormula"),FO=x(
F,"userAvatarUid"),UO=x(Ie,"showCamera"),BO=x(Ie,"showFilePicker"),HO=x(Ie,"showSearch"),WO=x(Ie,"showEdit"),qO=x(Ie,"sh\
owCommit"),VO=x(Ie,"multiple"),YO=x(mr,"maxSizeMb"),zO=x(F,"htmlTemplate"),KO=x(F,"purpose"),GO=x(ue(ce.record(ce.string,
pv)),"actions"),JO=x(F,"parameters"),ZO=x(F,"returns"),XO=x(F,"returnTypeHint"),O6=x(F,"pluginName"),C6=x(ue(ce.array(Gl)),
"pluginParams"),N6=x(F,"roomKey"),QO=x(F,"displayName"),eC=x(F,"identity"),P6=x(ue(ep),"mediaMode"),tC=x(ue(nv),"display\
Mode"),rC=x(mr,"maxTiles"),nC=x(F,"focusIdentity"),aC=x(Xy,"variant","inline"),iC=x(ce.unknown,"imageSource"),oC=x(ue(ce.union(
[Zl,ce.string])),"model"),sC=x(ue(ce.union([Zl,ce.string])),"model"),lC=x(ue(ce.union([Ux,ce.string])),"model"),cC=x(ue(
ce.union([Lx,ce.string])),"model"),uC=x(ue(ce.union([Fx,ce.string])),"model"),dC=x(ce.unknown,"sourceExpression"),pC=x(jx,
"variant","contained"),fC=x(Qd,"functionName"),hC=x(ce.unknown,"args"),mC=x(Jl,"size","medium"),gC=x(Qy,"variant","basic"),
yC=x(Jd,"textTransform","none"),vC=x(ue(ce.union([ev,ce.string])),"variant"),bC=x(ue(ce.union([ce.literal("checkbox"),ce.literal(
"toggle")])),"variant"),wC=x(Zd,"format","date"),TC=x(ue(ce.union([Mx,ce.string])),"variant"),kC=x(ce.string,"placeholde\
rIcon","person"),SC=x(ce.string,"roomKey"),EC=x(ep,"mediaMode","video"),$r=k(xi.selectLabel,xi.selectHidden,OI,(e,t,r)=>({
label:e,hidden:t,place:r})),Gp=k(CI,NI,PI,(e,t,r)=>({layout:e,containerStyle:t,submitObjectType:r})),$s=k($r,MI,DI,jI,LI,
FI,UI,xi.selectMissingRequired,xi.selectValidationError,(e,t,r,n,a,i,o,s,l)=>({...e,validation:t,required:r,help:n,placeholder:a,
size:i,aiEnabled:o,missingRequired:s,errorMessage:l})),xC=k(BI,HI,vc,Qb,(e,t,r,n)=>({iterationLabel:e,nounLabel:t,icon:r,
color:n})),bc=k($r,Gp,xi.selectAppNodeVariant,(e,t,r)=>({...e,...t,variant:r})),_C=k(bc,e=>({...e,variant:R("tabGroup")})),
AC=k(bc,e=>({...e,variant:R("tab")})),$C=k(bc,e=>({...e,variant:R("folder")})),M6=k($r,Gp,vc,e0,(e,t,r,n)=>({...e,...t,icon:r,
hideHeader:n})),RC=k($r,Gp,xC,aC,WI,qI,VI,YI,zI,KI,(e,t,r,n,a,i,o,s,l,c)=>({...e,...t,...r,variant:n,showHeader:a,collapsible:i,
collapsedByDefault:o,actionMenu:s,reorderable:l,orderField:c})),IC=k($r,GI,JI,(e,t,r)=>({...e,hideTopBar:t,hideNav:r})),
OC=k($r,ZI,XI,t0,r0,(e,t,r,n,a)=>({...e,itemLabel:t,summary:r,min:n,max:a})),hn=k($r,xi.selectFlowStepVariant,QI,n0,eO,tO,
rO,nO,aO,iO,oO,sO,(e,t,r,n,a,i,o,s,l,c,u,d)=>({...e,variant:t,autoAdvance:r,actionLabel:n,idleTitle:a,idleDescription:i,
runningTitle:o,runningDescription:s,authTitle:l,authDescription:c,noCreditsTitle:u,noCreditsDescription:d})),CC=k(hn,a0,
iC,i0,o0,oC,As,lO,cO,(e,t,r,n,a,i,o,s,l)=>({...e,variant:R("aiQuery"),promptTemplate:t,imageSource:r,resultObjectType:n,
typeDescription:a,model:i,mockEnabled:o,mockResultCount:s,mockResults:l})),NC=k(hn,a0,i0,o0,sC,uO,dO,pO,fO,hO,mO,As,gO,(e,t,r,n,a,i,o,s,l,c,u,d,f)=>({
...e,variant:R("aiChat"),promptTemplate:t,resultObjectType:r,typeDescription:n,model:a,maxUserTurns:i,steeringChips:o,voiceInput:s,
speakReplies:l,speechLang:c,inputPlaceholder:u,mockEnabled:d,mockReplies:f})),PC=k(hn,yO,(e,t)=>({...e,variant:R("fetchD\
ata"),fetchUrl:t})),MC=k(hn,s0,lC,As,vO,(e,t,r,n,a)=>({...e,variant:R("imageGeneration"),prompt:t,model:r,mockEnabled:n,
mockImageUrl:a})),DC=k(hn,s0,bO,cC,wO,As,TO,(e,t,r,n,a,i,o)=>({...e,variant:R("audioGeneration"),prompt:t,lyrics:r,model:n,
durationSec:a,mockEnabled:i,mockAudioUrl:o})),jC=k(hn,kO,uC,SO,As,EO,(e,t,r,n,a,i)=>({...e,variant:R("transcribe"),audioSourceUrl:t,
model:r,language:n,mockEnabled:a,mockTranscript:i})),LC=k(hn,dC,xO,_O,AO,(e,t,r,n,a)=>({...e,variant:R("publishData"),sourceExpression:t,
publishDataType:r,publishScope:n,publishVariant:a})),FC=k(hn,$O,(e,t)=>({...e,variant:R("script"),script:t})),l0=k($r,pC,
fC,hC,n0,RO,IO,OO,mC,vc,(e,t,r,n,a,i,o,s,l,c)=>({...e,variant:t,functionName:r,args:n,actionLabel:a,refreshCallables:i,onSuccessNavigate:o,
successMessage:s,size:l,icon:c})),c0=k($s,gC,yC,Bp,(e,t,r,n)=>({...e,variant:t,textTransform:r,value:n})),u0=k($s,vC,t0,
r0,DO,$R,(e,t,r,n,a,i)=>({...e,variant:t,min:r,max:n,step:a,value:i})),d0=k($s,bC,Nb,(e,t,r)=>({...e,variant:t,value:r})),
p0=k($s,wC,Bp,(e,t,r)=>({...e,format:t,value:r})),f0=k($s,TC,kC,jO,LO,FO,UO,BO,HO,WO,qO,VO,YO,Hp,(e,t,r,n,a,i,o,s,l,c,u,d,f,h)=>({
...e,variant:t,placeholderIcon:r,imageOutputOptions:n,aiSystemPromptFormula:a,userAvatarUid:i,showCamera:o,showFilePicker:s,
showSearch:l,showEdit:c,showCommit:u,multiple:d,maxSizeMb:f,value:h})),h0=k($r,zO,KO,GO,ar,(e,t,r,n,a)=>({...e,htmlTemplate:t,
purpose:r,actions:n,value:a})),m0=k($r,ar,(e,t)=>({...e,value:t})),g0=k($r,JO,ZO,XO,ar,(e,t,r,n,a)=>({...e,parameters:t,
returns:r,returnTypeHint:n,value:a})),y0=k($r,ar,(e,t)=>({...e,value:t})),v0=k($r,SC,QO,eC,EC,tC,rC,nC,(e,t,r,n,a,i,o,s)=>({
...e,roomKey:t,displayName:r,identity:n,mediaMode:a,displayMode:i,maxTiles:o,focusIdentity:s})),UC=(e,t)=>{if(e.type.includes(
":")||e.type in t)return e.type;let r=vv(e.type);if(r.variant!==void 0)return`${r.type}:${r.variant}`;if(e.variant){let n=e.
variant.includes(":")?e.variant.split(":")[0]:e.variant;return`${e.type}:${n}`}return e.type};var wc=k(V,B,(e,t)=>{let{rootType:r,nodeTypes:n}=Fp(t);if(fn(t))return r;let a=Kp(e,t.key);if(xe(a)&&a.right)return UC(a.
right,n)}),BC=e=>e,b0=k(BC,at,(e,t)=>{let{nodeTypes:r}=e,n=r[t];if(n){let{allowedChildTypes:a,category:i="",icon:o,color:s,
label:l}=n;return{allowedChildTypes:a,name:t,category:i,icon:o,color:s,label:l}}return{allowedChildTypes:[],name:t,category:""}}),
fs=k(B,wc,(e,t="")=>b0(Fp(e),t)),HC=k(fs,e=>e.allowedChildTypes),WC=k(B,HC,(e,t)=>t.map(r=>b0(Fp(e),r))),qC=k(wc,fs,vc,(e,t,r)=>xe(
r)&&r.right?r.right:t.icon||e||"objects"),VC=k(fs,Qb,(e,t)=>xe(t)&&t.right?t.right:e.color||"#616161"),Tc=k(V,B,(e,t)=>fn(
t)?Tt(e,t.key):Ab(t)?Tt(e,`${t.key}.${t.node.name}`):[]),w0=k(Tc,e=>e.length>0),YC=k(B,w0,(e,t)=>!t&&!fn(e)),zC=k(Tt,e=>e.
find(t=>t.node.type===hr)),T0=k(V,B,(e,t)=>{let{scope:r}=t;return r.node.type!==hr?0:1+T0(e,Es(r))}),KC=k(V,at,(e,t)=>Pa(
e,t,Na)),GC=k(V,B,_p,(e,t,r)=>{let n=wc(e,t.key);if(!n)return[];let a=fs(e,r.key),i=[];a.allowedChildTypes.includes(n)&&
i.push("into");let o=KC(e,r.key);return o&&fs(e,o.key).allowedChildTypes.includes(n)&&(i.push("before"),i.push("after")),
i}),j6=k(V,B,_p,(e,t,r,n)=>n,(e,t,r,n)=>{let a=GC(e,t.key,r.key),{mouseY:i,elementTop:o,elementBottom:s}=n,l=r.key;if(a.
length===0)return;let c=s-o,u=i-o<=10,d=s-i<=10,f=!u&&!d,h=i-o<=c/2,y=s-i<=c/2,b=a.includes("before"),T=a.includes("afte\
r");if(a.includes("into")&&f)return{target:l,action:"into",position:"center"};if(h&&b)return{target:l,action:"before",position:"\
top"};if(y&&T)return{target:l,action:"after",position:"bottom"}}),L6=mc(Dn({include:Na,direction:"forward"})),F6=mc(Dn({
include:Na,direction:"back"})),k0=k(V,vA,(e,t)=>Dn({include:Na,direction:t,traverseChildren:r=>{if(!Na(r))return!0;let n=Zb(
e,r.key);return xe(n)&&!!n.right}})),U6=k(V,at,(e,t)=>_s(e,t,k0(e,"forward"))),B6=k(V,at,(e,t)=>_s(e,t,k0(e,"back"))),W6=k(
V,e=>Up(e,"")),JC=e=>k(Up,t=>ib(t,e,"output")),ZC=k(V,B,(e,t)=>$y(t)?t:Pa(e,t.key,$y)),q6=k(V,ZC,(e,t)=>{if(!t||!t.node.
submitObjectType)return;let{scope:r,node:n,key:a}=t,i=Up(e,a),o=Pn(e.def,n),s=d=>xr([r.key,`${o}$${d}`]),l=s("id"),c=s("\
createdAt"),u=s("createdBy");return{pointer:t,type:t.node.submitObjectType,idKey:l,createdAtKey:c,createdByKey:u,obj:i}}),
S0=k(V,GR,(e,t)=>jb(t,Dn({include:r=>{let n=Cd(Yp(e,r.key),!1),a=!!Cd(zp(e,r.key),void 0);return n||a}}))),XC=k(V,at,S0,
_s),QC=(e,t)=>P(Kr(e,t))?void 0:XC(e,t),Y6=k(V,at,S0,Hb),e2=k(V,at,(e,t)=>Hb(e,t,Dn({traverseParent:ts,include:r=>{if(r.
node.type!==Ri)return!1;let n=Hp(e,r.key);if(P(n)||Array.isArray(n.right))return!1;let{url:a,previewUrl:i}=n.right;return!a&&
!!i}}))),z6=k(V,e2,(e,t)=>t.flatMap(r=>{let n=ze(Hp(e,r.key));return Array.isArray(n)?[]:[{pointerKey:r.key,value:n,imageOutputOptions:Cd(
nI(e,r.key),void 0)}]})),t2=k(bc,be),r2=k(_C,be),n2=k(AC,be),a2=k($C,be),i2=k(RC,be),o2=k(IC,be),s2=k(OC,be),l2=k(hn,be),
c2=k(CC,be),u2=k(NC,be),d2=k(PC,be),p2=k(MC,be),f2=k(DC,be),h2=k(jC,be),m2=k(LC,be),g2=k(FC,be),y2=k(l0,be),v2=k(c0,be),
b2=k(u0,be),w2=k(d0,be),T2=k(p0,be),k2=k(f0,be),S2=k(h0,be),E2=k(m0,be),x2=k(g0,be),_2=k(y0,be),A2=k(v0,be),E0=k(Ni,CO,NO,
PO,MO,(e,t,r,n,a)=>({...e,nodeTypes:t,rootType:r,canAdd:n,canEdit:a})),$2=k(E0,be),R2=k(V,B,(e,t)=>{let{node:r,key:n}=t;
switch(k_(r.type)){case ms:let a=JR(e,n);return xe(a)&&a.right==="stringArray"?Kb(e,n):c0(e,n);case ys:return d0(e,n);case gs:
let i=ZR(e,n);return xe(i)&&i.right==="intArray"?zb(e,n):u0(e,n);case vs:return p0(e,n);case Ri:return f0(e,n);case bs:return yc(
e,n);case hr:return r.isRepeating?Xb(e,n):E0(e,n);case Ia:return h0(e,n);case ec:return Gb(e,n);case $i:return m0(e,n);case aa:
return g0(e,n);case ia:return y0(e,n);case Ur:return hn(e,n);case rc:return l0(e,n);case cp:return v0(e,n);default:return Ni(
e,n)}}),I2=k(V,Vp,(e,t)=>{let r=e0(e,t.key);return xe(r)&&r.right===!0}),Pi=k(V,Pb,(e,t)=>t.filter(r=>{let n=La(e,r.key);
return!(xe(n)&&n.right)})),Iy={kind:"auto"},O2=40,C2=e=>e?.mode==="spatial",bi=(e,t,r)=>{if(typeof r=="number")return Number.
isFinite(r)?r:void 0;if(typeof r!="string")return;if(!r.startsWith("@")){if(r.trim()==="")return;let i=Number(r);return Number.
isFinite(i)?i:void 0}let n=Ar(e,fp(r),t);if(!xe(n))return;let a=n.right;return typeof a=="number"&&Number.isFinite(a)?a:
void 0},N2=k(V,B,oI,(e,t,r)=>{if(!xe(r))return;let n=r.right;if(!C2(n))return;let a=bi(e,t.key,n.cols);if(a===void 0)return;
let i=Math.floor(a);if(i<1)return;let o=bi(e,t.key,n.rows),s=o!==void 0&&Math.floor(o)>=1?Math.floor(o):void 0,l=typeof n.
rowHeight=="number"&&Number.isFinite(n.rowHeight)&&n.rowHeight>0?n.rowHeight:void 0,c=typeof n.minColumnWidth=="number"&&
n.minColumnWidth>0?n.minColumnWidth:O2;return{cols:i,rows:s,rowHeight:l,minColumnWidth:c}}),Oy=e=>e===void 0?1:Math.max(
1,Math.floor(e)),P2=(e,t)=>{let r=Math.min(Math.max(0,Math.floor(e.x)),t.cols-1),n=Math.max(0,Math.floor(e.y)),a=Math.min(
Oy(e.w),t.cols-r),i=Oy(e.h);return t.rows!==void 0&&(n=Math.min(n,t.rows-1),i=Math.min(i,t.rows-n)),a=Math.max(1,a),i=Math.
max(1,i),{kind:"placed",x:r,y:n,w:a,h:i}},M2=k(V,B,(e,t,r)=>r,(e,t,r)=>{let n=t.node.place,a=rp.is(n)?n:void 0;if(!a)return Iy;
let i=bi(e,t.key,a.x),o=bi(e,t.key,a.y);if(i===void 0||o===void 0)return Iy;let s=bi(e,t.key,a.w),l=bi(e,t.key,a.h);return P2(
{x:i,y:o,w:s,h:l},r)}),D2=k(V,Pi,(e,t)=>t.flatMap(r=>hc(r)?x0(r)?[]:Tt(e,r.key).filter(n=>{let a=La(e,n.key);return!(xe(
a)&&a.right)}):[r])),x0=e=>{var t,r;return((r=fc((t=e.node.data)==null?void 0:t.span))==null?void 0:r.mode)==="grid"},j2=k(
Pi,e=>e.filter(t=>hc(t)&&x0(t))),L2=k(V,Pi,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{let a=t.find(o=>hc(o)&&o.node.name===r);if(!a)
return[];let i=[];return Tt(e,a.key).forEach((o,s)=>{let l=La(e,o.key);if(xe(l)&&l.right)return;let c=M2(e,o.key,n);c.kind===
"placed"&&i.push({index:s,x:c.x,y:c.y})}),i}),X6=k(V,(e,t)=>t,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{var a;let i=B(e,r),o=fc(
(a=i.node.data)==null?void 0:a.span);if(!o||o.mode!=="grid")return[];let s=L2(e,t,o.slots,n);if(s.length===0)return[];let l=F2(
e,t,o.slots),c=s.map(d=>{let f=l[d.index];if(f===void 0)return;let h=Ar(e,o.axis,f);return xe(h)?h.right:void 0}),u=[];for(let d of Tt(
e,r)){let f=La(e,d.key);if(xe(f)&&f.right)continue;let h=ar(e,d.key),y=xe(h)?qd(h.right):void 0;if(!y)continue;let b={start:y.
start,end:y.end},T=[];s.forEach((S,E)=>{let _=c[E];_!==void 0&&Lp(b,_)&&T.push(S.index)}),T.length>0&&u.push({recordKey:d.
key,slots:T})}return K$(u,s)}),F2=(e,t,r)=>{let n=Pi(e,t).find(a=>hc(a)&&a.node.name===r);return n?Tt(e,n.key).map(a=>a.
key):[]};var U2=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="running",B2=(e,t)=>U2(ze(ar(e,t)))?Tt(e,t).map(r=>r.key):
[],H2=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Cy=new WeakMap,W2=(e,t)=>{var r;let n=Cy.get(e);n||(n=new Map,Cy.set(e,
n));let a=n.get(t);if(a!==void 0)return a;let i;try{i=new RegExp(`(^|[^\\w$.])${H2(t)}\\s*\\??\\.\\s*(partial|ready)\\b`).
test((r=JSON.stringify(e))!=null?r:"")}catch{i=!0}return n.set(t,i),i},q2=(e,t)=>{if(Tt(e,t).length>0)return!0;let{name:r}=B(
e,t).node;return r?W2(e.def,r):!1},_0="@@orgicore/INIT_APP",A0="@@orgicore/INIT_APP_INSTANCE",$0="@@orgicore/UPDATE_DEF",
R0="@@orgicore/UPDATE_CONTEXT_DATA",I0="@@orgicore/UPDATE_REPO",O0="@@orgicore/UPDATE_VALUE",C0="@@orgicore/CLEAR_VALUE",
N0="@@orgicore/INSERT_SLOT",P0="@@orgicore/SWAP_SLOT",M0="@@orgicore/MOVE_SLOT",D0="@@orgicore/SET_CURSOR",j0="@@orgicor\
e/PUSH_CURSOR",L0="@@orgicore/POP_CURSOR",F0="@@orgicore/MOVE_NODE",U0="@@orgicore/REMOVE_NODE",B0="@@orgicore/CLEAR_SUB\
TREE",H0="@@orgicore/BULK_ACTION",W0="@@orgicore/LOAD_MORE",Jp="@@orgicore/SET_PAGE",V2=(e,t)=>({type:_0,payload:{appDef:e,
appInstance:t}}),Y2=e=>({type:A0,payload:{appInstance:e}}),z2=e=>({type:$0,payload:{appDef:e}}),K2=e=>({type:R0,payload:{
data:e}}),G2=e=>({type:I0,payload:{repo:e}}),q0=(e,t)=>({type:O0,payload:{pointerKey:e,value:t}}),V0=e=>({type:C0,payload:{
pointerKey:e}}),Y0=(e,t)=>({type:N0,payload:{pointerKey:e,index:t}}),J2=(e,t,r)=>({type:P0,payload:{pointerKey:e,fromIndex:t,
toIndex:r}}),Z2=(e,t)=>({type:M0,payload:{pointerKey:e,toIndex:t}}),z0=(e,t)=>({type:D0,payload:{pointerKey:e,args:t}}),
X2=(e,t)=>({type:j0,payload:{pointerKey:e,args:t}}),Q2=()=>({type:L0}),eN=(e,t,r)=>({type:F0,payload:{pointerKey:e,toPointerKey:t,
target:r}}),K0=e=>({type:U0,payload:{pointerKey:e}}),G0=e=>({type:B0,payload:{pointerKey:e}}),tN=e=>({type:H0,payload:{actions:e}}),
rN=e=>({type:W0,payload:{pointerKey:e}}),nN=(e,t)=>({type:Jp,payload:{pointerKey:e,page:t}}),Ny={insertSlot:Y0,removeNode:K0,
updateValue:q0,clearValue:V0,clearSubtree:G0,setCursor:z0},Py={initApp:V2,initAppInstance:Y2,updateDef:z2,updateContextData:K2,
updateRepo:G2,updateValue:q0,clearValue:V0,clearSubtree:G0,insertSlot:Y0,removeNode:K0,swapSlot:J2,moveSlot:Z2,setCursor:z0,
pushCursor:X2,popCursor:Q2,moveNode:eN,bulkAction:tN,loadMore:rN,setPage:nN},aN=e=>{let t={};for(let r in Py){let n=Py[r];
t[r]=(...a)=>e(n(...a))}return t},$t=(e,t)=>{let r=oa(e);return{...e,instance:{...r,...t}}},J0=(e,t)=>{switch(t.type){case _0:
return sN(e,t);case A0:return lN(e,t);case $0:return cN(e,t);case R0:return uN(e,t);case I0:return dN(e,t);case O0:return pN(
e,t.payload);case C0:return fN(e,t);case B0:return Q0(e,t.payload);case N0:return mN(e,t);case U0:return tw(e,t.payload);case P0:
return gN(e,t.payload);case F0:return yN(e,t);case M0:return Vd(e,t.payload);case D0:return vN(e,t);case j0:return TN(e,
t);case L0:return SN(e);case W0:return EN(e,t);case Jp:return nw(e,t);case H0:return t.payload.actions.reduce((r,n)=>J0(
r,n),e)}},iN=(e,t)=>{let r=t.payload.pointerKey;return B(e,r)},Z0=(e,t)=>{let r=Kr(e,t);if(P(r)){console.warn(`[orgicore\
] ignoring write to unresolvable pointer "${t}" \u2014 the node is not declared on the current app def (${r.left}).`);return}
return r.right},oN=e=>t=>t.pointer===e.pointer?e:t,sN=(e,t)=>{let{appDef:r,appInstance:n}=t.payload;return{...e,def:r,instance:n}},
lN=(e,t)=>{let{appInstance:r}=t.payload;return{...e,instance:r}},cN=(e,t)=>{let{appDef:r}=t.payload;return{...e,def:r}},
uN=(e,t)=>{let{data:r}=t.payload;return{...e,context:{...e.context,...r}}},dN=(e,t)=>{let{repo:r}=t.payload;return{...e,
repo:r}},X0=(e,t,r)=>{let n=pn(e),a=lc(e),i={pointer:t,length:r};if(!a[t])return $t(e,{lengths:[...n,i]});let s=n.map(l=>l.
pointer===t?i:l);return $t(e,{lengths:s})},pN=(e,t)=>{let{value:r,pointerKey:n}=t,a=Z0(e,n);if(!a)return e;let{key:i,scope:o,
node:s}=a;if(s.isDerived)return e;let l=dn(e),c={pointer:i,value:r},d=ki(e)[i];if(!d){let y=$p(e,o.key).reduce((b,T)=>{if(bp(
T.node)){let S=T.index+1,E=Es(T),_=ze(Da(e,E));if(S>_)return X0(b,E,S)}return b},e);return $t(y,{data:[...l,c]})}if(d.value===
r)return e;let f=l.map(oN(c));return $t(e,{data:f})},kc=e=>(t,r,n)=>jA(e,t,r,n),fN=(e,t)=>{let r=Z0(e,t.payload.pointerKey);
if(!r)return e;let a=dn(e).filter(i=>i.pointer!==r.key);return $t(e,{data:a})},Q0=(e,{pointerKey:t})=>{let r=hN(e,t),n=dn(
e),a=pn(e),i=n.filter(s=>!r.has(s.pointer)),o=a.filter(s=>!r.has(s.pointer));return i.length===n.length&&o.length===a.length?
e:$t(e,{data:i,lengths:o})},hN=(e,t)=>{let r=new Set,n=a=>{if(!r.has(a)){r.add(a);for(let i of Tt(e,a))n(i.key)}};return n(
t),r},ew=(e,t,r)=>{let n=[],a=new Set,i=s=>{if(!a.has(s.key)){a.add(s.key),r(s)&&n.push(s.key);for(let l of Tt(e,s.key))
i(l)}},o=Kr(e,t);return xe(o)&&i(o.right),n},mN=(e,t)=>{let{node:r,isIteration:n,key:a}=iN(e,t),{index:i}=t.payload,o=dn(
e),s=pn(e),l=lc(e);if(!r.isRepeating||n)return e;let c=kc(e),u=o.map(h=>{let{pointer:y}=h,b=na(e,a,y);if(b>=i){let T=c(a,
y,b+1);return{...h,pointer:T}}return h}),d=s.map(h=>{let{pointer:y,length:b}=h;if(a===y)return{pointer:y,length:b+1};let T=na(
e,a,y);if(T>=i){let S=c(a,y,T+1),E=Mn(e,S);return{length:b,pointer:Es(E)}}return h}),f=$t(e,{data:u,lengths:d});if(!l[a]){
let h=pn(f);return $t(f,{lengths:[...h,{pointer:a,length:1}]})}return f},Vd=(e,{pointerKey:t,toIndex:r})=>{let n=Mn(e,t),
a=n.key;if(!n.node.isRepeating)return e;let i=dn(e),o=pn(e),s=kc(e),l=n.index,c=Math.min(l,r),u=Math.max(l,r),d=i.map(h=>{
let{pointer:y}=h,b=na(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,S=s(a,y,T);return{...h,pointer:S}}return h}),f=o.map(
h=>{let{pointer:y}=h,b=na(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,S=s(a,y,T),E=Mn(e,S);return{...h,pointer:Es(E)}}
return h});return $t(e,{data:d,lengths:f})},gN=(e,{fromIndex:t,toIndex:r,pointerKey:n})=>{let a=Mn(e,n),i=a.key,o=dn(e);
if(!a.node.isRepeating)return e;let s=kc(e),l=o.map(c=>{let{pointer:u}=c,d=na(e,i,u);if(d===t||d===r){let h=s(i,u,d===t?
r:t);return{...c,pointer:h}}return c});return $t(e,{data:l})},tw=(e,{pointerKey:t})=>{var r;let{scope:n,isIteration:a,key:i}=B(
e,t);if(!a){let h=`${t}[`,y=dn(e).filter(T=>!T.pointer.startsWith(h)),b=pn(e).filter(T=>T.pointer!==t&&!T.pointer.startsWith(
h));return $t(e,{data:y,lengths:b})}let o=((r=Gr(e,i))==null?void 0:r.key)||"",s=dn(e),l=pn(e),c=n.index,u=kc(e),d=s.flatMap(
h=>{let{pointer:y}=h,b=na(e,o,y);if(b===c)return[];if(b>c){let T=u(o,y,b-1);return{...h,pointer:T}}return h}),f=l.flatMap(
h=>{let{pointer:y,length:b}=h;if(o===y){let S=h.length-1;return S===0?[]:{pointer:y,length:S}}let T=na(e,o,y);if(T===c)return[];
if(T>c){let S=u(o,y,T-1),E=Mn(e,S);return{length:b,pointer:Es(E)}}return h});return $t(e,{data:d,lengths:f})},yN=(e,t)=>{
let{pointerKey:r,toPointerKey:n,target:a}=t.payload,i=B(e,r),o=Gr(e,i.key);if(!o)return e;let s=B(e,n);if(!Na(i)||!Na(s)||
i.key===s.key)return e;if(a==="into"){let l=bR(s),c=B(e,l);if(o.key===c.key)return e;let[u]=My(e,i,o,c);return u}if(a===
"before"||a==="after"){if(fn(s))return e;let l=Gr(e,s.key);if(!l)return e;let c=i.scope.index,u=s.scope.index,d=a==="bef\
ore"?-1:0,f=a==="after"?1:0;if(o.key===l.key){if(c===u)return e;let b=c<u?d:f,T=u+b;return T===c?e:Vd(e,{pointerKey:i.key,
toIndex:T})}let[h,y]=My(e,i,o,l);if(e!==h){let b=u+f;return Vd(h,{pointerKey:y,toIndex:b})}}return e},My=(e,t,r,n)=>{let{
key:a,scope:i}=t;if(Mb(e,a,n.key))return[e,a];let o=i.index,s=ze(Da(e,n.key)),l=lc(e),c=dn(e),u=pn(e),d=`${n.key}[${s}]`,
f=c.flatMap(T=>{if(na(e,r.key,T.pointer)===o){let E=T.pointer.replace(a,d);return[T,{...T,pointer:E}]}return T}),h=u.flatMap(
T=>{if(n.key===T.pointer){let S=T.length+1;return{pointer:T.pointer,length:S}}if(T.pointer.startsWith(a)){let S=T.pointer.
replace(a,`${n.key}[${s}]`);return[T,{pointer:S,length:T.length}]}return T}),y=$t(e,{data:f,lengths:h});if(!l[n.key]){let T=pn(
y);y=$t(y,{lengths:[...T,{pointer:n.key,length:1}]})}return[tw(y,{pointerKey:a}),d]},vN=(e,t)=>{let{pointerKey:r,args:n}=t.
payload;return $t(e,n===void 0?{cursor:r}:{cursor:r,cursorArgs:n})},bN=new Set(["script","publishData"]),wN=(e,t)=>{let r=ki(
e);return ew(e,t,n=>n.node.type===Ur&&typeof n.node.variant=="string"&&bN.has(n.node.variant)).some(n=>{var a;let i=(a=r[n])==
null?void 0:a.value;return typeof i=="object"&&i!==null&&i.status==="running"})},TN=(e,t)=>{let{pointerKey:r,args:n}=t.payload;
if(!r)return e;let a=Sp(e),i=Ep(e),o=u=>ew(u,r,d=>d.node.type===hs).filter(d=>!wN(u,d)).reduce((d,f)=>Q0(d,{pointerKey:f}),
u);if(r===a&&kN(i,n))return o(e);let s=kp(e),l=Kv(e),c=$t(e,{navStack:a?[...s,a]:s,navStackArgs:a?[...l,i]:l,cursor:r,cursorArgs:n});
return o(c)},kN=(e,t)=>{let r=e??{},n=t??{},a=Object.keys(r),i=Object.keys(n);return a.length!==i.length?!1:a.every(o=>r[o]===
n[o])},SN=e=>{let t=kp(e),r=Kv(e),n=t.slice(0,-1),a=r.slice(0,-1),i=t[n.length]||YR(e),o=r[n.length];return $t(e,{navStack:n,
navStackArgs:a,cursor:i,cursorArgs:o})},rw=(e,t)=>{let r=B(e,t),{node:n,key:a,scope:i}=r,o=n.pageSize;if(o===void 0)return;
let s=typeof o=="number"?o:ze(Ar(e,o,i.key))||0;if(s<=0)return;let l=n.maxLength,c=l===void 0?void 0:typeof l=="number"?
l:ze(Ar(e,l,i.key)),u=c??1/0,d=n.data;if(Bl(d)){let h=ar(e,a);if(xe(h)&&Array.isArray(h.right)){let y=h.right.length;u=c!==
void 0?Math.min(y,c):y}}let f=ze(Da(e,a));return{key:a,pageSizeValue:s,currentLength:f,totalLength:u}},nw=(e,t)=>{let{pointerKey:r,
page:n}=t.payload,a=rw(e,r);if(!a)return e;let i=(n+1)*a.pageSizeValue;return X0(e,a.key,i)},EN=(e,t)=>{let{pointerKey:r}=t.
payload,n=rw(e,r);if(!n)return e;let{currentLength:a,totalLength:i,pageSizeValue:o}=n;if(a>=i)return e;let s=Math.ceil(a/
o)-1;return nw(e,{type:Jp,payload:{pointerKey:r,page:s+1}})},xN=(e=q_,t={},r)=>{let n={def:e,context:t,repo:r},i=aN(l=>{
n=J0(n,l)}),o=()=>n;return i.getState=o,{api:i,getState:o,sel:l=>(...c)=>l(n,...c)}},_N=(e,t={})=>{let{api:r,sel:n}=e,a=n(
Kr);r.initAppInstance();let i=(o,s="")=>{Object.entries(o).forEach(([l,c])=>{var u;if(c!==void 0){let d=xr([s,l]),f=a(d);
if(P(f)){if(String(f.left).endsWith("not found"))return;throw new Error(String(f.left))}let h=f.right;if(h.node.isRecord&&
Nn.is(c)){let y=(u=h.node.recordKey)!=null?u:"key",b=h.node.recordValue;Object.entries(c).forEach(([T,S],E)=>{i(typeof b==
"string"?{[y]:T,[b]:S}:{[y]:T,...Nn.is(S)?S:{}},`${d}[${E}]`)})}else h.node.isRepeating&&ox.is(c)?c.forEach((y,b)=>{eu(y)?
r.insertSlot(h.key,b):i(y,`${d}[${b}]`)}):h.node.isOwnScope?Nn.is(c)&&i(c,`${d}[0]`):r.updateValue(h.key,c)}})};i(t)};var[Q6,AN,eF]=Oi("App"),[tF,$N,rF]=Oi("Pointer"),aw=(e={})=>jt(e)?{pointerKey:e}:e;var Yd=(e,t)=>{let r=Kp(e,t.key);if(!xe(r)||r.right===void 0)return;let n=r.right,a=Tc(e,t.key);if(a.length===0)return{...n};
let i=[];for(let o of a){let s=Yd(e,o);s&&i.push(s)}return{...n,_children:i}},[aF,iF]=Oi("AppData",{ctx:{}}),oF={createAppInstance:tu(),
toOutputData:oa};var RN=(e,t)=>{switch(t){case"@root":return sw(e);case"@parent":return e.parentAppContext;case"@self":return e}return iw(
e,t)},iw=(e,t)=>e.name===t?e:e.parentAppContext?iw(e.parentAppContext,t):null,ow=(e,t)=>t===void 0||e.namespace===t?e:e.
parent?ow(e.parent,t):null,Zp=(e="@self")=>{let t=AN(),r=RN(t,e);if(!r)throw new Error(`App context not found for search\
 param ${e}`);return r},IN=e=>{let{namespace:t,pointerKey:r}=aw(e),{name:n}=Zp(t),a=$N();if(r)return{namespace:n,pointerKey:r};
let i=ow(a,n);if(!i)throw new Error(`Pointer context not found for namespace ${n}`);return i},ON=(e,t)=>{let{state:r}=Zp(
t);return e(r)},Mi=e=>t=>ON(e,t),CN=e=>IN(e).pointerKey,NN=(e,t)=>{let r=CN(t),{state:n}=Zp(aw(t).namespace);return e(n,
r)},ee=e=>t=>NN(e,t),sF=ee(B),lF=ee(Pb),cF=ee(Pi),uF=ee(N2),dF=ee(D2);var pF=ee(j2);var fF=ee(k(Da,ze));var hF=Mi(Sp),mF=Mi(Ep),gF=Mi(Wb),yF=Mi(Vp),vF=Mi(I2),bF=Mi(HR);var wF=ee(Wp);var TF=ee(R2),kF=ee($2);var SF=ee(AI);var EF=ee(zC),xF=ee(T0),_F=ee(Tc),AF=ee(w0),$F=ee(WC),RF=ee(YC),IF=ee(qC),OF=ee(VC),CF=ee(wc),NF=ee($I),PF=ee(QC);var sw=e=>{let{parentAppContext:t}=e;return t?sw(t):e};var MF=ee(t2),DF=ee(r2),jF=ee(n2),LF=ee(a2),FF=ee(i2),UF=ee(o2),BF=ee(s2),HF=ee(l2),WF=ee(c2),qF=ee(u2),VF=ee(d2),YF=ee(
p2),zF=ee(f2),KF=ee(h2),GF=ee(m2),JF=ee(g2),ZF=ee(y2),XF=ee(v2),QF=ee(b2),eU=ee(w2),tU=ee(T2),rU=ee(k2),nU=ee(S2),aU=ee(
E2),iU=ee(x2),oU=ee(_2),sU=ee(A2);var[lU,cU]=Oi("form");var Qp=e=>e,DN=k(Qp,e=>bt(e,t=>t.name)),jN=k(Qp,e=>e.reduce((t,r)=>(t[r.name]={allowedChildTypes:[],icon:r.icon||"extens\
ion",color:r.color||"#9E9E9E",category:"plugins"},t),{})),LN=k(Qp,e=>e.map(t=>t.name)),FN=k(DN,at,(e,t)=>e[t]),UN=[ms,gs,
ys,Ri,vs,bs,$i,aa,ia],BN=e=>{let t=[...UN,Ia,"textContent","subsection",rc,...LN(e)],r=jN(e),n=["appNode:folder",is,aa,ia];
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
rm",...t],icon:"route",color:"#2e7d32",category:"layout",label:"Flow"},repeat:{allowedChildTypes:[is],icon:"repeat",color:"\
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
HN=e=>jv({t:Lv({rootType:"app",nodeTypes:e,iterationLabel:"@(value.label || value.name || 'New ' + (value.variant || val\
ue.type)) + (value.isRepeating ? '[...]' : '')",nounLabel:"@value.variant || value.type",label:"App Config"})}),Dy={anonOnly:"\
public",hybrid:"public",userOnly:"private"},WN="data-degraded-node",qN=`<div ${WN}="true" role="alert" style="margin:8px\
 0;padding:8px 12px;border:1px solid #e6b800;border-radius:6px;background:#fff8e1;color:#8a6d00;font-size:0.875rem;">\u26A0\uFE0F \
This part of the page couldn't be displayed.</div>`,VN=e=>({type:Ia,name:e,htmlTemplate:qN}),YN=Sc.intersection([Sc.partial(
{value:Xl}),Nn]),zN=JC(YN),KN=(e,t,r={})=>{let n=h=>{var y;let{t:b=[],value:T}=h,S=b.length>0?b.map(n):void 0,E;try{E=a(
T)}catch(O){if(!r.lenient)throw O;return VN((y=T.name)!=null?y:"unnamed")}let _={...E,children:S};return _.submitObjectType&&
(_.children||(_.children=[]),_.children=[..._.children,...Dv()]),_},a=h=>{let y=i(h),b=c_.decode(y);if(_x(b))return b.right;
let T=Ax(b.left),S=Md(b.left),E=b.left.some(O=>O.context.some(D=>D.key==="columnBreaks")),_='Check that your node has a \
valid "type" property.';throw E&&(_="columnBreaks format mismatch. System expects number[] (e.g., [2, 5, 7]) but you pro\
vided responsive objects. Convert to legacy format or update types."),new Error(`\u{1F6A8} Design Node Error - ${T}
\u{1F4CD} Location: ${S||"root"}
\u{1F4A1} Fix: ${_}
\u{1F4CB} Node: ${JSON.stringify(y,null,2).substring(0,500)}`)},i=h=>{let y=o(h),{name:b="unnamed",id:T,...S}=y;return{name:b,
...S}},o=h=>{let{type:y,...b}=h,T=FN(t,y);if(T){let{parameters:E={},description:_,icon:O,image:D,...W}=b;if(sx.is(E))return{
type:Ia,htmlTemplate:`@${y}(${T.parameters.map(G=>E[G.name||""]||"undefined").join(",")})`,pluginName:y,...W}}let S=vv(y);
if(S.variant!==void 0)return{type:S.type,variant:S.variant,...b};if(y==="image"||y==="textContent")return{type:Ia,...b};
if(!H_.is(y))throw new Error(`Invalid node type: ${y}`);if(y===tc)return{...h,isRepeating:!0};if(y===Ql){let{appLogo:E,..._}=h,
O={type:y,..._},D=O.authMode;return D&&Dy[D]&&(O={...O,authMode:Dy[D]}),O}return h},s={def:HN(BN(t)),instance:e},l=zN(s,
"t");if(P(l))return Ce(`Invalid design node: ${l.left}`);let c=l.right,{value:u={type:"app",name:""},...d}=c,f={value:{...u,
name:""},...d};try{return R(n(f))}catch(h){return Ce(ax(h))}},GN=e=>e!==void 0&&!(typeof e=="object"&&e!==null&&!Array.isArray(
e)&&Object.keys(e).length===0),Ko=e=>{var t;if(!e||!e.data||e.data.length===0)return;let r=(t=e.data.find(o=>o.pointer===
"value"))==null?void 0:t.value,n=GN(r),i={def:jv({t:Lv({rootType:"app",nodeTypes:{}})}),instance:e};if(n){let o=B(i,"t");
return Yd(i,o)}else{let o=B(i,"t"),s=Tc(i,o.key);if(s.length===0)return{type:"folder",name:""};let l=[];for(let c of s){
let u=Yd(i,c);u&&l.push(u)}return{type:"folder",_children:l}}},uw=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.
minClientVersion,appConfig:Ko(e.appConfig),users:Ko(e.users),objectTypes:Ko(e.objectTypes),objectInstances:Ko(e.objectInstances),
plugins:Ko(e.plugins)}),dw=(e,t,r,n)=>{let{_children:a,...i}=e;if(r.push({pointer:`${t}.value`,value:i}),a&&a.length>0){
r.push({pointer:`${t}.expanded`,value:!0});let o=`${t}.t`;n.push({pointer:o,length:a.length}),a.forEach((s,l)=>{let c=`${o}\
[${l}]`;dw(s,c,r,n)})}},Go=(e,t,r)=>{if(!e)return{};let n=[],a=[],{_children:i,...o}=e;o.type==="folder"&&Object.keys(o).
length===1||n.push({pointer:"value",value:o}),i&&i.length>0&&(n.push({pointer:"expanded",value:!0}),a.push({pointer:"t",
length:i.length}),i.forEach((c,u)=>{dw(c,`t[${u}]`,n,a)}));let l={data:n,lengths:a};return t&&(l.cursor=t),r&&(l.navStack=
r),l},JN=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.minClientVersion,appConfig:Go(e.appConfig,
e.appConfig?"t[0]":void 0),users:Go(e.users,e.users?"t[0]":void 0),objectTypes:Go(e.objectTypes,e.objectTypes?"t[0]":void 0),
objectInstances:Go(e.objectInstances,e.objectInstances?"t[0].t[0]":void 0),plugins:Go(e.plugins,e.plugins?"t[0]":void 0)}),
ZN="\0ORGIGGLY_SANDBOXED_WIDGET\0",dU=Rt.intersection([Rt.type({kind:Rt.literal("sandboxed-widget"),pluginName:Rt.string,
params:Rt.UnknownRecord}),Rt.partial({embedsThirdPartyMedia:Rt.boolean,connections:Rt.array(Mv),widgetOwner:Rt.string})]),
XN=(e,t,{embedsThirdPartyMedia:r,connections:n,widgetOwner:a}={})=>{let i={kind:"sandboxed-widget",pluginName:e,params:t,
...r?{embedsThirdPartyMedia:!0}:{},...n?.length?{connections:n}:{},...a!==void 0?{widgetOwner:a}:{}};return ZN+JSON.stringify(
i)};var QN=({name:e,htmlTemplate:t,parameters:r,runtime:n,embedsThirdPartyMedia:a,connections:i,widgetOwner:o})=>(...s)=>{let l=r.
reduce((c,u,d)=>(c[u.name||`param${d}`]=s[d],c),{});return n==="sandboxed"?XN(e,l,{embedsThirdPartyMedia:a,connections:i,
widgetOwner:o}):String(O$(hp(t),l))},eP=e=>e.reduce((t,r)=>(t[r.name]=QN(r),t),{});var tP=Q.intersection([Q.type({name:Q.string}),Xl]),rP=Q.intersection([Xl,Nn]),nP=Q.union([Q.literal("text"),Q.literal("\
number"),Q.literal("boolean"),Q.literal("temporal")]),pU=nP.types.map(e=>e.value);var aP=Q.type({pointer:Q.string,value:Q.unknown}),iP=Q.type({pointer:Q.string,length:Q.number}),Jo=Q.partial({cursor:Q.string,
navStack:Q.array(Q.string),data:Q.array(aP),lengths:Q.array(iP)}),fU=Q.intersection([Q.type({versionId:Q.string,appConfig:Jo,
users:Jo,objectTypes:Jo,objectInstances:Jo,plugins:Jo}),Q.partial({apiVersion:Q.string,minClientVersion:Q.number})]),oP=Q.intersection(
[Q.type({id:Q.string,pointer:Q.string,type:Q.union([Q.literal("user"),Q.literal("group")])}),Q.partial({name:Q.string,email:Q.string,
isAdmin:Q.boolean,usernames:Q.string})]);var sP=e=>e,pw=k(sP,e=>e.fields.filter(t=>Q_.is(t))),fw=k(pw,e=>bt(e,t=>t.name)),gU=k(fw,at,(e,t)=>e[t]),lP=e=>{let t=e.
map(hw).filter(zi);return fa(["name",...t]).map(n=>`value.${n}`).join(" || ")},hw=e=>{let t=fw(e),r=t.name||t.Name;if(r)
return r.name;let n=pw(e)[0];return n&&(n.type==="text"||n.type==="number")?n.name:"id"};var mw=["type","_scope","_groupKey"],yU=new Set(mw);var cP=e=>zi(e.type)&&zi(e.id),uP=e=>e,gw=k(uP,e=>e.types),vU=k(gw,lP),dP=k(gw,e=>bt(e,t=>t.name)),pP=k(dP,at,(e,t)=>e[t]),
bU=k(pP,e=>e&&hw(e));var yw=e=>e,fP=k(yw,e=>e.nodes),hP=k(yw,e=>e.plugins),TU=k(fP,hP,(e,t)=>fa([...e.map(r=>r.name),...t.map(r=>r.name)]));var mP=(e,t)=>({metaModel:e,repo:{objects:t}}),gP=e=>e,Rs=e=>k(gP,t=>{let{data:r=[]}=t??{};return r.map(n=>Qc(n.value)?{
...n.value,pointer:n.pointer}:n.value).filter(e.is)}),yP=Rs(o_),vP=Rs(rP),bP=Rs(X_),EU=Rs(tP),ef=Rs(oP),vw=e=>e,bw=(e,{lenient:t}={})=>{
let r=e.versionId,n=e.apiVersion,a=bP(e.plugins),i=vP(e.objectInstances).filter(cP),o=KN(e.appConfig,a,{lenient:t});return P(
o)?o:R({appConfig:o.right,users:e.users,objectTypes:yP(e.objectTypes),objectInstances:i,plugins:a,versionId:r,apiVersion:n})},
wP=k(vw,e=>bw(e)),xU=k(vw,e=>bw(e,{lenient:!0})),ww=e=>e,TP=k(ww,e=>({types:e.objectTypes})),_U=k(ww,TP,(e,t)=>mP(t,e.objectInstances)),
Ec=e=>e,Tw=e=>{let[t]=gp(e);return t},tf=e=>e.replace(/\.?value$/,""),kw=k(ef,e=>bt(e,t=>tf(t.pointer)));var rf=k(Ec,kw,at,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,type:o,isAdmin:s}=n;if(o!=="group")return;let l=r?
rf(e,Tw(r)):void 0;return{id:a,name:i,parent:l,isAdmin:s}}),kP=k(Ec,kw,at,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,
email:o,type:s,isAdmin:l}=n;if(s!=="user"||!o)return;let c=rf(e,Tw(r));return{id:a,name:i,email:o,parent:c,isAdmin:l}}),
Sw=k(ef,e=>Hn(e,t=>t.type)),Ew=k(Ec,Sw,(e,t)=>(t.user||[]).flatMap(({pointer:a})=>{let i=kP(e,tf(a));return i?[i]:[]})),
AU=k(Ec,Sw,(e,t)=>t.group.flatMap(({pointer:n})=>{let a=rf(e,tf(n));return a?[a]:[]})),SP=k(Ew,e=>bt(e,t=>t.email)),EP=k(
Ew,e=>bt(e,t=>t.name)),$U=k(EP,at,(e,t)=>e[t]),RU=k(SP,at,(e,t)=>e[t]),jy=e=>(e??"").split(/[\s,]+/).map(t=>t.trim().toLowerCase()).
filter(t=>t&&t!=="anon"),IU=k(ef,at,(e,t)=>{var r;let n=t.trim().toLowerCase();if(!n||n==="anon")return;let a=e.find(i=>i.
type==="user"&&jy(i.usernames).includes(n));if(a)return{id:a.id,name:(r=a.name)!=null?r:a.id,usernames:jy(a.usernames)}});var OU=29*24*60*60*1e3;var xw=["flowStep:script","content:data-script","content:action"],Is=[{name:"publishData",async:!0,signature:'publishDat\
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
 with the inputs named explicitly"}],xP=Is.filter(e=>e.async).map(e=>e.name),CU=Is.filter(e=>!e.async).map(e=>e.name),_P=e=>xw.
some(t=>t===e),AP=e=>_P(e)?Is.filter(t=>t.availableIn.includes(e)).map(t=>t.name):[],$P=Object.fromEntries(Is.map(e=>[e.
name,async()=>{throw new Error(`${e.name} isn't available in a test pack: stub it in hosts.asyncHosts`)}])),RP=e=>{if(!P(
e))return e;let t=e.left;return{left:"failingExpression"in t?{message:t.message,expression:L_(t.failingExpression)}:{message:t.
message,expression:t.source}}},IP=e=>{if(!("$now"in e))return e;let{$now:t,...r}=e;if("now"in r&&r.now!==t)throw new Error(
`orgPack: context sets both $now (${String(t)}) and now (${String(r.now)}) \u2014 pass one.`);return{...r,now:t}},OP=(e,t={})=>{
var r,n,a,i;let o=wP(JN(e));if(P(o))throw new Error(`org config failed to decode: ${String(o.left)}`);let s=o.right.appConfig,
l=new Set(["storage","realtime","callable"].flatMap(E=>EA(s,E).map(_=>_.typeName))),c=[...new Set(((r=t.records)!=null?r:
[]).map(E=>E.type).filter(E=>!l.has(E)))];if(c.length)throw new Error(`orgPack: record type(s) ${c.join(", ")} are not d\
eclared as a datasource by any node in this config \u2014 the live app would never load them. Declare a data node (e.g. a sub\
section with data: {dataType, source: "storage"}) or remove the fixture records.`);let u=((n=t.records)!=null?n:[]).filter(
E=>E.isDeleted!==!0),d={objects:[...o.right.objectInstances,...u]},f=IP(t.plugins?{...eP(o.right.plugins),...t.context}:
(a=t.context)!=null?a:{}),h=xN(s,f,d);_N(h,(i=t.init)!=null?i:{});let y=()=>h.getState(),b=[],T=E=>{let _=La(y(),E);return xe(
_)&&_.right===!0},S=E=>{let _=B(y(),E);for(;_;){if(T(_.key))return!1;_=Gr(y(),_.key)}return!0};return{...h,evalAt:(E,_="")=>ze(
Ar(y(),E.startsWith("@")?E:`@${E}`,_)),value:E=>ze(ar(y(),E)),lengthOf:E=>ze(Da(y(),E)),setValue:(E,_)=>{h.api.updateValue(
E,_)},clearValue:E=>{h.api.clearSubtree(E)},setCursor:(E,_)=>{h.api.setCursor(E,_)},isVisible:S,visibleChildren:E=>S(E)?
Pi(y(),E).map(_=>_.key):[],runningSlot:E=>{let _=zo(y(),"",E);if(_===void 0)throw new Error(`runningSlot: no node named \
"${E}" in this org`);return B2(y(),_)},showsAnswerProgress:E=>{let _=zo(y(),"",E);if(_===void 0)throw new Error(`showsAn\
swerProgress: no node named "${E}"`);return q2(y(),_)},childKeys:E=>Tt(y(),E).map(_=>_.key),renderHtml:E=>{let _=B(y(),E).
node.htmlTemplate;if(typeof _!="string")throw new Error(`no htmlTemplate at pointer "${E}"`);let O=hp(_);if(!O.startsWith(
"@"))return O;let D=ze(Ar(y(),O,E));if(D!==void 0&&typeof D!="string")throw new Error(`htmlTemplate at "${E}" evaluated \
to a non-string (${JSON.stringify(D)}); the renderer rejects it. Wrap a html\`\u2026\` result in a template: @\`\${html\`\u2026\`}\``);
return String(D)},widgetCommands:b,nodeAt:E=>B(y(),E).node,runScriptAt:(E,_,O,D)=>{let W=O??B(y(),E).node.script;if(typeof W!=
"string"||W.length===0)throw new Error(`no script found at pointer "${E}"`);let G=async(...Y)=>{(Y.length===1&&Array.isArray(
Y[0])?Y[0]:Y).map(pe=>{let ie=zo(y(),E,String(pe));if(ie===void 0)throw new Error(`clearValues: no node named "${String(
pe)}" is in scope here`);return ie}).forEach(pe=>h.api.clearSubtree(pe))},Z=async(Y,te,_e)=>{let pe=zo(y(),E,String(Y));
if(pe===void 0)throw new Error(`sendToWidget: no node named "${String(Y)}" is in scope here`);if(!B(y(),pe).node.pluginName)
throw new Error(`sendToWidget: "${String(Y)}" is not a widget node`);b.push({widget:String(Y),key:pe,command:String(te),
..._e===void 0?{}:{args:_e}})},H=async Y=>{h.api.updateValue(B(y(),E).key,Y)},we=async Y=>{if(typeof Y!="object"||Y===null||
Array.isArray(Y))throw new Error("setValues: expected an object of {fieldName: value}, e.g. setValues({a: b, b: a})");let te=Object.
entries(Y).map(([_e,pe])=>{let ie=zo(y(),E,_e);if(ie===void 0)throw new Error(`setValues: no field named "${_e}" is in s\
cope here`);return pe===void 0?Ny.clearValue(ie):Ny.updateValue(ie,pe)});h.api.bulkAction(te)};return SR(y(),E,W,{..._,asyncHosts:{
...$P,clearValues:G,sendToWidget:Z,setValue:H,setValues:we,..._.asyncHosts}},D).then(RP)}}},CP=["id",...mw],Ly=e=>Object.
fromEntries(Object.entries(e).filter(([t])=>!CP.includes(t))),Fy=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),NP=(e=[])=>{
let t=new Map(e.map(({id:o,type:s,...l})=>[`${s}/${o}`,l])),r=[],n=(o,s)=>{let l=String(s);if(typeof s!="string"||l.split(
"/").some(c=>c.length===0))throw new Error(`${o}: path "${l}" has an empty segment`);return l};return{writes:r,record:o=>t.
get(o),asyncHosts:{setRealtime:async(o,s)=>{if(n("setRealtime",o),!Fy(s))throw new Error("setRealtime: `value` must be a\
n object");let l=Ly(s);return r.push({kind:"set",path:String(o),value:l}),t.set(String(o),l),l},updateRealtime:async(o,s)=>{
var l;if(n("updateRealtime",o),!Fy(s))throw new Error("updateRealtime: `patch` must be an object");let c=Object.keys(s);
if(c.length===0)throw new Error("updateRealtime: `patch` must have at least one field");if(c.some(f=>f.includes("/")))throw new Error(
"updateRealtime: patch top-level fields only");let u=Ly(s);r.push({kind:"update",path:String(o),value:u});let d={...(l=t.
get(String(o)))!=null?l:{}};return Object.entries(u).forEach(([f,h])=>{h===null?delete d[f]:d[f]=h}),t.set(String(o),d),
u}}}};var PP=(e,t,r)=>{if(t.size===0)return`No ${r}s declared. Add a declaration to satisfy the reference.`;let n=[...t].map(o=>({
p:o,d:rb(e,o)})).sort((o,s)=>o.d-s.d),a=n[0];if(a&&a.d<=3)return`Closest ${r}: \`${a.p}\`. Either rename the reference or\
 add \`${e}\` to the org config.`;let i=n.slice(0,5).map(o=>o.p).join(", ");return`Available ${r}s: ${i}. Either rename \
the reference or add \`${e}\`.`};var MP=["objectType","objectInstance","field","plugin","record","user"],NU=new Set([...g_,...y_,...Object.keys(up),...MP,
...Object.keys(yv)]);var DP=e=>e.includes(h_)||e.includes("$")||e.includes("@")||e.includes("{"),jP=e=>{var t;let n=(e.startsWith("/")?e.slice(
1):e).split(".");return((t=n[n.length-1])!=null?t:"").replace(/\[\d+\]$/g,"")};var ra=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",_w=new Set(["navigate","replaceScreen","pushCursor","set\
Cursor"]),LP=new Set(["replaceScreen","setCursor"]);var nf=e=>Array.isArray(e.arguments)?e.arguments:[],FP=e=>{if(!ra(e))return;let t=e.value;if(typeof t=="string")return t;
if(typeof t=="object"&&t!==null){let r=t.cooked;if(typeof r=="string")return r}},af=e=>{if(ra(e)){if(e.type==="Literal"&&
typeof e.value=="string")return e.value;if(e.type==="TemplateLiteral"&&Array.isArray(e.expressions)&&e.expressions.length===
0&&Array.isArray(e.quasis))return FP(e.quasis[0])}},UP=e=>(t,r)=>{var n;let a=[],[i,o]=nf(t);if(i===void 0)return a.push(
{path:r.path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;ra(o)&&o.type==="Literal"&&a.push({path:r.
path,kind:"host-arg-type",message:`\`${e}\`'s second argument must be an object of nav args, not a literal.`,fixHint:`e.\
g. \`${e}('detail', {id: $params.id})\`.`,severity:"error"});let s=af(i);if(s!==void 0&&s.length===0)return a.push({path:r.
path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;if(s===void 0||r.navTargets===void 0||DP(
s))return a;let l=jP(s);return l.length===0?a:r.navTargets.has(l)?(LP.has(e)&&((n=r.flowBearing)==null?void 0:n.has(l))===
!0&&a.push({path:r.path,kind:"action-replace-into-flow",message:`\`${e}("${s}")\` replaces into a screen that contains a \
flow \u2014 replace skips the flow-state reset, so re-entering shows the previous run's completed step instead of a fresh flo\
w.`,fixHint:`Use \`navigate("${s}")\` (push resets flow state under the target and gives Back a nav-stack entry).`,severity:"\
warning"}),a):(a.push({path:r.path,kind:"missing-screen",message:`\`${e}("${s}")\` does not match any named node in appCo\
nfig \u2014 the call will fail at runtime.`,fixHint:PP(l,r.navTargets,"navigation target"),severity:"error"}),a)},BP=(e,t)=>nf(
e).length===0?[]:[{path:t.path,kind:"host-arg-type",message:"`back()` takes no arguments \u2014 it always goes back one nav-s\
tack entry.",fixHint:"Use `back()`; to go to a specific screen use `navigate('screen')`.",severity:"warning"}],Od=(e,t)=>{
if(!ra(e)||e.type!=="ObjectExpression")return;let r=Array.isArray(e.properties)?e.properties:[];for(let n of r){if(!ra(n)||
n.type!=="Property"||n.computed===!0)continue;let a=n.key;if((ra(a)?a.type==="Identifier"&&typeof a.name=="string"?a.name:
af(a):void 0)===t)return n.value}},HP=e=>ra(e)?e.type==="ObjectExpression"?[e]:e.type==="ArrayExpression"&&Array.isArray(
e.elements)?e.elements.filter(t=>ra(t)&&t.type==="ObjectExpression"):[]:[],Uy=(e,t)=>(r,n)=>{var a;let i=n.objectTypeFieldTypes,
[o]=nf(r),s=af(Od(o,"type"));if(i===void 0||s===void 0)return[];let l=i.get(s);if(l===void 0)return[];let c=(a=[...l].find(
([,u])=>u.kind==="builtin"&&u.name==="parentRef"))==null?void 0:a[0];return c===void 0?[]:HP(Od(o,t)).filter(u=>Od(u,"_p\
arent")!==void 0).map(()=>({path:n.path,kind:"tree-mixed-parent-spellings",message:`${e} writes \`_parent\` on a \`${s}\`\
, but \`${s}\` declares the \`parentRef\` field \`${c}\`, so the tree reads only \`${c}\` and ignores \`_parent\`.`,fixHint:`\
Write the parent's id to \`${c}\` instead (\`${c}: <parent id>\`), or remove the \`parentRef\` field from \`${s}\` to use\
 the implicit \`_parent\` link everywhere.`,severity:"error"}))},PU=new Map([...[..._w].map(e=>[e,UP(e)]),["back",BP],["\
publishData",Uy("publishData","data")],["updateData",Uy("updateData","patch")]]),MU=new RegExp(`\\b(?:${[..._w].join("|")}\
)\\(`);var WP=Aw.keyof({Person:null});var qP=N.intersection([N.type({name:N.string}),N.partial({type:N.string})]),$w=N.intersection([N.type({name:N.string,fields:N.array(
qP)}),N.partial({description:N.string,wellKnown:WP})]),VP=N.keyof({appFeature:null,none:null}),YP=N.keyof({host:null,global:null,
user:null,group:null}),zP=N.partial({types:N.array($w),scope:YP,nav:VP,plugins:N.array(N.string)}),KP=N.intersection([N.type(
{screen:N.string,title:N.string}),N.partial({pic:N.string})]),GP=N.intersection([N.type({name:N.string,shape:N.union([N.string,
N.record(N.string,N.string)])}),N.partial({description:N.string})]),JP=N.intersection([N.type({types:N.array(N.string),screens:N.array(
N.string)}),N.partial({functions:N.array(N.string),plugins:N.array(N.string),nav:N.array(KP),notifications:N.array(N.string),
slots:N.array(GP)})]),ZP=N.partial({entities:N.array(N.string),seedSlots:N.array(N.string),labels:N.array(N.string)});var XP=N.intersection([N.type({name:N.string,hostType:$w,slot:N.string,fn:N.string}),N.partial({description:N.string})]),
QP=N.intersection([N.type({id:N.string,version:N.number,description:N.string,requires:zP,provides:JP}),N.partial({params:ZP,
seams:N.array(XP)})]),eM=N.partial({nav:N.array(N.unknown),navFolder:N.string,notifications:N.array(N.unknown)}),tM=N.partial(
{appConfig:N.array(N.unknown),objectTypes:N.array(N.unknown),objectInstances:N.array(N.unknown),plugins:N.array(N.unknown),
shell:eM}),DU=N.type({manifest:QP,body:tM});var jU=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,
310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,
1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,
773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,
3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,
1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var LU=[...eA];var rM={if:{min:3,max:3},and:{min:0,max:null},or:{min:0,max:null},length:{min:1,max:1},sum:{min:1,max:1},avg:{min:1,max:1},
min:{min:0,max:null},max:{min:0,max:null},first:{min:1,max:1},last:{min:1,max:1},flatten:{min:1,max:1},clamp:{min:3,max:3},
split:{min:1,max:2},join:{min:1,max:2},concat:{min:0,max:null},upper:{min:1,max:1},lower:{min:1,max:1},floor:{min:1,max:1},
ceil:{min:1,max:1},round:{min:1,max:1},abs:{min:1,max:1},pow:{min:2,max:2},exp:{min:1,max:1},log:{min:1,max:2},sqrt:{min:1,
max:1},today:{min:0,max:0},dateFrom:{min:1,max:1},dateCompare:{min:2,max:2},formatDate:{min:1,max:2},formatPeriod:{min:1,
max:2},generateId:{min:1,max:2},regex:{min:1,max:2},fuzzyMatch:{min:2,max:2},toJson:{min:1,max:2},rand:{min:1,max:2},uniq:{
min:1,max:2},sort:{min:1,max:3},shuffle:{min:2,max:2},handRank:{min:1,max:1},replace:{min:2,max:3},omit:{min:2,max:2},pick:{
min:2,max:2},toMap:{min:2,max:3},keys:{min:1,max:1},values:{min:1,max:1},entries:{min:1,max:1},mapValues:{min:2,max:2},escapeHtml:{
min:1,max:1},safeCssColor:{min:1,max:2},urlEncode:{min:1,max:1},html:{min:1,max:null},progressBar:{min:1,max:2},progressRing:{
min:1,max:2},sparkline:{min:1,max:2},now:{min:0,max:0},nextOccurrence:{min:3,max:4},byId:{min:2,max:2},forEach:{min:2,max:2},
filter:{min:2,max:2},map:{min:2,max:2},reduce:{min:2,max:3},times:{min:2,max:2},every:{min:2,max:2},some:{min:2,max:2},find:{
min:2,max:2},findIndex:{min:2,max:2},count:{min:1,max:2},groupBy:{min:2,max:2},sumBy:{min:2,max:2}};var FU=new Set(Is.map(e=>e.name));var UU=new Map(xw.map(e=>[e,new Set(AP(e))])),BU=new Set(xP);var HU=new Map(Object.entries(rM));var nM=[{attribute:"data-action",label:"Declared action",html:'<button data-action="openTab" data-param-id="${id}">Open<\
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
er before navigating. **Forms only** \u2014 a flow reads `data-args`/`$args`, never `param`",status:"legacy"}],WU=nM.map(
e=>e.attribute).filter((e,t,r)=>r.indexOf(e)===t),xc=[{id:"rel",tokens:["rel="],attributes:["rel"],fixHint:'Declare an a\
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
aM=Object.fromEntries(xc.map(e=>[e.id,e]));var qU=xc.flatMap(e=>[...e.tokens]),VU=xc.filter(e=>e.prompt!==void 0).sort((e,t)=>e.prompt.order-t.prompt.order).map(e=>e.
prompt.line);var YU=aM.rel,zU=xc.filter(e=>e.id!=="rel"&&e.attributes.length>0);var iM=["versionId","apiVersion","appConfig","objectTypes","objectInstances","plugins","users"],oM=["orgSummary","minCli\
entVersion"],KU=[...iM,...oM];var GU=new Map(Object.entries(v_));var JU=new Map(Object.entries(b_)),ZU=new Map(Object.entries(w_).map(([e,t])=>[e,Object.entries(t)])),By,XU=Object.entries(
(By=T_.objectTypeField)!=null?By:{});var sM=["archiveData","archiveId"],QU=["archiveType",...sM];var e4=Kl.Allow.OBJ|Kl.Allow.ARR;var t4=[...gv].filter(e=>e!=="variable");var lM="| `customize` | `feature`, `reason` | declares that you are changing an installed feature's own nodes. Without i\
t, the closing gate refuses any change inside a `feature-\u2026` folder |",r4=`

## Installed features

Folders named \`feature-<slug>\` hold installed features: tested functionality this org shares with others. Change a node \
inside one only when the request needs it, and declare the change first:

| op | fields | what it does |
|---|---|---|
${lM}`;var n4=new Set("a an the and or for of to in on with my our your me i we it its this that app apps application something\
 some thing things help keep can like want make build create need would should could be is are was let lets using use si\
mple new tool tools just also all any".split(" ")),cM=e=>e.length>4&&e.endsWith("ies")?`${e.slice(0,-3)}y`:e.length>3&&e.
endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e;var uM=[[["chat","tutor","talk","conversation","speak","spoken","voice"],["ai-chat"]],[["ai","generate","generated","gen\
erator","smart"],["ai-query","image-generation"]],[["image","picture","photo","camera","illustrated"],["image-generation",
"ai-query"]],[["game","party","multiplayer","player","live","realtime","round"],["realtime","transitions"]],[["quiz","re\
vise","revision","flashcard","exam","study","learn","lesson"],["flows","tabs"]],[["booking","book","schedule","calendar",
"rota","signup","form","track","tracker","log"],["forms","storage-data"]],[["notify","notification","reminder","alert"],
["push"]],[["video","call","youtube"],["video"]],[["music","song","audio","jingle","playlist","podcast"],["audio"]],[["m\
ap","trip","travel","holiday","itinerary","route"],["maps"]],[["login","member","private","pin"],["org-login","auth-priv\
ate"]],[["team","group","share","shared","friend"],["group-scoped","realtime"]],[["personal","journal","diary"],["user-s\
coped"]]],a4=new Map(uM.flatMap(([e,t])=>e.map(r=>[cM(r),t])));var dM=Ke.intersection([Ke.type({name:Ke.string}),Ke.partial({parent:Ke.union([Ke.string,Ke.null])})]),pM=Ke.type({orgIds:Ke.array(
Ke.string)}),i4=Ke.partial({folders:Ke.record(Ke.string,dM),containers:Ke.record(Ke.string,pM),folderOrder:Ke.array(Ke.string)});var Iw=U.keyof({new:null,claimed:null,"fixed-draft":null,published:null,closed:null}),Pt=e=>U.union([e,U.null]),fM=U.intersection(
[U.type({qualifiedOrgId:U.string}),U.partial({configSource:Pt(U.string),versionId:Pt(U.string),previewDraft:Pt(U.boolean),
variant:Pt(U.string)})]),hM=U.intersection([U.type({pathname:U.string}),U.partial({search:Pt(U.string),pointerKey:Pt(U.string),
screenLabel:Pt(U.string)})]),mM=U.partial({buildCommit:U.string,buildTimestamp:U.string,capabilityVersion:U.number,userAgent:U.string,
platform:U.string,language:U.string,timezone:U.string,viewport:U.type({w:U.number,h:U.number}),dpr:U.number,standalone:U.boolean,
online:U.boolean,touch:U.boolean}),gM=U.partial({screenshot:U.type({path:U.string,bytes:U.number,w:U.number,h:U.number}),
state:U.type({path:U.string,bytes:U.number})}),Ow={statusNote:Pt(U.string),branch:Pt(U.string),prUrl:Pt(U.string)},o4=U.intersection(
[U.type({id:U.string,createdAt:U.string,reporterUid:U.string,description:U.string,target:fM,location:hM,status:Iw}),U.partial(
{reporterUsername:Pt(U.string),reporterIsOwner:Pt(U.boolean),client:Pt(mM),attachments:Pt(gM),...Ow,statusUpdatedAt:Pt(U.string),
statusUpdatedBy:Pt(U.string)})]),s4=U.intersection([U.type({status:Iw,statusUpdatedAt:U.string,statusUpdatedBy:U.string}),
U.partial(Ow)]);var l4=24*60*60*1e3;import yM from"node:fs";var vM=e=>{if(e===null||typeof e!="object")return!1;let t=e.appConfig;if(!t||typeof t!="object")return!1;let r=t;return Array.
isArray(r.data)&&Array.isArray(r.lengths)?!1:!!(Array.isArray(r._children)||r.type==="app")},Cw=e=>e instanceof Error?e.
message:String(e),of=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),bM=e=>of(e)&&vM(e),wM=e=>of(e)&&of(e.appConfig)&&
Array.isArray(e.appConfig.data)&&Array.isArray(e.appConfig.lengths),Nw=e=>{let t;try{t=yM.readFileSync(e,"utf8")}catch(n){
return Ce(`cannot read ${e}: ${Cw(n)}`)}let r;try{r=JSON.parse(t)}catch(n){return Ce(`${e} is not valid JSON: ${Cw(n)}`)}
return bM(r)?R(r):wM(r)?R(uw(r)):Ce(`${e} is not an org config (no appConfig in tree or pointer format)`)};var w4=e=>{let t=typeof e=="string"&&!e.startsWith("file:")?e:TM(e),r=Nw(t);if(P(r))throw new Error(r.left);return r.right};export{OP as createOrgPackApi,NP as createRealtimeStore,w4 as loadOrgTree};
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
