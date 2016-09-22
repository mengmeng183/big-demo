import React from 'react';
import {Link} from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        width:'96%',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius:'10px',
        margin:'0 auto',
        marginTop:'20px'
      },
      indexBox:{
        backgroundColor:'#00BCD4',
        height:'100px',
        borderRadius:'10px 10px 0 0',
        display:'flex',
        alignItems:'center'
      },
      index:{
        display:'block',
        width:'60px',
        heigth:'60px',
        color:"#fff",
        fontSize:"20px",
        border:'2px solid #fff',
        borderRadius:'50%',
        textAlign:'center',
        lineHeight:'60px',
        margin:'0 auto'
      },
      title:{
        fontSize:'18px',
        color:'#727272'
      },
      desc:{
        lineHeight:'1.8',
        color:'#727272',
        marginBottom:'20px'
      },
      btn:{
        border:'1px solid #FF4081',
        padding:'5px 20px',
        borderRadius:'20px',
        textDecoration:'none',
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.indexBox}>
          <span style={styles.index}>1</span>
        </div>
        <div style={{padding:'10px 10px 30px 10px'}}>
          <p style={styles.title}>我是标题</p>
          <p style={styles.desc}>我是内容</p>
          <a style={styles.btn} className='blogBtn'>阅读更多</a>
        </div>
      </div>
    )
  }
}

export default BlogCard;
