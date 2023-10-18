import React from 'react'
import css from './Section.module.css'
import PropTypes from 'prop-types'

const Section = ({title, children}) => {
    return (
        <section>  
         <h2 className={css.header}>{title}</h2>
         {children}
        </section>
    )
}

Section.propTypes = {
 title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default Section