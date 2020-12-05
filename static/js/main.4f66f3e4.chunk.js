(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(9),o=n.n(c),i=n(10),s=n(2),u=n(3),l=n(5),h=n(4),b=n(7),j=n(6),f=(n(16),n(19)),d={name:"",phone:""},m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(j.a)({},n,r))},a.handleSubmit=function(t){t.preventDefault();var e=a.props,n=e.onFindName,r=e.onPhonebook,c=a.state,o=c.name,i=c.phone;return o&&i?null!=n(o)?(alert(o+" is already in contacts."),!1):(r(Object(b.a)({id:Object(f.a)()},a.state)),void a.reset()):(alert("Name or phone filed is empty."),!1)},a.validName=function(t){return a.props.contacts.filter((function(e){return e.name===t}))},a.reset=function(){a.setState(Object(b.a)({},d))},a.state=Object(b.a)({},d),a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(a.jsxs)("form",{className:"phonebook",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"name_1",children:"Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"name",id:"name_1",value:e,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"phone_1",children:"Number"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"tel",name:"phone",id:"phone_1",value:n,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(s.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.contacts,r=t.removeContactId;return Object(a.jsx)("ul",{children:n.filter((function(t){return t.name.toLowerCase().startsWith(e.toLowerCase())})).map((function(t){var e=t.id,n=t.name,c=t.phone;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{children:[" ",n,": ",c," "]}),Object(a.jsx)("button",{onClick:function(){r(e)},children:"Delete"})," "]},e)}))})}}]),n}(r.Component),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleChange=function(t){a.setState({filter:t.target.value}),(0,a.props.onFilter)(t.target.value)},a.handleSubmit=function(t){t.preventDefault()},a.state={filter:a.props.filter},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"filter_1",children:"Find contacts by name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"filter",id:"filter_1",value:t,onChange:this.handleChange})]})}}]),n}(r.Component);p.defaultProps={filter:""};var v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).updatePhonebook=function(t){a.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[t])}}))},a.findName=function(t){return a.state.contacts.find((function(e){return e.name===t}))},a.updateFilter=function(t){a.setState({filter:t})},a.removeContactId=function(t){a.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},a.state={contacts:[],filter:""},a}return Object(u.a)(n,[{key:"render",value:function(){console.log(this.state);var t=this.state,e=(t.name,t.contacts),n=t.filter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(m,{onFindName:this.findName,onPhonebook:this.updatePhonebook}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(p,{filter:n,onFilter:this.updateFilter}),Object(a.jsx)(O,{contacts:e,filter:n,removeContactId:this.removeContactId})]})}}]),n}(r.Component);o.a.render(Object(a.jsx)(v,{}),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4f66f3e4.chunk.js.map