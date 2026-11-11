import { createRequire as __ogCreateRequire } from "node:module";
const require = __ogCreateRequire(import.meta.url);
var Fw=Object.create;var vf=Object.defineProperty;var Uw=Object.getOwnPropertyDescriptor;var Bw=Object.getOwnPropertyNames;var Hw=Object.getPrototypeOf,Ww=Object.prototype.hasOwnProperty;var We=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var qw=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Bw(t))!Ww.call(e,a)&&a!==r&&vf(e,a,{get:()=>t[a],
enumerable:!(n=Uw(t,a))||n.enumerable});return e};var ie=(e,t,r)=>(r=e!=null?Fw(Hw(e)):{},qw(t||!e||!e.__esModule?vf(r,"default",{value:e,enumerable:!0}):r,e));var Fn=We(X=>{"use strict";var Vw=X&&X.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(X,"__esModule",{value:!0});X.dual=X.getEndomorphismMonoid=X.SK=X.hole=X.constVoid=X.constUndefined=
X.constNull=X.constFalse=X.constTrue=X.unsafeCoerce=X.apply=X.getRing=X.getSemiring=X.getMonoid=X.getSemigroup=X.getBooleanAlgebra=
void 0;X.identity=Rc;X.constant=Mi;X.flip=Xw;X.flow=bf;X.tuple=Qw;X.increment=eT;X.decrement=tT;X.absurd=wf;X.tupled=rT;
X.untupled=nT;X.pipe=aT;X.not=oT;var Yw=function(e){return function(){return{meet:function(t,r){return function(n){return e.
meet(t(n),r(n))}},join:function(t,r){return function(n){return e.join(t(n),r(n))}},zero:function(){return e.zero},one:function(){
return e.one},implies:function(t,r){return function(n){return e.implies(t(n),r(n))}},not:function(t){return function(r){
return e.not(t(r))}}}}};X.getBooleanAlgebra=Yw;var zw=function(e){return function(){return{concat:function(t,r){return function(n){
return e.concat(t(n),r(n))}}}}};X.getSemigroup=zw;var Kw=function(e){var t=(0,X.getSemigroup)(e);return function(){return{
concat:t().concat,empty:function(){return e.empty}}}};X.getMonoid=Kw;var Gw=function(e){return{add:function(t,r){return function(n){
return e.add(t(n),r(n))}},zero:function(){return e.zero},mul:function(t,r){return function(n){return e.mul(t(n),r(n))}},
one:function(){return e.one}}};X.getSemiring=Gw;var Jw=function(e){var t=(0,X.getSemiring)(e);return{add:t.add,mul:t.mul,
one:t.one,zero:t.zero,sub:function(r,n){return function(a){return e.sub(r(a),n(a))}}}};X.getRing=Jw;var Zw=function(e){return function(t){
return t(e)}};X.apply=Zw;function Rc(e){return e}X.unsafeCoerce=Rc;function Mi(e){return function(){return e}}X.constTrue=
Mi(!0);X.constFalse=Mi(!1);X.constNull=Mi(null);X.constUndefined=Mi(void 0);X.constVoid=X.constUndefined;function Xw(e){
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
return function(t){return!e(t)}}var sT=function(){return{concat:function(e,t){return bf(e,t)},empty:Rc}};X.getEndomorphismMonoid=
sT;var lT=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,Vw([a],n,!1))}}};X.dual=lT});var ji=We(Y=>{"use strict";var cT=Y&&Y.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(Y,"__esModule",{value:!0});Y.flatMapReader=Y.flatMapTask=Y.flatMapIO=Y.flatMapEither=Y.flatMapOption=
Y.flatMapNullable=Y.liftOption=Y.liftNullable=Y.fromReadonlyNonEmptyArray=Y.has=Y.emptyRecord=Y.emptyReadonlyArray=Y.tail=
Y.head=Y.isNonEmpty=Y.singleton=Y.right=Y.left=Y.isRight=Y.isLeft=Y.some=Y.none=Y.isSome=Y.isNone=void 0;var Ha=Fn(),uT=function(e){
return e._tag==="None"};Y.isNone=uT;var dT=function(e){return e._tag==="Some"};Y.isSome=dT;Y.none={_tag:"None"};var pT=function(e){
return{_tag:"Some",value:e}};Y.some=pT;var fT=function(e){return e._tag==="Left"};Y.isLeft=fT;var hT=function(e){return e.
_tag==="Right"};Y.isRight=hT;var mT=function(e){return{_tag:"Left",left:e}};Y.left=mT;var gT=function(e){return{_tag:"Ri\
ght",right:e}};Y.right=gT;var yT=function(e){return[e]};Y.singleton=yT;var vT=function(e){return e.length>0};Y.isNonEmpty=
vT;var bT=function(e){return e[0]};Y.head=bT;var wT=function(e){return e.slice(1)};Y.tail=wT;Y.emptyReadonlyArray=[];Y.emptyRecord=
{};Y.has=Object.prototype.hasOwnProperty;var TT=function(e){return cT([e[0]],e.slice(1),!0)};Y.fromReadonlyNonEmptyArray=
TT;var kT=function(e){return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.
apply(void 0,n);return e.fromEither(i==null?(0,Y.left)(r.apply(void 0,n)):(0,Y.right)(i))}}};Y.liftNullable=kT;var ST=function(e){
return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.apply(void 0,n);
return e.fromEither((0,Y.isNone)(i)?(0,Y.left)(r.apply(void 0,n)):(0,Y.right)(i.value))}}};Y.liftOption=ST;var ET=function(e,t){
return(0,Ha.dual)(3,function(r,n,a){return t.flatMap(r,(0,Y.liftNullable)(e)(n,a))})};Y.flatMapNullable=ET;var xT=function(e,t){
return(0,Ha.dual)(3,function(r,n,a){return t.flatMap(r,(0,Y.liftOption)(e)(n,a))})};Y.flatMapOption=xT;var _T=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromEither(n(a))})})};Y.flatMapEither=_T;var AT=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromIO(n(a))})})};Y.flatMapIO=AT;var $T=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromTask(n(a))})})};Y.flatMapTask=$T;var RT=function(e,t){
return(0,Ha.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromReader(n(a))})})};Y.flatMapReader=RT});var Cc=We(Mt=>{"use strict";var IT=Mt&&Mt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),OT=Mt&&Mt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),CT=Mt&&
Mt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&IT(t,e,r);return OT(t,e),t};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.ap=DT;Mt.apFirst=
MT;Mt.apSecond=jT;Mt.apS=LT;Mt.getApplySemigroup=FT;Mt.sequenceT=BT;Mt.sequenceS=WT;var NT=Fn(),PT=CT(ji());function DT(e,t){
return function(r){return function(n){return e.ap(e.map(n,function(a){return function(i){return t.ap(a,i)}}),r)}}}function MT(e){
return function(t){return function(r){return e.ap(e.map(r,function(n){return function(){return n}}),t)}}}function jT(e){
return function(t){return function(r){return e.ap(e.map(r,function(){return function(n){return n}}),t)}}}function LT(e){
return function(t,r){return function(n){return e.ap(e.map(n,function(a){return function(i){var o;return Object.assign({},
a,(o={},o[t]=i,o))}}),r)}}}function FT(e){return function(t){return{concat:function(r,n){return e.ap(e.map(r,function(a){
return function(i){return t.concat(a,i)}}),n)}}}}function Oc(e,t,r){return function(n){for(var a=Array(r.length+1),i=0;i<
r.length;i++)a[i]=r[i];return a[r.length]=n,t===0?e.apply(null,a):Oc(e,t-1,a)}}var Ic={1:function(e){return[e]},2:function(e){
return function(t){return[e,t]}},3:function(e){return function(t){return function(r){return[e,t,r]}}},4:function(e){return function(t){
return function(r){return function(n){return[e,t,r,n]}}}},5:function(e){return function(t){return function(r){return function(n){
return function(a){return[e,t,r,n,a]}}}}}};function UT(e){return PT.has.call(Ic,e)||(Ic[e]=Oc(NT.tuple,e-1,[])),Ic[e]}function BT(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=t.length,a=UT(n),i=e.map(t[0],a),o=1;o<
n;o++)i=e.ap(i,t[o]);return i}}function HT(e){var t=e.length;switch(t){case 1:return function(r){var n;return n={},n[e[0]]=
r,n};case 2:return function(r){return function(n){var a;return a={},a[e[0]]=r,a[e[1]]=n,a}};case 3:return function(r){return function(n){
return function(a){var i;return i={},i[e[0]]=r,i[e[1]]=n,i[e[2]]=a,i}}};case 4:return function(r){return function(n){return function(a){
return function(i){var o;return o={},o[e[0]]=r,o[e[1]]=n,o[e[2]]=a,o[e[3]]=i,o}}}};case 5:return function(r){return function(n){
return function(a){return function(i){return function(o){var s;return s={},s[e[0]]=r,s[e[1]]=n,s[e[2]]=a,s[e[3]]=i,s[e[4]]=
o,s}}}}};default:return Oc(function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var a={},i=0;i<t;i++)
a[e[i]]=r[i];return a},t-1,[])}}function WT(e){return function(t){for(var r=Object.keys(t),n=r.length,a=HT(r),i=e.map(t[r[0]],
a),o=1;o<n;o++)i=e.ap(i,t[r[o]]);return i}}});var Ls=We(gn=>{"use strict";Object.defineProperty(gn,"__esModule",{value:!0});gn.map=Tf;gn.flap=VT;gn.bindTo=YT;gn.let=zT;
gn.getFunctorComposition=KT;gn.as=kf;gn.asUnit=GT;var qT=Fn();function Tf(e,t){return function(r){return function(n){return e.
map(n,function(a){return t.map(a,r)})}}}function VT(e){return function(t){return function(r){return e.map(r,function(n){
return n(t)})}}}function YT(e){return function(t){return function(r){return e.map(r,function(n){var a;return a={},a[t]=n,
a})}}}function zT(e){return function(t,r){return function(n){return e.map(n,function(a){var i;return Object.assign({},a,
(i={},i[t]=r(a),i))})}}}function KT(e,t){var r=Tf(e,t);return{map:function(n,a){return(0,qT.pipe)(n,r(a))}}}function kf(e){
return function(t,r){return e.map(t,function(){return r})}}function GT(e){var t=kf(e);return function(r){return t(r,void 0)}}});var Ef=We(Fs=>{"use strict";Object.defineProperty(Fs,"__esModule",{value:!0});Fs.getApplicativeMonoid=XT;Fs.getApplicativeComposition=
QT;var Sf=Cc(),JT=Fn(),ZT=Ls();function XT(e){var t=(0,Sf.getApplySemigroup)(e);return function(r){return{concat:t(r).concat,
empty:e.of(r.empty)}}}function QT(e,t){var r=(0,ZT.getFunctorComposition)(e,t).map,n=(0,Sf.ap)(e,t);return{map:r,of:function(a){
return e.of(t.of(a))},ap:function(a,i){return(0,JT.pipe)(a,n(i))}}}});var Nc=We(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.chainFirst=ek;Li.tap=xf;Li.bind=tk;function ek(e){
var t=xf(e);return function(r){return function(n){return t(n,r)}}}function xf(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}function tk(e){return function(t,r){return function(n){return e.chain(n,function(a){
return e.map(r(a),function(i){var o;return Object.assign({},a,(o={},o[t]=i,o))})})}}}});var _f=We(Us=>{"use strict";Object.defineProperty(Us,"__esModule",{value:!0});Us.tailRec=void 0;var rk=function(e,t){for(var r=t(
e);r._tag==="Left";)r=t(r.left);return r.right};Us.tailRec=rk});var Of=We(St=>{"use strict";var nk=St&&St.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),ak=St&&St.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ik=St&&
St.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&nk(t,e,r);return ak(t,e),t};Object.defineProperty(St,"__esModule",{value:!0});St.fromOption=$f;
St.fromPredicate=sk;St.fromOptionK=Rf;St.chainOptionK=lk;St.fromEitherK=Pc;St.chainEitherK=ck;St.chainFirstEitherK=uk;St.
filterOrElse=dk;St.tapEither=If;var ok=Nc(),Af=Fn(),ca=ik(ji());function $f(e){return function(t){return function(r){return e.
fromEither(ca.isNone(r)?ca.left(t()):ca.right(r.value))}}}function sk(e){return function(t,r){return function(n){return e.
fromEither(t(n)?ca.right(n):ca.left(r(n)))}}}function Rf(e){var t=$f(e);return function(r){var n=t(r);return function(a){
return(0,Af.flow)(a,n)}}}function lk(e,t){var r=Rf(e);return function(n){var a=r(n);return function(i){return function(o){
return t.chain(o,a(i))}}}}function Pc(e){return function(t){return(0,Af.flow)(t,e.fromEither)}}function ck(e,t){var r=Pc(
e);return function(n){return function(a){return t.chain(a,r(n))}}}function uk(e,t){var r=If(e,t);return function(n){return function(a){
return r(a,n)}}}function dk(e,t){return function(r,n){return function(a){return t.chain(a,function(i){return e.fromEither(
r(i)?ca.right(i):ca.left(n(i)))})}}}function If(e,t){var r=Pc(e),n=(0,ok.tap)(t);return function(a,i){return n(a,r(i))}}});var Cf=We(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.right=ke.left=ke.flap=ke.Functor=ke.Bifunctor=
ke.URI=ke.bimap=ke.mapLeft=ke.map=ke.separated=void 0;var Dc=Fn(),pk=Ls(),fk=function(e,t){return{left:e,right:t}};ke.separated=
fk;var hk=function(e,t){return(0,Dc.pipe)(e,(0,ke.map)(t))},mk=function(e,t){return(0,Dc.pipe)(e,(0,ke.mapLeft)(t))},gk=function(e,t,r){
return(0,Dc.pipe)(e,(0,ke.bimap)(t,r))},yk=function(e){return function(t){return(0,ke.separated)((0,ke.left)(t),e((0,ke.
right)(t)))}};ke.map=yk;var vk=function(e){return function(t){return(0,ke.separated)(e((0,ke.left)(t)),(0,ke.right)(t))}};
ke.mapLeft=vk;var bk=function(e,t){return function(r){return(0,ke.separated)(e((0,ke.left)(r)),t((0,ke.right)(r)))}};ke.
bimap=bk;ke.URI="Separated";ke.Bifunctor={URI:ke.URI,mapLeft:mk,bimap:gk};ke.Functor={URI:ke.URI,map:hk};ke.flap=(0,pk.flap)(
ke.Functor);var wk=function(e){return e.left};ke.left=wk;var Tk=function(e){return e.right};ke.right=Tk});var Pf=We(qr=>{"use strict";var kk=qr&&qr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Sk=qr&&qr.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Ek=qr&&
qr.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&kk(t,e,r);return Sk(t,e),t};Object.defineProperty(qr,"__esModule",{value:!0});qr.wiltDefault=xk;
qr.witherDefault=_k;qr.filterE=Ak;var Nf=Ek(ji());function xk(e,t){return function(r){var n=e.traverse(r);return function(a,i){
return r.map(n(a,i),t.separate)}}}function _k(e,t){return function(r){var n=e.traverse(r);return function(a,i){return r.
map(n(a,i),t.compact)}}}function Ak(e){return function(t){var r=e.wither(t);return function(n){return function(a){return r(
a,function(i){return t.map(n(i),function(o){return o?Nf.some(i):Nf.none})})}}}}});var Hf=We(m=>{"use strict";var $k=m&&m.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Rk=m&&m.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Mf=m&&
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
void 0;m.toError=i1;m.elem=Bf;m.parseJSON=d1;m.getValidation=m1;var jf=Ef(),Fi=Cc(),Lf=Mf(Nc()),Ik=_f(),Ui=Of(),lt=Fn(),
Bi=Ls(),Cr=Mf(ji()),yn=Cf(),Df=Pf();m.left=Cr.left;m.right=Cr.right;m.flatMap=(0,lt.dual)(2,function(e,t){return(0,m.isLeft)(
e)?e:t(e.right)});var Ot=function(e,t){return(0,lt.pipe)(e,(0,m.map)(t))},ua=function(e,t){return(0,lt.pipe)(e,(0,m.ap)(
t))},Hi=function(e,t,r){return(0,lt.pipe)(e,(0,m.reduce)(t,r))},Wi=function(e){return function(t,r){var n=(0,m.foldMap)(
e);return(0,lt.pipe)(t,n(r))}},qi=function(e,t,r){return(0,lt.pipe)(e,(0,m.reduceRight)(t,r))},Bs=function(e){var t=(0,m.
traverse)(e);return function(r,n){return(0,lt.pipe)(r,t(n))}},Mc=function(e,t,r){return(0,lt.pipe)(e,(0,m.bimap)(t,r))},
jc=function(e,t){return(0,lt.pipe)(e,(0,m.mapLeft)(t))},Ff=function(e,t){return(0,lt.pipe)(e,(0,m.alt)(t))},Lc=function(e,t){
return(0,lt.pipe)(e,(0,m.extend)(t))},Fc=function(e,t){return(0,Ik.tailRec)(t(e),function(r){return(0,m.isLeft)(r)?(0,m.
right)((0,m.left)(r.left)):(0,m.isLeft)(r.right)?(0,m.left)(t(r.right.left)):(0,m.right)((0,m.right)(r.right.right))})};
m.URI="Either";var Ok=function(e,t){return{show:function(r){return(0,m.isLeft)(r)?"left(".concat(e.show(r.left),")"):"ri\
ght(".concat(t.show(r.right),")")}}};m.getShow=Ok;var Ck=function(e,t){return{equals:function(r,n){return r===n||((0,m.isLeft)(
r)?(0,m.isLeft)(n)&&e.equals(r.left,n.left):(0,m.isRight)(n)&&t.equals(r.right,n.right))}}};m.getEq=Ck;var Nk=function(e){
return{concat:function(t,r){return(0,m.isLeft)(r)?t:(0,m.isLeft)(t)?r:(0,m.right)(e.concat(t.right,r.right))}}};m.getSemigroup=
Nk;var Pk=function(e){var t=(0,m.left)(e.empty);return{URI:m.URI,_E:void 0,compact:function(r){return(0,m.isLeft)(r)?r:r.
right._tag==="None"?t:(0,m.right)(r.right.value)},separate:function(r){return(0,m.isLeft)(r)?(0,yn.separated)(r,r):(0,m.
isLeft)(r.right)?(0,yn.separated)((0,m.right)(r.right.left),t):(0,yn.separated)(t,(0,m.right)(r.right.right))}}};m.getCompactable=
Pk;var Dk=function(e){var t=(0,m.left)(e.empty),r=(0,m.getCompactable)(e),n=r.compact,a=r.separate,i=function(s,l){return(0,m.
isLeft)(s)||l(s.right)?s:t},o=function(s,l){return(0,m.isLeft)(s)?(0,yn.separated)(s,s):l(s.right)?(0,yn.separated)(t,(0,m.
right)(s.right)):(0,yn.separated)((0,m.right)(s.right),t)};return{URI:m.URI,_E:void 0,map:Ot,compact:n,separate:a,filter:i,
filterMap:function(s,l){if((0,m.isLeft)(s))return s;var c=l(s.right);return c._tag==="None"?t:(0,m.right)(c.value)},partition:o,
partitionMap:function(s,l){if((0,m.isLeft)(s))return(0,yn.separated)(s,s);var c=l(s.right);return(0,m.isLeft)(c)?(0,yn.separated)(
(0,m.right)(c.left),t):(0,yn.separated)(t,(0,m.right)(c.right))}}};m.getFilterable=Dk;var Mk=function(e){var t=(0,m.getFilterable)(
e),r=(0,m.getCompactable)(e);return{URI:m.URI,_E:void 0,map:Ot,compact:t.compact,separate:t.separate,filter:t.filter,filterMap:t.
filterMap,partition:t.partition,partitionMap:t.partitionMap,traverse:Bs,sequence:m.sequence,reduce:Hi,foldMap:Wi,reduceRight:qi,
wither:(0,Df.witherDefault)(m.Traversable,r),wilt:(0,Df.wiltDefault)(m.Traversable,r)}};m.getWitherable=Mk;var jk=function(e){
return{URI:m.URI,_E:void 0,map:Ot,ap:function(t,r){return(0,m.isLeft)(t)?(0,m.isLeft)(r)?(0,m.left)(e.concat(t.left,r.left)):
t:(0,m.isLeft)(r)?r:(0,m.right)(t.right(r.right))},of:m.of}};m.getApplicativeValidation=jk;var Lk=function(e){return{URI:m.
URI,_E:void 0,map:Ot,alt:function(t,r){if((0,m.isRight)(t))return t;var n=r();return(0,m.isLeft)(n)?(0,m.left)(e.concat(
t.left,n.left)):n}}};m.getAltValidation=Lk;var Fk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.right)(e(t.
right))}};m.map=Fk;m.Functor={URI:m.URI,map:Ot};m.as=(0,lt.dual)(2,(0,Bi.as)(m.Functor));m.asUnit=(0,Bi.asUnit)(m.Functor);
m.of=m.right;m.Pointed={URI:m.URI,of:m.of};var Uk=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.isLeft)(e)?
e:(0,m.right)(t.right(e.right))}};m.apW=Uk;m.ap=m.apW;m.Apply={URI:m.URI,map:Ot,ap:ua};m.Applicative={URI:m.URI,map:Ot,ap:ua,
of:m.of};m.Chain={URI:m.URI,map:Ot,ap:ua,chain:m.flatMap};m.Monad={URI:m.URI,map:Ot,ap:ua,of:m.of,chain:m.flatMap};var Bk=function(e,t){
return function(r){return(0,m.isLeft)(r)?e:t(e,r.right)}};m.reduce=Bk;var Hk=function(e){return function(t){return function(r){
return(0,m.isLeft)(r)?e.empty:t(r.right)}}};m.foldMap=Hk;var Wk=function(e,t){return function(r){return(0,m.isLeft)(r)?e:
t(r.right,e)}};m.reduceRight=Wk;m.Foldable={URI:m.URI,reduce:Hi,foldMap:Wi,reduceRight:qi};var qk=function(e){return function(t){
return function(r){return(0,m.isLeft)(r)?e.of((0,m.left)(r.left)):e.map(t(r.right),m.right)}}};m.traverse=qk;var Vk=function(e){
return function(t){return(0,m.isLeft)(t)?e.of((0,m.left)(t.left)):e.map(t.right,m.right)}};m.sequence=Vk;m.Traversable={
URI:m.URI,map:Ot,reduce:Hi,foldMap:Wi,reduceRight:qi,traverse:Bs,sequence:m.sequence};var Yk=function(e,t){return function(r){
return(0,m.isLeft)(r)?(0,m.left)(e(r.left)):(0,m.right)(t(r.right))}};m.bimap=Yk;var zk=function(e){return function(t){return(0,m.
isLeft)(t)?(0,m.left)(e(t.left)):t}};m.mapLeft=zk;m.Bifunctor={URI:m.URI,bimap:Mc,mapLeft:jc};var Kk=function(e){return function(t){
return(0,m.isLeft)(t)?e():t}};m.altW=Kk;m.alt=m.altW;m.Alt={URI:m.URI,map:Ot,alt:Ff};var Gk=function(e){return function(t){
return(0,m.isLeft)(t)?t:(0,m.right)(e(t))}};m.extend=Gk;m.Extend={URI:m.URI,map:Ot,extend:Lc};m.ChainRec={URI:m.URI,map:Ot,
ap:ua,chain:m.flatMap,chainRec:Fc};m.throwError=m.left;m.MonadThrow={URI:m.URI,map:Ot,ap:ua,of:m.of,chain:m.flatMap,throwError:m.
throwError};m.FromEither={URI:m.URI,fromEither:lt.identity};m.fromPredicate=(0,Ui.fromPredicate)(m.FromEither);m.fromOption=
(0,Ui.fromOption)(m.FromEither);m.isLeft=Cr.isLeft;m.isRight=Cr.isRight;var Jk=function(e,t){return function(r){return(0,m.
isLeft)(r)?e(r.left):t(r.right)}};m.matchW=Jk;m.foldW=m.matchW;m.match=m.matchW;m.fold=m.match;var Zk=function(e){return function(t){
return(0,m.isLeft)(t)?e(t.left):t.right}};m.getOrElseW=Zk;m.getOrElse=m.getOrElseW;m.flap=(0,Bi.flap)(m.Functor);m.apFirst=
(0,Fi.apFirst)(m.Apply);m.apFirstW=m.apFirst;m.apSecond=(0,Fi.apSecond)(m.Apply);m.apSecondW=m.apSecond;m.tap=(0,lt.dual)(
2,Lf.tap(m.Chain));m.flattenW=(0,m.flatMap)(lt.identity);m.flatten=m.flattenW;m.duplicate=(0,m.extend)(lt.identity);m.fromOptionK=
(0,Ui.fromOptionK)(m.FromEither);m.chainOptionK=(0,Ui.chainOptionK)(m.FromEither,m.Chain);m.chainOptionKW=m.chainOptionK;
var Hs={fromEither:m.FromEither.fromEither};m.liftNullable=Cr.liftNullable(Hs);m.liftOption=Cr.liftOption(Hs);var Uf={flatMap:m.
flatMap};m.flatMapNullable=Cr.flatMapNullable(Hs,Uf);m.flatMapOption=Cr.flatMapOption(Hs,Uf);m.filterOrElse=(0,Ui.filterOrElse)(
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
JSON");return r},t)};m.stringifyJSON=p1;m.either={URI:m.URI,map:Ot,of:m.of,ap:ua,chain:m.flatMap,reduce:Hi,foldMap:Wi,reduceRight:qi,
traverse:Bs,sequence:m.sequence,bimap:Mc,mapLeft:jc,alt:Ff,extend:Lc,chainRec:Fc,throwError:m.throwError};m.getApplySemigroup=
(0,Fi.getApplySemigroup)(m.Apply);m.getApplyMonoid=(0,jf.getApplicativeMonoid)(m.Applicative);var f1=function(e,t){return(0,Fi.
getApplySemigroup)((0,m.getApplicativeValidation)(e))(t)};m.getValidationSemigroup=f1;var h1=function(e,t){return(0,jf.getApplicativeMonoid)(
(0,m.getApplicativeValidation)(e))(t)};m.getValidationMonoid=h1;function m1(e){var t=(0,m.getApplicativeValidation)(e).ap,
r=(0,m.getAltValidation)(e).alt;return{URI:m.URI,_E:void 0,map:Ot,of:m.of,chain:m.flatMap,bimap:Mc,mapLeft:jc,reduce:Hi,
foldMap:Wi,reduceRight:qi,extend:Lc,traverse:Bs,sequence:m.sequence,chainRec:Fc,throwError:m.throwError,ap:t,alt:r}}});var Le=We(w=>{"use strict";var Ne=w&&w.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof
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
e.push(t[n])}var da=Object.prototype.hasOwnProperty;function Bc(e){return Object.keys(e).map(function(t){return"".concat(
t,": ").concat(e[t].name)}).join(", ")}function Vi(e){for(var t=0;t<e.length;t++)if(e[t].encode!==w.identity)return!1;return!0}
function zf(e){return"{ ".concat(Bc(e)," }")}function Kf(e){return"Partial<".concat(e,">")}function w1(e,t,r,n){n===void 0&&
(n="{ [K in ".concat(t.name,"]: ").concat(r.name," }"));for(var a=e.length,i={},o=0;o<a;o++)i[e[o]]=r;var s=(0,w.strict)(
i,n);return new zc(n,function(l){return s.is(l)},s.validate,s.encode,t,r)}function qc(e){var t;if(Zf(e)){var r=e.value;if(w.
string.is(r))return t={},t[r]=null,t}else{if(_1(e))return e.keys;if(Qf(e)){var n=e.types.map(function(a){return qc(a)});
return n.some(Ws.is)?void 0:Object.assign.apply(Object,g1([{}],n,!1))}}}w.getDomainKeys=qc;function Wf(e,t){for(var r=Object.
keys(e),n=r.length,a=!1,i={},o=0;o<n;o++){var s=r[o];t.is(s)?i[s]=e[s]:a=!0}return a?i:e}function T1(e,t,r){return r===void 0&&
(r="{ [K in ".concat(e.name,"]: ").concat(t.name," }")),new zc(r,function(n){return w.UnknownRecord.is(n)?Object.keys(n).
every(function(a){return!e.is(a)||t.is(n[a])}):Vf(t)&&Array.isArray(n)},function(n,a){if(w.UnknownRecord.is(n)){for(var i={},
o=[],s=Object.keys(n),l=s.length,c=!1,u=0;u<l;u++){var d=s[u],f=n[d],h=e.validate(d,Zr(a,d,e,d));if((0,ct.isLeft)(h))c=!0;else{
var y=h.right;c=c||y!==d,d=y;var b=t.validate(f,Zr(a,d,t,f));if((0,ct.isLeft)(b))pa(o,b.left);else{var T=b.right;c=c||T!==
f,i[d]=T}}}return o.length>0?(0,w.failures)(o):(0,w.success)(c?i:n)}return Vf(t)&&Array.isArray(n)?(0,w.success)(n):(0,w.
failure)(n,a)},e.encode===w.identity&&t.encode===w.identity?function(n){return Wf(n,e)}:function(n){for(var a={},i=Object.
keys(Wf(n,e)),o=i.length,s=0;s<o;s++){var l=i[s];a[String(e.encode(l))]=t.encode(n[l])}return a},e,t)}function Gf(e){return"\
("+e.map(function(t){return t.name}).join(" | ")+")"}function Hc(e,t){for(var r=!0,n=!0,a=!w.UnknownRecord.is(e),i=0,o=t;i<
o.length;i++){var s=o[i];s!==e&&(r=!1),w.UnknownRecord.is(s)&&(n=!1)}if(r)return e;if(n)return t[t.length-1];for(var l={},
c=0,u=t;c<u.length;c++){var s=u[c];for(var d in s)(!da.call(l,d)||a||s[d]!==e[d])&&(l[d]=s[d])}return l}w.mergeAll=Hc;function Wc(e){
switch(e._tag){case"RefinementType":case"ReadonlyType":return Wc(e.type);case"InterfaceType":case"StrictType":case"Parti\
alType":return e.props;case"IntersectionType":return e.types.reduce(function(t,r){return Object.assign(t,Wc(r))},{})}}function qf(e,t){
for(var r=Object.getOwnPropertyNames(e),n=!1,a={},i=0;i<r.length;i++){var o=r[i];da.call(t,o)?a[o]=e[o]:n=!0}return n?a:
e}function k1(e){return Xf(e)?"{| ".concat(Bc(e.props)," |}"):A1(e)?Kf("{| ".concat(Bc(e.props)," |}")):"Exact<".concat(
e.name,">")}function S1(e){return e.length>0}w.emptyTags={};function Jf(e,t){for(var r=[],n=0,a=e;n<a.length;n++){var i=a[n];
t.indexOf(i)!==-1&&r.push(i)}return r}function E1(e,t){if(e===w.emptyTags)return t;if(t===w.emptyTags)return e;var r=Object.
assign({},e);for(var n in t)if(da.call(e,n)){var a=Jf(e[n],t[n]);if(S1(a))r[n]=a;else{r=w.emptyTags;break}}else r[n]=t[n];
return r}function x1(e,t){if(e===w.emptyTags||t===w.emptyTags)return w.emptyTags;var r=w.emptyTags;for(var n in e)if(da.
call(t,n)){var a=Jf(e[n],t[n]);a.length===0&&(r===w.emptyTags&&(r={}),r[n]=e[n].concat(t[n]))}return r}function Vf(e){return e.
_tag==="AnyType"}function Zf(e){return e._tag==="LiteralType"}function _1(e){return e._tag==="KeyofType"}function Xf(e){
return e._tag==="InterfaceType"}function A1(e){return e._tag==="PartialType"}function $1(e){return e._tag==="StrictType"}
function R1(e){return e._tag==="ExactType"}function I1(e){return e._tag==="RefinementType"}function O1(e){return e._tag===
"IntersectionType"}function Qf(e){return e._tag==="UnionType"}function C1(e){return e._tag==="RecursiveType"}function N1(e){
return e._tag==="ReadonlyType"}var Uc=[];function Un(e){if(Uc.indexOf(e)!==-1)return w.emptyTags;if(Xf(e)||$1(e)){var t=w.
emptyTags;for(var r in e.props){var n=e.props[r];Zf(n)&&(t===w.emptyTags&&(t={}),t[r]=[n.value])}return t}else{if(R1(e)||
I1(e)||N1(e))return Un(e.type);if(O1(e))return e.types.reduce(function(i,o){return E1(i,Un(o))},w.emptyTags);if(Qf(e))return e.
types.slice(1).reduce(function(i,o){return x1(i,Un(o))},Un(e.types[0]));if(C1(e)){Uc.push(e);var a=Un(e.type);return Uc.
pop(),a}}return w.emptyTags}w.getTags=Un;function eh(e){var t=Un(e[0]),r=Object.keys(t),n=e.length,a=function(c){for(var u=t[c].
slice(),d=[t[c]],f=1;f<n;f++){var h=e[f],y=Un(h),b=y[c];if(b===void 0)return"continue-keys";if(b.some(function(T){return u.
indexOf(T)!==-1}))return"continue-keys";u.push.apply(u,b),d.push(b)}return{value:[c,d]}};e:for(var i=0,o=r;i<o.length;i++){
var s=o[i],l=a(s);if(typeof l=="object")return l.value;switch(l){case"continue-keys":continue e}}}w.getIndex=eh;var th=function(e){
Ne(t,e);function t(){var r=e.call(this,"null",function(n){return n===null},function(n,a){return r.is(n)?(0,w.success)(n):
(0,w.failure)(n,a)},w.identity)||this;return r._tag="NullType",r}return t}(Pe);w.NullType=th;w.nullType=new th;w.null=w.
nullType;var rh=function(e){Ne(t,e);function t(){var r=e.call(this,"undefined",function(n){return n===void 0},function(n,a){
return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="UndefinedType",r}return t}(Pe);w.UndefinedType=
rh;var Ws=new rh;w.undefined=Ws;var nh=function(e){Ne(t,e);function t(){var r=e.call(this,"void",Ws.is,Ws.validate,w.identity)||
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
call(this,r,n,a,i)||this;return s.keys=o,s._tag="KeyofType",s}return t}(Pe);w.KeyofType=ph;function D1(e,t){t===void 0&&
(t=Object.keys(e).map(function(n){return JSON.stringify(n)}).join(" | "));var r=function(n){return w.string.is(n)&&da.call(
e,n)};return new ph(t,r,function(n,a){return r(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity,e)}w.keyof=D1;var fh=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i)||this;return l.type=o,l.predicate=s,l._tag="RefinementType",l}
return t}(Pe);w.RefinementType=fh;function hh(e,t,r){return Gc(e,t,r)}w.brand=hh;w.Int=hh(w.number,function(e){return Number.
isInteger(e)},"Int");var Vc=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.runDefinition=
o,s._tag="RecursiveType",s}return t}(Pe);w.RecursiveType=Vc;Object.defineProperty(Vc.prototype,"type",{get:function(){return this.
runDefinition()},enumerable:!0,configurable:!0});function M1(e,t){var r,n=function(){return r||(r=t(a),r.name=e),r},a=new Vc(
e,function(i){return n().is(i)},function(i,o){return n().validate(i,o)},function(i){return n().encode(i)},n);return a}w.
recursion=M1;var mh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="A\
rrayType",s}return t}(Pe);w.ArrayType=mh;function gh(e,t){return t===void 0&&(t="Array<".concat(e.name,">")),new mh(t,function(r){
return w.UnknownArray.is(r)&&r.every(e.is)},function(r,n){var a=w.UnknownArray.validate(r,n);if((0,ct.isLeft)(a))return a;
for(var i=a.right,o=i.length,s=i,l=[],c=0;c<o;c++){var u=i[c],d=e.validate(u,Zr(n,String(c),e,u));if((0,ct.isLeft)(d))pa(
l,d.left);else{var f=d.right;f!==u&&(s===i&&(s=i.slice()),s[c]=f)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},
e.encode===w.identity?w.identity:function(r){return r.map(e.encode)},e)}w.array=gh;var yh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.props=o,s._tag="InterfaceType",s}return t}(Pe);w.InterfaceType=yh;function Yc(e,t){
t===void 0&&(t=zf(e));var r=Object.keys(e),n=r.map(function(i){return e[i]}),a=r.length;return new yh(t,function(i){if(w.
UnknownRecord.is(i)){for(var o=0;o<a;o++){var s=r[o],l=i[s];if(l===void 0&&!da.call(i,s)||!n[o].is(l))return!1}return!0}
return!1},function(i,o){var s=w.UnknownRecord.validate(i,o);if((0,ct.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<
a;d++){var f=r[d],h=c[f],y=n[d],b=y.validate(h,Zr(o,f,y,h));if((0,ct.isLeft)(b))pa(u,b.left);else{var T=b.right;(T!==h||
T===void 0&&!da.call(c,f))&&(c===l&&(c=Wa({},l)),c[f]=T)}}return u.length>0?(0,w.failures)(u):(0,w.success)(c)},Vi(n)?w.
identity:function(i){for(var o=Wa({},i),s=0;s<a;s++){var l=r[s],c=n[s].encode;c!==w.identity&&(o[l]=c(i[l]))}return o},e)}
w.type=Yc;w.interface=Yc;var vh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.props=
o,s._tag="PartialType",s}return t}(Pe);w.PartialType=vh;function j1(e,t){t===void 0&&(t=Kf(zf(e)));var r=Object.keys(e),
n=r.map(function(i){return e[i]}),a=r.length;return new vh(t,function(i){if(w.UnknownRecord.is(i)){for(var o=0;o<a;o++){
var s=r[o],l=i[s];if(l!==void 0&&!e[s].is(l))return!1}return!0}return!1},function(i,o){var s=w.UnknownRecord.validate(i,
o);if((0,ct.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<a;d++){var f=r[d],h=c[f],y=e[f],b=y.validate(h,Zr(o,f,y,
h));if((0,ct.isLeft)(b))h!==void 0&&pa(u,b.left);else{var T=b.right;T!==h&&(c===l&&(c=Wa({},l)),c[f]=T)}}return u.length>
0?(0,w.failures)(u):(0,w.success)(c)},Vi(n)?w.identity:function(i){for(var o=Wa({},i),s=0;s<a;s++){var l=r[s],c=i[l];c!==
void 0&&(o[l]=n[s].encode(c))}return o},e)}w.partial=j1;var zc=function(e){Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(
this,r,n,a,i)||this;return l.domain=o,l.codomain=s,l._tag="DictionaryType",l}return t}(Pe);w.DictionaryType=zc;function bh(e,t,r){
var n=qc(e);return n?w1(Object.keys(n),e,t,r):T1(e,t,r)}w.record=bh;var Kc=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.types=o,s._tag="UnionType",s}return t}(Pe);w.UnionType=Kc;function wh(e,t){t===void 0&&
(t=Gf(e));var r=eh(e);if(r!==void 0&&e.length>0){var n=r[0],a=r[1],i=a.length,o=function(s){for(var l=0;l<i;l++)if(a[l].
indexOf(s)!==-1)return l};return new qs(t,function(s){if(w.UnknownRecord.is(s)){var l=o(s[n]);return l!==void 0?e[l].is(
s):!1}return!1},function(s,l){var c=w.UnknownRecord.validate(s,l);if((0,ct.isLeft)(c))return c;var u=c.right,d=o(u[n]);if(d===
void 0)return(0,w.failure)(s,l);var f=e[d];return f.validate(u,Zr(l,String(d),f,u))},Vi(e)?w.identity:function(s){var l=o(
s[n]);if(l===void 0)throw new Error("no codec found to encode value in union codec ".concat(t));return e[l].encode(s)},e,
n)}else return new Kc(t,function(s){return e.some(function(l){return l.is(s)})},function(s,l){for(var c=[],u=0;u<e.length;u++){
var d=e[u],f=d.validate(s,Zr(l,String(u),d,s));if((0,ct.isLeft)(f))pa(c,f.left);else return(0,w.success)(f.right)}return(0,w.
failures)(c)},Vi(e)?w.identity:function(s){for(var l=0,c=e;l<c.length;l++){var u=c[l];if(u.is(s))return u.encode(s)}throw new Error(
"no codec found to encode value in union type ".concat(t))},e)}w.union=wh;var Th=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="IntersectionType",s}return t}(Pe);w.IntersectionType=Th;function L1(e,t){
t===void 0&&(t="(".concat(e.map(function(n){return n.name}).join(" & "),")"));var r=e.length;return new Th(t,function(n){
return e.every(function(a){return a.is(n)})},e.length===0?w.success:function(n,a){for(var i=[],o=[],s=0;s<r;s++){var l=e[s],
c=l.validate(n,Zr(a,String(s),l,n));(0,ct.isLeft)(c)?pa(o,c.left):i.push(c.right)}return o.length>0?(0,w.failures)(o):(0,w.
success)(Hc(n,i))},e.length===0?w.identity:function(n){return Hc(n,e.map(function(a){return a.encode(n)}))},e)}w.intersection=
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
r.is,r.validate,r.encode,e)}w.readonlyArray=B1;var H1=function(e,t){return _h(Yc(e),t)};w.strict=H1;var xh=function(e){Ne(
t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ExactType",s}return t}(Pe);w.ExactType=
xh;function _h(e,t){t===void 0&&(t=k1(e));var r=Wc(e);return new xh(t,e.is,function(n,a){var i=w.UnknownRecord.validate(
n,a);if((0,ct.isLeft)(i))return i;var o=e.validate(n,a);return(0,ct.isLeft)(o)?o:(0,ct.right)(qf(o.right,r))},function(n){
return e.encode(qf(n,r))},e)}w.exact=_h;var Ah=function(e){Ne(t,e);function t(){var r=e.call(this,"Function",function(n){
return typeof n=="function"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="FunctionType",r}return t}(Pe);w.FunctionType=Ah;w.Function=new Ah;var $h=function(e){Ne(t,e);function t(){var r=e.
call(this,"never",function(n){return!1},function(n,a){return(0,w.failure)(n,a)},function(){throw new Error("cannot encod\
e never")})||this;return r._tag="NeverType",r}return t}(Pe);w.NeverType=$h;w.never=new $h;var Rh=function(e){Ne(t,e);function t(){
var r=e.call(this,"any",function(n){return!0},w.success,w.identity)||this;return r._tag="AnyType",r}return t}(Pe);w.AnyType=
Rh;w.any=new Rh;function Gc(e,t,r){return r===void 0&&(r="(".concat(e.name," | ").concat(Yf(t),")")),new fh(r,function(n){
return e.is(n)&&t(n)},function(n,a){var i=e.validate(n,a);if((0,ct.isLeft)(i))return i;var o=i.right;return t(o)?(0,w.success)(
o):(0,w.failure)(o,a)},e.encode,e,t)}w.refinement=Gc;w.Integer=Gc(w.number,Number.isInteger,"Integer");var qs=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i,o)||this;return l.tag=s,l}return t}(Kc);w.TaggedUnionType=qs;var W1=function(e,t,r){
r===void 0&&(r=Gf(t));var n=wh(t,r);return n instanceof qs?n:(console.warn("[io-ts] Cannot build a tagged union for ".concat(
r,", returning a de-optimized union")),new qs(r,n.is,n.validate,n.encode,t,e))};w.taggedUnion=W1;var q1=function(e,t){return{
value:e,context:t}};w.getValidationError=q1;var V1=function(e){return[{key:"",type:e}]};w.getDefaultContext=V1;w.Dictionary=
w.UnknownRecord;var Ih=function(e){Ne(t,e);function t(){var r=e.call(this,"object",function(n){return n!==null&&typeof n==
"object"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="ObjectType",
r}return t}(Pe);w.ObjectType=Ih;w.object=new Ih;w.dictionary=bh;var Y1=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.props=o,s._tag="StrictType",s}return t}(Pe);w.StrictType=Y1;function z1(e){return e}w.
clean=z1;function K1(e){return function(){return e}}w.alias=K1});var Dh=We((MM,Ph)=>{"use strict";var rt=class e extends Array{constructor(t,r){if(super(t),this.sign=r,Object.setPrototypeOf(
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
return(1073741823&t)===t}};rt.__kMaxLength=33554432,rt.__kMaxLengthBits=rt.__kMaxLength<<5,rt.__kMaxBitsPerChar=[0,0,32,
51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,
165,166],rt.__kBitsPerCharTableShift=5,rt.__kBitsPerCharTableMultiplier=1<<rt.__kBitsPerCharTableShift,rt.__kConversionChars=
["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"],rt.__kBitConversionBuffer=new ArrayBuffer(8),rt.__kBitConversionDouble=new Float64Array(rt.__kBitConversionBuffer),
rt.__kBitConversionInts=new Int32Array(rt.__kBitConversionBuffer),rt.__kBitConversionIntHigh=rt.__detectBigEndian()?0:1,
rt.__kBitConversionIntLow=rt.__detectBigEndian()?1:0,rt.__clz30=Math.clz32?function(e){return Math.clz32(e)-2}:function(e){
return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},rt.__imul=Math.imul||function(e,t){return 0|e*t},Ph.exports=rt});var vg=We((BM,yg)=>{"use strict";var gg="ArrowFunctionExpression",YS={name:"arrow",init(e){e.addBinaryOp("=>",.1,!0),e.hooks.
add("gobble-expression",function(n){if(this.gobbleSpaces(),this.code===e.OPAREN_CODE){let a=this.index;if(this.index++,this.
gobbleSpaces(),this.code===e.CPAREN_CODE){this.index++;let i=this.gobbleBinaryOp();if(i==="=>"){let o=this.gobbleBinaryExpression();
o||this.throwError("Expected expression after "+i),n.node={type:gg,params:null,body:o};return}}this.index=a}}),e.hooks.add(
"after-expression",function(n){t(n.node)});function t(r){r&&(Object.values(r).forEach(n=>{n&&typeof n=="object"&&t(n)}),
r.operator==="=>"&&(r.type=gg,r.params=r.left?[r.left]:null,r.body=r.right,r.params&&r.params[0].type===e.SEQUENCE_EXP&&
(r.params=r.params[0].expressions),delete r.left,delete r.right,delete r.operator))}}};yg.exports=YS});var Tg=We((HM,wg)=>{"use strict";var zS="ObjectExpression",bg="Property",KS={name:"object",init(e){function t(r){if(this.
code===123){this.index++;let n=[];for(;!isNaN(this.code);){if(this.gobbleSpaces(),this.code===125){this.index++,r.node=this.
gobbleTokenProperty({type:zS,properties:n});return}let a=this.gobbleExpression();if(!a)break;if(this.gobbleSpaces(),a.type===
e.IDENTIFIER&&(this.code===e.COMMA_CODE||this.code===125))n.push({type:bg,computed:!1,key:a,value:a,shorthand:!0});else if(this.
code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();i||this.throwError("unexpected object property");let o=a.
type===e.ARRAY_EXP;n.push({type:bg,computed:o,key:o?a.elements[0]:a,value:i,shorthand:!1}),this.gobbleSpaces()}else a&&n.
push(a);this.code===e.COMMA_CODE&&this.index++}this.throwError("missing }")}}e.hooks.add("gobble-token",t)}};wg.exports=
KS});var Sg=We((WM,kg)=>{"use strict";var GS={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===47){
let n=++this.index,a=!1;for(;this.index<this.expr.length;){if(this.code===47&&!a){let i=this.expr.slice(n,this.index),o="";
for(;++this.index<this.expr.length;){let l=this.code;if(l>=97&&l<=122||l>=65&&l<=90||l>=48&&l<=57)o+=this.char;else break}
let s;try{s=new RegExp(i,o)}catch(l){this.throwError(l.message)}return r.node={type:e.LITERAL,value:s,raw:this.expr.slice(
n-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&
(a=!1),this.index+=this.code===92?2:1}this.throwError("Unclosed Regex")}})}};kg.exports=GS});var xg=We((qM,Eg)=>{"use strict";var JS={name:"jsepSpread",init(e){e.hooks.add("gobble-token",function(r){[0,1,2].every(
n=>this.expr.charCodeAt(this.index+n)===e.PERIOD_CODE)&&(this.index+=3,r.node={type:"SpreadElement",argument:this.gobbleExpression()})})}};
Eg.exports=JS});var Ag=We((VM,_g)=>{"use strict";var ZS="TaggedTemplateExpression",XS="TemplateLiteral",QS="TemplateElement",eE={name:"j\
sepTemplateLiteral",init(e){function t(r,n=!0){if(this.code===96){let a={type:XS,quasis:[],expressions:[]},i="",o="",s=!1,
l=this.expr.length,c=()=>a.quasis.push({type:QS,value:{raw:o,cooked:i},tail:s});for(;this.index<l;){let u=this.expr.charAt(
++this.index);if(u==="`")return this.index+=1,s=!0,c(),r.node=a,n&&(r.node=this.gobbleTokenProperty(r.node)),r.node;if(u===
"$"&&this.expr.charAt(this.index+1)==="{")this.index+=2,c(),o="",i="",a.expressions.push(...this.gobbleExpressions(125)),
this.code!==125&&this.throwError("unclosed ${");else if(u==="\\")switch(o+=u,u=this.expr.charAt(++this.index),o+=u,u){case"\
n":i+=`
`;break;case"r":i+="\r";break;case"t":i+="	";break;case"b":i+="\b";break;case"f":i+="\f";break;case"v":i+="\v";break;default:
i+=u}else i+=u,o+=u}this.throwError("Unclosed `")}}e.hooks.add("gobble-token",t),e.hooks.add("after-token",function(n){if((n.
node.type===e.IDENTIFIER||n.node.type===e.MEMBER_EXP)&&this.code===96)return n.node={type:ZS,tag:n.node,quasi:t.bind(this)(
n,!1)},n.node=this.gobbleTokenProperty(n.node),n.node})}};_g.exports=eE});var Wg=We(he=>{"use strict";var dd=Symbol.for("react.transitional.element"),vE=Symbol.for("react.portal"),bE=Symbol.for(
"react.fragment"),wE=Symbol.for("react.strict_mode"),TE=Symbol.for("react.profiler"),kE=Symbol.for("react.consumer"),SE=Symbol.
for("react.context"),EE=Symbol.for("react.forward_ref"),xE=Symbol.for("react.suspense"),_E=Symbol.for("react.memo"),jg=Symbol.
for("react.lazy"),Cg=Symbol.iterator;function AE(e){return e===null||typeof e!="object"?null:(e=Cg&&e[Cg]||e["@@iterator"],
typeof e=="function"?e:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},
enqueueSetState:function(){}},Fg=Object.assign,Ug={};function pi(e,t,r){this.props=e,this.context=t,this.refs=Ug,this.updater=
r||Lg}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&
e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variabl\
es.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(
this,e,"forceUpdate")};function Bg(){}Bg.prototype=pi.prototype;function pd(e,t,r){this.props=e,this.context=t,this.refs=
Ug,this.updater=r||Lg}var fd=pd.prototype=new Bg;fd.constructor=pd;Fg(fd,pi.prototype);fd.isPureReactComponent=!0;var Ng=Array.
isArray,Ge={H:null,A:null,T:null,S:null,V:null},Hg=Object.prototype.hasOwnProperty;function hd(e,t,r,n,a,i){return r=i.ref,
{$$typeof:dd,type:e,key:t,ref:r!==void 0?r:null,props:i}}function $E(e,t){return hd(e.type,t,void 0,void 0,void 0,e.props)}
function md(e){return typeof e=="object"&&e!==null&&e.$$typeof===dd}function RE(e){var t={"=":"=0",":":"=2"};return"$"+e.
replace(/[=:]/g,function(r){return t[r]})}var Pg=/\/+/g;function ud(e,t){return typeof e=="object"&&e!==null&&e.key!=null?
RE(""+e.key):t.toString(36)}function Dg(){}function IE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":
throw e.reason;default:switch(typeof e.status=="string"?e.then(Dg,Dg):(e.status="pending",e.then(function(t){e.status===
"pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"\
fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function di(e,t,r,n,a){var i=typeof e;(i==="undefined"||
i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"\
object":switch(e.$$typeof){case dd:case vE:o=!0;break;case jg:return o=e._init,di(o(e._payload),t,r,n,a)}}if(o)return a=
a(e),o=n===""?"."+ud(e,0):n,Ng(a)?(r="",o!=null&&(r=o.replace(Pg,"$&/")+"/"),di(a,t,r,"",function(c){return c})):a!=null&&
(md(a)&&(a=$E(a,r+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Pg,"$&/")+"/")+o)),t.push(a)),1;o=0;var s=n===""?
".":n+":";if(Ng(e))for(var l=0;l<e.length;l++)n=e[l],i=s+ud(n,l),o+=di(n,t,r,i,a);else if(l=AE(e),typeof l=="function")for(e=
l.call(e),l=0;!(n=e.next()).done;)n=n.value,i=s+ud(n,l++),o+=di(n,t,r,i,a);else if(i==="object"){if(typeof e.then=="func\
tion")return di(IE(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object O\
bject]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use a\
n array instead.")}return o}function _l(e,t,r){if(e==null)return e;var n=[],a=0;return di(e,n,"","",function(i){return t.
call(r,i,a++)}),n}function OE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===
-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&
(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Mg=typeof reportError=="function"?
reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("e\
rror",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(
e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.
emit("uncaughtException",e);return}console.error(e)};function CE(){}he.Children={map:_l,forEach:function(e,t,r){_l(e,function(){
t.apply(this,arguments)},r)},count:function(e){var t=0;return _l(e,function(){t++}),t},toArray:function(e){return _l(e,function(t){
return t})||[]},only:function(e){if(!md(e))throw Error("React.Children.only expected to receive a single React element c\
hild.");return e}};he.Component=pi;he.Fragment=bE;he.Profiler=TE;he.PureComponent=pd;he.StrictMode=wE;he.Suspense=xE;he.
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ge;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ge.
H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cloneElement=function(e,t,r){
if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=Fg({},e.props),a=e.key,i=void 0;
if(t!=null)for(o in t.ref!==void 0&&(i=void 0),t.key!==void 0&&(a=""+t.key),t)!Hg.call(t,o)||o==="key"||o==="__self"||o===
"__source"||o==="ref"&&t.ref===void 0||(n[o]=t[o]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var s=Array(
o),l=0;l<o;l++)s[l]=arguments[l+2];n.children=s}return hd(e.type,a,void 0,void 0,i,n)};he.createContext=function(e){return e=
{$$typeof:SE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:kE,
_context:e},e};he.createElement=function(e,t,r){var n,a={},i=null;if(t!=null)for(n in t.key!==void 0&&(i=""+t.key),t)Hg.
call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<
o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===
void 0&&(a[n]=o[n]);return hd(e,i,void 0,void 0,null,a)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){
return{$$typeof:EE,render:e}};he.isValidElement=md;he.lazy=function(e){return{$$typeof:jg,_payload:{_status:-1,_result:e},
_init:OE}};he.memo=function(e,t){return{$$typeof:_E,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Ge.
T,r={};Ge.T=r;try{var n=e(),a=Ge.S;a!==null&&a(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(CE,Mg)}catch(i){
Mg(i)}finally{Ge.T=t}};he.unstable_useCacheRefresh=function(){return Ge.H.useCacheRefresh()};he.use=function(e){return Ge.
H.use(e)};he.useActionState=function(e,t,r){return Ge.H.useActionState(e,t,r)};he.useCallback=function(e,t){return Ge.H.
useCallback(e,t)};he.useContext=function(e){return Ge.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=
function(e,t){return Ge.H.useDeferredValue(e,t)};he.useEffect=function(e,t,r){var n=Ge.H;if(typeof r=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)};he.useId=function(){return Ge.
H.useId()};he.useImperativeHandle=function(e,t,r){return Ge.H.useImperativeHandle(e,t,r)};he.useInsertionEffect=function(e,t){
return Ge.H.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return Ge.H.useLayoutEffect(e,t)};he.useMemo=function(e,t){
return Ge.H.useMemo(e,t)};he.useOptimistic=function(e,t){return Ge.H.useOptimistic(e,t)};he.useReducer=function(e,t,r){return Ge.
H.useReducer(e,t,r)};he.useRef=function(e){return Ge.H.useRef(e)};he.useState=function(e){return Ge.H.useState(e)};he.useSyncExternalStore=
function(e,t,r){return Ge.H.useSyncExternalStore(e,t,r)};he.useTransition=function(){return Ge.H.useTransition()};he.version=
"19.1.0"});var qg=We((de,Al)=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(v,A){Object.defineProperty(n.
prototype,v,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",A[0],A[1])}})}function t(v){
return v===null||typeof v!="object"?null:(v=mn&&v[mn]||v["@@iterator"],typeof v=="function"?v:null)}function r(v,A){v=(v=
v.constructor)&&(v.displayName||v.name)||"ReactClass";var j=v+"."+A;Ua[j]||(console.error("Can't call %s on a component \
that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.stat\
e` directly or define a `state = {};` class property with the desired state in the %s component.",A,v),Ua[j]=!0)}function n(v,A,j){
this.props=v,this.context=A,this.refs=Ac,this.updater=j||Cs}function a(){}function i(v,A,j){this.props=v,this.context=A,
this.refs=Ac,this.updater=j||Cs}function o(v){return""+v}function s(v){try{o(v);var A=!1}catch{A=!0}if(A){A=console;var j=A.
error,F=typeof Symbol=="function"&&Symbol.toStringTag&&v[Symbol.toStringTag]||v.constructor.name||"Object";return j.call(
A,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",F),o(v)}}function l(v){
if(v==null)return null;if(typeof v=="function")return v.$$typeof===Pw?null:v.displayName||v.name||null;if(typeof v=="str\
ing")return v;switch(v){case Rr:return"Fragment";case C:return"Profiler";case ir:return"StrictMode";case Wr:return"Suspe\
nse";case Ir:return"SuspenseList";case bt:return"Activity"}if(typeof v=="object")switch(typeof v.tag=="number"&&console.
error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
v.$$typeof){case st:return"Portal";case He:return(v.displayName||"Context")+".Provider";case ne:return(v._context.displayName||
"Context")+".Consumer";case ht:var A=v.render;return v=v.displayName,v||(v=A.displayName||A.name||"",v=v!==""?"ForwardRe\
f("+v+")":"ForwardRef"),v;case la:return A=v.displayName||null,A!==null?A:l(v.type)||"Memo";case jn:A=v._payload,v=v._init;
try{return l(v(A))}catch{}}return null}function c(v){if(v===Rr)return"<>";if(typeof v=="object"&&v!==null&&v.$$typeof===
jn)return"<...>";try{var A=l(v);return A?"<"+A+">":"<...>"}catch{return"<...>"}}function u(){var v=Se.A;return v===null?
null:v.getOwner()}function d(){return Error("react-stack-top-frame")}function f(v){if(Ps.call(v,"key")){var A=Object.getOwnPropertyDescriptor(
v,"key").get;if(A&&A.isReactWarning)return!1}return v.key!==void 0}function h(v,A){function j(){uf||(uf=!0,console.error(
"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same \
value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",A))}j.
isReactWarning=!0,Object.defineProperty(v,"key",{get:j,configurable:!0})}function y(){var v=l(this.type);return pf[v]||(pf[v]=
!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the \
JSX Element type in a future release.")),v=this.props.ref,v!==void 0?v:null}function b(v,A,j,F,J,Ee,ye,je){return j=Ee.ref,
v={$$typeof:it,type:v,key:A,props:Ee,_owner:J},(j!==void 0?j:null)!==null?Object.defineProperty(v,"ref",{enumerable:!1,get:y}):
Object.defineProperty(v,"ref",{enumerable:!1,value:null}),v._store={},Object.defineProperty(v._store,"validated",{configurable:!1,
enumerable:!1,writable:!0,value:0}),Object.defineProperty(v,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),
Object.defineProperty(v,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ye}),Object.defineProperty(v,"_de\
bugTask",{configurable:!1,enumerable:!1,writable:!0,value:je}),Object.freeze&&(Object.freeze(v.props),Object.freeze(v)),
v}function T(v,A){return A=b(v.type,A,void 0,void 0,v._owner,v.props,v._debugStack,v._debugTask),v._store&&(A._store.validated=
v._store.validated),A}function S(v){return typeof v=="object"&&v!==null&&v.$$typeof===it}function E(v){var A={"=":"=0","\
:":"=2"};return"$"+v.replace(/[=:]/g,function(j){return A[j]})}function _(v,A){return typeof v=="object"&&v!==null&&v.key!=
null?(s(v.key),E(""+v.key)):A.toString(36)}function O(){}function M(v){switch(v.status){case"fulfilled":return v.value;case"\
rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(O,O):(v.status="pending",v.then(function(A){v.status===
"pending"&&(v.status="fulfilled",v.value=A)},function(A){v.status==="pending"&&(v.status="rejected",v.reason=A)})),v.status){case"\
fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function W(v,A,j,F,J){var Ee=typeof v;(Ee==="undefined"||
Ee==="boolean")&&(v=null);var ye=!1;if(v===null)ye=!0;else switch(Ee){case"bigint":case"string":case"number":ye=!0;break;case"\
object":switch(v.$$typeof){case it:case st:ye=!0;break;case jn:return ye=v._init,W(ye(v._payload),A,j,F,J)}}if(ye){ye=v,
J=J(ye);var je=F===""?"."+_(ye,0):F;return lf(J)?(j="",je!=null&&(j=je.replace(hf,"$&/")+"/"),W(J,A,j,"",function(Ln){return Ln})):
J!=null&&(S(J)&&(J.key!=null&&(ye&&ye.key===J.key||s(J.key)),j=T(J,j+(J.key==null||ye&&ye.key===J.key?"":(""+J.key).replace(
hf,"$&/")+"/")+je),F!==""&&ye!=null&&S(ye)&&ye.key==null&&ye._store&&!ye._store.validated&&(j._store.validated=2),J=j),A.
push(J)),1}if(ye=0,je=F===""?".":F+":",lf(v))for(var Te=0;Te<v.length;Te++)F=v[Te],Ee=je+_(F,Te),ye+=W(F,A,j,Ee,J);else if(Te=
t(v),typeof Te=="function")for(Te===v.entries&&(ff||console.warn("Using Maps as children is not supported. Use an array \
of keyed ReactElements instead."),ff=!0),v=Te.call(v),Te=0;!(F=v.next()).done;)F=F.value,Ee=je+_(F,Te++),ye+=W(F,A,j,Ee,
J);else if(Ee==="object"){if(typeof v.then=="function")return W(M(v),A,j,F,J);throw A=String(v),Error("Objects are not v\
alid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":A)+"). If you \
meant to render a collection of children, use an array instead.")}return ye}function K(v,A,j){if(v==null)return v;var F=[],
J=0;return W(v,F,"","",function(Ee){return A.call(j,Ee,J++)}),F}function Z(v){if(v._status===-1){var A=v._result;A=A(),A.
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
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),v}function we(){}function G(v){
if(Ds===null)try{var A=("require"+Math.random()).slice(0,7);Ds=(Al&&Al[A]).call(Al,"timers").setImmediate}catch{Ds=function(F){
gf===!1&&(gf=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so\
 enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/iss\
ues if you encounter this warning."));var J=new MessageChannel;J.port1.onmessage=F,J.port2.postMessage(void 0)}}return Ds(
v)}function ae(v){return 1<v.length&&typeof AggregateError=="function"?new AggregateError(v):v[0]}function Ie(v,A){A!==Ms-
1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls\
 before making a new one. "),Ms=A}function ge(v,A,j){var F=Se.actQueue;if(F!==null)if(F.length!==0)try{pe(F),G(function(){
return ge(v,A,j)});return}catch(J){Se.thrownErrors.push(J)}else Se.actQueue=null;0<Se.thrownErrors.length?(F=ae(Se.thrownErrors),
Se.thrownErrors.length=0,j(F)):A(v)}function pe(v){if(!$c){$c=!0;var A=0;try{for(;A<v.length;A++){var j=v[A];do{Se.didUsePromise=
!1;var F=j(!1);if(F!==null){if(Se.didUsePromise){v[A]=j,v.splice(0,A);return}j=F}else break}while(!0)}v.length=0}catch(J){
v.splice(0,A+1),Se.thrownErrors.push(J)}finally{$c=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var it=Symbol.
for("react.transitional.element"),st=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),ir=Symbol.for("react.str\
ict_mode"),C=Symbol.for("react.profiler");Symbol.for("react.provider");var ne=Symbol.for("react.consumer"),He=Symbol.for(
"react.context"),ht=Symbol.for("react.forward_ref"),Wr=Symbol.for("react.suspense"),Ir=Symbol.for("react.suspense_list"),
la=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),bt=Symbol.for("react.activity"),mn=Symbol.iterator,Ua={},Cs={isMounted:function(){
return!1},enqueueForceUpdate:function(v){r(v,"forceUpdate")},enqueueReplaceState:function(v){r(v,"replaceState")},enqueueSetState:function(v){
r(v,"setState")}},sf=Object.assign,Ac={};Object.freeze(Ac),n.prototype.isReactComponent={},n.prototype.setState=function(v,A){
if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a func\
tion which returns an object of state variables.");this.updater.enqueueSetState(this,v,A,"setState")},n.prototype.forceUpdate=
function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};var Or={isMounted:["isMounted","Instead, make sure to\
 clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceSt\
ate","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Ns;for(Ns in Or)
Or.hasOwnProperty(Ns)&&e(Ns,Or[Ns]);a.prototype=n.prototype,Or=i.prototype=new a,Or.constructor=i,sf(Or,n.prototype),Or.
isPureReactComponent=!0;var lf=Array.isArray,Pw=Symbol.for("react.client.reference"),Se={H:null,A:null,T:null,S:null,V:null,
actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},
Ps=Object.prototype.hasOwnProperty,cf=console.createTask?console.createTask:function(){return null};Or={"react-stack-bot\
tom-frame":function(v){return v()}};var uf,df,pf={},Dw=Or["react-stack-bottom-frame"].bind(Or,d)(),Mw=cf(c(d)),ff=!1,hf=/\/+/g,
mf=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="functio\
n"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message==
"string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.
emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},gf=!1,Ds=null,Ms=0,js=!1,$c=!1,yf=typeof queueMicrotask==
"function"?function(v){queueMicrotask(function(){return queueMicrotask(v)})}:G;Or=Object.freeze({__proto__:null,c:function(v){
return H().useMemoCache(v)}}),de.Children={map:K,forEach:function(v,A,j){K(v,function(){A.apply(this,arguments)},j)},count:function(v){
var A=0;return K(v,function(){A++}),A},toArray:function(v){return K(v,function(A){return A})||[]},only:function(v){if(!S(
v))throw Error("React.Children.only expected to receive a single React element child.");return v}},de.Component=n,de.Fragment=
Rr,de.Profiler=C,de.PureComponent=i,de.StrictMode=ir,de.Suspense=Wr,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=
Se,de.__COMPILER_RUNTIME=Or,de.act=function(v){var A=Se.actQueue,j=Ms;Ms++;var F=Se.actQueue=A!==null?A:[],J=!1;try{var Ee=v()}catch(Te){
Se.thrownErrors.push(Te)}if(0<Se.thrownErrors.length)throw Ie(A,j),v=ae(Se.thrownErrors),Se.thrownErrors.length=0,v;if(Ee!==
null&&typeof Ee=="object"&&typeof Ee.then=="function"){var ye=Ee;return yf(function(){J||js||(js=!0,console.error("You c\
alled act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act cal\
ls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Te,Ln){J=!0,ye.then(function(Ba){
if(Ie(A,j),j===0){try{pe(F),G(function(){return ge(Ba,Te,Ln)})}catch(Lw){Se.thrownErrors.push(Lw)}if(0<Se.thrownErrors.length){
var jw=ae(Se.thrownErrors);Se.thrownErrors.length=0,Ln(jw)}}else Te(Ba)},function(Ba){Ie(A,j),0<Se.thrownErrors.length&&
(Ba=ae(Se.thrownErrors),Se.thrownErrors.length=0),Ln(Ba)})}}}var je=Ee;if(Ie(A,j),j===0&&(pe(F),F.length!==0&&yf(function(){
J||js||(js=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testi\
ng React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Se.actQueue=
null),0<Se.thrownErrors.length)throw v=ae(Se.thrownErrors),Se.thrownErrors.length=0,v;return{then:function(Te,Ln){J=!0,j===
0?(Se.actQueue=F,G(function(){return ge(je,Te,Ln)})):Te(je)}}},de.cache=function(v){return function(){return v.apply(null,
arguments)}},de.captureOwnerStack=function(){var v=Se.getCurrentStack;return v===null?null:v()},de.cloneElement=function(v,A,j){
if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var F=sf({},v.props),J=v.key,Ee=v.
_owner;if(A!=null){var ye;e:{if(Ps.call(A,"ref")&&(ye=Object.getOwnPropertyDescriptor(A,"ref").get)&&ye.isReactWarning){
ye=!1;break e}ye=A.ref!==void 0}ye&&(Ee=u()),f(A)&&(s(A.key),J=""+A.key);for(je in A)!Ps.call(A,je)||je==="key"||je==="_\
_self"||je==="__source"||je==="ref"&&A.ref===void 0||(F[je]=A[je])}var je=arguments.length-2;if(je===1)F.children=j;else if(1<
je){ye=Array(je);for(var Te=0;Te<je;Te++)ye[Te]=arguments[Te+2];F.children=ye}for(F=b(v.type,J,void 0,void 0,Ee,F,v._debugStack,
v._debugTask),J=2;J<arguments.length;J++)Ee=arguments[J],S(Ee)&&Ee._store&&(Ee._store.validated=1);return F},de.createContext=
function(v){return v={$$typeof:He,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=
v,v.Consumer={$$typeof:ne,_context:v},v._currentRenderer=null,v._currentRenderer2=null,v},de.createElement=function(v,A,j){
for(var F=2;F<arguments.length;F++){var J=arguments[F];S(J)&&J._store&&(J._store.validated=1)}if(F={},J=null,A!=null)for(Te in df||
!("__self"in A)||"key"in A||(df=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transfor\
m. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),f(A)&&(s(A.key),
J=""+A.key),A)Ps.call(A,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(F[Te]=A[Te]);var Ee=arguments.length-2;if(Ee===
1)F.children=j;else if(1<Ee){for(var ye=Array(Ee),je=0;je<Ee;je++)ye[je]=arguments[je+2];Object.freeze&&Object.freeze(ye),
F.children=ye}if(v&&v.defaultProps)for(Te in Ee=v.defaultProps,Ee)F[Te]===void 0&&(F[Te]=Ee[Te]);J&&h(F,typeof v=="funct\
ion"?v.displayName||v.name||"Unknown":v);var Te=1e4>Se.recentlyCreatedOwnerStacks++;return b(v,J,void 0,void 0,u(),F,Te?
Error("react-stack-top-frame"):Dw,Te?cf(c(v)):Mw)},de.createRef=function(){var v={current:null};return Object.seal(v),v},
de.forwardRef=function(v){v!=null&&v.$$typeof===la?console.error("forwardRef requires a render function but received a `\
memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof v!="function"?console.error("forw\
ardRef requires a render function but was given %s.",v===null?"null":typeof v):v.length!==0&&v.length!==2&&console.error(
"forwardRef render functions accept exactly two parameters: props and ref. %s",v.length===1?"Did you forget to use the r\
ef parameter?":"Any additional parameter will be undefined."),v!=null&&v.defaultProps!=null&&console.error("forwardRef r\
ender functions do not support defaultProps. Did you accidentally pass a React component?");var A={$$typeof:ht,render:v},
j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(F){j=
F,v.name||v.displayName||(Object.defineProperty(v,"name",{value:F}),v.displayName=F)}}),A},de.isValidElement=S,de.lazy=function(v){
return{$$typeof:jn,_payload:{_status:-1,_result:v},_init:Z}},de.memo=function(v,A){v==null&&console.error("memo: The fir\
st argument must be a component. Instead received: %s",v===null?"null":typeof v),A={$$typeof:la,type:v,compare:A===void 0?
null:A};var j;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return j},set:function(F){
j=F,v.name||v.displayName||(Object.defineProperty(v,"name",{value:F}),v.displayName=F)}}),A},de.startTransition=function(v){
var A=Se.T,j={};Se.T=j,j._updatedFibers=new Set;try{var F=v(),J=Se.S;J!==null&&J(j,F),typeof F=="object"&&F!==null&&typeof F.
then=="function"&&F.then(we,mf)}catch(Ee){mf(Ee)}finally{A===null&&j._updatedFibers&&(v=j._updatedFibers.size,j._updatedFibers.
clear(),10<v&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription \
please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),Se.T=A}},de.unstable_useCacheRefresh=
function(){return H().useCacheRefresh()},de.use=function(v){return H().use(v)},de.useActionState=function(v,A,j){return H().
useActionState(v,A,j)},de.useCallback=function(v,A){return H().useCallback(v,A)},de.useContext=function(v){var A=H();return v.
$$typeof===ne&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to\
 call useContext(Context) instead?"),A.useContext(v)},de.useDebugValue=function(v,A){return H().useDebugValue(v,A)},de.useDeferredValue=
function(v,A){return H().useDeferredValue(v,A)},de.useEffect=function(v,A,j){v==null&&console.warn("React Hook useEffect\
 requires an effect callback. Did you forget to pass a callback to the hook?");var F=H();if(typeof j=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(v,A)},de.useId=function(){return H().
useId()},de.useImperativeHandle=function(v,A,j){return H().useImperativeHandle(v,A,j)},de.useInsertionEffect=function(v,A){
return v==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callba\
ck to the hook?"),H().useInsertionEffect(v,A)},de.useLayoutEffect=function(v,A){return v==null&&console.warn("React Hook\
 useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),H().useLayoutEffect(v,A)},
de.useMemo=function(v,A){return H().useMemo(v,A)},de.useOptimistic=function(v,A){return H().useOptimistic(v,A)},de.useReducer=
function(v,A,j){return H().useReducer(v,A,j)},de.useRef=function(v){return H().useRef(v)},de.useState=function(v){return H().
useState(v)},de.useSyncExternalStore=function(v,A,j){return H().useSyncExternalStore(v,A,j)},de.useTransition=function(){
return H().useTransition()},de.version="19.1.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()});var ea=We((QM,gd)=>{"use strict";process.env.NODE_ENV==="production"?gd.exports=Wg():gd.exports=qg()});var Yg=We($l=>{"use strict";var NE=Symbol.for("react.transitional.element"),PE=Symbol.for("react.fragment");function Vg(e,t,r){
var n=null;if(r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),"key"in t){r={};for(var a in t)a!=="key"&&(r[a]=t[a])}else
r=t;return t=r.ref,{$$typeof:NE,type:e,key:n,ref:t!==void 0?t:null,props:r}}$l.Fragment=PE;$l.jsx=Vg;$l.jsxs=Vg});var zg=We(Rl=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(C){if(C==null)return null;if(typeof C==
"function")return C.$$typeof===we?null:C.displayName||C.name||null;if(typeof C=="string")return C;switch(C){case b:return"\
Fragment";case S:return"Profiler";case T:return"StrictMode";case M:return"Suspense";case W:return"SuspenseList";case H:return"\
Activity"}if(typeof C=="object")switch(typeof C.tag=="number"&&console.error("Received an unexpected object in getCompon\
entNameFromType(). This is likely a bug in React. Please file an issue."),C.$$typeof){case y:return"Portal";case _:return(C.
displayName||"Context")+".Provider";case E:return(C._context.displayName||"Context")+".Consumer";case O:var ne=C.render;
return C=C.displayName,C||(C=ne.displayName||ne.name||"",C=C!==""?"ForwardRef("+C+")":"ForwardRef"),C;case K:return ne=C.
displayName||null,ne!==null?ne:e(C.type)||"Memo";case Z:ne=C._payload,C=C._init;try{return e(C(ne))}catch{}}return null}
function t(C){return""+C}function r(C){try{t(C);var ne=!1}catch{ne=!0}if(ne){ne=console;var He=ne.error,ht=typeof Symbol==
"function"&&Symbol.toStringTag&&C[Symbol.toStringTag]||C.constructor.name||"Object";return He.call(ne,"The provided key \
is an unsupported type %s. This value must be coerced to a string before using it here.",ht),t(C)}}function n(C){if(C===
b)return"<>";if(typeof C=="object"&&C!==null&&C.$$typeof===Z)return"<...>";try{var ne=e(C);return ne?"<"+ne+">":"<...>"}catch{
return"<...>"}}function a(){var C=G.A;return C===null?null:C.getOwner()}function i(){return Error("react-stack-top-frame")}
function o(C){if(ae.call(C,"key")){var ne=Object.getOwnPropertyDescriptor(C,"key").get;if(ne&&ne.isReactWarning)return!1}
return C.key!==void 0}function s(C,ne){function He(){pe||(pe=!0,console.error("%s: `key` is not a prop. Trying to access\
 it will result in `undefined` being returned. If you need to access the same value within the child component, you shou\
ld pass it as a different prop. (https://react.dev/link/special-props)",ne))}He.isReactWarning=!0,Object.defineProperty(
C,"key",{get:He,configurable:!0})}function l(){var C=e(this.type);return it[C]||(it[C]=!0,console.error("Accessing eleme\
nt.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future rele\
ase.")),C=this.props.ref,C!==void 0?C:null}function c(C,ne,He,ht,Wr,Ir,la,jn){return He=Ir.ref,C={$$typeof:h,type:C,key:ne,
props:Ir,_owner:Wr},(He!==void 0?He:null)!==null?Object.defineProperty(C,"ref",{enumerable:!1,get:l}):Object.defineProperty(
C,"ref",{enumerable:!1,value:null}),C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,
writable:!0,value:0}),Object.defineProperty(C,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.
defineProperty(C,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:la}),Object.defineProperty(C,"_debugTask",
{configurable:!1,enumerable:!1,writable:!0,value:jn}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C}function u(C,ne,He,ht,Wr,Ir,la,jn){
var bt=ne.children;if(bt!==void 0)if(ht)if(Ie(bt)){for(ht=0;ht<bt.length;ht++)d(bt[ht]);Object.freeze&&Object.freeze(bt)}else
console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or Rea\
ct.jsxDEV. Use the Babel transform instead.");else d(bt);if(ae.call(ne,"key")){bt=e(C);var mn=Object.keys(ne).filter(function(Cs){
return Cs!=="key"});ht=0<mn.length?"{key: someKey, "+mn.join(": ..., ")+": ...}":"{key: someKey}",ir[bt+ht]||(mn=0<mn.length?
"{"+mn.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ht,bt,mn,bt),ir[bt+ht]=!0)}if(bt=null,He!==void 0&&(r(He),bt=""+He),o(ne)&&(r(ne.key),
bt=""+ne.key),"key"in ne){He={};for(var Ua in ne)Ua!=="key"&&(He[Ua]=ne[Ua])}else He=ne;return bt&&s(He,typeof C=="funct\
ion"?C.displayName||C.name||"Unknown":C),c(C,bt,Ir,Wr,a(),He,la,jn)}function d(C){typeof C=="object"&&C!==null&&C.$$typeof===
h&&C._store&&(C._store.validated=1)}var f=ea(),h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.
for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler");Symbol.for("react.provider");var E=Symbol.
for("react.consumer"),_=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),W=Symbol.
for("react.suspense_list"),K=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),we=Symbol.
for("react.client.reference"),G=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=Object.prototype.hasOwnProperty,
Ie=Array.isArray,ge=console.createTask?console.createTask:function(){return null};f={"react-stack-bottom-frame":function(C){
return C()}};var pe,it={},st=f["react-stack-bottom-frame"].bind(f,i)(),Rr=ge(n(i)),ir={};Rl.Fragment=b,Rl.jsx=function(C,ne,He,ht,Wr){
var Ir=1e4>G.recentlyCreatedOwnerStacks++;return u(C,ne,He,!1,ht,Wr,Ir?Error("react-stack-top-frame"):st,Ir?ge(n(C)):Rr)},
Rl.jsxs=function(C,ne,He,ht,Wr){var Ir=1e4>G.recentlyCreatedOwnerStacks++;return u(C,ne,He,!0,ht,Wr,Ir?Error("react-stac\
k-top-frame"):st,Ir?ge(n(C)):Rr)}}()});var Il=We((rj,yd)=>{"use strict";process.env.NODE_ENV==="production"?yd.exports=Yg():yd.exports=zg()});var vd=We(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.Allow=q.ALL=q.COLLECTION=q.ATOM=q.SPECIAL=
q.INF=q._INFINITY=q.INFINITY=q.NAN=q.BOOL=q.NULL=q.OBJ=q.ARR=q.NUM=q.STR=void 0;q.STR=1;q.NUM=2;q.ARR=4;q.OBJ=8;q.NULL=16;
q.BOOL=32;q.NAN=64;q.INFINITY=128;q._INFINITY=256;q.INF=q.INFINITY|q._INFINITY;q.SPECIAL=q.NULL|q.BOOL|q.INF|q.NAN;q.ATOM=
q.STR|q.NUM|q.SPECIAL;q.COLLECTION=q.ARR|q.OBJ;q.ALL=q.ATOM|q.COLLECTION;q.Allow={STR:q.STR,NUM:q.NUM,ARR:q.ARR,OBJ:q.OBJ,
NULL:q.NULL,BOOL:q.BOOL,NAN:q.NAN,INFINITY:q.INFINITY,_INFINITY:q._INFINITY,INF:q.INF,SPECIAL:q.SPECIAL,ATOM:q.ATOM,COLLECTION:q.
COLLECTION,ALL:q.ALL};q.default=q.Allow});var bd=We($t=>{"use strict";var DE=$t&&$t.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),ME=$t&&$t.__exportStar||function(e,t){
for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&DE(t,e,r)};Object.defineProperty($t,"__esModul\
e",{value:!0});$t.Allow=$t.MalformedJSON=$t.PartialJSON=$t.parseJSON=$t.parse=void 0;var tr=vd();Object.defineProperty($t,
"Allow",{enumerable:!0,get:function(){return tr.Allow}});ME(vd(),$t);var Ol=class extends Error{};$t.PartialJSON=Ol;var Cl=class extends Error{};
$t.MalformedJSON=Cl;function Kg(e,t=tr.Allow.ALL){if(typeof e!="string")throw new TypeError(`expecting str, got ${typeof e}`);
if(!e.trim())throw new Error(`${e} is empty`);return jE(e.trim(),t)}$t.parseJSON=Kg;var jE=(e,t)=>{let r=e.length,n=0,a=f=>{
throw new Ol(`${f} at position ${n}`)},i=f=>{throw new Cl(`${f} at position ${n}`)},o=()=>(d(),n>=r&&a("Unexpected end o\
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
\r	`.includes(e[n]);)n++};return o()},LE=Kg;$t.parse=LE});import{fileURLToPath as xD}from"node:url";var Me=ie(Le(),1),tt=ie(Le(),1);var Vs={done:!1,hasNext:!1};function Jc(e,...t){let r=e,n=t.map(i=>"lazy"in i?G1(i):void 0),a=0;for(;a<t.length;){if(n[a]===void 0||!J1(r)){let l=t[a];
r=l(r),a+=1;continue}let i=[];for(let l=a;l<t.length;l++){let c=n[l];if(c===void 0||(i.push(c),c.isSingle))break}let o=[];
for(let l of r)if(Oh(l,o,i))break;let{isSingle:s}=i.at(-1);r=s?o[0]:o,a+=i.length}return r}function Oh(e,t,r){if(r.length===
0)return t.push(e),!1;let n=e,a=Vs,i=!1;for(let[o,s]of r.entries()){let{index:l,items:c}=s;if(c.push(n),a=s(n,l,c),s.index+=
1,a.hasNext){if(a.hasMany??!1){for(let u of a.next)if(Oh(u,t,r.slice(o+1)))return!0;return i}n=a.next}if(!a.hasNext)break;
a.done&&(i=!0)}return a.hasNext&&t.push(n),i}function G1(e){let{lazy:t,lazyArgs:r}=e,n=t(...r);return Object.assign(n,{isSingle:t.
single??!1,index:0,items:[]})}function J1(e){return typeof e=="string"||typeof e=="object"&&e!==null&&Symbol.iterator in
e}function Ch(e,t){let r=t.length-e.length;if(r===1){let[n,...a]=t;return Jc(n,{lazy:e,lazyArgs:a})}if(r===0){let n={lazy:e,
lazyArgs:t};return Object.assign(a=>Jc(a,n),n)}throw new Error("Wrong number of arguments")}function Nh(e,t,r){let n=a=>e(a,...t);return r===void 0?n:Object.assign(n,{lazy:r,lazyArgs:t})}function or(e,t,r){let n=e.length-t.length;if(n===0)return e(...t);if(n===1)return Nh(e,t,r);throw new Error("Wrong numb\
er of arguments")}function Zc(...e){return or(Z1,e)}function Z1(e,t){if(e<1)return[];let r=Number.isInteger(e)?e:Math.floor(e),n=new Array(
r);for(let a=0;a<r;a++)n[a]=t(a);return n}function fa(...e){return Ch(X1,e)}function X1(){let e=new Set;return t=>e.has(t)?Vs:(e.add(t),{done:!1,hasNext:!0,next:t})}function Xc(e,t,r){return typeof t=="number"||t===void 0?n=>n.split(e,t):e.split(t,r)}function gr(...e){return or(Q1,e)}var Q1=(e,t)=>e[t];function Qc(...e){return or(eS,e)}function eS(e,t){let r={};for(let[n,a]of Object.entries(e)){let i=t(a,n,e);r[n]=i}return r}function vn(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Ys(...e){return or(tS,e)}var tS=e=>e.at(-1);function Bn(e){return typeof e=="number"&&!Number.isNaN(e)}function eu(e){return typeof e=="object"&&e!==null}function jt(e){return typeof e=="string"}function tu(e){return e===void 0?!0:typeof e=="string"||Array.isArray(e)?e.length===0:Object.keys(e).length===0}function Yi(e){return typeof e=="function"}function zi(e){return e!==void 0}function Hn(...e){return or(rS,e)}var rS=(e,t)=>{let r=new Map;for(let[n,a]of e.entries()){let i=t(a,n,e);if(i!==void 0){
let o=r.get(i);o===void 0&&(o=[],r.set(i,o)),o.push(a)}}return Object.fromEntries(r)};function ru(){return nS}var nS=e=>e;function wt(...e){return or(aS,e)}function aS(e,t){let r={};for(let[n,a]of e.entries()){let i=t(a,n,e);r[i]=a}return r}function nu(...e){return or(iS,e)}var iS=e=>`${e[0]?.toUpperCase()??""}${e.slice(1)}`;var $=ie(Dh(),1),br=$.default.BigInt(0),po=$.default.BigInt(1),Gu=$.default.BigInt(2),oS=$.default.BigInt(10),sS=$.default.
BigInt(24),lS=$.default.BigInt(60),cS=$.default.BigInt(1e3),Io=$.default.BigInt(1e6),io=$.default.BigInt(1e9),gm=$.default.
multiply($.default.BigInt(3600),io),uS=$.default.multiply(lS,io),Kn=$.default.multiply(gm,sS);function wn(e){return typeof e==
"bigint"?$.default.BigInt(e.toString(10)):e}function ym(e){return $.default.equal($.default.remainder(e,Gu),br)}function ha(e){
return $.default.lessThan(e,br)?$.default.unaryMinus(e):e}function Gs(e,t){return $.default.lessThan(e,t)?-1:$.default.greaterThan(
e,t)?1:0}function Zi(e,t){return{quotient:$.default.divide(e,t),remainder:$.default.remainder(e,t)}}var Mh,jh,te="slot-e\
pochNanoSeconds",re="slot-iso-date",Ye="slot-iso-date-time",Qe="slot-time",D="slot-calendar",vm="slot-date-brand",bm="sl\
ot-year-month-brand",wm="slot-month-day-brand",Oe="slot-time-zone",Bt="slot-years",Ht="slot-months",sr="slot-weeks",Wt="\
slot-days",qt="slot-hours",Vt="slot-minutes",Yt="slot-seconds",zt="slot-milliseconds",Kt="slot-microseconds",lr="slot-na\
noseconds",Tm="date",km="ym",Sm="md",Em="time",xm="datetime",_m="instant",xa="original",za="timezone-canonical",cu="time\
zone-original",Xi="calendar-id",Am="locale",uu="options",$m=new WeakMap,du=Symbol.for("@@Temporal__GetSlots");(Mh=globalThis)[du]||
(Mh[du]=function(e){return $m.get(e)});var dl=globalThis[du],pu=Symbol.for("@@Temporal__CreateSlots");(jh=globalThis)[pu]||
(jh[pu]=function(e){$m.set(e,Object.create(null))});var On=globalThis[pu];function Qt(e,...t){if(!e||typeof e!="object")
return!1;let r=dl(e);return!!r&&t.every(n=>n in r)}function g(e,t){let r=dl(e)?.[t];if(r===void 0)throw new TypeError(`M\
issing internal slot ${t}`);return r}function fe(e,t,r){let n=dl(e);if(n===void 0)throw new TypeError("Missing slots for\
 the given container");if(n[t])throw new TypeError(`${t} already has set`);n[t]=r}var fu={};function Cn(e,t){Object.defineProperty(
e.prototype,Symbol.toStringTag,{value:t,writable:!1,enumerable:!1,configurable:!0});let r=Object.getOwnPropertyNames(e);
for(let a=0;a<r.length;a++){let i=r[a],o=Object.getOwnPropertyDescriptor(e,i);o.configurable&&o.enumerable&&(o.enumerable=
!1,Object.defineProperty(e,i,o))}let n=Object.getOwnPropertyNames(e.prototype);for(let a=0;a<n.length;a++){let i=n[a],o=Object.
getOwnPropertyDescriptor(e.prototype,i);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e.prototype,
i,o))}hu(t,e),hu(`${t}.prototype`,e.prototype)}function hu(e,t){let r=`%${e}%`;if(fu[r]!==void 0)throw new Error(`intrin\
sic ${e} already exists`);fu[r]=t}function At(e){return fu[e]}function Ga(e,t){let r=e;if(r===0)return{div:r,mod:r};let n=Math.
sign(r);r=Math.abs(r);let a=Math.trunc(1+Math.log10(r));if(t>=a)return{div:0*n,mod:n*r};if(t===0)return{div:n*r,mod:0*n};
let i=r.toPrecision(a);return{div:n*Number.parseInt(i.slice(0,a-t),10),mod:n*Number.parseInt(i.slice(a-t),10)}}function au(e,t,r){
let n=e,a=r;if(n===0)return a;let i=Math.sign(n)||Math.sign(a);n=Math.abs(n),a=Math.abs(a);let o=n.toPrecision(Math.trunc(
1+Math.log10(n)));if(a===0)return i*Number.parseInt(o+"0".repeat(t),10);let s=o+a.toPrecision(Math.trunc(1+Math.log10(a))).
padStart(t,"0");return i*Number.parseInt(s,10)}function pl(e,t){let r=t==="negative";switch(e){case"ceil":return r?"zero":
"infinity";case"floor":return r?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":
return r?"half-zero":"half-infinity";case"halfFloor":return r?"half-infinity":"half-zero";case"halfExpand":return"half-i\
nfinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function fl(e,t,r,n,a){return a==="zero"?e:
a==="infinity"?t:r<0?e:r>0?t:a==="half-zero"?e:a==="half-infinity"?t:n?e:t}var Fe=class e{constructor(t){this.totalNs=wn(
t),this.sec=$.default.toNumber($.default.divide(this.totalNs,io)),this.subsec=$.default.toNumber($.default.remainder(this.
totalNs,io))}static validateNew(t,r){if($.default.greaterThan(ha(t),e.MAX))throw new RangeError(`${r} of duration time u\
nits cannot exceed ${e.MAX} s`);return new e(t)}static fromEpochNsDiff(t,r){let n=$.default.subtract(wn(t),wn(r));return new e(
n)}static fromComponents(t,r,n,a,i,o){let s=$.default.add($.default.add($.default.add($.default.add($.default.add($.default.
BigInt(o),$.default.multiply($.default.BigInt(i),cS)),$.default.multiply($.default.BigInt(a),Io)),$.default.multiply($.default.
BigInt(n),io)),$.default.multiply($.default.BigInt(r),uS)),$.default.multiply($.default.BigInt(t),gm));return e.validateNew(
s,"total")}abs(){return new e(ha(this.totalNs))}add(t){return e.validateNew($.default.add(this.totalNs,t.totalNs),"sum")}add24HourDays(t){
return e.validateNew($.default.add(this.totalNs,$.default.multiply($.default.BigInt(t),Kn)),"sum")}addToEpochNs(t){return $.default.
add(wn(t),this.totalNs)}cmp(t){return Gs(this.totalNs,t.totalNs)}divmod(t){let{quotient:r,remainder:n}=Zi(this.totalNs,$.default.
BigInt(t));return{quotient:$.default.toNumber(r),remainder:new e(n)}}fdiv(t){let r=wn(t),n=$.default.BigInt(r),{quotient:a,
remainder:i}=Zi(this.totalNs,n),o=[],s,l=($.default.lessThan(this.totalNs,br)?-1:1)*Math.sign($.default.toNumber(r));for(;!$.default.
equal(i,br)&&o.length<50;)i=$.default.multiply(i,oS),{quotient:s,remainder:i}=Zi(i,n),o.push(Math.abs($.default.toNumber(
s)));return l*+(ha(a).toString()+"."+o.join(""))}isZero(){return $.default.equal(this.totalNs,br)}round(t,r){let n=wn(t);
if($.default.equal(n,po))return this;let{quotient:a,remainder:i}=Zi(this.totalNs,n),o=$.default.lessThan(this.totalNs,br)?
"negative":"positive",s=$.default.multiply(ha(a),n),l=$.default.add(s,n),c=Gs(ha($.default.multiply(i,Gu)),n),u=pl(r,o),
d=$.default.equal(ha(this.totalNs),s)?s:fl(s,l,c,ym(a),u),f=o==="positive"?d:$.default.unaryMinus(d);return e.validateNew(
f,"rounding")}sign(){return this.cmp(new e(br))}subtract(t){return e.validateNew($.default.subtract(this.totalNs,t.totalNs),
"difference")}};Fe.MAX=$.default.BigInt("9007199254740991999999999"),Fe.ZERO=new Fe(br);var Lh=/[A-Za-z._][A-Za-z._0-9+-]*/,
Oo=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${Lh.source})(?:\\/(?:${Lh.source}))*)`),
Rm=/(?:[+-]\d{6}|\d{4})/,Js=/(?:0[1-9]|1[0-2])/,mu=/(?:0[1-9]|[12]\d|3[01])/,dS=new RegExp(`(${Rm.source})(?:-(${Js.source}\
)-(${mu.source})|(${Js.source})(${mu.source}))`),Im=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,
Om=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,Cm=new RegExp(`([zZ])|${Om.
source}?`),Qa=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,pS=new RegExp([`^${dS.source}`,`(?:(?:[tT]\
|\\s+)${Im.source}(?:${Cm.source})?)?`,`(?:\\[!?(${Oo.source})\\])?`,`((?:${Qa.source})*)$`].join("")),fS=new RegExp([`^\
[tT]?${Im.source}`,`(?:${Cm.source})?`,`(?:\\[!?${Oo.source}\\])?`,`((?:${Qa.source})*)$`].join("")),hS=new RegExp(`^(${Rm.
source})-?(${Js.source})(?:\\[!?${Oo.source}\\])?((?:${Qa.source})*)$`),mS=new RegExp(`^(?:--)?(${Js.source})-?(${mu.source}\
)(?:\\[!?${Oo.source}\\])?((?:${Qa.source})*)$`),iu=/(\d+)(?:[.,](\d{1,9}))?/,gS=new RegExp(`(?:${iu.source}H)?(?:${iu.source}\
M)?(?:${iu.source}S)?`),yS=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${gS.source}\
)?$`,"i"),Gn=864e5,Zs=1e6*Gn,vS=6e10,Nm=1e8*Gn,ei=zr(Nm),fo=$.default.unaryMinus(ei),bS=$.default.add($.default.subtract(
fo,Kn),po),wS=$.default.subtract($.default.add(ei,Kn),po),TS=146097*Gn,Fh=-271821,Uh=275760,oo=Date.UTC(1847,0,1),kS=["i\
so8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiop\
ic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],SS=new Set(
["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT",
"PNT","PRT","PST","SST","VST"]);function et(e){return typeof e=="object"&&e!==null||typeof e=="function"}function hl(e){
if(typeof e=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(e)}function ml(e){if(typeof e==
"symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(e)}function oe(e){let t=hl(e);if(t===
0)return 0;if(Number.isNaN(t)||t===1/0||t===-1/0)throw new RangeError("invalid number value");let r=Math.trunc(t);return r===
0?0:r}function Bh(e,t){let r=oe(e);if(r<=0)throw t!==void 0?new RangeError(`property '${t}' cannot be a a number less th\
an one`):new RangeError("Cannot convert a number less than one to a positive integer");return r}function Vr(e){let t=hl(
e);if(Number.isNaN(t))throw new RangeError("not a number");if(t===1/0||t===-1/0)throw new RangeError("infinity is out of\
 range");if(!function(r){if(typeof r!="number"||Number.isNaN(r)||r===1/0||r===-1/0)return!1;let n=Math.abs(r);return Math.
floor(n)===n}(t))throw new RangeError(`unsupported fractional value ${e}`);return t===0?0:t}function ho(e,t){return String(
e).padStart(t,"0")}function mt(e){if(typeof e!="string")throw new TypeError(`expected a string, not ${String(e)}`);return e}
function gu(e,t){if(et(e)){let r=e?.toString();if(typeof r=="string"||typeof r=="number")return r;throw new TypeError("C\
annot convert object to primitive value")}return e}var yu=["era","eraYear","year","month","monthCode","day","hour","minu\
te","second","millisecond","microsecond","nanosecond","offset","timeZone"],ES={era:ml,eraYear:oe,year:oe,month:Bh,monthCode:function(e){
let t=mt(gu(e));if(t.length<3||t.length>4||t[0]!=="M"||"0123456789".indexOf(t[1])===-1||"0123456789".indexOf(t[2])===-1||
t[1]+t[2]==="00"&&t[3]!=="L"||t[3]!=="L"&&t[3]!==void 0)throw new RangeError(`bad month code ${t}; must match M01-M99 or\
 M00L-M99L`);return t},day:Bh,hour:oe,minute:oe,second:oe,millisecond:oe,microsecond:oe,nanosecond:oe,offset:function(e){
let t=mt(gu(e));return ci(t),t},timeZone:Zt},xS={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},ti=[
["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],
["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microseco\
nd","time"],["nanoseconds","nanosecond","time"]],Hh=Object.fromEntries(ti.map(e=>[e[0],e[1]])),_S=Object.fromEntries(ti.
map(([e,t])=>[t,e])),so=ti.map(([,e])=>e),ri={day:Zs,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},
Xs=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],AS=Intl.DateTimeFormat,
Wh=new Map;function Pm(e){let t=bo(e),r=Wh.get(t);return r===void 0&&(r=new AS("en-us",{timeZone:t,hour12:!1,era:"short",
year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Wh.set(t,r)),r}function Et(e){
return Qt(e,te)&&!Qt(e,Oe,D)}function Ze(e){return Qt(e,Bt,Ht,Wt,qt,Vt,Yt,zt,Kt,lr)}function Xe(e){return Qt(e,vm)}function nt(e){
return Qt(e,Qe)}function qe(e){return Qt(e,Ye)}function xt(e){return Qt(e,bm)}function vr(e){return Qt(e,wm)}function ve(e){
return Qt(e,te,Oe,D)}function I(e,t){if(!t(e))throw new TypeError("invalid receiver: method called with the wrong type o\
f this-object")}function oi(e){if(Qt(e,D)||Qt(e,Oe))throw new TypeError("with() does not support a calendar or timeZone \
property");if(nt(e))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(e.calendar!==
void 0)throw new TypeError("with() does not support a calendar property");if(e.timeZone!==void 0)throw new TypeError("wi\
th() does not support a timeZone property")}function Co(e,t){return t==="never"||t==="auto"&&e==="iso8601"?"":`[${t==="c\
ritical"?"!":""}u-ca=${e}]`}function gl(e){let t,r,n=!1;for(Qa.lastIndex=0;r=Qa.exec(e);){let{1:a,2:i,3:o}=r;if(i==="u-c\
a"){if(t===void 0)t=o,n=a==="!";else if(a==="!"||n)throw new RangeError(`Invalid annotations in ${e}: more than one u-ca\
 present with critical flag`)}else if(a==="!")throw new RangeError(`Unrecognized annotation: !${i}=${o}`)}return t}function sn(e){
let t=pS.exec(e);if(!t)throw new RangeError(`invalid RFC 9557 string: ${e}`);let r=gl(t[16]),n=t[1];if(n==="-000000")throw new RangeError(
`invalid RFC 9557 string: ${e}`);let a=+n,i=+(t[2]??t[4]??1),o=+(t[3]??t[5]??1),s=t[6]!==void 0,l=+(t[6]??0),c=+(t[7]??t[10]??
0),u=+(t[8]??t[11]??0);u===60&&(u=59);let d=(t[9]??t[12]??"")+"000000000",f=+d.slice(0,3),h=+d.slice(3,6),y=+d.slice(6,9),
b,T=!1;t[13]?(b=void 0,T=!0):t[14]&&(b=t[14]);let S=t[15];return td(a,i,o,l,c,u,f,h,y),{year:a,month:i,day:o,time:s?{hour:l,
minute:c,second:u,millisecond:f,microsecond:h,nanosecond:y}:"start-of-day",tzAnnotation:S,offset:b,z:T,calendar:r}}function Dm(e){
let t=fS.exec(e),r,n,a,i,o,s,l;if(t){l=gl(t[10]),r=+(t[1]??0),n=+(t[2]??t[5]??0),a=+(t[3]??t[6]??0),a===60&&(a=59);let c=(t[4]??
t[7]??"")+"000000000";if(i=+c.slice(0,3),o=+c.slice(3,6),s=+c.slice(6,9),t[8])throw new RangeError("Z designator not sup\
ported for PlainTime")}else{let c,u;if({time:c,z:u,calendar:l}=sn(e),c==="start-of-day")throw new RangeError(`time is mi\
ssing in string: ${e}`);if(u)throw new RangeError("Z designator not supported for PlainTime");({hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s}=c)}if(wl(r,n,a,i,o,s),/[tT ][0-9][0-9]/.test(e))return{hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s,calendar:l};try{let{month:c,day:u}=Zu(e);ba(1972,c,u)}catch{try{let{year:c,month:u}=Ju(
e);ba(c,u,1)}catch{return{hour:r,minute:n,second:a,millisecond:i,microsecond:o,nanosecond:s,calendar:l}}}throw new RangeError(
`invalid RFC 9557 time-only string ${e}; may need a T prefix`)}function Ju(e){let t=hS.exec(e),r,n,a,i;if(t){a=gl(t[3]);
let o=t[1];if(o==="-000000")throw new RangeError(`invalid RFC 9557 string: ${e}`);if(r=+o,n=+t[2],i=1,a!==void 0&&a!=="i\
so8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let o;if({year:r,month:n,calendar:a,
day:i,z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:r,month:n,calendar:a,
referenceISODay:i}}function Zu(e){let t=mS.exec(e),r,n,a,i;if(t){if(a=gl(t[3]),r=+t[1],n=+t[2],a!==void 0&&a!=="iso8601")
throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let o;if({month:r,day:n,calendar:a,year:i,
z:o}=sn(e),o)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:r,day:n,calendar:a,referenceISOYear:i}}
var Mm=new RegExp(`^${Oo.source}$`,"i"),jm=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function Lm(e){
let t=RS.test(e)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${t}: ${e}`)}function zn(e){
return Mm.test(e)||Lm(e),jm.test(e)?{offsetMinutes:ci(e)/6e10}:{tzName:e}}function lo(e,t,r,n){let a=e,i=t,o=r;switch(n){case"\
reject":ba(a,i,o);break;case"constrain":({year:a,month:i,day:o}=tg(a,i,o))}return{year:a,month:i,day:o}}function yl(e,t,r,n,a,i,o){
let s=e,l=t,c=r,u=n,d=a,f=i;switch(o){case"reject":wl(s,l,c,u,d,f);break;case"constrain":s=Gt(s,0,23),l=Gt(l,0,59),c=Gt(
c,0,59),u=Gt(u,0,999),d=Gt(d,0,999),f=Gt(f,0,999)}return{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}
function Fm(e){if(!et(e))throw new TypeError("invalid duration-like");let t={years:void 0,months:void 0,weeks:void 0,days:void 0,
hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0},r=!1;for(let n=0;n<
Xs.length;n++){let a=Xs[n],i=e[a];i!==void 0&&(r=!0,t[a]=Vr(i))}if(!r)throw new TypeError("invalid duration-like");return t}
function Nt({years:e,months:t,weeks:r,days:n},a,i,o){return{years:e,months:o??t,weeks:i??r,days:a??n}}function $e(e,t){return{
isoDate:e,time:t}}function _e(e){return An(e,"overflow",["constrain","reject"],"constrain")}function co(e){return An(e,"\
disambiguation",["compatible","earlier","later","reject"],"compatible")}function Kr(e,t){return An(e,"roundingMode",["ce\
il","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],t)}function Ks(e,t){return An(e,
"offset",["prefer","use","ignore","reject"],t)}function No(e){return An(e,"calendarName",["auto","always","never","criti\
cal"],"auto")}function si(e){let t=e.roundingIncrement;if(t===void 0)return 1;let r=oe(t);if(r<1||r>1e9)throw new RangeError(
`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);return r}function li(e,t,r){let n=r?t:t-1;if(e>n)throw new RangeError(
`roundingIncrement must be at least 1 and less than ${n}, not ${e}`);if(t%e!=0)throw new RangeError(`Rounding increment \
must divide evenly into ${t}`)}function Po(e){let t=e.fractionalSecondDigits;if(t===void 0)return"auto";if(typeof t!="nu\
mber"){if(ml(t)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return"a\
uto"}let r=Math.floor(t);if(!Number.isFinite(r)||r<0||r>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or\
 0 through 9, not ${t}`);return r}function Do(e,t){switch(e){case"minute":return{precision:"minute",unit:"minute",increment:1};case"\
second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"\
microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}
switch(t){case"auto":return{precision:t,unit:"nanosecond",increment:1};case 0:return{precision:t,unit:"second",increment:1};case 1:case 2:case 3:
return{precision:t,unit:"millisecond",increment:10**(3-t)};case 4:case 5:case 6:return{precision:t,unit:"microsecond",increment:10**
(6-t)};case 7:case 8:case 9:return{precision:t,unit:"nanosecond",increment:10**(9-t)};default:throw new RangeError(`frac\
tionalSecondDigits must be 'auto' or 0 through 9, not ${t}`)}}var Rn=Symbol("~required~");function ur(e,t,r,n,a=[]){let i=[];
for(let c=0;c<ti.length;c++){let u=ti[c],d=u[1],f=u[2];r!=="datetime"&&r!==f||i.push(d)}i=i.concat(a);let o=n;o===Rn?o=void 0:
o!==void 0&&i.push(o);let s=[];s=s.concat(i);for(let c=0;c<i.length;c++){let u=i[c],d=_S[u];d!==void 0&&s.push(d)}let l=An(
e,t,s,o);if(l===void 0&&n===Rn)throw new RangeError(`${t} is required`);return l&&l in Hh?Hh[l]:l}function ou(e){let t=e.
relativeTo;if(t===void 0)return{};let r,n,a,i,o,s="option",l=!1;if(et(t)){if(ve(t))return{zonedRelativeTo:t};if(Xe(t))return{
plainRelativeTo:t};if(qe(t))return{plainRelativeTo:Jt(g(t,Ye).isoDate,g(t,D))};a=Uo(t);let c=Sr(a,t,["year","month","mon\
thCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:r,time:n}=
jo(a,c,"constrain")),{offset:o,timeZone:i}=c,o===void 0&&(s="wall")}else{let c,u,d,f,h;if({year:d,month:f,day:h,time:n,calendar:a,
tzAnnotation:c,offset:o,z:u}=sn(mt(t)),c)i=Zt(c),u?s="exact":o||(s="wall"),l=!0;else if(u)throw new RangeError("Z design\
ator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");a||(a="iso8601"),a=er(a),
r={year:d,month:f,day:h}}return i===void 0?{plainRelativeTo:Jt(r,a)}:{zonedRelativeTo:Ct(Qs(r,n,s,s==="option"?ci(o):0,i,
"compatible","reject",l),i,a)}}function Tn(e){return g(e,Bt)!==0?"year":g(e,Ht)!==0?"month":g(e,sr)!==0?"week":g(e,Wt)!==
0?"day":g(e,qt)!==0?"hour":g(e,Vt)!==0?"minute":g(e,Yt)!==0?"second":g(e,zt)!==0?"millisecond":g(e,Kt)!==0?"microsecond":
"nanosecond"}function xn(e,t){return so.indexOf(e)>so.indexOf(t)?t:e}function Qr(e){return e==="year"||e==="month"||e===
"week"}function kn(e){return Qr(e)||e==="day"?"date":"time"}function Xn(e){return At("%calendarImpl%")(e)}function Mo(e){
return At("%calendarImpl%")(g(e,D))}function Xt(e,t,r="date"){let n=Object.create(null),a=Xn(e).isoToDate(t,{year:!0,monthCode:!0,
day:!0});return n.monthCode=a.monthCode,r!=="month-day"&&r!=="date"||(n.day=a.day),r!=="year-month"&&r!=="date"||(n.year=
a.year),n}function Sr(e,t,r,n,a){let i=Xn(e).extraFields(r),o=r.concat(n,i),s=Object.create(null),l=!1;o.sort();for(let c=0;c<
o.length;c++){let u=o[c],d=t[u];if(d!==void 0)l=!0,s[u]=(0,ES[u])(d);else if(a!=="partial"){if(a.includes(u))throw new TypeError(
`required property '${u}' missing or undefined`);s[u]=xS[u]}}if(a==="partial"&&!l)throw new TypeError("no supported prop\
erties found");return s}function vu(e,t="complete"){let r=["hour","microsecond","millisecond","minute","nanosecond","sec\
ond"],n=!1,a=Object.create(null);for(let i=0;i<r.length;i++){let o=r[i],s=e[o];s!==void 0?(a[o]=oe(s),n=!0):t==="complet\
e"&&(a[o]=0)}if(!n)throw new TypeError("invalid time-like");return a}function Qi(e,t){if(et(e)){if(Xe(e))return _e(z(t)),
Jt(g(e,re),g(e,D));if(ve(e)){let l=Mr(g(e,Oe),g(e,te));return _e(z(t)),Jt(l.isoDate,g(e,D))}if(qe(e))return _e(z(t)),Jt(
g(e,Ye).isoDate,g(e,D));let s=Uo(e);return Jt(Jn(s,Sr(s,e,["year","month","monthCode","day"],[],[]),_e(z(t))),s)}let{year:r,
month:n,day:a,calendar:i,z:o}=sn(mt(e));if(o)throw new RangeError("Z designator not supported for PlainDate");return i||
(i="iso8601"),i=er(i),_e(z(t)),Jt({year:r,month:n,day:a},i)}function jo(e,t,r){return $e(Jn(e,t,r),yl(t.hour,t.minute,t.
second,t.millisecond,t.microsecond,t.nanosecond,r))}function eo(e,t){let r,n,a;if(et(e)){if(qe(e))return _e(z(t)),Nr(g(e,
Ye),g(e,D));if(ve(e)){let s=Mr(g(e,Oe),g(e,te));return _e(z(t)),Nr(s,g(e,D))}if(Xe(e))return _e(z(t)),Nr($e(g(e,re),{deltaDays:0,
hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),g(e,D));a=Uo(e);let i=Sr(a,e,["year","month","monthC\
ode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),o=_e(z(t));({isoDate:r,time:n}=jo(a,
i,o))}else{let i,o,s,l;if({year:o,month:s,day:l,time:n,calendar:a,z:i}=sn(mt(e)),i)throw new RangeError("Z designator no\
t supported for PlainDateTime");n==="start-of-day"&&(n={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0}),td(o,s,l,n.hour,n.minute,n.second,n.millisecond,n.microsecond,n.nanosecond),a||(a="iso8601"),a=er(a),_e(z(
t)),r={year:o,month:s,day:l}}return Nr($e(r,n),a)}function Dr(e){let t=At("%Temporal.Duration%");if(Ze(e))return new t(g(
e,Bt),g(e,Ht),g(e,sr),g(e,Wt),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr));if(!et(e))return function(a){let{years:i,
months:o,weeks:s,days:l,hours:c,minutes:u,seconds:d,milliseconds:f,microseconds:h,nanoseconds:y}=function(b){let T=yS.exec(
b);if(!T)throw new RangeError(`invalid duration: ${b}`);if(T.every((Rr,ir)=>ir<2||Rr===void 0))throw new RangeError(`inv\
alid duration: ${b}`);let S=T[1]==="-"?-1:1,E=T[2]===void 0?0:oe(T[2])*S,_=T[3]===void 0?0:oe(T[3])*S,O=T[4]===void 0?0:
oe(T[4])*S,M=T[5]===void 0?0:oe(T[5])*S,W=T[6]===void 0?0:oe(T[6])*S,K=T[7],Z=T[8],H=T[9],we=T[10],G=T[11],ae=0,Ie=0,ge=0;
if(K!==void 0){if(Z??H??we??G)throw new RangeError("only the smallest unit can be fractional");ge=3600*oe((K+"000000000").
slice(0,9))*S}else if(ae=Z===void 0?0:oe(Z)*S,H!==void 0){if(we??G)throw new RangeError("only the smallest unit can be f\
ractional");ge=60*oe((H+"000000000").slice(0,9))*S}else Ie=we===void 0?0:oe(we)*S,G!==void 0&&(ge=oe((G+"000000000").slice(
0,9))*S);let pe=ge%1e3,it=Math.trunc(ge/1e3)%1e3,st=Math.trunc(ge/1e6)%1e3;return Ie+=Math.trunc(ge/1e9)%60,ae+=Math.trunc(
ge/6e10),Tl(E,_,O,M,W,ae,Ie,st,it,pe),{years:E,months:_,weeks:O,days:M,hours:W,minutes:ae,seconds:Ie,milliseconds:st,microseconds:it,
nanoseconds:pe}}(a);return new(At("%Temporal.Duration%"))(i,o,s,l,c,u,d,f,h,y)}(mt(e));let r={years:0,months:0,weeks:0,days:0,
hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0},n=Fm(e);for(let a=0;a<Xs.length;a++){let i=Xs[a],
o=n[i];o!==void 0&&(r[i]=o)}return new t(r.years,r.months,r.weeks,r.days,r.hours,r.minutes,r.seconds,r.milliseconds,r.microseconds,
r.nanoseconds)}function to(e){let t;if(et(e)){if(Et(e)||ve(e))return Yr(g(e,te));t=gu(e)}else t=e;let{year:r,month:n,day:a,
time:i,offset:o,z:s}=function(b){let T=sn(b);if(!T.z&&!T.offset)throw new RangeError("Temporal.Instant requires a time z\
one offset");return T}(mt(t)),{hour:l=0,minute:c=0,second:u=0,millisecond:d=0,microsecond:f=0,nanosecond:h=0}=i==="start\
-of-day"?{}:i,y=vo(r,n,a,l,c,u,d,f,h-(s?0:ci(o)));return Xa(y.isoDate),Yr(_t(y))}function qh(e,t){if(et(e)){if(vr(e))return _e(
z(t)),Ja(g(e,re),g(e,D));let s;return Qt(e,D)?s=g(e,D):(s=e.calendar,s===void 0&&(s="iso8601"),s=Fo(s)),Ja(el(s,Sr(s,e,[
"year","month","monthCode","day"],[],[]),_e(z(t))),s)}let{month:r,day:n,referenceISOYear:a,calendar:i}=Zu(mt(e));if(i===
void 0&&(i="iso8601"),i=er(i),_e(z(t)),i==="iso8601")return Ja({year:1972,month:r,day:n},i);let o={year:a,month:r,day:n};
return _a(o),o=el(i,Xt(i,o,"month-day"),"constrain"),Ja(o,i)}function Vn(e,t){let r;if(et(e)){if(nt(e))return _e(z(t)),Sn(
g(e,Qe));if(qe(e))return _e(z(t)),Sn(g(e,Ye).time);if(ve(e)){let c=Mr(g(e,Oe),g(e,te));return _e(z(t)),Sn(c.time)}let{hour:n,
minute:a,second:i,millisecond:o,microsecond:s,nanosecond:l}=vu(e);r=yl(n,a,i,o,s,l,_e(z(t)))}else r=Dm(mt(e)),_e(z(t));return Sn(
r)}function Um(e){return e===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:g(Vn(
e),Qe)}function ro(e,t){if(et(e)){if(xt(e))return _e(z(t)),Za(g(e,re),g(e,D));let s=Uo(e);return Za(mo(s,Sr(s,e,["year",
"month","monthCode"],[],[]),_e(z(t))),s)}let{year:r,month:n,referenceISODay:a,calendar:i}=Ju(mt(e));i===void 0&&(i="iso8\
601"),i=er(i),_e(z(t));let o={year:r,month:n,day:a};return rd(o),o=mo(i,Xt(i,o,"year-month"),"constrain"),Za(o,i)}function Qs(e,t,r,n,a,i,o,s){
if(t==="start-of-day")return Wn(a,e);let l=$e(e,t);if(r==="wall"||o==="ignore")return Pt(a,l,i);if(r==="exact"||o==="use"){
let d=vo(e.year,e.month,e.day,t.hour,t.minute,t.second,t.millisecond,t.microsecond,t.nanosecond-n);Xa(d.isoDate);let f=_t(
d);return an(f),f}Xa(e);let c=_t(l),u=go(a,l);for(let d=0;d<u.length;d++){let f=u[d],h=$.default.toNumber($.default.subtract(
c,f)),y=Yn(h,6e10,"halfExpand");if(h===n||s&&y===n)return f}if(o==="reject"){let d=bu(n),f=yo(l,"iso8601","auto");throw new RangeError(
`Offset ${d} is invalid for ${f} in ${a}`)}return Gm(u,a,l,i)}function no(e,t){let r,n,a,i,o,s,l,c=!1,u="option";if(et(e)){
if(ve(e)){let b=z(t);return co(b),Ks(b,"reject"),_e(b),Ct(g(e,te),g(e,Oe),g(e,D))}o=Uo(e);let f=Sr(o,e,["year","month","\
monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);
({offset:i,timeZone:a}=f),i===void 0&&(u="wall");let h=z(t);s=co(h),l=Ks(h,"reject");let y=_e(h);({isoDate:r,time:n}=jo(
o,f,y))}else{let f,h,y,b,T;({year:y,month:b,day:T,time:n,tzAnnotation:f,offset:i,z:h,calendar:o}=function(E){let _=sn(E);
if(!_.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return _}(mt(e))),
a=Zt(f),h?u="exact":i||(u="wall"),o||(o="iso8601"),o=er(o),c=!0;let S=z(t);s=co(S),l=Ks(S,"reject"),_e(S),r={year:y,month:b,
day:T}}let d=0;return u==="option"&&(d=ci(i)),Ct(Qs(r,n,u,d,a,s,l,c),a,o)}function Bm(e,t,r){_a(t),On(e),fe(e,re,t),fe(e,
D,r),fe(e,vm,!0)}function Jt(e,t){let r=At("%Temporal.PlainDate%"),n=Object.create(r.prototype);return Bm(n,e,t),n}function Hm(e,t,r){
wa(t),On(e),fe(e,Ye,t),fe(e,D,r)}function Nr(e,t){let r=At("%Temporal.PlainDateTime%"),n=Object.create(r.prototype);return Hm(
n,e,t),n}function Wm(e,t,r){_a(t),On(e),fe(e,re,t),fe(e,D,r),fe(e,wm,!0)}function Ja(e,t){let r=At("%Temporal.PlainMonth\
Day%"),n=Object.create(r.prototype);return Wm(n,e,t),n}function qm(e,t){On(e),fe(e,Qe,t)}function Sn(e){let t=At("%Tempo\
ral.PlainTime%"),r=Object.create(t.prototype);return qm(r,e),r}function Vm(e,t,r){rd(t),On(e),fe(e,re,t),fe(e,D,r),fe(e,
bm,!0)}function Za(e,t){let r=At("%Temporal.PlainYearMonth%"),n=Object.create(r.prototype);return Vm(n,e,t),n}function Ym(e,t){
an(t),On(e),fe(e,te,t)}function Yr(e){let t=At("%Temporal.Instant%"),r=Object.create(t.prototype);return Ym(r,e),r}function zm(e,t,r,n){
an(t),On(e),fe(e,te,t),fe(e,Oe,r),fe(e,D,n)}function Ct(e,t,r="iso8601"){let n=At("%Temporal.ZonedDateTime%"),a=Object.create(
n.prototype);return zm(a,e,t,r),a}function Vh(e){return yu.filter(t=>e[t]!==void 0)}function va(e,t,r){let n=Vh(r),a=Xn(
e).fieldKeysToIgnore(n),i=Object.create(null),o=Vh(t);for(let s=0;s<yu.length;s++){let l,c=yu[s];o.includes(c)&&!a.includes(
c)&&(l=t[c]),n.includes(c)&&(l=r[c]),l!==void 0&&(i[c]=l)}return i}function Tr(e,t,r,n){let a=Xn(e).dateAdd(t,r,n);return _a(
a),a}function Lo(e,t,r,n){return Xn(e).dateUntil(t,r,n)}function Fo(e){if(et(e)&&Qt(e,D))return g(e,D);let t=mt(e);try{return er(
t)}catch{}let r;try{({calendar:r}=sn(t))}catch{try{({calendar:r}=Dm(t))}catch{try{({calendar:r}=Ju(t))}catch{({calendar:r}=
Zu(t))}}}return r||(r="iso8601"),er(r)}function Uo(e){if(Qt(e,D))return g(e,D);let{calendar:t}=e;return t===void 0?"iso8\
601":Fo(t)}function nn(e,t){return er(e)===er(t)}function Jn(e,t,r){let n=Xn(e);n.resolveFields(t,"date");let a=n.dateToISO(
t,r);return _a(a),a}function mo(e,t,r){let n=Xn(e);n.resolveFields(t,"year-month"),t.day=1;let a=n.dateToISO(t,r);return rd(
a),a}function el(e,t,r){let n=Xn(e);n.resolveFields(t,"month-day");let a=n.monthDayToISOReferenceDate(t,r);return _a(a),
a}function Zt(e){if(et(e)&&ve(e))return g(e,Oe);let t=mt(e);if(t==="UTC")return"UTC";let{tzName:r,offsetMinutes:n}=function(i){
let{tzAnnotation:o,offset:s,z:l}=function(c){if(Mm.test(c))return{tzAnnotation:c,offset:void 0,z:!1};try{let{tzAnnotation:u,
offset:d,z:f}=sn(c);if(f||u||d)return{tzAnnotation:u,offset:d,z:f}}catch{}Lm(c)}(i);return o?zn(o):l?zn("UTC"):s?zn(s):void 0}(
t);if(n!==void 0)return Xu(n);let a=tl(r);if(!a)throw new RangeError(`Unrecognized time zone ${r}`);return a.identifier}
function Km(e,t){if(e===t)return!0;let r=zn(e).offsetMinutes,n=zn(t).offsetMinutes;if(r===void 0&&n===void 0){let a=tl(t);
if(!a)return!1;let i=tl(e);return!!i&&i.primaryIdentifier===a.primaryIdentifier}return r===n}function En(e,t){let r=zn(e).
offsetMinutes;return r!==void 0?6e10*r:wu(e,t)}function bu(e){let t=e<0?"-":"+",r=Math.abs(e),n=Math.floor(r/36e11),a=Math.
floor(r/6e10)%60,i=Math.floor(r/1e9)%60,o=r%1e9;return`${t}${vl(n,a,i,o,i===0&&o===0?"minute":"auto")}`}function Mr(e,t){
let r=En(e,t),{isoDate:{year:n,month:a,day:i},time:{hour:o,minute:s,second:l,millisecond:c,microsecond:u,nanosecond:d}}=Xm(
t);return vo(n,a,i,o,s,l,c,u,d+r)}function Pt(e,t,r){return Gm(go(e,t),e,t,r)}function Gm(e,t,r,n){let a=e.length;if(a===
1)return e[0];if(a)switch(n){case"compatible":case"earlier":return e[0];case"later":return e[a-1];case"reject":throw new RangeError(
"multiple instants found")}if(n==="reject")throw new RangeError("multiple instants found");let i=_t(r),o=$.default.subtract(
i,Kn);an(o);let s=En(t,o),l=$.default.add(i,Kn);an(l);let c=En(t,l)-s;switch(n){case"earlier":{let u=Fe.fromComponents(0,
0,0,0,0,-c),d=ni(r.time,u);return go(t,$e(dr(r.isoDate.year,r.isoDate.month,r.isoDate.day+d.deltaDays),d))[0]}case"compa\
tible":case"later":{let u=Fe.fromComponents(0,0,0,0,0,c),d=ni(r.time,u),f=go(t,$e(dr(r.isoDate.year,r.isoDate.month,r.isoDate.
day+d.deltaDays),d));return f[f.length-1]}}}function go(e,t){if(e==="UTC")return Xa(t.isoDate),[_t(t)];let r=zn(e).offsetMinutes;
if(r!==void 0){let n=vo(t.isoDate.year,t.isoDate.month,t.isoDate.day,t.time.hour,t.time.minute-r,t.time.second,t.time.millisecond,
t.time.microsecond,t.time.nanosecond);Xa(n.isoDate);let a=_t(n);return an(a),[a]}return Xa(t.isoDate),function(n,a){let i=_t(
a),o=$.default.subtract(i,Kn);$.default.lessThan(o,fo)&&(o=i);let s=$.default.add(i,Kn);$.default.greaterThan(s,ei)&&(s=
i);let l=wu(n,o),c=wu(n,s);return(l===c?[l]:[l,c]).map(d=>{let f=$.default.subtract(i,$.default.BigInt(d)),h=function(y,b){
let{epochMilliseconds:T,time:{millisecond:S,microsecond:E,nanosecond:_}}=Xm(b),{year:O,month:M,day:W,hour:K,minute:Z,second:H}=Qm(
y,T);return vo(O,M,W,K,Z,H,S,E,_)}(n,f);if(ai(a,h)===0)return an(f),f}).filter(d=>d!==void 0)}(e,t)}function Wn(e,t){let r=$e(
t,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),n=go(e,r);if(n.length)return n[0];let a=_t(
r),i=$.default.subtract(a,Kn);return an(i),ed(e,i)}function Bo(e){let t;return t=e<0||e>9999?(e<0?"-":"+")+ho(Math.abs(e),
6):ho(e,4),t}function kr(e){return ho(e,2)}function Jm(e,t){let r;if(t==="auto"){if(e===0)return"";r=ho(e,9).replace(/0+$/,
"")}else{if(t===0)return"";r=ho(e,9).slice(0,t)}return`.${r}`}function vl(e,t,r,n,a){let i=`${kr(e)}:${kr(t)}`;return a===
"minute"||(i+=`:${kr(r)}`,i+=Jm(n,a)),i}function Yh(e,t,r){let n=t;n===void 0&&(n="UTC");let a=g(e,te),i=yo(Mr(n,a),"iso\
8601",r,"never"),o="Z";return t!==void 0&&(o=Zm(En(n,a))),`${i}${o}`}function zs(e,t){let r=g(e,Bt),n=g(e,Ht),a=g(e,sr),
i=g(e,Wt),o=g(e,qt),s=g(e,Vt),l=nl(e),c="";r!==0&&(c+=`${Math.abs(r)}Y`),n!==0&&(c+=`${Math.abs(n)}M`),a!==0&&(c+=`${Math.
abs(a)}W`),i!==0&&(c+=`${Math.abs(i)}D`);let u="";o!==0&&(u+=`${Math.abs(o)}H`),s!==0&&(u+=`${Math.abs(s)}M`);let d=Fe.fromComponents(
0,0,g(e,Yt),g(e,zt),g(e,Kt),g(e,lr));d.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(Tn(e))&&t===
"auto"||(u+=`${Math.abs(d.sec)}${Jm(Math.abs(d.subsec),t)}S`);let f=`${l<0?"-":""}P${c}`;return u&&(f=`${f}T${u}`),f}function zh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,re);return`${Bo(r)}-${kr(n)}-${kr(a)}${Co(g(e,D),t)}`}function Kh({hour:e,minute:t,
second:r,millisecond:n,microsecond:a,nanosecond:i},o){return vl(e,t,r,1e6*n+1e3*a+i,o)}function yo(e,t,r,n="auto"){let{isoDate:{
year:a,month:i,day:o},time:{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}=e;return`${Bo(a)}-${kr(i)}\
-${kr(o)}T${vl(s,l,c,1e6*u+1e3*d+f,r)}${Co(t,n)}`}function Gh(e,t="auto"){let{year:r,month:n,day:a}=g(e,re),i=`${kr(n)}-${kr(
a)}`,o=g(e,D);t!=="always"&&t!=="critical"&&o==="iso8601"||(i=`${Bo(r)}-${i}`);let s=Co(o,t);return s&&(i+=s),i}function Jh(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,re),i=`${Bo(r)}-${kr(n)}`,o=g(e,D);t!=="always"&&t!=="critical"&&o==="iso8601"||(i+=
`-${kr(a)}`);let s=Co(o,t);return s&&(i+=s),i}function Zh(e,t,r="auto",n="auto",a="auto",i=void 0){let o=g(e,te);if(i){let{
unit:u,increment:d,roundingMode:f}=i;o=Eu(o,d,u,f)}let s=g(e,Oe),l=En(s,o),c=yo(Mr(s,o),"iso8601",t,"never");return a!==
"never"&&(c+=Zm(l)),n!=="never"&&(c+=`[${n==="critical"?"!":""}${s}]`),c+=Co(g(e,D),r),c}function Xh(e){return jm.test(e)}
function ci(e){let t=IS.exec(e);if(!t)throw new RangeError(`invalid time zone offset: ${e}; must match \xB1HH:MM[:SS.SSSSSS\
SSS]`);return(t[1]==="-"?-1:1)*(1e9*(60*(60*+t[2]+ +(t[3]||0))+ +(t[4]||0))+ +((t[5]||0)+"000000000").slice(0,9))}var Ki,
$S=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function tl(e){if(Ki===void 0){let i=Intl.supportedValuesOf?.(
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
let{year:r,month:n,day:a,hour:i,minute:o,second:s}=Qm(e,t),l=t%1e3;return l<0&&(l+=1e3),1e6*(Qu({isoDate:{year:r,month:n,
day:a},time:{hour:i,minute:o,second:s,millisecond:l}})-t)}function wu(e,t){return ga(e,jr(t,"floor"))}function Xu(e){let t=e<
0?"-":"+",r=Math.abs(e);return`${t}${vl(Math.floor(r/60),r%60,0,0,"minute")}`}function Zm(e){return Xu(Yn(e,vS,"halfExpa\
nd")/6e10)}function Qu({isoDate:{year:e,month:t,day:r},time:{hour:n,minute:a,second:i,millisecond:o}}){let s=e%400,l=(e-
s)/400,c=new Date;return c.setUTCHours(n,a,i,o),c.setUTCFullYear(s,t-1,r),c.getTime()+TS*l}function _t(e){let t=Qu(e),r=1e3*
e.time.microsecond+e.time.nanosecond;return $.default.add(zr(t),$.default.BigInt(r))}function Xm(e){let t=jr(e,"trunc"),
r=$.default.toNumber($.default.remainder(e,Io));r<0&&(r+=1e6,t-=1);let n=Math.floor(r/1e3)%1e3,a=r%1e3,i=new Date(t);return{
epochMilliseconds:t,isoDate:{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate()},time:{hour:i.getUTCHours(),
minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds(),microsecond:n,nanosecond:a}}}function ed(e,t){
if(e==="UTC")return null;let r=jr(t,"floor");if(r<oo)return ed(e,zr(oo));let n=Date.now(),a=Math.max(r,n)+366*Gn*3,i=r,o=ga(
e,i),s=i,l=o;for(;o===l&&i<a;){if(s=i+2*Gn*7,s>Nm)return null;l=ga(e,s),o===l&&(i=s)}return o===l?null:zr(cg(c=>ga(e,c),
i,s,o,l))}function Tu(e,t){if(e==="UTC")return null;let r=jr(t,"ceil"),n=Date.now(),a=n+366*Gn*3;if(r>a){let c=Tu(e,zr(a));
if(c===null||$.default.lessThan(c,zr(n)))return c}if(e==="Africa/Casablanca"||e==="Africa/El_Aaiun"){let c=Date.UTC(2088,
0,1);if(c<r)return Tu(e,zr(c))}let i=r-1;if(i<oo)return null;let o=ga(e,i),s=i,l=o;for(;o===l&&i>oo;){if(s=i-2*Gn*7,s<oo)
return null;l=ga(e,s),o===l&&(i=s)}return o===l?null:zr(cg(c=>ga(e,c),s,i,l,o))}function Qm(e,t){return function(r){let n=r.
split(/[^\w]+/);if(n.length!==7)throw new RangeError(`expected 7 parts in "${r}`);let a=+n[0],i=+n[1],o=+n[2],s=n[3];if(s[0]===
"b"||s[0]==="B")o=1-o;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${r}`);let l=n[4]==="24"?
0:+n[4],c=+n[5],u=+n[6];if(!(Number.isFinite(o)&&Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(l)&&Number.isFinite(
c)&&Number.isFinite(u)))throw new RangeError(`Invalid number in "${r}`);return{year:o,month:a,day:i,hour:l,minute:c,second:u}}(
Pm(e).format(t))}function rl(e){return e!==void 0&&!(e%4!=0||e%100==0&&e%400!=0)}function ya(e,t){return{standard:[31,28,
31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[rl(e)?"leapyear":"standard"][t-1]}function nl(e){
let t=[g(e,Bt),g(e,Ht),g(e,sr),g(e,Wt),g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr)];for(let r=0;r<t.length;r++){let n=t[r];
if(n!==0)return n<0?-1:1}return 0}function bl(e){let t=["years","months","weeks","days"];for(let r=0;r<t.length;r++){let n=e[t[r]];
if(n!==0)return n<0?-1:1}return 0}function eg(e){let t=bl(e.date);return t!==0?t:e.time.sign()}function ma(e,t){let r=e,
n=t;if(!Number.isFinite(r)||!Number.isFinite(n))throw new RangeError("infinity is out of range");return n-=1,r+=Math.floor(
n/12),n%=12,n<0&&(n+=12),n+=1,{year:r,month:n}}function dr(e,t,r){let n=e,a=t,i=r;if(!Number.isFinite(i))throw new RangeError(
"infinity is out of range");({year:n,month:a}=ma(n,a));let o=146097;if(Math.abs(i)>o){let c=Math.trunc(i/o);n+=400*c,i-=
c*o}let s=0,l=a>2?n:n-1;for(;s=rl(l)?366:365,i<-s;)n-=1,l-=1,i+=s;for(l+=1;s=rl(l)?366:365,i>s;)n+=1,l+=1,i-=s;for(;i<1;)
({year:n,month:a}=ma(n,a-1)),i+=ya(n,a);for(;i>ya(n,a);)i-=ya(n,a),{year:n,month:a}=ma(n,a+1);return{year:n,month:a,day:i}}
function vo(e,t,r,n,a,i,o,s,l){let c=qn(n,a,i,o,s,l);return $e(dr(e,t,r+c.deltaDays),c)}function qn(e,t,r,n,a,i){let o,s=e,
l=t,c=r,u=n,d=a,f=i;({div:o,mod:f}=Ga(f,3)),d+=o,f<0&&(d-=1,f+=1e3),{div:o,mod:d}=Ga(d,3),u+=o,d<0&&(u-=1,d+=1e3),c+=Math.
trunc(u/1e3),u%=1e3,u<0&&(c-=1,u+=1e3),l+=Math.trunc(c/60),c%=60,c<0&&(l-=1,c+=60),s+=Math.trunc(l/60),l%=60,l<0&&(s-=1,
l+=60);let h=Math.trunc(s/24);return s%=24,s<0&&(h-=1,s+=24),h+=0,s+=0,l+=0,c+=0,u+=0,d+=0,f+=0,{deltaDays:h,hour:s,minute:l,
second:c,millisecond:u,microsecond:d,nanosecond:f}}function Qh(e,t){let r=Nt(e,0);if(bl(r)===0)return e.days;let n=g(t,re),
a=Tr(g(t,D),n,r,"constrain"),i=Ta(n.year,n.month-1,n.day),o=Ta(a.year,a.month-1,a.day)-i;return e.days+o}function pr(e){
return new(At("%Temporal.Duration%"))(-g(e,Bt),-g(e,Ht),-g(e,sr),-g(e,Wt),-g(e,qt),-g(e,Vt),-g(e,Yt),-g(e,zt),-g(e,Kt),-g(
e,lr))}function Gt(e,t,r){return Math.min(r,Math.max(t,e))}function tg(e,t,r){let n=Gt(t,1,12);return{year:e,month:n,day:Gt(
r,1,ya(e,n))}}function Tt(e,t,r){if(e<t||e>r)throw new RangeError(`value out of range: ${t} <= ${e} <= ${r}`)}function ba(e,t,r){
Tt(t,1,12),Tt(r,1,ya(e,t))}function _a(e){wa($e(e,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}
function wl(e,t,r,n,a,i){Tt(e,0,23),Tt(t,0,59),Tt(r,0,59),Tt(n,0,999),Tt(a,0,999),Tt(i,0,999)}function td(e,t,r,n,a,i,o,s,l){
ba(e,t,r),wl(n,a,i,o,s,l)}function wa(e){let t=_t(e);($.default.lessThan(t,bS)||$.default.greaterThan(t,wS))&&an(t)}function ku(e){
_t(e)}function an(e){if($.default.lessThan(e,fo)||$.default.greaterThan(e,ei))throw new RangeError("date/time value is o\
utside of supported range")}function rd({year:e,month:t}){Tt(e,Fh,Uh),e===Fh?Tt(t,4,12):e===Uh&&Tt(t,1,9)}function Tl(e,t,r,n,a,i,o,s,l,c){
let u=0,d=[e,t,r,n,a,i,o,s,l,c];for(let S=0;S<d.length;S++){let E=d[S];if(E===1/0||E===-1/0)throw new RangeError("infini\
te values not allowed as duration fields");if(E!==0){let _=E<0?-1:1;if(u!==0&&_!==u)throw new RangeError("mixed-sign val\
ues not allowed as duration fields");u=_}}if(Math.abs(e)>=2**32||Math.abs(t)>=2**32||Math.abs(r)>=2**32)throw new RangeError(
"years, months, and weeks must be < 2\xB3\xB2");let f=Ga(s,3),h=Ga(l,6),y=Ga(c,9),b=Ga(1e6*f.mod+1e3*h.mod+y.mod,9).div,
T=86400*n+3600*a+60*i+o+f.div+h.div+y.div+b;if(!Number.isSafeInteger(T))throw new RangeError("total of duration time uni\
ts cannot exceed 9007199254740991.999999999 s")}function Ka(e){return{date:{years:g(e,Bt),months:g(e,Ht),weeks:g(e,sr),days:g(
e,Wt)},time:Fe.fromComponents(g(e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr))}}function tn(e){let t=Fe.fromComponents(g(
e,qt),g(e,Vt),g(e,Yt),g(e,zt),g(e,Kt),g(e,lr)).add24HourDays(g(e,Wt));return{date:{years:g(e,Bt),months:g(e,Ht),weeks:g(
e,sr),days:0},time:t}}function rg(e){let t=tn(e),r=Math.trunc(t.time.sec/86400);return Tl(t.date.years,t.date.months,t.date.
weeks,r,0,0,0,0,0,0),{...t.date,days:r}}function Pr(e,t){let r=e.time.sign(),n=e.time.abs().subsec,a=0,i=0,o=e.time.abs().
sec,s=0,l=0,c=0;switch(t){case"year":case"month":case"week":case"day":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=
1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(s/60),s%=60,c=Math.trunc(l/24),l%=24;break;case"ho\
ur":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(
s/60),s%=60;break;case"minute":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.
trunc(o/60),o%=60;break;case"second":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3;break;case"\
millisecond":a=Math.trunc(n/1e3),n%=1e3,i=au(o,3,Math.trunc(a/1e3)),a%=1e3,o=0;break;case"microsecond":a=au(o,6,Math.trunc(
n/1e3)),n%=1e3,o=0;break;case"nanosecond":n=au(o,9,n),o=0}return new(At("%Temporal.Duration%"))(e.date.years,e.date.months,
e.date.weeks,e.date.days+r*c,r*l,r*s,r*o,r*i,r*a,r*n)}function _n(e,t){return bl(e),t.sign(),{date:e,time:t}}function Ta(e,t,r){
return Qu({isoDate:{year:e,month:t+1,day:r},time:{hour:0,minute:0,second:0,millisecond:0}})/Gn}function Xa({year:e,month:t,
day:r}){if(Math.abs(Ta(e,t-1,r))>1e8)throw new RangeError("date/time value is outside the supported range")}function nd(e,t){
let r=t.hour-e.hour,n=t.minute-e.minute,a=t.second-e.second,i=t.millisecond-e.millisecond,o=t.microsecond-e.microsecond,
s=t.nanosecond-e.nanosecond;return Fe.fromComponents(r,n,a,i,o,s)}function ad(e,t,r,n,a){let i=Fe.fromEpochNsDiff(t,e);return i=
al(i,r,n,a),_n({years:0,months:0,weeks:0,days:0},i)}function ng(e,t,r,n){ku(e),ku(t);let a=nd(e.time,t.time),i=a.sign(),
o=on(e.isoDate,t.isoDate),s=t.isoDate;o===i&&(s=dr(s.year,s.month,s.day+i),a=a.add24HourDays(-i));let l=xn("day",n),c=Lo(
r,e.isoDate,s,l);return n!==l&&(a=a.add24HourDays(c.days),c.days=0),_n(c,a)}function ag(e,t,r,n,a){let i=$.default.subtract(
t,e);if($.default.equal(i,br))return{date:{years:0,months:0,weeks:0,days:0},time:Fe.ZERO};let o=$.default.lessThan(i,br)?
-1:1,s=Mr(r,e),l=Mr(r,t),c,u=0,d=o===1?2:1,f=nd(s.time,l.time);for(f.sign()===-o&&u++;u<=d;u++){c=$e(dr(l.isoDate.year,l.
isoDate.month,l.isoDate.day-u*o),s.time);let y=Pt(r,c,"compatible");if(f=Fe.fromEpochNsDiff(t,y),f.sign()!==-o)break}let h=xn(
"day",a);return _n(Lo(n,s.isoDate,c.isoDate,h),f)}function ig(e,t,r,n,a,i,o,s,l){let c,u,d,f,h=t;switch(s){case"year":{let ae=Yn(
h.date.years,o,"trunc");c=ae,u=ae+o*e,d={years:c,months:0,weeks:0,days:0},f={...d,years:u};break}case"month":{let ae=Yn(
h.date.months,o,"trunc");c=ae,u=ae+o*e,d=Nt(h.date,0,0,c),f=Nt(h.date,0,0,u);break}case"week":{let ae=Nt(h.date,0,0),Ie=Tr(
i,n.isoDate,ae,"constrain"),ge=Lo(i,Ie,dr(Ie.year,Ie.month,Ie.day+h.date.days),"week"),pe=Yn(h.date.weeks+ge.weeks,o,"tr\
unc");c=pe,u=pe+o*e,d=Nt(h.date,0,c),f=Nt(h.date,0,u);break}case"day":{let ae=Yn(h.date.days,o,"trunc");c=ae,u=ae+o*e,d=
Nt(h.date,c),f=Nt(h.date,u);break}}let y=Tr(i,n.isoDate,d,"constrain"),b=Tr(i,n.isoDate,f,"constrain"),T,S,E=$e(y,n.time),
_=$e(b,n.time);a?(T=Pt(a,E,"compatible"),S=Pt(a,_,"compatible")):(T=_t(E),S=_t(_));let O=Fe.fromEpochNsDiff(r,T),M=Fe.fromEpochNsDiff(
S,T),W=pl(l,e<0?"negative":"positive"),K=O.add(O).abs().subtract(M.abs()).sign(),Z=Math.abs(c)/o%2==0,H=O.isZero()?Math.
abs(c):O.cmp(M)?fl(Math.abs(c),Math.abs(u),K,Z,W):Math.abs(u),we=new Fe($.default.add($.default.multiply(M.totalNs,$.default.
BigInt(c)),$.default.multiply(O.totalNs,$.default.BigInt(o*e)))).fdiv(M.totalNs),G=H===Math.abs(u);return h={date:G?f:d,
time:Fe.ZERO},{nudgeResult:{duration:h,nudgedEpochNs:G?S:T,didExpandCalendarUnit:G},total:we}}function kl(e,t,r,n,a,i,o,s,l){
let c=e,u=Qr(s)||n&&s==="day",d=eg(c)<0?-1:1,f;return u?{nudgeResult:f}=ig(d,c,t,r,n,a,o,s,l):f=n?function(h,y,b,T,S,E,_,O){
let M=y,W=Tr(S,b.isoDate,M.date,"constrain"),K=$e(W,b.time),Z=$e(dr(W.year,W.month,W.day+h),b.time),H=Pt(T,K,"compatible"),
we=Pt(T,Z,"compatible"),G=Fe.fromEpochNsDiff(we,H);if(G.sign()!==h)throw new RangeError("time zone returned inconsistent\
 Instants");let ae=$.default.BigInt(ri[_]*E),Ie=M.time.round(ae,O),ge=Ie.subtract(G),pe=ge.sign()!==-h,it,st;return pe?(it=
h,Ie=ge.round(ae,O),st=Ie.addToEpochNs(we)):(it=0,st=Ie.addToEpochNs(H)),{duration:_n(Nt(M.date,M.date.days+it),Ie),nudgedEpochNs:st,
didExpandCalendarUnit:pe}}(d,c,r,n,a,o,s,l):function(h,y,b,T,S,E){let _=h,O=_.time.add24HourDays(_.date.days),M=O.round(
$.default.BigInt(T*ri[S]),E),W=M.subtract(O),{quotient:K}=O.divmod(Zs),{quotient:Z}=M.divmod(Zs),H=Math.sign(Z-K)===O.sign(),
we=W.addToEpochNs(y),G=0,ae=M;return kn(b)==="date"&&(G=Z,ae=M.add(Fe.fromComponents(24*-Z,0,0,0,0,0))),{duration:{date:Nt(
_.date,G),time:ae},nudgedEpochNs:we,didExpandCalendarUnit:H}}(c,t,i,o,s,l),c=f.duration,f.didExpandCalendarUnit&&s!=="we\
ek"&&(c=function(h,y,b,T,S,E,_,O){let M=y;if(O===_)return M;let W=so.indexOf(_);for(let K=so.indexOf(O)-1;K>=W;K--){let Z=so[K];
if(Z==="week"&&_!=="week")continue;let H;switch(Z){case"year":H={years:M.date.years+h,months:0,weeks:0,days:0};break;case"\
month":{let ae=M.date.months+h;H=Nt(M.date,0,0,ae);break}case"week":{let ae=M.date.weeks+h;H=Nt(M.date,0,ae);break}}let we=$e(
Tr(E,T.isoDate,H,"constrain"),T.time),G;if(G=S?Pt(S,we,"compatible"):_t(we),Gs(b,G)===-h)break;M={date:H,time:Fe.ZERO}}return M}(
d,c,f.nudgedEpochNs,r,n,a,i,xn(s,"day"))),c}function em(e,t,r,n,a,i){return Qr(i)||n&&i==="day"?ig(eg(e)<0?-1:1,e,t,r,n,
a,1,i,"trunc").total:uo(e.time.add24HourDays(e.date.days),i)}function og(e,t,r,n,a,i,o){if(ai(e,t)==0)return{date:{years:0,
months:0,weeks:0,days:0},time:Fe.ZERO};wa(e),wa(t);let s=ng(e,t,r,n);return i==="nanosecond"&&a===1?s:kl(s,_t(t),e,null,
r,n,a,i,o)}function sg(e,t,r,n,a,i,o,s){if(kn(a)==="time")return ad(e,t,i,o,s);let l=ag(e,t,r,n,a);return o==="nanosecon\
d"&&i===1?l:kl(l,t,Mr(r,e),r,n,a,i,o,s)}function ui(e,t,r,n,a,i){let o=ti.reduce((h,y)=>{let b=y[0],T=y[1],S=y[2];return r!==
"datetime"&&S!==r||n.includes(T)||h.push(T,b),h},[]),s=ur(t,"largestUnit",r,"auto");if(n.includes(s))throw new RangeError(
`largestUnit must be one of ${o.join(", ")}, not ${s}`);let l=si(t),c=Kr(t,"trunc");e==="since"&&(c=function(h){switch(h){case"\
ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return h}}(
c));let u=ur(t,"smallestUnit",r,a);if(n.includes(u))throw new RangeError(`smallestUnit must be one of ${o.join(", ")}, n\
ot ${u}`);let d=xn(i,u);if(s==="auto"&&(s=d),xn(s,u)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than s\
mallestUnit ${u}`);let f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];return f!==void 0&&
li(l,f,!1),{largestUnit:s,roundingIncrement:l,roundingMode:c,smallestUnit:u}}function tm(e,t,r,n){let a=to(r),i=ui(e,z(n),
"time",[],"nanosecond","second"),o=Pr(ad(g(t,te),g(a,te),i.roundingIncrement,i.smallestUnit,i.roundingMode),i.largestUnit);
return e==="since"&&(o=pr(o)),o}function rm(e,t,r,n){let a=Qi(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`can\
not compute difference between dates of ${i} and ${o} calendars`);let s=ui(e,z(n),"date",[],"day","day"),l=At("%Temporal\
.Duration%"),c=g(t,re),u=g(a,re);if(on(c,u)===0)return new l;let d={date:Lo(i,c,u,s.largestUnit),time:Fe.ZERO};if(s.smallestUnit!==
"day"||s.roundingIncrement!==1){let h=$e(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});
d=kl(d,_t($e(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),h,null,i,s.largestUnit,
s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=Pr(d,"day");return e==="since"&&(f=pr(f)),f}function nm(e,t,r,n){
let a=eo(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`cannot compute difference between dates of ${i} and ${o}\
 calendars`);let s=ui(e,z(n),"datetime",[],"nanosecond","day"),l=At("%Temporal.Duration%"),c=g(t,Ye),u=g(a,Ye);if(ai(c,u)===
0)return new l;let d=Pr(og(c,u,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return e===
"since"&&(d=pr(d)),d}function am(e,t,r,n){let a=Vn(r),i=ui(e,z(n),"time",[],"nanosecond","hour"),o=nd(g(t,Qe),g(a,Qe));o=
al(o,i.roundingIncrement,i.smallestUnit,i.roundingMode);let s=Pr(_n({years:0,months:0,weeks:0,days:0},o),i.largestUnit);
return e==="since"&&(s=pr(s)),s}function im(e,t,r,n){let a=ro(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`can\
not compute difference between months of ${i} and ${o} calendars`);let s=ui(e,z(n),"date",["week","day"],"month","year"),
l=At("%Temporal.Duration%");if(on(g(t,re),g(a,re))==0)return new l;let c=Xt(i,g(t,re),"year-month");c.day=1;let u=Jn(i,c,
"constrain"),d=Xt(i,g(a,re),"year-month");d.day=1;let f=Jn(i,d,"constrain"),h={date:Nt(Lo(i,u,f,s.largestUnit),0,0),time:Fe.
ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){let b=$e(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,
microsecond:0,nanosecond:0});h=kl(h,_t($e(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),
b,null,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let y=Pr(h,"day");return e==="since"&&(y=pr(y)),
y}function om(e,t,r,n){let a=no(r),i=g(t,D),o=g(a,D);if(!nn(i,o))throw new RangeError(`cannot compute difference between\
 dates of ${i} and ${o} calendars`);let s=ui(e,z(n),"datetime",[],"nanosecond","hour"),l=g(t,te),c=g(a,te),u=At("%Tempor\
al.Duration%"),d;if(kn(s.largestUnit)!=="date")d=Pr(ad(l,c,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{
let f=g(t,Oe);if(!Km(f,g(a,Oe)))throw new RangeError("When calculating difference between time zones, largestUnit must b\
e 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if($.default.
equal(l,c))return new u;d=Pr(sg(l,c,f,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return e===
"since"&&(d=pr(d)),d}function ni({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o){let s=r,l=i;return s+=
o.sec,l+=o.subsec,qn(e,t,s,n,a,l)}function Su(e,t){let r=t.addToEpochNs(e);return an(r),r}function ao(e,t,r,n,a="constra\
in"){if(bl(n.date)===0)return Su(e,n.time);let i=Mr(t,e);return Su(Pt(t,$e(Tr(r,i.isoDate,n.date,a),i.time),"compatible"),
n.time)}function sm(e,t,r){let n=Dr(r);e==="subtract"&&(n=pr(n));let a=xn(Tn(t),Tn(n));if(Qr(a))throw new RangeError("Fo\
r years, months, or weeks arithmetic, use date arithmetic relative to a starting point");let i=tn(t),o=tn(n);return Pr(_n(
{years:0,months:0,weeks:0,days:0},i.time.add(o.time)),a)}function lm(e,t,r){let n=Dr(r);e==="subtract"&&(n=pr(n));let a=Tn(
n);if(kn(a)==="date")throw new RangeError(`Duration field ${a} not supported by Temporal.Instant. Try Temporal.ZonedDate\
Time instead.`);let i=tn(n);return Yr(Su(g(t,te),i.time))}function cm(e,t,r,n){let a=g(t,D),i=Dr(r);e==="subtract"&&(i=pr(
i));let o=rg(i),s=_e(z(n));return Jt(Tr(a,g(t,re),o,s),a)}function um(e,t,r,n){let a=Dr(r);e==="subtract"&&(a=pr(a));let i=_e(
z(n)),o=g(t,D),s=tn(a),l=g(t,Ye),c=ni(l.time,s.time),u=Nt(s.date,c.deltaDays);return Tl(u.years,u.months,u.weeks,u.days,
0,0,0,0,0,0),Nr($e(Tr(o,l.isoDate,u,i),c),o)}function dm(e,t,r){let n=Dr(r);e==="subtract"&&(n=pr(n));let a=tn(n),{hour:i,
minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=ni(g(t,Qe),a.time);return Sn(yl(i,o,s,l,c,u,"reject"))}function pm(e,t,r,n){
let a=Dr(r);e==="subtract"&&(a=pr(a));let i=_e(z(n)),o=nl(a),s=g(t,D),l=Xt(s,g(t,re),"year-month");l.day=1;let c=Jn(s,l,
"constrain");if(o<0){let d=Tr(s,c,{months:1},"constrain");c=dr(d.year,d.month,d.day-1)}let u=rg(a);return _a(c),Za(mo(s,
Xt(s,Tr(s,c,u,i),"year-month"),i),s)}function fm(e,t,r,n){let a=Dr(r);e==="subtract"&&(a=pr(a));let i=_e(z(n)),o=g(t,Oe),
s=g(t,D),l=Ka(a);return Ct(ao(g(t,te),o,s,l,i),o,s)}function Yn(e,t,r){let n=Math.trunc(e/t),a=e%t,i=e<0?"negative":"pos\
itive",o=Math.abs(n),s=o+1,l=cr(Math.abs(2*a)-t),c=o%2==0,u=pl(r,i),d=a===0?o:fl(o,s,l,c,u);return t*(i==="positive"?d:-d)}
function Eu(e,t,r,n){let a=ri[r]*t;return function(i,o,s){let l=wn(i),c=wn(o),u=$.default.divide(l,c),d=$.default.remainder(
l,c),f=pl(s,"positive"),h,y;$.default.lessThan(l,br)?(h=$.default.subtract(u,po),y=u):(h=u,y=$.default.add(u,po));let b=Gs(
ha($.default.multiply(d,Gu)),c)*($.default.lessThan(l,br)?-1:1)+0,T=$.default.equal(d,br)?u:fl(h,y,b,ym(h),f);return $.default.
multiply(T,c)}(e,$.default.BigInt(a),n)}function xu(e,t,r,n){ku(e);let{year:a,month:i,day:o}=e.isoDate,s=_u(e.time,t,r,n);
return $e(dr(a,i,o+s.deltaDays),s)}function _u({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o,s,l){
let c;switch(s){case"day":case"hour":c=1e3*(1e3*(1e3*(60*(60*e+t)+r)+n)+a)+i;break;case"minute":c=1e3*(1e3*(1e3*(60*t+r)+
n)+a)+i;break;case"second":c=1e3*(1e3*(1e3*r+n)+a)+i;break;case"millisecond":c=1e3*(1e3*n+a)+i;break;case"microsecond":c=
1e3*a+i;break;case"nanosecond":c=i}let u=ri[s],d=Yn(c,u*o,l)/u;switch(s){case"day":return{deltaDays:d,hour:0,minute:0,second:0,
millisecond:0,microsecond:0,nanosecond:0};case"hour":return qn(d,0,0,0,0,0);case"minute":return qn(e,d,0,0,0,0);case"sec\
ond":return qn(e,t,d,0,0,0);case"millisecond":return qn(e,t,r,d,0,0);case"microsecond":return qn(e,t,r,n,d,0);case"nanos\
econd":return qn(e,t,r,n,a,d);default:throw new Error(`Invalid unit ${s}`)}}function al(e,t,r,n){let a=ri[r];return e.round(
$.default.BigInt(a*t),n)}function uo(e,t){let r=ri[t];return e.fdiv($.default.BigInt(r))}function on(e,t){return e.year!==
t.year?cr(e.year-t.year):e.month!==t.month?cr(e.month-t.month):e.day!==t.day?cr(e.day-t.day):0}function Au(e,t){return e.
hour!==t.hour?cr(e.hour-t.hour):e.minute!==t.minute?cr(e.minute-t.minute):e.second!==t.second?cr(e.second-t.second):e.millisecond!==
t.millisecond?cr(e.millisecond-t.millisecond):e.microsecond!==t.microsecond?cr(e.microsecond-t.microsecond):e.nanosecond!==
t.nanosecond?cr(e.nanosecond-t.nanosecond):0}function ai(e,t){let r=on(e.isoDate,t.isoDate);return r!==0?r:Au(e.time,t.time)}
function lg(e){let t=il(e);return globalThis.BigInt!==void 0?globalThis.BigInt(t.toString(10)):t}function jr(e,t){let r=wn(
e),{quotient:n,remainder:a}=Zi(r,Io),i=$.default.toNumber(n);return t==="floor"&&$.default.toNumber(a)<0&&(i-=1),t==="ce\
il"&&$.default.toNumber(a)>0&&(i+=1),i}function zr(e){if(!Number.isInteger(e))throw new RangeError("epoch milliseconds m\
ust be an integer");return $.default.multiply($.default.BigInt(e),Io)}function il(e){let t=e;if(typeof e=="object"){let r=e[Symbol.
toPrimitive];r&&typeof r=="function"&&(t=r.call(e,"number"))}if(typeof t=="number")throw new TypeError("cannot convert n\
umber to bigint");return typeof t=="bigint"?$.default.BigInt(t.toString(10)):$.default.BigInt(t)}var $u=(()=>{let e=$.default.
BigInt(Date.now()%1e6);return()=>{let t=Date.now(),r=$.default.BigInt(t),n=$.default.add(zr(t),e);return e=$.default.remainder(
r,Io),$.default.greaterThan(n,ei)?ei:$.default.lessThan(n,fo)?fo:n}})();function Gi(){return new Intl.DateTimeFormat().resolvedOptions().
timeZone}function cr(e){return e<0?-1:e>0?1:e}function z(e){if(e===void 0)return Object.create(null);if(et(e)&&e!==null)
return e;throw new TypeError("Options parameter must be an object, not "+(e===null?"null":typeof e))}function ka(e,t){let r=Object.
create(null);return r[e]=t,r}function An(e,t,r,n){let a=e[t];if(a!==void 0){if(a=ml(a),!r.includes(a))throw new RangeError(
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
function rn(e,t=!1){return`M${`${e}`.padStart(2,"0")}${t?"L":""}`}function id(e,t=void 0,r=12){let{month:n,monthCode:a}=e;
if(a===void 0){if(n===void 0)throw new TypeError("Either month or monthCode are required");t==="reject"&&Tt(n,1,r),t==="\
constrain"&&(n=Gt(n,1,r)),a=rn(n)}else{let i=Sa(a);if(a!==rn(i))throw new RangeError(`Invalid month code: ${a}`);if(n!==
void 0&&n!==i)throw new RangeError(`monthCode ${a} and month ${n} must match if both are present`);if(n=i,n<1||n>r)throw new RangeError(
`Invalid monthCode: ${a}`)}return{...e,month:n,monthCode:a}}Ho.iso8601={resolveFields(e,t){if((t==="date"||t==="year-mon\
th")&&e.year===void 0)throw new TypeError("year is required");if((t==="date"||t==="month-day")&&e.day===void 0)throw new TypeError(
"day is required");Object.assign(e,id(e))},dateToISO:(e,t)=>lo(e.year,e.month,e.day,t),monthDayToISOReferenceDate(e,t){let{
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
ya(e,t)),(n.daysInYear||n.inLeapYear)&&(a.inLeapYear=rl(e),a.daysInYear=a.inLeapYear?366:365),a},getFirstDayOfWeek:()=>1,
getMinimalDaysInFirstWeek:()=>4};var yr=class e{constructor(t){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=
0,t!==void 0){let r=0;for(let n of t.map.entries()){if(++r>e.MAX_CACHE_ENTRIES)break;this.map.set(...n)}}}get(t){let r=this.
map.get(t);return r&&(this.hits++,this.report()),this.calls++,r}set(t,r){this.map.set(t,r),this.misses++,this.report()}report(){}setObject(t){
if(e.objectMap.get(t))throw new RangeError("object already cached");e.objectMap.set(t,this),this.report()}static getCacheForObject(t){
let r=e.objectMap.get(t);return r||(r=new e,e.objectMap.set(t,r)),r}};function pg({isoYear:e,isoMonth:t,isoDay:r}){return`${Bo(
e)}-${kr(t)}-${kr(r)}T00:00Z`}function su(e,t){return{years:e.year-t.year,months:e.month-t.month,days:e.day-t.day}}yr.objectMap=
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
monthsInYear(i,r),{month:s,monthCode:l}=i;return{month:s,monthCode:l}=id(i,n,o),{...i,month:s,monthCode:l}}regulateMonthDayNaive(t,r,n){
let a=this.monthsInYear(t,n),{month:i,day:o}=t;return r==="reject"?(Tt(i,1,a),Tt(o,1,this.maximumMonthLength(t))):(i=Gt(
i,1,a),o=Gt(o,1,this.maximumMonthLength({...t,month:i}))),{...t,month:i,day:o}}calendarToIsoDate(t,r="constrain",n){let a=t,
i=this.adjustCalendarDate(t,n,r,!1);i=this.regulateMonthDayNaive(i,r,n);let{year:o,month:s,day:l}=i,c=JSON.stringify({func:"\
calendarToIsoDate",year:o,month:s,day:l,overflow:r,id:this.id}),u,d=n.get(c);if(d||a.year!==void 0&&a.month!==void 0&&a.
day!==void 0&&(a.year!==i.year||a.month!==i.month||a.day!==i.day)&&(u=JSON.stringify({func:"calendarToIsoDate",year:a.year,
month:a.month,day:a.day,overflow:r,id:this.id}),d=n.get(u),d))return d;let f=this.estimateIsoDate({year:o,month:s,day:l}),
h=E=>{let _=this.addDaysIso(f,E);if(i.day>this.minimumMonthLength(i)){let O=this.isoToCalendarDate(_,n);for(;O.month!==s||
O.year!==o;){if(r==="reject")throw new RangeError(`day ${l} does not exist in month ${s} of year ${o}`);_=this.addDaysIso(
_,-1),O=this.isoToCalendarDate(_,n)}}return _},y=0,b=this.isoToCalendarDate(f,n),T=su(i,b);if(T.years!==0||T.months!==0||
T.days!==0){let E=365*T.years+30*T.months+T.days;f=this.addDaysIso(f,E),b=this.isoToCalendarDate(f,n),T=su(i,b),T.years===
0&&T.months===0?f=h(T.days):y=this.compareCalendarDates(i,b)}let S=8;for(;y;){f=this.addDaysIso(f,y*S);let E=b;b=this.isoToCalendarDate(
f,n);let _=y;if(y=this.compareCalendarDates(i,b),y){if(T=su(i,b),T.years===0&&T.months===0)f=h(T.days),y=0;else if(_&&y!==
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
adjustCalendarDate({day:y,monthCode:h,year:S-E},n),O=this.calendarToIsoDate(_,"constrain",n),M=this.isoToCalendarDate(O,
n);if({year:a,month:i,day:o}=O,M.monthCode===h&&M.day===y)return{month:i,day:o,year:a};if(r==="constrain"){let W=this.maxLengthOfMonthCodeInAnyYear(
M.monthCode);if(M.monthCode===h&&M.day===W&&y>W)return{month:i,day:o,year:a};(s===void 0||M.monthCode===s.monthCode&&M.day>
s.day)&&(s=M,l=O)}}if(r==="constrain"&&l!==void 0)return l;throw new RangeError(`No recent ${this.id} year with monthCod\
e ${h} and day ${y}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}},Ru=class extends In{constructor(){super(...arguments),
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
ect"?(Tt(o,1,this.monthsInYear({year:i})),Tt(l,1,this.maximumMonthLength({year:i,month:o}))):(o=Gt(o,1,this.monthsInYear(
{year:i})),l=Gt(l,1,this.maximumMonthLength({year:i,month:o}))),s===void 0)s=this.getMonthCode(i,o);else if(this.getMonthCode(
i,o)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${o} in Hebrew year ${i}`);return{...t,day:l,month:o,
monthCode:s,year:i}}},Zn=class extends In{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=
354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(t,r){let n={year:t.year,month:1,monthCode:"M01",day:1},a={year:t.year+
1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(n,a,r)===355}monthsInYear(){return 12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(
t);return{year:Math.floor(r*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}},Iu=class extends Zn{constructor(){
super(...arguments),this.id="islamic"}},Ou=class extends Zn{constructor(){super(...arguments),this.id="islamic-umalqura"}},
Cu=class extends Zn{constructor(){super(...arguments),this.id="islamic-tbla"}},Nu=class extends Zn{constructor(){super(...arguments),
this.id="islamic-civil"}},Pu=class extends Zn{constructor(){super(...arguments),this.id="islamic-rgsa"}},Du=class extends Zn{constructor(){
super(...arguments),this.id="islamicc"}},Mu=class extends In{constructor(){super(...arguments),this.id="persian",this.calendarType=
"solar"}inLeapYear(t,r){return this.daysInMonth({year:t.year,month:12,day:1},r)===30}monthsInYear(){return 12}minimumMonthLength(t){
let{month:r}=t;return r===12?29:r<=6?31:30}maximumMonthLength(t){let{month:r}=t;return r===12?30:r<=6?31:30}maxLengthOfMonthCodeInAnyYear(t){
return Sa(t)<=6?31:30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(t);return{year:r+621,month:1,day:1}}},ju=class extends In{constructor(){
super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,
month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,
day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},
10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.
vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 S\
aka"}inLeapYear(t){return od(t.year+78)}monthsInYear(){return 12}minimumMonthLength(t){return this.getMonthInfo(t).length}maximumMonthLength(t){
return this.getMonthInfo(t).length}maxLengthOfMonthCodeInAnyYear(t){let r=Sa(t),n=this.months[r];return n=n.leap??n,n.length}getMonthInfo(t){
let{month:r}=t,n=this.months[r];if(n===void 0)throw new RangeError(`Invalid month: ${r}`);return this.inLeapYear(t)&&n.leap&&
(n=n.leap),n}estimateIsoDate(t){let r=this.adjustCalendarDate(t),n=this.getMonthInfo(r);return dr(r.year+78+(n.nextYear?
1:0),n.month,n.day+r.day-1)}checkIcuBugs(t){if(this.vulnerableToBceBug&&t.year<1)throw new RangeError(`calendar '${this.
id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}};function od(e){
return e%4==0&&(e%100!=0||e%400==0)}var ol=class extends In{constructor(t,r){super(),this.calendarType="solar",this.id=t,
this.isoEpoch=r}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return od(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Sa(t)-1]}estimateIsoDate(t){
let r=this.adjustCalendarDate(t);return lo(r.year+this.isoEpoch.year,r.month+this.isoEpoch.month,r.day+this.isoEpoch.day,
"constrain")}},sl=class extends In{constructor(t,r){super(),this.hasEra=!0,this.calendarType="solar",this.id=t;let{eras:n,
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
r);this.anchorEra=a,this.eras=n}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return od(r)}monthsInYear(){
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
{anchorEra:o}=this;return lo(n+o.isoEpoch.year-(o.hasYearZero?0:1),a,i,"constrain")}},wo=class extends sl{constructor(t,r){
super(t,r)}isoToCalendarDate(t){let{year:r,month:n,day:a}=t,i=rn(n),o=r-this.anchorEra.isoEpoch.year+1;return this.completeEraYear(
{year:o,month:n,monthCode:i,day:a})}},en={inLeapYear(e){let{year:t}=e;return(t+1)%4==0},monthsInYear:()=>13,minimumMonthLength(e){
let{month:t}=e;return t===13?this.inLeapYear(e)?6:5:30},maximumMonthLength(e){return this.minimumMonthLength(e)},maxLengthOfMonthCodeInAnyYear:e=>e===
"M13"?6:30},Lu=class extends ol{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=en.monthsInYear,
this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},ll=class extends sl{constructor(t,r){super(t,r),this.inLeapYear=en.inLeapYear,this.monthsInYear=
en.monthsInYear,this.minimumMonthLength=en.minimumMonthLength,this.maximumMonthLength=en.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
en.maxLengthOfMonthCodeInAnyYear}},Fu=class extends Lu{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}},Uu=class extends ll{constructor(){
super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}},Bu=class extends ll{constructor(){
super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"eth\
iopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}},Hu=class extends wo{constructor(){super(
"roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"\
roc"}])}},Wu=class extends ol{constructor(){super("buddhist",{year:-543,month:1,day:1})}},qu=class extends wo{constructor(){
super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be",
"bce"],reverseOf:"gregory"}])}reviseIntlEra(t){let{era:r,eraYear:n}=t;return r==="b"&&(r="gregory-inverse"),r==="a"&&(r=
"gregory"),{era:r,eraYear:n}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}},Vu=class extends wo{constructor(){
super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",
isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},
anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,
day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:[
"japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gre\
gory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(t,r){let{era:n,eraYear:a}=t,{year:i}=r;
return this.eras.find(o=>o.code===n)?{era:n,eraYear:a}:i<1?{era:"japanese-inverse",eraYear:1-i}:{era:"japanese",eraYear:i}}},
cl=class extends In{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(t,r){let n=this.getMonthList(
t.year,r);return Object.entries(n).length===13}monthsInYear(t,r){return this.inLeapYear(t,r)?13:12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(t){return["M01L","M09L","M10L","M11L","M12L"].includes(
t)?29:30}monthDaySearchStartYear(t,r){let n={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,
1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[t]??
[1972,1972];return r<30?n[0]:n[1]}getMonthList(t,r){if(t===void 0)throw new TypeError("Missing year");let n=JSON.stringify(
{func:"getMonthList",calendarYear:t,id:this.id}),a=r.get(n);if(a)return a;let i=this.getFormatter(),o=(T,S)=>{let E=pg({
isoYear:T,isoMonth:2,isoDay:1}),_=new Date(E);_.setUTCDate(S+1);let O=i.formatToParts(_),M=O.find(H=>H.type==="month").value,
W=+O.find(H=>H.type==="day").value,K=O.find(H=>H.type==="relatedYear"),Z;if(K===void 0)throw new RangeError(`Intl.DateTi\
meFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return Z=+K.value,{calendarMonthString:M,
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
n==="reject"?(Tt(o,1,f),Tt(l,1,this.maximumMonthLength())):(o=Gt(o,1,f),l=Gt(l,1,this.maximumMonthLength()));let h=d.find(
y=>y[1].monthIndex===o);if(h===void 0)throw new RangeError(`Invalid month ${o} in Chinese year ${i}`);c=rn(+h[0].replace(
"bis",""),h[0].indexOf("bis")!==-1)}else{let u=this.getMonthList(i,r),d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="\
0"&&(d=d.slice(1));let f=u[d];if(!f)throw new RangeError(`Unmatched monthCode ${c} in Chinese year ${i}`);if(o!==f.monthIndex)
throw new RangeError(`monthCode ${c} doesn't correspond to month ${o} in Chinese year ${i}`)}return{...t,year:i,month:o,
monthCode:c,day:l}}},Yu=class extends cl{constructor(){super(...arguments),this.id="chinese"}},zu=class extends cl{constructor(){
super(...arguments),this.id="dangi"}},Ku=class{constructor(t){this.helper=t}extraFields(t){return this.helper.hasEra&&t.
includes("year")?["era","eraYear"]:[]}resolveFields(t){if(this.helper.calendarType!=="lunisolar"){let r=new yr;id(t,void 0,
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
return this.helper.getMinimalDaysInFirstWeek()}};for(let e of[Ru,Mu,Bu,Fu,Uu,Yu,zu,Hu,ju,Wu,qu,Vu,Iu,Ou,Cu,Nu,Pu,Du]){let t=new e;
Ho[t.id]=new Ku(t)}hu("calendarImpl",function(e){return Ho[e]});var To=Intl.DateTimeFormat;function qa(e,t){let r=g(e,t);
return typeof r=="function"&&(r=new To(g(e,Am),r(g(e,uu))),function(n,a,i){let o=dl(n);if(o===void 0)throw new TypeError(
"Missing slots for the given container");if(o[a]===void 0)throw new TypeError(`tried to reset ${a} which was not set`);o[a]=
i}(e,t,r)),r}function Ji(e){return Qt(e,xa)}var Ea=class{constructor(t=void 0,r=void 0){(function(n,a,i){let o=i!==void 0,
s;if(o){let d=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","mont\
h","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeS\
tyle"];s=function(h){if(h==null)throw new TypeError(`Expected object not ${h}`);return Object(h)}(i);let f=Object.create(
null);for(let h=0;h<d.length;h++){let y=d[h];Object.prototype.hasOwnProperty.call(s,y)&&(f[y]=s[y])}s=f}else s=Object.create(
null);let l=new To(a,s),c=l.resolvedOptions();if(On(n),o){let d=Object.assign(Object.create(null),c);for(let f in d)Object.
prototype.hasOwnProperty.call(s,f)||delete d[f];d.hour12=s.hour12,d.hourCycle=s.hourCycle,fe(n,uu,d)}else fe(n,uu,s);fe(
n,Am,c.locale),fe(n,xa,l),fe(n,za,c.timeZone),fe(n,Xi,c.calendar),fe(n,Tm,FS),fe(n,km,jS),fe(n,Sm,LS),fe(n,Em,MS),fe(n,xm,
US),fe(n,_m,BS);let u=o?s.timeZone:void 0;if(u===void 0)fe(n,cu,c.timeZone);else{let d=ml(u);if(d.startsWith("\u2212"))throw new RangeError(
"Unicode minus (U+2212) is not supported in time zone offsets");fe(n,cu,Zt(d))}})(this,t,r)}get format(){I(this,Ji);let t=CS.
bind(this);return Object.defineProperties(t,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,
writable:!1,configurable:!0}}),t}formatRange(t,r){return I(this,Ji),PS.call(this,t,r)}formatToParts(t,...r){return I(this,
Ji),NS.call(this,t,...r)}formatRangeToParts(t,r){return I(this,Ji),DS.call(this,t,r)}resolvedOptions(){return I(this,Ji),
OS.call(this)}};"formatToParts"in To.prototype||delete Ea.prototype.formatToParts,"formatRangeToParts"in To.prototype||delete Ea.
prototype.formatRangeToParts;var wr=function(e=void 0,t=void 0){return new Ea(e,t)};function OS(){let e=g(this,xa).resolvedOptions();
return e.timeZone=g(this,cu),e}function CS(e,...t){let r,n,a=ii(e,this);return a.formatter?(r=a.formatter,n=[jr(a.epochNs,
"floor")]):(r=g(this,xa),n=[e,...t]),r.format(...n)}function NS(e,...t){let r,n,a=ii(e,this);return a.formatter?(r=a.formatter,
n=[jr(a.epochNs,"floor")]):(r=g(this,xa),n=[e,...t]),r.formatToParts(...n)}function PS(e,t){if(e===void 0||t===void 0)throw new TypeError(
"Intl.DateTimeFormat.formatRange requires two values");let r=ul(e),n=ul(t),a,i=[r,n];if($n(r)!==$n(n))throw new TypeError(
"Intl.DateTimeFormat.formatRange accepts two values of the same type");if($n(r)){if(!fg(r,n))throw new TypeError("Intl.D\
ateTimeFormat.formatRange accepts two values of the same type");let{epochNs:o,formatter:s}=ii(r,this),{epochNs:l,formatter:c}=ii(
n,this);s&&(a=s,i=[jr(o,"floor"),jr(l,"floor")])}return a||(a=g(this,xa)),a.formatRange(...i)}function DS(e,t){if(e===void 0||
t===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");let r=ul(e),n=ul(t),a,i=[r,n];if($n(
r)!==$n(n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if($n(r)){if(!fg(
r,n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");let{epochNs:o,formatter:s}=ii(
r,this),{epochNs:l,formatter:c}=ii(n,this);s&&(a=s,i=[jr(o,"floor"),jr(l,"floor")])}return a||(a=g(this,xa)),a.formatRangeToParts(
...i)}function Wo(e={},t={}){let r=Object.assign({},e),n=["year","month","day","hour","minute","second","weekday","dayPe\
riod","timeZoneName","dateStyle","timeStyle"];for(let a=0;a<n.length;a++){let i=n[a];r[i]=i in t?t[i]:r[i],r[i]!==!1&&r[i]!==
void 0||delete r[i]}return r}function MS(e){let t=Wo(e,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});
if(t.timeStyle!=="long"&&t.timeStyle!=="full"||(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"\
2-digit"})),!El(t)){if(qo(e))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(e)}]`);Object.
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
timeStyle:!1});if(!Sl(t)){if(qo(e))throw new TypeError(`cannot format PlainDate with options [${Object.keys(e)}]`);Object.
assign(t,{year:"numeric",month:"numeric",day:"numeric"})}return t}function US(e){let t=Wo(e,{timeZoneName:!1});if((t.timeStyle===
"long"||t.timeStyle==="full")&&(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"2-digit"}),t.
dateStyle)&&(Object.assign(t,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",
day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"\
long"}}[t.dateStyle]),delete t.dateStyle),!El(t)&&!Sl(t)){if(qo(e))throw new TypeError(`cannot format PlainDateTime with\
 options [${Object.keys(e)}]`);Object.assign(t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"nume\
ric",second:"numeric"})}return t}function BS(e){let t=e;return El(t)||Sl(t)||(t=Object.assign({},t,{year:"numeric",month:"\
numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function Sl(e){return"year"in e||"month"in e||
"day"in e||"weekday"in e||"dateStyle"in e||"era"in e}function El(e){return"hour"in e||"minute"in e||"second"in e||"timeS\
tyle"in e||"dayPeriod"in e||"fractionalSecondDigits"in e}function qo(e){return Sl(e)||El(e)||"dateStyle"in e||"timeStyle"in
e||"timeZoneName"in e}function $n(e){return Xe(e)||nt(e)||qe(e)||ve(e)||xt(e)||vr(e)||Et(e)}function ul(e){return $n(e)?
e:hl(e)}function fg(e,t){return!(!$n(e)||!$n(t)||nt(e)&&!nt(t)||Xe(e)&&!Xe(t)||qe(e)&&!qe(t)||ve(e)&&!ve(t)||xt(e)&&!xt(
t)||vr(e)&&!vr(t)||Et(e)&&!Et(t))}function ii(e,t){if(nt(e)){let r={isoDate:{year:1970,month:1,day:1},time:g(e,Qe)};return{
epochNs:Pt(g(t,za),r,"compatible"),formatter:qa(t,Em)}}if(xt(e)){let r=g(e,D),n=g(t,Xi);if(r!==n)throw new RangeError(`c\
annot format PlainYearMonth with calendar ${r} in locale with calendar ${n}`);let a=$e(g(e,re),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Pt(g(t,za),a,"compatible"),formatter:qa(t,km)}}if(vr(
e)){let r=g(e,D),n=g(t,Xi);if(r!==n)throw new RangeError(`cannot format PlainMonthDay with calendar ${r} in locale with \
calendar ${n}`);let a=$e(g(e,re),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{
epochNs:Pt(g(t,za),a,"compatible"),formatter:qa(t,Sm)}}if(Xe(e)){let r=g(e,D),n=g(t,Xi);if(r!=="iso8601"&&r!==n)throw new RangeError(
`cannot format PlainDate with calendar ${r} in locale with calendar ${n}`);let a=$e(g(e,re),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Pt(g(t,za),a,"compatible"),formatter:qa(t,Tm)}}if(qe(
e)){let r=g(e,D),n=g(t,Xi);if(r!=="iso8601"&&r!==n)throw new RangeError(`cannot format PlainDateTime with calendar ${r} \
in locale with calendar ${n}`);let a=g(e,Ye);return{epochNs:Pt(g(t,za),a,"compatible"),formatter:qa(t,xm)}}if(ve(e))throw new TypeError(
"Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return Et(e)?{epochNs:g(
e,te),formatter:qa(t,_m)}:{}}function hg(e){let t=Object.create(null);return t.years=g(e,Bt),t.months=g(e,Ht),t.weeks=g(
e,sr),t.days=g(e,Wt),t.hours=g(e,qt),t.minutes=g(e,Vt),t.seconds=g(e,Yt),t.milliseconds=g(e,zt),t.microseconds=g(e,Kt),t.
nanoseconds=g(e,lr),t}Ea.prototype.constructor=wr,Object.defineProperty(wr,"prototype",{value:Ea.prototype,writable:!1,enumerable:!1,
configurable:!1}),wr.supportedLocalesOf=To.supportedLocalesOf,Cn(wr,"Intl.DateTimeFormat");var{format:HS,formatToParts:WS}=Intl.
DurationFormat?.prototype??Object.create(null);function sd(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=hg(
Dr(e));return HS.call(this,t)}Intl.DurationFormat?.prototype&&(Intl.DurationFormat.prototype.format=sd,Intl.DurationFormat.
prototype.formatToParts=function(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=hg(Dr(e));return WS.call(
this,t)});var jM=Object.freeze({__proto__:null,DateTimeFormat:wr,ModifiedIntlDurationFormatPrototypeFormat:sd}),ko=class{constructor(t){
if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");Ym(this,il(t))}get epochMilliseconds(){
return I(this,Et),jr(g(this,te),"floor")}get epochNanoseconds(){return I(this,Et),lg($.default.BigInt(g(this,te)))}add(t){
return I(this,Et),lm("add",this,t)}subtract(t){return I(this,Et),lm("subtract",this,t)}until(t,r=void 0){return I(this,Et),
tm("until",this,t,r)}since(t,r=void 0){return I(this,Et),tm("since",this,t,r)}round(t){if(I(this,Et),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?ka("smallestUnit",t):z(t),n=si(r),a=Kr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",Rn);return li(n,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[i],
!0),Yr(Eu(g(this,te),n,i,a))}equals(t){I(this,Et);let r=to(t),n=g(this,te),a=g(r,te);return $.default.equal($.default.BigInt(
n),$.default.BigInt(a))}toString(t=void 0){I(this,Et);let r=z(t),n=Po(r),a=Kr(r,"trunc"),i=ur(r,"smallestUnit","time",void 0);
if(i==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let o=r.timeZone;o!==void 0&&(o=
Zt(o));let{precision:s,unit:l,increment:c}=Do(i,n);return Yh(Yr(Eu(g(this,te),c,l,a)),o,s)}toJSON(){return I(this,Et),Yh(
this,void 0,"auto")}toLocaleString(t=void 0,r=void 0){return I(this,Et),new wr(t,r).format(this)}valueOf(){Qn("Instant")}toZonedDateTimeISO(t){
I(this,Et);let r=Zt(t);return Ct(g(this,te),r,"iso8601")}static fromEpochMilliseconds(t){return Yr(zr(hl(t)))}static fromEpochNanoseconds(t){
return Yr(il(t))}static from(t){return to(t)}static compare(t,r){let n=to(t),a=to(r),i=g(n,te),o=g(a,te);return $.default.
lessThan(i,o)?-1:$.default.greaterThan(i,o)?1:0}};Cn(ko,"Temporal.Instant");var So=class{constructor(t,r,n,a="iso8601"){
let i=oe(t),o=oe(r),s=oe(n),l=er(a===void 0?"iso8601":mt(a));ba(i,o,s),Bm(this,{year:i,month:o,day:s},l)}get calendarId(){
return I(this,Xe),g(this,D)}get era(){return Lt(this,"era")}get eraYear(){return Lt(this,"eraYear")}get year(){return Lt(
this,"year")}get month(){return Lt(this,"month")}get monthCode(){return Lt(this,"monthCode")}get day(){return Lt(this,"d\
ay")}get dayOfWeek(){return Lt(this,"dayOfWeek")}get dayOfYear(){return Lt(this,"dayOfYear")}get weekOfYear(){return Lt(
this,"weekOfYear")?.week}get yearOfWeek(){return Lt(this,"weekOfYear")?.year}get daysInWeek(){return Lt(this,"daysInWeek")}get daysInMonth(){
return Lt(this,"daysInMonth")}get daysInYear(){return Lt(this,"daysInYear")}get monthsInYear(){return Lt(this,"monthsInY\
ear")}get inLeapYear(){return Lt(this,"inLeapYear")}with(t,r=void 0){if(I(this,Xe),!et(t))throw new TypeError("invalid a\
rgument");oi(t);let n=g(this,D),a=Xt(n,g(this,re));return a=va(n,a,Sr(n,t,["year","month","monthCode","day"],[],"partial")),
Jt(Jn(n,a,_e(z(r))),n)}withCalendar(t){I(this,Xe);let r=Fo(t);return Jt(g(this,re),r)}add(t,r=void 0){return I(this,Xe),
cm("add",this,t,r)}subtract(t,r=void 0){return I(this,Xe),cm("subtract",this,t,r)}until(t,r=void 0){return I(this,Xe),rm(
"until",this,t,r)}since(t,r=void 0){return I(this,Xe),rm("since",this,t,r)}equals(t){I(this,Xe);let r=Qi(t);return on(g(
this,re),g(r,re))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){return I(this,Xe),zh(this,No(z(t)))}toJSON(){return I(this,
Xe),zh(this)}toLocaleString(t=void 0,r=void 0){return I(this,Xe),new wr(t,r).format(this)}valueOf(){Qn("PlainDate")}toPlainDateTime(t=void 0){
I(this,Xe);let r=Um(t);return Nr($e(g(this,re),r),g(this,D))}toZonedDateTime(t){let r,n;if(I(this,Xe),et(t)){let o=t.timeZone;
o===void 0?r=Zt(t):(r=Zt(o),n=t.plainTime)}else r=Zt(t);let a=g(this,re),i;return n===void 0?i=Wn(r,a):(n=Vn(n),i=Pt(r,$e(
a,g(n,Qe)),"compatible")),Ct(i,r,g(this,D))}toPlainYearMonth(){I(this,Xe);let t=g(this,D);return Za(mo(t,Xt(t,g(this,re)),
"constrain"),t)}toPlainMonthDay(){I(this,Xe);let t=g(this,D);return Ja(el(t,Xt(t,g(this,re)),"constrain"),t)}static from(t,r=void 0){
return Qi(t,r)}static compare(t,r){let n=Qi(t),a=Qi(r);return on(g(n,re),g(a,re))}};function Lt(e,t){I(e,Xe);let r=g(e,re);
return Mo(e).isoToDate(r,{[t]:!0})[t]}Cn(So,"Temporal.PlainDate");var Eo=class{constructor(t,r,n,a=0,i=0,o=0,s=0,l=0,c=0,u="\
iso8601"){let d=oe(t),f=oe(r),h=oe(n),y=a===void 0?0:oe(a),b=i===void 0?0:oe(i),T=o===void 0?0:oe(o),S=s===void 0?0:oe(s),
E=l===void 0?0:oe(l),_=c===void 0?0:oe(c),O=er(u===void 0?"iso8601":mt(u));td(d,f,h,y,b,T,S,E,_),Hm(this,{isoDate:{year:d,
month:f,day:h},time:{hour:y,minute:b,second:T,millisecond:S,microsecond:E,nanosecond:_}},O)}get calendarId(){return I(this,
qe),g(this,D)}get year(){return Ft(this,"year")}get month(){return Ft(this,"month")}get monthCode(){return Ft(this,"mont\
hCode")}get day(){return Ft(this,"day")}get hour(){return Va(this,"hour")}get minute(){return Va(this,"minute")}get second(){
return Va(this,"second")}get millisecond(){return Va(this,"millisecond")}get microsecond(){return Va(this,"microsecond")}get nanosecond(){
return Va(this,"nanosecond")}get era(){return Ft(this,"era")}get eraYear(){return Ft(this,"eraYear")}get dayOfWeek(){return Ft(
this,"dayOfWeek")}get dayOfYear(){return Ft(this,"dayOfYear")}get weekOfYear(){return Ft(this,"weekOfYear")?.week}get yearOfWeek(){
return Ft(this,"weekOfYear")?.year}get daysInWeek(){return Ft(this,"daysInWeek")}get daysInYear(){return Ft(this,"daysIn\
Year")}get daysInMonth(){return Ft(this,"daysInMonth")}get monthsInYear(){return Ft(this,"monthsInYear")}get inLeapYear(){
return Ft(this,"inLeapYear")}with(t,r=void 0){if(I(this,qe),!et(t))throw new TypeError("invalid argument");oi(t);let n=g(
this,D),a=g(this,Ye),i={...Xt(n,a.isoDate),...a.time};return i=va(n,i,Sr(n,t,["year","month","monthCode","day"],["hour",
"minute","second","millisecond","microsecond","nanosecond"],"partial")),Nr(jo(n,i,_e(z(r))),n)}withPlainTime(t=void 0){I(
this,qe);let r=Um(t);return Nr($e(g(this,Ye).isoDate,r),g(this,D))}withCalendar(t){I(this,qe);let r=Fo(t);return Nr(g(this,
Ye),r)}add(t,r=void 0){return I(this,qe),um("add",this,t,r)}subtract(t,r=void 0){return I(this,qe),um("subtract",this,t,
r)}until(t,r=void 0){return I(this,qe),nm("until",this,t,r)}since(t,r=void 0){return I(this,qe),nm("since",this,t,r)}round(t){
if(I(this,qe),t===void 0)throw new TypeError("options parameter is required");let r=typeof t=="string"?ka("smallestUnit",
t):z(t),n=si(r),a=Kr(r,"halfExpand"),i=ur(r,"smallestUnit","time",Rn,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,
microsecond:1e3,nanosecond:1e3}[i];li(n,o,o===1);let s=g(this,Ye);return Nr(n===1&&i==="nanosecond"?s:xu(s,n,i,a),g(this,
D))}equals(t){I(this,qe);let r=eo(t);return ai(g(this,Ye),g(r,Ye))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){I(this,qe);
let r=z(t),n=No(r),a=Po(r),i=Kr(r,"trunc"),o=ur(r,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smal\
lestUnit must be a time unit other than "hour"');let{precision:s,unit:l,increment:c}=Do(o,a),u=xu(g(this,Ye),c,l,i);return wa(
u),yo(u,g(this,D),s,n)}toJSON(){return I(this,qe),yo(g(this,Ye),g(this,D),"auto")}toLocaleString(t=void 0,r=void 0){return I(
this,qe),new wr(t,r).format(this)}valueOf(){Qn("PlainDateTime")}toZonedDateTime(t,r=void 0){I(this,qe);let n=Zt(t),a=co(
z(r));return Ct(Pt(n,g(this,Ye),a),n,g(this,D))}toPlainDate(){return I(this,qe),Jt(g(this,Ye).isoDate,g(this,D))}toPlainTime(){
return I(this,qe),Sn(g(this,Ye).time)}static from(t,r=void 0){return eo(t,r)}static compare(t,r){let n=eo(t),a=eo(r);return ai(
g(n,Ye),g(a,Ye))}};function Ft(e,t){I(e,qe);let r=g(e,Ye).isoDate;return Mo(e).isoToDate(r,{[t]:!0})[t]}function Va(e,t){
return I(e,qe),g(e,Ye).time[t]}Cn(Eo,"Temporal.PlainDateTime");var xo=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0,s=0,l=0,c=0,u=0){
let d=t===void 0?0:Vr(t),f=r===void 0?0:Vr(r),h=n===void 0?0:Vr(n),y=a===void 0?0:Vr(a),b=i===void 0?0:Vr(i),T=o===void 0?
0:Vr(o),S=s===void 0?0:Vr(s),E=l===void 0?0:Vr(l),_=c===void 0?0:Vr(c),O=u===void 0?0:Vr(u);Tl(d,f,h,y,b,T,S,E,_,O),On(this),
fe(this,Bt,d),fe(this,Ht,f),fe(this,sr,h),fe(this,Wt,y),fe(this,qt,b),fe(this,Vt,T),fe(this,Yt,S),fe(this,zt,E),fe(this,
Kt,_),fe(this,lr,O)}get years(){return I(this,Ze),g(this,Bt)}get months(){return I(this,Ze),g(this,Ht)}get weeks(){return I(
this,Ze),g(this,sr)}get days(){return I(this,Ze),g(this,Wt)}get hours(){return I(this,Ze),g(this,qt)}get minutes(){return I(
this,Ze),g(this,Vt)}get seconds(){return I(this,Ze),g(this,Yt)}get milliseconds(){return I(this,Ze),g(this,zt)}get microseconds(){
return I(this,Ze),g(this,Kt)}get nanoseconds(){return I(this,Ze),g(this,lr)}get sign(){return I(this,Ze),nl(this)}get blank(){
return I(this,Ze),nl(this)===0}with(t){I(this,Ze);let r=Fm(t),{years:n=g(this,Bt),months:a=g(this,Ht),weeks:i=g(this,sr),
days:o=g(this,Wt),hours:s=g(this,qt),minutes:l=g(this,Vt),seconds:c=g(this,Yt),milliseconds:u=g(this,zt),microseconds:d=g(
this,Kt),nanoseconds:f=g(this,lr)}=r;return new e(n,a,i,o,s,l,c,u,d,f)}negated(){return I(this,Ze),pr(this)}abs(){return I(
this,Ze),new e(Math.abs(g(this,Bt)),Math.abs(g(this,Ht)),Math.abs(g(this,sr)),Math.abs(g(this,Wt)),Math.abs(g(this,qt)),
Math.abs(g(this,Vt)),Math.abs(g(this,Yt)),Math.abs(g(this,zt)),Math.abs(g(this,Kt)),Math.abs(g(this,lr)))}add(t){return I(
this,Ze),sm("add",this,t)}subtract(t){return I(this,Ze),sm("subtract",this,t)}round(t){if(I(this,Ze),t===void 0)throw new TypeError(
"options parameter is required");let r=Tn(this),n=typeof t=="string"?ka("smallestUnit",t):z(t),a=ur(n,"largestUnit","dat\
etime",void 0,["auto"]),{plainRelativeTo:i,zonedRelativeTo:o}=ou(n),s=si(n),l=Kr(n,"halfExpand"),c=ur(n,"smallestUnit","\
datetime",void 0),u=!0;c||(u=!1,c="nanosecond");let d=xn(r,c),f=!0;if(a||(f=!1,a=d),a==="auto"&&(a=d),!u&&!f)throw new RangeError(
"at least one of smallestUnit or largestUnit is required");if(xn(a,c)!==a)throw new RangeError(`largestUnit ${a} cannot \
be smaller than smallestUnit ${c}`);let h={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[c];
if(h!==void 0&&li(s,h,!1),s>1&&kn(c)==="date"&&a!==c)throw new RangeError("For calendar units with roundingIncrement > 1\
, use largestUnit = smallestUnit");if(o){let b=Ka(this),T=g(o,Oe),S=g(o,D),E=g(o,te);return b=sg(E,ao(E,T,S,b),T,S,a,s,c,
l),kn(a)==="date"&&(a="hour"),Pr(b,a)}if(i){let b=tn(this),T=ni({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},b.time),S=g(i,re),E=g(i,D),_=Tr(E,S,Nt(b.date,T.deltaDays),"constrain");return b=og($e(S,{deltaDays:0,hour:0,
minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),$e(_,T),E,a,s,c,l),Pr(b,a)}if(Qr(r))throw new RangeError(`a\
 starting point is required for ${r}s balancing`);if(Qr(a))throw new RangeError(`a starting point is required for ${a}s \
balancing`);let y=tn(this);if(c==="day"){let{quotient:b,remainder:T}=y.time.divmod(Zs),S=y.date.days+b+uo(T,"day");S=Yn(
S,s,l),y=_n({years:0,months:0,weeks:0,days:S},Fe.ZERO)}else y=_n({years:0,months:0,weeks:0,days:0},al(y.time,s,c,l));return Pr(
y,a)}total(t){if(I(this,Ze),t===void 0)throw new TypeError("options argument is required");let r=typeof t=="string"?ka("\
unit",t):z(t),{plainRelativeTo:n,zonedRelativeTo:a}=ou(r),i=ur(r,"unit","datetime",Rn);if(a){let s=Ka(this),l=g(a,Oe),c=g(
a,D),u=g(a,te);return function(d,f,h,y,b){return kn(b)==="time"?uo(Fe.fromEpochNsDiff(f,d),b):em(ag(d,f,h,y,b),f,Mr(h,d),
h,y,b)}(u,ao(u,l,c,s),l,c,i)}if(n){let s=tn(this),l=ni({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},s.time),c=g(n,re),u=g(n,D),d=Tr(u,c,Nt(s.date,l.deltaDays),"constrain");return function(f,h,y,b){if(ai(f,h)==
0)return 0;wa(f),wa(h);let T=ng(f,h,y,b);return b==="nanosecond"?$.default.toNumber(T.time.totalNs):em(T,_t(h),f,null,y,
b)}($e(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),$e(d,l),u,i)}let o=Tn(this);if(Qr(
o))throw new RangeError(`a starting point is required for ${o}s total`);if(Qr(i))throw new RangeError(`a starting point \
is required for ${i}s total`);return uo(tn(this).time,i)}toString(t=void 0){I(this,Ze);let r=z(t),n=Po(r),a=Kr(r,"trunc"),
i=ur(r,"smallestUnit","time",void 0);if(i==="hour"||i==="minute")throw new RangeError('smallestUnit must be a time unit \
other than "hours" or "minutes"');let{precision:o,unit:s,increment:l}=Do(i,n);if(s==="nanosecond"&&l===1)return zs(this,
o);let c=Tn(this),u=Ka(this),d=al(u.time,l,s,a);return u=_n(u.date,d),zs(Pr(u,xn(c,"second")),o)}toJSON(){return I(this,
Ze),zs(this,"auto")}toLocaleString(t=void 0,r=void 0){if(I(this,Ze),typeof Intl.DurationFormat=="function"){let n=new Intl.
DurationFormat(t,r);return sd.call(n,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires In\
tl.DurationFormat."),zs(this,"auto")}valueOf(){Qn("Duration")}static from(t){return Dr(t)}static compare(t,r,n=void 0){let a=Dr(
t),i=Dr(r),o=z(n),{plainRelativeTo:s,zonedRelativeTo:l}=ou(o);if(g(a,Bt)===g(i,Bt)&&g(a,Ht)===g(i,Ht)&&g(a,sr)===g(i,sr)&&
g(a,Wt)===g(i,Wt)&&g(a,qt)===g(i,qt)&&g(a,Vt)===g(i,Vt)&&g(a,Yt)===g(i,Yt)&&g(a,zt)===g(i,zt)&&g(a,Kt)===g(i,Kt)&&g(a,lr)===
g(i,lr))return 0;let c=Tn(a),u=Tn(i),d=Ka(a),f=Ka(i);if(l&&(kn(c)==="date"||kn(u)==="date")){let S=g(l,Oe),E=g(l,D),_=g(
l,te),O=ao(_,S,E,d),M=ao(_,S,E,f);return cr($.default.toNumber($.default.subtract(O,M)))}let h=d.date.days,y=f.date.days;
if(Qr(c)||Qr(u)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");h=Qh(
d.date,s),y=Qh(f.date,s)}let b=d.time.add24HourDays(h),T=f.time.add24HourDays(y);return b.cmp(T)}};Cn(xo,"Temporal.Durat\
ion");var _o=class{constructor(t,r,n="iso8601",a=1972){let i=oe(t),o=oe(r),s=er(n===void 0?"iso8601":mt(n)),l=oe(a);ba(l,
i,o),Wm(this,{year:l,month:i,day:o},s)}get monthCode(){return mm(this,"monthCode")}get day(){return mm(this,"day")}get calendarId(){
return I(this,vr),g(this,D)}with(t,r=void 0){if(I(this,vr),!et(t))throw new TypeError("invalid argument");oi(t);let n=g(
this,D),a=Xt(n,g(this,re),"month-day");return a=va(n,a,Sr(n,t,["year","month","monthCode","day"],[],"partial")),Ja(el(n,
a,_e(z(r))),n)}equals(t){I(this,vr);let r=qh(t);return on(g(this,re),g(r,re))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){
return I(this,vr),Gh(this,No(z(t)))}toJSON(){return I(this,vr),Gh(this)}toLocaleString(t=void 0,r=void 0){return I(this,
vr),new wr(t,r).format(this)}valueOf(){Qn("PlainMonthDay")}toPlainDate(t){if(I(this,vr),!et(t))throw new TypeError("argu\
ment should be an object");let r=g(this,D);return Jt(Jn(r,va(r,Xt(r,g(this,re),"month-day"),Sr(r,t,["year"],[],[])),"con\
strain"),r)}static from(t,r=void 0){return qh(t,r)}};function mm(e,t){I(e,vr);let r=g(e,re);return Mo(e).isoToDate(r,{[t]:!0})[t]}
function lu(e){return Mr(e,$u())}Cn(_o,"Temporal.PlainMonthDay");var mg={instant:()=>Yr($u()),plainDateTimeISO:(e=Gi())=>Nr(
lu(Zt(e)),"iso8601"),plainDateISO:(e=Gi())=>Jt(lu(Zt(e)).isoDate,"iso8601"),plainTimeISO:(e=Gi())=>Sn(lu(Zt(e)).time),timeZoneId:()=>Gi(),
zonedDateTimeISO:(e=Gi())=>{let t=Zt(e);return Ct($u(),t,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(
mg,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});var Ao=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0){
let s=t===void 0?0:oe(t),l=r===void 0?0:oe(r),c=n===void 0?0:oe(n),u=a===void 0?0:oe(a),d=i===void 0?0:oe(i),f=o===void 0?
0:oe(o);wl(s,l,c,u,d,f),qm(this,{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f})}get hour(){return I(
this,nt),g(this,Qe).hour}get minute(){return I(this,nt),g(this,Qe).minute}get second(){return I(this,nt),g(this,Qe).second}get millisecond(){
return I(this,nt),g(this,Qe).millisecond}get microsecond(){return I(this,nt),g(this,Qe).microsecond}get nanosecond(){return I(
this,nt),g(this,Qe).nanosecond}with(t,r=void 0){if(I(this,nt),!et(t))throw new TypeError("invalid argument");oi(t);let n=vu(
t,"partial"),a=vu(this),{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Object.assign(a,n),d=_e(z(r));
return{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=yl(i,o,s,l,c,u,d),new e(i,o,s,l,c,u)}add(t){return I(
this,nt),dm("add",this,t)}subtract(t){return I(this,nt),dm("subtract",this,t)}until(t,r=void 0){return I(this,nt),am("un\
til",this,t,r)}since(t,r=void 0){return I(this,nt),am("since",this,t,r)}round(t){if(I(this,nt),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?ka("smallestUnit",t):z(t),n=si(r),a=Kr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",Rn);return li(n,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i],!1),
Sn(_u(g(this,Qe),n,i,a))}equals(t){I(this,nt);let r=Vn(t);return Au(g(this,Qe),g(r,Qe))===0}toString(t=void 0){I(this,nt);
let r=z(t),n=Po(r),a=Kr(r,"trunc"),i=ur(r,"smallestUnit","time",void 0);if(i==="hour")throw new RangeError('smallestUnit\
 must be a time unit other than "hour"');let{precision:o,unit:s,increment:l}=Do(i,n);return Kh(_u(g(this,Qe),l,s,a),o)}toJSON(){
return I(this,nt),Kh(g(this,Qe),"auto")}toLocaleString(t=void 0,r=void 0){return I(this,nt),new wr(t,r).format(this)}valueOf(){
Qn("PlainTime")}static from(t,r=void 0){return Vn(t,r)}static compare(t,r){let n=Vn(t),a=Vn(r);return Au(g(n,Qe),g(a,Qe))}};
Cn(Ao,"Temporal.PlainTime");var $o=class{constructor(t,r,n="iso8601",a=1){let i=oe(t),o=oe(r),s=er(n===void 0?"iso8601":
mt(n)),l=oe(a);ba(i,o,l),Vm(this,{year:i,month:o,day:l},s)}get year(){return bn(this,"year")}get month(){return bn(this,
"month")}get monthCode(){return bn(this,"monthCode")}get calendarId(){return I(this,xt),g(this,D)}get era(){return bn(this,
"era")}get eraYear(){return bn(this,"eraYear")}get daysInMonth(){return bn(this,"daysInMonth")}get daysInYear(){return bn(
this,"daysInYear")}get monthsInYear(){return bn(this,"monthsInYear")}get inLeapYear(){return bn(this,"inLeapYear")}with(t,r=void 0){
if(I(this,xt),!et(t))throw new TypeError("invalid argument");oi(t);let n=g(this,D),a=Xt(n,g(this,re),"year-month");return a=
va(n,a,Sr(n,t,["year","month","monthCode"],[],"partial")),Za(mo(n,a,_e(z(r))),n)}add(t,r=void 0){return I(this,xt),pm("a\
dd",this,t,r)}subtract(t,r=void 0){return I(this,xt),pm("subtract",this,t,r)}until(t,r=void 0){return I(this,xt),im("unt\
il",this,t,r)}since(t,r=void 0){return I(this,xt),im("since",this,t,r)}equals(t){I(this,xt);let r=ro(t);return on(g(this,
re),g(r,re))===0&&nn(g(this,D),g(r,D))}toString(t=void 0){return I(this,xt),Jh(this,No(z(t)))}toJSON(){return I(this,xt),
Jh(this)}toLocaleString(t=void 0,r=void 0){return I(this,xt),new wr(t,r).format(this)}valueOf(){Qn("PlainYearMonth")}toPlainDate(t){
if(I(this,xt),!et(t))throw new TypeError("argument should be an object");let r=g(this,D);return Jt(Jn(r,va(r,Xt(r,g(this,
re),"year-month"),Sr(r,t,["day"],[],[])),"constrain"),r)}static from(t,r=void 0){return ro(t,r)}static compare(t,r){let n=ro(
t),a=ro(r);return on(g(n,re),g(a,re))}};function bn(e,t){I(e,xt);let r=g(e,re);return Mo(e).isoToDate(r,{[t]:!0})[t]}Cn(
$o,"Temporal.PlainYearMonth");var qS=wr.prototype.resolvedOptions,Ro=class{constructor(t,r,n="iso8601"){if(arguments.length<
1)throw new TypeError("missing argument: epochNanoseconds is required");let a=il(t),i=mt(r),{tzName:o,offsetMinutes:s}=zn(
i);if(s===void 0){let l=tl(o);if(!l)throw new RangeError(`unknown time zone ${o}`);i=l.identifier}else i=Xu(s);zm(this,a,
i,er(n===void 0?"iso8601":mt(n)))}get calendarId(){return I(this,ve),g(this,D)}get timeZoneId(){return I(this,ve),g(this,
Oe)}get year(){return Ut(this,"year")}get month(){return Ut(this,"month")}get monthCode(){return Ut(this,"monthCode")}get day(){
return Ut(this,"day")}get hour(){return Ya(this,"hour")}get minute(){return Ya(this,"minute")}get second(){return Ya(this,
"second")}get millisecond(){return Ya(this,"millisecond")}get microsecond(){return Ya(this,"microsecond")}get nanosecond(){
return Ya(this,"nanosecond")}get era(){return Ut(this,"era")}get eraYear(){return Ut(this,"eraYear")}get epochMilliseconds(){
return I(this,ve),jr(g(this,te),"floor")}get epochNanoseconds(){return I(this,ve),lg(g(this,te))}get dayOfWeek(){return Ut(
this,"dayOfWeek")}get dayOfYear(){return Ut(this,"dayOfYear")}get weekOfYear(){return Ut(this,"weekOfYear")?.week}get yearOfWeek(){
return Ut(this,"weekOfYear")?.year}get hoursInDay(){I(this,ve);let t=g(this,Oe),r=Xr(this).isoDate,n=dr(r.year,r.month,r.
day+1),a=Wn(t,r),i=Wn(t,n);return uo(Fe.fromEpochNsDiff(i,a),"hour")}get daysInWeek(){return Ut(this,"daysInWeek")}get daysInMonth(){
return Ut(this,"daysInMonth")}get daysInYear(){return Ut(this,"daysInYear")}get monthsInYear(){return Ut(this,"monthsInY\
ear")}get inLeapYear(){return Ut(this,"inLeapYear")}get offset(){return I(this,ve),bu(En(g(this,Oe),g(this,te)))}get offsetNanoseconds(){
return I(this,ve),En(g(this,Oe),g(this,te))}with(t,r=void 0){if(I(this,ve),!et(t))throw new TypeError("invalid zoned-dat\
e-time-like");oi(t);let n=g(this,D),a=g(this,Oe),i=En(a,g(this,te)),o=Xr(this),s={...Xt(n,o.isoDate),...o.time,offset:bu(
i)};s=va(n,s,Sr(n,t,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond",
"offset"],"partial"));let l=z(r),c=co(l),u=Ks(l,"prefer"),d=jo(n,s,_e(l)),f=ci(s.offset);return Ct(Qs(d.isoDate,d.time,"\
option",f,a,c,u,!1),a,n)}withPlainTime(t=void 0){I(this,ve);let r=g(this,Oe),n=g(this,D),a=Xr(this).isoDate,i;return i=t===
void 0?Wn(r,a):Pt(r,$e(a,g(Vn(t),Qe)),"compatible"),Ct(i,r,n)}withTimeZone(t){I(this,ve);let r=Zt(t);return Ct(g(this,te),
r,g(this,D))}withCalendar(t){I(this,ve);let r=Fo(t);return Ct(g(this,te),g(this,Oe),r)}add(t,r=void 0){return I(this,ve),
fm("add",this,t,r)}subtract(t,r=void 0){return I(this,ve),fm("subtract",this,t,r)}until(t,r=void 0){return I(this,ve),om(
"until",this,t,r)}since(t,r=void 0){return I(this,ve),om("since",this,t,r)}round(t){if(I(this,ve),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?ka("smallestUnit",t):z(t),n=si(r),a=Kr(r,"halfExpand"),i=ur(r,
"smallestUnit","time",Rn,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i];
if(li(n,o,o===1),i==="nanosecond"&&n===1)return Ct(g(this,te),g(this,Oe),g(this,D));let s=g(this,Oe),l=g(this,te),c=Xr(this),
u;if(i==="day"){let d=c.isoDate,f=dr(d.year,d.month,d.day+1),h=Wn(s,d),y=Wn(s,f),b=$.default.subtract(y,h);u=Fe.fromEpochNsDiff(
l,h).round(b,a).addToEpochNs(h)}else{let d=xu(c,n,i,a),f=En(s,l);u=Qs(d.isoDate,d.time,"option",f,s,"compatible","prefer",
!1)}return Ct(u,s,g(this,D))}equals(t){I(this,ve);let r=no(t),n=g(this,te),a=g(r,te);return!!$.default.equal($.default.BigInt(
n),$.default.BigInt(a))&&!!Km(g(this,Oe),g(r,Oe))&&nn(g(this,D),g(r,D))}toString(t=void 0){I(this,ve);let r=z(t),n=No(r),
a=Po(r),i=function(f){return An(f,"offset",["auto","never"],"auto")}(r),o=Kr(r,"trunc"),s=ur(r,"smallestUnit","time",void 0);
if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let l=function(f){return An(f,"\
timeZoneName",["auto","never","critical"],"auto")}(r),{precision:c,unit:u,increment:d}=Do(s,a);return Zh(this,c,n,l,i,{unit:u,
increment:d,roundingMode:o})}toLocaleString(t=void 0,r=void 0){I(this,ve);let n=z(r),a=Object.create(null);if(function(l,c,u,d){
if(c==null)return;let f=Reflect.ownKeys(c);for(let h=0;h<f.length;h++){let y=f[h];if(!u.some(b=>Object.is(b,y))&&Object.
prototype.propertyIsEnumerable.call(c,y)){let b=c[y];l[y]=b}}}(a,n,["timeZone"]),n.timeZone!==void 0)throw new TypeError(
"ZonedDateTime toLocaleString does not accept a timeZone option");if(a.year===void 0&&a.month===void 0&&a.day===void 0&&
a.era===void 0&&a.weekday===void 0&&a.dateStyle===void 0&&a.hour===void 0&&a.minute===void 0&&a.second===void 0&&a.fractionalSecondDigits===
void 0&&a.timeStyle===void 0&&a.dayPeriod===void 0&&a.timeZoneName===void 0&&(a.timeZoneName="short"),a.timeZone=g(this,
Oe),Xh(a.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");let i=new wr(t,a),
o=qS.call(i).calendar,s=g(this,D);if(s!=="iso8601"&&o!=="iso8601"&&!nn(o,s))throw new RangeError(`cannot format ZonedDat\
eTime with calendar ${s} in locale with calendar ${o}`);return i.format(Yr(g(this,te)))}toJSON(){return I(this,ve),Zh(this,
"auto")}valueOf(){Qn("ZonedDateTime")}startOfDay(){I(this,ve);let t=g(this,Oe);return Ct(Wn(t,Xr(this).isoDate),t,g(this,
D))}getTimeZoneTransition(t){I(this,ve);let r=g(this,Oe);if(t===void 0)throw new TypeError("options parameter is require\
d");let n=An(typeof t=="string"?ka("direction",t):z(t),"direction",["next","previous"],Rn);if(n===void 0)throw new TypeError(
"direction option is required");if(Xh(r)||r==="UTC")return null;let a=g(this,te),i=n==="next"?ed(r,a):Tu(r,a);return i===
null?null:Ct(i,r,g(this,D))}toInstant(){return I(this,ve),Yr(g(this,te))}toPlainDate(){return I(this,ve),Jt(Xr(this).isoDate,
g(this,D))}toPlainTime(){return I(this,ve),Sn(Xr(this).time)}toPlainDateTime(){return I(this,ve),Nr(Xr(this),g(this,D))}static from(t,r=void 0){
return no(t,r)}static compare(t,r){let n=no(t),a=no(r),i=g(n,te),o=g(a,te);return $.default.lessThan($.default.BigInt(i),
$.default.BigInt(o))?-1:$.default.greaterThan($.default.BigInt(i),$.default.BigInt(o))?1:0}};function Xr(e){return Mr(g(
e,Oe),g(e,te))}function Ut(e,t){I(e,ve);let r=Xr(e).isoDate;return Mo(e).isoToDate(r,{[t]:!0})[t]}function Ya(e,t){return I(
e,ve),Xr(e).time[t]}Cn(Ro,"Temporal.ZonedDateTime");var Ve=Object.freeze({__proto__:null,Duration:xo,Instant:ko,Now:mg,PlainDate:So,
PlainDateTime:Eo,PlainMonthDay:_o,PlainTime:Ao,PlainYearMonth:$o,ZonedDateTime:Ro}),LM=class{toTemporalInstant(){return Yr(
zr(Date.prototype.valueOf.call(this)))}}.prototype.toTemporalInstant,VS=[ko,So,Eo,xo,_o,Ao,$o,Ro];for(let e of VS){let t=Object.
getOwnPropertyDescriptor(e,"prototype");(t.configurable||t.enumerable||t.writable)&&(t.configurable=!1,t.enumerable=!1,t.
writable=!1,Object.defineProperty(e,"prototype",t))}var Lr=ie(Le(),1);var De=ie(Le(),1),p=ie(Le(),1),Dt=ie(Le(),1),pt=ie(Le(),1);var bv=ie(vg(),1),wv=ie(Tg(),1),Tv=ie(Sg(),1),kv=ie(xg(),1),Sv=ie(Ag(),1);var ld=class{add(t,r,n){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else
(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],r&&this[a][n?"unshift":"push"](r)},this)}run(t,r){this[t]=
this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}},cd=class{constructor(t){this.jsep=t,this.
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
tE=new ld;Object.assign(fr,{hooks:tE,plugins:new cd(fr),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"\
Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"\
UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,
PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,
SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,
"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(
["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});fr.max_unop_len=
fr.getMaxKeyLen(fr.unary_ops);fr.max_binop_len=fr.getMaxKeyLen(fr.binary_ops);var ue=e=>new fr(e).parse(),rE=Object.getOwnPropertyNames(
class{});Object.getOwnPropertyNames(fr).filter(e=>!rE.includes(e)&&ue[e]===void 0).forEach(e=>{ue[e]=fr[e]});ue.Jsep=fr;
var nE="ConditionalExpression",aE={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===
e.QUMARK_CODE){this.index++;let n=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),
this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError("Expected expression"),r.node=
{type:nE,test:n,consequent:a,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let o=n;for(;o.right.operator&&e.binary_ops[o.
right.operator]<=.9;)o=o.right;r.node.test=o.right,o.right=r.node,r.node=n}}else this.throwError("Expected :")}})}};ue.plugins.
register(aE);var Cv=ie(Le(),1),me=ie(Le(),1),vt=ie(Le(),1),Be=ie(Le(),1),Ca=ie(Le(),1),Fv=ie(Le(),1);var iE=(e,t,r)=>{if(t.length===1&&t[0]===r){let n=!1;try{let a={};e(a)===a&&(n=!0)}catch{}if(n){let a;try{throw new Error}catch(i){
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
shouldRun:r==="always"||r==="once"&&e,run:iE},inputStabilityCheck:{shouldRun:n==="always"||n==="once"&&e,run:oE}}};var KM=Symbol();var GM=Object.getPrototypeOf({});var fE=class{constructor(e){this.value=e}deref(){return this.value}},hE=typeof WeakRef<"u"?WeakRef:fE,mE=0,Ig=1;function xl(){
return{s:mE,v:void 0,o:null,p:null}}function Og(e,t={}){let r=xl(),{resultEqualityCheck:n}=t,a,i=0;function o(){let s=r,
{length:l}=arguments;for(let d=0,f=l;d<f;d++){let h=arguments[d];if(typeof h=="function"||typeof h=="object"&&h!==null){
let y=s.o;y===null&&(s.o=y=new WeakMap);let b=y.get(h);b===void 0?(s=xl(),y.set(h,s)):s=b}else{let y=s.p;y===null&&(s.p=
y=new Map);let b=y.get(h);b===void 0?(s=xl(),y.set(h,s)):s=b}}let c=s,u;if(s.s===Ig)u=s.v;else if(u=e.apply(null,arguments),
i++,n){let d=a?.deref?.()??a;d!=null&&n(d,u)&&(u=d,i!==0&&i--),a=typeof u=="object"&&u!==null||typeof u=="function"?new hE(
u):u}return c.s=Ig,c.v=u,u}return o.clearCache=()=>{r=xl(),o.resetResultsCount()},o.resultsCount=()=>i,o.resetResultsCount=
()=>{i=0},o}function gE(e,...t){let r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...a)=>{let i=0,o=0,s,l={},
c=a.pop();typeof c=="object"&&(l=c,c=a.pop()),lE(c,`createSelector expects an output function after the inputs, but rece\
ived: [${typeof c}]`);let u={...r,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:h=Og,argsMemoizeOptions:y=[],devModeChecks:b={}}=u,
T=$g(f),S=$g(y),E=dE(a),_=d(function(){return i++,c.apply(null,arguments)},...T),O=!0,M=h(function(){o++;let K=Rg(E,arguments);
if(s=_.apply(null,K),process.env.NODE_ENV!=="production"){let{identityFunctionCheck:Z,inputStabilityCheck:H}=pE(O,b);if(Z.
shouldRun&&Z.run(c,K,s),H.shouldRun){let we=Rg(E,arguments);H.run({inputSelectorResults:K,inputSelectorResultsCopy:we},{
memoize:d,memoizeOptions:T},arguments)}O&&(O=!1)}return s},...S);return Object.assign(M,{resultFunc:c,memoizedResultFunc:_,
dependencies:E,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>s,recomputations:()=>i,
resetRecomputations:()=>{i=0},memoize:d,argsMemoize:h})};return Object.assign(n,{withTypes:()=>n}),n}var k=gE(Og),yE=Object.
assign((e,t=k)=>{cE(e,`createStructuredSelector expects first argument to be an object where each property is a selector\
, instead received a ${typeof e}`);let r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((o,s,l)=>(o[r[l]]=s,
o),{}))},{withTypes:()=>yE});var Jr=ie(Le(),1);var Eb=ie(ea(),1),xb=ie(ea(),1);var Ab=ie(Le(),1),$b=ie(Le(),1),Ib=ie(ea(),1);var ft=ie(Le(),1);var _s=ie(Le(),1);var o0=ie(Le(),1);var ce=ie(Le(),1);var Ci=ie(Le(),1);var Fa=ie(ea(),1);var lw=ie(ea(),1),jN=ie(Il(),1),Xp=ie(Il(),1),cw=ie(ea(),1),LN=ie(Il(),1);var Ec=ie(Le(),1),It=ie(Le(),1),Q=ie(Le(),1);var N=ie(Le(),1),Aw=ie(Le(),1);var Gl=ie(bd(),1),Rw=ie(bd(),1),Ke=ie(Le(),1),L=ie(Le(),1),Ce=e=>({left:e}),Fl=Ce,R=e=>({right:e}),P=e=>"left"in e,xe=e=>"\
right"in e;var ze=e=>{if(xe(e))return e.right;throw typeof e.left=="string"?new Error(e.left):e.left},Nd=(e,t)=>xe(e)?e.right:t;var FE=()=>Ve.Now.plainDateISO(),nr=e=>e instanceof Ve.PlainDate,UE=e=>Ve.PlainDate.from(e),Hy=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/,
Jo=e=>typeof e=="string"&&Hy.test(e),Ul=(e,t)=>typeof e=="string"?/^\d{4}-\d{2}-\d{2}$/.test(e)?Ve.PlainDate.from(e).toZonedDateTime(
{timeZone:t,plainTime:{hour:0}}):Hy.test(e)?Ve.PlainDateTime.from(e).toZonedDateTime(t):e.includes("[")?Ve.ZonedDateTime.
from(e).withTimeZone(t):Ve.Instant.from(e).toZonedDateTimeISO(t):e instanceof Ve.Instant?e.toZonedDateTimeISO(t):e instanceof
Ve.ZonedDateTime?e.withTimeZone(t):e.toZonedDateTime({timeZone:t,plainTime:{hour:0}});var BE=(e,t)=>Ve.PlainDate.compare(e,t);var Wy=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],HE=["Sun","Mon","Tue","Wed","Thu","Fri",
"Sat"],Kd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wd=["January","February","March","Ap\
ril","May","June","July","August","September","October","November","December"],Pd=(e,t)=>{let r=e.toPlainDate(),n=t.toPlainDate();
return r.since(n,{largestUnit:"days"}).days},qy=e=>{let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||
t[0]}`},Gg=e=>Wy[e.dayOfWeek%7],wi=e=>`${qy(e.day)} ${Kd[e.month-1]}`,as=e=>`${qy(e.day)} ${Kd[e.month-1]} ${e.year}`,WE=Lr.union(
[Lr.literal("weekdayShort"),Lr.literal("dayOfMonth"),Lr.literal("weekdayLong"),Lr.literal("fullDate"),Lr.literal("monthL\
ong"),Lr.literal("monthShort"),Lr.literal("monthNumber"),Lr.literal("year"),Lr.literal("monthYear")]),qE=(e,t,r={})=>{try{
return VE(e,t,r)}catch{return String(e)}},VE=(e,t,r={})=>{var n;let a=(n=r.timeZone)!=null?n:"Europe/London",i=Ul(e,a);switch(t){case"\
weekdayShort":return HE[i.dayOfWeek%7];case"dayOfMonth":return String(i.day);case"weekdayLong":return Wy[i.dayOfWeek%7];case"\
fullDate":return`${wd[i.month-1]} ${i.day}, ${i.year}`;case"monthLong":return wd[i.month-1];case"monthShort":return Kd[i.
month-1];case"monthNumber":return String(i.month);case"year":return String(i.year);case"monthYear":return`${wd[i.month-1]}\
 ${i.year}`}},Ml=e=>e.slice(11,16),Jg=(e,t,r)=>{if(t===0)return"today";if(t>0)return t===1?"tomorrow":t<7?`on ${Gg(e)}`:
t<=14?`${Gg(e)} ${wi(e)}`:e.year===r.year?wi(e):as(e);let n=-t;return n===1?"yesterday":n<7?`${n} days ago`:n<14?"1 week\
 ago":n<22?`${Math.floor(n/7)} weeks ago`:e.year===r.year?wi(e):as(e)},Dd=(e,t={})=>{try{return YE(e,t)}catch{return String(
e)}},YE=(e,t={})=>{var r,n;let a=(r=t.timeZone)!=null?r:"Europe/London",i=(n=t.now)!=null?n:Ve.Now.zonedDateTimeISO(a),o=Ul(
e,a),s=Pd(o,i);if(Jo(e))return`${Jg(o,s,i)}, ${Ml(e)}`;if(s>0)return Jg(o,s,i);let l=Math.abs(o.epochMilliseconds-i.epochMilliseconds),
c=Math.floor(l/1e3),u=Math.floor(c/60),d=Math.floor(u/60),f=Math.floor(d/24),h=Math.floor(f/7);return c<45?"just now":c<
90?"1 minute ago":u<45?`${u} minutes ago`:u<90?"1 hour ago":d<6?`${Math.round(u/60)} hours ago`:s===0?"today":f<2?"yeste\
rday":f<7?`${f} days ago`:f<14?"1 week ago":f<22?`${h} weeks ago`:o.year===i.year?`${wi(o)}`:`${as(o)}`},zE=(e,t,r={})=>{
try{return KE(e,t,r)}catch{return t?`${String(e)} \u2013 ${String(t)}`:String(e)}},KE=(e,t,r={})=>{var n,a;let i=(n=r.timeZone)!=
null?n:"Europe/London",o=(a=r.now)!=null?a:Ve.Now.zonedDateTimeISO(i),s=Ul(e,i);if(!t)return Dd(e,r);let l=Ul(t,i);if(Pd(
l,s)===0){let O=Dd(e,r);return Jo(e)&&Jo(t)?`${O}\u2013${Ml(t)}`:O}let c=Math.abs(Pd(l,s))+1,u=c===1?"1 day":`${c} days`,
d=s.year,f=l.year,h=o.year,y=d!==h||d!==f,b=f!==h||d!==f,T=Jo(e)?`, ${Ml(e)}`:"",S=Jo(t)?`, ${Ml(t)}`:"",E=y?as(s):wi(s),
_=b?as(l):wi(l);return`${u}, from ${E}${T} to ${_}${S}`},GE=(e,t,r,n)=>{let a=JE(e),i=XE(t),o=tx(n);if(!a||!i||!o||typeof r!=
"string")return;let s;try{s=a.toZonedDateTimeISO(r).toPlainDate()}catch{return}for(let l=0;l<=7;l++){let c=s.add({days:l});
if(!o.has(c.dayOfWeek))continue;let u=c.toZonedDateTime({timeZone:r,plainTime:i}).toInstant().epochMilliseconds;if(u>a.epochMilliseconds)
return u}},JE=e=>{try{if(typeof e=="number")return Number.isFinite(e)?Ve.Instant.fromEpochMilliseconds(e):void 0;if(typeof e==
"string")return Ve.Instant.from(e)}catch{}},ZE=/^([01]\d|2[0-3]):([0-5]\d)$/,XE=e=>{let t=typeof e=="string"?ZE.exec(e):
null;return t?new Ve.PlainTime(Number(t[1]),Number(t[2])):void 0},QE={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7},ex=new Set(
[1,2,3,4,5,6,7]),tx=e=>{if(e==null)return ex;if(typeof e!="string")return;let t=e.split(",").map(n=>n.trim().toLowerCase()).
filter(n=>n.length>0);if(t.length===0)return;let r=new Set;for(let n of t){let a=QE[n];if(a===void 0)return;r.add(a)}return r};var rx=(e,t)=>Yi(e)?e(t):e,ts=()=>!0,nx=e=>e instanceof Error,ax=e=>nx(e)?e.message:String(e),ix=e=>e===void 0?[]:Array.
isArray(e)?e:[e];var ta=(e,t)=>e===t?0:e===void 0?1:t===void 0?-1:nr(e)&&nr(t)?Ve.PlainDate.compare(e,t):typeof e=="number"&&typeof t=="n\
umber"?e-t:typeof e=="string"&&typeof t=="string"?e.localeCompare(t):String(e).localeCompare(String(t));var Vy={};var le=e=>tt.union([e,tt.undefined]),Re=le(tt.boolean),U=le(tt.string),mr=le(tt.number),Nn=tt.record(tt.string,tt.unknown),
ox=tt.array(Nn),sx=tt.record(tt.string,tt.string),uj=tt.record(tt.string,tt.boolean);var lx=Me.intersection([Me.type({version:Me.number,verticalId:Me.string,answers:Nn,derived:Me.type({entities:Me.array(Me.string),
features:Me.array(Me.string)})}),Me.partial({notes:Me.string})]),cx=Me.keyof({clone:null,orgGen:null,orgGenHighRisk:null}),
ux=Me.type({id:Me.string,label:Me.string,weight:Me.number,triggered:Me.boolean}),dx=Me.type({score:Me.number,factors:Me.array(
ux),strategy:cx}),dj=Me.intersection([lx,Me.type({risk:dx})]);var px=function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.
slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};function fx(e){return e}function Yy(e,t,r,n,a,i,o,s,l){
switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(
n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:
return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}
var Gd=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,px([a],n,!1))}}},hx=function(e){return e._tag==="L\
eft"},mx=function(e){return e._tag==="Right"};var gx=function(e){return{_tag:"Right",right:e}};function zy(e){return function(t,r){return e.map(t,function(){return r})}}
function yx(e){var t=zy(e);return function(r){return t(r,void 0)}}function vx(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}var Ky=gx,bx=Gd(2,function(e,t){return Bl(e)?e:t(e.right)}),Gy=function(e,t){return Yy(e,Tx(t))},wx=function(e,t){return Yy(
e,Sx(t))},Jd="Either",Tx=function(e){return function(t){return Bl(t)?t:Ky(e(t.right))}},Jy={URI:Jd,map:Gy},pj=Gd(2,zy(Jy)),
fj=yx(Jy),kx=function(e){return function(t){return Bl(t)?t:Bl(e)?e:Ky(t.right(e.right))}},Sx=kx,Ex={URI:Jd,map:Gy,ap:wx,
chain:bx},xx={URI:Jd,fromEither:fx},Bl=hx,_x=mx;var hj=Gd(2,vx(Ex)),mj={fromEither:xx.fromEither},cn=e=>Dt.union([e,Dt.array(e)]),Ae=e=>{let t=r=>typeof r=="string";return new Dt.Type(
`lax(${e.name})`,t,(r,n)=>t(r)?Dt.success(r):Dt.failure(r,n),Dt.identity)};function Md(e){return e.length===0?"":e[0].context.map(r=>r.key).filter(Boolean).join(".")}function Ax(e){if(e.length===
0)return"No errors";if(e.length===1){let a=e[0],i=Md(e);return`Invalid value${i?` at ${i}`:""}: ${a.message||a.value}`}let t={};
e.forEach(a=>{let i=Md([a]);t[i]||(t[i]=[]),t[i].push(a)});let r=Object.keys(t).length,n=e.length;return`${n} validation\
 error${n>1?"s":""} in ${r} location${r>1?"s":""}`}var $x=pt.type({type:pt.literal("static"),name:pt.string,value:pt.unknown}),Rx=pt.type({type:pt.literal("dynamic"),name:pt.string,
formula:pt.string}),Jl=pt.recursion("pluginParam",()=>pt.union([$x,Rx,pt.type({type:pt.literal("complex"),params:pt.array(
Jl)})])),Hl=e=>e?.dataType!==void 0,Ix=Ae(p.union([p.literal("embedded"),p.literal("storage"),p.literal("realtime"),p.literal(
"callable")])),Ox=Ae(p.union([p.literal("list"),p.literal("value")])),Zy=Ae(p.union([p.literal("public"),p.literal("priv\
ate")])),Cx=Ae(p.union([p.literal("columns"),p.literal("grid"),p.literal("spatial"),p.literal("flow")])),Nx=Ae(p.union([
p.literal("x"),p.literal("y")])),Px=Ae(p.union([p.literal("jpeg"),p.literal("png"),p.literal("webp")])),Zl=Ae(p.union([p.literal(
"small"),p.literal("medium")])),Xy=Ae(p.union([p.literal("inline"),p.literal("masterDetail")])),Qy=Ae(p.union([p.literal(
"basic"),p.literal("multiline"),p.literal("stringArray")])),Zd=Ae(p.union([p.literal("none"),p.literal("uppercase"),p.literal(
"lowercase")])),Dx=Ae(p.union([p.literal("image"),p.literal("file"),p.literal("video"),p.literal("audio")])),ev=Ae(p.union(
[p.literal("integer"),p.literal("slider"),p.literal("decimal"),p.literal("money"),p.literal("intArray")])),Xd=Ae(p.union(
[p.literal("date"),p.literal("datetime"),p.literal("time")])),Mx=Ae(p.union([p.literal("single"),p.literal("multiple")])),
Qd=Ae(p.union([p.literal("select"),p.literal("radio"),p.literal("combobox")])),tv=Ae(p.union([p.literal("global"),p.literal(
"user"),p.literal("variant"),p.literal("group"),p.literal("all"),p.literal("inbox")])),rv=Ae(p.union([p.literal("light"),
p.literal("dark"),p.literal("auto")])),ep=Ae(p.union([p.literal("setUserProfile"),p.literal("triggerWorldcupSync"),p.literal(
"socialFollow"),p.literal("socialUnfollow"),p.literal("socialLike"),p.literal("socialUnlike"),p.literal("kickFromHome")])),
jx=Ae(p.union([p.literal("contained"),p.literal("outlined"),p.literal("text"),p.literal("menu"),p.literal("pill")])),Lx=Ae(
p.union([p.literal("musicgen"),p.literal("minimax-music-2.5")])),Fx=Ae(p.literal("gpt-4o-transcribe")),Ux=Ae(p.union([p.literal(
"flux-schnell"),p.literal("nano-banana-2")])),Xl=Ae(p.union([p.literal("claude-haiku-5-5"),p.literal("claude-haiku-4-5"),
p.literal("claude-sonnet-5")])),Bx=Ae(p.union([p.literal("none"),p.literal("menu"),p.literal("tabs")])),Hx=Ae(p.union([p.literal(
"onWrite"),p.literal("onTimer")])),Wx=Ae(p.union([p.literal("repeat"),p.literal("once"),p.literal("grid")])),nv=Ae(p.union(
[p.literal("tiles"),p.literal("bar"),p.literal("audioOnly"),p.literal("minimal")])),tp=Ae(p.union([p.literal("video"),p.literal(
"audio")])),qx=Ae(p.union([p.literal("anyone"),p.literal("admins")])),Vx=Ae(p.literal("Person")),gj=Ae(p.union([p.literal(
"variable"),p.literal("text"),p.literal("number"),p.literal("boolean"),p.literal("temporal"),p.literal("parentRef"),p.literal(
"image"),p.literal("imageUpload")])),yj=Ae(p.union([p.literal("id"),p.literal("type"),p.literal("_scope"),p.literal("cre\
atedAt"),p.literal("updatedAt"),p.literal("createdBy"),p.literal("updatedBy"),p.literal("createdByUid"),p.literal("updat\
edByUid"),p.literal("isDeleted"),p.literal("_parent")])),Yx=Ae(p.union([p.literal("tabGroup"),p.literal("tab"),p.literal(
"folder")])),zx=Ae(p.union([p.literal("aiQuery"),p.literal("aiChat"),p.literal("fetchData"),p.literal("imageGeneration"),
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
move:p.string,fallbackMove:p.string,delayMs:p.union([p.number,p.string]),minDelayMs:p.union([p.number,p.string]),maxDecisions:p.number,
maxDailyDecisions:p.number,journal:p.boolean}),Jx=p.partial({functionName:p.string,args:p.string}),sv=p.partial({dataType:p.string,
scope:tv,groupKey:p.string}),rp=p.partial({maxColumns:p.number,columnBreaks:p.array(p.number),axis:Nx,mode:Cx,minColumnWidth:p.number,
columnWeights:p.array(p.number),cols:p.union([p.number,p.string]),rows:p.union([p.number,p.string]),rowHeight:p.number}),
np=p.partial({x:p.union([p.number,p.string]),y:p.union([p.number,p.string]),w:p.union([p.number,p.string]),h:p.union([p.number,
p.string])}),ap=p.partial({marginBottom:p.number,justifySelf:p.union([p.literal("left"),p.literal("center"),p.literal("r\
ight")]),overlay:p.union([p.literal("topLeft"),p.literal("topRight"),p.literal("bottomLeft"),p.literal("bottomRight")]),
overlayInset:p.number,overlayWidth:p.number,maxWidth:p.number}),Zx=p.partial({width:p.number,height:p.number}),is=p.partial(
{bg:p.string,surface:p.string,accent:p.string,text:p.string,mutedText:p.string,border:p.string}),lv=p.type({style:Bx}),ip=p.intersection(
[Zx,p.partial({format:Px})]),op=p.type({expression:p.string,errorMessage:p.string}),Xx=p.intersection([p.type({id:p.string,
label:p.string}),p.partial({group:p.string})]),cv=p.union([p.string,Xx]),uv=p.intersection([p.type({allowedChildTypes:p.array(
p.string)}),p.partial({icon:p.string,color:p.string,category:p.string,label:p.string,labelField:p.string,detail:p.string,
badge:p.string,badgeColor:p.string,lockedFields:p.union([p.string,p.array(p.string)]),canEdit:p.union([p.boolean,p.string])})]),
Ql=p.intersection([p.type({type:p.string}),p.partial({id:p.string})]),Qx=p.union([ev,p.undefined]),e_=p.type({x:p.number,
y:p.number}),t_=p.type({rotation:p.number,zoom:p.number,pan:e_}),dv=p.intersection([p.type({name:p.string}),p.partial({url:p.string,
ext:p.string,aiPrompt:p.string,previewUrl:p.string,editState:t_,takenAt:p.string})]),r_=p.intersection([p.type({name:p.string}),
p.partial({url:p.string,ext:p.string,previewUrl:p.string,takenAt:p.string})]),n_=p.union([dv,p.array(r_)]),a_=p.intersection(
[p.type({title:p.string}),p.partial({body:p.string,ok:p.string,cancel:p.string,destructive:p.boolean,info:p.boolean})]),
pv=p.partial({params:p.array(p.string),script:p.string,confirm:a_}),i_=p.partial({type:p.string,idField:p.string}),fv=p.partial(
{name:p.string,type:p.string,isList:p.boolean,multiline:p.boolean,variant:p.string,compute:p.string,isTransient:p.boolean,
description:p.string,fileNameFormula:p.string,aiEnabled:p.boolean,aiSystemPromptFormula:p.string,searchFormula:p.string}),
o_=p.intersection([p.type({name:p.string,fields:p.array(fv)}),p.partial({icon:p.string,parent:i_,writeAccess:qx,wellKnown:Vx})]),
hv=p.intersection([p.type({id:p.string,version:p.number,hash:p.string}),p.partial({omitted:p.array(p.string)})]),s_=p.intersection(
[p.type({name:p.string,node:p.string,kind:Ox}),p.partial({default:p.string})]),l_=p.type({name:p.string,slot:p.string,fn:p.string,
hostType:p.string}),mv=p.intersection([p.type({id:p.string,version:p.number}),p.partial({hash:p.string,slots:p.array(s_),
seams:p.array(l_)})]),_i=p.partial({dataType:p.string,sort:cn(Kx),whereClause:p.string,source:Ix,scope:tv,groupKey:p.string,
callable:Jx,span:Gx}),c_=p.intersection([p.type({name:p.string,type:p.string}),p.partial({actionLabel:p.string,actionMenu:p.union(
[p.boolean,p.string]),actions:p.record(p.string,pv),aiEnabled:p.boolean,aiSystemPromptFormula:p.string,appLogo:p.string,
args:p.string,audioSourceUrl:p.string,authDescription:p.string,authMode:Zy,authTitle:p.string,autoAdvance:p.boolean,botActors:cn(
ov),canAdd:p.union([p.boolean,p.string]),canEdit:p.union([p.boolean,p.string]),collapsedByDefault:p.union([p.boolean,p.string]),
collapsible:p.union([p.boolean,p.string]),color:p.string,compute:p.unknown,containerStyle:ap,contentMaxWidth:p.number,customCss:p.string,
data:_i,deepHelp:p.string,displayMode:nv,displayName:p.string,durationSec:p.union([p.number,p.string]),examples:p.array(
p.string),feature:mv,fetchUrl:p.string,focusIdentity:p.string,format:p.union([Xd,p.string]),formConfig:sv,functionName:ep,
headerLogo:p.string,help:p.string,hidden:p.union([p.boolean,p.string]),hideHeader:p.union([p.boolean,p.string]),hideNav:p.union(
[p.boolean,p.string]),hideTopBar:p.union([p.boolean,p.string]),htmlTemplate:p.string,icon:p.string,identity:p.string,idiom:p.union(
[Qd,p.string]),idleDescription:p.string,idleTitle:p.string,imageOutputOptions:ip,imageSource:p.string,inputPlaceholder:p.string,
isDerived:p.boolean,isOwnScope:p.boolean,isRecord:p.boolean,isRepeating:p.boolean,isTransient:p.boolean,itemLabel:p.string,
iterationLabel:p.string,label:p.string,language:p.string,layout:rp,library:hv,lyrics:p.string,max:p.union([p.number,p.string]),
maxLength:p.union([p.number,p.string]),maxSizeMb:p.union([p.number,p.string]),maxTiles:p.union([p.number,p.string]),maxUserTurns:p.number,
mediaMode:tp,min:p.union([p.number,p.string]),mockAudioUrl:p.string,mockEnabled:p.boolean,mockImageUrl:p.string,mockReplies:p.string,
mockResultCount:p.number,mockResults:p.string,mockTranscript:p.string,model:p.union([Xl,p.string]),multiple:p.boolean,navigation:lv,
noCreditsDescription:p.string,noCreditsTitle:p.string,nodeTypes:p.record(p.string,uv),notifications:cn(av),nounLabel:p.string,
onSuccessNavigate:p.string,orderField:p.string,orgLogin:p.boolean,pageSize:p.union([p.number,p.string]),parameters:p.string,
pickerValues:p.union([p.string,p.array(cv)]),place:np,placeholder:p.string,placeholderIcon:p.string,pluginName:p.string,
pluginParams:p.array(Jl),prompt:p.string,promptTemplate:p.string,publishDataType:p.string,publishScope:p.string,publishVariant:p.string,
purpose:p.string,recordKey:p.string,recordValue:p.string,refreshCallables:p.array(p.string),reorderable:p.union([p.boolean,
p.string]),required:p.union([p.boolean,p.string]),resultObjectType:p.string,returns:p.string,returnTypeHint:p.string,roomKey:p.string,
rootType:p.string,runningDescription:p.string,runningTitle:p.string,script:p.string,showCamera:p.boolean,showCommit:p.boolean,
showEdit:p.boolean,showFilePicker:p.boolean,showHeader:p.union([p.boolean,p.string]),showSearch:p.boolean,size:Zl,sourceExpression:p.string,
speakReplies:p.boolean,speechLang:p.string,steeringChips:p.string,step:p.union([p.number,p.string]),submitObjectType:p.string,
successMessage:p.string,summary:p.string,textTransform:Zd,theme:rv,themeColors:is,themeColorsDark:is,transitions:cn(iv),
typeDescription:p.string,userAvatarUid:p.string,validation:cn(op),value:p.unknown,variant:p.string,voiceInput:p.boolean})]),
vj=De.type({verticalId:De.string,title:De.string,entities:De.array(De.string),seedSlots:De.array(De.string),labels:De.array(
De.string)}),u_=De.keyof({light:null,dark:null,auto:null}),d_=De.partial({labels:De.record(De.string,De.string),theme:De.partial(
{preset:u_,colors:is}),entityRenames:De.record(De.string,De.string),seedSlots:De.array(De.string)}),bj=De.intersection([
De.type({appName:De.string}),d_]),sp={dataSourceType:["embedded","storage","realtime","callable"],featureSlotKind:["list",
"value"],authMode:["public","private"],mode:["columns","grid","spatial","flow"],axis:["x","y"],imageFormat:["jpeg","png",
"webp"],inputSize:["small","medium"],subsectionVariant:["inline","masterDetail"],textVariant:["basic","multiline","strin\
gArray"],textTransform:["none","uppercase","lowercase"],fileVariant:["image","file","video","audio"],numberVariant:["int\
eger","slider","decimal","money","intArray"],temporalVariant:["date","datetime","time"],pickerVariant:["single","multipl\
e"],pickerIdiom:["select","radio","combobox"],dataScope:["global","user","variant","group","all","inbox"],themePreset:["\
light","dark","auto"],callableButtonFunction:["setUserProfile","triggerWorldcupSync","socialFollow","socialUnfollow","so\
cialLike","socialUnlike","kickFromHome"],callableButtonVariant:["contained","outlined","text","menu","pill"],audioGenerationModel:[
"musicgen","minimax-music-2.5"],transcribeModel:["gpt-4o-transcribe"],imageGenerationModel:["flux-schnell","nano-banana-\
2"],textGenerationModel:["claude-haiku-5-5","claude-haiku-4-5","claude-sonnet-5"],navigationStyle:["none","menu","tabs"],
transitionTrigger:["onWrite","onTimer"],spanMode:["repeat","once","grid"],videoDisplayMode:["tiles","bar","audioOnly","m\
inimal"],mediaMode:["video","audio"],objectTypeWriteAccess:["anyone","admins"],wellKnownType:["Person"],fieldTypeBuiltin:[
"variable","text","number","boolean","temporal","parentRef","image","imageUpload"],recordMetaField:["id","type","_scope",
"createdAt","updatedAt","createdBy","updatedBy","createdByUid","updatedByUid","isDeleted","_parent"]};var gv=new Set(sp.fieldTypeBuiltin),p_=e=>gv.has(e),wj=sp.fieldTypeBuiltin.filter(p_);var f_=e=>{if(typeof e!="string")return[];let t=[];for(let r of e.split(",")){let n=r.trim();if(!n)continue;let a=n.indexOf(
":");if(a===-1){t.push({name:n});continue}let i=n.slice(0,a).trim(),o=n.slice(a+1).trim();i&&t.push(o?{name:i,type:o}:{name:i})}
return t},Zg=e=>f_(e).map(t=>t.name),h_="__interp";var ec="app",Ai="appNode",hr="tree",os="screen",tc="form",ms="flow",Br="flowStep",rc="repeat",nc="callableButton";var Ia="content",gs="textInput",ys="numberInput",$i="variable",aa="function",ia="const",vs="booleanInput",bs="temporalIn\
put",ws="selectInput",Ri="fileInput",lp="pluginLeaf",cp="mediaRoom",m_="videoRoom",Ts="subsection",g_=["app","appNode","\
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
return(t=yv[e])!=null?t:e};var vv=e=>{var t;return(t=up[e])!=null?t:{type:e}};var Tj=Object.fromEntries(Object.entries(up).map(([e,t])=>[`${t.type}:${t.variant}`,e]));var Xg="MatchExpression",Qg="MatchArm",jd="->",ey=123,ty=125,S_=44,E_=e=>e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||e===
36||e===95||e>=128,fi=e=>e.code,Td=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",x_=(e,t)=>{if(Td(t)&&t.type===
"ConditionalExpression"){let r=t.test;if(Td(r)&&r.type==="BinaryExpression"&&r.operator===jd)return{type:Qg,test:r.left,
consequent:{type:"ConditionalExpression",test:r.right,consequent:t.consequent,alternate:t.alternate}}}return Td(t)&&t.type===
"BinaryExpression"&&t.operator===jd?{type:Qg,test:t.left,consequent:t.right}:e.throwError("Expected `condition -> expres\
sion` in match block")},__={name:"orgigglyMatch",init(e){e.addBinaryOp(jd,.5),e.hooks.add("gobble-token",function(r){if(this.
gobbleSpaces(),!this.expr.startsWith("match",this.index))return;let n=this.index+5;if(n<this.expr.length&&E_(this.expr.charCodeAt(
n)))return;let a=this.index;this.index=n,this.gobbleSpaces();let i;if(fi(this)!==ey){let s=!1;try{s=this.gobbleExpression()}catch{
s=!1}if(this.gobbleSpaces(),!s||fi(this)!==ey){this.index=a;return}i=s}this.index++;let o=[];for(;;){if(this.gobbleSpaces(),
fi(this)===ty){this.index++;break}Number.isNaN(fi(this))&&this.throwError("Unclosed match block \u2014 expected `}`");let s=this.
gobbleExpression();if(s||this.throwError("Expected `condition -> expression` in match block"),o.push(x_(this,s)),this.gobbleSpaces(),
fi(this)===S_){this.index++;continue}if(fi(this)===ty){this.index++;break}this.throwError("Expected `,` or `}` after mat\
ch arm")}o.length===0&&this.throwError("A match block needs at least one arm"),r.node=i?{type:Xg,scrutinee:i,arms:o}:{type:Xg,
arms:o}})}},ry="LetExpression",ny=61,A_=62,Ev=e=>e>=65&&e<=90||e>=97&&e<=122||e===36||e===95||e>=128,ay=e=>Ev(e)||e>=48&&
e<=57,kd=e=>e.code,$_=e=>e,Vo=e=>e,R_=new Set(["??","||"]),hi=e=>{let t=$_(e);if(t.type==="BinaryExpression"&&t.operator===
";"){let[r,n]=hi(t.left),a=n?Vo({type:"BinaryExpression",operator:";",left:n,right:t.right}):t.right;return[r,a]}if(t.type===
"BinaryExpression"&&R_.has(String(t.operator))){let[r,n]=hi(t.left);return n?[r,Vo({...t,left:n})]:[e,void 0]}if(t.type===
"ConditionalExpression"){let[r,n]=hi(t.test);if(n)return[r,Vo({...t,test:n})];let[a,i]=hi(t.alternate);return i?[Vo({...t,
alternate:a}),i]:[e,void 0]}if(t.type==="ArrowFunctionExpression"){let[r,n]=hi(t.body);return n?[Vo({...t,body:r}),n]:[e,
void 0]}return[e,void 0]},I_={name:"orgigglyLet",init(e){e.hooks.add("gobble-token",function(r){if(this.gobbleSpaces(),!this.
expr.startsWith("let",this.index))return;let n=this.index+3;if(n<this.expr.length&&ay(this.expr.charCodeAt(n)))return;let a=this.
index;this.index=n,this.gobbleSpaces();let i=this.index;if(!Ev(kd(this))){/^[^\s=]+\s*=(?![=>])/.test(this.expr.slice(this.
index))&&this.throwError("Expected a name after let"),this.index=a;return}for(;ay(kd(this));)this.index++;let o=this.expr.
slice(i,this.index);if(this.gobbleSpaces(),kd(this)!==ny){this.index=a;return}let s=this.expr.charCodeAt(this.index+1);if(s===
ny||s===A_){this.index=a;return}this.index++;let l=this.gobbleExpression();l||this.throwError(`Expected an initialiser a\
fter let ${o} =`);let[c,u]=hi(l);r.node=u?{type:ry,id:o,init:c,body:u}:{type:ry,id:o,init:c}})}},rs=e=>e,ss=e=>typeof e==
"object"&&e!==null&&typeof e.type=="string",dp=(e,t)=>e.type==="BinaryExpression"&&e.operator===t,O_=new Set(["||","&&",
"??"]),yi=(e,t,r)=>({type:"BinaryExpression",operator:e,left:t,right:r}),Ld=e=>{if(dp(e,";")){let[t,r]=Ld(rs(e.left));return[
t,r?yi(";",r,e.right):rs(e.right)]}if(e.type==="ConditionalExpression"){let[t,r]=Ld(rs(e.alternate));return r?[{...e,alternate:t},
r]:[e]}return[e]},Fd=(e,t)=>{if(!dp(e,";"))return t(e);let r=Fd(rs(e.right),t);return r?yi(";",e.left,r):void 0},iy=e=>dp(
e,"=")?e:void 0,Ud=e=>{if(e.type==="BinaryExpression"&&O_.has(String(e.operator))&&ss(e.left)){let t=String(e.operator),
r=Fd(e.left,n=>{let a=iy(n);return a?yi("=",a.left,Ud(yi(t,a.right,e.right))):void 0});if(r)return r}if(e.type==="Condit\
ionalExpression"&&ss(e.test)){let[t,r]=Ld(rs(e.alternate)),n=Fd(e.test,a=>{let i=iy(a);return i?yi("=",i.left,Ud({...e,test:i.
right,alternate:t})):void 0});if(n)return r?yi(";",n,r):n}return e},Bd=e=>{let t={...e};for(let r of Object.keys(e)){if(r===
"parent")continue;let n=e[r];ss(n)?t[r]=Bd(n):Array.isArray(n)&&(t[r]=n.map(a=>ss(a)?Bd(a):a))}return Ud(t)},C_={name:"o\
rgigglyAssign",init(e){e.hooks.add("after-all",function(r){ss(r.node)&&(r.node=Bd(r.node))})}},N_=()=>{ue._orgigglyTemplatePluginRegistered||
(ue.plugins.register(Sv.default),ue._orgigglyTemplatePluginRegistered=!0),ue._orgigglyObjectPluginRegistered||(ue.plugins.
register(wv.default),ue._orgigglyObjectPluginRegistered=!0),ue._orgigglyRegexPluginRegistered||(ue.plugins.register(Tv.default),
ue._orgigglyRegexPluginRegistered=!0),ue._orgigglySpreadPluginRegistered||(ue.plugins.register(kv.default),ue._orgigglySpreadPluginRegistered=
!0),ue._orgigglyArrowPluginRegistered||(ue.plugins.register(bv.default),ue._orgigglyArrowPluginRegistered=!0),ue._orgigglyAtUnaryRegistered||
(ue.addUnaryOp("@"),ue._orgigglyAtUnaryRegistered=!0),ue._orgigglysemicolonRegistered||(ue.addBinaryOp(";",1),ue._orgigglysemicolonRegistered=
!0),ue._orgigglyAssignmentRegistered||(ue.addBinaryOp("=",2,!0),ue._orgigglyAssignmentRegistered=!0),ue._orgigglyNullishCoalescingRegistered||
(ue.addBinaryOp("??",1),ue._orgigglyNullishCoalescingRegistered=!0),ue._orgigglyMatchPluginRegistered||(ue.plugins.register(
__),ue._orgigglyMatchPluginRegistered=!0),ue._orgigglyLetPluginRegistered||(ue.plugins.register(I_),ue._orgigglyLetPluginRegistered=
!0),ue._orgigglyAssignPluginRegistered||(ue.plugins.register(C_),ue._orgigglyAssignPluginRegistered=!0)};N_();var Wl=e=>e.
type==="Literal",Ti=e=>e.type==="BinaryExpression",ac=e=>e.type==="CallExpression",_r=e=>e.type==="Identifier",ls=e=>e.type===
"MemberExpression",xv=e=>e.type==="ThisExpression",_v=e=>e.type==="UnaryExpression",pp=e=>e.type==="ConditionalExpressio\
n";var P_=e=>e.type==="Compound",Av=e=>e.type==="ArrayExpression",$v=e=>e.type==="TemplateLiteral",D_=e=>e.type==="TaggedTe\
mplateExpression",Rv=e=>e.type==="ObjectExpression",oy=e=>e&&e.type==="SpreadElement",Iv=e=>e.type==="ArrowFunctionExpre\
ssion",M_=e=>e.type==="MatchExpression",Ov=e=>e.type==="LetExpression",sy=e=>typeof e=="object"&&e!==null&&"type"in e,j_=e=>{
let t=e;for(;t.parent;)t=t.parent;let r=t._source;return r||""},L_=e=>j_(e).slice(e.start,e.end),gt=(e,t,r,n)=>{let a=e;
if(a.parent=n,_r(e)){let i=t.indexOf(e.name,r),o=i+e.name.length;return a.start=i,a.end=o,{start:i,end:o}}if(Wl(e)){let i=e.
raw;if(i){let c=t.indexOf(i,r),u=c+i.length;return a.start=c,a.end=u,{start:c,end:u}}let o=String(e.value),s=t.indexOf(o,
r),l=s+o.length;return a.start=s,a.end=l,{start:s,end:l}}if(Ti(e)){let i=gt(e.left,t,r,a),o=gt(e.right,t,i.end,a);return a.
start=i.start,a.end=o.end,{start:i.start,end:o.end}}if(_v(e)){let i=t.indexOf(e.operator,r),o=gt(e.argument,t,i+e.operator.
length,a);return a.start=i,a.end=o.end,{start:i,end:o.end}}if(ac(e)){let i=gt(e.callee,t,r,a),o=i.end;for(let c of e.arguments)
o=gt(c,t,o,a).end;let l=t.indexOf(")",o)+1;return a.start=i.start,a.end=l,{start:i.start,end:l}}if(ls(e)){let i=gt(e.object,
t,r,a);if(e.computed){let o=gt(e.property,t,i.end,a),l=t.indexOf("]",o.end)+1;return a.start=i.start,a.end=l,{start:i.start,
end:l}}else{let o=gt(e.property,t,i.end,a);return a.start=i.start,a.end=o.end,{start:i.start,end:o.end}}}if(pp(e)){let i=gt(
e.test,t,r,a),o=gt(e.consequent,t,i.end,a),s=gt(e.alternate,t,o.end,a);return a.start=i.start,a.end=s.end,{start:i.start,
end:s.end}}if(Av(e)){let i=t.indexOf("[",r),o=i+1;for(let c of e.elements)c&&(o=gt(c,t,o,a).end);let l=t.indexOf("]",o)+
1;return a.start=i,a.end=l,{start:i,end:l}}if(Rv(e)){let i=t.indexOf("{",r),o=i+1;for(let c of e.properties){let u=c;u.key&&
(o=gt(u.key,t,o,a).end),u.value&&!u.shorthand&&(o=gt(u.value,t,o,a).end)}let l=t.indexOf("}",o)+1;return a.start=i,a.end=
l,{start:i,end:l}}if($v(e)){let i=t.indexOf("`",r),o=i+1;for(let c of e.expressions)o=gt(c,t,o,a).end;let l=t.indexOf("`",
o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(xv(e)){let i=t.indexOf("this",r),o=i+4;return a.start=i,a.end=o,{start:i,
end:o}}if(P_(e)){let i=e.body||[];if(i.length===0)return a.start=r,a.end=r,{start:r,end:r};let o=r,s=r,l=r;for(let c=0;c<
i.length;c++){let u=gt(i[c],t,o,a);c===0&&(s=u.start),l=u.end,o=u.end}return a.start=s,a.end=l,{start:s,end:l}}{let i=-1,
o=r,s=r;for(let[l,c]of Object.entries(e))if(!(l==="type"||l==="parent")){if(Array.isArray(c)){for(let u of c)if(sy(u)){let d=gt(
u,t,s,a);i===-1&&(i=d.start),o=d.end,s=d.end}}else if(sy(c)){let u=gt(c,t,s,a);i===-1&&(i=u.start),o=u.end,s=u.end}}return i===
-1?(a.start=r,a.end=r,{start:r,end:r}):(a.start=i,a.end=o,{start:i,end:o})}},F_=e=>{let t=ue(e);return gt(t,e,0),t._source=
e,t},Oa="@",U_=(e,t,r)=>{if(Cv.string.is(e)){let a=e.startsWith(Oa);if(a){let i=Nv(e);return{isFormula:a,value:i,targetCodec:t,
name:r}}}return{isFormula:!1,value:e,targetCodec:t,name:r}},Nv=e=>e.slice(Oa.length).trim(),fp=e=>e.startsWith(Oa)?Nv(e):
e;var Pv=e=>!e.startsWith(Oa)&&e.includes("${"),hp=e=>{if(!Pv(e))return e;let t=e.trim();return t.length>1&&t.startsWith("\
`")&&t.endsWith("`")?Oa+e:`${Oa}\`${B_(e)}\``},B_=e=>{let t="",r=0,n=o=>{for(t+=e[r++];r<e.length&&e[r]!==o;)e[r]==="\\"&&
(t+=e[r++]),r<e.length&&(t+=e[r++]);r<e.length&&(t+=e[r++])},a=()=>{let o=1;for(;r<e.length;){let s=e[r];if(s==="'"||s===
'"')n(s);else if(s==="`")t+=e[r++],i(!0);else if(s==="{"&&o++,s==="}"&&o--,t+=e[r++],o===0)return}},i=o=>{for(;r<e.length;){
let s=e[r];if(s==="\\")t+=e[r++],r<e.length&&(t+=e[r++]);else if(s==="`"){if(o){t+=e[r++];return}t+="\\`",r++}else s==="\
$"&&e[r+1]==="{"?(t+="${",r+=2,a()):t+=e[r++]}};return i(!1),t};var H_=me.union([me.literal(gs),me.literal(vs),me.literal(ys),me.literal(bs),me.literal(ws),me.literal(Ri),me.literal(lp),
me.literal(tc),me.literal(ms),me.literal(Br),me.literal(rc),me.literal(nc),me.literal(ec),me.literal(Ai),me.literal(os),
me.literal(hr),me.literal($i),me.literal(aa),me.literal(ia),me.literal(Ia),me.literal(Ts),me.literal(cp),me.literal(m_)]),
W_=me.recursion("node",()=>me.intersection([me.record(me.string,me.unknown),me.partial({children:me.array(W_)})])),q_={type:"\
app",name:""},V_={};var Y_={include:ts,traverseChildren:ts,traverseParent:ts},ic={...Y_,direction:"forward"},Mn=e=>({...ic,...e});var z_=vt.union([vt.literal("before"),vt.literal("after"),vt.literal("into")]),K_=vt.union([vt.literal("top"),vt.literal(
"bottom"),vt.literal("center")]),G_=vt.type({target:vt.string,action:z_,position:K_}),Sj=vt.type({currentDropZone:vt.union(
[vt.undefined,G_]),src:vt.string}),J_=Be.keyof({html:null,sandboxed:null}),Dv=Be.keyof({spotify:null}),Z_=Be.partial({name:Be.string,
type:Be.string,description:Be.string,exampleValue:Be.string,default:Be.string}),X_=Be.intersection([Be.type({name:Be.string,
parameters:Be.array(Z_),htmlTemplate:Be.string}),Be.partial({icon:Be.string,color:Be.string,description:Be.string,image:dv,
runtime:J_,embedsThirdPartyMedia:Be.boolean,connections:Be.array(Dv),widgetOwner:Be.string})]);var Q_=Ca.intersection([Ca.type({name:Ca.string,type:Ca.string}),fv]);var eA=new Set(sp.recordMetaField),ks=(...e)=>new Set(e),tA=ks("id"),rA=ks("createdAt","updatedAt","createdBy","updatedB\
y"),nA=ks("createdByUid","updatedByUid"),Ej=ks("type","_scope","isDeleted"),xj=ks("_parent");var _j=new Set([...tA,...rA,...nA]),aA=([e,t])=>({...t,name:e}),iA=e=>!!e[1],mp=e=>Object.entries(e).filter(iA).map(aA),
Je=(e,t,r)=>(n={})=>({name:"",type:e,...n,...t,children:r?mp(r):void 0}),Hr=(e,t)=>(r={},n={})=>{let a=mp(r),i=n.submitObjectType?
Mv():[],o=[...a,...i];return{name:"",type:e,...t,...n,children:o.length>0?o:void 0}},Sd=Je($i),Mv=()=>mp({id:Sd(),createdAt:Sd(),
createdBy:Sd()}),jv=Hr(ec),Aj=Hr(Ai),$j=Hr(Ai,{variant:"tabGroup"}),Rj=Hr(Ai,{variant:"tab"}),Ij=Hr(Ai,{variant:"folder"}),
Oj=Hr(os),Cj=Hr(Ts),Nj=Hr(tc),Pj=Hr(ms),Dj=Hr(rc,{isRepeating:!0}),Mj=Je(Br),jj=Je(Br,{variant:"aiQuery"}),Lj=Je(Br,{variant:"\
aiChat"}),Fj=Je(Br,{variant:"fetchData"}),Uj=Je(Br,{variant:"imageGeneration"}),Bj=Je(Br,{variant:"audioGeneration"}),Hj=Je(
Br,{variant:"transcribe"}),Wj=Je(Br,{variant:"publishData"}),qj=Je(Br,{variant:"script"}),Vj=Je(nc),Yj=Je(gs),zj=Je(ys),
Kj=Je(vs),Gj=Je(bs),Jj=Je(ws),Zj=Je(Ri),Xj=Je(Ia),Yo=Je($i),Qj=Je(aa),eL=Je(ia),tL=Je(lp),rL=Je(cp),nL=Hr(Ts,{isRepeating:!0,
variant:"masterDetail"}),aL=Hr(Ts,{isRepeating:!0,isRecord:!0,variant:"masterDetail"}),Lv=Je(hr,{isRepeating:!0},{value:Yo(),
expanded:Yo(),dragAndDropState:Yo(),isDrawerClosed:Yo(),leftPanelWidth:Yo()});var gp=(e,t=".")=>{let r=e.lastIndexOf(t),n=r===-1?"":e.slice(0,r),a=r===-1?e:e.slice(r+1);return[n,a]},oA=(e,t=".")=>{let r=e.
indexOf(t),n=r===-1?e:e.slice(0,r),a=r===-1?"":e.slice(r+1);return[n,a]},xr=(e,t=".")=>e.filter(Boolean).join(t),sA=e=>Xc(
e,/(?=[A-Z])/).map(t=>nu(t)),Uv=e=>sA(e).join(" ");var lA=e=>{switch(e){case gs:case ys:case vs:case bs:case ws:case Ri:case lp:return!0;default:return!1}},cA=e=>{switch(e){case ec:case Ai:case os:case hr:case tc:case ms:case rc:case Ts:
return!0;default:return!1}},Bv=e=>{let t=[];return t.push(e),t.push(...Ss(e).flatMap(Bv)),t},Ss=e=>e.children||[],uA=(e,t)=>Hv(
e).filter(r=>r.name===t),dA=e=>{let t=new Map,r=(n,a)=>{t.set(n,a);for(let i of Ss(n))r(i,n)};return r(e,null),t},Hv=e=>Wv(
e)?[e]:e.isOwnScope||e.isRepeating?[e]:[e,...Ss(e).flatMap(Hv)],yp=(e,t,r)=>{let n=e[r.name];if(!n||n.length===1)return r.
name;let a=t.get(r);if(!a)throw new Error(`Node with name ${r.name} has no parent`);return`${yp(e,t,a)}$${r.name}`},vp=e=>cA(
e.type),pA=e=>e.type==="form"||!!e.submitObjectType,Wv=e=>!vp(e),bp=e=>!!(e.isRepeating||e.isOwnScope),fA=e=>e,at=(e,t)=>t,
oc=(e,t,r)=>r,hA=(e,t,r)=>r,mA=(e,t,r,n)=>n,gA=(e,t,r)=>r,qv=(e,t)=>t,yA=(e,t,r)=>r,Vv=(e,t,r)=>r,vA=(e,t)=>t,Da=e=>e,Es=k(
Da,Bv),oL=k(Da,gr("compute")),bA=k(Da,gr("name")),sc=k(Es,e=>Hn(e,gr("name"))),wp=k(Da,dA),Yv=k(Es,sc,wp,(e,t,r)=>wt(e,n=>yp(
t,r,n))),zv=k(wp,qv,(e,t)=>{var r;return(r=e.get(t))!=null?r:void 0}),Pn=k(sc,wp,qv,(e,t,r)=>yp(e,t,r)),ql=k(sc,Yv,at,(e,t,r)=>{
let n=t[r];return n?[n]:e[r]||[]}),cs=k(Da,sc,Yv,at,(e,t,r)=>r,(e,t,r,n,a)=>{let i=r[n];if(i)return R(i);let o=t[n];if(!o){
let[,s]=oA(n,"$");return s?cs(e,s,a):Fl(`Node with id ${n} not found`)}if(o.length===1)return R(o[0]);if(!a){let s=Ss(e).
find(c=>c.name===n);if(s)return R(s);let l=uA(e,n);return l.length===1?R(l[0]):Fl({matches:o.map(c=>Pn(e,c))})}return cs(
a,n)}),sL=k(cs,ze),lL=k(bA,Uv),Ii=(e,t,r)=>k(Da,n=>{let a=n[t];return a===void 0&&r!==void 0&&(a=rx(r,n)),U_(a,e,t)}),wA=Ii(
Fv.string,"nounLabel","Item"),TA=e=>{let{value:t,isFormula:r}=wA(e);return`${r?t:`'${t}'`} + ' ' + ($index + 1)`},kA=k(Da,
TA),cL=Ii(Re,"multiline"),uL=k(Es,(e,t)=>t,(e,t)=>{let r=e.flatMap(n=>{var a;return _i.is(n.data)&&n.data.source===t?(a=
n.data.dataType)!=null?a:[]:[]});return fa(r)}),dL=k(Es,e=>{var t;let r=[],n=new Set;for(let a of e){if(!_i.is(a.data)||
a.data.source!=="callable")continue;let i=a.data.dataType,o=a.data.callable;if(!i||!o?.functionName)continue;let s=`${i}\
::${o.functionName}::${(t=o.args)!=null?t:""}`;n.has(s)||(n.add(s),r.push({typeName:i,functionName:o.functionName,...o.args?
{args:o.args}:{}}))}return r}),SA=e=>{if(e.type===hr){let r=e.nodeTypes;return r&&typeof r=="object"?Object.keys(r):[]}let t=_i.
is(e.data)?e.data.dataType:void 0;return t?[t]:[]},EA=k(Es,(e,t)=>t,(e,t)=>{var r,n;let a=new Map;for(let o of e)if(_i.is(
o.data)&&o.data.source===t){let s=(r=o.data.scope)!=null?r:"global";for(let l of SA(o)){let c=(n=a.get(l))!=null?n:new Set;
s==="all"?(c.add("global"),c.add("user")):c.add(s),a.set(l,c)}}let i=[];for(let[o,s]of a)for(let l of s)i.push({typeName:o,
scope:l});return i}),lc=[],V=e=>e;var oa=e=>{var t;return(t=e.instance)!=null?t:V_},Er=e=>e.context,Tp=k(V,gr("def")),dn=k(oa,e=>{var t;return(t=e?.data)!=
null?t:lc}),kp=k(oa,e=>{var t;return(t=e?.navStack)!=null?t:lc}),pn=k(oa,e=>{var t;return(t=e?.lengths)!=null?t:lc}),ki=k(
dn,e=>wt(e,gr("pointer"))),cc=k(pn,e=>wt(e,gr("pointer"))),Sp=k(oa,e=>e.cursor||""),Ep=k(oa,e=>e.cursorArgs),Kv=k(oa,e=>{
var t;return(t=e.navStackArgs)!=null?t:lc}),xA={objects:[]},_A=k(V,e=>{var t;return(t=e.repo)!=null?t:xA}),Gv="@@orgicor\
e/INIT_APP",Jv="@@orgicore/INIT_APP_INSTANCE",Zv="@@orgicore/UPDATE_DEF",Xv="@@orgicore/UPDATE_CONTEXT_DATA",Qv="@@orgic\
ore/UPDATE_REPO",eb="@@orgicore/UPDATE_VALUE",tb="@@orgicore/CLEAR_VALUE",rb="@@orgicore/INSERT_SLOT",nb="@@orgicore/SWA\
P_SLOT",ab="@@orgicore/MOVE_SLOT",ib="@@orgicore/SET_CURSOR",ob="@@orgicore/PUSH_CURSOR",sb="@@orgicore/POP_CURSOR",lb="\
@@orgicore/MOVE_NODE",cb="@@orgicore/REMOVE_NODE",ub="@@orgicore/CLEAR_SUBTREE",db="@@orgicore/BULK_ACTION",pb="@@orgico\
re/LOAD_MORE",xp="@@orgicore/SET_PAGE",AA=(e,t)=>({type:Gv,payload:{appDef:e,appInstance:t}}),$A=e=>({type:Jv,payload:{appInstance:e}}),
RA=e=>({type:Zv,payload:{appDef:e}}),IA=e=>({type:Xv,payload:{data:e}}),OA=e=>({type:Qv,payload:{repo:e}}),fb=(e,t)=>({type:eb,
payload:{pointerKey:e,value:t}}),hb=e=>({type:tb,payload:{pointerKey:e}}),mb=(e,t)=>({type:rb,payload:{pointerKey:e,index:t}}),
CA=(e,t,r)=>({type:nb,payload:{pointerKey:e,fromIndex:t,toIndex:r}}),NA=(e,t)=>({type:ab,payload:{pointerKey:e,toIndex:t}}),
gb=(e,t)=>({type:ib,payload:{pointerKey:e,args:t}}),PA=(e,t)=>({type:ob,payload:{pointerKey:e,args:t}}),DA=()=>({type:sb}),
MA=(e,t,r)=>({type:lb,payload:{pointerKey:e,toPointerKey:t,target:r}}),yb=e=>({type:cb,payload:{pointerKey:e}}),vb=e=>({
type:ub,payload:{pointerKey:e}}),jA=e=>({type:db,payload:{actions:e}}),LA=e=>({type:pb,payload:{pointerKey:e}}),FA=(e,t)=>({
type:xp,payload:{pointerKey:e,page:t}}),ly={insertSlot:mb,removeNode:yb,updateValue:fb,clearValue:hb,clearSubtree:vb,setCursor:gb},
cy={initApp:AA,initAppInstance:$A,updateDef:RA,updateContextData:IA,updateRepo:OA,updateValue:fb,clearValue:hb,clearSubtree:vb,
insertSlot:mb,removeNode:yb,swapSlot:CA,moveSlot:NA,setCursor:gb,pushCursor:PA,popCursor:DA,moveNode:MA,bulkAction:jA,loadMore:LA,
setPage:FA},UA=e=>{let t={};for(let r in cy){let n=cy[r];t[r]=(...a)=>e(n(...a))}return t},bb=e=>{let{parent:t}=e;return[
...t?bb(t):[],e]},BA=e=>{let t=e.match(/^([\w\s()$]+)(?:\[(\d+)\])?$/);if(!t)throw new Error(`part "${e}" invalid syntax`);
let[,r,n]=t;return{nodeId:r,index:n!==void 0?Number(n):0}},_p=e=>xr(Tb(e).map(wb)),HA=e=>{let{scope:t,node:r,isIteration:n}=e,
a=_p(t);return n?a:xr([a,Pn(t.node,r)])},xs=e=>{let{parent:t,node:r}=e;if(!t)return"";let n=Pn(t.node,r);return xr([_p(t),
n])},wb=e=>{let{parent:t,node:r,index:n}=e,a=t?Pn(t.node,r):"";return bp(r)?`${a}[${n}]`:a},WA=e=>({node:e,index:0,key:""}),
uy=e=>e.parent===void 0,Tb=e=>{let{parent:t}=e;return[...t?Tb(t):[],e]},kb=(e,t)=>e.parent===t.parent&&e.node===t.node,qA=(e,t)=>{
let r=t.find(n=>kb(e,n));return r?r.index:-1},VA=(e,t,r)=>{let n=t.map(a=>kb(e,a)?{...a,index:r}:a);return xr(n.map(wb))},
hL=gr("key"),YA=(e,t)=>{let{parent:r,node:n,key:a}=e,i=ql(n,t);if(i.length)return n===i[0]?{key:xr([r?.key,t]),isDeclared:!0}:
{key:xr([a,t]),isDeclared:!0};if(t.includes("$")){let o=t.slice(t.lastIndexOf("$")+1);if(ql(n,o).length)return{key:xr([a,
t]),isDeclared:!0}}return{key:xr([a,t]),isDeclared:!1}},Ed=(e,t,r)=>{let n=zA(e,t,r);return n?Pn(e,n):r},zA=(e,t,r)=>{let n=ql(
e,r);if(n.length!==0)return n.length===1?n[0]:Sb(e,t,r)},Sb=(e,t,r)=>{let n=ql(t,r);if(n.length)return n[0];let a=zv(e,t);
if(a)return Sb(e,a,r)},KA=(e,t)=>{if(t==="")return R(WA(e));let[r,n]=gp(t),{nodeId:a,index:i}=BA(n),o=Vl({def:e},r);if(P(
o))return o;let s=o.right,l=cs(e,a,s.node);if(P(l))return l;let c=l.right,u={parent:s,node:c,index:i,key:t},d=_p(u);if(d!==
t){let f=Vl({def:e},d);return P(f)?R(u):f}return R(u)},GA=(e,t)=>{let[r,n]=gp(t),a=n.endsWith("]"),o=Vl({def:e},a?t:r);if(P(
o))return o;let s=o.right,l=a?R(s.node):cs(e,n,s.node);if(P(l))return l;let c=l.right,u={scope:s,node:c,isIteration:a,key:t},
d=HA(u);if(d!==t){let f=Ur({def:e},d);return P(f)?R(u):f}return R(u)},Vl=k(Tp,at,KA),Dn=k(Vl,e=>{if(P(e))throw new Error(
`Invalid scope key: ${e.left}`);return e.right}),Ur=k(Tp,at,GA),B=k(Ur,e=>{if(P(e))throw new Error(`Invalid pointer key:\
 ${e.left}`);return e.right}),Ap=k(Tp,oc,(e,t)=>B({def:e},t)),JA=k(B,gr("node")),$p=k(V,()=>"",B),Rp=k(Dn,bb),na=k(V,Dn,
oc,(e,t,r)=>qA(t,Rp(e,r))),ZA=k(V,Dn,oc,mA,(e,t,r,n)=>{let a=Rp(e,r);return VA(t,a,n)}),jl=k(Dn,oc,YA),Zo=(e,t,r)=>{let n=Ur(
e,t);if(P(n))return;let a=n.right.scope;for(;a;){let{key:i,isDeclared:o}=jl(e,a.key,r);if(o)return P(Ur(e,i))?void 0:i;a=
a.parent}},XA=e=>e.includes("[")||e.includes("."),QA=(e,t)=>{try{let r=Ur(e,t);return P(r)?void 0:r.right.key}catch{return}},
e$=(e,t,r)=>{if(typeof r!="object"||r===null||Array.isArray(r))throw new Error("setValues: expected an object of {fieldN\
ame: value}, e.g. setValues({a: b, b: a})");return Object.entries(r).map(([n,a])=>{let i=XA(n),o=i?QA(e,n):Zo(e,t,n);if(o===
void 0)throw new Error(i?`setValues: "${n}" is not a pointer key in this app \u2014 a key with [ or . is read from the app ro\
ot, like setAppValue (e.g. 'rows[0].qty')`:`setValues: no field named "${n}" is in scope here \u2014 a name must be declared \
on this node's scope or an enclosing one, like a formula read`);return a===void 0?ly.clearValue(o):ly.updateValue(o,a)})};var Oi=(e,t)=>{let r=(0,xb.createContext)(t);return[r.Provider,()=>{let i=(0,Eb.useContext)(r);if(i===void 0){if(t)return t;
throw new Error(`${e}Context not found`)}return i},r]},_b=(e,t)=>{let r=e.length,n=t.length;if(r===0)return n;if(n===0)return r;
let a=[];for(let i=0;i<=r;i++)a[i]=[i];for(let i=0;i<=n;i++)a[0][i]=i;for(let i=1;i<=r;i++)for(let o=1;o<=n;o++){let s=e[i-
1]===t[o-1]?0:1;a[i][o]=Math.min(a[i-1][o]+1,a[i][o-1]+1,a[i-1][o-1]+s)}return a[r][n]},dy=e=>e.toLowerCase().trim().replace(
/^the\s+/i,"").replace(/\s+/g," "),t$=(e,t,r={})=>{if(e.length===0)return"none";let{correctThreshold:n=1,closeThreshold:a=3}=r,
i=dy(e),o=dy(t);if(i===o)return"correct";if(i.length===0)return"wrong";let s=_b(i,o),l=Math.max(1,Math.floor(o.length/10)),
c=n*l,u=a*l;return s<=c?"correct":s<=u?"close":"wrong"};var mi=class{constructor(e){this.html=e}toString(){return this.html}toJSON(){return this.html}},Ip=e=>e instanceof mi,Yl=e=>e.
replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),r$=e=>e instanceof
Ve.PlainDate,n$=e=>e instanceof Ve.ZonedDateTime,a$=e=>e instanceof Ve.Instant,ut=e=>Ab.string.is(e)?e:Ip(e)?e.html:r$(e)?
e.toString():n$(e)?e.toPlainDate().toString():a$(e)?e.toZonedDateTimeISO("UTC").toPlainDate().toString():Array.isArray(e)?
e.join(""):e===void 0?"":String(e),uc=(e,t,r="no context")=>xe(e)?Rb(e.right,t,r):e,Rb=(e,t,r="no context")=>t.is(e)?R(e):
Fl(`Type mismatch: ${JSON.stringify(e)} is not a ${t.name} (${r})`),i$=(e,t,r="no context")=>{if(!xe(e))return e;let n=e.
right;if(t.is(n))return R(n);let a=t;return a===$b.string||a===U&&n!==void 0?R(ut(n)):Fl(`Type mismatch: ${JSON.stringify(
n)} is not a ${t.name} (${r})`)},o$=e=>{let t={},r=[];for(let n in e){let a=e[n];P(a)?r.push(a.left):t[n]=a.right}return r.
length?{left:r}:{right:t}};var be=e=>{let t=o$(e);if(P(t))throw new Error(t.left.join(`
`));return t.right};var[yL,vL]=Oi("persistence"),[bL,wL]=Oi("PersistenceKey","");var s$=e=>{let t=e;return()=>(t=t*1103515245+12345&2147483647,t/2147483647)},zl="0123456789abcdefghijklmnopqrstuvwxyzABC\
DEFGHIJKLMNOPQRSTUVWXYZ",l$=248,c$=()=>{let e=globalThis.crypto;if(!e?.getRandomValues)return Math.floor(Math.random()*zl.
length);let t=new Uint8Array(1);for(;;){e.getRandomValues(t);let r=t[0];if(r<l$)return r%zl.length}},u$=(e={})=>{let{length:t=8,
seed:r}=e;if(t<=0)throw new Error("Length must be greater than 0");let n=r!==void 0?(()=>{let i=s$(r);return()=>Math.floor(
i()*zl.length)})():c$,a="";for(let i=0;i<t;i++)a+=zl[n()];return a},d$="23456789TJQKA",p$="shdc",f$=/^card_[shdc][2-9TJQKA]$/,
h$=["high card","pair","two pair","three of a kind","straight","flush","full house","four of a kind","straight flush"],m$=e=>{
if(typeof e!="string"||!f$.test(e))throw new Error(`handRank: bad card id ${JSON.stringify(e)} \u2014 expected card_{s|h|d|c}\
{2-9|T|J|Q|K|A}`);return{id:e,suit:p$.indexOf(e[5]),rank:d$.indexOf(e[6])+2}},Xo={2:"two",3:"three",4:"four",5:"five",6:"\
six",7:"seven",8:"eight",9:"nine",10:"ten",11:"jack",12:"queen",13:"king",14:"ace"},Aa=e=>e===6?"sixes":`${Xo[e]}s`,py=(e,t)=>{
var r;let n=e;for(let a=0;a<5;a++)n=n*15+((r=t[a])!=null?r:0);return n},fy=e=>{var t;let r=[...e].sort((f,h)=>h.rank-f.rank),
n=new Map;for(let f of r)n.set(f.rank,((t=n.get(f.rank))!=null?t:0)+1);let a=[...n.entries()].sort((f,h)=>h[1]-f[1]||h[0]-
f[0]),i=e.every(f=>f.suit===e[0].suit),o=a.map(([f])=>f),s=0;o.length===5&&(o[0]-o[4]===4?s=o[0]:o.join(",")==="14,5,4,3\
,2"&&(s=5));let l=()=>a.flatMap(([f])=>r.filter(h=>h.rank===f));if(s>0){let f=s===5?[...r.slice(1),r[0]]:r,h=i?8:4;return{
category:h,rank:py(h,[s]),tiebreak:[s],ordered:f}}let c=a.map(([,f])=>f).join(""),u;c==="41"?u=7:c==="32"?u=6:i?u=5:c===
"311"?u=3:c==="221"?u=2:c==="2111"?u=1:u=0;let d=o;return{category:u,rank:py(u,d),tiebreak:d,ordered:l()}},g$=e=>{let t=e.
tiebreak;switch(e.category){case 8:return t[0]===14?"royal flush":`straight flush, ${Xo[t[0]]} high`;case 7:return`four \
of a kind, ${Aa(t[0])}`;case 6:return`full house, ${Aa(t[0])} over ${Aa(t[1])}`;case 5:return`flush, ${Xo[t[0]]} high`;case 4:
return`straight, ${Xo[t[0]]} high`;case 3:return`three of a kind, ${Aa(t[0])}`;case 2:return`two pair, ${Aa(t[0])} and ${Aa(
t[1])}`;case 1:return`pair of ${Aa(t[0])}`;default:return`${Xo[t[0]]}-high`}},y$=e=>{let t=e.length;if(t===5)return[e];if(t===
6)return e.map((n,a)=>e.filter((i,o)=>o!==a));let r=[];for(let n=0;n<t;n++)for(let a=n+1;a<t;a++)r.push(e.filter((i,o)=>o!==
n&&o!==a));return r},v$=e=>{if(!Array.isArray(e)||e.length<5||e.length>7){let i=Array.isArray(e)?`${e.length} cards`:typeof e;
throw new Error(`handRank: expected an array of 5\u20137 card ids, got ${i}`)}let t=e.map(m$),r=new Set;for(let i of t){
if(r.has(i.id))throw new Error(`handRank: duplicate card id ${i.id}`);r.add(i.id)}let n;for(let i of y$(t)){let o=fy(i);
(!n||o.rank>n.rank)&&(n=o)}let a=n??fy(t.slice(0,5));return{category:a.category,categoryName:h$[a.category],rank:a.rank,
best:a.ordered.map(i=>i.id),label:g$(a)}},Op={map:["it","i"],filter:["it","i"],forEach:["it","i","arr"],reduce:["acc","i\
t","i"],times:["i"],every:["it","i"],some:["it","i"],find:["it","i"],findIndex:["it","i"],count:["it","i"],groupBy:["it",
"i"],sumBy:["it","i"]},b$=e=>e.params?e.params.filter(_r).map(t=>t.name):null,Cp="var(--og-accent, currentColor)",Ob="va\
r(--og-border, rgba(127,127,127,.25))",w$="var(--og-text, currentColor)",T$=e=>e!=null&&typeof e=="object"&&!Array.isArray(
e),Np=e=>T$(e)?e:{},us=e=>{if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(typeof e=="string"&&e.trim()!==""){
let t=Number(e);return Number.isFinite(t)?t:void 0}},Ra=(e,t)=>{let r=us(e);return r!=null&&r>0?r:t},Cb=(e,t)=>{let r=us(
e),n=t===void 0?1:us(t);return r==null||n==null||n<=0?0:Math.min(1,Math.max(0,r/n))},k$=/[;{}<>"'\\]|url\(|expression\(/i,
Hd=e=>{if(typeof e!="string")return;let t=e.trim();return t!==""&&t.length<=100&&!k$.test(t)?t:void 0},ds=(e,t)=>{var r;
return(r=Hd(e))!=null?r:t},S$=(e,t)=>{var r,n;return(n=(r=Hd(e))!=null?r:Hd(t))!=null?n:""},vi=e=>Math.round(e*100)/100,
Nb=e=>`role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${e}"`,E$=(e,t)=>{let r=Np(t),n=Math.round(
Cb(e,r.max)*100),a=Ra(r.height,8),i=Ra(r.radius,a/2),o=ds(r.color,Cp),s=ds(r.track,Ob);return`<div ${Nb(n)} style="heigh\
t:${a}px;border-radius:${i}px;background:${s};overflow:hidden;"><div style="width:${n}%;height:100%;background:${o};"></\
div></div>`},x$=(e,t)=>{let r=Np(t),n=Cb(e,r.max),a=Math.round(n*100),i=Ra(r.size,64),o=Math.min(Ra(r.stroke,8),i/2),s=ds(
r.color,Cp),l=ds(r.track,Ob),c=r.caption==null?`${a}%`:Yl(String(r.caption)),u=i/2,d=vi((i-o)/2),f=vi(2*Math.PI*d),h=(b,T="")=>`\
<circle cx="${u}" cy="${u}" r="${d}"${T} style="fill:none;stroke-width:${o};${b}"/>`,y=n>0?h(`stroke:${s};stroke-linecap\
:round;stroke-dasharray:${vi(n*f)} ${f};`,` transform="rotate(-90 ${u} ${u})"`):"";return`<svg ${Nb(a)} width="${i}" hei\
ght="${i}" viewBox="0 0 ${i} ${i}" style="display:block;">`+h(`stroke:${l};`)+y+`<text x="${u}" y="${u}" text-anchor="mi\
ddle" dominant-baseline="central" style="fill:${w$};font-size:${vi(i*.24)}px;font-weight:600;">${c}</text></svg>`},_$=(e,t)=>{
if(!Array.isArray(e))return"";let r=e.flatMap(y=>{let b=us(y);return b==null?[]:[b]});if(r.length<2)return"";let n=Np(t),
a=us(n.width),i=Ra(n.width,120),o=Ra(n.height,32),s=Ra(n.strokeWidth,2),l=ds(n.color,Cp),c=Math.min(...r),u=Math.max(...r)-
c,d=s/2,f=r.map((y,b)=>{let T=vi(b*i/(r.length-1)),S=u===0?o/2:vi(d+(1-(y-c)/u)*(o-2*d));return`${T},${S}`}).join(" ");return`\
<svg role="img" aria-label="${`trend: ${r[0]} to ${r[r.length-1]}`}" width="${a!=null&&a>0?i:"100%"}" height="${o}" view\
Box="0 0 ${i} ${o}" preserveAspectRatio="none" style="display:block;overflow:visible;"><polyline points="${f}" vector-ef\
fect="non-scaling-stroke" style="fill:none;stroke:${l};stroke-width:${s};stroke-linejoin:round;stroke-linecap:round;"/><\
/svg>`},A$=e=>{var t,r,n;try{return R(F_(e))}catch(a){let i=a,o=(t=i.message)!=null?t:"Parse error",s=(r=i.description)!=
null?r:o,l=(n=i.index)!=null?n:-1;return Ce({message:o,description:s,source:e,index:l})}},Pp=k(fA,A$),Dp=e=>Fr(e)&&"__or\
gFunction"in e&&e.__orgFunction===!0,$$=Object.prototype.hasOwnProperty,R$=Object.prototype,I$=Object.getPrototypeOf,Ue=Array.
isArray,Fr=e=>{if(typeof e!="object"||e===null)return!1;let t=I$(e);return t===null||t===R$},Ll=new Set,hy=new Map,O$=e=>{
let t=hy.get(e);if(t===void 0){let r=typeof e=="string"&&e.startsWith("@")?e.slice(1).trim():String(e??"");t={formula:r,
parsed:Pp(r)},typeof e=="string"&&hy.set(e,t)}return t},my=new Map,C$=e=>{if(typeof e!="string")return Zg(e);let t=my.get(
e);return t===void 0&&(t=Zg(e),my.set(e,t)),t},N$=()=>({map:new Map,ids:new WeakMap,next:{n:0}}),gy=(e,t)=>{if(t===null)
return"null";let r=typeof t;if(r==="object"||r==="function"){let n=e.ids.get(t);return n===void 0&&(n=e.next.n++,e.ids.set(
t,n)),"#"+n}return r+":"+String(t)},Pb=e=>{e?.map.clear()},ps=e=>Fr(e)&&"__closure"in e&&e.__closure===!0,Db=(e,t)=>{var r;
return{__closure:!0,params:(r=b$(e))!=null?r:[],body:e.body,ctx:t}},xd=new Set,fs=(e,t)=>{if(xd.has(e))return R(void 0);
let r={};for(let n=0;n<e.params.length;n++)r[e.params[n]]=t[n];xd.add(e);try{return se(e.body,dc(e.ctx,r),un)}finally{xd.
delete(e)}},Mb=(e,t,r,n)=>{if(Ll.has(e.key))return R(void 0);let a=C$(e.parameters),i={};for(let u=0;u<a.length;u++)i[a[u]]=
t[u];let{formula:o,parsed:s}=O$(e.compute);if(P(s))return Ce(yt(`Error in function body: ${o}`,n));let l=e.memoSafe===!0?
r.memo:void 0,c;if(l){let u=r.dc("$data",un);c=e.key+"|"+gy(l,u)+"|"+t.map(f=>gy(l,f)).join(",");let d=l.map.get(c);if(d!==
void 0)return d}Ll.add(e.key);try{let u=dc(r,i);u.letBound=void 0;let d=se(s.right,u,un);return l&&c!==void 0&&l.map.set(
c,d),d}finally{Ll.delete(e.key)}},_d=(e,t,r)=>{let n=[];for(let a of e){let i=se(a,t,r);if(P(i))return i;n.push(i.right)}
return R(n)},yt=(e,t)=>({message:e,failingExpression:t}),P$=e=>{if(_r(e))return e.name;if(ls(e)){let t=e.property;if(_r(
t))return t.name}return"function"},jb=(e,t,r,n)=>{var a;let i=e;if(Pb(r.memo),_r(e))return(a=r.letBound)!=null&&a.has(e.
name)?Ce(yt(`Cannot reassign let binding '${e.name}'`,i)):r.setter?(r.setter(e.name,t),R(void 0)):Ce(yt("Cannot assign: \
no mutable context available",i));if(ls(e)){let o=se(e.object,r,n);if(P(o))return o;let s=o.right;if(s==null||typeof s!=
"object"&&typeof s!="function")if(_r(e.object)){if(!r.setter)return Ce(yt("Cannot auto-create object: no mutable context\
 available",i));s={},r.setter(e.object.name,s)}else return Ce(yt("Cannot assign property of non-object",i));let l=Wd(e,r.
dc);if(P(l))return l;let c=l.right.property;return s[c]=t,R(void 0)}return Ce(yt("Invalid assignment target: must be ide\
ntifier or property access",i))},se=(e,t,r=un)=>{var n,a,i;let o=e;if(Wl(e))return R(e.value);if(Ti(e)){if(e.operator===
"->")return Ce(yt("`->` is only valid inside a `match { }` block (as `condition -> expression`)",e));if(e.operator===";"){
let c=se(e.left,t,r);return P(c)?c:se(e.right,t,r)}if(e.operator==="="){let c=se(e.right,t,r);if(P(c))return c;let u=c.right,
d=jb(e.left,u,t,r);return P(d)?d:R(u)}if(e.operator==="&&"||e.operator==="||"||e.operator==="??"){let c=se(e.left,t,r);if(P(
c))return c;let u=c.right;return(e.operator==="&&"?!u:e.operator==="||"?!!u:u!=null)?c:se(e.right,t,r)}let s=se(e.left,t,
r);if(P(s))return s;let l=se(e.right,t,r);if(P(l))return l;try{return R(J$(e.operator)(s.right,l.right))}catch(c){return Ce(
yt(String(c),e))}}if(_v(e)){let s=se(e.argument,t,r);if(P(s))return s;try{return R(Z$(e.operator)(s.right))}catch(l){return Ce(
yt(String(l),e))}}if(pp(e)){let s=se(e.test,t,r);return P(s)?s:s.right?se(e.consequent,t,r):se(e.alternate,t,r)}if(Ov(e)){
if((n=t.letBound)!=null&&n.has(e.id))return Ce(yt(`Cannot redeclare let binding '${e.id}'`,e));let s=se(e.init,t,r);return P(
s)?s:e.body?se(e.body,Fb(t,e.id,s.right),r):R(s.right)}if(M_(e)){let s,l=e.scrutinee!==void 0;if(e.scrutinee!==void 0){let c=se(
e.scrutinee,t,r);if(P(c))return c;s=c.right}for(let c of e.arms){if(_r(c.test)&&c.test.name==="_")return se(c.consequent,
t,r);let u=se(c.test,t,r);if(P(u))return u;if(l?jp(s,u.right):!!u.right)return se(c.consequent,t,r)}return R(void 0)}if(ac(
e)){let s={...r,memberLookupContexts:[]};if(ls(e.callee)){let u=se(e.callee.object,t,gi(s,!1));if(P(u))return u;let d=u.
right,f=Wd(e.callee,t.dc);if(P(f))return f;let h=f.right.property,y=Ad(h,t.dc,gi(s,!0));if(yy(y))return e.arguments.length>
0?y(d,e.arguments[0],t):R(void 0);if(y===Qo){if(e.arguments.length>0){let T=e.arguments.length>1?se(e.arguments[1],t,s):
R(void 0);return P(T)?T:Qo(d,e.arguments[0],t,T.right)}return R(void 0)}let b;if(d!=null){if(b=d[h],ps(b)){let T=_d(e.arguments,
t,s);return P(T)?T:fs(b,T.right)}if(typeof b=="function"){let T=b.bind(d),S=[];for(let E of e.arguments){let _=se(E,t,s);
if(P(_))return _;S.push(_.right)}try{return R(T(...S))}catch(E){let _=E instanceof Error?E.message:String(E);return Ce(yt(
`Error invoking ${h}(): ${_}`,o))}}}if(typeof y=="function"){let T=[d];for(let S of e.arguments){let E=se(S,t,s);if(P(E))
return E;T.push(E.right)}try{return R(y(...T))}catch(S){let E=S instanceof Error?S.message:String(S);return Ce(yt(`Error\
 invoking ${h}(): ${E}`,o))}}return R(void 0)}let l=se(e.callee,t,gi(s,!0));if(P(l))return l;let c=l.right;if(ps(c)){let u=_d(
e.arguments,t,s);return P(u)?u:fs(c,u.right)}if(Dp(c)){if(Ll.has(c.key))return R(void 0);let u=_d(e.arguments,t,s);return P(
u)?u:Mb(c,u.right,t,e)}if(typeof c=="function"){if(yy(c)){let d=se(e.arguments[0],t,s);return P(d)?d:c(d.right,e.arguments[1],
t)}if(c===Qo){let d=se(e.arguments[0],t,s);if(P(d))return d;let f=e.arguments.length>2?se(e.arguments[2],t,s):R(void 0);
return P(f)?f:Qo(d.right,e.arguments[1],t,f.right)}let u=[];for(let d of e.arguments){let f=se(d,t,s);if(P(f))return f;u.
push(f.right)}try{return R(c(...u))}catch(d){let f=P$(e.callee),h=d instanceof Error?d.message:String(d);return Ce(yt(`E\
rror invoking ${f}(): ${h}`,o))}}return R(void 0)}if(xv(e))return R(t.thisContext);if(_r(e))return R(Ad(e.name,t.dc,r));
if(ls(e)){let{object:s}=e,l=Wd(e,t.dc);if(P(l))return l;let c=l.right,u=se(s,t,G$(gi(r,!1),c));if(P(u))return u;let d=u.
right;if(Ue(d)){if(c.type==="computed"){let f=Number(c.property);return isNaN(f)?R(void 0):R(d[f])}return R(d.map(f=>Fr(
f)?f[c.property]:void 0))}if(Fr(d))return R(d[c.property]);if(jt(d)&&c.type!=="computed"&&c.property==="length")return R(
d.length);if(d!=null&&typeof d=="object"){let f=d[c.property];return R(typeof f=="function"?f.bind(d):f)}return R(void 0)}
if($v(e)){let s=[],{quasis:l,expressions:c}=e;for(let u=0;u<l.length;u++){let d=l[u],f=(i=typeof d.value=="string"?d.value:
(a=d.value)==null?void 0:a.cooked)!=null?i:"";if(s.push(f),u<c.length){let h=se(c[u],t,r);if(P(h))return h;s.push(ut(h.right))}}
return R(s.join(""))}if(D_(e)){let s=se(e.tag,t,gi(r,!0));if(P(s))return s;let l=s.right;if(typeof l!="function")return R(
void 0);let{quasis:c,expressions:u}=e.quasi,d=c.map(y=>{var b,T;return(T=typeof y.value=="string"?y.value:(b=y.value)==null?
void 0:b.cooked)!=null?T:""}),h=[Object.assign([...d],{raw:d.slice()})];for(let y of u){let b=se(y,t,r);if(P(b))return b;
h.push(b.right)}return R(l(...h))}if(Av(e)){let s=[];for(let l of e.elements)if(l===null)s.push(void 0);else if(oy(l)){let c=se(
l.argument,t,r);if(P(c))return c;let u=c.right;Ue(u)&&s.push(...u)}else{let c=se(l,t,r);if(P(c))return c;s.push(c.right)}
return R(s)}if(Rv(e)){let s={},{properties:l}=e;for(let c of l){if(oy(c)){let h=se(c.argument,t,r);if(P(h))return h;let y=h.
right;Fr(y)?Object.assign(s,y):Ue(y)&&y.forEach((b,T)=>{s[String(T)]=b});continue}let u=c.key,d=!!c.computed,f;if(!d&&_r(
u))f=u.name;else if(!d&&Wl(u))f=String(u.value);else{let h=se(u,t,r);if(P(h))return h;f=String(h.right)}if(c.shorthand)s[f]=
Ad(f,t.dc,r);else{let h=se(c.value,t,r);if(P(h))return h;s[f]=h.right}}return R(s)}return Iv(e)?R(Db(e,t)):Ce(yt(`Unsupp\
orted expression: ${e.type}`,o))},Wd=(e,t)=>{let{computed:r}=e,n=D$(e,t);return P(n)?n:R({type:r?"computed":"static",property:n.
right})},D$=(e,t)=>{let{property:r,computed:n}=e;if(!n&&_r(r))return R(r.name);let a=se(r,{dc:t,setter:void 0});return P(
a)?a:R(String(a.right))},Ad=(e,t,r)=>{let n=t(e,r);if(n!==void 0&&(!r.isCall||Yi(n)||Dp(n)||ps(n)))return n;if(r.isCall){
let a=Bb.get(e);if(a)return a;if(e==="reduce")return Qo}if(e in Kl&&!(!r.isCall&&Lb.has(e)))return Kl[e]},Lb=new Set(["h\
tml","keys","values","entries","first","last","progressBar","progressRing","sparkline","pow","exp","log","sqrt"]),Fb=(e,t,r)=>{
var n;let a=dc(e,{[t]:r});return a.letBound=new Set([...(n=e.letBound)!=null?n:[],t]),a},dc=(e,t)=>{let r=e.letBound;if(r){
let n=Object.keys(t).filter(a=>r.has(a));if(n.length>0){let a=new Set(r);for(let i of n)a.delete(i);r=a}}return{dc:fc(e.
dc,t),setter:e.setter,thisContext:e.thisContext,memo:e.memo,asyncHosts:e.asyncHosts,syncHosts:e.syncHosts,letBound:r}},sa=(e,t,r)=>{
var n;let a=(n=Op[r])!=null?n:[];if(Iv(e)){let i=Db(e,t);return o=>fs(i,o)}if(_r(e)&&!a.includes(e.name)){let i=se(e,t,gi(
un,!0));if(!P(i)&&ps(i.right)){let o=i.right;return s=>fs(o,s)}if(!P(i)&&Dp(i.right)){let o=i.right;return s=>Mb(o,s,t,e)}}
return(i,o)=>{let s={};for(let l=0;l<a.length;l++)s[a[l]]=i[l];return o&&Object.assign(s,o),se(e,dc(t,s),un)}},M$=(e,t,r)=>{
if(!jt(e))return R("");let n=sa(t,r,"forEach"),a=[],i=e.split(`
`);for(let o=0;o<i.length;o++){let s=n([i[o],o,i]);if(P(s))return s;a.push(String(s.right))}return R(a.join(""))},j$=(e,t,r)=>{
if(!Ue(e))return R([]);let n=sa(t,r,"filter"),a=[];for(let i=0;i<e.length;i++){let o=e[i],s=n([o,i]);if(P(s))return s;s.
right&&a.push(o)}return R(a)},L$=(e,t,r)=>{if(!Ue(e))return R([]);let n=sa(t,r,"map"),a=[];for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(P(o))return o;a.push(o.right)}return R(a)},Qo=(e,t,r,n)=>{if(!Ue(e))return R(n);let a=sa(t,r,"reduce"),i=n;
for(let o=0;o<e.length;o++){let s=a([i,e[o],o]);if(P(s))return s;i=s.right}return R(i)},pc=(e,t,r,n,a,i)=>{if(!Ue(e))return R(
i);let o=sa(t,r,n);for(let s=0;s<e.length;s++){let l=e[s],c=o([l,s]);if(P(c))return c;let u=a(!!c.right,l,s);if(u)return R(
u.value)}return R(i)},F$=(e,t,r)=>pc(e,t,r,"every",n=>n?void 0:{value:!1},!0),U$=(e,t,r)=>pc(e,t,r,"some",n=>n?{value:!0}:
void 0,!1),B$=(e,t,r)=>pc(e,t,r,"find",(n,a)=>n?{value:a}:void 0,void 0),H$=(e,t,r)=>pc(e,t,r,"findIndex",(n,a,i)=>n?{value:i}:
void 0,-1),Ub=(e,t,r)=>{if(e){if(Wl(e)&&jt(e.value)){let n=e.value;return([a])=>R(Fr(a)?a[n]:void 0)}return sa(e,t,r)}},
W$=(e,t,r)=>{if(!Ue(e))return R(0);if(!t)return R(e.length);let n=sa(t,r,"count"),a=0;for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(P(o))return o;o.right&&a++}return R(a)},q$=(e,t,r)=>{var n;let a=Ub(t,r,"groupBy");if(!Ue(e)||!a)return R({});
let i={};for(let o=0;o<e.length;o++){let s=a([e[o],o]);if(P(s))return s;if(s.right==null)continue;let l=ut(s.right);((n=
i[l])!=null?n:i[l]=[]).push(e[o])}return R(i)},V$=(e,t,r)=>{if(!Ue(e))return R(0);let n=Ub(t,r,"sumBy"),a=0;for(let i=0;i<
e.length;i++){let o=n?n([e[i],i]):R(e[i]);if(P(o))return o;o.right!=null&&(a+=Number(o.right))}return R(a)},Y$=(e,t,r)=>{
let n=Number(e);if(!Bn(n)||isNaN(n)||n<0)return R([]);let a=sa(t,r,"times"),i=[];for(let o=0;o<n;o++){let s=a([o],{it:o});
if(P(s))return s;i.push(s.right)}return R(i)},Bb=new Map([["forEach",M$],["filter",j$],["map",L$],["times",Y$],["every",
F$],["some",U$],["find",B$],["findIndex",H$],["count",W$],["groupBy",q$],["sumBy",V$]]),z$=new Set(Bb.values()),yy=e=>typeof e==
"function"&&z$.has(e);var Hb=(e,t={},r)=>{let n=Pp(e);if(P(n))return n;let a=qb(t);return r!==void 0&&(a.thisContext=r),se(n.right,a,un)},K$=(e,t={},r)=>ze(
Hb(e,t,r)),un={memberLookupContexts:[],isCall:!1},G$=(e,t)=>({...e,memberLookupContexts:[t,...e.memberLookupContexts]}),
gi=(e,t)=>({...e,isCall:t}),J$=e=>{let t=eR[e];return t||(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},Z$=e=>{let t=tR[e];return t||
(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},Mp=(e,t)=>nr(e)&&nr(t)?e.equals(t):e===t,X$=(e,t)=>!Mp(e,t),jp=(e,t)=>e==null&&t==
null?!0:Mp(e,t),Q$=(e,t)=>!jp(e,t),Nl=(e,t)=>e!=null&&t!=null,eR={"+":(e,t)=>nr(e)&&Bn(t)?e.add({days:t}):Bn(e)&&nr(t)?t.
add({days:e}):jt(e)||jt(t)?(e==null?"":String(e))+(t==null?"":String(t)):nr(e)||nr(t)?String(e)+String(t):Number(e)+Number(
t),"-":(e,t)=>nr(e)&&Bn(t)?e.subtract({days:t}):nr(e)&&nr(t)?e.since(t).total("days"):Number(e)-Number(t),"*":(e,t)=>Number(
e)*Number(t),"/":(e,t)=>Number(e)/Number(t),"%":(e,t)=>Number(e)%Number(t),"==":jp,"===":Mp,"!=":Q$,"!==":X$,">":(e,t)=>Nl(
e,t)&&ta(e,t)>0,">=":(e,t)=>Nl(e,t)&&ta(e,t)>=0,"<":(e,t)=>Nl(e,t)&&ta(e,t)<0,"<=":(e,t)=>Nl(e,t)&&ta(e,t)<=0},tR={"-":e=>-Number(
e),"!":e=>!e,"@":e=>e},vy=e=>{let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.
imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}},rR=e=>{var t;if(typeof e=="number"&&Number.isFinite(e))return e;let r=2166136261;
for(let n of String(e))r^=(t=n.codePointAt(0))!=null?t:0,r=Math.imul(r,16777619);return r>>>0},by=e=>Ue(e)?e.map(ut):e==
null?[]:[ut(e)],Wb=e=>e==null?"":Ip(e)?e.html:Ue(e)?e.map(Wb).join(""):Yl(ut(e)),wy=e=>(e.length===1&&Ue(e[0])?e[0]:e).filter(
r=>r!=null).map(Number),$a=e=>e==null||typeof e!="number"&&typeof e!="string"?NaN:Number(e),Pl=e=>Number.isFinite(e)?e:void 0,
$d=(e,t)=>{if(ps(e))return(...r)=>{let n=fs(e,r);if(P(n))throw new Error(n.left.message);return n.right};if(t&&typeof e==
"string"&&e.length>0)return r=>Fr(r)?r[e]:void 0},Dl=e=>Fr(e)?Object.entries(e):Ue(e)?e.flatMap((t,r)=>t==null?[]:[[String(
r),t]]):[],Kl={if:(e,t,r)=>e?t:r,and:(...e)=>e.every(t=>t),or:(...e)=>e.some(t=>t),length:e=>jt(e)||Ue(e)?e.length:0,sum:e=>Ue(
e)?e.reduce((t,r)=>t+Number(r),0):0,avg:e=>!Ue(e)||e.length===0?0:e.reduce((r,n)=>r+Number(n),0)/e.length,min:(...e)=>{let t=wy(
e);return t.length===0?void 0:Math.min(...t)},max:(...e)=>{let t=wy(e);return t.length===0?void 0:Math.max(...t)},first:e=>Ue(
e)?e[0]:void 0,last:e=>Ue(e)&&e.length>0?e[e.length-1]:void 0,flatten:e=>Ue(e)?e.flat(1):[],clamp:(e,t,r)=>{if(e==null)return;
let n=Number(e);return t!=null&&(n=Math.max(n,Number(t))),r!=null&&(n=Math.min(n,Number(r))),n},split:(e,t)=>jt(e)?t===void 0?
[e]:e.split(String(t)):[],join:(e,t)=>{if(!Ue(e))return"";let r=t!==void 0?String(t):",";return e.length>0&&e.every(Ip)?
new mi(e.map(n=>n.html).join(Yl(r))):e.map(String).join(r)},upper:e=>ut(e).toUpperCase(),lower:e=>ut(e).toLowerCase(),concat:(...e)=>e.
reduce((t,r)=>Ue(r)?t.concat(r):t,[]),today:FE,dateFrom:e=>{try{return UE(ut(e))}catch{return`<<INVALID_DATE: ${e}>>`}},
dateCompare:(e,t)=>BE(e,t),formatDate:(e,t)=>{try{return WE.is(t)?qE(e,t):Dd(e)}catch{return`<<INVALID_DATE: ${e}>>`}},formatPeriod:(e,t)=>zE(
e,t),generateId:(e,t)=>u$({length:Number(e),seed:Bn(t)?Number(t):void 0}),regex:(e,t)=>new RegExp(String(e),t?String(t):
void 0),fuzzyMatch:(e,t)=>t$(ut(e),ut(t)),toJson:(e,t)=>{let r=t!==void 0?Number(t):void 0;return JSON.stringify(e,null,
r)},dodgy:e=>{throw new Error("dodgy function failed!!")},rand:(e,t)=>{let r=Number(e);if(!Bn(r)||isNaN(r)||r<=0)return 0;
let n=t==null?Math.random():vy(rR(t))();return Math.floor(n*r)},floor:e=>Math.floor(Number(e)),ceil:e=>Math.ceil(Number(
e)),round:e=>Math.round(Number(e)),abs:e=>Math.abs(Number(e)),pow:(e,t)=>Pl(Math.pow($a(e),$a(t))),exp:e=>Pl(Math.exp($a(
e))),log:(e,t)=>Pl(t===void 0?Math.log($a(e)):Math.log($a(e))/Math.log($a(t))),sqrt:e=>Pl(Math.sqrt($a(e))),uniq:(e,t)=>{
if(!Ue(e))return[];let r=t!==void 0?e.map(n=>Fr(n)?n[String(t)]:void 0):e;return[...new Set(r)].filter(n=>n!==void 0)},sort:(e,t,r)=>{
if(!Ue(e))return[];let n=typeof t=="string"&&t.length>0,a=s=>n&&Fr(s)?s[t]:s,i=e.every(s=>typeof a(s)=="number"),o=r?-1:
1;return[...e].sort((s,l)=>{let c=a(s),u=a(l),d=i?c-u:String(c).localeCompare(String(u));return o*d})},shuffle:(e,t)=>{if(!Ue(
e))return[];let r=vy(Number(t)),n=[...e];for(let a=n.length-1;a>0;a--){let i=Math.floor(r()*(a+1));[n[a],n[i]]=[n[i],n[a]]}
return n},handRank:e=>v$(e),replace:(e,t,r)=>{let n=e==null?"":ut(e);if(t==null)return n;let a=r==null?"":ut(r);return n.
split(ut(t)).join(a)},omit:(e,t)=>{if(!Fr(e))return{};let r=new Set(by(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>!r.has(n)))},pick:(e,t)=>{if(!Fr(e))return{};let r=new Set(by(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>r.has(n)))},toMap:(e,t,r)=>{var n;if(!Ue(e))return{};let a=$d(t,!0);if(!a)return{};let i=(n=$d(r,!0))!=null?n:s=>s,
o={};return e.forEach((s,l)=>{let c=a(s,l);c!=null&&(o[ut(c)]=i(s,l))}),o},keys:e=>Dl(e).map(([t])=>t),values:e=>Dl(e).map(
([,t])=>t),entries:e=>Dl(e),mapValues:(e,t)=>{let r=$d(t,!1);return r?Object.fromEntries(Dl(e).map(([n,a])=>[n,r(a,n)])):
{}},escapeHtml:e=>Yl(e==null?"":ut(e)),html:(e,...t)=>{let r=Ue(e)?e.map(ut):[ut(e)],n="";for(let a=0;a<r.length;a++)n+=
r[a],a<t.length&&(n+=Wb(t[a]));return new mi(n)},progressBar:(e,t)=>new mi(E$(e,t)),progressRing:(e,t)=>new mi(x$(e,t)),
sparkline:(e,t)=>new mi(_$(e,t)),safeCssColor:(e,t)=>S$(e,t),urlEncode:e=>encodeURIComponent(e==null?"":ut(e)),now:()=>new Date().
toISOString().slice(0,19)+"Z",nextOccurrence:GE,byId:()=>{}},nR={forEach:!0,filter:!0,map:!0,reduce:!0,times:!0,every:!0,
some:!0,find:!0,findIndex:!0,count:!0,groupBy:!0,sumBy:!0},aR=new Set([...Object.keys(Kl),...Object.keys(nR)]),kL=new Set(
Object.keys(Kl).filter(e=>!Lb.has(e))),Lp=e=>typeof e=="function"?e:t=>e[t],fc=(e,t)=>(r,n)=>$$.call(t,r)?t[r]:e(r,n),qb=e=>{
let t={},r=fc(Lp(e),t),n=N$();return{dc:r,setter:(i,o)=>{t[i]=o,Pb(n)},memo:n}},iR=async(e,t,r)=>{let n=Pp(e);if(P(n))return n;
let a=qb(t);return a.asyncHosts=r.asyncHosts,a.syncHosts=r.syncHosts,ln(n.right,a)},ln=async(e,t)=>{var r;if(Ti(e)&&e.operator===
";"){let a=await ln(e.left,t);return P(a)?a:ln(e.right,t)}if(Ti(e)&&e.operator==="="){let a=await ln(e.right,t);if(P(a))
return a;let i=ze(a),o=jb(e.left,i,t,un);return P(o)?o:R(i)}if(Ov(e)){if((r=t.letBound)!=null&&r.has(e.id))return Ce(yt(
`Cannot redeclare let binding '${e.id}'`,e));let a=await ln(e.init,t);if(P(a))return a;let i=ze(a);return e.body?ln(e.body,
Fb(t,e.id,i)):R(i)}let n=oR(e);if(n&&t.asyncHosts&&ns(e,t.asyncHosts)){if(n.kind==="?"&&Ti(n.otherwise)&&n.otherwise.operator===
";")return Ce(yt("This `cond ? a : b` statement's else-branch is a `;` sequence \u2014 `;` binds looser than `? :`, so it may\
 have swallowed the rest of the script. Wrap the whole conditional in parentheses \u2014 `(cond ? a : b); next` \u2014 or write it\
 as `cond && a; !cond && (b; c)`.",e));let a=await ln(n.test,t);if(P(a))return a;let i=ze(a);switch(n.kind){case"?":return ln(
i?n.then:n.otherwise,t);case"&&":return i?ln(n.then,t):R(i);case"||":return i?R(i):ln(n.then,t)}}if(ac(e)&&_r(e.callee)&&
t.asyncHosts&&e.callee.name in t.asyncHosts){let a=e.callee.name;for(let o of e.arguments)if(ns(o,t.asyncHosts))return Ce(
yt(`Async host call '${a}' has an argument that itself contains an async host call. Async host calls must appear at stat\
ement top-level or as the RHS of an assignment, not nested inside other expressions. Bind the inner result to a variable\
 first.`,e));let i=[];for(let o of e.arguments){let s=se(o,t,un);if(P(s))return s;i.push(ze(s))}try{let o=await t.asyncHosts[a](
...i);return R(o)}catch(o){let s=o instanceof Error?o.message:String(o);return Ce(yt(`Error invoking async host '${a}': ${s}`,
e))}}return t.asyncHosts&&ns(e,t.asyncHosts)?Ce(yt("Async host call appears nested inside another expression. Async host\
 calls must appear at statement top-level, as the RHS of an assignment, or as a branch of a conditional statement (`ok &\
& host()`). Bind the inner result to a variable first.",e)):se(e,t,un)},oR=e=>pp(e)?{kind:"?",test:e.test,then:e.consequent,
otherwise:e.alternate}:Ti(e)&&(e.operator==="&&"||e.operator==="||")?{kind:e.operator,test:e.left,then:e.right}:null,sR=new Set(
["parent"]),ns=(e,t)=>{if(ac(e)&&_r(e.callee)&&e.callee.name in t)return!0;for(let r of Object.keys(e)){if(sR.has(r))continue;
let n=e[r];if(Ty(n)){if(ns(n,t))return!0}else if(Array.isArray(n)){for(let a of n)if(Ty(a)&&ns(a,t))return!0}}return!1},
Ty=e=>typeof e=="object"&&e!==null&&typeof e.type=="string";var lR=(e,t)=>{var r;let n=new Map;for(let i of e){let o=t.get(i);if(!o)continue;let s=n.get(o.y);s?s.add(o.x):n.set(o.y,
new Set([o.x]))}let a=[];for(let i of[...n.keys()].sort((o,s)=>o-s)){let o=[...(r=n.get(i))!=null?r:[]].sort((c,u)=>c-u),
s=o[0],l=o[0];for(let c of o.slice(1)){if(c===l+1){l=c;continue}a.push({y:i,startCol:s,span:l-s+1}),s=c,l=c}o.length>0&&
a.push({y:i,startCol:s,span:l-s+1})}return a},cR=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)if(e.has(r))return!1;
return!0},ky=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)e.add(r)},uR=(e,t)=>{let r=e.get(t.y);r||(r=[],e.set(
t.y,r));for(let a=0;a<r.length;a+=1)if(cR(r[a],t))return ky(r[a],t),a;let n=new Set;return ky(n,t),r.push(n),r.length-1},
dR=(e,t)=>{let r=new Map;for(let i of t)r.set(i.index,{x:i.x,y:i.y});let n=new Map,a=[];for(let i of e)for(let o of lR(i.
slots,r))a.push({recordKey:i.recordKey,...o,lane:uR(n,o)});return a};var pR=e=>e,Vb=k(pR,e=>e.objects),Yb=k(Vb,e=>Hn(e,t=>t.type)),fR=k(Vb,e=>Qc(Hn(e,t=>t.type),t=>wt(t,r=>r.id)));var qd="__span",Vd=e=>{if(typeof e!="object"||e===null)return;let t=e[qd];if(!(typeof t!="object"||t===null))return t},hR=/^\d{4}-\d{2}-\d{2}([T ]|$)/,
hc=e=>{if(!(!e?.startField||!e?.axis))return{startField:e.startField,axis:e.axis,endField:e.endField,mode:e.mode==="once"?
"once":e.mode==="grid"?"grid":"repeat",slots:e.slots}},Si=(e,t)=>nr(e)&&!nr(t)?ta(e,Sy(t)):nr(t)&&!nr(e)?ta(Sy(e),t):ta(
e,t),Sy=e=>{if(typeof e!="string"||!hR.test(e))return e;try{return Ve.PlainDate.from(e)}catch{return e}},Ey=(e,t)=>{let r=e[t.
startField];if(r==null||r==="")return;let n=t.endField?e[t.endField]:void 0;return n!=null&&n!==""?Si(n,r)<0?{start:r,end:r}:
{start:r,end:n}:{start:r,end:r}},Fp=(e,t)=>Si(e.start,t)<=0&&Si(e.end,t)>=0,mR=(e,t)=>Si(e.start,t)===0,gR=(e,t,r)=>r===
"once"?mR(e,t):Fp(e,t),yR=(e,t)=>{let r=Si(e.start,t)===0,n=Si(e.end,t)===0;return r&&n?"single":r?"start":n?"end":"midd\
le"},vR=(e,t,r)=>{let{dataType:n,sort:a,whereClause:i,scope:o,source:s,span:l}=t,c=Yb(e)[n]||[];(o==="user"||o==="global")&&
s==="storage"&&(c=c.filter(y=>y._scope===o));let u=bR(c,hc(l),r),d=wR(u,i,r);if(!a)return d;let f=(Array.isArray(a)?a:[a]).
filter(y=>typeof y.field=="string"&&y.field.length>0);return f.length===0?d:[...d].sort((y,b)=>{for(let T of f){let S=y[T.
field],E=b[T.field],_=S==null,O=E==null;if(_&&O)continue;if(_)return 1;if(O)return-1;let M=T.direction==="desc"?-1:1,W=ta(
S,E);if(W!==0)return M*W}return 0})},bR=(e,t,r)=>{if(!t)return e;if(t.mode==="grid"){let o=[];for(let s of e){let l=Ey(s,
t);l&&o.push({...s,[qd]:{start:l.start,end:l.end}})}return o}let n=r(t.axis,{});if(!xe(n)||n.right===void 0)return[];let a=n.
right,i=[];for(let o of e){let s=Ey(o,t);s&&gR(s,a,t.mode)&&i.push({...o,[qd]:{start:s.start,end:s.end,position:yR(s,a)}})}
return i},wR=(e,t,r)=>t?e.filter(n=>{let a=r(t,n);return xe(a)&&!!a.right}):e,Gr=k(V,B,(e,t)=>{let{scope:r,isIteration:n,
node:a}=t,{parent:i}=r,o=zv(e.def,a);if(o)return n&&i?B(e,xr([i.key,Pn(i.node,a)])):o.isRepeating?B(e,`${r.key}`):B(e,xr(
[r.key,Pn(r.node,o)]))}),TR=Ii(Jr.unknown,"compute"),kR=Ii(Jr.union([Jr.number,Jr.undefined]),"maxLength"),xy=Ii(Jr.union(
[Jr.number,Jr.undefined]),"pageSize"),es=(e,t,r,n)=>{let a=r.isFormula?n(e,r.value,t.key):R(r.value);return uc(a,r.targetCodec,
r.name)},SR=e=>{let t=k(V,_A,B,(a,i,o)=>{let{node:s,scope:l}=o,c=s.data;if(Hl(c))if(o.isIteration){let d=Gr(a,o.key);if(d){
let f=r(a,d.key);if(xe(f)&&Array.isArray(f.right))return R(f.right[l.index])}}else return R(vR(i,c,(f,h)=>e(a,f,l.key,h)));
let u=TR(s);return es(a,o,u,e)}),r=k(V,B,(a,i)=>{let{key:o}=i;if(i.node.type===ia)return R(i.node.value);let l=ki(a)[o];
return l?R(l?.value):t(a,i.key)}),n=k(V,B,cc,(a,i,o)=>{var s;let{key:l,node:c}=i,u=(s=o[l])==null?void 0:s.length,d=kR(c),
f=ze(es(a,i,d,e)),h=c.data;if(Hl(h)){let T=r(a,i.key);if(xe(T)&&Array.isArray(T.right)){let S=T.right.length,E=f!==void 0?
Math.min(S,f):S,_=xy(c),O=ze(es(a,i,_,e));return R(u!==void 0?Math.min(E,u):O!==void 0?Math.min(E,O):E)}}let y=xy(c),b=ze(
es(a,i,y,e));if(b!==void 0){if(u!==void 0){let T=f!==void 0?Math.min(u,f):u;return R(T)}return R(b)}return R(u!==void 0?
u:f??0)});return{selectValue:r,selectLength:n,selectComputedValue:t}},ER=new Set(["rand","generateId","today","dodgy","b\
yId","now"]),xR=(e,t)=>e==="rand"&&t.length>=2,_y=new Set(Object.keys(Op)),_R=new Set(["includes","indexOf","lastIndexOf",
"slice","join","concat","split","toLowerCase","toUpperCase","trim","startsWith","endsWith","replace","replaceAll","subst\
ring","charAt","padStart","padEnd","repeat","toFixed","localeCompare"]),rr=e=>typeof e=="object"&&e!==null&&"type"in e&&
typeof e.type=="string",AR=e=>{if(typeof e=="string")return e.startsWith("@")?e.slice(1).trim():e},$R=e=>(typeof e=="str\
ing"?e:"").split(",").map(r=>r.trim()).filter(Boolean),zb=e=>{let t=e.params;return Array.isArray(t)?t.filter(rr).filter(
r=>r.type==="Identifier"&&typeof r.name=="string").map(r=>r.name):[]},Ay=(e,t)=>{var r;return rr(t)&&t.type==="ArrowFunc\
tionExpression"?zb(t):(r=Op[e])!=null?r:[]},RR=(e,t,r,n=new Set)=>{let a=new Set,i;try{i=ue(e)}catch{return{selfSafe:!1,
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
nExpression":c(u.body,new Set([...d,...zb(u)]));return;case"CallExpression":{let f=u.callee,h=u.arguments,y=Array.isArray(
h)?h:[];if(rr(f)&&f.type==="Identifier"){let b=typeof f.name=="string"?f.name:"";if(d.has(b)){s();return}if(_y.has(b)){y.
forEach((T,S)=>{if(S===1){let E=new Set([...d,...Ay(b,T)]),_=rr(T)&&T.type==="ArrowFunctionExpression"?T.body:T;c(_,E)}else
c(T,d)});return}if(r.has(b))a.add(b);else if(!aR.has(b)||ER.has(b)&&!xR(b,y)){s();return}for(let T of y)c(T,d);return}if(rr(
f)&&f.type==="MemberExpression"){if(f.computed){s();return}let b=f.property,T=rr(b)&&typeof b.name=="string"?b.name:"";if(c(
f.object,d),_y.has(T)){y.forEach((S,E)=>{if(E===0){let _=new Set([...d,...Ay(T,S)]),O=rr(S)&&S.type==="ArrowFunctionExpr\
ession"?S.body:S;c(O,_)}else c(S,d)});return}if(!_R.has(T)){s();return}for(let S of y)c(S,d);return}s();return}default:s();
return}}};return c(i,new Set(t)),{selfSafe:o,deps:a}},IR=(e,t=new Set)=>{let r=new Map,n=new Set;for(let l of e)r.has(l.
name)&&n.add(l.name),r.set(l.name,l);let a=new Set([...r.keys()].filter(l=>!n.has(l))),i=new Map;for(let l of a){let c=r.
get(l),u=AR(c.compute);if(u===void 0){i.set(l,{selfSafe:!1,deps:new Set});continue}i.set(l,RR(u,$R(c.parameters),a,t))}let o=new Set,
s=!0;for(;s;){s=!1;for(let[l,c]of i)o.has(l)||!c.selfSafe||[...c.deps].every(u=>o.has(u))&&(o.add(l),s=!0)}return o},$y=new WeakMap,
Kb=(e,t)=>{if(e.type===aa&&t.push({name:e.name,compute:e.compute,parameters:e.parameters}),Array.isArray(e.children))for(let r of e.
children)Kb(r,t)},Gb=(e,t)=>{if(e.type===ia&&typeof e.name=="string"&&t.add(e.name),Array.isArray(e.children))for(let r of e.
children)Gb(r,t)},OR=e=>{let t=$y.get(e);if(t)return t;let r=[];Kb(e,r);let n=new Set;Gb(e,n);let a=IR(r,n);return $y.set(
e,a),a},Ry={objects:[]},Rd=new Set,CR=(e,t,r,n,a)=>{let i=t.scope,o=S=>{let E=r(e,S);if(xe(E))return E.right},s=S=>{var E;
if(uy(i))return;let _=xr([i.key,S]),O=(E=ki(e)[_])==null?void 0:E.value;if(O!==void 0)return O;let M=o(i.key);if(vn(M)){
let W=M;if(S in W)return W[S]}},l=()=>{let S=i;for(;S;){let E=Vd(o(S.key));if(E)return E;S=S.parent}},c=()=>{let S=i;for(;S;){
let E=Vd(o(S.key));if(E)return u(S,E);S=S.parent}},u=(S,E)=>{var _;let O=Ur(e,S.key);if(!xe(O))return;let M=O.right,W=hc(
(_=M.node.data)==null?void 0:_.span);if(!W||W.mode!=="grid"||!W.slots)return;let K;try{let G=Ed(e.def,M.node,W.slots);K=
jl(e,S.key,G).key}catch{return}let Z=n(e,K);if(!Array.isArray(Z))return;let H={start:E.start,end:E.end},we=0;for(let G=0;G<
Z.length;G+=1){let ae=a(e,W.axis,`${K}[${G}]`);!xe(ae)||ae.right===void 0||Fp(H,ae.right)&&(we+=1)}return we},d=S=>{var E,
_,O,M,W,K,Z,H,we,G,ae,Ie,ge;if(S==="$index"){let pe=uy(i)?void 0:i.index;return R(pe)}if(S==="$parentIndex")return R((E=
i.parent)==null?void 0:E.index);if(S==="$scopeKey")return R(i.key);if(S==="$state")return R(e);if(S==="$data")return R(Yb(
(_=e.repo)!=null?_:Ry));if(S==="$spanStart"||S==="$spanEnd"||S==="$spanPosition"){let pe=l();return R(S==="$spanStart"?pe?.
start:S==="$spanEnd"?pe?.end:pe?.position)}if(S==="$spanLength")return R(c());if(S==="$rows")return R(it=>{if(!jt(it))return;
let st,Rr;try{let ir=Ed(e.def,t.node,it),C=jl(e,i.key,ir).key;st=n(e,C),Rr=o(C)}catch{return}if(Array.isArray(st))return st.
map((ir,C)=>{let ne=Array.isArray(Rr)?Rr[C]:void 0;return vn(ne)&&vn(ir)?{...ne,...ir}:ir??ne})});if(S==="$args")return R(
(O=Ep(e))!=null?O:{});if(S==="$speech"){let pe=Er(e),it=pe?.speech;return R(it??{text:null,lang:null})}if(S==="$variant"){
let pe=Er(e);return R(pe?.variant)}return S==="$now"?R((M=Er(e))==null?void 0:M.now):S==="$email"?R((W=Er(e))==null?void 0:
W.$email):S==="$username"?R((K=Er(e))==null?void 0:K.$username):S==="$userKey"?R((Z=Er(e))==null?void 0:Z.$userKey):S===
"$authKind"?R((H=Er(e))==null?void 0:H.$authKind):S==="$authUid"?R((we=Er(e))==null?void 0:we.$authUid):S==="$connection\
s"?R((G=Er(e))==null?void 0:G.$connections):S==="$social"?R((ae=Er(e))==null?void 0:ae.$social):S==="$isOrgAdmin"?R((Ie=
Er(e))==null?void 0:Ie.$isOrgAdmin):S==="$orgUser"?R((ge=Er(e))==null?void 0:ge.$orgUser):Ce("not_resolved")},f=S=>{let E=Er(
e),_=E?.[S];return _!==void 0?R(_):Ce("not_resolved")},h=(S,E,_)=>{var O,M,W;if(Rd.has(_)){let Z=(O=ki(e)[_])==null?void 0:
O.value;return Z!==void 0?Z:s(S)}Rd.add(_);try{let K=Ur(e,_);if(P(K))return s(S);let{key:Z,node:H}=K.right;if(H.type===aa&&
E.isCall)return{__orgFunction:!0,compute:H.compute,parameters:H.parameters,key:Z,memoSafe:OR(e.def).has(H.name)};let we=o(
Z);if(vp(H)){let{memberLookupContexts:G}=E,Ie=(H.isRepeating?((M=G[0])==null?void 0:M.type)==="computed":((W=G[0])==null?
void 0:W.type)!=="computed")?G.map(pe=>pe.property):void 0,ge=n(e,Z,Ie);return we===void 0?ge:Array.isArray(we)&&Array.isArray(
ge)?we.map((pe,it)=>{let st=ge[it];return vn(st)&&vn(pe)?{...st,...pe}:pe??st}):vn(we)&&vn(ge)?{...ge,...we}:we}else if(we===
void 0){let G=s(S);if(G!==void 0)return G}return we}finally{Rd.delete(_)}},y=(S,E,_=i)=>{var O;return(O=b(S,E,_))==null?
void 0:O.value},b=(S,E,_)=>{let{key:O,isDeclared:M}=jl(e,_.key,S),W=K=>{var Z;return(Z=ki(e)[K])==null?void 0:Z.value};if(M){
let K=h(S,E,O);if(K!==void 0)return{value:K,isStored:W(O)!==void 0}}else if(_.parent){let K=W(O);if(K!==void 0)return{value:K,
isStored:!0};let Z=b(S,E,_.parent);if(Z?.isStored)return Z;let H=h(S,E,O);if(H!==void 0)return{value:H,isStored:!1};if(Z!==
void 0)return Z}else{let K=h(S,E,O);if(K!==void 0)return{value:K,isStored:W(O)!==void 0}}},T=(S,E)=>{var _,O;return!jt(S)||
!jt(E)||(O=fR((_=e.repo)!=null?_:Ry)[S])==null?void 0:O[E]};return(S,E)=>{let _=d(S);if(xe(_))return _.right;let O=f(S);
if(xe(O))return O.right;let M=Ed(e.def,t.node,S),W=y(M,E);if(W!==void 0)return W;if(S==="byId")return T}},NR=e=>{let t=o=>o.
type===hr&&o.isRepeating?[o]:[],r=o=>Ss(o).concat(t(o)),n=k(B,o=>r(o.node)),a=k(V,B,(o,s)=>{if(s.node.isOwnScope)return[
B(o,`${s.key}[0]`)];let l=ze(e(o,s.key));return Zc(l,c=>B(o,`${s.key}[${c}]`))}),i=k(V,B,(o,s)=>n(o,s.key).map(l=>{let c=Pn(
o.def,l);return B(o,`${s.scope.key}.${c}`)}));return{selectChildIterationPointers:a,selectChildNodePointers:i}},mc=e=>!!(e.
node.isRepeating&&!e.isIteration),Up=e=>e.node.type===hr?e.node:{nodeTypes:{},rootType:""},Jb=e=>bp(e.node)&&!e.isIteration,
PR=e=>!!e.node.isOwnScope&&!e.isIteration,Zb=e=>{let{isIteration:t,node:r}=e;return t&&r.type===hr},fn=e=>e.node.type===
hr&&e.scope.node!==e.node,Na=e=>fn(e)||Zb(e),DR=e=>lA(e.node.type),MR=e=>{let{key:t,node:r}=e;return fn(e)?t:`${t}.${r.name}`},
Iy=e=>pA(e.node)&&!e.isIteration,jR=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),Oy=e=>!(!vp(e.node)||e.node.isRepeating||
e.node.isOwnScope),LR=(e,t,r)=>{let n=(l,c,u,d=[])=>{var f;let{key:h,node:y}=c,b=d.length?d.slice(1):[];if(!y.isTransient){
if(Wv(y)){let T=e(l,h);return xe(T)?T.right:void 0}if(Jb(c)&&!u){if(c.node.isOwnScope){let T=a(l,B(l,`${h}[0]`),d);return d.
length===0&&Object.keys(T).length===0?void 0:T}if(d.length&&/^\d+$/.test(d[0])){let T=d[0],S=B(l,`${h}[${T}]`),E=a(l,S,b);
return{[T]:E}}else if(c.node.isRecord){let T=(f=c.node.recordKey)!=null?f:"key",S=typeof c.node.recordValue=="string"?c.
node.recordValue:void 0,E=t(l,h);return S!==void 0&&E.length===0?void 0:E.reduce((_,O)=>{let{[T]:M,...W}=a(l,O,b);if(typeof M!=
"string")return _;if(S===void 0)return _[M]=W,_;let K=W[S];return K!==void 0&&(_[M]=K),_},{})}else return t(l,h).map(S=>a(
l,S,b))}return a(l,c,d)}},a=(l,c,u)=>{let d={},f=u.length?u.slice(1):[],h=(b,T)=>{let{node:S}=b,{name:E}=S,_=fn(b)&&c.node!==
b.node,O=n(l,b,_,T);O!==void 0&&(Oy(b)?Object.assign(d,O):d[E]=O)},y=r(l,c.key);return u.length?(y.forEach(b=>{b.node.name===
u[0]?h(b,f):Oy(b)&&h(b,u)}),d):(y.forEach(b=>h(b,f)),d)},i=(l,c,u)=>n(l,c,fn(c),u),o=k(V,B,gA,i),s=k(V,B,(l,c)=>{let u=i(
l,c);return jR(u)?u:{}});return{selectOutput:o,selectOutputObject:s}};var FR=(e,t,r,n)=>n,Ar=k(V,at,hA,FR,(e,t,r="",n)=>{let a=Xb(e,r),i=n?fc(Lp(a),n):a;return Hb(t,i,n)}),Xb=k(V,B,(e,t)=>CR(
e,t,ar,HR,(r,n,a)=>Ar(r,n,a))),UR=(e,t,r,n,a)=>{let i=Xb(e,t),o=a?fc(Lp(i),a):i;return iR(r,o,n)},{selectValue:ar,selectComputedValue:BR,
selectLength:Ma}=SR(Ar),{selectChildIterationPointers:Qb,selectChildNodePointers:e0}=NR(Ma),{selectOutput:HR,selectOutputObject:Bp}=LR(
ar,Qb,e0),ja=e=>k(ar,t=>uc(t,e,"value")),t0=e=>k(ar,t=>i$(t,e,"value")),WR=e=>k(BR,t=>uc(t,e,"value")),Hp=t0(U),r0=ja(ft.union(
[ft.undefined,ft.array(ft.string)])),qR=ja(ft.union([ft.undefined,ft.array(ft.number)])),RL=t0(ft.string),VR=ja(mr),n0=ja(
Re),YR=ja(ft.union([ft.undefined,Nn])),zR=WR(ft.union([ft.undefined,Nn])),KR=ja(ft.union([ft.undefined,Ql])),Wp=ja(n_),GR=(e,t,r,n)=>uc(
Ar(e,r,t.scope.key),n,r),kt=k(V,B,(e,t)=>Jb(t)?Qb(e,t.key):e0(e,t.key)),a0=k(V,B,(e,t)=>{let r=PR(t)?`${t.key}[0]`:t.key;
return kt(e,r)}),Pa=k(V,Gr,yA,(e,t,r=ts)=>{if(t)return r?.(t)?t:Pa(e,t.key,r)}),OL=k(V,B,Gr,(e,t,r)=>r?kt(e,r.key):[t]),
i0=k(V,B,Ap,(e,t,r)=>{if(t.key===r.key)return!0;let n=Gr(e,r.key);return n?i0(e,t.key,n.key):!1}),x=(e,t,r)=>{let n=Ii(e,
t,r),a=k(JA,JR.has(t)?i=>ZR(n(i)):n);return k(V,B,a,(i,o,s)=>es(i,o,s,Ar))},JR=new Set(["htmlTemplate"]),ZR=e=>!e.isFormula&&
o0.string.is(e.value)&&Pv(e.value)?{name:e.name,isFormula:!0,value:fp(hp(e.value)),targetCodec:e.targetCodec}:e,XR=x(_s.string,
"label",e=>Uv(e.name)),QR=x(_s.unknown,"iterationLabel"),eI=k(V,B,QR,(e,t,r)=>{let{node:n}=t;if(P(r))return r;let a=r.right;
if(a!=null&&a!=="")return R(String(a));let i=kA(n);return GR(e,t,i,_s.string)}),qp=k(V,B,(e,t)=>{let{key:r,isIteration:n}=t;
return n?eI(e,r):XR(e,r)}),tI=(...e)=>t=>e.every(r=>r(t)),Id=(e,t)=>e===t?e:tI(e,t),s0=(e,t)=>({direction:e.direction,include:Id(
e.include,t.include),traverseChildren:Id(e.traverseChildren,t.traverseChildren),traverseParent:Id(e.traverseParent,t.traverseParent)}),
l0=e=>(t,r)=>{let n=Gr(t,r.key);if(!n)return;let a=kt(t,n.key),i=a.indexOf(r);if(i===-1)return;let s=a[i+(e==="back"?-1:
1)];if(s)return s},rI=l0("forward"),nI=l0("back"),c0=(e,t,r)=>{if(!r.traverseChildren(t))return t;let n=kt(e,t.key),a=Ys(
n);return a?c0(e,a,r):t},aI=(e,t,r)=>{let n=nI(e,t);return n?c0(e,n,r):Gr(e,t.key)},u0=(e,t,r)=>{let n=rI(e,t);if(n)return n;
let a=Gr(e,t.key);if(a&&r.traverseParent(a))return u0(e,a,r)},d0=k(V,B,Vv,(e,t,r=ic)=>aI(e,t,r)),Vp=k(V,B,Vv,(e,t,r=ic)=>{
if(r.traverseChildren(t)){let n=kt(e,t.key);if(n.length>0)return n[0]}return u0(e,t,r)}),Ei=e=>{let{node:t}=e;switch(t.type){case"\
screen":return!0;default:return!1}},iI=k(V,e=>kt(e,"").filter(Ei)),As=(e,t,r)=>{let n=r.direction==="back"?d0(e,t,r):Vp(
e,t,r);if(n)return r.include(n)?n:As(e,n.key,r)},p0=(e,t,r)=>{let n=[],a=t;for(;a!==void 0;){let i=r.direction==="back"?
d0(e,a,r):Vp(e,a,r);if(!i)break;r.include(i)&&n.push(i),a=i.key}return n},gc=e=>k(V,at,(t,r)=>As(t,r,e)),DL=gc(Mn({include:Ei,
direction:"back"})),oI=gc(Mn({include:Ei,direction:"forward"})),sI=k(V,at,(e,t)=>{let r=Pa(e,t,Ei);if(!r){let n=Vp(e,"",
ic);return n||$p(e)}return r}),f0=k(V,Sp,(e,t)=>{let r=Ur(e,t);return P(r)?(console.warn(`[orgicore] cursor "${t}" does \
not resolve in the current app def \u2014 falling back to the home screen (${r.left}).`),$p(e)):r.right}),Od=e=>e.node.type===
ms,lI=(e,t)=>{let r=Od(t)?t:void 0,n=Pa(e,t.key,Od);for(;n;)r=n,n=Pa(e,n.key,Od);return r},Yp=k(V,f0,(e,t)=>{if(Ei(t))return t;
let r=Pa(e,t.key,Ei);if(r)return r;let n=lI(e,t);return n||oI(e,t.key)||$p(e)}),ML=k(kp,e=>Ys(e)),cI=k(V,Yp,(e,t)=>sI(e,
t.key).key),uI=e=>Mn({traverseParent:t=>e!==t}),dI=k(B,uI),pI=k(dI,e=>s0(e,Mn({include:DR}))),fI=x(Qy,"variant","basic"),
hI=x(Qx,"variant"),mI=x(mr,"pageSize"),gI=x(mr,"maxLength"),h0=x(Re,"required"),yI=x(Re,"hidden"),vI=x(le(Zl),"size"),bI=x(
le(cn(op)),"validation"),wI=x(le(ip),"imageOutputOptions"),TI=x(U,"pluginName"),m0={maxColumns:1},kI=x(rp,"layout",m0),La=k(
B,yI,(e,t)=>{let{node:{type:r}}=e;return(r===$i||r===aa||r===ia)&&xe(t)&&t.right===void 0?R(!0):t}),SI=k(B,kI,(e,t)=>e.isIteration?
R(m0):t),EI=x(sv,"formConfig"),UL=x(ap,"containerStyle",Vy),BL=x(_i,"data",Vy),xI=x(le(Ci.array(Jl)),"pluginParams"),Ni=k(
qp,La,(e,t)=>({label:e,hidden:t})),zp=k(ar,h0,(e,t)=>P(t)?t:P(e)?R(!1):R(!!t.right&&g0(e.right))),Kp=k(V,B,bI,ar,(e,t,r,n)=>{
if(P(r))return r;if(P(n)||g0(n.right))return R(void 0);let a=ix(r.right);for(let i of a){let o=Ar(e,i.expression,t.scope.
key);if(P(o))return Ce(`error evaluating validation rule "${i.expression}": ${o.left}`);if(!o.right)return R(_I(e,i.errorMessage,
t.scope.key))}return R(void 0)}),_I=(e,t,r)=>{if(!t.startsWith(Oa))return t;let n=fp(t),a=Ar(e,n,r);return P(a)||a.right==
null||a.right===""?n:String(a.right)},AI=x(U,"help"),$I=x(U,"placeholder"),RI=x(U,"deepHelp"),II=x(le(Ci.array(Ci.string)),
"examples"),OI=x(Re,"aiEnabled"),g0=e=>typeof e=="string"?e.trim()==="":Array.isArray(e)?e.length===0:e==null,yc=k(Ni,zp,
h0,Kp,AI,$I,RI,II,vI,OI,(e,t,r,n,a,i,o,s,l,c)=>({...e,missingRequired:t,required:r,errorMessage:n,help:a,placeholder:i,deepHelp:o,
examples:s,size:l,aiEnabled:c})),y0=k(yc,qR,(e,t)=>({...e,value:t})),v0=k(yc,r0,(e,t)=>({...e,value:t})),b0=k(Ni,YR,zR,EI,
(e,t,r,n)=>({...e,currentValue:t,computedValue:r,config:n})),CI=x(Mx,"variant","single"),NI=x(Qd,"idiom","select"),PI=x(
Ci.array(cv),"pickerValues"),DI=e=>typeof e=="string"?{id:e,label:e}:e,MI=k(PI,e=>P(e)?e:R(e.right.map(DI))),vc=k(yc,CI,
MI,(e,t,r)=>({...e,variant:t,pickerValues:r})),jI=k(vc,Hp,NI,(e,t,r)=>({...e,value:t,idiom:r})),LI=k(vc,r0,(e,t)=>({...e,
value:t})),FI=e=>fn(e)?"":`${e.key}.`,w0=e=>t=>`${FI(t)}${e}`,UI=w0("value"),BI=w0("expanded"),HI=k(B,UI),WI=k(B,BI),Gp=k(
V,HI,KR),T0=k(V,WI,n0),k0=k(B,Ni,Gp,T0,(e,t,r,n)=>{let a=fn(e);return{...t,value:r,expanded:n,isRoot:R(a)}}),HL=k(Ni,be),
WL=k(yc,be),qI=k(b0,be),qL=k(y0,be),VL=k(v0,be),YL=k(vc,be),zL=k(jI,be),KL=k(LI,be),VI=k(k0,be),YI=k(TI,xI,(e,t)=>({name:e,
params:t})),zI=k(YI,be),GL=k(V,B,zI,(e,t,{name:r,params:n=[]})=>{let a={};for(let i of n)if(i.type==="static"&&(a[i.name]=
i.value),i.type==="dynamic"){let o=Ar(e,i.formula,t.scope.key);if(P(o))return Ce(`Error evaluating plugin "${r}" param "${i.
name}": ${o.left}`);a[i.name]=o.right}return R(a)});var JL=k(V,B,mI,gI,(e,t,r,n)=>{let{node:a,key:i,isIteration:o}=t;if(o)return;let s=ze(r),l=ze(n);if(s===void 0)return;let c=l??
1/0,u=a.data;if(Hl(u)){let f=ar(e,i);if(xe(f)&&Array.isArray(f.right)){let h=f.right.length;c=l!==void 0?Math.min(h,l):h}}
let d=ze(Ma(e,i));return{currentLength:d,totalLength:c,hasMore:d<c,pageSize:s}}),xi={selectAppNodeVariant:x(Yx,"variant",
"folder"),selectFlowStepVariant:x(zx,"variant","aiQuery"),selectHidden:La,selectLabel:qp,selectMissingRequired:zp,selectValidationError:Kp},
ZL=x(U,"name"),XL=x(U,"label"),QL=x(Re,"isRepeating"),e6=x(Re,"isOwnScope"),t6=x(Re,"isRecord"),r6=x(U,"recordKey"),n6=x(
U,"recordValue"),a6=x(ce.unknown,"compute"),i6=x(Re,"isDerived"),o6=x(Re,"isTransient"),s6=x(mr,"maxLength"),l6=x(mr,"pa\
geSize"),KI=x(le(np),"place"),GI=x(le(rp),"layout"),JI=x(le(ap),"containerStyle"),ZI=x(U,"submitObjectType"),XI=x(le(cn(
op)),"validation"),QI=x(Re,"required"),eO=x(U,"help"),tO=x(U,"placeholder"),c6=x(U,"deepHelp"),u6=x(le(ce.array(ce.string)),
"examples"),rO=x(le(Zl),"size"),nO=x(Re,"aiEnabled"),aO=x(U,"iterationLabel"),iO=x(U,"nounLabel"),bc=x(U,"icon"),S0=x(U,
"color"),d6=x(le(Zy),"authMode"),p6=x(Re,"orgLogin"),f6=x(U,"appLogo"),h6=x(le(cn(av)),"notifications"),m6=x(le(cn(iv)),
"transitions"),g6=x(le(cn(ov)),"botActors"),y6=x(le(rv),"theme"),v6=x(le(is),"themeColors"),b6=x(le(is),"themeColorsDark"),
w6=x(U,"customCss"),T6=x(mr,"contentMaxWidth"),k6=x(U,"headerLogo"),S6=x(le(lv),"navigation"),E6=x(le(hv),"library"),x6=x(
le(mv),"feature"),E0=x(Re,"hideHeader"),_6=x(le(Xy),"variant"),oO=x(Re,"showHeader"),sO=x(Re,"collapsible"),lO=x(Re,"col\
lapsedByDefault"),cO=x(Re,"actionMenu"),uO=x(Re,"reorderable"),dO=x(U,"orderField"),pO=x(Re,"hideTopBar"),fO=x(Re,"hideN\
av"),hO=x(U,"itemLabel"),mO=x(U,"summary"),x0=x(mr,"min"),_0=x(mr,"max"),gO=x(Re,"autoAdvance"),A0=x(U,"actionLabel"),yO=x(
U,"idleTitle"),vO=x(U,"idleDescription"),bO=x(U,"runningTitle"),wO=x(U,"runningDescription"),TO=x(U,"authTitle"),kO=x(U,
"authDescription"),SO=x(U,"noCreditsTitle"),EO=x(U,"noCreditsDescription"),$0=x(U,"promptTemplate"),A6=x(U,"imageSource"),
R0=x(U,"resultObjectType"),I0=x(U,"typeDescription"),$6=x(le(ce.union([Xl,ce.string])),"model"),$s=x(Re,"mockEnabled"),xO=x(
mr,"mockResultCount"),_O=x(U,"mockResults"),AO=x(mr,"maxUserTurns"),$O=x(U,"steeringChips"),RO=x(Re,"voiceInput"),IO=x(Re,
"speakReplies"),OO=x(U,"speechLang"),CO=x(U,"inputPlaceholder"),NO=x(U,"mockReplies"),PO=x(U,"fetchUrl"),O0=x(U,"prompt"),
DO=x(U,"mockImageUrl"),MO=x(U,"lyrics"),jO=x(mr,"durationSec"),LO=x(U,"mockAudioUrl"),FO=x(U,"audioSourceUrl"),UO=x(U,"l\
anguage"),BO=x(U,"mockTranscript"),R6=x(U,"sourceExpression"),HO=x(U,"publishDataType"),WO=x(U,"publishScope"),qO=x(U,"p\
ublishVariant"),VO=x(U,"script"),I6=x(le(ep),"functionName"),O6=x(U,"args"),YO=x(le(ce.array(ce.string)),"refreshCallabl\
es"),zO=x(U,"onSuccessNavigate"),KO=x(U,"successMessage"),GO=x(le(ce.record(ce.string,uv)),"nodeTypes"),JO=x(U,"rootType"),
ZO=x(Re,"canAdd"),XO=x(Re,"canEdit"),C6=x(le(Zd),"textTransform"),QO=x(mr,"step"),N6=x(le(ce.union([Xd,ce.string])),"for\
mat"),P6=x(le(ce.union([Qd,ce.string])),"idiom"),D6=x(U,"placeholderIcon"),eC=x(le(ip),"imageOutputOptions"),tC=x(U,"aiS\
ystemPromptFormula"),rC=x(U,"userAvatarUid"),nC=x(Re,"showCamera"),aC=x(Re,"showFilePicker"),iC=x(Re,"showSearch"),oC=x(
Re,"showEdit"),sC=x(Re,"showCommit"),lC=x(Re,"multiple"),cC=x(mr,"maxSizeMb"),uC=x(U,"htmlTemplate"),dC=x(U,"purpose"),pC=x(
le(ce.record(ce.string,pv)),"actions"),fC=x(U,"parameters"),hC=x(U,"returns"),mC=x(U,"returnTypeHint"),M6=x(U,"pluginNam\
e"),j6=x(le(ce.array(Jl)),"pluginParams"),L6=x(U,"roomKey"),gC=x(U,"displayName"),yC=x(U,"identity"),F6=x(le(tp),"mediaM\
ode"),vC=x(le(nv),"displayMode"),bC=x(mr,"maxTiles"),wC=x(U,"focusIdentity"),TC=x(Xy,"variant","inline"),kC=x(ce.unknown,
"imageSource"),SC=x(le(ce.union([Xl,ce.string])),"model"),EC=x(le(ce.union([Xl,ce.string])),"model"),xC=x(le(ce.union([Ux,
ce.string])),"model"),_C=x(le(ce.union([Lx,ce.string])),"model"),AC=x(le(ce.union([Fx,ce.string])),"model"),$C=x(ce.unknown,
"sourceExpression"),RC=x(jx,"variant","contained"),IC=x(ep,"functionName"),OC=x(ce.unknown,"args"),CC=x(Zl,"size","mediu\
m"),NC=x(Qy,"variant","basic"),PC=x(Zd,"textTransform","none"),DC=x(le(ce.union([ev,ce.string])),"variant"),MC=x(le(ce.union(
[ce.literal("checkbox"),ce.literal("toggle")])),"variant"),jC=x(Xd,"format","date"),LC=x(le(ce.union([Dx,ce.string])),"v\
ariant"),FC=x(ce.string,"placeholderIcon","person"),UC=x(ce.string,"roomKey"),BC=x(tp,"mediaMode","video"),$r=k(xi.selectLabel,
xi.selectHidden,KI,(e,t,r)=>({label:e,hidden:t,place:r})),Jp=k(GI,JI,ZI,(e,t,r)=>({layout:e,containerStyle:t,submitObjectType:r})),
Rs=k($r,XI,QI,eO,tO,rO,nO,xi.selectMissingRequired,xi.selectValidationError,(e,t,r,n,a,i,o,s,l)=>({...e,validation:t,required:r,
help:n,placeholder:a,size:i,aiEnabled:o,missingRequired:s,errorMessage:l})),HC=k(aO,iO,bc,S0,(e,t,r,n)=>({iterationLabel:e,
nounLabel:t,icon:r,color:n})),wc=k($r,Jp,xi.selectAppNodeVariant,(e,t,r)=>({...e,...t,variant:r})),WC=k(wc,e=>({...e,variant:R(
"tabGroup")})),qC=k(wc,e=>({...e,variant:R("tab")})),VC=k(wc,e=>({...e,variant:R("folder")})),U6=k($r,Jp,bc,E0,(e,t,r,n)=>({
...e,...t,icon:r,hideHeader:n})),YC=k($r,Jp,HC,TC,oO,sO,lO,cO,uO,dO,(e,t,r,n,a,i,o,s,l,c)=>({...e,...t,...r,variant:n,showHeader:a,
collapsible:i,collapsedByDefault:o,actionMenu:s,reorderable:l,orderField:c})),zC=k($r,pO,fO,(e,t,r)=>({...e,hideTopBar:t,
hideNav:r})),KC=k($r,hO,mO,x0,_0,(e,t,r,n,a)=>({...e,itemLabel:t,summary:r,min:n,max:a})),hn=k($r,xi.selectFlowStepVariant,
gO,A0,yO,vO,bO,wO,TO,kO,SO,EO,(e,t,r,n,a,i,o,s,l,c,u,d)=>({...e,variant:t,autoAdvance:r,actionLabel:n,idleTitle:a,idleDescription:i,
runningTitle:o,runningDescription:s,authTitle:l,authDescription:c,noCreditsTitle:u,noCreditsDescription:d})),GC=k(hn,$0,
kC,R0,I0,SC,$s,xO,_O,(e,t,r,n,a,i,o,s,l)=>({...e,variant:R("aiQuery"),promptTemplate:t,imageSource:r,resultObjectType:n,
typeDescription:a,model:i,mockEnabled:o,mockResultCount:s,mockResults:l})),JC=k(hn,$0,R0,I0,EC,AO,$O,RO,IO,OO,CO,$s,NO,(e,t,r,n,a,i,o,s,l,c,u,d,f)=>({
...e,variant:R("aiChat"),promptTemplate:t,resultObjectType:r,typeDescription:n,model:a,maxUserTurns:i,steeringChips:o,voiceInput:s,
speakReplies:l,speechLang:c,inputPlaceholder:u,mockEnabled:d,mockReplies:f})),ZC=k(hn,PO,(e,t)=>({...e,variant:R("fetchD\
ata"),fetchUrl:t})),XC=k(hn,O0,xC,$s,DO,(e,t,r,n,a)=>({...e,variant:R("imageGeneration"),prompt:t,model:r,mockEnabled:n,
mockImageUrl:a})),QC=k(hn,O0,MO,_C,jO,$s,LO,(e,t,r,n,a,i,o)=>({...e,variant:R("audioGeneration"),prompt:t,lyrics:r,model:n,
durationSec:a,mockEnabled:i,mockAudioUrl:o})),e2=k(hn,FO,AC,UO,$s,BO,(e,t,r,n,a,i)=>({...e,variant:R("transcribe"),audioSourceUrl:t,
model:r,language:n,mockEnabled:a,mockTranscript:i})),t2=k(hn,$C,HO,WO,qO,(e,t,r,n,a)=>({...e,variant:R("publishData"),sourceExpression:t,
publishDataType:r,publishScope:n,publishVariant:a})),r2=k(hn,VO,(e,t)=>({...e,variant:R("script"),script:t})),C0=k($r,RC,
IC,OC,A0,YO,zO,KO,CC,bc,(e,t,r,n,a,i,o,s,l,c)=>({...e,variant:t,functionName:r,args:n,actionLabel:a,refreshCallables:i,onSuccessNavigate:o,
successMessage:s,size:l,icon:c})),N0=k(Rs,NC,PC,Hp,(e,t,r,n)=>({...e,variant:t,textTransform:r,value:n})),P0=k(Rs,DC,x0,
_0,QO,VR,(e,t,r,n,a,i)=>({...e,variant:t,min:r,max:n,step:a,value:i})),D0=k(Rs,MC,n0,(e,t,r)=>({...e,variant:t,value:r})),
M0=k(Rs,jC,Hp,(e,t,r)=>({...e,format:t,value:r})),j0=k(Rs,LC,FC,eC,tC,rC,nC,aC,iC,oC,sC,lC,cC,Wp,(e,t,r,n,a,i,o,s,l,c,u,d,f,h)=>({
...e,variant:t,placeholderIcon:r,imageOutputOptions:n,aiSystemPromptFormula:a,userAvatarUid:i,showCamera:o,showFilePicker:s,
showSearch:l,showEdit:c,showCommit:u,multiple:d,maxSizeMb:f,value:h})),L0=k($r,uC,dC,pC,ar,(e,t,r,n,a)=>({...e,htmlTemplate:t,
purpose:r,actions:n,value:a})),F0=k($r,ar,(e,t)=>({...e,value:t})),U0=k($r,fC,hC,mC,ar,(e,t,r,n,a)=>({...e,parameters:t,
returns:r,returnTypeHint:n,value:a})),B0=k($r,ar,(e,t)=>({...e,value:t})),H0=k($r,UC,gC,yC,BC,vC,bC,wC,(e,t,r,n,a,i,o,s)=>({
...e,roomKey:t,displayName:r,identity:n,mediaMode:a,displayMode:i,maxTiles:o,focusIdentity:s})),n2=(e,t)=>{if(e.type.includes(
":")||e.type in t)return e.type;let r=vv(e.type);if(r.variant!==void 0)return`${r.type}:${r.variant}`;if(e.variant){let n=e.
variant.includes(":")?e.variant.split(":")[0]:e.variant;return`${e.type}:${n}`}return e.type};var Tc=k(V,B,(e,t)=>{let{rootType:r,nodeTypes:n}=Up(t);if(fn(t))return r;let a=Gp(e,t.key);if(xe(a)&&a.right)return n2(a.
right,n)}),a2=e=>e,W0=k(a2,at,(e,t)=>{let{nodeTypes:r}=e,n=r[t];if(n){let{allowedChildTypes:a,category:i="",icon:o,color:s,
label:l}=n;return{allowedChildTypes:a,name:t,category:i,icon:o,color:s,label:l}}return{allowedChildTypes:[],name:t,category:""}}),
hs=k(B,Tc,(e,t="")=>W0(Up(e),t)),i2=k(hs,e=>e.allowedChildTypes),o2=k(B,i2,(e,t)=>t.map(r=>W0(Up(e),r))),s2=k(Tc,hs,bc,(e,t,r)=>xe(
r)&&r.right?r.right:t.icon||e||"objects"),l2=k(hs,S0,(e,t)=>xe(t)&&t.right?t.right:e.color||"#616161"),kc=k(V,B,(e,t)=>fn(
t)?kt(e,t.key):Zb(t)?kt(e,`${t.key}.${t.node.name}`):[]),q0=k(kc,e=>e.length>0),c2=k(B,q0,(e,t)=>!t&&!fn(e)),u2=k(kt,e=>e.
find(t=>t.node.type===hr)),V0=k(V,B,(e,t)=>{let{scope:r}=t;return r.node.type!==hr?0:1+V0(e,xs(r))}),d2=k(V,at,(e,t)=>Pa(
e,t,Na)),p2=k(V,B,Ap,(e,t,r)=>{let n=Tc(e,t.key);if(!n)return[];let a=hs(e,r.key),i=[];a.allowedChildTypes.includes(n)&&
i.push("into");let o=d2(e,r.key);return o&&hs(e,o.key).allowedChildTypes.includes(n)&&(i.push("before"),i.push("after")),
i}),H6=k(V,B,Ap,(e,t,r,n)=>n,(e,t,r,n)=>{let a=p2(e,t.key,r.key),{mouseY:i,elementTop:o,elementBottom:s}=n,l=r.key;if(a.
length===0)return;let c=s-o,u=i-o<=10,d=s-i<=10,f=!u&&!d,h=i-o<=c/2,y=s-i<=c/2,b=a.includes("before"),T=a.includes("afte\
r");if(a.includes("into")&&f)return{target:l,action:"into",position:"center"};if(h&&b)return{target:l,action:"before",position:"\
top"};if(y&&T)return{target:l,action:"after",position:"bottom"}}),W6=gc(Mn({include:Na,direction:"forward"})),q6=gc(Mn({
include:Na,direction:"back"})),Y0=k(V,vA,(e,t)=>Mn({include:Na,direction:t,traverseChildren:r=>{if(!Na(r))return!0;let n=T0(
e,r.key);return xe(n)&&!!n.right}})),V6=k(V,at,(e,t)=>As(e,t,Y0(e,"forward"))),Y6=k(V,at,(e,t)=>As(e,t,Y0(e,"back"))),K6=k(
V,e=>Bp(e,"")),f2=e=>k(Bp,t=>Rb(t,e,"output")),h2=k(V,B,(e,t)=>Iy(t)?t:Pa(e,t.key,Iy)),G6=k(V,h2,(e,t)=>{if(!t||!t.node.
submitObjectType)return;let{scope:r,node:n,key:a}=t,i=Bp(e,a),o=Pn(e.def,n),s=d=>xr([r.key,`${o}$${d}`]),l=s("id"),c=s("\
createdAt"),u=s("createdBy");return{pointer:t,type:t.node.submitObjectType,idKey:l,createdAtKey:c,createdByKey:u,obj:i}}),
z0=k(V,pI,(e,t)=>s0(t,Mn({include:r=>{let n=Nd(zp(e,r.key),!1),a=!!Nd(Kp(e,r.key),void 0);return n||a}}))),m2=k(V,at,z0,
As),g2=(e,t)=>P(Ur(e,t))?void 0:m2(e,t),Z6=k(V,at,z0,p0),y2=k(V,at,(e,t)=>p0(e,t,Mn({traverseParent:ts,include:r=>{if(r.
node.type!==Ri)return!1;let n=Wp(e,r.key);if(P(n)||Array.isArray(n.right))return!1;let{url:a,previewUrl:i}=n.right;return!a&&
!!i}}))),X6=k(V,y2,(e,t)=>t.flatMap(r=>{let n=ze(Wp(e,r.key));return Array.isArray(n)?[]:[{pointerKey:r.key,value:n,imageOutputOptions:Nd(
wI(e,r.key),void 0)}]})),v2=k(wc,be),b2=k(WC,be),w2=k(qC,be),T2=k(VC,be),k2=k(YC,be),S2=k(zC,be),E2=k(KC,be),x2=k(hn,be),
_2=k(GC,be),A2=k(JC,be),$2=k(ZC,be),R2=k(XC,be),I2=k(QC,be),O2=k(e2,be),C2=k(t2,be),N2=k(r2,be),P2=k(C0,be),D2=k(N0,be),
M2=k(P0,be),j2=k(D0,be),L2=k(M0,be),F2=k(j0,be),U2=k(L0,be),B2=k(F0,be),H2=k(U0,be),W2=k(B0,be),q2=k(H0,be),K0=k(Ni,GO,JO,
ZO,XO,(e,t,r,n,a)=>({...e,nodeTypes:t,rootType:r,canAdd:n,canEdit:a})),V2=k(K0,be),Y2=k(V,B,(e,t)=>{let{node:r,key:n}=t;
switch(k_(r.type)){case gs:let a=fI(e,n);return xe(a)&&a.right==="stringArray"?v0(e,n):N0(e,n);case vs:return D0(e,n);case ys:
let i=hI(e,n);return xe(i)&&i.right==="intArray"?y0(e,n):P0(e,n);case bs:return M0(e,n);case Ri:return j0(e,n);case ws:return vc(
e,n);case hr:return r.isRepeating?k0(e,n):K0(e,n);case Ia:return L0(e,n);case tc:return b0(e,n);case $i:return F0(e,n);case aa:
return U0(e,n);case ia:return B0(e,n);case Br:return hn(e,n);case nc:return C0(e,n);case cp:return H0(e,n);default:return Ni(
e,n)}}),z2=k(V,Yp,(e,t)=>{let r=E0(e,t.key);return xe(r)&&r.right===!0}),Pi=k(V,a0,(e,t)=>t.filter(r=>{let n=La(e,r.key);
return!(xe(n)&&n.right)})),Cy={kind:"auto"},K2=40,G2=e=>e?.mode==="spatial",bi=(e,t,r)=>{if(typeof r=="number")return Number.
isFinite(r)?r:void 0;if(typeof r!="string")return;if(!r.startsWith("@")){if(r.trim()==="")return;let i=Number(r);return Number.
isFinite(i)?i:void 0}let n=Ar(e,fp(r),t);if(!xe(n))return;let a=n.right;return typeof a=="number"&&Number.isFinite(a)?a:
void 0},J2=k(V,B,SI,(e,t,r)=>{if(!xe(r))return;let n=r.right;if(!G2(n))return;let a=bi(e,t.key,n.cols);if(a===void 0)return;
let i=Math.floor(a);if(i<1)return;let o=bi(e,t.key,n.rows),s=o!==void 0&&Math.floor(o)>=1?Math.floor(o):void 0,l=typeof n.
rowHeight=="number"&&Number.isFinite(n.rowHeight)&&n.rowHeight>0?n.rowHeight:void 0,c=typeof n.minColumnWidth=="number"&&
n.minColumnWidth>0?n.minColumnWidth:K2;return{cols:i,rows:s,rowHeight:l,minColumnWidth:c}}),Ny=e=>e===void 0?1:Math.max(
1,Math.floor(e)),Z2=(e,t)=>{let r=Math.min(Math.max(0,Math.floor(e.x)),t.cols-1),n=Math.max(0,Math.floor(e.y)),a=Math.min(
Ny(e.w),t.cols-r),i=Ny(e.h);return t.rows!==void 0&&(n=Math.min(n,t.rows-1),i=Math.min(i,t.rows-n)),a=Math.max(1,a),i=Math.
max(1,i),{kind:"placed",x:r,y:n,w:a,h:i}},X2=k(V,B,(e,t,r)=>r,(e,t,r)=>{let n=t.node.place,a=np.is(n)?n:void 0;if(!a)return Cy;
let i=bi(e,t.key,a.x),o=bi(e,t.key,a.y);if(i===void 0||o===void 0)return Cy;let s=bi(e,t.key,a.w),l=bi(e,t.key,a.h);return Z2(
{x:i,y:o,w:s,h:l},r)}),Q2=k(V,Pi,(e,t)=>t.flatMap(r=>mc(r)?G0(r)?[]:kt(e,r.key).filter(n=>{let a=La(e,n.key);return!(xe(
a)&&a.right)}):[r])),G0=e=>{var t,r;return((r=hc((t=e.node.data)==null?void 0:t.span))==null?void 0:r.mode)==="grid"},eN=k(
Pi,e=>e.filter(t=>mc(t)&&G0(t))),tN=k(V,Pi,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{let a=t.find(o=>mc(o)&&o.node.name===r);if(!a)
return[];let i=[];return kt(e,a.key).forEach((o,s)=>{let l=La(e,o.key);if(xe(l)&&l.right)return;let c=X2(e,o.key,n);c.kind===
"placed"&&i.push({index:s,x:c.x,y:c.y})}),i}),nF=k(V,(e,t)=>t,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{var a;let i=B(e,r),o=hc(
(a=i.node.data)==null?void 0:a.span);if(!o||o.mode!=="grid")return[];let s=tN(e,t,o.slots,n);if(s.length===0)return[];let l=rN(
e,t,o.slots),c=s.map(d=>{let f=l[d.index];if(f===void 0)return;let h=Ar(e,o.axis,f);return xe(h)?h.right:void 0}),u=[];for(let d of kt(
e,r)){let f=La(e,d.key);if(xe(f)&&f.right)continue;let h=ar(e,d.key),y=xe(h)?Vd(h.right):void 0;if(!y)continue;let b={start:y.
start,end:y.end},T=[];s.forEach((S,E)=>{let _=c[E];_!==void 0&&Fp(b,_)&&T.push(S.index)}),T.length>0&&u.push({recordKey:d.
key,slots:T})}return dR(u,s)}),rN=(e,t,r)=>{let n=Pi(e,t).find(a=>mc(a)&&a.node.name===r);return n?kt(e,n.key).map(a=>a.
key):[]};var nN=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="running",aN=(e,t)=>nN(ze(ar(e,t)))?kt(e,t).map(r=>r.key):
[],iN=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Py=new WeakMap,oN=(e,t)=>{var r;let n=Py.get(e);n||(n=new Map,Py.set(e,
n));let a=n.get(t);if(a!==void 0)return a;let i;try{i=new RegExp(`(^|[^\\w$.])${iN(t)}\\s*\\??\\.\\s*(partial|ready)\\b`).
test((r=JSON.stringify(e))!=null?r:"")}catch{i=!0}return n.set(t,i),i},sN=(e,t)=>{if(kt(e,t).length>0)return!0;let{name:r}=B(
e,t).node;return r?oN(e.def,r):!1},Rt=(e,t)=>{let r=oa(e);return{...e,instance:{...r,...t}}},J0=(e,t)=>{switch(t.type){case Gv:
return uN(e,t);case Jv:return dN(e,t);case Zv:return pN(e,t);case Xv:return fN(e,t);case Qv:return hN(e,t);case eb:return mN(
e,t.payload);case tb:return gN(e,t);case ub:return Q0(e,t.payload);case rb:return vN(e,t);case cb:return tw(e,t.payload);case nb:
return bN(e,t.payload);case lb:return wN(e,t);case ab:return Yd(e,t.payload);case ib:return TN(e,t);case ob:return EN(e,
t);case sb:return _N(e);case pb:return AN(e,t);case xp:return nw(e,t);case db:return t.payload.actions.reduce((r,n)=>J0(
r,n),e)}},lN=(e,t)=>{let r=t.payload.pointerKey;return B(e,r)},Z0=(e,t)=>{let r=Ur(e,t);if(P(r)){console.warn(`[orgicore\
] ignoring write to unresolvable pointer "${t}" \u2014 the node is not declared on the current app def (${r.left}).`);return}
return r.right},cN=e=>t=>t.pointer===e.pointer?e:t,uN=(e,t)=>{let{appDef:r,appInstance:n}=t.payload;return{...e,def:r,instance:n}},
dN=(e,t)=>{let{appInstance:r}=t.payload;return{...e,instance:r}},pN=(e,t)=>{let{appDef:r}=t.payload;return{...e,def:r}},
fN=(e,t)=>{let{data:r}=t.payload;return{...e,context:{...e.context,...r}}},hN=(e,t)=>{let{repo:r}=t.payload;return{...e,
repo:r}},X0=(e,t,r)=>{let n=pn(e),a=cc(e),i={pointer:t,length:r};if(!a[t])return Rt(e,{lengths:[...n,i]});let s=n.map(l=>l.
pointer===t?i:l);return Rt(e,{lengths:s})},mN=(e,t)=>{let{value:r,pointerKey:n}=t,a=Z0(e,n);if(!a)return e;let{key:i,scope:o,
node:s}=a;if(s.isDerived)return e;let l=dn(e),c={pointer:i,value:r},d=ki(e)[i];if(!d){let y=Rp(e,o.key).reduce((b,T)=>{if(bp(
T.node)){let S=T.index+1,E=xs(T),_=ze(Ma(e,E));if(S>_)return X0(b,E,S)}return b},e);return Rt(y,{data:[...l,c]})}if(d.value===
r)return e;let f=l.map(cN(c));return Rt(e,{data:f})},Sc=e=>(t,r,n)=>ZA(e,t,r,n),gN=(e,t)=>{let r=Z0(e,t.payload.pointerKey);
if(!r)return e;let a=dn(e).filter(i=>i.pointer!==r.key);return Rt(e,{data:a})},Q0=(e,{pointerKey:t})=>{let r=yN(e,t),n=dn(
e),a=pn(e),i=n.filter(s=>!r.has(s.pointer)),o=a.filter(s=>!r.has(s.pointer));return i.length===n.length&&o.length===a.length?
e:Rt(e,{data:i,lengths:o})},yN=(e,t)=>{let r=new Set,n=a=>{if(!r.has(a)){r.add(a);for(let i of kt(e,a))n(i.key)}};return n(
t),r},ew=(e,t,r)=>{let n=[],a=new Set,i=s=>{if(!a.has(s.key)){a.add(s.key),r(s)&&n.push(s.key);for(let l of kt(e,s.key))
i(l)}},o=Ur(e,t);return xe(o)&&i(o.right),n},vN=(e,t)=>{let{node:r,isIteration:n,key:a}=lN(e,t),{index:i}=t.payload,o=dn(
e),s=pn(e),l=cc(e);if(!r.isRepeating||n)return e;let c=Sc(e),u=o.map(h=>{let{pointer:y}=h,b=na(e,a,y);if(b>=i){let T=c(a,
y,b+1);return{...h,pointer:T}}return h}),d=s.map(h=>{let{pointer:y,length:b}=h;if(a===y)return{pointer:y,length:b+1};let T=na(
e,a,y);if(T>=i){let S=c(a,y,T+1),E=Dn(e,S);return{length:b,pointer:xs(E)}}return h}),f=Rt(e,{data:u,lengths:d});if(!l[a]){
let h=pn(f);return Rt(f,{lengths:[...h,{pointer:a,length:1}]})}return f},Yd=(e,{pointerKey:t,toIndex:r})=>{let n=Dn(e,t),
a=n.key;if(!n.node.isRepeating)return e;let i=dn(e),o=pn(e),s=Sc(e),l=n.index,c=Math.min(l,r),u=Math.max(l,r),d=i.map(h=>{
let{pointer:y}=h,b=na(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,S=s(a,y,T);return{...h,pointer:S}}return h}),f=o.map(
h=>{let{pointer:y}=h,b=na(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,S=s(a,y,T),E=Dn(e,S);return{...h,pointer:xs(E)}}
return h});return Rt(e,{data:d,lengths:f})},bN=(e,{fromIndex:t,toIndex:r,pointerKey:n})=>{let a=Dn(e,n),i=a.key,o=dn(e);
if(!a.node.isRepeating)return e;let s=Sc(e),l=o.map(c=>{let{pointer:u}=c,d=na(e,i,u);if(d===t||d===r){let h=s(i,u,d===t?
r:t);return{...c,pointer:h}}return c});return Rt(e,{data:l})},tw=(e,{pointerKey:t})=>{var r;let{scope:n,isIteration:a,key:i}=B(
e,t);if(!a){let h=`${t}[`,y=dn(e).filter(T=>!T.pointer.startsWith(h)),b=pn(e).filter(T=>T.pointer!==t&&!T.pointer.startsWith(
h));return Rt(e,{data:y,lengths:b})}let o=((r=Gr(e,i))==null?void 0:r.key)||"",s=dn(e),l=pn(e),c=n.index,u=Sc(e),d=s.flatMap(
h=>{let{pointer:y}=h,b=na(e,o,y);if(b===c)return[];if(b>c){let T=u(o,y,b-1);return{...h,pointer:T}}return h}),f=l.flatMap(
h=>{let{pointer:y,length:b}=h;if(o===y){let S=h.length-1;return S===0?[]:{pointer:y,length:S}}let T=na(e,o,y);if(T===c)return[];
if(T>c){let S=u(o,y,T-1),E=Dn(e,S);return{length:b,pointer:xs(E)}}return h});return Rt(e,{data:d,lengths:f})},wN=(e,t)=>{
let{pointerKey:r,toPointerKey:n,target:a}=t.payload,i=B(e,r),o=Gr(e,i.key);if(!o)return e;let s=B(e,n);if(!Na(i)||!Na(s)||
i.key===s.key)return e;if(a==="into"){let l=MR(s),c=B(e,l);if(o.key===c.key)return e;let[u]=Dy(e,i,o,c);return u}if(a===
"before"||a==="after"){if(fn(s))return e;let l=Gr(e,s.key);if(!l)return e;let c=i.scope.index,u=s.scope.index,d=a==="bef\
ore"?-1:0,f=a==="after"?1:0;if(o.key===l.key){if(c===u)return e;let b=c<u?d:f,T=u+b;return T===c?e:Yd(e,{pointerKey:i.key,
toIndex:T})}let[h,y]=Dy(e,i,o,l);if(e!==h){let b=u+f;return Yd(h,{pointerKey:y,toIndex:b})}}return e},Dy=(e,t,r,n)=>{let{
key:a,scope:i}=t;if(i0(e,a,n.key))return[e,a];let o=i.index,s=ze(Ma(e,n.key)),l=cc(e),c=dn(e),u=pn(e),d=`${n.key}[${s}]`,
f=c.flatMap(T=>{if(na(e,r.key,T.pointer)===o){let E=T.pointer.replace(a,d);return[T,{...T,pointer:E}]}return T}),h=u.flatMap(
T=>{if(n.key===T.pointer){let S=T.length+1;return{pointer:T.pointer,length:S}}if(T.pointer.startsWith(a)){let S=T.pointer.
replace(a,`${n.key}[${s}]`);return[T,{pointer:S,length:T.length}]}return T}),y=Rt(e,{data:f,lengths:h});if(!l[n.key]){let T=pn(
y);y=Rt(y,{lengths:[...T,{pointer:n.key,length:1}]})}return[tw(y,{pointerKey:a}),d]},TN=(e,t)=>{let{pointerKey:r,args:n}=t.
payload;return Rt(e,n===void 0?{cursor:r}:{cursor:r,cursorArgs:n})},kN=new Set(["script","publishData"]),SN=(e,t)=>{let r=ki(
e);return ew(e,t,n=>n.node.type===Br&&typeof n.node.variant=="string"&&kN.has(n.node.variant)).some(n=>{var a;let i=(a=r[n])==
null?void 0:a.value;return typeof i=="object"&&i!==null&&i.status==="running"})},EN=(e,t)=>{let{pointerKey:r,args:n}=t.payload;
if(!r)return e;let a=Sp(e),i=Ep(e),o=u=>ew(u,r,d=>d.node.type===ms).filter(d=>!SN(u,d)).reduce((d,f)=>Q0(d,{pointerKey:f}),
u);if(r===a&&xN(i,n))return o(e);let s=kp(e),l=Kv(e),c=Rt(e,{navStack:a?[...s,a]:s,navStackArgs:a?[...l,i]:l,cursor:r,cursorArgs:n});
return o(c)},xN=(e,t)=>{let r=e??{},n=t??{},a=Object.keys(r),i=Object.keys(n);return a.length!==i.length?!1:a.every(o=>r[o]===
n[o])},_N=e=>{let t=kp(e),r=Kv(e),n=t.slice(0,-1),a=r.slice(0,-1),i=t[n.length]||cI(e),o=r[n.length];return Rt(e,{navStack:n,
navStackArgs:a,cursor:i,cursorArgs:o})},rw=(e,t)=>{let r=B(e,t),{node:n,key:a,scope:i}=r,o=n.pageSize;if(o===void 0)return;
let s=typeof o=="number"?o:ze(Ar(e,o,i.key))||0;if(s<=0)return;let l=n.maxLength,c=l===void 0?void 0:typeof l=="number"?
l:ze(Ar(e,l,i.key)),u=c??1/0,d=n.data;if(Hl(d)){let h=ar(e,a);if(xe(h)&&Array.isArray(h.right)){let y=h.right.length;u=c!==
void 0?Math.min(y,c):y}}let f=ze(Ma(e,a));return{key:a,pageSizeValue:s,currentLength:f,totalLength:u}},nw=(e,t)=>{let{pointerKey:r,
page:n}=t.payload,a=rw(e,r);if(!a)return e;let i=(n+1)*a.pageSizeValue;return X0(e,a.key,i)},AN=(e,t)=>{let{pointerKey:r}=t.
payload,n=rw(e,r);if(!n)return e;let{currentLength:a,totalLength:i,pageSizeValue:o}=n;if(a>=i)return e;let s=Math.ceil(a/
o)-1;return nw(e,{type:xp,payload:{pointerKey:r,page:s+1}})},$N=(e=q_,t={},r)=>{let n={def:e,context:t,repo:r},i=UA(l=>{
n=J0(n,l)}),o=()=>n;return i.getState=o,{api:i,getState:o,sel:l=>(...c)=>l(n,...c)}},RN=(e,t={})=>{let{api:r,sel:n}=e,a=n(
Ur);r.initAppInstance();let i=(o,s="")=>{Object.entries(o).forEach(([l,c])=>{var u;if(c!==void 0){let d=xr([s,l]),f=a(d);
if(P(f)){if(String(f.left).endsWith("not found"))return;throw new Error(String(f.left))}let h=f.right;if(h.node.isRecord&&
Nn.is(c)){let y=(u=h.node.recordKey)!=null?u:"key",b=h.node.recordValue;Object.entries(c).forEach(([T,S],E)=>{i(typeof b==
"string"?{[y]:T,[b]:S}:{[y]:T,...Nn.is(S)?S:{}},`${d}[${E}]`)})}else h.node.isRepeating&&ox.is(c)?c.forEach((y,b)=>{tu(y)?
r.insertSlot(h.key,b):i(y,`${d}[${b}]`)}):h.node.isOwnScope?Nn.is(c)&&i(c,`${d}[0]`):r.updateValue(h.key,c)}})};i(t)};var[aF,IN,iF]=Oi("App"),[oF,ON,sF]=Oi("Pointer"),aw=(e={})=>jt(e)?{pointerKey:e}:e;var zd=(e,t)=>{let r=Gp(e,t.key);if(!xe(r)||r.right===void 0)return;let n=r.right,a=kc(e,t.key);if(a.length===0)return{...n};
let i=[];for(let o of a){let s=zd(e,o);s&&i.push(s)}return{...n,_children:i}},[cF,uF]=Oi("AppData",{ctx:{}}),dF={createAppInstance:ru(),
toOutputData:oa};var CN=(e,t)=>{switch(t){case"@root":return sw(e);case"@parent":return e.parentAppContext;case"@self":return e}return iw(
e,t)},iw=(e,t)=>e.name===t?e:e.parentAppContext?iw(e.parentAppContext,t):null,ow=(e,t)=>t===void 0||e.namespace===t?e:e.
parent?ow(e.parent,t):null,Zp=(e="@self")=>{let t=IN(),r=CN(t,e);if(!r)throw new Error(`App context not found for search\
 param ${e}`);return r},NN=e=>{let{namespace:t,pointerKey:r}=aw(e),{name:n}=Zp(t),a=ON();if(r)return{namespace:n,pointerKey:r};
let i=ow(a,n);if(!i)throw new Error(`Pointer context not found for namespace ${n}`);return i},PN=(e,t)=>{let{state:r}=Zp(
t);return e(r)},Di=e=>t=>PN(e,t),DN=e=>NN(e).pointerKey,MN=(e,t)=>{let r=DN(t),{state:n}=Zp(aw(t).namespace);return e(n,
r)},ee=e=>t=>MN(e,t),pF=ee(B),fF=ee(a0),hF=ee(Pi),mF=ee(J2),gF=ee(Q2);var yF=ee(eN);var vF=ee(k(Ma,ze));var bF=Di(Sp),wF=Di(Ep),TF=Di(f0),kF=Di(Yp),SF=Di(z2),EF=Di(iI);var xF=ee(qp);var _F=ee(Y2),AF=ee(V2);var $F=ee(qI);var RF=ee(u2),IF=ee(V0),OF=ee(kc),CF=ee(q0),NF=ee(o2),PF=ee(c2),DF=ee(s2),MF=ee(l2),jF=ee(Tc),LF=ee(VI),FF=ee(g2);var sw=e=>{let{parentAppContext:t}=e;return t?sw(t):e};var UF=ee(v2),BF=ee(b2),HF=ee(w2),WF=ee(T2),qF=ee(k2),VF=ee(S2),YF=ee(E2),zF=ee(x2),KF=ee(_2),GF=ee(A2),JF=ee($2),ZF=ee(
R2),XF=ee(I2),QF=ee(O2),eU=ee(C2),tU=ee(N2),rU=ee(P2),nU=ee(D2),aU=ee(M2),iU=ee(j2),oU=ee(L2),sU=ee(F2),lU=ee(U2),cU=ee(
B2),uU=ee(H2),dU=ee(W2),pU=ee(q2);var[fU,hU]=Oi("form");var Qp=e=>e,FN=k(Qp,e=>wt(e,t=>t.name)),UN=k(Qp,e=>e.reduce((t,r)=>(t[r.name]={allowedChildTypes:[],icon:r.icon||"extens\
ion",color:r.color||"#9E9E9E",category:"plugins"},t),{})),BN=k(Qp,e=>e.map(t=>t.name)),HN=k(FN,at,(e,t)=>e[t]),WN=[gs,ys,
vs,Ri,bs,ws,$i,aa,ia],qN=e=>{let t=[...WN,Ia,"textContent","subsection",nc,...BN(e)],r=UN(e),n=["appNode:folder",os,aa,ia];
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
rm",...t],icon:"route",color:"#2e7d32",category:"layout",label:"Flow"},repeat:{allowedChildTypes:[os],icon:"repeat",color:"\
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
VN=e=>jv({t:Lv({rootType:"app",nodeTypes:e,iterationLabel:"@(value.label || value.name || 'New ' + (value.variant || val\
ue.type)) + (value.isRepeating ? '[...]' : '')",nounLabel:"@value.variant || value.type",label:"App Config"})}),My={anonOnly:"\
public",hybrid:"public",userOnly:"private"},YN="data-degraded-node",zN=`<div ${YN}="true" role="alert" style="margin:8px\
 0;padding:8px 12px;border:1px solid #e6b800;border-radius:6px;background:#fff8e1;color:#8a6d00;font-size:0.875rem;">\u26A0\uFE0F \
This part of the page couldn't be displayed.</div>`,KN=e=>({type:Ia,name:e,htmlTemplate:zN}),GN=Ec.intersection([Ec.partial(
{value:Ql}),Nn]),JN=f2(GN),ZN=(e,t,r={})=>{let n=h=>{var y;let{t:b=[],value:T}=h,S=b.length>0?b.map(n):void 0,E;try{E=a(
T)}catch(O){if(!r.lenient)throw O;return KN((y=T.name)!=null?y:"unnamed")}let _={...E,children:S};return _.submitObjectType&&
(_.children||(_.children=[]),_.children=[..._.children,...Mv()]),_},a=h=>{let y=i(h),b=c_.decode(y);if(_x(b))return b.right;
let T=Ax(b.left),S=Md(b.left),E=b.left.some(O=>O.context.some(M=>M.key==="columnBreaks")),_='Check that your node has a \
valid "type" property.';throw E&&(_="columnBreaks format mismatch. System expects number[] (e.g., [2, 5, 7]) but you pro\
vided responsive objects. Convert to legacy format or update types."),new Error(`\u{1F6A8} Design Node Error - ${T}
\u{1F4CD} Location: ${S||"root"}
\u{1F4A1} Fix: ${_}
\u{1F4CB} Node: ${JSON.stringify(y,null,2).substring(0,500)}`)},i=h=>{let y=o(h),{name:b="unnamed",id:T,...S}=y;return{name:b,
...S}},o=h=>{let{type:y,...b}=h,T=HN(t,y);if(T){let{parameters:E={},description:_,icon:O,image:M,...W}=b;if(sx.is(E))return{
type:Ia,htmlTemplate:`@${y}(${T.parameters.map(K=>E[K.name||""]||"undefined").join(",")})`,pluginName:y,...W}}let S=vv(y);
if(S.variant!==void 0)return{type:S.type,variant:S.variant,...b};if(y==="image"||y==="textContent")return{type:Ia,...b};
if(!H_.is(y))throw new Error(`Invalid node type: ${y}`);if(y===rc)return{...h,isRepeating:!0};if(y===ec){let{appLogo:E,..._}=h,
O={type:y,..._},M=O.authMode;return M&&My[M]&&(O={...O,authMode:My[M]}),O}return h},s={def:VN(qN(t)),instance:e},l=JN(s,
"t");if(P(l))return Ce(`Invalid design node: ${l.left}`);let c=l.right,{value:u={type:"app",name:""},...d}=c,f={value:{...u,
name:""},...d};try{return R(n(f))}catch(h){return Ce(ax(h))}},XN=e=>e!==void 0&&!(typeof e=="object"&&e!==null&&!Array.isArray(
e)&&Object.keys(e).length===0),zo=e=>{var t;if(!e||!e.data||e.data.length===0)return;let r=(t=e.data.find(o=>o.pointer===
"value"))==null?void 0:t.value,n=XN(r),i={def:jv({t:Lv({rootType:"app",nodeTypes:{}})}),instance:e};if(n){let o=B(i,"t");
return zd(i,o)}else{let o=B(i,"t"),s=kc(i,o.key);if(s.length===0)return{type:"folder",name:""};let l=[];for(let c of s){
let u=zd(i,c);u&&l.push(u)}return{type:"folder",_children:l}}},uw=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.
minClientVersion,appConfig:zo(e.appConfig),users:zo(e.users),objectTypes:zo(e.objectTypes),objectInstances:zo(e.objectInstances),
plugins:zo(e.plugins)}),dw=(e,t,r,n)=>{let{_children:a,...i}=e;if(r.push({pointer:`${t}.value`,value:i}),a&&a.length>0){
r.push({pointer:`${t}.expanded`,value:!0});let o=`${t}.t`;n.push({pointer:o,length:a.length}),a.forEach((s,l)=>{let c=`${o}\
[${l}]`;dw(s,c,r,n)})}},Ko=(e,t,r)=>{if(!e)return{};let n=[],a=[],{_children:i,...o}=e;o.type==="folder"&&Object.keys(o).
length===1||n.push({pointer:"value",value:o}),i&&i.length>0&&(n.push({pointer:"expanded",value:!0}),a.push({pointer:"t",
length:i.length}),i.forEach((c,u)=>{dw(c,`t[${u}]`,n,a)}));let l={data:n,lengths:a};return t&&(l.cursor=t),r&&(l.navStack=
r),l},QN=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.minClientVersion,appConfig:Ko(e.appConfig,
e.appConfig?"t[0]":void 0),users:Ko(e.users,e.users?"t[0]":void 0),objectTypes:Ko(e.objectTypes,e.objectTypes?"t[0]":void 0),
objectInstances:Ko(e.objectInstances,e.objectInstances?"t[0].t[0]":void 0),plugins:Ko(e.plugins,e.plugins?"t[0]":void 0)}),
eP="\0ORGIGGLY_SANDBOXED_WIDGET\0",gU=It.intersection([It.type({kind:It.literal("sandboxed-widget"),pluginName:It.string,
params:It.UnknownRecord}),It.partial({embedsThirdPartyMedia:It.boolean,connections:It.array(Dv),widgetOwner:It.string})]),
tP=(e,t,{embedsThirdPartyMedia:r,connections:n,widgetOwner:a}={})=>{let i={kind:"sandboxed-widget",pluginName:e,params:t,
...r?{embedsThirdPartyMedia:!0}:{},...n?.length?{connections:n}:{},...a!==void 0?{widgetOwner:a}:{}};return eP+JSON.stringify(
i)};var rP=({name:e,htmlTemplate:t,parameters:r,runtime:n,embedsThirdPartyMedia:a,connections:i,widgetOwner:o})=>(...s)=>{let l=r.
reduce((c,u,d)=>(c[u.name||`param${d}`]=s[d],c),{});return n==="sandboxed"?tP(e,l,{embedsThirdPartyMedia:a,connections:i,
widgetOwner:o}):String(K$(hp(t),l))},nP=e=>e.reduce((t,r)=>(t[r.name]=rP(r),t),{});var aP=Q.intersection([Q.type({name:Q.string}),Ql]),iP=Q.intersection([Ql,Nn]),oP=Q.union([Q.literal("text"),Q.literal("\
number"),Q.literal("boolean"),Q.literal("temporal")]),yU=oP.types.map(e=>e.value);var sP=Q.type({pointer:Q.string,value:Q.unknown}),lP=Q.type({pointer:Q.string,length:Q.number}),Go=Q.partial({cursor:Q.string,
navStack:Q.array(Q.string),data:Q.array(sP),lengths:Q.array(lP)}),vU=Q.intersection([Q.type({versionId:Q.string,appConfig:Go,
users:Go,objectTypes:Go,objectInstances:Go,plugins:Go}),Q.partial({apiVersion:Q.string,minClientVersion:Q.number})]),cP=Q.intersection(
[Q.type({id:Q.string,pointer:Q.string,type:Q.union([Q.literal("user"),Q.literal("group")])}),Q.partial({name:Q.string,email:Q.string,
isAdmin:Q.boolean,usernames:Q.string})]);var uP=e=>e,pw=k(uP,e=>e.fields.filter(t=>Q_.is(t))),fw=k(pw,e=>wt(e,t=>t.name)),TU=k(fw,at,(e,t)=>e[t]),dP=e=>{let t=e.
map(hw).filter(zi);return fa(["name",...t]).map(n=>`value.${n}`).join(" || ")},hw=e=>{let t=fw(e),r=t.name||t.Name;if(r)
return r.name;let n=pw(e)[0];return n&&(n.type==="text"||n.type==="number")?n.name:"id"};var mw=["type","_scope","_groupKey"],kU=new Set(mw);var pP=e=>zi(e.type)&&zi(e.id),fP=e=>e,gw=k(fP,e=>e.types),SU=k(gw,dP),hP=k(gw,e=>wt(e,t=>t.name)),mP=k(hP,at,(e,t)=>e[t]),
EU=k(mP,e=>e&&hw(e));var yw=e=>e,gP=k(yw,e=>e.nodes),yP=k(yw,e=>e.plugins),_U=k(gP,yP,(e,t)=>fa([...e.map(r=>r.name),...t.map(r=>r.name)]));var vP=(e,t)=>({metaModel:e,repo:{objects:t}}),bP=e=>e,Is=e=>k(bP,t=>{let{data:r=[]}=t??{};return r.map(n=>eu(n.value)?{
...n.value,pointer:n.pointer}:n.value).filter(e.is)}),wP=Is(o_),TP=Is(iP),kP=Is(X_),RU=Is(aP),ef=Is(cP),vw=e=>e,bw=(e,{lenient:t}={})=>{
let r=e.versionId,n=e.apiVersion,a=kP(e.plugins),i=TP(e.objectInstances).filter(pP),o=ZN(e.appConfig,a,{lenient:t});return P(
o)?o:R({appConfig:o.right,users:e.users,objectTypes:wP(e.objectTypes),objectInstances:i,plugins:a,versionId:r,apiVersion:n})},
SP=k(vw,e=>bw(e)),IU=k(vw,e=>bw(e,{lenient:!0})),ww=e=>e,EP=k(ww,e=>({types:e.objectTypes})),OU=k(ww,EP,(e,t)=>vP(t,e.objectInstances)),
xc=e=>e,Tw=e=>{let[t]=gp(e);return t},tf=e=>e.replace(/\.?value$/,""),kw=k(ef,e=>wt(e,t=>tf(t.pointer)));var rf=k(xc,kw,at,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,type:o,isAdmin:s}=n;if(o!=="group")return;let l=r?
rf(e,Tw(r)):void 0;return{id:a,name:i,parent:l,isAdmin:s}}),xP=k(xc,kw,at,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,
email:o,type:s,isAdmin:l}=n;if(s!=="user"||!o)return;let c=rf(e,Tw(r));return{id:a,name:i,email:o,parent:c,isAdmin:l}}),
Sw=k(ef,e=>Hn(e,t=>t.type)),Ew=k(xc,Sw,(e,t)=>(t.user||[]).flatMap(({pointer:a})=>{let i=xP(e,tf(a));return i?[i]:[]})),
CU=k(xc,Sw,(e,t)=>t.group.flatMap(({pointer:n})=>{let a=rf(e,tf(n));return a?[a]:[]})),_P=k(Ew,e=>wt(e,t=>t.email)),AP=k(
Ew,e=>wt(e,t=>t.name)),NU=k(AP,at,(e,t)=>e[t]),PU=k(_P,at,(e,t)=>e[t]),jy=e=>(e??"").split(/[\s,]+/).map(t=>t.trim().toLowerCase()).
filter(t=>t&&t!=="anon"),DU=k(ef,at,(e,t)=>{var r;let n=t.trim().toLowerCase();if(!n||n==="anon")return;let a=e.find(i=>i.
type==="user"&&jy(i.usernames).includes(n));if(a)return{id:a.id,name:(r=a.name)!=null?r:a.id,usernames:jy(a.usernames)}});var MU=29*24*60*60*1e3;var xw=["flowStep:script","content:data-script","content:action"],Os=[{name:"publishData",async:!0,signature:'publishDat\
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
 (an ambiguous name throws and nothing is cleared). Names only \u2014 unlike `setValues`, a pointer key such as `rows[0].qty`\
 is not accepted. Use it to reset a section for a fresh round \u2014 e.g. a game's per-round inputs when a new game starts, w\
hich otherwise keep last game's typing because the slots reuse the same index.",availableIn:["flowStep:script","content:\
data-script","content:action"],examples:['clearValues("lineSlots")','clearValues("answers", "notes"); setAppValue("roomC\
ode", newCode)']},{name:"sendToWidget",async:!0,signature:"sendToWidget(widgetName: string, command: string, args?: obje\
ct): void",description:"Tells a sandboxed widget on the screen to DO something \u2014 e.g. `spotifyplayer`'s `play` / `stop` \
\u2014 so a button outside the widget can drive it. `widgetName` is the widget node's name, resolved like a formula read (an \
unknown or ambiguous name throws); which commands exist, and their args, is up to each widget. The command is delivered \
at once, BEFORE any value this same script just set reaches the widget as a parameter \u2014 so pass everything the command n\
eeds in `args` rather than relying on a `setValues` a line earlier. A widget that isn't showing (hidden, or on another s\
creen) ignores it. No reply comes back. Runs in preview too.",availableIn:["flowStep:script","content:data-script","cont\
ent:action"],examples:['sendToWidget("player", "play", {trackUri: q.uri, startMs: q.startMs, lengthMs: 3000})','sendToWi\
dget("player", "stop"); navigate("results")']},{name:"navigate",async:!0,signature:"navigate(pointerKey: string, args?: \
object): void",description:"Moves the app cursor to the given screen/section pointer key. Both forms push \u2014 a nav-stack \
entry (Back returns to the caller) plus a reset of any flow state under the target, exactly like an `<a>` link. The opti\
onal `args` object additionally exposes its values as `$args.<key>` on the destination screen \u2014 pair with `byId('Type', \
$args.id)` on the destination to land on a record you just created. From a content action's script, call it as the last \
statement \u2014 a preceding setAppValue(...) is the preselect-then-navigate idiom.",availableIn:["flowStep:script","con\
tent:data-script","content:action"],examples:['navigate("home")','navigate("matchDetail", {founderId: newFounder.id})']},
{name:"replaceScreen",async:!0,signature:"replaceScreen(pointerKey: string, args?: object): void",description:"Swaps the\
 current screen for the given screen/section pointer key WITHOUT adding a back-stack entry and WITHOUT resetting flow st\
ate under the target \u2014 Back returns to wherever the caller came from. Use for redirect-style moves (a landing screen tha\
t forwards to the right tab). Prefer `navigate` for ordinary drill-down: replacing into a screen that contains a flow re\
-shows the flow's last completed step instead of a fresh run.",availableIn:["flowStep:script","content:data-script","con\
tent:action"],examples:['replaceScreen("home")','replaceScreen("tabDetail", {id: $params.id})']},{name:"back",async:!0,signature:"\
back(): void",description:'Goes back one nav-stack entry \u2014 exactly what the Back button (or a legacy `href="@pop"`) does\
. Takes no arguments. A Back/Cancel control in a content template is an action whose script is just `back()`.',availableIn:[
"flowStep:script","content:data-script","content:action"],examples:["back()"]},{name:"updateData",async:!0,signature:"up\
dateData({type: string, id: string, patch: object}): {id: string, ...}",description:"Partial-updates an existing record \
by id. Reads the current record from $data, shallow-merges `patch` over it, and writes back via the same path the Form n\
ode's publish button uses \u2014 so create/update/edit-by-form/edit-by-script all converge on one backend op. Returns the mer\
ged record. Throws if no record of that type+id is currently loaded in $data. Object property shorthand is supported: `{\
Name, Role}` means `{Name: Name, Role: Role}` (and `id` means `id: id`), so a patch built from same-named scope variable\
s stays concise.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['updateData({type: "P\
ost", id: post.id, patch: {Content: newContent}})','updateData({type: "Traveller", id, patch: {Name, Role, Bio}})']},{name:"\
deleteData",async:!0,signature:"deleteData({type: string, id: string | string[]}): void",description:"Soft-deletes one r\
ecord (when `id` is a string) or N records (when `id` is an array of strings) by setting `isDeleted: true`. Records rema\
in in storage with their fields preserved; org-level filters (a `whereClause` on the subsection, or `filter(..., !it.isD\
eleted)` in a template) hide them from the UI. Cascades through declared parent relations: every loaded record of an obj\
ect type whose `parent: {type, idField}` points at a deleted record is soft-deleted too, recursively, children before pa\
rents \u2014 so do NOT filter and delete children by hand when the child type declares `parent`. Only children currently load\
ed in $data are found, so the child type must be declared as a data source by some node. Restoring a parent does not res\
tore its children. To remove records permanently, use `hardDelete`. Throws if any referenced record is not currently loa\
ded in $data.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['deleteData({type: "Post\
", id: post.id})','deleteData({type: "Photo", id: photos.map((p) => p.id)})','deleteData({type: "Post", id: id}) // Phot\
o declares parent: {type: "Post", idField: "postId"}, so its photos go too']},{name:"deleteFile",async:!0,signature:"del\
eteFile(url: string | string[]): void",description:"Permanently deletes an uploaded file (an image a `fileInput` stored,\
 by its URL) from this org's Storage \u2014 the blob a record field points at, not the record. Opt in for records that are ge\
nuinely gone: `deleteData` is a soft delete that keeps the record restorable, so calling `deleteFile` beside it sacrific\
es restore of the photo. Only files under THIS org's own upload prefix are touched; any other URL (a web-search pick, an\
other org's file, an empty field) is silently skipped, never an error, so it is safe to call unconditionally. A file tha\
t is already gone is tolerated. Accepts an array for multi-file fields.",availableIn:["flowStep:script","content:data-sc\
ript","content:action"],examples:['deleteData({type: "Event", id: id}); deleteFile(Pic); navigate("calendar")',"deleteFi\
le(photos.map((p) => p.url))"]},{name:"hardDelete",async:!0,signature:"hardDelete({type: string, id: string | string[]})\
: {deleted: {type, id}[], notFound: string[], blobsDeleted: string[], blobsSkippedShared: string[]}",description:"PERMAN\
ENTLY removes records \u2014 irreversible, unlike `deleteData`'s restorable soft delete. Runs on the server: removes every st\
ored copy (a record and its soft-delete tombstone alike), cascades through declared parent relations across ALL stored r\
ecords (not just those loaded in $data, so the child type needs no data source), and deletes this org's own uploaded fil\
es that no surviving record, realtime record or config still references (a file shared with something that survives is k\
ept and reported in `blobsSkippedShared`). Only an org admin, or the user who created every named record, may call it; c\
ascaded children go with their parent whoever made them. Refuses realtime-rail types, and throws for an embedded type (n\
othing on the server to delete \u2014 use `deleteData`). Unknown ids are reported in `notFound`, not thrown. Prefer `deleteDa\
ta` unless the records must really be gone (personal data, a mistaken import).",availableIn:["flowStep:script","content:\
data-script","content:action"],examples:['hardDelete({type: "Post", id: post.id})','r = hardDelete({type: "Game", id: ga\
meIds}); navigate("home")']},{name:"setRealtime",async:!0,signature:"setRealtime(path: string, value: object): {ownerUid\
: string, ...}",description:"Creates or replaces ONE realtime record at `path` (shaped `{Type}/{recordId}`, relative to \
the org's realtime root), reflecting live to every subscriber of that type. `value` must be an object; it is stamped wit\
h your `ownerUid`, and security rules let you write only records you own. The record's id IS the final path segment, so \
any `id` (and `type`) field in `value` is ignored \u2014 spreading a record read from `$data` is safe. It REPLACES the whole \
record: a field you leave out is deleted, so to change some fields of an existing record use `updateRealtime` instead. U\
se it to create fixed-id records (a game room keyed by its code, a player keyed by identity); it stamps the `createdAt` \
that cleanup timers key on.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['setRealti\
me("Game/" + roomCode, {phase: "lobby", hostId: whoAmI})','setRealtime("Player/" + whoAmI, {name, gameId: roomCode})']},
{name:"updateRealtime",async:!0,signature:"updateRealtime(path: string, patch: object): {ownerUid: string, ...patch}",description:"\
MERGES `patch` into ONE realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), ref\
lecting live to every subscriber of that type. Fields `patch` doesn't mention are KEPT \u2014 the safe way to change some fie\
lds of an existing record (a game's `phase`, a player's score) without re-listing the rest. Shallow: each top-level key \
replaces that field whole (a nested object is not merged into), and a `null` value deletes the field. Keys may not conta\
in `/`, and `patch` must have at least one field; `id`/`type` are ignored. Security rules let you update only records yo\
u own. Create the record with `setRealtime` first: a merge onto a missing path does create it, but without the `createdA\
t` stamp cleanup timers key on. Returns the patch as written (with your `ownerUid`), not the whole merged record.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['updateRealtime("Game/" + roomCode, {phase: "playing\
", round: 1})','updateRealtime("Player/" + whoAmI, {score: me.score + 1})']},{name:"pushRealtime",async:!0,signature:"pu\
shRealtime(path: string, value: object): {id: string, ownerUid: string, ...}",description:"Appends a NEW realtime record\
 under the collection `path` (shaped `{Type}`) with a server-generated id, reflecting live to every subscriber of that t\
ype. `value` must be an object; it is stamped with your `ownerUid`. Returns the record with its new `id` \u2014 use it to lin\
k related records. Use for append-only collections (chat messages, submissions) where you don't choose the id.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['msg = pushRealtime("ChatMessage", {text: comment, g\
ameId: roomCode})','entry = pushRealtime("Drawing", {url: image.url, gameId: roomCode})']},{name:"removeRealtimeOnDiscon\
nect",async:!0,signature:"removeRealtimeOnDisconnect(path: string): void",description:"Registers a server-side rule that\
 DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root) when this clien\
t's connection drops \u2014 e.g. the tab closes or the network is lost. Call it right after `setRealtime` creates the record \
you want auto-cleaned (a player keyed by identity), so a player who leaves vanishes from the live roster instead of stra\
nding it. You may only auto-remove records you own. The deletion is queued by the realtime server and fires on disconnec\
t, not immediately \u2014 it is the wrong tool for removing a record right now.",availableIn:["flowStep:script","content\
:data-script","content:action"],examples:['setRealtime("Player/" + pid, {name, gameId: roomCode}); removeRealtimeOnDisco\
nnect("Player/" + pid)']},{name:"removeRealtime",async:!0,signature:"removeRealtime(path: string): void",description:"Im\
mediately DELETES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), refle\
cting live to every subscriber of that type. Unlike `removeRealtimeOnDisconnect` (which fires only when the connection d\
rops), this removes the record right now. Security rules let you delete a record you own, or \u2014 for the org's creator \u2014 a\
ny realtime record in your own org (so an owner can clean up old game rooms). Use for an admin/owner 'delete this room' \
control.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['removeRealtime("Game/" + roo\
mCode)','removeRealtime("ChatMessage/" + msgId)']},{name:"advanceFlow",async:!0,signature:"advanceFlow(): void",description:"\
Advances the enclosing flow to its next step \u2014 and finishes (closes) the flow when called on the last step. Only valid f\
rom a Content script (a declared action or a legacy `data-script`) rendered INSIDE a flow; it lets you replace the built\
-in Next/Finish button with your own control (pair with the flow's `hideNav`/`hideTopBar` options for a chrome-less, cus\
tom-driven flow). Advancing into an auto-running step (e.g. a `flowStep:script`) triggers that step, so this is also how\
 a custom 'Submit' button kicks off the flow's final script. Throws if called outside a flow.",availableIn:["content:dat\
a-script","content:action"],examples:["advanceFlow()"]},{name:"leaveVideoRoom",async:!0,signature:"leaveVideoRoom(): voi\
d",description:"Leaves the app's active video call, if one is active. A `videoRoom` node's call outlives screen navigati\
on (multiple nodes can share one call across screens), so leaving is never automatic \u2014 call this explicitly wherever a s\
cript means for video to actually end, e.g. a 'leave game' or 'back to the start' action. Safe to call even when no call\
 is active (no-op, does not throw).",availableIn:["flowStep:script","content:data-script","content:action"],examples:['s\
etAppValue("roomCode", ""); leaveVideoRoom(); navigate("home")']},{name:"endVideoRoom",async:!0,signature:"endVideoRoom(\
): void",description:"End the video call for EVERYONE in the room, not just this device. Only whoever started the room m\
ay do this \u2014 the platform refuses anyone else \u2014 so gate the control on your own host check too. Unlike leaveVideoRoom, t\
his is final: nobody can rejoin the same room afterwards. Use it for a deliberate 'we're done' at the end of a session; \
use leaveVideoRoom when one person is stepping out.",availableIn:["flowStep:script","content:data-script","content:actio\
n"],examples:['endVideoRoom(); navigate("home")']},{name:"spotifyIsConnected",async:!0,signature:"spotifyIsConnected(): \
boolean",description:'True when the person running the script has connected their own Spotify account (at orgiggly.com/c\
onnect/spotify). Read-only, so it also works in preview. Scripts have no `if`, so store the result and let a formula dec\
ide what to show \u2014 e.g. a "Connect Spotify" prompt.',availableIn:["flowStep:script","content:data-script","content:\
action"],examples:['ok = spotifyIsConnected(); setAppValue("spotifyReady", ok)']},{name:"spotifySearchTracks",async:!0,signature:"\
spotifySearchTracks(songs: {title: string, artist?: string}[], options?: {limit?: number}): {uri: string, id: string, ti\
tle: string, artist: string, artists: string[], album: string, albumType: string, year: number | null, artUrl: string | \
null, durationMs: number, explicit: boolean}[][]",description:"Looks every song up on the viewer's connected Spotify acc\
ount and returns ONE candidate list per song, in the same order \u2014 an empty list when nothing matched (a miss never throw\
s). Batch by design: a script has no loops and cannot call an async host inside `map`, so pass the whole list in one cal\
l, then pick the best candidate per song with ordinary formulas or a `function` node (prefer the matching artist; avoid \
live, remix, karaoke and cover versions). `limit` is candidates per song: default 5, at most 10. Throws \"Connect Spotify\
 first (orgiggly.com/connect/spotify)\" when the viewer hasn't connected. Read-only, so it also runs in preview.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:["results = spotifySearchTracks(songs.map((s) => ({ti\
tle: s.title, artist: s.artist})))",'results = spotifySearchTracks([{title: "Mr. Brightside", artist: "The Killers"}], {\
limit: 3}); setAppValue("firstUri", results[0][0].uri)']},{name:"spotifyListPlaylists",async:!0,signature:"spotifyListPl\
aylists(): {id: string, name: string, trackCount: number, imageUrl: string | null}[]",description:"The viewer's Spotify \
playlists that a quiz can be built from: the ones they own or collaborate on (Spotify won't let an app read the tracks o\
f any other playlist, followed ones included). Feed it to a `selectInput`'s `pickerValues` (ids are strings) and pass th\
e chosen id to `spotifyPlaylistTracks`. Throws \"Connect Spotify first (orgiggly.com/connect/spotify)\" when the viewer ha\
sn't connected, and \"Reconnect Spotify to use your playlists\" when they connected before playlists were supported. Read-\
only, so it also runs in preview.",availableIn:["flowStep:script","content:data-script","content:action"],examples:["spo\
tifyListPlaylists()",'lists = spotifyListPlaylists(); setAppValue("playlistCount", length(lists))']},{name:"spotifyPlayl\
istTracks",async:!0,signature:"spotifyPlaylistTracks(playlistId: string): {uri: string, id: string, title: string, artis\
t: string, artists: string[], album: string, albumType: string, year: number | null, artUrl: string | null, durationMs: \
number, explicit: boolean}[]",description:"The tracks of one of the viewer's playlists, in playlist order and in the sam\
e shape as a `spotifySearchTracks` candidate (podcast episodes and local files are left out; up to 500 tracks). `playlis\
tId` is an id from `spotifyListPlaylists`, a `spotify:playlist:\u2026` URI or an open.spotify.com link. Shuffle with `shuffle\
(tracks, now())` to pick at random. Throws the same Connect / Reconnect errors as `spotifyListPlaylists`, and a clear er\
ror for a playlist the viewer neither owns nor collaborates on. Read-only, so it also runs in preview.",availableIn:["fl\
owStep:script","content:data-script","content:action"],examples:["tracks = spotifyPlaylistTracks(playlistId); picks = sh\
uffle(tracks, now()).slice(0, 10)"]},{name:"speak",async:!0,signature:"speak(text: string, lang?: string, rate?: number)\
: void",description:'Speaks `text` aloud via the device\'s speech synthesis (the same Web Speech path as the legacy `data\
-speak` attribute, plus error handling). `lang` accepts a BCP-47 code ("fr-FR") or a common English language name ("Fren\
ch"); `rate` is playback speed 0.1\u201310. Toggle-aware: calling it with the SAME text while it is still speaking stops play\
back instead.',availableIn:["content:action"],examples:['speak($params.text, "fr-FR")',"speak(story.Original, story.Lang\
uage, 0.9)"]},{name:"stopSpeech",async:!0,signature:"stopSpeech(): void",description:'Stops any in-progress speech synth\
esis immediately (the legacy `data-speak-action="stop"` behaviour). Safe to call when nothing is speaking \u2014 no-op, does \
not throw.',availableIn:["content:action"],examples:["stopSpeech()"]},{name:"copyText",async:!0,signature:"copyText(text\
: string): void",description:"Copies `text` to the device's clipboard and shows a brief \"Copied\" note. Content actions o\
nly, because a browser lets a page write the clipboard only in response to a tap or click. Throws (so the action's error\
 snackbar reports it) where the clipboard isn't available, e.g. a page not served over HTTPS.",availableIn:["content:act\
ion"],examples:["copyText(rosterText)","copyText($params.link)"]},{name:"enablePush",async:!0,signature:'enablePush(): "\
subscribed" | "denied" | "unavailable" | "ios-not-installed" | "preview"',description:"Asks for notification permission \
(only if it hasn't been asked) and registers this device for the org's pushes \u2014 the header bell's subscribe, as a button\
 the org can place where it matters (\u{1F514} Remind me). The device is registered against the visitor's auth uid, which is wh\
at a transition rule's `notifyTo` names. Content actions only, because the permission prompt needs a tap. Returns what h\
appened, so store it and word the button from it: `subscribed`; `denied` (blocked \u2014 they must re-enable it in browser or\
 phone settings); `unavailable` (this browser has no web push); `ios-not-installed` (iPhone/iPad in a browser tab \u2014 web \
push works only once the site is added to the home screen); `preview` (a design preview, nothing registered).",availableIn:[
"content:action"],examples:['r = enablePush(); setAppValue("pushState", r)']},{name:"setValue",async:!0,signature:"setVa\
lue(value: any): void",description:"Writes the content node's OWN value \u2014 the node whose action is running \u2014 so formulas\
 elsewhere can read it back via the node's name (the legacy `setValue=` attribute's behaviour). Use it for local UI stat\
e a content node carries itself (selected tab, filter toggle); for app-level state use `setAppValue` instead.",availableIn:[
"content:action"],examples:["setValue($params.id)",'setValue("")']},{name:"setValues",async:!0,signature:"setValues(valu\
es: {[fieldNameOrPointerKey: string]: any}): void",description:"Writes SEVERAL fields at once as ONE atomic state update\
 (#407). A plain key is a node name resolved from this content node's scope outward \u2014 exactly the names a formula here c\
ould read. A key containing `[` or `.` is a pointer key read from the app root, as `setAppValue` takes it \u2014 so one call \
can fill cells of a repeating section (`'rows[2].qty'`); write it in the short form the app uses (`rows[2].qty`, not `sh\
eet.rows[2].qty`), and writing past the last row extends the section. Every value is evaluated against the same state sn\
apshot before any write lands, so `setValues({a: b, b: a})` is a genuine swap with no half-applied render in between; `u\
ndefined` clears a field. A key that resolves to nothing throws (nothing is written). Use it for any control that must m\
ove two or more fields together \u2014 swap, reset-to-defaults, apply-a-preset, fill a row; for one field use `setValue` (own\
 value) or `setAppValue` (app variable).",availableIn:["content:action"],examples:["setValues({myLanguage: otherLanguage\
, otherLanguage: myLanguage})",'setValues({minPrice: 0, maxPrice: 1000, sortBy: "newest"})',"setValues({'rows[0].qty': 1\
, 'rows[1].qty': 2})"]},{name:"submit",async:!0,signature:"submit(): {id: string, ...}",description:"Publishes the conte\
nt node's enclosing submit context object (the legacy `@submit` href behaviour): resolves the surrounding form-like obje\
ct, publishes it as a record, then writes the server-stamped `id`/`createdAt`/`createdBy` back into the source fields an\
d shows a success snackbar. Returns the published record. Throws when there is no submit context or the publish fails \u2014 \
so a failing `submit()` aborts the action's `navigate` step.",availableIn:["content:action"],examples:["submit()"],status:"\
legacy",use:"a declared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs nam\
ed explicitly"}],$P=Os.filter(e=>e.async).map(e=>e.name),jU=Os.filter(e=>!e.async).map(e=>e.name),RP=e=>xw.some(t=>t===e),
IP=e=>RP(e)?Os.filter(t=>t.availableIn.includes(e)).map(t=>t.name):[],OP=Object.fromEntries(Os.map(e=>[e.name,async()=>{
throw new Error(`${e.name} isn't available in a test pack: stub it in hosts.asyncHosts`)}])),CP=e=>{if(!P(e))return e;let t=e.
left;return{left:"failingExpression"in t?{message:t.message,expression:L_(t.failingExpression)}:{message:t.message,expression:t.
source}}},NP=e=>{if(!("$now"in e))return e;let{$now:t,...r}=e;if("now"in r&&r.now!==t)throw new Error(`orgPack: context \
sets both $now (${String(t)}) and now (${String(r.now)}) \u2014 pass one.`);return{...r,now:t}},PP=(e,t={})=>{var r,n,a,
i;let o=SP(QN(e));if(P(o))throw new Error(`org config failed to decode: ${String(o.left)}`);let s=o.right.appConfig,l=new Set(
["storage","realtime","callable"].flatMap(E=>EA(s,E).map(_=>_.typeName))),c=[...new Set(((r=t.records)!=null?r:[]).map(E=>E.
type).filter(E=>!l.has(E)))];if(c.length)throw new Error(`orgPack: record type(s) ${c.join(", ")} are not declared as a \
datasource by any node in this config \u2014 the live app would never load them. Declare a data node (e.g. a subsection with \
data: {dataType, source: "storage"}) or remove the fixture records.`);let u=((n=t.records)!=null?n:[]).filter(E=>E.isDeleted!==
!0),d={objects:[...o.right.objectInstances,...u]},f=NP(t.plugins?{...nP(o.right.plugins),...t.context}:(a=t.context)!=null?
a:{}),h=$N(s,f,d);RN(h,(i=t.init)!=null?i:{});let y=()=>h.getState(),b=[],T=E=>{let _=La(y(),E);return xe(_)&&_.right===
!0},S=E=>{let _=B(y(),E);for(;_;){if(T(_.key))return!1;_=Gr(y(),_.key)}return!0};return{...h,evalAt:(E,_="")=>ze(Ar(y(),
E.startsWith("@")?E:`@${E}`,_)),value:E=>ze(ar(y(),E)),lengthOf:E=>ze(Ma(y(),E)),setValue:(E,_)=>{h.api.updateValue(E,_)},
clearValue:E=>{h.api.clearSubtree(E)},setCursor:(E,_)=>{h.api.setCursor(E,_)},isVisible:S,visibleChildren:E=>S(E)?Pi(y(),
E).map(_=>_.key):[],runningSlot:E=>{let _=Zo(y(),"",E);if(_===void 0)throw new Error(`runningSlot: no node named "${E}" \
in this org`);return aN(y(),_)},showsAnswerProgress:E=>{let _=Zo(y(),"",E);if(_===void 0)throw new Error(`showsAnswerPro\
gress: no node named "${E}"`);return sN(y(),_)},childKeys:E=>kt(y(),E).map(_=>_.key),renderHtml:E=>{let _=B(y(),E).node.
htmlTemplate;if(typeof _!="string")throw new Error(`no htmlTemplate at pointer "${E}"`);let O=hp(_);if(!O.startsWith("@"))
return O;let M=ze(Ar(y(),O,E));if(M!==void 0&&typeof M!="string")throw new Error(`htmlTemplate at "${E}" evaluated to a \
non-string (${JSON.stringify(M)}); the renderer rejects it. Wrap a html\`\u2026\` result in a template: @\`\${html\`\u2026\`}\``);
return String(M)},widgetCommands:b,nodeAt:E=>B(y(),E).node,runScriptAt:(E,_,O,M)=>{let W=O??B(y(),E).node.script;if(typeof W!=
"string"||W.length===0)throw new Error(`no script found at pointer "${E}"`);let K=async(...G)=>{(G.length===1&&Array.isArray(
G[0])?G[0]:G).map(ge=>{let pe=Zo(y(),E,String(ge));if(pe===void 0)throw new Error(`clearValues: no node named "${String(
ge)}" is in scope here`);return pe}).forEach(ge=>h.api.clearSubtree(ge))},Z=async(G,ae,Ie)=>{let ge=Zo(y(),E,String(G));
if(ge===void 0)throw new Error(`sendToWidget: no node named "${String(G)}" is in scope here`);if(!B(y(),ge).node.pluginName)
throw new Error(`sendToWidget: "${String(G)}" is not a widget node`);b.push({widget:String(G),key:ge,command:String(ae),
...Ie===void 0?{}:{args:Ie}})},H=async G=>{h.api.updateValue(B(y(),E).key,G)},we=async G=>{h.api.bulkAction(e$(y(),E,G))};
return UR(y(),E,W,{..._,asyncHosts:{...OP,clearValues:K,sendToWidget:Z,setValue:H,setValues:we,..._.asyncHosts}},M).then(
CP)}}},DP=["id",...mw],Ly=e=>Object.fromEntries(Object.entries(e).filter(([t])=>!DP.includes(t))),Fy=e=>typeof e=="objec\
t"&&e!==null&&!Array.isArray(e),MP=(e=[])=>{let t=new Map(e.map(({id:o,type:s,...l})=>[`${s}/${o}`,l])),r=[],n=(o,s)=>{let l=String(
s);if(typeof s!="string"||l.split("/").some(c=>c.length===0))throw new Error(`${o}: path "${l}" has an empty segment`);return l};
return{writes:r,record:o=>t.get(o),asyncHosts:{setRealtime:async(o,s)=>{if(n("setRealtime",o),!Fy(s))throw new Error("se\
tRealtime: `value` must be an object");let l=Ly(s);return r.push({kind:"set",path:String(o),value:l}),t.set(String(o),l),
l},updateRealtime:async(o,s)=>{var l;if(n("updateRealtime",o),!Fy(s))throw new Error("updateRealtime: `patch` must be an\
 object");let c=Object.keys(s);if(c.length===0)throw new Error("updateRealtime: `patch` must have at least one field");if(c.
some(f=>f.includes("/")))throw new Error("updateRealtime: patch top-level fields only");let u=Ly(s);r.push({kind:"update",
path:String(o),value:u});let d={...(l=t.get(String(o)))!=null?l:{}};return Object.entries(u).forEach(([f,h])=>{h===null?
delete d[f]:d[f]=h}),t.set(String(o),d),u}}}};var jP=(e,t,r)=>{if(t.size===0)return`No ${r}s declared. Add a declaration to satisfy the reference.`;let n=[...t].map(o=>({
p:o,d:_b(e,o)})).sort((o,s)=>o.d-s.d),a=n[0];if(a&&a.d<=3)return`Closest ${r}: \`${a.p}\`. Either rename the reference or\
 add \`${e}\` to the org config.`;let i=n.slice(0,5).map(o=>o.p).join(", ");return`Available ${r}s: ${i}. Either rename \
the reference or add \`${e}\`.`};var LP=["objectType","objectInstance","field","plugin","record","user"],LU=new Set([...g_,...y_,...Object.keys(up),...LP,
...Object.keys(yv)]);var FP=e=>e.includes(h_)||e.includes("$")||e.includes("@")||e.includes("{"),UP=e=>{var t;let n=(e.startsWith("/")?e.slice(
1):e).split(".");return((t=n[n.length-1])!=null?t:"").replace(/\[\d+\]$/g,"")};var ra=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",_w=new Set(["navigate","replaceScreen","pushCursor","set\
Cursor"]),BP=new Set(["replaceScreen","setCursor"]);var nf=e=>Array.isArray(e.arguments)?e.arguments:[],HP=e=>{if(!ra(e))return;let t=e.value;if(typeof t=="string")return t;
if(typeof t=="object"&&t!==null){let r=t.cooked;if(typeof r=="string")return r}},af=e=>{if(ra(e)){if(e.type==="Literal"&&
typeof e.value=="string")return e.value;if(e.type==="TemplateLiteral"&&Array.isArray(e.expressions)&&e.expressions.length===
0&&Array.isArray(e.quasis))return HP(e.quasis[0])}},WP=e=>(t,r)=>{var n;let a=[],[i,o]=nf(t);if(i===void 0)return a.push(
{path:r.path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;ra(o)&&o.type==="Literal"&&a.push({path:r.
path,kind:"host-arg-type",message:`\`${e}\`'s second argument must be an object of nav args, not a literal.`,fixHint:`e.\
g. \`${e}('detail', {id: $params.id})\`.`,severity:"error"});let s=af(i);if(s!==void 0&&s.length===0)return a.push({path:r.
path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;if(s===void 0||r.navTargets===void 0||FP(
s))return a;let l=UP(s);return l.length===0?a:r.navTargets.has(l)?(BP.has(e)&&((n=r.flowBearing)==null?void 0:n.has(l))===
!0&&a.push({path:r.path,kind:"action-replace-into-flow",message:`\`${e}("${s}")\` replaces into a screen that contains a \
flow \u2014 replace skips the flow-state reset, so re-entering shows the previous run's completed step instead of a fresh flo\
w.`,fixHint:`Use \`navigate("${s}")\` (push resets flow state under the target and gives Back a nav-stack entry).`,severity:"\
warning"}),a):(a.push({path:r.path,kind:"missing-screen",message:`\`${e}("${s}")\` does not match any named node in appCo\
nfig \u2014 the call will fail at runtime.`,fixHint:jP(l,r.navTargets,"navigation target"),severity:"error"}),a)},qP=(e,t)=>nf(
e).length===0?[]:[{path:t.path,kind:"host-arg-type",message:"`back()` takes no arguments \u2014 it always goes back one nav-s\
tack entry.",fixHint:"Use `back()`; to go to a specific screen use `navigate('screen')`.",severity:"warning"}],Cd=(e,t)=>{
if(!ra(e)||e.type!=="ObjectExpression")return;let r=Array.isArray(e.properties)?e.properties:[];for(let n of r){if(!ra(n)||
n.type!=="Property"||n.computed===!0)continue;let a=n.key;if((ra(a)?a.type==="Identifier"&&typeof a.name=="string"?a.name:
af(a):void 0)===t)return n.value}},VP=e=>ra(e)?e.type==="ObjectExpression"?[e]:e.type==="ArrayExpression"&&Array.isArray(
e.elements)?e.elements.filter(t=>ra(t)&&t.type==="ObjectExpression"):[]:[],Uy=(e,t)=>(r,n)=>{var a;let i=n.objectTypeFieldTypes,
[o]=nf(r),s=af(Cd(o,"type"));if(i===void 0||s===void 0)return[];let l=i.get(s);if(l===void 0)return[];let c=(a=[...l].find(
([,u])=>u.kind==="builtin"&&u.name==="parentRef"))==null?void 0:a[0];return c===void 0?[]:VP(Cd(o,t)).filter(u=>Cd(u,"_p\
arent")!==void 0).map(()=>({path:n.path,kind:"tree-mixed-parent-spellings",message:`${e} writes \`_parent\` on a \`${s}\`\
, but \`${s}\` declares the \`parentRef\` field \`${c}\`, so the tree reads only \`${c}\` and ignores \`_parent\`.`,fixHint:`\
Write the parent's id to \`${c}\` instead (\`${c}: <parent id>\`), or remove the \`parentRef\` field from \`${s}\` to use\
 the implicit \`_parent\` link everywhere.`,severity:"error"}))},FU=new Map([...[..._w].map(e=>[e,WP(e)]),["back",qP],["\
publishData",Uy("publishData","data")],["updateData",Uy("updateData","patch")]]),UU=new RegExp(`\\b(?:${[..._w].join("|")}\
)\\(`);var YP=Aw.keyof({Person:null});var zP=N.intersection([N.type({name:N.string}),N.partial({type:N.string})]),$w=N.intersection([N.type({name:N.string,fields:N.array(
zP)}),N.partial({description:N.string,wellKnown:YP})]),KP=N.keyof({appFeature:null,none:null}),GP=N.keyof({host:null,global:null,
user:null,group:null}),JP=N.partial({types:N.array($w),scope:GP,nav:KP,plugins:N.array(N.string)}),ZP=N.intersection([N.type(
{screen:N.string,title:N.string}),N.partial({pic:N.string})]),XP=N.intersection([N.type({name:N.string,shape:N.union([N.string,
N.record(N.string,N.string)])}),N.partial({description:N.string})]),QP=N.intersection([N.type({types:N.array(N.string),screens:N.array(
N.string)}),N.partial({functions:N.array(N.string),plugins:N.array(N.string),nav:N.array(ZP),notifications:N.array(N.string),
slots:N.array(XP)})]),eD=N.partial({entities:N.array(N.string),seedSlots:N.array(N.string),labels:N.array(N.string)});var tD=N.intersection([N.type({name:N.string,hostType:$w,slot:N.string,fn:N.string}),N.partial({description:N.string})]),
rD=N.intersection([N.type({id:N.string,version:N.number,description:N.string,requires:JP,provides:QP}),N.partial({params:eD,
seams:N.array(tD)})]),nD=N.partial({nav:N.array(N.unknown),navFolder:N.string,notifications:N.array(N.unknown)}),aD=N.partial(
{appConfig:N.array(N.unknown),objectTypes:N.array(N.unknown),objectInstances:N.array(N.unknown),plugins:N.array(N.unknown),
shell:nD}),BU=N.type({manifest:rD,body:aD});var HU=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,
310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,
1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,
773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,
3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,
1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var WU=[...eA];var iD={if:{min:3,max:3},and:{min:0,max:null},or:{min:0,max:null},length:{min:1,max:1},sum:{min:1,max:1},avg:{min:1,max:1},
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
min:2,max:2},findIndex:{min:2,max:2},count:{min:1,max:2},groupBy:{min:2,max:2},sumBy:{min:2,max:2}};var qU=new Set(Os.map(e=>e.name));var VU=new Map(xw.map(e=>[e,new Set(IP(e))])),YU=new Set($P);var zU=new Map(Object.entries(iD));var oD=[{attribute:"data-action",label:"Declared action",html:'<button data-action="openTab" data-param-id="${id}">Open<\
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
er before navigating. **Forms only** \u2014 a flow reads `data-args`/`$args`, never `param`",status:"legacy"}],KU=oD.map(
e=>e.attribute).filter((e,t,r)=>r.indexOf(e)===t),_c=[{id:"rel",tokens:["rel="],attributes:["rel"],fixHint:'Declare an a\
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
sD=Object.fromEntries(_c.map(e=>[e.id,e]));var GU=_c.flatMap(e=>[...e.tokens]),JU=_c.filter(e=>e.prompt!==void 0).sort((e,t)=>e.prompt.order-t.prompt.order).map(e=>e.
prompt.line);var ZU=sD.rel,XU=_c.filter(e=>e.id!=="rel"&&e.attributes.length>0);var lD=["versionId","apiVersion","appConfig","objectTypes","objectInstances","plugins","users"],cD=["orgSummary","minCli\
entVersion"],QU=[...lD,...cD];var e4=new Map(Object.entries(v_));var t4=new Map(Object.entries(b_)),r4=new Map(Object.entries(w_).map(([e,t])=>[e,Object.entries(t)])),By,n4=Object.entries(
(By=T_.objectTypeField)!=null?By:{});var uD=["archiveData","archiveId"],a4=["archiveType",...uD];var i4=Gl.Allow.OBJ|Gl.Allow.ARR;var o4=[...gv].filter(e=>e!=="variable");var dD="| `customize` | `feature`, `reason` | declares that you are changing an installed feature's own nodes. Without i\
t, the closing gate refuses any change inside a `feature-\u2026` folder |",s4=`

## Installed features

Folders named \`feature-<slug>\` hold installed features: tested functionality this org shares with others. Change a node \
inside one only when the request needs it, and declare the change first:

| op | fields | what it does |
|---|---|---|
${dD}`;var l4=new Set("a an the and or for of to in on with my our your me i we it its this that app apps application something\
 some thing things help keep can like want make build create need would should could be is are was let lets using use si\
mple new tool tools just also all any".split(" ")),pD=e=>e.length>4&&e.endsWith("ies")?`${e.slice(0,-3)}y`:e.length>3&&e.
endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e;var fD=[[["chat","tutor","talk","conversation","speak","spoken","voice"],["ai-chat"]],[["ai","generate","generated","gen\
erator","smart"],["ai-query","image-generation"]],[["image","picture","photo","camera","illustrated"],["image-generation",
"ai-query"]],[["game","party","multiplayer","player","live","realtime","round"],["realtime","transitions"]],[["quiz","re\
vise","revision","flashcard","exam","study","learn","lesson"],["flows","tabs"]],[["booking","book","schedule","calendar",
"rota","signup","form","track","tracker","log"],["forms","storage-data"]],[["notify","notification","reminder","alert"],
["push"]],[["video","call","youtube"],["video"]],[["music","song","audio","jingle","playlist","podcast"],["audio"]],[["m\
ap","trip","travel","holiday","itinerary","route"],["maps"]],[["login","member","private","pin"],["org-login","auth-priv\
ate"]],[["team","group","share","shared","friend"],["group-scoped","realtime"]],[["personal","journal","diary"],["user-s\
coped"]]],c4=new Map(fD.flatMap(([e,t])=>e.map(r=>[pD(r),t])));var hD=Ke.intersection([Ke.type({name:Ke.string}),Ke.partial({parent:Ke.union([Ke.string,Ke.null])})]),mD=Ke.type({orgIds:Ke.array(
Ke.string)}),u4=Ke.partial({folders:Ke.record(Ke.string,hD),containers:Ke.record(Ke.string,mD),folderOrder:Ke.array(Ke.string)});var Iw=L.keyof({new:null,claimed:null,"fixed-draft":null,published:null,closed:null}),dt=e=>L.union([e,L.null]),gD=L.intersection(
[L.type({qualifiedOrgId:L.string}),L.partial({configSource:dt(L.string),versionId:dt(L.string),previewDraft:dt(L.boolean),
variant:dt(L.string)})]),yD=L.intersection([L.type({name:L.string,captured:L.boolean}),L.partial({owner:dt(L.string),hostKey:dt(
L.string),fullscreen:dt(L.boolean)})]),vD=L.intersection([L.type({pathname:L.string}),L.partial({search:dt(L.string),pointerKey:dt(
L.string),screenLabel:dt(L.string),widgets:dt(L.array(yD))})]),bD=L.partial({buildCommit:L.string,buildTimestamp:L.string,
capabilityVersion:L.number,userAgent:L.string,platform:L.string,language:L.string,timezone:L.string,viewport:L.type({w:L.number,
h:L.number}),dpr:L.number,standalone:L.boolean,online:L.boolean,touch:L.boolean}),wD=L.partial({screenshot:L.type({path:L.string,
bytes:L.number,w:L.number,h:L.number}),state:L.type({path:L.string,bytes:L.number})}),Ow={statusNote:dt(L.string),branch:dt(
L.string),prUrl:dt(L.string)},d4=L.intersection([L.type({id:L.string,createdAt:L.string,reporterUid:L.string,description:L.string,
target:gD,location:vD,status:Iw}),L.partial({reporterUsername:dt(L.string),reporterIsOwner:dt(L.boolean),client:dt(bD),attachments:dt(
wD),...Ow,statusUpdatedAt:dt(L.string),statusUpdatedBy:dt(L.string)})]),p4=L.intersection([L.type({status:Iw,statusUpdatedAt:L.string,
statusUpdatedBy:L.string}),L.partial(Ow)]);var f4=24*60*60*1e3;import TD from"node:fs";var kD=e=>{if(e===null||typeof e!="object")return!1;let t=e.appConfig;if(!t||typeof t!="object")return!1;let r=t;return Array.
isArray(r.data)&&Array.isArray(r.lengths)?!1:!!(Array.isArray(r._children)||r.type==="app")},Cw=e=>e instanceof Error?e.
message:String(e),of=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),SD=e=>of(e)&&kD(e),ED=e=>of(e)&&of(e.appConfig)&&
Array.isArray(e.appConfig.data)&&Array.isArray(e.appConfig.lengths),Nw=e=>{let t;try{t=TD.readFileSync(e,"utf8")}catch(n){
return Ce(`cannot read ${e}: ${Cw(n)}`)}let r;try{r=JSON.parse(t)}catch(n){return Ce(`${e} is not valid JSON: ${Cw(n)}`)}
return SD(r)?R(r):ED(r)?R(uw(r)):Ce(`${e} is not an org config (no appConfig in tree or pointer format)`)};var x4=e=>{let t=typeof e=="string"&&!e.startsWith("file:")?e:xD(e),r=Nw(t);if(P(r))throw new Error(r.left);return r.right};export{PP as createOrgPackApi,MP as createRealtimeStore,x4 as loadOrgTree};
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
