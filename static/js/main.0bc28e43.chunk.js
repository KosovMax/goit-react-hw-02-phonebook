(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(9),o=n.n(c),s=n(6),i=n(2),u=n(3),l=n(7),b=n(5),h=n(4),j=(n(15),n(18)),m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(s.a)({},n,r))},a.handleSubmit=function(t){t.preventDefault();var e=a.props.changePhonebook,n=a.state,r=n.name,c=n.contacts,o=n.number;if(null!=a.findIsName(r))return alert(r+" is already in contacts."),!1;c.push({id:Object(j.a)(),name:r,number:o}),e({name:r,number:o,contacts:c}),a.clearAllInputs()},a.clearAllInputs=function(){a.setState({name:""}),a.setState({number:""})},a.findIsName=function(t){return a.state.contacts.find((function(e){return e.name===t}))},a.state={contacts:a.props.contacts,name:a.props.name,number:a.props.number},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:"phonebook",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"name_1",children:"Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"name",id:"name_1",value:e,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"number_1",children:"Number"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",name:"number",id:"number_1",value:n,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component);m.defaultProps={contacts:[],name:"",number:""};var f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).deleteContact=function(t){var e=a.props,n=e.contacts,r=e.changeContacts,c=n.map((function(t){return t.id})).indexOf(t);-1!=c&&n.splice(c,1),r(n)},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.contacts,r=e.filter;return Object(a.jsx)("ul",{children:n.filter((function(t){return t.name.toLowerCase().startsWith(r.toLowerCase())})).map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{children:[" ",e.name,": ",e.number," "]}),Object(a.jsx)("button",{onClick:function(){t.deleteContact(e.id)},children:"Delete"})," "]},e.id)}))})}}]),n}(r.Component),d=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleChange=function(t){console.log("filter",t.target.value),a.setState({filter:t.target.value}),(0,a.props.changeFilter)(t.target.value)},a.handleSubmit=function(t){t.preventDefault()},a.state={filter:a.props.filter},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"filter_1",children:"Find contacts by name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"filter",id:"filter_1",value:t,onChange:this.handleChange})]})}}]),n}(r.Component);d.defaultProps={filter:""};var p=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).updatePhonebook=function(t){var e=Object(l.a)(a);Object.keys(t).forEach((function(n){var a=t[n];e.setState(Object(s.a)({},n,a))}))},a.updateFilter=function(t){a.setState({filter:t})},a.updateContacts=function(t){a.setState({contacts:t})},a.state={contacts:[],name:"",number:"",filter:""},a}return Object(u.a)(n,[{key:"render",value:function(){console.log(this.state);var t=this.state,e=t.name,n=t.contacts,r=t.filter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(m,{name:e,contacts:n,changePhonebook:this.updatePhonebook}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(d,{filter:r,changeFilter:this.updateFilter}),Object(a.jsx)(f,{filter:r,contacts:n,changeContacts:this.updateContacts})]})}}]),n}(r.Component);o.a.render(Object(a.jsx)(p,{}),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0bc28e43.chunk.js.map