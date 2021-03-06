import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const PaginationWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }  
`
const PaginationItem = styled.li`
  a:link, a:visited {
    color: #fff;
    padding-bottom: 1px;
  }
  a:hover, a:active, a:focus {
    border-bottom: 2px solid #fff;
  }

  span {
    display: inline-block;
    font-family: -apple-system,BlinkMacSystemFont;
  }
`

const Pagination = props => (

  <PaginationWrap>
    <PaginationItem>
      <Link to={props.linkBefore}><span>&larr;</span> Before</Link>
    </PaginationItem>
    <PaginationItem>
      <Link to={props.linkMore}>More <span>&rarr;</span></Link>
    </PaginationItem>
  </PaginationWrap>

)

export default Pagination


