import React from 'react';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

const App = () => {
  const users=[
    {
      img:'https://media.istockphoto.com/id/1308635869/photo/young-business-woman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=9oi_QyMbFY1GOazqcdEdjCrqfbIIZTg-h4jiHDSksrU=',
      tag:'satisfied',
      intro:'gjgj hfhg gfghf uuyiu uyuiy gcgc gghj kjkhjhjkh kjhkjh jhjkh hjkh jhjkh vbnv hhj ghjg jghjh '
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'underserved',
      intro:'ghjgh hjbhj  gasajhjgd iiuwye sajhshgad gdjhdga dgjagd xgxhgc sagdjhsag sdgsdgj asdgjsagd jhhagdsjas dshd dgjhgdsa'

    },
    {
      img:'https://media.istockphoto.com/id/1308543576/photo/young-business-woman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=qQVbOo7H8dxI04PkfuHFJEvc6GvTlfCMThZeqgny_2k=',
      tag:'underbanked',
      intro:'ggdjhsh dgjshdgdhs jgdjas jasgdjag gsdshagd diuwqye csdyudasy dyduy cgjhsgf gdsjgfhjdgf'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
      
    </div>
  )
}

export default App;