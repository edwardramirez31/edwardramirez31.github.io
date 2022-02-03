(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{148:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(14),c=a.n(r),s=a(29),u=a(315),o=a(70),i=a(303),d=a(316),l=(a(148),a(26)),p=a(317),b=a(305),j=a(306),f=a(132),x=a(85),k=a(17),O=a(69),h=Object(O.b)({name:"task",initialState:{tasks:[],loading:!1,error:null},reducers:{addTask:function(e,t){e.loading=!0},addTaskSuccess:function(e,t){e.tasks=[].concat(Object(k.a)(e.tasks),[t.payload]),e.loading=!1},addTaskError:function(e,t){e.error=t.payload,e.loading=!1},getTask:function(e,t){e.loading=!0},getTaskSuccess:function(e,t){e.tasks=[].concat(Object(k.a)(e.tasks),Object(k.a)(t.payload)),e.loading=!1},getTaskError:function(e,t){e.error=t.payload,e.loading=!1},removeTask:function(e,t){e.tasks=e.tasks.filter((function(e){return e.id!==t.payload}))},setIsUpdating:function(e,t){var a=e.tasks.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{isUpdating:!0}):e}));e.tasks=a},updateTask:function(e,t){e.loading=!1},updateTaskSuccess:function(e,t){var a=t.payload,n=e.tasks.map((function(e){return e.id===a.id?Object(l.a)(Object(l.a)({},a),{},{task:a.text,isUpdating:!1}):e}));e.tasks=n,e.loading=!1}}}),v=h.actions,m=v.addTask,g=v.addTaskSuccess,y=v.addTaskError,w=v.getTask,T=v.getTaskSuccess,S=v.getTaskError,C=v.removeTask,E=v.setIsUpdating,I=v.updateTask,U=v.updateTaskSuccess,B=h.reducer,A=a(9);var R=function(){var e=Object(s.b)(),t=x.a().shape({text:x.b().required()});return Object(A.jsx)(f.a,{initialValues:{text:""},validationSchema:t,onSubmit:function(t,a){e(m(Object(l.a)(Object(l.a)({},t),{},{completed:!1}))),a.resetForm()},children:function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange,c=e.handleSubmit,s=e.handleBlur;return Object(A.jsxs)("form",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-around"},onSubmit:c,children:[Object(A.jsx)(p.a,{label:"Add a text",style:{width:"85%"},name:"text",value:t.text,onChange:r,error:Boolean(n.text&&a.text),helperText:n.text&&a.text,onBlur:s}),Object(A.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",endIcon:Object(A.jsx)(j.a,{children:"send"}),style:{width:"10%"},children:"Add"})]})}})},F=a(304),J=a(23),W=a(307),q=a(308),z=a(318),D=a(310),H=a(311),L=a(309),N=a(312),V=a(313),G=a(314);var K=function(e){var t=e.id,a=e.text,r=e.completed,c=e.isUpdating,u=Object(n.useState)(a),i=Object(J.a)(u,2),d=i[0],l=i[1],b=Object(s.b)();return Object(A.jsxs)(W.a,{button:!0,children:[Object(A.jsx)(q.a,{children:Object(A.jsx)(z.a,{edge:"start",checked:r,tabIndex:-1,disableRipple:!0,onClick:function(){return b(I({id:t,text:d,completed:!r}))}})}),Object(A.jsx)(D.a,{children:c?Object(A.jsx)(p.a,{value:d,onChange:function(e){l(e.target.value)},fullWidth:!0}):Object(A.jsx)(o.a,{children:d})}),Object(A.jsx)(H.a,{children:c?Object(A.jsx)(L.a,{edge:"end","aria-label":"comments",onClick:function(){return b(I({text:d,id:t,completed:r}))},children:Object(A.jsx)(G.a,{color:"primary"})}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(L.a,{edge:"end",onClick:function(){return b(E(t))},children:Object(A.jsx)(N.a,{color:"primary"})}),Object(A.jsx)(L.a,{edge:"end",onClick:function(){return b(C(t))},children:Object(A.jsx)(V.a,{color:"secondary"})})]})})]})};var M=function(){var e=Object(s.c)((function(e){return e.task.tasks})),t=Object(s.b)();return Object(n.useEffect)((function(){e.length||t(w())})),Object(A.jsx)(F.a,{children:e.map((function(e){return Object(A.jsx)(K,Object(l.a)({},e),e.id)}))})};var P=function(){var e=Object(s.c)((function(e){return e.task.loading}));return Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)(u.a,{maxWidth:"md",children:[Object(A.jsx)(o.a,{variant:"h3",children:"To-Do App"}),Object(A.jsx)(i.a,{style:{padding:20},children:Object(A.jsx)(R,{})}),e?Object(A.jsx)(d.a,{}):Object(A.jsx)(M,{})]})})},Q=a(133),X=a(16),Y=a.n(X),Z=a(20),$=a(50),_=a(13),ee=a(12),te=a(131),ae=a.n(te).a.create({baseURL:"https://edwardramirez.pythonanywhere.com"}),ne=function(){function e(){Object(_.a)(this,e)}return Object(ee.a)(e,null,[{key:"getTasks",value:function(){var e=Object($.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getTaskById",value:function(){var e=Object($.a)(Y.a.mark((function e(t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("/task/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTask",value:function(){var e=Object($.a)(Y.a.mark((function e(t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.delete("/task/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTask",value:function(){var e=Object($.a)(Y.a.mark((function e(t,a){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.put("/task/".concat(t,"/"),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createTask",value:function(){var e=Object($.a)(Y.a.mark((function e(t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,ae.post("/",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),re=ne,ce=Y.a.mark(de),se=Y.a.mark(le),ue=Y.a.mark(pe),oe=Y.a.mark(be),ie=Y.a.mark(je);function de(e){var t,a;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,console.log("HERE"),n.next=5,Object(Z.b)([re,"createTask"],t);case 5:return a=n.sent,n.next=8,Object(Z.d)(g(a));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(1),n.next=14,Object(Z.d)(y(n.t0.message));case 14:case"end":return n.stop()}}),ce,null,[[1,10]])}function le(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Z.b)([re,"getTasks"]);case 3:return e=t.sent,t.next=6,Object(Z.d)(T(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Z.d)(S(t.t0.message));case 12:case"end":return t.stop()}}),se,null,[[0,8]])}function pe(e){var t,a;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(Z.b)([re,"deleteTask"],t);case 4:a=n.sent,console.log(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:case"end":return n.stop()}}),ue,null,[[1,8]])}function be(e){var t,a,n,r,c;return Y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,a=t.id,n=t.text,r=t.completed,s.prev=1,s.next=4,Object(Z.b)([re,"updateTask"],a,{text:n,completed:r});case 4:return c=s.sent,s.next=7,Object(Z.d)(U(c));case 7:s.next=13;break;case 9:return s.prev=9,s.t0=s.catch(1),s.next=13,Object(Z.d)(S(s.t0.message));case 13:case"end":return s.stop()}}),oe,null,[[1,9]])}function je(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)([Object(Z.e)(m,de),Object(Z.e)(w,le),Object(Z.e)(C,pe),Object(Z.e)(I,be)]);case 2:case"end":return e.stop()}}),ie)}var fe=Y.a.mark(xe);function xe(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)([Object(Z.c)(je)]);case 2:case"end":return e.stop()}}),fe)}var ke=Object(Q.a)(),Oe=Object(O.a)({reducer:{task:B},middleware:function(e){return e({thunk:!1}).concat(ke)}});ke.run(xe);var he=Oe;c.a.render(Object(A.jsx)(s.a,{store:he,children:Object(A.jsx)(P,{})}),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.2b2cc705.chunk.js.map