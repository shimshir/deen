import React from 'react'
import FilterLinkCont from './stateful/filterLinkCont'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../visibilityFilters'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLinkCont filter={SHOW_ALL}>
      All
    </FilterLinkCont>
    {", "}
    <FilterLinkCont filter={SHOW_ACTIVE}>
      Active
    </FilterLinkCont>
    {", "}
    <FilterLinkCont filter={SHOW_COMPLETED}>
      Completed
    </FilterLinkCont>
  </p>
)

export default Footer
