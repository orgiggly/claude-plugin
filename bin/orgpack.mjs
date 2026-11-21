import { createRequire as __ogCreateRequire } from "node:module";
const require = __ogCreateRequire(import.meta.url);
var OT=Object.create;var Yf=Object.defineProperty;var IT=Object.getOwnPropertyDescriptor;var CT=Object.getOwnPropertyNames;var NT=Object.getPrototypeOf,PT=Object.prototype.hasOwnProperty;var qe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var MT=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of CT(t))!PT.call(e,a)&&a!==r&&Yf(e,a,{get:()=>t[a],
enumerable:!(n=IT(t,a))||n.enumerable});return e};var ie=(e,t,r)=>(r=e!=null?OT(NT(e)):{},MT(t||!e||!e.__esModule?Yf(r,"default",{value:e,enumerable:!0}):r,e));var Hn=qe(X=>{"use strict";var DT=X&&X.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(X,"__esModule",{value:!0});X.dual=X.getEndomorphismMonoid=X.SK=X.hole=X.constVoid=X.constUndefined=
X.constNull=X.constFalse=X.constTrue=X.unsafeCoerce=X.apply=X.getRing=X.getSemiring=X.getMonoid=X.getSemigroup=X.getBooleanAlgebra=
void 0;X.identity=Vc;X.constant=Bi;X.flip=WT;X.flow=zf;X.tuple=qT;X.increment=VT;X.decrement=YT;X.absurd=Kf;X.tupled=zT;
X.untupled=KT;X.pipe=GT;X.not=ZT;var jT=function(e){return function(){return{meet:function(t,r){return function(n){return e.
meet(t(n),r(n))}},join:function(t,r){return function(n){return e.join(t(n),r(n))}},zero:function(){return e.zero},one:function(){
return e.one},implies:function(t,r){return function(n){return e.implies(t(n),r(n))}},not:function(t){return function(r){
return e.not(t(r))}}}}};X.getBooleanAlgebra=jT;var LT=function(e){return function(){return{concat:function(t,r){return function(n){
return e.concat(t(n),r(n))}}}}};X.getSemigroup=LT;var UT=function(e){var t=(0,X.getSemigroup)(e);return function(){return{
concat:t().concat,empty:function(){return e.empty}}}};X.getMonoid=UT;var FT=function(e){return{add:function(t,r){return function(n){
return e.add(t(n),r(n))}},zero:function(){return e.zero},mul:function(t,r){return function(n){return e.mul(t(n),r(n))}},
one:function(){return e.one}}};X.getSemiring=FT;var BT=function(e){var t=(0,X.getSemiring)(e);return{add:t.add,mul:t.mul,
one:t.one,zero:t.zero,sub:function(r,n){return function(a){return e.sub(r(a),n(a))}}}};X.getRing=BT;var HT=function(e){return function(t){
return t(e)}};X.apply=HT;function Vc(e){return e}X.unsafeCoerce=Vc;function Bi(e){return function(){return e}}X.constTrue=
Bi(!0);X.constFalse=Bi(!1);X.constNull=Bi(null);X.constUndefined=Bi(void 0);X.constVoid=X.constUndefined;function WT(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.length>1?e(t[1],t[0]):function(n){return e(
n)(t[0])}}}function zf(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:return function(){return t(e.apply(
this,arguments))};case 3:return function(){return r(t(e.apply(this,arguments)))};case 4:return function(){return n(r(t(e.
apply(this,arguments))))};case 5:return function(){return a(n(r(t(e.apply(this,arguments)))))};case 6:return function(){
return i(a(n(r(t(e.apply(this,arguments))))))};case 7:return function(){return o(i(a(n(r(t(e.apply(this,arguments)))))))};case 8:
return function(){return s(o(i(a(n(r(t(e.apply(this,arguments))))))))};case 9:return function(){return l(s(o(i(a(n(r(t(e.
apply(this,arguments)))))))))}}}function qT(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e}function VT(e){
return e+1}function YT(e){return e-1}function Kf(e){throw new Error("Called `absurd` function which should be uncallable")}
function zT(e){return function(t){return e.apply(void 0,t)}}function KT(e){return function(){for(var t=[],r=0;r<arguments.
length;r++)t[r]=arguments[r];return e(t)}}function GT(e,t,r,n,a,i,o,s,l){switch(arguments.length){case 1:return e;case 2:
return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:
return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],
u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}X.hole=Kf;var JT=function(e,t){return t};X.SK=JT;function ZT(e){
return function(t){return!e(t)}}var XT=function(){return{concat:function(e,t){return zf(e,t)},empty:Vc}};X.getEndomorphismMonoid=
XT;var QT=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,DT([a],n,!1))}}};X.dual=QT});var Hi=qe(z=>{"use strict";var ek=z&&z.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,
i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.
call(t))};Object.defineProperty(z,"__esModule",{value:!0});z.flatMapReader=z.flatMapTask=z.flatMapIO=z.flatMapEither=z.flatMapOption=
z.flatMapNullable=z.liftOption=z.liftNullable=z.fromReadonlyNonEmptyArray=z.has=z.emptyRecord=z.emptyReadonlyArray=z.tail=
z.head=z.isNonEmpty=z.singleton=z.right=z.left=z.isRight=z.isLeft=z.some=z.none=z.isSome=z.isNone=void 0;var Va=Hn(),tk=function(e){
return e._tag==="None"};z.isNone=tk;var rk=function(e){return e._tag==="Some"};z.isSome=rk;z.none={_tag:"None"};var nk=function(e){
return{_tag:"Some",value:e}};z.some=nk;var ak=function(e){return e._tag==="Left"};z.isLeft=ak;var ik=function(e){return e.
_tag==="Right"};z.isRight=ik;var ok=function(e){return{_tag:"Left",left:e}};z.left=ok;var sk=function(e){return{_tag:"Ri\
ght",right:e}};z.right=sk;var lk=function(e){return[e]};z.singleton=lk;var ck=function(e){return e.length>0};z.isNonEmpty=
ck;var uk=function(e){return e[0]};z.head=uk;var dk=function(e){return e.slice(1)};z.tail=dk;z.emptyReadonlyArray=[];z.emptyRecord=
{};z.has=Object.prototype.hasOwnProperty;var pk=function(e){return ek([e[0]],e.slice(1),!0)};z.fromReadonlyNonEmptyArray=
pk;var fk=function(e){return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.
apply(void 0,n);return e.fromEither(i==null?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i))}}};z.liftNullable=fk;var hk=function(e){
return function(t,r){return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var i=t.apply(void 0,n);
return e.fromEither((0,z.isNone)(i)?(0,z.left)(r.apply(void 0,n)):(0,z.right)(i.value))}}};z.liftOption=hk;var mk=function(e,t){
return(0,Va.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftNullable)(e)(n,a))})};z.flatMapNullable=mk;var gk=function(e,t){
return(0,Va.dual)(3,function(r,n,a){return t.flatMap(r,(0,z.liftOption)(e)(n,a))})};z.flatMapOption=gk;var yk=function(e,t){
return(0,Va.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromEither(n(a))})})};z.flatMapEither=yk;var vk=function(e,t){
return(0,Va.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromIO(n(a))})})};z.flatMapIO=vk;var bk=function(e,t){
return(0,Va.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromTask(n(a))})})};z.flatMapTask=bk;var wk=function(e,t){
return(0,Va.dual)(2,function(r,n){return t.flatMap(r,function(a){return e.fromReader(n(a))})})};z.flatMapReader=wk});var Kc=qe(Lt=>{"use strict";var Tk=Lt&&Lt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),kk=Lt&&Lt.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Sk=Lt&&
Lt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&Tk(t,e,r);return kk(t,e),t};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.ap=_k;Lt.apFirst=
Ak;Lt.apSecond=$k;Lt.apS=Rk;Lt.getApplySemigroup=Ok;Lt.sequenceT=Ck;Lt.sequenceS=Pk;var Ek=Hn(),xk=Sk(Hi());function _k(e,t){
return function(r){return function(n){return e.ap(e.map(n,function(a){return function(i){return t.ap(a,i)}}),r)}}}function Ak(e){
return function(t){return function(r){return e.ap(e.map(r,function(n){return function(){return n}}),t)}}}function $k(e){
return function(t){return function(r){return e.ap(e.map(r,function(){return function(n){return n}}),t)}}}function Rk(e){
return function(t,r){return function(n){return e.ap(e.map(n,function(a){return function(i){var o;return Object.assign({},
a,(o={},o[t]=i,o))}}),r)}}}function Ok(e){return function(t){return{concat:function(r,n){return e.ap(e.map(r,function(a){
return function(i){return t.concat(a,i)}}),n)}}}}function zc(e,t,r){return function(n){for(var a=Array(r.length+1),i=0;i<
r.length;i++)a[i]=r[i];return a[r.length]=n,t===0?e.apply(null,a):zc(e,t-1,a)}}var Yc={1:function(e){return[e]},2:function(e){
return function(t){return[e,t]}},3:function(e){return function(t){return function(r){return[e,t,r]}}},4:function(e){return function(t){
return function(r){return function(n){return[e,t,r,n]}}}},5:function(e){return function(t){return function(r){return function(n){
return function(a){return[e,t,r,n,a]}}}}}};function Ik(e){return xk.has.call(Yc,e)||(Yc[e]=zc(Ek.tuple,e-1,[])),Yc[e]}function Ck(e){
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=t.length,a=Ik(n),i=e.map(t[0],a),o=1;o<
n;o++)i=e.ap(i,t[o]);return i}}function Nk(e){var t=e.length;switch(t){case 1:return function(r){var n;return n={},n[e[0]]=
r,n};case 2:return function(r){return function(n){var a;return a={},a[e[0]]=r,a[e[1]]=n,a}};case 3:return function(r){return function(n){
return function(a){var i;return i={},i[e[0]]=r,i[e[1]]=n,i[e[2]]=a,i}}};case 4:return function(r){return function(n){return function(a){
return function(i){var o;return o={},o[e[0]]=r,o[e[1]]=n,o[e[2]]=a,o[e[3]]=i,o}}}};case 5:return function(r){return function(n){
return function(a){return function(i){return function(o){var s;return s={},s[e[0]]=r,s[e[1]]=n,s[e[2]]=a,s[e[3]]=i,s[e[4]]=
o,s}}}}};default:return zc(function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];for(var a={},i=0;i<t;i++)
a[e[i]]=r[i];return a},t-1,[])}}function Pk(e){return function(t){for(var r=Object.keys(t),n=r.length,a=Nk(r),i=e.map(t[r[0]],
a),o=1;o<n;o++)i=e.ap(i,t[r[o]]);return i}}});var Gs=qe(hn=>{"use strict";Object.defineProperty(hn,"__esModule",{value:!0});hn.map=Gf;hn.flap=Dk;hn.bindTo=jk;hn.let=Lk;
hn.getFunctorComposition=Uk;hn.as=Jf;hn.asUnit=Fk;var Mk=Hn();function Gf(e,t){return function(r){return function(n){return e.
map(n,function(a){return t.map(a,r)})}}}function Dk(e){return function(t){return function(r){return e.map(r,function(n){
return n(t)})}}}function jk(e){return function(t){return function(r){return e.map(r,function(n){var a;return a={},a[t]=n,
a})}}}function Lk(e){return function(t,r){return function(n){return e.map(n,function(a){var i;return Object.assign({},a,
(i={},i[t]=r(a),i))})}}}function Uk(e,t){var r=Gf(e,t);return{map:function(n,a){return(0,Mk.pipe)(n,r(a))}}}function Jf(e){
return function(t,r){return e.map(t,function(){return r})}}function Fk(e){var t=Jf(e);return function(r){return t(r,void 0)}}});var Xf=qe(Js=>{"use strict";Object.defineProperty(Js,"__esModule",{value:!0});Js.getApplicativeMonoid=Wk;Js.getApplicativeComposition=
qk;var Zf=Kc(),Bk=Hn(),Hk=Gs();function Wk(e){var t=(0,Zf.getApplySemigroup)(e);return function(r){return{concat:t(r).concat,
empty:e.of(r.empty)}}}function qk(e,t){var r=(0,Hk.getFunctorComposition)(e,t).map,n=(0,Zf.ap)(e,t);return{map:r,of:function(a){
return e.of(t.of(a))},ap:function(a,i){return(0,Bk.pipe)(a,n(i))}}}});var Gc=qe(Wi=>{"use strict";Object.defineProperty(Wi,"__esModule",{value:!0});Wi.chainFirst=Vk;Wi.tap=Qf;Wi.bind=Yk;function Vk(e){
var t=Qf(e);return function(r){return function(n){return t(n,r)}}}function Qf(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}function Yk(e){return function(t,r){return function(n){return e.chain(n,function(a){
return e.map(r(a),function(i){var o;return Object.assign({},a,(o={},o[t]=i,o))})})}}}});var eh=qe(Zs=>{"use strict";Object.defineProperty(Zs,"__esModule",{value:!0});Zs.tailRec=void 0;var zk=function(e,t){for(var r=t(
e);r._tag==="Left";)r=t(r.left);return r.right};Zs.tailRec=zk});var ih=qe(St=>{"use strict";var Kk=St&&St.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Gk=St&&St.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Jk=St&&
St.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&Kk(t,e,r);return Gk(t,e),t};Object.defineProperty(St,"__esModule",{value:!0});St.fromOption=rh;
St.fromPredicate=Xk;St.fromOptionK=nh;St.chainOptionK=Qk;St.fromEitherK=Jc;St.chainEitherK=eS;St.chainFirstEitherK=tS;St.
filterOrElse=rS;St.tapEither=ah;var Zk=Gc(),th=Hn(),fa=Jk(Hi());function rh(e){return function(t){return function(r){return e.
fromEither(fa.isNone(r)?fa.left(t()):fa.right(r.value))}}}function Xk(e){return function(t,r){return function(n){return e.
fromEither(t(n)?fa.right(n):fa.left(r(n)))}}}function nh(e){var t=rh(e);return function(r){var n=t(r);return function(a){
return(0,th.flow)(a,n)}}}function Qk(e,t){var r=nh(e);return function(n){var a=r(n);return function(i){return function(o){
return t.chain(o,a(i))}}}}function Jc(e){return function(t){return(0,th.flow)(t,e.fromEither)}}function eS(e,t){var r=Jc(
e);return function(n){return function(a){return t.chain(a,r(n))}}}function tS(e,t){var r=ah(e,t);return function(n){return function(a){
return r(a,n)}}}function rS(e,t){return function(r,n){return function(a){return t.chain(a,function(i){return e.fromEither(
r(i)?fa.right(i):fa.left(n(i)))})}}}function ah(e,t){var r=Jc(e),n=(0,Zk.tap)(t);return function(a,i){return n(a,r(i))}}});var oh=qe(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.right=ke.left=ke.flap=ke.Functor=ke.Bifunctor=
ke.URI=ke.bimap=ke.mapLeft=ke.map=ke.separated=void 0;var Zc=Hn(),nS=Gs(),aS=function(e,t){return{left:e,right:t}};ke.separated=
aS;var iS=function(e,t){return(0,Zc.pipe)(e,(0,ke.map)(t))},oS=function(e,t){return(0,Zc.pipe)(e,(0,ke.mapLeft)(t))},sS=function(e,t,r){
return(0,Zc.pipe)(e,(0,ke.bimap)(t,r))},lS=function(e){return function(t){return(0,ke.separated)((0,ke.left)(t),e((0,ke.
right)(t)))}};ke.map=lS;var cS=function(e){return function(t){return(0,ke.separated)(e((0,ke.left)(t)),(0,ke.right)(t))}};
ke.mapLeft=cS;var uS=function(e,t){return function(r){return(0,ke.separated)(e((0,ke.left)(r)),t((0,ke.right)(r)))}};ke.
bimap=uS;ke.URI="Separated";ke.Bifunctor={URI:ke.URI,mapLeft:oS,bimap:sS};ke.Functor={URI:ke.URI,map:iS};ke.flap=(0,nS.flap)(
ke.Functor);var dS=function(e){return e.left};ke.left=dS;var pS=function(e){return e.right};ke.right=pS});var lh=qe(Wr=>{"use strict";var fS=Wr&&Wr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),hS=Wr&&Wr.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),mS=Wr&&
Wr.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&fS(t,e,r);return hS(t,e),t};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.wiltDefault=gS;
Wr.witherDefault=yS;Wr.filterE=vS;var sh=mS(Hi());function gS(e,t){return function(r){var n=e.traverse(r);return function(a,i){
return r.map(n(a,i),t.separate)}}}function yS(e,t){return function(r){var n=e.traverse(r);return function(a,i){return r.
map(n(a,i),t.compact)}}}function vS(e){return function(t){var r=e.wither(t);return function(n){return function(a){return r(
a,function(i){return t.map(n(i),function(o){return o?sh.some(i):sh.none})})}}}}});var gh=qe(m=>{"use strict";var bS=m&&m.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),wS=m&&m.__setModuleDefault||
(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),uh=m&&
m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.
hasOwnProperty.call(e,r)&&bS(t,e,r);return wS(t,e),t};Object.defineProperty(m,"__esModule",{value:!0});m.match=m.foldW=m.
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
void 0;m.toError=JS;m.elem=mh;m.parseJSON=r1;m.getValidation=o1;var dh=Xf(),qi=Kc(),ph=uh(Gc()),TS=eh(),Vi=ih(),ct=Hn(),
Yi=Gs(),Ir=uh(Hi()),mn=oh(),ch=lh();m.left=Ir.left;m.right=Ir.right;m.flatMap=(0,ct.dual)(2,function(e,t){return(0,m.isLeft)(
e)?e:t(e.right)});var It=function(e,t){return(0,ct.pipe)(e,(0,m.map)(t))},ha=function(e,t){return(0,ct.pipe)(e,(0,m.ap)(
t))},zi=function(e,t,r){return(0,ct.pipe)(e,(0,m.reduce)(t,r))},Ki=function(e){return function(t,r){var n=(0,m.foldMap)(
e);return(0,ct.pipe)(t,n(r))}},Gi=function(e,t,r){return(0,ct.pipe)(e,(0,m.reduceRight)(t,r))},Xs=function(e){var t=(0,m.
traverse)(e);return function(r,n){return(0,ct.pipe)(r,t(n))}},Xc=function(e,t,r){return(0,ct.pipe)(e,(0,m.bimap)(t,r))},
Qc=function(e,t){return(0,ct.pipe)(e,(0,m.mapLeft)(t))},fh=function(e,t){return(0,ct.pipe)(e,(0,m.alt)(t))},eu=function(e,t){
return(0,ct.pipe)(e,(0,m.extend)(t))},tu=function(e,t){return(0,TS.tailRec)(t(e),function(r){return(0,m.isLeft)(r)?(0,m.
right)((0,m.left)(r.left)):(0,m.isLeft)(r.right)?(0,m.left)(t(r.right.left)):(0,m.right)((0,m.right)(r.right.right))})};
m.URI="Either";var kS=function(e,t){return{show:function(r){return(0,m.isLeft)(r)?"left(".concat(e.show(r.left),")"):"ri\
ght(".concat(t.show(r.right),")")}}};m.getShow=kS;var SS=function(e,t){return{equals:function(r,n){return r===n||((0,m.isLeft)(
r)?(0,m.isLeft)(n)&&e.equals(r.left,n.left):(0,m.isRight)(n)&&t.equals(r.right,n.right))}}};m.getEq=SS;var ES=function(e){
return{concat:function(t,r){return(0,m.isLeft)(r)?t:(0,m.isLeft)(t)?r:(0,m.right)(e.concat(t.right,r.right))}}};m.getSemigroup=
ES;var xS=function(e){var t=(0,m.left)(e.empty);return{URI:m.URI,_E:void 0,compact:function(r){return(0,m.isLeft)(r)?r:r.
right._tag==="None"?t:(0,m.right)(r.right.value)},separate:function(r){return(0,m.isLeft)(r)?(0,mn.separated)(r,r):(0,m.
isLeft)(r.right)?(0,mn.separated)((0,m.right)(r.right.left),t):(0,mn.separated)(t,(0,m.right)(r.right.right))}}};m.getCompactable=
xS;var _S=function(e){var t=(0,m.left)(e.empty),r=(0,m.getCompactable)(e),n=r.compact,a=r.separate,i=function(s,l){return(0,m.
isLeft)(s)||l(s.right)?s:t},o=function(s,l){return(0,m.isLeft)(s)?(0,mn.separated)(s,s):l(s.right)?(0,mn.separated)(t,(0,m.
right)(s.right)):(0,mn.separated)((0,m.right)(s.right),t)};return{URI:m.URI,_E:void 0,map:It,compact:n,separate:a,filter:i,
filterMap:function(s,l){if((0,m.isLeft)(s))return s;var c=l(s.right);return c._tag==="None"?t:(0,m.right)(c.value)},partition:o,
partitionMap:function(s,l){if((0,m.isLeft)(s))return(0,mn.separated)(s,s);var c=l(s.right);return(0,m.isLeft)(c)?(0,mn.separated)(
(0,m.right)(c.left),t):(0,mn.separated)(t,(0,m.right)(c.right))}}};m.getFilterable=_S;var AS=function(e){var t=(0,m.getFilterable)(
e),r=(0,m.getCompactable)(e);return{URI:m.URI,_E:void 0,map:It,compact:t.compact,separate:t.separate,filter:t.filter,filterMap:t.
filterMap,partition:t.partition,partitionMap:t.partitionMap,traverse:Xs,sequence:m.sequence,reduce:zi,foldMap:Ki,reduceRight:Gi,
wither:(0,ch.witherDefault)(m.Traversable,r),wilt:(0,ch.wiltDefault)(m.Traversable,r)}};m.getWitherable=AS;var $S=function(e){
return{URI:m.URI,_E:void 0,map:It,ap:function(t,r){return(0,m.isLeft)(t)?(0,m.isLeft)(r)?(0,m.left)(e.concat(t.left,r.left)):
t:(0,m.isLeft)(r)?r:(0,m.right)(t.right(r.right))},of:m.of}};m.getApplicativeValidation=$S;var RS=function(e){return{URI:m.
URI,_E:void 0,map:It,alt:function(t,r){if((0,m.isRight)(t))return t;var n=r();return(0,m.isLeft)(n)?(0,m.left)(e.concat(
t.left,n.left)):n}}};m.getAltValidation=RS;var OS=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.right)(e(t.
right))}};m.map=OS;m.Functor={URI:m.URI,map:It};m.as=(0,ct.dual)(2,(0,Yi.as)(m.Functor));m.asUnit=(0,Yi.asUnit)(m.Functor);
m.of=m.right;m.Pointed={URI:m.URI,of:m.of};var IS=function(e){return function(t){return(0,m.isLeft)(t)?t:(0,m.isLeft)(e)?
e:(0,m.right)(t.right(e.right))}};m.apW=IS;m.ap=m.apW;m.Apply={URI:m.URI,map:It,ap:ha};m.Applicative={URI:m.URI,map:It,ap:ha,
of:m.of};m.Chain={URI:m.URI,map:It,ap:ha,chain:m.flatMap};m.Monad={URI:m.URI,map:It,ap:ha,of:m.of,chain:m.flatMap};var CS=function(e,t){
return function(r){return(0,m.isLeft)(r)?e:t(e,r.right)}};m.reduce=CS;var NS=function(e){return function(t){return function(r){
return(0,m.isLeft)(r)?e.empty:t(r.right)}}};m.foldMap=NS;var PS=function(e,t){return function(r){return(0,m.isLeft)(r)?e:
t(r.right,e)}};m.reduceRight=PS;m.Foldable={URI:m.URI,reduce:zi,foldMap:Ki,reduceRight:Gi};var MS=function(e){return function(t){
return function(r){return(0,m.isLeft)(r)?e.of((0,m.left)(r.left)):e.map(t(r.right),m.right)}}};m.traverse=MS;var DS=function(e){
return function(t){return(0,m.isLeft)(t)?e.of((0,m.left)(t.left)):e.map(t.right,m.right)}};m.sequence=DS;m.Traversable={
URI:m.URI,map:It,reduce:zi,foldMap:Ki,reduceRight:Gi,traverse:Xs,sequence:m.sequence};var jS=function(e,t){return function(r){
return(0,m.isLeft)(r)?(0,m.left)(e(r.left)):(0,m.right)(t(r.right))}};m.bimap=jS;var LS=function(e){return function(t){return(0,m.
isLeft)(t)?(0,m.left)(e(t.left)):t}};m.mapLeft=LS;m.Bifunctor={URI:m.URI,bimap:Xc,mapLeft:Qc};var US=function(e){return function(t){
return(0,m.isLeft)(t)?e():t}};m.altW=US;m.alt=m.altW;m.Alt={URI:m.URI,map:It,alt:fh};var FS=function(e){return function(t){
return(0,m.isLeft)(t)?t:(0,m.right)(e(t))}};m.extend=FS;m.Extend={URI:m.URI,map:It,extend:eu};m.ChainRec={URI:m.URI,map:It,
ap:ha,chain:m.flatMap,chainRec:tu};m.throwError=m.left;m.MonadThrow={URI:m.URI,map:It,ap:ha,of:m.of,chain:m.flatMap,throwError:m.
throwError};m.FromEither={URI:m.URI,fromEither:ct.identity};m.fromPredicate=(0,Vi.fromPredicate)(m.FromEither);m.fromOption=
(0,Vi.fromOption)(m.FromEither);m.isLeft=Ir.isLeft;m.isRight=Ir.isRight;var BS=function(e,t){return function(r){return(0,m.
isLeft)(r)?e(r.left):t(r.right)}};m.matchW=BS;m.foldW=m.matchW;m.match=m.matchW;m.fold=m.match;var HS=function(e){return function(t){
return(0,m.isLeft)(t)?e(t.left):t.right}};m.getOrElseW=HS;m.getOrElse=m.getOrElseW;m.flap=(0,Yi.flap)(m.Functor);m.apFirst=
(0,qi.apFirst)(m.Apply);m.apFirstW=m.apFirst;m.apSecond=(0,qi.apSecond)(m.Apply);m.apSecondW=m.apSecond;m.tap=(0,ct.dual)(
2,ph.tap(m.Chain));m.flattenW=(0,m.flatMap)(ct.identity);m.flatten=m.flattenW;m.duplicate=(0,m.extend)(ct.identity);m.fromOptionK=
(0,Vi.fromOptionK)(m.FromEither);m.chainOptionK=(0,Vi.chainOptionK)(m.FromEither,m.Chain);m.chainOptionKW=m.chainOptionK;
var Qs={fromEither:m.FromEither.fromEither};m.liftNullable=Ir.liftNullable(Qs);m.liftOption=Ir.liftOption(Qs);var hh={flatMap:m.
flatMap};m.flatMapNullable=Ir.flatMapNullable(Qs,hh);m.flatMapOption=Ir.flatMapOption(Qs,hh);m.filterOrElse=(0,Vi.filterOrElse)(
m.FromEither,m.Chain);m.filterOrElseW=m.filterOrElse;var WS=function(e){return(0,m.isLeft)(e)?(0,m.right)(e.left):(0,m.left)(
e.right)};m.swap=WS;var qS=function(e){return function(t){return(0,m.isLeft)(t)?e(t.left):t}};m.orElseW=qS;m.orElse=m.orElseW;
var VS=function(e){return function(t){return t==null?(0,m.left)(e):(0,m.right)(t)}};m.fromNullable=VS;var YS=function(e,t){
try{return(0,m.right)(e())}catch(r){return(0,m.left)(t(r))}};m.tryCatch=YS;var zS=function(e,t){return function(){for(var r=[],
n=0;n<arguments.length;n++)r[n]=arguments[n];return(0,m.tryCatch)(function(){return e.apply(void 0,r)},t)}};m.tryCatchK=
zS;var KS=function(e){var t=(0,m.fromNullable)(e);return function(r){return(0,ct.flow)(r,t)}};m.fromNullableK=KS;var GS=function(e){
var t=(0,m.fromNullableK)(e);return function(r){return(0,m.flatMap)(t(r))}};m.chainNullableK=GS;m.toUnion=(0,m.foldW)(ct.
identity,ct.identity);function JS(e){try{return e instanceof Error?e:new Error(String(e))}catch{return new Error}}function mh(e){
return function(t,r){if(r===void 0){var n=mh(e);return function(a){return n(t,a)}}return(0,m.isLeft)(r)?!1:e.equals(t,r.
right)}}var ZS=function(e){return function(t){return(0,m.isLeft)(t)?!1:e(t.right)}};m.exists=ZS;m.Do=(0,m.of)(Ir.emptyRecord);
m.bindTo=(0,Yi.bindTo)(m.Functor);var XS=(0,Yi.let)(m.Functor);m.let=XS;m.bind=ph.bind(m.Chain);m.bindW=m.bind;m.apS=(0,qi.
apS)(m.Apply);m.apSW=m.apS;m.ApT=(0,m.of)(Ir.emptyReadonlyArray);var QS=function(e){return function(t){var r=e(0,Ir.head(
t));if((0,m.isLeft)(r))return r;for(var n=[r.right],a=1;a<t.length;a++){var i=e(a,t[a]);if((0,m.isLeft)(i))return i;n.push(
i.right)}return(0,m.right)(n)}};m.traverseReadonlyNonEmptyArrayWithIndex=QS;var e1=function(e){var t=(0,m.traverseReadonlyNonEmptyArrayWithIndex)(
e);return function(r){return Ir.isNonEmpty(r)?t(r):m.ApT}};m.traverseReadonlyArrayWithIndex=e1;m.traverseArrayWithIndex=
m.traverseReadonlyArrayWithIndex;var t1=function(e){return(0,m.traverseReadonlyArrayWithIndex)(function(t,r){return e(r)})};
m.traverseArray=t1;m.sequenceArray=(0,m.traverseArray)(ct.identity);m.chainW=m.flatMap;m.chain=m.flatMap;m.chainFirst=m.
tap;m.chainFirstW=m.tap;function r1(e,t){return(0,m.tryCatch)(function(){return JSON.parse(e)},t)}var n1=function(e,t){return(0,m.
tryCatch)(function(){var r=JSON.stringify(e);if(typeof r!="string")throw new Error("Converting unsupported structure to \
JSON");return r},t)};m.stringifyJSON=n1;m.either={URI:m.URI,map:It,of:m.of,ap:ha,chain:m.flatMap,reduce:zi,foldMap:Ki,reduceRight:Gi,
traverse:Xs,sequence:m.sequence,bimap:Xc,mapLeft:Qc,alt:fh,extend:eu,chainRec:tu,throwError:m.throwError};m.getApplySemigroup=
(0,qi.getApplySemigroup)(m.Apply);m.getApplyMonoid=(0,dh.getApplicativeMonoid)(m.Applicative);var a1=function(e,t){return(0,qi.
getApplySemigroup)((0,m.getApplicativeValidation)(e))(t)};m.getValidationSemigroup=a1;var i1=function(e,t){return(0,dh.getApplicativeMonoid)(
(0,m.getApplicativeValidation)(e))(t)};m.getValidationMonoid=i1;function o1(e){var t=(0,m.getApplicativeValidation)(e).ap,
r=(0,m.getAltValidation)(e).alt;return{URI:m.URI,_E:void 0,map:It,of:m.of,chain:m.flatMap,bimap:Xc,mapLeft:Qc,reduce:zi,
foldMap:Ki,reduceRight:Gi,extend:eu,traverse:Xs,sequence:m.sequence,chainRec:tu,throwError:m.throwError,ap:t,alt:r}}});var Le=qe(w=>{"use strict";var Ne=w&&w.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},
e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is\
 not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.
prototype,new n)}}(),Ya=w&&w.__assign||function(){return Ya=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<
n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ya.apply(this,arguments)},
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
w.intersection=w.IntersectionType=w.union=w.UnionType=w.record=w.DictionaryType=void 0;var ut=gh();w.failures=ut.left;var l1=function(e,t,r){
return(0,w.failures)([{value:e,context:t,message:r}])};w.failure=l1;w.success=ut.right;var Pe=function(){function e(t,r,n,a){
this.name=t,this.is=r,this.validate=n,this.encode=a,this.decode=this.decode.bind(this)}return e.prototype.pipe=function(t,r){
var n=this;return r===void 0&&(r="pipe(".concat(this.name,", ").concat(t.name,")")),new e(r,t.is,function(a,i){var o=n.validate(
a,i);return(0,ut.isLeft)(o)?o:t.validate(o.right,i)},this.encode===w.identity&&t.encode===w.identity?w.identity:function(a){
return n.encode(t.encode(a))})},e.prototype.asDecoder=function(){return this},e.prototype.asEncoder=function(){return this},
e.prototype.decode=function(t){return this.validate(t,[{key:"",type:this,actual:t}])},e}();w.Type=Pe;var c1=function(e){
return e};w.identity=c1;function wh(e){return e.displayName||e.name||"<function".concat(e.length,">")}w.getFunctionName=
wh;function u1(e,t){return{key:e,type:t}}w.getContextEntry=u1;function Jr(e,t,r,n){for(var a=e.length,i=Array(a+1),o=0;o<
a;o++)i[o]=e[o];return i[a]={key:t,type:r,actual:n},i}w.appendContext=Jr;function ga(e,t){for(var r=t.length,n=0;n<r;n++)
e.push(t[n])}var ma=Object.prototype.hasOwnProperty;function nu(e){return Object.keys(e).map(function(t){return"".concat(
t,": ").concat(e[t].name)}).join(", ")}function Ji(e){for(var t=0;t<e.length;t++)if(e[t].encode!==w.identity)return!1;return!0}
function Th(e){return"{ ".concat(nu(e)," }")}function kh(e){return"Partial<".concat(e,">")}function d1(e,t,r,n){n===void 0&&
(n="{ [K in ".concat(t.name,"]: ").concat(r.name," }"));for(var a=e.length,i={},o=0;o<a;o++)i[e[o]]=r;var s=(0,w.strict)(
i,n);return new cu(n,function(l){return s.is(l)},s.validate,s.encode,t,r)}function ou(e){var t;if(xh(e)){var r=e.value;if(w.
string.is(r))return t={},t[r]=null,t}else{if(y1(e))return e.keys;if(Ah(e)){var n=e.types.map(function(a){return ou(a)});
return n.some(el.is)?void 0:Object.assign.apply(Object,s1([{}],n,!1))}}}w.getDomainKeys=ou;function yh(e,t){for(var r=Object.
keys(e),n=r.length,a=!1,i={},o=0;o<n;o++){var s=r[o];t.is(s)?i[s]=e[s]:a=!0}return a?i:e}function p1(e,t,r){return r===void 0&&
(r="{ [K in ".concat(e.name,"]: ").concat(t.name," }")),new cu(r,function(n){return w.UnknownRecord.is(n)?Object.keys(n).
every(function(a){return!e.is(a)||t.is(n[a])}):bh(t)&&Array.isArray(n)},function(n,a){if(w.UnknownRecord.is(n)){for(var i={},
o=[],s=Object.keys(n),l=s.length,c=!1,u=0;u<l;u++){var d=s[u],f=n[d],h=e.validate(d,Jr(a,d,e,d));if((0,ut.isLeft)(h))c=!0;else{
var y=h.right;c=c||y!==d,d=y;var b=t.validate(f,Jr(a,d,t,f));if((0,ut.isLeft)(b))ga(o,b.left);else{var T=b.right;c=c||T!==
f,i[d]=T}}}return o.length>0?(0,w.failures)(o):(0,w.success)(c?i:n)}return bh(t)&&Array.isArray(n)?(0,w.success)(n):(0,w.
failure)(n,a)},e.encode===w.identity&&t.encode===w.identity?function(n){return yh(n,e)}:function(n){for(var a={},i=Object.
keys(yh(n,e)),o=i.length,s=0;s<o;s++){var l=i[s];a[String(e.encode(l))]=t.encode(n[l])}return a},e,t)}function Sh(e){return"\
("+e.map(function(t){return t.name}).join(" | ")+")"}function au(e,t){for(var r=!0,n=!0,a=!w.UnknownRecord.is(e),i=0,o=t;i<
o.length;i++){var s=o[i];s!==e&&(r=!1),w.UnknownRecord.is(s)&&(n=!1)}if(r)return e;if(n)return t[t.length-1];for(var l={},
c=0,u=t;c<u.length;c++){var s=u[c];for(var d in s)(!ma.call(l,d)||a||s[d]!==e[d])&&(l[d]=s[d])}return l}w.mergeAll=au;function iu(e){
switch(e._tag){case"RefinementType":case"ReadonlyType":return iu(e.type);case"InterfaceType":case"StrictType":case"Parti\
alType":return e.props;case"IntersectionType":return e.types.reduce(function(t,r){return Object.assign(t,iu(r))},{})}}function vh(e,t){
for(var r=Object.getOwnPropertyNames(e),n=!1,a={},i=0;i<r.length;i++){var o=r[i];ma.call(t,o)?a[o]=e[o]:n=!0}return n?a:
e}function f1(e){return _h(e)?"{| ".concat(nu(e.props)," |}"):v1(e)?kh("{| ".concat(nu(e.props)," |}")):"Exact<".concat(
e.name,">")}function h1(e){return e.length>0}w.emptyTags={};function Eh(e,t){for(var r=[],n=0,a=e;n<a.length;n++){var i=a[n];
t.indexOf(i)!==-1&&r.push(i)}return r}function m1(e,t){if(e===w.emptyTags)return t;if(t===w.emptyTags)return e;var r=Object.
assign({},e);for(var n in t)if(ma.call(e,n)){var a=Eh(e[n],t[n]);if(h1(a))r[n]=a;else{r=w.emptyTags;break}}else r[n]=t[n];
return r}function g1(e,t){if(e===w.emptyTags||t===w.emptyTags)return w.emptyTags;var r=w.emptyTags;for(var n in e)if(ma.
call(t,n)){var a=Eh(e[n],t[n]);a.length===0&&(r===w.emptyTags&&(r={}),r[n]=e[n].concat(t[n]))}return r}function bh(e){return e.
_tag==="AnyType"}function xh(e){return e._tag==="LiteralType"}function y1(e){return e._tag==="KeyofType"}function _h(e){
return e._tag==="InterfaceType"}function v1(e){return e._tag==="PartialType"}function b1(e){return e._tag==="StrictType"}
function w1(e){return e._tag==="ExactType"}function T1(e){return e._tag==="RefinementType"}function k1(e){return e._tag===
"IntersectionType"}function Ah(e){return e._tag==="UnionType"}function S1(e){return e._tag==="RecursiveType"}function E1(e){
return e._tag==="ReadonlyType"}var ru=[];function Wn(e){if(ru.indexOf(e)!==-1)return w.emptyTags;if(_h(e)||b1(e)){var t=w.
emptyTags;for(var r in e.props){var n=e.props[r];xh(n)&&(t===w.emptyTags&&(t={}),t[r]=[n.value])}return t}else{if(w1(e)||
T1(e)||E1(e))return Wn(e.type);if(k1(e))return e.types.reduce(function(i,o){return m1(i,Wn(o))},w.emptyTags);if(Ah(e))return e.
types.slice(1).reduce(function(i,o){return g1(i,Wn(o))},Wn(e.types[0]));if(S1(e)){ru.push(e);var a=Wn(e.type);return ru.
pop(),a}}return w.emptyTags}w.getTags=Wn;function $h(e){var t=Wn(e[0]),r=Object.keys(t),n=e.length,a=function(c){for(var u=t[c].
slice(),d=[t[c]],f=1;f<n;f++){var h=e[f],y=Wn(h),b=y[c];if(b===void 0)return"continue-keys";if(b.some(function(T){return u.
indexOf(T)!==-1}))return"continue-keys";u.push.apply(u,b),d.push(b)}return{value:[c,d]}};e:for(var i=0,o=r;i<o.length;i++){
var s=o[i],l=a(s);if(typeof l=="object")return l.value;switch(l){case"continue-keys":continue e}}}w.getIndex=$h;var Rh=function(e){
Ne(t,e);function t(){var r=e.call(this,"null",function(n){return n===null},function(n,a){return r.is(n)?(0,w.success)(n):
(0,w.failure)(n,a)},w.identity)||this;return r._tag="NullType",r}return t}(Pe);w.NullType=Rh;w.nullType=new Rh;w.null=w.
nullType;var Oh=function(e){Ne(t,e);function t(){var r=e.call(this,"undefined",function(n){return n===void 0},function(n,a){
return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="UndefinedType",r}return t}(Pe);w.UndefinedType=
Oh;var el=new Oh;w.undefined=el;var Ih=function(e){Ne(t,e);function t(){var r=e.call(this,"void",el.is,el.validate,w.identity)||
this;return r._tag="VoidType",r}return t}(Pe);w.VoidType=Ih;w.voidType=new Ih;w.void=w.voidType;var Ch=function(e){Ne(t,
e);function t(){var r=e.call(this,"unknown",function(n){return!0},w.success,w.identity)||this;return r._tag="UnknownType",
r}return t}(Pe);w.UnknownType=Ch;w.unknown=new Ch;var Nh=function(e){Ne(t,e);function t(){var r=e.call(this,"string",function(n){
return typeof n=="string"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="StringType",r}return t}(Pe);w.StringType=Nh;w.string=new Nh;var Ph=function(e){Ne(t,e);function t(){var r=e.call(this,
"number",function(n){return typeof n=="number"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||
this;return r._tag="NumberType",r}return t}(Pe);w.NumberType=Ph;w.number=new Ph;var Mh=function(e){Ne(t,e);function t(){
var r=e.call(this,"bigint",function(n){return typeof n=="bigint"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(
n,a)},w.identity)||this;return r._tag="BigIntType",r}return t}(Pe);w.BigIntType=Mh;w.bigint=new Mh;var Dh=function(e){Ne(
t,e);function t(){var r=e.call(this,"boolean",function(n){return typeof n=="boolean"},function(n,a){return r.is(n)?(0,w.
success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="BooleanType",r}return t}(Pe);w.BooleanType=Dh;w.boolean=
new Dh;var jh=function(e){Ne(t,e);function t(){var r=e.call(this,"UnknownArray",Array.isArray,function(n,a){return r.is(
n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="AnyArrayType",r}return t}(Pe);w.AnyArrayType=jh;
w.UnknownArray=new jh;w.Array=w.UnknownArray;var Lh=function(e){Ne(t,e);function t(){var r=e.call(this,"UnknownRecord",function(n){
return n!==null&&typeof n=="object"&&!Array.isArray(n)},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},
w.identity)||this;return r._tag="AnyDictionaryType",r}return t}(Pe);w.AnyDictionaryType=Lh;w.UnknownRecord=new Lh;var Uh=function(e){
Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.value=o,s._tag="LiteralType",s}return t}(Pe);w.LiteralType=
Uh;function x1(e,t){t===void 0&&(t=JSON.stringify(e));var r=function(n){return n===e};return new Uh(t,r,function(n,a){return r(
n)?(0,w.success)(e):(0,w.failure)(n,a)},w.identity,e)}w.literal=x1;var Fh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.keys=o,s._tag="KeyofType",s}return t}(Pe);w.KeyofType=Fh;function _1(e,t){t===void 0&&
(t=Object.keys(e).map(function(n){return JSON.stringify(n)}).join(" | "));var r=function(n){return w.string.is(n)&&ma.call(
e,n)};return new Fh(t,r,function(n,a){return r(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity,e)}w.keyof=_1;var Bh=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i)||this;return l.type=o,l.predicate=s,l._tag="RefinementType",l}
return t}(Pe);w.RefinementType=Bh;function Hh(e,t,r){return du(e,t,r)}w.brand=Hh;w.Int=Hh(w.number,function(e){return Number.
isInteger(e)},"Int");var su=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.runDefinition=
o,s._tag="RecursiveType",s}return t}(Pe);w.RecursiveType=su;Object.defineProperty(su.prototype,"type",{get:function(){return this.
runDefinition()},enumerable:!0,configurable:!0});function A1(e,t){var r,n=function(){return r||(r=t(a),r.name=e),r},a=new su(
e,function(i){return n().is(i)},function(i,o){return n().validate(i,o)},function(i){return n().encode(i)},n);return a}w.
recursion=A1;var Wh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="A\
rrayType",s}return t}(Pe);w.ArrayType=Wh;function qh(e,t){return t===void 0&&(t="Array<".concat(e.name,">")),new Wh(t,function(r){
return w.UnknownArray.is(r)&&r.every(e.is)},function(r,n){var a=w.UnknownArray.validate(r,n);if((0,ut.isLeft)(a))return a;
for(var i=a.right,o=i.length,s=i,l=[],c=0;c<o;c++){var u=i[c],d=e.validate(u,Jr(n,String(c),e,u));if((0,ut.isLeft)(d))ga(
l,d.left);else{var f=d.right;f!==u&&(s===i&&(s=i.slice()),s[c]=f)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},
e.encode===w.identity?w.identity:function(r){return r.map(e.encode)},e)}w.array=qh;var Vh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.props=o,s._tag="InterfaceType",s}return t}(Pe);w.InterfaceType=Vh;function lu(e,t){
t===void 0&&(t=Th(e));var r=Object.keys(e),n=r.map(function(i){return e[i]}),a=r.length;return new Vh(t,function(i){if(w.
UnknownRecord.is(i)){for(var o=0;o<a;o++){var s=r[o],l=i[s];if(l===void 0&&!ma.call(i,s)||!n[o].is(l))return!1}return!0}
return!1},function(i,o){var s=w.UnknownRecord.validate(i,o);if((0,ut.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<
a;d++){var f=r[d],h=c[f],y=n[d],b=y.validate(h,Jr(o,f,y,h));if((0,ut.isLeft)(b))ga(u,b.left);else{var T=b.right;(T!==h||
T===void 0&&!ma.call(c,f))&&(c===l&&(c=Ya({},l)),c[f]=T)}}return u.length>0?(0,w.failures)(u):(0,w.success)(c)},Ji(n)?w.
identity:function(i){for(var o=Ya({},i),s=0;s<a;s++){var l=r[s],c=n[s].encode;c!==w.identity&&(o[l]=c(i[l]))}return o},e)}
w.type=lu;w.interface=lu;var Yh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.props=
o,s._tag="PartialType",s}return t}(Pe);w.PartialType=Yh;function $1(e,t){t===void 0&&(t=kh(Th(e)));var r=Object.keys(e),
n=r.map(function(i){return e[i]}),a=r.length;return new Yh(t,function(i){if(w.UnknownRecord.is(i)){for(var o=0;o<a;o++){
var s=r[o],l=i[s];if(l!==void 0&&!e[s].is(l))return!1}return!0}return!1},function(i,o){var s=w.UnknownRecord.validate(i,
o);if((0,ut.isLeft)(s))return s;for(var l=s.right,c=l,u=[],d=0;d<a;d++){var f=r[d],h=c[f],y=e[f],b=y.validate(h,Jr(o,f,y,
h));if((0,ut.isLeft)(b))h!==void 0&&ga(u,b.left);else{var T=b.right;T!==h&&(c===l&&(c=Ya({},l)),c[f]=T)}}return u.length>
0?(0,w.failures)(u):(0,w.success)(c)},Ji(n)?w.identity:function(i){for(var o=Ya({},i),s=0;s<a;s++){var l=r[s],c=i[l];c!==
void 0&&(o[l]=n[s].encode(c))}return o},e)}w.partial=$1;var cu=function(e){Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(
this,r,n,a,i)||this;return l.domain=o,l.codomain=s,l._tag="DictionaryType",l}return t}(Pe);w.DictionaryType=cu;function zh(e,t,r){
var n=ou(e);return n?d1(Object.keys(n),e,t,r):p1(e,t,r)}w.record=zh;var uu=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.types=o,s._tag="UnionType",s}return t}(Pe);w.UnionType=uu;function Kh(e,t){t===void 0&&
(t=Sh(e));var r=$h(e);if(r!==void 0&&e.length>0){var n=r[0],a=r[1],i=a.length,o=function(s){for(var l=0;l<i;l++)if(a[l].
indexOf(s)!==-1)return l};return new tl(t,function(s){if(w.UnknownRecord.is(s)){var l=o(s[n]);return l!==void 0?e[l].is(
s):!1}return!1},function(s,l){var c=w.UnknownRecord.validate(s,l);if((0,ut.isLeft)(c))return c;var u=c.right,d=o(u[n]);if(d===
void 0)return(0,w.failure)(s,l);var f=e[d];return f.validate(u,Jr(l,String(d),f,u))},Ji(e)?w.identity:function(s){var l=o(
s[n]);if(l===void 0)throw new Error("no codec found to encode value in union codec ".concat(t));return e[l].encode(s)},e,
n)}else return new uu(t,function(s){return e.some(function(l){return l.is(s)})},function(s,l){for(var c=[],u=0;u<e.length;u++){
var d=e[u],f=d.validate(s,Jr(l,String(u),d,s));if((0,ut.isLeft)(f))ga(c,f.left);else return(0,w.success)(f.right)}return(0,w.
failures)(c)},Ji(e)?w.identity:function(s){for(var l=0,c=e;l<c.length;l++){var u=c[l];if(u.is(s))return u.encode(s)}throw new Error(
"no codec found to encode value in union type ".concat(t))},e)}w.union=Kh;var Gh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="IntersectionType",s}return t}(Pe);w.IntersectionType=Gh;function R1(e,t){
t===void 0&&(t="(".concat(e.map(function(n){return n.name}).join(" & "),")"));var r=e.length;return new Gh(t,function(n){
return e.every(function(a){return a.is(n)})},e.length===0?w.success:function(n,a){for(var i=[],o=[],s=0;s<r;s++){var l=e[s],
c=l.validate(n,Jr(a,String(s),l,n));(0,ut.isLeft)(c)?ga(o,c.left):i.push(c.right)}return o.length>0?(0,w.failures)(o):(0,w.
success)(au(n,i))},e.length===0?w.identity:function(n){return au(n,e.map(function(a){return a.encode(n)}))},e)}w.intersection=
R1;var Jh=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.types=o,s._tag="TupleType",
s}return t}(Pe);w.TupleType=Jh;function O1(e,t){t===void 0&&(t="[".concat(e.map(function(n){return n.name}).join(", "),"\
]"));var r=e.length;return new Jh(t,function(n){return w.UnknownArray.is(n)&&n.length===r&&e.every(function(a,i){return a.
is(n[i])})},function(n,a){var i=w.UnknownArray.validate(n,a);if((0,ut.isLeft)(i))return i;for(var o=i.right,s=o.length>r?
o.slice(0,r):o,l=[],c=0;c<r;c++){var u=o[c],d=e[c],f=d.validate(u,Jr(a,String(c),d,u));if((0,ut.isLeft)(f))ga(l,f.left);else{
var h=f.right;h!==u&&(s===o&&(s=o.slice()),s[c]=h)}}return l.length>0?(0,w.failures)(l):(0,w.success)(s)},Ji(e)?w.identity:
function(n){return e.map(function(a,i){return a.encode(n[i])})},e)}w.tuple=O1;var Zh=function(e){Ne(t,e);function t(r,n,a,i,o){
var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyType",s}return t}(Pe);w.ReadonlyType=Zh;function I1(e,t){
return t===void 0&&(t="Readonly<".concat(e.name,">")),new Zh(t,e.is,e.validate,e.encode,e)}w.readonly=I1;var Xh=function(e){
Ne(t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ReadonlyArrayType",s}return t}(Pe);
w.ReadonlyArrayType=Xh;function C1(e,t){t===void 0&&(t="ReadonlyArray<".concat(e.name,">"));var r=qh(e);return new Xh(t,
r.is,r.validate,r.encode,e)}w.readonlyArray=C1;var N1=function(e,t){return em(lu(e),t)};w.strict=N1;var Qh=function(e){Ne(
t,e);function t(r,n,a,i,o){var s=e.call(this,r,n,a,i)||this;return s.type=o,s._tag="ExactType",s}return t}(Pe);w.ExactType=
Qh;function em(e,t){t===void 0&&(t=f1(e));var r=iu(e);return new Qh(t,e.is,function(n,a){var i=w.UnknownRecord.validate(
n,a);if((0,ut.isLeft)(i))return i;var o=e.validate(n,a);return(0,ut.isLeft)(o)?o:(0,ut.right)(vh(o.right,r))},function(n){
return e.encode(vh(n,r))},e)}w.exact=em;var tm=function(e){Ne(t,e);function t(){var r=e.call(this,"Function",function(n){
return typeof n=="function"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r.
_tag="FunctionType",r}return t}(Pe);w.FunctionType=tm;w.Function=new tm;var rm=function(e){Ne(t,e);function t(){var r=e.
call(this,"never",function(n){return!1},function(n,a){return(0,w.failure)(n,a)},function(){throw new Error("cannot encod\
e never")})||this;return r._tag="NeverType",r}return t}(Pe);w.NeverType=rm;w.never=new rm;var nm=function(e){Ne(t,e);function t(){
var r=e.call(this,"any",function(n){return!0},w.success,w.identity)||this;return r._tag="AnyType",r}return t}(Pe);w.AnyType=
nm;w.any=new nm;function du(e,t,r){return r===void 0&&(r="(".concat(e.name," | ").concat(wh(t),")")),new Bh(r,function(n){
return e.is(n)&&t(n)},function(n,a){var i=e.validate(n,a);if((0,ut.isLeft)(i))return i;var o=i.right;return t(o)?(0,w.success)(
o):(0,w.failure)(o,a)},e.encode,e,t)}w.refinement=du;w.Integer=du(w.number,Number.isInteger,"Integer");var tl=function(e){
Ne(t,e);function t(r,n,a,i,o,s){var l=e.call(this,r,n,a,i,o)||this;return l.tag=s,l}return t}(uu);w.TaggedUnionType=tl;var P1=function(e,t,r){
r===void 0&&(r=Sh(t));var n=Kh(t,r);return n instanceof tl?n:(console.warn("[io-ts] Cannot build a tagged union for ".concat(
r,", returning a de-optimized union")),new tl(r,n.is,n.validate,n.encode,t,e))};w.taggedUnion=P1;var M1=function(e,t){return{
value:e,context:t}};w.getValidationError=M1;var D1=function(e){return[{key:"",type:e}]};w.getDefaultContext=D1;w.Dictionary=
w.UnknownRecord;var am=function(e){Ne(t,e);function t(){var r=e.call(this,"object",function(n){return n!==null&&typeof n==
"object"},function(n,a){return r.is(n)?(0,w.success)(n):(0,w.failure)(n,a)},w.identity)||this;return r._tag="ObjectType",
r}return t}(Pe);w.ObjectType=am;w.object=new am;w.dictionary=zh;var j1=function(e){Ne(t,e);function t(r,n,a,i,o){var s=e.
call(this,r,n,a,i)||this;return s.props=o,s._tag="StrictType",s}return t}(Pe);w.StrictType=j1;function L1(e){return e}w.
clean=L1;function U1(e){return function(){return e}}w.alias=U1});var cm=qe((cL,lm)=>{"use strict";var it=class e extends Array{constructor(t,r){if(super(t),this.sign=r,Object.setPrototypeOf(
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
let y=[],b=[],T=!1;do{let k=0,S=0;for(;;){let _;if(o-48>>>0<f)_=o-48;else if((32|o)-97>>>0<h)_=(32|o)-87;else{T=!0;break}
if(S+=l,k=k<<l|_,++i===a){T=!0;break}if(o=t.charCodeAt(i),30<S+l)break}y.push(k),b.push(S)}while(!T);e.__fillFromParts(d,
y,b)}else{d.__initializeDigits();let y=!1,b=0;do{let T=0,k=1;for(;;){let _;if(o-48>>>0<f)_=o-48;else if((32|o)-97>>>0<h)
_=(32|o)-87;else{y=!0;break}let I=k*r;if(1073741823<I)break;if(k=I,T=T*r+_,b++,++i===a){y=!0;break}o=t.charCodeAt(i)}c=30*
e.__kBitsPerCharTableMultiplier-1;let S=0|(l*b+c>>>e.__kBitsPerCharTableShift)/30;d.__inplaceMultiplyAdd(k,T,S)}while(!y)}
if(i!==a){if(!e.__isWhitespace(o))return null;for(i++;i<a;i++)if(o=t.charCodeAt(i),!e.__isWhitespace(o))return null}return d.
sign=n==-1,d.__trim()}static __fillFromParts(t,r,n){let a=0,i=0,o=0;for(let s=r.length-1;0<=s;s--){let l=r[s],c=n[s];i|=
l<<o,o+=c,o===30?(t.__setDigit(a++,i),o=0,i=0):30<o&&(t.__setDigit(a++,1073741823&i),o-=30,i=l>>>c-o)}if(i!==0){if(a>=t.
length)throw new Error("implementation bug");t.__setDigit(a++,i)}for(;a<t.length;a++)t.__setDigit(a,0)}static __toStringBasePowerOfTwo(t,r){
let n=t.length,a=r-1;a=(85&a>>>1)+(85&a),a=(51&a>>>2)+(51&a),a=(15&a>>>4)+(15&a);let i=a,o=r-1,s=t.__digit(n-1),l=e.__clz30(
s),c=0|(30*n-l+i-1)/i;if(t.sign&&c++,268435456<c)throw new Error("string too long");let u=Array(c),d=c-1,f=0,h=0;for(let b=0;b<
n-1;b++){let T=t.__digit(b),k=(f|T<<h)&o;u[d--]=e.__kConversionChars[k];let S=i-h;for(f=T>>>S,h=30-S;h>=i;)u[d--]=e.__kConversionChars[f&
o],f>>>=i,h-=i}let y=(f|s<<h)&o;for(u[d--]=e.__kConversionChars[y],f=s>>>i-h;f!==0;)u[d--]=e.__kConversionChars[f&o],f>>>=
i;if(t.sign&&(u[d--]="-"),d!=-1)throw new Error("implementation bug");return u.join("")}static __toStringGeneric(t,r,n){
let a=t.length;if(a===0)return"";if(a===1){let b=t.__unsignedDigit(0).toString(r);return n===!1&&t.sign&&(b="-"+b),b}let i=30*
a-e.__clz30(t.__digit(a-1)),o=e.__kMaxBitsPerChar[r],s=o-1,l=i*e.__kBitsPerCharTableMultiplier;l+=s-1,l=0|l/s;let c=l+1>>
1,u=e.exponentiate(e.__oneDigit(r,!1),e.__oneDigit(c,!1)),d,f,h=u.__unsignedDigit(0);if(u.length===1&&32767>=h){d=new e(
t.length,!1),d.__initializeDigits();let b=0;for(let T=2*t.length-1;0<=T;T--){let k=b<<15|t.__halfDigit(T);d.__setHalfDigit(
T,0|k/h),b=0|k%h}f=b.toString(r)}else{let b=e.__absoluteDivLarge(t,u,!0,!0);d=b.quotient;let T=b.remainder.__trim();f=e.
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
h=20,y=29-l;if(y!==(0|(c-1)%30))throw new Error("implementation bug");let b,T=0;if(20>y){let k=h-y;T=k+32,b=d>>>k,d=d<<32-
k|f>>>k,f<<=32-k}else if(y===20)T=32,b=d,d=f,f=0;else{let k=y-h;T=32-k,b=d<<k|f>>>32-k,d=f<<k,f=0}if(s>>>=0,b>>>=0,s>b)return e.
__absoluteGreater(n);if(s<b)return e.__absoluteLess(n);for(let k=o-2;0<=k;k--){0<T?(T-=30,b=d>>>2,d=d<<30|f>>>2,f<<=30):
b=0;let S=t.__unsignedDigit(k);if(S>b)return e.__absoluteGreater(n);if(S<b)return e.__absoluteLess(n)}if(d!==0||f!==0){if(T===
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
d,h=d>>>15,y=e.__imul(f,i),b=e.__imul(f,o),T=e.__imul(h,i),k=e.__imul(h,o);c+=l+y+s,s=c>>>30,c&=1073741823,c+=((32767&b)<<
15)+((32767&T)<<15),s+=c>>>30,l=k+(b>>>15)+(T>>>15),n.__setDigit(a,1073741823&c)}for(;s!=0||l!==0;a++){let c=n.__digit(a);
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
i-1),h=0;for(let y,b=s;0<=b;b--){y=32767;let T=d.__halfDigit(b+i);if(T!==f){let S=(T<<15|d.__halfDigit(b+i-1))>>>0;y=0|S/
f;let _=0|S%f,I=r.__halfDigit(i-2),N=d.__halfDigit(b+i-2);for(;e.__imul(y,I)>>>0>(_<<16|N)>>>0&&(y--,_+=f,!(32767<_)););}
e.__internalMultiplyAdd(r,y,0,o,c);let k=d.__inplaceSub(c,b,i+1);k!==0&&(k=d.__inplaceAdd(r,b,i),d.__setHalfDigit(b+i,32767&
d.__halfDigit(b+i)+k),y--),n&&(1&b?h=y<<15:l.__setDigit(b>>>1,h|y))}if(a)return d.__inplaceRightShift(u),n?{quotient:l,remainder:d}:
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
return(1073741823&t)===t}};it.__kMaxLength=33554432,it.__kMaxLengthBits=it.__kMaxLength<<5,it.__kMaxBitsPerChar=[0,0,32,
51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,
165,166],it.__kBitsPerCharTableShift=5,it.__kBitsPerCharTableMultiplier=1<<it.__kBitsPerCharTableShift,it.__kConversionChars=
["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"],it.__kBitConversionBuffer=new ArrayBuffer(8),it.__kBitConversionDouble=new Float64Array(it.__kBitConversionBuffer),
it.__kBitConversionInts=new Int32Array(it.__kBitConversionBuffer),it.__kBitConversionIntHigh=it.__detectBigEndian()?0:1,
it.__kBitConversionIntLow=it.__detectBigEndian()?1:0,it.__clz30=Math.clz32?function(e){return Math.clz32(e)-2}:function(e){
return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},it.__imul=Math.imul||function(e,t){return 0|e*t},lm.exports=it});var Yg=qe((hL,Vg)=>{"use strict";var qg="ArrowFunctionExpression",FE={name:"arrow",init(e){e.addBinaryOp("=>",.1,!0),e.hooks.
add("gobble-expression",function(n){if(this.gobbleSpaces(),this.code===e.OPAREN_CODE){let a=this.index;if(this.index++,this.
gobbleSpaces(),this.code===e.CPAREN_CODE){this.index++;let i=this.gobbleBinaryOp();if(i==="=>"){let o=this.gobbleBinaryExpression();
o||this.throwError("Expected expression after "+i),n.node={type:qg,params:null,body:o};return}}this.index=a}}),e.hooks.add(
"after-expression",function(n){t(n.node)});function t(r){r&&(Object.values(r).forEach(n=>{n&&typeof n=="object"&&t(n)}),
r.operator==="=>"&&(r.type=qg,r.params=r.left?[r.left]:null,r.body=r.right,r.params&&r.params[0].type===e.SEQUENCE_EXP&&
(r.params=r.params[0].expressions),delete r.left,delete r.right,delete r.operator))}}};Vg.exports=FE});var Gg=qe((mL,Kg)=>{"use strict";var BE="ObjectExpression",zg="Property",HE={name:"object",init(e){function t(r){if(this.
code===123){this.index++;let n=[];for(;!isNaN(this.code);){if(this.gobbleSpaces(),this.code===125){this.index++,r.node=this.
gobbleTokenProperty({type:BE,properties:n});return}let a=this.gobbleExpression();if(!a)break;if(this.gobbleSpaces(),a.type===
e.IDENTIFIER&&(this.code===e.COMMA_CODE||this.code===125))n.push({type:zg,computed:!1,key:a,value:a,shorthand:!0});else if(this.
code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();i||this.throwError("unexpected object property");let o=a.
type===e.ARRAY_EXP;n.push({type:zg,computed:o,key:o?a.elements[0]:a,value:i,shorthand:!1}),this.gobbleSpaces()}else a&&n.
push(a);this.code===e.COMMA_CODE&&this.index++}this.throwError("missing }")}}e.hooks.add("gobble-token",t)}};Kg.exports=
HE});var Zg=qe((gL,Jg)=>{"use strict";var WE={name:"regex",init(e){e.hooks.add("gobble-token",function(r){if(this.code===47){
let n=++this.index,a=!1;for(;this.index<this.expr.length;){if(this.code===47&&!a){let i=this.expr.slice(n,this.index),o="";
for(;++this.index<this.expr.length;){let l=this.code;if(l>=97&&l<=122||l>=65&&l<=90||l>=48&&l<=57)o+=this.char;else break}
let s;try{s=new RegExp(i,o)}catch(l){this.throwError(l.message)}return r.node={type:e.LITERAL,value:s,raw:this.expr.slice(
n-1,this.index)},r.node=this.gobbleTokenProperty(r.node),r.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&
(a=!1),this.index+=this.code===92?2:1}this.throwError("Unclosed Regex")}})}};Jg.exports=WE});var Qg=qe((yL,Xg)=>{"use strict";var qE={name:"jsepSpread",init(e){e.hooks.add("gobble-token",function(r){[0,1,2].every(
n=>this.expr.charCodeAt(this.index+n)===e.PERIOD_CODE)&&(this.index+=3,r.node={type:"SpreadElement",argument:this.gobbleExpression()})})}};
Xg.exports=qE});var ty=qe((vL,ey)=>{"use strict";var VE="TaggedTemplateExpression",YE="TemplateLiteral",zE="TemplateElement",KE={name:"j\
sepTemplateLiteral",init(e){function t(r,n=!0){if(this.code===96){let a={type:YE,quasis:[],expressions:[]},i="",o="",s=!1,
l=this.expr.length,c=()=>a.quasis.push({type:zE,value:{raw:o,cooked:i},tail:s});for(;this.index<l;){let u=this.expr.charAt(
++this.index);if(u==="`")return this.index+=1,s=!0,c(),r.node=a,n&&(r.node=this.gobbleTokenProperty(r.node)),r.node;if(u===
"$"&&this.expr.charAt(this.index+1)==="{")this.index+=2,c(),o="",i="",a.expressions.push(...this.gobbleExpressions(125)),
this.code!==125&&this.throwError("unclosed ${");else if(u==="\\")switch(o+=u,u=this.expr.charAt(++this.index),o+=u,u){case"\
n":i+=`
`;break;case"r":i+="\r";break;case"t":i+="	";break;case"b":i+="\b";break;case"f":i+="\f";break;case"v":i+="\v";break;default:
i+=u}else i+=u,o+=u}this.throwError("Unclosed `")}}e.hooks.add("gobble-token",t),e.hooks.add("after-token",function(n){if((n.
node.type===e.IDENTIFIER||n.node.type===e.MEMBER_EXP)&&this.code===96)return n.node={type:VE,tag:n.node,quasi:t.bind(this)(
n,!1)},n.node=this.gobbleTokenProperty(n.node),n.node})}};ey.exports=KE});var gy=qe(he=>{"use strict";var Rd=Symbol.for("react.transitional.element"),dx=Symbol.for("react.portal"),px=Symbol.for(
"react.fragment"),fx=Symbol.for("react.strict_mode"),hx=Symbol.for("react.profiler"),mx=Symbol.for("react.consumer"),gx=Symbol.
for("react.context"),yx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),uy=Symbol.
for("react.lazy"),iy=Symbol.iterator;function wx(e){return e===null||typeof e!="object"?null:(e=iy&&e[iy]||e["@@iterator"],
typeof e=="function"?e:null)}var dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},
enqueueSetState:function(){}},py=Object.assign,fy={};function mi(e,t,r){this.props=e,this.context=t,this.refs=fy,this.updater=
r||dy}mi.prototype.isReactComponent={};mi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&
e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variabl\
es.");this.updater.enqueueSetState(this,e,t,"setState")};mi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(
this,e,"forceUpdate")};function hy(){}hy.prototype=mi.prototype;function Od(e,t,r){this.props=e,this.context=t,this.refs=
fy,this.updater=r||dy}var Id=Od.prototype=new hy;Id.constructor=Od;py(Id,mi.prototype);Id.isPureReactComponent=!0;var oy=Array.
isArray,Ze={H:null,A:null,T:null,S:null,V:null},my=Object.prototype.hasOwnProperty;function Cd(e,t,r,n,a,i){return r=i.ref,
{$$typeof:Rd,type:e,key:t,ref:r!==void 0?r:null,props:i}}function Tx(e,t){return Cd(e.type,t,void 0,void 0,void 0,e.props)}
function Nd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rd}function kx(e){var t={"=":"=0",":":"=2"};return"$"+e.
replace(/[=:]/g,function(r){return t[r]})}var sy=/\/+/g;function $d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?
kx(""+e.key):t.toString(36)}function ly(){}function Sx(e){switch(e.status){case"fulfilled":return e.value;case"rejected":
throw e.reason;default:switch(typeof e.status=="string"?e.then(ly,ly):(e.status="pending",e.then(function(t){e.status===
"pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"\
fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function hi(e,t,r,n,a){var i=typeof e;(i==="undefined"||
i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"\
object":switch(e.$$typeof){case Rd:case dx:o=!0;break;case uy:return o=e._init,hi(o(e._payload),t,r,n,a)}}if(o)return a=
a(e),o=n===""?"."+$d(e,0):n,oy(a)?(r="",o!=null&&(r=o.replace(sy,"$&/")+"/"),hi(a,t,r,"",function(c){return c})):a!=null&&
(Nd(a)&&(a=Tx(a,r+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(sy,"$&/")+"/")+o)),t.push(a)),1;o=0;var s=n===""?
".":n+":";if(oy(e))for(var l=0;l<e.length;l++)n=e[l],i=s+$d(n,l),o+=hi(n,t,r,i,a);else if(l=wx(e),typeof l=="function")for(e=
l.call(e),l=0;!(n=e.next()).done;)n=n.value,i=s+$d(n,l++),o+=hi(n,t,r,i,a);else if(i==="object"){if(typeof e.then=="func\
tion")return hi(Sx(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object O\
bject]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use a\
n array instead.")}return o}function Ll(e,t,r){if(e==null)return e;var n=[],a=0;return hi(e,n,"","",function(i){return t.
call(r,i,a++)}),n}function Ex(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===
-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&
(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var cy=typeof reportError=="function"?
reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("e\
rror",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(
e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.
emit("uncaughtException",e);return}console.error(e)};function xx(){}he.Children={map:Ll,forEach:function(e,t,r){Ll(e,function(){
t.apply(this,arguments)},r)},count:function(e){var t=0;return Ll(e,function(){t++}),t},toArray:function(e){return Ll(e,function(t){
return t})||[]},only:function(e){if(!Nd(e))throw Error("React.Children.only expected to receive a single React element c\
hild.");return e}};he.Component=mi;he.Fragment=px;he.Profiler=hx;he.PureComponent=Od;he.StrictMode=fx;he.Suspense=vx;he.
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ze;he.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ze.
H.useMemoCache(e)}};he.cache=function(e){return function(){return e.apply(null,arguments)}};he.cloneElement=function(e,t,r){
if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=py({},e.props),a=e.key,i=void 0;
if(t!=null)for(o in t.ref!==void 0&&(i=void 0),t.key!==void 0&&(a=""+t.key),t)!my.call(t,o)||o==="key"||o==="__self"||o===
"__source"||o==="ref"&&t.ref===void 0||(n[o]=t[o]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var s=Array(
o),l=0;l<o;l++)s[l]=arguments[l+2];n.children=s}return Cd(e.type,a,void 0,void 0,i,n)};he.createContext=function(e){return e=
{$$typeof:gx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:mx,
_context:e},e};he.createElement=function(e,t,r){var n,a={},i=null;if(t!=null)for(n in t.key!==void 0&&(i=""+t.key),t)my.
call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<
o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===
void 0&&(a[n]=o[n]);return Cd(e,i,void 0,void 0,null,a)};he.createRef=function(){return{current:null}};he.forwardRef=function(e){
return{$$typeof:yx,render:e}};he.isValidElement=Nd;he.lazy=function(e){return{$$typeof:uy,_payload:{_status:-1,_result:e},
_init:Ex}};he.memo=function(e,t){return{$$typeof:bx,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Ze.
T,r={};Ze.T=r;try{var n=e(),a=Ze.S;a!==null&&a(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(xx,cy)}catch(i){
cy(i)}finally{Ze.T=t}};he.unstable_useCacheRefresh=function(){return Ze.H.useCacheRefresh()};he.use=function(e){return Ze.
H.use(e)};he.useActionState=function(e,t,r){return Ze.H.useActionState(e,t,r)};he.useCallback=function(e,t){return Ze.H.
useCallback(e,t)};he.useContext=function(e){return Ze.H.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=
function(e,t){return Ze.H.useDeferredValue(e,t)};he.useEffect=function(e,t,r){var n=Ze.H;if(typeof r=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)};he.useId=function(){return Ze.
H.useId()};he.useImperativeHandle=function(e,t,r){return Ze.H.useImperativeHandle(e,t,r)};he.useInsertionEffect=function(e,t){
return Ze.H.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return Ze.H.useLayoutEffect(e,t)};he.useMemo=function(e,t){
return Ze.H.useMemo(e,t)};he.useOptimistic=function(e,t){return Ze.H.useOptimistic(e,t)};he.useReducer=function(e,t,r){return Ze.
H.useReducer(e,t,r)};he.useRef=function(e){return Ze.H.useRef(e)};he.useState=function(e){return Ze.H.useState(e)};he.useSyncExternalStore=
function(e,t,r){return Ze.H.useSyncExternalStore(e,t,r)};he.useTransition=function(){return Ze.H.useTransition()};he.version=
"19.1.0"});var yy=qe((pe,Ul)=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(v,A){Object.defineProperty(n.
prototype,v,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",A[0],A[1])}})}function t(v){
return v===null||typeof v!="object"?null:(v=fn&&v[fn]||v["@@iterator"],typeof v=="function"?v:null)}function r(v,A){v=(v=
v.constructor)&&(v.displayName||v.name)||"ReactClass";var L=v+"."+A;Wa[L]||(console.error("Can't call %s on a component \
that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.stat\
e` directly or define a `state = {};` class property with the desired state in the %s component.",A,v),Wa[L]=!0)}function n(v,A,L){
this.props=v,this.context=A,this.refs=Wc,this.updater=L||Ws}function a(){}function i(v,A,L){this.props=v,this.context=A,
this.refs=Wc,this.updater=L||Ws}function o(v){return""+v}function s(v){try{o(v);var A=!1}catch{A=!0}if(A){A=console;var L=A.
error,B=typeof Symbol=="function"&&Symbol.toStringTag&&v[Symbol.toStringTag]||v.constructor.name||"Object";return L.call(
A,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",B),o(v)}}function l(v){
if(v==null)return null;if(typeof v=="function")return v.$$typeof===xT?null:v.displayName||v.name||null;if(typeof v=="str\
ing")return v;switch(v){case Un:return"Fragment";case D:return"Profiler";case da:return"StrictMode";case Hr:return"Suspe\
nse";case Rr:return"SuspenseList";case wt:return"Activity"}if(typeof v=="object")switch(typeof v.tag=="number"&&console.
error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
v.$$typeof){case Ot:return"Portal";case We:return(v.displayName||"Context")+".Provider";case de:return(v._context.displayName||
"Context")+".Consumer";case ht:var A=v.render;return v=v.displayName,v||(v=A.displayName||A.name||"",v=v!==""?"ForwardRe\
f("+v+")":"ForwardRef"),v;case pa:return A=v.displayName||null,A!==null?A:l(v.type)||"Memo";case Fn:A=v._payload,v=v._init;
try{return l(v(A))}catch{}}return null}function c(v){if(v===Un)return"<>";if(typeof v=="object"&&v!==null&&v.$$typeof===
Fn)return"<...>";try{var A=l(v);return A?"<"+A+">":"<...>"}catch{return"<...>"}}function u(){var v=Ee.A;return v===null?
null:v.getOwner()}function d(){return Error("react-stack-top-frame")}function f(v){if(Vs.call(v,"key")){var A=Object.getOwnPropertyDescriptor(
v,"key").get;if(A&&A.isReactWarning)return!1}return v.key!==void 0}function h(v,A){function L(){Lf||(Lf=!0,console.error(
"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same \
value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",A))}L.
isReactWarning=!0,Object.defineProperty(v,"key",{get:L,configurable:!0})}function y(){var v=l(this.type);return Ff[v]||(Ff[v]=
!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the \
JSX Element type in a future release.")),v=this.props.ref,v!==void 0?v:null}function b(v,A,L,B,Z,xe,ve,je){return L=xe.ref,
v={$$typeof:jt,type:v,key:A,props:xe,_owner:Z},(L!==void 0?L:null)!==null?Object.defineProperty(v,"ref",{enumerable:!1,get:y}):
Object.defineProperty(v,"ref",{enumerable:!1,value:null}),v._store={},Object.defineProperty(v._store,"validated",{configurable:!1,
enumerable:!1,writable:!0,value:0}),Object.defineProperty(v,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),
Object.defineProperty(v,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ve}),Object.defineProperty(v,"_de\
bugTask",{configurable:!1,enumerable:!1,writable:!0,value:je}),Object.freeze&&(Object.freeze(v.props),Object.freeze(v)),
v}function T(v,A){return A=b(v.type,A,void 0,void 0,v._owner,v.props,v._debugStack,v._debugTask),v._store&&(A._store.validated=
v._store.validated),A}function k(v){return typeof v=="object"&&v!==null&&v.$$typeof===jt}function S(v){var A={"=":"=0","\
:":"=2"};return"$"+v.replace(/[=:]/g,function(L){return A[L]})}function _(v,A){return typeof v=="object"&&v!==null&&v.key!=
null?(s(v.key),S(""+v.key)):A.toString(36)}function I(){}function N(v){switch(v.status){case"fulfilled":return v.value;case"\
rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(I,I):(v.status="pending",v.then(function(A){v.status===
"pending"&&(v.status="fulfilled",v.value=A)},function(A){v.status==="pending"&&(v.status="rejected",v.reason=A)})),v.status){case"\
fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function W(v,A,L,B,Z){var xe=typeof v;(xe==="undefined"||
xe==="boolean")&&(v=null);var ve=!1;if(v===null)ve=!0;else switch(xe){case"bigint":case"string":case"number":ve=!0;break;case"\
object":switch(v.$$typeof){case jt:case Ot:ve=!0;break;case Fn:return ve=v._init,W(ve(v._payload),A,L,B,Z)}}if(ve){ve=v,
Z=Z(ve);var je=B===""?"."+_(ve,0):B;return Df(Z)?(L="",je!=null&&(L=je.replace(Hf,"$&/")+"/"),W(Z,A,L,"",function(Bn){return Bn})):
Z!=null&&(k(Z)&&(Z.key!=null&&(ve&&ve.key===Z.key||s(Z.key)),L=T(Z,L+(Z.key==null||ve&&ve.key===Z.key?"":(""+Z.key).replace(
Hf,"$&/")+"/")+je),B!==""&&ve!=null&&k(ve)&&ve.key==null&&ve._store&&!ve._store.validated&&(L._store.validated=2),Z=L),A.
push(Z)),1}if(ve=0,je=B===""?".":B+":",Df(v))for(var Te=0;Te<v.length;Te++)B=v[Te],xe=je+_(B,Te),ve+=W(B,A,L,xe,Z);else if(Te=
t(v),typeof Te=="function")for(Te===v.entries&&(Bf||console.warn("Using Maps as children is not supported. Use an array \
of keyed ReactElements instead."),Bf=!0),v=Te.call(v),Te=0;!(B=v.next()).done;)B=B.value,xe=je+_(B,Te++),ve+=W(B,A,L,xe,
Z);else if(xe==="object"){if(typeof v.then=="function")return W(N(v),A,L,B,Z);throw A=String(v),Error("Objects are not v\
alid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":A)+"). If you \
meant to render a collection of children, use an array instead.")}return ve}function V(v,A,L){if(v==null)return v;var B=[],
Z=0;return W(v,B,"","",function(xe){return A.call(L,xe,Z++)}),B}function Q(v){if(v._status===-1){var A=v._result;A=A(),A.
then(function(L){(v._status===0||v._status===-1)&&(v._status=1,v._result=L)},function(L){(v._status===0||v._status===-1)&&
(v._status=2,v._result=L)}),v._status===-1&&(v._status=0,v._result=A)}if(v._status===1)return A=v._result,A===void 0&&console.
error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,A),"default"in A||console.error(`lazy: Expected the result of \
a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,A),A.default;throw v._result}function F(){var v=Ee.H;return v===
null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could \
happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),v}function ye(){}function G(v){
if(Ys===null)try{var A=("require"+Math.random()).slice(0,7);Ys=(Ul&&Ul[A]).call(Ul,"timers").setImmediate}catch{Ys=function(B){
qf===!1&&(qf=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so\
 enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/iss\
ues if you encounter this warning."));var Z=new MessageChannel;Z.port1.onmessage=B,Z.port2.postMessage(void 0)}}return Ys(
v)}function ue(v){return 1<v.length&&typeof AggregateError=="function"?new AggregateError(v):v[0]}function Fe(v,A){A!==zs-
1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls\
 before making a new one. "),zs=A}function Se(v,A,L){var B=Ee.actQueue;if(B!==null)if(B.length!==0)try{ze(B),G(function(){
return Se(v,A,L)});return}catch(Z){Ee.thrownErrors.push(Z)}else Ee.actQueue=null;0<Ee.thrownErrors.length?(B=ue(Ee.thrownErrors),
Ee.thrownErrors.length=0,L(B)):A(v)}function ze(v){if(!qc){qc=!0;var A=0;try{for(;A<v.length;A++){var L=v[A];do{Ee.didUsePromise=
!1;var B=L(!1);if(B!==null){if(Ee.didUsePromise){v[A]=L,v.splice(0,A);return}L=B}else break}while(!0)}v.length=0}catch(Z){
v.splice(0,A+1),Ee.thrownErrors.push(Z)}finally{qc=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var jt=Symbol.
for("react.transitional.element"),Ot=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),da=Symbol.for("react.str\
ict_mode"),D=Symbol.for("react.profiler");Symbol.for("react.provider");var de=Symbol.for("react.consumer"),We=Symbol.for(
"react.context"),ht=Symbol.for("react.forward_ref"),Hr=Symbol.for("react.suspense"),Rr=Symbol.for("react.suspense_list"),
pa=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),fn=Symbol.iterator,Wa={},Ws={isMounted:function(){
return!1},enqueueForceUpdate:function(v){r(v,"forceUpdate")},enqueueReplaceState:function(v){r(v,"replaceState")},enqueueSetState:function(v){
r(v,"setState")}},Mf=Object.assign,Wc={};Object.freeze(Wc),n.prototype.isReactComponent={},n.prototype.setState=function(v,A){
if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a func\
tion which returns an object of state variables.");this.updater.enqueueSetState(this,v,A,"setState")},n.prototype.forceUpdate=
function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};var Or={isMounted:["isMounted","Instead, make sure to\
 clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceSt\
ate","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},qs;for(qs in Or)
Or.hasOwnProperty(qs)&&e(qs,Or[qs]);a.prototype=n.prototype,Or=i.prototype=new a,Or.constructor=i,Mf(Or,n.prototype),Or.
isPureReactComponent=!0;var Df=Array.isArray,xT=Symbol.for("react.client.reference"),Ee={H:null,A:null,T:null,S:null,V:null,
actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},
Vs=Object.prototype.hasOwnProperty,jf=console.createTask?console.createTask:function(){return null};Or={"react-stack-bot\
tom-frame":function(v){return v()}};var Lf,Uf,Ff={},_T=Or["react-stack-bottom-frame"].bind(Or,d)(),AT=jf(c(d)),Bf=!1,Hf=/\/+/g,
Wf=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="functio\
n"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message==
"string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.
emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},qf=!1,Ys=null,zs=0,Ks=!1,qc=!1,Vf=typeof queueMicrotask==
"function"?function(v){queueMicrotask(function(){return queueMicrotask(v)})}:G;Or=Object.freeze({__proto__:null,c:function(v){
return F().useMemoCache(v)}}),pe.Children={map:V,forEach:function(v,A,L){V(v,function(){A.apply(this,arguments)},L)},count:function(v){
var A=0;return V(v,function(){A++}),A},toArray:function(v){return V(v,function(A){return A})||[]},only:function(v){if(!k(
v))throw Error("React.Children.only expected to receive a single React element child.");return v}},pe.Component=n,pe.Fragment=
Un,pe.Profiler=D,pe.PureComponent=i,pe.StrictMode=da,pe.Suspense=Hr,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=
Ee,pe.__COMPILER_RUNTIME=Or,pe.act=function(v){var A=Ee.actQueue,L=zs;zs++;var B=Ee.actQueue=A!==null?A:[],Z=!1;try{var xe=v()}catch(Te){
Ee.thrownErrors.push(Te)}if(0<Ee.thrownErrors.length)throw Fe(A,L),v=ue(Ee.thrownErrors),Ee.thrownErrors.length=0,v;if(xe!==
null&&typeof xe=="object"&&typeof xe.then=="function"){var ve=xe;return Vf(function(){Z||Ks||(Ks=!0,console.error("You c\
alled act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act cal\
ls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Te,Bn){Z=!0,ve.then(function(qa){
if(Fe(A,L),L===0){try{ze(B),G(function(){return Se(qa,Te,Bn)})}catch(RT){Ee.thrownErrors.push(RT)}if(0<Ee.thrownErrors.length){
var $T=ue(Ee.thrownErrors);Ee.thrownErrors.length=0,Bn($T)}}else Te(qa)},function(qa){Fe(A,L),0<Ee.thrownErrors.length&&
(qa=ue(Ee.thrownErrors),Ee.thrownErrors.length=0),Bn(qa)})}}}var je=xe;if(Fe(A,L),L===0&&(ze(B),B.length!==0&&Vf(function(){
Z||Ks||(Ks=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testi\
ng React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Ee.actQueue=
null),0<Ee.thrownErrors.length)throw v=ue(Ee.thrownErrors),Ee.thrownErrors.length=0,v;return{then:function(Te,Bn){Z=!0,L===
0?(Ee.actQueue=B,G(function(){return Se(je,Te,Bn)})):Te(je)}}},pe.cache=function(v){return function(){return v.apply(null,
arguments)}},pe.captureOwnerStack=function(){var v=Ee.getCurrentStack;return v===null?null:v()},pe.cloneElement=function(v,A,L){
if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var B=Mf({},v.props),Z=v.key,xe=v.
_owner;if(A!=null){var ve;e:{if(Vs.call(A,"ref")&&(ve=Object.getOwnPropertyDescriptor(A,"ref").get)&&ve.isReactWarning){
ve=!1;break e}ve=A.ref!==void 0}ve&&(xe=u()),f(A)&&(s(A.key),Z=""+A.key);for(je in A)!Vs.call(A,je)||je==="key"||je==="_\
_self"||je==="__source"||je==="ref"&&A.ref===void 0||(B[je]=A[je])}var je=arguments.length-2;if(je===1)B.children=L;else if(1<
je){ve=Array(je);for(var Te=0;Te<je;Te++)ve[Te]=arguments[Te+2];B.children=ve}for(B=b(v.type,Z,void 0,void 0,xe,B,v._debugStack,
v._debugTask),Z=2;Z<arguments.length;Z++)xe=arguments[Z],k(xe)&&xe._store&&(xe._store.validated=1);return B},pe.createContext=
function(v){return v={$$typeof:We,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=
v,v.Consumer={$$typeof:de,_context:v},v._currentRenderer=null,v._currentRenderer2=null,v},pe.createElement=function(v,A,L){
for(var B=2;B<arguments.length;B++){var Z=arguments[B];k(Z)&&Z._store&&(Z._store.validated=1)}if(B={},Z=null,A!=null)for(Te in Uf||
!("__self"in A)||"key"in A||(Uf=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transfor\
m. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),f(A)&&(s(A.key),
Z=""+A.key),A)Vs.call(A,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(B[Te]=A[Te]);var xe=arguments.length-2;if(xe===
1)B.children=L;else if(1<xe){for(var ve=Array(xe),je=0;je<xe;je++)ve[je]=arguments[je+2];Object.freeze&&Object.freeze(ve),
B.children=ve}if(v&&v.defaultProps)for(Te in xe=v.defaultProps,xe)B[Te]===void 0&&(B[Te]=xe[Te]);Z&&h(B,typeof v=="funct\
ion"?v.displayName||v.name||"Unknown":v);var Te=1e4>Ee.recentlyCreatedOwnerStacks++;return b(v,Z,void 0,void 0,u(),B,Te?
Error("react-stack-top-frame"):_T,Te?jf(c(v)):AT)},pe.createRef=function(){var v={current:null};return Object.seal(v),v},
pe.forwardRef=function(v){v!=null&&v.$$typeof===pa?console.error("forwardRef requires a render function but received a `\
memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof v!="function"?console.error("forw\
ardRef requires a render function but was given %s.",v===null?"null":typeof v):v.length!==0&&v.length!==2&&console.error(
"forwardRef render functions accept exactly two parameters: props and ref. %s",v.length===1?"Did you forget to use the r\
ef parameter?":"Any additional parameter will be undefined."),v!=null&&v.defaultProps!=null&&console.error("forwardRef r\
ender functions do not support defaultProps. Did you accidentally pass a React component?");var A={$$typeof:ht,render:v},
L;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return L},set:function(B){L=
B,v.name||v.displayName||(Object.defineProperty(v,"name",{value:B}),v.displayName=B)}}),A},pe.isValidElement=k,pe.lazy=function(v){
return{$$typeof:Fn,_payload:{_status:-1,_result:v},_init:Q}},pe.memo=function(v,A){v==null&&console.error("memo: The fir\
st argument must be a component. Instead received: %s",v===null?"null":typeof v),A={$$typeof:pa,type:v,compare:A===void 0?
null:A};var L;return Object.defineProperty(A,"displayName",{enumerable:!1,configurable:!0,get:function(){return L},set:function(B){
L=B,v.name||v.displayName||(Object.defineProperty(v,"name",{value:B}),v.displayName=B)}}),A},pe.startTransition=function(v){
var A=Ee.T,L={};Ee.T=L,L._updatedFibers=new Set;try{var B=v(),Z=Ee.S;Z!==null&&Z(L,B),typeof B=="object"&&B!==null&&typeof B.
then=="function"&&B.then(ye,Wf)}catch(xe){Wf(xe)}finally{A===null&&L._updatedFibers&&(v=L._updatedFibers.size,L._updatedFibers.
clear(),10<v&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription \
please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),Ee.T=A}},pe.unstable_useCacheRefresh=
function(){return F().useCacheRefresh()},pe.use=function(v){return F().use(v)},pe.useActionState=function(v,A,L){return F().
useActionState(v,A,L)},pe.useCallback=function(v,A){return F().useCallback(v,A)},pe.useContext=function(v){var A=F();return v.
$$typeof===de&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to\
 call useContext(Context) instead?"),A.useContext(v)},pe.useDebugValue=function(v,A){return F().useDebugValue(v,A)},pe.useDeferredValue=
function(v,A){return F().useDeferredValue(v,A)},pe.useEffect=function(v,A,L){v==null&&console.warn("React Hook useEffect\
 requires an effect callback. Did you forget to pass a callback to the hook?");var B=F();if(typeof L=="function")throw Error(
"useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(v,A)},pe.useId=function(){return F().
useId()},pe.useImperativeHandle=function(v,A,L){return F().useImperativeHandle(v,A,L)},pe.useInsertionEffect=function(v,A){
return v==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callba\
ck to the hook?"),F().useInsertionEffect(v,A)},pe.useLayoutEffect=function(v,A){return v==null&&console.warn("React Hook\
 useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),F().useLayoutEffect(v,A)},
pe.useMemo=function(v,A){return F().useMemo(v,A)},pe.useOptimistic=function(v,A){return F().useOptimistic(v,A)},pe.useReducer=
function(v,A,L){return F().useReducer(v,A,L)},pe.useRef=function(v){return F().useRef(v)},pe.useState=function(v){return F().
useState(v)},pe.useSyncExternalStore=function(v,A,L){return F().useSyncExternalStore(v,A,L)},pe.useTransition=function(){
return F().useTransition()},pe.version="19.1.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()});var Cn=qe((_L,Pd)=>{"use strict";process.env.NODE_ENV==="production"?Pd.exports=gy():Pd.exports=yy()});var by=qe(Fl=>{"use strict";var _x=Symbol.for("react.transitional.element"),Ax=Symbol.for("react.fragment");function vy(e,t,r){
var n=null;if(r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),"key"in t){r={};for(var a in t)a!=="key"&&(r[a]=t[a])}else
r=t;return t=r.ref,{$$typeof:_x,type:e,key:n,ref:t!==void 0?t:null,props:r}}Fl.Fragment=Ax;Fl.jsx=vy;Fl.jsxs=vy});var wy=qe(Bl=>{"use strict";process.env.NODE_ENV!=="production"&&function(){function e(D){if(D==null)return null;if(typeof D==
"function")return D.$$typeof===ye?null:D.displayName||D.name||null;if(typeof D=="string")return D;switch(D){case b:return"\
Fragment";case k:return"Profiler";case T:return"StrictMode";case N:return"Suspense";case W:return"SuspenseList";case F:return"\
Activity"}if(typeof D=="object")switch(typeof D.tag=="number"&&console.error("Received an unexpected object in getCompon\
entNameFromType(). This is likely a bug in React. Please file an issue."),D.$$typeof){case y:return"Portal";case _:return(D.
displayName||"Context")+".Provider";case S:return(D._context.displayName||"Context")+".Consumer";case I:var de=D.render;
return D=D.displayName,D||(D=de.displayName||de.name||"",D=D!==""?"ForwardRef("+D+")":"ForwardRef"),D;case V:return de=D.
displayName||null,de!==null?de:e(D.type)||"Memo";case Q:de=D._payload,D=D._init;try{return e(D(de))}catch{}}return null}
function t(D){return""+D}function r(D){try{t(D);var de=!1}catch{de=!0}if(de){de=console;var We=de.error,ht=typeof Symbol==
"function"&&Symbol.toStringTag&&D[Symbol.toStringTag]||D.constructor.name||"Object";return We.call(de,"The provided key \
is an unsupported type %s. This value must be coerced to a string before using it here.",ht),t(D)}}function n(D){if(D===
b)return"<>";if(typeof D=="object"&&D!==null&&D.$$typeof===Q)return"<...>";try{var de=e(D);return de?"<"+de+">":"<...>"}catch{
return"<...>"}}function a(){var D=G.A;return D===null?null:D.getOwner()}function i(){return Error("react-stack-top-frame")}
function o(D){if(ue.call(D,"key")){var de=Object.getOwnPropertyDescriptor(D,"key").get;if(de&&de.isReactWarning)return!1}
return D.key!==void 0}function s(D,de){function We(){ze||(ze=!0,console.error("%s: `key` is not a prop. Trying to access\
 it will result in `undefined` being returned. If you need to access the same value within the child component, you shou\
ld pass it as a different prop. (https://react.dev/link/special-props)",de))}We.isReactWarning=!0,Object.defineProperty(
D,"key",{get:We,configurable:!0})}function l(){var D=e(this.type);return jt[D]||(jt[D]=!0,console.error("Accessing eleme\
nt.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future rele\
ase.")),D=this.props.ref,D!==void 0?D:null}function c(D,de,We,ht,Hr,Rr,pa,Fn){return We=Rr.ref,D={$$typeof:h,type:D,key:de,
props:Rr,_owner:Hr},(We!==void 0?We:null)!==null?Object.defineProperty(D,"ref",{enumerable:!1,get:l}):Object.defineProperty(
D,"ref",{enumerable:!1,value:null}),D._store={},Object.defineProperty(D._store,"validated",{configurable:!1,enumerable:!1,
writable:!0,value:0}),Object.defineProperty(D,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.
defineProperty(D,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:pa}),Object.defineProperty(D,"_debugTask",
{configurable:!1,enumerable:!1,writable:!0,value:Fn}),Object.freeze&&(Object.freeze(D.props),Object.freeze(D)),D}function u(D,de,We,ht,Hr,Rr,pa,Fn){
var wt=de.children;if(wt!==void 0)if(ht)if(Fe(wt)){for(ht=0;ht<wt.length;ht++)d(wt[ht]);Object.freeze&&Object.freeze(wt)}else
console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or Rea\
ct.jsxDEV. Use the Babel transform instead.");else d(wt);if(ue.call(de,"key")){wt=e(D);var fn=Object.keys(de).filter(function(Ws){
return Ws!=="key"});ht=0<fn.length?"{key: someKey, "+fn.join(": ..., ")+": ...}":"{key: someKey}",da[wt+ht]||(fn=0<fn.length?
"{"+fn.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ht,wt,fn,wt),da[wt+ht]=!0)}if(wt=null,We!==void 0&&(r(We),wt=""+We),o(de)&&(r(de.key),
wt=""+de.key),"key"in de){We={};for(var Wa in de)Wa!=="key"&&(We[Wa]=de[Wa])}else We=de;return wt&&s(We,typeof D=="funct\
ion"?D.displayName||D.name||"Unknown":D),c(D,wt,Rr,Hr,a(),We,pa,Fn)}function d(D){typeof D=="object"&&D!==null&&D.$$typeof===
h&&D._store&&(D._store.validated=1)}var f=Cn(),h=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.
for("react.fragment"),T=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler");Symbol.for("react.provider");var S=Symbol.
for("react.consumer"),_=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),W=Symbol.
for("react.suspense_list"),V=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),ye=Symbol.
for("react.client.reference"),G=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.prototype.hasOwnProperty,
Fe=Array.isArray,Se=console.createTask?console.createTask:function(){return null};f={"react-stack-bottom-frame":function(D){
return D()}};var ze,jt={},Ot=f["react-stack-bottom-frame"].bind(f,i)(),Un=Se(n(i)),da={};Bl.Fragment=b,Bl.jsx=function(D,de,We,ht,Hr){
var Rr=1e4>G.recentlyCreatedOwnerStacks++;return u(D,de,We,!1,ht,Hr,Rr?Error("react-stack-top-frame"):Ot,Rr?Se(n(D)):Un)},
Bl.jsxs=function(D,de,We,ht,Hr){var Rr=1e4>G.recentlyCreatedOwnerStacks++;return u(D,de,We,!0,ht,Hr,Rr?Error("react-stac\
k-top-frame"):Ot,Rr?Se(n(D)):Un)}}()});var Hl=qe((RL,Md)=>{"use strict";process.env.NODE_ENV==="production"?Md.exports=by():Md.exports=wy()});var Dd=qe(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.Allow=q.ALL=q.COLLECTION=q.ATOM=q.SPECIAL=
q.INF=q._INFINITY=q.INFINITY=q.NAN=q.BOOL=q.NULL=q.OBJ=q.ARR=q.NUM=q.STR=void 0;q.STR=1;q.NUM=2;q.ARR=4;q.OBJ=8;q.NULL=16;
q.BOOL=32;q.NAN=64;q.INFINITY=128;q._INFINITY=256;q.INF=q.INFINITY|q._INFINITY;q.SPECIAL=q.NULL|q.BOOL|q.INF|q.NAN;q.ATOM=
q.STR|q.NUM|q.SPECIAL;q.COLLECTION=q.ARR|q.OBJ;q.ALL=q.ATOM|q.COLLECTION;q.Allow={STR:q.STR,NUM:q.NUM,ARR:q.ARR,OBJ:q.OBJ,
NULL:q.NULL,BOOL:q.BOOL,NAN:q.NAN,INFINITY:q.INFINITY,_INFINITY:q._INFINITY,INF:q.INF,SPECIAL:q.SPECIAL,ATOM:q.ATOM,COLLECTION:q.
COLLECTION,ALL:q.ALL};q.default=q.Allow});var jd=qe($t=>{"use strict";var $x=$t&&$t.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.
getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){
return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Rx=$t&&$t.__exportStar||function(e,t){
for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&$x(t,e,r)};Object.defineProperty($t,"__esModul\
e",{value:!0});$t.Allow=$t.MalformedJSON=$t.PartialJSON=$t.parseJSON=$t.parse=void 0;var ar=Dd();Object.defineProperty($t,
"Allow",{enumerable:!0,get:function(){return ar.Allow}});Rx(Dd(),$t);var Wl=class extends Error{};$t.PartialJSON=Wl;var ql=class extends Error{};
$t.MalformedJSON=ql;function Ty(e,t=ar.Allow.ALL){if(typeof e!="string")throw new TypeError(`expecting str, got ${typeof e}`);
if(!e.trim())throw new Error(`${e} is empty`);return Ox(e.trim(),t)}$t.parseJSON=Ty;var Ox=(e,t)=>{let r=e.length,n=0,a=f=>{
throw new Wl(`${f} at position ${n}`)},i=f=>{throw new ql(`${f} at position ${n}`)},o=()=>(d(),n>=r&&a("Unexpected end o\
f input"),e[n]==='"'?s():e[n]==="{"?l():e[n]==="["?c():e.substring(n,n+4)==="null"||ar.Allow.NULL&t&&r-n<4&&"null".startsWith(
e.substring(n))?(n+=4,null):e.substring(n,n+4)==="true"||ar.Allow.BOOL&t&&r-n<4&&"true".startsWith(e.substring(n))?(n+=4,
!0):e.substring(n,n+5)==="false"||ar.Allow.BOOL&t&&r-n<5&&"false".startsWith(e.substring(n))?(n+=5,!1):e.substring(n,n+8)===
"Infinity"||ar.Allow.INFINITY&t&&r-n<8&&"Infinity".startsWith(e.substring(n))?(n+=8,1/0):e.substring(n,n+9)==="-Infinity"||
ar.Allow._INFINITY&t&&1<r-n&&r-n<9&&"-Infinity".startsWith(e.substring(n))?(n+=9,-1/0):e.substring(n,n+3)==="NaN"||ar.Allow.
NAN&t&&r-n<3&&"NaN".startsWith(e.substring(n))?(n+=3,NaN):u()),s=()=>{let f=n,h=!1;for(n++;n<r&&(e[n]!=='"'||h&&e[n-1]===
"\\");)h=e[n]==="\\"?!h:!1,n++;if(e.charAt(n)=='"')try{return JSON.parse(e.substring(f,++n-Number(h)))}catch(y){i(String(
y))}else if(ar.Allow.STR&t)try{return JSON.parse(e.substring(f,n-Number(h))+'"')}catch{return JSON.parse(e.substring(f,e.
lastIndexOf("\\"))+'"')}a("Unterminated string literal")},l=()=>{n++,d();let f={};try{for(;e[n]!=="}";){if(d(),n>=r&&ar.
Allow.OBJ&t)return f;let h=s();d(),n++;try{let y=o();f[h]=y}catch(y){if(ar.Allow.OBJ&t)return f;throw y}d(),e[n]===","&&
n++}}catch{if(ar.Allow.OBJ&t)return f;a("Expected '}' at end of object")}return n++,f},c=()=>{n++;let f=[];try{for(;e[n]!==
"]";)f.push(o()),d(),e[n]===","&&n++}catch{if(ar.Allow.ARR&t)return f;a("Expected ']' at end of array")}return n++,f},u=()=>{
if(n===0){e==="-"&&i("Not sure what '-' is");try{return JSON.parse(e)}catch(h){if(ar.Allow.NUM&t)try{return JSON.parse(e.
substring(0,e.lastIndexOf("e")))}catch{}i(String(h))}}let f=n;for(e[n]==="-"&&n++;e[n]&&",]}".indexOf(e[n])===-1;)n++;n==
r&&!(ar.Allow.NUM&t)&&a("Unterminated number literal");try{return JSON.parse(e.substring(f,n))}catch{e.substring(f,n)===
"-"&&a("Not sure what '-' is");try{return JSON.parse(e.substring(f,e.lastIndexOf("e")))}catch(y){i(String(y))}}},d=()=>{
for(;n<r&&` 
\r	`.includes(e[n]);)n++};return o()},Ix=Ty;$t.parse=Ix});import{fileURLToPath as GD}from"node:url";var De=ie(Le(),1),at=ie(Le(),1);var rl={done:!1,hasNext:!1};function pu(e,...t){let r=e,n=t.map(i=>"lazy"in i?F1(i):void 0),a=0;for(;a<t.length;){if(n[a]===void 0||!B1(r)){let l=t[a];
r=l(r),a+=1;continue}let i=[];for(let l=a;l<t.length;l++){let c=n[l];if(c===void 0||(i.push(c),c.isSingle))break}let o=[];
for(let l of r)if(im(l,o,i))break;let{isSingle:s}=i.at(-1);r=s?o[0]:o,a+=i.length}return r}function im(e,t,r){if(r.length===
0)return t.push(e),!1;let n=e,a=rl,i=!1;for(let[o,s]of r.entries()){let{index:l,items:c}=s;if(c.push(n),a=s(n,l,c),s.index+=
1,a.hasNext){if(a.hasMany??!1){for(let u of a.next)if(im(u,t,r.slice(o+1)))return!0;return i}n=a.next}if(!a.hasNext)break;
a.done&&(i=!0)}return a.hasNext&&t.push(n),i}function F1(e){let{lazy:t,lazyArgs:r}=e,n=t(...r);return Object.assign(n,{isSingle:t.
single??!1,index:0,items:[]})}function B1(e){return typeof e=="string"||typeof e=="object"&&e!==null&&Symbol.iterator in
e}function om(e,t){let r=t.length-e.length;if(r===1){let[n,...a]=t;return pu(n,{lazy:e,lazyArgs:a})}if(r===0){let n={lazy:e,
lazyArgs:t};return Object.assign(a=>pu(a,n),n)}throw new Error("Wrong number of arguments")}function sm(e,t,r){let n=a=>e(a,...t);return r===void 0?n:Object.assign(n,{lazy:r,lazyArgs:t})}function Ct(e,t,r){let n=e.length-t.length;if(n===0)return e(...t);if(n===1)return sm(e,t,r);throw new Error("Wrong numb\
er of arguments")}function fu(...e){return Ct(H1,e)}function H1(e,t){if(e<1)return[];let r=Number.isInteger(e)?e:Math.floor(e),n=new Array(
r);for(let a=0;a<r;a++)n[a]=t(a);return n}function ya(...e){return om(W1,e)}function W1(){let e=new Set;return t=>e.has(t)?rl:(e.add(t),{done:!1,hasNext:!0,next:t})}function hu(e,t,r){return typeof t=="number"||t===void 0?n=>n.split(e,t):e.split(t,r)}function gn(...e){return Ct(q1,e)}var q1=(e,t)=>e[t];function mu(...e){return Ct(V1,e)}function V1(e,t){let r={};for(let[n,a]of Object.entries(e)){let i=t(a,n,e);r[n]=i}return r}function yn(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function nl(...e){return Ct(Y1,e)}var Y1=e=>e.at(-1);function qn(e){return typeof e=="number"&&!Number.isNaN(e)}function gu(e){return typeof e=="object"&&e!==null}function Ut(e){return typeof e=="string"}function yu(e){return e===void 0?!0:typeof e=="string"||Array.isArray(e)?e.length===0:Object.keys(e).length===0}function Zi(e){return typeof e=="function"}function Xi(e){return e!==void 0}function Vn(...e){return Ct(z1,e)}var z1=(e,t)=>{let r=new Map;for(let[n,a]of e.entries()){let i=t(a,n,e);if(i!==void 0){
let o=r.get(i);o===void 0&&(o=[],r.set(i,o)),o.push(a)}}return Object.fromEntries(r)};function vu(...e){return Ct(Qi,e)}function Qi(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="o\
bject"||e===null||t===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Array.isArray(e))return K1(e,
t);if(e instanceof Map)return G1(e,t);if(e instanceof Set)return J1(e,t);if(e instanceof Date)return e.getTime()===t.getTime();
if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[
r,n]of Object.entries(e))if(!(r in t)||!Qi(n,t[r]))return!1;return!0}function K1(e,t){if(e.length!==t.length)return!1;for(let[
r,n]of e.entries())if(!Qi(n,t[r]))return!1;return!0}function G1(e,t){if(e.size!==t.size)return!1;for(let[r,n]of e.entries())
if(!t.has(r)||!Qi(n,t.get(r)))return!1;return!0}function J1(e,t){if(e.size!==t.size)return!1;let r=[...t];for(let n of e){
let a=!1;for(let[i,o]of r.entries())if(Qi(n,o)){a=!0,r.splice(i,1);break}if(!a)return!1}return!0}function bu(){return Z1}var Z1=e=>e;function Ft(...e){return Ct(X1,e)}function X1(e,t){let r={};for(let[n,a]of e.entries()){let i=t(a,n,e);r[i]=a}return r}function wu(...e){return Ct(Q1,e)}var Q1=e=>`${e[0]?.toUpperCase()??""}${e.slice(1)}`;var $=ie(cm(),1),br=$.default.BigInt(0),vo=$.default.BigInt(1),pd=$.default.BigInt(2),eE=$.default.BigInt(10),tE=$.default.
BigInt(24),rE=$.default.BigInt(60),nE=$.default.BigInt(1e3),Do=$.default.BigInt(1e6),po=$.default.BigInt(1e9),qm=$.default.
multiply($.default.BigInt(3600),po),aE=$.default.multiply(rE,po),Zn=$.default.multiply(qm,tE);function bn(e){return typeof e==
"bigint"?$.default.BigInt(e.toString(10)):e}function Vm(e){return $.default.equal($.default.remainder(e,pd),br)}function va(e){
return $.default.lessThan(e,br)?$.default.unaryMinus(e):e}function ol(e,t){return $.default.lessThan(e,t)?-1:$.default.greaterThan(
e,t)?1:0}function no(e,t){return{quotient:$.default.divide(e,t),remainder:$.default.remainder(e,t)}}var um,dm,re="slot-e\
pochNanoSeconds",ne="slot-iso-date",Ke="slot-iso-date-time",rt="slot-time",j="slot-calendar",Ym="slot-date-brand",zm="sl\
ot-year-month-brand",Km="slot-month-day-brand",Ie="slot-time-zone",qt="slot-years",Vt="slot-months",lr="slot-weeks",Yt="\
slot-days",zt="slot-hours",Kt="slot-minutes",Gt="slot-seconds",Jt="slot-milliseconds",Zt="slot-microseconds",cr="slot-na\
noseconds",Gm="date",Jm="ym",Zm="md",Xm="time",Qm="datetime",eg="instant",Ra="original",Ja="timezone-canonical",_u="time\
zone-original",ao="calendar-id",tg="locale",Au="options",rg=new WeakMap,$u=Symbol.for("@@Temporal__GetSlots");(um=globalThis)[$u]||
(um[$u]=function(e){return rg.get(e)});var kl=globalThis[$u],Ru=Symbol.for("@@Temporal__CreateSlots");(dm=globalThis)[Ru]||
(dm[Ru]=function(e){rg.set(e,Object.create(null))});var On=globalThis[Ru];function rr(e,...t){if(!e||typeof e!="object")
return!1;let r=kl(e);return!!r&&t.every(n=>n in r)}function g(e,t){let r=kl(e)?.[t];if(r===void 0)throw new TypeError(`M\
issing internal slot ${t}`);return r}function fe(e,t,r){let n=kl(e);if(n===void 0)throw new TypeError("Missing slots for\
 the given container");if(n[t])throw new TypeError(`${t} already has set`);n[t]=r}var Ou={};function In(e,t){Object.defineProperty(
e.prototype,Symbol.toStringTag,{value:t,writable:!1,enumerable:!1,configurable:!0});let r=Object.getOwnPropertyNames(e);
for(let a=0;a<r.length;a++){let i=r[a],o=Object.getOwnPropertyDescriptor(e,i);o.configurable&&o.enumerable&&(o.enumerable=
!1,Object.defineProperty(e,i,o))}let n=Object.getOwnPropertyNames(e.prototype);for(let a=0;a<n.length;a++){let i=n[a],o=Object.
getOwnPropertyDescriptor(e.prototype,i);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e.prototype,
i,o))}Iu(t,e),Iu(`${t}.prototype`,e.prototype)}function Iu(e,t){let r=`%${e}%`;if(Ou[r]!==void 0)throw new Error(`intrin\
sic ${e} already exists`);Ou[r]=t}function At(e){return Ou[e]}function Xa(e,t){let r=e;if(r===0)return{div:r,mod:r};let n=Math.
sign(r);r=Math.abs(r);let a=Math.trunc(1+Math.log10(r));if(t>=a)return{div:0*n,mod:n*r};if(t===0)return{div:n*r,mod:0*n};
let i=r.toPrecision(a);return{div:n*Number.parseInt(i.slice(0,a-t),10),mod:n*Number.parseInt(i.slice(a-t),10)}}function Tu(e,t,r){
let n=e,a=r;if(n===0)return a;let i=Math.sign(n)||Math.sign(a);n=Math.abs(n),a=Math.abs(a);let o=n.toPrecision(Math.trunc(
1+Math.log10(n)));if(a===0)return i*Number.parseInt(o+"0".repeat(t),10);let s=o+a.toPrecision(Math.trunc(1+Math.log10(a))).
padStart(t,"0");return i*Number.parseInt(s,10)}function Sl(e,t){let r=t==="negative";switch(e){case"ceil":return r?"zero":
"infinity";case"floor":return r?"infinity":"zero";case"expand":return"infinity";case"trunc":return"zero";case"halfCeil":
return r?"half-zero":"half-infinity";case"halfFloor":return r?"half-infinity":"half-zero";case"halfExpand":return"half-i\
nfinity";case"halfTrunc":return"half-zero";case"halfEven":return"half-even"}}function El(e,t,r,n,a){return a==="zero"?e:
a==="infinity"?t:r<0?e:r>0?t:a==="half-zero"?e:a==="half-infinity"?t:n?e:t}var Be=class e{constructor(t){this.totalNs=bn(
t),this.sec=$.default.toNumber($.default.divide(this.totalNs,po)),this.subsec=$.default.toNumber($.default.remainder(this.
totalNs,po))}static validateNew(t,r){if($.default.greaterThan(va(t),e.MAX))throw new RangeError(`${r} of duration time u\
nits cannot exceed ${e.MAX} s`);return new e(t)}static fromEpochNsDiff(t,r){let n=$.default.subtract(bn(t),bn(r));return new e(
n)}static fromComponents(t,r,n,a,i,o){let s=$.default.add($.default.add($.default.add($.default.add($.default.add($.default.
BigInt(o),$.default.multiply($.default.BigInt(i),nE)),$.default.multiply($.default.BigInt(a),Do)),$.default.multiply($.default.
BigInt(n),po)),$.default.multiply($.default.BigInt(r),aE)),$.default.multiply($.default.BigInt(t),qm));return e.validateNew(
s,"total")}abs(){return new e(va(this.totalNs))}add(t){return e.validateNew($.default.add(this.totalNs,t.totalNs),"sum")}add24HourDays(t){
return e.validateNew($.default.add(this.totalNs,$.default.multiply($.default.BigInt(t),Zn)),"sum")}addToEpochNs(t){return $.default.
add(bn(t),this.totalNs)}cmp(t){return ol(this.totalNs,t.totalNs)}divmod(t){let{quotient:r,remainder:n}=no(this.totalNs,$.default.
BigInt(t));return{quotient:$.default.toNumber(r),remainder:new e(n)}}fdiv(t){let r=bn(t),n=$.default.BigInt(r),{quotient:a,
remainder:i}=no(this.totalNs,n),o=[],s,l=($.default.lessThan(this.totalNs,br)?-1:1)*Math.sign($.default.toNumber(r));for(;!$.default.
equal(i,br)&&o.length<50;)i=$.default.multiply(i,eE),{quotient:s,remainder:i}=no(i,n),o.push(Math.abs($.default.toNumber(
s)));return l*+(va(a).toString()+"."+o.join(""))}isZero(){return $.default.equal(this.totalNs,br)}round(t,r){let n=bn(t);
if($.default.equal(n,vo))return this;let{quotient:a,remainder:i}=no(this.totalNs,n),o=$.default.lessThan(this.totalNs,br)?
"negative":"positive",s=$.default.multiply(va(a),n),l=$.default.add(s,n),c=ol(va($.default.multiply(i,pd)),n),u=Sl(r,o),
d=$.default.equal(va(this.totalNs),s)?s:El(s,l,c,Vm(a),u),f=o==="positive"?d:$.default.unaryMinus(d);return e.validateNew(
f,"rounding")}sign(){return this.cmp(new e(br))}subtract(t){return e.validateNew($.default.subtract(this.totalNs,t.totalNs),
"difference")}};Be.MAX=$.default.BigInt("9007199254740991999999999"),Be.ZERO=new Be(br);var pm=/[A-Za-z._][A-Za-z._0-9+-]*/,
jo=new RegExp(`(?:${/(?:[+-](?:[01][0-9]|2[0-3])(?::?[0-5][0-9])?)/.source}|(?:${pm.source})(?:\\/(?:${pm.source}))*)`),
ng=/(?:[+-]\d{6}|\d{4})/,sl=/(?:0[1-9]|1[0-2])/,Cu=/(?:0[1-9]|[12]\d|3[01])/,iE=new RegExp(`(${ng.source})(?:-(${sl.source}\
)-(${Cu.source})|(${sl.source})(${Cu.source}))`),ag=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,
ig=/((?:[+-])(?:[01][0-9]|2[0-3])(?::?(?:[0-5][0-9])(?::?(?:[0-5][0-9])(?:[.,](?:\d{1,9}))?)?)?)/,og=new RegExp(`([zZ])|${ig.
source}?`),ri=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,oE=new RegExp([`^${iE.source}`,`(?:(?:[tT]\
|\\s+)${ag.source}(?:${og.source})?)?`,`(?:\\[!?(${jo.source})\\])?`,`((?:${ri.source})*)$`].join("")),sE=new RegExp([`^\
[tT]?${ag.source}`,`(?:${og.source})?`,`(?:\\[!?${jo.source}\\])?`,`((?:${ri.source})*)$`].join("")),lE=new RegExp(`^(${ng.
source})-?(${sl.source})(?:\\[!?${jo.source}\\])?((?:${ri.source})*)$`),cE=new RegExp(`^(?:--)?(${sl.source})-?(${Cu.source}\
)(?:\\[!?${jo.source}\\])?((?:${ri.source})*)$`),ku=/(\d+)(?:[.,](\d{1,9}))?/,uE=new RegExp(`(?:${ku.source}H)?(?:${ku.source}\
M)?(?:${ku.source}S)?`),dE=new RegExp(`^([+-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${uE.source}\
)?$`,"i"),Xn=864e5,ll=1e6*Xn,pE=6e10,sg=1e8*Xn,ni=Yr(sg),bo=$.default.unaryMinus(ni),fE=$.default.add($.default.subtract(
bo,Zn),vo),hE=$.default.subtract($.default.add(ni,Zn),vo),mE=146097*Xn,fm=-271821,hm=275760,fo=Date.UTC(1847,0,1),gE=["i\
so8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiop\
ic","ethioaa","ethiopic-amete-alem","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"],yE=new Set(
["ACT","AET","AGT","ART","AST","BET","BST","CAT","CNT","CST","CTT","EAT","ECT","IET","IST","JST","MIT","NET","NST","PLT",
"PNT","PRT","PST","SST","VST"]);function nt(e){return typeof e=="object"&&e!==null||typeof e=="function"}function xl(e){
if(typeof e=="bigint")throw new TypeError("Cannot convert BigInt to number");return Number(e)}function _l(e){if(typeof e==
"symbol")throw new TypeError("Cannot convert a Symbol value to a String");return String(e)}function se(e){let t=xl(e);if(t===
0)return 0;if(Number.isNaN(t)||t===1/0||t===-1/0)throw new RangeError("invalid number value");let r=Math.trunc(t);return r===
0?0:r}function mm(e,t){let r=se(e);if(r<=0)throw t!==void 0?new RangeError(`property '${t}' cannot be a a number less th\
an one`):new RangeError("Cannot convert a number less than one to a positive integer");return r}function qr(e){let t=xl(
e);if(Number.isNaN(t))throw new RangeError("not a number");if(t===1/0||t===-1/0)throw new RangeError("infinity is out of\
 range");if(!function(r){if(typeof r!="number"||Number.isNaN(r)||r===1/0||r===-1/0)return!1;let n=Math.abs(r);return Math.
floor(n)===n}(t))throw new RangeError(`unsupported fractional value ${e}`);return t===0?0:t}function wo(e,t){return String(
e).padStart(t,"0")}function mt(e){if(typeof e!="string")throw new TypeError(`expected a string, not ${String(e)}`);return e}
function Nu(e,t){if(nt(e)){let r=e?.toString();if(typeof r=="string"||typeof r=="number")return r;throw new TypeError("C\
annot convert object to primitive value")}return e}var Pu=["era","eraYear","year","month","monthCode","day","hour","minu\
te","second","millisecond","microsecond","nanosecond","offset","timeZone"],vE={era:_l,eraYear:se,year:se,month:mm,monthCode:function(e){
let t=mt(Nu(e));if(t.length<3||t.length>4||t[0]!=="M"||"0123456789".indexOf(t[1])===-1||"0123456789".indexOf(t[2])===-1||
t[1]+t[2]==="00"&&t[3]!=="L"||t[3]!=="L"&&t[3]!==void 0)throw new RangeError(`bad month code ${t}; must match M01-M99 or\
 M00L-M99L`);return t},day:mm,hour:se,minute:se,second:se,millisecond:se,microsecond:se,nanosecond:se,offset:function(e){
let t=mt(Nu(e));return pi(t),t},timeZone:er},bE={hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0},ai=[
["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],
["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microseco\
nd","time"],["nanoseconds","nanosecond","time"]],gm=Object.fromEntries(ai.map(e=>[e[0],e[1]])),wE=Object.fromEntries(ai.
map(([e,t])=>[t,e])),ho=ai.map(([,e])=>e),ii={day:ll,hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},
cl=["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],TE=Intl.DateTimeFormat,
ym=new Map;function lg(e){let t=xo(e),r=ym.get(t);return r===void 0&&(r=new TE("en-us",{timeZone:t,hour12:!1,era:"short",
year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),ym.set(t,r)),r}function Et(e){
return rr(e,re)&&!rr(e,Ie,j)}function et(e){return rr(e,qt,Vt,Yt,zt,Kt,Gt,Jt,Zt,cr)}function tt(e){return rr(e,Ym)}function ot(e){
return rr(e,rt)}function Ve(e){return rr(e,Ke)}function xt(e){return rr(e,zm)}function vr(e){return rr(e,Km)}function be(e){
return rr(e,re,Ie,j)}function O(e,t){if(!t(e))throw new TypeError("invalid receiver: method called with the wrong type o\
f this-object")}function ci(e){if(rr(e,j)||rr(e,Ie))throw new TypeError("with() does not support a calendar or timeZone \
property");if(ot(e))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(e.calendar!==
void 0)throw new TypeError("with() does not support a calendar property");if(e.timeZone!==void 0)throw new TypeError("wi\
th() does not support a timeZone property")}function Lo(e,t){return t==="never"||t==="auto"&&e==="iso8601"?"":`[${t==="c\
ritical"?"!":""}u-ca=${e}]`}function Al(e){let t,r,n=!1;for(ri.lastIndex=0;r=ri.exec(e);){let{1:a,2:i,3:o}=r;if(i==="u-c\
a"){if(t===void 0)t=o,n=a==="!";else if(a==="!"||n)throw new RangeError(`Invalid annotations in ${e}: more than one u-ca\
 present with critical flag`)}else if(a==="!")throw new RangeError(`Unrecognized annotation: !${i}=${o}`)}return t}function on(e){
let t=oE.exec(e);if(!t)throw new RangeError(`invalid RFC 9557 string: ${e}`);let r=Al(t[16]),n=t[1];if(n==="-000000")throw new RangeError(
`invalid RFC 9557 string: ${e}`);let a=+n,i=+(t[2]??t[4]??1),o=+(t[3]??t[5]??1),s=t[6]!==void 0,l=+(t[6]??0),c=+(t[7]??t[10]??
0),u=+(t[8]??t[11]??0);u===60&&(u=59);let d=(t[9]??t[12]??"")+"000000000",f=+d.slice(0,3),h=+d.slice(3,6),y=+d.slice(6,9),
b,T=!1;t[13]?(b=void 0,T=!0):t[14]&&(b=t[14]);let k=t[15];return vd(a,i,o,l,c,u,f,h,y),{year:a,month:i,day:o,time:s?{hour:l,
minute:c,second:u,millisecond:f,microsecond:h,nanosecond:y}:"start-of-day",tzAnnotation:k,offset:b,z:T,calendar:r}}function cg(e){
let t=sE.exec(e),r,n,a,i,o,s,l;if(t){l=Al(t[10]),r=+(t[1]??0),n=+(t[2]??t[5]??0),a=+(t[3]??t[6]??0),a===60&&(a=59);let c=(t[4]??
t[7]??"")+"000000000";if(i=+c.slice(0,3),o=+c.slice(3,6),s=+c.slice(6,9),t[8])throw new RangeError("Z designator not sup\
ported for PlainTime")}else{let c,u;if({time:c,z:u,calendar:l}=on(e),c==="start-of-day")throw new RangeError(`time is mi\
ssing in string: ${e}`);if(u)throw new RangeError("Z designator not supported for PlainTime");({hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s}=c)}if(Il(r,n,a,i,o,s),/[tT ][0-9][0-9]/.test(e))return{hour:r,minute:n,second:a,
millisecond:i,microsecond:o,nanosecond:s,calendar:l};try{let{month:c,day:u}=hd(e);Sa(1972,c,u)}catch{try{let{year:c,month:u}=fd(
e);Sa(c,u,1)}catch{return{hour:r,minute:n,second:a,millisecond:i,microsecond:o,nanosecond:s,calendar:l}}}throw new RangeError(
`invalid RFC 9557 time-only string ${e}; may need a T prefix`)}function fd(e){let t=lE.exec(e),r,n,a,i;if(t){a=Al(t[3]);
let o=t[1];if(o==="-000000")throw new RangeError(`invalid RFC 9557 string: ${e}`);if(r=+o,n=+t[2],i=1,a!==void 0&&a!=="i\
so8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let o;if({year:r,month:n,calendar:a,
day:i,z:o}=on(e),o)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:r,month:n,calendar:a,
referenceISODay:i}}function hd(e){let t=cE.exec(e),r,n,a,i;if(t){if(a=Al(t[3]),r=+t[1],n=+t[2],a!==void 0&&a!=="iso8601")
throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let o;if({month:r,day:n,calendar:a,year:i,
z:o}=on(e),o)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:r,day:n,calendar:a,referenceISOYear:i}}
var ug=new RegExp(`^${jo.source}$`,"i"),dg=new RegExp(`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])?)?/.source}$`);function pg(e){
let t=SE.test(e)?"Seconds not allowed in offset time zone":"Invalid time zone";throw new RangeError(`${t}: ${e}`)}function Jn(e){
return ug.test(e)||pg(e),dg.test(e)?{offsetMinutes:pi(e)/6e10}:{tzName:e}}function mo(e,t,r,n){let a=e,i=t,o=r;switch(n){case"\
reject":Sa(a,i,o);break;case"constrain":({year:a,month:i,day:o}=Rg(a,i,o))}return{year:a,month:i,day:o}}function $l(e,t,r,n,a,i,o){
let s=e,l=t,c=r,u=n,d=a,f=i;switch(o){case"reject":Il(s,l,c,u,d,f);break;case"constrain":s=Xt(s,0,23),l=Xt(l,0,59),c=Xt(
c,0,59),u=Xt(u,0,999),d=Xt(d,0,999),f=Xt(f,0,999)}return{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}
function fg(e){if(!nt(e))throw new TypeError("invalid duration-like");let t={years:void 0,months:void 0,weeks:void 0,days:void 0,
hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0},r=!1;for(let n=0;n<
cl.length;n++){let a=cl[n],i=e[a];i!==void 0&&(r=!0,t[a]=qr(i))}if(!r)throw new TypeError("invalid duration-like");return t}
function Pt({years:e,months:t,weeks:r,days:n},a,i,o){return{years:e,months:o??t,weeks:i??r,days:a??n}}function Re(e,t){return{
isoDate:e,time:t}}function $e(e){return _n(e,"overflow",["constrain","reject"],"constrain")}function go(e){return _n(e,"\
disambiguation",["compatible","earlier","later","reject"],"compatible")}function zr(e,t){return _n(e,"roundingMode",["ce\
il","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],t)}function il(e,t){return _n(e,
"offset",["prefer","use","ignore","reject"],t)}function Uo(e){return _n(e,"calendarName",["auto","always","never","criti\
cal"],"auto")}function ui(e){let t=e.roundingIncrement;if(t===void 0)return 1;let r=se(t);if(r<1||r>1e9)throw new RangeError(
`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);return r}function di(e,t,r){let n=r?t:t-1;if(e>n)throw new RangeError(
`roundingIncrement must be at least 1 and less than ${n}, not ${e}`);if(t%e!=0)throw new RangeError(`Rounding increment \
must divide evenly into ${t}`)}function Fo(e){let t=e.fractionalSecondDigits;if(t===void 0)return"auto";if(typeof t!="nu\
mber"){if(_l(t)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return"a\
uto"}let r=Math.floor(t);if(!Number.isFinite(r)||r<0||r>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or\
 0 through 9, not ${t}`);return r}function Bo(e,t){switch(e){case"minute":return{precision:"minute",unit:"minute",increment:1};case"\
second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"\
microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}
switch(t){case"auto":return{precision:t,unit:"nanosecond",increment:1};case 0:return{precision:t,unit:"second",increment:1};case 1:case 2:case 3:
return{precision:t,unit:"millisecond",increment:10**(3-t)};case 4:case 5:case 6:return{precision:t,unit:"microsecond",increment:10**
(6-t)};case 7:case 8:case 9:return{precision:t,unit:"nanosecond",increment:10**(9-t)};default:throw new RangeError(`frac\
tionalSecondDigits must be 'auto' or 0 through 9, not ${t}`)}}var $n=Symbol("~required~");function dr(e,t,r,n,a=[]){let i=[];
for(let c=0;c<ai.length;c++){let u=ai[c],d=u[1],f=u[2];r!=="datetime"&&r!==f||i.push(d)}i=i.concat(a);let o=n;o===$n?o=void 0:
o!==void 0&&i.push(o);let s=[];s=s.concat(i);for(let c=0;c<i.length;c++){let u=i[c],d=wE[u];d!==void 0&&s.push(d)}let l=_n(
e,t,s,o);if(l===void 0&&n===$n)throw new RangeError(`${t} is required`);return l&&l in gm?gm[l]:l}function Su(e){let t=e.
relativeTo;if(t===void 0)return{};let r,n,a,i,o,s="option",l=!1;if(nt(t)){if(be(t))return{zonedRelativeTo:t};if(tt(t))return{
plainRelativeTo:t};if(Ve(t))return{plainRelativeTo:Qt(g(t,Ke).isoDate,g(t,j))};a=Yo(t);let c=Sr(a,t,["year","month","mon\
thCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],[]);({isoDate:r,time:n}=
Wo(a,c,"constrain")),{offset:o,timeZone:i}=c,o===void 0&&(s="wall")}else{let c,u,d,f,h;if({year:d,month:f,day:h,time:n,calendar:a,
tzAnnotation:c,offset:o,z:u}=on(mt(t)),c)i=er(c),u?s="exact":o||(s="wall"),l=!0;else if(u)throw new RangeError("Z design\
ator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");a||(a="iso8601"),a=nr(a),
r={year:d,month:f,day:h}}return i===void 0?{plainRelativeTo:Qt(r,a)}:{zonedRelativeTo:Nt(ul(r,n,s,s==="option"?pi(o):0,i,
"compatible","reject",l),i,a)}}function wn(e){return g(e,qt)!==0?"year":g(e,Vt)!==0?"month":g(e,lr)!==0?"week":g(e,Yt)!==
0?"day":g(e,zt)!==0?"hour":g(e,Kt)!==0?"minute":g(e,Gt)!==0?"second":g(e,Jt)!==0?"millisecond":g(e,Zt)!==0?"microsecond":
"nanosecond"}function En(e,t){return ho.indexOf(e)>ho.indexOf(t)?t:e}function Xr(e){return e==="year"||e==="month"||e===
"week"}function Tn(e){return Xr(e)||e==="day"?"date":"time"}function ta(e){return At("%calendarImpl%")(e)}function Ho(e){
return At("%calendarImpl%")(g(e,j))}function tr(e,t,r="date"){let n=Object.create(null),a=ta(e).isoToDate(t,{year:!0,monthCode:!0,
day:!0});return n.monthCode=a.monthCode,r!=="month-day"&&r!=="date"||(n.day=a.day),r!=="year-month"&&r!=="date"||(n.year=
a.year),n}function Sr(e,t,r,n,a){let i=ta(e).extraFields(r),o=r.concat(n,i),s=Object.create(null),l=!1;o.sort();for(let c=0;c<
o.length;c++){let u=o[c],d=t[u];if(d!==void 0)l=!0,s[u]=(0,vE[u])(d);else if(a!=="partial"){if(a.includes(u))throw new TypeError(
`required property '${u}' missing or undefined`);s[u]=bE[u]}}if(a==="partial"&&!l)throw new TypeError("no supported prop\
erties found");return s}function Mu(e,t="complete"){let r=["hour","microsecond","millisecond","minute","nanosecond","sec\
ond"],n=!1,a=Object.create(null);for(let i=0;i<r.length;i++){let o=r[i],s=e[o];s!==void 0?(a[o]=se(s),n=!0):t==="complet\
e"&&(a[o]=0)}if(!n)throw new TypeError("invalid time-like");return a}function io(e,t){if(nt(e)){if(tt(e))return $e(J(t)),
Qt(g(e,ne),g(e,j));if(be(e)){let l=Mr(g(e,Ie),g(e,re));return $e(J(t)),Qt(l.isoDate,g(e,j))}if(Ve(e))return $e(J(t)),Qt(
g(e,Ke).isoDate,g(e,j));let s=Yo(e);return Qt(Qn(s,Sr(s,e,["year","month","monthCode","day"],[],[]),$e(J(t))),s)}let{year:r,
month:n,day:a,calendar:i,z:o}=on(mt(e));if(o)throw new RangeError("Z designator not supported for PlainDate");return i||
(i="iso8601"),i=nr(i),$e(J(t)),Qt({year:r,month:n,day:a},i)}function Wo(e,t,r){return Re(Qn(e,t,r),$l(t.hour,t.minute,t.
second,t.millisecond,t.microsecond,t.nanosecond,r))}function oo(e,t){let r,n,a;if(nt(e)){if(Ve(e))return $e(J(t)),Cr(g(e,
Ke),g(e,j));if(be(e)){let s=Mr(g(e,Ie),g(e,re));return $e(J(t)),Cr(s,g(e,j))}if(tt(e))return $e(J(t)),Cr(Re(g(e,ne),{deltaDays:0,
hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),g(e,j));a=Yo(e);let i=Sr(a,e,["year","month","monthC\
ode","day"],["hour","minute","second","millisecond","microsecond","nanosecond"],[]),o=$e(J(t));({isoDate:r,time:n}=Wo(a,
i,o))}else{let i,o,s,l;if({year:o,month:s,day:l,time:n,calendar:a,z:i}=on(mt(e)),i)throw new RangeError("Z designator no\
t supported for PlainDateTime");n==="start-of-day"&&(n={deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0}),vd(o,s,l,n.hour,n.minute,n.second,n.millisecond,n.microsecond,n.nanosecond),a||(a="iso8601"),a=nr(a),$e(J(
t)),r={year:o,month:s,day:l}}return Cr(Re(r,n),a)}function Pr(e){let t=At("%Temporal.Duration%");if(et(e))return new t(g(
e,qt),g(e,Vt),g(e,lr),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,Zt),g(e,cr));if(!nt(e))return function(a){let{years:i,
months:o,weeks:s,days:l,hours:c,minutes:u,seconds:d,milliseconds:f,microseconds:h,nanoseconds:y}=function(b){let T=dE.exec(
b);if(!T)throw new RangeError(`invalid duration: ${b}`);if(T.every((Un,da)=>da<2||Un===void 0))throw new RangeError(`inv\
alid duration: ${b}`);let k=T[1]==="-"?-1:1,S=T[2]===void 0?0:se(T[2])*k,_=T[3]===void 0?0:se(T[3])*k,I=T[4]===void 0?0:
se(T[4])*k,N=T[5]===void 0?0:se(T[5])*k,W=T[6]===void 0?0:se(T[6])*k,V=T[7],Q=T[8],F=T[9],ye=T[10],G=T[11],ue=0,Fe=0,Se=0;
if(V!==void 0){if(Q??F??ye??G)throw new RangeError("only the smallest unit can be fractional");Se=3600*se((V+"000000000").
slice(0,9))*k}else if(ue=Q===void 0?0:se(Q)*k,F!==void 0){if(ye??G)throw new RangeError("only the smallest unit can be f\
ractional");Se=60*se((F+"000000000").slice(0,9))*k}else Fe=ye===void 0?0:se(ye)*k,G!==void 0&&(Se=se((G+"000000000").slice(
0,9))*k);let ze=Se%1e3,jt=Math.trunc(Se/1e3)%1e3,Ot=Math.trunc(Se/1e6)%1e3;return Fe+=Math.trunc(Se/1e9)%60,ue+=Math.trunc(
Se/6e10),Cl(S,_,I,N,W,ue,Fe,Ot,jt,ze),{years:S,months:_,weeks:I,days:N,hours:W,minutes:ue,seconds:Fe,milliseconds:Ot,microseconds:jt,
nanoseconds:ze}}(a);return new(At("%Temporal.Duration%"))(i,o,s,l,c,u,d,f,h,y)}(mt(e));let r={years:0,months:0,weeks:0,days:0,
hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0},n=fg(e);for(let a=0;a<cl.length;a++){let i=cl[a],
o=n[i];o!==void 0&&(r[i]=o)}return new t(r.years,r.months,r.weeks,r.days,r.hours,r.minutes,r.seconds,r.milliseconds,r.microseconds,
r.nanoseconds)}function so(e){let t;if(nt(e)){if(Et(e)||be(e))return Vr(g(e,re));t=Nu(e)}else t=e;let{year:r,month:n,day:a,
time:i,offset:o,z:s}=function(b){let T=on(b);if(!T.z&&!T.offset)throw new RangeError("Temporal.Instant requires a time z\
one offset");return T}(mt(t)),{hour:l=0,minute:c=0,second:u=0,millisecond:d=0,microsecond:f=0,nanosecond:h=0}=i==="start\
-of-day"?{}:i,y=Eo(r,n,a,l,c,u,d,f,h-(s?0:pi(o)));return ti(y.isoDate),Vr(_t(y))}function vm(e,t){if(nt(e)){if(vr(e))return $e(
J(t)),Qa(g(e,ne),g(e,j));let s;return rr(e,j)?s=g(e,j):(s=e.calendar,s===void 0&&(s="iso8601"),s=Vo(s)),Qa(dl(s,Sr(s,e,[
"year","month","monthCode","day"],[],[]),$e(J(t))),s)}let{month:r,day:n,referenceISOYear:a,calendar:i}=hd(mt(e));if(i===
void 0&&(i="iso8601"),i=nr(i),$e(J(t)),i==="iso8601")return Qa({year:1972,month:r,day:n},i);let o={year:a,month:r,day:n};
return Oa(o),o=dl(i,tr(i,o,"month-day"),"constrain"),Qa(o,i)}function Kn(e,t){let r;if(nt(e)){if(ot(e))return $e(J(t)),kn(
g(e,rt));if(Ve(e))return $e(J(t)),kn(g(e,Ke).time);if(be(e)){let c=Mr(g(e,Ie),g(e,re));return $e(J(t)),kn(c.time)}let{hour:n,
minute:a,second:i,millisecond:o,microsecond:s,nanosecond:l}=Mu(e);r=$l(n,a,i,o,s,l,$e(J(t)))}else r=cg(mt(e)),$e(J(t));return kn(
r)}function hg(e){return e===void 0?{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}:g(Kn(
e),rt)}function lo(e,t){if(nt(e)){if(xt(e))return $e(J(t)),ei(g(e,ne),g(e,j));let s=Yo(e);return ei(To(s,Sr(s,e,["year",
"month","monthCode"],[],[]),$e(J(t))),s)}let{year:r,month:n,referenceISODay:a,calendar:i}=fd(mt(e));i===void 0&&(i="iso8\
601"),i=nr(i),$e(J(t));let o={year:r,month:n,day:a};return bd(o),o=To(i,tr(i,o,"year-month"),"constrain"),ei(o,i)}function ul(e,t,r,n,a,i,o,s){
if(t==="start-of-day")return Yn(a,e);let l=Re(e,t);if(r==="wall"||o==="ignore")return Mt(a,l,i);if(r==="exact"||o==="use"){
let d=Eo(e.year,e.month,e.day,t.hour,t.minute,t.second,t.millisecond,t.microsecond,t.nanosecond-n);ti(d.isoDate);let f=_t(
d);return nn(f),f}ti(e);let c=_t(l),u=ko(a,l);for(let d=0;d<u.length;d++){let f=u[d],h=$.default.toNumber($.default.subtract(
c,f)),y=Gn(h,6e10,"halfExpand");if(h===n||s&&y===n)return f}if(o==="reject"){let d=Du(n),f=So(l,"iso8601","auto");throw new RangeError(
`Offset ${d} is invalid for ${f} in ${a}`)}return Sg(u,a,l,i)}function co(e,t){let r,n,a,i,o,s,l,c=!1,u="option";if(nt(e)){
if(be(e)){let b=J(t);return go(b),il(b,"reject"),$e(b),Nt(g(e,re),g(e,Ie),g(e,j))}o=Yo(e);let f=Sr(o,e,["year","month","\
monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond","offset","timeZone"],["timeZone"]);
({offset:i,timeZone:a}=f),i===void 0&&(u="wall");let h=J(t);s=go(h),l=il(h,"reject");let y=$e(h);({isoDate:r,time:n}=Wo(
o,f,y))}else{let f,h,y,b,T;({year:y,month:b,day:T,time:n,tzAnnotation:f,offset:i,z:h,calendar:o}=function(S){let _=on(S);
if(!_.tzAnnotation)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return _}(mt(e))),
a=er(f),h?u="exact":i||(u="wall"),o||(o="iso8601"),o=nr(o),c=!0;let k=J(t);s=go(k),l=il(k,"reject"),$e(k),r={year:y,month:b,
day:T}}let d=0;return u==="option"&&(d=pi(i)),Nt(ul(r,n,u,d,a,s,l,c),a,o)}function mg(e,t,r){Oa(t),On(e),fe(e,ne,t),fe(e,
j,r),fe(e,Ym,!0)}function Qt(e,t){let r=At("%Temporal.PlainDate%"),n=Object.create(r.prototype);return mg(n,e,t),n}function gg(e,t,r){
Ea(t),On(e),fe(e,Ke,t),fe(e,j,r)}function Cr(e,t){let r=At("%Temporal.PlainDateTime%"),n=Object.create(r.prototype);return gg(
n,e,t),n}function yg(e,t,r){Oa(t),On(e),fe(e,ne,t),fe(e,j,r),fe(e,Km,!0)}function Qa(e,t){let r=At("%Temporal.PlainMonth\
Day%"),n=Object.create(r.prototype);return yg(n,e,t),n}function vg(e,t){On(e),fe(e,rt,t)}function kn(e){let t=At("%Tempo\
ral.PlainTime%"),r=Object.create(t.prototype);return vg(r,e),r}function bg(e,t,r){bd(t),On(e),fe(e,ne,t),fe(e,j,r),fe(e,
zm,!0)}function ei(e,t){let r=At("%Temporal.PlainYearMonth%"),n=Object.create(r.prototype);return bg(n,e,t),n}function wg(e,t){
nn(t),On(e),fe(e,re,t)}function Vr(e){let t=At("%Temporal.Instant%"),r=Object.create(t.prototype);return wg(r,e),r}function Tg(e,t,r,n){
nn(t),On(e),fe(e,re,t),fe(e,Ie,r),fe(e,j,n)}function Nt(e,t,r="iso8601"){let n=At("%Temporal.ZonedDateTime%"),a=Object.create(
n.prototype);return Tg(a,e,t,r),a}function bm(e){return Pu.filter(t=>e[t]!==void 0)}function ka(e,t,r){let n=bm(r),a=ta(
e).fieldKeysToIgnore(n),i=Object.create(null),o=bm(t);for(let s=0;s<Pu.length;s++){let l,c=Pu[s];o.includes(c)&&!a.includes(
c)&&(l=t[c]),n.includes(c)&&(l=r[c]),l!==void 0&&(i[c]=l)}return i}function Tr(e,t,r,n){let a=ta(e).dateAdd(t,r,n);return Oa(
a),a}function qo(e,t,r,n){return ta(e).dateUntil(t,r,n)}function Vo(e){if(nt(e)&&rr(e,j))return g(e,j);let t=mt(e);try{return nr(
t)}catch{}let r;try{({calendar:r}=on(t))}catch{try{({calendar:r}=cg(t))}catch{try{({calendar:r}=fd(t))}catch{({calendar:r}=
hd(t))}}}return r||(r="iso8601"),nr(r)}function Yo(e){if(rr(e,j))return g(e,j);let{calendar:t}=e;return t===void 0?"iso8\
601":Vo(t)}function rn(e,t){return nr(e)===nr(t)}function Qn(e,t,r){let n=ta(e);n.resolveFields(t,"date");let a=n.dateToISO(
t,r);return Oa(a),a}function To(e,t,r){let n=ta(e);n.resolveFields(t,"year-month"),t.day=1;let a=n.dateToISO(t,r);return bd(
a),a}function dl(e,t,r){let n=ta(e);n.resolveFields(t,"month-day");let a=n.monthDayToISOReferenceDate(t,r);return Oa(a),
a}function er(e){if(nt(e)&&be(e))return g(e,Ie);let t=mt(e);if(t==="UTC")return"UTC";let{tzName:r,offsetMinutes:n}=function(i){
let{tzAnnotation:o,offset:s,z:l}=function(c){if(ug.test(c))return{tzAnnotation:c,offset:void 0,z:!1};try{let{tzAnnotation:u,
offset:d,z:f}=on(c);if(f||u||d)return{tzAnnotation:u,offset:d,z:f}}catch{}pg(c)}(i);return o?Jn(o):l?Jn("UTC"):s?Jn(s):void 0}(
t);if(n!==void 0)return md(n);let a=pl(r);if(!a)throw new RangeError(`Unrecognized time zone ${r}`);return a.identifier}
function kg(e,t){if(e===t)return!0;let r=Jn(e).offsetMinutes,n=Jn(t).offsetMinutes;if(r===void 0&&n===void 0){let a=pl(t);
if(!a)return!1;let i=pl(e);return!!i&&i.primaryIdentifier===a.primaryIdentifier}return r===n}function Sn(e,t){let r=Jn(e).
offsetMinutes;return r!==void 0?6e10*r:ju(e,t)}function Du(e){let t=e<0?"-":"+",r=Math.abs(e),n=Math.floor(r/36e11),a=Math.
floor(r/6e10)%60,i=Math.floor(r/1e9)%60,o=r%1e9;return`${t}${Rl(n,a,i,o,i===0&&o===0?"minute":"auto")}`}function Mr(e,t){
let r=Sn(e,t),{isoDate:{year:n,month:a,day:i},time:{hour:o,minute:s,second:l,millisecond:c,microsecond:u,nanosecond:d}}=_g(
t);return Eo(n,a,i,o,s,l,c,u,d+r)}function Mt(e,t,r){return Sg(ko(e,t),e,t,r)}function Sg(e,t,r,n){let a=e.length;if(a===
1)return e[0];if(a)switch(n){case"compatible":case"earlier":return e[0];case"later":return e[a-1];case"reject":throw new RangeError(
"multiple instants found")}if(n==="reject")throw new RangeError("multiple instants found");let i=_t(r),o=$.default.subtract(
i,Zn);nn(o);let s=Sn(t,o),l=$.default.add(i,Zn);nn(l);let c=Sn(t,l)-s;switch(n){case"earlier":{let u=Be.fromComponents(0,
0,0,0,0,-c),d=oi(r.time,u);return ko(t,Re(pr(r.isoDate.year,r.isoDate.month,r.isoDate.day+d.deltaDays),d))[0]}case"compa\
tible":case"later":{let u=Be.fromComponents(0,0,0,0,0,c),d=oi(r.time,u),f=ko(t,Re(pr(r.isoDate.year,r.isoDate.month,r.isoDate.
day+d.deltaDays),d));return f[f.length-1]}}}function ko(e,t){if(e==="UTC")return ti(t.isoDate),[_t(t)];let r=Jn(e).offsetMinutes;
if(r!==void 0){let n=Eo(t.isoDate.year,t.isoDate.month,t.isoDate.day,t.time.hour,t.time.minute-r,t.time.second,t.time.millisecond,
t.time.microsecond,t.time.nanosecond);ti(n.isoDate);let a=_t(n);return nn(a),[a]}return ti(t.isoDate),function(n,a){let i=_t(
a),o=$.default.subtract(i,Zn);$.default.lessThan(o,bo)&&(o=i);let s=$.default.add(i,Zn);$.default.greaterThan(s,ni)&&(s=
i);let l=ju(n,o),c=ju(n,s);return(l===c?[l]:[l,c]).map(d=>{let f=$.default.subtract(i,$.default.BigInt(d)),h=function(y,b){
let{epochMilliseconds:T,time:{millisecond:k,microsecond:S,nanosecond:_}}=_g(b),{year:I,month:N,day:W,hour:V,minute:Q,second:F}=Ag(
y,T);return Eo(I,N,W,V,Q,F,k,S,_)}(n,f);if(si(a,h)===0)return nn(f),f}).filter(d=>d!==void 0)}(e,t)}function Yn(e,t){let r=Re(
t,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),n=ko(e,r);if(n.length)return n[0];let a=_t(
r),i=$.default.subtract(a,Zn);return nn(i),yd(e,i)}function zo(e){let t;return t=e<0||e>9999?(e<0?"-":"+")+wo(Math.abs(e),
6):wo(e,4),t}function kr(e){return wo(e,2)}function Eg(e,t){let r;if(t==="auto"){if(e===0)return"";r=wo(e,9).replace(/0+$/,
"")}else{if(t===0)return"";r=wo(e,9).slice(0,t)}return`.${r}`}function Rl(e,t,r,n,a){let i=`${kr(e)}:${kr(t)}`;return a===
"minute"||(i+=`:${kr(r)}`,i+=Eg(n,a)),i}function wm(e,t,r){let n=t;n===void 0&&(n="UTC");let a=g(e,re),i=So(Mr(n,a),"iso\
8601",r,"never"),o="Z";return t!==void 0&&(o=xg(Sn(n,a))),`${i}${o}`}function al(e,t){let r=g(e,qt),n=g(e,Vt),a=g(e,lr),
i=g(e,Yt),o=g(e,zt),s=g(e,Kt),l=hl(e),c="";r!==0&&(c+=`${Math.abs(r)}Y`),n!==0&&(c+=`${Math.abs(n)}M`),a!==0&&(c+=`${Math.
abs(a)}W`),i!==0&&(c+=`${Math.abs(i)}D`);let u="";o!==0&&(u+=`${Math.abs(o)}H`),s!==0&&(u+=`${Math.abs(s)}M`);let d=Be.fromComponents(
0,0,g(e,Gt),g(e,Jt),g(e,Zt),g(e,cr));d.isZero()&&!["second","millisecond","microsecond","nanosecond"].includes(wn(e))&&t===
"auto"||(u+=`${Math.abs(d.sec)}${Eg(Math.abs(d.subsec),t)}S`);let f=`${l<0?"-":""}P${c}`;return u&&(f=`${f}T${u}`),f}function Tm(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne);return`${zo(r)}-${kr(n)}-${kr(a)}${Lo(g(e,j),t)}`}function km({hour:e,minute:t,
second:r,millisecond:n,microsecond:a,nanosecond:i},o){return Rl(e,t,r,1e6*n+1e3*a+i,o)}function So(e,t,r,n="auto"){let{isoDate:{
year:a,month:i,day:o},time:{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f}}=e;return`${zo(a)}-${kr(i)}\
-${kr(o)}T${Rl(s,l,c,1e6*u+1e3*d+f,r)}${Lo(t,n)}`}function Sm(e,t="auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${kr(n)}-${kr(
a)}`,o=g(e,j);t!=="always"&&t!=="critical"&&o==="iso8601"||(i=`${zo(r)}-${i}`);let s=Lo(o,t);return s&&(i+=s),i}function Em(e,t="\
auto"){let{year:r,month:n,day:a}=g(e,ne),i=`${zo(r)}-${kr(n)}`,o=g(e,j);t!=="always"&&t!=="critical"&&o==="iso8601"||(i+=
`-${kr(a)}`);let s=Lo(o,t);return s&&(i+=s),i}function xm(e,t,r="auto",n="auto",a="auto",i=void 0){let o=g(e,re);if(i){let{
unit:u,increment:d,roundingMode:f}=i;o=Bu(o,d,u,f)}let s=g(e,Ie),l=Sn(s,o),c=So(Mr(s,o),"iso8601",t,"never");return a!==
"never"&&(c+=xg(l)),n!=="never"&&(c+=`[${n==="critical"?"!":""}${s}]`),c+=Lo(g(e,j),r),c}function _m(e){return dg.test(e)}
function pi(e){let t=EE.exec(e);if(!t)throw new RangeError(`invalid time zone offset: ${e}; must match \xB1HH:MM[:SS.SSSSSS\
SSS]`);return(t[1]==="-"?-1:1)*(1e9*(60*(60*+t[2]+ +(t[3]||0))+ +(t[4]||0))+ +((t[5]||0)+"000000000").slice(0,9))}var eo,
kE=Object.assign(Object.create(null),{"/":!0,"-":!0,_:!0});function pl(e){if(eo===void 0){let i=Intl.supportedValuesOf?.(
"timeZone");if(i){eo=new Map;for(let o=0;o<i.length;o++){let s=i[o];eo.set(xo(s),s)}}else eo=null}let t=xo(e),r=eo?.get(
t);if(r)return{identifier:r,primaryIdentifier:r};try{r=lg(e).resolvedOptions().timeZone}catch{return}if(t==="antarctica/\
south_pole"&&(r="Antarctica/McMurdo"),yE.has(e))throw new RangeError(`${e} is a legacy time zone identifier from ICU. Us\
e ${r} instead`);let n=[...t].map((i,o)=>o===0||kE[t[o-1]]?i.toUpperCase():i).join("").split("/");if(n.length===1)return t===
"gb-eire"?{identifier:"GB-Eire",primaryIdentifier:r}:{identifier:t.length<=3||/[-0-9]/.test(t)?t.toUpperCase():n[0],primaryIdentifier:r};
if(n[0]==="Etc")return{identifier:`Etc/${["Zulu","Greenwich","Universal"].includes(n[1])?n[1]:n[1].toUpperCase()}`,primaryIdentifier:r};
if(n[0]==="Us")return{identifier:`US/${n[1]}`,primaryIdentifier:r};let a=new Map([["Act","ACT"],["Lhi","LHI"],["Nsw","NS\
W"],["Dar_Es_Salaam","Dar_es_Salaam"],["Port_Of_Spain","Port_of_Spain"],["Port-Au-Prince","Port-au-Prince"],["Isle_Of_Ma\
n","Isle_of_Man"],["Comodrivadavia","ComodRivadavia"],["Knox_In","Knox_IN"],["Dumontdurville","DumontDUrville"],["Mcmurd\
o","McMurdo"],["Denoronha","DeNoronha"],["Easterisland","EasterIsland"],["Bajanorte","BajaNorte"],["Bajasur","BajaSur"]]);
return n[1]=a.get(n[1])??n[1],n.length>2&&(n[2]=a.get(n[2])??n[2]),{identifier:n.join("/"),primaryIdentifier:r}}function wa(e,t){
let{year:r,month:n,day:a,hour:i,minute:o,second:s}=Ag(e,t),l=t%1e3;return l<0&&(l+=1e3),1e6*(gd({isoDate:{year:r,month:n,
day:a},time:{hour:i,minute:o,second:s,millisecond:l}})-t)}function ju(e,t){return wa(e,Dr(t,"floor"))}function md(e){let t=e<
0?"-":"+",r=Math.abs(e);return`${t}${Rl(Math.floor(r/60),r%60,0,0,"minute")}`}function xg(e){return md(Gn(e,pE,"halfExpa\
nd")/6e10)}function gd({isoDate:{year:e,month:t,day:r},time:{hour:n,minute:a,second:i,millisecond:o}}){let s=e%400,l=(e-
s)/400,c=new Date;return c.setUTCHours(n,a,i,o),c.setUTCFullYear(s,t-1,r),c.getTime()+mE*l}function _t(e){let t=gd(e),r=1e3*
e.time.microsecond+e.time.nanosecond;return $.default.add(Yr(t),$.default.BigInt(r))}function _g(e){let t=Dr(e,"trunc"),
r=$.default.toNumber($.default.remainder(e,Do));r<0&&(r+=1e6,t-=1);let n=Math.floor(r/1e3)%1e3,a=r%1e3,i=new Date(t);return{
epochMilliseconds:t,isoDate:{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate()},time:{hour:i.getUTCHours(),
minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds(),microsecond:n,nanosecond:a}}}function yd(e,t){
if(e==="UTC")return null;let r=Dr(t,"floor");if(r<fo)return yd(e,Yr(fo));let n=Date.now(),a=Math.max(r,n)+366*Xn*3,i=r,o=wa(
e,i),s=i,l=o;for(;o===l&&i<a;){if(s=i+2*Xn*7,s>sg)return null;l=wa(e,s),o===l&&(i=s)}return o===l?null:Yr(jg(c=>wa(e,c),
i,s,o,l))}function Lu(e,t){if(e==="UTC")return null;let r=Dr(t,"ceil"),n=Date.now(),a=n+366*Xn*3;if(r>a){let c=Lu(e,Yr(a));
if(c===null||$.default.lessThan(c,Yr(n)))return c}if(e==="Africa/Casablanca"||e==="Africa/El_Aaiun"){let c=Date.UTC(2088,
0,1);if(c<r)return Lu(e,Yr(c))}let i=r-1;if(i<fo)return null;let o=wa(e,i),s=i,l=o;for(;o===l&&i>fo;){if(s=i-2*Xn*7,s<fo)
return null;l=wa(e,s),o===l&&(i=s)}return o===l?null:Yr(jg(c=>wa(e,c),s,i,l,o))}function Ag(e,t){return function(r){let n=r.
split(/[^\w]+/);if(n.length!==7)throw new RangeError(`expected 7 parts in "${r}`);let a=+n[0],i=+n[1],o=+n[2],s=n[3];if(s[0]===
"b"||s[0]==="B")o=1-o;else if(s[0]!=="a"&&s[0]!=="A")throw new RangeError(`Unknown era ${s} in "${r}`);let l=n[4]==="24"?
0:+n[4],c=+n[5],u=+n[6];if(!(Number.isFinite(o)&&Number.isFinite(a)&&Number.isFinite(i)&&Number.isFinite(l)&&Number.isFinite(
c)&&Number.isFinite(u)))throw new RangeError(`Invalid number in "${r}`);return{year:o,month:a,day:i,hour:l,minute:c,second:u}}(
lg(e).format(t))}function fl(e){return e!==void 0&&!(e%4!=0||e%100==0&&e%400!=0)}function Ta(e,t){return{standard:[31,28,
31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[fl(e)?"leapyear":"standard"][t-1]}function hl(e){
let t=[g(e,qt),g(e,Vt),g(e,lr),g(e,Yt),g(e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,Zt),g(e,cr)];for(let r=0;r<t.length;r++){let n=t[r];
if(n!==0)return n<0?-1:1}return 0}function Ol(e){let t=["years","months","weeks","days"];for(let r=0;r<t.length;r++){let n=e[t[r]];
if(n!==0)return n<0?-1:1}return 0}function $g(e){let t=Ol(e.date);return t!==0?t:e.time.sign()}function ba(e,t){let r=e,
n=t;if(!Number.isFinite(r)||!Number.isFinite(n))throw new RangeError("infinity is out of range");return n-=1,r+=Math.floor(
n/12),n%=12,n<0&&(n+=12),n+=1,{year:r,month:n}}function pr(e,t,r){let n=e,a=t,i=r;if(!Number.isFinite(i))throw new RangeError(
"infinity is out of range");({year:n,month:a}=ba(n,a));let o=146097;if(Math.abs(i)>o){let c=Math.trunc(i/o);n+=400*c,i-=
c*o}let s=0,l=a>2?n:n-1;for(;s=fl(l)?366:365,i<-s;)n-=1,l-=1,i+=s;for(l+=1;s=fl(l)?366:365,i>s;)n+=1,l+=1,i-=s;for(;i<1;)
({year:n,month:a}=ba(n,a-1)),i+=Ta(n,a);for(;i>Ta(n,a);)i-=Ta(n,a),{year:n,month:a}=ba(n,a+1);return{year:n,month:a,day:i}}
function Eo(e,t,r,n,a,i,o,s,l){let c=zn(n,a,i,o,s,l);return Re(pr(e,t,r+c.deltaDays),c)}function zn(e,t,r,n,a,i){let o,s=e,
l=t,c=r,u=n,d=a,f=i;({div:o,mod:f}=Xa(f,3)),d+=o,f<0&&(d-=1,f+=1e3),{div:o,mod:d}=Xa(d,3),u+=o,d<0&&(u-=1,d+=1e3),c+=Math.
trunc(u/1e3),u%=1e3,u<0&&(c-=1,u+=1e3),l+=Math.trunc(c/60),c%=60,c<0&&(l-=1,c+=60),s+=Math.trunc(l/60),l%=60,l<0&&(s-=1,
l+=60);let h=Math.trunc(s/24);return s%=24,s<0&&(h-=1,s+=24),h+=0,s+=0,l+=0,c+=0,u+=0,d+=0,f+=0,{deltaDays:h,hour:s,minute:l,
second:c,millisecond:u,microsecond:d,nanosecond:f}}function Am(e,t){let r=Pt(e,0);if(Ol(r)===0)return e.days;let n=g(t,ne),
a=Tr(g(t,j),n,r,"constrain"),i=xa(n.year,n.month-1,n.day),o=xa(a.year,a.month-1,a.day)-i;return e.days+o}function fr(e){
return new(At("%Temporal.Duration%"))(-g(e,qt),-g(e,Vt),-g(e,lr),-g(e,Yt),-g(e,zt),-g(e,Kt),-g(e,Gt),-g(e,Jt),-g(e,Zt),-g(
e,cr))}function Xt(e,t,r){return Math.min(r,Math.max(t,e))}function Rg(e,t,r){let n=Xt(t,1,12);return{year:e,month:n,day:Xt(
r,1,Ta(e,n))}}function Tt(e,t,r){if(e<t||e>r)throw new RangeError(`value out of range: ${t} <= ${e} <= ${r}`)}function Sa(e,t,r){
Tt(t,1,12),Tt(r,1,Ta(e,t))}function Oa(e){Ea(Re(e,{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}))}
function Il(e,t,r,n,a,i){Tt(e,0,23),Tt(t,0,59),Tt(r,0,59),Tt(n,0,999),Tt(a,0,999),Tt(i,0,999)}function vd(e,t,r,n,a,i,o,s,l){
Sa(e,t,r),Il(n,a,i,o,s,l)}function Ea(e){let t=_t(e);($.default.lessThan(t,fE)||$.default.greaterThan(t,hE))&&nn(t)}function Uu(e){
_t(e)}function nn(e){if($.default.lessThan(e,bo)||$.default.greaterThan(e,ni))throw new RangeError("date/time value is o\
utside of supported range")}function bd({year:e,month:t}){Tt(e,fm,hm),e===fm?Tt(t,4,12):e===hm&&Tt(t,1,9)}function Cl(e,t,r,n,a,i,o,s,l,c){
let u=0,d=[e,t,r,n,a,i,o,s,l,c];for(let k=0;k<d.length;k++){let S=d[k];if(S===1/0||S===-1/0)throw new RangeError("infini\
te values not allowed as duration fields");if(S!==0){let _=S<0?-1:1;if(u!==0&&_!==u)throw new RangeError("mixed-sign val\
ues not allowed as duration fields");u=_}}if(Math.abs(e)>=2**32||Math.abs(t)>=2**32||Math.abs(r)>=2**32)throw new RangeError(
"years, months, and weeks must be < 2\xB3\xB2");let f=Xa(s,3),h=Xa(l,6),y=Xa(c,9),b=Xa(1e6*f.mod+1e3*h.mod+y.mod,9).div,
T=86400*n+3600*a+60*i+o+f.div+h.div+y.div+b;if(!Number.isSafeInteger(T))throw new RangeError("total of duration time uni\
ts cannot exceed 9007199254740991.999999999 s")}function Za(e){return{date:{years:g(e,qt),months:g(e,Vt),weeks:g(e,lr),days:g(
e,Yt)},time:Be.fromComponents(g(e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,Zt),g(e,cr))}}function en(e){let t=Be.fromComponents(g(
e,zt),g(e,Kt),g(e,Gt),g(e,Jt),g(e,Zt),g(e,cr)).add24HourDays(g(e,Yt));return{date:{years:g(e,qt),months:g(e,Vt),weeks:g(
e,lr),days:0},time:t}}function Og(e){let t=en(e),r=Math.trunc(t.time.sec/86400);return Cl(t.date.years,t.date.months,t.date.
weeks,r,0,0,0,0,0,0),{...t.date,days:r}}function Nr(e,t){let r=e.time.sign(),n=e.time.abs().subsec,a=0,i=0,o=e.time.abs().
sec,s=0,l=0,c=0;switch(t){case"year":case"month":case"week":case"day":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=
1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(s/60),s%=60,c=Math.trunc(l/24),l%=24;break;case"ho\
ur":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.trunc(o/60),o%=60,l=Math.trunc(
s/60),s%=60;break;case"minute":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3,s=Math.
trunc(o/60),o%=60;break;case"second":a=Math.trunc(n/1e3),n%=1e3,i=Math.trunc(a/1e3),a%=1e3,o+=Math.trunc(i/1e3),i%=1e3;break;case"\
millisecond":a=Math.trunc(n/1e3),n%=1e3,i=Tu(o,3,Math.trunc(a/1e3)),a%=1e3,o=0;break;case"microsecond":a=Tu(o,6,Math.trunc(
n/1e3)),n%=1e3,o=0;break;case"nanosecond":n=Tu(o,9,n),o=0}return new(At("%Temporal.Duration%"))(e.date.years,e.date.months,
e.date.weeks,e.date.days+r*c,r*l,r*s,r*o,r*i,r*a,r*n)}function xn(e,t){return Ol(e),t.sign(),{date:e,time:t}}function xa(e,t,r){
return gd({isoDate:{year:e,month:t+1,day:r},time:{hour:0,minute:0,second:0,millisecond:0}})/Xn}function ti({year:e,month:t,
day:r}){if(Math.abs(xa(e,t-1,r))>1e8)throw new RangeError("date/time value is outside the supported range")}function wd(e,t){
let r=t.hour-e.hour,n=t.minute-e.minute,a=t.second-e.second,i=t.millisecond-e.millisecond,o=t.microsecond-e.microsecond,
s=t.nanosecond-e.nanosecond;return Be.fromComponents(r,n,a,i,o,s)}function Td(e,t,r,n,a){let i=Be.fromEpochNsDiff(t,e);return i=
ml(i,r,n,a),xn({years:0,months:0,weeks:0,days:0},i)}function Ig(e,t,r,n){Uu(e),Uu(t);let a=wd(e.time,t.time),i=a.sign(),
o=an(e.isoDate,t.isoDate),s=t.isoDate;o===i&&(s=pr(s.year,s.month,s.day+i),a=a.add24HourDays(-i));let l=En("day",n),c=qo(
r,e.isoDate,s,l);return n!==l&&(a=a.add24HourDays(c.days),c.days=0),xn(c,a)}function Cg(e,t,r,n,a){let i=$.default.subtract(
t,e);if($.default.equal(i,br))return{date:{years:0,months:0,weeks:0,days:0},time:Be.ZERO};let o=$.default.lessThan(i,br)?
-1:1,s=Mr(r,e),l=Mr(r,t),c,u=0,d=o===1?2:1,f=wd(s.time,l.time);for(f.sign()===-o&&u++;u<=d;u++){c=Re(pr(l.isoDate.year,l.
isoDate.month,l.isoDate.day-u*o),s.time);let y=Mt(r,c,"compatible");if(f=Be.fromEpochNsDiff(t,y),f.sign()!==-o)break}let h=En(
"day",a);return xn(qo(n,s.isoDate,c.isoDate,h),f)}function Ng(e,t,r,n,a,i,o,s,l){let c,u,d,f,h=t;switch(s){case"year":{let ue=Gn(
h.date.years,o,"trunc");c=ue,u=ue+o*e,d={years:c,months:0,weeks:0,days:0},f={...d,years:u};break}case"month":{let ue=Gn(
h.date.months,o,"trunc");c=ue,u=ue+o*e,d=Pt(h.date,0,0,c),f=Pt(h.date,0,0,u);break}case"week":{let ue=Pt(h.date,0,0),Fe=Tr(
i,n.isoDate,ue,"constrain"),Se=qo(i,Fe,pr(Fe.year,Fe.month,Fe.day+h.date.days),"week"),ze=Gn(h.date.weeks+Se.weeks,o,"tr\
unc");c=ze,u=ze+o*e,d=Pt(h.date,0,c),f=Pt(h.date,0,u);break}case"day":{let ue=Gn(h.date.days,o,"trunc");c=ue,u=ue+o*e,d=
Pt(h.date,c),f=Pt(h.date,u);break}}let y=Tr(i,n.isoDate,d,"constrain"),b=Tr(i,n.isoDate,f,"constrain"),T,k,S=Re(y,n.time),
_=Re(b,n.time);a?(T=Mt(a,S,"compatible"),k=Mt(a,_,"compatible")):(T=_t(S),k=_t(_));let I=Be.fromEpochNsDiff(r,T),N=Be.fromEpochNsDiff(
k,T),W=Sl(l,e<0?"negative":"positive"),V=I.add(I).abs().subtract(N.abs()).sign(),Q=Math.abs(c)/o%2==0,F=I.isZero()?Math.
abs(c):I.cmp(N)?El(Math.abs(c),Math.abs(u),V,Q,W):Math.abs(u),ye=new Be($.default.add($.default.multiply(N.totalNs,$.default.
BigInt(c)),$.default.multiply(I.totalNs,$.default.BigInt(o*e)))).fdiv(N.totalNs),G=F===Math.abs(u);return h={date:G?f:d,
time:Be.ZERO},{nudgeResult:{duration:h,nudgedEpochNs:G?k:T,didExpandCalendarUnit:G},total:ye}}function Nl(e,t,r,n,a,i,o,s,l){
let c=e,u=Xr(s)||n&&s==="day",d=$g(c)<0?-1:1,f;return u?{nudgeResult:f}=Ng(d,c,t,r,n,a,o,s,l):f=n?function(h,y,b,T,k,S,_,I){
let N=y,W=Tr(k,b.isoDate,N.date,"constrain"),V=Re(W,b.time),Q=Re(pr(W.year,W.month,W.day+h),b.time),F=Mt(T,V,"compatible"),
ye=Mt(T,Q,"compatible"),G=Be.fromEpochNsDiff(ye,F);if(G.sign()!==h)throw new RangeError("time zone returned inconsistent\
 Instants");let ue=$.default.BigInt(ii[_]*S),Fe=N.time.round(ue,I),Se=Fe.subtract(G),ze=Se.sign()!==-h,jt,Ot;return ze?(jt=
h,Fe=Se.round(ue,I),Ot=Fe.addToEpochNs(ye)):(jt=0,Ot=Fe.addToEpochNs(F)),{duration:xn(Pt(N.date,N.date.days+jt),Fe),nudgedEpochNs:Ot,
didExpandCalendarUnit:ze}}(d,c,r,n,a,o,s,l):function(h,y,b,T,k,S){let _=h,I=_.time.add24HourDays(_.date.days),N=I.round(
$.default.BigInt(T*ii[k]),S),W=N.subtract(I),{quotient:V}=I.divmod(ll),{quotient:Q}=N.divmod(ll),F=Math.sign(Q-V)===I.sign(),
ye=W.addToEpochNs(y),G=0,ue=N;return Tn(b)==="date"&&(G=Q,ue=N.add(Be.fromComponents(24*-Q,0,0,0,0,0))),{duration:{date:Pt(
_.date,G),time:ue},nudgedEpochNs:ye,didExpandCalendarUnit:F}}(c,t,i,o,s,l),c=f.duration,f.didExpandCalendarUnit&&s!=="we\
ek"&&(c=function(h,y,b,T,k,S,_,I){let N=y;if(I===_)return N;let W=ho.indexOf(_);for(let V=ho.indexOf(I)-1;V>=W;V--){let Q=ho[V];
if(Q==="week"&&_!=="week")continue;let F;switch(Q){case"year":F={years:N.date.years+h,months:0,weeks:0,days:0};break;case"\
month":{let ue=N.date.months+h;F=Pt(N.date,0,0,ue);break}case"week":{let ue=N.date.weeks+h;F=Pt(N.date,0,ue);break}}let ye=Re(
Tr(S,T.isoDate,F,"constrain"),T.time),G;if(G=k?Mt(k,ye,"compatible"):_t(ye),ol(b,G)===-h)break;N={date:F,time:Be.ZERO}}return N}(
d,c,f.nudgedEpochNs,r,n,a,i,En(s,"day"))),c}function $m(e,t,r,n,a,i){return Xr(i)||n&&i==="day"?Ng($g(e)<0?-1:1,e,t,r,n,
a,1,i,"trunc").total:yo(e.time.add24HourDays(e.date.days),i)}function Pg(e,t,r,n,a,i,o){if(si(e,t)==0)return{date:{years:0,
months:0,weeks:0,days:0},time:Be.ZERO};Ea(e),Ea(t);let s=Ig(e,t,r,n);return i==="nanosecond"&&a===1?s:Nl(s,_t(t),e,null,
r,n,a,i,o)}function Mg(e,t,r,n,a,i,o,s){if(Tn(a)==="time")return Td(e,t,i,o,s);let l=Cg(e,t,r,n,a);return o==="nanosecon\
d"&&i===1?l:Nl(l,t,Mr(r,e),r,n,a,i,o,s)}function fi(e,t,r,n,a,i){let o=ai.reduce((h,y)=>{let b=y[0],T=y[1],k=y[2];return r!==
"datetime"&&k!==r||n.includes(T)||h.push(T,b),h},[]),s=dr(t,"largestUnit",r,"auto");if(n.includes(s))throw new RangeError(
`largestUnit must be one of ${o.join(", ")}, not ${s}`);let l=ui(t),c=zr(t,"trunc");e==="since"&&(c=function(h){switch(h){case"\
ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return h}}(
c));let u=dr(t,"smallestUnit",r,a);if(n.includes(u))throw new RangeError(`smallestUnit must be one of ${o.join(", ")}, n\
ot ${u}`);let d=En(i,u);if(s==="auto"&&(s=d),En(s,u)!==s)throw new RangeError(`largestUnit ${s} cannot be smaller than s\
mallestUnit ${u}`);let f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[u];return f!==void 0&&
di(l,f,!1),{largestUnit:s,roundingIncrement:l,roundingMode:c,smallestUnit:u}}function Rm(e,t,r,n){let a=so(r),i=fi(e,J(n),
"time",[],"nanosecond","second"),o=Nr(Td(g(t,re),g(a,re),i.roundingIncrement,i.smallestUnit,i.roundingMode),i.largestUnit);
return e==="since"&&(o=fr(o)),o}function Om(e,t,r,n){let a=io(r),i=g(t,j),o=g(a,j);if(!rn(i,o))throw new RangeError(`can\
not compute difference between dates of ${i} and ${o} calendars`);let s=fi(e,J(n),"date",[],"day","day"),l=At("%Temporal\
.Duration%"),c=g(t,ne),u=g(a,ne);if(an(c,u)===0)return new l;let d={date:qo(i,c,u,s.largestUnit),time:Be.ZERO};if(s.smallestUnit!==
"day"||s.roundingIncrement!==1){let h=Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});
d=Nl(d,_t(Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),h,null,i,s.largestUnit,
s.roundingIncrement,s.smallestUnit,s.roundingMode)}let f=Nr(d,"day");return e==="since"&&(f=fr(f)),f}function Im(e,t,r,n){
let a=oo(r),i=g(t,j),o=g(a,j);if(!rn(i,o))throw new RangeError(`cannot compute difference between dates of ${i} and ${o}\
 calendars`);let s=fi(e,J(n),"datetime",[],"nanosecond","day"),l=At("%Temporal.Duration%"),c=g(t,Ke),u=g(a,Ke);if(si(c,u)===
0)return new l;let d=Nr(Pg(c,u,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);return e===
"since"&&(d=fr(d)),d}function Cm(e,t,r,n){let a=Kn(r),i=fi(e,J(n),"time",[],"nanosecond","hour"),o=wd(g(t,rt),g(a,rt));o=
ml(o,i.roundingIncrement,i.smallestUnit,i.roundingMode);let s=Nr(xn({years:0,months:0,weeks:0,days:0},o),i.largestUnit);
return e==="since"&&(s=fr(s)),s}function Nm(e,t,r,n){let a=lo(r),i=g(t,j),o=g(a,j);if(!rn(i,o))throw new RangeError(`can\
not compute difference between months of ${i} and ${o} calendars`);let s=fi(e,J(n),"date",["week","day"],"month","year"),
l=At("%Temporal.Duration%");if(an(g(t,ne),g(a,ne))==0)return new l;let c=tr(i,g(t,ne),"year-month");c.day=1;let u=Qn(i,c,
"constrain"),d=tr(i,g(a,ne),"year-month");d.day=1;let f=Qn(i,d,"constrain"),h={date:Pt(qo(i,u,f,s.largestUnit),0,0),time:Be.
ZERO};if(s.smallestUnit!=="month"||s.roundingIncrement!==1){let b=Re(u,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,
microsecond:0,nanosecond:0});h=Nl(h,_t(Re(f,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0})),
b,null,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode)}let y=Nr(h,"day");return e==="since"&&(y=fr(y)),
y}function Pm(e,t,r,n){let a=co(r),i=g(t,j),o=g(a,j);if(!rn(i,o))throw new RangeError(`cannot compute difference between\
 dates of ${i} and ${o} calendars`);let s=fi(e,J(n),"datetime",[],"nanosecond","hour"),l=g(t,re),c=g(a,re),u=At("%Tempor\
al.Duration%"),d;if(Tn(s.largestUnit)!=="date")d=Nr(Td(l,c,s.roundingIncrement,s.smallestUnit,s.roundingMode),s.largestUnit);else{
let f=g(t,Ie);if(!kg(f,g(a,Ie)))throw new RangeError("When calculating difference between time zones, largestUnit must b\
e 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");if($.default.
equal(l,c))return new u;d=Nr(Mg(l,c,f,i,s.largestUnit,s.roundingIncrement,s.smallestUnit,s.roundingMode),"hour")}return e===
"since"&&(d=fr(d)),d}function oi({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o){let s=r,l=i;return s+=
o.sec,l+=o.subsec,zn(e,t,s,n,a,l)}function Fu(e,t){let r=t.addToEpochNs(e);return nn(r),r}function uo(e,t,r,n,a="constra\
in"){if(Ol(n.date)===0)return Fu(e,n.time);let i=Mr(t,e);return Fu(Mt(t,Re(Tr(r,i.isoDate,n.date,a),i.time),"compatible"),
n.time)}function Mm(e,t,r){let n=Pr(r);e==="subtract"&&(n=fr(n));let a=En(wn(t),wn(n));if(Xr(a))throw new RangeError("Fo\
r years, months, or weeks arithmetic, use date arithmetic relative to a starting point");let i=en(t),o=en(n);return Nr(xn(
{years:0,months:0,weeks:0,days:0},i.time.add(o.time)),a)}function Dm(e,t,r){let n=Pr(r);e==="subtract"&&(n=fr(n));let a=wn(
n);if(Tn(a)==="date")throw new RangeError(`Duration field ${a} not supported by Temporal.Instant. Try Temporal.ZonedDate\
Time instead.`);let i=en(n);return Vr(Fu(g(t,re),i.time))}function jm(e,t,r,n){let a=g(t,j),i=Pr(r);e==="subtract"&&(i=fr(
i));let o=Og(i),s=$e(J(n));return Qt(Tr(a,g(t,ne),o,s),a)}function Lm(e,t,r,n){let a=Pr(r);e==="subtract"&&(a=fr(a));let i=$e(
J(n)),o=g(t,j),s=en(a),l=g(t,Ke),c=oi(l.time,s.time),u=Pt(s.date,c.deltaDays);return Cl(u.years,u.months,u.weeks,u.days,
0,0,0,0,0,0),Cr(Re(Tr(o,l.isoDate,u,i),c),o)}function Um(e,t,r){let n=Pr(r);e==="subtract"&&(n=fr(n));let a=en(n),{hour:i,
minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=oi(g(t,rt),a.time);return kn($l(i,o,s,l,c,u,"reject"))}function Fm(e,t,r,n){
let a=Pr(r);e==="subtract"&&(a=fr(a));let i=$e(J(n)),o=hl(a),s=g(t,j),l=tr(s,g(t,ne),"year-month");l.day=1;let c=Qn(s,l,
"constrain");if(o<0){let d=Tr(s,c,{months:1},"constrain");c=pr(d.year,d.month,d.day-1)}let u=Og(a);return Oa(c),ei(To(s,
tr(s,Tr(s,c,u,i),"year-month"),i),s)}function Bm(e,t,r,n){let a=Pr(r);e==="subtract"&&(a=fr(a));let i=$e(J(n)),o=g(t,Ie),
s=g(t,j),l=Za(a);return Nt(uo(g(t,re),o,s,l,i),o,s)}function Gn(e,t,r){let n=Math.trunc(e/t),a=e%t,i=e<0?"negative":"pos\
itive",o=Math.abs(n),s=o+1,l=ur(Math.abs(2*a)-t),c=o%2==0,u=Sl(r,i),d=a===0?o:El(o,s,l,c,u);return t*(i==="positive"?d:-d)}
function Bu(e,t,r,n){let a=ii[r]*t;return function(i,o,s){let l=bn(i),c=bn(o),u=$.default.divide(l,c),d=$.default.remainder(
l,c),f=Sl(s,"positive"),h,y;$.default.lessThan(l,br)?(h=$.default.subtract(u,vo),y=u):(h=u,y=$.default.add(u,vo));let b=ol(
va($.default.multiply(d,pd)),c)*($.default.lessThan(l,br)?-1:1)+0,T=$.default.equal(d,br)?u:El(h,y,b,Vm(h),f);return $.default.
multiply(T,c)}(e,$.default.BigInt(a),n)}function Hu(e,t,r,n){Uu(e);let{year:a,month:i,day:o}=e.isoDate,s=Wu(e.time,t,r,n);
return Re(pr(a,i,o+s.deltaDays),s)}function Wu({hour:e,minute:t,second:r,millisecond:n,microsecond:a,nanosecond:i},o,s,l){
let c;switch(s){case"day":case"hour":c=1e3*(1e3*(1e3*(60*(60*e+t)+r)+n)+a)+i;break;case"minute":c=1e3*(1e3*(1e3*(60*t+r)+
n)+a)+i;break;case"second":c=1e3*(1e3*(1e3*r+n)+a)+i;break;case"millisecond":c=1e3*(1e3*n+a)+i;break;case"microsecond":c=
1e3*a+i;break;case"nanosecond":c=i}let u=ii[s],d=Gn(c,u*o,l)/u;switch(s){case"day":return{deltaDays:d,hour:0,minute:0,second:0,
millisecond:0,microsecond:0,nanosecond:0};case"hour":return zn(d,0,0,0,0,0);case"minute":return zn(e,d,0,0,0,0);case"sec\
ond":return zn(e,t,d,0,0,0);case"millisecond":return zn(e,t,r,d,0,0);case"microsecond":return zn(e,t,r,n,d,0);case"nanos\
econd":return zn(e,t,r,n,a,d);default:throw new Error(`Invalid unit ${s}`)}}function ml(e,t,r,n){let a=ii[r];return e.round(
$.default.BigInt(a*t),n)}function yo(e,t){let r=ii[t];return e.fdiv($.default.BigInt(r))}function an(e,t){return e.year!==
t.year?ur(e.year-t.year):e.month!==t.month?ur(e.month-t.month):e.day!==t.day?ur(e.day-t.day):0}function qu(e,t){return e.
hour!==t.hour?ur(e.hour-t.hour):e.minute!==t.minute?ur(e.minute-t.minute):e.second!==t.second?ur(e.second-t.second):e.millisecond!==
t.millisecond?ur(e.millisecond-t.millisecond):e.microsecond!==t.microsecond?ur(e.microsecond-t.microsecond):e.nanosecond!==
t.nanosecond?ur(e.nanosecond-t.nanosecond):0}function si(e,t){let r=an(e.isoDate,t.isoDate);return r!==0?r:qu(e.time,t.time)}
function Dg(e){let t=gl(e);return globalThis.BigInt!==void 0?globalThis.BigInt(t.toString(10)):t}function Dr(e,t){let r=bn(
e),{quotient:n,remainder:a}=no(r,Do),i=$.default.toNumber(n);return t==="floor"&&$.default.toNumber(a)<0&&(i-=1),t==="ce\
il"&&$.default.toNumber(a)>0&&(i+=1),i}function Yr(e){if(!Number.isInteger(e))throw new RangeError("epoch milliseconds m\
ust be an integer");return $.default.multiply($.default.BigInt(e),Do)}function gl(e){let t=e;if(typeof e=="object"){let r=e[Symbol.
toPrimitive];r&&typeof r=="function"&&(t=r.call(e,"number"))}if(typeof t=="number")throw new TypeError("cannot convert n\
umber to bigint");return typeof t=="bigint"?$.default.BigInt(t.toString(10)):$.default.BigInt(t)}var Vu=(()=>{let e=$.default.
BigInt(Date.now()%1e6);return()=>{let t=Date.now(),r=$.default.BigInt(t),n=$.default.add(Yr(t),e);return e=$.default.remainder(
r,Do),$.default.greaterThan(n,ni)?ni:$.default.lessThan(n,bo)?bo:n}})();function to(){return new Intl.DateTimeFormat().resolvedOptions().
timeZone}function ur(e){return e<0?-1:e>0?1:e}function J(e){if(e===void 0)return Object.create(null);if(nt(e)&&e!==null)
return e;throw new TypeError("Options parameter must be an object, not "+(e===null?"null":typeof e))}function _a(e,t){let r=Object.
create(null);return r[e]=t,r}function _n(e,t,r,n){let a=e[t];if(a!==void 0){if(a=_l(a),!r.includes(a))throw new RangeError(
`${t} must be one of ${r.join(", ")}, not ${a}`);return a}if(n===$n)throw new RangeError(`${t} option is required`);return n}
function nr(e){let t=xo(e);if(!gE.includes(xo(t)))throw new RangeError(`invalid calendar identifier ${t}`);switch(t){case"\
ethiopic-amete-alem":return"ethioaa";case"islamicc":return"islamic-civil"}return t}function xo(e){let t="";for(let r=0;r<
e.length;r++){let n=e.charCodeAt(r);t+=n>=65&&n<=90?String.fromCharCode(n+32):String.fromCharCode(n)}return t}function ra(e){
throw new TypeError(`Do not use built-in arithmetic operators with Temporal objects. When comparing, use ${e==="PlainMon\
thDay"?"Temporal.PlainDate.compare(obj1.toPlainDate(year), obj2.toPlainDate(year))":`Temporal.${e}.compare(obj1, obj2)`}\
, not obj1 > obj2. When coercing to strings, use \`\${obj}\` or String(obj), not '' + obj. When coercing to numbers, use pr\
operties or methods of the object, not \`+obj\`. When concatenating with strings, use \`\${str}\${obj}\` or str.concat(obj), n\
ot str + obj. In React, coerce to a string before rendering a Temporal object.`)}var SE=new RegExp(`^${ig.source}$`),EE=new RegExp(
`^${/([+-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/.source}$`);function jg(e,t,r,n=e(
t),a=e(r)){let i=t,o=r,s=n,l=a;for(;o-i>1;){let c=Math.trunc((i+o)/2),u=e(c);u===s?(i=c,s=u):u===l&&(o=c,l=u)}return o}function Lg(e){
return[...e]}function Ug(e,t){if(e!=="gregory"&&e!=="iso8601")return;let r=Ko[e],n=t.year,{dayOfWeek:a,dayOfYear:i,daysInYear:o}=r.
isoToDate(t,{dayOfWeek:!0,dayOfYear:!0,daysInYear:!0}),s=r.getFirstDayOfWeek(),l=r.getMinimalDaysInFirstWeek(),c=(a+7-s)%
7,u=(a-i+7001-s)%7,d=Math.floor((i-1+u)/7);if(7-u>=l&&++d,d==0)d=function(f,h,y,b){let T=(b-f-y+1)%7;T<0&&(T+=7);let k=Math.
floor((y+T-1)/7);return 7-T>=h&&++k,k}(s,l,i+r.isoToDate(r.dateAdd(t,{years:-1},"constrain"),{daysInYear:!0}).daysInYear,
a),n--;else if(i>=o-5){let f=(c+o-i)%7;f<0&&(f+=7),6-f>=l&&i+7-c>o&&(d=1,n++)}return{week:d,year:n}}function Hm(e,t,r,n,a){
if(t!==a.year){if(e*(t-a.year)>0)return!0}else if(r!==a.month){if(e*(r-a.month)>0)return!0}else if(n!==a.day&&e*(n-a.day)>
0)return!0;return!1}var Ko={};function Aa(e){if(!e.startsWith("M"))throw new RangeError(`Invalid month code: ${e}.  Mont\
h codes must start with M.`);let t=+e.slice(1);if(Number.isNaN(t))throw new RangeError(`Invalid month code: ${e}`);return t}
function tn(e,t=!1){return`M${`${e}`.padStart(2,"0")}${t?"L":""}`}function kd(e,t=void 0,r=12){let{month:n,monthCode:a}=e;
if(a===void 0){if(n===void 0)throw new TypeError("Either month or monthCode are required");t==="reject"&&Tt(n,1,r),t==="\
constrain"&&(n=Xt(n,1,r)),a=tn(n)}else{let i=Aa(a);if(a!==tn(i))throw new RangeError(`Invalid month code: ${a}`);if(n!==
void 0&&n!==i)throw new RangeError(`monthCode ${a} and month ${n} must match if both are present`);if(n=i,n<1||n>r)throw new RangeError(
`Invalid monthCode: ${a}`)}return{...e,month:n,monthCode:a}}Ko.iso8601={resolveFields(e,t){if((t==="date"||t==="year-mon\
th")&&e.year===void 0)throw new TypeError("year is required");if((t==="date"||t==="month-day")&&e.day===void 0)throw new TypeError(
"day is required");Object.assign(e,kd(e))},dateToISO:(e,t)=>mo(e.year,e.month,e.day,t),monthDayToISOReferenceDate(e,t){let{
month:r,day:n}=mo(e.year??1972,e.month,e.day,t);return{month:r,day:n,year:1972}},extraFields:()=>[],fieldKeysToIgnore(e){
let t=new Set;for(let r=0;r<e.length;r++){let n=e[r];t.add(n),n==="month"?t.add("monthCode"):n==="monthCode"&&t.add("mon\
th")}return Lg(t)},dateAdd(e,{years:t=0,months:r=0,weeks:n=0,days:a=0},i){let{year:o,month:s,day:l}=e;return o+=t,s+=r,{
year:o,month:s}=ba(o,s),{year:o,month:s,day:l}=mo(o,s,l,i),l+=a+7*n,pr(o,s,l)},dateUntil(e,t,r){let n=-an(e,t);if(n===0)
return{years:0,months:0,weeks:0,days:0};let a,i=0,o=0;if(r==="year"||r==="month"){let u=t.year-e.year;for(u!==0&&(u-=n);!Hm(
n,e.year+u,e.month,e.day,t);)i=u,u+=n;let d=n;for(a=ba(e.year+i,e.month+d);!Hm(n,a.year,a.month,e.day,t);)o=d,d+=n,a=ba(
a.year,a.month+n);r==="month"&&(o+=12*i,i=0)}a=ba(e.year+i,e.month+o);let s=Rg(a.year,a.month,e.day),l=0,c=xa(t.year,t.month-
1,t.day)-xa(s.year,s.month-1,s.day);return r==="week"&&(l=Math.trunc(c/7),c%=7),{years:i,months:o,weeks:l,days:c}},isoToDate({
year:e,month:t,day:r},n){let a={era:void 0,eraYear:void 0,year:e,month:t,day:r,daysInWeek:7,monthsInYear:12};if(n.monthCode&&
(a.monthCode=tn(t)),n.dayOfWeek){let i=t+(t<3?10:-2),o=e-(t<3?1:0),s=Math.floor(o/100),l=o-100*s,c=(r+Math.floor(2.6*i-.2)+
(l+Math.floor(l/4))+(Math.floor(s/4)-2*s))%7;a.dayOfWeek=c+(c<=0?7:0)}if(n.dayOfYear){let i=r;for(let o=t-1;o>0;o--)i+=Ta(
e,o);a.dayOfYear=i}return n.weekOfYear&&(a.weekOfYear=Ug("iso8601",{year:e,month:t,day:r})),n.daysInMonth&&(a.daysInMonth=
Ta(e,t)),(n.daysInYear||n.inLeapYear)&&(a.inLeapYear=fl(e),a.daysInYear=a.inLeapYear?366:365),a},getFirstDayOfWeek:()=>1,
getMinimalDaysInFirstWeek:()=>4};var yr=class e{constructor(t){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=
0,t!==void 0){let r=0;for(let n of t.map.entries()){if(++r>e.MAX_CACHE_ENTRIES)break;this.map.set(...n)}}}get(t){let r=this.
map.get(t);return r&&(this.hits++,this.report()),this.calls++,r}set(t,r){this.map.set(t,r),this.misses++,this.report()}report(){}setObject(t){
if(e.objectMap.get(t))throw new RangeError("object already cached");e.objectMap.set(t,this),this.report()}static getCacheForObject(t){
let r=e.objectMap.get(t);return r||(r=new e,e.objectMap.set(t,r)),r}};function Fg({isoYear:e,isoMonth:t,isoDay:r}){return`${zo(
e)}-${kr(t)}-${kr(r)}T00:00Z`}function Eu(e,t){return{years:e.year-t.year,months:e.month-t.month,days:e.day-t.day}}yr.objectMap=
new WeakMap,yr.MAX_CACHE_ENTRIES=1e3;var Rn=class{constructor(){this.eras=[],this.hasEra=!1,this.erasBeginMidYear=!1}getFormatter(){
return this.formatter===void 0&&(this.formatter=new Intl.DateTimeFormat(`en-US-u-ca-${this.id}`,{day:"numeric",month:"nu\
meric",year:"numeric",era:"short",timeZone:"UTC"})),this.formatter}getCalendarParts(t){let r=this.getFormatter(),n=new Date(
t);if(t==="-271821-04-19T00:00Z"){let a=r.resolvedOptions();r=new Intl.DateTimeFormat(a.locale,{...a,timeZone:"Etc/GMT+1"}),
n=new Date("-271821-04-20T00:00Z")}try{return r.formatToParts(n)}catch{throw new RangeError(`Invalid ISO date: ${t}`)}}isoToCalendarDate(t,r){
let{year:n,month:a,day:i}=t,o=JSON.stringify({func:"isoToCalendarDate",isoYear:n,isoMonth:a,isoDay:i,id:this.id}),s=r.get(
o);if(s)return s;let l=Fg({isoYear:n,isoMonth:a,isoDay:i}),c=this.getCalendarParts(l),u={};for(let f=0;f<c.length;f++){let{
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
monthsInYear(i,r),{month:s,monthCode:l}=i;return{month:s,monthCode:l}=kd(i,n,o),{...i,month:s,monthCode:l}}regulateMonthDayNaive(t,r,n){
let a=this.monthsInYear(t,n),{month:i,day:o}=t;return r==="reject"?(Tt(i,1,a),Tt(o,1,this.maximumMonthLength(t))):(i=Xt(
i,1,a),o=Xt(o,1,this.maximumMonthLength({...t,month:i}))),{...t,month:i,day:o}}calendarToIsoDate(t,r="constrain",n){let a=t,
i=this.adjustCalendarDate(t,n,r,!1);i=this.regulateMonthDayNaive(i,r,n);let{year:o,month:s,day:l}=i,c=JSON.stringify({func:"\
calendarToIsoDate",year:o,month:s,day:l,overflow:r,id:this.id}),u,d=n.get(c);if(d||a.year!==void 0&&a.month!==void 0&&a.
day!==void 0&&(a.year!==i.year||a.month!==i.month||a.day!==i.day)&&(u=JSON.stringify({func:"calendarToIsoDate",year:a.year,
month:a.month,day:a.day,overflow:r,id:this.id}),d=n.get(u),d))return d;let f=this.estimateIsoDate({year:o,month:s,day:l}),
h=S=>{let _=this.addDaysIso(f,S);if(i.day>this.minimumMonthLength(i)){let I=this.isoToCalendarDate(_,n);for(;I.month!==s||
I.year!==o;){if(r==="reject")throw new RangeError(`day ${l} does not exist in month ${s} of year ${o}`);_=this.addDaysIso(
_,-1),I=this.isoToCalendarDate(_,n)}}return _},y=0,b=this.isoToCalendarDate(f,n),T=Eu(i,b);if(T.years!==0||T.months!==0||
T.days!==0){let S=365*T.years+30*T.months+T.days;f=this.addDaysIso(f,S),b=this.isoToCalendarDate(f,n),T=Eu(i,b),T.years===
0&&T.months===0?f=h(T.days):y=this.compareCalendarDates(i,b)}let k=8;for(;y;){f=this.addDaysIso(f,y*k);let S=b;b=this.isoToCalendarDate(
f,n);let _=y;if(y=this.compareCalendarDates(i,b),y){if(T=Eu(i,b),T.years===0&&T.months===0)f=h(T.days),y=0;else if(_&&y!==
_)if(k>1)k/=2;else{if(r==="reject")throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({...a})}`);
this.compareCalendarDates(b,S)>0&&(f=this.addDaysIso(f,-1)),y=0}}}if(n.set(c,f),u&&n.set(u,f),i.year===void 0||i.month===
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
let a=this.calendarToIsoDate(t,"constrain",n),i=this.calendarToIsoDate(r,"constrain",n);return xa(i.year,i.month-1,i.day)-
xa(a.year,a.month-1,a.day)}monthDaySearchStartYear(t,r){return 1972}monthDayFromFields(t,r,n){let a,i,o,s,l,{era:c,eraYear:u,
year:d,month:f,monthCode:h,day:y}=t;if(f!==void 0&&d===void 0&&(!this.hasEra||c===void 0||u===void 0))throw new TypeError(
"when month is present, year (or era and eraYear) are required");(h===void 0||d!==void 0||this.hasEra&&u!==void 0)&&({monthCode:h,
day:y}=this.isoToCalendarDate(this.calendarToIsoDate(t,r,n),n));let b={year:this.monthDaySearchStartYear(h,y),month:12,day:31},
T=this.isoToCalendarDate(b,n),k=T.monthCode>h||T.monthCode===h&&T.day>=y?T.year:T.year-1;for(let S=0;S<20;S++){let _=this.
adjustCalendarDate({day:y,monthCode:h,year:k-S},n),I=this.calendarToIsoDate(_,"constrain",n),N=this.isoToCalendarDate(I,
n);if({year:a,month:i,day:o}=I,N.monthCode===h&&N.day===y)return{month:i,day:o,year:a};if(r==="constrain"){let W=this.maxLengthOfMonthCodeInAnyYear(
N.monthCode);if(N.monthCode===h&&N.day===W&&y>W)return{month:i,day:o,year:a};(s===void 0||N.monthCode===s.monthCode&&N.day>
s.day)&&(s=N,l=I)}}if(r==="constrain"&&l!==void 0)return l;throw new RangeError(`No recent ${this.id} year with monthCod\
e ${h} and day ${y}`)}getFirstDayOfWeek(){}getMinimalDaysInFirstWeek(){}},Yu=class extends Rn{constructor(){super(...arguments),
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
let{year:r}=t;return{year:r-3760,month:1,day:1}}getMonthCode(t,r){return this.inLeapYear({year:t})?r===6?tn(5,!0):tn(r<6?
r:r-1):tn(r)}adjustCalendarDate(t,r,n="constrain",a=!1){let{year:i,month:o,monthCode:s,day:l,monthExtra:c}=t;if(i===void 0)
throw new TypeError("Missing property: year");if(a){if(c){let u=this.months[c];if(!u)throw new RangeError(`Unrecognized \
month from formatToParts: ${c}`);o=this.inLeapYear({year:i})?u.leap:u.regular}return s=this.getMonthCode(i,o),{year:i,month:o,
day:l,monthCode:s}}if(this.validateCalendarDate(t),o===void 0)if(s.endsWith("L")){if(s!=="M05L")throw new RangeError(`He\
brew leap month must have monthCode M05L, not ${s}`);if(o=6,!this.inLeapYear({year:i})){if(n==="reject")throw new RangeError(
`Hebrew monthCode M05L is invalid in year ${i} which is not a leap year`);o=6,s="M06"}}else{o=Aa(s),this.inLeapYear({year:i})&&
o>=6&&o++;let u=this.monthsInYear({year:i});if(o<1||o>u)throw new RangeError(`Invalid monthCode: ${s}`)}else if(n==="rej\
ect"?(Tt(o,1,this.monthsInYear({year:i})),Tt(l,1,this.maximumMonthLength({year:i,month:o}))):(o=Xt(o,1,this.monthsInYear(
{year:i})),l=Xt(l,1,this.maximumMonthLength({year:i,month:o}))),s===void 0)s=this.getMonthCode(i,o);else if(this.getMonthCode(
i,o)!==s)throw new RangeError(`monthCode ${s} doesn't correspond to month ${o} in Hebrew year ${i}`);return{...t,day:l,month:o,
monthCode:s,year:i}}},ea=class extends Rn{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=
354+11/30,this.DAYS_PER_ISO_YEAR=365.2425}inLeapYear(t,r){let n={year:t.year,month:1,monthCode:"M01",day:1},a={year:t.year+
1,month:1,monthCode:"M01",day:1};return this.calendarDaysUntil(n,a,r)===355}monthsInYear(){return 12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(){return 30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(
t);return{year:Math.floor(r*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}},zu=class extends ea{constructor(){
super(...arguments),this.id="islamic"}},Ku=class extends ea{constructor(){super(...arguments),this.id="islamic-umalqura"}},
Gu=class extends ea{constructor(){super(...arguments),this.id="islamic-tbla"}},Ju=class extends ea{constructor(){super(...arguments),
this.id="islamic-civil"}},Zu=class extends ea{constructor(){super(...arguments),this.id="islamic-rgsa"}},Xu=class extends ea{constructor(){
super(...arguments),this.id="islamicc"}},Qu=class extends Rn{constructor(){super(...arguments),this.id="persian",this.calendarType=
"solar"}inLeapYear(t,r){return this.daysInMonth({year:t.year,month:12,day:1},r)===30}monthsInYear(){return 12}minimumMonthLength(t){
let{month:r}=t;return r===12?29:r<=6?31:30}maximumMonthLength(t){let{month:r}=t;return r===12?30:r<=6?31:30}maxLengthOfMonthCodeInAnyYear(t){
return Aa(t)<=6?31:30}estimateIsoDate(t){let{year:r}=this.adjustCalendarDate(t);return{year:r+621,month:1,day:1}}},ed=class extends Rn{constructor(){
super(...arguments),this.id="indian",this.calendarType="solar",this.months={1:{length:30,month:3,day:22,leap:{length:31,
month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,
day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},
10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.
vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 S\
aka"}inLeapYear(t){return Sd(t.year+78)}monthsInYear(){return 12}minimumMonthLength(t){return this.getMonthInfo(t).length}maximumMonthLength(t){
return this.getMonthInfo(t).length}maxLengthOfMonthCodeInAnyYear(t){let r=Aa(t),n=this.months[r];return n=n.leap??n,n.length}getMonthInfo(t){
let{month:r}=t,n=this.months[r];if(n===void 0)throw new RangeError(`Invalid month: ${r}`);return this.inLeapYear(t)&&n.leap&&
(n=n.leap),n}estimateIsoDate(t){let r=this.adjustCalendarDate(t),n=this.getMonthInfo(r);return pr(r.year+78+(n.nextYear?
1:0),n.month,n.day+r.day-1)}checkIcuBugs(t){if(this.vulnerableToBceBug&&t.year<1)throw new RangeError(`calendar '${this.
id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}};function Sd(e){
return e%4==0&&(e%100!=0||e%400==0)}var yl=class extends Rn{constructor(t,r){super(),this.calendarType="solar",this.id=t,
this.isoEpoch=r}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return Sd(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Aa(t)-1]}estimateIsoDate(t){
let r=this.adjustCalendarDate(t);return mo(r.year+this.isoEpoch.year,r.month+this.isoEpoch.month,r.day+this.isoEpoch.day,
"constrain")}},vl=class extends Rn{constructor(t,r){super(),this.hasEra=!0,this.calendarType="solar",this.id=t;let{eras:n,
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
r);this.anchorEra=a,this.eras=n}inLeapYear(t){let{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return Sd(r)}monthsInYear(){
return 12}minimumMonthLength(t){let{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){
return this.minimumMonthLength(t)}maxLengthOfMonthCodeInAnyYear(t){return[31,29,31,30,31,30,31,31,30,31,30,31][Aa(t)-1]}completeEraYear(t){
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
constrain"){let a=t,{month:i,monthCode:o}=a;return i===void 0&&(a={...a,month:Aa(o)}),this.validateCalendarDate(a),a=this.
completeEraYear(a),super.adjustCalendarDate(a,r,n)}estimateIsoDate(t){let r=this.adjustCalendarDate(t),{year:n,month:a,day:i}=r,
{anchorEra:o}=this;return mo(n+o.isoEpoch.year-(o.hasYearZero?0:1),a,i,"constrain")}},_o=class extends vl{constructor(t,r){
super(t,r)}isoToCalendarDate(t){let{year:r,month:n,day:a}=t,i=tn(n),o=r-this.anchorEra.isoEpoch.year+1;return this.completeEraYear(
{year:o,month:n,monthCode:i,day:a})}},Qr={inLeapYear(e){let{year:t}=e;return(t+1)%4==0},monthsInYear:()=>13,minimumMonthLength(e){
let{month:t}=e;return t===13?this.inLeapYear(e)?6:5:30},maximumMonthLength(e){return this.minimumMonthLength(e)},maxLengthOfMonthCodeInAnyYear:e=>e===
"M13"?6:30},td=class extends yl{constructor(t,r){super(t,r),this.inLeapYear=Qr.inLeapYear,this.monthsInYear=Qr.monthsInYear,
this.minimumMonthLength=Qr.minimumMonthLength,this.maximumMonthLength=Qr.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
Qr.maxLengthOfMonthCodeInAnyYear}},bl=class extends vl{constructor(t,r){super(t,r),this.inLeapYear=Qr.inLeapYear,this.monthsInYear=
Qr.monthsInYear,this.minimumMonthLength=Qr.minimumMonthLength,this.maximumMonthLength=Qr.maximumMonthLength,this.maxLengthOfMonthCodeInAnyYear=
Qr.maxLengthOfMonthCodeInAnyYear}},rd=class extends td{constructor(){super("ethioaa",{year:-5492,month:7,day:17})}},nd=class extends bl{constructor(){
super("coptic",[{code:"coptic",isoEpoch:{year:284,month:8,day:29}},{code:"coptic-inverse",reverseOf:"coptic"}])}},ad=class extends bl{constructor(){
super("ethiopic",[{code:"ethioaa",names:["ethiopic-amete-alem","mundi"],isoEpoch:{year:-5492,month:7,day:17}},{code:"eth\
iopic",names:["incar"],isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}},id=class extends _o{constructor(){super(
"roc",[{code:"roc",names:["minguo"],isoEpoch:{year:1912,month:1,day:1}},{code:"roc-inverse",names:["before-roc"],reverseOf:"\
roc"}])}},od=class extends yl{constructor(){super("buddhist",{year:-543,month:1,day:1})}},sd=class extends _o{constructor(){
super("gregory",[{code:"gregory",names:["ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"gregory-inverse",names:["be",
"bce"],reverseOf:"gregory"}])}reviseIntlEra(t){let{era:r,eraYear:n}=t;return r==="b"&&(r="gregory-inverse"),r==="a"&&(r=
"gregory"),{era:r,eraYear:n}}getFirstDayOfWeek(){return 1}getMinimalDaysInFirstWeek(){return 1}},ld=class extends _o{constructor(){
super("japanese",[{code:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{code:"heisei",
isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{code:"showa",isoEpoch:{year:1926,month:12,day:25},
anchorEpoch:{year:1926,month:12,day:25}},{code:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,
day:30}},{code:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{code:"japanese",names:[
"japanese","gregory","ad","ce"],isoEpoch:{year:1,month:1,day:1}},{code:"japanese-inverse",names:["japanese-inverse","gre\
gory-inverse","bc","bce"],reverseOf:"japanese"}]),this.erasBeginMidYear=!0}reviseIntlEra(t,r){let{era:n,eraYear:a}=t,{year:i}=r;
return this.eras.find(o=>o.code===n)?{era:n,eraYear:a}:i<1?{era:"japanese-inverse",eraYear:1-i}:{era:"japanese",eraYear:i}}},
wl=class extends Rn{constructor(){super(...arguments),this.calendarType="lunisolar"}inLeapYear(t,r){let n=this.getMonthList(
t.year,r);return Object.entries(n).length===13}monthsInYear(t,r){return this.inLeapYear(t,r)?13:12}minimumMonthLength(){
return 29}maximumMonthLength(){return 30}maxLengthOfMonthCodeInAnyYear(t){return["M01L","M09L","M10L","M11L","M12L"].includes(
t)?29:30}monthDaySearchStartYear(t,r){let n={M01L:[1651,1651],M02L:[1947,1765],M03L:[1966,1955],M04L:[1963,1944],M05L:[1971,
1952],M06L:[1960,1941],M07L:[1968,1938],M08L:[1957,1718],M09L:[1832,1832],M10L:[1870,1870],M11L:[1814,1814],M12L:[1890,1890]}[t]??
[1972,1972];return r<30?n[0]:n[1]}getMonthList(t,r){if(t===void 0)throw new TypeError("Missing year");let n=JSON.stringify(
{func:"getMonthList",calendarYear:t,id:this.id}),a=r.get(n);if(a)return a;let i=this.getFormatter(),o=(T,k)=>{let S=Fg({
isoYear:T,isoMonth:2,isoDay:1}),_=new Date(S);_.setUTCDate(k+1);let I=i.formatToParts(_),N=I.find(F=>F.type==="month").value,
W=+I.find(F=>F.type==="day").value,V=I.find(F=>F.type==="relatedYear"),Q;if(V===void 0)throw new RangeError(`Intl.DateTi\
meFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return Q=+V.value,{calendarMonthString:N,
calendarDay:W,calendarYearToVerify:Q}},s=17,{calendarMonthString:l,calendarDay:c,calendarYearToVerify:u}=o(t,s);l!=="1"&&
(s+=29,{calendarMonthString:l,calendarDay:c}=o(t,s)),s-=c-5;let d={},f,h,y=1,b=!1;do({calendarMonthString:l,calendarDay:c,
calendarYearToVerify:u}=o(t,s)),f&&(d[h].daysInMonth=f+30-c),u!==t?b=!0:(d[l]={monthIndex:y++},s+=30),f=c,h=l;while(!b);
return d[h].daysInMonth=f+30-c,r.set(n,d),d}estimateIsoDate(t){let{year:r,month:n}=t;return{year:r,month:n>=12?12:n+1,day:1}}adjustCalendarDate(t,r,n="\
constrain",a=!1){let{year:i,month:o,monthExtra:s,day:l,monthCode:c}=t;if(i===void 0)throw new TypeError("Missing propert\
y: year");if(a){if(s&&s!=="bis")throw new RangeError(`Unexpected leap month suffix: ${s}`);let u=tn(o,s!==void 0),d=`${o}${s||
""}`,f=this.getMonthList(i,r)[d];if(f===void 0)throw new RangeError(`Unmatched month ${d} in Chinese year ${i}`);return o=
f.monthIndex,{year:i,month:o,day:l,monthCode:u}}if(this.validateCalendarDate(t),o===void 0){let u=this.getMonthList(i,r),
d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="0"&&(d=d.slice(1));let f=u[d];if(o=f&&f.monthIndex,o===void 0&&c.endsWith(
"L")&&c!="M13L"&&n==="constrain"){let h=+c.replace(/^M0?|L$/g,"");f=u[h],f&&(o=f.monthIndex,c=tn(h))}if(o===void 0)throw new RangeError(
`Unmatched month ${c} in Chinese year ${i}`)}else if(c===void 0){let u=this.getMonthList(i,r),d=Object.entries(u),f=d.length;
n==="reject"?(Tt(o,1,f),Tt(l,1,this.maximumMonthLength())):(o=Xt(o,1,f),l=Xt(l,1,this.maximumMonthLength()));let h=d.find(
y=>y[1].monthIndex===o);if(h===void 0)throw new RangeError(`Invalid month ${o} in Chinese year ${i}`);c=tn(+h[0].replace(
"bis",""),h[0].indexOf("bis")!==-1)}else{let u=this.getMonthList(i,r),d=c.replace(/^M|L$/g,h=>h==="L"?"bis":"");d[0]==="\
0"&&(d=d.slice(1));let f=u[d];if(!f)throw new RangeError(`Unmatched monthCode ${c} in Chinese year ${i}`);if(o!==f.monthIndex)
throw new RangeError(`monthCode ${c} doesn't correspond to month ${o} in Chinese year ${i}`)}return{...t,year:i,month:o,
monthCode:c,day:l}}},cd=class extends wl{constructor(){super(...arguments),this.id="chinese"}},ud=class extends wl{constructor(){
super(...arguments),this.id="dangi"}},dd=class{constructor(t){this.helper=t}extraFields(t){return this.helper.hasEra&&t.
includes("year")?["era","eraYear"]:[]}resolveFields(t){if(this.helper.calendarType!=="lunisolar"){let r=new yr;kd(t,void 0,
this.helper.monthsInYear({year:t.year??1972},r))}}dateToISO(t,r){let n=new yr,a=this.helper.calendarToIsoDate(t,r,n);return n.
setObject(a),a}monthDayToISOReferenceDate(t,r){let n=new yr,a=this.helper.monthDayFromFields(t,r,n);return n.setObject(a),
a}fieldKeysToIgnore(t){let r=new Set;for(let n=0;n<t.length;n++){let a=t[n];switch(r.add(a),a){case"era":r.add("eraYear"),
r.add("year");break;case"eraYear":r.add("era"),r.add("year");break;case"year":r.add("era"),r.add("eraYear");break;case"m\
onth":r.add("monthCode"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"monthCode":r.add("mont\
h"),this.helper.erasBeginMidYear&&(r.add("era"),r.add("eraYear"));break;case"day":this.helper.erasBeginMidYear&&(r.add("\
era"),r.add("eraYear"))}}return Lg(r)}dateAdd(t,{years:r,months:n,weeks:a,days:i},o){let s=yr.getCacheForObject(t),l=this.
helper.isoToCalendarDate(t,s),c=this.helper.addCalendar(l,{years:r,months:n,weeks:a,days:i},o,s),u=this.helper.calendarToIsoDate(
c,"constrain",s);return yr.getCacheForObject(u)||new yr(s).setObject(u),u}dateUntil(t,r,n){let a=yr.getCacheForObject(t),
i=yr.getCacheForObject(r),o=this.helper.isoToCalendarDate(t,a),s=this.helper.isoToCalendarDate(r,i);return this.helper.untilCalendar(
o,s,n,a)}isoToDate(t,r){let n=yr.getCacheForObject(t),a=this.helper.isoToCalendarDate(t,n);if(r.dayOfWeek&&(a.dayOfWeek=
Ko.iso8601.isoToDate(t,{dayOfWeek:!0}).dayOfWeek),r.dayOfYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.calendarDaysUntil(
i,a,n);a.dayOfYear=o+1}if(r.weekOfYear&&(a.weekOfYear=Ug(this.helper.id,t)),a.daysInWeek=7,r.daysInMonth&&(a.daysInMonth=
this.helper.daysInMonth(a,n)),r.daysInYear){let i=this.helper.startOfCalendarYear(a),o=this.helper.addCalendar(i,{years:1},
"constrain",n);a.daysInYear=this.helper.calendarDaysUntil(i,o,n)}return r.monthsInYear&&(a.monthsInYear=this.helper.monthsInYear(
a,n)),r.inLeapYear&&(a.inLeapYear=this.helper.inLeapYear(a,n)),a}getFirstDayOfWeek(){return this.helper.getFirstDayOfWeek()}getMinimalDaysInFirstWeek(){
return this.helper.getMinimalDaysInFirstWeek()}};for(let e of[Yu,Qu,ad,rd,nd,cd,ud,id,ed,od,sd,ld,zu,Ku,Gu,Ju,Zu,Xu]){let t=new e;
Ko[t.id]=new dd(t)}Iu("calendarImpl",function(e){return Ko[e]});var Ao=Intl.DateTimeFormat;function za(e,t){let r=g(e,t);
return typeof r=="function"&&(r=new Ao(g(e,tg),r(g(e,Au))),function(n,a,i){let o=kl(n);if(o===void 0)throw new TypeError(
"Missing slots for the given container");if(o[a]===void 0)throw new TypeError(`tried to reset ${a} which was not set`);o[a]=
i}(e,t,r)),r}function ro(e){return rr(e,Ra)}var $a=class{constructor(t=void 0,r=void 0){(function(n,a,i){let o=i!==void 0,
s;if(o){let d=["localeMatcher","calendar","numberingSystem","hour12","hourCycle","timeZone","weekday","era","year","mont\
h","day","dayPeriod","hour","minute","second","fractionalSecondDigits","timeZoneName","formatMatcher","dateStyle","timeS\
tyle"];s=function(h){if(h==null)throw new TypeError(`Expected object not ${h}`);return Object(h)}(i);let f=Object.create(
null);for(let h=0;h<d.length;h++){let y=d[h];Object.prototype.hasOwnProperty.call(s,y)&&(f[y]=s[y])}s=f}else s=Object.create(
null);let l=new Ao(a,s),c=l.resolvedOptions();if(On(n),o){let d=Object.assign(Object.create(null),c);for(let f in d)Object.
prototype.hasOwnProperty.call(s,f)||delete d[f];d.hour12=s.hour12,d.hourCycle=s.hourCycle,fe(n,Au,d)}else fe(n,Au,s);fe(
n,tg,c.locale),fe(n,Ra,l),fe(n,Ja,c.timeZone),fe(n,ao,c.calendar),fe(n,Gm,NE),fe(n,Jm,IE),fe(n,Zm,CE),fe(n,Xm,OE),fe(n,Qm,
PE),fe(n,eg,ME);let u=o?s.timeZone:void 0;if(u===void 0)fe(n,_u,c.timeZone);else{let d=_l(u);if(d.startsWith("\u2212"))throw new RangeError(
"Unicode minus (U+2212) is not supported in time zone offsets");fe(n,_u,er(d))}})(this,t,r)}get format(){O(this,ro);let t=_E.
bind(this);return Object.defineProperties(t,{length:{value:1,enumerable:!1,writable:!1,configurable:!0},name:{value:"",enumerable:!1,
writable:!1,configurable:!0}}),t}formatRange(t,r){return O(this,ro),$E.call(this,t,r)}formatToParts(t,...r){return O(this,
ro),AE.call(this,t,...r)}formatRangeToParts(t,r){return O(this,ro),RE.call(this,t,r)}resolvedOptions(){return O(this,ro),
xE.call(this)}};"formatToParts"in Ao.prototype||delete $a.prototype.formatToParts,"formatRangeToParts"in Ao.prototype||delete $a.
prototype.formatRangeToParts;var wr=function(e=void 0,t=void 0){return new $a(e,t)};function xE(){let e=g(this,Ra).resolvedOptions();
return e.timeZone=g(this,_u),e}function _E(e,...t){let r,n,a=li(e,this);return a.formatter?(r=a.formatter,n=[Dr(a.epochNs,
"floor")]):(r=g(this,Ra),n=[e,...t]),r.format(...n)}function AE(e,...t){let r,n,a=li(e,this);return a.formatter?(r=a.formatter,
n=[Dr(a.epochNs,"floor")]):(r=g(this,Ra),n=[e,...t]),r.formatToParts(...n)}function $E(e,t){if(e===void 0||t===void 0)throw new TypeError(
"Intl.DateTimeFormat.formatRange requires two values");let r=Tl(e),n=Tl(t),a,i=[r,n];if(An(r)!==An(n))throw new TypeError(
"Intl.DateTimeFormat.formatRange accepts two values of the same type");if(An(r)){if(!Bg(r,n))throw new TypeError("Intl.D\
ateTimeFormat.formatRange accepts two values of the same type");let{epochNs:o,formatter:s}=li(r,this),{epochNs:l,formatter:c}=li(
n,this);s&&(a=s,i=[Dr(o,"floor"),Dr(l,"floor")])}return a||(a=g(this,Ra)),a.formatRange(...i)}function RE(e,t){if(e===void 0||
t===void 0)throw new TypeError("Intl.DateTimeFormat.formatRange requires two values");let r=Tl(e),n=Tl(t),a,i=[r,n];if(An(
r)!==An(n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");if(An(r)){if(!Bg(
r,n))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");let{epochNs:o,formatter:s}=li(
r,this),{epochNs:l,formatter:c}=li(n,this);s&&(a=s,i=[Dr(o,"floor"),Dr(l,"floor")])}return a||(a=g(this,Ra)),a.formatRangeToParts(
...i)}function Go(e={},t={}){let r=Object.assign({},e),n=["year","month","day","hour","minute","second","weekday","dayPe\
riod","timeZoneName","dateStyle","timeStyle"];for(let a=0;a<n.length;a++){let i=n[a];r[i]=i in t?t[i]:r[i],r[i]!==!1&&r[i]!==
void 0||delete r[i]}return r}function OE(e){let t=Go(e,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});
if(t.timeStyle!=="long"&&t.timeStyle!=="full"||(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"\
2-digit"})),!Ml(t)){if(Jo(e))throw new TypeError(`cannot format Temporal.PlainTime with options [${Object.keys(e)}]`);Object.
assign(t,{hour:"numeric",minute:"numeric",second:"numeric"})}return t}function IE(e){let t={short:{year:"2-digit",month:"\
numeric"},medium:{year:"numeric",month:"short"},long:{year:"numeric",month:"long"},full:{year:"numeric",month:"long"}},r=Go(
e,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});if("dateStyle"in r&&r.dateStyle){
let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("year"in r||"month"in r||"era"in r)){if(Jo(e))throw new TypeError(
`cannot format PlainYearMonth with options [${Object.keys(e)}]`);Object.assign(r,{year:"numeric",month:"numeric"})}return r}
function CE(e){let t={short:{month:"numeric",day:"numeric"},medium:{month:"short",day:"numeric"},long:{month:"long",day:"\
numeric"},full:{month:"long",day:"numeric"}},r=Go(e,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if("dateStyle"in r&&r.dateStyle){let n=r.dateStyle;delete r.dateStyle,Object.assign(r,t[n])}if(!("month"in
r)&&!("day"in r)){if(Jo(e))throw new TypeError(`cannot format PlainMonthDay with options [${Object.keys(e)}]`);Object.assign(
r,{month:"numeric",day:"numeric"})}return r}function NE(e){let t=Go(e,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,
timeStyle:!1});if(!Pl(t)){if(Jo(e))throw new TypeError(`cannot format PlainDate with options [${Object.keys(e)}]`);Object.
assign(t,{year:"numeric",month:"numeric",day:"numeric"})}return t}function PE(e){let t=Go(e,{timeZoneName:!1});if((t.timeStyle===
"long"||t.timeStyle==="full")&&(delete t.timeStyle,Object.assign(t,{hour:"numeric",minute:"2-digit",second:"2-digit"}),t.
dateStyle)&&(Object.assign(t,{short:{year:"numeric",month:"numeric",day:"numeric"},medium:{year:"numeric",month:"short",
day:"numeric"},long:{year:"numeric",month:"long",day:"numeric"},full:{year:"numeric",month:"long",day:"numeric",weekday:"\
long"}}[t.dateStyle]),delete t.dateStyle),!Ml(t)&&!Pl(t)){if(Jo(e))throw new TypeError(`cannot format PlainDateTime with\
 options [${Object.keys(e)}]`);Object.assign(t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"nume\
ric",second:"numeric"})}return t}function ME(e){let t=e;return Ml(t)||Pl(t)||(t=Object.assign({},t,{year:"numeric",month:"\
numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function Pl(e){return"year"in e||"month"in e||
"day"in e||"weekday"in e||"dateStyle"in e||"era"in e}function Ml(e){return"hour"in e||"minute"in e||"second"in e||"timeS\
tyle"in e||"dayPeriod"in e||"fractionalSecondDigits"in e}function Jo(e){return Pl(e)||Ml(e)||"dateStyle"in e||"timeStyle"in
e||"timeZoneName"in e}function An(e){return tt(e)||ot(e)||Ve(e)||be(e)||xt(e)||vr(e)||Et(e)}function Tl(e){return An(e)?
e:xl(e)}function Bg(e,t){return!(!An(e)||!An(t)||ot(e)&&!ot(t)||tt(e)&&!tt(t)||Ve(e)&&!Ve(t)||be(e)&&!be(t)||xt(e)&&!xt(
t)||vr(e)&&!vr(t)||Et(e)&&!Et(t))}function li(e,t){if(ot(e)){let r={isoDate:{year:1970,month:1,day:1},time:g(e,rt)};return{
epochNs:Mt(g(t,Ja),r,"compatible"),formatter:za(t,Xm)}}if(xt(e)){let r=g(e,j),n=g(t,ao);if(r!==n)throw new RangeError(`c\
annot format PlainYearMonth with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Mt(g(t,Ja),a,"compatible"),formatter:za(t,Jm)}}if(vr(
e)){let r=g(e,j),n=g(t,ao);if(r!==n)throw new RangeError(`cannot format PlainMonthDay with calendar ${r} in locale with \
calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0});return{
epochNs:Mt(g(t,Ja),a,"compatible"),formatter:za(t,Zm)}}if(tt(e)){let r=g(e,j),n=g(t,ao);if(r!=="iso8601"&&r!==n)throw new RangeError(
`cannot format PlainDate with calendar ${r} in locale with calendar ${n}`);let a=Re(g(e,ne),{deltaDays:0,hour:12,minute:0,
second:0,millisecond:0,microsecond:0,nanosecond:0});return{epochNs:Mt(g(t,Ja),a,"compatible"),formatter:za(t,Gm)}}if(Ve(
e)){let r=g(e,j),n=g(t,ao);if(r!=="iso8601"&&r!==n)throw new RangeError(`cannot format PlainDateTime with calendar ${r} \
in locale with calendar ${n}`);let a=g(e,Ke);return{epochNs:Mt(g(t,Ja),a,"compatible"),formatter:za(t,Qm)}}if(be(e))throw new TypeError(
"Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return Et(e)?{epochNs:g(
e,re),formatter:za(t,eg)}:{}}function Hg(e){let t=Object.create(null);return t.years=g(e,qt),t.months=g(e,Vt),t.weeks=g(
e,lr),t.days=g(e,Yt),t.hours=g(e,zt),t.minutes=g(e,Kt),t.seconds=g(e,Gt),t.milliseconds=g(e,Jt),t.microseconds=g(e,Zt),t.
nanoseconds=g(e,cr),t}$a.prototype.constructor=wr,Object.defineProperty(wr,"prototype",{value:$a.prototype,writable:!1,enumerable:!1,
configurable:!1}),wr.supportedLocalesOf=Ao.supportedLocalesOf,In(wr,"Intl.DateTimeFormat");var{format:DE,formatToParts:jE}=Intl.
DurationFormat?.prototype??Object.create(null);function Ed(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=Hg(
Pr(e));return DE.call(this,t)}Intl.DurationFormat?.prototype&&(Intl.DurationFormat.prototype.format=Ed,Intl.DurationFormat.
prototype.formatToParts=function(e){Intl.DurationFormat.prototype.resolvedOptions.call(this);let t=Hg(Pr(e));return jE.call(
this,t)});var uL=Object.freeze({__proto__:null,DateTimeFormat:wr,ModifiedIntlDurationFormatPrototypeFormat:Ed}),$o=class{constructor(t){
if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");wg(this,gl(t))}get epochMilliseconds(){
return O(this,Et),Dr(g(this,re),"floor")}get epochNanoseconds(){return O(this,Et),Dg($.default.BigInt(g(this,re)))}add(t){
return O(this,Et),Dm("add",this,t)}subtract(t){return O(this,Et),Dm("subtract",this,t)}until(t,r=void 0){return O(this,Et),
Rm("until",this,t,r)}since(t,r=void 0){return O(this,Et),Rm("since",this,t,r)}round(t){if(O(this,Et),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?_a("smallestUnit",t):J(t),n=ui(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",$n);return di(n,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[i],
!0),Vr(Bu(g(this,re),n,i,a))}equals(t){O(this,Et);let r=so(t),n=g(this,re),a=g(r,re);return $.default.equal($.default.BigInt(
n),$.default.BigInt(a))}toString(t=void 0){O(this,Et);let r=J(t),n=Fo(r),a=zr(r,"trunc"),i=dr(r,"smallestUnit","time",void 0);
if(i==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let o=r.timeZone;o!==void 0&&(o=
er(o));let{precision:s,unit:l,increment:c}=Bo(i,n);return wm(Vr(Bu(g(this,re),c,l,a)),o,s)}toJSON(){return O(this,Et),wm(
this,void 0,"auto")}toLocaleString(t=void 0,r=void 0){return O(this,Et),new wr(t,r).format(this)}valueOf(){ra("Instant")}toZonedDateTimeISO(t){
O(this,Et);let r=er(t);return Nt(g(this,re),r,"iso8601")}static fromEpochMilliseconds(t){return Vr(Yr(xl(t)))}static fromEpochNanoseconds(t){
return Vr(gl(t))}static from(t){return so(t)}static compare(t,r){let n=so(t),a=so(r),i=g(n,re),o=g(a,re);return $.default.
lessThan(i,o)?-1:$.default.greaterThan(i,o)?1:0}};In($o,"Temporal.Instant");var Ro=class{constructor(t,r,n,a="iso8601"){
let i=se(t),o=se(r),s=se(n),l=nr(a===void 0?"iso8601":mt(a));Sa(i,o,s),mg(this,{year:i,month:o,day:s},l)}get calendarId(){
return O(this,tt),g(this,j)}get era(){return Bt(this,"era")}get eraYear(){return Bt(this,"eraYear")}get year(){return Bt(
this,"year")}get month(){return Bt(this,"month")}get monthCode(){return Bt(this,"monthCode")}get day(){return Bt(this,"d\
ay")}get dayOfWeek(){return Bt(this,"dayOfWeek")}get dayOfYear(){return Bt(this,"dayOfYear")}get weekOfYear(){return Bt(
this,"weekOfYear")?.week}get yearOfWeek(){return Bt(this,"weekOfYear")?.year}get daysInWeek(){return Bt(this,"daysInWeek")}get daysInMonth(){
return Bt(this,"daysInMonth")}get daysInYear(){return Bt(this,"daysInYear")}get monthsInYear(){return Bt(this,"monthsInY\
ear")}get inLeapYear(){return Bt(this,"inLeapYear")}with(t,r=void 0){if(O(this,tt),!nt(t))throw new TypeError("invalid a\
rgument");ci(t);let n=g(this,j),a=tr(n,g(this,ne));return a=ka(n,a,Sr(n,t,["year","month","monthCode","day"],[],"partial")),
Qt(Qn(n,a,$e(J(r))),n)}withCalendar(t){O(this,tt);let r=Vo(t);return Qt(g(this,ne),r)}add(t,r=void 0){return O(this,tt),
jm("add",this,t,r)}subtract(t,r=void 0){return O(this,tt),jm("subtract",this,t,r)}until(t,r=void 0){return O(this,tt),Om(
"until",this,t,r)}since(t,r=void 0){return O(this,tt),Om("since",this,t,r)}equals(t){O(this,tt);let r=io(t);return an(g(
this,ne),g(r,ne))===0&&rn(g(this,j),g(r,j))}toString(t=void 0){return O(this,tt),Tm(this,Uo(J(t)))}toJSON(){return O(this,
tt),Tm(this)}toLocaleString(t=void 0,r=void 0){return O(this,tt),new wr(t,r).format(this)}valueOf(){ra("PlainDate")}toPlainDateTime(t=void 0){
O(this,tt);let r=hg(t);return Cr(Re(g(this,ne),r),g(this,j))}toZonedDateTime(t){let r,n;if(O(this,tt),nt(t)){let o=t.timeZone;
o===void 0?r=er(t):(r=er(o),n=t.plainTime)}else r=er(t);let a=g(this,ne),i;return n===void 0?i=Yn(r,a):(n=Kn(n),i=Mt(r,Re(
a,g(n,rt)),"compatible")),Nt(i,r,g(this,j))}toPlainYearMonth(){O(this,tt);let t=g(this,j);return ei(To(t,tr(t,g(this,ne)),
"constrain"),t)}toPlainMonthDay(){O(this,tt);let t=g(this,j);return Qa(dl(t,tr(t,g(this,ne)),"constrain"),t)}static from(t,r=void 0){
return io(t,r)}static compare(t,r){let n=io(t),a=io(r);return an(g(n,ne),g(a,ne))}};function Bt(e,t){O(e,tt);let r=g(e,ne);
return Ho(e).isoToDate(r,{[t]:!0})[t]}In(Ro,"Temporal.PlainDate");var Oo=class{constructor(t,r,n,a=0,i=0,o=0,s=0,l=0,c=0,u="\
iso8601"){let d=se(t),f=se(r),h=se(n),y=a===void 0?0:se(a),b=i===void 0?0:se(i),T=o===void 0?0:se(o),k=s===void 0?0:se(s),
S=l===void 0?0:se(l),_=c===void 0?0:se(c),I=nr(u===void 0?"iso8601":mt(u));vd(d,f,h,y,b,T,k,S,_),gg(this,{isoDate:{year:d,
month:f,day:h},time:{hour:y,minute:b,second:T,millisecond:k,microsecond:S,nanosecond:_}},I)}get calendarId(){return O(this,
Ve),g(this,j)}get year(){return Ht(this,"year")}get month(){return Ht(this,"month")}get monthCode(){return Ht(this,"mont\
hCode")}get day(){return Ht(this,"day")}get hour(){return Ka(this,"hour")}get minute(){return Ka(this,"minute")}get second(){
return Ka(this,"second")}get millisecond(){return Ka(this,"millisecond")}get microsecond(){return Ka(this,"microsecond")}get nanosecond(){
return Ka(this,"nanosecond")}get era(){return Ht(this,"era")}get eraYear(){return Ht(this,"eraYear")}get dayOfWeek(){return Ht(
this,"dayOfWeek")}get dayOfYear(){return Ht(this,"dayOfYear")}get weekOfYear(){return Ht(this,"weekOfYear")?.week}get yearOfWeek(){
return Ht(this,"weekOfYear")?.year}get daysInWeek(){return Ht(this,"daysInWeek")}get daysInYear(){return Ht(this,"daysIn\
Year")}get daysInMonth(){return Ht(this,"daysInMonth")}get monthsInYear(){return Ht(this,"monthsInYear")}get inLeapYear(){
return Ht(this,"inLeapYear")}with(t,r=void 0){if(O(this,Ve),!nt(t))throw new TypeError("invalid argument");ci(t);let n=g(
this,j),a=g(this,Ke),i={...tr(n,a.isoDate),...a.time};return i=ka(n,i,Sr(n,t,["year","month","monthCode","day"],["hour",
"minute","second","millisecond","microsecond","nanosecond"],"partial")),Cr(Wo(n,i,$e(J(r))),n)}withPlainTime(t=void 0){O(
this,Ve);let r=hg(t);return Cr(Re(g(this,Ke).isoDate,r),g(this,j))}withCalendar(t){O(this,Ve);let r=Vo(t);return Cr(g(this,
Ke),r)}add(t,r=void 0){return O(this,Ve),Lm("add",this,t,r)}subtract(t,r=void 0){return O(this,Ve),Lm("subtract",this,t,
r)}until(t,r=void 0){return O(this,Ve),Im("until",this,t,r)}since(t,r=void 0){return O(this,Ve),Im("since",this,t,r)}round(t){
if(O(this,Ve),t===void 0)throw new TypeError("options parameter is required");let r=typeof t=="string"?_a("smallestUnit",
t):J(t),n=ui(r),a=zr(r,"halfExpand"),i=dr(r,"smallestUnit","time",$n,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,
microsecond:1e3,nanosecond:1e3}[i];di(n,o,o===1);let s=g(this,Ke);return Cr(n===1&&i==="nanosecond"?s:Hu(s,n,i,a),g(this,
j))}equals(t){O(this,Ve);let r=oo(t);return si(g(this,Ke),g(r,Ke))===0&&rn(g(this,j),g(r,j))}toString(t=void 0){O(this,Ve);
let r=J(t),n=Uo(r),a=Fo(r),i=zr(r,"trunc"),o=dr(r,"smallestUnit","time",void 0);if(o==="hour")throw new RangeError('smal\
lestUnit must be a time unit other than "hour"');let{precision:s,unit:l,increment:c}=Bo(o,a),u=Hu(g(this,Ke),c,l,i);return Ea(
u),So(u,g(this,j),s,n)}toJSON(){return O(this,Ve),So(g(this,Ke),g(this,j),"auto")}toLocaleString(t=void 0,r=void 0){return O(
this,Ve),new wr(t,r).format(this)}valueOf(){ra("PlainDateTime")}toZonedDateTime(t,r=void 0){O(this,Ve);let n=er(t),a=go(
J(r));return Nt(Mt(n,g(this,Ke),a),n,g(this,j))}toPlainDate(){return O(this,Ve),Qt(g(this,Ke).isoDate,g(this,j))}toPlainTime(){
return O(this,Ve),kn(g(this,Ke).time)}static from(t,r=void 0){return oo(t,r)}static compare(t,r){let n=oo(t),a=oo(r);return si(
g(n,Ke),g(a,Ke))}};function Ht(e,t){O(e,Ve);let r=g(e,Ke).isoDate;return Ho(e).isoToDate(r,{[t]:!0})[t]}function Ka(e,t){
return O(e,Ve),g(e,Ke).time[t]}In(Oo,"Temporal.PlainDateTime");var Io=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0,s=0,l=0,c=0,u=0){
let d=t===void 0?0:qr(t),f=r===void 0?0:qr(r),h=n===void 0?0:qr(n),y=a===void 0?0:qr(a),b=i===void 0?0:qr(i),T=o===void 0?
0:qr(o),k=s===void 0?0:qr(s),S=l===void 0?0:qr(l),_=c===void 0?0:qr(c),I=u===void 0?0:qr(u);Cl(d,f,h,y,b,T,k,S,_,I),On(this),
fe(this,qt,d),fe(this,Vt,f),fe(this,lr,h),fe(this,Yt,y),fe(this,zt,b),fe(this,Kt,T),fe(this,Gt,k),fe(this,Jt,S),fe(this,
Zt,_),fe(this,cr,I)}get years(){return O(this,et),g(this,qt)}get months(){return O(this,et),g(this,Vt)}get weeks(){return O(
this,et),g(this,lr)}get days(){return O(this,et),g(this,Yt)}get hours(){return O(this,et),g(this,zt)}get minutes(){return O(
this,et),g(this,Kt)}get seconds(){return O(this,et),g(this,Gt)}get milliseconds(){return O(this,et),g(this,Jt)}get microseconds(){
return O(this,et),g(this,Zt)}get nanoseconds(){return O(this,et),g(this,cr)}get sign(){return O(this,et),hl(this)}get blank(){
return O(this,et),hl(this)===0}with(t){O(this,et);let r=fg(t),{years:n=g(this,qt),months:a=g(this,Vt),weeks:i=g(this,lr),
days:o=g(this,Yt),hours:s=g(this,zt),minutes:l=g(this,Kt),seconds:c=g(this,Gt),milliseconds:u=g(this,Jt),microseconds:d=g(
this,Zt),nanoseconds:f=g(this,cr)}=r;return new e(n,a,i,o,s,l,c,u,d,f)}negated(){return O(this,et),fr(this)}abs(){return O(
this,et),new e(Math.abs(g(this,qt)),Math.abs(g(this,Vt)),Math.abs(g(this,lr)),Math.abs(g(this,Yt)),Math.abs(g(this,zt)),
Math.abs(g(this,Kt)),Math.abs(g(this,Gt)),Math.abs(g(this,Jt)),Math.abs(g(this,Zt)),Math.abs(g(this,cr)))}add(t){return O(
this,et),Mm("add",this,t)}subtract(t){return O(this,et),Mm("subtract",this,t)}round(t){if(O(this,et),t===void 0)throw new TypeError(
"options parameter is required");let r=wn(this),n=typeof t=="string"?_a("smallestUnit",t):J(t),a=dr(n,"largestUnit","dat\
etime",void 0,["auto"]),{plainRelativeTo:i,zonedRelativeTo:o}=Su(n),s=ui(n),l=zr(n,"halfExpand"),c=dr(n,"smallestUnit","\
datetime",void 0),u=!0;c||(u=!1,c="nanosecond");let d=En(r,c),f=!0;if(a||(f=!1,a=d),a==="auto"&&(a=d),!u&&!f)throw new RangeError(
"at least one of smallestUnit or largestUnit is required");if(En(a,c)!==a)throw new RangeError(`largestUnit ${a} cannot \
be smaller than smallestUnit ${c}`);let h={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[c];
if(h!==void 0&&di(s,h,!1),s>1&&Tn(c)==="date"&&a!==c)throw new RangeError("For calendar units with roundingIncrement > 1\
, use largestUnit = smallestUnit");if(o){let b=Za(this),T=g(o,Ie),k=g(o,j),S=g(o,re);return b=Mg(S,uo(S,T,k,b),T,k,a,s,c,
l),Tn(a)==="date"&&(a="hour"),Nr(b,a)}if(i){let b=en(this),T=oi({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},b.time),k=g(i,ne),S=g(i,j),_=Tr(S,k,Pt(b.date,T.deltaDays),"constrain");return b=Pg(Re(k,{deltaDays:0,hour:0,
minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(_,T),S,a,s,c,l),Nr(b,a)}if(Xr(r))throw new RangeError(`a\
 starting point is required for ${r}s balancing`);if(Xr(a))throw new RangeError(`a starting point is required for ${a}s \
balancing`);let y=en(this);if(c==="day"){let{quotient:b,remainder:T}=y.time.divmod(ll),k=y.date.days+b+yo(T,"day");k=Gn(
k,s,l),y=xn({years:0,months:0,weeks:0,days:k},Be.ZERO)}else y=xn({years:0,months:0,weeks:0,days:0},ml(y.time,s,c,l));return Nr(
y,a)}total(t){if(O(this,et),t===void 0)throw new TypeError("options argument is required");let r=typeof t=="string"?_a("\
unit",t):J(t),{plainRelativeTo:n,zonedRelativeTo:a}=Su(r),i=dr(r,"unit","datetime",$n);if(a){let s=Za(this),l=g(a,Ie),c=g(
a,j),u=g(a,re);return function(d,f,h,y,b){return Tn(b)==="time"?yo(Be.fromEpochNsDiff(f,d),b):$m(Cg(d,f,h,y,b),f,Mr(h,d),
h,y,b)}(u,uo(u,l,c,s),l,c,i)}if(n){let s=en(this),l=oi({deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,
nanosecond:0},s.time),c=g(n,ne),u=g(n,j),d=Tr(u,c,Pt(s.date,l.deltaDays),"constrain");return function(f,h,y,b){if(si(f,h)==
0)return 0;Ea(f),Ea(h);let T=Ig(f,h,y,b);return b==="nanosecond"?$.default.toNumber(T.time.totalNs):$m(T,_t(h),f,null,y,
b)}(Re(c,{deltaDays:0,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0}),Re(d,l),u,i)}let o=wn(this);if(Xr(
o))throw new RangeError(`a starting point is required for ${o}s total`);if(Xr(i))throw new RangeError(`a starting point \
is required for ${i}s total`);return yo(en(this).time,i)}toString(t=void 0){O(this,et);let r=J(t),n=Fo(r),a=zr(r,"trunc"),
i=dr(r,"smallestUnit","time",void 0);if(i==="hour"||i==="minute")throw new RangeError('smallestUnit must be a time unit \
other than "hours" or "minutes"');let{precision:o,unit:s,increment:l}=Bo(i,n);if(s==="nanosecond"&&l===1)return al(this,
o);let c=wn(this),u=Za(this),d=ml(u.time,l,s,a);return u=xn(u.date,d),al(Nr(u,En(c,"second")),o)}toJSON(){return O(this,
et),al(this,"auto")}toLocaleString(t=void 0,r=void 0){if(O(this,et),typeof Intl.DurationFormat=="function"){let n=new Intl.
DurationFormat(t,r);return Ed.call(n,this)}return console.warn("Temporal.Duration.prototype.toLocaleString() requires In\
tl.DurationFormat."),al(this,"auto")}valueOf(){ra("Duration")}static from(t){return Pr(t)}static compare(t,r,n=void 0){let a=Pr(
t),i=Pr(r),o=J(n),{plainRelativeTo:s,zonedRelativeTo:l}=Su(o);if(g(a,qt)===g(i,qt)&&g(a,Vt)===g(i,Vt)&&g(a,lr)===g(i,lr)&&
g(a,Yt)===g(i,Yt)&&g(a,zt)===g(i,zt)&&g(a,Kt)===g(i,Kt)&&g(a,Gt)===g(i,Gt)&&g(a,Jt)===g(i,Jt)&&g(a,Zt)===g(i,Zt)&&g(a,cr)===
g(i,cr))return 0;let c=wn(a),u=wn(i),d=Za(a),f=Za(i);if(l&&(Tn(c)==="date"||Tn(u)==="date")){let k=g(l,Ie),S=g(l,j),_=g(
l,re),I=uo(_,k,S,d),N=uo(_,k,S,f);return ur($.default.toNumber($.default.subtract(I,N)))}let h=d.date.days,y=f.date.days;
if(Xr(c)||Xr(u)){if(!s)throw new RangeError("A starting point is required for years, months, or weeks comparison");h=Am(
d.date,s),y=Am(f.date,s)}let b=d.time.add24HourDays(h),T=f.time.add24HourDays(y);return b.cmp(T)}};In(Io,"Temporal.Durat\
ion");var Co=class{constructor(t,r,n="iso8601",a=1972){let i=se(t),o=se(r),s=nr(n===void 0?"iso8601":mt(n)),l=se(a);Sa(l,
i,o),yg(this,{year:l,month:i,day:o},s)}get monthCode(){return Wm(this,"monthCode")}get day(){return Wm(this,"day")}get calendarId(){
return O(this,vr),g(this,j)}with(t,r=void 0){if(O(this,vr),!nt(t))throw new TypeError("invalid argument");ci(t);let n=g(
this,j),a=tr(n,g(this,ne),"month-day");return a=ka(n,a,Sr(n,t,["year","month","monthCode","day"],[],"partial")),Qa(dl(n,
a,$e(J(r))),n)}equals(t){O(this,vr);let r=vm(t);return an(g(this,ne),g(r,ne))===0&&rn(g(this,j),g(r,j))}toString(t=void 0){
return O(this,vr),Sm(this,Uo(J(t)))}toJSON(){return O(this,vr),Sm(this)}toLocaleString(t=void 0,r=void 0){return O(this,
vr),new wr(t,r).format(this)}valueOf(){ra("PlainMonthDay")}toPlainDate(t){if(O(this,vr),!nt(t))throw new TypeError("argu\
ment should be an object");let r=g(this,j);return Qt(Qn(r,ka(r,tr(r,g(this,ne),"month-day"),Sr(r,t,["year"],[],[])),"con\
strain"),r)}static from(t,r=void 0){return vm(t,r)}};function Wm(e,t){O(e,vr);let r=g(e,ne);return Ho(e).isoToDate(r,{[t]:!0})[t]}
function xu(e){return Mr(e,Vu())}In(Co,"Temporal.PlainMonthDay");var Wg={instant:()=>Vr(Vu()),plainDateTimeISO:(e=to())=>Cr(
xu(er(e)),"iso8601"),plainDateISO:(e=to())=>Qt(xu(er(e)).isoDate,"iso8601"),plainTimeISO:(e=to())=>kn(xu(er(e)).time),timeZoneId:()=>to(),
zonedDateTimeISO:(e=to())=>{let t=er(e);return Nt(Vu(),t,"iso8601")},[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(
Wg,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});var No=class e{constructor(t=0,r=0,n=0,a=0,i=0,o=0){
let s=t===void 0?0:se(t),l=r===void 0?0:se(r),c=n===void 0?0:se(n),u=a===void 0?0:se(a),d=i===void 0?0:se(i),f=o===void 0?
0:se(o);Il(s,l,c,u,d,f),vg(this,{hour:s,minute:l,second:c,millisecond:u,microsecond:d,nanosecond:f})}get hour(){return O(
this,ot),g(this,rt).hour}get minute(){return O(this,ot),g(this,rt).minute}get second(){return O(this,ot),g(this,rt).second}get millisecond(){
return O(this,ot),g(this,rt).millisecond}get microsecond(){return O(this,ot),g(this,rt).microsecond}get nanosecond(){return O(
this,ot),g(this,rt).nanosecond}with(t,r=void 0){if(O(this,ot),!nt(t))throw new TypeError("invalid argument");ci(t);let n=Mu(
t,"partial"),a=Mu(this),{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=Object.assign(a,n),d=$e(J(r));
return{hour:i,minute:o,second:s,millisecond:l,microsecond:c,nanosecond:u}=$l(i,o,s,l,c,u,d),new e(i,o,s,l,c,u)}add(t){return O(
this,ot),Um("add",this,t)}subtract(t){return O(this,ot),Um("subtract",this,t)}until(t,r=void 0){return O(this,ot),Cm("un\
til",this,t,r)}since(t,r=void 0){return O(this,ot),Cm("since",this,t,r)}round(t){if(O(this,ot),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?_a("smallestUnit",t):J(t),n=ui(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",$n);return di(n,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i],!1),
kn(Wu(g(this,rt),n,i,a))}equals(t){O(this,ot);let r=Kn(t);return qu(g(this,rt),g(r,rt))===0}toString(t=void 0){O(this,ot);
let r=J(t),n=Fo(r),a=zr(r,"trunc"),i=dr(r,"smallestUnit","time",void 0);if(i==="hour")throw new RangeError('smallestUnit\
 must be a time unit other than "hour"');let{precision:o,unit:s,increment:l}=Bo(i,n);return km(Wu(g(this,rt),l,s,a),o)}toJSON(){
return O(this,ot),km(g(this,rt),"auto")}toLocaleString(t=void 0,r=void 0){return O(this,ot),new wr(t,r).format(this)}valueOf(){
ra("PlainTime")}static from(t,r=void 0){return Kn(t,r)}static compare(t,r){let n=Kn(t),a=Kn(r);return qu(g(n,rt),g(a,rt))}};
In(No,"Temporal.PlainTime");var Po=class{constructor(t,r,n="iso8601",a=1){let i=se(t),o=se(r),s=nr(n===void 0?"iso8601":
mt(n)),l=se(a);Sa(i,o,l),bg(this,{year:i,month:o,day:l},s)}get year(){return vn(this,"year")}get month(){return vn(this,
"month")}get monthCode(){return vn(this,"monthCode")}get calendarId(){return O(this,xt),g(this,j)}get era(){return vn(this,
"era")}get eraYear(){return vn(this,"eraYear")}get daysInMonth(){return vn(this,"daysInMonth")}get daysInYear(){return vn(
this,"daysInYear")}get monthsInYear(){return vn(this,"monthsInYear")}get inLeapYear(){return vn(this,"inLeapYear")}with(t,r=void 0){
if(O(this,xt),!nt(t))throw new TypeError("invalid argument");ci(t);let n=g(this,j),a=tr(n,g(this,ne),"year-month");return a=
ka(n,a,Sr(n,t,["year","month","monthCode"],[],"partial")),ei(To(n,a,$e(J(r))),n)}add(t,r=void 0){return O(this,xt),Fm("a\
dd",this,t,r)}subtract(t,r=void 0){return O(this,xt),Fm("subtract",this,t,r)}until(t,r=void 0){return O(this,xt),Nm("unt\
il",this,t,r)}since(t,r=void 0){return O(this,xt),Nm("since",this,t,r)}equals(t){O(this,xt);let r=lo(t);return an(g(this,
ne),g(r,ne))===0&&rn(g(this,j),g(r,j))}toString(t=void 0){return O(this,xt),Em(this,Uo(J(t)))}toJSON(){return O(this,xt),
Em(this)}toLocaleString(t=void 0,r=void 0){return O(this,xt),new wr(t,r).format(this)}valueOf(){ra("PlainYearMonth")}toPlainDate(t){
if(O(this,xt),!nt(t))throw new TypeError("argument should be an object");let r=g(this,j);return Qt(Qn(r,ka(r,tr(r,g(this,
ne),"year-month"),Sr(r,t,["day"],[],[])),"constrain"),r)}static from(t,r=void 0){return lo(t,r)}static compare(t,r){let n=lo(
t),a=lo(r);return an(g(n,ne),g(a,ne))}};function vn(e,t){O(e,xt);let r=g(e,ne);return Ho(e).isoToDate(r,{[t]:!0})[t]}In(
Po,"Temporal.PlainYearMonth");var LE=wr.prototype.resolvedOptions,Mo=class{constructor(t,r,n="iso8601"){if(arguments.length<
1)throw new TypeError("missing argument: epochNanoseconds is required");let a=gl(t),i=mt(r),{tzName:o,offsetMinutes:s}=Jn(
i);if(s===void 0){let l=pl(o);if(!l)throw new RangeError(`unknown time zone ${o}`);i=l.identifier}else i=md(s);Tg(this,a,
i,nr(n===void 0?"iso8601":mt(n)))}get calendarId(){return O(this,be),g(this,j)}get timeZoneId(){return O(this,be),g(this,
Ie)}get year(){return Wt(this,"year")}get month(){return Wt(this,"month")}get monthCode(){return Wt(this,"monthCode")}get day(){
return Wt(this,"day")}get hour(){return Ga(this,"hour")}get minute(){return Ga(this,"minute")}get second(){return Ga(this,
"second")}get millisecond(){return Ga(this,"millisecond")}get microsecond(){return Ga(this,"microsecond")}get nanosecond(){
return Ga(this,"nanosecond")}get era(){return Wt(this,"era")}get eraYear(){return Wt(this,"eraYear")}get epochMilliseconds(){
return O(this,be),Dr(g(this,re),"floor")}get epochNanoseconds(){return O(this,be),Dg(g(this,re))}get dayOfWeek(){return Wt(
this,"dayOfWeek")}get dayOfYear(){return Wt(this,"dayOfYear")}get weekOfYear(){return Wt(this,"weekOfYear")?.week}get yearOfWeek(){
return Wt(this,"weekOfYear")?.year}get hoursInDay(){O(this,be);let t=g(this,Ie),r=Zr(this).isoDate,n=pr(r.year,r.month,r.
day+1),a=Yn(t,r),i=Yn(t,n);return yo(Be.fromEpochNsDiff(i,a),"hour")}get daysInWeek(){return Wt(this,"daysInWeek")}get daysInMonth(){
return Wt(this,"daysInMonth")}get daysInYear(){return Wt(this,"daysInYear")}get monthsInYear(){return Wt(this,"monthsInY\
ear")}get inLeapYear(){return Wt(this,"inLeapYear")}get offset(){return O(this,be),Du(Sn(g(this,Ie),g(this,re)))}get offsetNanoseconds(){
return O(this,be),Sn(g(this,Ie),g(this,re))}with(t,r=void 0){if(O(this,be),!nt(t))throw new TypeError("invalid zoned-dat\
e-time-like");ci(t);let n=g(this,j),a=g(this,Ie),i=Sn(a,g(this,re)),o=Zr(this),s={...tr(n,o.isoDate),...o.time,offset:Du(
i)};s=ka(n,s,Sr(n,t,["year","month","monthCode","day"],["hour","minute","second","millisecond","microsecond","nanosecond",
"offset"],"partial"));let l=J(r),c=go(l),u=il(l,"prefer"),d=Wo(n,s,$e(l)),f=pi(s.offset);return Nt(ul(d.isoDate,d.time,"\
option",f,a,c,u,!1),a,n)}withPlainTime(t=void 0){O(this,be);let r=g(this,Ie),n=g(this,j),a=Zr(this).isoDate,i;return i=t===
void 0?Yn(r,a):Mt(r,Re(a,g(Kn(t),rt)),"compatible"),Nt(i,r,n)}withTimeZone(t){O(this,be);let r=er(t);return Nt(g(this,re),
r,g(this,j))}withCalendar(t){O(this,be);let r=Vo(t);return Nt(g(this,re),g(this,Ie),r)}add(t,r=void 0){return O(this,be),
Bm("add",this,t,r)}subtract(t,r=void 0){return O(this,be),Bm("subtract",this,t,r)}until(t,r=void 0){return O(this,be),Pm(
"until",this,t,r)}since(t,r=void 0){return O(this,be),Pm("since",this,t,r)}round(t){if(O(this,be),t===void 0)throw new TypeError(
"options parameter is required");let r=typeof t=="string"?_a("smallestUnit",t):J(t),n=ui(r),a=zr(r,"halfExpand"),i=dr(r,
"smallestUnit","time",$n,["day"]),o={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[i];
if(di(n,o,o===1),i==="nanosecond"&&n===1)return Nt(g(this,re),g(this,Ie),g(this,j));let s=g(this,Ie),l=g(this,re),c=Zr(this),
u;if(i==="day"){let d=c.isoDate,f=pr(d.year,d.month,d.day+1),h=Yn(s,d),y=Yn(s,f),b=$.default.subtract(y,h);u=Be.fromEpochNsDiff(
l,h).round(b,a).addToEpochNs(h)}else{let d=Hu(c,n,i,a),f=Sn(s,l);u=ul(d.isoDate,d.time,"option",f,s,"compatible","prefer",
!1)}return Nt(u,s,g(this,j))}equals(t){O(this,be);let r=co(t),n=g(this,re),a=g(r,re);return!!$.default.equal($.default.BigInt(
n),$.default.BigInt(a))&&!!kg(g(this,Ie),g(r,Ie))&&rn(g(this,j),g(r,j))}toString(t=void 0){O(this,be);let r=J(t),n=Uo(r),
a=Fo(r),i=function(f){return _n(f,"offset",["auto","never"],"auto")}(r),o=zr(r,"trunc"),s=dr(r,"smallestUnit","time",void 0);
if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let l=function(f){return _n(f,"\
timeZoneName",["auto","never","critical"],"auto")}(r),{precision:c,unit:u,increment:d}=Bo(s,a);return xm(this,c,n,l,i,{unit:u,
increment:d,roundingMode:o})}toLocaleString(t=void 0,r=void 0){O(this,be);let n=J(r),a=Object.create(null);if(function(l,c,u,d){
if(c==null)return;let f=Reflect.ownKeys(c);for(let h=0;h<f.length;h++){let y=f[h];if(!u.some(b=>Object.is(b,y))&&Object.
prototype.propertyIsEnumerable.call(c,y)){let b=c[y];l[y]=b}}}(a,n,["timeZone"]),n.timeZone!==void 0)throw new TypeError(
"ZonedDateTime toLocaleString does not accept a timeZone option");if(a.year===void 0&&a.month===void 0&&a.day===void 0&&
a.era===void 0&&a.weekday===void 0&&a.dateStyle===void 0&&a.hour===void 0&&a.minute===void 0&&a.second===void 0&&a.fractionalSecondDigits===
void 0&&a.timeStyle===void 0&&a.dayPeriod===void 0&&a.timeZoneName===void 0&&(a.timeZoneName="short"),a.timeZone=g(this,
Ie),_m(a.timeZone))throw new RangeError("toLocaleString does not currently support offset time zones");let i=new wr(t,a),
o=LE.call(i).calendar,s=g(this,j);if(s!=="iso8601"&&o!=="iso8601"&&!rn(o,s))throw new RangeError(`cannot format ZonedDat\
eTime with calendar ${s} in locale with calendar ${o}`);return i.format(Vr(g(this,re)))}toJSON(){return O(this,be),xm(this,
"auto")}valueOf(){ra("ZonedDateTime")}startOfDay(){O(this,be);let t=g(this,Ie);return Nt(Yn(t,Zr(this).isoDate),t,g(this,
j))}getTimeZoneTransition(t){O(this,be);let r=g(this,Ie);if(t===void 0)throw new TypeError("options parameter is require\
d");let n=_n(typeof t=="string"?_a("direction",t):J(t),"direction",["next","previous"],$n);if(n===void 0)throw new TypeError(
"direction option is required");if(_m(r)||r==="UTC")return null;let a=g(this,re),i=n==="next"?yd(r,a):Lu(r,a);return i===
null?null:Nt(i,r,g(this,j))}toInstant(){return O(this,be),Vr(g(this,re))}toPlainDate(){return O(this,be),Qt(Zr(this).isoDate,
g(this,j))}toPlainTime(){return O(this,be),kn(Zr(this).time)}toPlainDateTime(){return O(this,be),Cr(Zr(this),g(this,j))}static from(t,r=void 0){
return co(t,r)}static compare(t,r){let n=co(t),a=co(r),i=g(n,re),o=g(a,re);return $.default.lessThan($.default.BigInt(i),
$.default.BigInt(o))?-1:$.default.greaterThan($.default.BigInt(i),$.default.BigInt(o))?1:0}};function Zr(e){return Mr(g(
e,Ie),g(e,re))}function Wt(e,t){O(e,be);let r=Zr(e).isoDate;return Ho(e).isoToDate(r,{[t]:!0})[t]}function Ga(e,t){return O(
e,be),Zr(e).time[t]}In(Mo,"Temporal.ZonedDateTime");var Ye=Object.freeze({__proto__:null,Duration:Io,Instant:$o,Now:Wg,PlainDate:Ro,
PlainDateTime:Oo,PlainMonthDay:Co,PlainTime:No,PlainYearMonth:Po,ZonedDateTime:Mo}),dL=class{toTemporalInstant(){return Vr(
Yr(Date.prototype.valueOf.call(this)))}}.prototype.toTemporalInstant,UE=[$o,Ro,Oo,Io,Co,No,Po,Mo];for(let e of UE){let t=Object.
getOwnPropertyDescriptor(e,"prototype");(t.configurable||t.enumerable||t.writable)&&(t.configurable=!1,t.enumerable=!1,t.
writable=!1,Object.defineProperty(e,"prototype",t))}var jr=ie(Le(),1);var Me=ie(Le(),1),p=ie(Le(),1),Dt=ie(Le(),1),pt=ie(Le(),1);var Jv=ie(Yg(),1),Zv=ie(Gg(),1),Xv=ie(Zg(),1),Qv=ie(Qg(),1),eb=ie(ty(),1);var xd=class{add(t,r,n){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else
(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],r&&this[a][n?"unshift":"push"](r)},this)}run(t,r){this[t]=
this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}},_d=class{constructor(t){this.jsep=t,this.
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
GE=new xd;Object.assign(hr,{hooks:GE,plugins:new _d(hr),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"\
Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"\
UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,
PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,
SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,
"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(
["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});hr.max_unop_len=
hr.getMaxKeyLen(hr.unary_ops);hr.max_binop_len=hr.getMaxKeyLen(hr.binary_ops);var ce=e=>new hr(e).parse(),JE=Object.getOwnPropertyNames(
class{});Object.getOwnPropertyNames(hr).filter(e=>!JE.includes(e)&&ce[e]===void 0).forEach(e=>{ce[e]=hr[e]});ce.Jsep=hr;
var ZE="ConditionalExpression",XE={name:"ternary",init(e){e.hooks.add("after-expression",function(r){if(r.node&&this.code===
e.QUMARK_CODE){this.index++;let n=r.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),
this.code===e.COLON_CODE){this.index++;let i=this.gobbleExpression();if(i||this.throwError("Expected expression"),r.node=
{type:ZE,test:n,consequent:a,alternate:i},n.operator&&e.binary_ops[n.operator]<=.9){let o=n;for(;o.right.operator&&e.binary_ops[o.
right.operator]<=.9;)o=o.right;r.node.test=o.right,o.right=r.node,r.node=n}}else this.throwError("Expected :")}})}};ce.plugins.
register(XE);var cb=ie(Le(),1),me=ie(Le(),1),vt=ie(Le(),1),Ue=ie(Le(),1),Da=ie(Le(),1),gb=ie(Le(),1);var QE=(e,t,r)=>{if(t.length===1&&t[0]===r){let n=!1;try{let a={};e(a)===a&&(n=!0)}catch{}if(n){let a;try{throw new Error}catch(i){
({stack:a}=i)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:a})}}},ex=(e,t,r)=>{
let{memoize:n,memoizeOptions:a}=t,{inputSelectorResults:i,inputSelectorResultsCopy:o}=e,s=n(()=>({}),...a);if(!(s.apply(
null,i)===s.apply(null,o))){let c;try{throw new Error}catch(u){({stack:c}=u)}console.warn(`An input selector returned a \
different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:r,firstInputs:i,secondInputs:o,
stack:c})}},tx={inputStabilityCheck:"once",identityFunctionCheck:"once"};function rx(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function nx(e,t=`\
expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function ax(e,t="expecte\
d all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){let r=e.map(
n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var ry=e=>Array.
isArray(e)?e:[e];function ix(e){let t=Array.isArray(e[0])?e[0]:e;return ax(t,"createSelector expects all input-selectors\
 to be functions, but received the following types: "),t}function ny(e,t){let r=[],{length:n}=e;for(let a=0;a<n;a++)r.push(
e[a].apply(null,t));return r}var ox=(e,t)=>{let{identityFunctionCheck:r,inputStabilityCheck:n}={...tx,...t};return{identityFunctionCheck:{
shouldRun:r==="always"||r==="once"&&e,run:QE},inputStabilityCheck:{shouldRun:n==="always"||n==="once"&&e,run:ex}}};var TL=Symbol();var kL=Object.getPrototypeOf({});var sx=class{constructor(e){this.value=e}deref(){return this.value}},lx=typeof WeakRef<"u"?WeakRef:sx,cx=0,ay=1;function Dl(){
return{s:cx,v:void 0,o:null,p:null}}function jl(e,t={}){let r=Dl(),{resultEqualityCheck:n}=t,a,i=0;function o(){let s=r,
{length:l}=arguments;for(let d=0,f=l;d<f;d++){let h=arguments[d];if(typeof h=="function"||typeof h=="object"&&h!==null){
let y=s.o;y===null&&(s.o=y=new WeakMap);let b=y.get(h);b===void 0?(s=Dl(),y.set(h,s)):s=b}else{let y=s.p;y===null&&(s.p=
y=new Map);let b=y.get(h);b===void 0?(s=Dl(),y.set(h,s)):s=b}}let c=s,u;if(s.s===ay)u=s.v;else if(u=e.apply(null,arguments),
i++,n){let d=a?.deref?.()??a;d!=null&&n(d,u)&&(u=d,i!==0&&i--),a=typeof u=="object"&&u!==null||typeof u=="function"?new lx(
u):u}return c.s=ay,c.v=u,u}return o.clearCache=()=>{r=Dl(),o.resetResultsCount()},o.resultsCount=()=>i,o.resetResultsCount=
()=>{i=0},o}function Ad(e,...t){let r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...a)=>{let i=0,o=0,s,l={},
c=a.pop();typeof c=="object"&&(l=c,c=a.pop()),rx(c,`createSelector expects an output function after the inputs, but rece\
ived: [${typeof c}]`);let u={...r,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:h=jl,argsMemoizeOptions:y=[],devModeChecks:b={}}=u,
T=ry(f),k=ry(y),S=ix(a),_=d(function(){return i++,c.apply(null,arguments)},...T),I=!0,N=h(function(){o++;let V=ny(S,arguments);
if(s=_.apply(null,V),process.env.NODE_ENV!=="production"){let{identityFunctionCheck:Q,inputStabilityCheck:F}=ox(I,b);if(Q.
shouldRun&&Q.run(c,V,s),F.shouldRun){let ye=ny(S,arguments);F.run({inputSelectorResults:V,inputSelectorResultsCopy:ye},{
memoize:d,memoizeOptions:T},arguments)}I&&(I=!1)}return s},...k);return Object.assign(N,{resultFunc:c,memoizedResultFunc:_,
dependencies:S,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>s,recomputations:()=>i,
resetRecomputations:()=>{i=0},memoize:d,argsMemoize:h})};return Object.assign(n,{withTypes:()=>n}),n}var Y=Ad(jl),ux=Object.
assign((e,t=Y)=>{nx(e,`createStructuredSelector expects first argument to be an object where each property is a selector\
, instead received a ${typeof e}`);let r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((o,s,l)=>(o[r[l]]=s,
o),{}))},{withTypes:()=>ux});var Gr=ie(Le(),1),lw=ie(Cn(),1),cw=ie(Cn(),1);var dw=ie(Le(),1),pw=ie(Le(),1),hw=ie(Cn(),1);var ft=ie(Le(),1);var js=ie(Le(),1),Vw=ie(Le(),1);var oe=ie(Le(),1),Mi=ie(Le(),1);var Li=ie(Cn(),1);var Ui=ie(Cn(),1);var _f=ie(Cn(),1),eM=ie(Hl(),1),Af=ie(Hl(),1),eT=ie(Cn(),1),tM=ie(Hl(),1);var Fc=ie(Le(),1),bt=ie(Le(),1),ee=ie(Le(),1);var P=ie(Le(),1),vT=ie(Le(),1);var pc=ie(jd(),1),wT=ie(jd(),1),Je=ie(Le(),1),C=ie(Le(),1),Ce=e=>({left:e}),tc=Ce,R=e=>({right:e}),M=e=>"left"in e,_e=e=>"\
right"in e;var Ge=e=>{if(_e(e))return e.right;throw typeof e.left=="string"?new Error(e.left):e.left},Xd=(e,t)=>_e(e)?e.right:t;var Cx=()=>Ye.Now.plainDateISO(),or=e=>e instanceof Ye.PlainDate,Nx=e=>Ye.PlainDate.from(e),yv=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/,
rs=e=>typeof e=="string"&&yv.test(e),rc=(e,t)=>typeof e=="string"?/^\d{4}-\d{2}-\d{2}$/.test(e)?Ye.PlainDate.from(e).toZonedDateTime(
{timeZone:t,plainTime:{hour:0}}):yv.test(e)?Ye.PlainDateTime.from(e).toZonedDateTime(t):e.includes("[")?Ye.ZonedDateTime.
from(e).withTimeZone(t):Ye.Instant.from(e).toZonedDateTimeISO(t):e instanceof Ye.Instant?e.toZonedDateTimeISO(t):e instanceof
Ye.ZonedDateTime?e.withTimeZone(t):e.toZonedDateTime({timeZone:t,plainTime:{hour:0}});var Px=(e,t)=>Ye.PlainDate.compare(e,t);var vv=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Mx=["Sun","Mon","Tue","Wed","Thu","Fri",
"Sat"],wp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ld=["January","February","March","Ap\
ril","May","June","July","August","September","October","November","December"],Qd=(e,t)=>{let r=e.toPlainDate(),n=t.toPlainDate();
return r.since(n,{largestUnit:"days"}).days},bv=e=>{let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||
t[0]}`},ky=e=>vv[e.dayOfWeek%7],Si=e=>`${bv(e.day)} ${wp[e.month-1]}`,ps=e=>`${bv(e.day)} ${wp[e.month-1]} ${e.year}`,Dx=jr.union(
[jr.literal("weekdayShort"),jr.literal("dayOfMonth"),jr.literal("weekdayLong"),jr.literal("fullDate"),jr.literal("monthL\
ong"),jr.literal("monthShort"),jr.literal("monthNumber"),jr.literal("year"),jr.literal("monthYear")]),jx=(e,t,r={})=>{try{
return Lx(e,t,r)}catch{return String(e)}},Lx=(e,t,r={})=>{var n;let a=(n=r.timeZone)!=null?n:"Europe/London",i=rc(e,a);switch(t){case"\
weekdayShort":return Mx[i.dayOfWeek%7];case"dayOfMonth":return String(i.day);case"weekdayLong":return vv[i.dayOfWeek%7];case"\
fullDate":return`${Ld[i.month-1]} ${i.day}, ${i.year}`;case"monthLong":return Ld[i.month-1];case"monthShort":return wp[i.
month-1];case"monthNumber":return String(i.month);case"year":return String(i.year);case"monthYear":return`${Ld[i.month-1]}\
 ${i.year}`}},Zl=e=>e.slice(11,16),Sy=(e,t,r)=>{if(t===0)return"today";if(t>0)return t===1?"tomorrow":t<7?`on ${ky(e)}`:
t<=14?`${ky(e)} ${Si(e)}`:e.year===r.year?Si(e):ps(e);let n=-t;return n===1?"yesterday":n<7?`${n} days ago`:n<14?"1 week\
 ago":n<22?`${Math.floor(n/7)} weeks ago`:e.year===r.year?Si(e):ps(e)},ep=(e,t={})=>{try{return Ux(e,t)}catch{return String(
e)}},Ux=(e,t={})=>{var r,n;let a=(r=t.timeZone)!=null?r:"Europe/London",i=(n=t.now)!=null?n:Ye.Now.zonedDateTimeISO(a),o=rc(
e,a),s=Qd(o,i);if(rs(e))return`${Sy(o,s,i)}, ${Zl(e)}`;if(s>0)return Sy(o,s,i);let l=Math.abs(o.epochMilliseconds-i.epochMilliseconds),
c=Math.floor(l/1e3),u=Math.floor(c/60),d=Math.floor(u/60),f=Math.floor(d/24),h=Math.floor(f/7);return c<45?"just now":c<
90?"1 minute ago":u<45?`${u} minutes ago`:u<90?"1 hour ago":d<6?`${Math.round(u/60)} hours ago`:s===0?"today":f<2?"yeste\
rday":f<7?`${f} days ago`:f<14?"1 week ago":f<22?`${h} weeks ago`:o.year===i.year?`${Si(o)}`:`${ps(o)}`},Fx=(e,t,r={})=>{
try{return Bx(e,t,r)}catch{return t?`${String(e)} \u2013 ${String(t)}`:String(e)}},Bx=(e,t,r={})=>{var n,a;let i=(n=r.timeZone)!=
null?n:"Europe/London",o=(a=r.now)!=null?a:Ye.Now.zonedDateTimeISO(i),s=rc(e,i);if(!t)return ep(e,r);let l=rc(t,i);if(Qd(
l,s)===0){let I=ep(e,r);return rs(e)&&rs(t)?`${I}\u2013${Zl(t)}`:I}let c=Math.abs(Qd(l,s))+1,u=c===1?"1 day":`${c} days`,
d=s.year,f=l.year,h=o.year,y=d!==h||d!==f,b=f!==h||d!==f,T=rs(e)?`, ${Zl(e)}`:"",k=rs(t)?`, ${Zl(t)}`:"",S=y?ps(s):Si(s),
_=b?ps(l):Si(l);return`${u}, from ${S}${T} to ${_}${k}`},Hx=(e,t,r,n)=>{let a=Wx(e),i=Vx(t),o=Kx(n);if(!a||!i||!o||typeof r!=
"string")return;let s;try{s=a.toZonedDateTimeISO(r).toPlainDate()}catch{return}for(let l=0;l<=7;l++){let c=s.add({days:l});
if(!o.has(c.dayOfWeek))continue;let u=c.toZonedDateTime({timeZone:r,plainTime:i}).toInstant().epochMilliseconds;if(u>a.epochMilliseconds)
return u}},Wx=e=>{try{if(typeof e=="number")return Number.isFinite(e)?Ye.Instant.fromEpochMilliseconds(e):void 0;if(typeof e==
"string")return Ye.Instant.from(e)}catch{}},qx=/^([01]\d|2[0-3]):([0-5]\d)$/,Vx=e=>{let t=typeof e=="string"?qx.exec(e):
null;return t?new Ye.PlainTime(Number(t[1]),Number(t[2])):void 0},Yx={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7},zx=new Set(
[1,2,3,4,5,6,7]),Kx=e=>{if(e==null)return zx;if(typeof e!="string")return;let t=e.split(",").map(n=>n.trim().toLowerCase()).
filter(n=>n.length>0);if(t.length===0)return;let r=new Set;for(let n of t){let a=Yx[n];if(a===void 0)return;r.add(a)}return r};var Gx=(e,t)=>Zi(e)?e(t):e,ss=()=>!0,Jx=e=>e instanceof Error,Zx=e=>Jx(e)?e.message:String(e),Xx=e=>e===void 0?[]:Array.
isArray(e)?e:[e];var na=(e,t)=>e===t?0:e===void 0?1:t===void 0?-1:or(e)&&or(t)?Ye.PlainDate.compare(e,t):typeof e=="number"&&typeof t=="n\
umber"?e-t:typeof e=="string"&&typeof t=="string"?e.localeCompare(t):String(e).localeCompare(String(t));var wv={};var ae=e=>at.union([e,at.undefined]),Oe=ae(at.boolean),U=ae(at.string),gr=ae(at.number),Nn=at.record(at.string,at.unknown),
Qx=at.array(Nn),e_=at.record(at.string,at.string),jL=at.record(at.string,at.boolean);var t_=De.intersection([De.type({version:De.number,verticalId:De.string,answers:Nn,derived:De.type({entities:De.array(De.string),
features:De.array(De.string)})}),De.partial({notes:De.string})]),r_=De.keyof({clone:null,orgGen:null,orgGenHighRisk:null}),
n_=De.type({id:De.string,label:De.string,weight:De.number,triggered:De.boolean}),a_=De.type({score:De.number,factors:De.array(
n_),strategy:r_}),LL=De.intersection([t_,De.type({risk:a_})]);var i_=function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.
slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};function o_(e){return e}function Tv(e,t,r,n,a,i,o,s,l){
switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(
n(r(t(e))));case 6:return i(a(n(r(t(e)))));case 7:return o(i(a(n(r(t(e))))));case 8:return s(o(i(a(n(r(t(e)))))));case 9:
return l(s(o(i(a(n(r(t(e))))))));default:{for(var c=arguments[0],u=1;u<arguments.length;u++)c=arguments[u](c);return c}}}
var Tp=function(e,t){var r=typeof e=="number"?function(n){return n.length>=e}:e;return function(){var n=Array.from(arguments);
return r(arguments)?t.apply(this,n):function(a){return t.apply(void 0,i_([a],n,!1))}}},s_=function(e){return e._tag==="L\
eft"},l_=function(e){return e._tag==="Right"};var c_=function(e){return{_tag:"Right",right:e}};function kv(e){return function(t,r){return e.map(t,function(){return r})}}
function u_(e){var t=kv(e);return function(r){return t(r,void 0)}}function d_(e){return function(t,r){return e.chain(t,function(n){
return e.map(r(n),function(){return n})})}}var Sv=c_,p_=Tp(2,function(e,t){return nc(e)?e:t(e.right)}),Ev=function(e,t){return Tv(e,h_(t))},f_=function(e,t){return Tv(
e,g_(t))},kp="Either",h_=function(e){return function(t){return nc(t)?t:Sv(e(t.right))}},xv={URI:kp,map:Ev},UL=Tp(2,kv(xv)),
FL=u_(xv),m_=function(e){return function(t){return nc(t)?t:nc(e)?e:Sv(t.right(e.right))}},g_=m_,y_={URI:kp,map:Ev,ap:f_,
chain:p_},v_={URI:kp,fromEither:o_},nc=s_,b_=l_;var BL=Tp(2,d_(y_)),HL={fromEither:v_.fromEither},ln=e=>Dt.union([e,Dt.array(e)]),Ae=e=>{let t=r=>typeof r=="string";return new Dt.Type(
`lax(${e.name})`,t,(r,n)=>t(r)?Dt.success(r):Dt.failure(r,n),Dt.identity)};function tp(e){return e.length===0?"":e[0].context.map(r=>r.key).filter(Boolean).join(".")}function w_(e){if(e.length===
0)return"No errors";if(e.length===1){let a=e[0],i=tp(e);return`Invalid value${i?` at ${i}`:""}: ${a.message||a.value}`}let t={};
e.forEach(a=>{let i=tp([a]);t[i]||(t[i]=[]),t[i].push(a)});let r=Object.keys(t).length,n=e.length;return`${n} validation\
 error${n>1?"s":""} in ${r} location${r>1?"s":""}`}var T_=pt.type({type:pt.literal("static"),name:pt.string,value:pt.unknown}),k_=pt.type({type:pt.literal("dynamic"),name:pt.string,
formula:pt.string}),fc=pt.recursion("pluginParam",()=>pt.union([T_,k_,pt.type({type:pt.literal("complex"),params:pt.array(
fc)})])),ac=e=>e?.dataType!==void 0,S_=Ae(p.union([p.literal("embedded"),p.literal("storage"),p.literal("realtime"),p.literal(
"callable")])),E_=Ae(p.union([p.literal("list"),p.literal("value")])),x_=Ae(p.union([p.literal("form"),p.literal("none")])),
_v=Ae(p.union([p.literal("always"),p.literal("problems")])),Av=Ae(p.union([p.literal("public"),p.literal("private")])),__=Ae(
p.union([p.literal("columns"),p.literal("grid"),p.literal("spatial"),p.literal("flow")])),A_=Ae(p.union([p.literal("x"),
p.literal("y")])),$_=Ae(p.union([p.literal("jpeg"),p.literal("png"),p.literal("webp")])),hc=Ae(p.union([p.literal("small"),
p.literal("medium")])),$v=Ae(p.union([p.literal("inline"),p.literal("masterDetail")])),Rv=Ae(p.union([p.literal("basic"),
p.literal("multiline"),p.literal("stringArray")])),Sp=Ae(p.union([p.literal("none"),p.literal("uppercase"),p.literal("lo\
wercase")])),R_=Ae(p.union([p.literal("image"),p.literal("file"),p.literal("video"),p.literal("audio")])),Ov=Ae(p.union(
[p.literal("integer"),p.literal("slider"),p.literal("decimal"),p.literal("money"),p.literal("intArray")])),Ep=Ae(p.union(
[p.literal("date"),p.literal("datetime"),p.literal("time")])),O_=Ae(p.union([p.literal("single"),p.literal("multiple")])),
xp=Ae(p.union([p.literal("select"),p.literal("radio"),p.literal("combobox")])),Iv=Ae(p.union([p.literal("global"),p.literal(
"user"),p.literal("variant"),p.literal("group"),p.literal("all"),p.literal("inbox")])),Cv=Ae(p.union([p.literal("light"),
p.literal("dark"),p.literal("auto")])),_p=Ae(p.union([p.literal("setUserProfile"),p.literal("triggerWorldcupSync"),p.literal(
"socialFollow"),p.literal("socialUnfollow"),p.literal("socialLike"),p.literal("socialUnlike"),p.literal("kickFromHome"),
p.literal("postWish")])),I_=Ae(p.union([p.literal("contained"),p.literal("outlined"),p.literal("text"),p.literal("menu"),
p.literal("pill")])),C_=Ae(p.union([p.literal("musicgen"),p.literal("minimax-music-2.5")])),N_=Ae(p.literal("gpt-4o-tran\
scribe")),P_=Ae(p.union([p.literal("flux-schnell"),p.literal("nano-banana-2")])),mc=Ae(p.union([p.literal("claude-haiku-\
5-5"),p.literal("claude-haiku-4-5"),p.literal("claude-sonnet-5")])),M_=Ae(p.union([p.literal("none"),p.literal("menu"),p.literal(
"tabs")])),D_=Ae(p.union([p.literal("onWrite"),p.literal("onTimer")])),j_=Ae(p.union([p.literal("repeat"),p.literal("onc\
e"),p.literal("grid")])),Nv=Ae(p.union([p.literal("tiles"),p.literal("bar"),p.literal("audioOnly"),p.literal("minimal")])),
Ap=Ae(p.union([p.literal("video"),p.literal("audio")])),L_=Ae(p.union([p.literal("anyone"),p.literal("admins")])),U_=Ae(
p.literal("Person")),Pv=Ae(p.union([p.literal("variable"),p.literal("text"),p.literal("number"),p.literal("boolean"),p.literal(
"temporal"),p.literal("parentRef"),p.literal("image"),p.literal("imageUpload")])),WL=Ae(p.union([p.literal("id"),p.literal(
"type"),p.literal("_scope"),p.literal("createdAt"),p.literal("updatedAt"),p.literal("createdBy"),p.literal("updatedBy"),
p.literal("createdByUid"),p.literal("updatedByUid"),p.literal("isDeleted"),p.literal("_parent")])),F_=Ae(p.union([p.literal(
"tabGroup"),p.literal("tab"),p.literal("folder")])),B_=Ae(p.union([p.literal("aiQuery"),p.literal("aiChat"),p.literal("f\
etchData"),p.literal("imageGeneration"),p.literal("audioGeneration"),p.literal("transcribe"),p.literal("publishData"),p.literal(
"script")])),H_=p.partial({field:p.string,direction:p.union([p.literal("asc"),p.literal("desc")])}),W_=p.partial({startField:p.string,
endField:p.string,axis:p.string,mode:j_,slots:p.string}),Mv=p.partial({label:p.string,onPublishType:p.string,enabled:p.boolean,
titleTemplate:p.string,bodyTemplate:p.string,clickPath:p.string,onCreate:p.boolean,onUpdate:p.boolean,onDelete:p.boolean,
condition:p.string}),Dv=p.partial({label:p.string,enabled:p.boolean,trigger:D_,watchType:p.string,onDelete:p.boolean,targetType:p.string,
targetId:p.string,condition:p.string,next:p.string,rejectionReason:p.string,notifyTurnUidField:p.string,notifyTitleTemplate:p.string,
notifyBodyTemplate:p.string,notifyClickPath:p.string,notifyTo:p.string,notifyTitle:p.string,notifyBody:p.string,notifyKey:p.string,
notifyClickVariant:p.string,smsTo:p.string,smsBody:p.string,smsPrivateType:p.string,smsReadUids:p.string,dueAt:p.string,
nextPrivate:p.string,privateType:p.string,privateReadUids:p.string,endOfLife:p.boolean,archive:p.boolean,archiveType:p.string,
archiveData:p.string,archiveId:p.string,perpetual:p.boolean,seed:p.string}),jv=p.partial({label:p.string,enabled:p.boolean,
watchType:p.string,moveType:p.string,isBotTurn:p.string,privateType:p.string,privateKey:p.string,privateReady:p.string,state:p.string,
questions:p.string,moveId:p.string,move:p.string,fallbackMove:p.string,delayMs:p.union([p.number,p.string]),minDelayMs:p.union(
[p.number,p.string]),maxDecisions:p.number,maxDailyDecisions:p.number,journal:p.boolean}),q_=p.partial({functionName:p.string,
args:p.string}),Lv=p.partial({dataType:p.string,scope:Iv,groupKey:p.string}),$p=p.partial({maxColumns:p.number,columnBreaks:p.array(
p.number),axis:A_,mode:__,minColumnWidth:p.number,columnWeights:p.array(p.number),cols:p.union([p.number,p.string]),rows:p.union(
[p.number,p.string]),rowHeight:p.number}),Rp=p.partial({x:p.union([p.number,p.string]),y:p.union([p.number,p.string]),w:p.union(
[p.number,p.string]),h:p.union([p.number,p.string])}),Op=p.partial({marginBottom:p.number,justifySelf:p.union([p.literal(
"left"),p.literal("center"),p.literal("right")]),overlay:p.union([p.literal("topLeft"),p.literal("topRight"),p.literal("\
bottomLeft"),p.literal("bottomRight")]),overlayInset:p.number,overlayWidth:p.number,maxWidth:p.number}),V_=p.partial({width:p.number,
height:p.number}),fs=p.partial({bg:p.string,surface:p.string,accent:p.string,text:p.string,mutedText:p.string,border:p.string}),
Uv=p.type({style:M_}),Ip=p.intersection([V_,p.partial({format:$_})]),Cp=p.type({expression:p.string,errorMessage:p.string}),
Y_=p.intersection([p.type({id:p.string,label:p.string}),p.partial({group:p.string})]),Fv=p.union([p.string,Y_]),Bv=p.intersection(
[p.type({allowedChildTypes:p.array(p.string)}),p.partial({icon:p.string,color:p.string,category:p.string,label:p.string,
labelField:p.string,detail:p.string,badge:p.string,badgeColor:p.string,lockedFields:p.union([p.string,p.array(p.string)]),
canEdit:p.union([p.boolean,p.string]),edit:x_,editScript:p.string})]),gc=p.intersection([p.type({type:p.string}),p.partial(
{id:p.string})]),z_=p.union([Ov,p.undefined]),K_=p.type({x:p.number,y:p.number}),G_=p.type({rotation:p.number,zoom:p.number,
pan:K_}),Hv=p.intersection([p.type({name:p.string}),p.partial({url:p.string,ext:p.string,aiPrompt:p.string,previewUrl:p.string,
editState:G_,takenAt:p.string})]),J_=p.intersection([p.type({name:p.string}),p.partial({url:p.string,ext:p.string,previewUrl:p.string,
takenAt:p.string})]),Z_=p.union([Hv,p.array(J_)]),X_=p.intersection([p.type({title:p.string}),p.partial({body:p.string,ok:p.string,
cancel:p.string,destructive:p.boolean,info:p.boolean})]),Wv=p.partial({params:p.array(p.string),script:p.string,confirm:X_}),
Q_=p.partial({type:p.string,idField:p.string}),qv=p.partial({name:p.string,type:p.string,isList:p.boolean,multiline:p.boolean,
variant:p.string,compute:p.string,isTransient:p.boolean,description:p.string,fileNameFormula:p.string,aiEnabled:p.boolean,
aiSystemPromptFormula:p.string,searchFormula:p.string}),eA=p.intersection([p.type({name:p.string,fields:p.array(qv)}),p.partial(
{icon:p.string,parent:Q_,writeAccess:L_,wellKnown:U_})]),Vv=p.intersection([p.type({id:p.string,version:p.number,hash:p.string}),
p.partial({omitted:p.array(p.string)})]),tA=p.intersection([p.type({name:p.string,node:p.string,kind:E_}),p.partial({default:p.string})]),
rA=p.type({name:p.string,slot:p.string,fn:p.string,hostType:p.string}),Yv=p.intersection([p.type({id:p.string,version:p.number}),
p.partial({hash:p.string,slots:p.array(tA),seams:p.array(rA)})]),$i=p.partial({dataType:p.string,sort:ln(H_),whereClause:p.string,
source:S_,scope:Iv,groupKey:p.string,callable:q_,span:W_}),nA=p.intersection([p.type({name:p.string,type:p.string}),p.partial(
{actionLabel:p.string,actionMenu:p.union([p.boolean,p.string]),actions:p.record(p.string,Wv),aiEnabled:p.boolean,aiSystemPromptFormula:p.string,
appLogo:p.string,args:p.string,audioSourceUrl:p.string,authDescription:p.string,authMode:Av,authTitle:p.string,autoAdvance:p.boolean,
botActors:ln(jv),canAdd:p.union([p.boolean,p.string]),canEdit:p.union([p.boolean,p.string]),collapsedByDefault:p.union([
p.boolean,p.string]),collapsible:p.union([p.boolean,p.string]),color:p.string,compute:p.unknown,containerStyle:Op,contentMaxWidth:p.number,
customCss:p.string,data:$i,deepHelp:p.string,displayMode:Nv,displayName:p.string,durationSec:p.union([p.number,p.string]),
examples:p.array(p.string),feature:Yv,fetchUrl:p.string,fieldType:p.union([Pv,p.string]),finishLabel:p.string,focusIdentity:p.string,
format:p.union([Ep,p.string]),formConfig:Lv,functionName:_p,headerLogo:p.string,help:p.string,hidden:p.union([p.boolean,
p.string]),hideHeader:p.union([p.boolean,p.string]),hideNav:p.union([p.boolean,p.string]),hideTopBar:p.union([p.boolean,
p.string]),htmlTemplate:p.string,icon:p.string,identity:p.string,idiom:p.union([xp,p.string]),idleDescription:p.string,idleTitle:p.string,
imageOutputOptions:Ip,imageSource:p.string,inputPlaceholder:p.string,isDerived:p.boolean,isOwnScope:p.boolean,isRecord:p.boolean,
isRepeating:p.boolean,isTransient:p.boolean,itemLabel:p.string,iterationLabel:p.string,label:p.string,language:p.string,
layout:$p,library:Vv,lyrics:p.string,max:p.union([p.number,p.string]),maxLength:p.union([p.number,p.string]),maxSizeMb:p.union(
[p.number,p.string]),maxTiles:p.union([p.number,p.string]),maxUserTurns:p.number,mediaMode:Ap,min:p.union([p.number,p.string]),
mockAudioUrl:p.string,mockEnabled:p.boolean,mockImageUrl:p.string,mockReplies:p.string,mockResultCount:p.number,mockResults:p.string,
mockTranscript:p.string,model:p.union([mc,p.string]),multiple:p.boolean,navigation:Uv,nextLabel:p.string,noCreditsDescription:p.string,
noCreditsTitle:p.string,nodeTypes:p.record(p.string,Bv),notifications:ln(Mv),nounLabel:p.string,onSuccessNavigate:p.string,
orderField:p.string,orgLogin:p.boolean,pageSize:p.union([p.number,p.string]),parameters:p.string,pickerValues:p.union([p.string,
p.array(Fv)]),place:Rp,placeholder:p.string,placeholderIcon:p.string,pluginName:p.string,pluginParams:p.array(fc),prompt:p.string,
promptTemplate:p.string,publishDataType:p.string,publishScope:p.string,publishVariant:p.string,purpose:p.string,recordKey:p.string,
recordValue:p.string,refreshCallables:p.array(p.string),reorderable:p.union([p.boolean,p.string]),required:p.union([p.boolean,
p.string]),resultObjectType:p.string,returns:p.string,returnTypeHint:p.string,roomKey:p.string,rootType:p.string,runningDescription:p.string,
runningTitle:p.string,script:p.string,showCamera:p.boolean,showCommit:p.boolean,showEdit:p.boolean,showFilePicker:p.boolean,
showHeader:p.union([p.boolean,p.string]),showSearch:p.boolean,size:hc,sourceExpression:p.string,speakReplies:p.boolean,speechLang:p.string,
steeringChips:p.string,step:p.union([p.number,p.string]),submitObjectType:p.string,successMessage:p.string,summary:p.string,
syncBar:_v,textTransform:Sp,theme:Cv,themeColors:fs,themeColorsDark:fs,transitions:ln(Dv),typeDescription:p.string,userAvatarUid:p.string,
validation:ln(Cp),value:p.unknown,variant:p.string,voiceInput:p.boolean})]),qL=Me.type({verticalId:Me.string,title:Me.string,
entities:Me.array(Me.string),seedSlots:Me.array(Me.string),labels:Me.array(Me.string)}),aA=Me.keyof({light:null,dark:null,
auto:null}),iA=Me.partial({labels:Me.record(Me.string,Me.string),theme:Me.partial({preset:aA,colors:fs}),entityRenames:Me.record(
Me.string,Me.string),seedSlots:Me.array(Me.string)}),VL=Me.intersection([Me.type({appName:Me.string}),iA]),Np={dataSourceType:[
"embedded","storage","realtime","callable"],featureSlotKind:["list","value"],treeEditMode:["form","none"],syncBarMode:["\
always","problems"],authMode:["public","private"],mode:["columns","grid","spatial","flow"],axis:["x","y"],imageFormat:["\
jpeg","png","webp"],inputSize:["small","medium"],subsectionVariant:["inline","masterDetail"],textVariant:["basic","multi\
line","stringArray"],textTransform:["none","uppercase","lowercase"],fileVariant:["image","file","video","audio"],numberVariant:[
"integer","slider","decimal","money","intArray"],temporalVariant:["date","datetime","time"],pickerVariant:["single","mul\
tiple"],pickerIdiom:["select","radio","combobox"],dataScope:["global","user","variant","group","all","inbox"],themePreset:[
"light","dark","auto"],callableButtonFunction:["setUserProfile","triggerWorldcupSync","socialFollow","socialUnfollow","s\
ocialLike","socialUnlike","kickFromHome","postWish"],callableButtonVariant:["contained","outlined","text","menu","pill"],
audioGenerationModel:["musicgen","minimax-music-2.5"],transcribeModel:["gpt-4o-transcribe"],imageGenerationModel:["flux-\
schnell","nano-banana-2"],textGenerationModel:["claude-haiku-5-5","claude-haiku-4-5","claude-sonnet-5"],navigationStyle:[
"none","menu","tabs"],transitionTrigger:["onWrite","onTimer"],spanMode:["repeat","once","grid"],videoDisplayMode:["tiles",
"bar","audioOnly","minimal"],mediaMode:["video","audio"],objectTypeWriteAccess:["anyone","admins"],wellKnownType:["Perso\
n"],fieldTypeBuiltin:["variable","text","number","boolean","temporal","parentRef","image","imageUpload"],recordMetaField:[
"id","type","_scope","createdAt","updatedAt","createdBy","updatedBy","createdByUid","updatedByUid","isDeleted","_parent"]};var zv=new Set(Np.fieldTypeBuiltin),oA=e=>zv.has(e),YL=Np.fieldTypeBuiltin.filter(oA);var sA=e=>{if(typeof e!="string")return[];let t=[];for(let r of e.split(",")){let n=r.trim();if(!n)continue;let a=n.indexOf(
":");if(a===-1){t.push({name:n});continue}let i=n.slice(0,a).trim(),o=n.slice(a+1).trim();i&&t.push(o?{name:i,type:o}:{name:i})}
return t},Ey=e=>sA(e).map(t=>t.name),lA="__interp";var yc="app",Ri="appNode",mr="tree",hs="screen",vc="form",Ss="flow",Fr="flowStep",bc="repeat",wc="callableButton";var oa="content",Es="textInput",xs="numberInput",Oi="variable",la="function",ca="const",_s="booleanInput",As="temporalIn\
put",$s="selectInput",Ii="fileInput",Pp="pluginLeaf",Mp="mediaRoom",cA="videoRoom",Rs="subsection",uA=["app","appNode","\
booleanInput","callableButton","const","content","fileInput","flow","flowStep","form","function","mediaRoom","numberInpu\
t","pluginLeaf","repeat","screen","selectInput","subsection","temporalInput","textInput","tree","variable"],dA=["appNode\
:folder","appNode:tab","appNode:tabGroup","flowStep:aiChat","flowStep:aiQuery","flowStep:audioGeneration","flowStep:fetc\
hData","flowStep:imageGeneration","flowStep:publishData","flowStep:script","flowStep:transcribe"],Dp={aiChat:{type:"flow\
Step",variant:"aiChat"},aiQuery:{type:"flowStep",variant:"aiQuery"},audioGeneration:{type:"flowStep",variant:"audioGener\
ation"},fetchData:{type:"flowStep",variant:"fetchData"},folder:{type:"appNode",variant:"folder"},imageGeneration:{type:"\
flowStep",variant:"imageGeneration"},publishData:{type:"flowStep",variant:"publishData"},script:{type:"flowStep",variant:"\
script"},tab:{type:"appNode",variant:"tab"},tabGroup:{type:"appNode",variant:"tabGroup"},transcribe:{type:"flowStep",variant:"\
transcribe"}},pA={form:["formConfig"],callableButton:["functionName","name"],tree:["nodeTypes","rootType"],variable:["na\
me"],function:["name"],const:["name","value"],mediaRoom:["roomKey"]},fA={form:{since:"2026-10",use:"inputs on a screen o\
r flow screen, saved by `publishData` / `updateData` in a script"}},hA={appNode:{submitObjectType:{since:"2026-10",use:"\
a declared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},
"appNode:folder":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishDa\
ta({type, data: {...}})` with the inputs named explicitly"}},"appNode:tab":{submitObjectType:{since:"2026-10",use:"a dec\
lared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},"\
appNode:tabGroup":{submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishD\
ata({type, data: {...}})` with the inputs named explicitly"}},screen:{submitObjectType:{since:"2026-10",use:"a declared \
action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly"}},subsection:{
submitObjectType:{since:"2026-10",use:"a declared action or a flow `script` step that calls `publishData({type, data: {.\
..}})` with the inputs named explicitly"}}},mA={objectTypeField:{isList:{since:"2026-10",use:'`type: "list<T>"`'},multiline:{
since:"2026-10",use:'`variant: "multiline"` on a text field'}}},Kv={list:"subsection",videoRoom:"mediaRoom"},gA=e=>{var t;
return(t=Kv[e])!=null?t:e};var Gv=e=>{var t;return(t=Dp[e])!=null?t:{type:e}};var zL=Object.fromEntries(Object.entries(Dp).map(([e,t])=>[`${t.type}:${t.variant}`,e]));var xy="MatchExpression",_y="MatchArm",rp="->",Ay=123,$y=125,yA=44,vA=e=>e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||e===
36||e===95||e>=128,gi=e=>e.code,Ud=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",bA=(e,t)=>{if(Ud(t)&&t.type===
"ConditionalExpression"){let r=t.test;if(Ud(r)&&r.type==="BinaryExpression"&&r.operator===rp)return{type:_y,test:r.left,
consequent:{type:"ConditionalExpression",test:r.right,consequent:t.consequent,alternate:t.alternate}}}return Ud(t)&&t.type===
"BinaryExpression"&&t.operator===rp?{type:_y,test:t.left,consequent:t.right}:e.throwError("Expected `condition -> expres\
sion` in match block")},wA={name:"orgigglyMatch",init(e){e.addBinaryOp(rp,.5),e.hooks.add("gobble-token",function(r){if(this.
gobbleSpaces(),!this.expr.startsWith("match",this.index))return;let n=this.index+5;if(n<this.expr.length&&vA(this.expr.charCodeAt(
n)))return;let a=this.index;this.index=n,this.gobbleSpaces();let i;if(gi(this)!==Ay){let s=!1;try{s=this.gobbleExpression()}catch{
s=!1}if(this.gobbleSpaces(),!s||gi(this)!==Ay){this.index=a;return}i=s}this.index++;let o=[];for(;;){if(this.gobbleSpaces(),
gi(this)===$y){this.index++;break}Number.isNaN(gi(this))&&this.throwError("Unclosed match block \u2014 expected `}`");let s=this.
gobbleExpression();if(s||this.throwError("Expected `condition -> expression` in match block"),o.push(bA(this,s)),this.gobbleSpaces(),
gi(this)===yA){this.index++;continue}if(gi(this)===$y){this.index++;break}this.throwError("Expected `,` or `}` after mat\
ch arm")}o.length===0&&this.throwError("A match block needs at least one arm"),r.node=i?{type:xy,scrutinee:i,arms:o}:{type:xy,
arms:o}})}},Ry="LetExpression",Oy=61,TA=62,tb=e=>e>=65&&e<=90||e>=97&&e<=122||e===36||e===95||e>=128,Iy=e=>tb(e)||e>=48&&
e<=57,Fd=e=>e.code,kA=e=>e,Zo=e=>e,SA=new Set(["??","||"]),yi=e=>{let t=kA(e);if(t.type==="BinaryExpression"&&t.operator===
";"){let[r,n]=yi(t.left),a=n?Zo({type:"BinaryExpression",operator:";",left:n,right:t.right}):t.right;return[r,a]}if(t.type===
"BinaryExpression"&&SA.has(String(t.operator))){let[r,n]=yi(t.left);return n?[r,Zo({...t,left:n})]:[e,void 0]}if(t.type===
"ConditionalExpression"){let[r,n]=yi(t.test);if(n)return[r,Zo({...t,test:n})];let[a,i]=yi(t.alternate);return i?[Zo({...t,
alternate:a}),i]:[e,void 0]}if(t.type==="ArrowFunctionExpression"){let[r,n]=yi(t.body);return n?[Zo({...t,body:r}),n]:[e,
void 0]}return[e,void 0]},EA={name:"orgigglyLet",init(e){e.hooks.add("gobble-token",function(r){if(this.gobbleSpaces(),!this.
expr.startsWith("let",this.index))return;let n=this.index+3;if(n<this.expr.length&&Iy(this.expr.charCodeAt(n)))return;let a=this.
index;this.index=n,this.gobbleSpaces();let i=this.index;if(!tb(Fd(this))){/^[^\s=]+\s*=(?![=>])/.test(this.expr.slice(this.
index))&&this.throwError("Expected a name after let"),this.index=a;return}for(;Iy(Fd(this));)this.index++;let o=this.expr.
slice(i,this.index);if(this.gobbleSpaces(),Fd(this)!==Oy){this.index=a;return}let s=this.expr.charCodeAt(this.index+1);if(s===
Oy||s===TA){this.index=a;return}this.index++;let l=this.gobbleExpression();l||this.throwError(`Expected an initialiser a\
fter let ${o} =`);let[c,u]=yi(l);r.node=u?{type:Ry,id:o,init:c,body:u}:{type:Ry,id:o,init:c}})}},ls=e=>e,ms=e=>typeof e==
"object"&&e!==null&&typeof e.type=="string",jp=(e,t)=>e.type==="BinaryExpression"&&e.operator===t,xA=new Set(["||","&&",
"??"]),wi=(e,t,r)=>({type:"BinaryExpression",operator:e,left:t,right:r}),np=e=>{if(jp(e,";")){let[t,r]=np(ls(e.left));return[
t,r?wi(";",r,e.right):ls(e.right)]}if(e.type==="ConditionalExpression"){let[t,r]=np(ls(e.alternate));return r?[{...e,alternate:t},
r]:[e]}return[e]},ap=(e,t)=>{if(!jp(e,";"))return t(e);let r=ap(ls(e.right),t);return r?wi(";",e.left,r):void 0},Cy=e=>jp(
e,"=")?e:void 0,ip=e=>{if(e.type==="BinaryExpression"&&xA.has(String(e.operator))&&ms(e.left)){let t=String(e.operator),
r=ap(e.left,n=>{let a=Cy(n);return a?wi("=",a.left,ip(wi(t,a.right,e.right))):void 0});if(r)return r}if(e.type==="Condit\
ionalExpression"&&ms(e.test)){let[t,r]=np(ls(e.alternate)),n=ap(e.test,a=>{let i=Cy(a);return i?wi("=",i.left,ip({...e,test:i.
right,alternate:t})):void 0});if(n)return r?wi(";",n,r):n}return e},op=e=>{let t={...e};for(let r of Object.keys(e)){if(r===
"parent")continue;let n=e[r];ms(n)?t[r]=op(n):Array.isArray(n)&&(t[r]=n.map(a=>ms(a)?op(a):a))}return ip(t)},_A={name:"o\
rgigglyAssign",init(e){e.hooks.add("after-all",function(r){ms(r.node)&&(r.node=op(r.node))})}},AA=()=>{ce._orgigglyTemplatePluginRegistered||
(ce.plugins.register(eb.default),ce._orgigglyTemplatePluginRegistered=!0),ce._orgigglyObjectPluginRegistered||(ce.plugins.
register(Zv.default),ce._orgigglyObjectPluginRegistered=!0),ce._orgigglyRegexPluginRegistered||(ce.plugins.register(Xv.default),
ce._orgigglyRegexPluginRegistered=!0),ce._orgigglySpreadPluginRegistered||(ce.plugins.register(Qv.default),ce._orgigglySpreadPluginRegistered=
!0),ce._orgigglyArrowPluginRegistered||(ce.plugins.register(Jv.default),ce._orgigglyArrowPluginRegistered=!0),ce._orgigglyAtUnaryRegistered||
(ce.addUnaryOp("@"),ce._orgigglyAtUnaryRegistered=!0),ce._orgigglysemicolonRegistered||(ce.addBinaryOp(";",1),ce._orgigglysemicolonRegistered=
!0),ce._orgigglyAssignmentRegistered||(ce.addBinaryOp("=",2,!0),ce._orgigglyAssignmentRegistered=!0),ce._orgigglyNullishCoalescingRegistered||
(ce.addBinaryOp("??",1),ce._orgigglyNullishCoalescingRegistered=!0),ce._orgigglyMatchPluginRegistered||(ce.plugins.register(
wA),ce._orgigglyMatchPluginRegistered=!0),ce._orgigglyLetPluginRegistered||(ce.plugins.register(EA),ce._orgigglyLetPluginRegistered=
!0),ce._orgigglyAssignPluginRegistered||(ce.plugins.register(_A),ce._orgigglyAssignPluginRegistered=!0)};AA();var ic=e=>e.
type==="Literal",Ei=e=>e.type==="BinaryExpression",Tc=e=>e.type==="CallExpression",_r=e=>e.type==="Identifier",gs=e=>e.type===
"MemberExpression",rb=e=>e.type==="ThisExpression",nb=e=>e.type==="UnaryExpression",Lp=e=>e.type==="ConditionalExpressio\
n";var $A=e=>e.type==="Compound",ab=e=>e.type==="ArrayExpression",ib=e=>e.type==="TemplateLiteral",RA=e=>e.type==="TaggedTe\
mplateExpression",ob=e=>e.type==="ObjectExpression",Ny=e=>e&&e.type==="SpreadElement",sb=e=>e.type==="ArrowFunctionExpre\
ssion",OA=e=>e.type==="MatchExpression",lb=e=>e.type==="LetExpression",Py=e=>typeof e=="object"&&e!==null&&"type"in e,IA=e=>{
let t=e;for(;t.parent;)t=t.parent;let r=t._source;return r||""},CA=e=>IA(e).slice(e.start,e.end),gt=(e,t,r,n)=>{let a=e;
if(a.parent=n,_r(e)){let i=t.indexOf(e.name,r),o=i+e.name.length;return a.start=i,a.end=o,{start:i,end:o}}if(ic(e)){let i=e.
raw;if(i){let c=t.indexOf(i,r),u=c+i.length;return a.start=c,a.end=u,{start:c,end:u}}let o=String(e.value),s=t.indexOf(o,
r),l=s+o.length;return a.start=s,a.end=l,{start:s,end:l}}if(Ei(e)){let i=gt(e.left,t,r,a),o=gt(e.right,t,i.end,a);return a.
start=i.start,a.end=o.end,{start:i.start,end:o.end}}if(nb(e)){let i=t.indexOf(e.operator,r),o=gt(e.argument,t,i+e.operator.
length,a);return a.start=i,a.end=o.end,{start:i,end:o.end}}if(Tc(e)){let i=gt(e.callee,t,r,a),o=i.end;for(let c of e.arguments)
o=gt(c,t,o,a).end;let l=t.indexOf(")",o)+1;return a.start=i.start,a.end=l,{start:i.start,end:l}}if(gs(e)){let i=gt(e.object,
t,r,a);if(e.computed){let o=gt(e.property,t,i.end,a),l=t.indexOf("]",o.end)+1;return a.start=i.start,a.end=l,{start:i.start,
end:l}}else{let o=gt(e.property,t,i.end,a);return a.start=i.start,a.end=o.end,{start:i.start,end:o.end}}}if(Lp(e)){let i=gt(
e.test,t,r,a),o=gt(e.consequent,t,i.end,a),s=gt(e.alternate,t,o.end,a);return a.start=i.start,a.end=s.end,{start:i.start,
end:s.end}}if(ab(e)){let i=t.indexOf("[",r),o=i+1;for(let c of e.elements)c&&(o=gt(c,t,o,a).end);let l=t.indexOf("]",o)+
1;return a.start=i,a.end=l,{start:i,end:l}}if(ob(e)){let i=t.indexOf("{",r),o=i+1;for(let c of e.properties){let u=c;u.key&&
(o=gt(u.key,t,o,a).end),u.value&&!u.shorthand&&(o=gt(u.value,t,o,a).end)}let l=t.indexOf("}",o)+1;return a.start=i,a.end=
l,{start:i,end:l}}if(ib(e)){let i=t.indexOf("`",r),o=i+1;for(let c of e.expressions)o=gt(c,t,o,a).end;let l=t.indexOf("`",
o)+1;return a.start=i,a.end=l,{start:i,end:l}}if(rb(e)){let i=t.indexOf("this",r),o=i+4;return a.start=i,a.end=o,{start:i,
end:o}}if($A(e)){let i=e.body||[];if(i.length===0)return a.start=r,a.end=r,{start:r,end:r};let o=r,s=r,l=r;for(let c=0;c<
i.length;c++){let u=gt(i[c],t,o,a);c===0&&(s=u.start),l=u.end,o=u.end}return a.start=s,a.end=l,{start:s,end:l}}{let i=-1,
o=r,s=r;for(let[l,c]of Object.entries(e))if(!(l==="type"||l==="parent")){if(Array.isArray(c)){for(let u of c)if(Py(u)){let d=gt(
u,t,s,a);i===-1&&(i=d.start),o=d.end,s=d.end}}else if(Py(c)){let u=gt(c,t,s,a);i===-1&&(i=u.start),o=u.end,s=u.end}}return i===
-1?(a.start=r,a.end=r,{start:r,end:r}):(a.start=i,a.end=o,{start:i,end:o})}},NA=e=>{let t=ce(e);return gt(t,e,0),t._source=
e,t},Ma="@",PA=(e,t,r)=>{if(cb.string.is(e)){let a=e.startsWith(Ma);if(a){let i=ub(e);return{isFormula:a,value:i,targetCodec:t,
name:r}}}return{isFormula:!1,value:e,targetCodec:t,name:r}},ub=e=>e.slice(Ma.length).trim(),Up=e=>e.startsWith(Ma)?ub(e):
e;var db=e=>!e.startsWith(Ma)&&e.includes("${"),Fp=e=>{if(!db(e))return e;let t=e.trim();return t.length>1&&t.startsWith("\
`")&&t.endsWith("`")?Ma+e:`${Ma}\`${MA(e)}\``},MA=e=>{let t="",r=0,n=o=>{for(t+=e[r++];r<e.length&&e[r]!==o;)e[r]==="\\"&&
(t+=e[r++]),r<e.length&&(t+=e[r++]);r<e.length&&(t+=e[r++])},a=()=>{let o=1;for(;r<e.length;){let s=e[r];if(s==="'"||s===
'"')n(s);else if(s==="`")t+=e[r++],i(!0);else if(s==="{"&&o++,s==="}"&&o--,t+=e[r++],o===0)return}},i=o=>{for(;r<e.length;){
let s=e[r];if(s==="\\")t+=e[r++],r<e.length&&(t+=e[r++]);else if(s==="`"){if(o){t+=e[r++];return}t+="\\`",r++}else s==="\
$"&&e[r+1]==="{"?(t+="${",r+=2,a()):t+=e[r++]}};return i(!1),t};var DA=me.union([me.literal(Es),me.literal(_s),me.literal(xs),me.literal(As),me.literal($s),me.literal(Ii),me.literal(Pp),
me.literal(vc),me.literal(Ss),me.literal(Fr),me.literal(bc),me.literal(wc),me.literal(yc),me.literal(Ri),me.literal(hs),
me.literal(mr),me.literal(Oi),me.literal(la),me.literal(ca),me.literal(oa),me.literal(Rs),me.literal(Mp),me.literal(cA)]),
jA=me.recursion("node",()=>me.intersection([me.record(me.string,me.unknown),me.partial({children:me.array(jA)})])),LA={type:"\
app",name:""},UA={};var FA={include:ss,traverseChildren:ss,traverseParent:ss},kc={...FA,direction:"forward"},Ln=e=>({...kc,...e});var BA=vt.union([vt.literal("before"),vt.literal("after"),vt.literal("into")]),HA=vt.union([vt.literal("top"),vt.literal(
"bottom"),vt.literal("center")]),WA=vt.type({target:vt.string,action:BA,position:HA}),GL=vt.type({currentDropZone:vt.union(
[vt.undefined,WA]),src:vt.string}),qA=Ue.keyof({html:null,sandboxed:null}),pb=Ue.keyof({spotify:null}),VA=Ue.partial({name:Ue.string,
type:Ue.string,description:Ue.string,exampleValue:Ue.string,default:Ue.string}),YA=Ue.intersection([Ue.type({name:Ue.string,
parameters:Ue.array(VA),htmlTemplate:Ue.string}),Ue.partial({icon:Ue.string,color:Ue.string,description:Ue.string,image:Hv,
runtime:qA,embedsThirdPartyMedia:Ue.boolean,connections:Ue.array(pb),widgetOwner:Ue.string,widgetVersion:Ue.number})]);var zA=Da.intersection([Da.type({name:Da.string,type:Da.string}),qv]);var KA=new Set(Np.recordMetaField),Os=(...e)=>new Set(e),GA=Os("id"),JA=Os("createdAt","updatedAt","createdBy","updatedB\
y"),ZA=Os("createdByUid","updatedByUid"),JL=Os("type","_scope","isDeleted"),ZL=Os("_parent");var XL=new Set([...GA,...JA,...ZA]),XA=([e,t])=>({...t,name:e}),QA=e=>!!e[1],Bp=e=>Object.entries(e).filter(QA).map(XA),
Qe=(e,t,r)=>(n={})=>({name:"",type:e,...n,...t,children:r?Bp(r):void 0}),Br=(e,t)=>(r={},n={})=>{let a=Bp(r),i=n.submitObjectType?
fb():[],o=[...a,...i];return{name:"",type:e,...t,...n,children:o.length>0?o:void 0}},Bd=Qe(Oi),fb=()=>Bp({id:Bd(),createdAt:Bd(),
createdBy:Bd()}),hb=Br(yc),QL=Br(Ri),e6=Br(Ri,{variant:"tabGroup"}),t6=Br(Ri,{variant:"tab"}),r6=Br(Ri,{variant:"folder"}),
n6=Br(hs),a6=Br(Rs),i6=Br(vc),o6=Br(Ss),s6=Br(bc,{isRepeating:!0}),l6=Qe(Fr),c6=Qe(Fr,{variant:"aiQuery"}),u6=Qe(Fr,{variant:"\
aiChat"}),d6=Qe(Fr,{variant:"fetchData"}),p6=Qe(Fr,{variant:"imageGeneration"}),f6=Qe(Fr,{variant:"audioGeneration"}),h6=Qe(
Fr,{variant:"transcribe"}),m6=Qe(Fr,{variant:"publishData"}),g6=Qe(Fr,{variant:"script"}),y6=Qe(wc),v6=Qe(Es),b6=Qe(xs),
w6=Qe(_s),T6=Qe(As),k6=Qe($s),S6=Qe(Ii),E6=Qe(oa),Xo=Qe(Oi),x6=Qe(la),_6=Qe(ca),A6=Qe(Pp),$6=Qe(Mp),R6=Br(Rs,{isRepeating:!0,
variant:"masterDetail"}),O6=Br(Rs,{isRepeating:!0,isRecord:!0,variant:"masterDetail"}),mb=Qe(mr,{isRepeating:!0},{value:Xo(),
expanded:Xo(),dragAndDropState:Xo(),isDrawerClosed:Xo(),leftPanelWidth:Xo()});var Hp=(e,t=".")=>{let r=e.lastIndexOf(t),n=r===-1?"":e.slice(0,r),a=r===-1?e:e.slice(r+1);return[n,a]},e$=(e,t=".")=>{let r=e.
indexOf(t),n=r===-1?e:e.slice(0,r),a=r===-1?"":e.slice(r+1);return[n,a]},xr=(e,t=".")=>e.filter(Boolean).join(t),t$=e=>hu(
e,/(?=[A-Z])/).map(t=>wu(t)),yb=e=>t$(e).join(" ");var r$=e=>{switch(e){case Es:case xs:case _s:case As:case $s:case Ii:case Pp:return!0;default:return!1}},n$=e=>{switch(e){case yc:case Ri:case hs:case mr:case vc:case Ss:case bc:case Rs:
return!0;default:return!1}},vb=e=>{let t=[];return t.push(e),t.push(...Is(e).flatMap(vb)),t},Is=e=>e.children||[],a$=(e,t)=>bb(
e).filter(r=>r.name===t),i$=e=>{let t=new Map,r=(n,a)=>{t.set(n,a);for(let i of Is(n))r(i,n)};return r(e,null),t},bb=e=>wb(
e)?[e]:e.isOwnScope||e.isRepeating?[e]:[e,...Is(e).flatMap(bb)],Wp=(e,t,r)=>{let n=e[r.name];if(!n||n.length===1)return r.
name;let a=t.get(r);if(!a)throw new Error(`Node with name ${r.name} has no parent`);return`${Wp(e,t,a)}$${r.name}`},oc=e=>n$(
e.type),o$=e=>e.type==="form"||!!e.submitObjectType,wb=e=>!oc(e),qp=e=>!!(e.isRepeating||e.isOwnScope),st=(e,t)=>t,Sc=(e,t,r)=>r,
s$=(e,t,r)=>r,l$=(e,t,r,n)=>n,c$=(e,t,r)=>r,Tb=(e,t)=>t,u$=(e,t,r)=>r,kb=(e,t,r)=>r,d$=(e,t)=>t,Ua=e=>e,Cs=Y(Ua,vb),C6=Y(
Ua,gn("compute")),p$=Y(Ua,gn("name")),Ec=Y(Cs,e=>Vn(e,gn("name"))),Vp=Y(Ua,i$),Sb=Y(Cs,Ec,Vp,(e,t,r)=>Ft(e,n=>Wp(t,r,n))),
Eb=Y(Vp,Tb,(e,t)=>{var r;return(r=e.get(t))!=null?r:void 0}),Pn=Y(Ec,Vp,Tb,(e,t,r)=>Wp(e,t,r)),sc=Y(Ec,Sb,st,(e,t,r)=>{let n=t[r];
return n?[n]:e[r]||[]}),ys=Y(Ua,Ec,Sb,st,(e,t,r)=>r,(e,t,r,n,a)=>{let i=r[n];if(i)return R(i);let o=t[n];if(!o){let[,s]=e$(
n,"$");return s?ys(e,s,a):tc(`Node with id ${n} not found`)}if(o.length===1)return R(o[0]);if(!a){let s=Is(e).find(c=>c.
name===n);if(s)return R(s);let l=a$(e,n);return l.length===1?R(l[0]):tc({matches:o.map(c=>Pn(e,c))})}return ys(a,n)}),N6=Y(
ys,Ge),P6=Y(p$,yb),Ci=(e,t,r)=>Y(Ua,n=>{let a=n[t];return a===void 0&&r!==void 0&&(a=Gx(r,n)),PA(a,e,t)}),f$=Ci(gb.string,
"nounLabel","Item"),h$=e=>{let{value:t,isFormula:r}=f$(e);return`${r?t:`'${t}'`} + ' ' + ($index + 1)`},m$=Y(Ua,h$),M6=Ci(
Oe,"multiline"),D6=Y(Cs,(e,t)=>t,(e,t)=>{let r=e.flatMap(n=>{var a;return $i.is(n.data)&&n.data.source===t?(a=n.data.dataType)!=
null?a:[]:[]});return ya(r)}),j6=Y(Cs,e=>{var t;let r=[],n=new Set;for(let a of e){if(!$i.is(a.data)||a.data.source!=="c\
allable")continue;let i=a.data.dataType,o=a.data.callable;if(!i||!o?.functionName)continue;let s=`${i}::${o.functionName}\
::${(t=o.args)!=null?t:""}`;n.has(s)||(n.add(s),r.push({typeName:i,functionName:o.functionName,...o.args?{args:o.args}:{}}))}
return r}),g$=e=>{if(e.type===mr){let r=e.nodeTypes;return r&&typeof r=="object"?Object.keys(r):[]}let t=$i.is(e.data)?e.
data.dataType:void 0;return t?[t]:[]},y$=Y(Cs,(e,t)=>t,(e,t)=>{var r,n;let a=new Map;for(let o of e)if($i.is(o.data)&&o.
data.source===t){let s=(r=o.data.scope)!=null?r:"global";for(let l of g$(o)){let c=(n=a.get(l))!=null?n:new Set;s==="all"?
(c.add("global"),c.add("user")):c.add(s),a.set(l,c)}}let i=[];for(let[o,s]of a)for(let l of s)i.push({typeName:o,scope:l});
return i}),v$=e=>e==="on"||e==="off"||e==="verify",b$=()=>{var e,t;if(typeof process>"u")return"on";let r=(e=process.env)==
null?void 0:e.RENDER_MEMO;return v$(r)?r:((t=process.env)==null?void 0:t.JEST_WORKER_ID)!==void 0?"verify":"on"},sp=b$();var w$=[],T$=[],Ns=e=>{var t;return(t=e.instance)!=null?t:UA},Ps=e=>{var t,r;return(r=(t=e.instance)==null?void 0:t.data)!=
null?r:w$},Ms=e=>{var t,r;return(r=(t=e.instance)==null?void 0:t.lengths)!=null?r:T$},k$=e=>{let t={};for(let r of e)t[r.
pointer]=r;return t},xb=()=>{let e=new WeakMap,t,r={};return n=>{if(n===t)return r;let a=e.get(n);return a||(a=k$(n),e.set(
n,a)),t=n,r=a,a}},Yp=xb(),zp=xb(),Xe={DATA:1,LENGTH:2,CTX:3,DATA_ALL:4,LENGTH_ALL:5,CTX_ALL:6,REPO:7,CURSOR_ARGS:8,INSTANCE:9,
VOLATILE:10,CHILD:11},Na=Object.freeze([]),S$=Object.freeze([Xe.VOLATILE,void 0,void 0]),aa=[],Ni=0,dn=(e,t,r)=>{Ni>0&&aa.
push(e,t,r)},cs=()=>{Ni>0&&aa.push(Xe.VOLATILE,void 0,void 0)},E$=()=>(Ni+=1,aa.length),x$=e=>{if(Ni-=1,aa.length===e)return Na;
let t=aa.slice(e);return aa.length=e,t},_$=e=>{Ni-=1,aa.length=e,cs()},_b=e=>{if(sp==="off")return{result:e(),deps:S$,seen:0};
let t=E$(),r;try{r=e()}catch(n){throw _$(t),n}return{result:r,deps:x$(t),seen:0}},A$=e=>{Ni>0&&e.deps!==Na&&aa.push(Xe.CHILD,
void 0,e)},$$={volatile:!0,data:Na,lengths:Na,ctx:Na,whole:Na},lp=new Map,cp=new Map,up=new Map,us=new Map,dp=0,Hd=(e,t,r)=>e.
has(t)?Object.is(e.get(t),r):(e.set(t,r),!0),Ab=e=>{for(let t=0;t<e.length;t+=3){let r=e[t],n=e[t+2];switch(r){case Xe.CHILD:{
let a=n;if(a.seen===dp)break;if(a.seen=dp,!Ab(a.deps))return!1;break}case Xe.DATA:if(!Hd(lp,e[t+1],n))return!1;break;case Xe.
LENGTH:if(!Hd(cp,e[t+1],n))return!1;break;case Xe.CTX:if(!Hd(up,e[t+1],n))return!1;break;case Xe.VOLATILE:return!1;default:
if(us.has(r)&&us.get(r)!==n)return!1;us.set(r,n)}}return!0},Vl=e=>{if(e.size===0)return Na;let t=[];for(let[r,n]of e)t.push(
r,n);return t},R$=e=>{dp+=1;try{return Ab(e)?{volatile:!1,data:Vl(lp),lengths:Vl(cp),ctx:Vl(up),whole:Vl(us)}:$$}finally{
lp.clear(),cp.clear(),up.clear(),us.clear()}},O$=(e,t,r)=>{var n;switch(e){case Xe.DATA_ALL:return Ps(r)===t;case Xe.LENGTH_ALL:
return Ms(r)===t;case Xe.CTX_ALL:return r.context===t;case Xe.REPO:return r.repo===t;case Xe.CURSOR_ARGS:return((n=r.instance)==
null?void 0:n.cursorArgs)===t;case Xe.INSTANCE:return r.instance===t;default:return!1}},I$=(e,t)=>{if(e.volatile)return!1;
let{data:r,lengths:n,ctx:a,whole:i}=e;for(let o=0;o<i.length;o+=2)if(!O$(i[o],i[o+1],t))return!1;if(r.length>0){let o=Yp(
Ps(t));for(let s=0;s<r.length;s+=2)if(o[r[s]]!==r[s+1])return!1}if(n.length>0){let o=zp(Ms(t));for(let s=0;s<n.length;s+=
2)if(o[n[s]]!==n[s+1])return!1}if(a.length>0){let o=t.context;for(let s=0;s<a.length;s+=2)if(!Object.is(o?.[a[s]],a[s+1]))
return!1}return!0},C$=(e,t)=>{if(e.def!==t.def)return!1;let r=e.instance,n=t.instance;return r===n?!0:r?.cursor===n?.cursor&&
r?.navStack===n?.navStack&&r?.navStackArgs===n?.navStackArgs},My=e=>typeof e=="object"&&e!==null,$b=(e,t)=>{if(Object.is(
e,t)||typeof e=="function"&&typeof t=="function")return!0;if(!My(e)||!My(t))return!1;if(e instanceof Error||t instanceof
Error)return e instanceof Error&&t instanceof Error&&e.message===t.message;if(Array.isArray(e)!==Array.isArray(t))return!1;
let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n of r)if(!(n in t)||!$b(e[n],t[n]))return!1;return!0},
N$=class extends Error{constructor(e){super(`Render memo returned a stale result at "${e}": a selector read state the re\
corder did not see. Read state through the accessors in basicSelectors.ts, or mark the evaluation volatile (#3038).`),this.
name="RenderMemoMismatch"}},Yl=(e,t)=>{let r=_b(()=>t(e));return{state:e,result:r.result,reads:R$(r.deps)}},P$=(e,t,r,n="")=>{
if(!e)return Yl(t,r);if(e.state===t)return e;if(sp==="off"||!C$(e.state,t)||!I$(e.reads,t))return Yl(t,r);if(sp==="verif\
y"){let a=Yl(t,r);if(!$b(e.result,a.result))throw new N$(n)}return e.state=t,e},Rb=[],K=e=>e;var Ob=e=>(dn(Xe.INSTANCE,void 0,e.instance),Ns(e));var Er=(e,t)=>{var r;let n=(r=e.context)==null?void 0:r[t];return dn(Xe.CTX,t,n),n},Kp=e=>e.def,Mn=e=>{let t=Ps(e);return dn(
Xe.DATA_ALL,void 0,t),t},Gp=e=>{var t;return(t=Ns(e).navStack)!=null?t:Rb},Dn=e=>{let t=Ms(e);return dn(Xe.LENGTH_ALL,void 0,
t),t},Ib=e=>{let t=Ps(e);return dn(Xe.DATA_ALL,void 0,t),Yp(t)},Jp=e=>{let t=Ms(e);return dn(Xe.LENGTH_ALL,void 0,t),zp(
t)},Xl=(e,t)=>{let r=Yp(Ps(e))[t];return dn(Xe.DATA,t,r),r},M$=(e,t)=>{let r=zp(Ms(e))[t];return dn(Xe.LENGTH,t,r),r},Zp=e=>Ns(
e).cursor||"",Xp=e=>{let t=Ns(e).cursorArgs;return dn(Xe.CURSOR_ARGS,void 0,t),t},Cb=e=>{var t;return(t=Ns(e).navStackArgs)!=
null?t:Rb},D$={objects:[]},pp=e=>(dn(Xe.REPO,void 0,e.repo),e.repo),j$=e=>{var t;return(t=pp(e))!=null?t:D$},Dy=e=>{let t=jl(
(...n)=>_b(()=>e(...n)));return Object.assign((...n)=>{let a=t(...n);return A$(a),a.result},{clearCache:t.clearCache,resultsCount:t.
resultsCount,resetResultsCount:t.resetResultsCount})},x=Ad({memoize:Dy,argsMemoize:Dy}),Nb="@@orgicore/INIT_APP",Pb="@@o\
rgicore/INIT_APP_INSTANCE",Mb="@@orgicore/UPDATE_DEF",Db="@@orgicore/UPDATE_CONTEXT_DATA",jb="@@orgicore/UPDATE_REPO",Lb="\
@@orgicore/UPDATE_VALUE",Ub="@@orgicore/CLEAR_VALUE",Fb="@@orgicore/INSERT_SLOT",Bb="@@orgicore/SWAP_SLOT",Hb="@@orgicor\
e/MOVE_SLOT",Wb="@@orgicore/SET_CURSOR",qb="@@orgicore/PUSH_CURSOR",Vb="@@orgicore/POP_CURSOR",Yb="@@orgicore/MOVE_NODE",
zb="@@orgicore/REMOVE_NODE",Kb="@@orgicore/CLEAR_SUBTREE",Gb="@@orgicore/BULK_ACTION",Jb="@@orgicore/LOAD_MORE",Qp="@@or\
gicore/SET_PAGE",L$=(e,t)=>({type:Nb,payload:{appDef:e,appInstance:t}}),U$=e=>({type:Pb,payload:{appInstance:e}}),F$=e=>({
type:Mb,payload:{appDef:e}}),B$=e=>({type:Db,payload:{data:e}}),H$=e=>({type:jb,payload:{repo:e}}),Zb=(e,t)=>({type:Lb,payload:{
pointerKey:e,value:t}}),Xb=e=>({type:Ub,payload:{pointerKey:e}}),Qb=(e,t)=>({type:Fb,payload:{pointerKey:e,index:t}}),W$=(e,t,r)=>({
type:Bb,payload:{pointerKey:e,fromIndex:t,toIndex:r}}),q$=(e,t)=>({type:Hb,payload:{pointerKey:e,toIndex:t}}),ew=(e,t)=>({
type:Wb,payload:{pointerKey:e,args:t}}),V$=(e,t)=>({type:qb,payload:{pointerKey:e,args:t}}),Y$=()=>({type:Vb}),z$=(e,t,r)=>({
type:Yb,payload:{pointerKey:e,toPointerKey:t,target:r}}),tw=e=>({type:zb,payload:{pointerKey:e}}),rw=e=>({type:Kb,payload:{
pointerKey:e}}),K$=e=>({type:Gb,payload:{actions:e}}),G$=e=>({type:Jb,payload:{pointerKey:e}}),J$=(e,t)=>({type:Qp,payload:{
pointerKey:e,page:t}}),jy={insertSlot:Qb,removeNode:tw,updateValue:Zb,clearValue:Xb,clearSubtree:rw,setCursor:ew},Ly={initApp:L$,
initAppInstance:U$,updateDef:F$,updateContextData:B$,updateRepo:H$,updateValue:Zb,clearValue:Xb,clearSubtree:rw,insertSlot:Qb,
removeNode:tw,swapSlot:W$,moveSlot:q$,setCursor:ew,pushCursor:V$,popCursor:Y$,moveNode:z$,bulkAction:K$,loadMore:G$,setPage:J$},
Z$=e=>{let t={};for(let r in Ly){let n=Ly[r];t[r]=(...a)=>e(n(...a))}return t},nw=e=>{let{parent:t}=e;return[...t?nw(t):
[],e]},X$=e=>{let t=e.match(/^([\w\s()$]+)(?:\[(\d+)\])?$/);if(!t)throw new Error(`part "${e}" invalid syntax`);let[,r,n]=t;
return{nodeId:r,index:n!==void 0?Number(n):0}},ef=e=>xr(iw(e).map(aw)),Q$=e=>{let{scope:t,node:r,isIteration:n}=e,a=ef(t);
return n?a:xr([a,Pn(t.node,r)])},Ds=e=>{let{parent:t,node:r}=e;if(!t)return"";let n=Pn(t.node,r);return xr([ef(t),n])},aw=e=>{
let{parent:t,node:r,index:n}=e,a=t?Pn(t.node,r):"";return qp(r)?`${a}[${n}]`:a},eR=e=>({node:e,index:0,key:""}),Uy=e=>e.
parent===void 0,iw=e=>{let{parent:t}=e;return[...t?iw(t):[],e]},ow=(e,t)=>e.parent===t.parent&&e.node===t.node,tR=(e,t)=>{
let r=t.find(n=>ow(e,n));return r?r.index:-1},rR=(e,t,r)=>{let n=t.map(a=>ow(e,a)?{...a,index:r}:a);return xr(n.map(aw))},
U6=gn("key"),nR=(e,t)=>{let{parent:r,node:n,key:a}=e,i=sc(n,t);if(i.length)return n===i[0]?{key:xr([r?.key,t]),isDeclared:!0}:
{key:xr([a,t]),isDeclared:!0};if(t.includes("$")){let o=t.slice(t.lastIndexOf("$")+1);if(sc(n,o).length)return{key:xr([a,
t]),isDeclared:!0}}return{key:xr([a,t]),isDeclared:!1}},Wd=(e,t,r)=>{let n=aR(e,t,r);return n?Pn(e,n):r},aR=(e,t,r)=>{let n=sc(
e,r);if(n.length!==0)return n.length===1?n[0]:sw(e,t,r)},sw=(e,t,r)=>{let n=sc(t,r);if(n.length)return n[0];let a=Eb(e,t);
if(a)return sw(e,a,r)},iR=(e,t)=>{if(t==="")return R(eR(e));let[r,n]=Hp(t),{nodeId:a,index:i}=X$(n),o=lc({def:e},r);if(M(
o))return o;let s=o.right,l=ys(e,a,s.node);if(M(l))return l;let c=l.right,u={parent:s,node:c,index:i,key:t},d=ef(u);if(d!==
t){let f=lc({def:e},d);return M(f)?R(u):f}return R(u)},oR=(e,t)=>{let[r,n]=Hp(t),a=n.endsWith("]"),o=lc({def:e},a?t:r);if(M(
o))return o;let s=o.right,l=a?R(s.node):ys(e,n,s.node);if(M(l))return l;let c=l.right,u={scope:s,node:c,isIteration:a,key:t},
d=Q$(u);if(d!==t){let f=Ur({def:e},d);return M(f)?R(u):f}return R(u)},lc=x(Kp,st,iR),jn=x(lc,e=>{if(M(e))throw new Error(
`Invalid scope key: ${e.left}`);return e.right}),Ur=x(Kp,st,oR),H=x(Ur,e=>{if(M(e))throw new Error(`Invalid pointer key:\
 ${e.left}`);return e.right}),tf=x(Kp,Sc,(e,t)=>H({def:e},t)),sR=x(H,gn("node")),rf=x(K,()=>"",H),nf=x(jn,nw),sa=x(K,jn,
Sc,(e,t,r)=>tR(t,nf(e,r))),lR=x(K,jn,Sc,l$,(e,t,r,n)=>{let a=nf(e,r);return rR(t,a,n)}),Ql=x(jn,Sc,nR),ns=(e,t,r)=>{let n=Ur(
e,t);if(M(n))return;let a=n.right.scope;for(;a;){let{key:i,isDeclared:o}=Ql(e,a.key,r);if(o)return M(Ur(e,i))?void 0:i;a=
a.parent}},cR=e=>e.includes("[")||e.includes("."),uR=(e,t)=>{try{let r=Ur(e,t);return M(r)?void 0:r.right.key}catch{return}},
dR=(e,t,r)=>{if(typeof r!="object"||r===null||Array.isArray(r))throw new Error("setValues: expected an object of {fieldN\
ame: value}, e.g. setValues({a: b, b: a})");return Object.entries(r).map(([n,a])=>{let i=cR(n),o=i?uR(e,n):ns(e,t,n);if(o===
void 0)throw new Error(i?`setValues: "${n}" is not a pointer key in this app \u2014 a key with [ or . is read from the app ro\
ot, like setAppValue (e.g. 'rows[0].qty')`:`setValues: no field named "${n}" is in scope here \u2014 a name must be declared \
on this node's scope or an enclosing one, like a formula read`);return a===void 0?jy.clearValue(o):jy.updateValue(o,a)})};var Pi=(e,t)=>{let r=(0,cw.createContext)(t);return[r.Provider,()=>{let i=(0,lw.useContext)(r);if(i===void 0){if(t)return t;
throw new Error(`${e}Context not found`)}return i},r]},uw=(e,t)=>{let r=e.length,n=t.length;if(r===0)return n;if(n===0)return r;
let a=[];for(let i=0;i<=r;i++)a[i]=[i];for(let i=0;i<=n;i++)a[0][i]=i;for(let i=1;i<=r;i++)for(let o=1;o<=n;o++){let s=e[i-
1]===t[o-1]?0:1;a[i][o]=Math.min(a[i-1][o]+1,a[i][o-1]+1,a[i-1][o-1]+s)}return a[r][n]},Fy=e=>e.toLowerCase().trim().replace(
/^the\s+/i,"").replace(/\s+/g," "),pR=(e,t,r={})=>{if(e.length===0)return"none";let{correctThreshold:n=1,closeThreshold:a=3}=r,
i=Fy(e),o=Fy(t);if(i===o)return"correct";if(i.length===0)return"wrong";let s=uw(i,o),l=Math.max(1,Math.floor(o.length/10)),
c=n*l,u=a*l;return s<=c?"correct":s<=u?"close":"wrong"};var vi=class{constructor(e){this.html=e}toString(){return this.html}toJSON(){return this.html}},af=e=>e instanceof vi,cc=e=>e.
replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),fR=e=>e instanceof
Ye.PlainDate,hR=e=>e instanceof Ye.ZonedDateTime,mR=e=>e instanceof Ye.Instant,dt=e=>dw.string.is(e)?e:af(e)?e.html:fR(e)?
e.toString():hR(e)?e.toPlainDate().toString():mR(e)?e.toZonedDateTimeISO("UTC").toPlainDate().toString():Array.isArray(e)?
e.join(""):e===void 0?"":String(e),xc=(e,t,r="no context")=>_e(e)?fw(e.right,t,r):e,fw=(e,t,r="no context")=>t.is(e)?R(e):
tc(`Type mismatch: ${JSON.stringify(e)} is not a ${t.name} (${r})`),gR=(e,t,r="no context")=>{if(!_e(e))return e;let n=e.
right;if(t.is(n))return R(n);let a=t;return a===pw.string||a===U&&n!==void 0?R(dt(n)):tc(`Type mismatch: ${JSON.stringify(
n)} is not a ${t.name} (${r})`)},yR=e=>{let t={},r=[];for(let n in e){let a=e[n];M(a)?r.push(a.left):t[n]=a.right}return r.
length?{left:r}:{right:t}};var we=e=>{let t=yR(e);if(M(t))throw new Error(t.left.join(`
`));return t.right};var[B6,H6]=Pi("persistence"),[W6,q6]=Pi("PersistenceKey","");var vR=e=>{let t=e;return()=>(t=t*1103515245+12345&2147483647,t/2147483647)},uc="0123456789abcdefghijklmnopqrstuvwxyzABC\
DEFGHIJKLMNOPQRSTUVWXYZ",bR=248,wR=()=>{let e=globalThis.crypto;if(!e?.getRandomValues)return Math.floor(Math.random()*uc.
length);let t=new Uint8Array(1);for(;;){e.getRandomValues(t);let r=t[0];if(r<bR)return r%uc.length}},TR=(e={})=>{let{length:t=8,
seed:r}=e;if(t<=0)throw new Error("Length must be greater than 0");let n=r!==void 0?(()=>{let i=vR(r);return()=>Math.floor(
i()*uc.length)})():wR,a="";for(let i=0;i<t;i++)a+=uc[n()];return a},kR=(e,{maxEntries:t,maxChars:r})=>{let n=new Map,a=0,
i=()=>{let s=n.keys().next();s.done||(n.delete(s.value),a-=s.value.length)};return Object.assign(s=>{let l=n.get(s);if(l!==
void 0||n.has(s))return l;let c=e(s);if(s.length>r)return c;for(;n.size>0&&(n.size>=t||a+s.length>r);)i();return n.set(s,
c),a+=s.length,c},{size:()=>n.size,chars:()=>a})},SR="23456789TJQKA",ER="shdc",xR=/^card_[shdc][2-9TJQKA]$/,_R=["high ca\
rd","pair","two pair","three of a kind","straight","flush","full house","four of a kind","straight flush"],AR=e=>{if(typeof e!=
"string"||!xR.test(e))throw new Error(`handRank: bad card id ${JSON.stringify(e)} \u2014 expected card_{s|h|d|c}{2-9|T|J|Q|K|\
A}`);return{id:e,suit:ER.indexOf(e[5]),rank:SR.indexOf(e[6])+2}},as={2:"two",3:"three",4:"four",5:"five",6:"six",7:"seve\
n",8:"eight",9:"nine",10:"ten",11:"jack",12:"queen",13:"king",14:"ace"},Ia=e=>e===6?"sixes":`${as[e]}s`,By=(e,t)=>{var r;
let n=e;for(let a=0;a<5;a++)n=n*15+((r=t[a])!=null?r:0);return n},Hy=e=>{var t;let r=[...e].sort((f,h)=>h.rank-f.rank),n=new Map;
for(let f of r)n.set(f.rank,((t=n.get(f.rank))!=null?t:0)+1);let a=[...n.entries()].sort((f,h)=>h[1]-f[1]||h[0]-f[0]),i=e.
every(f=>f.suit===e[0].suit),o=a.map(([f])=>f),s=0;o.length===5&&(o[0]-o[4]===4?s=o[0]:o.join(",")==="14,5,4,3,2"&&(s=5));
let l=()=>a.flatMap(([f])=>r.filter(h=>h.rank===f));if(s>0){let f=s===5?[...r.slice(1),r[0]]:r,h=i?8:4;return{category:h,
rank:By(h,[s]),tiebreak:[s],ordered:f}}let c=a.map(([,f])=>f).join(""),u;c==="41"?u=7:c==="32"?u=6:i?u=5:c==="311"?u=3:c===
"221"?u=2:c==="2111"?u=1:u=0;let d=o;return{category:u,rank:By(u,d),tiebreak:d,ordered:l()}},$R=e=>{let t=e.tiebreak;switch(e.
category){case 8:return t[0]===14?"royal flush":`straight flush, ${as[t[0]]} high`;case 7:return`four of a kind, ${Ia(t[0])}`;case 6:
return`full house, ${Ia(t[0])} over ${Ia(t[1])}`;case 5:return`flush, ${as[t[0]]} high`;case 4:return`straight, ${as[t[0]]}\
 high`;case 3:return`three of a kind, ${Ia(t[0])}`;case 2:return`two pair, ${Ia(t[0])} and ${Ia(t[1])}`;case 1:return`pa\
ir of ${Ia(t[0])}`;default:return`${as[t[0]]}-high`}},RR=e=>{let t=e.length;if(t===5)return[e];if(t===6)return e.map((n,a)=>e.
filter((i,o)=>o!==a));let r=[];for(let n=0;n<t;n++)for(let a=n+1;a<t;a++)r.push(e.filter((i,o)=>o!==n&&o!==a));return r},
OR=e=>{if(!Array.isArray(e)||e.length<5||e.length>7){let i=Array.isArray(e)?`${e.length} cards`:typeof e;throw new Error(
`handRank: expected an array of 5\u20137 card ids, got ${i}`)}let t=e.map(AR),r=new Set;for(let i of t){if(r.has(i.id))throw new Error(
`handRank: duplicate card id ${i.id}`);r.add(i.id)}let n;for(let i of RR(t)){let o=Hy(i);(!n||o.rank>n.rank)&&(n=o)}let a=n??
Hy(t.slice(0,5));return{category:a.category,categoryName:_R[a.category],rank:a.rank,best:a.ordered.map(i=>i.id),label:$R(
a)}},of={map:["it","i"],filter:["it","i"],forEach:["it","i","arr"],reduce:["acc","it","i"],times:["i"],every:["it","i"],
some:["it","i"],find:["it","i"],findIndex:["it","i"],count:["it","i"],groupBy:["it","i"],sumBy:["it","i"]},IR=e=>e.params?
e.params.filter(_r).map(t=>t.name):null,sf="var(--og-accent, currentColor)",mw="var(--og-border, rgba(127,127,127,.25))",
CR="var(--og-text, currentColor)",NR=e=>e!=null&&typeof e=="object"&&!Array.isArray(e),lf=e=>NR(e)?e:{},vs=e=>{if(typeof e==
"number")return Number.isFinite(e)?e:void 0;if(typeof e=="string"&&e.trim()!==""){let t=Number(e);return Number.isFinite(
t)?t:void 0}},Pa=(e,t)=>{let r=vs(e);return r!=null&&r>0?r:t},gw=(e,t)=>{let r=vs(e),n=t===void 0?1:vs(t);return r==null||
n==null||n<=0?0:Math.min(1,Math.max(0,r/n))},PR=/[;{}<>"'\\]|url\(|expression\(/i,fp=e=>{if(typeof e!="string")return;let t=e.
trim();return t!==""&&t.length<=100&&!PR.test(t)?t:void 0},bs=(e,t)=>{var r;return(r=fp(e))!=null?r:t},MR=(e,t)=>{var r,
n;return(n=(r=fp(e))!=null?r:fp(t))!=null?n:""},Ti=e=>Math.round(e*100)/100,yw=e=>`role="progressbar" aria-valuemin="0" \
aria-valuemax="100" aria-valuenow="${e}"`,DR=(e,t)=>{let r=lf(t),n=Math.round(gw(e,r.max)*100),a=Pa(r.height,8),i=Pa(r.radius,
a/2),o=bs(r.color,sf),s=bs(r.track,mw);return`<div ${yw(n)} style="height:${a}px;border-radius:${i}px;background:${s};ov\
erflow:hidden;"><div style="width:${n}%;height:100%;background:${o};"></div></div>`},jR=(e,t)=>{let r=lf(t),n=gw(e,r.max),
a=Math.round(n*100),i=Pa(r.size,64),o=Math.min(Pa(r.stroke,8),i/2),s=bs(r.color,sf),l=bs(r.track,mw),c=r.caption==null?`${a}\
%`:cc(String(r.caption)),u=i/2,d=Ti((i-o)/2),f=Ti(2*Math.PI*d),h=(b,T="")=>`<circle cx="${u}" cy="${u}" r="${d}"${T} sty\
le="fill:none;stroke-width:${o};${b}"/>`,y=n>0?h(`stroke:${s};stroke-linecap:round;stroke-dasharray:${Ti(n*f)} ${f};`,` \
transform="rotate(-90 ${u} ${u})"`):"";return`<svg ${yw(a)} width="${i}" height="${i}" viewBox="0 0 ${i} ${i}" style="di\
splay:block;">`+h(`stroke:${l};`)+y+`<text x="${u}" y="${u}" text-anchor="middle" dominant-baseline="central" style="fil\
l:${CR};font-size:${Ti(i*.24)}px;font-weight:600;">${c}</text></svg>`},LR=(e,t)=>{if(!Array.isArray(e))return"";let r=e.
flatMap(y=>{let b=vs(y);return b==null?[]:[b]});if(r.length<2)return"";let n=lf(t),a=vs(n.width),i=Pa(n.width,120),o=Pa(
n.height,32),s=Pa(n.strokeWidth,2),l=bs(n.color,sf),c=Math.min(...r),u=Math.max(...r)-c,d=s/2,f=r.map((y,b)=>{let T=Ti(b*
i/(r.length-1)),k=u===0?o/2:Ti(d+(1-(y-c)/u)*(o-2*d));return`${T},${k}`}).join(" ");return`<svg role="img" aria-label="${`\
trend: ${r[0]} to ${r[r.length-1]}`}" width="${a!=null&&a>0?i:"100%"}" height="${o}" viewBox="0 0 ${i} ${o}" preserveAsp\
ectRatio="none" style="display:block;overflow:visible;"><polyline points="${f}" vector-effect="non-scaling-stroke" style\
="fill:none;stroke:${l};stroke-width:${s};stroke-linejoin:round;stroke-linecap:round;"/></svg>`},UR=e=>{var t,r,n;try{return R(
NA(e))}catch(a){let i=a,o=(t=i.message)!=null?t:"Parse error",s=(r=i.description)!=null?r:o,l=(n=i.index)!=null?n:-1;return Ce(
{message:o,description:s,source:e,index:l})}},_c=kR(UR,{maxEntries:1e4,maxChars:4e6}),cf=e=>Lr(e)&&"__orgFunction"in e&&
e.__orgFunction===!0,FR=Object.prototype.hasOwnProperty,BR=Object.prototype,HR=Object.getPrototypeOf,He=Array.isArray,Lr=e=>{
if(typeof e!="object"||e===null)return!1;let t=HR(e);return t===null||t===BR},ec=new Set,Wy=new Map,WR=e=>{let t=Wy.get(
e);if(t===void 0){let r=typeof e=="string"&&e.startsWith("@")?e.slice(1).trim():String(e??"");t={formula:r,parsed:_c(r)},
typeof e=="string"&&Wy.set(e,t)}return t},qy=new Map,qR=e=>{if(typeof e!="string")return Ey(e);let t=qy.get(e);return t===
void 0&&(t=Ey(e),qy.set(e,t)),t},VR=()=>({map:new Map,ids:new WeakMap,next:{n:0}}),Vy=(e,t)=>{if(t===null)return"null";let r=typeof t;
if(r==="object"||r==="function"){let n=e.ids.get(t);return n===void 0&&(n=e.next.n++,e.ids.set(t,n)),"#"+n}return r+":"+
String(t)},vw=e=>{e?.map.clear()},ws=e=>Lr(e)&&"__closure"in e&&e.__closure===!0,bw=(e,t)=>{var r;return{__closure:!0,params:(r=
IR(e))!=null?r:[],body:e.body,ctx:t}},qd=new Set,Ts=(e,t)=>{if(qd.has(e))return R(void 0);let r={};for(let n=0;n<e.params.
length;n++)r[e.params[n]]=t[n];qd.add(e);try{return le(e.body,Ac(e.ctx,r),cn)}finally{qd.delete(e)}},ww=(e,t,r,n)=>{if(ec.
has(e.key))return R(void 0);let a=qR(e.parameters),i={};for(let u=0;u<a.length;u++)i[a[u]]=t[u];let{formula:o,parsed:s}=WR(
e.compute);if(M(s))return Ce(yt(`Error in function body: ${o}`,n));let l=e.memoSafe===!0?r.memo:void 0,c;if(l){let u=r.dc(
"$data",cn);c=e.key+"|"+Vy(l,u)+"|"+t.map(f=>Vy(l,f)).join(",");let d=l.map.get(c);if(d!==void 0)return d}ec.add(e.key);
try{let u=Ac(r,i);u.letBound=void 0;let d=le(s.right,u,cn);return l&&c!==void 0&&l.map.set(c,d),d}finally{ec.delete(e.key)}},
Vd=(e,t,r)=>{let n=[];for(let a of e){let i=le(a,t,r);if(M(i))return i;n.push(i.right)}return R(n)},yt=(e,t)=>({message:e,
failingExpression:t}),YR=e=>{if(_r(e))return e.name;if(gs(e)){let t=e.property;if(_r(t))return t.name}return"function"},
Tw=(e,t,r,n)=>{var a;let i=e;if(vw(r.memo),_r(e))return(a=r.letBound)!=null&&a.has(e.name)?Ce(yt(`Cannot reassign let bi\
nding '${e.name}'`,i)):r.setter?(r.setter(e.name,t),R(void 0)):Ce(yt("Cannot assign: no mutable context available",i));if(gs(
e)){let o=le(e.object,r,n);if(M(o))return o;let s=o.right;if(s==null||typeof s!="object"&&typeof s!="function")if(_r(e.object)){
if(!r.setter)return Ce(yt("Cannot auto-create object: no mutable context available",i));s={},r.setter(e.object.name,s)}else
return Ce(yt("Cannot assign property of non-object",i));let l=hp(e,r.dc);if(M(l))return l;let c=l.right.property;return s[c]=
t,R(void 0)}return Ce(yt("Invalid assignment target: must be identifier or property access",i))},le=(e,t,r=cn)=>{var n,a,
i;let o=e;if(ic(e))return R(e.value);if(Ei(e)){if(e.operator==="->")return Ce(yt("`->` is only valid inside a `match { }\
` block (as `condition -> expression`)",e));if(e.operator===";"){let c=le(e.left,t,r);return M(c)?c:le(e.right,t,r)}if(e.
operator==="="){let c=le(e.right,t,r);if(M(c))return c;let u=c.right,d=Tw(e.left,u,t,r);return M(d)?d:R(u)}if(e.operator===
"&&"||e.operator==="||"||e.operator==="??"){let c=le(e.left,t,r);if(M(c))return c;let u=c.right;return(e.operator==="&&"?
!u:e.operator==="||"?!!u:u!=null)?c:le(e.right,t,r)}let s=le(e.left,t,r);if(M(s))return s;let l=le(e.right,t,r);if(M(l))
return l;try{return R(lO(e.operator)(s.right,l.right))}catch(c){return Ce(yt(String(c),e))}}if(nb(e)){let s=le(e.argument,
t,r);if(M(s))return s;try{return R(cO(e.operator)(s.right))}catch(l){return Ce(yt(String(l),e))}}if(Lp(e)){let s=le(e.test,
t,r);return M(s)?s:s.right?le(e.consequent,t,r):le(e.alternate,t,r)}if(lb(e)){if((n=t.letBound)!=null&&n.has(e.id))return Ce(
yt(`Cannot redeclare let binding '${e.id}'`,e));let s=le(e.init,t,r);return M(s)?s:e.body?le(e.body,Sw(t,e.id,s.right),r):
R(s.right)}if(OA(e)){let s,l=e.scrutinee!==void 0;if(e.scrutinee!==void 0){let c=le(e.scrutinee,t,r);if(M(c))return c;s=
c.right}for(let c of e.arms){if(_r(c.test)&&c.test.name==="_")return le(c.consequent,t,r);let u=le(c.test,t,r);if(M(u))return u;
if(l?df(s,u.right):!!u.right)return le(c.consequent,t,r)}return R(void 0)}if(Tc(e)){let s={...r,memberLookupContexts:[]};
if(gs(e.callee)){let u=le(e.callee.object,t,bi(s,!1));if(M(u))return u;let d=u.right,f=hp(e.callee,t.dc);if(M(f))return f;
let h=f.right.property,y=Yd(h,t.dc,bi(s,!0));if(Yy(y))return e.arguments.length>0?y(d,e.arguments[0],t):R(void 0);if(y===
is){if(e.arguments.length>0){let T=e.arguments.length>1?le(e.arguments[1],t,s):R(void 0);return M(T)?T:is(d,e.arguments[0],
t,T.right)}return R(void 0)}let b;if(d!=null){if(b=d[h],ws(b)){let T=Vd(e.arguments,t,s);return M(T)?T:Ts(b,T.right)}if(typeof b==
"function"){let T=b.bind(d),k=[];for(let S of e.arguments){let _=le(S,t,s);if(M(_))return _;k.push(_.right)}try{return R(
T(...k))}catch(S){let _=S instanceof Error?S.message:String(S);return Ce(yt(`Error invoking ${h}(): ${_}`,o))}}}if(typeof y==
"function"){let T=[d];for(let k of e.arguments){let S=le(k,t,s);if(M(S))return S;T.push(S.right)}try{return R(y(...T))}catch(k){
let S=k instanceof Error?k.message:String(k);return Ce(yt(`Error invoking ${h}(): ${S}`,o))}}return R(void 0)}let l=le(e.
callee,t,bi(s,!0));if(M(l))return l;let c=l.right;if(ws(c)){let u=Vd(e.arguments,t,s);return M(u)?u:Ts(c,u.right)}if(cf(
c)){if(ec.has(c.key))return R(void 0);let u=Vd(e.arguments,t,s);return M(u)?u:ww(c,u.right,t,e)}if(typeof c=="function"){
if(Yy(c)){let d=le(e.arguments[0],t,s);return M(d)?d:c(d.right,e.arguments[1],t)}if(c===is){let d=le(e.arguments[0],t,s);
if(M(d))return d;let f=e.arguments.length>2?le(e.arguments[2],t,s):R(void 0);return M(f)?f:is(d.right,e.arguments[1],t,f.
right)}let u=[];for(let d of e.arguments){let f=le(d,t,s);if(M(f))return f;u.push(f.right)}try{return R(c(...u))}catch(d){
let f=YR(e.callee),h=d instanceof Error?d.message:String(d);return Ce(yt(`Error invoking ${f}(): ${h}`,o))}}return R(void 0)}
if(rb(e))return R(t.thisContext);if(_r(e))return R(Yd(e.name,t.dc,r));if(gs(e)){let{object:s}=e,l=hp(e,t.dc);if(M(l))return l;
let c=l.right,u=le(s,t,sO(bi(r,!1),c));if(M(u))return u;let d=u.right;if(He(d)){if(c.type==="computed"){let f=Number(c.property);
return isNaN(f)?R(void 0):R(d[f])}return R(d.map(f=>Lr(f)?f[c.property]:void 0))}if(Lr(d))return R(d[c.property]);if(Ut(
d)&&c.type!=="computed"&&c.property==="length")return R(d.length);if(d!=null&&typeof d=="object"){let f=d[c.property];return R(
typeof f=="function"?f.bind(d):f)}return R(void 0)}if(ib(e)){let s=[],{quasis:l,expressions:c}=e;for(let u=0;u<l.length;u++){
let d=l[u],f=(i=typeof d.value=="string"?d.value:(a=d.value)==null?void 0:a.cooked)!=null?i:"";if(s.push(f),u<c.length){
let h=le(c[u],t,r);if(M(h))return h;s.push(dt(h.right))}}return R(s.join(""))}if(RA(e)){let s=le(e.tag,t,bi(r,!0));if(M(
s))return s;let l=s.right;if(typeof l!="function")return R(void 0);let{quasis:c,expressions:u}=e.quasi,d=c.map(y=>{var b,
T;return(T=typeof y.value=="string"?y.value:(b=y.value)==null?void 0:b.cooked)!=null?T:""}),h=[Object.assign([...d],{raw:d.
slice()})];for(let y of u){let b=le(y,t,r);if(M(b))return b;h.push(b.right)}return R(l(...h))}if(ab(e)){let s=[];for(let l of e.
elements)if(l===null)s.push(void 0);else if(Ny(l)){let c=le(l.argument,t,r);if(M(c))return c;let u=c.right;He(u)&&s.push(
...u)}else{let c=le(l,t,r);if(M(c))return c;s.push(c.right)}return R(s)}if(ob(e)){let s={},{properties:l}=e;for(let c of l){
if(Ny(c)){let h=le(c.argument,t,r);if(M(h))return h;let y=h.right;Lr(y)?Object.assign(s,y):He(y)&&y.forEach((b,T)=>{s[String(
T)]=b});continue}let u=c.key,d=!!c.computed,f;if(!d&&_r(u))f=u.name;else if(!d&&ic(u))f=String(u.value);else{let h=le(u,
t,r);if(M(h))return h;f=String(h.right)}if(c.shorthand)s[f]=Yd(f,t.dc,r);else{let h=le(c.value,t,r);if(M(h))return h;s[f]=
h.right}}return R(s)}return sb(e)?R(bw(e,t)):Ce(yt(`Unsupported expression: ${e.type}`,o))},hp=(e,t)=>{let{computed:r}=e,
n=zR(e,t);return M(n)?n:R({type:r?"computed":"static",property:n.right})},zR=(e,t)=>{let{property:r,computed:n}=e;if(!n&&
_r(r))return R(r.name);let a=le(r,{dc:t,setter:void 0});return M(a)?a:R(String(a.right))},Yd=(e,t,r)=>{let n=t(e,r);if(n!==
void 0&&(!r.isCall||Zi(n)||cf(n)||ws(n)))return n;if(r.isCall){let a=xw.get(e);if(a)return a;if(e==="reduce")return is}if(e in
dc&&!(!r.isCall&&kw.has(e)))return dc[e]},kw=new Set(["html","keys","values","entries","first","last","progressBar","pro\
gressRing","sparkline","pow","exp","log","sqrt"]),Sw=(e,t,r)=>{var n;let a=Ac(e,{[t]:r});return a.letBound=new Set([...(n=
e.letBound)!=null?n:[],t]),a},Ac=(e,t)=>{let r=e.letBound;if(r){let n=Object.keys(t).filter(a=>r.has(a));if(n.length>0){
let a=new Set(r);for(let i of n)a.delete(i);r=a}}return{dc:Rc(e.dc,t),setter:e.setter,thisContext:e.thisContext,memo:e.memo,
asyncHosts:e.asyncHosts,syncHosts:e.syncHosts,letBound:r}},ua=(e,t,r)=>{var n;let a=(n=of[r])!=null?n:[];if(sb(e)){let i=bw(
e,t);return o=>Ts(i,o)}if(_r(e)&&!a.includes(e.name)){let i=le(e,t,bi(cn,!0));if(!M(i)&&ws(i.right)){let o=i.right;return s=>Ts(
o,s)}if(!M(i)&&cf(i.right)){let o=i.right;return s=>ww(o,s,t,e)}}return(i,o)=>{let s={};for(let l=0;l<a.length;l++)s[a[l]]=
i[l];return o&&Object.assign(s,o),le(e,Ac(t,s),cn)}},KR=(e,t,r)=>{if(!Ut(e))return R("");let n=ua(t,r,"forEach"),a=[],i=e.
split(`
`);for(let o=0;o<i.length;o++){let s=n([i[o],o,i]);if(M(s))return s;a.push(String(s.right))}return R(a.join(""))},GR=(e,t,r)=>{
if(!He(e))return R([]);let n=ua(t,r,"filter"),a=[];for(let i=0;i<e.length;i++){let o=e[i],s=n([o,i]);if(M(s))return s;s.
right&&a.push(o)}return R(a)},JR=(e,t,r)=>{if(!He(e))return R([]);let n=ua(t,r,"map"),a=[];for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(M(o))return o;a.push(o.right)}return R(a)},is=(e,t,r,n)=>{if(!He(e))return R(n);let a=ua(t,r,"reduce"),i=n;
for(let o=0;o<e.length;o++){let s=a([i,e[o],o]);if(M(s))return s;i=s.right}return R(i)},$c=(e,t,r,n,a,i)=>{if(!He(e))return R(
i);let o=ua(t,r,n);for(let s=0;s<e.length;s++){let l=e[s],c=o([l,s]);if(M(c))return c;let u=a(!!c.right,l,s);if(u)return R(
u.value)}return R(i)},ZR=(e,t,r)=>$c(e,t,r,"every",n=>n?void 0:{value:!1},!0),XR=(e,t,r)=>$c(e,t,r,"some",n=>n?{value:!0}:
void 0,!1),QR=(e,t,r)=>$c(e,t,r,"find",(n,a)=>n?{value:a}:void 0,void 0),eO=(e,t,r)=>$c(e,t,r,"findIndex",(n,a,i)=>n?{value:i}:
void 0,-1),Ew=(e,t,r)=>{if(e){if(ic(e)&&Ut(e.value)){let n=e.value;return([a])=>R(Lr(a)?a[n]:void 0)}return ua(e,t,r)}},
tO=(e,t,r)=>{if(!He(e))return R(0);if(!t)return R(e.length);let n=ua(t,r,"count"),a=0;for(let i=0;i<e.length;i++){let o=n(
[e[i],i]);if(M(o))return o;o.right&&a++}return R(a)},rO=(e,t,r)=>{var n;let a=Ew(t,r,"groupBy");if(!He(e)||!a)return R({});
let i={};for(let o=0;o<e.length;o++){let s=a([e[o],o]);if(M(s))return s;if(s.right==null)continue;let l=dt(s.right);((n=
i[l])!=null?n:i[l]=[]).push(e[o])}return R(i)},nO=(e,t,r)=>{if(!He(e))return R(0);let n=Ew(t,r,"sumBy"),a=0;for(let i=0;i<
e.length;i++){let o=n?n([e[i],i]):R(e[i]);if(M(o))return o;o.right!=null&&(a+=Number(o.right))}return R(a)},aO=(e,t,r)=>{
let n=Number(e);if(!qn(n)||isNaN(n)||n<0)return R([]);let a=ua(t,r,"times"),i=[];for(let o=0;o<n;o++){let s=a([o],{it:o});
if(M(s))return s;i.push(s.right)}return R(i)},xw=new Map([["forEach",KR],["filter",GR],["map",JR],["times",aO],["every",
ZR],["some",XR],["find",QR],["findIndex",eO],["count",tO],["groupBy",rO],["sumBy",nO]]),iO=new Set(xw.values()),Yy=e=>typeof e==
"function"&&iO.has(e);var _w=(e,t={},r)=>{let n=_c(e);if(M(n))return n;let a=$w(t);return r!==void 0&&(a.thisContext=r),le(n.right,a,cn)},oO=(e,t={},r)=>Ge(
_w(e,t,r)),cn={memberLookupContexts:[],isCall:!1},sO=(e,t)=>({...e,memberLookupContexts:[t,...e.memberLookupContexts]}),
bi=(e,t)=>({...e,isCall:t}),lO=e=>{let t=pO[e];return t||(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},cO=e=>{let t=fO[e];return t||
(()=>`<<UNSUPPORTED_OPERATOR: ${e}>>`)},uf=(e,t)=>or(e)&&or(t)?e.equals(t):e===t,uO=(e,t)=>!uf(e,t),df=(e,t)=>e==null&&t==
null?!0:uf(e,t),dO=(e,t)=>!df(e,t),zl=(e,t)=>e!=null&&t!=null,pO={"+":(e,t)=>or(e)&&qn(t)?e.add({days:t}):qn(e)&&or(t)?t.
add({days:e}):Ut(e)||Ut(t)?(e==null?"":String(e))+(t==null?"":String(t)):or(e)||or(t)?String(e)+String(t):Number(e)+Number(
t),"-":(e,t)=>or(e)&&qn(t)?e.subtract({days:t}):or(e)&&or(t)?e.since(t).total("days"):Number(e)-Number(t),"*":(e,t)=>Number(
e)*Number(t),"/":(e,t)=>Number(e)/Number(t),"%":(e,t)=>Number(e)%Number(t),"==":df,"===":uf,"!=":dO,"!==":uO,">":(e,t)=>zl(
e,t)&&na(e,t)>0,">=":(e,t)=>zl(e,t)&&na(e,t)>=0,"<":(e,t)=>zl(e,t)&&na(e,t)<0,"<=":(e,t)=>zl(e,t)&&na(e,t)<=0},fO={"-":e=>-Number(
e),"!":e=>!e,"@":e=>e},zy=e=>{let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.
imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}},hO=e=>{var t;if(typeof e=="number"&&Number.isFinite(e))return e;let r=2166136261;
for(let n of String(e))r^=(t=n.codePointAt(0))!=null?t:0,r=Math.imul(r,16777619);return r>>>0},Ky=e=>He(e)?e.map(dt):e==
null?[]:[dt(e)],Aw=e=>e==null?"":af(e)?e.html:He(e)?e.map(Aw).join(""):cc(dt(e)),Gy=e=>(e.length===1&&He(e[0])?e[0]:e).filter(
r=>r!=null).map(Number),Ca=e=>e==null||typeof e!="number"&&typeof e!="string"?NaN:Number(e),Kl=e=>Number.isFinite(e)?e:void 0,
zd=(e,t)=>{if(ws(e))return(...r)=>{let n=Ts(e,r);if(M(n))throw new Error(n.left.message);return n.right};if(t&&typeof e==
"string"&&e.length>0)return r=>Lr(r)?r[e]:void 0},Gl=e=>Lr(e)?Object.entries(e):He(e)?e.flatMap((t,r)=>t==null?[]:[[String(
r),t]]):[],dc={if:(e,t,r)=>e?t:r,and:(...e)=>e.every(t=>t),or:(...e)=>e.some(t=>t),length:e=>Ut(e)||He(e)?e.length:0,sum:e=>He(
e)?e.reduce((t,r)=>t+Number(r),0):0,avg:e=>!He(e)||e.length===0?0:e.reduce((r,n)=>r+Number(n),0)/e.length,min:(...e)=>{let t=Gy(
e);return t.length===0?void 0:Math.min(...t)},max:(...e)=>{let t=Gy(e);return t.length===0?void 0:Math.max(...t)},first:e=>He(
e)?e[0]:void 0,last:e=>He(e)&&e.length>0?e[e.length-1]:void 0,flatten:e=>He(e)?e.flat(1):[],clamp:(e,t,r)=>{if(e==null)return;
let n=Number(e);return t!=null&&(n=Math.max(n,Number(t))),r!=null&&(n=Math.min(n,Number(r))),n},split:(e,t)=>Ut(e)?t===void 0?
[e]:e.split(String(t)):[],join:(e,t)=>{if(!He(e))return"";let r=t!==void 0?String(t):",";return e.length>0&&e.every(af)?
new vi(e.map(n=>n.html).join(cc(r))):e.map(String).join(r)},upper:e=>dt(e).toUpperCase(),lower:e=>dt(e).toLowerCase(),concat:(...e)=>e.
reduce((t,r)=>He(r)?t.concat(r):t,[]),today:Cx,dateFrom:e=>{try{return Nx(dt(e))}catch{return`<<INVALID_DATE: ${e}>>`}},
dateCompare:(e,t)=>Px(e,t),formatDate:(e,t)=>{try{return Dx.is(t)?jx(e,t):ep(e)}catch{return`<<INVALID_DATE: ${e}>>`}},formatPeriod:(e,t)=>Fx(
e,t),generateId:(e,t)=>TR({length:Number(e),seed:qn(t)?Number(t):void 0}),regex:(e,t)=>new RegExp(String(e),t?String(t):
void 0),fuzzyMatch:(e,t)=>pR(dt(e),dt(t)),toJson:(e,t)=>{let r=t!==void 0?Number(t):void 0;return JSON.stringify(e,null,
r)},dodgy:e=>{throw new Error("dodgy function failed!!")},rand:(e,t)=>{let r=Number(e);if(!qn(r)||isNaN(r)||r<=0)return 0;
let n=t==null?Math.random():zy(hO(t))();return Math.floor(n*r)},floor:e=>Math.floor(Number(e)),ceil:e=>Math.ceil(Number(
e)),round:e=>Math.round(Number(e)),abs:e=>Math.abs(Number(e)),pow:(e,t)=>Kl(Math.pow(Ca(e),Ca(t))),exp:e=>Kl(Math.exp(Ca(
e))),log:(e,t)=>Kl(t===void 0?Math.log(Ca(e)):Math.log(Ca(e))/Math.log(Ca(t))),sqrt:e=>Kl(Math.sqrt(Ca(e))),uniq:(e,t)=>{
if(!He(e))return[];let r=t!==void 0?e.map(n=>Lr(n)?n[String(t)]:void 0):e;return[...new Set(r)].filter(n=>n!==void 0)},sort:(e,t,r)=>{
if(!He(e))return[];let n=typeof t=="string"&&t.length>0,a=s=>n&&Lr(s)?s[t]:s,i=e.every(s=>typeof a(s)=="number"),o=r?-1:
1;return[...e].sort((s,l)=>{let c=a(s),u=a(l),d=i?c-u:String(c).localeCompare(String(u));return o*d})},shuffle:(e,t)=>{if(!He(
e))return[];let r=zy(Number(t)),n=[...e];for(let a=n.length-1;a>0;a--){let i=Math.floor(r()*(a+1));[n[a],n[i]]=[n[i],n[a]]}
return n},handRank:e=>OR(e),replace:(e,t,r)=>{let n=e==null?"":dt(e);if(t==null)return n;let a=r==null?"":dt(r);return n.
split(dt(t)).join(a)},omit:(e,t)=>{if(!Lr(e))return{};let r=new Set(Ky(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>!r.has(n)))},pick:(e,t)=>{if(!Lr(e))return{};let r=new Set(Ky(t));return Object.fromEntries(Object.entries(e).filter(
([n])=>r.has(n)))},toMap:(e,t,r)=>{var n;if(!He(e))return{};let a=zd(t,!0);if(!a)return{};let i=(n=zd(r,!0))!=null?n:s=>s,
o={};return e.forEach((s,l)=>{let c=a(s,l);c!=null&&(o[dt(c)]=i(s,l))}),o},keys:e=>Gl(e).map(([t])=>t),values:e=>Gl(e).map(
([,t])=>t),entries:e=>Gl(e),mapValues:(e,t)=>{let r=zd(t,!1);return r?Object.fromEntries(Gl(e).map(([n,a])=>[n,r(a,n)])):
{}},escapeHtml:e=>cc(e==null?"":dt(e)),html:(e,...t)=>{let r=He(e)?e.map(dt):[dt(e)],n="";for(let a=0;a<r.length;a++)n+=
r[a],a<t.length&&(n+=Aw(t[a]));return new vi(n)},progressBar:(e,t)=>new vi(DR(e,t)),progressRing:(e,t)=>new vi(jR(e,t)),
sparkline:(e,t)=>new vi(LR(e,t)),safeCssColor:(e,t)=>MR(e,t),urlEncode:e=>encodeURIComponent(e==null?"":dt(e)),now:()=>new Date().
toISOString().slice(0,19)+"Z",nextOccurrence:Hx,byId:()=>{}},mO={forEach:!0,filter:!0,map:!0,reduce:!0,times:!0,every:!0,
some:!0,find:!0,findIndex:!0,count:!0,groupBy:!0,sumBy:!0},gO=new Set([...Object.keys(dc),...Object.keys(mO)]),V6=new Set(
Object.keys(dc).filter(e=>!kw.has(e))),pf=e=>typeof e=="function"?e:t=>e[t],Rc=(e,t)=>(r,n)=>FR.call(t,r)?t[r]:e(r,n),$w=e=>{
let t={},r=Rc(pf(e),t),n=VR();return{dc:r,setter:(i,o)=>{t[i]=o,vw(n)},memo:n}},yO=async(e,t,r)=>{let n=_c(e);if(M(n))return n;
let a=$w(t);return a.asyncHosts=r.asyncHosts,a.syncHosts=r.syncHosts,sn(n.right,a)},sn=async(e,t)=>{var r;if(Ei(e)&&e.operator===
";"){let a=await sn(e.left,t);return M(a)?a:sn(e.right,t)}if(Ei(e)&&e.operator==="="){let a=await sn(e.right,t);if(M(a))
return a;let i=Ge(a),o=Tw(e.left,i,t,cn);return M(o)?o:R(i)}if(lb(e)){if((r=t.letBound)!=null&&r.has(e.id))return Ce(yt(
`Cannot redeclare let binding '${e.id}'`,e));let a=await sn(e.init,t);if(M(a))return a;let i=Ge(a);return e.body?sn(e.body,
Sw(t,e.id,i)):R(i)}let n=vO(e);if(n&&t.asyncHosts&&ds(e,t.asyncHosts)){if(n.kind==="?"&&Ei(n.otherwise)&&n.otherwise.operator===
";")return Ce(yt("This `cond ? a : b` statement's else-branch is a `;` sequence \u2014 `;` binds looser than `? :`, so it may\
 have swallowed the rest of the script. Wrap the whole conditional in parentheses \u2014 `(cond ? a : b); next` \u2014 or write it\
 as `cond && a; !cond && (b; c)`.",e));let a=await sn(n.test,t);if(M(a))return a;let i=Ge(a);switch(n.kind){case"?":return sn(
i?n.then:n.otherwise,t);case"&&":return i?sn(n.then,t):R(i);case"||":return i?R(i):sn(n.then,t)}}if(Tc(e)&&_r(e.callee)&&
t.asyncHosts&&e.callee.name in t.asyncHosts){let a=e.callee.name;for(let o of e.arguments)if(ds(o,t.asyncHosts))return Ce(
yt(`Async host call '${a}' has an argument that itself contains an async host call. Async host calls must appear at stat\
ement top-level or as the RHS of an assignment, not nested inside other expressions. Bind the inner result to a variable\
 first.`,e));let i=[];for(let o of e.arguments){let s=le(o,t,cn);if(M(s))return s;i.push(Ge(s))}try{let o=await t.asyncHosts[a](
...i);return R(o)}catch(o){let s=o instanceof Error?o.message:String(o);return Ce(yt(`Error invoking async host '${a}': ${s}`,
e))}}return t.asyncHosts&&ds(e,t.asyncHosts)?Ce(yt("Async host call appears nested inside another expression. Async host\
 calls must appear at statement top-level, as the RHS of an assignment, or as a branch of a conditional statement (`ok &\
& host()`). Bind the inner result to a variable first.",e)):le(e,t,cn)},vO=e=>Lp(e)?{kind:"?",test:e.test,then:e.consequent,
otherwise:e.alternate}:Ei(e)&&(e.operator==="&&"||e.operator==="||")?{kind:e.operator,test:e.left,then:e.right}:null,bO=new Set(
["parent"]),ds=(e,t)=>{if(Tc(e)&&_r(e.callee)&&e.callee.name in t)return!0;for(let r of Object.keys(e)){if(bO.has(r))continue;
let n=e[r];if(Jy(n)){if(ds(n,t))return!0}else if(Array.isArray(n)){for(let a of n)if(Jy(a)&&ds(a,t))return!0}}return!1},
Jy=e=>typeof e=="object"&&e!==null&&typeof e.type=="string";var wO=(e,t)=>{var r;let n=new Map;for(let i of e){let o=t.get(i);if(!o)continue;let s=n.get(o.y);s?s.add(o.x):n.set(o.y,
new Set([o.x]))}let a=[];for(let i of[...n.keys()].sort((o,s)=>o-s)){let o=[...(r=n.get(i))!=null?r:[]].sort((c,u)=>c-u),
s=o[0],l=o[0];for(let c of o.slice(1)){if(c===l+1){l=c;continue}a.push({y:i,startCol:s,span:l-s+1}),s=c,l=c}o.length>0&&
a.push({y:i,startCol:s,span:l-s+1})}return a},TO=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)if(e.has(r))return!1;
return!0},Zy=(e,t)=>{for(let r=t.startCol;r<t.startCol+t.span;r+=1)e.add(r)},kO=(e,t)=>{let r=e.get(t.y);r||(r=[],e.set(
t.y,r));for(let a=0;a<r.length;a+=1)if(TO(r[a],t))return Zy(r[a],t),a;let n=new Set;return Zy(n,t),r.push(n),r.length-1},
SO=(e,t)=>{let r=new Map;for(let i of t)r.set(i.index,{x:i.x,y:i.y});let n=new Map,a=[];for(let i of e)for(let o of wO(i.
slots,r))a.push({recordKey:i.recordKey,...o,lane:kO(n,o)});return a};var EO=e=>e,Rw=Y(EO,e=>e.objects),Ow=Y(Rw,e=>Vn(e,t=>t.type)),xO=Y(Rw,e=>mu(Vn(e,t=>t.type),t=>Ft(t,r=>r.id)));var mp="__span",gp=e=>{if(typeof e!="object"||e===null)return;let t=e[mp];if(!(typeof t!="object"||t===null))return t},_O=/^\d{4}-\d{2}-\d{2}([T ]|$)/,
Oc=e=>{if(!(!e?.startField||!e?.axis))return{startField:e.startField,axis:e.axis,endField:e.endField,mode:e.mode==="once"?
"once":e.mode==="grid"?"grid":"repeat",slots:e.slots}},xi=(e,t)=>or(e)&&!or(t)?na(e,Xy(t)):or(t)&&!or(e)?na(Xy(e),t):na(
e,t),Xy=e=>{if(typeof e!="string"||!_O.test(e))return e;try{return Ye.PlainDate.from(e)}catch{return e}},Qy=(e,t)=>{let r=e[t.
startField];if(r==null||r==="")return;let n=t.endField?e[t.endField]:void 0;return n!=null&&n!==""?xi(n,r)<0?{start:r,end:r}:
{start:r,end:n}:{start:r,end:r}},ff=(e,t)=>xi(e.start,t)<=0&&xi(e.end,t)>=0,AO=(e,t)=>xi(e.start,t)===0,$O=(e,t,r)=>r===
"once"?AO(e,t):ff(e,t),RO=(e,t)=>{let r=xi(e.start,t)===0,n=xi(e.end,t)===0;return r&&n?"single":r?"start":n?"end":"midd\
le"},OO=(e,t,r)=>{let{dataType:n,sort:a,whereClause:i,scope:o,source:s,span:l}=t,c=Ow(e)[n]||[];(o==="user"||o==="global")&&
s==="storage"&&(c=c.filter(y=>y._scope===o));let u=IO(c,Oc(l),r),d=CO(u,i,r);if(!a)return d;let f=(Array.isArray(a)?a:[a]).
filter(y=>typeof y.field=="string"&&y.field.length>0);return f.length===0?d:[...d].sort((y,b)=>{for(let T of f){let k=y[T.
field],S=b[T.field],_=k==null,I=S==null;if(_&&I)continue;if(_)return 1;if(I)return-1;let N=T.direction==="desc"?-1:1,W=na(
k,S);if(W!==0)return N*W}return 0})},IO=(e,t,r)=>{if(!t)return e;if(t.mode==="grid"){let o=[];for(let s of e){let l=Qy(s,
t);l&&o.push({...s,[mp]:{start:l.start,end:l.end}})}return o}let n=r(t.axis,{});if(!_e(n)||n.right===void 0)return[];let a=n.
right,i=[];for(let o of e){let s=Qy(o,t);s&&$O(s,a,t.mode)&&i.push({...o,[mp]:{start:s.start,end:s.end,position:RO(s,a)}})}
return i},CO=(e,t,r)=>t?e.filter(n=>{let a=r(t,n);return _e(a)&&!!a.right}):e,Kr=x(K,H,(e,t)=>{let{scope:r,isIteration:n,
node:a}=t,{parent:i}=r,o=Eb(e.def,a);if(o)return n&&i?H(e,xr([i.key,Pn(i.node,a)])):o.isRepeating?H(e,`${r.key}`):H(e,xr(
[r.key,Pn(r.node,o)]))}),NO=Ci(Gr.unknown,"compute"),PO=Ci(Gr.union([Gr.number,Gr.undefined]),"maxLength"),ev=Ci(Gr.union(
[Gr.number,Gr.undefined]),"pageSize"),os=(e,t,r,n)=>{let a=r.isFormula?n(e,r.value,t.key):R(r.value);return xc(a,r.targetCodec,
r.name)},MO=e=>{let t=x(K,H,(a,i)=>{let{node:o,scope:s}=i,l=o.data;if(ac(l))if(i.isIteration){let u=Kr(a,i.key);if(u){let d=r(
a,u.key);if(_e(d)&&Array.isArray(d.right))return R(d.right[s.index])}}else{let u=(f,h)=>e(a,f,s.key,h),d=j$(a);return R(
OO(d,l,u))}let c=NO(o);return os(a,i,c,e)}),r=x(K,H,(a,i)=>{let{key:o}=i;if(i.node.type===ca)return R(i.node.value);let s=Xl(
a,o);return s?R(s?.value):t(a,i.key)}),n=x(K,H,(a,i)=>{var o;let{key:s,node:l}=i,c=(o=M$(a,s))==null?void 0:o.length,u=PO(
l),d=Ge(os(a,i,u,e)),f=l.data;if(ac(f)){let b=r(a,i.key);if(_e(b)&&Array.isArray(b.right)){let T=b.right.length,k=d!==void 0?
Math.min(T,d):T,S=ev(l),_=Ge(os(a,i,S,e));return R(c!==void 0?Math.min(k,c):_!==void 0?Math.min(k,_):k)}}let h=ev(l),y=Ge(
os(a,i,h,e));if(y!==void 0){let b=c??y;return R(d!==void 0?Math.min(b,d):b)}return R(c!==void 0?c:d??0)});return{selectValue:r,
selectLength:n,selectComputedValue:t}},DO=new Set(["rand","generateId","today","dodgy","byId","now"]),jO=(e,t)=>e==="ran\
d"&&t.length>=2,tv=new Set(Object.keys(of)),LO=new Set(["includes","indexOf","lastIndexOf","slice","join","concat","spli\
t","toLowerCase","toUpperCase","trim","startsWith","endsWith","replace","replaceAll","substring","charAt","padStart","pa\
dEnd","repeat","toFixed","localeCompare"]),ir=e=>typeof e=="object"&&e!==null&&"type"in e&&typeof e.type=="string",UO=e=>{
if(typeof e=="string")return e.startsWith("@")?e.slice(1).trim():e},FO=e=>(typeof e=="string"?e:"").split(",").map(r=>r.
trim()).filter(Boolean),Iw=e=>{let t=e.params;return Array.isArray(t)?t.filter(ir).filter(r=>r.type==="Identifier"&&typeof r.
name=="string").map(r=>r.name):[]},rv=(e,t)=>{var r;return ir(t)&&t.type==="ArrowFunctionExpression"?Iw(t):(r=of[e])!=null?
r:[]},BO=(e,t,r,n=new Set)=>{let a=new Set,i;try{i=ce(e)}catch{return{selfSafe:!1,deps:a}}let o=!0,s=()=>{o=!1},l=(u,d)=>{
d.has(u)||u!=="$data"&&(n.has(u)||s())},c=(u,d)=>{if(o){if(Array.isArray(u)){for(let f of u)c(f,d);return}if(ir(u))switch(u.
type){case"Literal":return;case"Identifier":{typeof u.name=="string"&&l(u.name,d);return}case"ThisExpression":s();return;case"\
TaggedTemplateExpression":{let f=u.tag;if(!(ir(f)&&f.type==="Identifier"&&f.name==="html"&&!d.has("html")&&!r.has("html"))){
s();return}let y=u.quasi,b=ir(y)?y.expressions:void 0;if(Array.isArray(b))for(let T of b)c(T,d);return}case"BinaryExpres\
sion":{let f=u.operator;if(f===";"||f==="="){s();return}c(u.left,d),c(u.right,d);return}case"UnaryExpression":c(u.argument,
d);return;case"ConditionalExpression":c(u.test,d),c(u.consequent,d),c(u.alternate,d);return;case"MatchExpression":{let f=u.
scrutinee;f!==void 0&&c(f,d);let h=u.arms;if(!Array.isArray(h))return;for(let y of h){if(!ir(y))continue;let b=y.test;ir(
b)&&b.type==="Identifier"&&b.name==="_"||c(b,d),c(y.consequent,d)}return}case"MemberExpression":{c(u.object,d),u.computed&&
c(u.property,d);return}case"ArrayExpression":{let f=u.elements;if(Array.isArray(f))for(let h of f)h!==null&&(ir(h)&&h.type===
"SpreadElement"?c(h.argument,d):c(h,d));return}case"ObjectExpression":{let f=u.properties;if(!Array.isArray(f))return;for(let h of f){
if(!ir(h))continue;if(h.type==="SpreadElement"){c(h.argument,d);continue}let y=!!h.computed,b=h.key;if(y&&c(b,d),h.shorthand){
ir(b)&&b.type==="Identifier"&&typeof b.name=="string"&&l(b.name,d);continue}c(h.value,d)}return}case"TemplateLiteral":{let{
expressions:f}=u;if(Array.isArray(f))for(let h of f)c(h,d);return}case"LetExpression":{let f=u.id;c(u.init,d);let h=u.body;
h!==void 0&&c(h,typeof f=="string"?new Set([...d,f]):d);return}case"ArrowFunctionExpression":c(u.body,new Set([...d,...Iw(
u)]));return;case"CallExpression":{let f=u.callee,h=u.arguments,y=Array.isArray(h)?h:[];if(ir(f)&&f.type==="Identifier"){
let b=typeof f.name=="string"?f.name:"";if(d.has(b)){s();return}if(tv.has(b)){y.forEach((T,k)=>{if(k===1){let S=new Set(
[...d,...rv(b,T)]),_=ir(T)&&T.type==="ArrowFunctionExpression"?T.body:T;c(_,S)}else c(T,d)});return}if(r.has(b))a.add(b);else if(!gO.
has(b)||DO.has(b)&&!jO(b,y)){s();return}for(let T of y)c(T,d);return}if(ir(f)&&f.type==="MemberExpression"){if(f.computed){
s();return}let b=f.property,T=ir(b)&&typeof b.name=="string"?b.name:"";if(c(f.object,d),tv.has(T)){y.forEach((k,S)=>{if(S===
0){let _=new Set([...d,...rv(T,k)]),I=ir(k)&&k.type==="ArrowFunctionExpression"?k.body:k;c(I,_)}else c(k,d)});return}if(!LO.
has(T)){s();return}for(let k of y)c(k,d);return}s();return}default:s();return}}};return c(i,new Set(t)),{selfSafe:o,deps:a}},
HO=(e,t=new Set)=>{let r=new Map,n=new Set;for(let l of e)r.has(l.name)&&n.add(l.name),r.set(l.name,l);let a=new Set([...r.
keys()].filter(l=>!n.has(l))),i=new Map;for(let l of a){let c=r.get(l),u=UO(c.compute);if(u===void 0){i.set(l,{selfSafe:!1,
deps:new Set});continue}i.set(l,BO(u,FO(c.parameters),a,t))}let o=new Set,s=!0;for(;s;){s=!1;for(let[l,c]of i)o.has(l)||
!c.selfSafe||[...c.deps].every(u=>o.has(u))&&(o.add(l),s=!0)}return o},nv=new WeakMap,Cw=(e,t)=>{if(e.type===la&&t.push(
{name:e.name,compute:e.compute,parameters:e.parameters}),Array.isArray(e.children))for(let r of e.children)Cw(r,t)},Nw=(e,t)=>{
if(e.type===ca&&typeof e.name=="string"&&t.add(e.name),Array.isArray(e.children))for(let r of e.children)Nw(r,t)},WO=e=>{
let t=nv.get(e);if(t)return t;let r=[];Cw(e,r);let n=new Set;Nw(e,n);let a=HO(r,n);return nv.set(e,a),a},av={objects:[]},
Kd=new Set,qO=new Set(["rand","generateId","today","now"]),VO=e=>typeof e=="object"&&e!==null,yp=e=>{if(Array.isArray(e))
return e.some(yp);if(!VO(e))return!1;if(e.type==="Identifier")return typeof e.name=="string"&&qO.has(e.name);for(let t of Object.
keys(e)){if(t==="parent")continue;if(!(t==="property"&&e.type==="MemberExpression"&&e.computed!==!0)&&yp(e[t]))return!0}
return!1},YO=/(?:^|[^\w$])(?:rand|generateId|today|now)(?![\w$])/,Jl=new Map,Pw=e=>{if(typeof e!="string"||!YO.test(e))return!1;
let t=Jl.get(e);if(t!==void 0)return t;let r=_c(e.startsWith("@")?e.slice(1):e),n=_e(r)&&yp(r.right);return Jl.size>=2e3&&
Jl.clear(),Jl.set(e,n),n},zO=(e,t,r,n,a)=>{let i=t.scope,o=k=>{let S=r(e,k);if(_e(S))return S.right},s=k=>{var S;if(Uy(i))
return;let _=xr([i.key,k]),I=(S=Xl(e,_))==null?void 0:S.value;if(I!==void 0)return I;let N=o(i.key);if(yn(N)){let W=N;if(k in
W)return W[k]}},l=()=>{let k=i;for(;k;){let S=gp(o(k.key));if(S)return S;k=k.parent}},c=()=>{let k=i;for(;k;){let S=gp(o(
k.key));if(S)return u(k,S);k=k.parent}},u=(k,S)=>{var _;let I=Ur(e,k.key);if(!_e(I))return;let N=I.right,W=Oc((_=N.node.
data)==null?void 0:_.span);if(!W||W.mode!=="grid"||!W.slots)return;let V;try{let G=Wd(e.def,N.node,W.slots);V=Ql(e,k.key,
G).key}catch{return}let Q=n(e,V);if(!Array.isArray(Q))return;let F={start:S.start,end:S.end},ye=0;for(let G=0;G<Q.length;G+=
1){let ue=a(e,W.axis,`${V}[${G}]`);!_e(ue)||ue.right===void 0||ff(F,ue.right)&&(ye+=1)}return ye},d=k=>{var S,_,I;if(k===
"$index"){let N=Uy(i)?void 0:i.index;return R(N)}if(k==="$parentIndex")return R((S=i.parent)==null?void 0:S.index);if(k===
"$scopeKey")return R(i.key);if(k==="$state")return cs(),R(e);if(k==="$data")return R(Ow((_=pp(e))!=null?_:av));if(k==="$\
spanStart"||k==="$spanEnd"||k==="$spanPosition"){let N=l();return R(k==="$spanStart"?N?.start:k==="$spanEnd"?N?.end:N?.position)}
if(k==="$spanLength")return R(c());if(k==="$rows")return R(W=>{if(!Ut(W))return;let V,Q;try{let F=Wd(e.def,t.node,W),ye=Ql(
e,i.key,F).key;V=n(e,ye),Q=o(ye)}catch{return}if(Array.isArray(V))return V.map((F,ye)=>{let G=Array.isArray(Q)?Q[ye]:void 0;
return yn(G)&&yn(F)?{...G,...F}:F??G})});if(k==="$args")return R((I=Xp(e))!=null?I:{});if(k==="$speech"){let N=Er(e,"spe\
ech");return R(N??{text:null,lang:null})}return k==="$variant"?R(Er(e,"variant")):k==="$now"?R(Er(e,"now")):k==="$email"?
R(Er(e,"$email")):k==="$username"?R(Er(e,"$username")):k==="$userKey"?R(Er(e,"$userKey")):k==="$authKind"?R(Er(e,"$authK\
ind")):k==="$authUid"?R(Er(e,"$authUid")):k==="$connections"?R(Er(e,"$connections")):k==="$social"?R(Er(e,"$social")):k===
"$isOrgAdmin"?R(Er(e,"$isOrgAdmin")):k==="$orgUser"?R(Er(e,"$orgUser")):Ce("not_resolved")},f=k=>{let S=Er(e,k);return S!==
void 0?R(S):Ce("not_resolved")},h=(k,S,_)=>{var I,N,W;if(Kd.has(_)){cs();let V=(I=Xl(e,_))==null?void 0:I.value;return V!==
void 0?V:s(k)}Kd.add(_);try{let V=Ur(e,_);if(M(V))return s(k);let{key:Q,node:F}=V.right;if(F.type===la&&S.isCall)return Pw(
F.compute)&&cs(),{__orgFunction:!0,compute:F.compute,parameters:F.parameters,key:Q,memoSafe:WO(e.def).has(F.name)};if(S.
isCall&&oc(F))return;let ye=o(Q);if(oc(F)){let{memberLookupContexts:G}=S,Fe=(F.isRepeating?((N=G[0])==null?void 0:N.type)===
"computed":((W=G[0])==null?void 0:W.type)!=="computed")?G.map(ze=>ze.property):void 0,Se=n(e,Q,Fe);return ye===void 0?Se:
Array.isArray(ye)&&Array.isArray(Se)?ye.map((ze,jt)=>{let Ot=Se[jt];return yn(Ot)&&yn(ze)?{...Ot,...ze}:ze??Ot}):yn(ye)&&
yn(Se)?{...Se,...ye}:ye}else if(ye===void 0){let G=s(k);if(G!==void 0)return G}return ye}finally{Kd.delete(_)}},y=(k,S,_=i)=>{
var I;return(I=b(k,S,_))==null?void 0:I.value},b=(k,S,_)=>{let{key:I,isDeclared:N}=Ql(e,_.key,k),W=V=>{var Q;return(Q=Xl(
e,V))==null?void 0:Q.value};if(N){let V=h(k,S,I);if(V!==void 0)return{value:V,isStored:W(I)!==void 0}}else if(_.parent){
let V=W(I);if(V!==void 0)return{value:V,isStored:!0};let Q=b(k,S,_.parent);if(Q?.isStored)return Q;let F=h(k,S,I);if(F!==
void 0)return{value:F,isStored:!1};if(Q!==void 0)return Q}else{let V=h(k,S,I);if(V!==void 0)return{value:V,isStored:W(I)!==
void 0}}},T=(k,S)=>{var _,I;return!Ut(k)||!Ut(S)||(I=xO((_=pp(e))!=null?_:av)[k])==null?void 0:I[S]};return(k,S)=>{let _=d(
k);if(_e(_))return _.right;let I=f(k);if(_e(I))return I.right;let N=Wd(e.def,t.node,k),W=y(N,S);if(W!==void 0)return W;if(k===
"byId")return T}},KO=e=>{let t=o=>o.type===mr&&o.isRepeating?[o]:[],r=o=>Is(o).concat(t(o)),n=x(H,o=>r(o.node)),a=x(K,H,
(o,s)=>{if(s.node.isOwnScope)return[H(o,`${s.key}[0]`)];let l=Ge(e(o,s.key));return fu(l,c=>H(o,`${s.key}[${c}]`))}),i=x(
K,H,(o,s)=>n(o,s.key).map(l=>{let c=Pn(o.def,l);return H(o,`${s.scope.key}.${c}`)}));return{selectChildIterationPointers:a,
selectChildNodePointers:i}},Ic=e=>!!(e.node.isRepeating&&!e.isIteration),hf=e=>e.node.type===mr?e.node:{nodeTypes:{},rootType:""},
Mw=e=>qp(e.node)&&!e.isIteration,GO=e=>!!e.node.isOwnScope&&!e.isIteration,Dw=e=>{let{isIteration:t,node:r}=e;return t&&
r.type===mr},un=e=>e.node.type===mr&&e.scope.node!==e.node,ja=e=>un(e)||Dw(e),JO=e=>r$(e.node.type),ZO=e=>{if(JO(e))return!0;
let{node:t}=e;return t.type!==oa?!1:"required"in t&&t.required!=null||"validation"in t&&t.validation!=null},XO=e=>{let{key:t,
node:r}=e;return un(e)?t:`${t}.${r.name}`},iv=e=>o$(e.node)&&!e.isIteration,QO=e=>typeof e=="object"&&e!==null&&!Array.isArray(
e),ov=e=>!(!oc(e.node)||e.node.isRepeating||e.node.isOwnScope),eI=(e,t,r)=>{let n=(l,c,u,d=[])=>{var f;let{key:h,node:y}=c,
b=d.length?d.slice(1):[];if(!y.isTransient){if(wb(y)){let T=e(l,h);return _e(T)?T.right:void 0}if(Mw(c)&&!u){if(c.node.isOwnScope){
let T=a(l,H(l,`${h}[0]`),d);return d.length===0&&Object.keys(T).length===0?void 0:T}if(d.length&&/^\d+$/.test(d[0])){let T=d[0],
k=H(l,`${h}[${T}]`),S=a(l,k,b);return{[T]:S}}else if(c.node.isRecord){let T=(f=c.node.recordKey)!=null?f:"key",k=typeof c.
node.recordValue=="string"?c.node.recordValue:void 0,S=t(l,h);return k!==void 0&&S.length===0?void 0:S.reduce((_,I)=>{let{
[T]:N,...W}=a(l,I,b);if(typeof N!="string")return _;if(k===void 0)return _[N]=W,_;let V=W[k];return V!==void 0&&(_[N]=V),
_},{})}else return t(l,h).map(k=>a(l,k,b))}return a(l,c,d)}},a=(l,c,u)=>{let d={},f=u.length?u.slice(1):[],h=(b,T)=>{let{
node:k}=b,{name:S}=k,_=un(b)&&c.node!==b.node,I=n(l,b,_,T);I!==void 0&&(ov(b)?Object.assign(d,I):d[S]=I)},y=r(l,c.key);return u.
length?(y.forEach(b=>{b.node.name===u[0]?h(b,f):ov(b)&&h(b,u)}),d):(y.forEach(b=>h(b,f)),d)},i=(l,c,u)=>n(l,c,un(c),u),o=x(
K,H,c$,i),s=x(K,H,(l,c)=>{let u=i(l,c);return QO(u)?u:{}});return{selectOutput:o,selectOutputObject:s}};var tI=(e,t,r,n)=>n,Ar=x(K,st,s$,tI,(e,t,r="",n)=>{Pw(t)&&cs();let a=jw(e,r),i=n?Rc(pf(a),n):a;return _w(t,i,n)}),jw=x(K,
H,(e,t)=>zO(e,t,sr,aI,(r,n,a)=>Ar(r,n,a))),rI=(e,t,r,n,a)=>{let i=jw(e,t),o=a?Rc(pf(i),a):i;return yO(r,o,n)},{selectValue:sr,
selectComputedValue:nI,selectLength:Fa}=MO(Ar),{selectChildIterationPointers:Lw,selectChildNodePointers:Uw}=KO(Fa),{selectOutput:aI,
selectOutputObject:mf}=eI(sr,Lw,Uw),Ba=e=>x(sr,t=>xc(t,e,"value")),Fw=e=>x(sr,t=>gR(t,e,"value")),iI=e=>x(nI,t=>xc(t,e,"\
value")),gf=Fw(U),Bw=Ba(ft.union([ft.undefined,ft.array(ft.string)])),oI=Ba(ft.union([ft.undefined,ft.array(ft.number)])),
K6=Fw(ft.string),sI=Ba(gr),Hw=Ba(Oe),lI=Ba(ft.union([ft.undefined,Nn])),cI=iI(ft.union([ft.undefined,Nn])),uI=Ba(ft.union(
[ft.undefined,gc])),yf=Ba(Z_),dI=(e,t,r,n)=>xc(Ar(e,r,t.scope.key),n,r),kt=x(K,H,(e,t)=>Mw(t)?Lw(e,t.key):Uw(e,t.key)),Ww=x(
K,H,(e,t)=>{let r=GO(t)?`${t.key}[0]`:t.key;return kt(e,r)}),La=x(K,Kr,u$,(e,t,r=ss)=>{if(t)return r?.(t)?t:La(e,t.key,r)}),
G6=x(K,H,Kr,(e,t,r)=>r?kt(e,r.key):[t]),qw=x(K,H,tf,(e,t,r)=>{if(t.key===r.key)return!0;let n=Kr(e,r.key);return n?qw(e,
t.key,n.key):!1}),E=(e,t,r)=>{let n=Ci(e,t,r),a=x(sR,pI.has(t)?i=>fI(n(i)):n);return x(K,H,a,(i,o,s)=>os(i,o,s,Ar))},pI=new Set(
["htmlTemplate"]),fI=e=>!e.isFormula&&Vw.string.is(e.value)&&db(e.value)?{name:e.name,isFormula:!0,value:Up(Fp(e.value)),
targetCodec:e.targetCodec}:e,hI=E(js.string,"label",e=>yb(e.name)),mI=E(js.unknown,"iterationLabel"),gI=x(K,H,mI,(e,t,r)=>{
let{node:n}=t;if(M(r))return r;let a=r.right;if(a!=null&&a!=="")return R(String(a));let i=m$(n);return dI(e,t,i,js.string)}),
vf=x(K,H,(e,t)=>{let{key:r,isIteration:n}=t;return n?gI(e,r):hI(e,r)}),yI=(...e)=>t=>e.every(r=>r(t)),Gd=(e,t)=>e===t?e:
yI(e,t),Yw=(e,t)=>({direction:e.direction,include:Gd(e.include,t.include),traverseChildren:Gd(e.traverseChildren,t.traverseChildren),
traverseParent:Gd(e.traverseParent,t.traverseParent)}),zw=e=>(t,r)=>{let n=Kr(t,r.key);if(!n)return;let a=kt(t,n.key),i=a.
indexOf(r);if(i===-1)return;let s=a[i+(e==="back"?-1:1)];if(s)return s},vI=zw("forward"),bI=zw("back"),Kw=(e,t,r)=>{if(!r.
traverseChildren(t))return t;let n=kt(e,t.key),a=nl(n);return a?Kw(e,a,r):t},wI=(e,t,r)=>{let n=bI(e,t);return n?Kw(e,n,
r):Kr(e,t.key)},Gw=(e,t,r)=>{let n=vI(e,t);if(n)return n;let a=Kr(e,t.key);if(a&&r.traverseParent(a))return Gw(e,a,r)},Jw=x(
K,H,kb,(e,t,r=kc)=>wI(e,t,r)),bf=x(K,H,kb,(e,t,r=kc)=>{if(r.traverseChildren(t)){let n=kt(e,t.key);if(n.length>0)return n[0]}
return Gw(e,t,r)}),_i=e=>{let{node:t}=e;switch(t.type){case"screen":return!0;default:return!1}},TI=x(K,e=>kt(e,"").filter(
_i)),Ls=(e,t,r)=>{let n=r.direction==="back"?Jw(e,t,r):bf(e,t,r);if(n)return r.include(n)?n:Ls(e,n.key,r)},Zw=(e,t,r)=>{
let n=[],a=t;for(;a!==void 0;){let i=r.direction==="back"?Jw(e,a,r):bf(e,a,r);if(!i)break;r.include(i)&&n.push(i),a=i.key}
return n},Cc=e=>x(K,st,(t,r)=>Ls(t,r,e)),J6=Cc(Ln({include:_i,direction:"back"})),kI=Cc(Ln({include:_i,direction:"forwar\
d"})),SI=x(K,st,(e,t)=>{let r=La(e,t,_i);if(!r){let n=bf(e,"",kc);return n||rf(e)}return r}),Xw=x(K,Zp,(e,t)=>{let r=Ur(
e,t);return M(r)?(console.warn(`[orgicore] cursor "${t}" does not resolve in the current app def \u2014 falling back to the h\
ome screen (${r.left}).`),rf(e)):r.right}),Jd=e=>e.node.type===Ss,EI=(e,t)=>{let r=Jd(t)?t:void 0,n=La(e,t.key,Jd);for(;n;)
r=n,n=La(e,n.key,Jd);return r},wf=x(K,Xw,(e,t)=>{if(_i(t))return t;let r=La(e,t.key,_i);if(r)return r;let n=EI(e,t);return n||
kI(e,t.key)||rf(e)}),Z6=x(Gp,e=>nl(e)),xI=x(K,wf,(e,t)=>SI(e,t.key).key),_I=e=>Ln({traverseParent:t=>e!==t}),AI=x(H,_I),
$I=x(AI,e=>Yw(e,Ln({include:ZO}))),RI=E(Rv,"variant","basic"),OI=E(z_,"variant"),II=E(gr,"pageSize"),CI=E(gr,"maxLength"),
Qw=E(Oe,"required"),NI=E(Oe,"hidden"),PI=E(ae(hc),"size"),MI=E(ae(ln(Cp)),"validation"),DI=E(ae(Ip),"imageOutputOptions"),
jI=E(U,"pluginName"),e0={maxColumns:1},LI=E($p,"layout",e0),Ha=x(H,NI,(e,t)=>{let{node:{type:r}}=e;return(r===Oi||r===la||
r===ca)&&_e(t)&&t.right===void 0?R(!0):t}),UI=x(H,LI,(e,t)=>e.isIteration?R(e0):t),FI=E(Lv,"formConfig"),X6=E(Op,"contai\
nerStyle",wv),Q6=E($i,"data",wv),BI=E(ae(Mi.array(fc)),"pluginParams"),Di=x(vf,Ha,(e,t)=>({label:e,hidden:t})),Tf=x(sr,Qw,
(e,t)=>M(t)?t:M(e)?R(!1):R(!!t.right&&t0(e.right))),kf=x(K,H,MI,sr,(e,t,r,n)=>{if(M(r))return r;if(M(n)||t0(n.right))return R(
void 0);let a=Xx(r.right);for(let i of a){let o=Ar(e,i.expression,t.scope.key);if(M(o))return Ce(`error evaluating valid\
ation rule "${i.expression}": ${o.left}`);if(!o.right)return R(HI(e,i.errorMessage,t.scope.key))}return R(void 0)}),HI=(e,t,r)=>{
if(!t.startsWith(Ma))return t;let n=Up(t),a=Ar(e,n,r);return M(a)||a.right==null||a.right===""?n:String(a.right)},WI=E(U,
"help"),qI=E(U,"placeholder"),VI=E(U,"deepHelp"),YI=E(ae(Mi.array(Mi.string)),"examples"),zI=E(Oe,"aiEnabled"),t0=e=>typeof e==
"string"?e.trim()==="":Array.isArray(e)?e.length===0:e==null,Nc=x(Di,Tf,Qw,kf,WI,qI,VI,YI,PI,zI,(e,t,r,n,a,i,o,s,l,c)=>({
...e,missingRequired:t,required:r,errorMessage:n,help:a,placeholder:i,deepHelp:o,examples:s,size:l,aiEnabled:c})),r0=x(Nc,
oI,(e,t)=>({...e,value:t})),n0=x(Nc,Bw,(e,t)=>({...e,value:t})),a0=x(Di,lI,cI,FI,(e,t,r,n)=>({...e,currentValue:t,computedValue:r,
config:n})),KI=E(O_,"variant","single"),GI=E(xp,"idiom","select"),JI=E(Mi.array(Fv),"pickerValues"),ZI=e=>typeof e=="str\
ing"?{id:e,label:e}:e,XI=x(JI,e=>M(e)?e:R(e.right.map(ZI))),Pc=x(Nc,KI,XI,(e,t,r)=>({...e,variant:t,pickerValues:r})),QI=x(
Pc,gf,GI,(e,t,r)=>({...e,value:t,idiom:r})),eC=x(Pc,Bw,(e,t)=>({...e,value:t})),tC=e=>un(e)?"":`${e.key}.`,i0=e=>t=>`${tC(
t)}${e}`,rC=i0("value"),nC=i0("expanded"),aC=x(H,rC),iC=x(H,nC),Sf=x(K,aC,uI),o0=x(K,iC,Hw),s0=x(H,Di,Sf,o0,(e,t,r,n)=>{
let a=un(e);return{...t,value:r,expanded:n,isRoot:R(a)}}),eU=x(Di,we),tU=x(Nc,we),oC=x(a0,we),rU=x(r0,we),nU=x(n0,we),aU=x(
Pc,we),iU=x(QI,we),oU=x(eC,we),sC=x(s0,we),lC=x(jI,BI,(e,t)=>({name:e,params:t})),cC=x(lC,we),sU=x(K,H,cC,(e,t,{name:r,params:n=[]})=>{
let a={};for(let i of n)if(i.type==="static"&&(a[i.name]=i.value),i.type==="dynamic"){let o=Ar(e,i.formula,t.scope.key);
if(M(o))return Ce(`Error evaluating plugin "${r}" param "${i.name}": ${o.left}`);a[i.name]=o.right}return R(a)});var lU=x(K,H,II,CI,(e,t,r,n)=>{let{node:a,key:i,isIteration:o}=t;if(o)return;let s=Ge(r),l=Ge(n);if(s===void 0)return;let c=l??
1/0,u=a.data;if(ac(u)){let f=sr(e,i);if(_e(f)&&Array.isArray(f.right)){let h=f.right.length;c=l!==void 0?Math.min(h,l):h}}
let d=Ge(Fa(e,i));return{currentLength:d,totalLength:c,hasMore:d<c,pageSize:s}}),Ai={selectAppNodeVariant:E(F_,"variant",
"folder"),selectFlowStepVariant:E(B_,"variant","aiQuery"),selectHidden:Ha,selectLabel:vf,selectMissingRequired:Tf,selectValidationError:kf},
cU=E(U,"name"),uU=E(U,"label"),dU=E(Oe,"isRepeating"),pU=E(Oe,"isOwnScope"),fU=E(Oe,"isRecord"),hU=E(U,"recordKey"),mU=E(
U,"recordValue"),gU=E(oe.unknown,"compute"),yU=E(Oe,"isDerived"),vU=E(Oe,"isTransient"),bU=E(gr,"maxLength"),wU=E(gr,"pa\
geSize"),uC=E(ae(Rp),"place"),dC=E(ae($p),"layout"),pC=E(ae(Op),"containerStyle"),fC=E(U,"submitObjectType"),l0=E(ae(ln(
Cp)),"validation"),c0=E(Oe,"required"),hC=E(U,"help"),mC=E(U,"placeholder"),TU=E(U,"deepHelp"),kU=E(ae(oe.array(oe.string)),
"examples"),gC=E(ae(hc),"size"),yC=E(Oe,"aiEnabled"),vC=E(U,"iterationLabel"),bC=E(U,"nounLabel"),Mc=E(U,"icon"),u0=E(U,
"color"),SU=E(ae(Av),"authMode"),EU=E(Oe,"orgLogin"),xU=E(U,"appLogo"),_U=E(ae(ln(Mv)),"notifications"),AU=E(ae(ln(Dv)),
"transitions"),$U=E(ae(ln(jv)),"botActors"),RU=E(ae(Cv),"theme"),OU=E(ae(fs),"themeColors"),IU=E(ae(fs),"themeColorsDark"),
CU=E(U,"customCss"),NU=E(gr,"contentMaxWidth"),PU=E(ae(_v),"syncBar"),MU=E(U,"headerLogo"),DU=E(ae(Uv),"navigation"),jU=E(
ae(Vv),"library"),LU=E(ae(Yv),"feature"),d0=E(Oe,"hideHeader"),p0=E(U,"nextLabel"),f0=E(U,"finishLabel"),UU=E(ae($v),"va\
riant"),wC=E(Oe,"showHeader"),TC=E(Oe,"collapsible"),kC=E(Oe,"collapsedByDefault"),SC=E(Oe,"actionMenu"),h0=E(Oe,"reorde\
rable"),EC=E(U,"orderField"),xC=E(Oe,"hideTopBar"),_C=E(Oe,"hideNav"),AC=E(U,"itemLabel"),$C=E(U,"summary"),m0=E(gr,"min"),
g0=E(gr,"max"),RC=E(Oe,"autoAdvance"),y0=E(U,"actionLabel"),OC=E(U,"idleTitle"),IC=E(U,"idleDescription"),CC=E(U,"runnin\
gTitle"),NC=E(U,"runningDescription"),PC=E(U,"authTitle"),MC=E(U,"authDescription"),DC=E(U,"noCreditsTitle"),jC=E(U,"noC\
reditsDescription"),v0=E(U,"promptTemplate"),FU=E(U,"imageSource"),b0=E(U,"resultObjectType"),w0=E(U,"typeDescription"),
BU=E(ae(oe.union([mc,oe.string])),"model"),Us=E(Oe,"mockEnabled"),LC=E(gr,"mockResultCount"),UC=E(U,"mockResults"),FC=E(
gr,"maxUserTurns"),BC=E(U,"steeringChips"),HC=E(Oe,"voiceInput"),WC=E(Oe,"speakReplies"),qC=E(U,"speechLang"),VC=E(U,"in\
putPlaceholder"),YC=E(U,"mockReplies"),zC=E(U,"fetchUrl"),T0=E(U,"prompt"),KC=E(U,"mockImageUrl"),GC=E(U,"lyrics"),JC=E(
gr,"durationSec"),ZC=E(U,"mockAudioUrl"),XC=E(U,"audioSourceUrl"),QC=E(U,"language"),e2=E(U,"mockTranscript"),HU=E(U,"so\
urceExpression"),t2=E(U,"publishDataType"),r2=E(U,"publishScope"),n2=E(U,"publishVariant"),a2=E(U,"script"),WU=E(ae(_p),
"functionName"),qU=E(U,"args"),i2=E(ae(oe.array(oe.string)),"refreshCallables"),o2=E(U,"onSuccessNavigate"),s2=E(U,"succ\
essMessage"),l2=E(ae(oe.record(oe.string,Bv)),"nodeTypes"),c2=E(U,"rootType"),u2=E(Oe,"canAdd"),d2=E(Oe,"canEdit"),VU=E(
ae(Sp),"textTransform"),p2=E(gr,"step"),YU=E(ae(oe.union([Ep,oe.string])),"format"),zU=E(ae(oe.union([xp,oe.string])),"i\
diom"),KU=E(U,"placeholderIcon"),f2=E(ae(Ip),"imageOutputOptions"),h2=E(U,"aiSystemPromptFormula"),m2=E(U,"userAvatarUid"),
g2=E(Oe,"showCamera"),y2=E(Oe,"showFilePicker"),v2=E(Oe,"showSearch"),b2=E(Oe,"showEdit"),w2=E(Oe,"showCommit"),T2=E(Oe,
"multiple"),k2=E(gr,"maxSizeMb"),S2=E(U,"htmlTemplate"),E2=E(U,"purpose"),x2=E(ae(oe.union([Pv,oe.string])),"fieldType"),
_2=E(ae(oe.record(oe.string,Wv)),"actions"),A2=E(U,"parameters"),$2=E(U,"returns"),R2=E(U,"returnTypeHint"),GU=E(U,"plug\
inName"),JU=E(ae(oe.array(fc)),"pluginParams"),ZU=E(U,"roomKey"),O2=E(U,"displayName"),I2=E(U,"identity"),XU=E(ae(Ap),"m\
ediaMode"),C2=E(ae(Nv),"displayMode"),N2=E(gr,"maxTiles"),P2=E(U,"focusIdentity"),M2=E($v,"variant","inline"),D2=E(oe.unknown,
"imageSource"),j2=E(ae(oe.union([mc,oe.string])),"model"),L2=E(ae(oe.union([mc,oe.string])),"model"),U2=E(ae(oe.union([P_,
oe.string])),"model"),F2=E(ae(oe.union([C_,oe.string])),"model"),B2=E(ae(oe.union([N_,oe.string])),"model"),H2=E(oe.unknown,
"sourceExpression"),W2=E(I_,"variant","contained"),q2=E(_p,"functionName"),V2=E(oe.unknown,"args"),Y2=E(hc,"size","mediu\
m"),z2=E(Rv,"variant","basic"),K2=E(Sp,"textTransform","none"),G2=E(ae(oe.union([Ov,oe.string])),"variant"),J2=E(ae(oe.union(
[oe.literal("checkbox"),oe.literal("toggle")])),"variant"),Z2=E(Ep,"format","date"),X2=E(ae(oe.union([R_,oe.string])),"v\
ariant"),Q2=E(oe.string,"placeholderIcon","person"),eN=E(oe.string,"roomKey"),tN=E(Ap,"mediaMode","video"),$r=x(Ai.selectLabel,
Ai.selectHidden,uC,(e,t,r)=>({label:e,hidden:t,place:r})),Ef=x(dC,pC,fC,(e,t,r)=>({layout:e,containerStyle:t,submitObjectType:r})),
Fs=x($r,l0,c0,hC,mC,gC,yC,Ai.selectMissingRequired,Ai.selectValidationError,(e,t,r,n,a,i,o,s,l)=>({...e,validation:t,required:r,
help:n,placeholder:a,size:i,aiEnabled:o,missingRequired:s,errorMessage:l})),rN=x(vC,bC,Mc,u0,(e,t,r,n)=>({iterationLabel:e,
nounLabel:t,icon:r,color:n})),Dc=x($r,Ef,Ai.selectAppNodeVariant,(e,t,r)=>({...e,...t,variant:r})),nN=x(Dc,e=>({...e,variant:R(
"tabGroup")})),aN=x(Dc,e=>({...e,variant:R("tab")})),iN=x(Dc,e=>({...e,variant:R("folder")})),QU=x($r,Ef,Mc,d0,p0,f0,(e,t,r,n,a,i)=>({
...e,...t,icon:r,hideHeader:n,nextLabel:a,finishLabel:i})),oN=x($r,Ef,rN,M2,wC,TC,kC,SC,h0,EC,(e,t,r,n,a,i,o,s,l,c)=>({...e,
...t,...r,variant:n,showHeader:a,collapsible:i,collapsedByDefault:o,actionMenu:s,reorderable:l,orderField:c})),sN=x($r,xC,
_C,(e,t,r)=>({...e,hideTopBar:t,hideNav:r})),lN=x($r,AC,$C,m0,g0,(e,t,r,n,a)=>({...e,itemLabel:t,summary:r,min:n,max:a})),
pn=x($r,Ai.selectFlowStepVariant,RC,p0,f0,y0,OC,IC,CC,NC,PC,MC,DC,jC,(e,t,r,n,a,i,o,s,l,c,u,d,f,h)=>({...e,variant:t,autoAdvance:r,
nextLabel:n,finishLabel:a,actionLabel:i,idleTitle:o,idleDescription:s,runningTitle:l,runningDescription:c,authTitle:u,authDescription:d,
noCreditsTitle:f,noCreditsDescription:h})),cN=x(pn,v0,D2,b0,w0,j2,Us,LC,UC,(e,t,r,n,a,i,o,s,l)=>({...e,variant:R("aiQuer\
y"),promptTemplate:t,imageSource:r,resultObjectType:n,typeDescription:a,model:i,mockEnabled:o,mockResultCount:s,mockResults:l})),
uN=x(pn,v0,b0,w0,L2,FC,BC,HC,WC,qC,VC,Us,YC,(e,t,r,n,a,i,o,s,l,c,u,d,f)=>({...e,variant:R("aiChat"),promptTemplate:t,resultObjectType:r,
typeDescription:n,model:a,maxUserTurns:i,steeringChips:o,voiceInput:s,speakReplies:l,speechLang:c,inputPlaceholder:u,mockEnabled:d,
mockReplies:f})),dN=x(pn,zC,(e,t)=>({...e,variant:R("fetchData"),fetchUrl:t})),pN=x(pn,T0,U2,Us,KC,(e,t,r,n,a)=>({...e,variant:R(
"imageGeneration"),prompt:t,model:r,mockEnabled:n,mockImageUrl:a})),fN=x(pn,T0,GC,F2,JC,Us,ZC,(e,t,r,n,a,i,o)=>({...e,variant:R(
"audioGeneration"),prompt:t,lyrics:r,model:n,durationSec:a,mockEnabled:i,mockAudioUrl:o})),hN=x(pn,XC,B2,QC,Us,e2,(e,t,r,n,a,i)=>({
...e,variant:R("transcribe"),audioSourceUrl:t,model:r,language:n,mockEnabled:a,mockTranscript:i})),mN=x(pn,H2,t2,r2,n2,(e,t,r,n,a)=>({
...e,variant:R("publishData"),sourceExpression:t,publishDataType:r,publishScope:n,publishVariant:a})),gN=x(pn,a2,(e,t)=>({
...e,variant:R("script"),script:t})),k0=x($r,W2,q2,V2,y0,i2,o2,s2,Y2,Mc,(e,t,r,n,a,i,o,s,l,c)=>({...e,variant:t,functionName:r,
args:n,actionLabel:a,refreshCallables:i,onSuccessNavigate:o,successMessage:s,size:l,icon:c})),S0=x(Fs,z2,K2,gf,(e,t,r,n)=>({
...e,variant:t,textTransform:r,value:n})),E0=x(Fs,G2,m0,g0,p2,sI,(e,t,r,n,a,i)=>({...e,variant:t,min:r,max:n,step:a,value:i})),
x0=x(Fs,J2,Hw,(e,t,r)=>({...e,variant:t,value:r})),_0=x(Fs,Z2,gf,(e,t,r)=>({...e,format:t,value:r})),A0=x(Fs,X2,Q2,f2,h2,
m2,g2,y2,v2,b2,w2,T2,k2,yf,(e,t,r,n,a,i,o,s,l,c,u,d,f,h)=>({...e,variant:t,placeholderIcon:r,imageOutputOptions:n,aiSystemPromptFormula:a,
userAvatarUid:i,showCamera:o,showFilePicker:s,showSearch:l,showEdit:c,showCommit:u,multiple:d,maxSizeMb:f,value:h})),$0=x(
$r,S2,E2,x2,l0,c0,_2,sr,(e,t,r,n,a,i,o,s)=>({...e,htmlTemplate:t,purpose:r,fieldType:n,validation:a,required:i,actions:o,
value:s})),R0=x($r,sr,(e,t)=>({...e,value:t})),O0=x($r,A2,$2,R2,sr,(e,t,r,n,a)=>({...e,parameters:t,returns:r,returnTypeHint:n,
value:a})),I0=x($r,sr,(e,t)=>({...e,value:t})),C0=x($r,eN,O2,I2,tN,C2,N2,P2,(e,t,r,n,a,i,o,s)=>({...e,roomKey:t,displayName:r,
identity:n,mediaMode:a,displayMode:i,maxTiles:o,focusIdentity:s})),yN=(e,t)=>{if(e.type.includes(":")||e.type in t)return e.
type;let r=Gv(e.type);if(r.variant!==void 0)return`${r.type}:${r.variant}`;if(e.variant){let n=e.variant.includes(":")?e.
variant.split(":")[0]:e.variant;return`${e.type}:${n}`}return e.type};var jc=x(K,H,(e,t)=>{let{rootType:r,nodeTypes:n}=hf(t);if(un(t))return r;let a=Sf(e,t.key);if(_e(a)&&a.right)return yN(a.
right,n)}),vN=e=>e,N0=x(vN,st,(e,t)=>{let{nodeTypes:r}=e,n=r[t];if(n){let{allowedChildTypes:a,category:i="",icon:o,color:s,
label:l}=n;return{allowedChildTypes:a,name:t,category:i,icon:o,color:s,label:l}}return{allowedChildTypes:[],name:t,category:""}}),
ks=x(H,jc,(e,t="")=>N0(hf(e),t)),bN=x(ks,e=>e.allowedChildTypes),wN=x(H,bN,(e,t)=>t.map(r=>N0(hf(e),r))),TN=x(jc,ks,Mc,(e,t,r)=>_e(
r)&&r.right?r.right:t.icon||e||"objects"),kN=x(ks,u0,(e,t)=>_e(t)&&t.right?t.right:e.color||"#616161"),Lc=x(K,H,(e,t)=>un(
t)?kt(e,t.key):Dw(t)?kt(e,`${t.key}.${t.node.name}`):[]),P0=x(Lc,e=>e.length>0),SN=x(H,P0,(e,t)=>!t&&!un(e)),EN=x(kt,e=>e.
find(t=>t.node.type===mr)),M0=x(K,H,(e,t)=>{let{scope:r}=t;return r.node.type!==mr?0:1+M0(e,Ds(r))}),xN=x(K,st,(e,t)=>La(
e,t,ja)),_N=x(K,H,tf,(e,t,r)=>{let n=jc(e,t.key);if(!n)return[];let a=ks(e,r.key),i=[];a.allowedChildTypes.includes(n)&&
i.push("into");let o=xN(e,r.key);return o&&ks(e,o.key).allowedChildTypes.includes(n)&&(i.push("before"),i.push("after")),
i}),eF=x(K,H,tf,(e,t,r,n)=>n,(e,t,r,n)=>{let a=_N(e,t.key,r.key),{mouseY:i,elementTop:o,elementBottom:s}=n,l=r.key;if(a.
length===0)return;let c=s-o,u=i-o<=10,d=s-i<=10,f=!u&&!d,h=i-o<=c/2,y=s-i<=c/2,b=a.includes("before"),T=a.includes("afte\
r");if(a.includes("into")&&f)return{target:l,action:"into",position:"center"};if(h&&b)return{target:l,action:"before",position:"\
top"};if(y&&T)return{target:l,action:"after",position:"bottom"}}),tF=Cc(Ln({include:ja,direction:"forward"})),rF=Cc(Ln({
include:ja,direction:"back"})),D0=x(K,d$,(e,t)=>Ln({include:ja,direction:t,traverseChildren:r=>{if(!ja(r))return!0;let n=o0(
e,r.key);return _e(n)&&!!n.right}})),nF=x(K,st,(e,t)=>Ls(e,t,D0(e,"forward"))),aF=x(K,st,(e,t)=>Ls(e,t,D0(e,"back"))),iF=x(
K,e=>mf(e,"")),AN=e=>x(mf,t=>fw(t,e,"output")),$N=x(K,H,(e,t)=>iv(t)?t:La(e,t.key,iv)),oF=x(K,$N,(e,t)=>{if(!t||!t.node.
submitObjectType)return;let{scope:r,node:n,key:a}=t,i=mf(e,a),o=Pn(e.def,n),s=d=>xr([r.key,`${o}$${d}`]),l=s("id"),c=s("\
createdAt"),u=s("createdBy");return{pointer:t,type:t.node.submitObjectType,idKey:l,createdAtKey:c,createdByKey:u,obj:i}}),
j0=x(K,$I,(e,t)=>Yw(t,Ln({include:r=>{let n=Xd(Tf(e,r.key),!1),a=!!Xd(kf(e,r.key),void 0);return n||a}}))),RN=x(K,st,j0,
Ls),ON=(e,t)=>M(Ur(e,t))?void 0:RN(e,t),sF=x(K,st,j0,Zw),IN=x(K,st,(e,t)=>Zw(e,t,Ln({traverseParent:ss,include:r=>{if(r.
node.type!==Ii)return!1;let n=yf(e,r.key);if(M(n)||Array.isArray(n.right))return!1;let{url:a,previewUrl:i}=n.right;return!a&&
!!i}}))),lF=x(K,IN,(e,t)=>t.flatMap(r=>{let n=Ge(yf(e,r.key));return Array.isArray(n)?[]:[{pointerKey:r.key,value:n,imageOutputOptions:Xd(
DI(e,r.key),void 0)}]})),CN=x(Dc,we),NN=x(nN,we),PN=x(aN,we),MN=x(iN,we),DN=x(oN,we),jN=x(sN,we),LN=x(lN,we),UN=x(pn,we),
FN=x(cN,we),BN=x(uN,we),HN=x(dN,we),WN=x(pN,we),qN=x(fN,we),VN=x(hN,we),YN=x(mN,we),zN=x(gN,we),KN=x(k0,we),GN=x(S0,we),
JN=x(E0,we),ZN=x(x0,we),XN=x(_0,we),QN=x(A0,we),eP=x($0,we),tP=x(R0,we),rP=x(O0,we),nP=x(I0,we),aP=x(C0,we),L0=x(Di,l2,c2,
u2,d2,h0,(e,t,r,n,a,i)=>({...e,nodeTypes:t,rootType:r,canAdd:n,canEdit:a,reorderable:i})),iP=x(L0,we),oP=x(K,H,(e,t)=>{let{
node:r,key:n}=t;switch(gA(r.type)){case Es:let a=RI(e,n);return _e(a)&&a.right==="stringArray"?n0(e,n):S0(e,n);case _s:return x0(
e,n);case xs:let i=OI(e,n);return _e(i)&&i.right==="intArray"?r0(e,n):E0(e,n);case As:return _0(e,n);case Ii:return A0(e,
n);case $s:return Pc(e,n);case mr:return r.isRepeating?s0(e,n):L0(e,n);case oa:return $0(e,n);case vc:return a0(e,n);case Oi:
return R0(e,n);case la:return O0(e,n);case ca:return I0(e,n);case Fr:return pn(e,n);case wc:return k0(e,n);case Mp:return C0(
e,n);default:return Di(e,n)}}),sP=x(K,wf,(e,t)=>{let r=d0(e,t.key);return _e(r)&&r.right===!0}),ji=x(K,Ww,(e,t)=>t.filter(
r=>{let n=Ha(e,r.key);return!(_e(n)&&n.right)})),sv={kind:"auto"},lP=40,cP=e=>e?.mode==="spatial",ki=(e,t,r)=>{if(typeof r==
"number")return Number.isFinite(r)?r:void 0;if(typeof r!="string")return;if(!r.startsWith("@")){if(r.trim()==="")return;
let i=Number(r);return Number.isFinite(i)?i:void 0}let n=Ar(e,Up(r),t);if(!_e(n))return;let a=n.right;return typeof a=="\
number"&&Number.isFinite(a)?a:void 0},uP=x(K,H,UI,(e,t,r)=>{if(!_e(r))return;let n=r.right;if(!cP(n))return;let a=ki(e,t.
key,n.cols);if(a===void 0)return;let i=Math.floor(a);if(i<1)return;let o=ki(e,t.key,n.rows),s=o!==void 0&&Math.floor(o)>=
1?Math.floor(o):void 0,l=typeof n.rowHeight=="number"&&Number.isFinite(n.rowHeight)&&n.rowHeight>0?n.rowHeight:void 0,c=typeof n.
minColumnWidth=="number"&&n.minColumnWidth>0?n.minColumnWidth:lP;return{cols:i,rows:s,rowHeight:l,minColumnWidth:c}}),lv=e=>e===
void 0?1:Math.max(1,Math.floor(e)),dP=(e,t)=>{let r=Math.min(Math.max(0,Math.floor(e.x)),t.cols-1),n=Math.max(0,Math.floor(
e.y)),a=Math.min(lv(e.w),t.cols-r),i=lv(e.h);return t.rows!==void 0&&(n=Math.min(n,t.rows-1),i=Math.min(i,t.rows-n)),a=Math.
max(1,a),i=Math.max(1,i),{kind:"placed",x:r,y:n,w:a,h:i}},pP=x(K,H,(e,t,r)=>r,(e,t,r)=>{let n=t.node.place,a=Rp.is(n)?n:
void 0;if(!a)return sv;let i=ki(e,t.key,a.x),o=ki(e,t.key,a.y);if(i===void 0||o===void 0)return sv;let s=ki(e,t.key,a.w),
l=ki(e,t.key,a.h);return dP({x:i,y:o,w:s,h:l},r)}),fP=x(K,ji,(e,t)=>t.flatMap(r=>Ic(r)?U0(r)?[]:kt(e,r.key).filter(n=>{let a=Ha(
e,n.key);return!(_e(a)&&a.right)}):[r])),U0=e=>{var t,r;return((r=Oc((t=e.node.data)==null?void 0:t.span))==null?void 0:
r.mode)==="grid"},hP=x(ji,e=>e.filter(t=>Ic(t)&&U0(t))),mP=x(K,ji,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{let a=t.find(o=>Ic(
o)&&o.node.name===r);if(!a)return[];let i=[];return kt(e,a.key).forEach((o,s)=>{let l=Ha(e,o.key);if(_e(l)&&l.right)return;
let c=pP(e,o.key,n);c.kind==="placed"&&i.push({index:s,x:c.x,y:c.y})}),i}),cF=x(K,(e,t)=>t,(e,t,r)=>r,(e,t,r,n)=>n,(e,t,r,n)=>{
var a;let i=H(e,r),o=Oc((a=i.node.data)==null?void 0:a.span);if(!o||o.mode!=="grid")return[];let s=mP(e,t,o.slots,n);if(s.
length===0)return[];let l=gP(e,t,o.slots),c=s.map(d=>{let f=l[d.index];if(f===void 0)return;let h=Ar(e,o.axis,f);return _e(
h)?h.right:void 0}),u=[];for(let d of kt(e,r)){let f=Ha(e,d.key);if(_e(f)&&f.right)continue;let h=sr(e,d.key),y=_e(h)?gp(
h.right):void 0;if(!y)continue;let b={start:y.start,end:y.end},T=[];s.forEach((k,S)=>{let _=c[S];_!==void 0&&ff(b,_)&&T.
push(k.index)}),T.length>0&&u.push({recordKey:d.key,slots:T})}return SO(u,s)}),gP=(e,t,r)=>{let n=ji(e,t).find(a=>Ic(a)&&
a.node.name===r);return n?kt(e,n.key).map(a=>a.key):[]};var yP=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="running",vP=(e,t)=>yP(Ge(sr(e,t)))?kt(e,t).map(r=>r.key):
[],bP=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),cv=new WeakMap,wP=(e,t)=>{var r;let n=cv.get(e);n||(n=new Map,cv.set(e,
n));let a=n.get(t);if(a!==void 0)return a;let i;try{i=new RegExp(`(^|[^\\w$.])${bP(t)}\\s*\\??\\.\\s*(partial|ready)\\b`).
test((r=JSON.stringify(e))!=null?r:"")}catch{i=!0}return n.set(t,i),i},TP=(e,t)=>{if(kt(e,t).length>0)return!0;let{name:r}=H(
e,t).node;return r?wP(e.def,r):!1},Rt=(e,t)=>{let r=Ob(e);return{...e,instance:{...r,...t}}},F0=(e,t)=>{switch(t.type){case Nb:
return EP(e,t);case Pb:return xP(e,t);case Mb:return _P(e,t);case Db:return AP(e,t);case jb:return $P(e,t);case Lb:return RP(
e,t.payload);case Ub:return OP(e,t);case Kb:return W0(e,t.payload);case Fb:return CP(e,t);case zb:return V0(e,t.payload);case Bb:
return NP(e,t.payload);case Yb:return PP(e,t);case Hb:return vp(e,t.payload);case Wb:return MP(e,t);case qb:return LP(e,
t);case Vb:return FP(e);case Jb:return BP(e,t);case Qp:return z0(e,t);case Gb:return t.payload.actions.reduce((r,n)=>F0(
r,n),e)}},kP=(e,t)=>{let r=t.payload.pointerKey;return H(e,r)},B0=(e,t)=>{let r=Ur(e,t);if(M(r)){console.warn(`[orgicore\
] ignoring write to unresolvable pointer "${t}" \u2014 the node is not declared on the current app def (${r.left}).`);return}
return r.right},SP=e=>t=>t.pointer===e.pointer?e:t,EP=(e,t)=>{let{appDef:r,appInstance:n}=t.payload;return{...e,def:r,instance:n}},
xP=(e,t)=>{let{appInstance:r}=t.payload;return{...e,instance:r}},_P=(e,t)=>{let{appDef:r}=t.payload;return{...e,def:r}},
AP=(e,t)=>{let{data:r}=t.payload;return{...e,context:{...e.context,...r}}},$P=(e,t)=>{let{repo:r}=t.payload;return{...e,
repo:r}},H0=(e,t,r)=>{let n=Dn(e),a=Jp(e),i={pointer:t,length:r};if(!a[t])return Rt(e,{lengths:[...n,i]});let s=n.map(l=>l.
pointer===t?i:l);return Rt(e,{lengths:s})},RP=(e,t)=>{let{value:r,pointerKey:n}=t,a=B0(e,n);if(!a)return e;let{key:i,scope:o,
node:s}=a;if(s.isDerived)return e;let l=Mn(e),c={pointer:i,value:r},d=Ib(e)[i];if(!d){let y=nf(e,o.key).reduce((b,T)=>{if(qp(
T.node)){let k=T.index+1,S=Ds(T),_=Ge(Fa(e,S));if(k>_)return H0(b,S,k)}return b},e);return Rt(y,{data:[...l,c]})}if(d.value===
r)return e;let f=l.map(SP(c));return Rt(e,{data:f})},Uc=e=>(t,r,n)=>lR(e,t,r,n),OP=(e,t)=>{let r=B0(e,t.payload.pointerKey);
if(!r)return e;let a=Mn(e).filter(i=>i.pointer!==r.key);return Rt(e,{data:a})},W0=(e,{pointerKey:t})=>{let r=IP(e,t),n=Mn(
e),a=Dn(e),i=n.filter(s=>!r.has(s.pointer)),o=a.filter(s=>!r.has(s.pointer));return i.length===n.length&&o.length===a.length?
e:Rt(e,{data:i,lengths:o})},IP=(e,t)=>{let r=new Set,n=a=>{if(!r.has(a)){r.add(a);for(let i of kt(e,a))n(i.key)}};return n(
t),r},q0=(e,t,r)=>{let n=[],a=new Set,i=s=>{if(!a.has(s.key)){a.add(s.key),r(s)&&n.push(s.key);for(let l of kt(e,s.key))
i(l)}},o=Ur(e,t);return _e(o)&&i(o.right),n},CP=(e,t)=>{let{node:r,isIteration:n,key:a}=kP(e,t),{index:i}=t.payload,o=Mn(
e),s=Dn(e),l=Jp(e);if(!r.isRepeating||n)return e;let c=Uc(e),u=o.map(h=>{let{pointer:y}=h,b=sa(e,a,y);if(b>=i){let T=c(a,
y,b+1);return{...h,pointer:T}}return h}),d=s.map(h=>{let{pointer:y,length:b}=h;if(a===y)return{pointer:y,length:b+1};let T=sa(
e,a,y);if(T>=i){let k=c(a,y,T+1),S=jn(e,k);return{length:b,pointer:Ds(S)}}return h}),f=Rt(e,{data:u,lengths:d});if(!l[a]){
let h=Dn(f);return Rt(f,{lengths:[...h,{pointer:a,length:1}]})}return f},vp=(e,{pointerKey:t,toIndex:r})=>{let n=jn(e,t),
a=n.key;if(!n.node.isRepeating)return e;let i=Mn(e),o=Dn(e),s=Uc(e),l=n.index,c=Math.min(l,r),u=Math.max(l,r),d=i.map(h=>{
let{pointer:y}=h,b=sa(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,k=s(a,y,T);return{...h,pointer:k}}return h}),f=o.map(
h=>{let{pointer:y}=h,b=sa(e,a,y);if(b>=c&&b<=u){let T=b===l?r:b>l?b-1:b+1,k=s(a,y,T),S=jn(e,k);return{...h,pointer:Ds(S)}}
return h});return Rt(e,{data:d,lengths:f})},NP=(e,{fromIndex:t,toIndex:r,pointerKey:n})=>{let a=jn(e,n),i=a.key,o=Mn(e);
if(!a.node.isRepeating)return e;let s=Uc(e),l=o.map(c=>{let{pointer:u}=c,d=sa(e,i,u);if(d===t||d===r){let h=s(i,u,d===t?
r:t);return{...c,pointer:h}}return c});return Rt(e,{data:l})},V0=(e,{pointerKey:t})=>{var r;let{scope:n,isIteration:a,key:i}=H(
e,t);if(!a){let h=`${t}[`,y=Mn(e).filter(T=>!T.pointer.startsWith(h)),b=Dn(e).filter(T=>T.pointer!==t&&!T.pointer.startsWith(
h));return Rt(e,{data:y,lengths:b})}let o=((r=Kr(e,i))==null?void 0:r.key)||"",s=Mn(e),l=Dn(e),c=n.index,u=Uc(e),d=s.flatMap(
h=>{let{pointer:y}=h,b=sa(e,o,y);if(b===c)return[];if(b>c){let T=u(o,y,b-1);return{...h,pointer:T}}return h}),f=l.flatMap(
h=>{let{pointer:y,length:b}=h;if(o===y){let k=h.length-1;return k===0?[]:{pointer:y,length:k}}let T=sa(e,o,y);if(T===c)return[];
if(T>c){let k=u(o,y,T-1),S=jn(e,k);return{length:b,pointer:Ds(S)}}return h});return Rt(e,{data:d,lengths:f})},PP=(e,t)=>{
let{pointerKey:r,toPointerKey:n,target:a}=t.payload,i=H(e,r),o=Kr(e,i.key);if(!o)return e;let s=H(e,n);if(!ja(i)||!ja(s)||
i.key===s.key)return e;if(a==="into"){let l=XO(s),c=H(e,l);if(o.key===c.key)return e;let[u]=uv(e,i,o,c);return u}if(a===
"before"||a==="after"){if(un(s))return e;let l=Kr(e,s.key);if(!l)return e;let c=i.scope.index,u=s.scope.index,d=a==="bef\
ore"?-1:0,f=a==="after"?1:0;if(o.key===l.key){if(c===u)return e;let b=c<u?d:f,T=u+b;return T===c?e:vp(e,{pointerKey:i.key,
toIndex:T})}let[h,y]=uv(e,i,o,l);if(e!==h){let b=u+f;return vp(h,{pointerKey:y,toIndex:b})}}return e},uv=(e,t,r,n)=>{let{
key:a,scope:i}=t;if(qw(e,a,n.key))return[e,a];let o=i.index,s=Ge(Fa(e,n.key)),l=Jp(e),c=Mn(e),u=Dn(e),d=`${n.key}[${s}]`,
f=c.flatMap(T=>{if(sa(e,r.key,T.pointer)===o){let S=T.pointer.replace(a,d);return[T,{...T,pointer:S}]}return T}),h=u.flatMap(
T=>{if(n.key===T.pointer){let k=T.length+1;return{pointer:T.pointer,length:k}}if(T.pointer.startsWith(a)){let k=T.pointer.
replace(a,`${n.key}[${s}]`);return[T,{pointer:k,length:T.length}]}return T}),y=Rt(e,{data:f,lengths:h});if(!l[n.key]){let T=Dn(
y);y=Rt(y,{lengths:[...T,{pointer:n.key,length:1}]})}return[V0(y,{pointerKey:a}),d]},MP=(e,t)=>{let{pointerKey:r,args:n}=t.
payload;return Rt(e,n===void 0?{cursor:r}:{cursor:r,cursorArgs:n})},DP=new Set(["script","publishData"]),jP=(e,t)=>{let r=Ib(
e);return q0(e,t,n=>n.node.type===Fr&&typeof n.node.variant=="string"&&DP.has(n.node.variant)).some(n=>{var a;let i=(a=r[n])==
null?void 0:a.value;return typeof i=="object"&&i!==null&&i.status==="running"})},LP=(e,t)=>{let{pointerKey:r,args:n}=t.payload;
if(!r)return e;let a=Zp(e),i=Xp(e),o=u=>q0(u,r,d=>d.node.type===Ss).filter(d=>!jP(u,d)).reduce((d,f)=>W0(d,{pointerKey:f}),
u);if(r===a&&UP(i,n))return o(e);let s=Gp(e),l=Cb(e),c=Rt(e,{navStack:a?[...s,a]:s,navStackArgs:a?[...l,i]:l,cursor:r,cursorArgs:n});
return o(c)},UP=(e,t)=>{let r=e??{},n=t??{},a=Object.keys(r),i=Object.keys(n);return a.length!==i.length?!1:a.every(o=>r[o]===
n[o])},FP=e=>{let t=Gp(e),r=Cb(e),n=t.slice(0,-1),a=r.slice(0,-1),i=t[n.length]||xI(e),o=r[n.length];return Rt(e,{navStack:n,
navStackArgs:a,cursor:i,cursorArgs:o})},Y0=(e,t)=>{let r=H(e,t),{node:n,key:a,scope:i}=r,o=n.pageSize;if(o===void 0)return;
let s=typeof o=="number"?o:Ge(Ar(e,o,i.key))||0;if(s<=0)return;let l=n.maxLength,c=l===void 0?void 0:typeof l=="number"?
l:Ge(Ar(e,l,i.key)),u=c??1/0,d=n.data;if(ac(d)){let h=sr(e,a);if(_e(h)&&Array.isArray(h.right)){let y=h.right.length;u=c!==
void 0?Math.min(y,c):y}}let f=Ge(Fa(e,a));return{key:a,pageSizeValue:s,currentLength:f,totalLength:u}},z0=(e,t)=>{let{pointerKey:r,
page:n}=t.payload,a=Y0(e,r);if(!a)return e;let i=(n+1)*a.pageSizeValue;return H0(e,a.key,i)},BP=(e,t)=>{let{pointerKey:r}=t.
payload,n=Y0(e,r);if(!n)return e;let{currentLength:a,totalLength:i,pageSizeValue:o}=n;if(a>=i)return e;let s=Math.ceil(a/
o)-1;return z0(e,{type:Qp,payload:{pointerKey:r,page:s+1}})},HP=(e=LA,t={},r)=>{let n={def:e,context:t,repo:r},i=Z$(l=>{
n=F0(n,l)}),o=()=>n;return i.getState=o,{api:i,getState:o,sel:l=>(...c)=>l(n,...c)}},WP=(e,t={})=>{let{api:r,sel:n}=e,a=n(
Ur);r.initAppInstance();let i=(o,s="")=>{Object.entries(o).forEach(([l,c])=>{var u;if(c!==void 0){let d=xr([s,l]),f=a(d);
if(M(f)){if(String(f.left).endsWith("not found"))return;throw new Error(String(f.left))}let h=f.right;if(h.node.isRecord&&
Nn.is(c)){let y=(u=h.node.recordKey)!=null?u:"key",b=h.node.recordValue;Object.entries(c).forEach(([T,k],S)=>{i(typeof b==
"string"?{[y]:T,[b]:k}:{[y]:T,...Nn.is(k)?k:{}},`${d}[${S}]`)})}else h.node.isRepeating&&Qx.is(c)?c.forEach((y,b)=>{yu(y)?
r.insertSlot(h.key,b):i(y,`${d}[${b}]`)}):h.node.isOwnScope?Nn.is(c)&&i(c,`${d}[0]`):r.updateValue(h.key,c)}})};i(t)};var[uF,qP,dF]=Pi("App"),[pF,VP,fF]=Pi("Pointer"),K0=(e={})=>Ut(e)?{pointerKey:e}:e;var bp=(e,t)=>{let r=Sf(e,t.key);if(!_e(r)||r.right===void 0)return;let n=r.right,a=Lc(e,t.key);if(a.length===0)return{...n};
let i=[];for(let o of a){let s=bp(e,o);s&&i.push(s)}return{...n,_children:i}};var G0=(e,t)=>e.length===t.length&&e.every((r,n)=>Object.is(r,t[n])),J0=(e,t)=>Object.is(e,t)||vu(e,t),YP=(e,t,r,n=J0)=>{
let a=(0,Ui.useRef)(void 0),i=()=>{let o=e.getState(),s=a.current;if(s&&s.state===o&&G0(s.inputs,r))return s.result;let l=t(
o),c=s&&n(s.result,l)?s.result:l;return a.current={state:o,inputs:r,result:c},c};return(0,Ui.useSyncExternalStore)(e.subscribe,
i,i)},zP=(e,t,r,n)=>{let a=(0,Ui.useRef)(void 0),i=()=>{let o=e.getState(),s=a.current,l=s&&G0(s.inputs,r)?s.snapshot:void 0,
c=P$(l,o,t,n);return c!==l&&(s&&J0(s.snapshot.result,c.result)&&(c.result=s.snapshot.result),a.current={inputs:r,snapshot:c}),
c.result};return(0,Ui.useSyncExternalStore)(e.subscribe,i,i)},[hF,mF]=Pi("AppData",{ctx:{}}),gF={createAppInstance:bu(),
toOutputData:Ob};var KP=(e,t)=>{switch(t){case"@root":return Q0(e);case"@parent":return e.parentAppContext;case"@self":return e}return Z0(
e,t)},Z0=(e,t)=>e.name===t?e:e.parentAppContext?Z0(e.parentAppContext,t):null,X0=(e,t)=>t===void 0||e.namespace===t?e:e.
parent?X0(e.parent,t):null,xf=(e="@self")=>{let t=qP(),r=KP(t,e);if(!r)throw new Error(`App context not found for search\
 param ${e}`);return r},GP=e=>{let{namespace:t,pointerKey:r}=K0(e),{name:n}=xf(t),a=VP();if(r)return{namespace:n,pointerKey:r};
let i=X0(a,n);if(!i)throw new Error(`Pointer context not found for namespace ${n}`);return i},JP=(e,t)=>{let{store:r}=xf(
t);return YP(r,e,[e])};var ZP=(e,t)=>JP(e,t),Fi=e=>t=>ZP(e,t),XP=e=>GP(e).pointerKey,QP=(e,t)=>{let r=XP(t),{store:n}=xf(K0(t).namespace);return zP(
n,a=>e(a,r),[e,r],r)},te=e=>t=>QP(e,t),yF=te(H),vF=te(Ww),bF=te(ji),wF=te(uP),TF=te(fP);var kF=te(hP);var SF=te(x(Fa,Ge));var EF=Fi(Zp),xF=Fi(Xp),_F=Fi(Xw),AF=Fi(wf),$F=Fi(sP),RF=Fi(TI);var OF=te(vf);var IF=te(oP),CF=te(iP);var NF=te(oC);var PF=te(EN),MF=te(M0),DF=te(Lc),jF=te(P0),LF=te(wN),UF=te(SN),FF=te(TN),BF=te(kN),HF=te(jc),WF=te(sC),qF=te(ON);var Q0=e=>{let{parentAppContext:t}=e;return t?Q0(t):e};var VF=te(CN),YF=te(NN),zF=te(PN),KF=te(MN),GF=te(DN),JF=te(jN),ZF=te(LN),XF=te(UN),QF=te(FN),e4=te(BN),t4=te(HN),r4=te(
WN),n4=te(qN),a4=te(VN),i4=te(YN),o4=te(zN),s4=te(KN),l4=te(GN),c4=te(JN),u4=te(ZN),d4=te(XN),p4=te(QN),f4=te(eP),h4=te(
tP),m4=te(rP),g4=te(nP),y4=te(aP);var[v4,b4]=Pi("form");var $f=e=>e,rM=Y($f,e=>Ft(e,t=>t.name)),nM=Y($f,e=>e.reduce((t,r)=>(t[r.name]={allowedChildTypes:[],icon:r.icon||"extens\
ion",color:r.color||"#9E9E9E",category:"plugins"},t),{})),aM=Y($f,e=>e.map(t=>t.name)),iM=Y(rM,st,(e,t)=>e[t]),oM=[Es,xs,
_s,Ii,As,$s,Oi,la,ca],sM=e=>{let t=[...oM,oa,"textContent","subsection",wc,...aM(e)],r=nM(e),n=["appNode:folder",hs,la,ca];
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
rm",...t],icon:"route",color:"#2e7d32",category:"layout",label:"Flow"},repeat:{allowedChildTypes:[hs],icon:"repeat",color:"\
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
lM=e=>hb({t:mb({rootType:"app",nodeTypes:e,iterationLabel:"@(value.label || value.name || 'New ' + (value.variant || val\
ue.type)) + (value.isRepeating ? '[...]' : '')",nounLabel:"@value.variant || value.type",label:"App Config"})}),dv={anonOnly:"\
public",hybrid:"public",userOnly:"private"},cM="data-degraded-node",uM=`<div ${cM}="true" role="alert" style="margin:8px\
 0;padding:8px 12px;border:1px solid #e6b800;border-radius:6px;background:#fff8e1;color:#8a6d00;font-size:0.875rem;">\u26A0\uFE0F \
This part of the page couldn't be displayed.</div>`,dM=e=>({type:oa,name:e,htmlTemplate:uM}),pM=Fc.intersection([Fc.partial(
{value:gc}),Nn]),fM=AN(pM),hM=(e,t,r={})=>{let n=h=>{var y;let{t:b=[],value:T}=h,k=b.length>0?b.map(n):void 0,S;try{S=a(
T)}catch(I){if(!r.lenient)throw I;return dM((y=T.name)!=null?y:"unnamed")}let _={...S,children:k};return _.submitObjectType&&
(_.children||(_.children=[]),_.children=[..._.children,...fb()]),_},a=h=>{let y=i(h),b=nA.decode(y);if(b_(b))return b.right;
let T=w_(b.left),k=tp(b.left),S=b.left.some(I=>I.context.some(N=>N.key==="columnBreaks")),_='Check that your node has a \
valid "type" property.';throw S&&(_="columnBreaks format mismatch. System expects number[] (e.g., [2, 5, 7]) but you pro\
vided responsive objects. Convert to legacy format or update types."),new Error(`\u{1F6A8} Design Node Error - ${T}
\u{1F4CD} Location: ${k||"root"}
\u{1F4A1} Fix: ${_}
\u{1F4CB} Node: ${JSON.stringify(y,null,2).substring(0,500)}`)},i=h=>{let y=o(h),{name:b="unnamed",id:T,...k}=y;return{name:b,
...k}},o=h=>{let{type:y,...b}=h,T=iM(t,y);if(T){let{parameters:S={},description:_,icon:I,image:N,...W}=b;if(e_.is(S))return{
type:oa,htmlTemplate:`@${y}(${T.parameters.map(V=>S[V.name||""]||"undefined").join(",")})`,pluginName:y,...W}}let k=Gv(y);
if(k.variant!==void 0)return{type:k.type,variant:k.variant,...b};if(y==="image"||y==="textContent")return{type:oa,...b};
if(!DA.is(y))throw new Error(`Invalid node type: ${y}`);if(y===bc)return{...h,isRepeating:!0};if(y===yc){let{appLogo:S,..._}=h,
I={type:y,..._},N=I.authMode;return N&&dv[N]&&(I={...I,authMode:dv[N]}),I}return h},s={def:lM(sM(t)),instance:e},l=fM(s,
"t");if(M(l))return Ce(`Invalid design node: ${l.left}`);let c=l.right,{value:u={type:"app",name:""},...d}=c,f={value:{...u,
name:""},...d};try{return R(n(f))}catch(h){return Ce(Zx(h))}},mM=e=>e!==void 0&&!(typeof e=="object"&&e!==null&&!Array.isArray(
e)&&Object.keys(e).length===0),Qo=e=>{var t;if(!e||!e.data||e.data.length===0)return;let r=(t=e.data.find(o=>o.pointer===
"value"))==null?void 0:t.value,n=mM(r),i={def:hb({t:mb({rootType:"app",nodeTypes:{}})}),instance:e};if(n){let o=H(i,"t");
return bp(i,o)}else{let o=H(i,"t"),s=Lc(i,o.key);if(s.length===0)return{type:"folder",name:""};let l=[];for(let c of s){
let u=bp(i,c);u&&l.push(u)}return{type:"folder",_children:l}}},tT=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.
minClientVersion,appConfig:Qo(e.appConfig),users:Qo(e.users),objectTypes:Qo(e.objectTypes),objectInstances:Qo(e.objectInstances),
plugins:Qo(e.plugins)}),rT=(e,t,r,n)=>{let{_children:a,...i}=e;if(r.push({pointer:`${t}.value`,value:i}),a&&a.length>0){
r.push({pointer:`${t}.expanded`,value:!0});let o=`${t}.t`;n.push({pointer:o,length:a.length}),a.forEach((s,l)=>{let c=`${o}\
[${l}]`;rT(s,c,r,n)})}},es=(e,t,r)=>{if(!e)return{};let n=[],a=[],{_children:i,...o}=e;o.type==="folder"&&Object.keys(o).
length===1||n.push({pointer:"value",value:o}),i&&i.length>0&&(n.push({pointer:"expanded",value:!0}),a.push({pointer:"t",
length:i.length}),i.forEach((c,u)=>{rT(c,`t[${u}]`,n,a)}));let l={data:n,lengths:a};return t&&(l.cursor=t),r&&(l.navStack=
r),l},gM=e=>({versionId:e.versionId,apiVersion:e.apiVersion,minClientVersion:e.minClientVersion,appConfig:es(e.appConfig,
e.appConfig?"t[0]":void 0),users:es(e.users,e.users?"t[0]":void 0),objectTypes:es(e.objectTypes,e.objectTypes?"t[0]":void 0),
objectInstances:es(e.objectInstances,e.objectInstances?"t[0].t[0]":void 0),plugins:es(e.plugins,e.plugins?"t[0]":void 0)});var yM="\0ORGIGGLY_SANDBOXED_WIDGET\0",T4=bt.intersection([bt.type({kind:bt.literal("sandboxed-widget"),pluginName:bt.string,
params:bt.UnknownRecord}),bt.partial({embedsThirdPartyMedia:bt.boolean,connections:bt.array(pb),widgetOwner:bt.string,widgetVersion:bt.number})]),
vM=(e,t,{embedsThirdPartyMedia:r,connections:n,widgetOwner:a,widgetVersion:i}={})=>{let o={kind:"sandboxed-widget",pluginName:e,
params:t,...r?{embedsThirdPartyMedia:!0}:{},...n?.length?{connections:n}:{},...a!==void 0?{widgetOwner:a}:{},...a!==void 0&&
i!==void 0?{widgetVersion:i}:{}};return yM+JSON.stringify(o)};var bM=({name:e,htmlTemplate:t,parameters:r,runtime:n,embedsThirdPartyMedia:a,connections:i,widgetOwner:o,widgetVersion:s})=>(...l)=>{
let c=r.reduce((u,d,f)=>(u[d.name||`param${f}`]=l[f],u),{});return n==="sandboxed"?vM(e,c,{embedsThirdPartyMedia:a,connections:i,
widgetOwner:o,widgetVersion:s}):String(oO(Fp(t),c))},wM=e=>e.reduce((t,r)=>(t[r.name]=bM(r),t),{});var TM=ee.intersection([ee.type({name:ee.string}),gc]),kM=ee.intersection([gc,Nn]),SM=ee.union([ee.literal("text"),ee.literal(
"number"),ee.literal("boolean"),ee.literal("temporal")]),k4=SM.types.map(e=>e.value);var EM=ee.type({pointer:ee.string,value:ee.unknown}),xM=ee.type({pointer:ee.string,length:ee.number}),ts=ee.partial({cursor:ee.string,
navStack:ee.array(ee.string),data:ee.array(EM),lengths:ee.array(xM)}),S4=ee.intersection([ee.type({versionId:ee.string,appConfig:ts,
users:ts,objectTypes:ts,objectInstances:ts,plugins:ts}),ee.partial({apiVersion:ee.string,minClientVersion:ee.number})]),
_M=ee.intersection([ee.type({id:ee.string,pointer:ee.string,type:ee.union([ee.literal("user"),ee.literal("group")])}),ee.partial(
{name:ee.string,email:ee.string,isAdmin:ee.boolean,usernames:ee.string})]);var AM=e=>e,nT=Y(AM,e=>e.fields.filter(t=>zA.is(t))),aT=Y(nT,e=>Ft(e,t=>t.name)),_4=Y(aT,st,(e,t)=>e[t]),$M=e=>{let t=e.
map(iT).filter(Xi);return ya(["name",...t]).map(n=>`value.${n}`).join(" || ")},iT=e=>{let t=aT(e),r=t.name||t.Name;if(r)
return r.name;let n=nT(e)[0];return n&&(n.type==="text"||n.type==="number")?n.name:"id"};var oT=["type","_scope","_groupKey"],A4=new Set(oT);var RM=e=>Xi(e.type)&&Xi(e.id),OM=e=>e,sT=Y(OM,e=>e.types),$4=Y(sT,$M),IM=Y(sT,e=>Ft(e,t=>t.name)),CM=Y(IM,st,(e,t)=>e[t]),
R4=Y(CM,e=>e&&iT(e));var lT=e=>e,NM=Y(lT,e=>e.nodes),PM=Y(lT,e=>e.plugins),I4=Y(NM,PM,(e,t)=>ya([...e.map(r=>r.name),...t.map(r=>r.name)]));var MM=(e,t)=>({metaModel:e,repo:{objects:t}}),DM=e=>e,Bs=e=>Y(DM,t=>{let{data:r=[]}=t??{};return r.map(n=>gu(n.value)?{
...n.value,pointer:n.pointer}:n.value).filter(e.is)}),jM=Bs(eA),LM=Bs(kM),UM=Bs(YA),P4=Bs(TM),Rf=Bs(_M),cT=e=>e,uT=(e,{lenient:t}={})=>{
let r=e.versionId,n=e.apiVersion,a=UM(e.plugins),i=LM(e.objectInstances).filter(RM),o=hM(e.appConfig,a,{lenient:t});return M(
o)?o:R({appConfig:o.right,users:e.users,objectTypes:jM(e.objectTypes),objectInstances:i,plugins:a,versionId:r,apiVersion:n})},
FM=Y(cT,e=>uT(e)),M4=Y(cT,e=>uT(e,{lenient:!0})),dT=e=>e,BM=Y(dT,e=>({types:e.objectTypes})),D4=Y(dT,BM,(e,t)=>MM(t,e.objectInstances)),
Bc=e=>e,pT=e=>{let[t]=Hp(e);return t},Of=e=>e.replace(/\.?value$/,""),fT=Y(Rf,e=>Ft(e,t=>Of(t.pointer)));var If=Y(Bc,fT,st,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,type:o,isAdmin:s}=n;if(o!=="group")return;let l=r?
If(e,pT(r)):void 0;return{id:a,name:i,parent:l,isAdmin:s}}),HM=Y(Bc,fT,st,(e,t,r)=>{let n=t[r];if(!n)return;let{id:a,name:i=a,
email:o,type:s,isAdmin:l}=n;if(s!=="user"||!o)return;let c=If(e,pT(r));return{id:a,name:i,email:o,parent:c,isAdmin:l}}),
hT=Y(Rf,e=>Vn(e,t=>t.type)),mT=Y(Bc,hT,(e,t)=>(t.user||[]).flatMap(({pointer:a})=>{let i=HM(e,Of(a));return i?[i]:[]})),
j4=Y(Bc,hT,(e,t)=>t.group.flatMap(({pointer:n})=>{let a=If(e,Of(n));return a?[a]:[]})),WM=Y(mT,e=>Ft(e,t=>t.email)),qM=Y(
mT,e=>Ft(e,t=>t.name)),L4=Y(qM,st,(e,t)=>e[t]),U4=Y(WM,st,(e,t)=>e[t]),pv=e=>(e??"").split(/[\s,]+/).map(t=>t.trim().toLowerCase()).
filter(t=>t&&t!=="anon"),F4=Y(Rf,st,(e,t)=>{var r;let n=t.trim().toLowerCase();if(!n||n==="anon")return;let a=e.find(i=>i.
type==="user"&&pv(i.usernames).includes(n));if(a)return{id:a.id,name:(r=a.name)!=null?r:a.id,usernames:pv(a.usernames)}});var B4=29*24*60*60*1e3;var gT=["flowStep:script","content:data-script","content:action"],Hs=[{name:"publishData",async:!0,signature:'publishDat\
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
in in storage with their fields preserved, but a deleted record leaves `$data` at once, for every visitor: there is no n\
eed to filter on `isDeleted`, and an app cannot list or restore its deleted records, so don't build a bin or an undo on \
it. Cascades through declared parent relations: every loaded record of an object type whose `parent: {type, idField}` po\
ints at a deleted record is soft-deleted too, recursively, children before parents \u2014 so do NOT filter and delete childre\
n by hand when the child type declares `parent`. Only children currently loaded in $data are found, so the child type mu\
st be declared as a data source by some node. Restoring a parent does not restore its children. To remove records perman\
ently, use `hardDelete`. Throws if any referenced record is not currently loaded in $data.",availableIn:["flowStep:scrip\
t","content:data-script","content:action"],examples:['deleteData({type: "Post", id: post.id})','deleteData({type: "Photo\
", id: photos.map((p) => p.id)})','deleteData({type: "Post", id: id}) // Photo declares parent: {type: "Post", idField: \
"postId"}, so its photos go too']},{name:"deleteFile",async:!0,signature:"deleteFile(url: string | string[]): void",description:"\
Permanently deletes an uploaded file (an image a `fileInput` stored, by its URL) from this org's Storage \u2014 the blob a re\
cord field points at, not the record. Opt in for records that are genuinely gone: `deleteData` is a soft delete that kee\
ps the record in storage, so calling `deleteFile` beside it means the photo is gone even if the record is ever recovered\
. Only files under THIS org's own upload prefix are touched; any other URL (a web-search pick, another org's file, an em\
pty field) is silently skipped, never an error, so it is safe to call unconditionally. A file that is already gone is to\
lerated. Accepts an array for multi-file fields.",availableIn:["flowStep:script","content:data-script","content:action"],
examples:['deleteData({type: "Event", id: id}); deleteFile(Pic); navigate("calendar")',"deleteFile(photos.map((p) => p.u\
rl))"]},{name:"hardDelete",async:!0,signature:"hardDelete({type: string, id: string | string[]}): {deleted: {type, id}[]\
, notFound: string[], blobsDeleted: string[], blobsSkippedShared: string[]}",description:"PERMANENTLY removes records \u2014 \
irreversible, unlike `deleteData`'s restorable soft delete. Runs on the server: removes every stored copy (a record and \
its soft-delete tombstone alike), cascades through declared parent relations across ALL stored records (not just those l\
oaded in $data, so the child type needs no data source), and deletes this org's own uploaded files that no surviving rec\
ord, realtime record or config still references (a file shared with something that survives is kept and reported in `blo\
bsSkippedShared`). Only an org admin, or the user who created every named record, may call it; cascaded children go with\
 their parent whoever made them. Refuses realtime-rail types, and throws for an embedded type (nothing on the server to \
delete \u2014 use `deleteData`). Unknown ids are reported in `notFound`, not thrown. Prefer `deleteData` unless the records m\
ust really be gone (personal data, a mistaken import).",availableIn:["flowStep:script","content:data-script","content:ac\
tion"],examples:['hardDelete({type: "Post", id: post.id})','r = hardDelete({type: "Game", id: gameIds}); navigate("home"\
)']},{name:"setRealtime",async:!0,signature:"setRealtime(path: string, value: object): {ownerUid: string, ...}",description:"\
Creates or replaces ONE realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), ref\
lecting live to every subscriber of that type. `value` must be an object; it is stamped with your `ownerUid`, and securi\
ty rules let you write only records you own. The record's id IS the final path segment, so any `id` (and `type`) field i\
n `value` is ignored \u2014 spreading a record read from `$data` is safe. It REPLACES the whole record: a field you leave out\
 is deleted, so to change some fields of an existing record use `updateRealtime` instead. Use it to create fixed-id reco\
rds (a game room keyed by its code, a player keyed by identity); it stamps the `createdAt` that cleanup timers key on.",
availableIn:["flowStep:script","content:data-script","content:action"],examples:['setRealtime("Game/" + roomCode, {phase\
: "lobby", hostId: whoAmI})','setRealtime("Player/" + whoAmI, {name, gameId: roomCode})']},{name:"updateRealtime",async:!0,
signature:"updateRealtime(path: string, patch: object): {ownerUid: string, ...patch}",description:"MERGES `patch` into O\
NE realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to every\
 subscriber of that type. Fields `patch` doesn't mention are KEPT \u2014 the safe way to change some fields of an existing re\
cord (a game's `phase`, a player's score) without re-listing the rest. Shallow: each top-level key replaces that field w\
hole (a nested object is not merged into), and a `null` value deletes the field. Keys may not contain `/`, and `patch` m\
ust have at least one field; `id`/`type` are ignored. Security rules let you update only records you own. Create the rec\
ord with `setRealtime` first: a merge onto a missing path does create it, but without the `createdAt` stamp cleanup time\
rs key on. Returns the patch as written (with your `ownerUid`), not the whole merged record.",availableIn:["flowStep:scr\
ipt","content:data-script","content:action"],examples:['updateRealtime("Game/" + roomCode, {phase: "playing", round: 1})',
'updateRealtime("Player/" + whoAmI, {score: me.score + 1})']},{name:"pushRealtime",async:!0,signature:"pushRealtime(path\
: string, value: object): {id: string, ownerUid: string, ...}",description:"Appends a NEW realtime record under the coll\
ection `path` (shaped `{Type}`) with a server-generated id, reflecting live to every subscriber of that type. `value` mu\
st be an object; it is stamped with your `ownerUid`. Returns the record with its new `id` \u2014 use it to link related recor\
ds. Use for append-only collections (chat messages, submissions) where you don't choose the id.",availableIn:["flowStep:\
script","content:data-script","content:action"],examples:['msg = pushRealtime("ChatMessage", {text: comment, gameId: roo\
mCode})','entry = pushRealtime("Drawing", {url: image.url, gameId: roomCode})']},{name:"removeRealtimeOnDisconnect",async:!0,
signature:"removeRealtimeOnDisconnect(path: string): void",description:"Registers a server-side rule that DELETES the re\
altime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root) when this client's connection \
drops \u2014 e.g. the tab closes or the network is lost. Call it right after `setRealtime` creates the record you want auto-c\
leaned (a player keyed by identity), so a player who leaves vanishes from the live roster instead of stranding it. You m\
ay only auto-remove records you own. The deletion is queued by the realtime server and fires on disconnect, not immediat\
ely \u2014 it is the wrong tool for removing a record right now.",availableIn:["flowStep:script","content:data-script","\
content:action"],examples:['setRealtime("Player/" + pid, {name, gameId: roomCode}); removeRealtimeOnDisconnect("Player/"\
 + pid)']},{name:"removeRealtime",async:!0,signature:"removeRealtime(path: string): void",description:"Immediately DELET\
ES the realtime record at `path` (shaped `{Type}/{recordId}`, relative to the org's realtime root), reflecting live to e\
very subscriber of that type. Unlike `removeRealtimeOnDisconnect` (which fires only when the connection drops), this rem\
oves the record right now. Security rules let you delete a record you own, or \u2014 for the org's creator \u2014 any realtime rec\
ord in your own org (so an owner can clean up old game rooms). Use for an admin/owner 'delete this room' control.",availableIn:[
"flowStep:script","content:data-script","content:action"],examples:['removeRealtime("Game/" + roomCode)','removeRealtime\
("ChatMessage/" + msgId)']},{name:"advanceFlow",async:!0,signature:"advanceFlow(): void",description:"Advances the enclo\
sing flow to its next step \u2014 and finishes (closes) the flow when called on the last step. Only valid from a Content scri\
pt (a declared action or a legacy `data-script`) rendered INSIDE a flow; it lets you replace the built-in Next/Finish bu\
tton with your own control (pair with the flow's `hideNav`/`hideTopBar` options for a chrome-less, custom-driven flow). \
Advancing into an auto-running step (e.g. a `flowStep:script`) triggers that step, so this is also how a custom 'Submit'\
 button kicks off the flow's final script. Throws if called outside a flow.",availableIn:["content:data-script","content\
:action"],examples:["advanceFlow()"]},{name:"leaveVideoRoom",async:!0,signature:"leaveVideoRoom(): void",description:"Le\
aves the app's active video call, if one is active. A `videoRoom` node's call outlives screen navigation (multiple nodes\
 can share one call across screens), so leaving is never automatic \u2014 call this explicitly wherever a script means for vi\
deo to actually end, e.g. a 'leave game' or 'back to the start' action. Safe to call even when no call is active (no-op,\
 does not throw).",availableIn:["flowStep:script","content:data-script","content:action"],examples:['setAppValue("roomCo\
de", ""); leaveVideoRoom(); navigate("home")']},{name:"endVideoRoom",async:!0,signature:"endVideoRoom(): void",description:"\
End the video call for EVERYONE in the room, not just this device. Only whoever started the room may do this \u2014 the platf\
orm refuses anyone else \u2014 so gate the control on your own host check too. Unlike leaveVideoRoom, this is final: nobody c\
an rejoin the same room afterwards. Use it for a deliberate 'we're done' at the end of a session; use leaveVideoRoom whe\
n one person is stepping out.",availableIn:["flowStep:script","content:data-script","content:action"],examples:['endVide\
oRoom(); navigate("home")']},{name:"spotifyIsConnected",async:!0,signature:"spotifyIsConnected(): boolean",description:'\
True when the person running the script has connected their own Spotify account (at orgiggly.com/connect/spotify). Read-\
only, so it also works in preview. Scripts have no `if`, so store the result and let a formula decide what to show \u2014 e.g\
. a "Connect Spotify" prompt.',availableIn:["flowStep:script","content:data-script","content:action"],examples:['ok = sp\
otifyIsConnected(); setAppValue("spotifyReady", ok)']},{name:"spotifySearchTracks",async:!0,signature:"spotifySearchTrac\
ks(songs: {title: string, artist?: string}[], options?: {limit?: number}): {uri: string, id: string, title: string, arti\
st: string, artists: string[], album: string, albumType: string, year: number | null, artUrl: string | null, durationMs:\
 number, explicit: boolean}[][]",description:"Looks every song up on the viewer's connected Spotify account and returns \
ONE candidate list per song, in the same order \u2014 an empty list when nothing matched (a miss never throws). Batch by desi\
gn: a script has no loops and cannot call an async host inside `map`, so pass the whole list in one call, then pick the \
best candidate per song with ordinary formulas or a `function` node (prefer the matching artist; avoid live, remix, kara\
oke and cover versions). `limit` is candidates per song: default 5, at most 10. Throws \"Connect Spotify first (orgiggly.\
com/connect/spotify)\" when the viewer hasn't connected. Read-only, so it also runs in preview.",availableIn:["flowStep:\
script","content:data-script","content:action"],examples:["results = spotifySearchTracks(songs.map((s) => ({title: s.tit\
le, artist: s.artist})))",'results = spotifySearchTracks([{title: "Mr. Brightside", artist: "The Killers"}], {limit: 3})\
; setAppValue("firstUri", results[0][0].uri)']},{name:"spotifyListPlaylists",async:!0,signature:"spotifyListPlaylists():\
 {id: string, name: string, trackCount: number, imageUrl: string | null}[]",description:"The viewer's Spotify playlists \
that a quiz can be built from: the ones they own or collaborate on (Spotify won't let an app read the tracks of any othe\
r playlist, followed ones included). Feed it to a `selectInput`'s `pickerValues` (ids are strings) and pass the chosen i\
d to `spotifyPlaylistTracks`. Throws \"Connect Spotify first (orgiggly.com/connect/spotify)\" when the viewer hasn't conne\
cted, and \"Reconnect Spotify to use your playlists\" when they connected before playlists were supported. Read-only, so i\
t also runs in preview.",availableIn:["flowStep:script","content:data-script","content:action"],examples:["spotifyListPl\
aylists()",'lists = spotifyListPlaylists(); setAppValue("playlistCount", length(lists))']},{name:"spotifyPlaylistTracks",
async:!0,signature:"spotifyPlaylistTracks(playlistId: string): {uri: string, id: string, title: string, artist: string, \
artists: string[], album: string, albumType: string, year: number | null, artUrl: string | null, durationMs: number, exp\
licit: boolean}[]",description:"The tracks of one of the viewer's playlists, in playlist order and in the same shape as \
a `spotifySearchTracks` candidate (podcast episodes and local files are left out; up to 500 tracks). `playlistId` is an \
id from `spotifyListPlaylists`, a `spotify:playlist:\u2026` URI or an open.spotify.com link. Shuffle with `shuffle(tracks, no\
w())` to pick at random. Throws the same Connect / Reconnect errors as `spotifyListPlaylists`, and a clear error for a p\
laylist the viewer neither owns nor collaborates on. Read-only, so it also runs in preview.",availableIn:["flowStep:scri\
pt","content:data-script","content:action"],examples:["tracks = spotifyPlaylistTracks(playlistId); picks = shuffle(track\
s, now()).slice(0, 10)"]},{name:"speak",async:!0,signature:"speak(text: string, lang?: string, rate?: number): void",description:'\
Speaks `text` aloud via the device\'s speech synthesis (the same Web Speech path as the legacy `data-speak` attribute, pl\
us error handling). `lang` accepts a BCP-47 code ("fr-FR") or a common English language name ("French"); `rate` is playb\
ack speed 0.1\u201310. Toggle-aware: calling it with the SAME text while it is still speaking stops playback instead.',availableIn:[
"content:action"],examples:['speak($params.text, "fr-FR")',"speak(story.Original, story.Language, 0.9)"]},{name:"stopSpe\
ech",async:!0,signature:"stopSpeech(): void",description:'Stops any in-progress speech synthesis immediately (the legacy\
 `data-speak-action="stop"` behaviour). Safe to call when nothing is speaking \u2014 no-op, does not throw.',availableIn:[
"content:action"],examples:["stopSpeech()"]},{name:"copyText",async:!0,signature:"copyText(text: string): void",description:"\
Copies `text` to the device's clipboard and shows a brief \"Copied\" note. Content actions only, because a browser lets a \
page write the clipboard only in response to a tap or click. Throws (so the action's error snackbar reports it) where th\
e clipboard isn't available, e.g. a page not served over HTTPS.",availableIn:["content:action"],examples:["copyText(rost\
erText)","copyText($params.link)"]},{name:"signIn",async:!0,signature:"signIn(): void",description:'Opens sign-in for a \
signed-out visitor, exactly as the header\'s Sign in does: Google sign-in, or the sign-in page when the app offers name +\
 PIN login. Use it for a "Sign in to \u2026" link beside something only signed-in people can do, and hide that link once `$au\
thKind` is a real account. Does nothing when the visitor is already signed in or in a design preview. Content actions on\
ly, because the Google sign-in window opens only in response to a tap.',availableIn:["content:action"],examples:["signIn\
()"]},{name:"enablePush",async:!0,signature:'enablePush(): "subscribed" | "denied" | "unavailable" | "ios-not-installed"\
 | "preview"',description:"Asks for notification permission (only if it hasn't been asked) and registers this device for\
 the org's pushes \u2014 the header bell's subscribe, as a button the org can place where it matters (\u{1F514} Remind me). The devi\
ce is registered against the visitor's auth uid, which is what a transition rule's `notifyTo` names. Content actions onl\
y, because the permission prompt needs a tap. Returns what happened, so store it and word the button from it: `subscribe\
d`; `denied` (blocked \u2014 they must re-enable it in browser or phone settings); `unavailable` (this browser has no web pus\
h); `ios-not-installed` (iPhone/iPad in a browser tab \u2014 web push works only once the site is added to the home screen); \
`preview` (a design preview, nothing registered).",availableIn:["content:action"],examples:['r = enablePush(); setAppVal\
ue("pushState", r)']},{name:"setValue",async:!0,signature:"setValue(value: any): void",description:"Writes the content n\
ode's OWN value \u2014 the node whose action is running \u2014 so formulas elsewhere can read it back via the node's name (the leg\
acy `setValue=` attribute's behaviour). Use it for local UI state a content node carries itself (selected tab, filter to\
ggle); for app-level state use `setAppValue` instead.",availableIn:["content:action"],examples:["setValue($params.id)",'\
setValue("")']},{name:"setValues",async:!0,signature:"setValues(values: {[fieldNameOrPointerKey: string]: any}): void",description:"\
Writes SEVERAL fields at once as ONE atomic state update (#407). A plain key is a node name resolved from this content n\
ode's scope outward \u2014 exactly the names a formula here could read. A key containing `[` or `.` is a pointer key read fro\
m the app root, as `setAppValue` takes it \u2014 so one call can fill cells of a repeating section (`'rows[2].qty'`); write i\
t in the short form the app uses (`rows[2].qty`, not `sheet.rows[2].qty`), and writing past the last row extends the sec\
tion. Every value is evaluated against the same state snapshot before any write lands, so `setValues({a: b, b: a})` is a\
 genuine swap with no half-applied render in between; `undefined` clears a field. A key that resolves to nothing throws \
(nothing is written). Use it for any control that must move two or more fields together \u2014 swap, reset-to-defaults, apply\
-a-preset, fill a row; for one field use `setValue` (own value) or `setAppValue` (app variable).",availableIn:["content:\
action"],examples:["setValues({myLanguage: otherLanguage, otherLanguage: myLanguage})",'setValues({minPrice: 0, maxPrice\
: 1000, sortBy: "newest"})',"setValues({'rows[0].qty': 1, 'rows[1].qty': 2})"]},{name:"submit",async:!0,signature:"submi\
t(): {id: string, ...}",description:"Publishes the content node's enclosing submit context object (the legacy `@submit` \
href behaviour): resolves the surrounding form-like object, publishes it as a record, then writes the server-stamped `id\
`/`createdAt`/`createdBy` back into the source fields and shows a success snackbar. Returns the published record. Throws\
 when there is no submit context or the publish fails \u2014 so a failing `submit()` aborts the action's `navigate` step.",
availableIn:["content:action"],examples:["submit()"],status:"legacy",use:"a declared action or a flow `script` step that\
 calls `publishData({type, data: {...}})` with the inputs named explicitly"}],VM=Hs.filter(e=>e.async).map(e=>e.name),H4=Hs.
filter(e=>!e.async).map(e=>e.name),YM=e=>gT.some(t=>t===e),zM=e=>YM(e)?Hs.filter(t=>t.availableIn.includes(e)).map(t=>t.
name):[],KM=Object.fromEntries(Hs.map(e=>[e.name,async()=>{throw new Error(`${e.name} isn't available in a test pack: st\
ub it in hosts.asyncHosts`)}])),GM=e=>{if(!M(e))return e;let t=e.left;return{left:"failingExpression"in t?{message:t.message,
expression:CA(t.failingExpression)}:{message:t.message,expression:t.source}}},JM=e=>{if(!("$now"in e))return e;let{$now:t,
...r}=e;if("now"in r&&r.now!==t)throw new Error(`orgPack: context sets both $now (${String(t)}) and now (${String(r.now)}\
) \u2014 pass one.`);return{...r,now:t}},ZM=(e,t={})=>{var r,n,a,i;let o=FM(gM(e));if(M(o))throw new Error(`org config f\
ailed to decode: ${String(o.left)}`);let s=o.right.appConfig,l=new Set(["storage","realtime","callable"].flatMap(S=>y$(s,
S).map(_=>_.typeName))),c=[...new Set(((r=t.records)!=null?r:[]).map(S=>S.type).filter(S=>!l.has(S)))];if(c.length)throw new Error(
`orgPack: record type(s) ${c.join(", ")} are not declared as a datasource by any node in this config \u2014 the live app woul\
d never load them. Declare a data node (e.g. a subsection with data: {dataType, source: "storage"}) or remove the fixtur\
e records.`);let u=((n=t.records)!=null?n:[]).filter(S=>S.isDeleted!==!0),d={objects:[...o.right.objectInstances,...u]},
f=JM(t.plugins?{...wM(o.right.plugins),...t.context}:(a=t.context)!=null?a:{}),h=HP(s,f,d);WP(h,(i=t.init)!=null?i:{});let y=()=>h.
getState(),b=[],T=S=>{let _=Ha(y(),S);return _e(_)&&_.right===!0},k=S=>{let _=H(y(),S);for(;_;){if(T(_.key))return!1;_=Kr(
y(),_.key)}return!0};return{...h,evalAt:(S,_="")=>Ge(Ar(y(),S.startsWith("@")?S:`@${S}`,_)),value:S=>Ge(sr(y(),S)),lengthOf:S=>Ge(
Fa(y(),S)),setValue:(S,_)=>{h.api.updateValue(S,_)},clearValue:S=>{h.api.clearSubtree(S)},setCursor:(S,_)=>{h.api.setCursor(
S,_)},isVisible:k,visibleChildren:S=>k(S)?ji(y(),S).map(_=>_.key):[],runningSlot:S=>{let _=ns(y(),"",S);if(_===void 0)throw new Error(
`runningSlot: no node named "${S}" in this org`);return vP(y(),_)},showsAnswerProgress:S=>{let _=ns(y(),"",S);if(_===void 0)
throw new Error(`showsAnswerProgress: no node named "${S}"`);return TP(y(),_)},childKeys:S=>kt(y(),S).map(_=>_.key),renderHtml:S=>{
let _=H(y(),S).node.htmlTemplate;if(typeof _!="string")throw new Error(`no htmlTemplate at pointer "${S}"`);let I=Fp(_);
if(!I.startsWith("@"))return I;let N=Ge(Ar(y(),I,S));if(N!==void 0&&typeof N!="string")throw new Error(`htmlTemplate at \
"${S}" evaluated to a non-string (${JSON.stringify(N)}); the renderer rejects it. Wrap a html\`\u2026\` result in a template: @\
\`\${html\`\u2026\`}\``);return String(N)},widgetCommands:b,nodeAt:S=>H(y(),S).node,runScriptAt:(S,_,I,N)=>{let W=I??H(y(),
S).node.script;if(typeof W!="string"||W.length===0)throw new Error(`no script found at pointer "${S}"`);let V=async(...G)=>{
(G.length===1&&Array.isArray(G[0])?G[0]:G).map(Se=>{let ze=ns(y(),S,String(Se));if(ze===void 0)throw new Error(`clearVal\
ues: no node named "${String(Se)}" is in scope here`);return ze}).forEach(Se=>h.api.clearSubtree(Se))},Q=async(G,ue,Fe)=>{
let Se=ns(y(),S,String(G));if(Se===void 0)throw new Error(`sendToWidget: no node named "${String(G)}" is in scope here`);
if(!H(y(),Se).node.pluginName)throw new Error(`sendToWidget: "${String(G)}" is not a widget node`);b.push({widget:String(
G),key:Se,command:String(ue),...Fe===void 0?{}:{args:Fe}})},F=async G=>{h.api.updateValue(H(y(),S).key,G)},ye=async G=>{
h.api.bulkAction(dR(y(),S,G))};return rI(y(),S,W,{..._,asyncHosts:{...KM,clearValues:V,sendToWidget:Q,setValue:F,setValues:ye,
..._.asyncHosts}},N).then(GM)}}},XM=["id",...oT],fv=e=>Object.fromEntries(Object.entries(e).filter(([t])=>!XM.includes(t))),
hv=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),QM=(e=[])=>{let t=new Map(e.map(({id:o,type:s,...l})=>[`${s}/${o}`,
l])),r=[],n=(o,s)=>{let l=String(s);if(typeof s!="string"||l.split("/").some(c=>c.length===0))throw new Error(`${o}: pat\
h "${l}" has an empty segment`);return l};return{writes:r,record:o=>t.get(o),asyncHosts:{setRealtime:async(o,s)=>{if(n("\
setRealtime",o),!hv(s))throw new Error("setRealtime: `value` must be an object");let l=fv(s);return r.push({kind:"set",path:String(
o),value:l}),t.set(String(o),l),l},updateRealtime:async(o,s)=>{var l;if(n("updateRealtime",o),!hv(s))throw new Error("up\
dateRealtime: `patch` must be an object");let c=Object.keys(s);if(c.length===0)throw new Error("updateRealtime: `patch` \
must have at least one field");if(c.some(f=>f.includes("/")))throw new Error("updateRealtime: patch top-level fields onl\
y");let u=fv(s);r.push({kind:"update",path:String(o),value:u});let d={...(l=t.get(String(o)))!=null?l:{}};return Object.
entries(u).forEach(([f,h])=>{h===null?delete d[f]:d[f]=h}),t.set(String(o),d),u}}}};var eD=(e,t,r)=>{if(t.size===0)return`No ${r}s declared. Add a declaration to satisfy the reference.`;let n=[...t].map(o=>({
p:o,d:uw(e,o)})).sort((o,s)=>o.d-s.d),a=n[0];if(a&&a.d<=3)return`Closest ${r}: \`${a.p}\`. Either rename the reference or\
 add \`${e}\` to the org config.`;let i=n.slice(0,5).map(o=>o.p).join(", ");return`Available ${r}s: ${i}. Either rename \
the reference or add \`${e}\`.`};var tD=["objectType","objectInstance","field","plugin","record","user"],W4=new Set([...uA,...dA,...Object.keys(Dp),...tD,
...Object.keys(Kv)]);var rD=e=>e.includes(lA)||e.includes("$")||e.includes("@")||e.includes("{"),nD=e=>{var t;let n=(e.startsWith("/")?e.slice(
1):e).split(".");return((t=n[n.length-1])!=null?t:"").replace(/\[\d+\]$/g,"")};var ia=e=>typeof e=="object"&&e!==null&&typeof e.type=="string",yT=new Set(["navigate","replaceScreen","pushCursor","set\
Cursor"]),aD=new Set(["replaceScreen","setCursor"]);var Cf=e=>Array.isArray(e.arguments)?e.arguments:[],iD=e=>{if(!ia(e))return;let t=e.value;if(typeof t=="string")return t;
if(typeof t=="object"&&t!==null){let r=t.cooked;if(typeof r=="string")return r}},Nf=e=>{if(ia(e)){if(e.type==="Literal"&&
typeof e.value=="string")return e.value;if(e.type==="TemplateLiteral"&&Array.isArray(e.expressions)&&e.expressions.length===
0&&Array.isArray(e.quasis))return iD(e.quasis[0])}},oD=e=>(t,r)=>{var n;let a=[],[i,o]=Cf(t);if(i===void 0)return a.push(
{path:r.path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;ia(o)&&o.type==="Literal"&&a.push({path:r.
path,kind:"host-arg-type",message:`\`${e}\`'s second argument must be an object of nav args, not a literal.`,fixHint:`e.\
g. \`${e}('detail', {id: $params.id})\`.`,severity:"error"});let s=Nf(i);if(s!==void 0&&s.length===0)return a.push({path:r.
path,kind:"host-arg-missing",message:`\`${e}()\` needs a target \u2014 the screen (or named node) to move to.`,fixHint:`\
Write \`${e}('screenName')\`; a Back button is \`back()\`.`,severity:"error"}),a;if(s===void 0||r.navTargets===void 0||rD(
s))return a;let l=nD(s);return l.length===0?a:r.navTargets.has(l)?(aD.has(e)&&((n=r.flowBearing)==null?void 0:n.has(l))===
!0&&a.push({path:r.path,kind:"action-replace-into-flow",message:`\`${e}("${s}")\` replaces into a screen that contains a \
flow \u2014 replace skips the flow-state reset, so re-entering shows the previous run's completed step instead of a fresh flo\
w.`,fixHint:`Use \`navigate("${s}")\` (push resets flow state under the target and gives Back a nav-stack entry).`,severity:"\
warning"}),a):(a.push({path:r.path,kind:"missing-screen",message:`\`${e}("${s}")\` does not match any named node in appCo\
nfig \u2014 the call will fail at runtime.`,fixHint:eD(l,r.navTargets,"navigation target"),severity:"error"}),a)},sD=(e,t)=>Cf(
e).length===0?[]:[{path:t.path,kind:"host-arg-type",message:"`back()` takes no arguments \u2014 it always goes back one nav-s\
tack entry.",fixHint:"Use `back()`; to go to a specific screen use `navigate('screen')`.",severity:"warning"}],Zd=(e,t)=>{
if(!ia(e)||e.type!=="ObjectExpression")return;let r=Array.isArray(e.properties)?e.properties:[];for(let n of r){if(!ia(n)||
n.type!=="Property"||n.computed===!0)continue;let a=n.key;if((ia(a)?a.type==="Identifier"&&typeof a.name=="string"?a.name:
Nf(a):void 0)===t)return n.value}},lD=e=>ia(e)?e.type==="ObjectExpression"?[e]:e.type==="ArrayExpression"&&Array.isArray(
e.elements)?e.elements.filter(t=>ia(t)&&t.type==="ObjectExpression"):[]:[],mv=(e,t)=>(r,n)=>{var a;let i=n.objectTypeFieldTypes,
[o]=Cf(r),s=Nf(Zd(o,"type"));if(i===void 0||s===void 0)return[];let l=i.get(s);if(l===void 0)return[];let c=(a=[...l].find(
([,u])=>u.kind==="builtin"&&u.name==="parentRef"))==null?void 0:a[0];return c===void 0?[]:lD(Zd(o,t)).filter(u=>Zd(u,"_p\
arent")!==void 0).map(()=>({path:n.path,kind:"tree-mixed-parent-spellings",message:`${e} writes \`_parent\` on a \`${s}\`\
, but \`${s}\` declares the \`parentRef\` field \`${c}\`, so the tree reads only \`${c}\` and ignores \`_parent\`.`,fixHint:`\
Write the parent's id to \`${c}\` instead (\`${c}: <parent id>\`), or remove the \`parentRef\` field from \`${s}\` to use\
 the implicit \`_parent\` link everywhere.`,severity:"error"}))},q4=new Map([...[...yT].map(e=>[e,oD(e)]),["back",sD],["\
publishData",mv("publishData","data")],["updateData",mv("updateData","patch")]]),V4=new RegExp(`\\b(?:${[...yT].join("|")}\
)\\(`);var cD=vT.keyof({Person:null});var uD=P.intersection([P.type({name:P.string}),P.partial({type:P.string})]),bT=P.intersection([P.type({name:P.string,fields:P.array(
uD)}),P.partial({description:P.string,wellKnown:cD})]),dD=P.keyof({appFeature:null,none:null}),pD=P.keyof({host:null,global:null,
user:null,group:null}),fD=P.partial({types:P.array(bT),scope:pD,nav:dD,plugins:P.array(P.string)}),hD=P.intersection([P.type(
{screen:P.string,title:P.string}),P.partial({pic:P.string})]),mD=P.intersection([P.type({name:P.string,shape:P.union([P.string,
P.record(P.string,P.string)])}),P.partial({description:P.string})]),gD=P.intersection([P.type({types:P.array(P.string),screens:P.array(
P.string)}),P.partial({functions:P.array(P.string),plugins:P.array(P.string),nav:P.array(hD),notifications:P.array(P.string),
slots:P.array(mD)})]),yD=P.partial({entities:P.array(P.string),seedSlots:P.array(P.string),labels:P.array(P.string)});var vD=P.intersection([P.type({name:P.string,hostType:bT,slot:P.string,fn:P.string}),P.partial({description:P.string})]),
bD=P.intersection([P.type({id:P.string,version:P.number,description:P.string,requires:fD,provides:gD}),P.partial({params:yD,
seams:P.array(vD)})]),wD=P.partial({nav:P.array(P.unknown),navFolder:P.string,notifications:P.array(P.unknown)}),TD=P.partial(
{appConfig:P.array(P.unknown),objectTypes:P.array(P.unknown),objectInstances:P.array(P.unknown),plugins:P.array(P.unknown),
shell:wD}),Y4=P.type({manifest:bD,body:TD});var z4=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,
310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,
1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,
773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,
3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,
1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var K4=[...KA];var kD={if:{min:3,max:3},and:{min:0,max:null},or:{min:0,max:null},length:{min:1,max:1},sum:{min:1,max:1},avg:{min:1,max:1},
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
min:2,max:2},findIndex:{min:2,max:2},count:{min:1,max:2},groupBy:{min:2,max:2},sumBy:{min:2,max:2}};var G4=new Set(Hs.map(e=>e.name));var J4=new Map(gT.map(e=>[e,new Set(zM(e))])),Z4=new Set(VM);var X4=new Map(Object.entries(kD));var SD=[{attribute:"data-action",label:"Declared action",html:'<button data-action="openTab" data-param-id="${id}">Open<\
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
er before navigating. **Forms only** \u2014 a flow reads `data-args`/`$args`, never `param`",status:"legacy"}],Q4=SD.map(
e=>e.attribute).filter((e,t,r)=>r.indexOf(e)===t),Hc=[{id:"rel",tokens:["rel="],attributes:["rel"],fixHint:'Declare an a\
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
ED=Object.fromEntries(Hc.map(e=>[e.id,e]));var e3=Hc.flatMap(e=>[...e.tokens]),t3=Hc.filter(e=>e.prompt!==void 0).sort((e,t)=>e.prompt.order-t.prompt.order).map(e=>e.
prompt.line);var r3=ED.rel,n3=Hc.filter(e=>e.id!=="rel"&&e.attributes.length>0);var xD=["versionId","apiVersion","appConfig","objectTypes","objectInstances","plugins","users"],_D=["orgSummary","minCli\
entVersion"],a3=[...xD,..._D];var i3=new Map(Object.entries(pA));var o3=new Map(Object.entries(fA)),s3=new Map(Object.entries(hA).map(([e,t])=>[e,Object.entries(t)])),gv,l3=Object.entries(
(gv=mA.objectTypeField)!=null?gv:{});var AD=["archiveData","archiveId"],c3=["archiveType",...AD];var u3=pc.Allow.OBJ|pc.Allow.ARR;var d3=[...zv].filter(e=>e!=="variable");var $D="| `customize` | `feature`, `reason` | declares that you are changing an installed feature's own nodes. Without i\
t, the closing gate refuses any change inside a `feature-\u2026` folder |",p3=`

## Installed features

Folders named \`feature-<slug>\` hold installed features: tested functionality this org shares with others. Change a node \
inside one only when the request needs it, and declare the change first:

| op | fields | what it does |
|---|---|---|
${$D}`;var f3=new Set("a an the and or for of to in on with my our your me i we it its this that app apps application something\
 some thing things help keep can like want make build create need would should could be is are was let lets using use si\
mple new tool tools just also all any".split(" ")),RD=e=>e.length>4&&e.endsWith("ies")?`${e.slice(0,-3)}y`:e.length>3&&e.
endsWith("s")&&!e.endsWith("ss")?e.slice(0,-1):e;var OD=[[["chat","tutor","talk","conversation","speak","spoken","voice"],["ai-chat"]],[["ai","generate","generated","gen\
erator","smart"],["ai-query","image-generation"]],[["image","picture","photo","camera","illustrated"],["image-generation",
"ai-query"]],[["game","party","multiplayer","player","live","realtime","round"],["realtime","transitions"]],[["quiz","re\
vise","revision","flashcard","exam","study","learn","lesson"],["flows","tabs"]],[["booking","book","schedule","calendar",
"rota","signup","form","track","tracker","log"],["forms","storage-data"]],[["notify","notification","reminder","alert"],
["push"]],[["video","call","youtube"],["video"]],[["music","song","audio","jingle","playlist","podcast"],["audio"]],[["m\
ap","trip","travel","holiday","itinerary","route"],["maps"]],[["login","member","private","pin"],["org-login","auth-priv\
ate"]],[["team","group","share","shared","friend"],["group-scoped","realtime"]],[["personal","journal","diary"],["user-s\
coped"]]],h3=new Map(OD.flatMap(([e,t])=>e.map(r=>[RD(r),t])));var ID=Je.intersection([Je.type({name:Je.string}),Je.partial({parent:Je.union([Je.string,Je.null])})]),CD=Je.type({orgIds:Je.array(
Je.string)}),m3=Je.partial({folders:Je.record(Je.string,ID),containers:Je.record(Je.string,CD),folderOrder:Je.array(Je.string)});var TT=C.keyof({new:null,claimed:null,"fixed-draft":null,published:null,closed:null});var ND=C.keyof({fixed:null,"wont-fix":null,duplicate:null,"not-a-bug":null,forwarded:null});var PD=C.keyof({problem:null,idea:null}),ge=e=>C.union([e,C.null]),MD=C.intersection([C.type({qualifiedOrgId:C.string}),
C.partial({configSource:ge(C.string),versionId:ge(C.string),previewDraft:ge(C.boolean),variant:ge(C.string)})]),DD=C.intersection(
[C.type({name:C.string,captured:C.boolean}),C.partial({owner:ge(C.string),hostKey:ge(C.string),fullscreen:ge(C.boolean)})]),
jD=C.intersection([C.type({pathname:C.string}),C.partial({search:ge(C.string),pointerKey:ge(C.string),screenLabel:ge(C.string),
widgets:ge(C.array(DD))})]),LD=C.partial({buildCommit:C.string,buildTimestamp:C.string,capabilityVersion:C.number,userAgent:C.string,
platform:C.string,language:C.string,timezone:C.string,viewport:C.type({w:C.number,h:C.number}),dpr:C.number,standalone:C.boolean,
online:C.boolean,touch:C.boolean});var UD=C.keyof({gap:null,friction:null,bug:null,docs:null}),FD=C.intersection([C.type({kind:UD}),C.partial({model:ge(C.string),
ogVersion:ge(C.string),pluginVersion:ge(C.string),app:ge(C.string)})]),BD=C.intersection([C.type({idea:C.string,firstName:C.string}),
C.partial({audience:ge(C.string),tracks:ge(C.string),privacy:ge(C.string),feel:ge(C.string),extra:ge(C.string)})]),HD=C.partial(
{screenshot:C.type({path:C.string,bytes:C.number,w:C.number,h:C.number}),state:C.type({path:C.string,bytes:C.number})}),
kT={statusNote:ge(C.string),branch:ge(C.string),prUrl:ge(C.string),resolution:ge(ND),forwardedTo:ge(C.string),publicTitle:ge(
C.string),publicLine:ge(C.string),creditName:ge(C.string),app:ge(C.string)},g3=C.intersection([C.type({id:C.string,createdAt:C.string,
reporterUid:C.string,description:C.string,target:MD,location:jD,status:TT}),C.partial({reporterUsername:ge(C.string),reporterIsOwner:ge(
C.boolean),emailUpdates:ge(C.boolean),kind:ge(PD),forwardedFrom:ge(C.string),platform:ge(FD),wish:ge(BD),client:ge(LD),attachments:ge(
HD),...kT,statusUpdatedAt:ge(C.string),statusUpdatedBy:ge(C.string)})]),y3=C.intersection([C.type({status:TT,statusUpdatedAt:C.string,
statusUpdatedBy:C.string}),C.partial(kT)]);var WD=[{key:"idea",label:"What's your idea, in a sentence a stranger would understand?",short:"your idea",required:!0},
{key:"audience",label:"Who will use it, and what's the one thing they'll come to do?",short:"who will use it",required:!1},
{key:"tracks",label:"What does it need to keep track of? (members, fixtures, recipes, \u2026)",short:"what it keeps trac\
k of",required:!1},{key:"privacy",label:"Does anything need to be private, or different for each person?",short:"what's \
private",required:!1},{key:"feel",label:"What should it be called, and how should it feel?",short:"its name and feel",required:!1},
{key:"extra",label:"Anything else we should know?",short:"anything else",required:!1}];var v3=WD.map(e=>e.key).filter(e=>e!=="idea");var b3=24*60*60*1e3;var qD=e=>`orgiggly/appFacets/${e}`;var w3=qD("").replace(/\/$/,"");import VD from"node:fs";var YD=e=>{if(e===null||typeof e!="object")return!1;let t=e.appConfig;if(!t||typeof t!="object")return!1;let r=t;return Array.
isArray(r.data)&&Array.isArray(r.lengths)?!1:!!(Array.isArray(r._children)||r.type==="app")},ST=e=>e instanceof Error?e.
message:String(e),Pf=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),zD=e=>Pf(e)&&YD(e),KD=e=>Pf(e)&&Pf(e.appConfig)&&
Array.isArray(e.appConfig.data)&&Array.isArray(e.appConfig.lengths),ET=e=>{let t;try{t=VD.readFileSync(e,"utf8")}catch(n){
return Ce(`cannot read ${e}: ${ST(n)}`)}let r;try{r=JSON.parse(t)}catch(n){return Ce(`${e} is not valid JSON: ${ST(n)}`)}
return zD(r)?R(r):KD(r)?R(tT(r)):Ce(`${e} is not an org config (no appConfig in tree or pointer format)`)};var N3=e=>{let t=typeof e=="string"&&!e.startsWith("file:")?e:GD(e),r=ET(t);if(M(r))throw new Error(r.left);return r.right};export{ZM as createOrgPackApi,QM as createRealtimeStore,N3 as loadOrgTree};
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
